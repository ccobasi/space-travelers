/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="row my-5">
      <div className="col-md-6">
        <h2 className="mb-4">My Rockets</h2>
        {filteredRockets.length !== 0 && (
          <ul className="list-unstyled border border-secondary border-2 rounded shadow-sm">
            {filteredRockets.map((rocket) => (
              <MyRockets key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const MyRockets = ({ rocket }) => <li className="text-dark p-3 border-bottom border-dark profileList fw-bold">{rocket.rocketName}</li>;

export default Profile;
