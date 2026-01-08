import React from 'react';
import { Mail, CheckCircle, XCircle } from 'lucide-react';

const Contribution: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 md:px-12 lg:px-20">
      <header className="mb-16 md:mb-24 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-6">Contribution Guidelines</h2>
        <p className="text-xl font-light text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
           Reading Africa welcomes suggestions that improve context and intellectual honesty.
           <br/><span className="text-stone-900 dark:text-stone-200 font-medium">Does it deepen understanding?</span>
        </p>
      </header>

      <div className="space-y-16">
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-100 dark:border-stone-800">
             <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-6">
               <CheckCircle className="text-earth-sage" /> What We Accept
             </h3>
             <ul className="space-y-4 text-stone-700 dark:text-stone-300">
               {["African media outlets with strong editorial standards", 
                 "Books with historical, political, or cultural depth", 
                 "Datasets that are transparently sourced", 
                 "Cultural works that function as political memory"].map((item, i) =>(
                   <li key={i} className="flex gap-3 leading-snug"><span className="text-stone-300">•</span> {item}</li>
                 ))}
             </ul>
           </div>

           <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-100 dark:border-stone-800">
             <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-6">
               <XCircle className="text-earth-clay" /> What We Don't Accept
             </h3>
             <ul className="space-y-4 text-stone-700 dark:text-stone-300">
               {["Hot takes or opinion-only blogs", 
                 "Generic 'Africa is rising/failing' narratives", 
                 "Content that treats Africa as a single unit", 
                 "Sources without clear authorship"].map((item, i) =>(
                   <li key={i} className="flex gap-3 leading-snug"><span className="text-stone-300">•</span> {item}</li>
                 ))}
             </ul>
           </div>
        </section>

        <section className="border-t border-stone-200 dark:border-stone-800 pt-16 text-center">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-10 md:p-16 rounded-3xl shadow-sm max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-stone-400" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">How to Submit</h3>
            <p className="text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">
              Please email your suggestions. Include Title, Link, Country/Region, Category, and why it matters.
            </p>
            <a 
              href="mailto:hello@readingafrica.com" 
              className="inline-block bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-8 py-4 rounded-xl font-bold hover:bg-earth-clay dark:hover:bg-stone-300 transition-colors"
            >
              Email Suggestion
            </a>
            
            <div className="mt-12 text-left bg-stone-50 dark:bg-stone-950 p-6 rounded-xl">
                <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-2 text-xs uppercase tracking-widest">Editorial Philosophy</h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                Inclusion is intentional, not exhaustive. We're not neutral. We prioritize African voices, context-rich analysis, and specificity over false balance.
                </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contribution;