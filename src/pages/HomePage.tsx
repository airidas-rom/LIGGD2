import { ArrowRight, Users, Award, BookOpen, Calendar, FileText, Bell, Ruler, Shapes, Grid3X3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logo from 'figma:asset/78ff2f6aa0ccd383528fa86358cde2c1c82150b8.png';
import { useLanguage } from '../contexts/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();
  
  const upcomingEvents = [
    {
      title: t('event_contest_title'),
      date: '2025-04-14',
      endDate: '2025-05-23',
      type: t('home_contest'),
      description: t('event_contest_desc'),
    },
    {
      title: t('event_conf_title'),
      date: '2025-05-15',
      type: t('home_conference'),
      description: t('event_conf_desc'),
    },
    {
      title: t('event_cad_title'),
      date: '2025-03-20',
      type: t('home_seminar'),
      description: t('event_cad_desc'),
    },
  ];

  const quickLinks = [
    { title: t('home_about_society'), icon: Users, path: '/apie-mus' },
    { title: t('home_activities_events'), icon: Calendar, path: '/veikla' },
    { title: t('conference_proceedings'), icon: BookOpen, path: '/konferenciju-leidiniai' },
    { title: t('for_members'), icon: FileText, path: '/nariams' },
  ];

  const newsItems = [
    {
      title: t('news_1_title'),
      date: '2024-10-15',
      excerpt: t('news_1_excerpt'),
    },
    {
      title: t('news_2_title'),
      date: '2024-09-30',
      excerpt: t('news_2_excerpt'),
    },
  ];

  return (
    <div className="pt-20">
      {/* HERO SECTION - Engineering Graphics Themed */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] via-[#8B3A4E] to-[#5B2232] text-white overflow-hidden -mt-20 pt-20">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Geometric Shapes - Engineering Graphics Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Technical drawing circles */}
          <div className="absolute top-10 right-20 w-64 h-64 border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-16 right-26 w-52 h-52 border-2 border-white/10 rounded-full"></div>
          
          {/* Grid lines - mimicking technical drawings */}
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-white/10">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10"></div>
            {/* Diagonal construction lines */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-px bg-white/5" style={{ transform: 'rotate(45deg)', transformOrigin: 'top left' }}></div>
            </div>
          </div>

          {/* Isometric cube outline */}
          <div className="absolute bottom-20 right-32 w-40 h-40 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full" stroke="white" fill="none" strokeWidth="1">
              {/* Isometric cube */}
              <path d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" />
              <path d="M50,10 L50,50" />
              <path d="M10,30 L50,50" />
              <path d="M90,30 L50,50" />
              <path d="M50,50 L50,90" />
              <path d="M50,50 L90,70" />
              <path d="M50,50 L10,70" />
            </svg>
          </div>

          {/* Technical dimension arrows */}
          <div className="absolute top-1/2 left-5 w-24 opacity-10">
            <svg viewBox="0 0 100 20" className="w-full" fill="white">
              <line x1="0" y1="10" x2="100" y2="10" stroke="white" strokeWidth="1"/>
              <polygon points="0,10 8,6 8,14"/>
              <polygon points="100,10 92,6 92,14"/>
            </svg>
          </div>

          {/* Compass rose - geometry symbol */}
          <div className="absolute bottom-10 left-20 w-20 h-20 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="white">
              <circle cx="50" cy="50" r="45" stroke="white" fill="none" strokeWidth="1"/>
              <path d="M50,5 L50,95 M5,50 L95,50" stroke="white" strokeWidth="1"/>
              <circle cx="50" cy="50" r="3" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content Side */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                  <Ruler size={16} className="text-white" />
                  <span className="text-sm text-white/90">{t('home_founded')}</span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  {t('home_title')}
                </h1>
                
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                  {t('home_description')}
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-5">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Users size={18} className="text-white sm:w-5 sm:h-5" />
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>40</div>
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">{t('home_members')}</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-5">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Award size={18} className="text-white sm:w-5 sm:h-5" />
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>2006</div>
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">{t('home_founded').replace('Įkurta ', '').replace('Founded in ', '').replace('Founded September 8, ', '').replace('rugsėjo 8 d.', '')}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-8 lg:mb-0">
                  <Link
                    to="/apie-mus"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#6B2C3E] rounded-xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
                    style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '1.125rem' }}
                  >
                    {t('home_learn_more')}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/veikla"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all border border-white/30 hover:border-white/50"
                    style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '1.125rem' }}
                  >
                    {t('home_view_activities')}
                  </Link>
                </div>
              </div>

              {/* Logo Side with Technical Graphics */}
              <div className="relative lg:pl-12 px-8 lg:px-0">
                {/* Main Logo Container */}
                <div className="relative max-w-sm lg:max-w-lg mx-auto">
                  {/* Technical drawing frame */}
                  <div className="absolute -inset-6 lg:-inset-12 border-2 border-white/20 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)'
                  }}>
                    {/* Corner markers - like technical drawings */}
                    <div className="absolute top-0 left-0 w-4 h-4 lg:w-6 lg:h-6 border-t-2 border-l-2 border-white/40"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 lg:w-6 lg:h-6 border-t-2 border-r-2 border-white/40"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 lg:w-6 lg:h-6 border-b-2 border-l-2 border-white/40"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 lg:w-6 lg:h-6 border-b-2 border-r-2 border-white/40"></div>
                  </div>

                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                  
                  {/* Logo */}
                  <img 
                    src={logo} 
                    alt="LIGGD Logo" 
                    className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-contain relative z-10 drop-shadow-2xl mx-auto" 
                  />

                  {/* Geometric decoration badges - hidden on small screens */}
                  <div className="hidden sm:flex absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-16 h-16 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl items-center justify-center shadow-xl">
                    <Shapes size={24} className="text-white lg:w-10 lg:h-10" />
                  </div>
                  <div className="hidden sm:flex absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-16 h-16 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl items-center justify-center shadow-xl">
                    <Grid3X3 size={24} className="text-white lg:w-10 lg:h-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>

      {/* Smooth Gradient Transition - Extended and Smoother */}
      <div className="relative h-32 bg-gradient-to-b from-[#5B2232] via-[#6B2C3E]/40 to-transparent">
        {/* Multiple wave layers for smooth transition */}
        <svg className="absolute top-0 w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 Q360,20 720,50 T1440,50 L1440,0 L0,0 Z" fill="#5B2232" opacity="0.8"/>
          <path d="M0,60 Q360,30 720,60 T1440,60 L1440,0 L0,0 Z" fill="#6B2C3E" opacity="0.5"/>
          <path d="M0,70 Q360,40 720,70 T1440,70 L1440,0 L0,0 Z" fill="#8B3A4E" opacity="0.3"/>
        </svg>
        
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FAFAF9]"></div>
        
        {/* Technical grid fading out */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(107,44,62,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,44,62,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
          }}></div>
        </div>
      </div>

      {/* Quick Links Section */}
      <section className="py-16 bg-[#FAFAF9] -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#6B2C3E] hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6B2C3E] transition-colors">
                    <link.icon size={24} className="text-[#6B2C3E] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg text-gray-900 group-hover:text-[#6B2C3E] transition-colors" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}>
                    {link.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                {t('home_upcoming_events')}
              </h2>
              <Link
                to="/veikla"
                className="text-[#6B2C3E] hover:text-[#8B4A5C] flex items-center gap-2 group"
              >
                {t('home_view_all')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] p-6">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white mb-3">
                      {event.type}
                    </div>
                    <h3 className="text-xl text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}>
                      {event.title}
                    </h3>
                    <div className="text-sm text-white/80">
                      {new Date(event.date).toLocaleDateString('lt-LT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('lt-LT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}`}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                {t('home_latest_news')}
              </h2>
              <Link
                to="/naujienos"
                className="text-[#6B2C3E] hover:text-[#8B4A5C] flex items-center gap-2 group"
              >
                {t('home_view_all')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#6B2C3E] hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#6B2C3E] transition-colors">
                      <Bell size={20} className="text-[#6B2C3E] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">
                        {new Date(news.date).toLocaleDateString('lt-LT', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <h3 className="text-xl text-gray-900 mb-2 group-hover:text-[#6B2C3E] transition-colors" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}>
                        {news.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
              {t('home_join_cta')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home_join_description')}
            </p>
            <Link
              to="/nariams"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#6B2C3E] rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
              style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '1.25rem' }}
            >
              {t('home_become_member')}
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}