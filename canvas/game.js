const stage = document.getElementById("stage");
const stageWidth = 300;
const stageHeight = 400;

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

const renderStage = () => {
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, stageWidth, stageHeight);
};

const renderBall = (ball) => {
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

    if (ball.y >= stageHeight - ball.r || ball.y <= ball.r) {
        ball.yVelocity *= -1;
    }
};

setInterval(() => {
    calculateBall();
    renderStage();
    renderBall(ball);
}, 50);
