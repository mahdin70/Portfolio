import { motion } from "framer-motion";
import { Brain, Languages, Bot, GitFork, Download, ExternalLink, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openSourceProjects } from "../data/portfolioData";

const OpenSourceCard = ({
  icon: Icon,
  title,
  description,
  downloads,
  link,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  downloads: string;
  link: string;
}) => (
  <motion.div
    className="coder-card group p-5 flex flex-col h-full" // Change min-h to h-full
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4 gap-3">
      <div className="bg-secondary/10 p-2 rounded-md">
        <Icon className="h-5 w-5 text-secondary" />
      </div>
      <h3 className="font-bold text-foreground font-mono">{title}</h3>
    </div>
    <p className="text-foreground/80 mb-5 text-sm font-mono flex-grow">{description}</p> {/* Add flex-grow */}
    <div className="flex justify-between items-center">
      <div className="flex items-center text-md font-extrabold text-muted-foreground font-mono">
        <Download className="h-3.5 w-3.5 mr-1.5" />
        <span>{downloads}</span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="bg-secondary/20 text-primary hover:text-secondary/90 hover:bg-secondary/10 group flex items-center gap-1"
        asChild
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="font-mono text-md font-extrabold">View on Hugging Face</span>
          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Button>
    </div>
  </motion.div>
);

const getIconForProject = (title: string) => {
  if (title.includes("Dataset")) return Database;
  if (title.includes("Bangla") || title.includes("Bengali")) return Languages;
  if (title.includes("Code")) return Bot;
  return Brain;
};

const OpenSource = () => {
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
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 matrix-bg opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0"></div>

      <div className="section-container relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-secondary/10 p-2 rounded-md">
            <GitFork className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">Open Source Contributions</h2>
        </div>

        <div className="font-mono text-sm text-foreground/70 mb-6">
          <span className="text-secondary">const</span> <span className="text-primary">openSource</span> = {"{"}
          <span className="text-foreground/90"> models, libraries, datasets </span>
          {"}"};
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {openSourceProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <OpenSourceCard
                icon={getIconForProject(project.title)}
                title={project.title}
                description={project.description}
                downloads={project.downloads}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
