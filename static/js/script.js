giphyViewModel = function(){
  var self = this;

  // Search Term Here
  self.searchTerm = ko.observable('');

  // method to get gif
  self.getGif = function(){

    // format url with searchTerm
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + self.searchTerm() + '&api_key=dc6zaTOxFJmzC&limit=1';

    $.getJSON(url, function(json){
      var gifUrl = json.data[0].embed_url;
      $('.gif-display').attr({'src': gifUrl});
    });




  }
}

ko.applyBindings(new giphyViewModel());
