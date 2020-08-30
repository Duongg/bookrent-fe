import React, { useState, useEffect } from 'react';
import DataTable, { memoize } from 'react-data-table-component';
import { GET } from 'src/api/caller';
import { GET_ALL_BOOK } from 'src/api/endpoint';

function ProductCard() {
  const [books, setBooks] = useState([{bookname:"booooook"}]);

  const columns = memoize( clickHandler => [
    {
      name: 'Id',
      selector: 'id',
      sortabel: true
    },
    {
      name: 'Book Name',
      selector: 'bookname',
      sortabel: true
    },
    {
      name: 'Price',
      selector: 'price',
      sortabel: true
    },
    {
      name: 'Author',
      selector: 'auhtor',
      sortabel: true
    },
    {
      name: 'CategoryId',
      selector: 'categoryid',
      sortabel: true
    },
    {
      name: 'Quantity',
      selector: 'quantity',
      sortabel: true
    },
    {
      name: 'Details',
      selector: 'details',
      sortabel: true
    },
    {
      name: 'Create At',
      selector: 'createAt',
      sortabel: true
    },
    {
      name: 'Update At',
      selector: 'updateAt',
      sortabel: true
    },
    {
      name: 'Status Active',
      selector: 'statusActive',
      sortabel: true
    },
    {
      cell:(row) => <button onClick={clickHandler} id={row.ID}>Action</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ])

  const getAllBook = async () =>{
    await GET(GET_ALL_BOOK, {},{}).then((res) =>  {
      setBooks(res);
    })
  }
  useEffect(()=>{
    getAllBook();
    console.log('show')
  })
  return(
    <div>
        <DataTable
            title = "Book Manager"
            columns={columns}
            data={books}
            pagination={true}
            subHeader={true}/>
    </div>
  );
}
export default ProductCard;
