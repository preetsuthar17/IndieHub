"use client";

import { useState, useEffect } from "react";

import { LucideGithub } from "lucide-react";

import Link from "next/link";

import BackgroundParticles from "./design/BackgroundParticles";
import MeteorShower from "./design/MeteorShower";

const Hero = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/preetsuthar17/IndieHub")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .then((err) => console.error(err));
  }, []);

  return (
    <section className="relative py-[10rem] my-[3rem] flex items-center justify-center overflow-hidden h-auto w-[90%] mx-auto rounded-3xl min-h-[calc(100vh-10rem)] ">
      <div className="absolute w-[90rem] rotate-180 bottom-[-30rem] blur-[80px]  rounded-full h-[40rem] bg-primary opacity-10"></div>
      <div class="absolute inset-0 opacity-70">
        <BackgroundParticles quantity={300} />
      </div>
      <div className="opacity-40">
        <MeteorShower number={5} />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-sans max-w-[48rem] lg:leading-tight">
            The only{" "}
            <span className="bg-[#f29c36] text-black px-2 rounded-sm">Hub</span>{" "}
            made for Indie Hackers
          </h1>
          <p className="max-w-[700px] opacity-80 md:text-xl">
            All the resources you need to build and grow your next project.
          </p>

          <div className="flex gap-8  items-center justify-center flex-wrap">
            <Link
              href="https://github.com/preetsuthar17/IndieHub"
              target="_blank"
              className="flex items-center gap-1 grow text-sm font-sans underline underline-offset-4 font-medium text-center justify-center"
            >
              Star on GitHub
            </Link>
            <Link
              href="/#resources"
              className="flex items-center gap-1 grow text-sm font-sans px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 font-medium text-center justify-center"
            >
              Explore All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
