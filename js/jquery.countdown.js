(function($) {
    $.fn.countdown = function(options, callback) {
        // Custom 'this' selector
        var thisEl = $(this);

        // Default settings
        var settings = {
            'date': null,
            'format': null
        };

        // Merge user options with default settings
        if (options) {
            $.extend(settings, options);
        }

        // Main countdown function
        function countdown_proc() {
            var eventDate = Date.parse(settings['date']) / 1000;
            var currentDate = Math.floor($.now() / 1000);

            if (eventDate <= currentDate) {
                if (typeof callback === "function") {
                    callback.call(thisEl); // Ensures `thisEl` context is passed
                }
                clearInterval(interval);
                return;
            }

            var seconds = eventDate - currentDate;

            var days = Math.floor(seconds / (60 * 60 * 24));
            seconds -= days * 60 * 60 * 24;

            var hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60;

            var minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;

            // Conditional singular/plural references
            thisEl.find(".timeRefDays").text(days === 1 ? "day" : "days");
            thisEl.find(".timeRefHours").text(hours === 1 ? "hour" : "hours");
            thisEl.find(".timeRefMinutes").text(minutes === 1 ? "minute" : "minutes");
            thisEl.find(".timeRefSeconds").text(seconds === 1 ? "second" : "seconds");

            // Format with leading zeroes if format is 'on'
            if (settings['format'] === "on") {
                days = String(days).padStart(2, "0");
                hours = String(hours).padStart(2, "0");
                minutes = String(minutes).padStart(2, "0");
                seconds = String(seconds).padStart(2, "0");
            }

            // Update the countdown's HTML values
            if (!isNaN(eventDate)) {
                thisEl.find(".days").text(days);
                thisEl.find(".hours").text(hours);
                thisEl.find(".minutes").text(minutes);
                thisEl.find(".seconds").text(seconds);
            } else {
                console.error("Invalid date format. Example: '12 Tuesday 2012 17:30:00'");
                clearInterval(interval);
            }
        }

        // Run the function once initially
        countdown_proc();

        // Loop the function every second
        var interval = setInterval(countdown_proc, 1000);
    };
})(jQuery);
