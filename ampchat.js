Chats = new Mongo.Collection("chats");

if (Meteor.isClient) {
  Template.chatList.helpers({
    'chats': function () {
      return Chats.find();
    },
    'getDate': function (tanggal) {
      return moment(tanggal).fromNow();
    }
  });

  Template.chatInput.events({
    'submit .form-chat': function (event) {
      event.preventDefault();
      var text = event.target.text.value;
      Chats.insert({
        text: text,
        createDate: new Date()
      });
      event.target.text.value = "";
      return false;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
