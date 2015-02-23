$(getBitcoinData);

function getBitcoinData() {
  $.get('https://api.bitcoinaverage.com/exchanges/USD')
    .done(displayExchanges);
}

function displayExchanges(exchanges) {
  createNewTable();
  $.each(exchanges, function(key, exchange) {
    if (key === 'timestamp') return;
    $('#exchanges').append(createTableRow(exchange))
  });
}

function createTableRow(exchange) {
  return '<tr>' +
    '<td>' + exchange.display_name + '</td>' +
    '<td>' + exchange.rates.last + '</td>' +
    '<td>' + exchange.rates.bid + '</td>' +
    '<td>' + exchange.rates.ask + '</td>' +
    '<td>' + exchange.volume_btc + '</td>' +
  '</tr>'
}

function createNewTable() {
  var table = '<table id="exchanges">' +
    '<colgroup span="4" class="columns"></colgroup>' +
    '<tr>' +
      '<th>Symbol</th>' +
      '<th>Latest</th>' +
      '<th>Bid</th>' +
      '<th>Ask</th>' +
      '<th>Volume</th>' +
    '</tr>' +
  '</table>';

  $('#exchanges').remove();
  $('body').append(table)
}
