import React from 'react';

interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkHref?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, linkText, linkHref }) => {
  return (
    <div className="flex justify-between items-center mb-12">
      <div className="flex items-center gap-4 flex-grow">
        <h2 className="text-3xl font-bold flex items-center shrink-0">
          <span className="text-[#c778dd]">#</span>{title}
        </h2>
        <div className="h-[1px] bg-[#c778dd] w-full max-w-sm"></div>
      </div>
      
      {linkText && linkHref && (
        <a href={linkHref} className="text-[#abb2bf] hover:text-white transition-colors flex items-center gap-2">
          {linkText} ~~&gt;
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
