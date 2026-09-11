import { Card, CardContent } from "@/components/ui/card";
import { SectionHead } from "./shared";
import { User } from "lucide-react";

const data = [
  [
    "With SMC Academy, I have received a solid reorientation about the general concept of cryptocurrency. The classes help me appreciate the SMC DAO app better; it gives an organized knowledge about cryptocurrency. My approach to cryptocurrency has been reshaped; that fear of missing out that always landed me in trouble. Most importantly, I learned how to spot opportunities in cryptocurrency and how to pitch myself.",
    "Fanenter Emmanuel",
    "Cryptocurrency course",
  ],
  [
    "My experience at SMC Academy was truly incredible!. I enrolled in the Forex and Crypto Combo course, but I mainly focused on the crypto part, and honestly, it was the first class I was ever so excited to attend!. Our tutor always went the extra mile, using practical examples to simplify every concept. With all I’ve learned, I have decided to start sharing knowledge on Tiktok, so others can also be enlightened about crypto and blockchain.",
    "Miriam Uzoma",
    "Forex and Cryptocurrency course",
  ],
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 max-[600px]:py-16">
      <div className="w-full max-w-290 mx-auto px-5 md:px-8">
        <SectionHead title="What our Students Say About us" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map(([q, n, r]) => (
            <Card key={n}>
              <CardContent className="flex flex-col justify-between p-6">
                <h3 className="italic">{q}</h3>

                <div className="mt-5 flex gap-3">
                  <div className="flex items-center justify-center rounded-full bg-black text-white text-sm font-bold size-10.5">
                    <User size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">{n}</p>
                    <span className="block text-xs text-[#8a8f99]">{r}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
