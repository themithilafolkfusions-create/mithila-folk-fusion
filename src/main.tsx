import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/i18n";
import App from "./App";

if (typeof window !== 'undefined') {
  // Block right-click on images/video only
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.closest('img, video')) {
      e.preventDefault();
    }
  });
  // Block drag on images/video only
  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO') e.preventDefault();
  });
  // Mobile: block iOS gesture events on images
  document.addEventListener('gesturestart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.closest('[class*="gallery"], [class*="lightbox"], [class*="portfolio"]')) {
      e.preventDefault();
    }
  }, { passive: false });
  // Mobile: block iOS 3D Touch on images
  document.addEventListener('touchforcechange', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') e.preventDefault();
  }, { passive: false });
  // Mobile: intercept long-press on images before contextmenu fires
  let lpTimer: ReturnType<typeof setTimeout> | null = null;
  document.addEventListener('touchstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO') {
      lpTimer = setTimeout(() => e.preventDefault(), 200);
    }
  }, { passive: false });
  document.addEventListener('touchend', () => { if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; } });
  document.addEventListener('touchmove', () => { if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; } });
  // Blur page on tab switch (screenshot protection)
  const setBlurred = (blurred: boolean) => {
    document.documentElement.classList.toggle('page-blurred', blurred);
  };
  document.addEventListener('visibilitychange', () => setBlurred(document.hidden));
  window.addEventListener('blur', () => setBlurred(true));
  window.addEventListener('focus', () => setBlurred(false));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
