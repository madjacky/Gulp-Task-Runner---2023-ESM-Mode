import variables from '../_variables';

export const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    variables.htmlEl.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    variables.htmlEl.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};