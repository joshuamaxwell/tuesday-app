var ListView = Backbone.View.extend({
  className: 'list-item',

  renderTemplate: _.template($('#list-item-template').text()),

  initialize: function () {
    this.render();
    $('.contacts-list').append(this.el);
    this.listenTo(this.model, "change", this.render);

  },

  render: function () {
    this.$el.html(this.renderTemplate(this.model.attributes));

  },

  events: {
    "click" : "showInMainView"
  },

  showInMainView: function() {
    // console.log('you clicked on ', this);
    new MainView({model: this.model});
  }

})