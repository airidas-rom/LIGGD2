import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'figma:asset/78ff2f6aa0ccd383528fa86358cde2c1c82150b8.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNariamsOpen, setIsNariamsOpen] = useState(false);
  const { currentLang, setCurrentLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsNariamsOpen(false);
  }, [location]);

  const navItems = [
    { label: t('about_us'), path: '/apie-mus' },
    { label: t('conference_proceedings'), path: '/konferenciju-leidiniai' },
    { label: t('activity'), path: '/veikla' },
    { label: t('news_title'), path: '/naujienos' },
    { label: t('statute'), path: '/istatai' },
  ];

  const nariamsSubmenu = [
    { label: t('recommended_standards'), path: '/rekomenduotini-standartai' },
    { label: t('educational_materials'), path: '/mokomosios-priemones' },
  ];

  const externalLinks = [
    { label: 'DIAD TOOLS', url: 'https://liggd.lt/diad-tools' },
    { label: 'SPACAR', url: 'https://liggd.lt/spacar/lt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-[#6B2C3E] via-[#8B3A4E] to-[#6B2C3E] shadow-lg' : 'bg-gradient-to-r from-[#6B2C3E] via-[#8B3A4E] to-[#6B2C3E]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="LIGGD Logo" className="w-12 h-12 object-contain transition-transform group-hover:scale-105 drop-shadow-lg" />
            <div>
              <div className="text-2xl tracking-tight text-white" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>LIGGD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white/90 hover:text-white transition-colors relative group ${
                  location.pathname === item.path ? 'text-white' : ''
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
            
            {/* Nariams Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsNariamsOpen(!isNariamsOpen)}
                onMouseEnter={() => setIsNariamsOpen(true)}
                className={`text-white/90 hover:text-white transition-colors flex items-center gap-1 group ${
                  location.pathname === '/nariams' ? 'text-white' : ''
                }`}
              >
                {t('for_members')}
                <ChevronDown size={16} className={`transition-transform ${isNariamsOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all ${
                    location.pathname === '/nariams' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
              
              {isNariamsOpen && (
                <div
                  className="absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]"
                  onMouseLeave={() => setIsNariamsOpen(false)}
                >
                  <Link
                    to="/nariams"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#6B2C3E] hover:text-white transition-colors"
                  >
                    {t('for_members')}
                  </Link>
                  {nariamsSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#6B2C3E] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {externalLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all w-0 group-hover:w-full"></span>
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 ml-4 border-l border-white/20 pl-4">
              <button
                onClick={() => setCurrentLang('lt')}
                className={`w-7 h-5 rounded overflow-hidden border transition-all ${
                  currentLang === 'lt' ? 'border-white opacity-100 shadow-md' : 'border-white/40 opacity-60 hover:opacity-80'
                }`}
                title="Lietuviška versija"
              >
                <div className="w-full h-full flex flex-col">
                  <div className="h-1/3 bg-[#FDB913]"></div>
                  <div className="h-1/3 bg-[#006A44]"></div>
                  <div className="h-1/3 bg-[#C1272D]"></div>
                </div>
              </button>
              <button
                onClick={() => setCurrentLang('en')}
                className={`w-7 h-5 rounded overflow-hidden border transition-all ${
                  currentLang === 'en' ? 'border-white opacity-100 shadow-md' : 'border-white/40 opacity-60 hover:opacity-80'
                }`}
                title="English version"
              >
                {/* UK Flag (Union Jack) */}
                <div className="w-full h-full relative bg-[#012169]">
                  {/* White diagonals */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 60 30" className="w-full h-full">
                      {/* White background diagonals */}
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="white" strokeWidth="6"/>
                      {/* Red diagonals */}
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                      {/* White cross */}
                      <path d="M0,15 L60,15 M30,0 L30,30" stroke="white" strokeWidth="10"/>
                      {/* Red cross */}
                      <path d="M0,15 L60,15 M30,0 L30,30" stroke="#C8102E" strokeWidth="6"/>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Nariams */}
            <div>
              <button
                onClick={() => setIsNariamsOpen(!isNariamsOpen)}
                className="w-full flex items-center justify-between py-3 text-white/90 hover:text-white hover:bg-white/10 px-4 rounded-lg transition-colors"
              >
                {t('for_members')}
                <ChevronDown size={16} className={`transition-transform ${isNariamsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isNariamsOpen && (
                <div className="ml-4 mt-1">
                  <Link
                    to="/nariams"
                    className="block py-2 text-white/80 hover:text-white px-4"
                  >
                    {t('for_members')}
                  </Link>
                  {nariamsSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 text-white/80 hover:text-white px-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {externalLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-3 px-4 py-3 mt-2 border-t border-white/20">
              <span className="text-sm text-white/80">{t('language')}</span>
              <button
                onClick={() => setCurrentLang('lt')}
                className={`px-3 py-1 rounded transition-all ${
                  currentLang === 'lt' ? 'bg-white text-[#6B2C3E]' : 'bg-white/20 text-white'
                }`}
              >
                LT
              </button>
              <button
                onClick={() => setCurrentLang('en')}
                className={`px-3 py-1 rounded transition-all ${
                  currentLang === 'en' ? 'bg-white text-[#6B2C3E]' : 'bg-white/20 text-white'
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}