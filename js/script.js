var createObj = {
  questions : [
    {
      title : 'Вопрос №1',
      answers : [
        {text : 'Ответ №1',
        correct: false},
        {text : 'Ответ №2',
        correct: false},
        {text : 'Ответ №3',
        correct: true}
      ]
    },
    {
      title : 'Вопрос №2',
      answers : [
        {text : 'Ответ №1',
        correct: false},
        {text : 'Ответ №2',
        correct: false},
        {text : 'Ответ №3',
        correct: true}
      ]
    },
    {
      title : 'Вопрос №3',
      answers : [
        {text : 'Ответ №1',
        correct: false},
        {text : 'Ответ №2',
        correct: false},
        {text : 'Ответ №3',
        correct: true}
      ]
    },
  ],

  createEl : function(tagName, className, text = ''){
    var newElement = document.createElement(tagName);
    newElement.className = className;
    newElement.innerHTML = text;
    return(newElement);
  },

  createChecbox : function(id){
    var newElement = document.createElement('input');
    newElement.className = 'checkbox';
    newElement.setAttribute('id', id);
    newElement.setAttribute('type','checkbox');
    return(newElement);
  },

  createLabel : function(className, checkBoxId, text = ''){
    var newElement = document.createElement('label');
    newElement.className = className;
    newElement.setAttribute('for', checkBoxId);
    newElement.innerHTML = text;
    return(newElement);
  },
  createButton : function(className, parrentTag = 'body', text = ''){
    var newElement = document.createElement('input');
    newElement.className = className;
    newElement.setAttribute('type','submit');
    newElement.setAttribute('value', text);
    var newButton = document.getElementsByTagName(parrentTag);
    newButton[0].appendChild(this.createEl('div', 'buttonWraper'));
    newButton = document.getElementsByClassName('buttonWraper');
    newButton[0].appendChild(newElement);
  },
  generateQuestions : function(parrentTag = 'body'){
    var parrent = document.getElementsByTagName(parrentTag);
    for (var i = 0; i < this.questions.length; i++) {
      var newQuestion;
      newQuestion = this.createEl('div', 'questionsWraper');
      parrent[0].appendChild(newQuestion);
      newQuestion.appendChild(this.createEl('h3', 'question', this.questions[i].title));
      for (var j = 0; j < this.questions[i].answers.length; j++) {
        var newAnswer = this.createEl('div', 'answerWraper');
        newQuestion.appendChild(newAnswer);
        newAnswer.appendChild(this.createChecbox('check'+i+j));
        newAnswer.appendChild(this.createLabel('label', 'check'+i+j, this.questions[i].answers[j].text));
    }
  }
}
};


document.body.appendChild(createObj.createEl('h2','headLine','Тест по программированию'));
document.body.appendChild(createObj.createEl('form','testForm'));
createObj.generateQuestions('form');
createObj.createButton('button','form', 'Проверить мои результаты');
