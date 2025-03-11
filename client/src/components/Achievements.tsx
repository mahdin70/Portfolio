import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";
import { achievements } from "../data/portfolioData";

const AchievementCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div 
    className="coder-card group p-5"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-secondary/10 p-2 rounded-md">
        <Trophy className="h-4 w-4 text-secondary" />
      </div>
      <h3 className="font-bold text-foreground font-mono">{title}</h3>
    </div>
    <p className="text-foreground/70 text-sm leading-relaxed font-mono">{description}</p>
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
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">
          Achievements
        </h2>
      </div>
      
      <div className="font-mono text-sm text-foreground/70 mb-8">
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
              title={achievement.title}
              description={achievement.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
