import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_15: Record<string, StudyGuide> = {
  '15.1.1': {
    itemId: '15.1.1',
    highYieldSummary: [
      'Classificação Uptime Institute (Tiers I a IV): **Tier I** (Capacidade Básica: caminho único de energia/refrigeração, sem redundância; ~99,671% — exige parada total para manutenção), **Tier II** (Componentes Redundantes: caminho único de distribuição com componentes N+1 como UPS/geradores redundantes; ~99,741%), **Tier III** (Simultaneamente Sustentável / Concurrently Maintainable: múltiplos caminhos de energia e refrigeração com 1 ativo e 1 passivo, permitindo manutenção programada em qualquer componente SEM derrubar TI; ~99,982% = 1,6h/ano) e **Tier IV** (Tolerante a Falhas / Fault Tolerant: múltiplos caminhos independentes ativos **2N ou 2(N+1)** com compartimentação física suportando falha não planejada automática de qualquer equipamento/caminho sem parada; ~99,995% = 26 min/ano).',
      'Infraestrutura Elétrica de Missão Crítica: dupla entrada de concessionária (subestações independentes), Quadro de Transferência Automática (**QTA / ATS**), **Geradores Diesel** dimensionados com autonomia de combustível e reabastecimento, **UPS (No-breaks) Online Dupla Conversão** (mantêm carga nas baterias durante os segundos até o gerador assumir e filtram picos/ruídos continuamente), bancos de baterias e **PDUs duplos (A e B)** alimentando fontes redundantes nos racks.',
      'Climatização de Precisão (CRAC / CRAH) e Eficiência (**PUE**): sistemas de climatização de precisão mantêm temperatura/umidade controladas (faixa ASHRAE típica ~18–27°C sem condensação nem descarga eletrostática), utilizando contenção de **Corredor Quente / Corredor Frio** (racks frente-a-frente / fundo-a-fundo evitando mistura de ar); **PUE (Power Usage Effectiveness)** = `Energia Total do Data Center / Energia dos Equipamentos de TI` (ideal tende a `1,0`; típicos eficientes entre `1,2` e `1,5`).',
      'Segurança Física e Detecção Precoce de Incêndio: controle de acesso biométrico/crachá com eclusas (mantrap), CFTV, piso elevado/cabeamento organizado, detecção precoce por aspiração (**VESDA**) e supressão por **gás limpo** (ex.: FM-200 / Novec 1230 — não conduz eletricidade nem destrói eletrônicos como sprinklers de água comum).',
      'Regra de Ouro de Topologia em Racks (A+B): servidores, storages e switches de missão crítica devem ter **duas fontes físicas** conectadas obrigatoriamente em barramentos **independentes** (Fonte 1 -> PDU A -> UPS A; Fonte 2 -> PDU B -> UPS B), jamais ligando ambas as fontes na mesma régua/no-break.'
    ],
    technicalReference: [
      'Uptime Tiers: Tier I (sem redundância, 99,67%) | Tier II (componentes N+1, 1 caminho, 99,74%) | Tier III (Concurrently Maintainable, 99,982%) | Tier IV (Fault Tolerant 2N, 99,995%)',
      'PUE = Energia Total do DC / Energia de TI (sempre >= 1,0; quanto mais próximo de 1,0 mais eficiente energeticamente).'
    ],
    examTraps: [
      'Diferença clássica **Tier III vs Tier IV**: Tier III permite **manutenção planejada** sem parada (Concurrently Maintainable), mas uma falha súbita não planejada num caminho único ativo ainda pode afetar equipamentos; **Tier IV** resiste inclusive a **falhas súbitas não planejadas** sem queda (Fault Tolerant)!',
      'Ligar as duas fontes redundantes de um servidor na mesma régua PDU/mesmo circuito de UPS anula toda a redundância elétrica e cria um **SPOF (Ponto Único de Falha)**.',
      'Em cálculo de PUE, valores MENORES (próximos de `1,0`) significam MAIOR eficiência (ex.: PUE 1,3 é mais eficiente que PUE 2,1 — nunca existe PUE menor que 1,0!).'
    ],
    keyTerms: ['Tiers I–IV (Uptime Institute)', 'UPS Dupla Conversão & Gerador', 'Corredor Frio/Quente & PUE', 'Supressão por Gás Limpo', 'Circuitos A+B (Sem SPOF)']
  },
  '15.1.2': {
    itemId: '15.1.2',
    highYieldSummary: [
      'Modelos de Redundância (N, N+1, 2N, 2N+1): **N** = quantidade mínima exata para operar sem reserva (zero tolerância a falhas); **N+1** = mínimo necessário mais 1 componente reserva compartilhado (suporta 1 falha; ex.: 3 equipamentos operando carga de 2); **2N** = duplicação completa totalmente independente (A e B espelhados — cada lado suporta 100% da carga sozinho); **2N+1** = arquitetura 2N com +1 componente extra sobressalente garantindo redundância mesmo durante manutenção de um lado.',
      'SPOF (Single Point of Failure — Ponto Único de Falha): qualquer elemento físico, lógico ou humano cuja falha isolada derruba todo o sistema (ex.: único switch core, única fibra de entrada pela mesma vala/duto, única fonte DNS, único administrador detentor de senhas, ou duas operadoras entrando pelo mesmo duto físico compartilhado).',
      'Redundância vs Tolerância a Falhas: **Redundância (Alta Disponibilidade / HA)** garante recuperação rápida com mínima interrupção (failover em segundos/minutos — ex.: cluster HA reiniciando VM); **Tolerância a Falhas (Fault Tolerance)** garante **ZERO interrupção e ZERO perda de estado** mesmo diante da falha súbita do componente (ex.: execução lockstep / VMware FT / hardware espelhado ativo instantâneo).',
      'Disponibilidade Percentual e Cálculo em Série vs Paralelo: componentes em **SÉRIE** reduzem disponibilidade (`A_total = A1 × A2`); adicionar caminhos redundantes em **PARALELO** aumenta disponibilidade exponencialmente (`A_total = 1 - (1 - A1) × (1 - A2)` — dois links de 99% em paralelo ativo atingem 99,99%!).',
      'Diversidade Física de Caminhos (Path Diversity): contratar dois links de internet/MPLS de operadoras distintas que chegam pela **mesma tubulação/poste ou mesmo switch de entrada** mantém um SPOF físico oculto — é essencial exigir última milha geograficamente diversa.'
    ],
    technicalReference: [
      'Modelos: `N` (sem reserva) | `N+1` (1 reserva para o grupo) | `2N` (duplicação total espelhada A+B) | `2N+1` (duplicado + reserva adicional)',
      'Série (`A1 × A2`: piora) vs Paralelo (`1 - (1-A1)(1-A2)`: eleva disponibilidade) | Eliminação sistemática de SPOFs físicos e lógicos.'
    ],
    examTraps: [
      'Dois links de operadoras diferentes passando pelo mesmo conduíte de entrada na rua ou ligados no mesmo switch de borda continuam sendo um **SPOF físico**.',
      'Configurar `2N` operando em ativo-ativo acima de 50% de capacidade em cada lado transforma o ambiente em falso `2N` — se um lado cair, o outro sobrecarrega e derruba tudo.',
      'Tolerância a Falhas (zero downtime/perda de transações) é muito mais cara e exigente que Alta Disponibilidade convencional (que tolera breve tempo de failover/reinício).'
    ],
    keyTerms: ['N / N+1 / 2N / 2N+1', 'SPOF (Ponto Único de Falha)', 'Tolerância a Falhas vs HA', 'Série vs Paralelo', 'Diversidade Física']
  },
  '15.2.1': {
    itemId: '15.2.1',
    highYieldSummary: [
      'Conceito e Tipos de Cluster: agrupamento de dois ou mais servidores (nós) interligados para entregar serviço unificado — **Cluster de Alta Disponibilidade (Failover Cluster)** mantém continuidade assumindo workloads caso um nó caia (Windows Failover Clustering, Pacemaker/Corosync, VMware HA); **Cluster de Balanceamento de Carga (NLB/Web)** distribui requisições paralelas; **Cluster de Banco / Compartilhado** (Always On AG, RAC).',
      'Heartbeat (Batimento Cardíaco): canal dedicado e redundante (idealmente em VLAN isolada, não roteada, além de checagem secundária via storage/rede de produção) pelo qual os nós trocam sinais periódicos rápidos para detectar falhas em segundos sem confundir sobrecarga momentânea de rede pública com queda de nó.',
      'Quórum (Voto de Maioria): mecanismo matemático que define quantos votos (nós + Witness) precisam estar presentes e comunicantes para o cluster permanecer online — exige **maioria simples (`> 50%`)**, motivo pelo qual clusters costumam ter **número ÍMPAR de votos** (ex.: 3 nós, ou 2 nós + 1 Witness).',
      'Split-Brain ("Cérebro Dividido") e STONITH / Fencing: se o cabo/rede de heartbeat romper enquanto os dois nós continuam vivos e isolados, ambos podem tentar assumir o IP virtual e montar a mesma LUN simultaneamente, **corrompendo gravemente o banco/storage**! Previne-se com **Quórum + Witness** (apenas a partição com maioria sobrevive; a minoria se desliga) e **Fencing / STONITH** ("Shoot The Other Node In The Head" via IPMI/iDRAC/PDU ou reserva SCSI-3 persistente).',
      'Tipos de Witness (Testemunha em Clusters de 2 Nós): **Disk/LUN Witness** (disco pequeno compartilhado na SAN), **File Share Witness** (compartilhamento SMB em 3º servidor neutro) ou **Cloud Witness** (blob storage em nuvem — ideal para clusters multi-site sem 3º datacenter).'
    ],
    technicalReference: [
      'Regra do Quórum: Maioria estrita `(Total de Votos / 2) + 1` -> Cluster de 2 nós SEMPRE precisa de **1 Witness** (total = 3 votos)',
      'Prevenção de Split-Brain: Quórum (maioria vence) + STONITH/Fencing (garante desligamento real do nó isolado via iLO/iDRAC/SCSI-3).'
    ],
    examTraps: [
      'Um cluster de **2 nós SEM Witness** NÃO sobrevive à queda isolada de um nó em configurações padrão de maioria — 1 de 2 votos dá exatamente 50% (não é maioria > 50%!), derrubando o cluster inteiro ou expondo a **split-brain**.',
      'Colocar a testemunha (File Share Witness) hospedada como VM DENTRO de um dos dois nós do próprio cluster que ela monitora cria dependência circular fatal se aquele nó falhar.',
      'Se a rede de produção e a rede de heartbeat compartilharem a mesma interface física única sem redundância, qualquer pico de tráfego/backup pode disparar falsos failovers e split-brain.'
    ],
    keyTerms: ['Cluster Failover', 'Quórum (Maioria >50%)', 'Split-Brain', 'Witness (Disk/File/Cloud)', 'Heartbeat & Fencing (STONITH)']
  },
  '15.2.2': {
    itemId: '15.2.2',
    highYieldSummary: [
      'Redundância de Links e Rede (Camadas 1, 2 e 3): links duplos de operadoras distintas com **BGP** (ASN próprio ou failover SD-WAN/SLA IP tracking); em switches de acesso/distribuição, agregação **LACP (IEEE 802.3ad)** com **MLAG / VPC** entre dois switches distintos (evitando SPOF de um único chassi); na camada de gateway padrão, **VRRP/HSRP**; e eliminação de loops via RSTP/STP.',
      'Redundância de Energia (Infraestrutura A+B): dupla entrada elétrica (concessionária + gerador), UPS N+1 ou 2N, PDUs A e B independentes no rack e servidores/switches com fontes duplas hot-swap conectadas em circuitos distintos.',
      'Redundância de Storage e Caminhos (Multipath + Dual Controllers): storages corporativos utilizam **duas controladoras ativo-ativo** com cache espelhado por bateria/NVRAM, **RAID (10/5/6 + Hot Spare)**, switches SAN fabric A e fabric B isolados, duas placas HBA/NICs iSCSI por servidor e **Multipath (MPIO / NMP)** alternando caminhos em milissegundos se uma fibra/switch/controladora cair.',
      'Redundância de Serviços Base de Infraestrutura (AD, DNS, DHCP, NTP, Firewalls): manter no mínimo 2 Domain Controllers/DNS em hosts físicos (e preferencialmente racks/sites) distintos, DHCP em modo Failover (Hot Standby ou Load Balance), e par de firewalls NGFW em cluster HA sincronizado.',
      'Anti-Afinidade em Virtualização (DRS Anti-Affinity Rules): nunca permitir que as duas VMs redundantes de um mesmo serviço (ex.: DC01 e DC02, nó 1 e nó 2 do cluster SQL, ADC01 e ADC02) rodem simultaneamente no mesmo host ESXi/Hyper-V físico — usar regras obrigatórias de **Separação (Separate Virtual Machines)**!'
    ],
    technicalReference: [
      'Camadas sem SPOF: Energia (A+B) -> Rede (2 operadoras + LACP/MLAG + VRRP + NGFW HA) -> Storage (2 fabrics + 2 controladoras + MPIO + RAID) -> Compute (HA + Anti-Afinidade)',
      'Hot Spare em RAID: disco reserva já instalado no storage que inicia reconstrução automática imediata quando um disco do pool falha.'
    ],
    examTraps: [
      'Virtualizar dois servidores redundantes (ex.: AD Primário e Secundário, ou Nó A e Nó B do balanceador) e deixá-los rodar juntos no MESMO host físico ESXi sem regra de **Anti-Afinidade** transforma um par redundante em um único SPOF de hardware!',
      'Configurar LACP de 2 cabos ligados no **MESMO switch único** protege contra quebra de cabo/porta, mas NÃO protege contra falha do switch — exige **MLAG / vPC / Stack** entre dois switches.',
      'Redundância sem monitoramento contínuo da perna reserva (ex.: bateria do UPS B morta ou link secundário expirado sem ninguém perceber) falha justamente no dia em que a perna principal cai.'
    ],
    keyTerms: ['Redundância de Link (BGP/LACP/MLAG)', 'Redundância de Energia (A+B)', 'Controladoras Duplas & Multipath', 'Regra de Anti-Afinidade', 'Hot Spare']
  },
  '15.2.3': {
    itemId: '15.2.3',
    highYieldSummary: [
      'Failover Automático vs Failover Manual: **Failover Automático** detecta falha via heartbeat/health checks e transfere IP virtual/serviço/VM em segundos sem ação humana (minimiza RTO em alta disponibilidade local dentro de um site); **Failover Manual** exige decisão e acionamento explícito humano — preferido em **Disaster Recovery entre sites distantes** para evitar falsos positivos catastróficos por oscilação breve de WAN ou risco de split-brain.',
      'Stateful vs Stateless Failover: no failover **Stateful** (firewalls HA, balanceadores, bancos síncronos), tabelas de sessões TCP, traduções NAT e transações confirmadas são sincronizadas previamente em tempo real, preservando conexões sem derrubar usuários; no failover **Stateless**, o serviço sobe no secundário mas sessões em curso precisam reconectar.',
      'Mecanismos de Chaveamento (IP/DNS/Storage): dentro da mesma sub-rede L2 usa-se IP flutuante (VIP/GARP/VRRP); entre data centers distintos usa-se **atualização dinâmica de DNS (GSLB com TTL baixo)** ou **anúncio BGP** para desviar o tráfego de entrada.',
      'Failback (Retorno Planejado ao Ambiente Principal): processo reverso controlado executado após reparar integralmente o nó/site original e confirmar sincronia reversa de dados/logs — deve ter opção **manual (no-preempt ou delayed)** em bancos/sites DR para impedir "ping-pong" (flapping contínuo) se o ambiente principal ainda estiver instável.',
      'Preempt (Preempção) — Quando Usar e Evitar: em roteadores VRRP pode-se usar preempção com atraso para devolver carga ao principal após estabilizar; já em clusters de banco de dados pesados e DR multi-site, **desabilitar auto-failback** evita segunda janela de parada desnecessária durante horário comercial.'
    ],
    technicalReference: [
      'Failover Automático: ideal em HA intra-site (baixa latência, quórum sólido, RTO mínimo) | Failover Manual: recomendado em DR multi-site (evita split-brain em queda breve de WAN)',
      'Prevenção de Ping-Pong: Desativar auto-failback imediato em bancos/DR (executar failback agendado em janela controlada após resincronização).'
    ],
    examTraps: [
      'Ativar failover automático de site inteiro (DR) baseado apenas na falha de ping WAN sem quórum externo em 3º site causa **split-brain geográfico** se apenas o link entre os dois DCs cair enquanto ambos continuam atendendo usuários!',
      'Auto-failback agressivo assim que o servidor primário volta do boot gera duas interrupções em sequência e pode perder dados gravados no secundário se a replicação reversa ainda não tiver concluído.',
      'Depender de failover por alteração de registro DNS com TTL configurado em `86400 segundos (24h)` mantém grande parte dos clientes apontando para o site caído por horas mesmo após a troca!'
    ],
    keyTerms: ['Failover Automático vs Manual', 'Failback Planejado', 'Stateful vs Stateless Failover', 'Preempção (Flapping)', 'GSLB / BGP / GARP']
  },
  '15.2.4': {
    itemId: '15.2.4',
    highYieldSummary: [
      'Arquitetura de Alta Disponibilidade (HA): conjunto de práticas que combinam redundância de hardware, detecção automática de falhas e failover rápido visando atingir SLAs elevados (99,9%, 99,99% ou 99,999%) eliminando pontos únicos de falha em todas as camadas (rede, energia, compute, storage e aplicação).',
      'Escala de Disponibilidade ("Os Noves" em Prova): **99,9% (3 noves)** = máximo ~8,76 horas/ano (~43,8 min/mês); **99,99% (4 noves)** = máximo ~52,6 minutos/ano (~4,38 min/mês); **99,999% (5 noves)** = máximo ~5,26 minutos/ano (~26 segundos/mês) — praticamente impossível de atingir com intervenção humana manual!',
      'Custo da Manutenção Planejada no Orçamento de Disponibilidade: mesmo com zero falhas de hardware, reiniciar um único servidor por 1 hora para atualizar patches já consome mais que todo o orçamento anual de 99,99% — portanto alta disponibilidade >= 99,99% exige **rolling updates sem downtime** (drenar nós, atualizar um por vez ou Blue/Green).',
      'HA na Camada de Aplicação vs Infraestrutura: VMware HA protege contra falha física de host ESXi (reinicia a VM em outro host em ~1–2 min), mas NÃO protege se o serviço Apache/IIS dentro do Windows/Linux travar — proteção completa combina HA de infra + cluster/balanceamento na camada de aplicação (L7 health checks).',
      'Disponibilidade Composta (Cálculo de SLA Real): a disponibilidade fim a fim percebida pelo usuário resulta da multiplicação de todos os elos em série até ele (`Link WAN × Firewall × Core Switch × Hipervisor × Banco × Aplicação`); cada camada crítica precisa de redundância paralela própria.'
    ],
    technicalReference: [
      'Tabela obrigatória: `99,9%` = 8,76 h/ano | `99,99%` = 52,56 min/ano | `99,999%` = 5,26 min/ano',
      'Para atingir >= `99,99%`: obrigatório failover automático + atualização sem parada (Rolling Upgrade / Live Migration).'
    ],
    examTraps: [
      'VMware vSphere HA **NÃO** mantém a VM rodando sem queda nem detecta travamento interno de aplicação SQL (salvo Application Monitoring limitado) — quando o host ESXi morre, as VMs sofrem reboot rápido em outro host (pequeno downtime), diferente de **vSphere FT** ou **Always On AG**.',
      'Memorizar a ordem de grandeza dos "noves": 3 noves (~8h45/ano), 4 noves (~52min/ano), 5 noves (~5min/ano). A banca SARAH testa esses valores comparando requisitos de SLA.',
      'Ter 99,999% no cluster de servidores mas um único roteador de borda de 99,9% derruba o SLA total do sistema para abaixo de 99,9%!'
    ],
    keyTerms: ['HA (Alta Disponibilidade)', '99,9% / 99,99% / 99,999%', 'Rolling Updates (Zero Downtime)', 'HA de Infra vs Aplicação', 'Disponibilidade Composta']
  },
  '15.2.5': {
    itemId: '15.2.5',
    highYieldSummary: [
      'Definição Formal de RPO (Recovery Point Objective): objetivo máximo aceitável de **perda de dados**, medido em **unidade de tempo retroativa** a partir do momento da falha até o último ponto de recuperação válido disponível (ex.: RPO de 1 hora tolera perder no máximo 1 hora de dados recentes).',
      'Mecanismos que Determinam o RPO Real: definido exclusivamente pela **frequência de captura/cópia** — backup diário noturno entrega RPO <= 24h; snapshots horários entregam RPO <= 1h; backup contínuo de logs de transação a cada 5–15 min entrega RPO <= 15 min; replicação assíncrona entrega RPO de segundos a minutos; apenas **replicação síncrona** entrega RPO ~ 0.',
      'RPO Efetivo vs RPO Teórico: se a replicação assíncrona está configurada para ciclo de 5 minutos, mas o link WAN saturou formando atraso de fila (replication lag) de 2 horas, o **RPO real naquele instante degradou para 2 horas** — por isso é obrigatório monitorar lag de replicação!',
      'Impacto no Negócio (Definido via BIA): sistemas críticos financeiros ou prontuários médicos em tempo real exigem RPO próximo a zero (não podem perder atendimentos/prescrições já registrados), enquanto sistemas de arquivos departamentais ou arquivamento aceitam RPO de 4h a 24h.',
      'RPO vs Integridade (RPO = 0 em Corrupção Lógica): replicação síncrona garante RPO = 0 contra perda física de datacenter, mas replica instantaneamente um `DELETE` sem `WHERE` ou ransomware; portanto backups históricos offline/imutáveis complementam com RPO maior porém limpos.'
    ],
    technicalReference: [
      'Mapeamento RPO -> Tecnologia: RPO 24h (Backup diário) | RPO 15–60m (Log backups / Snapshots frequentes) | RPO seg–min (Replicação assíncrona) | RPO = 0 (Replicação síncrona)',
      'RPO olha PARA TRÁS no tempo ("quantos minutos/horas de dados já gravados posso aceitar perder?").'
    ],
    examTraps: [
      'Pegadinha clássica: um sistema faz backup completo todo dia às 02:00h e leva 15 minutos para restaurar; se o servidor queimar às 14:00h, qual era o RPO máximo do dia? **12 horas** (das 02h às 14h, ou 24h no pior cenário), e NÃO 15 minutos (15 min diz respeito ao tempo de recuperação/RTO)!',
      'Dizer que "aumentar a velocidade de restauração reduz o RPO" é FALSO — restaurar mais rápido reduz o **RTO**; para reduzir o **RPO** é necessário aumentar a frequência de backups/replicação.',
      'Esquecer de monitorar **replication lag** dá falsa ilusão de RPO curto quando na prática a fila de envio está horas atrasada.'
    ],
    keyTerms: ['RPO (Perda Máxima de Dados)', 'Frequência de Cópia / Backup', 'Replicação Síncrona (RPO=0)', 'Replication Lag', 'BIA (Impacto no Negócio)']
  },
  '15.2.6': {
    itemId: '15.2.6',
    highYieldSummary: [
      'Definição Formal de RTO (Recovery Time Objective): tempo máximo tolerável de **indisponibilidade (downtime)** entre a ocorrência/detecção da interrupção de um processo de negócio/serviço de TI até sua total retomada operacional dentro dos níveis aceitáveis.',
      'Decomposição Prática do RTO: inclui tempo de **detecção e escalonamento** -> **decisão e acionamento de DR** -> **execução técnica da recuperação** (failover de cluster, restore de dados/VMs, reconfiguração de rede/DNS/certificados) -> **validação técnica**; somado ao **WRT (Work Recovery Time — verificação funcional pelo negócio e reentrada de dados pendentes)** não pode ultrapassar o **MTPD**.',
      'Mecanismos que Reduzem o RTO: clusters HA com failover automático (RTO segundos/minutos), **Hot Site** pré-provisionado (RTO minutos), automação de Runbooks de DR (evita comandos manuais sob estresse), Instant VM Recovery direta do appliance de backup e TTL baixo em DNS/GSLB.',
      'Fatores que Estouram o RTO em Crises Reais: subestimar o tempo de download/cópia de terabytes da nuvem ou fita LTO em rede lenta (gargalo físico de throughput!), falta de documentação de dependências (boot sem AD/DNS prévio) e demora na aprovação executiva para acionar failover de DR.',
      'Trade-off Econômico RPO × RTO: quanto menor o RTO exigido, mais infraestrutura quente ociosa ou replicada em standby precisa estar pronta antes da crise — classificam-se sistemas em Tiers (Tier 0 Crítico: RTO < 15m; Tier 1 Essencial: RTO 1–4h; Tier 2 Padrão: RTO 24–72h).'
    ],
    technicalReference: [
      'Equação Continuidade: `RTO + WRT <= MTPD` (Maximum Tolerable Period of Disruption — limite fatal para sobrevivência do processo)',
      'RTO olha PARA FRENTE no tempo ("em quanto tempo máximo o serviço volta ao ar após cair?").'
    ],
    examTraps: [
      'Pegadinha inversa ao RPO: testar restauração de 10 TB a partir de fita/nuvem em enlace de 100 Mbps leva mais de **200 horas** — declarar em contrato "RTO de 4 horas" para esse ambiente é tecnicamente impossível sem mudar a arquitetura para réplica em disco/Hot Site!',
      'O RTO começa a contar a partir da **interrupção do serviço** (incluindo detecção + decisão + restore + subida de serviços), NÃO apenas quando o analista clica em "Start Restore".',
      'Se `MTPD = 4 horas` e o negócio precisa de `WRT = 1 hora` para validar e reconciliar registros após a TI entregar o sistema, o **RTO máximo da TI é 3 horas** (nunca 4 horas!).'
    ],
    keyTerms: ['RTO (Tempo Máximo de Parada)', 'MTPD & WRT', 'Throughput de Restore', 'Hot / Warm / Cold Site', 'Automação de Runbook']
  },
  '15.2.7': {
    itemId: '15.2.7',
    highYieldSummary: [
      'PCN (Plano de Continuidade de Negócios) vs DRP (Plano de Recuperação de Desastres): o **PCN / BCP** é o guarda-chuva corporativo estratégico que garante a continuidade das funções críticas de toda a organização (pessoas, instalações alternativas, processos manuais de contingência, fornecedores, comunicação de crise); o **DRP** é o subplano **técnico de TI** dentro do PCN focado em restabelecer sistemas, redes, dados e data centers após eventos catastróficos.',
      'Tipos de Site Secundário para DR: **Cold Site** (sala/energia/refrigeração e conectividade básica sem servidores ligados nem dados pré-carregados — menor custo, RTO dias/semanas), **Warm Site** (servidores/storage instalados e configurados com replicação assíncrona ou restore periódico de backup — equilíbrio custo/benefício, RTO horas) e **Hot Site** (espelho idêntico ligado em tempo real com sincronia contínua e capacidade imediata — altíssimo custo, RTO minutos/segundos).',
      'Site Recíproco vs Nuvem (DRaaS): acordos recíprocos entre organizações quase nunca funcionam bem na prática (conflito de espaço/segurança); hoje predomina **DRaaS (Disaster Recovery as a Service)** replicando máquinas para nuvem pública pagando apenas armazenamento contínuo e computação sob demanda durante testes ou desastre real.',
      'Orquestração de Rede e Identidade no DR: garantir que sub-redes distintas no site DR sejam tratadas via **re-IP automatizado + atualização DNS dinâmica** (ou extensão L2 controlada/BGP) e que Controladores de Domínio (AD), DNS, PKI/certificados e licenças estejam plenamente operacionais no site secundário.',
      'Proteção Contra Desastre Cibernético (Cyber Recovery / Clean Room): desastres modernos não são apenas incêndios/enchentes — ataques destrutivos de ransomware exigem área de recuperação limpa isolada (Clean Room) alimentada por cofre imutável air-gapped para não reintroduzir o atacante durante o DR.'
    ],
    technicalReference: [
      'Comparativo Sites: Cold Site (sem hardware pronto/dados — RTO dias) | Warm Site (hardware pronto, dados defasados — RTO horas) | Hot Site (espelho vivo — RTO min/seg)',
      'Hierarquia: BIA (define criticidade/MTPD/RPO/RTO) -> PCN/BCP (negócio amplo) -> DRP (infraestrutura e sistemas de TI).'
    ],
    examTraps: [
      'Colocar o "site secundário de DR" em outro rack no mesmo prédio ou na mesma zona de subestação/bacia de inundação NÃO protege contra desastres regionais ou incêndio predial — site de DR deve ter **separação geográfica adequada**.',
      'A banca testa a relação **PCN vs DRP**: DRP é componente técnico subordinado ao PCN (nunca o contrário).',
      'Um **Cold Site** possui energia e espaço físico/climatização prontos, mas **NÃO** tem servidores pré-instalados com cópia recente dos dados prontos para assumir em minutos (isso é Warm ou Hot Site).'
    ],
    keyTerms: ['DRP vs PCN/BCP', 'Hot / Warm / Cold Site', 'DRaaS', 'Clean Room / Cyber Recovery', 'Separação Geográfica & Re-IP']
  },
  '15.2.8': {
    itemId: '15.2.8',
    highYieldSummary: [
      'Por que Testar Continuamente: planos de DR não testados geram **falsa sensação de segurança** — alterações diárias na produção (novas VLANs, regras de firewall, troca de senhas de serviço, certificados expirados, novos bancos criados fora do backup) invalidam silenciosamente um DRP em poucos meses.',
      'Níveis Progressivos de Teste de Recuperação (Checklist -> Tabletop -> Simulação -> Paralelo -> Interrupção Total): **Checklist/Walkthrough** (revisão documental individual), **Tabletop (Teste de Mesa)** (reunião simulada de cenários passo a passo com a equipe sem tocar produção — baixo risco), **Simulação / Sandbox Isolado** (sobe VMs/bancos restaurados em rede "bolha" isolada validando boot e serviços sem afetar produção), **Teste Paralelo** (site DR sobe e processa em paralelo sem desligar o primário) e **Failover Programado / Cutover Total** (desliga/isola primário e opera realmente no DR para medir RPO/RTO reais!).',
      'Critérios de Sucesso de um Teste de DR: validar **tempos medidos reais de RTO e RPO** contra as metas do BIA, confirmar funcionamento funcional pelo usuário-chave do negócio (não apenas ping de servidor!), validar comunicações de crise e confirmar execução limpa do **failback**.',
      'Isolamento em Rede Bolha nos Testes Sandbox: ao subir clones de AD, DHCP e servidores com mesmos IPs/nomes em teste paralelo, isolar completamente em VLAN/vSwitch sem roteamento até produção — caso contrário causará conflito grave de IP, poluição de DHCP e corrupção USN no AD.',
      'Relatório Pós-Teste e Melhoria Contínua: registrar todas as falhas encontradas durante o exercício (dependências esquecidas, senhas desatualizadas, gaps de runbook), corrigi-las imediatamente e repetir testes periodicamente (semestral/anual ou após grandes mudanças arquiteturais).'
    ],
    technicalReference: [
      'Escala de maturidade de testes (menor -> maior realismo/risco): Revisão Checklist -> Tabletop (Mesa) -> Simulação Sandbox/Bolha -> Teste Paralelo -> Failover Programado (Cutover Real)',
      'Saída obrigatória de todo teste: RPO e RTO **medidos na prática** + lista de correções no DRP/Runbook.'
    ],
    examTraps: [
      'Teste **Tabletop (de mesa)** NÃO envolve restauração física de servidores nem virada de tráfego — é um exercício guiado de discussão e validação de papéis/procedimentos em sala.',
      'Subir uma cópia de Domain Controller ou servidor de produção em teste paralelo **sem isolar a rede em sandbox/bolha** causa conflito imediato de IP/SID e graves problemas de replicação no ambiente ativo.',
      'Apenas testar "se o backup restaura 1 arquivo texto" NÃO valida o RTO nem a integridade aplicacional de um cenário de desastre completo — exige teste integrado de subida ordenada de serviços.'
    ],
    keyTerms: ['Tabletop (Teste de Mesa)', 'Simulação Sandbox (Rede Bolha)', 'Teste Paralelo vs Cutover Total', 'Failover Programado', 'Medição Real de RPO/RTO']
  }
};
