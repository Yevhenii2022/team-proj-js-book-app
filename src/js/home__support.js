import action from '../images/SupportUkraine/action-against@1x.png';
import action2 from '../images/SupportUkraine/action-against@2x.png';
import international from '../images/SupportUkraine/international-medical@1x.png';
import international2 from '../images/SupportUkraine/action-against@2x.png';
import medicins from '../images/SupportUkraine/medicins-sans@1x.png';
import medicins2 from '../images/SupportUkraine/medicins-sans@2x.png';
import project from '../images/SupportUkraine/project-hope@1x.png';
import project2 from '../images/SupportUkraine/project-hope@2x.png';
import razom from '../images/SupportUkraine/razom@1x.png';
import razom2 from '../images/SupportUkraine/razom@2x.png';
import save from '../images/SupportUkraine/save-the-children@1x.png';
import save2 from '../images/SupportUkraine/save-the-children@2x.png';
import sergiy from '../images/SupportUkraine/sergiy-prytula@1x.png';
import sergiy2 from '../images/SupportUkraine/sergiy-prytula@2x.png';
import united from '../images/SupportUkraine/united24@1x.png';
import united2 from '../images/SupportUkraine/united24@2x.png';
import world from '../images/SupportUkraine/world-vision@1x.png';
import world2 from '../images/SupportUkraine/world-vision@2x.png';

const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: save,
    img2: save2,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: project,
    img2: project2,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
    img2: united2,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: international,
    img2: international2,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medicins,
    img2: medicins2,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    img2: razom2,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: action,
    img2: action2,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: world,
    img2: world2,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: sergiy,
    img2: sergiy2,
  },
];

const logoContainer = document.querySelector('.logoContainer');

function renderLogos() {
  const markup = charityFunds
    .map(({ title, url, img }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');
      return `<div class="logo__item fund-item"><p class="fundNumber">${paddedIndex}</p>
  <a href="${url}" class="logo__img" target="_blank" >
    <img src="${img}" alt="${title}" loading="lazy">
  </a></div>
  `;
    })
    .join('');
  logoContainer.insertAdjacentHTML('beforeend', markup);
}

renderLogos();
