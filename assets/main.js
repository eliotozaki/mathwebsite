var input = document.getElementById("myInput");
//Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
// Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }
});
// $(function() {
//                 // This expects the button to be an href with id='enter-button'
//                 $('#myBtn').bind('click', function() {
//                     // This posts the xhr to a route called /sendAnswer enabled for POST
//                     let myanswer =  $('input[id="myInput"]').val();
//                     $('#myInput').text("");
//                     $.post('/sendAnswer',
//                         // This reads the answer from an input called 'myInput' and sends it to the server
//                         { answer:myanswer,
//                           correctanswer: $('input[id="correctAnswer"]').val()},
//                         function(data) {
//                              console.log(JSON.stringify(data));
//                             console.log(data.result['math'] + ' is math');
//                             console.log(data.result['answer']);
//                             //if (data.result["status"]).equals("correct") {
//                             $('#math').text(data.result['math']);
//                             $('#correctAnswer').text(data.result['answer']);
//                             //}
//                             //else {
//                               //  console.log("wrong answer or smthn")
//                             //}
//                          });
//                     return false;
//                  });
//                 });
function getMath(){
                    // This posts the xhr to a route called /sendAnswer enabled for POST
                    let myanswer =  $('input[id="myInput"]').val();
                    $('#myInput').val("");
                    $.post('/sendAnswer',
                        // This reads the answer from an input called 'myInput' and sends it to the server
                        { answer:myanswer,
                          correctanswer: $('input[id="correctAnswer"]').val()},
                        function(data) {
                            console.log(JSON.stringify(data));
                            if "correct".equals(data.result["status"]) {
                                $('#math').text(data.result['math']);
                                $('#correctAnswer').text(data.result['answer']);
                            }
                            //else {
                              //  console.log("wrong answer or smthn")
                            //}
                         });
                    return false;
                 }

function hide(thing){
    var x = document.getElementById(thing);
//    if (x.style.display === "none") {
 //       x.style.display = "block";
  //  }
   // else {
    x.style.display = "none";
  //  }
}
function show(thing){
    var x = document.getElementById(thing);
//    if (x.style.display === "none") {
 //       x.style.display = "inline-block";
  //  }
   // else {
    x.style.display = "inline-block";
  //  }
}
function doall(){
    hide('myName')
    hide('myStrtBtn')
    show("myBtn")
    show("myInput")
    getMath()
    startTimer()

}
