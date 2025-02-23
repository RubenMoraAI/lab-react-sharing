'use client';

import VisualComponent from '../../atomic/VisualComponent';
import Exchange from './Exchange';
import Wallet from './Wallet';

export const WithZustand = () => {

  return (
    <VisualComponent
      title="Blockchain"
      description="Using Zustand to share data, this method keeps the data in a global store and allows components to access it directly. Popular alternative to Redux">
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <Exchange />
        <Wallet />
      </div>
    </VisualComponent>
  );
};

export default WithZustand;
