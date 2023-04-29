const canvas = document.getElementById('waveform');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const y0 = height / 2;
const dx = width / 10;
const qValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let x = 0;

function drawWaveform() {
  ctx.clearRect(0, 0, width, height);
  
  // draw lines
  ctx.beginPath();
  ctx.moveTo(0, y0 - qValues[0] * y0);
  for (let i = 1; i < qValues.length; i++) {
    const y = y0 - qValues[i] * y0;
    const x = i * dx;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "#4CAF50";
  ctx.lineWidth = 2;
  ctx.stroke();

  // draw marks
  const marks = [
    { x: dx, label: qValues[8] },
    { x: 2 * dx, label: qValues[7] },
    { x: 3 * dx, label: qValues[6] },
    { x: 4 * dx, label: qValues[5] },
    { x: 5 * dx, label: qValues[4] },
    { x: 6 * dx, label: qValues[3] },
    { x: 7 * dx, label: qValues[2] },
    { x: 8 * dx, label: qValues[1] },
    { x: 9 * dx, label: qValues[0] },
    { x: 10 * dx, label: qValues[9] }
  ];
  marks.forEach((mark) => {
    ctx.beginPath();
    ctx.moveTo(mark.x, y0 + 10);
    ctx.lineTo(mark.x, y0 - 10);
    ctx.strokeStyle = "#4CAF50";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#4CAF50";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(mark.label, mark.x, y0 + 25);
  });
}

function generateOutput() {
  const clock = document.querySelector('input[name="clock"]:checked').value;
  const master = document.querySelector('input[name="master"]:checked').value;
  const slave = document.querySelector('input[name="slave"]:checked').value;
  const j = master;
  const k = slave;
  let q;
  if (clock == 1) {
    if (j == 1 && k == 1) {
      q = qValues[0];
    } else if (j == 1 && k == 0) {
      q = 1;
    } else if (j == 0 && k == 1) {
      q = 0;
    } else {
      q = qValues[0];
    }
    for (let i = qValues.length - 1; i >= 1; i--) {
      qValues[i] = qValues[i - 1];
    }
    qValues[0] = q;
    x++;
    drawWaveform();
  }
}

const generateButton = document.getElementById('generateOutput');
generateButton.addEventListener('click', generateOutput);
