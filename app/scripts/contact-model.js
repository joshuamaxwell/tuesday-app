var Contact = Backbone.Model.extend({

  idAttribute: '_id',

  defaults: {
    name: '',
    phone: '',
    avatar: 'http://i.imgur.com/zGTAxgy.png%3F1',
    bio: ''
  },

})

var ContactsCollection = Backbone.Collection.extend ({
  model: Contact,
  url: 'http://0.0.0.0:3000/collections/contacts'

})
