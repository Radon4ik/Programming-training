let greeting = ('Hello, ');
let question = ('How are you?')
const message = 'Enter your name';
const confirmResult = prompt(message, '');

console.log(confirmResult);
alert(greeting + `${confirmResult}! ` + question);