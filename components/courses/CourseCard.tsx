import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Course } from "./types";
import { cn } from "@/lib/utils";
import { calculateDiscount, formatPrice } from "@/utils";

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="justify-between">
      <CardHeader className="gap-3 p-6 pb-0">
        <div className="flex justify-between items-center">
          <Badge
            variant="secondary"
            className="bg-[#EEF3F1] text-[#1F6F5C] rounded-full"
          >
            {course.categoryLabel}
          </Badge>

          {course.discounted && (
            <Badge className="bg-[#F7EED9] text-[#8A6A14] rounded-full font-semibold">
              ₦50,000 off
            </Badge>
          )}
        </div>

        <h2 className="text-lg font-semibold leading-snug text-black">
          {course.title}
        </h2>
      </CardHeader>

      <CardContent className="px-6">
        <p className="text-sm leading-relaxed text-[#777772]">
          {course.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#777772]">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {course.format}
          </span>
        </div>

        <div className="flex gap-3">
          <p
            className={cn(
              "mt-5 font-bold",
              course.discounted
                ? "text-lg font-medium line-through"
                : "text-xl",
            )}
          >
            {formatPrice(course.price)}
          </p>

          {course.discounted && (
            <p className="text-xl font-bold mt-5">
              {calculateDiscount(course.price)}
            </p>
          )}
        </div>
      </CardContent>

      {course.available && (
        <CardFooter>
          <a
            href="https://forms.gle/Y6HZ8qndwTk1jKky9"
            target="_blank"
            rel="noreferrer noopener"
            className="cta-outline -mt-2!"
          >
            Enroll now
          </a>
        </CardFooter>
      )}
    </Card>
  );
}

export default CourseCard;
