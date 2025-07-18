import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  Code,
  Braces,
  ArrowRight,
  Sparkles,
  Star,
  ChevronDown,
  Database,
  Globe,
  Server,
  Cpu,
  MonitorSmartphone,
  BrainCircuit,
  CloudLightning,
  Mail,
  User
} from "lucide-react";
import {HuggingFace} from '@lobehub/icons';
import SelfImage from "@/assets/Self-Image.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const typingVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 0.5,
        duration: 2.5,
      },
    },
  };

  const floatingIcons = [
    { icon: <Code size={16} />, top: "10%", left: "5%", delay: 0 },
    { icon: <Database size={16} />, top: "25%", left: "12%", delay: 1 },
    { icon: <Globe size={16} />, top: "15%", right: "10%", delay: 2 },
    { icon: <Server size={16} />, top: "60%", right: "8%", delay: 0.5 },
    { icon: <Cpu size={16} />, bottom: "20%", left: "8%", delay: 1.5 },
    { icon: <BrainCircuit size={16} />, bottom: "15%", right: "15%", delay: 2.5 },
    { icon: <MonitorSmartphone size={16} />, top: "45%", left: "3%", delay: 3 },
    { icon: <CloudLightning size={16} />, bottom: "30%", right: "5%", delay: 1 },
  ];

  const techPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 5, bounce: 0 },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <section id="about" className="relative pt-28 md:pt-36 pb-16 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 tech-bg opacity-40 z-0"></div>

      {/* Top glow effect */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-1/3 h-24 bg-primary/20 blur-[100px] rounded-full"></div>

      {/* Floating tech icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-foreground/20 z-0"
          style={{
            ...item,
            position: "absolute",
          }}
          animate={{
            y: ["-10px", "10px", "-10px"],
            rotate: [0, item.delay % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 5 + item.delay,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-7" variants={itemVariants}>
          <div className="inline-flex items-center bg-primary/10 text-white rounded-full px-3 py-1 text-sm font-mono mb-6 border border-primary/20 glow-pulse">
            <Terminal className="w-4 h-4 mr-2" />
            <span>Project Manager | Engineering Manager | Software Engineer | AI Engineer</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <motion.span
              className="block animated-gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              I'm Mukit Mahdin
            </motion.span>
          </h1>

          <motion.div className="overflow-hidden mb-6" variants={typingVariants}>
            <div className="terminal-text text-lg md:text-lg text-foreground/80">
              Transforming Businesses by sleek digital solutions with code and flair
            </div>
          </motion.div>

          <motion.div
            className="code-block mb-8 max-w-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/30 blur-[50px] rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary/30 blur-[50px] rounded-full"></div>

            <div className="text-sm text-foreground/70 mb-2 flex items-center">
              <Braces className="inline-block w-4 h-4 mr-2 text-secondary" />
              // about.me
            </div>
            <p className="font-mono  text-sm md:text-base text-foreground/90 leading-relaxed">
              As a dedicated Software Engineer, Generative AI Engineer, Project Manager, and Engineering Manager, I specialize in crafting
              high-quality, efficient, and precise code to deliver innovative software solutions. My expertise in Generative AI drives my
              passion for enabling machines to push the boundaries of creativity and functionality. With a strong focus on Software Product
              Management, I excel at transforming complex requirements into streamlined, market-ready products. I thrive in fast-paced,
              innovative environments, rapidly adapting to new challenges while maintaining a structured approach to project execution.
              Committed to fostering collaboration and driving technical excellence, I am eager to contribute to cutting-edge teams building
              transformative solutions. Let’s create the future together.
            </p>

            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <Button
              className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Get in Touch</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 group relative overflow-hidden"
              onClick={() => {
                const projectsSection = document.querySelector("#projects");
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span className="relative z-10 flex items-center">
                <Terminal className="mr-2 h-4 w-4" />
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-5 flex justify-center" variants={itemVariants}>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated code brackets */}
            <motion.div
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-4xl text-primary/60 font-mono floating-slow"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {"{"}
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-4xl text-primary/60 font-mono floating"
              initial={{ scale: 0, rotate: 10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {"}"}
            </motion.div>
            <motion.div
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-2xl text-secondary/60 font-mono floating-reverse"
              initial={{ scale: 0, rotate: 10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {"/>"}
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-2xl text-secondary/60 font-mono floating-slow"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {"</"}
            </motion.div>

            {/* Circle connecting lines */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 200 200">
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="rgba(0, 102, 255, 0.1)"
                strokeWidth="1"
                variants={techPathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgba(123, 97, 255, 0.1)"
                strokeWidth="1"
                variants={techPathVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>

            {/* Main avatar container with enhanced glow */}
            <motion.div
              className="w-full h-full rounded-full bg-card border-4 border-primary/20 flex items-center justify-center overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Purple glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/40 blur-[60px] rounded-full"></div>
              {/* Blue glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/40 blur-[60px] rounded-full"></div>

              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <img 
                  src={SelfImage} 
                  alt="Mukit Mahdin" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Orbit stars */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: "12px",
                  height: "12px",
                  left: "calc(50% - 6px)",
                  top: "calc(50% - 6px)",
                }}
                initial={{
                  x: Math.cos((degree * Math.PI) / 180) * 150,
                  y: Math.sin((degree * Math.PI) / 180) * 150,
                  opacity: 0,
                }}
                animate={{
                  x: Math.cos((degree * Math.PI) / 180) * 150,
                  y: Math.sin((degree * Math.PI) / 180) * 150,
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              >
                <Star className="text-secondary/40 w-3 h-3" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Social links with enhanced icons */}
      <motion.div
        className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mt-2 font-mono text-sm text-muted-foreground" variants={itemVariants}>
          // Find me on:
        </motion.div>

        <motion.a
          href="https://github.com/mahdin70"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/50 rounded-full p-2 text-foreground hover:text-primary hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,102,255,0.3)]"
          variants={itemVariants}
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/mukitmahdin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/50 rounded-full p-2 text-foreground hover:text-primary hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,102,255,0.3)]"
          variants={itemVariants}
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>

        <motion.a
          href="mailto:mahdin.mukit248@gmail.com"
          className="bg-background/50 rounded-full p-2 text-foreground hover:text-primary hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,102,255,0.3)]"
          variants={itemVariants}
          title="Email Me"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:mahdin.mukit248@gmail.com";
          }}
        >
          <Mail className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
