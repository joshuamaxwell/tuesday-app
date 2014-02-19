
var ContactsCollection = Backbone.Collection.extend({
  model: Contact
})

window.contacts = new ContactsCollection( data );
contacts.each(function(contact) {
  new ListView ({model: contact});
  
});

$('.add-new-btn').on('click', function(){
  if ( _.contains($('.edit-panel').attr('class').split(' '), 'collapse') === true ){
    $('.add-new-btn').attr({value: 'CANCEL'});
    if( $('.edit-panel').children().length === 0 ){
      new EditView({model: new Contact}); //initialize the EditView
    }
    $('.edit-panel').removeClass('collapse');  //reveal the containing div
  }
  else if ( _.contains($('.edit-panel').attr('class').split(' '), 'collapse') === false ){
    //hides the panel
    $('.edit-panel').addClass('collapse');  //remove the containing div
    $('.add-new-btn').attr({value: 'ADD'});

  }


  
})

