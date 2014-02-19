window.contacts = new ContactsCollection(  );

contacts.fetch({
  success: function(){
    contacts.each(function(contact) {
      new ListView ({model: contact});
    });
  },
  error: function() {
    console.log('WHOAAAA theres a problem');
  }
})

$('.add-new-btn').on('click', function(){
  if ( $('.edit-panel').hasClass('collapse')){

    $(this).attr({value: 'CANCEL'});

    if( $('.edit-panel').children().length === 0 ){
      new EditView({model: new Contact}); //initialize the EditView
    }
    $('.edit-panel').removeClass('collapse');  //reveal the containing div
  } else {
    //hides the panel
    $('.edit-panel').addClass('collapse');  //remove the containing div
    $(this).attr({value: 'ADD'});
  }
})

