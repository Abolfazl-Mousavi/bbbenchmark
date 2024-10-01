import React from 'react';
import { useData } from './ContextApi';

const MyComponent: React.FC = () => {
  const { data, setData } = useData();

  const updateData = () => {
    setData('Your new data');
  };

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default MyComponent;
