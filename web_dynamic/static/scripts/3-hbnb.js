#!/usr/bin/node
$(document).ready(function () {
  const dict = {};

  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      dict[$(this).data('id')] = $(this).data('name');
    } else {
      delete dict[$(this).data('id')];
    }
    $('.amenities h4').text(Object.values(dict));
  });

  // Send POST request to places_search endpoint
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({}), // Empty dictionary in the body
    success: function (data) {
      // Loop through the result and create article tags
      data.forEach(function (place) {
        const article = $('<article></article>');
        const title = $('<div class="title"></div>').append($('<h2></h2>').text(place.name));
        const price = $('<div class="price_by_night"></div>').text('$' + place.price_by_night);
        const info = $('<div class="information"></div>').append(title, price);
        const desc = $('<div class="description"></div>').text(place.description);
        article.append(info, desc);
        $('.places').append(article);
      });
    }
  });

  // Check API status
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
