const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');

  imgPopup.classList.add('popup_div');
  workSection.append(imgPopup);

  imgPopup.style.cssText = `
    justify-content: center;
    align-items: center;
    display: none;
  `;

  imgPopup.append(bigImg);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      bigImg.style.maxWidth = '70%';
      bigImg.style.maxHeight = '60%';
      bigImg.style.borderRadius = '5px';

      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
    }

    if (target && target.matches('div.popup_div')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;