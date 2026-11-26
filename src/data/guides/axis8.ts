import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_8: Record<string, StudyGuide> = {
  '8.1.1': {
    itemId: '8.1.1',
    highYieldSummary: [
      'Definição e escopo: a telefonia IP (VoIP — Voice over IP) converte voz analógica em fluxos de pacotes IP transportados sobre redes convergentes, separando o plano de sinalização (controle de chamada) do plano de mídia (áudio em tempo real). Integra centrais PBX IP, gateways legados (FXS/FXO/E1), Session Border Controllers (SBCs) e troncos SIP com a rede telefônica pública (PSTN).',
      'Arquitetura de Voz sobre IP (VoIP): converte sinais analógicos de áudio em pacotes digitais IP (Internet Protocol) transmitidos pela rede de dados, separando o plano de sinalização/controle (estabelecer, encaminhar e encerrar chamadas via PBX IP — Private Branch Exchange sobre IP) do plano de mídia (fluxo contínuo de áudio em tempo real).',
      'Componentes Centrais (PBX IP, Gateways e SBC): PBX IP (CUCM — Cisco Unified Communications Manager, Asterisk/FreePBX) gerencia registro de ramais, plano de discagem (dial plan) e roteamento de chamadas; Gateways de Voz — FXO (Foreign Exchange Office), FXS (Foreign Exchange Station) e E1-PRI (Primary Rate Interface digital de 2,048 Mbps com 30 canais B + TS0 alinhamento + TS16 sinalização) — interligam ramais analógicos ou troncos digitais legados à rede IP.',
      'SBC (Session Border Controller): dispositivo de fronteira especializado entre a rede VoIP interna e o tronco SIP (Session Initiation Protocol) da operadora — PSTN (Public Switched Telephone Network) / ITSP (Internet Telephony Service Provider); executa proteção contra fraudes/DoS (Denial of Service) SIP, ocultação de topologia, normalização de cabeçalhos SIP, transcodificação de codecs e travessia de NAT (Network Address Translation).',
      'Integração com PSTN (STFC — Serviço Telefônico Fixo Comutado): troncos SIP (SIP Trunks) substituem múltiplos links físicos E1/PRI — R2/ISDN (Integrated Services Digital Network) — por sessões IP consolidadas até a operadora, reduzindo custos e permitindo portabilidade e redundância geográfica.',
      'Vantagens e Desafios Operacionais: consolidação de voz e dados na mesma infraestrutura física exige isolamento em VLAN (Virtual Local Area Network) dedicada, prioridade rigorosa de QoS (Quality of Service) para tempo real e disponibilidade elétrica via PoE (Power over Ethernet) + nobreaks (a telefonia fixa tradicional alimentava aparelhos pela linha da central).',
      'Exemplo operacional: um hospital substitui dois links `E1` de `30` canais cada (`60` chamadas simultâneas) por um **SIP Trunk** redundante terminado em um **SBC** na DMZ, mantendo gateways **FXS** apenas para aparelhos de fax e telefones analógicos de elevadores. Em chamadas entre dois ramais IP internos, o **PBX IP** processa apenas a sinalização enquanto a mídia **RTP** flui diretamente ponto a ponta na VLAN de voz.'
    ],
    technicalReference: [
      'Plano de Controle (PBX IP / SIP / H.323) vs Plano de Mídia (RTP/SRTP direto ponta a ponta ou via MTP/SBC)',
      'Portas analógicas/digitais: FXS (conecta telefone/fax analógico) | FXO (conecta linha externa da operadora) | E1 (30 canais de voz + TS0 alinhamento + TS16 sinalização = 2,048 Mbps).'
    ],
    examTraps: [
      'Em telefonia VoIP, a mídia RTP normalmente trafega DIRETAMENTE entre os dois telefones IP (peer-to-peer) — o PBX IP controla apenas a sinalização, salvo quando há conferência, gravação, transcodificação ou SBC no caminho.',
      'Firewalls convencionais L4/NGFW NÃO substituem totalmente um SBC corporativo para manipulação profunda de SIP, ocultação de topologia e controle de mídia RTP.',
      'Confundir FXS (Foreign Exchange Station — fornece tom de discagem e corrente ao aparelho) com FXO (Foreign Exchange Office — recebe linha externa).'
    ],
    keyTerms: [
      'PBX IP (Plano de Controle): servidor central que gerencia registro de ramais, dial plan e sinalização sem necessariamente rotear a mídia',
      'SBC (Session Border Controller): elemento de fronteira VoIP que realiza ocultação de topologia, segurança SIP, transcodificação e travessia NAT',
      'SIP Trunk vs E1-PRI: entroncamento IP consolidado sobre WAN/MPLS com operadora ITSP versus enlace TDM de 2,048 Mbps (30 canais de voz)',
      'FXS vs FXO: porta de gateway que alimenta telefone/fax analógico (FXS) versus porta que recebe linha externa analógica da operadora (FXO)',
      'Plano de Mídia vs Sinalização: separação arquitetural entre mensagens de controle (SIP) e fluxo contínuo de voz em tempo real (RTP)'
    ]
  },
  '8.1.2': {
    itemId: '8.1.2',
    highYieldSummary: [
      'Definição e escopo: os protocolos de telefonia IP dividem-se entre sinalização de controle (**SIP** — RFC 3261 ou legado **H.323**), descrição de sessão (**SDP** — RFC 4566) e transporte de mídia em tempo real (**RTP/RTCP** — RFC 3550 e **SRTP**). Resolvem o estabelecimento, negociação de codecs/portas, entrega de áudio com baixa latência sobre UDP e monitoramento contínuo de qualidade.',
      'SIP (Session Initiation Protocol — RFC 3261): protocolo de sinalização na camada de aplicação, baseado em texto (estilo HTTP — Hypertext Transfer Protocol), responsável por criar, modificar e encerrar sessões multimídia — portas padrão TCP/UDP `5060` em texto claro ou TCP `5061` sobre TLS (Transport Layer Security — SIPS).',
      'SDP (Session Description Protocol — RFC 4566): transportado dentro do corpo das mensagens SIP (como `INVITE` e `200 OK`) para negociar os parâmetros da mídia — endereço IP, porta UDP (User Datagram Protocol) de escuta para áudio/vídeo e lista de codecs aceitos em ordem de preferência.',
      'RTP (Real-time Transport Protocol — RFC 3550): transporta efetivamente os pacotes de voz/vídeo sobre UDP (normalmente portas pares dinâmicas na faixa `16384–32767` ou `10000–20000`), usando números de sequência e timestamps para detecção de perda e reordenação — sem retransmissão TCP (pois pacote atrasado em voz ao vivo é inútil).',
      'RTCP e SRTP: RTCP (Real-time Transport Control Protocol — porta ímpar imediatamente acima da porta RTP, ex.: RTP `16384` -> RTCP `16385`) monitora estatísticas de QoS (jitter, perda de pacotes, atraso RTT — Round-Trip Time); SRTP (Secure RTP) criptografa e autentica o fluxo de mídia RTP usando AES (Advanced Encryption Standard) com chaves negociadas via SDES (SDP Security Descriptions sobre TLS) ou DTLS-SRTP (Datagram TLS).',
      'H.323 vs SIP: H.323 (ITU-T — International Telecommunication Union) é um conjunto binário mais antigo e complexo (Gatekeeper, MCU — Multipoint Control Unit, H.225/H.245, TCP `1720`); SIP (IETF — Internet Engineering Task Force) consolidou-se como padrão dominante na telefonia IP moderna por ser modular, legível e flexível.',
      'Exemplo operacional: ao estabelecer uma chamada confidencial entre dois ramais, a sinalização trafega em **SIPS (`TCP 5061`)** levando no corpo **SDP** a porta par `m=audio 16400 RTP/SAVP 0 8` e a chave **SDES**. O áudio cifrado em **SRTP** flui em `UDP 16400` enquanto o **RTCP** correspondente reporta perda e jitter na porta ímpar `UDP 16401`.'
    ],
    technicalReference: [
      'Sinalização: SIP (UDP/TCP 5060 | SIPS/TLS TCP 5061) + SDP (negocia IP/porta/codec) | H.323 legado (TCP 1720)',
      'Mídia: RTP (UDP porta par dinâmica) | Controle de qualidade: RTCP (porta RTP + 1, ímpar) | Mídia cifrada: SRTP.'
    ],
    examTraps: [
      'SIP NÃO transporta a voz (mídia) — SIP apenas negocia e estabelece a sessão; quem carrega os pacotes de áudio é o protocolo RTP sobre UDP.',
      'Usar SIPS (TLS 5061) criptografa apenas a sinalização SIP; se SRTP não estiver habilitado, a conversa em áudio (RTP) continua trafegando sem criptografia na rede.',
      'RTP utiliza UDP e NÃO TCP — retransmissão automática do TCP aumentaria drasticamente o atraso e jitter tornando a conversa ininteligível.'
    ],
    keyTerms: [
      'SIP (5060 / 5061): protocolo textual de sinalização (RFC 3261) em UDP/TCP 5060 ou TLS 5061 (SIPS) para controlar sessões VoIP',
      'SDP (RFC 4566): formato textual encapsulado no SIP que negocia IP, porta UDP de mídia, codecs e parâmetros SRTP',
      'RTP vs RTCP (Par / Ímpar): transporte de áudio sobre UDP em porta par dinâmica versus telemetria de QoS na porta ímpar RTP + 1',
      'SRTP (SDES / DTLS-SRTP): extensão criptográfica AES para confidencialidade e integridade do fluxo de áudio RTP',
      'H.323 (TCP 1720): suíte binária legada da ITU-T (Gatekeeper/MCU/H.225/H.245) amplamente substituída pelo SIP'
    ]
  },
  '8.1.3': {
    itemId: '8.1.3',
    highYieldSummary: [
      'Definição e escopo: os codecs de voz (G.711, G.729, G.722, Opus) digitalizam e opcionalmente comprimem o áudio analógico, equilibrando taxa de bits, consumo de DSP, resistência a perdas e qualidade medida por **MOS** (*Mean Opinion Score*). O cálculo correto da banda por chamada exige somar ao payload do codec a sobrecarga de empacotamento (IP + UDP + RTP e camada Ethernet a cada `20 ms`).',
      'G.711 (PCMU/PCMA — mu-law / A-law): codec padrão sem compressão — PCM (Pulse Code Modulation) a `64 kbps` de payload; `80 kbps` na Camada 3 e `87,2 kbps` na camada Ethernet somando cabeçalhos IP/UDP/RTP (`40 bytes`) + Ethernet (`18 bytes`) a cada `20 ms` — baixíssimo uso de CPU e excelente qualidade (MOS ~`4,1–4,4`), ideal em LANs (Local Area Networks) corporativas.',
      'G.729: codec de alta compressão (`8 kbps` de payload; `24 kbps` na Camada 3 e `31,2 kbps` na camada Ethernet com cabeçalhos padrão a `20 ms`, reduzível com cRTP — Compressed RTP), sacrifica levemente a fidelidade (MOS ~`3,9`) e exige processamento DSP (Digital Signal Processor) considerável — histórico para economizar banda em enlaces WAN (Wide Area Networks) lentos.',
      'Codecs Wideband / HD Voice (G.722 e Opus): G.722 captura faixa acústica estendida (`50 Hz–7 kHz` a `64 kbps`, superior aos `300–3400 Hz` estreitos do G.711); Opus é o codec aberto moderno mais versátil (`6 kbps` a `510 kbps` adaptativo), excelente contra perda de pacotes e padrão em WebRTC (Web Real-Time Communication) e plataformas modernas.',
      'MOS (Mean Opinion Score): escala subjetiva/estimada de qualidade de voz de `1` (péssimo) a `5` (excelente); telefonia corporativa saudável busca MOS >= `3,8–4,0` (G.711 atinge ~`4,4` no máximo teórico).',
      'Cálculo de Largura de Banda VoIP: a taxa nominal do codec (ex.: `64 kbps`) NÃO reflete o consumo real na rede — pacotes de voz enviam amostras a cada `20 ms` (`50 pacotes/segundo`), onde `40 bytes` de cabeçalho IP (`20`) + UDP (`8`) + RTP (`12`) somam `16 kbps` extras em L3 antes mesmo dos cabeçalhos Ethernet / `802.1Q` (`4 bytes` adicionais na tag de VLAN).',
      'Exemplo operacional: em `50 pps` (`20 ms`), uma chamada **G.711** envia `160 B` de payload + `40 B` IP/UDP/RTP = `200 B` (`80 kbps` L3) e, com `18 B` Ethernet, `218 B` (`87,2 kbps` L2); já em **G.729** (`20 B` payload), soma `60 B` (`24 kbps` L3) e `78 B` (`31,2 kbps` Ethernet). Para `10` chamadas simultâneas em **G.711** sobre Ethernet, dimensiona-se `872 kbps` (ou `312 kbps` em **G.729** para enlaces WAN restritos).'
    ],
    technicalReference: [
      'G.711 (20 ms): 64 kbps payload | 80 kbps L3 (IP/UDP/RTP) | 87,2 kbps Ethernet | G.729 (20 ms): 8 kbps payload | 24 kbps L3 | 31,2 kbps Ethernet',
      'Wideband: G.722 (64 kbps HD 7 kHz) | Opus (taxa dinâmica 6–510 kbps) | Escala MOS: 1 (inaceitável) a 5 (excelente; >= 4,0 é meta corporativa).'
    ],
    examTraps: [
      'Dimensionar um link para 10 chamadas G.711 calculando apenas 10 × 64 kbps = 640 kbps É ERRO GRAVE — com cabeçalhos IP/UDP/RTP + L2, cada chamada G.711 consome 87,2 kbps (ou ~88,8 kbps com tag 802.1Q / mais com VPN), totalizando 872+ kbps.',
      'G.711 NÃO é um codec comprimido de baixa largura de banda (esse é o G.729); G.711 usa PCM não comprimido a 64 kbps.',
      'Transcodificação (ex.: ramal interno G.711 falando com tronco WAN em G.729) exige recursos de DSP dedicados no gateway/SBC.'
    ],
    keyTerms: [
      'G.711 (PCMU / PCMA): codec PCM sem compressão a 64 kbps de payload (80 kbps L3 / 87,2 kbps Ethernet a 20 ms) com baixo uso de CPU',
      'G.729: codec comprimido de 8 kbps de payload (24 kbps L3 / 31,2 kbps Ethernet a 20 ms) com maior custo de DSP',
      'Overhead IP/UDP/RTP (40 bytes): acréscimo de 16 kbps a 50 pps (20 ms) sobre a taxa bruta do codec antes dos cabeçalhos de enlace',
      'G.722 / Opus (Wideband): codecs de áudio em banda larga que superam o espectro estreito (300–3400 Hz) da telefonia PSTN tradicional',
      'MOS (Mean Opinion Score): métrica de qualidade de áudio de 1 a 5 (meta corporativa típica >= 4,0)'
    ]
  },
  '8.1.4': {
    itemId: '8.1.4',
    highYieldSummary: [
      'Definição e escopo: a qualidade da voz em redes IP depende do controle estrito dos parâmetros unidirecionais (one-way) definidos pela recomendação **ITU-T G.114** e práticas corporativas de tempo real: latência, variação do atraso (jitter) e perda de pacotes. Como o áudio utiliza UDP sem retransmissão, desvios acima dos limiares exigem prioridade de QoS na rede além da compensação limitada do *De-jitter Buffer*.',
      'Latência (Delay — recomendação ITU-T G.114): o atraso unidirecional (one-way) total da fala entre boca do emissor e ouvido do receptor deve ser INFERIOR a `150 ms` para conversação interativa natural, sendo `400 ms` o limite máximo absoluto aceitável segundo a G.114 (acima de `200–300 ms` já ocorrem atropelos na fala — *talk-over*).',
      'Componentes do Atraso: atraso fixo (algoritmo/empacotamento do codec ~`20 ms`, serialização, propagação em fibra ~`5 µs/km`) e atraso variável (enfileiramento em filas de roteadores/switches sem QoS e buffer de jitter no receptor).',
      'Jitter (Variação do Atraso): irregularidade no intervalo de chegada entre pacotes RTP consecutivos (saem a cada `20 ms`, mas chegam alternando `5 ms` e `65 ms`); o limite corporativo recomendado é INFERIOR a `30 ms`, compensado por um De-jitter Buffer que converte variação em pequeno atraso fixo.',
      'Perda de Pacotes (Packet Loss): pacotes descartados por congestionamento, erros físicos — CRC (Cyclic Redundancy Check) — ou expiração por atraso extremo no jitter buffer; por ser áudio em tempo real sobre UDP sem retransmissão, a perda deve ser INFERIOR a `1%` (acima de `2–3%` provoca cortes metálicos e falhas de sílabas).',
      'Efeito Cascata de Buffer Excessivo: aumentar demais o De-jitter Buffer elimina falhas por jitter moderado, mas eleva diretamente a latência unidirecional — por isso é obrigatório controlar o jitter na rede via QoS em vez de mascarar com buffers gigantes.',
      'Exemplo operacional: em uma chamada entre unidades separadas por `600 km` de fibra (`~3 ms` de propagação), o atraso fixo de codec, serialização e buffer soma `55 ms`; porém, durante backup noturno sem QoS, filas **FIFO** (*First-In, First-Out*) elevam o atraso de fila em `120 ms` (latência total `175 ms > 150 ms` recomendados), com `jitter = 48 ms` (`> 30 ms`) e descarte de `2,4%` (`> 1%`). Ativar fila de prioridade estrita normaliza a latência abaixo de `70 ms`.'
    ],
    technicalReference: [
      'SLAs Clássicos VoIP (One-Way): Latência < 150 ms (ITU-T G.114 recomendado; 400 ms limite máximo) | Jitter < 30 ms | Perda de Pacotes < 1%',
      'De-jitter Buffer: absorve variação de chegada no destino ao custo de aumentar a latência fixa total.'
    ],
    examTraps: [
      'A banca testa os limiares exatos: Latência one-way < 150 ms (não confundir com RTT de 150 ms — 150 ms é unidirecional! E 400 ms é o teto máximo da G.114), Jitter < 30 ms e Perda < 1%.',
      'Aumentar banda bruta sem aplicar QoS NÃO resolve jitter ou perda durante picos de download/backup — fila FIFO enche igual até saturar o buffer do link.',
      'Pacotes RTP que chegam tarde demais (após o tempo da janela do jitter buffer) são descartados pelo telefone como se tivessem sido perdidos na rede.'
    ],
    keyTerms: [
      'ITU-T G.114 (150 ms / 400 ms): padrão que recomenda atraso one-way < 150 ms para qualidade plena e fixa 400 ms como limite máximo',
      'Jitter (< 30 ms): variação do intervalo de chegada dos pacotes RTP em relação à cadência regular de envio (20 ms)',
      'Perda de Pacotes (< 1%): descartes em rede ou por expiração do jitter buffer que degradam inteligibilidade em fluxos UDP sem retransmissão',
      'De-jitter Buffer: memória temporária no receptor que reordena e cadencia pacotes RTP ao custo de acréscimo na latência fixa',
      'Atraso Fixo vs Variável: somatório determinístico (codec/serialização/fibra) versus atraso oscilante provocado por enfileiramento'
    ]
  },
  '8.2.1': {
    itemId: '8.2.1',
    highYieldSummary: [
      'Definição e escopo: plataformas de telefonia IP corporativa — como **Cisco Unified Communications Manager (CUCM)** ou sistemas baseados em **Asterisk/FreePBX** — centralizam o provisionamento de endpoints, planos de discagem, restrições de chamada e contingência em filiais. Operam em arquitetura clusterizada (Publisher/Subscribers) combinando DHCP, TFTP/HTTP e SIP para manter disponibilidade contínua.',
      'Cisco Unified Communications Manager (CUCM / CallManager) e Equivalentes (Asterisk/FreePBX): arquitetura cliente-servidor baseada em cluster Publisher (banco de dados mestre e administração) + Subscribers (processamento de chamadas em redundância), mantendo alta disponibilidade via listas de servidores (Call Manager Group).',
      'Registro de Endpoints (Phones/Softphones): telefones IP obtêm IP e servidor TFTP (Trivial File Transfer Protocol — UDP `69`) / configuração via DHCP (Dynamic Host Configuration Protocol — ex.: `Option 150` no Cisco CUCM ou `Option 66` genérica), baixam arquivos XML (Extensible Markup Language) / firmware e registram seu ramal via SIP ou SCCP (Skinny Client Control Protocol — legado Cisco) mantendo keepalives periódicos.',
      'Plano de Discagem (Dial Plan): define estrutura de ramais internos, códigos de acesso externo (ex.: prefixo `0`), regras de manipulação de dígitos (`route patterns`, `translation patterns`) e encaminhamento para troncos PSTN ou filiais remotas.',
      'Classes de Serviço (CSS — Calling Search Space / Partitions no CUCM ou Contexts no Asterisk): segregam permissões de discagem (ex.: ramal de recepção só liga interno/local; ramal diretoria liga DDD/DDI — Discagem Direta a Distância/Internacional — e celular), impedindo fraudes e uso indevido.',
      'Sobrevivência em Filiais (SRST — Survivable Remote Site Telephony): se o link WAN até o CUCM central cair, o roteador local da filial assume temporariamente o controle mínimo dos telefones IP locais garantindo chamadas internas e saída pela linha PSTN de contingência.',
      'Exemplo operacional: ao ligar um telefone IP em uma unidade remota, o escopo DHCP da VLAN de voz entrega o endereço IP e a `Option 150 = 10.1.10.11, 10.1.10.12` (Subscribers do **CUCM**). O aparelho baixa o arquivo `SEP<MAC>.cnf.xml` via TFTP, registra o ramal `4210` em `Partition_Interna` com `CSS_Restrita` (permitindo apenas ramais e emergência `192`) e, caso a WAN caia, alterna automaticamente para o roteador local em modo **SRST**.'
    ],
    technicalReference: [
      'CUCM Cluster: Publisher (configuração mestre) + Subscribers (processamento em ativo/standby) | DHCP Option 150 (TFTP Cisco) / Option 66',
      'Dial Plan & Segurança: Partitions + Calling Search Space (CSS) controlam quem pode discar para quais destinos; SRST garante sobrevivência local sem WAN.'
    ],
    examTraps: [
      'Em Cisco IP Telephony, a opção DHCP usada para informar múltiplos servidores TFTP aos telefones é tipicamente a Option 150 (endereços IP), enquanto Option 66 suporta um único nome/IP TFTP padrão RFC.',
      'Se o CUCM Publisher cair temporariamente, os Subscribers continuam processando chamadas e registros existentes normalmente (apenas alterações de configuração/novas criações ficam suspensas).',
      'Sem controle adequado de CSS/Partitions (ou contextos no Asterisk), usuários ou atacantes podem explorar transferências para realizar ligações DDI fraudulentas (toll fraud).'
    ],
    keyTerms: [
      'Publisher vs Subscriber (CUCM): nó detentor da base mestre administrativa versus nós redundantes que processam chamadas e registros',
      'DHCP Option 150 vs Option 66: opção proprietária Cisco que aceita lista de IPs TFTP (150) versus opção padrão RFC para único servidor (66)',
      'Partitions e CSS (Calling Search Space): agrupamento lógico de destinos (Partitions) e lista ordenada de permissões de discagem por ramal (CSS)',
      'SRST (Survivable Remote Site Telephony): modo de contingência no roteador de filial que assume o controle básico dos ramais quando a WAN cai',
      'Toll Fraud: exploração indevida de regras de discagem ou transferência para realizar chamadas tarifadas de longa distância/internacionais'
    ]
  },
  '8.2.2': {
    itemId: '8.2.2',
    highYieldSummary: [
      'Definição e escopo: a **VLAN de Voz** (*Voice VLAN* ou *Auxiliary VLAN*) isola logicamente o tráfego de telefones IP do tráfego de estações na mesma porta de acesso do switch, combinando um switch interno no telefone com descoberta automática via **CDP/LLDP-MED**. Garante separação de sub-redes IP/DHCP, mitigação de sniffing L2 por estações e marcação de prioridade **CoS 5 (802.1p)** para quadros de voz.',
      'VLAN de Voz (Voice VLAN / Auxiliary VLAN): recurso em portas de acesso de switches gerenciáveis que permite trafegar na mesma porta física RJ-45 duas VLANs distintas — quadros da VLAN de Voz com tag `802.1Q` e prioridade CoS `5` (Class of Service — campo PCP de 3 bits do cabeçalho `802.1p`) para o telefone IP e quadros sem tag (*untagged*) na VLAN de Dados para o PC ligado atrás do switch interno de 2 portas do telefone.',
      'Descoberta Automática via LLDP-MED e CDP: protocolos de Camada 2 — CDP (Cisco Discovery Protocol — proprietário Cisco) e LLDP-MED (Link Layer Discovery Protocol — Media Endpoint Discovery, padrão aberto IEEE 802.1AB / ANSI/TIA-1057) — anunciam automaticamente ao telefone conectado qual é o ID da VLAN de voz configurada na porta, dispensando configuração manual em centenas de aparelhos.',
      'Benefícios de Segurança e Gerência: isola telefones IP da sub-rede de estações de trabalho impedindo que usuários capturem áudio RTP via ARP (Address Resolution Protocol) spoofing/sniffing na mesma rede L2, além de facilitar políticas separadas de DHCP, firewall/ACL (Access Control List) e QoS.',
      'Configuração Típica na Porta do Switch: a porta permanece como porta de acesso (não trunk irrestrito!), configurada com `switchport access vlan <dados>` e `switchport voice vlan <voz>`, aceitando apenas as duas VLANs estritamente necessárias.',
      'PortFast e Trust Boundary: portas com telefone + PC devem usar Spanning-Tree PortFast/Edge (transição imediata para Forwarding evitando atraso de `30–50 s` no boot do telefone) e aplicar política de confiança — QoS Trust DSCP (Differentiated Services Code Point) / CoS — apenas para o tráfego marcado pelo telefone, remarcando qualquer marcação falsa vinda do PC atrás dele.',
      'Exemplo operacional: em uma estação de enfermagem onde o PC conecta-se à porta traseira do telefone IP, configura-se a porta do switch `Gi1/0/15` com `switchport mode access`, `switchport access vlan 10`, `switchport voice vlan 20`, `spanning-tree portfast` e **LLDP-MED** ativo. O telefone recebe o ID `20` via LLDP-MED, envia seus pacotes marcados com tag `802.1Q` (`VLAN 20`, `CoS 5`), enquanto o PC trafega *untagged* na `VLAN 10` e tem eventuais marcações QoS zeradas na fronteira de confiança.'
    ],
    technicalReference: [
      'Porta com Telefone IP + PC: Dados (Untagged / Access VLAN) + Voz (Tagged 802.1Q / Voice VLAN + CoS 5)',
      'Descoberta automática da Voice VLAN: LLDP-MED (padrão aberto IEEE) ou CDP (Cisco).'
    ],
    examTraps: [
      'Mesmo carregando quadros tagueados da Voice VLAN + quadros untagged da Data VLAN, uma porta configurada com `switchport voice vlan` NÃO deve ser aberta como trunk genérico permitindo todas as VLANs corporativas (risco de VLAN hopping / segurança).',
      'O PC conectado atrás do telefone IP NÃO tem permissão de enviar marcações DSCP EF (46) confiáveis — o switch/telefone deve aplicar Trust apenas ao tráfego do próprio telefone e rebaixar/zerar marcações QoS abusivas vindas da porta de acesso do PC.',
      'Desabilitar LLDP-MED/CDP sem configurar a VLAN manualmente no telefone faz o aparelho cair na VLAN de dados comum e falhar ao receber Option 150/66.'
    ],
    keyTerms: [
      'Voice VLAN (802.1Q): VLAN dedicada configurada em porta de acesso para receber quadros tagueados de voz junto aos dados untagged do PC',
      'LLDP-MED vs CDP: protocolo aberto (IEEE 802.1AB / TIA-1057) versus proprietário Cisco para anunciar Voice VLAN e potência PoE ao telefone',
      'CoS 5 (802.1p): prioridade de Camada 2 (3 bits PCP dentro da tag 802.1Q) atribuída aos quadros de voz na VLAN tagueada',
      'Trust Boundary (Fronteira de Confiança): ponto onde a rede passa a confiar ou remarcar marcações QoS (confia no telefone, zera o PC atrás dele)',
      'PortFast / Edge Port: recurso Spanning Tree que coloca a porta de acesso em Forwarding imediatamente durante o boot do telefone'
    ]
  },
  '8.2.3': {
    itemId: '8.2.3',
    highYieldSummary: [
      'Definição e escopo: o **QoS** (*Quality of Service*) baseado no modelo **DiffServ** (RFC 2474/2475) classifica, marca e prioriza tráfego de voz e sinalização ao longo de switches e roteadores para manter latência, jitter e perda dentro dos limites de tempo real mesmo sob congestionamento. Combina marcações L2/L3 (**CoS 5**, **DSCP EF 46**, **CS3 24**), **LLQ**, **CBWFQ**, policiamento e *shaping*.',
      'Modelo DiffServ (Differentiated Services): padrão corporativo de QoS baseado em marcação no cabeçalho IP — campo DSCP (Differentiated Services Code Point) de 6 bits dentro do byte ToS (Type of Service) / Traffic Class, permitindo `64` classes PHB (Per-Hop Behavior) — e na camada 2 Ethernet `802.1p` (campo CoS de 3 bits, valores `0` a `7` dentro da tag `802.1Q`).',
      'Marcações Padrão de Telefonia IP: Mídia de Voz (RTP) deve ser marcada com DSCP **EF** (Expedited Forwarding = valor decimal `46`, equivalente a CoS `5` em L2); Sinalização VoIP (SIP/SCCP) recebe DSCP **CS3** (`24`) ou **AF31** (`26`) com CoS `3`; Tráfego comum permanece *Best Effort* (DSCP `0`).',
      'Enfileiramento de Baixa Latência (LLQ — Low Latency Queueing): combina fila de prioridade estrita (*Priority Queue*) exclusiva para voz (atendida imediatamente antes de qualquer outra fila, com policiamento de teto — recomendando-se não exceder ~`33%` da capacidade do enlace para evitar *starvation*, inanição das demais filas) com filas CBWFQ (Class-Based Weighted Fair Queuing) para sinalização e aplicações críticas.',
      'Policing vs Shaping e WRED: Shaping suaviza picos retendo pacotes excedentes em buffer até caberem na taxa contratada (bom para saída WAN); Policing descarta ou remarca excessos imediatamente (adequado para limitar a fila EF); WRED (Weighted Random Early Detection) evita sincronização global TCP em filas de dados (nunca deve ser aplicado à fila de voz!).',
      'QoS Fim a Fim (End-to-End): se um único enlace congestionado no caminho — switch de acesso, uplink, roteador WAN ou operadora MPLS (Multiprotocol Label Switching) — descartar ou ignorar as marcações DSCP, o jitter e a perda comprometem toda a chamada.',
      'Exemplo operacional: em um link WAN de `10 Mbps` que interliga duas unidades hospitalares, configura-se **LLQ** reservando fila de prioridade estrita limitada por *policer* a `900 kbps` (`9%` do link, bem abaixo de `33%`) para `10` chamadas simultâneas **G.711** (`10 × 87,2 kbps = 872 kbps`) marcadas com **DSCP EF (`46`)**, além de fila **CBWFQ** garantindo banda para sinalização **DSCP CS3 (`24`)**. Na borda de acesso, o *Trust Boundary* preserva `EF 46` apenas dos telefones IP.'
    ],
    technicalReference: [
      'Marcação Padrão VoIP: Voz RTP -> DSCP EF (46) / CoS 5 | Sinalização SIP -> DSCP CS3 (24) ou AF31 (26) / CoS 3',
      'Mecanismo de Fila Voz: LLQ (Strict Priority Queue com limite máximo de banda para evitar starvation de sinalização/dados).'
    ],
    examTraps: [
      'Banca cobra valores exatos: Voz RTP = DSCP EF (46) / CoS 5; Sinalização SIP = DSCP CS3 (24) ou AF31 (26) / CoS 3.',
      'NUNCA aplicar Traffic Shaping com buffering profundo na fila de voz sem prioridade LLQ — enfileirar voz aumenta latência e jitter.',
      'Como o cabeçalho 802.1Q (onde mora o CoS de 3 bits) só existe em enlaces trunk ou voice VLAN tagueados e se perde ao atravessar roteadores L3, o campo DSCP no cabeçalho IP é essencial para preservar prioridade ponta a ponta na WAN.'
    ],
    keyTerms: [
      'DSCP EF (46) / CoS 5: marcação DiffServ L3 (46) e L2 802.1p (5) reservada exclusivamente para pacotes de mídia de voz em tempo real',
      'DSCP CS3 (24) / AF31 (26): marcações padrão recomendadas para sinalização VoIP (SIP/SCCP) em fila CBWFQ garantida',
      'LLQ (Low Latency Queueing): arquitetura que une fila de prioridade estrita policiada (~<= 33% do link) com filas ponderadas CBWFQ',
      'Policing vs Shaping: descarte/remarcação imediata de excesso sem fila (Policing) versus retenção em buffer para suavizar picos na taxa (Shaping)',
      'WRED (Weighted Random Early Detection): descarte preventivo aplicado a fluxos TCP de dados para evitar saturação súbita (inadequado para voz)'
    ]
  },
  '8.2.4': {
    itemId: '8.2.4',
    highYieldSummary: [
      'Definição e escopo: o **SIP** (*Session Initiation Protocol* — RFC 3261) governa o ciclo completo de registro, estabelecimento, modificação e encerramento de chamadas IP por meio de requisições textuais e respostas numeradas (`1xx–6xx`) sobre UDP/TCP `5060` ou TLS `5061`. Integra elementos **UAC/UAS**, **Registrar**, **Proxy**, **Redirect** e **B2BUA** carregando cabeçalhos de roteamento e correlação (`Via`, `From`, `To`, `Call-ID`, `CSeq`, `Contact`).',
      'Métodos (Requisições) SIP Essenciais: `REGISTER` (endpoint informa IP atual e registra seu URI — Uniform Resource Identifier — no Registrar Server), `INVITE` (inicia chamada propondo SDP), `ACK` (confirma recebimento da resposta final `200 OK` do `INVITE` — completando handshake 3-way), `BYE` (encerra chamada já estabelecida), `CANCEL` (desiste de chamada ainda tocando antes do `200 OK`), `OPTIONS` (keepalive/verificação de capacidades) e `REFER` (transferência assistida/cega).',
      'Famílias de Códigos de Resposta SIP (estilo HTTP): `1xx` Provisórias (`100 Trying`, `180 Ringing`, `183 Session Progress`), `2xx` Sucesso (`200 OK`), `3xx` Redirecionamento (`302 Moved Temporarily`), `4xx` Erro do Cliente (`401 Unauthorized` / `407 Proxy Authentication Required` — desafio Digest, `403 Forbidden`, `404 Not Found`, `486 Busy Here`), `5xx` Erro de Servidor (`503 Service Unavailable`) e `6xx` Falha Global.',
      'Portas e Transporte SIP: porta padrão UDP/TCP `5060` para SIP em texto claro; TCP `5061` para SIPS (SIP sobre TLS criptografado); SIP suporta UDP pela leveza, porém pacotes grandes com múltiplos codecs (acima da MTU) ou SIPS exigem TCP.',
      'Papéis Arquiteturais SIP: User Agent — **UAC** (User Agent Client, inicia) / **UAS** (User Agent Server, responde) — **Registrar** (recebe `REGISTER`), **Proxy Server** (encaminha sinalização mantendo ou não estado), **Redirect Server** (responde `3xx` indicando novo destino) e **B2BUA** (Back-to-Back User Agent — atua como UAS de um lado e UAC do outro, típico de PBXs e SBCs).',
      'Fluxo Completo de uma Chamada SIP: UAC envia `INVITE` -> recebe `100 Trying` -> recebe `180 Ringing` -> destinatário atende gerando `200 OK` (com SDP de resposta) -> UAC envia `ACK` -> áudio RTP flui bidirecionalmente -> ao desligar, qualquer lado envia `BYE` -> outro confirma com `200 OK`.',
      'Exemplo operacional: ao discar do ramal `1010` para `1020`, o **UAC** envia `INVITE sip:1020@hosp.org.br` (`TCP 5061`) com `Via`, `From`, `To`, `Call-ID`, `CSeq: 1 INVITE` e `Contact`; o proxy responde `407 Proxy Authentication Required` (Digest), o UAC reenvia autenticado, recebe `100 Trying` -> `180 Ringing` -> `200 OK`, envia `ACK` e inicia o fluxo RTP. Ao final da conversa, envia `BYE` encerrado por `200 OK`.'
    ],
    technicalReference: [
      'Handshake de Chamada SIP: INVITE (SDP offer) -> 100 Trying -> 180 Ringing -> 200 OK (SDP answer) -> ACK -> [Fluxo RTP] -> BYE -> 200 OK',
      'Desistência antes de atender: CANCEL (se ainda não recebeu 200 OK) | Encerramento após atender: BYE | Portas: 5060 (SIP) / 5061 (SIPS/TLS).'
    ],
    examTraps: [
      'CANCEL só serve para cancelar uma chamada ANTES de o destinatário atender (antes do 200 OK); depois que a chamada foi estabelecida (após 200 OK/ACK), o encerramento obrigatório é via BYE.',
      'O código SIP 486 significa "Busy Here" (ramal ocupado), e 401/407 solicitam autenticação Digest (não são necessariamente falha definitiva no primeiro desafio do fluxo REGISTER/INVITE).',
      'ACK é usado apenas para confirmar respostas finais a um INVITE (não se envia ACK para BYE ou REGISTER — esses encerram direto no 200 OK).'
    ],
    keyTerms: [
      'INVITE / ACK / BYE / CANCEL: métodos centrais para iniciar (INVITE), confirmar atendimento (ACK), encerrar sessão ativa (BYE) ou desistir antes de atender (CANCEL)',
      'UAC / UAS / B2BUA: cliente emissor de requisição (UAC), servidor receptor (UAS) e elemento intermediário que termina e reinicia sessões (B2BUA)',
      '401 / 407 (Autenticação Digest): desafios normais de segurança onde o UAS/Registrar (401) ou Proxy (407) solicita nonce+hash sem enviar senha em claro',
      'Via / Call-ID / CSeq / Contact: cabeçalhos SIP que rastreiam saltos de retorno (Via), identificam o diálogo (Call-ID), ordenam transações (CSeq) e indicam alcance direto (Contact)',
      'REFER / 183 Session Progress: método de transferência de chamadas e resposta provisória usada para mídia antecipada (early media / ringback)'
    ]
  },
  '8.2.5': {
    itemId: '8.2.5',
    highYieldSummary: [
      'Definição e escopo: o **RTP** (*Real-time Transport Protocol* — RFC 3550) transporta pacotes de mídia contínua sobre UDP incorporando campos próprios de ordenação, temporização e identificação de fluxo que o UDP não oferece. Opera em conjunto com relatórios **RTCP**, buffers de jitter, transporte confiável de dígitos **DTMF** (**RFC 2833/4733**) e supressão de silêncio (**VAD/CNG**).',
      'Estrutura do Pacote RTP (12 bytes de cabeçalho fixo sobre UDP): carrega Version (`2`), Payload Type (`PT` — identifica o codec, ex.: `0` = G.711 PCMU, `8` = G.711 PCMA, `18` = G.729, e `PT` dinâmico como `101` = DTMF RFC 2833/4733), Sequence Number (`16` bits — detecta perda e reordena pacotes), Timestamp (`32` bits — sincroniza reprodução e calcula jitter) e SSRC (Synchronization Source — identifica o fluxo único).',
      'Fluxo Bidirecional Simétrico e Faixas de Portas: cada chamada estabelece dois fluxos UDP independentes (ida e volta) em portas altas pares negociadas dinamicamente no SDP (`m=audio <porta> RTP/AVP ...`), exigindo regras de firewall dinâmicas ou liberação da faixa RTP do PBX/SBC (com RTCP na porta ímpar adjacente `RTP + 1`).',
      'Buffer de Jitter (Estático vs Adaptativo): armazena temporariamente de `20` a `60 ms` de pacotes RTP antes de entregar ao DSP de áudio para suavizar chegadas irregulares; buffers adaptativos ajustam o tamanho dinamicamente conforme condições da rede.',
      'Transporte de DTMF (Tons de Teclado — Dual-Tone Multi-Frequency) em VoIP: NUNCA depender de In-Band puro em codecs comprimidos como G.729 (que distorcem os tons impedindo navegação em URAs — Unidades de Resposta Audível / IVRs — Interactive Voice Response); padrão corporativo usa RFC 2833/4733 (Named Telephony Events dentro do fluxo RTP) ou sinalização Out-of-Band via SIP INFO / KPML (Key Press Markup Language).',
      'Silence Suppression (VAD — Voice Activity Detection) e Comfort Noise (CNG — Comfort Noise Generation): pausas de silêncio podem suprimir envio de pacotes RTP economizando até ~`50%` da banda em trunks saturados, gerando ruído de conforto sintético (CNG) para o ouvinte não achar que a chamada caiu.',
      'Exemplo operacional: em uma ligação atendida por URA corporativa usando codec **G.729 (`PT = 18`)**, os tons de teclado trafegam como eventos nomeados **RFC 4733 (`PT = 101`)** dentro do fluxo **RTP** em `UDP 18420`, enquanto os relatórios **RTCP Sender/Receiver Report** na porta `18421` contabilizam saltos de `Sequence Number` (perda) e variação de `Timestamp` (jitter = `11 ms`).'
    ],
    technicalReference: [
      'Campos-chave RTP: Payload Type (codec/DTMF) | Sequence Number (detecta perdas e ordem) | Timestamp (calcula jitter e playback) | SSRC (origem)',
      'DTMF confiável: RFC 2833/4733 (RTP-NTE) ou SIP INFO — evitar In-Band sobre codecs comprimidos (G.729).'
    ],
    examTraps: [
      'A sequência e o timestamp estão no cabeçalho RTP (e NÃO no UDP) exatamente porque UDP puro não garante ordem nem controle temporal.',
      'Se um usuário consegue ligar, mas a URA do banco/empresa não reconhece os dígitos digitados no teclado, o erro típico é incompatibilidade de método DTMF (ex.: um lado enviando In-Band comprimido e o outro esperando RFC 2833/4733).',
      'Com VAD (Silence Suppression) mal calibrado, início e fim de palavras podem soar cortados ("clipping").'
    ],
    keyTerms: [
      'Payload Type (PT 0 / 8 / 18 / 101): campo do cabeçalho RTP identificando o formato da mídia (PCMU=0, PCMA=8, G.729=18 e dinâmico p/ DTMF)',
      'Sequence Number vs Timestamp (RTP): contador de 16 bits para detectar perdas/reordenar versus relógio de amostragem de 32 bits para playback e jitter',
      'SSRC (Synchronization Source): identificador de 32 bits que distingue fontes independentes dentro de uma mesma sessão RTP',
      'DTMF RFC 2833/4733 vs In-Band: transporte dedicado de dígitos em pacotes RTP-NTE (confiável em G.729) versus áudio sintetizado no canal de voz',
      'RTCP SR/RR (Sender / Receiver Report): relatórios periódicos de estatísticas de pacotes enviados, perdidos e jitter na porta ímpar RTP + 1'
    ]
  },
  '8.2.6': {
    itemId: '8.2.6',
    highYieldSummary: [
      'Definição e escopo: o **PoE** (*Power over Ethernet* — IEEE **802.3af**, **802.3at** e **802.3bt**) fornece energia elétrica em corrente contínua (`44–57 V DC`) sobre o mesmo cabeamento par trançado Ethernet usado para dados. Elimina fontes externas individuais para telefones IP, APs Wi-Fi e câmeras, centralizando autonomia elétrica em nobreaks ligados aos switches de acesso.',
      'Padrões PoE (Power over Ethernet): IEEE 802.3af (PoE Tipo 1 — até `15,4 W` fornecidos na porta PSE / `12,95 W` úteis no PD), IEEE 802.3at (PoE+ Tipo 2 — até `30 W` no PSE / `25,5 W` no PD) e IEEE 802.3bt (PoE++ Tipos 3 e 4 — até `60 W` / `51 W` no PD e `90 W` / `71,3 W` no PD utilizando os 4 pares do cabo UTP — Unshielded Twisted Pair).',
      'PSE vs PD e Descoberta Segura: o switch ou midspan (injetor PoE intermediário) é o PSE (Power Sourcing Equipment) e o telefone IP/AP/câmera é o PD (Powered Device); o PSE NÃO injeta `48 V DC` cegamente — primeiro aplica baixa tensão de detecção (assinatura resistiva de ~`25 kΩ`) e negocia classe de potência (ou via LLDP-MED) protegendo placas comuns contra queima.',
      'Orçamento de Energia (Power Budget) do Switch: um switch PoE de `48` portas raramente possui fonte suficiente para entregar `30 W` simultâneos nas `48` portas (seriam `1.440 W`); se o Power Budget (ex.: `370 W` ou `740 W`) esgotar, portas de menor prioridade NÃO recebem energia ao conectar novos aparelhos.',
      'Priorização de Portas PoE e Redundância de Fontes: administradores configuram prioridade (`Critical` / `High` / `Low`) para garantir que telefones críticos e APs permaneçam ligados caso uma das fontes do switch falhe e o budget caia pela metade (sustentados por nobreak na sala técnica).',
      'Impacto do Cabeamento (Cat5e/Cat6) e Dissipação Térmica: parte da potência fornecida pelo PSE dissipa em calor ao longo de até `100 metros` de cabo par trançado (por isso `15,4 W` na porta garantem apenas `12,95 W` no dispositivo); em 802.3bt recomenda-se Cat6/Cat6A para reduzir aquecimento em feixes de cabos.',
      'Exemplo operacional: um switch de acesso de `48` portas com **Power Budget** de `370 W` (alimentado por nobreak dedicado) atende `30` telefones IP consumindo `6,5 W` cada (`195 W`) e `4` APs Wi-Fi PoE+ consumindo `25,5 W` cada (`102 W`), somando `297 W` alocados e deixando `73 W` de reserva. Via **LLDP-MED**, os APs negociam exatamente sua demanda evitando desperdício de orçamento por alocação fixa de classe.'
    ],
    technicalReference: [
      'IEEE 802.3af (PoE): PSE 15,4 W / PD 12,95 W (2 pares) | IEEE 802.3at (PoE+): PSE 30 W / PD 25,5 W (2 pares)',
      'IEEE 802.3bt (PoE++): Tipo 3 PSE 60 W (PD 51 W) | Tipo 4 PSE 90 W (PD 71,3 W) (4 pares) | Tensão nominal ~44–57 V DC.'
    ],
    examTraps: [
      'Pegadinha clássica: 802.3af entrega 15,4 W na porta do switch, mas garante apenas 12,95 W no telefone/AP devido à perda no cabo; 802.3at entrega 30 W e garante 25,5 W.',
      'Conectar um telefone ou AP PoE+ que pede 22 W em um switch 802.3af antigo (máx 15,4 W) faz o aparelho reiniciar em loop ou desligar rádios/portas extras por falta de potência.',
      'Exceder o Power Budget total da fonte do switch impede que novas portas energizem mesmo que a porta individual suporte 802.3at/bt.'
    ],
    keyTerms: [
      'PSE vs PD: equipamento fornecedor de energia na porta/injetor (PSE) versus dispositivo alimentado na ponta (PD)',
      '802.3af / 802.3at / 802.3bt: padrões PoE de 15,4 W (12,95 W PD), 30 W (25,5 W PD) e 60/90 W (4 pares)',
      'Power Budget: capacidade elétrica total disponível nas fontes do switch PoE para somatório simultâneo das portas ativas',
      'Detecção por Assinatura (~25 kΩ): teste inicial em baixa tensão feito pelo PSE antes de aplicar 48–57 V DC na linha',
      'LLDP-MED Power Negotiation: ajuste fino em L2 da potência solicitada pelo PD para otimizar o Power Budget do switch'
    ]
  },
  '8.2.7': {
    itemId: '8.2.7',
    highYieldSummary: [
      'Definição e escopo: o troubleshooting de Telefonia IP isola falhas distintas nos planos de sinalização (registro, estabelecimento, desconexão em `32 s`, codecs `488`), mídia RTP (*one-way audio*, picote, eco, DTMF) e infraestrutura (VLAN/DHCP/PoE). Apoia-se na análise conjunta de capturas **Wireshark** (`Telephony -> VoIP Calls` e `RTP Stream Analysis`), cabeçalhos **SDP**, regras de NAT/firewall e potência elétrica.',
      'One-Way Audio (Áudio Unidirecional — clássico absoluto de prova): a chamada completa (toca e atende), A ouve B, mas B não ouve A; quase sempre causado por NAT assimétrico (cabeçalho SDP anuncia IP privado RFC 1918 inalcançável pela outra ponta), bloqueio parcial de portas UDP RTP em firewall no meio do caminho ou ausência de rota de retorno.',
      'SIP ALG (Application Layer Gateway) em Firewalls/Roteadores: recurso padrão em muitos roteadores que tenta reescrever dinamicamente cabeçalhos SIP e endereços SDP ao cruzar NAT — na prática, implementações com falhas corrompem pacotes SIP, quebram registros, derrubam chamadas após `30` segundos (falta de `ACK`) ou causam *one-way audio*; recomendação padrão corporativa é DESABILITAR SIP ALG e usar SBC ou travessia NAT adequada — STUN (Session Traversal Utilities for NAT) / TURN (Traversal Using Relays around NAT) / ICE (Interactive Connectivity Establishment) / Symmetric RTP.',
      'Chamada Cai Exatamente em ~`30–32` Segundos: sintoma típico de falha no recebimento da mensagem `ACK` (ou `re-INVITE`/Session Timer) por cabeçalho `Contact:` ou `Record-Route:` incorreto atrás de NAT — o UAS retransmite `200 OK` (`Timer G`) até estourar o `Timer H` (`64 * T1 = 32 s` para `T1 = 0,5 s`) e encerrar a chamada.',
      'Áudio Picotado, Robótico ou Eco: investigar captura RTP/RTCP (`Wireshark Telephony -> VoIP Calls / RTP Stream Analysis`) observando picos de jitter (`> 30 ms`), perda de pacotes (`> 1%`), descarte de fila no roteador/firewall, incompatibilidade *half-duplex* em porta antiga ou ausência de marcação DSCP EF (`46`).',
      'Falha de Codec / Erro `488 Not Acceptable Here`: ocorre quando UAC e UAS não possuem nenhum codec em comum no SDP (ex.: lado A só aceita G.729 e lado B só aceita G.711 sem transcodificador no caminho) ou incompatibilidade SRTP vs RTP obrigatório (além de falhas de registro por VLAN incorreta, Option 150/66 ausente, `401/403` ou reinícios por PoE insuficiente).',
      'Exemplo operacional: após instalar firewall novo na borda, chamadas externas completam mas caem após exatamente `32 s` ou ficam em **One-Way Audio**. No **Wireshark** (`Telephony -> VoIP Calls`), observa-se que o `INVITE` externo chega anunciando `c=IN IP4 10.20.0.50` no SDP e o `200 OK` sofre sucessivas retransmissões sem receber `ACK` porque o **SIP ALG** alterou o `Contact:` incorretamente; desativar o **SIP ALG** e delegar o controle ao **SBC** elimina ambos os sintomas imediatamente.'
    ],
    technicalReference: [
      'Sintoma -> Causa Raiz: One-way audio -> NAT/SDP anunciando IP privado ou firewall bloqueando faixa UDP RTP | Cai em ~32s -> ACK perdido (Contact/NAT/SIP ALG)',
      'Erro SIP 488 Not Acceptable Here -> incompatibilidade de codec ou SRTP no SDP | Ferramenta: Wireshark (sip || rtp -> Telephony -> VoIP Calls / RTP Analysis).'
    ],
    examTraps: [
      'Se o telefone chama, toca, atende e tem áudio de UM lado só, a sinalização SIP (5060) ESTÁ funcionando — não culpe a porta 5060; investigue SDP (IP privado no `c=IN IP4`), NAT e bloqueio das portas UDP de mídia RTP.',
      'Habilitar SIP ALG em múltiplos firewalls em cascata frequentemente CORROMPE a sinalização SIP; em ambientes com SBC ou PBX moderno, desativar SIP ALG costuma resolver travamentos de áudio e quedas em 32 segundos.',
      'Chamada que cai exatos 15 minutos após atender costuma indicar falha de Session Timers (re-INVITE / UPDATE bloqueado em firewall stateful).'
    ],
    keyTerms: [
      'One-Way Audio (c=IN IP4 privado): falha de mídia em um sentido causada por NAT sem tradução no SDP ou bloqueio parcial das portas UDP RTP',
      'SIP ALG (Application Layer Gateway): inspeção em roteador/firewall que frequentemente corrompe cabeçalhos SIP/SDP e deve ser desabilitada com SBC',
      'Queda em 32 s (Timer H = 64×T1): interrupção por ausência de ACK ao 200 OK após expiração das retransmissões SIP (Contact/NAT incorreto)',
      'SIP 488 Not Acceptable Here: rejeição de chamada por ausência de codec comum ou divergência SRTP/RTP na negociação SDP',
      'Wireshark RTP Stream Analysis: módulo de diagnóstico que exibe fluxo de chamada SIP e mede jitter, perda e sequência dos pacotes RTP'
    ]
  }
};
