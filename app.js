// * Close the ad *

let adBtn = document.querySelector('.banner-close');
let banner = document.querySelector('.banner');
let headerTop = document.querySelector('.header-top');
// Add
adBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    headerTop.style.border = 'none';
});
// Remove
adBtn.removeEventListener('click', () => {
    banner.classList.add('hidden');
    headerTop.style.border = 'none';
});

// * Open and close the hamburger *

let hamburgerBtn = document.querySelector('.hamburger-btn');
let hamburgerMenu = document.querySelector('.hamburger-clicked');
// Add
hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'flex';
});

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none';
});

// * Read More / Read Less *
const properties = document.querySelector('.properties');

// Add
properties.addEventListener('click', e => {
    if (e.target.className === 'read-more') {
        e.target.style.display = 'none';
        e.target.parentNode.querySelector('.read-more-paragraph').style.display = 'inline';
        e.target.parentNode.querySelector('.read-less').style.display = 'inline';
    }
});

properties.addEventListener('click', e => {
    if (e.target.className === 'read-less') {
        e.target.style.display = 'none';
        e.target.parentNode.querySelector('.read-more-paragraph').style.display = 'none';
        e.target.parentNode.querySelector('.read-more').style.display = 'inline';
    }
});

/* Change Properties */
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const changingNum = document.querySelector('.changing-num');
const firstProperty = document.querySelector('.property-1');
const secondProperty = document.querySelector('.property-2');
const thirdProperty = document.querySelector('.property-3');

// Add
leftArrow.addEventListener('click', () => {
   let currNum = Number(changingNum.innerHTML);
   if (currNum - 1 < 1) {
        return;
   } else {
    currNum--;
    changingNum.innerHTML = '0' + currNum;
   }
});

rightArrow.addEventListener('click', () => {
    let currNum = Number(changingNum.innerHTML);
    if (currNum + 1 > 3) {
         return;
    } else {
     currNum++;
     changingNum.innerHTML = '0' + currNum;
    }
 });