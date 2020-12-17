var menu = document.querySelector('#menu');
var bg = document.querySelector('#background');

menu.addEventListener('click', function(){
    bg.style.transform = 'scale(.8)';
    bg.style.borderRadius = '7px';
    bg.style.boxShadow = '0 150px 45px -100px rgba(0,0,0,0.2)';
})

var t1 = gsap.timeline();

t1.from('.navitem', {
    stagger: .3,
    duration: 2,
    y: 22,
    delay: 3,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#smlline', {
    width: 0,
    duration: 1,
    ease: 'Expo.easeInOut',
}, '-=2')
.from('.leftitem', {
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#right-section img', {
    duration: 2,
    scale: 1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')