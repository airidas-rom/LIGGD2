import { ExternalLink, BookOpen, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function StandardsPage() {
  const { t } = useLanguage();
  
  const standards = [
    'LST 1516:2015/1K:2021 keitinys. Statinio projektas. Bendrieji įforminimo reikalavimai. Lietuvos standartizacijos departamentas.',
    'LST 1516:2015 Statinio projektas. Bendrieji įforminimo reikalavimai. Lietuvos standartizacijos departamentas.',
    'LST EN ISO 128-2:2020 Techniniai gaminių dokumentai. Bendrieji vaizdavimo principai. 2 dalis. Linijoms taikomos pagrindinės nuostatos (ISO 128-2:2020);',
    'LST EN ISO 128-3:2020 Techniniai gaminių dokumentai. Bendrieji vaizdavimo principai. 3 dalis. Vaizdai, kirtiniai ir pjūviai (ISO 128-3:2020);',
    'LST EN ISO 129-1:2019 Techniniai gaminių dokumentai. Matmenų ir leidžiamųjų nuokrypų pateikimas. 1 dalis. Bendrieji principai (ISO 129-1:2018);',
    'LST ISO 128-22:2003 Techniniai brėžiniai. Bendrieji vaizdavimo principai. 22 dalis. Išnašų ir nuorodų linijos. Pagrindinės nuostatos ir taikymas (tpt ISO 128-22:1999);',
    'LST EN ISO 5457:2000 Techniniai gaminio dokumentai. Brėžinių lapų formatai ir grafinių elementų pateikimas (ISO 5457:1999);',
    'LST EN ISO 5457:2000/A1:2010 Techniniai gaminio dokumentai. Brėžinių lapų formatai ir grafinių elementų pateikimas. 1 keitinys (ISO 5457:1999/Amd.1:2010);',
    'LST EN ISO 5456-2:2001 Techniniai brėžiniai. Projekcijų metodai. 2 dalis. Stačiakampės projekcijos (ISO 5456-2:1996);',
    'LST EN ISO 3098-1:2015 Techniniai gaminių dokumentai. Rašmenys. 1 dalis. Bendrieji reikalavimai (ISO 3098-1:2015);',
    'LST EN ISO 7200:2004 Techniniai gaminių dokumentai. Duomenų laukai pagrindinėse įrašų lentelėse ir dokumentų antraštėse (ISO 7200:2004) kartu su pataisa LST EN ISO 7200:2004/P:2005.',
    'LST EN ISO 4157-1:2000 Statybiniai brėžiniai. Žymėjimo sistemos. 1 dalis. Pastatai ir pastatų dalys (ISO 4157-1:1998)',
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <BookOpen size={32} className="text-white" />
              </div>
              <h1 className="text-4xl" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('standards_title')}</h1>
            </div>
            <p className="text-xl text-white/90 ml-20">
              {t('standards_subtitle')}
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

      {/* Main Content */}
      <section className="py-16 bg-[#FAFAF9] -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* LSD Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl text-gray-900">
                    {t('standards_lsd_title')}
                  </h2>
                </div>
              </div>
              <div className="px-8 py-6">
                <p className="text-gray-600 mb-4 text-lg">
                  {t('standards_lsd_desc')}
                </p>
                <a
                  href="https://www.lsd.lt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('standards_visit_website')} <ExternalLink size={18} />
                </a>
                <p className="text-sm text-gray-500 mt-3">www.lsd.lt</p>
              </div>
            </div>

            {/* Standards List Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#6B2C3E]/10 to-[#8B4A5C]/10 border-b border-gray-200 px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6B2C3E] rounded-lg flex items-center justify-center">
                    <FileText size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl text-gray-900">{t('standards_list_title')}</h2>
                </div>
                <p className="text-gray-600 mt-2 ml-13">
                  {standards.length} {t('standards_count')}
                </p>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {standards.map((standard, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:border-[#6B2C3E]/30 hover:shadow-sm transition-all group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#6B2C3E]/10 flex items-center justify-center group-hover:bg-[#6B2C3E] transition-colors">
                          <CheckCircle2 size={18} className="text-[#6B2C3E] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{standard}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">{t('standards_how_to_access')}</h3>
                  <p className="text-gray-700">
                    {t('standards_access_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}