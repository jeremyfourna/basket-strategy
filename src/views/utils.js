const $ = require('jquery');

function render(domElement, template, data = {}) {
  return $(domElement).append(template(data));
}

function addEventListener(eventType, domElement, functionToApply) {
  return $('body').on(eventType, domElement, functionToApply);
}

function removeEventListener(eventType, domElement) {
  return $('body').off(eventType, domElement);
}

function clean(domElement) {
  return $(domElement).html('');
}

function hide(domElement) {
  return $(domElement).hide();
}

function show(domElement) {
  return $(domElement).show();
}

function cleanSVG() {
  return $('svg').remove();
}

exports.render = render;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.clean = clean;
exports.hide = hide;
exports.show = show;
exports.cleanSVG = cleanSVG;
