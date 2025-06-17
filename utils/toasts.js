// Preload Iconify icons so they don't look weird in first use
if (window.Iconify && Iconify.loadIcons) {
  Iconify.loadIcons([
    'mdi:check-circle',
    'mdi:close-circle',
    'mdi:alert',
    'mdi:information',
    'mdi:bug',
  ]);
}

const Toast = (() => {
  const container = document.getElementById('toast_container');
  if (!container) throw new Error('No #toast_container found in DOM');

  const icons = {
    success: 'mdi:check-circle',
    error: 'mdi:close-circle',
    warn: 'mdi:alert',
    info: 'mdi:information',
    debug: 'mdi:bug',
  };

  const MAX_STACK = 5;
  const FADE_COLLAPSE_DURATION = 400;

  function show(type, message, duration = 3500) {
    if (container.children.length >= MAX_STACK) {
      const oldest = container.firstElementChild;
      fadeAndCollapse(oldest, () => createToast(type, message, duration));
    } else {
      createToast(type, message, duration);
    }
  }

  function createToast(type, message, duration) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">
        <span class="iconify" data-icon="${
          icons[type] || ''
        }" data-width="24" data-height="24"></span>
      </span>
      <span>${message}</span>
    `;
    toast.addEventListener('click', () => fadeAndCollapse(toast));
    container.appendChild(toast);

    setTimeout(() => fadeAndCollapse(toast), duration);
  }

  function fadeAndCollapse(toast, cb) {
    if (!toast.classList.contains('toast-invisible')) {
      toast.classList.add('toast-invisible');
      setTimeout(() => {
        toast.remove();
        if (cb) cb();
      }, FADE_COLLAPSE_DURATION);
    }
  }

  return {
    success: (msg, dur) => show('success', msg, dur),
    error: (msg, dur) => show('error', msg, dur),
    warn: (msg, dur) => show('warn', msg, dur),
    info: (msg, dur) => show('info', msg, dur),
    debug: (msg, dur) => show('debug', msg, dur),
  };
})();

export default Toast;
