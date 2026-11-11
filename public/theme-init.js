(function () {
  var KEY = 'pdf4me-theme';
  var root = document.documentElement;

  function read() {
    try {
      var v = window.localStorage.getItem(KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch (e) {
      return null;
    }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var pressed = theme === 'light' ? 'true' : 'false';
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', pressed);
    }
  }

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  apply(read() || 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    apply(current());
  });

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    if (!target.closest('[data-theme-toggle]')) return;
    var next = current() === 'light' ? 'dark' : 'light';
    try {
      window.localStorage.setItem(KEY, next);
    } catch (e) {
      /* storage unavailable: the choice only lasts for this page view */
    }
    apply(next);
    document.dispatchEvent(
      new CustomEvent('pdf4me-themechange', { detail: { theme: next } })
    );
  });

  window.addEventListener('storage', function (event) {
    if (event.key === KEY) apply(read() || 'dark');
  });
})();
