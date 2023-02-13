// CLIMB TABLE COMPONENT
import React, { useMemo, useState } from 'react'
import {
    Column,
    Table as ReactTable,
    PaginationState,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    OnChangeFn,
    flexRender,
} from '@tanstack/react-table'

import styles from './styles.css'

type Climb = {
    // id: number,
    grade: string,
    attempts: number,
    date: string, 
    // gym: string,
    // note: string,
    // name: string,
    // color: string
}

const Table = ({
    data, 
    columns
}: {
    data: Climb[]
    columns: ColumnDef<Climb>[]
}) => {
    const table = useReactTable({
        data,
        columns,
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        //
        debugTable: true,
    })

    return (
        <div>
            <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr 
                        key={headerGroup.id}
                        className="table-row"
                    >
                    {headerGroup.headers.map(header => {
                        return (
                        <th key={header.id} colSpan={header.colSpan}>
                            {header.isPlaceholder ? null : (
                            <div>
                                {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                                {/* {header.column.getCanFilter() ? (
                                <div>
                                    <Filter column={header.column} table={table} />
                                </div>
                                ) : null} */}
                            </div>
                            )}
                        </th>
                        )
                    })}
                    </tr>
                ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {
                        return (
                        <tr 
                            key={row.id} 
                            className="table-row"
                            style={{backgroundColor: parseInt(row.id) % 2 == 0 ? "" : "white"}}
                        >
                            {row.getVisibleCells().map(cell => {
                            return (
                                <td key={cell.id} className="table-cell">
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                                </td>
                            )
                            })}
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const ClimbTable = () => {
    const [data, setData] = useState([
        {
            grade: "V2",
            attempts: 1,
            date: "1/2/23"
        },
        {
            grade: "V7",
            attempts: 5,
            date: "1/2/23"
        },
        {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
                {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
        {
            grade: "V2",
            attempts: 1,
            date: "1/2/23"
        },
        {
            grade: "V7",
            attempts: 5,
            date: "1/2/23"
        },
        {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
                {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
        {
            grade: "V2",
            attempts: 1,
            date: "1/2/23"
        },
        {
            grade: "V7",
            attempts: 5,
            date: "1/2/23"
        },
        {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
                {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
        {
            grade: "V2",
            attempts: 1,
            date: "1/2/23"
        },
        {
            grade: "V7",
            attempts: 5,
            date: "1/2/23"
        },
        {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
                {
            grade: "V10",
            attempts: 26,
            date: "1/8/23"
        },
    ])

    const columns = useMemo<ColumnDef<Climb>[]>(() => [
        {
            header: "Climbs",
            footer: props => props.column.id,
            columns: [
                {
                    accessorKey: "grade",
                    cell: info => info.getValue(),
                    footer: props => props.column.id,
                },
                {
                    accessorKey: "attempts",
                    cell: info => info.getValue(),
                    footer: props => props.column.id,
                },
                {
                    accessorKey: "date",
                    cell: info => info.getValue(),
                    footer: props => props.column.id,
                }
            ]
        }
    ], [])

    return (
        <>
            <Table
                data={data}
                columns={columns}
            />
        </>
    )
}

export default ClimbTable