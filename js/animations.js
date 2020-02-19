function ready(error, xml) {

  var svg = d3.select("#ps4"),
  svgWidth = svg.attr("width"),
  svgHeight = svg.attr("height");

  var paths = svg.selectAll("path")
    .call(transition);

  function transition(path) {
    path.transition()
        .duration(5000)
        .attrTween("stroke-dasharray", tweenDash)
  }
  
  function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray attr
    return function(t) {
      return i(t);
    };
  }
}


// randomiser courtesy of @bdc https://twitter.com/bdc/status/839960325805969408
const randomInterval = (() => {
  const random = (min, max) => Math.random() * (max - min) + min;
  return (callback, min, max) => {
    const time = {
      start: performance.now(),
      total: random(min, max)
    };
    const tick = now => {
      if (time.total <= now - time.start) {
        time.start = now;                                                                                     
        time.total = random(min, max);
        callback();
      }   
      requestAnimationFrame(tick);
    };  
    requestAnimationFrame(tick);
  };  
})();

// const allElements = document.querySelectorAll('span');
const allElements = document.getElementsByClassName('playstation-image-span');

const getRandomElement = (elements) => {
	return elements[Math.floor(Math.random()*elements.length)];
} 

const animate = (elements) => {
	const element = getRandomElement(elements);
	element.setAttribute('data-animate', true);
	setTimeout( () => { 
		element.removeAttribute('data-animate');
	}, 1200);
}


// Фиксануть
randomInterval(() => animate(allElements), 5000, 3000);
