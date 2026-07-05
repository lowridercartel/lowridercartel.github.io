import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ABOUT_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/7bbc3e554_generated_64fe0fe4.png";
const HAMILTON_IMG = "https://media.base44.com/images/public/6a49bc9a93c32146dec015ba/1764b3b23_generated_68698772.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower businesses with exceptional digital solutions that drive growth, enhance user experience, and deliver measurable results — all with transparent communication and honest pricing." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted web development partner in New Zealand, known for our dedication to quality, innovation, and the success of our clients' digital ventures." },
  { icon: Heart, title: "Our Values", desc: "Integrity, craftsmanship, and client success guide everything we do. We believe in building genuine partnerships, not just websites." },
];

const expertise = [
  "React & Next.js Development",
  "WordPress & CMS Solutions",
  "Responsive & Mobile-First Design",
  "API Integrations & Custom Backends",
  "Performance Optimisation",
  "Accessibility (WCAG) Compliance",
  "E-Commerce Platforms",
  "Cloud Hosting & Deployment",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">About Us</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              The Team Behind{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MGTECHNZ</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a passionate web development team based in Hamilton, New Zealand, dedicated to building 
              exceptional digital experiences for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={ABOUT_IMG} alt="MGTECHNZ development workspace" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Our Story</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold mb-6">
                Built on Passion, Driven by Results
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MGTECHNZ was founded with a simple belief: every business deserves a world-class digital presence, 
                  regardless of size. Based in the heart of Hamilton, we combine local knowledge with global best practices 
                  to deliver websites and applications that truly perform.
                </p>
                <p>
                  Our team brings together expertise in modern web technologies, user experience design, and digital strategy. 
                  We don't just build websites — we craft digital solutions that align with your business objectives and help 
                  you grow.
                </p>
                <p>
                  From small business websites to complex web applications, we approach every project with the same level 
                  of dedication and attention to detail. Our clients across the Waikato and throughout New Zealand trust us 
                  to deliver on time, on budget, and beyond expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise + Hamilton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Our Expertise</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold mb-8">
                Technologies & Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={HAMILTON_IMG} alt="Hamilton, New Zealand" className="w-full h-auto" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center italic">
                Proudly based in Hamilton, New Zealand
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? We'd love to hear about your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}