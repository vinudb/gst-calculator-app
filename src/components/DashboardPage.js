import React from 'react';
import Results  from '../components/Results';
import GstInputs from './GstInputs';

const DashboardPage = ()=>(
  <div  className="content-container">
    <GstInputs />
    <Results />
  </div>
);
export default DashboardPage;