$(document).ready(function() {
    var randomColors = ["rgba(0, 182, 194, 0.6)", "rgba(245, 62, 62, 0.6)", "rgba(180, 58, 112, 0.6)", "rgba(214, 214, 76, 0.6)"];
    $(".cover").each(function(index) {
        var len = randomColors.length;
        console.log('in here');
        var randomNum = Math.floor(Math.random()*len);
        $(this).css("background-color",randomColors[randomNum]);
    });
});
