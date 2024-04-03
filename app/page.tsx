import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Home() {
  return (
    <main className="mx-12 flex flex-col gap-4">
      <header className="py-12">
        <h1 className="font-bold text-2xl">UniQuest</h1>
        <h3 className="max-w-2xl text-zinc-400">Projeto de tabela com mapeamento de Perguntas e Respostas das Atividades das Matérias do ensino EaD do curso de Análise e Desenvolvimento da UNISANTOS</h3>
      </header>

      <div className="flex gap-4">
        <Input className="border-zinc-800 max-w-60 rounded outline-none" placeholder="Filtre a pergunta..." />
        <Button variant={"outline"} className="rounded">
          <Plus className="mr-2" size={20} />
          Matéria
        </Button>
        <Button variant={"outline"} className="rounded">
          <Plus className="mr-2" size={20} />
          Status
        </Button>
      </div>

      <div className="border rounded">
          <Table>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] text-center">Matéria</TableHead>
              <TableHead className="text-center">Questão</TableHead>
              <TableHead className="text-center">Alternativas</TableHead>
              <TableHead className="w-[300px] text-center">Possíveis Respostas</TableHead>
            </TableRow>
          </TableHeader>
          </Table>
        {Array.from({ length: 8}).map((_, i) => {
          return (
          <Table>
          <TableBody className="border-b">
            <TableRow>
              <TableCell className="w-[200px] font-medium text-center">Fundamentos de Redes de Computadores</TableCell>
              <TableCell className="text-left">Para Kurose e Ross (2010, p. 383-392), ao tratar sobre o padrão de LAN sem fio IEEE 802.11, "uma vez associada com um AP, uma estação sem fio pode começar a enviar e receber quadros de dados de e para o ponto de acesso. Porém, como várias estações podem querer transmitir quadros de dados ao mesmo tempo sobre o mesmo canal, é preciso um protocolo de acesso múltiplo para coordenar as transmissões".(KUROSE, James F.; ROSS, Keith W. Redes de computadores e a Internet: uma abordagem top down. 5. ed. São Paulo: Addisson Wesley, 2010. 614 p).Nesse contexto, julgue os itens a seguir.</TableCell>
              <TableCell className="text-left whitespace-pre-line">I. As taxas de erros de bits mais baixas e que variam ao longo do tempo nas redes sem fios fazem parte das diferenças entre um enlace sem fio e um enlace com fio.II. Os padrões de LAN sem fio 802.11b e 802.11g compartilham algumas características, como o uso do protocolo de acesso ao meio CSMA/CA.III. Assim como o padrão ethernet, o padrão 802.11 usa um protocolo de acesso múltiplo do tipo acesso aleatório, porque, em ambos os casos, o objetivo principal do protocolo é detectar colisões.IV. Apesar da existência de protocolos de acesso ao meio para lidar com as colisões, em LANs sem fio usando o 802.11 elas ainda podem acontecer.</TableCell>
              <TableCell className="w-[300px] text-center">II e IV</TableCell>
            </TableRow>
          </TableBody>
        </Table>
          )
        })}



      </div>
    </main>
  );
}
