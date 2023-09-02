                  // JAVASCRIPT VARIABLES

                  "use strict"
                  console.log(x) // underdefine
                  
                  var x=5;        // global variables
                  var y=5;
                  console.log(x+y);


                  var a=10;
                  var b=20;
                  console.log(a+b);

                  let g=50;
                  let l=50;
                  console.log(g+l);

                  var dead='Arshad'
                  let j='Khan'
                  console.log(dead+" "+j);


                  var v="Tech";
                  var n="Altum";
                  console.log(v);
                  console.log(n);

                  let ar = "150";
                  let br = 150;
                  console.log(ar+br);

                  let car = "audi";
                  let bike = "Apache";
                  console.log(car);
                  console.log(bike);

                  var num = "cake";
                  var sum = "pastry";
                  console.log(num);
                  console.log(sum);
                  console.log(num+" "+sum)

                  let k = 1000;
                  let z = 1000;
                  let s = 8000;
                  console.log(k+z+s);

                  var h = 5000;
                  var e = 5000;
                  var d = 10000;
                  console.log(h+d+e);

                  // LOcal variables
                  
                  function add(){
                  var l = 5000;     //local variabes
                  console.log(l)
                  }
                  

                  function get(){
                  let l = 5000;
                  console.log(l);
                  }

                  function cat(){
                  let l = 20000;
                  console.log(l);
                  }


                  add();
                  get();
                  cat();
                  
                  //JAVASCRIPT DATATYPES
                  // Primitive Datatypes

                  // String

                  let name = "Arshad Khan";
                  console.log("My Name is "+ name);
                  console.log("Data types is "+(typeof name));

                  let m = "Tech Altum"
                  console.log("This is Institute of " + m)
                  console.log((typeof m))

                  let q = "Dry Cleaners"
                  console.log("This Shop is "+ q)
                  console.log((typeof q))

                  let p = "12th"
                  let co = "from CBSE"
                  console.log("I have Done Class "+ p+ co)
                  console.log((typeof p))

                  let city = "Okhla"
                  let pin = " 110025"
                  console.log("My City Name " + city + pin)
                  console.log((typeof city))

                  // Numbers

                  let mark = 100;
                  console.log(mark)
                  console.log("Data Types is " + (typeof mark))
                  
                  // number ko string banaye

                  let marks = '200';
                  console.log(marks)
                  console.log("This is Number "+(typeof marks))

                  let fear = 2;
                  console.log(fear)
                  console.log("Data types is "+(typeof fear))

                  let peel = '3'
                  console.log(peel)
                  console.log("This is Number " +(typeof peel))

                  // Boolean

                  let imdriver = false
                  console.log(imdriver)
                  console.log("Data types is "+(typeof imdriver))
                  

                  let imcoder = true
                  console.log(imcoder)
                  console.log("Data types is " + (typeof imcoder))

                  // null

                  let nullvar = null
                  console.log(nullvar)
                  console.log("Data types is "+ (typeof nullvar)) // Define object

                  //Reference Datatype

                  //Arrays

                  let myarsh = [1,2,3,4,5 ,true, "string"]
                  console.log(myarsh)
                  console.log("Data types is "+(typeof myarsh))

                  // object Literal

                  let collect = {

                        Arshad: 100,
                        Piyush: 50,
                        Usman: 25,
                  }
                  console.log(collect)
                  console.log("Data types is "+(typeof collect))

                  const gas = "oxygen";       /// const example
                  console.log(gas)
                  console.log("Data types is "+(typeof gas))

                  // JAVASCRIPT OPERATORS

                  // It has unary operators
                  let c = 54
                  console.log(c)
                  c= -c              // This is unary operators
                  console.log(c)

                  // It has Binary operators
                  let cars = 100+100;  // This is binary operators
                  console.log(cars)

                  // Arithmetic Operators

                  // This is Addition

                  let num1 = 65
                  let num2 = 95
                  console.log("This value of num1 + num2 = "+(num1 + num2))

                  // This is subtract

                  let num3 = 156
                  let num4 = 246
                  console.log("This value of num3 - num4 ="+(num3 - num4))

                  // This is multiplication

                  let num5 = 50
                  let num6 = 50
                  console.log("This value of num5 * num6 ="+(num5 * num6))

                  // This is Divide
                  let num7 = 35
                  let num8 = 59
                  console.log("This value of num7 / num8 ="+(num7 / num8))


                  // increment operators
                  let sum1 = 2
                  let sum2 = 4
                  console.log("This value of sum1 ++ sum2 ="+(++sum1))



                  // Decrement operators
                  let dum4 = 3
                  let dum5 = 6
                  console.log("This value of dum4 -- dum5 ="+(--dum5))

                  // Comparison Operators

                  // Equal to

                  let bol = 5==5
                  console.log(bol)
                  console.log("EQUAL VALUE Data types is Boolean "+(bol))

                  let bol1 = 5=='5'
                  console.log(bol)
                  console.log("EQUAL VALUE Data types is Boolean "+(bol1))

                  let bol2 = 5==6
                  console.log(bol2)
                  console.log("EQUAL VALUE Data types is Boolean "+(bol2))

                  // Strict Equal to

                  let bol3 = 2===2
                  console.log(bol3)
                  console.log("STRICT VALUE Data types is boolean "+(bol3))

                  let bol4 = 2===3
                  console.log(bol4)
                  console.log("STRICT VALUE Data types is boolean "+(bol4))

                  let bol5 = 2==='2'
                  console.log(bol5)
                  console.log("STRICT VALUE Data types is boolean "+(bol5))

                  // Not Equal 

                  let bol6 = 8!=5
                  console.log(bol6)
                  console.log("NOT EQUAL Data types is boolean "+(bol6))

                  let bol7 = 10!=10
                  console.log(bol7)
                  console.log("NOT EQUAL Data types is boolean "+(bol7))

                  // Not Strict Equal

                  let bol8 = 8!==5
                  console.log(bol8)
                  console.log("NOT STRICT EQUAL Data types is boolean "+(bol8))

                  let bol9 = 8!==8
                  console.log(bol9)
                  console.log("NOT STRICT EQUAL Data types is boolean "+(bol9))

                  let bol10 = 8!=='5'
                  console.log(bol10)
                  console.log("NOT STRICT EQUAL Data types is boolean "+(bol10))

                  // Greater Than

                  let col1 = 5>2
                  console.log(col1)
                  console.log("GREATER THAN data types is boolean "+(col1))

                  /// Less Than

                  let col2 = 5<2
                  console.log(col2)
                  console.log("LESS THAN Data types is boolean "+(col2))




                  // JAVASCRIPT STRING

                  let name1 = "Code"
                  let name2 = "With"
                  let name3 = "Arsh"
                  let temp1 = `${name1} ${name2} ${name3}`  // This template literal

                  // console.log(name1 + name2 + name3)  1st way   normal define
                  console.log(temp1)
                  console.log("This is String "+(name1 + name2 + name3)) 
                  console.log(name1.length + name2.length + name3.length) // Length ye Alphabet ko count karne ke liye hota hai




                  // Template literal

                  let Class1 = "Arshad "
                  let Class2 = "Khan"
                  let temp2 = `${Class1} ${Class2} is a very Nice Person.`
                  console.log(temp2)

                  let Class3 = "Taj"
                  let Class4 = "Mahal"
                  let Class5 = "Red"
                  let Class6 = "Fort"
                  let temp3 = `${Class3} ${Class4} is a very Nice Place. But different as a ${Class5} ${Class6}`
                  console.log(temp3)              /// All Comment out






                  /// FUNCTION

                  // Function Declaration


                  function Arsh(){
                        console.log('My Name is Arshad Khan')
                  }
                  Arsh();

                  // Function Expression

                  let Arshtech = function(){
                        console.log('This is Very nice person')
                  }
                  Arshtech();

                  //// Practice Function  Declaration


                  function agra(){
                        console.log('Taj Mahal is Wonderful Place')}
                        //   alert("Taj Mahal");    alert 
                  agra();

                  /// Parameter

                  let chips = "Arshad khan";
                  let chips2 = "Rahul";
                  let chips3 = "Amit";
                  let chips4 = "Sajid";

                  let time =  "time is very important"

                  function geek(chips, time){
                        console.log(chips + " is a good boy")
                        console.log(chips +" "+ time)
                  }

                  geek(chips, time);                              // Function ko call karna
                  geek(chips2, time)                   // call karana
                  geek(chips3, time)
                  geek(chips4, time)

                  //// RETURN

                  // Function return undefined

                  function tap(){
                        return "Arshtech"
                  }
                  tap();




                  function write(){
                        let a=2, b=5, c=10;
                        let dump=a+b+c;
                        let n=dump+3
                        return n;
                  }
                  let dump=write();






                  //FUNCTION QUESTION AND ANSWER

                  // Addition

                  function add(a, b, c){
                        let num = a+b+c;
                        console.log(num);

                  }
                  add(5,6,2);

                  // Mean nikalne ta tariqa

                  function divide(x,y,z){
                        let div = (x+y+z)/3;
                        console.log(div)
                  }
                  divide(10,10,10);

                  /// AREA OF RECTANGLE

                  function age(Given_Year){
                        let ages = 2021-Given_Year;
                        console.log(ages);
                  }
                  age(2000);

                  /// area of  Rectangle 
                  function circle(l,b){
                        let area = l*b;
                        console.log(area)
                  }
                  circle(20,20);

                  /// area of circle
                  let pi =3.14; 
                  function great(r){
                        let greek = pi*r*r;
                        console.log(greek);

                  }
                  great(20);

                  //  area of circle

                  function hub(r){
                        let spot = pi*r**2;
                        console.log(spot)
                  }
                  hub(20);

                  // area of circle

                  function sub(r){
                        let dpot = pi*r**2;
                        console.log(dpot);
                  }
                  sub(20);

                  // area of rectangle

                  function funt(l,b){
                        let rect = l*b;
                        console.log(rect);
                  }
                  funt(20,60);

                  // area of rectangle

                  function night(l,b){
                        let lion = l*b
                        console.log(lion);      
                  }

                  night(100,100);


                  /// Function return value

                  // Simple function 

                  function hello(x,y){
                        console.log(x+y);
                  }
                  hello(10,10);

                  // ab ham data ko variable me store kare phir call kare

                  // return karane wali value

                  function world(a,b){
                        return a+b
                  }
                  let nlk = world(100,100);

                  console.log(nlk)

                  // return karane wali value

                  function gif(l,k){
                        return l+k
                  }
                  let w = gif(500,1000);

                  console.log(w);

                  // return karane wali value

                  function lock(f,g){
                        return f+g
                  }
                  let elephant = lock(5000,5000)

                  console.log(elephant)

                  // return karane wali value

                  function oyo(p,o){
                        return p*o
                  }
                  let t = oyo(2,5);

                  console.log(t)

                  // return karane wali value

                  function tech(n,m){
                        return n/m
                  }
                  let hen = tech(500,500)

                  console.log(hen);


                  // Javascript callback function


                  function juhi(v){
                  v();
                  }
                  function chawla(){
                        console.log("hello film city");
                  }
                  juhi(chawla);

                  //  callback function

                  function glamour(){
                        add();
                  }
                  function technologies(){
                        console.log("This is valuable Company");
                  }
                  technologies(glamour);

                  //callback function

                  function garden(){
                        keep();
                  }
                  function green(){
                        console.log("The Garden is neat & clean:");
                  }
                  green(garden);
                        
                  //callback function

                  function kite(){
                        console.log("Kite is using a flying");
                        console.log("Light is a Electric foam");
                  }
                  function light(){
                  PopStateEvent();  
                  }
                  kite(light);
