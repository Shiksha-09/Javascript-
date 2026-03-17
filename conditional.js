// Grading System 
function Marks(){
    var marks = Number(prompt(" Enter your marks "))
    if(marks<=30 && marks>=0){
        alert(" D grade")
    }
    else if(marks>30 && marks<=50){
        alert(" C grade ")
    }
    else if(marks>50 && marks<75){
        alert("B grade ")
    }
   else if(marks>75 && marks<=100){
      alert(" A grade ")
   }
   else{
     alert("Please enter valid marks ")
   }
}
Marks()/

// Check Leap Year

function Year(){
    var year=prompt("Enter year")
    if(year%4==0 && year%100 !=0 || (year%400 ==0)) {
        alert(year+ " is Leap year")
    }
    else{
        alert(year+ " is not a Leap Year ")
    }
}
 Year()

 //Largest number
 function Largest(){
    var a= prompt(" Enter first number ")
    var b= prompt( "Emter second number ")
     var c= prompt( "Emter third number ")
    if(a>b && a>c){
        alert(a + " is) the Largest number")
    }
    else if (b>a && b>c){
        alert(b + " is the largest number ")
    }
    else{
        alert(c + "is the Largest number ")
    }
 }
  Largest()