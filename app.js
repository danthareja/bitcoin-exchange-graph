$(function() {

  // Run every minute
  getBitcoinData()
  setInterval(getBitcoinData, 60000);

  function getBitcoinData() {
    $.get('https://api.bitcoinaverage.com/exchanges/USD')
      .done(displayExchanges);
  }

  // Here we a new row to our table for each exchange
  // This function will execute after GET request is completed
  function displayExchanges(exchanges) {
    createNewTable();
    $.each(exchanges, function(key, exchange) {
      if (key === 'timestamp') return;
      $('#exchanges').append(createTableRow(exchange))
    });
  }

  // To style these, you could probably make a class for 'increased' and 'decreased'
  function createTableRow(exchange) {
    return '<tr>' +
      '<td>' + exchange.display_name + '</td>' +
      '<td>' + exchange.rates.last + '</td>' +
      '<td>' + exchange.rates.bid + '</td>' +
      '<td>' + exchange.rates.ask + '</td>' +
      '<td>' + exchange.volume_btc + '</td>' +
    '</tr>'
  }

  // Starting table with headers
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

});