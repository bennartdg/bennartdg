"use client";
import CardProjects from "@/components/CardProjects";
import CardServices from "@/components/CardServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import Nav from "@/components/Nav";
import Statistic from "@/components/Statistic";
import Title from "@/components/Title";

import {
  BootstrapIcon,
  CssIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
  LaravelIcon,
  MongodbIcon,
  MysqlIcon,
  Neo4jIcon,
  NextIcon,
  NodejsIcon,
  NodeRedIcon,
  PhpIcon,
  PosgresqlIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  StreamlitIcon,
  TailwindIcon,
  TsIcon,
  ViteIcon,
} from "@/util/svg";
import Image from "next/image";

export default function Home() {
  const imageLogos = [
    { node: <ReactIcon />, href: "https://react.dev", title: "React" },
    { node: <NextIcon />, href: "https://nextjs.org", title: "Next.js" },
    {
      node: <TailwindIcon />,
      href: "https://tailwindcss.com",
      title: "Tailwind CSS",
    },
    {
      node: <BootstrapIcon />,
      href: "https://getbootstrap.com",
      title: "Bootstrap",
    },
    {
      node: <HtmlIcon />,
      href: "https://developer.mozilla.org/docs/Web/HTML",
      title: "HTML5",
    },
    {
      node: <CssIcon />,
      href: "https://developer.mozilla.org/docs/Web/CSS",
      title: "CSS3",
    },
    {
      node: <JsIcon />,
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
      title: "JavaScript",
    },
    {
      node: <TsIcon />,
      href: "https://www.typescriptlang.org",
      title: "TypeScript",
    },
    { node: <ViteIcon />, href: "https://vitejs.dev", title: "Vite" },
    { node: <LaravelIcon />, href: "https://laravel.com", title: "Laravel" },
    { node: <NodejsIcon />, href: "https://nodejs.org", title: "Node.js" },
    {
      node: <StreamlitIcon />,
      href: "https://streamlit.io",
      title: "Streamlit",
    },
    { node: <PhpIcon />, href: "https://www.php.net", title: "PHP" },
    { node: <MysqlIcon />, href: "https://www.mysql.com", title: "MySQL" },
    {
      node: <MongodbIcon />,
      href: "https://www.mongodb.com",
      title: "MongoDB",
    },
    {
      node: <PosgresqlIcon />,
      href: "https://www.postgresql.org",
      title: "PostgreSQL",
    },
    { node: <Neo4jIcon />, href: "https://neo4j.com", title: "Neo4j" },
    { node: <PythonIcon />, href: "https://www.python.org", title: "Python" },
    { node: <NodeRedIcon />, href: "https://nodered.org", title: "Node-RED" },
    {
      node: <PostmanIcon />,
      href: "https://www.postman.com",
      title: "Postman",
    },
    { node: <JavaIcon />, href: "https://www.java.com", title: "Java" },
  ];

  return (
    <main>
      <Nav />

      <Hero />

      <section
        className="mx-4 max-w-full pt-12 md:max-w-7xl xl:mx-auto"
        data-section="Introduction"
        id="introduction"
      >
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
                <span className="text-neutral-300 italic">
                  Was wir wissen, ist ein Tropfen. Was wir nicht wissen, ist ein
                  Ozean.
                </span>
              </p>
              
              <Statistic />
            </div>
          </div>
        </div>
      </section>

      {/* Icon */}
      <section className="mx-4 mt-52 hidden max-w-7xl xl:mx-auto">
        <div className="">
          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={imageLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#f8fbf8"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>

      <section
        className="mx-4 mt-52 max-w-7xl pt-12 xl:mx-auto"
        data-section="What I Do"
        id="whatido"
      >
        <div className="mx-4 grid max-w-7xl lg:grid-cols-12 xl:mx-auto">
          <div className="col-span-4">
            <Title title="What I Do" />
          </div>
          <div className="col-span-8 grid border-t border-soft">
            <CardServices />
          </div>
        </div>
      </section>

      <section
        className="mx-4 mt-52 max-w-7xl pt-12 xl:mx-auto"
        data-section="Selected Work"
        id="selectedwork"
      >
        <Title title="Selected Work" />
        <div className="border-t border-soft">
          <CardProjects />
        </div>
      </section>

      {/* Blog */}
      {/* <section className="mx-4 mt-52 max-w-7xl xl:mx-auto">
        <div className="grid gap-12">
          <div>
            <h1 className="text-5xl tracking-tight">Read My Blogs</h1>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="border">
              <div className="grid h-36 place-items-center border-b">
                <BennartIcon w={50} h={50} />
              </div>
              <div className="grid gap-3 p-3">
                <div className="flex justify-between">
                  <h1 className="w-3/4 text-3xl">Learn more about Me</h1>
                  <ArrowUpRightIcon
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    size={32}
                  />
                </div>
              </div>
            </div>

            <div className="border">
              <div className="grid h-36 place-items-center border-b">
                <h1 className="text-3xl">2019</h1>
              </div>
              <div className="grid gap-3 p-3">
                <div className="flex justify-between">
                  <h1 className="w-3/4 text-3xl">My Best Year</h1>
                  <ArrowUpRightIcon
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
