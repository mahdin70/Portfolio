import { motion } from "framer-motion";
import { BookMarked, Calendar, Award, GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

const TimelineItem = ({
  institute,
  period,
  degree,
  grade,
  isLast = false,
}: {
  institute: string;
  period: string;
  degree: string;
  grade: string;
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
      <div className="flex flex-col mb-2 gap-2">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-secondary hidden sm:inline" />
          <span>{institute}</span>
        </h3>
        <p className="font-mono text-xs sm:text-sm text-primary font-extrabold bg-secondary/40 px-2 py-1 rounded-md inline-flex items-center w-fit">
          <Calendar className="h-3 w-3 mr-1.5" />
          {period}
        </p>
      </div>

      <p className="font-mono text-foreground/90 mb-2 text-sm md:text-base">{degree}</p>
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
        <Award className="h-4 w-4 text-secondary/70" />
        <span>{grade}</span>
      </div>
    </div>
  </div>
);

const Education = () => {
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 matrix-bg opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-secondary/10 p-2 rounded-md">
            <BookMarked className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">
            Education
          </h2>
        </div>
        
        <motion.div
          className="pl-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TimelineItem
                institute={edu.institute}
                period={edu.period}
                degree={edu.degree}
                grade={edu.grade}
                isLast={index === education.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
