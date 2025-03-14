import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Code, Menu, Terminal, Github, Linkedin, ExternalLink } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon?: React.ComponentType<any> }) => {
  // Fix nested anchors warning by using a div with onClick for local navigation
  if (href.startsWith('#')) {
    return (
      <div 
        className="text-foreground hover:text-secondary cursor-pointer transition-colors duration-300 flex items-center gap-1.5"
        onClick={(e) => {
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth",
            });
          }
        }}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span className="font-mono">{label}</span>
      </div>
    );
  }
  
  // Use regular anchor for external links
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:text-secondary transition-colors duration-300 flex items-center gap-1.5"
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span className="font-mono">{label}</span>
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "about()", icon: Code },
    { href: "#projects", label: "projects()", icon: Terminal },
    { href: "#skills", label: "skills()", icon: Code },
    { href: "#experience", label: "experience()", icon: Terminal },
    { href: "#contact", label: "contact()", icon: Code },
  ];
  
  const socialLinks = [
    { href: "https://github.com/mahdin70", label: "GitHub", icon: Github },
    { href: "https://linkedin.com/in/mukitmahdin", label: "LinkedIn", icon: Linkedin },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-sm border-b border-secondary/10 shadow-lg shadow-secondary/5"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <div
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="text-xl md:text-2xl font-bold gradient-text tracking-tight">
                <span className="font-mono">mukit.</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:text-primary hover:bg-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,102,255,0.3)]"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-secondary/20">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card/95 backdrop-blur-lg border-l border-secondary/20">
              <div className="text-lg gradient-text mb-8 mt-4">menu</div>
              <div className="flex flex-col space-y-6 mt-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
                ))}
                <div className="h-px bg-gradient-to-r from-secondary/20 to-transparent my-2"></div>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((link) => (
                    <Button key={link.href} variant="ghost" size="icon" asChild className="hover:bg-secondary/10">
                      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        <link.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
