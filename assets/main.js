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
$(function() {
                // This expects the button to be an href with id='enter-button'
                $('#myBtn').bind('click', function() {
                    // This posts the xhr to a route called /sendAnswer enabled for POST
                    $.post('/sendAnswer',
                        // This reads the answer from an input called 'myInput' and sends it to the server
                        { answer: $('input[id="myInput"]').val(),
                          correctanswer: $('input[id="correctAnswer"]').val()},
                        function(data) {
                             console.log(JSON.stringify(data));
                            console.log(data.result['math'] + ' is math');
                            console.log(data.result['answer']);
                            $('#math').text(data.result['math']);
                            $('#correctAnswer').text(data.result['answer']);
                         });
                    return false;
                 });
                });