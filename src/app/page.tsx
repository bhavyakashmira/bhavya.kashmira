"use client";

import { motion } from "framer-motion";
import { ContactPage } from "@/components/ContactUS";
import OpenResume from "@/components/OpenResume";
import SkillDataProvider from "@/components/subcomp/SkillDataProvider";
import { Frontend_skill } from "@/constants";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen w-full bg-black relative flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-24 w-full relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-blue-400 font-medium mb-2 tracking-wide">
                  Hi, I am
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Bhavya Kashmira
                </h1>
                <p className="text-lg sm:text-xl text-gray-400 mt-3 leading-relaxed">
                  Full Stack Web Developer &bull; DSA Enthusiast
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-gray-400 leading-relaxed max-w-xl text-sm sm:text-base"
              >
                Software Developer passionate about building scalable web applications
                and solving complex problems with modern technologies.
                I specialize in full stack development with the MERN stack,
                TypeScript, and cloud infrastructure. I enjoy turning ideas
                into polished, performant digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <OpenResume />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex items-center gap-6 pt-4"
              >
                <a href="https://github.com/bhavyakashmira" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FaGithub size={22} />
                </a>
                <a href="https://linkedin.com/in/bhavyakashmira" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FaLinkedinIn size={22} />
                </a>
                <a href="https://x.com/bhavyakashmira" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FaXTwitter size={22} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-xl" />
                <Image
                  src="/profile.jpg"
                  className="relative rounded-2xl border border-white/10"
                  height={340}
                  width={340}
                  alt="profile"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Skills & Technologies
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Technologies I work with daily to build and ship products
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-12"
          >
            {Frontend_skill.map((skill, index) => (
              <SkillDataProvider
                key={skill.id}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ContactPage />
    </main>
  );
}
