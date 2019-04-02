import React from 'react';

export default (props)=>{
        return (
            <table className="table">
            <thead>
            <tr>
                {props.headerRows.map((thRow, idx)=><th key={idx}>{thRow}</th>)}
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
        </table>
        )
}