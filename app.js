'use strict';
var user_response; //fix 'too low' alert when user enters nothing;
var invalid_answer = 'Yes or No answer undetected!'; 
var dog_question = 'Does Joseph like dogs? Y/N';
var sleep_question = 'Does Joseph get at least 8 hours of sleep? Y/N';
var kid_question = 'Does Joseph have any kids? Y/N';
var monkey_question = 'Did Joseph have a pet monkey? Y/N';
var sing_question = 'Can Joseph sing? Y/N';
var total_questions = 7;
var correct_answers = 0;
var user_name;


user_name = prompt('Please Enter Your Name.');
console.log(user_name);
console.log('User name is :' + user_name);
var user_name_response = 'Hi there ' + user_name + '! Welcome to a guessing game to know more about Joseph!';
alert(user_name_response);

//need to add correct answers for questions; total of correct answers; tally users answers more console log for debugging
function question1() {
(user_response = prompt(dog_question)); //1st question
console.log(dog_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('You are Correct ' + user_name + '! Dogs are awesome!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('C\'mon now ' + user_name + '! Who does not like dogs!?');
} else {
    alert(invalid_answer)
}
}
console.log();
question1();

function question2() {
user_response = prompt(sleep_question); //2nd question
console.log(sleep_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert(user_name + ' you are very funny!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('You are correct ' + user_name + '! Where is my coffee!?');
} else {
    alert(invalid_answer);
}
}
question2();

function question3() {
user_response = prompt(kid_question); //3rd question
console.log(kid_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('You are Correct ' + user_name + '! Joseph has 2 amazing sons, that keeps him on his toes.');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('Incorrect ' + user_name + '.');
} else {
    alert(invalid_answer);
}
}
question3();

function question4() {
user_response = prompt(monkey_question); //4th question
console.log(monkey_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('You are Correct ' + user_name + '! Joseph had a pet monkey around 7 years old in the Philippines.');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('You are Incorrect ' + user_name + '! Joseph did have a pet monkey, and he ran away...');
} else {
    alert(invalid_answer);
}
}
question4();

function question5() {
user_response = prompt(sing_question); //5th question
console.log(sing_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('You are Correct ' + user_name + '! Joseph can\'t sing to save his life!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('Let\'s keep it that way.');
} else {
    alert(invalid_answer);
}
}
question5();

//question number 6
//fix 'too low' alert when user enters nothing;
function question6() {
var chances_dog_question = 4;
var number_of_dog_question = 'Guess how many dogs Joseph lives with?';
while (chances_dog_question > 0) {
    user_response = prompt(number_of_dog_question);
    console.log(number_of_dog_question);
    if (user_response < 4) {
        alert('Too low! You have ' + --chances_dog_question + ' chance(s) left ' + user_name);
    } else if (user_response > 4) {
        alert('Too high! You have ' + --chances_dog_question + ' chance(s) left! ' + user_name);
    } else if (user_response === '4'){
        alert('Good Guess ' + user_name + '!');
        break;
    } else {
        alert('Please Enter a Number ' + user_name); 
    }
    }
}
question6();

function question7() {
    var states = [ 
        'california', 
        'arizona', 
        'new jersey', 
        'philadelphia' 
    ];
    var states_question = 'Guess which states Joseph has lived in besides Washington. GO!' //7th question
    var chances_states_question = 6; //number of chances user gets to guess
    while(chances_states_question > 0) {
        user_response = prompt(states_question)
        for(var i = 0; i < states.length; i++) {
            if (states[i] === user_response.toLowerCase()) {
                alert('You are Correct!');
                chances_states_question = 0;
            }       
        }   
        alert('Try Again ' + user_name + '! You have ' + --chances_states_question + ' chance(s) left.');
    }
}
question7();