import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

function App() {
  console.log('Oi');
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá Mundo1!
      </Heading>
      <p>
        Teste de yohan viter do curso de REACT para web do curso de chronos
        pomodoro.
      </p>
    </>
  );
}

export { App };
