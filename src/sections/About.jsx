import { Code2, Zap, Shield, Users } from "lucide-react";


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing code that is easy to read, easy to maintain, and kind to whoever touches it next.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Building interfaces that load fast, feel smooth, and don’t test the user’s patience.",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Following best practices to keep applications stable, predictable, and safe from common issues.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working well with teams through clear communication, feedback, and shared responsibility.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*left colm*/}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
              Building the Future,
              <span className="font-serif italic font-normal text-secondary">
                {" "}
                One Component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a frontend developer who enjoys turning complex ideas into
                clean, usable interfaces. I focus on building components that
                are easy to maintain, easy to scale, and pleasant to use — both
                for users and other developers.
              </p>
              <p>
                Most of my work revolves around React and modern CSS workflows,
                where I pay close attention to structure, performance, and
                consistency. If something can be simplified, refactored, or made
                clearer, I will probably try to do that.
              </p>
              <p>
                I believe good frontend development is not just about making
                things look nice, but about making them work reliably, load
                fast, and feel right — even on a bad internet connection.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                I don’t aim for perfect code — I aim for code that future-me
                (and my teammates) won’t be angry at.
              </p>
            </div>
          </div>
          {/*Right colm*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationdelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
