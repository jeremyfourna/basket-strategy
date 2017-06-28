const clean = require('./utils.js').clean;
const render = require('./utils.js').render;


exports.renderLayout = renderLayout;

function templateMenuTabs() {
	return `<ul id="menu" class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#view-strategies" role="tab">View strategies</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#creation-lab" role="tab">Creation lab</a>
						</li>
					</ul>`;
}

function templatePanes() {
	return `<div id="menu-panes" class="tab-content">
						<div class="tab-pane active" id="view-strategies" role="tabpanel"></div>
						<div class="tab-pane" id="creation-lab" role="tabpanel"></div>
					</div>`;
}

function renderLayout(db, domElementToRenderTemplate) {
	clean('#menu-panes');
	clean('#menu');
	render(domElementToRenderTemplate, templateMenuTabs);
	render(domElementToRenderTemplate, templatePanes);
}
