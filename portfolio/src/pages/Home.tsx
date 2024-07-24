
import { Description } from '../components/Description';
import { Developer } from '../components/PortfolioCode';
import { Social } from '../components/Social';
import { Contact } from '../components/Contact';
import { Proyects } from '../components/Proyects';
import { Skills } from '../components/Skills';

export function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-gray-200 dark:bg-gray-800 shadow-lg dark:shadow-5xl rounded-2xl">
      <section className="w-full flex flex-col items-center py-8 px-4">
        <div className="space-y-6 w-full flex flex-col items-center">
          {/* <div data-aos="fade-up" data-aos-delay="100" className="my-6 w-full max-w-4xl flex justify-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
            <Image />
          </div> */}
          <div data-aos="fade-up" data-aos-delay="200" className="my-6 w-full max-w-4xl flex justify-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
            <Description />
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="my-6 w-full max-w-4xl flex justify-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
            <Developer />
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="my-6 w-full max-w-4xl flex justify-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
            <Contact />
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="my-6 w-full max-w-4xl flex justify-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
            <Social />
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="my-6 w-full max-w-4xl flex justify-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
            <Proyects />
          </div>
          <div data-aos="fade-up" data-aos-delay="700" className="my-6 w-full max-w-4xl flex justify-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
            <Skills />
          </div>
        </div>
      </section>
    </main>
  );
}
