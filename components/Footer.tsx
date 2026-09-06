import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black pb-8 pt-8 md:pt-16">
      <div className="w-full max-w-290 mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                width={120}
                height={100}
                className="object-cover invert-100"
                alt="SMC Academy logo"
              />
            </Link>

            <p className="text-sm text-white/55 mt-4">
              Learn practical tech skills. Build real-world solutions.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://x.com/smcacademy_"
                className="flex items-center justify-center size-9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMC Academy on X"
              >
                <Image src="/X.svg" width={24} height={24} alt="" />
              </a>

              <a
                href="https://www.facebook.com/p/SMC-Academy-61577199424492/"
                className="flex items-center justify-center size-9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMC Academy on Facebook"
              >
                <Image src="/facebook.svg" width={24} height={24} alt="" />
              </a>

              <a
                href="https://www.linkedin.com/company/thesmc-academy"
                className="flex items-center justify-center size-9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMC Academy on Linkedin"
              >
                <Image src="/linkedin.svg" width={24} height={24} alt="" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">About</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-white/55 hover:text-white"
                >
                  About us
                </Link>
              </li>

              <li>
                <a
                  href="https://smcdao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 hover:text-white"
                >
                  SMC DAO
                </a>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-white/55 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Learn</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#courses"
                  className="text-sm text-white/55 hover:text-white"
                >
                  All courses
                </Link>
              </li>

              <li>
                <Link
                  href="#testimonials"
                  className="text-sm text-white/55 hover:text-white"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  href="#referral"
                  className="text-sm text-white/55 hover:text-white"
                >
                  Referral program
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-white/55 hover:text-white"
                >
                  Join waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Contact</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-sm text-white/55">
                  By Eni Stores, 166 General Edet Akpan Ave, 4 Lane, Uyo, Akwa
                  Ibom state, Nigeria
                </p>
              </li>

              <li>
                <a
                  href="mailto:smcacademy247@gmail.com"
                  className="text-sm text-white/55 hover:text-white"
                >
                  smcacademy247@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:08062900944"
                  className="text-sm text-white/55 hover:text-white"
                >
                  +234 806 290 0944
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 text-center text-white/40 pt-4 mt-8 md:mt-13">
          <small className="text-xs">
            &copy; {new Date().getFullYear()} SMC Academy. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
