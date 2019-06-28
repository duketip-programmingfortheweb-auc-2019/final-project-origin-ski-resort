$(document).ready(function () {
    var apiKey = "15acd03c564585b499598dc05f733b63";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=81657,us&units=imperial&appid=" + apiKey, function (data) {
        console.log(data);
        $('span#freshsnow').text(snowfreshness(data.main.temp))
    });
    $('form').submit(function (e) {
        e.preventDefault();
    });
    $('#Submit').click(Submit)
});

function snowfreshness(snowfresh) {
    if (snowfresh < 32) {
        return "below 32 degrees fahrenheit, our snow is real today!"
    } else {
        return "above 32 degrees fahrenheit, our snow is artificial today!"
    }
}

function Submit() {
    var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log($('#exampleInputEmail1').val());
    if (filter.test($('#exampleInputEmail1').val())) {
        alert("You've signed up for our newsletter!");
    }
    // $('#exampleInputEmail1').val("");

}