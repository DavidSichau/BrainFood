//code shared between client and server

/**
 * A global collection for the ansers
 * @type {Mongo.Collection}
 */
Answers = new Mongo.Collection("answers");

Meteor.methods({

    /**
     * This methods controls if the answers were correct
     * This methods runs on the server and on the client
     * @param questionId The Id of the question
     * @param formData The form data
     */
    'checkAnswer': function (questionId, formData) {
        var question = Questions.findOne(questionId);
        var correct = _.reduce(question.answers, function(memo, a){
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
            questionId: questionId,
            userId: Meteor.userId(),
            correct: correct
        });
        return correct;
    }
});