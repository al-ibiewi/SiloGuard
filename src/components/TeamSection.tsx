import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const THEME = {
  colors: {
    primary: '#00a63e',
    secondary: '#9cd32e',
  }
};

const TeamSection = () => {
  const { primary, secondary } = THEME.colors;

  const team = [
    {
      name: 'Abubakar Zubair Okhayole',
      role: 'CTO',
      expertise: 'Electrical Engineering | IoT & Edge AI Specialist',
      bio: 'Founder of AL-IBIEWI, specializing in embedded systems and AIoT solutions'
    },
    {
      name: 'Ammar Ahmad Faringida',
      role: 'COO',
      expertise: 'Food Science & Technology',
      bio: 'Specialist in post-harvest safety and food quality management'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team combines Engineering and Food Science to solve agricultural problems with Data & ML
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/40 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:shadow-lg transition-all"
              style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
            >
              {index === 0 ? (
                <picture>
                  <source srcSet="/SiloGuard/abubakar-profile.webp" type="image/webp" />
                  <img 
                    src="/SiloGuard/abubakar-profile.png" 
                    alt={member.name}
                    className="w-64 h-64 rounded-full mx-auto mb-4 object-cover"
                    width="256"
                    height="256"
                    loading="lazy"
                  />
                </picture>
              ) : index === 1 ? (
                <picture>
                  <source srcSet="/SiloGuard/ammar-profile.webp" type="image/webp" />
                  <img 
                    src="/SiloGuard/ammar-profile.png" 
                    alt={member.name}
                    className="w-64 h-64 rounded-full mx-auto mb-4 object-cover"
                    width="256"
                    height="256"
                    loading="lazy"
                  />
                </picture>
              ) : (
                <div className="w-64 h-64 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: `linear-gradient(to bottom right, ${primary}, ${secondary})`}}>
                  <MessageSquare className="w-32 h-32 text-white" />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="font-semibold" style={{color: primary}}>{member.role}</p>
              <p className="text-gray-500 text-sm mb-3">{member.expertise}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Experts Say About SiloGuard
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
              <div className="text-4xl mb-2" style={{color: primary}}>"</div>
              <p className="text-gray-700 mb-4">This project is an impressive idea. I will contact Dr. Mustapha for you to meet him as he has expertise in Food Egineering</p>
              <p className="font-semibold text-gray-900">Prof. Hauwa L. Yusuf</p>
              <p className="text-sm text-gray-500">Food Science, BUK</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
              <div className="text-4xl mb-2" style={{color: secondary}}>"</div>
              <p className="text-gray-700 mb-4">[He acknowledged the idea and added:] 
"You will need a large amount of data for this product. I will connect you will and expert in Ai modelling in China, who is my friend"</p>
              <p className="font-semibold text-gray-900">Dr. Mustapha</p>
              <p className="text-sm text-gray-500">PhD Food Safety, M.D. Rice Processing Factory</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
