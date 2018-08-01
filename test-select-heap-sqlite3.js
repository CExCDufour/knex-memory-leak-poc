var _ = require('lodash');
var knex = require('./knex-sqlite3');

selectData(0);

function selectData(count) {
	++count;
	if (count % 100 === 0) {
		var heapUsed = process.memoryUsage().heapUsed;
		console.log(count + ',' + heapUsed);
	}
	knex('test_table').select('test_col').then(() => {
		if (count < 1000000) {
			selectData(count)
		}
	});
}