import { useTypingEffect } from "../hooks/useTyppingEffect";
import reactImage from './../assets/fotoCv.jpeg';

export function Description() {
  const text = "Después de 17 años de experiencia en diversos roles profesionales, me encontré en una encrucijada a los 35 años cuando la empresa en la que trabajaba cerró. En ese momento, decidí dar un giro significativo en mi carrera y me sumergí en el mundo de la programación. Lo que comenzó como una necesidad se transformó en una pasión que me ha motivado a seguir aprendiendo y creciendo continuamente. Aunque mi experiencia en programación es relativamente nueva, mi dedicación y deseo de mejorar constantemente son inquebrantables. Cada día es una oportunidad para aprender algo nuevo y afianzar los conocimientos adquiridos. Mi experiencia previa en el ámbito laboral ha cultivado habilidades valiosas como la resolución de problemas, la adaptabilidad y el trabajo en equipo, las cuales aplico con entusiasmo en el desarrollo de soluciones de software. Estoy comprometido en seguir desarrollándome como programador y aportar valor en cada proyecto en el que participe. Mi objetivo es continuar explorando nuevas tecnologías, enfrentando retos y contribuyendo a proyectos innovadores.";
  const name = "Hola 🖐️ soy David Cerezo Hernández";
  const joke = "Desarrollador web fullstack: convirtiendo café en código y errores en ‘features’.";
  const speed = 100; 
  const displayedText = useTypingEffect(text, speed);
  const displayedName = useTypingEffect(name, 100);
  const displayedJoke = useTypingEffect(joke, 150);

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-start w-full max-w-6xl">
        <img
          src={reactImage}
          alt="David Cerezo"
          className="w-48 h-auto border-4 border-gray-300 dark:border-gray-600 shadow-xl rounded-lg mb-4 lg:mb-0 lg:mr-8 float-left"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:text-4xl lg:text-5xl text-left">
            &lt;{displayedName} /&gt;
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-4 italic text-left">
            &lt; {displayedJoke} /&gt;
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto text-justify">
            &lt; {displayedText} /&gt;
          </p>
        </div>
      </div>
    </div>
  );
}