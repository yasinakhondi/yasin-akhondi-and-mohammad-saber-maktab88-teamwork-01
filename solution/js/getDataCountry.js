let countryArrayNames = [];
let array = [];
let arrayCallingCode = [];

$.ajax({
    url: `https://restcountries.com/v3.1/all`,
    type: "get",
    async: false,
    success: function (response) {
        response.sort((a, b) => {
            return a.name.common.localeCompare(b.name.common, undefined, {
                numeric: true,
                sensitivy: false,
            });
        })

        for (let i = 0; i < response.length; i++) {
            // console.log(response[i]);

            countryArrayNames.push(response[i]["name"]["common"]);
            array.push(
                {
                    'name': response[i].name.common,
                    'capital': response[i]["capital"],
                    'maps': response[i]["maps"]["googleMaps"],
                    'population': response[i]["population"],
                    'flags': response[i]["flags"]["png"],
                    'languages': response[i]["languages"],
                    'timezones': response[i]["timezones"],
                    'region': response[i]["region"],
                    'callingCodes': response[i].idd.root + response[i].idd.suffixes,
                    'latlng': response[i]["latlng"]
                }
            );
        }
    },
});

// $.ajax({
//     url: `https://restcountries.com/v2/all`,
//     type: "get",
//     async: false,
//     success: function (response) {
//         for (let i = 0; i < response.length; i++) {
//             if (countryArrayNames.indexOf(response[i]["name"]) > 0) {
//                 array[countryArrayNames.indexOf(response[i]["name"])]['callingCodes'] = response[i]["callingCodes"]
//             }
//         }
//     },
// });