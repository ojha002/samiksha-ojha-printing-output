/*
Declare three variables, a and b and c.
If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):
*/

let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\nlet b = 5;\nlet c;\n---------';

// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/
output = output + '\na + b = ' + (a + b);
output= output +  '\na - b = ' + (a - b);
output= output + '\na * b = ' + (a * b);
output= output + '\na / b = ' + (a / b);
output= output + '\na % b = ' + (a % b);
output= output + '\na += b = ' + (a += b);
output= output + '\na -= b = ' + (a -= b);
output= output + '\na *= b = ' + (a *= b);
output= output + '\na /= b = ' + (a /= b);
output= output + '\na %= b = ' + (a %= b);
output= output + '\na == b = ' + (a == b);
output= output + '\na != b = ' + (a != b);
output= output + '\na > b = ' + (a > b);
output= output + '\n!a && !c = ' + (!a && !c);
output= output + '\n!a || !c = ' + (!a || !c);

         
alert(output);//output



// String
let first_name = 'Samiksha'; //Output Samiksha

let last_name = 'Ojha';//Output Ojha

let email = [
    'ojha0002@algonquinlive.com', 
];//Output ojha0002@algonquinlive.com


//"My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com."
alert(`My name is ${first_name} ${last_name}.  You can contact me at ${email}`);
