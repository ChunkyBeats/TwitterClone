Twitter.TweetsController = Ember.ArrayController.extend ({
  sortProperties: ['id'],
  actions: {
    sortByTime: function() {
      this.set('sortProperties', ['id'])
    }
  }
})
