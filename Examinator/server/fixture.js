//server only code

Meteor.startup(function () {
  var questions = [
    {
      question: "life, the universe and everything",
      answers: [{
        answer: 42,
        correct: true
      },{
        answer: 2,
        correct: false
      }]
    },{
      question: "7*7",
      answers: [{
        answer: "feiner Sand",
        correct: true
      },{
        answer: 47,
        correct: false
      },{
        answer: 49,
        correct: true
      }]
    }
  ];
  if (Questions.find().count() === 0) {
    _.each(questions, function(q) {
      Questions.insert(q);
    });
  }
});