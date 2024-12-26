import { useState, useEffect } from "react";

import Link from "next/link";

import { Button } from "./ui/button";

import ai from "../data/ai";
import ui from "../data/ui";

const categories = [
  { id: "ui", label: "User Interface (UI)" },
  { id: "ai", label: "AI Tools" },
];

const getResourceCount = (categoryId) => {
  switch (categoryId) {
    case "ui":
      return ui.length;
    case "ai":
      return ai.length;
    default:
      return 0;
  }
};

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("ui");
  const [resources, setResources] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const loadResources = () => {
      switch (selectedCategory) {
        case "ui":
          setResources(ui);
          break;
        case "ai":
          setResources(ai);
          break;
        default:
          setResources(ui);
      }
    };
    loadResources();
    setVisibleCount(6);
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
                  {category.label} ({getResourceCount(category.id)})
                </Button>
              ))}
            </div>

            {/* Resource cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.slice(0, visibleCount).map((resource, index) => (
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
                      fill={true}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-sans font-medium">{resource.name}</h3>
                  <p className="text-sm opacity-80">{resource.description}</p>
                </Link>
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
