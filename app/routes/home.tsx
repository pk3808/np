import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome.js";
import { Navbar } from "../component/navbar.jsx";
import Projects from '../routes/projects';
import About from "../routes/about";
import Contact from "../routes/contact";
import ScrollToTop from "~/component/scrollToTop";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
