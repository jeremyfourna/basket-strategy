function templatePanes(strategyList) {
  return `<div id="view-strategies">
            ${strategySelection('view-strategies', strategyList)}
          </div>`;
}

function renderLayout(domElement, strategyList) {
  render(domElement, templatePanes, strategyList);
}
