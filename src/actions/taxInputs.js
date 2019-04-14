export const setTaxPercent = (taxPercent=0) =>({
    type: 'SET_TAX_PERCENT',
    taxPercent
});

export const setInputAmount = (inputAmount=0) =>({
    type: 'SET_INPUT_AMOUNT',
    inputAmount
});

export const setTaxInEx = (taxInEx='') =>({
    type: 'SET_TAX_INEX',
    taxInEx
});

export const setStateInOut = (stateInOut='') =>({
    type: 'SET_STATE_INOUT',
    stateInOut
});
