import { Target, Users, BookOpen, Globe, Mail, Calendar, MapPin, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();
  
  const goals = [
    t('about_goal_1'),
    t('about_goal_2'),
    t('about_goal_3'),
  ];

  const objectives = [
    t('about_objective_1'),
    t('about_objective_2'),
    t('about_objective_3'),
    t('about_objective_4'),
  ];

  const universities = [
    { name: 'Kauno technologijos universitetas', abbr: 'KTU' },
    { name: 'Vilniaus Gedimino technikos universitetas', abbr: 'VGTU' },
    { name: 'Klaipėdos universitetas', abbr: 'KU' },
    { name: 'VDU Žemės ūkio akademija', abbr: 'VDU ŽŪA' },
  ];

  const colleges = [
    'Kauno kolegija',
    'Vilniaus kolegija',
    'Marijampolės kolegija',
    'Panevėžio kolegija',
    'Šiaulių kolegija',
    'Mokymo centrai',
  ];

  const board = [
    { 
      name: 'Violeta Lakštauskienė', 
      position: t('about_president'), 
      description: t('about_president_desc'),
      email: 'violeta.lakstauskiene@vsrc.lt'
    },
    { 
      name: 'Vaida Bikulčienė', 
      position: t('about_board_member'),
      description: t('about_teacher_vsrc'),
      email: 'vaida.bikulciene@vsrc.lt'
    },
    { 
      name: 'Doc. Dr. Sonata Vdovinskienė', 
      position: t('about_board_member'),
      description: t('about_teacher_vilniustech'),
      email: 'sonata.vdovinskiene@vilniustech.lt'
    },
    { 
      name: 'Dr. Vilma Šipailaitė Ramoškienė', 
      position: t('about_board_member'),
      description: t('about_teacher_kk'),
      email: 'vilma.sipailaite-ramoskiene@go.kauko.lt'
    },
    { 
      name: 'Dovilė Martišienė', 
      position: t('about_board_member'),
      description: t('about_teacher_lik'),
      email: 'dovile.martisene@gmail.com'
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{t('about_page_title')}</h1>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-white" size={24} />
                  <div className="text-3xl text-white">~40</div>
                </div>
                <div className="text-gray-200 text-sm">{t('about_active_members')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-white" size={24} />
                  <div className="text-3xl text-white">2006</div>
                </div>
                <div className="text-gray-200 text-sm">{t('about_founded_date')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="text-white" size={24} />
                  <div className="text-3xl text-white">10+</div>
                </div>
                <div className="text-gray-200 text-sm">{t('about_institutions')}</div>
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

      {/* Main Content */}
      <section className="py-12 bg-[#FAFAF9] -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-l-4 border-[#6B2C3E]">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>{t('about_intro_1')}</strong> {t('about_intro_2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('about_intro_3')} <strong className="text-[#6B2C3E]">{t('about_intro_4')}</strong> {t('about_intro_5')}
              </p>
              <div className="flex items-center gap-2 text-gray-600 mt-6 pt-6 border-t">
                <Calendar size={18} className="text-[#6B2C3E]" />
                <span>{t('about_registered')} <strong>{t('about_registered_date')}</strong></span>
              </div>
            </div>

            {/* Institutions in Two Columns */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Universities */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="text-[#6B2C3E]" size={24} />
                  </div>
                  <h2 className="text-2xl text-gray-900">{t('about_universities')}</h2>
                </div>
                <div className="space-y-3">
                  {universities.map((uni, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#6B2C3E]/5 transition-colors">
                      <div className="w-2 h-2 bg-[#6B2C3E] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-gray-900">{uni.name}</div>
                        <div className="text-sm text-gray-500">({uni.abbr})</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colleges */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-[#6B2C3E]" size={24} />
                  </div>
                  <h2 className="text-2xl text-gray-900">{t('about_colleges')}</h2>
                </div>
                <div className="space-y-3">
                  {colleges.map((college, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#6B2C3E]/5 transition-colors">
                      <div className="w-2 h-2 bg-[#6B2C3E] rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-gray-900">{college}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Goals Section */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center">
                  <Target className="text-[#6B2C3E]" size={24} />
                </div>
                <h2 className="text-2xl text-gray-900">{t('about_goals')}</h2>
              </div>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#6B2C3E]/5 to-transparent rounded-lg border-l-4 border-[#6B2C3E]">
                    <div className="w-8 h-8 bg-[#6B2C3E] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{goal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives Section */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-[#6B2C3E]" size={24} />
                </div>
                <h2 className="text-2xl text-gray-900">{t('about_objectives')}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-6 h-6 bg-[#6B2C3E] text-white rounded flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Members */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#6B2C3E]/10 rounded-lg flex items-center justify-center">
                  <Users className="text-[#6B2C3E]" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl text-gray-900">{t('about_structure')}</h2>
                  <p className="text-sm text-gray-600">{t('about_board_members')}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {board.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#6B2C3E] hover:shadow-md transition-all"
                  >
                    <div className="mb-3">
                      <h3 className="text-lg text-gray-900 mb-1">{member.name}</h3>
                      <div className="inline-block px-3 py-1 bg-[#6B2C3E] text-white text-xs rounded-full">
                        {member.position}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{member.description}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-[#6B2C3E] hover:underline"
                    >
                      <Mail size={14} />
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership CTA */}
            <div className="bg-gradient-to-br from-[#6B2C3E] to-[#8B4A5C] rounded-xl shadow-lg p-8 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl text-white mb-4">{t('about_future_members')}</h2>
                <p className="text-xl text-gray-200 mb-6">{t('about_want_to_join')}</p>
                <p className="text-gray-200 mb-8">
                  {t('about_fill_form')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@liggd.lt?subject=Prašymas tapti LIGGD nariu"
                    className="px-8 py-4 bg-white text-[#6B2C3E] rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    info@liggd.lt
                  </a>
                  <Link
                    to="/kontaktai"
                    className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {t('home_contact_us')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}