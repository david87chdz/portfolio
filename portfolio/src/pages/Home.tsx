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
        <Image />
        <Description />
        <Developer />
        <Social />
        <Contact />
        <Proyects />
        <Skills />
      </section>
    </main>
  );
}
