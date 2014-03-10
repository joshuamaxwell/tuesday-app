var DetailView = Parse.View.extend({
  
  renderTemplate: _.template($('#detail-item-template').text()),

  className: 'detail-contact',

  initialize: function(){
    this.render();
    $('.detail-contact').replaceWith( this.el );
    this.on("change", this.render);
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