import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6 md:px-12 lg:px-20 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="text-center mb-20 md:mb-28">
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-8">
          Africa is not a headline.
        </h1>
        <p className="text-lg md:text-2xl font-light text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          It is 54+ countries, hundreds of languages, and no single story. Yet global conversations collapse complexity into crisis and flatten specificity into stereotype.
        </p>
        <div className="w-24 h-1 bg-earth-clay mx-auto mt-12"></div>
      </div>

      {/* The Grid Layout for Core Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
        
        {/* Why This Exists */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 border-l-4 border-earth-ochre pl-4">
            Why This Exists
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            Most global discourse about Africa is shaped by external media systems, shallow comparisons, and crisis-driven narratives.
          </p>
          <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            As a result, conversations about development, innovation, progress, and sustainability are often overgeneralized, historically thin, and culturally detached.
          </p>
        </div>

        {/* The Solution */}
        <div className="space-y-6">
           <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 border-l-4 border-earth-sage pl-4">
            The Approach
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
             Reading Africa exists to change the baseline—not by arguing louder, but by providing infrastructure for better thinking.
          </p>
           <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            We point you to better sources, better frameworks, and better starting points so you can move beyond the "single story."
          </p>
        </div>

      </div>

      {/* Ground Rules Section */}
      <div className="bg-stone-100 dark:bg-stone-900 rounded-3xl p-8 md:p-12 mb-20 shadow-sm border border-stone-200 dark:border-stone-800">
        <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 mb-10 text-center">
          Ground Rules for Thinking About Africa
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { title: "Africa is not a country", desc: "Conversations must be country-specific, region-specific, or issue-specific." },
             { title: "Development is not universal", desc: "GDP growth and infrastructure mean different things in different contexts." },
             { title: "Progress is not linear", desc: "Countries advance, stall, regress, and reconfigure over time." },
             { title: "Data without history is incomplete", desc: "Numbers require political, economic, and cultural context." }
           ].map((rule, idx) => (
             <div key={idx} className="flex gap-4 items-start">
               <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 dark:bg-stone-700 text-white flex items-center justify-center font-bold text-sm">
                 {idx + 1}
               </span>
               <div>
                 <h4 className="font-bold text-lg text-stone-900 dark:text-stone-100 mb-1">{rule.title}</h4>
                 <p className="text-stone-600 dark:text-stone-400 leading-snug">{rule.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* The Goal */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-4">The Goal</h3>
        <p className="font-serif text-2xl md:text-3xl italic text-stone-700 dark:text-stone-300 leading-normal">
          "Not consensus. Not propaganda. Not optimism or pessimism. <span className="font-bold text-stone-900 dark:text-white not-italic">Just better conversations, built on better foundations.</span>"
        </p>
      </div>

    </div>
  );
};

export default Manifesto;