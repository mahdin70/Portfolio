import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Terminal, ArrowRight } from "lucide-react";

interface ContactMethodProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href: string;
  isExternal?: boolean;
}

const ContactMethod = ({ icon: Icon, title, value, href, isExternal = false }: ContactMethodProps) => (
  <div className="coder-card group p-4 hover:border-primary/50 transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 w-10 h-10 rounded-md flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground mb-1">{title}</p>
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-foreground hover:text-primary transition-colors group-hover:text-primary font-mono text-sm flex items-center gap-1"
        >
          {value}
          {isExternal && (
            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-px group-hover:translate-x-0.5" />
          )}
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => {
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

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 matrix-bg opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0"></div>

      <div className="section-container relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-primary/10 p-2 rounded-md">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Let's Connect</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <div className="code-block mb-8">
              <div className="font-mono text-sm text-foreground/70 mb-2">// contact.js</div>
              <p className="font-mono text-sm text-foreground/90 leading-relaxed">
                I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out through any of the
                following methods below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <ContactMethod icon={Mail} title="EMAIL" value="mahdin.mukit248@gmail.com" href="mailto:mahdin.mukit248@gmail.com" />
              <ContactMethod icon={Phone} title="PHONE" value="+8801764257445" href="tel:+8801764257445" />
              <ContactMethod
                icon={Linkedin}
                title="LINKEDIN"
                value="mukitmahdin"
                href="https://linkedin.com/in/mukitmahdin"
                isExternal={true}
              />
              <ContactMethod icon={Github} title="GITHUB" value="mahdin70" href="https://github.com/mahdin70" isExternal={true} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
