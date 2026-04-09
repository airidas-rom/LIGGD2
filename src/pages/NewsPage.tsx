import { Calendar, ArrowRight, Award, BookOpen, Users, Trophy } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function NewsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const newsItems = [
    {
      id: 1,
      title: 'LIGGD Nariai Laimėjo Tarptautinį Projektavimo Konkursą',
      date: '2024-11-20',
      category: 'Pasiekimai',
      icon: Award,
      excerpt: 'Mūsų draugijos nariai iškovojo pirmąją vietą prestižiniame tarptautiniame CAD projektavimo konkurse, surengusiame 15 šalių.',
      content: `Džiugu pranešti, kad LIGGD nariai - Vilniaus Gedimino technikos universiteto studentai Tomas Jonaitis ir Inga Petrauskaitė - iškovojo pirmąją vietą tarptautiniame CAD projektavimo konkurse "EuroCAD Challenge 2024".

Konkurse dalyvavo 15 šalių komandos, o mūsų atstovai demonstravo puikius parametrinio modeliavimo įgūdžius ir kūrybiškumą. Konkursas vyko Vienoje, Austrijoje.

Sveikiname nugalėtojus ir džiaugiamės, kad LIGGD nariai reprezentuoja Lietuvą tarptautinėje arenoje!`,
      image: 'award trophy',
    },
    {
      id: 2,
      title: 'Nauja Partnerystė su Europos Geometrijos Asociacija',
      date: '2024-10-15',
      category: 'Partnerystės',
      icon: Users,
      excerpt: 'Pasirašyta bendradarbiavimo sutartis, kuri atvers naujas galimybes moksliniam bendradarbiavimui ir mainų programoms.',
      content: `LIGGD oficialiai tapo Europos Geometrijos Asociacijos (EGA) partneriu. Bendradarbiavimo sutartis pasirašyta spalio 15 d. Briuselyje vykusiame EGA metiniame susitikime.

Partnerystė apima:
• Bendrų mokslinių projektų vykdymą
• Studentų ir dėstytojų mainų programas
• Bendras konferencijas ir seminarus
• Leidinių mainus

Tai svarbus žingsnis stiprinant LIGGD tarptautinius ryšius ir plečiant galimybes mūsų nariams.`,
      image: 'partnership handshake',
    },
    {
      id: 3,
      title: 'Išleista Nauja Metodinė Medžiaga CAD Dėstytojams',
      date: '2024-09-30',
      category: 'Leidiniai',
      icon: BookOpen,
      excerpt: 'Parengta ir išleista išsami metodinė medžiaga, skirta CAD/CAM technologijų dėstymui aukštojo mokslo institucijose.',
      content: `LIGGD išleido naują metodinę medžiagą "CAD/CAM Sistemos Šiuolaikiniame Inžineriniame Išsilavivime". 

Medžiagoje:
• 12 skyrių apie įvairias CAD sistemas
• Praktinės užduotys su sprendimais
• Vertinimo kriterijai ir metodika
• QR kodai su papildoma medžiaga

Leidinys prieinamas nemokamai visiems LIGGD nariams. Jį parengė 8 autorių komanda iš skirtingų Lietuvos universitetų.`,
      image: 'books education',
    },
    {
      id: 4,
      title: 'Sėkminga Vasaros Mokykla Jauniesiems Tyrėjams',
      date: '2024-07-25',
      category: 'Renginiai',
      icon: Trophy,
      excerpt: 'Užsibaigė dviejų savaičių vasaros mokykla, kurioje dalyvavo 45 studentai ir jauni mokslininkai iš visos Lietuvos.',
      content: `Liepos 8-19 dienomis Klaipėdos universitete vyko LIGGD organizuota vasaros mokykla "Pažangūs Geometrinio Modeliavimo Metodai".

Programą sudarė:
• Paskaitų ciklas apie naujausias geometrinio modeliavimo technologijas
• Praktiniai workshop'ai su SolidWorks, CATIA, AutoCAD
• Mokslinių tyrimų metodologijos kursas
• Projektų pristatymai

Dalyvavo 45 studentai iš VGTU, KTU, VU, KU ir kitų universitetų. Geriausi projektai bus pristatyti metinėje LIGGD konferencijoje.`,
      image: 'summer school students',
    },
    {
      id: 5,
      title: 'LIGGD Atstovai Dalyvavo Tarptautinėje Konferencijoje Danijoje',
      date: '2024-06-12',
      category: 'Konferencijos',
      icon: Users,
      excerpt: 'LIGGD delegacija pristatė 5 mokslinius pranešimus tarptautinėje geometrijos konferencijoje Kopenhagoje.',
      content: `Birželio 10-12 dienomis Kopenhagoje, Danijoje, vyko tarptautinė konferencija "Computational Geometry and Applications 2024".

LIGGD atstovai pristatė pranešimus temomis:
• Parametrinio modeliavimo optimizacijos algoritmai
• Geometrinio modeliavimo taikymas biomedicinoje
• Virtualios realybės integracijos su CAD sistemomis
• Dirbtinio intelekto panaudojimas techniniuose brėžiniuose

Visi pranešimai buvo labai gerai įvertinti tarptautinės mokslinės bendruomenės.`,
      image: 'international conference',
    },
    {
      id: 6,
      title: 'Atnaujinta LIGGD Interneto Svetainė',
      date: '2024-05-08',
      category: 'Naujienos',
      icon: BookOpen,
      excerpt: 'Pristatome visiškai atnaujintą LIGGD interneto svetainę su moderniu dizainu ir papildomomis funkcijomis.',
      content: `Džiaugiamės pristatydami atnaujintą LIGGD interneto svetainę!

Naujienos:
• Modernizuotas dizainas ir geresnė navigacija
• Pritaikyta mobiliesiems įrenginiams
• Nariams - specialus portalas su mokomąja medžiaga
• Interaktyvus renginių kalendorius
• Integruota narių registracijos forma

Dėkojame visiems, prisidėjusiems prie šio projekto!`,
      image: 'website design',
    },
  ];

  const categories = [
    { id: 'all', label: t('news_all') },
    { id: 'Pasiekimai', label: t('news_achievements') },
    { id: 'Partnerystės', label: t('news_partnerships') },
    { id: 'Leidiniai', label: t('news_publications') },
    { id: 'Renginiai', label: t('news_events') },
    { id: 'Konferencijos', label: t('news_conferences') },
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('news_title')}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('news_subtitle')}
            </p>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>

      {/* Smooth Gradient Transition blending into Categories */}
      <div className="relative bg-gradient-to-b from-[#5B2232] via-[#6B2C3E]/20 to-white pb-8">
        <svg className="absolute top-0 w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 Q360,20 720,50 T1440,50 L1440,0 L0,0 Z" fill="#5B2232" opacity="0.8"/>
          <path d="M0,60 Q360,30 720,60 T1440,60 L1440,0 L0,0 Z" fill="#6B2C3E" opacity="0.5"/>
          <path d="M0,70 Q360,40 720,70 T1440,70 L1440,0 L0,0 Z" fill="#8B3A4E" opacity="0.3"/>
        </svg>
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

        {/* Categories inside the transition */}
        <div className="container mx-auto px-4 pt-24 relative z-10">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base shadow-sm ${
                  activeCategory === cat.id
                    ? 'bg-[#6B2C3E] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#6B2C3E] cursor-pointer"
                  onClick={() => setSelectedNews(item)}
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/800x600/?${item.image}`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="text-[#6B2C3E]" size={24} />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-[#6B2C3E]/10 text-[#6B2C3E] rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar size={16} />
                        <span>{new Date(item.date).toLocaleDateString('lt-LT')}</span>
                      </div>
                    </div>

                    <h3 className="text-gray-900 leading-tight line-clamp-2 group-hover:text-[#6B2C3E] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed line-clamp-3">{item.excerpt}</p>

                    <div className="flex items-center gap-2 text-[#6B2C3E] group-hover:gap-3 transition-all">
                      {t('news_read_more')}
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">{t('news_no_news')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl text-white mb-4">{t('news_newsletter_title')}</h2>
              <p className="text-gray-200 mb-8 leading-relaxed">
                {t('news_newsletter_desc')}
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder={t('news_newsletter_placeholder')}
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-[#6B2C3E] rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
                >
                  {t('news_newsletter_submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for full news */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
              <ImageWithFallback
                src={`https://source.unsplash.com/1200x600/?${selectedNews.image}`}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#6B2C3E] text-white rounded-full text-sm">
                  {selectedNews.category}
                </span>
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar size={16} />
                  <span>{new Date(selectedNews.date).toLocaleDateString('lt-LT')}</span>
                </div>
              </div>

              <h2 className="text-3xl text-gray-900 mb-6">{selectedNews.title}</h2>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedNews.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}