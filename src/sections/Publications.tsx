import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

const publications = [
  {
    title: 'Development and validation of a deep learning model for predicting treatment response in patients with newly diagnosed epilepsy',
    authors: 'Hakeem, H., Feng, W., Chen, Z., Choong, J., Brodie, M. J., Fong, S. L., ... & Kwan, P.',
    journal: 'JAMA Neurology',
    year: '2022',
    volume: '79(10), 986-996',
    tags: ['Deep Learning', 'Epilepsy', 'Treatment Prediction']
  },
  {
    title: 'New era of personalised epilepsy management',
    authors: 'Chen, Z., Rollo, B., Antonic-Baker, A., Anderson, A., Ma, Y., O\'Brien, T. J., ... & Kwan, P.',
    journal: 'BMJ',
    year: '2020',
    volume: '371',
    tags: ['Personalized Medicine', 'Epilepsy', 'Clinical Care']
  },
  {
    title: 'Privacy-preserving early detection of epileptic seizures in videos',
    authors: 'Mehta, D., Sivathamboo, S., Simpson, H., Kwan, P., O\'Brien, T., & Ge, Z.',
    journal: 'International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)',
    year: '2023',
    volume: 'pp. 210-219',
    tags: ['Privacy-Preserving', 'Seizure Detection', 'Video Analysis']
  },
  {
    title: 'Adapting Biomedical Foundation Models for Predicting Outcomes of Anti Seizure Medications',
    authors: 'Pham, D. K., Mehta, D., Jiang, Y., Thom, D., Chang, R. S. K., Foster, E., ... & Ge, Z.',
    journal: 'MICCAI 2025 (Accepted)',
    year: '2025',
    volume: 'medRxiv',
    tags: ['Foundation Models', 'Medication Prediction', 'Biomedical AI']
  }
];

const grants = [
  {
    name: 'National Imaging Facility NCRIS Grant',
    description: 'Supporting national neuroimaging infrastructure and AI development'
  },
  {
    name: 'PERSONAL Trial',
    description: 'Personalized epilepsy management through AI-powered clinical decision support'
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Publications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our latest research contributions to neurological AI and epilepsy care, 
            published in leading peer-reviewed journals and conferences.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </FadeIn>

        {/* Publications List */}
        <StaggerContainer className="space-y-6 mb-16">
          {publications.map((pub, index) => (
            <StaggerItem key={index}>
              <div className="bg-slate-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-slate-500 mb-3">
                      <span className="font-medium">{pub.journal}</span>, {pub.year}, {pub.volume}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Grants Section */}
        <FadeIn>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Research Funding</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {grants.map((grant) => (
                <div
                  key={grant.name}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                >
                  <h4 className="font-semibold text-lg mb-2">{grant.name}</h4>
                  <p className="text-blue-100">{grant.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
