"use client";

const Hero = () => {
  return (
    <section className="relative my-[7rem] flex items-center justify-center w-[90%] mx-auto ">
      <div className="container relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-sans max-w-[45rem] lg:leading-tight">
            The only{" "}
            <span className="bg-[#f29c36] text-black px-2 rounded-sm font-bold">
              Hub
            </span>{" "}
            made for Indie Hackers
          </h1>
          <p className="max-w-[700px] opacity-80  font-sans text-lg">
            All the resources you need to build and grow your next project.
          </p>

          <div className="flex gap-8  items-center justify-center flex-wrap"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
