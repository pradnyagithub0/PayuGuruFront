// UpiListTable.js
import React from 'react';
import { useTable } from 'react-table';

const UpiListTable = ({ data, toggleStatus  }) => {
  const columns = React.useMemo(
    () => [
    //   { Header: 'ID', accessor: '_id' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
    //   { Header: 'Timestamp', accessor: 'timestamp' },
      { Header: 'Bank', accessor: 'upi_bank' },
      { Header: 'UPI Address', accessor: 'upi_id' },
      { Header: 'Status', accessor: 'upistatus' },
      { Header: 'Request Type', accessor: 'request_type' },
      {Header: 'Action', accessor: '  ',
      Cell: ({ row }) => (
        <button
          onClick={() => toggleStatus(row.original)}
          style={{
            padding: '5px 10px',
            backgroundColor: row.original.upistatus === 'Y' ? 'green' : 'linear-gradient(97.38deg, #FD6525 14.66%, #EB780E 55.73%)',
            color: row.original.upistatus === 'N' ? 'black':'white',
            border: 'none',
            borderRadius: '25px',
          }}
        >
          {row.original.upistatus === 'Y' ? 'Active' : 'Disable'}
        </button>
      ),

       },
    //   { Header: 'Updated At', accessor: 'updatedAt' },
    //   { Header: 'Created At', accessor: 'createdAt' },
    ],
    []
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
