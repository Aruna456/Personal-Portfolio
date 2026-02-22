import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aruna. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
          <a
            href="https://github.com/Aruna456"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aruna-subramanian/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
