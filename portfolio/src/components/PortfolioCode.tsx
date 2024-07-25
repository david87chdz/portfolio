import { useEffect, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTranslation } from 'react-i18next';

export const Developer = () => {
  const { t } = useTranslation(); 
  const [bioOutput, setBioOutput] = useState('');

  useEffect(() => {
    class Developer {
      name: string;
      bio: string;
      constructor(name: string, bio: string) {
        this.name = name;
        this.bio = bio;
      }

      greet() {
        return t('greeting', { name: this.name, bio: this.bio });
      }
    }

    const user = new Developer(
      t('name'),
      t('bio')
    );
    setBioOutput(user.greet());
  }, [t]);

  const codeString = `
  class Developer {
    name: string;
    bio: string;
    
    constructor(name: string, bio: string) {
          this.name = name;
          this.bio = bio;
    }

    greet() {
      return \`Hola soy \${this.name} y soy \${this.bio}\`;
    }
  }

  // Creando instancia del usuario
  const fullStack = new Developer('David Cerezo Hernández', 'Desarrollador web fullstack.');
  console.log(fullStack.greet());
  `;

  return (
    <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
      <SyntaxHighlighter language="javascript" style={docco} className="text-xs sm:text-sm md:text-base">
        {codeString}
      </SyntaxHighlighter>
      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md text-sm sm:text-base">
        <strong>{t('output_label')}:</strong>
        <pre className="whitespace-pre-wrap break-words text-gray-800 dark:text-gray-100">{bioOutput}</pre>
      </div>
    </div>
  );
};
