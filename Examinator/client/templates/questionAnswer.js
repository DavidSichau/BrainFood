
Template.questionAnswer.helpers({

});


Template.questionAnswer.events({
    'submit': function(e) {
        e.preventDefault();
        var formData = $(e.target).serializeArray();
        var correct = _.reduce(this.answers, function(memo, a){
            var answer = _.find(formData, function(ans) {
                return a.answer == ans.name;
            });
            if(a.correct && answer) {
                return memo && true;
            } else if (a.correct && _.isUndefined(answer)){
                return memo && false;
            } else if(!a.correct && answer) {
                return memo && false;
            } else {
                return true;
            }
        }, true);
        Answers.insert({
            questionId: this._id,
            userId: Meteor.userId(),
            correct: correct
        });
        Session.set('activeQuestion', null);
    }


});