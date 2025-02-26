import React, { useEffect, useState } from 'react';
const id = localStorage.getItem("idBuyer");

const TransactionPage = ({ buyerId }) => {
  const [transactions, setTransactions] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
        try {
          const response = await fetch(`http://localhost:3009/transaksiShop/get/${id}`);
          const data = await response.json();
          console.log("Data transaksi yang diterima:", data); 
          setTransactions(data);
          console.log(data)
          setLoading(false);
        } catch (error) {
          console.error('Error fetching transactions:', error);
          setLoading(false);
        }
      };
      
    fetchTransactions();
  }, [buyerId]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
console.log(transactions)
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5">Daftar Transaksi</h2>

      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div key={transaction.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p className="text-lg font-semibold">Transaksi ID: {transaction.id}</p>
            <p className="text-gray-600">Status: <span className="font-medium">{transaction.status}</span></p>
            <p className="text-gray-600">Total Harga: IDR {transaction.totalHarga.toLocaleString()}</p>
            <p className="text-gray-600">Ongkir: IDR {transaction.shippingCost.toLocaleString()}</p>

            <div className="mt-3">
              <p className="font-medium">Barang yang Dibeli:</p>
              {transaction.items.map((item, index) => (
                <div key={index} className="flex gap-3 items-center border-b py-2">
                  <img className="w-12 h-12 rounded-lg" src={item.gambar} alt={item.productName} />
                  <div>
                    <p className="font-medium">{item.productName} x {item.quantity}</p>
                    <p className="text-gray-500">IDR {item.price.toLocaleString()} per item</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )) ) : (
          <p className="text-center text-gray-600">Keranjang kosong</p>
   
      )}
    </div>
  );
};

export default TransactionPage;
