import { createConnection } from 'typeorm';
import { v4 as uuid } from 'uuid';

const code = uuid();
const code2 = uuid();
async function create() {
  const connection = await createConnection();

  await connection.query(
    ` INSERT INTO course(code,title)
    values('${code}', 'Sistema de Inforamação')
    `,
  );

  const course = await connection.query(
    ` select * from course where code = '${code}'
    `,
  );

  const course_id = course[0].id;

  await connection.query(
    ` INSERT INTO subject(code,title,course_id)
    values('${code2}', 'MAT 1','${course_id}')
    `,
  );

  await connection.close();
}

create().then(() => console.log('Course create'));
