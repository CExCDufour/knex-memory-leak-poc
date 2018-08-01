var sqlite3 = require('sqlite3');
var knex = require('./knex-sqlite3');
new sqlite3.Database('./mydb.sqlite');

knex.schema.dropTableIfExists('test_table')
	.then(
		() => {
			return knex.schema.createTable('test_table', function (table) {
				table.text('test_col');
			});
		}
	)
	.then(() => {
		return knex('test_table').insert({ test_col: 'test_data' });
	})
	.then(() => {
		return knex.destroy();
	})
	.catch(function (error) {
		console.error(error);
	});
