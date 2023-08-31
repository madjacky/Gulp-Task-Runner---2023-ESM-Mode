const storageKey = 'theme-preference';

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey);
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
};

const setPreference = (themeValue) => {
  localStorage.setItem(storageKey, themeValue);
  reflectPreference(themeValue);
};

const reflectPreference = (themeValue) => {
  document.firstElementChild.setAttribute('data-theme', themeValue);

  document.querySelector('#theme-toggle')?.setAttribute('aria-label', themeValue);
};

const initializeTheme = () => {
  const theme = {
    value: getColorPreference(),
  };

  reflectPreference(theme.value);

  window.addEventListener('load', () => {
    reflectPreference(theme.value);

    document.querySelector('#theme-toggle').addEventListener('click', () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      setPreference(theme.value);
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference(theme.value);
  });
};

export { initializeTheme };