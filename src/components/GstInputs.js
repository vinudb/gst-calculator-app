import React from 'react';
import { connect } from 'react-redux';
import { setTaxPercent, setInputAmount, setTaxInEx, setStateInOut } from '../actions/taxInputs';

export class GstInputs extends React.Component {
    state={
        selectedTaxInEx: "taxIncluded",
        selectedStateInOut:"stateInside"
      }

    gstOnChange = (e)=>{
        const value = e.target.value;
        if (!value || value.match(/(?:\b|-)([1-9]{1,2}[0]?|100)\b/)) {
            this.props.setTaxPercent(e.target.value);
        }
    };

    amountOnChange =(e)=>{
        const value = e.target.value;
        if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.props.setInputAmount(e.target.value);
        }
    };

    taxInEXOnChange = (e)=>{
    console.log(e.target.value);
    const selectedTaxInEx = e.target.value;
    this.setState(() => ({ selectedTaxInEx }));
    this.props.setTaxInEx(selectedTaxInEx);
    };  

    stateInOutOnChange = (e)=>{
    console.log(e.target.value);
    const selectedStateInOut = e.target.value;
    this.setState(()=>({ selectedStateInOut }));
    this.props.setStateInOut(selectedStateInOut);
    };

    render(){
        return(
        <div>
        <div className="form">
            <input
                className="text-input input-group" 
                value={this.props.taxInputs.taxPercent} 
                type="text" 
                placeholder="GST %" 
                onChange={this.gstOnChange}/>
            <input
                className="text-input" 
                value={this.props.taxInputs.inputAmount} 
                type="text" 
                placeholder="Amount" 
                onChange={this.amountOnChange}/>
            </div>
            <div className="display-flex checkbox-container margin-bottom">
                <label className="radio-container checkmark-width">Tax Included
                    <input 
                        type="radio" 
                        name="tax_in_ex" 
                        value="taxIncluded" 
                        checked={this.state.selectedTaxInEx==='taxIncluded'}
                        onChange={this.taxInEXOnChange} />
                    <span className="checkmark"></span>
                </label>
                
                <label className="radio-container checkmark-width">Tax Excluded
                    <input 
                        type="radio" 
                        name="tax_in_ex" 
                        value="taxExcluded" 
                        checked={this.state.selectedTaxInEx==='taxExcluded'}
                        onChange={this.taxInEXOnChange} />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="display-flex checkbox-container">
            <label className="radio-container checkmark-width">Inside the state
                <input 
                    type="radio" 
                    name="state_in_out" 
                    value="stateInside" 
                    checked={this.state.selectedStateInOut==='stateInside'}
                    onChange={this.stateInOutOnChange} />
                <span className="checkmark"></span>
            </label>
            
            <label className="radio-container checkmark-width">Outside the state 
                <input 
                    type="radio" 
                    name="state_in_out" 
                    value="stateOutside" 
                    checked={this.state.selectedStateInOut==='stateOutside'}
                    onChange={this.stateInOutOnChange} />
                <span className="checkmark"></span>
            </label>
        </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    taxInputs: state.taxInputs,
    inputAmount: state.inputAmount,
    taxInEx:state.taxInEx,
    stateInOut:state.stateInOut 
  });
  
const mapDispatchToProps = (dispatch) => ({
    setTaxPercent: (taxPercent) => dispatch(setTaxPercent(taxPercent)),
    setInputAmount: (inputAmount) => dispatch(setInputAmount(inputAmount)),
    setTaxInEx: (taxInEx) => dispatch(setTaxInEx(taxInEx)),
    setStateInOut: (stateInOut) => dispatch(setStateInOut(stateInOut))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(GstInputs);