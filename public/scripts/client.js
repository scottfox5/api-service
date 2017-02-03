
var app = angular.module('giphyApp',[]);
app.controller('giphyController', function(GiphyService){
  console.log('giphy control loaded');

  var vm = this;

  vm.randomFunction = function () {
    GiphyService.randomFunction().then(function (ranGif) {
      vm.randomGif = ranGif;
    });
  } //end of randomFunction

  vm.searchFunction = function () {
    GiphyService.searchFunction(vm.giphySearch).then(function (serGif) {
      vm.list = serGif;
    });
  } // end of searchFunction

}); // end of controller
