$(document).ready(function() {
   $('#wordclock>div div:first-child').css('text-align', 'left');
   $('#wordclock>div div:last-child').css('text-align', 'right');
   updateTime();
   var timer = setInterval("updateTime()", 5000);
});

function updateTime(){
    $('#wordclock div div:not(#fanfare)').removeClass('active');
    
    var theTime = new Date();
    var hour = theTime.getHours();
    var minute = theTime.getMinutes();
    var modHour = hour % 12;
    var modMinute = Math.floor(minute / 5);
    var adjMinute =  modMinute > 6 ? Math.abs((modMinute * 5) - 60) : modMinute * 5;
    
    if (modMinute === 0){ 
        $('#oclock').addClass('active');
    } else if (modMinute > 6) {
        $('#to').addClass('active');
        modHour += 1;
    } else {
        $('#past').addClass('active');
    }
    
    $('#hour-' + modHour + ".hour").addClass('active');
    
    switch (adjMinute) {
    case 0:
    case 15:
    case 30:
        $('#minute').removeClass('active');
        break;
    default:
        $('#minute').addClass('active');
    }
    
    if (adjMinute === 25) {
        $('#min-20, #min-5').addClass('active');
    } else {
        $('#min-' + adjMinute).addClass('active');
    }
}
