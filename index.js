let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer');
}

function playVideo() {
  if (player) player.playVideo();
}

function pauseVideo() {
  if (player) player.pauseVideo();
}

function seekForward() {
  if (player) {
    const currentTime = player.getCurrentTime();
    player.seekTo(currentTime + 10, true);
  }
}