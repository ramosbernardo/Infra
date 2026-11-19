import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_5_TO_8: readonly Question[] = Object.freeze([
  // ==================== EIXO 5: 5. Virtualização, storage e nuvem. (10 questões) ====================
  {
    id: 'sarah-13',
    editalItemId: '5.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um storage receberá 8 discos SSD de 1 TB cada para hospedar um banco de dados transacional que exige tolerância a falhas (incluindo múltiplas falhas simultâneas em pares distintos) sem perda de dados e alta taxa de IOPS de escrita aleatória sem penalidade de cálculo de paridade. Qual nível de RAID e respectiva capacidade útil atendem integralmente ao requisito?',
    options: [
      'RAID 5 com 7 TB úteis, pois distribui paridade simples sem penalidade de escrita.',
      'RAID 6 com 6 TB úteis, pois elimina totalmente a penalidade de escrita aleatória presente no RAID 5.',
      'RAID 10 com 4 TB úteis, pois combina espelhamento e striping sem cálculo de paridade e suporta múltiplas falhas em pares distintos.',
      'RAID 0 com 8 TB úteis, pois entrega máximo IOPS de escrita e tolera falha simultânea de dois discos.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.3. RAID (Eixo 5. Virtualização, storage e nuvem). RAID 10 oferece 50% da capacidade (4 TB), zero write penalty de paridade e tolerância de 1 disco em cada par espelhado.',
    correctAnalysis:
      'RAID 10 (1+0) dispensa cálculo de paridade (write penalty = 2 em vez de 4 ou 6), entregando excelente desempenho de escrita aleatória com 4 TB úteis (50%) e tolerando 1 falha por par espelhado (até 4 discos se em pares distintos).',
    optionErrors: {
      0: 'Incorreta: RAID 5 tolera apenas 1 disco falho (não 2) e possui write penalty de 4 operações I/O por escrita.',
      1: 'Incorreta: RAID 6 possui a maior penalidade de escrita (write penalty = 6 I/Os devido às duas paridades P+Q).',
      3: 'Incorreta: RAID 0 não possui qualquer redundância; a falha de 1 único disco causa perda total do volume.'
    }
  },
  {
    id: 'sarah-14',
    editalItemId: '5.1.5',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao contratar uma solução de computação em nuvem no modelo PaaS (Platform as a Service) em comparação ao modelo IaaS (Infrastructure as a Service), qual divisão de responsabilidades ocorre tipicamente?',
    options: [
      'Em PaaS, o cliente gerencia o sistema operacional, aplicação de patches do SO e configuração de rede virtual, enquanto o provedor gerencia apenas o hardware físico.',
      'Em PaaS, o provedor gerencia infraestrutura física, sistema operacional e runtime da plataforma, cabendo ao cliente gerenciar suas aplicações e dados.',
      'Em IaaS, o provedor gerencia o código da aplicação e os dados do cliente, restando ao cliente apenas o controle de usuários finais.',
      'Em PaaS, não existe elasticidade automática, pois esse recurso é exclusivo de nuvens privadas implantadas em SaaS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.5. Computação em nuvem: modelos de serviço (IaaS, PaaS e SaaS). No PaaS o provedor abstrai hardware, SO e middleware/runtime.',
    correctAnalysis:
      'No modelo PaaS, o provedor administra servidores, storage, rede, sistema operacional e runtime, permitindo que o cliente implante e gerencie apenas suas aplicações e dados.',
    optionErrors: {
      0: 'Incorreta: gerenciar sistema operacional, patches do SO e rede virtual caracteriza o modelo IaaS, não PaaS.',
      2: 'Incorreta: abstrair até aplicação e dados para o usuário final caracteriza o modelo SaaS, não IaaS.',
      3: 'Incorreta: elasticidade é característica essencial da computação em nuvem em qualquer modelo de serviço/implantação.'
    }
  },
  {
    id: 'sarah-15',
    editalItemId: '5.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um cluster VMware vSphere/ESXi gerenciado pelo vCenter, o administrador precisa retirar um host ESXi para manutenção de memória RAM sem desligar as máquinas virtuais em execução e, posteriormente, investigar gargalos de latência de disco (DAVG/KAVG) no storage iSCSI. Quais recursos utilizam-se respectivamente?',
    options: [
      'vSphere HA para mover as VMs ligadas sem parada e snapshots em cascata para reduzir a latência DAVG.',
      'vMotion para migração a quente das VMs ligadas entre hosts e esxtop para inspeção de latência DAVG/KAVG e filas iSCSI.',
      'Storage vMotion para desligar o host ESXi em manutenção e LUN masking para converter IOPS em largura de banda.',
      'vSphere Fault Tolerance para converter discos iSCSI em NAS e vCenter DRS para reiniciar o kernel Linux do ESXi.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. VMware vSphere/vCenter/ESXi, vMotion, iSCSI, latência e troubleshooting (Eixo 5). vMotion migra VMs ligadas entre hosts; esxtop monitora DAVG (latência do dispositivo/storage) e KAVG (latência do kernel).',
    correctAnalysis:
      'O vMotion realiza live migration das VMs em execução entre hosts ESXi para manutenção sem downtime, e o utilitário esxtop exibe métricas em tempo real como DAVG (latência do storage) e KAVG (latência do VMkernel).',
    optionErrors: {
      0: 'Incorreta: vSphere HA reinicia VMs após falha inesperada (com downtime), e manter snapshots aumenta sobrecarga e degrada I/O.',
      2: 'Incorreta: Storage vMotion move arquivos de disco entre datastores (não esvazia CPU/RAM do host para manutenção física) e LUN masking controla acesso a LUNs.',
      3: 'Incorreta: ESXi usa VMkernel proprietário (não kernel Linux) e Fault Tolerance não converte blocos iSCSI em arquivos NAS.'
    }
  },
  {
    id: 'sarah-5-04',
    editalItemId: '5.1.4',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao projetar o armazenamento de um novo ambiente virtualizado, o arquiteto compara soluções NAS e SAN. Qual afirmação diferencia com exatidão essas duas tecnologias?',
    options: [
      'NAS fornece armazenamento em nível de arquivos (NFS/SMB) sobre rede IP, enquanto SAN fornece armazenamento em nível de blocos (LUNs via Fibre Channel ou iSCSI).',
      'SAN opera exclusivamente em nível de arquivos HTTP/S3, enquanto NAS apresenta discos brutos sem sistema de arquivos ao servidor.',
      'Em uma SAN Fibre Channel, múltiplos servidores Windows independentes podem montar e gravar simultaneamente na mesma LUN NTFS sem software de cluster.',
      'iSCSI utiliza cabeamento óptico Fibre Channel proprietário incompatível com switches Ethernet TCP/IP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4. Tecnologias de armazenamento NAS e SAN (Eixo 5). NAS = file-level (NFS/SMB); SAN = block-level (FC/iSCSI).',
    correctAnalysis:
      'Soluções NAS expõem diretórios/arquivos gerenciados pelo próprio storage via NFS ou SMB, enquanto redes SAN expõem blocos lógicos (LUNs) formatados pelo servidor via FC ou iSCSI.',
    optionErrors: {
      1: 'Incorreta: os conceitos de arquivo vs bloco foram trocados, e HTTP/S3 é Object Storage.',
      2: 'Incorreta: montar a mesma LUN NTFS em múltiplos hosts sem sistema de arquivos clusterizado (CSV/VMFS) corrompe imediatamente o volume.',
      3: 'Incorreta: iSCSI justamente encapsula comandos SCSI sobre redes Ethernet TCP/IP padrão (porta 3260).'
    }
  },
  {
    id: 'sarah-5-05',
    editalItemId: '5.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na interligação de servidores ESXi a um storage iSCSI na porta TCP padrão 3260 usando Jumbo Frames (MTU 9000) em VLAN dedicada, qual condição é obrigatória para evitar fragmentação ou queda de I/O, e como se denominam os identificadores das pontas?',
    options: [
      'Configurar MTU 9000 apenas no storage (Target) e manter MTU 1500 nos switches; identificadores são chamados WWPN.',
      'Todas as interfaces no caminho (VMkernel/Initiator, switches Ethernet da VLAN de storage e portas Target do storage) devem suportar MTU >= 9000; identificadores iSCSI usam formato IQN.',
      'Habilitar roteamento NAT entre Initiator e Target com MTU 576 para acelerar o throughput sequencial.',
      'Utilizar porta UDP 3260 sem autenticação CHAP para que o switch faça fragmentação automática L2.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. iSCSI (Eixo 5. Virtualização, storage e nuvem). iSCSI usa TCP 3260, formato IQN (Initiator/Target) e exige MTU uniforme ponta a ponta.',
    correctAnalysis:
      'Jumbo Frames exigem configuração consistente de MTU >= 9000 no Initiator, nos switches L2/L3 do trajeto e no Target; o endereçamento iSCSI emprega IQNs (iSCSI Qualified Name).',
    optionErrors: {
      0: 'Incorreta: se o switch no meio tiver MTU 1500, quadros de 9000 bytes serão descartados ou fragmentados; WWPN é identificador Fibre Channel.',
      2: 'Incorreta: NAT e MTU 576 degradam drasticamente o armazenamento em bloco iSCSI.',
      3: 'Incorreta: iSCSI opera exclusivamente sobre TCP porta 3260 (não UDP), e switches L2 não fragmentam quadros Ethernet.'
    }
  },
  {
    id: 'sarah-5-06',
    editalItemId: '5.2.9',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um servidor Linux conectado via duas placas HBA a dois switches Fibre Channel redundantes passou a exibir o mesmo disco de 4 TB duas vezes (/dev/sdb e /dev/sdc) após o mapeamento da LUN no storage. Qual recurso deve ser configurado no sistema operacional e qual protocolo do storage orienta o caminho ótimo entre controladoras?',
    options: [
      'Multipathing (MPIO / device-mapper-multipath) para consolidar os caminhos redundantes em um único dispositivo lógico e ALUA para identificar caminhos otimizados.',
      'RAID 0 unindo /dev/sdb e /dev/sdc para somar 8 TB de capacidade utilizável.',
      'PortFast no switch Fibre Channel para bloquear /dev/sdc como porta alternate do STP.',
      'Snapshot do datastore para esconder o segundo caminho SCSI no BIOS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. multipath e LUN (Eixo 5). Sem MPIO, cada caminho aparece como disco separado; ALUA informa qual controladora é proprietária/otimizada para a LUN.',
    correctAnalysis:
      'O software de Multipath (MPIO/DM-Multipath) agrupa os múltiplos caminhos físicos da mesma LUN em um dispositivo único com failover/balanceamento, usando ALUA para priorizar caminhos ativos/otimizados.',
    optionErrors: {
      1: 'Incorreta: criar RAID 0 sobre dois caminhos do MESMO disco físico causaria corrupção catastrófica imediata.',
      2: 'Incorreta: switches Fibre Channel não executam STP/PortFast Ethernet.',
      3: 'Incorreta: snapshots congelam estado de disco de VM e não gerenciam caminhos redundantes SCSI.'
    }
  },
  {
    id: 'sarah-5-07',
    editalItemId: '5.2.5',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma equipe manteve 12 snapshots diários acumulados em uma VM de banco de dados no VMware vSphere como "substituto rápido de backup", levando o datastore VMFS a 99% de ocupação e causando lentidão severa. Qual explicação técnica descreve esse comportamento?',
    options: [
      'Cada snapshot congela o disco anterior como leitura e cria um novo arquivo delta que cresce com as gravações, consumindo espaço extra no datastore e degradando leitura por percorrer toda a cadeia de deltas.',
      'Snapshots compactam os blocos em memória RAM do host ESXi até saturar o vMotion.',
      'Snapshots convertem discos Thick Eager Zeroed em fitas LTO virtuais dentro do vCenter.',
      'A exclusão de snapshots aumenta definitivamente o espaço ocupado porque copia a VM inteira para outro datastore.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. snapshots e datastore (Eixo 5). Snapshots geram cadeias de arquivos delta; nunca devem substituir backup nem ficar retidos por semanas.',
    correctAnalysis:
      'Snapshots desviam escritas para discos delta (-delta.vmdk), podendo crescer até o tamanho do disco base e impondo penalidade de busca através de múltiplos arquivos na cadeia até a consolidação.',
    optionErrors: {
      1: 'Incorreta: discos delta ficam armazenados em disco no datastore, não comprimidos na RAM do vMotion.',
      2: 'Incorreta: snapshots não convertem VMDKs em fitas LTO virtuais.',
      3: 'Incorreta: excluir/consolidar snapshots aplica as alterações ao disco base e libera o espaço adicional dos arquivos delta.'
    }
  },
  {
    id: 'sarah-5-08',
    editalItemId: '5.2.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um cluster VMware vSphere HA configurado com Admission Control, qual comportamento ocorre quando um host ESXi falha abruptamente por perda de energia versus quando ocorre apenas isolamento da rede de gerenciamento mantendo o acesso ao storage?',
    options: [
      'Na falha total do host, o vSphere HA reinicia as VMs afetadas nos demais hosts saudáveis (com breve downtime); o Datastore Heartbeating evita falso-positivo de falha quando apenas a rede de gerenciamento cai mantendo I/O no storage.',
      'O vSphere HA garante zero downtime (zero perda de pacotes/memória) porque replica cada instrução de CPU em lockstep para todos os hosts.',
      'Admission Control impede que qualquer VM seja ligada no cluster caso haja memória livre disponível nos hosts.',
      'Sem o vCenter Server online no momento da queda do host ESXi, o vSphere HA fica completamente inoperante e não reinicia nenhuma VM.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. HA (Eixo 5. Virtualização, storage e nuvem). vSphere HA usa agentes FDM nos próprios hosts (funciona mesmo se o vCenter cair) + Datastore Heartbeating contra falso isolamento.',
    correctAnalysis:
      'O vSphere HA reinicia VMs em outros hosts após falha física (com reinício do SO convidado) e utiliza Datastore Heartbeating para distinguir host morto de host apenas isolado da rede de gerência.',
    optionErrors: {
      1: 'Incorreta: replicação contínua sem downtime é recurso do vSphere Fault Tolerance (FT), não do vSphere HA.',
      2: 'Incorreta: Admission Control apenas reserva margem de recursos para garantir failover, não bloqueia VMs quando há capacidade dentro da reserva.',
      3: 'Incorreta: o vSphere HA opera de forma autônoma entre os hosts ESXi (agentes FDM Master/Slave) mesmo com o vCenter offline.'
    }
  },
  {
    id: 'sarah-5-09',
    editalItemId: '5.2.10',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um banco de dados OLTP executa majoritariamente operações aleatórias em blocos de 8 KB e exige 20.000 IOPS sustentados. Qual relação técnica entre IOPS, tamanho de bloco e Throughput (MB/s) aplica-se a essa carga de trabalho?',
    options: [
      'Throughput = IOPS × Tamanho do Bloco; logo, 20.000 IOPS em blocos de 8 KB (8.192 B) equivalem a 156,25 MiB/s (163,84 MB/s decimais, ou ~160 MB/s aproximados), podendo saturar por IOPS mesmo abaixo da banda máxima de 10 Gbps.',
      'IOPS e Throughput são grandezas idênticas medidas sempre em Megabits por segundo.',
      'Blocos de 1 MB reduzem drasticamente o Throughput e aumentam os IOPS em comparação a blocos de 4 KB.',
      'Em SSDs NVMe, a fila de comandos (Queue Depth) máxima é limitada a 1 comando por vez igual ao padrão SATA legado.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. IOPS e Item 1.2. padrões de disco/interfaces (Eixo 5). Throughput = IOPS × Block Size; cargas aleatórias pequenas podem esgotar IOPS antes da banda da rede.',
    correctAnalysis:
      'Multiplicando 20.000 operações/s por 8 KiB (8.192 B) obtêm-se 156,25 MiB/s (ou 163,84 MB/s em base decimal; ~160 MB/s usando 8.000 B) — valor bem abaixo de um link 10 GbE (~1.250 MB/s), provando que o gargalo de bancos OLTP costuma ser IOPS/latência e não banda bruta.',
    optionErrors: {
      1: 'Incorreta: IOPS mede contagem de operações por segundo; Throughput mede volume de dados por segundo (MB/s ou GB/s).',
      2: 'Incorreta: blocos maiores (1 MB) aumentam o Throughput sequencial para um dado número de IOPS.',
      3: 'Incorreta: SATA/AHCI suporta 1 fila com 32 comandos, enquanto NVMe suporta até 64K filas com 64K comandos cada.'
    }
  },
  {
    id: 'sarah-5-10',
    editalItemId: '5.1.2',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na escolha de tecnologias e modelos de implantação em nuvem e armazenamento, uma instituição hospitalar mantém prontuários em data center próprio (por requisitos regulatórios locais) integrados via VPN/Direct Connect a serviços elásticos de processamento analítico em nuvem pública. Esse modelo de implantação e o armazenamento adequado para arquivos estáticos imutáveis via HTTP/S3 são, respectivamente:',
    options: [
      'Nuvem Comunitária e Armazenamento em Bloco iSCSI.',
      'Nuvem Híbrida e Armazenamento de Objetos (Object Storage).',
      'Nuvem Privada pura e RAID 0 em discos SATA.',
      'SaaS puro e Fita LTO montada via NFS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.5. Modelos de implantação (pública, privada e híbrida) e Item 1.2. serviços de armazenamento (bloco, arquivo e objeto) (Eixo 5).',
    correctAnalysis:
      'Integrar infraestrutura privada local com nuvem pública forma uma Nuvem Híbrida; dados não estruturados/imutáveis acessados via API HTTP/REST com metadados utilizam Object Storage.',
    optionErrors: {
      0: 'Incorreta: Nuvem Comunitária é compartilhada entre organizações com interesses comuns, e iSCSI é armazenamento em bloco para servidores/VMs.',
      2: 'Incorreta: usar recursos integrados de nuvem pública caracteriza modelo híbrido, não privado puro.',
      3: 'Incorreta: fitas LTO são mídias sequenciais de backup, não montadas nativamente como filesystem NFS em nuvem.'
    }
  },

  // ==================== EIXO 6: 6. Backup. (10 questões) ====================
  {
    id: 'sarah-16',
    editalItemId: '6.1.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma rotina semanal executa Backup Completo no domingo (limpando o archive bit) e Backups Incrementais de segunda a sexta-feira. Caso seja necessário restaurar integralmente um servidor na sexta-feira pela manhã (antes da janela da noite), qual afirmação está tecnicamente correta?',
    options: [
      'Basta restaurar o Backup Completo de domingo e o último Backup Incremental de quinta-feira.',
      'É necessário restaurar o Backup Completo de domingo seguido sequencialmente pelos incrementais de segunda, terça, quarta e quinta-feira.',
      'Basta restaurar apenas o Backup Incremental de quinta-feira, pois incrementais não limpam o archive bit.',
      'O Backup Incremental ocupa mais espaço em disco que o Diferencial ao longo da semana, porém tem o restore mais rápido.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Tipos de backup (completo, incremental e diferencial). Cada incremental registra somente alterações desde o backup anterior e limpa o archive bit, exigindo toda a cadeia no restore.',
    correctAnalysis:
      'Como cada backup incremental copia apenas o que mudou desde o backup imediatamente anterior e limpa o archive bit, a restauração exige o último Full mais todos os incrementais até a data desejada.',
    optionErrors: {
      0: 'Incorreta: restaurar apenas o último Full + o último backup da quinta-feira aplica-se ao Backup Diferencial, não ao Incremental.',
      2: 'Incorreta: o Backup Incremental limpa o archive bit (quem NÃO limpa é o Diferencial) e não contém os arquivos inalterados desde domingo.',
      3: 'Incorreta: é o inverso — o Incremental ocupa menos espaço e executa mais rápido, porém possui o tempo de restauração mais lento.'
    }
  },
  {
    id: 'sarah-17',
    editalItemId: '6.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em ambientes corporativos de proteção de dados (como Commvault ou equivalentes), a técnica de deduplicação "source-side" (na origem) e "inline" diferencia-se da deduplicação "target-side" pós-processada porque:',
    options: [
      'A deduplicação source-side identifica blocos duplicados ainda no cliente antes do envio pela rede, reduzindo o tráfego WAN/LAN consumido na janela de backup.',
      'A deduplicação target-side pós-processada elimina a necessidade de armazenamento temporário em disco no MediaAgent antes da gravação.',
      'A deduplicação inline impede o uso de políticas de retenção GFS e obriga todos os backups a serem executados como completos sem compactação.',
      'A deduplicação source-side exige maior largura de banda de rede porque transfere primeiro todos os dados brutos para depois calcular hashes no servidor.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.3. Deduplicação (Eixo 6. Backup). Na deduplicação source-side, os hashes de blocos são verificados no cliente antes da transmissão, economizando banda de rede.',
    correctAnalysis:
      'Na deduplicação source-side inline, o agente calcula hashes dos blocos na origem e envia apenas blocos inéditos pela rede, reduzindo significativamente o tráfego e o espaço consumido.',
    optionErrors: {
      1: 'Incorreta: a deduplicação pós-processada (post-process) justamente exige espaço em área de staging no destino para gravar os dados brutos antes de deduplicar.',
      2: 'Incorreta: deduplicação inline é totalmente compatível com retenção GFS, compactação e backups sintéticos.',
      3: 'Incorreta: transferir tudo primeiro para deduplicar depois descreve a deduplicação target-side pós-processada, não a source-side.'
    }
  },
  {
    id: 'sarah-18',
    editalItemId: '6.2.5',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante a definição da política de continuidade de um sistema hospitalar crítico, a diretoria estabeleceu que, em caso de falha catastrófica no data center principal, o sistema deve voltar ao ar em no máximo 30 minutos e a perda máxima tolerável de registros recentes é de 5 minutos. Esses dois parâmetros correspondem, respectivamente, a:',
    options: [
      'RPO = 30 minutos e RTO = 5 minutos.',
      'RTO = 30 minutos e RPO = 5 minutos.',
      'SLA = 30 minutos e WORM = 5 minutos.',
      'MTTR = 5 minutos e RPO = 30 minutos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. RPO/RTO e recuperação de desastres (Eixo 6. Backup). RTO mede o tempo máximo de parada até o retorno (30 min); RPO mede a janela máxima de perda de dados (5 min).',
    correctAnalysis:
      'RTO (Recovery Time Objective) é o tempo máximo aceitável de indisponibilidade após o desastre (30 min), enquanto RPO (Recovery Point Objective) é a quantidade máxima de dados que pode ser perdida medida no tempo (5 min).',
    optionErrors: {
      0: 'Incorreta: os conceitos de RPO (perda de dados) e RTO (tempo de recuperação) foram invertidos.',
      2: 'Incorreta: WORM (Write Once Read Many) refere-se à imutabilidade de mídia/retenção, não a janela de perda de dados.',
      3: 'Incorreta: RPO é a perda máxima de dados tolerada (5 minutos), não 30 minutos.'
    }
  },
  {
    id: 'sarah-6-04',
    editalItemId: '6.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para proteger os backups corporativos contra ataques de ransomware que visam apagar ou cifrar repositórios em rede acessíveis por credenciais administrativas comprometidas, qual combinação de mídias e regra arquitetural é recomendada?',
    options: [
      'Armazenar todas as cópias em uma única pasta SMB compartilhada no mesmo domínio AD sem bloqueio de alteração.',
      'Aplicar a regra 3-2-1-1-0 mantendo cópia offsite e cópia imutável/offline (WORM / Object Lock ou fitas LTO em cofre air-gapped) e executar testes periódicos de restore.',
      'Substituir backups por espelhamento RAID 1 nos servidores de produção, garantindo imutabilidade instantânea.',
      'Configurar replicação síncrona entre dois storages sem retenção histórica.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Tecnologias e mídias de backup (Eixo 6). Regra 3-2-1-1-0 com imutabilidade (WORM) / air-gap protege contra exclusão maliciosa.',
    correctAnalysis:
      'A regra 3-2-1-1-0 (3 cópias, 2 mídias distintas, 1 offsite, 1 offline/imutável WORM, 0 erros de validação) impede que atacantes com acesso à rede alterem ou excluam as cópias de segurança.',
    optionErrors: {
      0: 'Incorreta: compartilhamentos SMB no mesmo domínio são o primeiro alvo cifrado ou excluído em ataques ransomware.',
      2: 'Incorreta: RAID 1 replica imediatamente a criptografia maliciosa nos dois discos.',
      3: 'Incorreta: replicação síncrona sem snapshots imutáveis também replica exclusões e criptografia ao site secundário.'
    }
  },
  {
    id: 'sarah-6-05',
    editalItemId: '6.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na arquitetura Commvault (ou soluções corporativas equivalentes), qual componente centraliza o banco de metadados, agendamentos e políticas, e qual componente executa a movimentação de dados, indexação e deduplicação junto às bibliotecas de disco/fita?',
    options: [
      'MediaAgent centraliza o catálogo/agendamentos, e o CommServe transporta os blocos de dados até as fitas LTO.',
      'CommServe atua como servidor mestre de controle/metadados, e o MediaAgent atua no plano de dados gerenciando deduplicação, indexação e gravação nas mídias.',
      'Subclient executa a replicação WAN entre datacenters sem uso de MediaAgent.',
      'iDataAgent substitui o storage físico armazenando todos os backups na memória RAM do CommServe.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Commvault ou equivalentes (Eixo 6. Backup). CommServe = plano de controle/metadados; MediaAgent = plano de dados/deduplicação; Subclient = definição lógica do que é copiado.',
    correctAnalysis:
      'O CommServe gerencia catálogo, políticas e jobs (control plane), enquanto um ou mais MediaAgents processam os fluxos de dados, DDB (Deduplication Database) e leitura/escrita em bibliotecas (data plane).',
    optionErrors: {
      0: 'Incorreta: as funções de CommServe (controle) e MediaAgent (dados) foram invertidas.',
      2: 'Incorreta: Subclient apenas define o conjunto de dados (volumes/bancos) do cliente a proteger.',
      3: 'Incorreta: iDataAgent é o agente instalado no servidor/aplicação protegida, não um substituto de storage em RAM.'
    }
  },
  {
    id: 'sarah-6-06',
    editalItemId: '6.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em políticas de retenção de backup configuradas por "Dias e Ciclos" (ex: 30 dias e 2 ciclos completos) no Commvault, o backup completo do dia 1 será expirado (pruned) exatamente no dia 31 se os backups completos subsequentes tiverem falhado durante todo o mês?',
    options: [
      'Sim, porque a contagem de 30 dias sempre apaga o conjunto mais antigo mesmo que não exista outro ciclo completo válido.',
      'Não, porque a retenção exige que AMBOS os critérios (dias mínimos E número mínimo de ciclos completos mais recentes) sejam satisfeitos para proteger a recuperabilidade.',
      'Sim, porque políticas de retenção apagam primeiro os backups completos preservando apenas incrementais órfãos.',
      'Não, porque backups completos nunca expiram automaticamente mesmo após atingirem dias e ciclos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. retenção e políticas de backup (Eixo 6. Backup). Regras de retenção combinadas (Dias + Ciclos) e dependência de cadeia incremental só liberam o Full antigo quando há ciclos mais novos completos.',
    correctAnalysis:
      'Para evitar deixar o ambiente sem nenhum ponto restaurável após falhas sucessivas, o aging só expira backups antigos depois que tanto o tempo (dias) quanto os ciclos completos mínimos posteriores forem atendidos.',
    optionErrors: {
      0: 'Incorreta: apagar o único Full válido deixaria a empresa sem backup restaurável — a regra exige ambas as condições.',
      2: 'Incorreta: incrementais dependentes não servem sem seu Full base e nunca provocam a exclusão prematura do Full necessário.',
      3: 'Incorreta: backups expiram automaticamente no data aging assim que todos os critérios de retenção e dependências são cumpridos.'
    }
  },
  {
    id: 'sarah-6-07',
    editalItemId: '6.2.2',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao estruturar uma política GFS (Grandfather-Father-Son) e executar backup a quente de um banco de dados ou máquina virtual Windows com transações em aberto, qual mecanismo garante consistência transacional da cópia?',
    options: [
      'Copiar os arquivos .mdf/.ldf abertos via xcopy ignorando bloqueios de sistema.',
      'Integrar o agente de backup com VSS (Volume Shadow Copy Service) ou quiescing/API nativa do banco para congelar escritas (flush) no instante do snapshot.',
      'Compactar a partição inteira com zip antes de iniciar a rotação GFS.',
      'Utilizar exclusivamente backup diferencial sem nunca executar backup completo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. políticas de backup (Eixo 6. Backup). Consistência aplicacional a quente depende de VSS Writers / quiescing antes da captura.',
    correctAnalysis:
      'O VSS (ou APIs nativas do SGBD) notifica o banco para descarregar buffers de memória para disco e suspender novas gravações brevemente (quiesce), gerando um snapshot consistente em aplicação.',
    optionErrors: {
      0: 'Incorreta: copiar arquivos de banco abertos sem quiescing gera cópia inconsistente (crash-inconsistent) frequentemente irrecuperável.',
      2: 'Incorreta: compactação simples não coordena transações em memória do SGBD.',
      3: 'Incorreta: diferencial exige pelo menos um backup completo prévio e não substitui consistência transacional.'
    }
  },
  {
    id: 'sarah-6-08',
    editalItemId: '6.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um servidor físico teve a placa-mãe e o controlador de disco danificados irreparavelmente, exigindo reconstruir sistema operacional, aplicativos e dados em um hardware substituto vazio sem reinstalar o SO manualmente do zero; e, em outro incidente, um usuário excluiu uma tabela específica há 2 horas e 15 minutos. Quais tipos de restore aplicam-se respectivamente?',
    options: [
      'Restore Granular para o servidor físico vazio e Bare-Metal Recovery (BMR) para a tabela excluída.',
      'Bare-Metal Recovery (BMR) para o servidor físico vazio e Restore Point-in-Time (usando último Full/Diferencial + logs de transação) para recuperar antes da exclusão.',
      'Backup Sintético para o servidor vazio e Deduplicação inline para a tabela excluída.',
      'Restore In-Place sobrescrevendo o hardware queimado sem boot de mídia de recuperação.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. restore (Eixo 6. Backup). BMR reconstrói SO + dados em hardware vazio; Point-in-Time aplica logs até o minuto exato anterior ao erro.',
    correctAnalysis:
      'BMR restaura imagem completa do sistema operacional e volumes sobre hardware nu (via mídia de boot), enquanto Point-in-Time Recovery aplica logs de transação até o instante anterior à exclusão acidental.',
    optionErrors: {
      0: 'Incorreta: os usos de Restore Granular e BMR foram invertidos.',
      2: 'Incorreta: Backup Sintético e Deduplicação são técnicas de geração/armazenamento de backup, não modalidades de restore.',
      3: 'Incorreta: um hardware novo vazio exige boot de ambiente de recuperação (BMR) e não possui sistema ativo para restore in-place.'
    }
  },
  {
    id: 'sarah-6-09',
    editalItemId: '6.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma organização possui datacenter principal e site de contingência a 800 km de distância (latência RTT de 28 ms) e precisa enviar cópias de backup deduplicadas todas as noites sem degradar a escrita das aplicações locais nem saturar o enlace WAN. Qual estratégia de replicação atende ao cenário?',
    options: [
      'Replicação síncrona de blocos em produção com confirmação obrigatória a cada escrita nos 800 km.',
      'Replicação assíncrona / Auxiliary Copy otimizada por deduplicação (DASH Copy), transferindo apenas blocos inéditos fora do caminho crítico de I/O da aplicação.',
      'Envio de fitas LTO sem criptografia nem verificação de integridade pelo correio comum sem cópia em disco.',
      'Desativar a deduplicação antes de replicar pela WAN para acelerar o tráfego de rede.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. replicação (Eixo 6. Backup). Longas distâncias (RTT elevado) inviabilizam replicação síncrona; usa-se replicação assíncrona / AUX Copy com envio somente de blocos deduplicados.',
    correctAnalysis:
      'Com RTT de 28 ms, replicação síncrona paralisaria escritas em produção; a replicação assíncrona/AUX Copy otimizada envia somente blocos únicos já deduplicados para o site remoto sem impactar a aplicação.',
    optionErrors: {
      0: 'Incorreta: replicação síncrona exige baixa latência (< 5 ms RTT); em 800 km adicionaria 28 ms a cada gravação de disco.',
      2: 'Incorreta: transporte físico sem criptografia e sem verificação viola segurança e agilidade operacional.',
      3: 'Incorreta: desativar deduplicação multiplicaria o volume trafegado pela WAN, agravando a saturação do link.'
    }
  },
  {
    id: 'sarah-6-10',
    editalItemId: '6.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante um acionamento real de Recuperação de Desastres (DR) em site secundário após queda total do datacenter primário, qual ordem de subida de serviços evita falhas em cascata de autenticação e resolução de nomes?',
    options: [
      'Subir primeiro aplicações web e bancos de dados, deixando firewall, DNS e Active Directory por último.',
      'Subir primeiro conectividade/firewall e infraestrutura base, depois Active Directory e DNS, em seguida bancos de dados/storages e por fim servidores de aplicação.',
      'Subir todos os servidores simultaneamente sem ordem de dependência nem atualização de registros DNS.',
      'Executar failback imediato antes mesmo de estabilizar o site secundário ou validar os backups.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. recuperação de desastres (Eixo 6. Backup). Runbooks de DR respeitam cadeia de dependências: Rede/Segurança -> AD/DNS -> Dados -> Aplicações.',
    correctAnalysis:
      'Aplicações e bancos integrados ao domínio falham se não houver rede, DNS e Active Directory disponíveis; por isso o runbook sobe primeiro rede/segurança, depois AD/DNS, bancos e por último as camadas de aplicação.',
    optionErrors: {
      0: 'Incorreta: bancos e aplicações falharão na inicialização se não conseguirem autenticar no AD nem resolver nomes no DNS.',
      2: 'Incorreta: ligar tudo sem ordem de dependência causa timeouts de serviços e inconsistência de resolução DNS.',
      3: 'Incorreta: failback só ocorre depois que o site primário for totalmente reparado e ressincronizado.'
    }
  },

  // ==================== EIXO 7: 7. WI-FI/NAC. (10 questões) ====================
  {
    id: 'sarah-19',
    editalItemId: '7.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma infraestrutura corporativa com controle de acesso à rede IEEE 802.1X usando Cisco ISE ou equivalente como servidor RADIUS, qual é o papel do switch/AP de acesso e quais portas UDP padrão o RADIUS utiliza para autenticação e accounting?',
    options: [
      'O switch atua como Supplicant e comunica-se com o servidor RADIUS via UDP 161 e UDP 162.',
      'O switch/AP atua como Authenticator (repassando quadros EAPoL encapsulados em RADIUS) usando UDP 1812 para autenticação e UDP 1813 para accounting.',
      'O endpoint do usuário atua como Authenticator enviando pacotes RADIUS diretamente ao Active Directory na porta UDP 88.',
      'O servidor RADIUS atua como Supplicant e bloqueia a porta Ethernet via protocolo STP antes do 4-way handshake.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Protocolos 802.1X e EAP e Item 2. RADIUS (Eixo 7. WI-FI/NAC). Switch/AP = Authenticator; portas padrão RADIUS = UDP 1812 (auth) e 1813 (accounting).',
    correctAnalysis:
      'Na arquitetura 802.1X, o endpoint é o Supplicant, o switch/AP é o Authenticator que encapsula EAPoL em RADIUS e o servidor (ISE/RADIUS) escuta nas portas UDP 1812 (autenticação) e 1813 (accounting).',
    optionErrors: {
      0: 'Incorreta: Supplicant é o cliente/endpoint, e UDP 161/162 são as portas padrão do protocolo SNMP.',
      2: 'Incorreta: o endpoint é o Supplicant e não envia pacotes RADIUS ao AD; UDP 88 é a porta do Kerberos.',
      3: 'Incorreta: o servidor RADIUS é o Authentication Server e o controle de porta 802.1X não usa STP.'
    }
  },
  {
    id: 'sarah-20',
    editalItemId: '7.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao migrar uma rede sem fio corporativa de WPA2 para WPA3, quais mecanismos criptográficos e de proteção passam a caracterizar corretamente os padrões WPA2 e WPA3 em relação ao legado WEP/WPA?',
    options: [
      'WPA2 utiliza obrigatoriamente RC4 com TKIP e WPA3 introduz WEP com vetor de inicialização estático de 24 bits.',
      'WPA2 emprega AES-CCMP e WPA3-Personal substitui o handshake PSK vulnerável a ataque offline pelo protocolo SAE (Simultaneous Authentication of Equals), além de exigir PMF.',
      'WPA3 remove a necessidade de criptografia em quadros de gerenciamento e retorna ao uso de chaves compartilhadas sem forward secrecy.',
      'WEP e WPA2 utilizam exatamente o mesmo algoritmo AES-GCMP de 256 bits, diferenciando-se apenas pela frequência de 2,4 GHz vs 5 GHz.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Mecanismos de segurança em redes sem fio (WEP, WPA, WPA2 e WPA3). WPA2 usa AES-CCMP; WPA3-Personal usa SAE (Dragonfly) com forward secrecy e Protected Management Frames (PMF) obrigatórios.',
    correctAnalysis:
      'WPA2 padronizou AES-CCMP (substituindo RC4/TKIP de WEP/WPA), enquanto WPA3-Personal introduziu SAE para mitigar ataques de dicionário offline, prover forward secrecy e exigir PMF (802.11w).',
    optionErrors: {
      0: 'Incorreta: RC4/TKIP era o padrão provisório do WPA v1 e WEP (IV de 24 bits) é obsoleto e quebrado, jamais usado pelo WPA3.',
      2: 'Incorreta: o WPA3 torna obrigatório o PMF (proteção de quadros de gerenciamento) e introduz forward secrecy via SAE.',
      3: 'Incorreta: WEP usava RC4 inseguro (não AES), e os padrões de segurança não se restringem a faixas de frequência específicas.'
    }
  },
  {
    id: 'sarah-21',
    editalItemId: '7.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma implantação de NAC com Cisco ISE, quando um notebook corporativo autentica com sucesso via EAP-TLS em um SSID único ou porta cabeada 802.1X, como o servidor NAC instrui o switch/WLC a colocar o equipamento na VLAN dinâmica do setor correspondente?',
    options: [
      'O servidor RADIUS retorna atributos específicos na mensagem Access-Accept (como Tunnel-Type, Tunnel-Medium-Type e Tunnel-Private-Group-ID com o ID/nome da VLAN).',
      'O switch envia um pacote DHCP Discover para o Cisco ISE solicitando a criação de uma interface trunk 802.1Q no computador do usuário.',
      'O próprio cliente (Supplicant) configura manualmente a tag VLAN no driver Wi-Fi após receber um RADIUS Access-Reject.',
      'O protocolo EAPoL altera a tabela de roteamento OSPF do switch para redirecionar o tráfego sem uso de VLANs.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Cisco ISE, 802.1X, RADIUS e VLAN dinâmica (Eixo 7. WI-FI/NAC). A atribuição dinâmica de VLAN ocorre via atributos RADIUS retornados no Access-Accept.',
    correctAnalysis:
      'Após validar identidade e autorização, o servidor RADIUS inclui no pacote Access-Accept os atributos RFC 2868/3580 (Tunnel-Type=13/VLAN, Tunnel-Medium-Type=6/802 e Tunnel-Private-Group-ID) para que o NAS aplique a VLAN dinâmica.',
    optionErrors: {
      1: 'Incorreta: DHCP apenas aloca IP após a porta estar na VLAN correta e não cria portas trunk no endpoint.',
      2: 'Incorreta: Access-Reject nega o acesso à rede, e estações finais não definem sua própria VLAN dinâmica em portas de acesso.',
      3: 'Incorreta: EAPoL transporta mensagens de autenticação na camada 2 entre Supplicant e Authenticator, sem relação com OSPF.'
    }
  },
  {
    id: 'sarah-7-04',
    editalItemId: '7.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No planejamento de cobertura Wi-Fi corporativa em 2,4 GHz e 5 GHz seguindo os padrões IEEE 802.11, qual trio de canais não sobrepostos deve ser usado na faixa de 2,4 GHz (20 MHz) e qual padrão opera exclusivamente em 5 GHz?',
    options: [
      'Canais 1, 5 e 9 em 2,4 GHz; padrão 802.11g opera exclusivamente em 5 GHz.',
      'Canais 1, 6 e 11 em 2,4 GHz; padrão 802.11ac (Wi-Fi 5) opera exclusivamente em 5 GHz (enquanto 802.11ax/Wi-Fi 6 opera em 2,4 e 5 GHz, e 6 GHz no 6E).',
      'Canais 1, 2 e 3 em 2,4 GHz; padrão 802.11n opera exclusivamente em 6 GHz.',
      'Canais 36, 40 e 44 em 2,4 GHz; padrão 802.11b opera em 5 GHz com OFDMA.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Redes sem fio (padrões IEEE 802.11) (Eixo 7. WI-FI/NAC). Canais não sobrepostos 2,4 GHz = 1, 6, 11; 802.11ac é apenas 5 GHz.',
    correctAnalysis:
      'Na faixa de 2,4 GHz (largura de 20 MHz), apenas os canais 1, 6 e 11 não se sobrepõem; o padrão IEEE 802.11ac (Wi-Fi 5) foi definido exclusivamente para 5 GHz, diferentemente do 802.11n e 802.11ax.',
    optionErrors: {
      0: 'Incorreta: canais 1, 5 e 9 sofrem sobreposição espectral em 20 MHz, e 802.11g opera em 2,4 GHz.',
      2: 'Incorreta: canais 1, 2 e 3 sobrepõem-se quase totalmente, e 802.11n opera em 2,4/5 GHz (não 6 GHz).',
      3: 'Incorreta: canais 36, 40 e 44 pertencem à banda de 5 GHz, e 802.11b é padrão legado de 2,4 GHz (DSSS/CCK).'
    }
  },
  {
    id: 'sarah-7-05',
    editalItemId: '7.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma organização implantou Cisco ISE (NAC) com 802.1X nas portas de acesso, porém possui impressoras de rede e equipamentos biométricos que não possuem cliente/supplicant 802.1X. Como integrá-los ao controle NAC de forma segura e como o ISE pode isolar imediatamente um PC cujo antivírus ficou desatualizado durante a sessão?',
    options: [
      'Usar MAB (MAC Authentication Bypass) combinado com profiling e VLAN restrita para os legados, e usar CoA (Change of Authorization, UDP 3799) para reautorizar/isolar sessões ativas por postura.',
      'Desativar o 802.1X em todo o switch porque qualquer dispositivo sem supplicant inviabiliza o uso do ISE.',
      'Configurar WPA-TKIP nas portas cabeadas Ethernet para as impressoras biométricas.',
      'Usar RADIUS Accounting (UDP 1813) para alterar o endereço MAC físico das impressoras na placa de rede.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Cisco ISE, Omada ou equivalentes, 802.1X e autenticação (Eixo 7. WI-FI/NAC). Dispositivos sem supplicant usam MAB + profiling; mudança dinâmica de sessão usa RADIUS CoA.',
    correctAnalysis:
      'MAB permite ao switch enviar o MAC do dispositivo ao ISE quando não há resposta EAPoL (aplicando profiling e ACL/VLAN restrita), enquanto CoA permite ao ISE alterar autorização/quarentena de sessões já ativas.',
    optionErrors: {
      1: 'Incorreta: portas suportam fallback ordenado 802.1X -> MAB sem desativar 802.1X no restante da rede.',
      2: 'Incorreta: WPA-TKIP é mecanismo obsoleto de redes sem fio Wi-Fi, inaplicável a portas cabeadas.',
      3: 'Incorreta: RADIUS Accounting apenas registra eventos de início/fim/tráfego de sessão e não altera MACs em hardware.'
    }
  },
  {
    id: 'sarah-7-06',
    editalItemId: '7.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao comparar os métodos EAP-TLS e PEAP-MSCHAPv2 em uma rede Wi-Fi corporativa 802.1X Enterprise integrada ao Active Directory, qual é a principal diferença de segurança e requisito de PKI entre eles?',
    options: [
      'PEAP exige certificado digital instalado em cada notebook/celular cliente, enquanto EAP-TLS usa apenas usuário e senha sem certificados.',
      'EAP-TLS realiza autenticação mútua exigindo certificado digital válido no servidor RADIUS E em cada cliente (maior segurança), enquanto PEAP exige certificado apenas no servidor RADIUS para criar o túnel TLS onde trafega login/senha.',
      'Ambos dispensam qualquer certificado no servidor RADIUS e transmitem a senha do AD em texto claro pelo ar.',
      'EAP-TLS funciona apenas em redes PSK domésticas sem servidor RADIUS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Protocolos 802.1X e EAP e Item 2. autenticação (Eixo 7. WI-FI/NAC). EAP-TLS = certificado mútuo; PEAP = certificado só no servidor + credenciais internas.',
    correctAnalysis:
      'No EAP-TLS, servidor e cliente validam-se mutuamente por certificados X.509 (imune a roubo simples de senha); no PEAP, apenas o servidor apresenta certificado para cifrar o túnel onde o cliente envia suas credenciais.',
    optionErrors: {
      0: 'Incorreta: os requisitos de certificado no cliente foram invertidos entre PEAP e EAP-TLS.',
      2: 'Incorreta: ambos usam túneis TLS protegidos por certificado do servidor RADIUS (jamais enviam credenciais em texto claro no ar).',
      3: 'Incorreta: EAP-TLS é método Enterprise baseado em 802.1X e servidor RADIUS, não em PSK.'
    }
  },
  {
    id: 'sarah-7-07',
    editalItemId: '7.2.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um switch gerenciável tem uma porta conectada a um telefone IP com um computador plugado atrás do telefone (daisy-chain). Qual modo de autenticação 802.1X na porta permite autenticar independentemente tanto o telefone na VLAN de voz quanto o PC na VLAN de dados sem abrir brecha para dispositivos não autorizados?',
    options: [
      'Modo Multi-Host (após o 1º MAC autenticar, libera todos os demais sem autenticação).',
      'Modo Multi-Domain (ou Multi-Auth), que mantém a verificação individual por MAC/domínio (1 voz + 1 dados ou múltiplos dispositivos autenticados separadamente).',
      'Modo Uncontrolled permanente liberando todo tráfego IP sem EAPoL.',
      'Modo Ad-Hoc IBSS diretamente na interface GigabitEthernet.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. 802.1X (Eixo 7. WI-FI/NAC). Multi-Domain autentica separadamente o domínio Voice e o domínio Data; Multi-Auth autentica cada MAC individualmente.',
    correctAnalysis:
      'Em cenários com Telefone IP + PC na mesma porta física, Multi-Domain (1 voz + 1 dados) ou Multi-Auth obriga cada endpoint a autenticar separadamente, evitando o risco do modo Multi-Host.',
    optionErrors: {
      0: 'Incorreta: Multi-Host libera qualquer outro dispositivo plugado atrás da porta assim que o primeiro autentica, criando grave brecha de acesso.',
      2: 'Incorreta: deixar a porta sem controle 802.1X anula o controle de acesso NAC.',
      3: 'Incorreta: IBSS (Ad-Hoc) é topologia ponto a ponto de Wi-Fi sem AP, inexistente em portas cabeadas de switch.'
    }
  },
  {
    id: 'sarah-7-08',
    editalItemId: '7.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante o 4-way handshake do WPA2/WPA3 entre o Access Point e o cliente Wi-Fi, qual é a finalidade técnica das quatro mensagens EAPOL-Key trocadas após a validação inicial da PMK?',
    options: [
      'Derivar e instalar as chaves temporárias de criptografia de sessão (PTK para unicast e GTK para broadcast/multicast) confirmando que ambos possuem a PMK sem transmiti-la no ar.',
      'Transmitir a senha PSK do SSID em texto claro no quadro Beacon para acelerar futuras reconexões.',
      'Substituir o endereço IP do servidor DHCP por um endereço Link-Local 169.254.0.0/16.',
      'Negociar exclusivamente os canais de 2,4 GHz e 5 GHz via protocolo STP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. WPA2/WPA3 (Eixo 7. WI-FI/NAC). O 4-way handshake gera PTK (unicast) e GTK (broadcast/multicast) a partir da PMK sem expor a PMK no rádio.',
    correctAnalysis:
      'O 4-way handshake prova que AP e cliente detêm a mesma PMK (vinda da PSK/SAE ou do 802.1X) e deriva chaves frescas de sessão PTK e GTK para cifrar os quadros de dados.',
    optionErrors: {
      1: 'Incorreta: senhas PSK e PMK nunca são enviadas em texto claro nos quadros Beacon ou EAPOL.',
      2: 'Incorreta: endereçamento IP (DHCP/APIPA) ocorre apenas depois da camada 2 Wi-Fi estar associada e autenticada.',
      3: 'Incorreta: escolha de canal e STP não fazem parte do 4-way handshake EAPOL-Key.'
    }
  },
  {
    id: 'sarah-7-09',
    editalItemId: '7.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um prédio corporativo com alta densidade de usuários Wi-Fi reclamando de quedas e roaming lento ao caminhar pelos corredores, o administrador percebe que os APs estão configurados com potência de transmissão no máximo (23 dBm). Por que reduzir/equilibrar a potência dos APs e ativar 802.11r/k/v resolve o problema?',
    options: [
      'Potência máxima cria assimetria (cliente ouve o AP longe mas não consegue responder com sua antena/bateria fraca — efeito sticky client); 802.11k/v orientam seleção de vizinhos e 802.11r acelera a troca de chaves no roaming.',
      'Reduzir a potência do AP força automaticamente todos os clientes a migrarem do padrão AES para WEP.',
      '802.11r desabilita o 802.1X Enterprise transformando a rede em aberta sem senha.',
      'Aumentar a potência para 30 dBm elimina a interferência co-canal porque aumenta o número de canais não sobrepostos em 2,4 GHz.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting Wi-Fi/NAC (Eixo 7). Potência excessiva gera sticky clients e assimetria de enlace; 802.11r/k/v otimizam roaming rápido.',
    correctAnalysis:
      'APs em potência máxima mantêm o cliente preso a um AP distante (sticky client) cujo sinal de retorno não chega com SNR adequado; ajustar células + 802.11r (Fast BSS Transition)/k/v torna o roaming fluido.',
    optionErrors: {
      1: 'Incorreta: potência de rádio RF não altera o algoritmo de criptografia (AES vs WEP).',
      2: 'Incorreta: 802.11r mantém integralmente o 802.1X/WPA2/WPA3 pré-negociando chaves com o AP alvo durante o roaming.',
      3: 'Incorreta: aumentar potência amplia sobreposição e interferência co-canal sem criar canais adicionais.'
    }
  },
  {
    id: 'sarah-7-10',
    editalItemId: '7.2.3',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao comparar RADIUS e TACACS+ em uma infraestrutura de rede com Cisco ISE para controle de acesso de usuários na rede (802.1X) e administração CLI de switches/roteadores, qual afirmação está correta?',
    options: [
      'RADIUS utiliza TCP porta 49 e criptografa todo o payload, enquanto TACACS+ utiliza UDP 1812 e criptografa apenas a senha.',
      'RADIUS utiliza UDP (1812/1813), combina Autenticação e Autorização na mesma troca e é padrão em 802.1X; TACACS+ utiliza TCP porta 49, separa Autenticação, Autorização e Accounting (permitindo autorizar comandos CLI) e cifra todo o pacote.',
      'Ambos os protocolos funcionam exclusivamente em camada 2 sem necessidade de endereçamento IP.',
      'O atributo RADIUS Access-Challenge indica falha definitiva de autenticação bloqueando a porta por 24 horas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. RADIUS e autenticação (Eixo 7. WI-FI/NAC). RADIUS (UDP 1812/1813, Auth+Authz juntos, foco acesso à rede/802.1X) vs TACACS+ (TCP 49, AAA separado, foco gerência CLI).',
    correctAnalysis:
      'RADIUS opera sobre UDP (1812/1813) cifrando apenas a senha e unindo autenticação/autorização (padrão do 802.1X); TACACS+ opera sobre TCP 49 cifrando todo o corpo e permitindo autorização granular de comandos.',
    optionErrors: {
      0: 'Incorreta: portas, protocolos de transporte e escopo de criptografia entre RADIUS e TACACS+ foram invertidos.',
      2: 'Incorreta: tanto RADIUS quanto TACACS+ trafegam sobre IP (camada 3) entre o NAS e o servidor AAA.',
      3: 'Incorreta: Access-Challenge é etapa intermediária normal (ex: troca EAP multi-passos); negação definitiva é Access-Reject.'
    }
  },

  // ==================== EIXO 8: 8. Telefonia IP. (10 questões) ====================
  {
    id: 'sarah-22',
    editalItemId: '8.1.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Usuários de telefonia IP (VoIP) relatam áudio entrecortado e robótico durante horários de pico, embora o teste de ping apresente baixa perda de pacotes (< 0,2%). Ao inspecionar o enlace, nota-se grande oscilação no intervalo de chegada dos pacotes RTP. Qual métrica descreve essa anomalia e quais limites são recomendados para qualidade de voz?',
    options: [
      'A anomalia é o jitter (variação do atraso), recomendando-se jitter <= 30 ms, latência unidirecional <= 150 ms e perda de pacotes <= 1%.',
      'A anomalia é a latência de sinalização SIP, recomendando-se latência <= 600 ms, jitter <= 150 ms e perda <= 10%.',
      'A anomalia é a atenuação PoE, recomendando-se perda de pacotes >= 5% para compensar o buffer do codec G.711.',
      'A anomalia é causada pelo handshake TCP do protocolo RTP, devendo-se desativar a fila de prioridade QoS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4. Requisitos de qualidade de voz (latência, jitter e perda de pacotes) (Eixo 8. Telefonia IP). Os referenciais clássicos são latência <= 150 ms, jitter <= 30 ms e perda <= 1%.',
    correctAnalysis:
      'Jitter é a variação estatística no tempo de chegada entre pacotes sucessivos; para VoIP de alta qualidade recomendam-se latência one-way <= 150 ms, jitter <= 30 ms e perda de pacotes <= 1%.',
    optionErrors: {
      1: 'Incorreta: valores de 600 ms de latência e 10% de perda inviabilizam totalmente uma conversa interativa em VoIP.',
      2: 'Incorreta: PoE fornece alimentação elétrica pelo cabo Ethernet, e perda de 5% degrada severamente a inteligibilidade do áudio.',
      3: 'Incorreta: RTP opera sobre UDP (não TCP), e desativar QoS agrava ainda mais o jitter em momentos de congestionamento.'
    }
  },
  {
    id: 'sarah-23',
    editalItemId: '8.2.4',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma ligação entre dois ramais IP gerenciados por uma central Cisco IP Telephony ou PABX IP equivalente, um firewall bloqueou inadvertidamente portas dinâmicas UDP altas enquanto liberava apenas TCP/UDP 5060. Qual sintoma ocorre na chamada e por quê?',
    options: [
      'O telefone não consegue nem tocar (sem sinalização), pois o fluxo de áudio RTP utiliza exclusivamente a porta 5060.',
      'A sinalização SIP (INVITE/200 OK/ACK) estabelece a chamada e os telefones tocam normalmente, porém ocorre ausência de áudio (ou áudio unilateral) porque a mídia trafega via RTP em portas UDP dinâmicas.',
      'O codec G.729 converte automaticamente a mídia RTP para TCP 5061 preservando o áudio sem falhas.',
      'O protocolo LLDP-MED assume o transporte de voz substituindo o RTP na camada 2.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. SIP e RTP (Eixo 8. Telefonia IP). SIP (5060/5061) cuida da sinalização; RTP transporta os pacotes de mídia em portas UDP dinâmicas negociadas via SDP.',
    correctAnalysis:
      'Com a porta 5060 liberada, a sinalização SIP completa o estabelecimento da chamada, mas o bloqueio das portas UDP dinâmicas negociadas no SDP impede a passagem do fluxo de áudio RTP.',
    optionErrors: {
      0: 'Incorreta: a porta 5060 é usada pela sinalização SIP, não pelo transporte de mídia RTP.',
      2: 'Incorreta: codecs (como G.729) não convertem mídia RTP para a porta TLS 5061 de sinalização SIP.',
      3: 'Incorreta: LLDP-MED apenas informa a VLAN de voz e parâmetros PoE ao telefone IP na conexão inicial da porta do switch.'
    }
  },
  {
    id: 'sarah-24',
    editalItemId: '8.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na implantação de telefones IP com visor colorido alimentados via switch PoE e isolados logicamente das estações de trabalho conectadas em cascata (PC atrás do telefone), quais recursos garantem respectivamente a segregação L2, a prioridade de voz e a alimentação elétrica padronizada?',
    options: [
      'VLAN de voz negociada via LLDP-MED/CDP, marcação QoS DSCP EF (46) para mídia RTP e PoE IEEE 802.3af/802.3at.',
      'VLAN nativa compartilhada sem tag, marcação QoS Best Effort (DSCP 0) e PoE IEEE 802.1X.',
      'Spanning Tree PortFast para alimentação elétrica em 48V e protocolo LACP para transporte de áudio.',
      'Trunk MPLS no aparelho telefônico, QoS via ICMP e alimentação elétrica via protocolo RADIUS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. VLAN de voz, QoS, PoE (Eixo 8. Telefonia IP). LLDP-MED/CDP atribui a Voice VLAN; DSCP EF (46) prioriza RTP; IEEE 802.3af/at padroniza PoE/PoE+.',
    correctAnalysis:
      'Switches atribuem a VLAN de voz via LLDP-MED/CDP (mantendo o PC na VLAN de dados untagged), aplicam QoS com DSCP EF (46) para tráfego de voz e entregam energia via PoE 802.3af (15,4W) ou 802.3at (30W).',
    optionErrors: {
      1: 'Incorreta: DSCP 0 é tráfego padrão sem prioridade e IEEE 802.1X é protocolo de controle de acesso, não de alimentação elétrica.',
      2: 'Incorreta: PortFast e LACP são recursos de comutação Ethernet sem qualquer função de alimentação elétrica ou transporte de voz.',
      3: 'Incorreta: MPLS, ICMP e RADIUS não fornecem alimentação elétrica PoE nem configuram VLAN de voz local.'
    }
  },
  {
    id: 'sarah-8-04',
    editalItemId: '8.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma filial interligada por link WAN limitado precisa suportar maior quantidade simultânea de chamadas VoIP reduzindo o consumo de banda por ligação em comparação ao codec não comprimido G.711. Qual codec atende ao cenário e quais são as taxas de payload originais de G.711 e G.729?',
    options: [
      'Usar G.729 (8 kbps de payload, ~31 kbps com cabeçalhos IP/UDP/RTP) em vez de G.711 (64 kbps de payload, ~87 kbps com cabeçalhos).',
      'Usar G.711 (8 kbps de payload) em vez de G.729 (64 kbps de payload).',
      'Usar G.722 porque consome apenas 2 kbps sem compressão.',
      'Substituir RTP por TCP no codec G.711 para eliminar os cabeçalhos IP e UDP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.3. Codecs (Eixo 8. Telefonia IP). G.711 = 64 kbps (sem compressão); G.729 = 8 kbps (comprimido, ideal para WAN restrita).',
    correctAnalysis:
      'G.711 entrega PCM a 64 kbps (~87,2 kbps com overhead IP/UDP/RTP/Ethernet em pacotes de 20 ms), enquanto G.729 comprime o áudio para 8 kbps (~31,2 kbps totais), quase triplicando (~2,8x) a capacidade de canais em enlaces WAN.',
    optionErrors: {
      1: 'Incorreta: as taxas de bits dos codecs G.711 (64 kbps) e G.729 (8 kbps) foram invertidas.',
      2: 'Incorreta: G.722 é um codec wideband (HD) que tipicamente opera a 64 kbps, não 2 kbps.',
      3: 'Incorreta: usar TCP não elimina cabeçalhos IP (além de adicionar overhead maior que UDP e retransmissões prejudiciais à voz).'
    }
  },
  {
    id: 'sarah-8-05',
    editalItemId: '8.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante o estabelecimento de uma chamada SIP entre dois endpoints VoIP, qual protocolo encapsulado dentro do corpo das mensagens SIP descreve os endereços IP, portas UDP e codecs aceitos por cada lado, e qual protocolo acompanha o fluxo de mídia medindo perda e jitter?',
    options: [
      'SDP (Session Description Protocol) negocia os parâmetros da mídia no SIP, e RTCP (Real-time Transport Control Protocol) envia relatórios periódicos de qualidade na porta imediatamente superior à do RTP.',
      'SNMP negocia os codecs no corpo SIP e Telnet mede a latência de voz na porta 23.',
      'TFTP transporta o áudio contínuo e LLDP-MED negocia os parâmetros SDP.',
      'ARP negocia os codecs G.711/G.729 e ICMP substitui o RTP em chamadas externas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2. Sinalização e transporte de mídia (Eixo 8. Telefonia IP). SDP descreve a sessão de mídia no SIP; RTCP monitora estatísticas de QoS do fluxo RTP.',
    correctAnalysis:
      'O SIP transporta o corpo SDP (IP, porta e lista de codecs) no INVITE/200 OK para combinar a sessão, enquanto o RTCP troca estatísticas de jitter, perda e sincronismo em paralelo ao RTP.',
    optionErrors: {
      1: 'Incorreta: SNMP é protocolo de gerência de redes e Telnet é terminal remoto, sem função no corpo SIP ou mídia.',
      2: 'Incorreta: TFTP apenas entrega arquivos XML/firmware iniciais aos telefones IP no boot.',
      3: 'Incorreta: ARP resolve IP->MAC na LAN e ICMP é controle de erros/ping, jamais usado para voz.'
    }
  },
  {
    id: 'sarah-8-06',
    editalItemId: '8.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao integrar um PABX IP interno (como Cisco CUCM ou Asterisk) a um tronco SIP contratado junto a uma operadora na Internet, qual elemento de borda é recomendado para proteger a topologia interna, normalizar cabeçalhos SIP, mediar mídia RTP através de NAT e prevenir fraudes/ataques DoS?',
    options: [
      'SBC (Session Border Controller).',
      'Switch Layer 2 com Spanning Tree.',
      'Servidor DHCP Failover.',
      'Controlador de Domínio RODC.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Voz sobre IP (VoIP) (Eixo 8. Telefonia IP). O SBC atua como firewall/proxy especializado de sinalização SIP e mídia RTP na fronteira entre redes.',
    correctAnalysis:
      'O SBC (Session Border Controller) funciona na borda da rede VoIP como B2BUA para sinalização e âncora de mídia RTP, garantindo ocultação de topologia, transcodificação, segurança contra fraudes e NAT traversal.',
    optionErrors: {
      1: 'Incorreta: switches L2 não inspecionam nem protegem sinalização SIP ou fluxos de mídia VoIP na borda WAN.',
      2: 'Incorreta: DHCP distribui apenas configuração IP inicial aos aparelhos.',
      3: 'Incorreta: RODC é Controlador de Domínio somente leitura do Active Directory.'
    }
  },
  {
    id: 'sarah-8-07',
    editalItemId: '8.2.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um ambiente Cisco IP Telephony com telefones conectados a switches de acesso e estações ligadas à porta PC traseira dos aparelhos, como o switch comunica automaticamente o ID da VLAN de voz ao telefone IP e como deve ficar a porta do switch?',
    options: [
      'Configurar a porta com "switchport access vlan <dados>" e "switchport voice vlan <voz>", utilizando CDP ou LLDP-MED para anunciar a VLAN de voz ao telefone.',
      'Configurar a porta como acesso simples apenas na VLAN de dados e exigir que o usuário digite a VLAN manualmente no teclado do telefone.',
      'Configurar a porta em modo trunk permitindo todas as 4094 VLANs para o PC do usuário sem LLDP.',
      'Habilitar IPsec Phase 1 entre o telefone IP e o switch para negociar a VLAN de voz.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. VLAN de voz (Eixo 8. Telefonia IP). Voice VLAN usa portas Access + Voice VLAN anunciadas por CDP/LLDP-MED.',
    correctAnalysis:
      'A configuração padrão separa o tráfego do telefone (tagged com 802.1Q na Voice VLAN via LLDP-MED/CDP) do tráfego do PC (untagged na Access VLAN), mantendo segurança sem expor um trunk aberto ao PC.',
    optionErrors: {
      1: 'Incorreta: sem Voice VLAN e LLDP-MED/CDP, telefone e PC compartilhariam o mesmo domínio de broadcast de dados.',
      2: 'Incorreta: liberar todas as VLANs em trunk ao PC permitiria ataque de VLAN hopping pelo computador do usuário.',
      3: 'Incorreta: IPsec não é usado localmente entre telefone IP e switch de acesso para anúncio de VLAN.'
    }
  },
  {
    id: 'sarah-8-08',
    editalItemId: '8.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um roteador WAN que interliga filiais com tráfego misto de ERP, transferência de arquivos e Telefonia IP, qual configuração de QoS garante que pacotes de áudio RTP não sofram atraso variável causado por rajadas de download TCP?',
    options: [
      'Aplicar LLQ (Low Latency Queueing — fila de prioridade estrita) casando tráfego marcado com DSCP EF (46) e limitando sua banda máxima para não matar as demais filas.',
      'Colocar todo o tráfego VoIP e transferências SMB na mesma fila FIFO Best Effort (DSCP 0).',
      'Aplicar Policing descartando pacotes RTP sempre que a CPU do servidor de arquivos atingir 50%.',
      'Aumentar a MTU da interface WAN para 9000 bytes exclusivamente para pacotes RTP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. QoS (Eixo 8. Telefonia IP). LLQ (Priority Queueing dentro do CBWFQ) despacha pacotes DSCP EF (46) antes das filas de dados, mantendo jitter baixo.',
    correctAnalysis:
      'A fila LLQ atende pacotes de voz (DSCP EF 46) com prioridade estrita na saída da interface, evitando que pacotes grandes de dados atrasem os quadros de áudio e gerem jitter.',
    optionErrors: {
      1: 'Incorreta: fila FIFO Best Effort faz pacotes de voz ficarem presos atrás de rajadas grandes de arquivos, destruindo o jitter.',
      2: 'Incorreta: descartar pacotes de voz (policing agressivo) causaria cortes audíveis na chamada.',
      3: 'Incorreta: pacotes VoIP são intencionalmente minúsculos (~200 bytes com 20 ms de áudio) para reduzir atraso de empacotamento; MTU 9000 não ajuda RTP.'
    }
  },
  {
    id: 'sarah-8-09',
    editalItemId: '8.2.7',
    format: 'multipla_escolha',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao realizar chamadas externas via tronco SIP através de um firewall com NAT, um analista observa dois sintomas distintos: em certas ligações ocorre áudio em apenas um sentido (one-way audio), e em outras a chamada cai exatamente 32 segundos após ser atendida. Quais são as causas típicas em ambiente SIP/NAT?',
    options: [
      'One-way audio ocorre por endereço IP privado dentro do SDP ou bloqueio assimétrico de RTP; queda em ~32s ocorre por falha no retorno da mensagem SIP ACK em resposta ao 200 OK (frequentemente agravada por SIP ALG corrompendo headers).',
      'Ambos os sintomas ocorrem exclusivamente por falta de energia PoE 802.3bt nos switches de acesso.',
      'Queda em 32 segundos é comportamento normal do protocolo RTP ao finalizar o handshake SYN/ACK.',
      'One-way audio ocorre sempre que o telefone utiliza o codec G.711 em vez do G.729.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting e SIP (Eixo 8. Telefonia IP). One-way audio = NAT no SDP/RTP; queda em ~32s = ausência de ACK no 200 OK (64*T1 RFC 3261), comum com SIP ALG defeituoso.',
    correctAnalysis:
      'Quando o SDP anuncia um IP privado não alcançável pelo outro lado, o fluxo RTP unilateral falha (one-way audio); quando o cabeçalho Contact impede o ACK de alcançar o originador do 200 OK, o temporizador SIP encerra a chamada em ~32s.',
    optionErrors: {
      1: 'Incorreta: falta de energia PoE desligaria o aparelho físico completamente, não causaria queda exata após 32s de conversa.',
      2: 'Incorreta: RTP não usa handshake SYN/ACK e chamadas normais não caem após 32 segundos.',
      3: 'Incorreta: o codec G.711 funciona perfeitamente em ambos os sentidos quando o roteamento RTP/SDP está íntegro.'
    }
  },
  {
    id: 'sarah-8-10',
    editalItemId: '8.2.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após ligar um telefone IP novo na rede corporativa PoE, o aparelho recebe energia e IP via DHCP, mas não consegue baixar seu arquivo de configuração XML nem registrar seu ramal no Cisco IP Telephony (CUCM) ou PABX equivalente. Qual opção do escopo DHCP costuma apontar para o servidor de provisionamento/TFTP?',
    options: [
      'Opção DHCP 150 (Cisco) ou Opção 66 (TFTP Server Name).',
      'Opção DHCP 255 (End of Options) apontando para o registro MX.',
      'Opção DHCP 12 definindo o código do codec G.729.',
      'Atributo RADIUS Tunnel-Private-Group-ID configurado no navegador.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Cisco IP Telephony ou equivalentes (Eixo 8. Telefonia IP). Option 150 (lista de IPs TFTP Cisco) ou Option 66 entrega ao aparelho onde baixar sua configuração.',
    correctAnalysis:
      'No processo de boot do telefone IP, após receber IP na Voice VLAN, o cliente lê a Option 150 (ou Option 66) na resposta DHCP para localizar o servidor TFTP/HTTP de provisionamento e baixar seu perfil SIP/SCCP.',
    optionErrors: {
      1: 'Incorreta: 255 marca apenas o fim do pacote DHCP e não aponta para servidores MX.',
      2: 'Incorreta: Option 12 informa o Host Name do cliente, não codecs VoIP.',
      3: 'Incorreta: Tunnel-Private-Group-ID é atributo RADIUS para atribuição de VLAN dinâmica, não endereço TFTP no DHCP.'
    }
  },
]);
