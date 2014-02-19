var EditView = Backbone.View.extend({
  
  className: 'edit-form',

  renderTemplate: _.template($('#edit-form-template').text()),

  initialize: function() {
    this.render()
    $('.edit-panel').html( this.el );
    this.$el.find('.name').val( this.model.get('name') );
    this.$el.find('.phone').val( this.model.get('phone') );
    this.$el.find('.bio').val( this.model.get('bio') );

  },

  render: function() {
    this.$el.html(this.renderTemplate( this.model. attributes ));
  },

  events: {
    "click .done-btn": "addNew"
  },

  addNew: function(){
    var name = this.$el.find('.name').val();
    var phone = this.$el.find('.phone').val();
    var bio = this.$el.find('.bio').val();
    this.model.set({
      name: name, 
      phone: phone, 
      bio: bio
    });
    window.contacts.push( [this.model] ); //add to the Colletion
    this.$el.parent().toggleClass('collapse');
    this.remove();
    $('.add-new-btn').attr({value: 'ADD'});
    new ListView({model: this.model});
  }

})