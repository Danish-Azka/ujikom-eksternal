import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 },
    { name: "May", sales: 2000 },
    { name: "June", sales: 10000 },
    { name: "July", sales: 4000 },
    { name: "August", sales: 2500 },
    { name: "september", sales: 1900 },
    { name: "October", sales: 9000 },
    { name: "November", sales: 6000 },
    { name: "Desember", sales: 8000 },
];

const PenjualanPerBulan = () => {
  return (
    <div className="w-full h-96 p-5 ">
      <h2 className="text-xl font-semibold text-center mb-4">Monthly Sales Data</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" name="Sales" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PenjualanPerBulan;