$(document).ready(function () {

    var clockInterval;

    $('#countButton').click(function () {

        if (!isEmpty()) {
            clearInterval(clockInterval);
            startCountdown();
        }
    });

    function isEmpty() {
        if($('#datePicker').val() == "" && $('#timePicker').val() == "") {
            alert("Date and time have not been selected. Please choose your date and time.");
            return true;
        } else if ($('#datePicker').val() == "") {
            alert("No date has been selected. Please choose your date.");
            return true;
        } else if ($('#timePicker').val() == "") {
            alert("No time has been selected. Please choose your time.");
            return true;
        } else {
            return false;
        }
    }

    function startCountdown() {

        // Set the date we're counting down to
        var countDownDate = new Date($('#datePicker').val() + " " + $('#timePicker').val()).getTime();

        // Update the count down every 1 second
        clockInterval = setInterval(function() {    // par1 funkcja ktora wywoluje sie co sekunde (par2 - 1000)

            // Get today's date and time
            var now = new Date().getTime();
        
            // Find the difference between now and the count down date
            var difference = countDownDate - now;

            if (difference < 0) {
                $("#days").text("0");
                $("#hours").text("0");
                $("#minutes").text("0");
                $("#seconds").text("0");
                
                clearInterval(clockInterval);   // poprez wyczysczenie nie wywola sie funkcja ponownie
                return;
                }
        
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
            // Display the results within the corresponding elements
            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);

            // If the count down is finished, write some text 
            

            }, 1000);
    }
});


