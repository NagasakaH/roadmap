import React, {useEffect, useRef} from 'react';
import {ReactComponent as Docker} from './docker.drawio.svg';
import {loadSettings} from '@nagasakah/reactive-svg';
import {settings} from './settings';

function App() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (ref.current) {
      loadSettings(settings, ref.current);
    }
  }, []);

  return (
    <div className="App">
      <Docker ref={ref} />
    </div>
  );
}

export default App;
