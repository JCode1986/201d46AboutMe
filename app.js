'use strict'; //need to add correct answers for questions; total of correct answers; more console log for debugging; ask user's name
var user_response; //fix 'too low' alert when user enters nothing;
var invalid_answer = 'Yes or No answer undetected!'; 
var dog_question = 'Do I like dogs? Y/N';
var sleep_question = 'Do I get at least 8 hours of sleep? Y/N';
var sky_diving_question = 'Have I ever been sky diving before? Y/N';
var monkey_question = 'Did I have a pet monkey? Y/N';
var sing_question = 'Can I sing? Y/N';
var total_questions = 7;
var correct_answers = 0;

user_response = prompt(dog_question); //1st question
console.log(dog_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('Dogs are awesome!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('Who does not like dogs!?');
} else {
    alert(invalid_answer);
}
user_response = prompt(sleep_question); //2nd question
console.log(sleep_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('HAHA! You are very funny!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('You are correct! Where is my coffee!?');
} else {
    alert(invalid_answer);
}
user_response = prompt(sky_diving_question); //3rd question
console.log(sky_diving_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('That\'s a negative ghost rider. I would love to though.');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('You are correct. I bet it would be fun!');
} else {
    alert(invalid_answer);
}
user_response = prompt(monkey_question); //4th question
console.log(monkey_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('Yup! and he ran away..');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('I did have a pet monkey in the Philippines when I was around 7. He was mean.');
} else {
    alert(invalid_answer);
}
user_response = prompt(sing_question); //5th question
console.log(sing_question);
if (user_response.toUpperCase() === 'Y' || user_response.toUpperCase() === 'YES') {
    alert('I can\'t sing to save my life!');
} else if (user_response.toUpperCase() === 'N' || user_response.toUpperCase() === 'NO') {
    alert('Let\'s keep it that way.');
} else {
    alert(invalid_answer);
}
var chances_dog_question = 4;
var number_of_dog_question = 'Guess how many dogs do I live with?'; //6th question
while (chances_dog_question > 0) {
    user_response = prompt(number_of_dog_question);
    console.log(number_of_dog_question);
    if (user_response < 4) {
        alert('Too low!');
    } else if (user_response > 4) {
        alert('Too high!');
    } else if (user_response === '4'){
        alert('You are Correct!');
        break;
    } else {
        alert('Please enter a number'); 
    }
}
var states = [ //states i lived in
    'california', //0 index; var i 
    'arizona', 
    'new jersey', 
    'philadelphia' 
];
var states_question = 'You have 6 chances to guess which states I have lived in besides Washington. GO!' //7th question
var chances_states_question = 6; //number of chances user gets to guess
while(chances_states_question > 0) {
    console.log(chances_states_question);
    user_response = prompt(states_question)
    for(var i = 0; i < states.length; i++) {
        if (states[i] === user_response.toLowerCase()) {
            alert('You are Correct!');
            chances_states_question = 0;
        } 
    }       
    chances_states_question--
}