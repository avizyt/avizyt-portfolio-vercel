import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#abb2bf] px-4 md:px-12 lg:px-24 py-12 mt-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 font-bold text-white text-xl">
              <img src="assets/my image.jpg" alt="Logo" className="w-6 h-6 rounded-full grayscale" />
              <div className="flex items-center gap-2">
                <span className="text-[#c7ba03]">//</span>
                <span>Avijit Biswas</span>
              </div>
            </div>
            {/* <span className="text-[#abb2bf]">biswas.avijit23@gmail.com</span> */}
          </div>
          <p className="text-white">ML Engineer and Data Scientist</p>
        </div>
        
        <div className="space-y-4 md:text-right">
          <h4 className="text-white text-xl font-bold">Media</h4>
          <div className="flex md:justify-end gap-4 text-[#abb2bf]">
            <a href="https://github.com/biswas-avijit" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com/in/avijit-biswas-ml/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://x.com/avizyt" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-[#abb2bf]">
        © Copyright 2026. Made with ❤️ by Avijit
      </div>
    </footer>
  );
};

export default Footer;
