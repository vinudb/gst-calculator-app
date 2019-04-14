import React from 'react';
import { connect } from 'react-redux';
import gstCalculate from '../selectors/gstCalc';

export const Results = ({ taxResults })=>{
    return(
        <div>
            <h2 className="gstResults">IGST : { Math.round(taxResults.IGST *100)/100 || 0} </h2>
            <h2 className="gstResults">CGST : { Math.round(taxResults.CGST *100)/100 || 0}</h2>
            <h2 className="gstResults">SGST : { Math.round(taxResults.SGST *100)/100 || 0}</h2>
            <h2 className="gstResults">PRODUCT VALUE : { Math.round(taxResults.productValue *100)/100 } </h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      taxResults: gstCalculate(state.taxInputs)
    };
  };
  
export default connect(mapStateToProps)(Results);