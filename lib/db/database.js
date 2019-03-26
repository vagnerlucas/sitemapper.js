const oracledb = require('oracledb');

const defaultConfig = {
    user: 'VAGNER',
    password: '12345',
    connectString: 'DB',
};

// const numRowsToFetch = 10;

function DatabaseHelper() {
    const fetchDataFromQuery = async query => {
        try {
            const connection = await oracledb.getConnection(defaultConfig);
            const data = await connection.execute(query);
            return data.rows;
        } catch (error) {
            throw (error);
            // console.error(error);
        }
    };

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

    this.fetchIESRoutes = async() => fetchDataFromQuery('SELECT 1 FROM DUAL');

    this.fetchGenericCourseRoutes = async() => fetchDataFromQuery('SELECT 1 FROM DUAL');
}

module.exports = DatabaseHelper;