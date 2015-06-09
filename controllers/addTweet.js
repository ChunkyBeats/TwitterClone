Twitter.AddTweetController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newTweet= {id: (tweets.length + 1), text: this.get('new-tweet')};
      tweets.addObject(newTweet);
    }
  }
});
