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
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um hospital quer liberar a rede Wi-Fi de visitantes após cadastro com confirmação por SMS, sem instalar nada no aparelho, mantendo registro das sessões para auditoria. Qual combinação atende ao requisito?',
    options: [
      'MAB (MAC Authentication Bypass) com cadastro prévio, pela recepção, do endereço MAC de cada visitante.',
      'Portal cativo (Central WebAuth) com conta de visitante e segundo fator por SMS, e accounting RADIUS registrando as sessões.',
      'Autenticação 802.1X com método EAP-TLS e certificado digital emitido pela PKI interna em cada aparelho.',
      'SSID WPA2-PSK único com a senha afixada na recepção e os logs do DHCP como trilha de auditoria.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.4. Autenticação de Visitantes (Portal Cativo, MFA e Accounting). O **Central WebAuth (portal cativo)** dispensa instalação de software ou certificado no aparelho do visitante, permite autocadastro com **MFA via SMS** e utiliza ***accounting* RADIUS** para auditar início, duração e encerramento das sessões por usuário autenticado.',
    correctAnalysis:
      'Central WebAuth com segundo fator por SMS e accounting RADIUS atende simultaneamente ao acesso sem cliente pré-instalado, verificação de identidade e trilha de auditoria.',
    optionErrors: {
      0: 'Incorreta: o endereço MAC é facilmente falsificado (spoofing), e o cadastro manual pela recepção não escala nem comprova a identidade do visitante.',
      2: 'Incorreta: EAP-TLS exige emitir e instalar certificado digital da PKI interna em cada aparelho visitante.',
      3: 'Incorreta: uma senha PSK compartilhada não identifica individualmente o usuário e o log DHCP não comprova quem efetivamente utilizou a rede.'
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
      'Um SSID corporativo **WPA2-Enterprise** será migrado para **WPA3-Enterprise**. O que muda na operação da rede?',
    options: [
      'O RADIUS deixa de ser usado, e cada usuário passa a autenticar por SAE com senha individual.',
      'Os clientes dispensam a validação do certificado do servidor, pois o PMF passa a autenticar o RADIUS.',
      'Os métodos EAP são substituídos por OWE no SSID corporativo, eliminando as credenciais de domínio.',
      'O 802.1X/EAP e o RADIUS continuam em uso; passam a valer PMF obrigatório e as exigências de cifra do WPA3.'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.6. Operação WPA2-Enterprise × WPA3-Enterprise. Na migração para **WPA3-Enterprise**, toda a infraestrutura **802.1X/EAP e RADIUS** permanece ativa para autenticação dos usuários/máquinas; o que muda operacionalmente é a obrigatoriedade do **PMF (IEEE 802.11w)** e a adoção de suítes criptográficas reforçadas exigidas pelo WPA3.',
    correctAnalysis:
      'WPA3-Enterprise mantém 802.1X/EAP com RADIUS e passa a exigir PMF (802.11w) obrigatório e cifras compatíveis com o padrão WPA3.',
    optionErrors: {
      0: 'Incorreta: SAE pertence ao WPA3-Personal (substituto do PSK), não ao WPA3-Enterprise.',
      1: 'Incorreta: PMF (802.11w) protege quadros de gerenciamento contra forjamento e não substitui a validação do certificado do servidor RADIUS.',
      2: 'Incorreta: OWE (Enhanced Open) aplica-se apenas a redes abertas sem autenticação de usuário.'
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
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A operadora entrega o tronco SIP somente em **G.729**, enquanto os telefones internos suportam apenas **G.711**. O que acontece nas chamadas externas?',
    options: [
      'Os telefones passam a usar G.729 automaticamente, pois o SDP converte o codec durante a sinalização.',
      'O SBC/gateway precisa transcodificar entre G.711 e G.729, consumindo recursos de DSP e reduzindo o MOS da chamada.',
      'A chamada segue em G.711 de ponta a ponta, pois a operadora é obrigada a aceitar o codec oferecido pelo PABX.',
      'A chamada sempre falha, pois não existe mecanismo de conversão entre codecs diferentes em VoIP.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.1.3. Codecs e Transcodificação. Quando os terminais internos suportam apenas **G.711** e o tronco SIP da operadora exige **G.729**, não há codec comum na negociação SDP ponta a ponta; cabe ao **SBC ou gateway de voz** realizar a **transcodificação** em tempo real, o que consome canais de **DSP/CPU** e reduz a qualidade perceptual (**MOS**) devido à recompressão.',
    correctAnalysis:
      'Sem codec comum entre os telefones (G.711) e a operadora (G.729), o SBC/gateway executa transcodificação com custo de DSP e leve perda de MOS.',
    optionErrors: {
      0: 'Incorreta: o SDP apenas negocia codecs suportados por ambos os lados, ele não converte o fluxo de áudio.',
      2: 'Incorreta: a operadora só aceita os codecs que anunciou como suportados no tronco SIP.',
      3: 'Incorreta: a transcodificação existe exatamente para interoperar codecs distintos por meio de DSPs no SBC/gateway.'
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
      'Sobre **retenção, dependência de cadeias e expurgo (*aging*)**, analise as afirmativas:\n\nI. Em uma cadeia incremental, um backup *Full* cujo prazo de retenção já venceu **não é expurgado** enquanto ainda existirem backups incrementais subsequentes dentro da validade dependendo dele.\nII. Na retenção por ciclos, cada backup incremental executado conta como um ciclo, de modo que "2 ciclos" significa manter apenas os dois últimos incrementais.\nIII. Estender a retenção de prontuários eletrônicos e imagens clínicas para muitos anos sem mover conjuntos antigos para camadas *Archive*/fita ou aplicar deduplicação eleva expressivamente o custo de armazenamento primário.\nIV. Em repositórios imutáveis, o prazo de bloqueio WORM deve alinhar-se ao prazo de retenção da política para não impedir o *data aging* planejado ou deixar cópias desprotegidas antes do vencimento.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.3. Retenção e Expurgo. I verdadeira (o *Full* base fica retido até o último incremental dependente expirar); II falsa: um **ciclo** compreende o backup **Full** somado a todos os incrementais ou diferenciais que dependem dele até o próximo *Full* válido; III verdadeira (trade-off custo × prazo em longas retenções hospitalares); IV verdadeira (alinhamento entre imutabilidade WORM e política de retenção).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II erra ao tratar cada incremental isolado como um ciclo completo.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre alinhamento entre prazo WORM e ciclo de expiração.',
      2: 'Incorreta: inclui II (falsa — um ciclo engloba o Full e seus dependentes até o próximo Full) e omite III (verdadeira sobre custo de longa retenção).',
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
      'Ao aplicar Legal Hold sobre um conjunto, o prazo de retenção original é reduzido para que o expurgo ocorra logo após o término do processo judicial.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.3. Retenção e Legal Hold. A alternativa D é **incorreta**: o **Legal Hold** **suspende** o expurgo por tempo indeterminado durante a demanda judicial, sem encurtar a retenção original; após a liberação formal, volta a valer normalmente o prazo da política.',
    correctAnalysis:
      'A afirmação D é falsa porque o Legal Hold suspende temporariamente a expiração sem reduzir o prazo de retenção configurado.',
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
      'Avalie as afirmativas sobre técnicas e validação de **restore** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O restore para **local alternativo** permite recuperar uma base de dados ou pasta específica em servidor de homologação sem interromper ou sobrescrever o ambiente produtivo atual.\n( ) No *Instant Recovery* de uma VM, os discos já são copiados integralmente de volta ao storage de produção antes de permitir que o sistema operacional convidado inicie o *boot*.\n( ) O *restore* granular de uma caixa postal do Exchange exige restaurar antes o banco de dados inteiro sobre o servidor de produção, para só então extrair a caixa desejada.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – V – F.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.4. Técnicas de Restore. (1) verdadeira (*out-of-place* evita sobrescrita e parada em produção); (2) falsa: no ***Instant Recovery***, a VM faz *boot* **imediatamente** lendo os discos montados no repositório e a cópia definitiva ocorre depois em segundo plano; (3) falsa: ferramentas de *restore* granular montam o backup isoladamente e extraem a caixa desejada sem restaurar nem sobrescrever o banco inteiro na produção.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa descreve corretamente o comportamento do restore para local alternativo.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre o uso seguro do restore para local alternativo.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois o Instant Recovery inicia a VM antes da cópia integral dos discos.',
      2: 'Incorreta: a afirmativa (3) é falsa, pois o restore granular extrai a caixa desejada montando o backup sem sobrescrever a produção.'
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
      'Sobre a relação entre **RPO, RTO, WRT, MTD e custos**, analise as afirmativas:\n\nI. A equação de conformidade operacional estabelece que a soma `RTO + WRT` não deve ultrapassar o **MTD** definido para o processo na análise de impacto (**BIA**).\nII. Um backup diário às 23h garante RPO máximo de 1 hora para falhas ocorridas durante o expediente, pois a última cópia é recente.\nIII. O **RPO** orienta diretamente a frequência de backups ou o modelo de replicação adotado, enquanto o **RTO** condiciona a velocidade do repositório e técnicas como *Instant Recovery*.\nIV. O **RTO** é medido a partir do último backup íntegro até o momento em que o sistema volta a operar.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 6.2.5. RPO, RTO, WRT e MTD. I verdadeira (`RTO + WRT <= MTD`); II falsa: com backup diário às 23h, no pior caso (falha imediatamente antes das 23h do dia seguinte) a perda chega a **quase 24 horas** (**RPO = 24 h**); III verdadeira (RPO governa periodicidade/replicação; RTO governa velocidade de recuperação); IV falsa: o **RTO** conta a partir da **interrupção/incidente** até o retorno técnico; o intervalo desde o último backup até a falha corresponde ao **RPO**.',
    correctAnalysis:
      'Gabarito: Somente I e III estão corretas. A afirmativa II ignora o pior caso de 24 h em backups diários, e a IV confunde o início da contagem do RTO (incidente) com o do RPO (último backup).',
    optionErrors: {
      0: 'Incorreta: inclui II (falsa — backup diário implica RPO de até 24 h no pior caso) e omite III.',
      1: 'Incorreta: II e IV são falsas, enquanto I e III são verdadeiras.',
      3: 'Incorreta: inclui IV (falsa — o RTO começa na interrupção/incidente, não no último backup).'
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
      'A replicação síncrona é indicada para sites a centenas de quilômetros, pois a latência da WAN não interfere no tempo de confirmação das escritas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 6.2.6. Replicação Síncrona × Distância. A alternativa D é **incorreta**: na **replicação síncrona**, cada escrita em produção aguarda o **ACK remoto** do site secundário; logo, a latência da distância (centenas de km na WAN) impacta diretamente o tempo de resposta da aplicação.',
    correctAnalysis:
      'A afirmação D é falsa porque na replicação síncrona cada escrita aguarda a confirmação remota, tornando a latência da WAN um fator limitante direto.',
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
      'Sobre **DRP, BCP, testes de recuperação e gestão de crises**, analise as afirmativas:\n\nI. Enquanto o **BCP (*Business Continuity Plan*)** abrange a continuidade integral dos processos da instituição (pessoas, instalações alternativas e contingências manuais), o **DRP (*Disaster Recovery Plan*)** concentra-se na recuperação técnica de infraestrutura, sistemas e dados de TI.\nII. No modelo **DRaaS**, o contratante dispensa testes periódicos de *failover*, pois o provedor garante contratualmente o RTO.\nIII. Durante o ***failback*** após um incidente grave, deve-se descartar o ambiente DR e restaurar no site principal apenas a última cópia anterior ao desastre, ignorando o período em contingência.\nIV. Um plano de recuperação maduro define claramente autoridade para declarar o desastre, papéis de cada equipe, contatos fora de banda e fluxo de comunicação com diretoria e usuários.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I e IV estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 6.2.7. DRP, BCP e Testes. I verdadeira (distinção de escopo entre BCP e DRP); II falsa: garantia contratual de SLA em **DRaaS** não substitui validação — testes periódicos de *failover* continuam necessários para comprovar *runbook*, dependências e tempos reais; III falsa: o ***failback*** exige ressincronizar os dados gerados no site DR durante a contingência para evitar perda de informações; IV verdadeira (governança, papéis e comunicação alternativa em crise).',
    correctAnalysis:
      'Gabarito: Somente I e IV estão corretas. A afirmativa II erra ao dispensar testes periódicos em DRaaS, e a III erra ao descartar deltas durante o failback.',
    optionErrors: {
      0: 'Incorreta: inclui II (falsa — SLA em DRaaS não substitui testes periódicos de failover) e omite IV (verdadeira).',
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
  {
    id: 'sarah-7-16',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um complexo hospitalar com dezenas de pontos de acesso Wi-Fi no mesmo ESS, coletores clínicos móveis e telefones Wi-Fi sofrem microcortes de áudio ao caminhar entre corredores enquanto o cliente varre canais e refaz toda a negociação 802.1X a cada troca de AP. Qual trio conceitual de emendas IEEE 802.11 otimiza o **roaming assistido e rápido** entre APs?',
    options: [
      '802.11k (lista de APs vizinhos), 802.11v (transição gerenciada de BSS) e 802.11r (Fast BSS Transition).',
      '802.11b (modulação DSSS em 2,4 GHz), 802.11a (OFDM em 5 GHz) e 802.11d (domínio regulatório).',
      '802.11w (PMF de gerenciamento), 802.11i (criptografia CCMP) e 802.11e (priorização WMM de voz).',
      '802.11n (canais de 40 MHz), 802.11ac (MU-MIMO downlink) e 802.11ax (OFDMA em 6 GHz).'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.1.1. Roaming IEEE 802.11. O trio **802.11k/v/r** acelera a mobilidade: **802.11k** fornece ao cliente o relatório dos APs vizinhos (reduzindo varredura cega), **802.11v** permite à infraestrutura sugerir a migração para um AP melhor (*BSS Transition Management*) e **802.11r** (*Fast BSS Transition*) antecipa a derivação de chaves reduzindo interrupções no roaming.',
    correctAnalysis:
      'As emendas 802.11k (descoberta de vizinhos), 802.11v (direcionamento de transição) e 802.11r (Fast BSS Transition) reduzem o tempo de handoff entre APs.',
    optionErrors: {
      1: 'Incorreta: 802.11a/b definem camadas físicas legadas e 802.11d informa país/região regulatória.',
      2: 'Incorreta: 802.11w, 802.11i e 802.11e tratam respectivamente de proteção de gerenciamento, segurança CCMP e QoS (WMM), não de roaming rápido.',
      3: 'Incorreta: 802.11n/ac/ax representam gerações Wi-Fi de taxa/espectro (Wi-Fi 4/5/6), não o conjunto específico de fast roaming k/v/r.'
    }
  },
  {
    id: 'sarah-7-17',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos arquiteturais e de acesso ao meio **IEEE 802.11** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) **BSS** (*Basic Service Set*)\n(II) **BSSID**\n(III) **ESS** (*Extended Service Set*)\n(IV) **SSID**\n(V) **CSMA/CA**\n\nColuna da Direita:\n(A) Nome textual legível divulgado nos quadros *beacon* para identificar uma rede sem fio aos usuários.\n(B) Identificador MAC exclusivo do rádio do ponto de acesso associado a uma célula sem fio específica.\n(C) Mecanismo de acesso ao meio baseado em escuta prévia e *backoff* aleatório (com opcional RTS/CTS) para evitar colisões.\n(D) Célula básica composta por um ponto de acesso e as estações atualmente associadas a ele.\n(E) Conjunto de múltiplos APs interligados pela rede de distribuição compartilhando o mesmo SSID para cobertura contínua.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-B, III-D, IV-A, V-C.',
      'I-D, II-A, III-E, IV-B, V-C.',
      'I-D, II-B, III-E, IV-A, V-C.',
      'I-D, II-B, III-C, IV-A, V-E.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.1.1. Fundamentos 802.11. (I-D) **BSS** (célula de um AP e seus clientes); (II-B) **BSSID** (endereço MAC do rádio do AP); (III-E) **ESS** (múltiplos BSSs sob mesmo nome de rede); (IV-A) **SSID** (identificador lógico); (V-C) **CSMA/CA** (*Carrier Sense Multiple Access with Collision Avoidance*).',
    correctAnalysis:
      'Associação exata: I-D, II-B, III-E, IV-A e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte BSS (I-D) com ESS (III-E).',
      1: 'Incorreta: inverte BSSID (II-B) com SSID (IV-A).',
      3: 'Incorreta: inverte ESS (III-E) com CSMA/CA (V-C).'
    }
  },
  {
    id: 'sarah-7-18',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **largura de canal, MIMO/MU-MIMO, OFDMA e gerações Wi-Fi (802.11n/ac/ax/be)**, analise as afirmativas:\n\nI. Dobrar a largura de canal (ex.: de 20 MHz para 40 MHz ou de 40 MHz para 80 MHz) aumenta a taxa nominal de transmissão, mas reduz à metade o número de canais disponíveis sem sobreposição e eleva o piso de ruído térmico em cerca de 3 dB.\nII. O **OFDMA** introduzido no Wi-Fi 6 (802.11ax) impede que múltiplos clientes compartilhem o mesmo canal simultaneamente, restringindo cada quadro a uma única estação por vez.\nIII. Enquanto o **SU-MIMO** usa múltiplos fluxos espaciais para acelerar um único cliente por instante, o **MU-MIMO** transmite fluxos espaciais independentes para vários clientes simultaneamente.\nIV. O padrão **IEEE 802.11be (Wi-Fi 7)** amplia canais até 320 MHz na faixa de 6 GHz e introduz **MLO (*Multi-Link Operation*)**, agregando links de bandas distintas para maior vazão e menor latência.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.1.1. Padrões IEEE 802.11. I verdadeira (trade-off entre largura de canal 20/40/80/160 MHz, reutilização de espectro em ambientes densos e ~3 dB a mais de ruído); II falsa: justamente ao contrário, o **OFDMA** subdivide o canal em *Resource Units* (RUs) permitindo atender **múltiplos clientes em paralelo** no mesmo intervalo (eficiente para pacotes pequenos/IoT); III verdadeira (SU-MIMO × MU-MIMO); IV verdadeira (Wi-Fi 7 / 802.11be: 320 MHz + MLO).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II inverte o conceito de OFDMA, cuja função central é dividir o canal em RUs simultâneas para vários clientes.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa IV, verdadeira sobre canais de 320 MHz e MLO no 802.11be (Wi-Fi 7).',
      1: 'Incorreta: inclui II (falsa sobre OFDMA) e omite III (verdadeira sobre SU-MIMO × MU-MIMO).',
      3: 'Incorreta: inclui II (falsa) e omite I (verdadeira sobre largura de canal e ruído).'
    }
  },
  {
    id: 'sarah-7-19',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **padrões físicos e acesso ao meio em redes IEEE 802.11**, assinale a afirmação INCORRETA.',
    options: [
      'O padrão 802.11n (Wi-Fi 4) introduziu MIMO e agregação de quadros operando tanto na faixa de 2,4 GHz quanto na de 5 GHz.',
      'Em ambientes densos de escritórios ou hospitais em 5 GHz, canais de 20 MHz ou 40 MHz costumam oferecer melhor reuso espacial do que 160 MHz.',
      'O mecanismo opcional RTS/CTS ajuda a mitigar o problema do nó oculto (hidden node) reservando o meio antes de quadros grandes.',
      'Por usar CSMA/CD como a Ethernet cabeada, o rádio Wi-Fi detecta colisões durante a transmissão e interrompe o quadro no mesmo instante.'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.1.1. CSMA/CA em Wi-Fi. A alternativa D é **incorreta**: redes sem fio IEEE 802.11 utilizam **CSMA/CA (*Collision Avoidance*)**, e não CSMA/CD — como o rádio é *half-duplex* e o sinal próprio emitido ofusca recepções fracas na mesma frequência, a estação **não consegue detectar colisões durante a própria transmissão**, dependendo de prevenção (*backoff*) e confirmação explícita (**ACK**).',
    correctAnalysis:
      'A afirmação D é falsa porque Wi-Fi usa CSMA/CA (prevenção de colisões com ACK), não CSMA/CD.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): 802.11n (Wi-Fi 4) trouxe MIMO em banda dupla (2,4 e 5 GHz).',
      1: 'Incorreta (afirmação verdadeira): canais mais estreitos (20/40 MHz) evitam interferência co-canal em alta densidade.',
      2: 'Incorreta (afirmação verdadeira): RTS/CTS reserva o meio via NAV mitigando colisões de nós ocultos.'
    }
  },
  {
    id: 'sarah-7-20',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre fundamentos **IEEE 802.11**:\n\nO protocolo de acesso ao meio sem fio que utiliza escuta prévia e tempo de espera aleatório para prevenir colisões é o _____; a técnica introduzida no Wi-Fi 6 (802.11ax) que divide a subportadora em unidades de recurso (*RUs*) para atender vários dispositivos no mesmo tempo de transmissão denomina-se _____; e o endereço MAC do rádio que identifica cada célula individual de um ponto de acesso é o _____.',
    options: [
      'CSMA/CD / MU-MIMO / ESS',
      'TDMA / OFDMA / BSSID',
      'CSMA/CA / RTS-CTS / SSID',
      'CSMA/CA / OFDMA / BSSID'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.1.1. IEEE 802.11. O controle de acesso ao meio é **CSMA/CA**; a subdivisão multiusuário por *Resource Units* no 802.11ax é **OFDMA**; e o identificador MAC de um rádio/célula específica é o **BSSID**.',
    correctAnalysis:
      'Respectivamente: CSMA/CA, OFDMA e BSSID.',
    optionErrors: {
      0: 'Incorreta: CSMA/CD pertence à Ethernet cabeada half-duplex, e ESS designa o conjunto de APs sob mesmo SSID.',
      1: 'Incorreta: redes 802.11 padrão usam contenção CSMA/CA, não alocação fixa TDMA.',
      2: 'Incorreta: RTS/CTS mitiga nó oculto, mas não subdivide portadora em RUs como o OFDMA; SSID é o nome textual.'
    }
  },
  {
    id: 'sarah-7-21',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma rede corporativa Wi-Fi Enterprise (802.1X), uma estação conclui a troca **EAP-TLS** com sucesso junto ao servidor de autenticação, que gera a *Master Session Key* (MSK) e repassa a chave mestra pareada (**PMK**) ao ponto de acesso autenticador. Antes que qualquer pacote IP de dados possa trafegar cifrado pelo ar, qual etapa imediata ocorre entre estação e AP a partir da PMK?',
    options: [
      'O 4-way handshake, validando posse mútua da PMK e derivando as chaves de sessão PTK e GTK.',
      'O Group Key Handshake isolado, que deriva a PTK a partir da GTK enviada pelo servidor no quadro EAP-Success.',
      'Uma nova troca SAE entre estação e AP, que deriva a PMK a partir da senha do usuário de domínio.',
      'O envio da PTK pelo servidor RADIUS ao AP dentro do Access-Accept, dispensando nova troca com a estação.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.1.2. 802.1X, PMK e 4-Way Handshake. Após a autenticação EAP bem-sucedida, suplicante e servidor derivam a **MSK/PMK** (cujo material segue ao autenticador no *Access-Accept* via atributos MS-MPPE). Em seguida, AP e estação executam o ***4-way handshake*** usando a PMK + *nonces* (*ANonce*/*SNonce*) para comprovar posse mútua da chave sem transmiti-la e derivar a **PTK** (*Pairwise Transient Key* para tráfego unicast) e distribuir a **GTK** (broadcast/multicast).',
    correctAnalysis:
      'A partir da PMK obtida após o EAP, AP e cliente executam o 4-way handshake para derivar a PTK (unicast) e receber a GTK (multicast/broadcast).',
    optionErrors: {
      1: 'Incorreta: o Group Key Handshake apenas renova a GTK (tráfego broadcast/multicast) e pressupõe uma PTK já instalada.',
      2: 'Incorreta: o SAE pertence ao WPA3-Personal (PSK); no modo Enterprise, a PMK provém da troca EAP.',
      3: 'Incorreta: o servidor RADIUS entrega ao AP o material da PMK (chaves MS-MPPE), não a PTK — que é derivada no 4-way handshake com os nonces.'
    }
  },
  {
    id: 'sarah-7-22',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Comparando os métodos **EAP-TLS, PEAP-MSCHAPv2, EAP-TTLS e EAP-FAST** utilizados em redes 802.1X, qual característica distingue corretamente o **EAP-TTLS** e o **EAP-FAST** em relação ao **PEAP** e ao **EAP-TLS**?',
    options: [
      'EAP-TTLS aceita métodos não-EAP (PAP/CHAP/MSCHAPv2) no túnel TLS, enquanto EAP-FAST usa PACs sem exigir certificado.',
      'EAP-TTLS exige certificado X.509 no cliente e dispensa no servidor, enquanto EAP-FAST envia credenciais sem túnel.',
      'PEAP-MSCHAPv2 dispensa túnel TLS externo, ao passo que EAP-TLS autentica estações sem certificado digital no cliente.',
      'EAP-FAST e EAP-TLS exigem obrigatoriamente emissão de certificado individual por estação via PKI antes do acesso.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.1.2. Métodos EAP. **EAP-TLS** requer certificado mútuo (servidor + cliente); **PEAP** usa túnel TLS (certificado só no servidor) encapsulando método EAP interno (tipicamente *EAP-MSCHAPv2*); **EAP-TTLS** também usa túnel TLS com certificado apenas no servidor, mas aceita protocolos legados não-EAP dentro do túnel (PAP, CHAP, MSCHAPv2); já o **EAP-FAST** utiliza **PAC (*Protected Access Credential*)** compartilhada para estabelecer túnel seguro rapidamente sem exigir PKI tradicional completa.',
    correctAnalysis:
      'EAP-TTLS suporta autenticação interna não-EAP (PAP/CHAP/MSCHAPv2) dentro do túnel TLS do servidor, e EAP-FAST recorre a PACs no túnel protegido.',
    optionErrors: {
      1: 'Incorreta: EAP-TTLS exige certificado no servidor (não obrigatoriamente no cliente) e EAP-FAST cria túnel protegido via PAC.',
      2: 'Incorreta: PEAP cria túnel TLS (Protected EAP) e EAP-TLS requer certificado mútuo no cliente e no servidor.',
      3: 'Incorreta: EAP-FAST foi criado justamente para evitar a sobrecarga inicial de distribuir certificados em todos os clientes via PKI.'
    }
  },
  {
    id: 'sarah-7-23',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os protocolos **IEEE 802.1X, EAPOL** e derivação de chaves, analise as afirmativas:\n\nI. O **EAPOL (*EAP over LAN*)** encapsula mensagens EAP diretamente em quadros de camada 2 entre o *supplicant* e o *authenticator*, permitindo autenticar antes mesmo de o cliente possuir endereço IP.\nII. Na arquitetura 802.1X, o **autenticador** (switch ou AP/WLC) atua como intermediário que desencapsula quadros EAPOL do cliente e reencapsula o payload EAP em pacotes para o servidor de autenticação.\nIII. Durante uma conexão **PEAP-MSCHAPv2**, caso o *supplicant* seja configurado para ignorar a validação do certificado do servidor, um AP falso (*Evil Twin*) consegue se passar pelo servidor e capturar hashes/credenciais.\nIV. Na operação 802.1X, o **suplicante** comunica-se diretamente em UDP porta 1812 com o servidor de autenticação, ignorando a mediação do switch ou ponto de acesso.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.1.2. 802.1X e EAP. I verdadeira (EAPOL opera na camada 2 com EtherType `0x888E`, pré-IP); II verdadeira (autenticador traduz EAPOL <-> RADIUS/Diameter); III verdadeira (sem validar a CA/nome do certificado do servidor no túnel TLS do PEAP/TTLS, o cliente aceita túneis de atacantes *Evil Twin*); IV falsa: enquanto a porta controlada está bloqueada, o **suplicante não alcança a rede IP** e conversa somente em camada 2 (EAPOL) com o **autenticador**.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV erra ao afirmar comunicação direta do suplicante com o servidor de autenticação ignorando o autenticador.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre o risco de Evil Twin ao desabilitar validação do certificado do servidor.',
      2: 'Incorreta: inclui IV (falsa — suplicante não fala direto com o servidor antes da liberação) e omite II (verdadeira).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre EAPOL em L2).'
    }
  },
  {
    id: 'sarah-7-24',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **802.1X, EAP e chaves de sessão** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No método **PEAP-MSCHAPv2**, cada estação cliente precisa possuir obrigatoriamente um certificado X.509 individual instalado antes de negociar o túnel TLS externo.\n( ) No **PEAP**, a identidade externa enviada sem proteção pode ser anônima (ex.: `anonymous@dominio`), enquanto a identidade real do usuário trafega somente dentro do túnel TLS.\n( ) Após o servidor aprovar a autenticação EAP, a chave mestra pareada (**PMK**) alimenta o **4-way handshake** para derivar chaves temporárias (**PTK** e **GTK**) que cifram o tráfego.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.1.2. EAP e 4-Way Handshake. (1) falsa: certificado individual obrigatório em ambos os lados (cliente + servidor) caracteriza o **EAP-TLS**; no **PEAP-MSCHAPv2**, apenas o **servidor** apresenta certificado X.509 para abrir o túnel TLS onde o cliente envia usuário/senha; (2) verdadeira (o uso de *outer identity* anônima como `anonymous@dominio` protege a identidade real do usuário dentro do túnel TLS); (3) verdadeira (PMK -> 4-way handshake -> PTK/GTK).',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa confunde o requisito de certificado no cliente (EAP-TLS) com o PEAP-MSCHAPv2; a segunda e a terceira são verdadeiras.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois PEAP-MSCHAPv2 requer certificado apenas no servidor, não no cliente.',
      2: 'Incorreta: a afirmativa (2) é verdadeira, pois a identidade real do usuário no PEAP trafega protegida dentro do túnel TLS.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre o papel da PMK no 4-way handshake.'
    }
  },
  {
    id: 'sarah-7-25',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **métodos EAP, papéis 802.1X e túneis de autenticação**, assinale a afirmação INCORRETA.',
    options: [
      'O EAP-TLS oferece a autenticação mais robusta do conjunto ao exigir validação mútua por certificados digitais no servidor e no cliente.',
      'No modelo 802.1X, o supplicant é o agente no dispositivo final, o authenticator é o switch/AP de acesso e o authentication server valida as identidades.',
      'Assim como o EAP-TLS, o método EAP-FAST exige emissão obrigatória de certificado X.509 em cada cliente antes do primeiro acesso via túnel.',
      'Desativar a validação do certificado do servidor no cliente PEAP ou EAP-TTLS abre brecha para interceptação de credenciais por pontos de acesso falsos.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.1.2. Métodos EAP. A alternativa C é **incorreta**: diferentemente do **EAP-TLS** (que exige certificado no cliente), o **EAP-FAST** (*Flexible Authentication via Secure Tunneling*) foi projetado para estabelecer um túnel protegido usando **PAC (*Protected Access Credential*)**, dispensando certificado digital instalado no cliente.',
    correctAnalysis:
      'A afirmação C é falsa porque o EAP-FAST usa PACs para proteger o túnel sem exigir certificados X.509 individuais nos clientes.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): EAP-TLS realiza autenticação mútua baseada em certificados X.509.',
      1: 'Incorreta (afirmação verdadeira): descreve corretamente os três papéis da arquitetura IEEE 802.1X.',
      3: 'Incorreta (afirmação verdadeira): validar a identidade do certificado do servidor é essencial contra Evil Twin.'
    }
  },
  {
    id: 'sarah-7-26',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **802.1X e EAP**:\n\nO encapsulamento em camada 2 usado entre o suplicante e o autenticador para transportar mensagens EAP antes da atribuição de IP é o _____; o método EAP mais seguro que exige certificado digital tanto no servidor quanto no cliente para autenticação mútua é o _____; e o processo subsequente que usa a **PMK** derivada do EAP para gerar as chaves temporárias **PTK** e **GTK** denomina-se _____.',
    options: [
      'RADIUS / PEAP / 4-way handshake',
      'EAPOL / EAP-FAST / 3-way handshake',
      'EAPOL / PEAP / 4-way handshake',
      'EAPOL / EAP-TLS / 4-way handshake'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.1.2. Protocolos 802.1X e EAP. Entre cliente e autenticador trafega **EAPOL**; certificado mútuo define **EAP-TLS**; e a geração da PTK/GTK a partir da PMK ocorre no ***4-way handshake***.',
    correctAnalysis:
      'Respectivamente: EAPOL, EAP-TLS e 4-way handshake.',
    optionErrors: {
      0: 'Incorreta: RADIUS trafega entre autenticador e servidor (não entre cliente e autenticador pré-IP), e PEAP usa senha no cliente.',
      1: 'Incorreta: EAP-FAST usa PAC em vez de certificado mútuo, e a negociação de chaves Wi-Fi usa 4 mensagens (4-way handshake).',
      2: 'Incorreta: no PEAP o cliente autentica-se por credencial interna (não certificado mútuo como no EAP-TLS).'
    }
  },
  {
    id: 'sarah-7-27',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Mesmo utilizando criptografia **WPA2-AES (CCMP)** e uma frase-senha aleatória de 20 caracteres, um roteador sem fio de escritório teve sua chave revelada em poucos minutos por um atacante próximo após a ativação de um recurso de pareamento simplificado por **PIN numérico de 8 dígitos**. Qual falha estrutural desse recurso viabilizou o ataque?',
    options: [
      'O WPS valida o PIN de 8 dígitos em duas metades independentes com o 8º dígito de checksum, reduzindo o espaço de busca para 11.000 tentativas.',
      'O WPS substitui a frase-senha configurada por uma PSK derivada do próprio PIN de 8 dígitos, reduzindo a entropia da rede.',
      'O WPS desativa o CCMP durante o pareamento e retorna ao TKIP, cuja chave é recuperada pelo ataque Beck-Tews.',
      'O atacante capturou o 4-way handshake e quebrou a PSK por dicionário offline, sem relação com o PIN.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.1.3. Risco do WPS. No **WPS (*Wi-Fi Protected Setup*)** por PIN, a especificação verifica separadamente a primeira metade (**4 dígitos** = 10.000 combinações) e, em seguida, os próximos **3 dígitos** (= 1.000 combinações), já que o **8º dígito é apenas um *checksum*** determinístico — reduzindo a força bruta de 100 milhões para no máximo **11.000 tentativas** e entregando a frase-senha PSK real ao final.',
    correctAnalysis:
      'A validação segmentada do PIN WPS (4 dígitos + 3 dígitos + dígito verificador) reduz a busca para 11.000 tentativas, expondo a senha WPA2.',
    optionErrors: {
      1: 'Incorreta: ao validar o PIN, o WPS entrega ao cliente a PSK real configurada no roteador, sem substituí-la.',
      2: 'Incorreta: o WPS não rebaixa nem altera a cifra AES-CCMP da rede durante o pareamento.',
      3: 'Incorreta: uma frase-senha aleatória de 20 caracteres resiste a ataques de dicionário offline; o vetor de ataque foi o PIN do WPS.'
    }
  },
  {
    id: 'sarah-7-28',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os mecanismos de **segurança em redes sem fio** à esquerda com suas características à direita.\n\nColuna da Esquerda:\n(I) **WEP**\n(II) **WPA (TKIP)**\n(III) **WPA2 (CCMP)**\n(IV) **WPA3-Personal (SAE)**\n(V) **OWE** (*Enhanced Open*)\n\nColuna da Direita:\n(A) Cifra de bloco AES-CCMP com integridade robusta substituindo o protocolo provisório anterior.\n(B) Troca de chaves *Simultaneous Authentication of Equals* resistente a dicionário offline com *forward secrecy*.\n(C) Criptografia oportunista baseada em Diffie-Hellman para cifrar individualmente redes abertas sem senha.\n(D) Protocolo legado com RC4 e vetor de inicialização (IV) curto de 24 bits facilmente quebrável.\n(E) Solução transitória sobre hardware antigo usando chave dinâmica por pacote e verificação de integridade *Michael* (MIC).\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-E, III-A, IV-B, V-C.',
      'I-E, II-D, III-A, IV-B, V-C.',
      'I-D, II-E, III-B, IV-A, V-C.',
      'I-D, II-E, III-A, IV-C, V-B.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.1.3. Segurança Wi-Fi. (I-D) **WEP** (RC4 / IV 24 bits); (II-E) **WPA** (TKIP + MIC *Michael*); (III-A) **WPA2** (AES-CCMP); (IV-B) **WPA3-Personal** (SAE / *forward secrecy*); (V-C) **OWE** (*Enhanced Open* sem senha com criptografia aérea individual).',
    correctAnalysis:
      'Associação exata: I-D, II-E, III-A, IV-B e V-C.',
    optionErrors: {
      1: 'Incorreta: inverte WEP (I-D) com WPA TKIP (II-E).',
      2: 'Incorreta: inverte WPA2 CCMP (III-A) com WPA3-Personal SAE (IV-B).',
      3: 'Incorreta: inverte WPA3-Personal SAE (IV-B) com OWE Enhanced Open (V-C).'
    }
  },
  {
    id: 'sarah-7-29',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No contexto da segurança **WPA2**, qual é o mecanismo explorado pela vulnerabilidade **KRACK (*Key Reinstallation Attack*)** durante a associação de clientes sem fio?',
    options: [
      'Forçar a desautenticação do cliente para capturar o 4-way handshake e quebrar a PSK por dicionário offline.',
      'Induzir a reinstalação da PTK/GTK via retransmissão da mensagem 3 do 4-way handshake, zerando nonces.',
      'Explorar a ausência de PMF para injetar quadros de desassociação forjados e negar serviço aos clientes.',
      'Aguardar o esgotamento do contador de pacotes (PN) de 48 bits do CCMP para forçar repetição de nonce.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.1.3. KRACK. No ataque **KRACK (*Key Reinstallation Attack*)**, o atacante bloqueia e força o reenvio da **mensagem 3 do *4-way handshake*** no cliente, fazendo a máquina de estados do *supplicant* **reinstalar a chave já ativa (PTK/GTK)** e **resetar os contadores de *nonce*/PN** — o que permite decriptar, reproduzir ou forjar pacotes.',
    correctAnalysis:
      'KRACK explora o 4-way handshake induzindo o cliente a reinstalar a chave de sessão em uso e reiniciar o nonce/contador de replay.',
    optionErrors: {
      0: 'Incorreta: esse é o ataque clássico de dicionário offline ao handshake PSK do WPA2, não o KRACK.',
      2: 'Incorreta: injetar quadros de desassociação sem PMF causa negação de serviço (DoS), não reinstalação de chave.',
      3: 'Incorreta: o contador de pacotes (PN) de 48 bits do CCMP não se esgota na prática; o KRACK reinicia o nonce induzindo a reinstalação da chave.'
    }
  },
  {
    id: 'sarah-7-30',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre mecanismos avançados de segurança **WPA2 e WPA3** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O padrão **OWE (*Enhanced Open*)** do WPA3 exige obrigatoriamente uma senha pré-compartilhada (PSK) em redes de visitantes para cifrar o tráfego.\n( ) O modo **WPA3-Enterprise 192-bit** emprega suíte criptográfica reforçada (como AES-GCM-256 e HMAC-SHA-384) alinhada a ambientes corporativos e governamentais de alta sensibilidade.\n( ) No **WPA2** o **PMF (802.11w)** é obrigatório, enquanto no **WPA3** ele passou a ser opcional para preservar a compatibilidade com clientes antigos.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.1.3. WPA2 e WPA3. (1) falsa: o **OWE (*Enhanced Open*)** provê criptografia individual por troca oportunista Diffie-Hellman especificamente em **redes abertas sem senha**; (2) verdadeira (perfil de 192 bits / CNSA no WPA3-Enterprise); (3) falsa: está invertido — o **PMF (IEEE 802.11w)** é **opcional no WPA2** e tornou-se **obrigatório no WPA3**.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa descreve corretamente a suíte criptográfica do modo WPA3-Enterprise 192-bit.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois o OWE cifra redes abertas sem senha pré-compartilhada.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre a suíte criptográfica do WPA3-Enterprise 192-bit.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois está invertida — PMF (802.11w) é opcional no WPA2 e obrigatório no WPA3.'
    }
  },
  {
    id: 'sarah-7-31',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os protocolos **WEP, WPA, WPA2 e WPA3** e suas vulnerabilidades conhecidas, assinale a afirmação INCORRETA.',
    options: [
      'O WEP utiliza cifra RC4 combinada a um vetor de inicialização (IV) de apenas 24 bits, permitindo recuperação da chave após captura de tráfego.',
      'O WPA surgiu como medida interina baseada em TKIP e verificação de integridade Michael (MIC) para rodar em hardware legado originalmente feito para WEP.',
      'O WPA3 torna obrigatório o uso de Protected Management Frames (PMF — IEEE 802.11w) para mitigar quadros forjados de desautenticação e desassociação.',
      'O WPA3-Personal mantém o mesmo handshake PSK do WPA2 sem forward secrecy, permitindo que a captura de um único handshake habilite ataques de dicionário offline.'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.1.3. WPA3-Personal (SAE). A alternativa D é **incorreta**: o **WPA3-Personal** substitui o antigo handshake PSK pelo protocolo **SAE (*Simultaneous Authentication of Equals* / Dragonfly)**, garantindo ***forward secrecy*** e exigindo interação ativa a cada tentativa, o que bloqueia ataques de dicionário *offline* após captura passiva.',
    correctAnalysis:
      'A afirmação D é falsa porque atribui ao WPA3-Personal as fragilidades do antigo PSK do WPA2, ignorando o SAE.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): IV curto de 24 bits em RC4 é a fraqueza clássica do WEP.',
      1: 'Incorreta (afirmação verdadeira): TKIP foi desenhado como atualização temporária de firmware sobre hardware WEP.',
      2: 'Incorreta (afirmação verdadeira): PMF (802.11w) obrigatório protege quadros de gerenciamento no WPA3.'
    }
  },
  {
    id: 'sarah-7-32',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre a evolução da **segurança Wi-Fi**:\n\nO protocolo transitório WPA adotou o mecanismo _____ para mitigar as falhas imediatas do WEP em hardware legado; o padrão WPA2 consolidou a criptografia baseada em bloco _____; e o WPA3-Personal substituiu a troca de chaves vulnerável a dicionário offline pelo protocolo _____, provendo *forward secrecy*.',
    options: [
      'AES-CCMP / TKIP / OWE',
      'IV de 24 bits / OWE / TKIP',
      'TKIP / AES-CCMP / OWE',
      'TKIP / AES-CCMP / SAE'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.1.3. WEP, WPA, WPA2 e WPA3. O WPA utilizou **TKIP**; o WPA2 padronizou **AES-CCMP**; e o WPA3-Personal utiliza **SAE** (*Simultaneous Authentication of Equals*).',
    correctAnalysis:
      'Respectivamente: TKIP, AES-CCMP e SAE.',
    optionErrors: {
      0: 'Incorreta: inverte TKIP (WPA) com AES-CCMP (WPA2), e OWE refere-se a redes abertas sem senha.',
      1: 'Incorreta: IV de 24 bits pertence ao WEP, e OWE/TKIP estão fora de ordem.',
      2: 'Incorreta: a troca de chaves com senha no WPA3-Personal é SAE (OWE aplica-se a redes abertas sem senha).'
    }
  },
  {
    id: 'sarah-7-33',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as personas e recursos da arquitetura **Cisco ISE** à esquerda com suas funções à direita.\n\nColuna da Esquerda:\n(I) **PAN** (*Policy Administration Node*)\n(II) **MnT** (*Monitoring and Troubleshooting Node*)\n(III) **PSN** (*Policy Service Node*)\n(IV) **pxGrid** (*Platform Exchange Grid*)\n(V) **Posture**\n\nColuna da Direita:\n(A) Nó que avalia políticas e responde em tempo real às requisições RADIUS, TACACS+, MAB e portais WebAuth.\n(B) Barramento bidirecional que compartilha identidade, contexto de sessão e alertas com firewalls, SIEM e EDR.\n(C) Verificação do estado de conformidade do *endpoint* (antivírus ativo, patches, criptografia de disco) antes de liberar acesso total.\n(D) Plano de administração central onde o administrador cria políticas, perfis e gerencia o cluster de nós.\n(E) Repositório central de logs, relatórios de auditoria, sessões ativas e ferramentas de depuração.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-E, III-A, IV-B, V-C.',
      'I-A, II-E, III-D, IV-B, V-C.',
      'I-D, II-A, III-E, IV-B, V-C.',
      'I-D, II-E, III-A, IV-C, V-B.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.1. Personas do Cisco ISE. (I-D) **PAN** (administração e configuração central); (II-E) **MnT** (logs e *troubleshooting*); (III-A) **PSN** (execução em tempo real de RADIUS/TACACS+/MAB); (IV-B) **pxGrid** (troca de contexto de segurança com ecossistema); (V-C) **Posture** (avaliação de conformidade do host).',
    correctAnalysis:
      'Associação exata: I-D, II-E, III-A, IV-B e V-C.',
    optionErrors: {
      1: 'Incorreta: inverte PAN (I-D) com PSN (III-A).',
      2: 'Incorreta: inverte MnT (II-E) com PSN (III-A).',
      3: 'Incorreta: inverte pxGrid (IV-B) com Posture (V-C).'
    }
  },
  {
    id: 'sarah-7-34',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquiteturas NAC e gestão sem fio (**Cisco ISE, Omada, Aruba ClearPass, FortiNAC e Microsoft NPS**), analise as afirmativas:\n\nI. No fluxo de política do Cisco ISE (e equivalentes como ClearPass), a **Política de Autenticação** valida a identidade e o método usado (802.1X ou MAB contra AD/certificados), enquanto a **Política de Autorização** define o nível de acesso (VLAN, dACL, perfil) conforme grupo, *profiling* e *posture*.\nII. Plataformas **Omada** permitem gerenciar centralizadamente pontos de acesso, switches e portais cativos de visitantes por meio de controladora em software, hardware dedicado ou nuvem.\nIII. O **Microsoft NPS (*Network Policy Server*)** atua como servidor RADIUS nativo do Windows Server capaz de autenticar clientes Wi-Fi e switches 802.1X integrados diretamente ao Active Directory.\nIV. A verificação de **posture** dispensa agente ou consulta ao *endpoint*, pois é feita exclusivamente a partir do OUI do endereço MAC e das opções DHCP enviadas pelo dispositivo.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.1. Cisco ISE, Omada e Equivalentes. I verdadeira (separação entre *Authentication Policy* e *Authorization Policy*); II verdadeira (modos de controladora do TP-Link Omada); III verdadeira (Microsoft NPS como servidor RADIUS integrado ao AD); IV falsa: a leitura de OUI do MAC e opções DHCP descreve o ***profiling*** (classificação passiva); a verificação de ***posture*** exige **agente** (persistente ou temporário/*dissolvable*) ou integração com **MDM** para inspecionar conformidade do *endpoint*.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV descreve o profiling (OUI/DHCP), e não a verificação de posture.',
    optionErrors: {
      1: 'Incorreta: omite a afirmativa III, verdadeira sobre o uso do Microsoft NPS como servidor RADIUS integrado ao AD.',
      2: 'Incorreta: inclui IV (falsa — OUI e DHCP são usados pelo profiling, enquanto posture exige agente ou MDM) e omite II (verdadeira sobre controladora Omada).',
      3: 'Incorreta: inclui IV (falsa — confunde posture com profiling) e omite I (verdadeira sobre Autenticação × Autorização).'
    }
  },
  {
    id: 'sarah-7-35',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre componentes e recursos em soluções **NAC e gestão Wi-Fi (Cisco ISE e Omada)** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No Cisco ISE, a persona **MnT (*Monitoring and Troubleshooting*)** é responsável por receber e responder às requisições RADIUS e TACACS+ vindas dos switches e controladoras em tempo real.\n( ) Em ambientes com portal de visitantes e **BYOD**, soluções NAC oferecem autoatendimento e fluxo de provisionamento para registrar dispositivos pessoais e emitir credenciais ou certificados temporários.\n( ) Na arquitetura **Cisco ISE**, a Política de **Autenticação** define as permissões finais de VLAN e ACL, enquanto a Política de **Autorização** verifica exclusivamente se o usuário existe no Active Directory.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.1. Cisco ISE. (1) falsa: quem processa requisições RADIUS, TACACS+ e portais WebAuth em tempo real é o **PSN (*Policy Service Node*)** — o MnT centraliza logs e relatórios; (2) verdadeira (fluxos de *Guest Portal* e *onboarding* BYOD); (3) falsa: **inverte os papéis** — Autenticação verifica identidade/credencial no AD/PKI, e Autorização atribui VLAN, dACL e perfis.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa descreve corretamente o papel dos portais de visitantes e BYOD em soluções NAC.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois o processamento RADIUS/TACACS+ em tempo real cabe ao PSN, não ao MnT.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre portais de visitantes e fluxo de onboarding BYOD.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois inverte os conceitos de Autenticação e Autorização.'
    }
  },
  {
    id: 'sarah-7-36',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre plataformas de controle de acesso à rede (**Cisco ISE, Omada, Aruba ClearPass e FortiNAC**), assinale a afirmação INCORRETA.',
    options: [
      'Soluções como Aruba ClearPass e FortiNAC oferecem capacidades equivalentes ao Cisco ISE em visibilidade, profiling, controle 802.1X/MAB e resposta a incidentes.',
      'O recurso de profiling do Cisco ISE exige obrigatoriamente a instalação de agente completo de posture em impressoras e sensores médicos para ler DHCP ou MAC OUI.',
      'O barramento pxGrid permite que o Cisco ISE compartilhe informações de usuário e dispositivo com firewalls NGFW e SIEM para políticas baseadas em contexto.',
      'Uma controladora Omada centraliza o provisionamento de SSIDs, canais, potência de rádio e portal cativo de visitantes para dezenas de APs.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.1. Profiling em NAC. A alternativa B é **incorreta**: o ***profiling*** foi projetado exatamente para identificar equipamentos **sem agente** (impressoras, câmeras, aparelhos biomédicos, telefones IP) coletando atributos de rede via sondas passivas e ativas (DHCP Option, MAC OUI, LLDP/CDP, HTTP User-Agent, SNMP). Quem utiliza agente (ou *dissolvable agent*) em estações de usuários é o ***posture***.',
    correctAnalysis:
      'A afirmação B é falsa porque o profiling identifica dispositivos headless usando sondas de rede sem exigir instalação de agente.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): ClearPass e FortiNAC são equivalentes corporativos ao ISE.',
      2: 'Incorreta (afirmação verdadeira): pxGrid integra contexto de sessão do ISE a firewalls, SIEM e EDR.',
      3: 'Incorreta (afirmação verdadeira): controladoras Omada gerenciam APs, SSIDs, RF e portal cativo centralizadamente.'
    }
  },
  {
    id: 'sarah-7-37',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre a arquitetura **Cisco ISE**:\n\nA persona em que os administradores definem políticas globais e gerenciam os nós do cluster é o _____; a persona escalável responsável por avaliar sessões e responder aos pacotes RADIUS/TACACS+ dos switches e APs é o _____; e o recurso que inspeciona se a estação corporativa está com antivírus atualizado e disco criptografado antes de conceder acesso pleno chama-se _____.',
    options: [
      'PSN / PAN / profiling',
      'MnT / PSN / pxGrid',
      'PAN / MnT / posture',
      'PAN / PSN / posture'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.1. Cisco ISE. Administração central cabe ao **PAN** (*Policy Administration Node*); atendimento RADIUS/TACACS+ cabe ao **PSN** (*Policy Service Node*); e inspeção de conformidade do sistema operacional/antivírus denomina-se ***posture***.',
    correctAnalysis:
      'Respectivamente: PAN, PSN e posture.',
    optionErrors: {
      0: 'Incorreta: inverte PAN com PSN e troca posture (conformidade do host) por profiling (identificação de tipo de hardware).',
      1: 'Incorreta: MnT cuida de monitoramento/logs (não administração central), e pxGrid trata de integração externa.',
      2: 'Incorreta: a segunda lacuna refere-se ao PSN (processamento RADIUS/TACACS+), não ao nó de logs MnT.'
    }
  },
  {
    id: 'sarah-7-38',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma mesa de atendimento ambulatorial, um **telefone IP** conecta-se à porta do switch gerenciável e um **computador corporativo com suplicante 802.1X** liga-se atrás do telefone na mesma porta. O telefone não suporta 802.1X, mas precisa ingressar na VLAN de voz por MAB enquanto o computador deve ser obrigado a autenticar via 802.1X na VLAN de dados. Qual configuração operacional de porta atende ao cenário?',
    options: [
      'Host mode Multi-Domain com ordem de autenticação dot1x seguido de MAB (authentication order dot1x mab).',
      'Host mode Multi-Host com prioridade exclusiva de MAB antes do dot1x (authentication order mab dot1x).',
      'Host mode Single-Host desabilitando MAB e reautenticação para liberar o telefone junto ao computador.',
      'Configurar a porta em modo trunk sem 802.1X nem MAB, confiando no endereço MAC anunciado por DHCP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.2. Operação 802.1X em Switches. O modo **Multi-Domain** permite autenticar independentemente **um dispositivo no domínio Voice e um no domínio Data** na mesma porta física. Combinado à ordem **`dot1x → mab`**, estações com suplicante autenticam prioritariamente por 802.1X, enquanto o telefone IP (sem suplicante) faz fallback para MAB após o *timeout* EAPOL.',
    correctAnalysis:
      'Multi-Domain segrega autenticação de voz e dados na mesma porta, e a ordem dot1x -> mab prioriza 802.1X no PC enquanto permite fallback MAB ao telefone.',
    optionErrors: {
      1: 'Incorreta: Multi-Host liberaria o segundo dispositivo sem autenticá-lo, e rodar MAB antes de dot1x impediria 802.1X prioritário.',
      2: 'Incorreta: Single-Host aceita apenas um único endereço MAC na porta, bloqueando o segundo equipamento.',
      3: 'Incorreta: remover 802.1X/MAB elimina o controle de acesso NAC na porta.'
    }
  },
  {
    id: 'sarah-7-39',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os modos e VLANs de operação **802.1X em switches** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) **Single-Host**\n(II) **Multi-Domain**\n(III) **Multi-Auth**\n(IV) **Guest VLAN**\n(V) **Auth-Fail VLAN**\n\nColuna da Direita:\n(A) Autentica individualmente cada endereço MAC atrás da porta, útil quando há múltiplos hosts ou VMs.\n(B) Recebe estações que não possuem suplicante ativo e não respondem aos quadros EAPOL da porta.\n(C) Permite autenticar separadamente até um equipamento no domínio de Voz e um no domínio de Dados.\n(D) Restringe a porta a exatamente um único endereço MAC autenticado por vez.\n(E) Isola dispositivos cujo suplicante 802.1X respondeu, mas enviou credenciais inválidas rejeitadas pelo servidor.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-D, III-A, IV-B, V-E.',
      'I-D, II-C, III-A, IV-B, V-E.',
      'I-D, II-C, III-B, IV-A, V-E.',
      'I-D, II-C, III-A, IV-E, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.2. Modos e VLANs 802.1X. (I-D) **Single-Host** (1 MAC); (II-C) **Multi-Domain** (1 Voice + 1 Data); (III-A) **Multi-Auth** (cada MAC autenticado); (IV-B) **Guest VLAN** (sem resposta EAPOL); (V-E) **Auth-Fail VLAN** (suplicante respondeu e falhou na autenticação).',
    correctAnalysis:
      'Associação exata: I-D, II-C, III-A, IV-B e V-E.',
    optionErrors: {
      0: 'Incorreta: inverte Single-Host (I-D) com Multi-Domain (II-C).',
      2: 'Incorreta: inverte Multi-Auth (III-A) com Guest VLAN (IV-B).',
      3: 'Incorreta: inverte Guest VLAN (IV-B) com Auth-Fail VLAN (V-E).'
    }
  },
  {
    id: 'sarah-7-40',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **ordem de métodos, temporizadores e contingência na operação 802.1X em switches**, analise as afirmativas:\n\nI. Configurar a ordem de autenticação como **`dot1x → mab`** garante que dispositivos corporativos tentem primeiro 802.1X forte, acionando o MAB apenas após expirar o *timeout* EAPOL.\nII. O temporizador de **`quiet-period`** define quantos segundos o switch aguarda após uma tentativa de autenticação malsucedida antes de aceitar nova tentativa daquele cliente, evitando ciclos contínuos de falha.\nIII. A **reautenticação periódica** instrui o switch a revalidar a sessão do cliente após intervalo configurado (ou por *session-timeout*), permitindo detectar contas desabilitadas.\nIV. Quando todos os servidores RADIUS configurados ficam inacessíveis na rede, a porta 802.1X coloca o usuário automaticamente na **Auth-Fail VLAN** destinada a senhas erradas.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.2. Operação e Timers 802.1X. I verdadeira (ordem `dot1x → mab`); II verdadeira (*quiet-period* evita *flood* imediato após rejeição); III verdadeira (*reauthentication* revalida credenciais periodicamente); IV falsa: quando todos os servidores RADIUS ficam **inalcançáveis (AAA dead)**, o recurso de contingência utilizado para não derrubar o acesso é a **Critical VLAN / Critical Auth**, e não a *Auth-Fail VLAN* (reservada a credencial rejeitada com RADIUS online).',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV confunde Critical VLAN (falha de conectividade com RADIUS) com Auth-Fail VLAN (credencial inválida).',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre a reautenticação periódica de sessões 802.1X.',
      2: 'Incorreta: inclui IV (falsa — queda do RADIUS aciona Critical VLAN, não Auth-Fail VLAN) e omite II (verdadeira).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre ordem dot1x -> mab).'
    }
  },
  {
    id: 'sarah-7-41',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **operação 802.1X em portas de switch** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Conceitualmente, a **Guest VLAN** atende equipamentos que não respondem aos quadros EAPOL da porta, enquanto a **Auth-Fail VLAN** recebe dispositivos com suplicante ativo cujas credenciais foram rejeitadas.\n( ) Configurar a ordem **`mab → dot1x`** faz com que estações corporativas com suplicante 802.1X completem primeiro o handshake EAP-TLS antes de consultar o endereço MAC.\n( ) Ajustar o temporizador **`tx-period`** no switch controla o intervalo entre reenvios de pacotes *EAP-Request/Identity* para o suplicante, impactando o tempo até o fallback para MAB.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.2. Operação 802.1X. (1) verdadeira (distinção entre *Guest VLAN* [sem resposta EAPOL] e *Auth-Fail VLAN* [credencial rejeitada]); (2) falsa: com **`mab → dot1x`**, o switch avalia o **MAC via MAB primeiro**, antes mesmo de dar preferência ao 802.1X; (3) verdadeira (o ajuste de *tx-period* e *max-reauth-req* determina quanto tempo leva até o timeout de EAPOL disparar o fallback MAB).',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa inverte o efeito da ordem mab -> dot1x.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre a diferença conceitual entre Guest VLAN e Auth-Fail VLAN.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois na ordem mab -> dot1x o MAB é tentado antes do 802.1X.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre a influência do tx-period no tempo de fallback para MAB.'
    }
  },
  {
    id: 'sarah-7-42',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Antes de ativar o bloqueio rígido (*Closed Mode*) do **802.1X** nas portas de acesso de um hospital em produção, qual abordagem operacional de implantação permite registrar autenticações, validar políticas no servidor NAC e descobrir dispositivos sem suplicante **sem interromper o tráfego** de usuários em caso de falha?',
    options: [
      'Desativar o controle EAPOL e o MAB em todas as portas de acesso, deixando apenas o Spanning Tree PortFast ativo.',
      'Configurar host mode Single-Host com quiet-period de 300 segundos e bloqueio rígido imediato sem fallback MAB.',
      'Ativar o modo de monitoramento (Monitor Mode / Low-Impact gradual), permitindo tráfego enquanto loga resultados 802.1X/MAB.',
      'Ativar o Closed Mode com MAB como fallback, pois o MAB libera automaticamente qualquer MAC desconhecido até o servidor NAC aprender o dispositivo.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.2. Implantação Gradual 802.1X. O ***Monitor Mode*** (autenticação aberta / fase de visibilidade) executa normalmente `dot1x` e `mab` contra o servidor RADIUS e registra acertos e falhas, mas **permite a passagem do tráfego** mesmo se houver falha — etapa essencial antes de migrar para *Low-Impact* e finalmente *Closed Mode*.',
    correctAnalysis:
      'O Monitor Mode permite validar logs de 802.1X e MAB na rede real antes de aplicar bloqueios restritivos (Closed Mode).',
    optionErrors: {
      0: 'Incorreta: desativar EAPOL impede qualquer validação ou visibilidade 802.1X no servidor NAC.',
      1: 'Incorreta: bloqueio imediato em Single-Host sem MAB derrubaria telefones IP, impressoras e dispositivos sem supplicant.',
      3: 'Incorreta: o MAB só libera MACs autorizados pela política do servidor NAC; no Closed Mode, falhas bloqueiam o tráfego e interrompem usuários.'
    }
  },
  {
    id: 'sarah-7-43',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **operação 802.1X em switches**:\n\nQuando um telefone IP e uma estação compartilham a mesma porta física exigindo autenticação separada para voz e dados, configura-se o *host mode* _____; caso uma estação sem cliente 802.1X não responda aos quadros EAPOL na porta e haja fallback local configurado, ela pode ser alocada na _____ VLAN; já se o suplicante responder com usuário ou senha inválidos, o switch pode direcioná-la à _____ VLAN.',
    options: [
      'multi-host / Critical / Guest',
      'single-host / Auth-Fail / Guest',
      'multi-auth / Guest / Critical',
      'multi-domain / Guest / Auth-Fail'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.2. 802.1X em Switches. Voz + dados separados usam ***multi-domain***; ausência de resposta EAPOL aciona ***Guest VLAN***; e credenciais rejeitadas com suplicante ativo acionam ***Auth-Fail VLAN***.',
    correctAnalysis:
      'Respectivamente: multi-domain, Guest e Auth-Fail.',
    optionErrors: {
      0: 'Incorreta: multi-host libera todos após o primeiro MAC sem segregar voz e dados, e Critical trata queda do servidor RADIUS.',
      1: 'Incorreta: single-host aceita apenas um MAC na porta, e Guest/Auth-Fail estão invertidos.',
      2: 'Incorreta: Critical VLAN atua quando o servidor RADIUS fica inacessível, não quando a credencial é rejeitada.'
    }
  },
  {
    id: 'sarah-7-44',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma rede com unidades externas precisa que switches e controladoras Wi-Fi enviem requisições AAA para um servidor RADIUS central na matriz atravessando enlaces WAN, protegendo integralmente todos os atributos e cabeçalhos RADIUS sem exigir VPN separada em cada equipamento de acesso. Qual tecnologia atende a esse requisito?',
    options: [
      'Implementar RadSec (RADIUS sobre TLS, tipicamente TCP porta 2083), cifrando todo o tráfego de autenticação, autorização e accounting entre NAS e servidor.',
      'Alterar o transporte do RADIUS padrão para as portas legadas UDP 1645 e 1646, que ativam criptografia simétrica em todo o payload.',
      'Configurar um shared secret de 64 caracteres no RADIUS UDP 1812, garantindo criptografia integral de todos os atributos e cabeçalhos.',
      'Ativar o RADIUS CoA na porta UDP 3799 para encapsular as mensagens Access-Request dentro de túneis DTLS automáticos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.3. RADIUS e RadSec. No RADIUS tradicional sobre UDP (1812/1813), o *shared secret* ofusca apenas o atributo `User-Password` (e autentica a integridade da mensagem), deixando os demais atributos expostos. O **RadSec (RADIUS over TLS, RFC 6614, porta padrão TCP 2083)** encapsula todo o tráfego RADIUS em túnel TLS com certificados, protegendo integralmente os atributos e tornando o protocolo confiável sobre WAN/nuvem.',
    correctAnalysis:
      'RadSec transporta pacotes RADIUS dentro de um túnel TLS (TCP 2083), protegendo confidencialidade e integridade de todo o payload em redes externas.',
    optionErrors: {
      1: 'Incorreta: UDP 1645 e 1646 são apenas as portas históricas legadas do RADIUS antes da padronização IANA (1812/1813), sem criptografia total.',
      2: 'Incorreta: aumentar o tamanho do shared secret no RADIUS UDP tradicional continua ofuscando apenas o atributo User-Password.',
      3: 'Incorreta: UDP 3799 é usada pelo servidor AAA para enviar CoA/Disconnect-Request ao NAS, não para encapsular Access-Request.'
    }
  },
  {
    id: 'sarah-7-45',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os pacotes **RADIUS** à esquerda com suas funções à direita.\n\nColuna da Esquerda:\n(I) **Access-Request**\n(II) **Access-Challenge**\n(III) **Access-Accept**\n(IV) **Accounting-Request (Interim-Update)**\n(V) **Disconnect-Request (RFC 5176)**\n\nColuna da Direita:\n(A) Pacote enviado pelo servidor AAA solicitando etapa adicional ao cliente (como troca EAP ou token) antes da decisão final.\n(B) Pacote enviado do servidor AAA ao NAS na porta UDP 3799 para encerrar imediatamente uma sessão ativa.\n(C) Pacote inicial do NAS para o servidor na porta UDP 1812 contendo credenciais ou identidade e atributos do cliente.\n(D) Atualização periódica enviada pelo NAS na porta UDP 1813 informando que a sessão segue ativa com contadores de tráfego.\n(E) Resposta positiva do servidor AAA autorizando o acesso e retornando atributos de perfil ou sessão ao NAS.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-A, III-E, IV-B, V-D.',
      'I-C, II-A, III-E, IV-D, V-B.',
      'I-A, II-C, III-E, IV-D, V-B.',
      'I-C, II-E, III-A, IV-D, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.3. Pacotes RADIUS. (I-C) **Access-Request** (pedido de autenticação ao servidor na UDP 1812); (II-A) **Access-Challenge** (desafio intermediário EAP/MFA); (III-E) **Access-Accept** (aprovação com atributos); (IV-D) **Accounting-Request Interim-Update** (telemetria periódica na UDP 1813); (V-B) **Disconnect-Request** (desconexão ativa via RFC 5176 na UDP 3799).',
    correctAnalysis:
      'Associação exata: I-C, II-A, III-E, IV-D e V-B.',
    optionErrors: {
      0: 'Incorreta: inverte Interim-Update (IV-D) com Disconnect-Request (V-B).',
      2: 'Incorreta: inverte Access-Request (I-C) com Access-Challenge (II-A).',
      3: 'Incorreta: inverte Access-Challenge (II-A) com Access-Accept (III-E).'
    }
  },
  {
    id: 'sarah-7-46',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre portas, atributos e segurança do protocolo **RADIUS**, analise as afirmativas:\n\nI. As portas oficiais IANA do RADIUS são **UDP 1812** (autenticação/autorização) e **UDP 1813** (*accounting*), embora equipamentos legados ainda suportem **UDP 1645 e 1646**.\nII. Nos pacotes RADIUS, **`NAS-IP-Address`** identifica o equipamento de acesso solicitante, **`Calling-Station-Id`** costuma informar o MAC do cliente e **`Filter-Id`** referencia o nome de uma ACL ou política.\nIII. O *shared secret* no RADIUS tradicional ofusca apenas o atributo **`User-Password`** e valida integridade, deixando atributos como `Called-Station-Id` legíveis na rede.\nIV. Na gerência CLI de switches, o **RADIUS** separa nativamente autenticação, autorização de cada comando digitado e *accounting* em fluxos distintos sobre **TCP 49**.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.3. RADIUS. I verdadeira (portas 1812/1813 e legadas 1645/1646); II verdadeira (atributos gerais do RADIUS); III verdadeira (o *shared secret* no RADIUS UDP tradicional oculta apenas `User-Password`); IV falsa: separar AAA com autorização granular por comando CLI sobre **TCP porta 49** é característica do **TACACS+**, não do RADIUS.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV atribui ao RADIUS o comportamento do TACACS+ (TCP 49).',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre a proteção limitada ao atributo User-Password no RADIUS tradicional.',
      2: 'Incorreta: inclui IV (falsa — descreve o TACACS+) e omite II (verdadeira sobre atributos RADIUS).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre portas UDP 1812/1813 e 1645/1646).'
    }
  },
  {
    id: 'sarah-7-47',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Para garantir **alta disponibilidade** na autenticação 802.1X de uma rede corporativa com dois servidores RADIUS (**PSN01 e PSN02**), qual prática operacional nos switches/controladoras evita bloqueios prolongados caso o nó primário saia do ar?',
    options: [
      'Configurar shared secret apenas no PSN01 e deixar o PSN02 sem chave compartilhada para aceitar fallback aberto.',
      'Atribuir o mesmo endereço IP nos dois servidores em modo ativo-ativo na mesma VLAN sem balanceador nem deadtime.',
      'Cadastrar o NAS com shared secret válido nos dois servidores, ajustar deadtime/sondas no NAS e manter políticas sincronizadas.',
      'Alternar automaticamente as requisições 802.1X da porta UDP 1812 para TACACS+ TCP 49 quando o PSN01 falhar.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.3. Redundância RADIUS. Em arquiteturas AAA redundantes, o switch/WLC (NAS) aponta para o grupo com múltiplos servidores RADIUS, cada qual com o **respectivo *shared secret*** configurado para aquele NAS, **políticas sincronizadas** e **temporizadores de *timeout/deadtime*** (ou sondas de saúde) para evitar insistência repetida no nó fora do ar.',
    correctAnalysis:
      'Redundância RADIUS exige cadastro do NAS com shared secret nos servidores de backup, sincronização de políticas e configuração de deadtime/health checks.',
    optionErrors: {
      0: 'Incorreta: servidores RADIUS não aceitam requisições de um NAS sem shared secret cadastrado e coincidente.',
      1: 'Incorreta: IPs duplicados na mesma VLAN sem balanceador/anycast geram conflito ARP e falhas intermitentes.',
      3: 'Incorreta: 802.1X/EAP de endpoints utiliza RADIUS (UDP 1812), não havendo comutação automática para TACACS+.'
    }
  },
  {
    id: 'sarah-7-48',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre o funcionamento dos protocolos **RADIUS e TACACS+**, seus pacotes e atributos, assinale a afirmação INCORRETA.',
    options: [
      'O TACACS+ utiliza TCP porta 49, separa de forma independente os processos de Autenticação, Autorização e Accounting e cifra o corpo inteiro do pacote.',
      'No RADIUS Accounting (UDP 1813), o NAS envia Accounting-Start no início da sessão, Interim-Update em intervalos periódicos e Accounting-Stop no encerramento.',
      'O atributo Session-Timeout instrui o NAS sobre o tempo máximo de validade da sessão antes de exigir desconexão ou nova reautenticação do cliente.',
      'No RADIUS tradicional em UDP 1812, o shared secret criptografa o pacote inteiro, ocultando Calling-Station-Id e Called-Station-Id na rede.'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.3. RADIUS × TACACS+. A alternativa D é **incorreta**: no RADIUS tradicional sobre UDP, o *shared secret* ofusca **apenas o atributo `User-Password`** (não o pacote inteiro), deixando atributos como `Calling-Station-Id` e `Called-Station-Id` legíveis em texto claro — criptografia total ocorre no **TACACS+** (TCP 49) ou no **RadSec** (RADIUS sobre TLS).',
    correctAnalysis:
      'A afirmação D é falsa porque atribui ao RADIUS UDP tradicional a criptografia integral de pacotes, que só existe no TACACS+ ou no RadSec.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): descreve corretamente TCP 49, separação AAA e cifragem integral do TACACS+.',
      1: 'Incorreta (afirmação verdadeira): Start, Interim-Update e Stop são os tipos clássicos de Accounting-Request na UDP 1813.',
      2: 'Incorreta (afirmação verdadeira): Session-Timeout delimita a duração máxima autorizada de uma sessão no NAS.'
    }
  },
  {
    id: 'sarah-7-49',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre o protocolo **RADIUS**:\n\nOs pacotes de registro de início, atualização periódica e término de sessão trafegam por padrão na porta _____; o mecanismo da RFC 5176 que permite ao servidor enviar alterações de perfil ou encerramento ativo para o NAS na porta UDP 3799 usa mensagens _____ e *Disconnect-Request*; e a extensão encapsulada sobre TLS para cifrar todo o tráfego denomina-se _____.',
    options: [
      'TCP 49 / Accounting-Start / TACACS+',
      'UDP 1812 / Access-Challenge / RadSec',
      'UDP 1813 / Access-Accept / TACACS+',
      'UDP 1813 / CoA-Request / RadSec'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.3. RADIUS. O *accounting* padrão usa **UDP 1813**; a reautorização ativa da RFC 5176 (UDP 3799) utiliza **CoA-Request** e *Disconnect-Request*; e RADIUS sobre TLS é o **RadSec**.',
    correctAnalysis:
      'Respectivamente: UDP 1813, CoA-Request e RadSec.',
    optionErrors: {
      0: 'Incorreta: TCP 49 pertence ao TACACS+, e Accounting-Start é apenas o registro inicial de contabilidade na UDP 1813.',
      1: 'Incorreta: UDP 1812 atende autenticação/autorização (não accounting), e Access-Challenge ocorre no fluxo inicial EAP.',
      2: 'Incorreta: Access-Accept responde a Access-Request na UDP 1812 (não RFC 5176 UDP 3799), e RADIUS sobre TLS é RadSec.'
    }
  },
  {
    id: 'sarah-7-50',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Notebooks corporativos ingressados no Active Directory não recebem Políticas de Grupo (GPOs) nem permitem o primeiro logon de usuários em trânsito porque a conexão de rede 802.1X só é autenticada depois que alguém digita login e senha no sistema operacional. Qual abordagem resolve o cenário?',
    options: [
      'Configurar autenticação de máquina (certificado de computador no AD) antes do logon, alternando ou encadeando com autenticação de usuário após o login.',
      'Substituir o 802.1X corporativo por portal cativo WebAuth local no switch, permitindo que o Windows baixe GPOs antes da tela de autenticação web.',
      'Habilitar MAB para todos os notebooks corporativos com base no endereço MAC da placa Wi-Fi, dispensando qualquer consulta ao Active Directory.',
      'Configurar base interna estática de usuários locais no ponto de acesso, bloqueando consultas LDAPS ou Kerberos aos controladores de domínio.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.4. Autenticação de Máquina × Usuário. Na **autenticação de máquina**, o computador utiliza sua própria identidade (geralmente certificado de computador emitido pela PKI corporativa no AD) para autenticar no 802.1X **antes do logon do usuário**. Assim, a interface já fica conectada na tela de login para aplicar GPOs, scripts de inicialização e validar novos logons contra os controladores de domínio.',
    correctAnalysis:
      'Autenticação de máquina conecta a estação antes do logon do usuário, viabilizando GPOs e validação inicial no AD antes da troca/encadeamento para credenciais do usuário.',
    optionErrors: {
      1: 'Incorreta: WebAuth exige navegador aberto após o usuário já estar logado na estação, não operando antes da tela de login.',
      2: 'Incorreta: MAB baseado apenas em endereço MAC é frágil para estações móveis e não substitui autenticação corporativa de máquina.',
      3: 'Incorreta: base local no AP não escala para contas do AD nem resolve conectividade pré-logon ao domínio.'
    }
  },
  {
    id: 'sarah-7-51',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos de **AAA e autenticação** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) **Autenticação** (AAA)\n(II) **Autorização** (AAA)\n(III) ***Accounting*** (AAA)\n(IV) **MAB** (*MAC Authentication Bypass*)\n(V) **Central WebAuth (CWA)**\n\nColuna da Direita:\n(A) Verifica quem é o usuário ou dispositivo por senha, certificado ou identidade declarada.\n(B) Redireciona o navegador do visitante para portal hospedado no servidor NAC, que libera o acesso via CoA após login/MFA.\n(C) Registra início, duração, volume de dados e encerramento das sessões para auditoria e bilhetagem.\n(D) Define quais recursos, VLANs ou ACLs a entidade autenticada tem permissão para acessar.\n(E) Usa o endereço MAC do dispositivo como credencial no servidor AAA quando o equipamento não possui suplicante.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-A, II-D, III-C, IV-E, V-B.',
      'I-D, II-A, III-C, IV-E, V-B.',
      'I-A, II-C, III-D, IV-E, V-B.',
      'I-A, II-D, III-C, IV-B, V-E.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.4. AAA e Métodos de Acesso. (I-A) **Autenticação** (comprova identidade); (II-D) **Autorização** (concede permissões/recursos); (III-C) **Accounting** (registra eventos/uso); (IV-E) **MAB** (fallback por MAC); (V-B) **Central WebAuth** (portal cativo centralizado no NAC com liberação via CoA).',
    correctAnalysis:
      'Associação exata: I-A, II-D, III-C, IV-E e V-B.',
    optionErrors: {
      1: 'Incorreta: inverte Autenticação (I-A) com Autorização (II-D).',
      2: 'Incorreta: inverte Autorização (II-D) com Accounting (III-C).',
      3: 'Incorreta: inverte MAB (IV-E) com Central WebAuth (V-B).'
    }
  },
  {
    id: 'sarah-7-52',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **arquitetura AAA, fontes de identidade, portais cativos e MFA**, analise as afirmativas:\n\nI. No modelo **AAA**, a **Autenticação** confirma a identidade, a **Autorização** aplica políticas de acesso/privilégios e o ***Accounting*** audita os registros da sessão.\nII. Um servidor NAC pode integrar-se a múltiplas fontes de identidade, como **Active Directory** (via LDAPS/Kerberos para usuários e grupos), **PKI** (certificados) e **base interna** (contas temporárias de visitantes ou MACs).\nIII. Em portais cativos corporativos ou de visitantes patrocinados, a adoção de **MFA** exige um segundo fator de verificação antes de autorizar a navegação.\nIV. No **WebAuth local** configurado diretamente no switch ou AP, toda a autenticação ocorre sem navegador e sem interceptação HTTP/HTTPS, validando automaticamente o computador antes do logon no Windows.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.4. Autenticação e Fontes de Identidade. I verdadeira (papéis do AAA); II verdadeira (AD via LDAPS/Kerberos, PKI e base interna do NAC); III verdadeira (MFA no portal cativo); IV falsa: **WebAuth** (seja local no AP/switch ou central no NAC) funciona exatamente **interceptando tráfego HTTP/HTTPS em um navegador** para exibir a página de login após o cliente obter IP, não antes do logon.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV descreve incorretamente o WebAuth como pré-logon sem navegador.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre a aplicação de MFA em portais cativos.',
      2: 'Incorreta: inclui IV (falsa — WebAuth depende de navegador/HTTP) e omite II (verdadeira sobre fontes de identidade).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre AAA).'
    }
  },
  {
    id: 'sarah-7-53',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **fontes de identidade e fluxos de autenticação** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Ao consultar o Active Directory para validar contas ou consultar pertencimento a grupos, o servidor RADIUS/NAC utiliza canais seguros como LDAPS ou integração em nível de domínio com Kerberos.\n( ) No modelo **Central WebAuth (CWA)**, a página do portal cativo fica armazenada exclusivamente na memória local do switch de acesso, sem envolvimento do servidor NAC após o redirecionamento.\n( ) Em estações corporativas configuradas para autenticação de máquina e de usuário, a autenticação de máquina pode ocorrer antes do logon do usuário para garantir conectividade de domínio.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.4. Autenticação no AD, CWA e Máquina. (1) verdadeira (integração segura RADIUS/NAC -> AD via LDAPS/Kerberos); (2) falsa: no **Central WebAuth (CWA)**, o switch/WLC redireciona o cliente para a página hospedada no **servidor NAC** (como ISE/ClearPass), que processa o login e envia um **CoA** para liberar a porta — quem hospeda a página no próprio equipamento de rede é o **Local WebAuth**; (3) verdadeira (autenticação de máquina pré-logon).',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa troca Central WebAuth (portal no NAC) por Local WebAuth (portal no switch/AP).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (2) é falsa, pois no CWA o portal cativo é hospedado no servidor NAC, não localmente no switch.',
      1: 'Incorreta: a afirmativa (1) é verdadeira sobre consultas seguras do servidor RADIUS ao AD (LDAPS/Kerberos).',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre o papel da autenticação de máquina pré-logon.'
    }
  },
  {
    id: 'sarah-7-54',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **AAA e métodos de autenticação**:\n\nNo modelo AAA, a etapa que comprova a identidade do requisitante antes da concessão de privilégios é a _____; dispositivos sem suplicante 802.1X, como impressoras de rede e catracas, costumam ser autenticados pelo endereço físico por meio de _____; e o modelo de portal cativo em que o equipamento de rede redireciona o navegador para uma página hospedada no servidor NAC denomina-se _____.',
    options: [
      'Autorização / WebAuth local / MAB',
      'Accounting / MAB / WebAuth local',
      'Autenticação / MFA / WebAuth local',
      'Autenticação / MAB / Central WebAuth'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.4. AAA, MAB e Portal Cativo. Comprovar identidade é **Autenticação**; validar dispositivos sem suplicante por MAC é **MAB**; e redirecionar ao portal hospedado no servidor NAC é **Central WebAuth**.',
    correctAnalysis:
      'Respectivamente: Autenticação, MAB e Central WebAuth.',
    optionErrors: {
      0: 'Incorreta: Autorização ocorre após a Autenticação definindo permissões, e dispositivos sem navegador não autenticam via WebAuth.',
      1: 'Incorreta: Accounting registra logs/sessões (não comprova identidade), e portal no NAC é Central WebAuth.',
      2: 'Incorreta: impressoras/catracas não executam MFA interativo em navegador.'
    }
  },
  {
    id: 'sarah-7-55',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um notebook conecta-se a uma porta 802.1X e cai inicialmente em uma VLAN de quarentena (`VLAN 99`, sub-rede `10.99.0.0/24`). Após regularizar o antivírus, o servidor NAC envia um pacote **RADIUS CoA** alterando a porta do switch para a VLAN corporativa (`VLAN 20`). Contudo, o notebook continua tentando usar o IP `10.99.0.45` sem conseguir navegar. Qual é a causa e a ação operacional típica?',
    options: [
      'A troca de VLAN por CoA não notifica o cliente para renovar o DHCP; configura-se CoA com port bounce (rearme da porta) para forçar novo IP na VLAN 20.',
      'O servidor RADIUS enviou apenas os atributos 64 e 65 sem o atributo 81, fazendo o switch manter permanentemente a VLAN nativa 1 mesmo após o CoA.',
      'O endereço IP da VLAN 99 é atualizado em camada 2 pelo protocolo ARP gratuito do switch sem necessidade de nova troca DORA com o servidor DHCP.',
      'O mecanismo de dACL substituiu o cabeçalho IP do cliente na placa de rede, exigindo troca manual de gateway no adaptador do notebook.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.5. CoA e Renovação DHCP em VLAN Dinâmica. Ao alterar a VLAN de uma porta cabeada ativa via **CoA**, a interface física Ethernet do cliente permanece com enlace *up*, de modo que o sistema operacional **mantém o endereço IP antigo** até o vencimento do *lease* DHCP. A solução clássica no NAC é enviar um **CoA com *port bounce*** (desliga/religa brevemente a porta) para que o SO detecte perda de link e dispare nova solicitação **DHCP** na VLAN 20.',
    correctAnalysis:
      'Como o link Ethernet não cai na troca simples de VLAN via CoA, o cliente retém o IP da VLAN anterior até ocorrer port bounce ou renovação DHCP.',
    optionErrors: {
      1: 'Incorreta: os logs mostram que o switch já moveu a porta para a VLAN 20; o problema está na concessão IP retida pelo cliente.',
      2: 'Incorreta: ARP gratuito resolve MAC para IP na mesma rede, jamais altera o endereço IP atribuído ao cliente via DHCP.',
      3: 'Incorreta: dACL é uma lista de controle de acesso aplicada no switch e não reescreve configurações IP locais da placa de rede.'
    }
  },
  {
    id: 'sarah-7-56',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **VLAN dinâmica via RADIUS e contingência**, analise as afirmativas:\n\nI. Os atributos IETF retornados no `Access-Accept` para atribuição dinâmica de VLAN são **`Tunnel-Type` (64) = 13 (VLAN)**, **`Tunnel-Medium-Type` (65) = 6 (802)** e **`Tunnel-Private-Group-ID` (81)** com o ID ou nome da VLAN.\nII. É possível atribuir VLANs distintas conforme o grupo do **Active Directory** do usuário autenticado dentro do mesmo SSID corporativo.\nIII. Para o cliente receber tráfego e IP corretamente, a VLAN dinâmica indicada no atributo 81 precisa existir configurada no switch e estar permitida nos enlaces *trunk* necessários.\nIV. A **Critical VLAN** é atribuída pelo próprio servidor RADIUS por meio do atributo 81, no *Access-Accept* enviado durante a contingência.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.5. VLAN Dinâmica. I verdadeira (atributos IETF 64=13, 65=6, 81=ID/nome); II verdadeira (segmentação dinâmica por grupo do AD); III verdadeira (pré-requisito de existência no switch e permissão em *trunks*); IV falsa: a **Critical VLAN** é configurada **localmente no switch ou controladora** e acionada justamente quando **nenhum servidor RADIUS responde**, nunca por um `Access-Accept` do próprio RADIUS.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV erra ao atribuir a Critical VLAN ao atributo 81 do RADIUS, pois ela é uma configuração local de contingência usada quando o RADIUS não responde.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre a obrigatoriedade de a VLAN existir no switch e nos trunks.',
      2: 'Incorreta: inclui IV (falsa — Critical VLAN é configuração local acionada quando nenhum RADIUS responde) e omite II (verdadeira sobre mapeamento por grupo AD).',
      3: 'Incorreta: inclui IV (falsa — Critical VLAN não vem em Access-Accept do RADIUS) e omite I (verdadeira sobre atributos 64/65/81).'
    }
  },
  {
    id: 'sarah-7-57',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **VLAN dinâmica, dACL e Critical VLAN** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Enquanto a VLAN dinâmica muda o segmento de camada 2 e o endereço IP do cliente, uma **dACL (*Downloadable ACL*)** aplica filtros L3/L4 diretamente na porta mantendo a mesma VLAN.\n( ) Em um ponto de acesso em modo *bridge* local, o uso de VLAN dinâmica pelo RADIUS dispensa que a VLAN esteja criada no switch de acesso ou liberada no *trunk* do AP.\n( ) A **Critical VLAN** é configurada nos switches/controladoras para garantir conectividade controlada em contingência quando todos os servidores RADIUS ficam inalcançáveis.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – F – V.',
      'V – V – V.',
      'V – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.5. dACL × VLAN e Critical VLAN. (1) verdadeira (**dACL** filtra tráfego na camada 3/4 sem exigir múltiplas sub-redes L2); (2) falsa: o switch e o enlace *trunk* até o AP/roteador precisam obrigatoriamente conter a VLAN autorizada pelo atributo 81; (3) verdadeira (**Critical VLAN** mantém acesso na queda total do RADIUS).',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa erra ao dispensar o pré-requisito da VLAN no switch e no trunk do AP.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre a diferença operacional entre dACL e VLAN dinâmica.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois a VLAN dinâmica precisa existir no switch e estar permitida no trunk.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre o uso da Critical VLAN na queda dos servidores RADIUS.'
    }
  },
  {
    id: 'sarah-7-58',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **atribuição dinâmica de VLANs, dACLs e reautorização**, assinale a afirmação INCORRETA.',
    options: [
      'Os atributos IETF 64 (Tunnel-Type = 13), 65 (Tunnel-Medium-Type = 6) e 81 (Tunnel-Private-Group-ID) permitem retornar o ID ou nome da VLAN no Access-Accept.',
      'O uso de dACLs facilita a microsegmentação por perfil dentro de uma mesma sub-rede sem exigir criação de dezenas de VLANs em cada switch.',
      'Ao receber o atributo Tunnel-Private-Group-ID com uma VLAN ainda inexistente, o switch 802.1X cria a VLAN automaticamente em seu banco local e a propaga nos trunks.',
      'Na troca dinâmica de VLAN via CoA durante uma conexão cabeada ativa, recomenda-se aplicar port bounce para forçar o cliente a renovar o endereço IP via DHCP.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.5. Pré-requisitos de VLAN Dinâmica. A alternativa C é **incorreta**: o switch **não cria VLANs dinamicamente** a partir do RADIUS nem as propaga pelos *trunks*. Se a VLAN informada em `Tunnel-Private-Group-ID` não existir previamente no banco local do switch (e nos *trunks* até o gateway/DHCP), o cliente autentica no RADIUS mas fica sem conectividade de rede.',
    correctAnalysis:
      'A afirmação C é falsa porque o switch exige pré-configuração da VLAN retornada pelo RADIUS, não a criando automaticamente.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): descreve corretamente a tríade de atributos RFC 2868/3580.',
      1: 'Incorreta (afirmação verdadeira): dACLs permitem controle granular L3/L4 sobre uma mesma VLAN.',
      3: 'Incorreta (afirmação verdadeira): port bounce via CoA obriga a estação a detectar link flap e refazer DHCP.'
    }
  },
  {
    id: 'sarah-7-59',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **segmentação dinâmica em NAC**:\n\nPara instruir o switch a alocar o cliente na VLAN dinâmica correspondente ao grupo do AD, o RADIUS retorna `Tunnel-Type = 13`, `Tunnel-Medium-Type = 6` e o identificador ou nome da VLAN no atributo _____; quando se prefere filtrar tráfego L3/L4 sem trocar a sub-rede L2 do cliente, aplica-se uma _____; e caso todos os servidores RADIUS fiquem inalcançáveis, a porta pode usar a _____ como contingência.',
    options: [
      'Filter-Id / Critical VLAN / dACL',
      'Calling-Station-Id / dACL / Guest VLAN',
      'Tunnel-Private-Group-ID / Critical VLAN / dACL',
      'Tunnel-Private-Group-ID / dACL / Critical VLAN'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.5. VLAN Dinâmica, dACL e Contingência. O atributo IETF 81 com o ID/nome da VLAN é **`Tunnel-Private-Group-ID`**; filtro por sessão sem mudar sub-rede é **dACL**; e contingência para queda do RADIUS é **Critical VLAN**.',
    correctAnalysis:
      'Respectivamente: Tunnel-Private-Group-ID, dACL e Critical VLAN.',
    optionErrors: {
      0: 'Incorreta: Filter-Id referencia o nome de uma ACL/política local, e Critical VLAN/dACL estão invertidos.',
      1: 'Incorreta: Calling-Station-Id informa o MAC do cliente, e Guest VLAN atende ausência de resposta EAPOL com RADIUS online.',
      2: 'Incorreta: inverte Critical VLAN (queda de servidores AAA) com dACL (filtragem L3/L4 por sessão).'
    }
  },
  {
    id: 'sarah-7-60',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao habilitar o **modo de transição WPA3/WPA2** em um único SSID corporativo nas faixas de 2,4 e 5 GHz para atender simultaneamente notebooks novos e coletores clínicos antigos, percebe-se que os coletores antigos falham ao associar. Qual ajuste operacional de **PMF (802.11w)** explica e corrige o problema na fase de transição?',
    options: [
      'O modo de transição exige PMF como opcional (capable) para clientes WPA2 antigos; defini-lo como obrigatório (required) impede a associação de dispositivos sem 802.11w.',
      'No modo de transição WPA3/WPA2, o PMF deve ficar desabilitado inclusive para clientes WPA3, pois a especificação proíbe 802.11w quando há clientes WPA2 no AP.',
      'A faixa de 6 GHz aceita o modo de transição WPA3/WPA2 com PMF desativado para garantir retrocompatibilidade com placas antigas 802.11n.',
      'O modo de transição converte automaticamente todas as conexões WPA3-SAE em WPA2-PSK após o primeiro quadro Beacon, impedindo clientes WPA3 de usar SAE.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.6. Operação em Modo de Transição WPA3/WPA2. No **WPA3/WPA2 Transition Mode**, clientes WPA3 negociam SAE com **PMF obrigatório**, mas clientes WPA2 legados frequentemente não suportam 802.11w. Por isso, a política do SSID em transição deve deixar **PMF como Opcional (*Capable*)** para aceitar os equipamentos antigos — deixando PMF *Required* apenas quando o SSID passar para modo estrito WPA3-only.',
    correctAnalysis:
      'Em modo de transição WPA3/WPA2, definir PMF como obrigatório bloqueia clientes WPA2 legados sem 802.11w; ele deve permanecer opcional (capable).',
    optionErrors: {
      1: 'Incorreta: clientes WPA3 sempre operam com PMF exigido mesmo no modo de transição; o parâmetro opcional/capable atende os clientes WPA2.',
      2: 'Incorreta: a banda de 6 GHz não suporta clientes 802.11n nem modo de transição com WPA2/PMF desativado.',
      3: 'Incorreta: clientes compatíveis com WPA3 associam-se via SAE normalmente no modo de transição.'
    }
  },
  {
    id: 'sarah-7-61',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos operacionais de **WPA2/WPA3 e desenho de SSIDs** à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) **Modo de transição WPA3/WPA2**\n(II) **Faixa de 6 GHz (Wi-Fi 6E/7)**\n(III) **iPSK / PPSK**\n(IV) **Separação de SSIDs (Corp / Guest / IoT)**\n(V) **WPA3-Enterprise**\n\nColuna da Direita:\n(A) Permite atribuir chaves pré-compartilhadas distintas por dispositivo ou grupo dentro de um mesmo SSID sem exigir 802.1X.\n(B) Isola perfis de risco diferentes sem proliferar dezenas de SSIDs no rádio, preservando o *airtime* consumido por *beacons*.\n(C) Anuncia suporte simultâneo a SAE e PSK com PMF opcional para aceitar estações antigas durante a migração.\n(D) Exige obrigatoriamente WPA3 ou OWE (*Enhanced Open*), vetando SSIDs WPA2 ou abertos sem criptografia.\n(E) Combina autenticação 802.1X/EAP com proteção obrigatória de quadros de gerenciamento (PMF) na operação corporativa.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-D, III-A, IV-B, V-E.',
      'I-D, II-C, III-A, IV-B, V-E.',
      'I-C, II-D, III-B, IV-A, V-E.',
      'I-C, II-D, III-A, IV-E, V-B.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.6. Operação WPA2/WPA3. (I-C) **Modo de transição** (SAE + PSK com PMF opcional); (II-D) **6 GHz** (somente WPA3 ou OWE); (III-A) **iPSK/PPSK** (chaves individuais por dispositivo/grupo sem 802.1X); (IV-B) **Separação de SSIDs** (equilíbrio entre segmentação e overhead de *beacons*); (V-E) **WPA3-Enterprise** (802.1X + PMF obrigatório).',
    correctAnalysis:
      'Associação exata: I-C, II-D, III-A, IV-B e V-E.',
    optionErrors: {
      1: 'Incorreta: inverte Modo de transição (I-C) com Faixa de 6 GHz (II-D).',
      2: 'Incorreta: inverte iPSK/PPSK (III-A) com Separação de SSIDs (IV-B).',
      3: 'Incorreta: inverte Separação de SSIDs (IV-B) com WPA3-Enterprise (V-E).'
    }
  },
  {
    id: 'sarah-7-62',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre a **operação de redes WPA2/WPA3, 6 GHz e gestão de PSK**, analise as afirmativas:\n\nI. Na faixa de **6 GHz**, exige-se **WPA3** (Personal/Enterprise) ou **OWE (*Enhanced Open*)**, não sendo permitido publicar SSIDs WPA2 ou redes abertas sem criptografia.\nII. Adotar poucos SSIDs bem definidos (ex.: Corporativo 802.1X, Visitantes OWE/Portal e IoT com iPSK/PPSK) evita desperdício de *airtime* com *beacons* mantendo a segmentação.\nIII. Enquanto uma **PSK única** obriga a reconfigurar todos os dispositivos na rotação após desligamento ou vazamento, o uso de **iPSK/PPSK** permite revogar apenas a chave daquele equipamento.\nIV. Em um SSID **WPA2-Enterprise** padrão, o uso de **PMF (802.11w)** é estritamente obrigatório desde a origem do padrão, bloqueando qualquer cliente antigo que não o implemente.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.6. Operação WPA2/WPA3. I verdadeira (requisitos obrigatórios de segurança em 6 GHz); II verdadeira (controle de quantidade de SSIDs para preservar *airtime* + segmentação por finalidade); III verdadeira (limitação da PSK única × vantagem operacional do iPSK/PPSK); IV falsa: o **PMF (802.11w)** é opcional no **WPA2-Enterprise**, tornando-se obrigatório apenas no **WPA3-Enterprise**.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV erra ao atribuir obrigatoriedade padrão de PMF ao WPA2-Enterprise.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre rotação de PSK × revogação granular em iPSK/PPSK.',
      2: 'Incorreta: inclui IV (falsa — PMF é opcional no WPA2-Enterprise) e omite II (verdadeira sobre desenho de SSIDs).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre exigência de WPA3/OWE em 6 GHz).'
    }
  },
  {
    id: 'sarah-7-63',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **operação WPA2/WPA3 e gestão de SSIDs** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em SSIDs com **PSK compartilhada**, a política deve prever rotação periódica da chave e troca imediata após o desligamento de colaboradores que a conheciam.\n( ) Manter um SSID em **modo de transição WPA3/WPA2** oferece exatamente a mesma resistência contra ataques de *downgrade* que um SSID configurado exclusivamente como **WPA3-only**.\n( ) Clientes legados que só suportam **WPA2** podem ser atendidos por um SSID separado, permitindo que o SSID principal opere em **WPA3-only** e elimine o risco de *downgrade*.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – F – V.',
      'V – V – V.',
      'V – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.6. WPA2/WPA3 em Produção. (1) verdadeira (gestão de risco da PSK compartilhada exige rotação periódica e troca imediata em desligamentos); (2) falsa: como o modo de transição continua aceitando **WPA2-PSK** e **PMF opcional**, atacantes ainda podem tentar forçar clientes a negociar no modo legado WPA2 (*downgrade*); (3) verdadeira (isolar clientes legados em SSID próprio permite endurecer o SSID principal para WPA3-only sem risco de *downgrade*).',
    correctAnalysis:
      'Gabarito: V – F – V. A primeira e a terceira afirmativas trazem boas práticas de PSK e separação de SSIDs; a segunda erra ao igualar a proteção contra downgrade do modo de transição ao WPA3-only.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre rotação periódica e troca imediata de PSK após desligamentos.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o modo de transição mantém compatibilidade WPA2 e reduz a defesa contra downgrade.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre isolar clientes WPA2 legados em SSID separado para manter o principal em WPA3-only.'
    }
  },
  {
    id: 'sarah-7-64',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **operação WPA2/WPA3, 6 GHz e desenho de SSIDs**, assinale a afirmação INCORRETA.',
    options: [
      'Ao habilitar 802.11r (Fast Transition) em SSID WPA3-Personal, cliente e AP precisam suportar o AKM FT-SAE; clientes sem esse suporte podem falhar ao associar.',
      'Publicar um número excessivo de SSIDs por rádio aumenta o tráfego de quadros Beacon em taxas baixas, consumindo tempo útil de transmissão (airtime).',
      'Na faixa de 6 GHz, recomenda-se configurar o SSID em WPA2-PSK com PMF desabilitado para assegurar compatibilidade máxima com dispositivos Wi-Fi 6E.',
      'Enquanto a PSK tradicional exige trocar a senha em todos os equipamentos após um desligamento ou vazamento, a abordagem iPSK/PPSK permite revogar a chave de um único dispositivo.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.6. Operação em 6 GHz. A alternativa C é **incorreta**: dispositivos **Wi-Fi 6E e Wi-Fi 7** na banda de **6 GHz** exigem obrigatoriamente **WPA3** (ou **OWE** em redes abertas) com **PMF (802.11w) ativado** — o padrão não permite operar com WPA2-PSK nem sem proteção de quadros de gerenciamento em 6 GHz.',
    correctAnalysis:
      'A afirmação C é falsa porque a banda de 6 GHz proíbe WPA2-PSK e PMF desabilitado, exigindo WPA3 ou OWE.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): com 802.11r ativo em WPA3-Personal, exige-se suporte ao AKM FT-SAE no cliente e no AP; dispositivos sem FT-SAE podem falhar na associação.',
      1: 'Incorreta (afirmação verdadeira): muitos SSIDs multiplicam quadros Beacon e degradam o airtime disponível.',
      3: 'Incorreta (afirmação verdadeira): iPSK/PPSK viabiliza chaves por dispositivo/usuário com revogação seletiva.'
    }
  },
  {
    id: 'sarah-7-65',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **operação WPA2/WPA3**:\n\nPara publicar um SSID dedicado na faixa de 6 GHz em ambiente Wi-Fi 6E/7, exige-se obrigatoriamente _____ ou OWE; para manter compatibilidade com clientes antigos durante a migração no mesmo SSID em 2,4/5 GHz, configura-se o modo de transição com PMF _____; e, para isolar equipamentos IoT sem suporte a 802.1X atribuindo senhas individuais por dispositivo no mesmo SSID, adota-se _____.',
    options: [
      'WPA2-PSK / obrigatório / RADIUS',
      'WPA3 / obrigatório / WPA2-PSK',
      'WPA2-PSK / opcional / iPSK/PPSK',
      'WPA3 / opcional / iPSK/PPSK'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.6. Operação WPA2/WPA3. A faixa de 6 GHz exige **WPA3** (ou OWE); o modo de transição com legados utiliza PMF **opcional**; e senhas individuais por dispositivo/grupo sem 802.1X caracterizam **iPSK/PPSK**.',
    correctAnalysis:
      'Respectivamente: WPA3, opcional e iPSK/PPSK.',
    optionErrors: {
      0: 'Incorreta: 6 GHz veda WPA2-PSK, e o preenchimento da última lacuna refere-se às chaves por dispositivo (iPSK/PPSK), não ao protocolo RADIUS.',
      1: 'Incorreta: PMF obrigatório no modo de transição bloqueia clientes WPA2 antigos, e WPA2-PSK usa chave única.',
      2: 'Incorreta: a banda de 6 GHz não aceita WPA2-PSK.'
    }
  },
  {
    id: 'sarah-7-66',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao conectar um notebook a uma porta 802.1X de switch, os **Live Logs do Cisco ISE** registram `Access-Accept` retornando `VLAN 30`, e o comando `show authentication sessions` no switch confirma `Authc/Authz Success` com atribuição à VLAN 30. Ainda assim, a estação não obtém IP e permanece em `169.254.x.x`. Qual é a causa raiz mais provável?',
    options: [
      'A VLAN 30 não foi criada no switch de acesso ou não está permitida no enlace trunk até o roteador/servidor DHCP.',
      'O shared secret entre o switch e o servidor ISE está divergente, fazendo o pacote Access-Accept ser descartado pelo switch.',
      'O cliente não confia no certificado do servidor RADIUS durante a fase PEAP, interrompendo o túnel TLS antes do acesso.',
      'A porta UDP 1812 está bloqueada no firewall entre o switch e o servidor NAC, impedindo qualquer resposta RADIUS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 7.2.7. Troubleshooting Wi-Fi/NAC. Se o ISE retornou `Access-Accept` com `VLAN 30` e o switch exibiu `Authc/Authz Success`, toda a comunicação 802.1X e RADIUS ocorreu corretamente. A falha em receber DHCP (ficando em APIPA `169.254.x.x`) aponta para problema de **camada 2/infraestrutura**: **VLAN 30 inexistente no switch** ou **ausente na lista permitida do *trunk*** até o roteador/DHCP relay.',
    correctAnalysis:
      'Quando a autenticação e autorização AAA são bem-sucedidas mas o cliente não pega IP, a causa típica é a VLAN dinâmica não existir no switch ou faltar no trunk.',
    optionErrors: {
      1: 'Incorreta: shared secret divergente impediria o Access-Accept de ser aceito e não geraria Authc/Authz Success no switch.',
      2: 'Incorreta: falha de confiança no certificado abortaria o túnel EAP antes de o servidor emitir Access-Accept.',
      3: 'Incorreta: bloqueio da UDP 1812 impediria o switch de sequer alcançar o ISE nos Live Logs.'
    }
  },
  {
    id: 'sarah-7-67',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Usuários de telefonia Wi-Fi em uma ala hospitalar relatam cortes de áudio e desconexões ao caminhar pelos corredores. Durante o *site survey*, registram-se trechos com **RSSI de −78 dBm** e **SNR de 14 dB**. Considerando boas práticas de projeto para **voz sobre Wi-Fi**, quais parâmetros mínimos de referência devem ser atingidos na cobertura?',
    options: [
      'RSSI de −85 dBm ou melhor e SNR ≥ 10 dB, suficientes para manter chamadas de voz sem cortes de áudio.',
      'RSSI de −67 dBm ou melhor e SNR ≥ 25 dB, garantindo margem adequada para voz e roaming estável.',
      'RSSI de −90 dBm ou melhor e SNR ≥ 5 dB, priorizando máximo alcance de cada AP em potência máxima.',
      'RSSI de −50 dBm ou melhor e SNR ≥ 45 dB, exigindo um ponto de acesso dedicado dentro de cada consultório.'
    ],
    correctIndex: 1,
    explanation:
      'Item 7.2.7. Parâmetros RF (RSSI e SNR) para Voz Wi-Fi. Em projetos corporativos e hospitalares de voz sobre Wi-Fi (VoWLAN), adota-se tipicamente a referência mínima de **RSSI ≥ −67 dBm** (borda da célula) e **SNR ≥ 25 dB** (relação sinal-ruído), assegurando taxas de modulação estáveis, baixo *retry* e gatilho de *roaming* previsível.',
    correctAnalysis:
      'As referências padrão de projeto para voz sobre Wi-Fi são RSSI de −67 dBm ou melhor e SNR de pelo menos 25 dB.',
    optionErrors: {
      0: 'Incorreta: −85 dBm e SNR 10 dB estão próximos ao piso de ruído, gerando alta taxa de retransmissões e perda de pacotes VoIP.',
      2: 'Incorreta: −90 dBm / 5 dB é praticamente sinal inutilizável, e potência máxima no AP agrava sticky clients e interferência co-canal.',
      3: 'Incorreta: −50 dBm / 45 dB é excessivamente restritivo e inviável como borda de célula, causando excesso de APs e interferência co-canal.'
    }
  },
  {
    id: 'sarah-7-68',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os sintomas observados no **troubleshooting de Wi-Fi/NAC** à esquerda com suas causas raiz à direita.\n\nColuna da Esquerda:\n(I) Nenhum evento aparece nos **Live Logs** do ISE ou eventos do NPS quando a estação tenta conectar.\n(II) Logs do servidor RADIUS acusam pacote descartado por divergência de chave.\n(III) Estação recusa o certificado do servidor RADIUS acusando-o como ainda não válido ou expirado.\n(IV) Alta taxa de retransmissões e lentidão em salas vizinhas operando no mesmo canal.\n(V) Cliente permanece conectado a um AP distante com sinal de −82 dBm apesar de estar embaixo de outro AP.\n\nColuna da Direita:\n(A) Interferência co-canal (CCI) causada por planejamento inadequado de reutilização de canais.\n(B) Relógio do cliente dessincronizado (sem NTP/bateria CMOS), invalidando a janela de validade do certificado.\n(C) Comportamento de *sticky client* agravado por potência de transmissão excessiva nos APs.\n(D) NAS não cadastrado no servidor RADIUS ou porta UDP 1812 bloqueada no firewall intermediário.\n(E) Divergência do *shared secret* configurado entre o switch/WLC e o servidor RADIUS.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-E, III-A, IV-B, V-C.',
      'I-E, II-D, III-B, IV-A, V-C.',
      'I-D, II-E, III-B, IV-A, V-C.',
      'I-D, II-B, III-E, IV-A, V-C.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.7. Matriz de Troubleshooting Wi-Fi/NAC. (I-D) ausência total nos logs indica **NAS não cadastrado ou UDP 1812 bloqueada**; (II-E) pacote descartado aponta ***shared secret* divergente**; (III-B) erro de janela de validade em certificado válido remete a **relógio errado no cliente**; (IV-A) múltiplos APs no mesmo canal causam **CCI**; (V-C) estação presa a AP fraco caracteriza ***sticky client***.',
    correctAnalysis:
      'Associação exata: I-D, II-E, III-B, IV-A e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte erro de validade de certificado/relógio (III-B) com interferência co-canal (IV-A).',
      1: 'Incorreta: inverte bloqueio UDP 1812/NAS não cadastrado (I-D) com shared secret divergente (II-E).',
      3: 'Incorreta: inverte shared secret divergente (II-E) com relógio do cliente dessincronizado (III-B).'
    }
  },
  {
    id: 'sarah-7-69',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre ferramentas e diagnósticos de **troubleshooting em Wi-Fi/NAC**, analise as afirmativas:\n\nI. No switch gerenciável, o comando **`show authentication sessions`** informa o MAC conectado, o método (`dot1x`/`mab`), o domínio (`DATA`/`VOICE`) e o estado da autenticação e autorização.\nII. Os **Live Logs do Cisco ISE** e o log de eventos do **Microsoft NPS** exibem códigos de motivo detalhando se uma falha ocorreu por senha incorreta, certificado não confiável, conta expirada ou *shared secret* inválido.\nIII. Ajustar corretamente a potência de transmissão dos APs ajuda a evitar o fenômeno de ***sticky client*** e reduz a **interferência co-canal**, complementando recursos como 802.11k/v/r.\nIV. Quando o cliente não possui a autoridade certificadora (CA) emissora instalada ou está com o relógio local atrasado em vários anos, o túnel **PEAP/EAP-TLS** ignora a verificação e conclui o acesso normalmente.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 7.2.7. Troubleshooting Wi-Fi/NAC. I verdadeira (`show authentication sessions` no switch); II verdadeira (ISE Live Logs / NPS event reason codes); III verdadeira (equilíbrio de potência contra *sticky client* e CCI); IV falsa: se a CA não for confiável ou a data do cliente estiver fora da janela de validade do certificado do servidor, o suplicante aborta o handshake TLS e a autenticação falha.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV erra ao supor que o suplicante ignora falhas de CA ou validade temporal do certificado.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre ajuste de potência contra sticky client e CCI.',
      1: 'Incorreta: inclui IV (falsa — falha de CA/relógio aborta EAP) e omite II (verdadeira sobre Live Logs/NPS).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre show authentication sessions).'
    }
  },
  {
    id: 'sarah-7-70',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **diagnóstico de falhas 802.1X e RADIUS** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Se um switch tenta autenticar clientes mas nenhum pacote aparece nos Live Logs do ISE ou logs do NPS, deve-se verificar se um firewall bloqueia a porta UDP 1812 ou se o NAS não foi cadastrado como cliente RADIUS.\n( ) Quando há divergência no *shared secret* entre a controladora Wi-Fi e o servidor RADIUS, os clientes conectam-se normalmente e o único impacto restringe-se à ausência de registros de *accounting* na porta UDP 1813.\n( ) Caso o certificado apresentado pelo servidor RADIUS esteja expirado ou emitido por CA não confiável para o cliente, a estação recusa completar a autenticação 802.1X mesmo com usuário e senha corretos.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.7. Troubleshooting 802.1X/RADIUS. (1) verdadeira (ausência nos logs indica bloqueio UDP 1812 ou NAS não cadastrado); (2) falsa: com *shared secret* divergente, o servidor descarta ou invalida o pacote `Access-Request`/`User-Password` e o NAS falha ao validar a resposta, **impedindo a conexão dos clientes**; (3) verdadeira (certificado expirado ou CA não confiável abortam o PEAP/EAP-TLS no cliente).',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa subestima o impacto do shared secret divergente, que bloqueia a própria autenticação dos usuários.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre ausência de eventos nos Live Logs por bloqueio UDP 1812 ou NAS não cadastrado.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois shared secret divergente impede a autenticação, não afetando apenas accounting.',
      2: 'Incorreta: a afirmativa (3) é verdadeira sobre rejeição de certificado expirado ou de CA não confiável.'
    }
  },
  {
    id: 'sarah-7-71',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **troubleshooting em Wi-Fi e NAC**:\n\nNo switch de acesso, o comando que verifica o método ativo, o estado de autenticação/autorização e a VLAN aplicada por porta é _____; no Cisco ISE, o painel em tempo real que mostra tentativas de acesso e os códigos de motivo de falha denomina-se _____; e, quando dois APs próximos operam no mesmo canal degradando o meio compartilhado, ocorre _____.',
    options: [
      'show spanning-tree detail / Accounting-Stop / sticky client',
      'show mac address-table / Event Viewer / sticky client',
      'show authentication sessions / RADIUS CoA / sticky client',
      'show authentication sessions / Live Logs / interferência co-canal'
    ],
    correctIndex: 3,
    explanation:
      'Item 7.2.7. Ferramentas de Troubleshooting. O comando de estado 802.1X/MAB no switch é **`show authentication sessions`**; o painel de acompanhamento em tempo real no ISE é **`Live Logs`**; e múltiplos APs vizinhos na mesma frequência provocam **interferência co-canal**.',
    correctAnalysis:
      'Respectivamente: show authentication sessions, Live Logs e interferência co-canal.',
    optionErrors: {
      0: 'Incorreta: show spanning-tree detail verifica topologia STP, e sticky client refere-se a cliente preso a AP distante.',
      1: 'Incorreta: show mac address-table exibe apenas tabela MAC L2 sem status dot1x/mab ou motivo AAA.',
      2: 'Incorreta: RADIUS CoA reautoriza sessões ativas (não é o painel de auditoria de logs), e o problema de mesmo canal é interferência co-canal.'
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
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao comparar a telefonia convencional (**PSTN/TDM**) com o **VoIP**, qual característica distingue corretamente as duas?',
    options: [
      'Na PSTN a voz trafega em pacotes UDP com cabeçalho RTP, enquanto o VoIP reserva um circuito dedicado de 64 kbps por chamada.',
      'O VoIP dispensa plano de discagem e numeração lógica, pois cada ramal é identificado apenas pelo endereço IP do telefone.',
      'PSTN e VoIP têm a mesma dependência de energia no terminal, pois ambos alimentam o telefone pela linha da operadora.',
      'Na PSTN cada chamada ocupa um circuito dedicado de 64 kbps durante toda a ligação; no VoIP a voz é dividida em pacotes que compartilham a rede de dados.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.1.1. PSTN/TDM × VoIP. Na telefonia convencional **PSTN/TDM**, utiliza-se **comutação de circuitos** com um canal exclusivo de 64 kbps alocado durante toda a chamada. No **VoIP**, utiliza-se **comutação de pacotes** sobre IP (RTP/UDP/IP), compartilhando a infraestrutura de dados com os demais serviços da rede.',
    correctAnalysis:
      'A PSTN reserva um circuito TDM dedicado de 64 kbps por chamada, enquanto o VoIP fragmenta a voz em pacotes IP compartilhando a rede de dados.',
    optionErrors: {
      0: 'Incorreta: os conceitos estão invertidos — comutação de circuitos pertence à PSTN/TDM e pacotes RTP/UDP ao VoIP.',
      1: 'Incorreta: o PABX IP continua utilizando plano de discagem e números de ramal lógicos mapeados aos terminais.',
      2: 'Incorreta: o telefone analógico é alimentado pela linha da operadora, ao passo que o telefone IP depende de PoE/fonte local e nobreak.'
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
  },
  {
    id: 'sarah-8-17',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao migrar um hospital de PABX TDM para **PABX IP**, será preciso conectar dois aparelhos de **fax analógicos** antigos à nova rede VoIP e também integrar temporariamente **duas linhas analógicas da operadora (PSTN)** diretamente ao gateway local para contingência. Quais interfaces de gateway atendem respectivamente aos aparelhos de fax e às linhas da operadora?',
    options: [
      'Interfaces FXS para conectar os aparelhos de fax analógicos e interfaces FXO para receber as linhas da operadora.',
      'Interfaces FXO para conectar os aparelhos de fax analógicos e interfaces FXS para receber as linhas da operadora.',
      'Interfaces E1 R2 para alimentar diretamente os aparelhos de fax e interfaces FXS para fechar tronco SIP com a operadora.',
      'Interfaces ISDN PRI para conectar os aparelhos de fax e portas PoE 802.3af para receber as linhas analógicas da PSTN.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.1.1. Gateways FXS × FXO. A porta **FXS (*Foreign Exchange Station*)** simula uma central telefônica fornecendo energia elétrica, tom de discagem e corrente de toque para conectar **dispositivos finais analógicos** (telefones comuns, aparelhos de fax, interfones). Já a porta **FXO (*Foreign Exchange Office*)** comporta-se como um aparelho telefônico para conectar-se a **linhas analógicas vindas da operadora (PSTN)** ou de um PABX legado.',
    correctAnalysis:
      'FXS atende terminais analógicos (como faxes), fornecendo tom de discagem e toque; FXO recebe linhas externas da operadora ou de PABX analógico.',
    optionErrors: {
      1: 'Incorreta: os papéis entre FXS (lado estação/terminal) e FXO (lado tronco/linha externa) foram invertidos.',
      2: 'Incorreta: E1 R2 é enlace digital multiplexado (30 canais), não interface direta para fax analógico, e FXS não fecha tronco com operadora.',
      3: 'Incorreta: ISDN PRI é tronco digital de 2 Mbps, e portas PoE alimentam dispositivos Ethernet, não linhas analógicas PSTN.'
    }
  },
  {
    id: 'sarah-8-18',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos e conceitos de **Voz sobre IP (VoIP) e telefonia** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) **PSTN / TDM**\n(II) **Gateway FXS**\n(III) **Gateway FXO**\n(IV) **Tronco E1 (R2 / ISDN PRI)**\n(V) **Tronco SIP (*SIP Trunk*)**\n\nColuna da Direita:\n(A) Enlace físico digital de 2,048 Mbps com até 30 canais simultâneos de voz de 64 kbps ligado à rede pública.\n(B) Conecta linhas telefônicas analógicas externas vindas da operadora (PSTN) ao ambiente VoIP.\n(C) Rede pública comutada tradicional baseada em comutação de circuitos com canais dedicados por chamada.\n(D) Interconexão puramente em camada IP entre o PABX corporativo e a operadora, dispensando enlaces físicos TDM.\n(E) Fornece tom de discagem e corrente de toque para integrar telefones analógicos ou aparelhos de fax ao PABX IP.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-B, IV-A, V-D.',
      'I-C, II-B, III-E, IV-A, V-D.',
      'I-A, II-E, III-B, IV-C, V-D.',
      'I-C, II-E, III-A, IV-B, V-D.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.1.1. Fundamentos VoIP. (I-C) **PSTN/TDM** (comutação de circuitos); (II-E) **FXS** (conecta aparelhos analógicos); (III-B) **FXO** (recebe linhas externas analógicas); (IV-A) **E1 R2/PRI** (tronco digital de 30 canais); (V-D) **SIP Trunk** (interconexão IP com operadora).',
    correctAnalysis:
      'Associação exata: I-C, II-E, III-B, IV-A e V-D.',
    optionErrors: {
      1: 'Incorreta: inverte Gateway FXS (II-E) com Gateway FXO (III-B).',
      2: 'Incorreta: inverte PSTN/TDM (I-C) com Tronco E1 (IV-A).',
      3: 'Incorreta: inverte Gateway FXO (III-B) com Tronco E1 (IV-A).'
    }
  },
  {
    id: 'sarah-8-19',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquitetura **VoIP, terminais, plano de discagem, vantagens e riscos**, analise as afirmativas:\n\nI. Enquanto o **telefone IP** é um hardware dedicado conectado à rede Ethernet (comumente alimentado via PoE), o ***softphone*** é um software executado em computador ou smartphone permitindo mobilidade.\nII. O **plano de discagem (*dial plan*)** define padrões numéricos de ramais internos, prefixos de saída externa e regras de bloqueio ou encaminhamento entre sites.\nIII. Entre os riscos operacionais do VoIP frente à telefonia analógica tradicional está a **dependência de energia elétrica** (nobreaks/PoE) e da qualidade da rede de dados para manter ligações críticas.\nIV. Em uma rede com **PABX IP** e **troncos SIP**, a comutação interna entre ramais consome circuitos físicos TDM dedicados de 64 kbps em par metálico exclusivo na matriz.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.1.1. VoIP. I verdadeira (telefone IP físico × softphone); II verdadeira (papel conceitual do plano de discagem); III verdadeira (dependência de energia/PoE/nobreak e exposição a falhas ou sobrecarga na rede IP, além de riscos como fraude de discagem/*toll fraud*); IV falsa: em VoIP a comunicação entre ramais usa **comutação de pacotes IP** sobre a infraestrutura LAN/WAN compartilhada, sem circuitos TDM exclusivos.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV descreve telefonia TDM analógica, não VoIP.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre a dependência energética e de rede do VoIP.',
      2: 'Incorreta: inclui IV (falsa — VoIP comuta pacotes IP, não circuitos TDM dedicados) e omite II (verdadeira sobre dial plan).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre telefone IP × softphone).'
    }
  },
  {
    id: 'sarah-8-20',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **gateways e troncos de telefonia** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No **E1 com R2 (CAS)**, o canal 16 transporta bits de sinalização de linha associados a cada canal de voz, com os dígitos MFC na própria banda; no **ISDN PRI (CCS)**, o canal 16 é um *D-channel* de mensagens Q.931 comum a todos os canais.\n( ) Um **tronco SIP** depende de um enlace E1 físico até a operadora, pois o SIP apenas sinaliza e o áudio continua trafegando em canais TDM.\n( ) A convergência de voz e dados em redes VoIP reduz custos de cabeamento e facilita ramais remotos, mas exige proteção contra fraudes telefônicas (*toll fraud*) e reserva de energia (UPS) nos switches PoE.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.1.1. VoIP, E1 e Troncos SIP. (1) verdadeira (no E1 R2/CAS o canal 16 leva sinalização associada aos 30 canais e dígitos MFC trafegam em banda; no ISDN PRI/CCS o canal 16 é um *D-channel* comum Q.931); (2) falsa: no **tronco SIP**, tanto a sinalização SIP quanto a mídia de áudio (**RTP**) trafegam integralmente sobre **rede IP**, dispensando enlaces físicos E1/TDM; (3) verdadeira (vantagens × riscos de *toll fraud* e disponibilidade elétrica).',
    correctAnalysis:
      'Gabarito: V – F – V. A segunda afirmativa erra ao afirmar que o tronco SIP depende de enlace E1 físico para transportar o áudio em canais TDM.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre a distinção de sinalização entre E1 R2 (CAS) e ISDN PRI (CCS com D-channel Q.931).',
      1: 'Incorreta: a afirmativa (2) é falsa, pois em um tronco SIP sinalização e mídia RTP trafegam sobre IP, sem enlace físico E1/TDM.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre segurança (toll fraud) e contingência elétrica (UPS/PoE) em VoIP.'
    }
  },
  {
    id: 'sarah-8-21',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **conceitos de telefonia IP**:\n\nPara ligar um aparelho telefônico analógico comum a um gateway VoIP utiliza-se uma porta _____; para receber uma linha analógica externa vinda da operadora pública conecta-se uma porta _____; e o conjunto de regras no PABX IP que define prefixos, permissões e rotas para os ramais denomina-se _____.',
    options: [
      'FXO / FXS / tronco E1 R2',
      'E1 PRI / FXO / softphone',
      'FXS / FXO / plano de discagem',
      'FXS / E1 / plano de discagem'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.1.1. Interfaces VoIP e Dial Plan. Aparelho analógico conecta-se à porta **FXS**; linha analógica da operadora entra na porta **FXO**; e o roteamento lógico de prefixos e ramais é o **plano de discagem** (*dial plan*).',
    correctAnalysis:
      'Respectivamente: FXS, FXO e plano de discagem.',
    optionErrors: {
      0: 'Incorreta: inverte FXO com FXS, e E1 R2 é um link físico digital, não o conjunto de regras de roteamento de ramais.',
      1: 'Incorreta: E1 PRI é tronco digital de 30 canais (não interface de aparelho analógico), e softphone é o cliente de software.',
      3: 'Incorreta: uma linha analógica simples entra em porta FXO, não em interface digital E1.'
    }
  },
  {
    id: 'sarah-8-22',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma chamada interna entre dois telefones IP na mesma matriz corporativa, ambos registram-se no PABX IP central, porém os pacotes de áudio trafegam **diretamente entre os dois aparelhos**, sem passar pelo servidor do PABX. Ao acionar uma ligação externa para a operadora, o áudio passa a ser ancorado no SBC de borda. Que característica arquitetural explica esse comportamento?',
    options: [
      'A sinalização usa caminho separado (via PABX) enquanto a mídia RTP pode fluir ponto a ponto na LAN ou ancorada no SBC na borda externa.',
      'O PABX IP sempre faz proxy da mídia nas chamadas internas, mas comprime o áudio para que o tráfego pareça ponto a ponto na LAN.',
      'A chamada interna usa H.323 com mídia direta, enquanto a externa usa SIP, protocolo que proíbe mídia ponto a ponto.',
      'O SBC ancora o áudio apenas porque a operadora exige transcodificação obrigatória para G.729 em toda chamada externa.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.1.2. Separação entre Sinalização e Mídia. Na arquitetura VoIP, o plano de **controle/sinalização** (ex.: SIP até o PABX) é independente do plano de **mídia** (RTP). Em chamadas internas, após o PABX mediar a oferta **SDP**, os telefones podem trocar **RTP diretamente (*peer-to-peer / direct media*)**, enquanto chamadas externas são **ancoradas** no SBC por segurança, travessia de NAT e ocultação de topologia.',
    correctAnalysis:
      'A separação entre sinalização e mídia permite que o PABX controle o estabelecimento da chamada enquanto o fluxo RTP segue direto entre terminais na LAN ou ancorado no SBC na borda.',
    optionErrors: {
      1: 'Incorreta: o PABX IP não precisa permanecer no caminho da mídia interna quando o fluxo direto (direct media) está habilitado.',
      2: 'Incorreta: o SIP permite mídia direta entre terminais; a ancoragem no SBC é uma decisão de arquitetura e segurança.',
      3: 'Incorreta: a ancoragem no SBC ocorre por segurança, travessia de NAT e ocultação de topologia, não por transcodificação obrigatória.'
    }
  },
  {
    id: 'sarah-8-23',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os protocolos de **sinalização e negociação VoIP** à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) **SIP** (*Session Initiation Protocol*)\n(II) **H.323**\n(III) **MGCP** (*Media Gateway Control Protocol*)\n(IV) **SCCP** (*Skinny Client Control Protocol*)\n(V) **SDP** (*Session Description Protocol*)\n\nColuna da Direita:\n(A) Protocolo mestre-escravo em que um *Call Agent* controla diretamente gateways de mídia sem inteligência autônoma.\n(B) Protocolo proprietário leve da Cisco usado historicamente para comunicação entre telefones IP e o CallManager.\n(C) Descritor embutido na sinalização para negociar codecs suportados, endereços IP e portas UDP da mídia.\n(D) Protocolo textual da IETF (estilo HTTP) amplamente adotado para estabelecer, modificar e encerrar sessões multimídia.\n(E) Conjunto de padrões ITU-T (com H.225/H.245 e Gatekeeper) tradicionalmente usado em sistemas legados de VoIP e videoconferência.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-D, III-A, IV-B, V-C.',
      'I-D, II-E, III-A, IV-B, V-C.',
      'I-D, II-E, III-B, IV-A, V-C.',
      'I-D, II-E, III-A, IV-C, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.1.2. Protocolos de Sinalização VoIP. (I-D) **SIP** (protocolo textual IETF); (II-E) **H.323** (suíte ITU-T com H.225/H.245); (III-A) **MGCP** (arquitetura mestre-escravo *Call Agent* -> gateway); (IV-B) **SCCP** (*Skinny* proprietário Cisco); (V-C) **SDP** (descreve IP, portas e codecs da mídia).',
    correctAnalysis:
      'Associação exata: I-D, II-E, III-A, IV-B e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte SIP (I-D) com H.323 (II-E).',
      2: 'Incorreta: inverte MGCP (III-A) com SCCP (IV-B).',
      3: 'Incorreta: inverte SCCP (IV-B) com SDP (V-C).'
    }
  },
  {
    id: 'sarah-8-24',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **sinalização, mídia RTP/RTCP e travessia de NAT**, analise as afirmativas:\n\nI. Por convenção, cada fluxo de áudio utiliza uma **porta UDP dinâmica par para o RTP** e a **porta ímpar imediatamente seguinte para o RTCP**, que reporta estatísticas de qualidade da sessão.\nII. O recurso **SIP ALG** em firewalls domésticos ou corporativos frequentemente corrompe cabeçalhos ou endereços no corpo **SDP**, causando falhas de áudio unilateral ou queda de chamadas.\nIII. Como o plano de sinalização é separado do plano de mídia, um firewall precisa permitir tanto a porta de controle SIP quanto a faixa dinâmica de portas **UDP do RTP** entre os pontos negociados.\nIV. Quando o **SDP** negocia portas **RTP**, ele fixa obrigatoriamente a porta UDP 5060 para áudio e a porta UDP 5061 para controle RTCP em todas as ligações simultâneas.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.1.2. Sinalização e Mídia. I verdadeira (convenção porta par RTP + ímpar seguinte RTCP em faixa dinâmica, ex.: 16384–32767); II verdadeira (SIP ALG frequentemente reescreve mal pacotes SIP/SDP atrás de NAT); III verdadeira (separação entre controle SIP e fluxos RTP no firewall); IV falsa: **5060/5061** são as portas padrão de **sinalização SIP/SIPS**, nunca portas fixas de mídia RTP/RTCP.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV confunde portas de sinalização SIP/SIPS (5060/5061) com portas dinâmicas de mídia RTP/RTCP.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre a separação de fluxos SIP e RTP em firewalls.',
      1: 'Incorreta: inclui IV (falsa — 5060/5061 são portas SIP/SIPS, não RTP/RTCP) e omite II (verdadeira sobre SIP ALG).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre RTP par e RTCP ímpar).'
    }
  },
  {
    id: 'sarah-8-25',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Para proteger integralmente uma chamada VoIP contra **escuta do áudio** na rede e contra **interceptação ou adulteração da sinalização** entre o telefone IP e o PABX/SBC, qual combinação de protocolos deve ser habilitada?',
    options: [
      'IPsec apenas no tronco com a operadora e SRTP nos telefones, mantendo a sinalização interna em UDP 5060.',
      'SIP sobre TLS para a sinalização e RTP/RTCP comuns, já que o TLS da sinalização também cifra a mídia.',
      'SIP sobre TLS (SIPS) para cifrar a sinalização e SRTP para cifrar e autenticar a mídia.',
      'SRTP para a mídia e SIP em UDP 5060 com autenticação digest, que cifra o conteúdo das mensagens.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.1.2. Segurança em Sinalização e Mídia. Para proteção integral ponta a ponta contra escuta e adulteração, **SIP sobre TLS (SIPS)** cifra a sinalização entre o telefone e o PABX/SBC, enquanto o **SRTP (*Secure RTP*)** criptografa e autentica os pacotes de mídia.',
    correctAnalysis:
      'SIP sobre TLS (SIPS) cifra e protege a sinalização, enquanto o SRTP cifra e autentica a mídia RTP.',
    optionErrors: {
      0: 'Incorreta: manter a sinalização interna em UDP 5060 sem TLS deixa números discados, cabeçalhos SIP e chaves SDP expostos na LAN.',
      1: 'Incorreta: o TLS protege apenas a sinalização SIP; a mídia RTP trafega em fluxo separado e segue em claro sem SRTP.',
      3: 'Incorreta: a autenticação digest protege apenas a verificação de credenciais com hash challenge/response, não cifra o conteúdo das mensagens SIP.'
    }
  },
  {
    id: 'sarah-8-26',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **protocolos de sinalização, SDP e transporte de mídia em redes VoIP**, assinale a afirmação INCORRETA.',
    options: [
      'O SDP é transportado no corpo das mensagens de sinalização para negociar endereço IP, portas de mídia e lista ordenada de codecs suportados.',
      'Diferentemente do SIP (modelo ponto a ponto textual), o MGCP segue arquitetura mestre-escravo em que o Call Agent controla gateways de mídia.',
      'Quando chamadas atravessam NAT, a ativação automática de SIP ALG em roteadores costuma provocar reescritas inconsistentes no SDP e quebrar o áudio.',
      'Após o SDP definir o codec, os pacotes de áudio RTP trafegam sempre encapsulados dentro da mesma sessão TCP da sinalização SIP.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.1.2. Sinalização e Mídia. A alternativa D é **incorreta**: sinalização e mídia são **planos distintos** — mesmo quando a sinalização SIP utiliza TCP ou TLS (5060/5061), a mídia de áudio **RTP** trafega separadamente em datagramas **UDP** nas portas dinâmicas negociadas no SDP (direto entre terminais ou via SBC).',
    correctAnalysis:
      'A afirmação D é falsa porque o fluxo de mídia RTP usa datagramas UDP próprios e não é encapsulado dentro da conexão de sinalização SIP.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): SDP negocia IP, portas UDP dinâmicas e codecs dentro do diálogo SIP.',
      1: 'Incorreta (afirmação verdadeira): MGCP separa inteligência no Call Agent e controle direto sobre media gateways.',
      2: 'Incorreta (afirmação verdadeira): SIP ALG defeituoso é causa frequente de one-way audio e falhas de registro atrás de NAT.'
    }
  },
  {
    id: 'sarah-8-27',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **sinalização e mídia VoIP**:\n\nDentro das mensagens SIP, a negociação de codecs, endereço IP e portas UDP de áudio é feita pelo protocolo _____; o controle estatístico de perda e atraso da mídia utiliza o protocolo _____ na porta ímpar adjacente à porta par do RTP; e a proteção criptográfica da mídia de voz em trânsito é provida pelo _____.',
    options: [
      'MGCP / RTCP / SIP ALG',
      'SDP / SCCP / TLS',
      'RTCP / SDP / SRTP',
      'SDP / RTCP / SRTP'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.1.2. Sinalização e Transporte de Mídia. Parâmetros de mídia são negociados pelo **SDP**; telemetria de qualidade na porta ímpar seguinte é o **RTCP**; e criptografia da mídia RTP é o **SRTP**.',
    correctAnalysis:
      'Respectivamente: SDP, RTCP e SRTP.',
    optionErrors: {
      0: 'Incorreta: MGCP é protocolo de controle mestre-escravo (não descritor de mídia), e SIP ALG trata de NAT (não cifra mídia).',
      1: 'Incorreta: SCCP é protocolo proprietário Cisco (não telemetria RTP), e TLS protege a sinalização SIP (enquanto a mídia usa SRTP).',
      2: 'Incorreta: inverte RTCP (telemetria de mídia) com SDP (negociação de sessão/codecs).'
    }
  },
  {
    id: 'sarah-8-28',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considerando uma chamada VoIP com codec **G.711** (64 kbps nominais) e pacotização de **20 ms** (50 pacotes por segundo, gerando 160 bytes de payload por pacote), qual é a **largura de banda por chamada em um sentido** na camada 3 (com 40 bytes de cabeçalhos IP + UDP + RTP) e na camada 2 Ethernet (somando mais 18 bytes de cabeçalho/FCS Ethernet)?',
    options: [
      '80 kbps na camada 3 e 87,2 kbps na camada 2 Ethernet.',
      '64 kbps na camada 3 e 80 kbps na camada 2 Ethernet.',
      '48 kbps na camada 3 e 55,2 kbps na camada 2 Ethernet.',
      '24 kbps na camada 3 e 31,2 kbps na camada 2 Ethernet.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.1.3. Cálculo de Banda — G.711 (20 ms, um sentido). A 20 ms temos **50 pps** e payload de `64.000 × 0,020 / 8 = 160 B`. Em L3: `160 B + 40 B (IP 20 + UDP 8 + RTP 12) = 200 B/pacote` -> `200 × 8 bits × 50 pps = 80.000 bps = 80 kbps`. Em L2 Ethernet (+ 18 B): `218 B/quadro` -> `218 × 8 × 50 = 87.200 bps = 87,2 kbps`.',
    correctAnalysis:
      'Em 20 ms (50 pps), G.711 gera 200 B em L3 (80 kbps) e 218 B em Ethernet L2 (87,2 kbps) por sentido.',
    optionErrors: {
      1: 'Incorreta: 64 kbps corresponde apenas ao payload de áudio G.711 sem os 40 bytes de IP/UDP/RTP.',
      2: 'Incorreta: 48 kbps / 55,2 kbps usa payload errado de 80 bytes em vez de 160 bytes.',
      3: 'Incorreta: 24 kbps (L3) e 31,2 kbps (L2) são os valores do codec comprimido G.729 a 20 ms, não do G.711.'
    }
  },
  {
    id: 'sarah-8-29',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um enlace WAN corporativo, configura-se o codec **G.729** (8 kbps nominais) com intervalo de pacotização de **20 ms** (50 pacotes por segundo, 20 bytes de payload por pacote). Somando 40 bytes de cabeçalhos IP/UDP/RTP e, em seguida, 18 bytes de cabeçalho/FCS Ethernet, quais são as taxas reais por sentido em **camada 3** e **camada 2 Ethernet**?',
    options: [
      '8 kbps na camada 3 e 15,2 kbps na camada 2 Ethernet.',
      '16 kbps na camada 3 e 23,2 kbps na camada 2 Ethernet.',
      '24 kbps na camada 3 e 31,2 kbps na camada 2 Ethernet.',
      '80 kbps na camada 3 e 87,2 kbps na camada 2 Ethernet.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.1.3. Cálculo de Banda — G.729 (20 ms, um sentido). A 20 ms são **50 pps** com payload de `8.000 × 0,020 / 8 = 20 B`. Em L3: `20 B + 40 B (IP/UDP/RTP) = 60 B/pacote` -> `60 × 8 × 50 = 24.000 bps = 24 kbps`. Em Ethernet L2 (+ 18 B): `78 B/quadro` -> `78 × 8 × 50 = 31.200 bps = 31,2 kbps`.',
    correctAnalysis:
      'Em 20 ms (50 pps), G.729 resulta em 60 B em L3 (24 kbps) e 78 B em Ethernet L2 (31,2 kbps) por sentido.',
    optionErrors: {
      0: 'Incorreta: 8 kbps ignora os 40 bytes dos cabeçalhos IP, UDP e RTP em camada 3.',
      1: 'Incorreta: 16 kbps soma apenas 20 bytes de cabeçalho IP sem considerar UDP (8 B) e RTP (12 B).',
      3: 'Incorreta: 80 kbps (L3) e 87,2 kbps (L2) pertencem ao codec G.711 de 64 kbps, não ao G.729.'
    }
  },
  {
    id: 'sarah-8-30',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os **codecs de áudio VoIP** à esquerda com suas características técnicas e qualidade típica (MOS) à direita.\n\nColuna da Esquerda:\n(I) **G.711**\n(II) **G.729**\n(III) **G.722**\n(IV) **Opus**\n(V) **iLBC**\n\nColuna da Direita:\n(A) Codec de banda larga (*wideband* / HD Voice, 7 kHz) tipicamente a 64 kbps com MOS superior (~4,5) em LAN.\n(B) Codec altamente flexível e adaptativo (6 a 510 kbps, banda estreita a *fullband*), padrão moderno em WebRTC e VoIP.\n(C) Codec não comprimido (PCM 64 kbps, variantes μ-law/A-law) com baixa exigência de CPU e MOS típico ~4,1–4,4.\n(D) Codec livre projetado especificamente para tolerar degradação graciosa em redes com alta perda de pacotes.\n(E) Codec comprimido a 8 kbps muito usado em links WAN restritos, com maior custo de processamento e MOS ~3,9.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-A, IV-B, V-D.',
      'I-E, II-C, III-A, IV-B, V-D.',
      'I-C, II-E, III-B, IV-A, V-D.',
      'I-C, II-E, III-A, IV-D, V-B.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.1.3. Codecs VoIP. (I-C) **G.711** (PCM 64 kbps, baixo CPU, MOS ~4,1–4,4); (II-E) **G.729** (8 kbps para WAN, MOS ~3,9); (III-A) **G.722** (*wideband*/HD 7 kHz, MOS ~4,5); (IV-B) **Opus** (taxa adaptativa até *fullband*); (V-D) **iLBC** (*Internet Low Bitrate Codec*, resiliente à perda de pacotes).',
    correctAnalysis:
      'Associação exata: I-C, II-E, III-A, IV-B e V-D.',
    optionErrors: {
      1: 'Incorreta: inverte G.711 (I-C) com G.729 (II-E).',
      2: 'Incorreta: inverte G.722 (III-A) com Opus (IV-B).',
      3: 'Incorreta: inverte Opus (IV-B) com iLBC (V-D).'
    }
  },
  {
    id: 'sarah-8-31',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **G.711, pacotização, transcodificação e VAD**, analise as afirmativas:\n\nI. O codec **G.711** possui duas leis de quantização não linear: **μ-law** (padrão na América do Norte e Japão) e **A-law** (padrão na Europa, Brasil e maior parte do mundo).\nII. Reduzir o tempo de pacotização de **20 ms** para **10 ms** diminui o atraso de empacotamento, porém dobra a taxa de pacotes por segundo (de 50 para 100 pps) e eleva a sobrecarga dos cabeçalhos IP/UDP/RTP.\nIII. A **transcodificação** é necessária quando dois terminais não negociam um codec comum, consumindo recursos de **DSP/CPU** em gateways ou SBCs e tendendo a reduzir o **MOS** percebido.\nIV. O **VAD** é recomendado em chamadas de **fax e modem** sobre G.711, pois a supressão de silêncio preserva os tons contínuos da transmissão.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.1.3. Codecs, Transcodificação e VAD. I verdadeira (G.711 μ-law × A-law); II verdadeira (10 ms -> 100 pps e maior overhead por segundo); III verdadeira (transcodificação consome DSP e reduz MOS); IV falsa: em chamadas de **fax e modem**, o **VAD deve ser desativado** (*modem/fax pass-through*), pois a supressão de silêncio e geração de ruído de conforto (CNG) corrompem os tons portadores contínuos da transmissão.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV erra ao recomendar VAD para fax/modem, onde ele precisa ser desativado para não corromper os tons contínuos.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre custo de DSP e impacto no MOS da transcodificação.',
      1: 'Incorreta: inclui IV (falsa — para fax/modem o VAD deve ser desativado em modo pass-through) e omite II (verdadeira sobre pacotização 10 ms × 20 ms).',
      2: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre G.711 μ-law × A-law).'
    }
  },
  {
    id: 'sarah-8-32',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **codecs VoIP, pacotização e otimização de tráfego**, assinale a afirmação INCORRETA.',
    options: [
      'O intervalo de pacotização padrão de 20 ms gera 50 pacotes por segundo em cada sentido da chamada de voz.',
      'A supressão de silêncio (VAD) economiza largura de banda média ao pausar o envio de pacotes RTP quando o interlocutor não está falando.',
      'O codec G.722 entrega áudio em banda larga (HD Voice, 7 kHz) mantendo taxa nominal de 64 kbps, oferecendo qualidade superior ao G.711.',
      'Alterar a pacotização de 20 ms para 10 ms em uma chamada G.729 reduz pela metade o overhead total dos cabeçalhos IP/UDP/RTP por segundo.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.1.3. Pacotização e Overhead de Codecs. A alternativa D é **incorreta**: reduzir o intervalo de pacotização de 20 ms para **10 ms** faz o terminal enviar **100 pacotes por segundo** em vez de 50 pps, **dobrando o overhead** de cabeçalhos IP/UDP/RTP (+ Ethernet) por segundo (no G.729 a 10 ms, a banda L3 sobe de 24 kbps para 40 kbps).',
    correctAnalysis:
      'A afirmação D é falsa porque pacotes menores (10 ms) aumentam a taxa para 100 pps, dobrando o overhead de cabeçalhos por segundo em vez de reduzi-lo.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): 1.000 ms / 20 ms = 50 pps por sentido.',
      1: 'Incorreta (afirmação verdadeira): VAD interrompe transmissões RTP em pausas de fala economizando banda agregada.',
      2: 'Incorreta (afirmação verdadeira): G.722 amplia a faixa vocal até 7 kHz a 64 kbps com melhor inteligibilidade (HD Voice).'
    }
  },
  {
    id: 'sarah-8-33',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No planejamento de uma ligação VoIP entre duas unidades, estimam-se os seguintes atrasos em **um sentido**: codificação e empacotamento = **25 ms**; serialização e filas = **15 ms**; propagação no enlace WAN = **55 ms**; e *jitter buffer* no receptor = **40 ms**. Qual é o **atraso total boca a ouvido (*one-way*)** e sua conformidade com a recomendação **ITU-T G.114**?',
    options: [
      '110 ms, excedendo o limite de 100 ms da ITU-T G.114.',
      '135 ms, atendendo ao limite recomendado de até 150 ms da ITU-T G.114.',
      '185 ms, ultrapassando tanto os 150 ms recomendados quanto os 180 ms toleráveis.',
      '270 ms, exigindo que chamadas acima de 150 ms sejam derrubadas pela G.114.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.1.4. Orçamento de Atraso (*Delay Budget*) e ITU-T G.114. Somando todos os componentes unidirecionais: `25 ms (codificação/empacotamento) + 15 ms (serialização/filas) + 55 ms (propagação WAN) + 40 ms (jitter buffer) = 135 ms`. Pela **ITU-T G.114**, atrasos boca a ouvido **≤ 150 ms** são recomendados para conversação interativa sem degradação perceptível (e até 400 ms permanecem aceitáveis como teto limite).',
    correctAnalysis:
      'Orçamento unidirecional: 25 + 15 + 55 + 40 = 135 ms, dentro do recomendado (<= 150 ms) pela ITU-T G.114.',
    optionErrors: {
      0: 'Incorreta: 110 ms omite os 25 ms de codificação/empacotamento, e o limite recomendado G.114 é 150 ms (não 100 ms).',
      2: 'Incorreta: a soma correta resulta em 135 ms (não 185 ms), e o teto máximo tolerável da G.114 chega a 400 ms.',
      3: 'Incorreta: 270 ms duplica o atraso de ida e volta (RTT) em vez de somar o orçamento one-way de 135 ms.'
    }
  },
  {
    id: 'sarah-8-34',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um telefone IP recebendo áudio sobre enlace com variação de atraso moderada, o administrador ajusta um **jitter buffer fixo** para um valor bem mais alto (por exemplo, 120 ms) em vez de mantê-lo adaptativo e enxuto. Qual é o efeito colateral direto dessa mudança na chamada?',
    options: [
      'Reduz a latência total, pois com buffer maior os pacotes passam a ser reproduzidos assim que chegam.',
      'Aumenta a perda percebida, pois pacotes atrasados em até 120 ms passam a ser descartados pelo buffer.',
      'Reduz os cortes por variação de chegada, mas adiciona latência constante de 120 ms ao atraso total da chamada.',
      'Elimina o eco percebido pelo falante, pois o buffer maior absorve o sinal refletido antes da reprodução.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.1.4. Jitter Buffer Fixo × Adaptativo. O ***jitter buffer*** troca variação de atraso (*jitter*) por **latência adicional**: reter pacotes em um buffer fixo de 120 ms absorve oscilações maiores sem descartar pacotes por atraso tardio, mas impõe essa espera constante ao atraso boca a ouvido da conversa.',
    correctAnalysis:
      'Um jitter buffer fixo elevado reduz cortes causados por variação de chegada, porém acrescenta latência constante de 120 ms ao atraso total da ligação.',
    optionErrors: {
      0: 'Incorreta: um buffer maior retém os pacotes por mais tempo antes da reprodução, aumentando a latência total.',
      1: 'Incorreta: ocorre o inverso — com profundidade de 120 ms o buffer tolera atrasos maiores e reduz o descarte de pacotes.',
      3: 'Incorreta: atraso adicional torna eventual eco ainda mais perceptível; o jitter buffer não atua como cancelador de eco.'
    }
  },
  {
    id: 'sarah-8-35',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as métricas e mecanismos de **qualidade de voz (VoIP)** à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) **ITU-T G.114**\n(II) **MOS** (*Mean Opinion Score*)\n(III) ***R-Factor*** (*E-Model*)\n(IV) ***Jitter Buffer* Adaptativo**\n(V) **Cancelamento de Eco (EC)**\n\nColuna da Direita:\n(A) Escala objetiva de 0 a 100 derivada de atraso, perda e codec para estimar a qualidade da chamada.\n(B) Memória de recepção que ajusta dinamicamente sua profundidade para absorver variação de atraso minimizando latência extra.\n(C) Subtrai o sinal de voz refletido que se torna audível ao interlocutor quando o atraso unidirecional supera ~20–25 ms.\n(D) Escala subjetiva/estimada de 1 (péssimo) a 5 (excelente) usada para expressar a clareza percebida da voz.\n(E) Norma que define ≤ 150 ms como atraso unidirecional recomendado e até 400 ms como limite máximo aceitável.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-A, III-D, IV-B, V-C.',
      'I-E, II-D, III-A, IV-B, V-C.',
      'I-D, II-E, III-A, IV-B, V-C.',
      'I-E, II-D, III-A, IV-C, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.1.4. Qualidade de Voz. (I-E) **ITU-T G.114** (≤ 150 ms / 400 ms); (II-D) **MOS** (escala 1–5); (III-A) ***R-Factor*** (escala 0–100 do *E-Model*); (IV-B) ***Jitter Buffer* Adaptativo**; (V-C) **Cancelamento de Eco**.',
    correctAnalysis:
      'Associação exata: I-E, II-D, III-A, IV-B e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte MOS (II-D) com R-Factor (III-A).',
      2: 'Incorreta: inverte ITU-T G.114 (I-E) com MOS (II-D).',
      3: 'Incorreta: inverte Jitter Buffer Adaptativo (IV-B) com Cancelamento de Eco (V-C).'
    }
  },
  {
    id: 'sarah-8-36',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **requisitos de qualidade de voz, atraso, eco e métricas**, analise as afirmativas:\n\nI. Segundo a recomendação **ITU-T G.114**, o atraso unidirecional recomendado é de até **150 ms** (com teto de **400 ms** como limite máximo tolerável para planejamento geral).\nII. Como referência operacional para voz corporativa, busca-se **jitter < 30 ms** e **perda de pacotes < 1%**.\nIII. O **eco** passa a ser perceptível pelo falante quando o atraso de ida e volta supera cerca de 25–50 ms (unidirecional ~20–25 ms), tornando essencial o cancelamento de eco em gateways e terminais.\nIV. No **E-Model (R-Factor)**, valores próximos de 20 representam chamadas de alta definição perfeitas, enquanto valores acima de 80 indicam voz completamente ininteligível.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.1.4. Qualidade VoIP. I verdadeira (ITU-T G.114: 150 ms recomendado / 400 ms teto); II verdadeira (jitter < 30 ms e perda < 1%); III verdadeira (relação entre atraso e percepção do eco); IV falsa: no ***R-Factor*** (0–100), **valores maiores indicam melhor qualidade** (`R ≥ 80` = alta qualidade / MOS > 4,0; `R < 50` = inaceitável).',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV inverte a escala do R-Factor (quanto maior até 100, melhor a qualidade).',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre a relação entre atraso e necessidade de cancelamento de eco.',
      1: 'Incorreta: inclui IV (falsa — escala R-Factor invertida) e omite II (verdadeira sobre jitter < 30 ms e perda < 1%).',
      2: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre ITU-T G.114).'
    }
  },
  {
    id: 'sarah-8-37',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **métricas de qualidade VoIP e jitter buffer** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A escala **MOS (*Mean Opinion Score*)** varia de 0 a 100, enquanto o ***R-Factor*** do modelo **E-Model** varia apenas de 1 a 5.\n( ) Pacotes RTP que chegam ao telefone depois que o tempo de reprodução no *jitter buffer* já expirou são descartados e contabilizados na prática como pacotes perdidos para o áudio.\n( ) A recomendação **ITU-T G.114** considera atrasos unidirecionais acima de **400 ms** inaceitáveis para o planejamento geral de redes de voz.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.1.4. Qualidade VoIP. (1) falsa: as escalas estão **invertidas** — **MOS** varia de **1 a 5** e ***R-Factor*** varia de **0 a 100**; (2) verdadeira (*late loss* quando o pacote chega tarde demais para o *jitter buffer*); (3) verdadeira (400 ms como teto máximo da ITU-T G.114).',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa inverte as faixas numéricas de MOS (1–5) e R-Factor (0–100).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois MOS vai de 1 a 5 e R-Factor vai de 0 a 100.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre o descarte de pacotes atrasados pelo jitter buffer.',
      2: 'Incorreta: a afirmativa (3) é verdadeira sobre o limite máximo de 400 ms da ITU-T G.114.'
    }
  },
  {
    id: 'sarah-8-38',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **latência, jitter, perda de pacotes e métricas de voz**, assinale a afirmação INCORRETA.',
    options: [
      'Aumentar o jitter buffer fixo para 150 ms elimina pacotes perdidos na rede ao solicitar retransmissão UDP ao telefone transmissor.',
      'O jitter buffer adaptativo ajusta sua profundidade conforme a variação de atraso medida na rede, equilibrando suavidade e latência.',
      'Atrasos unidirecionais até 150 ms são recomendados pela norma ITU-T G.114, sendo 400 ms o limite máximo tolerável em redes de voz.',
      'Quando a perda de pacotes ultrapassa 1% ou o atraso excede o jitter buffer, ocorrem cortes perceptíveis que degradam a nota MOS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.1.4. Qualidade de Voz VoIP. A alternativa A é **incorreta**: o ***jitter buffer*** apenas armazena temporariamente pacotes que **já chegaram** para compensar variações de atraso — ele não recupera pacotes perdidos no trajeto nem solicita retransmissão UDP/RTP ao transmissor; além disso, fixá-lo em 150 ms eleva diretamente o atraso total da chamada.',
    correctAnalysis:
      'A afirmação A é falsa porque pacotes perdidos na rede não são recuperados pelo jitter buffer e o transporte RTP sobre UDP não realiza retransmissão automática.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): o jitter buffer adaptativo redimensiona-se dinamicamente para conter o jitter com menor latência adicional.',
      2: 'Incorreta (afirmação verdadeira): 150 ms é o limite recomendado e 400 ms o teto tolerável segundo a recomendação ITU-T G.114.',
      3: 'Incorreta (afirmação verdadeira): perdas acima de 1% e descarte por estouro de atraso (late loss) causam falhas audíveis e queda no MOS.'
    }
  },
  {
    id: 'sarah-8-39',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma filial hospitalar possui telefones IP registrados remotamente no cluster **CUCM** da matriz pela rede WAN e dispõe de um roteador de voz local ligado a um tronco de contingência com a operadora. Em caso de queda do link WAN, deseja-se que os telefones da filial passem a registrar-se automaticamente no roteador local, mantendo chamadas internas e acesso à PSTN até o restabelecimento da WAN. Qual recurso Cisco atende a esse cenário?',
    options: [
      'Habilitar o Cisco Unity Connection local em modo cluster para assumir o roteamento SIP das ligações externas.',
      'Configurar SRST (Survivable Remote Site Telephony) no roteador da filial para assumir o registro em contingência.',
      'Substituir o gateway local por um servidor TFTP dedicado para manter os arquivos XML de discagem offline.',
      'Migrar os ramais da filial para um CUBE de borda exclusivamente para traduzir áudio entre G.711 e G.729.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.1. Cisco IP Telephony ou equivalentes. O **SRST (*Survivable Remote Site Telephony*)** permite que um roteador Cisco na filial assuma temporariamente o controle básico de chamadas e o registro dos telefones IP quando a conectividade WAN com o cluster **CUCM** central é perdida, retornando ao modo normal automaticamente após a recuperação do link.',
    correctAnalysis:
      'O SRST fornece sobrevivência de telefonia na filial durante falhas de WAN até o CUCM central.',
    optionErrors: {
      0: 'Incorreta: o Cisco Unity Connection é a plataforma de correio de voz e atendimento automático, não o controlador de sobrevivência de chamadas na filial.',
      2: 'Incorreta: servidor TFTP entrega apenas arquivos de configuração na inicialização dos telefones, não processa sinalização nem encaminha chamadas.',
      3: 'Incorreta: CUBE atua como Session Border Controller na interconexão de troncos SIP/mídia, não como substituto de contingência para queda de WAN do CUCM.'
    }
  },
  {
    id: 'sarah-8-40',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os componentes de **telefonia IP corporativa (Cisco)** à esquerda com suas funções principais à direita.\n\nColuna da Esquerda:\n(I) **CUCM *Publisher***\n(II) **CUCM *Subscriber***\n(III) **CUBE (*Session Border Controller*)**\n(IV) **Cisco Unity Connection**\n(V) **CME (*CallManager Express*)**\n\nColuna da Direita:\n(A) Servidor de processamento de chamadas em cluster que registra telefones e roteia ligações com redundância.\n(B) Elemento de borda na fronteira com a operadora para segurança, terminação de troncos SIP e adaptação de mídia.\n(C) Plataforma de correio de voz (*voicemail*) e atendimento automático integrada ao ambiente de telefonia.\n(D) Solução de controle de chamadas embarcada em roteadores IOS indicada para unidades pequenas e autônomas.\n(E) Nó primário do cluster que hospeda a base de dados gravável de configuração e a replica aos demais nós.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-A, II-E, III-B, IV-C, V-D.',
      'I-E, II-A, III-B, IV-C, V-D.',
      'I-E, II-A, III-C, IV-B, V-D.',
      'I-E, II-A, III-B, IV-D, V-C.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.1. Cisco IP Telephony. (I-E) **CUCM Publisher** (base gravável e replicação); (II-A) **CUCM Subscriber** (processamento de chamadas e registro); (III-B) **CUBE/SBC** (borda SIP/mídia com operadora); (IV-C) **Unity Connection** (correio de voz/URA); (V-D) **CME** (PABX IP embarcado em roteador para sites menores).',
    correctAnalysis:
      'Associação exata: I-E, II-A, III-B, IV-C e V-D.',
    optionErrors: {
      0: 'Incorreta: inverte CUCM Publisher (I-E) com CUCM Subscriber (II-A).',
      2: 'Incorreta: inverte CUBE (III-B) com Cisco Unity Connection (IV-C).',
      3: 'Incorreta: inverte Cisco Unity Connection (IV-C) com CME (V-D).'
    }
  },
  {
    id: 'sarah-8-41',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **arquitetura CUCM e soluções equivalentes de telefonia IP**, analise as afirmativas:\n\nI. Ao inicializar na rede corporativa, o telefone IP em ambiente **CUCM** obtém parâmetros de rede via DHCP (como a *Option 150*) e baixa seu arquivo de configuração XML via **TFTP** antes de concluir o registro.\nII. Em um cluster **CUCM**, os nós ***Subscriber*** executam o registro dos terminais e o processamento de chamadas, distribuindo carga e oferecendo alta disponibilidade ao lado do *Publisher*.\nIII. Plataformas como **Asterisk**, **FreePBX**, **3CX** e **Yeastar** desempenham papel equivalente de PABX IP, permitindo gerenciar ramais SIP, planos de discagem, filas de atendimento e troncos com operadoras.\nIV. O **Cisco Unity Connection** atua exclusivamente como *Session Border Controller* (SBC) de borda para encerrar troncos SIP públicos em substituição ao roteador CUBE.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.1. Cisco IP Telephony e Equivalentes. I verdadeira (DHCP Option 150 -> download XML via TFTP -> registro no CUCM); II verdadeira (papel dos *Subscribers* no cluster); III verdadeira (equivalentes abertos e comerciais como Asterisk/FreePBX, 3CX e Yeastar); IV falsa: o **Unity Connection** é a solução de **correio de voz e atendimento automático**, enquanto a função de SBC de borda pertence ao **CUBE**.',
    correctAnalysis:
      'Gabarito: Somente I, II e III estão corretas. A afirmativa IV atribui ao Unity Connection o papel de SBC de borda que cabe ao CUBE.',
    optionErrors: {
      0: 'Incorreta: omite a afirmativa III, verdadeira sobre plataformas equivalentes (Asterisk/FreePBX, 3CX, Yeastar).',
      1: 'Incorreta: inclui IV (falsa — Unity Connection é voicemail, não SBC) e omite II (verdadeira sobre Subscribers do CUCM).',
      3: 'Incorreta: inclui IV (falsa) e omite I (verdadeira sobre DHCP Option 150 e TFTP no boot do telefone IP).'
    }
  },
  {
    id: 'sarah-8-42',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **CUCM, CUBE, CME e SRST** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Enquanto o **CME (*CallManager Express*)** opera como PABX IP permanente embarcado em roteador para unidades pequenas, o **SRST** atua apenas em contingência quando a filial perde contato WAN com o CUCM central.\n( ) Na borda entre o PABX IP corporativo e o tronco SIP da operadora, o **SBC / CUBE** oculta a topologia interna, aplica regras de segurança e normaliza diferenças de cabeçalhos SIP ou codecs.\n( ) Caso o servidor **CUCM *Publisher*** seja reiniciado para manutenção, todos os telefones IP registrados nos nós ***Subscriber*** caem imediatamente e ficam impossibilitados de realizar chamadas até o retorno do *Publisher*.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – F – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.1. Cisco IP Telephony. (1) verdadeira (CME é controlador autônomo permanente; SRST é modo de sobrevivência temporário na queda WAN do CUCM); (2) verdadeira (funções clássicas de SBC/CUBE na borda); (3) falsa: se o **Publisher** ficar indisponível, os **Subscribers** mantêm o registro dos telefones e o processamento de chamadas normalmente (apenas alterações administrativas graváveis no banco ficam restritas até a volta do Publisher).',
    correctAnalysis:
      'Gabarito: V – V – F. A terceira afirmativa erra ao afirmar que a queda do Publisher derruba chamadas e registros atendidos pelos Subscribers.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira sobre a distinção entre CME autônomo e SRST de contingência.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre o papel do SBC/CUBE na borda com a operadora.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois os Subscribers continuam processando chamadas e registros quando o Publisher está fora do ar.'
    }
  },
  {
    id: 'sarah-8-43',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **plataformas de telefonia IP**:\n\nNo ambiente Cisco CUCM, os telefones baixam seus arquivos de configuração XML a partir do servidor _____; na borda com a operadora, o isolamento de segurança e a terminação de troncos SIP públicos ficam a cargo do _____; e, em ecossistemas equivalentes de código aberto, um motor amplamente adotado como PABX IP é o _____.',
    options: [
      'SRST / CME / Unity Connection',
      'TFTP / Unity Connection / SRST',
      'CUBE / TFTP / Asterisk',
      'TFTP / CUBE / Asterisk'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.1. Cisco IP Telephony e Equivalentes. No CUCM, o servidor **TFTP** entrega os arquivos de configuração XML aos telefones; o **CUBE** atua como SBC na borda com a operadora; e o **Asterisk** (base de soluções como FreePBX) é o motor aberto clássico de PABX IP.',
    correctAnalysis:
      'Respectivamente: TFTP, CUBE e Asterisk.',
    optionErrors: {
      0: 'Incorreta: SRST é sobrevivência de filial, CME é PABX embarcado (não SBC de borda) e Unity Connection é correio de voz.',
      1: 'Incorreta: Unity Connection provê correio de voz/URA (não terminação SBC de borda), e SRST é contingência Cisco.',
      2: 'Incorreta: inverte TFTP (entrega de configurações aos telefones) com CUBE (SBC na borda).'
    }
  },
  {
    id: 'sarah-8-44',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma unidade de atendimento, cada estação possui um único ponto de rede conectado a um **telefone IP com switch interno** e um computador conectado atrás desse telefone. Na porta de acesso do switch, configuram-se **VLAN 10 para dados** e **Voice VLAN 20 para voz**. Como trafegam os quadros nesse enlace físico compartilhado?',
    options: [
      'Os quadros de voz saem do telefone com tag 802.1Q da VLAN 20 e os quadros do PC seguem sem tag na VLAN 10.',
      'Os quadros do PC recebem tag 802.1Q da VLAN 10 e os quadros de voz trafegam sem tag nativa na VLAN 20.',
      'Ambos os dispositivos enviam quadros sem tag e o switch separa voz e dados pelo endereço MAC de origem.',
      'O switch interno do telefone encapsula o tráfego do PC dentro de VLAN 20, usando apenas um domínio L2.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.2. VLAN de voz em porta de acesso. Quando a porta do switch combina uma **VLAN de acesso (dados)** e uma **Voice VLAN**, o telefone IP utiliza seu switch interno de 3 portas para enviar e receber pacotes de voz **tagueados em IEEE 802.1Q** na VLAN 20, enquanto o computador atrás do aparelho envia quadros **sem tag (*untagged*)** associados à VLAN 10 de dados.',
    correctAnalysis:
      'Na porta com Voice VLAN, o tráfego do telefone trafega tagueado (802.1Q) na VLAN 20 e o do PC trafega sem tag na VLAN 10.',
    optionErrors: {
      1: 'Incorreta: o comportamento é inverso — a voz é tagueada em 802.1Q na Voice VLAN e os dados do PC seguem sem tag na VLAN de acesso.',
      2: 'Incorreta: a separação entre Voice VLAN e VLAN de acesso na mesma porta física depende de marcação 802.1Q para os quadros de voz.',
      3: 'Incorreta: misturar voz e dados na VLAN 20 anula a segmentação lógica e expõe a telefonia ao tráfego do computador.'
    }
  },
  {
    id: 'sarah-8-45',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em redes corporativas, qual mecanismo padrão de camada 2 permite que o switch de acesso informe dinamicamente ao telefone IP o **ID da VLAN de voz** logo após o enlace subir?',
    options: [
      'Protocolo VTP, que propaga o ID da VLAN de voz do switch diretamente para o telefone IP.',
      'Anúncio automático via CDP ou LLDP-MED com TLV de política de rede (Network Policy).',
      'Autenticação 802.1X com VLAN dinâmica, obrigatória para que o telefone descubra a VLAN de voz.',
      'Opção DHCP 150 entregue na VLAN de dados, que informa ao telefone o ID da VLAN de voz.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.2. Descoberta da Voice VLAN. Switches anunciam o identificador da VLAN de voz aos telefones IP por meio de protocolos de descoberta em camada 2: **CDP** (em ambientes Cisco) ou o padrão aberto **LLDP-MED (*Link Layer Discovery Protocol – Media Endpoint Discovery*)** utilizando o TLV *Network Policy*, antes mesmo de o telefone solicitar IP via DHCP na VLAN de voz. VTP sincroniza VLANs apenas entre switches, VLAN dinâmica via 802.1X é opcional e não é o mecanismo padrão de descoberta da Voice VLAN, e a opção DHCP 150 informa o servidor TFTP.',
    correctAnalysis:
      'O ID da Voice VLAN é anunciado em camada 2 pelo switch por meio de CDP ou LLDP-MED (Network Policy TLV).',
    optionErrors: {
      0: 'Incorreta: o VTP sincroniza VLANs entre switches, não com terminais.',
      2: 'Incorreta: VLAN dinâmica via 802.1X é opcional e não é o mecanismo padrão de descoberta da VLAN de voz.',
      3: 'Incorreta: a opção DHCP 150 informa o servidor TFTP, não a VLAN de voz.'
    }
  },
  {
    id: 'sarah-8-46',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos envolvidos na arquitetura de **VLAN de voz** à esquerda com suas funções técnicas à direita.\n\nColuna da Esquerda:\n(I) **Switch interno do telefone IP**\n(II) **Tag IEEE 802.1Q da Voice VLAN**\n(III) **Campo 802.1p (CoS 5)**\n(IV) **LLDP-MED (*Network Policy*)**\n(V) **VLAN de acesso (*Data VLAN*)**\n\nColuna da Direita:\n(A) Encaminha os quadros sem tag provenientes da estação de trabalho ligada em cascata.\n(B) Interliga fisicamente a porta de rede do switch, a CPU do telefone e a porta para o PC.\n(C) Anuncia em camada 2 o ID da VLAN de voz e a prioridade L2 ao terminal recém-conectado.\n(D) Identifica os quadros de voz do telefone no enlace compartilhado com a estação.\n(E) Marca prioridade de camada 2 de 3 bits nos quadros de áudio tagueados.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-B, III-E, IV-C, V-A.',
      'I-B, II-D, III-C, IV-E, V-A.',
      'I-B, II-E, III-D, IV-C, V-A.',
      'I-B, II-D, III-E, IV-C, V-A.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.2. VLAN de voz. (I-B) O **switch interno** possui 3 interfaces (uplink, CPU do telefone e porta PC); (II-D) a **tag 802.1Q** distingue quadros da Voice VLAN no cabo compartilhado; (III-E) **CoS 5** ocupa os 3 bits PCP (802.1p) do cabeçalho 802.1Q; (IV-C) **LLDP-MED** anuncia a política de VLAN e prioridade; (V-A) a **VLAN de acesso** atende aos quadros sem tag do PC.',
    correctAnalysis:
      'Associação exata: I-B, II-D, III-E, IV-C e V-A.',
    optionErrors: {
      0: 'Incorreta: inverte o papel do switch interno do telefone (I-B) com o da tag 802.1Q da Voice VLAN (II-D).',
      1: 'Incorreta: troca o campo CoS 5 (III-E) pelo anúncio LLDP-MED (IV-C).',
      2: 'Incorreta: inverte a função da tag 802.1Q (II-D) com a marcação de prioridade CoS 5 (III-E).'
    }
  },
  {
    id: 'sarah-8-47',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **segmentação e segurança em VLANs de voz**, analise as afirmativas:\n\nI. Separar telefones IP em uma **Voice VLAN** dedicada reduz o escopo de *broadcast* de dados e dificulta a interceptação de chamadas (*sniffing*) ou *ARP spoofing* originados na sub-rede dos computadores.\nII. Configurar a porta do usuário como **access + voice VLAN** em vez de um *trunk* amplo restringe as VLANs aceitas e mitiga ataques de *VLAN hopping*.\nIII. Como o PC está fisicamente atrás do telefone, ele recebe automaticamente um segundo IP da **Voice VLAN** para evitar roteamento entre sub-redes.\nIV. Regras de firewall ou ACLs entre a VLAN de dados e a Voice VLAN podem impedir que estações de usuários acessem diretamente a interface administrativa ou servidores críticos de telefonia.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.2. Segmentação e Segurança da Voz. I verdadeira (isolamento de *broadcast* e redução de exposição a ataques L2 da rede de usuários); II verdadeira (evitar *trunk* irrestrito e DTP protege contra *VLAN hopping*); III falsa: o PC recebe IP exclusivamente da **VLAN de dados** (*access*), jamais da Voice VLAN; IV verdadeira (segmentação L3 permite filtrar acessos de usuários à infraestrutura de voz).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III erra porque o PC permanece isolado na VLAN de dados.',
    optionErrors: {
      1: 'Incorreta: omite II e IV (ambas verdadeiras) e inclui III (falsa — o PC recebe IP da VLAN de dados, não da Voice VLAN).',
      2: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre isolamento de broadcast e sniffing/ARP spoofing).',
      3: 'Incorreta: inclui III (falsa) e omite IV (verdadeira sobre filtragem L3 entre VLAN de dados e Voice VLAN).'
    }
  },
  {
    id: 'sarah-8-48',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em relação ao funcionamento de **CoS 5 (IEEE 802.1p)** na **VLAN de voz** e à operação com **PC em cascata**, assinale a afirmação INCORRETA.',
    options: [
      'O valor CoS 5 ocupa os 3 bits do campo PCP dentro do cabeçalho IEEE 802.1Q inserido nos quadros da VLAN de voz.',
      'Como o PC atrás do telefone envia quadros sem tag 802.1Q, o telefone atribui CoS 5 nativo ao tráfego comum do PC.',
      'Caso o PC tente injetar quadros 802.1Q forjados com tag da Voice VLAN, o switch interno do telefone ou a porta deve descartá-los.',
      'A associação de CoS 5 na camada 2 depende da presença da tag 802.1Q, razão pela qual quadros untagged não carregam campo 802.1p.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.2. CoS 5 (802.1p) e Segurança na Porta do Telefone. A alternativa B é **incorreta**: quadros comuns do PC chegam e seguem **sem tag 802.1Q (*untagged*)** na VLAN de acesso — eles não possuem cabeçalho 802.1p e o telefone não promove o tráfego de dados do PC com **CoS 5** (mantendo CoS 0 / sem prioridade na entrada de acesso).',
    correctAnalysis:
      'A afirmação B é falsa porque o tráfego do PC não recebe CoS 5 nem é promovido na camada 2 pelo telefone IP.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): os 3 bits PCP (802.1p) no tag 802.1Q permitem valores de 0 a 7, sendo 5 o padrão para voz.',
      2: 'Incorreta (afirmação verdadeira): telefones IP corporativos e switches bloqueiam ou desconsideram quadros tagueados indevidamente vindos da porta PC.',
      3: 'Incorreta (afirmação verdadeira): sem o cabeçalho 802.1Q de 4 bytes, o quadro Ethernet padrão não dispõe do campo PCP (802.1p).'
    }
  },
  {
    id: 'sarah-8-49',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **VLAN de voz**:\n\nAo conectar um telefone IP e um computador na mesma porta do switch, o protocolo _____ anuncia o ID da Voice VLAN ao aparelho em camada 2; o telefone envia seus quadros de áudio _____ com prioridade de camada 2 configurada em _____; e o computador conectado à porta auxiliar do telefone tem seu tráfego encaminhado sem tag na VLAN de _____.',
    options: [
      'DHCP Option 150 / sem tag / CoS 3 / tronco',
      'LLDP-MED / sem tag / CoS 5 / gerenciamento',
      'CDP / tagueados em 802.1Q / CoS 2 / tronco',
      'LLDP-MED / tagueados em 802.1Q / CoS 5 / acesso'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.2. VLAN de voz. O switch anuncia a VLAN de voz por **CDP ou LLDP-MED**; o telefone envia voz com **tag 802.1Q** e prioridade **CoS 5** (campo 802.1p); e o computador conectado à porta traseira do telefone opera sem tag na **VLAN de acesso** (dados).',
    correctAnalysis:
      'Respectivamente: LLDP-MED, tagueados em 802.1Q, CoS 5 e acesso.',
    optionErrors: {
      0: 'Incorreta: Option 150 informa TFTP (não VLAN), a voz é tagueada (não sem tag) e CoS de voz é 5 em VLAN de acesso para o PC.',
      1: 'Incorreta: quadros de voz usam tag 802.1Q para coexistir na porta e o PC fica na VLAN de acesso (dados), não de gerenciamento.',
      2: 'Incorreta: a prioridade padrão de voz é CoS 5 (não CoS 2) e o tráfego do PC segue na VLAN de acesso.'
    }
  },
  {
    id: 'sarah-8-50',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No dimensionamento de **QoS** de uma clínica externa, a fila de prioridade estrita (**LLQ**) deve suportar **10 chamadas simultâneas** utilizando codec **G.711**, cuja taxa unitária em camada 2 Ethernet é de **87,2 kbps**. Respeitando a boa prática de limitar a fila de prioridade a no máximo **33% da largura de banda do enlace**, qual banda deve ser reservada na LLQ e um enlace WAN de **3 Mbps (3.000 kbps)** atende a esse teto?',
    options: [
      '872 kbps na LLQ; sim, pois 33% de 3.000 kbps equivale a 990 kbps, comportando a demanda.',
      '872 kbps na LLQ; não, pois 10 chamadas exigiriam ao menos um enlace mínimo de 5.000 kbps.',
      '800 kbps na LLQ; sim, pois o cálculo da fila de prioridade considera apenas a taxa nominal de 80 kbps.',
      '640 kbps na LLQ; sim, pois 33% de 3.000 kbps comporta até 15 chamadas G.711 simultâneas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.3. Dimensionamento de fila de prioridade (QoS). Multiplicando `10 chamadas × 87,2 kbps = 872 kbps` necessários para a fila **LLQ**. Aplicando a diretriz de teto máximo de **~33%** para a fila de prioridade em um enlace de `3.000 kbps`: `3.000 × 0,33 = 990 kbps`. Como `872 kbps <= 990 kbps`, o enlace de 3 Mbps atende com folga sem causar *starvation* às filas de dados.',
    correctAnalysis:
      '10 × 87,2 kbps = 872 kbps; 33% de 3.000 kbps = 990 kbps (>= 872 kbps), atendendo plenamente à recomendação.',
    optionErrors: {
      1: 'Incorreta: 872 kbps cabe dentro dos 990 kbps (33% de 3.000 kbps), não sendo necessário enlace de 5.000 kbps.',
      2: 'Incorreta: 800 kbps considera apenas L3 sem o overhead L2 Ethernet informado de 87,2 kbps por chamada.',
      3: 'Incorreta: 640 kbps considera somente o payload puro de áudio (64 kbps), subestimando o tráfego real na interface.'
    }
  },
  {
    id: 'sarah-8-51',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Para ganhar prioridade artificial na rede hospitalar, um software instalado em um computador atrás do telefone IP passa a enviar downloads marcados com **DSCP EF (46)**. Qual estratégia de **trust boundary** (*fronteira de confiança*) impede essa fraude preservando a prioridade legítima das chamadas de voz?',
    options: [
      'Confiar incondicionalmente em todos os valores DSCP recebidos na porta de acesso do switch.',
      'Estender confiança ao telefone IP e zerar marcações DSCP vindas da porta auxiliar do PC.',
      'Desativar filas QoS no switch de acesso, deixando a marcação DSCP apenas no roteador WAN.',
      'Remarcar as chamadas de voz para DSCP 0 (Best Effort) mantendo igualdade com dados do PC.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.3. Fronteira de Confiança (*Trust Boundary*). Em uma topologia com PC atrás do telefone IP, o **trust boundary** situa-se no próprio telefone: confia-se nas marcações **CoS 5 / DSCP EF (46)** e **CS3 (24)** originadas pelo telefone (autenticado via CDP/LLDP-MED), enquanto pacotes provenientes da porta auxiliar do **PC são remarcados para DSCP 0 / CoS 0** pelo telefone ou pela política do switch.',
    correctAnalysis:
      'O trust boundary no telefone confia nas marcações legítimas do aparelho e remarca para Best Effort (DSCP 0) o tráfego vindo da porta do PC.',
    optionErrors: {
      0: 'Incorreta: confiar cegamente na porta de acesso permite que qualquer estação do usuário abuse da fila de prioridade LLQ.',
      2: 'Incorreta: remover QoS na LAN ou deixar o roteador confiar em EF falsificado do PC não impede a congestão da fila prioritária.',
      3: 'Incorreta: rebaixar a voz para Best Effort (DSCP 0) elimina a proteção contra latência e jitter nas chamadas.'
    }
  },
  {
    id: 'sarah-8-52',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos e mecanismos de **QoS para VoIP** à esquerda com suas definições técnicas à direita.\n\nColuna da Esquerda:\n(I) **DSCP EF (46)**\n(II) **DSCP CS3 (24)**\n(III) **LLQ (*Low Latency Queueing*)**\n(IV) **Traffic Shaping**\n(V) **LFI (*Link Fragmentation and Interleaving*)**\n\nColuna da Direita:\n(A) Fragmenta pacotes grandes de dados em links lentos para não atrasar pacotes curtos de voz.\n(B) Fila de prioridade estrita dotada de policer interno para despachar voz com mínimo jitter.\n(C) Marcação DiffServ recomendada especificamente para sinalização SIP ou SCCP.\n(D) Retém excedente de tráfego em buffer suavizando rajadas até a taxa configurada.\n(E) Marcação DiffServ padrão (*Expedited Forwarding*) aplicada aos pacotes de áudio RTP.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-B, IV-D, V-A.',
      'I-E, II-C, III-D, IV-B, V-A.',
      'I-E, II-C, III-B, IV-A, V-D.',
      'I-E, II-C, III-B, IV-D, V-A.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.3. QoS para VoIP. (I-E) **DSCP EF (46)** marca pacotes RTP de voz; (II-C) **DSCP CS3 (24)** marca sinalização VoIP; (III-B) **LLQ** combina fila de prioridade estrita com policiamento; (IV-D) **Traffic Shaping** armazena excessos em buffer para suavizar rajadas; (V-A) **LFI** intercala pacotes de voz entre fragmentos de dados em links lentos (`<= 768 kbps`).',
    correctAnalysis:
      'Associação exata: I-E, II-C, III-B, IV-D e V-A.',
    optionErrors: {
      0: 'Incorreta: inverte as marcações de voz DSCP EF 46 (I-E) e sinalização DSCP CS3 24 (II-C).',
      1: 'Incorreta: troca a definição de LLQ (III-B) com a de Traffic Shaping (IV-D).',
      2: 'Incorreta: inverte Traffic Shaping (IV-D) com LFI (V-A).'
    }
  },
  {
    id: 'sarah-8-53',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **enfileiramento, controle de taxa e limites de QoS em VoIP**, analise as afirmativas:\n\nI. Na fila **LLQ**, o *policer* embutido atua durante congestionamentos descartando excesso acima da banda configurada para impedir que a fila prioritária sufoque (*starvation*) as demais classes.\nII. A sinalização VoIP (marcada com **DSCP CS3 / 24**) deve ser alocada em uma fila **CBWFQ** com banda garantida, e não na fila de prioridade estrita reservada à mídia de voz (**EF / 46**).\nIII. O mecanismo de **Traffic Policing** utiliza filas profundas de buffer para atrasar pacotes excedentes e liberá-los suavemente sem causar descartes.\nIV. Recomenda-se que o total atribuído à fila de prioridade estrita não ultrapasse cerca de **33% da capacidade do enlace**, preservando banda para sinalização, controle de roteamento e dados.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.3. LLQ, CBWFQ e Policing × Shaping. I verdadeira (o *policer* implícito da LLQ garante limite contra *starvation* em congestionamentos); II verdadeira (sinalização CS3 usa CBWFQ com banda garantida, deixando LLQ para voz EF 46); III falsa: quem armazena e atrasa pacotes excedentes em buffer é o **Traffic Shaping** — o **Policing** descarta ou remarca imediatamente o excedente; IV verdadeira (diretriz clássica de teto ~33%).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III confunde Traffic Policing (descarte/remarcação imediata) com Traffic Shaping (bufferização).',
    optionErrors: {
      1: 'Incorreta: omite II e IV (ambas verdadeiras) e inclui III (falsa — policing descarta/remarca sem reter em buffer).',
      2: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre o policer interno da fila LLQ).',
      3: 'Incorreta: inclui III (falsa) e omite IV (verdadeira sobre o limite aproximado de 33% na fila de prioridade).'
    }
  },
  {
    id: 'sarah-8-54',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **QoS em redes de telefonia IP** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A marcação recomendada para a mídia de áudio em L3 e L2 é respectivamente **DSCP EF (46)** e **CoS 5 (802.1p)**, podendo a fila prioritária ocupar até 80% do enlace sem risco às demais classes.\n( ) Em enlaces WAN de baixa velocidade (tipicamente abaixo de 768 kbps), o mecanismo **LFI** reduz o atraso de serialização ao fragmentar pacotes grandes de dados e intercalar pacotes de voz.\n( ) Enquanto o **Traffic Shaping** é normalmente aplicado na saída (*egress*) de interfaces WAN para ajustar tráfego ao CIR da operadora via buffer, o **Traffic Policing** é comum na borda para descartar ou remarcar excessos imediatamente.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.3. QoS VoIP. (1) falsa: embora as marcações `DSCP EF (46)` e `CoS 5` estejam corretas, reservar 80% na fila de prioridade estrita provoca *starvation* severa — o limite recomendado é de cerca de **33%** do link; (2) verdadeira (**LFI** evita que um quadro MTU de 1.500 bytes atrase pacotes curtos de voz em links lentos); (3) verdadeira (*shaping* no *egress* com buffer × *policing* sem buffer descartando/remarcando).',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa erra ao admitir até 80% do link na fila de prioridade (o limite recomendado é ~33%).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois ocupar 80% na fila prioritária gera starvation nas filas de dados e sinalização.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre a atuação do LFI para reduzir atraso de serialização em links lentos.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre a aplicação típica de Traffic Shaping e Traffic Policing.'
    }
  },
  {
    id: 'sarah-8-55',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **classificação, enfileiramento e controle de tráfego QoS para VoIP**, assinale a afirmação INCORRETA.',
    options: [
      'Em DiffServ, o tráfego RTP de áudio utiliza DSCP EF (46) e a sinalização SIP utiliza DSCP CS3 (24) para tratamento diferenciado.',
      'A combinação CBWFQ + LLQ permite dar prioridade estrita à voz e garantir percentuais mínimos de banda para sinalização e sistemas.',
      'No trust boundary com telefone IP, marcações vindas da porta do computador são zeradas (DSCP 0) para impedir abuso da fila LLQ.',
      'Em enlaces Ethernet Gigabit saturados, o CBWFQ prioriza pacotes de voz colocando toda a fila de dados em prioridade estrita acima da LLQ.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.3. QoS (LLQ × CBWFQ). A alternativa D é **incorreta**: no modelo **CBWFQ + LLQ**, é a fila **LLQ (voz)** que possui **prioridade estrita**, sendo atendida sempre antes das filas **CBWFQ** de dados e sinalização — jamais o contrário.',
    correctAnalysis:
      'A afirmação D inverte a hierarquia entre filas: a prioridade estrita pertence à fila LLQ de voz, nunca às filas de dados CBWFQ.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): DSCP EF (46) para mídia RTP e DSCP CS3 (24) para sinalização são as marcações padrão.',
      1: 'Incorreta (afirmação verdadeira): LLQ atende voz em prioridade estrita enquanto CBWFQ garante banda ponderada às demais classes.',
      2: 'Incorreta (afirmação verdadeira): zerar DSCP na porta auxiliar do PC impede que aplicações de usuário usurpem a fila prioritária.'
    }
  },
  {
    id: 'sarah-8-56',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um operador inicia uma chamada no telefone IP enviando `INVITE` ao PABX, recebe `100 Trying` e em seguida `180 Ringing` enquanto o destino chama. Antes de alguém atender (`200 OK`), o operador desliga o fone para desistir da ligação. No fluxo padrão da **RFC 3261**, qual método SIP encerra essa tentativa e qual sequência ocorreria se a chamada tivesse sido atendida e encerrada depois?',
    options: [
      'CANCEL encerra a tentativa pendente; se atendida (200 OK + ACK), qualquer lado encerra com BYE.',
      'BYE encerra a tentativa em 180 Ringing; se atendida (200 OK), qualquer lado finaliza com CANCEL.',
      'REFER encerra a tentativa sem 200 OK; se atendida, o chamador confirma com OPTIONS e fecha com ACK.',
      'ACK aborta a tentativa em 180 Ringing; se atendida, o destino confirma com REGISTER e fecha com BYE.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.4. Fluxo e Métodos SIP (RFC 3261). Enquanto um `INVITE` ainda **não recebeu resposta final (`200 OK`)**, a tentativa pendente é abortada com o método **CANCEL**. Já em uma chamada efetivamente estabelecida (`INVITE -> 100 Trying -> 180 Ringing -> 200 OK -> ACK`), o encerramento da sessão é feito pelo método **BYE**.',
    correctAnalysis:
      'CANCEL aborta convites pendentes antes do 200 OK; após 200 OK + ACK, a sessão estabelecida é encerrada via BYE.',
    optionErrors: {
      1: 'Incorreta: BYE só encerra sessões já estabelecidas (após 200 OK + ACK), e CANCEL não encerra chamada já atendida.',
      2: 'Incorreta: REFER solicita transferência de chamada e OPTIONS consulta capacidades, nenhum dos dois substitui CANCEL/BYE.',
      3: 'Incorreta: ACK apenas confirma respostas finais ao INVITE e REGISTER vincula o ramal ao servidor Registrar.'
    }
  },
  {
    id: 'sarah-8-57',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No protocolo **SIP**, relacione os códigos de resposta (`1xx` a `5xx`) à esquerda com o significado técnico correspondente à direita.\n\nColuna da Esquerda:\n(I) **183 Session Progress**\n(II) **401 Unauthorized / 407 Proxy Auth**\n(III) **404 Not Found**\n(IV) **486 Busy Here**\n(V) **503 Service Unavailable**\n\nColuna da Direita:\n(A) Informa que o ramal chamado está ocupado em outra ligação no momento.\n(B) Exige autenticação Digest enviando desafio criptográfico (*nonce*) ao cliente.\n(C) Indica falha temporária ou sobrecarga no servidor/tronco incapaz de cursar a chamada.\n(D) Sinaliza *early media* (como mensagem de operadora ou tom de chamada) antes da resposta final.\n(E) Indica que o usuário ou número discado não existe no domínio consultado.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-B, III-A, IV-E, V-C.',
      'I-D, II-B, III-E, IV-A, V-C.',
      'I-B, II-D, III-E, IV-A, V-C.',
      'I-D, II-E, III-B, IV-A, V-C.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.4. Respostas SIP. (I-D) **183 Session Progress** transmite informações provisórias com SDP (*early media*); (II-B) **401/407** disparam o desafio de autenticação *Digest*; (III-E) **404 Not Found** indica destino inexistente no domínio; (IV-A) **486 Busy Here** indica ramal ocupado; (V-C) **503 Service Unavailable** aponta indisponibilidade ou saturação do servidor/tronco.',
    correctAnalysis:
      'Associação exata: I-D, II-B, III-E, IV-A e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte 404 Not Found (III-E) com 486 Busy Here (IV-A).',
      2: 'Incorreta: inverte 183 Session Progress (I-D) com os códigos de autenticação 401/407 (II-B).',
      3: 'Incorreta: inverte 401/407 (II-B) com 404 Not Found (III-E).'
    }
  },
  {
    id: 'sarah-8-58',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na arquitetura SIP, qual entidade atua como **UAS** em uma ponta e **UAC** na outra, dividindo a chamada em dois diálogos independentes (com `Call-ID` e `Contact` distintos) para controlar estado de mídia, ocultação de topologia e cobrança?',
    options: [
      'O SIP Registrar, responsável apenas por atualizar a tabela de localização dos ramais.',
      'O SIP Redirect Server, que responde com códigos 3xx indicando o próximo endereço.',
      'O SIP Proxy Stateless, que apenas encaminha mensagens sem manter estado da sessão.',
      'O B2BUA (Back-to-Back User Agent), base arquitetural típica de SBCs e PABX IP.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.4. Entidades SIP (`UAC`, `UAS`, `Registrar`, `Proxy`, `Redirect`, `B2BUA`). O **B2BUA (*Back-to-Back User Agent*)** termina o diálogo SIP recebido como **UAS** e origina um segundo diálogo independente como **UAC** do outro lado, mantendo controle completo sobre ambos os *call legs*, cabeçalhos e âncora de mídia.',
    correctAnalysis:
      'O B2BUA opera como UAS de um lado e UAC do outro, segmentando a chamada em dois diálogos independentes.',
    optionErrors: {
      0: 'Incorreta: o Registrar apenas processa requisições REGISTER e armazena o mapeamento AoR -> Contact.',
      1: 'Incorreta: o Redirect Server não encaminha chamadas nem divide diálogos; devolve resposta 3xx ao UAC.',
      2: 'Incorreta: um Proxy Stateless retransmite mensagens no mesmo diálogo (mesmo Call-ID) sem manter estado de sessão.'
    }
  },
  {
    id: 'sarah-8-59',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **cabeçalhos e portas do protocolo SIP**, analise as afirmativas:\n\nI. O cabeçalho **Via** registra o caminho percorrido pela requisição para que as respostas retornem pela mesma rota de proxies e para detectar loops.\nII. Por padrão, o SIP em texto claro utiliza a porta **5061 (UDP/TCP)**, enquanto o SIPS sobre TLS utiliza exclusivamente a porta **5060 (UDP)**.\nIII. Os cabeçalhos **Call-ID**, **From** e **To** identificam o diálogo SIP, enquanto o **CSeq** traz um número sequencial e o método para ordenar transações.\nIV. O cabeçalho **Contact** fornece a URI direta onde o *User Agent* pode receber futuras requisições do diálogo, como `ACK` ou `BYE`.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, III e IV estão corretas.',
      'Somente I e II estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.4. Cabeçalhos e Portas SIP. I verdadeira (roteamento de respostas e proteção contra loops via `Via`); II falsa: as portas estão invertidas — **5060 (UDP/TCP)** é a porta padrão do SIP em claro e **5061 (TCP/TLS)** é a porta padrão do SIP cifrado (SIPS); III verdadeira (`Call-ID`/`From`/`To` e `CSeq`); IV verdadeira (papel do cabeçalho `Contact`).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II inverte as portas 5060 (SIP claro UDP/TCP) e 5061 (SIP/TLS).',
    optionErrors: {
      1: 'Incorreta: inclui II (falsa — 5060 é SIP claro e 5061 é TLS) e omite III e IV (verdadeiras).',
      2: 'Incorreta: inclui II (falsa) e omite I (verdadeira sobre o cabeçalho Via).',
      3: 'Incorreta: inclui II (falsa) e omite III (verdadeira sobre Call-ID, From, To e CSeq).'
    }
  },
  {
    id: 'sarah-8-60',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **métodos, autenticação Digest e servidores SIP** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O método **OPTIONS** é utilizado para solicitar a transferência de uma chamada ativa para outro ramal, enquanto o método **REFER** verifica a disponibilidade de um servidor.\n( ) Na autenticação **Digest** do SIP, após receber `401` ou `407` com um valor *nonce*, o cliente calcula um resumo criptográfico (*hash*) da senha sem enviá-la em texto claro.\n( ) Quando um **Redirect Server** devolve uma resposta da classe `3xx` (`302 Moved Temporarily`), ele permanece como intermediário obrigatório de toda a sinalização subsequente.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.4. Métodos e Autenticação SIP. (1) falsa: as funções estão invertidas — **REFER** inicia transferência de chamada e **OPTIONS** consulta capacidades ou disponibilidade (*keepalive*); (2) verdadeira (autenticação *Digest* usa desafio *nonce* e *hash*, evitando senha em claro); (3) falsa: o *Redirect Server* entrega o novo destino na resposta `3xx` ao UAC e sai do fluxo da chamada.',
    correctAnalysis:
      'Gabarito: F – V – F. A primeira afirmativa inverte OPTIONS e REFER, e a terceira atribui ao Redirect Server papel de Proxy/B2BUA.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois REFER transfere chamadas e OPTIONS consulta capacidades/status.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre o mecanismo desafio-resposta (nonce) da autenticação Digest.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois após responder 3xx o Redirect Server não permanece na sinalização da chamada.'
    }
  },
  {
    id: 'sarah-8-61',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete corretamente as lacunas sobre **sinalização SIP**:\n\nNa sequência de registro ou chamada, o servidor desafia credenciais com código `401` ou `407` usando autenticação _____; a sinalização criptografada com **TLS** utiliza por padrão a porta TCP _____; e uma transferência de ligação entre ramais é solicitada pelo método _____.',
    options: [
      'Basic / 5060 / CANCEL',
      'Digest / 5060 / OPTIONS',
      'Kerberos / 5061 / BYE',
      'Digest / 5061 / REFER'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.4. SIP. O desafio `401/407` utiliza autenticação **Digest**; **SIPS sobre TLS** opera por padrão na porta **5061**; e transferências de chamadas empregam o método **REFER** (RFC 3515).',
    correctAnalysis:
      'Respectivamente: Digest, 5061 e REFER.',
    optionErrors: {
      0: 'Incorreta: SIP não adota HTTP Basic em claro como padrão no 401/407, 5060 é sem TLS e CANCEL aborta chamada pendente.',
      1: 'Incorreta: a porta padrão para TLS (SIPS) é 5061 (não 5060), e OPTIONS apenas consulta status/capacidades.',
      2: 'Incorreta: SIP emprega autenticação Digest (não Kerberos nativo no 401/407 padrão) e BYE apenas encerra sessões.'
    }
  },
  {
    id: 'sarah-8-62',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No cabeçalho do protocolo **RTP (RFC 3550)**, relacione os campos à esquerda com suas funções técnicas à direita.\n\nColuna da Esquerda:\n(I) **Version (V)**\n(II) **Payload Type (PT)**\n(III) **Sequence Number**\n(IV) **Timestamp**\n(V) **SSRC (*Synchronization Source*)**\n\nColuna da Direita:\n(A) Identifica unicamente a fonte geradora do fluxo de mídia dentro da sessão.\n(B) Incrementa em 1 a cada pacote enviado, permitindo detectar perda e reordenar pacotes.\n(C) Indica o formato ou codec do conteúdo transportado (como PCMU, PCMA ou G.729).\n(D) Registra o instante de amostragem do áudio, base para sincronismo e cálculo de jitter.\n(E) Especifica a versão do protocolo utilizado no pacote RTP (valor padrão 2).\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-C, III-D, IV-B, V-A.',
      'I-E, II-C, III-B, IV-D, V-A.',
      'I-C, II-E, III-B, IV-D, V-A.',
      'I-E, II-B, III-C, IV-D, V-A.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.5. Campos do Cabeçalho RTP (RFC 3550). (I-E) **Version** = 2; (II-C) **Payload Type** identifica o codec (`PT 0/8/18`); (III-B) **Sequence Number** (16 bits) detecta perdas e ordena pacotes; (IV-D) **Timestamp** (32 bits) marca o instante de amostragem para reprodução e cálculo de jitter; (V-A) **SSRC** identifica aleatoriamente a fonte do fluxo.',
    correctAnalysis:
      'Associação exata: I-E, II-C, III-B, IV-D e V-A.',
    optionErrors: {
      0: 'Incorreta: inverte Sequence Number (III-B) com Timestamp (IV-D).',
      2: 'Incorreta: inverte Version (I-E) com Payload Type (II-C).',
      3: 'Incorreta: inverte Payload Type (II-C) com Sequence Number (III-B).'
    }
  },
  {
    id: 'sarah-8-63',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao analisar fluxos **RTP** segundo as RFCs 3550 e 3551, quais valores estáticos de **Payload Type (PT)** correspondem aos codecs **G.711 μ-law (PCMU)**, **G.711 A-law (PCMA)** e **G.729**, e quais campos revelam perda e *jitter*?',
    options: [
      'PT 0 = G.729, PT 8 = PCMU, PT 18 = PCMA; perda via SSRC e jitter via Version.',
      'PT 0 = PCMA, PT 8 = PCMU, PT 18 = G.729; perda via Timestamp e jitter via Sequence Number.',
      'PT 0 = PCMU, PT 8 = PCMA, PT 18 = G.729; perda via Sequence Number e jitter via Timestamp.',
      'PT 0 = PCMU, PT 8 = G.729, PT 18 = PCMA; perda via Payload Type e jitter via SSRC.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.5. Payload Types e Campos RTP. Conforme a **RFC 3551**, `PT 0` = **PCMU (G.711 μ-law)**, `PT 8` = **PCMA (G.711 A-law)** e `PT 18` = **G.729**. Saltos no **Sequence Number** identificam perda de pacotes, enquanto a comparação entre **Timestamp** RTP e hora de chegada mede o **jitter**.',
    correctAnalysis:
      'PT 0 (PCMU), PT 8 (PCMA) e PT 18 (G.729); perdas são apuradas pelo Sequence Number e jitter pelo Timestamp.',
    optionErrors: {
      0: 'Incorreta: troca todos os Payload Types e atribui perda/jitter a SSRC e Version.',
      1: 'Incorreta: inverte PT 0 (PCMU) com PT 8 (PCMA) e inverte Timestamp com Sequence Number.',
      3: 'Incorreta: troca PT 8 (PCMA) com PT 18 (G.729) e associa perda/jitter a PT e SSRC.'
    }
  },
  {
    id: 'sarah-8-64',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma URA externa recebe chamadas em codec comprimido **G.729** e precisa interpretar dígitos **DTMF** pressionados pelos pacientes com alta confiabilidade. Por que o envio **in-band** falha nesse cenário e qual método na camada **RTP** resolve a limitação?',
    options: [
      'Tons in-band exigem TCP no RTP; a solução é enviar dígitos via RTCP Receiver Report.',
      'Os tons in-band são descartados pelo jitter buffer; a solução é aumentar o buffer para 200 ms.',
      'A compressão G.729 distorce in-band; a solução é usar RTP Events (RFC 2833/4733).',
      'Os tons in-band exigem mídia cifrada; a solução é ativar SRTP para preservar os dígitos.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.5. DTMF em VoIP (`RFC 2833/4733` × `in-band` × `SIP INFO`). Codecs de baixa taxa otimizados para fala humana, como **G.729**, distorcem frequências puras de dígitos **DTMF (*in-band*)**. O método padrão recomendado na mídia é o envio de pacotes dedicados de **RTP Events (`telephone-event`) conforme RFC 2833/4733**, mantendo sincronismo no mesmo fluxo RTP sem sofrer distorção pelo codec, independentemente de ajustes no *jitter buffer* ou ativação de SRTP.',
    correctAnalysis:
      'A compressão G.729 distorce tons DTMF in-band; pacotes dedicados de RTP Events (RFC 2833/4733) transmitem os dígitos com precisão.',
    optionErrors: {
      0: 'Incorreta: RTP não usa TCP para DTMF e RTCP Receiver Report transporta apenas estatísticas de recepção.',
      1: 'Incorreta: o jitter buffer não remove tons — a distorção vem da compressão do codec G.729.',
      3: 'Incorreta: cifrar a mídia com SRTP não altera a distorção causada pelo G.729.'
    }
  },
  {
    id: 'sarah-8-65',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **RTP, RTCP (Sender/Receiver Report) e métodos DTMF**, analise as afirmativas:\n\nI. No protocolo companheiro **RTCP**, participantes ativos enviam **Sender Reports (SR)** com contadores de pacotes/bytes e carimbo de tempo, enquanto receptores enviam **Receiver Reports (RR)** com fração de perda e *jitter* medido.\nII. O campo **SSRC** do cabeçalho RTP deve permanecer fixo e idêntico em todas as ligações simultâneas da empresa para identificar a operadora SIP.\nIII. Como o **Sequence Number** cresce unitariamente a cada pacote e o **Timestamp** acompanha o relógio de amostragem, o receptor consegue medir respectivamente **perda** e **variação de atraso (jitter)**.\nIV. Além do padrão **RFC 2833/4733** na mídia RTP, dígitos DTMF podem ser enviados fora da banda de áudio por meio de mensagens de sinalização **SIP INFO**.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.5. RTP, RTCP e DTMF. I verdadeira (papéis de **RTCP SR e RR** na telemetria de mídia, tipicamente na porta ímpar adjacente à par do RTP); II falsa: o **SSRC** é um identificador aleatório de 32 bits escolhido para identificar unicamente cada fonte dentro de uma sessão RTP específica, não um valor fixo global; III verdadeira (`Sequence Number` -> perda; `Timestamp` -> jitter); IV verdadeira (`SIP INFO` transporta DTMF via sinalização fora da mídia RTP).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. A afirmativa II erra quanto à finalidade e unicidade por sessão do campo SSRC.',
    optionErrors: {
      0: 'Incorreta: inclui II (falsa — SSRC é escolhido aleatoriamente por fonte/sessão) e omite III e IV (verdadeiras).',
      1: 'Incorreta: inclui II (falsa) e omite I (verdadeira sobre RTCP SR e RR).',
      2: 'Incorreta: inclui II (falsa) e omite III (verdadeira sobre Sequence Number e Timestamp).'
    }
  },
  {
    id: 'sarah-8-66',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **campos do cabeçalho RTP, relatórios RTCP e sinalização DTMF**, assinale a afirmação INCORRETA.',
    options: [
      'O valor de Payload Type 18 identifica o codec G.729, enquanto 0 e 8 identificam respectivamente PCMU e PCMA.',
      'Pacotes RTCP Sender Report permitem correlacionar relógio NTP e Timestamp RTP para sincronismo de áudio e vídeo.',
      'A RFC 4733 atualizou a RFC 2833 para o transporte confiável de eventos DTMF como pacotes RTP dedicados.',
      'No método DTMF in-band, os dígitos trafegam fora do fluxo RTP encapsulados em mensagens de sinalização SIP INFO.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.5. RTP e DTMF. A alternativa D é **incorreta**: o método **in-band** envia os tons DTMF diretamente misturados **dentro do próprio fluxo de áudio RTP** como som normal; enviar dígitos fora da mídia na sinalização SIP corresponde ao método **SIP INFO** (e não *in-band*).',
    correctAnalysis:
      'A afirmação D confunde DTMF in-band (áudio dentro da mídia RTP) com SIP INFO (fora da mídia, na sinalização SIP).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): mapeamento exato da RFC 3551 para PT 0, 8 e 18.',
      1: 'Incorreta (afirmação verdadeira): RTCP SR inclui timestamp NTP e RTP para sincronismo inter-mídia (lip-sync).',
      2: 'Incorreta (afirmação verdadeira): RFC 4733 sucedeu e atualizou a RFC 2833 para RTP payload de dígitos DTMF.'
    }
  },
  {
    id: 'sarah-8-67',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um switch de acesso com orçamento total (**PoE budget**) de **370 W** alimenta **40 telefones IP** consumindo **6 W** cada e **4 access points Wi-Fi** reservando **30 W** cada. Qual é a potência total comprometida, a margem restante no switch e quantos telefones adicionais de 6 W ainda podem ser conectados?',
    options: [
      '360 W comprometidos; restam 10 W de margem, comportando apenas mais 1 telefone de 6 W.',
      '340 W comprometidos; restam 30 W de margem, comportando até 5 telefones adicionais de 6 W.',
      '370 W comprometidos; restam 0 W de margem, não comportando nenhum telefone adicional.',
      '354 W comprometidos; restam 16 W de margem, comportando até 2 telefones adicionais de 6 W.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.6. Cálculo de Orçamento PoE (*PoE Budget*). Somando as cargas: `40 telefones × 6 W = 240 W` e `4 APs × 30 W = 120 W`. O consumo total é `240 + 120 = 360 W` de `370 W` disponíveis. Restam `370 - 360 = 10 W` de margem, valor que permite ligar apenas **1 telefone adicional** de 6 W (pois 2 exigiram 12 W > 10 W).',
    correctAnalysis:
      '40 × 6 W + 4 × 30 W = 360 W de 370 W; saldo de 10 W comporta no máximo 1 telefone adicional de 6 W.',
    optionErrors: {
      1: 'Incorreta: 340 W resulta de erro na multiplicação (40 × 6 + 4 × 25 = 340), ignorando os 30 W por AP.',
      2: 'Incorreta: a soma total é 360 W, ainda deixando 10 W livres abaixo dos 370 W.',
      3: 'Incorreta: 354 W corresponderia a 39 telefones em vez de 40 telefones de 6 W.'
    }
  },
  {
    id: 'sarah-8-68',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os padrões **PoE (Power over Ethernet)** à esquerda com suas potências máximas e características à direita.\n\nColuna da Esquerda:\n(I) **IEEE 802.3af (PoE / Tipo 1)**\n(II) **IEEE 802.3at (PoE+ / Tipo 2)**\n(III) **IEEE 802.3bt (Tipo 3)**\n(IV) **IEEE 802.3bt (Tipo 4)**\n(V) **LLDP-MED (*Power via MDI*)**\n\nColuna da Direita:\n(A) Fornece até 90 W na fonte PSE (71,3 W no PD) utilizando os 4 pares do cabo.\n(B) Fornece até 30 W na fonte PSE (25,5 W garantidos no dispositivo PD).\n(C) Negocia dinamicamente em camada 2 a potência real exigida pelo telefone IP.\n(D) Fornece até 60 W na fonte PSE (51 W no PD) utilizando os 4 pares do cabo.\n(E) Fornece até 15,4 W na fonte PSE (12,95 W garantidos no dispositivo PD).\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-B, III-D, IV-A, V-C.',
      'I-B, II-E, III-D, IV-A, V-C.',
      'I-E, II-B, III-A, IV-D, V-C.',
      'I-E, II-D, III-B, IV-A, V-C.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.6. Padrões PoE e LLDP-MED. (I-E) **802.3af** (`15,4 W` PSE / `12,95 W` PD); (II-B) **802.3at** (`30 W` PSE / `25,5 W` PD); (III-D) **802.3bt Tipo 3** (`60 W` PSE / `51 W` PD, 4 pares); (IV-A) **802.3bt Tipo 4** (`90 W` PSE / `71,3 W` PD, 4 pares); (V-C) **LLDP-MED** negocia potência fina em L2 otimizando o orçamento do switch.',
    correctAnalysis:
      'Associação exata: I-E, II-B, III-D, IV-A e V-C.',
    optionErrors: {
      1: 'Incorreta: inverte 802.3af (I-E) com 802.3at (II-B).',
      2: 'Incorreta: inverte 802.3bt Tipo 3 (III-D, 60 W) com Tipo 4 (IV-A, 90 W).',
      3: 'Incorreta: inverte 802.3at (II-B, 30 W) com 802.3bt Tipo 3 (III-D, 60 W).'
    }
  },
  {
    id: 'sarah-8-69',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um switch de 48 portas com **budget PoE de 370 W**, telefones IP de **Classe 3** que consomem apenas `5,5 W` reais estão recebendo reserva fixa de `15,4 W` por porta na classificação inicial física, fazendo o switch negar energia após o 24º telefone. Qual recurso evita esse desperdício de orçamento?',
    options: [
      'Aumentar a bitola do cabeamento horizontal para estender a alimentação além de 150 metros.',
      'Ativar negociação dinâmica por LLDP-MED para alocar somente os 5,5 W reais por porta.',
      'Alterar manualmente o padrão das portas para 802.3bt Tipo 4 aumentando a classe para 8.',
      'Desativar a detecção PoE e forçar 30 W permanentes sem negociação em todas as portas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.6. Classificação de Hardware × LLDP-MED. Pela classificação física L1 isolada, um aparelho Classe 3 reserva até `15,4 W` (`24 × 15,4 = 369,6 W`), esgotando o budget de 370 W antes da 25ª porta. Com **LLDP-MED (*Power via MDI*)**, switch e telefone negociam em camada 2 o consumo exato (`~5,5 W`), liberando orçamento para todas as 48 portas.',
    correctAnalysis:
      'O LLDP-MED negocia potência fina em L2 conforme a necessidade real do telefone, evitando reservas fixas excessivas de 15,4 W.',
    optionErrors: {
      0: 'Incorreta: aumentar bitola não altera a tabela fixa de reserva por classe L1 e o limite Ethernet segue em 100 m.',
      2: 'Incorreta: elevar a classe para 802.3bt reserva ainda mais potência (até 90 W) e não reduz a alocação por porta.',
      3: 'Incorreta: forçar 30 W fixos por porta reduz ainda mais a quantidade de portas alimentadas (apenas 12 em 370 W).'
    }
  },
  {
    id: 'sarah-8-70',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Avalie as afirmativas sobre **padrões PoE, cabeamento e contingência elétrica** e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Nos padrões IEEE 802.3af e 802.3at, os valores de **15,4 W** e **30 W** são entregues integralmente na entrada do dispositivo alimentado (PD), sem perdas no cabo de 100 m.\n( ) Enquanto o 802.3af e o 802.3at operam usando 2 pares do cabo par trançado, o **IEEE 802.3bt** utiliza os **4 pares** para entregar até **60 W** (Tipo 3) ou **90 W** (Tipo 4) na PSE.\n( ) Switches de acesso **PoE** que alimentam telefones IP em áreas críticas devem ser conectados a **nobreaks (UPS)** para manter a telefonia ativa durante quedas da rede elétrica.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 8.2.6. PoE e Nobreak. (1) falsa: `15,4 W` (802.3af) e `30 W` (802.3at) correspondem à saída na **PSE (switch)**; devido à dissipação resistiva no cabo de até 100 m, o **PD** recebe garantidos `12,95 W` e `25,5 W`, respectivamente; (2) verdadeira (802.3bt usa 4 pares para 60 W / 90 W na PSE); (3) verdadeira (nobreak/UPS é essencial pois telefones IP não são alimentados pela linha da operadora como aparelhos analógicos).',
    correctAnalysis:
      'Gabarito: F – V – V. A primeira afirmativa ignora a perda elétrica no cabo entre PSE (15,4/30 W) e PD (12,95/25,5 W).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois há perda resistiva no cabo e ao PD chegam até 12,95 W (af) e 25,5 W (at).',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre o uso de 4 pares no padrão IEEE 802.3bt.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre a necessidade de nobreaks (UPS) para sustentar switches PoE em quedas de energia.'
    }
  },
  {
    id: 'sarah-8-71',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **classes, limites físicos e projeto elétrico de PoE** em redes corporativas, assinale a afirmação INCORRETA.',
    options: [
      'As classes 0 a 4 cobrem dispositivos dos padrões 802.3af e 802.3at, enquanto as classes 5 a 8 pertencem ao padrão 802.3bt.',
      'A queda de tensão no cabo faz o limite entregue ao PD cair de 15,4 W para 12,95 W (af) e de 30 W para 25,5 W (at).',
      'O fornecimento de energia PoE pelo switch amplia o alcance padrão do enlace Ethernet de 100 m para até 250 m sem repetidores.',
      'Quando um switch atinge seu orçamento máximo de PoE, portas conectadas posteriormente permanecem sem alimentação elétrica até haver saldo.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.6. Limites Físicos PoE. A alternativa C é **incorreta**: o PoE **não altera o limite normativo de 100 metros** do cabeamento par trançado Ethernet (`90 m` de enlace permanente + `10 m` de *patch cords*) — inclusive, os valores garantidos no PD (`12,95 W`, `25,5 W`, etc.) já foram calculados considerando o pior caso de `100 m`.',
    correctAnalysis:
      'A afirmação C é falsa porque o alcance máximo padrão do cabeamento Ethernet com PoE continua limitado a 100 metros.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): classes 0–4 atendem 802.3af/at e classes 5–8 foram introduzidas no 802.3bt.',
      1: 'Incorreta (afirmação verdadeira): as potências úteis no PD são 12,95 W (802.3af) e 25,5 W (802.3at).',
      3: 'Incorreta (afirmação verdadeira): esgotado o PoE budget (por ordem física ou prioridade configurada), novos PDs ficam sem energia.'
    }
  },
  {
    id: 'sarah-8-72',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um novo lote de telefones IP é instalado em uma ala administrativa: os aparelhos ligam o visor via PoE, porém exibem falha contínua de provisionamento e **não registram no PABX IP**. Quais causas devem ser priorizadas na verificação técnica?',
    options: [
      'Porta em VLAN errada, ausência de opção DHCP 150/66 (TFTP) ou rejeição SIP 401/403 por credenciais inválidas.',
      'Inversão entre payload types PT 0 e PT 8 no fluxo RTP depois da chamada já ter sido atendida pelo ramal.',
      'Ausência de cancelamento de eco no gateway FXO e divergência de protocolo DTMF durante atendimento da URA.',
      'Presença de SIP ALG no firewall interno provocando queda da chamada estabelecida exatamente aos 32 segundos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.7. Troubleshooting — Telefone que Não Registra. Falhas de registro decorrem de problemas na sequência de inicialização e sinalização: **Voice VLAN errada** na porta do switch, falta da **opção DHCP 150/66** ou bloqueio ao servidor **TFTP/HTTP** impedindo baixar o arquivo XML, ou resposta SIP **401/403** por senha/ramal incorreto ou ACL bloqueando o `REGISTER`.',
    correctAnalysis:
      'Falha de registro aponta para Voice VLAN errada, ausência de DHCP Option 150/66 ou TFTP inacessível, ou erro SIP 401/403.',
    optionErrors: {
      1: 'Incorreta: codecs RTP (PT 0/8) são negociados no INVITE/SDP durante chamadas após o registro já estar concluído.',
      2: 'Incorreta: eco FXO e falha DTMF ocorrem durante chamadas em curso, não impedindo o registro inicial do telefone.',
      3: 'Incorreta: queda aos 32 s por ACK perdido afeta chamadas já atendidas, pressupondo que o telefone já esteja registrado.'
    }
  },
  {
    id: 'sarah-8-73',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao capturar o tráfego de uma ligação problemática no **Wireshark**, quais menus específicos permitem visualizar o diagrama de sinalização das chamadas SIP e inspecionar perda de pacotes, *jitter* e **SSRC** do áudio?',
    options: [
      'Telephony -> VoIP Calls para o fluxo SIP e Telephony -> RTP -> RTP Stream Analysis para a mídia.',
      'Analyze -> Expert Information para fluxo SIP e Statistics -> HTTP -> Packet Counter para a mídia RTP.',
      'Statistics -> Endpoints para diagrama SIP e Telephony -> ANSI -> MAP Analysis para perda de pacotes RTP.',
      'Tools -> Firewall ACL Rules para mensagens SIP e Statistics -> TCP Stream Graphs para métricas de jitter RTP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 8.2.7. Troubleshooting com Wireshark. O menu **Telephony -> VoIP Calls** lista as chamadas capturadas e gera o diagrama *Flow Sequence* do diálogo SIP (`INVITE/200/ACK/BYE`), enquanto **Telephony -> RTP -> RTP Stream Analysis** audita cada **SSRC**, indicando perda percentual, *jitter* máximo/médio, *Payload Type* e permitindo reproduzir o áudio.',
    correctAnalysis:
      'Telephony -> VoIP Calls analisa os fluxos SIP e Telephony -> RTP -> RTP Stream Analysis mede perda, jitter e SSRC.',
    optionErrors: {
      1: 'Incorreta: HTTP Packet Counter analisa tráfego web HTTP, sem estatísticas de mídia RTP ou jitter.',
      2: 'Incorreta: Endpoints exibe apenas contadores por IP/porta e ANSI MAP não se aplica a mídia RTP VoIP.',
      3: 'Incorreta: TCP Stream Graphs analisa fluxos TCP (como window scaling), enquanto RTP trafega em UDP.'
    }
  },
  {
    id: 'sarah-8-74',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após a troca do tronco SIP com uma operadora usando codec **G.729**, os usuários conseguem conversar normalmente em ligações externas, mas ao discar opções numéricas em **URAs de bancos e laboratórios** os dígitos são ignorados. Qual é a causa típica desse sintoma e sua correção?',
    options: [
      'O codec G.729 bloqueia qualquer método DTMF em VoIP; é preciso migrar o tronco para G.711 A-law.',
      'O padrão RFC 2833/4733 envia dígitos na sinalização SIP; deve-se alterar para in-band sobre G.729.',
      'Há divergência no método DTMF (RFC 2833 vs in-band/SIP INFO); alinhar para RFC 2833/4733 resolve.',
      'Falta habilitar supressão de silêncio (VAD) no tronco G.729 para isolar pausas entre os dígitos.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.7. Troubleshooting de DTMF. Quando a voz funciona normalmente mas comandos de teclado em URA falham, há **incompatibilidade no método de transporte DTMF** (por exemplo, o PABX envia **SIP INFO** ou **in-band** distorcido por G.729 enquanto a operadora aguarda **RFC 2833/4733**). Alinhar terminal, PABX/SBC e tronco para **RFC 2833/4733 (`telephone-event` no SDP)** resolve o problema.',
    correctAnalysis:
      'Dígitos ignorados em URA com áudio normal indicam incompatibilidade DTMF (RFC 2833/4733 × in-band × SIP INFO), corrigida alinhando para RFC 2833/4733.',
    optionErrors: {
      0: 'Incorreta: o G.729 prejudica apenas DTMF in-band, funcionando normalmente com RFC 2833/4733 ou SIP INFO.',
      1: 'Incorreta: RFC 2833/4733 envia RTP Events dentro da mídia RTP (não na sinalização SIP), e in-band sobre G.729 falha.',
      3: 'Incorreta: ativar VAD em tronco VoIP pode cortar ou truncar tons curtos, não corrige divergência de método DTMF.'
    }
  },
  {
    id: 'sarah-8-75',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre **cenários clássicos de troubleshooting em Telefonia IP**, analise as afirmativas:\n\nI. Telefones IP com módulo de teclas ou visor colorido que entram em ciclo contínuo de reinicialização ao serem conectados a um switch lotado apontam frequentemente para **orçamento de PoE insuficiente**.\nII. Chamadas que caem regularmente por volta de **30 segundos** após o atendimento costumam resultar de **ACK perdido** (por NAT ou SIP ALG alterando o cabeçalho `Contact`) ou falha de renovação em **Session Timers**.\nIII. O sintoma de **áudio unilateral (*one-way audio*)** ocorre exclusivamente por erro de autenticação `401/407` no `REGISTER`, não tendo relação com NAT, rotas ou ACLs bloqueando RTP.\nIV. Queixas de **eco** ao falar com a rede pública através de gateway analógico **FXO** indicam frequentemente descasamento de impedância na linha híbrida, ganho elevado ou cancelador de eco desativado.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 8.2.7. Troubleshooting VoIP. I verdadeira (sobrecarga de *PoE budget* derruba portas ou reinicia telefones no pico de consumo); II verdadeira (timeout `64 × T1 ≈ 32 s` por falta de `ACK` ou expiração de *Session Timers* RFC 4028); III falsa: *one-way audio* decorre justamente de **NAT/SIP ALG**, falta de rota de retorno ou **ACL bloqueando pacotes RTP** em uma direção; IV verdadeira (causas típicas de eco em gateways analógicos/acústica).',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. A afirmativa III erra ao negar a relação do áudio unilateral com NAT/SIP ALG, rotas e ACLs bloqueando RTP.',
    optionErrors: {
      0: 'Incorreta: inclui III (falsa — one-way audio tem relação direta com NAT, rotas e ACLs RTP) e omite II e IV (verdadeiras).',
      1: 'Incorreta: inclui III (falsa) e omite I (verdadeira sobre reinicializações por PoE insuficiente).',
      3: 'Incorreta: inclui III (falsa) e omite IV (verdadeira sobre eco em gateways FXO/impedância).'
    }
  },
  {
    id: 'sarah-8-76',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os sintomas de **falhas em Telefonia IP** à esquerda com suas causas prováveis à direita.\n\nColuna da Esquerda:\n(I) **Áudio unilateral (*one-way audio*)**\n(II) **Telefone IP não registra**\n(III) **Chamada cai aos ~30 segundos**\n(IV) **Telefone reinicia em *boot loop***\n(V) **URA ignora dígitos teclados**\n\nColuna da Direita:\n(A) Falta da opção DHCP 150/66, Voice VLAN errada ou falha de credencial SIP 401/403.\n(B) Orçamento de energia PoE esgotado no switch de acesso ao ligar aparelhos.\n(C) Incompatibilidade de DTMF entre RFC 2833/4733, in-band e SIP INFO.\n(D) NAT ou SIP ALG corrompendo SDP/rota, ou ACL bloqueando fluxo RTP em uma via.\n(E) Perda do pacote ACK após 200 OK por NAT/Contact errado ou falha de Session Timers.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-A, III-C, IV-B, V-E.',
      'I-A, II-D, III-E, IV-B, V-C.',
      'I-D, II-B, III-E, IV-A, V-C.',
      'I-D, II-A, III-E, IV-B, V-C.'
    ],
    correctIndex: 3,
    explanation:
      'Item 8.2.7. Troubleshooting VoIP. (I-D) **Áudio unilateral** (NAT/SIP ALG, rota ou ACL bloqueando RTP); (II-A) **Não registra** (VLAN errada, DHCP 150/66/TFTP ou SIP 401/403); (III-E) **Cai em ~30 s** (ACK perdido no 200 OK ou *Session Timers*); (IV-B) **Reinicia em loop** (PoE insuficiente); (V-C) **URA ignora dígitos** (divergência DTMF RFC 2833/4733 × *in-band* × SIP INFO).',
    correctAnalysis:
      'Associação exata: I-D, II-A, III-E, IV-B e V-C.',
    optionErrors: {
      0: 'Incorreta: inverte chamada caindo aos ~30 s (III-E) com falha de DTMF na URA (V-C).',
      1: 'Incorreta: inverte áudio unilateral (I-D) com telefone que não registra (II-A).',
      2: 'Incorreta: inverte telefone que não registra (II-A) com telefone reiniciando por PoE insuficiente (IV-B).'
    }
  }
]);


