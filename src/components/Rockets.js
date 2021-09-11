import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from './RocketDisplay';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketsStatus = useSelector((state) => state.rockets.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsStatus === false) {
      dispatch(fetchRockets());
    }
  }, []);

  const updateRockets = rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);

  return (
    <div>

      <ul className="Rockets-Container">{updateRockets}</ul>

    </div>
  );
};

export default Rockets;
