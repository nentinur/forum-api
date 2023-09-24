/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');

const ThreadsTableTestHelper = {
  async addThread({
    id = 'threads-123', title = 'dicoding', body = 'secret'
  }) {
    const query = {
      text: 'INSERT INTO threads VALUES($1, $2, $3)',
      values: [id, title, body],
    };

    await pool.query(query);
  },
  async cleanTable() {
    await pool.query('DELETE FROM threads WHERE 1=1');
  },
};

module.exports = ThreadsTableTestHelper;
