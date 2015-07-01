Template.questions.helpers({
    questions: function () {
        return Questions.find({}, { sort: {question: 1 } });
    },
    activeQuestion: function() {
        return Session.get('activeQuestion');
    }
});

Template.questions.events({
    'click button': function (e, temp) {
        Session.set('activeQuestion', this);
    }
});