import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_1_TO_4: readonly Question[] = Object.freeze([
  // ==================== EIXO 1: 1. Redes. (12 questões) ====================
  {
    id: 'sarah-01',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os protocolos TCP e UDP na arquitetura TCP/IP, analise as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A abertura de conexão TCP segue o handshake SYN, SYN-ACK e ACK, enquanto o encerramento gracioso usa FIN nos dois sentidos.\n( ) O flag TCP RST realiza o fechamento gracioso preservando todos os pacotes em trânsito nos buffers.\n( ) O protocolo UDP atua na camada de Rede para encaminhar datagramas entre roteadores sem cabeçalho de porta.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1. Modelo OSI e arquitetura TCP/IP. TCP abre com SYN/SYN-ACK/ACK e fecha graciosamente com FIN/ACK (V); RST provoca reset abrupto (F); UDP opera na camada de Transporte com portas (F).',
    correctAnalysis:
      'A primeira é verdadeira (three-way handshake e FIN bilateral); a segunda é falsa porque RST aborta a sessão abruptamente; a terceira é falsa porque UDP é protocolo da camada de Transporte com portas de origem e destino.',
    optionErrors: {
      0: 'Incorreta: o flag RST provoca reset abrupto da conexão, não encerramento gracioso.',
      1: 'Incorreta: a primeira afirmativa é verdadeira e a segunda (sobre RST) é falsa.',
      3: 'Incorreta: UDP pertence à camada de Transporte e possui cabeçalho com portas, não à camada de Rede.'
    }
  },
  {
    id: 'sarah-02',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Quais prefixos IPv4 evitam desperdício de endereços em enlaces ponto a ponto entre roteadores (RFC 3021)?',
    options: [
      'Sub-redes /29 (8 endereços totais) ou /32.',
      'Sub-redes /28 (16 endereços) ou /29 (6 úteis).',
      'Sub-redes /24 (254 úteis) ou /32 (loopback).',
      'Sub-redes /30 (2 úteis) ou /31 (RFC 3021).'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2. Endereçamento IPv4/IPv6 e sub-redes. Enlaces ponto a ponto usam /30 (2 hosts úteis) ou /31 (RFC 3021, 2 endereços sem desperdício de rede/broadcast).',
    correctAnalysis:
      'O prefixo /30 disponibiliza exatamente 2 hosts utilizáveis e o /31 (RFC 3021) permite usar os dois únicos endereços diretamente no enlace ponto a ponto.',
    optionErrors: {
      0: 'Incorreta: /29 possui 6 hosts úteis (desperdiça 4 IPs) e /32 identifica apenas um host isolado.',
      1: 'Incorreta: /28 oferece 14 hosts úteis e /29 oferece 6, desperdiçando endereços em ponto a ponto.',
      2: 'Incorreta: /24 atende redes locais inteiras e /32 representa rota de host único, não enlace com duas pontas.'
    }
  },
  {
    id: 'sarah-03',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre portas trunk IEEE 802.1Q, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.\n\n( ) Quadros de VLANs marcadas recebem uma tag 802.1Q de 4 bytes contendo o identificador VID de 12 bits.\n( ) Por padrão, os quadros da VLAN nativa trafegam sem tag (untagged) pelo enlace trunk.\n( ) O padrão 802.1Q substitui o MAC de origem pelo número da VLAN e opera na camada 3.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. trunk (Eixo 1. Redes). O padrão IEEE 802.1Q insere tag de 4 bytes nas VLANs marcadas e transmite a VLAN nativa sem tag por padrão, operando em camada 2 sem alterar o MAC de origem.',
    correctAnalysis:
      'A primeira (tag 802.1Q de 4 bytes com VID de 12 bits) e a segunda (VLAN nativa untagged por padrão) são verdadeiras; a terceira é falsa porque 802.1Q opera na camada 2 e preserva os endereços MAC.',
    optionErrors: {
      0: 'Incorreta: a segunda afirmativa é verdadeira (VLAN nativa é untagged por padrão) e a terceira é falsa.',
      2: 'Incorreta: a primeira afirmativa é verdadeira (a tag 802.1Q possui exatamente 4 bytes com VID de 12 bits).',
      3: 'Incorreta: a terceira afirmativa é falsa, pois o 802.1Q preserva os endereços MAC e atua na camada 2.'
    }
  },
  {
    id: 'sarah-1-04',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma topologia Ethernet redundante com RSTP (IEEE 802.1w), considere as afirmativas a seguir:\n\nI. O switch com menor Bridge ID (menor prioridade ou menor MAC em empate) é eleito Root Bridge.\nII. O recurso PortFast (Edge Port) leva portas de acesso rapidamente ao encaminhamento.\nIII. O BPDU Guard bloqueia (err-disable) a porta Edge caso receba uma BPDU inesperada.\nIV. Aumentar a prioridade STP para 61440 garante eleição como Root Bridge frente ao padrão 32768.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. STP (Eixo 1. Redes). Menor Bridge ID vence a eleição (I), PortFast acelera portas de borda (II) e BPDU Guard protege contra switches não autorizados (III).',
    correctAnalysis:
      'As afirmativas I, II e III descrevem corretamente RSTP/PortFast/BPDU Guard; já a IV é falsa porque vence o MENOR valor de prioridade (ex: 4096), e 61440 perde para o padrão 32768.',
    optionErrors: {
      0: 'Incorreta: inclui IV (61440 é maior que 32768, logo perde a eleição de Root Bridge) e omite III.',
      1: 'Incorreta: inclui IV (prioridade maior perde) e omite II.',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-1-05',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Dois switches ligados via LACP (802.1AX) não formaram Port-Channel: ambos estavam em modo Passive com uma porta a 100 Mbps e outra a 1 Gbps. Por quê?',
    options: [
      'Exige ao menos um lado Active e mesma velocidade/duplex nas portas.',
      'Exige ambos em Passive e velocidades distintas para balancear fluxos.',
      'Exige modo estático On em uma ponta e Passive na outra ponta.',
      'Exige desativar PAgP e usar temporizador LACP Fast distinto nos lados.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. LACP (Eixo 1. Redes). Passive+Passive não envia quadros LACPDU para negociar o canal, e membros do bundle precisam ter parâmetros físicos e L2 idênticos.',
    correctAnalysis:
      'Para negociar LACP dinamicamente ao menos um extremo precisa estar em modo Active (Active+Active ou Active+Passive), e todas as interfaces agregadas devem compartilhar mesma velocidade, duplex e modo access/trunk.',
    optionErrors: {
      1: 'Incorreta: Passive+Passive nunca inicia negociação LACPDU, e portas com velocidades diferentes são rejeitadas do bundle.',
      2: 'Incorreta: modo estático On não envia LACPDUs e é incompatível com LACP Passive.',
      3: 'Incorreta: temporizadores Fast/Slow ainda negociam; a falha decorre de Passive+Passive e incompatibilidade de velocidade.'
    }
  },
  {
    id: 'sarah-1-06',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após segmentar a rede em VLANs roteadas por um switch L3, estações da VLAN 30 pararam de receber IP do DHCP centralizado na VLAN 10. O que falta configurar na SVI?',
    options: [
      'Ativar Proxy ARP na SVI da VLAN 10 para encaminhar broadcasts.',
      'Habilitar DHCP Option 82 na VLAN 10 mantendo o broadcast em L2.',
      'Ativar DHCP Snooping com portas de usuário como Trusted.',
      'Configurar DHCP Relay (ip helper-address) na SVI da VLAN 30.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. DHCP (Eixo 1. Redes). Broadcasts DHCP Discover não cruzam fronteiras L3; o DHCP Relay converte em unicast para o servidor na porta UDP 67.',
    correctAnalysis:
      'Como roteadores não encaminham broadcasts L2 por padrão, o DHCP Relay (ip helper-address) na SVI da VLAN 30 encapsula o Discover em unicast rumo ao servidor DHCP usando UDP 67/68.',
    optionErrors: {
      0: 'Incorreta: Proxy ARP responde consultas ARP L2 e não encaminha mensagens DHCP Discover entre VLANs.',
      1: 'Incorreta: Option 82 apenas insere metadados de circuito sem rotear broadcast sozinho entre sub-redes.',
      2: 'Incorreta: DHCP Snooping protege contra servidores falsos na camada 2 e não encaminha Discover entre VLANs.'
    }
  },
  {
    id: 'sarah-1-07',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na administração de zonas DNS corporativas, relacione os registros à esquerda com suas funções à direita.\n\nColuna da Esquerda:\n(I) Registro A\n(II) Registro AAAA\n(III) Registro PTR\n(IV) Registro CNAME\n(V) Registro SRV\n\nColuna da Direita:\n(A) Mapeia um nome canônico (alias) para outro nome de domínio DNS.\n(B) Realiza resolução reversa, mapeando endereço IP para nome de host.\n(C) Mapeia um nome de host (FQDN) para um endereço IPv4 de 32 bits.\n(D) Localiza serviços específicos (como AD LDAP/Kerberos) indicando porta e host.\n(E) Mapeia um nome de host (FQDN) para um endereço IPv6 de 128 bits.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-C, III-B, IV-D, V-A.',
      'I-C, II-E, III-B, IV-A, V-D.',
      'I-C, II-B, III-E, IV-A, V-D.',
      'I-A, II-E, III-D, IV-C, V-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. DNS (Eixo 1. Redes). A = IPv4 (C), AAAA = IPv6 (E), PTR = reverso (B), CNAME = alias (A), SRV = localização de serviços (D).',
    correctAnalysis:
      'A associação exata é: (I) A -> IPv4 (C); (II) AAAA -> IPv6 (E); (III) PTR -> reverso IP-para-nome (B); (IV) CNAME -> alias entre nomes (A); (V) SRV -> localização de serviços e portas (D).',
    optionErrors: {
      0: 'Incorreta: inverte os registros A/AAAA e CNAME/SRV.',
      2: 'Incorreta: atribui PTR a IPv6 e AAAA a resolução reversa.',
      3: 'Incorreta: atribui registro A a alias (CNAME) e SRV a resolução reversa.'
    }
  },
  {
    id: 'sarah-1-08',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre a tecnologia MPLS (Multiprotocol Label Switching) em redes WAN, assinale a afirmação INCORRETA.',
    options: [
      'O cabeçalho shim de 32 bits fica entre a camada 2 e a camada 3.',
      'Roteadores LER executam PUSH/POP nas bordas e LSR fazem SWAP.',
      'O MPLS criptografa nativamente os pacotes com AES-256 no núcleo.',
      'O núcleo BGP-free comuta pacotes pelos rótulos sem tabela plena.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.3. Redes locais e de longa distância (LAN, WAN e MPLS). MPLS provê isolamento lógico de roteamento, mas NÃO fornece criptografia nativa dos dados.',
    correctAnalysis:
      'A afirmação incorreta (gabarito buscado pelo comando negativo) afirma que o MPLS criptografa nativamente o payload: ele isola o tráfego logicamente via rótulos e VRFs, porém sigilo em WAN exige IPsec/MACsec/TLS.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o cabeçalho MPLS tem 32 bits (20 bits de label) posicionado entre L2 e L3.',
      1: 'Incorreta (afirmação verdadeira): LERs executam PUSH/POP nas bordas e LSRs executam SWAP no núcleo.',
      3: 'Incorreta (afirmação verdadeira): um dos benefícios do MPLS é o núcleo comutar apenas por rótulos (BGP-free core).'
    }
  },
  {
    id: 'sarah-1-09',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um roteador possui rotas para 10.20.0.0/16 (OSPF, AD 110), 10.20.4.0/24 (estática, AD 1) e 10.20.4.0/25 (eBGP, AD 20). Qual rota encaminha o destino 10.20.4.15?',
    options: [
      'A rota eBGP 10.20.4.0/25, pelo critério de prefixo mais específico.',
      'A rota estática 10.20.4.0/24, pela menor Distância Administrativa.',
      'A rota OSPF 10.20.0.0/16, pela prioridade de protocolos internos IGP.',
      'Todas em balanceamento ECMP igualmente entre os três caminhos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4 e Item 2. routing (Eixo 1. Redes). O encaminhamento IP sempre escolhe primeiro a máscara mais específica (/25 > /24 > /16); AD só desempata prefixos idênticos.',
    correctAnalysis:
      'Na seleção de rota para um pacote, o roteador aplica primeiro o Longest Prefix Match: 10.20.4.0/25 é mais específico que /24 e /16, independentemente da Distância Administrativa.',
    optionErrors: {
      1: 'Incorreta: Distância Administrativa só decide qual protocolo entra na tabela quando há rotas concorrentes para o MESMO prefixo exato.',
      2: 'Incorreta: não existe precedência automática de OSPF sobre BGP que supere um prefixo mais específico.',
      3: 'Incorreta: ECMP só ocorre entre caminhos de igual custo e mesmo prefixo exato.'
    }
  },
  {
    id: 'sarah-1-10',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma VPN, pings curtos funcionam, mas HTTPS trava e "ping -M do -s 1472" perde pacotes. Qual a causa e correção?',
    options: [
      'Exaustão de Window Scaling; reduzir o temporizador Keepalive do túnel.',
      'Falha de IKE DPD no peer; desabilitar PFS na negociação Phase 2.',
      'Bloqueio por RPF assimétrico; habilitar Proxy ARP na interface LAN.',
      'Black hole de PMTUD; ajustar MTU da interface ou TCP MSS Clamping.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. troubleshooting (Eixo 1. Redes). Pings pequenos passam, mas pacotes grandes com flag DF (Don\'t Fragment) são descartados silenciosamente se o túnel reduzir a MTU e ICMP Type 3 Code 4 for filtrado.',
    correctAnalysis:
      'O overhead do túnel reduz a MTU efetiva; quando pacotes grandes com flag DF (ping -M do) não cabem e o ICMP Fragmentation Needed é bloqueado, ajusta-se a MTU ou aplica-se TCP MSS Clamping.',
    optionErrors: {
      0: 'Incorreta: TCP Window Scaling não explica a perda de pacotes ICMP de 1472 bytes com flag DF.',
      1: 'Incorreta: DPD detecta queda total do peer IPsec, enquanto pings pequenos atravessam normalmente.',
      2: 'Incorreta: drop de RPF por assimetria também afetaria pings pequenos e o handshake TCP inicial.'
    }
  },
  {
    id: 'sarah-1-11',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os blocos reservados de endereçamento IPv6, assinale a associação INCORRETA.',
    options: [
      'fe80::/10 corresponde a endereços Link-Local não roteáveis fora do enlace.',
      'fc00::/7 corresponde a endereços Global Unicast roteáveis na Internet.',
      'ff00::/8 identifica endereços reservados para tráfego Multicast.',
      '::1/128 identifica o endereço de loopback local da própria pilha IPv6.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Endereçamento IPv4/IPv6. fc00::/7 é o bloco ULA (Unique Local Addresses — equivalente privado não roteável na Internet pública); Global Unicast usa 2000::/3.',
    correctAnalysis:
      'A afirmação incorreta confunde ULA (fc00::/7, uso interno privado) com Global Unicast roteável na Internet pública (2000::/3).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): fe80::/10 é o prefixo padrão de endereços Link-Local IPv6.',
      2: 'Incorreta (afirmação verdadeira): ff00::/8 define o espaço de endereços Multicast no IPv6.',
      3: 'Incorreta (afirmação verdadeira): ::1/128 equivale ao 127.0.0.1 do IPv4 para loopback.'
    }
  },
  {
    id: 'sarah-1-12',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Quantos endereços IPv4 válidos para hosts uma sub-rede com máscara /26 (255.255.255.192) disponibiliza?',
    options: [
      '62 endereços válidos para hosts.',
      '64 endereços válidos para hosts.',
      '30 endereços válidos para hosts.',
      '126 endereços válidos para hosts.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2. Endereçamento IPv4 e cálculo de sub-redes. Em /26 restam 6 bits de host (32 - 26 = 6): 2^6 - 2 = 64 - 2 = 62 endereços válidos.',
    correctAnalysis:
      'Subtrair 26 de 32 resulta em 6 bits de host (64 endereços no bloco); removendo endereço de rede e broadcast restam 62 IPs utilizáveis.',
    optionErrors: {
      1: 'Incorreta: 64 é o total de endereços do bloco /26 antes de descontar endereço de rede e broadcast.',
      2: 'Incorreta: 30 endereços úteis pertencem a uma sub-rede /27 (5 bits de host: 2^5 - 2 = 30).',
      3: 'Incorreta: 126 endereços úteis pertencem a uma sub-rede /25 (7 bits de host: 2^7 - 2 = 126).'
    }
  },

  // ==================== EIXO 2: 2. Segurança de rede. (12 questões) ====================
  {
    id: 'sarah-04',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre dispositivos de segurança de rede, relacione a coluna da esquerda com a da direita.\n\nColuna da Esquerda:\n(I) Firewall Stateful\n(II) IDS (Intrusion Detection System)\n(III) IPS (Intrusion Prevention System)\n(IV) Proxy\n(V) NAT (Network Address Translation)\n\nColuna da Direita:\n(A) Atua inline bloqueando exploits e assinaturas maliciosas em tempo real.\n(B) Intermedia requisições em camada de aplicação com cache e controle de URLs.\n(C) Traduz endereços IP e/ou portas entre redes internas e externas.\n(D) Monitora cópias de tráfego passivamente (SPAN/TAP) para detectar e alertar.\n(E) Controla conexões mantendo tabela de estado das sessões estabelecidas.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-A, III-D, IV-B, V-C.',
      'I-E, II-D, III-A, IV-B, V-C.',
      'I-B, II-D, III-A, IV-E, V-C.',
      'I-E, II-D, III-C, IV-B, V-A.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Dispositivos de segurança (firewalls, IDS, IPS, proxies, NAT e VPN). Firewall Stateful (E), IDS passivo (D), IPS inline (A), Proxy (B) e NAT (C).',
    correctAnalysis:
      'Associação correta: (I) Firewall Stateful -> tabela de estado (E); (II) IDS -> passivo via SPAN/TAP (D); (III) IPS -> bloqueio ativo inline (A); (IV) Proxy -> intermediação de aplicação (B); (V) NAT -> tradução de endereços (C).',
    optionErrors: {
      0: 'Incorreta: inverte os papéis de IDS (passivo) e IPS (inline ativo).',
      2: 'Incorreta: inverte as definições de Firewall Stateful e Proxy.',
      3: 'Incorreta: inverte as definições de IPS e NAT.'
    }
  },
  {
    id: 'sarah-05',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Leia a descrição de dois incidentes de segurança a seguir:\n\n"O ataque de ________ insere registros forjados no cache de um resolvedor para desviar um domínio legítimo; já o ataque de ________ esgota a fila de conexões semiabertas TCP por requisições sem conclusão do handshake."\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    options: [
      'Port Scanning; Brute Force.',
      'Eavesdropping; Phishing.',
      'DNS Spoofing; SYN Flood.',
      'Brute Force; DNS Spoofing.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Tipos de ataques a redes (spoofing, DNS spoofing, flood, DoS, DDoS, eavesdropping, brute force, port scanning e phishing).',
    correctAnalysis:
      'Envenenar o cache de resolução de nomes corresponde ao DNS Spoofing (Cache Poisoning), enquanto inundar a fila TCP com pacotes SYN sem finalizar o 3-way handshake caracteriza SYN Flood.',
    optionErrors: {
      0: 'Incorreta: Port Scanning sonda portas abertas e Brute Force testa combinações exaustivas de senhas.',
      1: 'Incorreta: Eavesdropping é escuta passiva de tráfego e Phishing é engenharia social para enganar usuários.',
      3: 'Incorreta: Brute Force não envenena cache DNS e DNS Spoofing não esgota conexões semiabertas TCP.'
    }
  },
  {
    id: 'sarah-06',
    editalItemId: '2.2.9',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre túneis VPN IPsec operando atrás de roteadores com NAT (NAT-T), assinale a afirmação INCORRETA.',
    options: [
      'A negociação inicial IKE utiliza a porta UDP 500 entre os peers.',
      'Ao detectar NAT no caminho, o NAT-T encapsula ESP em UDP 4500.',
      'O protocolo AH (IP 51) atravessa NAT normalmente sem precisar NAT-T.',
      'O protocolo ESP corresponde ao número de protocolo IP 50.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. IKE, IPsec e NAT (Eixo 2. Segurança de rede). O AH autentica inclusive o cabeçalho IP externo; quando um roteador faz NAT alterando o IP de origem, o ICV do AH falha e os pacotes são descartados.',
    correctAnalysis:
      'A afirmação incorreta diz que AH atravessa NAT normalmente: como AH protege a integridade do cabeçalho IP externo, qualquer tradução NAT invalida sua assinatura e exige uso de ESP com NAT-T sobre UDP 4500.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a negociação IKE Phase 1 inicia por padrão na porta UDP 500.',
      1: 'Incorreta (afirmação verdadeira): RFC 3947 encapsula IKE/ESP sobre UDP 4500 quando há NAT.',
      3: 'Incorreta (afirmação verdadeira): ESP é protocolo IP 50 e AH é protocolo IP 51.'
    }
  },
  {
    id: 'sarah-2-04',
    editalItemId: '2.2.10',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre túneis IPsec (Phase 1 e Phase 2), considere as afirmativas a seguir:\n\nI. Na Phase 1 (IKE SA) autenticam-se os peers e cria-se o canal seguro de controle.\nII. Na Phase 2 (IPsec SA) negociam-se Traffic Selectors, algoritmos ESP/AH e opção PFS.\nIII. O anti-replay por sequência (32 bits ou 64 com ESN) e janela deslizante existe tanto no AH quanto no ESP.\nIV. Pre-Shared Key (PSK) e modo Main/Aggressive pertencem apenas à Phase 2.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Phase 1/Phase 2 e IPsec (Eixo 2. Segurança de rede). I, II e III são corretas (anti-replay existe tanto em AH RFC 4302 quanto em ESP RFC 4303); IV é falsa porque PSK e Main/Aggressive pertencem à Phase 1.',
    correctAnalysis:
      'Phase 1 autentica os gateways (PSK/certificados, Main/Aggressive); Phase 2 define Traffic Selectors, ESP/AH e PFS; e tanto AH quanto ESP implementam número de sequência anti-replay de 32 bits (ou 64 com ESN) com janela deslizante.',
    optionErrors: {
      0: 'Incorreta: inclui IV (PSK e Main/Aggressive pertencem à Phase 1, não Phase 2) e omite III.',
      2: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-2-05',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para publicar um servidor interno (10.50.10.20:8443) na DMZ por meio do IP público 200.10.10.5:443 no firewall, qual tipo de NAT aplica-se?',
    options: [
      'DNAT (Virtual IP / Port Forwarding) traduzindo destino e porta.',
      'SNAT/PAT Overload alterando somente o endereço IP de origem.',
      'Proxy ARP estático anunciando 10.50.10.20 na interface WAN.',
      'NAT 1:1 sem tradução de porta mantendo 443 no servidor DMZ.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. NAT (Eixo 2. Segurança de rede). Publicar serviço interno com redirecionamento de IP e porta de destino utiliza DNAT (Destination NAT / VIP).',
    correctAnalysis:
      'DNAT reescreve o endereço IP e a porta de destino nos pacotes entrantes destinados ao IP público 200.10.10.5:443, encaminhando-os para 10.50.10.20:8443 na DMZ.',
    optionErrors: {
      1: 'Incorreta: SNAT/PAT traduz endereços de origem na saída de estações internas para a Internet.',
      2: 'Incorreta: Proxy ARP não traduz IPs privados RFC 1918 nem redireciona portas TCP 443 -> 8443.',
      3: 'Incorreta: NAT 1:1 sem port forwarding manteria a porta 443 e não mapearia para a porta 8443.'
    }
  },
  {
    id: 'sarah-2-06',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um firewall top-down (first-match), a linha 1 permite "LAN -> WAN qualquer serviço" e a linha 2 bloqueia Telnet (23). O que ocorre?',
    options: [
      'Telnet é bloqueado porque regras Deny têm precedência automática.',
      'O firewall compara toda a lista e aplica a regra mais restritiva.',
      'Telnet é permitido porque a linha 1 casa primeiro (shadowed rule).',
      'O Implicit Deny final bloqueia tudo ignorando as regras acima.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. políticas (Eixo 2. Segurança de rede). Firewalls avaliam regras de cima para baixo na primeira correspondência; regras específicas devem vir antes das genéricas.',
    correctAnalysis:
      'Como a avaliação é sequencial first-match, a regra ampla na linha 1 dá match no tráfego Telnet e o libera imediatamente, tornando a regra da linha 2 sombreada (nunca alcançada).',
    optionErrors: {
      0: 'Incorreta: não existe precedência automática de Deny sobre Allow fora da ordem top-down.',
      1: 'Incorreta: o firewall para na primeira regra compatível e não compara todas as regras seguintes.',
      3: 'Incorreta: o Implicit Deny ao final só atua quando nenhuma regra anterior correspondeu ao pacote.'
    }
  },
  {
    id: 'sarah-2-07',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após failover em um cluster HA Ativo-Passivo de firewalls, todas as sessões SSH abertas caíram exigindo reconexão. Qual recurso faltava?',
    options: [
      'Envio de Gratuitous ARP (GARP) para atualizar MAC nos switches.',
      'Config Sync de políticas estáticas entre interfaces de gerência.',
      'Graceful Restart do protocolo OSPF nas interfaces de roteamento.',
      'State Sync (Session Pickup) replicando tabela de sessões no HA.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. HA (Eixo 2. Segurança de rede). Sem State Sync entre os membros do cluster HA, o nó passivo assume sem conhecer as sessões TCP/UDP estabelecidas e descarta os pacotes em andamento.',
    correctAnalysis:
      'Para failover transparente sem derrubar conexões TCP/VPN existentes, o nó ativo precisa replicar continuamente a Session Table (State Sync) ao nó standby via link de sincronização.',
    optionErrors: {
      0: 'Incorreta: sem GARP/Virtual MAC os usuários nem reconectariam ao novo nó ativo.',
      1: 'Incorreta: Config Sync sincroniza regras estáticas e objetos, não a tabela dinâmica de sessões TCP.',
      2: 'Incorreta: OSPF Graceful Restart preserva tabelas de rotas L3 entre roteadores, não estados stateful no firewall.'
    }
  },
  {
    id: 'sarah-2-08',
    editalItemId: '2.2.8',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre acesso remoto por SSL-VPN em firewalls, analise as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O Tunnel Mode cria interface virtual L3 no endpoint, permitindo tráfego como RDP e SSH.\n( ) O Split Tunneling envia apenas rotas corporativas pelo túnel, mantendo Internet pelo link local.\n( ) A SSL-VPN exige encapsulamento AH sobre UDP porta 500 sem uso de TLS.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'F – F – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. SSL-VPN (Eixo 2. Segurança de rede). Tunnel Mode cria interface L3 virtual (V), Split Tunneling direciona somente rotas internas pela VPN (V) e SSL-VPN opera sobre TLS (TCP 443), não AH/UDP 500 (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras (Tunnel Mode para L3 e Split Tunneling para economizar banda); a terceira é falsa porque AH/UDP 500 pertencem a IPsec/IKE, enquanto SSL-VPN usa TLS.',
    optionErrors: {
      1: 'Incorreta: Split Tunneling é verdadeiro e SSL-VPN não usa AH sobre UDP 500.',
      2: 'Incorreta: o Tunnel Mode efetivamente provê adaptador virtual L3 para RDP/SSH.',
      3: 'Incorreta: inverte todas as três valorações.'
    }
  },
  {
    id: 'sarah-2-09',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No tratamento de um incidente em servidor DMZ comunicando-se com IP C2, analise as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Isolar o host na rede (quarentena) contém a comunicação maliciosa preservando a RAM.\n( ) Desligar da tomada antes da triagem preserva conexões ativas e chaves em memória volátil.\n( ) Evidências voláteis e logs devem ser coletados antes da erradicação e reinstalação.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – F.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.3. Prevenção e tratamento de incidentes (Eixo 2). Contenção por isolamento de rede preserva RAM (V); desligar da energia destrói dados voláteis (F); coleta precede erradicação/reconstrução (V).',
    correctAnalysis:
      'A primeira e a terceira seguem a ordem correta de resposta a incidentes (conter na rede, coletar voláteis, erradicar e recuperar); a segunda é falsa porque desligar abruptamente apaga RAM e conexões abertas.',
    optionErrors: {
      0: 'Incorreta: isolar na rede preserva a RAM e desligar da tomada destrói dados voláteis.',
      1: 'Incorreta: desligar da tomada apaga toda a memória volátil e a terceira afirmativa é verdadeira.',
      3: 'Incorreta: a terceira afirmativa também é verdadeira (coletar evidências antes de limpar).'
    }
  },
  {
    id: 'sarah-2-10',
    editalItemId: '2.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Pacotes entram no firewall pelo Link B, mas a rota padrão de retorno sai apenas pelo Link A e o firewall os descarta. Qual a causa?',
    options: [
      'Erro nos seletores Phase 2 entre matriz e filial no túnel IPsec.',
      'Roteamento assimétrico bloqueado pelo Reverse Path Forwarding (RPF).',
      'Balanceamento ECMP por pacote ignorando persistência nas WANs.',
      'Falta de Proxy ARP habilitado na sub-rede interna atrás da DMZ.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. troubleshooting e logs (Eixo 2. Segurança de rede). RPF verifica se o pacote entra pela mesma interface usada pela tabela de roteamento para alcançar a origem; roteamento assimétrico dispara drop de RPF.',
    correctAnalysis:
      'Com RPF ativo, se o pacote chega pela interface WAN-B mas a rota para aquele IP aponta via WAN-A (roteamento assimétrico), o firewall interpreta como spoofing/fluxo inválido e descarta.',
    optionErrors: {
      0: 'Incorreta: o cenário descreve tráfego entrante via Link B com retorno via Link A, não erro de seletores Phase 2.',
      2: 'Incorreta: o erro decorre de uma única rota padrão ativa no Link A causando assimetria, não de ECMP.',
      3: 'Incorreta: Proxy ARP resolve ARP L2 na mesma sub-rede e não corrige roteamento assimétrico entre links WAN L3.'
    }
  },
  {
    id: 'sarah-2-11',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual técnica de NAT permite que toda uma sub-rede privada (10.50.20.0/24) acesse a Internet compartilhando um único IP público?',
    options: [
      'SNAT com PAT / Overload diferenciando sessões por porta de origem.',
      'DNAT estático mapeando apenas conexões entrantes da WAN para DMZ.',
      'NAT 1:1 puro reservando um IP público exclusivo para cada estação.',
      'IP Forwarding puro encaminhando IPs 10.x diretamente ao provedor.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. NAT (Eixo 2. Segurança de rede). PAT (Port Address Translation / SNAT Overload) multiplexa centenas de hosts privados atrás de um IP público usando portas de origem distintas.',
    correctAnalysis:
      'O SNAT com PAT (Overload) traduz os múltiplos endereços privados de origem para o IP público de saída do firewall, diferenciando cada fluxo simultâneo pelo número de porta TCP/UDP.',
    optionErrors: {
      1: 'Incorreta: DNAT atua no sentido entrante redirecionando o endereço/porta de destino para publicação de servidores.',
      2: 'Incorreta: NAT 1:1 exigiria centenas de IPs públicos distintos em vez de compartilhar um único IP.',
      3: 'Incorreta: endereços privados RFC 1918 (10.0.0.0/8) não são roteáveis na Internet pública sem tradução NAT.'
    }
  },
  {
    id: 'sarah-2-12',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre tipos de ataques em redes corporativas, todas as definições abaixo estão corretas, EXCETO:',
    options: [
      'Phishing explora engenharia social para capturar credenciais ou induzir cliques.',
      'Eavesdropping consiste em interceptação passiva de tráfego não criptografado.',
      'Port Scanning esgota a banda de um link inundando pacotes ICMP de múltiplos bots.',
      'Brute Force testa exaustivamente combinações de credenciais até obter sucesso.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Tipos de ataques a redes (Eixo 2). Port Scanning mapeia portas e serviços abertos em um alvo; esgotar banda via múltiplos bots caracteriza ataque DDoS/Flood.',
    correctAnalysis:
      'A exceção define DDoS/Flood como se fosse Port Scanning: a varredura de portas apenas identifica portas TCP/UDP abertas ou filtradas.',
    optionErrors: {
      0: 'Incorreta (definição verdadeira): Phishing utiliza engano/engenharia social por e-mail ou sites falsos.',
      1: 'Incorreta (definição verdadeira): Eavesdropping é a escuta passiva de comunicações em trânsito.',
      3: 'Incorreta (definição verdadeira): ataques de força bruta tentam combinações sucessivas de senhas ou chaves.'
    }
  },

  // ==================== EIXO 3: 3. WINDOWS/ACTIVE DIRECTORY. (12 questões) ====================
  {
    id: 'sarah-07',
    editalItemId: '3.2.7',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os cinco papéis FSMO do Active Directory, relacione cada função à esquerda com sua atribuição à direita.\n\nColuna da Esquerda:\n(I) Schema Master\n(II) Domain Naming Master\n(III) PDC Emulator\n(IV) RID Master\n(V) Infrastructure Master\n\nColuna da Direita:\n(A) Aloca blocos de identificadores relativos aos DCs do domínio.\n(B) Controla adição e remoção de domínios na floresta AD.\n(C) Atualiza referências de objetos entre domínios em multi-domínio.\n(D) Controla modificações na estrutura de classes e atributos da floresta.\n(E) Centraliza sincronismo de hora (NTP) e validação prioritária de senhas.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-B, II-D, III-E, IV-A, V-C.',
      'I-D, II-B, III-A, IV-E, V-C.',
      'I-D, II-B, III-E, IV-A, V-C.',
      'I-D, II-E, III-B, IV-C, V-A.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. FSMO (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Floresta: Schema (D) e Domain Naming (B); Domínio: PDC Emulator (E), RID Master (A) e Infrastructure Master (C).',
    correctAnalysis:
      'Schema Master (D) e Domain Naming Master (B) têm escopo de Floresta; PDC Emulator (E), RID Master (A) e Infrastructure Master (C) têm escopo de Domínio.',
    optionErrors: {
      0: 'Incorreta: inverte Schema Master e Domain Naming Master.',
      1: 'Incorreta: inverte PDC Emulator e RID Master.',
      3: 'Incorreta: confunde Domain Naming, PDC Emulator, RID e Infrastructure Master.'
    }
  },
  {
    id: 'sarah-08',
    editalItemId: '3.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma estação teve o relógio adiantado em 18 minutos e parou de acessar compartilhamentos SMB no domínio AD. Qual protocolo bloqueou?',
    options: [
      'Kerberos (porta 88), cuja tolerância padrão de relógio é 5 minutos.',
      'LDAP (porta 389), que rejeita consultas DN após TTL de 5 minutos.',
      'NTLM (porta 445), cujo desafio nonce exige sincronismo de 5 minutos.',
      'WinRM (porta 5985), que bloqueia SMB quando há desvio no horário.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Kerberos (Eixo 3. WINDOWS/ACTIVE DIRECTORY). O Kerberos (TCP/UDP 88) inclui timestamps nos tickets/autenticadores com tolerância padrão de 5 minutos.',
    correctAnalysis:
      'O Kerberos utiliza carimbos de data/hora criptografados para evitar ataques de repetição (replay), rejeitando tickets quando a diferença de relógio excede a política máxima (padrão 5 minutos).',
    optionErrors: {
      1: 'Incorreta: o erro de 18 minutos de clock skew bloqueia a autenticação Kerberos (88), não a sintaxe DN do LDAP.',
      2: 'Incorreta: NTLM usa desafio-resposta nonce do servidor sem dependência estrita de 5 minutos como o Kerberos.',
      3: 'Incorreta: acesso a compartilhamento SMB de domínio usa Kerberos, não WinRM.'
    }
  },
  {
    id: 'sarah-09',
    editalItemId: '3.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na precedência padrão de GPOs (LSDOU), sem Enforced ou Block Inheritance, havendo conflito entre GPO de Domínio e de OU, qual vence?',
    options: [
      'Prevalece a GPO do Domínio por ter escopo hierárquico mais amplo.',
      'Prevalece a GPO Local configurada na estação antes das de rede.',
      'As duas configurações em conflito se anulam mutuamente no cliente.',
      'Prevalece a GPO da OU (ordem Local, Site, Domínio e OU).'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. GPO e troubleshooting (Eixo 3. WINDOWS/ACTIVE DIRECTORY). A ordem LSDOU faz com que a política aplicada por último (OU) sobrescreva Domínio, Site e Local.',
    correctAnalysis:
      'Na precedência padrão LSDOU (Local -> Site -> Domínio -> OU), a política aplicada por último (Unidade Organizacional) prevalece em caso de conflito direto.',
    optionErrors: {
      0: 'Incorreta: a GPO de Domínio é aplicada antes da OU e acaba sobrescrita pela da OU em conflitos.',
      1: 'Incorreta: a GPO Local é a primeira da ordem (menor precedência na tabela LSDOU).',
      2: 'Incorreta: conflitos de GPO resolvem-se sempre pela ordem LSDOU, nunca por anulação.'
    }
  },
  {
    id: 'sarah-3-04',
    editalItemId: '3.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre gestão de processos, memória e E/S em sistemas operacionais, considere as afirmativas:\n\nI. Threads de um mesmo processo compartilham código e espaço de memória, mantendo pilha própria.\nII. Thrashing ocorre quando falta RAM e há paginação excessiva em disco, degradando o desempenho.\nIII. O DMA permite transferências diretas entre dispositivos de E/S e RAM sem CPU a cada byte.\nIV. A troca de contexto entre threads do mesmo processo é sempre mais lenta que entre processos distintos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Sistemas operacionais (gestão de processos, de memória e de entrada e saída) (Eixo 3). I, II e III são corretas; IV é falsa porque threads compartilham tabelas de páginas, tornando o switch muito mais rápido.',
    correctAnalysis:
      'Threads compartilham espaço de memória (I), thrashing decorre de paginação excessiva por falta de RAM (II) e DMA libera a CPU de transferir palavra por palavra (III); já o context switch entre threads é mais leve (IV falsa).',
    optionErrors: {
      0: 'Incorreta: inclui IV (context switch entre threads do mesmo processo é mais rápido) e omite III.',
      2: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-3-05',
    editalItemId: '3.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Estações falham ao ingressar no domínio AD por erro ao localizar o DC, embora o ping ao IP funcione. Quais registros DNS checar?',
    options: [
      'Registros A e PTR na zona reversa in-addr.arpa do DHCP.',
      'Registros CNAME e MX na subzona ForestDnsZones do domínio.',
      'Registros SRV (_ldap._tcp e _kerberos._tcp) na subzona _msdcs.',
      'Registros NS e SOA na zona raiz externa pública do provedor.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. DNS e Active Directory (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Estações localizam DCs e KDCs consultando registros SRV em _msdcs.<domínio>.',
    correctAnalysis:
      'O ingresso e o logon no domínio dependem dos registros SRV (_ldap._tcp, _kerberos._tcp) publicados pelo serviço Netlogon no DNS interno sob _msdcs.',
    optionErrors: {
      0: 'Incorreta: resolução reversa PTR não publica localização dos serviços LDAP/Kerberos dos DCs.',
      1: 'Incorreta: registros MX tratam de e-mail e descoberta de DCs usa registros SRV em _msdcs.',
      3: 'Incorreta: descoberta interna de DCs depende da zona DNS corporativa e da subzona _msdcs.'
    }
  },
  {
    id: 'sarah-3-06',
    editalItemId: '3.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre a replicação do Active Directory, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A replicação intrasite ocorre por notificações rápidas e sem compressão de tráfego.\n( ) A replicação intersite utiliza Site Links com agendamento e compressão para poupar WAN.\n( ) O comando repadmin /replsummary compacta offline o arquivo NTDS.dit após parar o NTDS.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'F – F – V.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. replicação e troubleshooting (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Intrasite = rápida sem compressão (V); Intersite = agendada com compressão (V); repadmin /replsummary verifica saúde da replicação e não compacta NTDS.dit (F).',
    correctAnalysis:
      'Intrasite prioriza latência (sem compressão, notificação rápida) e intersite prioriza economia de WAN (compressão e agendamento); repadmin /replsummary exibe resumo da saúde da replicação (compactação offline usa ntdsutil).',
    optionErrors: {
      0: 'Incorreta: replicação intersite usa sim compressão/agendamento, e repadmin não compacta NTDS.dit.',
      1: 'Incorreta: replicação intrasite ocorre sem compressão e por notificação rápida.',
      2: 'Incorreta: ambas as afirmativas sobre intrasite e intersite são verdadeiras, e a terceira é falsa.'
    }
  },
  {
    id: 'sarah-3-07',
    editalItemId: '3.2.9',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre portas padrão do protocolo LDAP no Active Directory, assinale a afirmação INCORRETA.',
    options: [
      'LDAPS e Global Catalog sobre TLS utilizam TCP 389 e TCP 3268.',
      'LDAP padrão sem TLS implícito utiliza a porta TCP 389.',
      'LDAPS (LDAP sobre SSL/TLS) utiliza a porta TCP 636.',
      'Global Catalog sobre SSL/TLS utiliza a porta TCP 3269.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. LDAP (Eixo 3. WINDOWS/ACTIVE DIRECTORY). LDAP = 389, LDAPS = 636, GC = 3268, GC sobre TLS = 3269.',
    correctAnalysis:
      'A afirmação incorreta troca as portas seguras pelas portas sem criptografia: LDAPS usa TCP 636 (não 389) e Global Catalog seguro usa TCP 3269 (não 3268).',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): TCP 389 é a porta padrão do LDAP sem TLS implícito.',
      2: 'Incorreta (afirmação verdadeira): TCP 636 é a porta padrão do LDAPS.',
      3: 'Incorreta (afirmação verdadeira): TCP 3269 é a porta do Global Catalog sobre SSL/TLS.'
    }
  },
  {
    id: 'sarah-3-08',
    editalItemId: '3.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um novo servidor DHCP Windows no domínio AD teve escopos criados, mas aparece parado com ícone vermelho. Qual passo administrativo falta?',
    options: [
      'Adicionar o computador ao grupo local DHCP Users.',
      'Autorizar o servidor DHCP no Active Directory (Enterprise Admins).',
      'Transferir o papel PDC Emulator para o servidor DHCP.',
      'Ativar DHCP Relay (ip helper-address) na placa do próprio DHCP.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. DHCP (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Servidores DHCP membros de domínio exigem autorização explícita no AD (Enterprise Admins) antes de iniciar a entrega de IPs.',
    correctAnalysis:
      'Para evitar servidores DHCP não autorizados na rede corporativa, o Windows Server integrado ao AD exige autorização do servidor no diretório antes de ativar os escopos.',
    optionErrors: {
      0: 'Incorreta: grupos locais controlam console/leitura local, mas não autorizam o serviço no Active Directory.',
      2: 'Incorreta: PDC Emulator é papel FSMO de domínio sem vínculo com autorização DHCP.',
      3: 'Incorreta: DHCP Relay roda em roteadores/switches de sub-redes remotas, não no servidor DHCP.'
    }
  },
  {
    id: 'sarah-3-09',
    editalItemId: '3.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual comando PowerShell filtra usuários habilitados no próprio Controlador de Domínio ("filter left") antes de retornar objetos pela rede?',
    options: [
      'Get-ADUser -Filter * | Where-Object {$_.Enabled -eq $true}',
      'Get-ADObject -Filter * | Where-Object {$_.ObjectClass -eq "user"}',
      'Get-ADUser -LDAPFilter "(objectClass=group)" | Select Name',
      'Get-ADUser -Filter {Enabled -eq $true} | Select SamAccountName'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. PowerShell (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Usar -Filter {Enabled -eq $true} delega a filtragem ao próprio DC antes de trafegar milhares de objetos pela rede.',
    correctAnalysis:
      'Passar o filtro diretamente no parâmetro -Filter de Get-ADUser faz o Controlador de Domínio retornar apenas os usuários habilitados, evitando trafegar toda a base para filtrar depois.',
    optionErrors: {
      0: 'Incorreta: -Filter * traz TODOS os usuários do domínio pela rede para só depois filtrar localmente.',
      1: 'Incorreta: Get-ADObject -Filter * traz todo o diretório pela rede e nem filtra contas habilitadas.',
      2: 'Incorreta: filtrar por objectClass=group não retorna usuários habilitados.'
    }
  },
  {
    id: 'sarah-3-10',
    editalItemId: '3.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual utilitário nativo executa bateria completa de testes de conectividade, DNS, SYSVOL e serviços em um Controlador de Domínio AD?',
    options: [
      'dcdiag (Domain Controller Diagnostics).',
      'gpupdate /force (Group Policy Update).',
      'repadmin /showrepl (Replication Status).',
      'wbadmin start systemstatebackup (Backup).'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting (Eixo 3. WINDOWS/ACTIVE DIRECTORY). O utilitário dcdiag analisa saúde geral do DC: DNS, Netlogon, SYSVOL, conectividade, FSMO e serviços essenciais.',
    correctAnalysis:
      'dcdiag executa dezenas de testes automatizados (Connectivity, Advertising, NetLogons, SysVolCheck, KnowsOfRoleHolders) especificamente para diagnosticar Controladores de Domínio.',
    optionErrors: {
      1: 'Incorreta: gpupdate /force apenas força atualização de GPOs em estações e servidores.',
      2: 'Incorreta: repadmin /showrepl verifica somente o estado das partições replicadas entre DCs.',
      3: 'Incorreta: wbadmin executa backup do System State, não diagnóstico de serviços AD/DNS.'
    }
  },
  {
    id: 'sarah-3-11',
    editalItemId: '3.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre alta disponibilidade de DHCP e atualização de políticas no Windows Server, assinale a afirmação INCORRETA.',
    options: [
      'O DHCP Failover nativo do Windows Server sincroniza leases entre parceiros pela porta TCP 647.',
      'O modo Hot Standby do DHCP Failover mantém um servidor ativo e outro de reserva para contingência.',
      'Configurar Windows NLB unicast é o método nativo para sincronizar tabelas de leases DHCP em AD.',
      'O comando gpupdate /force reaplica todas as GPOs no cliente mesmo sem alteração de versão.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. DHCP e GPO (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Redundância DHCP usa DHCP Failover (TCP 647) em modo Load Balance ou Hot Standby; Windows NLB atende serviços HTTP/stateless e não replica leases DHCP.',
    correctAnalysis:
      'A afirmação incorreta aponta Windows NLB como sincronizador nativo de leases DHCP: apenas o recurso DHCP Failover (TCP 647) replica concessões entre dois servidores DHCP Windows.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a comunicação de sincronização do DHCP Failover usa a porta TCP 647.',
      1: 'Incorreta (afirmação verdadeira): DHCP Failover suporta modos Load Balance e Hot Standby.',
      3: 'Incorreta (afirmação verdadeira): gpupdate /force força reaplicação integral das políticas locais e de domínio.'
    }
  },
  {
    id: 'sarah-3-12',
    editalItemId: '3.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre o posicionamento dos papéis FSMO no Active Directory, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em ambiente multi-domínio onde nem todos os DCs são Global Catalog, o Infrastructure Master NÃO deve ficar em um DC Global Catalog.\n( ) O Schema Master e o Domain Naming Master existem em número de apenas um por floresta AD.\n( ) Cada domínio da floresta exige um Schema Master próprio separado para alterações locais de classe.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – F.',
      'V – F – F.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. FSMO (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Infrastructure Master não deve coexistir com GC em multi-domínio parcial (V); Schema e Domain Naming são únicos na floresta (V); logo não há Schema Master por domínio (F).',
    correctAnalysis:
      'Se o Infrastructure Master rodar em um Global Catalog (em floresta multi-domínio com DCs não-GC), ele considera ter todas as referências e deixa de atualizar objetos cross-domain. Schema Master é único em toda a floresta.',
    optionErrors: {
      0: 'Incorreta: a regra de separação Infrastructure Master vs Global Catalog é verdadeira e há apenas um Schema Master por floresta.',
      2: 'Incorreta: Schema Master e Domain Naming Master são realmente únicos por floresta.',
      3: 'Incorreta: a primeira afirmativa é verdadeira segundo a recomendação oficial da Microsoft.'
    }
  },

  // ==================== EIXO 4: 4. Correio eletrônico. (12 questões) ====================
  {
    id: 'sarah-10',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os mecanismos de proteção de e-mail SPF, DKIM e DMARC, considere as afirmativas a seguir:\n\nI. O SPF lista em registro TXT no DNS os servidores/IPs autorizados a enviar pelo domínio.\nII. O DKIM aplica assinatura criptográfica verificada por chave pública publicada no DNS.\nIII. O DMARC exige alinhamento do cabeçalho "From:" com SPF ou DKIM e define política/relatórios.\nIV. O DMARC substitui completamente os registros SPF e DKIM, tornando-os obsoletos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2. Mecanismos de proteção de e-mail (SPF, DKIM, DMARC e antispam). I, II e III descrevem corretamente SPF, DKIM e DMARC; IV é falsa porque o DMARC depende diretamente de SPF e/ou DKIM.',
    correctAnalysis:
      'SPF autoriza IPs remetentes em TXT (I), DKIM assina a mensagem com chave privada verificável no DNS (II) e DMARC impõe alinhamento e política/relatórios (III); já IV é falsa porque DMARC não substitui SPF/DKIM.',
    optionErrors: {
      0: 'Incorreta: inclui IV (DMARC depende de SPF/DKIM) e omite III.',
      1: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      2: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-11',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre arquitetura e protocolos de correio eletrônico, relacione os itens à esquerda com suas funções à direita.\n\nColuna da Esquerda:\n(I) SMTP (porta 25)\n(II) SMTP Submission (porta 587)\n(III) IMAP (portas 143/993)\n(IV) POP3 (portas 110/995)\n(V) Registro DNS MX\n\nColuna da Direita:\n(A) Submissão autenticada de mensagens do cliente (MUA) ao servidor (MSA).\n(B) Acesso e sincronização de múltiplas pastas mantendo mensagens no servidor.\n(C) Transporte de mensagens entre servidores de correio (MTAs).\n(D) Indica os servidores de correio responsáveis por receber e-mails do domínio.\n(E) Acesso simples voltado ao download de mensagens da caixa para o cliente.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-A, II-C, III-E, IV-B, V-D.',
      'I-C, II-A, III-E, IV-B, V-D.',
      'I-C, II-A, III-B, IV-E, V-D.',
      'I-D, II-A, III-B, IV-E, V-C.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1. Arquitetura e protocolos de correio eletrônico (SMTP, POP3, IMAP e registros MX).',
    correctAnalysis:
      'SMTP 25 (C) interliga MTAs; SMTP 587 (A) atende submissão de clientes; IMAP (B) sincroniza pastas no servidor; POP3 (E) baixa mensagens; MX (D) roteia domínios de e-mail.',
    optionErrors: {
      0: 'Incorreta: inverte SMTP 25 vs 587 e também IMAP vs POP3.',
      1: 'Incorreta: inverte as definições de IMAP e POP3.',
      3: 'Incorreta: inverte SMTP 25 e registro DNS MX.'
    }
  },
  {
    id: 'sarah-12',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um DAG do Exchange Server com número par de membros Mailbox, qual componente assegura quórum evitando split-brain?',
    options: [
      'Send Connector configurado na camada de transporte.',
      'Witness Server (File Share Witness) garantindo maioria de votos.',
      'Edge Transport Server instalado na sub-rede externa DMZ.',
      'Lagged Copy com atraso de replicação no banco de dados.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Microsoft Exchange Server e DAG (Eixo 4. Correio eletrônico). DAG com número par de servidores Mailbox utiliza um Witness Server para obter voto de desempate e evitar split-brain.',
    correctAnalysis:
      'O Witness Server fornece o voto adicional ao cluster subjacente (Failover Clustering) quando o número de nós Mailbox no DAG é par, garantindo maioria clara em falhas de enlace.',
    optionErrors: {
      0: 'Incorreta: Send Connector roteia envio SMTP de saída e não participa do quórum de cluster.',
      2: 'Incorreta: Edge Transport atua como relay/antispam na DMZ, não como árbitro de quórum do DAG.',
      3: 'Incorreta: Lagged Copy retarda o replay de logs contra corrupção lógica, não provê quórum.'
    }
  },
  {
    id: 'sarah-4-04',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após configurar um conector no Exchange para impressora interna, spammers externos abusaram do servidor levando a bloqueio em RBLs. O que causou?',
    options: [
      'Receive Connector com relay anônimo externo sem restrição de IP.',
      'Send Connector vinculado ao certificado SAN roteando via DNS MX.',
      'Receive Connector padrão exigindo TLS e autenticação de usuários.',
      'Registro MX com prioridade 10 e registro SPF restritivo "-all".'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. SMTP relay, antispam, conectores (Eixo 4. Correio eletrônico). Permitir relay anônimo irrestrito transforma o servidor em Open Relay, causando bloqueio rápido em RBLs.',
    correctAnalysis:
      'Conceder relay externo anônimo sem restringir estritamente o IP autorizado (ou exigir autenticação + TLS) cria um Open Relay explorado por spammers.',
    optionErrors: {
      1: 'Incorreta: vincular certificado SAN e rotear por MX garante TLS de saída sem abrir retransmissão anônima.',
      2: 'Incorreta: exigir autenticação TLS protege o conector contra abuso externo.',
      3: 'Incorreta: prioridade MX 10 e SPF restritivo "-all" são boas práticas que não geram Open Relay.'
    }
  },
  {
    id: 'sarah-4-05',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No Exchange Server, avalie as afirmativas sobre conectores e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Receive Connectors atuam por servidor controlando IPs, portas e autenticação nas conexões SMTP entrantes.\n( ) Send Connectors têm escopo organizacional controlando saída SMTP via DNS MX ou Smart Host.\n( ) Ambos operam exclusivamente na porta IMAP 993 substituindo os arquivos de banco .EDB.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'F – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. conectores (Eixo 4. Correio eletrônico). Receive = entrada por servidor (V); Send = saída com escopo de organização (V); conectores usam SMTP, não IMAP 993, e não substituem bancos .EDB (F).',
    correctAnalysis:
      'Receive Connectors atuam por servidor na entrada SMTP e Send Connectors atuam na organização para saída SMTP; ambos nada têm a ver com IMAP 993 nem substituem bancos .EDB.',
    optionErrors: {
      0: 'Incorreta: Send Connector controla sim o envio de saída via MX/Smart Host, e não operam em IMAP 993.',
      2: 'Incorreta: Receive Connector controla de fato as conexões SMTP entrantes por servidor.',
      3: 'Incorreta: as duas primeiras afirmativas são verdadeiras.'
    }
  },
  {
    id: 'sarah-4-06',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No Queue Viewer do Exchange, qual é a diferença entre mensagens paradas na Delivery Queue e na Poison Message Queue?',
    options: [
      'Poison Queue reenvia automaticamente mensagens a cada 5 minutos.',
      'Delivery Queue retém mensagens antes da categorização inicial.',
      'Poison Queue retém falhas 4xx; Unreachable bloqueia anexos no EDB.',
      'Delivery faz retentativas 4xx; Poison isola mensagens que derrubaram o serviço.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. filas (Eixo 4. Correio eletrônico). Delivery Queue gerencia envios por destino com retry automático; Poison Queue isola mensagens nocivas que derrubaram o worker de transporte.',
    correctAnalysis:
      'Mensagens na Delivery Queue passam por ciclos de retentativa e backoff automático; já a Poison Message Queue isola mensagens que causaram crash no transporte para impedir loops de queda.',
    optionErrors: {
      0: 'Incorreta: mensagens na Poison Queue ficam suspensas intencionalmente para inspeção manual.',
      1: 'Incorreta: a fila que recebe mensagens antes da categorização é a Submission Queue.',
      2: 'Incorreta: erros temporários 4xx ficam na Delivery Queue; Unreachable trata destinos sem rota.'
    }
  },
  {
    id: 'sarah-4-07',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após queda de energia no Exchange standalone, "eseutil /mh" exibiu estado "Dirty Shutdown". O que isso indica?',
    options: [
      'O banco já está íntegro permitindo apagar todos os logs .log.',
      'Falha exclusiva do diretório /owa no IIS sem impacto no .EDB.',
      'Há logs de transação pendentes ainda não gravados no arquivo .EDB.',
      'Corrupção irreversível exigindo obrigatoriamente backup Full em fita.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. databases (Eixo 4. Correio eletrônico). Dirty Shutdown indica que transações registradas nos arquivos .log ainda não foram consolidadas no arquivo .EDB, exigindo soft recovery (eseutil /r) se os logs estiverem íntegros.',
    correctAnalysis:
      'Quando o servidor cai abruptamente antes do checkpoint, transações ficam apenas nos arquivos de log: eseutil /mh reporta Dirty Shutdown e o soft recovery (eseutil /r) aplica esses logs ao .EDB.',
    optionErrors: {
      0: 'Incorreta: apagar logs em estado Dirty Shutdown torna o banco inconsistente e impede a montagem limpa.',
      1: 'Incorreta: eseutil /mh inspeciona o cabeçalho do banco de caixas postais .EDB, não diretórios virtuais do IIS.',
      3: 'Incorreta: se os transaction logs necessários estiverem intactos, soft recovery (eseutil /r) recupera sem perda.'
    }
  },
  {
    id: 'sarah-4-08',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após migração do Exchange, clientes Outlook falham na consulta Free/Busy e na autoconfiguração de perfil. O que auditar?',
    options: [
      'Protocolo POP3 na porta 995 e registro PTR reverso externo.',
      'EWS, Autodiscover (SCP no AD e DNS) e nomes SAN no certificado.',
      'MAPI over HTTP sem SCP e Send Connector SMTP na porta 25.',
      'ActiveSync na porta 443 com certificado autoassinado por IP.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. EWS, OWA e certificados (Eixo 4. Correio eletrônico). Free/Busy, OAB e provisionamento automático dependem de Autodiscover, EWS e certificado SAN válido.',
    correctAnalysis:
      'O cliente consulta o Autodiscover (via SCP no AD internamente ou DNS externamente) para obter a URL do EWS (que serve Free/Busy e OOF), exigindo certificado TLS contendo os FQDNs no campo SAN.',
    optionErrors: {
      0: 'Incorreta: POP3 apenas baixa e-mails da caixa de entrada e não fornece Free/Busy nem autoconfiguração.',
      2: 'Incorreta: sem SCP/Autodiscover o cliente não descobre endpoints automáticos.',
      3: 'Incorreta: ActiveSync atende dispositivos móveis e certificados por IP falham na validação do Outlook.'
    }
  },
  {
    id: 'sarah-4-09',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre códigos SMTP e mecanismos antispam na filtragem de mensagens, assinale a opção INCORRETA.',
    options: [
      'Códigos 4xx ordenam descarte imediato permanente sem retentativa.',
      'Greylisting devolve erro 4xx inicial para testar retentativas em fila.',
      'Listas RBL/DNSBL consultam reputação de IP em tempo real no SMTP.',
      'Códigos da família 5xx (como 550) indicam falha permanente (hard bounce).'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. antispam (Eixo 4. Correio eletrônico). Códigos 4xx indicam erro temporário e instruem o MTA emissor a manter a mensagem em fila para retentativa posterior.',
    correctAnalysis:
      'A afirmação incorreta confunde códigos 4xx com 5xx: códigos 4xx sinalizam erro transitório (soft fail) para nova tentativa em fila, não descarte permanente imediato.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): é exatamente esse o princípio do Greylisting conforme a RFC SMTP.',
      2: 'Incorreta (afirmação verdadeira): RBLs/DNSBLs bloqueiam ou pontuam conexões de IPs com má reputação.',
      3: 'Incorreta (afirmação verdadeira): códigos 5xx representam erro permanente e 4xx erro temporário.'
    }
  },
  {
    id: 'sarah-4-10',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao analisar cabeçalhos de um e-mail suspeito, em que ordem ler as linhas "Received:" e onde checar o resultado SPF/DKIM?',
    options: [
      'De baixo para cima (origem ao destino) e campo "Authentication-Results:".',
      'De cima para baixo (primeira linha é a origem) e campo "To:".',
      'Apenas pelo campo visível "From:" em conjunto com "Return-Path:".',
      'Pelo campo "Subject:" em conjunto com o cabeçalho "Reply-To:".'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting e Item 1.2. SPF/DKIM/DMARC (Eixo 4. Correio eletrônico). Cada MTA adiciona seu Received no TOPO; logo, a origem fica embaixo e Authentication-Results traz o veredito SPF/DKIM/DMARC.',
    correctAnalysis:
      'Como cada MTA ao longo do caminho insere seu cabeçalho "Received:" no topo da mensagem, a trajetória cronológica lê-se de baixo para cima, conferindo SPF/DKIM/DMARC em "Authentication-Results:".',
    optionErrors: {
      1: 'Incorreta: o primeiro cabeçalho "Received:" no topo é inserido pelo último servidor receptor, não pela origem.',
      2: 'Incorreta: o campo "From:" isolado pode ser forjado em phishing sem checar Authentication-Results.',
      3: 'Incorreta: assunto e Reply-To são controlados pelo remetente e não comprovam trilha nem validação SPF/DKIM.'
    }
  },
  {
    id: 'sarah-4-11',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre ferramentas de rastreamento de mensagens e diagnóstico no Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'O Message Tracking (Get-MessageTrackingLog) registra eventos RECEIVE, SEND e FAIL.',
      'O Queue Viewer permite inspecionar filas Delivery, Submission e Poison Message.',
      'O cmdlet Get-MessageTrackingLog só funciona com todos os bancos .EDB desmontados.',
      'A ferramenta Test-Mailflow valida o envio e recebimento ponta a ponta no servidor.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Microsoft Exchange Server e troubleshooting (Eixo 4). O Message Tracking lê arquivos de log do serviço de transporte em produção, nunca exigindo desmontar bancos .EDB.',
    correctAnalysis:
      'A afirmação incorreta condiciona Get-MessageTrackingLog à desmontagem de bancos: os logs de rastreamento de transporte são consultados online sem interromper o serviço de caixas postais.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Get-MessageTrackingLog audita eventos de recebimento, entrega, envio e falhas.',
      1: 'Incorreta (afirmação verdadeira): Queue Viewer exibe todas as filas de transporte ativas no Exchange.',
      3: 'Incorreta (afirmação verdadeira): Test-Mailflow verifica fluxo de entrega de correio entre caixas de teste.'
    }
  },
  {
    id: 'sarah-4-12',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre logs de transação e Circular Logging no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Com Circular Logging desabilitado, backups completos/incrementais via VSS truncam logs já gravados no .EDB.\n( ) Ativar Circular Logging libera backups incrementais e recuperação point-in-time sem cadeia de logs.\n( ) Circular Logging sobrescreve logs antigos após checkpoint, reduzindo consumo de disco.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. databases e backup no Exchange (Eixo 4). Backups VSS truncam logs com Circular Logging desligado (V); Circular Logging impede incrementais/point-in-time justamente por sobrescrever logs antigos (F e V).',
    correctAnalysis:
      'Sem Circular Logging, a cadeia contínua de logs permite backups incrementais e restauração point-in-time até o truncamento pelo VSS; ativá-lo sobrescreve logs economizando disco, porém inviabiliza incrementais.',
    optionErrors: {
      0: 'Incorreta: Circular Logging inviabiliza incrementais e point-in-time (segunda falsa) e poupa disco (terceira verdadeira).',
      1: 'Incorreta: backups VSS truncam sim logs antigos quando Circular Logging está desativado.',
      2: 'Incorreta: a terceira afirmativa também é verdadeira (sobrescrita cíclica economiza disco).'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 1 (+12) ====================
  {
    id: 'sarah-1-13',
    editalItemId: '1.1.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Quando um roteador possui múltiplas rotas válidas que casam com o IP de destino, qual critério decide qual rota será usada no encaminhamento?',
    options: [
      'Prefixo mais específico (longest prefix match), independentemente do protocolo.',
      'Menor distância administrativa entre todas as rotas da tabela de roteamento.',
      'Menor métrica numérica convertida entre protocolos diferentes na tabela.',
      'Ordem cronológica de inserção da rota após a inicialização do equipamento.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4. Noções de roteamento e comutação (Eixo 1. Redes). Na seleção de rota para encaminhamento (FIB), o roteador sempre escolhe o prefixo mais específico (máscara maior, ex.: /28 antes de /24); a distância administrativa só desempata rotas para o mesmo prefixo exato.',
    correctAnalysis:
      'O encaminhamento IP utiliza Longest Prefix Match: entre /16, /24 e /26 que contenham o destino, vence o /26, independentemente de ser rota estática ou dinâmica.',
    optionErrors: {
      1: 'Incorreta: a distância administrativa seleciona a melhor fonte apenas para prefixos idênticos antes de instalar na tabela.',
      2: 'Incorreta: métricas de protocolos distintos (como saltos e custo OSPF) não são comparáveis diretamente.',
      3: 'Incorreta: o roteador não encaminha pacotes por ordem de chegada da entrada na tabela.'
    }
  },
  {
    id: 'sarah-1-14',
    editalItemId: '1.1.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre roteamento e comutação em redes IP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Switches camada 2 encaminham quadros consultando o endereço MAC de destino na tabela CAM.\n( ) A distância administrativa padrão do OSPF (110) tem preferência sobre rota estática (1).\n( ) Roteadores preservam os endereços IP de origem e destino originais ao cruzar saltos sem NAT.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – V.',
      'V – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.4. Noções de roteamento e comutação (Eixo 1. Redes). Switches L2 usam MAC na CAM (V); menor distância administrativa vence, logo rota estática (1) prefere OSPF (110) (F); roteadores trocam MAC a cada salto mas mantêm IPs fim a fim sem NAT (V).',
    correctAnalysis:
      'A primeira e a terceira afirmativas estão corretas; a segunda é falsa porque quanto menor a distância administrativa, maior a prioridade da rota (estática = 1 < eBGP = 20 < OSPF = 110).',
    optionErrors: {
      0: 'Incorreta: OSPF (110) não tem preferência sobre rota estática (1).',
      2: 'Incorreta: switches camada 2 decidem encaminhamento pelo MAC na tabela CAM.',
      3: 'Incorreta: sem NAT, os cabeçalhos IP de origem e destino permanecem inalterados entre saltos.'
    }
  },
  {
    id: 'sarah-1-15',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual sequência exata de flags TCP estabelece uma sessão confiável no three-way handshake?',
    options: [
      'SYN, depois ACK, depois FIN.',
      'ACK, depois SYN, depois PSH.',
      'SYN, depois SYN-ACK, depois ACK.',
      'SYN, depois RST-ACK, depois ACK.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. TCP/IP (Eixo 1. Redes). O cliente inicia enviando SYN; o servidor responde com SYN-ACK confirmando e sincronizando seu número de sequência; o cliente conclui com ACK.',
    correctAnalysis:
      'O estabelecimento de conexão TCP ocorre em três etapas: SYN (cliente -> servidor), SYN-ACK (servidor -> cliente) e ACK (cliente -> servidor).',
    optionErrors: {
      0: 'Incorreta: FIN encerra a conexão TCP graciosamente ao término da sessão.',
      1: 'Incorreta: a sessão nunca se inicia com ACK isolado antes da troca de SYN.',
      3: 'Incorreta: RST-ACK aborta/recusa a tentativa de conexão imediatamente.'
    }
  },
  {
    id: 'sarah-1-16',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os protocolos TCP e UDP na arquitetura TCP/IP, assinale a afirmação INCORRETA.',
    options: [
      'O TCP realiza controle de fluxo por janela deslizante e retransmissão de pacotes perdidos.',
      'O cabeçalho UDP possui tamanho fixo de 8 bytes e não estabelece sessão prévia.',
      'O TCP garante entrega ordenada de bytes identificando segmentos por números de sequência.',
      'O UDP garante entrega ordenada sem perdas usando three-way handshake antes do envio.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. TCP/IP (Eixo 1. Redes). O UDP é orientado a datagrama sem conexão (connectionless), não realiza three-way handshake, não ordena nem retransmite pacotes perdidos.',
    correctAnalysis:
      'A afirmação incorreta atribui ao UDP garantias de entrega ordenada e handshake que pertencem exclusivamente ao TCP.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): janela deslizante e ACKs com retransmissão são mecanismos centrais do TCP.',
      1: 'Incorreta (afirmação verdadeira): o cabeçalho UDP tem 8 bytes (portas, comprimento e checksum).',
      2: 'Incorreta (afirmação verdadeira): números de sequência permitem reordenar segmentos no receptor TCP.'
    }
  },
  {
    id: 'sarah-1-17',
    editalItemId: '1.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Quantos endereços IPv4 válidos para hosts estão disponíveis em uma sub-rede 10.20.30.64/26?',
    options: [
      '62 endereços de host.',
      '64 endereços de host.',
      '30 endereços de host.',
      '126 endereços de host.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. IPv4/IPv6 e sub-redes (Eixo 1. Redes). Em /26 restam 32 − 26 = 6 bits para host (2^6 = 64 endereços totais). Subtraindo endereço de rede (.64) e broadcast (.127), sobram 62 IPs utilizáveis (.65 a .126).',
    correctAnalysis:
      'Com 6 bits de host (máscara 255.255.255.192), o bloco tem 64 endereços; descontando rede e broadcast, restam 2^6 − 2 = 62 hosts válidos.',
    optionErrors: {
      1: 'Incorreta: 64 é o total de endereços do bloco antes de subtrair os 2 reservados (rede e broadcast).',
      2: 'Incorreta: 30 hosts corresponde à máscara /27 (5 bits de host: 2^5 − 2).',
      3: 'Incorreta: 126 hosts corresponde à máscara /25 (7 bits de host: 2^7 − 2).'
    }
  },
  {
    id: 'sarah-1-18',
    editalItemId: '1.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre endereçamento IPv6, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Endereços IPv6 têm 128 bits e não utilizam endereços de broadcast, substituído por multicast.\n( ) O prefixo fe80::/10 identifica endereços link-local, não roteáveis além do enlace local.\n( ) No SLAAC, a estação descobre o gateway e o prefixo por mensagens ARP Broadcast.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. IPv4/IPv6 (Eixo 1. Redes). IPv6 tem 128 bits e elimina broadcast (V); fe80::/10 é link-local não roteável (V); no SLAAC e no IPv6 não existe ARP nem broadcast, utilizando-se NDP sobre ICMPv6 (RS/RA e NS/NA) (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque o IPv6 substituiu o ARP pelo Neighbor Discovery Protocol (NDP) sobre ICMPv6.',
    optionErrors: {
      0: 'Incorreta: fe80::/10 é efetivamente link-local e IPv6 não usa ARP Broadcast.',
      2: 'Incorreta: o IPv6 possui 128 bits e utiliza multicast em vez de broadcast.',
      3: 'Incorreta: a terceira afirmativa é falsa pela inexistência de ARP e broadcast em IPv6.'
    }
  },
  {
    id: 'sarah-1-19',
    editalItemId: '1.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No padrão IEEE 802.1Q para VLANs, quantos bits possui o campo VLAN Identifier (VID) e quantos bytes a tag acrescenta ao quadro Ethernet?',
    options: [
      '8 bits para o VID e acréscimo de 2 bytes.',
      '16 bits para o VID e acréscimo de 8 bytes.',
      '12 bits para o VID e acréscimo de 4 bytes.',
      '24 bits para o VID e acréscimo de 12 bytes.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. VLAN (Eixo 1. Redes). O cabeçalho IEEE 802.1Q insere 4 bytes no quadro Ethernet (2 bytes TPID 0x8100 + 2 bytes TCI contendo 3 bits PCP, 1 bit DEI e 12 bits de VID, permitindo IDs de 0 a 4095, com 1 a 4094 utilizáveis).',
    correctAnalysis:
      'A etiqueta 802.1Q tem 4 bytes no total e reserva exatamente 12 bits para o identificador numérico da VLAN (VID).',
    optionErrors: {
      0: 'Incorreta: 8 bits limitaria a 256 VLANs e 2 bytes não comportam TPID + TCI.',
      1: 'Incorreta: o TCI tem 16 bits ao todo, dos quais 12 são para VID e 4 para prioridade/DEI.',
      3: 'Incorreta: 24 bits refere-se ao VNI do VXLAN, não ao VID do 802.1Q.'
    }
  },
  {
    id: 'sarah-1-20',
    editalItemId: '1.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'A respeito do isolamento lógico com VLANs em switches Ethernet, assinale a afirmação INCORRETA.',
    options: [
      'Cada VLAN constitui um domínio de broadcast separado em camada 2.',
      'A comunicação entre hosts de VLANs diferentes exige roteamento em camada 3.',
      'VLANs permitem segmentar usuários, voz e gerência sobre o mesmo switch físico.',
      'Hosts em uma mesma VLAN em switches vizinhos precisam de NAT para trocar quadros.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. VLAN (Eixo 1. Redes). Hosts na mesma VLAN compartilham o mesmo domínio de broadcast e sub-rede; atravessando enlaces trunk 802.1Q entre switches, comunicam-se diretamente em camada 2 sem NAT nem roteador.',
    correctAnalysis:
      'A afirmação incorreta exige NAT entre hosts da mesma VLAN: eles pertencem ao mesmo domínio L2 e comunicam-se via comutação Ethernet.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a principal função da VLAN é isolar domínios de broadcast.',
      1: 'Incorreta (afirmação verdadeira): tráfego inter-VLAN requer interface roteada (Router-on-a-Stick ou SVI L3).',
      2: 'Incorreta (afirmação verdadeira): múltiplas VLANs convivem logicamente isoladas no mesmo hardware.'
    }
  },
  {
    id: 'sarah-1-21',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na arquitetura QoS DiffServ, quantos bits do cabeçalho IP compõem o código DSCP e onde atua a marcação CoS (802.1p)?',
    options: [
      'DSCP usa 6 bits no cabeçalho IP (L3) e CoS usa 3 bits na tag 802.1Q (L2).',
      'DSCP usa 3 bits na tag 802.1Q (L2) e CoS usa 6 bits no cabeçalho IP (L3).',
      'DSCP usa 8 bits na porta TCP (L4) e CoS usa 12 bits no campo VID (L2).',
      'DSCP usa 16 bits no payload UDP (L4) e CoS usa 4 bits no cabeçalho MPLS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. QoS (Eixo 1. Redes). O DSCP ocupa os 6 bits mais significativos do campo ToS/Traffic Class do IPv4/IPv6 (camada 3, valores 0–63), enquanto o CoS/PCP ocupa 3 bits dentro do TCI da etiqueta IEEE 802.1Q (camada 2, valores 0–7).',
    correctAnalysis:
      'DSCP opera em camada 3 com 6 bits (preservado entre roteadores), ao passo que CoS (802.1p) opera em camada 2 com 3 bits dentro de quadros trunk.',
    optionErrors: {
      1: 'Incorreta: inverte exatamente as camadas e quantidades de bits entre DSCP e CoS.',
      2: 'Incorreta: nem DSCP nem CoS utilizam portas TCP ou o campo VID de 12 bits.',
      3: 'Incorreta: MPLS usa campo EXP/TC de 3 bits e DSCP não reside no payload UDP.'
    }
  },
  {
    id: 'sarah-1-22',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual a diferença prática entre Traffic Policing e Traffic Shaping ao detectar tráfego acima da taxa contratada?',
    options: [
      'Policing enfileira o excesso para enviar depois; Shaping descarta imediatamente.',
      'Policing descarta ou remarca o excesso; Shaping armazena em buffer para suavizar rajadas.',
      'Policing atua somente na recepção TCP; Shaping bloqueia quadros ARP locais.',
      'Ambos descartam pacotes acima da banda sem usar filas nem remarcação.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. QoS (Eixo 1. Redes). O Policing corta ou remarca pacotes excedentes instantaneamente (causando retransmissões TCP em rajadas), enquanto o Shaping retém o excesso em buffer/fila liberando em taxa constante (ao custo de maior latência/jitter).',
    correctAnalysis:
      'Shaping molda o tráfego na saída usando buffers para evitar descartes abruptos, enquanto Policing impõe teto rígido descartando ou rebaixando o excedente.',
    optionErrors: {
      0: 'Incorreta: inverte o comportamento de buffer (Shaping) e descarte imediato (Policing).',
      2: 'Incorreta: ambos controlam fluxos IP/interfaces de rede, não bloqueando ARP especificamente.',
      3: 'Incorreta: apenas o Policing descarta/remarca direto sem enfileiramento de suavização.'
    }
  },
  {
    id: 'sarah-1-23',
    editalItemId: '1.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Como um switch camada 2 trata um quadro unicast cujo endereço MAC de destino ainda não consta na sua tabela MAC?',
    options: [
      'Descarta o quadro e envia ICMP Destination Unreachable ao transmissor.',
      'Encaminha o quadro somente pela porta de uplink configurada como gateway.',
      'Inunda (flood) o quadro por todas as demais portas da mesma VLAN.',
      'Armazena o quadro em fila indefinida até expirar o timer de ARP local.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. switching (Eixo 1. Redes). Diante de um Unknown Unicast, o switch replica o quadro por todas as portas pertencentes à mesma VLAN do quadro recebido, exceto pela porta de entrada, até aprender o MAC na resposta.',
    correctAnalysis:
      'O comportamento padrão para MAC de destino desconhecido (Unknown Unicast) é o flooding em todas as outras interfaces daquela VLAN.',
    optionErrors: {
      0: 'Incorreta: switches L2 não geram pacotes ICMP L3 ao desconhecerem um MAC na tabela CAM.',
      1: 'Incorreta: o switch não pressupõe que o destino esteja no uplink se não conhece o MAC.',
      3: 'Incorreta: quadros L2 não ficam aguardando timers de tabela ARP no switch.'
    }
  },
  {
    id: 'sarah-1-24',
    editalItemId: '1.2.11',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre comutação em switches L2 e L3, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Cada porta física de um switch Ethernet Full-Duplex forma um domínio de colisão independente.\n( ) Interfaces SVI (Switched Virtual Interface) permitem ao switch Layer 3 atuar como gateway de VLANs.\n( ) O aprendizado dinâmico da tabela MAC ocorre inspecionando o MAC de destino de cada quadro.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – F – V.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. switching (Eixo 1. Redes). Cada porta de switch isola domínio de colisão (V); SVIs roteiam entre VLANs em switches L3 (V); o switch aprende endereços lendo o MAC DE ORIGEM dos quadros recebidos, não o de destino (F).',
    correctAnalysis:
      'As duas primeiras afirmações são verdadeiras; a terceira é falsa porque o switch associa porta e MAC na tabela CAM lendo sempre o endereço MAC de origem do quadro entrante.',
    optionErrors: {
      0: 'Incorreta: cada porta de switch separa sim um domínio de colisão distinto.',
      1: 'Incorreta: SVIs funcionam como gateways L3 e o aprendizado lê o MAC de origem.',
      2: 'Incorreta: o aprendizado nunca usa o MAC de destino para mapear a porta de origem.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 2 (+9) ====================
  {
    id: 'sarah-2-13',
    editalItemId: '2.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual capacidade diferencia um NGFW (como FortiGate ou Check Point) de um firewall stateful tradicional de camadas 3/4?',
    options: [
      'Identificação de aplicações em camada 7, IPS integrado e inspeção TLS.',
      'Encaminhamento de quadros Ethernet por MAC sem inspecionar cabeçalhos IP.',
      'Substituição completa do servidor DNS autoritativo interno da organização.',
      'Roteamento dinâmico OSPF sem suporte a tabela de estados de sessão.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. FortiGate, Check Point ou equivalentes (Eixo 2. Segurança de rede). NGFWs vão além de IP/porta (L3/L4) ao realizar controle granular de aplicações (App-ID/L7), prevenção de intrusões (IPS), filtragem web e descriptografia TLS.',
    correctAnalysis:
      'O firewall de próxima geração combina controle stateful clássico com inspeção profunda L7 (identificação de aplicação, usuário, IPS e inspeção SSL/TLS).',
    optionErrors: {
      1: 'Incorreta: encaminhar quadros por MAC sem IP descreve switch L2, não NGFW.',
      2: 'Incorreta: firewalls NGFW podem fazer DNS filtering, mas não substituem a infraestrutura autoritativa AD/DNS.',
      3: 'Incorreta: todo NGFW mantém tabela de estados de sessão (stateful inspection).'
    }
  },
  {
    id: 'sarah-2-14',
    editalItemId: '2.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre recursos e implantação de firewalls NGFW (FortiGate/Check Point), assinale a afirmação INCORRETA.',
    options: [
      'Permitem vincular políticas de acesso a grupos do Active Directory ou identidade do usuário.',
      'Dispensam segmentação por zonas e VLANs internas por bloquearem todo tráfego lateral.',
      'Podem executar inspeção TLS (Deep Packet Inspection) instalando certificado da CA corporativa.',
      'Operam normalmente com política implícita de negação padrão (implicit deny) no fim da lista.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. FortiGate, Check Point ou equivalentes (Eixo 2). NGFWs dependem de segmentação em zonas, VLANs e interfaces roteadas para inspecionar o tráfego entre segmentos; se tudo ficar na mesma VLAN sem passar pelo firewall, ele não vê o tráfego lateral L2.',
    correctAnalysis:
      'A afirmação incorreta dispensa a segmentação interna: o firewall só controla tráfego que efetivamente cruza suas interfaces/zonas de segurança.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): integração com AD/LDAP permite regras baseadas em usuário/grupo.',
      2: 'Incorreta (afirmação verdadeira): SSL/TLS Deep Inspection exige que os clientes confiem na CA do firewall.',
      3: 'Incorreta (afirmação verdadeira): o princípio padrão de segurança em firewalls é negar tudo que não for permitido.'
    }
  },
  {
    id: 'sarah-2-15',
    editalItemId: '2.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Por que um firewall stateful NÃO exige criar uma regra manual reversa para o tráfego de resposta de uma conexão HTTP liberada da LAN para a WAN?',
    options: [
      'Porque pacotes de retorno HTTP usam portas privilegiadas abaixo de 1024 sempre abertas.',
      'Porque toda política de saída em firewall stateful desabilita filtragem na interface WAN.',
      'Porque a tabela de estados registra a sessão iniciada e libera o retorno correspondente.',
      'Porque o cabeçalho TCP remove o IP de origem da resposta ao cruzar a DMZ.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. firewall (Eixo 2. Segurança de rede). Ao permitir o pacote inicial de uma nova sessão, o firewall stateful grava IPs, portas, flags e estado na Session/State Table, autorizando automaticamente os pacotes de resposta pertencentes àquela sessão.',
    correctAnalysis:
      'O rastreamento de estado (stateful inspection) memoriza conexões ativas e aceita pacotes de retorno válidos sem precisar de regras inversas abertas.',
    optionErrors: {
      0: 'Incorreta: a resposta retorna para porta efêmera alta (>1024) do cliente, não porta <1024.',
      1: 'Incorreta: o firewall continua filtrando rigorosamente novos fluxos originados na WAN.',
      3: 'Incorreta: cabeçalhos TCP/IP preservam endereçamento de sessão (com eventual tradução NAT rastreada).'
    }
  },
  {
    id: 'sarah-2-16',
    editalItemId: '2.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre zonas de segurança e DMZ em firewalls corporativos, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A DMZ isola servidores acessíveis pela internet para conter danos à LAN interna em caso de invasão.\n( ) Servidores na DMZ devem possuir acesso irrestrito aos controladores de domínio na LAN interna.\n( ) Regras em firewall são avaliadas sequencialmente de cima para baixo até a primeira correspondência.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – F.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. firewall (Eixo 2. Segurança de rede). A DMZ limita o raio de comprometimento (V); conexões da DMZ para a LAN devem ser proibidas ou estritamente filtradas por porta/destino mínimo, nunca irrestritas (F); firewalls avaliam regras top-down first-match (V).',
    correctAnalysis:
      'A primeira e a terceira afirmativas são verdadeiras; a segunda é falsa porque liberar acesso irrestrito da DMZ à LAN anula a própria finalidade da zona desmilitarizada.',
    optionErrors: {
      0: 'Incorreta: a DMZ protege justamente a LAN interna contra comprometimento de serviços públicos.',
      1: 'Incorreta: acesso da DMZ à LAN deve seguir menor privilégio restrito, nunca livre.',
      2: 'Incorreta: a leitura das regras segue ordem sequencial top-down (primeira regra que casa vence).'
    }
  },
  {
    id: 'sarah-2-17',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Por que os logs de firewall devem ser enviados continuamente a um coletor remoto (Syslog/SIEM) em vez de permanecerem apenas no disco local do appliance?',
    options: [
      'Preserva evidências caso o appliance falhe ou seja invadido e permite correlação temporal.',
      'Reduz o uso de criptografia nos túneis VPN IPsec estabelecidos na borda.',
      'Impede automaticamente que regras de NAT traduzam endereços privados internos.',
      'Substitui a necessidade de sincronismo NTP nos switches de acesso da rede.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. logs (Eixo 2. Segurança de rede). Appliances possuem armazenamento local limitado e podem ter logs apagados ou perdidos em pane/comprometimento; centralizar em SIEM/Syslog com NTP garante retenção segura, auditoria e correlação com AD/EDR.',
    correctAnalysis:
      'A exportação contínua protege a integridade das trilhas de auditoria fora do firewall e habilita correlação com eventos de outros sistemas no SIEM.',
    optionErrors: {
      1: 'Incorreta: envio de logs não altera parâmetros criptográficos de túneis VPN IPsec.',
      2: 'Incorreta: logging apenas registra eventos, sem interferir na execução de regras NAT.',
      3: 'Incorreta: ao contrário, o uso de SIEM exige NTP bem sincronizado em todos os ativos.'
    }
  },
  {
    id: 'sarah-2-18',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante investigação de varredura externa no firewall, a equipe não encontra registros dos pacotes bloqueados pela regra final padrão. Qual ajuste corrige essa lacuna?',
    options: [
      'Desativar o log nas regras Allow e remover a interface DMZ da tabela.',
      'Ativar logging na negação implícita ou criar regra Deny All logada ao fim.',
      'Substituir o NGFW por switch L2 para capturar quadros em modo promíscuo.',
      'Alterar todas as políticas de saída para Accept sem inspeção de estado.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. logs (Eixo 2. Segurança de rede). Em diversos firewalls, a regra implícita de negação final vem sem registro de log por padrão para poupar disco/CPU; habilitar log na implicit deny ou criar regra explícita Deny All com log garante visibilidade de bloqueios.',
    correctAnalysis:
      'Sem logging ativado na negação final, tentativas bloqueadas não aparecem nos registros; habilitar log explícito nessa regra resolve a cegueira de auditoria.',
    optionErrors: {
      0: 'Incorreta: desativar logs de Allow reduz visibilidade legítima e não registra os bloqueios.',
      2: 'Incorreta: switch L2 não substitui auditoria de bloqueios de políticas L3/L7.',
      3: 'Incorreta: aceitar tudo elimina a proteção do firewall em vez de registrar bloqueios.'
    }
  },
  {
    id: 'sarah-2-19',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os protocolos AH e ESP do IPsec, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Tanto o AH (IP 51) quanto o ESP (IP 50) implementam proteção anti-replay com número de sequência e janela deslizante.\n( ) O protocolo AH fornece confidencialidade (criptografia) superior ao ESP ao atravessar dispositivos NAT.\n( ) O ESP provê confidencialidade, integridade e autenticação, sendo compatível com NAT-T (UDP 4500).\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – V.',
      'V – F – V.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. IPsec (Eixo 2. Segurança de rede). AH e ESP possuem ambos Sequence Number de 32 bits (ou 64 com ESN) para anti-replay (V); AH não criptografa nem atravessa NAT por autenticar o cabeçalho IP externo mutável (F); ESP garante confidencialidade e opera com NAT-T UDP 4500 (V).',
    correctAnalysis:
      'A segunda afirmativa é falsa (pegadinha clássica: AH não cifra dados nem tolera NAT); a primeira (anti-replay em ambos) e a terceira (ESP + NAT-T) são verdadeiras.',
    optionErrors: {
      0: 'Incorreta: AH não fornece criptografia nem é compatível com NAT padrão.',
      1: 'Incorreta: o mecanismo anti-replay por número de sequência e janela deslizante existe tanto no AH quanto no ESP.',
      3: 'Incorreta: AH não provê confidencialidade nem compatibilidade nativa com NAT.'
    }
  },
  {
    id: 'sarah-2-20',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual diferença estrutural caracteriza o IPsec em modo Túnel frente ao modo Transporte em uma VPN site-to-site entre dois firewalls?',
    options: [
      'O modo Túnel protege apenas a camada TCP mantendo o IP interno exposto em texto claro.',
      'O modo Transporte cria um novo cabeçalho IP externo encapsulando sub-redes privadas.',
      'O modo Túnel desabilita a negociação IKE Phase 1 usando chaves estáticas em ICMP.',
      'O modo Túnel encapsula todo o pacote IP original com novo cabeçalho IP dos gateways.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. IPsec (Eixo 2. Segurança de rede). No modo Túnel, o pacote IP interno completo (cabeçalho + payload) é cifrado/protegido e recebe novo cabeçalho IP externo com os IPs públicos dos gateways VPN; no modo Transporte, apenas o payload L4+ é encapsulado mantendo o IP original.',
    correctAnalysis:
      'Em VPNs site-to-site entre gateways (com sub-redes privadas distintas nas pontas), utiliza-se o modo Túnel para encapsular integralmente o pacote IP interno.',
    optionErrors: {
      0: 'Incorreta: proteger apenas L4+ preservando o cabeçalho IP original descreve o modo Transporte.',
      1: 'Incorreta: quem adiciona novo cabeçalho IP externo para gateways é o modo Túnel.',
      2: 'Incorreta: IKE Phase 1 autentica os peers normalmente em VPNs IPsec em modo Túnel.'
    }
  },
  {
    id: 'sarah-2-21',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre dispositivos e controles de segurança de rede (IDS, IPS, Proxy e NAT), assinale a afirmação INCORRETA.',
    options: [
      'Um IDS posicionado em linha bloqueia ativamente pacotes maliciosos antes que atinjam o servidor.',
      'O proxy direto (forward proxy) intermedia requisições de clientes internos para a internet com filtragem URL.',
      'O proxy reverso recebe conexões externas em nome dos servidores de aplicação internos, podendo terminar TLS.',
      'Um IPS opera em linha (inline) podendo descartar conexões ou encerrar sessões ao detectar assinatura de ataque.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Dispositivos de segurança (Eixo 2. Segurança de rede). O IDS (Intrusion Detection System) atua passivamente (via SPAN/mirror port) apenas detectando e gerando alertas; quem opera em linha com capacidade de bloqueio ativo é o IPS (Intrusion Prevention System).',
    correctAnalysis:
      'A afirmação incorreta atribui ao IDS o bloqueio ativo em linha, função que define o IPS; o IDS limita-se à detecção e alerta.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): forward proxies atuam na saída dos usuários para cache, autenticação e filtro web.',
      2: 'Incorreta (afirmação verdadeira): proxies reversos protegem e descarregam TLS na entrada para backends.',
      3: 'Incorreta (afirmação verdadeira): IPS é posicionado em série no caminho do tráfego para prevenção ativa.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 3 (+7) ====================
  {
    id: 'sarah-3-13',
    editalItemId: '3.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na hierarquia do Active Directory, qual elemento representa a fronteira máxima de segurança, compartilha o mesmo Schema e contém uma ou mais árvores?',
    options: [
      'Unidade Organizacional (OU).',
      'Floresta (Forest) do AD.',
      'Site do Active Directory.',
      'Controlador RODC de filial.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Serviços de diretório Active Directory e LDAP (Eixo 3). A Floresta é o contêiner lógico de topo do AD DS que compartilha Schema e Configuração únicos e define a fronteira de segurança (e não o domínio isoladamente).',
    correctAnalysis:
      'A Floresta agrupa um ou mais domínios/árvores sob um Schema comum e constitui o limite oficial de segurança do Active Directory.',
    optionErrors: {
      0: 'Incorreta: a OU é um contêiner interno ao domínio usado para organizar objetos, delegar controle e vincular GPOs.',
      2: 'Incorreta: Site representa a topologia física de sub-redes IP para otimizar replicação e logon.',
      3: 'Incorreta: RODC é um tipo de controlador de domínio implantado em filiais sem segurança física plena.'
    }
  },
  {
    id: 'sarah-3-14',
    editalItemId: '3.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre serviços de diretório e interoperabilidade Linux/Windows com Active Directory, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Clientes Linux podem ingressar em domínio AD via SSSD/realmd autenticando usuários por Kerberos e LDAP.\n( ) O padrão LDAP organiza entradas hierarquicamente por Distinguished Name (DN), como CN, OU e DC.\n( ) A interoperabilidade com Linux exige trocar todos os DCs Windows por servidores OpenLDAP sem Kerberos.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Serviços de diretório e interoperabilidade (Eixo 3). SSSD/realmd (e Samba/Winbind) integram Linux nativamente ao AD via Kerberos/LDAP (V); LDAP identifica objetos por DN composto de CN/OU/DC (V); não é preciso substituir os DCs Windows (F).',
    correctAnalysis:
      'As duas primeiras afirmativas estão corretas; a terceira é falsa porque o AD DS já expõe LDAP/Kerberos padrão permitindo integração direta de estações e servidores Linux.',
    optionErrors: {
      0: 'Incorreta: o LDAP utiliza exatamente Distinguished Name (DN) hierárquico.',
      1: 'Incorreta: SSSD/realmd realizam ingresso nativo no AD com Kerberos e LDAP.',
      3: 'Incorreta: não há exigência de remover os Controladores de Domínio Windows.'
    }
  },
  {
    id: 'sarah-3-15',
    editalItemId: '3.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um Controlador de Domínio Windows Server (AD DS), quais componentes armazenam o banco do diretório e os arquivos compartilhados de GPOs/scripts?',
    options: [
      'Arquivo sam.hive para objetos e diretório C:\\Temp\\Policies via FTP.',
      'Banco SQLite local para objetos e pasta WinSxS para políticas.',
      'Arquivo win.ini para contas de domínio e pasta System32\\drivers.',
      'Arquivo NTDS.dit para o banco do diretório e pasta SYSVOL para GPOs e scripts.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Windows Server (Eixo 3). O banco de dados ESE do Active Directory reside em NTDS.dit (replicado via RPC/DRS), enquanto modelos de GPO e scripts de logon ficam no compartilhamento SYSVOL (replicado por DFSR entre DCs).',
    correctAnalysis:
      'O arquivo NTDS.dit contém todas as partições do diretório (Domínio, Configuração, Schema) e o SYSVOL armazena os arquivos das GPOs e scripts.',
    optionErrors: {
      0: 'Incorreta: SAM local existe em servidores standalone/workstations, não substituindo NTDS.dit no DC, e SYSVOL usa SMB/DFSR.',
      1: 'Incorreta: AD DS utiliza motor ESE (Extensible Storage Engine), não SQLite, e WinSxS guarda componentes do SO.',
      2: 'Incorreta: win.ini é legado do Windows 3.x/9x sem relação com AD DS.'
    }
  },
  {
    id: 'sarah-3-16',
    editalItemId: '3.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'A respeito da operação de Controladores de Domínio (DCs) no Windows Server AD DS, assinale a afirmação INCORRETA.',
    options: [
      'Um RODC replica alterações locais de senha diretamente de volta aos DCs graváveis da matriz.',
      'A remoção ou promoção de DCs utiliza as ferramentas do Server Manager ou módulo ADDSDeployment.',
      'O compartilhamento SYSVOL utiliza atualmente DFSR (DFS Replication) em vez do legado FRS.',
      'Os DCs de um mesmo domínio mantêm modelo multi-mestre para criação e alteração de usuários comuns.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Windows Server (Eixo 3). O RODC (Read-Only Domain Controller) mantém uma cópia SOMENTE LEITURA do NTDS.dit com replicação unidirecional (recebe atualizações dos DCs graváveis, nunca grava nem envia alterações de volta).',
    correctAnalysis:
      'A afirmação incorreta atribui replicação bidirecional/gravável a um RODC, que por definição só recebe replicação unidirecional e não armazena senhas por padrão.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): Install-ADDSDomainController / Uninstall-ADDSDomainController gerenciam promoção/rebaixamento.',
      2: 'Incorreta (afirmação verdadeira): versões modernas do Windows Server exigem DFSR para replicação do SYSVOL.',
      3: 'Incorreta (afirmação verdadeira): com exceção das funções FSMO específicas, objetos comuns seguem replicação multi-mestre.'
    }
  },
  {
    id: 'sarah-3-17',
    editalItemId: '3.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual a função do Global Catalog (Catálogo Global) em uma floresta Active Directory e em quais portas TCP ele atende consultas LDAP/LDAPS?',
    options: [
      'Executar backups automáticos do SYSVOL nas portas TCP 445 e 139.',
      'Responder consultas entre domínios da floresta e validar grupos universais nas portas 3268 e 3269.',
      'Substituir o servidor DNS primário na resolução de nomes externos nas portas 53 e 853.',
      'Emitir certificados X.509 de máquinas da floresta usando exclusivamente a porta TCP 88.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Active Directory (Eixo 3). O Global Catalog armazena uma cópia completa do próprio domínio e uma cópia parcial (somente leitura, atributos mais buscados) de todos os demais domínios da floresta, ouvindo nas portas TCP 3268 (LDAP GC) e 3269 (LDAPS GC).',
    correctAnalysis:
      'O Catálogo Global permite buscas floresta-wide e verificação de associação em Grupos Universais durante o logon, utilizando TCP 3268 (texto claro/StartTLS) e 3269 (TLS).',
    optionErrors: {
      0: 'Incorreta: portas 445/139 referem-se ao protocolo SMB de compartilhamento de arquivos.',
      2: 'Incorreta: portas 53/853 pertencem a DNS/DoT, não ao Global Catalog.',
      3: 'Incorreta: TCP/UDP 88 é a porta do serviço Kerberos KDC.'
    }
  },
  {
    id: 'sarah-3-18',
    editalItemId: '3.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na prática recomendada AGDLP para organizar permissões no Active Directory, qual sequência associa usuários a recursos compartilhados?',
    options: [
      'Permissão NTFS aplicada direto na conta do usuário sem uso de grupos.',
      'Conta -> Grupo Universal -> Diretório SYSVOL -> Política de Senha.',
      'Conta -> Grupo Global -> Grupo Domain Local -> Permissão no recurso.',
      'Grupo Domain Local -> Conta -> Grupo Global -> Controlador de Domínio.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Active Directory (Eixo 3). Na metodologia AGDLP (Account -> Global -> Domain Local -> Permission), contas de usuários entram em Grupos Globais por papel/setor, estes entram em Grupos Domain Local ligados ao recurso, e o acesso é concedido ao Domain Local.',
    correctAnalysis:
      'AGDLP significa Account -> Global group -> Domain Local group -> Permission, facilitando auditoria e escalabilidade na gestão de acessos.',
    optionErrors: {
      0: 'Incorreta: aplicar permissões direto a contas individuais quebra o modelo RBAC e dificulta manutenção.',
      1: 'Incorreta: SYSVOL não recebe permissões de compartilhamentos departamentais no modelo AGDLP.',
      3: 'Incorreta: um Grupo Global não pode conter um Grupo Domain Local nem a conta fica após Domain Local.'
    }
  },
  {
    id: 'sarah-3-19',
    editalItemId: '3.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em sistemas operacionais com memória virtual paginada, o que caracteriza o fenômeno de thrashing?',
    options: [
      'Compactação automática dos blocos do disco rígido durante o desligamento.',
      'Execução paralela de múltiplos threads de um mesmo processo em núcleos distintos.',
      'Uso exclusivo de memória cache L1 sem acesso à memória RAM principal.',
      'Troca incessante de páginas entre RAM e disco (paging), derrubando o desempenho útil.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Sistemas operacionais (Eixo 3). Thrashing ocorre quando o conjunto de páginas ativas (working set) excede a RAM física disponível, fazendo o sistema gastar mais tempo movendo páginas para o arquivo de paginação/swap do que executando instruções.',
    correctAnalysis:
      'No thrashing, faltas de página (page faults) constantes saturam a E/S de disco para swap/pagefile e reduzem drasticamente a utilização útil da CPU.',
    optionErrors: {
      0: 'Incorreta: desfragmentação/compactação em disco não corresponde a thrashing de memória virtual.',
      1: 'Incorreta: multithreading em múltiplos núcleos é comportamento normal de processamento paralelo.',
      2: 'Incorreta: cache L1 acelera acesso, exatamente o oposto da degradação extrema do thrashing.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 4 (+9) ====================
  {
    id: 'sarah-4-13',
    editalItemId: '4.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na arquitetura moderna do Microsoft Exchange Server, quais são as duas únicas funções de servidor (Server Roles) disponíveis?',
    options: [
      'Mailbox Server e Edge Transport Server.',
      'Client Access Server e Hub Transport Server.',
      'Unified Messaging Server e Domain Controller Server.',
      'Database Witness Server e ActiveSync Proxy Server.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Microsoft Exchange Server (Eixo 4). Desde o Exchange 2016/2019, todas as funções internas (acesso cliente, transporte e bancos) foram consolidadas no Mailbox Server, permanecendo apenas o Edge Transport opcional na DMZ.',
    correctAnalysis:
      'A arquitetura atual do Exchange contempla exclusivamente Mailbox Server (na rede interna/AD) e Edge Transport Server (opcional em DMZ/AD LDS).',
    optionErrors: {
      1: 'Incorreta: CAS e Hub Transport separados existiam no Exchange 2007/2010/2013, sendo absorvidos pelo Mailbox.',
      2: 'Incorreta: Unified Messaging foi descontinuado/incorporado e Domain Controller é função do AD DS.',
      3: 'Incorreta: Witness Server é um servidor de arquivo comum para quórum do DAG, não uma Role do Exchange.'
    }
  },
  {
    id: 'sarah-4-14',
    editalItemId: '4.2.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os papéis do Microsoft Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O Mailbox Server hospeda os bancos .EDB, os serviços de transporte interno e o proxy de acesso cliente.\n( ) O Edge Transport Server deve obrigatoriamente ingressar no domínio Active Directory interno.\n( ) A assinatura Edge Subscription sincroniza dados de destinatários da rede interna para o Edge via AD LDS.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – F – V.',
      'V – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Microsoft Exchange Server (Eixo 4). O Mailbox Server consolida bancos, transporte e acesso cliente (V); o Edge Transport reside na DMZ fora do domínio AD, usando instância local de AD LDS alimentada por EdgeSync/Edge Subscription (F e V).',
    correctAnalysis:
      'A primeira e a terceira afirmativas são verdadeiras; a segunda é falsa porque o Edge Transport permanece em grupo de trabalho (workgroup) na rede de perímetro por segurança.',
    optionErrors: {
      0: 'Incorreta: o Edge Transport não ingressa no domínio Active Directory corporativo.',
      2: 'Incorreta: o Mailbox Server atual engloba bancos .EDB, transporte e serviços de acesso.',
      3: 'Incorreta: a sincronização unidirecional via Edge Subscription/AD LDS é verdadeira.'
    }
  },
  {
    id: 'sarah-4-15',
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No Exchange Server, qual cmdlet PowerShell rastreia quando uma mensagem passou pelo transporte, se foi entregue, adiada ou rejeitada?',
    options: [
      'Get-MailboxDatabaseCopyStatus -Server EX01.',
      'Test-ReplicationHealth -Identity EX01.',
      'Get-MessageTrackingLog -Sender usuario@hospital.org.',
      'Set-SendConnector -ProtocolLoggingLevel Verbose.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Message Tracking (Eixo 4. Correio eletrônico). O cmdlet Get-MessageTrackingLog consulta os logs de rastreamento do pipeline de transporte filtrando por remetente, destinatário, assunto, intervalo horário ou MessageId.',
    correctAnalysis:
      'Get-MessageTrackingLog exibe eventos cronológicos (RECEIVE, SEND, DELIVER, FAIL, DSN) indicando o destino exato de cada e-mail no Exchange.',
    optionErrors: {
      0: 'Incorreta: Get-MailboxDatabaseCopyStatus verifica integridade e fila de replicação de bancos no DAG.',
      1: 'Incorreta: Test-ReplicationHealth testa saúde geral da replicação do DAG, não rastreia mensagens.',
      3: 'Incorreta: Set-SendConnector altera nível de log de protocolo SMTP, não consulta histórico de entrega.'
    }
  },
  {
    id: 'sarah-4-16',
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'A respeito do recurso Message Tracking no Microsoft Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'Registra metadados do fluxo de transporte como remetente, destinatário, timestamps e EventId.',
      'Permite filtrar ocorrências por endereço IP do servidor de origem ou identificador da mensagem.',
      'Pode ser consultado sem interromper o funcionamento das caixas postais nem desmontar bancos.',
      'Armazena integralmente o texto do corpo e todos os anexos binários de cada e-mail trafegado.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Message Tracking (Eixo 4. Correio eletrônico). Os logs de Message Tracking armazenam apenas metadados de transporte e assunto (se habilitado), nunca o corpo completo nem os arquivos anexos das mensagens.',
    correctAnalysis:
      'A afirmação incorreta atribui aos logs de rastreamento o armazenamento de corpo e anexos binários, o que comprometeria disco e privacidade.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): metadados de roteamento e EventId compõem o log de rastreamento.',
      1: 'Incorreta (afirmação verdadeira): filtros por MessageId, Sender, Recipients e ClientIp são nativos.',
      2: 'Incorreta (afirmação verdadeira): a consulta lê os logs de transporte online em tempo real.'
    }
  },
  {
    id: 'sarah-4-17',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual protocolo e porta atendem o cliente web OWA (Outlook on the Web) no Exchange Server e qual cmdlet gerencia seu diretório virtual?',
    options: [
      'HTTPS na porta TCP 443, gerenciado pelo cmdlet Get-OwaVirtualDirectory / Set-OwaVirtualDirectory.',
      'SMTP na porta TCP 25, gerenciado exclusivamente pelo cmdlet Set-SendConnector.',
      'POP3 na porta TCP 110, gerenciado pelo cmdlet Set-PopSettings em modo texto.',
      'SMB na porta TCP 445, mapeado como compartilhamento de rede na estação cliente.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. OWA (Eixo 4. Correio eletrônico). O Outlook on the Web (OWA) é publicado pelo IIS sobre HTTPS (TCP 443) no diretório virtual /owa, administrado via Get/Set-OwaVirtualDirectory (URLs internas/externas e métodos de autenticação).',
    correctAnalysis:
      'O acesso web OWA opera em HTTPS (TCP 443) através do diretório virtual /owa no IIS, configurado pelos cmdlets *OwaVirtualDirectory.',
    optionErrors: {
      1: 'Incorreta: SMTP (25) faz transferência entre MTAs, não interface web do usuário no navegador.',
      2: 'Incorreta: POP3 (110) é protocolo de descarga de e-mail para clientes desktop legados.',
      3: 'Incorreta: SMB (445) é protocolo de compartilhamento de arquivos Windows, não webmail.'
    }
  },
  {
    id: 'sarah-4-18',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em estações compartilhadas de um ambulatório, deseja-se impedir o download local de anexos pelo webmail OWA. Qual recurso do Exchange aplica essa restrição?',
    options: [
      'Remoção da função Mailbox Server no servidor principal.',
      'Política OwaMailboxPolicy bloqueando download de arquivos.',
      'Desativação da porta TCP 587 nos conectores de envio.',
      'Habilitação de Circular Logging em todos os bancos .EDB.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. OWA (Eixo 4. Correio eletrônico). As OwaMailboxPolicies (New-OwaMailboxPolicy / Set-OwaMailboxPolicy) controlam recursos do cliente web por grupo de usuários, permitindo desabilitar DirectFileAccessOnPublicComputers/DirectFileAccessOnPrivateComputers e download de anexos.',
    correctAnalysis:
      'As OwaMailboxPolicies permitem restringir recursos específicos do OWA, como salvamento local de anexos, sem afetar o serviço de transporte SMTP.',
    optionErrors: {
      0: 'Incorreta: remover o Mailbox Server derruba todo o serviço de correio da instituição.',
      2: 'Incorreta: porta 587 trata submissão SMTP de clientes, sem efeito sobre download no OWA HTTPS.',
      3: 'Incorreta: Circular Logging gerencia retenção de logs de transação do banco, não interface web.'
    }
  },
  {
    id: 'sarah-4-19',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para evitar alertas TLS no Outlook, OWA e Autodiscover usando um único certificado digital no Exchange, qual extensão e cmdlet devem ser aplicados?',
    options: [
      'Certificado autoassinado para localhost vinculado apenas ao serviço POP.',
      'Certificado wildcard sem nome interno associado apenas ao Witness Server.',
      'Certificado SAN habilitado via Enable-ExchangeCertificate no IIS e SMTP.',
      'Chave simétrica compartilhada no registro SPF do DNS público externo.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. certificados (Eixo 4. Correio eletrônico). Um certificado SAN (Subject Alternative Name) inclui todos os FQDNs necessários (ex.: mail.dominio e autodiscover.dominio) e é vinculado aos serviços IIS e SMTP via Enable-ExchangeCertificate.',
    correctAnalysis:
      'Certificados SAN permitem cobrir múltiplos namespaces (webmail, EWS, Autodiscover, SMTP) em um único certificado válido atribuído ao IIS e ao SMTP.',
    optionErrors: {
      0: 'Incorreta: certificados autoassinados para localhost não são confiáveis pelos clientes e falham nos nomes FQDNs.',
      1: 'Incorreta: o Witness Server não hospeda OWA/Autodiscover nem serviços de transporte cliente.',
      3: 'Incorreta: registros SPF listam IPs autorizados de envio, não armazenam chaves simétricas TLS.'
    }
  },
  {
    id: 'sarah-4-20',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre certificados digitais e TLS no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A ausência de autodiscover.dominio no campo SAN do certificado provoca aviso de nome inválido no Outlook.\n( ) O comando Import-ExchangeCertificate aceita arquivo PKCS#12 (.pfx) contendo chave privada e cadeia.\n( ) Certificados atribuídos ao serviço SMTP não necessitam corresponder ao FQDN divulgado no banner/Send Connector.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. certificados (Eixo 4. Correio eletrônico). A falta do FQDN no SAN gera erro de mismatch no cliente (V); Import-ExchangeCertificate importa .pfx com chave privada (V); quando parceiros validam TLS estrito (DANE/MTA-STS/verificação de certificado), o nome SMTP deve bater com o certificado (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque conexões TLS com validação de identidade SMTP conferem o FQDN do conector no certificado apresentado.',
    optionErrors: {
      0: 'Incorreta: .pfx é o formato padrão para importar certificado e chave privada no Exchange.',
      1: 'Incorreta: clientes Outlook validam obrigatoriamente autodiscover.dominio no SAN/CN.',
      2: 'Incorreta: a correspondência de nome no certificado SMTP é exigida na validação de identidade TLS.'
    }
  },
  {
    id: 'sarah-4-21',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os protocolos padrão de correio eletrônico e suas portas TCP, assinale a afirmação INCORRETA.',
    options: [
      'SMTP opera na porta 25 entre servidores (MTA) e na porta 587 para submissão autenticada.',
      'IMAP4 utiliza a porta 143 em texto claro (com STARTTLS) e a porta 993 com TLS implícito.',
      'POP3 utiliza a porta 110 em modo padrão e a porta 995 sobre TLS implícito.',
      'POP3 e IMAP4 usam a porta 25 para entregar mensagens entre servidores de domínios diferentes.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Arquitetura e protocolos de correio eletrônico (Eixo 4). POP3 (110/995) e IMAP (143/993) são protocolos de acesso do MUA à caixa postal; quem transporta mensagens entre servidores (MTAs) na porta 25 é exclusivamente o SMTP.',
    correctAnalysis:
      'A afirmação incorreta atribui a POP3 e IMAP4 a função de transferência MTA-para-MTA na porta 25, papel exclusivo do protocolo SMTP.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): porta 25 atende troca MTA-MTA e 587 atende submissão de clientes.',
      1: 'Incorreta (afirmação verdadeira): 143 e 993 (IMAPS) são as portas oficiais do IMAP4.',
      2: 'Incorreta (afirmação verdadeira): 110 e 995 (POP3S) são as portas oficiais do POP3.'
    }
  }
]);
