import { BookOpen, Download, Calendar, Users, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function PublicationsPage() {
  const { t } = useLanguage();

  const publications = [
    {
      year: 2024,
      title: 'Inžinerinė ir Kompiuterinė Grafika 2024',
      subtitle: 'XXVIII tarptautinės konferencijos pranešimų medžiaga',
      description: 'Konferencijos pranešimų santraukos ir pilni tekstai, apimantys naujausius tyrimus inžinerinės grafikos, geometrijos ir kompiuterinio projektavimo srityse.',
      pages: 245,
      authors: 85,
      downloads: 1240,
      isbn: '978-609-476-234-5',
      image: 'engineering graphics book',
      pdfUrl: '#',
    },
    {
      year: 2023,
      title: 'CAD Sistemų Taikymas Švietimo Procese',
      subtitle: 'Metodinė medžiaga dėstytojams',
      description: 'Išsami metodinė medžiaga, skirta CAD/CAM technologijų dėstymui aukštojo mokslo institucijose. Pateikiami praktiniai pavyzdžiai ir užduotys.',
      pages: 156,
      authors: 12,
      downloads: 856,
      isbn: '978-609-476-198-0',
      image: 'cad education',
      pdfUrl: '#',
    },
    {
      year: 2023,
      title: 'Geometrinio Modeliavimo Algoritmai',
      subtitle: 'Mokslinė monografija',
      description: 'Fundamentali mokslinė knyga apie geometrinio modeliavimo algoritmus ir jų taikymą kompiuterinėje grafikoje bei projektavime.',
      pages: 312,
      authors: 8,
      downloads: 624,
      isbn: '978-609-476-187-4',
      image: 'geometric modeling',
      pdfUrl: '#',
    },
    {
      year: 2022,
      title: 'Inžinerinė ir Kompiuterinė Grafika 2022',
      subtitle: 'XXVII tarptautinės konferencijos pranešimų medžiaga',
      description: 'Tarptautinės konferencijos mokslinių pranešimų rinkinys, pristantantis naujausias tendencijas inžinerinės grafikos srityje.',
      pages: 198,
      authors: 72,
      downloads: 1580,
      isbn: '978-609-476-156-0',
      image: 'conference proceedings',
      pdfUrl: '#',
    },
    {
      year: 2022,
      title: 'Parametrinis Projektavimas ir Optimizacija',
      subtitle: 'Mokomoji knyga',
      description: 'Praktinė mokomoji knyga, skirta studentams ir projektavimo specialistams, norintiems išmokti parametrinio projektavimo metodų.',
      pages: 224,
      authors: 6,
      downloads: 945,
      isbn: '978-609-476-142-3',
      image: 'parametric design',
      pdfUrl: '#',
    },
  ];

  const yearlyPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof publications>);

  const years = Object.keys(yearlyPublications).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('publications_title')}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('publications_subtitle')}
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
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
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

      {/* Statistics */}
      <section className="py-12 bg-white border-b -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-[#6B2C3E] mb-2">50+</div>
              <div className="text-gray-600">{t('publications_count')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#6B2C3E] mb-2">300+</div>
              <div className="text-gray-600">{t('publications_authors')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#6B2C3E] mb-2">10,000+</div>
              <div className="text-gray-600">{t('publications_downloads')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications by Year */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {years.map((year) => (
            <div key={year} className="mb-16">
              <h2 className="text-3xl text-gray-900 mb-8 pb-4 border-b-2 border-[#6B2C3E]" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
                {year} {t('publications_year')}
              </h2>
              
              <div className="space-y-8">
                {yearlyPublications[parseInt(year)].map((publication, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#6B2C3E]"
                  >
                    <div className="grid lg:grid-cols-4 gap-8">
                      {/* Image */}
                      <div className="lg:col-span-1 relative h-64 lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200">
                        <ImageWithFallback
                          src={`https://source.unsplash.com/600x800/?${publication.image}`}
                          alt={publication.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#6B2C3E] text-white rounded-full text-sm">
                          {publication.year}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-3 p-8">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl text-gray-900 mb-2">{publication.title}</h3>
                            <p className="text-gray-600 mb-4">{publication.subtitle}</p>
                          </div>

                          <p className="text-gray-700 leading-relaxed">
                            {publication.description}
                          </p>

                          {/* Meta Information */}
                          <div className="flex flex-wrap gap-6 py-4 border-y">
                            <div className="flex items-center gap-2 text-gray-600">
                              <BookOpen size={18} className="text-[#6B2C3E]" />
                              <span>{publication.pages} {t('publications_pages')}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Users size={18} className="text-[#6B2C3E]" />
                              <span>{publication.authors} {t('publications_authors_count')}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Download size={18} className="text-[#6B2C3E]" />
                              <span>{publication.downloads} {t('publications_downloads_count')}</span>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600">
                            ISBN: {publication.isbn}
                          </div>

                          {/* Actions */}
                          <div className="flex flex-wrap gap-4 pt-4">
                            <a
                              href={publication.pdfUrl}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B4A5C] text-white rounded-lg hover:shadow-lg transition-all"
                            >
                              <Download size={20} />
                              {t('publications_download_pdf')}
                            </a>
                            <a
                              href="#"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#6B2C3E] border-2 border-[#6B2C3E] rounded-lg hover:bg-[#6B2C3E] hover:text-white transition-all"
                            >
                              <ExternalLink size={20} />
                              {t('publications_view_online')}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archive Notice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-[#6B2C3E]" />
            <h3 className="text-2xl text-gray-900 mb-4">{t('publications_archive_title')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('publications_archive_desc')}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B2C3E] text-white rounded-lg hover:bg-[#8B4A5C] transition-all"
            >
              {t('publications_view_archive')}
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}