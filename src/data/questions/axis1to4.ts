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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os protocolos TCP e UDP na arquitetura TCP/IP, analise as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A abertura TCP segue SYN, SYN-ACK e ACK, e o encerramento gracioso utiliza o flag RST nos dois sentidos.\n( ) O cabeçalho TCP sem opções possui 8 bytes, assim como o cabeçalho UDP.\n( ) O protocolo UDP atua na camada de Transporte usando cabeçalho de 8 bytes com portas de origem e destino.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – V.',
      'F – F – V.',
      'F – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1.1. 1.1. Modelo OSI e arquitetura TCP/IP.. (1) falsa: o encerramento gracioso usa FIN/ACK em cada sentido; RST encerra a conexão de forma abrupta; (2) falsa: o cabeçalho TCP mínimo tem 20 bytes; somente o UDP tem 8 bytes; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – F – V. Verdadeira(s): (3). (1) é falsa porque o encerramento gracioso usa FIN/ACK em cada sentido; RST encerra a conexão de forma abrupta. (2) é falsa porque o cabeçalho TCP mínimo tem 20 bytes; somente o UDP tem 8 bytes.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois o encerramento gracioso usa FIN/ACK em cada sentido; RST encerra a conexão de forma abrupta.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois o cabeçalho TCP mínimo tem 20 bytes; somente o UDP tem 8 bytes.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-02',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre portas trunk IEEE 802.1Q, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.\n\n( ) Quadros de VLANs marcadas recebem uma tag 802.1Q de 4 bytes contendo o identificador VID de 12 bits.\n( ) Por padrão, os quadros da VLAN nativa trafegam com tag 802.1Q no enlace trunk.\n( ) O padrão IEEE 802.1Q opera na camada 2 (Enlace) preservando os endereços MAC de origem e destino.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – F – V.',
      'V – V – V.',
      'V – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.4. trunk. (1) verdadeira; (2) falsa: por padrão, a VLAN nativa trafega sem tag (untagged) no trunk; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: V – F – V. Verdadeira(s): (1), (3). (2) é falsa porque por padrão, a VLAN nativa trafega sem tag (untagged) no trunk.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois por padrão, a VLAN nativa trafega sem tag (untagged) no trunk.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-1-04',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma topologia Ethernet redundante com RSTP (IEEE 802.1w), considere as afirmativas a seguir:\n\nI. O switch com menor Bridge ID (menor prioridade ou menor MAC em empate) é eleito Root Bridge.\nII. O PortFast desativa completamente o STP na porta de acesso.\nIII. O BPDU Guard bloqueia (err-disable) a porta Edge caso receba uma BPDU inesperada.\nIV. Aumentar a prioridade STP para 61440 garante eleição como Root Bridge frente ao padrão 32768.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.5. STP. I verdadeira; II falsa: o PortFast não desativa o STP: a porta apenas pula os estados Listening/Learning e continua participando do STP; III verdadeira; IV falsa: no STP vence o MENOR Bridge ID; elevar a prioridade para 61440 torna o switch menos preferido.',
    correctAnalysis:
      'Gabarito: Somente I e III estão corretas. Verdadeira(s): I, III. II é falsa porque o PortFast não desativa o STP: a porta apenas pula os estados Listening/Learning e continua participando do STP. IV é falsa porque no STP vence o MENOR Bridge ID; elevar a prioridade para 61440 torna o switch menos preferido.',
    optionErrors: {
      0: 'Incorreta: a afirmativa II é falsa, pois o PortFast não desativa o STP: a porta apenas pula os estados Listening/Learning e continua participando do STP; a afirmativa III é verdadeira; a afirmativa IV é falsa, pois no STP vence o MENOR Bridge ID; elevar a prioridade para 61440 torna o switch menos preferido.',
      1: 'Incorreta: a afirmativa IV é falsa, pois no STP vence o MENOR Bridge ID; elevar a prioridade para 61440 torna o switch menos preferido.',
      3: 'Incorreta: a afirmativa I é verdadeira; a afirmativa II é falsa, pois o PortFast não desativa o STP: a porta apenas pula os estados Listening/Learning e continua participando do STP; a afirmativa III é verdadeira; a afirmativa IV é falsa, pois no STP vence o MENOR Bridge ID; elevar a prioridade para 61440 torna o switch menos preferido.'
    }
  },
  {
    id: 'sarah-1-05',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre túneis IPsec (Phase 1 e Phase 2), considere as afirmativas a seguir:\n\nI. Na Phase 1 estabelecem-se duas SAs unidirecionais (inbound e outbound) entre os gateways.\nII. Na Phase 2 (IPsec SA) negociam-se Traffic Selectors, algoritmos ESP/AH e opção PFS.\nIII. O mecanismo anti-replay por número de sequência existe apenas no protocolo AH, sendo ausente no ESP.\nIV. Pre-Shared Key (PSK), certificados digitais e modos Main/Aggressive atuam na negociação Phase 1.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.10. Phase 1/Phase 2. I falsa: a Phase 1 cria uma única IKE SA bidirecional; as duas SAs unidirecionais são criadas na Phase 2; II verdadeira; III falsa: o anti-replay por número de sequência existe tanto no AH quanto no ESP; IV verdadeira.',
    correctAnalysis:
      'Gabarito: Somente II e IV estão corretas. Verdadeira(s): II, IV. I é falsa porque a Phase 1 cria uma única IKE SA bidirecional; as duas SAs unidirecionais são criadas na Phase 2. III é falsa porque o anti-replay por número de sequência existe tanto no AH quanto no ESP.',
    optionErrors: {
      0: 'Incorreta: a afirmativa I é falsa, pois a Phase 1 cria uma única IKE SA bidirecional; as duas SAs unidirecionais são criadas na Phase 2.',
      2: 'Incorreta: a afirmativa I é falsa, pois a Phase 1 cria uma única IKE SA bidirecional; as duas SAs unidirecionais são criadas na Phase 2; a afirmativa II é verdadeira; a afirmativa III é falsa, pois o anti-replay por número de sequência existe tanto no AH quanto no ESP; a afirmativa IV é verdadeira.',
      3: 'Incorreta: a afirmativa I é falsa, pois a Phase 1 cria uma única IKE SA bidirecional; as duas SAs unidirecionais são criadas na Phase 2; a afirmativa III é falsa, pois o anti-replay por número de sequência existe tanto no AH quanto no ESP; a afirmativa IV é verdadeira.'
    }
  },
  {
    id: 'sarah-2-05',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre acesso remoto por SSL-VPN em firewalls, analise as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O Web Mode cria interface virtual L3 completa no endpoint para encaminhar protocolos RDP e SSH.\n( ) O Split Tunneling envia apenas rotas corporativas pelo túnel, mantendo Internet pelo link local.\n( ) A SSL-VPN opera tipicamente sobre TLS na porta TCP 443, facilitando passagem por firewalls.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. SSL-VPN (Eixo 2. Segurança de rede). Quem cria adaptador virtual L3 no endpoint é o Tunnel Mode, enquanto Web Mode atua via portal HTTPS no navegador (F); Split Tunneling direciona somente rotas internas (V); SSL-VPN usa TLS em TCP 443 (V).',
    correctAnalysis:
      'A primeira é falsa porque Web Mode opera via navegador HTTP/HTTPS sem adaptador L3 (quem cria interface L3 é o Tunnel Mode); a segunda (Split Tunneling) e a terceira (TLS TCP 443) são verdadeiras.',
    optionErrors: {
      1: 'Incorreta: a primeira afirmativa é falsa, pois é o Tunnel Mode — e não o Web Mode — que cria interface L3.',
      2: 'Incorreta: a segunda afirmativa é verdadeira (Split Tunneling envia só rotas corporativas pelo túnel).',
      3: 'Incorreta: a terceira afirmativa é verdadeira (SSL-VPN trafega sobre TLS na porta TCP 443).'
    }
  },
  {
    id: 'sarah-2-09',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No tratamento de um incidente em servidor DMZ comunicando-se com IP C2, analise as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Pela ordem de volatilidade, a imagem do disco deve ser coletada antes do dump de memória RAM.\n( ) Isolar o host na rede (quarentena) contém a comunicação maliciosa preservando a RAM acessível.\n( ) A erradicação do malware deve ocorrer antes da contenção do host comprometido.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.1.3. 1.3. Prevenção e tratamento de incidentes.. (1) falsa: pela ordem de volatilidade, a memória RAM é coletada antes do disco; (2) verdadeira; (3) falsa: a contenção (isolamento) precede a erradicação.',
    correctAnalysis:
      'Gabarito: F – V – F. Verdadeira(s): (2). (1) é falsa porque pela ordem de volatilidade, a memória RAM é coletada antes do disco. (3) é falsa porque a contenção (isolamento) precede a erradicação.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois pela ordem de volatilidade, a memória RAM é coletada antes do disco.',
      1: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois a contenção (isolamento) precede a erradicação.'
    }
  },
  {
    id: 'sarah-2-10',
    editalItemId: '2.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre gestão de processos, memória e E/S em sistemas operacionais, considere as afirmativas:\n\nI. Threads de um mesmo processo compartilham código e espaço de memória, mantendo pilha própria.\nII. O thrashing é resolvido aumentando o grau de multiprogramação (mais processos simultâneos na RAM).\nIII. O DMA permite transferências diretas entre dispositivos de E/S e RAM sem CPU a cada byte.\nIV. A troca de contexto entre threads do mesmo processo é mais rápida que entre processos distintos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 3.1.1. 1.1. Sistemas operacionais (gestão de processos, de memória e de entrada e saída).. I verdadeira; II falsa: aumentar o grau de multiprogramação agrava o thrashing; a solução é reduzir processos ativos ou ampliar a RAM; III verdadeira; IV verdadeira.',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. Verdadeira(s): I, III, IV. II é falsa porque aumentar o grau de multiprogramação agrava o thrashing; a solução é reduzir processos ativos ou ampliar a RAM.',
    optionErrors: {
      0: 'Incorreta: a afirmativa II é falsa, pois aumentar o grau de multiprogramação agrava o thrashing; a solução é reduzir processos ativos ou ampliar a RAM; a afirmativa III é verdadeira.',
      2: 'Incorreta: a afirmativa II é falsa, pois aumentar o grau de multiprogramação agrava o thrashing; a solução é reduzir processos ativos ou ampliar a RAM; a afirmativa IV é verdadeira.',
      3: 'Incorreta: a afirmativa I é verdadeira; a afirmativa II é falsa, pois aumentar o grau de multiprogramação agrava o thrashing; a solução é reduzir processos ativos ou ampliar a RAM.'
    }
  },
  {
    id: 'sarah-3-05',
    editalItemId: '3.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre a replicação do Active Directory, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A replicação intrasite ocorre por notificações rápidas e sem compressão de tráfego.\n( ) A replicação intersite utiliza Site Links com agendamento e compressão para poupar WAN.\n( ) O comando repadmin /replsummary apresenta resumo rápido de falhas e atrasos de replicação entre DCs.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – F – V.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. replicação e troubleshooting (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Intrasite = rápida sem compressão (V); Intersite = agendada com compressão (V); repadmin /replsummary consolida o estado de saúde e eventuais erros/atrasos entre DCs (V).',
    correctAnalysis:
      'Todas as três afirmativas são verdadeiras: intrasite prioriza baixa latência sem compressão, intersite economiza WAN com compressão/agendamento e repadmin /replsummary resume o status da replicação.',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira (replicação intrasite é por notificação sem compressão).',
      1: 'Incorreta: a segunda afirmativa é verdadeira (replicação intersite utiliza Site Links com compressão).',
      2: 'Incorreta: a terceira afirmativa é verdadeira (repadmin /replsummary exibe resumo da saúde da replicação).'
    }
  },
  {
    id: 'sarah-3-07',
    editalItemId: '3.2.9',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre o posicionamento dos papéis FSMO no Active Directory, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em ambiente multi-domínio onde nem todos os DCs são Global Catalog, o Infrastructure Master deve ficar obrigatoriamente em um DC Global Catalog.\n( ) O Schema Master e o Domain Naming Master existem em número de um por cada domínio criado na floresta AD.\n( ) O RID Master é um papel único por floresta, compartilhado entre todos os domínios.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – F – F.',
      'F – V – F.',
      'F – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 3.2.7. FSMO. (1) falsa: o Infrastructure Master deve ficar em um DC que NÃO seja Global Catalog nesse cenário; (2) falsa: o Schema Master e o Domain Naming Master são únicos por floresta, e não por domínio; (3) falsa: o RID Master é único por domínio (assim como o PDC Emulator e o Infrastructure Master).',
    correctAnalysis:
      'Gabarito: F – F – F. Todas as afirmativas são falsas. (1) é falsa porque o Infrastructure Master deve ficar em um DC que NÃO seja Global Catalog nesse cenário. (2) é falsa porque o Schema Master e o Domain Naming Master são únicos por floresta, e não por domínio. (3) é falsa porque o RID Master é único por domínio (assim como o PDC Emulator e o Infrastructure Master).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois o Infrastructure Master deve ficar em um DC que NÃO seja Global Catalog nesse cenário.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o Schema Master e o Domain Naming Master são únicos por floresta, e não por domínio.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o RID Master é único por domínio (assim como o PDC Emulator e o Infrastructure Master).'
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No Exchange Server, avalie as afirmativas sobre conectores e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Receive Connectors atuam por servidor controlando IPs, portas e autenticação nas conexões SMTP entrantes.\n( ) Send Connectors, assim como Receive Connectors, são configurados individualmente por servidor.\n( ) O Receive Connector Default Frontend do Mailbox Server escuta conexões externas na porta TCP 2525.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.4. conectores. (1) verdadeira; (2) falsa: Send Connectors têm escopo de organização; apenas os Receive Connectors são por servidor; (3) falsa: o Default Frontend escuta na porta TCP 25; a 2525 é usada pelo serviço de Transporte interno.',
    correctAnalysis:
      'Gabarito: V – F – F. Verdadeira(s): (1). (2) é falsa porque Send Connectors têm escopo de organização; apenas os Receive Connectors são por servidor. (3) é falsa porque o Default Frontend escuta na porta TCP 25; a 2525 é usada pelo serviço de Transporte interno.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois Send Connectors têm escopo de organização; apenas os Receive Connectors são por servidor.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o Default Frontend escuta na porta TCP 25; a 2525 é usada pelo serviço de Transporte interno.'
    }
  },
  {
    id: 'sarah-4-06',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre logs de transação e Circular Logging no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Com Circular Logging desabilitado, backups completos/incrementais via VSS truncam logs já gravados no .EDB.\n( ) Ativar Circular Logging libera backups incrementais e recuperação point-in-time sem cadeia de logs.\n( ) Circular Logging sobrescreve logs antigos após checkpoint, reduzindo consumo de disco.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. databases e backup no Exchange (Eixo 4). Backups VSS truncam logs com Circular Logging desligado (V); Circular Logging impede incrementais/point-in-time justamente por sobrescrever logs antigos (F e V).',
    correctAnalysis:
      'Sem Circular Logging, a cadeia contínua de logs permite backups incrementais e restauração point-in-time até o truncamento pelo VSS; ativá-lo sobrescreve logs economizando disco, porém inviabiliza incrementais.',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira, pois backups VSS truncam logs após commit quando Circular Logging está desativado.',
      1: 'Incorreta: a segunda afirmativa é falsa, pois Circular Logging impede backups incrementais e recuperação point-in-time.',
      2: 'Incorreta: a terceira afirmativa é verdadeira, pois a sobrescrita cíclica reduz o uso de espaço em disco.'
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre roteamento e comutação em redes IP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Switches L2 aprendem pelo MAC de destino e encaminham pelo MAC de origem do quadro.\n( ) A rota estática padrão (distância administrativa 1) tem preferência sobre rotas aprendidas via OSPF (110).\n( ) Roteadores preservam os endereços IP de origem e destino originais ao cruzar saltos sem NAT.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1.4. 1.4. Noções de roteamento e comutação.. (1) falsa: é o inverso: o switch aprende pelo MAC de origem e encaminha pelo MAC de destino; (2) verdadeira; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – V – V. Verdadeira(s): (2), (3). (1) é falsa porque é o inverso: o switch aprende pelo MAC de origem e encaminha pelo MAC de destino.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois é o inverso: o switch aprende pelo MAC de origem e encaminha pelo MAC de destino.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-1-15',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre endereçamento IPv6, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Endereços IPv6 têm 128 bits e não utilizam endereços de broadcast, substituído por multicast.\n( ) O prefixo fe80::/10 identifica endereços link-local, não roteáveis além do enlace local.\n( ) No SLAAC, a estação descobre o gateway e o prefixo por mensagens ARP Broadcast.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – V – F.',
      'V – F – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. IPv4/IPv6 (Eixo 1. Redes). IPv6 tem 128 bits e elimina broadcast (V); fe80::/10 é link-local não roteável (V); no SLAAC e no IPv6 não existe ARP nem broadcast, utilizando-se NDP sobre ICMPv6 (RS/RA e NS/NA) (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque o IPv6 substituiu o ARP pelo Neighbor Discovery Protocol (NDP) sobre ICMPv6.',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira, pois IPv6 usa 128 bits e multicast no lugar de broadcast.',
      2: 'Incorreta: a segunda afirmativa é verdadeira, pois fe80::/10 corresponde exatamente a endereços link-local.',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na arquitetura QoS DiffServ, quantos bits do cabeçalho IP compõem o código DSCP e onde atua a marcação CoS (802.1p)?',
    options: [
      'DSCP usa 6 bits no cabeçalho IP (L3) e CoS usa 3 bits na tag 802.1Q (L2).',
      'DSCP usa 3 bits na tag 802.1Q (L2) e CoS usa 6 bits no cabeçalho IP (L3).',
      'DSCP usa 8 bits no cabeçalho IP (L3) e CoS usa 12 bits no campo VID (L2).',
      'DSCP usa 4 bits no cabeçalho IP (L3) e CoS usa 8 bits no quadro Ethernet (L2).'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. QoS (Eixo 1. Redes). O DSCP ocupa os 6 bits mais significativos do campo ToS/Traffic Class do IPv4/IPv6 (camada 3, valores 0–63), enquanto o CoS/PCP ocupa 3 bits dentro do TCI da etiqueta IEEE 802.1Q (camada 2, valores 0–7).',
    correctAnalysis:
      'DSCP opera em camada 3 com 6 bits (preservado entre roteadores), ao passo que CoS (802.1p) opera em camada 2 com 3 bits dentro de quadros trunk.',
    optionErrors: {
      1: 'Incorreta: inverte exatamente as camadas e quantidades de bits entre DSCP e CoS.',
      2: 'Incorreta: o campo ToS inteiro tem 8 bits (apenas 6 são do DSCP) e o VID de 12 bits identifica a VLAN, não prioridade.',
      3: 'Incorreta: DSCP não possui 4 bits nem CoS possui 8 bits no quadro Ethernet.'
    }
  },
  {
    id: 'sarah-1-22',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre comutação em switches L2 e L3, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Cada porta física de um switch Ethernet Full-Duplex forma um domínio de colisão independente.\n( ) Interfaces SVI (Switched Virtual Interface) permitem ao switch Layer 3 atuar como gateway de VLANs.\n( ) O aprendizado dinâmico da tabela MAC ocorre inspecionando o MAC de destino de cada quadro.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – F – F.',
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
      1: 'Incorreta: interfaces SVI atuam como gateways L3 de VLANs e o aprendizado lê o MAC de origem.',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre zonas de segurança e DMZ em firewalls corporativos, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em firewall stateful, é necessário criar regra explícita para o tráfego de retorno das conexões iniciadas pela LAN.\n( ) Servidores na DMZ devem possuir acesso irrestrito aos controladores de domínio na LAN interna.\n( ) Regras em firewall são avaliadas sequencialmente de cima para baixo até a primeira correspondência.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – V.',
      'F – F – F.',
      'F – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.2. firewall. (1) falsa: no firewall stateful, a tabela de estados libera automaticamente o retorno das sessões iniciadas; (2) falsa: servidores da DMZ não devem ter acesso irrestrito à LAN; libera-se apenas o IP e a porta estritamente necessários; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – F – V. Verdadeira(s): (3). (1) é falsa porque no firewall stateful, a tabela de estados libera automaticamente o retorno das sessões iniciadas. (2) é falsa porque servidores da DMZ não devem ter acesso irrestrito à LAN; libera-se apenas o IP e a porta estritamente necessários.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois no firewall stateful, a tabela de estados libera automaticamente o retorno das sessões iniciadas.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois servidores da DMZ não devem ter acesso irrestrito à LAN; libera-se apenas o IP e a porta estritamente necessários.',
      2: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-2-17',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Por que os logs de firewall devem ser enviados continuamente a um coletor remoto (Syslog/SIEM) em vez de permanecerem apenas no disco local do appliance?',
    options: [
      'Preserva evidências caso o appliance falhe ou seja invadido e permite correlação temporal.',
      'Mantém registros apenas em memória volátil do firewall para acelerar o encaminhamento.',
      'Dispensa o uso de sincronização de relógios (NTP) gravando contadores sem carimbo horário.',
      'Permite desativar regras de auditoria explícitas nas políticas de entrada e saída da borda.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. logs (Eixo 2. Segurança de rede). Appliances possuem armazenamento local limitado e podem ter logs apagados ou perdidos em pane/comprometimento; centralizar em SIEM/Syslog com NTP garante retenção segura, auditoria e correlação com AD/EDR.',
    correctAnalysis:
      'A exportação contínua protege a integridade das trilhas de auditoria fora do firewall e habilita correlação com eventos de outros sistemas no SIEM.',
    optionErrors: {
      1: 'Incorreta: o objetivo é justamente persistir os logs externamente em disco seguro, não mantê-los só em RAM.',
      2: 'Incorreta: ao contrário, o uso de SIEM exige NTP sincronizado e carimbos horários precisos em todos os ativos.',
      3: 'Incorreta: o envio ao SIEM fortalece a auditoria e depende de políticas com logging habilitado.'
    }
  },
  {
    id: 'sarah-2-18',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Durante investigação de varredura externa no firewall, a equipe não encontra registros dos pacotes bloqueados pela regra final padrão. Qual ajuste corrige essa lacuna?',
    options: [
      'Desativar o log nas regras Allow e remover a interface DMZ da tabela.',
      'Ativar logging na negação implícita ou criar regra Deny All logada ao fim.',
      'Mover todas as regras Allow para depois da negação implícita na tabela.',
      'Alterar todas as políticas de saída para Accept sem inspeção de estado.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. logs (Eixo 2. Segurança de rede). Em diversos firewalls, a regra implícita de negação final vem sem registro de log por padrão para poupar disco/CPU; habilitar log na implicit deny ou criar regra explícita Deny All com log garante visibilidade de bloqueios.',
    correctAnalysis:
      'Sem logging ativado na negação final, tentativas bloqueadas não aparecem nos registros; habilitar log explícito nessa regra resolve a cegueira de auditoria.',
    optionErrors: {
      0: 'Incorreta: desativar logs de Allow reduz visibilidade legítima e não registra os bloqueios.',
      2: 'Incorreta: regras colocadas abaixo da negação implícita nunca serão avaliadas e não registram o tráfego bloqueado.',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os protocolos AH e ESP do IPsec, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Tanto o AH (IP 51) quanto o ESP (IP 50) implementam proteção anti-replay com número de sequência e janela deslizante.\n( ) O protocolo AH não criptografa o payload e falha ao atravessar NAT por autenticar o cabeçalho IP externo.\n( ) O ESP provê confidencialidade, integridade e autenticação, sendo compatível com NAT-T (UDP 4500).\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – F – V.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. IPsec (Eixo 2. Segurança de rede). AH e ESP possuem ambos Sequence Number de 32 bits (ou 64 com ESN) para anti-replay (V); AH não cifra dados nem tolera NAT por validar o cabeçalho IP externo (V); ESP garante confidencialidade e opera com NAT-T UDP 4500 (V).',
    correctAnalysis:
      'Todas as três afirmativas são verdadeiras: anti-replay existe no AH e no ESP, o AH não criptografa nem atravessa NAT padrão, e o ESP encapsulado em UDP 4500 suporta NAT-T.',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira, pois tanto AH quanto ESP implementam anti-replay por número de sequência.',
      1: 'Incorreta: a segunda afirmativa é verdadeira, pois AH não cifra e quebra sob NAT devido à alteração do IP externo.',
      3: 'Incorreta: a terceira afirmativa é verdadeira, pois ESP oferece confidencialidade e suporte a NAT-T em UDP 4500.'
    }
  },
  {
    id: 'sarah-2-20',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual diferença estrutural caracteriza o IPsec em modo Túnel frente ao modo Transporte em uma VPN site-to-site entre dois firewalls?',
    options: [
      'O modo Túnel protege apenas a camada TCP mantendo o IP interno exposto em texto claro.',
      'O modo Transporte cria um novo cabeçalho IP externo encapsulando sub-redes privadas.',
      'O modo Túnel desabilita a negociação IKE Phase 1 operando sem seleção de tráfego.',
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
      2: 'Incorreta: IKE Phase 1 e Traffic Selectors operam normalmente em VPNs IPsec em modo Túnel.'
    }
  },
  {
    id: 'sarah-2-21',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre serviços de diretório e interoperabilidade Linux/Windows com Active Directory, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Clientes Linux podem ingressar em domínio AD via SSSD/realmd autenticando usuários por Kerberos e LDAP.\n( ) No DN LDAP, os componentes são lidos do mais genérico (DC), à esquerda, para o mais específico (CN), à direita.\n( ) O ingresso de Linux no AD via SSSD/realmd dispensa sincronismo de horário, pois usa apenas LDAP.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – V – F.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 3.1.2. 1.2. Serviços de diretório (Active Directory e LDAP) e interoperabilidade.. (1) verdadeira; (2) falsa: no DN o componente mais específico (CN) fica à esquerda e o mais genérico (DC) à direita; (3) falsa: o ingresso usa Kerberos, que exige relógios sincronizados (tolerância padrão de 5 minutos).',
    correctAnalysis:
      'Gabarito: V – F – F. Verdadeira(s): (1). (2) é falsa porque no DN o componente mais específico (CN) fica à esquerda e o mais genérico (DC) à direita. (3) é falsa porque o ingresso usa Kerberos, que exige relógios sincronizados (tolerância padrão de 5 minutos).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois no DN o componente mais específico (CN) fica à esquerda e o mais genérico (DC) à direita.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o ingresso usa Kerberos, que exige relógios sincronizados (tolerância padrão de 5 minutos).'
    }
  },
  {
    id: 'sarah-3-15',
    editalItemId: '3.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual a função do Global Catalog (Catálogo Global) em uma floresta Active Directory e em quais portas TCP ele atende consultas LDAP/LDAPS?',
    options: [
      'Replicar senhas de contas locais das estações nas portas TCP 389 e 636.',
      'Responder consultas entre domínios da floresta e validar grupos universais nas portas 3268 e 3269.',
      'Gerenciar a replicação de políticas GPO no diretório SYSVOL nas portas TCP 135 e 445.',
      'Executar exclusivamente emissão de tickets Kerberos na porta TCP/UDP 88.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Active Directory (Eixo 3). O Global Catalog armazena uma cópia completa do próprio domínio e uma cópia parcial (somente leitura, atributos mais buscados) de todos os demais domínios da floresta, ouvindo nas portas TCP 3268 (LDAP GC) e 3269 (LDAPS GC).',
    correctAnalysis:
      'O Catálogo Global permite buscas floresta-wide e verificação de associação em Grupos Universais durante o logon, utilizando TCP 3268 (texto claro/StartTLS) e 3269 (TLS).',
    optionErrors: {
      0: 'Incorreta: portas 389/636 atendem consultas LDAP/LDAPS do domínio local, não replicação de senhas locais.',
      2: 'Incorreta: a replicação do SYSVOL utiliza DFSR sobre SMB/RPC, não o serviço Global Catalog.',
      3: 'Incorreta: emissão de tickets Kerberos na porta 88 é papel do KDC nos Controladores de Domínio.'
    }
  },
  {
    id: 'sarah-3-18',
    editalItemId: '3.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os papéis do Microsoft Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No Exchange 2016/2019, o papel Client Access Server continua sendo instalado separadamente do Mailbox Server.\n( ) O Edge Transport Server deve obrigatoriamente ingressar no domínio Active Directory interno.\n( ) A Edge Subscription replica dados ao AD LDS do Edge usando a porta TCP 25.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – F – F.',
      'F – V – F.',
      'F – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.1. Microsoft Exchange Server. (1) falsa: desde o Exchange 2016 o Client Access foi incorporado ao papel Mailbox; (2) falsa: o Edge Transport fica na DMZ e não deve ingressar no domínio AD interno; (3) falsa: o EdgeSync replica para o AD LDS pela porta TCP 50636.',
    correctAnalysis:
      'Gabarito: F – F – F. Todas as afirmativas são falsas. (1) é falsa porque desde o Exchange 2016 o Client Access foi incorporado ao papel Mailbox. (2) é falsa porque o Edge Transport fica na DMZ e não deve ingressar no domínio AD interno. (3) é falsa porque o EdgeSync replica para o AD LDS pela porta TCP 50636.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois desde o Exchange 2016 o Client Access foi incorporado ao papel Mailbox.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o Edge Transport fica na DMZ e não deve ingressar no domínio AD interno.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o EdgeSync replica para o AD LDS pela porta TCP 50636.'
    }
  },
  {
    id: 'sarah-4-15',
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
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
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual protocolo e porta atendem o cliente web OWA (Outlook on the Web) no Exchange Server e qual cmdlet gerencia seu diretório virtual?',
    options: [
      'HTTPS na porta TCP 443, gerenciado pelo cmdlet Get-OwaVirtualDirectory / Set-OwaVirtualDirectory.',
      'SMTP na porta TCP 25, gerenciado exclusivamente pelo cmdlet Set-SendConnector.',
      'POP3 na porta TCP 110, gerenciado pelo cmdlet Set-PopSettings em modo texto.',
      'IMAP4 na porta TCP 143, gerenciado exclusivamente pelo cmdlet Set-ImapSettings.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. OWA (Eixo 4. Correio eletrônico). O Outlook on the Web (OWA) é publicado pelo IIS sobre HTTPS (TCP 443) no diretório virtual /owa, administrado via Get/Set-OwaVirtualDirectory (URLs internas/externas e métodos de autenticação).',
    correctAnalysis:
      'O acesso web OWA opera em HTTPS (TCP 443) através do diretório virtual /owa no IIS, configurado pelos cmdlets *OwaVirtualDirectory.',
    optionErrors: {
      1: 'Incorreta: SMTP (25) faz transferência entre MTAs, não interface web do usuário no navegador.',
      2: 'Incorreta: POP3 (110) é protocolo de descarga de e-mail para clientes desktop legados.',
      3: 'Incorreta: IMAP4 (143) sincroniza caixas para clientes de correio desktop/móveis, não o webmail OWA.'
    }
  },
  {
    id: 'sarah-4-18',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em estações compartilhadas de um ambulatório, deseja-se impedir o download local de anexos pelo webmail OWA. Qual recurso do Exchange aplica essa restrição?',
    options: [
      'Desativação do diretório virtual /autodiscover no servidor.',
      'Política OwaMailboxPolicy bloqueando download de arquivos.',
      'Bloqueio das portas IMAP 993 e POP3 995 no acesso cliente.',
      'Redução da validade do certificado SAN do IIS para 30 dias.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. OWA (Eixo 4. Correio eletrônico). As OwaMailboxPolicies (New-OwaMailboxPolicy / Set-OwaMailboxPolicy) controlam recursos do cliente web por grupo de usuários, permitindo desabilitar DirectFileAccessOnPublicComputers/DirectFileAccessOnPrivateComputers e download de anexos.',
    correctAnalysis:
      'As OwaMailboxPolicies permitem restringir recursos específicos do OWA, como salvamento local de anexos, sem afetar o restante do serviço de e-mail.',
    optionErrors: {
      0: 'Incorreta: desativar /autodiscover quebra o provisionamento do Outlook e não controla anexos no OWA.',
      2: 'Incorreta: IMAP 993 e POP3 995 atendem clientes externos de correio, sem efeito no webmail OWA HTTPS.',
      3: 'Incorreta: validade do certificado TLS não restringe funcionalidades de interface dentro do OWA.'
    }
  },
  {
    id: 'sarah-4-19',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Para evitar alertas TLS no Outlook, OWA e Autodiscover usando um único certificado digital no Exchange, qual extensão e cmdlet devem ser aplicados?',
    options: [
      'Certificado autoassinado para localhost vinculado apenas ao serviço POP.',
      'Certificado wildcard sem nome interno associado apenas ao Witness Server.',
      'Certificado SAN habilitado via Enable-ExchangeCertificate no IIS e SMTP.',
      'Certificado autoassinado individual por caixa postal importado via POP3.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. certificados (Eixo 4. Correio eletrônico). Um certificado SAN (Subject Alternative Name) inclui todos os FQDNs necessários (ex.: mail.dominio e autodiscover.dominio) e é vinculado aos serviços IIS e SMTP via Enable-ExchangeCertificate.',
    correctAnalysis:
      'Certificados SAN permitem cobrir múltiplos namespaces (webmail, EWS, Autodiscover, SMTP) em um único certificado válido atribuído ao IIS e ao SMTP.',
    optionErrors: {
      0: 'Incorreta: certificados autoassinados para localhost não são confiáveis pelos clientes e falham nos nomes FQDNs.',
      1: 'Incorreta: o Witness Server não hospeda OWA/Autodiscover nem serviços de transporte cliente.',
      3: 'Incorreta: certificados TLS de servidor protegem serviços IIS/SMTP do Exchange, nunca são emitidos por caixa via POP3.'
    }
  },
  {
    id: 'sarah-4-20',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre certificados digitais e TLS no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A ausência de autodiscover.dominio no campo SAN do certificado provoca aviso de nome inválido no Outlook.\n( ) O comando Import-ExchangeCertificate aceita arquivo PKCS#12 (.pfx) contendo chave privada e cadeia.\n( ) Certificados atribuídos ao serviço SMTP não necessitam corresponder ao FQDN divulgado no banner/Send Connector.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – F – F.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. certificados (Eixo 4. Correio eletrônico). A falta do FQDN no SAN gera erro de mismatch no cliente (V); Import-ExchangeCertificate importa .pfx com chave privada (V); quando parceiros validam TLS estrito (DANE/MTA-STS/verificação de certificado), o nome SMTP deve bater com o certificado (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque conexões TLS com validação de identidade SMTP conferem o FQDN do conector no certificado apresentado.',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira, pois clientes Outlook validam autodiscover.dominio no SAN/CN.',
      1: 'Incorreta: a segunda afirmativa é verdadeira, pois .pfx (PKCS#12) é o formato padrão para importar certificado e chave privada.',
      2: 'Incorreta: a terceira afirmativa é falsa, pois a correspondência de nome no certificado SMTP é exigida na validação TLS.'
    }
  },
  {
    id: 'sarah-4-21',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
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
  },

  // ==================== FASE B - EIXO 4 LOTE 1 (+26: sarah-4-22 a sarah-4-47) ====================
  // --- 4.1.1 (+5 -> total 7) ---
  {
    id: 'sarah-4-22',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na arquitetura clássica de correio eletrônico definida pelas RFCs 5321 e 6409, quais papéis executam, respectivamente, a composição/envio pelo usuário, a recepção autenticada inicial e o depósito na caixa postal local?',
    options: [
      'MUA (Mail User Agent), MSA (Mail Submission Agent) e MDA (Mail Delivery Agent).',
      'MTA (Mail Transfer Agent), MUA (Mail User Agent) e DNS (Domain Name System).',
      'MDA (Mail Delivery Agent), MTA (Mail Transfer Agent) e MSA (Mail Submission Agent).',
      'MSA (Mail Submission Agent), MDA (Mail Delivery Agent) e MTA (Mail Transfer Agent).'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.1.1. Arquitetura e protocolos de correio eletrônico. O fluxo ponta a ponta segue MUA (cliente do usuário) → MSA (submissão autenticada na porta 587) → MTA (roteamento SMTP entre servidores na porta 25) → MDA (gravação na caixa postal para acesso via IMAP/POP3).',
    correctAnalysis:
      'MUA é o cliente de e-mail que origina a mensagem; MSA aceita a submissão autenticada do cliente; e MDA realiza a entrega final no armazenamento da caixa de destino.',
    optionErrors: {
      1: 'Incorreta: o MTA roteia entre servidores de transporte, não compõe no cliente, e o DNS apenas resolve registros MX.',
      2: 'Incorreta: inverte a ordem do fluxo colocando o MDA (entrega final) como origem e o MSA (submissão) como entrega.',
      3: 'Incorreta: coloca o MSA como cliente final e atribui ao MTA o depósito final na caixa postal local.'
    }
  },
  {
    id: 'sarah-4-23',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em registros DNS MX de um domínio corporativo, qual regra determina a ordem de tentativa pelos MTAs remetentes e a validade do nome de destino apontado?',
    options: [
      'Maior valor numérico de preferência tem prioridade; o alvo do MX deve apontar para um registro CNAME.',
      'Menor valor numérico de preferência tem prioridade; o alvo do MX deve resolver para registro A ou AAAA.',
      'Valores iguais de preferência causam erro permanente 550; o alvo do MX deve apontar para registro PTR.',
      'A prioridade segue ordem alfabética dos hosts; o alvo do MX dispensa registros A ou AAAA no DNS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.1.1. Arquitetura e protocolos de correio eletrônico (registros MX). Pela RFC 5321, quanto menor o número de preferência (ex.: 10 antes de 20), maior a prioridade do MX; além disso, o alvo de um MX não deve ser um CNAME, devendo possuir registros A/AAAA.',
    correctAnalysis:
      'Menor preferência numérica indica servidor primário; registros MX com mesma preferência permitem balanceamento; e o hostname alvo deve resolver diretamente via A/AAAA (vedado CNAME pela RFC).',
    optionErrors: {
      0: 'Incorreta: inverte a prioridade (menor valor tem prioridade) e CNAME é proibido como alvo de MX pela RFC 5321.',
      2: 'Incorreta: preferências iguais são válidas para balanceamento/round-robin e PTR faz resolução reversa de IP.',
      3: 'Incorreta: o roteamento SMTP nunca usa ordem alfabética e exige resolução de endereço IP via registros A ou AAAA.'
    }
  },
  {
    id: 'sarah-4-24',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os protocolos de acesso à caixa postal POP3 e IMAP4, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No protocolo POP3, alterações de pastas customizadas e sinalizadores de leitura feitas em um dispositivo são sincronizadas bidirecionalmente com o servidor.\n( ) O protocolo IMAP4 permite consultar cabeçalhos e baixar partes MIME específicas de uma mensagem antes de transferir anexos volumosos.\n( ) Em uma sessão POP3, mensagens marcadas com o comando DELE no estado TRANSACTION só são removidas na transição para o estado UPDATE via QUIT.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.1.1. Arquitetura e protocolos (POP3 e IMAP). (1) falsa: POP3 não gerencia múltiplas pastas nem sincroniza flags bidirecionalmente — esse recurso é do IMAP4; (2) verdadeira: o comando FETCH do IMAP permite buscar apenas cabeçalhos ou seções MIME; (3) verdadeira: conforme a RFC 1939, DELE marca para remoção e QUIT efetiva no estado UPDATE.',
    correctAnalysis:
      'Gabarito: F – V – V. (1) é falsa porque sincronização bidirecional de pastas e flags pertence ao IMAP4, não ao POP3; (2) e (3) descrevem corretamente a busca parcial MIME no IMAP4 e o ciclo TRANSACTION/UPDATE no POP3.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois o POP3 não suporta sincronização bidirecional de pastas e sinalizadores.',
      2: 'Incorreta: a afirmativa (2) é verdadeira, pois o IMAP4 suporta FETCH seletivo de cabeçalhos e partes MIME.',
      3: 'Incorreta: a afirmativa (3) é verdadeira, pois a exclusão definitiva no POP3 ocorre ao enviar QUIT (estado UPDATE).'
    }
  },
  {
    id: 'sarah-4-25',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre extensões ESMTP e negociação TLS no protocolo SMTP, analise as afirmativas a seguir:\n\nI. O comando EHLO permite ao servidor anunciar suporte a extensões como STARTTLS, AUTH e SIZE, diferentemente do HELO legado.\nII. Após receber resposta positiva ao STARTTLS e concluir o handshake TLS, o cliente deve descartar capacidades anteriores e reenviar EHLO.\nIII. Na porta TCP 465 (SMTPS, RFC 8314), o cliente abre a sessão em texto claro e envia obrigatoriamente o comando STARTTLS antes da criptografia.\nIV. A porta TCP 587 (Submission) exige autenticação do usuário antes de aceitar o envio de mensagens para domínios externos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.1.1. Arquitetura e protocolos (SMTP). I, II e IV estão corretas conforme RFC 5321, RFC 3207 e RFC 6409; III é falsa porque a porta 465 utiliza TLS implícito desde o handshake TCP inicial (RFC 8314), sem comando STARTTLS.',
    correctAnalysis:
      'I, II e IV refletem o comportamento padrão de ESMTP, STARTTLS (que exige novo EHLO após estabelecer o túnel TLS) e submissão na porta 587; III confunde TLS explícito (STARTTLS em 25/587) com TLS implícito (465).',
    optionErrors: {
      0: 'Incorreta: omite II e IV (verdadeiras) e inclui III (porta 465 usa TLS implícito, sem STARTTLS).',
      1: 'Incorreta: inclui III (falsa) e omite IV (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui III (falsa).'
    }
  },
  {
    id: 'sarah-4-26',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um colaborador recebeu na caixa de entrada um aviso institucional cujo cabeçalho "To:" exibe apenas um endereço genérico de lista, sem que o próprio e-mail conste em "To:" ou "Cc:". Qual mecanismo do SMTP explica essa entrega?',
    options: [
      'O protocolo IMAP reescreve o cabeçalho "From:" durante a sincronização de pastas no servidor.',
      'Os MTAs roteiam pelo envelope SMTP (RCPT TO:), onde ficam os destinatários em cópia oculta (Bcc:).',
      'O registro DNS MX direciona a mensagem pelo campo "Subject:" ignorando o envelope da sessão.',
      'O protocolo POP3 baixa todas as mensagens da organização e filtra localmente pelo cabeçalho "To:".'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.1.1. Arquitetura e protocolos de correio eletrônico. No SMTP, o roteamento entre MTAs utiliza os comandos do envelope (MAIL FROM e RCPT TO), enquanto "To:", "Cc:" e "From:" pertencem ao bloco DATA; destinatários em Bcc: existem no RCPT TO sem constar nos cabeçalhos visíveis.',
    correctAnalysis:
      'A entrega ocorre porque o envelope SMTP (RCPT TO:) contém o endereço do destinatário em Bcc:, sendo esse o parâmetro usado pelos MTAs para rotear a mensagem.',
    optionErrors: {
      0: 'Incorreta: IMAP apenas acessa mensagens já entregues e não altera cabeçalhos de roteamento de envio.',
      2: 'Incorreta: registros MX localizam o servidor do domínio de destino e o Subject não participa do roteamento.',
      3: 'Incorreta: POP3 acessa uma caixa individual após a entrega pelo MDA, não fazendo roteamento organizacional.'
    }
  },

  // --- 4.1.2 (+6 -> total 7) ---
  {
    id: 'sarah-4-27',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Conforme a RFC 7208 (SPF), quantas consultas DNS podem ser disparadas por mecanismos como include, a, mx, ptr e exists durante a avaliação de um registro antes de retornar PermError?',
    options: [
      'No máximo 10 consultas DNS; ultrapassar esse teto gera resultado PermError na avaliação SPF.',
      'No máximo 3 consultas DNS; mecanismos ip4 e ip6 consomem duas consultas desse limite total.',
      'Não há limite de consultas DNS no SPF, desde que a política termine com o qualificador "~all".',
      'No máximo 25 consultas DNS; exceder o limite converte automaticamente a falha em resultado Pass.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail (SPF). A RFC 7208 impõe limite rígido de 10 lookups DNS para evitar amplificação/DoS durante a validação SPF; mecanismos ip4 e ip6 não consomem consultas desse limite, e exceder 10 gera PermError.',
    correctAnalysis:
      'O limite oficial da RFC 7208 é de 10 consultas DNS em mecanismos que disparam resolução (include, a, mx, ptr, exists, redirect); acima disso ocorre PermError.',
    optionErrors: {
      1: 'Incorreta: o limite correto é 10 (não 3), e mecanismos ip4/ip6 contam zero lookups DNS por já conterem os endereços.',
      2: 'Incorreta: o teto de 10 lookups é obrigatório pela RFC para impedir ataques de negação de serviço por recursão DNS.',
      3: 'Incorreta: o teto é 10 e a violação resulta em PermError, jamais em Pass automático.'
    }
  },
  {
    id: 'sarah-4-28',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No mecanismo DKIM (RFC 6376), como o servidor receptor valida a assinatura de uma mensagem e em que local do DNS encontra a chave pública correspondente?',
    options: [
      'Compara o IP conectante com o registro TXT no vértice do domínio e verifica o campo "Return-Path:".',
      'Lê as tags d= e s= do cabeçalho DKIM-Signature e consulta a chave pública em <seletor>._domainkey.<domínio>.',
      'Valida o certificado TLS da porta 25 junto ao registro MX primário e confere a tag p= em _dmarc.',
      'Recalcula apenas o hash do endereço IP de origem usando a tag bh= publicada em _spf.<domínio>.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail (DKIM). O cabeçalho DKIM-Signature informa o domínio assinante (d=), o seletor (s=), os cabeçalhos assinados (h=), o hash do corpo (bh=) e a assinatura (b=); a chave pública é publicada via TXT em <seletor>._domainkey.<domínio>.',
    correctAnalysis:
      'O receptor extrai s= e d= do cabeçalho DKIM-Signature para buscar o registro TXT em <seletor>._domainkey.<domínio> e verificar criptograficamente cabeçalhos e corpo.',
    optionErrors: {
      0: 'Incorreta: comparar IP conectante com TXT do vértice descreve o funcionamento do SPF, não do DKIM.',
      2: 'Incorreta: _dmarc publica política de alinhamento DMARC e não armazena chaves públicas DKIM.',
      3: 'Incorreta: a tag bh= contém o hash do corpo da mensagem (body hash), não do IP de origem, e DKIM usa _domainkey.'
    }
  },
  {
    id: 'sarah-4-29',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre alinhamento e políticas no protocolo DMARC (RFC 7489), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No modo de alinhamento estrito (adkim=s ou aspf=s), um subdomínio diferente do domínio presente no cabeçalho "From:" é aceito como alinhado.\n( ) A configuração "p=none; pct=100" instrui o receptor a enviar todas as mensagens reprovadas para a quarentena do usuário.\n( ) A tag "rua=" define destinatários para relatórios XML agregados de conformidade, enquanto "ruf=" especifica o destino de relatórios forenses por falha.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – V.',
      'F – F – V.',
      'F – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail (DMARC). (1) falsa: o alinhamento estrito exige correspondência exata do FQDN; subdomínios só passam no modo relaxado (r); (2) falsa: p=none é modo somente monitoramento e não aplica bloqueio nem quarentena; (3) verdadeira: rua recebe relatórios agregados e ruf recebe relatórios forenses.',
    correctAnalysis:
      'Gabarito: F – F – V. (1) é falsa porque alinhamento estrito proíbe subdomínios distintos; (2) é falsa porque p=none apenas monitora; (3) é verdadeira quanto às tags rua e ruf.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois somente o alinhamento relaxado (r) aceita subdomínios organizacionais.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois p=none não quarentena mensagens (isso requer p=quarantine ou p=reject).',
      3: 'Incorreta: a afirmativa (3) é verdadeira, descrevendo corretamente os relatórios agregados (rua) e forenses (ruf).'
    }
  },
  {
    id: 'sarah-4-30',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre o funcionamento conjunto de SPF, DKIM, DMARC e ARC na proteção contra falsificação de e-mails, assinale a opção INCORRETA.',
    options: [
      'O SPF valida diretamente o endereço visível do cabeçalho MIME "From:", impedindo spoofing visual mesmo sem registro DMARC.',
      'O encaminhamento automático pode quebrar o SPF por mudar o IP de envio, sendo mitigado por SRS ou por assinatura DKIM preservada.',
      'O protocolo ARC (Authenticated Received Chain) preserva resultados prévios de autenticação através de listas que reenviam mensagens.',
      'No DMARC, a mensagem é aprovada caso o SPF alinhado ou o DKIM alinhado (ao menos um dos dois) obtenha resultado Pass.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail (SPF, DKIM, DMARC). A opção A é incorreta porque o SPF verifica o domínio do envelope (MAIL FROM / Return-Path), não o cabeçalho visível "From:"; sem DMARC impondo alinhamento, um atacante pode forjar o "From:" mantendo um Return-Path próprio válido no SPF.',
    correctAnalysis:
      'A afirmação incorreta atribui ao SPF a validação do cabeçalho visual "From:", função que depende do alinhamento exigido pelo DMARC.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): forwarders mudam o IP conectante, o que quebra SPF sem SRS, enquanto DKIM permanece íntegro se corpo/cabeçalhos assinados não mudarem.',
      2: 'Incorreta (afirmação verdadeira): ARC registra a cadeia de verificação em saltos intermediários confiáveis.',
      3: 'Incorreta (afirmação verdadeira): DMARC exige aprovação com alinhamento em SPF OU em DKIM.'
    }
  },
  {
    id: 'sarah-4-31',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um sistema externo envia notificações usando "From: avisos@hospital.org.br", mas o envelope Return-Path é "bounces@saas.net" e o DKIM assina com "d=saas.net". Ambos SPF e DKIM passam para "saas.net", porém os destinos com DMARC p=reject bloqueiam os e-mails. Qual é a causa?',
    options: [
      'O protocolo DMARC exige obrigatoriamente que a política publicada no DNS seja "p=none" para sistemas em nuvem.',
      'Os resultados de SPF e DKIM precisam ter exatamente o mesmo algoritmo RSA de 4096 bits para funcionar juntos.',
      'Falha de alinhamento de identificadores no DMARC, pois nem o Return-Path nem a tag d= coincidem com hospital.org.br.',
      'O qualificador "-all" no SPF de saas.net proíbe que servidores destinatários leiam o cabeçalho "From:".'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail (DMARC). Para passar no DMARC, não basta SPF Pass ou DKIM Pass isolados: é obrigatório o alinhamento de domínio com o cabeçalho "From:" (Return-Path alinhado no SPF ou tag d= alinhada no DKIM).',
    correctAnalysis:
      'Embora SPF e DKIM passem para saas.net, nenhum deles está alinhado ao domínio hospital.org.br exibido em "From:", causando reprovação DMARC.',
    optionErrors: {
      0: 'Incorreta: sistemas em nuvem suportam p=quarantine e p=reject desde que configurados com DKIM/Return-Path customizados e alinhados.',
      1: 'Incorreta: SPF não utiliza chaves RSA e não existe exigência de 4096 bits entre SPF e DKIM.',
      3: 'Incorreta: o qualificador "-all" indica falha rígida para IPs não listados no SPF e não bloqueia leitura de cabeçalhos.'
    }
  },
  {
    id: 'sarah-4-32',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre publicação DNS de autenticação de e-mail:\n\nO registro SPF é publicado no domínio raiz usando o tipo DNS _____; a política DMARC é consultada no subdomínio _____ ; e o qualificador SPF que sinaliza falha explícita (hard fail) para IPs não autorizados é _____.',
    options: [
      'MX / _spf / ?all',
      'TXT / _dmarc / -all',
      'CNAME / _dkim / ~all',
      'SRV / _mail / +all'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail. Registros SPF atuais utilizam exclusivamente tipo TXT (o antigo tipo SPF/99 foi descontinuado); o DMARC é publicado em TXT sob _dmarc.<domínio>; e "-all" indica Fail (hard fail), enquanto "~all" é SoftFail.',
    correctAnalysis:
      'A sequência correta é TXT (tipo de registro SPF), _dmarc (rótulo DNS da política DMARC) e -all (mecanismo de falha explícita para remetentes não listados).',
    optionErrors: {
      0: 'Incorreta: MX indica servidores de entrada de e-mail e ?all representa resultado Neutral.',
      2: 'Incorreta: CNAME é apelido DNS, _dkim não é o rótulo padrão DMARC e ~all representa SoftFail.',
      3: 'Incorreta: SRV mapeia serviços por porta e +all autoriza qualquer IP da internet (inseguro).'
    }
  },

  // --- 4.2.1 (+5 -> total 7) ---
  {
    id: 'sarah-4-33',
    editalItemId: '4.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No pipeline de transporte interno do Exchange Server (Mailbox Role), qual serviço atua como proxy stateless na porta 25 sem manter filas locais, e qual serviço executa a categorização e enfileiramento das mensagens?',
    options: [
      'Mailbox Transport Delivery Service (porta 25) e Information Store Service (porta 443).',
      'Edge Transport Service (porta 50636) e Mailbox Transport Submission Service (porta 143).',
      'Front End Transport Service (sem filas) e Transport Service (categorização e filas na porta 2525).',
      'Transport Service (proxy stateless na porta 587) e Front End Transport Service (banco EDB).'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.1. Microsoft Exchange Server. No Mailbox Server, o Front End Transport Service recebe SMTP na porta 25/587 de forma stateless (sem filas) e repassa ao Transport Service (MSExchangeTransport, porta 2525), que categoriza, roteia e mantém as filas.',
    correctAnalysis:
      'Front End Transport atua exclusivamente como proxy de camada 7 sem enfileiramento local; o Transport Service realiza inspeção, categorização, roteamento e armazenamento em fila.',
    optionErrors: {
      0: 'Incorreta: Mailbox Transport Delivery grava mensagens recebidas no banco local via RPC/MAPI, e Information Store gerencia os .EDB.',
      1: 'Incorreta: Edge Transport fica isolado na DMZ (50636 é EdgeSync) e Submission lê caixas locais para enviar ao Transport.',
      3: 'Incorreta: inverte os dois papéis e atribui incorretamente bancos .EDB ao Front End Transport.'
    }
  },
  {
    id: 'sarah-4-34',
    editalItemId: '4.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre a arquitetura e integração do Microsoft Exchange Server com o Active Directory, analise as afirmativas:\n\nI. A implantação inicial do Exchange na floresta exige preparação prévia do esquema (/PrepareSchema) e da organização no AD (/PrepareAD).\nII. O Exchange Server armazena todos os objetos de configuração e atributos de destinatários em banco SQLite independente do Active Directory.\nIII. Os Sites do Active Directory funcionam como fronteira lógica de roteamento de transporte e afinidade de serviços entre servidores Mailbox.\nIV. O controle administrativo do Exchange baseia-se em RBAC (Role-Based Access Control), estruturado por grupos de funções, papéis e escopos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.1. Microsoft Exchange Server. I, III e IV estão corretas quanto à preparação do AD, uso de AD Sites para roteamento e modelo RBAC; II é falsa porque o Exchange utiliza intensamente a partição Configuration e os objetos do próprio Active Directory (não SQLite).',
    correctAnalysis:
      'Estão corretas I (PrepareSchema/PrepareAD), III (AD Sites como limite de roteamento) e IV (RBAC); II erra ao desvincular o Exchange do Active Directory.',
    optionErrors: {
      0: 'Incorreta: inclui II (falsa) e omite III e IV (verdadeiras).',
      1: 'Incorreta: inclui II (Exchange depende nativamente do Active Directory) e omite III.',
      2: 'Incorreta: omite I (preparação de esquema/AD é obrigatória) e inclui II (falsa).'
    }
  },
  {
    id: 'sarah-4-35',
    editalItemId: '4.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito da administração e ciclo de atualizações do Microsoft Exchange Server 2016/2019/SE, assinale a afirmação INCORRETA.',
    options: [
      'Os Cumulative Updates (CUs) são pacotes mínimos de segurança que dispensam atualização de esquema do AD e substituem apenas arquivos DLL alterados.',
      'O Exchange Admin Center (EAC) é servido pelo IIS no diretório virtual /ecp sobre HTTPS e coexiste com o Exchange Management Shell.',
      'O Exchange Management Shell (EMS) opera sobre PowerShell remoto via WinRM/IIS, permitindo configurar parâmetros ausentes na interface gráfica.',
      'Recursos como Extended Protection (EP) e AMSI reduzem a exposição contra relay NTLM e execução de scripts maliciosos no IIS do Exchange.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.1. Microsoft Exchange Server. Cada Cumulative Update (CU) do Exchange é uma compilação completa do produto que pode exigir /PrepareSchema e /PrepareAD antes da instalação; os patches pequenos mensais de correção são os Security Updates (SUs).',
    correctAnalysis:
      'A afirmação incorreta descreve os CUs como se fossem SUs: na verdade, CUs são instalações completas que frequentemente demandam preparação de esquema/AD.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): o EAC responde em /ecp via HTTPS no IIS do servidor Mailbox.',
      2: 'Incorreta (afirmação verdadeira): o EMS usa sessões remotas WinRM para administrar toda a organização Exchange.',
      3: 'Incorreta (afirmação verdadeira): Extended Protection e AMSI são controles oficiais de endurecimento para IIS no Exchange.'
    }
  },
  {
    id: 'sarah-4-36',
    editalItemId: '4.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um ambiente com Edge Transport na DMZ, novos usuários criados no Active Directory tiveram suas mensagens externas rejeitadas pelo Edge como destinatários inexistentes. Qual mecanismo falhou e deve ser auditado?',
    options: [
      'A replicação Sysvol/DFSR entre o Edge Transport e o Witness Server da rede interna.',
      'O serviço POP3 do Mailbox Server responsável por autenticar usuários no Edge Transport.',
      'O banco de dados EDB compartilhado por iSCSI entre o Edge Transport e o servidor interno.',
      'A sincronização EdgeSync (TCP 50636) dos Mailbox Servers para a instância AD LDS do Edge.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.1. Microsoft Exchange Server. Como o Edge Transport na DMZ não ingressa no domínio AD, ele mantém uma instância local do AD LDS atualizada pelo serviço EdgeSync (porta TCP 50636) via Edge Subscription (Test-EdgeSynchronization / Start-EdgeSynchronization).',
    correctAnalysis:
      'Se novos destinatários não chegam ao Recipient Lookup do Edge Transport, a sincronização EdgeSync (TCP 50636) do Mailbox para o AD LDS está falhando ou a Edge Subscription expirou.',
    optionErrors: {
      0: 'Incorreta: DFSR replica SYSVOL entre Domain Controllers; o Edge Transport não integra o domínio AD nem fala com Witness Server.',
      1: 'Incorreta: o protocolo POP3 não participa da replicação de lista de destinatários para o Edge Transport.',
      2: 'Incorreta: o Edge Transport não hospeda nem monta arquivos .EDB de caixas postais.'
    }
  },
  {
    id: 'sarah-4-37',
    editalItemId: '4.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Antes de aplicar um Cumulative Update (CU) em um nó Exchange Mailbox Server, qual comando coloca os componentes do servidor em modo de manutenção para drenar conexões e filas sem impacto abrupto?',
    options: [
      'Remove-MailboxDatabase -Identity DB01 sem mover as caixas ativas.',
      'Disable-ExchangeCertificate na interface externa antes de reiniciar o AD.',
      'Set-ServerComponentState -Component ServerWideOffline -State Inactive -Requester Maintenance.',
      'Uninstall-TransportAgent para apagar definitivamente todos os agentes de transporte.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.1. Microsoft Exchange Server. O procedimento oficial de Maintenance Mode utiliza Set-ServerComponentState (iniciando por HubTransport em Draining e concluindo com ServerWideOffline em Inactive) para retirar o servidor de serviço de forma controlada.',
    correctAnalysis:
      'Set-ServerComponentState com State Inactive e Requester Maintenance desativa de forma limpa os componentes do servidor (após drenar HubTransport e mover bancos ativos) antes do patching.',
    optionErrors: {
      0: 'Incorreta: Remove-MailboxDatabase exclui o banco de dados de produção, não habilita manutenção.',
      1: 'Incorreta: remover ou desabilitar certificados causa falha de TLS nos clientes e não drena filas.',
      3: 'Incorreta: desinstalar agentes de transporte altera a topologia e pode quebrar fluxos de antispam/compliance.'
    }
  },

  // --- 4.2.2 (+6 -> total 7) ---
  {
    id: 'sarah-4-38',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Para permitir que equipamentos hospitalares legados (sem suporte a SMTP AUTH) enviem laudos para domínios externos via Exchange sem abrir Open Relay, qual configuração deve ser aplicada no Receive Connector dedicado?',
    options: [
      'Configurar RemoteIPRanges como 0.0.0.0-255.255.255.255 e habilitar ExternallySecured no conector padrão.',
      'Restringir RemoteIPRanges aos IPs dos equipamentos, usar AnonymousUsers e conceder Ms-Exch-SMTP-Accept-Any-Recipient.',
      'Alterar a porta do conector Default Frontend para 587 e remover a autenticação TLS de todos os clientes.',
      'Desabilitar todos os Receive Connectors existentes e encaminhar o tráfego de saída direto para a porta 143.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.2. SMTP relay. O padrão seguro para relay anônimo interno é criar um Receive Connector dedicado (FrontendTransport, porta 25), listar estritamente os IPs em RemoteIPRanges, manter AnonymousUsers e atribuir a permissão estendida Ms-Exch-SMTP-Accept-Any-Recipient via Add-ADPermission a NT AUTHORITY\\ANONYMOUS LOGON.',
    correctAnalysis:
      'Restringir RemoteIPRanges aos IPs exatos dos equipamentos combinado com Ms-Exch-SMTP-Accept-Any-Recipient permite relay externo controlado sem transformar o servidor em Open Relay.',
    optionErrors: {
      0: 'Incorreta: liberar 0.0.0.0-255.255.255.255 com ExternallySecured abre relay irrestrito para toda a internet.',
      2: 'Incorreta: equipamentos sem suporte a SMTP AUTH falharão na porta 587, e remover TLS degrada a segurança.',
      3: 'Incorreta: desabilitar conectores interrompe a recepção de e-mails e a porta 143 é do protocolo IMAP4.'
    }
  },
  {
    id: 'sarah-4-39',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No Exchange Server, qual Receive Connector padrão atende a submissão autenticada de aplicações e clientes na porta TCP 587 exigindo TLS antes da autenticação básica?',
    options: [
      'Default Frontend <Servidor> (porta TCP 25 com autenticação anônima).',
      'Outbound Proxy Frontend <Servidor> (porta TCP 717 para roteamento interno).',
      'Client Frontend <Servidor> (porta TCP 587 com BasicAuthRequireTLS e ExchangeUsers).',
      'Client Proxy <Servidor> (porta TCP 465 recebendo encaminhamentos internos na porta 2525).'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.2. SMTP relay. O conector Client Frontend <Servidor> escuta na porta TCP 587 no papel FrontendTransport, configurado para ExchangeUsers com STARTTLS obrigatório antes de aceitar credenciais em BasicAuthRequireTLS.',
    correctAnalysis:
      'Client Frontend na porta 587 é o endpoint padrão de submissão SMTP autenticada com STARTTLS obrigatório para clientes e aplicações.',
    optionErrors: {
      0: 'Incorreta: Default Frontend na porta 25 recebe tráfego SMTP anônimo de entrada de outros servidores, não submissão em 587.',
      1: 'Incorreta: Outbound Proxy Frontend (717) é usado internamente entre serviços de transporte para proxy de saída.',
      3: 'Incorreta: Client Proxy atua na camada Hub Transport interno (porta 465) recebendo conexões proxied pelo Frontend.'
    }
  },
  {
    id: 'sarah-4-40',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre permissões e limites em conectores de SMTP relay no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Habilitar ExternallySecured em um Receive Connector impõe autenticação Kerberos estrita, bloqueando qualquer relay sem validação de usuário.\n( ) Em um Send Connector configurado com Smart Host, o Exchange entrega o tráfego de saída ao gateway configurado em vez de consultar os registros MX de destino.\n( ) O parâmetro MaxInboundConnectionPerSource limita o tamanho máximo em megabytes permitido por mensagem recebida no conector.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – V.',
      'F – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.2. SMTP relay. (1) falsa: ExternallySecured confia cegamente que a conexão foi protegida externamente (ex.: IPsec ou rede isolada) e concede todas as permissões de relay sem autenticar na sessão SMTP; (2) verdadeira: Smart Host direciona toda a saída ao próximo salto fixo; (3) falsa: MaxInboundConnectionPerSource limita conexões simultâneas por IP de origem (tamanho da mensagem é MaxMessageSize).',
    correctAnalysis:
      'Gabarito: F – V – F. (1) é falsa porque ExternallySecured dispensa autenticação SMTP e abre relay amplo para os IPs aceitos; (2) é verdadeira sobre Smart Host; (3) é falsa por confundir limite de conexões por IP com MaxMessageSize.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois ExternallySecured assume segurança externa e permite relay sem autenticação SMTP.',
      1: 'Incorreta: a afirmativa (2) é verdadeira, descrevendo exatamente o roteamento via Smart Host em Send Connectors.',
      2: 'Incorreta: a afirmativa (3) é falsa, pois MaxInboundConnectionPerSource controla quantidade de conexões simultâneas por IP.'
    }
  },
  {
    id: 'sarah-4-41',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre o comportamento de relay SMTP e controles de proteção no Exchange Server, considere as afirmativas:\n\nI. Por padrão, o conector Default Frontend permite que qualquer endereço IP da internet retransmita mensagens anônimas para domínios externos.\nII. Tentativas não autorizadas de retransmissão externa recebem rejeição SMTP como "550 5.7.1 Unable to relay" ou "530 5.7.57".\nIII. No conector Client Frontend (porta 587), a opção BasicAuthRequireTLS impede o envio de credenciais antes do estabelecimento do túnel TLS.\nIV. Um Send Connector com Smart Host pode ser configurado para autenticar-se junto a um gateway de saída externo usando TLS e credenciais específicas.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I e IV estão corretas.',
      'Somente II e III estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.2. SMTP relay. II, III e IV descrevem corretamente os códigos de rejeição de relay, a proteção BasicAuthRequireTLS na porta 587 e a autenticação com Smart Host; I é falsa porque o Default Frontend bloqueia relay externo anônimo por padrão.',
    correctAnalysis:
      'Estão corretas II, III e IV; I é falsa pois o Exchange nasce protegido contra Open Relay (sem Ms-Exch-SMTP-Accept-Any-Recipient para anônimos no Default Frontend).',
    optionErrors: {
      0: 'Incorreta: inclui I (Default Frontend bloqueia relay externo anônimo por padrão) e omite IV (verdadeira).',
      2: 'Incorreta: inclui I (falsa) e omite II e III (verdadeiras).',
      3: 'Incorreta: omite IV, pois Send Connectors suportam autenticação junto a Smart Hosts.'
    }
  },
  {
    id: 'sarah-4-42',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre regras de seleção e endurecimento de conectores de SMTP relay no Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'Havendo mais de um Receive Connector na mesma porta, o Exchange escolhe aquele com a faixa RemoteIPRanges mais específica para o IP cliente.',
      'Ativar ProtocolLoggingLevel Verbose no conector registra o diálogo SMTP linha a linha para auditar tentativas e falhas de relay.',
      'O mecanismo TarpitInterval atrasa respostas SMTP após erros repetidos de autenticação ou destinatários inválidos para frear abuso.',
      'Liberar relay anônimo para 0.0.0.0-255.255.255.255 no conector Default Frontend é boa prática quando há várias filiais, evitando regras de IP.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.2. SMTP relay. A afirmação D é incorreta porque conceder relay anônimo para toda a faixa IPv4 (0.0.0.0-255.255.255.255) transforma o Exchange em Open Relay público, expondo a organização a abuso de spam e bloqueio imediato em RBLs.',
    correctAnalysis:
      'A opção D propõe uma prática crítica de insegurança (Open Relay global); A, B e C apresentam mecanismos legítimos de seleção de conector, log e tarpitting.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o Exchange seleciona o Receive Connector com a máscara/faixa de IP mais específica.',
      1: 'Incorreta (afirmação verdadeira): ProtocolLoggingLevel Verbose grava comandos e respostas SMTP detalhados.',
      2: 'Incorreta (afirmação verdadeira): TarpitInterval introduz atraso intencional para mitigar ataques de força bruta e enumeração.'
    }
  },
  {
    id: 'sarah-4-43',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os parâmetros e recursos de SMTP relay no Exchange Server às suas respectivas funções.\n\nColuna da Esquerda:\n(I) RemoteIPRanges\n(II) SmartHostAuthMechanism\n(III) MaxMessageSize\n(IV) MessageRateLimit\n\nColuna da Direita:\n(A) Define o teto de mensagens por minuto aceitas de uma mesma origem.\n(B) Restringe os endereços ou sub-redes IP autorizados a usar o conector.\n(C) Define a forma de autenticação usada pelo Send Connector no gateway de saída.\n(D) Limita o tamanho máximo individual de cada e-mail aceito no conector.\n\nAssinale a alternativa correta.',
    options: [
      'I-B, II-A, III-D, IV-C.',
      'I-C, II-B, III-D, IV-A.',
      'I-B, II-C, III-D, IV-A.',
      'I-D, II-C, III-B, IV-A.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.2. SMTP relay. RemoteIPRanges (B) filtra IPs clientes; SmartHostAuthMechanism (C) define autenticação no Smart Host; MaxMessageSize (D) limita tamanho da mensagem; e MessageRateLimit (A) controla taxa de envio por minuto.',
    correctAnalysis:
      'A associação correta é I-B (RemoteIPRanges), II-C (SmartHostAuthMechanism), III-D (MaxMessageSize) e IV-A (MessageRateLimit).',
    optionErrors: {
      0: 'Incorreta: inverte as definições de SmartHostAuthMechanism (II) e MessageRateLimit (IV).',
      1: 'Incorreta: inverte RemoteIPRanges (I) com SmartHostAuthMechanism (II).',
      3: 'Incorreta: inverte RemoteIPRanges (I) com MaxMessageSize (III).'
    }
  },

  // --- 4.2.3 (+4 no Lote 1; +2 no Lote 2 -> total 7) ---
  {
    id: 'sarah-4-44',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um Exchange Server Mailbox standalone sem servidor Edge Transport na DMZ, qual script oficial ativa os agentes nativos de antispam (Content Filter, Sender Filter, IP Block List) no servidor?',
    options: [
      'Enable-DatabaseReplication.ps1 seguido de reinício do serviço Information Store.',
      'Install-AntiSpamAgents.ps1 seguido de reinício do serviço MSExchangeTransport.',
      'Reset-OwaVirtualDirectory.ps1 seguido de execução imediata de iisreset /noforce.',
      'New-EdgeSubscription.ps1 seguido da abertura da porta TCP 993 no firewall.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.3. antispam. Por padrão, os agentes antispam são instalados no Edge Transport; para habilitá-los diretamente no Mailbox Server, executa-se & $env:ExchangeInstallPath\\Scripts\\Install-AntiSpamAgents.ps1 e reinicia-se o serviço MSExchangeTransport.',
    correctAnalysis:
      'Install-AntiSpamAgents.ps1 registra os agentes de filtragem antispam no serviço de transporte do Mailbox Server, entrando em vigor após reiniciar o MSExchangeTransport.',
    optionErrors: {
      0: 'Incorreta: replicação de banco pertence ao DAG e não instala agentes antispam de transporte.',
      2: 'Incorreta: diretórios virtuais do OWA e IIS não controlam filtros SMTP de antispam.',
      3: 'Incorreta: EdgeSubscription vincula um Edge Transport existente na DMZ, não instala agentes locais no Mailbox.'
    }
  },
  {
    id: 'sarah-4-45',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No Content Filter do Exchange Server, qual propriedade define o limite de pontuação SCL (Spam Confidence Level) a partir do qual a mensagem é redirecionada para uma caixa de quarentena corporativa antes da entrega ao usuário?',
    options: [
      'SCLJunkThreshold no Set-OrganizationConfig, enviando diretamente para a lixeira do usuário.',
      'SCLDeleteThreshold no Set-SenderFilterConfig, apagando a mensagem sem gerar relatório.',
      'SCLQuarantineThreshold no Set-ContentFilterConfig em conjunto com QuarantineMailbox.',
      'SCLRejectThreshold no Set-ReceiveConnector, devolvendo erro temporário 421 ao remetente.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.3. antispam. O Content Filter avalia a mensagem com SCL de 0 a 9; Set-ContentFilterConfig define SCLDeleteThreshold (descarte silencioso), SCLRejectThreshold (rejeição SMTP 5xx) e SCLQuarantineThreshold (encaminhamento à caixa configurada em QuarantineMailbox).',
    correctAnalysis:
      'SCLQuarantineThreshold combinado com o parâmetro QuarantineMailbox no cmdlet Set-ContentFilterConfig retém mensagens suspeitas para auditoria antes de chegarem ao destinatário.',
    optionErrors: {
      0: 'Incorreta: SCLJunkThreshold move mensagens para a pasta Lixo Eletrônico da caixa do próprio usuário, não para quarentena central.',
      1: 'Incorreta: SCLDeleteThreshold descarta silenciosamente (não coloca em quarentena) e pertence ao ContentFilterConfig.',
      3: 'Incorreta: SCLRejectThreshold pertence ao ContentFilterConfig e rejeita com erro permanente 550 5.7.1, não 421.'
    }
  },
  {
    id: 'sarah-4-46',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os agentes nativos de antispam do Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O agente Recipient Filter com RecipientValidationEnabled ativado rejeita conexões para destinatários inexistentes no diretório.\n( ) O agente Content Filter executa sua inspeção antes mesmo da transmissão do cabeçalho e corpo, ainda durante o comando HELO/EHLO.\n( ) A agregação de listas seguras (Safelist Aggregation / Update-SafeList) ajuda a reduzir falsos positivos considerando contatos confiáveis dos usuários.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.3. antispam. (1) verdadeira: RecipientValidationEnabled bloqueia e-mails para endereços inexistentes na organização; (2) falsa: Content Filter analisa cabeçalhos e corpo após o comando DATA, enquanto a filtragem inicial de IP ocorre no Connection Filtering; (3) verdadeira: Safelist Aggregation sincroniza listas seguras do Outlook para evitar falsos positivos.',
    correctAnalysis:
      'Gabarito: V – F – V. (1) e (3) estão corretas; (2) é falsa porque o Content Filter depende do conteúdo completo enviado após DATA.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira, pois RecipientValidationEnabled valida a existência do destinatário no diretório.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois Content Filter opera após o comando DATA (Connection Filtering é que atua na conexão inicial).',
      2: 'Incorreta: a afirmativa (3) é verdadeira, descrevendo corretamente o papel do Safelist Aggregation.'
    }
  },
  {
    id: 'sarah-4-47',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'E-mails de um laboratório parceiro são rejeitados na entrada com código 550 por constarem em uma DNSBL cadastrada no Exchange. O administrador adicionou o domínio em "Set-ContentFilterConfig -BypassedSenderDomains", mas os bloqueios continuam. Por quê?',
    options: [
      'O registro DNSBL só é ignorado quando o domínio parceiro também está na fila Poison Message.',
      'O Connection Filtering (IP Block List Provider) atua antes do Content Filter; é preciso liberar o IP com Add-IPAllowListEntry.',
      'O parâmetro BypassedSenderDomains exige que o servidor remoto utilize obrigatoriamente a porta POP3 995.',
      'O cmdlet Set-ContentFilterConfig só tem efeito após desativar todos os certificados TLS do IIS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.3. antispam. Na ordem dos agentes antispam do Exchange, o Connection Filtering (IP Block List / IP Block List Providers) executa antes do Content Filter. Exceções por domínio no Content Filter não evitam bloqueios feitos por IP na camada anterior; deve-se cadastrar os IPs legítimos via Add-IPAllowListEntry.',
    correctAnalysis:
      'Como o bloqueio por RBL/DNSBL ocorre no Connection Filtering (baseado em IP, antes do Content Filter), a liberação deve ser feita por IP com Add-IPAllowListEntry.',
    optionErrors: {
      0: 'Incorreta: Poison Message Queue isola mensagens que causaram falha no serviço de transporte, sem relação com exceção de DNSBL.',
      2: 'Incorreta: tráfego entre servidores de correio ocorre via SMTP (porta 25), não POP3 995.',
      3: 'Incorreta: certificados do IIS não interferem na precedência entre Connection Filtering e Content Filter.'
    }
  }
]);

