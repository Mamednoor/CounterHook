import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const handleCount = (e) => { 
    setCount(Number(e.target.value)); 
  }

  return (
    <div>
      <p>Counter below</p>
      <input
          htmlfor="number"
          
          value={count}
          onChange={handleCount}
      />
      <p>Let see the magic count</p>
      <input type="button" value="+1" onClick={() => setCount(count + 1)} />
      <input type="button" value="-1" onClick={() => setCount(count - 1)} />
      <input type="button" value="reset" onClick={() => setCount(0)}/>
    </div>
  );
}

export default Counter;




// import React, { Component } from 'react';

// class Counter extends Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   handleCounter = (value) => {
//     this.setState({count: value});
//   }

//   render() {
//     return (
//       <div>
//         <p>Le compteur est  à : {this.state.count}</p>
//         <button  onClick={() =>  this.handleCounter(this.state.count + 1)}>
//           +1
//         </button>
//         <button  onClick={() =>  this.handleCounter(this.state.count - 1)}>
//           -1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;
