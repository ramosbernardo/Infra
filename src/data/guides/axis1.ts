import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_1: Record<string, StudyGuide> = {
  '1.1.1': {
    itemId: '1.1.1',
    highYieldSummary: [
      'Definição e escopo: os modelos em camadas OSI (Open Systems Interconnection — ISO/IEC 7498, 7 camadas) e TCP/IP (4 camadas, RFC 1122/1123) padronizam a comunicação em redes heterogêneas da transmissão física até os serviços ao usuário. Garantem modularidade entre fabricantes, encapsulamento ordenado de protocolos e isolamento estruturado de falhas por camada.',
      'Modelo OSI (7 camadas): 1-Física (meios, sinais, bits), 2-Enlace (quadros, MAC — Media Access Control, LLC — Logical Link Control, FCS — Frame Check Sequence / CRC — Cyclic Redundancy Check), 3-Rede (pacotes, IP — Internet Protocol, roteamento), 4-Transporte (segmentos TCP — Transmission Control Protocol / datagramas UDP — User Datagram Protocol, portas), 5-Sessão (diálogo, checkpoints), 6-Apresentação (codificação, compressão, criptografia) e 7-Aplicação (serviços ao usuário).',
      'Arquitetura TCP/IP (4 camadas): Acesso à Rede (Física + Enlace), Internet (IPv4/IPv6, ICMP — Internet Control Message Protocol, ARP — Address Resolution Protocol, IGMP — Internet Group Management Protocol), Transporte (TCP e UDP) e Aplicação (HTTP — Hypertext Transfer Protocol, DNS — Domain Name System, DHCP — Dynamic Host Configuration Protocol, SMTP — Simple Mail Transfer Protocol, SNMP — Simple Network Management Protocol, SSH — Secure Shell).',
      'Encapsulamento e PDUs (Protocol Data Units): no envio (top-down), cada camada adiciona seu cabeçalho (a camada 2 adiciona também o trailer FCS). Na recepção (bottom-up), cada camada remove e processa seu cabeçalho.',
      'Comunicação TCP orienta-se à conexão: handshake de três vias (SYN — Synchronize -> SYN-ACK — Synchronize-Acknowledgment -> ACK), numeração de sequência/ACK, janela deslizante para controle de fluxo e encerramento gracioso bilateral via FIN/ACK (ou reset abrupto via RST — Reset).',
      'Mapeamento operacional: cabos/SFPs (Small Form-factor Pluggable — L1), switches/VLANs (Virtual Local Area Network)/MAC/STP (Spanning Tree Protocol — L2), roteadores/IP/ICMP/NAT (Network Address Translation — L3), portas/firewalls stateful (L4) e DNS/HTTP/SMTP (L7).',
      'Exemplo operacional: ao acessar o portal clínico `https://prontuario.hosp.local`, os dados da Camada 7 são protegidos por **TLS** (Transport Layer Security — Camada 6/5), segmentados em **TCP** (Camada 4, porta `443`, cabeçalho mínimo `20 B`) após *three-way handshake* (`SYN -> SYN-ACK -> ACK`), encapsulados em **IPv4** (`20 B` mínimo, Camada 3) e em quadros Ethernet com **FCS** (Camada 2). Em captura `tcpdump`, `Flags [S]` / `[S.]` / `[.]` confirma abertura da sessão, enquanto `Flags [R.]` (`RST`) indica corte abrupto por firewall ou porta fechada.'
    ],
    technicalReference: [
      'PDUs: L1 = Bits | L2 = Quadro (Frame) | L3 = Pacote (Packet) | L4 = Segmento (TCP) / Datagrama (UDP) | L5-7 = Dados',
      'TCP Handshake: SYN (seq=x) -> SYN-ACK (seq=y, ack=x+1) -> ACK (ack=y+1) | Encerramento: FIN/ACK bilateral | Abrupto: RST',
      'Correspondência OSI x TCP/IP: OSI 1-2 = Acesso à Rede | OSI 3 = Internet | OSI 4 = Transporte | OSI 5-7 = Aplicação'
    ],
    examTraps: [
      'Bancas trocam Camada 5 Sessão (controle de diálogo/checkpoints) por Camada 6 Apresentação (criptografia, compressão e sintaxe).',
      'ICMP pertence à camada de Rede (Internet), apesar de trafegar encapsulado dentro de pacotes IP (Protocolo 1).',
      'TLS/SSL atua sobre TCP protegendo aplicações (frequentemente associado à camada 6 Apresentação/Sessão no OSI).'
    ],
    keyTerms: [
      'Modelo OSI (7 camadas): referência conceitual dividida em Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação',
      'Arquitetura TCP/IP (4 camadas): modelo prático formado pelas camadas Acesso à Rede, Internet, Transporte e Aplicação',
      'PDU (Protocol Data Unit): unidade de dados de cada camada — bit (L1), quadro (L2), pacote (L3), segmento TCP ou datagrama UDP (L4)',
      'Encapsulamento: adição de cabeçalhos (e trailer FCS na L2) ao descer a pilha no envio, removidos na ordem inversa na recepção',
      'Three-Way Handshake (TCP): negociação inicial de conexão em três etapas — SYN, SYN-ACK e ACK',
      'FIN vs RST (TCP): FIN/ACK encerra a sessão de forma graciosa e bilateral, enquanto RST aborta a conexão imediatamente'
    ],
    cheatSheet: [
      { topic: 'PDUs por camada OSI', facts: 'L1 bits · L2 quadro (+ FCS) · L3 pacote · L4 segmento TCP / datagrama UDP · L5-7 dados' },
      { topic: 'OSI × TCP/IP (4 camadas)', facts: 'OSI 1-2 -> Acesso à Rede · OSI 3 -> Internet · OSI 4 -> Transporte · OSI 5-7 -> Aplicação' },
      { topic: 'Sessão (L5) × Apresentação (L6)', facts: 'L5 controla diálogo e checkpoints × L6 trata criptografia, compressão e sintaxe' },
      { topic: 'TCP 3-way e encerramento', facts: 'SYN -> SYN-ACK -> ACK · fim gracioso FIN/ACK bilateral × abrupto via RST' },
      { topic: 'Cabeçalhos base', facts: 'TCP 20 B mínimo × UDP 8 B fixo · IPv4 20 B mínimo × IPv6 40 B fixo · ICMP = IP 1' }
    ]
  },
  '1.1.2': {
    itemId: '1.1.2',
    highYieldSummary: [
      'Definição e escopo: o endereçamento IPv4 (32 bits, RFC — Request for Comments — 791, endereços privados RFC 1918, CIDR RFC 4632) e IPv6 (128 bits, RFC 8200) identifica logicamente interfaces na Camada 3 para encaminhamento entre redes. O dimensionamento por sub-redes (CIDR/VLSM) e o padrão `/64` em IPv6 otimizam o espaço de endereços e contêm domínios de broadcast.',
      'IPv4 (32 bits): blocos privados RFC 1918 não roteáveis na Internet são 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0–172.31.255.255) e 192.168.0.0/16.',
      'Endereços especiais IPv4: Loopback (127.0.0.0/8), Link-Local/APIPA (Automatic Private IP Addressing — 169.254.0.0/16 quando falha DHCP), CGNAT (Carrier-Grade NAT — RFC 6598, 100.64.0.0/10), Multicast (224.0.0.0/4) e Broadcast (255.255.255.255).',
      'CIDR e VLSM: CIDR (Classless Inter-Domain Routing) e VLSM (Variable Length Subnet Mask) adotam hosts válidos = 2^(bits_host) - 2 (rede e broadcast). Exceção RFC 3021: /31 em links ponto a ponto usa os 2 endereços; /32 representa rota de host único.',
      'IPv6 (128 bits, 8 hextetos hexadecimais): elimina broadcast, operando com Unicast (um-para-um), Multicast (um-para-muitos seletivo, ff00::/8) e Anycast (mesmo endereço em múltiplos nós, roteado ao mais próximo).',
      'Prefixos e abreviação IPv6: Global Unicast (2000::/3), ULA (Unique Local Address — fc00::/7), Link-Local (fe80::/10 — obrigatório em toda interface) e Loopback (::1/128). "::" comprime blocos zerados no máximo 1 vez.',
      'Exemplo operacional: para atender uma clínica com `50` estações na sub-rede `10.20.4.0/26` (`255.255.255.192`), calculam-se `2^(32−26) − 2 = 62` hosts válidos (`10.20.4.1` a `10.20.4.62`, broadcast `10.20.4.63`), reservando `10.20.4.64/31` (`2` IPs utilizáveis pela RFC 3021) ao enlace ponto a ponto de saída. Em **IPv6**, o endereço `2001:0db8:0000:0010:0000:0000:0000:0001/64` abrevia-se para `2001:db8:0:10::1/64` (zeros à esquerda removidos e `::` usado uma única vez), coexistindo com `fe80::/10` na mesma interface.'
    ],
    technicalReference: [
      'Máscaras CIDR IPv4: /24=255.255.255.0 (254) | /25=.128 (126) | /26=.192 (62) | /27=.224 (30) | /28=.240 (14) | /29=.248 (6) | /30=.252 (2)',
      'Prefixos IPv6: ::1/128 (Loopback) | fe80::/10 (Link-Local) | fc00::/7 (ULA) | 2000::/3 (Global) | ff00::/8 (Multicast)',
      'NDP (ICMPv6 133-136) substitui ARP, Router Discovery e detecção de duplicidade (DAD).'
    ],
    examTraps: [
      '172.32.0.1 NÃO é IP privado (o bloco /12 encerra em 172.31.255.255).',
      'Em IPv6 NÃO existe broadcast nem máscara decimal pontuada; LANs usam padrão /64.',
      'Usar "::" duas vezes no mesmo endereço IPv6 torna o endereço inválido.'
    ],
    keyTerms: [
      'Endereços Privados (RFC 1918): blocos IPv4 não roteáveis na Internet pública — 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16',
      'APIPA (169.254.0.0/16): endereço link-local IPv4 autoatribuído pelo host quando nenhum servidor DHCP responde',
      'CIDR / VLSM: alocação de prefixos IP de tamanho variável para otimizar sub-redes com hosts válidos = 2^(32−n) − 2',
      'RFC 3021 (/31): exceção que permite usar os dois endereços de uma máscara /31 em enlaces IPv4 ponto a ponto',
      'IPv6 Link-Local: prefixo fe80::/10 não roteável entre redes, obrigatório em toda interface IPv6 ativa',
      'Anycast (IPv6): mesmo endereço atribuído a múltiplos nós, com pacotes entregues ao destino topologicamente mais próximo'
    ],
    cheatSheet: [
      { topic: 'IPv4', facts: '32 bits · privados 10/8, 172.16/12, 192.168/16' },
      { topic: 'Endereços especiais', facts: '127/8 loopback · 169.254/16 APIPA · 100.64/10 CGNAT' },
      { topic: 'CIDR/VLSM', facts: 'hosts = 2^(32−n) − 2 · /30 = 2 hosts · /31 em ponto a ponto (RFC 3021)' },
      { topic: 'IPv6', facts: '128 bits · fe80::/10 link-local · fc00::/7 ULA · 2000::/3 global' },
      { topic: 'Abreviação IPv6', facts: 'zeros à esquerda omitidos · "::" só uma vez por endereço' }
    ]
  },
  '1.1.3': {
    itemId: '1.1.3',
    highYieldSummary: [
      'Definição e escopo: redes LAN (Local Area Network — IEEE 802.3/802.11) e WAN (Wide Area Network) distinguem-se por alcance físico, latência e gestão de enlaces. Em backbones de operadoras e redes corporativas distribuídas, o MPLS (Multiprotocol Label Switching — RFC 3031) atua entre L2 e L3 para encaminhar pacotes por rótulos fixos com isolamento lógico e engenharia de tráfego.',
      'LAN (Local Area Network): alta velocidade (Ethernet 1–100 Gbps, Wi-Fi — rede local sem fio IEEE 802.11), baixa latência e domínio administrativo próprio em campus/datacenter.',
      'WAN (Wide Area Network): interliga LANs geograficamente distribuídas via operadoras (links dedicados, fibra apagada, MPLS, banda larga/VPN — Virtual Private Network — ou SD-WAN — Software-Defined WAN).',
      'MPLS (Multiprotocol Label Switching): encaminha pacotes por rótulos fixos de 32 bits entre L2 (Camada 2) e L3 (Camada 3 — "camada 2.5"), acelerando o núcleo da operadora.',
      'Arquitetura MPLS: roteadores de borda LER (Label Edge Router / PE — Provider Edge) impõem/removem rótulos (PUSH/POP), enquanto roteadores de núcleo LSR (Label Switch Router / P — Provider) trocam rótulos (SWAP) ao longo do caminho unidirecional LSP (Label Switched Path).',
      'Serviços corporativos MPLS: L3VPN (Layer 3 VPN — isolamento lógico por VRF — Virtual Routing and Forwarding — com MP-BGP — Multiprotocol Border Gateway Protocol), Engenharia de Tráfego (MPLS-TE via RSVP-TE — Resource Reservation Protocol – Traffic Engineering) e QoS (Quality of Service) via 3 bits TC/EXP (Traffic Class / Experimental).',
      'Exemplo operacional: na interligação de uma filial ao datacenter hospitalar via **MPLS L3VPN**, o roteador **LER/PE** realiza `PUSH` do rótulo de transporte (sinalizado via **LDP** — Label Distribution Protocol, `TCP/UDP 646`) e do rótulo de serviço **VRF** (trocado por **MP-BGP**), mantendo as rotas isoladas sem que o núcleo **LSR/P** leia a tabela IP do cliente. Como o **LSP** é unidirecional e MPLS não cifra dados, aplica-se **IPsec** sobreposto para sigilo e marcação prioritária nos `3 bits` **TC/EXP**.'
    ],
    technicalReference: [
      'Cabeçalho MPLS (32 bits): Label (20 bits) | TC/EXP QoS (3 bits) | Bottom of Stack S (1 bit) | TTL (8 bits)',
      'Operações: PUSH (LER entrada) -> SWAP (LSR núcleo) -> POP/PHP (saída) | Sinalização: LDP (TCP/UDP 646) ou RSVP-TE.'
    ],
    examTraps: [
      'Roteadores P (LSR) do núcleo MPLS encaminham somente pelo rótulo sem conhecer a tabela IP completa dos clientes.',
      'MPLS isola logicamente por VRF, mas NÃO criptografa pacotes — sigilo sobre MPLS exige IPsec sobreposto.',
      'LSP é unidirecional: ida e volta utilizam dois LSPs independentes.'
    ],
    keyTerms: [
      'LAN vs WAN: rede local de alta velocidade e domínio próprio (1–100 Gbps) versus rede de longa distância sobre enlaces de operadora',
      'MPLS (Camada 2.5): comutação por rótulos fixos de 32 bits (20b Label, 3b TC/EXP, 1b S, 8b TTL) entre L2 e L3',
      'LER (Label Edge Router): roteador de borda (PE) que insere (PUSH) rótulos na entrada e os remove (POP/PHP) na saída do domínio MPLS',
      'LSR (Label Switch Router): roteador de núcleo (P) que apenas troca rótulos (SWAP) sem consultar a tabela IP dos clientes',
      'LSP (Label Switched Path): caminho unidirecional percorrido pelos pacotes rotulados no núcleo MPLS (exige dois LSPs para ida e volta)',
      'VRF (Virtual Routing and Forwarding): instância lógica que isola tabelas de rotas por cliente em redes MPLS L3VPN (sem criptografar)'
    ],
    cheatSheet: [
      { topic: 'LAN × WAN', facts: '1–100 Gbps baixa latência, domínio próprio × links operadora, fibra, MPLS ou SD-WAN' },
      { topic: 'Cabeçalho MPLS (32 bits)', facts: 'Label 20 bits · TC/EXP QoS 3 bits · S (Bottom of Stack) 1 bit · TTL 8 bits' },
      { topic: 'Operações e nós MPLS', facts: 'LER/PE: PUSH na entrada e POP/PHP na saída · LSR/P (núcleo): SWAP pelo rótulo' },
      { topic: 'LSP e sinalização', facts: 'LSP é unidirecional (ida e volta = 2 LSPs) · LDP (TCP/UDP 646) ou RSVP-TE' },
      { topic: 'L3VPN e sigilo', facts: 'VRF + MP-BGP isolam rotas logicamente · MPLS não criptografa (exige IPsec sobreposto)' }
    ]
  },
  '1.1.4': {
    itemId: '1.1.4',
    highYieldSummary: [
      'Definição e escopo: a comutação em Camada 2 (Ethernet IEEE 802.3/802.1D) e o roteamento em Camada 3 (RFC 791/1812) separam o encaminhamento local de quadros por endereço MAC do encaminhamento entre sub-redes distintas por prefixos IP. Essa divisão delimita domínios de colisão e broadcast e estabelece critérios determinísticos para seleção do melhor caminho na tabela de rotas.',
      'Comutação (Switching L2): switches consultam MAC de destino na tabela CAM (Content Addressable Memory)/MAC; realizam flooding (inundação) para MAC desconhecido, broadcast e multicast não filtrado na mesma VLAN.',
      'Aprendizado L2 e domínios: aprendem o MAC de ORIGEM associado à porta de entrada; cada porta é um domínio de colisão isolado, mas todas na VLAN compartilham o mesmo domínio de broadcast.',
      'Roteamento (Routing L3): roteadores interligam sub-redes/VLANs distintas encaminhando pacotes IP até o próximo salto (next-hop) e decrementando o TTL (Time to Live).',
      'Critério de decisão de rota: 1º) Longest Prefix Match (máscara mais específica); 2º) Menor Distância Administrativa (AD — Administrative Distance); 3º) Menor Métrica no mesmo protocolo.',
      'Roteamento Estático vs Dinâmico: roteamento estático (manual, previsível, ideal para redes stub e rota padrão 0.0.0.0/0) versus dinâmico (OSPF — Open Shortest Path First, EIGRP — Enhanced Interior Gateway Routing Protocol, BGP — Border Gateway Protocol — converge após falhas).',
      'Exemplo operacional: um roteador possui na tabela (`show ip route`) uma rota estática `10.10.0.0/24` (**AD** `1`) e uma rota **OSPF** `10.10.0.0/25` (**AD** `110`); ao encaminhar pacote para `10.10.0.50`, escolhe a rota **OSPF** porque **Longest Prefix Match** (`/25` > `/24`) vence antes da **AD**. A cada salto L3, os IPs origem/destino mantêm-se intactos (sem NAT), o **TTL** decrementa em `1` e os endereços MAC de origem e destino são reescritos para o enlace seguinte.'
    ],
    technicalReference: [
      'Decisão do roteador: 1) Longest Prefix Match -> 2) Menor Distância Administrativa -> 3) Menor Métrica',
      'AD padrão: Conectada=0 | Estática=1 | eBGP=20 | EIGRP=90 | OSPF=110 | IS-IS=115 | RIP=120 | iBGP=200'
    ],
    examTraps: [
      'Longest Prefix Match SEMPRE vence antes da Distância Administrativa (um /25 RIP AD 120 vence um /24 estático AD 1).',
      'Ao cruzar roteadores, os IPs origem/destino mantêm-se (salvo NAT), mas os MACs são reescritos a cada salto.',
      'Tabela MAC aprende pelo MAC de ORIGEM e encaminha pelo MAC de DESTINO.'
    ],
    keyTerms: [
      'Tabela MAC/CAM: memória do switch L2 que aprende endereços MAC pela origem e encaminha quadros pelo MAC de destino',
      'Flooding (Inundação L2): replicação de quadro para todas as portas da mesma VLAN (exceto a de entrada) em broadcast ou unicast desconhecido',
      'Longest Prefix Match: critério prioritário de roteamento que escolhe a rota com a máscara de sub-rede mais específica antes da AD',
      'Distância Administrativa (AD): índice de confiabilidade da origem da rota — Conectada 0, Estática 1, eBGP 20, EIGRP 90, OSPF 110, RIP 120, iBGP 200',
      'TTL (Time to Live): contador no cabeçalho IP decrementado em 1 a cada salto por roteador para evitar loops infinitos de camada 3'
    ],
    cheatSheet: [
      { topic: 'Comutação L2 (CAM)', facts: 'aprende MAC de ORIGEM · encaminha por MAC de DESTINO · flooding se unknown unicast' },
      { topic: 'Domínios L2', facts: 'cada porta do switch = 1 domínio de colisão × mesma VLAN = 1 domínio de broadcast' },
      { topic: 'Ordem de decisão L3', facts: '1) Longest Prefix Match -> 2) Menor Distância Administrativa (AD) -> 3) Menor Métrica' },
      { topic: 'Distância Administrativa (AD)', facts: 'Conectada 0 · Estática 1 · eBGP 20 · EIGRP 90 · OSPF 110 · IS-IS 115 · RIP 120 · iBGP 200' },
      { topic: 'Salto a salto L3', facts: 'MAC origem/destino mudam a cada roteador · IP preserva-se (sem NAT) · TTL decrementa 1' }
    ]
  },
  '1.2.1': {
    itemId: '1.2.1',
    highYieldSummary: [
      'Definição e escopo: a arquitetura TCP/IP reúne o protocolo de rede IP (RFC 791), os protocolos de transporte TCP (RFC 793/9293) e UDP (RFC 768) e os protocolos auxiliares ICMP (RFC 792), ARP (RFC 826) e IGMP. Resolve a multiplexação de aplicações por portas, a escolha entre confiabilidade e baixa latência, o controle de fragmentação por MTU e a resolução de endereços na rede local.',
      'TCP: orientado à conexão, entrega confiável e ordenada via sequência/ACK (Acknowledgment), retransmissão, janela deslizante (controle de fluxo) e controle de congestionamento.',
      'UDP: sem conexão, sem garantia de entrega/ordem, cabeçalho fixo de 8 bytes (contra mínimo de 20 bytes do TCP), ideal para DNS, DHCP, SNMP, NTP (Network Time Protocol) e VoIP (Voice over IP) / RTP (Real-time Transport Protocol).',
      'Portas (0–65535): Well-Known (0–1023, portas bem conhecidas), Registered (1024–49151) e Efêmeras (49152–65535). Um socket identifica um endpoint (IP + porta), enquanto uma conexão ativa é definida pela 5-tupla (protocolo, IP origem, porta origem, IP destino, porta destino).',
      'IP (Internet): entrega best effort (melhor esforço) sem conexão; fragmenta segundo o MTU (Maximum Transmission Unit — 1500B Ethernet) se a flag DF (Don\'t Fragment) = 0.',
      'Protocolos auxiliares: ARP resolve IP->MAC na LAN; ICMP transporta diagnóstico/erros; IGMP gerencia grupos multicast IPv4.',
      'Exemplo operacional: em um servidor corporativo Linux, o comando `ss -tulnp` lista sockets em escuta como `0.0.0.0:22` (**SSH**) e `0.0.0.0:443` (**HTTPS**), enquanto cada sessão estabelecida distingue-se pela **5-tupla** completa. Se um túnel VPN reduzir o **MTU** para `1420 B` e um firewall bloquear **ICMP** Type `3` Code `4` (*Fragmentation Needed*) para pacotes com `DF=1`, o **PMTUD** (Path MTU Discovery) falha e páginas HTTPS travam após o handshake.'
    ],
    technicalReference: [
      'Portas chaves: FTP 20/21 | SSH 22 | Telnet 23 | SMTP 25/587 | DNS 53 | DHCP 67/68 | TFTP 69 | HTTP 80 | Kerberos 88 | POP3 110 | NTP 123 | IMAP 143 | SNMP 161/162 | BGP 179 | LDAP 389/636 | HTTPS 443 | Syslog 514 | RDP 3389',
      'Cabeçalho UDP (8B): Porta Origem (2B) + Porta Destino (2B) + Comprimento (2B) + Checksum (2B)'
    ],
    examTraps: [
      'TFTP usa UDP 69; FTP usa TCP 20/21; SSH/SFTP usam TCP 22.',
      'TCP NÃO serve para voz/vídeo em tempo real pois retransmissões introduzem atraso e travamento severos.',
      'Flag DF=1 com bloqueio de ICMP Type 3 Code 4 quebra Path MTU Discovery causando travamento silencioso de conexões.'
    ],
    keyTerms: [
      'TCP vs UDP: TCP provê entrega confiável e ordenada com cabeçalho mínimo de 20 B; UDP é sem conexão com cabeçalho fixo de 8 B',
      'Janela Deslizante (TCP): mecanismo de controle de fluxo que ajusta dinamicamente quantos bytes o transmissor envia antes de aguardar ACK',
      'Portas Bem Conhecidas (0–1023): faixa reservada a serviços padrão (SSH 22, DNS 53, DHCP 67/68, HTTP 80, HTTPS 443), abaixo de Registered (1024–49151) e Efêmeras (49152–65535)',
      'Socket e 5-Tupla: socket identifica um endpoint (IP + porta), enquanto uma conexão ativa é definida pela 5-tupla (protocolo, IP/porta de origem e destino)',
      'MTU (Maximum Transmission Unit): tamanho máximo de pacote IP aceito pelo enlace sem fragmentação (1500 bytes no Ethernet padrão)',
      'Best Effort (IP): modelo de entrega sem garantia prévia de banda, ordem ou entrega, exigindo controle na camada de transporte ou aplicação'
    ],
    cheatSheet: [
      { topic: 'TCP × UDP', facts: 'TCP: janela deslizante, ACK e retransmissão × UDP: sem conexão, sem ordem (RTP/DNS/DHCP)' },
      { topic: 'Faixas de portas (0–65535)', facts: 'Well-Known 0–1023 · Registered 1024–49151 · Efêmeras 49152–65535 · socket = IP + porta · conexão = 5-tupla (protocolo, IP/porta origem, IP/porta destino)' },
      { topic: 'Portas padrão (L4)', facts: 'FTP 20/21 · SSH 22 · Telnet 23 · SMTP 25 · DNS 53 · DHCP 67/68 · TFTP 69 · HTTP 80' },
      { topic: 'Mais portas cobradas', facts: 'NTP 123 · SNMP 161/162 · BGP 179 · LDAP 389 · HTTPS 443 · RDP 3389' },
      { topic: 'IP, MTU e auxiliares', facts: 'Ethernet MTU 1500 B · DF=1 + bloqueio ICMP 3/4 quebra PMTUD · ARP (IP->MAC), IGMP (multicast)' }
    ]
  },
  '1.2.2': {
    itemId: '1.2.2',
    highYieldSummary: [
      'Definição e escopo: a operação do IPv6 (RFC 8200) e os mecanismos de transição IPv4/IPv6 (Dual Stack, tunelamento e NAT64/DNS64) permitem migração gradual mantendo interoperabilidade. A autoconfiguração na LAN apoia-se em NDP (RFC 4861), SLAAC (RFC 4862) e DHCPv6 (RFC 8415) em sub-redes padronizadas `/64`.',
      'Transição IPv4/IPv6: Dual Stack (pilha dupla simultânea — recomendada), Tunelamento (6in4, GRE — Generic Routing Encapsulation, Teredo) e Tradução (NAT64 — Network Address Translation IPv6-para-IPv4 + DNS64 — síntese de registros AAAA).',
      'SLAAC (Stateless Address Autoconfiguration — RFC 4862): gera Link-Local fe80::/10, valida unicidade com DAD (Duplicate Address Detection), envia RS (Router Solicitation) e recebe RA (Router Advertisement) com prefixo /64 para montar IP global (EUI-64 — Extended Unique Identifier — ou Privacy RFC 4941).',
      'DHCPv6: opera em UDP 546 (cliente) e UDP 547 (servidor) em modo Stateless (flags RA M=0 [Managed], O=1 [Other]: entrega só DNS/opções) ou Stateful (M=1: entrega IPv6 completo e registra lease).',
      'Planejamento de sub-redes: LANs exigem /64 (para SLAAC); sites recebem /48 ou /56; links ponto a ponto usam /127 (RFC 6164) ou /64.',
      'NDP (Neighbor Discovery Protocol): usa ICMPv6 NS (Neighbor Solicitation) / NA (Neighbor Advertisement) via multicast Solicited-Node substituindo o broadcast ARP do IPv4.',
      'Exemplo operacional: ao ingressar em uma VLAN com prefixo `2001:db8:10:20::/64` e interface MAC `00:1a:2b:3c:4d:5e`, o host valida unicidade via **DAD** (`NS` em multicast), recebe um **RA** (`ICMPv6 134`, roteadores `ff02::2` / todos nós `ff02::1`) com flags `M=0, O=1`, configura o IP por **SLAAC** e obtém apenas servidores DNS via **DHCPv6 Stateless** (`UDP 546/547`). Pelo algoritmo **EUI-64** (inserção de `FFFE` e inversão do 7º bit `U/L`), o identificador de interface gerado é `021a:2bff:fe3c:4d5e`.'
    ],
    technicalReference: [
      'Flags RA (ICMPv6 134): M=0,O=0 -> SLAAC puro (+ RDNSS) | M=0,O=1 -> SLAAC + DHCPv6 Stateless | M=1 -> DHCPv6 Stateful',
      'Multicasts IPv6: ff02::1 (todos os nós) | ff02::2 (todos roteadores) | Portas DHCPv6: UDP 546 (cli) / 547 (srv)'
    ],
    examTraps: [
      'DHCPv6 Stateful NÃO entrega o gateway padrão — o roteador padrão vem sempre pelo Router Advertisement (RA).',
      'NAT64 + DNS64 permitem clientes exclusivamente IPv6 acessarem servidores legados exclusivamente IPv4.',
      'EUI-64 insere "FFFE" no meio do MAC 48b e inverte o 7º bit (bit U/L).'
    ],
    keyTerms: [
      'Dual Stack: estratégia recomendada de transição IPv4/IPv6 na qual interfaces e serviços operam simultaneamente com as duas pilhas',
      'SLAAC (Stateless Address Autoconfiguration): autoconfiguração IPv6 via Router Advertisement (/64), controlada pelas flags M (endereço) e O (opções) do ICMPv6 134',
      'DHCPv6 (UDP 546/547): atribui opções (Stateless, M=0/O=1) ou endereços (Stateful, M=1) na porta 546 cliente / 547 servidor, sem entregar gateway padrão',
      'NAT64 / DNS64: mecanismo de tradução que permite a hosts exclusivamente IPv6 acessarem servidores exclusivamente IPv4',
      'EUI-64: algoritmo que deriva os 64 bits de interface IPv6 a partir do MAC de 48 bits inserindo FFFE no meio e invertendo o 7º bit (U/L)',
      'DAD (Duplicate Address Detection): verificação via NDP (Neighbor Solicitation) que garante a unicidade de um endereço IPv6 antes de ativá-lo na interface'
    ],
    cheatSheet: [
      { topic: 'Mecanismos de transição', facts: 'Dual Stack (preferido) · Tunelamento (6in4, GRE) · Tradução (NAT64 + DNS64 para v6->v4)' },
      { topic: 'SLAAC e Flags RA (ICMPv6 134)', facts: 'M=0,O=0 SLAAC puro · M=0,O=1 SLAAC + DHCPv6 Stateless · M=1 DHCPv6 Stateful' },
      { topic: 'DHCPv6 (UDP 546/547)', facts: 'cli 546 / srv 547 · Stateful NÃO entrega gateway padrão (vem sempre no RA)' },
      { topic: 'Prefixos e EUI-64', facts: 'LAN /64 · site /48 ou /56 · p2p /127 (RFC 6164) · EUI-64 insere FFFE e inverte 7º bit (U/L)' },
      { topic: 'NDP e Multicasts', facts: 'ICMPv6 133–136 (RS/RA/NS/NA + DAD) · ff02::1 todos os nós · ff02::2 roteadores' }
    ]
  },
  '1.2.3': {
    itemId: '1.2.3',
    highYieldSummary: [
      'Definição e escopo: VLANs (Virtual Local Area Networks — padrão IEEE 802.1Q) segmentam logicamente switches físicos de Camada 2 em múltiplos domínios de broadcast independentes. Isolam tráfego por função ou segurança, limitam o alcance de ARP/broadcast e exigem roteamento L3 para comunicação entre segmentos distintos.',
      'VLAN (IEEE 802.1Q): segmenta logicamente um switch físico em múltiplos domínios de broadcast isolados na Camada 2, aumentando segurança e contenção de tráfego.',
      'Faixa de IDs: 1 a 4094 (12 bits; 0 e 4095 reservados). Boas práticas evitam manter usuários ou gerência na VLAN 1 padrão.',
      'Porta Access: atende dispositivos finais em 1 VLAN de dados (e opcionalmente 1 Voice VLAN — VLAN dedicada de voz), enviando quadros sem tag (untagged).',
      'Comunicação Inter-VLAN: dispositivos em VLANs distintas não comunicam em L2; exigem roteamento L3 via Switch Multilayer (SVIs — Switch Virtual Interfaces) ou Router-on-a-Stick (subinterfaces 802.1Q).',
      'Hardening L2: portas ociosas em shutdown alocadas em VLAN "blackhole" sem roteamento e restrição explícita de VLANs nos trunks.',
      'Exemplo operacional: para isolar equipamentos biomédicos na **VLAN 20** (`10.20.0.0/24`), atribuem-se as portas de acesso com `switchport mode access` e `switchport access vlan 20`, configurando o gateway em uma **SVI** (`interface vlan 20`, IP `10.20.0.1/24`) no switch L3 ou em subinterface `encapsulation dot1Q 20` (*Router-on-a-Stick*). Portas não utilizadas recebem `shutdown` e ficam alocadas em VLAN `999` (*blackhole* sem SVI), evitando tráfego de usuários na **VLAN 1** padrão.'
    ],
    technicalReference: [
      'Switch Access: switchport mode access -> switchport access vlan 20',
      'Switch L3 SVI: interface vlan 20 -> ip address 10.20.0.1 255.255.255.0 | Router-on-a-Stick: encapsulation dot1Q 20'
    ],
    examTraps: [
      'Dois switches ligados por portas Access em VLANs diferentes misturam os quadros sem erro de tag pois ambos saem untagged.',
      'VLANs distintas exigem dispositivo L3 (SVI ou roteador) para trocar tráfego entre si.'
    ],
    keyTerms: [
      'VLAN 1 (padrão): VLAN nativa e inicial de fábrica nos switches (faixa 1–4094), que deve ser evitada para dados de usuários e gerência',
      'Domínio de Broadcast: escopo L2 onde quadros broadcast se propagam, segmentado logicamente em domínios menores pelo uso de VLANs',
      'Porta Access: interface de switch associada a 1 VLAN de dados (e opcionalmente 1 Voice VLAN) que envia e recebe quadros sem tag (untagged)',
      'SVI (Switch Virtual Interface): interface lógica L3 (interface vlan X) em switch multilayer usada como gateway para roteamento inter-VLAN',
      'Router-on-a-Stick: roteamento inter-VLAN feito por um roteador externo conectado via trunk com subinterfaces lógicas (encapsulation dot1Q)'
    ],
    cheatSheet: [
      { topic: 'Faixa de IDs (802.1Q)', facts: '12 bits = 1–4094 (0 e 4095 reservados) · evitar usuários e gerência na VLAN 1 padrão' },
      { topic: 'Porta Access', facts: '1 VLAN de dados (+ opcional Voice VLAN) · quadros trafegam sem tag (untagged)' },
      { topic: 'Comunicação Inter-VLAN', facts: 'exige camada 3: Switch Multilayer (SVI `interface vlan X`) ou Router-on-a-Stick (`dot1Q`)' },
      { topic: 'Erro Access × Access', facts: 'dois switches ligados em portas Access de VLANs distintas misturam quadros sem erro de tag' },
      { topic: 'Hardening de portas', facts: 'portas ociosas em `shutdown` e VLAN blackhole sem SVI · restringir VLANs nos trunks' }
    ]
  },
  '1.2.4': {
    itemId: '1.2.4',
    highYieldSummary: [
      'Definição e escopo: enlaces *trunk* (IEEE 802.1Q) multiplexam quadros de várias VLANs em uma única ligação física entre switches, roteadores, firewalls e servidores de virtualização na Camada 2. Exigem controle da etiqueta de 4 bytes, alinhamento rigoroso da VLAN nativa e bloqueio de negociação automática para mitigar ataques de *VLAN Hopping*.',
      'Porta Trunk (IEEE 802.1Q): transporta tráfego de múltiplas VLANs simultaneamente entre switches, roteadores, firewalls e hipervisores em um enlace único.',
      'Estrutura da Tag 802.1Q: insere 4 bytes com TPID (Tag Protocol Identifier) 0x8100, PCP (Priority Code Point — 3 bits QoS CoS, Class of Service), DEI (Drop Eligible Indicator — 1 bit) e VID (VLAN Identifier — 12 bits = ID da VLAN, 1–4094), elevando o quadro Ethernet até 1522 bytes e recalculando o FCS.',
      'VLAN Nativa: única VLAN que trafega SEM etiqueta (untagged) no trunk (padrão VLAN 1); deve coincidir exatamente nos dois lados e apontar para VLAN não utilizada.',
      'Negociação DTP (Dynamic Trunking Protocol): protocolo proprietário Cisco (dynamic auto/desirable); boa prática é fixar trunk manual e desativar DTP (switchport nonegotiate).',
      'Ataques em Trunks: VLAN Hopping (Switch Spoofing via DTP ou Double Tagging explorando a Native VLAN) — mitigado com modo fixo + switchport nonegotiate + VLAN nativa sem uso (ou tagueada).',
      'Exemplo operacional: em um enlace entre switches de distribuição transportando as VLANs `10` e `20`, aplica-se `switchport mode trunk`, `switchport trunk native vlan 999`, `switchport trunk allowed vlan 10,20` e `switchport nonegotiate`, evitando que portas `dynamic auto` formem trunk indevidamente. O comando `show interfaces trunk` confirma as VLANs permitidas e a ausência de *Native VLAN mismatch*, mantendo quadros tagueados até `1522 B`.'
    ],
    technicalReference: [
      'Tag 802.1Q (4B): TPID (0x8100, 16b) + PCP (3b) + DEI (1b) + VID (12b) -> quadro padrão vai de 1518B a 1522B.',
      'Config segura: switchport mode trunk | switchport trunk native vlan 999 | switchport trunk allowed vlan 10,20 | switchport nonegotiate'
    ],
    examTraps: [
      'Native VLAN mismatch entre dois switches vaza tráfego entre VLANs distintas e gera alertas de STP/CDP.',
      'DTP "dynamic auto" em ambas as pontas NÃO forma trunk (ambas ficam passivas).',
      'ISL é protocolo legado proprietário Cisco sem Native VLAN; 802.1Q é o padrão aberto IEEE.'
    ],
    keyTerms: [
      'IEEE 802.1Q: padrão aberto de encapsulamento trunk que insere tag de 4 bytes (PCP 3b, DEI 1b, VID 12b) elevando o quadro Ethernet até 1522 bytes',
      'TPID 0x8100: identificador de protocolo de 16 bits no cabeçalho 802.1Q que sinaliza a presença de uma tag de VLAN no quadro',
      'Native VLAN: única VLAN cujo tráfego trafega sem etiqueta (untagged) em um link trunk 802.1Q, devendo coincidir nas duas extremidades',
      'DTP (Dynamic Trunking Protocol): protocolo proprietário Cisco de negociação de trunk (auto+auto não sobe), desativado na prática com switchport nonegotiate',
      'VLAN Hopping: ataque L2 por Switch Spoofing (via DTP) ou Double Tagging (via VLAN nativa), mitigado com trunk fixo, nonegotiate e VLAN nativa sem uso',
      'ISL (Inter-Switch Link): protocolo legado proprietário da Cisco que encapsula o quadro inteiro sem conceito de VLAN nativa'
    ],
    cheatSheet: [
      { topic: 'Tag IEEE 802.1Q (4 bytes)', facts: 'TPID 0x8100 (16b) · PCP/CoS (3b) · DEI (1b) · VID (12b: 1–4094) · quadro vai até 1522 B' },
      { topic: 'VLAN Nativa', facts: 'única VLAN untagged no trunk (padrão VLAN 1) · mismatch entre pontas vaza tráfego' },
      { topic: 'DTP (Cisco) × Trunk fixo', facts: 'auto+auto NÃO forma trunk · boa prática: `switchport mode trunk` + `switchport nonegotiate`' },
      { topic: 'VLAN Hopping', facts: 'Switch Spoofing (via DTP) × Double Tagging (via VLAN nativa) · mitigar: nonegotiate/trunk fixo + VLAN nativa sem uso (ou tagueada)' },
      { topic: '802.1Q × ISL', facts: '802.1Q padrão aberto IEEE com Native VLAN × ISL legado proprietário Cisco (encapsula quadro)' }
    ]
  },
  '1.2.5': {
    itemId: '1.2.5',
    highYieldSummary: [
      'Definição e escopo: os protocolos da família Spanning Tree — STP clássico (IEEE 802.1D), RSTP (Rapid STP — IEEE 802.1w) e MSTP (Multiple STP — IEEE 802.1s) — eliminam loops físicos de Camada 2 em topologias redundantes bloqueando enlaces alternativos via troca de BPDUs (Bridge Protocol Data Units). Previnem tempestades de broadcast e corrupção da tabela MAC preservando failover automático.',
      'STP (IEEE 802.1D): bloqueia enlaces redundantes L2 para impedir loops físicos, tempestades de broadcast e instabilidade de tabela MAC usando BPDUs.',
      'Eleição STP: 1) Menor Bridge ID (Prioridade padrão 32768 em passos de 4096 + MAC) define a Root Bridge; 2) Menor custo até a Root (1 Gbps = 20.000 no método longo / 4 no curto) define a Root Port; 3) Designated Port por segmento; demais portas ficam bloqueadas.',
      'Estados 802.1D (~30–50s): Blocking -> Listening (15s) -> Learning (15s) -> Forwarding (e Disabled). Max Age=20s, Hello=2s.',
      'RSTP (IEEE 802.1w): convergência rápida (< 2s) com apenas 3 estados (Discarding, Learning, Forwarding) e papéis Alternate/Backup Port.',
      'Proteções STP: PortFast/Edge Port (acesso direto para Forwarding sem desligar STP), BPDU Guard (err-disable se receber BPDU em porta PortFast) e Root Guard (protege o papel de Root Bridge).',
      'Exemplo operacional: em uma rede corporativa a `1 Gbps`, configura-se o switch core com `spanning-tree vlan 1-100 priority 4096` para garantir eleição determinística como **Root Bridge** e aplicam-se `spanning-tree portfast` e `spanning-tree bpduguard enable` nas portas de estações. Se um switch não autorizado for conectado à mesa de um usuário, a primeira **BPDU** recebida coloca a porta em `err-disable`, enquanto falhas nos uplinks convergem em `< 2 s` com **RSTP (`802.1w`)**.'
    ],
    technicalReference: [
      'Custos IEEE (short): 10M=100 | 100M=19 | 1G=4 | 10G=2 (long: 1G=20.000, 10G=2.000)',
      'Desempate: 1) Menor Root Path Cost -> 2) Menor Bridge ID vizinho -> 3) Menor Port ID.',
      'MSTP (802.1s): agrupa múltiplas VLANs em poucas instâncias STP economizando CPU.'
    ],
    examTraps: [
      'Vence sempre o MENOR Bridge ID (menor prioridade ou menor MAC).',
      'PortFast NÃO desativa STP — por isso exige BPDU Guard para derrubar switches plugados indevidamente em portas de usuário.',
      'No RSTP (802.1w), Blocking, Listening e Disabled fundiram-se em Discarding.'
    ],
    keyTerms: [
      'STP (IEEE 802.1D): protocolo anti-loop L2 com convergência de 30–50 s pelos estados Blocking, Listening (15 s), Learning (15 s) e Forwarding',
      'RSTP (IEEE 802.1w): evolução do STP com convergência abaixo de 2 s usando apenas os estados Discarding, Learning e Forwarding',
      'Bridge ID (BID): identificador composto por Prioridade (padrão 32768, múltiplos de 4096) + MAC; o menor BID vence a eleição de Root Bridge',
      'PortFast (Edge Port): recurso que coloca portas de acesso direto em Forwarding sem desligar o STP na interface',
      'BPDU Guard: proteção que coloca uma porta PortFast em estado err-disable caso receba qualquer BPDU de um switch indevido',
      'Root Guard: proteção aplicada em portas designadas que impede um switch vizinho de assumir o papel de Root Bridge'
    ],
    cheatSheet: [
      { topic: 'Bridge ID e Root Bridge', facts: 'BID = Prioridade (padrão 32768, múltiplos de 4096) + MAC · vence o MENOR BID' },
      { topic: 'Custos IEEE (802.1D-2004)', facts: 'long: 1 Gbps = 20.000 · 10 Gbps = 2.000 (short: 10M=100, 100M=19, 1G=4, 10G=2)' },
      { topic: '802.1D × RSTP (802.1w)', facts: '802.1D: 30–50 s (Blocking/Listening 15s/Learning 15s/Forwarding) × RSTP < 2 s (Discarding/Learning/Forwarding)' },
      { topic: 'Eleição de portas', facts: 'Root Port (menor custo à Root) · Designated Port por segmento · desempate: custo -> BID vizinho -> Port ID' },
      { topic: 'Proteções e MSTP', facts: 'PortFast (não desliga STP) + BPDU Guard (err-disable) · Root Guard · MSTP (802.1s) agrupa VLANs' }
    ]
  },
  '1.2.6': {
    itemId: '1.2.6',
    highYieldSummary: [
      'Definição e escopo: a agregação de enlaces (Link Aggregation — IEEE 802.3ad / 802.1AX) agrupa múltiplas portas físicas Ethernet em uma única interface lógica (*Port-Channel* ou *Bond*) na Camada 2. Permite somar capacidade agregada entre switches ou servidores, evitar bloqueios de portas paralelas pelo STP e prover failover transparente em caso de quebra de enlace.',
      'LACP (IEEE 802.3ad / 802.1AX): o Link Aggregation Control Protocol agrega de 2 a 8 portas físicas Ethernet ativas em um único link lógico (Port-Channel / Bond) aumentando banda agregada e provendo failover.',
      'Distribuição de tráfego: usa hash por fluxo (MAC, IP ou IP+Porta) para manter todos os pacotes de uma sessão TCP no mesmo enlace físico sem reordenação.',
      'Modos LACP: Active (envia LACPDU — LACP Data Unit — proativamente) e Passive (responde apenas se receber). Active+Active e Active+Passive sobem; Passive+Passive NÃO sobe.',
      'Requisitos idênticos em todas as portas membro: velocidade, duplex, modo access/trunk, Native VLAN, VLANs permitidas e MTU.',
      'Integração com STP e Core: STP enxerga o Port-Channel como 1 interface lógica; entre dois switches core distintos usa-se MLAG (Multi-Chassis Link Aggregation) / vPC (Virtual Port Channel) / Stack.',
      'Exemplo operacional: um servidor Linux de imagens médicas liga duas portas de `10 Gbps` a dois switches core em **MLAG/vPC** com `mode=4` (`802.3ad`) no sistema e `channel-group 1 mode active` nos switches (evitando `passive` em ambas as pontas). O comando `show etherchannel summary` exibe status `SU` (L2 operacional) totalizando `20 Gbps` para múltiplos clientes paralelos, embora um único fluxo **TCP** fique restrito a `10 Gbps` pelo algoritmo de hash.'
    ],
    technicalReference: [
      'Combinações: Active+Active = OK | Active+Passive = OK | Passive+Passive = Falha | LACP + On = Falha',
      'Linux Bonding: mode=4 (802.3ad LACP) vs mode=1 (active-backup) | Cisco: channel-group 1 mode active'
    ],
    examTraps: [
      'Um único fluxo TCP usa apenas 1 enlace físico do bundle (a soma da banda ocorre com múltiplos fluxos paralelos).',
      'PAgP é proprietário Cisco (desirable/auto); LACP é padrão aberto IEEE (active/passive).'
    ],
    keyTerms: [
      'LACP (IEEE 802.3ad / 802.1AX): protocolo aberto que agrega até 8 portas físicas Ethernet ativas em um único link lógico (Port-Channel)',
      'Modos Active vs Passive (LACP): Active envia LACPDUs proativamente e Passive apenas responde; Active+Active e Active+Passive sobem, Passive+Passive falha',
      'PAgP (Port Aggregation Protocol): protocolo proprietário Cisco de agregação de enlaces com modos desirable e auto (incompatível com LACP)',
      'Hash de Fluxos: algoritmo que distribui pacotes pelos enlaces do bundle usando MAC, IP ou IP+Porta, mantendo cada fluxo TCP em apenas 1 link físico',
      'Linux Bonding (mode=4 vs mode=1): mode=4 implementa agregação LACP 802.3ad ativa, enquanto mode=1 opera em active-backup apenas para failover',
      'MLAG / vPC: agregação multi-chassi que permite formar um Port-Channel distribuído entre dois switches core mantendo planos de controle independentes'
    ],
    cheatSheet: [
      { topic: 'Padrão e limites', facts: 'IEEE 802.3ad / 802.1AX · até 8 portas Ethernet ativas por Port-Channel / Bond' },
      { topic: 'Modos LACP', facts: 'Active+Active = sobe · Active+Passive = sobe · Passive+Passive = NÃO sobe · LACP+On = falha' },
      { topic: 'LACP × PAgP', facts: 'LACP padrão aberto IEEE (`active`/`passive`) × PAgP proprietário Cisco (`desirable`/`auto`)' },
      { topic: 'Requisitos e distribuição', facts: 'mesma velocidade, duplex, modo, VLANs e MTU · hash por fluxo (1 fluxo TCP usa 1 link físico)' },
      { topic: 'Linux Bonding e Multi-chassis', facts: 'Linux `mode=4` (802.3ad LACP) × `mode=1` (active-backup) · entre 2 core switches: MLAG / vPC' }
    ]
  },
  '1.2.7': {
    itemId: '1.2.7',
    highYieldSummary: [
      'Definição e escopo: protocolos de roteamento dinâmico automatizam a troca de alcançabilidade de sub-redes e o recálculo de rotas após falhas na Camada 3. Dividem-se em IGPs (Interior Gateway Protocols — como OSPF RFC 2328 e RIP RFC 2453 dentro do mesmo Sistema Autônomo) e EGPs (Exterior Gateway Protocols — como BGP RFC 4271 entre Sistemas Autônomos).',
      'Roteamento Estático vs Dinâmico: roteamento estático (manual, sem overhead, ideal para redes stub e rota padrão 0.0.0.0/0) versus dinâmico (troca automática de rotas e reconvergência; inclui RIP — Routing Information Protocol — vetor de distância limitado a 15 saltos).',
      'OSPF (Open Shortest Path First — RFC 2328): IGP Link-State que usa algoritmo Dijkstra (SPF — Shortest Path First) diretamente sobre IP protocolo 89 (custo = 10^8 / largura de banda), com áreas hierárquicas conectadas à Área 0 (backbone).',
      'Operação OSPF: Hellos em multicast 224.0.0.5 (10s / Dead 40s) validam Área, Timers, Máscara e Autenticação; em redes multiacesso elegem DR (Designated Router) / BDR (Backup Designated Router) via 224.0.0.6.',
      'BGP (Border Gateway Protocol — RFC 4271): único EGP da Internet, Path-Vector sobre TCP porta 179. eBGP (External BGP, AD 20) conecta ASNs (Autonomous System Numbers) diferentes; iBGP (Internal BGP, AD 200) opera no mesmo AS (exige malha completa ou Route Reflectors).',
      'Seleção BGP: Weight (maior) -> Local Preference (maior = saída do AS) -> Localmente originada -> Menor AS-Path -> Origin (IGP < EGP < incomplete) -> Menor MED (Multi-Exit Discriminator = entrada no AS) -> eBGP > iBGP.',
      'Exemplo operacional: em um backbone **OSPF** (protocolo IP `89`) com `auto-cost reference-bandwidth 10000`, um link de `1 Gbps` recebe custo `10` (ou `1` no padrão `10^8`), e `show ip ospf neighbor` confirma adjacência `FULL` após validar Área, máscara e timers (`Hello 10 s / Dead 40 s`). Na borda Internet via **BGP** (`TCP 179`), elevar `Local Preference` para `200` no roteador do link principal garante preferência de saída de todo o AS sobre o enlace secundário (`eBGP AD 20 × iBGP AD 200`).'
    ],
    technicalReference: [
      'OSPF: IP Protocol 89 | Multicast 224.0.0.5 / 224.0.0.6 | Hello 10s / Dead 40s (Ethernet)',
      'BGP: TCP 179 | eBGP (AD=20) | iBGP (AD=200) | Router ID: Manual -> Maior Loopback -> Maior Interface Física.'
    ],
    examTraps: [
      'OSPF roda direto sobre IP (protocolo 89), NÃO usa TCP/UDP; BGP usa TCP 179.',
      'Maior Local Preference define preferência de SAÍDA do AS; menor MED sugere ENTRADA ao vizinho.',
      'Áreas OSPF não-zero precisam conectar-se à Área 0.'
    ],
    keyTerms: [
      'OSPF (RFC 2328): IGP Link-State que roda diretamente sobre IP protocolo 89 (sem TCP/UDP), usa algoritmo Dijkstra (custo = 10^8/BW) e exige conexão à Área 0',
      'DR / BDR (OSPF): roteadores eleitos em redes multiacesso (multicast 224.0.0.6, com Hellos em 224.0.0.5) para evitar adjacências em malha completa',
      'RIP (Routing Information Protocol): IGP vetor de distância que usa contagem de saltos como métrica com limite máximo de 15 saltos (16 = inalcançável)',
      'BGP (RFC 4271): único EGP da Internet (Path-Vector sobre TCP 179), operando como eBGP (AD 20) entre ASNs distintos e iBGP (AD 200) dentro do mesmo AS',
      'Local Preference vs MED (BGP): Local Pref (maior vence) escolhe a rota de saída do AS, enquanto MED (menor vence) sugere a entrada ao AS vizinho',
      'AS-Path (BGP): atributo obrigatório bem conhecido que lista os ASNs atravessados para prevenir loops e servir de desempate (menor caminho vence)'
    ],
    cheatSheet: [
      { topic: 'OSPF (RFC 2328, IP 89)', facts: 'Link-State (Dijkstra) · Área 0 backbone obrigatória · custo = 10^8/BW · não usa TCP/UDP' },
      { topic: 'Operação OSPF', facts: 'Hellos em 224.0.0.5 (10s/Dead 40s) · DR/BDR em 224.0.0.6 · exige mesma área, timers e máscara' },
      { topic: 'RIP (vetorial)', facts: 'métrica por contagem de saltos · máximo de 15 saltos (16 = inalcançável)' },
      { topic: 'BGP (RFC 4271, TCP 179)', facts: 'Path-Vector · eBGP (AD 20) × iBGP (AD 200, full mesh ou Route Reflector)' },
      { topic: 'Seleção de rota BGP', facts: 'Weight (maior) -> Local Pref (maior) -> AS-Path (menor) -> Origin (IGP < EGP < incomplete) -> MED (menor) -> eBGP > iBGP' }
    ]
  },
  '1.2.8': {
    itemId: '1.2.8',
    highYieldSummary: [
      'Definição e escopo: o protocolo DHCP (Dynamic Host Configuration Protocol — RFC 2131) opera na camada de Aplicação sobre UDP (`67` servidor / `68` cliente) para conceder dinamicamente endereços IPv4, máscara e opções de rede por tempo determinado (*lease*). Em topologias segmentadas por VLANs, depende de agentes *Relay* em Camada 3 e de *DHCP Snooping* na Camada 2 contra servidores falsos.',
      'DHCP (RFC 2131): entrega IP, máscara, gateway (Option 3), DNS (Option 6), domínio (15), NTP (Network Time Protocol — 42) e TFTP (Trivial File Transfer Protocol — 66/150 para VoIP — Voice over IP) via UDP 67 (servidor) e UDP 68 (cliente).',
      'Ciclo DORA (Discover, Offer, Request, Acknowledge): Discover (broadcast cliente) -> Offer (servidor) -> Request (cliente escolhe) -> Acknowledge (servidor confirma lease).',
      'Renovação de Lease: T1 em 50% do tempo (unicast ao servidor original); T2 em 87,5% (broadcast caso T1 falhe). Sem resposta, clientes assumem APIPA 169.254.0.0/16.',
      'DHCP Relay (ip helper-address): converte broadcasts Discover da VLAN local em unicast ao servidor DHCP remoto inserindo o campo giaddr (Gateway IP Address).',
      'DHCP Snooping: define portas Trusted (uplinks/servidores) e bloqueia respostas falsas (Rogue DHCP — servidor não autorizado) em portas Untrusted de clientes.',
      'Exemplo operacional: quando um PC na **VLAN 30** (`10.30.0.0/24`) envia `DHCPDISCOVER` (`UDP 68 -> 67`), a SVI configurada com `ip helper-address 10.1.0.50` encaminha o pedido em unicast preenchendo `GIADDR = 10.30.0.1` para selecionar o escopo correto. Nos switches de acesso com `ip dhcp snooping`, configura-se `ip dhcp snooping trust` apenas no uplink para impedir que um roteador doméstico plugado na porta de usuário distribua IPs inválidos.'
    ],
    technicalReference: [
      'Portas: Servidor = UDP 67 | Cliente = UDP 68 | Timers: T1=50% / T2=87,5% | Falha: APIPA 169.254.0.0/16',
      'Options: 3=Gateway | 6=DNS | 15=Domain | 51=Lease | 66/150=TFTP VoIP | 82=Relay Info.'
    ],
    examTraps: [
      'UDP 67 é do SERVIDOR e UDP 68 é do CLIENTE (inversão muito comum em provas).',
      'Sem DHCP Relay no roteador/SVI, Discover em broadcast não atravessa VLANs.',
      'Ativar DHCP Snooping sem marcar o uplink como TRUSTED impede todos os clientes de obterem IP.'
    ],
    keyTerms: [
      'Ciclo DORA: sequência de quatro mensagens para obtenção de IP via DHCP — Discover, Offer, Request e Acknowledge',
      'Portas DHCP (UDP 67 / 68): UDP 67 é a porta de escuta do servidor (e destino do Discover/Request) e UDP 68 é a porta do cliente',
      'Timers de Renovação (T1 e T2): T1 ocorre em 50% do lease via unicast ao servidor original; T2 ocorre em 87,5% via broadcast se T1 falhar',
      'DHCP Relay (ip helper-address): encaminha broadcasts Discover locais em unicast para um servidor DHCP remoto preenchendo o campo GIADDR',
      'DHCP Snooping: controle L2 no switch que só aceita respostas Offer/Ack em portas Trusted (uplinks/servidores) bloqueando Rogue DHCP em Untrusted'
    ],
    cheatSheet: [
      { topic: 'Portas e Ciclo DORA', facts: 'UDP 67 (servidor) / UDP 68 (cliente) · Discover -> Offer -> Request -> Ack' },
      { topic: 'Timers e Falha', facts: 'T1 = 50% (unicast ao servidor original) · T2 = 87,5% (broadcast) · falha = APIPA 169.254.0.0/16' },
      { topic: 'Opções DHCP principais', facts: '3 Gateway · 6 DNS · 15 Domínio · 42 NTP · 51 Lease · 66/150 TFTP VoIP · 82 Relay Info' },
      { topic: 'Relay (ip helper-address)', facts: 'converte Discover broadcast em unicast ao DHCP remoto preenchendo o campo GIADDR' },
      { topic: 'DHCP Snooping (L2)', facts: 'permite ofertas só em portas Trusted (uplink/servidor) · bloqueia Rogue DHCP em Untrusted' }
    ]
  },
  '1.2.9': {
    itemId: '1.2.9',
    highYieldSummary: [
      'Definição e escopo: o DNS (Domain Name System — RFC 1034/1035) provê resolução distribuída e hierárquica de nomes de domínio para endereços IP e metadados de serviços na camada de Aplicação. Utiliza UDP `53` para consultas (com suporte a EDNS0 — Extension Mechanisms for DNS, RFC 6891), TCP `53` para replicação de zonas e respostas truncadas, além de DNSSEC, DoT e DoH para integridade e sigilo.',
      'DNS (UDP / TCP 53): consultas usam UDP 53 (inclusive respostas grandes e DNSSEC via EDNS0); TCP 53 é usado em transferências de zona (AXFR — Full Zone Transfer / IXFR — Incremental Zone Transfer) e quando a resposta UDP retorna truncada (flag TC — Truncation).',
      'Recursivo vs Iterativo: cliente envia consulta recursiva ao resolvedor; este consulta iterativamente Root (.) -> TLD (Top-Level Domain) -> Autoritativo (armazenando em cache pelo TTL).',
      'Registros RRs (Resource Records): A (IPv4), AAAA (IPv6), CNAME (Canonical Name — alias), NS (Name Server), SOA (Start of Authority — serial/timers da zona), MX (Mail Exchanger), PTR (Pointer — reverso), TXT (SPF — Sender Policy Framework / DKIM — DomainKeys Identified Mail / DMARC — Domain-based Message Authentication, Reporting, and Conformance) e SRV (Service Locator — serviços AD, Active Directory).',
      'Zonas e Replicação: Primária replica para Secundárias via AXFR/IXFR quando Serial SOA sobe; Split-Horizon entrega IPs distintos interna e externamente.',
      'Segurança DNS: DNSSEC (DNS Security Extensions) assina registros (RRSIG/DNSKEY/DS) contra spoofing/poisoning sem cifrar; DoT (DNS over TLS — TCP 853) e DoH (DNS over HTTPS — TCP 443) criptografam consultas.',
      'Exemplo operacional: ao executar `dig @10.1.0.10 portal.hosp.org.br A +dnssec`, a resposta com assinatura `RRSIG` chega em **UDP `53`** graças ao **EDNS0**, autenticando o registro sem cifrar a consulta (para sigilo no transporte usam-se **DoT `TCP 853`** ou **DoH `TCP 443`**). Se o administrador alterar um registro `A` na zona primária sem incrementar o **Serial** no **SOA**, servidores secundários não iniciam **IXFR/AXFR** (`TCP 53`) e mantêm o IP antigo.'
    ],
    technicalReference: [
      'Portas: UDP/TCP 53 (DNS) | TCP 853 (DoT) | TCP 443 (DoH)',
      'CLI: dig @8.8.8.8 dominio.gov.br MX +trace | nslookup -type=TXT dominio | Códigos: NOERROR, NXDOMAIN, SERVFAIL, REFUSED.'
    ],
    examTraps: [
      'CNAME NÃO pode coexistir com outros registros (A, MX, NS, SOA) no mesmo nome — por isso o ápice do domínio não usa CNAME.',
      'DNSSEC protege INTEGRIDADE/AUTENTICIDADE, mas NÃO criptografa consultas (papel de DoT/DoH).',
      'Esquecer de incrementar o Serial no SOA impede zonas secundárias tradicionais de replicarem.'
    ],
    keyTerms: [
      'DNS (UDP / TCP 53): consultas usam UDP 53 (inclusive respostas grandes e DNSSEC via EDNS0); TCP 53 é usado em transferências de zona (AXFR/IXFR) e quando a resposta UDP volta truncada (flag TC)',
      'Consulta Recursiva vs Iterativa: cliente pede resposta completa ao resolvedor (recursiva), que consulta Root, TLD e Autoritativo passo a passo (iterativa)',
      'CNAME (Canonical Name): registro de alias que aponta um nome para outro e não pode coexistir com outros registros (A, MX, NS, SOA) no mesmo nome',
      'SOA Serial: campo do registro Start of Authority que deve ser incrementado a cada alteração para disparar replicação nas zonas secundárias',
      'DNSSEC: extensão que assina criptograficamente os registros DNS (RRSIG/DNSKEY/DS) garantindo integridade e autenticidade sem cifrar a consulta',
      'DoT (TCP 853) vs DoH (TCP 443): protocolos que criptografam consultas DNS em trânsito usando TLS dedicado (853) ou encapsulado em HTTPS (443)'
    ],
    cheatSheet: [
      { topic: 'Portas e Zona (AXFR/IXFR)', facts: 'UDP 53 consultas (EDNS0 permite respostas grandes, incl. DNSSEC) · TCP 53 em AXFR/IXFR e resposta truncada (TC)' },
      { topic: 'Recursiva × Iterativa', facts: 'cliente -> resolvedor (recursiva) · resolvedor -> Root -> TLD -> Autoritativo (iterativa + cache TTL)' },
      { topic: 'Registros (RRs)', facts: 'A (IPv4) · AAAA (IPv6) · CNAME (alias, não coexiste) · MX · PTR · NS · SOA (Serial) · SRV · TXT' },
      { topic: 'Replicação e Split-Horizon', facts: 'secundárias replicam quando Serial SOA sobe · Split-Horizon responde IPs distintos interna/externamente' },
      { topic: 'DNSSEC × DoT / DoH', facts: 'DNSSEC assina registros (integridade, sem cifrar) × DoT (TCP 853) / DoH (TCP 443) cifram consultas' }
    ]
  },
  '1.2.10': {
    itemId: '1.2.10',
    highYieldSummary: [
      'Definição e escopo: Quality of Service (QoS — arquitetura DiffServ RFC 2474/2475 e IntServ RFC 1633) controla enfileiramento, priorização e descarte de pacotes nas Camadas 2 e 3 durante períodos de congestionamento. Garante baixa latência, baixo *jitter* (variação de atraso) e mínima perda para serviços em tempo real sem criar largura de banda adicional.',
      'QoS: gerencia largura de banda, latência, jitter e perda de pacotes para proteger tráfego crítico durante congestionamentos.',
      'Modelo DiffServ (Differentiated Services): escalável por salto (PHB — Per-Hop Behavior) classificando/marcando pacotes na borda (ao contrário do legado IntServ — Integrated Services / RSVP — Resource Reservation Protocol, que reserva estado fim a fim).',
      'Marcação L2/L3: CoS/PCP de 3 bits no quadro 802.1Q (0–7) e DSCP (Differentiated Services Code Point) de 6 bits no IP (0–63): EF (Expedited Forwarding)=46 (voz RTP), AF41 (Assured Forwarding)=34 (vídeo), CS3 (Class Selector)=24 (sinalização SIP — Session Initiation Protocol), BE (Best Effort)=0.',
      'Enfileiramento: LLQ (Low Latency Queuing) combina Priority Queue (fila estrita com teto para voz sem causar starvation) + CBWFQ (Class-Based Weighted Fair Queuing) para dados.',
      'Policing vs Shaping e WRED: Policing descarta excesso acima do CIR (Committed Information Rate); Shaping retém excesso em buffer suavizando rajadas. WRED (Weighted Random Early Detection) descarta antes de lotar filas evitando sincronização TCP.',
      'Exemplo operacional: em um link WAN de `10 Mbps` que cursa `10` chamadas VoIP G.711 (~`87,2 kbps` cada = `872 kbps`), uma política **LLQ** aloca fila prioritária limitada (ex.: `1,5 Mbps`, abaixo de ~33% do link) para pacotes marcados em **DSCP EF (`46`) / CoS `5`**, reservando **CBWFQ + WRED** para sinalização **SIP** (`CS3 / 24`) e sistemas web. O **Trust Boundary** é definido na porta do telefone IP (não confiando em marcações do PC conectado atrás dele), com **Shaping** na saída para evitar descartes no policer da operadora.'
    ],
    technicalReference: [
      'DSCP/CoS: Voz RTP = EF (46) / CoS 5 | Vídeo = AF41 (34) / CoS 4 | Sinalização SIP = CS3 (24) / CoS 3',
      'Ordem QoS: Classificação -> Marcação (Trust Boundary) -> Policing/Shaping -> LLQ/CBWFQ -> WRED.'
    ],
    examTraps: [
      'QoS não cria banda nova — apenas prioriza pacotes quando há fila/congestionamento.',
      'Policing descarta pacotes excedentes; Shaping enfileira em buffer aumentando levemente o atraso.',
      'Portas de estações comuns não devem ser "trusted" para DSCP/CoS (evitar fraude de prioridade).'
    ],
    keyTerms: [
      'DiffServ vs IntServ: DiffServ marca pacotes para tratamento por salto escalável (PHB), enquanto IntServ/RSVP reserva estado fim a fim',
      'Marcação DSCP e CoS: sinaliza prioridade em L3 (DSCP 6 bits: EF=46 voz, AF41=34 vídeo, CS3=24 SIP) e L2 (802.1p CoS 3 bits: voz=5)',
      'LLQ vs CBWFQ: CBWFQ garante banda mínima por classe em filas separadas; LLQ adiciona uma fila de prioridade estrita (com teto anti-starvation) para voz',
      'Policing vs Shaping: Policing descarta tráfego excedente acima do CIR instantaneamente; Shaping retém o excesso em buffer suavizando rajadas',
      'WRED (Weighted Random Early Detection): descarte preventivo antes de lotar a fila para evitar queda sincronizada de múltiplas sessões TCP (global synchronization)',
      'Trust Boundary: fronteira onde o switch passa a confiar nas marcações DSCP/CoS recebidas (nunca confiar em portas de PCs comuns)'
    ],
    cheatSheet: [
      { topic: 'Marcação L2 e L3', facts: 'Voz RTP: DSCP EF (46) / CoS 5 · Vídeo: AF41 (34) / CoS 4 · Sinalização SIP: CS3 (24) / CoS 3 · BE = 0' },
      { topic: 'DiffServ × IntServ', facts: 'DiffServ classifica por salto (PHB, escalável) × IntServ/RSVP reserva estado fim a fim' },
      { topic: 'Enfileiramento (LLQ × CBWFQ)', facts: 'LLQ = fila de prioridade estrita (com teto anti-starvation para voz) + CBWFQ para dados' },
      { topic: 'Policing × Shaping', facts: 'Policing descarta excesso acima do CIR × Shaping retém excesso em buffer suavizando rajadas' },
      { topic: 'Trust Boundary e WRED', facts: 'não confiar em DSCP/CoS vindo de PCs · WRED descarta antes de lotar filas evitando queda sincronizada TCP' }
    ]
  },
  '1.2.11': {
    itemId: '1.2.11',
    highYieldSummary: [
      'Definição e escopo: switches corporativos realizam encaminhamento em hardware (ASIC — Application-Specific Integrated Circuit) em Camada 2 ou Camada 3 (*Multilayer*), combinando inspeção de quadros, segurança de acesso na borda (Port Security, DAI, Storm Control) e alta disponibilidade entre chassi ou planos de controle distribuídos (Stack/VSS/MLAG).',
      'Switching L2 vs L3 Multilayer: switches L2 encaminham quadros pela tabela CAM/MAC na mesma VLAN mantendo o TTL intacto, enquanto switches L3 Multilayer roteiam pacotes IP entre SVIs e portas roteadas via CEF (Cisco Express Forwarding) / TCAM (Ternary Content Addressable Memory) em wire-speed, reescrevendo MACs e decrementando o TTL.',
      'Métodos: Store-and-Forward (valida FCS/CRC completo antes de encaminhar — descarta corrompidos) vs Cut-Through (lê apenas MAC destino — menor latência, propaga erros).',
      'Port Security: limita MACs por porta reagindo com Protect (drop silencioso), Restrict (drop + log/trap) ou Shutdown (err-disable, padrão Cisco).',
      'Proteções L2: Storm Control contém tempestades de broadcast/multicast; DAI (Dynamic ARP Inspection) valida ARP consultando binding do DHCP Snooping.',
      'Empilhamento e redundância: Stack/VSS (Virtual Switching System)/IRF (Intelligent Resilient Framework) unem plano de controle; MLAG/vPC mantêm planos independentes com LACP distribuído entre dois switches.',
      'Exemplo operacional: em switches de acesso protegidos contra *ARP Spoofing* e conexões indevidas, habilitam-se `ip arp inspection vlan 10,20` (**DAI** apoiada no *binding* do DHCP Snooping) e `switchport port-security maximum 2` com `violation restrict` (descarta MACs extras gerando log/trap SNMP sem derrubar a porta). No núcleo, dois switches em **MLAG/vPC** mantêm planos de controle independentes com **LACP** ativo-ativo, evitando parada total em atualização de firmware.'
    ],
    technicalReference: [
      'Port Security: Protect (drop) | Restrict (drop + log) | Shutdown (err-disable, padrão Cisco)',
      'Recuperação err-disable: shutdown -> no shutdown | Inspeção: show mac address-table / show interfaces status.'
    ],
    examTraps: [
      'Switches L2 puros não alteram MACs nem decrementam TTL IP no mesmo segmento.',
      'DAI depende da tabela de binding do DHCP Snooping (ou entradas ARP estáticas para IPs fixos).'
    ],
    keyTerms: [
      'Store-and-Forward vs Cut-Through: Store-and-Forward valida o FCS/CRC completo antes de encaminhar (descarta erros); Cut-Through lê só o MAC destino (menor latência, propaga erros)',
      'Switch L3 (CEF / TCAM): switch multilayer que roteia pacotes entre SVIs em hardware (wire-speed), reescrevendo MACs e decrementando o TTL',
      'Port Security: limita MACs por porta reagindo com Protect (drop silencioso), Restrict (drop + log/trap) ou Shutdown (err-disable, padrão Cisco)',
      'DAI (Dynamic ARP Inspection): proteção L2 que intercepta pacotes ARP e valida IP/MAC contra a tabela de binding do DHCP Snooping',
      'Storm Control: mecanismo que limita a taxa de broadcast, multicast ou unknown unicast na porta para conter tempestades de camada 2'
    ],
    cheatSheet: [
      { topic: 'Switching L2 × L3 (SVI)', facts: 'L2 encaminha por CAM/MAC na mesma VLAN (TTL intacto) × L3 Multilayer roteia entre SVIs via CEF/TCAM (decrementa TTL)' },
      { topic: 'Store-and-Forward × Cut-Through', facts: 'valida FCS/CRC completo (descarta erros) × lê só MAC destino (menor latência, propaga erros)' },
      { topic: 'Port Security (3 ações)', facts: 'Protect (drop silencioso) · Restrict (drop + log/trap) · Shutdown (err-disable, padrão Cisco)' },
      { topic: 'Proteções L2 (DAI / Storm)', facts: 'DAI valida ARP usando binding do DHCP Snooping · Storm Control limita broadcast/multicast' },
      { topic: 'Stack/VSS × MLAG/vPC', facts: 'plano de controle único (Stack) × planos independentes com LACP distribuído entre 2 switches (MLAG)' }
    ]
  },
  '1.2.12': {
    itemId: '1.2.12',
    highYieldSummary: [
      'Definição e escopo: o troubleshooting sistemático de redes isola falhas da Camada 1 à Camada 7 por meio de metodologias estruturadas, contadores de interface, testes de conectividade e captura de pacotes. Permite distinguir rapidamente defeitos físicos/L2, quebras de roteamento/PMTUD, bloqueios de portas L4 ou falhas de resolução DNS.',
      'Metodologia de diagnóstico: delimitar escopo (1 host vs VLAN vs geral) e seguir Bottom-Up (L1->L7), Top-Down (L7->L1) ou Divide-and-Conquer (testando L3 primeiro).',
      'L1/L2: checar link up/up, speed/duplex (duplex mismatch gera late collisions e lentidão severa), erros CRC/drops na interface e tabelas MAC/ARP/STP.',
      'L3: validar IP, máscara, gateway e tabela de rotas; usar ping (ICMP Echo Request 8 / Reply 0) e traceroute (UDP no Linux) / tracert (ICMP Echo no Windows) com TTL incremental recebendo ICMP Type 11 (Time Exceeded).',
      'L4/L7 e capturas: verificar sockets em escuta (`ss -tulnp` / `netstat -ano`), testar porta TCP (`Test-NetConnection -Port` / `nc -zv`), DNS (`dig`/`nslookup`) e capturar tráfego com `tcpdump`/Wireshark.',
      'Falhas clássicas: MTU/MSS (Maximum Segment Size) mismatch em VPNs (ping passa, HTTPS trava), roteamento assimétrico bloqueado por RPF (Reverse Path Forwarding)/firewall stateful e exaustão de conntrack (Connection Tracking)/NAT.',
      'Exemplo operacional: após ativar uma VPN, usuários conseguem dar `ping` no servidor web, mas conexões **HTTPS (`TCP 443`)** travam; uma captura `tcpdump -i any -nn "host 10.50.1.20 and port 443"` revela o *handshake* completo seguido de retransmissões de pacotes `DF=1` porque um firewall filtra **ICMP Type `3` Code `4`**, quebrando o **PMTUD**. Em chamado distinto de lentidão local, `show interfaces gi1/0/12` exibe link `up/up` com milhares de erros **FCS/CRC** e *late collisions* por **duplex mismatch**, enquanto `Test-NetConnection 10.50.1.20 -Port 443` confirma alcance da porta TCP.'
    ],
    technicalReference: [
      'Linux: ip -s link show | ip route get <IP> | ss -tulnp | tcpdump -i any -nn "host <IP> and port 443" -w cap.pcap',
      'Windows: Test-NetConnection <IP> -Port 443 | Get-NetRoute | arp -a | tracert -d',
      'ICMP: Type 0/8 (Echo) | Type 3 Code 4 (Fragmentation Needed) | Type 11 (Time Exceeded).'
    ],
    examTraps: [
      'Duplex mismatch mantém link UP mas derruba throughput com dezenas de erros FCS/CRC e colisões tardias.',
      'Traceroute Linux usa UDP portas altas por padrão; tracert Windows usa ICMP Echo Request.',
      'Bloquear ICMP Type 3 Code 4 quebra Path MTU Discovery travando sessões HTTPS/TLS.'
    ],
    keyTerms: [
      'Metodologias de Diagnóstico: abordagens estruturadas de troubleshooting — Bottom-Up (L1->L7), Top-Down (L7->L1) e Divide-and-Conquer (testa L3 primeiro)',
      'Duplex Mismatch: incompatibilidade half/full-duplex em que o link permanece UP, mas gera erros FCS/CRC, colisões tardias e queda severa de throughput',
      'PMTUD (Path MTU Discovery): descoberta do menor MTU do caminho com flag DF=1; o bloqueio de ICMP Type 3 Code 4 trava sessões HTTPS enquanto ping passa',
      'ICMP Type 11 (Time Exceeded): mensagem devolvida por roteadores quando o TTL expira, usada por traceroute (UDP no Linux) e tracert (ICMP Echo no Windows)',
      'tcpdump / Wireshark: ferramentas de captura e análise de pacotes para inspeção de cabeçalhos, flags TCP, falhas TLS e retransmissões'
    ],
    cheatSheet: [
      { topic: 'Metodologias de diagnóstico', facts: 'Bottom-Up (L1->L7) · Top-Down (L7->L1) · Divide-and-Conquer (testa L3/ping primeiro)' },
      { topic: 'Duplex Mismatch (show interfaces)', facts: 'link permanece UP, mas gera erros FCS/CRC, late collisions e queda severa de throughput' },
      { topic: 'Testes de conectividade e rota', facts: 'ping (ICMP 8 Echo / 0 Reply) · tracert Windows envia ICMP Echo × traceroute Linux envia UDP · ambos recebem ICMP 11 Time Exceeded · arp -a · ip route get' },
      { topic: 'Sockets, portas e DNS', facts: '`ss -tulnp` / `netstat -ano` · `Test-NetConnection -Port` / `nc -zv` · `dig +trace` / `nslookup`' },
      { topic: 'Captura e falha de PMTUD', facts: '`tcpdump -i any -nn "host X and port 443"` · ICMP Type 3 Code 4 bloqueado trava HTTPS enquanto ping passa' }
    ]
  }
};
