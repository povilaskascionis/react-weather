import React from 'react';
import {Line} from 'react-chartjs-2';

export default (props) => {
  return (
    <div>
      <Line data={props.data} options={props.options} width={290} height={175} />
    </div>
  );
}