import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Users, Trophy, Lightbulb, Code } from "lucide-react";

const highlights = [
  { icon: Users, label: "500+ Participants", desc: "Connect with brilliant minds" },
  { icon: Trophy, label: "₹5L+ in Prizes", desc: "Incredible rewards await" },
  { icon: Lightbulb, label: "Expert Mentors", desc: "Guidance from industry leaders" },
  { icon: Code, label: "5 Tracks", desc: "Choose your passion" },
];

const WhySection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-primary/5 blur-[110px]" />

      <div className="container-main relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">

              {/* glow */}
              <div className="absolute inset-0 bg-primary/15 blur-[90px] rounded-full scale-125" />

              <img
                src="/whyillustration.jpg"
                alt="Innovation and technology"
                className="relative z-10 w-full rounded-2xl animate-float"
              />

              {/* floating stat card */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 bg-surface border border-border/30 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-lg font-bold text-primary">48h</div>
                <div className="text-[10px] text-muted-foreground">
                  Non-Stop Hacking
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >

            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-xs font-medium text-accent tracking-wider uppercase mb-6">
              Why HackSphere
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Where Ideas{" "}
              <span className="text-gradient">Come Alive</span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              HackSphere is revolutionizing how we approach innovation,
              collaboration, and technology. By bringing together the brightest
              minds across AI, cybersecurity, web development, and blockchain,
              we're laying the foundation for a more connected future.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Whether you're a seasoned developer or a first-time hacker,
              HackSphere gives you the platform, mentorship, and community to
              turn your ideas into reality.
            </p>

            {/* highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/20 border border-border/30"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="px-8 h-12 rounded-xl bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all"
              >
                Learn More
              </Button>
            </div> */}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;