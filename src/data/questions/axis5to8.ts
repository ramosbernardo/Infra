import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_5_TO_8: readonly Question[] = Object.freeze([
  // ==================== EIXO 5: 5. Virtualização, storage e nuvem. (12 questões) ====================
  {
    id: 'sarah-13',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um storage usa 8 SSDs de 1 TB em RAID 10 para banco OLTP sem penalidade de paridade. Qual a capacidade útil?',
    options: [
      '4 TB úteis, tolerando falhas em pares espelhados distintos.',
      '6 TB úteis, eliminando a penalidade de escrita por paridade.',
      '7 TB úteis, mantendo paridade distribuída sem write penalty.',
      '6 TB úteis, pois dois grupos RAID 5 removem a escrita extra.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.3. RAID (Eixo 5. Virtualização, storage e nuvem). RAID 10 oferece 50% da capacidade (4 TB), zero write penalty de paridade e tolerância de 1 disco em cada par espelhado.',
    correctAnalysis:
      'RAID 10 (1+0) espelha os discos entregando 50% de espaço útil (8 × 1 TB × 0,5 = 4 TB) sem cálculo de paridade (write penalty = 2 em vez de 4 ou 6).',
    optionErrors: {
      1: 'Incorreta: 6 TB úteis em 8 discos de 1 TB corresponde ao RAID 6, que possui write penalty = 6.',
      2: 'Incorreta: 7 TB úteis corresponde ao RAID 5, que possui write penalty = 4.',
      3: 'Incorreta: RAID 50 mantém penalidade de cálculo de paridade distribuída em cada grupo RAID 5.'
    }
  },
  {
    id: 'sarah-14',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na computação em nuvem, relacione os modelos e conceitos à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) IaaS\n(II) PaaS\n(III) SaaS\n(IV) Nuvem Híbrida\n(V) Elasticidade\n\nColuna da Direita:\n(A) Aplicação pronta entregue ao usuário final sem gestão de SO pelo cliente.\n(B) Integra nuvem privada local com nuvem pública via VPN ou link dedicado.\n(C) Fornece VMs, redes e discos, cabendo ao cliente administrar o SO e patches.\n(D) Provisiona e libera recursos automaticamente em resposta à demanda.\n(E) Fornece runtime e SO gerenciados, cabendo ao cliente gerenciar código e dados.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-C, III-A, IV-B, V-D.',
      'I-C, II-E, III-A, IV-B, V-D.',
      'I-C, II-A, III-E, IV-D, V-B.',
      'I-B, II-E, III-A, IV-C, V-D.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.5. Computação em nuvem: modelos de serviço (IaaS, PaaS e SaaS); modelos de implantação (pública, privada e híbrida); elasticidade e escalabilidade.',
    correctAnalysis:
      'Associação exata: (I) IaaS -> cliente gerencia SO/VMs (C); (II) PaaS -> cliente gerencia código e dados (E); (III) SaaS -> software pronto (A); (IV) Nuvem Híbrida -> privada + pública (B); (V) Elasticidade -> ajuste dinâmico à demanda (D).',
    optionErrors: {
      0: 'Incorreta: inverte as responsabilidades de gestão de SO entre IaaS e PaaS.',
      2: 'Incorreta: inverte PaaS/SaaS e Nuvem Híbrida/Elasticidade.',
      3: 'Incorreta: atribui Nuvem Híbrida a IaaS e vice-versa.'
    }
  },
  {
    id: 'sarah-15',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual recurso do VMware vSphere permite evacuar VMs ligadas de um host ESXi para manutenção física sem downtime?',
    options: [
      'vSphere HA reiniciando VMs após falha física inesperada.',
      'Storage vMotion movendo arquivos VMDK no mesmo host ESXi.',
      'vSphere Snapshot congelando o disco pai durante a troca de RAM.',
      'vMotion realizando live migration das VMs entre hosts ESXi.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. VMware vSphere/vCenter/ESXi e vMotion (Eixo 5). vMotion migra o estado de execução (memória e CPU) de VMs ligadas entre hosts ESXi sem indisponibilidade.',
    correctAnalysis:
      'O vMotion realiza migração a quente de máquinas virtuais ligadas entre hosts do cluster, liberando o servidor ESXi para manutenção de hardware.',
    optionErrors: {
      0: 'Incorreta: vSphere HA atua de forma reativa após queda inesperada, reiniciando VMs em outro host.',
      1: 'Incorreta: Storage vMotion move discos entre datastores sem migrar a execução para outro host.',
      2: 'Incorreta: snapshots criam arquivos delta para ponto de restauração e não transferem VMs entre hosts.'
    }
  },
  {
    id: 'sarah-5-04',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Comparando tecnologias de armazenamento NAS e SAN, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Soluções NAS entregam armazenamento em nível de bloco por meio dos protocolos NFS e SMB.\n( ) Soluções SAN apresentam volumes em nível de blocos (LUNs) por meio de Fibre Channel ou iSCSI.\n( ) Dois servidores Windows em cluster com CSV ou ESXi com VMFS coordenam acesso compartilhado à mesma LUN.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.1.4. 1.4. Tecnologias de armazenamento NAS e SAN.. (1) falsa: NAS entrega armazenamento em nível de arquivo; nível de bloco é característica da SAN; (2) verdadeira; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – V – V. Verdadeira(s): (2), (3). (1) é falsa porque NAS entrega armazenamento em nível de arquivo; nível de bloco é característica da SAN.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois NAS entrega armazenamento em nível de arquivo; nível de bloco é característica da SAN.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-5-05',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao ativar Jumbo Frames (MTU 9000) em uma rede iSCSI para servidores ESXi, qual condição é obrigatória no trajeto?',
    options: [
      'Configurar MTU 9000 só no Target mantendo MTU 1500 nos switches.',
      'Configurar MTU 1500 no Initiator com fragmentação L3 no roteador.',
      'Configurar MTU >= 9000 ponta a ponta (Initiator, switches e Target).',
      'Habilitar Jumbo Frames exclusivamente na porta de gerência iDRAC.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. iSCSI (Eixo 5. Virtualização, storage e nuvem). Jumbo Frames exigem MTU consistente ponta a ponta em toda a cadeia L2/L3; qualquer switch com 1500 descarta quadros de 9000 bytes.',
    correctAnalysis:
      'Se o Initiator, qualquer switch intermediário ou o Target mantiver MTU 1500, os pacotes iSCSI maiores sofrem descarte ou fragmentação severa.',
    optionErrors: {
      0: 'Incorreta: um switch intermediário com MTU 1500 descartará ou fragmentará quadros de 9000 bytes.',
      1: 'Incorreta: fragmentar tráfego iSCSI em roteadores L3 degrada severamente latência e IOPS.',
      3: 'Incorreta: a porta de gerência fora de banda não transporta o tráfego de dados iSCSI.'
    }
  },
  {
    id: 'sarah-5-06',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor Linux com duas HBAs em switches Fibre Channel distintos exibe o mesmo volume duas vezes (/dev/sdb e /dev/sdc). O que falta?',
    options: [
      'Criar RAID 0 via mdadm unindo /dev/sdb e /dev/sdc no kernel.',
      'Configurar Multipathing (MPIO / dm-multipath) unificando os paths.',
      'Configurar agregação LACP (802.3ad) diretamente nas placas HBA FC.',
      'Criar espelhamento LVM entre /dev/sdb e /dev/sdc manualmente.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. multipath e LUN (Eixo 5). Sem MPIO, cada caminho físico até a mesma LUN aparece como um dispositivo de bloco separado.',
    correctAnalysis:
      'O software de Multipathing (dm-multipath/MPIO) consolida os múltiplos caminhos físicos para a mesma LUN em um único dispositivo lógico com failover e balanceamento (auxiliado por ALUA no storage).',
    optionErrors: {
      0: 'Incorreta: criar RAID 0 sobre dois caminhos da MESMA LUN causaria corrupção imediata.',
      2: 'Incorreta: LACP agrega links Ethernet, não HBAs Fibre Channel nativas.',
      3: 'Incorreta: criar espelho LVM sobre a mesma LUN duplicada corrompe metadados.'
    }
  },
  {
    id: 'sarah-5-07',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre snapshots de máquinas virtuais no VMware vSphere/ESXi, assinale a afirmação INCORRETA.',
    options: [
      'Ao criar o snapshot, o disco base fica somente leitura e escritas vão ao delta.',
      'Múltiplos snapshots acumulados degradam o desempenho de leitura de I/O.',
      'A consolidação aplica alterações pendentes no disco pai e libera deltas.',
      'Snapshots devem ficar retidos por meses substituindo rotinas de backup.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. snapshots e datastore (Eixo 5). Snapshots não são backups (dependem do disco base no mesmo datastore e degradam I/O com cadeias longas).',
    correctAnalysis:
      'A afirmação incorreta trata snapshots como backup permanente: snapshots nunca substituem backups, pois não isolam dados em outra mídia/local e podem lotar o datastore VMFS.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o snapshot congela o VMDK pai e direciona novas gravações aos deltas.',
      1: 'Incorreta (afirmação verdadeira): cadeias extensas de deltas penalizam latência e IOPS.',
      2: 'Incorreta (afirmação verdadeira): consolidar grava os blocos delta no disco base e recupera espaço.'
    }
  },
  {
    id: 'sarah-5-08',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um cluster VMware vSphere HA com Admission Control, considere as afirmativas:\n\nI. Na perda de energia de um host ESXi, o HA reinicia as VMs afetadas nos demais hosts.\nII. O Datastore Heartbeating evita reinício indevido em isolamento apenas da rede de gerência.\nIII. O vSphere HA depende do vCenter online durante a queda; sem vCenter, nenhuma VM reinicia.\nIV. O Admission Control reserva capacidade para garantir recursos após a falha de N hosts.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. HA (Eixo 5. Virtualização, storage e nuvem). vSphere HA opera autonomamente entre agentes FDM dos hosts ESXi mesmo com vCenter offline (III é falsa).',
    correctAnalysis:
      'As afirmativas I, II e IV são verdadeiras; a III é falsa porque os agentes FDM (Fault Domain Manager) entre os hosts ESXi executam o failover sem depender do vCenter online.',
    optionErrors: {
      1: 'Incorreta: inclui III (falsa — vSphere HA funciona mesmo sem vCenter online) e omite IV.',
      2: 'Incorreta: inclui III (falsa) e omite II (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui III (falsa).'
    }
  },
  {
    id: 'sarah-5-09',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um banco OLTP gera 20.000 IOPS em blocos de 8 KB. Qual é o throughput aproximado correspondente?',
    options: [
      'Aproximadamente 1,6 GB/s, saturando links 10 GbE.',
      'Aproximadamente 80 MB/s por dividir o Queue Depth.',
      'Aproximadamente 156,25 MiB/s (~160 MB/s).',
      'Aproximadamente 2,5 GB/s em operações aleatórias.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. IOPS e Item 1.2. padrões de disco/interfaces (Eixo 5). Throughput = IOPS × Block Size: 20.000 × 8 KiB = 160.000 KiB/s = 156,25 MiB/s (~160 MB/s decimais).',
    correctAnalysis:
      'Multiplicando 20.000 operações/s por 8 KiB (8.192 B) obtêm-se 156,25 MiB/s (~160 MB/s), valor bem abaixo da banda bruta de 10 GbE (~1.250 MB/s), mostrando que cargas OLTP saturam por IOPS/latência.',
    optionErrors: {
      0: 'Incorreta: 20.000 × 8 KB resulta em ~160 MB/s, não 1,6 GB/s (erro de fator 10).',
      1: 'Incorreta: o produto é 20.000 × 8 KB (~160 MB/s), não 80 MB/s.',
      3: 'Incorreta: 2,5 GB/s equivaleria a mais de 300.000 IOPS em blocos de 8 KB.'
    }
  },
  {
    id: 'sarah-5-10',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um hospital integra datacenter local à nuvem pública via VPN e grava exames imutáveis via API HTTP/S3. Quais são o modelo e storage?',
    options: [
      'Nuvem Comunitária e Armazenamento em Bloco iSCSI.',
      'Nuvem Híbrida e Armazenamento de Objetos (Object Storage).',
      'Nuvem Privada pura e Armazenamento em Arquivo SMB/NFS.',
      'Nuvem Pública multitenant e Volume NVMe efêmero local.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.5. Modelos de implantação (pública, privada e híbrida) e Item 1.2. serviços de armazenamento (bloco, arquivo e objeto) (Eixo 5).',
    correctAnalysis:
      'Integrar infraestrutura privada local com nuvem pública forma uma Nuvem Híbrida; dados não estruturados/imutáveis acessados via API HTTP/REST S3 utilizam Object Storage.',
    optionErrors: {
      0: 'Incorreta: Nuvem Comunitária é compartilhada entre instituições afins, e iSCSI é armazenamento em bloco.',
      2: 'Incorreta: integrar recursos elásticos de nuvem pública caracteriza modelo híbrido, não privado puro.',
      3: 'Incorreta: manter datacenter próprio integrado à nuvem pública define Nuvem Híbrida, e volumes efêmeros perdem dados.'
    }
  },
  {
    id: 'sarah-5-11',
    editalItemId: '5.2.11',
    extraEditalItemIds: ['5.2.10'],
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre diagnóstico de armazenamento no ESXi via "esxtop" e penalidades de RAID, assinale a afirmação INCORRETA.',
    options: [
      'No esxtop, DAVG mede a latência média respondida pelo dispositivo/storage físico.',
      'No esxtop, KAVG mede o tempo em que o comando I/O permanece enfileirado no VMkernel.',
      'O nível RAID 5 apresenta penalidade de escrita (write penalty) igual a 1 e sem leitura prévia.',
      'O nível RAID 6 possui penalidade de escrita igual a 6 devido às duas paridades P e Q.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. esxtop/latência e Item 1.3. RAID (Eixo 5). RAID 5 tem write penalty = 4 (lê dado antigo e paridade antiga, grava dado novo e nova paridade); apenas RAID 0 tem write penalty = 1.',
    correctAnalysis:
      'A afirmação incorreta atribui write penalty 1 ao RAID 5: por calcular paridade distribuída, cada escrita aleatória pequena no RAID 5 gera 4 I/Os no array (e 6 no RAID 6).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): DAVG (Device Average) representa a latência do adaptador/SAN até a resposta do storage.',
      1: 'Incorreta (afirmação verdadeira): KAVG indica latência dentro do kernel ESXi (em geral fila saturada).',
      3: 'Incorreta (afirmação verdadeira): RAID 6 calcula dupla paridade (P+Q), resultando em write penalty = 6.'
    }
  },
  {
    id: 'sarah-5-12',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre protocolos e endereçamento em redes de armazenamento SAN, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O protocolo iSCSI utiliza por padrão a porta TCP 3260 para tráfego de blocos sobre redes IP.\n( ) Os nós Initiator e Target em uma SAN iSCSI são identificados pelo padrão WWPN de 64 bits.\n( ) O identificador IQN (iSCSI Qualified Name) segue o formato padrão com prefixo "iqn." e data reversa.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. iSCSI e Fibre Channel (Eixo 5). iSCSI usa TCP 3260 (V) e identificadores IQN (V); WWPN de 64 bits pertence a Fibre Channel, não iSCSI (F).',
    correctAnalysis:
      'A primeira (TCP 3260) e a terceira (formato IQN) referem-se corretamente ao iSCSI; a segunda é falsa porque WWPN/WWNN identificam nós e portas em fabrics Fibre Channel.',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira, pois iSCSI opera por padrão na porta TCP 3260.',
      1: 'Incorreta: a segunda afirmativa é falsa, pois WWPN de 64 bits pertence ao Fibre Channel, não ao iSCSI.',
      2: 'Incorreta: a terceira afirmativa é verdadeira, pois o identificador IQN segue o prefixo "iqn." com data reversa.'
    }
  },

  // ==================== EIXO 6: 6. Backup. (12 questões) ====================
  {
    id: 'sarah-16',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre tipos e mecanismos de backups corporativos, relacione a coluna da esquerda com a da direita.\n\nColuna da Esquerda:\n(I) Backup Completo (Full)\n(II) Backup Incremental\n(III) Backup Diferencial\n(IV) Completo Sintético\n(V) Archive Bit\n\nColuna da Direita:\n(A) Copia alterações desde o último Full sem limpar marcador; restore usa Full + último.\n(B) Atributo de arquivo que indica criação ou modificação desde o último backup que o limpou.\n(C) Copia todos os dados do escopo e limpa o marcador de alteração.\n(D) Consolida no MediaAgent um novo Full a partir do Full anterior + incrementais sem ler origem.\n(E) Copia dados alterados desde o último backup e limpa marcador; restore exige cadeia completa.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-A, III-E, IV-D, V-B.',
      'I-D, II-E, III-A, IV-C, V-B.',
      'I-C, II-E, III-B, IV-D, V-A.',
      'I-C, II-E, III-A, IV-D, V-B.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Tipos de backup (completo, incremental e diferencial). Completo (C), Incremental (E), Diferencial (A), Completo Sintético (D) e Archive Bit (B).',
    correctAnalysis:
      'Associação correta: (I) Full -> C; (II) Incremental -> E (limpa archive bit, cadeia completa no restore); (III) Diferencial -> A (não limpa archive bit, exige só Full + último); (IV) Synthetic Full -> D; (V) Archive Bit -> B.',
    optionErrors: {
      0: 'Incorreta: inverte as definições de Backup Incremental e Backup Diferencial.',
      1: 'Incorreta: inverte Backup Completo tradicional com Completo Sintético.',
      2: 'Incorreta: atribui Archive Bit a Backup Diferencial e vice-versa.'
    }
  },
  {
    id: 'sarah-17',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual é o principal benefício de rede da deduplicação "source-side" (na origem) frente à "target-side" pós-processada?',
    options: [
      'Descarta blocos repetidos no cliente antes do envio, poupando banda WAN/LAN.',
      'Elimina espaço temporário apenas quando roda pós-processada no destino.',
      'Impede políticas GFS e exige que toda execução rode como Full bruto.',
      'Consome mais largura de banda enviando todos os dados brutos ao destino.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.3. Deduplicação (Eixo 6. Backup). Na deduplicação source-side, os hashes de blocos são verificados no cliente antes da transmissão, economizando banda de rede.',
    correctAnalysis:
      'Na deduplicação source-side inline, o agente calcula hashes dos blocos na origem e envia apenas blocos inéditos pela rede, reduzindo significativamente tráfego e janela.',
    optionErrors: {
      1: 'Incorreta: a deduplicação pós-processada exige área de staging no destino antes de deduplicar.',
      2: 'Incorreta: deduplicação inline é totalmente compatível com retenção GFS e sintéticos.',
      3: 'Incorreta: transferir tudo primeiro para deduplicar depois descreve target-side pós-processada.'
    }
  },
  {
    id: 'sarah-18',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise os dois objetivos de continuidade de um sistema hospitalar:\n\n"Em falha grave no datacenter, o sistema deve voltar em até 30 minutos — métrica denominada ________ — e a perda máxima tolerável de dados recentes equivale a 5 minutos — métrica denominada ________."\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    options: [
      'RPO; RTO.',
      'RTO; RPO.',
      'WORM; SLA.',
      'MTBF; RTO.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. RPO/RTO e recuperação de desastres (Eixo 6. Backup). RTO mede o tempo máximo de parada até o retorno (30 min); RPO mede a janela máxima de perda de dados (5 min).',
    correctAnalysis:
      'RTO (Recovery Time Objective) define o tempo máximo tolerável de indisponibilidade até a recuperação, enquanto RPO (Recovery Point Objective) define a perda máxima aceitável de dados medida no tempo.',
    optionErrors: {
      0: 'Incorreta: os conceitos de RPO (perda de dados) e RTO (tempo de retorno) foram invertidos.',
      2: 'Incorreta: WORM (Write Once Read Many) trata de imutabilidade em mídia, não de tempo de retorno.',
      3: 'Incorreta: MTBF mede tempo médio entre falhas, e RTO corresponde à primeira lacuna.'
    }
  },
  {
    id: 'sarah-6-04',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre proteção de backups contra ransomware, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Espelhamento RAID 1 em produção garante cópia imutável imune à criptografia de ransomware.\n( ) A regra 3-2-1-1-0 prevê 3 cópias, em 2 mídias distintas, 1 offsite, 1 offline/imutável e 0 erros de restore.\n( ) Snapshots locais gravados na mesma partição da VM sem WORM impedem exclusão por conta administrativa comprometida.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Tecnologias e mídias de backup (Eixo 6). RAID 1 replica alterações maliciosas imediatamente (F); regra 3-2-1-1-0 exige cópia imutável/air-gap e validação sem erros (V); snapshots locais sem imutabilidade WORM podem ser apagados por invasor com acesso ao hipervisor (F).',
    correctAnalysis:
      'A primeira é falsa (RAID 1 espelha ataques), a segunda é verdadeira (regra 3-2-1-1-0) e a terceira é falsa (snapshots locais sem WORM não resistem a comprometimento administrativo).',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é falsa, pois RAID 1 replica imediatamente a criptografia causada por ransomware.',
      1: 'Incorreta: a segunda afirmativa é verdadeira, definindo com exatidão a regra 3-2-1-1-0.',
      3: 'Incorreta: a terceira afirmativa é falsa, pois snapshots locais sem proteção imutável/air-gap podem ser removidos.'
    }
  },
  {
    id: 'sarah-6-05',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na arquitetura Commvault, qual componente centraliza o banco de metadados, agendamentos e políticas de controle?',
    options: [
      'MediaAgent operando diretamente junto às unidades de fita.',
      'Subclient definindo escopo local de diretórios no cliente.',
      'Storage Policy configurada para retenção lógica das cópias.',
      'CommServe atuando como plano de controle e catálogo central.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Commvault ou equivalentes (Eixo 6. Backup). CommServe é o servidor central de gerenciamento (control plane) que mantém o catálogo CSDB, agendamentos, segurança e políticas.',
    correctAnalysis:
      'O CommServe gerencia catálogo, políticas e jobs (control plane), coordenando os MediaAgents que processam o tráfego de dados.',
    optionErrors: {
      0: 'Incorreta: o MediaAgent pertence ao plano de dados (movimentação, DDB e escrita em bibliotecas).',
      1: 'Incorreta: Subclient apenas define o conjunto lógico de dados protegido dentro de um servidor cliente.',
      2: 'Incorreta: Storage Policy é uma entidade lógica de configuração, não o servidor gerenciador central.'
    }
  },
  {
    id: 'sarah-6-06',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre políticas de retenção por "Dias e Ciclos" (30 dias / 2 ciclos) e WORM em backups, assinale a opção INCORRETA.',
    options: [
      'Um Full antigo só expira após cumprir simultaneamente os dias e ciclos mínimos posteriores.',
      'Se todos os Fulls do mês falharem, o único Full do dia 1 é apagado no dia 31 mesmo sem novo ciclo.',
      'A retenção por ciclos garante recuperabilidade mesmo após falhas seguidas na janela semanal.',
      'Compliance Lock WORM bloqueia exclusão antecipada até mesmo por administradores antes do prazo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. retenção e políticas de backup (Eixo 6. Backup). Regras combinadas (Dias + Ciclos) nunca apagam o único ciclo completo recuperável apenas pela passagem dos dias.',
    correctAnalysis:
      'A opção incorreta afirma que o único Full seria apagado no dia 31: o data aging exige satisfação simultânea de Dias E Ciclos mínimos válidos posteriores para impedir perda de cadeia restaurável.',
    optionErrors: {
      0: 'Incorreta (condiz com a técnica): ambas as condições (dias e ciclos) devem ser cumpridas antes do aging.',
      2: 'Incorreta (condiz com a técnica): exigir ciclos completos recentes preserva ponto válido de restore.',
      3: 'Incorreta (condiz com a técnica): WORM em modo compliance bloqueia exclusão antecipada por conta privilegiada.'
    }
  },
  {
    id: 'sarah-6-07',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual mecanismo garante consistência transacional em backup a quente de bancos de dados ou VMs Windows?',
    options: [
      'Integração com VSS (Volume Shadow Copy Service) ou quiescing.',
      'Cópia direta de arquivos abertos via SMB sem pausar buffers.',
      'Snapshot puro no storage SAN sem notificar o SGBD ou SO.',
      'Troca de backups semanais Full por diferenciais diários na GFS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. políticas de backup (Eixo 6. Backup). Consistência aplicacional a quente depende de VSS Writers / quiescing antes da captura.',
    correctAnalysis:
      'O VSS (ou APIs nativas do SGBD) notifica o banco para descarregar buffers para disco e suspender novas gravações brevemente (quiesce), gerando snapshot consistente em aplicação.',
    optionErrors: {
      1: 'Incorreta: copiar arquivos de banco abertos sem quiescing gera cópia inconsistente.',
      2: 'Incorreta: snapshot puro de storage sem sinalizar VSS gera apenas estado crash-consistent.',
      3: 'Incorreta: backup diferencial não coordena consistência transacional de buffers em memória.'
    }
  },
  {
    id: 'sarah-6-08',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor físico perdeu placa-mãe e controladora. Qual modalidade restaura SO, sistema e dados em hardware novo vazio?',
    options: [
      'Restore Granular de objetos diretamente pela rede.',
      'Instant Recovery (Live Mount) montando apenas um disco de dados.',
      'Bare-Metal Recovery (BMR) via imagem completa e mídia de boot.',
      'Synthetic Full reconstruindo o volume apenas em fita LTO.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. restore (Eixo 6. Backup). BMR reconstrói sistema operacional, estado de sistema e volumes completos em hardware vazio sem instalação manual prévia do SO.',
    correctAnalysis:
      'Bare-Metal Recovery restaura imagem completa do sistema operacional e aplicativos sobre equipamento nu a partir de imagem/mídia de boot.',
    optionErrors: {
      0: 'Incorreta: Restore Granular recupera arquivos individuais ou e-mails em um sistema já operacional.',
      1: 'Incorreta: Live Mount disponibiliza VMs ou bancos virtualmente, não reconstrói SO completo em hardware físico vazio.',
      3: 'Incorreta: Synthetic Full é método de geração de backup, não modalidade de restauração física.'
    }
  },
  {
    id: 'sarah-6-09',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um datacenter está a 800 km do site DR (28 ms RTT) e precisa enviar backups diários sem degradar escrita local. Qual método usar?',
    options: [
      'Replicação síncrona de blocos aguardando ACK remoto em produção.',
      'Replicação assíncrona / AUX Copy enviando blocos deduplicados.',
      'Stretch Cluster síncrono ativo-ativo estendido pela WAN.',
      'Envio noturno de backup Full bruto sem compressão nem dedup.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. replicação (Eixo 6. Backup). Longas distâncias (RTT elevado) inviabilizam replicação síncrona; usa-se replicação assíncrona / AUX Copy com envio somente de blocos deduplicados.',
    correctAnalysis:
      'Com RTT de 28 ms, replicação síncrona paralisaria escritas em produção; a replicação assíncrona/AUX Copy otimizada envia apenas blocos únicos já deduplicados ao site remoto.',
    optionErrors: {
      0: 'Incorreta: replicação síncrona exige baixa latência (< 5 ms RTT); 28 ms paralisariam aplicações locais.',
      2: 'Incorreta: Stretch Cluster síncrono a 28 ms RTT compromete gravemente a performance de produção.',
      3: 'Incorreta: enviar backups completos brutos sem deduplicação saturaria o link WAN.'
    }
  },
  {
    id: 'sarah-6-10',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre procedimentos de recuperação em Disaster Recovery (DR) e restore Point-in-Time, assinale a afirmação INCORRETA.',
    options: [
      'Em DR no site secundário, sobem primeiro rede/firewall, depois AD/DNS, dados e aplicações.',
      'Restore Point-in-Time aplica Full + incrementais/diferenciais + logs de transação até o minuto desejado.',
      'Testes periódicos de restauração garantem integridade real da cadeia de backups armazenada.',
      'Em caso de queda total do site principal, devem subir primeiro as aplicações web antes do AD e DNS.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. recuperação de desastres e restore (Eixo 6. Backup). Aplicações falham sem rede, DNS e Active Directory ativos; runbooks seguem a dependência de base para o topo.',
    correctAnalysis:
      'A afirmação incorreta inverte a ordem de subida em DR: aplicações e bancos integrados ao domínio exigem que rede, firewall, AD e DNS estejam operacionais antes.',
    optionErrors: {
      0: 'Incorreta (procedimento verdadeiro): respeita corretamente a árvore de dependências de infraestrutura.',
      1: 'Incorreta (procedimento verdadeiro): Point-in-Time Recovery depende da cadeia de backup mais transaction logs.',
      2: 'Incorreta (procedimento verdadeiro): validar restore na prática fecha o último dígito "0" da regra 3-2-1-1-0.'
    }
  },
  {
    id: 'sarah-6-11',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre componentes e políticas na proteção corporativa de dados, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O MediaAgent executa o plano de dados realizando deduplicação DDB, indexação e escrita em disco ou fita.\n( ) A rotação GFS (Grandfather-Father-Son) combina retenções diárias, semanais e mensais/anuais.\n( ) No Commvault, o CommServe executa o fluxo de dados de backup entre os clientes e as bibliotecas.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'V – F – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.1. Commvault ou equivalentes. (1) verdadeira; (2) verdadeira; (3) falsa: o fluxo de dados (data path) é executado pelo MediaAgent; o CommServe é o plano de controle.',
    correctAnalysis:
      'Gabarito: V – V – F. Verdadeira(s): (1), (2). (3) é falsa porque o fluxo de dados (data path) é executado pelo MediaAgent; o CommServe é o plano de controle.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o fluxo de dados (data path) é executado pelo MediaAgent; o CommServe é o plano de controle.'
    }
  },
  {
    id: 'sarah-6-12',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um backup de 3,6 TB (3.600.000 MB) com deduplicação 3:1 trafega a 100 MB/s sustentados. Qual o tempo de transferência?',
    options: [
      'Aproximadamente 60 minutos (1 hora).',
      'Aproximadamente 600 minutos (10 horas).',
      'Aproximadamente 200 minutos (3 h 20 min).',
      'Aproximadamente 120 minutos (2 horas).'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.3. Deduplicação e cálculo de janela de backup (Eixo 6). Com razão 3:1, 3.600.000 MB reduzem para 1.200.000 MB; dividindo por 100 MB/s obtêm-se 12.000 s = 200 min (3 h 20 min).',
    correctAnalysis:
      'Reduzindo 3.600.000 MB pelo fator 3:1 resultam 1.200.000 MB efetivos na rede; a 100 MB/s, a transferência exige 12.000 segundos, equivalentes a 200 minutos (3 horas e 20 minutos).',
    optionErrors: {
      0: 'Incorreta: 60 minutos transfeririam apenas 360.000 MB (360 GB) a 100 MB/s.',
      1: 'Incorreta: 600 minutos (10 horas) seria o tempo sem nenhuma deduplicação (3.600.000 MB / 100 MB/s).',
      3: 'Incorreta: 120 minutos transfeririam 720.000 MB (720 GB) a 100 MB/s.'
    }
  },

  // ==================== EIXO 7: 7. WI-FI/NAC. (12 questões) ====================
  {
    id: 'sarah-19',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma arquitetura NAC com IEEE 802.1X e RADIUS, relacione os elementos à esquerda com seus papéis/portas à direita.\n\nColuna da Esquerda:\n(I) Supplicant\n(II) Authenticator\n(III) Authentication Server\n(IV) EAPoL\n(V) Portas RADIUS padrão\n\nColuna da Direita:\n(A) Encapsulamento L2 usado entre estação cliente e switch/AP.\n(B) Software ou agente no cliente que envia credenciais ou certificado.\n(C) UDP 1812 para autenticação/autorização e UDP 1813 para accounting.\n(D) Servidor central (como Cisco ISE/NPS) que retorna Access-Accept/Reject.\n(E) Equipamento de rede (switch/AP) que traduz EAPoL para RADIUS.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-B, III-D, IV-A, V-C.',
      'I-B, II-D, III-E, IV-C, V-A.',
      'I-B, II-E, III-D, IV-A, V-C.',
      'I-B, II-E, III-A, IV-D, V-C.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Protocolos 802.1X e EAP e Item 2. RADIUS (Eixo 7. WI-FI/NAC). Supplicant (B), Authenticator (E), Authentication Server (D), EAPoL (A) e portas UDP 1812/1813 (C).',
    correctAnalysis:
      'Associação exata: (I) Supplicant = cliente (B); (II) Authenticator = switch/AP (E); (III) Authentication Server = ISE/RADIUS (D); (IV) EAPoL = L2 cliente-switch (A); (V) RADIUS = UDP 1812/1813 (C).',
    optionErrors: {
      0: 'Incorreta: inverte Supplicant (estação) com Authenticator (switch/AP).',
      1: 'Incorreta: troca Authenticator com Authentication Server e EAPoL com portas RADIUS.',
      3: 'Incorreta: troca Authentication Server com EAPoL.'
    }
  },
  {
    id: 'sarah-20',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre segurança em redes sem fio (WEP, WPA2 e WPA3), considere as afirmativas a seguir:\n\nI. O padrão legado WEP usa RC4 com vetor de inicialização (IV) curto de 24 bits, sendo vulnerável.\nII. O WPA2 padronizou criptografia AES-CCMP (802.11i) em substituição ao legado TKIP.\nIII. O WPA3-Personal usa o protocolo SAE provendo forward secrecy contra ataques de dicionário offline.\nIV. O WPA3 exige PMF (802.11w) obrigatório e elimina suporte aos algoritmos legados WEP e TKIP.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'I, II, III e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Mecanismos de segurança em redes sem fio (WEP, WPA, WPA2 e WPA3). Todas as quatro afirmativas estão corretas: WEP usa RC4/IV de 24 bits (I), WPA2 adotou AES-CCMP (II), WPA3 usa SAE com forward secrecy (III) e exige PMF banindo WEP/TKIP (IV).',
    correctAnalysis:
      'Todas as quatro afirmações descrevem corretamente a evolução de segurança IEEE 802.11: fragilidade do WEP, transição do WPA2 para AES-CCMP e reforços do WPA3 (SAE + PMF obrigatório sem WEP/TKIP).',
    optionErrors: {
      0: 'Incorreta: omite III (verdadeira — SAE no WPA3-Personal provê forward secrecy).',
      2: 'Incorreta: omite II e IV (ambas verdadeiras sobre AES-CCMP no WPA2 e PMF no WPA3).',
      3: 'Incorreta: omite I e III (ambas verdadeiras sobre WEP e SAE do WPA3).'
    }
  },
  {
    id: 'sarah-21',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Como o servidor RADIUS instrui o switch/WLC a aplicar uma VLAN dinâmica ao cliente após autenticar via 802.1X?',
    options: [
      'Por opção DHCP 82 solicitando porta trunk 802.1Q ao switch.',
      'Pelo atributo Calling-Station-Id no Accounting-Stop UDP 1813.',
      'Pelo quadro EAP-Success enviado pelo supplicant após validar.',
      'Pelos atributos Tunnel-Type, Medium-Type e Private-Group-ID no Accept.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Cisco ISE, 802.1X, RADIUS e VLAN dinâmica (Eixo 7. WI-FI/NAC). A atribuição dinâmica de VLAN ocorre via atributos RADIUS RFC 2868/3580 retornados no Access-Accept.',
    correctAnalysis:
      'O servidor RADIUS inclui no pacote Access-Accept os atributos Tunnel-Type (13 = VLAN), Tunnel-Medium-Type (6 = IEEE 802) e Tunnel-Private-Group-ID (ID ou nome da VLAN).',
    optionErrors: {
      0: 'Incorreta: DHCP Option 82 identifica porta de switch para servidores DHCP e não autoriza VLANs 802.1X.',
      1: 'Incorreta: Calling-Station-Id informa o MAC do cliente, e Accounting-Stop apenas registra fim de sessão.',
      2: 'Incorreta: EAP-Success é enviado pelo Authenticator ao cliente, não pelo supplicant impondo VLAN.'
    }
  },
  {
    id: 'sarah-7-04',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os padrões IEEE 802.11 de redes sem fio, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em 2,4 GHz com canais de 20 MHz, os canais 1, 7 e 13 formam o trio clássico sem sobreposição.\n( ) O padrão 802.11ac (Wi-Fi 5) opera nas faixas de 2,4 GHz e 5 GHz.\n( ) O padrão IEEE 802.11ax (Wi-Fi 6/6E) introduziu OFDMA multiusuário suportando as faixas de 2,4 GHz, 5 GHz e 6 GHz.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.1.1. 1.1. Redes sem fio (padrões IEEE 802.11).. (1) falsa: o trio clássico sem sobreposição é 1, 6 e 11; (2) falsa: o 802.11ac opera somente em 5 GHz; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – F – V. Verdadeira(s): (3). (1) é falsa porque o trio clássico sem sobreposição é 1, 6 e 11. (2) é falsa porque o 802.11ac opera somente em 5 GHz.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois o trio clássico sem sobreposição é 1, 6 e 11.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o 802.11ac opera somente em 5 GHz.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-7-05',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma rede NAC (Cisco ISE) com 802.1X nas portas, como autenticar impressoras e coletores sem supplicant de forma controlada?',
    options: [
      'Desabilitar 802.1X no switch usando somente Port Security aberto.',
      'Configurar EAP-FAST sem certificado nos aparelhos biométricos.',
      'Utilizar MAB (MAC Authentication Bypass) + profiling em VLAN restrita.',
      'Aplicar TACACS+ (TCP 49) nas portas dos usuários finais da rede.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Cisco ISE, Omada ou equivalentes, 802.1X e autenticação (Eixo 7. WI-FI/NAC). Dispositivos headless sem supplicant falham no EAPoL e recorrem ao MAB + profiling com ACL/VLAN restrita.',
    correctAnalysis:
      'No MAB, após expirar o timeout EAPoL, o switch envia o endereço MAC ao ISE, que valida perfil (profiling) e aplica autorização com VLAN e ACLs restritivas.',
    optionErrors: {
      0: 'Incorreta: desativar 802.1X elimina controle centralizado AAA e profiling dinâmico no ISE.',
      1: 'Incorreta: equipamentos sem cliente/supplicant 802.1X não implementam EAP-FAST.',
      3: 'Incorreta: TACACS+ atende administração CLI de ativos de rede, não controle NAC de endpoints.'
    }
  },
  {
    id: 'sarah-7-06',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual diferença distingue os métodos EAP-TLS e PEAP-MSCHAPv2 em redes Wi-Fi 802.1X Enterprise quanto a certificados?',
    options: [
      'PEAP exige certificado no cliente e servidor; EAP-TLS usa só senha.',
      'EAP-TLS exige certificado no cliente e servidor; PEAP só no servidor.',
      'Ambos dispensam certificado no servidor RADIUS usando apenas PSK.',
      'EAP-TLS envia credenciais sem túnel TLS, ao contrário do PEAP.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Protocolos 802.1X e EAP e Item 2. autenticação (Eixo 7. WI-FI/NAC). EAP-TLS = certificado mútuo; PEAP = certificado só no servidor + credenciais internas.',
    correctAnalysis:
      'No EAP-TLS, servidor e cliente validam-se mutuamente por certificados X.509; no PEAP, apenas o servidor apresenta certificado para cifrar o túnel onde o usuário envia login e senha.',
    optionErrors: {
      0: 'Incorreta: os requisitos de certificado no cliente foram invertidos entre PEAP e EAP-TLS.',
      2: 'Incorreta: ambos exigem certificado válido no servidor RADIUS para autenticar o servidor e proteger o canal.',
      3: 'Incorreta: EAP-TLS e PEAP utilizam túnel TLS apoiado em certificado do servidor.'
    }
  },
  {
    id: 'sarah-7-07',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os modos de autenticação de portas 802.1X em switches gerenciáveis, assinale a afirmação INCORRETA.',
    options: [
      'O modo Multi-Host é o mais seguro para telefone IP e PC pois autentica cada MAC isolado.',
      'O modo Multi-Domain autentica separadamente um dispositivo de Voz e um de Dados na porta.',
      'O modo Multi-Auth exige autenticação individual para cada endereço MAC atrás da porta.',
      'Antes do Access-Accept, a porta controlada bloqueia dados liberando só tráfego EAPoL/política.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. 802.1X (Eixo 7. WI-FI/NAC). Multi-Host libera toda a porta assim que o primeiro MAC autentica (inseguro); quem autentica separadamente são Multi-Domain (voz+dados) e Multi-Auth (por MAC).',
    correctAnalysis:
      'A afirmação incorreta atribui segurança por MAC ao Multi-Host: esse modo autoriza todos os demais equipamentos na porta sem nova autenticação após o primeiro MAC ser aprovado.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): Multi-Domain segrega e autentica um domínio Voice e um Data por porta.',
      2: 'Incorreta (afirmação verdadeira): Multi-Auth autentica individualmente cada endereço MAC conectado.',
      3: 'Incorreta (afirmação verdadeira): a porta controlada bloqueia dados até receber Access-Accept do RADIUS.'
    }
  },
  {
    id: 'sarah-7-08',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual é a função do 4-way handshake do WPA2/WPA3 entre o Access Point e o cliente após definir a PMK?',
    options: [
      'Enviar a PMK em texto claro nos quadros Beacon de sinalização.',
      'Trocar certificados X.509 EAP-TLS dentro dos pacotes EAPOL-Key.',
      'Renovar a concessão DHCP do cliente antes de associar no rádio.',
      'Derivar chaves de sessão PTK e GTK confirmando posse da PMK.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. WPA2/WPA3 (Eixo 7. WI-FI/NAC). O 4-way handshake gera PTK (unicast) e GTK (broadcast/multicast) a partir da PMK sem expor a PMK no rádio.',
    correctAnalysis:
      'O 4-way handshake prova que AP e cliente detêm a mesma PMK e deriva chaves frescas de sessão PTK e GTK para cifrar os quadros de dados.',
    optionErrors: {
      0: 'Incorreta: senhas PSK e PMK nunca são enviadas em texto claro nos quadros Beacon ou EAPOL.',
      1: 'Incorreta: a autenticação EAP-TLS ocorre antes do 4-way handshake justamente para gerar a PMK.',
      2: 'Incorreta: DHCP ocorre apenas em camada 3 após associação e 4-way handshake concluídos.'
    }
  },
  {
    id: 'sarah-7-09',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre projeto de alta densidade Wi-Fi e otimização de roaming (802.11r/k/v), todas estão corretas, EXCETO:',
    options: [
      'Equilibrar potência dos APs reduz o fenômeno de sticky client e interferência co-canal.',
      'Usar canais de 80 MHz na faixa de 2,4 GHz aumenta a capacidade sem sobreposição em alta densidade.',
      'Os padrões 802.11k e 802.11v fornecem listas de APs vizinhos e orientam transição dos clientes.',
      'O padrão 802.11r (Fast BSS Transition) acelera a renegociação de chaves durante o roaming.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. troubleshooting Wi-Fi/NAC (Eixo 7). A banda de 2,4 GHz possui apenas ~70-83 MHz de largura total e recomenda canais de 20 MHz (1, 6, 11); canais de 80 MHz pertencem às faixas de 5 GHz e 6 GHz.',
    correctAnalysis:
      'A exceção propõe canais de 80 MHz em 2,4 GHz: essa largura nem existe no padrão 2,4 GHz e causaria interferência destrutiva total em ambientes de alta densidade.',
    optionErrors: {
      0: 'Incorreta (prática correta): reduzir potência excessiva evita assimetria de enlace (sticky clients).',
      2: 'Incorreta (afirmação correta): 802.11k (Neighbor Report) e 802.11v (BSS Transition) auxiliam o roaming.',
      3: 'Incorreta (afirmação correta): 802.11r reduz latência de reautenticação em roaming VoIP/corporativo.'
    }
  },
  {
    id: 'sarah-7-10',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Comparando RADIUS e TACACS+, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O RADIUS utiliza UDP (portas 1812 e 1813), cifra apenas a senha e combina autenticação e autorização.\n( ) O TACACS+ utiliza TCP porta 49, cifra todo o corpo do pacote e permite autorizar comandos CLI.\n( ) O pacote RADIUS Access-Challenge solicita etapa adicional (como desafio EAP) antes da decisão final.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – F – V.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. RADIUS e autenticação (Eixo 7. WI-FI/NAC). RADIUS = UDP 1812/1813 (V); TACACS+ = TCP 49 com criptografia total do payload e controle granular CLI (V); Access-Challenge é desafio intermediário EAP antes de Access-Accept/Reject (V).',
    correctAnalysis:
      'Todas as três afirmativas são verdadeiras: RADIUS opera em UDP 1812/1813, TACACS+ opera em TCP 49 cifrando todo o corpo e Access-Challenge conduz etapas intermediárias EAP.',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira, pois RADIUS opera sobre UDP 1812/1813 cifrando apenas a senha.',
      1: 'Incorreta: a segunda afirmativa é verdadeira, pois TACACS+ usa TCP 49 com criptografia integral do payload.',
      3: 'Incorreta: a terceira afirmativa é verdadeira, pois Access-Challenge solicita desafios intermediários EAP/token.'
    }
  },
  {
    id: 'sarah-7-11',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual mecanismo e porta permitem ao servidor NAC/ISE reautorizar ou colocar em quarentena uma sessão já ativa no switch?',
    options: [
      'RADIUS CoA (Change of Authorization) na porta UDP 3799.',
      'SNMP Trap enviado pelo switch na porta UDP 162.',
      'RADIUS Accounting-Stop enviado na porta UDP 1813.',
      'TACACS+ Accounting enviado pelo cliente na porta TCP 49.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Cisco ISE, RADIUS e NAC (Eixo 7). RADIUS CoA (RFC 5176, porta padrão UDP 3799) permite ao servidor AAA enviar comandos de desconexão ou troca de perfil/VLAN para sessões em curso no NAS.',
    correctAnalysis:
      'Quando a postura do endpoint muda após o login (ex.: antivírus desativado), o ISE envia um pacote RADIUS CoA (UDP 3799) para o switch aplicar VLAN/ACL de quarentena sem aguardar nova conexão.',
    optionErrors: {
      1: 'Incorreta: SNMP Trap é notificação passiva do switch para o gerente, não reautoriza sessão NAC.',
      2: 'Incorreta: Accounting-Stop é registro enviado pelo switch ao RADIUS após encerramento de sessão.',
      3: 'Incorreta: TACACS+ atende gerência CLI administrativa, não reautorização CoA de sessões 802.1X.'
    }
  },
  {
    id: 'sarah-7-12',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um switch PoE+ (802.3at, até 30 W PSE / 25,5 W PD) tem budget de 370 W. Considerando que o switch reserva 30 W por porta Classe 4 (lado PSE), quantos equipamentos ele alimenta?',
    options: [
      'No máximo 14 equipamentos simultâneos.',
      'No máximo 24 equipamentos simultâneos.',
      'No máximo 16 equipamentos simultâneos.',
      'No máximo 12 equipamentos simultâneos.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. PoE (802.3af 15,4 W PSE / 12,95 W PD; 802.3at 30 W PSE / 25,5 W PD) e cálculo de orçamento de potência (Eixo 8). Com reserva de 30 W por porta Classe 4 no lado PSE, divide-se 370 W / 30 W = 12,33; portanto, o switch alimenta no máximo 12 equipamentos inteiros (12 × 30 = 360 W <= 370 W).',
    correctAnalysis:
      'Considerando a reserva de 30 W por porta Classe 4 no lado PSE (802.3at), 370 / 30 = 12,33: 12 portas consomem 360 W do orçamento, enquanto 13 exigiriam 390 W e excederiam o budget de 370 W.',
    optionErrors: {
      0: 'Incorreta: 14 resultaria de dividir 370 W por 25,5 W (potência entregue ao PD), ignorando a reserva de 30 W no lado PSE informada.',
      1: 'Incorreta: 24 equipamentos demandariam 720 W a 30 W por porta, quase o dobro dos 370 W de budget.',
      2: 'Incorreta: 16 equipamentos exigiriam 480 W de orçamento PSE, ultrapassando os 370 W disponíveis.'
    }
  },

  // ==================== EIXO 8: 8. Telefonia IP. (12 questões) ====================
  {
    id: 'sarah-22',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Leia o texto técnico sobre qualidade de chamadas VoIP:\n\n"A variação irregular no intervalo de chegada dos pacotes RTP denomina-se ________. Em redes corporativas, recomendam-se variação máxima dessa métrica de até ________, latência one-way de até ________ e perda inferior a ________."\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    options: [
      'jitter; 30 ms; 150 ms; 1%.',
      'throughput; 150 ms; 30 ms; 5%.',
      'jitter; 150 ms; 600 ms; 10%.',
      'attenuation; 10 ms; 500 ms; 3%.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4. Requisitos de qualidade de voz (latência, jitter e perda de pacotes) (Eixo 8. Telefonia IP). Os limites referenciais clássicos são jitter <= 30 ms, latência one-way <= 150 ms e perda <= 1%.',
    correctAnalysis:
      'Jitter mede a variação de atraso entre pacotes RTP sucessivos; os limiares recomendados para VoIP são jitter <= 30 ms, latência unidirecional <= 150 ms e perda de pacotes <= 1%.',
    optionErrors: {
      1: 'Incorreta: throughput não é variação de atraso, além de inverter os valores e aceitar 5% de perda.',
      2: 'Incorreta: latência de 600 ms e perda de 10% tornam a chamada ininteligível.',
      3: 'Incorreta: atenuação trata de perda física de sinal e 500 ms/3% excedem os limites de qualidade.'
    }
  },
  {
    id: 'sarah-23',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No protocolo SIP (Session Initiation Protocol), relacione os métodos/respostas à esquerda com sua função à direita.\n\nColuna da Esquerda:\n(I) INVITE\n(II) 200 OK\n(III) ACK\n(IV) BYE\n(V) REGISTER\n\nColuna da Direita:\n(A) Encerra uma sessão VoIP já estabelecida entre os participantes.\n(B) Confirma a resposta final ao INVITE fechando o handshake SIP.\n(C) Informa ao servidor Registrar o IP atual onde o ramal está alcançável.\n(D) Inicia sessão multimídia convidando o destino e levando oferta SDP.\n(E) Indica que a chamada foi aceita pelo destino com resposta final.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-B, IV-A, V-D.',
      'I-D, II-B, III-E, IV-C, V-A.',
      'I-D, II-E, III-B, IV-A, V-C.',
      'I-A, II-E, III-B, IV-D, V-C.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. SIP e RTP (Eixo 8. Telefonia IP). INVITE inicia chamada (D), 200 OK confirma atendimento (E), ACK confirma o 200 OK (B), BYE encerra (A) e REGISTER registra ramal (C).',
    correctAnalysis:
      'Sequência clássica SIP: REGISTER (C) vincula ramal ao IP; INVITE (D) inicia chamada; 200 OK (E) confirma atendimento; ACK (B) conclui o estabelecimento; BYE (A) finaliza a ligação.',
    optionErrors: {
      0: 'Incorreta: inverte INVITE com REGISTER.',
      1: 'Incorreta: troca 200 OK com ACK e BYE com REGISTER.',
      3: 'Incorreta: inverte INVITE com BYE.'
    }
  },
  {
    id: 'sarah-24',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre telefones IP em switches PoE com PC em cascata, considere as afirmativas a seguir:\n\nI. A VLAN de voz é anunciada ao telefone IP pela opção DHCP 150.\nII. A marcação de QoS recomendada para mídia RTP em DiffServ é DSCP EF (valor 46).\nIII. Os padrões 802.3af e 802.3at fornecem até 15,4 W e 30 W na fonte PSE, respectivamente.\nIV. Recomenda-se restringir a porta às VLANs de dados (access) e voz (voice VLAN), evitando trunk amplo.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.6. PoE. I falsa: a opção DHCP 150 indica o servidor TFTP; a VLAN de voz é anunciada por CDP ou LLDP-MED; II verdadeira; III verdadeira; IV verdadeira.',
    correctAnalysis:
      'Gabarito: Somente II, III e IV estão corretas. Verdadeira(s): II, III, IV. I é falsa porque a opção DHCP 150 indica o servidor TFTP; a VLAN de voz é anunciada por CDP ou LLDP-MED.',
    optionErrors: {
      0: 'Incorreta: a afirmativa I é falsa, pois a opção DHCP 150 indica o servidor TFTP; a VLAN de voz é anunciada por CDP ou LLDP-MED; a afirmativa III é verdadeira.',
      1: 'Incorreta: a afirmativa I é falsa, pois a opção DHCP 150 indica o servidor TFTP; a VLAN de voz é anunciada por CDP ou LLDP-MED; a afirmativa II é verdadeira.',
      2: 'Incorreta: a afirmativa I é falsa, pois a opção DHCP 150 indica o servidor TFTP; a VLAN de voz é anunciada por CDP ou LLDP-MED; a afirmativa II é verdadeira; a afirmativa IV é verdadeira.'
    }
  },
  {
    id: 'sarah-8-04',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual codec reduz o consumo de banda em links WAN frente ao G.711 (64 kbps) e quais são suas taxas reais por chamada?',
    options: [
      'G.711 (8 kbps de payload, ~31 kbps totais) em vez de G.729 (64 kbps).',
      'G.729 (8 kbps, ~31 kbps com IP/UDP/RTP + Ethernet L2, 20 ms) ante G.711 (64 kbps, ~87 kbps).',
      'G.722 (8 kbps de payload, ~24 kbps apenas com IP/UDP/RTP em 20 ms) comprimido.',
      'G.711 sobre TCP em pacotes de 20 ms eliminando cabeçalhos IP/UDP/RTP + L2.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Codecs (Eixo 8. Telefonia IP). G.711 = 64 kbps de payload (~80 kbps considerando apenas cabeçalhos IP/UDP/RTP e ~87,2 kbps com IP/UDP/RTP + Ethernet L2, pacotização de 20 ms); G.729 = 8 kbps de payload (~24 kbps apenas com IP/UDP/RTP e ~31,2 kbps com IP/UDP/RTP + Ethernet L2, pacotização de 20 ms).',
    correctAnalysis:
      'G.711 entrega PCM a 64 kbps (~87,2 kbps com cabeçalhos IP/UDP/RTP + Ethernet L2 em pacotes de 20 ms), enquanto G.729 comprime o áudio para 8 kbps (~31,2 kbps com IP/UDP/RTP + Ethernet L2), economizando cerca de 64% de banda.',
    optionErrors: {
      0: 'Incorreta: as taxas dos codecs G.711 (64 kbps) e G.729 (8 kbps) foram invertidas.',
      2: 'Incorreta: G.722 é um codec wideband (HD) que tipicamente opera a 64 kbps, não 8 kbps.',
      3: 'Incorreta: usar TCP não remove cabeçalhos IP/L2 e introduz retransmissões prejudiciais à voz.'
    }
  },
  {
    id: 'sarah-8-05',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre sinalização e transporte de mídia em chamadas SIP/RTP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O protocolo SDP (Session Description Protocol) dentro do SIP negocia IP, portas UDP e codecs aceitos.\n( ) O RTCP utiliza a mesma porta UDP par do fluxo RTP correspondente.\n( ) O RTP utiliza por padrão as portas UDP fixas 5060 e 5061.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.1.2. 1.2. Sinalização e transporte de mídia.. (1) verdadeira; (2) falsa: por convenção o RTCP usa a porta ímpar seguinte à porta par do RTP; (3) falsa: 5060/5061 são portas do SIP/SIPS; o RTP usa portas UDP dinâmicas.',
    correctAnalysis:
      'Gabarito: V – F – F. Verdadeira(s): (1). (2) é falsa porque por convenção o RTCP usa a porta ímpar seguinte à porta par do RTP. (3) é falsa porque 5060/5061 são portas do SIP/SIPS; o RTP usa portas UDP dinâmicas.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois por convenção o RTCP usa a porta ímpar seguinte à porta par do RTP.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois 5060/5061 são portas do SIP/SIPS; o RTP usa portas UDP dinâmicas.'
    }
  },
  {
    id: 'sarah-8-06',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em troncos SIP ligados por um SBC (Session Border Controller), todas as funções são do SBC, EXCETO:',
    options: [
      'Ocultar a topologia interna VoIP (topology hiding) como B2BUA.',
      'Mediar fluxos RTP através de NAT e normalizar cabeçalhos SIP.',
      'Proteger contra inundações SIP, varreduras e fraudes de discagem.',
      'Negociar potência PoE (802.3af/at) e portas 802.1X nos switches.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Voz sobre IP (VoIP) (Eixo 8. Telefonia IP). O SBC faz ocultação de topologia, NAT traversal para SIP/RTP e segurança na borda VoIP; nunca gerencia PoE físico nem 802.1X dos switches de acesso.',
    correctAnalysis:
      'A exceção envolve funções físicas/L2 de switches de acesso: o SBC gerencia sinalização SIP e mídia RTP na fronteira VoIP, sem gerenciar alimentação PoE nem portas 802.1X.',
    optionErrors: {
      0: 'Incorreta (função válida do SBC): o SBC opera como B2BUA ocultando IPs internos da operadora.',
      1: 'Incorreta (função válida do SBC): ancora mídia RTP contornando NAT e ajusta cabeçalhos SIP.',
      2: 'Incorreta (função válida do SBC): aplica rate-limiting e proteção contra fraudes em chamadas.'
    }
  },
  {
    id: 'sarah-8-07',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre Voice VLAN em switches de acesso com telefone IP e PC em cascata, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Na porta com Voice VLAN, o tráfego do telefone segue untagged e o do PC segue tagged 802.1Q.\n( ) O telefone IP descobre o ID da Voice VLAN pela opção DHCP 66.\n( ) Liberar um trunk irrestrito com todas as 4.094 VLANs até a porta do PC é a prática mais segura.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – V – F.',
      'F – F – F.',
      'F – F – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.2. VLAN de voz. (1) falsa: é o inverso: o tráfego de voz segue tagged e o do PC segue untagged na VLAN de acesso; (2) falsa: a opção DHCP 66 indica o servidor TFTP; a Voice VLAN é anunciada por CDP ou LLDP-MED; (3) falsa: trunk irrestrito até a porta do PC cria risco de VLAN hopping.',
    correctAnalysis:
      'Gabarito: F – F – F. Todas as afirmativas são falsas. (1) é falsa porque é o inverso: o tráfego de voz segue tagged e o do PC segue untagged na VLAN de acesso. (2) é falsa porque a opção DHCP 66 indica o servidor TFTP; a Voice VLAN é anunciada por CDP ou LLDP-MED. (3) é falsa porque trunk irrestrito até a porta do PC cria risco de VLAN hopping.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois é o inverso: o tráfego de voz segue tagged e o do PC segue untagged na VLAN de acesso.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois a opção DHCP 66 indica o servidor TFTP; a Voice VLAN é anunciada por CDP ou LLDP-MED.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois trunk irrestrito até a porta do PC cria risco de VLAN hopping.'
    }
  },
  {
    id: 'sarah-8-08',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual fila e marcação DiffServ garantem prioridade estrita aos pacotes RTP de voz em enlaces WAN congestionados?',
    options: [
      'Fila FIFO única com marcação DSCP 0 (Best Effort).',
      'Fila CBWFQ comum tratando RTP com DSCP AF41 (vídeo).',
      'Fila LLQ (Low Latency Queueing) com marcação DSCP EF (46).',
      'Descarte WRED agressivo descartando pacotes RTP em 50% de uso.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. QoS (Eixo 8. Telefonia IP). LLQ (Priority Queueing dentro do CBWFQ) despacha pacotes DSCP EF (46) antes das filas de dados, mantendo jitter baixo.',
    correctAnalysis:
      'A fila LLQ atende pacotes de voz (DSCP EF 46) com prioridade estrita na interface, evitando que rajadas TCP grandes atrasem pacotes de áudio e gerem jitter.',
    optionErrors: {
      0: 'Incorreta: fila FIFO Best Effort faz pacotes de voz ficarem presos atrás de rajadas de dados.',
      1: 'Incorreta: sem prioridade estrita (LLQ), filas ponderadas adicionam jitter; além disso voz usa EF (46), não AF41.',
      3: 'Incorreta: descartar pacotes RTP de voz em congestionamento causa cortes audíveis.'
    }
  },
  {
    id: 'sarah-8-09',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Chamadas externas via tronco SIP através de firewall com NAT completam a sinalização, mas só um lado ouve (one-way audio). Causa típica?',
    options: [
      'Falta de licença DSP do codec G.729 no gateway de saída.',
      'Expiração do TTL do registro DNS SRV _sip._udp na zona.',
      'Ausência de QoS DSCP EF 46 nas portas dos switches LAN.',
      'Endereço IP privado anunciado no corpo SDP ou porta RTP bloqueada.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. troubleshooting e SIP (Eixo 8. Telefonia IP). Quando o corpo SDP anuncia IP privado não roteável através do NAT ou o firewall bloqueia uma direção das portas UDP do RTP, a sinalização completa mas ocorre áudio unilateral.',
    correctAnalysis:
      'Com áudio em apenas um sentido (one-way audio), a sinalização SIP funcionou, porém o fluxo RTP em uma direção não alcança o destino devido a IP privado no SDP ou bloqueio RTP no NAT/firewall.',
    optionErrors: {
      0: 'Incorreta: incompatibilidade de codec falha no estabelecimento inicial (488 Not Acceptable Here), antes do áudio.',
      1: 'Incorreta: DNS SRV resolve apenas o alvo SIP antes do INVITE e não bloqueia uma via RTP.',
      2: 'Incorreta: ausência de QoS degrada qualidade sob congestionamento, não causa silêncio unilateral constante.'
    }
  },
  {
    id: 'sarah-8-10',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual opção DHCP informa ao telefone IP o endereço do servidor TFTP para baixar sua configuração XML e firmware?',
    options: [
      'Opção DHCP 150 (Cisco TFTP) ou Opção 66 (TFTP Server Name).',
      'Opção DHCP 3 (Default Gateway) ou Opção 6 (Servidores DNS).',
      'Opção DHCP 12 (Host Name) ou Opção 15 (Domain Name DNS).',
      'Opção DHCP 82 (Relay Agent) ou Opção 121 (Rotas Estáticas).'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Cisco IP Telephony ou equivalentes (Eixo 8. Telefonia IP). Option 150 (lista de IPs TFTP Cisco) ou Option 66 entrega ao aparelho onde baixar sua configuração.',
    correctAnalysis:
      'Após receber IP na Voice VLAN, o telefone IP lê a Option 150 (ou 66) na resposta DHCP para localizar o servidor TFTP/HTTP de provisionamento e baixar seu perfil XML.',
    optionErrors: {
      1: 'Incorreta: Options 3 e 6 informam apenas gateway padrão e servidores DNS.',
      2: 'Incorreta: Options 12 e 15 informam hostname e sufixo de domínio DNS ao cliente.',
      3: 'Incorreta: Option 82 atua no relay DHCP e Option 121 injeta rotas estáticas classless.'
    }
  },
  {
    id: 'sarah-8-11',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre diagnóstico de quedas SIP exatamente aos 32 segundos e requisitos elétricos PoE, assinale a afirmação INCORRETA.',
    options: [
      'Chamada SIP que cai em ~32 segundos após atendida indica falha na entrega do ACK ao 200 OK.',
      'Em SIP, o temporizador padrão 64 × T1 (32 segundos) pertence exclusivamente ao codec G.711 no switch PoE.',
      'Um switch IEEE 802.3af entrega até 15,4 W na porta PSE garantindo 12,95 W efetivos ao aparelho PD.',
      'Um switch IEEE 802.3at (PoE+) fornece até 30 W na fonte PSE garantindo 25,5 W efetivos no PD.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. troubleshooting SIP (RFC 3261) e PoE (Eixo 8). O timeout de 32 segundos (64 × T1, sendo T1 = 500 ms) é um temporizador da máquina de transação SIP para retransmissão do 200 OK sem ACK (comum com SIP ALG defeituoso/NAT no cabeçalho Contact), sem nenhuma relação com G.711 ou PoE.',
    correctAnalysis:
      'A afirmação incorreta atribui o temporizador de transação SIP de 32 s (64 × T1 da RFC 3261) ao codec G.711 no switch PoE; na realidade, trata-se de ausência do pacote ACK confirmando o 200 OK.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): sem receber ACK para o 200 OK em 64 × T1 (~32 s), o UAS envia BYE encerrando a ligação.',
      2: 'Incorreta (afirmação verdadeira): valores oficiais do PoE 802.3af são 15,4 W (PSE) e 12,95 W (PD).',
      3: 'Incorreta (afirmação verdadeira): valores oficiais do PoE+ 802.3at são 30 W (PSE) e 25,5 W (PD).'
    }
  },
  {
    id: 'sarah-8-12',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Quantas chamadas VoIP simultâneas G.729 (~31,2 kbps com IP/UDP/RTP + Ethernet L2, 20 ms) cabem em um link de 1 Mbps (1.000 kbps)?',
    options: [
      'Até 11 chamadas simultâneas.',
      'Até 32 chamadas simultâneas.',
      'Até 41 chamadas simultâneas.',
      'Até 125 chamadas simultâneas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Codecs e dimensionamento de banda VoIP (Eixo 8). Dividindo 1.000 kbps por 31,2 kbps obtém-se 32,05; portanto o enlace comporta no máximo 32 chamadas simultâneas com G.729.',
    correctAnalysis:
      'Cada chamada G.729 com cabeçalhos IP/UDP/RTP + Ethernet L2 em pacotes de 20 ms consome ~31,2 kbps; 1.000 / 31,2 = 32,05, resultando em até 32 ligações simultâneas.',
    optionErrors: {
      0: 'Incorreta: 11 chamadas simultâneas (~87,2 kbps cada) corresponde à capacidade usando codec G.711 (1.000 / 87,2 = 11,4).',
      2: 'Incorreta: ~41 chamadas resultaria de dividir apenas por 24 kbps ignorando os cabeçalhos Ethernet L2.',
      3: 'Incorreta: 125 resultaria de dividir apenas pelos 8 kbps puros de payload sem nenhum cabeçalho de rede.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 5 (+14) ====================
  {
    id: 'sarah-5-13',
    editalItemId: '5.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual característica distingue um hipervisor Tipo 1 (bare-metal) de um hipervisor Tipo 2 (hosted) em datacenters corporativos?',
    options: [
      'O Tipo 1 executa diretamente sobre o hardware físico sem sistema operacional hospedeiro.',
      'O Tipo 2 gerencia múltiplos nós em cluster vSAN sem acesso a memória RAM física.',
      'O Tipo 1 depende obrigatoriamente de Windows ou Linux desktop instalado antes na máquina.',
      'O Tipo 2 oferece menor latência de I/O por eliminar camadas de kernel hospedeiro.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Virtualização e hipervisores (Eixo 5). Hipervisores Tipo 1 (VMware ESXi, Microsoft Hyper-V bare-metal, KVM) rodam diretamente sobre o hardware, oferecendo menor sobrecarga e melhor isolamento que os Tipo 2 (VirtualBox, VMware Workstation).',
    correctAnalysis:
      'O hipervisor Tipo 1 (bare-metal) controla hardware, CPU, RAM e I/O diretamente, sem depender de um sistema operacional hospedeiro intermediário.',
    optionErrors: {
      1: 'Incorreta: clusters corporativos e vSAN utilizam hipervisores Tipo 1 bare-metal.',
      2: 'Incorreta: depender de um SO hospedeiro desktop caracteriza o hipervisor Tipo 2.',
      3: 'Incorreta: justamente por passar pelo SO hospedeiro, o Tipo 2 tem maior sobrecarga e latência.'
    }
  },
  {
    id: 'sarah-5-14',
    editalItemId: '5.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre virtualização de hardware e hipervisores, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) As extensões Intel VT-x e AMD-V são exigidas apenas na paravirtualização.\n( ) Memory Ballooning é a técnica em que o driver do guest devolve memória ociosa ao hipervisor sob contenção.\n( ) A paravirtualização utiliza drivers e hypercalls conscientes do hipervisor para otimizar operações de I/O.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.1. 1.1. Virtualização e hipervisores.. (1) falsa: VT-x/AMD-V viabilizam a virtualização total assistida por hardware, sem modificar o SO convidado; (2) verdadeira; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – V – V. Verdadeira(s): (2), (3). (1) é falsa porque VT-x/AMD-V viabilizam a virtualização total assistida por hardware, sem modificar o SO convidado.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois VT-x/AMD-V viabilizam a virtualização total assistida por hardware, sem modificar o SO convidado.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-5-15',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em ambientes VMware vSphere, qual função exige obrigatoriamente o vCenter Server por não existir na administração isolada de um único host ESXi?',
    options: [
      'Criar uma máquina virtual local ligada a um datastore VMFS local.',
      'Configurar endereço IP de gerenciamento na interface VMkernel vmk0.',
      'Orquestrar cluster vSphere HA, DRS e migrações vMotion entre múltiplos hosts.',
      'Acessar o console remoto de uma VM específica via navegador.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. VMware vSphere/vCenter/ESXi (Eixo 5). Recursos de cluster e orquestração multi-host como vMotion, DRS (Distributed Resource Scheduler), vSphere HA e Distributed Switch requerem o plano de controle centralizado do vCenter Server.',
    correctAnalysis:
      'O vCenter Server centraliza a gestão de múltiplos hosts ESXi e habilita vSphere HA, DRS, vMotion e políticas de cluster.',
    optionErrors: {
      0: 'Incorreta: um host ESXi standalone cria e executa VMs localmente via Host Client.',
      1: 'Incorreta: a rede de gerência VMkernel pode ser configurada direto no DCUI ou Host Client do ESXi.',
      3: 'Incorreta: o console web de uma VM funciona diretamente no Host Client de cada ESXi.'
    }
  },
  {
    id: 'sarah-5-16',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os recursos do VMware vSphere/ESXi e equivalentes corporativos, assinale a afirmação INCORRETA.',
    options: [
      'O DRS monitora carga de CPU/RAM dos hosts do cluster e sugere ou executa vMotion automático.',
      'KVM (integrado ao kernel Linux) e Hyper-V são equivalentes corporativos de virtualização Tipo 1.',
      'Templates e clones no vCenter aceleram o provisionamento padronizado de novos servidores.',
      'O vSphere DRS reinicia VMs paradas após queda física de um host sem precisar do vSphere HA.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. VMware vSphere/vCenter/ESXi (Eixo 5). Quem detecta falha de host ESXi e reinicia automaticamente as VMs afetadas nos demais hosts do cluster é o vSphere HA; o DRS apenas balanceia carga de VMs já em execução via vMotion.',
    correctAnalysis:
      'A afirmação incorreta confunde vSphere DRS (balanceamento de carga em execução) com vSphere HA (reinício automático após falha de host).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o DRS equilibra recursos do cluster migrando VMs a quente via vMotion.',
      1: 'Incorreta (afirmação verdadeira): KVM e Hyper-V compõem alternativas equivalentes de virtualização corporativa.',
      2: 'Incorreta (afirmação verdadeira): templates geram imagens-mestre consistentes para deploy rápido.'
    }
  },
  {
    id: 'sarah-5-17',
    editalItemId: '5.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual diferença define os discos virtuais Thin Provisioned frente aos Thick Provision Eager Zeroed em um datastore VMFS?',
    options: [
      'Thin aloca blocos sob demanda conforme escrita; Eager Zeroed pré-aloca e zera todo o espaço na criação.',
      'Thin zera todos os blocos antecipadamente; Eager Zeroed só consome espaço quando há snapshot.',
      'Thin atua somente em datastores vSAN; Eager Zeroed impede qualquer criação de snapshot de VM.',
      'Ambos reservam 100% da capacidade física imediata no array antes de ligar a VM.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. datastore (Eixo 5). Discos Thin crescem conforme dados são gravados (economizam storage inicial mas permitem overcommitment); Thick Provision Eager Zeroed reserva e zera todos os blocos no provisionamento (máxima previsibilidade e exigência de clusters como MSCS/WSFC).',
    correctAnalysis:
      'Thin Provisioning aloca espaço dinamicamente sob demanda, enquanto Thick Provision Eager Zeroed reserva e limpa (zera) toda a área no momento da criação.',
    optionErrors: {
      1: 'Incorreta: inverte os comportamentos de Thin e Eager Zeroed.',
      2: 'Incorreta: VMFS suporta Thin, Lazy Zeroed e Eager Zeroed em SANs corporativas, todos compatíveis com snapshots.',
      3: 'Incorreta: apenas os modos Thick reservam 100% do tamanho nominal imediatamente.'
    }
  },
  {
    id: 'sarah-5-18',
    editalItemId: '5.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um datastore VMFS de 4 TB hospeda VMs em Thin Provisioning cuja soma nominal é 6 TB. O que ocorre com as VMs se a ocupação física real atingir 100% do datastore?',
    options: [
      'O hipervisor converte automaticamente os discos para NFS sem pausar gravações.',
      'As VMs que tentarem alocar novos blocos são pausadas ou travam por falta de espaço físico.',
      'O datastore VMFS dobra sua capacidade física comprimindo arquivos do ESXi em memória.',
      'As VMs perdem apenas acesso de leitura mantendo escritas contínuas no array.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. datastore (Eixo 5). O overcommitment em Thin Provisioning exige monitoramento estrito de capacidade: ao esgotar 100% dos blocos físicos do datastore, VMs que precisarem expandir seus arquivos .vmdk entram em estado stun/pausado até haver espaço livre.',
    correctAnalysis:
      'Quando o espaço físico real do datastore acaba sob Thin Provisioning, gravações que exigem novos blocos falham e o hipervisor congela (stun) as VMs afetadas.',
    optionErrors: {
      0: 'Incorreta: VMFS não se converte automaticamente em datastore NFS.',
      2: 'Incorreta: VMFS não dobra capacidade física nem mantém escritas sem blocos livres.',
      3: 'Incorreta: leituras continuam possíveis nos blocos existentes, mas novas alocações de escrita travam a VM.'
    }
  },
  {
    id: 'sarah-5-19',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma SAN Fibre Channel corporativa, como atuam complementarmente o Zoning e o LUN Masking para proteger os volumes de armazenamento?',
    options: [
      'Zoning criptografa blocos no SSD; LUN Masking define compressão no host.',
      'Zoning opera apenas em iSCSI L3; LUN Masking atua dentro do SO convidado.',
      'Zoning isola WWNs nos switches FC; LUN Masking libera LUNs no storage.',
      'Ambos atuam somente na camada física óptica ajustando velocidade de HBA.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. LUN (Eixo 5). O Zoning é configurado no fabric (switches Fibre Channel) agrupando WWPNs de iniciadores (HBAs) e alvos (portas do storage); o LUN Masking é configurado no próprio storage associando cada LUN apenas aos WWNs/IQNs autorizados.',
    correctAnalysis:
      'Zoning segmenta a visibilidade no switch SAN (fabric), enquanto LUN Masking restringe no array de discos quais iniciadores montam cada unidade lógica (LUN).',
    optionErrors: {
      0: 'Incorreta: nenhum dos dois mecanismos realiza criptografia ou compressão de blocos.',
      1: 'Incorreta: Zoning reside no switch SAN FC e LUN Masking reside no controlador do storage.',
      3: 'Incorreta: ambos são controles lógicos de acesso/visibilidade na SAN, não negociação de velocidade óptica.'
    }
  },
  {
    id: 'sarah-5-20',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre LUNs, Zoning e LUN Masking em ambientes SAN, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Uma LUN (Logical Unit Number) é o identificador de um volume lógico exposto pelo storage ao servidor via SCSI.\n( ) O LUN Masking é configurado nos switches Fibre Channel e o Zoning no storage array.\n( ) Expor a mesma LUN VMFS sem máscara adequada para hosts não coordenados fora do cluster pode causar corrupção de dados.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.7. LUN. (1) verdadeira; (2) falsa: é o inverso: o Zoning é feito nos switches FC e o LUN Masking no storage; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: V – F – V. Verdadeira(s): (1), (3). (2) é falsa porque é o inverso: o Zoning é feito nos switches FC e o LUN Masking no storage.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois é o inverso: o Zoning é feito nos switches FC e o LUN Masking no storage.',
      2: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-5-21',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um banco de dados gera 300 IOPS de escrita aleatória sobre um volume configurado em RAID 5 (penalidade de escrita = 4). Quantos IOPS de backend são exigidos dos discos?',
    options: [
      '1.200 IOPS nos discos.',
      '600 IOPS nos discos.',
      '1.800 IOPS nos discos.',
      '300 IOPS nos discos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. RAID (Eixo 5). Em RAID 5, cada escrita aleatória exige 4 operações de disco (ler dado antigo, ler paridade antiga, gravar novo dado, gravar nova paridade). Logo, 300 × 4 = 1.200 IOPS de backend.',
    correctAnalysis:
      'Multiplicando os 300 IOPS de escrita solicitados pela aplicação pela write penalty 4 do RAID 5, os discos físicos processam 1.200 IOPS.',
    optionErrors: {
      1: 'Incorreta: 600 IOPS (fator 2) seria a penalidade de escrita de RAID 1 ou RAID 10.',
      2: 'Incorreta: 1.800 IOPS (fator 6) corresponde à write penalty do RAID 6.',
      3: 'Incorreta: 300 IOPS (fator 1) ocorreria apenas em RAID 0 sem redundância.'
    }
  },
  {
    id: 'sarah-5-22',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre Hot Spare, rebuild e penalidade de escrita (write penalty) em arranjos RAID, assinale a afirmação INCORRETA.',
    options: [
      'Durante o rebuild de um disco falho em RAID 5/6, o desempenho de leitura e escrita do array degrada-se.',
      'O disco Hot Spare é somado continuamente à capacidade útil diária para expandir partições em produção.',
      'Um Hot Spare entra em ação automaticamente assumindo o lugar do disco defeituoso para iniciar o rebuild.',
      'Quanto maiores os discos mecânicos em RAID 5, maior o tempo de rebuild e o risco de falha dupla URE.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. RAID (Eixo 5). O disco Hot Spare permanece em reserva (standby) sem armazenar dados nem integrar a capacidade útil ativa até que um disco do grupo RAID falhe.',
    correctAnalysis:
      'A afirmação incorreta inclui o Hot Spare na capacidade útil diária de produção: ele fica ocioso como sobressalente pronto para reconstrução automática após falha.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a leitura intensiva de paridade durante o rebuild reduz IOPS disponíveis.',
      2: 'Incorreta (afirmação verdadeira): essa é a finalidade exata de um Global ou Dedicated Hot Spare.',
      3: 'Incorreta (afirmação verdadeira): rebuilds longos em discos de alta capacidade aumentam a janela para segunda falha.'
    }
  },
  {
    id: 'sarah-5-23',
    editalItemId: '5.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na análise de desempenho de armazenamento via utilitário esxtop no ESXi, o que representam os contadores DAVG, KAVG e GAVG?',
    options: [
      'Capacidade total, espaço em thin e espaço livre no datastore VMFS.',
      'Perda de pacotes TCP, jitter de voz e largura de banda de vMotion.',
      'Latência do storage (DAVG), fila VMkernel (KAVG) e total na VM (GAVG).',
      'Tempo de inicialização da VM, taxa de paginação e consumo de CPU.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. latência (Eixo 5). No esxtop (aba `u`/`d`), DAVG/cmd mede o tempo gasto após o comando sair da HBA rumo ao storage; KAVG/cmd mede a espera dentro das filas do VMkernel; e GAVG/cmd = DAVG + KAVG reflete o atraso total percebido pelo sistema convidado.',
    correctAnalysis:
      'GAVG (Guest Average) é a soma de DAVG (tempo de resposta do dispositivo/SAN) com KAVG (tempo retido na pilha/filas do VMkernel).',
    optionErrors: {
      0: 'Incorreta: DAVG/KAVG/GAVG medem latência em milissegundos, não capacidade em gigabytes.',
      1: 'Incorreta: métricas de rede ficam na aba `n`, enquanto DAVG/KAVG/GAVG são contadores de armazenamento SCSI.',
      3: 'Incorreta: DAVG/KAVG/GAVG referem-se especificamente à latência de I/O de disco, não a boot ou consumo de CPU.'
    }
  },
  {
    id: 'sarah-5-24',
    editalItemId: '5.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma VM apresenta lentidão extrema de disco e o esxtop mostra DAVG/cmd = 38 ms e KAVG/cmd = 0,2 ms. Onde está localizado o gargalo provável?',
    options: [
      'No excesso de memória RAM alocada ao kernel do vCenter Server.',
      'No driver de rede virtual VMXNET3 dentro do sistema operacional convidado.',
      'Na saturação exclusiva da fila interna do VMkernel dentro do host ESXi.',
      'No array de armazenamento, switches SAN ou enlaces físicos fora do host ESXi.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. latência (Eixo 5). Quando KAVG/cmd permanece próximo de zero (<1 ms) e DAVG/cmd dispara (>20–30 ms), o host ESXi não está enfileirando comandos localmente: a demora está ocorrendo entre a saída da HBA/NIC e o storage (rede SAN, controladora ou discos saturados).',
    correctAnalysis:
      'DAVG alto com KAVG baixo indica que a latência vem da camada externa de armazenamento/SAN após o comando deixar o kernel do ESXi.',
    optionErrors: {
      0: 'Incorreta: o vCenter Server atua no plano de gerenciamento e não processa o caminho de I/O das VMs.',
      1: 'Incorreta: VMXNET3 é adaptador de rede virtual Ethernet, não controlador de disco SCSI.',
      2: 'Incorreta: saturação interna na fila do VMkernel elevaria significativamente o contador KAVG/cmd.'
    }
  },
  {
    id: 'sarah-5-25',
    editalItemId: '5.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No troubleshooting de armazenamento do VMware ESXi, qual a diferença entre os estados APD (All Paths Down) e PDL (Permanent Device Loss)?',
    options: [
      'APD é perda de acesso sem aviso definitivo (pode voltar); PDL ocorre quando o storage sinaliza remoção permanente da LUN.',
      'PDL indica queda rápida de 1 segundo em cabo iSCSI; APD significa formatação proposital do datastore.',
      'APD ocorre somente em switches Ethernet sem STP; PDL ocorre apenas em discos locais SATA.',
      'Ambos exigem obrigatoriamente reinstalação completa do ESXi por corrupção do vmkernel.log.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting (Eixo 5). Em APD, o host perde todos os caminhos sem receber código SCSI de remoção definitiva (ex.: falha de switch SAN ou reboot de controladora); em PDL, o array retorna SCSI sense code explícito avisando que a LUN foi desmascarada/removida permanentemente.',
    correctAnalysis:
      'APD caracteriza ausência indeterminada de resposta de todos os caminhos, enquanto PDL é notificação SCSI explícita do storage de que o dispositivo não retornará.',
    optionErrors: {
      1: 'Incorreta: inverte a gravidade e a definição dos estados APD e PDL.',
      2: 'Incorreta: APD e PDL aplicam-se a dispositivos de armazenamento SAN (FC/iSCSI) gerenciados pelo PSA/NMP.',
      3: 'Incorreta: vmkernel.log registra eventos APD/PDL para diagnóstico sem exigir reinstalação do hipervisor.'
    }
  },
  {
    id: 'sarah-5-26',
    editalItemId: '5.2.12',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre ferramentas de troubleshooting em VMware ESXi, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No esxtop, a tecla \'d\' alterna para as estatísticas de rede das VMs.\n( ) O arquivo /var/log/vmkernel.log registra eventos críticos de hardware, drivers, rede VMkernel e armazenamento SAN.\n( ) O VM Component Protection (VMCP) reage apenas a eventos APD, ignorando eventos PDL.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.12. troubleshooting. (1) falsa: no esxtop a tecla \'d\' mostra o adaptador de disco; rede é a tecla \'n\'; (2) verdadeira; (3) falsa: o VMCP trata tanto APD quanto PDL.',
    correctAnalysis:
      'Gabarito: F – V – F. Verdadeira(s): (2). (1) é falsa porque no esxtop a tecla \'d\' mostra o adaptador de disco; rede é a tecla \'n\'. (3) é falsa porque o VMCP trata tanto APD quanto PDL.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois no esxtop a tecla \'d\' mostra o adaptador de disco; rede é a tecla \'n\'.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o VMCP trata tanto APD quanto PDL.'
    }
  },
  {
    id: 'sarah-5-27',
    editalItemId: '5.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor físico possui 16 núcleos físicos (*pCPUs*) e executa 10 máquinas virtuais concorrentes em um hipervisor Tipo 1. Uma VM de banco de dados recebeu 16 *vCPUs*, embora consuma em média apenas 15% de processamento, e passou a apresentar travamentos e latência elevada mesmo com o servidor abaixo de 50% de uso total. Qual é a causa técnica provável?',
    options: [
      'O hipervisor reserva RAM proporcional ao número de vCPUs, forçando swapping imediato em disco.',
      'As extensões Intel VT-x restringem a execução paralela a no máximo 8 vCPUs por máquina virtual.',
      'Os processos internos da VM sofrem isolamento por cgroups, impedindo o uso acima de 15% de CPU.',
      'O excesso de vCPUs frente aos 16 núcleos físicos agrava a fila de co-escalonamento (CPU Ready).'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.1. Virtualização e Hipervisores (Overcommit e Escalabilidade de vCPU). Atribuir tantas *vCPUs* quanto todos os núcleos físicos do hospedeiro (16 vCPUs em um host de 16 *pCPUs* compartilhado por 10 VMs) força o escalonador do hipervisor a aguardar disponibilidade simultânea de múltiplos núcleos físicos (*co-scheduling*), elevando o tempo de espera (**CPU Ready**) e degradando a resposta mesmo com CPU média moderada.',
    correctAnalysis:
      'O dimensionamento exagerado de 16 vCPUs em um host compartilhado de 16 pCPUs aumenta a contenção e o tempo de espera no escalonamento de CPU (CPU Ready); reduzir para a quantidade real necessária melhora o desempenho.',
    optionErrors: {
      0: 'Incorreta: a alocação de vCPUs não trava proporcionalmente a RAM física a ponto de disparar swapping sem pressão de memória.',
      1: 'Incorreta: Intel VT-x/AMD-V não impõem limite fixo de 8 vCPUs por VM.',
      2: 'Incorreta: cgroups são mecanismos de isolamento de contêineres em kernel Linux, não causa de fila em vCPUs de VM.'
    }
  },
  {
    id: 'sarah-5-28',
    editalItemId: '5.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos e técnicas de virtualização à esquerda com suas respectivas descrições técnicas à direita.\n\nColuna da Esquerda:\n(I) Tradução binária em software\n(II) Virtualização assistida por hardware\n(III) Paravirtualização\n(IV) Contêiner em Linux\n(V) Ballooning e TPS\n\nColuna da Direita:\n(A) Emprega extensões de CPU (Intel VT-x/AMD-V) para rodar o SO convidado sem alterações no kernel.\n(B) Utiliza kernel ou drivers modificados com hypercalls diretas ao hipervisor para reduzir sobrecarga.\n(C) Intercepta e reescreve dinamicamente instruções privilegiadas do convidado sem suporte de CPU.\n(D) Técnicas de overcommit que recuperam memória ociosa ou deduplicam páginas idênticas antes do swap.\n(E) Isola processos em espaço de usuário via namespaces e cgroups compartilhando o kernel hospedeiro.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-B, III-A, IV-E, V-D.',
      'I-A, II-C, III-B, IV-E, V-D.',
      'I-C, II-A, III-B, IV-D, V-E.',
      'I-C, II-A, III-B, IV-E, V-D.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.1. Virtualização e Hipervisores. (I-C) **Tradução binária** intercepta/reescreve instruções não virtualizáveis de x86 legado em software; (II-A) **Assistida por hardware** usa Intel VT-x/AMD-V sem modificar o SO convidado; (III-B) **Paravirtualização** usa *hypercalls*/drivers conscientes do hipervisor; (IV-E) **Contêiner** compartilha o kernel com *namespaces* e *cgroups*; (V-D) **Ballooning e TPS** (*Transparent Page Sharing*) recuperam/deduplicam RAM em *overcommit*.',
    correctAnalysis:
      'Associação correta: I-C, II-A, III-B, IV-E e V-D.',
    optionErrors: {
      0: 'Incorreta: inverte virtualização assistida por hardware (II-A) e paravirtualização (III-B).',
      1: 'Incorreta: inverte tradução binária em software (I-C) e virtualização assistida por hardware (II-A).',
      2: 'Incorreta: inverte contêiner em Linux (IV-E) e Ballooning/TPS (V-D).'
    }
  },
  {
    id: 'sarah-5-29',
    editalItemId: '5.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquiteturas de máquinas virtuais, contêineres e virtualização de memória, considere as afirmativas:\n\nI. Máquinas virtuais virtualizam hardware completo e executam um sistema operacional com kernel próprio, enquanto contêineres compartilham o kernel do sistema hospedeiro utilizando isolamento via *namespaces* e *cgroups*.\nII. Recursos de paginação aninhada em hardware, como Intel EPT (*Extended Page Tables*) e AMD RVI (*Rapid Virtualization Indexing*), reduzem a sobrecarga da tradução de endereços de memória entre o SO convidado e a RAM física.\nIII. No *overcommit* de memória RAM, mecanismos como *Transparent Page Sharing* e *Memory Ballooning* atuam para economizar ou recuperar memória ociosa antes que o hipervisor recorra ao *swapping* em disco.\nIV. Contêineres nativos em Linux exigem obrigatoriamente extensões de processador Intel VT-x ou AMD-V habilitadas na BIOS para isolar processos com *namespaces* e *cgroups*.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.1. Virtualização e Contêineres. I verdadeira (VM possui kernel próprio; contêiner compartilha kernel via *namespaces*/*cgroups*); II verdadeira (EPT/RVI aceleram tradução de endereços virtual -> físico em hardware); III verdadeira (TPS e Ballooning evitam o *swap* lento do hipervisor); IV falsa: contêineres nativos em Linux são recursos puramente do **kernel do sistema operacional** (*namespaces* + *cgroups*) e **não exigem** extensões de virtualização de hardware VT-x/AMD-V.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV erra ao exigir VT-x/AMD-V para contêineres nativos em Linux, que usam isolamento no kernel do SO hospedeiro.',
    optionErrors: {
      0: 'Incorreta: a afirmativa III também é verdadeira sobre TPS e Memory Ballooning precedendo o swap em disco.',
      2: 'Incorreta: a afirmativa I é verdadeira e a IV é falsa, pois contêineres nativos não dependem de VT-x/AMD-V.',
      3: 'Incorreta: a afirmativa II é verdadeira e a IV é falsa quanto à exigência de VT-x/AMD-V.'
    }
  },
  {
    id: 'sarah-5-30',
    editalItemId: '5.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre hipervisores, técnicas de virtualização e gerenciamento de recursos em computação, assinale a afirmação INCORRETA.',
    options: [
      'Em um hipervisor Tipo 2 (hosted), as requisições de E/S das máquinas virtuais passam pelo sistema operacional hospedeiro antes do hardware físico.',
      'Na paravirtualização de dispositivos (como drivers virtio), o sistema convidado coopera com o hipervisor para reduzir intercepções custosas.',
      'Na virtualização assistida por hardware (VT-x/AMD-V), cada vCPU atribuída a uma VM trava um núcleo físico em exclusividade, impedindo overcommit.',
      'Quando a contenção de RAM excede a capacidade de recuperação do ballooning, o hipervisor pode comprimir páginas ou realizar swap em disco.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.1. Hipervisores e Overcommit de CPU. A alternativa C é **incorreta**: mesmo com virtualização assistida por hardware (Intel VT-x/AMD-V), as *vCPUs* são escalonadas em compartilhamento de tempo (*time-slicing*) sobre os núcleos físicos (*pCPUs*) disponíveis, permitindo justamente o **overcommit de CPU** entre várias máquinas virtuais (salvo quando o administrador configura afinidade exclusiva/*CPU pinning* manual).',
    correctAnalysis:
      'A afirmação C é incorreta porque vCPUs compartilham dinamicamente os núcleos físicos sob gerência do escalonador do hipervisor, permitindo overcommit de CPU.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): hipervisores Tipo 2 rodam como processo sobre um SO hospedeiro intermediário.',
      1: 'Incorreta (afirmação verdadeira): drivers paravirtualizados (ex.: virtio) reduzem saídas de contexto (VM exits) e latência de I/O.',
      3: 'Incorreta (afirmação verdadeira): compressão de memória e swap do hipervisor são camadas posteriores ao ballooning sob pressão severa.'
    }
  },
  {
    id: 'sarah-5-31',
    editalItemId: '5.1.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre fundamentos de virtualização:\n\nA técnica que permite executar sistemas operacionais convidados sem modificar seu núcleo por meio de extensões de processador como Intel VT-x e AMD-V denomina-se _____; já o isolamento leve de aplicações que compartilha o mesmo kernel do sistema operacional hospedeiro por meio de `namespaces` e `cgroups` caracteriza os _____; por fim, quando o hipervisor atribui às VMs mais memória virtual somada do que a RAM física disponível no servidor, pratica-se _____.',
    options: [
      'paravirtualização por hypercalls / hipervisores Tipo 1 / swapping',
      'virtualização assistida por hardware / hipervisores Tipo 2 / paging',
      'virtualização assistida por hardware / contêineres / overcommit de RAM',
      'tradução binária em software / contêineres / alocação estática'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.1. Virtualização. Intel VT-x e AMD-V viabilizam a **virtualização assistida por hardware**; o compartilhamento de kernel com `namespaces` e `cgroups` define os **contêineres**; e atribuir mais RAM virtual somada do que a memória física instalada caracteriza o **overcommit de RAM** (*memory overcommitment*).',
    correctAnalysis:
      'Respectivamente: virtualização assistida por hardware (VT-x/AMD-V), contêineres (namespaces/cgroups) e overcommit de RAM.',
    optionErrors: {
      0: 'Incorreta: paravirtualização usa modificações/hypercalls no convidado (não extensões VT-x sem alteração) e o conceito de sobrealocação é overcommit.',
      1: 'Incorreta: hipervisores Tipo 2 virtualizam hardware completo sobre SO hospedeiro (não são contêineres).',
      3: 'Incorreta: tradução binária atua em software sem depender de VT-x/AMD-V, e alocação estática não descreve sobrealocação.'
    }
  },
  {
    id: 'sarah-5-32',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em servidores corporativos com armazenamento em estado sólido, qual característica arquitetural explica a latência drasticamente menor e o paralelismo superior do padrão NVMe frente às interfaces SATA e SAS?',
    options: [
      'NVMe encapsula a fila única AHCI de 32 comandos diretamente sobre cabos SATA de 6 Gbps.',
      'NVMe opera em barramento SAS serial de 12 Gbps utilizando fila única de até 256 comandos.',
      'NVMe exige controladora AHCI dedicada no chipset para converter sinais PCIe em SATA.',
      'NVMe comunica-se diretamente via barramento PCIe suportando até 64 mil filas paralelas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.2. Padrões de Disco e Interfaces. Enquanto **SATA/AHCI** trabalha com 1 fila de até 32 comandos (half-duplex) e **SAS** com 1 fila de até 256 comandos em protocolo SCSI, o **NVMe** (*Non-Volatile Memory Express*) foi projetado especificamente para memórias não voláteis diretamente sobre o barramento **PCIe**, suportando até **64K filas com 64K comandos por fila** e latência na casa de microssegundos.',
    correctAnalysis:
      'O protocolo NVMe conecta-se diretamente ao barramento PCIe e elimina o gargalo de fila única AHCI/SAS, oferecendo até 64.000 filas paralelas com 64.000 comandos cada.',
    optionErrors: {
      0: 'Incorreta: fila única de 32 comandos a 6 Gbps é característica do padrão SATA/AHCI, não do NVMe.',
      1: 'Incorreta: fila única de 256 comandos a 12 Gbps caracteriza a interface SAS, não o protocolo NVMe sobre PCIe.',
      2: 'Incorreta: o NVMe substitui e dispensa a controladora AHCI e a sinalização SATA.'
    }
  },
  {
    id: 'sarah-5-33',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os padrões de interfaces, encapsulamentos e conceitos de armazenamento à esquerda com suas definições técnicas à direita.\n\nColuna da Esquerda:\n(I) Interface SATA (AHCI)\n(II) Interface SAS\n(III) Fatores de forma U.2 / U.3 e M.2\n(IV) DAS (Direct-Attached Storage)\n(V) Thin Provisioning\n\nColuna da Direita:\n(A) Armazenamento acoplado diretamente a um servidor (interno ou via cabo HBA) sem rede compartilhada.\n(B) Padrão full-duplex com suporte nativo a dual-port para duas controladoras e fila de 256 comandos.\n(C) Formatos físicos de SSDs corporativos hot-swap de 2,5" (U.2/U.3) ou módulos compactos PCIe (M.2).\n(D) Alocação sob demanda que consome blocos físicos do pool somente quando dados são gravados.\n(E) Padrão half-duplex de menor custo com fila de 32 comandos, comum em arquivamento frio.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-C, III-B, IV-A, V-D.',
      'I-B, II-E, III-C, IV-A, V-D.',
      'I-E, II-B, III-C, IV-D, V-A.',
      'I-E, II-B, III-C, IV-A, V-D.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.2. Padrões de Disco e Armazenamento. (I-E) **SATA** é half-duplex com 32 comandos AHCI; (II-B) **SAS** é full-duplex, dual-port e 256 comandos; (III-C) **U.2/U.3 e M.2** são fatores de forma físicos para SSDs/NVMe; (IV-A) **DAS** conecta discos diretamente ao host sem rede de storage compartilhada; (V-D) **Thin Provisioning** aloca espaço físico apenas sob gravação.',
    correctAnalysis:
      'Associação exata: I-E, II-B, III-C, IV-A e V-D.',
    optionErrors: {
      0: 'Incorreta: inverte interface SAS (II-B) com fatores de forma U.2/U.3 e M.2 (III-C).',
      1: 'Incorreta: inverte interface SATA (I-E) com interface SAS (II-B).',
      2: 'Incorreta: inverte DAS (IV-A) com Thin Provisioning (V-D).'
    }
  },
  {
    id: 'sarah-5-34',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre modelos de abstração de armazenamento, tipos de mídia e provisionamento de espaço, analise as afirmativas:\n\nI. No armazenamento em bloco (*Block Storage*), o servidor recebe volumes crus sem sistema de arquivos prévio do storage, cabendo ao sistema operacional criar e gerenciar o *filesystem* (como NTFS ou ext4).\nII. No armazenamento de objetos, é possível alterar parcialmente um objeto já gravado reescrevendo apenas os bytes modificados, como em um sistema de arquivos POSIX.\nIII. Em discos HDD, a latência de acesso aleatório é determinada principalmente pela taxa de transferência da interface, e não pelo tempo de busca e pela latência rotacional.\nIV. No provisionamento *Thick* (*Thick Provisioning*), toda a capacidade nominal do volume é reservada imediatamente no pool físico, evitando o risco de exaustão inesperada por *over-allocation*.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e IV estão corretas.',
      'Somente I e II estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.1.2. Serviços de Armazenamento. I verdadeira (*Block Storage* entrega LUNs/blocos brutos formatados pelo SO); II falsa: objetos em *Object Storage* são imutáveis e gravados/substituídos por inteiro (PUT), não havendo escrita parcial *in-place* de bytes como em POSIX; III falsa: no acesso aleatório em HDDs mecânicos, o tempo de busca (*seek time*) e a latência rotacional dominam o atraso total, e não a taxa de transferência da interface; IV verdadeira (*Thick* reserva 100% na criação).',
    correctAnalysis:
      'Gabarito: Somente I e IV estão corretas. Object Storage exige substituição integral do objeto (sem escrita parcial in-place) e no HDD aleatório o tempo de busca e a latência rotacional dominam.',
    optionErrors: {
      1: 'Incorreta: a afirmativa II é falsa, pois objetos são gravados e substituídos por inteiro (sem modificação parcial de bytes in-place).',
      2: 'Incorreta: tanto a afirmativa II quanto a III são falsas.',
      3: 'Incorreta: a afirmativa III é falsa, pois em HDDs aleatórios o atraso é dominado por seek time e latência rotacional, não pela taxa da interface.'
    }
  },
  {
    id: 'sarah-5-35',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre interfaces de disco e modelos de armazenamento e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Discos SAS operam em modo *full-duplex* com conjunto de comandos SCSI e suporte nativo a dupla porta (*dual-port*), permitindo conexão simultânea a duas controladoras redundantes.\n( ) No armazenamento em arquivo (*File Storage*), a estrutura de diretórios, permissões e metadados do sistema de arquivos é gerenciada pelo próprio servidor/dispositivo de armazenamento.\n( ) Um SSD no formato físico M.2 com interface SATA opera nativamente sobre pistas PCIe x4 usando protocolo NVMe sem depender de controladora SATA.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'V – F – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.1.2. Interfaces e Armazenamento. (1) verdadeira: SAS entrega *full-duplex* e *dual-port* corporativo; (2) verdadeira: no *File Storage* (NAS), o *filesystem* reside no próprio storage; (3) falsa: **M.2** é apenas o fator de forma físico — um SSD **M.2 SATA** usa o protocolo **SATA/AHCI** limitado a 6 Gbps, e não pistas PCIe/NVMe.',
    correctAnalysis:
      'Gabarito: V – V – F. A terceira afirmativa é falsa porque M.2 é apenas o formato mecânico; módulos M.2 SATA trafegam pelo barramento/protocolo SATA, não NVMe PCIe.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira sobre SAS operar em full-duplex e dual-port.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre o File Storage gerenciar internamente o sistema de arquivos.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois M.2 SATA utiliza protocolo AHCI/SATA (6 Gbps), e não PCIe/NVMe.'
    }
  },
  {
    id: 'sarah-5-36',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre tecnologias de discos, resistência de SSDs, DAS e modelos de armazenamento, assinale a afirmação INCORRETA.',
    options: [
      'Em SSDs corporativos, métricas como DWPD (Drive Writes Per Day) e TBW (Terabytes Written) indicam a durabilidade de gravação em memória NAND Flash.',
      'O padrão SATA opera em modo full-duplex com fila de 256 comandos por porta e suporte nativo dual-port para duas controladoras simultâneas.',
      'No armazenamento em objeto (Object Storage), cada item combina dados, metadados extensíveis e identificador único em espaço plano acessado via HTTP/REST.',
      'O DAS (Direct-Attached Storage) oferece baixa latência e simplicidade para um único servidor, mas não provê compartilhamento nativo em rede entre vários hosts.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.2. Padrões de Disco. A alternativa B é **incorreta**: operar em modo *full-duplex* com fila de 256 comandos e dupla porta nativa (*dual-port*) são características do padrão **SAS**. O padrão **SATA** opera em *half-duplex*, com fila AHCI de 32 comandos e porta única (*single-port*).',
    correctAnalysis:
      'A afirmação B é falsa porque atribui ao SATA atributos exclusivos do padrão SAS (full-duplex, fila de 256 comandos e dual-port).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): DWPD e TBW medem a resistência de escrita suportada por SSDs ao longo da vida útil.',
      2: 'Incorreta (afirmação verdadeira): Object Storage estrutura dados e metadados por chave/ID único em namespace plano via REST/S3.',
      3: 'Incorreta (afirmação verdadeira): DAS conecta-se diretamente a um servidor sem camada de rede compartilhada nativa.'
    }
  },
  {
    id: 'sarah-5-37',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre os modelos de abstração de armazenamento:\n\nVolumes brutos entregues diretamente ao sistema operacional do servidor para que ele crie e formate o sistema de arquivos correspondem ao armazenamento em _____; compartilhamentos com hierarquia de pastas e permissões gerenciadas pelo próprio equipamento de armazenamento correspondem ao armazenamento em _____; e dados não estruturados imutáveis endereçados por identificador único e metadados via API HTTP/REST caracterizam o armazenamento em _____.',
    options: [
      'Arquivo / Bloco / Objeto',
      'Objeto / Arquivo / Bloco',
      'Bloco / Arquivo / Objeto',
      'Bloco / Objeto / Arquivo'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.2. Modelos de Armazenamento. **Bloco** (*Block Storage*) expõe volumes brutos para o servidor formatar; **Arquivo** (*File Storage*) gerencia o *filesystem* no storage e entrega pastas/arquivos; **Objeto** (*Object Storage*) armazena dados imutáveis com metadados via HTTP/REST.',
    correctAnalysis:
      'Respectivamente: Bloco (volumes crus), Arquivo (pastas com filesystem no storage) e Objeto (API HTTP/REST com metadados).',
    optionErrors: {
      0: 'Incorreta: inverte os conceitos de armazenamento em Bloco e em Arquivo.',
      1: 'Incorreta: atribui volumes brutos a Objeto e API HTTP/REST a Bloco.',
      3: 'Incorreta: inverte armazenamento em Arquivo e em Objeto.'
    }
  },
  {
    id: 'sarah-5-38',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um administrador dispõe de 12 discos idênticos de 4 TB cada e avalia configurá-los em um único grupo RAID 6 ou em um arranjo RAID 50 composto por 3 subgrupos RAID 5 de 4 discos cada. Quais serão as capacidades úteis em RAID 6 e em RAID 50, respectivamente?',
    options: [
      '44 TB no RAID 6 e 40 TB no RAID 50.',
      '36 TB no RAID 6 e 40 TB no RAID 50.',
      '40 TB no RAID 6 e 44 TB no RAID 50.',
      '40 TB no RAID 6 e 36 TB no RAID 50.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.3. Cálculo de Capacidade Útil em RAID. No **RAID 6** em grupo único, descontam-se 2 discos de paridade dupla `(N - 2)`: `(12 - 2) × 4 TB = 40 TB`. No **RAID 50** com 3 subgrupos RAID 5 de 4 discos, cada subgrupo perde 1 disco para paridade (`4 - 1 = 3` discos úteis por subgrupo): `3 × 3 × 4 TB = 36 TB`.',
    correctAnalysis:
      'RAID 6 (12 - 2 = 10 discos úteis × 4 TB) = 40 TB; RAID 50 (3 subgrupos × (4 - 1) discos úteis × 4 TB) = 36 TB.',
    optionErrors: {
      0: 'Incorreta: 44 TB equivaleria a um único RAID 5 de 12 discos (11 × 4 TB), não RAID 6.',
      1: 'Incorreta: inverte os resultados de RAID 6 (40 TB) e RAID 50 (36 TB).',
      2: 'Incorreta: um RAID 50 com 3 subgrupos perde 3 discos para paridade (36 TB), não apenas 1 disco (44 TB).'
    }
  },
  {
    id: 'sarah-5-39',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma aplicação gera 1.200 IOPS totais no volume lógico, sendo 50% de leitura e 50% de escrita aleatória. Considerando as penalidades de escrita (*write penalty*) de RAID 10 (= 2) e RAID 6 (= 6), quantos IOPS totais de *backend* serão exigidos dos discos físicos em RAID 10 e em RAID 6, respectivamente?',
    options: [
      '1.200 IOPS no RAID 10 e 3.600 IOPS no RAID 6.',
      '2.400 IOPS no RAID 10 e 7.200 IOPS no RAID 6.',
      '1.800 IOPS no RAID 10 e 3.600 IOPS no RAID 6.',
      '1.800 IOPS no RAID 10 e 4.200 IOPS no RAID 6.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.3. Penalidade de Escrita em RAID. Separando os 1.200 IOPS: **600 IOPS de leitura** (penalidade 1) e **600 IOPS de escrita**. Aplicando `IOPS_backend = IOPS_read + (IOPS_write × Write_Penalty)`: em **RAID 10**, `600 + (600 × 2) = 1.800 IOPS`; em **RAID 6**, `600 + (600 × 6) = 4.200 IOPS`.',
    correctAnalysis:
      '600 leituras + (600 × 2) = 1.800 IOPS em RAID 10; 600 leituras + (600 × 6) = 4.200 IOPS em RAID 6.',
    optionErrors: {
      0: 'Incorreta: calcula apenas as escritas (600×2 e 600×6) esquecendo de somar os 600 IOPS de leitura.',
      1: 'Incorreta: aplica a write penalty erroneamente também sobre as operações de leitura (1.200×2 e 1.200×6).',
      2: 'Incorreta: o valor 3.600 IOPS no RAID 6 omite os 600 IOPS de leitura.'
    }
  },
  {
    id: 'sarah-5-40',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os níveis tradicionais de RAID à esquerda com suas características conceituais à direita.\n\nColuna da Esquerda:\n(I) RAID 0\n(II) RAID 1\n(III) RAID 5\n(IV) RAID 6\n(V) RAID 10 (1+0)\n\nColuna da Direita:\n(A) Exige no mínimo 3 discos, usa paridade simples distribuída e tolera falha de 1 disco.\n(B) Exige no mínimo 4 discos, aplica dupla paridade (P+Q) e tolera até 2 discos falhos.\n(C) Exige no mínimo 2 discos, faz striping puro sem redundância e perde tudo se 1 disco cair.\n(D) Exige no mínimo 4 discos (par), combina espelhamento e striping sem cálculo de paridade.\n(E) Exige no mínimo 2 discos, espelha dados idênticos (50% útil) e tolera 1 falha por par.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-B, IV-A, V-D.',
      'I-C, II-E, III-A, IV-B, V-D.',
      'I-E, II-C, III-A, IV-B, V-D.',
      'I-C, II-E, III-A, IV-D, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.3. Níveis de RAID. (I-C) **RAID 0** (mín. 2, sem tolerância); (II-E) **RAID 1** (mín. 2, espelhamento 50%); (III-A) **RAID 5** (mín. 3, paridade simples, 1 falha); (IV-B) **RAID 6** (mín. 4, dupla paridade P+Q, 2 falhas); (V-D) **RAID 10** (mín. 4, espelhos em striping, zero paridade).',
    correctAnalysis:
      'Associação exata: I-C, II-E, III-A, IV-B e V-D.',
    optionErrors: {
      0: 'Incorreta: inverte as definições de RAID 5 (III-A) e RAID 6 (IV-B).',
      2: 'Incorreta: inverte as definições de RAID 0 (I-C) e RAID 1 (II-E).',
      3: 'Incorreta: inverte as definições de RAID 6 (IV-B) e RAID 10 (V-D).'
    }
  },
  {
    id: 'sarah-5-41',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre tolerância a falhas e paridade em arranjos RAID e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em um RAID 10 composto por 6 discos (3 pares espelhados), a falha simultânea de dois discos pertencentes ao mesmo par espelhado mantém o volume acessível normalmente.\n( ) Em um arranjo RAID 5, os blocos de paridade não ficam isolados em um disco dedicado, sendo distribuídos de forma rotativa entre todos os discos do conjunto.\n( ) Um grupo RAID 5 configurado com 5 discos de 4 TB cada resulta em 12 TB de capacidade útil, pois o equivalente a dois discos é consumido pela paridade.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.3. RAID. (1) falsa: o RAID 10 tolera múltiplas falhas desde que ocorram em **pares espelhados distintos** — se os 2 discos do **mesmo par** caírem, todo o array falha; (2) verdadeira: no RAID 5 a paridade é **distribuída** (diferente do RAID 4 com disco de paridade dedicado); (3) falsa: com 5 discos de 4 TB em **RAID 5**, desconta-se apenas 1 disco equivalente (`N - 1 = 4 × 4 TB = 16 TB` úteis; 12 TB seria em RAID 6).',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa é verdadeira sobre a distribuição rotativa da paridade no RAID 5.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois perder ambos os discos do mesmo par espelhado derruba o RAID 10.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre a paridade distribuída do RAID 5.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois RAID 5 com 5 × 4 TB entrega 16 TB úteis (perde 1 disco, não 2).'
    }
  },
  {
    id: 'sarah-5-42',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arranjos RAID simples e aninhados, paridade e penalidade de escrita, considere as afirmativas:\n\nI. O nível RAID 60 combina múltiplos subgrupos RAID 6 em *striping*, exigindo no mínimo 8 discos (dois subgrupos de 4) e tolerando até 2 falhas simultâneas dentro de cada subgrupo.\nII. No RAID 5, a penalidade de escrita igual a 4 decorre da necessidade de ler o bloco de dado antigo, ler a paridade antiga, gravar o novo dado e gravar a nova paridade.\nIII. Um arranjo RAID 5 com 4 discos de 2 TB cada resulta em 4 TB de capacidade útil, pois metade do espaço total é reservada para espelhamento completo.\nIV. Embora o RAID 0 entregue 100% da capacidade somada dos discos, a probabilidade de perda total do volume cresce à medida que mais discos integram o *stripe*.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.3. RAID. I verdadeira (RAID 60 = 2+ grupos RAID 6, mínimo 8 discos, até 2 falhas por subgrupo); II verdadeira (ciclo Read-Modify-Write do RAID 5 = 4 I/Os); III falsa: em RAID 5 com 4 × 2 TB, a capacidade útil é `(4 - 1) × 2 TB = 6 TB` (25% de paridade, não 50%); IV verdadeira (no RAID 0, a falha de qualquer um dos N discos derruba todo o arranjo).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A III erra ao calcular 4 TB para um RAID 5 de 4 × 2 TB (o correto é 6 TB úteis).',
    optionErrors: {
      0: 'Incorreta: a afirmativa IV também é verdadeira sobre o aumento do risco agregado no RAID 0.',
      1: 'Incorreta: a afirmativa III é falsa, pois RAID 5 com 4 × 2 TB fornece 6 TB úteis (N - 1).',
      3: 'Incorreta: a afirmativa II é verdadeira e a III é falsa quanto à capacidade útil do RAID 5.'
    }
  },
  {
    id: 'sarah-5-43',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre capacidade útil, desempenho e características conceituais dos níveis de RAID, assinale a afirmação INCORRETA.',
    options: [
      'Quando discos de capacidades diferentes integram o mesmo grupo RAID tradicional, o cálculo da área útil limita-se ao tamanho do menor disco.',
      'O RAID 50 oferece melhor desempenho de escrita e contenção de falhas por subgrupo do que um único grupo RAID 5 com o mesmo total de discos.',
      'Ao configurar 4 discos de 2 TB em RAID 10, obtém-se capacidade útil de 6 TB e penalidade de escrita igual a 4 por unir paridade e espelho.',
      'Comparado ao RAID 5 com mesmo número de discos, o RAID 6 reduz a capacidade útil em 1 disco adicional e eleva a write penalty de 4 para 6.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.3. RAID. A alternativa C é **incorreta**: um arranjo **RAID 10** com 4 discos de 2 TB entrega **50% de capacidade útil (`4 TB`)** e **write penalty = 2** (sem nenhum cálculo de paridade). Os números `6 TB` e `write penalty = 4` correspondem ao **RAID 5** com 4 discos de 2 TB.',
    correctAnalysis:
      'A afirmação C é falsa porque atribui ao RAID 10 a capacidade útil (6 TB) e a penalidade de escrita (4) típicas do RAID 5, além de afirmar incorretamente que RAID 10 usa paridade.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): em RAID clássico, o excedente dos discos maiores fica inutilizado.',
      1: 'Incorreta (afirmação verdadeira): dividir em subgrupos no RAID 50 reduz domínios de paridade e acelera escritas.',
      3: 'Incorreta (afirmação verdadeira): RAID 6 usa dupla paridade (N-2 e write penalty = 6) frente ao RAID 5 (N-1 e WP = 4).'
    }
  },
  {
    id: 'sarah-5-44',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma clínica precisa de dois repositórios: o primeiro compartilhará pastas de documentos entre estações Windows e Linux com ACLs gerenciadas pelo próprio storage; o segundo fornecerá volumes brutos de baixíssima latência por meio de um fabric óptico dedicado sem perdas para um banco de dados. Quais tecnologias correspondem a cada demanda?',
    options: [
      'SAN (via SMB/NFS em nível de bloco) para pastas compartilhadas e NAS Fibre Channel (em arquivo) para o banco.',
      'NAS (via FCoE em nível de bloco) para pastas compartilhadas e SAN NFSv4 (em arquivo sobre IP) para o banco.',
      'DAS (via SMB sem sistema de arquivos) para pastas compartilhadas e NAS Fibre Channel (com WWN) para o banco.',
      'NAS (via SMB/NFS em nível de arquivo) para pastas compartilhadas e SAN Fibre Channel (em bloco) para o banco.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.4. Tecnologias NAS e SAN. O compartilhamento simultâneo de pastas e arquivos em rede IP para Windows/Linux usando **SMB/NFS** com sistema de arquivos no próprio equipamento define o **NAS**; já a entrega de volumes crus em nível de bloco sobre um *fabric* óptico dedicado sem perdas (*lossless*) caracteriza a **SAN Fibre Channel**.',
    correctAnalysis:
      'Pastas compartilhadas multi-cliente sobre rede IP (SMB/NFS) = NAS (nível de arquivo); volumes brutos sobre fabric óptico dedicado = SAN Fibre Channel (nível de bloco).',
    optionErrors: {
      0: 'Incorreta: SMB/NFS são protocolos de arquivo (NAS), enquanto Fibre Channel pertence à SAN em nível de bloco.',
      1: 'Incorreta: FCoE é protocolo de bloco em SAN (não NAS) e NFSv4 é protocolo de arquivo em NAS (não bloco SAN).',
      2: 'Incorreta: DAS não compartilha pastas em rede via SMB nativo nem Fibre Channel opera como NAS.'
    }
  },
  {
    id: 'sarah-5-45',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as tecnologias e conceitos de NAS e SAN à esquerda com suas definições técnicas à direita.\n\nColuna da Esquerda:\n(I) NAS (NFS / SMB)\n(II) Fibre Channel (FC)\n(III) FCoE (Fibre Channel over Ethernet)\n(IV) WWN (WWNN / WWPN)\n(V) Zoning e LUN Masking\n\nColuna da Direita:\n(A) Encapsula quadros Fibre Channel na camada 2 sobre Ethernet sem perdas (DCB/CEE).\n(B) Arquitetura SAN óptica dedicada com switches FC e controle de fluxo por créditos.\n(C) Mecanismos lógicos que segregam visibilidade no fabric e acesso a volumes no storage.\n(D) Identificador único de 64 bits atribuído a nós e portas em redes Fibre Channel.\n(E) Armazenamento em rede IP que gerencia o sistema de arquivos e exporta pastas.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-A, III-B, IV-D, V-C.',
      'I-E, II-B, III-A, IV-C, V-D.',
      'I-B, II-E, III-A, IV-D, V-C.',
      'I-E, II-B, III-A, IV-D, V-C.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.4. NAS e SAN. (I-E) **NAS** gerencia o *filesystem* internamente e exporta pastas via NFS/SMB; (II-B) **Fibre Channel** forma um *fabric* óptico dedicado com créditos *buffer-to-buffer*; (III-A) **FCoE** transporta quadros FC na camada 2 sobre Ethernet *lossless* (DCB/CEE); (IV-D) **WWN** identifica nós e portas com 64 bits; (V-C) **Zoning e LUN Masking** implementam isolamento lógico no switch FC e no storage.',
    correctAnalysis:
      'Associação exata: I-E, II-B, III-A, IV-D e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte Fibre Channel nativo (II-B) com FCoE sobre Ethernet (III-A).',
      1: 'Incorreta: inverte WWN (IV-D) com Zoning e LUN Masking (V-C).',
      2: 'Incorreta: inverte NAS (I-E) com Fibre Channel (II-B).'
    }
  },
  {
    id: 'sarah-5-46',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os fundamentos das arquiteturas NAS e SAN (Fibre Channel, iSCSI e FCoE), analise as afirmativas:\n\nI. Em um equipamento NAS, o sistema de arquivos reside e é gerenciado pelo próprio storage, que compartilha diretórios pela rede IP utilizando protocolos como NFS ou SMB.\nII. O protocolo FCoE encapsula quadros Fibre Channel diretamente sobre Ethernet de camada 2, exigindo recursos de *Data Center Bridging* (DCB/PFC) para operação *lossless*.\nIII. Como a SAN entrega blocos crus, dois servidores Linux autônomos podem montar com escrita simultânea o mesmo volume formatado em *ext4* padrão sem risco de corrupção de dados.\nIV. Em um *fabric* Fibre Channel, o controle de fluxo por créditos (*buffer-to-buffer credits*) evita perda de quadros por congestionamento entre interfaces ópticas.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.4. NAS e SAN. I verdadeira (NAS gerencia seu próprio sistema de arquivos e exporta arquivos); II verdadeira (FCoE opera em L2 sobre Ethernet *lossless* com DCB); III falsa: *ext4* e *NTFS* comuns **não são sistemas de arquivos clusterizados** — montá-los em escrita simultânea por dois servidores distintos em uma SAN corrompe os metadados imediatamente (exige *Cluster File System*, como VMFS, CSV ou GFS2); IV verdadeira (*buffer-to-buffer credits* garantem entrega sem perdas no fabric FC).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III é falsa porque acesso concorrente em SAN exige sistema de arquivos clusterizado (não ext4 comum).',
    optionErrors: {
      0: 'Incorreta: a afirmativa IV também é verdadeira sobre o mecanismo de buffer-to-buffer credits no Fibre Channel.',
      2: 'Incorreta: a afirmativa I é verdadeira e a III é falsa, pois ext4 padrão corrompe sob escrita concorrente de dois hosts.',
      3: 'Incorreta: a afirmativa II é verdadeira e a III é falsa quanto à montagem concorrente em ext4.'
    }
  },
  {
    id: 'sarah-5-47',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas conceituais sobre protocolos e controles em NAS e SAN e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Os protocolos SMB e NFS pertencem à categoria SAN de acesso em bloco bruto, exigindo que cada estação formate localmente o volume compartilhado.\n( ) Assim como o iSCSI, o FCoE pode ser roteado entre sub-redes IP, pois encapsula os quadros Fibre Channel em pacotes TCP/IP.\n( ) Em uma SAN Fibre Channel, o *Zoning* controla a visibilidade entre portas no switch do *fabric*, enquanto o *LUN Masking* define no storage quais hosts acessam os volumes.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.4. NAS e SAN. (1) falsa: SMB e NFS são protocolos de **nível de arquivo (NAS)**, nos quais o próprio NAS gerencia o sistema de arquivos; (2) falsa: o **FCoE** encapsula quadros Fibre Channel diretamente na **Camada 2 (Ethernet)** sem cabeçalho IP/TCP, portanto **não é roteável por IP** entre sub-redes (quem usa TCP/IP é o iSCSI, enquanto FCIP faz tunelamento IP entre fabrics); (3) verdadeira: **Zoning** atua no switch FC e **LUN Masking** atua no próprio storage array.',
    correctAnalysis:
      'Gabarito: F – F – V. Apenas a terceira afirmativa é verdadeira; SMB/NFS são de nível de arquivo (NAS) e FCoE opera direto na camada 2 Ethernet, não sendo roteável por IP.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois SMB e NFS são protocolos de arquivo (NAS), não de bloco (SAN).',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o FCoE encapsula quadros FC diretamente na camada 2 Ethernet e não é roteável em sub-redes IP.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre Zoning no switch FC e LUN Masking no storage.'
    }
  },
  {
    id: 'sarah-5-48',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre características conceituais e comparativas entre tecnologias de armazenamento NAS e SAN, assinale a afirmação INCORRETA.',
    options: [
      'No NAS, o controle de acesso aos dados ocorre por permissões de compartilhamento e ACLs de arquivos, sem expor volumes brutos aos clientes.',
      'Fibre Channel, FCoE e iSCSI enquadram-se na categoria de armazenamento em bloco (SAN), variando quanto ao transporte óptico, L2 ou TCP/IP.',
      'Por operar sobre rede IP convencional, o NAS dispensa sistema de arquivos próprio e entrega blocos brutos para o servidor cliente formatar.',
      'Em um fabric Fibre Channel, os dispositivos são identificados globalmente por endereços WWN de 64 bits atribuídos ao nó (WWNN) e às portas (WWPN).'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.4. NAS vs SAN. A alternativa C é **incorreta**: exatamente ao contrário, o **NAS** mantém seu próprio sistema de arquivos interno e exporta arquivos/diretórios já estruturados (via NFS ou SMB). Quem dispensa sistema de arquivos gerenciado pelo cliente na camada de transporte e entrega blocos brutos para o servidor formatar é a **SAN**.',
    correctAnalysis:
      'A afirmação C é incorreta porque descreve a entrega de blocos brutos típica da SAN atribuindo-a ao NAS, cujo papel é gerenciar o sistema de arquivos e exportar arquivos.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): clientes NAS acessam diretórios controlados por ACLs/exports, não discos crus.',
      1: 'Incorreta (afirmação verdadeira): FC, FCoE e iSCSI são transportes de armazenamento em bloco (SAN).',
      3: 'Incorreta (afirmação verdadeira): WWNN e WWPN são identificadores WWN de 64 bits no fabric Fibre Channel.'
    }
  },
  {
    id: 'sarah-5-49',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre tecnologias de armazenamento em rede:\n\nA arquitetura que exporta pastas compartilhadas em nível de arquivo sobre rede IP via NFS ou SMB denomina-se _____; já a arquitetura SAN dedicada que transporta blocos sobre um *fabric* óptico sem perdas com endereçamento WWN de 64 bits é baseada em _____; e a variante que encapsula esses mesmos quadros diretamente na camada 2 sobre Ethernet *lossless* denomina-se _____.',
    options: [
      'SAN / iSCSI sobre IP / NFS',
      'DAS / Fibre Channel / NFS',
      'NAS / Fibre Channel / FCoE',
      'NAS / iSCSI sobre IP / SMB'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.4. NAS e SAN. O compartilhamento em nível de arquivo via NFS/SMB corresponde ao **NAS**; o fabric óptico dedicado de blocos identificado por WWN é o **Fibre Channel**; e seu encapsulamento L2 sobre Ethernet *lossless* é o **FCoE** (*Fibre Channel over Ethernet*).',
    correctAnalysis:
      'Respectivamente: NAS (arquivos via NFS/SMB), Fibre Channel (fabric óptico WWN) e FCoE (quadros FC sobre Ethernet lossless L2).',
    optionErrors: {
      0: 'Incorreta: SAN entrega blocos (não pastas NFS/SMB), iSCSI usa TCP/IP (não WWN óptico dedicado) e NFS é protocolo NAS.',
      1: 'Incorreta: DAS é armazenamento conectado diretamente sem rede IP de compartilhamento via NFS/SMB.',
      3: 'Incorreta: iSCSI encapsula SCSI sobre TCP/IP (não fabric WWN) e SMB é protocolo de arquivo NAS, não encapsulamento L2 de FC.'
    }
  },
  {
    id: 'sarah-5-50',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma instituição adota um serviço de nuvem em que o provedor mantém sistema operacional, *runtime*, *middleware* e atualizações de plataforma, cabendo à equipe interna apenas implantar o código da aplicação e gerenciar seus dados; em picos de acesso, novas instâncias sobem e são liberadas automaticamente em minutos. Qual modelo de serviço e propriedade essencial da nuvem estão presentes?',
    options: [
      'IaaS (Infrastructure as a Service) e escalabilidade vertical manual planejada.',
      'SaaS (Software as a Service) e elasticidade rápida com entrega pronta ao usuário.',
      'PaaS (Platform as a Service) e modelo comunitário exclusivo entre órgãos públicos.',
      'PaaS (Platform as a Service) e elasticidade rápida sob variação de demanda.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.5. Computação em Nuvem. Quando o provedor abstrai hardware, sistema operacional e *runtime*, deixando ao cliente o código e os dados da aplicação, configura-se **PaaS (Platform as a Service)**; o provisionamento e a liberação automática de recursos acompanhando picos e quedas de carga caracterizam a **elasticidade rápida** (*rapid elasticity*).',
    correctAnalysis:
      'PaaS delega infraestrutura e sistema operacional/runtime ao provedor enquanto o cliente publica código e dados; elasticidade rápida ajusta recursos automaticamente em resposta à demanda.',
    optionErrors: {
      0: 'Incorreta: no modelo IaaS, o cliente gerencia sistema operacional e patches, e escalabilidade vertical manual não é automática.',
      1: 'Incorreta: no modelo SaaS, o cliente consome software pronto sem implantar ou manter código de aplicação próprio.',
      2: 'Incorreta: nuvem comunitária é um modelo de implantação compartilhada, não a propriedade de ajuste automático à demanda.'
    }
  },
  {
    id: 'sarah-5-51',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considerando o modelo de responsabilidade compartilhada entre provedor e cliente nas categorias IaaS, PaaS e SaaS, qual camada permanece sob responsabilidade direta do CLIENTE em todos os três modelos?',
    options: [
      'A aplicação de correções de segurança e atualizações de kernel no sistema operacional.',
      'O controle de acesso físico aos racks, energia elétrica e manutenção dos hipervisores.',
      'A gestão do runtime de execução da plataforma e dos balanceadores internos do provedor.',
      'A classificação, proteção dos dados e governança das identidades e acessos dos usuários.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.1.5. Responsabilidade Compartilhada em Nuvem. Embora a divisão mude conforme a abstração (no IaaS o cliente cuida até do SO/rede virtual; no PaaS, do código; no SaaS, da configuração da aplicação), a **propriedade dos dados**, sua classificação/criptografia sob controle do cliente e a **gestão das identidades e permissões de acesso** permanecem sempre sob responsabilidade do cliente.',
    correctAnalysis:
      'Nos três modelos (IaaS, PaaS e SaaS), o cliente sempre responde pela segurança "na" nuvem: dados, classificação e controle de identidades/acessos.',
    optionErrors: {
      0: 'Incorreta: patches e kernel do sistema operacional são responsabilidade do provedor em PaaS e SaaS.',
      1: 'Incorreta: segurança física do datacenter e dos hipervisores cabe sempre ao provedor nos modelos públicos IaaS/PaaS/SaaS.',
      2: 'Incorreta: runtime e camada gerenciada de plataforma ficam sob responsabilidade do provedor em PaaS e SaaS.'
    }
  },
  {
    id: 'sarah-5-52',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre modelos de implantação, escalabilidade e características da computação em nuvem (NIST SP 800-145), analise as afirmativas:\n\nI. Na nuvem **Privada**, a infraestrutura é dedicada exclusivamente a uma única organização, podendo ser operada internamente (*on-premises*) ou hospedada nas instalações de um terceiro.\nII. Na escalabilidade **horizontal** (*scale-out*), a capacidade cresce pela adição de novas instâncias em paralelo, ao passo que na **vertical** (*scale-up*) ampliam-se CPU e memória de um mesmo nó.\nIII. A característica de **serviço medido** (*measured service*) monitora e contabiliza automaticamente o consumo de recursos para controle, otimização e cobrança proporcional ao uso.\nIV. Contratar serviços independentes em dois provedores de nuvem pública distintos, sem integração com infraestrutura privada local, caracteriza automaticamente uma **Nuvem Híbrida**.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente I e II estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.1.5. Computação em Nuvem. I verdadeira (NIST prevê nuvem privada própria ou hospedada por terceiros); II verdadeira (*scale-out* adiciona nós; *scale-up* amplia um nó); III verdadeira (*measured service* dá visibilidade e medição sob demanda); IV falsa: usar dois provedores públicos distintos isolados caracteriza **Multi-Cloud**, não **Nuvem Híbrida** (que exige composição integrada entre nuvens distintas, tipicamente privada + pública, com portabilidade de dados/cargas).',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A IV confunde Multi-Cloud (múltiplos provedores públicos) com Nuvem Híbrida (integração orquestrada privada + pública).',
    optionErrors: {
      1: 'Incorreta: a afirmativa III também é verdadeira segundo a definição de measured service do NIST SP 800-145.',
      2: 'Incorreta: a afirmativa I é verdadeira e a IV é falsa ao confundir Multi-Cloud com Nuvem Híbrida.',
      3: 'Incorreta: a afirmativa II é verdadeira e a IV é falsa sobre a definição de Nuvem Híbrida.'
    }
  },
  {
    id: 'sarah-5-53',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre modelos de nuvem, elasticidade e escalabilidade e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No modelo **IaaS**, o cliente administra o sistema operacional, atualizações e regras de *firewall* das VMs, enquanto o provedor gerencia hardware físico, rede subjacente e hipervisor.\n( ) A **elasticidade** difere da escalabilidade porque consiste exclusivamente no aumento manual planejado de vCPU e RAM de um servidor único para acompanhar o crescimento anual.\n( ) No modelo **PaaS**, o cliente continua responsável por aplicar *patches* no sistema operacional das instâncias que executam sua aplicação.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.1.5. Computação em Nuvem. (1) verdadeira: divisão típica de responsabilidades no IaaS; (2) falsa: aumento manual planejado em um servidor único descreve **escalabilidade vertical**, enquanto **elasticidade** é o ajuste automático rápido (expansão e retração) à demanda momentânea; (3) falsa: no modelo **PaaS**, o provedor gerencia o sistema operacional, *patches* e *runtime*; ao cliente cabem o código da aplicação, os dados e a governança de acessos.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa descreve corretamente a responsabilidade do cliente e do provedor no IaaS.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira sobre a divisão de responsabilidades em IaaS.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois aumento manual de CPU/RAM em nó único é escalabilidade vertical, não elasticidade.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois no PaaS o sistema operacional e o runtime ficam a cargo do provedor; o cliente cuida de código, dados e acessos.'
    }
  },
  {
    id: 'sarah-5-54',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre modelos de serviço, implantação e propriedades da computação em nuvem, assinale a afirmação INCORRETA.',
    options: [
      'No modelo SaaS, o usuário consome a aplicação pronta via navegador ou API sem administrar servidores, sistema operacional ou código-fonte subjacente.',
      'A elasticidade rápida na nuvem refere-se apenas ao acréscimo automático de recursos nos picos de demanda, não envolvendo retração automática na ociosidade.',
      'A nuvem comunitária é provisionada para uso exclusivo de uma comunidade específica de instituições que compartilham políticas, missão ou conformidade.',
      'A escalabilidade vertical (scale-up) encontra limite físico na capacidade do servidor único e frequentemente exige breve reinicialização na troca de recursos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.1.5. Elasticidade em Nuvem. A alternativa B é **incorreta**: a **elasticidade rápida** (*rapid elasticity*) compreende tanto o provisionamento ágil para expandir diante de picos (*scale-out*) quanto a **liberação/retração automática** de recursos ociosos (*scale-in*) quando a carga cai, otimizando custos no modelo *pay-as-you-go*.',
    correctAnalysis:
      'A afirmação B é incorreta porque restringe a elasticidade apenas à expansão, ignorando o desprovisionamento automático quando a demanda diminui.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): no SaaS toda a infraestrutura, SO e código da aplicação são gerenciados pelo provedor.',
      2: 'Incorreta (afirmação verdadeira): nuvem comunitária atende grupos de organizações com requisitos ou interesses compartilhados.',
      3: 'Incorreta (afirmação verdadeira): scale-up tem teto físico por máquina e costuma exigir parada/reboot para redimensionamento.'
    }
  },
  {
    id: 'sarah-5-55',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre computação em nuvem:\n\nO modelo de serviço em que o provedor entrega máquinas virtuais, redes e blocos de disco cabendo ao cliente manter o sistema operacional e *patches* é o _____; quando a nuvem privada local integra-se de forma orquestrada a uma nuvem pública para portabilidade de dados e cargas, configura-se uma nuvem _____; e o crescimento de capacidade por meio da adição de mais nós trabalhando em paralelo denomina-se escalabilidade _____.',
    options: [
      'PaaS / comunitária / vertical',
      'IaaS / privada / vertical',
      'IaaS / híbrida / horizontal',
      'SaaS / híbrida / horizontal'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.1.5. Computação em Nuvem. Entregar infraestrutura virtual (SO por conta do cliente) define **IaaS**; integrar nuvem privada e pública define **nuvem híbrida**; e adicionar nós em paralelo define escalabilidade **horizontal** (*scale-out*).',
    correctAnalysis:
      'Respectivamente: IaaS, nuvem híbrida e escalabilidade horizontal.',
    optionErrors: {
      0: 'Incorreta: no PaaS o provedor gerencia o SO, nuvem comunitária não é privada+pública e scale-up é vertical.',
      1: 'Incorreta: integrar nuvem pública com privada forma modelo híbrido, e adicionar nós em paralelo é horizontal.',
      3: 'Incorreta: SaaS entrega aplicação pronta sem gestão de SO ou infraestrutura virtual pelo cliente.'
    }
  },
  {
    id: 'sarah-5-56',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um cluster VMware vSphere compartilhado por sistemas críticos e ambientes de homologação, o administrador cria dois *Resource Pools* (`Prod` e `Homol`). Ele precisa garantir que `Prod` tenha no mínimo 64 GB de RAM reservados exclusivamente, que `Homol` nunca ultrapasse 32 GB mesmo com o host ocioso, e que sob disputa `Prod` receba maior peso relativo. Quais parâmetros configurar?',
    options: [
      'Limit = 64 GB em Prod e Reservation = 32 GB em Homol, mantendo Shares = Normal em ambos.',
      'Reservation = 32 GB em Prod e Shares = Low em Homol, aplicando Limit = 64 GB em Prod.',
      'Shares = 64 GB em Prod e Reservation = 32 GB em Homol, removendo qualquer Limit.',
      'Reservation = 64 GB e Shares = High em Prod, com Limit = 32 GB configurado em Homol.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.1. Resource Pools no vSphere. **Reservation** garante alocação mínima exclusiva de recurso (64 GB em `Prod`); **Limit** impõe um teto rígido máximo mesmo havendo memória livre no cluster (32 GB em `Homol`); e **Shares** define a proporção de prioridade aplicada exclusivamente quando há contenção de recursos (*High* vs *Normal/Low*).',
    correctAnalysis:
      'Reservation = 64 GB garante o mínimo para Prod, Limit = 32 GB impõe o teto em Homol e Shares = High prioriza Prod em disputas.',
    optionErrors: {
      0: 'Incorreta: Limit em Prod imporia teto (não garantia mínima) e Reservation em Homol garantiria mínimo (não teto máximo).',
      1: 'Incorreta: inverte os valores de garantia mínima de Prod (64 GB) e teto máximo de Homol (32 GB).',
      2: 'Incorreta: Shares define peso proporcional relativo durante disputa, nunca valores absolutos em gigabytes.'
    }
  },
  {
    id: 'sarah-5-57',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os componentes do VMware vSphere e equivalentes de virtualização corporativa à esquerda com suas funções à direita.\n\nColuna da Esquerda:\n(I) vSphere Standard Switch (vSS)\n(II) vSphere Distributed Switch (vDS)\n(III) VMware Tools\n(IV) Port Group\n(V) Proxmox VE e Hyper-V\n\nColuna da Direita:\n(A) Agrupamento lógico de portas virtuais que aplica VLAN ID, segurança e *teaming* às VMs ou portas VMkernel.\n(B) Switch virtual gerenciado no vCenter que mantém configuração de rede uniforme entre todos os hosts do cluster.\n(C) Pacote instalado no SO convidado contendo drivers paravirtualizados (vmxnet3/pvscsi) e agente de *shutdown* limpo.\n(D) Switch virtual criado e administrado de forma local e independente em cada host ESXi individual.\n(E) Alternativas corporativas de virtualização baseadas respectivamente em KVM/LXC (Linux) e hipervisor Microsoft.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-B, III-C, IV-A, V-E.',
      'I-B, II-D, III-C, IV-A, V-E.',
      'I-D, II-C, III-B, IV-A, V-E.',
      'I-D, II-B, III-A, IV-C, V-E.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.1. vSphere e Equivalentes. (I-D) **vSS** é configurado por host ESXi; (II-B) **vDS** centraliza a gerência de rede no vCenter para todo o cluster; (III-C) **VMware Tools** provê drivers paravirtualizados (`vmxnet3`, `pvscsi`) e integração com o SO; (IV-A) **Port Group** define VLAN, segurança e balanceamento; (V-E) **Proxmox VE** (KVM/LXC) e **Microsoft Hyper-V** são equivalentes corporativos.',
    correctAnalysis:
      'Associação exata: I-D, II-B, III-C, IV-A e V-E.',
    optionErrors: {
      1: 'Incorreta: inverte vSphere Standard Switch (I-D) com vSphere Distributed Switch (II-B).',
      2: 'Incorreta: inverte vSphere Distributed Switch (II-B) com VMware Tools (III-C).',
      3: 'Incorreta: inverte VMware Tools (III-C) com Port Group (IV-A).'
    }
  },
  {
    id: 'sarah-5-58',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquitetura de rede, balanceamento e recursos do VMware vSphere/vCenter/ESXi, analise as afirmativas:\n\nI. Em um *Resource Pool*, o parâmetro **Shares** define um limite máximo rígido que impede a máquina virtual de consumir mais CPU ou RAM mesmo quando o host físico está totalmente ocioso.\nII. O **vSphere Distributed Switch (vDS)** mantém seu plano de gerenciamento centralizado no vCenter Server para consistência entre os hosts do cluster, enquanto o plano de encaminhamento de dados continua operando localmente em cada ESXi.\nIII. No **DRS** (*Distributed Resource Scheduler*), regras de antiafinidade (*VM-VM Anti-Affinity*) mantêm máquinas virtuais específicas separadas em hosts físicos distintos, evitando ponto único de falha para pares redundantes.\nIV. Se o servidor **vCenter** ficar temporariamente fora do ar por manutenção, os hosts ESXi interrompem imediatamente todas as VMs em execução até a reconexão do vCenter.\n\nAssinale a alternativa correta.',
    options: [
      'Somente II e III estão corretas.',
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.1. vSphere/vCenter/ESXi. I falsa: quem impõe teto rígido mesmo com o host ocioso é o **Limit** (*Shares* apenas pondera prioridades sob contenção); II verdadeira (vDS separa plano de controle no vCenter e plano de dados nos hosts ESXi); III verdadeira (regras *Anti-Affinity* separam VMs redundantes em hosts distintos); IV falsa: as VMs continuam operando normalmente nos hosts ESXi mesmo quando o vCenter está offline.',
    correctAnalysis:
      'Gabarito: Somente II e III estão corretas. Shares não impõe teto ocioso (isso é Limit) e a queda do vCenter não desliga VMs em execução nos hosts ESXi.',
    optionErrors: {
      1: 'Incorreta: a afirmativa I é falsa (teto rígido é definido por Limit, não Shares) e a III é verdadeira.',
      2: 'Incorreta: a afirmativa I é falsa porque Shares atua apenas durante disputa de recursos.',
      3: 'Incorreta: a afirmativa IV é falsa porque os hosts ESXi mantêm as VMs em execução independentemente do vCenter estar online.'
    }
  },
  {
    id: 'sarah-5-59',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre VMware ESXi, DRS e ferramentas de virtualização e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O hipervisor **VMware ESXi** executa como módulo nativo carregado dentro do kernel Linux de uma distribuição comercial instalada previamente no servidor.\n( ) Em um cluster com **DRS** configurado em modo totalmente automatizado, o vCenter avalia o consumo de CPU e memória dos nós e executa migrações balanceadas entre os hosts.\n( ) A instalação do **VMware Tools** habilita drivers paravirtualizados mais eficientes (como `vmxnet3`) e permite que o hipervisor solicite o desligamento gracioso do sistema operacional convidado.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.1. ESXi, DRS e VMware Tools. (1) falsa: o ESXi utiliza seu próprio kernel proprietário bare-metal (**VMkernel**), não sendo um módulo do kernel Linux (quem integra o kernel Linux é o **KVM**); (2) verdadeira: o DRS em modo *Fully Automated* realiza o posicionamento inicial e o balanceamento automático contínuo no cluster; (3) verdadeira: o VMware Tools fornece drivers otimizados, sincronia e *Guest OS Shutdown* limpo.',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa é falsa porque o ESXi roda sobre o VMkernel proprietário, não como módulo do kernel Linux.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois o ESXi usa o VMkernel bare-metal próprio, diferente do KVM no kernel Linux.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre o balanceamento automático realizado pelo DRS.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre os drivers paravirtualizados e shutdown limpo via VMware Tools.'
    }
  },
  {
    id: 'sarah-5-60',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre a arquitetura VMware vSphere:\n\nO servidor centralizado de gerenciamento responsável por administrar múltiplos hosts ESXi em cluster e habilitar switches distribuídos e DRS denomina-se _____; para segmentar políticas de VLAN e balanceamento aplicadas às interfaces virtuais dentro de um switch virtual, criam-se _____; já nos *Resource Pools*, o parâmetro que garante uma quantidade mínima dedicada de CPU ou memória para a VM durante sua execução é _____.',
    options: [
      'VMkernel / vSwitches padrão / Limit',
      'vCenter Server / Port Groups / Reservation',
      'vCenter Server / Resource Pools / Shares',
      'Host Client / Port Groups / Reservation'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.1. vSphere/vCenter/ESXi. O plano de gerenciamento multi-host é o **vCenter Server**; as unidades lógicas que aplicam VLAN e políticas de rede no vSwitch são os **Port Groups**; e a garantia mínima de CPU/RAM em *Resource Pools* é a **Reservation**.',
    correctAnalysis:
      'Respectivamente: vCenter Server, Port Groups e Reservation.',
    optionErrors: {
      0: 'Incorreta: VMkernel é o núcleo local do ESXi (não o plano central multi-host) e Limit define teto máximo, não mínimo garantido.',
      2: 'Incorreta: Resource Pools gerenciam CPU/RAM (não VLANs no vSwitch) e Shares apenas pondera prioridades sob contenção.',
      3: 'Incorreta: Host Client gerencia apenas um único host ESXi isolado, sem orquestração de cluster/vDS.'
    }
  },
  {
    id: 'sarah-5-61',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um cluster vSphere HA com 4 hosts ESXi, uma falha de porta de switch interrompe a rede de gerenciamento apenas do nó `ESXi-04`, que deixa de receber *heartbeats* de rede do nó *Master* e dos demais pares, embora suas VMs continuem operando com acesso à rede de produção e ao storage compartilhado. Nessa condição, em qual estado o `ESXi-04` entra e qual política determina se suas VMs serão desligadas ou mantidas ligadas?',
    options: [
      'Network Partitioned e política de Admission Control configurada no cluster.',
      'Host Failure e política de VM Monitoring configurada pelo VMware Tools.',
      'Permanent Device Loss (PDL) e política de VM Restart Priority das VMs.',
      'Host Isolated e política de Host Isolation Response configurada no cluster.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.2. vSphere HA (Host Isolated vs Network Partitioned). Quando um único host perde comunicação na rede de gerenciamento com todos os demais membros do cluster e falha na checagem do endereço de isolamento, ele entra no estado **Host Isolated**. Como o *Master* enxerga seu *heartbeat* ativo no datastore compartilhado (sabendo que ele não morreu fisicamente), o comportamento local das VMs segue exatamente a configuração de **Host Isolation Response** (*Leave powered on*, *Power off* ou *Shut down*).',
    correctAnalysis:
      'Sem comunicação com nenhum outro host na rede de gerência, o nó fica em Host Isolated e aplica a ação definida em Host Isolation Response.',
    optionErrors: {
      0: 'Incorreta: Network Partitioned ocorre quando subgrupos de hosts ainda conversam entre si em partições separadas; e Admission Control trata de reserva para failover.',
      1: 'Incorreta: Host Failure indica queda total (sem datastore heartbeat) e VM Monitoring reinicia VMs individuais por falha do guest.',
      2: 'Incorreta: PDL trata de perda definitiva de LUN no storage, enquanto VM Restart Priority ordena o boot após falha.'
    }
  },
  {
    id: 'sarah-5-62',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os mecanismos de alta disponibilidade no vSphere à esquerda com suas respectivas funções à direita.\n\nColuna da Esquerda:\n(I) Admission Control\n(II) Datastore Heartbeating\n(III) VM Restart Priority\n(IV) VM Monitoring\n(V) vSphere Fault Tolerance (FT)\n\nColuna da Direita:\n(A) Mantém cópia secundária em sincronia contínua em outro host para failover imediato sem reinicialização.\n(B) Define a ordem de religamento das VMs após queda de host (ex.: Highest antes de Medium e Low).\n(C) Reinicia uma VM específica se o sistema operacional convidado travar e interromper heartbeats e I/O.\n(D) Reserva capacidade de CPU/RAM no cluster impedindo ligar VMs além da margem garantida de failover.\n(E) Usa volumes compartilhados para distinguir um host realmente morto de um host apenas isolado na rede de gerência.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-E, III-C, IV-B, V-A.',
      'I-E, II-D, III-B, IV-C, V-A.',
      'I-D, II-B, III-E, IV-C, V-A.',
      'I-D, II-E, III-B, IV-C, V-A.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.2. vSphere HA e FT. (I-D) **Admission Control** garante capacidade reservada para *failover*; (II-E) **Datastore Heartbeating** usa storage compartilhado para evitar falsos reinícios em isolamento de rede; (III-B) **VM Restart Priority** ordena o boot das VMs (ex.: AD/DNS/DB antes das apps); (IV-C) **VM Monitoring** reinicia VMs travadas internamente; (V-A) **Fault Tolerance** entrega *zero downtime* sem *cold boot*.',
    correctAnalysis:
      'Associação exata: I-D, II-E, III-B, IV-C e V-A.',
    optionErrors: {
      0: 'Incorreta: inverte VM Restart Priority (III-B) com VM Monitoring (IV-C).',
      1: 'Incorreta: inverte Admission Control (I-D) com Datastore Heartbeating (II-E).',
      2: 'Incorreta: inverte Datastore Heartbeating (II-E) com VM Restart Priority (III-B).'
    }
  },
  {
    id: 'sarah-5-63',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um cluster homogêneo de 4 hosts ESXi com **Admission Control** configurado para reservar 25% de CPU e memória RAM para *failover*, o que acontece se o administrador tentar ligar uma nova VM cuja reserva violar essa margem disponível?',
    options: [
      'O vSphere HA liga a VM normalmente e apenas registra um alarme de capacidade de failover insuficiente.',
      'O vSphere HA bloqueia o acionamento da VM para preservar a capacidade garantida de failover.',
      'O DRS migra VMs de baixa prioridade para outros hosts a fim de abrir espaço e então liga a nova VM.',
      'O vSphere HA reduz automaticamente a porcentagem reservada para acomodar a VM e a liga em seguida.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.2. Admission Control no vSphere HA. Quando o **Admission Control** está ativo e a inicialização de uma VM viola a porcentagem reservada de CPU ou RAM para contingência (25% neste cluster de 4 hosts), o vSphere HA **bloqueia o *power-on*** da VM para preservar a reserva global de *failover* do cluster (diferente de apenas alertar, de depender do DRS para "criar" capacidade ou de reajustar a porcentagem sozinho).',
    correctAnalysis:
      'O Admission Control atua preventivamente bloqueando o power-on de novas VMs que consumam a capacidade reservada para failover.',
    optionErrors: {
      0: 'Incorreta: ligar a VM registrando apenas alarme ocorre com o Admission Control desativado, não quando a imposição de reserva está habilitada.',
      2: 'Incorreta: o DRS não cria capacidade de failover; a reserva percentual aplica-se à soma do cluster inteiro, não a um único host.',
      3: 'Incorreta: a porcentagem reservada é configurada pelo administrador e não se ajusta automaticamente ao ligar novas VMs.'
    }
  },
  {
    id: 'sarah-5-64',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre o comportamento do **vSphere HA** e do **Fault Tolerance** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em uma partição de rede (*Network Partitioned*), os hosts divididos em subgrupos usam bloqueios nos datastores compartilhados para impedir que duas cópias da mesma VM rodem simultaneamente.\n( ) O **vSphere HA** reinicia as VMs afetadas com breve indisponibilidade (*boot*), enquanto o **vSphere Fault Tolerance (FT)** mantém uma instância secundária espelhada continuamente com *zero downtime*.\n( ) Com o recurso **VM Monitoring** ativo, uma VM é reiniciada imediatamente assim que o *heartbeat* do VMware Tools atrasa, mesmo que a VM mantenha intenso tráfego contínuo de disco ou rede.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – V – F.',
      'V – F – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.2. vSphere HA. (1) verdadeira: o acesso coordenado via arquivos/locks no datastore impede *split-brain* de VM entre partições; (2) verdadeira: HA faz *cold restart* após falha física; FT espelha estado continuamente sem *downtime*; (3) falsa: para evitar falsos positivos em guests ocupados, o **VM Monitoring** exige a ausência tanto do *heartbeat* do VMware Tools **quanto de atividade de I/O de disco e rede** antes de reiniciar a VM.',
    correctAnalysis:
      'Gabarito: V – V – F. A terceira afirmativa é falsa porque o VM Monitoring também verifica atividade de I/O de disco e rede antes de reiniciar uma VM sem heartbeat.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre a proteção do datastore contra execução simultânea em partição de rede.',
      2: 'Incorreta: a afirmativa (2) é verdadeira na distinção entre restart do HA e zero downtime do FT.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois atividade ativa de I/O de disco/rede inibe reinicialização prematura pelo VM Monitoring.'
    }
  },
  {
    id: 'sarah-5-65',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os mecanismos de eleição, prioridade e isolamento no **VMware vSphere HA**, assinale a afirmação INCORRETA.',
    options: [
      'Os hosts ESXi do cluster elegem um nó Master responsável por monitorar os nós Slaves e orquestrar o religamento das VMs após falhas.',
      'A opção VM Restart Priority permite definir prioridades como Highest para controladores de domínio e bancos antes de servidores secundários.',
      'Quando Host Isolation Response está definido como Leave powered on, o nó isolado desliga imediatamente todas as suas VMs locais ao perder o Master.',
      'O Datastore Heartbeating auxilia o Master a confirmar que um host ausente na rede de gerência continua vivo acessando o armazenamento compartilhado.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.2. Host Isolation Response no vSphere HA. A alternativa C é **incorreta**: a opção ***Leave powered on*** mantém as máquinas virtuais **ligadas e em execução** no host isolado (útil quando a rede das VMs e o storage seguem operando apesar da perda da rede de gerenciamento); para desligar ou encerrar graciosamente no isolamento utilizam-se *Power off* ou *Shut down*.',
    correctAnalysis:
      'A afirmação C é incorreta porque Leave powered on mantém as VMs ligadas no host isolado, em vez de desligá-las.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a arquitetura FDM do vSphere HA elege 1 host Master e os demais atuam como Slaves.',
      1: 'Incorreta (afirmação verdadeira): VM Restart Priority ordena a sequência de religamento entre VMs críticas e secundárias.',
      3: 'Incorreta (afirmação verdadeira): Datastore Heartbeating é o mecanismo secundário que distingue host morto de host isolado.'
    }
  },
  {
    id: 'sarah-5-66',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre alta disponibilidade no vSphere:\n\nO recurso que usa volumes compartilhados para checar se um host que parou de responder na rede de gerência continua operacional é o _____; a política que impede ligar novas VMs caso não reste capacidade reservada para contingência no cluster é o _____; e a tecnologia que mantém cópia espelhada síncrona evitando a reinicialização da VM na queda de um host físico é o _____.',
    options: [
      'VM Monitoring / VM Restart Priority / vSphere DRS',
      'Host Isolation / Admission Control / Storage DRS',
      'Datastore Heartbeating / Admission Control / Fault Tolerance',
      'Datastore Heartbeating / Host Isolation / Fault Tolerance'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.2. vSphere HA e FT. A validação via armazenamento compartilhado é o **Datastore Heartbeating**; a garantia de reserva contra superlotação é o **Admission Control**; e a proteção síncrona sem *downtime* é o **Fault Tolerance** (FT).',
    correctAnalysis:
      'Respectivamente: Datastore Heartbeating, Admission Control e Fault Tolerance.',
    optionErrors: {
      0: 'Incorreta: VM Monitoring monitora o SO convidado da VM e DRS faz balanceamento, não espelhamento síncrono FT.',
      1: 'Incorreta: Host Isolation é o estado/resposta à perda de gerência e Storage DRS balanceia datastores.',
      3: 'Incorreta: quem bloqueia power-on por falta de capacidade de reserva é o Admission Control, não Host Isolation.'
    }
  },
  {
    id: 'sarah-5-67',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um cluster com 3 hosts ESXi equipados com processadores Intel Xeon antigos recebe um 4º nó com processadores Intel Xeon mais recentes. O *live vMotion* funciona dos nós antigos para o novo, mas falha ao tentar migrar uma VM ligada do host novo de volta aos antigos por divergência de instruções de CPU. Qual recurso resolve o problema sem interromper futuras migrações a quente?',
    options: [
      'Atualizar a versão de hardware virtual (VM hardware version) de todas as VMs para a mais recente.',
      'Configurar Multi-NIC vMotion com duas portas VMkernel nos hosts antigos.',
      'Colocar o host novo em modo de manutenção antes de cada migração de volta aos hosts antigos.',
      'Habilitar o EVC (Enhanced vMotion Compatibility) nivelando as instruções Intel.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.3. vMotion e EVC. Sem **EVC**, uma VM iniciada em CPU mais nova pode expor instruções inexistentes nos nós mais antigos, bloqueando o retorno a quente. Habilitar o **EVC (*Enhanced vMotion Compatibility*)** no cluster (ou em nível *per-VM*) mascara as instruções mais recentes até uma linha de base comum entre os processadores do mesmo fabricante (Intel neste caso), garantindo *vMotion* bidirecional.',
    correctAnalysis:
      'O EVC nivela o conjunto de instruções exposto às VMs para o denominador comum da geração de CPU mais antiga do cluster, permitindo vMotion em ambos os sentidos.',
    optionErrors: {
      0: 'Incorreta: atualizar a VM hardware version ajusta dispositivos virtuais, mas não mascara instruções físicas de gerações mais novas da CPU.',
      1: 'Incorreta: Multi-NIC vMotion amplia a vazão de rede da migração, sem resolver divergências do conjunto de instruções entre CPUs.',
      2: 'Incorreta: colocar o host novo em modo de manutenção apenas dispara migrações, que continuam falhando sem nivelamento das instruções de CPU.'
    }
  },
  {
    id: 'sarah-5-68',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os mecanismos, fases e modalidades de **vMotion** à esquerda com suas definições técnicas à direita.\n\nColuna da Esquerda:\n(I) Pré-cópia iterativa (*pre-copy*)\n(II) Fase de *switchover* (*stun*)\n(III) Interface VMkernel de vMotion\n(IV) Storage vMotion\n(V) Cross-vCenter vMotion\n\nColuna da Direita:\n(A) Porta lógica dedicada no ESXi para transportar estado de RAM e CPU fora da rede das VMs.\n(B) Migra VMs ligadas entre hosts pertencentes a instâncias diferentes de vCenter Server.\n(C) Copia páginas de RAM com a VM rodando e rastreia *dirty pages* alteradas em rodadas.\n(D) Congela brevemente a VM para transferir as últimas *dirty pages* e notifica o switch via RARP.\n(E) Migra os arquivos `.vmdk` de uma VM ligada entre datastores distintos sem indisponibilidade.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-D, III-A, IV-E, V-B.',
      'I-D, II-C, III-A, IV-E, V-B.',
      'I-C, II-D, III-E, IV-A, V-B.',
      'I-C, II-D, III-A, IV-B, V-E.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.3. vMotion. (I-C) **Pré-cópia iterativa** transfere a RAM e reenvia *dirty pages* enquanto a VM roda; (II-D) **Switchover** faz um breve *stun* final e envia RARP no destino; (III-A) **Porta VMkernel** isola o tráfego de migração no ESXi; (IV-E) **Storage vMotion** move discos `.vmdk` a quente entre datastores; (V-B) **Cross-vCenter vMotion** migra VMs ligadas entre vCenters distintos.',
    correctAnalysis:
      'Associação exata: I-C, II-D, III-A, IV-E e V-B.',
    optionErrors: {
      1: 'Incorreta: inverte a fase iterativa de pré-cópia (I-C) com a fase final de switchover (II-D).',
      2: 'Incorreta: inverte interface VMkernel de vMotion (III-A) com Storage vMotion (IV-E).',
      3: 'Incorreta: inverte Storage vMotion (IV-E) com Cross-vCenter vMotion (V-B).'
    }
  },
  {
    id: 'sarah-5-69',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os requisitos, execução e alcance do **vMotion** no VMware vSphere, considere as afirmativas:\n\nI. No vMotion tradicional entre hosts conectados ao mesmo storage compartilhado, transferem-se pela rede VMkernel as páginas de memória RAM, o estado de CPU e os dispositivos virtuais, mantendo os discos `.vmdk` no mesmo datastore.\nII. O *Shared-Nothing vMotion* permite migrar simultaneamente uma VM em execução para outro host ESXi e para outro datastore sem exigir armazenamento compartilhado prévio entre origem e destino.\nIII. O recurso EVC (*Enhanced vMotion Compatibility*) permite migrar VMs ligadas livremente entre processadores de fabricantes diferentes (por exemplo, de Intel Xeon para AMD EPYC) dentro do mesmo cluster.\nIV. Durante um **Storage vMotion**, a máquina virtual é obrigatoriamente desligada antes da cópia do disco `.vmdk` para evitar inconsistências no datastore de destino.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.3. vMotion. I verdadeira (vMotion de computação move apenas estado em memória/CPU mantendo os arquivos no datastore compartilhado); II verdadeira (*Shared-Nothing vMotion* migra host + datastore juntos); III falsa: o **EVC só funciona entre gerações de um MESMO fabricante** (Intel com Intel ou AMD com AMD), nunca entre Intel e AMD em *live migration*; IV falsa: o **Storage vMotion** ocorre a quente (*live*) sem desligar a VM.',
    correctAnalysis:
      'Gabarito: Somente I e II estão corretas. EVC não compatibiliza Intel com AMD para live migration e Storage vMotion ocorre com a VM ligada.',
    optionErrors: {
      1: 'Incorreta: a afirmativa III é falsa, pois EVC não permite vMotion ao vivo entre fabricantes diferentes (Intel × AMD).',
      2: 'Incorreta: a afirmativa IV é falsa, pois Storage vMotion opera com a VM ligada sem downtime.',
      3: 'Incorreta: a afirmativa III é falsa quanto à compatibilidade cruzada Intel × AMD no EVC.'
    }
  },
  {
    id: 'sarah-5-70',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre mecanismos e pré-requisitos de **vMotion** e **Storage vMotion** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O **Storage vMotion** transfere exclusivamente o estado de memória RAM e registradores de CPU entre dois hosts ESXi, deixando o arquivo `.vmdk` inalterado no datastore original.\n( ) Um *Port Group* comum de máquinas virtuais ligado a uma placa física já basta para o ESXi executar *vMotion*, dispensando a configuração de interface *VMkernel* habilitada para o serviço.\n( ) Na conclusão do *switchover* de um **vMotion**, o host de destino emite um quadro **RARP** na rede para atualizar rapidamente a tabela MAC dos switches físicos com a nova porta do adaptador da VM.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.3. vMotion. (1) falsa: migrar estado de RAM/CPU entre hosts mantendo o `.vmdk` no mesmo datastore é o **vMotion** de computação (*Storage vMotion* move os arquivos da VM entre datastores); (2) falsa: o tráfego de vMotion exige obrigatoriamente uma interface **VMkernel (`vmk`)** com o serviço vMotion habilitado; (3) verdadeira: o quadro **RARP** atualiza os switches L2 na comutação final (*switchover*).',
    correctAnalysis:
      'Gabarito: F – F – V. Apenas a terceira afirmativa sobre a notificação RARP no switchover está correta.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois descreve o vMotion de computação, e não o Storage vMotion.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o ESXi exige uma interface VMkernel dedicada/habilitada para vMotion.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre o envio de RARP ao switch físico após o switchover.'
    }
  },
  {
    id: 'sarah-5-71',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre funcionamento interno, requisitos de rede e modalidades avançadas do **vMotion**, assinale a afirmação INCORRETA.',
    options: [
      'Durante a cópia iterativa da RAM, páginas alteradas pela VM em execução são marcadas como dirty pages e retransmitidas em ciclos até a comutação final.',
      'O recurso Cross-vCenter vMotion exige obrigatoriamente que origem e destino pertençam ao mesmo cluster vSphere HA e compartilhem a mesma LUN VMFS prévia.',
      'Os Port Groups da VM nos hosts de origem e destino devem preservar conectividade na mesma sub-rede/VLAN L2 para não derrubar conexões TCP ativas.',
      'Configurar múltiplas portas VMkernel em diferentes uplinks físicos (Multi-NIC vMotion) permite paralelizar o tráfego de migração de memória entre os hosts.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.3. Cross-vCenter vMotion. A alternativa B é **incorreta**: justamente o objetivo do **Cross-vCenter vMotion** é migrar VMs ligadas entre **instâncias distintas de vCenter**, clusters diferentes e, inclusive, datastores diferentes (suportando *shared-nothing*), sem exigir que pertençam ao mesmo cluster vSphere HA nem compartilhem a mesma LUN prévia.',
    correctAnalysis:
      'A afirmação B é falsa porque o Cross-vCenter vMotion funciona entre vCenters, clusters e storages distintos sem exigir o mesmo cluster HA ou LUN compartilhada.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o rastreamento de dirty pages viabiliza a cópia iterativa sem desligar a VM.',
      2: 'Incorreta (afirmação verdadeira): manter continuidade L2 entre Port Groups preserva o IP e sessões ativas durante a troca de host.',
      3: 'Incorreta (afirmação verdadeira): Multi-NIC vMotion distribui fluxos de migração por múltiplas interfaces físicas de rede.'
    }
  },
  {
    id: 'sarah-5-72',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **vMotion** no vSphere:\n\nA migração ao vivo dos arquivos `.vmdk` de uma VM ligada entre dois datastores distintos é feita pelo _____; para garantir que hosts com gerações diferentes do mesmo fabricante de CPU executem *live vMotion* sem erro de compatibilidade, configura-se o recurso _____; já as páginas de memória modificadas pela VM enquanto a cópia iterativa ainda está em curso são chamadas de _____.',
    options: [
      'Compute vMotion / Fault Tolerance / shadow pages',
      'Storage vMotion / Admission Control / swap pages',
      'Storage vMotion / EVC (Enhanced vMotion) / dirty pages',
      'Cross-vCenter / EVC (Enhanced vMotion) / pinned pages'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.3. vMotion. Migrar discos entre datastores com a VM ligada é função do **Storage vMotion**; mascarar diferenças entre gerações de CPU do mesmo fabricante é função do **EVC**; e páginas alteradas em memória durante a cópia iterativa recebem o nome de **dirty pages**.',
    correctAnalysis:
      'Respectivamente: Storage vMotion, EVC e dirty pages.',
    optionErrors: {
      0: 'Incorreta: vMotion de computação move a execução entre hosts (não discos entre datastores) e Fault Tolerance é espelhamento de disponibilidade.',
      1: 'Incorreta: Admission Control reserva capacidade de failover no HA (não compatibiliza instruções de CPU).',
      3: 'Incorreta: Cross-vCenter define migração entre vCenters distintos, não especificamente a troca de datastore com a VM ligada.'
    }
  },
  {
    id: 'sarah-5-73',
    editalItemId: '5.2.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos de **datastores** e formatos de disco virtual à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) Datastore VMFS\n(II) Datastore NFS\n(III) Thin Provisioned\n(IV) Thick Provision Lazy Zeroed\n(V) Datastore Cluster (Storage DRS)\n\nColuna da Direita:\n(A) Aloca 100% do tamanho nominal imediatamente no datastore, zerando cada bloco somente na primeira gravação.\n(B) Sistema de arquivos clusterizado sobre armazenamento em bloco que permite acesso concorrente por vários hosts ESXi.\n(C) Agrupamento lógico de vários datastores que balanceia automaticamente capacidade ocupada e latência entre volumes.\n(D) Aloca blocos físicos sob demanda conforme gravação do convidado, permitindo *overcommit* monitorado.\n(E) Repositório montado diretamente sobre compartilhamento NAS em nível de arquivo via IP, sem formatar VMFS.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-B, II-E, III-A, IV-D, V-C.',
      'I-E, II-B, III-D, IV-A, V-C.',
      'I-B, II-D, III-E, IV-A, V-C.',
      'I-B, II-E, III-D, IV-A, V-C.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.4. Datastores no vSphere. (I-B) **VMFS** é o *cluster file system* sobre blocos para ESXi; (II-E) **NFS** monta volumes NAS em nível de arquivo diretamente via IP; (III-D) **Thin Provisioned** consome espaço sob demanda; (IV-A) **Thick Lazy Zeroed** reserva 100% na criação e zera sob demanda na 1ª escrita; (V-C) **Datastore Cluster** agrupa datastores sob gerência do *Storage DRS*.',
    correctAnalysis:
      'Associação exata: I-B, II-E, III-D, IV-A e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte Thin Provisioned (III-D) com Thick Provision Lazy Zeroed (IV-A).',
      1: 'Incorreta: inverte Datastore VMFS (I-B) com Datastore NFS (II-E).',
      2: 'Incorreta: inverte Datastore NFS (II-E) com Thin Provisioned (III-D).'
    }
  },
  {
    id: 'sarah-5-74',
    editalItemId: '5.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre sistemas de arquivos de datastores, formatos de VMDK e *Datastore Clusters* no vSphere, considere as afirmativas:\n\nI. Para montar um compartilhamento **NFS** exportado por um NAS como datastore no ESXi, o administrador deve formatar o volume NFS utilizando **VMFS6**.\nII. O sistema de arquivos **VMFS6** suporta recuperação automática e assíncrona de blocos liberados (*UNMAP* automático) para devolver espaço não utilizado em volumes *thin* ao storage subjacente.\nIII. O formato **Thick Provision Lazy Zeroed** reserva integralmente o espaço nominal desde a criação da VM, diferindo do *Eager Zeroed* por adiar a zeragem dos blocos até a primeira gravação em cada área.\nIV. Em um **Datastore Cluster** com *Storage DRS*, recomenda-se agrupar datastores de desempenho homogêneo para balancear espaço ocupado e latência de I/O entre os volumes integrantes.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.4. Datastores. I falsa: volumes **NFS** já possuem sistema de arquivos gerenciado pelo servidor NAS e são montados diretamente no ESXi via cliente NFS, **nunca formatados com VMFS** (VMFS aplica-se apenas a volumes em bloco); II verdadeira (**VMFS6** trouxe *automatic UNMAP* assíncrono); III verdadeira (**Lazy Zeroed** reserva 100% e zera na 1ª escrita); IV verdadeira (**Datastore Cluster** balanceia capacidade e latência em datastores homogêneos).',
    correctAnalysis:
      'Gabarito: Somente II, III e IV estão corretas. A afirmativa I erra ao exigir formatação VMFS sobre um compartilhamento NFS já gerenciado pelo NAS.',
    optionErrors: {
      0: 'Incorreta: a afirmativa I é falsa (NFS não é formatado com VMFS) e omite III e IV (verdadeiras).',
      1: 'Incorreta: inclui a afirmativa I (falsa) e omite a IV (verdadeira).',
      2: 'Incorreta: inclui a afirmativa I (falsa) e omite a II (verdadeira).'
    }
  },
  {
    id: 'sarah-5-75',
    editalItemId: '5.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre datastores e provisionamento de discos virtuais no vSphere e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O formato **Thick Provision Lazy Zeroed** consome fisicamente no datastore VMFS apenas os blocos efetivamente gravados pelo SO convidado, economizando espaço como o *Thin Provisioned*.\n( ) Tanto datastores compartilhados **VMFS** quanto datastores compartilhados **NFS** permitem utilizar recursos de cluster como *vMotion* e *vSphere HA*.\n( ) Quando um datastore **VMFS6** atinge 100% de ocupação física por excesso de *overcommit* em discos *Thin*, o *Storage DRS* expande automaticamente o tamanho físico do volume no storage sem intervenção administrativa.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.4. Datastores. (1) falsa: apenas **Thin Provisioned** economiza espaço inicial alocando sob demanda — **Thick Lazy Zeroed** reserva 100% do tamanho nominal desde a criação; (2) verdadeira: VMFS e NFS compartilhados suportam *vMotion* e *HA*; (3) falsa: o *Storage DRS* balanceia ou move VMs entre datastores do cluster mediante limiares configurados, mas **não expande automaticamente volumes/LUNs físicos** no storage quando um datastore esgota 100%.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa é verdadeira sobre o suporte de VMFS e NFS compartilhados a vMotion e HA.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois Thick Provision Lazy Zeroed aloca 100% do espaço nominal já na criação.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre o suporte de datastores compartilhados VMFS e NFS a HA e vMotion.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois Storage DRS não amplia volumes físicos automaticamente no array ao esgotar um datastore.'
    }
  },
  {
    id: 'sarah-5-76',
    editalItemId: '5.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre formatos de disco virtual, datastores e gerenciamento de espaço no VMware vSphere, assinale a afirmação INCORRETA.',
    options: [
      'Discos Thick Provision Eager Zeroed levam mais tempo na criação por zerarem todos os blocos antecipadamente, sendo recomendados para cargas críticas e multi-writer.',
      'Manter margem segura de espaço livre em datastores com discos Thin Provisioned evita que o crescimento simultâneo das VMs esgote o volume e paralise máquinas ativas.',
      'Em um datastore VMFS, criar um disco Thin Provisioned de 500 GB com apenas 60 GB gravados consome imediatamente 500 GB físicos reais da partição desde a criação.',
      'Um Datastore Cluster reúne múltiplos datastores em uma entidade lógica para que o Storage DRS recomende ou execute balanceamento de espaço e latência.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.4. Overcommit e Thin Provisioning. A alternativa C é **incorreta**: um disco virtual ***Thin Provisioned*** de 500 GB que possui apenas 60 GB gravados ocupa fisicamente no datastore VMFS **apenas ~60 GB** (e não 500 GB imediatos — característica dos formatos *Thick*). O valor 500 GB contabiliza apenas como espaço provisionado em potencial (*overcommit*).',
    correctAnalysis:
      'A afirmação C é incorreta porque atribui consumo físico imediato de 100% (comportamento Thick) a um disco Thin Provisioned com apenas 60 GB gravados.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Eager Zeroed reserva e zera toda a área na criação, evitando atraso de primeira escrita e suportando multi-writer.',
      1: 'Incorreta (afirmação verdadeira): monitorar espaço livre é indispensável sob overcommitment Thin para evitar parada de VMs.',
      3: 'Incorreta (afirmação verdadeira): essa é a finalidade do Datastore Cluster combinado ao Storage DRS.'
    }
  },
  {
    id: 'sarah-5-77',
    editalItemId: '5.2.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre armazenamento de VMs no VMware vSphere:\n\nO sistema de arquivos clusterizado utilizado em volumes em bloco compartilhados simultaneamente por múltiplos hosts ESXi é o _____; o formato de disco virtual que aloca 100% da capacidade no datastore e zera todos os blocos já no momento da criação é o _____; e o agrupamento lógico de datastores gerenciado pelo *Storage DRS* para equilibrar ocupação e latência denomina-se _____.',
    options: [
      'NFSv4 / Thin Provisioned / Resource Pool',
      'VMFS / Thick Lazy Zeroed / Storage vMotion',
      'VMFS / Thick Eager Zeroed / Datastore Cluster',
      'ext4 / Thick Eager Zeroed / Host Cluster'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.4. Datastores. O sistema de arquivos clusterizado próprio do vSphere em volumes de bloco é o **VMFS**; o formato que reserva e zera integralmente na criação é o **Thick Eager Zeroed**; e o conjunto lógico gerenciado pelo *Storage DRS* é o **Datastore Cluster**.',
    correctAnalysis:
      'Respectivamente: VMFS, Thick Eager Zeroed e Datastore Cluster.',
    optionErrors: {
      0: 'Incorreta: NFSv4 é protocolo NAS (não sistema de arquivos formatado pelo ESXi em bloco) e Resource Pool gerencia CPU/RAM.',
      1: 'Incorreta: Thick Lazy Zeroed adia a zeragem até a primeira escrita e Storage vMotion é o mecanismo de migração, não o grupo de datastores.',
      3: 'Incorreta: ext4 não é sistema de arquivos clusterizado suportado como datastore compartilhado do ESXi.'
    }
  },
  {
    id: 'sarah-5-78',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após uma rotina de backup noturna baseada em API, o Gerenciador de Snapshots do vCenter não exibe nenhum snapshot visível para uma VM de produção, porém o resumo da máquina exibe o alerta *"Virtual machine disks consolidation is needed"*. O que ocorreu e qual procedimento resolve o problema sem desligar a VM?',
    options: [
      'Restaram arquivos delta órfãos ainda abertos na cadeia; executar Snapshots > Consolidate comita esses deltas ao disco base.',
      'O arquivo .vmsn de memória corrompeu no datastore; deve-se apagar manualmente os arquivos -delta.vmdk pela CLI do ESXi.',
      'O datastore VMFS entrou em modo somente leitura por falha de VMware Tools; basta reiniciar o serviço vpxa no host ESXi.',
      'A VM precisa executar Revert to Snapshot para eliminar o alerta mantendo todas as gravações feitas após o backup noturno.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.5. Snapshots e Consolidação. Quando a exclusão do snapshot falha parcialmente (por exemplo, por bloqueio temporário de backup), a entrada lógica desaparece do Snapshot Manager, mas arquivos *delta* órfãos continuam ativos recebendo escritas, gerando o aviso *Needs Consolidation*. A operação **Consolidate** aplica os deltas pendentes no disco pai online sem perda de dados nem desligamento.',
    correctAnalysis:
      'O alerta "Needs Consolidation" indica delta disks órfãos pendentes que devem ser fundidos ao disco base por meio da ação Snapshots > Consolidate.',
    optionErrors: {
      1: 'Incorreta: excluir arquivos -delta.vmdk manualmente no datastore corrompe imediatamente o disco virtual ativo da VM.',
      2: 'Incorreta: reiniciar o vpxa ou atualizar VMware Tools não funde arquivos delta órfãos no datastore.',
      3: 'Incorreta: Revert to Snapshot descarta alterações recentes (além de exigir snapshot visível), não sendo o método de consolidação de deltas órfãos.'
    }
  },
  {
    id: 'sarah-5-79',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos e operações de **snapshots** de máquinas virtuais à esquerda com suas funções à direita.\n\nColuna da Esquerda:\n(I) Disco base (`-flat.vmdk`)\n(II) *Delta disk* (`-delta.vmdk` / `-sesparse`)\n(III) Arquivo `.vmsn`\n(IV) Opção *Quiesce* (VSS)\n(V) Consolidação (*Consolidate*)\n\nColuna da Direita:\n(A) Registra metadados do ponto de restauração e, quando selecionada a opção, o conteúdo da memória RAM da VM.\n(B) Permanece congelado em modo somente leitura enquanto existir snapshot ativo, preservando o estado original.\n(C) Funde blocos pendentes da cadeia de deltas ao disco pai quando há arquivos órfãos após exclusão.\n(D) Recebe exclusivamente as alterações de blocos gravadas após a criação do snapshot correspondente.\n(E) Pausa e descarrega buffers do sistema convidado via VMware Tools para maior consistência de arquivos/bancos.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-B, II-D, III-A, IV-E, V-C.',
      'I-D, II-B, III-A, IV-E, V-C.',
      'I-B, II-D, III-E, IV-A, V-C.',
      'I-B, II-D, III-A, IV-C, V-E.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.5. Snapshots. (I-B) O **disco base** fica em somente leitura; (II-D) o **delta disk** armazena apenas alterações posteriores; (III-A) o **`.vmsn`** guarda metadados e estado opcional da RAM; (IV-E) **Quiesce** aciona VSS/VMware Tools para esvaziar buffers em disco; (V-C) **Consolidate** comita deltas pendentes ou órfãos.',
    correctAnalysis:
      'Associação exata: I-B, II-D, III-A, IV-E e V-C.',
    optionErrors: {
      1: 'Incorreta: inverte o disco base congelado (I-B) com o delta disk de gravação posterior (II-D).',
      2: 'Incorreta: inverte arquivo .vmsn (III-A) com opção Quiesce (IV-E).',
      3: 'Incorreta: inverte opção Quiesce (IV-E) com operação Consolidate (V-C).'
    }
  },
  {
    id: 'sarah-5-80',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre funcionamento, consistência e boas práticas de **snapshots** em ambientes virtualizados e de storage, analise as afirmativas:\n\nI. O snapshot de máquina virtual depende da integridade do disco base e dos arquivos delta no mesmo datastore, motivo pelo qual não substitui rotinas de backup em repositório isolado.\nII. Habilitar *Quiesce guest file system* aciona o VMware Tools (e VSS em guests Windows) para descarregar *caches* em disco antes do ponto, elevando a consistência de arquivos e bancos de dados.\nIII. Ao criar um snapshot com captura de memória, a opção *Quiesce* é aplicada automaticamente, dispensando o VMware Tools no sistema convidado.\nIV. Por boas práticas operacionais, snapshots de VM devem ser removidos rapidamente (tipicamente em janelas de até 24–72 horas), evitando cadeias longas que degradam I/O e consomem espaço extra.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.5. Snapshots. I verdadeira (dependência da cadeia impede que snapshot substitua backup); II verdadeira (*Quiesce* garante consistência transacional via VSS/VMware Tools); III falsa: capturar memória (`.vmsn`) e aplicar *Quiesce* são opções **independentes** (inclusive mutuamente excludentes no cliente vSphere moderno), e o *Quiesce* exige obrigatoriamente o **VMware Tools** rodando no sistema convidado; IV verdadeira (retenção curta evita degradação de leitura e estouro de datastore).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III é falsa porque captura de memória e Quiesce são opções independentes e o Quiesce depende do VMware Tools.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, que traz corretamente a boa prática de retenção curta de snapshots.',
      2: 'Incorreta: inclui a afirmativa III (falsa — memória e Quiesce são independentes e Quiesce exige VMware Tools) e omite II (verdadeira).',
      3: 'Incorreta: inclui III (falsa) e omite I (verdadeira).'
    }
  },
  {
    id: 'sarah-5-81',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre manipulação de **snapshots** de VM e de *storage* e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Ao clicar em *Delete* sobre um snapshot no Gerenciador de Snapshots do vSphere, o hipervisor descarta todas as gravações posteriores a ele e retorna a VM ao estado anterior.\n( ) O snapshot de VM atua no nível de arquivos VMDK dentro do datastore pelo hipervisor, enquanto o snapshot de *storage* atua no nível de LUN/volume pelos ponteiros do *array*.\n( ) Uma cadeia com muitos snapshots sucessivos penaliza a latência de leitura (por exigir travessia de múltiplos deltas) e pode fazer o consumo total se aproximar da soma dos deltas acumulados.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.5. Snapshots. (1) falsa: executar ***Delete*** comita/consolida as alterações do delta no disco pai preservando o estado atual da VM (quem volta ao passado descartando alterações posteriores é ***Revert to Snapshot***); (2) verdadeira: distinção exata entre snapshot de VM (VMDK) e snapshot de *array* (LUN/ponteiros); (3) verdadeira: cadeias longas degradam leitura e acumulam consumo no datastore.',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa confunde Delete (que consolida preservando o estado atual) com Revert to Snapshot (que volta ao estado anterior).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois Delete consolida alterações sem reverter a VM ao passado.',
      2: 'Incorreta: a afirmativa (2) é verdadeira na distinção entre snapshot de VM (VMDK) e de storage (LUN).',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre o impacto de desempenho e espaço de cadeias longas.'
    }
  },
  {
    id: 'sarah-5-82',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em sistemas de armazenamento corporativo, qual característica técnica explica por que snapshots baseados em *Redirect-on-Write (ROW)* costumam impor menor penalidade de latência na primeira sobrescrita de blocos após o snapshot quando comparados ao *Copy-on-Write (COW)*?',
    options: [
      'O ROW dispensa atualização de metadados de ponteiros porque sobrescreve o bloco original no mesmo endereço físico mantendo o antigo em cache volátil.',
      'O COW exige clonar fisicamente 100% dos blocos ocupados da LUN no momento da criação do snapshot antes de liberar escritas na produção.',
      'O ROW grava o novo dado diretamente em bloco livre atualizando ponteiros, enquanto o COW precisa ler e copiar o bloco antigo antes de sobrescrevê-lo.',
      'O COW realiza apenas alterações de ponteiros sem movimentar blocos antigos, ao passo que o ROW duplica imediatamente todo o volume na primeira escrita.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.5. Copy-on-Write × Redirect-on-Write. No **COW**, antes de alterar um bloco original na área ativa, o storage precisa lê-lo, copiá-lo para a área de snapshot (preservando a imagem antiga) e só então gravar o dado novo no local original. No **ROW**, o bloco antigo permanece intocado onde está e o dado novo vai direto para um bloco livre com atualização de ponteiro, reduzindo I/Os extras de escrita.',
    correctAnalysis:
      'ROW escreve o novo dado em bloco livre e atualiza ponteiros sem precisar copiar o bloco original previamente como ocorre no COW.',
    optionErrors: {
      0: 'Incorreta: o ROW depende de atualização de tabelas de ponteiros e não sobrescreve o bloco antigo in-place.',
      1: 'Incorreta: clonar 100% do volume no momento da criação descreve um full clone, não um snapshot COW sob demanda.',
      3: 'Incorreta: o COW movimenta/copia blocos antigos na primeira modificação, e o ROW não duplica o volume inteiro.'
    }
  },
  {
    id: 'sarah-5-83',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **snapshots** no VMware vSphere:\n\nQuando um snapshot é criado para uma VM ligada com captura de memória ativada, além dos arquivos de disco _____ que registram apenas as gravações posteriores em blocos, o hipervisor gera o arquivo _____ contendo o estado da RAM; caso se deseje consistência de sistema de arquivos e bancos de dados sem capturar a memória, habilita-se a opção _____ via VMware Tools.',
    options: [
      'base (-flat) / .vmx / Consolidation',
      'delta / .vmdk / Revert to Snapshot',
      'sparse / .nvram / Redirect-on-Write',
      'delta / .vmsn / Quiesce'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.5. Snapshots no vSphere. As alterações em disco vão para arquivos **delta**; o estado de memória e metadados do ponto vai para o arquivo **`.vmsn`**; e a preparação consistente do sistema de arquivos/aplicações via VSS/VMware Tools chama-se ***Quiesce*** (*Quiesce guest file system*).',
    correctAnalysis:
      'Respectivamente: delta, .vmsn e Quiesce.',
    optionErrors: {
      0: 'Incorreta: -flat é o disco base somente leitura, .vmx é a configuração da VM e Consolidation funde deltas pendentes.',
      1: 'Incorreta: o arquivo de estado de memória é .vmsn (não .vmdk), e Revert to Snapshot volta ao ponto anterior.',
      2: 'Incorreta: .nvram guarda BIOS/UEFI da VM e Redirect-on-Write é um método de snapshot em storage arrays.'
    }
  },
  {
    id: 'sarah-5-84',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um administrador configura duas interfaces VMkernel (`vmk1` e `vmk2`) na mesma sub-rede `172.16.30.0/24` em um vSwitch com dois *uplinks* físicos (`vmnic2` e `vmnic3`) para aplicar **iSCSI Port Binding** no iniciador de software do ESXi. Porém, o vCenter impede adicionar `vmk1` e `vmk2` à aba *Network Port Binding*. Qual ajuste de *teaming* resolve o bloqueio?',
    options: [
      'Garantir que cada VMkernel tenha exatamente 1 uplink físico Active exclusivo e o outro em Unused (sem Standby ou múltiplos Active).',
      'Desativar o protocolo CHAP mútuo no Target até concluir o Port Binding, pois a autenticação bloqueia a associação de interfaces VMkernel.',
      'Alterar vmk1 e vmk2 para sub-redes IP diferentes com gateway roteado, pois o iSCSI Port Binding exige obrigatoriamente roteamento L3.',
      'Reduzir a MTU de vmk1 e vmk2 para 1500 bytes, já que o iSCSI Port Binding do VMware ESXi não oferece suporte a redes com Jumbo Frames.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.6. iSCSI Port Binding. Para que cada VMkernel represente um caminho físico determinístico 1:1 para o multipathing iSCSI, o **Port Binding** exige que cada porta VMkernel configurada possua **exatamente 1 NIC física em *Active Adapters*** e **nenhuma em *Standby*** (a outra NIC deve permanecer em ***Unused Adapters***), além de todas estarem na mesma sub-rede L2 do portal Target.',
    correctAnalysis:
      'O iSCSI Port Binding exige relação 1:1 entre VMkernel e uplink ativo (1 Active e demais Unused, sem Standby) na mesma sub-rede.',
    optionErrors: {
      1: 'Incorreta: CHAP mútuo autentica a sessão iSCSI após a descoberta e não bloqueia a política de Port Binding no vSwitch.',
      2: 'Incorreta: é o oposto — Port Binding exige mesma sub-rede IP L2; quando há roteamento L3 entre sub-redes, não se usa Port Binding.',
      3: 'Incorreta: Port Binding é totalmente compatível com Jumbo Frames (MTU 9000) quando configurados ponta a ponta.'
    }
  },
  {
    id: 'sarah-5-85',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os componentes, modos de iniciador e mecanismos do protocolo **iSCSI** à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) Iniciador iSCSI de Software\n(II) HBA iSCSI Dependente\n(III) HBA iSCSI Independente\n(IV) Descoberta *SendTargets*\n(V) CHAP Mútuo (Bidirecional)\n\nColuna da Direita:\n(A) Adaptador dedicado que executa todo o processamento TCP/IP e iSCSI no próprio hardware, sem usar pilha VMkernel.\n(B) Autenticação em duas vias na qual o Target valida o Iniciador e o Iniciador também valida a identidade do Target.\n(C) Implementação em driver no sistema operacional ou VMkernel usando NICs Ethernet comuns e ciclos de CPU do host.\n(D) Consulta dinâmica na qual o iniciador contata IP e porta de um portal para receber a lista de nomes de Targets expostos.\n(E) Adaptador com *offload* de processamento iSCSI/TCP que ainda depende da pilha de rede do host para configuração IP.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-D, IV-A, V-B.',
      'I-C, II-E, III-A, IV-D, V-B.',
      'I-E, II-C, III-A, IV-D, V-B.',
      'I-C, II-A, III-E, IV-D, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.6. iSCSI. (I-C) **Iniciador de Software** roda em CPU/stack de rede do host; (II-E) **HBA Dependente** faz *offload* mas ainda usa configuração de rede do host; (III-A) **HBA Independente** processa TCP/IP e iSCSI integralmente no adaptador; (IV-D) **SendTargets** descobre Targets dinamicamente; (V-B) **CHAP Mútuo** autentica ambos os lados.',
    correctAnalysis:
      'Associação exata: I-C, II-E, III-A, IV-D e V-B.',
    optionErrors: {
      0: 'Incorreta: inverte HBA iSCSI Independente (III-A) com Descoberta SendTargets (IV-D).',
      2: 'Incorreta: inverte Iniciador de Software (I-C) com HBA iSCSI Dependente (II-E).',
      3: 'Incorreta: inverte HBA iSCSI Dependente (II-E) com HBA iSCSI Independente (III-A).'
    }
  },
  {
    id: 'sarah-5-86',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre nomenclatura, descoberta e arquitetura de redes **iSCSI**, analise as afirmativas:\n\nI. Na relação cliente-servidor do iSCSI, o **Iniciador** (no servidor ou hipervisor) origina comandos SCSI sobre TCP/IP em direção ao **Target** (no storage).\nII. Segundo a especificação padrão do protocolo iSCSI, apenas o formato `iqn.` é aceito para identificar nós, sendo inválido o padrão `eui.` (*Extended Unique Identifier*).\nIII. Na descoberta **estática**, o administrador informa manualmente IP, porta TCP e nome IQN/EUI exato do Target, dispensando consulta dinâmica *SendTargets*.\nIV. Isolar o tráfego iSCSI em uma **VLAN dedicada** separada das redes de gerência e usuários reduz contenção por *broadcast* e facilita padronizar *Jumbo Frames*.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.6. iSCSI. I verdadeira (Iniciador envia requisições SCSI ao Target); II falsa: a RFC do iSCSI prevê oficialmente tanto identificadores no formato **`iqn.`** (*iSCSI Qualified Name*) quanto no formato **`eui.`** (16 dígitos hexadecimais IEEE EUI-64); III verdadeira (descoberta estática aponta diretamente IP + porta + nome do alvo); IV verdadeira (VLAN dedicada isola tráfego de armazenamento).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II erra ao excluir o formato eui., também padronizado no iSCSI.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, que é verdadeira sobre o isolamento em VLAN dedicada.',
      2: 'Incorreta: inclui a afirmativa II (falsa quanto ao padrão eui.) e omite I (verdadeira).',
      3: 'Incorreta: inclui II (falsa) e omite III (verdadeira sobre descoberta estática).'
    }
  },
  {
    id: 'sarah-5-87',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre autenticação CHAP, adaptadores iSCSI e segmentação de rede em ambientes SAN IP, assinale a afirmação INCORRETA.',
    options: [
      'No CHAP unidirecional, apenas o Target autentica o Iniciador com base no segredo configurado, sem que o Iniciador valide a identidade do Target.',
      'Ao habilitar CHAP mútuo (bidirecional), recomenda-se configurar segredos distintos para a autenticação do Iniciador e do Target por segurança.',
      'Um HBA iSCSI independente exige obrigatoriamente interfaces VMkernel com iSCSI Port Binding no vSwitch para processar TCP/IP na CPU do host.',
      'Manter os portais Target e as interfaces de armazenamento iSCSI em VLAN dedicada melhora previsibilidade de latência e controle de acesso.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.6. HBA iSCSI Independente. A alternativa C é **incorreta**: um **HBA iSCSI independente** (*Independent Hardware iSCSI*) implementa sua própria pilha TCP/IP e iSCSI em hardware dedicado, possuindo configuração IP própria no adaptador e **dispensando interfaces VMkernel e *Port Binding*** no vSwitch (que são usados pelo iniciador de software ou HBA dependente).',
    correctAnalysis:
      'A afirmação C é falsa porque o HBA iSCSI independente executa TCP/IP e iSCSI no próprio adaptador, sem usar interfaces VMkernel nem CPU do host.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): no CHAP unidirecional apenas o Iniciador comprova credencial perante o Target.',
      1: 'Incorreta (afirmação verdadeira): em CHAP mútuo as duas direções utilizam segredos diferentes para evitar ataques de reflexão.',
      3: 'Incorreta (afirmação verdadeira): VLAN dedicada isola tráfego de armazenamento e simplifica segurança e QoS/MTU.'
    }
  },
  {
    id: 'sarah-5-88',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre redes **iSCSI**:\n\nAlém do padrão `iqn.`, os nomes de nós iSCSI podem utilizar identificadores hexadecimais de 64 bits com prefixo _____; para consultar dinamicamente um portal Target e receber a lista de alvos disponíveis sem cadastrá-los um a um, emprega-se a descoberta _____; e para vincular múltiplas interfaces VMkernel na mesma sub-rede a uplinks físicos individuais no ESXi, utiliza-se _____.',
    options: [
      'wwpn. / Static / LACP',
      'eui. / Static / CHAP mútuo',
      'naa. / SendTargets / Jumbo Frames',
      'eui. / SendTargets / Port Binding'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.6. iSCSI. O prefixo hexadecimal IEEE de 64 bits padronizado no iSCSI é **`eui.`**; a descoberta dinâmica via portal é ***SendTargets***; e a vinculação 1:1 de interfaces VMkernel a uplinks no mesmo switch/sub-rede denomina-se ***Port Binding***.',
    correctAnalysis:
      'Respectivamente: eui., SendTargets e Port Binding.',
    optionErrors: {
      0: 'Incorreta: WWPN pertence ao Fibre Channel, Static exige cadastro manual por Target e LACP não substitui Port Binding iSCSI.',
      1: 'Incorreta: a descoberta automática pelo portal é SendTargets (não Static), e CHAP mútuo trata de autenticação.',
      2: 'Incorreta: naa. identifica dispositivos/LUNs SCSI, não nomes de nós iSCSI, e Jumbo Frames trata de MTU.'
    }
  },
  {
    id: 'sarah-5-89',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um datastore VMFS6 montado sobre uma LUN Fibre Channel de 2 TB atinge 88% de ocupação. A equipe de storage expande a mesma LUN no *array* para 3 TB, mantendo o mapeamento existente ao cluster ESXi. Qual procedimento garante o aproveitamento imediato de 3 TB contínuos sem paradas nem criação de *extents* em cadeia?',
    options: [
      'Executar Rescan Storage nos hosts ESXi e utilizar Increase Datastore Capacity no vCenter para ampliar o VMFS6 na mesma LUN.',
      'Criar uma segunda partição VMFS5 na área livre e migrar os arquivos .vmx das VMs antes de desmontar o volume original de produção.',
      'Reformatar o volume ampliado via vmkfstools com as VMs desligadas, pois o sistema de arquivos VMFS6 não suporta extensão online.',
      'Converter a LUN mapeada em Raw Device Mapping (RDM) físico para que os sistemas operacionais convidados acessem os 3 TB brutos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.7. Expansão de LUN e VMFS. Após aumentar a capacidade da LUN existente no *storage array*, basta rodar um ***Rescan Storage*** para os hosts ESXi enxergarem o novo tamanho do bloco e aplicar ***Increase Datastore Capacity*** (expansão online contígua da partição VMFS6, sem risco adicional de encadear outra LUN como *extent*).',
    correctAnalysis:
      'Fazer Rescan Storage seguido de Increase Datastore Capacity expande o datastore VMFS6 online aproveitando o espaço adicional da mesma LUN.',
    optionErrors: {
      1: 'Incorreta: criar segundo volume ou migrar manualmente é desnecessário quando a própria LUN subjacente foi expandida.',
      2: 'Incorreta: o VMFS6 suporta expansão online nativa sem precisar desligar VMs nem reformatar o volume.',
      3: 'Incorreta: RDM físico entrega uma LUN dedicada a uma única VM, não servindo para expandir um datastore VMFS compartilhado.'
    }
  },
  {
    id: 'sarah-5-90',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos de apresentação e acesso a **LUNs** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) `LUN 0`\n(II) *Host Group* no *storage*\n(III) *Thin LUN* no *array*\n(IV) *RDM — Physical Compatibility*\n(V) *RDM — Virtual Compatibility*\n\nColuna da Direita:\n(A) Volume lógico cuja alocação física no pool do storage cresce sob demanda à medida que blocos são gravados.\n(B) Mapeia uma LUN via ponteiro `.vmdk` permitindo recursos do hipervisor como *snapshots* do vSphere.\n(C) Agrupamento lógico de iniciadores (WWNs/IQNs) de um servidor ou cluster para mapear LUNs de modo uniforme.\n(D) Entrega a LUN quase diretamente ao convidado repassando comandos SCSI ao storage, sem suportar *snapshots* da VM.\n(E) Identificador SCSI padrão frequentemente consultado primeiro pelos iniciadores para enumerar (`REPORT LUNS`) o alvo.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-A, IV-D, V-B.',
      'I-E, II-C, III-A, IV-D, V-B.',
      'I-E, II-C, III-D, IV-A, V-B.',
      'I-E, II-C, III-A, IV-B, V-D.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.7. LUNs. (I-E) **`LUN 0`** auxilia na descoberta SCSI inicial (`REPORT LUNS`); (II-C) ***Host Group*** agrupa iniciadores para mapeamento uniforme; (III-A) ***Thin LUN*** aloca espaço físico sob demanda no array; (IV-D) **RDM Físico** passa comandos SCSI diretos sem snapshot de VM; (V-B) **RDM Virtual** permite snapshots do hipervisor.',
    correctAnalysis:
      'Associação exata: I-E, II-C, III-A, IV-D e V-B.',
    optionErrors: {
      0: 'Incorreta: inverte LUN 0 (I-E) com Host Group no storage (II-C).',
      2: 'Incorreta: inverte Thin LUN no array (III-A) com RDM Physical Compatibility (IV-D).',
      3: 'Incorreta: inverte RDM Physical Compatibility (IV-D) com RDM Virtual Compatibility (V-B).'
    }
  },
  {
    id: 'sarah-5-91',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre mapeamento, dimensionamento e uso de **LUNs** em ambientes virtualizados, considere as afirmativas:\n\nI. Combinar *Thin LUN* no storage array com discos *Thin Provisioned* no hipervisor (*thin-on-thin*) exige monitoramento e recuperação de blocos (*UNMAP*) para evitar esgotamento súbito do pool.\nII. Ao mapear uma LUN compartilhada em um *Host Group* de cluster ESXi, manter o mesmo **Host LUN ID** em todos os hosts evita inconsistências de endereçamento e falhas em recursos como RDM.\nIII. Concentrar todas as máquinas virtuais críticas do datacenter em uma única LUN gigante de 64 TB elimina disputa de filas (*queue depth*) no adaptador HBA e reduz a latência de I/O.\nIV. O *Raw Device Mapping (RDM)* em modo *Physical Compatibility* permite que softwares convidados acessem funções nativas do storage ou reservas SCSI persistentes para *clustering*.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.7. LUNs. I verdadeira (*thin-on-thin* exige monitoramento/UNMAP); II verdadeira (consistência de Host LUN ID no cluster); III falsa: concentrar VMs demais em uma única LUN cria gargalo exatamente na fila por LUN (`queue depth` / `DSNRO`) e contenção de acesso — o correto é dimensionar quantidade equilibrada de VMs por LUN conforme IOPS; IV verdadeira (RDM físico expõe comandos SCSI diretos e reservas persistentes).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III é falsa porque concentrar VMs numa única LUN satura a queue depth da LUN e degrada latência.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre o uso de RDM físico para comandos SCSI diretos e clusters.',
      2: 'Incorreta: inclui III (falsa sobre queue depth numa única LUN gigante) e omite I (verdadeira).',
      3: 'Incorreta: inclui III (falsa) e omite II (verdadeira sobre consistência de Host LUN ID).'
    }
  },
  {
    id: 'sarah-5-92',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre apresentação e operação de **LUNs** no storage e no ESXi e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Após expandir o tamanho de uma LUN no *storage array*, o datastore VMFS6 montado nos hosts ESXi cresce automaticamente para o novo tamanho sem *rescan* nem intervenção administrativa.\n( ) A ausência da `LUN 0` em um mapeamento SCSI pode impedir que determinados iniciadores descubram corretamente volumes com números de LUN superiores durante a varredura inicial.\n( ) O *Raw Device Mapping (RDM)* em modo *Physical Compatibility* é a única modalidade que armazena o arquivo `.vmx` da máquina virtual dentro da LUN e suporta *snapshots* do vSphere.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.7. LUNs. (1) falsa: após ampliar a LUN no array, é indispensável fazer *rescan* nos hosts e executar ***Increase Datastore Capacity*** para expandir a partição VMFS; (2) verdadeira: muitos iniciadores SCSI dependem da `LUN 0` para o comando inicial `REPORT LUNS`; (3) falsa: o arquivo `.vmx` fica em datastore (VMFS/NFS), e quem suporta *snapshots* do vSphere é o RDM em modo ***Virtual Compatibility***, não o físico.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa está correta quanto ao papel da LUN 0 na descoberta SCSI.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois expandir o VMFS exige rescan e Increase Datastore Capacity no vSphere.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre a importância da LUN 0 para o REPORT LUNS em diversos iniciadores.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois RDM Physical Compatibility não suporta snapshots do vSphere.'
    }
  },
  {
    id: 'sarah-5-93',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre mapeamento de LUNs, dimensionamento e provisionamento em armazenamento em bloco, assinale a afirmação INCORRETA.',
    options: [
      'Um Host Group no storage array reúne os identificadores dos servidores de um cluster para padronizar a apresentação das LUNs entre os nós.',
      'Dimensionar a quantidade de VMs por LUN conforme IOPS e queue depth do adaptador evita gargalos de fila que não aparecem olhando apenas TB livres.',
      'Ampliar um datastore adicionando uma segunda LUN separada como extent cria dependência em cadeia, pois a falha de um extent compromete o volume.',
      'Diferentemente de um disco Thin VMDK no hipervisor, uma Thin LUN criada no storage array impede o uso de sistemas de arquivos padrão como NTFS ou ext4.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.7. Thin LUN × Thin VMDK. A alternativa D é **incorreta**: o provisionamento fino de uma ***Thin LUN*** ocorre de forma transparente na camada do *storage array*; para o servidor ou sistema operacional convidado ela se comporta como um dispositivo de bloco SCSI padrão, suportando normalmente VMFS, NTFS, ext4 ou XFS.',
    correctAnalysis:
      'A afirmação D é incorreta porque Thin LUN no array é transparente ao host e aceita normalmente qualquer sistema de arquivos padrão como VMFS, NTFS ou ext4.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Host Groups simplificam e padronizam o mapeamento de LUNs para clusters.',
      1: 'Incorreta (afirmação verdadeira): equilibrar VMs por LUN evita saturação de queue depth mesmo havendo capacidade livre.',
      2: 'Incorreta (afirmação verdadeira): concatenar extents entre múltiplas LUNs amplia a superfície de falha do datastore.'
    }
  },
  {
    id: 'sarah-5-94',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor físico com controladora RAID por hardware apresenta queda brusca de 70% na taxa de escritas aleatórias sem nenhum disco defeituoso. O utilitário da controladora exibe alerta *"Cache Battery/Capacitor Failed"* no módulo **BBU/FBWC**. Qual comportamento automático da controladora explica a perda de desempenho?',
    options: [
      'A controladora alterou o cache de escrita de Write-Back para Write-Through para evitar perda de dados não gravados em falta de energia.',
      'A controladora colocou o grupo RAID em modo degradado preventivo e iniciou uma reconstrução completa em segundo plano sobre os mesmos discos.',
      'A controladora desativou os processadores internos de paridade transferindo todo o cálculo do arranjo para RAID por software na CPU do servidor.',
      'A falha do módulo desabilitou o Patrol Read e bloqueou gravações no sistema de arquivos até que os volumes sejam desmontados no sistema operacional.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.8. Cache da Controladora RAID e BBU/FBWC. Em operação normal com bateria (**BBU**) ou supercapacitor + flash (**FBWC**) saudáveis, a controladora usa cache ***Write-Back*** (confirma a escrita rapidamente na DRAM protegida). Quando o módulo de proteção falha, ela reverte por segurança para ***Write-Through***, aguardando a gravação física em disco antes de confirmar ao SO — reduzindo fortemente o desempenho de escrita.',
    correctAnalysis:
      'Sem proteção BBU/FBWC operacional, a controladora alterna o cache de Write-Back para Write-Through para proteger a integridade dos dados.',
    optionErrors: {
      1: 'Incorreta: falha de BBU/FBWC não coloca o array em modo degradado nem dispara rebuild de discos saudáveis.',
      2: 'Incorreta: a controladora continua gerenciando o arranjo em hardware, apenas desativando o cache Write-Back volátil desprotegido.',
      3: 'Incorreta: a gravação continua ocorrendo em modo Write-Through sem exigir desmontagem dos volumes.'
    }
  },
  {
    id: 'sarah-5-95',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os recursos operacionais de **RAID** à esquerda com suas respectivas descrições à direita.\n\nColuna da Esquerda:\n(I) Cache *Write-Back*\n(II) Cache *Write-Through*\n(III) BBU / FBWC\n(IV) *Patrol Read / Scrubbing*\n(V) RAID Distribuído (*Pools*)\n\nColuna da Direita:\n(A) Só confirma a operação de escrita ao sistema operacional depois da gravação efetiva nos discos físicos.\n(B) Varredura periódica em segundo plano que lê setores e confere paridade para corrigir falhas latentes.\n(C) Arquitetura em pool que espalha dados, paridade e área *spare* por todos os discos acelerando o *rebuild*.\n(D) Confirma a escrita rapidamente ao SO na memória da controladora antes de descarregá-la aos discos.\n(E) Módulo de bateria ou supercapacitor + flash que protege dados no cache da controladora contra apagões.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-A, II-D, III-E, IV-B, V-C.',
      'I-D, II-A, III-B, IV-E, V-C.',
      'I-D, II-A, III-E, IV-B, V-C.',
      'I-D, II-A, III-E, IV-C, V-B.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.8. Operação de RAID. (I-D) **Write-Back** confirma no cache da controladora; (II-A) **Write-Through** confirma somente após gravação física em disco; (III-E) **BBU/FBWC** protege o cache contra quedas de energia; (IV-B) **Patrol Read/Scrubbing** detecta setores defeituosos proativamente; (V-C) **RAID distribuído** espalha reserva e paridade pelo pool inteiro.',
    correctAnalysis:
      'Associação exata: I-D, II-A, III-E, IV-B e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte cache Write-Back (I-D) com cache Write-Through (II-A).',
      1: 'Incorreta: inverte BBU/FBWC (III-E) com Patrol Read/Scrubbing (IV-B).',
      3: 'Incorreta: inverte Patrol Read/Scrubbing (IV-B) com RAID Distribuído (V-C).'
    }
  },
  {
    id: 'sarah-5-96',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre operação, manutenção e proteção em sistemas **RAID**, analise as afirmativas:\n\nI. O RAID por hardware delega cálculos de paridade e enfileiramento a uma controladora dedicada, ao passo que o RAID por software executa essas operações na CPU do servidor sem depender de placa proprietária idêntica.\nII. Um disco **Global Hot Spare** fica restrito a substituir falhas em um único grupo RAID pré-associado, enquanto um **Dedicated Hot Spare** assume discos defeituosos de qualquer grupo na controladora.\nIII. Em **modo degradado**, um arranjo tolerante a falhas mantém disponibilidade reconstruindo dados perdidos em tempo real por paridade ou espelho, com impacto de desempenho.\nIV. Durante um *rebuild* em discos mecânicos de grande capacidade (ex.: 16 TB), a leitura exaustiva dos demais discos eleva o risco de encontrar um **URE** (*Unrecoverable Read Error*).\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.8. RAID Operacional. I verdadeira (HW vs SW RAID); II falsa: **inverte os conceitos** — o ***Dedicated Hot Spare*** atende apenas a um grupo específico, enquanto o ***Global Hot Spare*** protege qualquer grupo compatível na controladora; III verdadeira (modo degradado mantém serviço reconstruindo blocos sob leitura/escrita); IV verdadeira (arrays grandes têm maior janela de exposição a URE durante *rebuild*).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II inverte os papéis de Global Hot Spare e Dedicated Hot Spare.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira quanto ao risco de URE em rebuilds longos de discos grandes.',
      1: 'Incorreta: inclui a afirmativa II (falsa ao inverter Global e Dedicated Hot Spare) e omite IV.',
      3: 'Incorreta: inclui II (falsa) e omite I (verdadeira sobre HW vs SW RAID).'
    }
  },
  {
    id: 'sarah-5-97',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre cache, integridade e reconstrução em arranjos **RAID** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Controladoras equipadas com **FBWC (*Flash-Backed Write Cache*)** usam um supercapacitor para transferir dados pendentes da DRAM para memória flash não volátil em caso de apagão.\n( ) A execução do ***Patrol Read* (ou *Data Scrubbing*)** exige obrigatoriamente colocar o servidor offline e desmontar todos os volumes para evitar bloqueio de acesso em produção.\n( ) Em arquiteturas de **RAID distribuído**, a reconstrução após falha de disco ocorre mais rápido porque a capacidade *spare* fica distribuída e vários discos recebem gravações em paralelo.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.8. RAID Operacional. (1) verdadeira: o FBWC substitui a bateria química por supercapacitor + flash preservando o cache indeterminadamente após descarregá-lo; (2) falsa: *Patrol Read / Data Scrubbing* roda **online em segundo plano** para detectar e corrigir setores defeituosos latentes sem parar o sistema; (3) verdadeira: o RAID distribuído paraleliza o *rebuild* pelo pool.',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa é falsa porque Patrol Read e Data Scrubbing executam online em segundo plano, sem parada de volumes.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (2) é falsa, pois Patrol Read / Scrubbing opera online em segundo plano.',
      1: 'Incorreta: a afirmativa (1) é verdadeira sobre o uso de supercapacitor e flash no FBWC.',
      2: 'Incorreta: a afirmativa (3) é verdadeira sobre o paralelismo de rebuild no RAID distribuído.'
    }
  },
  {
    id: 'sarah-5-98',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre operação de **RAID**:\n\nA política de cache da controladora que confirma rapidamente a gravação ao sistema operacional antes de persistir os blocos nos discos físicos denomina-se _____; para manter essa política segura contra falta de energia sem depender de baterias químicas sujeitas a desgaste, utilizam-se módulos com supercapacitor e memória não volátil chamados _____; já a varredura preventiva em segundo plano que corrige setores defeituosos latentes antes de um *rebuild* é o _____.',
    options: [
      'Write-Through / BBU / Hot Spare',
      'Write-Back / Hot Spare / RAID distribuído',
      'Write-Through / FBWC / Patrol Read',
      'Write-Back / FBWC / Patrol Read'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.8. RAID Operacional. Confirmar gravação antecipadamente na controladora define ***Write-Back***; supercapacitor + memória flash não volátil define ***FBWC*** (*Flash-Backed Write Cache*); e varredura preventiva de mídia em segundo plano define ***Patrol Read***.',
    correctAnalysis:
      'Respectivamente: Write-Back, FBWC e Patrol Read.',
    optionErrors: {
      0: 'Incorreta: Write-Through aguarda escrita no disco físico, BBU usa bateria química e Hot Spare é disco reserva.',
      1: 'Incorreta: Hot Spare não protege cache na falta de energia e RAID distribuído é arquitetura de pool.',
      2: 'Incorreta: Write-Through confirma somente após escrita nos discos físicos, não antecipadamente no cache.'
    }
  },
  {
    id: 'sarah-5-99',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Dois hosts ESXi acessam um datastore compartilhado em um *storage array* **Ativo/Passivo (sem ALUA)** usando a política de caminho **Fixed**, sendo que o Host 1 prefere a Controladora A e o Host 2 prefere a Controladora B. Imediatamente após o boot, o storage registra intenso *path thrashing* (troca contínua de propriedade da LUN entre controladoras) e lentidão severa. Qual alteração resolve o problema?',
    options: [
      'Alterar a política PSP nos hosts ESXi para MRU (Most Recently Used), evitando disputa de caminhos preferenciais e failback automático.',
      'Manter a política Fixed marcando os caminhos de ambas as controladoras como preferenciais simultaneamente para forçar modo Ativo/Ativo.',
      'Desativar o plugin NMP nos hosts ESXi para que cada servidor monte duas vezes a mesma LUN sem camada de multipath.',
      'Configurar manualmente os caminhos da controladora passiva em estado PDL (Permanent Device Loss) para impedir comutação.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.9. Políticas de Multipathing (Fixed × MRU × Round Robin). Em arrays **Ativo/Passivo sem ALUA**, apenas uma controladora detém a propriedade da LUN por vez. Se dois hosts usam **Fixed** com caminhos preferidos em controladoras opostas, cada um força *trespass* (mudança de dono da LUN), causando *path thrashing*. A política recomendada nesses arrays é **MRU (*Most Recently Used*)**, que não define caminho preferencial fixo nem faz *failback* automático.',
    correctAnalysis:
      'A política MRU elimina a disputa de caminho preferencial (path thrashing) em arrays Ativo/Passivo sem ALUA ao não forçar failback automático.',
    optionErrors: {
      1: 'Incorreta: a política Fixed aceita apenas um caminho preferencial e não transforma um array Ativo/Passivo em Ativo/Ativo.',
      2: 'Incorreta: sem NMP/multipathing os caminhos aparecem duplicados sem failover coordenado, agravando indisponibilidade e risco.',
      3: 'Incorreta: PDL indica perda permanente definitiva da LUN, não sendo mecanismo para gerenciar caminhos passivos de reserva.'
    }
  },
  {
    id: 'sarah-5-100',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os componentes e padrões de **multipath** à esquerda com suas funções à direita.\n\nColuna da Esquerda:\n(I) `NMP` (VMware ESXi)\n(II) `SATP` (VMware ESXi)\n(III) `PSP` (VMware ESXi)\n(IV) `dm-multipath` (Linux)\n(V) `MPIO` (Windows Server)\n\nColuna da Direita:\n(A) Subplugin responsável por escolher qual caminho ativo envia o próximo I/O (*Fixed*, *MRU* ou *Round Robin*).\n(B) Arquitetura nativa da Microsoft (com DSM genérico ou do fabricante) para redundância e balanceamento até LUNs.\n(C) Plugin nativo padrão da arquitetura PSA do ESXi que coordena detecção de arrays e seleção de caminhos.\n(D) Subsistema Linux (`multipathd`) que unifica múltiplos caminhos SCSI em dispositivos mapeados `/dev/mapper/mpath*`.\n(E) Subplugin que identifica o modelo do *storage array*, trata estados de falha de caminho e gerencia ALUA.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-A, IV-D, V-B.',
      'I-E, II-C, III-A, IV-D, V-B.',
      'I-C, II-A, III-E, IV-D, V-B.',
      'I-C, II-E, III-A, IV-B, V-D.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.9. Multipath (ESXi, Linux, Windows). (I-C) **NMP** (*Native Multipathing Plugin*) coordena o multipath nativo no ESXi; (II-E) **SATP** (*Storage Array Type Plugin*) trata particularidades do array e ALUA; (III-A) **PSP** (*Path Selection Plugin*) executa a política (*Fixed/MRU/RR*); (IV-D) **`dm-multipath`** consolida caminhos no Linux; (V-B) **MPIO** provê multipath no Windows Server.',
    correctAnalysis:
      'Associação exata: I-C, II-E, III-A, IV-D e V-B.',
    optionErrors: {
      1: 'Incorreta: inverte NMP (I-C) com SATP (II-E).',
      2: 'Incorreta: inverte SATP (II-E) com PSP (III-A).',
      3: 'Incorreta: inverte dm-multipath no Linux (IV-D) com MPIO no Windows (V-B).'
    }
  },
  {
    id: 'sarah-5-101',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **ALUA** (*Asymmetric Logical Unit Access*) e políticas de seleção de caminhos em storages corporativos, analise as afirmativas:\n\nI. Em storages com **ALUA**, caminhos conectados diretamente à controladora proprietária da LUN são expostos como **Active/Optimized**, enquanto caminhos pela controladora parceira surgem como **Active/Non-Optimized**.\nII. Combinada ao ALUA, a política **Round Robin** alterna requisições entre todos os caminhos *Active/Optimized*, utilizando os *Active/Non-Optimized* apenas quando os otimizados falham.\nIII. Na política **MRU (*Most Recently Used*)**, assim que o caminho original é restabelecido após uma falha temporária, o ESXi realiza automaticamente o *failback* de volta para esse caminho preferencial.\nIV. Em storages **Ativo/Ativo** simétricos, todas as controladoras atendem I/O da mesma LUN com igual desempenho, tornando o **Round Robin** indicado para agregar vazão entre caminhos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.9. Multipath e ALUA. I verdadeira (classificação assimétrica ALUA); II verdadeira (Round Robin + ALUA usa somente *Active/Optimized* em operação normal); III falsa: **MRU** não possui caminho preferencial nem faz *failback* automático (esse é o comportamento da política **Fixed**); IV verdadeira (arrays Ativo/Ativo simétricos aproveitam *Round Robin* entre controladoras).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III confunde MRU (sem failback automático) com Fixed (com caminho preferencial e failback).',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre o uso de Round Robin em arrays Ativo/Ativo simétricos.',
      1: 'Incorreta: inclui a afirmativa III (falsa ao atribuir failback automático à política MRU) e omite IV.',
      3: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre Active/Optimized e Active/Non-Optimized no ALUA).'
    }
  },
  {
    id: 'sarah-5-102',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre estados de perda de caminho (**APD × PDL**) e políticas de *multipath* e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No estado **APD (*All Paths Down*)**, todos os caminhos param de responder sem sinalização explícita de remoção permanente, fazendo o ESXi aguardar um *timeout* antes de declarar indisponibilidade prolongada.\n( ) No estado **PDL (*Permanent Device Loss*)**, o storage responde com código SCSI explícito informando que a LUN foi excluída ou desmapeada em definitivo, permitindo reação rápida de recuperação.\n( ) A política **Fixed** no ESXi impede a definição de um caminho preferencial e nunca realiza *failback* automático quando o caminho anteriormente caído retorna à operação.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – F – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.9. APD × PDL e Políticas. (1) verdadeira: em **APD**, o ESXi não sabe se a falha (ex.: queda dos switches SAN) é temporária ou definitiva; (2) verdadeira: em **PDL**, o *array* envia *sense code* SCSI confirmando remoção definitiva da LUN; (3) falsa: **Fixed** permite justamente definir um caminho preferencial e realiza *failback* automático ao retorno desse caminho.',
    correctAnalysis:
      'Gabarito: V – V – F. A terceira afirmativa inverte o comportamento da política Fixed (que usa caminho preferencial com failback automático).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre a indefinição de retorno no estado APD.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre a sinalização SCSI explícita no estado PDL.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois Fixed suporta caminho preferencial e executa failback automático.'
    }
  },
  {
    id: 'sarah-5-103',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquitetura de *multipathing* no ESXi, Linux, Windows Server e estados ALUA, assinale a afirmação INCORRETA.',
    options: [
      'O subplugin SATP (Storage Array Type Plugin) interage com características específicas do array para tratar estados de failover e caminhos ALUA.',
      'No Linux, o serviço multipathd do dm-multipath consolida múltiplos dispositivos /dev/sdX referentes à mesma LUN em um único dispositivo lógico.',
      'Em storages com ALUA, direcionar tráfego rotineiro por caminhos Active/Non-Optimized penaliza latência por exigir comunicação interna entre controladoras.',
      'No Windows Server, o recurso MPIO exige que os drivers das HBAs desativem o suporte ao padrão ALUA para operar em Round Robin entre múltiplas portas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.9. Multipath (Windows MPIO, Linux dm-multipath, ESXi). A alternativa D é **incorreta**: o **MPIO do Windows Server** (por meio do Microsoft DSM padrão ou DSM do fabricante) possui suporte nativo ao padrão **ALUA** (T10 SPC), utilizando seus estados para equilibrar cargas em *Round Robin* / *Round Robin With Subset* preferencialmente pelos caminhos otimizados.',
    correctAnalysis:
      'A afirmação D é falsa porque o MPIO do Windows Server suporta nativamente ALUA combinado com políticas de balanceamento como Round Robin.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o SATP no ESXi gerencia especificidades do array, failover e estados ALUA.',
      1: 'Incorreta (afirmação verdadeira): o dm-multipath/multipathd unifica os caminhos duplicados /dev/sdX da mesma LUN.',
      2: 'Incorreta (afirmação verdadeira): caminhos Active/Non-Optimized atravessam o barramento inter-controladora, elevando latência.'
    }
  },
  {
    id: 'sarah-5-104',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **multipath** em armazenamento SAN:\n\nNa arquitetura de *multipathing* do VMware ESXi, o plugin nativo (`NMP`) delega ao módulo _____ a escolha dinâmica de qual caminho envia o próximo I/O (como *Round Robin* ou *Fixed*); quando o storage suporta _____, os caminhos diretos à controladora dona da LUN são marcados como *Active/Optimized*; e quando o array sinaliza explicitamente por código SCSI que a LUN foi desmapeada em definitivo, declara-se o estado _____.',
    options: [
      'SATP / ALUA / APD',
      'PSP / MPIO / APD',
      'SATP / ALUA / PDL',
      'PSP / ALUA / PDL'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.9. Multipath. A política de seleção de caminho é executada pelo ***PSP*** (*Path Selection Plugin*); a diferenciação entre caminhos otimizados e não otimizados é fornecida pelo padrão ***ALUA***; e a sinalização SCSI explícita de remoção permanente da LUN caracteriza ***PDL*** (*Permanent Device Loss*).',
    correctAnalysis:
      'Respectivamente: PSP, ALUA e PDL.',
    optionErrors: {
      0: 'Incorreta: SATP monitora o array/estados (não escolhe o próximo I/O por Round Robin) e APD indica queda sem confirmação de remoção definitiva.',
      1: 'Incorreta: MPIO é o framework do Windows Server e APD não traz confirmação explícita de remoção permanente pelo storage.',
      2: 'Incorreta: quem executa o algoritmo de seleção de caminho (Fixed, MRU, Round Robin) é o PSP, não o SATP.'
    }
  },
  {
    id: 'sarah-5-105',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um sistema de processamento analítico demanda uma taxa sustentada de **400 MiB/s** executando operações sequenciais com tamanho de bloco de **64 KiB** (adote base binária: 1 MiB = 1.024 KiB). Quantos IOPS são necessários para sustentar essa vazão?',
    options: [
      '6.400 IOPS.',
      '3.200 IOPS.',
      '12.800 IOPS.',
      '25.600 IOPS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.10. Relação IOPS × Throughput × Tamanho de Bloco. Como Throughput = IOPS × Block Size, temos IOPS = (400 × 1.024 KiB/s) / 64 KiB = 400 × 16 = 6.400 IOPS.',
    correctAnalysis:
      'Convertendo 400 MiB/s para 409.600 KiB/s e dividindo por blocos de 64 KiB obtêm-se exatamente 6.400 IOPS.',
    optionErrors: {
      1: 'Incorreta: 3.200 IOPS resultaria em apenas 200 MiB/s com blocos de 64 KiB.',
      2: 'Incorreta: 12.800 IOPS corresponderia a 800 MiB/s em blocos de 64 KiB (ou a 400 MiB/s em blocos de 32 KiB).',
      3: 'Incorreta: 25.600 IOPS corresponderia a 400 MiB/s usando blocos menores de 16 KiB.'
    }
  },
  {
    id: 'sarah-5-106',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma aplicação de consulta gera **1.500 IOPS de leitura aleatória pura (100% leitura)** em pequenos blocos de 8 KB. Adotando como capacidade típica de referência **75 IOPS** por HDD de 7.200 RPM, **150 IOPS** por HDD de 10.000 RPM e dezenas de milhares de IOPS por **SSD corporativo**, quantos discos físicos de cada tipo seriam necessários no mínimo para atender a essa demanda de IOPS?',
    options: [
      '10 discos de 7,2k RPM, 5 discos de 10k RPM ou 1 SSD corporativo.',
      '20 discos de 7,2k RPM, 10 discos de 10k RPM ou 1 SSD corporativo.',
      '40 discos de 7,2k RPM, 20 discos de 10k RPM ou 4 SSDs corporativos.',
      '75 discos de 7,2k RPM, 15 discos de 10k RPM ou 2 SSDs corporativos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.10. IOPS por Tecnologia de Disco. Em leitura pura (sem penalidade de escrita): 1.500 / 75 = 20 discos HDD de 7,2k RPM; 1.500 / 150 = 10 discos HDD de 10k RPM; e **1 único SSD corporativo** atende com folga dezenas de vezes acima de 1.500 IOPS.',
    correctAnalysis:
      'Dividindo 1.500 IOPS aleatórios de leitura pelos referenciais (75 e 150 IOPS) resultam 20 discos 7,2k RPM, 10 discos 10k RPM ou apenas 1 SSD.',
    optionErrors: {
      0: 'Incorreta: 10 discos 7,2k RPM entregariam apenas ~750 IOPS e 5 discos 10k RPM apenas ~750 IOPS.',
      2: 'Incorreta: 40 discos 7,2k RPM entregariam ~3.000 IOPS (o dobro do pedido), e 1 único SSD já supre 1.500 IOPS facilmente.',
      3: 'Incorreta: confunde a taxa unitária (75 IOPS) com a quantidade de discos e superestima a necessidade de SSDs.'
    }
  },
  {
    id: 'sarah-5-107',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um cluster ESXi compartilhando o mesmo datastore VMFS, uma VM de geração de relatórios executando no Host A consome IOPS intensivamente e eleva a latência de um banco crítico hospedado no Host B. Como os *Disk Shares* individuais atuam apenas dentro de um mesmo host ESXi, qual recurso e controle evitam esse efeito *noisy neighbor* entre hosts distintos?',
    options: [
      'Configurar Disk Shares = High no disco da VM do banco de dados no Host B.',
      'Habilitar Storage I/O Control (SIOC) no datastore e definir Shares e teto de IOPS Limit.',
      'Aumentar a queue depth da HBA somente no Host B, onde roda o banco de dados.',
      'Habilitar Storage DRS no datastore para balancear o espaço ocupado entre as VMs.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.10. Storage I/O Control (SIOC) e Limites de IOPS. Enquanto *Disk Shares* nativos só arbitram disputa entre VMs dentro do mesmo host ESXi, o **SIOC** monitora a latência do datastore compartilhado em todo o cluster e ajusta dinamicamente as filas entre todos os hosts conforme **Shares** e **IOPS Limits** configurados por VMDK.',
    correctAnalysis:
      'O Storage I/O Control (SIOC) coordena justiça de acesso (Shares) e tetos máximos (IOPS Limit) entre diferentes hosts ESXi no mesmo datastore.',
    optionErrors: {
      0: 'Incorreta: sem o SIOC ativo, Disk Shares só arbitram disputa entre VMs dentro do mesmo host, não entre o Host A e o Host B.',
      2: 'Incorreta: elevar a queue depth apenas no Host B não resolve a disputa pelo mesmo datastore no storage e pode piorar a latência.',
      3: 'Incorreta: o Storage DRS balanceia espaço e latência entre datastores diferentes em um Datastore Cluster, não entre VMs no mesmo datastore.'
    }
  },
  {
    id: 'sarah-5-108',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre características de IOPS, padrão de acesso e controle de banda de armazenamento, analise as afirmativas:\n\nI. Cargas transacionais com blocos pequenos (4 a 8 KB) e acesso aleatório costumam ter gargalo em **IOPS e latência**, enquanto gravações sequenciais em blocos grandes (256 KB a 1 MB) tendem a saturar **throughput (MB/s)**.\nII. Em discos mecânicos (HDD), a latência de movimentação do cabeçote (*seek*) e a rotação reduzem drasticamente os IOPS aleatórios em comparação ao fluxo sequencial; em SSDs/NVMe, a ausência de partes móveis eleva enormemente os IOPS aleatórios.\nIII. Em unidades SSD baseadas em memória NAND Flash, operações de escrita aleatória são sempre mais rápidas e consomem menos recursos internos da controladora do que leituras aleatórias.\nIV. Configurar um teto rígido de **IOPS Limit** em discos virtuais de VMs não críticas impede que elas monopolizem a largura de I/O de um datastore compartilhado durante picos pontuais.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.10. IOPS e Padrões de Acesso. I verdadeira (OLTP aleatório limitado por IOPS vs sequencial limitado por MB/s); II verdadeira (impacto mecânico de *seek*/rotação no HDD vs acesso eletrônico no SSD/NVMe); III falsa: em NAND Flash, **leituras** são mais rápidas e simples que **escritas**, pois escrever exige programação de células, gerenciamento de *erase blocks* e *garbage collection* (amplificação de escrita); IV verdadeira (IOPS Limit contém vizinhos barulhentos).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III erra ao afirmar que escritas em NAND Flash são mais rápidas e leves que leituras.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, que descreve corretamente o papel de contenção do IOPS Limit por disco virtual.',
      1: 'Incorreta: inclui III (falsa sobre escrita × leitura em NAND Flash) e omite II (verdadeira).',
      3: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre blocos pequenos × grandes).'
    }
  },
  {
    id: 'sarah-5-109',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre desempenho em **IOPS**, tipos de mídia e controle de qualidade de I/O e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Configurar *Disk Shares* nas propriedades individuais das VMs garante priorização coordenada no datastore entre VMs que executam em hosts ESXi **diferentes**, mesmo com o *Storage I/O Control (SIOC)* desabilitado.\n( ) Como ordem de grandeza típica, HDDs de 7.200 RPM entregam dezenas de IOPS aleatórios (~75–80) e HDDs de 15.000 RPM entregam centenas (~175–200), muito abaixo da capacidade de SSDs corporativos.\n( ) Mantendo constante o número de IOPS, dobrar o tamanho médio do bloco transferido dobra proporcionalmente o *throughput* (MB/s) exigido dos enlaces SAN.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.10. IOPS e SIOC. (1) falsa: sem o **SIOC** habilitado, *Disk Shares* operam apenas localmente dentro de cada host ESXi isolado, sem coordenação entre hosts no mesmo datastore; (2) verdadeira: faixas clássicas comparativas entre HDDs 7,2k/15k RPM e SSDs; (3) verdadeira: pela fórmula Throughput = IOPS × Block Size.',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa é falsa porque sem SIOC os Disk Shares não arbitram contenção entre hosts ESXi distintos.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (2) é verdadeira sobre as faixas comparativas de IOPS entre HDDs 7,2k/15k e SSDs.',
      1: 'Incorreta: a afirmativa (1) é falsa, pois a arbitragem de shares entre hosts distintos no datastore exige o SIOC ativo.',
      2: 'Incorreta: a afirmativa (3) é verdadeira pela relação linear Throughput = IOPS × tamanho do bloco.'
    }
  },
  {
    id: 'sarah-5-110',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre perfil de carga e controle de **IOPS**:\n\nCargas transacionais de banco de dados com blocos pequenos de 4 a 8 KB realizam acesso predominantemente _____, sendo limitadas por IOPS e latência; transferências contínuas de vídeo ou backup em blocos grandes de 512 KB a 1 MB geram padrão _____, limitado por *throughput* (MB/s); e, para arbitrar justiça de filas e aplicar tetos de IOPS por VM entre múltiplos hosts ESXi no mesmo datastore, habilita-se o _____.',
    options: [
      'sequencial / aleatório / Admission Control',
      'aleatório / sequencial / Storage vMotion',
      'sequencial / paralelo / Storage I/O Control',
      'aleatório / sequencial / Storage I/O Control'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.10. IOPS e Throughput. Bancos OLTP em 4–8 KB fazem E/S **aleatória**; backups/vídeo em blocos grandes fazem E/S **sequencial**; e a arbitragem distribuída de filas e limites por datastore entre hosts do cluster é feita pelo ***Storage I/O Control*** (SIOC).',
    correctAnalysis:
      'Respectivamente: aleatório, sequencial e Storage I/O Control.',
    optionErrors: {
      0: 'Incorreta: inverte os padrões aleatório/sequencial e confunde SIOC com Admission Control (reserva do HA).',
      1: 'Incorreta: Storage vMotion migra discos entre datastores, não arbitra filas e tetos de IOPS sob contenção.',
      2: 'Incorreta: transações de banco com blocos pequenos são tipicamente aleatórias, não sequenciais.'
    }
  },
  {
    id: 'sarah-5-111',
    editalItemId: '5.2.11',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos e indicadores de **latência e filas de armazenamento** à esquerda com suas definições técnicas à direita.\n\nColuna da Esquerda:\n(I) `GAVG/cmd`\n(II) `QUED` (no `esxtop`)\n(III) *Queue Depth* (HBA/LUN)\n(IV) `DSNRO` (*Disk.SchedNumReqOutstanding*)\n(V) Lei de Little (L = λ × W)\n\nColuna da Direita:\n(A) Limite máximo de comandos SCSI simultâneos que um dispositivo/LUN recebe antes de iniciar enfileiramento.\n(B) Relaciona o número médio de requisições em andamento, a taxa de IOPS entregues e a latência média de resposta.\n(C) Número de comandos de E/S retidos na fila interna do VMkernel aguardando envio ao adaptador/LUN.\n(D) Soma de `DAVG + KAVG`, expressando a latência total percebida pelo sistema operacional convidado da VM.\n(E) Parâmetro do ESXi que limita comandos concorrentes emitidos a uma LUN quando múltiplas VMs competem por ela.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-C, III-A, IV-E, V-B.',
      'I-C, II-D, III-A, IV-E, V-B.',
      'I-D, II-C, III-E, IV-A, V-B.',
      'I-D, II-C, III-A, IV-B, V-E.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.11. Latência e Filas. (I-D) **`GAVG/cmd`** = `DAVG + KAVG` (latência percebida pelo guest); (II-C) **`QUED`** contabiliza comandos aguardando na fila do VMkernel; (III-A) ***Queue Depth*** define a concorrência máxima *in-flight* na HBA/LUN; (IV-E) **`DSNRO`** controla o teto por LUN sob competição de múltiplas VMs no ESXi; (V-B) **Lei de Little** vincula fila/concorrência, IOPS e latência.',
    correctAnalysis:
      'Associação exata: I-D, II-C, III-A, IV-E e V-B.',
    optionErrors: {
      1: 'Incorreta: inverte GAVG/cmd (I-D) com QUED no esxtop (II-C).',
      2: 'Incorreta: inverte Queue Depth (III-A) com DSNRO (IV-E).',
      3: 'Incorreta: inverte DSNRO (IV-E) com a Lei de Little (V-B).'
    }
  },
  {
    id: 'sarah-5-112',
    editalItemId: '5.2.11',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre valores de referência de **latência**, enfileiramento e Lei de Little em sistemas de armazenamento, considere as afirmativas:\n\nI. Como referência prática, unidades SSD/NVMe corporativas costumam operar com latências médias inferiores a **1–2 ms**, arrays HDD saudáveis abaixo de **10–15 ms**, e patamares sustentados acima de **20–30 ms** indicam contenção perceptível.\nII. Valores elevados de **`KAVG/cmd`** acompanhados de contador **`QUED > 0`** no `esxtop` indicam gargalo de enfileiramento dentro do VMkernel, frequentemente ligado à *queue depth* da HBA ou ao limite `DSNRO` da LUN.\nIII. Aumentar indefinidamente a *queue depth* da HBA no host ESXi reduz sempre a latência individual de disco (`DAVG/cmd`), mesmo quando os discos físicos do *storage array* já operam em 100% de saturação.\nIV. Pela Lei de Little aplicada a filas de E/S (IOPS = Concorrência / Latência), uma fila ativa constante de 32 comandos com latência de 2 ms sustenta ~16.000 IOPS; se a latência sobe para 16 ms, cai para ~2.000 IOPS.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.11. Latência, Filas e Lei de Little. I verdadeira (faixas clássicas de latência por mídia); II verdadeira (`KAVG` alto + `QUED` positivo revela fila no VMkernel); III falsa: quando o *storage array* já está saturado, elevar a *queue depth* da HBA apenas empurra mais comandos para a fila do array, **aumentando** a latência `DAVG` em vez de reduzi-la; IV verdadeira (aplicação numérica direta da Lei de Little).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III erra ao dizer que ampliar a queue depth com o storage saturado reduz a latência DAVG.',
    optionErrors: {
      1: 'Incorreta: omite a afirmativa IV, que aplica corretamente a Lei de Little entre concorrência, latência e IOPS.',
      2: 'Incorreta: inclui III (falsa — com array saturado, maior queue depth eleva a latência DAVG) e omite II (verdadeira).',
      3: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre valores de referência).'
    }
  },
  {
    id: 'sarah-5-113',
    editalItemId: '5.2.11',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre métricas de **latência** no ESXi e filas de armazenamento e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Se o `esxtop` indica `DAVG/cmd = 1,5 ms` e `KAVG/cmd = 12,0 ms`, a latência total percebida pelo sistema convidado (`GAVG/cmd`) é de `13,5 ms`, apontando retenção predominante na fila do VMkernel.\n( ) Pela Lei de Little aplicada a filas de armazenamento, se a latência média dobra enquanto a *queue depth* permanece fixa no limite, a taxa máxima de IOPS entregue também dobra proporcionalmente.\n( ) Quando `DAVG/cmd` está elevado e `KAVG/cmd` está próximo de zero, o gargalo concentra-se nas filas internas do VMkernel do host, e não no storage.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.11. Latência (`DAVG`, `KAVG`, `GAVG`) e Lei de Little. (1) verdadeira: `GAVG = DAVG + KAVG = 1,5 + 12,0 = 13,5 ms`, com a maior parcela retida no kernel (`KAVG`); (2) falsa: como IOPS = Queue Depth / Latência, dobrar a latência com *queue depth* fixa **reduz à metade** o teto de IOPS; (3) falsa: `DAVG/cmd` elevado com `KAVG/cmd` próximo de zero aponta para gargalo no dispositivo/SAN/storage array, não nas filas do VMkernel.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa sobre a soma GAVG = DAVG + KAVG e diagnóstico de KAVG elevado está correta.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira pela soma GAVG = DAVG + KAVG = 13,5 ms.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois dobrar a latência com fila fixa reduz o IOPS máximo à metade.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois DAVG alto com KAVG próximo de zero aponta para o dispositivo/SAN/array, não para o VMkernel.'
    }
  },
  {
    id: 'sarah-5-114',
    editalItemId: '5.2.11',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **latência** e filas em armazenamento:\n\nNa análise de desempenho do ESXi, quando comandos de E/S ficam represados nas filas internas do VMkernel antes de alcançar a HBA física, eleva-se o contador _____; o limite máximo de operações simultâneas em andamento suportadas por uma HBA ou LUN antes de enfileirar novas requisições denomina-se _____; e o princípio segundo o qual o IOPS sustentável equivale à concorrência ativa dividida pela latência média é a _____.',
    options: [
      'DAVG / DSNRO / Lei de Amdahl',
      'KAVG / Queue Depth / Lei de Little',
      'GAVG / Queue Depth / Lei de Little',
      'KAVG / Write Penalty / Lei de Moore'
    ],
    correctIndex: 1,
    explanation:
      'Item 5.2.11. Latência. A espera dentro do VMkernel é medida por **`KAVG`** (*Kernel Average*); o teto de requisições simultâneas *in-flight* é a ***Queue Depth***; e a relação (L = λ × W) entre fila, IOPS e latência é a **Lei de Little**.',
    correctAnalysis:
      'Respectivamente: KAVG, Queue Depth e Lei de Little.',
    optionErrors: {
      0: 'Incorreta: DAVG mede latência externa do dispositivo/SAN (não fila do VMkernel), e Lei de Amdahl trata de ganho paralelo de CPU.',
      2: 'Incorreta: GAVG representa a latência total (DAVG + KAVG), não especificamente a parcela de espera no VMkernel.',
      3: 'Incorreta: Write Penalty refere-se ao custo de escrita em RAID e Lei de Moore trata de densidade de transistores.'
    }
  },
  {
    id: 'sarah-5-115',
    editalItemId: '5.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Várias VMs com discos *Thin Provisioned* em um datastore VMFS6 são subitamente congeladas exibindo a mensagem *"There is no more space for virtual disk... You might be able to continue this session by freeing disk space"*. Ao inspecionar o volume, verifica-se 0 bytes livres devido a um snapshot esquecido há 15 dias que cresceu até lotar o datastore. Qual é a sequência segura de recuperação?',
    options: [
      'Liberar espaço imediato no datastore (ou expandir a LUN/VMFS), responder Retry às VMs pausadas e então excluir o snapshot antigo.',
      'Responder Cancel no alerta de todas as VMs pausadas para que o ESXi libere os blocos Thin sem interromper os sistemas convidados.',
      'Criar um novo snapshot com opção Quiesce na VM afetada para redirecionar as gravações antigas para fora do datastore lotado.',
      'Reiniciar o serviço hostd via SSH no ESXi para forçar o UNMAP automático imediato com o datastore ainda em 100% de ocupação.'
    ],
    correctIndex: 0,
    explanation:
      'Item 5.2.12. Troubleshooting de Datastore Cheio e Snapshot Esquecido. Com 0 bytes livres no VMFS, o disco *Thin* ou o delta do snapshot não consegue alocar novos blocos e a VM é pausada preventivamente para evitar corrupção. Responder *Cancel* desliga a VM de forma abrupta; o correto é **liberar espaço no datastore** (removendo arquivos/ISOs dispensáveis, migrando outra VM ou expandindo a LUN/VMFS), clicar em ***Retry*** para retomar as VMs e em seguida excluir com segurança o snapshot esquecido.',
    correctAnalysis:
      'Liberar espaço ou expandir o datastore antes de clicar em Retry permite retomar as VMs pausadas sem perda e remover o snapshot causador.',
    optionErrors: {
      1: 'Incorreta: responder Cancel encerra/desliga imediatamente a máquina virtual afetada sem liberar o delta do snapshot.',
      2: 'Incorreta: criar outro snapshot consome ainda mais metadados e blocos no mesmo datastore já sem espaço.',
      3: 'Incorreta: reiniciar o hostd não cria espaço livre nem executa UNMAP capaz de desbloquear um volume com 0 bytes disponíveis.'
    }
  },
  {
    id: 'sarah-5-116',
    editalItemId: '5.2.12',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os contadores críticos do utilitário **`esxtop`** no VMware ESXi à esquerda com os sintomas diagnosticados à direita.\n\nColuna da Esquerda:\n(I) `%RDY` (*CPU Ready*)\n(II) `%CSTP` (*Co-Stop*)\n(III) `MCTLSZ` (*MEMCTL / Balloon*)\n(IV) `SWR/s` (*Swap Write*)\n(V) `DAVG` e `KAVG` elevados\n\nColuna da Direita:\n(A) Memória física reclamada do convidado por meio do driver `vmmemctl` (VMware Tools) sob contenção de RAM no host.\n(B) Atrasos em milissegundos respectivamente no dispositivo/SAN externo e nas filas internas do VMkernel em E/S de disco.\n(C) Percentual de tempo em que a VM está pronta para executar, mas aguarda fila de pCPU física disponível no host.\n(D) Taxa de páginas gravadas pelo hipervisor em arquivo `.vswp` em disco, sinalizando esgotamento severo de RAM.\n(E) Tempo em que uma VM multi-vCPU aguarda agendamento sincronizado simultâneo de suas vCPUs (superalocação de vCPU).\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-C, III-A, IV-D, V-B.',
      'I-C, II-E, III-D, IV-A, V-B.',
      'I-C, II-E, III-A, IV-D, V-B.',
      'I-C, II-E, III-A, IV-B, V-D.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.12. Troubleshooting com esxtop. (I-C) **`%RDY`** indica espera por CPU física livre; (II-E) **`%CSTP`** revela contenção de agendamento paralelo em VMs com excesso de vCPUs; (III-A) **`MCTLSZ`** mostra memória recuperada pelo driver *balloon*; (IV-D) **`SWR/s`** indica paginação ativa para `.vswp` em datastore; (V-B) **`DAVG/KAVG`** decompõem latência de armazenamento.',
    correctAnalysis:
      'Associação exata: I-C, II-E, III-A, IV-D e V-B.',
    optionErrors: {
      0: 'Incorreta: inverte %RDY (I-C) com %CSTP (II-E).',
      1: 'Incorreta: inverte MCTLSZ/Balloon (III-A) com SWR/s Swap Write (IV-D).',
      3: 'Incorreta: inverte SWR/s Swap Write (IV-D) com DAVG/KAVG elevados (V-B).'
    }
  },
  {
    id: 'sarah-5-117',
    editalItemId: '5.2.12',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre investigação de falhas em hosts ESXi usando logs, estados de inventário e conectividade de storage, analise as afirmativas:\n\nI. O arquivo `/var/log/hostd.log` registra eventos do agente local de gerenciamento do ESXi (tarefas de energia, comunicação com vCenter/Host Client e registro de VMs).\nII. Uma VM marcada como **Inaccessible** indica que o host perdeu o registro do `.vmx` no inventário, enquanto **Orphaned** indica que o datastore com seus arquivos ficou indisponível.\nIII. Ao perder um de dois caminhos SAN redundantes até uma LUN, o *multipathing* mantém o acesso pelo caminho ativo restante, cabendo investigar logs, enlace físico/switch e executar *Rescan* após o reparo sem desregistrar as VMs.\nIV. O arquivo `/var/log/vmkernel.log` concentra mensagens de kernel do hipervisor, incluindo falhas e recuperações de caminhos SCSI/FC/iSCSI, erros de hardware e eventos de drivers.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 5.2.12. Logs e Estados de VM no ESXi. I verdadeira (escopo do `hostd.log`); II falsa: **os conceitos estão invertidos** — **Inaccessible** ocorre quando os arquivos da VM (`.vmx`/datastore) estão inalcançáveis pelo host, enquanto **Orphaned** ocorre quando a VM ainda existe no banco do vCenter, mas o host ESXi não a reconhece mais no inventário; III verdadeira (recuperação segura de perda parcial de caminho); IV verdadeira (escopo do `vmkernel.log`).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II inverte os estados Inaccessible (arquivos/datastore indisponíveis) e Orphaned (registro perdido no host mas existente no vCenter).',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre o conteúdo de kernel/storage no /var/log/vmkernel.log.',
      1: 'Incorreta: inclui II (falsa por inverter os estados Inaccessible e Orphaned) e omite III (verdadeira).',
      3: 'Incorreta: inclui II (falsa por inverter Inaccessible e Orphaned) e omite I (verdadeira sobre /var/log/hostd.log).'
    }
  },
  {
    id: 'sarah-5-118',
    editalItemId: '5.2.12',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No troubleshooting de desempenho e falhas em hosts VMware ESXi, assinale a afirmação INCORRETA.',
    options: [
      'Valores elevados de %CSTP no esxtop revelam disputa de agendamento paralelo entre vCPUs da mesma VM, frequentemente aliviada reduzindo excesso de vCPUs.',
      'Taxas contínuas em SWR/s no esxtop indicam que o host está gravando memória de VMs em arquivo .vswp no datastore por contenção crítica de RAM física.',
      'Quando uma VM permanece em estado Orphaned por perda de registro no ESXi, registrá-la novamente via arquivo .vmx (ou removê-la se excluída) corrige o inventário.',
      'O memory ballooning (MEMCTL) observado no esxtop atua diretamente no hipervisor sem depender do driver vmmemctl do VMware Tools instalado no convidado.'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.12. Ballooning e Troubleshooting ESXi. A alternativa D é **incorreta**: o ***memory ballooning* (`MEMCTL`/`MCTLSZ`)** exige obrigatoriamente a presença do driver **`vmmemctl`** (instalado pelo **VMware Tools** / `open-vm-tools`) dentro do sistema operacional convidado para inflar o balão e devolver páginas ociosas ao ESXi antes de recorrer ao *swap* em `.vswp`.',
    correctAnalysis:
      'A afirmação D é falsa porque o memory ballooning depende do driver vmmemctl do VMware Tools no sistema convidado.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): %CSTP elevado decorre de superalocação de vCPUs em VMs SMP.',
      1: 'Incorreta (afirmação verdadeira): SWR/s mede escrita ativa do hipervisor em arquivo de swap .vswp por falta de RAM.',
      2: 'Incorreta (afirmação verdadeira): re-registrar o .vmx (ou remover a entrada órfã se os arquivos foram apagados) soluciona VMs Orphaned.'
    }
  },
  {
    id: 'sarah-5-119',
    editalItemId: '5.2.12',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre diagnóstico e logs no **VMware ESXi**:\n\nDurante uma análise no `esxtop`, uma VM multi-vCPU superdimensionada apresenta atrasos de agendamento sincronizado medidos pelo contador _____; já a reclamação ativa de memória do sistema convidado via VMware Tools é exibida no contador _____; e, para investigar quedas de caminhos SCSI ou erros de driver de armazenamento no hipervisor, consulta-se o arquivo _____.',
    options: [
      '%RDY / SWR/s / /var/log/hostd.log',
      '%CSTP / SWR/s / /var/log/hostd.log',
      '%RDY / MCTLSZ / /var/log/vmkernel.log',
      '%CSTP / MCTLSZ / /var/log/vmkernel.log'
    ],
    correctIndex: 3,
    explanation:
      'Item 5.2.12. Troubleshooting ESXi. O atraso de sincronismo multi-vCPU (*co-stop*) é medido por **`%CSTP`**; a memória reclamada pelo driver *balloon* aparece em **`MCTLSZ`**; e erros de SCSI/drivers/armazenamento do kernel ficam registrados em **`/var/log/vmkernel.log`**. ',
    correctAnalysis:
      'Respectivamente: %CSTP, MCTLSZ e /var/log/vmkernel.log.',
    optionErrors: {
      0: 'Incorreta: %RDY mede fila geral por CPU física (não co-stop SMP), SWR/s é swap em .vswp e hostd.log trata do agente de gerência.',
      1: 'Incorreta: SWR/s mede swap do hipervisor (não ballooning via VMware Tools) e eventos SCSI de baixo nível ficam no vmkernel.log.',
      2: 'Incorreta: o contador específico de atraso por sincronização multi-vCPU (co-scheduling) é %CSTP, não %RDY.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 6 (+3) ====================
  {
    id: 'sarah-6-13',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual a vantagem operacional do Backup Completo Sintético (Synthetic Full) em comparação ao Backup Completo tradicional pela rede?',
    options: [
      'Substitui a necessidade de qualquer cópia inicial completa no servidor de origem.',
      'Elimina os metadados de catálogo permitindo restaurar arquivos sem software de backup.',
      'Consolida o último full com os incrementais direto no repositório sem releitura do servidor de produção.',
      'Reduz o RPO a zero segundos executando replicação síncrona de blocos a cada escrita.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1. Tipos de backup (Eixo 6. Backup). O Synthetic Full constrói uma nova imagem completa no servidor/repositório de backup combinando o full anterior e os incrementais já transferidos, poupando I/O e banda do servidor de produção.',
    correctAnalysis:
      'Ao montar um novo ponto completo a partir de blocos já armazenados no repositório, o Synthetic Full evita sobrecarregar a produção e a rede com leituras completas periódicas.',
    optionErrors: {
      0: 'Incorreta: o primeiro backup inicial sempre precisa transferir todos os dados da origem.',
      1: 'Incorreta: o processo depende do catálogo e do motor da solução de backup para sintetizar o ponto.',
      3: 'Incorreta: backup periódico não equivale a replicação síncrona com RPO zero.'
    }
  },
  {
    id: 'sarah-6-14',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre deduplicação em soluções corporativas de backup, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Na deduplicação source-side, os hashes dos blocos são calculados no destino após a transferência.\n( ) A deduplicação target-side reduz o tráfego de rede já no primeiro backup completo.\n( ) A deduplicação inline remove blocos redundantes durante a gravação em tempo real, dispensando área extra de staging.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – V.',
      'F – F – F.',
      'F – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.1.3. 1.3. Deduplicação.. (1) falsa: na deduplicação source-side os hashes são calculados na origem, antes do envio; (2) falsa: na target-side os dados trafegam integralmente; a economia é só de armazenamento; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – F – V. Verdadeira(s): (3). (1) é falsa porque na deduplicação source-side os hashes são calculados na origem, antes do envio. (2) é falsa porque na target-side os dados trafegam integralmente; a economia é só de armazenamento.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois na deduplicação source-side os hashes são calculados na origem, antes do envio.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois na target-side os dados trafegam integralmente; a economia é só de armazenamento.',
      2: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-6-15',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre procedimentos de restore e validação de cópias de segurança, assinale a afirmação INCORRETA.',
    options: [
      'A conclusão com status bem-sucedido na tela do job garante recuperação íntegra sem necessidade de testar restores.',
      'A restauração granular permite recuperar arquivos específicos ou caixas postais individuais sem sobrescrever todo o servidor.',
      'Testes periódicos de restore em ambiente isolado (sandbox) validam integridade real dos dados e estimam o RTO efetivo.',
      'A recuperação point-in-time em bancos de dados combina o backup completo com a sequência de logs transacionais até o instante desejado.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. restore (Eixo 6. Backup). "Backup não testado não é backup": falhas silenciosas de aplicação, permissões, corrupção de mídia ou falta de chaves criptográficas só são descobertas em testes periódicos reais de restauração.',
    correctAnalysis:
      'A afirmação incorreta dispensa testes periódicos de restore: logs de conclusão do backup não comprovam consistência aplicacional nem tempo real de recuperação.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): granular recovery evita restaurar toda uma VM para recuperar poucos itens.',
      2: 'Incorreta (afirmação verdadeira): testes isolados aferem integridade e RTO real sem impactar produção.',
      3: 'Incorreta (afirmação verdadeira): point-in-time recovery reproduz logs de transação após a base completa.'
    }
  },
  {
    id: 'sarah-6-16',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor de arquivos com **2.000 GB** executa backup **Completo (Full)** no domingo à noite e backups **Incrementais** de segunda a sábado à noite, gerando **100 GB** de blocos novos/alterados por dia. Caso ocorra perda total do servidor na quinta-feira à tarde (após a execução de quarta e antes da de quinta), quantos conjuntos de backup são necessários para restaurar até o último ponto válido e qual foi o volume total transferido de domingo até quarta-feira?',
    options: [
      '4 conjuntos (Full de domingo e incrementais de seg, ter e qua); 2.300 GB.',
      '2 conjuntos (Full de domingo e incremental de quarta); 2.300 GB.',
      '4 conjuntos (Full de domingo e incrementais de seg, ter e qua); 2.600 GB.',
      '5 conjuntos (Full de domingo e incrementais de seg a qui); 2.400 GB.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.1.1. Backup Completo e Incremental. Na cadeia incremental, a restauração até quarta-feira exige o **Full de domingo + todos os incrementais até o ponto desejado** (segunda, terça e quarta = **4 conjuntos**). O volume transferido de domingo a quarta-feira soma 2.000 GB (domingo) + 100 GB (seg) + 100 GB (ter) + 100 GB (qua) = **2.300 GB**.',
    correctAnalysis:
      'A cadeia incremental requer os 4 conjuntos até quarta-feira para restaurar, totalizando 2.000 + 3 × 100 = 2.300 GB transferidos até aquele momento.',
    optionErrors: {
      1: 'Incorreta: exigir apenas Full + último conjunto descreve a restauração de backup Diferencial, não Incremental.',
      2: 'Incorreta: 2.600 GB somaria todos os 6 incrementais da semana até sábado, não até quarta-feira.',
      3: 'Incorreta: na quinta-feira à tarde o job da quinta à noite ainda não ocorreu, restando 4 conjuntos e 2.300 GB.'
    }
  },
  {
    id: 'sarah-6-17',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor com **1.000 GB** realiza backup **Completo (Full)** no domingo à noite e backups **Diferenciais** de segunda a sábado à noite, alterando **80 GB** distintos a cada dia (sem sobreposição entre dias). Se o servidor sofrer perda física na sexta-feira pela manhã (após o *job* de quinta à noite), quantos conjuntos serão lidos na restauração e qual o volume transferido apenas na execução diferencial de quinta-feira?',
    options: [
      '5 conjuntos (Full de domingo e diferenciais de seg a qui); 320 GB.',
      '2 conjuntos (Full de domingo e diferencial de quinta); 80 GB.',
      '2 conjuntos (Full de domingo e diferencial de quinta); 320 GB.',
      '2 conjuntos (Full de domingo e diferencial de quinta); 800 GB.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.1.1. Backup Diferencial. Como o diferencial copia tudo o que mudou desde o último *Full* sem limpar o *Archive Bit*, a restauração na sexta de manhã lê **apenas 2 conjuntos** (**Full de domingo + Diferencial de quinta-feira**). Na quinta-feira (4º dia após domingo), esse diferencial transferiu 4 × 80 GB = **320 GB** acumulados.',
    correctAnalysis:
      'A restauração diferencial lê somente o Full e o último diferencial (2 conjuntos), e o diferencial de quinta acumula 4 dias × 80 GB = 320 GB.',
    optionErrors: {
      0: 'Incorreta: ler todos os pontos intermediários (5 conjuntos) ocorre em cadeias Incrementais, não Diferenciais.',
      1: 'Incorreta: 80 GB seria o volume transferido em um backup Incremental na quinta-feira, pois o Diferencial acumula desde domingo (320 GB).',
      3: 'Incorreta: 800 GB equivale ao somatório acumulado dos 4 diferenciais da semana (80 + 160 + 240 + 320 GB), não ao volume da execução de quinta-feira.'
    }
  },
  {
    id: 'sarah-6-18',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre tipos de backup, *Archive Bit* e modelos contínuos de proteção, analise as afirmativas:\n\nI. Na estratégia ***Incremental Forever*** (incremental contínuo), realiza-se apenas um backup completo inicial seguido indefinidamente por incrementais, mantendo pontos completos sintetizados no repositório sem releitura total da origem.\nII. Em sistemas de arquivos com atributo *Archive Bit*, tanto o backup **Completo** quanto o **Incremental** limpam o marcador após copiar, enquanto o **Diferencial** mantém o marcador ativo.\nIII. Em uma cadeia **Incremental** diária após um *Full* de domingo, a perda isolada do incremental de terça-feira não impede restaurar o estado completo de sexta-feira a partir dos incrementais seguintes.\nIV. Comparado ao incremental tradicional, o backup **Diferencial** consome mais banda e espaço ao longo da semana, porém simplifica e acelera a restauração por depender de apenas dois conjuntos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.1.1. Tipos de Backup. I verdadeira (*Incremental Forever* evita novos *Fulls* periódicos pela rede); II verdadeira (Full e Incremental limpam *Archive Bit*; Diferencial preserva); III falsa: na cadeia incremental tradicional, cada dia depende de toda a cadeia anterior — perder terça-feira inviabiliza restaurar os estados de quarta a sexta; IV verdadeira (trade-off entre maior volume semanal vs restore em 2 conjuntos no Diferencial).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III erra ao ignorar a dependência encadeada dos incrementais.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira quanto ao trade-off espaço/tempo de restore no Diferencial.',
      2: 'Incorreta: inclui III (falsa — corromper um incremental intermediário quebra a cadeia posterior) e omite II (verdadeira).',
      3: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre Incremental Forever).'
    }
  },
  {
    id: 'sarah-6-19',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre mecanismos e cadeias de restauração nos tipos de backup e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O **Backup Diferencial** limpa o *Archive Bit* ao concluir a cópia para garantir que o próximo backup envie somente arquivos modificados nas últimas 24 horas.\n( ) Em backups de VMs, o rastreamento de blocos alterados (CBT – *Changed Block Tracking*) permite ao incremental identificar apenas os blocos modificados, sem depender do *Archive Bit* dos arquivos do sistema convidado.\n( ) Uma cadeia com 1 *Full* semanal e 6 *Incrementais* diários oferece restauração mais rápida que 1 *Full* e 6 *Diferenciais* por ler apenas dois arquivos no momento da falha.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.1.1. Tipos de Backup. (1) falsa: quem limpa o *Archive Bit* são **Full** e **Incremental**; o Diferencial NÃO limpa o marcador; (2) verdadeira: o **CBT (*Changed Block Tracking*)** no hipervisor identifica blocos modificados no disco virtual sem depender do *Archive Bit* no convidado; (3) falsa: **inverte o comportamento** — quem lê apenas 2 arquivos (*Full* + último) na restauração é o **Diferencial**, enquanto o Incremental lê toda a cadeia desde o último Full.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa descreve corretamente o uso de CBT em backups incrementais de VMs.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois o Backup Diferencial não limpa o Archive Bit.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre o uso de CBT (Changed Block Tracking) em backups incrementais de VMs.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois ler apenas dois conjuntos caracteriza o backup Diferencial, não o Incremental.'
    }
  },
  {
    id: 'sarah-6-20',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre tipos de **backup**:\n\nO tipo que copia todas as alterações acumuladas desde o último backup completo sem limpar o *Archive Bit* denomina-se _____; o tipo que registra exclusivamente o que mudou desde a última execução (completa ou incremental) exigindo toda a cadeia no *restore* é o _____; já a abordagem moderna em que apenas a primeira cópia lê todos os blocos na origem, mantendo os ciclos seguintes por incrementais contínuos sintetizados no repositório, chama-se _____.',
    options: [
      'Incremental / Diferencial / Synthetic Full',
      'Diferencial / Sintético / Incremental Forever',
      'Completo / Incremental / Archive Bit',
      'Diferencial / Incremental / Incremental Forever'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.1.1. Tipos de Backup. Acumular desde o último Full sem limpar o *Archive Bit* define o **Diferencial**; copiar apenas desde a execução anterior exigindo cadeia completa define o **Incremental**; e realizar um único Full inicial seguido indefinidamente de incrementais sintetizados no destino define o ***Incremental Forever***.',
    correctAnalysis:
      'Respectivamente: Diferencial, Incremental e Incremental Forever.',
    optionErrors: {
      0: 'Incorreta: inverte Diferencial com Incremental na primeira e segunda lacunas.',
      1: 'Incorreta: a segunda lacuna refere-se ao backup Incremental tradicional, não ao Completo Sintético.',
      2: 'Incorreta: a primeira lacuna descreve o Diferencial (mudanças acumuladas desde o Full), não o Completo.'
    }
  },
  {
    id: 'sarah-6-21',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um hospital precisa arquivar exames radiológicos já comprimidos e criptografados (dados de alta entropia) em fitas magnéticas **LTO-8** e **LTO-9**. Embora o catálogo comercial divulgue capacidades comprimidas de **30 TB (LTO-8)** e **45 TB (LTO-9)** assumindo taxa 2,5:1, quanta informação real cabe aproximadamente por cartucho sem compressão efetiva adicional no drive?',
    options: [
      '12 TB por cartucho LTO-8 e 18 TB por cartucho LTO-9 (capacidade nativa).',
      '30 TB por cartucho LTO-8 e 45 TB por cartucho LTO-9 (garantidos em hardware).',
      '6 TB por cartucho LTO-8 e 12 TB por cartucho LTO-9 (capacidade nativa).',
      '15 TB por cartucho LTO-8 e 22,5 TB por cartucho LTO-9 (metade da nominal).'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.1.2. Fita LTO (Capacidade Nativa × Comprimida). Arquivos previamente comprimidos ou criptografados possuem alta entropia e praticamente não sofrem redução pela compressão LTO-DC do drive. Portanto, deve-se dimensionar pela **capacidade nativa**: **12 TB no LTO-8** e **18 TB no LTO-9** (enquanto 30 TB e 45 TB pressupõem razão otimista de 2,5:1).',
    correctAnalysis:
      'Sem ganho de compressão (dados já comprimidos/criptografados), vale a capacidade nativa dos cartuchos: 12 TB para LTO-8 e 18 TB para LTO-9.',
    optionErrors: {
      1: 'Incorreta: 30 TB e 45 TB dependem de compressibilidade média 2,5:1 no hardware, inviável em dados criptografados ou já comprimidos.',
      2: 'Incorreta: 6 TB corresponde à capacidade nativa do LTO-7 (não LTO-8), e 12 TB à do LTO-8.',
      3: 'Incorreta: a razão de marketing LTO-8/LTO-9 é 2,5:1 (12×2,5=30 e 18×2,5=45), não 2:1.'
    }
  },
  {
    id: 'sarah-6-22',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as tecnologias e mídias de **backup** à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) Fita LTO WORM\n(II) *LTFS (Linear Tape File System)*\n(III) *VTL (Virtual Tape Library)*\n(IV) *Object Storage (S3)* com *Object Lock*\n(V) *Air-Gap* físico\n\nColuna da Direita:\n(A) Formato aberto que particiona a fita permitindo navegar por diretórios no sistema operacional sem catálogo proprietário.\n(B) Repositório baseado em disco que emula drives e trocadores de fitas para acelerar rotinas legadas.\n(C) Cartucho magnético cuja trava física/firmware impede sobrescrever ou apagar blocos já gravados.\n(D) Isolamento completo da mídia fora de linha (ex.: cartuchos em cofre externo), sem conectividade de rede.\n(E) Armazenamento via API HTTP/REST em disco ou nuvem capaz de aplicar imutabilidade por política de retenção.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-A, II-C, III-B, IV-E, V-D.',
      'I-C, II-A, III-B, IV-E, V-D.',
      'I-C, II-A, III-E, IV-B, V-D.',
      'I-C, II-A, III-B, IV-D, V-E.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.1.2. Tecnologias e Mídias de Backup. (I-C) **LTO WORM** bloqueia regravação/exclusão no cartucho; (II-A) **LTFS** expõe arquivos da fita como sistema de arquivos padrão; (III-B) **VTL** emula bibliotecas LTO sobre discos; (IV-E) **S3 Object Lock** garante imutabilidade em objetos; (V-D) **Air-Gap físico** desconecta totalmente a mídia da rede.',
    correctAnalysis:
      'Associação exata: I-C, II-A, III-B, IV-E e V-D.',
    optionErrors: {
      0: 'Incorreta: inverte Fita LTO WORM (I-C) com LTFS (II-A).',
      2: 'Incorreta: inverte VTL (III-B) com Object Storage S3 Object Lock (IV-E).',
      3: 'Incorreta: inverte Object Storage S3 Object Lock (IV-E) com Air-Gap físico (V-D).'
    }
  },
  {
    id: 'sarah-6-23',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre características operacionais de mídias de backup (**disco, fita LTO, VTL e nuvem/objetos**), analise as afirmativas:\n\nI. Repositórios em **disco** permitem acesso aleatório e restauração instantânea de VMs, sendo ideais como camada primária de curto prazo, enquanto **fita LTO** e **S3 frio** destacam-se em retenção prolongada e proteção contra ataques.\nII. Uma **VTL (*Virtual Tape Library*)** acelera backups que exigiam fluxos de fita ao gravar em discos, porém não provê *air-gap* físico por si só se permanecer montada e acessível na rede.\nIII. A taxa de compressão de 2,5:1 especificada nos cartuchos LTO garante sempre atingir a capacidade comprimida anunciada mesmo quando os arquivos de backup foram previamente criptografados no servidor de origem.\nIV. Utilizar **armazenamento de objetos em nuvem pública** em camadas frias (*Archive/Glacier*) reduz infraestrutura local, mas exige prever latência de reidratação e custos de transferência de saída (*egress*) em restaurações em massa.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.1.2. Mídias de Backup. I verdadeira (disco para acesso aleatório rápido vs fita/S3 frio para retenção/isolamento); II verdadeira (VTL online em disco não é *air-gap* físico); III falsa: dados criptografados previamente possuem entropia máxima e não comprimem pelo algoritmo LTO-DC do drive, restringindo o cartucho à **capacidade nativa**; IV verdadeira (custos de *egress* e tempo de restauração em camadas *Archive* da nuvem).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III erra ao garantir compressão de 2,5:1 para dados já criptografados na origem.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre egress e tempo de restauração em camadas frias de nuvem.',
      1: 'Incorreta: inclui III (falsa quanto à compressibilidade de dados criptografados) e omite II (verdadeira).',
      3: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre disco vs fita/S3).'
    }
  },
  {
    id: 'sarah-6-24',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre compatibilidade, imutabilidade e formato em mídias de **backup** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Drives de gerações recentes de fita **LTO** (como LTO-8 e LTO-9) não leem cartuchos de gerações muito antigas (como LTO-4 ou LTO-5), exigindo planejamento de migração de mídia em arquivos de longo prazo.\n( ) Em um *bucket* de armazenamento de objetos (S3) com *Object Lock* em modo **Compliance**, o administrador *root* da conta pode apagar os objetos imutáveis antes do prazo caso precise liberar espaço.\n( ) O padrão **LTFS** permite particionar a fita em índice e dados, possibilitando listar e copiar arquivos diretamente pelo sistema operacional sem depender exclusivamente do catálogo proprietário de backup.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'V – V – V.',
      'V – F – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.1.2. Fita LTO, LTFS e Object Lock. (1) verdadeira: LTO-8 lê/grava LTO-7 e LTO-8; LTO-9 lê/grava LTO-8 e LTO-9 — cartuchos mais antigos tornam-se ilegíveis sem hardware legado ou migração; (2) falsa: no modo ***Compliance*** do *Object Lock*, **nenhum usuário (nem o root)** consegue apagar ou alterar versões bloqueadas antes da expiração (quem permite remoção por permissão especial é o modo *Governance*); (3) verdadeira: função do LTFS.',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa erra ao atribuir permissão de exclusão antecipada ao usuário root no modo Compliance.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira sobre o limite de retrocompatibilidade entre gerações LTO.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o modo Compliance impede exclusão antecipada até mesmo pelo usuário root.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre o particionamento índice/dados do LTFS.'
    }
  },
  {
    id: 'sarah-6-25',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre mídias, bibliotecas virtuais, armazenamento em nuvem e proteção contra adulteração de backups, assinale a afirmação INCORRETA.',
    options: [
      'Uma Virtual Tape Library (VTL) emula drives e robôs de fita sobre armazenamento em disco, eliminando espera de rebobinamento mecânico.',
      'O armazenamento de objetos (S3) com Object Lock ou imutabilidade WORM impede que backups válidos sejam sobrescritos ou criptografados antes do vencimento.',
      'Camadas Archive na nuvem pública reduzem o custo mensal por gigabyte armazenado, mas exigem horas de reidratação e tarifam tráfego de saída no restore.',
      'No S3 Object Lock em modo Governance, nenhum usuário, nem mesmo com permissão especial de bypass, consegue remover a retenção antes do prazo.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.1.2. Mídias e Imutabilidade (S3 Object Lock). A alternativa D é **incorreta**: a impossibilidade absoluta de remoção até pelo usuário *root* descreve o modo **Compliance**; no modo **Governance**, usuários com permissão específica (`s3:BypassGovernanceRetention`) conseguem remover ou sobrescrever a retenção antes do prazo.',
    correctAnalysis:
      'A afirmação D é falsa porque atribui ao modo Governance a restrição absoluta do modo Compliance, ignorando a permissão especial de bypass.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): VTLs simulam fitas sobre discos para compatibilidade e velocidade.',
      1: 'Incorreta (afirmação verdadeira): Object Lock/WORM garante imutabilidade temporal contra adulteração ou remoção.',
      2: 'Incorreta (afirmação verdadeira): camadas frias/Archive cobram menos por armazenamento mas impõem tempo de recuperação e egress.'
    }
  },
  {
    id: 'sarah-6-26',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre tecnologias e mídias de **backup**:\n\nO formato aberto que permite montar cartuchos LTO-5 ou superiores diretamente no sistema operacional como diretório navegável é o _____; para emular bibliotecas de fitas sobre discos mantendo compatibilidade com rotinas legadas e maior velocidade de gravação, utiliza-se uma _____; e para impedir que arquivos de backup gravados em fita ou armazenamento S3 sejam apagados ou alterados antes do vencimento, aplica-se a propriedade de _____.',
    options: [
      'WORM / SAN FC / deduplicação',
      'LTFS / VTL / compactação',
      'VTL / LTFS / imutabilidade (WORM)',
      'LTFS / VTL / imutabilidade (WORM)'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.1.2. Mídias de Backup. Montar fita LTO como sistema de arquivos navegável é função do **LTFS**; emular bibliotecas de fita em disco é papel da **VTL** (*Virtual Tape Library*); e bloquear alteração/exclusão antes da retenção expirar caracteriza **imutabilidade (WORM)**.',
    correctAnalysis:
      'Respectivamente: LTFS, VTL e imutabilidade (WORM).',
    optionErrors: {
      0: 'Incorreta: WORM trata de gravação única imutável, não de montagem como diretório navegável.',
      1: 'Incorreta: compactação reduz tamanho dos dados, mas não bloqueia exclusão ou modificação antes do vencimento.',
      2: 'Incorreta: inverte as definições de LTFS (sistema de arquivos em fita) e VTL (emulador em disco).'
    }
  },
  {
    id: 'sarah-6-27',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um ambiente corporativo protege **24 TB** de dados primários em produção. Após 30 dias de backups semanais completos e incrementais diários, o catálogo contabiliza **120 TB** de dados lógicos protegidos, ocupando apenas **15 TB** físicos reais no repositório de destino (desprezando compressão adicional para isolar o efeito da deduplicação). Qual é a **taxa de deduplicação** atingida e a redução percentual correspondente?',
    options: [
      '8:1 e redução de 87,5% do espaço físico.',
      '5:1 e redução de 80,0% do espaço físico.',
      '1,6:1 e redução de 37,5% do espaço físico.',
      '12:1 e redução de 91,7% do espaço físico.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.1.3. Cálculo de Taxa de Deduplicação. A razão de deduplicação divide o **total de dados lógicos protegidos** pelo **espaço físico efetivamente consumido**: 120 TB / 15 TB = **8:1**. A economia percentual obtida equivale a (120 - 15) / 120 = 105 / 120 = **87,5%**.',
    correctAnalysis:
      'Dividindo 120 TB lógicos por 15 TB físicos obtém-se taxa de deduplicação 8:1, o que representa redução de 87,5% da capacidade requerida.',
    optionErrors: {
      1: 'Incorreta: 5:1 (80%) resulta de dividir erroneamente os 120 TB lógicos pelos 24 TB primários em produção.',
      2: 'Incorreta: 1,6:1 (37,5%) divide apenas os 24 TB primários por 15 TB, ignorando os múltiplos pontos lógicos acumulados.',
      3: 'Incorreta: 12:1 equivaleria a consumir apenas 10 TB físicos para os 120 TB lógicos protegidos.'
    }
  },
  {
    id: 'sarah-6-28',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor de arquivos insere 10 bytes no cabeçalho de um arquivo binário de 2 GB entre dois backups, enquanto um banco de dados ativa criptografia AES nativa *antes* de o agente de backup ler os blocos para um repositório com deduplicação no destino. Qual é o comportamento esperado em ambos os casos?',
    options: [
      'A deduplicação por bloco fixo ressincroniza após os 10 bytes sem perder economia, e a criptografia prévia eleva a taxa de deduplicação.',
      'O bloco variável ressincroniza fronteiras preservando os blocos seguintes após os 10 bytes, e a criptografia prévia derruba a dedup para ~1:1.',
      'Ambos os métodos (bloco fixo e variável) perdem 100% da deduplicação com 10 bytes, mas a criptografia prévia mantém intactos os hashes.',
      'Apenas a deduplicação pós-processada falha com a criptografia prévia, pois a inline consegue comparar o texto claro dentro dos dados cifrados.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.1.3. Bloco Fixo × Variável e Impacto da Criptografia. Na inserção de bytes no início de um arquivo, o **bloco fixo** desloca todos os limites subsequentes (invalidando quase todo o arquivo), enquanto o **bloco variável** (*content-defined chunking*) identifica marcadores no conteúdo e ressincroniza as fronteiras seguintes. Já a **criptografia antes da deduplicação** transforma dados repetidos em sequências pseudoaleatórias distintas, derrubando a deduplicação para próximo de **1:1**.',
    correctAnalysis:
      'Bloco variável resiste à inserção inicial ressincronizando fronteiras, enquanto criptografia prévia randomiza blocos e inviabiliza a deduplicação (~1:1).',
    optionErrors: {
      0: 'Incorreta: bloco fixo perde o alinhamento com deslocamento de bytes, e criptografia prévia destrói (não eleva) a deduplicação.',
      2: 'Incorreta: bloco variável preserva a maior parte da deduplicação após inserções, e criptografia altera os hashes dos blocos.',
      3: 'Incorreta: nem deduplicação inline nem pós-processada consegue deduplicar texto cifrado pseudoaleatório sem acesso ao dado claro.'
    }
  },
  {
    id: 'sarah-6-29',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre pipeline de redução de dados, pós-processamento e restauração em sistemas com **deduplicação**, analise as afirmativas:\n\nI. A deduplicação remove blocos redundantes entre arquivos e execuções distintas, enquanto a **compressão** compacta internamente os segmentos únicos remanescentes, somando economia adicional.\nII. Durante o *restore* de um conjunto altamente deduplicado, o repositório realiza **reidratação**, remontando o arquivo sequencial a partir de ponteiros e blocos dispersos no armazenamento.\nIII. Para maximizar a economia de armazenamento sem perder eficiência, deve-se aplicar na origem primeiro a **criptografia**, depois a **compressão** e por fim a **deduplicação** no destino.\nIV. A deduplicação por **pós-processamento** (*post-process*) grava inicialmente os backups em área temporária de *staging* para processá-los depois, exigindo maior espaço provisório em disco que a *inline*.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.1.3. Deduplicação, Compressão e Reidratação. I verdadeira (dedup entre blocos + compressão intra-bloco); II verdadeira (reidratação remonta fluxos via índices/ponteiros, podendo gerar I/O aleatório); III falsa: **criptografia deve ser sempre o último passo** (ordem ideal: deduplicação -> compressão -> criptografia), pois cifrar primeiro impede tanto compressão quanto deduplicação; IV verdadeira (post-process demanda área de *staging*).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III inverte a ordem correta do pipeline ao aplicar criptografia antes da compressão e deduplicação.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre a exigência de área temporária de staging no pós-processamento.',
      2: 'Incorreta: inclui III (falsa ao colocar criptografia antes da compressão e deduplicação) e omite II (verdadeira).',
      3: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre dedup + compressão).'
    }
  },
  {
    id: 'sarah-6-30',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre técnicas de **deduplicação**, custo computacional e restauração de dados, assinale a afirmação INCORRETA.',
    options: [
      'A deduplicação de bloco variável exige maior esforço de CPU para calcular fronteiras dinâmicas, mas resiste melhor a inserções de bytes nos arquivos.',
      'A taxa de deduplicação tende a crescer à medida que se retêm mais pontos de restauração, pois cada novo backup reaproveita blocos já armazenados no repositório.',
      'A reidratação no restore de backups altamente deduplicados é sempre mais rápida do que ler um backup completo contíguo, por dispensar índices e ponteiros.',
      'Combinar deduplicação seguida de compressão sobre os segmentos únicos otimiza a ocupação do repositório preservando a capacidade de recuperação.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.1.3. Reidratação no Restore. A alternativa C é **incorreta**: a **reidratação** precisa consultar os índices/metadados de ponteiros e reunir segmentos físicos gravados em locais distintos de várias execuções anteriores, podendo gerar padrão de leitura aleatória e maior tempo de *restore* em comparação à leitura sequencial de um *Full* contíguo não deduplicado.',
    correctAnalysis:
      'A afirmação C é falsa porque a reidratação depende fortemente de índices/ponteiros e sofre fragmentação de leitura ao remontar blocos espalhados.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): chunking variável usa rolling hashes em CPU para tolerar deslocamentos de bytes.',
      1: 'Incorreta (afirmação verdadeira): reter mais ciclos eleva a taxa de deduplicação ao reutilizar blocos já gravados no repositório.',
      3: 'Incorreta (afirmação verdadeira): deduplicar antes e comprimir depois é o pipeline padrão de eficiência.'
    }
  },
  {
    id: 'sarah-6-31',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os componentes e recursos da arquitetura **Commvault** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) *CommCell*\n(II) *iDataAgent*\n(III) *DDB (Deduplication Database)*\n(IV) *Auxiliary Copy*\n(V) *IntelliSnap*\n\nColuna da Direita:\n(A) Banco de índices de assinaturas em disco rápido (SSD/NVMe) usado pelo *MediaAgent* na deduplicação.\n(B) Orquestração de *snapshots* nativos de *storage array* com consistência de aplicação e cópia fora da produção.\n(C) Domínio gerenciado completo composto por *CommServe*, *MediaAgents*, clientes e bibliotecas.\n(D) Módulo agente instalado no servidor protegido específico para cada sistema operacional ou aplicação.\n(E) Rotina que gera cópias secundárias em outro local ou nuvem lendo a cópia primária sem sobrecarregar a origem.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-D, III-A, IV-E, V-B.',
      'I-D, II-C, III-A, IV-E, V-B.',
      'I-C, II-D, III-E, IV-A, V-B.',
      'I-C, II-D, III-A, IV-B, V-E.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.1. Commvault. (I-C) **CommCell** é o ambiente integrado completo; (II-D) **iDataAgent** é o agente no cliente/aplicação; (III-A) **DDB** armazena hashes de deduplicação no *MediaAgent*; (IV-E) **Auxiliary Copy** replica cópias secundárias a partir da primária; (V-B) **IntelliSnap** integra *snapshots* de *hardware array*.',
    correctAnalysis:
      'Associação exata: I-C, II-D, III-A, IV-E e V-B.',
    optionErrors: {
      1: 'Incorreta: inverte CommCell (I-C) com iDataAgent (II-D).',
      2: 'Incorreta: inverte DDB (III-A) com Auxiliary Copy (IV-E).',
      3: 'Incorreta: inverte Auxiliary Copy (IV-E) com IntelliSnap (V-B).'
    }
  },
  {
    id: 'sarah-6-32',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um ambiente protegido com **Veeam Backup & Replication** (solução equivalente ao Commvault), o administrador deseja descarregar o processamento de leitura das VMs, compressão e transporte fora do *Backup Server* central e unificar múltiplos armazenamentos locais e em nuvem S3 sob um único destino lógico escalável. Quais componentes do Veeam devem ser configurados, respectivamente?',
    options: [
      'CommServe (plano de controle) e iDataAgent (agente de aplicação).',
      'Backup Proxy (transporte/processamento) e SOBR (Scale-Out Backup Repository).',
      'Mount Server (restauração granular) e DDB (Deduplication Database).',
      'WAN Accelerator (otimização de rede) e Archive Bit (marcador NTFS).'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.1. Equivalentes de Backup (Veeam). O **Backup Proxy** atua no plano de dados (análogo ao fluxo de transporte/processamento do *MediaAgent* no Commvault), realizando leitura, compressão e deduplicação; e o **SOBR (*Scale-Out Backup Repository*)** abstrai múltiplos repositórios em um pool lógico unificado (*Performance*, *Capacity* e *Archive Tiers*).',
    correctAnalysis:
      'No Veeam, Backup Proxy executa o transporte/processamento de dados fora do Backup Server, e SOBR agrupa múltiplos repositórios em um pool escalável.',
    optionErrors: {
      0: 'Incorreta: CommServe e iDataAgent pertencem à nomenclatura do Commvault, não do Veeam.',
      2: 'Incorreta: DDB é componente de deduplicação do Commvault, e Mount Server auxilia especificamente restaurações em nível de arquivo.',
      3: 'Incorreta: WAN Accelerator otimiza replicação remota, não unifica múltiplos repositórios físicos em pool escalável.'
    }
  },
  {
    id: 'sarah-6-33',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre componentes, políticas e operações na plataforma **Commvault**, analise as afirmativas:\n\nI. As *Storage Policies* (ou *Plans*) definem o vínculo lógico entre os dados protegidos e suas cópias (primária e secundárias), especificando destino, deduplicação e retenção.\nII. Na arquitetura Commvault, o banco de deduplicação (**DDB**) deve residir obrigatoriamente dentro do catálogo SQL do *CommServe* para que os agentes clientes validem assinaturas antes do envio.\nIII. A operação de ***Auxiliary Copy*** gera cópias secundárias em nuvem, fita ou site remoto lendo a partir da cópia primária gerenciada pelo *MediaAgent*, poupando os servidores de produção.\nIV. O recurso **IntelliSnap** integra *snapshots* nativos de *storage arrays* ao catálogo de backup, permitindo realizar a cópia secundária a partir de um servidor *proxy* (*off-host*).\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.1. Commvault. I verdadeira (*Storage Policies/Plans* governam cópias, destino e retenção); II falsa: o **DDB** fica hospedado em armazenamento de baixíssima latência (SSD/NVMe) conectado diretamente ao **MediaAgent** (plano de dados), e não no banco SQL/CSDB do *CommServe* (plano de controle); III verdadeira (*Auxiliary Copy* lê da cópia primária); IV verdadeira (*IntelliSnap* suporta backup *off-host*).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II erra ao posicionar o DDB dentro do banco SQL do CommServe em vez de discos rápidos no MediaAgent.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre o backup off-host integrado ao IntelliSnap.',
      1: 'Incorreta: inclui II (falsa quanto à localização do DDB) e omite III (verdadeira sobre Auxiliary Copy).',
      3: 'Incorreta: inclui II (falsa) e omite I (verdadeira sobre Storage Policies/Plans).'
    }
  },
  {
    id: 'sarah-6-34',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os papéis arquiteturais em plataformas corporativas de backup (**Commvault e Veeam**), assinale a afirmação INCORRETA.',
    options: [
      'No Commvault, o CommCell representa o ambiente lógico completo gerenciado por um CommServe, incluindo MediaAgents, clientes e bibliotecas.',
      'No Veeam, o Scale-Out Backup Repository (SOBR) combina múltiplos repositórios físicos em um destino único com camadas locais e em nuvem.',
      'Tanto o Auxiliary Copy do Commvault quanto o Backup Copy Job do Veeam criam cópias adicionais a partir do repositório primário sem impactar a produção.',
      'No Veeam, o Backup Proxy armazena os arquivos de backup (.vbk/.vib) e, por isso, deve ser o componente com maior capacidade de disco do ambiente.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.1. Commvault e Equivalentes (Veeam). A alternativa D é **incorreta**: no Veeam, o **Backup Proxy** lê, comprime, deduplica e transporta os dados; quem armazena os arquivos de backup (`.vbk`/`.vib`) e exige maior capacidade de disco é o **Backup Repository**.',
    correctAnalysis:
      'A afirmação D é falsa porque o Backup Proxy processa e transporta os dados, enquanto o armazenamento dos arquivos de backup cabe ao Backup Repository.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): CommCell designa todo o domínio gerenciado sob o CommServe.',
      1: 'Incorreta (afirmação verdadeira): SOBR unifica repositórios físicos em pool lógico único no Veeam.',
      2: 'Incorreta (afirmação verdadeira): ambos os mecanismos replicam cópias a partir do repositório primário.'
    }
  },
  {
    id: 'sarah-6-35',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre a arquitetura **Commvault**:\n\nOs módulos instalados nos servidores protegidos para integrar sistema de arquivos, hipervisores ou SGBDs são os _____; o banco de índices de hashes em SSD mantido junto ao *MediaAgent* para acelerar a deduplicação é o _____; e o recurso que orquestra *snapshots* nativos de *storage arrays* para acelerar a proteção e transferir dados fora da produção (*off-host*) denomina-se _____.',
    options: [
      'CommCells / CSDB / Auxiliary Copy',
      'MediaAgents / DDB / Synthetic Full',
      'iDataAgents / DDB / IntelliSnap',
      'iDataAgents / SOBR / IntelliSnap'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.1. Commvault. Os agentes por aplicação/cliente são os **iDataAgents**; o índice de blocos deduplicados é o **DDB** (*Deduplication Database*); e a integração com *snapshots* de hardware do storage array é o **IntelliSnap**. ',
    correctAnalysis:
      'Respectivamente: iDataAgents, DDB e IntelliSnap.',
    optionErrors: {
      0: 'Incorreta: CSDB é o catálogo central do CommServe, e Auxiliary Copy copia entre repositórios (não aciona snapshots de array).',
      1: 'Incorreta: MediaAgents são os servidores de movimentação de dados (não os agentes nos clientes protegidos).',
      3: 'Incorreta: SOBR pertence à nomenclatura do Veeam (Scale-Out Backup Repository), não ao índice DDB do Commvault.'
    }
  },
  {
    id: 'sarah-6-36',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao revisar as políticas de backup de uma organização, o gestor percebe que o *job* completo noturno de um servidor de arquivos de 8 TB iniciado às 22h só conclui às 10h30 do dia seguinte, degradando a rede e o storage em pleno horário comercial. Qual parâmetro operacional da política está sendo violado e qual ajuste resolve mantendo o escopo protegido?',
    options: [
      'A política de retenção GFS anual; deve-se desativar a verificação de integridade pós-job.',
      'A janela de backup; deve-se adotar backups incrementais/sintéticos ou ampliar paralelismo.',
      'A regra 3-2-1-1-0; deve-se remover a cópia externa offsite para acelerar a gravação local.',
      'O nível de compressão; deve-se elevar a compressão ao máximo para reduzir o volume gravado e encurtar o job.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.2. Janela de Backup em Políticas. O intervalo acordado fora do expediente em que o backup deve começar e terminar sem concorrer com usuários produtivos é a **janela de backup** (*backup window*). Executar incrementais (ou sintéticos no repositório) e aumentar paralelismo/banda resolve o estouro de janela sem remover dados do escopo.',
    correctAnalysis:
      'O job invadiu o horário comercial violando a janela de backup; usar incrementais/sintéticos ou maior vazão no período noturno soluciona sem reduzir o escopo.',
    optionErrors: {
      0: 'Incorreta: desativar verificação de jobs compromete confiabilidade e não corrige um Full lento de 12 horas.',
      2: 'Incorreta: remover a cópia externa enfraquece a resiliência da regra 3-2-1 e não trata o gargalo do backup primário.',
      3: 'Incorreta: compressão máxima aumenta o consumo de CPU e pode alongar o job, não resolvendo a violação da janela.'
    }
  },
  {
    id: 'sarah-6-37',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos e regras de **políticas de backup** à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) Regra **3-2-1**\n(II) Regra **3-2-1-1-0**\n(III) Janela de backup\n(IV) Criptografia em trânsito e repouso\n(V) Verificação de *jobs*\n\nColuna da Direita:\n(A) Proteção por TLS na rede e AES no repositório contra interceptação ou acesso indevido a mídias furtadas.\n(B) Manter ao menos 3 cópias, em 2 mídias distintas, sendo 1 delas em local físico externo (*offsite*).\n(C) Intervalo horário planejado fora do pico produtivo para iniciar e concluir as rotinas sem impactar usuários.\n(D) Estende a proteção básica adicionando 1 cópia imutável/*offline* e 0 erros na validação automática.\n(E) Conferência automatizada de *checksums*, alertas e logs ao final de cada execução para detectar falhas silenciosas.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-B, III-C, IV-A, V-E.',
      'I-B, II-D, III-C, IV-A, V-E.',
      'I-B, II-D, III-A, IV-C, V-E.',
      'I-B, II-D, III-C, IV-E, V-A.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.2. Políticas de Backup. (I-B) **3-2-1** (3 cópias, 2 mídias, 1 offsite); (II-D) **3-2-1-1-0** (+1 imutável/offline, 0 erros); (III-C) **Janela de backup** (horário operacional seguro); (IV-A) **Criptografia** (TLS + AES); (V-E) **Verificação de jobs** (integridade/alertas).',
    correctAnalysis:
      'Associação exata: I-B, II-D, III-C, IV-A e V-E.',
    optionErrors: {
      0: 'Incorreta: inverte a regra 3-2-1 (I-B) com a extensão 3-2-1-1-0 (II-D).',
      2: 'Incorreta: inverte janela de backup (III-C) com criptografia em trânsito/repouso (IV-A).',
      3: 'Incorreta: inverte criptografia em trânsito/repouso (IV-A) com verificação de jobs (V-E).'
    }
  },
  {
    id: 'sarah-6-38',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre definição de escopo, segurança e boas práticas em **políticas de backup**, considere as afirmativas:\n\nI. Uma política completa estabelece **o quê** copiar (dados críticos e exceções temporárias), **quando** executar (frequência conforme criticidade e janela disponível) e **onde** armazenar os conjuntos.\nII. A regra clássica **3-2-1** é integralmente atendida mantendo o volume original em RAID 5 na produção e gravando duas cópias adicionais dentro do mesmo storage NAS local.\nIII. Para garantir consistência aplicacional em bancos de dados ou Active Directory em execução, a política deve integrar ***VSS Writers*** ou APIs nativas do SGBD para descarregar *buffers* em disco antes da captura.\nIV. Habilitar criptografia em trânsito (TLS) e em repouso (AES) nas políticas exige manter cópia protegida e separada das chaves de descriptografia para evitar indisponibilidade na recuperação.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.2. Políticas de Backup. I verdadeira (o quê/quando/onde + criticidade); II falsa: manter dados de produção e duas cópias no mesmo NAS local não fornece 2 mídias distintas independentes nem 1 cópia *offsite* (além de RAID 5 de produção não contar como cópia isolada); III verdadeira (consistência aplicacional via VSS/SGBD); IV verdadeira (custódia segura e separada de chaves).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II descumpre os critérios de 2 mídias distintas e 1 cópia offsite da regra 3-2-1.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre criptografia e custódia segura de chaves.',
      1: 'Incorreta: inclui II (falsa — mesmo NAS local não cumpre 2 mídias distintas e 1 offsite) e omite III (verdadeira).',
      3: 'Incorreta: inclui II (falsa) e omite I (verdadeira sobre o quê/quando/onde).'
    }
  },
  {
    id: 'sarah-6-39',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre segurança, frequência e conformidade de **políticas de backup** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A frequência de execução prevista na política deve variar conforme a criticidade do sistema, aplicando intervalos menores a bancos transacionais críticos e intervalos maiores a arquivos estáticos.\n( ) A verificação automática de *checksums* ao término de um *job* substitui a criptografia em repouso, pois garante por si só a confidencialidade dos backups gravados em nuvem ou fita.\n( ) Na regra **3-2-1-1-0**, o segundo dígito "1" exige pelo menos uma cópia isolada de forma *offline*, *air-gapped* ou imutável para resistir a *ransomware* e comprometimento de credenciais.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.2. Políticas de Backup. (1) verdadeira (frequência proporcional à criticidade); (2) falsa: *checksum* valida **integridade** (ausência de corrupção), nunca **confidencialidade** (sigilo exige **criptografia**); (3) verdadeira (papel da cópia offline/imutável na regra 3-2-1-1-0).',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa confunde verificação de integridade (checksum) com garantia de confidencialidade (criptografia).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre ajustar a frequência dos backups conforme a criticidade dos dados.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois checksum verifica integridade e não substitui criptografia para confidencialidade.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre a exigência de cópia imutável/air-gap/offline na regra 3-2-1-1-0.'
    }
  },
  {
    id: 'sarah-6-40',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre critérios operacionais e de segurança na elaboração de **políticas de backup**, assinale a afirmação INCORRETA.',
    options: [
      'A definição da janela de backup busca concluir as execuções fora dos horários de pico para evitar impacto perceptível sobre sistemas em produção.',
      'Políticas que adotam criptografia em repouso exigem armazenamento protegido e redundante das chaves fora da mesma mídia ou repositório protegido.',
      'Para bancos transacionais críticos, a política pode combinar um backup completo diário com backups de log de transações em intervalos curtos ao longo do dia.',
      'Uma política consistente com a aplicação dispensa VSS ou congelamento de banco de dados, pois copiar arquivos abertos em uso já preserva integridade transacional.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.2. Backup Consistente com a Aplicação. A alternativa D é **incorreta**: copiar arquivos de banco de dados abertos sem acionar **VSS** ou *scripts*/APIs de *quiesce* resulta em estado inconsistente (*crash-consistent* ou blocos em meio a transações), exigindo recuperação forçada ou causando corrupção.',
    correctAnalysis:
      'A afirmação D é falsa porque copiar arquivos de banco em uso sem VSS/quiesce compromete a integridade transacional da cópia.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): respeitar a janela de backup evita concorrência com o horário comercial.',
      1: 'Incorreta (afirmação verdadeira): separar a custódia das chaves evita perda de acesso aos dados em desastres.',
      2: 'Incorreta (afirmação verdadeira): combinar Full diário com logs de transações em intervalos curtos é prática padrão para bancos críticos.'
    }
  },
  {
    id: 'sarah-6-41',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **políticas de backup**:\n\nUma política corporativa estruturada define o escopo (o quê), a frequência (quando) e o repositório (onde), respeitando a _____ para não concorrer com o horário produtivo; para garantir sigilo dos dados na rede e no armazenamento externo, aplica-se _____ em trânsito e em repouso; e o modelo completo que combina 3 cópias, 2 mídias distintas, 1 cópia *offsite*, 1 cópia imutável/*offline* e 0 erros verificados denomina-se regra _____.',
    options: [
      'retenção GFS / deduplicação / 3-2-1',
      'janela de backup / compactação / 3-2-1',
      'verificação de job / criptografia / 3-2-0-1-1',
      'janela de backup / criptografia / 3-2-1-1-0'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.2. Políticas de Backup. O horário disponível sem afetar produção é a **janela de backup**; o sigilo em trânsito e repouso é garantido por **criptografia**; e o padrão estendido com cópia offline/imutável e verificação sem erros é a **regra 3-2-1-1-0**.',
    correctAnalysis:
      'Respectivamente: janela de backup, criptografia e 3-2-1-1-0.',
    optionErrors: {
      0: 'Incorreta: GFS trata de ciclos de retenção, deduplicação reduz redundância (não garante sigilo) e 3-2-1 não inclui os dígitos imutável e zero erros.',
      1: 'Incorreta: compactação reduz volume, mas não provê confidencialidade em trânsito ou repouso.',
      2: 'Incorreta: a grafia padronizada e o significado dos dígitos correspondem a 3-2-1-1-0, além de a primeira lacuna tratar de janela de backup.'
    }
  },
  {
    id: 'sarah-6-42',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma política de retenção **GFS (*Grandfather-Father-Son*)** define manter, em camadas independentes e sem sobreposição de contagem: **7 pontos diários**, **4 pontos semanais** e **12 pontos mensais**. Após completar um ano inteiro de execuções regulares, quantos pontos distintos de restauração estarão simultaneamente retidos por essa regra?',
    options: [
      '23 pontos distintos (7 diários + 4 semanais + 12 mensais ativos).',
      '12 pontos distintos (os mensais absorvem os diários e semanais).',
      '19 pontos distintos (soma apenas diários e mensais sem semanais).',
      '336 pontos distintos (7 diários multiplicados por 4 semanas e 12 meses).'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.3. Retenção GFS. Na rotação **Grandfather-Father-Son**, as camadas convivem paralelamente com ciclos próprios de expurgo: ao final de um ano, permanecem os últimos **7 diários (*Son*)** + **4 semanais (*Father*)** + **12 mensais (*Grandfather*)**, somando **23 pontos distintos**.',
    correctAnalysis:
      'As camadas da política GFS são somadas diretamente quando independentes: 7 diários + 4 semanais + 12 mensais = 23 pontos retidos simultaneamente.',
    optionErrors: {
      1: 'Incorreta: backups mensais não eliminam os ciclos diários e semanais recentes mantidos nas camadas curtas.',
      2: 'Incorreta: omite os 4 pontos semanais (Father) previstos na política.',
      3: 'Incorreta: os pontos das camadas GFS somam-se por ciclo de expiração (7 + 4 + 12), não se multiplicam ao longo do ano.'
    }
  },
  {
    id: 'sarah-6-43',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos de **retenção e ciclo de vida de backups** à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) Rotação **GFS**\n(II) *Data Aging* (expurgo)\n(III) *Legal Hold* (retenção legal)\n(IV) Retenção por **ciclos**\n(V) Imutabilidade por prazo\n\nColuna da Direita:\n(A) Bloqueio temporário que suspende o expurgo automático de cópias ligadas a auditoria ou litígio judicial.\n(B) Processo rotineiro de catálogo que libera espaço removendo cópias vencidas sem dependências ativas.\n(C) Garantia mínima de conjuntos completos válidos preservados mesmo após falhas consecutivas de execução.\n(D) Hierarquia que combina retenção diária (*Son*), semanal (*Father*) e mensal/anual (*Grandfather*).\n(E) Travamento temporal WORM que proíbe reduzir ou apagar conjuntos gravados antes da data estipulada.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-B, III-A, IV-C, V-E.',
      'I-B, II-D, III-A, IV-C, V-E.',
      'I-D, II-B, III-C, IV-A, V-E.',
      'I-D, II-B, III-A, IV-E, V-C.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.3. Retenção de Backups. (I-D) **GFS** (diário/semanal/mensal); (II-B) **Data Aging** (liberação de cópias expiradas); (III-A) **Legal Hold** (suspensão indefinida do expurgo por demanda jurídica); (IV-C) **Retenção por ciclos** (preserva quantidade mínima de Fulls válidos); (V-E) **Imutabilidade por prazo** (WORM temporal).',
    correctAnalysis:
      'Associação exata: I-D, II-B, III-A, IV-C e V-E.',
    optionErrors: {
      1: 'Incorreta: inverte Rotação GFS (I-D) com Data Aging (II-B).',
      2: 'Incorreta: inverte Legal Hold (III-A) com Retenção por ciclos (IV-C).',
      3: 'Incorreta: inverte Retenção por ciclos (IV-C) com Imutabilidade por prazo (V-E).'
    }
  },
  {
    id: 'sarah-6-44',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **retenção, dependência de cadeias e expurgo (*aging*)**, analise as afirmativas:\n\nI. Em uma cadeia incremental, um backup *Full* cujo prazo de retenção já venceu **não é expurgado** enquanto ainda existirem backups incrementais subsequentes dentro da validade dependendo dele.\nII. Ao aplicar ***Legal Hold*** sobre um conjunto de backup, o catálogo apenas reduz sua retenção em 50%, permitindo que o expurgo automático o apague assim que o armazenamento local atingir 90% de uso.\nIII. Estender a retenção de prontuários eletrônicos e imagens clínicas para muitos anos sem mover conjuntos antigos para camadas *Archive*/fita ou aplicar deduplicação eleva expressivamente o custo de armazenamento primário.\nIV. Em repositórios imutáveis, o prazo de bloqueio WORM deve alinhar-se ao prazo de retenção da política para não impedir o *data aging* planejado ou deixar cópias desprotegidas antes do vencimento.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.3. Retenção e Expurgo. I verdadeira (o *Full* base fica retido até o último incremental dependente expirar); II falsa: o ***Legal Hold*** bloqueia completamente a expiração por tempo indeterminado até ser explicitamente removido por autoridade competente, independentemente da ocupação do disco; III verdadeira (trade-off custo × prazo em longas retenções hospitalares); IV verdadeira (alinhamento entre imutabilidade WORM e política de retenção).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II erra ao atribuir ao Legal Hold redução de prazo ou exclusão automática por falta de espaço.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre alinhamento entre prazo WORM e ciclo de expiração.',
      2: 'Incorreta: inclui II (falsa sobre Legal Hold) e omite III (verdadeira sobre custo de longa retenção).',
      3: 'Incorreta: inclui II (falsa) e omite I (verdadeira sobre dependência de cadeia incremental no aging).'
    }
  },
  {
    id: 'sarah-6-45',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre prazos de **retenção**, custos e imutabilidade e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A retenção baseada exclusivamente em **dias** garante que, mesmo se os backups completos falharem por semanas seguidas, o último *Full* antigo nunca será excluído.\n( ) Diferentemente de uma política fixa de retenção temporal, o ***Legal Hold*** atua como uma trava booleana que impede o expurgo até liberação manual explícita.\n( ) Adotar retenções anuais prolongadas em armazenamento SSD rápido sem camadas frias aumenta substancialmente o TCO frente à migração automática para nuvem *Archive* ou fita LTO.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'F – V – V.',
      'F – V – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.3. Retenção e Custos. (1) falsa: retenção pura por **dias** (sem critério de **ciclos**) pode expirar o último *Full* válido após o prazo em dias mesmo se novos *Fulls* falharem; (2) verdadeira (*Legal Hold* trava expurgo até revogação explícita); (3) verdadeira (custo por TB em SSD rápido × camadas frias/fita para guarda de longo prazo).',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa é falsa porque proteger contra falhas consecutivas exige combinar retenção por ciclos, não apenas por dias.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois a retenção pura por dias não garante preservação de ciclos completos após falhas.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre o bloqueio manual explícito do Legal Hold.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre a redução de TCO ao mover retenções longas para camadas frias/fita.'
    }
  },
  {
    id: 'sarah-6-46',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **retenção de backups**, expurgo e conformidade de longo prazo, assinale a afirmação INCORRETA.',
    options: [
      'Em ambientes hospitalares com prontuários retidos por décadas, recomenda-se mover cópias antigas para camadas de baixo custo ou fita LTO após o período operacional curto.',
      'Uma política com imutabilidade temporal impede encurtar o prazo de retenção de um objeto já protegido antes do término do período configurado.',
      'O processo de data aging libera blocos no repositório somente depois que todas as cópias dependentes daquele ponto de restauração também expiram.',
      'Definir retenção infinita para todos os backups diários em disco primário reduz o custo operacional ao eliminar qualquer rotina de expurgo no catálogo.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.3. Retenção e Custo. A alternativa D é **incorreta**: retenção infinita para backups diários em disco primário provoca **crescimento ilimitado do armazenamento**, exaustão de capacidade, aumento drástico de custos e degradação do catálogo/DDB por ausência de *data aging*.',
    correctAnalysis:
      'A afirmação D é falsa porque acumular backups diários sem expurgo em disco primário esgota a capacidade e multiplica os custos de infraestrutura.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): mover retenções históricas longas para camadas frias ou fitas otimiza o orçamento sem perder conformidade.',
      1: 'Incorreta (afirmação verdadeira): WORM/imutabilidade proíbe encurtamento antecipado da validade.',
      2: 'Incorreta (afirmação verdadeira): integridade referencial impede apagar Full enquanto incrementais dependentes estiverem ativos.'
    }
  },
  {
    id: 'sarah-6-47',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **retenção de backups**:\n\nO esquema hierárquico que organiza cópias em camadas diárias, semanais e mensais/anuais é conhecido como _____; a rotina automática do gerenciador de backup que identifica cópias vencidas e libera espaço no repositório chama-se _____; e o mecanismo que suspende temporariamente o vencimento normal por determinação jurídica ou auditoria denomina-se _____.',
    options: [
      'CBT / Synthetic Full / Data Aging',
      'WORM / Legal Hold / esquema GFS',
      'Legal Hold / GFS / Imutabilidade',
      'GFS / Data Aging / Legal Hold'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.3. Retenção. O modelo diário/semanal/mensal é **GFS** (*Grandfather-Father-Son*); o processo de expurgo de cópias expiradas é o ***Data Aging***; e a suspensão do expurgo por exigência legal ou investigação é o ***Legal Hold***.',
    correctAnalysis:
      'Respectivamente: GFS, Data Aging e Legal Hold.',
    optionErrors: {
      0: 'Incorreta: CBT é rastreamento de blocos de VM, e Synthetic Full cria backups completos consolidados.',
      1: 'Incorreta: WORM trata de imutabilidade de gravação, e Legal Hold corresponde à terceira lacuna.',
      2: 'Incorreta: inverte a ordem entre GFS (esquema de camadas) e Legal Hold (trava jurídica).'
    }
  },
  {
    id: 'sarah-6-48',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma máquina virtual crítica de **4 TB** sofre falha de sistema operacional em horário de pico e precisa voltar ao ar em minutos, sem aguardar a cópia integral dos discos de volta ao *datastore* de produção. Qual técnica de **restore** permite ligar a VM imediatamente usando os arquivos diretamente do repositório de backup e migrá-la em segundo plano para a produção?',
    options: [
      'Instant Recovery (Live Mount), publicando o disco via NFS/iSCSI e migrando depois com Storage vMotion.',
      'Restore Granular de arquivos individuais por agente dentro do sistema operacional desligado.',
      'Bare-Metal Recovery (BMR) gravando uma ISO inicializável em servidor físico dedicado.',
      'Backup Diferencial reverso aplicado manualmente sobre o volume corrompido em modo offline.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.4. Instant Recovery. O ***Instant Recovery* (*Live Mount*)** monta o disco da VM diretamente a partir do repositório de backup (via NFS/iSCSI integrado do proxy/repositório) para ligá-la em minutos no hipervisor e, em seguida, move os blocos para o *datastore* de produção em segundo plano (*Storage vMotion* / migração ativa).',
    correctAnalysis:
      'Instant Recovery / Live Mount inicializa a VM diretamente do repositório de backup e realiza a migração para o storage primário sem manter a aplicação fora do ar.',
    optionErrors: {
      1: 'Incorreta: restore granular recupera arquivos ou itens específicos, não restaura instantaneamente uma VM inteira com falha de SO.',
      2: 'Incorreta: BMR reconstrói servidores físicos vazios via mídia de boot, exigindo cópia integral prévia.',
      3: 'Incorreta: não existe mecanismo de "diferencial reverso manual" para subir uma VM de 4 TB instantaneamente.'
    }
  },
  {
    id: 'sarah-6-49',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as modalidades e práticas de **restore** à esquerda com suas aplicações à direita.\n\nColuna da Esquerda:\n(I) Restore granular\n(II) Restore de VM completa\n(III) Restore para local alternativo\n(IV) *Instant Recovery*\n(V) Verificação automatizada em *sandbox*\n\nColuna da Direita:\n(A) Recupera toda a imagem da máquina virtual (configuração e discos virtuais) sobre o hipervisor.\n(B) Inicializa a VM diretamente do repositório de backup reduzindo drasticamente o tempo até o boot.\n(C) Recupera apenas um e-mail, arquivo ou conta/OU do Active Directory sem restaurar todo o servidor.\n(D) Restaura os dados em pasta, servidor ou banco distinto do original para análise forense ou comparação.\n(E) Liga cópias em rede isolada testando *boot*, *heartbeat* e scripts de serviço para validar recuperabilidade.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-A, II-C, III-D, IV-B, V-E.',
      'I-C, II-A, III-D, IV-B, V-E.',
      'I-C, II-A, III-B, IV-D, V-E.',
      'I-C, II-A, III-D, IV-E, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.4. Modalidades e Testes de Restore. (I-C) **Granular** (e-mail, arquivo ou objeto do AD); (II-A) **VM completa**; (III-D) **Local alternativo** (*out-of-place* para não sobrescrever produção); (IV-B) ***Instant Recovery***; (V-E) **Verificação automatizada em *sandbox*** (ex.: *SureBackup*).',
    correctAnalysis:
      'Associação exata: I-C, II-A, III-D, IV-B e V-E.',
    optionErrors: {
      0: 'Incorreta: inverte Restore granular (I-C) com Restore de VM completa (II-A).',
      2: 'Incorreta: inverte Restore para local alternativo (III-D) com Instant Recovery (IV-B).',
      3: 'Incorreta: inverte Instant Recovery (IV-B) com Verificação automatizada em sandbox (V-E).'
    }
  },
  {
    id: 'sarah-6-50',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre procedimentos, segurança e dependências em operações de **restore**, considere as afirmativas:\n\nI. Ao restaurar um arquivo suspeito de conter dados sobrescritos em incidente de segurança, deve-se sempre gravá-lo diretamente no local original sem opção de preservação prévia.\nII. Em restaurações múltiplas após pane grave, a ordem deve respeitar a árvore de dependências, recuperando serviços de rede, **DNS** e **Active Directory** antes de SGBDs e aplicações integradas.\nIII. Restaurar um objeto acidentalmente excluído do Active Directory usando restauração **não autoritativa** faz com que o objeto restaurado sobrescreva automaticamente os demais DCs.\nIV. Testes periódicos e automatizados de *restore* em *sandbox* isolado permitem validar integridade aplicacional e credenciais de descriptografia sem gerar conflito de IP na produção.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.4. Operações de Restore. I falsa: em incidentes ou dúvidas sobre versões, recomenda-se restaurar para **local alternativo** (*out-of-place*) para comparar ou preservar evidências antes de substituir produção; II verdadeira (ordem de dependências: rede/AD/DNS antes das aplicações); III falsa: restauração **não autoritativa** aceita as atualizações mais novas dos parceiros e **mantém o objeto excluído se a exclusão tiver USN maior** — para forçar a volta sobre os demais DCs exige-se restauração **autoritativa** (ou Lixeira do AD); IV verdadeira (*sandbox* isolado evita conflito de rede e comprova restore).',
    correctAnalysis:
      'Gabarito: Somente II e IV estão corretas. A afirmativa I ignora o restore para local alternativo, e a III confunde restauração não autoritativa com autoritativa no AD.',
    optionErrors: {
      0: 'Incorreta: I e III contêm erros técnicos (sobrescrita obrigatória no original e efeito da restauração não autoritativa no AD).',
      2: 'Incorreta: inclui I (falsa sobre restauração forçada no local original).',
      3: 'Incorreta: inclui III (falsa ao atribuir sobrescrita global à restauração não autoritativa).'
    }
  },
  {
    id: 'sarah-6-51',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre técnicas e validação de **restore** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O restore para **local alternativo** permite recuperar uma base de dados ou pasta específica em servidor de homologação sem interromper ou sobrescrever o ambiente produtivo atual.\n( ) No *Instant Recovery* de uma VM, os discos já são copiados integralmente de volta ao storage de produção antes de permitir que o sistema operacional convidado inicie o *boot*.\n( ) A verificação automatizada em *sandbox* valida o *restore* ligando a VM diretamente na mesma VLAN de produção com o mesmo endereço IP ativo para testar acessos reais dos usuários.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – V – F.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.4. Técnicas de Restore. (1) verdadeira (*out-of-place* evita sobrescrita e parada em produção); (2) falsa: no ***Instant Recovery***, a VM faz *boot* **imediatamente** lendo os discos montados no repositório e a cópia definitiva ocorre depois em segundo plano; (3) falsa: o *sandbox* automatizado opera em **rede virtual isolada (NAT/masquerade)** para impedir conflito de IP/hostname com a VM em produção.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa descreve corretamente o comportamento do restore para local alternativo.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre o uso seguro do restore para local alternativo.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois o Instant Recovery inicia a VM antes da cópia integral dos discos.',
      2: 'Incorreta: a afirmativa (3) é falsa, pois testes em sandbox isolam a rede para evitar conflito de IP com produção.'
    }
  },
  {
    id: 'sarah-6-52',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre restauração de sistemas:\n\nQuando apenas uma caixa postal, tabela ou usuário específico precisa ser recuperado sem substituir o servidor inteiro, aplica-se o restore _____; para não arriscar sobrescrever arquivos em produção ou para investigar versões anteriores com segurança, executa-se o restore para _____; e ao restaurar todo o parque após falha grave, serviços centrais como _____ devem subir antes dos sistemas de negócio dependentes.',
    options: [
      'bare metal / Instant Recovery / aplicações web',
      'granular / local original / bancos SQL',
      'completo de VM / sandbox / servidores de arquivos',
      'granular / local alternativo / DNS e Active Directory'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.4. Restore. Recuperar itens individuais caracteriza **restore granular**; evitar sobrescrita recuperando fora do caminho ativo usa **local alternativo**; e respeitar dependências exige subir **DNS e Active Directory** antes das aplicações clientes.',
    correctAnalysis:
      'Respectivamente: granular, local alternativo e DNS e Active Directory.',
    optionErrors: {
      0: 'Incorreta: bare metal recupera o servidor físico inteiro, não apenas um objeto ou e-mail isolado.',
      1: 'Incorreta: restaurar no local original sobrescreve dados atuais, ao contrário do local alternativo.',
      2: 'Incorreta: restore completo de VM recupera toda a máquina, não um item específico de aplicação.'
    }
  },
  {
    id: 'sarah-6-53',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um sistema de prontuário eletrônico possui **RTO acordado de 4 horas**. Em uma falha grave do servidor principal, é necessário restaurar integralmente uma imagem de **4 TB (4.000.000 MB)** a partir de um repositório capaz de sustentar vazão contínua de **200 MB/s** na rede de recuperação, desconsiderando tempo adicional de inicialização. Qual é o tempo estimado de transferência na restauração e a situação frente ao RTO?',
    options: [
      'Cerca de 5 h 33 min (20.000 s), violando o RTO de 4 horas.',
      'Cerca de 3 h 20 min (12.000 s), atendendo ao RTO de 4 horas.',
      'Cerca de 2 h 47 min (10.000 s), atendendo ao RTO de 4 horas.',
      'Cerca de 8 h 20 min (30.000 s), violando o RTO de 4 horas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.5. Cálculo de RTO. Dividindo o volume pela vazão: 4.000.000 MB / 200 MB/s = **20.000 segundos**. Convertendo para horas: 20.000 / 3.600 = 5,555... horas = **5 horas e 33 minutos** (aproximadamente 333 min). Como 5 h 33 min > 4 h, a infraestrutura atual **viola o RTO de 4 horas** em cerca de 1 h 33 min.',
    correctAnalysis:
      '4.000.000 MB / 200 MB/s resulta em 20.000 s (~5 h 33 min), excedendo o limite de 4 horas definido pelo RTO.',
    optionErrors: {
      1: 'Incorreta: 12.000 s (3 h 20 min) equivaleria a restaurar 2,4 TB a 200 MB/s, não 4 TB.',
      2: 'Incorreta: 10.000 s (2 h 47 min) exigiria sustentar 400 MB/s de vazão contínua.',
      3: 'Incorreta: 30.000 s (8 h 20 min) equivaleria a restaurar 6 TB a 200 MB/s.'
    }
  },
  {
    id: 'sarah-6-54',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um estudo de **BIA (*Business Impact Analysis*)**, determinado sistema hospitalar apresenta **MTD (*Maximum Tolerable Downtime*) de 6 horas**, exige **WRT (*Work Recovery Time*) de 1 h 30 min** para testes clínicos após o retorno da infraestrutura e executa backups agendados rigorosamente **a cada 6 horas** (00h, 06h, 12h e 18h). Considerando a relação `RTO + WRT <= MTD` e o pior caso entre execuções, quais são respectivamente o **RPO máximo garantido** pela agenda e o **RTO máximo admissível**?',
    options: [
      'RPO máximo de 6 horas e RTO máximo admissível de 4 h 30 min.',
      'RPO máximo de 4 h 30 min e RTO máximo admissível de 6 horas.',
      'RPO máximo de 6 horas e RTO máximo admissível de 7 h 30 min.',
      'RPO máximo de 1 h 30 min e RTO máximo admissível de 6 horas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.5. RPO, RTO, WRT e MTD. Com backups a cada **6 horas**, uma falha ocorrida instantes antes da próxima janela gera perda máxima de **6 horas** (**RPO = 6 h**). Pela restrição `RTO + WRT <= MTD`, como MTD = 6 h e WRT = 1 h 30 min, o tempo máximo para a equipe técnica restaurar os sistemas é `RTO <= 6 h - 1 h 30 min =` **4 h 30 min**.',
    correctAnalysis:
      'Agenda de 6 em 6 horas implica RPO máximo de 6 horas, e RTO máximo = MTD (6 h) menos WRT (1 h 30 min) = 4 h 30 min.',
    optionErrors: {
      1: 'Incorreta: inverte o RPO garantido pela frequência dos backups (6 h) com o limite calculado de RTO (4 h 30 min).',
      2: 'Incorreta: soma o WRT ao MTD em vez de subtraí-lo; se o RTO fosse 7 h 30 min, já ultrapassaria o MTD de 6 h.',
      3: 'Incorreta: confunde o tempo de WRT (1 h 30 min) com o RPO e iguala o RTO ao MTD total sem descontar o WRT.'
    }
  },
  {
    id: 'sarah-6-55',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as métricas e processos de **continuidade e recuperação** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) **RPO**\n(II) **RTO**\n(III) **WRT**\n(IV) **MTD**\n(V) **BIA**\n\nColuna da Direita:\n(A) Tempo máximo total de parada suportável pelo processo de negócio antes de dano severo ou irreversível.\n(B) Análise de impacto nos negócios que mapeia processos críticos, prejuízos por hora parada e fundamenta metas.\n(C) Quantidade máxima tolerável de dados perdidos, medida no tempo entre o último backup válido e a falha.\n(D) Tempo gasto após a restauração da infraestrutura para validar integridade, reprocessar filas e liberar ao usuário.\n(E) Tempo máximo aceitável entre a ocorrência do incidente e o restabelecimento técnico dos sistemas de TI.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-C, III-D, IV-A, V-B.',
      'I-C, II-E, III-A, IV-D, V-B.',
      'I-C, II-E, III-D, IV-A, V-B.',
      'I-C, II-E, III-D, IV-B, V-A.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.5. Métricas de Continuidade. (I-C) **RPO** (perda máxima de dados no tempo); (II-E) **RTO** (tempo de restabelecimento técnico); (III-D) **WRT** (validação e recuperação do trabalho pós-restore); (IV-A) **MTD** (limite total `RTO + WRT <= MTD`); (V-B) **BIA** (*Business Impact Analysis*).',
    correctAnalysis:
      'Associação exata: I-C, II-E, III-D, IV-A e V-B.',
    optionErrors: {
      0: 'Incorreta: inverte RPO (I-C) com RTO (II-E).',
      1: 'Incorreta: inverte WRT (III-D) com MTD (IV-A).',
      3: 'Incorreta: inverte MTD (IV-A) com BIA (V-B).'
    }
  },
  {
    id: 'sarah-6-56',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre a relação entre **RPO, RTO, WRT, MTD e custos**, analise as afirmativas:\n\nI. A equação de conformidade operacional estabelece que a soma `RTO + WRT` não deve ultrapassar o **MTD** definido para o processo na análise de impacto (**BIA**).\nII. Reduzir o RPO e o RTO de 24 horas para valores próximos de zero gera redução proporcional no custo total de infraestrutura, pois exige menos frequência de cópias.\nIII. O **RPO** orienta diretamente a frequência de backups ou o modelo de replicação adotado, enquanto o **RTO** condiciona a velocidade do repositório e técnicas como *Instant Recovery*.\nIV. Se um serviço apresenta `WRT = 0`, significa que o tempo máximo permitido pela área de negócio para recuperar dados e validar sistemas é inferior ao RTO técnico.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.5. RPO/RTO e Custos. I verdadeira (`RTO + WRT <= MTD`); II falsa: aproximar RPO/RTO de zero provoca **crescimento exponencial de custos** (links redundantes, clusters ativo-ativo, replicação contínua e storage de alta performance); III verdadeira (RPO governa periodicidade/replicação; RTO governa velocidade de recuperação); IV falsa: se `WRT = 0`, então `RTO <= MTD` (o tempo disponível após a recuperação técnica para validação/retorno negocial é zero, não tornando o MTD menor que o RTO).',
    correctAnalysis:
      'Gabarito: Somente I e III estão corretas. A afirmativa II erra na curva de custo (RPO/RTO próximos de zero encarecem exponencialmente) e a IV interpreta incorretamente WRT = 0.',
    optionErrors: {
      0: 'Incorreta: inclui II (falsa — reduzir RPO/RTO para perto de zero eleva muito os custos) e omite III.',
      1: 'Incorreta: II e IV são falsas, enquanto I e III são verdadeiras.',
      3: 'Incorreta: inclui IV (falsa na interpretação de WRT = 0).'
    }
  },
  {
    id: 'sarah-6-57',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre objetivos de recuperação (**RPO, RTO, MTD e BIA**) e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Cumprir um **RTO de 15 minutos** assegura automaticamente o atendimento a um **MTD de 1 hora**, independentemente de o **WRT** (validação e retorno negocial pós-restore) levar 1 hora adicional.\n( ) A **Análise de Impacto nos Negócios (BIA)** identifica os processos críticos da instituição, estima prejuízos por parada e fundamenta as metas de MTD, RTO e RPO.\n( ) O **RTO** define o ponto máximo no passado tolerado para perda de dados em uma falha, sendo determinado diretamente pelo intervalo entre backups.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – V.',
      'F – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.5. RPO, RTO, WRT e BIA. (1) falsa: `RTO (15 min) + WRT (60 min) = 75 min`, violando o **MTD de 60 min**; (2) verdadeira (papel da **BIA** na definição fundamentada das metas); (3) falsa: o ponto máximo aceitável de perda de dados no tempo é o **RPO** (*Recovery Point Objective*), e não o RTO.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa define corretamente o papel da BIA; a primeira ignora a soma RTO + WRT <= MTD e a terceira confunde RTO com RPO.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois 15 min de RTO + 60 min de WRT excedem o MTD de 1 hora.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre o papel da Análise de Impacto nos Negócios (BIA).',
      2: 'Incorreta: a afirmativa (3) é falsa, pois a perda máxima tolerável de dados no tempo define o RPO, não o RTO.'
    }
  },
  {
    id: 'sarah-6-58',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre custos, métricas de recuperação (**RPO, RTO, WRT, MTD**) e Análise de Impacto nos Negócios (**BIA**), assinale a afirmação INCORRETA.',
    options: [
      'Na relação de continuidade, a soma do RTO com o WRT deve permanecer menor ou igual ao MTD estabelecido para o processo crítico.',
      'Sistemas com metas próximas de zero para RPO e RTO exigem arquiteturas altamente redundantes e links dedicados, elevando drasticamente o custo.',
      'A BIA prioriza sistemas assistenciais e administrativos conforme o impacto financeiro, operacional e de segurança durante indisponibilidades.',
      'O WRT corresponde ao intervalo entre o último backup íntegro realizado antes do desastre e o momento exato em que o servidor falhou.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.5. Métricas de Continuidade. A alternativa D é **incorreta**: o intervalo entre o último backup íntegro e o momento da falha representa a perda de dados efetiva (limitada pelo **RPO**), ao passo que o **WRT (*Work Recovery Time*)** mede o tempo **após** o restabelecimento técnico (RTO) necessário para validar integridade, reprocessar pendências e liberar o processo aos usuários.',
    correctAnalysis:
      'A afirmação D é falsa porque descreve a janela de perda de dados (RPO) atribuindo-a indevidamente ao WRT.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a inequação RTO + WRT <= MTD rege o limite total tolerável de parada.',
      1: 'Incorreta (afirmação verdadeira): quanto menores RPO e RTO, maior o investimento em replicação contínua e alta disponibilidade.',
      2: 'Incorreta (afirmação verdadeira): a BIA classifica criticidade com base no impacto da interrupção.'
    }
  },
  {
    id: 'sarah-6-59',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma instituição possui dois datacenters a 15 km com fibra dedicada de 1,5 ms RTT, mas utiliza *storages* de fabricantes distintos entre os sites. Para um ambiente de **SQL Server** crítico que precisa manter réplica atualizada e realizar comutação ciente do estado transacional do banco sem exigir *arrays* homogêneos no nível de bloco, qual abordagem de **replicação** atende melhor ao requisito?',
    options: [
      'Replicação em nível de aplicação (como SQL Always On Availability Groups), independente do fabricante dos arrays.',
      'Replicação síncrona nativa de storage array, pois funciona nativamente entre quaisquer fabricantes diferentes.',
      'Envio noturno de backups diferenciais gravados em fita LTO para o site secundário via malote físico.',
      'Snapshots locais no volume primário sem transmissão externa, preservando o estado transacional no próprio disco.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.6. Replicação por Aplicação × Storage. A **replicação em nível de aplicação** — como **SQL Server Always On Availability Groups** ou **Exchange DAG** — envia transações/logs diretamente entre instâncias do serviço, garantindo consistência aplicacional e independência total do modelo ou fabricante do *storage* subjacente.',
    correctAnalysis:
      'Replicação baseada em aplicação (Always On AG) dispensa homogeneidade entre storage arrays e preserva consciência transacional entre os dois sites.',
    optionErrors: {
      1: 'Incorreta: replicação nativa de storage array normalmente exige pares homogêneos ou compatíveis do mesmo fabricante.',
      2: 'Incorreta: envio físico de fitas noturnas é rotina de backup offsite, não replicação contínua com comutação de banco.',
      3: 'Incorreta: snapshots locais não replicam dados para o site secundário em caso de falha do datacenter principal.'
    }
  },
  {
    id: 'sarah-6-60',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos e modos de **replicação de dados** à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) Replicação **síncrona**\n(II) Replicação **assíncrona**\n(III) **CDP (*Continuous Data Protection*)**\n(IV) Replicação por **hipervisor**\n(V) Replicação por **storage array**\n\nColuna da Direita:\n(A) Espelhamento em bloco entre controladoras compatíveis sem exigir agentes dentro dos sistemas operacionais.\n(B) Gravação confirmada somente após ACK remoto, garantindo RPO zero à custa de sensibilidade à latência.\n(C) Registro contínuo em *journal* de cada alteração, permitindo rebobinar para praticamente qualquer segundo recente.\n(D) Envio posterior à gravação local, suportando longas distâncias geográficas com RPO maior que zero.\n(E) Cópia contínua/periódica por VM no *host*, desacoplada do fabricante físico de *storage*.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-B, III-C, IV-E, V-A.',
      'I-B, II-D, III-C, IV-E, V-A.',
      'I-B, II-D, III-E, IV-C, V-A.',
      'I-B, II-D, III-C, IV-A, V-E.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.6. Replicação. (I-B) **Síncrona** (ACK remoto + RPO zero + sensível à latência); (II-D) **Assíncrona** (ACK local + longas distâncias + RPO > 0); (III-C) **CDP** (*journal* granular de alterações); (IV-E) **Por hipervisor** (nível de VM, independente do array); (V-A) **Por storage array** (controladora-a-controladora em bloco).',
    correctAnalysis:
      'Associação exata: I-B, II-D, III-C, IV-E e V-A.',
    optionErrors: {
      0: 'Incorreta: inverte Replicação síncrona (I-B) com Replicação assíncrona (II-D).',
      2: 'Incorreta: inverte CDP (III-C) com Replicação por hipervisor (IV-E).',
      3: 'Incorreta: inverte Replicação por hipervisor (IV-E) com Replicação por storage array (V-A).'
    }
  },
  {
    id: 'sarah-6-61',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **replicação de dados**, mecanismos de *journal* e limites frente a incidentes lógicos, analise as afirmativas:\n\nI. A replicação síncrona entre datacenters substitui integralmente o backup tradicional com retenção histórica, pois impede que exclusões acidentais e criptografia de *ransomware* atinjam a réplica.\nII. Na replicação **assíncrona**, a aplicação recebe confirmação imediatamente após a escrita local, permitindo cobrir longas distâncias com impacto mínimo de latência, ao custo de RPO maior que zero.\nIII. Soluções de **CDP (*Continuous Data Protection*)** utilizam um *journal* de gravações que permite restaurar o volume para instantes muito próximos ao segundo exato anterior a uma corrupção lógica.\nIV. A replicação baseada em **hipervisor** (como vSphere Replication) opera no nível da máquina virtual e independe de os *storages* de origem e destino serem do mesmo fabricante.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.6. Replicação. I falsa: **replicação não substitui backup** — como espelha alterações (de imediato na síncrona ou no próximo ciclo na assíncrona), exclusões, corrupção lógica e criptografia por *ransomware* também são replicadas ao destino; II verdadeira (assíncrona para longas distâncias); III verdadeira (*journal* CDP); IV verdadeira (replicação no hipervisor desacoplada de array).',
    correctAnalysis:
      'Gabarito: Somente II, III e IV estão corretas. A afirmativa I erra ao afirmar que a replicação síncrona substitui o backup e bloqueia exclusões ou ransomware.',
    optionErrors: {
      0: 'Incorreta: inclui I (falsa — replicação propaga exclusão/ransomware) e omite III e IV (verdadeiras).',
      1: 'Incorreta: inclui I (falsa) e omite II (verdadeira sobre replicação assíncrona).',
      3: 'Incorreta: inclui I (falsa) e omite III (verdadeira sobre CDP com journal).'
    }
  },
  {
    id: 'sarah-6-62',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre camadas e garantias da **replicação de dados** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Na replicação por aplicação, como grupos de disponibilidade do **SQL Server Always On** ou **Exchange DAG**, a própria camada do serviço replica transações entre nós cientes da integridade aplicacional.\n( ) Embora acelere a continuidade entre sites e reduza o RPO, a replicação sem histórico imutável propaga apagamentos lógicos e ataques de *ransomware* para a réplica, não substituindo o backup.\n( ) Na replicação **síncrona** de *storage*, a escrita é confirmada à aplicação imediatamente após atingir o *array* primário, sendo enviada ao *array* remoto apenas quando há folga no link.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – F – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.6. Replicação. (1) verdadeira (SQL Always On AG e Exchange DAG são exemplos clássicos de replicação por aplicação); (2) verdadeira (replicação ≠ backup por propagar exclusão, corrupção e *ransomware*); (3) falsa: na **síncrona**, a confirmação à aplicação só retorna **após o destino remoto também gravar e confirmar**; enviar depois define a replicação **assíncrona**.',
    correctAnalysis:
      'Gabarito: V – V – F. A terceira afirmativa descreve o funcionamento da replicação assíncrona, atribuindo-o erroneamente à síncrona.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre replicação em nível de aplicação.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre replicação não substituir backup contra exclusão/ransomware.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois na replicação síncrona a confirmação depende do recebimento remoto.'
    }
  },
  {
    id: 'sarah-6-63',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquiteturas de **replicação de dados**, mecanismos de *journal* e limites de proteção, assinale a afirmação INCORRETA.',
    options: [
      'A replicação assíncrona pode operar com RPO de segundos ou minutos sobre longas distâncias geográficas sem impor latência da WAN às escritas em produção.',
      'O uso de CDP com journal contínuo oferece granularidade muito superior à de snapshots agendados de hora em hora ao permitir voltar para segundos antes de uma falha.',
      'A replicação em nível de storage geralmente exige compatibilidade de fabricante ou família de arrays entre origem e destino para gerenciar espelhamento de LUNs.',
      'Por manter cópia idêntica e sincronizada em tempo real no site secundário, a replicação síncrona garante proteção automática contra apagamentos feitos por administradores.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.6. Replicação Não Substitui Backup. A alternativa D é **incorreta**: precisamente por espelhar em tempo real, qualquer comando destrutivo (exclusão acidental de tabela, formatação ou criptografia de *ransomware*) executado na origem é **imediatamente replicado** ao site secundário, exigindo backups históricos isolados/imutáveis.',
    correctAnalysis:
      'A afirmação D é falsa porque a replicação síncrona replica comandos de exclusão e corrupção no mesmo instante em que ocorrem na origem.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): replicação assíncrona isola a escrita local da latência de longa distância.',
      1: 'Incorreta (afirmação verdadeira): journal CDP permite recuperação granular por segundos ou eventos de escrita.',
      2: 'Incorreta (afirmação verdadeira): espelhamento nativo de storage depende de arrays compatíveis entre os sites.'
    }
  },
  {
    id: 'sarah-6-64',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **replicação de dados**:\n\nQuando a confirmação de escrita exige gravação prévia no destino remoto garantindo RPO zero em curtas distâncias, aplica-se a replicação _____; quando alterações contínuas são gravadas em um histórico granular (*journal*) permitindo rebobinar para praticamente qualquer instante, utiliza-se _____; já para proteger bancos de dados ou mensageria com consciência transacional e sem depender de *arrays* idênticos, adota-se replicação em nível de _____.',
    options: [
      'assíncrona / snapshot / hipervisor',
      'síncrona / diferencial / storage',
      'assíncrona / CDP / aplicação',
      'síncrona / CDP / aplicação'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.6. Replicação. RPO zero com ACK remoto em curtas distâncias é replicação **síncrona**; histórico contínuo via *journal* caracteriza **CDP** (*Continuous Data Protection*); e consciência transacional sem depender do hardware de storage caracteriza replicação em nível de **aplicação**.',
    correctAnalysis:
      'Respectivamente: síncrona, CDP e aplicação.',
    optionErrors: {
      0: 'Incorreta: replicação assíncrona não aguarda confirmação remota prévia e apresenta RPO > 0.',
      1: 'Incorreta: backup diferencial não mantém journal contínuo por escrita nem consciência transacional de aplicação.',
      2: 'Incorreta: a primeira lacuna descreve replicação síncrona (RPO zero em curtas distâncias), não assíncrona.'
    }
  },
  {
    id: 'sarah-6-65',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após uma pane elétrica severa no datacenter principal, a equipe acionou o **failover** para o site secundário guiada por um *runbook* de DR, mantendo sistemas assistenciais em operação por 48 horas. Concluído o reparo do datacenter principal, deseja-se retornar a produção para o ambiente de origem sem perder os registros clínicos criados durante a contingência. Qual procedimento executa esse retorno com segurança?',
    options: [
      'Failback planejado, ressincronizando no site principal as alterações acumuladas no site DR antes de comutar de volta.',
      'Reconstrução de um Cold Site vazio do zero descartando as alterações gravadas durante as 48 horas em contingência.',
      'Exercício Tabletop em sala de reunião para revisar o BCP sem ressincronizar os bancos do ambiente secundário.',
      'Failover reverso imediato por desligamento abrupto do site secundário e restauração do snapshot anterior à pane.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.7. Failover e Failback em DR. O retorno organizado da operação do site secundário de volta ao site primário após a normalização denomina-se ***failback***. Para preservar os dados gerados durante a contingência, é indispensável **ressincronizar os deltas acumulados no site DR** para o site principal antes de redirecionar os usuários.',
    correctAnalysis:
      'O failback planejado transfere as modificações produzidas durante o período em contingência de volta ao site primário antes da comutação final.',
    optionErrors: {
      1: 'Incorreta: descartar as alterações das 48 horas causaria grave perda de registros assistenciais recentes.',
      2: 'Incorreta: tabletop é exercício teórico em mesa, não procedimento operacional de retorno pós-incidente.',
      3: 'Incorreta: desligar abruptamente o site DR e voltar a snapshot pré-pane apagaria todo o trabalho produzido na contingência.'
    }
  },
  {
    id: 'sarah-6-66',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos e modalidades de **Recuperação de Desastres (DR)** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) **Hot Site**\n(II) **Warm Site**\n(III) **Cold Site**\n(IV) **DRaaS**\n(V) **Runbook**\n\nColuna da Direita:\n(A) Espaço físico equipado com energia, climatização e conectividade básica, sem servidores instalados nem dados prontos.\n(B) Ambiente espelhado totalmente equipado, ligado e com dados continuamente atualizados para assumir produção rapidamente.\n(C) Roteiro técnico detalhado, sequenciado e testado passo a passo para guiar ativação e retorno durante crises.\n(D) Site pré-equipado com servidores e rede parcialmente prontos, exigindo restauração/ativação de dados antes de operar.\n(E) Serviço gerenciado em nuvem que orquestra replicação e failover sob demanda, cobrando computação plena ao ativar.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-B, II-D, III-A, IV-E, V-C.',
      'I-D, II-B, III-A, IV-E, V-C.',
      'I-B, II-D, III-E, IV-A, V-C.',
      'I-B, II-D, III-A, IV-C, V-E.'
    ],
    correctIndex: 0,
    explanation:
      'Item 6.2.7. Recuperação de Desastres. (I-B) **Hot Site** (espelhado e ligado); (II-D) **Warm Site** (hardware pré-instalado, requer carga final); (III-A) **Cold Site** (infraestrutura predial sem servidores/dados); (IV-E) **DRaaS** (*Disaster Recovery as a Service*); (V-C) **Runbook** (roteiro operacional passo a passo).',
    correctAnalysis:
      'Associação exata: I-B, II-D, III-A, IV-E e V-C.',
    optionErrors: {
      1: 'Incorreta: inverte Hot Site (I-B) com Warm Site (II-D).',
      2: 'Incorreta: inverte Cold Site (III-A) com DRaaS (IV-E).',
      3: 'Incorreta: inverte DRaaS (IV-E) com Runbook (V-C).'
    }
  },
  {
    id: 'sarah-6-67',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **DRP, BCP, testes de recuperação e gestão de crises**, analise as afirmativas:\n\nI. Enquanto o **BCP (*Business Continuity Plan*)** abrange a continuidade integral dos processos da instituição (pessoas, instalações alternativas e contingências manuais), o **DRP (*Disaster Recovery Plan*)** concentra-se na recuperação técnica de infraestrutura, sistemas e dados de TI.\nII. O teste do tipo ***tabletop*** consiste em desligar abruptamente os links e servidores de produção em horário comercial para medir o comportamento real da rede em um corte completo.\nIII. Durante o ***failback*** após um incidente grave, deve-se descartar o ambiente DR e restaurar no site principal apenas a última cópia anterior ao desastre, ignorando o período em contingência.\nIV. Um plano de recuperação maduro define claramente autoridade para declarar o desastre, papéis de cada equipe, contatos fora de banda e fluxo de comunicação com diretoria e usuários.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I e IV estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.7. DRP, BCP e Testes. I verdadeira (distinção de escopo entre BCP e DRP); II falsa: ***tabletop*** é um exercício teórico em sala (simulação dialogada em mesa sobre cenários do plano), sem desligar produção; III falsa: o ***failback*** exige ressincronizar os dados gerados no site DR durante a contingência para evitar perda de informações; IV verdadeira (governança, papéis e comunicação alternativa em crise).',
    correctAnalysis:
      'Gabarito: Somente I e IV estão corretas. A afirmativa II descreve teste de interrupção total em vez de tabletop, e a III erra ao descartar deltas durante o failback.',
    optionErrors: {
      0: 'Incorreta: inclui II (falsa sobre o conceito de teste tabletop) e omite IV (verdadeira).',
      2: 'Incorreta: II e III são falsas, enquanto I e IV são verdadeiras.',
      3: 'Incorreta: inclui III (falsa ao propor perda dos dados da contingência no failback).'
    }
  },
  {
    id: 'sarah-6-68',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **planos, sites e testes de recuperação de desastres** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O **DRP** substitui integralmente o **BCP**, pois restabelecer servidores e redes já supre falta de energia predial, logística assistencial e contingências manuais.\n( ) O ***Cold Site*** mantém todo o parque de servidores espelhado, ligado e atualizado continuamente para assumir a produção sem necessidade de instalação ou carga prévia.\n( ) Exercícios ***tabletop*** e simulações controladas validam lacunas no *runbook*, permissões e cadeia de comunicação do comitê de crise sem causar parada na produção.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.7. Planos e Sites de DR. (1) falsa: o **DRP** integra-se como subconjunto técnico dentro do **BCP**, não substituindo contingências prediais, operacionais e humanas; (2) falsa: infraestrutura pronta, ligada e atualizada caracteriza o ***Hot Site*** — o *Cold Site* fornece apenas espaço físico/energia/refrigeração sem servidores pré-configurados; (3) verdadeira (valor dos testes sem parada produtiva).',
    correctAnalysis:
      'Gabarito: F – F – V. Apenas a terceira afirmativa é verdadeira; a primeira subordina erroneamente o BCP ao DRP e a segunda atribui características de Hot Site ao Cold Site.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois o DRP é parte técnica complementar do BCP e não o substitui.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois manter servidores espelhados e ligados define Hot Site, não Cold Site.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre validar runbooks e comunicação via tabletop/simulação sem impactar produção.'
    }
  },
  {
    id: 'sarah-6-69',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre planejamento de **recuperação de desastres (DR)**, modelos de execução e testes, assinale a afirmação INCORRETA.',
    options: [
      'O modelo DRaaS reduz investimento inicial em datacenter próprio secundário ao contratar orquestração e capacidade de failover em nuvem sob demanda.',
      'Testes paralelos permitem validar sistemas no ambiente de DR rodando simultaneamente com o ambiente principal antes de arriscar um corte completo.',
      'Para simplificar o acionamento em crises, o runbook de DR deve dispensar critérios de escalonamento e autoridade formal para declarar desastre.',
      'A seleção entre Cold, Warm e Hot Site pondera o custo contínuo de manter infraestrutura secundária diante da velocidade exigida de retomada.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.7. Governança e Runbook de DR. A alternativa C é **incorreta**: definir **quem possui autoridade formal para declarar desastre**, os critérios objetivos de escalonamento e a cadeia de comunicação é essencial em um *runbook*/DRP para evitar tanto atrasos indecisos quanto comutações prematuras que geram *split-brain*.',
    correctAnalysis:
      'A afirmação C é falsa porque papéis, escalonamento e autoridade formal para declarar desastre são pilares indispensáveis de qualquer plano e runbook de DR.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): DRaaS converte CapEx de site secundário próprio em modelo sob demanda em nuvem.',
      1: 'Incorreta (afirmação verdadeira): testes paralelos validam operação no DR sem interromper a produção primária.',
      3: 'Incorreta (afirmação verdadeira): há relação direta entre investimento contínuo (Cold < Warm < Hot) e prontidão de retomada.'
    }
  },
  {
    id: 'sarah-6-70',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **recuperação de desastres**:\n\nO plano institucional abrangente voltado à continuidade de todos os processos críticos de negócio (incluindo equipes, instalações e contingência manual) denomina-se _____; o roteiro técnico sequenciado e detalhado utilizado pela equipe para acionar e validar os sistemas durante um incidente chama-se _____; e o formato de treinamento em que participantes discutem em mesa um cenário hipotético passo a passo sem afetar a produção denomina-se _____.',
    options: [
      'DRP / SLA / failover real',
      'BCP / CSDB / teste paralelo',
      'DRaaS / runbook / corte total',
      'BCP / runbook / teste tabletop'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.7. Recuperação de Desastres. A continuidade ampla dos processos do negócio compete ao **BCP** (*Business Continuity Plan*); o roteiro técnico passo a passo é o ***runbook***; e a revisão em sala de um cenário sem interferência produtiva é o teste ***tabletop***.',
    correctAnalysis:
      'Respectivamente: BCP, runbook e tabletop.',
    optionErrors: {
      0: 'Incorreta: DRP foca na TI (não na contingência manual integral), e failover real aciona de fato a comutação.',
      1: 'Incorreta: CSDB é o catálogo interno do CommServe, e teste paralelo sobe sistemas reais em paralelo com a produção.',
      2: 'Incorreta: DRaaS é serviço de DR em nuvem, e interrupção completa desliga o ambiente principal durante o teste.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 7 (+3) ====================
  {
    id: 'sarah-7-13',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em redes Wi-Fi na faixa de 2,4 GHz com largura de canal de 20 MHz, qual trio de canais não possui sobreposição entre si?',
    options: [
      'Canais 1, 3 e 5.',
      'Canais 1, 6 e 11.',
      'Canais 2, 7 e 12.',
      'Canais 3, 6 e 9.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Redes sem fio padrões IEEE 802.11 (Eixo 7. WI-FI/NAC). Na banda de 2,4 GHz, cada canal tem espaçamento central de apenas 5 MHz enquanto o sinal ocupa ~20–22 MHz; apenas os canais 1, 6 e 11 operam totalmente sem sobreposição de espectro.',
    correctAnalysis:
      'O plano clássico sem interferência co-canal adjacente em 2,4 GHz utiliza exclusivamente os canais 1, 6 e 11.',
    optionErrors: {
      0: 'Incorreta: canais 1, 3 e 5 ficam separados por apenas 10 MHz, gerando forte interferência de canal adjacente.',
      2: 'Incorreta: embora separados por 5 canais, 2-7-12 deixam o canal 12 dependente de domínio regulatório e fora do padrão universal 1-6-11.',
      3: 'Incorreta: separação de apenas 3 canais (15 MHz) causa sobreposição parcial de espectro.'
    }
  },
  {
    id: 'sarah-7-14',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Impressoras médicas sem suporte a cliente 802.1X precisam autenticar-se em switches gerenciados pelo Cisco ISE e receber mudança dinâmica de política ao entrar em conformidade. Quais recursos combinam-se nesse fluxo?',
    options: [
      'Captive Portal aberto sem autenticação e bloqueio estático de ARP no switch.',
      'TKIP legado no SSID corporativo e troca manual de cabos no patch panel.',
      'MAB (MAC Authentication Bypass) com profiling e CoA (Change of Authorization).',
      'Desativação total do servidor RADIUS e uso exclusivo de senha WEP compartilhada.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Cisco ISE, Omada ou equivalentes (Eixo 7. WI-FI/NAC). Dispositivos legados sem supplicant 802.1X recorrem ao MAB (autenticação pelo endereço MAC + profiling para validar tipo real do equipamento), e o CoA (RFC 5176, UDP 3799) permite ao ISE alterar dinamicamente autorização/VLAN sem derrubar fisicamente a porta.',
    correctAnalysis:
      'MAB autentica equipamentos sem supplicant 802.1X e CoA (Change of Authorization) reavalia e aplica novas permissões em sessões já ativas.',
    optionErrors: {
      0: 'Incorreta: equipamentos biomédicos e impressoras autônomas não interagem com páginas web de Captive Portal.',
      1: 'Incorreta: TKIP é criptografia obsoleta de Wi-Fi, não solução NAC cabeada para dispositivos sem 802.1X.',
      3: 'Incorreta: desativar o RADIUS elimina todo o controle centralizado de acesso.'
    }
  },
  {
    id: 'sarah-7-15',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os modos de autenticação Personal (PSK/SAE) e Enterprise (802.1X) em redes Wi-Fi corporativas, assinale a afirmação INCORRETA.',
    options: [
      'No modo Enterprise, cada usuário ou máquina utiliza credenciais individuais ou certificados validados no RADIUS.',
      'O desligamento de um colaborador no modo Enterprise exige apenas desabilitar sua conta no AD/RADIUS sem reconfigurar APs.',
      'O modo Enterprise permite atribuir VLAN dinâmica diferente por perfil de usuário no mesmo SSID.',
      'No modo Personal (PSK), o desligamento de um usuário revoga automaticamente apenas a senha individual dele sem afetar terceiros.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. autenticação (Eixo 7. WI-FI/NAC). No modo Personal (PSK — Pre-Shared Key), todos os dispositivos compartilham a mesma frase-senha; quando alguém sai da empresa ou vaza a chave, é preciso alterar a senha em toda a rede.',
    correctAnalysis:
      'A afirmação incorreta atribui revogação individual ao modo PSK, que usa chave compartilhada única (ao contrário do Enterprise com contas/certificados individuais).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Enterprise autentica individualmente via EAP/RADIUS.',
      1: 'Incorreta (afirmação verdadeira): revogar a conta no AD/ISE bloqueia o usuário imediatamente sem trocar chave dos demais.',
      2: 'Incorreta (afirmação verdadeira): atributos RADIUS permitem múltiplos perfis/VLANs em um único SSID.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 8 (+4) ====================
  {
    id: 'sarah-8-13',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual a função do Buffer de Jitter (Jitter Buffer) nos aparelhos e gateways que recebem fluxos de áudio RTP?',
    options: [
      'Armazenar brevemente pacotes para absorver variações de atraso e entregá-los em cadência regular.',
      'Converter pacotes UDP em sessões TCP confiáveis exigindo retransmissão de quadros perdidos.',
      'Criptografar a sinalização SIP na porta TCP 5061 substituindo o uso de certificados TLS.',
      'Ajustar dinamicamente o ganho do microfone eliminando ecos acústicos na sala de reunião.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. RTP (Eixo 8. Telefonia IP). Pacotes RTP sobre IP/UDP podem chegar com intervalos irregulares (jitter); o Jitter Buffer retém um pequeno conjunto de pacotes por alguns milissegundos para reordená-los por timestamp/sequência e reproduzir voz contínua.',
    correctAnalysis:
      'O Jitter Buffer suaviza variações no tempo de chegada dos pacotes RTP, evitando cortes de áudio em troca de um pequeno acréscimo controlado de latência.',
    optionErrors: {
      1: 'Incorreta: áudio em tempo real não usa retransmissão TCP nem converte UDP em TCP no receptor.',
      2: 'Incorreta: criptografia de sinalização pertence ao SIPS/TLS (porta 5061), não ao buffer de jitter RTP.',
      3: 'Incorreta: cancelamento de eco acústico atua no DSP de áudio analógico/microfone, não na compensação de variação de atraso de rede RTP.'
    }
  },
  {
    id: 'sarah-8-14',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre o protocolo RTP no transporte de mídia VoIP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O RTP transporta áudio e vídeo sobre UDP priorizando entrega em tempo real em vez de retransmissão.\n( ) O timestamp do cabeçalho RTP é usado para solicitar a retransmissão de pacotes perdidos.\n( ) Pacotes RTP perdidos são retransmitidos automaticamente pelo jitter buffer do telefone.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.5. RTP. (1) verdadeira; (2) falsa: o RTP não retransmite pacotes; o timestamp serve para sincronismo e cálculo de jitter; (3) falsa: o jitter buffer apenas reordena e cadencia pacotes; não há retransmissão em RTP.',
    correctAnalysis:
      'Gabarito: V – F – F. Verdadeira(s): (1). (2) é falsa porque o RTP não retransmite pacotes; o timestamp serve para sincronismo e cálculo de jitter. (3) é falsa porque o jitter buffer apenas reordena e cadencia pacotes; não há retransmissão em RTP.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o RTP não retransmite pacotes; o timestamp serve para sincronismo e cálculo de jitter.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o jitter buffer apenas reordena e cadencia pacotes; não há retransmissão em RTP.'
    }
  },
  {
    id: 'sarah-8-15',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual função exerce o SBC (Session Border Controller) na borda entre o PBX IP corporativo e o tronco SIP da operadora pública (PSTN)?',
    options: [
      'Converter todas as chamadas de áudio G.711 exclusivamente para fax analógico T.38 na operadora.',
      'Atuar apenas como servidor TFTP distribuindo arquivos XML de ramais aos telefones internos.',
      'Gravar mensagens de correio de voz em disco descartando toda sinalização SIP entrante.',
      'Proteger a borda VoIP, ocultar topologia interna, normalizar SIP e mediar travessia de NAT.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Voz sobre IP (Eixo 8. Telefonia IP). O SBC atua como firewall especializado de camada de sessão na fronteira entre a rede interna e provedores/filiais: faz topology hiding, controle de admissão, transcodificação, inspeção anti-fraude/DoS SIP e traversal de NAT para RTP.',
    correctAnalysis:
      'O SBC protege o PBX IP na borda, traduz e normaliza dialetos SIP/SDP, oculta IPs internos (topology hiding) e ancora mídia RTP através de NAT.',
    optionErrors: {
      0: 'Incorreta: T.38 trata apenas transmissão de fax sobre IP, enquanto o SBC roteia e protege chamadas de voz e mídia em geral.',
      1: 'Incorreta: entrega de arquivos XML de provisionamento via TFTP/HTTP pertence ao servidor de provisionamento/DHCP Option 150.',
      2: 'Incorreta: o correio de voz (voicemail) fica em servidor de mensageria/PBX, enquanto o SBC media e protege a sinalização SIP.'
    }
  },
  {
    id: 'sarah-8-16',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre administração de sistemas PBX IP corporativos (Cisco Unified Communications Manager / Asterisk), assinale a afirmação INCORRETA.',
    options: [
      'O dial plan (plano de discagem) define regras de encaminhamento, prefixos e permissões de chamadas externas.',
      'Troncos SIP (SIP Trunks) interligam o PBX IP corporativo a operadoras ou a filiais sobre redes IP.',
      'Classes de restrição (CSS/Partitions ou contextos) impedem que ramais públicos realizem ligações internacionais.',
      'Um PBX IP exige obrigatoriamente que cada ramal possua um par físico metálico analógico exclusivo até o datacenter.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Cisco IP Telephony ou equivalentes (Eixo 8. Telefonia IP). Telefones IP e softphones registram-se sobre a rede Ethernet/IP corporativa compartilhada (VLAN de voz), eliminando cabeamento metálico dedicado ponto a ponto por ramal.',
    correctAnalysis:
      'A afirmação incorreta descreve telefonia analógica/TDM tradicional: em PBX IP, os terminais comunicam-se por pacotes IP na infraestrutura LAN/WAN.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o dial plan roteia padrões discados para ramais, filas ou troncos.',
      1: 'Incorreta (afirmação verdadeira): SIP Trunks substituem ou complementam links E1/PSTN sobre IP.',
      2: 'Incorreta (afirmação verdadeira): Calling Search Spaces/Partitions ou contextos controlam quem pode discar para quais destinos.'
    }
  }
]);
