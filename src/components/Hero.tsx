import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="px-4 md:px-12 lg:px-24 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            Avijit is an <span className="text-[#c778dd]">AI/ML Engineer</span> and <span className="text-[#c778dd]">Data Scientist</span>
        </h1>
        <p className="text-[#abb2bf] text-lg mb-8 max-w-lg">
            He builds production-grade RAG systems, multi-agent pipelines, and LLM-powered applications.
        </p>
        <a 
          href="#contacts" 
          className="inline-block px-8 py-3 border-2 border-[#c7ba03] text-white hover:bg-[#c778dd]/10 transition-colors font-semibold"
        >
          Contact me!!
        </a>
      </div>
      
      <div className="flex-1 relative">
        <div className="relative z-10 mx-auto w-full max-w-sm">
           <img src="/image/personal.png" alt="Avijit" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 border-b-2 border-[#c778dd]" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 -z-10 text-[#c778dd]">
            <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="154" height="154" stroke="currentColor"/>
            </svg>
        </div>
        
        <div className="absolute bottom-10 right-0 -z-10 text-[#abb2bf]">
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[...Array(25)].map((_, i) => (
                    <circle key={i} cx={(i % 5) * 20 + 2} cy={Math.floor(i / 5) * 20 + 2} r="2" fill="currentColor"/>
                ))}
            </svg>
        </div>
        
        <div className="mt-8 border border-[#abb2bf] p-2 flex items-center gap-2 text-[#abb2bf]">
            <div className="w-4 h-4 bg-[#c778dd]"></div>
            <span>Currently working on <span className="text-white font-bold">Agentic AI System</span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
