import Header from "@/components/Header";
import EventsPage from "@/components/events";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMC Academy | Events",
  description:
    "Explore upcoming and past events at SMC Academy, including workshops, masterclasses, tutorials, and other events happening throughout the academy.",
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <EventsPage />
      </main>

      <Footer />
    </>
  );
}
