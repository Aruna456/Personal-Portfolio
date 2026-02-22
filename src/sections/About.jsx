import React from "react";
import { Bug, Code2, Layers, Search, Server } from "lucide-react";

const highlights = [
  {
    icon: Bug,
    title: "Strong Debugging Skills",
    description:
      "I’m comfortable tracing issues, understanding failures, and fixing problems methodically rather than guessing.",
  },
  {
    icon: Layers,
    title: "Clarity Over Cleverness",
    description:
      "I prefer simple, readable solutions that are easy to understand and maintain instead of over-engineering.",
  },
  {
    icon: Server,
    title: "Growing Backend Knowledge",
    description:
      "I’m actively strengthening my backend fundamentals, including APIs, authentication, databases, and system flow.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
              Building reliable applications with
              <span className="text-white font-serif font-normal">
                {" "}
                clarity, curiosity, and care
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a software engineer in my final year, currently interning
                and building real-world systems while sharpening my full-stack
                fundamentals. I enjoy working close to both the interface and
                the backend, and I care deeply about building things that are
                clear, usable, and easy to reason about.
              </p>
              <p>
                I spend a lot of time debugging, breaking problems down, and
                understanding how different parts of a system connect. I’m less
                interested in being flashy and more focused on writing clean
                code, making sensible trade-offs, and continuously improving how
                I build and think.
              </p>
              <p>
                I also share my learning publicly through a small YouTube
                channel, where I break down concepts and walk through problems
                in a simple, practical way. Teaching helps me clarify my own
                understanding while supporting others who are on a similar path.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My goal is to become a dependable engineer who builds clean
                systems with intention, and keeps getting better through
                consistent, honest effort.
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary transition">
                  <item.icon className="w-6 h-6 hover:text-white text-primary transition" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
