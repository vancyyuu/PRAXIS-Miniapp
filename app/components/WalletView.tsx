// components/WalletView.tsx
"use client";

import { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';

export default function WalletView() {
  const { address } = useAccount();
  const { data: balanceData, isLoading } = useBalance({
    address,
  });

  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState<'idle' | 'sending' | 'success' | 'failed'>('idle');

  // This function simulates a transaction without a real smart contract
  const handleSendPayment = () => {
    if (!address || !transactionAmount) {
      alert("Please connect a wallet and enter an amount.");
      return;
    }

    setTransactionStatus('sending');

    // Simulate a network delay
    setTimeout(() => {
      // In a real app, this is where you would call a smart contract
      // For the demo, we'll just show a success message
      console.log(`Simulated payment of ${transactionAmount} ETH sent from ${address}.`);
      setTransactionStatus('success');
      setTransactionAmount('');
      
      // Reset the status after a few seconds
      setTimeout(() => setTransactionStatus('idle'), 3000);
    }, 1500); 
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Wallet & Payments</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-gray-400">Connected Address:</p>
          <span className="text-white break-all">{address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'Not Connected'}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-400">Your Balance:</p>
          <span className="text-white">
            {isLoading ? "Loading..." : `${parseFloat(balanceData?.formatted || "0").toFixed(4)} ${balanceData?.symbol}`}
          </span>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">Send a Payment</h2>
        <input
          type="number"
          step="0.01"
          placeholder="Amount (ETH)"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
        />
        
        <button
          onClick={handleSendPayment}
          disabled={!address || transactionStatus === 'sending'}
          className={`w-full font-bold py-3 px-6 rounded-full transition-colors ${
            transactionStatus === 'sending' ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {transactionStatus === 'sending' ? 'Sending...' : 'Send Payment'}
        </button>

        {transactionStatus === 'success' && (
          <p className="text-green-400 mt-4 text-center">Payment successful! (Simulated)</p>
        )}
      </div>
    </div>
  );
}