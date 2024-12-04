interface IColumns {
    title: string,
    dataIndex: string,
    key: string,
    align: string,
    width: number
}

interface ITableData {
    key: number,
    name: string,
    time: string,
    select: boolean,
}

export {
    IColumns,
    ITableData
}