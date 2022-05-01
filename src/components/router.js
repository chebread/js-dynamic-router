import { imgContents } from './imgContents.js';
import { routeContents } from './routeContents.js';

export const router = path => {
  if (path === window.location.pathname) {
  } else {
    window.history.pushState(null, null, window.location.origin + path);
  }
  if (!routeContents[path]) {
    if (path === '/') {
    } else {
      routeContents['/404'].route();
    }
    return;
  }
  if (imgContents[path.substring(1, path.length)]) {
    routeContents[path].route(path.substring(1, path.length));
    return;
  }
  routeContents[path].route();
  window.onpopstate = () => {
    if (!routeContents[window.location.pathname]) {
      routeContents['/404'].route();
      return;
    }
    if (
      imgContents[
        window.location.pathname.substring(1, window.location.pathname.length)
      ]
    ) {
      console.log(1);
      routeContents[window.location.pathname].route(
        window.location.pathname.substring(1, window.location.pathname.length)
      );
      return;
    }
    routeContents[window.location.pathname].route();
  };
};
