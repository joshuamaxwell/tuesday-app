var EditView = Parse.View.extend({
  
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
    if(!this.model) {
      this.model = new Contact(this.model)
    }

    var name = this.$el.find('.name').val();
    var phone = this.$el.find('.phone').val();
    var bio = this.$el.find('.bio').val();

    this.model.set({
      name: name, 
      phone: phone, 
      bio: bio
    });


    this.model.setACL(new Parse.ACL(Parse.User.current()));

    contacts.add( this.model ); //add to the Colletion

    // this next commented out step happens on the collections 'add' event now
    // if ( this.model.isNew() ) new ListView({model: this.model});
    this.model.save()


    this.$el.parent().toggleClass('collapse');
    this.remove();
    $('.add-new-btn').attr({value: 'ADD'});
  }

})