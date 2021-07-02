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

  await connection.query(
    ` INSERT INTO subject(code,title,course_id)
    values('${code2}', 'IHC 1','49')
    `,
  );

  const subject = await connection.query(
    ` select * from  subject where code = '${code2}'
    `,
  );

  await connection.query(
    ` INSERT INTO period(name,started_at,ended_at)
    values('2020.1','2021-03-05', '2021-03-08')
    `,
  );

  const period = await connection.query(
    ` select * from  period where name = '2020.1'
    `,
  );

  await connection.query(
    ` INSERT INTO class(subject_id,period_id )
    values('${subject[0].id}','${period[0].id}')
    `,
  );

  await connection.close();
}

create().then(() => console.log('Course create'));
