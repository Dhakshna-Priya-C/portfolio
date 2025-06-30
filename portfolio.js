const wrapper = document.querySelector('.wrapper');
const introButton = document.querySelector('.click');
const aboutButton = document.querySelector('.click-2');
const intro = document.querySelector('.intro')

introButton.onclick = () => {
    wrapper.classList.add('active');
};

aboutButton.onclick = () => {
    wrapper.classList.remove('active');
} 

 /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);