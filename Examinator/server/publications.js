/**
 * publishes all questions
 */
Meteor.publish('questions', function () {
    return Questions.find();
});
/**
 * publish alls Answers for the current user
 */
Meteor.publish('ownAnswers', function() {
    return Answers.find({userId: this.userId})
});

/**
 * publish all Answers
 */
Meteor.publish('answers', function() {
    return Answers.find();
});
/**
 * publish all users but only the id and the email field
 */
Meteor.publish('allUsers', function() {
    return Meteor.users.find({}, {fields: {emails: 1}});
});
