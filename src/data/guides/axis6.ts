import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_6: Record<string, StudyGuide> = {
  '6.1.1': {
    itemId: '6.1.1',
    highYieldSummary: [
      'Backup Completo (Full): copia integralmente todos os arquivos selecionados e LIMPA (zera) o bit de arquivo (archive bit); proporciona a restauração mais rápida (basta a última mídia full), porém exige maior janela de backup e maior consumo de armazenamento.',
      'Backup Incremental: copia apenas os arquivos criados ou modificados desde o ÚLTIMO backup de qualquer tipo (full ou incremental) e LIMPA o archive bit; oferece o backup mais rápido e menor uso de espaço, porém exige no restore o último Full MAIS todos os incrementais sequenciais até o ponto desejado.',
      'Backup Diferencial: copia todos os arquivos alterados desde o ÚLTIMO backup Completo (Full) e NÃO limpa o archive bit; consome mais espaço diário ao longo da semana que o incremental, mas acelera o restore exigindo apenas o último Full MAIS o último Diferencial.',
      'Full Sintético e Forever Incremental: o Full Sintético é montado diretamente no servidor de mídia/storage combinando o Full anterior com os incrementais já gravados, evitando tráfego pesado de rede sobre o cliente de produção.',
      'Impacto na Cadeia de Falha: se uma mídia intermediária da sequência incremental corromper ou se perder, não é possível restaurar os incrementais posteriores àquele ponto; já no diferencial, cada dia é independente dos diferenciais anteriores.'
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
    keyTerms: ['Full (Completo)', 'Incremental', 'Diferencial', 'Archive Bit', 'Full Sintético']
  },
  '6.1.2': {
    itemId: '6.1.2',
    highYieldSummary: [
      'Regra 3-2-1 (e evolução 3-2-1-1-0): manter pelo menos 3 cópias dos dados (1 produção + 2 backups), em 2 tipos diferentes de mídias/tecnologias (ex.: disco + fita ou nuvem), com 1 cópia fora do site físico (offsite) — complementada por 1 cópia offline/imutável (air-gapped) e 0 erros em testes de restauração.',
      'Fitas Magnéticas LTO (Linear Tape-Open): alto desempenho sequencial, baixo custo por TB para retenção de longo prazo (arquivamento frio) e isolamento físico nativo (air-gap) contra ransomware; oferece recurso WORM (Write Once, Read Many) e criptografia AES-256 em hardware na unidade.',
      'Backup em Disco (D2D — Disk-to-Disk) e Appliances Dedicados: acesso aleatório instantâneo para restore granular de arquivos/VMs, suporte a boot instantâneo de VMs e alta taxa de deduplicação, porém vulnerável a ataques se conectado permanentemente à rede sem imutabilidade.',
      'Bibliotecas de Fitas (Tape Libraries) e VTL (Virtual Tape Library): robótica automatizada gerencia dezenas/centenas de cartuchos com leitores de código de barras (barcodes); VTL emula uma tape library sobre arrays de disco para acelerar janelas de backup legadas antes do envio para fita real (D2D2T).',
      'Armazenamento em Nuvem / Object Storage Imutável: tiers quente, frio e arquivamento (glacier/archive) permitem cópia offsite automatizada com Object Lock (imutabilidade WORM por período configurado), impedindo até mesmo que administradores comprometidos deletem snapshots de backup.'
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
    keyTerms: ['Regra 3-2-1 / 3-2-1-1-0', 'Fita LTO / WORM', 'D2D / D2D2T / VTL', 'Air-Gap', 'Object Storage Imutável']
  },
  '6.1.3': {
    itemId: '6.1.3',
    highYieldSummary: [
      'Conceito de Deduplicação: técnica de redução de dados que identifica segmentos/blocos idênticos por meio de hashes criptográficos e armazena apenas uma única instância física do bloco único, substituindo cópias redundantes por ponteiros de metadados.',
      'Deduplicação na Origem (Source-Side) vs no Destino (Target-Side): Source-Side calcula hashes no cliente/agente antes de enviar os dados, economizando drasticamente largura de banda WAN/LAN (à custa de CPU/RAM no cliente); Target-Side envia todos os dados pela rede para o servidor/appliance de destino processar a deduplicação sem sobrecarregar o servidor de aplicação.',
      'Deduplicação Inline vs Post-Process: Inline deduplica em tempo real na memória antes de gravar no disco (economiza espaço imediato, exige hardware robusto no MediaAgent/appliance); Post-Process grava primeiro em área de staging e deduplica em segundo plano após a janela de backup (ingestão rápida, exige espaço temporário bruto).',
      'Granularidade (Bloco Fixo vs Bloco Variável vs SIS): Single Instance Storage (SIS) deduplica apenas em nível de arquivo inteiro (se 1 byte muda, grava o arquivo todo de novo); deduplicação em nível de bloco variável identifica deslocamentos de conteúdo (inserções no início do arquivo), atingindo taxas muito superiores em backups repetitivos.',
      'Cuidados e Compressão: backups devem ser deduplicados ANTES de criptografar ou comprimir na origem de forma não determinística — dados já criptografados com chaves/IVs aleatórios têm alta entropia e praticamente ZERO deduplicação.'
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
    keyTerms: ['Source-Side vs Target-Side', 'Inline vs Post-Process', 'Bloco Fixo vs Variável', 'Hash / Ponteiros', 'Entropia / Criptografia']
  },
  '6.2.1': {
    itemId: '6.2.1',
    highYieldSummary: [
      'Arquitetura Commvault: o CommCell é composto pelo CommServe (cérebro central: gerenciamento, metadados em banco SQL, agendamento e coordenação de jobs), MediaAgent (motor de movimentação de dados: controla bibliotecas, disco, nuvem, deduplicação DDB e indexação) e Clientes/Agents (iDataAgents instalados nos hosts ou proxies VSA para VMs).',
      'Conceitos Lógicos no Commvault: Storage Policy define o fluxo de dados (cópia primária + cópias secundárias via Auxiliary Copy) e retenção básica; Subclient delimita exatamente o conjunto de dados protegido (conteúdo, filtros, agendamento e associação à Storage Policy).',
      'Equivalentes Corporativos (ex.: Veeam Backup & Replication): Backup Server (gerenciamento), Backup Proxy (processamento/transporte/descompressão, similar ao MediaAgent em tráfego VMware) e Backup Repository (destino em disco/object storage), formando Scale-Out Backup Repository (SOBR) com Performance + Capacity Tiers.',
      'Modos de Transporte em Ambientes Virtualizados: Direct SAN Access (lê blocos direto da LUN via FC/iSCSI sem sobrecarregar LAN), HotAdd (monta snapshot VMDK diretamente em uma VM proxy) e NBD/Network Mode (trafega pela rede de gerenciamento ESXi — mais lento, usado como fallback).',
      'Deduplication Database (DDB) no Commvault: armazena a tabela de assinaturas/hashes dos blocos deduplicados; deve residir em SSD/NVMe local de baixa latência para evitar gargalo de ingestão e falhas de seal/verificação.'
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
    keyTerms: ['CommServe / MediaAgent', 'Subclient / Storage Policy', 'Backup Proxy / Repository', 'Direct SAN / HotAdd / NBD', 'Deduplication Database (DDB)']
  },
  '6.2.2': {
    itemId: '6.2.2',
    highYieldSummary: [
      'Política de Backup: documento técnico e operacional que define escopo (o que proteger: sistemas críticos, bancos, VMs, configurações de rede/AD), frequência (RPO), janela de execução, tipos (Full/Incremental/Sintético), local de armazenamento, criptografia, retenção e responsáveis.',
      'Janela de Backup (Backup Window): intervalo de horário de menor carga produtiva (geralmente noturno/madrugada) alocado para conclusão de todos os jobs sem degradar aplicações; se o volume cresce e estoura a janela, recorre-se a snapshots integrados ao storage, deduplicação na origem ou paralelismo via múltiplos MediaAgents/Proxies.',
      'Esquema GFS (Grandfather-Father-Son): estratégia clássica de rotação combinando retenção diária (Son — ex.: 7 a 14 dias), semanal (Father — ex.: 4 semanas), mensal (Grandfather — ex.: 12 meses) e anual (arquivamento plurianual), equilibrando granularidade recente com histórico de longo prazo.',
      'Consistência de Aplicação (Application-Aware): uso de agentes ou VSS (Volume Shadow Copy Service no Windows) e hooks freeze/thaw (Linux) para quiescer buffers de bancos de dados (SQL, Exchange, Oracle, AD) garantindo backup transacionalmente íntegro (Application-Consistent) em vez de apenas Crash-Consistent.',
      'Priorização e Agendamento Escalonado: distribuir schedules por criticidade e evitar contenção simultânea no mesmo datastore/LUN ou link WAN (blackout windows impedem que backups rodem durante horário comercial).'
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
    keyTerms: ['Política de Backup', 'Janela de Backup / Blackout', 'Esquema GFS', 'Application-Consistent (VSS)', 'Agendamento']
  },
  '6.2.3': {
    itemId: '6.2.3',
    highYieldSummary: [
      'Critérios de Retenção (Dias + Ciclos): muitas plataformas (como Commvault) combinam tempo mínimo em dias E número mínimo de ciclos completos (Cycles) — um backup expirado em dias NÃO é podado (pruned) se isso reduzir a quantidade de ciclos completos abaixo do mínimo configurado.',
      'Regra de Dependência na Expiração (Aging): um backup Full NUNCA pode ser fisicamente apagado enquanto existir qualquer Incremental ou Diferencial dependente dele ainda dentro do prazo de retenção; todos os blocos encadeados só liberam espaço após o último dependente expirar.',
      'Retenção Legal (Legal Hold) e Compliance: bloqueio administrativo que congela a expiração (data aging) de dados específicos sob investigação jurídica ou auditoria regulatória, sobrepondo-se temporariamente à política padrão de descarte.',
      'WORM (Write Once, Read Many) / Imutabilidade por Compliance: garante que registros contábeis, prontuários médicos ou backups críticos não possam ser alterados ou excluídos antecipadamente antes do término do período de retenção configurado.',
      'Data Aging / Poda (Pruning): processo periódico que identifica jobs expirados pelos critérios de dias/ciclos, remove metadados e marca blocos órfãos no armazenamento para reutilização ou micro-pruning em pools deduplicados.'
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
    keyTerms: ['Dias vs Ciclos', 'Data Aging / Pruning', 'Dependência de Cadeia', 'WORM / Imutabilidade', 'Legal Hold']
  },
  '6.2.4': {
    itemId: '6.2.4',
    highYieldSummary: [
      'Tipos de Restore: Granular/Item-Level (recupera arquivo único, e-mail, objeto do AD ou tabela específica sem restaurar a VM inteira), In-Place (sobrescreve o destino original), Out-of-Place (restaura para caminho/VM alternativo para validação ou comparação) e Bare-Metal Recovery — BMR (recupera SO completo do zero em hardware distinto/novo).',
      'Point-in-Time Recovery (PITR): restauração exata de um banco de dados até um segundo específico antes de uma falha lógica/DROP acidental, combinando o último Full + incrementais/diferenciais + replay sequencial de transaction logs até o timestamp desejado.',
      'Instant VM Recovery / Live Mount: monta diretamente a imagem do backup armazenada no repositório (via NFS/iSCSI exposto pelo MediaAgent/Proxy) para subir uma VM em minutos enquanto os blocos são migrados em segundo plano (Storage vMotion) para o datastore de produção.',
      'Teste Periódico de Restore (Validation / SureBackup): backup não testado NÃO é garantia de recuperação; testes automatizados ou programados sobem VMs isoladas em rede sandbox (sem conflito de IP), validam heartbeat, serviços e integridade de banco de dados.',
      'Segurança no Restore Pós-Incidente (Ransomware): restaurar sempre em área de quarentena/sandbox, executar varredura antimalware e validar se a cópia escolhida é anterior ao momento da infecção inicial (dwell time).'
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
    keyTerms: ['Restore Granular', 'Bare-Metal (BMR)', 'Point-in-Time (PITR)', 'Instant Recovery', 'Teste de Restore (Sandbox)']
  },
  '6.2.5': {
    itemId: '6.2.5',
    highYieldSummary: [
      'RPO (Recovery Point Objective): métrica orientada a DADOS que define a quantidade máxima tolerável de perda de dados medida em TEMPO entre o último backup/replicação válido e o momento do desastre (ex.: RPO = 15 min significa perder no máximo os últimos 15 minutos de alterações).',
      'RTO (Recovery Time Objective): métrica orientada a SERVIÇO/TEMPO DE PARADA que define o prazo máximo aceitável entre a detecção/interrupção do incidente e o restabelecimento operacional completo do serviço para o negócio.',
      'Relação Direta com Custos e Arquitetura: quanto menores o RPO e o RTO (tendendo a zero), exponencialmente maior o custo e complexidade da solução — RPO ~ 0 exige replicação síncrona; RTO ~ segundos/minutos exige failover em cluster/hot site ativo.',
      'Fatores que Determinam RPO vs RTO na Prática: RPO é governado pela FREQUÊNCIA de backups, logs de transação ou replicação; RTO é governado pela VELOCIDADE de provisionamento, largura de banda de restore, tamanho da base e automação do runbook de recuperação.',
      'Relação com WRT e MTPD (Continuidade de Negócios): MTPD (Maximum Tolerable Period of Disruption) é o limite fatal de parada suportado pela organização; logo, RTO + WRT (Work Recovery Time — tempo de validação e retorno à operação normal após subir a infra) deve permanecer menor que o MTPD.'
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
    keyTerms: ['RPO (Perda de Dados)', 'RTO (Tempo de Parada)', 'WRT', 'MTPD', 'Replicação Síncrona vs Assíncrona']
  },
  '6.2.6': {
    itemId: '6.2.6',
    highYieldSummary: [
      'Replicação Offsite de Backups (Auxiliary Copy / Backup Copy Job): copia automaticamente backups deduplicados já gravados no site primário para um repositório remoto secundário ou nuvem (economizando banda WAN usando deduplicação de blocos já existentes no destino).',
      'Replicação Síncrona (Storage/DR): cada operação de escrita só é confirmada (ACK) à aplicação após ser gravada simultaneamente no site primário E no site secundário; entrega RPO = 0, porém é sensível à latência RTT (tipicamente limitada a enlaces metropolitanos < 5–10 ms / ~100 km).',
      'Replicação Assíncrona: o site primário confirma a escrita imediatamente em armazenamento local e envia deltas posteriormente em fila/lotes para o site remoto; suporta longas distâncias geográficas sem penalizar a performance da aplicação, ao custo de RPO > 0 (segundos a minutos).',
      'Replicação de Máquinas Virtuais baseada em Hipervisor vs Storage: replicação baseada em storage espelha LUNs inteiras em bloco; replicação baseada em hipervisor (ex.: vSphere Replication / Veeam Replication) trabalha por VM individualmente com pontos de restauração históricos (snapshots de réplica).',
      'Diferença Crucial entre Replicação e Backup: replicação contínua espelha em tempo real alterações destrutivas (deleção de tabelas, arquivos criptografados por ransomware); portanto, réplicas devem manter múltiplos restore points ou coexistir com backups imutáveis.'
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
    keyTerms: ['Replicação Síncrona vs Assíncrona', 'Auxiliary Copy / Backup Copy', 'Offsite', 'RTT / Latência WAN', 'Réplica de VM vs Backup']
  },
  '6.2.7': {
    itemId: '6.2.7',
    highYieldSummary: [
      'Recuperação de Desastres (DR — Disaster Recovery): conjunto de políticas, tecnologias e procedimentos técnicos focados em restabelecer infraestrutura crítica de TI (servidores, rede, dados, AD, DNS, sistemas) em site secundário ou nuvem após sinistros maiores (incêndio, queda total de site, ciberataque severo).',
      'Runbook de DR e Ordem de Inicialização (Boot Order): documento executável passo a passo definindo dependências técnicas rígidas — ex.: Rede/Firewall/VPN -> Active Directory & DNS -> Storage/Bancos de Dados -> Middlewares/Aplicações Web -> Reapontamento de DNS/Load Balancer.',
      'Estratégias de Site Secundário (Cold / Warm / Hot): Cold Site (infraestrutura básica sem servidores prontos: RTO dias), Warm Site (equipamentos instalados com dados via backup/assíncrono: RTO horas) e Hot Site (ambiente espelhado ligado em sincronia contínua: RTO minutos/segundos).',
      'DRaaS (Disaster Recovery as a Service): replicação contínua do datacenter local para nuvem pública gerenciada onde VMs ficam dormentes em object/block storage de baixo custo e só consomem vCPU/RAM completa quando o failover é acionado.',
      'Failover, Failback e Proteção de Identidade (AD): em desastres envolvendo Active Directory, cuidado crítico com USN Rollback e restauração autoritativa vs não autoritativa; após estabilizar o site principal, planeja-se o failback reverso sincronizando apenas deltas.'
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
    keyTerms: ['DR / DRP', 'Runbook / Ordem de Boot', 'Cold / Warm / Hot Site', 'DRaaS', 'Failover vs Failback']
  }
};
