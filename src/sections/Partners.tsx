import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Building2, UserCircle2, FlaskConical, HeartPulse } from 'lucide-react';

const clinicalPartners = [
  {
    name: 'Professor Patrick Kwan',
    affiliation: 'Clinical Collaborator',
    icon: UserCircle2
  },
  {
    name: 'Dr. Shobi Sivathamboo',
    affiliation: 'Clinical Collaborator',
    icon: UserCircle2
  },
  {
    name: 'Professor Meng Law',
    affiliation: 'Clinical Collaborator',
    icon: UserCircle2
  },
  {
    name: 'Dr. Dinesh Giritharan',
    affiliation: 'Clinical Collaborator',
    icon: UserCircle2
  }
];

const institutionalPartners = [
  {
    name: 'National Imaging Facility',
    description: 'NCRIS-funded national research infrastructure',
    icon: FlaskConical
  },
  {
    name: 'Alfred Health',
    description: 'Leading Victorian healthcare provider',
    icon: HeartPulse
  },
  {
    name: 'Australian Epilepsy Project',
    description: 'National epilepsy research initiative',
    icon: Building2
  }
];

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Collaborating with leading clinicians, healthcare institutions, and 
            research facilities to advance neurological AI.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </FadeIn>

        {/* Clinical Collaborators */}
        <FadeIn className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
            Clinical Collaborators
          </h3>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clinicalPartners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="bg-slate-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300">
                <partner.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-900 mb-1">{partner.name}</h4>
                <p className="text-sm text-slate-500">{partner.affiliation}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Institutional Partners */}
        <FadeIn className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
            Institutional Partners
          </h3>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {institutionalPartners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all duration-300">
                <partner.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">{partner.name}</h4>
                <p className="text-sm text-slate-600">{partner.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
