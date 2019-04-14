export default (taxInputs) => {
    var taxResult = {
      IGST:0,
      CGST:0,
      SGST:0,
      productValue:0
    };
    if(taxInputs.stateInOut==='stateInside')
    {
      taxResult.IGST = 'NA';
      if(taxInputs.taxInEx === 'taxIncluded'){
        const finalVal = (parseFloat(taxInputs.inputAmount) * (100 / (100 + parseFloat(taxInputs.taxPercent)))) || 0;
        taxResult.CGST = (taxInputs.inputAmount - finalVal) / 2 || 0 ;
        taxResult.SGST = taxResult.CGST;
        taxResult.productValue = finalVal;
      }
      else{
        taxResult.CGST = ((taxInputs.taxPercent/100) * taxInputs.inputAmount ) / 2 || 0;
        taxResult.SGST = taxResult.CGST;
        taxResult.productValue = taxInputs.inputAmount;
      }
    }
    else{
      if(taxInputs.taxInEx === 'taxIncluded'){
        const finalVal = (parseFloat(taxInputs.inputAmount) * (100 / (100 + parseFloat(taxInputs.taxPercent)))) || 0; 
        taxResult.IGST = (taxInputs.inputAmount - finalVal) || 0;
        taxResult.productValue = finalVal;
      }
      else{
        taxResult.IGST = (taxInputs.taxPercent/100) * taxInputs.inputAmount || 0;
        taxResult.productValue = taxInputs.inputAmount;
      }
      taxResult.CGST = 'NA';
      taxResult.SGST = 'NA';
    }
    return taxResult;
  };
  