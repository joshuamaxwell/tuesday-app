var MainView = Backbone.View.extend({
  
  renderTemplate: _.template($('#main-item-template').text()),

  className: 'main-contact',

  initialize: function(){
    this.render();
    $('.main-contact').replaceWith( this.el );
    this.listenTo(this.model, "change", this.render);
  },

  events: {
    "click .edit-btn": "editMe"
  },

  render: function() {
    this.$el.html(this.renderTemplate(this.model.attributes));
  },

  editMe: function(){
    $('.add-new-btn').attr({value: 'CANCEL'});
    new EditView({model: this.model}); //initialize the EditView
    $('.edit-panel').removeClass('collapse');  //reveal the containing div
  }

});