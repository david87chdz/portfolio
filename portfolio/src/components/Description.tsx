import { useTranslation } from 'react-i18next';
import reactImage from './../assets/fotoCv.jpeg';

export function Description() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <div className="w-full max-w-6xl">
        <img
          src={reactImage}
          alt="David Cerezo"
          className="float-left w-48 h-auto border-4 border-gray-300 dark:border-gray-600 shadow-xl rounded-lg mb-4 mr-4"
        />
        <div className="text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:text-4xl lg:text-5xl">
            &lt;{t('description_name', { defaultValue: 'Hola 🖐️ soy David Cerezo Hernández' })} /&gt;
          </h2>
          <p className="text-xl md:text-2xl mb-4 italic">
            &lt;{t('description_joke', { defaultValue: 'Desarrollador web fullstack: convirtiendo café en código y errores en ‘features’.' })} /&gt;
          </p>
          <p className="text-base md:text-lg text-justify">
            &lt;{t('description_text', { defaultValue: 'Después de 17 años de experiencia en diversos roles profesionales, me encontré en una encrucijada a los 35 años cuando la empresa en la que trabajaba cerró. En ese momento, decidí dar un giro significativo en mi carrera y me sumergí en el mundo de la programación. Lo que comenzó como una necesidad se transformó en una pasión que me ha motivado a seguir aprendiendo y creciendo continuamente. Aunque mi experiencia en programación es relativamente nueva, mi dedicación y deseo de mejorar constantemente son inquebrantables. Cada día es una oportunidad para aprender algo nuevo y afianzar los conocimientos adquiridos. Mi experiencia previa en el ámbito laboral ha cultivado habilidades valiosas como la resolución de problemas, la adaptabilidad y el trabajo en equipo, las cuales aplico con entusiasmo en el desarrollo de soluciones de software. Estoy comprometido en seguir desarrollándome como programador y aportar valor en cada proyecto en el que participe. Mi objetivo es continuar explorando nuevas tecnologías, enfrentando retos y contribuyendo a proyectos innovadores.' })} /&gt;
          </p>
        </div>
      </div>
    </div>
  );
}
