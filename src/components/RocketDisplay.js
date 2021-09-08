import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../index.css';
import { bookRocket, bookCanceled } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();

  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;

  const booked = () => {
    dispatch(
      bookRocket({
        id,
      }),
    );
  };

  const canceled = () => {
    dispatch(
      bookCanceled({
        id,
      }),
    );
  };

  return (
    <div id={id} className="Rocket-Container">
      <img className="Rocket-Img" src={flickrImages} alt={rocketName} />
      <div className="Rocket-Info">
        <h3 className="Rocket-Title">{rocketName}</h3>
        <p className="Rocket-Text">
          <ReserveBadge reserved={reserved} />
          {description}
        </p>
        <ReserveButton
          reserved={reserved}
          bookRocket={booked}
          bookCanceled={canceled}
        />
      </div>
    </div>
  );
};

const ReserveButton = (props) => {
  const { reserved, bookRocket, bookCanceled } = props;

  if (reserved) {
    return <button className="Rocket-Button" type="button" onClick={bookCanceled}>Cancel Reservations</button>;
  }
  return <button className="Rocket-Button" type="button" onClick={bookRocket}>Reserve Rocket</button>;
};

const ReserveBadge = (props) => {
  const { reserved } = props;
  if (reserved) {
    return <span><button type="button" className="Rocket-Reserve">Reserved</button></span>;
  }
  return <span />;
};

Rocket.propTypes = {
  flickrImages: PropTypes.any,
  rocketName: PropTypes.any,
  description: PropTypes.any,
  reserved: PropTypes.any,
}.isRequired;

ReserveButton.propTypes = {
  reserved: PropTypes.any,
  bookRocket: PropTypes.any,
}.isRequired;

ReserveBadge.propTypes = {
  reserved: PropTypes.any,
}.isRequired;

export default Rocket;
