'use client'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order ID', width: 70, flex: 1 },
    { field: 'customerName', headerName: 'Customer Name', width: 150, flex: 1 },
    { field: 'email', headerName: 'Email', width: 200, flex: 1 },
    { field: 'received', headerName: 'Received', type: 'boolean', width: 100, flex: 1 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 130, flex: 1 },
    { field: 'price', headerName: 'Price', type: 'number', width: 130, flex: 1 },
    {field:'history',headerName:'History Process' , type:'date',width:130,flex:1,
        valueGetter: (value,row) => {
            // Assuming the latest history step is a date (e.g., a timestamp of when the last process occurred)
            const latestHistory = row.history;
    
            // If history is a date string or Date object, return it
            if (latestHistory) {
              return new Date(latestHistory); // Convert to Date if necessary
            }
            return null; // Return null if there's no history
          },
    }
    
  ];

  const rows = [
    {
      id: 1,
      customerName: 'Jon Snow',
      email: 'jon.snow@example.com',
      received: true,
      paymentMethod: 'Credit Card',
      price: 150.00,
      history: '2025-03-11T10:30:00Z',
    },
    {
      id: 2,
      customerName: 'Cersei Lannister',
      email: 'cersei.lannister@example.com',
      received: false,
      paymentMethod: 'PayPal',
      price: 200.00,
      history: '2025-03-10T15:00:00Z',
    },
    {
      id: 3,
      customerName: 'Jaime Lannister',
      email: 'jaime.lannister@example.com',
      received: true,
      paymentMethod: 'Bank Transfer',
      price: 120.00,
      history: '2025-03-09T12:00:00Z',
    },
    {
      id: 4,
      customerName: 'Arya Stark',
      email: 'arya.stark@example.com',
      received: true,
      paymentMethod: 'Credit Card',
      price: 85.00,
      history: '2025-03-08T14:00:00Z',
    },
    {
      id: 5,
      customerName: 'Daenerys Targaryen',
      email: 'daenerys@example.com',
      received: false,
      paymentMethod: 'Debit Card',
      price: 230.00,
      history: '2025-03-07T18:00:00Z',
      
    },
  ];

  

export default function DataTable() {

    
  return (
<div className="bg-white px-2 py-6 mt-5 rounded-xl overflow-auto h-[480px] shadow-xl mx-auto w-full">
  <DataGrid
    rows={rows}
    columns={columns}
    autoPageSize
    checkboxSelection
    sx={{
      overflow: 'auto',  
      marginX:'auto',
      maxWidth: '68vw',
    }}
  />
</div>

  
  );
}
