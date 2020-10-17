const mapIndexed = R.addIndex(R.map);

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

function log(content) {
  console.log(...arguments);

  return content;
}
