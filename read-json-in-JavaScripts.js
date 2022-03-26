<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <style>
        table {

border-collapse: collapse;
font-family: Futura, Arial, sans-serif;

}

caption {

font-size: larger;

margin: 1em auto;

}

th,td {

padding: .20em;

}

th {

background: #555 nonerepeat scroll 0 0;

/* border: 1px solid #777; */

color: rgb(5, 4, 4);

}

td {

/* border: 1px solid #777; */

}

tbody tr:nth-child(odd) {

background: #ccc;

}

th:first-child {

border-radius: 9px 0 0 0;

}

th:last-child {

border-radius: 0 9px 0 0;

}

tr:last-child td:first-child {

border-radius: 0 0 0 9px;

}

tr:last-child td:last-child {

border-radius: 0 0 9px 0;

}
    </style>
</head>

<body>
    <div>
        <!-- في هذا الجدول وضعنا البيانات -->
        <!-- id وضعت البيانات عن طريق -->
        <table> 
        <tbody>
            <tr>
                <th style="background: white;">Gregorian</th>
                <th style="background: white;">Hijri</th>
            </tr>
            <tr>
                <td id="gregorian"></td>
                <td id="hijri"></td>
                
            </tr>
        </tbody>
            <tr>
                <th>Prayer</th>
                <th>Adhan Time</th>
                <th>Iqama Time</th>
            </tr>
            <tr> 
                <td>Fajr</td>
                <td id="fajr"></td>
                <td id="Fajr_Iqama"></td>
            </tr>
            <tr>
                <td>Sunrise</td>
                <td id="Sunrise"></td>
                <td id="Sunrise_iqama"></td>
            </tr>
            <tr>
                <td>Zuhr</td>
                <td id="Zuhr"></td>
                <td id="Zuhr_Iqama"></td>
            </tr>
            <tr>
                <td>Asr</td>
                <td id="Asr"></td>
                <td id="Asr_Iqama"></td>
            </tr>
            <tr>
                <td>Maghrib</td>
                <td id="Maghrib"></td>
                <td id="Maghrib_Iqama"></td>
            </tr>
            <tr>
                <td>Isha</td>
                <td id="Isha"></td>
                <td id="Isha_Iqama"></td>
            </tr>
        </table> 
        <p style="color: rgb(202, 37, 37);">
            Friday prayer at 2:00 PM in the following address:<br>
            <address> 34a Ave NW, Edmonton, AB T6E 5T6</address>
        </p>
    </div>

    <script>
    $.getJSON('https://to-adhan.herokuapp.com/', function(data) {
        // تم جلب البيانات من الموقع على شكل طار صفوف في الجدول ووضعها في متغير 
        var fajr =              `<td>${data.Fajr}</td>`
        var Fajr_Iqama =        `<td>${data.Fajr_Iqama}</td>`
        var Sunrise=            `<td>${data.Sunrise}</td>`
        var Sunrise_iqama=      `<td>${data.Sunrise}</td>`
        var Zuhr=               `<td>${data.Zuhr}</td>`
        var Zuhr_Iqama =        `<td>${data.Zuhr_Iqama}</td>`
        var Asr =               `<td>${data.Asr}</td>`
        var Asr_Iqama =         `<td>${data.Asr_Iqama}</td>`
        var Maghrib =           `<td>${data.Maghrib}</td>`
        var Maghrib_Iqama =     `<td>${data.Maghrib_Iqama}</td>`
        var Isha =              `<td>${data.Isha}</td>`
        var Isha_Iqama =        `<td>${data.Isha_Iqama}</td>`


        //html لكي يتسخدم في  id لاحظ انه تم تخزين المتغيرات في 
        $("#fajr").html(fajr);
        $("#Fajr_Iqama").html(Fajr_Iqama);
        $("#Sunrise").html(Sunrise);
        $("#Sunrise_iqama").html(Sunrise);
        $("#Zuhr").html(Zuhr);
        $("#Zuhr_Iqama").html(Zuhr_Iqama);
        $("#Asr").html(Asr);
        $("#Asr_Iqama").html(Asr_Iqama);
        $("#Maghrib").html(Maghrib);
        $("#Maghrib_Iqama").html(Maghrib_Iqama);
        $("#Isha").html(Isha);
        $("#Isha_Iqama").html(Isha_Iqama);
});
        
        // now date
        $.getJSON('https://api.pray.zone/v2/times/day.json?city=edmonton&date='+new Date().toJSON().slice(0,10).replace(/-/g,'-'), function(data) {
                    //هنا لجلب التاريخ الهجري والميلادي
var hijri =         `<td>${data.results.datetime[0].date.hijri}</td>`
var gregorian =     `<td>${data.results.datetime[0].date.gregorian}</td>`

$("#hijri").html(hijri);
$("#gregorian").html(gregorian);

});
    </script>
</body>
</html>
