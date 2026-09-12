import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadTechnologies() {
      try {
        setLoading(true);
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Could not load technology data.");
        }

        const data = await response.json();

        if (active) {
          setTechnologies(data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Technology data could not be loaded.");
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadTechnologies();

    return () => {
      active = false;
    };
  }, []);

  const selectedIds = useMemo(
    () => new Set(stack.map((item) => item.id)),
    [stack],
  );

  function addToStack(technology) {
    if (selectedIds.has(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  }

  function removeFromStack(id) {
    const item = stack.find((technology) => technology.id === id);

    setStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== id),
    );

    if (item) {
      toast.info(`${item.name} removed from your stack.`);
    }
  }

  function removeAll() {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />

        <section id="technologies" className="scroll-mt-24 pb-20 pt-6 sm:pt-10">
          <div className="container-page">
            <div className="mb-8">
              <h2 className="section-title">
                Explore the <span className="gradient-text">Technologies</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {loading ? (
              <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-soft">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
                  <p className="text-sm font-medium text-slate-600">
                    Loading technologies...
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      added={selectedIds.has(technology.id)}
                      onAdd={addToStack}
                    />
                  ))}
                </div>

                <StackSidebar
                  stack={stack}
                  onRemove={removeFromStack}
                  onRemoveAll={removeAll}
                />
              </div>
            )}
          </div>
        </section>

        <section
          id="projects"
          className="border-y border-slate-100 bg-slate-50/60 py-20 scroll-mt-24"
        >
          <div className="container-page text-center">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title mt-2">Build with the right stack</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Compare popular tools, collect your favorites, and create a
              development stack that fits the project you want to build next.
            </p>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-20">
          <div className="container-page grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">About Dev Stack</p>
              <h2 className="section-title mt-2">
                Less guessing.{" "}
                <span className="gradient-text">More building.</span>
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-500">
              Dev Stack is a simple technology discovery interface for
              developers. Explore familiar tools, compare their categories and
              difficulty, then save the technologies you want to use together.
            </p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pb-20">
          <div className="container-page">
            <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center text-white sm:px-12">
              <p className="eyebrow text-pink-300">Contact</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to build something?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
                Start with a stack, experiment with the tools, and turn your
                next idea into a real project.
              </p>
              <a
                href="mailto:hello@devstack.dev"
                className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Say hello
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
