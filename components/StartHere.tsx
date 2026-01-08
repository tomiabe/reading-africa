import React from 'react';
import { ResourceItem } from '../types';
import { START_HERE_MEDIA, START_HERE_BOOKS, START_HERE_DATA } from '../constants';
import ContributionWidget from './ContributionWidget';
import { ArrowUpRight } from 'lucide-react';

interface StartHereProps {
  onNavigateContribute: () => void;
}

const ImageCard: React.FC<{ item: ResourceItem }> = ({ item }) => (
  <div className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden flex flex-col hover:shadow-xl dark:hover:border-stone-700 transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-video overflow-hidden bg-stone-100 dark:bg-stone-800 relative">
      {item.imageUrl ? (
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-stone-100 dark:bg-stone-800 text-stone-300 dark:text-stone-700">
           <span className="font-serif italic text-2xl">Reading Africa</span>
        </div>
      )}
      <div className="absolute top-3 right-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm shadow-sm text-stone-800 dark:text-stone-200">
        {item.type || 'Resource'}
      </div>
    </div>
    
    <div className="p-6 flex-1 flex flex-col">
      <div className="mb-2 text-xs font-semibold text-earth-clay dark:text-earth-ochre uppercase tracking-wider flex justify-between items-center">
        {item.authorOrSource}
      </div>
      <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 mb-2 leading-tight">
        {item.title}
      </h3>
      <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4 flex-1">
        {item.description}
      </p>
      
      {item.tags && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-stone-100 dark:border-stone-800">
          {item.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-stone-50 dark:bg-stone-950 text-stone-400 dark:text-stone-500 border border-stone-100 dark:border-stone-800 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const StartHere: React.FC<StartHereProps> = ({ onNavigateContribute }) => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
      <header className="mb-16 md:mb-24">
        <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4 block">Curated Starter Pack</span>
        <h2 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 mb-8 leading-tight">
          Where to <span className="text-earth-clay italic">begin</span>.
        </h2>
        <div className="border-l-4 border-stone-200 dark:border-stone-700 pl-6 py-2">
            <p className="text-xl md:text-2xl font-light text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
            If you are overwhelmed or time-pressed, these sources will give you solid foundational context across multiple dimensions.
            </p>
        </div>
      </header>

      <section className="mb-20">
        <div className="flex items-end justify-between mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
             <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">Media</h3>
             <span className="text-xs font-bold uppercase text-stone-400 tracking-widest">Essential Reading</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {START_HERE_MEDIA.map(item => <ImageCard key={item.id} item={item} />)}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-end justify-between mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
             <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">Books</h3>
             <span className="text-xs font-bold uppercase text-stone-400 tracking-widest">Foundational Texts</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {START_HERE_BOOKS.map(item => <ImageCard key={item.id} item={item} />)}
        </div>
      </section>
      
      <section className="mb-20">
         <div className="flex items-end justify-between mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
             <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">Data</h3>
             <span className="text-xs font-bold uppercase text-stone-400 tracking-widest">The Numbers</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {START_HERE_DATA.map(item => <ImageCard key={item.id} item={item} />)}
           <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-lg flex flex-col justify-center border border-dashed border-stone-300 dark:border-stone-700">
               <p className="font-serif text-lg text-stone-900 dark:text-stone-100 italic mb-4">
                "Data explains what is happening, not why it is happening. Always pair statistics with historical and political context."
               </p>
           </div>
        </div>
      </section>

      <ContributionWidget onNavigate={onNavigateContribute} />
    </div>
  );
};

export default StartHere;