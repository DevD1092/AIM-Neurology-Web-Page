import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Mail, GraduationCap } from 'lucide-react';

const leadership = [
  {
    name: 'Associate Professor Zongyuan Ge',
    role: 'Group Lead',
    title: 'Co-Director, AIM for Health Lab',
    bio: 'Leading AI research in neurological applications with expertise in multimodal foundation models and clinical AI systems.',
    email: 'zongyuan.ge@monash.edu',
    image: 'zongyuan-ge.jpg'
  },
  {
    name: 'Dr Deval Mehta',
    role: 'Group Lead',
    title: 'Founding Member, AIM for Health Lab',
    bio: 'Specializing in privacy-preserving AI for seizure detection and video-based neurological analysis.',
    email: 'deval.mehta@monash.edu',
    image: 'deval-mehta.jpg'
  }
];

const researchers = [
  {
    name: 'Talha Ilyas',
    role: 'PhD Candidate',
    bio: 'Researching multimodal AI systems for epilepsy monitoring and clinical decision support.'
  },
  {
    name: 'Jiahe Liu',
    role: 'PhD Candidate',
    bio: 'Focusing on foundation models for neuroimaging analysis and therapy planning.'
  },
  {
    name: 'Hongxi Yang',
    role: 'PhD Candidate',
    bio: 'Developing agentic AI frameworks for real-time clinical support in neurology.'
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the researchers advancing neurological care through AI innovation 
            at Monash University.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </FadeIn>

        {/* Leadership Section */}
        <FadeIn className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
            Leadership
          </h3>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {leadership.map((person) => (
            <StaggerItem key={person.name}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`${import.meta.env.BASE_URL}images/team/${person.image}`}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                      {person.role}
                    </span>
                    <h4 className="font-semibold text-slate-900">{person.name}</h4>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-3">{person.title}</p>
                <p className="text-slate-600 mb-4">{person.bio}</p>
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    {person.email}
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Researchers Section */}
        <FadeIn className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
            PhD Candidates
          </h3>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {researchers.map((person) => (
            <StaggerItem key={person.name}>
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{person.name}</h4>
                    <span className="text-sm text-blue-600">{person.role}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{person.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Team Photo Section */}
        <FadeIn>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Our Team Together
            </h3>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}images/team-photo.jpg`}
                alt="NeuroAI Research Group Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-slate-500 mt-4 text-sm">
              The NeuroAI Research Group at Monash University
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
