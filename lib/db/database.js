var oracledb = require('oracledb');
var fs = require('fs');

var resultList = [];

const fetchRows = (conn, resultset, numRows) => {
	resultset.getRows(
		numRows,
		(err, rows) => {
			if (err) throw err;
			if (rows.length === 0) {
				console.log('No row found');
				conn.release(
			    function(err)
			    {
			      if (err) { console.error(err.message); }
			    }
				);
				console.log(resultList);
				fs.writeFile('./result.json', JSON.stringify(resultList));
			}
			else
			{
				console.log(`${rows.length} fetched`);
				rows.forEach((e, i) => {
						var rObj = {};
							e.forEach((c, j) => {
								rObj[resultset.metaData[j].name] = c;
							});
						resultList.push(rObj);
				});

				// console.log(JSON.stringify(resultList));
				fetchRows(conn, resultset, numRows);
			}
		}
	)
};

var numRows = 10;

oracledb.getConnection({
	user: 'VAGNERLUCAS',
	password: 'vagner42',
	connectString: 'DESENVOLVIMENTO'
	},
	(err, conn) => {
		if (err) throw err;

		// let bindVars = {
		// 	i: 42,
		// 	o: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT }
		// }

		// conn.execute("BEGIN VAGNERLUCAS.PR_ORACLE_TEST(:i, :o); END;", bindVars, function (err, result) {
		// 	if (err) throw err;

		// 	fetchRows(conn, result.outBinds.o, numRows);
		// })

		//console.log(JSON.stringify(result));
  	conn.execute("SELECT * FROM VAGNERLUCAS.TB_PROJETO", (err, result) => {
			if (err) throw err;
		
			console.log(result.rows);
		});
	})