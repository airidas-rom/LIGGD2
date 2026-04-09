import { BookOpen, FileText, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function MembersPage() {
  const { t } = useLanguage();
  
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('members_page_title')}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('members_subtitle')}
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

      {/* Quick Links to Resources */}
      <section className="py-16 bg-[#FAFAF9] -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">{t('members_resources')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standards Link */}
              <Link
                to="/rekomenduotini-standartai"
                className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border-2 border-blue-200 hover:border-[#6B2C3E] transition-all hover:shadow-xl"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FileText className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">{t('members_standards_title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('members_standards_desc')}
                  </p>
                  <div className="flex items-center gap-2 text-[#6B2C3E] group-hover:gap-4 transition-all">
                    <span>{t('members_view_standards')}</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B2C3E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              {/* Educational Materials Link */}
              <Link
                to="/mokomosios-priemones"
                className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 border-2 border-green-200 hover:border-[#6B2C3E] transition-all hover:shadow-xl"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">{t('members_materials_title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('members_materials_desc')}
                  </p>
                  <div className="flex items-center gap-2 text-[#6B2C3E] group-hover:gap-4 transition-all">
                    <span>{t('members_view_materials')}</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B2C3E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-4 text-center">{t('members_benefits')}</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {t('members_benefits_desc')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#6B2C3E] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{t('members_benefit_1_title')}</h3>
                <p className="text-sm text-gray-600">{t('members_benefit_1_desc')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#6B2C3E] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{t('members_benefit_2_title')}</h3>
                <p className="text-sm text-gray-600">{t('members_benefit_2_desc')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#6B2C3E] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{t('members_benefit_3_title')}</h3>
                <p className="text-sm text-gray-600">{t('members_benefit_3_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white rounded-2xl p-12">
              <h3 className="text-3xl text-white mb-4">{t('members_not_member')}</h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                {t('members_join_desc')}
              </p>
              <Link
                to="/kontaktai"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#6B2C3E] rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                {t('members_become_member')}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}