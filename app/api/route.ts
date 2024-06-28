// app/api/test/route.ts
import { connect } from './db';
import { NextResponse } from 'next/server';
import { format } from 'sqlstring'; // Para escapar valores SQL

export async function GET() {
  try {
    const connection = await connect(); // Aguarda a conexão ser estabelecida

    // Exemplo de consulta com parâmetros
    const userId = 1;
    const sql = format('SELECT * FROM tasks');

    // Criando e executando a consulta
    connection.query(sql, (error : any, results : any, fields : any) => {
      if (error) {
        console.error('Erro ao executar a query:', error);
        return NextResponse.json({ error: 'Erro ao processar a requisição' }); // Retorna um erro HTTP 500 em caso de falha
      }
      
      return NextResponse.json({ msg: results }); // Retorna os resultados como JSON
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return NextResponse.json({ error: 'Erro ao processar a requisição' }); // Retorna um erro HTTP 500 em caso de falha na conexão
  }
}
