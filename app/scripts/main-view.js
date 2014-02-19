var MainView = Backbone.View.extend({
  
  renderTemplate: _.template($('#main-item-template').text()),

  className: 'main-contact',

  initialize: function(){
    this.render();
    $('.main-contact').replaceWith( this.el );
    this.listenTo(this.model, "change", this.render());
  },

  render: function() {
    this.$el.html(this.renderTemplate(this.model.attributes));
  }

});