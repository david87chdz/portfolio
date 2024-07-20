// PortfolioCode.js
import { useEffect, useState} from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './../styles/portfolio.css'
export const Developer = () => {
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
          return `Hola soy ${this.name} y soy ${this.bio}`;
        }
      }
  
      // Creando instancia del usuario
      const user = new Developer('David Cerezo Hernández', 'Desarrollador web fullstack.');
      setBioOutput(user.greet());
    }, []);
  
    const codeString = `
  class Developer {
    name: string;
    bio: string;
    
    constructor(name: string, bio: string) {
          this.name = name;
          this.bio = bio;
    }
  
    greet() {
      return Hola soy {this.name} y soy {this.bio};
    }
  }
  
  // Creando instancia del usuario
  const fullStack = new Developer('David Cerezo Hernández', 'Desarrollador web fullstack.');
  console.log(fullStack.greet());
    `;
  
    return (
      <div className='portfolio'>
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', border: '1px solid #ccc', borderRadius: '5px' }}>
          <strong>Output:</strong>
          <pre>{bioOutput}</pre>
        </div>
      </div>
    );
  };