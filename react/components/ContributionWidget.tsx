import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface ContributionWidgetProps {
  onNavigate?: () => void;
}

const ContributionWidget: React.FC<ContributionWidgetProps> = ({ onNavigate }) => {
  return (
    <div className="mt-16 py-10 border-t border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/50 -mx-6 md:-mx-12 px-6 md:px-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-4 text-stone-900 dark:text-stone-100">
          <Lightbulb size={20} className="text-earth-ochre" />
          <h3 className="font-serif text-lg font-bold">Know a source that should be here?</h3>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mb-6 text-sm leading-relaxed">
          Reading Africa is a living resource. We welcome suggestions that deepen understanding, 
          respect specificity, and avoid flattening the continent.
        </p>
        <button 
          onClick={onNavigate}
          className="inline-flex items-center text-sm font-semibold text-earth-clay dark:text-earth-ochre hover:opacity-80 transition-opacity"
        >
          Submit a suggestion <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ContributionWidget;