import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Globe, Clock } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    membershipInterest: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact_form_success'));
    setFormData({ name: '', email: '', subject: '', message: '', membershipInterest: false });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact_email'),
      content: 'info@liggd.lt',
      link: 'mailto:info@liggd.lt',
      description: t('contact_email_desc'),
    },
    {
      icon: Phone,
      title: t('contact_phone'),
      content: '+370 5 274 4956',
      link: 'tel:+37052744956',
      description: t('contact_phone_desc'),
    },
    {
      icon: MapPin,
      title: t('contact_address'),
      content: 'Saulėtekio al. 11, LT-10223 Vilnius, Lietuva',
      link: null,
      description: t('contact_address_desc'),
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-700' },
    { icon: Globe, label: 'Website', href: '#', color: 'hover:bg-gray-700' },
  ];

  const officeHours = [
    { day: t('contact_office_hours_mon_thu'), hours: '9:00 - 17:00' },
    { day: t('contact_office_hours_friday'), hours: '9:00 - 16:00' },
    { day: t('contact_office_hours_lunch'), hours: '12:00 - 13:00' },
    { day: t('contact_office_hours_weekend'), hours: t('contact_office_hours_closed') },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('contact_title')}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('contact_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#6B2C3E] transition-all hover:shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{info.description}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-[#6B2C3E] hover:text-[#8B4A5C] transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <div className="text-gray-700">{info.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl text-gray-900 mb-6">{t('contact_form_title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    {t('contact_form_name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    {t('contact_form_email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    {t('contact_form_subject')}
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                    required
                  >
                    <option value="">{t('contact_form_subject_placeholder')}</option>
                    <option value="membership">{t('contact_form_subject_membership')}</option>
                    <option value="events">{t('contact_form_subject_events')}</option>
                    <option value="publications">{t('contact_form_subject_publications')}</option>
                    <option value="collaboration">{t('contact_form_subject_collaboration')}</option>
                    <option value="other">{t('contact_form_subject_other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    {t('contact_form_message')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="membership"
                    checked={formData.membershipInterest}
                    onChange={(e) => setFormData({ ...formData, membershipInterest: e.target.checked })}
                    className="mt-1 w-5 h-5 text-[#6B2C3E] border-gray-300 rounded focus:ring-[#6B2C3E]"
                  />
                  <label htmlFor="membership" className="text-gray-700 text-sm">
                    {t('contact_form_membership_checkbox')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#6B2C3E] to-[#8B4A5C] text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  {t('contact_form_submit')}
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-[#6B2C3E]" size={24} />
                  </div>
                  <h3 className="text-xl text-gray-900">{t('contact_office_hours')}</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{item.day}</span>
                      <span className="text-gray-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded-2xl p-8 text-white">
                <h3 className="text-xl text-white mb-4">{t('contact_follow_us')}</h3>
                <p className="text-gray-200 mb-6">
                  {t('contact_follow_desc')}
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all ${social.color}`}
                        aria-label={social.label}
                        title={social.label}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}\n                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-[#6B2C3E] mx-auto mb-3" />
                    <p className="text-gray-600">Saulėtekio al. 11</p>
                    <p className="text-gray-600">Vilnius, Lietuva</p>
                    <a
                      href="https://maps.google.com/?q=Saulėtekio+al.+11+Vilnius"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[#6B2C3E] hover:text-[#8B4A5C] transition-colors"
                    >
                      {t('contact_open_map')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">{t('contact_faq_title')}</h2>
            
            <div className="space-y-4">
              {[
                { q: t('contact_faq_q1'), a: t('contact_faq_a1') },
                { q: t('contact_faq_q2'), a: t('contact_faq_a2') },
                { q: t('contact_faq_q3'), a: t('contact_faq_a3') },
                { q: t('contact_faq_q4'), a: t('contact_faq_a4') },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-gray-900">{faq.q}</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}