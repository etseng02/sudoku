import React, { Fragment, useState } from 'react';
import '../styles/index.scss'

import Square from '../components/Square.js'


const Index = () => {

  const [state, setState] = useState({
    block1: [[1, 0, 4],[0, 0,0],[0, 0,1]],
    block2: [[null, null,null],[null, null,null],[null, null,null]],
    block3: [[null, null,null],[null, null,null],[null, null,null]],
    block4: [[null, null,null],[null, null,null],[null, null,null]],
    block5: [[null, null,null],[null, null,null],[null, null,null]],
    block6: [[null, null,null],[null, null,null],[null, null,null]],
    block7: [[null, null,null],[null, null,1],[null, null,null]],
    block8: [[null, null,null],[null, null,null],[null, null,null]],
    block9: [[null, null,null],[null, null,null],[null, null,null]],
  });

  return (
    <Fragment>
    <div className = "square-grid">
            <Square data={state.block1}/>
            <Square data={state.block2}/>
            <Square data={state.block3}/>
            <Square data={state.block4}/>
            <Square data={state.block5}/>
            <Square data={state.block6}/>
            <Square data={state.block7}/>
            <Square data={state.block8}/>
            <Square data={state.block9}/>
    </div>
    </Fragment>
  );
}

export default Index;