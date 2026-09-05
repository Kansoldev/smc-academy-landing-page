import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AcademyStats from "@/components/AcademyStats";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AcademyStats />
        <About />
      </main>
    </>
  );
}
