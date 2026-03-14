import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-surface/50">
      <div className="container-main py-16">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <span className="text-xl font-bold text-foreground">
              HACKSPHERE
            </span>

            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Empowering innovators to build the future of technology through
              collaboration and creativity.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-5">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Event */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Event
            </h4>

            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Themes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Prizes
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Resources
            </h4>

            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Judging Criteria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contact
            </h4>

            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sponsor Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground text-center md:text-left">
          
          <p>© 2026 AI HackSphere. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;