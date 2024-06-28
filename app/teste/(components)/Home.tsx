import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import Texts from './Texts';
const Home: React.FC = () => {

  

  return (
    <>
      <div className="container mt-5">
        <Texts/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-[1rem]">
          <div className="col">
            <div className="bg-white shadow-md rounded-lg md:h-[30rem] sm:h-[100%] p-4">
              <h5 className="text-lg font-bold mb-2">Técnicas de Respiração</h5>
              <ul className="list-disc pl-5">
                <li className="font-semibold">Respiração Diafragmática:</li>
                <p className="mb-2">Sente-se ou deite-se confortavelmente. Coloque uma mão no peito e a outra no abdômen. Inspire profundamente pelo nariz, permitindo que o abdômen se expanda. Expire lentamente pela boca. Repita por alguns minutos.</p>
                <li className="font-semibold">Respiração Alternada (Nadi Shodhana):</li>
                <p className="mb-2">Sente-se em uma posição confortável. Use o polegar direito para fechar a narina direita. Inspire profundamente pela narina esquerda. Feche a narina esquerda com o dedo anelar direito. Abra a narina direita e expire lentamente. Inspire pela narina direita, feche-a e expire pela narina esquerda. Continue alternando as narinas.</p>
                <li className="font-semibold">Respiração Quadrada (Box Breathing):</li>
                <p className="mb-2">Inspire contando até 4. Segure a respiração contando até 4. Expire contando até 4. Segure a respiração contando até 4. Repita várias vezes.</p>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="bg-white shadow-md rounded-lg md:h-[30rem] sm:h-[100%] p-4">
              <h5 className="text-lg font-bold mb-2">Técnicas de Concentração</h5>
              <ul className="list-disc pl-5">
                <li className="font-semibold">Mindfulness:</li>
                <p className="mb-2">Encontre um lugar tranquilo e sente-se confortavelmente. Foque na sua respiração, observando cada inspiração e expiração. Se a mente vagar, gentilmente traga o foco de volta para a respiração.</p>
                <li className="font-semibold">Técnica Pomodoro:</li>
                <p className="mb-2">Defina um timer para 25 minutos e concentre-se em uma única tarefa. Quando o timer tocar, faça uma pausa de 5 minutos. Após quatro ciclos, faça uma pausa mais longa (15-30 minutos).</p>
                <li className="font-semibold">Meditação Guiada:</li>
                <p className="mb-2">Use aplicativos ou vídeos de meditação guiada que ofereçam instruções passo a passo. Escolha meditações que sejam curtas no início, aumentando gradualmente a duração conforme sua prática se desenvolve.</p>
                <li className="font-semibold">Ancoragem Sensorial:</li>
                <p className="mb-2">Use objetos táteis, como bolas anti-stress ou texturas agradáveis. Concentre-se nas sensações que esses objetos proporcionam, ajudando a manter a mente presente e focada.</p>
              </ul>
            </div>
          </div>
        </div>

        <div className="col mt-4">
          <div className="bg-white shadow-md rounded-lg h-100 p-4 m-[1rem] sm:h-[100%]">
            <h5 className="text-lg font-bold mb-2">Dicas Gerais</h5>
            <ul className="list-disc pl-5">
              <li className="font-semibold">Ambiente:</li>
              <p className="mb-2">Crie um espaço tranquilo e organizado para praticar essas técnicas. Use iluminação suave e minimize distrações visuais e auditivas.</p>
              <li className="font-semibold">Regularidade:</li>
              <p className="mb-2">Pratique regularmente, mesmo que por períodos curtos. Estabeleça uma rotina diária para integrar essas técnicas no seu dia a dia.</p>
              <li className="font-semibold">Personalização:</li>
              <p className="mb-2">Experimente diferentes técnicas para ver quais funcionam melhor para você. Combine técnicas de respiração e concentração conforme necessário.</p>
            </ul>
            <p>Essas técnicas podem ser adaptadas e personalizadas conforme suas necessidades individuais.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
