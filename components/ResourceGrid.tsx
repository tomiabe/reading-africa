import React from 'react';
import { ResourceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ResourceGridProps {
  title: string;
  description: string;
  items: ResourceItem[];
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ title, description, items }) => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
      <header className="mb-16 md:mb-24">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-6">{title}</h2>
        <p className="text-xl font-light text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed">{description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden flex flex-col hover:shadow-xl dark:hover:border-stone-700 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[3/2] overflow-hidden bg-stone-100 dark:bg-stone-800 relative">
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
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-stone-800/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm shadow-sm text-stone-800 dark:text-stone-200">
                {item.type || 'resource'}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-3 text-xs font-bold text-earth-clay dark:text-earth-ochre uppercase tracking-wider">
                {item.authorOrSource}
              </div>
              <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3 leading-tight group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6 flex-1">
                {item.description}
              </p>
              
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-stone-100 dark:border-stone-800">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceGrid;