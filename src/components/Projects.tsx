import React from 'react';
import SectionHeader from './SectionHeader';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveHref: string;
  cachedHref: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image, liveHref, cachedHref }) => {
  return (
    <div className="border border-[#abb2bf] bg-[#282c33] flex flex-col h-full">
      <div className="border-b border-[#abb2bf] h-48 overflow-hidden bg-[#282c33]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#abb2bf]">
             [Project Image Placeholder]
          </div>
        )}
      </div>
      
      <div className="border-b border-[#abb2bf] p-2 flex flex-wrap gap-2 text-[#abb2bf]">
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-[#abb2bf] mb-6 flex-grow">{description}</p>
        
        <div className="flex gap-4">
          <a 
            href={liveHref} 
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border-2 border-[#c778dd] text-white hover:bg-[#c778dd]/10 transition-colors font-medium"
          >
            Live &lt;~&gt;
          </a>
          <a 
            href={cachedHref} 
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border-2 border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf]/10 transition-colors font-medium"
          >
            Cached &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'B2B outreach agent',
      description: 'Multi-agent B2B outreach engine using CrewAI and LiteLLM.',
      tags: ['Python', 'CrewAI', 'LiteLLM', 'Ollama'],
      liveHref: 'https://github.com/avizyt/outreach-campaign-agent',
      cachedHref: 'https://github.com/avizyt/outreach-campaign-agent',
    },
    {
        title: 'NanoQuant engine',
        description: '4-Bit LLM Quantization library reducing VRAM footprint by 75%.',
        tags: ['PyTorch', 'Transformers', 'Python', 'C++'],
        liveHref: 'https://github.com/avizyt/nano-quantization-llm',
        cachedHref: 'https://github.com/avizyt/nano-quantization-llm',
    },
    {
        title: 'Gemini Discovery API',
        description: 'Multimodal API leveraging Gemini Vision Pro for product info extraction.',
        tags: ['FastAPI', 'LlamaIndex', 'Google Gemini'],
        liveHref: 'https://github.com/avizyt/gemini-product-discovery',
        cachedHref: 'https://github.com/avizyt/gemini-product-discovery',
    },
    {
        title: 'URL Shortener with FastAPI',
        description: 'Simple URL shortening service built with FastAPI.',
        tags: ['FastAPI', 'Python', 'SQLite'],
        liveHref: 'https://github.com/avizyt/fastapi-urlshortner',
        cachedHref: 'https://github.com/avizyt/fastapi-urlshortner',
    },
    {
        title: 'Real Time Chat CLI using Rust',
        description: 'Real-time chat application built with Rust and Tokio.',
        tags: ['Rust', 'Tokio', 'Async'],
        liveHref: 'https://github.com/avizyt/RTchat-cli',
        cachedHref: 'https://github.com/avizyt/RTchat-cli',
    }
  ];

  return (
    <section id="works" className="px-4 md:px-12 lg:px-24 py-16">
      <SectionHeader title="projects" linkText="View all" linkHref="#works" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
