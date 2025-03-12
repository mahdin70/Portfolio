import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { workExperience } from "../data/portfolioData";

const TimelineItem = ({
  role,
  company,
  period,
  tasks,
  isLast = false,
}: {
  role: string;
  company: string;
  period: string;
  tasks: string[];
  isLast?: boolean;
}) => (
  <div className="relative pl-10 pb-8 group">
    {/* Timeline dot */}
    <div
      className="absolute left-0 top-[6px] w-5 h-5 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center z-10 
                  group-hover:scale-110 group-hover:bg-secondary/30 transition-all duration-300"
    >
      <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-125 transition-all duration-300" />
    </div>

    {/* Timeline line */}
    {!isLast && <div className="absolute left-[9px] top-6 w-[2px] h-[calc(100%-12px)] bg-gradient-to-b from-secondary/50 to-secondary/5" />}

    {/* Content */}
    <div className="coder-card p-4 md:p-5 cursor-default group-hover:border-secondary/50 transition-all duration-300">
      <div className="flex flex-col gap-2">
        {/* Position Name */}
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-secondary hidden sm:inline" />
          <span>{role}</span>
        </h3>

        {/* Company Name */}
        <div className="flex items-center gap-1.5 text-md text-foreground/80 font-mono">
          <Building2 className="h-4 w-4 text-secondary/70" />
          <span>{company}</span>
        </div>

        {/* Period */}
        <p className="font-mono text-xs sm:text-sm text-primary font-extrabold bg-secondary/20 px-2 py-1 rounded-md inline-flex items-center w-fit">
          <Calendar className="h-3 w-3 mr-1.5" />
          {period}
        </p>

        {/* Tasks */}
        <div className="space-y-2 text-sm mt-2">
          {tasks.map((task, index) => (
            <div key={index} className="flex gap-2 group/task">
              <CheckCircle2 className="h-4 w-4 text-secondary/70 mt-0.5 flex-shrink-0 group-hover/task:text-secondary transition-colors duration-200" />
              <p className="text-foreground/70 group-hover/task:text-foreground/90 transition-colors duration-200">{task}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
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
    <div className="py-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-secondary/10 p-2 rounded-md">
          <Briefcase className="h-5 w-5 text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">
          Work Experience
        </h2>
      </div>
      
      <motion.div
        className="pl-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {workExperience.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TimelineItem
              role={exp.role}
              company={exp.company}
              period={exp.period}
              tasks={exp.tasks}
              isLast={index === workExperience.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
