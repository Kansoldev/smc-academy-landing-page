import { Code2, ShieldCheck, Tags, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHead } from "@/components/shared";

const items = [
  [
    Users,
    "Professional tutors",
    "Our tutors are experienced professionals who are deeply knowledgeable in their fields and, just as importantly, know how to pass that knowledge on to others. Learn from professionals, build real projects, and become industry-ready!.",
  ],
  [
    ShieldCheck,
    "A thriving community",
    "Every student from SMC Academy joins the wider SMC DAO community, with opportunities to grow their reputation and network. Support doesn't stop in the classroom.",
  ],
  [
    Code2,
    "Projects over theory",
    "You'll ship projects across diverse tech fields. From smart contracts, budgeting systems, trading analysis, finance trackers, SMC Academy has it all. When you are ready to graduate, you will have enough prove to show for your learnings.",
  ],
  [
    Tags,
    "Priced to be worth it",
    "One transparent price per track. No surprise certificate fees, no upsells buried within the course of the class. We give you everything upfront",
  ],
] as const;

function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="w-full max-w-290 mx-auto px-5 md:px-8">
        <SectionHead
          title="We Are SMC DAO"
          description="A community committed to raising a generation of believers who are grounded in God, equipped with valuable skills, and intentional about building wealth that lasts. SMC Academy is a brand under SMC DAO where people can grow in their knowledge, develop practical technology and career skills, and build a strong financial foundation. Through learning and purposeful growth, we prepare young people to become capable individuals who will positively influence their families, workplaces, and communities."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {items.map(([Icon, t, d]) => (
            <Card key={t} className="">
              <CardContent className="p-7">
                <div className="flex items-center justify-center rounded-xl bg-[#eee] text-[#12141a] size-11.5 mb-4.5">
                  <Icon size={20} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{t}</h3>
                <p className="text-sm text-[#12141a] leading-relaxed">{d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
