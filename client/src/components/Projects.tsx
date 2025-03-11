import { motion } from "framer-motion";
import { Code, ExternalLink, Laptop, Leaf, Globe, Heart, Rocket, Film, Github, ArrowUpRight, BookMarked, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "../data/portfolioData";

const Projects = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Function to get icon based on project title
  const getIconForProject = (title: string) => {
    if (title.includes("Campus")) return <Laptop className="h-10 w-10 text-secondary/70" />;
    if (title.includes("Eco")) return <Leaf className="h-10 w-10 text-secondary/70" />;
    if (title.includes("Voyage")) return <Globe className="h-10 w-10 text-secondary/70" />;
    if (title.includes("Med")) return <Heart className="h-10 w-10 text-secondary/70" />;
    if (title.includes("Mars")) return <Rocket className="h-10 w-10 text-secondary/70" />;
    if (title.includes("Movie")) return <Film className="h-10 w-10 text-secondary/70" />;
    return <Code className="h-10 w-10 text-secondary/70" />;
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 matrix-bg opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0"></div>

      <div className="section-container relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-secondary/10 p-2 rounded-md">
            <Terminal className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">Featured Projects</h2>
        </div>

        <motion.div
          className="responsive-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="coder-card group" variants={itemVariants}>
              <div className="h-44 bg-card/40 flex items-center justify-center relative overflow-hidden">
                {/* Project number indicator */}
                <div className="absolute top-3 left-3 font-mono text-xs text-muted-foreground">{`project_${index + 1}.js`}</div>

                {/* Icon */}
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {getIconForProject(project.title)}
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-mono">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(", ").map((tech, idx) => (
                    <span key={idx} className="text-xs bg-secondary/10 text-secondary/90 px-2 py-1 rounded-md font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 text-sm leading-relaxed font-mono">{project.description}</p>

                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-secondary hover:text-secondary/90 hover:bg-secondary/10 group flex items-center gap-1"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Button>

                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary hover:bg-secondary/10" asChild>
                    <a href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
