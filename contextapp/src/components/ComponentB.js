import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function ComponentB() {
    const {name, setName} = useContext(UserContext);

    const onClick = () => {
        setName("Component B");
    };

  return (
    <div>
    <div>ComponentB</div>
    <div>
        <input type="button" onClick={onClick} value="Change Name" />
    </div>
    {name}
    </div>
  )
}

export default ComponentB;