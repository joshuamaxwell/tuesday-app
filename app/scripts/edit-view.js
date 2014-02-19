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

    var freshModel = contacts.add( this.model ); //add to the Colletion
    
    if ( freshModel.isNew()) new ListView({model: freshModel});
    freshModel.save()


    this.remove();
    this.$el.parent().toggleClass('collapse');
    $('.add-new-btn').attr({value: 'ADD'});
  }

})