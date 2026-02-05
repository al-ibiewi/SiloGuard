import { motion } from 'framer-motion';

const THEME = {
  colors: {
    primary: '#00a63e',
    secondary: '#9cd32e',
  }
};

const ImpactSection = () => {
  const { primary, secondary } = THEME.colors;

  const sdgs = [
    { number: '2', title: 'Zero Hunger', description: 'Save food that is already grown, effectively increasing supply' },
    { number: '13', title: 'Climate Action', description: 'Solar-powered + preventing carbon footprint of wasted food' },
    { number: '3', title: 'Good Health', description: 'Early mold detection prevents carcinogenic mycotoxins' },
    { number: '9', title: 'Innovation', description: 'Bringing cutting-edge AI to the rural "last mile"' },
    { number: '12', title: 'Responsible Production', description: 'Promoting sustainable consumption patterns' }
  ];

  return (
    <section id="impact" className="py-20" style={{background: `linear-gradient(to bottom right, ${primary}, ${secondary})`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Impact & Sustainable Development Goals
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
            Saving 30% of the harvest is cheaper & easier than growing 30% more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold" style={{color: primary}}>{sdg.number}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{sdg.title}</h3>
              <p className="text-white text-xs opacity-80">{sdg.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
