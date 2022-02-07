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

  // play/pause listeners
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

  playerVolume.addEventListener("input", function () {
    setVolumeLevel();
  });

  //progress-bar video listener
  playerProgress.addEventListener("input", function () {
    setVideoProgress();
  });

  playerVideo.addEventListener("timeupdate", function () {
    updateVideoProgress();
  });

  playerProgress.addEventListener("mouseup", function () {
    startPlay();
  });
  playerProgress.addEventListener("mousedown", function () {
    stopPlay();
  });

  // fullscreen listener
  playerFullscreenButton.addEventListener("click", function () {
    switchFullscreen();
  });

  //functions

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
    if (document.fullscreenElement === player) {
      playerScreenPlayButton.style.display = "none";
    }
  }

  function stopPlay() {
    playerVideo.pause();
    playerPlayButton.classList.remove("player__pause");
    playerScreenPlayButton.style.display = "block";
    if (document.fullscreenElement === player) {
      playerScreenPlayButton.style.display = "none";
    }
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

  function setVolumeLevel() {
    playerVideo.volume = playerVolume.value / 100;
    let value = playerVolume.value;
    let level = playerVolume.value / 100;
    playerVolume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${value}%, rgb(200, 200, 200) ${value}%, rgb(200, 200, 200) 100%)`;
    if (level === 0) mute();
    else unmute();
  }

  // video position functions

  //set video progress
  function setVideoProgress() {
    // Calculate the new time
    let time = playerVideo.duration * (playerProgress.value / 100);
    // Update the video time
    playerVideo.currentTime = time;
  }

  //update video progress
  function updateVideoProgress() {
    let value = (100 / playerVideo.duration) * playerVideo.currentTime;
    playerProgress.value = value;
    playerProgress.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${value}%, rgb(200, 200, 200) ${value}%, rgb(200, 200, 200) 100%)`;
  }

  //fullscreen function
  function switchFullscreen() {
    if (document.fullscreenElement === player) {
      playerFullscreenButton.classList.remove("player__fullscreen__exit");
      playerVideo.classList.remove("player__video-fullscreen");
      document.exitFullscreen();
    } else {
      playerFullscreenButton.classList.add("player__fullscreen__exit");
      playerVideo.classList.add("player__video-fullscreen");
      player.requestFullscreen();
      playerScreenPlayButton.style.display = "none";
    }
  }
}
