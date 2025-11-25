import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Title from "@/components/Title";

export default function Work() {
  return (
    <main>
      <Nav />

      <section
        className="mx-4 h-screen max-w-full pt-12 md:max-w-7xl xl:mx-auto"
        data-section="Work"
        id="work"
      >
        <Title title="Work" />
      </section>

      <Footer />
    </main>
  );
}
