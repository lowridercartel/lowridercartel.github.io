import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/f0e75db8c_generated_image.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="MGTECHNZ Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-heading font-bold text-foreground tracking-tight">
                MGT<span className="text-cyan-400">ECHNZ</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional web development solutions based in Hamilton, New Zealand. We craft digital experiences that drive results.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Custom Websites",
                "E-Commerce Solutions",
                "Web Applications",
                "SEO Optimisation",
                "UI/UX Design",
                "Maintenance & Support",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">Hamilton, New Zealand</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <a
                  href="tel:+640211111171"
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  (+64) 021 111 1171
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <a
                  href="mailto:admin@mgtechnz.kiwi"
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  admin@mgtechnz.kiwi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MGTECHNZ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}