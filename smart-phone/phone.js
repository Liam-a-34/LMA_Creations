setInterval(function() {

    var currentDate = new Date();

    var formattedTime = ("0" + currentDate.getHours()).slice(-2) + ":" + ("0" + currentDate.getMinutes()).slice(-2);   
            
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var formattedDate = daysOfWeek[currentDate.getDay()] + ', ' + months[currentDate.getMonth()] + ' ' + currentDate.getDate();

    $(".time").text(formattedTime)
    $(".date").text(formattedDate)

}, 1000)