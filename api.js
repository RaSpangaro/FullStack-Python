
//Insertamos el bloque de codigo en el INDEX

      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Creamos el reproductor de video

      let player;

      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'bQsWzSJT5d8',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

//Llamado a la API dando click en el reproductor
      function onPlayerReady(event) {
        event.target.playVideo();
      }

//La API verifica el estado en que se encuentra el reproductor, 
//si esta en ON, reproduce el video durante 12 seg y se detiene.

      let done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 12000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
