// runs as soon as the template is created
Template.questions.onCreated(function () {
    // subscribe to server publication
    this.subscribe("questions");
    this.subscribe("ownAnswers");
});


/**
 * The helpers are used to provide Template scoped handlers`
 */
Template.questions.helpers({
    /**
     * returns the questions
     */
    questions: function () {
        return Questions.find({}, { sort: {question: 1 } });
    },
    /**
     * reactively returns the currently selected active Question
     */
    activeQuestion: function() {
        return Session.get('activeQuestion');
    }
});

Template.questions.events({
    /**
     * Select the clicked question as active Question
     */
    'click .list-group-item': function () {
        Session.set('activeQuestion', this);
    }
});

Template.singleQuestion.helpers({
    /**
     * Returns true if the user has an correct answer
     * @returns {boolean}
     */
    correctAnswer: function() {
        return !!Answers.findOne({questionId: this._id, userId: Meteor.userId(), correct: true});
    },
    /**
     * Returns the number of wrong answers
     * @returns {number}
     */
    wrongAnswerCount: function() {
        return Answers.find({questionId: this._id, userId: Meteor.userId(), correct: false}).count();
    }
});