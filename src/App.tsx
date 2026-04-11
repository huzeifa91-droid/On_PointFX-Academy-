/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Zap, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Award,
  Menu,
  X,
  Globe,
  Clock,
  Target,
  ChevronRight,
  Send
} from "lucide-react";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-display font-extrabold tracking-tighter text-white">
              ON_POINT<span className="text-brand">FX</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['About', 'Services', 'Why Us', 'Pricing', 'Results', 'Testimonials'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="https://wa.me/233275683212" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-[#25D366]/20 hover:scale-105 active:scale-95"
            >
              Join Academy
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-light border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {['About', 'Services', 'Why Us', 'Pricing', 'Results', 'Testimonials'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-lg font-medium text-gray-300 hover:text-brand"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/233275683212" 
                className="block w-full text-center bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-[#25D366]/20"
              >
                Join Academy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-brand/5 blur-[140px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Globe size={14} /> Global Forex Mentorship
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.05] text-gradient"
          >
            Master Forex <br />
            <span className="text-brand">With Precision</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-sm md:text-lg text-gray-400 mb-10 leading-relaxed"
          >
            Join On_PointFX Academy and learn the exact institutional strategies used by the top 1% of traders. 
            No indicators, no guesswork—just pure market mechanics.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand/20 hover:scale-105 active:scale-95"
            >
              Start Learning <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold transition-all hover:border-white/20"
            >
              Our Philosophy
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-24 relative max-w-6xl mx-auto"
        >
          <div className="glass rounded-3xl overflow-hidden p-2">
            <div className="aspect-video rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920&auto=format&fit=crop" 
                alt="Trading Dashboard" 
                className="w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 flex flex-wrap justify-between items-end gap-8">
                <div className="flex gap-12">
                  <div className="text-left">
                    <p className="text-brand font-display font-bold text-4xl mb-1">500+</p>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Active Students</p>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-display font-bold text-4xl mb-1">92%</p>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Success Rate</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm font-medium text-gray-300">Live Trading Session in Progress</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-navy/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Trusted by Traders Worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
          {['FTMO', 'MFF', 'E8 Funding', 'Lux Trading', 'The Funded Trader'].map((partner) => (
            <span key={partner} className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">{partner}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Our Legacy</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              Institutional Education <br />
              <span className="text-gray-500">For The Modern Trader</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't teach retail patterns that the big banks use as liquidity. We teach you how to see the market through the eyes of the institutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {[
                { icon: <Target className="text-brand" />, title: "Precision", desc: "High RR setups only." },
                { icon: <Clock className="text-brand" />, title: "Discipline", desc: "Master your psychology." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">{item.icon}</div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <a href="#services" className="inline-flex items-center gap-2 text-brand font-bold hover:gap-4 transition-all group">
              Explore our curriculum <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Forex Mentorship" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 p-6 glass rounded-2xl max-w-[280px]">
                <p className="text-white font-bold mb-1">Expert Mentorship</p>
                <p className="text-gray-400 text-xs leading-relaxed">Direct access to traders with over 10 years of market experience.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <BookOpen size={28} />,
      title: "Masterclass Training",
      desc: "A structured journey from market basics to advanced liquidity and order flow concepts."
    },
    {
      icon: <Zap size={28} />,
      title: "Live Trade Room",
      desc: "Daily live sessions where we analyze the markets and execute trades in real-time."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Market Intelligence",
      desc: "High-probability trade setups and weekly market forecasts delivered to your dashboard."
    },
    {
      icon: <Users size={28} />,
      title: "Elite Community",
      desc: "Join a network of serious traders. Share ideas, grow together, and stay accountable."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-navy-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Our Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">The Path To Mastery</h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
              We provide the tools, the knowledge, and the community. You provide the dedication. Together, we build your trading career.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass glass-hover group"
            >
              <div className="mb-8 p-4 bg-brand/10 rounded-2xl w-fit text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand transition-colors">{s.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-20 lg:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden glass p-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1518640467707-6811f7a6ab73?q=80&w=1000&auto=format&fit=crop" 
                  alt="Trading Setup" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand/20 mix-blend-overlay" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Why On_PointFX</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">The Edge You Need</h2>
            <div className="space-y-10">
              {[
                {
                  icon: <TrendingUp className="text-brand" />,
                  title: "Institutional Logic",
                  desc: "Stop trading retail patterns. Learn how liquidity and order flow actually drive the markets."
                },
                {
                  icon: <ShieldCheck className="text-brand" />,
                  title: "Capital Protection",
                  desc: "Our risk management framework is designed to keep you in the game for the long run."
                },
                {
                  icon: <Award className="text-brand" />,
                  title: "Funding Focused",
                  desc: "Our curriculum is specifically designed to help you pass prop firm challenges and scale capital."
                }
              ].map((r, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand/50 transition-colors">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{r.title}</h4>
                    <p className="text-gray-500 leading-relaxed text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Beginner Plan",
      price: "$50",
      period: "/month",
      features: [
        "Access to beginner lessons",
        "Basic trading strategies",
        "Community support",
        "Weekly market overview"
      ],
      cta: "Join Now",
      popular: false
    },
    {
      name: "Advanced Mentorship",
      price: "$150",
      period: "/month",
      features: [
        "Everything in Beginner",
        "Live trading sessions",
        "Market analysis & signals",
        "Priority support",
        "Institutional concepts"
      ],
      cta: "Join Now",
      popular: true
    },
    {
      name: "VIP Plan",
      price: "$300",
      period: "/month",
      features: [
        "Full mentorship access",
        "1-on-1 coaching",
        "Exclusive signals",
        "Direct access to mentor",
        "Custom trading plan"
      ],
      cta: "Join Now",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Enrollment</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Join the Academy</h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
              Choose the plan that fits your trading goals. From basics to advanced institutional mastery, we have you covered.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2.5rem] relative transition-all duration-500 group ${
                plan.popular 
                  ? 'bg-brand/10 border-2 border-brand brand-glow scale-105 z-10' 
                  : 'glass glass-hover border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-[0.2em] py-2 px-6 rounded-full shadow-xl">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-white font-bold text-xl mb-4">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-display font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-500 font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/233275683212" 
                className={`w-full py-4 rounded-full text-center font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                  plan.popular 
                    ? 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-[#25D366]/20 hover:scale-105 active:scale-95' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:scale-105 active:scale-95'
                }`}
              >
                {plan.cta} <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
              {(plan.name === "Advanced Mentorship" || plan.name === "VIP Plan") && (
                <a 
                  href="https://t.me/yourchannel" 
                  className="w-full py-4 mt-4 rounded-full text-center font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-[#0088cc] text-white hover:bg-[#0077b5] shadow-lg hover:shadow-[#0088cc]/20 hover:scale-105 active:scale-95"
                >
                  <Send size={18} /> Join Signals on Telegram
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "David K.",
      role: "Funded Trader ($200k)",
      text: "On_PointFX changed my entire perspective. I went from blowing accounts to becoming a consistently profitable funded trader in 6 months.",
      avatar: "https://i.pravatar.cc/150?u=david-pro"
    },
    {
      name: "Sarah M.",
      role: "Intermediate Student",
      text: "The live sessions are pure gold. Seeing the thought process behind a trade in real-time is worth more than any pre-recorded course.",
      avatar: "https://i.pravatar.cc/150?u=sarah-pro"
    },
    {
      name: "James L.",
      role: "Full-time Trader",
      text: "The mentorship here is unmatched. They actually care about your progress and help you overcome the psychological hurdles of trading.",
      avatar: "https://i.pravatar.cc/150?u=james-pro"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-24 bg-navy-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Success Stories</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Trusted By The Best</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass relative"
            >
              <div className="flex items-center gap-5 mb-8">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl border border-brand/30 object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-brand text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic leading-relaxed text-lg">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const results = [
    { label: "EUR/USD", value: "+45 Pips", type: "profit" },
    { label: "GBP/JPY", value: "+60 Pips", type: "profit" },
    { label: "XAU/USD", value: "+85 Pips", type: "profit" },
    { label: "USD/CAD", value: "+30 Pips", type: "profit" }
  ];

  const highlights = [
    { title: "Avg Monthly Gain", value: "15%" },
    { title: "Win Rate", value: "78%" },
    { title: "Risk/Reward", value: "1:3" }
  ];

  return (
    <section id="results" className="py-16 md:py-20 lg:py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Performance</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Results & Performance</h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
              Transparency is at the core of our academy. Here are some of our recent trade results and performance metrics.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass text-center"
            >
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">{h.title}</p>
              <p className="text-4xl font-display font-bold text-white">{h.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass glass-hover flex justify-between items-center"
            >
              <span className="text-white font-bold">{r.label}</span>
              <span className="text-green-500 font-bold bg-green-500/10 px-4 py-1 rounded-full text-sm">{r.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-navy-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 md:p-12 rounded-[2.5rem] border border-white/5"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 tracking-tight">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://wa.me/233275683212" 
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20"
            >
              <MessageCircle className="text-[#25D366]" size={32} />
              <span className="font-bold text-white">Contact on WhatsApp</span>
              <span className="text-sm text-gray-400">027 568 3212</span>
            </a>
            
            <a 
              href="https://t.me/yourchannel" 
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0088cc]/10 hover:bg-[#0088cc]/20 transition-all border border-[#0088cc]/20"
            >
              <Send className="text-[#0088cc]" size={32} />
              <span className="font-bold text-white">Join Telegram</span>
              <span className="text-sm text-gray-400">@on_point_fx_channel</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:realleak01@gmail.com"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-sm">Email: realleak01@gmail.com</span>
            </a>
            <a 
              href="https://instagram.com/on_point_fx" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-sm">Follow: @on_point_fx</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-navy relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand to-brand-dark rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl shadow-brand/40 relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Ready To Start Your <br /> Trading Career?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't waste another day guessing. Join our elite community and start trading with institutional precision today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/233275683212" 
                className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-[#25D366]/20 hover:scale-105 active:scale-95"
              >
                <MessageCircle size={28} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand/10 blur-[180px] rounded-full -z-0" />
    </section>
  );
};

const LegalInfo = () => {
  return (
    <section className="py-20 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 text-sm">
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] opacity-40">Risk Disclaimer</h4>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] opacity-40">Refund Policy</h4>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Due to the digital nature of our educational content and mentorship services, all sales are final. Once access to the academy portal or community is granted, no refunds will be issued under any circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <span className="text-3xl font-display font-extrabold tracking-tighter text-white">
              ON_POINT<span className="text-brand">FX</span>
            </span>
            <p className="text-gray-500 text-sm mt-4 font-medium tracking-wide">The Gold Standard in Forex Education.</p>
          </div>
          
          <div className="flex space-x-10">
            {['Instagram', 'Telegram', 'YouTube', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">{social}</a>
            ))}
          </div>
          
          <div className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} On_PointFX Academy. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyJoinButton = () => {
  return (
    <a
      href="https://wa.me/233275683212"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center hover:shadow-[#25D366]/20 active:scale-95"
      aria-label="Join on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-navy selection:bg-brand/30 selection:text-white">
      <Navbar />
      <StickyJoinButton />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyUs />
        <Pricing />
        <Results />
        <Contact />
        <Testimonials />
        <CTA />
      </main>
      <LegalInfo />
      <Footer />
    </div>
  );
}

