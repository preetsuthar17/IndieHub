import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const loadCategoryData = async (categoryId) => {
  switch (categoryId) {
    case "ui":
      return (await import("../data/ui")).default;
    case "ai":
      return (await import("../data/ai")).default;
    case "design":
      return (await import("../data/design")).default;
    case "fonts":
      return (await import("../data/fonts")).default;
    case "colors":
      return (await import("../data/colors")).default;
    case "images":
      return (await import("../data/images")).default;
    case "generators":
      return (await import("../data/generators")).default;
    default:
      return [];
  }
};

// Category definitions without the data
const categories = [
  { id: "ui", label: "UI Libraries" },
  { id: "ai", label: "AI Tools" },
  { id: "design", label: "UI/UX Inspirations" },
  { id: "fonts", label: "Fonts" },
  { id: "colors", label: "Colors" },
  { id: "images", label: "Images" },
  { id: "generators", label: "Generators" },
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [resources, setResources] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCategory = async () => {
      setIsLoading(true);
      try {
        const data = await loadCategoryData(selectedCategory);
        setResources(data);
      } catch (error) {
        console.error("Error loading category:", error);
        setResources([]);
      }
      setIsLoading(false);
    };

    loadCategory();
  }, [selectedCategory]);

  const handleImageLoad = (resourceId) => {
    setLoadedImages((prev) => ({
      ...prev,
      [resourceId]: true,
    }));
  };

  const handleImageError = (event) => {
    event.target.src = "/placeholder.png";
    event.target.classList.add("error");
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const resourceId = img.getAttribute("data-resource-id");
            if (resourceId) {
              img.src = img.getAttribute("data-src");
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: "50px",
      },
    );

    const images = document.querySelectorAll("[data-src]");
    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, [resources, visibleCount]);

  return (
    <section id="resources">
      <div className="flex flex-col items-center justify-center my-20 w-[90%] mx-auto gap-20">
        <div>
          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-8 font-sans">
            {categories.map((category) => (
              <Button
                key={category.id}
                className="rounded-full font-medium grow"
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleCount(6);
                  setLoadedImages({});
                }}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Resource cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading
              ? // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-[330px] w-[28rem] rounded-lg"
                  />
                ))
              : // Actual resources
                resources.slice(0, visibleCount).map((resource, index) => (
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
                          data-src={resource.image}
                          data-resource-id={resource.name}
                          alt={resource.name}
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
                    <p className="text-sm opacity-80 leading-tight">{resource.description}</p>
                  </Link>
                ))}
          </div>

          {/* Show More button */}
          {!isLoading && visibleCount < resources.length && (
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
  );
};

export default Resources;
