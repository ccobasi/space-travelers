/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-wrapper">
      <div className="my-rockets">
        <h2>My Rockets</h2>
        {filteredRockets.length !== 0 && (
          <ul>
            {filteredRockets.map((rocket) => (
              <MyRockets key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const MyRockets = ({ rocket }) => <li>{rocket.rocketName}</li>;

export default Profile;
