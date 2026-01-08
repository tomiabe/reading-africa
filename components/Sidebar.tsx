import React from 'react';
import { BookOpen, Newspaper, BarChart2, Film, Map, Home, Menu, X, Lightbulb, Compass, FileText, Moon, Sun } from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  activeCategory: Category;
  setActiveCategory: (c: Category) => void;
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, setActiveCategory, isOpen, setIsOpen, isDarkMode, toggleTheme }) => {
  const menuItems = [
    { id: Category.MANIFESTO, label: 'Manifesto', icon: Home },
    { id: Category.START_HERE, label: 'Start Here', icon: Compass },
    { id: Category.JOURNALISTS, label: 'For Journalists', icon: FileText },
    { id: Category.COUNTRIES, label: 'Country Gateways', icon: Map },
    { type: 'divider' },
    { id: Category.MEDIA, label: 'Media & Journalism', icon: Newspaper },
    { id: Category.BOOKS, label: 'Books & Thinking', icon: BookOpen },
    { id: Category.RESEARCH, label: 'Research & Data', icon: BarChart2 },
    { id: Category.CULTURE, label: 'Culture', icon: Film },
    { type: 'divider' },
    { id: Category.CONTRIBUTE, label: 'Contribute', icon: Lightbulb },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 flex justify-between items-center transition-colors duration-300">
        <div className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">Reading Africa</div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-stone-600 dark:text-stone-400 p-1">
             {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-stone-600 dark:text-stone-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 bg-stone-50 dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800
          transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:block
          flex flex-col
        `}
      >
        <div className="p-8 hidden md:block">
          <h1 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 tracking-tight">Reading Africa</h1>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 font-medium tracking-wide uppercase">Curated Knowledge</p>
        </div>

        <nav className="flex-1 px-4 py-4 md:py-0 overflow-y-auto mt-16 md:mt-0">
          <ul className="space-y-1">
            {menuItems.map((item, idx) => {
              if (item.type === 'divider') {
                return <li key={`div-${idx}`} className="my-4 border-t border-stone-200 dark:border-stone-800" />;
              }
              const Icon = item.icon as React.ElementType;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (item.id) {
                        setActiveCategory(item.id as Category);
                        setIsOpen(false);
                      }
                    }}
                    className={`
                      w-full flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200
                      ${activeCategory === item.id 
                        ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' 
                        : 'text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-200'}
                    `}
                  >
                    <Icon size={18} className="mr-3" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-stone-200 dark:border-stone-800 flex justify-between items-end">
          <div className="text-[10px] text-stone-400 dark:text-stone-500 leading-relaxed">
            &copy; 2024 Reading Africa.<br/>
          </div>
          <button 
            onClick={toggleTheme} 
            className="hidden md:block text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800"
            aria-label="Toggle Dark Mode"
          >
             {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/20 dark:bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;