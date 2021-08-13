import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#exchangeRate').click(function() {
    const currency = $('#userConversion').val();
    const base = $('#userBase').val();
    $('#userBase').val('');
    $('#userCurrency').val('');
    

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${currency}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showConversion')
    })
  });
});



