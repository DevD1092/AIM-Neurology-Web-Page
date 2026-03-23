import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Globe, Users, Database, Shield } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Addressing one of the world\'s greatest health burdens affecting hundreds of millions'
  },
  {
    icon: Users,
    title: 'Patient-Centered',
    description: 'Tailored management for epilepsy, stroke, dementia, and traumatic brain injury'
  },
  {
    icon: Database,
    title: 'Multimodal Data',
    description: 'Integrating neuroimaging, EEG, patient histories, genomics, and functional assessments'
  },
  {
    icon: Shield,
    title: 'Open & Validated',
    description: 'Clinically validated, reusable tools transforming neuroimaging across Australia'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About the Group
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </FadeIn>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Neurological disorders are among the world&apos;s greatest health burdens, 
                affecting hundreds of millions globally. In Australia, conditions such as 
                epilepsy, stroke, dementia, Parkinson&apos;s disease, and traumatic brain injury 
                are leading causes of long-term impairment.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Managing neurological conditions is highly complex and must be tailored to 
                the individual. Clinicians must integrate multimodal information—neuroimaging 
                (MRI, PET), electrophysiology (EEG, ECG), patient histories, genomics, and 
                functional assessments.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                This project delivers a nationally accessible platform for foundational 
                neuroimaging models, with a multimodal AI use case in epilepsy care. It 
                provides open, reusable, and clinically validated tools, transforming how 
                neuroimaging is accessed, interpreted, and applied across Australia.
              </p>
            </div>
          </FadeIn>

        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="bg-slate-50 rounded-xl p-6 h-full hover:bg-blue-50 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
