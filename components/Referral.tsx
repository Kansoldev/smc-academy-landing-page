"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  [
    "Open the bot",
    "Click the button below to access the @SMCARtrackerbot on Telegram.",
  ],
  [
    "Generate your link",
    'Select the "SMC Academy Affiliate System" button to get started, and the bot sends you to the page where you can generate your referral link.',
  ],
  [
    "Generate and share",
    'Click on the "Generate My Unique Link" button to generate your referral link, and share it with your friends!.',
  ],
  [
    "Earn",
    "When your friend enrolls, you get a commission for their enrollment, but this is for a certain period of time.",
  ],
];

function Referral() {
  return (
    <section id="referral" className="bg-white pt-8 pb-16 md:py-16">
      <div className="grid lg:grid-cols-[.95fr_1.05fr] justify-between items-center gap-10 max-w-290 mx-auto px-5 md:px-8">
        <div>
          <h2 className="text-[1.6875rem] md:text-[2rem] font-bold leading-tight mt-3">
            Invite your friends into the academy using a referral link on
            Telegram
          </h2>

          <p className="text-[0.9375rem] text-[#565c68] mt-3">
            Every student gets a personal referral link generated inside our
            Telegram bot. You can share that referral link, and for each
            successful referral, you earn a commission.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            {steps.map(([title, body], i) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex items-center justify-center shrink-0 size-8 rounded-full text-xs font-bold bg-[#12141a] text-white">
                  {i + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[#12141a] mb-0.5">
                    {title}
                  </h3>

                  <p className="text-sm text-[#565c68]">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <Button className="mt-6 bg-[#0088CC] hover:bg-[#01699c] px-6 py-6 sm:p-7">
            <a
              href="https://t.me/SMCARtrackerbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Image src="/telegram.svg" width={30} height={30} alt="" />
              Open referral bot on Telegram
            </a>
          </Button>
        </div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-120 h-140 ml-auto">
            <Image
              src="/referral.jpg"
              alt="SMC Academy referral image"
              className="object-cover rounded-xl"
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Referral;
