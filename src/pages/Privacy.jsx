import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We may collect the following types of information when you interact with our website or services:

• Personal Information: Name, email address, phone number, and any other details you voluntarily provide via our contact form or email correspondence.
• Technical Information: IP address, browser type, operating system, referring URLs, and pages viewed on our website.
• Cookies: We use cookies and similar technologies to enhance your browsing experience and analyse website traffic.`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

• To respond to your enquiries and provide the services you have requested.
• To communicate with you regarding your projects, invoices, and support.
• To improve our website, services, and user experience.
• To comply with legal obligations and protect our rights.
• To send occasional business updates or newsletters (only with your consent; you can unsubscribe at any time).`
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With trusted service providers who assist in operating our website and services (e.g., hosting providers, analytics tools), under strict confidentiality agreements.
• When required by law, regulation, or legal process.
• To protect the rights, safety, or property of MGTECHNZ, our clients, or others.`
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.`
  },
  {
    title: "5. Cookies",
    content: `Our website uses cookies to enhance functionality and analyse traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect your experience on our website.

Types of cookies we use:
• Essential cookies: Required for basic website functionality.
• Analytics cookies: Help us understand how visitors interact with our website.
• Preference cookies: Remember your settings and preferences.`
  },
  {
    title: "6. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party websites you visit.`
  },
  {
    title: "7. Your Rights",
    content: `Under the New Zealand Privacy Act 2020, you have the right to:

• Access the personal information we hold about you.
• Request correction of any inaccurate or incomplete information.
• Request deletion of your personal information (subject to legal obligations).
• Withdraw consent for marketing communications at any time.

To exercise any of these rights, please contact us using the details provided below.`
  },
  {
    title: "8. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Project-related data may be retained for the duration of our business relationship and a reasonable period thereafter for record-keeping purposes.`
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:

MGTECHNZ
Hamilton, New Zealand
Email: admin@mgtechnz.kiwi
Phone: (+64) 021 111 1171`
  },
];

export default function Privacy() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Legal</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold">Privacy Policy</h1>
            <p className="mt-6 text-muted-foreground">
              Last updated: July 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-2xl bg-card border border-border"
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              At MGTECHNZ, we are committed to protecting your privacy and ensuring the security of your personal 
              information. This Privacy Policy outlines how we collect, use, store, and protect data when you visit our 
              website or engage our web development services. By using our website, you agree to the practices described 
              in this policy.
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-heading font-semibold mb-3">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}