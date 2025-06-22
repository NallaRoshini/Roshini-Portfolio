import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Projects = () => {
  const projects = [
    {
      title: "PostCraft AI",
      description: "AI-powered LinkedIn content generator with modern UI, user authentication, and LLaMA integration for impactful post creation.",
      image: "/image.png",
      link: "https://post-craft-ai-bot.vercel.app/",
      date: "2025",
    },
    {
      title: "Breathe-Scan",
      description: "AI-powered medical imaging tool for early detection of COVID-19 and lung infections using deep learning on chest X-rays.",
      image: "/image2.jpg",
      link: "https://github.com/NallaRoshini/Breathe-Scan",
      date: "2024",
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-gradient-to-b from-[#0d0d22] to-[#1a1a3d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Explore my latest creations and contributions</p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="relative bg-gray-900/40 border border-purple-600/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 h-full flex flex-col justify-between">
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300" />
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-white text-xl font-bold">
                            {project.title}
                          </h3>
                          <span className="text-sm text-purple-400 font-medium">
                            {project.date}
                          </span>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 mt-auto">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-600/20 text-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-pink-500/10 border border-pink-500/30 hover:bg-pink-600/20 text-white" />
        </Carousel>
      </div>

      {/* Background Gradient Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};
