var oracledb = require('oracledb');

const defaultConfig = {
    user: 'CREDUC3',
    password: '12345',
    connectString: 'DESENVOLVIMENTO'
};

const numRowsToFetch = 10;

function DatabaseHelper() {
    const fetchDataFromQuery = async (query) => {
        try {
            var connection = await oracledb.getConnection(defaultConfig);
            var data = await connection.execute(query);
            return data.rows;
        } catch (error) {
            console.error(error);
        }
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
        //TODO: create apropriate view
        return await fetchDataFromQuery("SELECT * FROM CREDUC3.VW_INSTITUICAO");
    }

    this.fetchGenericCourseRoutes = async () => {
        return await fetchDataFromQuery("select distinct 'https://www.creduc.com.br/curso/' || x.SLUG as URL from creduc3.vw_curso x");
    }
}

module.exports = DatabaseHelper;