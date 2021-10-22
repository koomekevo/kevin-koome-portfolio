import projects from './projectsInfo.js';

const allProjects = projects;
// Create a div to open the window into the div.
function addElement() {
  const modal = document.createElement('div');
  const divHeader = document.createElement('div');
  const header = document.createElement('h1');
  const closeBtn = document.createElement('button');
  const img = document.createElement('img');
  const textDescription = document.createElement('p');
  const technologiesContainer = document.createElement('div');
  const verticalLine1 = document.createElement('div');
  const tech1 = document.createElement('p');
  const verticalLine2 = document.createElement('div');
  const tech2 = document.createElement('p');
  const verticalLine3 = document.createElement('div');
  const tech3 = document.createElement('p');
  const verticalLine4 = document.createElement('div');
  const newBtn = document.createElement('button');
  const newBtnAnchor = document.createElement('a');
  const newBtn2 = document.createElement('button');
  const divBtns = document.createElement('div');
  const imgBtn1 = document.createElement('img');
  const imgBtn2 = document.createElement('img');
  const tech4 = document.createElement('p');
  const verticalLine5 = document.createElement('div');

  modal.className = 'divClass';
  document.body.appendChild(modal);

  // Header and Close Btn
  divHeader.className = 'divHeader';
  modal.appendChild(divHeader);

  header.className = 'h1Class';
  header.textContent = `${allProjects[0].name}`;
  divHeader.appendChild(header);

  closeBtn.classList.add('divBtnClass');
  closeBtn.textContent = 'X';
  divHeader.appendChild(closeBtn);

  // Image
  img.className = 'imgClass';
  img.src = `${allProjects[0].image}`;

  if (window.matchMedia('(min-width: 1000px)').matches) {
    img.src = './BG/Snapshoot-Portfolio-desktop.png';
  }

  img.alt = 'snapshoot-portfolio';
  modal.appendChild(img);

  // Description
  textDescription.className = 'pClass';

  if (window.matchMedia('(min-width: 1000px)').matches) {
    textDescription.textContent = `${allProjects[0].descriptionDesktopPopUp}`;
  }

  if (window.matchMedia('(max-width: 999px)').matches) {
    textDescription.textContent = `${allProjects[0].descriptionMobilePopup}`;
  }

  modal.appendChild(textDescription);

  // Technologies
  technologiesContainer.classList.add('vertical-lines-modal');
  modal.appendChild(technologiesContainer);

  verticalLine1.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine1);

  verticalLine2.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine2);

  verticalLine3.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine3);

  verticalLine4.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine4);

  tech1.classList.add('techs');
  tech2.classList.add('techs');
  tech3.classList.add('techs');

  technologiesContainer.appendChild(tech1);
  technologiesContainer.appendChild(verticalLine2);
  technologiesContainer.appendChild(tech2);
  technologiesContainer.appendChild(verticalLine3);
  technologiesContainer.appendChild(tech3);
  technologiesContainer.appendChild(verticalLine4);

  tech1.textContent = `${allProjects[0].technologies[0]}`;
  tech2.textContent = `${allProjects[0].technologies[1]}`;
  tech3.textContent = `${allProjects[0].technologies[2]}`;

  if (window.matchMedia('(min-width: 1000px)').matches) {
    tech4.classList.add('techs');
    verticalLine5.classList.add('vertical-line-modal');
    technologiesContainer.appendChild(tech4);
    technologiesContainer.appendChild(verticalLine5);
    tech4.textContent = 'Github';
  }

  // Buttons
  divBtns.className = 'divBtns';
  modal.appendChild(divBtns);

  newBtn.className = 'newBtn';
  newBtn.textContent = 'See Live';
  newBtn.appendChild(newBtnAnchor);
  divBtns.appendChild(newBtn);

  newBtn2.className = 'newBtn2';
  newBtn2.textContent = 'See Source';
  divBtns.appendChild(newBtn2);

  imgBtn1.className = 'imgClassBtn';
  imgBtn1.src = './icons/Icon-btn.png';
  imgBtn1.alt = 'github-icon';
  newBtn.appendChild(imgBtn1);

  imgBtn2.className = 'imgClassBtn';
  imgBtn2.src = './icons/github.png';
  imgBtn2.alt = 'github-icon';
  newBtn2.appendChild(imgBtn2);

  // Hide an element
  const hide = (() => {
    modal.style.display = 'none';
  });

  const mainContainer = document.querySelector('.main-container');

  closeBtn.addEventListener('click', () => {
    mainContainer.style.filter = 'blur(0px)';
    hide();
  });
}

export default addElement;