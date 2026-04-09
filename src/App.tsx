import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { StatutePage } from './pages/StatutePage';
import { MembersPage } from './pages/MembersPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { StandardsPage } from './pages/StandardsPage';
import { EducationalMaterialsPage } from './pages/EducationalMaterialsPage';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FAFAF9] flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/apie-mus" element={<AboutPage />} />
              <Route path="/konferenciju-leidiniai" element={<PublicationsPage />} />
              <Route path="/veikla" element={<ActivitiesPage />} />
              <Route path="/istatai" element={<StatutePage />} />
              <Route path="/nariams" element={<MembersPage />} />
              <Route path="/rekomenduotini-standartai" element={<StandardsPage />} />
              <Route path="/mokomosios-priemones" element={<EducationalMaterialsPage />} />
              <Route path="/naujienos" element={<NewsPage />} />
              <Route path="/kontaktai" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}