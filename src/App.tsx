import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        Olá Mundo1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Teste de yohan viter do curso de REACT para web do curso de chronos
        pomodoro.
      </p>
    </>
  );
}

export { App };
