import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
    {
      name: 'Jan-Mar',
      JumlahModal: 40,
      JumlahKeuntungan: 24,
      amt: 2210,
    },
    {
      name: 'Apr-Jun',
      JumlahModal: 30,
      JumlahKeuntungan: 13,
      amt: 2210,
    },
    {
      name: 'Jul-Sep',
      JumlahModal: 20,
      JumlahKeuntungan: 98,
      amt: 2290,
    },
    {
      name: 'Oct-Des',
      JumlahModal: 28,
      JumlahKeuntungan: 39,
      amt: 2000,
    },
  ];
  

const Keuntungan = () => {
    return (
      <div>
        <h2 className="text-center font-semibold text-lg mb-4">Grafik Keuntungan</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value}%`}>
            <Label value="Persentase" angle={-90} position="insideLeft" />
            </YAxis>           
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="JumlahKeuntungan" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="JumlahModal" stroke="#82ca9d" />
            
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  

export default Keuntungan;
