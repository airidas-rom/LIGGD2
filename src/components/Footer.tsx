import { Mail, Phone, MapPin, Facebook, Linkedin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from 'figma:asset/78ff2f6aa0ccd383528fa86358cde2c1c82150b8.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  const footerLinks = {
    draugija: [
      { label: t('footer_about_us'), path: '/apie-mus' },
      { label: t('activity'), path: '/veikla' },
      { label: t('footer_membership'), path: '/kontaktai' },
      { label: t('statute'), path: '/istatai' },
    ],
    veikla: [
      { label: t('footer_events'), path: '/veikla' },
      { label: t('footer_conferences'), path: '/konferenciju-leidiniai' },
      { label: t('footer_news'), path: '/naujienos' },
      { label: t('for_members'), path: '/nariams' },
    ],
    informacija: [
      { label: t('footer_contacts'), path: '/kontaktai' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src={logo} alt="LIGGD Logo" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="text-white">LIGGD</div>
                <div className="text-sm text-gray-300">{t('footer_engineering_society')}</div>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('footer_description')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Globe].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white mb-4">{t('footer_about')}</h4>
            <ul className="space-y-3">
              {footerLinks.draugija.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">{t('footer_activity')}</h4>
            <ul className="space-y-3">
              {footerLinks.veikla.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">{t('footer_information')}</h4>
            <ul className="space-y-3">
              {footerLinks.informacija.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-y border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-400">{t('footer_email_label')}</div>
              <a href="mailto:info@liggd.lt" className="text-white hover:text-gray-300 transition-colors">
                info@liggd.lt
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-400">{t('footer_phone_label')}</div>
              <a href="tel:+37052744956" className="text-white hover:text-gray-300 transition-colors">
                +370 5 274 4956
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-400">{t('footer_address_label')}</div>
              <div className="text-white">Saulėtekio al. 11, Vilnius</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t('footer_copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}