import ServicesList from "@/components/ServicesList";
import ProjectsList from "@/components/ProjectsList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Statistic from "@/components/Statistic";
import Title from "@/components/Title";
import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Nav />

      <Hero />

      <Section className="pt-18" data-section="Introduction" id="introduction">
        <Title title="Introduction" />
        <div className="grid gap-12">
          <div className="flex flex-col gap-12 md:flex-row">
            <Image
              width={380}
              height={380}
              src={"/image/me.jpg"}
              alt="Image Me"
              loading="eager"
              className={`w-full object-cover brightness-60 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0`}
            />
            <div className="flex flex-col justify-between gap-12">
              <p className="text-xl lg:text-3xl">
                The name{"'"}s Bennart, Bennart Dem Gunawan. A passionate
                <span className="font-semibold"> Website</span> and{" "}
                <span className="font-semibold">Mobile</span> Developer with
                Computer Science graduate based in Bandung, Indonesia.
              </p>
              <p className="text-xl lg:text-3xl">
                Working on something will lead to new discoveries. Every process
                unfolds hidden patterns, revealing connections we never noticed
                before.
                <span className="text-soft italic">
                  Was wir wissen, ist ein Tropfen. Was wir nicht wissen, ist ein
                  Ozean.
                </span>
              </p>

              <Statistic />
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-52 pt-18" data-section="What I Do" id="whatido">
        <div className="mx-4 grid max-w-7xl lg:grid-cols-12 xl:mx-auto">
          <div className="col-span-4">
            <Title title="What I Do" />
          </div>
          <div className="border-soft col-span-8 grid border-t">
            <ServicesList />
          </div>
        </div>
      </Section>

      <Section className="mt-52 pt-18" data-section="Selected Work" id="selectedwork">
        <Title title="Selected Work" />
        <div className="border-soft border-t">
          <ProjectsList />
        </div>
      </Section>

      <Footer />
    </main>

    // TODO: 1. Project Asset,
    // TODO: 2. Blogs,
    // TODO: 3. 404 Page/No Network Page,
    // TODO: 4. Animation
    // TODO: 4.1 NAVBAR SAAT NABRAK KE TITLE, jadi BENNART + TITLEnya
    // TODO: 5. Finishing,
    // TODO: 6. Thumbnail
  );
}
