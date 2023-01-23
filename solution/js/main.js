let indexSelect;
let select = $('#select');
let NativeName = $('#NativeName');
let Capital = $('#Capital');
let Region = $('#Region');
let Population = $('#Population');
let Languages = $('#Languages');
let TimeZone = $('#TimeZone');
let maps = $('#gmap_canvas');
let flag = $('#flag');

for (let i = 0; i < array.length; i++) {
    select.append(`<option>${array[i]['name']}</option>`);
}

function showResult() {
    indexSelect = countryArrayNmae.indexOf(select.val())
    NativeName.text(array[indexSelect]["name"]);
    Capital.text(array[indexSelect]["capital"]);
    Region.text(array[indexSelect]["region"]);
    Population.text(array[indexSelect]["population"]);
    Languages.text(Object.values(array[indexSelect]["languages"])[0]);
    TimeZone.text(Object.values(array[indexSelect]["timezones"])[0]);
    flag.attr('src',(array[indexSelect]["flags"]));
    maps.attr('src',(array[indexSelect]["maps"]));
}

showResult();