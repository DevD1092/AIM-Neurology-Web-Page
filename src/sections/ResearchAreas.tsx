import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Brain, Activity, Stethoscope, ShieldCheck } from 'lucide-react';

const researchAreas = [
  {
    number: '01',
    icon: Brain,
    title: 'Foundation Models for Video-EEG Monitoring',
    description: 'Developing deep learning models for automated seizure detection and tracking. Our systems analyze video-EEG data to identify seizure patterns and provide real-time monitoring capabilities.',
    highlights: ['Seizure detection', 'Video analysis', 'Pattern recognition']
  },
  {
    number: '02',
    icon: Activity,
    title: 'Agentic AI for Clinical Decision Support',
    description: 'Intelligent systems designed to support Video EEG Monitoring (VEM) sessions with real-time clinical recommendations and decision-making assistance for healthcare providers.',
    highlights: ['Real-time support', 'VEM assistance', 'Clinical recommendations']
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Multimodal AI for Therapy Planning',
    description: 'AI-driven approaches for personalized therapy planning, including medication recommendations and surgical planning assistance tailored to individual patient needs.',
    highlights: ['Medication planning', 'Surgical assistance', 'Personalized care']
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Privacy-Preserving AI',
    description: 'Secure analysis of sensitive medical data using federated learning and privacy-preserving techniques to protect patient information while enabling collaborative research.',
    highlights: ['Federated learning', 'Data security', 'Privacy protection']
  }
];

export function ResearchAreas() {
  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Research Directions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our key research areas in neurological AI, focusing on transforming 
            epilepsy care through innovative artificial intelligence solutions.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </FadeIn>

        {/* Research Areas Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area) => (
            <StaggerItem key={area.number}>
              <div className="bg-white rounded-2xl p-8 h-full border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-4xl font-bold text-slate-200">
                      {area.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {area.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
