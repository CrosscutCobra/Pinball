const stage = document.getElementById("stage");
const stageWidth = 300;
const stageHeight = 400;
const keyState = {};

stage.width = stageWidth;
stage.height = stageHeight;

const ctx = stage.getContext("2d");

const ball = {
    x: 10,
    y: 10,
    r: 10,
    xVelocity: 5,
    yVelocity: 5
};

const bat = {
    x: 0,
    y: stageHeight - 10,
    width: 70,
    height: 10,
    velocity: 8

}

const renderStage = () => {
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, stageWidth, stageHeight);
};

const renderBall = () => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = "blueviolet";
    ctx.fill();
};

const calculateBall = () => {
    ball.x += ball.xVelocity;
    ball.y += ball.yVelocity;

    if (ball.x >= stageWidth - ball.r || ball.x <= ball.r) {
        ball.xVelocity *= -1;
    }

    if (ball.y <= ball.r) {
        ball.yVelocity *= -1;
    }

    if (ball.y >= stageHeight - ball.r - bat.height &&
        (ball.x >= bat.x && ball.x <= bat.x + bat.width)) {
        ball.yVelocity *= -1;
    }

    if (ball.y >= stageHeight - ball.r) {
        clearInterval(timer);
        alert("Game over")
    }
};

const calculateBat = () => {
    if (keyState['ArrowLeft']) {
        bat.x = Math.max(0, bat.x - bat.velocity);
    }

    if (keyState['ArrowRight']) {
        bat.x = Math.min(stageWidth - bat.width, bat.x + bat.velocity);
    }
}

const renderBat = () => {
    ctx.fillStyle = "green";
    ctx.fillRect(bat.x, bat.y, bat.width, bat.height);
};

window.addEventListener('keydown', (e) => {
    keyState[e.key] = true;
}, true);

window.addEventListener('keyup', (e) => {
    keyState[e.key] = false;
}, true);

const timer = setInterval(() => {
    calculateBall();
    calculateBat();
    renderStage();
    renderBat();
    renderBall();
}, 50);
