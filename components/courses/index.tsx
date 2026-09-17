"use client";

import { useMemo, useState } from "react";
import CourseCatalog from "./CourseCatalog";
import { CategoryKey } from "./types";
import { courses } from "./courses-data";

function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const filteredCourses = useMemo(() => {
    if (activeCategory === "all") return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen">
      <CourseCatalog
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        filteredCourses={filteredCourses}
      />
    </main>
  );
}

export default CoursesPage;
