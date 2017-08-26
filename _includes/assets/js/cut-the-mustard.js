 /* Cut the mustard */
if ( 'querySelector' in document && 'addEventListener' in window ) {
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + 'js';
}
