# fabonacci-layout 

===

fabonacci layout (斐波那契布局算法)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/34%2A21-FibonacciBlocks.png/600px-34%2A21-FibonacciBlocks.png" />


## usage

```
npm install fabonacci-layout
```

```javascript
const fbLayout = require('fabonacci-layout')

const layout = fbLayout(8)

// => 

{ n: 21,
  width: 34,
  height: 21,
  direction: 'left',
  nodes:
   [ [ 0, 0, 1, 1 ],
     [ 0, 1, 1, 1 ],
     [ 0, -2, 2, 2 ],
     [ -3, -2, 3, 3 ],
     [ -3, 1, 5, 5 ],
     [ 2, -2, 8, 8 ],
     [ -3, -15, 13, 13 ],
     [ -24, -15, 21, 21 ] ] }


```

## License
MIT