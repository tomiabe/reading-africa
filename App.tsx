import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Manifesto from './components/Manifesto';
import ResourceGrid from './components/ResourceGrid';
import CountryGateway from './components/CountryGateway';
import StartHere from './components/StartHere';
import ForJournalists from './components/ForJournalists';
import Contribution from './components/Contribution';
import { Category } from './types';
import { Sun, Moon } from 'lucide-react';
import { 
  ALL_MEDIA, 
  ALL_BOOKS, 
  ALL_DATA, 
  ALL_CULTURE, 
  COUNTRIES 
} from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.MANIFESTO);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize Theme based on time (7pm - 7am)
  useEffect(() => {
    const hour = new Date().getHours();
    const isNight = hour >= 19 || hour < 7;
    setIsDarkMode(isNight);
  }, []);

  // Apply Theme class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navigateToContribute = () => {
    setActiveCategory(Category.CONTRIBUTE);
    window.scrollTo(0,0);
  };

  const renderContent = () => {
    switch (activeCategory) {
      case Category.MANIFESTO:
        return <Manifesto />;
      case Category.START_HERE:
        return <StartHere onNavigateContribute={navigateToContribute} />;
      case Category.JOURNALISTS:
        return <ForJournalists onNavigateContribute={navigateToContribute} />;
      case Category.COUNTRIES:
        return (
          <CountryGateway 
            countries={COUNTRIES} 
            onNavigateContribute={navigateToContribute}
          />
        );
      case Category.MEDIA:
        return (
          <>
            <ResourceGrid 
              title="Media & Journalism" 
              description="Investigative outlets and rigorous reporting. Emphasizing who is telling the story."
              items={ALL_MEDIA}
            />
            <div className="max-w-6xl mx-auto px-6 md:px-12 pb-12"></div>
          </>
        );
      case Category.BOOKS:
        return (
          <ResourceGrid 
            title="Books & Long-form" 
            description="History, political economy, and futures. Reading for depth, not just confirmation."
            items={ALL_BOOKS}
          />
        );
      case Category.RESEARCH:
        return (
          <ResourceGrid 
            title="Research, Data & Policy" 
            description="Institutions, think tanks, and data platforms to upgrade the quality of discourse."
            items={ALL_DATA}
          />
        );
      case Category.CULTURE:
        return (
          <ResourceGrid 
            title="Culture as Knowledge" 
            description="Music, film, art, and oral history. Culture shapes worldview and provides context."
            items={ALL_CULTURE}
          />
        );
      case Category.CONTRIBUTE:
        return <Contribution />;
      default:
        return <Manifesto />;
    }
  };

  return (
    <div className="flex h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <Sidebar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-1 overflow-y-auto h-full pt-16 md:pt-0 relative">
        {/* Desktop Theme Toggle - Floating Top Right */}
        <div className="hidden md:block fixed top-6 right-8 z-50">
          <button 
            onClick={toggleTheme}
            className="group flex items-center justify-center p-3 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-md hover:border-earth-clay/50 dark:hover:border-earth-ochre/50 transition-all duration-300"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
             <div className="relative w-5 h-5">
                <Sun 
                  size={20} 
                  className={`absolute inset-0 text-stone-500 hover:text-earth-clay transition-all duration-300 transform ${isDarkMode ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} 
                />
                <Moon 
                  size={20} 
                  className={`absolute inset-0 text-stone-400 hover:text-earth-ochre transition-all duration-300 transform ${isDarkMode ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} 
                />
             </div>
          </button>
        </div>

        {renderContent()}
      </main>
    </div>
  );
};

export default App;