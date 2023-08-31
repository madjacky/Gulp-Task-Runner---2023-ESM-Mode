// This file is just a collection of prefabricated component connections.
// It is recommended to create a separate file in the components folder and connect everything there

// Determining the operating system on mobile
import { mobileCheck } from './functions/mobile-check';
console.log(mobileCheck())

// Light & Dark Theme Swithcer
import { initializeTheme } from './functions/light-dark-theme-switch';
initializeTheme();

// Determining the Screen Width
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Function throttling (for resizing, input, scrolling, etc.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Fix fullscreen blocks
// import './functions/fix-fullheight';

// Implementation of the burger menu
// import { burger } from './functions/burger';

// Scroll stop implementation (don't forget to call the function)
// import { disableScroll } from './functions/disable-scroll';

// Scroll enable implementation (don't forget to call the function)
// import { enableScroll } from './functions/enable-scroll';

// Modal window implementation
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Tab implementation
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Getting the site header height (don't forget to call the function)
// import { getHeaderHeight } from './functions/header-height';

// Connecting the custom scroll plugin
// import 'simplebar';

// Plugin connection for tooltips positioning
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Connect swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Connect animations on scroll
// import AOS from 'aos';
// AOS.init();

// Connect block parallax when scrolling
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Connecting smooth scrolling to anchors
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Connecting swipe events on mobile
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);