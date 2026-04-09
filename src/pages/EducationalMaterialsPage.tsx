import { BookOpen, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function EducationalMaterialsPage() {
  const { t } = useLanguage();
  const materials = [
    {
      author: 'Darius Mačiulis',
      title: 'AUTOCAD 2017 PAGRINDAI',
      description: 'Išsamiai pateikiama dvimačio bei trimačio brėžinio sudarymo įrankiai.',
      link: 'https://liggd.lt/uploads/files/metodiniai%20nurodymai%20autocad%202017%20Dariaus.pdf',
      linkType: 'view' as const,
    },
    {
      author: 'Darius Mačiulis',
      title: 'SOLIDWORKS PRADŽIAMOKSLIS',
      description: 'Išsamiai pateikiami dvimačio eskizo sudarymo įrankiai.',
      link: 'https://liggd.lt/uploads/files/metodiniai%20nurodymai%20autocad%202017%20Dariaus.pdf',
      linkType: 'download' as const,
    },
    {
      author: 'Čiupaila, L. ir kt.',
      year: '2015',
      title: 'Inžinerinė skaitmeninė grafika. Bendroji grafika : vadovėlis',
      publisher: 'Vilnius: Technika. 483 p',
      description: 'Išsamiai pateikiama dvimačio bei trimačio brėžinio analizė ir braižymo įrankiai, paviršinio ir tūrinio modeliavimo bei tikroviško atvaizdavimo pagrindai, atskleidžiama grafinių sprendinių logika ir prasmė bei kompiuterinių įrankių sudarymo praktika.',
      link: '#',
      linkType: 'view' as const,
    },
    {
      author: 'Vdovinskienė, S., Vilkevič, V.',
      year: '2011',
      title: 'Modeliavimo pradmenys SOLIDWORKS aplinkoje : mokomoji knyga',
      publisher: 'Vilnius: Technika. 128 p',
      description: 'Leidinyje supažindinama su dvimačio ir trimačio objektų kūrimu SOLIDWORKS aplinkoje remiantis naujausiais techninio dokumento formavimo apiforminimo standartais.',
      link: '#',
      linkType: 'view' as const,
    },
    {
      author: 'Rimkevičienė, Z., S. ir kt.',
      year: '2011',
      title: 'Inžinerinė grafika mašinų gamyboje : mokomoji knyga',
      publisher: 'Vilnius: Technika. 190 p',
      description: 'Supažindina su teoriniais brėžinio sudarymo bei techninės konstrukcinės dokumentacijos rengimo pagrindais pagal naujausius standartų reikalavimus.',
      link: '#',
      linkType: 'view' as const,
    },
    {
      author: 'Vdovinskienė, S.',
      year: '2010',
      title: 'Fundamentals of engineering graphics. Technical drawing : educational book',
      publisher: 'Vilnius: Technika. 53 p',
      description: 'Leidinyje pateikiama projekcinės braižybos teorija, praktinio darbo užduotys bei jų pavyzdžiai, taip pat supažindinama su techninių brėžinių atlikimo ir apipavidalinimo naujausiais Lietuvoje taikomais reikalavimais. Leidinys skirtas studentams, studijuojantiems anglų kalba.',
      link: '#',
      linkType: 'view' as const,
    },
    {
      author: 'Vansevičius, A.',
      year: '2008',
      title: 'Braižomoji geometrija. Altitudinės projekcijos: mokomoji knyga',
      publisher: 'Kaunas. 81 p',
      description: 'Šioje metodinėje priemonėje apžvelgti pagrindiniai braižymo principai, taikomi tiek braižant kompiuteriu, tiek įprastu rankiniu būdu. Aprašytas altitudinių projekcijų pateikimas praplės geodezinių specialybių studentų žinias.',
      link: '#',
      linkType: 'view' as const,
    },
    {
      author: 'Baušys, R. ir kt.',
      year: '2010',
      title: 'Inžinerinės grafikos pagrindai: mokomoji knyga',
      publisher: 'Vilnius: Technika. 161 p',
      description: 'Leidinyje nagrinėjami geometrinių kūnų ir jų derinių formavimo teoriniai pagrindai, pozicinių ir metrinių uždavinių sprendimo metodai.',
      link: '#',
      linkType: 'view' as const,
    },
    {
      author: 'Makutėnienė, D.',
      year: '2011',
      title: 'Kompiuterinis modeliavimas architektūroje: mokomoji knyga',
      publisher: 'Vilnius: Technika. 109 p',
      description: 'Knygoje trumpai apžvelgiamos paplitusios kompiuterinio projektavimo sistemos, modeliavimo metodai dvimačiams ir trimačiams objektams kurti. Mokomoji knyga skirta inžinerinės architektūros ir architektūros programų studentams, studijuojantiems kompiuterinę, taikomąją grafiką, kompiuterinį modeliavimą architektūroje.',
      link: '#',
      linkType: 'view' as const,
    },
    {
      author: 'Gabrielaitis, L.',
      year: '2009',
      title: 'Konstrukcinės dokumentacijos valdymas : mokomoji knyga',
      publisher: 'Vilnius: Technika. 74 p',
      description: 'Leidinyje pateikiami techninės dokumentacijos valdymo statinių projektavimo ir gamybos įmonėse ypatumai, siūlomi sprendimai, kaip techninė dokumentacija gali būti struktūruojama, koduojama, archyvuojama, saugoma bei publikuojama vartotojams. Supažindinama su konstruktorinės dokumentacijos valdymo sistemų diegimo metodologija, sistemų struktūra. Leidinyje daug dėmesio skirta kompiuterinio projektavimo (CAD) sistemos standarto sukūrimui.',
      link: '#',
      linkType: 'view' as const,
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={32} className="text-[#6B2C3E]" />
              <h1 className="text-3xl text-gray-900" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('materials_title')}</h1>
            </div>
            <p className="text-lg text-gray-600">
              {t('materials_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#6B2C3E] transition-colors"
                >
                  <div className="flex gap-6">
                    {/* Left side - could add book cover images here if available */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-28 bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded flex items-center justify-center">
                        <BookOpen size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Right side - content */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="text-xl text-gray-900 mb-1">{material.title}</h3>
                        <p className="text-sm text-gray-600">
                          {material.author}
                          {material.year && `. ${material.year}.`}
                          {material.publisher && ` ${material.publisher}`}
                        </p>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{material.description}</p>
                      
                      {material.link && material.link !== '#' && (
                        <a
                          href={material.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                            material.linkType === 'download'
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : 'bg-[#6B2C3E] text-white hover:bg-[#8B4A5C]'
                          }`}
                        >
                          {material.linkType === 'download' ? (
                            <>
                              <Download size={16} />
                              Atsisiųsti
                            </>
                          ) : (
                            <>
                              <ExternalLink size={16} />
                              Nuoroda
                            </>
                          )}
                        </a>
                      )}
                      {material.link === '#' && (
                        <span className="text-sm text-gray-400 italic">Nuoroda neprieinama</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Pastaba:</strong> Daugelį šių leidinių galite rasti mokymo institucijų bibliotekose 
                arba užsisakyti per leidyklą "Technika".
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}