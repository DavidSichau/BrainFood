/**
 * The global object to store the questions
 * @type {Mongo.Collection}
 */
Questions = new Mongo.Collection("questions");


/**
 * This is used by autoform and collection2 package to automaticaly generate the form
 */
Questions.attachSchema(new SimpleSchema({
    question: {
        type: String,
        label: "Neue Frage"
    },
    answers: {
        type: [Object],
        label: "mögliche Antwort"
    },
    "answers.$.answer": {
        type: String,
        label: "Antwort"
    },
    "answers.$.correct": {
        type: Boolean
    }
}));

/**
 * This is used for security. One can define which mongo operations are allowed
 */
Questions.allow({
    /**
     * Allow only registered users to add a new question
     * @method insert
     */
    insert: function(userId) {
        return userId;
    }
});