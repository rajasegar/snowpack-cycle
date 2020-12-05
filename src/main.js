import xs from 'xstream';
import { div, h1, button, p, img } from '@cycle/dom';

export default function main(sources) {
  const increment$ = sources.DOM.select('.increment')
    .events('click')
    .mapTo(+1);

  const decrement$ = sources.DOM.select('.decrement').events('click').mapTo(-1);

  const action$ = xs.merge(decrement$, increment$);
  const count$ = action$.fold((x, y) => x + y, 0);

  const vdom$ = count$.map((count) => {
    return div([
      img({ attrs: { src: '/logo.svg', width: '200' } }),
      h1('Counter'),
      button('.increment', {}, '+'),
      p(count),
      button('.decrement', {}, '-'),
    ]);
  });

  return {
    DOM: vdom$,
  };
}
