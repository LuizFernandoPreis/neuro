// app/api/test/route.ts
import { connect } from './db';
import { NextResponse } from 'next/server';
import { format } from 'sqlstring'; 

export async function GET() {
  try {
    const connection = await connect(); 
    const userId = 1;
    const sql = format('SELECT * FROM tasks');

    connection.query(sql, (error : any, results : any, fields : any) => {
      if (error) {
        console.error('Erro ao executar a query:', error);
        return NextResponse.json({ error: 'Erro ao processar a requisição' }); 
      }
      
      return NextResponse.json({ msg: results }); 
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return NextResponse.json({ error: 'Erro ao processar a requisição' });
  }
}
