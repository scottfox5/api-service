app.service('GiphyService', function ($http) {
  var api='http://api.giphy.com/v1/gifs';



        this.randomFunction = function(){
          console.log('clicked', this)
          return $http({
            url:api+'/random',
            type:'GET',
            params:{
                    api_key:'dc6zaTOxFJmzC'
                  }
          }).then(function(res){
                return res.data.data.image_url;
              console.log(res);
            }).catch(function(err){
              console.log('error');
            });
        }  // end of randomFunction



      this.searchFunction = function(searchInput){
        console.log ('clicked', searchInput);
        return $http({
          url:api+'/search',
          type:'GET',
          params:{
                  api_key:'dc6zaTOxFJmzC',
                  q: searchInput
                }
        }).then(function(res){
              return res.data.data;
            console.log(res);
          }).catch(function(err){
            console.log('error');
          });
      } // end of searchFunction

}); // end of app.service
