'use strict';
var user_response; //fix 'too low' alert when user enters nothing;
var invalid_answer = 'Yes or No answer undetected!'; 
var dog_question = 'Does Joseph like dogs? Y/N'; //1st question
var sleep_question = 'Does Joseph get at least 8 hours of sleep? Y/N'; //2nd question
var kid_question = 'Does Joseph have any kids? Y/N'; //3rd question
var monkey_question = 'Did Joseph have a pet monkey? Y/N'; //4th question
var sing_question = 'Can Joseph sing? Y/N'; //5th question
var number_of_dog_question = 'Guess how many dogs Joseph lives with?'; //6th question
var states_question = 'Guess which states Joseph has lived in besides Washington. GO!' //7th question
var total_questions = 7;
var correct_guesses = 0;
var user_name;


user_name = prompt('Please Enter Your Name.');
console.log('User name is :' + user_name);
var user_name_response = 'Hi there ' + user_name + '! Welcome to a guessing game to know more about Joseph!';
alert(user_name_response);

function question1() {
    (user_response = prompt(dog_question)); //1st question
    if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
        alert('You are Correct ' + user_name + '! Dogs are awesome!');
        correct_guesses++;
    } else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
        alert('C\'mon now ' + user_name + '! Who does not like dogs!?');
    } else {
        alert(invalid_answer)
    }
}
question1();
console.log('Question: ' + dog_question + ' Correct Answer: Yes');

function question2() {
user_response = prompt(sleep_question); //2nd question
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert(user_name + ' you are very funny!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('You are correct ' + user_name + '! Where is my coffee!?');
    correct_guesses++;
} else {
    alert(invalid_answer);
}
}
question2();
console.log('Question: ' + sleep_question + ' Correct Answer: Yes');

function question3() {
user_response = prompt(kid_question); //3rd question
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('You are Correct ' + user_name + '! Joseph has 2 amazing sons, that keeps him on his toes.');
    correct_guesses++;
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('You are Incorrect ' + user_name + '. Joseph has 2 sons.');
} else {
    alert(invalid_answer);
}
}
question3();
console.log('Question: ' + kid_question + ' Correct Answer: Yes');

function question4() {
user_response = prompt(monkey_question); //4th question
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('You are Correct ' + user_name + '! Joseph had a pet monkey around 7 years old in the Philippines.');
    correct_guesses++;
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('You are Incorrect ' + user_name + '! Joseph did have a pet monkey, and he ran away...');
} else {
    alert(invalid_answer);
}
}
question4();
console.log('Question: ' + monkey_question + ' Correct Answer: Yes');

function question5() {
user_response = prompt(sing_question); //5th question
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('You are Incorrect ' + user_name + '! Joseph can\'t sing to save his life!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('Let\'s keep it that way.');
    correct_guesses++;
} else {
    alert(invalid_answer);
}
}
question5();
console.log('Question: ' + sing_question + ' Correct Answer: No');

//question number 6
//fix 'too low' alert when user enters nothing;
function question6() {
    var chances_dog_question = 4;
    while (chances_dog_question > 0) {
        user_response = prompt(number_of_dog_question);
        if (user_response < 4) {
            alert('Too low! You have ' + --chances_dog_question + ' chance(s) left ' + user_name);
        } else if (user_response > 4) {
            alert('Too high! You have ' + --chances_dog_question + ' chance(s) left! ' + user_name);
        } else if (user_response === '4'){
            alert('You are Correct ' + user_name + '!');
            correct_guesses++;
            break;
        } else {
            alert('Please Enter a Number ' + user_name); 
        }
    }
}
question6();
console.log('Question: ' + number_of_dog_question + ' Correct Answer: 4');

function question7() {
    var states_lived_in = [ 
        'california', 
        'arizona', 
        'new jersey', 
        'philadelphia' 
    ];
    var states_question = 'Guess which states Joseph has lived in besides Washington. GO!' //7th question
    var chances_states_question = 6; //number of chances user gets to guess
    while(chances_states_question > 0) {
        user_response = prompt(states_question);
        for(var i = 0; i < states_lived_in.length; i++) {
            if (states_lived_in[i] === user_response.toLowerCase()) {
                alert('You are Correct!');
                correct_guesses++;
                chances_states_question = 0;            
            }
        }
        if(chances_states_question > 0) {
            alert('You have ' + --chances_states_question + ' chance(s) left!');
        }
    }
}
question7();

alert('You have guessed ' + correct_guesses + ' out of ' + total_questions + '.');
