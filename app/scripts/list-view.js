var ListView = Parse.View.extend({
  className: 'list-item',

  renderTemplate: _.template($('#list-item-template').text()),

  initialize: function () {
    this.render();
    $('.contacts-list').prepend(this.el);
    this.on("change", this.render);

  },

  render: function () {
    this.$el.html(this.renderTemplate(this.model.attributes));

  },

  events: {
    "click" : "showInMainView",
    "click .edit-btn" : "editContact",
    "click .delete-btn" : "deleteContact"
  },

  showInMainView: function() {
    // console.log('you clicked on ', this);
    new DetailView({model: this.model});
  },

  editContact: function() {
    // $('.edit-panel').removeClass('collapse');
    // $('.add-new-btn').val('CANCEL');
    // new EditView({model: this.model});
  }, 

  deleteContact: function() {
    this.remove();
    this.model.destroy();
    
  }

})