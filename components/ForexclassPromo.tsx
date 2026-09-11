import Image from "next/image";
import { MapPin, Video, Clock, Calendar, Phone, Mail } from "lucide-react";

function ForexclassPromo() {
  return (
    <section className="w-full bg-white py-14 px-6">
      <div className="max-w-290 mx-auto grid md:grid-cols-2 items-center gap-10 px-5 md:px-0">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Free 3-DAY
            <br />
            <span className="text-orange-500">FOREX MASTERCLASS!</span>
          </h2>

          <p className="max-w-md text-lg mb-5">
            Your forex journey could start with one decision. Stop guessing,
            start understanding the market.
          </p>

          <h3 className="mb-4 text-lg md:text-xl text-orange-500 font-semibold uppercase italic">
            Don't Miss This!!
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="shrink-0" />
              <span>Mon 7th – Wed 9th September, 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} className="shrink-0" />
              <span>1pm each day</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0" />
              <span>
                166 Edet Akpan Avenue (4 Lane by Eni Stores), Uyo, Akwa Ibom
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Video size={18} className="shrink-0" />
              <span>Also available live on Zoom</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" />
              <span>+234 802 496 9563, +234 903 204 4444</span>
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

        <div className="relative w-full h-120 hidden md:block overflow-hidden">
          <Image
            src="/forex.jpg"
            alt="Forex trading ad image"
            className="object-cover rounded-lg"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default ForexclassPromo;
