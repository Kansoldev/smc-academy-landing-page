import Image from "next/image";
import { MapPin, Video, Calendar, Phone, Mail } from "lucide-react";

function BonusPromo() {
  return (
    <section className="bg-linear-to-b from-white to-teal-200">
      <div className="max-w-290 mx-auto sm:grid sm:grid-cols-2 gap-12 px-8 py-12 md:pb-0">
        <div className="relative w-full h-160 hidden md:block overflow-hidden">
          <Image src="/ad.png" alt="" className="object-cover" fill />
        </div>

        <div className="">
          <h2 className="text-3xl md:text-[55px] font-bold text-red-600 leading-tight mb-4">
            End of Year Bonus!
            <br />
          </h2>

          <p className="text-xl leading-relaxed">
            Get <span className="font-bold">₦50,000</span> off on each of the
            following courses:
          </p>

          <ol className="max-w-md text-lg mb-5 mt-3 list-disc pl-5 space-y-2">
            <li>Blockchain Research</li>
            <li>Data Analysis</li>
            <li>Forex Trading</li>
            <li>Cybersecurity</li>
            <li>Crypto Fundamental / Trading</li>
          </ol>

          <div className="space-y-4 mt-10 text-lg">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="shrink-0" />
              <span>Begins Monday 5th October, 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0" />
              <span>
                166 Edet Akpan Avenue (4 Lane by Eni Stores), Uyo, Akwa Ibom
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Video size={18} className="shrink-0" />
              <span>Online & Physical</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" />
              <span>For more enquiries, call +234 802 496 9563</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />
              <a
                href="mailto:academy@smcmegagroup.com"
                className="flex items-center gap-2 hover:transition-colors"
              >
                academy@smcmegagroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BonusPromo;
