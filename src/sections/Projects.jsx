import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import ViewAll from "@/components/ViewAll";

const projects = [
  {
    title: "Invoice Billing System",
    description:
      "A web-based invoice billing system built for a small business to manage customers, generate invoices, and track billing records. I worked on both the frontend and backend, focusing on clear workflows, reliable data handling, and simple usability for day-to-day use.",
    image: "/hero-bg.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/Aruna456/",
  },
  {
    title: "Personal Portfolio for a Video Editor",
    description:
      "A portfolio website built for a video editor to showcase work, highlight services, and make it easy for clients to get in touch. The focus was on clean layout, responsiveness, and straightforward content structure rather than heavy visuals or effects.",
    image: "/hero-bg.jpg",
    tags: ["React", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/Aruna456/",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-15 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Featured Works
          </span>
          <h2 className="text-4xl text-secondary-foreground  md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100">
            Projects I've
            <span className="text-white font-serif font-normal">
              {" "}
              built and maintained
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            These are some projects I’ve built as part of my work and learning
            .Each reflects the kind of work I've been doing and learning along
            the way
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary  hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary  hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <ViewAll />
        </div>
      </div>
    </section>
  );
};

export default Projects;
