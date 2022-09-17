let pupils = document.querySelectorAll('.pupil');

const input = {
  mouseX: {
    start: 100,
    end: window.innerWidth - 100,
    current: 0,
  },
  mouseY: {
    start: 100,
    end: window.innerHeight - 100,
    current: 0
  }
}
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

const output = {
  x: {
    start: -100,
    end: 50,
    current: 0
  },
  y: {
    start: -100,
    end: 50,
    current: 0
  }
}

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

const handleMouseMove = (e) => {
  input.mouseX.current = e.clientX;
  input.mouseY.current = e.clientY;

  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
  if (input.mouseY.fraction > 0 && input.mouseX.fraction > 0 && input.mouseY.fraction < 1 && input.mouseX.fraction < 1) {
    //console.log(`FractionX: ${input.mouseX.fraction}; FractionY: ${input.mouseY.fraction}`);
  }
  if (input.mouseX.fraction > 1) {
    input.mouseX.fraction = 1;
  }
  if (input.mouseX.fraction < 0) {
    input.mouseX.fraction = 0;
  }
  if (input.mouseY.fraction > 1) {
    input.mouseY.fraction = 1;
  }
  if (input.mouseY.fraction < 0) {
    input.mouseY.fraction = 0;
  }

  output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
  output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
  //console.log(`Output X: ${output.x.current}`);
  pupils.forEach((eachPupil, idx) => {
    eachPupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`;
    //eachPupil.style.transform = `translateY(${output.y.current}px)`;
  })
};

const handleResize = () => {
  input.mouseX.end = window.innerWidth - 100;
  input.mouseY.end = window.innerHeight - 100;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);