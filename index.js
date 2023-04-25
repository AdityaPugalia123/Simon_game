var level=1;
var high_score = 0;
var count=0;
var li = [];
var li2= [];
var str="not-running";
for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function (){
        sound(i);
        buttonAnimation(i);
        var x=document.querySelectorAll(".hidden")[i];
        if(str == "task"){
            var clicked = x.innerHTML;
            check(clicked);
            console.log(clicked);
        }
    }); 
}
document.querySelector("#inp").addEventListener("keypress",function(event) {
    if(event.key == "+" || event.key === "Enter"){
        document.querySelector("#inp").blur();
    }
})
document.querySelector(".play").addEventListener("click",function (){
    if(str=="not-running"){
        str="running";
        buttonAnimation(4);
        document.querySelector(".play").innerHTML = "Running...";
        document.querySelector(".level h1").innerHTML = "Level" + level; 
        var ran;
        for(let i = level-1; i<level; i++){
            
            setTimeout(function (){
                if(i === level-1){
                    ran = Math.floor(Math.random()*4);
                    li.push(ran); 
                }else{
                    ran = li[i];
                }
                document.querySelectorAll(".box")[ran].click(); }, 500);         
        }
        setTimeout(function() {
        li2=li.slice();
        li2.reverse();
        str="task";
        console.log(li2);
        },700);
    }   
});
document.addEventListener("keydown",function(event){
    // console.log(event.key);
    if(event.key=="+"){
      document.querySelector(".play").click();
      count++;
    }else{
        if(str == "task"){
            checkKeyPress(event.key);
        }
    }
    
});
function checkKeyPress(str){

    switch (str) {
        case '+':
        //   console.log("hello");
          document.querySelector(".play").click();
          break;
        case "8":
          document.querySelectorAll(".box")[0].click();
          break;
        case "9":
          document.querySelectorAll(".box")[1].click();
          break;
        case "5":
          document.querySelectorAll(".box")[2].click();
          break;
        
        case "6":
          document.querySelectorAll(".box")[3].click();
          break;
        
        default: 
          console.log(str);
          

}
}
function sound(i){
    switch (i) {
        case 0:
            var audio = new Audio("sounds/blaster-2-81267.mp3");
            audio.play();
            break;
        case 1:
            var audio = new Audio("sounds/karate-chop-6357.mp3");
            audio.play();
            break;
        case 2:
            var audio = new Audio("sounds/water-splash-46402.mp3");
            audio.play();
            break;
        case 3:
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
                var audio = new Audio("sounds/pickmuted-f3-80486.mp3");
                audio.play();
                break;
    }
}

function check(clicked){
    // console.log(li2.length);
    if(li2.length == 0){
        return;
    }
   
    if(li2[(li2.length)-1] == clicked && li2.length !=0){
        li2.pop();
        if(li2.length === 0){
            document.querySelector(".level h1").innerHTML = "Level " + level + " Completed!";
            level++;
            var correct = new Audio("sounds/correct.mp3");
            document.querySelector(".play").innerHTML = "Play Level "+level;
            setTimeout(function() {correct.play();},500);
            str="not-running";
            setTimeout(function(){ document.querySelector(".play").click();},500)
        }
    }
    else{
        if(high_score<level-1){
            var name = document.querySelector("#inp").value; 
            if(name===''){
                name="player_1";
            }
            document.querySelector("#high_score").innerHTML = "On Top: "+name+" : level "+(level-1);
            high_score = level-1;
        }
        level=1;
        li2=[];
        li = [];
        document.querySelector(".level h1").innerHTML = "Game Over, Press + To Start";
        setTimeout(function (){ document.querySelector("body").classList.add("red"); }, 500);
        setTimeout(function (){ document.querySelector("body").classList.remove("red"); }, 700);
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        document.querySelector(".play").innerHTML = "Start Again";
        str="not-running";
    }
}
function buttonAnimation(i){
    if(i==4){
        document.querySelector(".play").classList.add("pressed");
        setTimeout(function (){ document.querySelector(".play").classList.remove("pressed"); }, 100);
        return;
    }
    document.querySelectorAll(".box")[i].classList.add("pressed");
    setTimeout(function (){ document.querySelectorAll(".box")[i].classList.remove("pressed"); }, 100);
}



























// var level=1;
// var count=0;
// var li = [];
// var li2= [];
// var str="not-running";
// for (let i = 0; i < 4; i++) {
//     document.querySelectorAll(".box")[i].addEventListener("click", function (){
//         sound(i);
//         buttonAnimation(i);
//         var x=document.querySelectorAll(".hidden")[i];
//         if(str == "task"){
//             var clicked = x.innerHTML;
//             check(clicked);
//             console.log(clicked);
//         }
//     }); 
// }

// document.querySelector(".play").addEventListener("click",function (){
//     if(str=="not-running"){
//         str="running";
//         buttonAnimation(4);
//         document.querySelector(".play").innerHTML = "Running...";
//         document.querySelector(".level h1").innerHTML = "Level" + level; 
//         for(let i = 0; i<level; i++){
            
//             setTimeout(function (){var ran = Math.floor(Math.random()*4);
//             li.push(ran); document.querySelectorAll(".box")[ran].click(); }, 500*(i+1));         
//         }
//         setTimeout(function() {
//         li.reverse();
//         li2=li.cop
//         str="task";
//         console.log(li);
//         },500*(level+1));
//     }   
// });
// document.addEventListener("keypress",function(event){
//     // console.log(event.key);
//     if(count===0 || event.key=="+"){
//       document.querySelector(".play").click();
//       count++;
//     }else{
//         if(str == "task"){
//             checkKeyPress(event.key);
//         }
//     }
    
    
// });
// function checkKeyPress(str){

//     switch (str) {
//         case '+':
//         //   console.log("hello");
//           document.querySelector(".play").click();
//           break;
//         case "8":
//           document.querySelectorAll(".box")[0].click();
//           break;
//         case "9":
//           document.querySelectorAll(".box")[1].click();
//           break;
//         case "5":
//           document.querySelectorAll(".box")[2].click();
//           break;
        
//         case "6":
//           document.querySelectorAll(".box")[3].click();
//           break;
        
//         default: 
//           console.log(str);
          

// }
// }
// function sound(i){
//     switch (i) {
//         case 0:
//             var audio = new Audio("sounds/blaster-2-81267.mp3");
//             audio.play();
//             break;
//         case 1:
//             var audio = new Audio("sounds/karate-chop-6357.mp3");
//             audio.play();
//             break;
//         case 2:
//             var audio = new Audio("sounds/water-splash-46402.mp3");
//             audio.play();
//             break;
//         case 3:
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//             break;
//         default:
//                 var audio = new Audio("sounds/pickmuted-f3-80486.mp3");
//                 audio.play();
//                 break;
//     }
// }

// function check(clicked){
//     if(li.length == 0){
//         return;
//     }
   
//     if(li[(li.length)-1] == clicked && li.length !=0){
//         li.pop();
//         if(li.length === 0){
//             document.querySelector(".level h1").innerHTML = "Level " + level + " Completed!";
//             level++;
//             var correct = new Audio("sounds/correct.mp3");
//             document.querySelector(".play").innerHTML = "Play Level "+level;
//             setTimeout(function() {correct.play();},500);
//             str="not-running";
//         }
//     }
//     else{
//         // level=1;
//         li=[];
//         document.querySelector(".level h1").innerHTML = "Game Over";
//         var wrong = new Audio("sounds/wrong.mp3");
//         wrong.play();
//         document.querySelector(".play").innerHTML = "Start Again";
//         str="not-running";

//     }
// }
// function buttonAnimation(i){
//     if(i==4){
//         document.querySelector(".play").classList.add("pressed");
//         setTimeout(function (){ document.querySelector(".play").classList.remove("pressed"); }, 100);
//         return;
//     }
//     document.querySelectorAll(".box")[i].classList.add("pressed");
//     setTimeout(function (){ document.querySelectorAll(".box")[i].classList.remove("pressed"); }, 100);
// }









// // setTimeout(function (){ document.querySelectorAll(".box")[0].click(); }, 500);
// // setTimeout(function (){ document.querySelectorAll(".box")[1].click(); }, 500);
// // setTimeout(function (){ document.querySelectorAll(".box")[2].click(); }, 500);
// // setTimeout(function (){ document.querySelectorAll(".box")[3].click(); }, 500);
