import React, { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from 'react';

interface Track {
  src: string;
  title: string;
}

const tracks: Track[] = [
  { src: '/audio/track-1-grand-wedding.mpeg', title: 'Grand Wedding' },
  { src: '/audio/track-2-sun-drenched-mithila.mpeg', title: 'Sun Drenched Mithila' },
  { src: '/audio/track-3-sun-lit-mithila.mpeg', title: 'Sun Lit Mithila' },
  { src: '/audio/track-4-sunlit-courtyard.mpeg', title: 'Sunlit Courtyard' },
];

interface AudioContextType {
  isPlaying: boolean;
  currentTrackIndex: number;
  currentTrack: Track;
  volume: number;
  isMuted: boolean;
  trackProgress: number;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setProgress: (progress: number) => void;
  tracks: Track[];
}

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolumeState] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Refs to hold latest values for event listener closures
  const playNextRef = useRef<() => void>(() => {});
  const loadTrackRef = useRef<(index: number) => void>(() => {});
  const isPlayingRef = useRef(false);

  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);

  const loadTrack = useCallback((index: number) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const wasPlaying = isPlayingRef.current;
    audio.src = tracks[index].src;
    audio.load();
    setCurrentTrackIndex(index);
    setTrackProgress(0);
    setCurrentTime(0);
    setDuration(0);
    if (wasPlaying) {
      const onCanPlay = () => {
        audio.removeEventListener('canplaythrough', onCanPlay);
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      };
      audio.addEventListener('canplaythrough', onCanPlay);
    }
  }, []);

  const playNext = useCallback(() => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrackRef.current(nextIndex);
  }, [currentTrackIndex]);

  const playPrevious = useCallback(() => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrackRef.current(prevIndex);
  }, [currentTrackIndex]);

  // Keep refs in sync with latest functions
  useEffect(() => { playNextRef.current = playNext; }, [playNext]);
  useEffect(() => { loadTrackRef.current = loadTrack; }, [loadTrack]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.volume = volume;
    audioRef.current = audio;

    // Load initial track
    audio.src = tracks[0].src;
    audio.load();

    const handleEnded = () => {
      playNextRef.current();
    };

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setTrackProgress(audio.currentTime / audio.duration);
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      if (audio.duration) {
        setDuration(audio.duration);
      }
    };

    const handleError = () => {
      console.warn('Audio error, skipping to next track');
      playNextRef.current();
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioRef.current.muted = newMuted;
  }, [isMuted]);

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  }, [isMuted]);

  const setProgress = useCallback((progress: number) => {
    if (!audioRef.current?.duration) return;
    audioRef.current.currentTime = progress * audioRef.current.duration;
  }, []);

  return (
    <AudioContext.Provider value={{
      isPlaying,
      currentTrackIndex,
      currentTrack,
      volume,
      isMuted,
      trackProgress,
      currentTime,
      duration,
      togglePlay,
      playNext,
      playPrevious,
      setVolume,
      toggleMute,
      setProgress,
      tracks,
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
