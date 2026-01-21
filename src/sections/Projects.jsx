import { ArrowUpRight, Github } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton"


const projects = [
  {
    title: "KZ Crafting",
    description:
      "A small business website built for a freelance client, featuring product catalog and booking system",
    image: "/projects/project.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "School Cashier Finance Analysis System",
    description:
      "A comprehensive school finance system managing students, teachers, fees, payments, and transactions. Includes interactive dashboards, charts, and reports for real-time financial insights.",
    image: "/projects/project.png",
    tags: ["React", "Tailwind CSS", "MySQL", "Express.js"],
    link: "#",
    github: "#",
  },
  {
    title: "HealthTrack Dashboard",
    description:
      "Health monitoring dashboard for clinics with patient data visualization and analytics",
    image: "/projects/project.png",
    tags: ["Vue.js", "Express.js", "Chart.js", "MySQL"],
    link: "#",
    github: "#",
  },
  {
    title: "EcoMarket",
    description:
      "Sustainable e-commerce platform with carbon footprint calculator and eco-friendly product filtering",
    image: "/projects/project.png",
    tags: ["React", "Redux", "Stripe", "Firebase"],
    link: "#",
    github: "#",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/*background glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/*section header*/}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Feature work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-foreground">
            Projects that
            <span className="font-serif font-normal text-secondary">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/*projects grid*/}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((items, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-1 from-card via-card/50 to-transparent opacity-60" />
                {/*overlay links*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <a
                    href={items.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={items.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/*Contenst */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {items.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {items.description}
                  <div className="flex flex-wrap gap-2">
                    {items.tags.map((tag, tagidx) => (
                      <span
                        key={tagidx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all  duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/*view all*/}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
