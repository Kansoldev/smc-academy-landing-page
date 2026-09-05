"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,transparent_0%,#fff_78%),radial-gradient(circle_at_1.5px_1.5px,#dfe2e8_1.4px,transparent_1.4px)] bg-size-[auto,26px_26px]">
      <div className="relative z-1 grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-center gap-8 md:gap-14 w-full max-w-290 mx-auto px-5 md:px-8 pt-7 pb-16 md:pb-22 md:mt-7">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Future in Tech Starts Here!.
          </h1>

          <p className="mt-5 text-[#565c68]">
            Learn practical tech skills from blockchain research, UI UX design,
            Forex trading etc. Build real-world projects, and gain the
            confidence to create the next big thing with SMC Academy.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-7 mt-8">
            <Button>Enroll Now</Button>
            <Button variant="secondary">Join the waitlist</Button>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block h-100 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <Image
            src="/hero.jpg"
            className="object-cover"
            alt="SMC Academy hero image"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
