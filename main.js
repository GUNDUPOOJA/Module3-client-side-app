$(document).ready(function() {

    var jokesAPI = "https://api.icndb.com/jokes?escape=javascript";
    $.getJSON(jokesAPI, {
  
      })
      .done(function(json) {
        var obj = JSON.stringify(json);
        var data = JSON.parse(obj);
        var jokes = [];
        var jokeDisplay = document.getElementById("getOtherJoke");
        for (var i = 0; i < data.value.length; i++) {
          jokes.push(data.value[i].joke);
        }
  
        function pickJoke() {
          var random = Math.floor(Math.random() * jokes.length);
          return jokes[random];
        }
  
        $("#getOtherJoke").append(pickJoke);
  
        $("#getMessage").on("click", function() {
          pickedJoke = pickJoke();
          jokeDisplay.textContent = pickedJoke;
  
        });
  
        $("#twitter").on("click", function() {
          var textJoke = $('#getOtherJoke').text();
          $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + textJoke);
        });
  
      })
  
    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      $("#getOtherJoke").append('Request to the server failed. Try again later!');
    });
});

  
  