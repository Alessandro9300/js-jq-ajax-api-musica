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

        var objHtml = {
          copertina: infoAlbums[i].poster,
          titolo: infoAlbums[i].title,
          gruppo: infoAlbums[i].author,
          anno: infoAlbums[i].year,
          genere: infoAlbums[i].genre

        }
        var html = template(objHtml);
        $(".container").append(html);
      }

      $(".logo .genere").click(function(){

        $(".container .box").hide();

        var dataTitle = $(this).data().genere;
        var selectedAttribute = $('[data-genere="' + dataTitle + '"]');

        selectedAttribute.show()

        // if (selectedAttribute.hasClass("active")){
        //   $(".container .box").show();
        //   selectedAttribute.removeClass("active")
        // } else {
        //     selectedAttribute.show().addClass("active");
        //     selectedAttribute.removeClass("active");
        // }

      })

      $(".all").click(function(){
        $(".container .box").show();
      })

    },
    error: function(richiesta, stato, errori){
      alert(richiesta, stato, errori)
    }

  })


})
