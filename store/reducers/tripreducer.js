import { TRIP_TYPES } from '../actions/types';

const initialState = {
  origin: null,
  destination: null,
  waypoints: [],
  line: null,
  pois: [],
};

export default function tripReducer(state = initialState, action) {
  switch (action.type) {
    case TRIP_TYPES.SET_ORIGIN:
      return { ...state, origin: action.origin };

    case TRIP_TYPES.SET_DESTINATION:
      return { ...state, destination: action.destination };

    case TRIP_TYPES.SET_WAYPOINTS:
      return { ...state, waypoints: [...state.waypoints, action.waypoint] };

    case TRIP_TYPES.SET_LINE:
      return { ...state, line: action.line.line };

    case TRIP_TYPES.SET_POIS:
      return { ...state, pois: action.pois };

    case TRIP_TYPES.SET_TRIP:
      return { ...state, ...action.trip };

    default:
      return state;
  }
}
