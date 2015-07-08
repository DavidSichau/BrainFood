Template.questions.onCreated(function () {
    this.subscribe("answers");
    this.subscribe("allUsers");
});


Template.scores.helpers({
    /**
     * Generates the scores for all users
     * @returns {Array.<T>}
     */
    usersAndScores: function() {
        var users = Meteor.users.find();
        var scores = users.map(function (user) {
            var wrongAnswers = Answers.find({userId: user._id, correct: false}).count();
            var correctAnwsers = Answers.find({userId: user._id, correct: true}).count();
            return {
                userName: user.emails[0].address,
                score: -20*wrongAnswers + 10* correctAnwsers
            }
        });
        return _.sortBy(scores, 'score').reverse();
    }
});
