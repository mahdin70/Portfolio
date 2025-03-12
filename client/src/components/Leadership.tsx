import { motion } from "framer-motion";
import { Users, Calendar, Award } from "lucide-react";
import { leadership } from "../data/portfolioData";

const LeadershipCard = ({
  role,
  organization,
  period,
  description,
}: {
  role: string;
  organization: string;
  period: string;
  description: string;
}) => (
  <motion.div className="coder-card group p-5" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
    <div className="flex flex-col gap-2">
      {/* Position Title */}
      <h3 className="font-bold text-foreground flex items-center gap-2">
        <Award className="h-4 w-4 text-secondary hidden sm:inline" />
        <span>{role}</span>
      </h3>

      {/* Organization Name */}
      <div className="flex items-center gap-1.5 text-sm text-foreground/70 font-extrabold font-mono">
        <Users className="h-4 w-4 text-secondary" />
        <span>{organization}</span>
      </div>

      {/* Period */}
      <p className="font-mono font-extrabold text-xs sm:text-sm text-primary bg-secondary/20 px-2 py-1 rounded-md inline-flex items-center w-fit">
        <Calendar className="h-3 w-3 mr-1.5" />
        {period}
      </p>

      {/* Description */}
      <p className="text-foreground/70 text-sm leading-relaxed font-mono mt-1">{description}</p>
    </div>
  </motion.div>
);

const Leadership = () => {
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
          <Users className="h-5 w-5 text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">
          Leadership
        </h2>
      </div>
      
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {leadership.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <LeadershipCard
              role={item.role}
              organization={item.organization}
              period={item.period}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Leadership;
