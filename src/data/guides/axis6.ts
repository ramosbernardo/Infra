import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_6: Record<string, StudyGuide> = {
  '6.1.1': {
    itemId: '6.1.1',
    highYieldSummary: [
      'Definição e escopo: tipos de backup definem o critério de seleção de arquivos ou blocos alterados entre execuções sucessivas (Full, Incremental, Diferencial e Full Sintético) dentro da estratégia de proteção de dados. Determinam diretamente a duração da janela de backup, o consumo de rede e armazenamento, a profundidade da cadeia de dependências e o tempo de restauração (RTO — Recovery Time Objective).',
      'Backup Completo (Full): copia integralmente todos os dados selecionados e LIMPA (zera) o bit de arquivo (archive bit — marcador de alteração em sistemas Windows; em VMs usa-se frequentemente CBT — Changed Block Tracking); proporciona a restauração mais rápida (basta a última mídia full), porém exige maior janela de backup e maior consumo de armazenamento.',
      'Backup Incremental: copia apenas os arquivos criados ou modificados desde o ÚLTIMO backup de qualquer tipo (full ou incremental) e LIMPA o archive bit; oferece o backup mais rápido e menor uso de espaço, porém exige no restore o último Full MAIS todos os incrementais sequenciais até o ponto desejado.',
      'Backup Diferencial: copia todos os arquivos alterados desde o ÚLTIMO backup Completo (Full) e NÃO limpa o archive bit; consome mais espaço diário ao longo da semana que o incremental, mas acelera o restore exigindo apenas o último Full MAIS o último Diferencial.',
      'Full Sintético e Forever Incremental (ciclo contínuo com único Full inicial seguido indefinidamente por incrementais consolidados): o Full Sintético é montado diretamente no servidor de mídia/storage combinando o Full anterior com os incrementais já gravados, evitando tráfego pesado de rede sobre o cliente de produção.',
      'Impacto na Cadeia de Falha: se uma mídia intermediária da sequência incremental corromper ou se perder, não é possível restaurar os incrementais posteriores àquele ponto; já no diferencial, cada dia é independente dos diferenciais anteriores.',
      'Exemplo operacional: em uma base hospitalar de `1 TB` com taxa diária de modificação de `5%` (`50 GB/dia`), o Full de domingo copia `1 TB`. Usando Incremental de segunda a sexta, gravam-se `50 GB/noite` (`250 GB` acumulados nos 5 dias úteis), exigindo no restore de sexta o Full mais os `5` incrementais em ordem; com Diferencial, as cópias diárias crescem (`50, 100, 150, 200 e 250 GB`, total `750 GB`), porém o restore de sexta exige apenas o Full de domingo e o Diferencial de sexta.'
    ],
    technicalReference: [
      'Full: limpa archive bit | Restauração: 1 conjunto (Full)',
      'Incremental: limpa archive bit | Backup menor/mais rápido | Restauração: 1 Full + N Incrementais em ordem',
      'Diferencial: NÃO limpa archive bit | Backup cresce até próximo Full | Restauração: 1 Full + 1 último Diferencial.'
    ],
    examTraps: [
      'NÃO confundir: apenas Full e Incremental limpam o bit de arquivo; o Diferencial preserva o bit marcado para continuar capturando tudo desde o último Full.',
      'Em questões de restore rápido vs backup rápido: Incremental ganha na velocidade de BACKUP; Diferencial ganha do incremental na velocidade de RESTORE.',
      'Misturar backup diferencial gerado por software A com incremental baseado em archive bit de software B quebra a cadeia esperada de alterações.'
    ],
    keyTerms: [
      'Archive Bit: atributo de arquivo em sistemas de arquivos Windows marcado na criação/edição e zerado apenas por backups Full e Incremental',
      'Backup Incremental: cópia apenas das alterações desde o último backup (Full ou Incremental), formando cadeia sequencial dependente',
      'Backup Diferencial: cópia acumulada das alterações desde o último Full, preservando o archive bit sem zerar',
      'Full Sintético: geração de um novo Full diretamente no repositório combinando o Full prévio com incrementais armazenados',
      'CBT (Changed Block Tracking): rastreamento de blocos alterados no hipervisor que permite incrementais rápidos de VMs sem varrer todo o disco'
    ]
  },
  '6.1.2': {
    itemId: '6.1.2',
    highYieldSummary: [
      'Definição e escopo: tecnologias e mídias de backup abrangem os repositórios físicos e lógicos usados para armazenar cópias de segurança — disco corporativo (D2D), fitas magnéticas (LTO/VTL) e Object Storage em nuvem — associados a controles de isolamento e imutabilidade. Estruturam-se sob diretrizes como a regra 3-2-1-1-0 para resistir a falhas de site, erros operacionais e criptografia por ransomware.',
      'Regra 3-2-1 (e evolução 3-2-1-1-0): manter pelo menos 3 cópias dos dados (1 produção + 2 backups), em 2 tipos diferentes de mídias/tecnologias (ex.: disco + fita ou nuvem), com 1 cópia fora do site físico (offsite — em local geográfico separado) — complementada por 1 cópia offline/imutável (air-gapped — isolada da rede) e 0 erros em testes de restauração.',
      'Fitas Magnéticas LTO (Linear Tape-Open): alto desempenho sequencial, baixo custo por TB para retenção de longo prazo (arquivamento frio) e isolamento físico nativo (air-gap) contra ransomware; oferece recurso WORM (Write Once, Read Many — gravação única e leitura múltipla) e criptografia AES-256 (Advanced Encryption Standard de 256 bits) em hardware na unidade.',
      'Backup em Disco (D2D — Disk-to-Disk) e Appliances Dedicados: acesso aleatório instantâneo para restore granular de arquivos/VMs, suporte a boot instantâneo de VMs (execução direta a partir do repositório de backup) e alta taxa de deduplicação, porém vulnerável a ataques se conectado permanentemente à rede sem imutabilidade.',
      'Bibliotecas de Fitas (Tape Libraries) e VTL (Virtual Tape Library): robótica automatizada gerencia dezenas/centenas de cartuchos com leitores de código de barras (barcodes); VTL emula uma tape library sobre arrays de disco para acelerar janelas de backup legadas antes do envio para fita real (D2D2T — Disk-to-Disk-to-Tape).',
      'Armazenamento em Nuvem / Object Storage Imutável: tiers (camadas por frequência de acesso) quente, frio e arquivamento (glacier/archive) permitem cópia offsite automatizada com Object Lock (bloqueio WORM na API S3 por período configurado), impedindo até mesmo que administradores comprometidos deletem snapshots de backup.',
      'Exemplo operacional: para proteger `40 TB` de prontuários e exames segundo a regra **3-2-1-1-0**, grava-se a cópia primária em appliance D2D local deduplicado; replica-se uma cópia offsite para Object Storage S3 com **Object Lock em modo Compliance** por `30 dias` (imutável mesmo para conta administrativa); exporta-se uma cópia mensal para fitas **LTO-9 WORM** guardadas offline em cofre externo; e valida-se semanalmente o restore em sandbox com zero erros.'
    ],
    technicalReference: [
      'Regra 3-2-1-1-0: 3 cópias | 2 mídias distintas | 1 cópia offsite | 1 cópia imutável/air-gapped | 0 erros em verificação',
      'Compatibilidade LTO: gerações recentes (LTO-8/LTO-9) costumam ler/gravar 1 geração anterior (ex.: LTO-9 lê/grava LTO-8, mas não LTO-7).'
    ],
    examTraps: [
      'Ter 2 cópias no mesmo storage ou na mesma sala NÃO atende à regra 3-2-1 — falha física única (incêndio/enchente) ou ransomware destrói todas.',
      'Fita LTO tem excelente taxa de leitura/gravação SEQUENCIAL, mas latência mecânica alta de acesso aleatório (seek de fita) comparada a SSD/HDD.',
      'Imutabilidade (Object Lock / WORM) impede deleção e alteração antes da expiração do prazo mesmo com credencial de administrador.'
    ],
    keyTerms: [
      'Regra 3-2-1-1-0: 3 cópias totais em 2 mídias distintas, 1 cópia offsite, 1 cópia air-gapped/imutável e 0 erros em testes',
      'Air-Gap: isolamento físico (cartucho fora do drive) ou lógico restrito que impede alcance direto pela rede de produção',
      'WORM / Object Lock: mecanismo de imutabilidade que bloqueia alteração ou exclusão de dados antes do término da retenção',
      'D2D2T (Disk-to-Disk-to-Tape): fluxo em dois estágios com backup rápido em disco seguido de cópia para fita magnética',
      'VTL (Virtual Tape Library): emulação de biblioteca de fitas sobre discos para manter compatibilidade com softwares legados acelerando a escrita'
    ]
  },
  '6.1.3': {
    itemId: '6.1.3',
    highYieldSummary: [
      'Definição e escopo: deduplicação é a técnica de redução de dados que elimina segmentos repetidos entre arquivos, máquinas virtuais ou ciclos sucessivos de backup por meio de comparação de assinaturas criptográficas. Opera na origem (Source-Side), no destino (Target-Side), em tempo real (Inline) ou após a gravação (Post-Process), reduzindo drasticamente consumo de storage e tráfego em enlaces WAN.',
      'Conceito de Deduplicação: técnica de redução de dados que identifica segmentos/blocos idênticos por meio de hashes criptográficos (resumos matemáticos únicos, ex.: SHA-256) e armazena apenas uma única instância física do bloco único, substituindo cópias redundantes por ponteiros de metadados.',
      'Deduplicação na Origem (Source-Side) vs no Destino (Target-Side): Source-Side calcula hashes no cliente/agente antes de enviar os dados, economizando drasticamente largura de banda WAN/LAN (à custa de CPU/RAM no cliente); Target-Side envia todos os dados pela rede para o servidor/appliance de destino processar a deduplicação sem sobrecarregar o servidor de aplicação.',
      'Deduplicação Inline vs Post-Process: Inline deduplica em tempo real na memória antes de gravar no disco (economiza espaço imediato, exige hardware robusto no MediaAgent — servidor movimentador de dados — / appliance); Post-Process grava primeiro em área de staging (área temporária bruta em disco) e deduplica em segundo plano após a janela de backup (ingestão rápida, exige espaço temporário bruto).',
      'Granularidade (Bloco Fixo vs Bloco Variável vs SIS): Single Instance Storage (SIS) deduplica apenas em nível de arquivo inteiro (se 1 byte muda, grava o arquivo todo de novo); deduplicação em nível de bloco variável identifica deslocamentos de conteúdo (inserções no início do arquivo), atingindo taxas muito superiores em backups repetitivos.',
      'Cuidados e Compressão: backups devem ser deduplicados ANTES de criptografar ou comprimir na origem de forma não determinística — dados já criptografados com chaves/IVs (Initialization Vectors — vetores aleatórios de inicialização) aleatórios têm alta entropia (aleatoriedade) e praticamente ZERO deduplicação.',
      'Exemplo operacional: ao proteger `50` VMs Windows Server corporativas de `60 GB` cada (`3 TB` brutos), a deduplicação global em bloco variável guarda apenas uma instância dos arquivos comuns do sistema operacional, reduzindo a ocupação física para ~`300 GB` (`taxa 10:1`). Em uma filial conectada por WAN de `50 Mbps`, ativa-se **Source-Side Deduplication** no agente para transmitir somente blocos inéditos, aplicando compressão e criptografia apenas após o estágio de deduplicação.'
    ],
    technicalReference: [
      'Ordem eficiente do pipeline: Deduplicação -> Compressão -> Criptografia (nunca criptografar no cliente antes de deduplicar no destino)',
      'Tipos: Source-Side (poupa rede) vs Target-Side (poupa CPU do cliente) | Inline (poupa staging) vs Post-Process (ingestão mais veloz).'
    ],
    examTraps: [
      'Ativar criptografia ou compressão proprietária no banco de dados/cliente ANTES de enviar para um appliance com deduplicação target-side anula a taxa de deduplicação (blocos ficam aleatórios).',
      'Deduplicação global (cross-client) permite compartilhar blocos comuns (ex.: sistema operacional de 100 VMs Windows) entre vários clientes no mesmo pool.',
      'Deduplicação NÃO elimina a necessidade de cópias redundantes em outro local — se o índice/DB de deduplicação corromper sem proteção, todo o pool é afetado.'
    ],
    keyTerms: [
      'Source-Side vs Target-Side: processamento dos hashes no cliente (economiza banda) versus no servidor/appliance destino (poupa CPU do cliente)',
      'Inline vs Post-Process: deduplicação em memória antes de gravar no disco versus gravação bruta em staging para deduplicar depois',
      'Bloco Variável (Variable-Length): segmentação baseada em conteúdo que preserva deduplicação mesmo quando inserções deslocam offsets do arquivo',
      'SIS (Single Instance Storage): deduplicação em nível de arquivo inteiro onde qualquer alteração mínima gera nova cópia completa',
      'Entropia / IVs Aleatórios: alta aleatoriedade introduzida por criptografia/compressão prévia que impede identificação de blocos idênticos'
    ]
  },
  '6.2.1': {
    itemId: '6.2.1',
    highYieldSummary: [
      'Definição e escopo: plataformas corporativas de backup (como Commvault e equivalentes como Veeam Backup & Replication) separam o plano de controle central (catálogo, políticas e agendamento) do plano de movimentação de dados (MediaAgents/Proxies) e dos repositórios. Resolvem a proteção centralizada de cargas heterogêneas (VMs, bancos de dados, arquivos e nuvem), deduplicação distribuída e cópias secundárias automatizadas.',
      'Arquitetura Commvault: o CommCell (domínio administrativo Commvault) é composto pelo CommServe (cérebro central: gerenciamento, metadados em banco SQL, agendamento e coordenação de jobs), MediaAgent (motor de movimentação de dados: controla bibliotecas, disco, nuvem, deduplicação DDB e indexação) e Clientes/Agents (iDataAgents instalados nos hosts ou proxies VSA — Virtual Server Agent — para VMs).',
      'Conceitos Lógicos no Commvault: Storage Policy define o fluxo de dados (cópia primária + cópias secundárias via Auxiliary Copy — replicação pós-backup entre MediaAgents) e retenção básica; Subclient delimita exatamente o conjunto de dados protegido (conteúdo, filtros, agendamento e associação à Storage Policy).',
      'Equivalentes Corporativos (ex.: Veeam Backup & Replication): Backup Server (gerenciamento), Backup Proxy (processamento/transporte/descompressão, similar ao MediaAgent em tráfego VMware) e Backup Repository (destino em disco/object storage), formando Scale-Out Backup Repository (SOBR — repositório em camadas combinado) com Performance + Capacity Tiers.',
      'Modos de Transporte em Ambientes Virtualizados: Direct SAN Access (lê blocos direto da LUN — Logical Unit Number — via FC/iSCSI sem sobrecarregar LAN), HotAdd (monta snapshot VMDK diretamente em uma VM proxy) e NBD/Network Mode (Network Block Device — trafega pela rede de gerenciamento ESXi, mais lento e usado como fallback).',
      'Deduplication Database (DDB) no Commvault: armazena a tabela de assinaturas/hashes dos blocos deduplicados; deve residir em SSD/NVMe local de baixa latência para evitar gargalo de ingestão e falhas de seal (selamento definitivo do índice exigindo abertura de nova partição DDB e novo ciclo completo) / verificação.',
      'Exemplo operacional: em um ambiente Commvault corporativo, o **CommServe** dispara às `23:00` o **Subclient** `VMs_Prontuario` vinculado à `Storage Policy SP_30D_Offsite`. Dois **MediaAgents** com **DDB em NVMe** leem os snapshots das VMs em modo **Direct SAN Access** pela fabric Fibre Channel sem congestionar a LAN de gerenciamento, gravam os blocos deduplicados no pool D2D local e executam **Auxiliary Copy** para o repositório secundário.'
    ],
    technicalReference: [
      'Commvault: CommServe (controle/SQL) | MediaAgent (data mover + DDB + bibliotecas) | Subclient (o que fazer backup) | Storage Policy (como/onde/retenção)',
      'Transportes VMware (ordem de preferência): Direct SAN Access -> Virtual Appliance (HotAdd) -> Network (NBD/NBDSSL).'
    ],
    examTraps: [
      'No Commvault, o CommServe NÃO movimenta o fluxo pesado de dados de backup dos clientes para o storage — quem faz o data path e gerencia as bibliotecas/DDB é o MediaAgent.',
      'No modo NBD (Network), o tráfego passa pela rede VMkernel de gerenciamento do host ESXi; Direct SAN Access lê diretamente da LUN sem passar pela pilha TCP/IP da VM.',
      'Perder ou corromper o DDB sem backup de DR (DR Backup do CommServe) pode obrigar o "seal" do DDB e geração de novos backups completos.'
    ],
    keyTerms: [
      'CommServe / Backup Server: plano de controle central que armazena catálogo SQL, credenciais, agendamentos e orquestração de jobs',
      'MediaAgent / Backup Proxy: componente de data path que lê origens, executa deduplicação/compressão e grava nos repositórios',
      'Subclient / Storage Policy: entidade que define quais dados proteger (Subclient) e destino, retenção e cópias secundárias (Storage Policy)',
      'Direct SAN / HotAdd / NBD: modos de leitura de snapshots VMware via LUN direta, montagem de disco na VM proxy ou rede VMkernel',
      'DDB (Deduplication Database): banco de assinaturas/hashes hospedado em SSD/NVMe para indexar blocos únicos sem gargalar a ingestão'
    ]
  },
  '6.2.2': {
    itemId: '6.2.2',
    highYieldSummary: [
      'Definição e escopo: políticas de backup formalizam os parâmetros operacionais e de conformidade da proteção de dados, definindo escopo, frequência, consistência de aplicação, janela de execução e rotação histórica (**GFS**). Resolvem conflitos de recursos em horários de produção e asseguram que aplicações transacionais sejam recuperáveis sem corrupção lógica.',
      'Política de Backup: documento técnico e operacional que define escopo (o que proteger: sistemas críticos, bancos, VMs, configurações de rede/AD — Active Directory), frequência (RPO — Recovery Point Objective), janela de execução, tipos (Full/Incremental/Sintético), local de armazenamento, criptografia, retenção e responsáveis.',
      'Janela de Backup (Backup Window): intervalo de horário de menor carga produtiva (geralmente noturno/madrugada) alocado para conclusão de todos os jobs sem degradar aplicações; se o volume cresce e estoura a janela, recorre-se a snapshots integrados ao storage (capturas instantâneas por hardware antes da leitura pelo proxy), deduplicação na origem ou paralelismo via múltiplos MediaAgents/Proxies.',
      'Esquema GFS (Grandfather-Father-Son): estratégia clássica de rotação combinando retenção diária (Son — ex.: 7 a 14 dias), semanal (Father — ex.: 4 semanas), mensal (Grandfather — ex.: 12 meses) e anual (arquivamento plurianual), equilibrando granularidade recente com histórico de longo prazo.',
      'Consistência de Aplicação (Application-Aware): uso de agentes ou VSS (Volume Shadow Copy Service no Windows — serviço de cópia de sombra consistente) e hooks freeze/thaw (scripts de pré/pós-congelamento de I/O no Linux) para quiescer buffers de bancos de dados (SQL, Exchange, Oracle, AD) garantindo backup transacionalmente íntegro (Application-Consistent — com transações em memória descarregadas) em vez de apenas Crash-Consistent (estado equivalente a queda abrupta de energia).',
      'Priorização e Agendamento Escalonado: distribuir schedules (agendamentos) por criticidade e evitar contenção simultânea no mesmo datastore/LUN ou link WAN (blackout windows — janelas de proibição — impedem que backups rodem durante horário comercial).',
      'Exemplo operacional: na política de proteção do banco clínico hospitalar, configura-se execução **Application-Aware** via **VSS** com **Full Sintético** todo domingo, **Incrementais** noturnos na janela `22:00–05:00`, backup de logs transacionais a cada `1 hora` e **Blackout Window** das `07:00 às 19:00` para backups pesados. O esquema **GFS** retém `14` pontos diários (*Son*), `4` semanais (*Father*) e `12` mensais (*Grandfather*).'
    ],
    technicalReference: [
      'Rotação GFS: Son (Diário) -> Father (Semanal) -> Grandfather (Mensal/Anual)',
      'Consistência: Crash-Consistent (estado de queda abrupta de energia) < File-System Consistent < Application-Consistent (VSS / quiesce de transações em memória).'
    ],
    examTraps: [
      'Snapshot de VM sem quiescing / integração VSS gera cópia apenas Crash-Consistent, podendo exigir recovery de logs em bancos de dados ou falhar em transações abertas.',
      'Aumentar a retenção de backups diários indefinidamente sem GFS explode custos de storage sem necessidade operacional.',
      'Blackout Window bloqueia o início/execução de jobs durante horários críticos de negócio para preservar IOPS e banda da produção.'
    ],
    keyTerms: [
      'Backup Window (Janela de Backup): intervalo programado fora do pico produtivo para execução e conclusão integral dos jobs de backup',
      'Blackout Window: janela de restrição que bloqueia início ou execução de backups pesados durante horários críticos de atendimento',
      'Esquema GFS (Grandfather-Father-Son): rotação em camadas combinando pontos diários (Son), semanais (Father) e mensais/anuais (Grandfather)',
      'Application-Consistent (VSS): captura com descarregamento prévio de buffers e transações de bancos/AD, distinta da cópia Crash-Consistent',
      'Hooks Freeze/Thaw: ganchos executados em sistemas Linux para pausar e retomar gravações de banco/aplicação ao redor do snapshot'
    ]
  },
  '6.2.3': {
    itemId: '6.2.3',
    highYieldSummary: [
      'Definição e escopo: políticas de retenção definem por quanto tempo e sob quais garantias de imutabilidade os conjuntos de backup permanecem recuperáveis antes de serem expurgados (**Data Aging / Pruning**). Combinam prazos em **dias**, número mínimo de **ciclos**, regras de dependência da cadeia e bloqueios regulatórios ou judiciais (**WORM / Legal Hold**).',
      'Critérios de Retenção (Dias + Ciclos): muitas plataformas (como Commvault) combinam tempo mínimo em dias E número mínimo de ciclos completos (Cycles — 1 Full mais os incrementais/diferenciais dependentes até o próximo Full) — um backup expirado em dias NÃO é podado (pruned — expurgado) se isso reduzir a quantidade de ciclos completos abaixo do mínimo configurado.',
      'Regra de Dependência na Expiração (Aging): um backup Full NUNCA pode ser fisicamente apagado enquanto existir qualquer Incremental ou Diferencial dependente dele ainda dentro do prazo de retenção; todos os blocos encadeados só liberam espaço após o último dependente expirar.',
      'Retenção Legal (Legal Hold) e Compliance: bloqueio administrativo que congela a expiração (data aging — processo automático de expiração e limpeza) de dados específicos sob investigação jurídica ou auditoria regulatória, sobrepondo-se temporariamente à política padrão de descarte.',
      'WORM (Write Once, Read Many) / Imutabilidade por Compliance: garante que registros contábeis, prontuários médicos ou backups críticos não possam ser alterados ou excluídos antecipadamente antes do término do período de retenção configurado.',
      'Data Aging / Poda (Pruning): processo periódico que identifica jobs expirados pelos critérios de dias/ciclos, remove metadados e marca blocos órfãos no armazenamento para reutilização ou micro-pruning (exclusão granular de referências expiradas diretamente no pool deduplicado sem aguardar todo o container expirar) em pools deduplicados.',
      'Exemplo operacional: uma Storage Policy aplica retenção de `14 dias e 2 ciclos`, com Full aos domingos e incrementais diários. Se o Full de hoje (D0) falhar, o ciclo iniciado no Full de D-7 continua aberto; os ciclos completos passam a ser os de D-14 e D-21, e o **Data Aging** mantém o Full de D-21 e seus incrementais mesmo após os `14 dias`, preservando os `2 ciclos` exigidos até que um novo Full seja concluído. Se um servidor de auditoria receber **Legal Hold**, seus jobs têm o expurgo suspenso até liberação formal.'
    ],
    technicalReference: [
      'Regra Commvault: Job expira apenas quando atinge SIMULTANEAMENTE (Idade >= Dias configurados) E (Ciclos posteriores completos >= Ciclos mínimos)',
      'Dependência: 1 Full retido por dependência mantém referências vivas até que toda a cadeia incremental associada expire.'
    ],
    examTraps: [
      'Configurar retenção de "7 dias e 2 ciclos" com 1 Full mensal NÃO apagará os backups após 7 dias — o sistema reterá por até ~2 meses para satisfazer os 2 ciclos completos.',
      'Em deduplicação, apagar apenas 1 job antigo muitas vezes libera menos espaço que o esperado porque os blocos compartilhados continuam referenciados por backups mais novos.',
      'Legal Hold / Imutabilidade impede exclusão antecipada mesmo após o prazo regular de retenção expirar (Legal Hold) ou antes do prazo expirar (WORM).'
    ],
    keyTerms: [
      'Ciclo de Backup (Cycle): conjunto completo formado por 1 Full mais os incrementais ou diferenciais dependentes até o próximo Full',
      'Data Aging / Pruning: rotina que verifica dias + ciclos + dependências para expirar metadados e liberar blocos sem referência',
      'Micro-Pruning: remoção granular de blocos órfãos em armazenamento deduplicado sem precisar expirar toda uma partição',
      'Legal Hold: congelamento temporário da expiração de conjuntos específicos por demanda judicial ou auditoria, sem alterar a retenção padrão',
      'Compliance vs Governance (Object Lock): modo imutável irrevogável até por root/admin (Compliance) vs modo passível de bypass com permissão específica (Governance)'
    ]
  },
  '6.2.4': {
    itemId: '6.2.4',
    highYieldSummary: [
      'Definição e escopo: restore é o processo técnico de reconstrução de arquivos individuais, objetos de diretório, bancos transacionais ou máquinas completas a partir de backups validados. Compreende restauração granular, **Point-in-Time Recovery (PITR)**, recuperação em hardware nu (**BMR**), inicialização instantânea de VMs e validação periódica isolada contra falhas silenciosas ou ataques.',
      'Tipos de Restore: Granular/Item-Level (recupera arquivo único, e-mail, objeto do AD — Active Directory — ou tabela específica sem restaurar a VM inteira), In-Place (sobrescreve o destino original), Out-of-Place (restaura para caminho/VM alternativo para validação ou comparação) e Bare-Metal Recovery — BMR (recupera SO completo do zero em hardware distinto/novo).',
      'Point-in-Time Recovery (PITR): restauração exata de um banco de dados até um segundo específico antes de uma falha lógica/DROP acidental, combinando o último Full + incrementais/diferenciais + replay sequencial de transaction logs (logs de transações gravados continuamente) até o timestamp (carimbo exato de data/hora) desejado.',
      'Instant VM Recovery / Live Mount: monta diretamente a imagem do backup armazenada no repositório (via NFS/iSCSI exposto pelo MediaAgent/Proxy) para subir uma VM em minutos enquanto os blocos são migrados em segundo plano (Storage vMotion — migração a quente de discos virtuais) para o datastore de produção.',
      'Teste Periódico de Restore (Validation / SureBackup): backup não testado NÃO é garantia de recuperação; testes automatizados ou programados sobem VMs isoladas em rede sandbox (rede bolha sem conflito de IP com a produção), validam heartbeat (sinal de vida do agente), serviços e integridade de banco de dados.',
      'Segurança no Restore Pós-Incidente (Ransomware): restaurar sempre em área de quarentena/sandbox, executar varredura antimalware e validar se a cópia escolhida é anterior ao momento da infecção inicial (dwell time — tempo de permanência silenciosa do atacante antes da detecção).',
      'Exemplo operacional: após uma exclusão acidental em tabela SQL às `14:35`, realiza-se **Out-of-Place PITR** para um servidor isolado restaurando o Full das `01:00` seguido do replay dos **transaction logs** até `14:34:00` (`STOPAT = 14:34:00`), recuperando os registros perdidos para reimportação segura. Em parada de servidor virtual de aplicação, o **Instant VM Recovery** inicializa a VM diretamente do repositório em ~2 minutos enquanto migra os blocos ao storage FC.'
    ],
    technicalReference: [
      'PITR em SGBD: Último Full + Diferencial/Incrementais + Transaction Logs até timestamp T (ex.: 14:32:10)',
      'Modalidades: Item-Level (arquivo/e-mail) | Out-of-Place (comparação/sandbox) | Instant Recovery (boot direto do repositório) | Bare-Metal (SO completo).'
    ],
    examTraps: [
      'Point-in-Time Recovery exige backup contínuo de TRANSACTION LOGS entre os backups Full/Incrementais; sem logs, só é possível voltar ao horário exato do snapshot/backup.',
      'Realizar restore In-Place após ataque de ransomware sem limpar o ambiente ou em máquina ainda infectada resulta em re-criptografia imediata dos dados restaurados.',
      'Confiar apenas no status "Backup Completed with Success" sem testar restauração frequentemente falha na hora da crise por catálogo/index corrompido ou senha perdida.'
    ],
    keyTerms: [
      'In-Place vs Out-of-Place: restauração sobrescrevendo o destino original versus restauração em local paralelo para conferência ou quarentena',
      'PITR (Point-in-Time Recovery): restauração até instante preciso combinando Full/Incrementais e replay sequencial de logs transacionais',
      'BMR (Bare-Metal Recovery): recuperação completa do sistema operacional e partições a partir do zero em hardware nu ou substituto',
      'Instant VM Recovery: boot imediato de VM direto do arquivo de backup montado pelo proxy/MediaAgent antes da cópia ao datastore',
      'Dwell Time / Sandbox Validation: verificação em rede isolada contra persistência silenciosa de malware antes de retornar dados à produção'
    ]
  },
  '6.2.5': {
    itemId: '6.2.5',
    highYieldSummary: [
      'Definição e escopo: **RPO** (Recovery Point Objective) e **RTO** (Recovery Time Objective) são métricas fundamentais de governança e arquitetura de continuidade que definem, respectivamente, a perda máxima aceitável de dados medida no tempo e a duração máxima tolerável de indisponibilidade de um serviço. Guiam o desenho de frequências de backup, logs de transação, replicação e infraestrutura de contingência.',
      'RPO (Recovery Point Objective): métrica orientada a DADOS que define a quantidade máxima tolerável de perda de dados medida em TEMPO entre o último backup/replicação válido e o momento do desastre (ex.: RPO = 15 min significa perder no máximo os últimos 15 minutos de alterações).',
      'RTO (Recovery Time Objective): métrica orientada a SERVIÇO/TEMPO DE PARADA que define o prazo máximo aceitável entre a detecção/interrupção do incidente e o restabelecimento operacional completo do serviço para o negócio.',
      'Relação Direta com Custos e Arquitetura: quanto menores o RPO e o RTO (tendendo a zero), exponencialmente maior o custo e complexidade da solução — RPO ~ 0 exige replicação síncrona; RTO ~ segundos/minutos exige failover (comutação automática de contingência) em cluster/hot site ativo (ambiente espelhado ligado).',
      'Fatores que Determinam RPO vs RTO na Prática: RPO é governado pela FREQUÊNCIA de backups, logs de transação ou replicação; RTO é governado pela VELOCIDADE de provisionamento, largura de banda de restore, tamanho da base e automação do runbook (roteiro operacional passo a passo) de recuperação.',
      'Relação com WRT e MTPD (Continuidade de Negócios): MTPD (Maximum Tolerable Period of Disruption) é o limite fatal de parada suportado pela organização; logo, RTO + WRT (Work Recovery Time — tempo de validação e retorno à operação normal após subir a infra) deve permanecer menor que o MTPD.',
      'Exemplo operacional: para o prontuário eletrônico de emergência com `MTPD = 2 horas`, definem-se `RPO <= 15 minutos` e `RTO <= 1 hora` (reservando `WRT = 30 min` para validação clínica, total `90 min <= 120 min`). Um backup diário às `00:00` entregaria RPO de até `24 h`, violando a meta; adota-se envio de logs transacionais a cada `15 minutos` para cumprir o RPO e réplica em hot standby pronta para failover em ~`20 minutos` para atender o RTO.'
    ],
    technicalReference: [
      'RPO = Passado (quanto dado posso perder para trás?) -> definido por frequência de backup/replicação',
      'RTO = Futuro (quanto tempo posso ficar fora do ar para frente?) -> definido por velocidade de restore/failover | Regra: RTO + WRT <= MTPD.'
    ],
    examTraps: [
      'Pegadinha comum em concursos: inverter RPO e RTO — lembre que RPO = Point (Ponto de dado perdido no tempo); RTO = Time (Tempo para voltar ao ar).',
      'Fazer backup diário à meia-noite garante na melhor hipótese RPO de até 24 horas, NUNCA RPO de 1 hora (mesmo que o restore leve apenas 10 minutos — 10 minutos é o RTO!).',
      'Replicação síncrona garante RPO próximo a zero, mas NÃO substitui backup histórico contra corrupção lógica ou exclusão acidental replicada.'
    ],
    keyTerms: [
      'RPO (Recovery Point Objective): perda máxima tolerável de dados medida no intervalo desde o último ponto de cópia válido',
      'RTO (Recovery Time Objective): tempo máximo admissível de parada entre o incidente e o retorno operacional da infraestrutura',
      'WRT (Work Recovery Time): tempo gasto pela equipe após subir os servidores para validar integridade e liberar o trabalho aos usuários',
      'MTPD (Maximum Tolerable Period of Disruption): limite máximo de interrupção suportável pela organização (exige RTO + WRT <= MTPD)',
      'Failover Automático: chaveamento para réplica/nó secundário projetado para reduzir o RTO de horas para minutos ou segundos'
    ]
  },
  '6.2.6': {
    itemId: '6.2.6',
    highYieldSummary: [
      'Definição e escopo: replicação consiste na cópia contínua ou agendada de volumes de produção (via storage array ou hipervisor) ou de backups deduplicados (Auxiliary Copy / Backup Copy) para outro local físico ou nuvem (offsite). Mitiga perdas totais de datacenter, variando entre replicação síncrona (RPO = 0, limitada por latência) e assíncrona (longas distâncias com RPO > 0).',
      'Replicação Offsite de Backups (Auxiliary Copy / Backup Copy Job): copia automaticamente backups deduplicados já gravados no site primário para um repositório remoto secundário ou nuvem (economizando banda WAN — Wide Area Network — usando deduplicação de blocos já existentes no destino).',
      'Replicação Síncrona (Storage/DR — Disaster Recovery): cada operação de escrita só é confirmada (ACK — confirmação de gravação) à aplicação após ser gravada simultaneamente no site primário E no site secundário; entrega RPO = 0, porém é sensível à latência RTT (Round-Trip Time — tempo de ida e volta na rede, tipicamente limitada a enlaces metropolitanos < 5–10 ms / ~100 km).',
      'Replicação Assíncrona: o site primário confirma a escrita imediatamente em armazenamento local e envia deltas posteriormente em fila/lotes para o site remoto; suporta longas distâncias geográficas sem penalizar a performance da aplicação, ao custo de RPO > 0 (segundos a minutos).',
      'Replicação de Máquinas Virtuais baseada em Hipervisor vs Storage: replicação baseada em storage espelha LUNs inteiras em bloco; replicação baseada em hipervisor (ex.: vSphere Replication / Veeam Replication) trabalha por VM individualmente com pontos de restauração históricos (snapshots de réplica).',
      'Diferença Crucial entre Replicação e Backup: replicação contínua espelha em tempo real alterações destrutivas (deleção de tabelas, arquivos criptografados por ransomware); portanto, réplicas devem manter múltiplos restore points (pontos históricos de retorno) ou coexistir com backups imutáveis.',
      'Exemplo operacional: um complexo hospitalar interliga dois datacenters a `25 km` por fibra óptica (`RTT = 1,8 ms`) com **replicação síncrona de storage** para o banco crítico (`RPO = 0`). Paralelamente, configura **Auxiliary Copy** deduplicada das cópias noturnas para um site remoto a `800 km` (`RTT = 28 ms`) mantendo pontos históricos imutáveis, já que o link interestadual inviabiliza escrita síncrona e réplicas isoladas não detêm corrupção lógica.'
    ],
    technicalReference: [
      'Replicação Síncrona: RPO = 0 | Latência crítica (RTT < 5–10ms, distância curta) | Impacta tempo de resposta da escrita local',
      'Replicação Assíncrona: RPO > 0 | Tolera longa distância/WAN | Zero impacto direto na latência de I/O de produção.'
    ],
    examTraps: [
      'Replicação síncrona entre data centers separados por 3.000 km (RTT > 50 ms) degrada severamente aplicações transacionais síncronas — usa-se replicação assíncrona em longas distâncias.',
      'Auxiliary Copy (Commvault) realiza cópia secundária a partir do backup já capturado (MediaAgent -> MediaAgent), evitando re-ler os servidores de produção.',
      'Sem pontos de retorno (snapshots/checkpoints) na réplica, um ataque que apaga dados na origem apaga também no destino replicado.'
    ],
    keyTerms: [
      'Replicação Síncrona: escrita confirmada à aplicação apenas após persistência nos dois sites (RPO = 0; exige RTT < 5–10 ms)',
      'Replicação Assíncrona: confirmação local imediata e envio posterior em deltas para o destino, tolerando enlaces WAN longos',
      'Auxiliary Copy / Backup Copy: transferência secundária offsite executada entre repositórios de backup sem impactar servidores de produção',
      'RTT (Round-Trip Time): tempo de ida e volta de rede entre sites que delimita a viabilidade da replicação síncrona',
      'Restore Points na Réplica: snapshots históricos mantidos na VM replicada para permitir retorno antes de falha lógica ou ransomware'
    ]
  },
  '6.2.7': {
    itemId: '6.2.7',
    highYieldSummary: [
      'Definição e escopo: recuperação de desastres (DR — Disaster Recovery) compreende planos técnicos, runbooks automatizados e infraestruturas secundárias (Cold, Warm, Hot Site ou DRaaS) projetados para retomar serviços críticos de TI após indisponibilidades graves de um datacenter inteiro. Compõe a camada tecnológica do Plano de Continuidade de Negócios (PCN/BCP) e depende de ordem estrita de boot e testes regulares.',
      'Recuperação de Desastres (DR — Disaster Recovery): conjunto de políticas, tecnologias e procedimentos técnicos focados em restabelecer infraestrutura crítica de TI (servidores, rede, dados, AD — Active Directory, DNS — Domain Name System, sistemas) em site secundário ou nuvem após sinistros maiores (incêndio, queda total de site, ciberataque severo).',
      'Runbook de DR e Ordem de Inicialização (Boot Order): documento executável passo a passo definindo dependências técnicas rígidas — ex.: Rede/Firewall/VPN -> Active Directory & DNS -> Storage/Bancos de Dados -> Middlewares (camada de integração/aplicação) / Aplicações Web -> Reapontamento de DNS/Load Balancer (ou ADC — Application Delivery Controller).',
      'Estratégias de Site Secundário (Cold / Warm / Hot): Cold Site (infraestrutura básica sem servidores prontos: RTO dias), Warm Site (equipamentos instalados com dados via backup/assíncrono: RTO horas) e Hot Site (ambiente espelhado ligado em sincronia contínua: RTO minutos/segundos).',
      'DRaaS (Disaster Recovery as a Service): replicação contínua do datacenter local para nuvem pública gerenciada onde VMs ficam dormentes em object/block storage de baixo custo e só consomem vCPU/RAM (CPU e memória virtuais) completa quando o failover é acionado.',
      'Failover, Failback e Proteção de Identidade (AD): em desastres envolvendo Active Directory, cuidado crítico com USN Rollback (retrocesso do Update Sequence Number quebrando a replicação AD) e restauração autoritativa vs não autoritativa; após estabilizar o site principal, planeja-se o failback (retorno controlado ao site primário) reverso sincronizando apenas deltas.',
      'Exemplo operacional: em um simulado anual de **DR** em nuvem (**DRaaS**) com queda total do site principal, o **Runbook** orquestrado executa o **failover** por ondas: `Grupo 1` valida túneis VPN/firewall e inicia o Controlador de Domínio AD/DNS (`aguardando porta 53/389`); `Grupo 2` sobe os bancos SQL (`aguardando resposta TCP 1433`); `Grupo 3` inicia os servidores web clínicos e atualiza o DNS público (TTL `60 s`). Após reparo local, o **failback** sincroniza apenas os deltas gravados durante a contingência.'
    ],
    technicalReference: [
      'Sequência típica de Runbook DR: Rede/Conectividade -> Serviços Base (AD/DNS/DHCP/NTP) -> Bancos de Dados -> Servidores de Aplicação -> DNS Público/ADC',
      'Failover (ativação no site DR) vs Failback (retorno controlado para o site principal após reparo).'
    ],
    examTraps: [
      'Tentar subir servidores de aplicação ou Exchange ANTES de ter Active Directory e DNS operacionais no site de DR causa falha generalizada de inicialização e autenticação.',
      'DRP (Plano de Recuperação de Desastres) foca na recuperação técnica da infraestrutura de TI; PCN/BCP (Plano de Continuidade de Negócios) engloba toda a operação da organização (pessoas, prédios, processos manuais alternativos).',
      'Um plano de DR nunca testado (apenas escrito no papel) frequentemente falha no failover real por regras de firewall desatualizadas, IPs hardcoded ou certificados expirados.'
    ],
    keyTerms: [
      'DRP vs BCP/PCN: plano técnico de restauração da infraestrutura de TI (DRP) versus plano corporativo amplo de continuidade operacional (BCP/PCN)',
      'Runbook de DR: roteiro sequencial documentado ou automatizado definindo dependências de boot, scripts de rede e testes de validação',
      'Cold / Warm / Hot Site: níveis de prontidão do site secundário variando de prédio vazio (dias) a ambiente pré-montado (horas) ou espelhado ativo (minutos)',
      'DRaaS (Disaster Recovery as a Service): replicação gerenciada para nuvem em que computação plena só é alocada e faturada durante o failover',
      'USN Rollback: dessincronização grave no Active Directory causada ao reverter snapshot/cópia antiga de DC sem protocolo correto de restauração'
    ]
  }
};
