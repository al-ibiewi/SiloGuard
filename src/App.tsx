import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, Thermometer, Sun, Smartphone, Bot, Cloud, 
  Bug, Biohazard, Droplet, AlertTriangle, Database, 
  Cpu, MessageSquare, BarChart3, Globe, Radio, Zap, Mic 
} from 'lucide-react';

// ========== THEME CONFIGURATION ==========
// Update colors and styles here for site-wide changes
const THEME = {
  colors: {
    primary: '#00a63e',      // Main brand color
    secondary: '#9cd32e',    // Accent/highlight color
  },
  opacity: {
    light: '15',  // Light tint (15%)
    medium: '20', // Medium tint (20%)
    dark: '30',   // Dark tint (30%)
    subtle: '80', // Subtle opacity (80%)
  }
};

// Helper function for color with opacity
const colorWithOpacity = (color: string, opacityPercent: string) => {
  const opacity = Math.round((parseInt(opacityPercent) / 100) * 255).toString(16);
  return color + opacity.padStart(2, '0').toUpperCase();
};

// Counter component for animated numbers
const Counter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const App = () => {
  const { primary, secondary } = THEME.colors;
  const { light, medium, dark } = THEME.opacity;
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const features = [
    {
      icon: Target,
      title: 'Acoustic Detection',
      description: 'AI-powered insect detection through advanced acoustic analysis'
    },
    {
      icon: Thermometer,
      title: 'Environmental Sensing',
      description: 'Continuous monitoring of temperature, humidity, and CO₂ levels'
    },
    {
      icon: Sun,
      title: 'Solar Powered',
      description: '100% autonomous operation with solar energy harvesting'
    },
    {
      icon: Smartphone,
      title: 'SMS Alerts',
      description: 'Instant notifications without relying on internet connectivity'
    },
    {
      icon: Bot,
      title: 'Edge AI',
      description: 'On-device processing for real-time decision making'
    },
    {
      icon: Cloud,
      title: 'Cloud Dashboard',
      description: 'Comprehensive analytics and historical data tracking'
    }
  ];

  const problems = [
    {
      title: 'Insect Infestation',
      description: 'Insects feed on grains, causing weight loss and contamination',
      icon: Bug
    },
    {
      title: 'Mold Growth',
      description: 'Produces toxic mycotoxins, making grains unsafe and unmarketable',
      icon: Biohazard
    },
    {
      title: 'Moisture Fluctuations',
      description: 'Accelerates spoilage and promotes pest/mold growth',
      icon: Droplet
    },
    {
      title: 'Reactive Protection',
      description: 'Conventional storages offer partial, reactive protection, not proactive prevention',
      icon: AlertTriangle
    }
  ];

  const limitations = [
    {
      title: '"Black Box" Detection Gap',
      description: 'Current methods fail to detect deep infestations until the grain is already destroyed'
    },
    {
      title: 'Dangerous Speculation',
      description: 'Lack of diagnostic data leads to "blind fumigation" and hazardous overuse of chemicals'
    },
    {
      title: 'Infrastructural Incompatibility',
      description: 'Existing smart solutions rely on grid power and Wi-Fi, useless in off-grid rural Nigeria'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Data Collection',
      description: 'Sensors collect acoustic signals and environmental data from grain storage'
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Edge AI analyzes data locally to detect insect activity and spoilage risks'
    },
    {
      step: '03',
      title: 'Instant Alerts',
      description: 'SMS and buzzer alerts notify farmers immediately with actionable insights'
    },
    {
      step: '04',
      title: 'Cloud Sync',
      description: 'Data syncs to cloud dashboard for analytics and historical tracking when online'
    }
  ];

  const sdgs = [
    { number: '2', title: 'Zero Hunger', description: 'Save food that is already grown, effectively increasing supply' },
    { number: '13', title: 'Climate Action', description: 'Solar-powered + preventing carbon footprint of wasted food' },
    { number: '3', title: 'Good Health', description: 'Early mold detection prevents carcinogenic mycotoxins' },
    { number: '9', title: 'Innovation', description: 'Bringing cutting-edge AI to the rural "last mile"' },
    { number: '12', title: 'Responsible Production', description: 'Promoting sustainable consumption patterns' }
  ];

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

  const financials = [
    { metric: 'Units Sold', year1: '500', year2: '5,000', year3: '25,000' },
    { metric: 'Annual Revenue', year1: '₦22.5M', year2: '₦235M', year3: '₦1.17B' },
    { metric: 'Gross Profit (37%)', year1: '₦8.3M', year2: '₦87M', year3: '₦435M' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <picture>
                <source srcSet="/SiloGuard/logo.webp" type="image/webp" />
                <img src="/SiloGuard/logo.png" alt="SiloGuard" className="h-13" />
              </picture>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'solution', 'how', 'team', 'faq', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-colors ${activeSection === item ? '' : 'text-gray-600'}`}
                  style={{color: activeSection === item ? primary : undefined}}
                >
                  {item === 'how' ? 'How It Works' : item === 'faq' ? 'FAQ' : item}
                </button>
              ))}
              <a href="https://wa.link/kj1rz8" target="_blank" rel="noopener noreferrer">
                <button className="text-white px-5 py-2 rounded-lg font-medium transition-colors" style={{backgroundColor: primary}}>
                  Get Started
                </button>
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['home', 'solution', 'how', 'team', 'faq', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 text-gray-600"
                  style={{color: activeSection === item ? primary : undefined}}
                >
                  {item === 'how' ? 'How It Works' : item === 'faq' ? 'FAQ' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 relative min-h-screen flex items-center overflow-x-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: 'url(/SiloGuard/grains.webp), url(/SiloGuard/grains.png)'}}
        ></div>
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 bg-white/10 backdrop-blur-md border border-white/20" 
              style={{color: secondary}}
            >
              <Globe className="mr-2 w-5 h-5" />
              Saving 30% of the harvest is cheaper & easier than growing 30% more
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
            >
              Intelligent Protection
              <span className="block mt-2" style={{color: secondary}}> for Stored Grains</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              SiloGuard is a modular, solar-powered, AI-driven monitoring device that combines acoustic insect detection with environmental sensing to provide real-time early warnings.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              <a href="https://wa.link/kj1rz8" target="_blank" rel="noopener noreferrer">
                <button className="text-white px-10 py-5 rounded-xl font-semibold transition-all shadow-2xl hover:scale-105" style={{backgroundColor: primary}}>
                  Learn More
                </button>
              </a>
              <button className="text-white px-10 py-5 rounded-xl font-semibold bg-white/10 backdrop-blur-md border-2 border-white/30 transition-all hover:bg-white/20">
                Watch Demo
              </button>
            </motion.div>

            {/* Desktop View - Static */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden md:flex flex-wrap gap-8 justify-center"
            >
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Bot className="w-6 h-6 text-white" />
                <span className="text-base font-medium text-white">AI/ML</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Cpu className="w-6 h-6 text-white" />
                <span className="text-base font-medium text-white">Embedded</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Radio className="w-6 h-6 text-white" />
                <span className="text-base font-medium text-white">IoT</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Mic className="w-6 h-6 text-white" />
                <span className="text-base font-medium text-white">Acoustic</span>
              </div>
            </motion.div>

            {/* Mobile View - Marquee */}
            <div className="md:hidden overflow-x-hidden relative w-full max-w-full">
              <div className="inline-block animate-marquee">
                <div className="flex gap-4">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-4">
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 whitespace-nowrap">
                        <Bot className="w-6 h-6 text-white flex-shrink-0" />
                        <span className="text-base font-medium text-white">AI/ML</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 whitespace-nowrap">
                        <Cpu className="w-6 h-6 text-white flex-shrink-0" />
                        <span className="text-base font-medium text-white">Embedded</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 whitespace-nowrap">
                        <Radio className="w-6 h-6 text-white flex-shrink-0" />
                        <span className="text-base font-medium text-white">IoT</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 whitespace-nowrap">
                        <Mic className="w-6 h-6 text-white flex-shrink-0" />
                        <span className="text-base font-medium text-white">Acoustic</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{backgroundColor: primary}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                <Counter end={30} duration={2} suffix="%" />
              </div>
              <div style={{color: `${secondary}ff`}}>Loss Reduction</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                ₦<Counter end={3.5} duration={2} />T
              </div>
              <div style={{color: `${secondary}ff`}}>Annual Losses in Nigeria</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                <Counter end={24} duration={2} />/7
              </div>
              <div style={{color: `${secondary}ff`}}>Autonomous Monitoring</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                <Counter end={100} duration={2} suffix="%" />
              </div>
              <div style={{color: `${secondary}ff`}}>Solar Powered</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nigeria loses an estimated <span className="text-red-600 font-semibold">₦3.5 trillion annually</span> to post-harvest losses, with over 50% of agricultural produce wasted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all"
                  style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
                >
                  <IconComponent className="w-10 h-10 mb-4 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Limitations of Current Solutions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {limitations.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <span className="inline-block text-white px-6 py-3 rounded-full font-semibold" style={{backgroundColor: primary}}>
                That's Why SiloGuard!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Testimonials Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Hear from the Farmers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Real stories from farmers facing post-harvest challenges
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
              style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                  title="Farmer Interview 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Farmer Interview 1</h3>
                <p className="text-gray-300 text-sm">Experience with grain storage challenges</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
              style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                  title="Farmer Interview 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Farmer Interview 2</h3>
                <p className="text-gray-300 text-sm">Post-harvest loss impact and solutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full text-sm font-medium mb-4 px-4 py-2" style={{backgroundColor: colorWithOpacity(primary, medium), color: primary}}>
              Our Solution
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              A 24/7 Autonomous "Baby Monitor" for Grain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SiloGuard combines Acoustic Surveillance with Environmental Sensing, using on-device Edge AI to process risks locally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all group"
                  style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
                >
                  <IconComponent className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" style={{color: primary}} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How SiloGuard Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple deployment, powerful insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: primary}}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-16 w-full h-0.5" style={{background: `linear-gradient(to right, ${primary}, transparent)`}}></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & SDGs */}
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

      {/* Business Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Smart Investment, Proven Returns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your losses pay for the device. Save your harvest, save your income.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/20" 
              style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{color: primary}}>The Real Cost</h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-gray-700 mb-2"><strong>Current Losses:</strong></p>
                  <p className="text-2xl font-bold text-red-600">30%+ of your harvest</p>
                  <p className="text-sm text-gray-600 mt-2">Lost to insects, mold, and spoilage annually</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    For a 50-ton grain store at ₦1,500/kg: <br/>
                    <strong>Loss = ₦22.5M+ per season</strong>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/20" 
              style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{color: secondary}}>The SiloGuard Solution</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-gray-700 mb-2"><strong>Device Investment:</strong></p>
                  <p className="text-2xl font-bold text-green-600">₦45,000 per unit</p>
                  <p className="text-sm text-gray-600 mt-2">Protect 50-ton storage + get real-time alerts</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Payback Timeline:</strong>
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    <strong style={{color: secondary}}>1 Harvest Season</strong>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Save just 5% of losses → Device pays for itself + generates profit
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border-2 rounded-2xl p-8 border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Model</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: colorWithOpacity(primary, light)}}>
                    <Smartphone className="w-5 h-5" style={{color: primary}} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hardware</h4>
                    <p className="text-sm text-gray-600">₦45,000 per unit</p>
                    <p className="text-xs text-gray-500 mt-1">For farmers protecting their harvest</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: colorWithOpacity(secondary, light)}}>
                    <BarChart3 className="w-5 h-5" style={{color: secondary}} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">SaaS Insights</h4>
                    <p className="text-sm text-gray-600">₦2,000/season</p>
                    <p className="text-xs text-gray-500 mt-1">For industries wanting advanced analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
                    />
                  </picture>
                ) : index === 1 ? (
                  <picture>
                    <source srcSet="/SiloGuard/ammar-profile.webp" type="image/webp" />
                    <img 
                      src="/SiloGuard/ammar-profile.png" 
                      alt={member.name}
                      className="w-64 h-64 rounded-full mx-auto mb-4 object-cover"
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
“You will need a large amount of data for this product. I will connect you will and expert in Ai modelling in China, who is my friend”</p>
                <p className="font-semibold text-gray-900">Dr. Mustapha</p>
                <p className="text-sm text-gray-500">PhD Food Safety, M.D. Rice Processing Factory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Harvest?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution in post-harvest management. Save food, save money, and feed the future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.link/kj1rz8" target="_blank" rel="noopener noreferrer">
              <button className="text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg" style={{backgroundColor: primary}}>
                Get a Quote
              </button>
            </a>
            <a href="https://wa.link/kj1rz8" target="_blank" rel="noopener noreferrer">
              <button className="text-white px-8 py-4 rounded-xl font-semibold transition-colors" style={{borderColor: 'white', borderWidth: '2px', color: 'white'}}>
                Contact Us
              </button>
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <a href="mailto:abubakar.o.zubair@gmail.com" className="transition-colors flex items-center gap-2" style={{color: '#666666'}}>
              <MessageSquare className="w-5 h-5" />
              abubakar.o.zubair@gmail.com
            </a>
            <a href="tel:+2348138188291" className="transition-colors flex items-center gap-2" style={{color: '#666666'}}>
              <Smartphone className="w-5 h-5" />
              +234 813 818 8291
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <picture>
                <source srcSet="/SiloGuard/logo.webp" type="image/webp" />
                <img src="/SiloGuard/logo.png" alt="SiloGuard" className="h-13" />
              </picture>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 SiloGuard. Intelligent Protection for Stored Grains.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>AI/ML Embedded System</span>
            <span>•</span>
            <span>IoT (Industry 4.0)</span>
            <span>•</span>
            <span>Acoustic Detection</span>
            <span>•</span>
            <span>Zero Hunger</span>
            <span>•</span>
            <span>Grains</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

