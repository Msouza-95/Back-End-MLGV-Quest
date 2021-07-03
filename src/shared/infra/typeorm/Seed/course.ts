import { createConnection } from 'typeorm';
import { v4 as uuid } from 'uuid';

const code = uuid();
const code2 = uuid();
const code3 = uuid();
const code4 = uuid();
const code5 = uuid();
const code6 = uuid();
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
    values('${code2}', 'SISTEMAS DISTRIBUÍDOS','${course[0].id}')
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

  await connection.query(
    ` INSERT INTO subject(code,title,course_id)
    values('${code3}', 'ÉTICA PROFISSIONAL ','${course[0].id}')
    `,
  );

  const subject2 = await connection.query(
    ` select * from  subject where code = '${code3}'
    `,
  );

  await connection.query(
    ` INSERT INTO class(subject_id,period_id )
    values('${subject2[0].id}','${period[0].id}')
    `,
  );

  await connection.query(
    ` INSERT INTO subject(code,title,course_id)
    values('${code4}', 'LABORATÓRIO DE DESENVOLVIMENTO WEB ','${course[0].id}')
    `,
  );

  const subject3 = await connection.query(
    ` select * from  subject where code = '${code4}'
    `,
  );

  await connection.query(
    ` INSERT INTO class(subject_id,period_id )
    values('${subject3[0].id}','${period[0].id}')
    `,
  );

  await connection.query(
    ` INSERT INTO subject(code,title,course_id)
    values('${code5}', 'INTERFACE HUMANO - COMPUTADOR','${course[0].id}')
    `,
  );

  const subject4 = await connection.query(
    ` select * from  subject where code = '${code5}'
    `,
  );

  await connection.query(
    ` INSERT INTO class(subject_id,period_id )
    values('${subject4[0].id}','${period[0].id}')
    `,
  );

  await connection.query(
    ` INSERT INTO subject(code,title,course_id)
    values('${code6}', 'PROJETO AVANÇADO DE SISTEMAS','${course[0].id}')
    `,
  );

  const subject5 = await connection.query(
    ` select * from  subject where code = '${code6}'
    `,
  );

  await connection.query(
    ` INSERT INTO class(subject_id,period_id )
    values('${subject5[0].id}','${period[0].id}')
    `,
  );

  await connection.close();
}

create().then(() => console.log('Course create'));
