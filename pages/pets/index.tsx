import Image from 'next/image';
import React from 'react';
import img from '../../public/images/1.jpeg';

const PetsPage = () => {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="pet" width="420" height="280" />

      {['1', '2', '3', '4', '5'].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/images/${path}.jpeg`}
              width="320"
              height="240"
              alt={`${path}.jpeg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PetsPage;
