// components/WalletView.tsx
import { FaWallet, FaHistory } from 'react-icons/fa';

export default function WalletView() {
  const accountBalance = "120.50";
  const currency = "PRX"; // Changed from ETH to PRX
  const transactionHistory = [
    { type: 'Received', amount: 50, sender: 'Innovate Labs', date: 'Jul 20, 2025' },
    { type: 'Sent', amount: 20, recipient: 'Smart Contract', date: 'Jul 15, 2025' },
    { type: 'Received', amount: 90, sender: 'Creative Co.', date: 'Jul 10, 2025' },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center p-4 rounded-lg bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
        <h1 className="text-2xl font-bold text-praxis-blue-800">Wallet</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
          Manage your funds and track secure, milestone-based payments.
        </p>
      </div>

      {/* Wallet Balance Card */}
      <div className="p-6 rounded-lg bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800 shadow-lg border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200 flex items-center">
            <FaWallet className="mr-2 text-praxis-blue-800" /> My Wallet
          </h2>
          <span className="text-xl font-bold text-praxis-blue-800">{accountBalance} {currency}</span>
        </div>
        <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
          Your balance is held in PRX, the platform's stable coin.
        </p>
      </div>

      {/* Transaction History */}
      <div className="p-6 rounded-lg bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800 shadow-lg border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700">
        <h2 className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200 flex items-center mb-4">
          <FaHistory className="mr-2 text-praxis-blue-800" /> Transaction History
        </h2>
        <ul className="space-y-3">
          {transactionHistory.map((tx, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 rounded-lg bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900"
            >
              <div className="flex-1">
                <span className={`font-semibold ${tx.type === 'Received' ? 'text-green-500' : 'text-praxis-blue-800'}`}>
                  {tx.type}
                </span>
                <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
                  {tx.type === 'Received' ? `from ${tx.sender}` : `to ${tx.recipient}`}
                </p>
              </div>
              <div className="text-right">
                <span className="font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">
                  {tx.type === 'Received' ? '+' : '-'}
                  {tx.amount} {currency}
                </span>
                <p className="text-sm text-praxis-bg-light-500 dark:text-praxis-bg-dark-500">{tx.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}