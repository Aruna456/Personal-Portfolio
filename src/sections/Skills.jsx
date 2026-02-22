import React from "react";

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
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-dealy-100">
            I'm Good
            <span className="text-white font-serif font-normal"> at</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            small desctiption about my skills and my plan to keep expanding this
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
