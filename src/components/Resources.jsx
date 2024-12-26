import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import dynamic from "next/dynamic";

// Pre-define static content
const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_INCREMENT = 5;
const PLACEHOLDER_IMAGE = "/placeholder.png";

// Memoized category data loading
const categoryDataCache = new Map();
const loadCategoryData = async (categoryId) => {
  if (categoryDataCache.has(categoryId)) {
    return categoryDataCache.get(categoryId);
  }

  try {
    const data = (await import(`../data/${categoryId}`)).default;
    categoryDataCache.set(categoryId, data);
    return data;
  } catch {
    return [];
  }
};

const categories = [
  { id: "ui", label: "UI Libraries" },
  { id: "ai", label: "AI Tools" },
  { id: "design", label: "UI/UX Inspirations" },
  { id: "fonts", label: "Fonts" },
  { id: "colors", label: "Colors" },
  { id: "images", label: "Images" },
  { id: "generators", label: "Generators" },
  { id: "icons", label: "Icons" },
  { id: "illustrations", label: "Illustrations" },
];

// Memoized ResourceCard component
const ResourceCard = memo(({ resource, onImageLoad, loadedImages }) => {
  const handleError = useCallback((event) => {
    event.target.src = PLACEHOLDER_IMAGE;
    event.target.classList.add("error");
  }, []);

  return (
    <Link
      href={`https://${resource.link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-lg border hover:bg-primary/5 transition-colors flex flex-col gap-4"
    >
      <div className="w-full relative">
        <div
          className={`w-full h-[15rem] overflow-hidden rounded-md ${
            !loadedImages[resource.name] ? "bg-gray-200 animate-pulse" : ""
          }`}
        >
          <img
            loading="lazy"
            src={resource.image}
            alt={resource.name}
            onLoad={() => onImageLoad(resource.name)}
            onError={handleError}
            className={`object-cover w-full h-full transition-opacity duration-300 ${
              loadedImages[resource.name] ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
      <h3 className="font-sans font-medium">{resource.name}</h3>
      <p className="text-sm opacity-80 leading-tight">{resource.description}</p>
    </Link>
  );
});

ResourceCard.displayName = "ResourceCard";

// Memoized CategoryButton component
const CategoryButton = memo(({ category, isSelected, onClick }) => (
  <Button
    className="rounded-full font-medium grow"
    variant={isSelected ? "default" : "outline"}
    onClick={onClick}
  >
    {category.label}
  </Button>
));

CategoryButton.displayName = "CategoryButton";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [resources, setResources] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = useCallback((resourceId) => {
    setLoadedImages((prev) => ({ ...prev, [resourceId]: true }));
  }, []);

  const handleShowMore = useCallback(() => {
    setVisibleCount((prev) => prev + LOAD_MORE_INCREMENT);
  }, []);

  const handleCategoryChange = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    setLoadedImages({});
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadCategory = async () => {
      setIsLoading(true);
      try {
        const data = await loadCategoryData(selectedCategory);
        if (isMounted) {
          setResources(data);
        }
      } catch (error) {
        console.error("Error loading category:", error);
        if (isMounted) {
          setResources([]);
        }
      }
      if (isMounted) {
        setIsLoading(false);
      }
    };

    loadCategory();
    return () => {
      isMounted = false;
    };
  }, [selectedCategory]);

  const visibleResources = resources.slice(0, visibleCount);
  const hasMoreToShow = visibleCount < resources.length;

  return (
    <section id="resources">
      <div className="flex flex-col items-center justify-center my-20 w-[90%] mx-auto gap-20">
        <div>
          <div className="flex flex-wrap gap-2 mb-8 font-sans">
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => handleCategoryChange(category.id)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading
              ? Array.from({ length: INITIAL_VISIBLE_COUNT }).map(
                  (_, index) => (
                    <Skeleton
                      key={index}
                      className="h-[330px] w-[28rem] rounded-lg"
                    />
                  )
                )
              : visibleResources.map((resource, index) => (
                  <ResourceCard
                    key={`${resource.name}-${index}`}
                    resource={resource}
                    onImageLoad={handleImageLoad}
                    loadedImages={loadedImages}
                  />
                ))}
          </div>

          {!isLoading && hasMoreToShow && (
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

export default memo(Resources);
