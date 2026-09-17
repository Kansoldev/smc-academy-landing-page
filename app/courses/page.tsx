import Header from "@/components/Header";
import Courses from "@/components/courses";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMC Academy | Courses",
  description:
    "Browse SMC Academy’s complete range of courses and skills training programs. Learn practical, in-demand skills to advance your career and professional development.",
};

function Page() {
  return (
    <>
      <Header />
      <Courses />
      <Footer />
    </>
  );
}

export default Page;
