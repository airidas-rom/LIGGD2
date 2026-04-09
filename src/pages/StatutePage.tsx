import { FileText, Download, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function StatutePage() {
  const { t } = useLanguage();
  
  const sections = [
    {
      titleKey: 'statute_section_1',
      items: ['statute_1_1', 'statute_1_2', 'statute_1_3', 'statute_1_4'],
    },
    {
      titleKey: 'statute_section_2',
      items: ['statute_2_1', 'statute_2_2', 'statute_2_3', 'statute_2_4', 'statute_2_5'],
    },
    {
      titleKey: 'statute_section_3',
      items: ['statute_3_1', 'statute_3_2', 'statute_3_3', 'statute_3_4', 'statute_3_5', 'statute_3_6'],
    },
    {
      titleKey: 'statute_section_4',
      items: ['statute_4_1', 'statute_4_2', 'statute_4_3', 'statute_4_4', 'statute_4_5', 'statute_4_6'],
    },
    {
      titleKey: 'statute_section_5',
      items: ['statute_5_1', 'statute_5_2', 'statute_5_3', 'statute_5_4'],
    },
    {
      titleKey: 'statute_section_6',
      items: ['statute_6_1', 'statute_6_2', 'statute_6_3'],
    },
  ];

  const documents = [
    {
      titleKey: 'statute_doc_1_title',
      descriptionKey: 'statute_doc_1_desc',
      date: '2023-06-15',
      fileSize: '245 KB',
      downloadUrl: '#',
    },
    {
      titleKey: 'statute_doc_2_title',
      descriptionKey: 'statute_doc_2_desc',
      date: '2024-01-10',
      fileSize: '128 KB',
      downloadUrl: '#',
    },
    {
      titleKey: 'statute_doc_3_title',
      descriptionKey: 'statute_doc_3_desc',
      date: '2024-12-20',
      fileSize: '512 KB',
      downloadUrl: '#',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('statute_title')}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('statute_subtitle')}
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

      {/* Quick Info */}
      <section className="py-12 bg-[#FAFAF9] border-b -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="text-[#6B2C3E]" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">{t('statute_registered')}</h3>
                <p className="text-gray-600">{t('statute_registered_date')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="text-[#6B2C3E]" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">{t('statute_last_update')}</h3>
                <p className="text-gray-600">{t('statute_last_update_date')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-[#6B2C3E]" size={24} />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">{t('statute_status')}</h3>
                <p className="text-gray-600">{t('statute_status_active')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statute Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl text-[#6B2C3E] mb-6">{t(section.titleKey)}</h2>
                <div className="space-y-4">
                  {section.items.map((itemKey, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-[#6B2C3E] text-white rounded-full flex items-center justify-center text-sm">
                        {itemIndex + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{t(itemKey)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8">{t('statute_related_docs')}</h2>
            
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-[#6B2C3E] transition-all hover:shadow-md gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="text-[#6B2C3E]" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{t(doc.titleKey)}</h3>
                      <p className="text-gray-600 text-sm mb-2">{t(doc.descriptionKey)}</p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>{t('statute_updated')} {new Date(doc.date).toLocaleDateString('lt-LT')}</span>
                        <span>•</span>
                        <span>{doc.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={doc.downloadUrl}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#6B2C3E] text-white rounded-lg hover:bg-[#8B4A5C] transition-all whitespace-nowrap w-full md:w-auto"
                  >
                    <Download size={18} />
                    {t('statute_download')}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}