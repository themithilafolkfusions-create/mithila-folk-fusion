import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionDivider } from './MadhubaniBorder';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  useEffect(() => {
    const painting = searchParams.get('painting');
    if (painting) {
      setFormData(prev => ({
        ...prev,
        subject: 'purchase',
        message: 'I\'m interested in: ' + painting + '\n\n',
      }));
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 md:py-44 bg-cream-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 rangoli-bg pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">{t('contact.sectionLabel')}</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            {t('contact.headingPrefix')} <span className="text-madhubani-red">{t('contact.headingHighlight')}</span>
          </h2>
          <SectionDivider variant="lotus" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div>
              <h3 className="font-cinzel text-2xl text-madhubani-black mb-4">
                {t('contact.title')} <span className="text-madhubani-magenta">{t('contact.titleHighlight')}</span>
              </h3>
              <p className="font-cormorant text-lg text-madhubani-black/60 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: <Mail size={20} />, label: t('contact.emailLabel'), value: t('contact.emailValue'), borderCls: 'border-madhubani-red/30', textCls: 'text-madhubani-red', hoverBgCls: 'group-hover:bg-madhubani-red' },
                { icon: <Phone size={20} />, label: t('contact.phoneLabel'), value: t('contact.phoneValue'), borderCls: 'border-madhubani-teal/30', textCls: 'text-madhubani-teal', hoverBgCls: 'group-hover:bg-madhubani-teal' },
                { icon: <MapPin size={20} />, label: t('contact.locationLabel'), value: t('contact.locationValue'), borderCls: 'border-madhubani-magenta/30', textCls: 'text-madhubani-magenta', hoverBgCls: 'group-hover:bg-madhubani-magenta' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group max-w-md mx-auto">
                  <div className={`w-12 h-12 border ${item.borderCls} flex items-center justify-center ${item.textCls} ${item.hoverBgCls} group-hover:text-cream transition-all duration-300 shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="text-left min-w-0">
                    <p className="font-playfair text-sm text-madhubani-black/50 uppercase tracking-wider">{item.label}</p>
                    <p className="font-cormorant text-lg text-madhubani-black truncate">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="font-playfair text-sm text-madhubani-black/50 uppercase tracking-wider mb-3">{t('contact.followLabel')}</p>
              <div className="flex gap-3 justify-center">
                {[
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, label: 'Instagram', url: 'https://www.instagram.com/mithilafolkfusions' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, label: 'Facebook', url: 'https://www.facebook.com/shivangi.v.singh' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-madhubani-red/30 flex items-center justify-center text-madhubani-red hover:bg-madhubani-red hover:text-cream transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="relative bg-cream border-2 border-madhubani-red/20 p-8 md:p-10">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-madhubani-red -translate-x-0.5 -translate-y-0.5" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-madhubani-red translate-x-0.5 -translate-y-0.5" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-madhubani-red -translate-x-0.5 translate-y-0.5" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-madhubani-red translate-x-0.5 translate-y-0.5" />

              <div className="space-y-5">
                <div>
                  <label className="font-playfair text-sm text-madhubani-black/60 uppercase tracking-wider block mb-2">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-4 bg-cream-light border border-madhubani-red/20 font-cormorant text-lg text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors"
                    placeholder={t('contact.formNamePlaceholder')}
                  />
                </div>

                <div>
                  <label className="font-playfair text-sm text-madhubani-black/60 uppercase tracking-wider block mb-2">
                    {t('contact.formEmail')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-4 bg-cream-light border border-madhubani-red/20 font-cormorant text-lg text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors"
                    placeholder={t('contact.formEmailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="font-playfair text-sm text-madhubani-black/60 uppercase tracking-wider block mb-2">
                    {t('contact.formSubject')}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-4 bg-cream-light border border-madhubani-red/20 font-cormorant text-lg text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors"
                  >
                    <option value="">{t('contact.formSubjectPlaceholder')}</option>
                    <option value="commission">{t('contact.subCommission')}</option>
                    <option value="purchase">{t('contact.subPurchase')}</option>
                    <option value="workshop">{t('contact.subWorkshop')}</option>
                    <option value="exhibition">{t('contact.subExhibition')}</option>
                    <option value="collaboration">{t('contact.subCollaboration')}</option>
                    <option value="other">{t('contact.subOther')}</option>
                  </select>
                </div>

                <div>
                  <label className="font-playfair text-sm text-madhubani-black/60 uppercase tracking-wider block mb-2">
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-cream-light border border-madhubani-red/20 font-cormorant text-lg text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors resize-none"
                    placeholder={t('contact.formMessagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-madhubani-red text-cream font-playfair tracking-wider text-sm uppercase hover:bg-madhubani-crimson transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>{submitted ? t('contact.formSubmitted') : t('contact.formSubmit')}</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-cormorant text-madhubani-teal text-lg"
                  >
                    {t('contact.formThankYou')}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
