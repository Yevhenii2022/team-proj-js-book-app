import Glide from '@glidejs/glide';

export const config = {
  type: 'carousel',
  perView: 8,
  autoplay: 1500,
  gap: 10,
  touchRatio: 0.1,
  keyboard: true,
  hoverpause: true,
  
  animationDuration: 1000,
  animationTimingFunc: 'ease-out',
  peek: { before: 50, after: 50 },
  breakpoints: {
    2000: {
      perView: 10,
    },
    1600: {
      perView: 8,
    },
    1280: {
      perView: 7,
    },
    1023: {
      perView: 5,
    },
    500: {
      perView: 2,
    },
  },
};

export const options = {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  autoplay: 3000,
  keyboard: true,
};

export const glide = new Glide('.glide', config);
export const glideFooter = new Glide('.glide_footer', options);
