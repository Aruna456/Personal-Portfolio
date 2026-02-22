import React from "react";

const experience = [
  {
    period: "2025-Present",
    role: "R&D Intern",
    company: "Abluva Pvt Ltd",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    techonologies: ["GoLang", "Wireshark", "SQL Server", "Oracle"],
    current: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-15 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
              Career Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
            Experience that
            <span className="text-white font-serif font-normal">
              {" "}
              speaks volumes
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            These are small, focused projects that I built. Each reflects the
            kind of work I've been doing and learning along the way
          </p>
        </div>

        {/* Timeline */}
        <div className=" py-15 relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-5 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,.0.8)]" />
          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((experience, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {experience.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium ">
                      {experience.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {experience.role}
                    </h3>
                    <p className="text-muted-foreground">
                      {experience.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {experience.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {experience.techonologies.map((tech, techindex) => (
                        <span
                          className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground"
                          key={techindex}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
