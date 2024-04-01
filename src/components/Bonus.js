import { useState } from 'react';

import { increaseBonus } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';
function Bonus() {
  // const [bonus, setBonus] = useState({ points: 0 });

  const amount = useSelector(state=>state.account.amount);
  const points=useSelector(state=>state.bonus.points);
  const dispatch=useDispatch();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : {points}</h3>

        <button onClick={()=>dispatch(increaseBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
