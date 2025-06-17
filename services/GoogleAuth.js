import generateLoginURL from '../utils/generateLoginURL.js';
import Toast from '../utils/toasts.js';

export class GoogleAuth {
  static async login() {
    window.location.href = generateLoginURL();
  }
}

const btn = document.querySelector('#login');
btn.addEventListener('click', GoogleAuth.login);

const access = location.hash.split('&')[0].split('=')[1];
if (access) {
  localStorage.setItem('token', access);
  window.location.href = window.location.origin;
  Toast.success('Token successfully setted.');
}
