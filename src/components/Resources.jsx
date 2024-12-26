import { useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

import ai from "../data/ai";
import ui from "../data/ui";

const categories = [
  { id: "ui", label: "User Interface (UI)", data: ui },
  { id: "ai", label: "AI Tools", data: ai },
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [resources, setResources] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  // Use useEffect to load resources when category changes
  useEffect(() => {
    const currentCategory = categories.find(
      (cat) => cat.id === selectedCategory,
    );
    if (currentCategory) {
      setResources(currentCategory.data);
      setVisibleCount(6); // Reset visible count when changing categories
    }
  }, [selectedCategory]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <>
      <section id="resources">
        <div className="flex flex-col items-center justify-center my-[5rem] w-[90%] mx-auto">
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
                      key={index}
                      href={`https://${resource.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg border hover:bg-secondary/30 transition-colors flex flex-col gap-4"
                    >
                      <div className="w-full relative">
                        <img
                          src={resource.image}
                          alt={resource.name}
                          className="object-cover rounded-md w-full h-40"
                        />
                      </div>
                      <h3 className="font-sans font-medium">{resource.name}</h3>
                      <p className="text-sm opacity-80">
                        {resource.description}
                      </p>
                    </Link>
                  ))
                : Array.from({ length: visibleCount }).map((_, index) => (
                    <Skeleton key={index} className="h-[230px] rounded-lg" />
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
