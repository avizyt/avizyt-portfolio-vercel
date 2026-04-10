import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-16 flex justify-center">
      <div className="relative group">
        {/* Quote Box */}
        <div className="border border-[#abb2bf] p-8 md:p-12 relative">
          <div className="absolute -top-4 left-4 bg-[#282c33] px-2 text-[#abb2bf]">
            <svg width="42" height="29" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.91 28.56H0L8.26 0H21.17L12.91 28.56ZM33.74 28.56H20.83L29.09 0H42L33.74 28.56Z" fill="#ABB2BF"/>
            </svg>
          </div>
          <p className="text-2xl md:text-3xl font-medium text-white text-center">
            Any sufficiently advanced technology is indistinguishable from magic.
          </p>
          <div className="absolute -bottom-4 right-4 bg-[#282c33] px-2 text-[#abb2bf]">
            <svg width="42" height="29" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M12.91 28.56H0L8.26 0H21.17L12.91 28.56ZM33.74 28.56H20.83L29.09 0H42L33.74 28.56Z" fill="#ABB2BF"/>
            </svg>
          </div>
        </div>
        
        {/* Author Box */}
        <div className="border border-[#abb2bf] border-t-0 p-4 self-end ml-auto max-w-fit flex justify-end">
            <span className="text-2xl text-[#abb2bf]">- Arthur C. Clarke</span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
