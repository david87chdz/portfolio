import { Image } from '../components/Image';
import { Description } from '../components/Description';
import { Developer } from '../components/PortfolioCode';
import { Social } from '../components/Social';
import { Contact } from '../components/Contact';
import { Proyects } from '../components/Proyects';
import { Skills } from '../components/Skills';

export function Home() {
  return (
    <main>
      <section className="flex flex-col items-center">
        <div className="space-y-6 w-full flex flex-col items-center">
          <div className="my-6 w-full flex justify-center rounded-2xl shadow-md">
            <Image />
          </div>
          <div className="my-6 w-full flex justify-center rounded-2xl shadow-md">
            <Description />
          </div>
          <div className="my-6 w-full flex justify-center rounded-2xl shadow-md">
            <Developer />
          </div>
          <div className="my-6 w-full flex justify-center rounded-2xl shadow-md">
            <Contact />
          </div>
          <div className="my-6 w-full flex justify-center rounded-2xl shadow-md">
            <Social />
          </div>
          <div className="my-6 w-full flex justify-center rounded-2xl shadow-md">
            <Proyects />
          </div>
          <div className="my-6 w-full flex justify-center rounded-2xl shadow-md">
            <Skills />
          </div>
        </div>
      </section>
    </main>
  );
}
