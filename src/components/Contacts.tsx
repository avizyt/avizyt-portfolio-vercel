import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

const Contacts: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  return (
    <section id="contacts" className="px-4 md:px-12 lg:px-24 py-16">
      <SectionHeader title="contacts" />
      
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="flex-1 text-[#abb2bf] text-lg max-w-xl">
          <p>
            I’m interested in AI/ML Engineer role. However, if you have other request or question, don’t hesitate to contact me
          </p>
        </div>
        
        <div className="flex-1 flex justify-end">
            <div className="border border-[#abb2bf] p-4 space-y-4 min-w-[200px] h-fit">
                <h4 className="font-bold text-white mb-4">Message me here</h4>
                
                {/* Email Section */}
                <div className="flex items-center justify-between gap-4 group">
                    <a 
                      href="mailto:biswas.avijit23@gmail.com" 
                      className="flex items-center gap-2 text-[#abb2bf] hover:text-white transition-colors underline decoration-[#c778dd] decoration-dotted underline-offset-4"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>biswas.avijit23@gmail.com</span>
                    </a>
                    <button 
                      onClick={() => copyToClipboard('biswas.avijit23@gmail.com', 'email')}
                      className="text-[#abb2bf] hover:text-[#c778dd] transition-colors p-1"
                      title="Copy Email"
                    >
                      {copiedText === 'email' ? '✓' : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      )}
                    </button>
                </div>

                {/* LinkedIn Section */}
                <div className="flex items-center justify-between gap-4 group">
                    <a 
                      href="https://linkedin.com/in/avijit-biswas-ml/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[#abb2bf] hover:text-white transition-colors underline decoration-[#c778dd] decoration-dotted underline-offset-4"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>avijit-biswas-ml (LinkedIn)</span>
                    </a>
                    <button 
                      onClick={() => copyToClipboard('https://linkedin.com/in/avijit-biswas-ml/', 'linkedin')}
                      className="text-[#abb2bf] hover:text-[#c778dd] transition-colors p-1"
                      title="Copy LinkedIn Link"
                    >
                      {copiedText === 'linkedin' ? '✓' : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      )}
                    </button>
                </div>

                {/* X (Twitter) Section */}
                <div className="flex items-center justify-between gap-4 group">
                    <a 
                      href="https://x.com/avizyt" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[#abb2bf] hover:text-white transition-colors underline decoration-[#c778dd] decoration-dotted underline-offset-4"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                        <span>@avizyt (X)</span>
                    </a>
                    <button 
                      onClick={() => copyToClipboard('https://x.com/avizyt', 'x')}
                      className="text-[#abb2bf] hover:text-[#c778dd] transition-colors p-1"
                      title="Copy X Link"
                    >
                      {copiedText === 'x' ? '✓' : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      )}
                    </button>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
