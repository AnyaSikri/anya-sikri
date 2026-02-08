"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mountain, PenLine, Rocket, ExternalLink } from "lucide-react";
import { hiking, writing, startupsToWatch } from "@/data/content";

export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Beyond Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            The things that make life interesting outside of code.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* Hiking Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Mountain className="text-[#22c55e]" size={28} />
            <h2 className="text-3xl font-bold text-white">Hiking & Outdoors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hiking.map((hike, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1e293b] rounded-2xl overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-[#22c55e]/20 to-[#0f172a] flex items-center justify-center">
                  <Mountain className="text-[#22c55e]/30" size={64} />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{hike.name}</h3>
                  <p className="text-gray-400 text-sm">{hike.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-400 mt-6 text-sm italic">
            Add your hiking photos to /public/images/hiking/ and update the content.ts file
          </p>
        </motion.section>

        {/* Writing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <PenLine className="text-[#f472b6]" size={28} />
            <h2 className="text-3xl font-bold text-white">Writing</h2>
          </div>
          <div className="space-y-4">
            {writing.map((post, index) => (
              <motion.a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block bg-[#1e293b] border border-[#334155] rounded-xl p-5 hover:border-[#f472b6]/50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-[#f472b6] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{post.description}</p>
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-[#f472b6] transition-colors flex-shrink-0" size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Startups to Watch Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="text-[#3b82f6]" size={28} />
            <h2 className="text-3xl font-bold text-white">Startups to Watch</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Companies I'm excited about and keeping an eye on.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {startupsToWatch.map((startup, index) => (
              <motion.a
                key={index}
                href={startup.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1e293b] border border-[#334155] rounded-xl p-5 hover:border-[#3b82f6]/50 transition-all group hover:shadow-lg hover:shadow-[#3b82f6]/10"
              >
                <h3 className="font-semibold text-white group-hover:text-[#3b82f6] transition-colors flex items-center gap-2">
                  {startup.name}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm mt-2">{startup.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Connect Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-[#334155]"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Want to chat?</h2>
          <p className="text-gray-400 mb-6">
            I'm always open to meeting new people and interesting conversations.
          </p>
          <a
            href="mailto:sikrianya@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-full font-medium hover:bg-[#2563eb] transition-colors"
          >
            Say Hello
          </a>
        </motion.section>
      </div>
    </main>
  );
}
