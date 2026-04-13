import { FadeIn } from '@/components/FadeIn';
import { Brain, Mail, MapPin, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Team', href: '#team' },
  { name: 'Partners', href: '#partners' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">AIM for Neurology</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Advancing neurological care through AI innovation. Building safe, 
                interpretable, and multimodal AI systems for epilepsy and neurology management.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Part of</span>
                <a 
                  href="https://www.monash.edu/it/dsai/aim-for-health" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  AIM for Health Lab
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-300">AIM for Health Lab</p>
                    <p className="text-slate-400">Monash University</p>
                    <p className="text-slate-400">Australia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a 
                    href="mailto:zongyuan.ge@monash.edu"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    zongyuan.ge@monash.edu
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} AIM for Neurology. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm">
              AIM for Health Lab, Monash University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
