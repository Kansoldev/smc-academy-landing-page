"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    <header className="sticky top-0 z-50 border-b border-[#e4e6eb] bg-[#f5f5f4] backdrop-blur-[10px]">
      <div className="max-w-290 w-full mx-auto flex items-center justify-between px-5 md:px-8 h-19.5">
        <Link href="/" className="flex items-center sm:gap-2">
          <div className="relative h-11 w-11">
            <Image
              src="/logo.png"
              className="object-contain max-w-full"
              alt="SMC Academy logo"
              fill
            />
          </div>

          <span className="text-[24px] font-black tracking-[-0.08em]">
            SMC Academy
          </span>
        </Link>

        <nav className="hidden md:flex items-center justify-center md:gap-5 lg:gap-10">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[0.84375rem] uppercase font-medium text-[#777772] hover:text-black tracking-wide transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href="https://forms.gle/Y6HZ8qndwTk1jKky9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-sm hover:-translate-y-px hover:bg-[#1c1f28] rounded-full font-semibold px-6 py-4 hidden md:block"
          >
            Enroll Now
          </a>

          <button
            className="cursor-pointer border-0 bg-transparent p-1.5 md:hidden"
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
            className="flex flex-col gap-0.5 overflow-hidden border-t border-[#e4e6eb] bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-[0.84375rem] text-[#777772] hover:text-black uppercase font-medium border-b border-[#e4e6eb] px-8 py-3.5"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <a
              href="https://forms.gle/Y6HZ8qndwTk1jKky9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-sm hover:-translate-y-px hover:bg-[#1c1f28] rounded-full font-semibold mx-8 text-center py-4 my-3 w-40"
              onClick={() => setOpen(false)}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
