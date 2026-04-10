import React from 'react';
import SectionHeader from './SectionHeader';

interface SkillBoxProps {
  title: string;
  skills: string[];
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => {
  return (
    <div className="border border-[#abb2bf] flex flex-col h-fit">
      <div className="border-b border-[#abb2bf] p-2 font-bold text-white">
        {title}
      </div>
      <div className="p-2 flex flex-wrap gap-2 text-[#abb2bf]">
        {skills.map((skill, idx) => (
          <span key={idx}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-4 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row gap-12">
      <div className="flex-1 hidden md:block relative">
        {/* Decorative elements from Figma - dots and square outlines */}
        <div className="absolute top-10 left-0 text-[#abb2bf]">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="currentColor"/>
                <circle cx="22" cy="2" r="2" fill="currentColor"/>
                <circle cx="42" cy="2" r="2" fill="currentColor"/>
                <circle cx="62" cy="2" r="2" fill="currentColor"/>
                <circle cx="2" cy="22" r="2" fill="currentColor"/>
                <circle cx="22" cy="22" r="2" fill="currentColor"/>
                <circle cx="42" cy="22" r="2" fill="currentColor"/>
                <circle cx="62" cy="22" r="2" fill="currentColor"/>
                <circle cx="2" cy="42" r="2" fill="currentColor"/>
                <circle cx="22" cy="42" r="2" fill="currentColor"/>
                <circle cx="42" cy="42" r="2" fill="currentColor"/>
                <circle cx="62" cy="42" r="2" fill="currentColor"/>
                <circle cx="2" cy="62" r="2" fill="currentColor"/>
                <circle cx="22" cy="62" r="2" fill="currentColor"/>
                <circle cx="42" cy="62" r="2" fill="currentColor"/>
                <circle cx="62" cy="62" r="2" fill="currentColor"/>
            </svg>
        </div>
        
        <div className="absolute top-24 right-10 text-[#c7ba03]">
            <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="85" height="85" stroke="currentColor"/>
            </svg>
        </div>
        
        <div className="absolute bottom-10 left-10 text-[#abb2bf]">
            <svg width="113" height="113" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="51" height="51" stroke="currentColor"/>
                <rect x="61.5" y="61.5" width="51" height="51" stroke="currentColor"/>
            </svg>
        </div>
      </div>
      
      <div className="flex-[2]">
        <SectionHeader title="skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillBox 
            title="Languages" 
            skills={['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL']} 
          />
          <SkillBox 
            title="Databases" 
            skills={['PostgreSQL', 'ChromaDB', 'Redis', 'MongoDB']} 
          />
          <SkillBox 
            title="Tools" 
            skills={['Docker', 'Git', 'AWS', 'VS Code', 'LiteLLM']} 
          />
          <SkillBox 
            title="Other" 
            skills={['Quantization', 'Agentic AI', 'RAG Systems', 'Linux']} 
          />
          <SkillBox 
            title="Frameworks" 
            skills={['PyTorch', 'FastAPI', 'LangChain', 'CrewAI', 'LlamaIndex', 'React']} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
