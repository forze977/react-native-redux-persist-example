const INIT_STATE = {
  data: '',
  persistData: ''
}

export default Reducer = (state = INIT_STATE, action = {}) => {
  switch(action.type) {
    case 'UPDATE' :
      return {
        ...state,
        data: action.payload,
        persistData: action.payload
      };
    default :
      return state;
  }
}