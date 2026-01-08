import React from 'react';
import { AlertTriangle, CheckCircle, HelpCircle, FileText } from 'lucide-react';
import ContributionWidget from './ContributionWidget';

interface ForJournalistsProps {
  onNavigateContribute: () => void;
}

const ForJournalists: React.FC<ForJournalistsProps> = ({ onNavigateContribute }) => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6 md:px-12 lg:px-20">
      
      <header className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 text-xs font-bold uppercase tracking-widest mb-6">
                <FileText size={14} /> Professional Guide
             </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-6 leading-tight">
              A Handbook for<br/> <span className="text-earth-clay italic">Better Reporting</span>.
            </h2>
            <p className="text-xl font-light text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
            Many journalists misrepresent Africa not out of malice, but because they don't know better sources exist or are working under tight deadlines. This reference exists to help.
            </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-7 space-y-16">
            
            {/* Checklist */}
            <section>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center gap-3">
                    <CheckCircle className="text-earth-sage" /> Before You File
                </h3>
                <div className="space-y-6">
                    {[
                    { title: "Check country-specific media outlets", desc: "Don't rely solely on Western wire services." },
                    { title: "Verify local data sources", desc: "National statistics offices are often more accurate than global aggregates." },
                    { title: "Include African voices", desc: "Not as color, but as analysis. Researchers and experts should be primary sources." },
                    { title: "Be time-specific", desc: "'Africa's economy' means nothing without specifying which countries and which time period." },
                    { title: "Understand political context", desc: "Elections, coups, policy changes—don't treat them as isolated events." }
                    ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors">
                        <span className="font-mono text-stone-300 dark:text-stone-600 font-bold text-sm mt-1">0{i+1}</span>
                        <div>
                            <h4 className="font-bold text-lg text-stone-900 dark:text-stone-100 mb-1">{item.title}</h4>
                            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            {/* Quick Context */}
            <section>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center gap-3">
                    <HelpCircle className="text-earth-ochre" /> Quick Context Sources
                </h3>
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-stone-50 dark:bg-stone-900 p-8 border border-stone-200 dark:border-stone-800 rounded-xl">
                        <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-4 text-sm uppercase tracking-wide border-b border-stone-200 dark:border-stone-800 pb-2">Politics & Governance</h4>
                        <ul className="text-stone-600 dark:text-stone-400 space-y-3 font-medium">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-earth-sage rounded-full"></div> Institute for Security Studies (ISS Africa)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-earth-sage rounded-full"></div> Daily Maverick (South Africa)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-earth-sage rounded-full"></div> The Elephant (Kenya)</li>
                        </ul>
                    </div>
                    <div className="bg-stone-50 dark:bg-stone-900 p-8 border border-stone-200 dark:border-stone-800 rounded-xl">
                        <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-4 text-sm uppercase tracking-wide border-b border-stone-200 dark:border-stone-800 pb-2">Economy & Business</h4>
                        <ul className="text-stone-600 dark:text-stone-400 space-y-3 font-medium">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-earth-ochre rounded-full"></div> Stears (Nigeria)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-earth-ochre rounded-full"></div> African Business</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-earth-ochre rounded-full"></div> African Development Bank reports</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>

        {/* Right Column (Red Flags Sticky) */}
        <div className="lg:col-span-5">
            <div className="sticky top-8">
                <div className="bg-stone-900 dark:bg-stone-800 text-stone-50 p-8 rounded-2xl shadow-xl">
                    <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                        <AlertTriangle className="text-earth-clay" /> Red Flags
                    </h3>
                    <p className="text-stone-400 text-sm mb-6 uppercase tracking-wider font-bold">Avoid these lazy tropes:</p>
                    <ul className="space-y-4">
                        {[
                        "\"Africa is...\" (unless talking about continental institutions)",
                        "Only citing Western media or think tanks",
                        "No African sources quoted directly",
                        "Using one country's data to make claims about \"Africa\"",
                        "Treating 54+ countries as a single economic/political unit",
                        "Comparing African countries only to each other, not to similar economies globally"
                        ].map((item, i) => (
                        <li key={i} className="flex gap-4 text-stone-300 text-sm leading-snug">
                            <span className="text-earth-clay font-bold text-lg">×</span> {item}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

      </div>

      <ContributionWidget onNavigate={onNavigateContribute} />
    </div>
  );
};

export default ForJournalists;