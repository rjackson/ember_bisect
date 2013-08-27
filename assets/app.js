App = Ember.Application.create();

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return [{
      type: 'image',
      url: "http://emberjs.com/images/about/ember-productivity-sm.png"
    }, {
      type: 'audio',
      url: "http://emberjs.com/images/about/ember-productivity-sm.png"
    }, {
      type: 'video',
      url: "http://emberjs.com/images/about/ember-productivity-sm.png"
    }]
  }
});

App.MyPlayerView = Ember.ContainerView.extend({
  init: function() {
    this._super();
    
    var media = this.get('media'), viewClass;
    var viewClass = this.container.lookupFactory('component:my-' + media.type);

    var view = this.createChildView(viewClass, {
      media: media
    });
    this.pushObject(view);
    
    var self = this;
  }
});

Ember.Handlebars.helper('my-player', App.MyPlayerView);

App.MyImageComponent = Ember.Component.extend();
App.MyAudioComponent = Ember.Component.extend();
App.MyVideoComponent = Ember.Component.extend();
