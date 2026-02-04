import { useState } from 'react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      icon: '🎯',
      title: 'Acoustic Detection',
      description: 'AI-powered insect detection through advanced acoustic analysis'
    },
    {
      icon: '🌡️',
      title: 'Environmental Sensing',
      description: 'Continuous monitoring of temperature, humidity, and CO₂ levels'
    },
    {
      icon: '☀️',
      title: 'Solar Powered',
      description: '100% autonomous operation with solar energy harvesting'
    },
    {
      icon: '📱',
      title: 'SMS Alerts',
      description: 'Instant notifications without relying on internet connectivity'
    },
    {
      icon: '🤖',
      title: 'Edge AI',
      description: 'On-device processing for real-time decision making'
    },
    {
      icon: '☁️',
      title: 'Cloud Dashboard',
      description: 'Comprehensive analytics and historical data tracking'
    }
  ];

  const problems = [
    {
      title: 'Insect Infestation',
      description: 'Insects feed on grains, causing weight loss and contamination',
      icon: '🐛'
    },
    {
      title: 'Mold Growth',
      description: 'Produces toxic mycotoxins, making grains unsafe and unmarketable',
      icon: '🦠'
    },
    {
      title: 'Moisture Fluctuations',
      description: 'Accelerates spoilage and promotes pest/mold growth',
      icon: '💧'
    },
    {
      title: 'Reactive Protection',
      description: 'Conventional storages offer partial, reactive protection, not proactive prevention',
      icon: '⚠️'
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/SiloGuard/logo.png" alt="SiloGuard" className="h-10" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'problem', 'solution', 'how', 'impact', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-colors ${activeSection === item ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
                >
                  {item === 'how' ? 'How It Works' : item}
                </button>
              ))}
              <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
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
              {['home', 'problem', 'solution', 'how', 'impact', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 text-gray-600 hover:text-emerald-600"
                >
                  {item === 'how' ? 'How It Works' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <span className="mr-2">🌍</span>
                Fighting Food Waste in Nigeria
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Intelligent Protection
                <span className="text-emerald-600"> for Stored Grains</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                SiloGuard is a modular, solar-powered, AI-driven monitoring device that combines acoustic insect detection with environmental sensing to provide real-time early warnings.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300">
                  Learn More
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                  Watch Demo
                </button>
              </div>

              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🤖</span>
                  <span className="text-sm text-gray-600">AI/ML</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🔌</span>
                  <span className="text-sm text-gray-600">Embedded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📡</span>
                  <span className="text-sm text-gray-600">IoT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🔊</span>
                  <span className="text-sm text-gray-600">Acoustic</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl shadow-emerald-200/50">
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Monitoring</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🌾</div>
                    <h3 className="text-xl font-semibold">SiloGuard Device</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-1">🌡️</div>
                      <div className="text-2xl font-bold">28°C</div>
                      <div className="text-xs opacity-80">Temperature</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-1">💧</div>
                      <div className="text-2xl font-bold">65%</div>
                      <div className="text-xs opacity-80">Humidity</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-1">🌬️</div>
                      <div className="text-2xl font-bold">410ppm</div>
                      <div className="text-xs opacity-80">CO₂</div>
                    </div>
                    <div className="bg-green-500/80 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-1">✅</div>
                      <div className="text-lg font-bold">All Clear</div>
                      <div className="text-xs opacity-90">No Insects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">30%</div>
              <div className="text-emerald-100">Loss Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">₦3.5T</div>
              <div className="text-emerald-100">Annual Losses in Nigeria</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-emerald-100">Autonomous Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-emerald-100">Solar Powered</div>
            </div>
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
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Limitations of Current Solutions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {limitations.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚠️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <span className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold">
                That's Why SiloGuard!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
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
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
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
              <div key={index} className="relative">
                <div className="bg-emerald-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-16 w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & SDGs */}
      <section id="impact" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Impact & Sustainable Development Goals
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Saving 30% of the harvest is cheaper & easier than growing 30% more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{sdg.number}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{sdg.title}</h3>
                <p className="text-emerald-100 text-xs">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Business & Revenue Model
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hardware Sales</h4>
                    <p className="text-gray-600 text-sm">Direct sales at ₦45,000 per unit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">SaaS Subscription</h4>
                    <p className="text-gray-600 text-sm">₦2,000/season for premium AI insights</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <strong>Unit Economics:</strong> COGS ~₦28,000, yielding a ~37% gross margin
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">3-Year Financial Forecast</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="text-left py-3 text-gray-500 font-medium">Metric</th>
                      <th className="text-center py-3 text-gray-500 font-medium">Year 1</th>
                      <th className="text-center py-3 text-gray-500 font-medium">Year 2</th>
                      <th className="text-center py-3 text-gray-500 font-medium">Year 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financials.map((row, index) => (
                      <tr key={index} className="border-b border-gray-50">
                        <td className="py-4 text-gray-700 font-medium">{row.metric}</td>
                        <td className="py-4 text-center text-emerald-600 font-semibold">{row.year1}</td>
                        <td className="py-4 text-center text-emerald-600 font-semibold">{row.year2}</td>
                        <td className="py-4 text-center text-emerald-600 font-semibold">{row.year3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">Break-Even: 1,500 units</p>
            </div>
          </div>
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
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Experts Say About SiloGuard
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <div className="text-emerald-600 text-4xl mb-2">"</div>
                <p className="text-gray-700 mb-4">This project is an impressive idea. You will need a large amount of data for this product. I will connect you with an expert in AI modelling in China.</p>
                <p className="font-semibold text-gray-900">Prof. Hauwa L. Yusuf</p>
                <p className="text-sm text-gray-500">Food Science, BUK</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                <div className="text-teal-600 text-4xl mb-2">"</div>
                <p className="text-gray-700 mb-4">[Positive acknowledgment of the solution's value for the rice processing industry]</p>
                <p className="font-semibold text-gray-900">Dr. Mustapha</p>
                <p className="text-sm text-gray-500">PhD Food Safety, Rice Processing Industry</p>
              </div>
            </div>
          </div>
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
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-8">
            <a href="mailto:abubakar.o.zubair@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
              📧 abubakar.o.zubair@gmail.com
            </a>
            <a href="tel:+2348138188291" className="text-gray-400 hover:text-emerald-400 transition-colors">
              📱 +234 813 818 8291
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <img src="/SiloGuard/logo.png" alt="SiloGuard" className="h-10" />
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
