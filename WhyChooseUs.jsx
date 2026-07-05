import React from "react";
import { Shield, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Award, number: "5+", label: "Years Experience" },
  { icon: Users, number: "50+", label: "Happy Clients" },
  { icon: Zap, number: "100+", label: "Projects Delivered" },
  { icon: Shield, number: "99.9%", label: "Uptime Guarantee" },
];

const reasons = [
  { title: "Local Expertise", desc: "Based in Hamilton, NZ — we understand the New Zealand market and work in your timezone." },
  { title: "Modern Technology", desc: "We use the latest frameworks and tools to build fast, secure, and scalable solutions." },
  { title: "Transparent Pricing", desc: "No hidden fees. Clear quotes and regular progress updates throughout your project." },
  { title: "Ongoing Support", desc: "We don't disappear after launch. Ongoing maintenance and support to keep you running." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-background border border-border"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Why MGTECHNZ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-background border border-border"
            >
              <div className="w-1 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 shrink-0" />
              <div>
                <h3 className="text-lg font-heading font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
