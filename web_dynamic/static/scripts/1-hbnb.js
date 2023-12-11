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
