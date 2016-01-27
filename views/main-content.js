import Marionette from './../utils/marionette.loading';
import LoadingView from './loading';
import Template from './../templates/main-content.hbs';
import items from './../items.json';

export default Marionette.LoadingItemView.extend({

  loadingView: LoadingView,

  template: Template,

  tagName: 'div',

  id: 'main-content-inner',

  initialize () {
    const self = this;

    self.opts = {
      items: []
    };

    // Faking a GET request to server
    setTimeout(() => {self.opts.items = items; self.render()}, 10000);
  },

  serializeData () {
    const self = this;

    return {
      items: self.opts.items
    }
  },

  onRender () {
    const self = this;

    if (self.opts.items.length === 0) {
      // Init loadging view
      self.__showLoading.call(self);
    }
  }
});