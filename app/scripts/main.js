
var ContactsCollection = Backbone.Collection.extend({

})

window.contacts = new ContactsCollection( data );
contacts.each(function(contact) {
  new ListView ({model: contact});
  
});

