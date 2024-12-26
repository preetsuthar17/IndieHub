import { useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

import ai from "../data/ai";
import ui from "../data/ui";
import design from "../data/design";
import fonts from "../data/fonts";

const categories = [
  { id: "ui", label: "UI Libraries", data: ui },
  { id: "ai", label: "AI Tools", data: ai },
  { id: "design", label: "UI/UX Inspirations", data: design },
  { id: "fonts", label: "Fonts", data: fonts },
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [resources, setResources] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (resourceId) => {
    setLoadedImages((prev) => ({
      ...prev,
      [resourceId]: true,
    }));
  };

  const handleImageError = (event) => {
    event.target.src = "/placeholder.jpg"; // Fallback image
    event.target.classList.add("error");
  };

  useEffect(() => {
    setLoadedImages({});
    setResources([]);
    const currentCategory = categories.find(
      (cat) => cat.id === selectedCategory
    );
    if (currentCategory) {
      setResources(currentCategory.data);
      setVisibleCount(6);
    }
  }, [selectedCategory]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <>
      <section id="resources">
        <div className="flex flex-col items-center justify-center my-[5rem] w-[90%] mx-auto gap-20">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h2 className="text-3xl font-bold font-sans">Resources</h2>
            <p className="opacity-80">
              List of available resources for indie hackers and developers.{" "}
            </p>
          </div>
          <div>
            {/* Category chips */}
            <div className="flex flex-wrap gap-2 mb-8 font-sans">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  className="rounded-full font-medium"
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label} ({category.data.length})
                </Button>
              ))}
            </div>

            {/* Resource cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.length > 0
                ? resources.slice(0, visibleCount).map((resource, index) => (
                    <Link
                      key={`${resource.name}-${index}`}
                      href={`https://${resource.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg border hover:bg-secondary/30 transition-colors flex flex-col gap-4"
                    >
                      <div className="w-full relative">
                        <div
                          className={`w-full h-[15rem] overflow-hidden rounded-md ${
                            !loadedImages[resource.name]
                              ? "bg-gray-200 animate-pulse"
                              : ""
                          }`}
                        >
                          <img
                            src={resource.image}
                            alt={resource.name}
                            loading="lazy"
                            onLoad={() => handleImageLoad(resource.name)}
                            onError={handleImageError}
                            className={`object-cover w-full h-full transition-opacity duration-300 ${
                              loadedImages[resource.name]
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        </div>
                      </div>
                      <h3 className="font-sans font-medium">{resource.name}</h3>
                      <p className="text-sm opacity-80">
                        {resource.description}
                      </p>
                    </Link>
                  ))
                : Array.from({ length: visibleCount }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-[330px] w-[28rem] rounded-lg"
                    />
                  ))}
            </div>

            {/* Show More button */}
            {visibleCount < resources.length && (
              <div className="mt-4 text-center">
                <Button
                  onClick={handleShowMore}
                  className="px-4 py-2 rounded-full font-medium"
                >
                  Show More
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
