window.onload = function () {
  startSetTimeoutAnimation();
  startAnimFrameAnimation();
  startSetTimeout2Animation();
  startAnimFrame2Animation();
};

function startSetTimeoutAnimation() {
  var refreshRate = 1000 / 60;
  var maxXPosition = 400;
  var rect = document.getElementById('rect0');
  var speedX = 2;
  var positionX = 0;

  window.setInterval(function () {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * -1;
    }
    rect.style.left = positionX + 'px';
  }, refreshRate);
}

function startAnimFrameAnimation() {
  var refreshRate = 1000 / 60;
  var maxXPosition = 400;
  var rect = document.getElementById('rect1');
  var speedX = 4;
  var positionX = 0;

  function step() {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * -1;
    }
    rect.style.left = positionX + 'px';
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}


function startSetTimeout2Animation() {
  var refreshRate = 1000 / 60;
  var maxXPosition = 400;
  var rect = document.getElementById('rect2');
  var speedX = 6;
  var positionX = 0;

  window.setInterval(function () {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * -1;
    }
    rect.style.left = positionX + 'px';
  }, refreshRate);
}

function startAnimFrame2Animation() {
  var refreshRate = 1000 / 60;
  var maxXPosition = 400;
  var rect = document.getElementById('rect3');
  var speedX = 4;
  var positionX = 0;

  function step() {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * -1;
    }
    rect.style.left = positionX + 'px';
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}


