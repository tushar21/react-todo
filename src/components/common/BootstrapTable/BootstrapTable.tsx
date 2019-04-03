import * as React from "react"


interface TableProps{
    headerRows:Array<string>,
    children?: any
}

export default (props:TableProps)=>{
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