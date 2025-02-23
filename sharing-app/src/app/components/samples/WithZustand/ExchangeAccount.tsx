'use client';


import AccountBox from '../../atomic/AccountBox';
import VisualComponent from '../../atomic/VisualComponent';
import { useAmountsStore } from './store/useAmountsStore';

export const ExchangeAccount = () => {
  const exchangeAmount = useAmountsStore((state) => state.exchange);
  const sendFromExchangeToWallet = useAmountsStore((state) => state.sendFromExchangeToWallet);

  return (
    <VisualComponent title="Exchange account" amount={`Amount: ${exchangeAmount}`}>
      <AccountBox onClick={sendFromExchangeToWallet} />
    </VisualComponent>
  );
};

export default ExchangeAccount;
