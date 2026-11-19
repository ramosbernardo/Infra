import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_7: Record<string, StudyGuide> = {
  '7.1.1': {
    itemId: '7.1.1',
    highYieldSummary: [
      'Evolução dos Padrões IEEE 802.11: 802.11b (2,4 GHz, DSSS, até 11 Mbps), 802.11a (5 GHz, OFDM, até 54 Mbps), 802.11g (2,4 GHz, OFDM, 54 Mbps), 802.11n / Wi-Fi 4 (2,4 e 5 GHz, MIMO até 4x4, canais de 20/40 MHz), 802.11ac / Wi-Fi 5 (exclusivo 5 GHz, MU-MIMO downlink, canais até 160 MHz, 256-QAM) e 802.11ax / Wi-Fi 6/6E (2,4 / 5 / 6 GHz no 6E, OFDMA bidirecional, MU-MIMO UL/DL, 1024-QAM, TWT e BSS Coloring).',
      'Bandas e Canais sem Sobreposição: em 2,4 GHz existem 11–14 canais espaçados em 5 MHz com largura de 20/22 MHz — logo apenas 3 canais NÃO se sobrepõem (1, 6 e 11); em 5 GHz há muito mais canais não sobrepostos (20 MHz), porém faixas DFS exigem detecção de radar meteorológico/militar.',
      'Conceitos Fundamentais de Identificação: SSID (nome lógico da rede divulgado em frames Beacon/Probe), BSSID (endereço MAC da interface de rádio do AP específico) e ESSID (conjunto de vários APs compartilhando o mesmo SSID para permitir roaming contínuo).',
      'Mecanismo de Acesso CSMA/CA e Hidden Node: diferentemente do Ethernet cabeado (CSMA/CD), redes Wi-Fi não detectam colisão no ar enquanto transmitem — usam CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) com backoff aleatório e troca opcional RTS/CTS para mitigar o problema do Nó Oculto (Hidden Node).',
      'Diferenciais do Wi-Fi 6 (802.11ax): OFDMA subdivide o canal em Resource Units (RUs) permitindo múltiplos clientes transmitirem simultaneamente em pacotes pequenos (ideal para alta densidade), enquanto BSS Coloring marca quadros com cores para reduzir interferência co-canal.'
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
    keyTerms: ['802.11n/ac/ax (Wi-Fi 4/5/6)', 'Canais 1, 6 e 11 (2,4 GHz)', '5 GHz / 6 GHz / DFS', 'CSMA/CA e Hidden Node', 'SSID vs BSSID / OFDMA']
  },
  '7.1.2': {
    itemId: '7.1.2',
    highYieldSummary: [
      'Arquitetura IEEE 802.1X (Controle de Acesso Baseado em Porta): separa três papéis obrigatórios — Supplicant (dispositivo cliente com agente 802.1X), Authenticator (switch Ethernet ou Access Point/WLC que bloqueia/libera a porta) e Authentication Server (servidor RADIUS como Cisco ISE, FreeRADIUS ou Microsoft NPS que valida credenciais).',
      'Fluxo de Comunicação e Protocolos: entre Supplicant e Authenticator trafega EAP encapsulado em quadros Layer 2 via EAPoL (EAP over LAN — sem necessidade de IP prévio); o Authenticator extrai o conteúdo EAP e o encapsula em pacotes UDP/IP RADIUS até o Authentication Server.',
      'Métodos EAP Principais: EAP-TLS (autenticação mútua por certificados digitais no servidor E no cliente — mais seguro, dispensa senha, exige PKI), PEAP (túnel TLS autenticado por certificado apenas do servidor, protegendo credenciais internas como MSCHAPv2) e EAP-TTLS (similar ao PEAP, aceitando métodos legados dentro do túnel).',
      'Estados da Porta no 802.1X: antes da validação bem-sucedida, a Porta Não Controlada permite exclusivamente quadros EAPoL (e eventualmente tráfego pré-autenticação mínimo), mantendo bloqueada a Porta Controlada de dados até receber RADIUS Access-Accept.',
      'Alternativa para Dispositivos sem Suporte 802.1X (MAB): impressoras, câmeras IP e IoT sem supplicant falham no EAPoL após timeout e fazem fallback para MAC Authentication Bypass (MAB), onde o switch envia o MAC address como usuário/senha ao RADIUS para aplicar perfil/VLAN restrita.'
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
    keyTerms: ['802.1X (Supplicant/Authenticator/AS)', 'EAPoL vs RADIUS', 'EAP-TLS vs PEAP', 'Porta Controlada / Não Controlada', 'MAB']
  },
  '7.1.3': {
    itemId: '7.1.3',
    highYieldSummary: [
      'WEP (Wired Equivalent Privacy — obsoleto): utilizava cifra de fluxo RC4 com Vetor de Inicialização (IV) curto de 24 bits e chave estática compartilhada; vulnerável a ataques estatísticos passivos em minutos devido à repetição frequente do IV.',
      'WPA (Wi-Fi Protected Access — legado): solução transitória baseada no padrão IEEE 802.11i draft que manteve o hardware RC4 adicionando o protocolo TKIP (Temporal Key Integrity Protocol — IV de 48 bits, rotação de chave por pacote e MIC Michael), hoje considerado inseguro e proibido em redes 802.11n/ac/ax.',
      'WPA2 (IEEE 802.11i completo): substituiu RC4/TKIP pelo algoritmo robusto AES em modo CCMP (Counter Mode with CBC-MAC Protocol) fornecendo confidencialidade, integridade e autenticação; vulnerável em modo Personal (PSK) à captura do 4-way handshake para ataque de dicionário offline e ao ataque KRACK (mitigado por patches).',
      'WPA3 (Evolução Atual): substitui a troca vulnerável de PSK pelo protocolo SAE (Simultaneous Authentication of Equals / Dragonfly) que garante Forward Secrecy e resistência a quebra offline por dicionário; exige obrigatoriamente PMF (Protected Management Frames — 802.11w) contra ataques de desautenticação (deauth flood).',
      'Modo Enterprise vs Personal (PSK) e OWE: modo Personal usa senha pré-compartilhada (PSK no WPA2 / SAE no WPA3); modo Enterprise usa 802.1X/RADIUS com chaves exclusivas por sessão/usuário (192-bit suite disponível no WPA3-Enterprise); redes abertas usam OWE (Opportunistic Wireless Encryption) para criptografar o ar mesmo sem senha.'
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
    keyTerms: ['WEP / TKIP (obsoletos)', 'WPA2 (AES-CCMP)', 'WPA3 (SAE + PMF 802.11w)', 'PSK vs Enterprise (802.1X)', 'OWE']
  },
  '7.2.1': {
    itemId: '7.2.1',
    highYieldSummary: [
      'NAC (Network Access Control — ex.: Cisco ISE, Aruba ClearPass, PacketFence): centraliza visibilidade (profiling), autenticação (802.1X/MAB/WebAuth), avaliação de postura (posture check) e autorização granular para qualquer dispositivo cabeado ou sem fio antes de liberar acesso pleno à rede.',
      'Avaliação de Postura (Posture Assessment) e Quarentena: agente no endpoint ou checagem sem agente verifica se antivírus está ativo/atualizado, patches do SO aplicados e disco criptografado; máquinas não conformes recebem VLAN de remediação/quarentena ou dACL restrita até se corrigirem.',
      'CoA (Change of Authorization — RFC 5176): mecanismo dinâmico (UDP 3799 ou 1700) pelo qual o servidor NAC (Cisco ISE) envia comando em tempo real ao switch/WLC para reavaliar, mover de VLAN, aplicar dACL de quarentena ou derrubar uma sessão já autenticada sem esperar novo login.',
      'Profiling e Guest Access: NAC identifica automaticamente tipos de dispositivos (impressora, telefone IP, IoT) analisando atributos DHCP, CDP/LLDP, OUI MAC e HTTP User-Agent; portais cativos (CWA — Central Web Auth) autenticam visitantes com patrocínio (sponsor) e isolamento de clientes.',
      'Controladores Wi-Fi Corporativos (WLC / Omada Controller): arquitetura centralizada onde Lightweight APs estabelecem túneis de controle/dados (ex.: CAPWAP) ou operam gerenciados em nuvem/on-premises (Omada SDN), aplicando SSIDs, controle de potência/canal automático (RRM) e roaming rápido (802.11r/k/v) de forma unificada.'
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
    keyTerms: ['NAC (Cisco ISE)', 'Posture Assessment', 'Profiling', 'CoA (RFC 5176)', 'WLC / Omada Controller']
  },
  '7.2.2': {
    itemId: '7.2.2',
    highYieldSummary: [
      'EAPoL (Extensible Authentication Protocol over LAN — EtherType 0x888E): protocolo de Camada 2 usado diretamente entre Supplicant e Switch/AP; mensagens incluem EAPoL-Start (cliente inicia), EAP-Request/Identity (autenticador pergunta quem é), EAP-Response e EAPoL-Logoff (desconexão explícita).',
      'Modos de Autorização de Porta em Switches: Single-Host (permite apenas 1 MAC autenticado na porta), Multi-Auth (autentica individualmente múltiplos dispositivos atrás da mesma porta — padrão para IP Phone + PC), Multi-Domain (1 dispositivo na VLAN de voz + 1 na VLAN de dados) e Multi-Host (perigoso: autentica 1 MAC e libera todos os demais atrás de um hub/mini-switch).',
      'Implantação Gradual (Monitor Mode -> Low-Impact -> Closed Mode): boa prática corporativa começa em Monitor Mode (autentica e registra logs sem bloquear tráfego), passa por Low-Impact (ACL pré-auth restritiva permitindo DHCP/DNS/AD) e só então ativa Closed Mode (bloqueio total antes do Access-Accept).',
      'Integração com Telefones IP e LLDP/CDP: telefone IP autentica na VLAN de voz (via 802.1X ou MAB com perfil Cisco-AVPair device-traffic-class=voice) e o PC conectado atrás do switch embutido no telefone autentica separadamente na VLAN de dados (modo Multi-Domain).',
      'Critical VLAN / Fail-Open: caso todos os servidores RADIUS fiquem inacessíveis (Dead Server), o switch pode mover novas autenticações para uma Critical VLAN pré-definida garantindo continuidade operacional de emergência.'
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
    keyTerms: ['EAPoL (0x888E)', 'Multi-Domain vs Multi-Auth', 'Monitor / Low-Impact / Closed Mode', 'Critical VLAN', 'Wired AutoConfig']
  },
  '7.2.3': {
    itemId: '7.2.3',
    highYieldSummary: [
      'Protocolo RADIUS (Remote Authentication Dial-In User Service): padrão aberto IETF para AAA (Authentication, Authorization e Accounting) entre NAS (switches, WLCs, firewalls/VPN) e servidor de políticas; utiliza UDP (porta 1812 para Autenticação/Autorização e porta 1813 para Accounting — portas legadas 1645/1646).',
      'Segurança na Comunicação RADIUS: cada cliente de rede (NAS) compartilha um Shared Secret único com o servidor RADIUS; o RADIUS criptografa apenas o atributo da senha (User-Password) na requisição (ou usa RadSec sobre TLS na TCP 2083), mantendo cabeçalhos e atributos visíveis em texto claro na rede.',
      'Diferença Crucial entre RADIUS e TACACS+: RADIUS usa UDP (1812/1813), combina Autenticação + Autorização no mesmo Access-Accept, criptografa somente a senha (padrão RFC 2865) e é o padrão de acesso à REDE (802.1X, Wi-Fi, VPN); TACACS+ (Cisco) usa TCP 49, separa completamente A-A-A permitindo autorização granular por comando CLI, criptografa todo o corpo do pacote e é usado para administração de EQUIPAMENTOS.',
      'Fluxo de Mensagens RADIUS: NAS envia Access-Request -> Servidor pode responder Access-Challenge (ex.: diálogo EAP ou token MFA) -> ao final envia Access-Accept (com atributos de VLAN/dACL/sessão) ou Access-Reject; Accounting usa Accounting-Request (Start, Interim-Update, Stop) e Accounting-Response.',
      'Atributos Vendor-Specific (VSAs) e Atributos Padrão IETF: atributos padrão (ex.: Tunnel-Type, Tunnel-Medium-Type, Tunnel-Private-Group-ID, Filter-Id, Session-Timeout) convivem com VSAs proprietários (Cisco-AVPair) para aplicar dACLs, URL-Redirect (portal cativo) e timeouts.'
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
    keyTerms: ['RADIUS (UDP 1812/1813)', 'TACACS+ (TCP 49)', 'Shared Secret', 'Access-Request / Challenge / Accept', 'Accounting (Start/Interim/Stop)']
  },
  '7.2.4': {
    itemId: '7.2.4',
    highYieldSummary: [
      'PSK (Pre-Shared Key) vs Enterprise (802.1X): PSK usa uma única senha compartilhada por todos na mesma rede — qualquer demitido ou aparelho roubado compromete o segredo coletivo exigindo troca em massa; Enterprise identifica individualmente cada usuário ou máquina via credenciais corporativas/certificados gerando chaves de sessão únicas.',
      'Integração com Active Directory (AD) e PKI (AD CS): o servidor RADIUS/NAC ingressa no domínio Active Directory (ou consulta via LDAPS/Kerberos) validando usuários, grupos de segurança e contas de computador, enquanto uma PKI interna emite certificados automáticos via GPO (Autoenrollment) para EAP-TLS.',
      'Autenticação de Máquina vs Usuário (TEAP / Machine + User): em ambientes Windows, autenticar a MÁQUINA no boot antes do login do usuário garante aplicação de GPOs e mapeamentos antes da tela de logon; protocolos como TEAP (EAP Chaining) validam tanto o certificado da máquina quanto a identidade do usuário na mesma conexão.',
      'Single Sign-On e Identidade em Wi-Fi/NAC: permite correlacionar sessões autenticadas no ISE/RADIUS com firewalls de borda (Identity Awareness / pxGrid / Syslog) para aplicar regras de firewall baseadas no grupo do AD em vez de apenas endereço IP volátil.',
      'Múltiplos Fatores e Bloqueio de Contas: tentativas repetidas com senha incorreta no Wi-Fi Enterprise (ex.: celular com senha alterada no AD ainda tentando conectar em background) são causa frequente de Account Lockout no Active Directory.'
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
    keyTerms: ['PSK vs Enterprise', 'Integração Active Directory', 'PKI / Certificados', 'Machine vs User Auth', 'Account Lockout / Evil Twin']
  },
  '7.2.5': {
    itemId: '7.2.5',
    highYieldSummary: [
      'VLAN Dinâmica (Dynamic VLAN Assignment): permite usar um único SSID corporativo (ou mesma configuração padrão de portas de switch) e alocar dinamicamente cada endpoint na VLAN correspondente ao seu perfil/grupo (ex.: Corporativo -> VLAN 10, Visitante -> VLAN 50, Quarentena -> VLAN 99) após autenticação.',
      'Atributos RADIUS Obrigatórios para VLAN Dinâmica (RFC 3580): Tunnel-Type = VLAN (valor 13), Tunnel-Medium-Type = 802 (valor 6) e Tunnel-Private-Group-ID = <número ou nome exato da VLAN destino>.',
      'dACL (Downloadable ACL): lista de controle de acesso armazenada centralmente no servidor NAC (ISE) e enviada dinamicamente ao switch dentro do Access-Accept para restringir tráfego por porta/sessão sem precisar criar ACLs estáticas idênticas em dezenas de switches.',
      'Segmentação por Identidade (SGT / Microssegmentação): além da VLAN tradicional, soluções como Cisco TrustSec atribuem Security Group Tags (SGT) na origem para controlar comunicação Leste-Oeste independentemente da sub-rede IP.',
      'Pré-requisitos no Switch/WLC: todas as VLANs atribuídas dinamicamente pelo RADIUS precisam existir previamente na base de VLANs do switch (ou interface/VLAN pool do WLC), além de configuração de AAA authorization network; caso contrário, a porta é bloqueada.'
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
    keyTerms: ['VLAN Dinâmica', 'Tunnel-Private-Group-ID', 'RFC 3580', 'dACL (Downloadable ACL)', 'Segmentação / Quarentena']
  },
  '7.2.6': {
    itemId: '7.2.6',
    highYieldSummary: [
      '4-Way Handshake (WPA2 e WPA3): após autenticação (PSK/SAE ou 802.1X gerando a PMK — Pairwise Master Key), AP e cliente trocam 4 mensagens EAPoL-Key para derivar chaves temporais de sessão (PTK para unicast e GTK para broadcast/multicast) e provar posse da PMK sem transmiti-la no ar.',
      'Protocolo SAE (Dragonfly) no WPA3-Personal: substitui o 4-way handshake baseado diretamente em PMK derivada de senha estática por uma troca criptográfica Diffie-Hellman resistente a força bruta offline — cada tentativa de senha exige interação online ao vivo com o AP, tornando ataques de dicionário capturados inviáveis.',
      'WPA3 Transition Mode: modo híbrido no mesmo SSID que aceita simultaneamente clientes WPA2-PSK (AES-CCMP) e clientes WPA3-SAE (PMF obrigatório para WPA3, opcional para WPA2); facilita migração gradual, mas ainda permite ataque de downgrade contra clientes capazes de usar apenas WPA2 se não for desativado após transição.',
      'Roaming Seguro e Rápido (802.11r / PMK Caching / OKC): em WPA2/WPA3-Enterprise, refazer todo o handshake 802.1X/RADIUS ao caminhar entre APs causa cortes em VoIP/vídeo; 802.11r (Fast BSS Transition — FT) e OKC permitem pré-negociar ou reaproveitar chaves entre APs em menos de 50 ms.',
      'WPA3-Enterprise e Suite 192-bit: mantém 802.1X com PMF obrigatório; no modo 192-bit exige algoritmos governamentais fortes (AES-GCMP-256, HMAC-SHA384, ECDH/ECDSA P-384) de ponta a ponta entre cliente e servidor.'
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
    keyTerms: ['4-Way Handshake (PMK/PTK/GTK)', 'SAE (Dragonfly)', 'Transition Mode', '802.11r (Fast Transition)', 'PMF (802.11w)']
  },
  '7.2.7': {
    itemId: '7.2.7',
    highYieldSummary: [
      'RADIUS Live Logs (Cisco ISE / NPS Event Viewer): ferramenta primária de troubleshooting para 802.1X/MAB; exibe etapa exata de falha (Authentication Failed, Certificate Untrusted, Machine Not Found, Policy Matching incorreto, Timeout de NAS ou Rejeição por Shared Secret inválido).',
      'Diagnóstico de Camada Física de RF (RSSI, SNR e Canal): RSSI mede potência recebida (ideal corporativo entre -50 dBm e -67 dBm para voz/dados); SNR (Signal-to-Noise Ratio) mede distância entre sinal útil e piso de ruído (mínimo recomendado >= 20–25 dB); piso de ruído alto ou co-channel interference derruba taxas MCS e causa retransmissões.',
      'Problemas Clássicos de Roaming ("Sticky Client"): dispositivos permanecem presos a um AP distante com sinal fraco (-80 dBm) em vez de migrar para o AP vizinho; correção envolve ajustar potência de transmissão (reduzir potência excessiva em 2,4 GHz), desabilitar taxas básicas muito baixas (ex.: 1/2/5.5/11 Mbps) e habilitar 802.11k/v/r.',
      'Falhas de DHCP/Conectividade Pós-Autenticação: se o RADIUS Live Logs mostra Access-Accept, mas o cliente não navega ("sem IP" ou IP APIPA 169.254.x.x), investigar VLAN retornada não criada no switch, falta de ip helper-address no SVI, porta trunk sem a VLAN permitida ou bloqueio por ACL/DHCP Snooping.',
      'Análise de Desempenho em RF (Channel Utilization e Retry Rate): alta utilização de canal (> 60–70%) e taxa elevada de retransmissão (> 15–20%) indicam saturação de airtime por excesso de SSIDs (overhead de Beacons), interferência não-Wi-Fi (micro-ondas, Bluetooth) ou canais largos demais (80 MHz em ambiente denso).'
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
    keyTerms: ['RADIUS Live Logs', 'RSSI vs SNR', 'Sticky Client / Roaming', 'Co-Channel Interference', 'Airtime / Beacon Overhead']
  }
};
