import { useState } from 'react';
import { motion } from 'framer-motion';

const THEME = {
  colors: {
    primary: '#00a63e',
    secondary: '#9cd32e',
  }
};

const FAQSection = () => {
  const { primary } = THEME.colors;
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'How does SiloGuard detect insect infestations?',
      answer: 'SiloGuard uses advanced acoustic sensors to detect the sound frequencies produced by insects feeding on grains. Our AI algorithms analyze these acoustic patterns in real-time to identify pest activity before visible damage occurs.'
    },
    {
      question: 'Does SiloGuard require internet or grid power?',
      answer: 'No. SiloGuard is 100% solar-powered and operates completely off-grid. It uses SMS for alerts, so it only needs basic cellular connectivity - no Wi-Fi or electricity required.'
    },
    {
      question: 'How much does a SiloGuard device cost?',
      answer: 'A SiloGuard unit costs ₦45,000 and protects a 50-ton grain storage. Based on average losses of 30%+, the device pays for itself within just 1 harvest season by preventing spoilage.'
    },
    {
      question: 'How often do I get alerts?',
      answer: 'You receive real-time SMS alerts as soon as our AI detects pest activity or dangerous environmental conditions (high humidity, temperature fluctuations). You can also check your cloud dashboard anytime for historical data.'
    },
    {
      question: 'Is there a subscription fee?',
      answer: 'Basic hardware and SMS alerts are included with purchase. Optional: SaaS analytics subscription (₦2,000/season) for industries wanting advanced insights, predictive analytics, and multi-site monitoring.'
    },
    {
      question: 'What about mold detection?',
      answer: 'SiloGuard monitors environmental factors (humidity, temperature, CO₂) that promote mold growth. When conditions favor mold, you get immediate alerts to take corrective action before mycotoxins develop.'
    },
    {
      question: 'Can I use SiloGuard with multiple grain stores?',
      answer: 'Yes! Each device covers a 50-ton storage unit. You can deploy multiple units across different silos and monitor all of them on a single dashboard, especially with our SaaS subscription.'
    },
    {
      question: 'How long does a SiloGuard device last?',
      answer: 'Our devices are built to withstand harsh agricultural environments. With proper maintenance, they last multiple years, meaning the payback period is even better as you benefit from seasons of protection.'
    },
    {
      question: 'Do I need any special training to use it?',
      answer: 'No special training required. Installation takes a few hours, and you immediately start receiving SMS alerts. Everything is designed to be simple and intuitive for farmers.'
    },
    {
      question: 'What makes SiloGuard different from other solutions?',
      answer: 'SiloGuard is the only solution that combines acoustic insect detection + environmental monitoring + solar power + SMS alerts specifically for off-grid rural farming. Most competitors require grid power and internet, making them useless in remote areas.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SiloGuard
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white/40 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)'}}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/20 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <span className="text-2xl flex-shrink-0" style={{color: primary}}>
                  {expandedFaq === index ? '−' : '+'}
                </span>
              </button>
              
              {expandedFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-4 pt-2 border-t border-white/20 bg-white/10"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-2 border-gray-200 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is ready to help. Reach out to us directly.
          </p>
          <a href="https://wa.link/kj1rz8" target="_blank" rel="noopener noreferrer">
            <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg" style={{backgroundColor: primary}}>
              Contact Us on WhatsApp
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
