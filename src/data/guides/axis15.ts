import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_15: Record<string, StudyGuide> = {
  '15.1.1': {
    itemId: '15.1.1',
    highYieldSummary: [
      'Definição e escopo: a infraestrutura física de **data centers** de missão crítica integra subestações elétricas, geradores, **UPS** (*Uninterruptible Power Supply*), climatização de precisão e supressão de incêndio sob a classificação **Tier I–IV** do *Uptime Institute*. Resolve indisponibilidades causadas por falha de energia, superaquecimento ou manutenção de infraestrutura física sem interromper os sistemas de TI.',
      'Classificação Uptime Institute (Tiers I a IV): **Tier I** (Capacidade Básica: caminho único de energia/refrigeração, sem redundância; `~99,671%` — exige parada total para manutenção), **Tier II** (Componentes Redundantes: caminho único de distribuição com componentes `N+1` como UPS/geradores redundantes; `~99,741%`), **Tier III** (Simultaneamente Sustentável / *Concurrently Maintainable*: múltiplos caminhos com `1` ativo e `1` passivo, permitindo manutenção planejada SEM derrubar TI; `~99,982%` = `~1,6 h/ano`) e **Tier IV** (Tolerante a Falhas / *Fault Tolerant*: múltiplos caminhos independentes ativos **2N ou 2(N+1)** com compartimentação física suportando falha súbita automática sem parada; `~99,995%` = `~26 min/ano`).',
      'Infraestrutura Elétrica de Missão Crítica: dupla entrada de concessionária (subestações independentes), Quadro de Transferência Automática (**QTA / ATS** [*Automatic Transfer Switch*]), **Geradores Diesel** dimensionados com autonomia de combustível e reabastecimento, **UPS (No-breaks) Online Dupla Conversão** (mantêm carga nas baterias durante os segundos até o gerador assumir e filtram picos/ruídos continuamente), bancos de baterias e **PDUs duplos (A e B)** (*Power Distribution Units*) alimentando fontes redundantes nos racks.',
      'Climatização de Precisão (CRAC / CRAH) e Eficiência (**PUE**): unidades CRAC/CRAH (*Computer Room Air Conditioner / Handler*) mantêm temperatura/umidade controladas (faixa ASHRAE [*American Society of Heating, Refrigerating and Air-Conditioning Engineers*] típica `~18–27 °C` sem condensação nem descarga eletrostática), utilizando contenção de **Corredor Quente / Corredor Frio** (racks frente-a-frente / fundo-a-fundo evitando mistura de ar); **PUE (Power Usage Effectiveness)** = `Energia Total do Data Center / Energia dos Equipamentos de TI` (ideal tende a `1,0`; típicos eficientes entre `1,2` e `1,5`).',
      'Segurança Física e Detecção Precoce de Incêndio: controle de acesso biométrico/crachá com eclusas (*mantrap*), CFTV (*Circuito Fechado de Televisão*), piso elevado/cabeamento organizado, detecção precoce por aspiração (**VESDA** — *Very Early Smoke Detection Apparatus*) e supressão por **gás limpo** (ex.: FM-200 / Novec 1230 — não conduz eletricidade nem destrói eletrônicos como *sprinklers* de água comum).',
      'Regra de Ouro de Topologia em Racks (A+B): servidores, *storages* e switches de missão crítica devem ter **duas fontes físicas** conectadas obrigatoriamente em barramentos **independentes** (Fonte 1 -> PDU A -> UPS A; Fonte 2 -> PDU B -> UPS B), jamais ligando ambas as fontes na mesma régua/no-break.',
      'Exemplo operacional: um data center hospitalar **Tier III** consome `1.440 kW` totais para `1.000 kW` de carga de TI (`PUE = 1.440 / 1.000 = 1,44`) com contenção de corredor frio a `22 °C`, supressão **VESDA + gás limpo** e barramentos independentes **A+B**. Durante manutenção preventiva da UPS do barramento A, a carga segue integralmente sustentada pelo caminho B (Fonte 2 -> PDU B -> UPS B) sem desligar servidores.'
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
    keyTerms: [
      'Tiers I–IV (Uptime Institute): classificação da capacidade de manutenção simultânea (Tier III) e tolerância a falhas súbitas (Tier IV)',
      'UPS Dupla Conversão e QTA/ATS: alimentação contínua sem tempo de comutação durante transferência automática para geradores diesel',
      'Corredor Frio/Quente e PUE: isolamento térmico de fluxo de ar e razão Energia Total / Energia de TI (>= 1,0)',
      'VESDA e Gás Limpo: detecção aspirativa precoce de fumaça e extinção não condutiva que preserva equipamentos eletrônicos',
      'Circuitos Independentes A+B: alimentação dupla até PDUs e UPSs distintos evitando SPOF elétrico no rack'
    ]
  },
  '15.1.2': {
    itemId: '15.1.2',
    highYieldSummary: [
      'Definição e escopo: os modelos de **redundância** (**N**, **N+1**, **2N**, **2N+1**) e a **tolerância a falhas** estruturam componentes elétricos, de rede e computação para eliminar **Pontos Únicos de Falha (SPOF)** e elevar a disponibilidade combinada. Enquanto a **Alta Disponibilidade (HA)** tolera breve *failover*, a tolerância a falhas garante continuidade sem interrupção nem perda de estado.',
      'Modelos de Redundância (`N`, `N+1`, `2N`, `2N+1`): **N** = quantidade mínima exata para operar sem reserva (`0` tolerância a falhas); **N+1** = mínimo necessário mais `1` componente reserva compartilhado (suporta `1` falha; ex.: `3` equipamentos operando carga de `2`); **2N** = duplicação completa totalmente independente (A e B espelhados — cada lado suporta `100%` da carga sozinho); **2N+1** = arquitetura `2N` com `+1` componente extra sobressalente garantindo redundância mesmo durante manutenção de um lado.',
      'SPOF (Single Point of Failure — Ponto Único de Falha): qualquer elemento físico, lógico ou humano cuja falha isolada derruba todo o sistema (ex.: único switch core, única fibra de entrada pela mesma vala/duto, única fonte DNS [*Domain Name System*], único administrador detentor de senhas, ou duas operadoras entrando pelo mesmo duto físico compartilhado).',
      'Redundância vs Tolerância a Falhas: **Redundância (Alta Disponibilidade / HA)** garante recuperação rápida com mínima interrupção (*failover* em segundos/minutos — ex.: *cluster* HA reiniciando VM [*Virtual Machine*]); **Tolerância a Falhas (Fault Tolerance)** garante **ZERO interrupção e ZERO perda de estado** mesmo diante da falha súbita do componente (ex.: execução *lockstep* — espelhamento sincronizado instrução a instrução — / VMware FT / hardware espelhado ativo instantâneo).',
      'Disponibilidade Percentual e Cálculo em Série vs Paralelo: componentes em **SÉRIE** reduzem disponibilidade (`A_total = A1 × A2`); adicionar caminhos redundantes em **PARALELO** eleva disponibilidade (`A_total = 1 - (1 - A1) × (1 - A2)` — dois links de `99%` em paralelo ativo atingem `1 - 0,01 × 0,01 = 99,99%`!).',
      'Diversidade Física de Caminhos (Path Diversity): contratar dois links de internet/MPLS (*Multiprotocol Label Switching*) de operadoras distintas que chegam pela **mesma tubulação/poste ou mesmo switch de entrada** mantém um SPOF físico oculto — é essencial exigir última milha geograficamente diversa.',
      'Exemplo operacional: um sistema clínico exige `2` módulos UPS de `50 kVA` para sua carga (`N = 2`); instalando `3` módulos em um barramento obtém-se **N+1** (`150 kVA`, tolera `1` falha), enquanto `2` barramentos independentes com `2` módulos cada formam **2N** (`A` e `B`, cada lado mantendo `< 50%` da soma total). Na borda WAN, dois links paralelos de `99,9%` com rotas físicas distintas elevam a disponibilidade combinada do acesso para `1 - (0,001 × 0,001) = 99,9999%`.'
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
    keyTerms: [
      'N / N+1 / 2N / 2N+1: escalas progressivas de capacidade reserva, desde zero tolerância (N) até espelhamento integral com sobressalente (2N+1)',
      'SPOF (Single Point of Failure): elemento físico, lógico ou operacional único cuja pane interrompe todo o serviço',
      'HA vs Tolerância a Falhas: recuperação automatizada rápida com breve parada (HA) versus operação ininterrupta sem perda de estado (lockstep/FT)',
      'Série vs Paralelo: produto das disponibilidades em cadeia dependente versus 1 menos o produto das indisponibilidades em redundância paralela',
      'Path Diversity (Diversidade Física): separação de dutos, postes e abordagens de última milha entre operadoras distintas'
    ]
  },
  '15.2.1': {
    itemId: '15.2.1',
    highYieldSummary: [
      'Definição e escopo: os **clusters** agrupam dois ou mais servidores (nós) interligados para fornecer alta disponibilidade (**failover**), escalonamento ou persistência compartilhada em bancos e aplicações críticas. A estabilidade segura depende de redes redundantes de **heartbeat**, mecanismo matemático de **quórum** (`> 50%` dos votos), testemunha (**Witness**) e isolamento forçado (**Fencing/STONITH**) contra **split-brain**.',
      'Conceito e Tipos de Cluster: **Ativo-Passivo** (nó ativo atende enquanto o nó *standby* aguarda pronto para assumir no *failover* — evita sobrecarga pós-falha) vs **Ativo-Ativo** (todos os nós processam carga simultaneamente, exigindo margem `<= 50%` por nó em pares para absorver falha); quanto ao papel, incluem **Cluster de Failover** (Windows Failover Clustering, Pacemaker/Corosync, VMware HA), **NLB/Web** (*Network Load Balancing*) e **Cluster de Banco** (Always On AG, Oracle RAC [*Real Application Clusters*]).',
      'Heartbeat (Batimento Cardíaco): canal dedicado e redundante (idealmente em VLAN isolada, não roteada, além de checagem secundária via *storage*/rede de produção) pelo qual os nós trocam sinais periódicos rápidos para detectar falhas em segundos sem confundir sobrecarga momentânea de rede pública com queda de nó.',
      'Quórum (Voto de Maioria): mecanismo matemático que define quantos votos (nós + *Witness*) precisam estar presentes e comunicantes para o *cluster* permanecer online — exige **maioria estrita (`> 50%`, isto é, `floor(Votos/2) + 1`)**, motivo pelo qual *clusters* costumam ter **número ÍMPAR de votos** (ex.: `3` nós, ou `2` nós + `1` *Witness*).',
      'Split-Brain ("Cérebro Dividido") e STONITH / Fencing: se a rede de *heartbeat* romper enquanto os dois nós continuam vivos e isolados, ambos podem tentar assumir o IP virtual e montar a mesma LUN (*Logical Unit Number*) simultaneamente, **corrompendo gravemente o banco/storage**! Previne-se com **Quórum + Witness** (apenas a partição com maioria sobrevive; a minoria se desliga) e **Fencing / STONITH** (*Shoot The Other Node In The Head* via IPMI [*Intelligent Platform Management Interface*] / iDRAC / PDU ou reserva SCSI-3 persistente).',
      'Tipos de Witness (Testemunha em Clusters de 2 Nós): **Disk/LUN Witness** (disco pequeno compartilhado na SAN [*Storage Area Network*]), **File Share Witness** (compartilhamento SMB [*Server Message Block*] em `3º` servidor neutro) ou **Cloud Witness** (*blob storage* em nuvem — ideal para *clusters multi-site* sem `3º` datacenter).',
      'Exemplo operacional: em um *cluster* **ativo-passivo** de `2` nós (`SQL01` e `SQL02`) com **Cloud Witness** (`3` votos totais; quórum = `2`), caso a rede de *heartbeat* falhe deixando `SQL02` isolado sem alcançar a testemunha, `SQL01` + Witness mantêm `2/3` votos (`66,7% > 50%`) e permanecem online, enquanto `SQL02` (`1/3`) para seus serviços ou sofre **STONITH** via iDRAC evitando **split-brain** sobre o *storage*.'
    ],
    technicalReference: [
      'Regra do Quórum: Maioria estrita `floor(Total de Votos / 2) + 1` -> Cluster de 2 nós SEMPRE precisa de **1 Witness** (total = 3 votos)',
      'Prevenção de Split-Brain: Quórum (maioria vence) + STONITH/Fencing (garante desligamento real do nó isolado via iLO/iDRAC/SCSI-3).'
    ],
    examTraps: [
      'Um cluster de **2 nós SEM Witness** NÃO sobrevive à queda isolada de um nó em configurações padrão de maioria — 1 de 2 votos dá exatamente 50% (não é maioria > 50%!), derrubando o cluster inteiro ou expondo a **split-brain**.',
      'Colocar a testemunha (File Share Witness) hospedada como VM DENTRO de um dos dois nós do próprio cluster que ela monitora cria dependência circular fatal se aquele nó falhar.',
      'Se a rede de produção e a rede de heartbeat compartilharem a mesma interface física única sem redundância, qualquer pico de tráfego/backup pode disparar falsos failovers e split-brain.'
    ],
    keyTerms: [
      'Ativo-Ativo vs Ativo-Passivo: processamento distribuído entre todos os nós (com folga <=50%) versus nó reserva aguardando failover',
      'Quórum (Maioria > 50%): regra de votação (floor(N/2)+1) que impede duas partições isoladas de operarem ao mesmo tempo',
      'Split-Brain e Fencing/STONITH: corrupção por escrita simultânea de nós isolados evitada pelo desligamento forçado (IPMI/iDRAC/SCSI-3)',
      'Witness (Disk / File Share / Cloud): terceiro voto neutro indispensável para clusters de número par de nós',
      'Heartbeat Dedicado: enlace privado e redundante de verificação de vida separado do tráfego sujeito a saturação'
    ]
  },
  '15.2.2': {
    itemId: '15.2.2',
    highYieldSummary: [
      'Definição e escopo: a **redundância de infraestrutura** elimina pontos únicos de falha em todas as camadas — enlaces WAN, comutação LAN/SAN, alimentação elétrica A+B, controladoras de *storage*, serviços base (AD/DNS/DHCP) e posicionamento de máquinas virtuais. Assegura continuidade local quando placas, cabos, switches ou hosts físicos falham.',
      'Redundância de Links e Rede (Camadas 1, 2 e 3): links duplos de operadoras distintas com **BGP** (*Border Gateway Protocol*, ASN [*Autonomous System Number*] próprio ou *failover* SD-WAN [*Software-Defined WAN*]); em switches, agregação **LACP** (*Link Aggregation Control Protocol*, IEEE `802.3ad`) com **MLAG / vPC** (*Multi-Chassis Link Aggregation / Virtual Port Channel*) entre dois switches distintos (evitando SPOF de chassi único); gateway redundante via **VRRP/HSRP** (*Virtual / Hot Standby Router Protocol*) e prevenção de *loops* via RSTP/STP (*Rapid Spanning Tree Protocol*).',
      'Redundância de Energia (Infraestrutura A+B): dupla entrada elétrica (concessionária + gerador), UPS `N+1` ou `2N`, PDUs A e B independentes no rack e servidores/switches com fontes duplas *hot-swap* (substituíveis a quente) conectadas em circuitos distintos.',
      'Redundância de Storage e Caminhos (Multipath + Dual Controllers): *storages* corporativos utilizam **duas controladoras ativo-ativo** com cache espelhado por bateria/NVRAM (*Non-Volatile RAM*), **RAID** (*Redundant Array of Independent Disks* `10/5/6` + *Hot Spare*), switches SAN *fabric* A e *fabric* B isolados, duas placas HBA (*Host Bus Adapter*) / NICs (*Network Interface Cards*) iSCSI por servidor e **Multipath (MPIO / NMP)** alternando caminhos em milissegundos se uma fibra/switch/controladora cair.',
      'Redundância de Serviços Base de Infraestrutura (AD, DNS, DHCP, NTP, Firewalls): manter no mínimo `2` Domain Controllers/DNS em hosts físicos (e preferencialmente racks/*sites*) distintos, DHCP em modo Failover (*Hot Standby* ou *Load Balance*), e par de firewalls NGFW (*Next-Generation Firewall*) em *cluster* HA sincronizado.',
      'Anti-Afinidade em Virtualização (DRS Anti-Affinity Rules): nunca permitir que as duas VMs redundantes de um mesmo serviço (ex.: `DC01` e `DC02`, nó 1 e nó 2 do cluster SQL, `ADC01` e `ADC02`) rodem simultaneamente no mesmo host ESXi/Hyper-V físico — usar regras obrigatórias DRS (*Distributed Resource Scheduler*) de **Separação (Separate Virtual Machines)**!',
      'Exemplo operacional: um servidor ESXi conecta-se à SAN por `2` HBAs em *fabrics* FC separados (`Fabric A` e `Fabric B`) usando **MPIO** (*Round Robin* sobre duas controladoras ativo-ativo do *storage*) e à LAN por LACP distribuído em dois switches via **MLAG/vPC** com alimentação **A+B**. No vCenter, aplica-se regra de **Anti-Afinidade** garantindo que `DC01` e `DC02` permaneçam sempre em hosts físicos diferentes.'
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
    keyTerms: [
      'MLAG / vPC + LACP (802.3ad): agregação de enlaces distribuída entre dois switches físicos eliminando SPOF de comutador único',
      'Dual Controllers + MPIO: controladoras ativo-ativo com cache espelhado em NVRAM e múltiplos caminhos físicos gerenciados pelo SO',
      'Anti-Afinidade (DRS): política de virtualização que impede VMs gêmeas redundantes de executarem no mesmo host físico',
      'Hot Spare (RAID): disco sobressalente em espera quente que assume automaticamente a reconstrução após falha de unidade',
      'VRRP / HSRP & NGFW HA: redundância de gateway padrão L3 e firewall em estado sincronizado'
    ]
  },
  '15.2.3': {
    itemId: '15.2.3',
    highYieldSummary: [
      'Definição e escopo: os mecanismos de **failover** e **failback** coordenam a transição de carga para nós ou sites reservas diante de falhas e o retorno seguro ao ambiente original após estabilização. Distinguem abordagens automáticas (ideais em HA intra-site) das manuais (recomendadas em DR entre data centers), além de preservação de estado (**stateful** vs **stateless**) e controle de preempção.',
      'Failover Automático vs Failover Manual: **Failover Automático** detecta falha via *heartbeat*/*health checks* e transfere IP virtual/serviço/VM em segundos sem ação humana (minimiza RTO [*Recovery Time Objective*] em alta disponibilidade local dentro de um *site*); **Failover Manual** exige decisão e acionamento explícito humano — preferido em **Disaster Recovery (DR) entre sites distantes** para evitar falsos positivos catastróficos por oscilação breve de WAN ou risco de *split-brain*.',
      'Stateful vs Stateless Failover: no *failover* **Stateful** (firewalls HA, balanceadores, bancos síncronos), tabelas de sessões TCP (*Transmission Control Protocol*), traduções NAT (*Network Address Translation*) e transações confirmadas são sincronizadas previamente em tempo real, preservando conexões sem derrubar usuários; no *failover* **Stateless**, o serviço sobe no secundário mas sessões em curso precisam reconectar.',
      'Mecanismos de Chaveamento (IP/DNS/Storage): dentro da mesma sub-rede L2 usa-se IP flutuante (**VIP** [*Virtual IP*] / **GARP** [*Gratuitous ARP*] / VRRP); entre data centers distintos usa-se **atualização dinâmica de DNS (GSLB [*Global Server Load Balancing*] com TTL [*Time to Live*] baixo)** ou **anúncio BGP** para desviar o tráfego de entrada.',
      'Failback (Retorno Planejado ao Ambiente Principal): processo reverso controlado executado após reparar integralmente o nó/site original e confirmar sincronia reversa de dados/logs — deve ter opção **manual (`no-preempt` ou *delayed*)** em bancos/*sites* DR para impedir "ping-pong" (*flapping* contínuo) se o ambiente principal ainda estiver instável.',
      'Preempt (Preempção) — Quando Usar e Evitar: em roteadores VRRP pode-se usar preempção com atraso para devolver carga ao principal após estabilizar; já em *clusters* de banco de dados pesados e DR *multi-site*, **desabilitar auto-failback** evita segunda janela de parada desnecessária durante horário comercial.',
      'Exemplo operacional: em um par de firewalls HA intra-site com sincronização **stateful**, o nó passivo assume o VIP em `< 1 s` emitindo **GARP** sem derrubar sessões clínicas ativas (**failover automático**). Já em uma queda de comunicação WAN com o site DR remoto, mantém-se **failover manual** para evitar *split-brain* geográfico e, após validar a recuperação do datacenter primário e concluir a resincronização reversa dos bancos, agenda-se o **failback** fora do horário comercial.'
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
    keyTerms: [
      'Failover Automático vs Manual: comutação imediata intra-site para RTO mínimo versus acionamento humano seguro em DR entre sites',
      'Stateful vs Stateless Failover: replicação prévia de tabelas de sessão TCP/NAT preservando conexões versus simples subida sem estado ativo',
      'Failback Controlado (no-preempt): retorno planejado ao nó/site primário somente após reparo integral e sincronização reversa de dados',
      'GARP e VIP (Intra-Site): anúncio ARP gratuito que atualiza tabelas MAC nos switches ao mover o IP virtual de servidor',
      'GSLB e BGP (Multi-Site): redirecionamento de tráfego entre data centers usando DNS com TTL baixo ou anúncios de roteamento'
    ]
  },
  '15.2.4': {
    itemId: '15.2.4',
    highYieldSummary: [
      'Definição e escopo: a **Alta Disponibilidade (HA)** quantifica a continuidade operacional através da fórmula `A = MTBF / (MTBF + MTTR)` e dos patamares percentuais ("noves"), combinando redundância em paralelo, *failover* automático e atualizações sem parada (*rolling upgrades*). Exige proteção ponta a ponta porque componentes em série multiplicam suas disponibilidades e degradam o SLA final.',
      'Arquitetura de Alta Disponibilidade (HA) e Fórmula (`A = MTBF / (MTBF + MTTR)`): conjunto de práticas que combinam redundância de hardware, detecção automática de falhas e *failover* rápido visando elevar **MTBF** (*Mean Time Between Failures* — tempo médio entre falhas) e reduzir **MTTR** (*Mean Time To Repair/Recover* — tempo médio de reparo), eliminando SPOFs em rede, energia, *compute*, *storage* e aplicação.',
      'Escala de Disponibilidade ("Os Noves" em Prova): **99,9% (3 noves)** = `8,76 h/ano` (`≈ 8 h 45 min/ano`, `~43,8 min/mês`); **99,99% (4 noves)** = `52,56 min/ano` (`≈ 52,6 min/ano`, `~4,38 min/mês`); **99,999% (5 noves)** = `5,26 min/ano` (`~26 s/mês`) — praticamente impossível de atingir com intervenção humana manual!',
      'Custo da Manutenção Planejada no Orçamento de Disponibilidade: mesmo com zero falhas de hardware, reiniciar um único servidor por `1 hora` para atualizar *patches* já consome mais que todo o orçamento anual de `99,99%` — portanto alta disponibilidade `>= 99,99%` exige **rolling updates sem downtime** (drenar nós, atualizar um por vez ou estratégia *Blue/Green*).',
      'HA na Camada de Aplicação vs Infraestrutura: VMware HA protege contra falha física de host ESXi (reinicia a VM em outro host em `~1–2 min`), mas NÃO protege se o serviço Apache/IIS dentro do Windows/Linux travar — proteção completa combina HA de infra + *cluster*/balanceamento na camada de aplicação (*health checks* L7).',
      'Disponibilidade Composta (Cálculo de SLA Real): componentes em **série** multiplicam disponibilidades (`A_total = A1 × A2`), enquanto componentes redundantes em **paralelo** seguem `A_total = 1 − Π(1 − Ai)`; cada camada crítica (`Link WAN`, `Firewall`, `Switch`, `Hipervisor`, `Banco`, `Aplicação`) precisa de redundância paralela própria para sustentar o SLA fim a fim.',
      'Exemplo operacional: um servidor com `MTBF = 1.998 h` e `MTTR = 2 h` apresenta disponibilidade individual `A = 1.998 / (1.998 + 2) = 0,999` (`99,9%` ≈ `8 h 45 min/ano`). Ao colocar `2` servidores desses em paralelo ativo-ativo (`A_par = 1 − (1 − 0,999)² = 99,9999%`) atrás de um *cluster* de firewalls (`99,99%`), o conjunto em série alcança `0,999999 × 0,9999 ≈ 99,9899%` (`~53 min/ano`), exigindo *rolling updates* para não estourar o orçamento.'
    ],
    technicalReference: [
      'Tabela obrigatória: `99,9%` = 8,76 h/ano (≈ 8h45m) | `99,99%` = 52,56 min/ano (≈ 52,6m) | `99,999%` = 5,26 min/ano | Fórmula: `A = MTBF / (MTBF + MTTR)`',
      'Série: `A1 × A2` | Paralelo: `1 - (1-A1)(1-A2)` | Para `>= 99,99%`: obrigatório failover automático + atualização sem parada (Rolling Upgrade).'
    ],
    examTraps: [
      'VMware vSphere HA **NÃO** mantém a VM rodando sem queda nem detecta travamento interno de aplicação SQL (salvo Application Monitoring limitado) — quando o host ESXi morre, as VMs sofrem reboot rápido em outro host (pequeno downtime), diferente de **vSphere FT** ou **Always On AG**.',
      'Memorizar a ordem de grandeza dos "noves": 3 noves (~8h45/ano), 4 noves (~52,6 min/ano), 5 noves (~5,26 min/ano). Valores muito cobrados em concursos comparando requisitos de SLA.',
      'Ter 99,999% no cluster de servidores mas um único roteador de borda de 99,9% derruba o SLA total do sistema para abaixo de 99,9%!'
    ],
    keyTerms: [
      'A = MTBF / (MTBF + MTTR): equação fundamental da disponibilidade baseada no tempo médio entre falhas e tempo de reparo',
      'Escala dos Noves (3/4/5 noves): limites anuais de indisponibilidade — 99,9% (~8h45m), 99,99% (~52,6m) e 99,999% (~5,26m)',
      'Série vs Paralelo: multiplicação das disponibilidades em cadeia (reduz A) versus 1 menos o produto das indisponibilidades (eleva A)',
      'Rolling Updates (Zero Downtime): atualização sequencial nó a nó com drenagem ou Blue/Green para preservar orçamentos de 99,99%+',
      'HA de Infra vs Aplicação: reinício de VM em outro host (vSphere HA) versus detecção e failover de serviço L7 travado'
    ]
  },
  '15.2.5': {
    itemId: '15.2.5',
    highYieldSummary: [
      'Definição e escopo: no âmbito da continuidade de negócios (**ISO 22301**) e da **BIA** (*Business Impact Analysis*), o **RPO** (*Recovery Point Objective*) estabelece o limite máximo tolerável de perda de dados medido retroativamente no tempo a partir do incidente. Orienta a escolha entre replicação síncrona, replicação assíncrona, captura contínua de transações e monitoramento de *replication lag*, sem se confundir com velocidade de restauração (**RTO**).',
      'Definição Formal de RPO (Recovery Point Objective): objetivo máximo aceitável de **perda de dados**, medido em **unidade de tempo retroativa** a partir do momento da falha até o último estado consistente recuperável disponível (ex.: RPO de `1 hora` tolera perder no máximo `1 hora` de alterações recentes).',
      'Mecanismos Arquiteturais que Determinam o RPO Real: definido exclusivamente pela **frequência e sincronismo de captura/replicação** — capturas diárias entregam RPO `<= 24 h`; *snapshots* horários entregam RPO `<= 1 h`; envio contínuo de *logs* de transação a cada `5–15 min` entrega RPO `<= 15 min`; replicação assíncrona entrega RPO de segundos a minutos; apenas **replicação síncrona** entrega RPO `~0`.',
      'RPO Efetivo vs RPO Teórico: se a replicação assíncrona está configurada para ciclo de `5 minutos`, mas o link WAN saturou formando atraso de fila (*replication lag*) de `2 horas`, o **RPO real naquele instante degradou para `2 horas`** — por isso é obrigatório monitorar *lag* de replicação!',
      'Impacto no Negócio (Definido via BIA): sistemas críticos financeiros ou prontuários médicos em tempo real exigem RPO próximo a zero (não podem perder atendimentos/prescrições já registrados), enquanto sistemas de arquivos departamentais ou arquivamento aceitam RPO de `4 h` a `24 h`.',
      'RPO vs Integridade (RPO = 0 em Corrupção Lógica): replicação síncrona garante RPO `= 0` contra perda física de datacenter, mas replica instantaneamente um `DELETE` sem `WHERE` ou *ransomware*; portanto cópias históricas imutáveis e desconectadas complementam com RPO maior porém íntegras.',
      'Exemplo operacional: na **BIA** hospitalar (ISO 22301), o sistema de prescrição médica recebe meta de **RPO = 0** atendida por replicação síncrona metropolitana (`< 5 ms` RTT) entre dois *storages* em sites distintos, enquanto o sistema de RH aceita **RPO = 15 min** via replicação assíncrona de *logs* em WAN. Ao detectar `replication lag = 45 min` no enlace WAN durante pico de tráfego, o monitoramento dispara alerta antes que um eventual desastre viole o RPO contratado.'
    ],
    technicalReference: [
      'Mapeamento RPO -> Tecnologia: RPO 24h (cópia diária) | RPO 15–60m (log shipping / snapshots) | RPO seg–min (replicação assíncrona) | RPO = 0 (replicação síncrona)',
      'RPO olha PARA TRÁS no tempo ("quantos minutos/horas de dados já gravados posso aceitar perder?").'
    ],
    examTraps: [
      'Pegadinha clássica: um sistema registra ponto de recuperação todo dia às 02:00h e leva 15 minutos para restabelecer; se o servidor queimar às 14:00h, qual era o RPO efetivo no momento da falha? **12 horas** (das 02h às 14h, ou 24h no pior cenário), e NÃO 15 minutos (15 min diz respeito ao tempo de recuperação/RTO)!',
      'Dizer que "aumentar a velocidade de restauração reduz o RPO" é FALSO — restaurar mais rápido reduz o **RTO**; para reduzir o **RPO** é necessário aumentar a frequência de captura/replicação.',
      'Esquecer de monitorar **replication lag** dá falsa ilusão de RPO curto quando na prática a fila de envio está horas atrasada.'
    ],
    keyTerms: [
      'RPO (Recovery Point Objective): janela máxima aceitável de perda de dados olhando retroativamente a partir do instante da falha',
      'Replicação Síncrona (RPO = 0): confirmação da escrita nos dois sites antes do ACK à aplicação, com exigência de baixa latência',
      'Replication Lag: atraso acumulado na replicação assíncrona que degrada na prática o RPO efetivo do sistema',
      'Corrupção Lógica vs RPO = 0: replicação síncrona replica erros/ransomware imediatamente, exigindo cópias históricas imutáveis',
      'BIA (Definição de Criticidade): análise de impacto ao negócio que fundamenta metas distintas de RPO por processo'
    ]
  },
  '15.2.6': {
    itemId: '15.2.6',
    highYieldSummary: [
      'Definição e escopo: o **RTO** (*Recovery Time Objective*) define o tempo máximo tolerável de parada de um serviço até sua restauração operacional completa, articulando-se com **WRT** (*Work Recovery Time*) e **MTPD** (*Maximum Tolerable Period of Disruption*) na **ISO 22301**. Condiciona a escolha entre clusters locais, automação de *runbooks*, *Hot/Warm Site* e capacidade física de rede.',
      'Definição Formal de RTO (Recovery Time Objective): tempo máximo tolerável de **indisponibilidade (downtime)** entre a ocorrência/detecção da interrupção de um processo de negócio/serviço de TI até sua total retomada operacional dentro dos níveis aceitáveis.',
      'Decomposição Prática do RTO: inclui tempo de **detecção e escalonamento** -> **decisão e acionamento de DR** -> **execução técnica da recuperação** (*failover* de *cluster*, restauração de dados/VMs, reconfiguração de rede/DNS/certificados) -> **validação técnica**; somado ao **WRT** (verificação funcional pelo negócio e reentrada de dados pendentes) não pode ultrapassar o **MTPD**.',
      'Mecanismos que Reduzem o RTO: *clusters* HA com *failover* automático (RTO segundos/minutos), **Hot Site** pré-provisionado (RTO minutos), automação de *Runbooks* de DR (evita comandos manuais sob estresse), subida instantânea direta de disco réplica e TTL baixo em DNS/GSLB.',
      'Fatores que Estouram o RTO em Crises Reais: subestimar o tempo de transferência de terabytes pela rede em enlace lento (gargalo físico de *throughput*!), falta de documentação de dependências (*boot* sem AD/DNS prévio) e demora na aprovação executiva para acionar *failover* de DR.',
      'Trade-off Econômico RPO × RTO: quanto menor o RTO exigido, mais infraestrutura quente ociosa ou replicada em *standby* precisa estar pronta antes da crise — classificam-se sistemas em Tiers (`Tier 0` Crítico: RTO `< 15 min`; `Tier 1` Essencial: RTO `1–4 h`; `Tier 2` Padrão: RTO `24–72 h`).',
      'Exemplo operacional: na **BIA**, um sistema cirúrgico tem `MTPD = 4 horas` e exige `WRT = 1 hora` para a equipe assistencial validar e lançar registros feitos em papel; pela equação `RTO + WRT <= MTPD`, o **RTO máximo da TI é de `3 horas`**. Como transferir `10 TB` sobre link de `100 Mbps` levaria `> 222 horas`, dimensiona-se réplica pré-sincronizada em **Warm/Hot Site** com *runbook* automatizado atingindo RTO medido de `35 minutos`.'
    ],
    technicalReference: [
      'Equação Continuidade: `RTO + WRT <= MTPD` (Maximum Tolerable Period of Disruption — limite fatal para sobrevivência do processo)',
      'RTO olha PARA FRENTE no tempo ("em quanto tempo máximo o serviço volta ao ar após cair?").'
    ],
    examTraps: [
      'Pegadinha inversa ao RPO: transferir 10 TB por enlace de 100 Mbps leva mais de **200 horas** (`~222 h`) — declarar em contrato "RTO de 4 horas" para esse ambiente é tecnicamente impossível sem mudar a arquitetura para réplica pré-sincronizada/Hot Site!',
      'O RTO começa a contar a partir da **interrupção do serviço** (incluindo detecção + decisão + recuperação + subida de serviços), NÃO apenas quando o analista inicia a restauração.',
      'Se `MTPD = 4 horas` e o negócio precisa de `WRT = 1 hora` para validar e reconciliar registros após a TI entregar o sistema, o **RTO máximo da TI é 3 horas** (nunca 4 horas!).'
    ],
    keyTerms: [
      'RTO (Recovery Time Objective): prazo máximo tolerável entre a interrupção do serviço e sua entrega operacional validada',
      'MTPD e WRT: período máximo de interrupção suportável pelo negócio (MTPD) e tempo de validação/reconciliação pós-TI (WRT)',
      'Equação RTO + WRT <= MTPD: restrição fundamental que limita o tempo disponível para a recuperação técnica de TI',
      'Gargalo de Throughput no RTO: limitação física da largura de banda ao mover terabytes durante janela de crise',
      'Automação de Runbooks de DR: orquestração sequencial pré-testada (AD/DNS -> Banco -> App) que evita atrasos manuais'
    ]
  },
  '15.2.7': {
    itemId: '15.2.7',
    highYieldSummary: [
      'Definição e escopo: a **Recuperação de Desastres (DR)** e a **Gestão de Continuidade de Negócios (ISO 22301)** estruturam a resposta corporativa (**PCN/BCP**) e técnica (**DRP**) diante de incidentes graves como perda predial ou ataques cibernéticos. Definem a arquitetura de sites alternativos (**Cold**, **Warm**, **Hot Site**, **DRaaS**), reendereçamento de rede e recuperação limpa (**Clean Room**).',
      'PCN (Plano de Continuidade de Negócios) vs DRP (Plano de Recuperação de Desastres): sob a **ISO 22301**, o **PCN / BCP** (*Business Continuity Plan*) é o guarda-chuva corporativo estratégico que garante a continuidade das funções críticas (pessoas, instalações, contingência manual, comunicação de crise), guiado pela **BIA** (*Business Impact Analysis*); o **DRP** (*Disaster Recovery Plan*) é o subplano **técnico de TI** dentro do PCN focado em restabelecer sistemas, redes e dados.',
      'Tipos de Site Secundário para DR: **Cold Site** (sala/energia/refrigeração e conectividade básica sem servidores ligados nem dados pré-carregados — menor custo, RTO dias/semanas), **Warm Site** (servidores/*storage* instalados e configurados com replicação assíncrona ou carga periódica — equilíbrio custo/benefício, RTO horas) e **Hot Site** (espelho idêntico ligado em tempo real com sincronia contínua e capacidade imediata — altíssimo custo, RTO minutos/segundos).',
      'Site Recíproco vs Nuvem (DRaaS): acordos recíprocos entre organizações quase nunca funcionam bem na prática (conflito de espaço/segurança); hoje predomina **DRaaS** (*Disaster Recovery as a Service*) replicando máquinas para nuvem pública pagando apenas armazenamento contínuo e computação sob demanda durante testes ou desastre real.',
      'Orquestração de Rede e Identidade no DR: garantir que sub-redes distintas no site DR sejam tratadas via **re-IP automatizado + atualização DNS dinâmica** (ou extensão L2 controlada/BGP) e que Controladores de Domínio (AD [*Active Directory*]), DNS, PKI (*Public Key Infrastructure*)/certificados e licenças estejam plenamente operacionais no site secundário.',
      'Proteção Contra Desastre Cibernético (Cyber Recovery / Clean Room): desastres modernos não são apenas incêndios/enchentes — ataques destrutivos de *ransomware* exigem área de recuperação limpa isolada (*Clean Room*) alimentada por cofre imutável *air-gapped* (isolado da rede produtiva) para não reintroduzir o atacante durante o DR.',
      'Exemplo operacional: alinhado à **ISO 22301** e à **BIA**, o hospital mantém o **PCN** (incluindo formulários em papel nas alas) e o **DRP** em modelo híbrido: sistemas `Tier 0` replicam para um **Hot Site** remoto a `60 km` com plano automático de *re-IP* + GSLB e DCs ativos, sistemas `Tier 1` usam **DRaaS** em nuvem (**Warm Site** sob demanda), e cópias críticas ficam em cofre *air-gapped* para reconstrução em **Clean Room** diante de *ransomware*.'
    ],
    technicalReference: [
      'Comparativo Sites: Cold Site (sem hardware pronto/dados — RTO dias) | Warm Site (hardware pronto, dados defasados — RTO horas) | Hot Site (espelho vivo — RTO min/seg)',
      'Hierarquia ISO 22301: BIA (define criticidade/MTPD/RPO/RTO) -> PCN/BCP (negócio amplo) -> DRP (infraestrutura e sistemas de TI).'
    ],
    examTraps: [
      'Colocar o "site secundário de DR" em outro rack no mesmo prédio ou na mesma zona de subestação/bacia de inundação NÃO protege contra desastres regionais ou incêndio predial — site de DR deve ter **separação geográfica adequada**.',
      'A banca testa a relação **PCN vs DRP**: DRP é componente técnico subordinado ao PCN (nunca o contrário).',
      'Um **Cold Site** possui energia e espaço físico/climatização prontos, mas **NÃO** tem servidores pré-instalados com cópia recente dos dados prontos para assumir em minutos (isso é Warm ou Hot Site).'
    ],
    keyTerms: [
      'ISO 22301 e BIA: norma internacional de gestão de continuidade e análise de impacto que define prioridades, MTPD, RTO e RPO',
      'PCN (BCP) vs DRP: plano estratégico global de continuidade do negócio versus plano técnico subordinado de recuperação de TI',
      'Cold / Warm / Hot Site: escalas de prontidão de site secundário variando de infraestrutura vazia (dias) a espelho sincronizado ativo (minutos)',
      'DRaaS (Nuvem): replicação contínua para nuvem pública com provisionamento elástico de computação apenas em testes ou desastre',
      'Clean Room / Air-Gapped: ambiente isolado de recuperação cibernética para validar sistemas limpos após ataques de ransomware'
    ]
  },
  '15.2.8': {
    itemId: '15.2.8',
    highYieldSummary: [
      'Definição e escopo: os **testes de recuperação de desastres** validam periodicamente a eficácia real do **DRP**, medindo **RPO** e **RTO** na prática e revelando falhas ocultas provocadas por mudanças diárias na produção. Evoluem de revisões documentais (**Checklist** e **Tabletop**) até exercícios técnicos em rede isolada (**Simulação Sandbox**) e viradas reais (**Teste Paralelo** e **Failover Programado**).',
      'Por que Testar Continuamente: planos de DR não testados geram **falsa sensação de segurança** — alterações diárias na produção (novas VLANs, regras de firewall, troca de senhas de serviço, certificados expirados, novos bancos criados) invalidam silenciosamente um DRP em poucos meses.',
      'Níveis Progressivos de Teste de Recuperação (Checklist -> Tabletop -> Simulação -> Paralelo -> Interrupção Total): **Checklist/Walkthrough** (revisão documental individual), **Tabletop (Teste de Mesa)** (reunião simulada de cenários passo a passo com a equipe sem tocar produção — baixo risco), **Simulação / Sandbox Isolado** (sobe VMs/bancos restaurados em rede "bolha" isolada validando *boot* e serviços sem afetar produção), **Teste Paralelo** (site DR sobe e processa em paralelo sem desligar o primário) e **Failover Programado / Cutover Total** (desliga/isola primário e opera realmente no DR para medir RPO/RTO reais!).',
      'Critérios de Sucesso de um Teste de DR: validar **tempos medidos reais de RTO e RPO** contra as metas do BIA, confirmar funcionamento funcional pelo usuário-chave do negócio (não apenas ping de servidor!), validar comunicações de crise e confirmar execução limpa do **failback**.',
      'Isolamento em Rede Bolha nos Testes Sandbox: ao subir clones de AD, DHCP e servidores com mesmos IPs/nomes em teste paralelo/simulação, isolar completamente em VLAN/*vSwitch* (*Virtual Switch*) sem roteamento até produção — caso contrário causará conflito grave de IP, poluição de DHCP e corrupção USN (*Update Sequence Number*) no AD.',
      'Relatório Pós-Teste e Melhoria Contínua: registrar todas as falhas encontradas durante o exercício (dependências esquecidas, senhas desatualizadas, *gaps* de *runbook*), corrigi-las imediatamente e repetir testes periodicamente (semestral/anual ou após grandes mudanças arquiteturais).',
      'Exemplo operacional: trimestralmente a equipe realiza um exercício **Tabletop** de `2 h` revisando contatos e papéis da **ISO 22301** e executa uma **Simulação Sandbox** subindo `DC01`, banco SQL e aplicação clínica em um *vSwitch* isolado ("rede bolha" sem gateway para produção). Mede-se `RTO real = 38 min` (abaixo da meta de `1 h`), identifica-se regra de firewall ausente no *runbook* de DR e atualiza-se o roteiro antes do **Failover Programado** anual.'
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
    keyTerms: [
      'Tabletop (Teste de Mesa): exercício simulado em sala para validar papéis, fluxos decisórios e comunicação sem tocar na produção',
      'Simulação Sandbox (Rede Bolha): subida de máquinas e bancos em VLAN/vSwitch isolado sem roteamento até a rede ativa',
      'Teste Paralelo vs Cutover Total: validação paralela sem desligar o primário versus virada integral real assumindo tráfego no DR',
      'Medição Real de RPO e RTO: aferição cronometrada no exercício comparada às metas contratadas na BIA',
      'Prevenção de Conflito (USN/IP/DHCP): obrigatoriedade de isolamento L2/L3 ao clonar DCs e servidores ativos em testes'
    ]
  }
};
