var oracledb = require('oracledb');

const defaultConfig = {
    user: 'CREDUC3',
    password: '12345',
    connectString: 'DESENVOLVIMENTO'
};

const numRowsToFetch = 10;

function DatabaseHelper() {
    const fetchDataFromQuery = async (query) => {
        var connection = await oracledb.getConnection(defaultConfig);
        var data = await connection.execute(query);
        return data.rows;
    }

    // const fetchRowsFromProcedure = (conn, resultset, numRows) => {
    //     resultset.getRows(
    //         numRows,
    //         (err, rows) => {
    //             if (err) throw err;
    //             if (rows.length === 0) {
    //                 conn.release(
    //                     function (err) {
    //                         if (err) { console.error(err.message); }
    //                     }
    //                 );
    //                 console.log(resultList);
    //             }
    //             else {
    //                 rows.forEach((e, i) => {
    //                     var rObj = {};
    //                     e.forEach((c, j) => {
    //                         rObj[resultset.metaData[j].name] = c;
    //                     });
    //                     resultList.push(rObj);
    //                 });
    //                 fetchRows(conn, resultset, numRows);
    //             }
    //         }
    //     )
    // };

    this.fetchIESRoutes = async () => {
        return await fetchDataFromQuery("SELECT * FROM CREDUC3.VW_INSTITUICAO");
    }

}

module.exports = DatabaseHelper;