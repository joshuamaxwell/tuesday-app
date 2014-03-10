Parse.initialize("g3WNdnieZAfkhYSnypRVTViPpJq1LlQXv3wBW4yn", "eDRFfB6fxvndzk3Jakpa4uqjQsxUVL8KQb1TJfb3");

var Contact = Parse.Object.extend({

  className: 'Contact',
  defaults: {
    name: '',
    phone: '',
    avatar: 'http://i.imgur.com/zGTAxgy.png%3F1',
    bio: ''
  },

})

var ContactsCollection = Parse.Collection.extend ({
  model: Contact,
  initialize: function(){
    this.on('add', function(contact){      
      new ListView ({model: contact});
      console.log('this happened');
    })
  }
})
