import Marionette from 'backbone.marionette';
import Template from './../templates/main-layout.hbs';

export default Marionette.LayoutView.extend({

  template: Template,

  tagName: 'div',

  id: 'container',

  regions: {
    topNav: '#top-nav',
    sideNav: '#side-nav',
    mainContent: '#main-content'
  }

});