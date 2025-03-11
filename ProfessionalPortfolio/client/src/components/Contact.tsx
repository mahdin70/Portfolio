import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Mail, Phone, Linkedin, Github, Terminal, 
  MessageSquare, Send, User, AtSign, FileText, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactMethod = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  isExternal = false 
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string; 
  href: string;
  isExternal?: boolean;
}) => (
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
          {isExternal && <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-px group-hover:translate-x-0.5" />}
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Let's Connect
          </h2>
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
                I'm always open to discussing new projects, opportunities, or partnerships. 
                Feel free to reach out through any of the following methods, or use the form to send me a message directly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <ContactMethod 
                icon={Mail} 
                title="EMAIL"
                value="mahdin.mukit248@gmail.com"
                href="mailto:mahdin.mukit248@gmail.com"
              />
              <ContactMethod 
                icon={Phone} 
                title="PHONE"
                value="+8801764257445"
                href="tel:+8801764257445"
              />
              <ContactMethod 
                icon={Linkedin} 
                title="LINKEDIN"
                value="mukitmahdin"
                href="https://linkedin.com/in/mukitmahdin"
                isExternal={true}
              />
              <ContactMethod 
                icon={Github} 
                title="GITHUB"
                value="mahdin70"
                href="https://github.com/mahdin70"
                isExternal={true}
              />
            </div>
            
            <div className="border border-dashed border-primary/30 p-4 rounded-md bg-card/50 font-mono">
              <div className="flex gap-2 items-start">
                <Terminal className="h-4 w-4 text-primary mt-1" />
                <div className="text-xs text-foreground/80">
                  <span className="text-primary">const</span> <span className="text-secondary">response</span> = <span className="text-primary">await</span> contact.send(formData);<br/>
                  <span className="text-muted-foreground">// I typically respond within 24-48 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="coder-card p-6">
                <div className="font-mono text-sm text-foreground/70 mb-6 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span>Send me a message</span>
                </div>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-5">
                      <FormLabel className="text-foreground/80 font-mono text-xs flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-primary/70" />
                        NAME
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-card border-primary/20 focus-visible:ring-primary/30 font-mono"
                          placeholder="John Doe"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-5">
                      <FormLabel className="text-foreground/80 font-mono text-xs flex items-center gap-1.5">
                        <AtSign className="h-3.5 w-3.5 text-primary/70" />
                        EMAIL
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          className="bg-card border-primary/20 focus-visible:ring-primary/30 font-mono"
                          placeholder="john.doe@example.com"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-5">
                      <FormLabel className="text-foreground/80 font-mono text-xs flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-primary/70" />
                        SUBJECT
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-card border-primary/20 focus-visible:ring-primary/30 font-mono"
                          placeholder="Project Opportunity"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-foreground/80 font-mono text-xs flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-primary/70" />
                        MESSAGE
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5} 
                          className="bg-card border-primary/20 focus-visible:ring-primary/30 font-mono resize-none"
                          placeholder="I'd like to discuss a potential project..."
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full group"
                  disabled={mutation.isPending}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {mutation.isPending ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
