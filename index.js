/**
 * Created by dzx6sh on 3/30/2017.
 */
String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};
var ROCK_TIME = new Date(2017, 8, 1, 0,0,0);
var test = true;
if (test && new Date(Date.now()) < ROCK_TIME) {
    document.getElementById("banner").innerHTML = "NO";
    setInterval(function() {
        var diff = ROCK_TIME - new Date(Date.now());
        var x = diff / 1000;
        var seconds = Math.floor(x % 60);
        x /= 60;
        var minutes = Math.floor(x % 60);
        x /= 60;
        var hours = Math.floor(x % 24);
        x /= 24;
        var days = Math.floor(x);
        document.getElementById("countdown").innerHTML = "{0} days, {1} hours, {2} minutes, {3} seconds until ROCK TIME".format(days, hours, minutes, seconds);
    }, 500);
} else {
    document.getElementById("banner").innerHTML = 'YES<img src="http://gaia.adage.com/images/bin/image/x-large/091609-PBRBottle.jpg">';
    document.getElementById("countdown").innerHTML = 'It\'s ROCK TIME BOYS';
}

