import React from "react";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";
const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Java", "JavaScript", "Go", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    items: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Docker (basic)",
      "Linux (CLI)",
      "PuTTY",
    ],
  },
];
const Skills = () => {
  return (
    <section id="skills" className="py-15 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Skills
          </span>
          <h2 className="text-4xl text-secondary-foreground md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100">
            Tools and technologies
            <span className="text-white font-serif font-normal">
              {" "}
              I work with
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A snapshot of the tools I use regularly and the areas I’m actively
            developing as I continue building projects.
          </p>
        </div>
        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <div key={index}>
              {/* Category Title */}
              <div className="flex items-center gap-2 mb-4 text-foreground">
                <group.icon className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold tracking-wide">
                  {group.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 glass glow-text
                  rounded-lg border border-border text-sm text-muted-foreground 
                  hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
