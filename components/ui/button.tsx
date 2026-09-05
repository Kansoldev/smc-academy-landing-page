import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent px-[26px] py-[14px] text-[15px] font-semibold transition-[transform,background-color,border-color] duration-200 focus-visible:outline-2 focus-visible:outline-[#c1922f] focus-visible:outline-offset-3",
  {
    variants: {
      variant: {
        default: "bg-[#12141a] text-white hover:-translate-y-px hover:bg-[#1c1f28]",
        outline: "border-[#e4e6eb] bg-transparent text-[#12141a] hover:border-[#12141a]",
        gold: "bg-[#c1922f] text-[#221802] hover:bg-[#8a6a22] hover:text-white",
      },
      size: {
        default: "",
        sm: "px-5 py-[11px]",
        block: "w-full",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";
