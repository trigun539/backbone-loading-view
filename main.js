import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import MainLayout from './layouts/main-layout';
import SideNav from './views/side-nav.js';

const app = new Marionette.Application();
const mainLayout = new MainLayout();

// Views
const sideNav = new SideNav();


app.on('start', function (){
  Backbone.history.start();
});

app.addRegions({
  wrapperRegion: '#wrapper'
});

app.wrapperRegion.show(mainLayout);
setTimeout(() => mainLayout.sideNav.show(sideNav), 2000);

app.start();