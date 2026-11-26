import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_7: Record<string, StudyGuide> = {
  '7.1.1': {
    itemId: '7.1.1',
    highYieldSummary: [
      'Definição e escopo: os padrões IEEE 802.11 especificam as camadas Física (PHY) e de Controle de Acesso ao Meio (MAC) para redes locais sem fio (WLAN — Wireless LAN) nas faixas não licenciadas de 2,4 GHz, 5 GHz e 6 GHz. Definem modulações, largura de canais, identificação lógica (SSID/BSSID), acesso compartilhado ao meio (CSMA/CA) e recursos de alta densidade como MIMO, OFDMA e BSS Coloring.',
      'Evolução dos Padrões IEEE 802.11: 802.11b (2,4 GHz, DSSS — Direct Sequence Spread Spectrum, até 11 Mbps), 802.11a (5 GHz, OFDM — Orthogonal Frequency-Division Multiplexing, até 54 Mbps), 802.11g (2,4 GHz, OFDM, 54 Mbps), 802.11n / Wi-Fi 4 (2,4 e 5 GHz, MIMO — Multiple-Input Multiple-Output — até 4x4, canais de 20/40 MHz), 802.11ac / Wi-Fi 5 (exclusivo 5 GHz, MU-MIMO downlink — múltiplos usuários simultâneos no sentido AP -> cliente, canais até 160 MHz, 256-QAM) e 802.11ax / Wi-Fi 6/6E (2,4 / 5 / 6 GHz no 6E, OFDMA bidirecional — acesso múltiplo por divisão ortogonal de frequência, MU-MIMO UL/DL — uplink e downlink, 1024-QAM, TWT — Target Wake Time — e BSS Coloring).',
      'Bandas e Canais sem Sobreposição: em 2,4 GHz existem 11–14 canais espaçados em 5 MHz com largura de 20/22 MHz — logo apenas 3 canais NÃO se sobrepõem (1, 6 e 11); em 5 GHz há muito mais canais não sobrepostos (20 MHz), porém faixas DFS (Dynamic Frequency Selection — seleção dinâmica de frequência) exigem detecção de radar meteorológico/militar.',
      'Conceitos Fundamentais de Identificação: SSID (Service Set Identifier — nome lógico da rede divulgado em frames Beacon/Probe), BSSID (Basic Service Set Identifier — endereço MAC da interface de rádio do AP específico) e ESS/ESSID (Extended Service Set — conjunto de vários APs compartilhando o mesmo SSID para permitir roaming contínuo).',
      'Mecanismo de Acesso CSMA/CA e Hidden Node: diferentemente do Ethernet cabeado (CSMA/CD — Collision Detection), redes Wi-Fi não detectam colisão no ar enquanto transmitem — usam CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) com backoff aleatório e troca opcional RTS/CTS (Request to Send / Clear to Send) para mitigar o problema do Nó Oculto (Hidden Node).',
      'Diferenciais do Wi-Fi 6 (802.11ax): OFDMA subdivide o canal em Resource Units (RUs — subcanais de frequência alocados por cliente) permitindo múltiplos clientes transmitirem simultaneamente em pacotes pequenos (ideal para alta densidade), enquanto BSS Coloring marca quadros com cores para reduzir interferência co-canal.',
      'Exemplo operacional: em uma ala hospitalar com alta densidade de notebooks e coletores clínicos, desabilitam-se canais de `80 MHz` em `5 GHz`, operando com canais de `20 MHz` (e `DFS` validado fora de faixa de radar), mantendo em `2,4 GHz` apenas os canais `1, 6 e 11` (separados em `25 MHz` entre centros). Com APs Wi-Fi 6 (`802.11ax`) e **BSS Coloring** ativos, quadros curtos de telemetria compartilham o canal simultaneamente via **RUs** em **OFDMA**.'
    ],
    technicalReference: [
      'Canais não sobrepostos 2,4 GHz: 1, 6 e 11 | 802.11ac (Wi-Fi 5): SOMENTE 5 GHz | 802.11ax: 2,4/5 GHz (Wi-Fi 6) e 6 GHz (Wi-Fi 6E)',
      'Acesso ao meio: Wi-Fi usa CSMA/CA (Collision Avoidance, com ACK obrigatório e RTS/CTS opcional) — nunca CSMA/CD.'
    ],
    examTraps: [
      '802.11ac (Wi-Fi 5) NÃO opera na faixa de 2,4 GHz — placas/APs AC usam 802.11n para atender clientes em 2,4 GHz.',
      'Usar canais intermediários em 2,4 GHz (ex.: canais 2, 3, 4 ou 8) gera interferência de canal adjacente pior que compartilhar os canais 1, 6 ou 11.',
      'Ativar canais de 80 MHz ou 160 MHz em ambientes corporativos de alta densidade reduz drasticamente a quantidade de canais disponíveis e aumenta interferência co-canal.'
    ],
    keyTerms: [
      'Canais 1, 6 e 11 (2,4 GHz): únicos três canais de 20/22 MHz sem sobreposição espectral em 2,4 GHz (espaçamento de 5 MHz entre centros)',
      'DFS (Dynamic Frequency Selection): exigência regulatória em canais de 5 GHz que obriga o AP a desocupar o canal ao detectar radar',
      'SSID / BSSID / ESS: nome lógico da WLAN (SSID), MAC do rádio do AP (BSSID) e conjunto de APs com o mesmo SSID (ESS)',
      'CSMA/CA e RTS/CTS: protocolo de acesso sem fio por prevenção de colisões com ACK obrigatório e reserva virtual contra Hidden Node',
      'OFDMA / Resource Units (RUs): divisão espectral no 802.11ax que atende vários clientes simultaneamente na mesma janela de transmissão'
    ]
  },
  '7.1.2': {
    itemId: '7.1.2',
    highYieldSummary: [
      'Definição e escopo: o padrão IEEE 802.1X implementa controle de acesso à rede baseado em porta (PNAC — Port-Based Network Access Control) para redes cabeadas e Wi-Fi, utilizando EAP para validar dispositivos e usuários antes de liberar tráfego IP. Garante autenticação individual forte com certificados (EAP-TLS) ou túneis cifrados (PEAP/EAP-TTLS) e contempla fallback controlado via MAB.',
      'Arquitetura IEEE 802.1X (Controle de Acesso Baseado em Porta): separa três papéis obrigatórios — Supplicant (dispositivo cliente com agente 802.1X), Authenticator (switch Ethernet ou Access Point/WLC — Wireless LAN Controller — que bloqueia/libera a porta) e Authentication Server (servidor RADIUS — Remote Authentication Dial-In User Service — como Cisco ISE, FreeRADIUS ou Microsoft NPS — Network Policy Server — que valida credenciais).',
      'Fluxo de Comunicação e Protocolos: entre Supplicant e Authenticator trafega EAP (Extensible Authentication Protocol) encapsulado em quadros Layer 2 via EAPoL (EAP over LAN — sem necessidade de IP prévio); o Authenticator extrai o conteúdo EAP e o encapsula em pacotes UDP/IP RADIUS até o Authentication Server.',
      'Métodos EAP Principais: EAP-TLS (Transport Layer Security — autenticação mútua por certificados digitais no servidor E no cliente — mais seguro, dispensa senha, exige PKI — Public Key Infrastructure), PEAP (Protected EAP — túnel TLS autenticado por certificado apenas do servidor, protegendo credenciais internas como MSCHAPv2 — Microsoft Challenge Handshake Authentication Protocol v2) e EAP-TTLS (Tunneled TLS — similar ao PEAP, aceitando métodos legados dentro do túnel).',
      'Estados da Porta no 802.1X: antes da validação bem-sucedida, a Porta Não Controlada permite exclusivamente quadros EAPoL (e eventualmente tráfego pré-autenticação mínimo), mantendo bloqueada a Porta Controlada de dados até receber RADIUS Access-Accept.',
      'Alternativa para Dispositivos sem Suporte 802.1X (MAB): impressoras, câmeras IP e IoT (Internet of Things) sem supplicant falham no EAPoL após timeout e fazem fallback para MAC Authentication Bypass (MAB), onde o switch envia o MAC address como usuário/senha ao RADIUS para aplicar perfil/VLAN restrita.',
      'Exemplo operacional: ao plugar um notebook na porta `Gi1/0/12` do switch de acesso, o **Supplicant** responde em camada 2 ao `EAP-Request/Identity` via **EAPoL** enquanto a **Porta Controlada** segue bloqueada. O switch (**Authenticator**) encapsula a troca **EAP-TLS** em `RADIUS Access-Request` (UDP `1812`) para o servidor **Authentication Server**, que valida o certificado emitido pela **PKI** corporativa e retorna `RADIUS Access-Accept`, liberando dados e permitindo o DHCP.'
    ],
    technicalReference: [
      'Tríade 802.1X: Supplicant (Cliente) <--[EAPoL / L2]--> Authenticator (Switch/AP) <--[RADIUS / L3 UDP 1812]--> Auth Server (ISE/NPS)',
      'EAP-TLS: certificado em ambos os lados (mais forte) | PEAP/EAP-TTLS: certificado no servidor + usuário/senha no túnel TLS.'
    ],
    examTraps: [
      'O Switch/Access Point (Authenticator) NÃO armazena a base de usuários nem valida senhas localmente no 802.1X — ele atua como intermediário entre EAPoL e RADIUS.',
      'EAP-TLS exige certificado digital válido também no CLIENTE (Supplicant); PEAPv0/EAP-MSCHAPv2 exige certificado apenas no SERVIDOR RADIUS.',
      'EAPoL opera na Camada 2 (sem IP); por isso funciona antes mesmo de o cliente receber endereço via DHCP.'
    ],
    keyTerms: [
      'Tríade 802.1X: papéis de Supplicant (cliente), Authenticator (switch/AP/WLC) e Authentication Server (RADIUS)',
      'EAPoL (EAP over LAN): transporte direto de EAP em quadros Ethernet de camada 2 antes da atribuição de endereço IP',
      'EAP-TLS vs PEAP: autenticação mútua por certificados nos dois lados (EAP-TLS) versus certificado só no servidor protegendo credenciais internas (PEAP)',
      'Porta Controlada vs Não Controlada: caminho lógico de dados bloqueado até o Access-Accept versus canal restrito para quadros EAPoL',
      'MAB (MAC Authentication Bypass): mecanismo de fallback em que o switch envia o MAC do equipamento sem supplicant ao servidor RADIUS'
    ]
  },
  '7.1.3': {
    itemId: '7.1.3',
    highYieldSummary: [
      'Definição e escopo: os protocolos de segurança em redes sem fio (WEP, WPA, WPA2 e WPA3, padronizados no IEEE 802.11i / 802.11w e pela Wi-Fi Alliance) proveem confidencialidade, integridade e controle criptográfico de associação no enlace aéreo. Evoluíram da frágil cifra RC4 para AES-CCMP/GCMP, troca SAE resistente a ataques offline e proteção de quadros de gerenciamento (PMF).',
      'WEP (Wired Equivalent Privacy — obsoleto): utilizava cifra de fluxo RC4 (Rivest Cipher 4) com Vetor de Inicialização (IV) curto de 24 bits e chave estática compartilhada; vulnerável a ataques estatísticos passivos em minutos devido à repetição frequente do IV.',
      'WPA (Wi-Fi Protected Access — legado): solução transitória baseada no padrão IEEE 802.11i draft que manteve o hardware RC4 adicionando o protocolo TKIP (Temporal Key Integrity Protocol — IV de 48 bits, rotação de chave por pacote e MIC — Message Integrity Code — Michael), hoje considerado inseguro e proibido em redes 802.11n/ac/ax.',
      'WPA2 (IEEE 802.11i completo): substituiu RC4/TKIP pelo algoritmo robusto AES (Advanced Encryption Standard) em modo CCMP (Counter Mode with CBC-MAC Protocol) fornecendo confidencialidade, integridade e autenticação; vulnerável em modo Personal (PSK — Pre-Shared Key) à captura do 4-way handshake para ataque de dicionário offline e ao ataque KRACK (Key Reinstallation Attack — mitigado por patches).',
      'WPA3 (Evolução Atual): substitui a troca vulnerável de PSK pelo protocolo SAE (Simultaneous Authentication of Equals / Dragonfly) que garante Forward Secrecy (sigilo perfeito futuro: vazamento da senha não decifra sessões antigas) e resistência a quebra offline por dicionário; exige obrigatoriamente PMF (Protected Management Frames — 802.11w) contra ataques de desautenticação (deauth flood).',
      'Modo Enterprise vs Personal (PSK) e OWE: modo Personal usa senha pré-compartilhada (PSK no WPA2 / SAE no WPA3); modo Enterprise usa 802.1X/RADIUS com chaves exclusivas por sessão/usuário (192-bit suite — suíte criptográfica de alta segurança — disponível no WPA3-Enterprise); redes abertas usam OWE (Opportunistic Wireless Encryption — cifragem automática sem senha) para criptografar o ar mesmo sem senha.',
      'Exemplo operacional: na padronização da segurança sem fio hospitalar, o SSID corporativo é configurado em **WPA3-Enterprise** com `AES-CCMP/GCMP`, **PMF (802.11w) = Required** e remoção total de `TKIP` (evitando degradação de taxa e vulnerabilidades herdadas). Para o acesso aberto de visitantes sem senha prévia, ativa-se **OWE (Enhanced Open)** garantindo que cada sessão aérea seja cifrada individualmente.'
    ],
    technicalReference: [
      'Cifragem: WEP (RC4 + IV 24b, quebrado) -> WPA (RC4 + TKIP, obsoleto) -> WPA2 (AES-CCMP) -> WPA3 (SAE + AES-CCMP/GCMP + PMF 802.11w obrigatório)',
      'WPA3-Personal: SAE (impede brute force offline) | WPA3-Enterprise: 802.1X + opção CNSA 192-bit | Wi-Fi Aberto Seguro: OWE.'
    ],
    examTraps: [
      'PMF (Protected Management Frames / 802.11w) é OPCIONAL no WPA2 e OBRIGATÓRIO no WPA3 — evita spoofing de quadros de desautenticação/desassociação.',
      'Em WPA2-PSK, se um atacante captura o 4-way handshake no ar, pode tentar adivinhar a senha offline infinitamente sem sequer estar perto do AP; o WPA3-SAE impede esse ataque offline.',
      'Usar TKIP em redes Wi-Fi modernas (802.11n/ac/ax) força rebaixamento da taxa de dados do cliente para modo legado (até 54 Mbps) além de expor vulnerabilidades.'
    ],
    keyTerms: [
      'RC4 + IV 24 bits (WEP): algoritmo obsoleto em que a repetição rápida do vetor de 24 bits expõe a chave a ataques estatísticos',
      'AES-CCMP / AES-GCMP: modos criptográficos autenticados baseados em AES usados no WPA2 e WPA3 para confidencialidade e integridade',
      'SAE (Dragonfly): protocolo de acordo de chaves por Diffie-Hellman no WPA3-Personal resistente a força bruta offline',
      'PMF (Protected Management Frames — 802.11w): proteção criptográfica de quadros de controle Wi-Fi contra deauth spoofing, obrigatória no WPA3',
      'OWE (Opportunistic Wireless Encryption): cifragem individual automática sobre redes sem fio abertas sem senha compartilhada'
    ]
  },
  '7.2.1': {
    itemId: '7.2.1',
    highYieldSummary: [
      'Definição e escopo: plataformas de NAC (Network Access Control — como Cisco ISE, Aruba ClearPass, FortiNAC e PacketFence) integradas a controladoras Wi-Fi corporativas (WLC ou Omada Controller) unificam visibilidade, autenticação (802.1X/MAB/WebAuth), conformidade de endpoint e gerência centralizada de APs. Substituem controles estáticos por autorizações contextuais dinâmicas e quarentena em tempo real.',
      'NAC (Network Access Control — ex.: Cisco ISE — Identity Services Engine, Aruba ClearPass, PacketFence): centraliza visibilidade (profiling — classificação automática de dispositivos), autenticação (802.1X/MAB/WebAuth — autenticação em portal web), avaliação de postura (posture check — verificação de conformidade de segurança do endpoint) e autorização granular para qualquer dispositivo cabeado ou sem fio antes de liberar acesso pleno à rede.',
      'Avaliação de Postura (Posture Assessment) e Quarentena: agente no endpoint ou checagem sem agente verifica se antivírus está ativo/atualizado, patches do SO aplicados e disco criptografado; máquinas não conformes recebem VLAN de remediação/quarentena ou dACL (Downloadable ACL — lista de acesso baixada dinamicamente no switch) restrita até se corrigirem.',
      'CoA (Change of Authorization — RFC 5176): mecanismo dinâmico (UDP 3799 ou 1700) pelo qual o servidor NAC (Cisco ISE) envia comando em tempo real ao switch/WLC para reavaliar, mover de VLAN, aplicar dACL de quarentena ou derrubar uma sessão já autenticada sem esperar novo login.',
      'Profiling e Guest Access: NAC identifica automaticamente tipos de dispositivos (impressora, telefone IP, IoT) analisando atributos DHCP, CDP/LLDP (Cisco Discovery Protocol / Link Layer Discovery Protocol), OUI MAC (Organizationally Unique Identifier — prefixo do fabricante) e HTTP User-Agent; portais cativos (CWA — Central Web Auth) autenticam visitantes com patrocínio (sponsor) e isolamento de clientes.',
      'Controladores Wi-Fi Corporativos (WLC / Omada Controller): arquitetura centralizada onde Lightweight APs (APs gerenciados centralmente) estabelecem túneis de controle/dados (ex.: CAPWAP — Control and Provisioning of Wireless Access Points) ou operam gerenciados em nuvem/on-premises (Omada SDN — Software-Defined Networking), aplicando SSIDs, controle de potência/canal automático (RRM — Radio Resource Management) e roaming rápido (802.11r/k/v) de forma unificada.',
      'Exemplo operacional: ao conectar uma impressora clínica em porta 802.1X, ocorre fallback para **MAB**; o **Cisco ISE** cruza OUI MAC e opções DHCP no **Profiling**, classifica o equipamento e aplica `VLAN 40` + `dACL` liberando apenas porta TCP `9100` para o servidor de impressão. Mais tarde, se um notebook perder conformidade de antivírus na checagem de **Posture**, o ISE dispara um **CoA** (UDP `3799`) à WLC/switch rebaixando a sessão ativa para quarentena imediatamente.'
    ],
    technicalReference: [
      'Funções do NAC (Cisco ISE): AAA (RADIUS/TACACS+) + Profiling (identificação) + Posture (conformidade) + Guest + CoA (ação dinâmica)',
      'CoA RFC 5176 (UDP 3799 padrão IANA / UDP 1700 legado Cisco) permite alterar VLAN/dACL ou desconectar sessão ativa em tempo real.'
    ],
    examTraps: [
      'CoA (Change of Authorization) parte do SERVIDOR NAC (ISE) para o switch/WLC (fluxo reverso), permitindo colocar um host comprometido em quarentena imediatamente.',
      'Diferença de controle corporativo Wi-Fi: soluções como Omada SDN gerenciam APs e switches de forma centralizada, mas controle NAC corporativo completo com postura/802.1X/dACL exige integração com servidor RADIUS/NAC dedicado.',
      'MAB sozinho NÃO garante segurança forte porque endereços MAC podem ser facilmente clonados (MAC spoofing); exige mitigação com profiling e dACLs restritas.'
    ],
    keyTerms: [
      'Authentication vs Authorization Policy: etapa que valida identidade/método (802.1X/MAB) versus regra que define acesso (VLAN, dACL, perfil)',
      'Profiling: identificação automática de tipos de endpoints analisando OUI MAC, DHCP, CDP/LLDP e assinaturas HTTP',
      'Posture Assessment: auditoria de conformidade do dispositivo (antivírus, patches, disco cifrado) por agente persistente, temporário ou MDM',
      'CoA (Change of Authorization — RFC 5176): comando enviado pelo NAC ao NAS (UDP 3799/1700) para reclassificar ou desconectar sessão em andamento',
      'CAPWAP / RRM: túnel de gerência/dados entre APs e WLC e ajuste automático coordenado de canais e potência RF'
    ]
  },
  '7.2.2': {
    itemId: '7.2.2',
    highYieldSummary: [
      'Definição e escopo: a implementação de IEEE 802.1X em portas de switches de acesso e SSIDs envolve o protocolo L2 **EAPoL** (EtherType `0x888E`), modos de controle multi-dispositivo por porta (**Single-Host, Multi-Domain, Multi-Auth e Multi-Host**), transição operacional segura (**Monitor, Low-Impact, Closed**) e contingência local (**Critical VLAN**). Permite proteger toda a camada de acesso sem interromper telefonia IP nem serviços essenciais.',
      'EAPoL (Extensible Authentication Protocol over LAN — EtherType 0x888E): protocolo de Camada 2 usado diretamente entre Supplicant e Switch/AP; mensagens incluem EAPoL-Start (cliente inicia), EAP-Request/Identity (autenticador pergunta quem é), EAP-Response e EAPoL-Logoff (desconexão explícita).',
      'Modos de Autorização de Porta em Switches: Single-Host (permite apenas 1 MAC autenticado na porta), Multi-Auth (autentica individualmente múltiplos dispositivos atrás da mesma porta — padrão para IP Phone + PC), Multi-Domain (1 dispositivo na VLAN de voz + 1 na VLAN de dados) e Multi-Host (perigoso: autentica 1 MAC e libera todos os demais atrás de um hub/mini-switch).',
      'Implantação Gradual (Monitor Mode -> Low-Impact -> Closed Mode): boa prática corporativa começa em Monitor Mode (autentica e registra logs sem bloquear tráfego), passa por Low-Impact (ACL — Access Control List — pré-auth restritiva permitindo DHCP/DNS/AD — Active Directory) e só então ativa Closed Mode (bloqueio total antes do Access-Accept).',
      'Integração com Telefones IP e LLDP/CDP: telefone IP autentica na VLAN de voz (via 802.1X ou MAB com perfil Cisco-AVPair device-traffic-class=voice) e o PC conectado atrás do switch embutido no telefone autentica separadamente na VLAN de dados (modo Multi-Domain).',
      'Critical VLAN / Fail-Open: caso todos os servidores RADIUS fiquem inacessíveis (Dead Server — indisponibilidade simultânea de todos os servidores RADIUS configurados), o switch pode mover novas autenticações para uma Critical VLAN pré-definida garantindo continuidade operacional de emergência.',
      'Exemplo operacional: na ativação do 802.1X em switches hospitalares que atendem um telefone IP e um PC por tomada, configura-se o modo **Multi-Domain** inicialmente em **Monitor Mode** por 2 semanas para mapear todos os dispositivos sem bloqueios. Em seguida, avança-se para **Low-Impact** (ACL pré-auth permitindo apenas `DHCP` e `DNS` internos) e, após validar o serviço `Wired AutoConfig (dot3svc)` nas estações, ativa-se **Closed Mode** com **Critical VLAN** local de contingência.'
    ],
    technicalReference: [
      'EtherType EAPoL: 0x888E | Modos de porta: Multi-Domain (1 voz + 1 dados) vs Multi-Auth (múltiplos auth independentes) vs Multi-Host (1 auth abre para todos)',
      'Estágios 802.1X: Monitor Mode (auditoria) -> Low-Impact (ACL mínima) -> Closed Mode (bloqueio estrito pré-autenticação).'
    ],
    examTraps: [
      'No modo Multi-Host, basta UM único dispositivo autenticar na porta para que qualquer outro equipamento ligado num switch não gerenciável na mesma tomada ganhe acesso livre sem autenticar.',
      'Iniciar projeto 802.1X diretamente em Closed Mode em rede legada sem levantamento de dispositivos (Monitor Mode) derruba impressoras, relógios de ponto e equipamentos médicos instantaneamente.',
      'No Windows, o serviço nativo Wired AutoConfig (dot3svc) precisa estar habilitado e em execução para a placa de rede Ethernet responder ao EAPoL.'
    ],
    keyTerms: [
      'EAPoL (EtherType 0x888E): protocolo de camada 2 que troca mensagens EAP (Start, Identity, Logoff) entre cliente e switch/AP',
      'Multi-Domain vs Multi-Auth: permite 1 dispositivo de voz + 1 de dados na porta versus múltiplas sessões independentes na VLAN de dados',
      'Multi-Host Mode: modo permissivo que abre a porta para qualquer outro MAC após um primeiro host autenticar com sucesso',
      'Monitor / Low-Impact / Closed Mode: estágios graduais de implantação variando de auditoria sem bloqueio até bloqueio estrito pré-Access-Accept',
      'Critical VLAN (Fail-Open): VLAN de contingência configurada localmente no switch para manter acesso caso nenhum servidor RADIUS responda'
    ]
  },
  '7.2.3': {
    itemId: '7.2.3',
    highYieldSummary: [
      'Definição e escopo: o protocolo **RADIUS** (RFCs 2865/2866) é o padrão aberto de **AAA** (*Authentication, Authorization, Accounting*) entre dispositivos de acesso à rede (**NAS** — switches, WLCs, concentradores VPN) e servidores de políticas sobre **UDP 1812/1813** (ou **RadSec TCP 2083** sobre TLS). Centraliza validação de acesso, envio de atributos de autorização e registro contínuo de sessões de usuários.',
      'Protocolo RADIUS (Remote Authentication Dial-In User Service): padrão aberto IETF (Internet Engineering Task Force) para AAA (Authentication, Authorization e Accounting) entre NAS (Network Access Server — switches, WLCs, firewalls/VPN) e servidor de políticas; utiliza UDP (porta 1812 para Autenticação/Autorização e porta 1813 para Accounting — portas legadas 1645/1646).',
      'Segurança na Comunicação RADIUS: cada cliente de rede (NAS) compartilha um Shared Secret (segredo pré-compartilhado) único com o servidor RADIUS; o RADIUS criptografa apenas o atributo da senha (User-Password) na requisição (ou usa RadSec sobre TLS — Transport Layer Security — na TCP 2083), mantendo cabeçalhos e atributos visíveis em texto claro na rede.',
      'Diferença Crucial entre RADIUS e TACACS+: RADIUS usa UDP (1812/1813), combina Autenticação + Autorização no mesmo Access-Accept, criptografa somente a senha (padrão RFC 2865) e é o padrão de acesso à REDE (802.1X, Wi-Fi, VPN); TACACS+ (Terminal Access Controller Access-Control System Plus, originalmente Cisco) usa TCP 49, separa completamente A-A-A permitindo autorização granular por comando CLI (Command-Line Interface), criptografa todo o corpo do pacote e é usado para administração de EQUIPAMENTOS.',
      'Fluxo de Mensagens RADIUS: NAS envia Access-Request -> Servidor pode responder Access-Challenge (ex.: diálogo EAP ou token MFA — Multi-Factor Authentication) -> ao final envia Access-Accept (com atributos de VLAN/dACL/sessão) ou Access-Reject; Accounting usa Accounting-Request (Start, Interim-Update, Stop) e Accounting-Response.',
      'Atributos Vendor-Specific (VSAs — Vendor-Specific Attributes) e Atributos Padrão IETF: atributos padrão (ex.: Tunnel-Type, Tunnel-Medium-Type, Tunnel-Private-Group-ID, Filter-Id, Session-Timeout) convivem com VSAs proprietários (Cisco-AVPair) para aplicar dACLs, URL-Redirect (portal cativo) e timeouts.',
      'Exemplo operacional: quando um colaborador conecta ao Wi-Fi corporativo, a WLC (**NAS**) envia `RADIUS Access-Request` (UDP `1812`) levando `NAS-IP-Address`, `Calling-Station-Id` e `Called-Station-Id` assinados pelo **Shared Secret**. Concluído o diálogo `Access-Challenge` do EAP, o servidor retorna `Access-Accept` com `Session-Timeout = 28800` (`8 h`) e `Filter-Id`, enquanto a WLC envia `Accounting-Request Start` e `Interim-Update` na porta **UDP 1813** (mantendo acesso CLI dos switches protegido via **TACACS+ TCP 49**).'
    ],
    technicalReference: [
      'RADIUS: UDP 1812 (Auth) / UDP 1813 (Accounting) | Combina Auth+Authz | Criptografa apenas senha | Foco: 802.1X, Wi-Fi, VPN (usuários finais)',
      'TACACS+: TCP 49 | Separa Auth / Authz / Acct | Criptografa pacote inteiro | Foco: gerência CLI de roteadores/switches.'
    ],
    examTraps: [
      'Questão clássica da banca: RADIUS usa UDP (1812/1813) e NÃO TCP 49 (que é TACACS+); além disso, apenas TACACS+ audita e autoriza comandos individuais digitados na CLI do switch.',
      'Se o Shared Secret configurado no switch divergir do configurado no servidor RADIUS, o pacote é descartado ou falha na assinatura (Authenticator/Message-Authenticator), gerando falha de autenticação silenciosa.',
      'RADIUS Accounting-Interim-Update é vital para atualizar sessão ativa e evitar que o NAC perca estado em sessões longas sem queda.'
    ],
    keyTerms: [
      'NAS (Network Access Server): equipamento de borda (switch, WLC, concentrador VPN) que consulta o servidor RADIUS para autorizar clientes',
      'Shared Secret: segredo pré-compartilhado entre NAS e servidor RADIUS usado na assinatura de integridade e ofuscação do User-Password',
      'RadSec (RFC 6614): encapsulamento de pacotes RADIUS sobre TLS na porta TCP 2083 cifrando cabeçalhos e atributos de ponta a ponta',
      'Access-Challenge / Accept / Reject: mensagens de resposta RADIUS para desafio intermediário (EAP/MFA), concessão de acesso ou recusa',
      'Accounting (Start / Interim-Update / Stop): registros na porta UDP 1813 do início, atualização periódica de sessão e encerramento da conexão'
    ]
  },
  '7.2.4': {
    itemId: '7.2.4',
    highYieldSummary: [
      'Definição e escopo: os esquemas de autenticação em acesso corporativo variam de chave pré-compartilhada (**PSK**), portais web (**WebAuth**) e **MAB** até **802.1X Enterprise** integrado ao **Active Directory** e à **PKI** interna. Garantem identidade nominal auditável, autenticação pré-logon de computadores, proteção contra roubo de credenciais e visibilidade de usuário para firewalls de borda.',
      'PSK (Pre-Shared Key) vs Enterprise (802.1X): PSK usa uma única senha compartilhada por todos na mesma rede — qualquer demitido ou aparelho roubado compromete o segredo coletivo exigindo troca em massa; Enterprise identifica individualmente cada usuário ou máquina via credenciais corporativas/certificados gerando chaves de sessão únicas.',
      'Integração com Active Directory (AD) e PKI (AD CS — Active Directory Certificate Services): o servidor RADIUS/NAC ingressa no domínio Active Directory (ou consulta via LDAPS/Kerberos — LDAP sobre TLS e autenticação por tíquetes) validando usuários, grupos de segurança e contas de computador, enquanto uma PKI interna emite certificados automáticos via GPO (Group Policy Object — Autoenrollment) para EAP-TLS.',
      'Autenticação de Máquina vs Usuário (TEAP / Machine + User): em ambientes Windows, autenticar a MÁQUINA no boot antes do login do usuário garante aplicação de GPOs e mapeamentos antes da tela de logon; protocolos como TEAP (Tunnel Extensible Authentication Protocol — EAP Chaining) validam tanto o certificado da máquina quanto a identidade do usuário na mesma conexão.',
      'Single Sign-On e Identidade em Wi-Fi/NAC: permite correlacionar sessões autenticadas no ISE/RADIUS com firewalls de borda (Identity Awareness / pxGrid — Platform Exchange Grid / Syslog) para aplicar regras de firewall baseadas no grupo do AD em vez de apenas endereço IP volátil.',
      'Múltiplos Fatores e Bloqueio de Contas: tentativas repetidas com senha incorreta no Wi-Fi Enterprise (ex.: celular com senha alterada no AD ainda tentando conectar em background) são causa frequente de Account Lockout (bloqueio automático de conta) no Active Directory.',
      'Exemplo operacional: em uma rede hospitalar integrada ao Active Directory, estações recebem certificados de computador via **Autoenrollment (GPO)** da **AD CS** interna para autenticar em **EAP-TLS** no SSID corporativo, permitindo login pré-usuário e evitando bloqueios no AD após troca de senha. Para visitantes sem agente, utiliza-se portal cativo (**Central WebAuth**) com segundo fator por SMS e accounting RADIUS, enquanto o NAC envia identidades via **pxGrid/Syslog** ao firewall de borda.'
    ],
    technicalReference: [
      'Identidade: PSK (segredo único compartilhado, sem rastreabilidade individual) vs Enterprise 802.1X (autenticação nominal + auditoria por usuário/máquina)',
      'EAP-TLS: exige PKI/CA confiável emitindo certificado de cliente e servidor | EAP-Chaining (TEAP): valida Máquina + Usuário.'
    ],
    examTraps: [
      'Com WPA2/WPA3-Enterprise, trocar a senha de domínio de um usuário pode causar bloqueio da conta no AD porque dispositivos móveis/notebooks salvam a senha antiga e repetem conexões Wi-Fi automaticamente.',
      'Autenticação apenas por usuário sem Machine Auth faz com que, antes do login no Windows, a estação não tenha rede nem receba GPOs de inicialização ou atualizações.',
      'Nunca habilitar LDAP simples sem TLS ou aceitar qualquer certificado RADIUS sem validar a Autoridade Certificadora (CA) no supplicant — expõe o cliente a ataque de AP falso (Evil Twin) capturando credenciais MSCHAPv2.'
    ],
    keyTerms: [
      'PSK vs 802.1X Enterprise: senha única compartilhada sem auditoria nominal versus autenticação individual por conta ou certificado',
      'Machine Authentication: validação da conta de computador no boot antes do logon humano, permitindo GPOs e scripts de inicialização',
      'TEAP (EAP Chaining): método EAP tunelado que encadeia a validação do certificado de máquina e da identidade do usuário na mesma sessão',
      'Account Lockout: bloqueio de conta no Active Directory provocado por retentativas automáticas em segundo plano com senha antiga no Wi-Fi',
      'Evil Twin (AP Falso): ponto de acesso malicioso clonando SSID corporativo para capturar credenciais quando o supplicant não valida a CA do servidor'
    ]
  },
  '7.2.5': {
    itemId: '7.2.5',
    highYieldSummary: [
      'Definição e escopo: a atribuição de **VLAN dinâmica** e controles granulares por sessão (**dACL** e **SGT**) permite que switches e controladoras Wi-Fi segmentem dispositivos automaticamente conforme identidade após a autenticação RADIUS, dispensando múltiplos SSIDs ou reconfiguração manual de portas. Baseia-se na tríade padrão da **RFC 3580** e exige pré-existência das VLANs nos equipamentos de acesso.',
      'VLAN Dinâmica (Dynamic VLAN Assignment): permite usar um único SSID corporativo (ou mesma configuração padrão de portas de switch) e alocar dinamicamente cada endpoint na VLAN correspondente ao seu perfil/grupo (ex.: Corporativo -> VLAN 10, Visitante -> VLAN 50, Quarentena -> VLAN 99) após autenticação.',
      'Atributos RADIUS Obrigatórios para VLAN Dinâmica (RFC 3580): Tunnel-Type = VLAN (valor 13), Tunnel-Medium-Type = 802 (valor 6) e Tunnel-Private-Group-ID = <número ou nome exato da VLAN destino>.',
      'dACL (Downloadable ACL): lista de controle de acesso armazenada centralmente no servidor NAC (ISE) e enviada dinamicamente ao switch dentro do Access-Accept para restringir tráfego por porta/sessão sem precisar criar ACLs estáticas idênticas em dezenas de switches.',
      'Segmentação por Identidade (SGT / Microssegmentação): além da VLAN tradicional, soluções como Cisco TrustSec atribuem Security Group Tags (SGT — etiquetas lógicas inseridas no cabeçalho L2 de quadro) na origem para controlar comunicação Leste-Oeste independentemente da sub-rede IP.',
      'Pré-requisitos no Switch/WLC: todas as VLANs atribuídas dinamicamente pelo RADIUS precisam existir previamente na base de VLANs do switch (ou interface/VLAN pool do WLC), além de configuração de AAA authorization network; caso contrário, a porta é bloqueada.',
      'Exemplo operacional: no único SSID corporativo `Hosp_Corp`, médicos autenticados em EAP-TLS no grupo `AD_Medicos` recebem do RADIUS `Tunnel-Type=13`, `Tunnel-Medium-Type=6` e `Tunnel-Private-Group-ID=20`, entrando automaticamente na `VLAN 20` (previamente criada nos switches e no WLC). Já equipamentos biomédicos autenticados por MAB recebem `VLAN 60` associada à `dACL_Biomedica`, liberando exclusivamente comunicação com o servidor PACS e bloqueando internet.'
    ],
    technicalReference: [
      'Tríade de atributos RADIUS RFC 3580 para VLAN Dinâmica: (1) Tunnel-Type=13 (VLAN), (2) Tunnel-Medium-Type=6 (802), (3) Tunnel-Private-Group-ID=<ID/Nome VLAN>',
      'dACL vs VLAN Dinâmica: VLAN define o domínio de broadcast L2/sub-rede IP; dACL aplica filtragem granular L3/L4 diretamente na porta de acesso.'
    ],
    examTraps: [
      'Se o servidor RADIUS retornar Tunnel-Private-Group-ID = "30", mas a VLAN 30 não estiver criada no switch de acesso, a autenticação falha e a porta cai em erro/bloqueio.',
      'Para atribuir VLAN dinâmica funcionar corretamente, é indispensável enviar os 3 atributos juntos (Tunnel-Type=VLAN, Tunnel-Medium-Type=802 e Tunnel-Private-Group-ID).',
      'Em switches, dACLs dinâmicas consomem memória TCAM de hardware — regras excessivamente extensas por porta podem esgotar a TCAM em switches de acesso antigos.'
    ],
    keyTerms: [
      'RFC 3580 (Tríade RADIUS): atributos Tunnel-Type=13, Tunnel-Medium-Type=6 e Tunnel-Private-Group-ID exigidos em conjunto para VLAN dinâmica',
      'dACL (Downloadable ACL): ACL gerenciada no servidor NAC e enviada dinamicamente à porta de switch no Access-Accept',
      'SGT (Security Group Tag): etiqueta lógica de grupo aplicada na origem para microssegmentação Leste-Oeste independente de IP/VLAN',
      'VLAN Pool / Interface WLC: conjunto de VLANs previamente cadastradas no switch/WLC obrigatório para aceitar o retorno do RADIUS',
      'TCAM (Ternary Content-Addressable Memory): memória de hardware no ASIC do switch onde regras de dACL são programadas para filtragem em line-rate'
    ]
  },
  '7.2.6': {
    itemId: '7.2.6',
    highYieldSummary: [
      'Definição e escopo: a operação prática de **WPA2** e **WPA3** engloba o estabelecimento criptográfico de chaves de sessão (**PMK -> PTK/GTK** via **4-Way Handshake**), a troca **SAE** anti-força-bruta offline, a convivência transitória (**Transition Mode**) e protocolos de roaming veloz (**802.11r / OKC**). Assegura proteção robusta contra quebra de senha e falsificação de gerenciamento sem derrubar chamadas de voz ao trocar de AP.',
      '4-Way Handshake (WPA2 e WPA3): após autenticação (PSK/SAE ou 802.1X gerando a PMK — Pairwise Master Key), AP e cliente trocam 4 mensagens EAPoL-Key para derivar chaves temporais de sessão (PTK — Pairwise Transient Key — para unicast e GTK — Group Temporal Key — para broadcast/multicast) e provar posse da PMK sem transmiti-la no ar.',
      'Protocolo SAE (Dragonfly) no WPA3-Personal: substitui o 4-way handshake baseado diretamente em PMK derivada de senha estática por uma troca criptográfica Diffie-Hellman (negociação mútua de segredo sem expor a chave) resistente a força bruta offline — cada tentativa de senha exige interação online ao vivo com o AP, tornando ataques de dicionário capturados inviáveis.',
      'WPA3 Transition Mode: modo híbrido no mesmo SSID que aceita simultaneamente clientes WPA2-PSK (AES-CCMP) e clientes WPA3-SAE (PMF obrigatório para WPA3, opcional para WPA2); facilita migração gradual, mas ainda permite ataque de downgrade contra clientes capazes de usar apenas WPA2 se não for desativado após transição.',
      'Roaming Seguro e Rápido (802.11r / PMK Caching / OKC — Opportunistic Key Caching): em WPA2/WPA3-Enterprise, refazer todo o handshake 802.1X/RADIUS ao caminhar entre APs causa cortes em VoIP/vídeo; 802.11r (Fast BSS Transition — FT) e OKC permitem pré-negociar ou reaproveitar chaves entre APs em menos de 50 ms.',
      'WPA3-Enterprise e Suite 192-bit: mantém 802.1X com PMF obrigatório; no modo 192-bit exige algoritmos governamentais fortes (AES-GCMP-256, HMAC-SHA384 — código de autenticação de mensagem por hash, ECDH/ECDSA P-384 — curvas elípticas de 384 bits) de ponta a ponta entre cliente e servidor.',
      'Exemplo operacional: ao migrar um ambiente com telefones IP Wi-Fi e notebooks para **WPA3-Enterprise**, configura-se **PMF = Required** e **802.11r (FT-802.1X)** no SSID corporativo, permitindo transição de AP com derivação prévia de chaves abaixo de `50 ms` sem nova consulta RADIUS completa. Dispositivos médicos legados sem suporte a WPA3 nem FT-SAE são isolados em um SSID separado em WPA2, evitando manter o SSID principal em **Transition Mode**.'
    ],
    technicalReference: [
      'Chaves no 4-Way Handshake: PMK (mestra) -> deriva PTK (unicast única por cliente) + GTK (broadcast/multicast do BSS)',
      'Transition Mode: permite WPA2-PSK + WPA3-SAE no mesmo SSID (facilita compatibilidade, porém reduz garantia plena anti-downgrade).'
    ],
    examTraps: [
      'No 4-Way Handshake, a senha (PSK) ou a chave mestra (PMK) NUNCA trafega em texto claro nem criptografada — ambos os lados provam posse derivando a PTK via nonces (ANonce/SNonce) e MACs.',
      'O WPA3 Transition Mode mantém vulnerabilidade herdada caso o atacante force clientes legados (ou compatíveis) a negociarem em WPA2-PSK.',
      'Ativar 802.11r (Fast Transition) em SSIDs mistos com dispositivos antigos incompatíveis pode impedir a conexão desses equipamentos se o AP não oferecer modo Adaptive 11r.'
    ],
    keyTerms: [
      '4-Way Handshake (PMK/PTK/GTK): troca de 4 quadros EAPoL-Key que deriva chaves únicas de unicast (PTK) e grupo (GTK) a partir da PMK',
      'ANonce / SNonce: valores aleatórios de uso único trocados entre AP e estação para gerar a PTK sem expor a PMK no ar',
      'WPA3 Transition Mode: SSID híbrido WPA2-PSK + WPA3-SAE para migração gradual, sujeito a ataque de downgrade para WPA2',
      '802.11r (Fast BSS Transition): padrão que pré-estabelece chaves entre APs vizinhos reduzindo a transição de roaming para < 50 ms',
      'OKC (Opportunistic Key Caching): reaproveitamento de PMKID entre APs gerenciados para evitar reautenticação 802.1X integral durante roaming'
    ]
  },
  '7.2.7': {
    itemId: '7.2.7',
    highYieldSummary: [
      'Definição e escopo: o troubleshooting de redes sem fio e NAC correlaciona logs de autenticação (**RADIUS Live Logs**), camada de rede (**VLANs, trunks, DHCP Relay, dACLs**) e telemetria de radiofrequência (**RSSI, SNR, Channel Utilization, Retry Rate**). Permite isolar rapidamente se uma falha decorre de credencial/certificado, bloqueio de DHCP pós-autenticação, interferência espectral ou **Sticky Client** em roaming.',
      'RADIUS Live Logs (Cisco ISE / NPS Event Viewer): ferramenta primária de troubleshooting para 802.1X/MAB; exibe etapa exata de falha (Authentication Failed, Certificate Untrusted, Machine Not Found, Policy Matching incorreto, Timeout de NAS ou Rejeição por Shared Secret inválido).',
      'Diagnóstico de Camada Física de RF (Radiofrequência — RSSI, SNR e Canal): RSSI (Received Signal Strength Indicator) mede potência recebida (ideal corporativo entre -50 dBm e -67 dBm para voz/dados); SNR (Signal-to-Noise Ratio) mede distância entre sinal útil e piso de ruído (mínimo recomendado >= 20–25 dB); piso de ruído alto ou co-channel interference (interferência entre APs no mesmo canal) derruba taxas MCS (Modulation and Coding Scheme — índices de taxa PHY) e causa retransmissões.',
      'Problemas Clássicos de Roaming ("Sticky Client" — cliente preso a AP distante): dispositivos permanecem presos a um AP distante com sinal fraco (-80 dBm) em vez de migrar para o AP vizinho; correção envolve ajustar potência de transmissão (reduzir potência excessiva em 2,4 GHz), desabilitar taxas básicas muito baixas (ex.: 1/2/5.5/11 Mbps) e habilitar 802.11k/v/r (assistência de vizinhança e transição rápida de roaming).',
      'Falhas de DHCP/Conectividade Pós-Autenticação: se o RADIUS Live Logs mostra Access-Accept, mas o cliente não navega ("sem IP" ou IP APIPA — Automatic Private IP Addressing — 169.254.x.x), investigar VLAN retornada não criada no switch, falta de ip helper-address (DHCP Relay) no SVI (Switched Virtual Interface — interface L3 da VLAN), porta trunk sem a VLAN permitida ou bloqueio por ACL/DHCP Snooping.',
      'Análise de Desempenho em RF (Channel Utilization e Retry Rate): alta utilização de canal (> 60–70%) e taxa elevada de retransmissão (> 15–20%) indicam saturação de airtime (tempo de ocupação do meio aéreo) por excesso de SSIDs (overhead de Beacons — quadros de anúncio periódico), interferência não-Wi-Fi (micro-ondas, Bluetooth) ou canais largos demais (80 MHz em ambiente denso).',
      'Exemplo operacional: após queixas de estações sem rede em um ambulatório, os **RADIUS Live Logs** mostram `Access-Accept` com `VLAN 25`, porém os clientes ficam em `169.254.x.x`; descobre-se que o trunk de uplink do switch omitia a `VLAN 25` até o roteador com `ip helper-address`, corrigido de imediato. No mesmo setor, o analisador RF aponta **Sticky Client** (`RSSI = -82 dBm`) e `Channel Utilization = 78%` em `2,4 GHz` por APs em potência máxima; reduz-se a potência TX para `11 dBm`, desativam-se taxas `1/2/5,5 Mbps` e habilita-se `802.11k/v`, normalizando `SNR >= 25 dB`.'
    ],
    technicalReference: [
      'Limiares RF Voz/Corporativo: RSSI >= -67 dBm | SNR >= 25 dB | Perda < 1% | Channel Utilization ideal < 50%',
      'Troubleshooting 802.1X: Falha antes de Access-Accept -> RADIUS Live Logs / Certificados / AD; Access-Accept OK mas sem rede -> VLAN / Trunk / DHCP Relay / dACL.'
    ],
    examTraps: [
      'Aumentar a potência de transmissão dos APs ao máximo ("100% / High Power") PIORA o Wi-Fi corporativo: causa assimetria de enlace (o celular ouve o AP longe, mas seu rádio fraco não alcança de volta), impede roaming e multiplica interferência co-canal.',
      'Criar dezenas de SSIDs distintos no mesmo AP consome grande parte do tempo de ar (airtime) apenas enviando frames Beacon a cada 102,4 ms na menor taxa básica — recomenda-se no máximo 3 a 4 SSIDs.',
      'Quando o RADIUS mostra Access-Accept verde e o cliente pega 169.254.x.x, o problema quase nunca é senha/certificado — é falta da VLAN no trunk até o servidor DHCP ou ausência de ip helper-address.'
    ],
    keyTerms: [
      'RSSI vs SNR: intensidade absoluta do sinal recebido (dBm) versus margem em dB acima do piso de ruído do ambiente',
      'Sticky Client: comportamento em que o cliente continua associado a um AP distante e fraco sem migrar para o AP mais próximo',
      'Co-Channel Interference (CCI): contenção de airtime no CSMA/CA entre APs ou estações vizinhas compartilhando o mesmo canal',
      'Beacon Overhead: consumo contínuo de tempo de ar pela emissão de Beacons (~102,4 ms) multiplicada pela quantidade de SSIDs ativos',
      '802.11k / 802.11v: padrões de assistência de vizinhança e direcionamento que aceleram decisões corretas de roaming pelo cliente'
    ]
  }
};
