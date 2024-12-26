"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { LucideGithub } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/preetsuthar17/IndieHub")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .then((err) => console.error(err));
  }, []);



  return (
    <section className="relative py-[10rem] flex items-center justify-center overflow-hidden w-[90%] my-[3rem] mx-auto rounded-3xl ">
      <div class="absolute inset-0 bg-gradient-to-bl from-[#4f0000] via-[#934b1a] to-[#A4508B] opacity-40 blur-[120px] grainy-texture"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-sans max-w-[48rem] lg:leading-tight">
            The only <span className="bg-[#f29c36] text-black px-2 rounded-sm">Hub</span>{" "}made for Indie Hackers
          </h1>
          <p className="max-w-[700px] opacity-80 md:text-xl">
            All the resources you need to build and grow your next project.
          </p>

          <div className="flex gap-4   items-center justify-center flex-wrap">
          <Link href="/#resources" className="flex items-center gap-1 grow text-sm font-sans underline underline-offset-4 font-medium">
              <LucideGithub size={17}/>{stars} Star on GitHub
            </Link>
            <Link href="/#resources" className="flex items-center gap-1 grow text-sm font-sans px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 font-medium">
              Explore All Resources
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
