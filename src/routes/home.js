import { renderHTML } from '../components/renderHTML.js';

export const home = () => {
  const render = () => {
    const contentMsg = `
      <h1>Home route</h1>
      <a href="/1">/1</a>
      <img src="/1"/>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
