import found1 from '../images/SupportUkraine/01-found-1.png';
import found1x from '../images/SupportUkraine/01-found-2.png';
import found2 from '../images/SupportUkraine/02-found-1.png';
import found2x from '../images/SupportUkraine/02-found-2.png';
import found3 from '../images/SupportUkraine/03-found-1.png';
import found3x from '../images/SupportUkraine/03-found-2.png';
import found4 from '../images/SupportUkraine/04-found-1.png';
import found4x from '../images/SupportUkraine/04-found-2.png';
import found5 from '../images/SupportUkraine/05-found-1.png';
import found5x from '../images/SupportUkraine/05-found-2.png';
import found6 from '../images/SupportUkraine/06-found-1.png';
import found6x from '../images/SupportUkraine/06-found-2.png';
import found7 from '../images/SupportUkraine/07-found-1.png';
import found7x from '../images/SupportUkraine/07-found-2.png';
import found8 from '../images/SupportUkraine/08-found-1.png';
import found8x from '../images/SupportUkraine/08-found-2.png';
import found9 from '../images/SupportUkraine/09-found-1.png';
import found9x from '../images/SupportUkraine/09-found-2.png';

const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: found1,
    img2: found1x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: found2,
    img2: found2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: found3,
    img2: found3x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: found4,
    img2: found4x,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: found5,
    img2: found5x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: found6,
    img2: found6x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: found7,
    img2: found7x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: found8,
    img2: found8x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: found9,
    img2: found9x,
  },
];

const logoContainer = document.querySelector('.logoContainer');

function renderLogos() {
  const markup = charityFunds
    .map(({ title, url, img, img2 }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');
      return `<div class="logo__item fund-item"><p class="fundNumber">${paddedIndex}</p>
      <a href="${url}" class="logo__img" target="_blank" >
      <picture>
      <source srcset="${img}, ${img2} 2x" />
      <img src="${img}" alt="${title}" loading="lazy">
    </picture>

      </a></div>
      
  `;
    })
    .join('');
  logoContainer.insertAdjacentHTML('beforeend', markup);
}

renderLogos();
