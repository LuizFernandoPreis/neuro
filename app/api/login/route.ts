import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function POST(request: NextRequest) {
  const { email, senha } = await request.json();

  if (!email || !senha) {
    return NextResponse.json({ error: 'Email e senha são necessários' }, { status: 400 });
  }

  try {
    // Verifica se o usuário existe
    const user = await prisma.user.findUnique({
      where: { email }, 
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    if (user.senha !== senha) {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
