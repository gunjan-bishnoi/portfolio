"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { siteConfig } from "@/data";
import { useState } from "react";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    // You can get your Access Key from https://web3forms.com/
    formData.append("access_key", "1bdf4481-2f6b-429b-9b61-c86c499326c2"); // User provided key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-0 w-full flex justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-6 inline-block">
              Get in Touch
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Let's build <br />
              something <span className="text-primary italic">great</span>.
            </h2>
            <p className="text-xl text-muted font-light leading-relaxed mb-12 max-w-md">
              Have a project in mind or just want to say hello?
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="flex flex-col gap-8">
              <a
                href="mailto:gunjanbishnoi029@gmail.com"
                className="flex items-center gap-6 group w-fit"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_var(--primary)]">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Drop a line</div>
                  <div className="text-xl font-bold group-hover:text-primary transition-colors">
                    gunjanbishnoi029@gmail.com
                  </div>
                </div>
              </a>

              {/* Socials */}
              <div className="flex gap-4 mt-4">
                {[
                  { icon: FaGithub, href: siteConfig.socials.github },
                  { icon: FaLinkedin, href: siteConfig.socials.linkedin },
                  { icon: FaTwitter, href: siteConfig.socials.twitter }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="p-4 bg-secondary/30 border border-border/50 rounded-2xl text-muted hover:text-primary hover:bg-secondary transition-all shadow-sm"
                  >
                    <item.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/20 backdrop-blur-xl border border-border/50 px-16 py-12 md:px-24 md:py-16 rounded-[3rem] shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] pointer-events-none" />

            <form className="flex flex-col gap-10 relative z-10" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/80 ml-2">What's your name?</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl px-12 py-7 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg leading-relaxed shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/80 ml-2">Your email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl px-12 py-7 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg leading-relaxed shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/80 ml-2">Tell me about your project</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Hello Gunjan, I would like to discuss..."
                  className="bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl px-12 py-7 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg resize-none leading-relaxed shadow-sm"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative w-full py-6 mt-4 rounded-2xl font-bold flex items-center justify-center gap-4 overflow-hidden transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] ${
                  status === "success" ? "bg-green-500 text-white" :
                  status === "error" ? "bg-red-500 text-white" :
                  "bg-primary text-background"
                }`}
              >
                <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full" />
                <span className="relative z-10 text-lg">
                  {status === "loading" ? "Sending..." :
                   status === "success" ? "Message Sent!" :
                   status === "error" ? "Error! Try Again" :
                   "Send Message"}
                </span>
                {status === "idle" && (
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
                    className="relative z-10"
                  >
                    <Send size={20} />
                  </motion.div>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
