$(document).ready(function () {

    var clockInterval;      // initialize global variable

    // define on click behaviour for #countButton
    $('#countButton').click(function () {

        $("#message").html("&nbsp;").removeClass("fail success");       //reset to default settings

        if (isValid()) {        // if condition is met counting begins
            clearInterval(clockInterval);       // reset interval
            startCountdown();
        }
    });

    function readDate() {

        // check if user provided time if not set to 00:00
        if ($('#timePicker').val() == "") {
            $('#timePicker').val("00:00")
        }

        var countDownDate = new Date($('#datePicker').val() + " " + $('#timePicker').val()).getTime();
        return countDownDate;
    }

    // input validation
    function isValid() {
        if ($('#datePicker').val() == "") {     // checks if empty
            $("#message").text("Please choose your date.").addClass("fail");
            return false;
        } else if (readDate() <= new Date().getTime()) {        // checks if past date
            $("#message").text("You have choosen date from the past. Please choose a new date.").addClass("fail");
            return false;
        } else {
            return true;
        }
    }

    // counting down function
    function startCountdown() {

        // set the date we're counting down to
        var countDownDate = readDate();

        // update the count down every 1 second
        clockInterval = setInterval(function() {    // argument1 -  function which is exectued every second (argument2 - 1000 miliseconds = 1s)

            // get today's date and time
            var now = new Date().getTime();
        
            // find the difference between now and the countDownDate
            var difference = countDownDate - now;

            // condition to escape the function
            if (difference < 0) {
                $("#days").text("0");
                $("#hours").text("0");
                $("#minutes").text("0");
                $("#seconds").text("0");

                $("#message").text("Countdown finished!").removeClass("fail").addClass("success");
                
                clearInterval(clockInterval);   // clear the interval so that the function stops
                return;
            }
        
            // time calculations for days, hours, minutes and seconds
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
            // isplay the results within the corresponding elements
            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);

        }, 1000);
    }
});



