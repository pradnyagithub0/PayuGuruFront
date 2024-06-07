/* eslint-disable react-hooks/exhaustive-deps */
// UpiListTable.js
import React from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import { ENDPOINTS } from '../../../utils/apiConfig';
const UpiListTable = ({ data, toggleStatus  }) => {


  const handleStatusToggle = (rowData) => {
    const requestBody = {
      upi_id: rowData.upi_id,
      sessionid: sessionStorage.getItem("sessionid"),
    };
    console.log('request: ', requestBody)
    return axios.post(ENDPOINTS.UPDATE_UPI_ID_STATUS, requestBody, {
      headers: {
        "Content-Type": "application/json",
        // "Cookie": '',
      },
    })
      .then((response) => {
        console.log(response.data); // Handle response as needed
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };
  const columns = React.useMemo(
    () => [
    //   { Header: 'ID', accessor: '_id' },
    {
      Header: 'S.No',
      id: 'row',
      Cell: ({ row }) => {
        return <div>{row.index + 1}</div>;
      }
    },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
    //   { Header: 'Timestamp', accessor: 'timestamp' },
      { Header: 'Bank', accessor: 'upi_bank' },
      { Header: 'UPI Address', accessor: 'upi_id' },
      { Header: 'Status', accessor: 'upistatus' },
      { Header: 'Request Type', accessor: 'request_type' },
      {
        Header: 'Action',
        accessor: '  ',
        Cell: ({ row }) => (
          <button
            onClick={() => handleStatusToggle(row.original)}
            style={{
              padding: '5px 10px',
              backgroundColor: row.original.upistatus === 'Y' ? 'green' : 'linear-gradient(97.38deg, #FD6525 14.66%, #EB780E 55.73%)',
              color: row.original.upistatus === 'N' ? 'black' : 'white',
              border: 'none',
              borderRadius: '25px',
            }}
          >
            {row.original.upistatus === 'Y' ? 'Active' : 'Disable'}
          </button>
        ),
      },
    ],
    [handleStatusToggle]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' , width:'100%'}}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold', padding: '5px', textAlign:'center'}}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ background: row.original.upistatus === 'Y' ? 'lightgreen' : 'lightcoral' }}>
            {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                    fontSize: '13px',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
          </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UpiListTable;
