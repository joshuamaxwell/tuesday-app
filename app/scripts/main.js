window.contacts = new ContactsCollection();

contacts.fetch({
  success: function(){
    console.log('is it empty?: ', contacts.isEmpty());
    if( !contacts.isEmpty() ){
      contacts.each(function(contact) {
        new ListView ({model: contact});
        console.log('this happened');
      });
    };
  },
  error: function() {
    console.log('WHOAAAA theres a problem with the fetch');
  }
});

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

