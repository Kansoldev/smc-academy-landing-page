"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  ["About us", "#about"],
  ["Courses", "#courses"],
  ["Testimonials", "#testimonials"],
  ["Referral", "#referral"],
  ["FAQ", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4e6eb] bg-white/88 backdrop-blur-[10px]">
      <div className="max-w-290 w-full mx-auto flex items-center justify-between px-8 max-[600px]:px-5 h-19.5">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={120}
            height={100}
            className="object-cover max-w-full"
            alt="SMC Academy logo"
          />
        </Link>

        <nav className="hidden md:flex items-center md:gap-5 lg:gap-10">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[14.5px] font-medium text-[#565c68] transition-colors hover:text-[#12141a]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <Button size="sm" className="hidden md:block">
            <Link href="#">Enroll Now</Link>
          </Button>

          <button
            className="cursor-pointer border-0 bg-transparent p-1.5 text-[#12141a] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="flex flex-col gap-0.5 overflow-hidden border-t border-[#e4e6eb] bg-white max-[980px]:flex"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="border-b border-[#e4e6eb] px-8 py-3.5 text-[15px] font-medium"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Button className="mx-8 mb-5.5 mt-4" onClick={() => setOpen(false)}>
              <Link href="#">Enroll Now</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
