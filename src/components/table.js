import React,{ useState} from 'react';
import {Table} from 'react-bootstrap';

function TableSection(props){

    const [tableHeadings,setTableHeadings]=useState([
        'S.no','Name','Image'
    ]);

    const [tableData,settableData]=useState([
        {
            id:1,
            name:'row2',
            action:'image',
        },
        {
            id:2,
            name:'row2',
            action:'image',
        },
        {
            id:3,
            name:'row2',
            action:'image',
        },
        {
            id:4,
            name:'row1',
            action:'image',
        }
    
    ]);


    return(
        <section className="section bg-white p-3">
            <Table responsive>
                <thead className="table-dark">
                    <tr >
                        {tableHeadings.map(heading=>(
                            <th key={heading}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(data=>(
                        <tr key={data['id']}>
                            <td>{data['id']}</td>
                            <td>{data['name']}</td>
                            <td>{data['action']}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
        
    );
}

export default TableSection;