import { Header } from "./components/header";
import { About } from "./sections/about";
import { Experiences } from "./sections/experiences";
import { Formations } from "./sections/formations";
import { Skills } from "./sections/skills";

export function App() {
  return (
    <div className="w-full h-screen flex justify-center px-6 mt-24">
      <div className="w-full max-w-2xl">
        <Header />
        <About />
        <Skills />
        <Experiences />
        <Formations />
      </div>
    </div>
  )
}
