import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AcademyStats from "@/components/AcademyStats";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AcademyStats />
        <About />
        <Courses />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
