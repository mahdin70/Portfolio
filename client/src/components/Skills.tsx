import { motion } from "framer-motion";
import { Code, Braces, Terminal, CheckCircle2 } from "lucide-react";
import { programmingSkills, frameworkSkills, toolsSkills } from "../data/portfolioData";

const SkillItem = ({ skill }: { skill: string }) => (
  <div className="flex items-center gap-2 group">
    <CheckCircle2 className="h-4 w-4 text-secondary/70 flex-shrink-0 group-hover:text-secondary transition-colors duration-200" />
    <span className="font-mono text-foreground/80 group-hover:text-foreground transition-colors">
      {skill}
    </span>
  </div>
);

const SkillCategory = ({ 
  title, 
  icon: Icon, 
  skills 
}: { 
  title: string; 
  icon: React.ElementType;
  skills: { name: string; percentage: number }[] 
}) => (
  <div className="coder-card p-5">
    <div className="flex items-center gap-2 mb-4">
      <div className="bg-secondary/10 p-1.5 rounded-md">
        <Icon className="h-4 w-4 text-secondary" />
      </div>
      <h3 className="font-bold text-foreground">{title}</h3>
    </div>
    <div className="grid grid-cols-1 gap-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill.name} />
      ))}
    </div>
  </div>
);

const Skills = () => {
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
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 matrix-bg opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-secondary/10 p-2 rounded-md">
            <Braces className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">
            Technical Skills
          </h2>
        </div>
        
        <div className="font-mono text-sm text-foreground/70 mb-8">
          <span className="text-secondary">const</span> <span className="text-primary">skills</span> = {"{"}
          <span className="text-foreground/90"> languages, frameworks, tools </span>
          {"}"};
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Programming Languages" 
              icon={Code}
              skills={programmingSkills} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Frameworks & Libraries" 
              icon={Braces}
              skills={frameworkSkills} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Tools & Technologies" 
              icon={Terminal}
              skills={toolsSkills} 
            />
          </motion.div>
        </motion.div>
        
        <div className="mt-10 coder-card p-4">
          <div className="flex items-start gap-3">
            <Terminal className="h-5 w-5 text-secondary mt-1" />
            <div>
              <div className="font-mono text-sm text-foreground/90 mb-2">// Continuously expanding my skill set</div>
              <p className="text-sm text-foreground/70">
                I'm passionate about learning new technologies and constantly improving my skills. Currently 
                exploring machine learning, advanced React patterns, and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
