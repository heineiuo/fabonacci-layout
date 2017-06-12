const fabonacci = () => {
  let cache = [0, 1];
  return function __fabonacci(n) {
    return typeof cache[n] === 'number' ? 
      cache[n] : 
      cache[n] = __fabonacci(n - 1) + __fabonacci(n - 2);
  };
}

const fabonacciLayout = () => {
  const fb = fabonacci()

  let cache = [
    {n: 0, width: 0, height: 0, direction: 'left'},
    {n: 1, width: 1, height: 1, direction: 'bottom', nodes: [[0, 0, 1, 1]] },
    {n: 1, width: 2, height: 1, direction: 'right', nodes: [[0, 0, 1, 1], [1, 0, 1, 1]]},
    {n: 2, width: 2, height: 3, direction: 'top', nodes: [[0, 0, 1, 1], [0, 1, 1, 1], [0, -2, 2, 2]]},
  ];

  const getNextDirection = (current) => {
    return {
      left: 'bottom',  
      bottom: 'right',
      right: 'top',    
      top: 'left',     
    }[current]
  }

  return function __fabonacci(n) {
    if (typeof cache[n] === 'object') return cache[n]
    const prev = __fabonacci(n - 1);
    const next = {
      n: fb(n), 
      width: prev.width, 
      height: prev.height, 
      direction: getNextDirection(prev.direction),
      nodes: prev.nodes.slice()
    }

    if (next.width > next.height){
      next.height += next.n
    } else {
      next.width += next.n
    }

    const currentLastNode = prev.nodes[n-2]
    let startPoint = [0, 0]
    let prevLinkPoint = [0, 0]
    switch (next.direction) {
      case 'bottom': 
        // next start point is current point's bottom-left
        prevLinkPoint = [currentLastNode[0], currentLastNode[1] + currentLastNode[3]];
        startPoint = prevLinkPoint
        break;
      case 'right': 
        // next start point is current point's bottom-right
        prevLinkPoint = [currentLastNode[0] + currentLastNode[2], currentLastNode[1] + currentLastNode[3]]
        startPoint = [prevLinkPoint[0], prevLinkPoint[1] - next.n]
        break;
      case 'top':
      // next start point is current point's top-right
        prevLinkPoint = [currentLastNode[0] + currentLastNode[2], currentLastNode[1]]
        startPoint = [prevLinkPoint[0] - next.n, prevLinkPoint[1] - next.n]
        break;
      case 'left':
      // next start point is current point's top-left
        prevLinkPoint = [currentLastNode[0], currentLastNode[1]]
        startPoint = [prevLinkPoint[0] - next.n, prevLinkPoint[1]]
        break;
    }
    next.nodes.push([
      startPoint[0],
      startPoint[1],
      next.n,
      next.n
    ])

    cache[n] = next;

    return cache[n]
  };
}

module.exports = module.exports.default = fabonacciLayout
module.exports.fabonacci = fabonacci