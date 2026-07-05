import React from "react";
import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Smartphone, Search, Palette, Wrench, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Globe, title: "Custom Websites", desc: "Bespoke, responsive websites tailored to your brand and business goals." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Online stores that convert visitors into customers with seamless checkout." },
  { icon: Smartphone, title: "Web Applications", desc: "Powerful web apps with rich functionality and intuitive user interfaces." },
  { icon: Search, title: "SEO Optimisation", desc: "Get found online with search engine optimisation that drives organic traffic." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, user-centred design that keeps your audience engaged." },
  { icon: Wrench, title: "Maintenance", desc: "Ongoing support, updates, and monitoring to keep your site running smoothly." },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to launch and beyond, we provide end-to-end web development solutions for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="block p-8 rounded-2xl bg-card border border-border hover:border-cyan-400/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-5 group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition-colors">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all duration-300"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}