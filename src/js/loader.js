import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const spinerStart = () => {
  Loading.pulse('Wait please...', {
    svgColor: '#4f2ee8',
  });
};

export const spinerStop = () => {
  Loading.remove();
};

export const spinerStartForCategories = () => {
  Loading.pulse('Wait please...', {
    svgColor: '#4f2ee8',
  });
};

export const spinerStopForCategories = () => {
  Loading.remove();
};
