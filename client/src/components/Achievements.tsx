import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, CheckCircle2, Medal } from "lucide-react"; // Removed Trophy, Star; Added required icons
import { achievements } from "../data/portfolioData";

const AchievementCard = ({
  role,
  organization,
  period,
  tasks,
}: {
  role: string;
  organization: string;
  period: string;
  tasks: string[];
}) => (
  <motion.div className="coder-card group p-5" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
    <div className="flex flex-col gap-2">
      {/* Position Name */}
      <h3 className="font-bold text-foreground flex items-center gap-2">
        <Briefcase className="h-4 w-4 text-secondary hidden sm:inline" />
        <span>{role}</span>
      </h3>

      {/* Organization Name */}
      <div className="flex items-center gap-1.5 text-md text-foreground/80 font-mono font-extrabold">
        <Building2 className="h-4 w-4 text-secondary/70" />
        <span>{organization}</span>
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
  </motion.div>
);

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <Medal className="h-5 w-5 text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">Achievements</h2>
      </div>

      <div className="font-mono text-sm text-foreground mb-8">
        <span className="text-secondary">const</span> <span className="text-primary">achievements</span> = {"{"}
        <span className="text-foreground/90"> competitions, awards, recognition </span>
        {"}"};
      </div>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievements.map((achievement, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AchievementCard
              role={achievement.role}
              organization={achievement.organization}
              period={achievement.period}
              tasks={achievement.tasks}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
