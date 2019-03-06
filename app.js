'use strict';
var user_input;
var invalid_answer = 'Yes or No answer undetected!' 
var dog_question = 'Do I like dogs? Y/N';
var sleep_question = 'Do I get at least 8 hours of sleep? Y/N';
var sky_diving_question = 'Have I ever been sky diving before? Y/N';
var monkey_question = 'Did I have a pet monkey? Y/N';
var sing_question = 'Can I sing? Y/N';
user_input = prompt(dog_question);
console.log(dog_question);
if (user_input.toUpperCase() === 'Y' || user_input.toUpperCase() === 'YES') {
    alert('Dogs are awesome!');
} else if (user_input.toUpperCase() === 'N' || user_input.toUpperCase() === 'NO') {
    alert('Who does not like dogs!?');
} else {
    alert(invalid_answer);
}
user_input = prompt(sleep_question);
console.log(sleep_question);
if (user_input.toUpperCase() === 'Y' || user_input.toUpperCase() === 'YES') {
    alert('HAHA! I wish!');
} else if (user_input.toUpperCase() === 'N' || user_input.toUpperCase() === 'NO') {
    alert('You are correct! Where is my coffee!?');
} else {
    alert(invalid_answer);
}
user_input = prompt(sky_diving_question);
console.log(sky_diving_question);
if (user_input.toUpperCase() === 'Y' || user_input.toUpperCase() === 'YES') {
    alert('That\'s a negative ghost rider. I would love to though.');
} else if (user_input.toUpperCase() === 'N' || user_input.toUpperCase() === 'NO') {
    alert('You are correct. I bet it would be fun!');
} else {
    alert(invalid_answer);
}
user_input = prompt(monkey_question);
console.log(monkey_question);
if (user_input.toUpperCase() === 'Y' || user_input.toUpperCase() === 'YES') {
    alert('Yup! and he ran away..');
} else if (user_input.toUpperCase() === 'N' || user_input.toUpperCase() === 'NO') {
    alert('I did have a pet monkey in the Philippines, he was a bit mean.');
} else {
    alert(invalid_answer);
}
user_input = prompt(sing_question);
console.log(sing_question);
if (user_input.toUpperCase() === 'Y' || user_input.toUpperCase() === 'YES') {
    alert('I can\'t sing to save my life!');
} else if (user_input.toUpperCase() === 'N' || user_input.toUpperCase() === 'NO') {
    alert('Let\'s keep it that way.');
} else {
    alert(invalid_answer);
}
