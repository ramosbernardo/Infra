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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Comparando tecnologias de armazenamento NAS e SAN, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Soluções NAS fornecem armazenamento em nível de arquivos usando NFS ou SMB sobre rede IP.\n( ) Soluções SAN apresentam volumes em nível de blocos (LUNs) por meio de Fibre Channel ou iSCSI.\n( ) Dois servidores Windows comuns podem gravar simultaneamente na mesma LUN NTFS sem cluster.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4. Tecnologias de armazenamento NAS e SAN (Eixo 5). NAS = file-level (NFS/SMB); SAN = block-level (FC/iSCSI); LUN compartilhada sem sistema de arquivos clusterizado sofre corrupção imediata.',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque NTFS padrão não controla acesso concorrente multi-host em bloco, exigindo sistema clusterizado (CSV/VMFS).',
    optionErrors: {
      1: 'Incorreta: SAN efetivamente fornece blocos (LUNs) e acesso concorrente sem cluster em NTFS corrompe os metadados.',
      2: 'Incorreta: a primeira afirmativa é verdadeira (NAS opera em nível de arquivos via NFS/SMB).',
      3: 'Incorreta: a terceira afirmativa é falsa (NTFS isolado em dois servidores gera corrupção).'
    }
  },
  {
    id: 'sarah-5-05',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre protocolos e endereçamento em redes de armazenamento SAN, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O protocolo iSCSI utiliza por padrão a porta TCP 3260 para tráfego de blocos sobre redes IP.\n( ) Os nós Initiator e Target em uma SAN iSCSI são identificados pelo padrão WWPN de 64 bits.\n( ) O identificador IQN (iSCSI Qualified Name) segue o formato padrão com prefixo "iqn." e data reversa.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. iSCSI e Fibre Channel (Eixo 5). iSCSI usa TCP 3260 (V) e identificadores IQN (V); WWPN de 64 bits pertence a Fibre Channel, não iSCSI (F).',
    correctAnalysis:
      'A primeira (TCP 3260) e a terceira (formato IQN) referem-se corretamente ao iSCSI; a segunda é falsa porque WWPN/WWNN identificam nós e portas em fabrics Fibre Channel.',
    optionErrors: {
      0: 'Incorreta: WWPN pertence ao Fibre Channel, enquanto iSCSI usa IQN/EUI.',
      1: 'Incorreta: a porta padrão do protocolo iSCSI é de fato a TCP 3260.',
      2: 'Incorreta: a terceira afirmativa descreve corretamente o padrão IQN.'
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre proteção de backups contra ransomware, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A regra 3-2-1-1-0 prevê 3 cópias, em 2 mídias distintas, 1 offsite, 1 offline/imutável e 0 erros de restore.\n( ) Espelhamento RAID 1 em produção garante cópia imutável imune à criptografia de ransomware.\n( ) Fitas LTO desconectadas (air-gap) ou Object Lock WORM impedem exclusão antes da retenção.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Tecnologias e mídias de backup (Eixo 6). Regra 3-2-1-1-0 com imutabilidade (WORM)/air-gap protege contra exclusão maliciosa; RAID 1 replica alterações maliciosas imediatamente.',
    correctAnalysis:
      'A primeira (regra 3-2-1-1-0) e a terceira (air-gap em fita LTO / Object Lock WORM) são verdadeiras; a segunda é falsa porque RAID 1 espelha imediatamente exclusões ou criptografia de ransomware.',
    optionErrors: {
      0: 'Incorreta: RAID 1 não protege contra ransomware e LTO air-gapped/WORM impede adulteração.',
      1: 'Incorreta: a regra 3-2-1-1-0 está descrita corretamente na primeira afirmativa.',
      3: 'Incorreta: a terceira afirmativa é verdadeira (air-gap e Object Lock garantem imutabilidade).'
    }
  },
  {
    id: 'sarah-6-05',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre componentes e políticas na proteção corporativa de dados, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O MediaAgent executa o plano de dados realizando deduplicação DDB, indexação e escrita em disco ou fita.\n( ) A rotação GFS (Grandfather-Father-Son) combina retenções diárias, semanais e mensais/anuais.\n( ) Restore Granular exige obrigatoriamente formatar o servidor de destino antes de extrair um único e-mail.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Commvault, políticas GFS e restore (Eixo 6). MediaAgent processa plano de dados (V); GFS combina ciclos curtos e longos (V); Restore Granular recupera objetos individuais sem rebuild do servidor (F).',
    correctAnalysis:
      'MediaAgent atua no plano de dados junto às bibliotecas e GFS organiza retenção em camadas; já o Restore Granular permite recuperar um arquivo ou caixa específica sem restaurar o servidor inteiro.',
    optionErrors: {
      1: 'Incorreta: GFS organiza exatamente ciclos diários/semanais/mensais e Restore Granular não formata o destino.',
      2: 'Incorreta: a primeira afirmativa descreve fielmente o papel do MediaAgent.',
      3: 'Incorreta: a terceira afirmativa confunde Restore Granular com Bare-Metal Recovery.'
    }
  },
  {
    id: 'sarah-6-12',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre segurança em redes sem fio (WEP, WPA2 e WPA3), considere as afirmativas a seguir:\n\nI. O padrão legado WEP usa RC4 com vetor de inicialização (IV) curto de 24 bits, sendo vulnerável.\nII. O WPA2 padronizou criptografia AES-CCMP (802.11i) em substituição ao legado TKIP.\nIII. O WPA3-Personal usa o protocolo SAE provendo forward secrecy e exige PMF obrigatório.\nIV. O WPA3 desativa a proteção PMF para garantir retrocompatibilidade com clientes WEP.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Mecanismos de segurança em redes sem fio (WEP, WPA, WPA2 e WPA3). WEP usa RC4/24-bit IV (I), WPA2 usa AES-CCMP (II), WPA3-Personal usa SAE com PMF obrigatório (III).',
    correctAnalysis:
      'As afirmativas I, II e III são corretas; a IV é falsa porque o WPA3 justamente torna obrigatório o PMF (802.11w) e bane algoritmos WEP/TKIP.',
    optionErrors: {
      0: 'Incorreta: inclui IV (WPA3 exige PMF e não aceita WEP) e omite III.',
      2: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-21',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os padrões IEEE 802.11 de redes sem fio, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em 2,4 GHz com canais de 20 MHz, os três canais clássicos não sobrepostos são 1, 6 e 11.\n( ) O 802.11ac (Wi-Fi 5) opera apenas em 5 GHz, enquanto o 802.11ax (Wi-Fi 6/6E) suporta 2,4, 5 e 6 GHz.\n( ) O padrão legado IEEE 802.11b opera nativamente em 5 GHz utilizando modulação OFDMA.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Redes sem fio (padrões IEEE 802.11) (Eixo 7. WI-FI/NAC). Canais 1, 6 e 11 em 2,4 GHz (V); 802.11ac exclusivo 5 GHz vs 802.11ax (V); 802.11b é legado 2,4 GHz DSSS/CCK sem OFDMA (F).',
    correctAnalysis:
      'As duas primeiras afirmativas descrevem fielmente canais de 2,4 GHz e bandas do 802.11ac/ax; a terceira é falsa porque 802.11b opera apenas em 2,4 GHz e OFDMA surgiu no 802.11ax.',
    optionErrors: {
      1: 'Incorreta: a segunda afirmativa é verdadeira e o 802.11b não opera em 5 GHz nem usa OFDMA.',
      2: 'Incorreta: os canais 1, 6 e 11 são de fato os três canais não sobrepostos de 20 MHz em 2,4 GHz.',
      3: 'Incorreta: a terceira afirmativa é falsa (802.11b é legado de 2,4 GHz).'
    }
  },
  {
    id: 'sarah-7-05',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Comparando RADIUS e TACACS+, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O RADIUS utiliza UDP (portas 1812 e 1813), cifra apenas a senha e combina autenticação e autorização.\n( ) O TACACS+ utiliza TCP porta 49, cifra todo o corpo do pacote e permite autorizar comandos CLI.\n( ) O pacote RADIUS Access-Challenge encerra imediatamente a sessão negando o acesso em definitivo.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. RADIUS e autenticação (Eixo 7. WI-FI/NAC). RADIUS = UDP 1812/1813 (V); TACACS+ = TCP 49 com criptografia total do payload e controle granular CLI (V); Access-Challenge é desafio intermediário EAP (negação definitiva é Access-Reject) (F).',
    correctAnalysis:
      'As duas primeiras afirmativas contrastam corretamente RADIUS e TACACS+; a terceira é falsa porque Access-Challenge solicita etapas extras (como token/EAP), cabendo ao Access-Reject negar o acesso.',
    optionErrors: {
      0: 'Incorreta: TACACS+ usa de fato TCP 49 cifrando todo o pacote e Access-Challenge não é negação final.',
      1: 'Incorreta: RADIUS opera sobre UDP 1812/1813 cifrando apenas o atributo de senha.',
      3: 'Incorreta: a terceira afirmativa confunde Access-Challenge com Access-Reject.'
    }
  },
  {
    id: 'sarah-7-11',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um switch PoE+ (802.3at, até 30 W PSE / 25,5 W PD) tem budget de 370 W. Quantos APs consumindo 25,5 W cada ele alimenta?',
    options: [
      'No máximo 12 Access Points simultâneos.',
      'No máximo 24 Access Points simultâneos.',
      'No máximo 16 Access Points simultâneos.',
      'No máximo 14 Access Points simultâneos.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. PoE (802.3af 15,4 W PSE / 12,95 W PD; 802.3at 30 W PSE / 25,5 W PD) e cálculo de orçamento de potência (Eixo 7). Dividindo 370 W por 25,5 W = 14,51; logo suporta no máximo 14 APs completos (14 × 25,5 = 357 W).',
    correctAnalysis:
      'Dividindo o budget de 370 W pelo consumo de 25,5 W por AP obtém-se 14,51; como não há fração de equipamento, o switch alimenta até 14 APs (357 W <= 370 W), pois 15 exigiriam 382,5 W.',
    optionErrors: {
      0: 'Incorreta: 12 APs usariam 306 W; o limite de 370 W comporta até 14 unidades a 25,5 W (ou 12 se fosse reservado 30 W na fonte).',
      1: 'Incorreta: 24 APs a 25,5 W demandariam 612 W, excedendo em muito os 370 W de orçamento.',
      2: 'Incorreta: 16 APs exigiriam 408 W, ultrapassando os 370 W disponíveis no switch.'
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre telefones IP em switches PoE com PC em cascata, considere as afirmativas a seguir:\n\nI. A VLAN de voz é anunciada automaticamente ao aparelho via LLDP-MED ou CDP.\nII. A marcação de QoS recomendada para mídia RTP em DiffServ é DSCP EF (valor 46).\nIII. Os padrões 802.3af e 802.3at fornecem até 15,4 W e 30 W na fonte PSE, respectivamente.\nIV. Deve-se configurar trunk aberto com todas as 4.094 VLANs para o PC usando DSCP 0.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. VLAN de voz, QoS, PoE (Eixo 8. Telefonia IP). LLDP-MED/CDP anuncia Voice VLAN (I), DSCP EF 46 prioriza RTP (II) e 802.3af/at padronizam PoE (III).',
    correctAnalysis:
      'As afirmativas I, II e III estão corretas; a IV é falsa porque liberar todas as 4.094 VLANs em trunk ao PC cria risco de VLAN hopping e DSCP 0 retira a prioridade do áudio RTP.',
    optionErrors: {
      0: 'Incorreta: inclui IV (trunk aberto e DSCP 0 violam segurança e QoS) e omite III.',
      1: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      2: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-8-04',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre sinalização e transporte de mídia em chamadas SIP/RTP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O protocolo SDP (Session Description Protocol) dentro do SIP negocia IP, portas UDP e codecs aceitos.\n( ) O RTCP acompanha a sessão RTP trocando estatísticas de perda de pacotes, jitter e sincronismo.\n( ) O protocolo RTP transporta os pacotes de áudio exclusivamente pela porta TCP 5060.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2. Sinalização e transporte de mídia (Eixo 8. Telefonia IP). SDP descreve parâmetros de mídia no SIP (V); RTCP envia métricas de QoS do fluxo RTP (V); TCP/UDP 5060 é sinalização SIP e RTP trafega sobre UDP em portas dinâmicas pares (F).',
    correctAnalysis:
      'As duas primeiras afirmativas definem exatamente SDP e RTCP; a terceira é falsa porque 5060 pertence à sinalização SIP, enquanto o áudio RTP usa portas UDP dinâmicas altas (tipicamente 16384–32767 ou 10000–20000).',
    optionErrors: {
      1: 'Incorreta: RTCP de fato monitora QoS do fluxo RTP e RTP não trafega na porta 5060.',
      2: 'Incorreta: a negociação de codecs, IPs e portas no corpo SIP é função do SDP.',
      3: 'Incorreta: porta 5060 é SIP de sinalização, nunca mídia RTP sobre TCP.'
    }
  },
  {
    id: 'sarah-8-06',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre Voice VLAN em switches de acesso com telefone IP e PC em cascata, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A porta combina VLAN de acesso (untagged para o PC) e VLAN de voz (tagged 802.1Q para o telefone).\n( ) Protocolos CDP ou LLDP-MED anunciam automaticamente o ID da Voice VLAN ao aparelho telefônico.\n( ) Liberar um trunk irrestrito com todas as 4.094 VLANs até a porta do PC é a prática mais segura.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. VLAN de voz (Eixo 8. Telefonia IP). Access + Voice VLAN (V) anunciadas via CDP/LLDP-MED (V) isolam telefone e PC sem expor todas as VLANs em trunk aberto ao usuário (F).',
    correctAnalysis:
      'As duas primeiras afirmativas descrevem a configuração segura recomendada; a terceira é falsa porque expor trunk aberto ao PC facilita ataques de VLAN hopping.',
    optionErrors: {
      0: 'Incorreta: CDP/LLDP-MED de fato anunciam a Voice VLAN ao telefone e trunk irrestrito ao PC é inseguro.',
      1: 'Incorreta: a primeira afirmativa é verdadeira (PC untagged na access VLAN e telefone tagged na voice VLAN).',
      3: 'Incorreta: a terceira afirmativa é falsa por criar vetor grave de VLAN hopping.'
    }
  },
  {
    id: 'sarah-8-08',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre virtualização de hardware e hipervisores, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Extensões de CPU como Intel VT-x e AMD-V permitem executar sistemas convidados sem modificar o kernel na virtualização total.\n( ) Memory Ballooning é a técnica em que o driver do guest devolve memória ociosa ao hipervisor sob contenção.\n( ) A paravirtualização impede qualquer driver específico no sistema operacional convidado.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'V – V – F.',
      'F – V – F.',
      'V – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Virtualização e hipervisores (Eixo 5). VT-x/AMD-V habilitam virtualização assistida por hardware (V); Memory Ballooning usa driver interno (vmmemctl) para recuperar RAM do guest (V); paravirtualização justamente utiliza drivers/kernel conscientes do hipervisor (hypercalls) (F).',
    correctAnalysis:
      'As duas primeiras afirmativas estão corretas; a terceira é falsa porque a paravirtualização adapta o kernel/drivers do convidado para se comunicar com o hipervisor via hypercalls.',
    optionErrors: {
      0: 'Incorreta: a paravirtualização utiliza drivers e chamadas conscientes do hipervisor.',
      2: 'Incorreta: VT-x e AMD-V são extensões de hardware para virtualização total sem alteração do SO convidado.',
      3: 'Incorreta: o Ballooning é realmente o mecanismo de recuperação cooperativa de memória.'
    }
  },
  {
    id: 'sarah-5-15',
    editalItemId: '5.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual diferença define os discos virtuais Thin Provisioned frente aos Thick Provision Eager Zeroed em um datastore VMFS?',
    options: [
      'Thin aloca blocos sob demanda conforme escrita; Eager Zeroed pré-aloca e zera todo o espaço na criação.',
      'Thin zera todos os blocos antecipadamente; Eager Zeroed só consome espaço quando há snapshot.',
      'Thin é exclusivo de datastores NFS v3; Eager Zeroed funciona apenas em discos USB locais.',
      'Ambos reservam 100% da capacidade física imediata no array antes de ligar a VM.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. datastore (Eixo 5). Discos Thin crescem conforme dados são gravados (economizam storage inicial mas permitem overcommitment); Thick Provision Eager Zeroed reserva e zera todos os blocos no provisionamento (máxima previsibilidade e exigência de clusters como MSCS/WSFC).',
    correctAnalysis:
      'Thin Provisioning aloca espaço dinamicamente sob demanda, enquanto Thick Provision Eager Zeroed reserva e limpa (zera) toda a área no momento da criação.',
    optionErrors: {
      1: 'Incorreta: inverte os comportamentos de Thin e Eager Zeroed.',
      2: 'Incorreta: VMFS suporta Thin, Lazy Zeroed e Eager Zeroed em SANs corporativas.',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma SAN Fibre Channel corporativa, como atuam complementarmente o Zoning e o LUN Masking para proteger os volumes de armazenamento?',
    options: [
      'Zoning criptografa blocos no SSD; LUN Masking define compressão no host.',
      'Zoning roda dentro do Windows Server; LUN Masking atua na rede Ethernet.',
      'Zoning isola WWNs nos switches FC; LUN Masking libera LUNs no storage.',
      'Ambos bloqueiam portas TCP 3260 apenas em redes iSCSI sem Fibre Channel.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. LUN (Eixo 5). O Zoning é configurado no fabric (switches Fibre Channel) agrupando WWPNs de iniciadores (HBAs) e alvos (portas do storage); o LUN Masking é configurado no próprio storage associando cada LUN apenas aos WWNs/IQNs autorizados.',
    correctAnalysis:
      'Zoning segmenta a visibilidade no switch SAN (fabric), enquanto LUN Masking restringe no array de discos quais iniciadores montam cada unidade lógica (LUN).',
    optionErrors: {
      0: 'Incorreta: nenhum dos dois mecanismos realiza criptografia ou compressão de blocos.',
      1: 'Incorreta: Zoning reside no switch SAN FC e LUN Masking reside no controlador do storage.',
      3: 'Incorreta: Zoning por WWN é conceito nativo de SAN Fibre Channel (não porta TCP 3260 iSCSI).'
    }
  },
  {
    id: 'sarah-5-20',
    editalItemId: '5.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre LUNs, Zoning e LUN Masking em ambientes SAN, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Uma LUN (Logical Unit Number) é o identificador de um volume lógico exposto pelo storage ao servidor via SCSI.\n( ) Expor a mesma LUN VMFS sem máscara adequada para hosts Windows/Linux fora do cluster pode causar corrupção de dados.\n( ) O Soft Zoning no switch SAN garante proteção criptográfica superior ao LUN Masking dispensando controle no storage.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. LUN (Eixo 5). LUN identifica o volume lógico SCSI entregue ao host (V); múltiplos sistemas de arquivos não-clusterizados gravando na mesma LUN corrompem metadados (V); Zoning atua por controle de acesso WWN no fabric, não criptografia, e não dispensa LUN Masking (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque Zoning não aplica criptografia e deve atuar em defesa em profundidade junto ao LUN Masking.',
    optionErrors: {
      0: 'Incorreta: dois hosts não coordenados acessando a mesma LUN podem corromper o sistema de arquivos.',
      1: 'Incorreta: LUN é realmente a unidade lógica SCSI apresentada pelo storage ao servidor.',
      2: 'Incorreta: Zoning não fornece criptografia nem dispensa controle de acesso no storage.'
    }
  },
  {
    id: 'sarah-5-21',
    editalItemId: '5.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na análise de desempenho de armazenamento via utilitário esxtop no ESXi, o que representam os contadores DAVG, KAVG e GAVG?',
    options: [
      'Capacidade total, espaço em thin e espaço livre no datastore VMFS.',
      'Perda de pacotes TCP, jitter de voz e largura de banda de vMotion.',
      'Latência do storage (DAVG), fila VMkernel (KAVG) e total na VM (GAVG).',
      'Tempo de reboot do ESXi, cache L1 de CPU e latência de consulta DNS.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. latência (Eixo 5). No esxtop (aba `u`/`d`), DAVG/cmd mede o tempo gasto após o comando sair da HBA rumo ao storage; KAVG/cmd mede a espera dentro das filas do VMkernel; e GAVG/cmd = DAVG + KAVG reflete o atraso total percebido pelo sistema convidado.',
    correctAnalysis:
      'GAVG (Guest Average) é a soma de DAVG (tempo de resposta do dispositivo/SAN) com KAVG (tempo retido na pilha/filas do VMkernel).',
    optionErrors: {
      0: 'Incorreta: DAVG/KAVG/GAVG medem latência em milissegundos, não capacidade em gigabytes.',
      1: 'Incorreta: métricas de rede ficam na aba `n`, enquanto DAVG/KAVG/GAVG são contadores de armazenamento SCSI.',
      3: 'Incorreta: não têm relação com reboot de host, cache L1 ou resolução DNS.'
    }
  },
  {
    id: 'sarah-5-24',
    editalItemId: '5.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre ferramentas de troubleshooting em VMware ESXi, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O arquivo /var/log/vmkernel.log registra eventos críticos de hardware, drivers, rede VMkernel e armazenamento SAN.\n( ) O comando esxtop permite alternar entre visualizações de CPU (c), memória (m), rede (n) e disco/adaptador (d/u).\n( ) O recurso vSphere HA Component Protection (VMCP) impede automaticamente qualquer ação após perda PDL.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. troubleshooting (Eixo 5). vmkernel.log concentra eventos de kernel/storage/rede (V); esxtop usa teclas c/m/n/d/u em tempo real (V); o VMCP existe justamente para tomar ações automáticas configuradas (como desligar e reiniciar VMs em outro host saudável) diante de falhas APD/PDL (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque o VMCP (VM Component Protection) automatiza a mitigação de falhas de datastore em APD/PDL.',
    optionErrors: {
      0: 'Incorreta: as teclas c, m, n, d e u são atalhos reais do esxtop.',
      2: 'Incorreta: /var/log/vmkernel.log é o log principal do kernel ESXi para armazenamento e rede.',
      3: 'Incorreta: a função do VMCP é agir automaticamente diante de estados APD e PDL, não impedir ações.'
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre deduplicação em soluções corporativas de backup, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A deduplicação na origem (source-side) calcula hashes antes do envio, economizando largura de banda de rede.\n( ) A deduplicação inline remove blocos redundantes durante a gravação em tempo real, dispensando área extra de staging.\n( ) A deduplicação no destino (target-side) envia zero bytes pela rede mesmo no primeiro backup completo.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – F – V.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.3. Deduplicação (Eixo 6. Backup). Source-side reduz tráfego de rede enviando apenas blocos inéditos (V); inline deduplica no fluxo sem staging pós-backup (V); target-side recebe todos os dados pela rede e só deduplica ao chegar no appliance destino (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque na deduplicação target-side os dados trafegam normalmente pela rede até o servidor/appliance de destino.',
    optionErrors: {
      0: 'Incorreta: a deduplicação source-side reduz efetivamente o volume transmitido na rede.',
      1: 'Incorreta: deduplicação inline atua em linha durante a ingestão, sem etapa posterior de staging.',
      2: 'Incorreta: target-side não evita o tráfego inicial na rede nem reduz o primeiro envio a zero bytes.'
    }
  },
  {
    id: 'sarah-6-15',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
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
  // ==================== EXPANSÃO FASE 4: EIXO 7 (+3) ====================
  {
    id: 'sarah-7-13',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
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
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual a função do Buffer de Jitter (Jitter Buffer) nos aparelhos e gateways que recebem fluxos de áudio RTP?',
    options: [
      'Armazenar brevemente pacotes para absorver variações de atraso e entregá-los em cadência regular.',
      'Converter pacotes UDP em sessões TCP confiáveis exigindo retransmissão de quadros perdidos.',
      'Criptografar a sinalização SIP na porta TCP 5061 substituindo o uso de certificados TLS.',
      'Aumentar a potência elétrica enviada pelo switch PoE durante chamadas simultâneas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. RTP (Eixo 8. Telefonia IP). Pacotes RTP sobre IP/UDP podem chegar com intervalos irregulares (jitter); o Jitter Buffer retém um pequeno conjunto de pacotes por alguns milissegundos para reordená-los por timestamp/sequência e reproduzir voz contínua.',
    correctAnalysis:
      'O Jitter Buffer suaviza variações no tempo de chegada dos pacotes RTP, evitando cortes de áudio em troca de um pequeno acréscimo controlado de latência.',
    optionErrors: {
      1: 'Incorreta: áudio em tempo real não usa retransmissão TCP nem converte UDP em TCP no receptor.',
      2: 'Incorreta: criptografia de sinalização pertence ao SIPS/TLS (porta 5061), não ao buffer de jitter RTP.',
      3: 'Incorreta: alimentação elétrica PoE não possui relação com buffering de pacotes de mídia.'
    }
  },
  {
    id: 'sarah-8-14',
    editalItemId: '8.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre o protocolo RTP no transporte de mídia VoIP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O RTP transporta áudio e vídeo sobre UDP priorizando entrega em tempo real em vez de retransmissão.\n( ) O número de sequência e o timestamp no cabeçalho RTP permitem detectar perdas e reordenar pacotes no destino.\n( ) Quando um pacote RTP de áudio se perde na rede, o protocolo RTP exige pausa da chamada para retransmissão integral.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. RTP (Eixo 8. Telefonia IP). RTP roda sobre UDP sem retransmissão (V); usa Sequence Number e Timestamp para detecção de perda, ordenação e sincronismo (V); pacotes atrasados/perdidos em voz são descartados, jamais pausando a chamada para retransmissão (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque retransmitir pacotes de voz em tempo real adicionaria atraso inaceitável à conversação.',
    optionErrors: {
      0: 'Incorreta: o cabeçalho RTP contém exatamente Sequence Number e Timestamp para ordenação e jitter.',
      2: 'Incorreta: RTP utiliza transporte UDP em tempo real sem esperar confirmações ACK.',
      3: 'Incorreta: o protocolo RTP não realiza pausa nem retransmissão de mídia perdida.'
    }
  },
  {
    id: 'sarah-8-15',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual função exerce o SBC (Session Border Controller) na borda entre o PBX IP corporativo e o tronco SIP da operadora pública (PSTN)?',
    options: [
      'Substituir os switches de acesso PoE na alimentação elétrica dos telefones IP internos.',
      'Atuar exclusivamente como servidor DHCP distribuindo endereços IP às estações.',
      'Compactar bancos de dados do sistema de correio eletrônico Exchange durante backups.',
      'Proteger a borda VoIP, ocultar topologia interna, normalizar SIP e mediar travessia de NAT.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Voz sobre IP (Eixo 8. Telefonia IP). O SBC atua como firewall especializado de camada de sessão na fronteira entre a rede interna e provedores/filiais: faz topology hiding, controle de admissão, transcodificação, inspeção anti-fraude/DoS SIP e traversal de NAT para RTP.',
    correctAnalysis:
      'O SBC protege o PBX IP na borda, traduz e normaliza dialetos SIP/SDP, oculta IPs internos (topology hiding) e ancora mídia RTP através de NAT.',
    optionErrors: {
      0: 'Incorreta: alimentação elétrica dos telefones IP é papel dos switches PoE.',
      1: 'Incorreta: concessão de IPs locais pertence ao serviço DHCP, não ao SBC.',
      2: 'Incorreta: backups de correio eletrônico não têm relação com sinalização VoIP.'
    }
  },
  {
    id: 'sarah-8-16',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
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
