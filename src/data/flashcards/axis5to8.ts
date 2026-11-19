import { Flashcard } from '../../types/edital';

export const FLASHCARDS_AXIS_5_TO_8: readonly Flashcard[] = [
  // ==================== EIXO 5 (16 itens restantes) ====================
  {
    id: 'fc-75',
    itemId: '5.1.1',
    front: 'Qual a diferença estrutural entre Hipervisor Tipo 1 (Bare Metal) e Tipo 2 (Hosted)?',
    back: 'Tipo 1 (ESXi, Hyper-V bare metal, KVM) roda diretamente sobre o hardware físico sem SO hospedeiro intermediário; Tipo 2 (VirtualBox, VMware Workstation) roda como aplicação sobre um SO completo.'
  },
  {
    id: 'fc-76',
    itemId: '5.1.2',
    front: 'Compare os padrões de disco e interface SAS, SATA e NVMe quanto ao protocolo de comando e perfil típico de filas/IOPS.',
    back: 'SATA usa AHCI (1 fila com até 32 comandos); SAS oferece full-duplex, dual-port e filas até 256 comandos; NVMe roda sobre PCIe suportando até 64 mil filas com 64 mil comandos cada e latência na casa de microssegundos.'
  },
  {
    id: 'fc-77',
    itemId: '5.1.4',
    front: 'Qual a diferença fundamental entre armazenamento NAS e SAN quanto ao acesso aos dados e aos protocolos típicos?',
    back: 'NAS entrega acesso a nível de ARQUIVO (SMB/CIFS TCP 445, NFS TCP/UDP 2049) sobre rede IP; SAN entrega acesso a nível de BLOCO bruto (Fibre Channel, iSCSI TCP 3260, FCoE).'
  },
  {
    id: 'fc-78',
    itemId: '5.1.5',
    front: 'Compare IaaS, PaaS e SaaS quanto ao controle do cliente e diferencie Escalabilidade Vertical vs Horizontal.',
    back: 'IaaS: provedor gerencia hardware/hipervisor, cliente gerencia SO/runtime/app. PaaS: cliente gerencia apenas código/dados. SaaS: tudo gerenciado. Escala vertical (Scale-Up) aumenta CPU/RAM do mesmo nó; Horizontal (Scale-Out) adiciona mais nós.'
  },
  {
    id: 'fc-79',
    itemId: '5.2.1',
    front: 'No VMware vSphere, diferencie o papel do ESXi e do vCenter Server e informe a porta de gerência web padrão.',
    back: 'ESXi é o hipervisor Tipo 1 que executa as VMs; vCenter Server gerencia centralmente múltiplos hosts ESXi habilitando Cluster HA, DRS, vMotion e templates. Acesso web padrão: HTTPS TCP 443 (VAMI do vCenter: TCP 5480).'
  },
  {
    id: 'fc-80',
    itemId: '5.2.2',
    front: 'No VMware vSphere, qual é a diferença exata entre vSphere HA e vSphere FT (Fault Tolerance)?',
    back: 'vSphere HA reinicia as VMs afetadas em outros hosts sobreviventes após falha (breve downtime de boot); FT mantém cópia secundária em execução sincronizada contínua (zero downtime, consumo dobrado de recursos).'
  },
  {
    id: 'fc-81',
    itemId: '5.2.3',
    front: 'Compare vMotion, Storage vMotion e DRS no ecossistema VMware vSphere.',
    back: 'vMotion migra VM ligada entre hosts ESXi preservando memória/estado sem queda (exige datastore compartilhado); Storage vMotion migra discos da VM ligada entre datastores; DRS balanceia carga automaticamente entre hosts via vMotion.'
  },
  {
    id: 'fc-82',
    itemId: '5.2.4',
    front: 'Compare os formatos de provisionamento de disco virtual Thick Provision Lazy Zeroed, Eager Zeroed e Thin Provisioned.',
    back: 'Thin aloca espaço sob demanda (risco de overcommitment se encher o datastore); Thick Lazy reserva todo espaço na criação e zera blocos no primeiro uso; Thick Eager reserva e zera tudo imediatamente (melhor escrita inicial / exigido por clusters).'
  },
  {
    id: 'fc-83',
    itemId: '5.2.5',
    front: 'Por que snapshots de VMware NÃO são backup e qual o prazo/risco máximo recomendado para mantê-los ativos?',
    back: 'Snapshots são discos delta vinculados ao disco base (`.vmdk`), não cópia independente. Recomendação operacional: reter no máximo 24–72 horas; múltiplos/longos snapshots crescem indefinidamente, degradam I/O e podem travar consolidação.'
  },
  {
    id: 'fc-84',
    itemId: '5.2.6',
    front: 'Qual porta TCP padrão usa o iSCSI, qual o nome identificador único (IQN) e o que é Jumbo Frame na rede iSCSI?',
    back: 'TCP 3260. Endereço segue padrão IQN (`iqn.AAAA-MM.reverso.dominio:nome`). Jumbo Frames elevam MTU de 1500 para 9000 bytes ponta a ponta (VMkernel, switches e storage) reduzindo overhead de cabeçalhos.'
  },
  {
    id: 'fc-85',
    itemId: '5.2.7',
    front: 'Em uma SAN, o que diferencia Zoning (no switch FC) de LUN Masking (no storage)?',
    back: 'Zoning (por WWPN no fabric switch FC) isola quais iniciadores enxergam quais portas do storage; LUN Masking (no array de storage) controla quais hosts (WWN/IQN) têm acesso autorizado a cada volume lógico (LUN).'
  },
  {
    id: 'fc-86',
    itemId: '5.2.8',
    front: 'Quais as penalidades de escrita (write penalty) de RAID 0, RAID 1/10, RAID 5 e RAID 6 e o papel do Hot Spare?',
    back: 'Write penalty: RAID 0 = 1 | RAID 1 / 10 = 2 | RAID 5 = 4 | RAID 6 = 6. Hot Spare é disco em reserva passiva (não soma capacidade útil) que substitui automaticamente um disco falho durante o rebuild.'
  },
  {
    id: 'fc-87',
    itemId: '5.2.9',
    front: 'No acesso multipathing (MPIO / NMP) a um storage iSCSI/FC, compare as políticas Fixed, MRU (Most Recently Used) e Round Robin.',
    back: 'Fixed usa caminho preferido fixo; MRU permanece no caminho ativo atual (ideal para arrays Active/Passive evitando thrashing); Round Robin alterna I/O entre todos os caminhos ativos (ideal em arrays Active/Active ou ALUA otimizados).'
  },
  {
    id: 'fc-88',
    itemId: '5.2.10',
    front: 'Qual a fórmula matemática que relaciona Throughput (MB/s), IOPS e Block Size (tamanho de bloco)?',
    back: 'Throughput = IOPS × Tamanho do Bloco (ex.: 20.000 IOPS × 8 KiB = 160.000 KiB/s ≈ 156,25 MiB/s ou 160 MB/s). Cargas OLTP priorizam IOPS baixando Block Size; streaming/backup prioriza Throughput.'
  },
  {
    id: 'fc-89',
    itemId: '5.2.11',
    front: 'No `esxtop` (ESXi), qual a equação entre GAVG, KAVG e DAVG e o que indica DAVG alto (>20 ms) com KAVG próximo de zero?',
    back: 'GAVG = KAVG + DAVG (latência vista pela VM = fila no VMkernel + tempo do dispositivo/storage). DAVG alto (>20 ms) com KAVG ~0 indica gargalo externo no fabric SAN ou no próprio storage array.'
  },
  {
    id: 'fc-90',
    itemId: '5.2.12',
    front: 'Em VMware, o que são APD (All Paths Down) e PDL (Permanent Device Loss) e qual comando consulta discos/caminhos no ESXi?',
    back: 'PDL indica que o storage reportou formalmente via SCSI Sense que a LUN foi removida de forma permanente; APD indica perda transitória/desconhecida de todos os caminhos sem sinalização PDL. Comandos: `esxcli storage core path list` e `vmkping`.'
  },

  // ==================== EIXO 6 (8 itens restantes) ====================
  {
    id: 'fc-91',
    itemId: '6.1.2',
    front: 'Qual é a regra moderna 3-2-1-1-0 de proteção de backup contra ransomware e falhas físicas?',
    back: '3 cópias dos dados, em 2 tipos de mídia diferentes, 1 cópia offsite (fora do site), 1 cópia imutável/air-gapped (WORM/offline) e 0 erros verificados em testes periódicos de restore.'
  },
  {
    id: 'fc-92',
    itemId: '6.1.3',
    front: 'Compare Deduplicação na Origem (Source-Side) vs no Destino (Target-Side) e Inline vs Pós-Processo.',
    back: 'Source-Side reduz tráfego de rede enviando apenas blocos únicos (exige mais CPU do cliente); Target-Side alivia cliente mas consome mais banda. Inline deduplica antes de gravar no disco; Pós-Processo grava primeiro e deduplica depois.'
  },
  {
    id: 'fc-93',
    itemId: '6.2.1',
    front: 'Na arquitetura clássica tipo Commvault, quais os 3 componentes básicos responsáveis por controle, movimentação/deduplicação e origem dos dados?',
    back: '1) CommServe (servidor central de metadados/agendamento), 2) MediaAgent (move fluxos, gerencia Storage Policies e DDB de deduplicação), 3) Client/Agent (iDataAgent instalado ou proxy VM protegendo a origem).'
  },
  {
    id: 'fc-94',
    itemId: '6.2.2',
    front: 'Qual a diferença entre Full Sintético (Synthetic Full) e Backup Full Tradicional, e qual vantagem traz o Incremental Forever?',
    back: 'Full Sintético consolida no repositório o último Full + Incrementais sem reler os dados pela LAN da origem. Incremental Forever faz um único Full inicial seguido só de incrementais + consolidações sintéticas periódicas.'
  },
  {
    id: 'fc-95',
    itemId: '6.2.3',
    front: 'Na política de retenção combinada por Dias e Ciclos (ex.: 30 dias e 2 ciclos), quando um backup completo antigo pode ser podado (pruned)?',
    back: 'Somente quando AMBAS as condições forem satisfeitas simultaneamente: os dias expiraram E os backups subsequentes formam pelo menos o mínimo de ciclos completos (Full + dependentes) exigido.'
  },
  {
    id: 'fc-96',
    itemId: '6.2.4',
    front: 'Diferencie os modos de restore In-Place, Out-of-Place, Granular (Item-Level) e Bare-Metal Recovery (BMR).',
    back: 'In-Place sobrescreve destino original; Out-of-Place restaura para local/VM alternativo seguro; Granular recupera arquivo/e-mail/tabela/objeto AD individual; BMR reconstrói SO completo do zero em hardware distinto.'
  },
  {
    id: 'fc-97',
    itemId: '6.2.6',
    front: 'Qual a diferença entre Replicação Síncrona e Replicação Assíncrona quanto a RPO, latência e distância máxima típica?',
    back: 'Síncrona confirma gravação apenas após ambos os sites gravarem (RPO = 0, aumenta latência da aplicação, distância típica limitada por RTT < 5–10 ms / ~100 km); Assíncrona grava local e envia depois (RPO > 0, sem impacto de latência, qualquer distância WAN).'
  },
  {
    id: 'fc-98',
    itemId: '6.2.7',
    front: 'Em um plano de Recuperação de Desastres (DR), diferencie os tipos de site Cold, Warm e Hot Site e indique a ordem correta de subida.',
    back: 'Cold Site: apenas infraestrutura física/energia sem servidores instalados (RTO longo); Warm Site: hardware pronto, dados restaurados/sincronizados periodicamente; Hot Site: espelho ativo contínuo (RTO mínimo). Ordem de subida: Rede/Firewall -> Storage -> AD/DNS/NTP -> Bancos -> Aplicações.'
  },

  // ==================== EIXO 7 (9 itens restantes) ====================
  {
    id: 'fc-99',
    itemId: '7.1.1',
    front: 'Nos padrões Wi-Fi (IEEE 802.11), compare bandas, largura máxima de canal e modulação máxima de 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5) e 802.11ax (Wi-Fi 6/6E).',
    back: '802.11n (Wi-Fi 4): 2,4/5 GHz, até 40 MHz, 64-QAM. 802.11ac (Wi-Fi 5): exclusivo 5 GHz, até 160 MHz, 256-QAM, MU-MIMO DL. 802.11ax (Wi-Fi 6/6E): 2,4/5 GHz (+ 6 GHz no 6E), OFDMA, 1024-QAM, MU-MIMO UL/DL e TWT.'
  },
  {
    id: 'fc-100',
    itemId: '7.1.3',
    front: 'Quais cifras/protocolos de autenticação distinguem WEP, WPA, WPA2 e WPA3?',
    back: 'WEP: RC4 + IV de 24 bits (quebrável em minutos). WPA: TKIP/RC4 + MIC (transição, obsoleto). WPA2: AES-CCMP (obrigatório) + 4-Way Handshake. WPA3: SAE (Simultaneous Authentication of Equals / Dragonfly) + PMF obrigatório (802.11w).'
  },
  {
    id: 'fc-101',
    itemId: '7.2.1',
    front: 'Em arquiteturas NAC (ex.: Cisco ISE/ClearPass), diferencie os modos Monitor, Low-Impact e Closed Mode e cite o protocolo de CoA.',
    back: 'Monitor Mode: autentica e loga sem bloquear; Low-Impact: aplica ACL básica pré-auth (DHCP/DNS/AD) e restringe após falha; Closed Mode: bloqueia todo tráfego exceto EAPoL até autenticar. CoA (Change of Authorization) usa UDP 3799 (ou 1700 Cisco).'
  },
  {
    id: 'fc-102',
    itemId: '7.2.2',
    front: 'No 802.1X, qual o EtherType do protocolo EAPoL na camada 2 e quais são suas 4 mensagens básicas?',
    back: 'EtherType 0x888E (camada 2 sem necessidade de IP prévio). Mensagens: EAPoL-Start, EAP-Request/Identity, EAP-Response/Identity e EAPoL-Logoff (além de EAP-Success/Failure após troca EAP).'
  },
  {
    id: 'fc-103',
    itemId: '7.2.3',
    front: 'Compare as portas UDP padrão e a proteção de pacotes entre RADIUS e TACACS+.',
    back: 'RADIUS: UDP 1812 (Auth/Authz) e 1813 (Acct) — legadas 1645/1646; cifra somente o atributo senha. TACACS+: TCP 49; separa Auth/Authz/Acct, autoriza comandos CLI e cifra todo o payload do pacote.'
  },
  {
    id: 'fc-104',
    itemId: '7.2.4',
    front: 'Compare os métodos EAP mais cobrados no 802.1X Enterprise: EAP-TLS vs PEAP-MSCHAPv2 e quando se recorre ao MAB.',
    back: 'EAP-TLS: autenticação mútua por certificado no servidor E no cliente (mais seguro, imune a roubo de hash). PEAP: túnel TLS protege credenciais de usuário/senha com certificado só no servidor. MAB autentica por endereço MAC para impressoras/IoT sem suplicante 802.1X.'
  },
  {
    id: 'fc-105',
    itemId: '7.2.5',
    front: 'Quais 3 atributos RADIUS (RFC 2865/3580) o servidor devolve ao switch/AP para atribuir uma VLAN Dinâmica via 802.1X?',
    back: '1) Tunnel-Type = VLAN (13), 2) Tunnel-Medium-Type = 802 (6) e 3) Tunnel-Private-Group-ID = ID ou nome da VLAN atribuída.'
  },
  {
    id: 'fc-106',
    itemId: '7.2.6',
    front: 'Quantas mensagens formam o 4-Way Handshake WPA2/WPA3, quais chaves são derivadas (PTK vs GTK) e o que protege o 802.11w (PMF)?',
    back: '4 mensagens EAPoL-Key derivam PTK (tráfego unicast por estação) e GTK (broadcast/multicast compartilhada no BSS) a partir da PMK. PMF (802.11w) protege quadros de gerenciamento contra ataques de deauthentication spoofing.'
  },
  {
    id: 'fc-107',
    itemId: '7.2.7',
    front: 'Em redes Wi-Fi de 2,4 GHz, quais são os 3 únicos canais que NÃO se sobrepõem e qual nível típico mínimo de RSSI/SNR exige voz/corporativo?',
    back: 'Canais não sobrepostos em 2,4 GHz: 1, 6 e 11 (20 MHz cada, separados por 5 canais = 25 MHz). Projeto corporativo/VoWLAN típico exige RSSI >= -65 dBm a -67 dBm e SNR >= 20–25 dB.'
  },

  // ==================== EIXO 8 (10 itens restantes) ====================
  {
    id: 'fc-108',
    itemId: '8.1.1',
    front: 'Qual protocolo realiza o registro, estabelecimento e encerramento da chamada VoIP (sinalização) em contraste com o transporte de áudio (mídia)?',
    back: 'Plano de sinalização usa SIP (RFC 3261, portas TCP/UDP 5060 ou TLS 5061) ou H.323/MGCP/SCCP; plano de mídia trafega diretamente ponto a ponto via RTP (e RTCP) sobre UDP.'
  },
  {
    id: 'fc-109',
    itemId: '8.1.2',
    front: 'O que carrega o protocolo SDP (Session Description Protocol) dentro das mensagens SIP INVITE e 200 OK?',
    back: 'SDP negocia parâmetros da sessão de mídia: endereço IP e porta UDP onde cada ponta deseja receber o fluxo RTP (`c=` e `m=`) e a lista de codecs suportados por payload type.'
  },
  {
    id: 'fc-110',
    itemId: '8.1.3',
    front: 'Compare os codecs G.711 e G.729 quanto à taxa de payload, banda na camada Ethernet (20 ms + IP/UDP/RTP + L2) e pontuação MOS típica.',
    back: 'G.711: 64 kbps payload | ~87,2 kbps com IP/UDP/RTP + Ethernet (80 kbps só IP/UDP/RTP) | MOS ~4,1–4,4. G.729: 8 kbps payload | ~31,2 kbps com IP/UDP/RTP + Ethernet (24 kbps só IP/UDP/RTP) | MOS ~3,9.'
  },
  {
    id: 'fc-111',
    itemId: '8.2.1',
    front: 'Em um cluster de telefonia IP (ex.: Cisco CUCM), qual a função exclusiva do nó Publisher vs dos nós Subscribers?',
    back: 'Publisher mantém o banco de dados mestre gravável e administra mudanças de configuração (apenas 1 por cluster); Subscribers mantêm cópias locais e executam o registro de telefones e processamento ativo de chamadas.'
  },
  {
    id: 'fc-112',
    itemId: '8.2.2',
    front: 'Em uma porta de switch configurada com Voice VLAN e Data VLAN, como os quadros Ethernet chegam para o telefone IP e para o computador conectado atrás dele?',
    back: 'Na mesma porta física passam duas VLANs: quadros da Voice VLAN chegam com tag IEEE 802.1Q (prioridade CoS 5) para o telefone IP, e quadros da Data VLAN chegam sem tag (untagged) repassados ao PC.'
  },
  {
    id: 'fc-113',
    itemId: '8.2.3',
    front: 'Quais as marcações padrão recomendadas de DSCP e CoS (802.1p) para mídia VoIP (RTP) e sinalização SIP, e o papel de fila LLQ?',
    back: 'Mídia RTP: DSCP EF (46) / CoS 5, atendida em fila de prioridade estrita (LLQ / Strict Priority) sem descarte antes de dados. Sinalização SIP: DSCP CS3 (24) ou AF31 (26) / CoS 3.'
  },
  {
    id: 'fc-114',
    itemId: '8.2.4',
    front: 'Liste os 6 métodos SIP essenciais e as famílias de códigos de resposta SIP (1xx a 6xx).',
    back: 'Métodos: REGISTER, INVITE, ACK, BYE, CANCEL e OPTIONS. Respostas: 1xx Provisória (180 Ringing), 2xx Sucesso (200 OK), 3xx Redirecionamento, 4xx Erro Cliente (401/404/486 Busy), 5xx Erro Servidor, 6xx Falha Global.'
  },
  {
    id: 'fc-115',
    itemId: '8.2.5',
    front: 'Quantos bytes tem o cabeçalho fixo do RTP, quais campos identificam perda e jitter, e quais os Payload Types padrão de G.711u, G.711a e G.729?',
    back: 'Cabeçalho fixo RTP = 12 bytes sobre UDP. Sequence Number (16 bits) detecta perda/reordenação; Timestamp (32 bits) mede jitter e sincronismo. Payload Types: PT 0 = PCMU (G.711u), PT 8 = PCMA (G.711a), PT 18 = G.729.'
  },
  {
    id: 'fc-116',
    itemId: '8.2.6',
    front: 'Compare os padrões IEEE de PoE (802.3af, 802.3at e 802.3bt) quanto à potência máxima fornecida na porta do switch (PSE) e útil no dispositivo (PD).',
    back: '802.3af (PoE Tipo 1): até 15,4 W PSE / 12,95 W PD. 802.3at (PoE+ Tipo 2): até 30 W PSE / 25,5 W PD. 802.3bt (PoE++ Tipos 3 e 4): até 60 W (51 W PD) e 90 W (71,3 W PD) usando 4 pares.'
  },
  {
    id: 'fc-117',
    itemId: '8.2.7',
    front: 'Qual é a causa mais clássica de "One-Way Audio" (áudio unidirecional) após uma chamada SIP completar com 200 OK e ACK?',
    back: 'NAT assimétrico ou firewall bloqueando RTP UDP: o SDP dentro do pacote SIP anunciou um IP privado interno (RFC 1918) inalcançável pela ponta remota (ou ALG/STUN ausente), ou portas UDP pares do fluxo RTP foram barradas em um sentido.'
  }
];
