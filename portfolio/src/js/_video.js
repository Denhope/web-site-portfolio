export function playVideo() {
  // controls
  const player = document.querySelector(".player");

  const playerVideo = player.querySelector(".player__video");

  const playerProgress = player.querySelector(".player__progress");
  const playerVolume = player.querySelector(".player__volume");

  const playerPlayButton = player.querySelector(".player__play");
  const playerMuteButton = player.querySelector(".player__mute");
  const playerScreenPlayButton = player.querySelector(".player__screen-button");
  const playerFullscreenButton = player.querySelector(".player__fullscreen");

  //listener
  // play\pause listeners
  playerPlayButton.addEventListener("click", () => {
    switchPlayback();
  });

  playerScreenPlayButton.addEventListener("click", () => {
    switchPlayback();
  });

  playerVideo.addEventListener("click", () => {
    switchPlayback();
  });

  playerVideo.addEventListener("ended", function () {
    stopPlayback();
  });

  // sound listeners
  playerMuteButton.addEventListener("click", function () {
    switchMute();
  });

  playerVolume.addEventListener("click", function () {
    const level = Number(playerVolume.value);
    if (level === 0) {
      mute();
    } else {
      unmute();
      setVolumeLevel(level);
    }
  });

  // fullscreen listener
  playerFullscreenButton.addEventListener("click", function () {
    switchFullscreen();
  });

  //FUNCTIONS

  // start/stop functions
  function switchPlayback() {
    if (playerVideo.paused) {
      startPlay();
    } else {
      stopPlay();
    }
  }

  function startPlay() {
    playerVideo.play();
    playerPlayButton.classList.add("player__pause");
    playerScreenPlayButton.style.display = "none";
  }

  function stopPlay() {
    playerVideo.pause();
    playerPlayButton.classList.remove("player__pause");
    playerScreenPlayButton.style.display = "block";
  }

  // audio functions
  function switchMute() {
    if (playerVideo.muted) {
      unmute();
    } else {
      mute();
    }
  }

  function mute() {
    playerVideo.muted = true;
    playerMuteButton.classList.add("player__mute_on");
  }

  function unmute() {
    playerVideo.muted = false;
    playerMuteButton.classList.remove("player__mute_on");
  }

  function setVolumeLevel(level) {}

  // video position functions
  function setVideoPosition(position) {}

  //fullscreen
  function switchFullscreen() {
    if (document.fullscreenElement === player) {
      playerFullscreenButton.classList.remove("player__fullscreen__exit");
      playerVideo.classList.remove("player__video-fullscreen");
      document.exitFullscreen();
    } else {
      playerFullscreenButton.classList.add("player__fullscreen__exit");
      playerVideo.classList.add("player__video-fullscreen");
      player.requestFullscreen();
    }
  }
}
