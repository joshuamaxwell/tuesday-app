window.contacts = new ContactsCollection();


var currentUser = Parse.User.current();
if (currentUser) {
  $('.login').hide()
  $('.main-view').show()
  contacts.fetch({add:true})
} else {
  $('.main-view').hide()
  $('.login').show()
  $('.register-user').hide()
}

contacts.fetch({
  success: function(){
    // console.log('is it empty?: ', contacts.isEmpty());
    // if( !contacts.isEmpty() ){
    //   contacts.each(function(contact) {
    //     new ListView ({model: contact});
    //     console.log('this happened');
    //   });
    // };
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

$('.login-btn').on('click', function(){
  var username = $('.username').val()
  var password = $('.password').val()
  Parse.User.logIn(username, password, {
    success: function(user) {
      $('.username').val('')
      $('.password').val('')
      $('.login').hide()
      $('.main-view').fadeIn(function(){
        contacts.fetch({add:true})
      })
    },
    error: function(user, error) {
      $('.login-btn').val('LOGIN AGAIN')
      $('.login-error').html(error.message + '<br>If you\'re new here simply click register to sign up. If you have an account please try again');
      console.log('problem logging in ', error);
      $('.register-user').fadeIn()
    }
  });
})

$('.register-btn').on('click', function(){
  var username = $('.username').val()
  var password = $('.password').val()
  var email = $('.username').val()
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", username);

  user.signUp(null, {
    success: function(user) {
      $('.username').val('')
      $('.password').val('')
      $('.login').hide()
      $('.main-view').fadeIn()
      contacts.fetch({add:true})
    },
    error: function(user, error) {
      $('.login-error').text(error.message)
    }
  });
})

$('.logout-btn').on('click', function(){
  Parse.User.logOut();
  location.reload()
})
