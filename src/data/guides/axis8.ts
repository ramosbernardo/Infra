import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_8: Record<string, StudyGuide> = {
  '8.1.1': {
    itemId: '8.1.1',
    highYieldSummary: [
      'Arquitetura de Voz sobre IP (VoIP): converte sinais analógicos de áudio em pacotes digitais IP transmitidos pela rede de dados, separando o plano de sinalização/controle (estabelecer, encaminhar e encerrar chamadas via PBX IP) do plano de mídia (fluxo contínuo de áudio em tempo real).',
      'Componentes Centrais (PBX IP, Gateways e SBC): PBX IP (CUCM, Asterisk/FreePBX) gerencia registro de ramais, plano de discagem (dial plan) e roteamento de chamadas; Gateways de Voz (FXO/FXS/E1-PRI) interligam ramais analógicos ou troncos digitais legados à rede IP.',
      'SBC (Session Border Controller): dispositivo de fronteira especializado entre a rede VoIP interna e o tronco SIP da operadora (PSTN/ITSP); executa proteção contra fraudes/DoS SIP, ocultação de topologia, normalização de cabeçalhos SIP, transcodificação de codecs e travessia de NAT.',
      'Integração com PSTN (STFC): troncos SIP (SIP Trunks) substituem múltiplos links físicos E1/PRI (R2/ISDN) por sessões IP consolidadas até a operadora, reduzindo custos e permitindo portabilidade e redundância geográfica.',
      'Vantagens e Desafios Operacionais: consolidação de voz e dados na mesma infraestrutura física exige isolamento em VLAN dedicada, prioridade rigorosa de QoS para tempo real e disponibilidade elétrica via PoE + nobreaks (telefonia fixa tradicional alimentava aparelhos pela linha da central).'
    ],
    technicalReference: [
      'Plano de Controle (PBX IP / SIP / H.323) vs Plano de Mídia (RTP/SRTP direto ponta a ponta ou via MTP/SBC)',
      'Portas analógicas/digitais: FXS (conecta telefone/fax analógico) | FXO (conecta linha externa da operadora) | E1 (30 canais de voz + 2 sinalização = 2,048 Mbps).'
    ],
    examTraps: [
      'Em telefonia VoIP, a mídia RTP normalmente trafega DIRETAMENTE entre os dois telefones IP (peer-to-peer) — o PBX IP controla apenas a sinalização, salvo quando há conferência, gravação, transcodificação ou SBC no caminho.',
      'Firewalls convencionais L4/NGFW NÃO substituem totalmente um SBC corporativo para manipulação profunda de SIP, ocultação de topologia e controle de mídia RTP.',
      'Confundir FXS (Foreign Exchange Station — fornece tom de discagem e corrente ao aparelho) com FXO (Foreign Exchange Office — recebe linha externa).'
    ],
    keyTerms: ['VoIP', 'PBX IP', 'SBC (Session Border Controller)', 'PSTN / SIP Trunk', 'FXS vs FXO']
  },
  '8.1.2': {
    itemId: '8.1.2',
    highYieldSummary: [
      'SIP (Session Initiation Protocol — RFC 3261): protocolo de sinalização na camada de aplicação, baseado em texto (estilo HTTP), responsável por criar, modificar e encerrar sessões multimídia (portas padrão TCP/UDP 5060 em texto claro ou TCP 5061 sobre TLS — SIPS).',
      'SDP (Session Description Protocol — RFC 4566): transportado dentro do corpo das mensagens SIP (como INVITE e 200 OK) para negociar os parâmetros da mídia — endereço IP, porta UDP de escuta para áudio/vídeo e lista de codecs aceitos em ordem de preferência.',
      'RTP (Real-time Transport Protocol — RFC 3550): transporta efetivamente os pacotes de voz/vídeo sobre UDP (normalmente portas pares dinâmicas na faixa 16384–32767 ou 10000–20000), usando números de sequência e timestamps para detecção de perda e reordenação — sem retransmissão TCP (pois pacote atrasado em voz ao vivo é inútil).',
      'RTCP e SRTP: RTCP (porta ímpar imediatamente acima da porta RTP, ex.: RTP 16384 -> RTCP 16385) monitora estatísticas de QoS (jitter, perda de pacotes, atraso RTT); SRTP criptografa e autentica o fluxo de mídia RTP usando AES (com chaves negociadas via SDES no SDP sobre TLS ou DTLS-SRTP).',
      'H.323 vs SIP: H.323 (ITU-T) é um conjunto binário mais antigo e complexo (Gatekeeper, MCU, H.225/H.245, TCP 1720); SIP (IETF) consolidou-se como padrão dominante na telefonia IP moderna por ser modular, legível e flexível.'
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
    keyTerms: ['SIP (5060/5061)', 'SDP (negociação)', 'RTP (mídia UDP)', 'RTCP / SRTP', 'H.323']
  },
  '8.1.3': {
    itemId: '8.1.3',
    highYieldSummary: [
      'G.711 (PCMU/PCMA — mu-law / A-law): codec padrão sem compressão (PCM a 64 kbps de payload; ~87,2 kbps na camada Ethernet somando cabeçalhos IP/UDP/RTP de 40 bytes a cada 20 ms), baixíssimo uso de CPU e excelente qualidade (MOS ~4,1–4,4) — ideal em LANs corporativas com banda farta.',
      'G.729: codec de alta compressão (8 kbps de payload; ~31,2 kbps com cabeçalhos IP/UDP/RTP padrão, reduzível com cRTP), sacrifica levemente a fidelidade (MOS ~3,9) e exige processamento DSP considerável — histórico para economizar banda em enlaces WAN lentos.',
      'Codecs Wideband / HD Voice (G.722 e Opus): G.722 captura faixa acústica estendida (50 Hz–7 kHz a 64 kbps, muito superior aos 300–3400 Hz estreitos do G.711); Opus é o codec aberto moderno mais versátil (6 kbps a 510 kbps adaptativo), excelente contra perda de pacotes e padrão em WebRTC e plataformas modernas.',
      'MOS (Mean Opinion Score): escala subjetiva/estimada de qualidade de voz de 1 (péssimo) a 5 (excelente); telefonia corporativa saudável busca MOS >= 3,8–4,0 (G.711 atinge ~4,4 no máximo teórico).',
      'Cálculo de Largura de Banda VoIP: a taxa nominal do codec (ex.: 64 kbps) NÃO reflete o consumo real na rede — pacotes de voz enviam amostras a cada 20 ms (50 pacotes/segundo), onde 40 bytes de cabeçalho IP (20) + UDP (8) + RTP (12) somam 16 kbps extras antes mesmo dos cabeçalhos Ethernet/802.1Q.'
    ],
    technicalReference: [
      'G.711: 64 kbps codec / ~87,2 kbps Ethernet (20ms), baixa CPU, LAN | G.729: 8 kbps codec / ~31,2 kbps Ethernet, alta CPU (DSP), WAN',
      'Wideband: G.722 (64 kbps HD 7 kHz) | Opus (taxa dinâmica 6–510 kbps) | Escala MOS: 1 (inaceitável) a 5 (excelente; >= 4,0 é meta corporativa).'
    ],
    examTraps: [
      'Dimensionar um link para 10 chamadas G.711 calculando apenas 10 × 64 kbps = 640 kbps É ERRO GRAVE — com cabeçalhos IP/UDP/RTP + L2, cada chamada G.711 consome ~87,2 kbps (ou ~95+ kbps com VLAN/cVPN), totalizando quase 900 kbps.',
      'G.711 NÃO é um codec comprimido de baixa largura de banda (esse é o G.729); G.711 usa PCM não comprimido a 64 kbps.',
      'Transcodificação (ex.: ramal interno G.711 falando com tronco WAN em G.729) exige recursos de DSP dedicados no gateway/SBC.'
    ],
    keyTerms: ['G.711 (64 kbps)', 'G.729 (8 kbps)', 'G.722 / Opus (HD)', 'MOS (Mean Opinion Score)', 'Overhead IP/UDP/RTP']
  },
  '8.1.4': {
    itemId: '8.1.4',
    highYieldSummary: [
      'Latência (Delay — limite ITU-T G.114): atraso unidirecional (one-way) total da fala entre boca do emissor e ouvido do receptor deve ser INFERIOR a 150 ms para conversação interativa natural; acima de 200–300 ms ocorrem atropelos constantes na fala (talk-over).',
      'Componentes do Atraso: atraso fixo (algoritmo/empacotamento do codec ~20 ms, serialização, propagação em fibra ~5 µs/km) e atraso variável (enfileiramento em filas de roteadores/switches sem QoS e buffer de jitter no receptor).',
      'Jitter (Variação do Atraso): irregularidade no intervalo de chegada entre pacotes RTP consecutivos (se saem a cada 20 ms, mas chegam alternando 5 ms e 65 ms); o limite corporativo recomendado é INFERIOR a 30 ms, compensado por um De-jitter Buffer que converte variação em pequeno atraso fixo.',
      'Perda de Pacotes (Packet Loss): pacotes descartados por congestionamento, erros físicos (CRC) ou expiração por atraso extremo no jitter buffer; por ser áudio em tempo real sobre UDP sem retransmissão, a perda deve ser INFERIOR a 1% (acima de 2–3% provoca cortes metálicos e falhas de sílabas).',
      'Efeito Cascata de Buffer Excessivo: aumentar demais o De-jitter Buffer elimina falhas por jitter moderado, mas eleva diretamente a latência unidirecional — por isso é obrigatório controlar o jitter na rede via QoS em vez de mascarar com buffers gigantes.'
    ],
    technicalReference: [
      'SLAs Clássicos VoIP (One-Way): Latência < 150 ms | Jitter < 30 ms | Perda de Pacotes < 1%',
      'De-jitter Buffer: absorve variação de chegada no destino ao custo de aumentar a latência fixa total.'
    ],
    examTraps: [
      'A banca testa os limiares exatos: Latência one-way < 150 ms (não confundir com RTT de 150 ms — 150 ms é unidirecional!), Jitter < 30 ms e Perda < 1%.',
      'Aumentar banda bruta sem aplicar QoS NÃO resolve jitter ou perda durante picos de download/backup — fila FIFO enche igual até saturar o buffer do link.',
      'Pacotes RTP que chegam tarde demais (após o tempo da janela do jitter buffer) são descartados pelo telefone como se tivessem sido perdidos na rede.'
    ],
    keyTerms: ['Latência (< 150 ms)', 'Jitter (< 30 ms)', 'Perda de Pacotes (< 1%)', 'De-jitter Buffer', 'ITU-T G.114']
  },
  '8.2.1': {
    itemId: '8.2.1',
    highYieldSummary: [
      'Cisco Unified Communications Manager (CUCM / CallManager) e Equivalentes (Asterisk/FreePBX): arquitetura cliente-servidor baseada em cluster Publisher (banco de dados mestre e administração) + Subscribers (processamento de chamadas em redundância), mantendo alta disponibilidade via listas de servidores (Call Manager Group).',
      'Registro de Endpoints (Phones/Softphones): telefones IP obtêm IP e servidor TFTP/configuração via DHCP (ex.: Option 150 no Cisco CUCM ou Option 66 genérica), baixam arquivos XML/firmware e registram seu ramal via SIP (ou SCCP legado) mantendo keepalives periódicos.',
      'Plano de Discagem (Dial Plan): define estrutura de ramais internos, códigos de acesso externo (ex.: prefixo 0), regras de manipulação de dígitos (route patterns, translation patterns) e encaminhamento para troncos PSTN ou filiais remotas.',
      'Classes de Serviço (CSS / Partitions no CUCM ou Contexts no Asterisk): segregam permissões de discagem (ex.: ramal de recepção só liga interno/local; ramal diretoria liga DDD/DDI/celular), impedindo fraudes e uso indevido.',
      'Sobrevivência em Filiais (SRST — Survivable Remote Site Telephony): se o link WAN até o CUCM central cair, o roteador local da filial assume temporariamente o controle mínimo dos telefones IP locais garantindo chamadas internas e saída pela linha PSTN de contingência.'
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
    keyTerms: ['CUCM / Asterisk', 'Publisher / Subscriber', 'DHCP Option 150 / 66', 'Dial Plan / CSS / Partitions', 'SRST']
  },
  '8.2.2': {
    itemId: '8.2.2',
    highYieldSummary: [
      'VLAN de Voz (Voice VLAN / Auxiliary VLAN): recurso em portas de acesso de switches gerenciáveis que permite trafegar na mesma porta física RJ-45 duas VLANs distintas — quadros da VLAN de Voz com tag 802.1Q (e prioridade CoS 5) para o telefone IP e quadros sem tag (untagged) na VLAN de Dados para o PC ligado atrás do switch interno de 2 portas do telefone.',
      'Descoberta Automática via LLDP-MED e CDP: protocolos de Camada 2 (CDP proprietário Cisco; LLDP-MED — IEEE 802.1AB extensão para mídia aberto) anunciam automaticamente ao telefone conectado qual é o ID da VLAN de voz configurada na porta, dispensando configuração manual em centenas de aparelhos.',
      'Benefícios de Segurança e Gerência: isola telefones IP da sub-rede de estações de trabalho impedindo que usuários capturem áudio RTP via ARP spoofing/sniffing na mesma rede L2, além de facilitar políticas separadas de DHCP, firewall/ACL e QoS.',
      'Configuração Típica na Porta do Switch: a porta permanece como porta de acesso (não trunk irrestrito!), configurada com `switchport access vlan <dados>` e `switchport voice vlan <voz>`, aceitando apenas as duas VLANs estritamente necessárias.',
      'PortFast e Trust Boundary: portas com telefone + PC devem usar Spanning-Tree PortFast/Edge para subir rapidamente no boot do telefone e aplicar política de confiança (QoS Trust DSCP/CoS) apenas para o tráfego marcado pelo telefone, remarcando qualquer marcação falsa vinda do PC atrás dele.'
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
    keyTerms: ['Voice VLAN (802.1Q)', 'LLDP-MED vs CDP', 'Tagged Voz / Untagged Dados', 'Trust Boundary', 'Isolamento L2']
  },
  '8.2.3': {
    itemId: '8.2.3',
    highYieldSummary: [
      'Modelo DiffServ (Differentiated Services): padrão corporativo de QoS baseado em marcação no cabeçalho IP (campo DSCP de 6 bits dentro do byte ToS/Traffic Class, permitindo 64 classes PHB) e na camada 2 Ethernet 802.1p (campo CoS de 3 bits, valores 0 a 7 dentro da tag 802.1Q).',
      'Marcações Padrão de Telefonia IP: Mídia de Voz (RTP) deve ser marcada com DSCP EF (Expedited Forwarding = valor decimal 46, equivalente a CoS 5 em L2); Sinalização VoIP (SIP/SCCP) recebe DSCP CS3 (24) ou AF31 (26) com CoS 3; Tráfego comum permanece Best Effort (DSCP 0).',
      'Enfileiramento de Baixa Latência (LLQ — Low Latency Queueing): combina fila de prioridade estrita (Priority Queue) exclusiva para voz (atendida imediatamente antes de qualquer outra fila, com policiamento de teto para não matar dados — starvation) com filas CBWFQ (Class-Based Weighted Fair Queuing) para sinalização e aplicações críticas.',
      'Policing vs Shaping e WRED: Shaping suaviza picos retendo pacotes excedentes em buffer até caberem na taxa contratada (bom para saída WAN); Policing descarta/remarca excessos imediatamente (adequado para limitar fila EF); WRED evita sincronização global TCP em filas de dados (nunca deve ser aplicado à fila de voz!).',
      'QoS Fim a Fim (End-to-End): se um único enlace congestionado no caminho (switch de acesso, uplink, roteador WAN ou operadora MPLS) descartar ou ignorar as marcações DSCP, o jitter e a perda comprometem toda a chamada.'
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
    keyTerms: ['DSCP EF (46) / CoS 5', 'DSCP CS3 (24)', 'LLQ (Priority Queue)', 'Trust Boundary', 'DiffServ']
  },
  '8.2.4': {
    itemId: '8.2.4',
    highYieldSummary: [
      'Métodos (Requisições) SIP Essenciais: REGISTER (endpoint informa IP atual e registra seu URI/ramal no Registrar Server), INVITE (inicia chamada propondo SDP), ACK (confirma recebimento da resposta final 200 OK do INVITE — completando handshake 3-way), BYE (encerra chamada já estabelecida), CANCEL (desiste de chamada ainda tocando antes do 200 OK) e OPTIONS (keepalive/verificação de capacidades).',
      'Famílias de Códigos de Resposta SIP (estilo HTTP): 1xx Provisórias (100 Trying, 180 Ringing, 183 Session Progress), 2xx Sucesso (200 OK), 3xx Redirecionamento (302 Moved Temporarily), 4xx Erro do Cliente (401 Unauthorized, 403 Forbidden, 404 Not Found, 486 Busy Here), 5xx Erro de Servidor e 6xx Falha Global.',
      'Portas e Transporte SIP: porta padrão UDP/TCP 5060 para SIP em texto claro; TCP 5061 para SIPS (SIP sobre TLS criptografado); SIP suporta UDP pela leveza, porém pacotes grandes com múltiplos codecs ou SIPS exigem TCP.',
      'Papéis Arquiteturais SIP: User Agent (UAC inicia / UAS responde), Registrar (recebe REGISTER), Proxy Server (encaminha sinalização mantendo ou não estado) e Redirect Server (responde 3xx indicando novo destino).',
      'Fluxo Completo de uma Chamada SIP: UAC envia INVITE -> recebe 100 Trying -> recebe 180 Ringing -> destinatário atende gerando 200 OK (com SDP de resposta) -> UAC envia ACK -> áudio RTP flui bidirecionalmente -> ao desligar, qualquer lado envia BYE -> outro confirma com 200 OK.'
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
    keyTerms: ['INVITE / ACK / BYE / CANCEL', 'REGISTER / OPTIONS', 'Códigos 1xx–6xx (180/200/486)', 'Portas 5060 / 5061', 'UAC / UAS / Proxy']
  },
  '8.2.5': {
    itemId: '8.2.5',
    highYieldSummary: [
      'Estrutura do Pacote RTP (12 bytes de cabeçalho fixo sobre UDP): carrega Version, Payload Type (PT — identifica o codec, ex.: 0 = G.711 PCMU, 8 = G.711 PCMA, 18 = G.729, 101 = DTMF RFC 2833/4733), Sequence Number (16 bits — detecta perda e reordena pacotes), Timestamp (32 bits — sincroniza reprodução e calcula jitter) e SSRC (identifica o fluxo único).',
      'Fluxo Bidirecional Simétrico e Faixas de Portas: cada chamada estabelece dois fluxos UDP independentes (ida e volta) em portas altas negociadas dinamicamente no SDP (`m=audio <porta> RTP/AVP ...`), exigindo regras de firewall dinâmicas ou liberação da faixa RTP do PBX/SBC.',
      'Buffer de Jitter (Estático vs Adaptativo): armazena temporariamente de 20 a 60 ms de pacotes RTP antes de entregar ao DSP de áudio para suavizar chegadas irregulares; buffers adaptativos ajustam o tamanho dinamicamente conforme condições da rede.',
      'Transporte de DTMF (Tons de Teclado) em VoIP: NUNCA depender de In-Band puro em codecs comprimidos como G.729 (que distorcem os tons impedindo navegação em URAs/IVRs); padrão corporativo usa RFC 2833/4733 (Named Telephony Events dentro do fluxo RTP) ou sinalização Out-of-Band (SIP INFO / KPML).',
      'Silence Suppression (VAD — Voice Activity Detection) e Comfort Noise (CNG): pausas de silêncio podem suprimir envio de pacotes RTP economizando até ~50% da banda em trunks saturados, gerando ruído de conforto sintético (CNG) para o ouvinte não achar que a chamada caiu.'
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
    keyTerms: ['RTP Header (Seq/Timestamp/PT)', 'Buffer de Jitter Adaptativo', 'DTMF (RFC 2833/4733)', 'VAD / Silence Suppression', 'SRTP']
  },
  '8.2.6': {
    itemId: '8.2.6',
    highYieldSummary: [
      'Padrões PoE (Power over Ethernet): IEEE 802.3af (PoE Tipo 1 — até 15,4 W fornecidos na porta PSE / 12,95 W úteis no PD), IEEE 802.3at (PoE+ Tipo 2 — até 30 W no PSE / 25,5 W no PD) e IEEE 802.3bt (PoE++ Tipos 3 e 4 — até 60 W / 90 W no PSE utilizando os 4 pares do cabo UTP).',
      'PSE vs PD e Descoberta Segura: o switch ou midspan injetor é o PSE (Power Sourcing Equipment) e o telefone IP/AP/câmera é o PD (Powered Device); o PSE NÃO injeta 48 V DC cegamente — primeiro aplica baixa tensão de detecção (assinatura resistiva de ~25 kΩ) e negocia classe de potência (ou via LLDP-MED) protegendo placas comuns contra queima.',
      'Orçamento de Energia (Power Budget) do Switch: um switch PoE de 48 portas raramente possui fonte suficiente para entregar 30 W simultâneos nas 48 portas (seriam 1.440 W); se o Power Budget (ex.: 370 W ou 740 W) esgotar, portas de menor prioridade NÃO recebem energia ao conectar novos aparelhos.',
      'Priorização de Portas PoE e Redundância de Fontes: administradores configuram prioridade (Critical / High / Low) para garantir que telefones críticos e APs permaneçam ligados caso uma das fontes do switch falhe e o budget caia pela metade.',
      'Impacto do Cabeamento (Cat5e/Cat6) e Dissipação Térmica: parte da potência fornecida pelo PSE dissipa em calor ao longo de até 100 metros de cabo par trançado (por isso 15,4 W na porta garantem apenas 12,95 W no dispositivo); em 802.3bt recomenda-se Cat6/Cat6A para reduzir aquecimento em feixes de cabos.'
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
    keyTerms: ['802.3af (15,4 W)', '802.3at PoE+ (30 W)', '802.3bt PoE++ (60/90 W)', 'PSE vs PD', 'Power Budget']
  },
  '8.2.7': {
    itemId: '8.2.7',
    highYieldSummary: [
      'One-Way Audio (Áudio Unidirecional — clássico absoluto de prova): a chamada completa (toca e atende), A ouve B, mas B não ouve A; quase sempre causado por NAT assimétrico (cabeçalho SDP anuncia IP privado RFC 1918 inalcançável pela outra ponta), bloqueio parcial de portas UDP RTP em firewall no meio do caminho ou ausência de rota de retorno.',
      'SIP ALG (Application Layer Gateway) em Firewalls/Roteadores: recurso padrão em muitos roteadores que tenta reescrever dinamicamente cabeçalhos SIP e endereços SDP ao cruzar NAT — na prática, implementações bugadas corrompem pacotes SIP, quebram registros, derrubam chamadas após 30 segundos (falta de ACK) ou causam one-way audio; recomendação padrão corporativa é DESABILITAR SIP ALG e usar SBC ou NAT traversal adequado (STUN/TURN/ICE/Symmetric RTP).',
      'Chamada Cai Exatamente em ~30–32 Segundos: sintoma típico de falha no recebimento da mensagem ACK (ou re-INVITE/Session Timer) por cabeçalho `Contact:` ou `Record-Route:` incorreto atrás de NAT — o UAS retransmite 200 OK (Timer G) até estourar o Timer H (64*T1 = 32s para T1 = 0,5s) e encerrar a chamada.',
      'Áudio Picotado, Robótico ou Eco: investigar captura RTP / RTCP (Wireshark Telephony -> RTP Stream Analysis) observando picos de jitter (> 30 ms), perda de pacotes (> 1%), descarte de fila no roteador/firewall, incompatibilidade duplex (half-duplex em porta antiga) ou ausência de marcação DSCP EF.',
      'Falha de Codec / Erro 488 Not Acceptable Here: ocorre quando UAC e UAS não possuem nenhum codec em comum no SDP (ex.: lado A só aceita G.729 e lado B só aceita G.711 sem transcodificador no caminho) ou incompatibilidade SRTP vs RTP obrigatório.'
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
    keyTerms: ['One-Way Audio', 'SIP ALG (desabilitar)', 'NAT / SDP IP Privado', 'Queda em 32s (ACK perdido)', 'Wireshark VoIP / RTP Analysis']
  }
};
