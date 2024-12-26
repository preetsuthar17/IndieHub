"use client";

const Hero = () => {
  return (
    <section className="relative my-[10rem] flex items-center justify-center w-[90%] mx-auto ">
      <div className="container relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-sans max-w-[45rem] lg:leading-tight">
            The Only{" "}
            <span className="bg-[#f29c36] text-black px-2 rounded-sm font-bold">
              Hub
            </span>{" "}
            made for Indie Hackers
          </h1>
          <p className="max-w-[700px] opacity-80  font-sans text-lg">
            All the resources you need to build and grow your next project.
          </p>
          <div className="flex gap-8 pt-4  items-center justify-center flex-wrap">
            <a
              href="https://www.producthunt.com/posts/indiehub-4?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-indiehub&#0045;4"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=737512&theme=neutral"
                alt="IndieHub - The&#0032;only&#0032;hub&#0032;made&#0032;for&#0032;indie&#0032;hackers | Product Hunt"
                width="250px"
                height="54px"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
