import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_10: Record<string, StudyGuide> = {
  '10.1.1': {
    itemId: '10.1.1',
    highYieldSummary: [
      'Arquitetura de Gerenciamento TCP/IP (SNMP): composta por Gerente / NMS (Network Management Station — consulta e recebe eventos), Agente (processo embarcado em switches, roteadores, servidores e impressoras) e MIB (Management Information Base — banco hierárquico em árvore com os objetos gerenciáveis do dispositivo).',
      'SMI (Structure of Management Information) e OID (Object Identifier): SMI (baseado em ASN.1) define as regras formais de tipos de dados e sintaxe para descrever objetos dentro de uma MIB; cada variável gerenciável recebe um OID único em árvore numérica (ex.: `1.3.6.1.2.1` = MIB-II padrão `iso.org.dod.internet.mgmt.mib-2`).',
      'Operações SNMP Fundamentais: Polling (Manager -> Agent na porta UDP 161): `GetRequest`, `GetNextRequest`, `GetBulkRequest` (lote eficiente introduzido no SNMPv2c/v3) e `SetRequest` (altera configuração no agente); Notificações assíncronas (Agent -> Manager na porta UDP 162): `Trap` (sem confirmação) e `InformRequest` (SNMPv2c/v3, exige ACK de confirmação do Manager).',
      'Evolução SNMPv1, SNMPv2c e SNMPv3: SNMPv1 e v2c autenticam apenas via "community strings" (`public`/`private`) trafegando em TEXTO CLARO; SNMPv3 resolve a insegurança via modelo USM (User-based Security Model) com níveis `noAuthNoPriv`, `authNoPriv` (SHA/MD5) e `authPriv` (autenticação + criptografia AES/DES).',
      'Boas Práticas de Segurança SNMP: desabilitar comunidades padrão (`public`/`private`), restringir acesso por ACL apenas ao IP do NMS, evitar comunidades `Read-Write (RW)` quando somente leitura (`RO`) bastar e priorizar sempre SNMPv3 `authPriv` com SHA-256 + AES.'
    ],
    technicalReference: [
      'Portas: UDP 161 (Polling: GET/GETNEXT/GETBULK/SET) | UDP 162 (Notificações: TRAP sem ACK e INFORM com ACK)',
      'SNMPv3 Níveis: noAuthNoPriv | authNoPriv (integridade/autenticação HMAC-SHA) | authPriv (autenticação + criptografia AES).'
    ],
    examTraps: [
      'TRAP e INFORM trafegam do AGENTE para o GERENTE na porta UDP 162 — a diferença é que o INFORM exige confirmação (Response/ACK) do NMS, enquanto o TRAP é fire-and-forget.',
      'SNMPv1 e SNMPv2c NÃO criptografam dados nem community strings; usar SNMPv2c em rede não confiável expõe credenciais de leitura/escrita em sniffing.',
      'GetBulkRequest só existe a partir do SNMPv2c (não existe em SNMPv1) e otimiza coleta de grandes tabelas como interfaces.'
    ],
    keyTerms: ['SMI / MIB / OID', 'SNMPv1 / v2c / v3', 'UDP 161 vs 162', 'GET / GETBULK / SET', 'TRAP vs INFORM']
  },
  '10.1.2': {
    itemId: '10.1.2',
    highYieldSummary: [
      'Monitoramento Tradicional vs Observabilidade: monitoramento responde "o sistema está funcionando ou falhou?" via métricas e limiares pré-conhecidos; observabilidade permite inferir o estado interno e investigar "POR QUE falhou?" mesmo diante de falhas inéditas por meio de telemetria correlacionada.',
      'Os Três Pilares da Observabilidade: (1) Métricas (valores numéricos agregáveis ao longo do tempo — CPU, latência p95, taxa de erro — baratas e ideais para alertas/dashboards), (2) Logs (registros discretos com timestamp e contexto de eventos individuais) e (3) Traces / Rastreamento Distribuído (acompanham uma única requisição ponta a ponta entre microsserviços via TraceID/SpanID).',
      'Instrumentação e OpenTelemetry (OTel): padrão aberto CNCF que unifica APIs, SDKs e coletores para gerar e exportar métricas, logs e traces de forma agnóstica a fornecedor (evitando vendor lock-in de agentes proprietários).',
      'Sinais de Ouro (Google SRE Four Golden Signals): Latência (tempo de resposta, distinguindo sucesso vs erro), Tráfego (demanda req/s), Erros (taxa de falhas explícitas 5xx ou implícitas) e Saturação (quão cheio está o recurso antes de degradar).',
      'Relação Complementar entre Pilares: métricas detectam o sintoma (ex.: latência p99 subiu), o Trace aponta exatamente em qual microsserviço/query o tempo foi gasto, e o Log detalha a exceção exata ou payload inválido naquele instante.'
    ],
    technicalReference: [
      '3 Pilares: Métricas (séries temporais agregadas) + Logs (eventos imutáveis detalhados) + Traces (jornada ponta a ponta com TraceID/Spans)',
      'Golden Signals (SRE): Latência, Tráfego, Erros e Saturação | OpenTelemetry: padrão aberto unificado.'
    ],
    examTraps: [
      'Observabilidade NÃO é sinônimo apenas de "ter Zabbix ou Grafana" — exige instrumentação correlacionando Métricas + Logs + Traces distribuídos.',
      'Logs em texto puro sem correlação de TraceID ou timestamp sincronizado (NTP) dificultam reconstruir falhas que cruzam API gateway, backend e banco.',
      'Monitorar apenas média de latência esconde picos graves sentidos pelos usuários — em observabilidade mede-se percentis (p95, p99).'
    ],
    keyTerms: ['3 Pilares (Métricas/Logs/Traces)', 'Observabilidade vs Monitoramento', 'OpenTelemetry', 'Golden Signals (SRE)', 'TraceID / Span']
  },
  '10.1.3': {
    itemId: '10.1.3',
    highYieldSummary: [
      'Baseline (Linha de Base): medição contínua do comportamento normal e estatístico de desempenho de um sistema/rede em horários típicos (picos matinais, fechamento mensal, madrugada); sem baseline documentada é impossível distinguir operação normal de degradação sutil.',
      'Detecção de Anomalias vs Limiares Estáticos: limiares estáticos (ex.: CPU > 90%) falham quando um servidor que normalmente roda a 10% salta subitamente para 75%; detecção de anomalias compara o comportamento atual contra desvios padrão da própria baseline histórica (sazonalidade por dia/hora).',
      'Identificação Sistemática de Gargalos (USE Method — Brendan Gregg): para cada recurso (CPU, RAM, Disco, Rede) verificar Utilization (% ocupado), Saturation (tamanho de fila/espera — ex.: run queue CPU, disk queue length, drops de interface) e Errors (erros físicos/CRC, OOM, I/O errors).',
      'Métricas Enganosas Comuns (Tuning): CPU total baixa em servidor de 16 núcleos NÃO descarta gargalo se uma thread single-threaded saturar 1 único core a 100%; RAM "95% usada" no Linux geralmente inclui `buffers/page cache` saudável (não confundir com memória indisponível ou pressão de swap/page faults graves).',
      'Ciclo Seguro de Otimização (Tuning): estabelecer hipótese com base em evidência -> alterar UM parâmetro por vez em ambiente controlado -> medir antes e depois contra a baseline -> documentar e validar ausência de efeitos colaterais.'
    ],
    technicalReference: [
      'Método USE (Recursos): Utilization (ocupação %) + Saturation (fila/espera) + Errors (falhas)',
      'Método RED (Serviços): Rate (requisições/s) + Errors (taxa de falha) + Duration (latência).'
    ],
    examTraps: [
      'Alto uso de RAM em cache de disco (`buff/cache` no Linux) é comportamento saudável e liberável sob demanda — sinal real de gargalo de memória é swap ativo intenso (`si/so` no `vmstat`), OOM Killer ou alto Hard Page Faults/sec.',
      'Alterar vários parâmetros de sistema simultaneamente sem baseline impede saber qual ajuste realmente resolveu (ou piorou) o desempenho.',
      'Saturação (fila crescente de I/O ou CPU run queue) costuma aparecer ANTES que o recurso atinja 100% de utilização aparente.'
    ],
    keyTerms: ['Baseline / Sazonalidade', 'Detecção de Anomalias', 'Método USE vs RED', 'Gargalos (CPU/RAM/IO/Rede)', 'Tuning Controlado']
  },
  '10.2.1': {
    itemId: '10.2.1',
    highYieldSummary: [
      'Zabbix (Arquitetura Corporativa): Zabbix Server (motor central, avaliação de triggers, escalonamentos e escrita em BD relacional/TimescaleDB), Zabbix Proxy (coletor distribuído opcional que coleta localmente dados em redes remotas/DMZs com buffer local em caso de queda do link WAN), Zabbix Web Frontend (interface) e Zabbix Agents.',
      'Conceitos-Chave Zabbix: Host (alvo monitorado), Item (métrica coletada com chave única, ex.: `system.cpu.util`), Trigger (expressão lógica sobre itens definindo estado PROBLEM/OK com funções como `avg()`, `last()`, `nodata()`), Action (envia notificação ou executa comando remoto) e Template (pacote reutilizável de itens/triggers/LLD).',
      'LLD (Low-Level Discovery) no Zabbix: descobre automaticamente interfaces de rede, sistemas de arquivos montados, serviços Windows ou tabelas SNMP criando itens, triggers e gráficos dinamicamente sem cadastro manual individual.',
      'Grafana: plataforma líder de visualização e dashboards de séries temporais que se conecta a múltiplas fontes de dados (Data Sources como Zabbix, Prometheus, InfluxDB, Elasticsearch, SQL) sem exigir migração da ferramenta de coleta subjacente.',
      'PRTG Network Monitor: plataforma Windows popular de coleta unificada via sensores (SNMP, WMI, Ping, Flow/NetFlow, Packet Sniffer, HTTP) usando Probes locais e Remote Probes distribuídas para redes segmentadas.'
    ],
    technicalReference: [
      'Portas Zabbix: Zabbix Agent (TCP 10050) | Zabbix Server/Proxy Trapper & Active Checks (TCP 10051)',
      'Zabbix Proxy: armazena dados localmente no próprio DB caso a WAN caia e envia em lote ao Server quando reconecta (evita buracos nos gráficos).'
    ],
    examTraps: [
      'O Zabbix Proxy NÃO substitui o Zabbix Server como interface web nem envia alertas sozinho — ele apenas coleta/armazena em buffer os dados da filial e encaminha ao Server central (via TCP 10051).',
      'Grafana é primariamente plataforma de VISUALIZAÇÃO e análise sobre Data Sources externos (não é um coletor SNMP nativo isolado como PRTG ou Zabbix Server).',
      'No Zabbix, `nodata(5m)=1` é essencial em triggers de disponibilidade de host porque se o agente travar e parar de mandar dados, funções simples de último valor ficam congeladas no último estado OK.'
    ],
    keyTerms: ['Zabbix Server / Proxy', 'Items / Triggers / LLD', 'Grafana (Data Sources)', 'PRTG (Sensores / Probes)', 'TCP 10050 / 10051']
  },
  '10.2.2': {
    itemId: '10.2.2',
    highYieldSummary: [
      'Implementação Prática SNMP (Portas e Segurança): Manager consulta agentes na porta UDP 161 e escuta Traps/Informs na porta UDP 162; em produção segura utiliza-se SNMPv3 `authPriv` definindo Security Name, protocolo de autenticação (SHA-256 / SHA-1 — evitar MD5) e protocolo de privacidade/criptografia (AES-128 — evitar DES).',
      'Poller vs SNMP Trap Receiver: polling periódico (ex.: a cada 60s) coleta contadores de interface (octets in/out), CPU e temperatura de forma previsível; Traps assíncronas avisam imediatamente eventos instantâneos (linkDown, queda de BGP peer, falha de fonte/disco RAID) sem esperar o próximo ciclo de polling.',
      'Contadores 32-bit vs 64-bit (`ifHCInOctets`): em interfaces Gigabit (1 Gbps) ou 10/40/100 Gbps, contadores SNMP de 32 bits (`ifInOctets`) sofrem overflow (wrap-around) em poucos segundos distorcendo gráficos de banda — é obrigatório usar SNMPv2c/v3 consultando contadores de 64 bits (`ifHCInOctets` / `ifHCOutOctets`).',
      'SNMP Walk e Tradução de MIBs: ferramentas como `snmpwalk` e `snmpget` validam conectividade, community/credenciais e mapeiam OIDs antes de criar templates; carregar os arquivos MIB corretos do fabricante traduz OIDs numéricos em nomes legíveis.',
      'Limitações e Impacto em CPU do Dispositivo: consultas `snmpwalk` frequentes em tabelas enormes (ex.: tabela de rotas BGP inteira ou milhares de entradas MAC/ARP) podem consumir CPU elevada no plano de controle de switches/roteadores.'
    ],
    technicalReference: [
      'Contadores de tráfego >= 1 Gbps: exigir 64-bit counters (`ifHCInOctets`: 1.3.6.1.2.1.31.1.1.1.6) via SNMPv2c ou SNMPv3 (SNMPv1 NÃO suporta 64-bit Counter64)',
      'SNMPv3 authPriv: Autenticação (SHA) + Criptografia (AES) | Trap UDP 162 exige `snmptrapd` configurado com EngineID/usuário v3.'
    ],
    examTraps: [
      'SNMPv1 NÃO suporta contadores de 64 bits (`Counter64`) nem `GetBulkRequest` — gráficos de links 10 Gbps monitorados com OID de 32 bits mostram quedas falsas ou valores absurdos por wrap-around.',
      'Em SNMPv3, Traps são autenticadas/cifradas usando o `EngineID` do emissor; se o NMS não tiver o usuário e EngineID compatíveis cadastrados no `snmptrapd`, as Traps chegam na porta 162 mas são descartadas.',
      'Permitir SNMPv1/v2c com comunidade `private` (Read-Write) aberta sem ACL permite que atacantes alterem configurações ou desliguem interfaces remotamente via `snmpset`.'
    ],
    keyTerms: ['SNMPv3 authPriv (SHA+AES)', 'UDP 161 / 162', 'Counter64 (ifHCInOctets)', 'snmpwalk / MIB', 'Polling vs Trap']
  },
  '10.2.3': {
    itemId: '10.2.3',
    highYieldSummary: [
      'WMI (Windows Management Instrumentation): implementação Microsoft do padrão WBEM/CIM para consultar localmente ou remotamente métricas de hardware, serviços, logs de eventos, inventário e contadores do sistema Windows via linguagem WQL (WMI Query Language — sintaxe estilo SQL, ex.: `SELECT * FROM Win32_LogicalDisk`).',
      'Transporte WMI Clássico (DCOM/RPC) vs WinRM (WS-Management): WMI legado opera sobre DCOM/RPC usando porta fixa TCP 135 (Endpoint Mapper) seguida por portas altas dinâmicas RPC (49152–65535), dificultando atravessar firewalls; WinRM moderno trafega sobre HTTP (TCP 5985) ou HTTPS (TCP 5986) de forma amigável a firewalls.',
      'PerfMon (Performance Monitor / Contadores de Desempenho): expõe objetos detalhados em tempo real no Windows (`Processor(_Total)\\% Processor Time`, `Memory\\Available MBytes`, `PhysicalDisk\\Avg. Disk sec/Read`, `Network Interface`), consumidos nativamente pelo Zabbix Agent (`perf_counter[...]`) ou sensores PRTG.',
      'Impacto de Desempenho e Segurança do WMI Remoto: polling WMI/DCOM muito frequente abre múltiplas sessões RPC autenticadas no servidor Windows consumindo CPU do processo `WmiPrvSE.exe`; em ambientes endurecidos recomenda-se agente local leve ou WinRM sobre HTTPS com conta de serviço sem privilégio de Domain Admin (apenas grupos `Performance Monitor Users` / `Distributed COM Users`).',
      'Namespace Padrão WMI: a maioria das classes de infraestrutura do SO reside no namespace `root\\cimv2` (processos, discos, rede, serviços), enquanto Hyper-V usa `root\\virtualization\\v2` e IIS/SQL usam namespaces próprios.'
    ],
    technicalReference: [
      'WMI DCOM/RPC legado: TCP 135 + portas efêmeras 49152–65535 | WinRM (CIM moderno): TCP 5985 (HTTP) / TCP 5986 (HTTPS)',
      'Namespace padrão Windows: `root\\cimv2` | Consultas: WQL (`SELECT ... FROM Win32_Service`) | Contadores precisos: PerfMon.'
    ],
    examTraps: [
      'Liberar apenas a porta TCP 135 no firewall NÃO faz monitoramento WMI DCOM remoto funcionar — a conexão falha ao tentar abrir a porta RPC dinâmica negociada na sequência (49152–65535).',
      'Monitorar servidores Windows via Zabbix Agent local (ou WinRM) gera muito menos sobrecarga de rede e abertura de firewall do que dezenas de queries WMI DCOM por segundo.',
      'Conceder privilégio de Administrador de Domínio à conta usada pelo PRTG/monitoramento para consultar WMI viola o menor privilégio — basta permissão de leitura WMI + grupo Performance Monitor Users nos servidores membros.'
    ],
    keyTerms: ['WMI (DCOM TCP 135 + RPC)', 'WinRM (5985/5986)', 'PerfMon (Contadores)', 'WQL / root\\cimv2', 'Menor Privilégio WMI']
  },
  '10.2.4': {
    itemId: '10.2.4',
    highYieldSummary: [
      'Agente Passivo (Passive Check): o servidor/proxy de monitoramento inicia conexão TCP contra o agente no host alvo (no Zabbix, Server/Proxy conecta na porta TCP 10050 do Zabbix Agent), solicita a chave do item e aguarda a resposta imediata.',
      'Agente Ativo (Active Check): o agente no host monitorado inicia conexão de saída contra o servidor/proxy (no Zabbix, Agent conecta na porta TCP 10051 do Server/Proxy), baixa a lista de itens e envia periodicamente os valores coletados — ideal para hosts atrás de NAT/firewall sem portas de entrada abertas e para reduzir carga de conexões no Server.',
      'Monitoramento Agentless vs Agent-Based: Agentless (SNMP, ICMP, SSH, WMI, HTTP) dispensa instalação nos alvos (única opção em switches, roteadores, appliances e impressoras); Agent-Based oferece coleta muito mais rica (leitura direta de logs locais, execução eficiente de scripts/PerfMon, buffer em memória quando a rede oscila e menor tráfego via Active Checks).',
      'Zabbix Agent vs Zabbix Agent 2: o Agent clássico é escrito em C (leve, multi-processo); o Agent 2 (escrito em Go) mantém conexões persistentes reduzindo overhead em plugins nativos (Docker, PostgreSQL, Redis, Smartmontools, systemd) e possui agendamento concorrente interno.',
      'Segurança na Comunicação dos Agentes: configurar criptografia PSK (Pre-Shared Key) ou Certificados TLS entre Agent e Server/Proxy e restringir o parâmetro `Server=` / `ServerActive=` para aceitar comandos apenas dos IPs autorizados (desabilitando `EnableRemoteCommands` salvo estrita necessidade).'
    ],
    technicalReference: [
      'Zabbix Passivo: Server/Proxy -> Agent (TCP 10050) | Zabbix Ativo: Agent -> Server/Proxy (TCP 10051)',
      'Agentless (SNMP/WMI/ICMP/SSH) vs Agent-Based (profundidade local, buffer em RAM em Active mode, funciona atrás de NAT).'
    ],
    examTraps: [
      'A banca adora inverter Ativo e Passivo no Zabbix: no modo ATIVO quem abre a conexão na porta 10051 é o AGENTE em direção ao Server/Proxy; no modo PASSIVO quem abre a conexão na porta 10050 é o Server/Proxy em direção ao Agente.',
      'Servidores em nuvem ou filiais atrás de NAT sem VPN site-to-site são monitorados facilmente com Zabbix Agent ATIVO (pois apenas o agente precisa alcançar o IP público/proxy na 10051).',
      'Em monitoramento por Agent, falhas de coleta apenas de itens Passivos enquanto itens Ativos continuam chegando indicam firewall bloqueando TCP 10050 de entrada no host ou parâmetro `Server=` errado no `zabbix_agentd.conf`.'
    ],
    keyTerms: ['Agente Passivo (10050)', 'Agente Ativo (10051)', 'Agent-Based vs Agentless', 'Zabbix Agent 2', 'TLS/PSK no Agente']
  },
  '10.2.5': {
    itemId: '10.2.5',
    highYieldSummary: [
      'Protocolo Syslog (RFC 3164 BSD legado e RFC 5424 moderno): padrão universal para envio centralizado de mensagens de eventos de switches, roteadores, firewalls, servidores Linux (`rsyslog`/`syslog-ng`) e sistemas de storage para um servidor coletor/SIEM.',
      'Portas e Confiabilidade de Transporte: UDP 514 (padrão clássico sem confirmação — rápido e leve, porém pode perder logs em congestionamento ou reinício do coletor), TCP 514/601 (entrega confiável orientada à conexão) e Syslog sobre TLS na porta TCP 6514 (garante confidencialidade e integridade contra adulteração em trânsito).',
      'Estrutura da Prioridade (PRI = Facility × 8 + Severity): `Facility` identifica o subsistema gerador (0=kernel, 1=user, 3=daemon, 4/10=auth/security, 16–23=`local0` a `local7` muito usados por firewalls/switches); `Severity` define a gravidade de 0 a 7 (ordem decrescente de criticidade).',
      'Os 8 Níveis de Severidade Syslog (0 a 7 — memorizar para prova!): 0 Emergency (sistema inutilizável), 1 Alert (ação imediata), 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug (maior volume — evitar em produção contínua).',
      'Centralização e Retenção para Auditoria/Troubleshooting: armazenar logs apenas localmente no dispositivo permite que invasores apaguem rastros ou se percam na reinicialização (switches sem disco persistente); envio remoto com relógio sincronizado via NTP preserva evidências e permite correlação.'
    ],
    technicalReference: [
      'Portas Syslog: UDP 514 (sem garantia) | TCP 514 / 601 (confiável) | TCP 6514 (Syslog over TLS — RFC 5425)',
      'Severidades (0 mais grave -> 7 menos grave): 0 Emergency | 1 Alert | 2 Critical | 3 Error | 4 Warning | 5 Notice | 6 Informational | 7 Debug.'
    ],
    examTraps: [
      'Pegadinha clássica: quanto MENOR o número da severidade no Syslog, MAIS CRÍTICO é o evento (0 = Emergency é gravíssimo; 7 = Debug é o mais baixo/verboso).',
      'Configurar nível `Debug (7)` ou `Informational (6)` enviando tudo por UDP 514 em firewall corporativo de alto tráfego pode saturar CPU do firewall, encher discos do SIEM e provocar descarte silencioso de logs críticos.',
      'Logs via UDP 514 trafegam em texto claro e não garantem entrega; ambientes com requisito de segurança/compliance devem usar TCP + TLS (porta 6514).'
    ],
    keyTerms: ['Syslog RFC 5424 / 3164', 'UDP/TCP 514 vs TLS 6514', '8 Níveis de Severidade (0–7)', 'Facility (local0–local7)', 'Centralização / NTP']
  },
  '10.2.6': {
    itemId: '10.2.6',
    highYieldSummary: [
      'Séries Temporais (Time Series) e Retenção: métricas consistem em tuplas `(nome_métrica, labels/tags, timestamp, valor numérico)` armazenadas em TSDBs (TimescaleDB, Prometheus, InfluxDB) usando compressão eficiente e políticas de retenção/rollup (dados detalhados a cada 1m por 30 dias; tendências agregadas horárias por 1 ano).',
      'Métricas Essenciais de CPU: distinguir User Space (`%user`), Kernel/System (`%sys`), I/O Wait (`%iowait` — CPU ociosa esperando resposta de disco lento!), Steal Time (`%st` no Linux — hipervisor roubando CPU para outra VM por contenção física) e Load Average (média de processos rodando ou aguardando CPU/I/O não-interruptível nos últimos 1, 5 e 15 minutos).',
      'Métricas Essenciais de Memória: diferenciar Memória Física Livre vs Memória Disponível (`MemAvailable` inclui caches recuperáveis), Page Cache/Buffers, Swap In/Out ativo (indica thrashing real) e OOM Events.',
      'Métricas Essenciais de Disco e Storage: IOPS (operações/s), Throughput (MB/s), Latência de I/O (`await` / `Avg. Disk sec/Read` — ideal SSD < 1–5 ms, HDD < 15–20 ms) e Tamanho da Fila (`avgqu-sz` / `Current Disk Queue Length`).',
      'Métricas Essenciais de Rede: Utilização de Banda (bps Rx/Tx vs capacidade do link), Taxa de Pacotes (pps), Erros de Interface (CRC, FCS, frame errors -> indicam cabo/SFP ruim ou duplex mismatch) e Descarte de Pacotes (Rx/Tx drops -> indicam saturação de buffer/ring).'
    ],
    technicalReference: [
      'CPU Virtualizada: `%iowait` alto = gargalo de disco/storage | `%steal` alto = contenção física de CPU no hipervisor/host compartilhado',
      'Load Average: comparar sempre contra o número de vCPUs (ex.: Load 8 em host de 4 vCPUs = fila/saturação; Load 8 em host de 16 vCPUs = 50% ocupado).'
    ],
    examTraps: [
      '`%iowait` alto NÃO significa CPU fraca — significa exatamente o oposto: a CPU está livre, mas parada esperando operações de leitura/gravação em disco ou NFS lento.',
      '`%steal` alto dentro de uma VM indica que o host físico (hipervisor) está sobrecarregado ou há overcommit excessivo de CPU por outras VMs vizinhas (não adianta otimizar código dentro da VM).',
      'Monitorar apenas porcentagem de banda (Mbps) sem monitorar erros/descartes de interface e taxa de pacotes (pps) oculta micro-rajadas (microbursts) e problemas físicos de cabeamento.'
    ],
    keyTerms: ['Time Series (TSDB)', 'CPU (%iowait / %steal / Load)', 'MemAvailable vs Swap', 'Disco (IOPS / Latência / Fila)', 'Rede (Drops / CRC Errors)']
  },
  '10.2.7': {
    itemId: '10.2.7',
    highYieldSummary: [
      'Triggers e Limiares (Thresholds): regras avaliadas continuamente que disparam alertas quando uma condição é violada; recomenda-se usar múltiplos níveis de severidade (Warning para atenção preventiva vs High/Disaster para parada iminente) e janelas temporais (`avg(5m) > 85%` em vez de leitura instantânea única `last()`).',
      'Prevenção de Flapping (Histerese): evita que uma métrica oscilando em torno de 80% dispare dezenas de alertas abre-e-fecha por hora; na histerese do Zabbix define-se uma expressão de disparo (ex.: temperatura >= 45°C) e outra distinta de recuperação (temperatura <= 40°C).',
      'Dependências entre Triggers (Supressão de Tempestade de Alertas): vincular triggers de servidores/serviços por trás de um roteador/switch core à trigger de conectividade desse equipamento raiz — se o link da filial cair, apenas 1 alerta do roteador é emitido suprimindo 50 falsos alertas dos hosts atrás dele.',
      'Escalonamento (Escalation) e Roteamento de Alertas: se um incidente crítico não for reconhecido (`ACK`) em X minutos pela equipe N1, a ação escala automaticamente para N2/Coordenação ou muda o canal (e-mail/chat -> SMS/chamada telefônica de plantão), respeitando janelas de manutenção programada.',
      'Combate à Fadiga de Alertas (Alert Fatigue): alertas acionáveis devem ter dono claro e procedimento de resposta; excesso de alertas informativos ou falsos positivos leva a equipe a ignorar incidentes reais críticos.'
    ],
    technicalReference: [
      'Histerese Zabbix: Expressão de Disparo (`>= 90%` por `5m`) != Expressão de Recuperação (`<= 75%` por `5m`) para evitar flapping',
      'Qualidade de Alerta: Reduzir ruído com Janela de Tempo + Dependência Topológica + Janela de Manutenção + Escalonamento pós-timeout.'
    ],
    examTraps: [
      'Configurar trigger sem histerese nem janela temporal (`last() > 80%`) gera tempestade de notificações em picos normais de 10 segundos (flapping).',
      'Sem dependência topológica entre switches/links e servidores dependentes, a queda de um único link WAN gera dezenas de chamados simultâneos confundindo a equipe de NOC sobre a causa raiz.',
      'Alertar apenas quando um disco atinge 100% cheio já é tarde demais (incidente em curso); boas triggers usam alerta preditivo (`Warning` em 80–85% e `Critical` em 92–95% ou projeção `timeleft()`).'
    ],
    keyTerms: ['Triggers & Thresholds', 'Histerese (Anti-Flapping)', 'Dependência Topológica', 'Escalonamento & Maintenance', 'Alert Fatigue']
  },
  '10.2.8': {
    itemId: '10.2.8',
    highYieldSummary: [
      'Disponibilidade (Uptime) e Cálculo de SLA: expressa o percentual de tempo em que um serviço esteve operacional no período acordado (`Uptime % = (Tempo Total - Downtime) / Tempo Total × 100`); cada "nove" adicional reduz drasticamente o tempo máximo de indisponibilidade permitido no ano/mês.',
      'Tabela Clássica de Níveis de Disponibilidade ("Os Noves"): 99% ("dois noves" = 3,65 dias/ano ou 7,2h em mês de 30 dias), 99,9% ("três noves" = 8,76 horas/ano ou 43,2 min em mês de 30 dias / ~43,8 min média anual), 99,95% (~4,38 h/ano), 99,99% ("quatro noves" = 52,56 minutos/ano ou 4,32–4,38 min/mês) e 99,999% ("cinco noves" = 5,26 minutos/ano).',
      'Monitoramento ICMP vs Monitoramento Sintético (Synthetic Checks): ICMP Ping testa apenas alcançabilidade L3 (um servidor web travado ou banco fora continua respondendo ping!); Synthetic Checks simulam a jornada real do usuário ponta a ponta (login HTTPS, consulta API JSON, verificação de certificado TLS e conteúdo da página).',
      'Disponibilidade em Série vs Paralelo: componentes dependentes em SÉRIE multiplicam disponibilidades (`A_total = A1 × A2`, sempre MENOR que o elo mais fraco); componentes redundantes em PARALELO somam resiliência (`A_total = 1 - (1 - A1) × (1 - A2)`).',
      'MTBF e MTTR na Disponibilidade: `Disponibilidade = MTBF / (MTBF + MTTR)`; portanto, reduzir o MTTR (tempo de detecção via monitoramento + automação de failover) eleva a disponibilidade prática tão ou mais efetivamente quanto hardware caro.'
    ],
    technicalReference: [
      'Downtime anual (365 dias): 99% = 3,65 dias | 99,9% = 8,76 h (~43,2m em 30d) | 99,99% = 52,56 min (~4,32m em 30d) | 99,999% = 5,26 min',
      'Sistemas em série: A_total = A1 × A2 | Sistemas em paralelo: A_total = 1 - (1 - A1)(1 - A2) | Fórmula: MTBF / (MTBF + MTTR).'
    ],
    examTraps: [
      'Medir disponibilidade de um portal corporativo ou sistema de prontuário apenas com Ping ICMP falha em detectar páginas fora (HTTP 500/503), certificado expirado ou erro de banco de dados — exige Synthetic Check / Web Scenario.',
      'Em cadeia em SÉRIE (Link 99,9% + Firewall 99,9% + Servidor 99,9%), a disponibilidade combinada cai para ~99,7%, NÃO permanece 99,9%!',
      'Verificar se o SLA contratado exclui janelas de manutenção programada antes de contabilizar violações contratuais.'
    ],
    keyTerms: ['Uptime & SLA ("Noves")', 'MTBF / MTTR', 'ICMP vs Synthetic Check', 'Série vs Paralelo', 'Redundância']
  },
  '10.2.9': {
    itemId: '10.2.9',
    highYieldSummary: [
      'Gestão de Capacidade (Capacity Planning): processo contínuo de coletar séries históricas longas (meses/anos), projetar tendências de crescimento (regressão linear/sazonalidade) e dimensionar antecipadamente CPU, memória, IOPS/storage, portas de switch, licenças e links WAN antes que ocorra saturação.',
      'Análise de Tendência (Trend Prediction): diferencia picos pontuais sazonais (fechamento de folha, campanhas) de crescimento estrutural sustentado; ferramentas como Zabbix possuem funções nativas de previsão (`forecast()`, `timeleft()`) para estimar "em quantos dias o datastore atingirá 95%".',
      'Identificação do Joelho de Saturação ("Knee of the Curve"): em sistemas de fila (CPU, discos, links), a latência NÃO cresce linearmente — permanece estável até cerca de 70–80% de utilização e então dispara exponencialmente até o colapso; por isso o planejamento de capacidade define limites seguros de trabalho (headroom de 20–30%).',
      'Right-Sizing (Dimensionamento Otimizado): identifica tanto gargalos iminentes quanto superdimensionamento crônico ("VMs zumbis" alocadas com 16 vCPUs usando apenas 3%), otimizando custos de hardware, nuvem e licenciamento por núcleo.',
      'Simulação de Cenários (N-1 e Crescimento Futuro): validar continuamente se, além de suportar o crescimento de negócio projetado para 6–12 meses, os clusters ainda sobrevivem à falha simultânea de 1 nó/link (capacidade N+1 sem atingir o ponto de saturação).'
    ],
    technicalReference: [
      'Curva de Saturação (Teoria de Filas): acima de ~70–80% de utilização média contínua, pequenos aumentos de carga provocam explosão exponencial na latência',
      'Headroom mínimo em clusters HA (2 nós): manter uso normal <= 40–45% por nó para suportar failover 100% em caso de queda de um host.'
    ],
    examTraps: [
      'Planejamento de capacidade NÃO deve ser confundido com troubleshooting reativo de incidente — capacidade olha tendências futuras (semanas/meses) para agir ANTES da degradação.',
      'Calcular média mensal simples (ex.: link WAN com média de 35% nas 24h) oculta que durante o horário comercial (09h–17h) o link passa 100% saturado; capacidade deve analisar percentil 95 de horário útil e picos sazonais.',
      'Em storage thin-provisioned, esquecer de monitorar tanto a capacidade física real do pool quanto o consumo alocado (oversubscription) pode travar todas as VMs abruptamente por falta de espaço.'
    ],
    keyTerms: ['Capacity Planning', 'Análise de Tendência (Forecast)', 'Saturação (Knee of Curve)', 'Right-Sizing', 'Headroom N+1']
  }
};
