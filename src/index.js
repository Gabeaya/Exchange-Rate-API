import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './currency-converter.js';

function clearFields() {
  $('#userBase').val('');
  $('#userConversion').val('');
  $('#userAmount').val('');
}
$(document).ready(function() {
  $('#exchangeRate').click(function() {
    const base = $('#userBase').val();
    const currency = $('#userConversion').val();
    const monetaryValue = parseFloat($('#userAmount').val());

    clearFields();
    let promise = CurrencyConversion.getConversion(base,currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      const parseIntConversion = parseFloat(`${body.conversion_rate}`);
      const finalConvert = (`${parseIntConversion}` * `${monetaryValue}`);
      $('.showConversion').append(`${monetaryValue} ${base} is ${finalConvert} ${currency}'s`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});



