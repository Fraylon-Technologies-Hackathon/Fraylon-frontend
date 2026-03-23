import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <span className="text-xl font-bold bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              AI Hacksphere
            </span>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Empowering innovators to build the future of technology through
              collaboration and creativity.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-5">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 transition group"
                >
                  <Icon
                    size={18}
                    className="text-gray-600 group-hover:text-white transition"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Event */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Event
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-600">
              {["Overview", "Themes", "Schedule", "Prizes"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-teal-500 transition relative"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Resources
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-600">
              {[
                "Rules",
                "FAQs",
                "Code of Conduct",
                "Judging Criteria",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Contact
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-600">
              {["Sponsor Us", "Contact Team", "Discord Community"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-teal-500 transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center md:text-left">
          
          <p>© 2026 AI Hacksphere. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;