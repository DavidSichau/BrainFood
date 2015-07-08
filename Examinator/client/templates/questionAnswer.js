
Template.questionAnswer.events({
    /**
     * Submits the form
     * @param e The event handler
     */
    'submit': function(e) {
        e.preventDefault();
        var formData = $(e.target).serializeArray();
        /*
         * calls the meteor function which is executed on the server and on the client
         */
        Meteor.call('checkAnswer', this._id, formData, function(err, correct) {
            if(err) {
                console.log(err);
            }
            if(correct) {
                sAlert.success('richtig');
            } else {
                sAlert.error('falsch');
            }
            Session.set('activeQuestion', null);

        });
    },
    /**
     * clears the active Question
     * @param e
     */
    'click .btn-cancel': function(e) {
        e.preventDefault();
        Session.set('activeQuestion', null);
    }



});