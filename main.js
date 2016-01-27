import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import MainLayout from './layouts/main-layout';
import SideNav from './views/side-nav.js';
import TopNav from './views/top-nav.js';
import MainContent from './views/main-content.js';

const app = new Marionette.Application();
const mainLayout = new MainLayout();

// Views
const sideNav = new SideNav();
const topNav = new TopNav();
const mainContent = new MainContent();


app.on('start', function (){
  Backbone.history.start();
});

app.addRegions({
  wrapperRegion: '#wrapper'
});

app.wrapperRegion.show(mainLayout);
setTimeout(() => mainLayout.sideNav.show(sideNav), 2000);
setTimeout(() => mainLayout.topNav.show(topNav), 1000);
setTimeout(() => mainLayout.mainContent.show(mainContent), 1000);

app.start();