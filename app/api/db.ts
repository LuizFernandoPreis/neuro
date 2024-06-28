// db.ts
import mysql from 'mysql2/promise';

let connection: mysql.Connection | null = null;

export async function connect() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'https://www.neuronavigator.x10.mx/',
      user: 'xmviemjv_neuro',
      password: 'neuronavigator',
      database: 'xmviemjv_neuro'
    });
  }
  return connection;
}


