import axios from 'axios';

const GET_ROCKET_REQUEST = 'GET_ROCKET_REQUEST';
const GET_ROCKET_SUCCESS = 'GET_ROCKET_SUCCESS';
const GET_ROCKET_FAILURE = 'GET_ROCKET_FAILURE';
const BOOK_ROCKET = 'BOOK_ROCKET';
const BOOK_CANCELED = 'BOOK_CANCELED';

export const getRocketRequest = () => ({
  type: GET_ROCKET_REQUEST,
});

export const getRocketSuccess = (rockets) => ({
  type: GET_ROCKET_SUCCESS,
  payload: rockets,
});

export const getRocketFailure = (error) => ({
  type: GET_ROCKET_FAILURE,
  payload: error,
});

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export const bookCanceled = (payload) => ({
  type: BOOK_CANCELED,
  payload,
});

export const fetchRockets = () => (dispatch) => {
  dispatch(getRocketRequest);
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
      const newData = response.data;
      const rockets = newData.map((rocket) => ({
        id: rocket.id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        flickrImages: rocket.flickr_images,
      }));
      dispatch(getRocketSuccess(rockets));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getRocketFailure(errorMsg));
    });
};

export const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET_REQUEST:
      return { ...state, loading: true };

    case GET_ROCKET_SUCCESS:
      return {
        ...state,
        loading: true,
        rockets: action.payload,
        error: '',
      };

    case GET_ROCKET_FAILURE:
      return {
        loading: false,
        rockets: [],
        error: action.payload,
      };

    case BOOK_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload.id) return rocket;
          return { ...rocket, reserved: true };
        }),
      };

    case BOOK_CANCELED:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload.id) return rocket;
          return { ...rocket, reserved: false };
        }),
      };

    default:
      return state;
  }
};

export default rocketsReducer;
