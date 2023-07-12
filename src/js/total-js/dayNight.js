
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

export function onCheckboxClickHandler(event, body) {
  let value = '';
  if (event.currentTarget.checked) {
    value = Theme.DARK;
    body.classList.add(value);
    body.classList.remove(Theme.LIGHT);
  } else {
    value = Theme.LIGHT;
    body.classList.remove(Theme.DARK);
    body.classList.add(value);
  }
  localStorage.setItem(STORAGE_KEY, value);
}

export function savedThemeOnReloaded(body, checkBoxEl) {
  const savedValue = localStorage.getItem(STORAGE_KEY);

  if (savedValue) {
    body?.classList.add(savedValue);
  } else {
    body?.classList.add(Theme.LIGHT);
  }

  if (checkBoxEl) {
    if (savedValue === Theme.DARK) {
      checkBoxEl.checked = true;
    } else {
      checkBoxEl.checked = false;
    }
  }
}
