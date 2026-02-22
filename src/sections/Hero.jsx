import React, { useMemo } from "react";
import Button from "@/components/Button";
import { ChevronDown, Github, Linkedin, Youtube } from "lucide-react";
import FixedButton from "../components/DownloadButton";
const Hero = () => {
  const dots = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Engineer Building End-to-End Systems
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-4xl text-center"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in animation-delay-100">
            Hi, I’m <span className="glow-text text-primary">Aruna</span>{" "}
            Subramanian
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in animation-delay-200">
            Software engineer focused on creating clean, efficient applications
            from interface to infrastructure. Constantly exploring new
            challenges and deepening my expertise to deliver better solutions
            every day.
          </p>
          {/* Resume Button */}
          <div className="animate-fade-in animation-delay-300">
            <FixedButton />
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">
              Connect with me:
            </span>
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aruna-subramanian/",
              },
              { icon: Github, href: "https://github.com/Aruna456" },
              { icon: Youtube, href: "https://www.youtube.com/@aheduworks" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
        {/* Scroll Button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
