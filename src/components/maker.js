import { renderHTML } from './renderHTML';
import { imgContents } from './imgContents';
export const maker = key => {
  const render = () => {
    const contentMsg = `
      <img src=${imgContents[key].src}"/>
    `;
    renderHTML(contentMsg, document.querySelector('#root'));
  };
  render();
};
