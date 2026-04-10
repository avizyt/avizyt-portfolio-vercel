import React from 'react';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about-me" className="px-4 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-[3]">
        <SectionHeader title="about-me" />
        <div className="text-[#abb2bf] space-y-6 text-lg">
          <p>Hello, i’m Avijit!</p>
          <p>
            I’m a self-taught AI Developer based in Bangalore, India. I can develop production-grade AI solutions from scratch and integrate them into modern user-friendly web experiences.
          </p>
          <p>
            Transforming complex technical requirements into scalable AI systems has been my passion for over 3 years. I have been helping various clients to establish their AI presence. I always strive to learn about the newest technologies and frameworks.
          </p>
        </div>
        <div className="mt-8">
            <a 
              href="public/cv/Avijit_Biswas_AIML.pdf" 
              target="_blank"
              className="inline-block px-8 py-2 border-2 border-[#c778dd] text-white hover:bg-[#c778dd]/10 transition-colors font-medium"
            >
              Download CV -&gt;
            </a>
        </div>
      </div>
      
      <div className="flex-[2] relative hidden md:block">
        <div className="relative z-10 w-full max-w-xs mx-auto">
             <img src="public/image/personal.png" alt="Avijit Biswas" className="w-full h-auto border-b border-[#c778dd] grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
        
        {/* Decorative dots from Figma */}
        <div className="absolute top-20 left-0 -z-10 text-[#abb2bf]">
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[...Array(25)].map((_, i) => (
                    <circle key={i} cx={(i % 5) * 20 + 2} cy={Math.floor(i / 5) * 20 + 2} r="2" fill="currentColor"/>
                ))}
            </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
