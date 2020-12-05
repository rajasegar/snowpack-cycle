import { run } from '@cycle/run';
import { makeDOMDriver } from '@cycle/dom';

import main from './main.js';

run(main, {
  DOM: makeDOMDriver('#app'),
});
