import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_10: Record<string, StudyGuide> = {
  '10.1.1': {
    itemId: '10.1.1',
    highYieldSummary: [
      'Definição e escopo: o **SNMP** (*Simple Network Management Protocol*, RFCs 1157 e 3411–3418) é o protocolo padrão da camada de aplicação na pilha TCP/IP (*Transmission Control Protocol / Internet Protocol*) para gerenciamento e monitoramento remoto de ativos de rede e servidores. Separa gerente (**NMS**), agente no dispositivo e base hierárquica (**MIB** / **SMI**), permitindo coleta periódica (*polling*), alteração de parâmetros e notificações assíncronas.',
      'Arquitetura de Gerenciamento TCP/IP (SNMP): composta por Gerente / NMS (Network Management Station — estação central que consulta e recebe eventos), Agente (processo embarcado em switches, roteadores, servidores e impressoras) e MIB (Management Information Base — banco hierárquico em árvore com os objetos gerenciáveis do dispositivo).',
      'SMI (Structure of Management Information) e OID (Object Identifier): SMI (baseado em ASN.1 — *Abstract Syntax Notation One*, sintaxe formal independente de plataforma) define as regras formais de tipos de dados e sintaxe para descrever objetos dentro de uma MIB; cada variável gerenciável recebe um OID único em árvore numérica (ex.: `1.3.6.1.2.1` = MIB-II padrão `iso.org.dod.internet.mgmt.mib-2`).',
      'Operações SNMP Fundamentais: Polling (consulta periódica Manager -> Agent na porta UDP — *User Datagram Protocol* — `161`): `GetRequest`, `GetNextRequest`, `GetBulkRequest` (leitura em lote eficiente introduzida no SNMPv2c/v3) e `SetRequest` (altera configuração no agente); Notificações assíncronas (Agent -> Manager na porta UDP `162`): `Trap` (envio unidirecional sem confirmação) e `InformRequest` (SNMPv2c/v3, exige ACK — *Acknowledgment* — de confirmação do Manager).',
      'Evolução SNMPv1, SNMPv2c e SNMPv3: SNMPv1 e v2c autenticam apenas via "community strings" (`public`/`private` — senhas compartilhadas) trafegando em TEXTO CLARO; SNMPv3 resolve a insegurança via modelo USM (User-based Security Model — modelo de segurança baseado em usuário) com níveis `noAuthNoPriv`, `authNoPriv` (SHA/MD5 — *Secure Hash Algorithm / Message-Digest 5*) e `authPriv` (autenticação + criptografia AES/DES — *Advanced / Data Encryption Standard*).',
      'Boas Práticas de Segurança SNMP: desabilitar comunidades padrão (`public`/`private`), restringir acesso por ACL (*Access Control List* — lista de controle de acesso) apenas ao IP do NMS, evitar comunidades `Read-Write (RW)` quando somente leitura (`RO`) bastar e priorizar sempre SNMPv3 `authPriv` com HMAC-SHA-256 (RFC 7860) + AES-128.',
      'Exemplo operacional: em um switch de distribuição hospitalar, o NMS executa `snmpbulkwalk -v3 -l authPriv -u mon_noc -a SHA-256 -A <auth> -x AES -X <priv> 10.10.0.2 1.3.6.1.2.1.31.1.1.1.6` na porta `UDP 161` e recebe a tabela de octetos cifrada via **USM**. Se um enlace cair, o agente envia `InformRequest` para `UDP 162` e aguarda o pacote `Response` de confirmação do gerente.'
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
    keyTerms: [
      'NMS / Agente / MIB: gerente central que consulta dados, processo embarcado no ativo gerenciado e base hierárquica em árvore de objetos',
      'SMI e OID (ASN.1): linguagem formal de definição de tipos da MIB (SMI) e identificador numérico único de cada objeto na árvore (OID)',
      'UDP 161 vs UDP 162: porta de polling Manager -> Agent (GET/GETNEXT/GETBULK/SET) versus porta de notificações assíncronas (TRAP/INFORM)',
      'TRAP vs INFORM: notificação fire-and-forget sem confirmação do NMS versus notificação confiável (SNMPv2c/v3) com ACK obrigatório',
      'SNMPv3 USM (authPriv): modelo de segurança por usuário com três níveis — noAuthNoPriv, authNoPriv (HMAC-SHA) e authPriv (SHA + AES)'
    ]
  },
  '10.1.2': {
    itemId: '10.1.2',
    highYieldSummary: [
      'Definição e escopo: a **observabilidade** é a propriedade de inferir o estado interno de sistemas distribuídos por meio de suas saídas externas de telemetria (**métricas**, **logs** e **traces**), superando o monitoramento restrito a limiares previamente conhecidos. Padronizada pelo **OpenTelemetry** (CNCF), permite diagnosticar falhas inéditas em APIs, microsserviços e bancos de dados.',
      'Monitoramento Tradicional vs Observabilidade: monitoramento responde "o sistema está funcionando ou falhou?" via métricas e limiares pré-conhecidos; observabilidade permite inferir o estado interno e investigar "POR QUE falhou?" mesmo diante de falhas inéditas por meio de telemetria correlacionada.',
      'Os Três Pilares da Observabilidade: (1) Métricas (valores numéricos agregáveis ao longo do tempo — CPU, latência p95 [*95º percentil*], taxa de erro — baratas e ideais para alertas/dashboards), (2) Logs (registros discretos com timestamp e contexto de eventos individuais) e (3) Traces / Rastreamento Distribuído (acompanham uma única requisição ponta a ponta entre microsserviços via TraceID/SpanID — identificadores da jornada completa e de cada etapa interna).',
      'Instrumentação e OpenTelemetry (OTel): padrão aberto CNCF (*Cloud Native Computing Foundation*) que unifica APIs (*Application Programming Interfaces*), SDKs (*Software Development Kits*) e coletores (via protocolo OTLP — *OpenTelemetry Protocol* em gRPC `4317`/HTTP `4318`) para gerar e exportar métricas, logs e traces de forma agnóstica a fornecedor (evitando *vendor lock-in* — dependência de agentes proprietários).',
      'Sinais de Ouro (Google SRE Four Golden Signals): SRE (*Site Reliability Engineering*) define Latência (tempo de resposta, distinguindo sucesso vs erro), Tráfego (demanda req/s), Erros (taxa de falhas explícitas HTTP 5xx [*erro de servidor*] ou implícitas) e Saturação (quão cheio está o recurso antes de degradar).',
      'Relação Complementar entre Pilares: métricas detectam o sintoma (ex.: latência p99 [*99º percentil*] subiu), o Trace aponta exatamente em qual microsserviço/query (*consulta de banco*) o tempo foi gasto, e o Log detalha a exceção exata ou payload inválido naquele instante.',
      'Exemplo operacional: durante lentidão no portal de agendamento clínico, o alerta de **Golden Signals** dispara quando a latência `p99` ultrapassa `1,5 s`. Pelo `TraceID=4bf92f3577b34da6a3ce929d0e0e4736` exportado via **OTel**, identifica-se um *Span* de `1,38 s` no serviço `lab-results-api` e, filtrando o mesmo `TraceID` nos logs JSON com relógio sincronizado por **NTP** (*Network Time Protocol*), confirma-se esgotamento do pool de conexões no PostgreSQL.'
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
    keyTerms: [
      '3 Pilares da Observabilidade: métricas agregadas em séries temporais, logs contextuais discretos e traces distribuídos ponta a ponta',
      'TraceID e SpanID: identificador global de uma requisição distribuída (TraceID) e de cada chamada ou operação filha dentro dela (SpanID)',
      'OpenTelemetry (OTel): framework aberto da CNCF (protocolo OTLP) que padroniza instrumentação agnóstica de métricas, logs e traces',
      'Four Golden Signals (SRE): os quatro indicadores essenciais de saúde de serviços — Latência, Tráfego, Erros e Saturação',
      'Percentis (p95 / p99): medidas estatísticas que capturam a latência real da cauda de requisições lentas ocultada pela média simples'
    ]
  },
  '10.1.3': {
    itemId: '10.1.3',
    highYieldSummary: [
      'Definição e escopo: a detecção de anomalias e a otimização de desempenho (*tuning*) baseiam-se em uma **baseline** estatística contínua para distinguir operação sazonal normal de degradação real de hardware ou software. Aplicando métodos estruturados (**USE** para recursos e **RED** para serviços), localizam-se gargalos reais antes de qualquer alteração controlada de parâmetros.',
      'Baseline (Linha de Base): medição contínua do comportamento normal e estatístico de desempenho de um sistema/rede em horários típicos (picos matinais, fechamento mensal, madrugada); sem baseline documentada é impossível distinguir operação normal de degradação sutil.',
      'Detecção de Anomalias vs Limiares Estáticos: limiares estáticos (ex.: CPU > `90%`) falham quando um servidor que normalmente roda a `10%` salta subitamente para `75%`; detecção de anomalias compara o comportamento atual contra desvios padrão da própria baseline histórica (sazonalidade por dia/hora).',
      'Identificação Sistemática de Gargalos (USE Method — Brendan Gregg): para cada recurso (CPU — *Central Processing Unit*, RAM — *Random Access Memory*, Disco, Rede) verificar Utilization (% ocupado), Saturation (tamanho de fila/espera — ex.: *run queue* de CPU, *disk queue length*, descartes em interface) e Errors (erros físicos/CRC — *Cyclic Redundancy Check*, OOM — *Out of Memory*, erros de E/S — *Entrada/Saída*).',
      'Métricas Enganosas Comuns (Tuning): CPU total baixa em servidor de `16` núcleos NÃO descarta gargalo se uma *thread* *single-threaded* (fluxo único de execução) saturar `1` único *core* a `100%`; RAM "`95%` usada" no Linux geralmente inclui `buffers/page cache` (cache de páginas de disco em RAM recuperável pelo kernel) saudável — não confundir com memória indisponível ou pressão de *swap* (área de paginação em disco) / *page faults* (faltas de página) graves.',
      'Ciclo Seguro de Otimização (Tuning): estabelecer hipótese com base em evidência -> alterar UM parâmetro por vez em ambiente controlado -> medir antes e depois contra a baseline -> documentar e validar ausência de efeitos colaterais.',
      'Exemplo operacional: um servidor de banco de imagens com `16` vCPUs apresenta lentidão apesar de CPU global em `18%` e `92%` de RAM ocupada. Pelo **Método USE**, `mpstat -P ALL 1` revela `1` núcleo a `100%` (*thread single-threaded*) e `vmstat 1` mostra `si/so = 0` (sem *thrashing* real de swap, pois `54 GB` estão em `buff/cache`) com fila de E/S elevada (`wa = 35%`); aplica-se um único ajuste de índice/E/S por vez e valida-se a queda de latência contra a *baseline* matinal.'
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
    keyTerms: [
      'Baseline e Sazonalidade: perfil estatístico histórico do comportamento normal por faixa horária/dia usado como referência de comparação',
      'Detecção de Anomalias: identificação de desvios significativos em relação à baseline histórica, superando limites fixos estáticos',
      'Método USE (Brendan Gregg): checagem sistemática de Utilization, Saturation e Errors para cada componente físico/virtual de infraestrutura',
      'Método RED (Serviços): avaliação de serviços orientados a requisições via Rate (taxa), Errors (falhas) e Duration (latência)',
      'Tuning Controlado: ciclo baseado em evidência que altera um único parâmetro por vez e compara resultados antes/depois contra a baseline'
    ]
  },
  '10.2.1': {
    itemId: '10.2.1',
    highYieldSummary: [
      'Definição e escopo: plataformas corporativas de monitoramento — como **Zabbix**, **Prometheus + Grafana** e **PRTG** — coletam, armazenam e visualizam métricas e eventos de infraestrutura e aplicações. Diferenciam-se pelo modelo arquitetural (agente/SNMP/proxy no Zabbix, coleta *pull* em séries temporais no Prometheus, sondas Windows no PRTG e painéis unificados no Grafana).',
      'Zabbix (Arquitetura Corporativa): Zabbix Server (motor central, avaliação de triggers, escalonamentos e escrita em BD — Banco de Dados — relacional/TimescaleDB), Zabbix Proxy (coletor distribuído opcional que coleta localmente dados em redes remotas/DMZs [*Demilitarized Zones*] com *buffer* local em caso de queda do link WAN [*Wide Area Network*]), Zabbix Web Frontend (interface) e Zabbix Agents (`TCP 10050` passivo / `TCP 10051` ativo e trapper).',
      'Conceitos-Chave Zabbix: Host (alvo monitorado), Item (métrica coletada com chave única, ex.: `system.cpu.util`), Trigger (expressão lógica sobre itens definindo estado PROBLEM/OK com funções como `avg()`, `last()`, `nodata()`), Action (envia notificação ou executa comando remoto) e Template (pacote reutilizável de itens/triggers/LLD).',
      'LLD (Low-Level Discovery) no Zabbix: descobre automaticamente interfaces de rede, sistemas de arquivos montados, serviços Windows ou tabelas SNMP criando itens, triggers e gráficos dinamicamente sem cadastro manual individual.',
      'Grafana e Prometheus: Grafana é a plataforma líder de visualização e dashboards de séries temporais que se conecta a múltiplas fontes de dados (Data Sources como Zabbix, **Prometheus** — servidor TSDB na porta `TCP 9090` que usa modelo *pull* via HTTP `/metrics` sobre *exporters* como `node_exporter` na `TCP 9100` e linguagem de consulta **PromQL** — InfluxDB, Elasticsearch e SQL [*Structured Query Language*]) sem exigir migração da ferramenta de coleta subjacente.',
      'PRTG Network Monitor: plataforma Windows popular de coleta unificada via sensores (SNMP, WMI [*Windows Management Instrumentation*], Ping, Flow/NetFlow, Packet Sniffer, HTTP [*Hypertext Transfer Protocol*]) usando Probes locais e Remote Probes distribuídas para redes segmentadas.',
      'Exemplo operacional: em uma rede hospitalar segmentada, um **Zabbix Proxy** na filial coleta SNMP/agentes locais e encaminha em lote ao Zabbix Server na matriz pela porta `TCP 10051`, mantendo histórico mesmo se a WAN cair. Paralelamente, o **Prometheus (`TCP 9090`)** faz *scrape* (*pull*) a cada `15 s` do `node_exporter` (`TCP 9100`) dos servidores Linux e alimenta painéis no **Grafana** com a consulta **PromQL** `rate(http_requests_total{status=~"5.."}[5m])` para exibir erros 5xx por segundo.'
    ],
    technicalReference: [
      'Portas Zabbix: Zabbix Agent (TCP 10050) | Zabbix Server/Proxy Trapper & Active Checks (TCP 10051) | Prometheus: TCP 9090 (pull /metrics; node_exporter TCP 9100)',
      'Zabbix Proxy: armazena dados localmente no próprio DB caso a WAN caia e envia em lote ao Server quando reconecta (evita buracos nos gráficos).'
    ],
    examTraps: [
      'O Zabbix Proxy NÃO substitui o Zabbix Server como interface web nem envia alertas sozinho — ele apenas coleta/armazena em buffer os dados da filial e encaminha ao Server central (via TCP 10051).',
      'Grafana é primariamente plataforma de VISUALIZAÇÃO e análise sobre Data Sources externos (não é um coletor SNMP nativo isolado como PRTG ou Zabbix Server).',
      'No Zabbix, `nodata()` (ex.: `nodata(/host/icmpping,5m)=1` na sintaxe atual ou `nodata(5m)=1` na sintaxe clássica) é essencial em triggers de disponibilidade porque se o agente travar e parar de mandar dados, funções simples de último valor ficam congeladas no último estado OK.'
    ],
    keyTerms: [
      'Zabbix Server vs Proxy: motor central de avaliação/triggers e interface web (Server) versus coletor remoto com buffer local via TCP 10051 (Proxy)',
      'Templates e LLD (Zabbix): pacotes reutilizáveis de itens/triggers e descoberta automática de interfaces, discos e tabelas SNMP',
      'Prometheus (TCP 9090 / Pull): banco TSDB que coleta métricas por pull HTTP em /metrics de exporters (ex.: node_exporter 9100) e consulta via PromQL',
      'Grafana (Data Sources): plataforma de visualização multi-fonte que consulta Zabbix, Prometheus, SQL e TSDBs sem substituir os coletores',
      'PRTG (Sensores / Remote Probes): monitor Windows baseado em sensores nativos (SNMP, WMI, Flow, HTTP) com sondas distribuídas'
    ]
  },
  '10.2.2': {
    itemId: '10.2.2',
    highYieldSummary: [
      'Definição e escopo: a operação prática do **SNMP** combina coleta programada (*polling*) na porta `UDP 161` e recepção assíncrona de falhas (`Trap`/`Inform`) na porta `UDP 162`, padronizando segurança via **SNMPv3 USM** `authPriv`. Garante precisão em interfaces de alta velocidade por meio de contadores de 64 bits da `IF-MIB` (RFC 2863) e tradução padronizada de arquivos **MIB**.',
      'Implementação Prática SNMP (Portas e Segurança): Manager consulta agentes na porta `UDP 161` e escuta Traps/Informs na porta `UDP 162`; em produção segura utiliza-se SNMPv3 `authPriv` definindo Security Name (identidade de usuário USM), protocolo de autenticação (SHA-256 / SHA-1 — evitar MD5) e protocolo de privacidade/criptografia (AES-128 — evitar DES).',
      'Poller vs SNMP Trap Receiver: *polling* periódico (ex.: a cada `60 s`) coleta contadores de interface (octets in/out), CPU e temperatura de forma previsível; Traps assíncronas avisam imediatamente eventos instantâneos (`linkDown`, queda de BGP [*Border Gateway Protocol*] peer, falha de fonte/disco RAID [*Redundant Array of Independent Disks*]) sem esperar o próximo ciclo de *polling*.',
      'Contadores 32-bit vs 64-bit (`ifHCInOctets`): em interfaces Gigabit (`1 Gbps`) ou `10/40/100 Gbps`, contadores SNMP de 32 bits (`ifInOctets`, máximo ~`4,29 GB`) sofrem *overflow* (*wrap-around* — reinício para zero) em poucos segundos distorcendo gráficos de banda — é obrigatório usar SNMPv2c/v3 consultando contadores de 64 bits (`ifHCInOctets` / `ifHCOutOctets`).',
      'SNMP Walk e Tradução de MIBs: ferramentas como `snmpwalk` e `snmpget` (utilitários Net-SNMP para percorrer subárvores ou consultar um OID único) validam conectividade, *community*/credenciais e mapeiam OIDs antes de criar templates; carregar os arquivos MIB corretos do fabricante traduz OIDs numéricos em nomes legíveis.',
      'Limitações e Impacto em CPU do Dispositivo: consultas `snmpwalk` frequentes em tabelas enormes (ex.: tabela de rotas BGP inteira ou milhares de entradas MAC [*Media Access Control*] / ARP [*Address Resolution Protocol*]) podem consumir CPU elevada no plano de controle de switches/roteadores.',
      'Exemplo operacional: em uma porta de `10 Gbps` trafegando a plena carga (`1,25 GB/s`), o contador `ifInOctets` de 32 bits estoura em `~3,4 segundos`, gerando leitura incorreta de banda caso se use SNMPv1. O administrador valida o contador de 64 bits com `snmpget -v3 -l authPriv -u noc_v3 -a SHA-256 -A <auth> -x AES -X <priv> 10.0.0.1 1.3.6.1.2.1.31.1.1.1.6.10` (`ifHCInOctets`) e cadastra o `EngineID` do switch no `snmptrapd` (`UDP 162`) para receber `linkDown` autenticado.'
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
    keyTerms: [
      'SNMPv3 authPriv (SHA + AES): nível máximo de segurança USM combinando integridade/autenticação por hash SHA e sigilo por criptografia AES',
      'Counter64 (ifHCInOctets): contador de 64 bits da IF-MIB (RFC 2863), disponível apenas no SNMPv2c/v3, obrigatório para links >= 1 Gbps',
      'Wrap-Around (Overflow): reinício do contador de 32 bits ao atingir ~4,29 × 10^9 bytes, gerando picos falsos ou quedas nos gráficos de banda',
      'Polling vs Trap Receiver: leitura periódica iniciada pelo NMS (UDP 161) versus escuta contínua (snmptrapd UDP 162) com EngineID para eventos',
      'snmpwalk / snmpget: utilitários CLI para testar credenciais e percorrer subárvores OID ou validar objetos específicos antes de criar templates'
    ]
  },
  '10.2.3': {
    itemId: '10.2.3',
    highYieldSummary: [
      'Definição e escopo: o **WMI** (*Windows Management Instrumentation*) implementa os padrões abertos **WBEM** (*Web-Based Enterprise Management*) e **CIM** (*Common Information Model*) no ecossistema Microsoft para consulta de inventário, serviços e métricas. Opera localmente ou remotamente via transporte legado **DCOM/RPC** ou moderno **WinRM** (*Windows Remote Management*), complementando os contadores em tempo real do **PerfMon** (*Performance Monitor*).',
      'WMI (Windows Management Instrumentation): implementação Microsoft do padrão WBEM/CIM para consultar localmente ou remotamente métricas de hardware, serviços, logs de eventos, inventário e contadores do sistema Windows via linguagem WQL (WMI Query Language — sintaxe estilo SQL [*Structured Query Language*], ex.: `SELECT * FROM Win32_LogicalDisk`).',
      'Transporte WMI Clássico (DCOM/RPC) vs WinRM (WS-Management): WMI legado opera sobre DCOM/RPC (*Distributed Component Object Model / Remote Procedure Call*) usando porta fixa `TCP 135` (*Endpoint Mapper* — mapeador de endpoints) seguida por portas altas dinâmicas RPC (`49152–65535`), dificultando atravessar firewalls; WinRM moderno (baseado no protocolo WS-Management — *Web Services for Management*) trafega sobre HTTP (`TCP 5985`) ou HTTPS (*HTTP Secure*, `TCP 5986`) de forma amigável a firewalls.',
      'PerfMon (Performance Monitor / Contadores de Desempenho): expõe objetos detalhados em tempo real no Windows (`Processor(_Total)\\% Processor Time`, `Memory\\Available MBytes`, `PhysicalDisk\\Avg. Disk sec/Read`, `Network Interface`), consumidos nativamente pelo Zabbix Agent (`perf_counter[...]` / `perf_counter_en[...]`) ou sensores PRTG.',
      'Impacto de Desempenho e Segurança do WMI Remoto: *polling* WMI/DCOM muito frequente abre múltiplas sessões RPC autenticadas no servidor Windows consumindo CPU do processo `WmiPrvSE.exe` (*WMI Provider Host*); em ambientes endurecidos recomenda-se agente local leve ou WinRM sobre HTTPS com conta de serviço sem privilégio de Domain Admin (apenas grupos `Performance Monitor Users` / `Distributed COM Users` e ACL de namespace WMI).',
      'Namespace Padrão WMI: a maioria das classes de infraestrutura do SO (*Sistema Operacional*) reside no namespace `root\\cimv2` (processos, discos, rede, serviços), enquanto Hyper-V usa `root\\virtualization\\v2` e IIS/SQL usam namespaces próprios.',
      'Exemplo operacional: para coletar espaço em disco sem liberar portas efêmeras `49152–65535` no firewall entre zonas, o administrador usa **WinRM (`TCP 5986`)** com `Get-CimInstance -CimSession srv-pacs01 -Namespace root\\cimv2 -Query "SELECT DeviceID,FreeSpace,Size FROM Win32_LogicalDisk WHERE DriveType=3"`. No mesmo host, o Zabbix Agent lê a latência de leitura pelo **PerfMon** com a chave `perf_counter_en["\\PhysicalDisk(_Total)\\Avg. Disk sec/Read"]`.'
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
    keyTerms: [
      'WMI e WQL (root\\cimv2): implementação Windows do padrão WBEM/CIM consultada por linguagem declarativa WQL no namespace padrão root\\cimv2',
      'DCOM/RPC (TCP 135 + Efêmeras): transporte legado do WMI que negocia portas dinâmicas 49152–65535, exigindo regras amplas em firewall',
      'WinRM (TCP 5985 / 5986): transporte moderno WS-Management sobre HTTP/HTTPS usado pelo PowerShell CIM, amigável a firewalls',
      'PerfMon (Contadores): infraestrutura nativa Windows de métricas de CPU, memória e disco lida diretamente por agentes ou WinRM',
      'Menor Privilégio no WMI: delegação via grupo Performance Monitor Users + leitura no namespace WMI em vez de Domain Admin'
    ]
  },
  '10.2.4': {
    itemId: '10.2.4',
    highYieldSummary: [
      'Definição e escopo: o monitoramento por **agentes** utiliza um serviço residente no sistema operacional alvo (como **Zabbix Agent** ou **Zabbix Agent 2**) para coleta local profunda de sistema operacional, logs e aplicações, complementando coletas *agentless* (SNMP, WMI, ICMP, SSH). Opera em modo **passivo** (`TCP 10050`, servidor -> agente) ou **ativo** (`TCP 10051`, agente -> servidor/proxy), suportando *buffer* em RAM e cifragem **TLS/PSK**.',
      'Agente Passivo (Passive Check): o servidor/proxy de monitoramento inicia conexão TCP contra o agente no host alvo (no Zabbix, Server/Proxy conecta na porta `TCP 10050` do Zabbix Agent), solicita a chave do item e aguarda a resposta imediata.',
      'Agente Ativo (Active Check): o agente no host monitorado inicia conexão de saída contra o servidor/proxy (no Zabbix, Agent conecta na porta `TCP 10051` do Server/Proxy), baixa a lista de itens e envia periodicamente os valores coletados — ideal para hosts atrás de NAT (*Network Address Translation* — tradução de endereços) / firewall sem portas de entrada abertas e para reduzir carga de conexões no Server.',
      'Monitoramento Agentless vs Agent-Based: *Agentless* (SNMP, ICMP [*Internet Control Message Protocol*], SSH [*Secure Shell*], WMI, HTTP) dispensa instalação nos alvos (única opção em switches, roteadores, appliances e impressoras); *Agent-Based* oferece coleta muito mais rica (leitura direta de logs locais, execução eficiente de scripts/PerfMon, *buffer* em memória quando a rede oscila e menor tráfego via Active Checks).',
      'Zabbix Agent vs Zabbix Agent 2: o Agent clássico é escrito em C (leve, multi-processo); o Agent 2 (escrito em Go) mantém conexões persistentes reduzindo *overhead* (sobrecarga de processamento/conexão) em plugins nativos (Docker, PostgreSQL, Redis, Smartmontools, systemd [*gerenciador de serviços Linux*]) e possui agendamento concorrente interno.',
      'Segurança na Comunicação dos Agentes: configurar criptografia PSK (*Pre-Shared Key* — chave pré-compartilhada) ou Certificados TLS (*Transport Layer Security*) entre Agent e Server/Proxy e restringir `Server=` / `ServerActive=` apenas aos IPs autorizados, bloqueando execução remota via `DenyKey=system.run[*]` (substituto atual do legado `EnableRemoteCommands=0`) salvo estrita necessidade.',
      'Exemplo operacional: em uma VM Linux localizada em DMZ atrás de NAT sem porta `TCP 10050` exposta, o arquivo `zabbix_agent2.conf` define `ServerActive=10.20.0.50:10051`, `Hostname=pacs-web01`, `TLSConnect=psk`, `TLSPSKIdentity=PSK_DMZ` e `DenyKey=system.run[*]`. O **Zabbix Agent 2** abre conexão de saída cifrada na porta `TCP 10051` do **Zabbix Proxy**, baixa a configuração dos itens ativos e mantém os dados em *buffer* de memória durante eventuais oscilações.'
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
    keyTerms: [
      'Agente Passivo (TCP 10050): modo síncrono em que o Server/Proxy inicia a conexão ao agente e aguarda o retorno de cada chave',
      'Agente Ativo (TCP 10051): modo em que o próprio agente abre conexão de saída para o Server/Proxy, ideal para NAT e com buffer local',
      'Agent-Based vs Agentless: coleta via daemon local (acesso profundo a logs/SO) versus coleta remota sem instalação (SNMP/ICMP/WMI/SSH)',
      'Zabbix Agent 2: agente escrito em Go com agendamento concorrente e plugins persistentes para bancos, containers e systemd',
      'TLS / PSK e DenyKey: cifragem autenticada entre agente e servidor e bloqueio granular de comandos remotos (DenyKey=system.run[*])'
    ]
  },
  '10.2.5': {
    itemId: '10.2.5',
    highYieldSummary: [
      'Definição e escopo: o **Syslog** (RFC 3164 BSD legado e RFC 5424 estruturado) é o padrão universal de camada de aplicação para envio centralizado de mensagens de eventos de ativos de rede, firewalls e servidores Unix/Linux para coletores (`rsyslog`, `syslog-ng`) ou **SIEM** (*Security Information and Event Management*). Codifica origem (**Facility**) e gravidade (**Severity** de `0` a `7`) no campo **PRI**, operando em `UDP/TCP 514` ou `TCP 6514` sobre **TLS** (RFC 5425).',
      'Protocolo Syslog (RFC 3164 BSD legado e RFC 5424 moderno): BSD (*Berkeley Software Distribution*) e RFC 5424 definem formato padrão universal para envio centralizado de mensagens de eventos de switches, roteadores, firewalls, servidores Linux (`rsyslog`/`syslog-ng`) e sistemas de storage para um servidor coletor/SIEM.',
      'Portas e Confiabilidade de Transporte: `UDP 514` (padrão clássico sem confirmação — rápido e leve, porém pode perder logs em congestionamento ou reinício do coletor), `TCP 514/601` (entrega confiável orientada à conexão) e Syslog sobre TLS na porta `TCP 6514` (RFC 5425 — garante confidencialidade e integridade contra adulteração em trânsito).',
      'Estrutura da Prioridade (`PRI = Facility × 8 + Severity`): `Facility` identifica o subsistema gerador (`0`=kernel, `1`=user, `3`=daemon, `4/10`=auth/security, `16–23`=`local0` a `local7` muito usados por firewalls/switches); `Severity` define a gravidade de `0` a `7` (ordem decrescente de criticidade).',
      'Os 8 Níveis de Severidade Syslog (`0` a `7` — memorizar para prova!): `0` Emergency (sistema inutilizável), `1` Alert (ação imediata), `2` Critical, `3` Error, `4` Warning, `5` Notice, `6` Informational, `7` Debug (maior volume — evitar em produção contínua).',
      'Centralização e Retenção para Auditoria/Troubleshooting: armazenar logs apenas localmente no dispositivo permite que invasores apaguem rastros ou se percam na reinicialização (switches sem disco persistente); envio remoto com relógio sincronizado via **NTP** (*Network Time Protocol*) preserva evidências e permite correlação.',
      'Exemplo operacional: um firewall corporativo envia eventos na *facility* `local4` (`20`) com severidade `4 Warning`, produzindo o cabeçalho RFC 5424 `<164>1 2026-11-26T14:12:00Z fw-borda01 ...` (pois `PRI = 20 × 8 + 4 = 164`). O coletor `rsyslog` central recebe os logs exclusivamente via **TLS na porta `TCP 6514`** (`gtls`) com validação de certificado e todos os equipamentos sincronizados em UTC via **NTP**.'
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
    keyTerms: [
      'Syslog RFC 3164 vs RFC 5424: formato BSD legado sem fuso/estrutura rígida versus padrão moderno com timestamp ISO-8601 e campos estruturados',
      'UDP/TCP 514 vs TLS 6514: transporte clássico sem garantia (UDP 514) ou confiável em texto claro (TCP 514/601) versus Syslog cifrado (RFC 5425)',
      'PRI (Facility × 8 + Severity): cabeçalho numérico que combina código do subsistema gerador (0–23, ex.: local0–local7) e criticidade (0–7)',
      'Severidades 0–7: escala decrescente de gravidade — 0 Emergency (máxima) até 7 Debug (mínima/verbosa)',
      'Centralização e NTP: envio remoto para SIEM/coletor imutável com relógios sincronizados para correlação de incidentes'
    ]
  },
  '10.2.6': {
    itemId: '10.2.6',
    highYieldSummary: [
      'Definição e escopo: as métricas de infraestrutura são séries temporais numéricas armazenadas em **TSDBs** (*Time Series Databases* — como Prometheus, TimescaleDB e InfluxDB) para acompanhar continuamente CPU, memória, disco e rede. Em conjunto com protocolos de visibilidade de tráfego (**NetFlow**, **IPFIX** e **sFlow**), permitem correlacionar saturação de recursos computacionais com o perfil real dos fluxos na rede.',
      'Séries Temporais (Time Series) e Retenção: métricas consistem em tuplas `(nome_métrica, labels/tags, timestamp, valor numérico)` armazenadas em TSDBs (TimescaleDB, Prometheus, InfluxDB) usando compressão eficiente e políticas de retenção/*rollup* (consolidação histórica: dados detalhados a cada `1 m` por `30 dias`; tendências agregadas horárias por `1 ano`).',
      'Métricas Essenciais de CPU: distinguir User Space (`%user` — código de aplicação), Kernel/System (`%sys` — chamadas de sistema), I/O Wait (`%iowait` — CPU ociosa esperando resposta de disco lento!), Steal Time (`%st` no Linux — hipervisor roubando CPU para outra VM por contenção física) e Load Average (média de processos rodando ou aguardando CPU/E/S não-interruptível nos últimos `1`, `5` e `15` minutos).',
      'Métricas Essenciais de Memória: diferenciar Memória Física Livre vs Memória Disponível (`MemAvailable` no Linux inclui caches recuperáveis), Page Cache/Buffers, Swap In/Out ativo (indica *thrashing* — troca contínua entre RAM e disco degradando o sistema) e eventos OOM (*Out of Memory*).',
      'Métricas Essenciais de Disco e Storage: IOPS (*Input/Output Operations Per Second* — operações/s), Throughput (vazão em MB/s), Latência de E/S (`await` no Linux / `Avg. Disk sec/Read` no Windows — ideal SSD [*Solid State Drive*] < `1–5 ms`, HDD [*Hard Disk Drive*] < `15–20 ms`) e Tamanho da Fila (`avgqu-sz` / `Current Disk Queue Length`).',
      'Métricas Essenciais de Rede e Telemetria de Fluxo: Utilização de Banda (`bps` Rx/Tx vs capacidade do link), Taxa de Pacotes (`pps`), Erros de Interface (CRC, FCS [*Frame Check Sequence*], *frame errors* -> indicam cabo/SFP [*Small Form-factor Pluggable*] ruim ou *duplex mismatch*) e Descarte de Pacotes (`Rx/Tx drops` -> saturação de *ring buffer*); complementadas por **NetFlow** (`v5/v9`, `UDP 2055`) e **IPFIX** (*Internet Protocol Flow Information Export* — RFC 7011, padrão aberto IETF na porta `4739`), que exportam registros agregados de fluxos L3/L4, e **sFlow** (RFC 3176, `UDP 6343`), que usa amostragem estatística em hardware de cabeçalhos L2–L7.',
      'Exemplo operacional: em um nó Linux de PACS apresentando lentidão, a consulta PromQL `avg by (instance) (rate(node_cpu_seconds_total{mode="iowait"}[5m]))` marca `0,42` (`42%` de *iowait*) com `%steal = 0,01` e `await = 28 ms` no volume NVMe, apontando gargalo de armazenamento e não de CPU do hipervisor. Na rede, o coletor **IPFIX (`UDP 4739`)** / **NetFlow (`UDP 2055`)** identifica que `78%` do tráfego da porta vem de transferência SMB (`TCP 445`), enquanto contadores **sFlow (`UDP 6343`)** e de interface confirmam `0` erros CRC.'
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
    keyTerms: [
      'TSDB e Rollup: banco de séries temporais indexadas por labels e timestamp que agrega amostras antigas para economizar espaço mantendo histórico',
      'CPU (%iowait vs %steal): espera ociosa de CPU por E/S lenta de disco (%iowait) versus tempo subtraído pelo hipervisor por contenção física (%steal)',
      'MemAvailable vs Swap Thrashing: memória realmente alocável somando caches liberáveis versus paginação intensa em disco que paralisa a aplicação',
      'IOPS / Latência (await) / Fila: taxa de operações de disco, tempo médio de resposta (ms) e profundidade de requisições enfileiradas',
      'NetFlow / IPFIX vs sFlow: exportação agregada de fluxos L3/L4 (NetFlow UDP 2055; IPFIX RFC 7011 porta 4739) versus amostragem de pacotes L2–L7 (sFlow UDP 6343)'
    ]
  },
  '10.2.7': {
    itemId: '10.2.7',
    highYieldSummary: [
      'Definição e escopo: a gestão de **alertas** converte desvios em séries temporais em notificações operacionais por meio de *triggers* (regras avaliadas pelo motor de monitoramento), limiares dinâmicos ou estáticos e políticas de escalonamento. Seu objetivo é garantir detecção rápida de incidentes reais evitando *flapping* e *alert fatigue* por meio de **histerese**, dependências topológicas e janelas de manutenção.',
      'Triggers e Limiares (Thresholds): regras avaliadas continuamente que disparam alertas quando uma condição é violada; recomenda-se usar múltiplos níveis de severidade (`Warning` para atenção preventiva vs `High`/`Disaster` para parada iminente) e janelas temporais (`avg(5m) > 85%` em vez de leitura instantânea única `last()`).',
      'Prevenção de Flapping (Histerese): evita que uma métrica oscilando em torno de `80%` dispare dezenas de alertas abre-e-fecha (*flapping* — alternância rápida entre OK e PROBLEM) por hora; na histerese do Zabbix define-se uma expressão de disparo (ex.: temperatura `>= 45 °C`) e outra distinta de recuperação (temperatura `<= 40 °C`).',
      'Dependências entre Triggers (Supressão de Tempestade de Alertas): vincular *triggers* de servidores/serviços por trás de um roteador/switch core à *trigger* de conectividade desse equipamento raiz — se o link da filial cair, apenas `1` alerta do roteador é emitido suprimindo `50` falsos alertas dos hosts atrás dele.',
      'Escalonamento (Escalation) e Roteamento de Alertas: se um incidente crítico não for reconhecido (`ACK` — *Acknowledgment*) em X minutos pela equipe N1 (*Nível 1*), a ação escala automaticamente para N2/Coordenação ou muda o canal (e-mail/chat -> SMS [*Short Message Service*] / chamada telefônica de plantão), respeitando janelas de manutenção programada.',
      'Combate à Fadiga de Alertas (Alert Fatigue): alertas acionáveis devem ter dono claro e procedimento de resposta; excesso de alertas informativos ou falsos positivos leva a equipe a ignorar incidentes reais críticos.',
      'Exemplo operacional: para monitorar a temperatura do datacenter sem gerar *flapping* no Zabbix, configura-se a expressão de problema `avg(/dc-sensor01/sensor.temp,5m)>=45` e a expressão de recuperação `avg(/dc-sensor01/sensor.temp,5m)<=40` (**histerese** de `5 °C`). As *triggers* das `40` VMs do rack dependem da alcançabilidade do switch ToR (*Top-of-Rack*); sem `ACK` em `10 min`, a **Action** escala do canal de chat N1 para o plantonista N2 respeitando janelas de manutenção.'
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
    keyTerms: [
      'Triggers e Thresholds: expressões lógicas sobre janelas temporais (ex.: avg 5m) associadas a níveis graduais de severidade',
      'Histerese (Anti-Flapping): separação entre limiar de abertura de problema e limiar mais folgado de recuperação para evitar oscilações',
      'Dependência Topológica: vinculação de triggers filhas ao ativo de upstream para suprimir tempestades de alertas em quedas de link/switch',
      'Escalonamento e Maintenance: progressão automática entre níveis N1/N2 após timeout sem ACK e supressão programada durante manutenções',
      'Alert Fatigue (Fadiga de Alertas): dessensibilização operacional causada por excesso de falsos positivos ou notificações não acionáveis'
    ]
  },
  '10.2.8': {
    itemId: '10.2.8',
    highYieldSummary: [
      'Definição e escopo: a medição de **disponibilidade** quantifica a continuidade operacional de serviços usando a hierarquia **SLI** (*Service Level Indicator*), **SLO** (*Service Level Objective*) e **SLA** (*Service Level Agreement*), além dos indicadores **MTBF** e **MTTR**. Combina testes de alcançabilidade **ICMP**, **monitoramento sintético** (*Synthetic Checks*) de camada de aplicação e modelos matemáticos de confiabilidade em série e paralelo.',
      'Disponibilidade (Uptime), SLI, SLO e SLA: expressa o percentual de tempo operacional (`Uptime % = (Tempo Total - Downtime) / Tempo Total × 100`); no modelo SRE, o **SLI** é a métrica medida (ex.: `%` de respostas HTTP `2xx` < `300 ms`), o **SLO** é a meta interna que define o *Error Budget* (orçamento de erro tolerado, ex.: `99,95%`) e o **SLA** é o contrato formal externo com penalidades (geralmente menos estrito que o SLO, ex.: `99,9%`).',
      'Tabela Clássica de Níveis de Disponibilidade ("Os Noves"): `99%` ("dois noves" = `3,65 dias/ano` ou `7,2 h` em mês de `30` dias), `99,9%` ("três noves" = `8,76 horas/ano` ou `43,2 min` em mês de `30` dias / `~43,8 min` média anual), `99,95%` (`~4,38 h/ano`), `99,99%` ("quatro noves" = `52,56 minutos/ano` ou `4,32–4,38 min/mês`) e `99,999%` ("cinco noves" = `5,26 minutos/ano`).',
      'Monitoramento ICMP vs Monitoramento Sintético (Synthetic Checks): ICMP Ping testa apenas alcançabilidade L3 (um servidor web travado ou banco fora continua respondendo ping!); *Synthetic Checks* simulam a jornada real do usuário ponta a ponta (login HTTPS, consulta API JSON [*JavaScript Object Notation*], verificação de certificado TLS e conteúdo da página).',
      'Disponibilidade em Série vs Paralelo: componentes dependentes em SÉRIE multiplicam disponibilidades (`A_total = A1 × A2`, sempre MENOR que o elo mais fraco); componentes redundantes em PARALELO somam resiliência (`A_total = 1 - (1 - A1) × (1 - A2)`).',
      'MTBF e MTTR na Disponibilidade: `Disponibilidade = MTBF / (MTBF + MTTR)` — onde MTBF (*Mean Time Between Failures*) é o tempo médio entre falhas e MTTR (*Mean Time To Repair/Recover*) é o tempo médio de reparo; reduzir o MTTR via detecção rápida e *failover* automático eleva a disponibilidade prática tão ou mais efetivamente quanto hardware caro.',
      'Exemplo operacional: um portal clínico possui **SLA** contratual de `99,9%` (`43,2 min` máximos em mês de `30` dias) e **SLO** interno de `99,95%` (*error budget* de `21,6 min/mês`), medido pelo **SLI** de um **Synthetic Check** HTTPS a cada `60 s` (autenticação + busca de paciente, não apenas ICMP). Com link único (`99,9%`), firewall único (`99,9%`) e servidor (`99,9%`) em série, a disponibilidade cai para `0,999³ ≈ 99,7%` (violando o SLA); duplicando link e firewall em paralelo (`99,9999%` cada par), a cadeia sobe para `~99,899%`, exigindo redundância também no servidor ou redução do **MTTR**.'
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
    keyTerms: [
      'SLI / SLO / SLA: indicador medido (SLI), meta interna com error budget (SLO) e acordo contratual formal com penalidades (SLA)',
      'Regra dos "Noves" (Uptime): tabela de downtime máximo — 99,9% (8,76 h/ano), 99,99% (52,56 min/ano) e 99,999% (5,26 min/ano)',
      'MTBF vs MTTR: tempo médio entre falhas e tempo médio de recuperação que determinam a disponibilidade [MTBF / (MTBF + MTTR)]',
      'ICMP vs Synthetic Check: verificação de alcançabilidade L3 (ping) versus simulação completa L7 (TLS, login, API e conteúdo)',
      'Série vs Paralelo: multiplicação das disponibilidades em cadeia dependente (reduz uptime) versus redundância paralela [1 - Π(1 - Ai)]'
    ]
  },
  '10.2.9': {
    itemId: '10.2.9',
    highYieldSummary: [
      'Definição e escopo: a gestão de capacidade (**Capacity Planning**) analisa séries históricas de médio e longo prazo para projetar crescimento e evitar que recursos computacionais e de rede atinjam o joelho de saturação (*knee of the curve*). Combina previsão estatística, análise por percentil 95 (`p95`), *right-sizing* de máquinas virtuais e validação contínua de folga **N+1**.',
      'Gestão de Capacidade (Capacity Planning): processo contínuo de coletar séries históricas longas (meses/anos), projetar tendências de crescimento (regressão linear/sazonalidade) e dimensionar antecipadamente CPU, memória, IOPS/storage, portas de switch, licenças e links WAN antes que ocorra saturação.',
      'Análise de Tendência (Trend Prediction): diferencia picos pontuais sazonais (fechamento de folha, campanhas) de crescimento estrutural sustentado; ferramentas como Zabbix possuem funções nativas de previsão (`forecast()`, `timeleft()` — projeção estatística de valor futuro e tempo restante até um limiar) para estimar "em quantos dias o datastore atingirá `95%`".',
      'Identificação do Joelho de Saturação ("Knee of the Curve"): em sistemas de fila (CPU, discos, links), a latência NÃO cresce linearmente — permanece estável até cerca de `70–80%` de utilização e então dispara exponencialmente até o colapso; por isso o planejamento de capacidade define limites seguros de trabalho (*headroom* — folga operacional de reserva — de `20–30%`).',
      'Right-Sizing (Dimensionamento Otimizado): identifica tanto gargalos iminentes quanto superdimensionamento crônico ("VMs zumbis" alocadas com `16` vCPUs [*Virtual CPUs*] usando apenas `3%`), otimizando custos de hardware, nuvem e licenciamento por núcleo.',
      'Simulação de Cenários (`N-1` e Crescimento Futuro): validar continuamente se, além de suportar o crescimento de negócio projetado para `6–12` meses, os clusters em **HA** (*High Availability*) ainda sobrevivem à falha simultânea de `1` nó/link (capacidade **N+1** sem atingir o ponto de saturação).',
      'Exemplo operacional: em um cluster de `2` hosts em **HA**, a série trimestral em horário comercial (`p95`) mostra RAM média por nó subindo de `38%` para `48%`, e a função `timeleft(/storage/vfs.fs.size[/pacs,pused],30d,,95)` estima `42 dias` até `95%` de uso no pool *thin-provisioned*. Como `2 × 48% = 96%` já romperia o joelho de `80%` durante uma falha `N-1`, planeja-se a compra antecipada de um terceiro host e expansão de discos antes da explosão exponencial de latência.'
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
    keyTerms: [
      'Capacity Planning: dimensionamento preventivo baseado em séries históricas de longo prazo para agir antes da saturação de recursos',
      'Trend Prediction (forecast / timeleft): regressão e projeção estatística sobre histórico para estimar consumo futuro ou prazo até esgotamento',
      'Knee of the Curve (Joelho de Saturação): limiar (~70–80% na teoria de filas) a partir do qual a latência cresce exponencialmente',
      'Right-Sizing: ajuste fino de vCPU, RAM e storage eliminando subdimensionamento crítico e desperdício em VMs superdimensionadas',
      'Headroom N+1: margem operacional reservada (<= 40–45% em cluster de 2 nós) garantindo absorção integral da carga na falha de 1 host'
    ]
  }
};
