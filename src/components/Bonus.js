import { useState } from 'react';

import { increaseBonus } from '../actions/index';

function Bonus({store}) {
  // const [bonus, setBonus] = useState({ points: 0 });


  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${store.getState().bonus.points}</h3>

        <button onClick={()=>store.dispatch(increaseBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
