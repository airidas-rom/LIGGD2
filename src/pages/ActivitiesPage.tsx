import { Calendar, MapPin, ExternalLink, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import competitionImage from 'figma:asset/eb60472e75fbd8914638b30f90b538e26475b8ca.png';
import { useLanguage } from '../contexts/LanguageContext';

export function ActivitiesPage() {
  const { t, currentLang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const activities = [
    {
      id: 1,
      title: 'Nacionalinis konkursas "Standartas - brėžinio kokybės garantas 2025"',
      description: 'Kviečiame universitetų, kolegijų, gimnazijų ir profesinio mokymo įstaigų techninių specialybių studentus ir mokinius dalyvauti nacionaliniame inžinerinės ir kompiuterinės grafikos konkurse.',
      fullDescription: `Konkurso pradžia – 2025 m. balandžio 14 d.
Konkurso darbų pateikimo galutinė data – 2025 m. gegužės 16 d.
Konkurso rezultatų skelbimas – 2025 m. gegužės 23 d.

Pridedama:
1. Nacionalinio konkurso "Standartas - brėžinio kokybės garantas 2025" nuostatai
2. Nacionalinio konkurso "Standartas - brėžinio kokybės garantas 2025" užduotis
3. Nacionalinio konkurso "Standartas - brėžinio kokybės garantas 2025" darbų vertinimo kriterijai`,
      date: '2025-04-14',
      endDate: '2025-05-23',
      location: 'Visos Lietuvos mokymo įstaigos',
      category: 'Konkursas',
      status: 'upcoming',
      image: competitionImage,
      registrationLink: '#',
      documents: [
        { name: 'Nuostatai', url: '#' },
        { name: 'Užduotis', url: '#' },
        { name: 'Vertinimo kriterijai', url: '#' },
      ],
    },
    {
      id: 2,
      title: 'Metinė Nacionalinė Konferencija 2025',
      description: 'Kasmetinė konferencija, skirta inžinerinės grafikos ir geometrijos aktualijoms aptarti. Pranešimai, diskusijos ir tinklaveika su kolegomis iš visos Lietuvos.',
      fullDescription: `Konferencijos programa apims:
• Mokslines pranešimus
• Posterių sesijas
• Workshopus naujausių CAD/CAM technologijų tema
• Diskusijas apie inžinerinės grafikos dėstymo metodikas
• Tinklaveikos galimybes

Dalyvavimas konferencijoje yra nemokamas LIGGD nariams.`,
      date: '2025-05-15',
      endDate: '2025-05-15',
      location: 'Vilniaus Gedimino Technikos Universitetas',
      category: 'Konferencija',
      status: 'upcoming',
      image: 'conference engineering',
      registrationLink: '#',
      documents: [
        { name: 'Konferencijos programa', url: '#' },
        { name: 'Pranešėjų gairės', url: '#' },
      ],
    },
    {
      id: 3,
      title: 'CAD/CAM Technologijų Seminaras',
      description: 'Praktinis seminaras apie naujausias kompiuterinio projektavimo technologijas. Išmoksite naudotis naujausiais įrankiais ir metodais.',
      fullDescription: `Seminaro temos:
• Parametrinio modeliavimo naujovės
• 3D spausdinimo integracijos su CAD sistemomis
• Virtualios realybės pritaikymas projektavime
• Debesų technologijų panaudojimas komandiniame darbe

Seminaro dalyviai gaus dalyvavimo pažymėjimus.`,
      date: '2025-03-20',
      endDate: '2025-03-20',
      location: 'Kauno Technologijos Universitetas',
      category: 'Seminaras',
      status: 'upcoming',
      image: 'technology workshop',
      registrationLink: '#',
      documents: [],
    },
    {
      id: 4,
      title: 'Studentų Mokslinių Darbų Konkursas',
      description: 'Kasmetinis konkursas, skirtas studentų mokslinių tyrimų pristatymui ir įvertinimui. Geriausieji darbai bus apdovanoti.',
      fullDescription: `Konkurso kategorijos:
• Bakalauro studijų studentai
• Magistrantūros studentai
• Doktorantūros studentai

Vertinimo kriterijai:
• Mokslinė naujovė
• Praktinis pritaikomumas
• Darbo kokybė ir pristatymas

Nugalėtojai gaus pinginius prizus ir galimybę publikuoti darbus mūsų leidiniuose.`,
      date: '2025-04-10',
      endDate: '2025-04-10',
      location: 'Online',
      category: 'Konkursas',
      status: 'upcoming',
      image: 'students presentation',
      registrationLink: '#',
      documents: [
        { name: 'Konkurso nuostatai', url: '#' },
      ],
    },
    {
      id: 5,
      title: 'Tarptautinė Geometrijos Diena 2024',
      description: 'Sėkminga tarptautinė konferencija, suvienijusi specialistus iš 12 šalių. Pristatyti naujausi tyrimų rezultatai geometrijos ir kompiuterinės grafikos srityse.',
      fullDescription: `Konferencijoje dalyvavo daugiau nei 150 dalyvių iš 12 šalių.

Pagrindiniai pranešimai:
• Geometrinio modeliavimo algoritmai
• Skaitmeninės geometrijos taikymai
• Kompiuterinė grafika švietimo sektoriuje

Konferencijos medžiaga prieinama LIGGD nariams.`,
      date: '2024-11-15',
      endDate: '2024-11-15',
      location: 'Vilnius',
      category: 'Konferencija',
      status: 'past',
      image: 'international conference',
      registrationLink: null,
      documents: [
        { name: 'Konferencijos medžiaga', url: '#' },
        { name: 'Pranešimų santraukos', url: '#' },
      ],
    },
    {
      id: 6,
      title: 'Vasaros Mokykla Jauniesiems Mokslininkams',
      description: 'Intensyvūs mokymai ir workshopai studentams ir jauniesiems tyrėjams. Skirta gilinti žinias ir įgyti praktinių įgūdžių.',
      fullDescription: `Programos trukmė: 2 savaitės

Mokymo temos:
• Pažangūs projektavimo metodai
• Tyrimų metodologija
• Mokslinių straipsnių rašymas
• Projektų vadyba

Dalyvavo 45 studentai iš įvairių Lietuvos universitetų.`,
      date: '2024-07-01',
      endDate: '2024-07-14',
      location: 'Klaipėdos Universitetas',
      category: 'Mokymai',
      status: 'past',
      image: 'summer school students',
      registrationLink: null,
      documents: [
        { name: 'Programos santrauka', url: '#' },
      ],
    },
  ];

  const filteredActivities = activities.filter(activity => {
    if (activeFilter === 'all') return true;
    return activity.status === activeFilter;
  });

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (startDate === endDate) {
      return start.toLocaleDateString('lt-LT', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    
    return `${start.toLocaleDateString('lt-LT', { month: 'long', day: 'numeric' })} - ${end.toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' })}`;
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('activities_title')}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('activities_subtitle')}
            </p>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>

      {/* Smooth Gradient Transition */}
      <div className="relative h-32 bg-gradient-to-b from-[#5B2232] via-[#6B2C3E]/40 to-transparent">
        <svg className="absolute top-0 w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 Q360,20 720,50 T1440,50 L1440,0 L0,0 Z" fill="#5B2232" opacity="0.8"/>
          <path d="M0,60 Q360,30 720,60 T1440,60 L1440,0 L0,0 Z" fill="#6B2C3E" opacity="0.5"/>
          <path d="M0,70 Q360,40 720,70 T1440,70 L1440,0 L0,0 Z" fill="#8B3A4E" opacity="0.3"/>
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FAFAF9]"></div>
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

      {/* Filters */}
      <section className="bg-[#FAFAF9] border-b border-gray-200 -mt-8 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Filter size={20} className="text-gray-600" />
            <div className="flex gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeFilter === 'all'
                    ? 'bg-[#6B2C3E] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('activities_all_events')}
              </button>
              <button
                onClick={() => setActiveFilter('upcoming')}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeFilter === 'upcoming'
                    ? 'bg-[#6B2C3E] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('activities_upcoming')}
              </button>
              <button
                onClick={() => setActiveFilter('past')}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeFilter === 'past'
                    ? 'bg-[#6B2C3E] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('activities_past')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {filteredActivities.map((activity) => (
              <article
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-[#6B2C3E]"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="lg:col-span-1 relative h-48 lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200">
                    {typeof activity.image === 'string' && activity.image.startsWith('figma:') ? (
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageWithFallback
                        src={typeof activity.image === 'string' ? `https://source.unsplash.com/800x600/?${activity.image}` : activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#6B2C3E] text-white rounded-full text-sm">
                      {activity.category}
                    </div>
                    {activity.status === 'upcoming' && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white rounded-full text-xs">
                        {t('activities_approaching')}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl text-gray-900 mb-3 leading-tight">
                          {activity.title}
                        </h2>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-[#6B2C3E]" />
                            <span>{formatDateRange(activity.date, activity.endDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#6B2C3E]" />
                            <span>{activity.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {activity.description}
                        </p>

                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">
                            {activity.fullDescription}
                          </p>
                        </div>
                      </div>

                      {/* Documents */}
                      {activity.documents.length > 0 && (
                        <div>
                          <h4 className="text-sm text-gray-900 mb-2">{t('activities_documents')}</h4>
                          <div className="flex flex-wrap gap-2">
                            {activity.documents.map((doc, index) => (
                              <a
                                key={index}
                                href={doc.url}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#6B2C3E] hover:text-white transition-all text-sm"
                              >
                                {doc.name}
                                <ExternalLink size={16} />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Registration */}
                      {activity.registrationLink && (
                        <div className="pt-4 border-t">
                          <a
                            href={activity.registrationLink}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6B2C3E] to-[#8B4A5C] text-white rounded-lg hover:shadow-lg transition-all"
                          >
                            {t('activities_register')}
                            <ArrowRight size={20} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">{t('activities_no_events')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}