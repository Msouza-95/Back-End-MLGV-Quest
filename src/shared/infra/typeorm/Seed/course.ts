import { createConnection } from 'typeorm';
import { v4 as uuid } from 'uuid';

const code = uuid();
async function create() {
  const connection = await createConnection();

  await connection.query(
    ` INSERT INTO course(code,title)
    values('${code}', 'Sistemas da informação')
    `,
  );

  await connection.close();
}

create().then(() => console.log('Course create'));
