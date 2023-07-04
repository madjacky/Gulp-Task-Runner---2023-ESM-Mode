import variables from '../_variables';

export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - variables.bodyEl.offsetWidth)}px`;

  variables.htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  variables.bodyEl.style.paddingRight = paddingOffset;
  variables.bodyEl.classList.add('dis-scroll');
  variables.bodyEl.dataset.position = pagePosition;
  variables.bodyEl.style.top = `-${pagePosition}px`;
}