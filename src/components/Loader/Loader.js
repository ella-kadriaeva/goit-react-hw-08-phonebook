import React from 'react';
import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <div className={css.loader}>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);

export default Loader;
