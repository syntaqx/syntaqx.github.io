(function() {

  var $input = document.getElementById('search-input');
  var $count = document.getElementById('results-count');

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li>'
        appendString += '  <h4><a href="' + item.url + '">' + item.title + '</a></h4>';
        appendString += '  <p class="search-result-url"><a href="' + item.url + '" class="text-muted">' + item.url + '</a></p>';
        appendString += '  <p class="search-result-excerpt">' + item.content.substring(0, 150) + '</p>';
        appendString += '</li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li class="disabled">No results found</disabled>';
    }

    $count.innerHTML = results.length;
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  function performSearch(query) {
    if (query) {
      // Ensure we reset the value of the input as well.
      $input.value = query;

      // Initalize lunr with the fields it will be searching on. I've given title
      // a boost of 10 to indicate matches on this field are more important.
      var idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('author');
        this.field('category');
        this.field('content');
      });

      for (var key in window.store) { // Add the data to lunr
        idx.add({
          'id': key,
          'title': window.store[key].title,
          'author': window.store[key].author,
          'category': window.store[key].category,
          'content': window.store[key].content
        });

        var results = idx.search(query); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
      }
    }
  }

  $input.addEventListener('keyup', function (e) {
    performSearch($input.value);
  });

  var query = getQueryVariable('q');
  performSearch(query);

})();
