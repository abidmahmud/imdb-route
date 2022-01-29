const TableBody = ({ items: rows, columns }) => {
    return (
        <tbody>
            {
                rows.map((row, index) => {
                    return (
                        <tr key={index} >
                            {
                                columns.map(column => {
                                    return column.content(row, column.path);
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export default TableBody; 