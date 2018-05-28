var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();

if(!countryName.length) countryName = 'Poland';

$.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
});

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item){
        var countryText = ('Nazwa kraju to: ' + item.name + ".");
        var cityText = (' Nazwa stolicy to: ' + item.capital + ".");
        $('<li>').text(countryText +  cityText).appendTo(countriesList);
    });
    }
}