import { renderHTML } from '../components/renderHTML';

export const notFoundPage = () => {
  const render = () => {
    renderHTML('<h1>404 Not found page.</h1>', document.querySelector('#root'));
  };
  render();
};
