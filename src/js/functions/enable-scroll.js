import variables from '../_variables';

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(variables.bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  variables.bodyEl.style.paddingRight = '0px';

  variables.bodyEl.style.top = 'auto';
  variables.bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  variables.bodyEl.removeAttribute('data-position');
  variables.htmlEl.style.scrollBehavior = 'smooth';
}