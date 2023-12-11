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
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
