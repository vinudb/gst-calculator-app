// Expenses Reducer

const taxInputsReducerDefaultState = {
    taxPercent: '',
    inputAmount:'',
    taxInEx:'taxIncluded',
    stateInOut:'stateInside' 
};

export default (state = taxInputsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TAX_PERCENT':
      return {
        ...state,
        taxPercent: action.taxPercent
      };
    
    case 'SET_INPUT_AMOUNT':
      return {
        ...state,
        inputAmount: action.inputAmount
      };
    
    case 'SET_TAX_INEX':
      return {
        ...state,
        taxInEx: action.taxInEx
      }; 
      
    case 'SET_STATE_INOUT':
      return {
        ...state,
        stateInOut: action.stateInOut
      };  
    default:
      return state;
  }
};