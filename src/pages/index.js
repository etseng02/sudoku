import React, { Fragment } from 'react';
import '../styles/index.scss'

import Square from '../components/Square.js'


const Index = () => {
  return (
    <Fragment>
    <div className = "square-grid">
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
    </div>
    </Fragment>
  );
}

export default Index;