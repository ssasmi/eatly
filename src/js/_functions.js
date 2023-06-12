// Определение операционной системы на мобильных
//import { mobileCheck } from "./functions/mobile-check";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
//import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);







//select choices
// const defaultSelect = () => {
//   const element = document.querySelector(".default");
//   const choices = new Choices(element, {
//     // searchEnabled: false,
//     noResultsText: "Ничего не найдено",
//     searchEnabled: false,
//     searchChoices: true,
//     searchFloor: 1,
//     itemSelectText: "",
//     callbackOnCreateTemplates: function (template) {
//       let classNames = this.config.classNames;
//       let itemSelectText = this.config.itemSelectText;
//       return {
//         choice: function (classNames, data) {
//           return template(`<div class="${String(classNames.item)} ${String(
//             classNames.itemChoice
//           )} ${String(
//             data.disabled ? classNames.itemDisabled : classNames.itemSelectable
//           )}"
//                                   data-select-text="${String(itemSelectText)}"
//                                   data-choice ${String(
//                                     data.disabled
//                                       ? "data-choice-disabled aria-disabled=true"
//                                       : "data-choice-selectable"
//                                   )}
//                                   data-id="${String(data.id)}"
//                                   data-value="${String(data.value)}"
//                                   data-label="${String(data.label)}"
//                                   ${String(
//                                     data.groupId > 0
//                                       ? 'role="treeitem"'
//                                       : 'role="option"'
//                                   )}>
//                                       <img src="${String(data.value)}" alt="">
//                                       ${String(data.label)}
//                                   </div>`);
//         },
//       };
//     },
//   });

//   let ariaLabel = element.getAttribute("aria-label");
//   element.closest(".choices").setAttribute("aria-label", ariaLabel);
// };

// defaultSelect();

//fls
import * as functionsFl from "./fl/functions-fl.js";

/* Динамический адаптив fls */
import "./fl/dynamic_adapt.js";

/* Модуль для работы с меню (Бургер) */
functionsFl.menuInit();

/* Модуль работы со спойлерами */
functionsFl.spollers();

/* Функции работы скроллом. Плавная навигация по странице */
import * as scrollFl from "./fl/scroll-fl.js";
scrollFl.pageNavigation();

/* Функционал добавления классов к хедеру при прокрутке */
//scrollFl.headerScroll();

/* Наблюдатель за объектами c атрибутом data-watch */
import "./fl/watcher-fl.js";

/* Попапы */
import "./fl/popup-fl.js";

/* Модуль работы с табами */
functionsFl.tabs();

/* Модуль работы со спойлерами */
functionsFl.spollers();

/* Модуль параллакса мышью <div data-prlx-mouse*/
//import './fl/parallax-mouse.js'

/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

// Check my elements with outlines
//[].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})
