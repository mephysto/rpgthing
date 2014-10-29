
(function ($) {

  Player = Backbone.Model.extend({
    defaults: {
      level: 0,
      life: 0,
      mana: 0,
      attack: 0,
      defense: 0
    },
    initialize: function (options) {
      console.log('a new player enters the world');
      // update view when stats change
      this.on('change', function(model){
        options.view.updatePlayer(model);
      });
    }
  });

  AppView = Backbone.View.extend({
    initialize: function () {
      console.log('welcome to rpgthing');
      // check if player exists in localstorage
      // if none found, create new one.
      this.player = new Player(
        {
          name: "Mephysto",
          view: this
        }
      );
      this.player.set({
        level: 1,
        life: 100,
        mana: 100,
        attack: 1,
        defense: 1
      });
    },
    // update table with Player data
    updatePlayer: function (model) {
      // quick jquery setup for rapid prototype.
      // should replace this with something better
      $('.plr-level td+td').html(model.get('level'));
      $('.plr-life td+td').html(model.get('life'));
      $('.plr-mana td+td').html(model.get('mana'));
      $('.plr-attack td+td').html(model.get('attack'));
      $('.plr-defense td+td').html(model.get('defense'));
    }
  })
  
  /*Friend = Backbone.Model.extend({
    //Create a model to hold friend atribute
    name: null
  });
  
  Friends = Backbone.Collection.extend({
    //This is our Friends collection and holds our Friend models
    initialize: function (models, options) {
      this.bind("add", options.view.addFriendLi);
      //Listen for new additions to the collection and call a view function if so
    }
  });
  
  AppView = Backbone.View.extend({
    el: $("body"),
    initialize: function () {
      this.friends = new Friends( null, { view: this });
      //Create a friends collection when the view is initialized.
      //Pass it a reference to this view to create a connection between the two
    },
    events: {
      "click #add-friend":  "showPrompt",
    },
    showPrompt: function () {
      var friend_name = prompt("Who is your friend?");
      var friend_model = new Friend({ name: friend_name });
      //Add a new friend model to our friend collection
      this.friends.add( friend_model );
    },
    addFriendLi: function (model) {
      //The parameter passed is a reference to the model that was added
      $("#friends-list").append("<li>" + model.get('name') + "</li>");
      //Use .get to receive attributes of the model
    } 
  });*/
  
  var appview = new AppView;
})(jQuery);