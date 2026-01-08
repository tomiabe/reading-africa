import React, { useState } from 'react';
import { CountryProfile, ResourceItem } from '../types';
import { ArrowLeft, Globe, AlertCircle, BookOpen, Newspaper, BarChart2, Film, ArrowRight } from 'lucide-react';
import ContributionWidget from './ContributionWidget';

interface CountryGatewayProps {
  countries: CountryProfile[];
  onNavigateContribute: () => void;
}

const ResourceList: React.FC<{ items: ResourceItem[], icon: any, title: string }> = ({ items, icon: Icon, title }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-12">
      <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">
        <Icon size={18} className="text-stone-400" /> {title}
      </h4>
      <div className="grid grid-cols-1 gap-4">
        {items.map(item => (
          <div key={item.id} className="group p-5 bg-stone-50 dark:bg-stone-900 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
            <div className="flex justify-between items-start">
                 <div>
                    <h5 className="font-bold text-stone-900 dark:text-stone-100 group-hover:text-earth-clay transition-colors mb-1">{item.title}</h5>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">{item.description}</p>
                 </div>
                 {item.authorOrSource && <span className="text-[10px] text-stone-400 uppercase tracking-wide shrink-0 ml-4 bg-white dark:bg-stone-950 px-2 py-1 rounded">{item.authorOrSource}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CountryGateway: React.FC<CountryGatewayProps> = ({ countries, onNavigateContribute }) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);

  const selectedCountry = countries.find(c => c.id === selectedCountryId);

  // Detail View
  if (selectedCountry) {
    return (
      <div className="min-h-screen bg-white dark:bg-stone-950">
        
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
             {selectedCountry.imageUrl && (
                 <>
                    <img 
                        src={selectedCountry.imageUrl} 
                        alt={selectedCountry.name} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/60 dark:bg-stone-950/70 backdrop-blur-[2px]"></div>
                 </>
             )}
             <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto">
                 <button 
                    onClick={() => setSelectedCountryId(null)}
                    className="absolute top-8 left-6 md:left-20 flex items-center text-xs font-bold text-white/70 hover:text-white uppercase tracking-widest transition-colors"
                    >
                    <ArrowLeft size={14} className="mr-2" /> All Countries
                </button>
                <span className="text-earth-ochre font-bold tracking-widest uppercase text-sm mb-4">{selectedCountry.region}</span>
                <h1 className="font-serif text-5xl md:text-7xl text-white font-medium mb-6">{selectedCountry.name}</h1>
                <p className="text-xl text-stone-200 max-w-2xl font-light leading-relaxed">{selectedCountry.blurb}</p>
             </div>
        </div>

        <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              
              <section className="mb-16">
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">Why Context Matters</h3>
                <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">{selectedCountry.contextMatters}</p>
              </section>

              <section className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 mb-16">
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-3">
                  <AlertCircle className="text-earth-clay" /> Common Misunderstandings
                </h3>
                <ul className="space-y-4">
                  {selectedCountry.misunderstandings.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-stone-700 dark:text-stone-300 leading-relaxed">
                      <span className="text-stone-300 dark:text-stone-600 font-bold text-xl leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div>
                 <ResourceList title="Media & Journalism" icon={Newspaper} items={selectedCountry.media} />
                 <ResourceList title="Books & Long-Form Reading" icon={BookOpen} items={selectedCountry.books} />
                 <ResourceList title="Data & Research" icon={BarChart2} items={selectedCountry.data} />
                 <ResourceList title="Culture as Context" icon={Film} items={selectedCountry.culture} />
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
               <div className="sticky top-8">
                  <div className="bg-stone-900 dark:bg-stone-800 text-stone-50 p-8 rounded-xl shadow-xl">
                    <h3 className="font-serif font-bold text-xl mb-6 text-white border-b border-stone-700 pb-4">Notes on Specificity</h3>
                    <p className="text-xs text-stone-400 mb-6 uppercase tracking-wider font-bold">Distinguish between:</p>
                    <ul className="space-y-4">
                      {selectedCountry.specificity.map((note, idx) => (
                        <li key={idx} className="text-sm flex gap-3 leading-snug text-stone-300">
                          <span className="text-earth-ochre">→</span> {note}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </div>

          </div>
          <ContributionWidget onNavigate={onNavigateContribute} />
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
      <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-6">Country Gateways</h2>
        <p className="text-xl font-light text-stone-500 dark:text-stone-400 leading-relaxed">
          Specific entry points to combat the "Africa is a country" narrative. 
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {countries.map((country) => (
          <button 
            key={country.id} 
            onClick={() => setSelectedCountryId(country.id)}
            className="group relative h-96 w-full rounded-2xl overflow-hidden text-left shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800">
                {country.imageUrl && (
                    <img 
                        src={country.imageUrl} 
                        alt={country.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                )}
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-xs font-bold text-earth-ochre uppercase tracking-wider mb-2">{country.region}</span>
                <h3 className="font-serif text-3xl text-white mb-3 group-hover:translate-x-1 transition-transform">{country.name}</h3>
                <p className="text-stone-300 text-sm leading-relaxed line-clamp-3 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    {country.blurb}
                </p>
                <div className="flex items-center text-xs font-bold text-white uppercase tracking-wide">
                    Explore Context <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
          </button>
        ))}
      </div>
      
      <ContributionWidget onNavigate={onNavigateContribute} />
    </div>
  );
};

export default CountryGateway;