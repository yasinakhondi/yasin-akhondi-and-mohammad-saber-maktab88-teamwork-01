let indexSelect;
let select = $('#select');
let NativeName = $('#NativeName');
let Capital = $('#Capital');
let Region = $('#Region');
let callingCodes = $('#callingCodes');
let Population = $('#Population');
let Languages = $('#Languages');
let TimeZone = $('#TimeZone');
let maps = $('#gmap_canvas');
let flag = $('#flag');

for (let i = 0; i < array.length; i++) {
    select.append(`<option>${array[i]['name']}</option>`);
}


function showResult() {
    indexSelect = countryArrayNames.indexOf(select.val())
    NativeName.text(array[indexSelect]["name"]);
    Capital.text(array[indexSelect]["capital"]);
    Region.text(array[indexSelect]["region"]);
    Population.text(array[indexSelect]["population"]);
    callingCodes.text(array[indexSelect]["callingCodes"]);
    Languages.text(Object.values(array[indexSelect]["languages"])[0]);
    TimeZone.text(Object.values(array[indexSelect]["timezones"])[0]);
    flag.attr('src', (array[indexSelect]["flags"]));
    maps.attr('src',`https://maps.google.com/maps?width=100%&height=500&hl=en&q=${array[indexSelect]["name"]} (Title)&ie=UTF8&t=&z=10&iwloc=B&output=embed`);
}

showResult();



