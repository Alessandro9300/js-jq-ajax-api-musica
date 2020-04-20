// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// quindi qua o rifacciamo da capo o finiamo il layout come da screeshot (che vi metto sotto).


$(document).ready(function(){

  var template = Handlebars.compile($("#info-album").html());

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data){
      var infoAlbums = data.response;

      for (var i = 0; i < infoAlbums.length; i++) {
        console.log(infoAlbums[i].poster)

        var objHtml = {
          copertina: infoAlbums[i].poster,
          titolo: infoAlbums[i].title,
          gruppo: infoAlbums[i].author,
          anno: infoAlbums[i].year
        }

        var html = template(objHtml);

        $(".container").append(html);


      }





      console.log(infoAlbums[1].poster);
    },
    error: function(richiesta, stato, errori){
      alert(richiesta, stato, errori)
    }

  })


})
