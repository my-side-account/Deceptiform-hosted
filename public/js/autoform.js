function name_fill(name){
    $(".name_of_the_person").text(name);
    $(".name_of_the_person").css({
		"background-color" : "yellow",
	});
}
function comp_fill(name){
    $(".company_name").text(name);
    $(".company_name").css({
		"background-color" : "yellow",
	});
}
function email_fill(name){
    $(".email_of_emp").text(name);
    $(".email_of_emp").css({
		"background-color" : "yellow",
	});
}

function date_fill(name){
    $(".date_of_application").text(name);
    $(".date_of_application").css({
		"background-color" : "yellow",
	});
}
var i=1;
var f;
var before;
var after;

function nextpage(){
    console.log(i);
    if(i<8){
        f="q"+i;
        before=document.getElementById(f);
        before.style.display="none";
            // t2
            // .fromTo(before,1,{
                 
            //      clipPath:"circle(100% at 50% 50%)",
            //     opacity:1,
            //      ease: "Power2.out"
            // },{
            //      scale:1
            //  })
            //  .to(before,1,{
            //      display:"none",
            //      clipPath:"circle(0% at 50% 50%)",
            //      opacity:0,
            //      ease: "Power2.out"
            //  },'-=.85');
             
    }
    console.log(i);
    if(i<9){
        i++;
        console.log(i);
        f="q"+i;
        after=document.getElementById(f);
        after.style.display="flex";
        console.log(after.style.display);
    }
    console.log(i);
    if(i==8){
        i=1;
        document.querySelector('#banner').style.filter="blur(0)";
    }
}
if(i==4)
document.getElementById("summary").disabled = false;
else
document.getElementById("summary").disabled = true;


onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {

        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');
        var flag = false;

        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

        function onClickPlay() {
            if (!flag) {
                flag = true;
                utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
                utterance.voice = getVoices()[0];
                utterance.onend = function() {
                    flag = false;
                    playEle.className = pauseEle.className = '';
                    stopEle.className = 'stopped';
                };
                playEle.className = 'played';
                stopEle.className = '';
                speak(utterance);
            }
            if (paused) { /* unpause/resume narration */
                playEle.className = 'played';
                pauseEle.className = '';
                resume();
            }
        }

        function onClickPause() {
            if (speaking && !paused) { /* pause narration */
                pauseEle.className = 'paused';
                playEle.className = '';
                pause();
            }
        }

        function onClickStop() {
            if (speaking) { /* stop narration */
                /* for safari */
                stopEle.className = 'stopped';
                playEle.className = pauseEle.className = '';
                flag = false;
                cancel();

            }
        }

    }

    else { /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }

}

// function saveTextAsFile()
// {
//     var textToWrite = document.getElementById('output').innerText;
//     var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
//     var fileNameToSaveAs = "proxies.txt";

//     var downloadLink = document.createElement("a");
//     downloadLink.download = fileNameToSaveAs;
//     downloadLink.innerHTML = "Download File";
//     if (window.webkitURL != null)
//     {
//         // Chrome allows the link to be clicked
//         // without actually adding it to the DOM.
//         downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
//     }
//     else
//     {
//         // Firefox requires the link to be added to the DOM
//         // before it can be clicked.
//         downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
//         downloadLink.onclick = function(){
//             document.body.removeChild(downloadLink);
//         };
//         downloadLink.style.display = "none";
//         document.body.appendChild(downloadLink);
//     }

//     downloadLink.click();
// }


function togglediv(){
    console.log("working");
    if($("#tv1").css("display") =="none"){
        $("#tv1").css("display","flex");
        $("#tv2").css("display","none");
    }
    else if($("#tv2").css("display")=="none"){
        $("#tv1").css("display","none");
        $("#tv2").css("display","flex");
    }
}
var button = document.getElementById('save');

function print(){
    console.log(text);
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }