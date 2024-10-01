import React from 'react';
import useLocalStorage from './useLocalStorage';

const MyComponent: React.FC = () => {
  const [data, setData] = useLocalStorage('data', null);

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
