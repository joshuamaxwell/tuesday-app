var Contact = Backbone.Model.extend({

  defaults: {
    name: '',
    phone: '',
    avatar: 'http://i.imgur.com/zGTAxgy.png%3F1',
    bio: ''
  }

})

var ContactsCollection = Backbone.Collection.extend ({
  model: Contact
})
