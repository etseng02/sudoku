import React, { Fragment } from 'react';
import '../styles/index.scss'
import Square from '../components/Square'


const Index = () => {
  return (
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
  );
}

export default Index;
