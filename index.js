import { run } from '@cycle/run';
import { makeDOMDriver} from '@cycle/dom';

import main from './src/main.js';

run(main, {
  DOM: makeDOMDriver('#app')
});

