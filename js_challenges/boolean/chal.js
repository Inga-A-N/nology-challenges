2 == '2'; //true (2="2" no type check)
2 === 2; //true (2=2 both of type number)
2 === '2';//false (type check number is not string)
'2' + 3 == 23; //true (considered both strings, just concatinated, not an empty string hence returns true)
'2' + 3 === 5; //false (type check "2" is NaN)
10 % 3;//true (returns 1)
10 % 3 === 1; //true (returns 1 type check 1 is a number)
(100 % 7) % 5; //2 true (100%7=2 2%5=remainder 2 2 is true)   
(100 % 7) % 5 !== 0; //true (100%7=2 2%5=2 2!==0 is true)
(100 % 7) % 9 == 2;//true (100%7=2 2%9=2 2=2 is true)
!(10 % 2); //true (returns !0 which is true)
!!!!((10 % 7) % 3); //false (10%7=3 3%3=0 is false, !true, !!false, !!!true, !!!!false)
10 % 3 === -1 % 2; //false (10%3=1 , -1%2=-1 )
(892783 != '89278' + 3) == 0; //true (892783="892783" so it will return false, 0 returns false, no type check will return true)
true && false; //false (both sides)
false || true; //true
true || false; //true
true || false; //true
true || false + true; //true (true equals 1, false equals 0) 1 OR 0+1
true * false && false + true//returns 0 (true equals 1, false equals 0); // (1*0) and (0+1) false
10 && 123 && -1 && 3; // 3 true (all numbers so true && returns last right value 3)
10 && 123 && 0 && 3;//false (0 returns false)
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1; //returns 0, false (false)||(0-false)
3 && 'Calum' && ('' || 26); //returns 26 last truthy value
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog')); // ('' + 1 && 'Cat' + 'Dog')="CatDog" is the last truthy value and will be returned ;