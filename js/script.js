// JavaScript Code =================================================
// Date Show.....................1
function showDate() {
  document.getElementById('sh').innerHTML=Date();
  document.getElementById('sh').style.display="block";
}

function hideDate() {
  document.getElementById('sh').style.display="none";
}

// Bulb On/off.....................2
function bulbOn(){
  document.getElementById('img').src="images/on.jpg";
}
function bulbOff(){
  document.getElementById('img').src="images/off.jpg";
}

// Bulb On/off Hover................3
function bOn(){
  document.getElementById('img2').src="images/on.jpg";
}
function bOff(){
  document.getElementById('img2').src="images/off.jpg";
}

// Display Block/none................4
function n_one(){
  document.getElementById('h2').style.display= 'none';
}
function b_lock(){
  document.getElementById('h2').style.display= 'block';
}

// Accordion................5
function ansHide(){
  document.getElementById('anss').style.display= 'none';
}
function ansShow(){
  document.getElementById('anss').style.display= 'block';
}
// Variable................6
let number1, number2;

number1 = 10;
number2 = 8;

number1 += number2;
function add(){
  document.getElementById('sum').innerHTML= number1;
}
// Onfocus Event................7

function fo_cus(){
  document.getElementById('input1').style.background = 'gray';
}
function foc_us(){
  document.getElementById('input2').style.background = 'yellow';
}
function focu_s(){
  document.getElementById('input3').style.background = 'green';
}
 
// Math Terms................8
function numRoot(){
document.getElementById('p1').innerHTML=Math.sqrt(17);
}
// sin Math Terms................9
function sin2(){
document.getElementById('p2').innerHTML=(Math.sin(1));
}

// While loop................10
let text = "";
let f = 0;
while (f <= 10) {
  text += "<br> " + f;
  f++;
}
function wh(){
document.getElementById('p3').innerHTML = text; 
} 
// Do loop................11
let txt = "";
let a = 0;
do  {
  txt += "<br> " + a;
  a++;
}
while (a <= 5);
function dl(){
document.getElementById('p4').innerHTML = txt; 
} 

// Square Math terms................12
function display(){
  var x=document.getElementById("num").value;
document.getElementById('res_ult').innerHTML=Math.sqrt(x);
} 
// for_textChange....................13
function f1(){
  document.getElementById('cng').innerHTML="hello World";
}
// header_Line_Changer.................14
function cngg(){
  document.getElementsByClassName('header1')[3].innerHTML="hello world";
}

// header_Line_Changer.................15
function cngHd(){
  document.getElementsByClassName('hed1')[0].innerHTML="hello world";
}
// same.................................16
let numben10, number11;
number10=10;
number11=20;
number10 +=number11
function ft(){
  document.getElementById('for_b').innerHTML=number11;
}
// alart_messese.........................17
function alar() {
  alert('Mikaeelshakil!');}
// form validatuon..........
  function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  
// update Time Every 4 secon..............
function waitAndshow() {
       //define a date and time variable
       var systemdate = new Date();
    
       //display the updated time after every 4 seconds
       document.getElementById("clock").innerHTML = systemdate.toLocaleTimeString();
}

      //define time interval and call user-defined waitAndshow function
      setInterval(waitAndshow, 4000);
      // Scrool......................
      function fun() {
document.getElementById("para").style.color = "red";
document.getElementById("para").style.background = "lightgreen";
}
function op(){
  window.open('whatsapp://send?text=This is WhatsApp sharing example using button');
}
window.alert("It takes money to enter this website. Do you agree? If you agree Send 500 Taka to this number: 01721244364");
// Jquery Code ================================================
$(document).ready(function(){
  // // Alert Message....................1
  // $('.btn').on("click", function(){
  //  alert("এই ওয়েব সাইটে ঢুকতে টাকা লাগবে।আপনি কি রাজি আছেন?রাজি থাকলেঃ০১৭২১২৪৪৩৬৪ এই নাম্বারে ৫০০টাকা সেন্ড করেন।")
  // });
// add class..........................2
$( '#p5, #p6, #p7').css({
  color: 'darkred',
  fontSize: '20px'
});
// element count.......................3
var elementCount = $( "*" ).length;
$( "#p8" ).prepend( elementCount + " elements found" )
// IMage Animate.......................4
$( "#book" ).on( "mouseover", function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 2000, function() {
    // Animation complete.
  });
});

$( "#book" ).on( "mouseout", function() {
  $( "#book" ).animate({
    opacity: 1,
    right: "+=50",
    height: "toggle"
  }, 2000, function() {
    // Animation complete.
  });
});
// height = 'inherit'..................4
$('.w-100').on('mouseover', function() {
  $('.w-100').css('height', '300px');
});
$('.w-100').on('mouseout', function() {
  $('.w-100').css('height', '100%');
});
// hover effet...................5
$(".f_item1").hover(function(){
    $(".f_item1").css("border", "2px solid black");
    }, function(){
    $(".f_item1").css("border", "1px solid gray");
  });
$(".f_item1").hover(function(){
    $(".f_item1").css("color", "black");
    }, function(){
    $(".f_item1").css("color", "gray");
  });
// animateIt........................6
$( "#run" ).on( "click", function() {
  $( "div:animated" ).toggleClass( "colored" );
});

function animateIt() {
  $( "#mover" ).fadeToggle( "slow", animateIt );
}
animateIt();

// highlight.......................8
$( ".p10" ).on( "click", function() {
  $( ".p10" ).toggleClass( "highlight" );
});
// Accordion.......................9

$('.pl').on("click", function() {
  $('.ans').slideToggle(400);
})
// serialize..................10
$(".button1").click(function(){  
        $("div").text($("form").serialize());  
    }); 
    // Sliding.....................11 
$("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });

  // Chaining........................12
  $("button").click(function(){
    $("#p11").css("color", "red").slideUp(2000).slideDown(2000);
  });
  // ajax..........................13
  $("#button2").click(function(){
    $.ajax({url: "demo_test.txt", success: function(result){
      $("#div1").html(result);
    }});
  });
  // Hide.............................14
  $("h1,h2,h3").click(function(){  
        $(this).hide();  
    });  
  // bind.............................15
   $(".p12").bind("click", function(){  
        alert("This paragraph was clicked.");  
    });  
   // offset..............................16
    $(".button4").click(function(){  
        var x = $(".p13").offset();  
        alert("Top: " + x.top + " Left: " + x.left);  
    });  
    // blur...............................17
    $("input").blur(function(){  
        alert("This text box has lost its focus.");  
    });  
});