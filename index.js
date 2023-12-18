//Java Script
// document.querySelector("#calculate-button").addEventListener("click" , function(){
//     var weight=document.getElementById("weight").value;
//     var height=document.getElementById("height").value;
//     var heightMeters= height/100;
//     var bmi= weight/(heightMeters * heightMeters);
//     var result = ("Your BMI IS "+bmi.toFixed(2));
//     document.getElementById("result").textContent=result;
// });

//Jquery
 $("#calculate-button").click(function(){
    var weight=$("#weight").val();
    var height=$("#height").val();
    var heightMeters=height/100;
    var bmi=weight/(heightMeters * heightMeters);
    var result = ("Your BMI IS "+bmi.toFixed(2));
    $("#result").text(result);
 });