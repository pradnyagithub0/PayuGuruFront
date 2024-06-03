// VirtualAccountTable.js
import React from 'react';
import { useTable } from 'react-table';

const VirtualAccountTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
    //   { Header: 'ID', accessor: '_id' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
    //   { Header: 'Timestamp', accessor: 'timestamp' },
      { Header: 'Bank', accessor: 'AC_bank' },
      { Header: 'Bank Account No', accessor: 'AC_id' },
      { Header: 'IFSC Code', accessor: 'AC_ifsc' },
      { Header: 'Swift Code', accessor: 'AC_swift' },
      { Header: 'Status', accessor: 'ACstatus' },
      { Header: 'Request Type', accessor: 'request_type' },
      {Header: 'Action', accessor: '  ' },
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
    <table {...getTableProps()} style={{ border: 'solid 1px blue' , width:'100%' , overflowY:true }}>
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
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip', fontSize: "13px" }}>
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
