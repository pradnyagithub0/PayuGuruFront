import React from 'react';
import axios from 'axios'; // Import Axios
import { useTable } from 'react-table';
import { ENDPOINTS } from '../../../utils/apiConfig';

const VirtualAccountTable = ({ data, toggleStatus }) => {
  const handleStatusToggle = (rowData) => {
    toggleStatus(rowData); // Call the function from parent
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'S.No',
        id: 'row',
        Cell: ({ row }) => {
          return <div>{row.index + 1}</div>;
        }
      },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      { Header: 'Bank', accessor: 'AC_bank' },
      { Header: 'Bank Account No', accessor: 'AC_id' },
      { Header: 'IFSC Code', accessor: 'AC_ifsc' },
      { Header: 'Swift Code', accessor: 'AC_swift' },
      { Header: 'Status', accessor: 'ACstatus' },
      { Header: 'Request Type', accessor: 'request_type' },
      {
        Header: 'Action',
        accessor: '  ',
        Cell: ({ row }) => (
          <button
            onClick={() => handleStatusToggle(row.original)}
            style={{
              padding: '5px 10px',
              backgroundColor: row.original.ACstatus === 'Y' ? 'green' : 'linear-gradient(97.38deg, #FD6525 14.66%, #EB780E 55.73%)',
              color: row.original.ACstatus === 'N' ? 'black' : 'white',
              border: 'none',
              borderRadius: '25px',
            }}
          >
            {row.original.ACstatus === 'Y' ? 'Active' : 'Disable'}
          </button>
        ),
      },
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
    <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%', overflowY: true }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold', padding: '5px', textAlign: 'center' }}>
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
            <tr {...row.getRowProps()} style={{ background: row.original.ACstatus === 'Y' ? 'lightgreen' : 'lightcoral' }}>
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

export default VirtualAccountTable;
