import Marionette from 'backbone.marionette';
import Template from './../templates/main-content.hbs';
import items from './../items.json';

console.log('THE ITEMS', items);

export default Marionette.ItemView.extend({

  template: Template,

  tagName: 'div',

  id: 'main-content-inner',

  initialize () {
    const self = this;

    self.opts = {
      items: []
    };

    // Faking a GET request to server
    setTimeout(() => {self.opts.items = items; self.render()}, 3000);
  },

  serializeData () {
    const self = this;

    return {
      items: self.opts.items
    }
  }
});