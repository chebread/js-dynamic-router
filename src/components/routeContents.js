import { home } from '../routes/home.js';
import { notFoundPage } from '../routes/notFoundPage.js';
import { maker } from './maker.js';
import { imgContents } from './imgContents.js';

export const routeContents = {
  '/': {
    route: home,
  },
  '/404': {
    route: notFoundPage,
  },
};
Object.keys(imgContents).map(key => {
  Object.assign(routeContents, {
    ['/' + key]: {
      route: maker,
    },
  });
});
