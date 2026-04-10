import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#282c33] min-h-screen font-mono selection:bg-[#c778dd] selection:text-white">
      {/* Social Sidebar - Left fixed (Figma style) */}
      <div className="hidden lg:flex fixed left-4 top-0 bottom-0 flex-col items-center z-40">
        <div className="w-[px] h-48 bg-[#abb2bf]"></div>
        <div className="flex flex-col gap-4 py-8 text-[#abb2bf]">
          <a href="https://github.com/avizyt" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/avijit-biswas-ml/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://x.com/avizyt" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <main>
          <Hero />
          <Quote />
          <Projects />
          <Skills />
          <About />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
