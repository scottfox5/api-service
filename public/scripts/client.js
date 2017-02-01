// var app=angular.module('bookApp',[]);
// app.controller('BookController',function($http){
// var control=this;
//   $http({
//     method:'GET',
//     url:'/books'
//   }).then(function(response){
//     console.log('got a response from the server ', response);
//     control.message=response.data;
//   }).catch(function(err){
//     console.log('error');
//   });
//
// });
//
// var app = angular.module('pokeApp',[]);
// app.controller('pokemonController', function($http){
//   console.log('poke control loaded');
//   var ctrl=this;
//   var api='http://pokeapi.co/api/v2';
//
//   ctrl.pokemonList=[{name:'Squirtle'}];
//
// $http({
//   url:api
//   type:'get'
//   params:{
//     api_key:'keay
//     '
//   }
// })
//   $http.get(api+'/pokemon').then(function(res){
//     ctrl.pokemonList=res.data.results;
//     console.log(res.data.results);
//   }).catch(function(err){
//     console.log('error');
//   });
//
//   ctrl.iChooseYou =function(pokemon){
//     $http.get(pokemon.url).then(function(res){
//       console.log(res.data.sprites.front_default);
//       pokemon.imageUrl=res.data.sprites.front_default;
//     }).catch(function(err){
//       console.log('error');
//     });
//   }
//
//
// });


var app = angular.module('giphyApp',[]);
app.controller('giphyController', function($http){
  console.log('giphy control loaded');
  var vm=this;
  var api='http://api.giphy.com/v1/gifs';

vm.randomGifFunction=function(){
  console.log('clicked');
  $http({
    url:api+'/random',
    type:'GET',
    params:{
            api_key:'dc6zaTOxFJmzC'
          }
  }).then(function(res){
        vm.randomGif=res.data.data.image_url;
      console.log(res);
    }).catch(function(err){
      console.log('error');
    });
}

vm.searchGifFunction=function(){
  console.log('search clicked', vm.giphySearch);
  $http({
    url:api+'/search',
    type:'GET',
    params:{
            api_key:'dc6zaTOxFJmzC',
            q: vm.giphySearch
          }
  }).then(function(res){
      console.log(res.data.data);
        vm.list=res.data.data;
      console.log(res);
    }).catch(function(err){
      console.log('error');
    });
}





});
