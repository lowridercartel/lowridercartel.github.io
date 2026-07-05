import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, ShoppingCart, Smartphone, Search, Palette, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const CUSTOM_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/a51992c95_generated_5b6ee4aa.png";
const ECOM_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/cb8fb4bad_generated_86d11567.png";
const WEBAPP_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/6a03afcac_generated_8978e3c6.png";
const SEO_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/c761faef9_generated_76eba385.png";
const UIUX_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/11aa44091_generated_2f6248d8.png";
const MAINT_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/eb6358459_generated_208595b1.png";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "We design and build bespoke, fully responsive websites that reflect your brand and engage your audience. Every site is hand-crafted with clean code, fast load times, and mobile-first principles.",
    image: CUSTOM_IMG,
    features: ["Fully responsive design", "Custom CMS integration", "SEO-ready structure", "Fast page load speeds", "Cross-browser compatibility", "Analytics integration"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Launch a powerful online store that turns browsers into buyers. We build e-commerce platforms with secure payment processing, inventory management, and seamless user experiences.",
    image: ECOM_IMG,
    features: ["Secure payment gateways", "Product management system", "Shopping cart & checkout", "Order tracking", "Inventory management", "Customer account portals"],
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    desc: "From internal business tools to customer-facing platforms, we develop custom web applications with rich functionality, real-time features, and intuitive interfaces.",
    image: WEBAPP_IMG,
    features: ["Custom business logic", "User authentication", "Real-time data updates", "API development", "Database design", "Third-party integrations"],
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    desc: "Get found by your ideal customers. Our SEO services improve your search engine rankings, drive organic traffic, and increase your online visibility across New Zealand and globally.",
    image: SEO_IMG,
    features: ["Keyword research & strategy", "On-page optimisation", "Technical SEO audit", "Local SEO for NZ", "Performance monitoring", "Monthly reporting"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful design meets smart usability. We create user interfaces that look stunning and user experiences that keep visitors engaged, reduce bounce rates, and drive conversions.",
    image: UIUX_IMG,
    features: ["User research & personas", "Wireframing & prototyping", "Visual design systems", "Interaction design", "Usability testing", "Brand consistency"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Your website needs ongoing care. We provide reliable maintenance, security updates, performance monitoring, and technical support to keep your site running at peak performance.",
    image: MAINT_IMG,
    features: ["Regular security updates", "Performance monitoring", "Content updates", "Backup management", "Bug fixes & patches", "Uptime monitoring"],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Our Services</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              What We{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Offer</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development services to help your business thrive online. 
              From design to deployment and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img src={service.image} alt={service.title} className="w-full h-auto" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Enquire About This Service <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">How We Work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, target audience, and project requirements." },
              { step: "02", title: "Design", desc: "We create wireframes and visual designs for your approval before any coding begins." },
              { step: "03", title: "Development", desc: "Our team builds your project with clean code, regular updates, and thorough testing." },
              { step: "04", title: "Launch & Support", desc: "We deploy your project and provide ongoing support to ensure continued success." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border text-center relative"
              >
                <div className="text-5xl font-heading font-bold bg-gradient-to-r from-cyan-400/20 to-blue-500/20 bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'd love to discuss how we can help bring your vision to life. Get in touch for a free, no-obligation consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}