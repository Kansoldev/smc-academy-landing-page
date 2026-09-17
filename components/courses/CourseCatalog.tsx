import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import { categories } from "./categories";
import { CategoryKey, Course } from "./types";

function CourseCatalog({
  activeCategory,
  onCategoryChange,
  filteredCourses,
}: {
  activeCategory: CategoryKey;
  onCategoryChange: (value: CategoryKey) => void;
  filteredCourses: Course[];
}) {
  return (
    <section id="catalog" className="max-w-290 mx-auto px-6 py-14">
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight capitalize">
          Find your track
        </h1>

        <p className="mt-3 text-base leading-relaxed text-[#777772]">
          Every course runs online and in person from our Uyo campus. Filter by
          area to see what fits where you want to go.
        </p>
      </div>

      <Tabs
        value={activeCategory}
        onValueChange={(value) => onCategoryChange(value as CategoryKey)}
        className="mt-8"
      >
        <TabsList className="justify-start gap-3 bg-transparent overflow-scroll md:overflow-auto p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category.key}
              value={category.key}
              className="rounded-full border border-[#E7E3D8] bg-white px-4 py-2 text-sm text-[#777772] hover:text-black data-[state=active]:border-black data-[state=active]:bg-black data-[state=active]:text-white cursor-pointer"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 items-start mt-6 md:mt-10">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default CourseCatalog;
