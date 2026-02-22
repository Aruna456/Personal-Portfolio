import { ArrowUpRight } from "lucide-react";

const ViewAll = () => {
  return (
    <div className="group">
      <a
        href="https://github.com/Aruna456?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-2 p-px
                   font-medium text-sm text-foreground
                   bg-zinc-800/60 rounded-xl
                   transition-transform duration-300
                   hover:scale-[1.03] active:scale-95"
      >
        {/* Gradient border */}
        <span
          className="absolute inset-0 rounded-xl
                     bg-gradient-to-r from-primary/30 to-primary/70
                     opacity-70 group-hover:opacity-100
                     transition-opacity duration-300"
        />

        {/* Inner content */}
        <span
          className="relative z-10 flex items-center gap-2
                     px-5 py-3 rounded-xl
                     bg-background"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            View all projects
          </span>

          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-300
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </a>
    </div>
  );
};

export default ViewAll;
