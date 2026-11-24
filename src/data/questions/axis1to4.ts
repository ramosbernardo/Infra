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
  // ==================== EXPANSÃO FASE B — EIXO 1, LOTE 1 (+26) ====================
  // --- 1.1.1 Modelo OSI e arquitetura TCP/IP (+6 -> total 7) ---
  {
    id: 'sarah-1-25',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No modelo de referência OSI (ISO/IEC 7498), qual camada é responsável pela tradução de sintaxe, codificação de caracteres, compressão e criptografia dos dados antes da entrega à camada adjacente?',
    options: [
      'Camada de Apresentação (Camada 6), atuando acima da camada de Sessão.',
      'Camada de Sessão (Camada 5), atuando acima da camada de Transporte.',
      'Camada de Aplicação (Camada 7), responsável pelo diálogo e checkpoints.',
      'Camada de Transporte (Camada 4), encarregada de portas e sintaxe ASN.1.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1.1. Modelo OSI e arquitetura TCP/IP. A Camada de Apresentação (Camada 6) trata da representação dos dados (codificação, tradução de sintaxe como ASN.1/UTF-8, compressão e criptografia). Sessão (Camada 5) controla diálogo e pontos de sincronismo (checkpoints).',
    correctAnalysis:
      'A Camada de Apresentação (Camada 6) converte formatos, comprime e cifra dados entre a camada de Aplicação (7) e a de Sessão (5).',
    optionErrors: {
      1: 'Incorreta: a Camada de Sessão (5) estabelece, gerencia e sincroniza o diálogo entre aplicações, sem atuar na sintaxe/codificação.',
      2: 'Incorreta: controle de diálogo e checkpoints pertencem à Camada de Sessão (5), enquanto Aplicação (7) fornece serviços ao usuário.',
      3: 'Incorreta: a Camada de Transporte (4) realiza entrega fim a fim e multiplexação por portas, não tratando tradução de sintaxe ASN.1.'
    }
  },
  {
    id: 'sarah-1-26',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as camadas da arquitetura TCP/IP (RFC 1122) à esquerda às suas respectivas equivalências no modelo OSI e funções à direita:\n\nColuna da Esquerda:\n(I) Acesso à Rede (Link)\n(II) Internet\n(III) Transporte\n(IV) Aplicação\n\nColuna da Direita:\n(A) Equivale às camadas 5, 6 e 7 do OSI, operando protocolos como DNS, HTTP e SMTP.\n(B) Equivale às camadas 1 e 2 do OSI, encapsulando quadros e tratando endereços MAC.\n(C) Equivale à camada 4 do OSI, usando segmentos/datagramas e portas lógicas.\n(D) Equivale à camada 3 do OSI, roteando pacotes IP sem garantia de entrega.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-D, II-B, III-C, IV-A.',
      'I-B, II-D, III-C, IV-A.',
      'I-B, II-C, III-D, IV-A.',
      'I-A, II-D, III-C, IV-B.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1.1. Modelo OSI e arquitetura TCP/IP. Acesso à Rede corresponde às camadas 1 e 2 OSI (B); Internet equivale à camada 3 OSI (D); Transporte equivale à camada 4 OSI (C); e Aplicação reúne as camadas 5, 6 e 7 do modelo OSI (A).',
    correctAnalysis:
      'A associação exata entre TCP/IP e OSI é I-B, II-D, III-C e IV-A.',
    optionErrors: {
      0: 'Incorreta: inverte Acesso à Rede (I) com a camada Internet (II).',
      2: 'Incorreta: inverte a camada Internet (II) com a camada de Transporte (III).',
      3: 'Incorreta: inverte Acesso à Rede (I) com a camada de Aplicação (IV).'
    }
  },
  {
    id: 'sarah-1-27',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre o processo de encapsulamento e desencapsulamento na pilha TCP/IP entre hosts separados por roteadores, assinale a afirmação INCORRETA.',
    options: [
      'Na origem, a camada de Enlace adiciona cabeçalho com MACs e trailer FCS (CRC-32) ao redor do pacote IP.',
      'Ao atravessar um roteador intermediário, o quadro de enlace é desencapsulado e substituído por outro.',
      'Na camada de Transporte, os dados recebem cabeçalho TCP ou UDP identificando portas de origem e destino.',
      'Na recepção final (bottom-up), a camada de Rede valida o FCS de camada 2 antes de enviar ao Transporte.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1.1. Modelo OSI e arquitetura TCP/IP. Na recepção (bottom-up), quem valida o trailer FCS (Frame Check Sequence) e remove o cabeçalho/trailer de camada 2 é a própria camada de Enlace (interface de rede), entregando apenas o pacote IP desencapsulado à camada de Rede.',
    correctAnalysis:
      'A alternativa D é incorreta porque a validação do FCS e a remoção da moldura Ethernet ocorrem na camada de Enlace, não na camada de Rede.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a camada de Enlace é a única que acrescenta cabeçalho e trailer (FCS) ao redor do pacote L3.',
      1: 'Incorreta (afirmação verdadeira): roteadores removem o quadro L2 do enlace de entrada e criam um novo quadro L2 para o próximo salto.',
      2: 'Incorreta (afirmação verdadeira): o cabeçalho de transporte (TCP ou UDP) encapsula os dados com as portas de origem e destino.'
    }
  },
  {
    id: 'sarah-1-28',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre o posicionamento de protocolos nas arquiteturas OSI e TCP/IP:\n\nI. O protocolo ICMP é encapsulado diretamente no datagrama IP (campo Protocolo = 1), sendo por isso classificado na camada de Transporte do modelo TCP/IP.\nII. Protocolos como HTTP, DNS e SNMP atuam na camada de Aplicação do modelo TCP/IP, utilizando serviços das camadas subjacentes.\nIII. O protocolo ARP é encapsulado diretamente em quadros Ethernet (EtherType 0x0806) e suas requisições são enviadas em unicast ao MAC do gateway padrão.\nIV. Na arquitetura OSI, a camada de Enlace (Camada 2) é subdividida nas subcamadas LLC (Controle de Enlace Lógico) e MAC (Controle de Acesso ao Meio).\n\nAssinale a alternativa correta.',
    options: [
      'Somente II e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1.1. Modelo OSI e arquitetura TCP/IP. II e IV são verdadeiras. I é falsa porque, embora encapsulado no IP (Protocolo = 1), o ICMP pertence à camada Internet (Camada de Rede no OSI), e não à camada de Transporte. III é falsa porque o ARP Request é enviado em broadcast Ethernet (FF:FF:FF:FF:FF:FF), e não em unicast ao gateway padrão.',
    correctAnalysis:
      'Gabarito: Somente II e IV estão corretas. ICMP pertence à camada Internet/Rede (não Transporte) e requisições ARP utilizam broadcast L2 (FF:FF:FF:FF:FF:FF) para descobrir o MAC desconhecido.',
    optionErrors: {
      1: 'Incorreta: I e III são falsas (ICMP pertence à camada Internet/Rede e o ARP Request é enviado em broadcast Ethernet, não em unicast).',
      2: 'Incorreta: inclui III, que erra ao afirmar que requisições ARP são enviadas em unicast ao MAC do gateway padrão.',
      3: 'Incorreta: inclui I, que classifica erroneamente o ICMP na camada de Transporte em vez da camada Internet/Rede.'
    }
  },
  {
    id: 'sarah-1-29',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre as Unidades de Dados de Protocolo (PDUs) no encapsulamento OSI:\n\nNa camada de Transporte operando com TCP, a PDU é denominada _____; ao descer para a camada de Rede (Internet), passa a ser encapsulada em um _____; e na camada de Enlace, antes da conversão em bits no meio físico, forma um _____.',
    options: [
      'datagrama / quadro / pacote',
      'pacote / segmento / quadro',
      'segmento / pacote / quadro',
      'segmento / quadro / pacote'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1.1. Modelo OSI e arquitetura TCP/IP. A sequência clássica de PDUs de cima para baixo é: Dados (Aplicação/Apresentação/Sessão) -> Segmento TCP ou Datagrama UDP (Transporte, L4) -> Pacote (Rede, L3) -> Quadro (Enlace, L2) -> Bits (Física, L1).',
    correctAnalysis:
      'Respectivamente: segmento (Transporte/TCP), pacote (Rede/IP) e quadro (Enlace/Ethernet).',
    optionErrors: {
      0: 'Incorreta: datagrama refere-se ao UDP (não TCP) e inverte quadro (L2) com pacote (L3).',
      1: 'Incorreta: inverte pacote (L3) com segmento (L4).',
      3: 'Incorreta: inverte quadro (L2) com pacote (L3).'
    }
  },
  {
    id: 'sarah-1-30',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um host corporativo mantém link físico UP (1 Gbps Full-Duplex), registra seu MAC no switch local e responde a "ping" tanto para o gateway padrão quanto para servidores externos por endereço IP (1.1.1.1), mas falha ao acessar sistemas usando FQDN (intranet.hospital.local). Pela arquitetura TCP/IP, onde se localiza a falha mais provável?',
    options: [
      'Na camada de Enlace (Camada 2), por erro na validação de FCS dos quadros Ethernet.',
      'Na camada de Aplicação (Camada 7 OSI), envolvendo a resolução de nomes DNS.',
      'Na camada de Acesso à Rede, por incompatibilidade na negociação Full-Duplex.',
      'Na camada de Internet (Camada 3), por ausência de rota padrão para rede externa.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1.1. Modelo OSI e arquitetura TCP/IP. Como há conectividade IP fim a fim (inclusive externa via 1.1.1.1), as camadas Física, Enlace e Internet estão funcionais; o erro exclusivo em FQDNs aponta para resolução DNS na camada de Aplicação.',
    correctAnalysis:
      'O sucesso do ICMP por IP externo comprova as camadas inferiores (1 a 3); falhar apenas ao usar nomes FQDN aponta falha no serviço DNS (Camada de Aplicação).',
    optionErrors: {
      0: 'Incorreta: falhas de FCS na camada 2 impediriam inclusive o tráfego ICMP com o gateway e com 1.1.1.1.',
      2: 'Incorreta: incompatibilidade de duplex derrubaria ou degradaria severamente todos os testes por IP.',
      3: 'Incorreta: o alcance bem-sucedido ao IP externo 1.1.1.1 prova que a rota padrão em camada 3 está operacional.'
    }
  },

  // --- 1.1.2 Endereçamento IPv4/IPv6 e sub-redes (+4 -> total 7) ---
  {
    id: 'sarah-1-31',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma estação recebeu o endereço IPv4 172.20.14.138 com máscara /27 (255.255.255.224). Quais são, respectivamente, o endereço de rede, o último endereço válido para host e o endereço de broadcast dessa sub-rede?',
    options: [
      'Rede 172.20.14.128, último host 172.20.14.142 e broadcast 172.20.14.143.',
      'Rede 172.20.14.96, último host 172.20.14.158 e broadcast 172.20.14.159.',
      'Rede 172.20.14.128, último host 172.20.14.158 e broadcast 172.20.14.159.',
      'Rede 172.20.14.128, último host 172.20.14.190 e broadcast 172.20.14.191.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1.2. Endereçamento IPv4/IPv6 e sub-redes. Em /27 (255.255.255.224), restam 5 bits de host, gerando blocos de tamanho 256 - 224 = 32 no último octeto (0, 32, 64, 96, 128, 160...). O IP .138 pertence ao bloco 128–159: rede .128, primeiro host .129, último host .158 e broadcast .159.',
    correctAnalysis:
      'O salto de sub-rede do /27 é 32: o bloco que contém .138 inicia em 172.20.14.128, tem último IP útil .158 e broadcast .159.',
    optionErrors: {
      0: 'Incorreta: tamanho de bloco 16 (.128 a .143) corresponde à máscara /28 (255.255.255.240), não /27.',
      1: 'Incorreta: .96 inicia o bloco anterior (.96 a .127), que não contém o endereço .138.',
      3: 'Incorreta: tamanho de bloco 64 (.128 a .191) corresponde à máscara /26 (255.255.255.192), não /27.'
    }
  },
  {
    id: 'sarah-1-32',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'O núcleo de um hospital utiliza o bloco IPv4 10.48.12.0/22. Qual é a máscara em notação decimal pontuada, a quantidade máxima de endereços válidos para hosts e o endereço de broadcast desse bloco?',
    options: [
      'Máscara 255.255.252.0, 1.022 hosts válidos e broadcast 10.48.15.255.',
      'Máscara 255.255.254.0, 510 hosts válidos e broadcast 10.48.13.255.',
      'Máscara 255.255.248.0, 2.046 hosts válidos e broadcast 10.48.15.255.',
      'Máscara 255.255.252.0, 1.024 hosts válidos e broadcast 10.48.16.255.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1.2. Endereçamento IPv4/IPv6 e sub-redes. O prefixo /22 equivale a 255.255.252.0 (salto de 4 no terceiro octeto: 10.48.12.0 a 10.48.15.255). Com 10 bits de host (32 - 22), há 2^10 - 2 = 1.022 endereços utilizáveis e broadcast em 10.48.15.255.',
    correctAnalysis:
      'Um /22 possui máscara 255.255.252.0, cobre 4 redes /24 (12 a 15), disponibilizando 1.022 hosts válidos e broadcast em 10.48.15.255.',
    optionErrors: {
      1: 'Incorreta: máscara 255.255.254.0 e 510 hosts válidos pertencem ao prefixo /23.',
      2: 'Incorreta: máscara 255.255.248.0 e 2.046 hosts válidos pertencem ao prefixo /21.',
      3: 'Incorreta: 1.024 não desconta rede e broadcast, e 10.48.16.0 já inicia o próximo bloco /22.'
    }
  },
  {
    id: 'sarah-1-33',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre faixas especiais IPv4 e notação IPv6, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O bloco 100.64.0.0/10 (RFC 6598) é reservado para endereçamento compartilhado em ambientes Carrier-Grade NAT (CGNAT).\n( ) O endereço IPv4 172.32.10.5 integra a faixa privada RFC 1918 definida pelo prefixo 172.16.0.0/12.\n( ) Na notação IPv6 abreviada, o operador "::" pode ser empregado duas vezes no mesmo endereço para suprimir blocos não contíguos de zeros.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – V – F.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1.2. Endereçamento IPv4/IPv6 e sub-redes. (1) verdadeira: 100.64.0.0/10 é o espaço compartilhado CGNAT da RFC 6598; (2) falsa: o bloco privado 172.16.0.0/12 encerra em 172.31.255.255 (172.32.x.x já é público); (3) falsa: "::" só pode aparecer no máximo uma vez por endereço IPv6.',
    correctAnalysis:
      'Gabarito: V – F – F. Verdadeira(s): (1). (2) é falsa porque 172.32.10.5 está fora de 172.16.0.0/12. (3) é falsa porque dois "::" tornariam ambíguo quantos hextetos zerados foram comprimidos.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira, pois 100.64.0.0/10 é reservado ao CGNAT (RFC 6598).',
      1: 'Incorreta: a afirmativa (2) é falsa, pois a faixa privada /12 termina em 172.31.255.255.',
      2: 'Incorreta: a afirmativa (3) é falsa, pois a RFC 5952/4291 proíbe mais de uma ocorrência de "::".'
    }
  },
  {
    id: 'sarah-1-34',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre endereçamento e autoconfiguração em redes IPv4 e IPv6:\n\nI. Em redes IPv6, um endereço Anycast pode ser atribuído a múltiplos nós distintos, entregando os pacotes ao nó topologicamente mais próximo.\nII. Em sub-redes IPv6 locais (LAN), a autoconfiguração SLAAC (RFC 4862) utiliza o prefixo padrão /96 para compor o identificador de interface.\nIII. O bloco IPv4 169.254.0.0/16 (APIPA) é roteado normalmente pelos roteadores corporativos para alcançar servidores DHCP em outras VLANs.\nIV. Em uma rede IPv6, toda interface habilitada recebe um endereço Link-Local derivado do prefixo fe80::/10 para comunicação no enlace.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1.2. Endereçamento IPv4/IPv6 e sub-redes. I e IV estão corretas. II é falsa porque o SLAAC exige prefixo /64 (com 64 bits de Interface ID); III é falsa porque endereços APIPA (169.254.0.0/16) têm escopo apenas local do enlace e não são roteados entre VLANs.',
    correctAnalysis:
      'Gabarito: Somente I e IV estão corretas. Anycast entrega ao nó mais próximo pelo roteamento e interfaces IPv6 usam fe80::/10 localmente; SLAAC usa /64 (não /96) e APIPA não é roteável.',
    optionErrors: {
      0: 'Incorreta: II é falsa, pois o prefixo padrão de LAN para SLAAC é /64 (e não /96).',
      1: 'Incorreta: II e III são falsas (SLAAC usa /64 e APIPA 169.254.0.0/16 não é roteável).',
      3: 'Incorreta: inclui III, que erra ao afirmar que endereços APIPA são roteáveis entre VLANs.'
    }
  },

  // --- 1.1.3 Redes locais e de longa distância (LAN, WAN e MPLS) (+6 -> total 7) ---
  {
    id: 'sarah-1-35',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No cabeçalho shim MPLS de 32 bits inserido entre as camadas 2 e 3, qual é a distribuição exata dos seus quatro campos (Rótulo/Label, Classe de Tráfego TC/EXP, Bottom of Stack S e TTL)?',
    options: [
      'Label com 20 bits, TC/EXP com 3 bits, bit S com 1 bit e TTL com 8 bits.',
      'Label com 16 bits, TC/EXP com 6 bits, bit S com 2 bits e TTL com 8 bits.',
      'Label com 24 bits, TC/EXP com 3 bits, bit S com 1 bit e TTL com 4 bits.',
      'Label com 12 bits, TC/EXP com 8 bits, bit S com 4 bits e TTL com 8 bits.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1.3. Redes locais e de longa distância (LAN, WAN e MPLS). Conforme a RFC 3032/5462, o cabeçalho MPLS de 32 bits contém: 20 bits para o Label, 3 bits para Traffic Class (TC, antigo EXP) usado em QoS, 1 bit S (Bottom of Stack) e 8 bits de TTL.',
    correctAnalysis:
      'A soma exata dos campos no shim MPLS de 32 bits é 20 (Label) + 3 (TC/EXP) + 1 (S) + 8 (TTL) = 32 bits.',
    optionErrors: {
      1: 'Incorreta: o Label MPLS possui 20 bits (não 16), TC tem 3 bits (não 6) e o indicador S tem apenas 1 bit.',
      2: 'Incorreta: 24 bits refere-se ao VNI VXLAN; no MPLS o Label tem 20 bits e o TTL mantém 8 bits completos.',
      3: 'Incorreta: 12 bits refere-se ao VID 802.1Q; o Label MPLS tem 20 bits e S possui 1 bit.'
    }
  },
  {
    id: 'sarah-1-36',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre características de redes LAN, WAN e MPLS, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Um Label Switched Path (LSP) no MPLS é naturalmente bidirecional, usando o mesmo par de rótulos para tráfego de ida e de retorno entre dois LERs.\n( ) Redes LAN operam sob domínio administrativo próprio da organização, tipicamente sobre Ethernet ou Wi-Fi, com baixa latência e altas taxas.\n( ) No transporte MPLS, o roteador de núcleo LSR (P) realiza consulta completa na tabela de rotas IP (FIB) de cada cliente a cada salto para trocar o rótulo.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1.3. Redes locais e de longa distância (LAN, WAN e MPLS). (1) falsa: um LSP é unidirecional, exigindo dois LSPs distintos para tráfego de ida e volta; (2) verdadeira: LANs cobrem áreas locais sob controle da própria instituição; (3) falsa: o LSR do núcleo comuta exclusivamente pela tabela de rótulos (LFIB), sem consultar a FIB IP de clientes.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa é verdadeira; LSPs são unidirecionais e roteadores P do núcleo encaminham apenas por rótulos.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois os túneis LSP no MPLS são unidirecionais.',
      2: 'Incorreta: a afirmativa (2) é verdadeira quanto ao escopo administrativo, meios e desempenho das LANs.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois LSRs de núcleo operam em BGP-free core consultando apenas rótulos.'
    }
  },
  {
    id: 'sarah-1-37',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos e protocolos da arquitetura MPLS WAN à esquerda com suas funções à direita:\n\nColuna da Esquerda:\n(I) LER (Label Edge Router / PE)\n(II) LSR (Label Switch Router / P)\n(III) LDP (Label Distribution Protocol)\n(IV) VRF (Virtual Routing and Forwarding)\n\nColuna da Direita:\n(A) Tabela de roteamento virtual isolada por cliente/serviço no roteador PE em MPLS L3VPN.\n(B) Roteador de núcleo da operadora que encaminha pacotes executando troca de rótulos (SWAP).\n(C) Roteador de borda que impõe rótulos na entrada (PUSH) e os remove na saída (POP).\n(D) Protocolo que distribui e associa rótulos a prefixos FEC utilizando a porta TCP/UDP 646.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-B, II-C, III-D, IV-A.',
      'I-C, II-B, III-A, IV-D.',
      'I-C, II-D, III-B, IV-A.',
      'I-C, II-B, III-D, IV-A.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1.3. Redes locais e de longa distância (LAN, WAN e MPLS). LER/PE executa PUSH e POP nas bordas (C); LSR/P executa SWAP no núcleo (B); LDP sinaliza rótulos na porta 646 (D); e VRF isola tabelas de roteamento por cliente (A).',
    correctAnalysis:
      'A correspondência exata é I-C, II-B, III-D e IV-A.',
    optionErrors: {
      0: 'Incorreta: inverte as funções de borda (LER) e núcleo (LSR).',
      1: 'Incorreta: inverte o protocolo LDP (III) com a instância VRF (IV).',
      2: 'Incorreta: atribui o protocolo LDP ao LSR e o encaminhamento SWAP ao LDP.'
    }
  },
  {
    id: 'sarah-1-38',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma operadora atende duas instituições distintas em MPLS L3VPN que utilizam o mesmo bloco 10.10.0.0/24 em suas LANs internas. Qual mecanismo no roteador PE garante o isolamento sem conflito de rotas no backbone?',
    options: [
      'Aplicação de NAT estático obrigatório em todos os roteadores de núcleo LSR (P).',
      'Uso do campo CoS/EXP de 3 bits no cabeçalho MPLS para separar o endereçamento.',
      'Instâncias VRF isoladas associadas a Route Distinguishers (RD) no MP-BGP.',
      'Desativação do bit Bottom of Stack (S) permitindo rotas sobrepostas no núcleo.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1.3. Redes locais e de longa distância (LAN, WAN e MPLS). Cada cliente conecta-se a uma VRF própria no roteador PE; o Route Distinguisher (RD) transforma prefixos IPv4 idênticos em prefixos VPNv4 únicos anunciados via MP-BGP entre PEs, isolando o tráfego com rótulos de serviço internos.',
    correctAnalysis:
      'O uso combinado de VRFs por cliente e Route Distinguishers (RD) no MP-BGP torna únicas as rotas sobrepostas no plano de controle da operadora.',
    optionErrors: {
      0: 'Incorreta: roteadores P do núcleo nem sequer inspecionam IPs de clientes nem aplicam NAT.',
      1: 'Incorreta: os 3 bits TC/EXP destinam-se exclusivamente à priorização QoS, nunca a isolamento de clientes.',
      3: 'Incorreta: o bit S apenas marca a base da pilha de rótulos MPLS, sem função de desambiguação de prefixos IP.'
    }
  },
  {
    id: 'sarah-1-39',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre tecnologias WAN, MPLS e SD-WAN na interconexão de unidades:\n\nI. Em uma rede SD-WAN, o plano de controle permanece acoplado localmente a cada roteador de borda sem orquestração centralizada de políticas.\nII. O Penultimate Hop Popping (PHP) permite que o penúltimo roteador LSR remova o rótulo de transporte externo, evitando dupla consulta no LER de saída.\nIII. A arquitetura SD-WAN permite combinar links MPLS privados e enlaces de banda larga com seleção dinâmica de caminho conforme SLA e aplicação.\nIV. O protocolo RSVP-TE em MPLS é restrito ao encaminhamento pelo menor número de saltos IGP, sem suporte a reserva de banda para Engenharia de Tráfego.\n\nAssinale a alternativa correta.',
    options: [
      'Somente II e III estão corretas.',
      'Somente I e II estão corretas.',
      'Somente III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1.3. Redes locais e de longa distância (LAN, WAN e MPLS). II e III estão corretas. I é falsa porque a essência do SD-WAN é desacoplar e centralizar o plano de controle/políticas em um orquestrador; IV é falsa porque o RSVP-TE existe justamente para reserva de banda e caminhos explícitos de Engenharia de Tráfego (MPLS-TE).',
    correctAnalysis:
      'Gabarito: Somente II e III estão corretas. PHP otimiza o LER de saída removendo o rótulo de transporte um salto antes, e SD-WAN orquestra múltiplos enlaces WAN por SLA.',
    optionErrors: {
      1: 'Incorreta: I é falsa porque SD-WAN utiliza plano de controle centralizado/orquestrado.',
      2: 'Incorreta: IV é falsa porque RSVP-TE implementa caminhos explícitos e reserva de banda em MPLS-TE.',
      3: 'Incorreta: inclui I, contradizendo o princípio centralizado do SD-WAN.'
    }
  },
  {
    id: 'sarah-1-40',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre o encaminhamento de pacotes em redes MPLS:\n\nNa arquitetura MPLS, os pacotes percorrem um caminho unidirecional chamado _____; a prioridade de QoS é marcada no campo de 3 bits denominado _____; e, ao empilhar múltiplos rótulos (como em L3VPN), o bit _____ igual a 1 identifica o último rótulo antes do cabeçalho IP.',
    options: [
      'VRF / TTL / S',
      'LSP / TC / S',
      'LDP / CoS / M',
      'LSP / VID / S'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1.3. Redes locais e de longa distância (LAN, WAN e MPLS). O caminho unidirecional é o LSP (Label Switched Path); o campo de QoS de 3 bits é o TC (Traffic Class, anteriormente EXP); e o bit S (Bottom of Stack) igual a 1 indica o último rótulo da pilha.',
    correctAnalysis:
      'A sequência correta é LSP (caminho unidirecional), TC (campo de 3 bits de QoS) e S (bit Bottom of Stack).',
    optionErrors: {
      0: 'Incorreta: VRF é tabela de roteamento isolada (não caminho) e TTL de 8 bits controla tempo de vida (não QoS).',
      2: 'Incorreta: LDP é o protocolo de sinalização, CoS pertence à tag Ethernet 802.1Q e o bit da pilha é S.',
      3: 'Incorreta: VID é o identificador de VLAN de 12 bits do padrão Ethernet 802.1Q.'
    }
  },

  // --- 1.1.4 Noções de roteamento e comutação (+5 -> total 7) ---
  {
    id: 'sarah-1-41',
    editalItemId: '1.1.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma estação (MAC AA:AA, IP 10.1.1.10) envia um pacote ao servidor (MAC BB:BB, IP 10.2.2.20) passando por dois roteadores intermediários, sem NAT. Ao sair do segundo roteador rumo ao servidor, o que ocorreu com os endereços e com o campo TTL?',
    options: [
      'Os IPs e MACs originais permanecem intactos e o TTL segue inalterado nos saltos.',
      'Os IPs são reescritos a cada salto e os MACs originais seguem intactos até o fim.',
      'Os IPs permanecem intactos, os MACs são reescritos no enlace e o TTL cai em 2.',
      'Os MACs permanecem intactos na WAN e apenas o IP de origem é trocado pelo gateway.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1.4. Noções de roteamento e comutação. Sem NAT, os IPs de origem e destino permanecem inalterados fim a fim; os endereços MAC têm escopo local ao enlace e são substituídos a cada salto; e cada roteador decrementa o TTL IPv4 em 1 (total de 2 após dois roteadores).',
    correctAnalysis:
      'Ao cruzar dois roteadores sem NAT, os IPs origem/destino mantêm-se, os MACs de L2 mudam em cada segmento e o TTL reduz-se em 1 por roteador (cai em 2).',
    optionErrors: {
      0: 'Incorreta: MACs mudam a cada segmento L2 e cada roteador decrementa o TTL em 1.',
      1: 'Incorreta: inverte exatamente o comportamento de camada 3 (IP preservado sem NAT) e camada 2 (MAC reescrito por salto).',
      3: 'Incorreta: sem NAT, o gateway não substitui o IP de origem, e os MACs mudam obrigatoriamente a cada enlace.'
    }
  },
  {
    id: 'sarah-1-42',
    editalItemId: '1.1.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre princípios de comutação Ethernet em switches Layer 2, assinale a afirmação INCORRETA.',
    options: [
      'No método Store-and-Forward, o switch lê o quadro inteiro e valida o FCS antes de encaminhá-lo.',
      'Entradas dinâmicas na tabela MAC têm aging time e são removidas quando não há tráfego da origem.',
      'Cada porta de switch em Full-Duplex forma um domínio de colisão isolado, eliminando colisões L2.',
      'No método Cut-Through, o switch valida o trailer FCS no fim do quadro antes de iniciar o reenvio.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1.4. Noções de roteamento e comutação. No método Cut-Through, o switch lê apenas o endereço MAC de destino no início do quadro e começa a transmiti-lo imediatamente pela porta de saída, sem aguardar o fim do quadro nem validar o FCS (característica do Store-and-Forward).',
    correctAnalysis:
      'A alternativa D é incorreta porque descreve o comportamento do Store-and-Forward atribuindo-o ao Cut-Through.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Store-and-Forward armazena todo o quadro e descarta quadros com erro de CRC/FCS.',
      1: 'Incorreta (afirmação verdadeira): a tabela CAM expira entradas inativas após o aging time padrão (ex.: 300s).',
      2: 'Incorreta (afirmação verdadeira): em portas Full-Duplex de switch não ocorrem colisões CSMA/CD entre hosts.'
    }
  },
  {
    id: 'sarah-1-43',
    editalItemId: '1.1.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na seleção de fontes de roteamento em roteadores IP, relacione a origem da rota à sua Distância Administrativa (AD) padrão típica:\n\nColuna da Esquerda:\n(I) Interface diretamente conectada\n(II) Rota estática\n(III) eBGP (BGP externo)\n(IV) OSPF\n\nColuna da Direita:\n(A) 110\n(B) 1\n(C) 0\n(D) 20\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-C, II-B, III-D, IV-A.',
      'I-B, II-C, III-D, IV-A.',
      'I-C, II-B, III-A, IV-D.',
      'I-C, II-D, III-B, IV-A.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1.4. Noções de roteamento e comutação. Os valores clássicos de Distância Administrativa são: Conectada = 0 (C), Estática = 1 (B), eBGP = 20 (D), EIGRP = 90, OSPF = 110 (A), IS-IS = 115, RIP = 120 e iBGP = 200.',
    correctAnalysis:
      'A correspondência correta é I-C (0), II-B (1), III-D (20) e IV-A (110).',
    optionErrors: {
      1: 'Incorreta: inverte rota conectada (0) com rota estática (1).',
      2: 'Incorreta: inverte eBGP (20) com OSPF (110).',
      3: 'Incorreta: atribui AD 20 à rota estática e AD 1 ao eBGP.'
    }
  },
  {
    id: 'sarah-1-44',
    editalItemId: '1.1.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre critérios de roteamento estático e dinâmico em redes IP:\n\nI. A rota padrão IPv4 (0.0.0.0/0) é utilizada quando nenhum prefixo mais específico da tabela de roteamento casa com o endereço de destino.\nII. Quando há empate de prefixo exato entre protocolos distintos, o roteador compara diretamente as métricas numéricas antes da Distância Administrativa.\nIII. O roteamento estático não consome banda com anúncios periódicos de topologia, sendo adequado para redes stub e caminhos determinísticos.\nIV. Em uma mesma tabela de roteamento, rotas aprendidas via iBGP possuem preferência padrão (AD 20) superior às rotas eBGP (AD 200).\n\nAssinale a alternativa correta.',
    options: [
      'Somente II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1.4. Noções de roteamento e comutação. I e III são verdadeiras. II é falsa porque a Distância Administrativa desempata fontes diferentes para o mesmo prefixo antes de qualquer comparação de métrica (métricas de protocolos distintos não são comparáveis). IV é falsa porque eBGP tem AD 20 e iBGP tem AD 200.',
    correctAnalysis:
      'Gabarito: Somente I e III estão corretas. A rota 0.0.0.0/0 é o último recurso pelo Longest Prefix Match e rotas estáticas não geram overhead de protocolo; AD vem antes da métrica e eBGP (20) prefere sobre iBGP (200).',
    optionErrors: {
      0: 'Incorreta: II e IV são falsas quanto à precedência da AD e aos valores de eBGP/iBGP.',
      1: 'Incorreta: inclui II, que inverte a ordem entre Distância Administrativa e métrica.',
      3: 'Incorreta: inclui IV, que inverte as Distâncias Administrativas de eBGP (20) e iBGP (200).'
    }
  },
  {
    id: 'sarah-1-45',
    editalItemId: '1.1.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre encaminhamento IP, ARP e tratamento de TTL entre hosts, switches e roteadores, assinale (V) para verdadeira e (F) para falsa.\n\n( ) Quando um host envia um pacote para um IP em outra sub-rede, o quadro Ethernet é endereçado ao MAC do gateway padrão, obtido via ARP.\n( ) Ao receber um pacote IP cujo TTL atinja 0 após o decremento, o roteador descarta o pacote e envia ICMP Time Exceeded à origem.\n( ) Um switch Layer 2 decrementa o campo TTL do pacote IP a cada quadro comutado entre portas de acesso da mesma VLAN.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – V – F.',
      'V – F – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1.4. Noções de roteamento e comutação. (1) verdadeira: para destinos remotos, o host resolve o MAC do gateway local via ARP; (2) verdadeira: TTL expirado gera descarte e ICMP Type 11 (Time Exceeded), base do traceroute; (3) falsa: switches L2 não decrementam TTL do cabeçalho IP.',
    correctAnalysis:
      'Gabarito: V – V – F. As duas primeiras afirmações descrevem corretamente ARP para o gateway e expiração de TTL no roteador; switches L2 não alteram o TTL.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira, pois quadros para outra sub-rede sempre vão ao MAC do gateway.',
      2: 'Incorreta: a afirmativa (2) é verdadeira, pois TTL=0 dispara ICMP Time Exceeded ao remetente.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois switches L2 operam apenas pelo cabeçalho Ethernet sem decrementar TTL IP.'
    }
  },

  // --- 1.2.1 TCP/IP (+5 -> total 7) ---
  {
    id: 'sarah-1-46',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na transferência de grandes imagens médicas por TCP sobre um enlace WAN de 1 Gbps e 80 ms de RTT, a vazão estagna abaixo de 7 Mbps mesmo sem perda de pacotes. Analisando o cabeçalho TCP (janela máxima padrão de 65.535 bytes), qual mecanismo resolve esse gargalo?',
    options: [
      'Habilitação da opção TCP Window Scaling (RFC 7323) durante o handshake.',
      'Substituição do algoritmo Nagle por redução fixa do MSS para 536 bytes.',
      'Desativação de ACKs seletivos (SACK) reduzindo os números de sequência.',
      'Ativação do flag PSH nos segmentos para ignorar o limite de janela TCP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.1. TCP/IP. Sem Window Scaling, o campo Window Size de 16 bits limita dados em voo a 65.535 bytes por RTT (65.535 × 8 / 0,08 s ≈ 6,55 Mbps). A opção TCP Window Scaling (RFC 7323), negociada no SYN/SYN-ACK, aplica fator de escala para aproveitar todo o Produto Banda-Atraso (BDP).',
    correctAnalysis:
      'O gargalo decorre do limite de 64 KB no campo Window Size de 16 bits frente ao alto BDP (1 Gbps × 80 ms); o Window Scaling (RFC 7323) multiplica a janela efetiva.',
    optionErrors: {
      1: 'Incorreta: reduzir o MSS para 536 bytes aumenta o overhead de cabeçalhos e piora ainda mais o throughput.',
      2: 'Incorreta: SACK otimiza retransmissões após perdas; desativá-lo não expande o limite de 64 KB da janela TCP.',
      3: 'Incorreta: o flag PSH apenas solicita entrega imediata ao buffer da aplicação, nunca anula a janela deslizante.'
    }
  },
  {
    id: 'sarah-1-47',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os protocolos da suíte TCP/IP à esquerda às suas portas padrão e protocolos de transporte à direita:\n\nColuna da Esquerda:\n(I) TFTP\n(II) SSH\n(III) SNMP (consultas e traps)\n(IV) NTP\n\nColuna da Direita:\n(A) UDP 123\n(B) TCP 22\n(C) UDP 69\n(D) UDP 161 e UDP 162\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-B, II-C, III-D, IV-A.',
      'I-C, II-B, III-D, IV-A.',
      'I-C, II-D, III-B, IV-A.',
      'I-A, II-B, III-D, IV-C.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.1. TCP/IP. TFTP utiliza UDP 69 (C); SSH utiliza TCP 22 (B); SNMP utiliza UDP 161 para consultas GET/SET e UDP 162 para traps (D); e NTP utiliza UDP 123 (A).',
    correctAnalysis:
      'A associação correta é I-C (TFTP/UDP 69), II-B (SSH/TCP 22), III-D (SNMP/UDP 161-162) e IV-A (NTP/UDP 123).',
    optionErrors: {
      0: 'Incorreta: inverte TFTP (UDP 69) com SSH (TCP 22).',
      2: 'Incorreta: atribui UDP 161/162 ao SSH e TCP 22 ao SNMP.',
      3: 'Incorreta: inverte TFTP (UDP 69) com NTP (UDP 123).'
    }
  },
  {
    id: 'sarah-1-48',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os protocolos IP, IGMP e identificação de sessões na arquitetura TCP/IP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O protocolo IP oferece entrega sem conexão do tipo best-effort, podendo fragmentar pacotes caso excedam o MTU do enlace e o bit DF seja 0.\n( ) O protocolo IGMP é encapsulado diretamente no IP (protocolo 2) e é utilizado por hosts IPv6 para aderir a grupos multicast no enlace local.\n( ) Uma conexão TCP é identificada univocamente pela 5-tupla: protocolo, IP de origem, porta de origem, IP de destino e porta de destino.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.1. TCP/IP. (1) verdadeira: o IP é best-effort sem conexão e fragmenta pacotes quando DF=0; (2) falsa: o IGMP (Protocolo IP 2) atua exclusivamente em redes IPv4 — no IPv6, a adesão a grupos multicast locais é realizada pelo protocolo MLD (Multicast Listener Discovery), transportado via ICMPv6; (3) verdadeira: a 5-tupla identifica univocamente cada sessão/socket TCP.',
    correctAnalysis:
      'Gabarito: V – F – V. Verdadeira(s): (1) e (3). A afirmativa (2) é falsa porque o IGMP pertence apenas ao IPv4; em IPv6 usa-se MLD sobre ICMPv6.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira quanto à natureza best-effort e fragmentação IP quando DF=0.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois IGMP atende apenas IPv4 (no IPv6 a função cabe ao MLD via ICMPv6).',
      3: 'Incorreta: a afirmativa (3) é verdadeira, pois a 5-tupla (protocolo, IPs e portas de origem/destino) identifica univocamente a conexão TCP.'
    }
  },
  {
    id: 'sarah-1-49',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre portas IANA, controle de congestionamento TCP e protocolos da família TCP/IP:\n\nI. Na classificação da IANA, portas de 0 a 1023 são Well-Known, de 1024 a 49151 são Registered e de 49152 a 65535 são Dinâmicas/Efêmeras.\nII. No protocolo TCP, o mecanismo de Slow Start inicia a janela de congestionamento (cwnd) com valor reduzido e a dobra exponencialmente a cada RTT sem perdas.\nIII. A mensagem ICMP Destination Unreachable código 4 (Fragmentation Needed) é a base do Path MTU Discovery em IPv4, sendo gerada quando o pacote excede o MTU e o bit DF está em 0.\nIV. O cabeçalho UDP tem 8 bytes, com os campos Porta de Origem, Porta de Destino, Comprimento e Janela.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.1. TCP/IP. I e II estão corretas. III é falsa porque o ICMP Fragmentation Needed (Type 3, Code 4) só é gerado quando o bit DF (Don\'t Fragment) está definido em 1 (se DF=0, o roteador fragmenta o pacote em vez de descartar). IV é falsa porque os 8 bytes do cabeçalho UDP contêm Porta de Origem, Porta de Destino, Comprimento e Checksum (UDP não possui campo Janela).',
    correctAnalysis:
      'Gabarito: Somente I e II estão corretas. ICMP Fragmentation Needed ocorre apenas com DF=1, e o quarto campo do cabeçalho UDP é Checksum (não Janela).',
    optionErrors: {
      1: 'Incorreta: III é falsa porque com DF=0 o roteador fragmenta o pacote; o ICMP Type 3 Code 4 exige DF=1.',
      2: 'Incorreta: inclui IV, que substitui o campo Checksum por Janela no cabeçalho UDP de 8 bytes.',
      3: 'Incorreta: inclui III e IV, ambas falsas quanto ao bit DF=1 do PMTUD e ao campo Checksum do UDP.'
    }
  },
  {
    id: 'sarah-1-50',
    editalItemId: '1.2.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre flags e estados de encerramento de sessão no protocolo TCP:\n\nPara encerrar uma conexão de forma graciosa, cada lado envia o flag _____; caso haja necessidade de abortar a sessão imediatamente sem espera de confirmação, envia-se o flag _____; e o lado que executa o fechamento ativo permanece temporariamente no estado _____ (por 2×MSL) para absorver segmentos atrasados.',
    options: [
      'SYN / FIN / CLOSE_WAIT',
      'FIN / RST / TIME_WAIT',
      'PSH / RST / SYN_RECEIVED',
      'FIN / URG / LAST_ACK'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.1. TCP/IP. O flag FIN solicita encerramento gracioso em cada direção; RST (Reset) encerra imediatamente a conexão; e o estado TIME_WAIT retém o socket por 2×MSL (Maximum Segment Lifetime) no lado do fechamento ativo para evitar colisão de pacotes retardatários com novas conexões.',
    correctAnalysis:
      'A sequência correta é FIN (fechamento gracioso), RST (reset abrupto) e TIME_WAIT (espera de 2×MSL após fechamento ativo).',
    optionErrors: {
      0: 'Incorreta: SYN inicia a sessão e CLOSE_WAIT ocorre no lado passivo aguardando a aplicação local fechar.',
      2: 'Incorreta: PSH força entrega imediata de dados e SYN_RECEIVED pertence à abertura do three-way handshake.',
      3: 'Incorreta: URG marca dados urgentes e LAST_ACK é o estado do fechamento passivo após enviar seu próprio FIN.'
    }
  },
  // ==================== EXPANSÃO FASE B — EIXO 1, LOTE 2 (+28) ====================
  // --- 1.2.2 IPv4/IPv6 (+5 -> total 7) ---
  {
    id: 'sarah-1-51',
    editalItemId: '1.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Comparando o cabeçalho base do IPv6 (RFC 8200) ao cabeçalho padrão do IPv4 (RFC 791), qual modificação estrutural foi adotada no IPv6 para acelerar o encaminhamento nos roteadores?',
    options: [
      'Cabeçalho fixo de 40 bytes, remoção do Checksum de cabeçalho e substituição de TTL por Hop Limit.',
      'Cabeçalho variável de 20 a 60 bytes, manutenção do Checksum IP e fragmentação feita pelos roteadores.',
      'Cabeçalho fixo de 32 bytes, inclusão do campo ARP nativo e redução do campo Flow Label para 8 bits.',
      'Cabeçalho fixo de 40 bytes, manutenção do campo Options obrigatório e incremento do Hop Limit por salto.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.2. IPv4/IPv6. O cabeçalho base IPv6 tem tamanho fixo de 40 bytes (contra 20 a 60 bytes variáveis no IPv4), elimina o Header Checksum (delegando integridade a L2 e L4 para evitar recálculo a cada salto), substitui TTL por Hop Limit e move recursos opcionais para Extension Headers, sem fragmentação por roteadores intermediários.',
    correctAnalysis:
      'O IPv6 simplificou o processamento em hardware adotando cabeçalho fixo de 40 bytes, removendo o Checksum de L3 e renomeando TTL para Hop Limit.',
    optionErrors: {
      1: 'Incorreta: tamanho variável de 20 a 60 bytes, Header Checksum e fragmentação em roteadores são características do IPv4.',
      2: 'Incorreta: o cabeçalho IPv6 tem 40 bytes (não 32), não carrega ARP nativo e o Flow Label possui 20 bits.',
      3: 'Incorreta: opções no IPv6 ficam em Extension Headers opcionais (não no cabeçalho fixo) e o Hop Limit é decrementado a cada salto.'
    }
  },
  {
    id: 'sarah-1-52',
    editalItemId: '1.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma ala hospitalar migrada para rede exclusivamente IPv6 (IPv6-only), estações precisam acessar um sistema legado publicado apenas em IPv4 (198.51.100.25) por meio do seu nome DNS. Qual par de mecanismos de transição viabiliza essa comunicação sem habilitar IPv4 nas estações?',
    options: [
      'Dual Stack na estação cliente e DHCPv6 Stateless nas portas de acesso.',
      'Tunelamento 6in4 na estação e Proxy ARP configurado no gateway da LAN.',
      'DNS64 sintetizando registro AAAA e NAT64 traduzindo os pacotes na borda.',
      'SLAAC com extensão EUI-64 e Neighbor Solicitation em multicast ff02::2.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.2. IPv4/IPv6. O mecanismo combinado DNS64 + NAT64 (RFC 6146/6147) permite que clientes IPv6-only alcancem destinos IPv4-only: quando há apenas registro A no DNS autoritativo, o DNS64 sintetiza um registro AAAA combinando o prefixo bem conhecido 64:ff9b::/96 (ou prefixo local) ao IPv4, e o gateway NAT64 traduz o tráfego IPv6↔IPv4.',
    correctAnalysis:
      'DNS64 sintetiza o endereço AAAA para a estação IPv6-only, que envia os pacotes ao tradutor NAT64 responsável pela conversão para IPv4.',
    optionErrors: {
      0: 'Incorreta: Dual Stack exige pilha IPv4 habilitada na estação cliente, contrariando o cenário IPv6-only.',
      1: 'Incorreta: tunelamento 6in4 encapsula IPv6 sobre redes IPv4 e Proxy ARP não traduz IPv6 para servidores IPv4.',
      3: 'Incorreta: SLAAC/EUI-64 atribui endereço IPv6 local e ff02::2 alcança roteadores IPv6, sem traduzir para destinos IPv4.'
    }
  },
  {
    id: 'sarah-1-53',
    editalItemId: '1.2.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione as mensagens ICMPv6 do Neighbor Discovery Protocol (NDP — RFC 4861) à esquerda às suas respectivas funções à direita:\n\nColuna da Esquerda:\n(I) Router Solicitation (RS — Tipo 133)\n(II) Router Advertisement (RA — Tipo 134)\n(III) Neighbor Solicitation (NS — Tipo 135)\n(IV) Neighbor Advertisement (NA — Tipo 136)\n\nColuna da Direita:\n(A) Anuncia periodicamente ou sob demanda prefixos de rede, MTU, gateway padrão e flags M/O.\n(B) Responde informando o endereço MAC de camada 2 ou sinaliza conflito na detecção de duplicidade (DAD).\n(C) Enviada por hosts na inicialização ao multicast ff02::2 solicitando parâmetros imediatos aos roteadores.\n(D) Consulta o endereço de enlace (MAC) de um vizinho IPv6 ou valida unicidade no processo DAD.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-A, II-C, III-D, IV-B.',
      'I-C, II-A, III-B, IV-D.',
      'I-C, II-D, III-A, IV-B.',
      'I-C, II-A, III-D, IV-B.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2.2. IPv4/IPv6. RS (133) é enviado pelo host a ff02::2 pedindo resposta imediata dos roteadores (C); RA (134) é enviado pelos roteadores divulgando prefixo, gateway e flags M/O (A); NS (135) resolve MAC ou testa unicidade DAD (D); NA (136) responde com o MAC de camada 2 (B).',
    correctAnalysis:
      'A associação correta das mensagens NDP é I-C, II-A, III-D e IV-B.',
    optionErrors: {
      0: 'Incorreta: inverte Router Solicitation (host -> ff02::2) com Router Advertisement (roteador -> hosts).',
      1: 'Incorreta: inverte Neighbor Solicitation (requisição) com Neighbor Advertisement (resposta).',
      2: 'Incorreta: atribui funções de NS ao RA e de RA ao NS.'
    }
  },
  {
    id: 'sarah-1-54',
    editalItemId: '1.2.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre configuração automática SLAAC, DHCPv6 e transição IPv4/IPv6:\n\nI. Em um Router Advertisement (RA) com flags M=0 e O=1, o cliente obtém seu endereço IPv6 via DHCPv6 Stateful e dispensa a geração de endereço por SLAAC.\nII. Na arquitetura Dual Stack, servidores e roteadores mantêm simultaneamente pilhas IPv4 e IPv6 ativas, sendo a estratégia preferencial de transição gradual.\nIII. O processo DAD (Duplicate Address Detection) no IPv6 utiliza mensagens ARP Gratuito enviadas em broadcast antes de ativar o endereço na interface.\nIV. Quando as flags do RA estão em M=0 e O=1 (DHCPv6 Stateless), a estação gera seu endereço IPv6 via SLAAC e consulta o DHCPv6 apenas para parâmetros adicionais, como DNS.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.2. IPv4/IPv6. II e IV são verdadeiras. I é falsa porque M=0, O=1 indica SLAAC + DHCPv6 Stateless (o DHCPv6 Stateful corresponde a M=1). III é falsa porque IPv6 não possui ARP nem broadcast; o DAD envia um Neighbor Solicitation (ICMPv6 Tipo 135) com origem :: para o endereço alvo.',
    correctAnalysis:
      'Gabarito: Somente II e IV estão corretas. Dual Stack roda ambas as pilhas em paralelo e M=0/O=1 combina SLAAC para o endereço com DHCPv6 Stateless para DNS/opções.',
    optionErrors: {
      0: 'Incorreta: I e III são falsas (M=0/O=1 é Stateless com SLAAC e DAD usa ICMPv6 NS, não ARP Gratuito).',
      2: 'Incorreta: inclui I, que confunde M=0/O=1 (Stateless) com M=1 (Stateful).',
      3: 'Incorreta: inclui III, que atribui ARP Gratuito em broadcast ao processo DAD do IPv6.'
    }
  },
  {
    id: 'sarah-1-55',
    editalItemId: '1.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os mecanismos EUI-64, DHCPv6 e endereços especiais de operação em IPv6, assinale a afirmação INCORRETA.',
    options: [
      'O protocolo DHCPv6 utiliza as portas UDP 546 no cliente e UDP 547 no servidor, operando com mensagens multicast ou unicast.',
      'O método EUI-64 forma os 64 bits de interface inserindo 0xFFFE no centro do endereço MAC de 48 bits e invertendo o 7º bit (bit U/L).',
      'No DHCPv6 Stateful (flag M=1), o servidor DHCPv6 é responsável por entregar o gateway padrão aos clientes, substituindo o Router Advertisement.',
      'Extensões de privacidade (RFC 8981) geram identificadores de interface aleatórios e temporários para evitar rastreamento pelo MAC em EUI-64.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.2. IPv4/IPv6. Mesmo em redes configuradas com DHCPv6 Stateful (flag M=1), o servidor DHCPv6 NÃO fornece opção de gateway padrão (default router): a descoberta do roteador padrão continua ocorrendo exclusivamente via mensagens Router Advertisement (RA) do protocolo NDP.',
    correctAnalysis:
      'A opção C é incorreta porque o DHCPv6 não entrega default gateway — essa informação vem sempre pelo Router Advertisement (ICMPv6 Tipo 134).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): as portas padrão do DHCPv6 são UDP 546 (cliente) e UDP 547 (servidor).',
      1: 'Incorreta (afirmação verdadeira): o Modified EUI-64 insere FFFE no meio do MAC e inverte o bit Universal/Local (7º bit).',
      3: 'Incorreta (afirmação verdadeira): Privacy Extensions (RFC 4941/8981) criam Interface IDs temporários para saída à Internet.'
    }
  },

  // --- 1.2.3 VLAN (+5 -> total 7) ---
  {
    id: 'sarah-1-56',
    editalItemId: '1.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um consultório, o computador do médico é ligado à porta traseira de um telefone IP conectado a uma única porta do switch de acesso. Como configurar essa porta de acesso para segregar voz e dados em sub-redes distintas sem transformar o link em porta de usuário comum compartilhada?',
    options: [
      'Configurar VLAN de dados (untagged) e Voice VLAN (tagged) na mesma porta de acesso.',
      'Habilitar Proxy ARP no switch de acesso para separar voz e dados na mesma VLAN.',
      'Configurar a porta em modo access único e isolar o telefone apenas por máscara /30.',
      'Ativar Port Security com limite de 1 MAC na porta, bloqueando o computador do médico.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.3. VLAN. O recurso de Voice VLAN permite que uma porta em modo access atenda simultaneamente uma VLAN de dados (quadros untagged do PC) e uma Voice VLAN dedicada (quadros tagged descobertos via LLDP-MED ou CDP pelo telefone IP), isolando domínios de broadcast e aplicando QoS à voz.',
    correctAnalysis:
      'Combinar VLAN de acesso (dados untagged) com Voice VLAN (voz tagged) na porta de acesso segrega logicamente os dois dispositivos em VLANs e sub-redes separadas.',
    optionErrors: {
      1: 'Incorreta: Proxy ARP não cria domínios de broadcast isolados nem separa tráfego de voz e dados em camada 2.',
      2: 'Incorreta: usar máscara /30 na mesma VLAN mantém voz e dados no mesmo domínio de broadcast L2.',
      3: 'Incorreta: limitar a porta a apenas 1 endereço MAC bloquearia o PC conectado atrás do telefone IP.'
    }
  },
  {
    id: 'sarah-1-57',
    editalItemId: '1.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre boas práticas, faixas de identificadores e operação de portas access em VLANs, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em switches gerenciáveis, uma boa prática de hardening é desligar (shutdown) portas ociosas e alocá-las em uma VLAN isolada sem interface SVI roteada, evitando mantê-las na VLAN 1.\n( ) O intervalo de VLAN IDs utilizáveis para criação de VLANs compreende de 0 a 4095, sendo 0 e 4095 reservados somente quando se utiliza VTP.\n( ) Quando dois switches são interligados diretamente por portas em modo access em VLANs diferentes (ex.: VLAN 10 e VLAN 20), o padrão 802.1Q bloqueia os quadros por divergência de VID.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.3. VLAN. (1) verdadeira: portas não usadas devem ficar em shutdown e em VLAN "blackhole" sem SVI nem acesso à VLAN 1; (2) falsa: os IDs 0 (priority-tagged) e 4095 são sempre reservados pelo IEEE 802.1Q, restando 1 a 4094 utilizáveis independentemente de VTP; (3) falsa: portas access transmitem sem tag (untagged), logo os switches não comparam VID e acabam mesclando os dois domínios de broadcast.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa é verdadeira; 0 e 4095 são sempre reservados no 802.1Q e portas access untagged não carregam VID para detecção de mismatch.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira quanto à prática de shutdown e VLAN blackhole em portas ociosas.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois os IDs 0 e 4095 são reservados pelo padrão IEEE 802.1Q em qualquer cenário.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois quadros em portas access saem sem etiqueta 802.1Q e misturam as VLANs.'
    }
  },
  {
    id: 'sarah-1-58',
    editalItemId: '1.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre segmentação por VLANs e comunicação inter-VLAN:\n\nI. No roteamento inter-VLAN com switch Layer 3, cada VLAN recebe uma interface virtual SVI (Switched Virtual Interface) configurada com endereço IP que atua como gateway dos hosts daquela VLAN.\nII. Em um modelo Router-on-a-Stick, o roteador cria subinterfaces lógicas para cada VLAN sem necessitar de interface física capaz de receber quadros encapsulados ou endereçamento de sub-rede distinto.\nIII. A principal vantagem de uma VLAN é permitir que hosts de diferentes sub-redes compartilhem o mesmo domínio de broadcast na camada 2 sem necessidade de roteador.\nIV. A criação de VLANs segmenta o domínio de broadcast em camada 2, reduzindo tráfego ARP/broadcast desnecessário e facilitando políticas de acesso entre setores.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.3. VLAN. I e IV estão corretas. II é falsa porque no Router-on-a-Stick cada subinterface do roteador exige encapsulamento 802.1Q e endereço IP da sub-rede correspondente à VLAN. III é falsa porque o objetivo da VLAN é exatamente separar domínios de broadcast (sub-redes distintas ficam em VLANs distintas e exigem roteamento L3).',
    correctAnalysis:
      'Gabarito: Somente I e IV estão corretas. SVIs atuam como gateways L3 de cada VLAN no switch multilayer e VLANs isolam domínios de broadcast.',
    optionErrors: {
      0: 'Incorreta: II é falsa porque subinterfaces em Router-on-a-Stick exigem sub-redes IP distintas por VLAN.',
      1: 'Incorreta: II é falsa (Router-on-a-Stick exige sub-redes distintas e encapsulamento por VLAN) e omite I (verdadeira).',
      3: 'Incorreta: inclui III, que afirma o oposto do conceito de VLAN (VLANs separam domínios de broadcast).'
    }
  },
  {
    id: 'sarah-1-59',
    editalItemId: '1.2.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre fundamentos de VLANs em ambientes corporativos:\n\nPor padrão de fábrica, todas as portas de um switch pertencem à VLAN _____; ao implementar roteamento entre VLANs diretamente em um switch multilayer, configura-se uma interface lógica chamada _____; e, conceitualmente, denomina-se VLAN _____ aquela cujo tráfego trafega sem etiqueta (untagged) em enlaces compartilhados.',
    options: [
      '1 / SVI / nativa',
      '0 / VRF / gerência',
      '1 / VTP / privada',
      '4094 / SVI / isolada'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.3. VLAN. Todo switch Ethernet sai de fábrica com suas portas alocadas na VLAN 1 (VLAN padrão); switches Layer 3 roteiam entre VLANs utilizando interfaces SVI (Switched Virtual Interface); e a VLAN nativa identifica a VLAN associada aos quadros enviados sem etiqueta (untagged).',
    correctAnalysis:
      'A sequência correta é 1 (VLAN padrão inicial), SVI (interface virtual L3 do switch) e nativa (VLAN não marcada/untagged).',
    optionErrors: {
      1: 'Incorreta: a VLAN 0 é reservada para priority-tagging (não padrão das portas) e VRF é tabela de roteamento isolada.',
      2: 'Incorreta: VTP é protocolo de propagação de VLANs, não interface de gateway SVI.',
      3: 'Incorreta: 4094 é apenas o maior ID utilizável da faixa normal/estendida, não a VLAN padrão de fábrica.'
    }
  },
  {
    id: 'sarah-1-60',
    editalItemId: '1.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma DMZ ou rede de quiosques compartilhando a mesma sub-rede IP, deseja-se impedir que os hosts finais conversem diretamente entre si em camada 2, permitindo comunicação apenas com o firewall/gateway. Qual recurso de Private VLAN (PVLAN) implementa esse isolamento?',
    options: [
      'Alocar os quiosques em uma VLAN Community e o gateway em uma porta Host.',
      'Alocar os quiosques em uma VLAN Isolated e o gateway em uma porta Promiscuous.',
      'Configurar todas as portas na VLAN Primária em modo Promiscuous compartilhado.',
      'Dividir os quiosques na faixa estendida (1006–4094) sem criar VLAN Secundária.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.3. VLAN. Em Private VLANs (PVLAN), portas associadas a uma VLAN secundária Isolated só podem se comunicar com portas Promiscuous (onde ficam roteadores, firewalls ou servidores compartilhados), ficando bloqueadas de trocar quadros L2 entre si ou com portas Community.',
    correctAnalysis:
      'Portas Isolated impedem comunicação L2 entre estações da mesma VLAN/sub-rede, liberando fluxo apenas com a porta Promiscuous do gateway.',
    optionErrors: {
      0: 'Incorreta: portas em uma VLAN Community conseguem se comunicar livremente entre si dentro da mesma comunidade.',
      2: 'Incorreta: portas Promiscuous conversam com todas as portas da PVLAN (Isolated, Community e outras Promiscuous), não isolando quiosques.',
      3: 'Incorreta: apenas utilizar a faixa estendida 1006–4094 não cria isolamento L2 intra-VLAN entre hosts.'
    }
  },

  // --- 1.2.4 trunk (+6 -> total 7) ---
  {
    id: 'sarah-1-61',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao inserir uma etiqueta IEEE 802.1Q de 4 bytes em um quadro Ethernet padrão em uma porta trunk, qual valor hexadecimal identifica o protocolo no campo TPID (Tag Protocol Identifier) e qual passa a ser o tamanho máximo padrão do quadro Ethernet (antes de Jumbo Frames)?',
    options: [
      'TPID 0x8100 e tamanho máximo de 1.522 bytes.',
      'TPID 0x0800 e tamanho máximo de 1.518 bytes.',
      'TPID 0x88A8 e tamanho máximo de 1.520 bytes.',
      'TPID 0x0806 e tamanho máximo de 1.526 bytes.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.4. trunk. A tag IEEE 802.1Q inicia com o campo TPID de 2 bytes no valor 0x8100 (seguido por 2 bytes de TCI: PCP 3b + DEI 1b + VID 12b). Com esses 4 bytes adicionais e o recálculo do FCS, o quadro Ethernet máximo padrão passa de 1.518 bytes para 1.522 bytes.',
    correctAnalysis:
      'O cabeçalho 802.1Q usa EtherType/TPID 0x8100 e eleva o limite do quadro Ethernet padrão de 1.518 para 1.522 bytes.',
    optionErrors: {
      1: 'Incorreta: 0x0800 é o EtherType do IPv4 e 1.518 bytes é o tamanho máximo sem a tag 802.1Q.',
      2: 'Incorreta: 0x88A8 refere-se ao Q-in-Q (IEEE 802.1ad, dupla tag de provedor), que eleva o quadro com duas tags para 1.526 bytes.',
      3: 'Incorreta: 0x0806 é o EtherType do protocolo ARP, não da etiqueta 802.1Q.'
    }
  },
  {
    id: 'sarah-1-62',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Dois switches foram interligados com as interfaces configuradas via DTP em "switchport mode dynamic auto" em ambas as extremidades. Ao verificar o estado do enlace, nota-se que as VLANs não passam entre os switches. Qual a causa e a correção recomendada?',
    options: [
      "A negociação DTP formou o trunk, mas nenhuma VLAN foi liberada; deve-se aplicar 'switchport trunk allowed vlan all'.",
      'O DTP entrou em loop com o Spanning Tree; deve-se desativar a VLAN 1 na interface física do switch.',
      'Ambos permaneceram em access por serem passivos; deve-se fixar "switchport mode trunk" e "nonegotiate".',
      'O enlace exigiu Native VLAN distinta; deve-se alterar a Native VLAN apenas em uma das extremidades.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.4. trunk. No DTP (Dynamic Trunking Protocol), o modo "dynamic auto" apenas responde a negociações sem iniciá-las; portanto, auto + auto resulta em portas operando em access. A boa prática operacional e de segurança é fixar manualmente "switchport mode trunk" e desabilitar DTP com "switchport nonegotiate".',
    correctAnalysis:
      'Portas em "dynamic auto" aguardam iniciativa do vizinho e nunca sobem trunk entre si; fixar "mode trunk" + "nonegotiate" resolve o problema e previne Switch Spoofing.',
    optionErrors: {
      0: 'Incorreta: com auto/auto não há trunk algum (ambos são passivos e ficam em access); o problema não é a lista de VLANs permitidas, que por padrão já inclui todas.',
      1: 'Incorreta: o problema não é loop STP nem requer desativação da VLAN 1 para negociar trunk.',
      3: 'Incorreta: alterar a Native VLAN em apenas um lado cria Native VLAN mismatch e vazamento entre VLANs.'
    }
  },
  {
    id: 'sarah-1-63',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre segurança em portas trunk e prevenção a ataques de VLAN Hopping, assinale a afirmação INCORRETA.',
    options: [
      'No ataque de Switch Spoofing, um host malicioso envia quadros DTP falsificados para negociar um enlace trunk diretamente com a porta do switch.',
      'No ataque de Double Tagging, o atacante na Native VLAN envia um quadro com duas tags 802.1Q; o 1º switch remove a externa e encaminha o quadro pelo trunk com a interna.',
      'Configurar explicitamente as portas de usuário como "switchport mode access" e "switchport nonegotiate" mitiga ataques de Switch Spoofing.',
      'Manter as portas de acesso dos usuários no modo DTP "dynamic auto" impede que um atacante negocie um enlace trunk via Switch Spoofing.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2.4. trunk. Uma porta em modo "dynamic auto" está passivamente disposta a formar trunk caso receba quadros DTP "desirable" ou "on" do dispositivo conectado — logo, um atacante pode forjar DTP e estabelecer um trunk (Switch Spoofing); para impedir, deve-se usar "mode access" com "nonegotiate". Já o Double Tagging é mitigado usando uma Native VLAN não utilizada nas portas de acesso ou habilitando "vlan dot1q tag native".',
    correctAnalysis:
      'A alternativa D é incorreta porque "dynamic auto" aceita negociação de trunk iniciada pelo atacante; apenas "mode access" + "nonegotiate" bloqueia Switch Spoofing, enquanto Double Tagging é mitigado com Native VLAN não utilizada ou "vlan dot1q tag native".',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Switch Spoofing consiste exatamente em emular negociação DTP para virar trunk.',
      1: 'Incorreta (afirmação verdadeira): no Double Tagging o atacante envia quadro duplamente etiquetado na Native VLAN, e o 1º switch remove a tag externa preservando a interna ao encaminhar pelo trunk (mitigado com Native VLAN não utilizada ou "vlan dot1q tag native").',
      2: 'Incorreta (afirmação verdadeira): fixar portas de acesso e desativar DTP (nonegotiate) elimina negociação de trunk por usuários.'
    }
  },
  {
    id: 'sarah-1-64',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um trunk 802.1Q interligando os switches SW1 e SW2, o SW1 foi configurado com Native VLAN 10 e o SW2 com Native VLAN 20. Ao receber um quadro enviado por um host da VLAN 10 no SW1, o que acontece quando esse quadro atravessa o trunk e chega ao SW2?',
    options: [
      'O SW1 envia o quadro com tag VID 10 e o SW2 o descarta imediatamente por mismatch.',
      'O SW1 envia o quadro untagged e o SW2 o encaminha para a VLAN 20, causando vazamento.',
      'O SW2 lê o campo TPID 0x8100 e redireciona automaticamente o quadro de volta à VLAN 10.',
      'O trunk interrompe apenas quadros unicast, permitindo somente broadcasts entre VLAN 10 e 20.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.4. trunk. Como a Native VLAN no SW1 é a VLAN 10, o SW1 remove a etiqueta e transmite os quadros da VLAN 10 sem tag (untagged) pelo trunk. Ao chegarem untagged ao SW2, onde a Native VLAN é 20, o SW2 os associa à VLAN 20, provocando vazamento de tráfego entre VLANs distintas.',
    correctAnalysis:
      'Quadros da Native VLAN saem untagged de SW1 (VLAN 10) e entram untagged em SW2 sendo tratados como VLAN 20 — caracterizando Native VLAN mismatch.',
    optionErrors: {
      0: 'Incorreta: a Native VLAN do SW1 (10) sai sem tag pelo trunk, não com tag VID 10.',
      2: 'Incorreta: quadros da VLAN nativa saem sem etiqueta, não havendo TPID 0x8100 nem redirecionamento automático para VLAN 10.',
      3: 'Incorreta: tanto unicast quanto broadcast da VLAN 10 trafegam untagged e vazam para a VLAN 20 no SW2.'
    }
  },
  {
    id: 'sarah-1-65',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre configuração e operação de portas trunk IEEE 802.1Q:\n\nI. Mesmo quando a VLAN nativa é alterada para uma VLAN não utilizada (ex.: VLAN 999), ela deve permanecer obrigatoriamente diferente nas duas pontas do trunk para evitar loops.\nII. Restringir as VLANs permitidas no trunk ("allowed vlan") impede que tráfego broadcast/multicast de VLANs inexistentes na ponta remota consuma banda do enlace.\nIII. Ao contrário do padrão aberto IEEE 802.1Q (que insere 4 bytes), o protocolo ISL encapsula todo o quadro original e não utiliza VLAN nativa sem tag.\nIV. Na tag 802.1Q de 4 bytes, o campo VID ocupa 16 bits completos, permitindo identificar até 65.535 VLANs em um único trunk.\n\nAssinale a alternativa correta.',
    options: [
      'Somente II e III estão corretas.',
      'Somente I e II estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.4. trunk. II e III estão corretas. I é falsa porque a Native VLAN deve coincidir exatamente nas duas pontas do trunk (divergência gera mismatch e vazamento). IV é falsa porque o TCI inteiro tem 16 bits, mas o VID ocupa 12 bits (4.096 valores, sendo 1–4094 utilizáveis), enquanto os outros 4 bits são PCP (3b) e DEI (1b).',
    correctAnalysis:
      'Gabarito: Somente II e III estão corretas. A lista de VLANs permitidas reduz tráfego desnecessário e o ISL encapsula sem VLAN nativa; Native VLAN exige igualdade nas pontas e o VID tem 12 bits.',
    optionErrors: {
      1: 'Incorreta: I é falsa porque a Native VLAN deve ser idêntica em ambos os lados do trunk.',
      2: 'Incorreta: inclui IV, que confunde o tamanho total do campo TCI (16 bits) com o campo VID (12 bits).',
      3: 'Incorreta: inclui I e IV, ambas falsas quanto à igualdade da Native VLAN e aos 12 bits do VID.'
    }
  },
  {
    id: 'sarah-1-66',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre comandos e comportamento de etiquetas em enlaces trunk, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Ao executar "switchport trunk allowed vlan 30" em um trunk que já permitia as VLANs 10 e 20, o switch acrescenta a VLAN 30 à lista mantendo as anteriores ativas.\n( ) O protocolo proprietário Cisco ISL encapsula o quadro Ethernet inteiro com cabeçalho de 26 bytes e trailer de 4 bytes, sem usar VLAN nativa untagged.\n( ) Quando o recurso "vlan dot1q tag native" é habilitado em ambos os switches de um trunk 802.1Q, os quadros da VLAN nativa passam a ser enviados com tag de 4 bytes.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'F – V – V.',
      'F – V – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.4. trunk. (1) falsa: omitir a palavra-chave "add" substitui toda a lista permitida no trunk pela VLAN 30, derrubando imediatamente as VLANs 10 e 20; (2) verdadeira: ISL faz encapsulamento completo sem Native VLAN untagged; (3) verdadeira: "vlan dot1q tag native" força marcação 802.1Q inclusive para a VLAN nativa.',
    correctAnalysis:
      'Gabarito: F – V – V. Sem "add", o comando "allowed vlan" sobrescreve a lista; ISL encapsula sem native untagged e "tag native" marca quadros da nativa no 802.1Q.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois sem "add" a lista anterior é sobrescrita e as VLANs 10 e 20 caem.',
      1: 'Incorreta: a afirmativa (2) é verdadeira quanto ao encapsulamento ISL.',
      3: 'Incorreta: a afirmativa (3) é verdadeira, pois "vlan dot1q tag native" etiqueta a VLAN nativa.'
    }
  },

  // --- 1.2.5 STP (+6 -> total 7) ---
  {
    id: 'sarah-1-67',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os estados e temporizadores dos padrões STP (IEEE 802.1D) e RSTP (IEEE 802.1w) à esquerda às suas descrições à direita:\n\nColuna da Esquerda:\n(I) Estado Discarding (RSTP 802.1w)\n(II) Estado Learning (STP / RSTP)\n(III) Estado Forwarding (STP / RSTP)\n(IV) Temporizador Max Age padrão (20 s)\n\nColuna da Direita:\n(A) Preenche a tabela de endereços MAC observando quadros entrantes, mas ainda não encaminha dados de usuário.\n(B) Funde os estados Disabled, Blocking e Listening do 802.1D; descarta quadros de dados e não aprende MACs.\n(C) Tempo máximo em que um switch armazena a melhor BPDU recebida antes de considerá-la expirada.\n(D) Envia e recebe dados normalmente, aprende MACs na tabela CAM e processa BPDUs.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-B, II-A, III-D, IV-C.',
      'I-A, II-B, III-D, IV-C.',
      'I-B, II-A, III-C, IV-D.',
      'I-D, II-A, III-B, IV-C.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.5. STP. No RSTP, Discarding unifica Disabled, Blocking e Listening (B); Learning popula a tabela MAC sem comutar tráfego de usuário (A); Forwarding comuta dados normalmente (D); e Max Age (padrão 20 s = 10 × Hello de 2 s) define a validade da BPDU armazenada (C).',
    correctAnalysis:
      'A associação exata é I-B, II-A, III-D e IV-C.',
    optionErrors: {
      1: 'Incorreta: inverte Discarding (não aprende MAC) com Learning (aprende MAC sem encaminhar dados).',
      2: 'Incorreta: inverte o estado Forwarding (III) com o temporizador Max Age (IV).',
      3: 'Incorreta: inverte Discarding (I) com Forwarding (III).'
    }
  },
  {
    id: 'sarah-1-68',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um switch de acesso não-raiz SW3 está conectado por dois links de 1 Gbps (mesmo custo acumulado) a dois switches de distribuição vizinhos, SW1 (Bridge ID 24576:0011...) e SW2 (Bridge ID 32768:000a...). Como o STP define qual porta do SW3 será eleita como Root Port?',
    options: [
      'Escolhe aleatoriamente qualquer link e envia metade dos fluxos pelo segundo link.',
      'Seleciona a porta ligada ao vizinho com menor Bridge ID (SW1, prioridade 24576).',
      'Seleciona a porta com maior número de Port ID local no próprio switch SW3.',
      'Seleciona a porta ligada ao vizinho com menor MAC isolado (SW2), ignorando prioridade.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.5. STP. Na eleição de Root Port em caso de empate no menor Root Path Cost acumulado até a Root Bridge, o STP desempata pela ordem: (1) menor Bridge ID do switch vizinho anunciante (prioridade + MAC); (2) menor Port ID do vizinho; e (3) menor Port ID local.',
    correctAnalysis:
      'Empatando o custo até a Root Bridge, o segundo critério é o menor Bridge ID do vizinho (SW1 tem 24576 contra 32768 do SW2).',
    optionErrors: {
      0: 'Incorreta: o STP nunca faz balanceamento de carga no mesmo link redundante; uma porta fica ativa e a outra bloqueada/Alternate.',
      2: 'Incorreta: Port ID só é usado se o Bridge ID do vizinho também empatar (ex.: dois links para o mesmo switch), e vence sempre o MENOR Port ID.',
      3: 'Incorreta: o Bridge ID compara primeiro a prioridade configurada (24576 < 32768), recorrendo ao MAC apenas em empate.'
    }
  },
  {
    id: 'sarah-1-69',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre recursos de proteção Spanning Tree (BPDU Guard, Root Guard, Loop Guard e PortFast), assinale a afirmação INCORRETA.',
    options: [
      'O BPDU Guard coloca uma porta PortFast/Edge em estado err-disable caso receba qualquer BPDU.',
      'O Loop Guard impede que uma porta Alternate/Root passe para Forwarding caso pare de receber BPDUs por falha unidirecional.',
      'O Root Guard impede que uma porta protegida torne-se Root Port caso receba BPDUs superiores, colocando-a em root-inconsistent.',
      'O BPDU Filter em uma porta de acesso impede a eleição de Root Bridge e bloqueia em err-disable qualquer switch conectado a ela.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2.5. STP. O BPDU Filter simplesmente suprime o envio e/ou ignora o recebimento de BPDUs na interface sem colocar a porta em err-disable — quando configurado diretamente em nível de interface, pode inclusive causar loops silenciosos se alguém ligar um switch nela. Bloquear em err-disable é função do BPDU Guard.',
    correctAnalysis:
      'A alternativa D é incorreta porque o BPDU Filter ignora/filtra BPDUs em vez de derrubar a porta em err-disable (ação do BPDU Guard).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): BPDU Guard protege portas Edge derrubando-as em err-disable ao detectar BPDU.',
      1: 'Incorreta (afirmação verdadeira): Loop Guard mantém a porta em loop-inconsistent evitando loops em falhas unidirecionais de fibra.',
      2: 'Incorreta (afirmação verdadeira): Root Guard bloqueia BPDUs superiores colocando a porta em root-inconsistent até cessarem.'
    }
  },
  {
    id: 'sarah-1-70',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na tabela clássica de custos STP de 16 bits (short path cost), links de 100 Mbps, 1 Gbps e 10 Gbps possuem custos 19, 4 e 2, respectivamente. Por que enlaces de 10 Gbps, 40 Gbps e 100 Gbps exigem ativação do método de custo longo (IEEE 802.1t, 32 bits)?',
    options: [
      'Porque no modo 16 bits apenas portas FastEthernet podem participar da eleição de Root Bridge.',
      'Porque o custo curto de 16 bits desativa BPDUs em links de fibra acima de 10 Gbps.',
      'Porque no modo curto os custos acima de 10 Gbps ficam saturados em 2 ou 1 sem diferenciação.',
      'Porque o modo 802.1t elimina a necessidade de Root Bridge em enlaces acima de 10 Gbps.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.5. STP. Como a tabela original de 16 bits (802.1D-1998) foi desenhada antes de links multi-gigabit, velocidades de 10G, 40G e 100G acabam recebendo o mesmo custo mínimo (2 ou 1), impedindo o STP de preferir 100G sobre 10G. O método longo de 32 bits (802.1t) adota escala granular (1G = 20.000, 10G = 2.000, 100G = 200).',
    correctAnalysis:
      'A tabela de 32 bits (802.1t) evita a saturação do custo em 1 ou 2, diferenciando links de 10G, 25G, 40G e 100G no cálculo de caminho.',
    optionErrors: {
      0: 'Incorreta: a eleição de Root Bridge depende do Bridge ID (prioridade + MAC), não da velocidade das portas.',
      1: 'Incorreta: portas acima de 10 Gbps continuam trocando BPDUs normalmente no modo curto.',
      3: 'Incorreta: o modo 802.1t apenas expande a métrica de custo de 16 para 32 bits, mantendo toda a lógica de Root Bridge.'
    }
  },
  {
    id: 'sarah-1-71',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre RSTP (IEEE 802.1w), Bridge ID estendido e MSTP (IEEE 802.1s), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No RSTP (802.1w), uma Backup Port fornece caminho alternativo até a Root Bridge através de outro switch vizinho caso a Root Port falhe.\n( ) No Bridge ID estendido do STP, os 12 bits mais significativos definem a prioridade configurável e os 4 bits menos significativos armazenam o System ID Extension da VLAN.\n( ) O padrão MSTP (IEEE 802.1s) permite mapear múltiplas VLANs em poucas instâncias Spanning Tree (MSTI), reduzindo o consumo de CPU em relação ao PVST+.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.5. STP. (1) falsa: quem oferece caminho alternativo via outro switch é a Alternate Port; a Backup Port é uma segunda porta do próprio switch ligada ao mesmo segmento compartilhado de uma Designated Port local; (2) falsa: os 4 bits mais significativos representam a prioridade (múltiplos de 4096) e os 12 bits seguintes armazenam o VLAN ID (System ID Extension); (3) verdadeira: MSTP agrupa VLANs em instâncias.',
    correctAnalysis:
      'Gabarito: F – F – V. Alternate (não Backup) é o backup de Root Port via vizinho; prioridade usa 4 bits e VLAN ID usa 12 bits; MSTP agrupa VLANs em instâncias.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois confunde Alternate Port com Backup Port.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois inverte os 4 bits da prioridade com os 12 bits do System ID Extension (VLAN ID).',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre a escalabilidade de instâncias do MSTP.'
    }
  },
  {
    id: 'sarah-1-72',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre convergência e papéis no RSTP (IEEE 802.1w):\n\nEm enlaces ponto a ponto Full-Duplex, o RSTP atinge convergência em menos de 1 segundo por meio do handshake _____, eliminando a espera passiva dos temporizadores Forward Delay; os três estados definidos pelo padrão são Discarding, _____ e Forwarding; e em portas ligadas a estações finais recomenda-se configurar _____.',
    options: [
      'DTP-Desirable / Blocking / Root Guard',
      'Proposal-Agreement / Learning / PortFast',
      'Hello-MaxAge / Listening / Loop Guard',
      'Proposal-Agreement / Blocking / BPDU Filter'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.5. STP. O RSTP realiza convergência rápida ponto a ponto via sincronização Proposal/Agreement; reduz os 5 estados originais para apenas Discarding, Learning e Forwarding; e define portas de usuário como PortFast / Edge Port (tipicamente combinadas com BPDU Guard).',
    correctAnalysis:
      'A sequência correta é Proposal-Agreement (mecanismo ativo de convergência RSTP), Learning (estado intermediário) e PortFast (Edge) para hosts finais.',
    optionErrors: {
      0: 'Incorreta: DTP negocia trunks (não STP), Blocking não existe no RSTP e Root Guard protege portas inter-switches.',
      2: 'Incorreta: Listening foi absorvido por Discarding no RSTP e Loop Guard protege links redundantes entre switches.',
      3: 'Incorreta: Blocking não é nome de estado no RSTP e BPDU Filter suprime BPDUs em vez de caracterizar porta Edge.'
    }
  },

  // --- 1.2.6 LACP (+6 -> total 7) ---
  {
    id: 'sarah-1-73',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor está conectado a um switch por um Port-Channel LACP com 4 portas de 1 Gbps (4 Gbps agregados). Ao copiar um grande arquivo via única sessão SCP para uma estação, a taxa fica limitada a ~1 Gbps. Por que esse comportamento é esperado no LACP?',
    options: [
      'Porque o LACP mantém 3 portas em modo standby e ativa apenas 1 porta por vez.',
      'Porque o modo LACP Active limita o bundle a 1 Gbps quando o servidor usa 1 IP.',
      'Porque o balanceamento usa hash por fluxo, enviando uma sessão TCP por um único link.',
      'Porque a camada 2 divide o quadro em 4 partes e o TCP descarta pacotes fora de ordem.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.6. LACP. O LACP (IEEE 802.1AX) distribui quadros entre os membros usando um algoritmo de hash (por MAC, IP ou IP+Porta). Todos os quadros pertencentes a um mesmo fluxo/sessão TCP seguem sempre pelo mesmo enlace físico para evitar reordenação de pacotes; o ganho de 4 Gbps aparece com múltiplos fluxos simultâneos.',
    correctAnalysis:
      'Cada fluxo individual fica restrito à capacidade de 1 link físico porque o hash de fluxo impede divisão de uma única sessão TCP entre várias portas.',
    optionErrors: {
      0: 'Incorreta: no LACP todas as 4 portas ficam ativas simultaneamente (não em active-backup), atendendo fluxos distintos em paralelo.',
      1: 'Incorreta: o modo Active não impõe limite de 1 Gbps ao bundle; múltiplas conexões simultâneas podem somar até 4 Gbps.',
      3: 'Incorreta: o switch nunca fragmenta um quadro Ethernet entre 4 portas físicas nem envia pacotes do mesmo fluxo por links diferentes.'
    }
  },
  {
    id: 'sarah-1-74',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre operação, limites e compatibilidade do LACP (IEEE 802.3ad / 802.1AX), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O padrão LACP suporta até 8 enlaces ativos simultâneos por Port-Channel, podendo manter portas adicionais em standby para failover.\n( ) Um switch configurado em modo estático "On" estabelece Port-Channel normalmente com um vizinho em modo LACP "Active", pois este envia quadros LACPDU.\n( ) No LACP, configurar "lacp rate fast" (1 segundo) em um lado obriga o outro extremo a também usar "fast", caso contrário o Port-Channel é rejeitado.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – V – F.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2.6. LACP. (1) verdadeira: o padrão permite até 8 links ativos (e portas extras em hot-standby conforme prioridades); (2) falsa: o modo estático "On" não envia nem processa quadros LACPDU, falhando ao conectar com LACP Active ou Passive; (3) falsa: os lados podem operar com taxas LACP diferentes (Slow 30s e Fast 1s) e ainda formar o bundle.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa é verdadeira; modo "On" é incompatível com LACP dinâmico e taxas Fast/Slow podem divergir sem impedir a negociação.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira quanto ao limite padrão de 8 portas ativas no bundle LACP.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois modo estático "On" é incompatível com LACP Active/Passive.',
      2: 'Incorreta: a afirmativa (3) é falsa, pois LACP Fast (1s) e Slow (30s) interoperam no mesmo Port-Channel.'
    }
  },
  {
    id: 'sarah-1-75',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre agregação de enlaces com LACP em switches e servidores:\n\nI. O Spanning Tree Protocol (STP) trata um Port-Channel LACP como uma única interface lógica, evitando bloquear membros ativos dentro do agregado.\nII. Cada porta membro de um Port-Channel LACP deve possuir um endereço IP e uma Native VLAN distintos para evitar conflito no balanceamento.\nIII. Tecnologias como MLAG, vPC ou Stack permitem que um servidor ou switch de acesso forme um único Port-Channel LACP conectado a dois switches físicos distintos.\nIV. Quando há mais de 8 portas configuradas para o mesmo bundle, o LACP usa menor System Priority e menor Port Priority para escolher quais ficarão ativas.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.6. LACP. I, III e IV estão corretas. II é falsa porque todas as portas físicas pertencentes ao mesmo Port-Channel devem ter exatamente os mesmos parâmetros de camada 2 (velocidade, duplex, modo access/trunk, Native VLAN e VLANs permitidas) e o endereçamento IP (quando L3) fica na interface lógica do Port-Channel, nunca individualmente nas portas membro.',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. O STP vê o agregado como uma porta lógica, MLAG/vPC permite LAG multi-chassi e prioridades LACP escolhem os links ativos (menor valor vence); II erra ao exigir parâmetros distintos por membro.',
    optionErrors: {
      0: 'Incorreta: omite IV, que descreve corretamente o critério de menor prioridade LACP para seleção das 8 portas ativas.',
      1: 'Incorreta: inclui II (falsa: membros devem ser idênticos) e omite I e III (verdadeiras).',
      3: 'Incorreta: inclui II, contrariando a exigência de uniformidade entre todas as portas membro do Port-Channel.'
    }
  },
  {
    id: 'sarah-1-76',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em servidores Linux que utilizam o módulo de kernel "bonding" conectados a portas de switch configuradas com LACP (IEEE 802.3ad), qual modo de bonding deve ser configurado no servidor e qual modo atua apenas como ativo-backup sem exigir configuração LACP no switch?',
    options: [
      'mode=0 (balance-rr) para LACP e mode=2 (balance-xor) para ativo-backup.',
      'mode=4 (802.3ad) para LACP e mode=1 (active-backup) para ativo-backup.',
      'mode=1 (active-backup) para LACP e mode=4 (802.3ad) para ativo-backup.',
      'mode=6 (balance-alb) para LACP e mode=4 (802.3ad) para ativo-backup.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.6. LACP. No driver Linux bonding, "mode=4 (802.3ad)" implementa o protocolo LACP dinâmico com o switch (exigindo Port-Channel LACP correspondente), enquanto "mode=1 (active-backup)" mantém apenas uma interface ativa por vez com failover transparente, sem exigir agregação no switch.',
    correctAnalysis:
      'No Linux bonding, mode=4 corresponde ao padrão IEEE 802.3ad (LACP) e mode=1 corresponde a active-backup.',
    optionErrors: {
      0: 'Incorreta: mode=0 faz round-robin estático sem LACPDU e mode=2 usa hash estático XOR (não ativo-backup).',
      2: 'Incorreta: inverte exatamente mode=4 (LACP 802.3ad) com mode=1 (active-backup).',
      3: 'Incorreta: mode=6 (balance-alb) faz balanceamento adaptativo local via manipulação ARP sem LACP.'
    }
  },
  {
    id: 'sarah-1-77',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre requisitos, seleção de portas e temporizadores na agregação de enlaces LACP, assinale a afirmação INCORRETA.',
    options: [
      'Todas as interfaces físicas do agregado devem operar com a mesma velocidade, duplex e conjunto de VLANs permitidas.',
      'O LACP aceita combinar uma porta de 1 Gbps e uma porta de 10 Gbps no mesmo Port-Channel ativo, somando 11 Gbps de banda.',
      'Na seleção do mestre LACP, o switch com menor System Priority (ou menor System MAC em empate) decide quais portas ficam ativas.',
      'No temporizador LACP Slow (padrão), as LACPDUs são enviadas a cada 30 s (timeout 90 s); no Fast, a cada 1 s (timeout 3 s).'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.6. LACP. Portas membro de um Port-Channel LACP precisam obrigatoriamente operar na mesma velocidade e modo duplex; misturar 1 Gbps e 10 Gbps faz o switch recusar ou manter fora do bundle a interface incompatível, nunca somando 11 Gbps.',
    correctAnalysis:
      'A opção B é incorreta porque o LACP exige velocidade e duplex idênticos em todas as portas agregadas.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): compatibilidade física e L2 idêntica é requisito obrigatório para formar o bundle.',
      2: 'Incorreta (afirmação verdadeira): vence sempre a menor prioridade (System Priority e Port Priority).',
      3: 'Incorreta (afirmação verdadeira): Slow usa intervalo de 30s (expira em 90s) e Fast usa 1s (expira em 3s).'
    }
  },
  {
    id: 'sarah-1-78',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os protocolos e modos de agregação de enlaces à esquerda às suas características operacionais à direita:\n\nColuna da Esquerda:\n(I) LACP Active (802.1AX)\n(II) LACP Passive (802.1AX)\n(III) PAgP (Desirable / Auto)\n(IV) Modo Estático (On)\n\nColuna da Direita:\n(A) Protocolo proprietário Cisco para negociação dinâmica de EtherChannel.\n(B) Força agregação sem troca de quadros de negociação, elevando o risco de loops se mal configurado.\n(C) Inicia proativamente a negociação enviando quadros LACPDU ao switch vizinho.\n(D) Não inicia negociação sozinho, mas responde e sobe o canal se o vizinho estiver em Active.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-C, II-D, III-A, IV-B.',
      'I-D, II-C, III-A, IV-B.',
      'I-C, II-D, III-B, IV-A.',
      'I-A, II-D, III-C, IV-B.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.6. LACP. LACP Active envia LACPDUs proativamente (C); LACP Passive apenas responde a LACPDUs recebidos (D); PAgP é o protocolo proprietário Cisco equivalente (A); e Modo On força o canal sem sinalização dinâmica (B).',
    correctAnalysis:
      'A associação correta é I-C, II-D, III-A e IV-B.',
    optionErrors: {
      1: 'Incorreta: inverte LACP Active (inicia envio) com LACP Passive (apenas responde).',
      2: 'Incorreta: inverte PAgP (proprietário Cisco) com Modo Estático On (sem negociação).',
      3: 'Incorreta: atribui PAgP ao LACP Active e LACP Active ao PAgP.'
    }
  },
  // ==================== EXPANSÃO FASE B — EIXO 1, LOTE 3 (+34) ====================
  // --- 1.2.7 routing (+6 -> total 7) ---
  {
    id: 'sarah-1-79',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No protocolo OSPF (OSPFv2 para IPv4), qual camada/protocolo de transporte carrega suas mensagens, quais endereços multicast são utilizados e como é calculada por padrão a métrica de custo de um enlace?',
    options: [
      'TCP porta 179, multicast 224.0.0.9 e métrica baseada na contagem de saltos.',
      'IP protocolo 89, multicast 224.0.0.5/224.0.0.6 e métrica inversamente proporcional à banda.',
      'UDP porta 520, multicast 224.0.0.10 e métrica composta por atraso e confiabilidade.',
      'IP protocolo 88, multicast 224.0.0.2 e métrica fixa de valor 1 para qualquer fibra.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.7. routing. O OSPFv2 encapsula pacotes diretamente sobre IP usando o número de protocolo 89 (sem TCP ou UDP), utiliza os endereços multicast 224.0.0.5 (AllSPFRouters) e 224.0.0.6 (AllDRouters) e calcula o custo como Banda de Referência / Banda da Interface (padrão 100 Mbps / banda, ajustável via auto-cost reference-bandwidth).',
    correctAnalysis:
      'O OSPF roda diretamente sobre IP protocolo 89, usa 224.0.0.5 e 224.0.0.6 e define custo inversamente proporcional à largura de banda.',
    optionErrors: {
      0: 'Incorreta: TCP 179 pertence ao BGP, 224.0.0.9 é o multicast do RIPv2 e contagem de saltos é métrica do RIP.',
      2: 'Incorreta: UDP 520 é do RIP, 224.0.0.10 é do EIGRP e atraso/confiabilidade pertencem à métrica composta do EIGRP.',
      3: 'Incorreta: IP protocolo 88 pertence ao EIGRP e 224.0.0.2 representa todos os roteadores em geral (não OSPF).'
    }
  },
  {
    id: 'sarah-1-80',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Dois roteadores OSPF ligados ponto a ponto via enlace Ethernet trocam Hellos corretamente e identificam-se como vizinhos, porém permanecem presos alternando entre os estados EXSTART e EXCHANGE sem alcançar FULL. Qual divergência típica provoca essa falha?',
    options: [
      'Prioridade OSPF definida como 0 em apenas um dos roteadores do enlace.',
      'Diferença de Distância Administrativa configurada manualmente nas pontas.',
      'Divergência de MTU configurada nas interfaces físicas dos dois roteadores.',
      'Existência de rotas estáticas resumidas no roteador com menor Router ID.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.7. routing. Durante a troca de Database Description (DBD) nos estados EXSTART/EXCHANGE, o OSPF verifica o campo MTU da interface dentro do pacote DBD. Se as MTUs divergirem entre os dois vizinhos, a negociação master/slave falha repetidamente e a adjacência não avança para LOADING/FULL.',
    correctAnalysis:
      'Adjacências OSPF presas em EXSTART/EXCHANGE com Hellos OK ocorrem classicamente por divergência de MTU entre as interfaces (que pode ser corrigida igualando MTU ou com ip ospf mtu-ignore).',
    optionErrors: {
      0: 'Incorreta: prioridade 0 apenas impede o roteador de ser eleito DR ou BDR em redes multiacesso, sem travar adjacência em EXSTART.',
      1: 'Incorreta: Distância Administrativa é local a cada roteador e não é negociada nem trocada nos pacotes OSPF.',
      3: 'Incorreta: rotas estáticas locais não impedem a sincronização da LSDB nos estados EXSTART/EXCHANGE.'
    }
  },
  {
    id: 'sarah-1-81',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na seleção de melhor caminho pelo algoritmo do BGP (Border Gateway Protocol), relacione os atributos à esquerda aos seus critérios de desempate à direita:\n\nColuna da Esquerda:\n(I) Weight\n(II) Local Preference\n(III) AS-Path\n(IV) MED (Multi-Exit Discriminator)\n\nColuna da Direita:\n(A) Indica ao AS vizinho qual ponto de entrada preferir; vence o menor valor.\n(B) Atributo local ao roteador (não propagado aos pares); vence o maior valor.\n(C) Lista de sistemas autônomos atravessados; vence a menor quantidade de saltos AS.\n(D) Propagado apenas dentro do mesmo AS (iBGP) para escolher a saída; vence o maior valor.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-B, II-D, III-C, IV-A.',
      'I-D, II-B, III-C, IV-A.',
      'I-B, II-C, III-D, IV-A.',
      'I-B, II-D, III-A, IV-C.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.7. routing. Na ordem clássica de decisão BGP: Weight (local, maior vence — B) -> Local Preference (intra-AS para saída, maior vence — D) -> localmente originada -> menor AS-Path (C) -> Origin -> menor MED (sugestão de entrada, menor vence — A).',
    correctAnalysis:
      'A associação correta é I-B, II-D, III-C e IV-A.',
    optionErrors: {
      1: 'Incorreta: inverte Weight (local ao roteador) com Local Preference (propagado no iBGP).',
      2: 'Incorreta: atribui AS-Path ao Local Preference e saída intra-AS ao AS-Path.',
      3: 'Incorreta: inverte AS-Path (III) com MED (IV).'
    }
  },
  {
    id: 'sarah-1-82',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre operação dos protocolos OSPF e BGP:\n\nI. Em sessões eBGP padrão, os pacotes BGP são enviados com TTL igual a 1, exigindo o parâmetro ebgp-multihop quando os pares não estão diretamente conectados.\nII. No OSPF, anúncios LSA Tipo 1 (Router LSA) são inundados por todo o sistema autônomo atravessando fronteiras ABR entre todas as áreas.\nIII. No protocolo BGP, o atributo Weight é propagado automaticamente entre todos os roteadores iBGP do mesmo sistema autônomo para definir a saída preferencial.\nIV. Em iBGP sem Route Reflectors ou Confederações, exige-se malha completa (full mesh) porque rotas recebidas de um par iBGP não são reanunciadas a outro par iBGP.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2.7. routing. I e IV são verdadeiras. II é falsa porque LSAs Tipo 1 ficam restritos à própria área OSPF; o resumo entre áreas é feito pelo ABR com LSA Tipo 3 (Summary LSA). III é falsa porque Weight é estritamente local ao roteador e nunca é anunciado em atualizações BGP (quem propaga preferência de saída no iBGP é Local Preference).',
    correctAnalysis:
      'Gabarito: Somente I e IV estão corretas. Sessões eBGP usam TTL 1 por padrão e iBGP aplica split-horizon exigindo full mesh ou Route Reflector; LSA Tipo 1 não sai da área e Weight não é propagado.',
    optionErrors: {
      0: 'Incorreta: II é falsa porque LSAs Tipo 1 permanecem restritos dentro da própria área OSPF.',
      1: 'Incorreta: II e III são falsas quanto ao escopo do LSA Tipo 1 e à propagação do atributo Weight.',
      2: 'Incorreta: inclui III, que confunde Weight (local) com Local Preference (propagado no iBGP).'
    }
  },
  {
    id: 'sarah-1-83',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre RIPv2, balanceamento ECMP, sumarização de rotas e redistribuição entre protocolos, assinale a afirmação INCORRETA.',
    options: [
      'O RIPv2 envia atualizações por multicast em 224.0.0.9, inclui a máscara de sub-rede suportando VLSM/CIDR e limita o caminho máximo a 15 saltos.',
      'O balanceamento ECMP (Equal-Cost Multi-Path) instala múltiplas rotas de mesmo prefixo e custo igual na tabela para distribuir fluxos paralelamente.',
      'Na redistribuição entre protocolos (ex.: RIP para OSPF), o RIPv1 deve ser ativado com máscara variável para impedir loops sem uso de route-maps.',
      'A sumarização de rotas contínuas em bordas (ex.: ABR/ASBR) reduz o tamanho da tabela de roteamento e isola instabilidades de links internos.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.7. routing. O RIPv1 é um protocolo legado classful que NÃO suporta VLSM/máscara variável nos anúncios; além disso, redistribuição mútua entre protocolos distintos exige filtragem com route-maps/distribute-lists ou tags para evitar loops de roteamento (routing feedback), jamais ativação de RIPv1.',
    correctAnalysis:
      'A opção C é incorreta porque RIPv1 é classful (sem suporte a máscaras variáveis) e não evita loops na redistribuição (papel de route-maps e route tagging).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): RIPv2 opera em 224.0.0.9, suporta CIDR/VLSM e considera 16 saltos como inalcançável.',
      1: 'Incorreta (afirmação verdadeira): ECMP balanceia tráfego entre múltiplos caminhos de igual métrica e mesma Distância Administrativa.',
      3: 'Incorreta (afirmação verdadeira): sumarizar blocos contíguos no ABR/ASBR enxuga a FIB/RIB e contém flapping de interfaces.'
    }
  },
  {
    id: 'sarah-1-84',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre hierarquia de áreas OSPF e papéis de roteadores no OSPF/BGP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em redes OSPF multiárea, a Área 0 (backbone) é opcional quando áreas não-zero estão interligadas diretamente por um mesmo roteador ABR.\n( ) Um roteador ASBR (Autonomous System Boundary Router) injeta rotas externas redistribuídas no domínio OSPF gerando anúncios LSA Tipo 5 (ou Tipo 7 em NSSA).\n( ) O atributo BGP MED (Multi-Exit Discriminator) é utilizado pelos roteadores internos do próprio AS para escolher qual enlace de saída preferir rumo à Internet.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.7. routing. (1) falsa: todas as áreas OSPF não-zero precisam conectar-se à Área 0 (diretamente ou via Virtual Link) para troca de rotas inter-área; (2) verdadeira: o ASBR redistribui rotas externas usando LSA Tipo 5 (ou Tipo 7 em áreas Not-So-Stubby); (3) falsa: o MED influencia a ENTRADA de tráfego vinda de um AS vizinho; a saída do próprio AS é controlada por Weight/Local Preference.',
    correctAnalysis:
      'Gabarito: F – V – F. Somente a segunda afirmativa é verdadeira quanto ao papel do ASBR e LSAs externos.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois a Área 0 é obrigatória como backbone para roteamento inter-área no OSPF.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre a geração de LSA Tipo 5/7 pelo ASBR.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois MED sugere ponto de entrada ao AS vizinho, enquanto Local Preference define a saída.'
    }
  },

  // --- 1.2.8 DHCP (+6 -> total 7) ---
  {
    id: 'sarah-1-85',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na configuração de escopos DHCPv4 corporativos (RFC 2132), relacione os códigos de opção DHCP à esquerda aos parâmetros entregues aos clientes à direita:\n\nColuna da Esquerda:\n(I) Option 3\n(II) Option 6\n(III) Option 15\n(IV) Option 66 / Option 150\n\nColuna da Direita:\n(A) Nome de domínio DNS sufixo da rede local.\n(B) Endereço IP do servidor TFTP para boot ou provisionamento de telefones IP.\n(C) Endereço IP do roteador padrão (Default Gateway) da sub-rede.\n(D) Endereços IP dos servidores de resolução de nomes DNS.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-C, II-D, III-A, IV-B.',
      'I-D, II-C, III-A, IV-B.',
      'I-C, II-A, III-D, IV-B.',
      'I-C, II-D, III-B, IV-A.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.8. DHCP. As opções clássicas do DHCPv4 são: Option 3 = Router/Default Gateway (C); Option 6 = DNS Servers (D); Option 15 = Domain Name (A); e Options 66 (Boot Server Host Name) / 150 (Cisco TFTP Server IP List) = servidor TFTP para telefonia VoIP ou PXE (B).',
    correctAnalysis:
      'A associação exata é I-C, II-D, III-A e IV-B.',
    optionErrors: {
      1: 'Incorreta: inverte Option 3 (Gateway) com Option 6 (Servidores DNS).',
      2: 'Incorreta: inverte Option 6 (Servidores DNS) com Option 15 (Nome de Domínio).',
      3: 'Incorreta: inverte Option 15 (Domínio) com Options 66/150 (Servidor TFTP).'
    }
  },
  {
    id: 'sarah-1-86',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre o processo de obtenção de endereço no DHCPv4 (ciclo DORA):\n\nQuando uma estação conecta-se sem IP, ela transmite em broadcast a mensagem _____ usando a porta de origem UDP 68 para destino UDP _____; após receber propostas (Offer) de um ou mais servidores, o cliente confirma a escolha enviando _____ em broadcast e passa a usar o endereço ao receber a confirmação final (ACK).',
    options: [
      'DHCPREQUEST / 68 / DHCPDISCOVER',
      'DHCPDISCOVER / 67 / DHCPREQUEST',
      'DHCPOFFER / 67 / DHCPACK',
      'DHCPDISCOVER / 547 / DHCPINFORM'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.8. DHCP. O ciclo DORA inicia com DHCPDISCOVER enviado pelo cliente (UDP 68) para a porta do servidor (UDP 67); após o(s) DHCPOFFER(s), o cliente envia DHCPREQUEST em broadcast identificando o servidor selecionado (Server Identifier), que conclui com DHCPACK.',
    correctAnalysis:
      'Respectivamente: DHCPDISCOVER (1ª mensagem), porta 67 (porta do servidor DHCPv4) e DHCPREQUEST (aceitação da oferta).',
    optionErrors: {
      0: 'Incorreta: inverte a ordem entre DHCPDISCOVER e DHCPREQUEST e atribui porta 68 ao servidor.',
      2: 'Incorreta: DHCPOFFER e DHCPACK são mensagens enviadas pelo servidor, não pelo cliente.',
      3: 'Incorreta: UDP 547 pertence ao DHCPv6 e DHCPINFORM apenas consulta opções quando o host já possui IP estático.'
    }
  },
  {
    id: 'sarah-1-87',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor DHCP concede leases de 24 horas e entra em manutenção offline por 10 horas. Uma estação que recebeu IP há exatamente 12 horas tenta renovar sua concessão, porém não obtém resposta. Segundo a RFC 2131, o que ocorre nos temporizadores T1 (12 h) e T2 (21 h)?',
    options: [
      'Aos 50% (T1) libera imediatamente o IP assumindo APIPA; aos 87,5% (T2) reinicia o DORA.',
      'Aos 50% (T1) envia DHCPREQUEST broadcast a todos; aos 87,5% (T2) envia unicast ao servidor.',
      'Aos 50% (T1) tenta renovar em unicast com o servidor original; aos 87,5% (T2) envia broadcast.',
      'Aos 50% (T1) envia DHCPINFORM em multicast; aos 87,5% (T2) mantém o IP indefinidamente.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.8. DHCP. Na RFC 2131, em T1 (50% do tempo de lease = 12h), o cliente em estado RENEWING envia DHCPREQUEST em unicast diretamente ao servidor que concedeu o IP. Se falhar até T2 (87,5% = 21h), entra em REBINDING enviando DHCPREQUEST em broadcast para qualquer servidor DHCP disponível; somente se expirar 100% (24h) o IP é liberado.',
    correctAnalysis:
      'O temporizador T1 (50%) dispara renovação unicast ao servidor de origem, enquanto T2 (87,5%) amplia a tentativa via broadcast para qualquer servidor DHCP.',
    optionErrors: {
      0: 'Incorreta: o cliente mantém seu IP ativo até expirar 100% do tempo de lease, nunca adotando APIPA em T1.',
      1: 'Incorreta: inverte exatamente o modo de envio entre T1 (unicast) e T2 (broadcast).',
      3: 'Incorreta: renovação usa DHCPREQUEST (não DHCPINFORM) e o IP é obrigatoriamente liberado se o lease expirar em 100%.'
    }
  },
  {
    id: 'sarah-1-88',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre DHCP Relay, Option 82 e mensagens de controle no DHCPv4, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Ao encaminhar um DHCPDISCOVER da VLAN cliente para o servidor DHCP em outra sub-rede, o agente DHCP Relay preenche o campo giaddr com o IP da interface de entrada.\n( ) Na Option 82 (Relay Agent Information), o próprio computador cliente preenche o identificador da porta física do switch antes de emitir o Discover em broadcast.\n( ) Quando um notebook muda para outra VLAN e envia DHCPREQUEST pedindo seu IP antigo, o servidor responde com DHCPDECLINE para invalidar a tentativa.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.8. DHCP. (1) verdadeira: o campo giaddr informa ao servidor DHCP qual escopo/sub-rede utilizar na alocação e para qual interface retornar a resposta; (2) falsa: quem insere a Option 82 (Circuit ID / Remote ID) é o switch ou roteador atuando como agente de relay, nunca o host final; (3) falsa: o servidor responde DHCPNAK (Negative Acknowledgement) para rejeitar pedido inválido — DHCPDECLINE é enviado pelo cliente quando detecta IP duplicado na rede.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa é verdadeira quanto ao preenchimento do campo giaddr pelo agente DHCP Relay.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira, pois giaddr identifica a sub-rede de origem no pacote relayed.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois a Option 82 é inserida pelo switch/relay intermediário, não pelo cliente.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois a rejeição pelo servidor ocorre via DHCPNAK (DHCPDECLINE parte do cliente em conflito de IP).'
    }
  },
  {
    id: 'sarah-1-89',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre segurança, portas e reservas no protocolo DHCPv4:\n\nI. A comunicação DHCPv4 utiliza a porta UDP 67 no servidor (e agentes relay) e a porta UDP 68 no cliente.\nII. Uma reserva DHCP associa permanentemente um endereço IP ao endereço MAC de um equipamento (como impressora), mantendo a entrega centralizada de DNS e gateway.\nIII. Ao ativar DHCP Snooping no switch de acesso, todas as portas conectadas a usuários finais devem ser configuradas como Trusted para permitir ofertas DHCPOFFER.\nIV. Quando não encontra servidor DHCP após tentativas de Discover, uma estação Windows/Linux adota automaticamente um endereço da faixa 172.16.0.0/16 (APIPA).\n\nAssinale a alternativa correta.',
    options: [
      'Somente II e IV estão corretas.',
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.8. DHCP. I e II são verdadeiras. III é falsa porque portas de usuários finais ficam sempre como Untrusted no DHCP Snooping (apenas uplinks e portas de servidores DHCP legítimos são marcados como Trusted). IV é falsa porque a faixa APIPA (Link-Local IPv4, RFC 3927) é 169.254.0.0/16, e não 172.16.0.0/16.',
    correctAnalysis:
      'Gabarito: Somente I e II estão corretas. Portas UDP 67/68 e reservas por MAC estão corretas; portas de usuário ficam Untrusted no DHCP Snooping e APIPA usa 169.254.0.0/16.',
    optionErrors: {
      0: 'Incorreta: IV é falsa porque APIPA utiliza o bloco 169.254.0.0/16 (172.16.0.0/12 é privado RFC 1918).',
      2: 'Incorreta: inclui III, que exporia a rede a servidores Rogue DHCP ao deixar portas de usuário como Trusted.',
      3: 'Incorreta: inclui III e IV, ambas falsas quanto ao trust do DHCP Snooping e ao bloco APIPA.'
    }
  },
  {
    id: 'sarah-1-90',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre alta disponibilidade, escopos e autorização de servidores DHCP corporativos, assinale a afirmação INCORRETA.',
    options: [
      'No failover DHCP em modo Load Balance, dois servidores compartilham o mesmo escopo dividindo as concessões conforme hash do endereço MAC.',
      'Em redes Active Directory, servidores DHCP Windows Server exigem autorização no AD antes de iniciar o atendimento às requisições.',
      'Em alta disponibilidade sem sincronização de estado (escopo dividido), os dois servidores devem anunciar exatamente a mesma faixa de IPs simultaneamente.',
      'No failover DHCP do Windows Server, o parâmetro MCLT limita o tempo extra de lease temporário caso um parceiro perca comunicação.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.8. DHCP. Quando dois servidores DHCP operam sem sincronização de banco de leases (split scope clássico, ex.: regra 80/20), suas faixas ativas NÃO podem se sobrepor — cada servidor deve ter exclusões complementares para evitar distribuição simultânea do mesmo IP a clientes distintos.',
    correctAnalysis:
      'A alternativa C é incorreta porque split scope sem sincronização exige faixas disjuntas (ex.: 80/20 com exclusões), nunca sobreposição total de IPs ativos.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): no DHCP Failover Load Balance (ex.: 50%/50%), o hash do MAC decide qual parceiro responde.',
      1: 'Incorreta (afirmação verdadeira): o serviço DHCP do Windows Server valida autorização no Active Directory antes de responder clientes.',
      3: 'Incorreta (afirmação verdadeira): o MCLT (Maximum Client Lead Time) garante coerência segura de leases durante partição entre parceiros.'
    }
  },

  // --- 1.2.9 DNS (+6 -> total 7) ---
  {
    id: 'sarah-1-91',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Quando uma estação solicita a resolução de "portal.saude.gov.br" ao seu resolvedor DNS interno (sem entrada prévia em cache), como se distinguem os papéis da consulta do cliente e das consultas subsequentes do resolvedor?',
    options: [
      'O cliente faz consulta recursiva ao resolvedor, que realiza consultas iterativas de Root a Autoritativo.',
      'O cliente faz consulta iterativa ao servidor Root, que realiza consulta recursiva até o Autoritativo.',
      'O resolvedor encaminha consultas recursivas em broadcast até localizar o servidor TLD.',
      'O servidor autoritativo executa consultas recursivas ao cliente para validar o registro PTR.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.9. DNS. O stub resolver do cliente envia uma consulta recursiva (bit RD=1) ao resolvedor DNS, exigindo resposta final ou erro. O resolvedor, por sua vez, consulta iterativamente os servidores Root (.), depois os servidores TLD (.br/.gov.br) e por fim o servidor autoritativo da zona, guardando o resultado em cache pelo tempo do TTL.',
    correctAnalysis:
      'Cliente -> Resolvedor é consulta recursiva; Resolvedor -> Root -> TLD -> Autoritativo são consultas iterativas passo a passo.',
    optionErrors: {
      1: 'Incorreta: estações clientes não consultam servidores Root diretamente nem estes fazem recursão para clientes finais.',
      2: 'Incorreta: o DNS nunca utiliza broadcast na resolução hierárquica da Internet.',
      3: 'Incorreta: servidores autoritativos respondem apenas pelas zonas sob sua autoridade, sem consultar clientes.'
    }
  },
  {
    id: 'sarah-1-92',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após atualizar o endereço IP de um servidor web no arquivo de zona do DNS primário tradicional, o administrador percebe que os servidores DNS secundários continuam respondendo o IP antigo mesmo após o intervalo de Refresh. Qual falha de procedimento e qual protocolo/porta explicam o problema?',
    options: [
      'Falta de registro CNAME no ápice da zona; transferências AXFR utilizam porta UDP 161.',
      'Firewall bloqueando UDP 53; atualizações entre primário e secundário nunca usam TCP.',
      'Serial do registro SOA não foi incrementado; transferências AXFR/IXFR usam TCP 53.',
      'TTL do registro A definido abaixo de 300 s; transferências IXFR usam porta TCP 853.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.9. DNS. Servidores secundários consultam o registro SOA do primário no intervalo de Refresh e só iniciam transferência de zona (AXFR completa ou IXFR incremental) sobre TCP porta 53 se o número Serial do SOA for maior que o armazenado localmente.',
    correctAnalysis:
      'Sem incrementar o campo Serial no registro SOA, o DNS secundário entende que a zona não mudou e não solicita transferência AXFR/IXFR via TCP 53.',
    optionErrors: {
      0: 'Incorreta: CNAME não é permitido no ápice da zona e UDP 161 pertence ao SNMP.',
      1: 'Incorreta: transferências de zona DNS (AXFR/IXFR) utilizam justamente TCP porta 53 (não UDP).',
      3: 'Incorreta: TTL baixo não impede replicação entre primário/secundário e TCP 853 é a porta do DNS over TLS (DoT).'
    }
  },
  {
    id: 'sarah-1-93',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito das regras e tipos de registros DNS em zonas autoritativas, assinale a afirmação INCORRETA.',
    options: [
      'O registro NS identifica os servidores DNS autoritativos responsáveis pela delegação da zona.',
      'O registro A mapeia nomes FQDN para endereços IPv4 (32 bits) e o registro AAAA para IPv6 (128 bits).',
      'O registro SOA armazena servidor primário, contato administrativo, número Serial e temporizadores da zona.',
      'Um registro CNAME pode ser criado no ápice (raiz) do domínio coexistindo normalmente com os registros SOA e NS.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2.9. DNS. Pelas RFCs 1034/1912/2181, um registro CNAME não pode coexistir com nenhum outro tipo de registro no mesmo nome DNS. Como o ápice da zona (ex.: exemplo.org.br) possui obrigatoriamente registros SOA e NS, é proibido configurar CNAME na raiz do domínio (em vez disso usam-se registros A/AAAA ou extensões como ALIAS/ANAME resolvidas no servidor).',
    correctAnalysis:
      'A alternativa D é incorreta porque o CNAME não pode coexistir com SOA e NS no ápice da zona.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): registros NS definem os nameservers autoritativos e delegações.',
      1: 'Incorreta (afirmação verdadeira): registros A e AAAA resolvem respectivamente IPv4 e IPv6.',
      2: 'Incorreta (afirmação verdadeira): o registro SOA (Start of Authority) centraliza Serial e timers (Refresh, Retry, Expire, Minimum).'
    }
  },
  {
    id: 'sarah-1-94',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre segurança no protocolo DNS (DNSSEC, DoT e DoH) e transporte padrão, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O DNSSEC assina registros por meio de RRSIG, DNSKEY e DS garantindo autenticidade e integridade contra cache poisoning, sem criptografar as consultas em trânsito.\n( ) Os protocolos DNS over TLS (DoT, porta TCP 853) e DNS over HTTPS (DoH, porta TCP 443) criptografam consultas DNS entre cliente e resolvedor contra interceptação.\n( ) Consultas DNS recursivas padrão utilizam exclusivamente TCP porta 53 desde o primeiro pacote, reservando UDP 53 apenas para transferências de zona AXFR.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – V – F.',
      'V – F – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.9. DNS. (1) verdadeira: DNSSEC autentica respostas com assinaturas digitais, não provendo sigilo/confidencialidade; (2) verdadeira: DoT (TCP 853) e DoH (TCP 443) cifram o transporte das consultas; (3) falsa: consultas padrão usam UDP 53 (passando para TCP 53 em AXFR/IXFR ou respostas truncadas acima de 512 bytes / limite EDNS0).',
    correctAnalysis:
      'Gabarito: V – V – F. DNSSEC garante autenticidade sem criptografia, DoT/DoH cifram consultas em TCP 853/443 e consultas padrão iniciam em UDP 53.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira quanto ao papel de autenticidade/integridade sem cifragem do DNSSEC.',
      2: 'Incorreta: a afirmativa (2) é verdadeira sobre as portas e funções de sigilo do DoT (853) e DoH (443).',
      3: 'Incorreta: a afirmativa (3) é falsa, pois inverte os papéis de UDP 53 (consultas padrão) e TCP 53 (AXFR/respostas grandes).'
    }
  },
  {
    id: 'sarah-1-95',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre Split-Horizon DNS, controle de cache e resolução reversa:\n\nI. No Split-Horizon DNS (Split-DNS), o servidor autoritativo responde sempre o mesmo IP público para consultas internas e externas, delegando a tradução ao NAT.\nII. Reduzir previamente o TTL de um registro A antes de uma migração planejada acelera a expiração do cache em resolvedores externos após a mudança de IP.\nIII. Na resolução reversa de endereços IPv4 para nomes de host (registros PTR), as zonas autoritativas utilizam o domínio especial ip6.arpa.\nIV. O campo Minimum (Negative Caching TTL) do registro SOA define por quanto tempo resolvedores mantêm em cache respostas negativas (NXDOMAIN).\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente III e IV estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.9. DNS. II e IV estão corretas. I é falsa porque o Split-Horizon DNS serve visões distintas: IPs privados internos para clientes internos e IPs públicos para consultas da Internet. III é falsa porque o domínio especial para reverso IPv4 é in-addr.arpa (ip6.arpa destina-se ao IPv6).',
    correctAnalysis:
      'Gabarito: Somente II e IV estão corretas. Baixar TTL antes da virada reduz retenção em cache e SOA Minimum controla cache negativo NXDOMAIN; Split-DNS entrega visões diferentes e reverso IPv4 usa in-addr.arpa.',
    optionErrors: {
      0: 'Incorreta: I é falsa porque Split-DNS entrega respostas diferenciadas (IP privado interno vs IP público externo).',
      1: 'Incorreta: III é falsa porque reverso IPv4 usa in-addr.arpa (e não ip6.arpa).',
      3: 'Incorreta: inclui I, contradizendo o conceito de visões separadas do Split-Horizon DNS.'
    }
  },
  {
    id: 'sarah-1-96',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre diagnóstico e códigos de resposta no protocolo DNS:\n\nQuando o nome consultado não existe na zona do servidor autoritativo, o código retornado é _____; caso o resolvedor falhe internamente ou detecte assinatura DNSSEC inválida, retorna _____; e para validar o caminho iterativo desde os servidores raiz no Linux, utiliza-se o comando _____ com a flag +trace.',
    options: [
      'SERVFAIL / NXDOMAIN / arp',
      'NXDOMAIN / SERVFAIL / dig',
      'REFUSED / NOERROR / traceroute',
      'NXDOMAIN / REFUSED / nslookup'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.9. DNS. NXDOMAIN indica que o nome consultado não existe na zona autoritativa (diferente de NOERROR/NODATA, retornado quando o nome existe mas não possui o tipo de registro solicitado); SERVFAIL indica erro de processamento no servidor ou falha na cadeia DNSSEC; e "dig <dominio> +trace" exibe a resolução iterativa passo a passo a partir dos Root Servers (.).',
    correctAnalysis:
      'A sequência correta é NXDOMAIN (nome inexistente na zona, distinto de NOERROR/NODATA), SERVFAIL (falha de servidor/DNSSEC) e dig (+trace).',
    optionErrors: {
      0: 'Incorreta: inverte NXDOMAIN com SERVFAIL e cita "arp" (camada 2), que não consulta DNS.',
      2: 'Incorreta: REFUSED indica recusa por ACL/política (não erro DNSSEC) e traceroute rastreia saltos IP.',
      3: 'Incorreta: nslookup não possui a opção "+trace" nativa para seguir delegações desde os Root Servers como o dig.'
    }
  },

  // --- 1.2.10 QoS (+5 -> total 7) ---
  {
    id: 'sarah-1-97',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na arquitetura QoS DiffServ, relacione os códigos DSCP (PHB) à esquerda às suas aplicações recomendadas conforme boas práticas (RFC 4594) à direita:\n\nColuna da Esquerda:\n(I) EF (Expedited Forwarding — DSCP 46)\n(II) AF41 (Assured Forwarding — DSCP 34)\n(III) CS3 (Class Selector 3 — DSCP 24)\n(IV) BE / Default (DSCP 0)\n\nColuna da Direita:\n(A) Videoconferência interativa (streaming em tempo real tolerante a leve rajada).\n(B) Tráfego padrão de dados sem garantia prioritária (Best Effort).\n(C) Mídia de voz em tempo real (VoIP RTP), exigindo atraso e jitter mínimos.\n(D) Sinalização de chamadas VoIP/vídeo (como SIP e H.323).\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-A, II-C, III-D, IV-B.',
      'I-C, II-A, III-B, IV-D.',
      'I-C, II-A, III-D, IV-B.',
      'I-D, II-A, III-C, IV-B.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.10. QoS. Segundo o modelo DiffServ (RFC 4594): EF (DSCP 46) atende mídia VoIP RTP (C); AF41 (DSCP 34) atende vídeo interativo (A); CS3 (DSCP 24) atende sinalização SIP (D); e DSCP 0 corresponde ao Best Effort padrão (B).',
    correctAnalysis:
      'A associação exata é I-C (EF 46 -> Voz RTP), II-A (AF41 34 -> Vídeo), III-D (CS3 24 -> Sinalização) e IV-B (BE 0 -> Best Effort).',
    optionErrors: {
      0: 'Incorreta: inverte EF 46 (voz RTP) com AF41 34 (videoconferência).',
      1: 'Incorreta: inverte CS3 24 (sinalização) com Default/BE 0 (Best Effort).',
      3: 'Incorreta: inverte EF 46 (voz RTP) com CS3 24 (sinalização SIP).'
    }
  },
  {
    id: 'sarah-1-98',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um enlace WAN de telemedicina compartilhado por chamadas VoIP e sistemas clínicos TCP, por que o escalonador LLQ (Low Latency Queueing) com teto de banda na fila prioritária é preferido ao Priority Queueing (PQ) puro?',
    options: [
      'Porque o LLQ dispensa classificação e marcação, priorizando automaticamente qualquer pacote UDP que entre na interface.',
      'Porque o LLQ substitui todas as filas por FIFO simples eliminando marcações DSCP na saída.',
      'Porque o PQ puro não oferece prioridade estrita, apenas distribuição proporcional de banda por pesos entre as filas.',
      'Porque o LLQ garante prioridade estrita à voz com limite máximo evitando starvation dos dados.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2.10. QoS. O Priority Queueing (PQ) puro aplica prioridade estrita absoluta, esvaziando a fila alta antes das demais e podendo causar inanição (starvation) nos dados se houver rajada na fila prioritária. O LLQ exige classificação/marcação (ex.: DSCP EF) e combina uma fila de prioridade estrita (com policer de teto máximo) para voz com filas CBWFQ de banda garantida para os demais fluxos.',
    correctAnalysis:
      'O LLQ une fila prioritária limitada (baixa latência/jitter para voz) ao CBWFQ (garantia de banda para dados), prevenindo starvation.',
    optionErrors: {
      0: 'Incorreta: o LLQ depende de class-maps/políticas de classificação (ex.: DSCP EF) para selecionar o tráfego da fila prioritária, não priorizando qualquer UDP indiscriminadamente.',
      1: 'Incorreta: LLQ utiliza múltiplas filas diferenciadas por classe/DSCP, sendo o oposto de FIFO único.',
      2: 'Incorreta: é justamente o PQ puro que oferece prioridade estrita sem limite; distribuição proporcional por pesos caracteriza WFQ/CBWFQ.'
    }
  },
  {
    id: 'sarah-1-99',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os modelos DiffServ/IntServ e fronteira de confiança em QoS, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Políticas de QoS não criam largura de banda adicional; elas gerenciam filas, priorização, atraso, jitter e descarte seletivo durante congestionamentos.\n( ) O modelo IntServ (RSVP) apresenta maior escalabilidade no núcleo da Internet que o DiffServ por operar sem manter estado por fluxo nos roteadores.\n( ) Na fronteira de confiança (Trust Boundary), portas de acesso ligadas a estações comuns não devem confiar em marcações DSCP enviadas pelo usuário.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'V – V – V.',
      'V – F – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.10. QoS. (1) verdadeira: QoS apenas arbitra recursos existentes sob contenção; (2) falsa: o modelo IntServ/RSVP armazena estado e reserva por fluxo em cada roteador (baixa escalabilidade no core), ao passo que o DiffServ é stateless por salto (PHB); (3) verdadeira: estações não confiáveis devem ter marcações zeradas/remarcadas na porta do switch de acesso.',
    correctAnalysis:
      'Gabarito: V – F – V. DiffServ (não IntServ) é o modelo escalável sem estado por fluxo; QoS atua no congestionamento e exige Trust Boundary.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é verdadeira, pois QoS ordena/descarta filas existentes sem ampliar a banda física.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois IntServ exige estado por fluxo em cada salto e não escala no core como DiffServ.',
      3: 'Incorreta: a afirmativa (3) é verdadeira, pois deixar portas de PCs como trusted permite que usuários marquem EF 46 indevidamente.'
    }
  },
  {
    id: 'sarah-1-100',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre gerenciamento de filas, Tail Drop e WRED (Weighted Random Early Detection) em QoS, assinale a afirmação INCORRETA.',
    options: [
      'O descarte por Tail Drop ocorre somente quando a fila atinge capacidade máxima, podendo causar sincronização global TCP.',
      'A sincronização global TCP faz múltiplos fluxos reduzirem suas janelas de congestionamento juntos, subutilizando o enlace.',
      'O WRED descarta com maior probabilidade os pacotes de menor drop precedence (por exemplo, AF11 antes de AF13) quando a profundidade média da fila cresce.',
      'O WRED monitora a profundidade média da fila e inicia descartes probabilísticos antecipados diferenciados por DSCP.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.10. QoS. No WRED baseado em DSCP/Assured Forwarding, pacotes com MAIOR drop precedence (como AF13, cujo limiar mínimo de descarte é menor) são descartados com maior probabilidade e antes dos pacotes de menor drop precedence (como AF11), protegendo o tráfego mais importante dentro da classe durante congestionamentos.',
    correctAnalysis:
      'A alternativa C é incorreta porque inverte a ordem de descarte no WRED: AF13 (maior drop precedence) é descartado antes de AF11 (menor drop precedence).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Tail Drop descarta apenas no estouro total da fila, induzindo sincronização global TCP.',
      1: 'Incorreta (afirmação verdadeira): a redução simultânea das janelas TCP gera ciclos de oscilação (sawtooth) e queda de vazão média.',
      3: 'Incorreta (afirmação verdadeira): WRED descarta gradualmente conforme média da fila e aplica pesos distintos por marcação DSCP/Precedence.'
    }
  },
  {
    id: 'sarah-1-101',
    editalItemId: '1.2.10',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre marcação de prioridade L2/L3 e controle de taxa em QoS:\n\nI. A marcação CoS (802.1p, 3 bits) contida na tag Ethernet 802.1Q é preservada nativamente através de saltos Layer 3 na WAN sem necessidade de mapeamento para DSCP.\nII. Em portas com telefone IP e PC acoplado, o switch pode confiar no CoS/DSCP proveniente da Voice VLAN do telefone enquanto remarca o tráfego de dados do PC.\nIII. No modelo DiffServ, o código DSCP ocupa 6 bits do byte ToS (IPv4) ou Traffic Class (IPv6), permitindo até 64 valores distintos (0 a 63).\nIV. O Traffic Shaping descarta imediatamente os pacotes que excedem a taxa contratada (CIR) sem armazená-los em buffer, evitando adicionar atraso.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.10. QoS. II e III estão corretas. I é falsa porque a marcação CoS existe somente na etiqueta L2 802.1Q e desaparece ao cruzar roteadores L3 (onde apenas o campo IP DSCP permanece fim a fim). IV é falsa porque o Traffic Shaping retém excedentes em buffer (gerando atraso controlado); quem descarta imediatamente sem buffer é o Traffic Policing.',
    correctAnalysis:
      'Gabarito: Somente II e III estão corretas. Trust condicional para telefone IP e 6 bits de DSCP (0–63) estão corretos; CoS é apenas L2 e Shaping usa buffer.',
    optionErrors: {
      0: 'Incorreta: I é falsa porque cabeçalhos Ethernet 802.1Q (e o campo CoS) são removidos a cada salto de roteamento L3.',
      2: 'Incorreta: inclui I e IV (ambas falsas sobre sobrevivência L3 do CoS e buffer do Traffic Shaping).',
      3: 'Incorreta: inclui IV, que confunde Traffic Shaping (buffer) com Traffic Policing (descarte imediato).'
    }
  },

  // --- 1.2.11 switching (+5 -> total 7) ---
  {
    id: 'sarah-1-102',
    editalItemId: '1.2.11',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre controle de acesso na camada 2 com Port Security em switches gerenciáveis, relacione os modos e recursos à esquerda aos respectivos comportamentos à direita:\n\nColuna da Esquerda:\n(I) Modo Shutdown (padrão)\n(II) Modo Restrict\n(III) Modo Protect\n(IV) Sticky MAC\n\nColuna da Direita:\n(A) Descarta quadros de MACs não autorizados silenciosamente, sem incrementar contador nem gerar log/trap.\n(B) Converte MACs aprendidos dinamicamente na porta em entradas seguras gravadas na configuração.\n(C) Descarta quadros de MACs não autorizados, incrementa o contador de violação e envia syslog/SNMP trap.\n(D) Desabilita imediatamente a interface em estado err-disable e envia alerta ao ocorrer violação.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-D, II-C, III-A, IV-B.',
      'I-C, II-D, III-A, IV-B.',
      'I-D, II-A, III-C, IV-B.',
      'I-D, II-C, III-B, IV-A.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.11. switching. No Port Security: Shutdown (padrão) coloca a porta em err-disable (D); Restrict descarta o tráfego não autorizado e registra log/contador/trap sem derrubar a porta (C); Protect apenas descarta silenciosamente (A); e Sticky MAC persiste endereços aprendidos na configuração (B).',
    correctAnalysis:
      'A associação correta é I-D, II-C, III-A e IV-B.',
    optionErrors: {
      1: 'Incorreta: inverte Shutdown (derruba em err-disable) com Restrict (descarta + gera log/trap mantendo porta UP).',
      2: 'Incorreta: inverte Restrict (gera log/trap) com Protect (descarte silencioso).',
      3: 'Incorreta: atribui Sticky MAC a Protect e Protect a Sticky MAC.'
    }
  },
  {
    id: 'sarah-1-103',
    editalItemId: '1.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após habilitar DHCP Snooping e Dynamic ARP Inspection (DAI) na VLAN 20 de um switch de acesso, todas as estações via DHCP comunicam-se normalmente, mas uma impressora com IP estático na mesma VLAN para de responder na rede e tem seus pacotes ARP descartados. Qual a causa e a solução?',
    options: [
      'O Port Security bloqueou o MAC da impressora; deve-se desativar a VLAN 20 no trunk.',
      'Não há registro da impressora na tabela de binding DHCP; criar ARP ACL estática no DAI.',
      'O DAI bloqueia qualquer tráfego UDP em portas access; mover a impressora para VLAN 1.',
      'O Storm Control zerou o aging time CAM; ativar DHCP Relay na porta da impressora.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.11. switching. O Dynamic ARP Inspection (DAI) valida pacotes ARP recebidos em portas untrusted comparando IP+MAC contra a tabela de binding do DHCP Snooping. Dispositivos com IP estático nunca passaram pelo ciclo DORA, não constando no binding; a correção segura é criar uma ARP Access-List estática e aplicá-la ao DAI da VLAN (ou marcar apenas aquela porta específica como arp inspection trust).',
    correctAnalysis:
      'Sem entrada na tabela de binding do DHCP Snooping, o DAI descarta o ARP do equipamento com IP estático até que se configure uma ARP ACL estática ou trust específico.',
    optionErrors: {
      0: 'Incorreta: o sintoma descrito é descarte específico de pacotes ARP após ativar DAI, não bloqueio de porta por Port Security.',
      2: 'Incorreta: o DAI inspeciona exclusivamente pacotes ARP (L2/0x0806), não tráfego UDP.',
      3: 'Incorreta: DHCP Relay não popula tabela do DHCP Snooping para IPs estáticos nem Storm Control altera aging time CAM.'
    }
  },
  {
    id: 'sarah-1-104',
    editalItemId: '1.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Logs de um switch indicam MAC flapping constante (o mesmo MAC alternando rapidamente entre as portas Gi1/0/8 e Gi1/0/22) acompanhado de tempestade de broadcast saturando os uplinks. Qual é a causa provável e qual recurso contém a saturação por broadcast na camada 2?',
    options: [
      'Falha de DNS reverso no servidor; contenção imediata com Traffic Shaping na SVI.',
      'Expiração de lease DHCP; contenção imediata com Port Security em modo Sticky.',
      'Loop de camada 2 na rede; contenção imediata com Storm Control configurado na porta.',
      'Divergência de MTU no trunk; contenção imediata com Proxy ARP na VLAN afetada.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.11. switching. MAC flapping (um mesmo endereço MAC sendo reaprendido em portas distintas a cada milissegundo) junto com tempestade de broadcast é sintoma clássico de loop físico em camada 2 (ex.: STP desabilitado ou cabo ligando duas portas via hub/switch não gerenciado). O Storm Control limita a taxa de broadcast/multicast/unknown-unicast por porta evitando paralisação total do switch.',
    correctAnalysis:
      'MAC flapping + saturação de broadcast indica loop L2, cujo impacto imediato de tráfego BUM é contido pelo Storm Control na interface.',
    optionErrors: {
      0: 'Incorreta: falhas de DNS reverso não geram oscilação de endereço MAC entre portas nem tempestade L2.',
      1: 'Incorreta: expiração de lease DHCP não faz um MAC alternar rapidamente entre duas portas físicas.',
      3: 'Incorreta: divergência de MTU causa fragmentação/perda de pacotes grandes, não MAC flapping nem tempestade de broadcast.'
    }
  },
  {
    id: 'sarah-1-105',
    editalItemId: '1.2.11',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre arquitetura de switches Layer 3, segurança L2 e empilhamento:\n\nI. Em switches Layer 3 (multilayer), o roteamento entre SVIs e a aplicação de ACLs ocorrem em hardware dedicado (ASIC/TCAM) com encaminhamento via CEF/FIB em wire-speed.\nII. O recurso IP Source Guard (IPSG) utiliza a tabela de binding do DHCP Snooping para bloquear pacotes cujo IP de origem tenha sido falsificado em uma porta access.\nIII. O Storm Control atua apenas sobre tráfego unicast conhecido, não sendo capaz de limitar broadcast e multicast em uma porta.\nIV. Em uma pilha (Stack) de switches físicos com plano de controle unificado, cada membro mantém sua tabela MAC isolada exigindo roteador externo entre eles.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.11. switching. I e II estão corretas. III é falsa porque o Storm Control limita justamente tráfego broadcast, multicast e unicast desconhecido (BUM) na porta de camada 2. IV é falsa porque switches em Stack unificado compartilham plano de controle e tabela MAC única por meio dos cabos de stack.',
    correctAnalysis:
      'Gabarito: Somente I e II estão corretas. Encaminhamento L3 em ASIC/TCAM e validação IP via IPSG + DHCP Snooping estão corretos; Storm Control limita broadcast/multicast/unknown-unicast e Stack compartilha tabela MAC.',
    optionErrors: {
      1: 'Incorreta: IV é falsa porque switches empilhados (Stack) compartilham uma única tabela MAC lógica.',
      2: 'Incorreta: inclui III, pois o Storm Control atua exatamente limitando broadcast, multicast e unicast desconhecido (BUM).',
      3: 'Incorreta: inclui III e IV, ambas falsas sobre Storm Control (que limita BUM) e comportamento de tabela MAC em Stack.'
    }
  },
  {
    id: 'sarah-1-106',
    editalItemId: '1.2.11',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre comutação Ethernet, tecnologias MLAG/vPC, DHCP Snooping e tabela CAM, assinale a afirmação INCORRETA.',
    options: [
      'A tabela CAM (Content Addressable Memory) armazena associações MAC–Porta–VLAN permitindo consulta paralela em hardware.',
      'Em arquiteturas MLAG ou vPC entre dois switches core, os dois equipamentos fundem seus planos de controle em um único sistema operacional.',
      'O DHCP Snooping bloqueia mensagens DHCPOFFER e DHCPACK recebidas em portas untrusted para impedir servidores Rogue DHCP.',
      'Uma porta desativada em err-disable por violação de Port Security requer intervenção manual ou timer de errdisable recovery para voltar.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.11. switching. A grande vantagem do MLAG / Cisco vPC frente ao Stack/VSS tradicional é justamente manter os planos de controle INDEPENDENTES nos dois switches físicos (cada switch continua gerenciado separadamente, reduzindo blast radius de upgrades e falhas de software), sincronizando apenas estados MAC/ARP via peer-link.',
    correctAnalysis:
      'A alternativa B é incorreta porque no MLAG/vPC os planos de controle permanecem independentes em cada chassi físico (fusão de plano de controle ocorre em Stack/VSS/IRF).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a memória CAM realiza busca em O(1) por MAC+VLAN em hardware.',
      2: 'Incorreta (afirmação verdadeira): portas untrusted do DHCP Snooping descartam respostas de servidores DHCP falsos.',
      3: 'Incorreta (afirmação verdadeira): portas em err-disable exigem shutdown/no shutdown ou errdisable recovery.'
    }
  },

  // --- 1.2.12 troubleshooting (+6 -> total 7) ---
  {
    id: 'sarah-1-107',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor ligado a um switch de acesso exibe link UP, mas a cópia de arquivos cai para menos de 1 Mbps. Ao rodar "show interfaces" no switch, observam-se milhares de "late collisions" e "CRC errors", e o status mostra 100 Mbps Half-Duplex enquanto o servidor está fixado em 100 Mbps Full-Duplex. Qual é a causa?',
    options: [
      'Duplex mismatch causado por um lado fixado em Full-Duplex e o outro em autonegociação.',
      'Cabo com um par rompido, limitando o enlace a 100 Mbps e gerando erros CRC sem relação com o modo duplex.',
      'MTU divergente entre servidor e switch, provocando fragmentação dos quadros e colisões tardias na porta.',
      'Loop de camada 2 com tempestade de broadcast, gerando colisões tardias na porta do servidor.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.12. troubleshooting. Quando uma ponta é fixada manualmente (desativando autonegociação) em 100/Full e a outra permanece em auto, a ponta em autonegociação detecta a velocidade por sinalização elétrica mas faz fallback padrão para Half-Duplex (IEEE 802.3u). Isso causa duplex mismatch: colisões tardias (late collisions) no lado Half e erros FCS/CRC no lado Full.',
    correctAnalysis:
      'Fixar velocidade/duplex apenas em um lado força o vizinho em autonegociação a cair para Half-Duplex, gerando late collisions, CRC errors e lentidão severa.',
    optionErrors: {
      1: 'Incorreta: um par rompido pode impedir Gigabit e reduzir para 100 Mbps (2 pares), mas em 100BASE-TX íntegro o duplex negociado seria Full se ambos autonegociassem, não explicando 100/Half no switch com late collisions.',
      2: 'Incorreta: divergência de MTU causa descarte de quadros maiores (giants) ou fragmentação IP em camada 3, sem forçar Half-Duplex nem produzir late collisions.',
      3: 'Incorreta: loop L2 provoca tempestade de broadcast e MAC flapping entre portas, não negociação Half-Duplex com late collisions em link dedicado.'
    }
  },
  {
    id: 'sarah-1-108',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No troubleshooting em servidores Linux e estações de rede, relacione as ferramentas à esquerda às suas respectivas finalidades à direita:\n\nColuna da Esquerda:\n(I) tcpdump\n(II) ss -tulnp\n(III) ip route get 10.50.0.10\n(IV) dig @10.0.0.5 intranet.local\n\nColuna da Direita:\n(A) Lista sockets TCP e UDP em escuta junto aos respectivos processos locais.\n(B) Consulta diretamente um servidor DNS específico exibindo registros, TTL e flags.\n(C) Captura e filtra pacotes em tempo real diretamente nas interfaces de rede.\n(D) Consulta a tabela de roteamento do kernel informando próximo salto e interface de saída.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-A, II-C, III-D, IV-B.',
      'I-C, II-A, III-D, IV-B.',
      'I-C, II-D, III-A, IV-B.',
      'I-C, II-A, III-B, IV-D.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.12. troubleshooting. tcpdump captura pacotes (C); ss -tulnp lista portas TCP/UDP listening e PIDs (A); ip route get mostra exatamente qual rota, IP de origem e interface o kernel usará para alcançar o alvo (D); e dig testa resolução contra o servidor DNS especificado (B).',
    correctAnalysis:
      'A correspondência exata é I-C, II-A, III-D e IV-B.',
    optionErrors: {
      0: 'Incorreta: inverte tcpdump (captura de pacotes) com ss -tulnp (sockets em escuta).',
      2: 'Incorreta: inverte ss -tulnp com ip route get.',
      3: 'Incorreta: inverte ip route get (roteamento) com dig (consulta DNS).'
    }
  },
  {
    id: 'sarah-1-109',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os utilitários de diagnóstico de caminho traceroute, tracert e mtr/pathping, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Por padrão, o traceroute no Linux envia sondas UDP para portas altas (33434+), enquanto o tracert no Windows envia pacotes ICMP Echo Request.\n( ) Se um roteador intermediário exibir "* * *" no traceroute, isso comprova que o tráfego útil também está sendo descartado antes de alcançar o destino final.\n( ) Ferramentas como mtr e pathping combinam descoberta de saltos por TTL com envio contínuo de sondas para medir perda e latência por salto.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.12. troubleshooting. (1) verdadeira: traceroute Linux usa UDP portas 33434+ por padrão (ou ICMP com -I / TCP com -T), enquanto tracert Windows usa ICMP Echo Request; (2) falsa: "* * *" em salto intermediário pode ser apenas rate-limit ou filtro de ICMP Time Exceeded no plano de controle daquele roteador, enquanto os saltos seguintes e o destino respondem normalmente; (3) verdadeira: mtr/pathping avaliam perda real ao longo do tempo por salto.',
    correctAnalysis:
      'Gabarito: V – F – V. Sondas UDP vs ICMP e função do mtr/pathping estão corretas; asteriscos intermediários isolados não provam perda até o destino.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira quanto aos protocolos padrão distintos entre traceroute (Linux) e tracert (Windows).',
      1: 'Incorreta: a afirmativa (2) é falsa, pois asteriscos em um salto intermediário podem refletir apenas controle de ICMP no roteador.',
      3: 'Incorreta: a afirmativa (3) é verdadeira, pois mtr/pathping correlacionam perda e latência salto a salto.'
    }
  },
  {
    id: 'sarah-1-110',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre comandos de diagnóstico em camadas de rede:\n\nI. Em Windows, Test-NetConnection -ComputerName 10.20.1.50 -Port 443 valida o handshake TCP na porta 443, diferenciando bloqueio de firewall L4 de resposta apenas a ping ICMP.\nII. Na análise de "show interfaces" em switches, contadores crescentes de CRC e input errors indicam esgotamento da tabela ARP no servidor de destino em camada 3.\nIII. O comando "arp -a" (ou "ip neigh") exibe o cache local IPv4-para-MAC na sub-rede, permitindo identificar entradas incompletas ou duplicidade de MAC.\nIV. Executar "ipconfig /flushdns" no Windows apaga imediatamente a tabela ARP local e força a renovação da concessão DHCP do adaptador.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2.12. troubleshooting. I e III estão corretas. II é falsa porque erros CRC e input errors sinalizam falha física/camada 2 (cabo, transceiver SFP, interferência EMI ou duplex mismatch), nunca tabela ARP L3 no destino. IV é falsa porque "ipconfig /flushdns" limpa apenas o cache DNS local (para ARP usa-se arp -d / netsh e para DHCP usa-se /release e /renew).',
    correctAnalysis:
      'Gabarito: Somente I e III estão corretas. Test-NetConnection testa porta TCP L4 e arp -a/ip neigh inspeciona resolução L2/L3 local; CRC é falha física/L2 e /flushdns limpa apenas DNS.',
    optionErrors: {
      1: 'Incorreta: II e IV são falsas quanto à causa dos erros CRC e ao efeito do comando ipconfig /flushdns.',
      2: 'Incorreta: inclui II, que atribui falhas físicas/L2 (CRC) à tabela ARP em camada 3.',
      3: 'Incorreta: inclui IV, que confunde limpeza de cache DNS com limpeza de ARP e renovação DHCP.'
    }
  },
  {
    id: 'sarah-1-111',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre análise de pacotes com tcpdump/Wireshark e interpretação de contadores de erro Ethernet, assinale a afirmação INCORRETA.',
    options: [
      'No tcpdump, o filtro "host 10.1.1.5 and tcp port 443" captura apenas pacotes envolvendo esse endereço na porta TCP 443.',
      'No tcpdump, a opção "-nn" força a resolução reversa DNS e de nomes de serviços para exibir nomes legíveis na captura.',
      'No Wireshark, sequências repetidas de "TCP Dup ACK" seguidas de "TCP Retransmission" indicam perda de pacotes no caminho.',
      'Quadros recebidos menores que o mínimo Ethernet de 64 bytes com FCS inválido são contabilizados como "runts" na interface.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2.12. troubleshooting. No tcpdump, a flag "-n" desabilita resolução de endereços IP para nomes DNS e "-nn" desabilita também a conversão de números de porta para nomes de serviços (exibindo IPs e portas numéricas brutas), acelerando a captura e evitando gerar tráfego DNS adicional durante o diagnóstico.',
    correctAnalysis:
      'A alternativa B é incorreta porque "-nn" faz exatamente o oposto: desativa a resolução de nomes de hosts e portas.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a sintaxe BPF "host X and tcp port Y" filtra exatamente esse fluxo.',
      2: 'Incorreta (afirmação verdadeira): múltiplos Duplicate ACKs disparam Fast Retransmit indicando perda prévia de segmentos.',
      3: 'Incorreta (afirmação verdadeira): quadros abaixo de 64 bytes com erro de FCS são classificados como runts.'
    }
  },
  {
    id: 'sarah-1-112',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre diagnóstico isolado de falhas na pilha TCP/IP:\n\nSe um host Linux exibe entrada INCOMPLETE/FAILED em "ip neigh" ao tentar alcançar seu gateway, a falha encontra-se na camada _____; se um cliente recebe imediatamente um segmento _____ ao tentar conectar na porta TCP 8443, isso indica que o pacote chegou ao destino mas nenhum processo escuta na porta; já um firewall configurado com DROP silencioso faz o cliente sofrer _____ sem resposta imediata.',
    options: [
      '3 (Rede) / FIN / reset imediato',
      '4 (Transporte) / SYN-ACK / bloqueio ICMP',
      '2 (Enlace) / RST / timeout de conexão',
      '7 (Aplicação) / RST / erro de DNS'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2.12. troubleshooting. Falha em resolver o MAC do gateway via ARP ("ip neigh") impede a entrega L2 (camada 2 / Enlace); quando o destino recebe o SYN sem serviço escutando na porta, responde TCP RST (Reset) imediato (ou firewall com REJECT); já um firewall em modo DROP descarta silenciosamente o SYN causando timeout no cliente após retransmissões.',
    correctAnalysis:
      'A sequência correta é 2 (Enlace — falha de resolução ARP), RST (porta fechada / reject) e timeout de conexão (drop silencioso).',
    optionErrors: {
      0: 'Incorreta: falha de resolução MAC no gateway ocorre em L2 (não L3), porta fechada envia RST (não FIN) e DROP gera timeout.',
      1: 'Incorreta: porta fechada não responde SYN-ACK (que indica porta aberta) e DROP não retorna bloqueio ICMP.',
      3: 'Incorreta: falha de ARP no gateway não é camada 7 nem DROP de firewall L4 provoca erro de DNS.'
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
  // ==================== EXPANSÃO FASE B — EIXO 2, LOTE 1 (+26) ====================
  // --- 2.1.1 Dispositivos de segurança (firewalls, IDS, IPS, proxies, NAT e VPN) (+5 -> total 7) ---
  {
    id: 'sarah-2-22',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na comparação conceitual entre gerações de dispositivos de filtragem de borda, qual capacidade distingue um WAF (Web Application Firewall) de um firewall stateful tradicional de camadas 3 e 4?',
    options: [
      'A manutenção da tabela de estados de sessão TCP (3-way handshake) para liberar o tráfego de retorno.',
      'A tradução dinâmica de endereços privados RFC 1918 para um endereço IP público na saída WAN.',
      'O estabelecimento de túneis IPsec em modo Túnel com protocolo ESP e troca de chaves IKEv2.',
      'A inspeção sintática e semântica do payload HTTP/HTTPS para mitigar SQL Injection e XSS (OWASP).'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.1.1. Dispositivos de segurança. Enquanto um firewall stateful L3/L4 controla IPs, portas e estado das sessões TCP/UDP (e pode fazer NAT/IPsec), o WAF atua especificamente na camada 7 HTTP/HTTPS analisando cabeçalhos, métodos, cookies e parâmetros para bloquear ataques web como SQL Injection, XSS e CSRF.',
    correctAnalysis:
      'O WAF diferencia-se por inspecionar profundamente o protocolo HTTP/HTTPS na camada de aplicação contra vulnerabilidades web (OWASP Top 10).',
    optionErrors: {
      0: 'Incorreta: manter tabela de estados L4 para liberar pacotes de retorno é exatamente a função básica do firewall stateful.',
      1: 'Incorreta: traduzir endereços privados em IP público é função de SNAT/PAT, presente em roteadores e firewalls L3/L4.',
      2: 'Incorreta: fechar túneis VPN IPsec/ESP pertence a gateways VPN ou firewalls de borda, não à definição específica de um WAF.'
    }
  },
  {
    id: 'sarah-2-23',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre métodos de detecção, posicionamento e limites conceituais de dispositivos de segurança, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A detecção baseada em assinaturas em IDS/IPS apresenta baixa taxa de falso-positivo para ameaças catalogadas, mas depende de atualizações contínuas contra ataques zero-day.\n( ) Em um IPS posicionado em linha (inline), a falha de hardware no modo fail-close interrompe o tráfego daquele enlace priorizando a segurança em vez da disponibilidade.\n( ) O uso isolado de NAT dinâmico (PAT/Overload) na borda substitui o controle stateful de firewall, pois bloqueia automaticamente conexões iniciadas a partir da LAN.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'V – V – V.',
      'F – V – F.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.1.1. Dispositivos de segurança. (1) verdadeira: assinaturas são precisas para exploits conhecidos, porém ineficazes para zero-days inéditos (papel da detecção por anomalias/heurística); (2) verdadeira: fail-close derruba o link em pane do IPS, enquanto fail-open (bypass) mantém passagem sem inspeção; (3) falsa: NAT/PAT não substitui firewall — ele oculta IPs internos na entrada, mas por si só não filtra tráfego de saída nem inspeciona aplicações.',
    correctAnalysis:
      'Gabarito: V – V – F. Assinaturas vs zero-day e fail-close no IPS inline estão corretas; NAT isolado não substitui políticas de filtragem de um firewall.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (2) é verdadeira, pois fail-close interrompe o tráfego caso o IPS inline falhe.',
      1: 'Incorreta: a afirmativa (3) é falsa, pois NAT traduz endereços mas não substitui filtragem de saída nem inspeção de firewall.',
      2: 'Incorreta: a afirmativa (1) é verdadeira sobre a precisão das assinaturas frente a ameaças conhecidas e sua limitação para zero-day.'
    }
  },
  {
    id: 'sarah-2-24',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um hospital precisa publicar seu portal de resultados de exames sem expor diretamente o endereço IP do servidor de aplicação na Internet, realizando também terminação TLS e cache de conteúdo estático na DMZ. Qual dispositivo atende conceitualmente a esse posicionamento?',
    options: [
      'IDS passivo conectado à porta SPAN do switch core analisando cópias do tráfego HTTP.',
      'Proxy direto (Forward Proxy) configurado no navegador das estações internas de trabalho.',
      'Proxy reverso posicionado na DMZ à frente dos servidores web internos do ambiente.',
      'Firewall Packet Filter (stateless) liberando a porta TCP 443 bidirecionalmente sem NAT.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.1.1. Dispositivos de segurança. O Proxy Reverso recebe conexões vindas de clientes externos em nome dos servidores internos, ocultando a topologia real do backend, realizando SSL/TLS offloading, cache e balanceamento de carga na DMZ.',
    correctAnalysis:
      'Proteger servidores internos diante de acessos externos com terminação TLS e ocultação do backend caracteriza o Proxy Reverso.',
    optionErrors: {
      0: 'Incorreta: um IDS passivo apenas monitora cópias do tráfego para alerta, não recebendo conexões nem terminando sessões TLS.',
      1: 'Incorreta: Forward Proxy intermedia clientes internos saindo para a Internet, não acessos externos entrando para servidores internos.',
      3: 'Incorreta: Packet Filter stateless não faz terminação TLS, não oculta aplicação com cache HTTP e ainda exige regras manuais nos dois sentidos.'
    }
  },
  {
    id: 'sarah-2-25',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas conceituais sobre proxies, VPNs e sistemas de detecção/prevenção:\n\nI. A VPN (Virtual Private Network) garante confidencialidade, integridade e autenticação por meio de encapsulamento criptográfico sobre redes públicas não confiáveis.\nII. Um IDS conectado via Network TAP altera o cabeçalho IP dos pacotes antes que eles alcancem o servidor web, eliminando exploits em tempo real.\nIII. Na comparação de proxy direto, o modo explícito exige configuração de endereço/porta (manual, GPO ou PAC/WPAD) no cliente, enquanto o modo transparente intercepta via roteamento.\nIV. A técnica de detecção baseada em anomalias em um IDS possui taxa de falsos positivos menor que a detecção por assinaturas conhecidas.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.1.1. Dispositivos de segurança. I e III são verdadeiras. II é falsa porque um IDS via TAP recebe apenas uma cópia passiva fora de banda (out-of-band), não interceptando nem modificando o pacote original em trânsito. IV é falsa porque a detecção por anomalias gera tipicamente MAIS falsos positivos do que assinaturas específicas, já que variações legítimas de tráfego podem desviar da baseline.',
    correctAnalysis:
      'Gabarito: Somente I e III estão corretas. VPN garante proteção criptográfica fim a fim/site-to-site e proxy explícito vs transparente diferem pela configuração no cliente.',
    optionErrors: {
      1: 'Incorreta: II e IV são falsas quanto ao papel passivo do IDS via TAP e à maior taxa de falsos positivos da detecção por anomalias.',
      2: 'Incorreta: inclui II, que atribui bloqueio/alteração inline ao IDS conectado em TAP passivo.',
      3: 'Incorreta: inclui IV, invertendo a taxa de falsos positivos entre detecção por assinaturas e por anomalias.'
    }
  },
  {
    id: 'sarah-2-26',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre dispositivos de visibilidade e controle de acesso na rede:\n\nUm sistema _____ conectado a uma porta SPAN monitora cópias de tráfego sem introduzir latência no encaminhamento; por outro lado, o controle de saída corporativa para navegação web com autenticação de usuário e cache de objetos é tipicamente desempenhado por um _____; e a filtragem _____ examina cada pacote isoladamente sem acompanhar o estado da conexão TCP.',
    options: [
      'IPS inline / Proxy reverso / stateful',
      'IDS passivo / Proxy direto / stateless',
      'WAF / Proxy direto / stateful',
      'IDS passivo / Proxy reverso / stateless'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.1.1. Dispositivos de segurança. Um IDS passivo opera fora da linha via SPAN/TAP sem adicionar latência; o Proxy direto (Forward Proxy) intermedia a saída web dos usuários internos com cache/filtro URL; e um filtro de pacotes stateless avalia pacotes isoladamente sem tabela de sessões.',
    correctAnalysis:
      'Respectivamente: IDS passivo (SPAN sem latência), Proxy direto (saída web dos clientes) e filtragem stateless (sem estado de conexão).',
    optionErrors: {
      0: 'Incorreta: IPS inline introduz latência em série (não usa SPAN), proxy reverso protege entrada de servidores e stateful acompanha sessões.',
      2: 'Incorreta: WAF protege aplicações web na entrada e filtragem stateful acompanha estado de sessões.',
      3: 'Incorreta: na saída de estações internas para a Internet utiliza-se Proxy direto (Forward Proxy), não Proxy reverso.'
    }
  },

  // --- 2.1.2 Tipos de ataques a redes (+5 -> total 7) ---
  {
    id: 'sarah-2-27',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um link corporativo sofre saturação de 10 Gbps por respostas UDP massivas oriundas da porta 11211 (Memcached) e da porta 123 (NTP monlist) de servidores de terceiros na Internet, sem que a rede alvo tenha enviado requisições. Qual técnica de ataque está em curso e qual prática nos ISPs de origem a previne na raiz?',
    options: [
      'Ataque de força bruta distribuída; mitigação na raiz com bloqueio de contas no Active Directory.',
      'Ataque Slowloris em camada 7; mitigação na raiz com redução do tempo de timeout Keep-Alive no Apache.',
      'Ataque de varredura UDP stealth; mitigação na raiz com alteração das portas padrão para portas efêmeras.',
      'Ataque DDoS por reflexão e amplificação com IP spoofing; mitigação na raiz com BCP 38 (Ingress Filtering).'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.1.2. Tipos de ataques a redes. Na reflexão/amplificação UDP (DNS, NTP monlist, Memcached), os bots enviam pacotes pequenos falsificando (spoofing) o IP de origem da vítima para refletores abertos, que devolvem respostas dezenas ou milhares de vezes maiores à vítima. A prática recomendada pelos ISPs para impedir pacotes com IP de origem forjado é o BCP 38 (RFC 2827 — Ingress Filtering / uRPF).',
    correctAnalysis:
      'Respostas UDP não solicitadas de serviços amplificadores caracterizam DDoS por reflexão/amplificação via IP spoofing, prevenido na origem pelo BCP 38.',
    optionErrors: {
      0: 'Incorreta: força bruta testa senhas de autenticação, não envolve reflexão UDP em portas 123/11211.',
      1: 'Incorreta: Slowloris mantém conexões TCP/HTTP parcialmente abertas com baixo volume de banda, sem amplificação UDP.',
      2: 'Incorreta: varredura UDP apenas mapeia portas abertas/fechadas, não gerando 10 Gbps de respostas amplificadas.'
    }
  },
  {
    id: 'sarah-2-28',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os mecanismos de funcionamento e defesa contra SYN Flood, DNS Cache Poisoning e ataques DDoS, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A técnica de SYN Cookies mitiga o SYN Flood porque o servidor aloca toda a estrutura TCB da sessão assim que recebe o primeiro SYN, mantendo-a por 120 segundos.\n( ) O DNS Cache Poisoning (ataque de Kaminsky) é dificultado pela randomização da porta de origem UDP das consultas do resolvedor e pela validação de assinaturas DNSSEC.\n( ) Enquanto um DDoS volumétrico visa esgotar a largura de banda do enlace, um ataque em camada de aplicação (como HTTP Flood) busca exaurir CPU, threads ou conexões do servidor web.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.1.2. Tipos de ataques a redes. (1) falsa: o mecanismo de SYN Cookies faz exatamente o oposto — o servidor NÃO aloca memória/TCB no SYN inicial, codificando parâmetros da conexão no Initial Sequence Number (ISN) do SYN-ACK e só alocando estado se o cliente devolver o ACK válido; (2) verdadeira: randomizar porta de origem (além do TXID de 16 bits) e validar DNSSEC impedem injeção de respostas forjadas; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – V – V. SYN Cookies evitam alocar estado no recebimento do SYN; randomização de porta/DNSSEC mitigam cache poisoning e HTTP Flood esgota recursos do servidor.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois SYN Cookies evitam alocar TCB/memória antes do ACK final do handshake.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre randomização de porta origem e DNSSEC contra DNS Cache Poisoning.',
      2: 'Incorreta: a afirmativa (3) é verdadeira sobre a diferença entre saturação de banda (volumétrico) e exaustão de aplicação (L7).'
    }
  },
  {
    id: 'sarah-2-29',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os tipos de ataques e técnicas de reconhecimento à esquerda às suas descrições operacionais à direita:\n\nColuna da Esquerda:\n(I) TCP SYN Scan (Nmap -sS)\n(II) Password Spraying\n(III) Man-in-the-Middle (MITM)\n(IV) TCP Connect Scan (Nmap -sT)\n\nColuna da Direita:\n(A) Posiciona-se entre duas partes comunicantes para interceptar ou adulterar o tráfego em trânsito.\n(B) Completa o 3-way handshake TCP (SYN, SYN-ACK, ACK) em cada porta sondada, gerando mais logs.\n(C) Testa poucas senhas comuns contra uma lista ampla de contas para evitar bloqueio por tentativas (lockout).\n(D) Envia SYN e, ao receber SYN-ACK, responde com RST sem concluir o handshake (varredura half-open).\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-D, II-C, III-A, IV-B.',
      'I-B, II-C, III-A, IV-D.',
      'I-D, II-A, III-C, IV-B.',
      'I-C, II-D, III-A, IV-B.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.1.2. Tipos de ataques a redes. No Nmap: -sS (SYN Scan / half-open) aborta com RST após o SYN-ACK (D), enquanto -sT (Connect Scan) conclui o handshake completo via chamada de sistema (B); Password Spraying tenta poucas senhas em muitas contas para driblar lockout (C); e MITM intercepta/manipula a comunicação entre dois extremos (A).',
    correctAnalysis:
      'A correspondência exata é I-D, II-C, III-A e IV-B.',
    optionErrors: {
      1: 'Incorreta: inverte TCP SYN Scan (-sS half-open) com TCP Connect Scan (-sT handshake completo).',
      2: 'Incorreta: inverte Password Spraying (senhas comuns em várias contas) com Man-in-the-Middle.',
      3: 'Incorreta: inverte TCP SYN Scan com Password Spraying.'
    }
  },
  {
    id: 'sarah-2-30',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre IP Spoofing, Slowloris e ataques a protocolos de rede:\n\nI. Em conexões TCP de destino cego (blind), o atacante consegue completar facilmente o 3-way handshake usando IP falsificado porque o servidor devolve o mesmo ISN previsível em qualquer versão moderna de SO.\nII. O ataque Slowloris mantém centenas de requisições HTTP parcialmente abertas enviando cabeçalhos incompletos em intervalos lentos para esgotar o pool de conexões do servidor web.\nIII. A implementação de DNSSEC em uma zona autoritativa criptografa as respostas DNS em trânsito, impedindo ataques passivos de eavesdropping sobre os nomes consultados.\nIV. O IP Spoofing é amplamente utilizado em ataques baseados em UDP (como amplificação DNS/NTP) porque não há exigência de handshake bidirecional para que o refletor processe o pedido.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.1.2. Tipos de ataques a redes. II e IV são verdadeiras. I é falsa porque sistemas operacionais modernos geram Initial Sequence Numbers (ISN) criptograficamente aleatórios (RFC 6528), e o SYN-ACK é enviado ao IP real falsificado (não ao atacante), impedindo concluir o handshake TCP às cegas. III é falsa porque DNSSEC assina registros (autenticidade/integridade), mas NÃO criptografa consultas/respostas contra eavesdropping (função de DoT/DoH).',
    correctAnalysis:
      'Gabarito: Somente II e IV estão corretas. Slowloris esgota threads HTTP com conexões lentas e UDP sem handshake facilita IP spoofing; ISN aleatório dificulta TCP spoofing cego e DNSSEC não cifra tráfego.',
    optionErrors: {
      0: 'Incorreta: I é falsa porque ISNs aleatórios modernos e o envio do SYN-ACK ao IP real impedem handshake TCP cego com IP forjado.',
      2: 'Incorreta: inclui I, que ignora a aleatoriedade de ISN e o retorno do SYN-ACK ao endereço falsificado.',
      3: 'Incorreta: inclui III, confundindo assinatura/autenticidade do DNSSEC com confidencialidade/cifragem (DoT/DoH).'
    }
  },
  {
    id: 'sarah-2-31',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na classificação clássica dos ataques DDoS, qual característica diferencia um ataque de camada de aplicação (L7) dos ataques volumétricos e de exaustão de estado de protocolo?',
    options: [
      'Consome pouca largura de banda na rede simulando requisições válidas que exigem alto processamento no backend.',
      'Gera grande volume de pacotes SYN com origem falsificada para lotar a tabela de estados do servidor e do firewall.',
      'Usa refletores UDP abertos para multiplicar o tráfego e saturar a largura de banda do link de entrada.',
      'Envia fragmentos IP com offsets sobrepostos para esgotar os buffers de remontagem do firewall.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.1.2. Tipos de ataques a redes. Ataques DDoS de camada 7 (ex.: HTTP GET/POST Flood em buscas complexas ou login, Slowloris) completam a conexão TCP/TLS e consomem pouca banda no link, mas esgotam CPU, memória, workers web ou pool de conexões do banco de dados por trás da aplicação. Já SYN flood, amplificação UDP e fragmentação malformada pertencem às categorias de protocolo/estado ou volumétrica.',
    correctAnalysis:
      'DDoS de camada 7 destaca-se pelo baixo volume relativo de tráfego (difícil de detectar só por Mbps/pps) aliado a alto custo computacional no servidor/aplicação.',
    optionErrors: {
      1: 'Incorreta: descreve um ataque de exaustão de estado de protocolo (SYN Flood), não uma simulação de requisições legítimas em camada de aplicação.',
      2: 'Incorreta: descreve um ataque DDoS volumétrico por reflexão e amplificação UDP para saturar largura de banda.',
      3: 'Incorreta: descreve um ataque de protocolo/fragmentação IP (como Teardrop), que não simula requisições de aplicação L7.'
    }
  },

  // --- 2.1.3 Prevenção e tratamento de incidentes (+6 -> total 7) ---
  {
    id: 'sarah-2-32',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Segundo o ciclo de tratamento de incidentes de segurança do NIST SP 800-61, relacione cada fase à esquerda à respectiva atividade principal à direita:\n\nColuna da Esquerda:\n(I) Preparação\n(II) Detecção e Análise\n(III) Contenção, Erradicação e Recuperação\n(IV) Atividades Pós-Incidente\n\nColuna da Direita:\n(A) Correlacionar alertas do SIEM/EDR, validar indicadores de comprometimento e classificar severidade.\n(B) Realizar reunião de lições aprendidas, ajustar regras de detecção e atualizar playbooks.\n(C) Isolar máquinas afetadas, remover persistência do malware, corrigir falhas e restaurar serviços.\n(D) Definir políticas, playbooks, canais de comunicação, hardening preventivo e ferramentas de coleta.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-D, II-C, III-A, IV-B.',
      'I-A, II-D, III-C, IV-B.',
      'I-D, II-A, III-B, IV-C.',
      'I-D, II-A, III-C, IV-B.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.1.3. Prevenção e tratamento de incidentes. No NIST SP 800-61: Preparação estabelece capacidade/controles antes do incidente (D); Detecção e Análise tria alertas e confirma o incidente (A); Contenção, Erradicação e Recuperação estancam, limpam e restauram sistemas (C); e Atividades Pós-Incidente consolidam lições aprendidas (B).',
    correctAnalysis:
      'A sequência exata é I-D, II-A, III-C e IV-B.',
    optionErrors: {
      0: 'Incorreta: inverte Detecção e Análise (triagem SIEM/IoCs) com Contenção/Erradicação/Recuperação.',
      1: 'Incorreta: inverte Preparação (prévia) com Detecção e Análise.',
      2: 'Incorreta: inverte Contenção/Erradicação/Recuperação com Atividades Pós-Incidente.'
    }
  },
  {
    id: 'sarah-2-33',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após um incidente de invasão em servidor de arquivos que poderá gerar processo judicial, a equipe de resposta precisa coletar o disco para perícia mantendo validade probatória (cadeia de custódia). Qual procedimento deve ser adotado?',
    options: [
      'Executar varredura de antivírus diretamente no disco original em produção antes de desligar ou copiar.',
      'Copiar manualmente apenas as pastas compartilhadas para um pendrive e formatar o servidor rapidamente.',
      'Reiniciar o servidor em modo de recuperação do Windows para rodar chkdsk e reparar setores alterados.',
      'Usar bloqueador de escrita, gerar imagem bit a bit, calcular hash SHA-256 e analisar somente a cópia.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.1.3. Prevenção e tratamento de incidentes. A preservação da cadeia de custódia forense exige impedir alterações na evidência original (write blocker), criar imagem forense bit a bit (incluindo espaço não alocado), registrar hashes criptográficos (SHA-256) e documentar quem manuseou a mídia, conduzindo todas as análises sobre uma cópia verificada.',
    correctAnalysis:
      'Bloqueador de escrita (write blocker), clonagem bit a bit, registro de hash SHA-256 e análise exclusiva da cópia garantem integridade e cadeia de custódia.',
    optionErrors: {
      0: 'Incorreta: rodar antivírus no original modifica timestamps, remove arquivos e invalida a integridade da evidência.',
      1: 'Incorreta: copiar só pastas perde logs, registro, espaço não alocado e formatar destrói a prova.',
      2: 'Incorreta: reiniciar e executar chkdsk sobrescreve memória volátil e altera metadados do sistema de arquivos.'
    }
  },
  {
    id: 'sarah-2-34',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No processo de erradicação e recuperação após um ataque de ransomware em servidores internos, assinale a afirmação INCORRETA.',
    options: [
      'A restauração imediata do backup sobre o mesmo servidor ainda exposto é suficiente para recuperar em segurança, dispensando corrigir o vetor de entrada.',
      'Antes de reconectar sistemas restaurados à rede corporativa, deve-se validar ausência de persistência maliciosa, contas criadas e backdoors.',
      'Credenciais administrativas possivelmente comprometidas (incluindo contas de serviço e krbtgt, se houver indício no AD) devem ser rotacionadas.',
      'Backups destinados à recuperação precisam ter sua integridade verificada e ficar isolados (imutáveis/offline) para não serem cifrados junto.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.1.3. Prevenção e tratamento de incidentes. Restaurar um backup mantendo a mesma vulnerabilidade explorada, backdoors ou credenciais comprometidas permite que o invasor recomprometa o ambiente imediatamente. A fase de Erradicação exige eliminar a causa raiz e aplicar patches/trocar senhas antes da Recuperação.',
    correctAnalysis:
      'A alternativa A é incorreta porque recuperar sem erradicar o vetor inicial de acesso e a persistência leva à reinfecção imediata.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): verificar tarefas agendadas, serviços e contas invasoras é essencial antes de voltar à produção.',
      2: 'Incorreta (afirmação verdadeira): rotação de credenciais privilegiadas (e krbtgt em comprometimento de AD) integra a erradicação.',
      3: 'Incorreta (afirmação verdadeira): cópias imutáveis/air-gapped e validação prévia impedem restaurar artefatos comprometidos.'
    }
  },
  {
    id: 'sarah-2-35',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre ordem de volatilidade (RFC 3227), indicadores de ataque e operação de SOC/CSIRT, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Pela ordem de volatilidade da RFC 3227, os arquivos de log armazenados em servidor syslog remoto e fitas de backup devem ser coletados antes da tabela ARP e conexões de rede ativas.\n( ) Enquanto TTPs descrevem comportamentos e técnicas usadas pelo adversário, um IoC (Indicator of Compromise) restringe-se exclusivamente a vulnerabilidades CVE sem relação com hashes ou domínios.\n( ) Um playbook de resposta a incidentes padroniza os passos de triagem, contenção e escalonamento para reduzir o tempo médio de resposta (MTTR) e falhas operacionais sob pressão.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.1.3. Prevenção e tratamento de incidentes. (1) falsa: na RFC 3227, coleta-se do mais volátil para o menos volátil — registradores/cache, tabelas de roteamento/ARP/conexões/processos e memória RAM vêm MUITO antes de disco local, logs remotos e mídias de backup; (2) falsa: IoCs (Indicadores de Comprometimento) são exatamente artefatos observáveis como hashes MD5/SHA-256, IPs C2, domínios maliciosos e chaves de registro; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – F – V. Somente a terceira afirmativa é verdadeira sobre o papel dos playbooks; conexões/RAM precedem logs/backups e IoCs incluem hashes, IPs e domínios.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois conexões ativas e tabela ARP são altamente voláteis e precedem logs remotos/backups.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois hashes, IPs e domínios são exemplos clássicos de IoCs (não CVEs).',
      3: 'Incorreta: a afirmativa (3) é verdadeira quanto à padronização e ganho de agilidade via playbooks no SOC/CSIRT.'
    }
  },
  {
    id: 'sarah-2-36',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre prevenção, monitoramento SIEM e classificação de alertas em tratamento de incidentes:\n\nI. Um alerta classificado como Falso Negativo ocorre quando uma atividade maliciosa real acontece na rede sem gerar detecção ou alerta nos controles de monitoramento.\nII. A correlação de eventos no SIEM depende de sincronização horária precisa (NTP) entre firewalls, servidores AD, proxies e endpoints para reconstruir a linha do tempo do ataque.\nIII. Durante um incidente confirmado com vazamento de dados pessoais, a comunicação deve ser restrita apenas à equipe técnica interna, sendo dispensada notificação ao DPO/Encarregado e à ANPD.\nIV. Medidas preventivas como princípio do menor privilégio, MFA, gestão de vulnerabilidades e segmentação de rede reduzem tanto a superfície de ataque quanto o raio de propagação lateral.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.1.3. Prevenção e tratamento de incidentes. I, II e IV são verdadeiras. III é falsa porque, conforme a LGPD (Lei nº 13.709/2018, art. 48), incidentes de segurança que possam acarretar risco ou dano relevante aos titulares exigem comunicação ao Encarregado (DPO), à ANPD e aos titulares afetados em prazo regulamentar.',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. Falso Negativo (ataque sem alerta), sincronismo NTP para correlação e controles preventivos estão corretos; a LGPD exige comunicação quando há risco relevante.',
    optionErrors: {
      0: 'Incorreta: IV também está correta sobre prevenção por menor privilégio, MFA, patching e segmentação.',
      1: 'Incorreta: I também está correta quanto à definição de Falso Negativo.',
      3: 'Incorreta: inclui III, que contraria o dever legal de comunicação previsto na LGPD (art. 48).'
    }
  },
  {
    id: 'sarah-2-37',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre práticas proativas e métricas na gestão de incidentes:\n\nA busca proativa por ameaças ocultas que ainda não dispararam alertas automáticos denomina-se _____; o tempo decorrido desde a ocorrência da intrusão até sua descoberta pela equipe de segurança é medido como _____; e a etapa que impede que um malware continue se comunicando ou se propagando pela rede antes da limpeza definitiva é a _____.',
    options: [
      'Threat Hunting / MTTD / Contenção',
      'Vulnerability Scan / MTTR / Erradicação',
      'Threat Hunting / MTTR / Recuperação',
      'Penetration Test / MTTD / Preparação'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.1.3. Prevenção e tratamento de incidentes. Threat Hunting busca proativamente indícios de invasores antes dos alertas; MTTD (Mean Time to Detect) mede o tempo médio até a detecção (enquanto MTTR mede o tempo até resposta/resolução); e Contenção isola o incidente para estancar a propagação antes da erradicação definitiva.',
    correctAnalysis:
      'Respectivamente: Threat Hunting (busca ativa), MTTD (tempo médio até detecção) e Contenção (isolamento antes da remoção/erradicação).',
    optionErrors: {
      1: 'Incorreta: Vulnerability Scan busca falhas conhecidas (não invasores ocultos), MTTR mede resolução e Erradicação é a remoção posterior à contenção.',
      2: 'Incorreta: MTTR mede tempo médio de resposta/recuperação (não detecção) e Recuperação restaura serviços após erradicar.',
      3: 'Incorreta: Pentest simula ataque controlado autorizado e Preparação ocorre antes do incidente.'
    }
  },

  // --- 2.2.1 FortiGate, Check Point ou equivalentes (+5 -> total 7) ---
  {
    id: 'sarah-2-38',
    editalItemId: '2.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um analista conecta o SmartConsole ao Security Management Server (SMS) Check Point, cria uma nova regra de bloqueio na Policy Layer e clica em "Publish", porém constata que o tráfego continua passando pelo Security Gateway. Qual passo operacional está faltando?',
    options: [
      'Reiniciar o sistema operacional Gaia do Security Management Server para gravar o banco em disco.',
      'Habilitar um novo VDOM dedicado no Security Gateway para carregar as regras recém-publicadas.',
      'Reverter o vínculo SIC no SmartConsole para trocar a chave de confiança entre console e gateway.',
      'Executar "Install Policy" para compilar e enviar o pacote de políticas ao Security Gateway.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.1. FortiGate, Check Point ou equivalentes. Na arquitetura Check Point (3-tier: SmartConsole -> SMS -> Security Gateway), "Publish" apenas salva a revisão no banco do Management Server (tornando-a visível a outros administradores). A regra só passa a filtrar tráfego em produção após executar "Install Policy" compilando e empurrando a política ao Gateway via canal SIC.',
    correctAnalysis:
      'No Check Point, "Publish" salva no Management Server, mas somente "Install Policy" compila e aplica a política efetivamente no Security Gateway.',
    optionErrors: {
      0: 'Incorreta: reiniciar o SMS não envia a política ao Security Gateway e interrompe apenas a gerência.',
      1: 'Incorreta: VDOM é conceito de virtualização da Fortinet (FortiGate); na Check Point usa-se VSX.',
      2: 'Incorreta: o SIC já estabelece o canal seguro entre SMS e Gateway — resetar o SIC quebraria a comunicação até nova inicialização.'
    }
  },
  {
    id: 'sarah-2-39',
    editalItemId: '2.2.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquitetura, virtualização e coleta de logs em soluções NGFW FortiGate e Check Point, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No FortiGate, o recurso de VDOM (Virtual Domain) permite dividir um único equipamento físico em múltiplas instâncias lógicas com tabelas de roteamento e políticas independentes.\n( ) Na arquitetura Check Point, o Security Gateway e o Security Management Server comunicam-se obrigatoriamente sem criptografia, pois o SIC atua apenas no acesso web do usuário.\n( ) O FortiAnalyzer deve ser posicionado em série (inline) no enlace WAN da operadora para conseguir receber os logs gerados pelas políticas de firewall do FortiGate.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – V – F.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.1. FortiGate, Check Point ou equivalentes. (1) verdadeira: VDOMs isolam planos de roteamento, objetos e políticas no mesmo FortiGate físico (análogo ao VSX Check Point); (2) falsa: o SIC (Secure Internal Communication) autentica e criptografa via certificados (ICA) o canal administrativo/logs entre SMS e Security Gateway; (3) falsa: o FortiAnalyzer é coletor/analisador fora de banda (out-of-band) que recebe logs via rede (OFTP TCP 514), nunca exigindo passagem inline do tráfego WAN.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa é verdadeira sobre VDOMs no FortiGate; SIC criptografa a gerência Check Point e FortiAnalyzer opera fora de banda.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira quanto ao isolamento de roteamento e políticas por VDOM no FortiGate.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois o SIC autentica por certificado e cifra toda a comunicação entre SMS e Gateway.',
      2: 'Incorreta: a afirmativa (3) é falsa, pois o FortiAnalyzer recebe logs fora de banda sem entrar inline no caminho WAN.'
    }
  },
  {
    id: 'sarah-2-40',
    editalItemId: '2.2.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os conceitos e componentes específicos dos ecossistemas FortiGate (FortiOS) e Check Point (Gaia/SmartConsole) à esquerda às suas respectivas funções à direita:\n\nColuna da Esquerda:\n(I) Security Profiles (FortiGate)\n(II) VSX (Check Point)\n(III) SIC — Secure Internal Communication (Check Point)\n(IV) SPU — NP e CP (FortiGate)\n\nColuna da Direita:\n(A) Processadores ASIC dedicados que aceleram encaminhamento de rede e inspeção de conteúdo/TLS.\n(B) Confiança baseada em certificados da ICA interna para autenticar e cifrar a ligação SMS–Gateway.\n(C) Perfis de Antivírus, IPS, Web Filter e Application Control anexados às políticas de firewall.\n(D) Tecnologia de firewalls virtuais isolados executando em um mesmo chassi/gateway Check Point.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-C, II-B, III-D, IV-A.',
      'I-A, II-D, III-B, IV-C.',
      'I-C, II-D, III-B, IV-A.',
      'I-C, II-D, III-A, IV-B.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.1. FortiGate, Check Point ou equivalentes. Security Profiles aplicam IPS/AV/Web Filter/App Control às regras FortiOS (C); VSX virtualiza múltiplos gateways lógicos no Check Point (D); SIC estabelece confiança criptografada entre SMS e Security Gateway (B); e SPU (Network Processor e Content Processor) são os ASICs de aceleração do FortiGate (A).',
    correctAnalysis:
      'A associação correta é I-C, II-D, III-B e IV-A.',
    optionErrors: {
      0: 'Incorreta: inverte Check Point VSX (firewalls virtuais) com SIC (comunicação segura SMS-Gateway).',
      1: 'Incorreta: inverte Security Profiles do FortiGate com os ASICs SPU (NP/CP).',
      3: 'Incorreta: inverte SIC (Check Point) com SPU (FortiGate).'
    }
  },
  {
    id: 'sarah-2-41',
    editalItemId: '2.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre modos de inspeção e gerência em NGFWs FortiGate e Check Point:\n\nI. No FortiGate, o modo de inspeção Flow-based analisa pacotes em tempo real sem armazenar todo o arquivo em buffer, oferecendo menor latência que o modo Proxy-based.\nII. Em ambientes Check Point com múltiplos Security Gateways, o SmartConsole conecta-se diretamente a cada gateway individual dispensando o Security Management Server.\nIII. O modo Proxy-based no FortiOS remonta o payload completo da transação (como HTTP/SMTP), viabilizando inspeções profundas e substituição de conteúdo.\nIV. Em um FortiGate com VDOMs habilitados, o VDOM "root" pode ser usado exclusivamente para tráfego de gerência enquanto outros VDOMs isolam clientes ou departamentos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.1. FortiGate, Check Point ou equivalentes. I, III e IV estão corretas. II é falsa porque na arquitetura Check Point distribuída o cliente SmartConsole conecta-se ao Security Management Server (SMS), que centraliza banco de políticas/objetos e gerencia os múltiplos Security Gateways.',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. Flow-based vs Proxy-based e isolamento com VDOM de gerência estão corretos; SmartConsole gerencia gateways via SMS.',
    optionErrors: {
      0: 'Incorreta: IV também está correta quanto ao uso de VDOM dedicado para gerência isolado dos VDOMs de tráfego.',
      1: 'Incorreta: II é falsa porque o SmartConsole interage com o Management Server (SMS), não dispensando esse servidor central.',
      3: 'Incorreta: inclui II, que ignora o papel central do Security Management Server na arquitetura Check Point.'
    }
  },
  {
    id: 'sarah-2-42',
    editalItemId: '2.2.1',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre implantação e gerência centralizada no ecossistema Check Point:\n\nNa arquitetura Check Point, o módulo responsável pelo encaminhamento e filtragem do tráfego em produção é o _____, enquanto objetos, regras e logs são administrados pelo cliente gráfico conectado ao _____; para que ambos estabeleçam comunicação autenticada pela primeira vez, utiliza-se uma senha única (activation key) na inicialização do _____.',
    options: [
      'Security Gateway / Security Management Server / SIC',
      'Security Management Server / Security Gateway / VSX',
      'SmartConsole / FortiAnalyzer / VDOM',
      'Security Gateway / SmartEvent / Flow-based'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.1. FortiGate, Check Point ou equivalentes. O Security Gateway (SO Gaia) processa os pacotes do plano de dados; o Security Management Server (SMS) armazena políticas e recebe conexões do SmartConsole; e o SIC (Secure Internal Communication) usa uma One-Time Activation Key inicial para emitir certificados de confiança entre SMS e Gateway.',
    correctAnalysis:
      'Respectivamente: Security Gateway (plano de dados), Security Management Server (gerência central) e SIC (vínculo autenticado por activation key).',
    optionErrors: {
      1: 'Incorreta: inverte os papéis de Gateway e Management Server e cita VSX (virtualização) no lugar do SIC.',
      2: 'Incorreta: mistura ferramentas Check Point com FortiAnalyzer e VDOM (que pertencem à Fortinet).',
      3: 'Incorreta: SmartEvent é módulo de correlação de logs e Flow-based é modo de inspeção do FortiGate.'
    }
  },

  // --- 2.2.2 firewall (+5 -> total 7) ---
  {
    id: 'sarah-2-43',
    editalItemId: '2.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um firewall corporativo, duas VLANs distintas (VLAN_RH e VLAN_FINANCEIRO) são agrupadas dentro da mesma Security Zone "ZONA_INTERNA" cujo tráfego intra-zona está bloqueado por padrão (block intra-zone). Ao tentar acessar um servidor da VLAN_FINANCEIRO a partir da VLAN_RH, as estações falham mesmo após o roteamento no firewall. O que falta configurar?',
    options: [
      'Desativar o Implicit Deny global do firewall para liberar comunicação entre todas as zonas.',
      'Mover a interface WAN para dentro da ZONA_INTERNA a fim de ativar inspeção stateful.',
      'Habilitar NAT 1:1 entre VLAN_RH e VLAN_FINANCEIRO para que o firewall crie sessão TCP.',
      'Criar política explícita permitindo origem ZONA_INTERNA para destino ZONA_INTERNA nas portas devidas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.2. firewall. Quando duas interfaces pertencem à mesma Security Zone com bloqueio intra-zona ativado (comum em firewalls como FortiGate por padrão), o tráfego entre essas interfaces exige uma política explícita da mesma zona de origem para a mesma zona de destino (ou desabilitar o bloqueio intra-zona caso não se deseje segmentar entre elas).',
    correctAnalysis:
      'Com "block intra-zone traffic" ativo, o fluxo entre interfaces distintas dentro da mesma zona só passa se houver regra explícita ZONA_INTERNA -> ZONA_INTERNA.',
    optionErrors: {
      0: 'Incorreta: desativar Implicit Deny global comprometeria toda a postura de segurança entre todas as zonas.',
      1: 'Incorreta: misturar WAN (não confiável) dentro da zona interna anula o isolamento de segurança das zonas.',
      2: 'Incorreta: comunicação roteada entre VLANs internas no firewall não depende de NAT para criar entradas na tabela de sessões.'
    }
  },
  {
    id: 'sarah-2-44',
    editalItemId: '2.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre a operação prática de inspeção TLS/HTTPS profunda (Deep Packet Inspection) em firewalls de rede, assinale a afirmação INCORRETA.',
    options: [
      'Em conexões TLS 1.3 com PFS, o firewall decifra o payload passivamente usando apenas a cópia do tráfego, sem precisar emitir certificado próprio nem atuar como proxy.',
      'Sem instalar o certificado raiz da CA do firewall no repositório confiável das estações clientes, os navegadores exibirão alerta de certificado não confiável.',
      'Aplicações com Certificate Pinning ou domínios sensíveis (como bancos e serviços de saúde externos) costumam exigir lista de exceção (SSL Bypass) na política.',
      'Quando o firewall realiza apenas inspeção de cabeçalho/SNI (Certificate Inspection), ele verifica o domínio sem quebrar a criptografia fim a fim do conteúdo.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.2. firewall. Por causa do Perfect Forward Secrecy (PFS / ECDHE) obrigatório no TLS 1.3 (e comum no TLS 1.2), não é possível decifrar tráfego HTTPS passivamente. O firewall precisa atuar ativamente como proxy intermediário (TLS MitM autorizado), encerrando a sessão com o servidor e reassinando um certificado dinâmico para o cliente com sua própria CA instalada nas estações.',
    correctAnalysis:
      'A alternativa A é incorreta porque TLS 1.3 com PFS impede decifragem passiva; a inspeção profunda exige proxy ativo com CA confiável instalada nos endpoints.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): como o firewall reemite o certificado ao cliente, o endpoint precisa confiar na CA do firewall.',
      2: 'Incorreta (afirmação verdadeira): Certificate Pinning rejeita certificados reemitidos pelo firewall, exigindo bypass por categoria/FQDN.',
      3: 'Incorreta (afirmação verdadeira): Certificate Inspection / SNI lê apenas o handshake inicial (Server Name Indication) sem decifrar o payload.'
    }
  },
  {
    id: 'sarah-2-45',
    editalItemId: '2.2.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre tabela de sessões e ações práticas de bloqueio em firewalls:\n\nI. Sessões UDP na tabela de estados possuem o mesmo timeout padrão das sessões TCP ESTABLISHED (tipicamente 3.600 s), pois ambas são rastreadas da mesma forma pelo firewall.\nII. A ação DROP descarta pacotes silenciosamente sem enviar resposta ao remetente, sendo recomendada na interface WAN para não confirmar existência de portas ou IPs ao atacante.\nIII. O esgotamento da tabela de sessões (Session Table Exhaustion) impede novas conexões legítimas mesmo quando há largura de banda física livre nos links.\nIV. Na rede interna (LAN), a ação REJECT (enviando TCP RST ou ICMP Unreachable) faz a aplicação cliente falhar rapidamente em vez de aguardar vários segundos por timeout.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.2. firewall. II, III e IV estão corretas. I é falsa porque o protocolo UDP não possui sinalização explícita de encerramento (como FIN/RST do TCP); por isso, o firewall aplica ao UDP um timeout padrão bem menor (tipicamente dezenas de segundos a poucos minutos, ex.: 30–180 s) em comparação a sessões TCP ESTABLISHED (tipicamente 3.600 s).',
    correctAnalysis:
      'Gabarito: Somente II, III e IV estão corretas. DROP silencioso na WAN, impacto do esgotamento de sessões e REJECT rápido na LAN estão corretos; UDP tem timeout bem menor que TCP ESTABLISHED por não possuir encerramento explícito.',
    optionErrors: {
      0: 'Incorreta: I é falsa (UDP não tem encerramento explícito e recebe timeout muito menor que 3.600 s) e omite III e IV.',
      2: 'Incorreta: inclui I, equiparando erroneamente o timeout de sessões UDP sem encerramento explícito ao de sessões TCP ESTABLISHED.',
      3: 'Incorreta: omite III, que descreve corretamente o esgotamento da tabela de sessões.'
    }
  },
  {
    id: 'sarah-2-46',
    editalItemId: '2.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre governança de regras, negação implícita e proteção anti-spoofing na operação de firewalls, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Regra genérica de permissão (ex.: Any para Any na LAN->WAN) posicionada acima de uma regra específica de bloqueio será ignorada caso o firewall identifique uma regra Deny abaixo dela.\n( ) Uma regra explícita de "Cleanup / Deny All" com logging ativado ao final da política corrige o fato de que a negação implícita padrão frequentemente não registra logs.\n( ) A checagem de Anti-Spoofing / Reverse Path Forwarding (RPF) descarta um pacote na interface de entrada se a tabela de roteamento indicar outro caminho para alcançar o IP de origem.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'F – V – V.',
      'F – V – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.2. firewall. (1) falsa: na avaliação top-down (first-match), o firewall para na PRIMEIRA regra compatível; a regra genérica acima sempre prevalece e sombreia (shadowing) a regra específica de bloqueio abaixo; (2) verdadeira: explicitar uma regra Deny All com log no fim facilita auditoria e troubleshooting sem alterar o comportamento de bloqueio; (3) verdadeira: RPF estrito valida simetria da rota para o IP de origem.',
    correctAnalysis:
      'Gabarito: F – V – V. Regras genéricas acima sombreiam regras específicas abaixo (first-match), Cleanup rule habilita auditoria de bloqueios e RPF previne IP spoofing.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois na avaliação top-down (first-match) a regra genérica acima prevalece e sombreia a regra específica abaixo.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre o uso de regra explícita Cleanup / Deny All com log ao fim da política.',
      3: 'Incorreta: a afirmativa (3) é verdadeira sobre a verificação da tabela de roteamento pelo RPF anti-spoofing.'
    }
  },
  {
    id: 'sarah-2-47',
    editalItemId: '2.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao receber um pacote pertencente a uma conexão TCP já estabelecida (flag ACK sem SYN) em uma interface configurada no firewall stateful, qual sequência operacional descreve o comportamento padrão eficiente do equipamento?',
    options: [
      'Verifica a entrada correspondente na tabela de sessões e encaminha aplicando perfis ativos sem reavaliar todas as regras.',
      'Reavalia obrigatoriamente todas as linhas da política de cima para baixo antes de consultar a tabela de sessões.',
      'Descarta o pacote imediatamente no modo stateful porque somente pacotes com flag SYN são aceitos na entrada.',
      'Cria uma nova entrada na tabela de sessões para cada segmento ACK recebido, tratando cada pacote como uma conexão independente.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.2. firewall. Em um firewall stateful, somente o primeiro pacote de uma nova sessão (ex.: TCP SYN) percorre toda a avaliação top-down das regras de política e cria a entrada na Session Table. Os pacotes subsequentes da mesma sessão (ACK/dados) dão match na entrada existente da tabela de sessões sem criar novas entradas nem percorrer toda a lista de regras.',
    correctAnalysis:
      'Pacotes de conexões já estabelecidas são identificados diretamente na entrada existente da Session Table sem percorrer novamente toda a lista completa de políticas.',
    optionErrors: {
      1: 'Incorreta: reavaliar toda a lista de políticas para cada pacote individual descreve firewall stateless, não stateful.',
      2: 'Incorreta: pacotes ACK/dados de sessões já registradas na state table são aceitos normalmente após a criação da sessão no SYN.',
      3: 'Incorreta: todos os segmentos da mesma 5-tupla compartilham a mesma entrada criada no início da sessão, não criando uma entrada nova por ACK.'
    }
  },
  // ==================== EXPANSÃO FASE B — EIXO 2, LOTE 2 (+27) ====================
  // --- 2.2.3 NAT (+5 -> total 7) ---
  {
    id: 'sarah-2-48',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor web interno (10.20.1.50) está publicado para a Internet via DNAT no IP público 200.50.10.20. Clientes externos acessam normalmente, porém usuários da própria LAN (10.20.2.0/24) falham ao tentar acessar o mesmo IP público 200.50.10.20. Por que isso ocorre se falta Hairpin NAT (NAT Loopback) e como ele corrige?',
    options: [
      'O servidor DMZ bloqueia portas abaixo de 1024; Hairpin NAT reescreve apenas a porta TCP de origem.',
      'O firewall descarta pacotes privados na LAN; Hairpin NAT aplica NAT 1:1 no IP público da WAN.',
      'O roteador envia os pacotes ao ISP via BGP; Hairpin NAT anuncia o bloco /24 privado na Internet.',
      'Sem SNAT no retorno, o servidor responde direto ao IP privado da LAN e o cliente descarta; Hairpin aplica SNAT+DNAT.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.3. NAT. Quando um cliente da LAN envia pacote para o IP público publicado 200.50.10.20 e falta Hairpin NAT (apenas DNAT aplicado), o servidor recebe o IP privado de origem do cliente e responde diretamente via rede local/SVI usando seu IP privado 10.20.1.50 — o cliente esperava resposta de 200.50.10.20 e descarta o pacote (roteamento assimétrico). O Hairpin NAT traduz também o IP de origem (SNAT para o IP do firewall) forçando o retorno pelo firewall.',
    correctAnalysis:
      'Sem SNAT conjunto no acesso interno ao IP público, o servidor responde diretamente ao IP privado do cliente causando assimetria; o Hairpin NAT aplica DNAT e SNAT simultaneamente.',
    optionErrors: {
      0: 'Incorreta: o problema não é bloqueio de portas < 1024, e sim assimetria nos endereços IP de origem/destino na resposta.',
      1: 'Incorreta: não envolve bloqueio de IPs privados na LAN nem NAT 1:1 na interface WAN.',
      2: 'Incorreta: prefixos privados RFC 1918 não são anunciados em BGP público para resolver acesso interno.'
    }
  },
  {
    id: 'sarah-2-49',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre modalidades e ordem lógica de processamento de NAT em firewalls, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No NAT estático 1:1, um endereço IP privado específico é mapeado exclusivamente a um único endereço IP público dedicado, preservando as portas de origem e destino.\n( ) Quando um cliente interno realiza milhares de conexões simultâneas usando PAT (Overload) com um único IP público, o esgotamento de portas efêmeras disponíveis bloqueia novas traduções.\n( ) Em firewalls corporativos, o SNAT de saída é executado antes da consulta à tabela de roteamento, definindo qual interface WAN será escolhida para encaminhar o pacote.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'V – V – V.',
      'F – V – F.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.3. NAT. (1) verdadeira: NAT 1:1 mapeia um IP privado fixo a um IP público exclusivo; (2) verdadeira: como o PAT usa tupla IP público + porta (máx. ~64 mil portas úteis por IP/protocolo), exaustão de portas exige adicionar IPs no pool de SNAT; (3) falsa: o SNAT ocorre APÓS a decisão de roteamento (pós-roteamento / saída), pois o firewall precisa saber primeiro por qual interface/rota o pacote vai sair para selecionar o NAT adequado.',
    correctAnalysis:
      'Gabarito: V – V – F. NAT 1:1 e risco de exaustão de portas no PAT são verdadeiros; SNAT ocorre após a decisão de roteamento, não antes.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (2) é verdadeira sobre o esgotamento de portas efêmeras no PAT com único IP público.',
      1: 'Incorreta: a afirmativa (3) é falsa, pois o SNAT é aplicado depois da consulta de roteamento que define a interface de saída.',
      2: 'Incorreta: a afirmativa (1) é verdadeira sobre a associação exclusiva 1:1 preservando portas.'
    }
  },
  {
    id: 'sarah-2-50',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os recursos e modalidades de NAT em firewalls à esquerda às respectivas aplicações práticas à direita:\n\nColuna da Esquerda:\n(I) IP Pool Overload (PAT)\n(II) Virtual IP / Port Forwarding (DNAT)\n(III) NAT 1:1 (One-to-One IP Pool)\n(IV) Central NAT\n\nColuna da Direita:\n(A) Separa as regras de tradução SNAT/DNAT em tabela própria, desacoplada das políticas de segurança.\n(B) Compartilha um pequeno conjunto de IPs públicos entre centenas de hosts internos variando portas de origem.\n(C) Mapeia integralmente um IP público dedicado para um único servidor interno sem multiplexação de portas.\n(D) Redireciona conexões entrantes da WAN (ex.: IP público:443) para um IP e porta internos (ex.: 10.1.1.10:8443).\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-D, II-B, III-C, IV-A.',
      'I-B, II-D, III-C, IV-A.',
      'I-B, II-C, III-D, IV-A.',
      'I-B, II-D, III-A, IV-C.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.3. NAT. IP Pool Overload (PAT) multiplexa muitos hosts por porta de origem (B); Virtual IP / Port Forwarding faz DNAT de entrada com tradução opcional de porta (D); NAT 1:1 associa um IP público exclusivo a um IP interno (C); e Central NAT (ex.: FortiGate) desacopla tabelas de tradução NAT das políticas de firewall (A).',
    correctAnalysis:
      'A associação correta é I-B, II-D, III-C e IV-A.',
    optionErrors: {
      0: 'Incorreta: inverte IP Pool Overload (SNAT/PAT) com Virtual IP / Port Forwarding (DNAT).',
      2: 'Incorreta: inverte Virtual IP / Port Forwarding (DNAT) com NAT 1:1.',
      3: 'Incorreta: inverte NAT 1:1 com Central NAT.'
    }
  },
  {
    id: 'sarah-2-51',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre configuração de NAT em firewalls corporativos:\n\nI. Ao publicar um servidor web na DMZ usando DNAT (VIP), habilitar SNAT na mesma regra WAN->DMZ oculta o IP real dos visitantes externos nos logs locais do servidor web.\nII. Em modo Central NAT no FortiGate, todas as regras de tradução SNAT ficam obrigatoriamente embutidas dentro de cada política IPv4 de acesso, sem tabela dedicada.\nIII. Quando o DNAT ocorre antes da avaliação da política de firewall, alguns fabricantes exigem referenciar o IP privado já traduzido (ou o objeto VIP correspondente) na regra de segurança.\nIV. Em tráfego interno roteado entre duas VLANs corporativas (ex.: LAN -> Servidores), aplicar SNAT sem necessidade operacional mascara o endereço real da estação nos logs de auditoria internos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.3. NAT. I, III e IV são verdadeiras. Em WAN->DMZ, ativar SNAT substitui o IP público do visitante pelo IP da interface DMZ do firewall, prejudicando auditoria/rate-limiting no servidor web; DNAT precede a avaliação da regra em arquiteturas como FortiGate/Check Point; e SNAT entre VLANs internas também oculta IPs reais nos logs. II é falsa porque no Central NAT as regras SNAT ficam em tabela própria separada (o NAT embutido por regra é o modo Policy NAT).',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. Impacto do SNAT em logs DMZ/LAN e referência do destino pós-DNAT estão corretos; Central NAT usa tabela separada das políticas.',
    optionErrors: {
      0: 'Incorreta: IV também é verdadeira sobre o mascaramento indesejado do IP do cliente nos logs internos ao usar SNAT entre VLANs.',
      1: 'Incorreta: II é falsa porque descreve Policy NAT (embutido na regra), sendo o oposto do Central NAT.',
      3: 'Incorreta: inclui II, invertendo os conceitos de Central NAT e Policy NAT.'
    }
  },
  {
    id: 'sarah-2-52',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito do comportamento e das limitações operacionais do NAT em redes corporativas, assinale a afirmação INCORRETA.',
    options: [
      'Protocolos como FTP em modo ativo ou SIP podem enfrentar falhas sob NAT quando embutem endereços IP privados dentro do payload de aplicação sem suporte de ALG.',
      'Desativar o SNAT na política de entrada WAN->DMZ (mantendo apenas o DNAT) impede que o firewall stateful encaminhe os pacotes de resposta de volta ao cliente externo.',
      'Em cenários com múltiplos servidores internos precisando publicar a mesma porta TCP 443 para fora, é necessário possuir mais de um IP público ou usar Proxy Reverso com SNI.',
      'A tradução dinâmica com pool de IPs públicos sem PAT (One-to-One dinâmico) esgota as alocações assim que todos os IPs públicos do pool estão em uso simultâneo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.3. NAT. Em uma publicação WAN->DMZ, deve-se manter apenas o DNAT (e NÃO ativar SNAT): o firewall stateful registra na Session Table tanto o IP original externo quanto a tradução DNAT realizada, desfazendo automaticamente o DNAT no pacote de resposta do servidor DMZ para entregá-lo corretamente ao cliente externo e preservando o IP real do visitante nos logs do servidor.',
    correctAnalysis:
      'A alternativa B é incorreta porque a tabela de sessões do firewall reverte automaticamente o DNAT na resposta sem exigir SNAT na política WAN->DMZ.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): FTP ativo e SIP carregam IPs L3 no payload, exigindo ALG (Application Layer Gateway) ou mecanismos como STUN/SIP proxy.',
      2: 'Incorreta (afirmação verdadeira): um único IP:443 só pode apontar para um VIP DNAT por vez sem proxy reverso/SNI na camada 7.',
      3: 'Incorreta (afirmação verdadeira): NAT dinâmico sem sobrecarga de portas (PAT) limita conexões simultâneas ao número de IPs livres no pool.'
    }
  },

  // --- 2.2.4 políticas (+6 -> total 7) ---
  {
    id: 'sarah-2-53',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em uma rede hospitalar com estações em DHCP e rotação frequente de IPs no Wi-Fi, o administrador deseja liberar acesso ao sistema de prontuário apenas para o grupo "Medicos_AD" no firewall integrado ao Active Directory (FSSO / Identity Awareness). Por que políticas baseadas em identidade superam regras baseadas apenas em sub-rede IP nesse caso?',
    options: [
      'Porque regras por grupo do AD eliminam a necessidade de resolução DNS para servidores internos.',
      'Porque políticas por identidade convertem automaticamente tráfego HTTP sem criptografia em TLS 1.3.',
      'Porque regras por grupo do AD substituem o servidor DHCP atribuindo IPs estáticos a cada usuário.',
      'Porque o firewall associa dinamicamente o IP atual ao usuário autenticado no AD, mantendo o menor privilégio.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.4. políticas. Com integração de identidade (Fortinet FSSO, Check Point Identity Awareness, RADIUS/Syslog AD), o firewall mantém um mapeamento dinâmico usuário <-> endereço IP obtido dos eventos de logon do AD; assim, mesmo que um médico troque de estação ou receba outro IP DHCP, a política acompanha a identidade e garante o princípio do menor privilégio.',
    correctAnalysis:
      'Políticas por identidade correlacionam eventos de logon do AD ao IP dinâmico da estação, aplicando permissões granulares por usuário/grupo independentemente da troca de IP DHCP.',
    optionErrors: {
      0: 'Incorreta: políticas baseadas em grupo do AD ainda dependem de resolução DNS normal para nomes internos.',
      1: 'Incorreta: políticas de identidade controlam quem pode acessar o quê, não convertendo HTTP em TLS 1.3.',
      2: 'Incorreta: o DHCP continua sendo responsável pela concessão dos endereços IP na rede.'
    }
  },
  {
    id: 'sarah-2-54',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre uso de objetos, grupos, FQDN e agendamentos (schedules) em políticas de firewall, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Objetos de endereço baseados em FQDN (nome DNS) no firewall ignoram o TTL dos registros e nunca atualizam o IP resolvido após a criação inicial da regra.\n( ) O uso de Address Groups e Service Groups facilita a manutenção porque atualizar um IP de servidor ou porta em um objeto reflete automaticamente em todas as regras que o referenciam.\n( ) Políticas com Schedule (agendamento) do tipo one-time permitem limitar automaticamente acessos temporários de manutenção terceirizada sem depender de remoção manual esquecida.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.4. políticas. (1) falsa: o firewall consulta DNS periodicamente respeitando o TTL (ou intervalo configurável de cache) do registro para atualizar os IPs vinculados ao objeto FQDN (útil para serviços em nuvem com IP dinâmico); (2) verdadeira: objetos reutilizáveis e grupos reduzem erros e retrabalho; (3) verdadeira: schedules one-time expiram acessos temporários automaticamente.',
    correctAnalysis:
      'Gabarito: F – V – V. Grupos reutilizáveis e agendamentos temporários são boas práticas verdadeiras; objetos FQDN atualizam seus IPs conforme TTL DNS.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois objetos FQDN atualizam os endereços IP periodicamente conforme o TTL DNS.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre a manutenção centralizada por Address Groups e Service Groups.',
      2: 'Incorreta: a afirmativa (3) é verdadeira, pois schedules one-time encerram acessos temporários na data/hora programada.'
    }
  },
  {
    id: 'sarah-2-55',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na auditoria e higiene periódica da base de regras de um firewall corporativo, relacione cada achado à esquerda ao seu significado técnico à direita:\n\nColuna da Esquerda:\n(I) Regra Sombreada (Shadowed Rule)\n(II) Regra Órfã / Sem Uso (Unused Rule)\n(III) Regra Redundante\n(IV) Regra Superpermissiva (Over-permissive)\n\nColuna da Direita:\n(A) Regra específica cuja ação coincide com uma regra mais ampla acima dela, tornando-a desnecessária.\n(B) Regra que apresenta contador de acertos (Hit Count) zerado após longo período de operação.\n(C) Regra com objetos "Any / All" em origem, destino ou serviço que viola o princípio do menor privilégio.\n(D) Regra inferior cujos critérios já foram integralmente capturados por regra anterior com ação oposta ou distinta.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-D, II-B, III-A, IV-C.',
      'I-A, II-B, III-D, IV-C.',
      'I-D, II-C, III-A, IV-B.',
      'I-D, II-B, III-C, IV-A.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.4. políticas. Regra sombreada (Shadowed) nunca é alcançada porque uma regra superior já capturou todo o seu escopo com ação diferente/oposta (D); Regra sem uso possui Hit Count zero (B); Regra redundante repete a mesma ação já aplicada por regra superior mais ampla (A); e Regra superpermissiva abusa de "Any/All" violando menor privilégio (C).',
    correctAnalysis:
      'A correspondência exata é I-D, II-B, III-A e IV-C.',
    optionErrors: {
      1: 'Incorreta: inverte Shadowed Rule (ação conflitante anulada por regra acima) com Redundant Rule (mesma ação já coberta).',
      2: 'Incorreta: inverte Regra Órfã (Hit Count zero) com Regra Superpermissiva (Any/All).',
      3: 'Incorreta: inverte Regra Redundante com Regra Superpermissiva.'
    }
  },
  {
    id: 'sarah-2-56',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre controle por aplicação (App-ID / Application Control) e gestão de mudanças em políticas de firewall:\n\nI. Políticas baseadas apenas em Application Control dispensam informar interface/zona de origem e destino, pois a assinatura de camada 7 roteia o pacote sozinha.\nII. O Application Control permite bloquear ou limitar aplicações específicas (como BitTorrent ou acesso a armazenamento pessoal) mesmo quando encapsuladas na porta TCP 443.\nIII. Boas práticas de Change Management em firewalls exigem vínculo de cada regra a um chamado/ticket, proprietário de negócio, justificativa, data de revisão e plano de rollback.\nIV. Durante a revisão periódica anual de políticas, toda regra com Hit Count igual a zero deve ser excluída automaticamente no primeiro dia sem verificar se atende a plano de contingência/DR.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.4. políticas. II e III são verdadeiras. I é falsa porque a inspeção de aplicação ocorre sobre uma política que continua exigindo critérios de rede/zona/endereços e portas/serviços compatíveis. IV é falsa porque regras de Disaster Recovery (DR), failover ou fechamento anual contábil podem passar meses sem hits normais e devem ser validadas com o proprietário antes de serem desativadas/removidas.',
    correctAnalysis:
      'Gabarito: Somente II e III estão corretas. Controle L7 de aplicações na porta 443 e governança formal de mudanças estão corretos; App-ID exige definição L3/zona e Hit Count zero exige validação antes de exclusão (DR/contingência).',
    optionErrors: {
      0: 'Incorreta: I é falsa porque Application Control não substitui zonas, roteamento nem parâmetros L3/L4 da regra.',
      2: 'Incorreta: inclui IV, ignorando regras legítimas de DR/contingência ou janela sazonal que têm zero hits em operação normal.',
      3: 'Incorreta: inclui I e IV, ambas falsas quanto aos requisitos de zona/L3 e exclusão cega por Hit Count zero.'
    }
  },
  {
    id: 'sarah-2-57',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considerando boas práticas de arquitetura, objetos e manutenção de políticas em firewalls corporativos, assinale a afirmação INCORRETA.',
    options: [
      'Comentários descritivos e convenções padronizadas de nomenclatura de objetos (ex.: SRV_, NET_, GRP_) reduzem erros durante incidentes.',
      'Objetos baseados em GeoIP permitem aplicar restrições ou alertas adicionais conforme o país associado ao endereço IP público.',
      'Em políticas por aplicação (App-ID), o firewall identifica a aplicação já no primeiro pacote TCP SYN antes da troca de dados L7, dispensando inspeção pós-handshake.',
      'Revisar periodicamente regras temporárias, objetos não referenciados e Hit Counts melhora a postura de segurança e reduz a superfície de exposição.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.4. políticas. O pacote TCP SYN inicial contém apenas informações de camada 3 e 4 (IPs e portas), sem nenhum payload de camada 7. Para identificar a aplicação (App-ID / Application Control), o firewall primeiro permite a sessão inicialmente (ou usa heurística inicial por porta/IP) e analisa os primeiros pacotes de dados pós-handshake (ex.: TLS ClientHello/SNI, cabeçalhos HTTP) para classificar e então manter, limitar ou bloquear o fluxo.',
    correctAnalysis:
      'A alternativa C é incorreta porque o TCP SYN não carrega payload L7; a identificação da aplicação requer inspecionar pacotes subsequentes após o 3-way handshake.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): nomenclatura padronizada e comentários com ticket aceleram auditoria e troubleshooting.',
      1: 'Incorreta (afirmação verdadeira): objetos GeoIP auxiliam no bloqueio ou restrição de países sem relação comercial com a organização.',
      3: 'Incorreta (afirmação verdadeira): saneamento contínuo remove regras obsoletas e acessos expirados de terceiros.'
    }
  },
  {
    id: 'sarah-2-58',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre governança e recursos avançados de políticas em NGFW:\n\nPara restringir o acesso a serviços em nuvem cujo IP público muda frequentemente sem precisar editar IPs manualmente, utilizam-se _____; para impedir o uso de aplicativos não autorizados independentemente da porta TCP usada, aplica-se _____; e para verificar durante auditoria se uma regra antiga continua em uso real no ambiente, analisa-se o campo _____.',
    options: [
      'objetos FQDN / Application Control / Hit Count',
      'objetos GeoIP / Port Forwarding / Aging Time',
      'objetos FQDN / Port Forwarding / Hit Count',
      'Address Groups / Application Control / Sequence Number'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.4. políticas. Objetos FQDN acompanham mudanças de IP via DNS/TTL; Application Control (App-ID) identifica aplicações na camada 7 independentemente da porta TCP/UDP; e o Hit Count contabiliza quantas vezes cada regra casou com tráfego real, orientando revisões e limpezas.',
    correctAnalysis:
      'Respectivamente: objetos FQDN (IPs dinâmicos via DNS), Application Control (controle L7 independente de porta) e Hit Count (estatística de uso da regra).',
    optionErrors: {
      1: 'Incorreta: GeoIP filtra por país, Port Forwarding é DNAT e Aging Time refere-se a expiração em tabelas CAM/ARP/sessão.',
      2: 'Incorreta: Port Forwarding é redirecionamento de entrada DNAT, não controle L7 de aplicações por assinatura.',
      3: 'Incorreta: Address Groups contêm IPs/redes estáticas (não acompanham mudanças DNS) e Sequence Number é campo de pacotes TCP/IPsec.'
    }
  },

  // --- 2.2.5 logs (+5 -> total 7) ---
  {
    id: 'sarah-2-59',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Nos sistemas de registro de firewalls NGFW (como FortiGate/FortiAnalyzer e Check Point/SmartEvent), relacione os tipos de logs à esquerda aos eventos registrados à direita:\n\nColuna da Esquerda:\n(I) Traffic Logs (Forward/Local)\n(II) Security / Threat Logs\n(III) System / Event Logs\n(IV) Audit / Configuration Logs\n\nColuna da Direita:\n(A) Registros de alteração de regras, criação de objetos, login de administradores e falhas de autenticação admin.\n(B) Fluxos aceitos ou bloqueados pelas políticas com IPs, portas, NAT, Policy ID e bytes transferidos.\n(C) Bloqueios ou detecções de assinaturas IPS, antivírus, Web Filter e controle de aplicações.\n(D) Mudanças de estado de interfaces, eventos de failover HA, subida/queda de túneis VPN e uso de CPU/disco.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-B, II-C, III-A, IV-D.',
      'I-C, II-B, III-D, IV-A.',
      'I-B, II-D, III-C, IV-A.',
      'I-B, II-C, III-D, IV-A.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.5. logs. Traffic Logs registram conexões permitidas/negadas e bytes (B); Security/Threat Logs registram disparos de IPS/AV/Web/App (C); System/Event Logs registram saúde de interfaces, HA e túneis (D); e Audit/Config Logs registram alterações administrativas e acessos de gestão (A).',
    correctAnalysis:
      'A sequência exata é I-B, II-C, III-D e IV-A.',
    optionErrors: {
      0: 'Incorreta: inverte System/Event Logs (interfaces/HA/VPN) com Audit/Configuration Logs (mudanças admin).',
      1: 'Incorreta: inverte Traffic Logs com Security/Threat Logs.',
      2: 'Incorreta: inverte Security/Threat Logs com System/Event Logs.'
    }
  },
  {
    id: 'sarah-2-60',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre níveis de severidade Syslog (RFC 5424), transporte de logs e momento de geração de log por sessão, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Configurar "Log at Session Start" faz o log inicial já conter a quantidade final total de bytes enviados e recebidos até o encerramento da conexão.\n( ) Na escala numérica de severidade do Syslog (0 a 7), o nível 7 (Debug) representa falha crítica mais urgente que o nível 3 (Error).\n( ) Enquanto o Syslog clássico sobre UDP 514 envia datagramas sem garantia de entrega nem criptografia, o Syslog sobre TLS (TCP 6514, RFC 5425) assegura transporte confiável e confidencialidade.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – V.',
      'F – F – F.',
      'F – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.5. logs. (1) falsa: no início da sessão ("Log at Session Start"), a conexão acabou de abrir e ainda não há contagem final de bytes nem duração total (esses totais só existem ao registrar o fechamento no "Log at Session End"); (2) falsa: na escala Syslog RFC 5424, quanto MENOR o número, MAIOR a criticidade (0=Emergency é máximo, 3=Error é mais grave que 7=Debug); (3) verdadeira: UDP 514 não é confiável nem cifrado, ao contrário de Syslog over TLS em TCP 6514.',
    correctAnalysis:
      'Gabarito: F – F – V. Somente a terceira afirmativa é verdadeira sobre UDP 514 vs TLS TCP 6514; contagem final de bytes só existe no fim da sessão e severidade Syslog 0 é a mais crítica.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois a contagem final de bytes transferidos só é conhecida ao término da sessão.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois na escala Syslog 0 (Emergency) é o nível mais crítico e 7 (Debug) é o menos severo.',
      2: 'Incorreta: a afirmativa (3) é verdadeira sobre as diferenças entre Syslog UDP 514 e Syslog sobre TLS em TCP 6514.'
    }
  },
  {
    id: 'sarah-2-61',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após ativar "Log All Sessions" em uma política de saída LAN->WAN de alto tráfego (incluindo milhares de consultas DNS UDP por minuto) gravando apenas no SSD interno do firewall, a equipe percebe consumo elevado de I/O e sobrescrita dos registros de semanas anteriores em menos de 48 horas. Qual prática equilibra visibilidade e desempenho?',
    options: [
      'Desativar totalmente todos os logs de segurança, IPS e bloqueios para preservar o SSD indefinidamente.',
      'Alternar o armazenamento para memória RAM volátil, evitando escrita em SSD e preservando histórico após reboot.',
      'Manter "Security Events" nas regras de alto volume permitido, logar bloqueios e enviar logs a coletor dedicado.',
      'Mudar todas as sessões DNS para "Log at Session Start e End" duplicando entradas para compactar o disco.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.5. logs. Logar todas as sessões permitidas ("All Sessions") gera enorme volume de registros (especialmente DNS/HTTP) que degrada I/O, CPU e reduz drasticamente a retenção local. A boa prática em alto volume é registrar apenas eventos de segurança ("Security Events" / Threat Logs) nas políticas permitidas de rotina — mantendo log nas regras críticas e de bloqueio — e exportar continuamente para coletor externo (FortiAnalyzer, Check Point Log Server ou Syslog).',
    correctAnalysis:
      'Usar "Security Events" nas políticas amplas de saída, manter log nos bloqueios e centralizar retenção em servidor de logs dedicado resolve o gargalo de disco/I/O.',
    optionErrors: {
      0: 'Incorreta: desligar logs de IPS e bloqueios deixa o ambiente cego para auditoria e resposta a incidentes.',
      1: 'Incorreta: logs em RAM volátil possuem capacidade mínima e são perdidos em qualquer reinicialização.',
      3: 'Incorreta: logar início e fim para todo tráfego DNS dobra o volume de eventos em vez de reduzi-lo.'
    }
  },
  {
    id: 'sarah-2-62',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Considere as afirmativas sobre geração, retenção e infraestrutura de logs em firewalls:\n\nI. Registrar logs apenas no encerramento da sessão ("Log at Session End") fornece dados completos de duração e bytes enviados/recebidos, porém pode atrasar a visibilidade de conexões longas ainda ativas.\nII. Servidores dedicados como FortiAnalyzer e Check Point Log Server exigem a instalação de um agente local em cada estação Windows da LAN para receber logs de tráfego do firewall.\nIII. Quando o disco de logs local de um appliance atinge o limite configurado de capacidade, políticas de rotação circular sobrescrevem os arquivos mais antigos ou interrompem novos logs conforme configuração.\nIV. Na escala Syslog, o nível 0 (Emergency) possui criticidade inferior ao nível 6 (Informational), sendo utilizado apenas para depuração de desenvolvedores.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.5. logs. I e III estão corretas. "Log at Session End" consolida duração e volume total de tráfego, mas uma sessão SSH/túnel aberta por horas só aparece ao fechar (por isso Session Start ajuda em conexões longas ou troubleshooting em tempo real); e discos locais adotam rotação circular ou política de parada ao lotar. II é falsa porque coletores recebem logs diretamente dos firewalls via rede, sem agente nos PCs clientes. IV é falsa porque nível 0 (Emergency) é o mais crítico de todos.',
    correctAnalysis:
      'Gabarito: Somente I e III estão corretas. Comportamento de Session End e rotação de disco estão corretos; coletores não exigem agente nos endpoints e Emergency (0) é severidade máxima.',
    optionErrors: {
      1: 'Incorreta: II e IV são falsas quanto a agentes nos PCs clientes e à inversão da severidade Syslog.',
      2: 'Incorreta: inclui II, confundindo coleta de logs de firewall com agentes EDR de endpoint.',
      3: 'Incorreta: inclui IV, invertendo Emergency (0, máxima gravidade) com Informational (6) e Debug (7).'
    }
  },
  {
    id: 'sarah-2-63',
    editalItemId: '2.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre armazenamento, envio confiável e conteúdo de logs em firewalls corporativos, assinale a afirmação INCORRETA.',
    options: [
      'Quando o servidor Syslog/Log Server externo fica temporariamente inacessível, appliances com disco local podem manter buffer/fila temporária (store-and-forward) para reenvio posterior.',
      'Armazenar logs exclusivamente na memória RAM do firewall garante retenção histórica permanente por anos, sobrevivendo normalmente a quedas de energia e atualizações de firmware.',
      'Um registro completo de Traffic Log identifica data/hora, interface de entrada/saída, IPs e portas originais e traduzidos por NAT, Policy ID acionado e ação tomada.',
      'O envio de logs administrativos e de tráfego por redes não confiáveis deve utilizar Syslog sobre TLS ou túnel VPN para evitar leitura e adulteração em trânsito.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.5. logs. A memória RAM é volátil e limitada: qualquer reboot, queda de energia ou upgrade de firmware apaga imediatamente logs armazenados apenas em memória. Para auditoria, compliance e retenção prolongada (meses/anos), os logs devem ser enviados a armazenamento persistente externo (FortiAnalyzer, Log Server, Syslog/SIEM).',
    correctAnalysis:
      'A alternativa B é incorreta porque memória RAM é volátil e de baixa capacidade, perdendo todos os logs em qualquer reinicialização.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): mecanismos de miglogd/disk buffering armazenam eventos até o coletor retornar online.',
      2: 'Incorreta (afirmação verdadeira): Traffic Logs detalham tupla, interfaces, NAT, Policy ID, ação e contadores.',
      3: 'Incorreta (afirmação verdadeira): Syslog UDP 514 trafega em texto claro e exige TLS 6514 ou VPN em enlaces inseguros.'
    }
  },

  // --- 2.2.6 HA (+6 -> total 7) ---
  {
    id: 'sarah-2-64',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre dimensionamento e comportamento de failover em clusters HA de firewalls, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Em um cluster HA Ativo-Ativo de dois firewalls, é seguro operar ambos os nós continuamente a 90% de CPU, pois em caso de queda de um membro o restante absorve os 180% sem perda de pacotes.\n( ) Manter a opção "Override" desabilitada por padrão no FGCP (FortiGate) evita que um firewall recém-reiniciado reassuma o papel primário imediatamente antes de estabilizar seus links e sessões.\n( ) Tanto o FortiGate FGCP quanto o Check Point ClusterXL ignoram quedas de interfaces físicas de produção (LAN/WAN), disparando failover somente se a fonte de energia desligar.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – V.',
      'F – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.6. HA. (1) falsa: no HA Ativo-Ativo de 2 nós, cada nó deve operar abaixo de ~50% da capacidade total (regra N+1 / 50%) para que o sobrevivente absorva 100% do tráfego na falha do par sem colapsar; (2) verdadeira: com Override desativado, o critério de uptime mantém o novo ativo estável evitando flapping desnecessário; (3) falsa: ambos monitoram interfaces físicas/críticas (Port Monitoring / pnotes), disparando failover imediato se uma interface monitorada cair.',
    correctAnalysis:
      'Gabarito: F – V – F. Apenas a segunda afirmativa é verdadeira sobre Override desativado; Ativo-Ativo exige folga de capacidade (<=50%) e clusters monitoram interfaces.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois um único nó sobrevivente não suporta 180% de carga sem saturação.',
      1: 'Incorreta: a afirmativa (2) é verdadeira sobre o comportamento de prevenção de flapping com Override desabilitado.',
      2: 'Incorreta: a afirmativa (3) é falsa, pois FGCP e ClusterXL monitoram interfaces de produção configuradas para disparar failover.'
    }
  },
  {
    id: 'sarah-2-65',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Dois firewalls em cluster Ativo-Passivo estão interligados por apenas um cabo de Heartbeat conectado diretamente entre suas portas HA1. Durante uma manutenção, esse único cabo é desconectado acidentalmente, embora ambos os firewalls continuem recebendo tráfego normal nas portas LAN e WAN. Que falha grave ocorre imediatamente?',
    options: [
      'Ambos os firewalls desligam suas portas LAN simultaneamente entrando em estado err-disable permanente.',
      'O cluster apaga automaticamente todas as políticas de firewall e reverte o firmware para padrão de fábrica.',
      'Ocorre Split-Brain: o nó passivo assume também como ativo, gerando conflito de IP/MAC virtual na rede.',
      'O firewall primário desativa o State Sync e passa a operar em modo bridge transparente sem tabela de sessões.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.6. HA. Se o único canal de Heartbeat entre os membros cair enquanto as interfaces de produção continuam ativas, o nó secundário deixa de receber keepalives, conclui que o primário morreu e promove a si mesmo a Ativo. Com dois nós Ativos respondendo pelo mesmo IP e MAC virtual (Split-Brain), há perda intermitente e conflito grave nos switches. Por isso recomendam-se no mínimo 2 interfaces dedicadas de Heartbeat.',
    correctAnalysis:
      'A perda total de comunicação de Heartbeat sem queda do tráfego de dados causa Split-Brain, com os dois membros atuando como primários simultaneamente.',
    optionErrors: {
      0: 'Incorreta: sem heartbeat, o nó secundário se promove em vez de ambos desligarem todas as portas.',
      1: 'Incorreta: perda de heartbeat provoca conflito de papel ativo (split-brain), nunca apagamento de configurações.',
      3: 'Incorreta: nenhum nó muda automaticamente para modo bridge transparente nem desativa inspeção stateful.'
    }
  },
  {
    id: 'sarah-2-66',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os protocolos e mecanismos de alta disponibilidade de gateways e firewalls à esquerda às respectivas descrições à direita:\n\nColuna da Esquerda:\n(I) FortiGate FGCP\n(II) Check Point ClusterXL (CCP)\n(III) VRRP (RFC 5798)\n(IV) Gratuitous ARP (GARP)\n\nColuna da Direita:\n(A) Protocolo nativo Check Point para modos High Availability ou Load Sharing com sincronismo de estado.\n(B) Quadro emitido pelo novo nó ativo no failover para atualizar a tabela MAC dos switches rumo à nova porta.\n(C) Protocolo proprietário FortiOS que sincroniza configuração e sessões com eleição baseada em porta, uptime e prioridade.\n(D) Protocolo aberto de redundância de gateway IP (IP proto 112 / multicast 224.0.0.18) sem sincronismo nativo de sessões NGFW.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-C, II-A, III-D, IV-B.',
      'I-A, II-C, III-D, IV-B.',
      'I-C, II-D, III-A, IV-B.',
      'I-C, II-A, III-B, IV-D.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.6. HA. FGCP é o protocolo de clustering nativo do FortiGate (C); ClusterXL (protocolo CCP) é a solução nativa Check Point (A); VRRP é o protocolo aberto padrão de gateway redundante operando em IP protocol 112 / multicast 224.0.0.18 (D); e Gratuitous ARP anuncia o MAC virtual na nova porta do switch após o failover (B).',
    correctAnalysis:
      'A correspondência exata é I-C, II-A, III-D e IV-B.',
    optionErrors: {
      1: 'Incorreta: inverte FGCP (FortiGate) com ClusterXL (Check Point).',
      2: 'Incorreta: inverte Check Point ClusterXL com o protocolo padrão VRRP.',
      3: 'Incorreta: inverte VRRP com Gratuitous ARP.'
    }
  },
  {
    id: 'sarah-2-67',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre critérios de eleição, sincronismo e gerenciamento em clusters HA de firewalls:\n\nI. No critério padrão de eleição do FortiGate FGCP (com Override desativado), o número de interfaces monitoradas operacionais tem precedência sobre o HA Uptime e sobre a prioridade configurada.\nII. O protocolo VRRP padrão substitui integralmente o State Sync proprietário, replicando automaticamente todas as sessões TCP e SAs IPsec entre firewalls de fabricantes distintos.\nIII. Configurar uma interface dedicada de gerenciamento reservada (Management Interface Reservation) permite acessar o nó passivo diretamente via SSH/HTTPS sem interferir no tráfego do cluster.\nIV. Além de configurações estáticas e objetos, a replicação de estado (State Sync) em clusters de NGFW pode sincronizar sessões NAT, sessões TCP e associações de túneis VPN ativos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.6. HA. I, III e IV estão corretas. No FGCP padrão (Override off), a ordem é: número de portas monitoradas UP -> HA Uptime -> Prioridade -> Serial Number; a interface reservada de gerência permite administrar e atualizar o nó standby individualmente; e State Sync replica sessões, NAT e IPsec SAs. II é falsa porque o VRRP apenas elege o gateway virtual (VIP/VMAC), sem sincronizar tabelas de sessões stateful nem configurações de firewall.',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. Precedência do FGCP, gerência dedicada do nó passivo e escopo do State Sync estão corretos; VRRP não replica estado stateful nem configurações.',
    optionErrors: {
      0: 'Incorreta: III também é verdadeira sobre o uso de interface de gerência reservada para acesso individual ao nó secundário.',
      2: 'Incorreta: II é falsa porque VRRP não faz State Sync nem Config Sync entre firewalls.',
      3: 'Incorreta: inclui II, atribuindo replicação de sessões TCP e SAs IPsec ao protocolo VRRP.'
    }
  },
  {
    id: 'sarah-2-68',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre operação, failover e manutenção de clusters HA em firewalls corporativos, assinale a afirmação INCORRETA.',
    options: [
      'Antes de iniciar um upgrade de firmware com failover programado, deve-se confirmar que o Config Sync está em sincronia (checksum idêntico entre os nós).',
      'O uso de um endereço MAC virtual compartilhado pelo cluster evita que as estações internas precisem esperar a expiração da tabela ARP local ao ocorrer failover.',
      'Em um cluster HA Ativo-Passivo, o nó secundário assume com um novo IP de gateway diferente após o failover, exigindo reconfigurar o gateway padrão em todas as estações.',
      'No modo Ativo-Ativo com inspeção de proxy/UTM, o nó primário recebe o tráfego inicial e pode distribuir sessões para processamento no outro membro do cluster.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.6. HA. Em um cluster HA Ativo-Passivo, os membros compartilham os mesmos endereços IP das interfaces de tráfego (ou VIPs de cluster) e MAC virtual. Ao assumir o papel ativo, o nó secundário passa a responder exatamente pelo mesmo IP de gateway e MAC virtual (emitindo Gratuitous ARP aos switches), de forma completamente transparente para as estações da rede.',
    correctAnalysis:
      'A alternativa C é incorreta porque o failover mantém o mesmo IP e MAC virtual compartilhado, sem exigir alteração de gateway nos hosts.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): verificar checksum/estado sincronizado impede assumir o failover com regras desatualizadas.',
      1: 'Incorreta (afirmação verdadeira): mantendo o mesmo MAC virtual (e enviando GARP ao switch), o cache ARP das estações continua válido.',
      3: 'Incorreta (afirmação verdadeira): no HA Ativo-Ativo (ex.: FGCP A-A), o primário distribui sessões elegíveis de inspeção ao secundário.'
    }
  },
  {
    id: 'sarah-2-69',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre alta disponibilidade em firewalls:\n\nNa arquitetura _____, apenas um membro encaminha tráfego em operação normal enquanto o outro permanece em espera pronto para assumir; a troca de sinais contínuos entre os nós para monitorar saúde mútua ocorre pelas interfaces de _____; e a falha que leva ambos os firewalls a assumirem simultaneamente como primários chama-se _____.',
    options: [
      'Ativo-Passivo / Heartbeat / Split-Brain',
      'Ativo-Ativo / Port Monitoring / Graceful Restart',
      'Ativo-Passivo / Management / State Exhaustion',
      'VRRP / Heartbeat / Hairpinning'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.6. HA. O modo Ativo-Passivo mantém um nó operando e o outro em standby; interfaces de Heartbeat trocam sinais de saúde e sincronizam estado/configuração; e Split-Brain ocorre quando a perda do heartbeat faz ambos os membros assumirem o papel primário simultaneamente.',
    correctAnalysis:
      'Respectivamente: Ativo-Passivo (um nó ativo e outro em standby), Heartbeat (monitoramento e sincronismo) e Split-Brain (ambos ativos em conflito).',
    optionErrors: {
      1: 'Incorreta: Ativo-Ativo processa sessões nos dois nós e Graceful Restart pertence a protocolos de roteamento.',
      2: 'Incorreta: sinais de vida entre membros HA ocorrem no Heartbeat e o erro de duplo-primário chama-se Split-Brain.',
      3: 'Incorreta: Hairpinning refere-se a NAT loopback, não à condição de duplo-primário em cluster HA.'
    }
  },

  // --- 2.2.7 IPsec (+5 -> total 7) ---
  {
    id: 'sarah-2-70',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após ativar uma VPN IPsec Site-to-Site entre matriz e filial, testes com "ping" padrão passam normalmente e o túnel aparece UP, porém transferências SMB e páginas HTTPS grandes travam logo após o handshake inicial porque há bloqueio de ICMP Fragmentation Needed no caminho. Qual ajuste resolve o sintoma no firewall?',
    options: [
      'Trocar o protocolo ESP pelo protocolo AH mantendo o modo Transporte entre os gateways.',
      'Desativar o mecanismo anti-replay e a verificação de integridade SHA-256 nos dois lados.',
      'Aumentar o MTU da interface WAN para 9000 bytes (Jumbo Frames) no link da operadora.',
      'Aplicar TCP MSS Clamping (ex.: 1360 bytes) na interface/política do túnel IPsec.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2.2.7. IPsec. O cabeçalho ESP (e eventual UDP 4500 de NAT-T) adiciona ~50–80 bytes ao pacote IP. Sem PMTUD funcional (por filtro de ICMP Type 3 Code 4), pacotes TCP grandes com bit DF=1 acabam descartados silenciosamente no caminho ("black hole" de MTU), enquanto pings pequenos passam. Ajustar o TCP MSS Clamping (ex.: 1360–1400 bytes) força os hosts a negociar segmentos menores que cabem com folga no túnel.',
    correctAnalysis:
      'TCP MSS Clamping reduz o tamanho máximo de segmento anunciado no SYN/SYN-ACK, evitando fragmentação ou descarte por exceder o MTU efetivo após o overhead do IPsec.',
    optionErrors: {
      0: 'Incorreta: AH não criptografa nem reduz overhead a zero e modo Transporte não encapsula sub-redes entre gateways.',
      1: 'Incorreta: desligar anti-replay e integridade reduz segurança sem resolver o excesso de tamanho do pacote frente ao MTU.',
      2: 'Incorreta: enlaces Internet WAN comuns operam em MTU 1500 (ou 1492 PPPoE) e descartarão jumbo frames de 9000 bytes.'
    }
  },
  {
    id: 'sarah-2-71',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os elementos estruturais da arquitetura IPsec à esquerda às suas respectivas funções à direita:\n\nColuna da Esquerda:\n(I) ESP (IP Protocol 50)\n(II) AH (IP Protocol 51)\n(III) SPI (Security Parameter Index)\n(IV) PFS (Perfect Forward Secrecy)\n\nColuna da Direita:\n(A) Garante integridade e autenticação inclusive do cabeçalho IP externo, sem prover criptografia dos dados.\n(B) Fornece confidencialidade por criptografia simétrica além de integridade, autenticação e anti-replay.\n(C) Assegura que o comprometimento de uma chave mestra ou de uma sessão não comprometa chaves passadas/futuras.\n(D) Identificador de 32 bits no cabeçalho que indica ao receptor qual Security Association (SA) usar para o pacote.\n\nAssinale a alternativa que apresenta a associação correta.',
    options: [
      'I-A, II-B, III-D, IV-C.',
      'I-B, II-A, III-D, IV-C.',
      'I-B, II-A, III-C, IV-D.',
      'I-B, II-D, III-A, IV-C.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.7. IPsec. ESP (IP 50) provê cifragem e autenticação/integridade (B); AH (IP 51) autentica inclusive o IP header externo sem cifrar (A); SPI é o valor de 32 bits que indexa a SA unidirecional no receptor (D); e PFS assegura independência criptográfica entre chaves de sessão (C).',
    correctAnalysis:
      'A associação correta é I-B, II-A, III-D e IV-C.',
    optionErrors: {
      0: 'Incorreta: inverte ESP (que criptografa) com AH (que apenas autentica sem criptografar).',
      2: 'Incorreta: inverte SPI (índice da SA) com PFS (independência entre chaves).',
      3: 'Incorreta: inverte AH com SPI.'
    }
  },
  {
    id: 'sarah-2-72',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise as afirmativas sobre arquitetura e tipos de VPN IPsec:\n\nI. Uma Security Association (SA) IPsec de dados (AH ou ESP) é bidirecional por natureza, utilizando o mesmo SPI para proteger simultaneamente pacotes de ida e de volta.\nII. Na VPN IPsec Route-Based (baseada em rota com interface virtual VTI), o tráfego é direcionado ao túnel pela tabela de roteamento, viabilizando protocolos dinâmicos como OSPF e BGP sobre o túnel.\nIII. O modo Transporte do IPsec encapsula o pacote IP original inteiro dentro de um novo cabeçalho IP externo com os endereços públicos dos firewalls de borda.\nIV. Na VPN IPsec Policy-Based (baseada em política), o encaminhamento depende de seletores estáticos de sub-rede definidos na regra/política de criptografia, sem interface de túnel roteável.\n\nAssinale a alternativa correta.',
    options: [
      'Somente II e IV estão corretas.',
      'Somente I e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2.2.7. IPsec. II e IV são verdadeiras: Route-Based (VTI) integra o túnel ao roteamento L3 (suportando OSPF/BGP/ECMP), enquanto Policy-Based associa tráfego por seletores na política. I é falsa porque uma SA IPsec (ESP/AH) é sempre UNIDIRECIONAL (exigem-se duas SAs distintas, uma inbound e outra outbound, com seus próprios SPIs). III é falsa porque adicionar novo cabeçalho IP externo encapsulando todo o pacote IP original caracteriza o modo Túnel (não o modo Transporte).',
    correctAnalysis:
      'Gabarito: Somente II e IV estão corretas. Diferenciação Route-Based (VTI) vs Policy-Based está correta; SAs IPsec são unidirecionais e encapsular todo o pacote IP pertence ao modo Túnel.',
    optionErrors: {
      1: 'Incorreta: I e III são falsas quanto à direcionalidade da SA (unidirecional) e ao conceito de modo Túnel vs Transporte.',
      2: 'Incorreta: inclui I, afirmando erroneamente que uma única SA IPsec de dados é bidirecional.',
      3: 'Incorreta: inclui III, que descreve o modo Túnel atribuindo-o ao modo Transporte.'
    }
  },
  {
    id: 'sarah-2-73',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os protocolos, criptografia e proteções do padrão IPsec, assinale a afirmação INCORRETA.',
    options: [
      'Cifras AEAD como AES-GCM combinam confidencialidade e integridade em uma única operação eficiente, sendo preferíveis aos legados DES e 3DES.',
      'O mecanismo anti-replay valida o número de sequência dos pacotes recebidos dentro de uma janela deslizante, descartando duplicatas retransmitidas por atacantes.',
      'O protocolo AH utiliza o número de protocolo IP 50 e aplica criptografia AES no payload antes de calcular o ICV sobre o cabeçalho IP externo.',
      'Quando uma chave efêmera anterior é comprometida com PFS habilitado, sessões futuras ou passadas que usaram outras chaves geradas de forma independente permanecem protegidas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2.2.7. IPsec. O protocolo AH (Authentication Header) corresponde ao número de protocolo IP 51 (50 pertence ao ESP) e NÃO realiza criptografia do payload — sua função é exclusivamente autenticação e integridade de origem por meio do ICV (Integrity Check Value).',
    correctAnalysis:
      'A alternativa C é incorreta porque atribui ao AH o número IP 50 (que é do ESP) e a função de criptografia (ausente no AH).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): AES-GCM (AEAD) é o padrão moderno recomendado frente aos algoritmos obsoletos DES/3DES.',
      1: 'Incorreta (afirmação verdadeira): a janela deslizante de sequência impede ataques de repetição (replay).',
      3: 'Incorreta (afirmação verdadeira): o conceito de PFS garante sigilo independente entre gerações de chaves de sessão.'
    }
  },
  {
    id: 'sarah-2-74',
    editalItemId: '2.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre identificação de SAs, interfaces virtuais VTI e sigilo futuro no IPsec, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A combinação do SPI (Security Parameter Index), endereço IP de destino e protocolo de segurança (AH ou ESP) identifica univocamente uma Security Association no receptor.\n( ) Túneis IPsec Route-Based (VTI) impedem o uso de protocolos de roteamento dinâmico como OSPF e BGP porque não criam uma interface lógica roteável no firewall.\n( ) Quando o PFS (Perfect Forward Secrecy) está ativado, as novas chaves de criptografia de dados derivam diretamente da mesma chave inicial sem realizar troca adicional de chaves.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2.2.7. IPsec. (1) verdadeira: pela RFC 4301, a tripla (SPI, IP de destino, protocolo AH/ESP) identifica a SA unidirecional no receptor; (2) falsa: justamente a grande vantagem do Route-Based (VTI) é criar uma interface virtual L3 roteável que suporta OSPF, BGP e failover dinâmico; (3) falsa: o PFS força uma nova troca de chaves independente (ex.: Diffie-Hellman) a cada renegociação para que chaves novas não dependam da anterior.',
    correctAnalysis:
      'Gabarito: V – F – F. Apenas a primeira afirmativa é verdadeira sobre a identificação única da SA pela tripla SPI + IP destino + protocolo.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira segundo a RFC 4301 quanto à identificação da SA pela tripla SPI/destino/protocolo.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois túneis VTI (Route-Based) são projetados exatamente para suportar roteamento dinâmico.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o PFS exige geração independente de chaves via nova troca de segredos em vez de derivar da mesma chave anterior.'
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
      'O servidor de origem moveu o endereço do usuário para o cabeçalho Cc: que fica oculto nos leitores web.',
      'Os MTAs roteiam pelo envelope SMTP (RCPT TO:), onde ficam os destinatários em cópia oculta (Bcc:).',
      'Os MTAs consultam o cabeçalho "To:" para entregar ao grupo de distribuição expandido apenas no cliente.',
      'O cliente remetente usou um alias SMTP no cabeçalho "Reply-To:", que substitui o destinatário no roteamento.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.1.1. Arquitetura e protocolos de correio eletrônico. No SMTP, o roteamento entre MTAs utiliza os comandos do envelope (MAIL FROM e RCPT TO), enquanto "To:", "Cc:" e "From:" pertencem ao bloco DATA; destinatários em Bcc: existem no RCPT TO sem constar nos cabeçalhos visíveis.',
    correctAnalysis:
      'A entrega ocorre porque o envelope SMTP (RCPT TO:) contém o endereço do destinatário em Bcc:, sendo esse o parâmetro usado pelos MTAs para rotear a mensagem.',
    optionErrors: {
      0: 'Incorreta: o cabeçalho Cc: é transmitido de forma visível no bloco DATA e não oculta o destinatário como o Bcc:.',
      2: 'Incorreta: MTAs roteiam exclusivamente pelos comandos RCPT TO do envelope, não pelo cabeçalho visível "To:", e listas são expandidas no servidor.',
      3: 'Incorreta: o cabeçalho "Reply-To:" orienta apenas o endereço de resposta futura no MUA, sem participar do roteamento SMTP.'
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
      'Consulta o registro TXT em _domainkey.<domínio> ignorando a tag s= e valida o domínio do envelope MAIL FROM.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail (DKIM). O cabeçalho DKIM-Signature informa o domínio assinante (d=), o seletor (s=), os cabeçalhos assinados (h=), o hash do corpo (bh=) e a assinatura (b=); a chave pública é publicada via TXT em <seletor>._domainkey.<domínio>.',
    correctAnalysis:
      'O receptor extrai s= e d= do cabeçalho DKIM-Signature para buscar o registro TXT em <seletor>._domainkey.<domínio> e verificar criptograficamente cabeçalhos e corpo.',
    optionErrors: {
      0: 'Incorreta: comparar IP conectante com TXT do vértice descreve o funcionamento do SPF, não do DKIM.',
      2: 'Incorreta: _dmarc publica política de alinhamento DMARC e não armazena chaves públicas DKIM.',
      3: 'Incorreta: o seletor s= é obrigatório na consulta DNS (<seletor>._domainkey.<domínio>) e o DKIM valida o domínio d= da assinatura, não o MAIL FROM.'
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
      'O registro SPF de saas.net utiliza o qualificador "~all" (SoftFail) em vez de "-all" (HardFail) no domínio terceiro.',
      'A assinatura DKIM foi gerada com chave RSA de 1024 bits, abaixo do mínimo obrigatório de 2048 bits para p=reject.',
      'Falha de alinhamento de identificadores no DMARC, pois nem o Return-Path nem a tag d= coincidem com hospital.org.br.',
      'Ausência de registro DNS reverso (PTR) apontando os servidores do hospital.org.br para os IPs de envio de saas.net.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.1.2. Mecanismos de proteção de e-mail (DMARC). Para passar no DMARC, não basta SPF Pass ou DKIM Pass isolados: é obrigatório o alinhamento de domínio com o cabeçalho "From:" (Return-Path alinhado no SPF ou tag d= alinhada no DKIM).',
    correctAnalysis:
      'Embora SPF e DKIM passem para saas.net, nenhum deles está alinhado ao domínio hospital.org.br exibido em "From:", causando reprovação DMARC.',
    optionErrors: {
      0: 'Incorreta: o qualificador ~all ou -all afeta apenas IPs não autorizados; como o SPF já resultou em Pass, o problema é falta de alinhamento com hospital.org.br.',
      1: 'Incorreta: chaves DKIM de 1024 bits ainda são aceitas pela RFC 6376/8301 e não provocam reprovação DMARC quando a assinatura já resultou em Pass.',
      3: 'Incorreta: registro PTR auxilia reputação SMTP geral, mas não compõe os critérios de aprovação nem de alinhamento do protocolo DMARC.'
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
      'O agente Recipient Filter desativado no Edge, levando à rejeição automática das novas caixas postais.',
      'O Send Connector de saída sem o espaço de endereços "*", impedindo a entrada para novos usuários.',
      'A falta da permissão Ms-Exch-SMTP-Accept-Any-Recipient no Receive Connector de entrada da DMZ.',
      'A sincronização EdgeSync (TCP 50636) dos Mailbox Servers para a instância AD LDS do Edge.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.1. Microsoft Exchange Server. Como o Edge Transport na DMZ não ingressa no domínio AD, ele mantém uma instância local do AD LDS atualizada pelo serviço EdgeSync (porta TCP 50636) via Edge Subscription (Test-EdgeSynchronization / Start-EdgeSynchronization).',
    correctAnalysis:
      'Se novos destinatários não chegam ao Recipient Lookup do Edge Transport, a sincronização EdgeSync (TCP 50636) do Mailbox para o AD LDS está falhando ou a Edge Subscription expirou.',
    optionErrors: {
      0: 'Incorreta: desativar o Recipient Filter interrompe a validação de destinatários inexistentes, aceitando-os em vez de rejeitar novas caixas.',
      1: 'Incorreta: Send Connectors governam o roteamento de mensagens enviadas para fora da organização, não o catálogo de destinatários entrantes.',
      2: 'Incorreta: Ms-Exch-SMTP-Accept-Any-Recipient controla retransmissão (relay) para domínios externos, nunca entrega para domínios aceitos internos.'
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
      'Sobre o comportamento de relay SMTP e controles de proteção no Exchange Server, considere as afirmativas:\n\nI. Por padrão, o conector Default Frontend permite que qualquer endereço IP da internet retransmita mensagens anônimas para domínios externos.\nII. Tentativas não autorizadas de retransmissão externa recebem rejeição SMTP como "550 5.7.54 SMTP; Unable to relay recipient in non-accepted domain".\nIII. No conector Client Frontend (porta 587), a opção BasicAuthRequireTLS impede o envio de credenciais antes do estabelecimento do túnel TLS.\nIV. Um Send Connector com Smart Host pode ser configurado para autenticar-se junto a um gateway de saída externo usando TLS e credenciais específicas.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I e IV estão corretas.',
      'Somente II e III estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.2. SMTP relay. II, III e IV descrevem corretamente a resposta padrão do Exchange 2016/2019 ao relay não autorizado ("550 5.7.54 SMTP; Unable to relay recipient in non-accepted domain"), a proteção BasicAuthRequireTLS na porta 587 e a autenticação com Smart Host; I é falsa porque o Default Frontend bloqueia relay externo anônimo por padrão.',
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
      'Sobre os agentes nativos de antispam do Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O agente Recipient Filter com RecipientValidationEnabled ativado rejeita, no comando RCPT TO, destinatários inexistentes na organização.\n( ) O agente Content Filter executa sua inspeção antes mesmo da transmissão do cabeçalho e corpo, ainda durante o comando HELO/EHLO.\n( ) A agregação de listas seguras (Safelist Aggregation / Update-SafeList) ajuda a reduzir falsos positivos considerando contatos confiáveis dos usuários.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.3. antispam. (1) verdadeira: RecipientValidationEnabled rejeita no comando RCPT TO endereços inexistentes na organização; (2) falsa: Content Filter analisa cabeçalhos e corpo após o comando DATA, enquanto a filtragem inicial de IP ocorre no Connection Filtering; (3) verdadeira: Safelist Aggregation sincroniza listas seguras do Outlook para evitar falsos positivos.',
    correctAnalysis:
      'Gabarito: V – F – V. (1) e (3) estão corretas; (2) é falsa porque o Content Filter depende do conteúdo completo enviado após DATA.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira, pois RecipientValidationEnabled valida no RCPT TO a existência do destinatário na organização.',
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
      'O domínio deve ser incluído com Add-IPBlockListEntry e parâmetro -Action Allow, pois Content Filter não aceita domínios.',
      'O Connection Filtering (IP Block List Provider) atua antes do Content Filter; é preciso liberar o IP com Add-IPAllowListEntry.',
      'É necessário cadastrar o domínio parceiro em Set-SenderFilterConfig -BlockedDomains:$false e reiniciar o serviço IIS.',
      'A exceção só entra em vigor após liberar o domínio em Set-RecipientFilterConfig -BypassedRecipients e limpar o cache DNS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.3. antispam. Na ordem dos agentes antispam do Exchange, o Connection Filtering (IP Block List / IP Block List Providers) executa antes do Content Filter. Exceções por domínio no Content Filter não evitam bloqueios feitos por IP na camada anterior; deve-se cadastrar os IPs legítimos via Add-IPAllowListEntry.',
    correctAnalysis:
      'Como o bloqueio por RBL/DNSBL ocorre no Connection Filtering (baseado em IP, antes do Content Filter), a liberação deve ser feita por IP com Add-IPAllowListEntry.',
    optionErrors: {
      0: 'Incorreta: Add-IPBlockListEntry cria bloqueios manuais de IP (não aceita domínios nem -Action Allow), enquanto Content Filter aceita BypassedSenderDomains.',
      2: 'Incorreta: Set-SenderFilterConfig gerencia bloqueio de remetentes após MAIL FROM e reiniciar o IIS não afeta os agentes SMTP de transporte.',
      3: 'Incorreta: BypassedRecipients do Recipient Filter aplica-se apenas a destinatários internos na validação de diretório, não a remetentes externos em DNSBL.'
    }
  },

  // ==================== FASE B - EIXO 4 LOTE 2 (+23: sarah-4-48 a sarah-4-70) ====================
  // --- 4.2.3 (+2 -> total 7) ---
  {
    id: 'sarah-4-48',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os agentes Sender Filter, Sender ID e listas DNSBL no Exchange Server, analise as afirmativas a seguir:\n\nI. O Sender Filter permite bloquear remetentes específicos (BlockedSenders), domínios (BlockedDomains) e mensagens sem remetente visível (BlankSenderBlockingEnabled).\nII. O cmdlet Test-IPBlockListProvider verifica em tempo real se um endereço IP consultado é retornado por uma lista RBL/DNSBL configurada no servidor.\nIII. O agente Sender ID no Exchange valida exclusivamente assinaturas criptográficas DKIM publicadas em _domainkey.<domínio>.\nIV. Configurar Set-SenderFilterConfig -Action StampStatus encerra a sessão SMTP imediatamente com código 550 antes do comando DATA.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.3. antispam. I e II estão corretas quanto aos recursos do Sender Filter e ao teste Test-IPBlockListProvider; III é falsa porque o Sender ID verifica registros SPF/PRA do IP remetente, não DKIM; IV é falsa porque StampStatus apenas marca o cabeçalho para o Content Filter (quem bloqueia na hora é -Action Reject).',
    correctAnalysis:
      'Apenas I e II descrevem corretamente Sender Filter e Test-IPBlockListProvider; III confunde Sender ID (SPF) com DKIM e IV confunde StampStatus com Reject.',
    optionErrors: {
      0: 'Incorreta: inclui III (Sender ID valida SPF/PRA, não DKIM) e omite II (verdadeira).',
      1: 'Incorreta: omite I (verdadeira) e inclui IV (StampStatus apenas marca a mensagem, não rejeita com 550).',
      3: 'Incorreta: inclui IV, pois a ação de bloqueio imediato no Sender Filter é Reject, não StampStatus.'
    }
  },
  {
    id: 'sarah-4-49',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Quando todos os limiares SCL do Content Filter estão habilitados no Exchange Server (Delete=9, Reject=7, Quarantine=5) e SCLJunkThreshold=4 na organização, qual ação ocorre para uma mensagem avaliada com SCL igual a 7?',
    options: [
      'A mensagem é entregue na pasta Lixo Eletrônico, pois SCLJunkThreshold tem prioridade por ter menor valor.',
      'A mensagem é descartada silenciosamente sem notificação, aplicando-se o limiar imediatamente superior.',
      'A mensagem é encaminhada para a caixa QuarantineMailbox para análise, pois 7 supera o limiar 5.',
      'A mensagem é rejeitada na sessão SMTP com código 550, pois a precedência avalia Delete, Reject e Quarantine.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.3. antispam. O Exchange avalia os limiares SCL da ação mais severa para a menos severa: primeiro SCLDeleteThreshold (9), depois SCLRejectThreshold (7), em seguida SCLQuarantineThreshold (5) e, somente após aceita na entrega, SCLJunkThreshold (4). Como 7 >= Reject(7) e < Delete(9), ocorre rejeição SMTP.',
    correctAnalysis:
      'A ordem de precedência do Content Filter avalia Delete → Reject → Quarantine → Junk; com SCL=7, o critério Reject (7) é satisfeito antes de Quarantine (5) e Junk (4).',
    optionErrors: {
      0: 'Incorreta: SCLJunkThreshold é avaliado somente depois que a mensagem passa pelo transporte sem ser descartada, rejeitada ou quarentenada.',
      1: 'Incorreta: o descarte silencioso exige SCL maior ou igual a SCLDeleteThreshold (9).',
      2: 'Incorreta: a quarentena só se aplicaria se o SCL ficasse entre 5 e 6, abaixo do limiar de rejeição (7).'
    }
  },

  // --- 4.2.4 (+6 -> total 7) ---
  {
    id: 'sarah-4-50',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um Mailbox Server Exchange padrão, qual Receive Connector do serviço HubTransport escuta na porta TCP 2525 para receber mensagens encaminhadas pelo Front End Transport ou por outros servidores Mailbox internos?',
    options: [
      'Default <NomeDoServidor> (TransportRole HubTransport, porta 2525).',
      'Default Frontend <NomeDoServidor> (TransportRole FrontendTransport, porta 25).',
      'Client Proxy <NomeDoServidor> (TransportRole HubTransport, porta 465).',
      'Outbound Proxy Frontend <NomeDoServidor> (TransportRole FrontendTransport, porta 717).'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.4. conectores. O Exchange cria cinco Receive Connectors padrão por servidor: Default Frontend (25) e Client Frontend (587) no FrontendTransport; Default <Servidor> (2525) e Client Proxy (465) no HubTransport; e Outbound Proxy Frontend (717) para proxy de saída.',
    correctAnalysis:
      'Default <NomeDoServidor> atua no serviço de Transporte interno (HubTransport) na porta TCP 2525 recebendo conexões proxied pelo Frontend e entre nós internos.',
    optionErrors: {
      1: 'Incorreta: Default Frontend atua no serviço stateless Front End Transport na porta 25 recebendo tráfego externo.',
      2: 'Incorreta: Client Proxy na porta 465 recebe apenas conexões de submissão autenticada encaminhadas pelo Client Frontend (587).',
      3: 'Incorreta: Outbound Proxy Frontend (717) atua no fluxo de saída quando FrontendProxyEnabled está habilitado no Send Connector.'
    }
  },
  {
    id: 'sarah-4-51',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma organização possui dois Send Connectors: Conector-A com AddressSpace "SMTP:*;5" e Conector-B com "SMTP:parceiro.org.br;20". Ao enviar um e-mail para "exames@parceiro.org.br", qual conector o Exchange seleciona e por quê?',
    options: [
      'Conector-A, pois o custo 5 é menor que o custo 20 configurado no Conector-B.',
      'Ambos em round-robin, porque o caractere curinga "*" engloba todos os domínios externos.',
      'Conector-B, pois o espaço de endereços mais específico (parceiro.org.br) prevalece sobre o custo.',
      'Conector-A, pois o roteamento avalia primeiro o menor custo global antes de comparar domínios.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.4. conectores. Na seleção de Send Connectors, o Exchange escolhe primeiro o espaço de endereços mais específico para o domínio destinatário (parceiro.org.br supera "*"). O custo (Cost) serve apenas para desempatar conectores com a mesma especificidade de domínio.',
    correctAnalysis:
      'A regra de roteamento prioriza sempre a correspondência de domínio mais específica (parceiro.org.br > *); o menor Cost só desempata espaços de endereços equivalentes.',
    optionErrors: {
      0: 'Incorreta: o custo só é comparado entre conectores com o mesmo nível de especificidade de AddressSpace.',
      1: 'Incorreta: o balanceamento ocorre apenas quando há empate na especificidade do domínio e também no menor custo.',
      3: 'Incorreta: inverte a ordem de avaliação, pois a especificidade do domínio tem precedência sobre o valor numérico de Cost.'
    }
  },
  {
    id: 'sarah-4-52',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre a topologia e o escopo de Send Connectors no Exchange Server, analise as afirmativas a seguir:\n\nI. O atributo SourceTransportServers determina quais servidores Mailbox da organização podem originar o envio de saída por aquele conector.\nII. Send Connectors são objetos armazenados localmente no registro de cada servidor, exigindo recriação manual ao adicionar um novo nó ao DAG.\nIII. O parâmetro IsScopedConnector restringe o uso do Send Connector aos servidores Mailbox pertencentes ao mesmo Active Directory Site de origem.\nIV. Habilitar FrontendProxyEnabled faz o serviço de Transporte interno encaminhar o envio externo pelo serviço Front End Transport na porta 717.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.4. conectores. I, III e IV descrevem corretamente SourceTransportServers, IsScopedConnector e FrontendProxyEnabled; II é falsa porque Send Connectors são objetos de nível organizacional gravados no Active Directory (Configuration), visíveis a toda a organização.',
    correctAnalysis:
      'Estão corretas I, III e IV; II confunde Send Connectors (escopo organizacional no AD) com Receive Connectors (escopo local por servidor).',
    optionErrors: {
      0: 'Incorreta: inclui II (Send Connectors têm escopo organizacional no AD) e omite III e IV (verdadeiras).',
      1: 'Incorreta: inclui II (falsa) e omite III (IsScopedConnector restringe por AD Site).',
      2: 'Incorreta: omite I e IV (verdadeiras) e inclui II (falsa).'
    }
  },
  {
    id: 'sarah-4-53',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito das propriedades de configuração de Receive Connectors no Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'Dois Receive Connectors no mesmo servidor podem ter idênticos Bindings e RemoteIPRanges, mesclando suas permissões em paralelo.',
      'O parâmetro Bindings define os endereços IP locais e a porta TCP em que o conector aceita conexões SMTP entrantes.',
      'O parâmetro TransportRole indica se o conector atua no serviço FrontendTransport ou no HubTransport interno do servidor.',
      'Ajustar PermissionGroups altera permissões no objeto do conector no AD para grupos como ExchangeUsers ou AnonymousUsers.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.4. conectores. A opção A é incorreta: o Exchange proíbe dois Receive Connectors no mesmo servidor e papel com Bindings e RemoteIPRanges idênticos/conflitantes; conectores na mesma porta só coexistem se tiverem faixas RemoteIPRanges distintas ou não totalmente sobrepostas.',
    correctAnalysis:
      'Não é possível ter dois Receive Connectors com idênticos Bindings e RemoteIPRanges somando permissões no mesmo servidor; para diferenciar tratamentos na mesma porta, usa-se RemoteIPRanges mais específicos.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): Bindings configura interface IP local e porta TCP de escuta do Receive Connector.',
      2: 'Incorreta (afirmação verdadeira): TransportRole diferencia conectores de FrontendTransport e HubTransport.',
      3: 'Incorreta (afirmação verdadeira): PermissionGroups mapeia grupos como ExchangeServers, ExchangeUsers e AnonymousUsers.'
    }
  },
  {
    id: 'sarah-4-54',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Servidores Mailbox usam exclusivamente DNS interno na placa de rede, sem encaminhamento para a internet, causando falha de resolução MX na saída externa. Como configurar o Send Connector para consultar servidores DNS externos específicos sem alterar a NIC do Windows?',
    options: [
      'Alterar TransportRole do Send Connector para EdgeTransport e liberar a porta 50636 no AD.',
      'Habilitar DNSRoutingEnabled $false no Receive Connector Default Frontend apontando para o DNS.',
      'Ativar UseExternalDNSServersEnabled no Send Connector e definir ExternalDNSServers no TransportService.',
      'Configurar AddressSpaces como "DNS:*;1" e reiniciar o serviço Information Store do servidor.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.4. conectores. Quando o DNS da NIC é somente interno, configura-se a lista de DNS externos em Set-TransportService -ExternalDNSServers e habilita-se Set-SendConnector -UseExternalDNSServersEnabled $true para que o Send Connector resolva MX externos por esses servidores.',
    correctAnalysis:
      'UseExternalDNSServersEnabled no Send Connector combinado com ExternalDNSServers no TransportService separa a resolução MX externa sem tocar no DNS da placa de rede.',
    optionErrors: {
      0: 'Incorreta: Send Connectors não possuem parâmetro TransportRole nem usam a porta EdgeSync 50636.',
      1: 'Incorreta: Receive Connectors não possuem DNSRoutingEnabled nem realizam resolução de saída para domínios externos.',
      3: 'Incorreta: AddressSpaces utiliza o tipo "SMTP:" (não "DNS:") e o Information Store não roteia conectores SMTP.'
    }
  },
  {
    id: 'sarah-4-55',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre parâmetros de conectores no Exchange Server:\n\nPara exigir criptografia TLS obrigatória em um Send Connector de saída, habilita-se _____; para registrar todo o diálogo SMTP nos logs do conector, ajusta-se ProtocolLoggingLevel para _____; e no desempate entre Send Connectors com mesmo domínio, escolhe-se o de menor _____.',
    options: [
      'TlsAuthLevel / Basic / MaxMessageSize',
      'RequireTLS / Verbose / Cost',
      'RequireOAuth / Detailed / Priority',
      'ForceStartTLS / Summary / Weight'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.4. conectores. Set-SendConnector -RequireTLS $true exige TLS na entrega; -ProtocolLoggingLevel Verbose grava os logs SMTP detalhados; e -Cost (em AddressSpaces) define o custo de roteamento usado no desempate.',
    correctAnalysis:
      'Os parâmetros exatos do Exchange PowerShell são RequireTLS, Verbose (em ProtocolLoggingLevel) e Cost (no AddressSpace do Send Connector).',
    optionErrors: {
      0: 'Incorreta: TlsAuthLevel define validação de certificado (ex.: DomainValidation) e ProtocolLoggingLevel aceita apenas None ou Verbose.',
      2: 'Incorreta: não existem os parâmetros RequireOAuth nem Detailed no Send Connector, e o campo de custo chama-se Cost.',
      3: 'Incorreta: ForceStartTLS, Summary e Weight não correspondem aos parâmetros reais do Exchange Send Connector.'
    }
  },

  // --- 4.2.5 (+6 -> total 7) ---
  {
    id: 'sarah-4-56',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No serviço de transporte do Exchange Server, em qual fila ficam retidas mensagens cujo destinatário não possui rota válida conhecida no momento (por exemplo, Send Connector desabilitado ou falha de roteamento entre AD Sites)?',
    options: [
      'Unreachable Queue, aguardando restauração da rota na topologia para reprocessamento.',
      'Poison Message Queue, aguardando liberação após crash do processo de transporte.',
      'Submission Queue, aguardando coleta inicial pelo Mailbox Transport Delivery Service.',
      'Shadow Redundancy Queue, mantendo cópias apenas enquanto o backup VSS está em execução.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.5. filas. A Unreachable Queue armazena mensagens para as quais o Categorizer não encontrou rota de entrega válida. Assim que um Send Connector é reativado ou a rota de AD Site volta, as mensagens são resubmetidas automaticamente.',
    correctAnalysis:
      'Mensagens sem próximo salto válido (como ausência de Send Connector ativo para o domínio) são movidas para a Unreachable Queue.',
    optionErrors: {
      1: 'Incorreta: a Poison Message Queue isola mensagens nocivas que provocaram queda crítica do serviço MSExchangeTransport.',
      2: 'Incorreta: a Submission Queue recebe mensagens recém-chegadas antes da etapa de categorização.',
      3: 'Incorreta: Shadow Redundancy protege mensagens em trânsito contra falha de servidor, sem relação com ausência de rota nem VSS.'
    }
  },
  {
    id: 'sarah-4-57',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Para excluir permanentemente centenas de mensagens de spam acumuladas em uma Delivery Queue do Exchange sem enviar notificações de falha (NDR) aos remetentes forjados, qual comando PowerShell deve ser executado?',
    options: [
      'Get-Queue | Retry-Queue -Resubmit $false para expirar os registros imediatamente.',
      'Get-Message -Queue "<fila>" | Remove-Message -WithNDR $false.',
      'Get-Message -Queue "<fila>" | Suspend-Message -WithNDR $false.',
      'Stop-Service MSExchangeTransport e apagar manualmente os arquivos .eml da pasta Pickup.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.5. filas. O cmdlet Remove-Message exclui mensagens específicas das filas; o parâmetro -WithNDR $false garante remoção silenciosa sem gerar backscatter (NDRs para remetentes falsificados).',
    correctAnalysis:
      'Remove-Message com -WithNDR $false descarta as mensagens da fila sem enviar relatórios de não entrega ao remetente.',
    optionErrors: {
      0: 'Incorreta: Retry-Queue apenas força nova tentativa de entrega e não remove mensagens da fila.',
      2: 'Incorreta: Suspend-Message apenas pausa as mensagens na fila (mantendo-as no mail.que) e não possui -WithNDR.',
      3: 'Incorreta: filas ativas ficam armazenadas no banco ESE mail.que, não como arquivos .eml na pasta Pickup.'
    }
  },
  {
    id: 'sarah-4-58',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre armazenamento e proteção das filas de transporte no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Toda mensagem que recebe resposta temporária SMTP 4xx é movida em 10 minutos para a Poison Message Queue.\n( ) O banco de filas utiliza tecnologia ESE no arquivo mail.que e conta com Back Pressure para monitorar disco e memória.\n( ) No nível High de Back Pressure, o Exchange apaga automaticamente as mensagens já enfileiradas na Delivery Queue para liberar espaço.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.5. filas. (1) falsa: erros transitórios 4xx permanecem na Delivery Queue em estado Retry; a Poison Queue isola apenas mensagens que derrubaram o worker de transporte; (2) verdadeira: o Exchange grava filas no banco ESE mail.que e usa Back Pressure para proteger recursos; (3) falsa: no nível High, o Back Pressure rejeita novas conexões/mensagens entrantes com erro 452, nunca apaga mensagens já aceitas.',
    correctAnalysis:
      'Gabarito: F – V – F. Apenas (2) está correta quanto ao banco mail.que e ao Back Pressure; (1) confunde Retry com Poison Queue e (3) atribui exclusão destrutiva ao Back Pressure.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois falhas temporárias 4xx ficam em retentativa na Delivery Queue.',
      1: 'Incorreta: a afirmativa (2) é verdadeira, pois as filas ficam no banco ESE mail.que com monitoramento por Back Pressure.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o Back Pressure interrompe novas entradas (452 4.3.1), preservando mensagens já enfileiradas.'
    }
  },
  {
    id: 'sarah-4-59',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre manutenção, exportação e temporização de filas no Exchange Server, considere as afirmativas:\n\nI. Mensagens isoladas na Poison Message Queue permanecem no estado Suspended até análise e eventual liberação via Resume-Message.\nII. O cmdlet Export-Message exige que a mensagem esteja no estado Suspended para gravar uma cópia .eml para inspeção ou reenvio via Replay.\nIII. Por padrão, o parâmetro MessageExpirationTimeout expira e devolve NDR após apenas 30 minutos de falha temporária na fila.\nIV. O arquivo de banco de filas mail.que pode ser realocado para outro volume dedicado por meio do script Move-TransportDatabase.ps1.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e IV estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e III estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.5. filas. I, II e IV refletem exatamente a operação de Poison Queue, Export-Message e Move-TransportDatabase.ps1; III é falsa porque o MessageExpirationTimeout padrão no Exchange Server é de 2 dias (48 horas), com notificação de atraso (DelayNotificationTimeout) após 4 horas.',
    correctAnalysis:
      'I, II e IV estão corretas; III erra ao citar 30 minutos para expiração padrão, quando o padrão do Exchange é 2 dias.',
    optionErrors: {
      0: 'Incorreta: omite II, pois Export-Message realmente requer suspensão prévia da mensagem antes da exportação.',
      2: 'Incorreta: omite I (verdadeira) e inclui III (expiração padrão é 2 dias, não 30 minutos).',
      3: 'Incorreta: inclui III (falsa) e omite IV (Move-TransportDatabase.ps1 é o script oficial para mover o mail.que).'
    }
  },
  {
    id: 'sarah-4-60',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os recursos de resiliência, retentativa e controle de fluxo nas filas do Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'O Safety Net retém todas as mensagens indefinidamente por anos, dispensando backup dos bancos de caixas postais EDB.',
      'A Shadow Redundancy preserva cópias redundantes em outro servidor de transporte até o próximo salto confirmar a entrega.',
      'O comando Retry-Queue -Resubmit $true força nova submissão ao categorizador quando rotas voltam a ficar disponíveis.',
      'Sob Back Pressure em nível High, novas conexões recebem resposta temporária "452 4.3.1 Insufficient system resources".'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.5. filas. A afirmação A é incorreta porque o Safety Net armazena mensagens no banco de transporte por uma janela temporária configurável (padrão de 2 dias via SafetyNetHoldTime) para apoiar failover/shadow recovery no DAG, nunca substituindo backups dos bancos .EDB.',
    correctAnalysis:
      'O Safety Net tem retenção limitada (padrão 2 dias) voltada à recuperação de transporte e DAG, jamais substituindo backups das caixas postais.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): Shadow Redundancy descarta a cópia sombra somente após confirmação de entrega do próximo salto.',
      2: 'Incorreta (afirmação verdadeira): Retry-Queue -Resubmit $true reavalia rotas e força nova tentativa imediata.',
      3: 'Incorreta (afirmação verdadeira): "452 4.3.1 Insufficient system resources" é o código emitido pelo Back Pressure.'
    }
  },
  {
    id: 'sarah-4-61',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os estados exibidos no Queue Viewer / Get-Queue do Exchange Server aos seus significados operacionais.\n\nColuna da Esquerda:\n(I) Active\n(II) Ready\n(III) Retry\n(IV) Suspended\n\nColuna da Direita:\n(A) Entrega pausada manualmente pelo administrador ou por isolamento de mensagem nociva.\n(B) Fila atualmente em processo ativo de transmissão de mensagens para o próximo salto.\n(C) Última tentativa falhou temporariamente; fila aguardando o cronômetro de nova tentativa.\n(D) Fila ativa e saudável sem mensagens pendentes aguardando entrega imediata.\n\nAssinale a alternativa correta.',
    options: [
      'I-D, II-B, III-C, IV-A.',
      'I-B, II-D, III-A, IV-C.',
      'I-B, II-D, III-C, IV-A.',
      'I-C, II-D, III-B, IV-A.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.5. filas. Active (B) indica transmissão em curso; Ready (D) indica fila pronta/vazia que transmitiu recentemente; Retry (C) aguarda intervalo após falha temporária; e Suspended (A) representa fila/mensagem congelada.',
    correctAnalysis:
      'A correspondência correta é I-B (Active), II-D (Ready), III-C (Retry) e IV-A (Suspended).',
    optionErrors: {
      0: 'Incorreta: inverte Active (I) com Ready (II).',
      1: 'Incorreta: inverte Retry (III) com Suspended (IV).',
      3: 'Incorreta: inverte Active (I) com Retry (III).'
    }
  },

  // --- 4.2.6 (+4 -> total 7) ---
  {
    id: 'sarah-4-62',
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na saída do cmdlet Get-MessageTrackingLog no Exchange Server, qual EventId confirma que a mensagem foi depositada com sucesso no banco de dados de uma caixa postal local da organização?',
    options: [
      'DELIVER (Source STOREDRIVER).',
      'SEND (Source SMTP).',
      'EXPAND (Source ROUTING).',
      'SUBMIT (Source STOREDRIVER).'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.6. Message Tracking. No ciclo de eventos do Message Tracking, SUBMIT registra a coleta inicial da caixa de saída, EXPAND expande grupos de distribuição, SEND registra envio SMTP para outro servidor/organização e DELIVER (Source STOREDRIVER) confirma gravação final na caixa postal local.',
    correctAnalysis:
      'DELIVER com Source STOREDRIVER atesta a entrega final bem-sucedida da mensagem na caixa postal do destinatário no Exchange.',
    optionErrors: {
      1: 'Incorreta: SEND (SMTP) registra transmissão de saída para outro servidor ou gateway externo, não gravação na caixa local.',
      2: 'Incorreta: EXPAND indica apenas o desdobramento dos membros de um grupo de distribuição.',
      3: 'Incorreta: SUBMIT marca o momento em que o usuário envia a mensagem da caixa de saída para o serviço de transporte.'
    }
  },
  {
    id: 'sarah-4-63',
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre configuração e consulta do Message Tracking no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O parâmetro MessageTrackingLogEnabled é definido individualmente por caixa postal via Set-Mailbox, inexistindo no TransportService.\n( ) Em um DAG com múltiplos servidores Mailbox, executar Get-MessageTrackingLog em um único nó consulta automaticamente todos os nós sem pipeline.\n( ) O parâmetro MessageTrackingLogSubjectLoggingEnabled controla se o campo Assunto (Subject) das mensagens é registrado nos arquivos de log.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.6. Message Tracking. (1) falsa: MessageTrackingLogEnabled é configurado por servidor em Set-TransportService / Set-MailboxTransportService (habilitado por padrão); (2) falsa: os logs são locais em cada servidor, exigindo pipeline com Get-ExchangeServer ou Get-TransportService para varrer todo o ambiente; (3) verdadeira: MessageTrackingLogSubjectLoggingEnabled habilita ou suprime a gravação do Subject por privacidade.',
    correctAnalysis:
      'Gabarito: F – F – V. Apenas (3) está correta; (1) erra o escopo de configuração (servidor, não caixa postal) e (2) ignora que cada servidor grava logs locais.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois MessageTrackingLogEnabled pertence ao nível de servidor no TransportService.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois Get-MessageTrackingLog sem -Server ou pipeline consulta apenas o servidor alvo local.',
      3: 'Incorreta: a afirmativa (3) é verdadeira quanto ao controle de gravação do assunto via MessageTrackingLogSubjectLoggingEnabled.'
    }
  },
  {
    id: 'sarah-4-64',
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os recursos, retenção e filtros do Message Tracking no Exchange Server, considere as afirmativas:\n\nI. Por padrão, Get-MessageTrackingLog retorna todo o histórico desde a instalação sem limite de ResultSize ou necessidade de filtros.\nII. Filtrar pelo parâmetro -MessageId permite correlacionar os eventos RECEIVE, TRANSFER, SEND ou DELIVER de uma mesma mensagem entre saltos.\nIII. Os arquivos de log residem por padrão em TransportRoles\\Logs\\MessageTracking com retenção padrão de 30 dias (MessageTrackingLogMaxAge).\nIV. O recurso Delivery Reports no EAC apoia-se nos cmdlets Search-MessageTrackingReport e Get-MessageTrackingReport para rastreamento amigável.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.6. Message Tracking. II, III e IV estão corretas quanto ao uso de -MessageId, diretório/retenção padrão de 30 dias e cmdlets do Delivery Reports; I é falsa porque o cmdlet limita por padrão a saída em 1.000 itens (exigindo -ResultSize Unlimited ou janelas -Start/-End).',
    correctAnalysis:
      'Estão corretas II, III e IV; I é falsa pois Get-MessageTrackingLog impõe limite padrão de 1.000 resultados quando -ResultSize Unlimited não é informado.',
    optionErrors: {
      0: 'Incorreta: inclui I (ResultSize padrão é 1.000 registros) e omite III e IV (verdadeiras).',
      1: 'Incorreta: inclui I (falsa) e omite III (retenção padrão de 30 dias em TransportRoles\\Logs\\MessageTracking).',
      2: 'Incorreta: inclui I (falsa) e omite II (correlação completa via -MessageId).'
    }
  },
  {
    id: 'sarah-4-65',
    editalItemId: '4.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um destinatário alega não ter recebido um e-mail externo e o remetente não recebeu bounce. Ao consultar Get-MessageTrackingLog, o analista encontra EventId RECEIVE (Source SMTP) seguido de EventId DROP (Source AGENT). O que isso indica?',
    options: [
      'Um agente antispam ou regra de transporte descartou a mensagem silenciosamente sem gerar NDR.',
      'A mensagem permanece retida na Unreachable Queue aguardando a criação de um Send Connector.',
      'O servidor remoto encerrou a conexão com código 421 e a mensagem retornará em 4 horas.',
      'O banco EDB da caixa destino foi desmontado durante a gravação do evento DELIVER.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.6. Message Tracking. No Message Tracking, o EventId DROP (geralmente com Source AGENT) indica descarte silencioso intencional por um agente de transporte (ex.: Content Filter acima do SCLDeleteThreshold ou regra de fluxo configurada para DeleteMessageWithoutNotifyingAnyone), sem emissão de NDR (FAIL).',
    correctAnalysis:
      'EventId DROP com Source AGENT confirma que a mensagem entrou via SMTP (RECEIVE) e foi descartada silenciosamente por agente ou regra de transporte sem NDR.',
    optionErrors: {
      1: 'Incorreta: mensagens na Unreachable Queue registram DEFER/TRANSFER pendente, não DROP por AGENT.',
      2: 'Incorreta: desconexão 421 temporária de saída ocorre na tentativa de envio (DEFER), enquanto DROP é descarte definitivo interno.',
      3: 'Incorreta: falha de gravação em banco desmontado manteria a mensagem em fila local (DEFER/RETRY) e não geraria DROP por AGENT.'
    }
  },

  // --- 4.2.7 (+5 -> total 7) ---
  {
    id: 'sarah-4-66',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No diretório virtual /owa do Exchange Server, qual método de autenticação exibe a página HTML de login própria do Exchange (aceitando usuário/UPN e seleção de computador público ou privado) recomendada para acesso web externo?',
    options: [
      'WindowsAuthentication (NTLM/Kerberos integrado direto no cabeçalho HTTP).',
      'AnonymousAuthentication sem validação de credenciais no IIS.',
      'FormsAuthentication (Forms-Based Authentication — FBA) sobre HTTPS.',
      'DigestAuthentication utilizando armazenamento de senha reversível no AD.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.7. OWA. A autenticação baseada em formulários (FormsAuthentication / FBA) no /owa apresenta a tela web do Exchange, suporta timeout diferenciado para terminais públicos e privados e funciona bem através de proxies reversos externos sobre HTTPS.',
    correctAnalysis:
      'FormsAuthentication (FBA) é o padrão recomendado para publicação externa do OWA, fornecendo tela customizada de login e controles de sessão.',
    optionErrors: {
      0: 'Incorreta: WindowsAuthentication dispara prompt nativo do navegador/SSO corporativo (útil internamente ou atrás de pré-autenticação), não a página FBA do Exchange.',
      1: 'Incorreta: AnonymousAuthentication não autentica o usuário da caixa postal no acesso ao OWA.',
      3: 'Incorreta: DigestAuthentication não é o modo padrão web do OWA e exige armazenamento em texto reversível no AD.'
    }
  },
  {
    id: 'sarah-4-67',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre políticas, URLs e habilitação do OWA (Outlook on the Web) no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Executar Set-CASMailbox -OWAEnabled $false para um usuário desativa o diretório virtual /owa para todos os usuários do servidor.\n( ) O cmdlet Set-OwaMailboxPolicy permite restringir recursos da interface web por grupo de usuários, como bloqueio de download direto de anexos.\n( ) Configurar corretamente InternalUrl e ExternalUrl em Set-OwaVirtualDirectory evita redirecionamentos quebrados por proxy reverso ou split-DNS.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.7. OWA. (1) falsa: Set-CASMailbox atua no nível individual de cada caixa postal sem afetar o diretório virtual /owa dos demais usuários; (2) verdadeira: OwaMailboxPolicy segmenta permissões funcionais do webmail; (3) verdadeira: InternalUrl/ExternalUrl alinham proxy e publicação interna/externa.',
    correctAnalysis:
      'Gabarito: F – V – V. (1) é falsa porque Set-CASMailbox -OWAEnabled $false afeta apenas a caixa alvo; (2) e (3) estão corretas sobre OwaMailboxPolicy e URLs do diretório virtual.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois o bloqueio via Set-CASMailbox é individual por usuário.',
      1: 'Incorreta: a afirmativa (2) é verdadeira, pois OwaMailboxPolicy controla funcionalidades específicas da interface OWA.',
      2: 'Incorreta: a afirmativa (3) é verdadeira quanto à definição de InternalUrl e ExternalUrl.'
    }
  },
  {
    id: 'sarah-4-68',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre operação, proxy HTTP e ajuste do diretório virtual /owa no IIS do Exchange Server, analise as afirmativas:\n\nI. Erros HTTP 500 ou falha de carregamento de scripts no OWA após uma atualização cumulativa costumam ser corrigidos reciclando o pool MSExchangeOWAAppPool ou rodando UpdateCas.ps1.\nII. Em arquiteturas modernas do Exchange (2016/2019/SE), o Front End HTTPS (443) recebe a conexão OWA e faz proxy para o backend do servidor que monta o banco ativo.\nIII. O serviço OWA opera nativamente sobre HTTP simples na porta TCP 80 sem exigir TLS nem redirecionamento no IIS.\nIV. Ajustar LogonFormat para UserName em Set-OwaVirtualDirectory dispensa o usuário de digitar o prefixo de domínio, desde que DefaultDomain esteja preenchido.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.7. OWA. I, II e IV estão corretas quanto à recuperação do MSExchangeOWAAppPool/UpdateCas.ps1, arquitetura de proxy Front End -> Backend e LogonFormat UserName com DefaultDomain; III é falsa porque o OWA exige HTTPS (TCP 443) no IIS.',
    correctAnalysis:
      'Estão corretas I, II e IV; III é falsa pois o acesso ao OWA requer HTTPS (porta 443) com redirecionamento da porta 80 quando configurado.',
    optionErrors: {
      0: 'Incorreta: omite IV, pois LogonFormat UserName com DefaultDomain simplifica o login sem prefixo de domínio.',
      2: 'Incorreta: omite I (verdadeira) e inclui III (OWA exige HTTPS 443).',
      3: 'Incorreta: omite II (proxy Front End → Backend) e inclui III (falsa).'
    }
  },
  {
    id: 'sarah-4-69',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito da publicação e segurança do OWA no Microsoft Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'O diretório virtual /owa fica hospedado no Default Web Site do IIS do Mailbox Server sobre HTTPS.',
      'Com Set-CASMailbox -OwaMailboxPolicy, é possível aplicar políticas web distintas para equipes médicas e administrativas.',
      'O acesso ao webmail OWA depende obrigatoriamente de os protocolos POP3 e EdgeSync estarem habilitados no servidor.',
      'Para suspender o acesso ao OWA durante afastamento de um colaborador, pode-se definir Set-CASMailbox -OWAEnabled $false.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.7. OWA. A afirmação C é incorreta porque o OWA funciona via HTTPS/IIS comunicando-se internamente com o backend do Exchange (MAPI/HTTP proxy na porta 444), sem depender dos serviços POP3 nem EdgeSync.',
    correctAnalysis:
      'O webmail OWA não depende de POP3 nem de EdgeSync; ambos podem permanecer desabilitados ou ausentes sem qualquer impacto ao OWA.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): /owa reside no Default Web Site (porta 443) e encaminha ao Exchange Back End (444).',
      1: 'Incorreta (afirmação verdadeira): OwaMailboxPolicy segmenta funcionalidades web por usuário/setor.',
      3: 'Incorreta (afirmação verdadeira): Set-CASMailbox controla individualmente a habilitação do OWA.'
    }
  },
  {
    id: 'sarah-4-70',
    editalItemId: '4.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em estações compartilhadas de um hospital, deseja-se desconectar automaticamente sessões ociosas do OWA após 15 minutos de inatividade dos usuários. Qual configuração organizacional aplica esse limite no Exchange Server?',
    options: [
      'Set-ReceiveConnector -Identity "Default Frontend" -ConnectionInactivityTimeout 00:15:00 -ProtocolLoggingLevel Verbose.',
      'Set-TransportService -Identity EX01 -MessageExpirationTimeout 00:15:00 -DelayNotificationTimeout 00:05:00.',
      'Set-PopSettings -Server EX01 -AuthenticatedConnectionTimeout 00:15:00 -PreAuthenticatedConnectionTimeout 00:02:00.',
      'Set-OrganizationConfig -ActivityBasedAuthenticationTimeoutEnabled $true -ActivityBasedAuthenticationTimeoutInterval 00:15:00.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.7. OWA. O encerramento automático de sessão OWA por inatividade é controlado em nível organizacional por ActivityBasedAuthenticationTimeoutEnabled ($true) e ActivityBasedAuthenticationTimeoutInterval (ex.: 00:15:00) em Set-OrganizationConfig (requerendo reciclagem do MSExchangeOWAAppPool ou iisreset).',
    correctAnalysis:
      'ActivityBasedAuthenticationTimeoutEnabled e ActivityBasedAuthenticationTimeoutInterval no Set-OrganizationConfig definem o timeout global por inatividade de sessão no OWA.',
    optionErrors: {
      0: 'Incorreta: ConnectionInactivityTimeout do Receive Connector controla ociosidade de sessões SMTP, não sessões web do OWA.',
      1: 'Incorreta: MessageExpirationTimeout define prazo de expiração de mensagens em fila SMTP, sem relação com login OWA.',
      2: 'Incorreta: Set-PopSettings ajusta timeouts de clientes POP3, não do Outlook on the Web.'
    }
  },

  // ==================== FASE B - EIXO 4 LOTE 3 (+28: sarah-4-71 a sarah-4-98) ====================
  // --- 4.2.8 (+6 -> total 7) ---
  {
    id: 'sarah-4-71',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No Microsoft Exchange Server, qual endpoint SOAP/HTTPS e qual par de cmdlets administram os serviços EWS (Exchange Web Services) usados para Free/Busy, Out of Office e integrações de agenda?',
    options: [
      'Endpoint /EWS/Exchange.asmx, administrado via Get-WebServicesVirtualDirectory e Set-WebServicesVirtualDirectory.',
      'Endpoint /OWA/Auth/Login.aspx, administrado via Get-OwaVirtualDirectory e Set-OwaVirtualDirectory.',
      'Endpoint /ECP/Default.aspx, administrado via Get-EcpVirtualDirectory e Set-EcpVirtualDirectory.',
      'Endpoint /Microsoft-Server-ActiveSync, administrado via Get-ActiveSyncVirtualDirectory e Set-ActiveSyncVirtualDirectory.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.8. EWS. Os Exchange Web Services respondem no diretório virtual /EWS (endpoint /EWS/Exchange.asmx) sobre HTTPS (TCP 443) e são configurados pelos cmdlets Get-WebServicesVirtualDirectory e Set-WebServicesVirtualDirectory.',
    correctAnalysis:
      'O endpoint SOAP padrão do EWS é /EWS/Exchange.asmx e suas URLs interna/externa e autenticação são gerenciadas por *WebServicesVirtualDirectory.',
    optionErrors: {
      1: 'Incorreta: /OWA atende exclusivamente o cliente web Outlook on the Web para acesso via navegador.',
      2: 'Incorreta: /ECP hospeda o Exchange Admin Center (painel administrativo) e opções da conta web.',
      3: 'Incorreta: /Microsoft-Server-ActiveSync atende sincronização móvel EAS (Exchange ActiveSync), não requisições SOAP EWS.'
    }
  },
  {
    id: 'sarah-4-72',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Quando um cliente Outlook ingressado no domínio Active Directory interno inicia a descoberta automática de endpoints (Autodiscover) para localizar o EWS, qual é o primeiro mecanismo consultado antes das URLs HTTPS ou registros DNS SRV?',
    options: [
      'Registro DNS TXT no subdomínio _dmarc do domínio corporativo primário.',
      'Registro DNS MX de menor preferência publicado na zona externa da internet.',
      'Redirecionamento HTTP na porta 80 para autodiscover.<domínio>.',
      'Objeto Service Connection Point (SCP) consultado via LDAP no Active Directory.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.8. EWS. Clientes ingressados no domínio AD consultam primeiramente o Service Connection Point (SCP) no Active Directory (configurado via Set-ClientAccessService -AutoDiscoverServiceInternalUri); clientes externos fora do domínio partem para consultas HTTPS e fallback DNS SRV (_autodiscover._tcp).',
    correctAnalysis:
      'O primeiro passo do Autodiscover em máquinas ingressadas no domínio é consultar o SCP no Active Directory antes de recorrer a HTTPS/DNS.',
    optionErrors: {
      0: 'Incorreta: registros _dmarc definem política de autenticação de e-mail DMARC, sem relação com Autodiscover.',
      1: 'Incorreta: registros MX localizam servidores SMTP de entrada de correio, não endpoints HTTPS de Autodiscover/EWS.',
      2: 'Incorreta: o redirecionamento HTTP/DNS ocorre apenas em clientes externos ou quando a consulta ao SCP no AD não está disponível.'
    }
  },
  {
    id: 'sarah-4-73',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre permissões e controle de acesso aos Exchange Web Services (EWS), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Definir EwsEnabled $false em Set-CASMailbox desativa automaticamente também o acesso ao OWA e ao ActiveSync daquela caixa postal.\n( ) A função RBAC ApplicationImpersonation é atribuída por padrão a todos os usuários autenticados do domínio na instalação do Exchange.\n( ) Os parâmetros EwsApplicationAccessPolicy, EwsAllowList e EwsBlockList restringem por User-Agent quais aplicações podem consumir o EWS.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – F – V.',
      'F – V – V.',
      'F – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.8. EWS. (1) falsa: Set-CASMailbox -EwsEnabled $false bloqueia apenas EWS na caixa, mantendo OWA e ActiveSync independentes; (2) falsa: ApplicationImpersonation é uma role RBAC sensível que não vem atribuída a usuários comuns e exige concessão explícita (New-ManagementRoleAssignment); (3) verdadeira: EwsApplicationAccessPolicy permite listas de permissão/bloqueio por User-Agent.',
    correctAnalysis:
      'Gabarito: F – F – V. Apenas (3) é verdadeira quanto ao controle por User-Agent em EwsAllowList/EwsBlockList; (1) e (2) erram ao generalizar o bloqueio do CASMailbox e a atribuição padrão de ApplicationImpersonation.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois EwsEnabled controla exclusivamente o protocolo EWS da caixa postal.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois ApplicationImpersonation requer atribuição administrativa explícita via RBAC.',
      3: 'Incorreta: a afirmativa (3) é verdadeira, descrevendo o filtro nativo de aplicações clientes no EWS.'
    }
  },
  {
    id: 'sarah-4-74',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre configuração, limitação (throttling) e URLs de EWS e Autodiscover no Exchange Server, considere as afirmativas:\n\nI. Políticas de throttling (New-ThrottlingPolicy com EwsMaxConcurrency) limitam requisições simultâneas para evitar sobrecarga por integrações EWS.\nII. O diretório virtual /EWS utiliza InternalUrl e ExternalUrl em Set-WebServicesVirtualDirectory para suportar cenários split-DNS internos e externos.\nIII. As chamadas SOAP do EWS dependem da abertura da porta TCP 25 nos firewalls externos para consultar calendários Free/Busy.\nIV. Ajustar AutoDiscoverServiceInternalUri em Set-ClientAccessService corrige apontamentos internos do SCP para o FQDN válido no certificado.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.8. EWS. I, II e IV descrevem corretamente Throttling Policies, InternalUrl/ExternalUrl do EWS e AutoDiscoverServiceInternalUri; III é falsa porque o EWS trafega sobre HTTPS na porta TCP 443, nunca na porta SMTP 25.',
    correctAnalysis:
      'I, II e IV estão corretas; III é falsa ao exigir porta TCP 25 para consultas SOAP EWS, que operam em HTTPS (TCP 443).',
    optionErrors: {
      1: 'Incorreta: omite IV, pois Set-ClientAccessService -AutoDiscoverServiceInternalUri é o ajuste padrão do SCP interno.',
      2: 'Incorreta: inclui III (EWS opera sobre HTTPS 443, não porta 25) e omite IV.',
      3: 'Incorreta: omite I (verdadeira) e inclui III (falsa).'
    }
  },
  {
    id: 'sarah-4-75',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre autenticação, descoberta e diagnóstico de EWS e Autodiscover no Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'O cmdlet Test-OutlookWebServices valida de ponta a ponta o funcionamento de Autodiscover, EWS, OAB e disponibilidade.',
      'Quando o registro A autodiscover.<domínio> não está acessível externamente, um registro SRV _autodiscover._tcp na porta 443 serve de fallback.',
      'O diretório virtual /EWS exige FormsAuthentication (FBA) habilitada no IIS para processar chamadas SOAP programáticas de clientes.',
      'Falhas específicas nos serviços web EWS podem exigir inspeção ou reciclagem do pool de aplicação MSExchangeServicesAppPool no IIS.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.8. EWS. A opção C é incorreta porque o diretório virtual /EWS utiliza WindowsAuthentication (NTLM/Negotiate), Basic ou OAuth — a autenticação por formulários (FBA) destina-se ao navegador no /owa e quebra chamadas SOAP automatizadas em /EWS.',
    correctAnalysis:
      'Habilitar FormsAuthentication no /EWS impede que clientes e aplicações consumam o endpoint SOAP; o correto é Windows/NTLM, Basic (sobre TLS) ou OAuth.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Test-OutlookWebServices diagnostica Autodiscover, EWS, Availability e OAB.',
      1: 'Incorreta (afirmação verdadeira): o registro DNS SRV _autodiscover._tcp.<domínio> apontando para a porta 443 é o fallback padrão do Autodiscover.',
      3: 'Incorreta (afirmação verdadeira): MSExchangeServicesAppPool hospeda a aplicação EWS no IIS.'
    }
  },
  {
    id: 'sarah-4-76',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os cmdlets do Exchange Management Shell às suas respectivas funções no ecossistema EWS e Autodiscover.\n\nColuna da Esquerda:\n(I) Set-ClientAccessService\n(II) Set-WebServicesVirtualDirectory\n(III) Set-OabVirtualDirectory\n(IV) Set-ThrottlingPolicy\n\nColuna da Direita:\n(A) Define InternalUrl, ExternalUrl e métodos de autenticação do endpoint /EWS.\n(B) Ajusta limites de concorrência como EwsMaxConcurrency para evitar saturação por integrações.\n(C) Configura o parâmetro AutoDiscoverServiceInternalUri do SCP no Active Directory.\n(D) Configura URLs web de distribuição do Offline Address Book baixado pelos clientes Outlook.\n\nAssinale a alternativa correta.',
    options: [
      'I-A, II-C, III-D, IV-B.',
      'I-C, II-A, III-B, IV-D.',
      'I-D, II-A, III-C, IV-B.',
      'I-C, II-A, III-D, IV-B.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.8. EWS. Set-ClientAccessService (C) ajusta o SCP (AutoDiscoverServiceInternalUri); Set-WebServicesVirtualDirectory (A) configura /EWS; Set-OabVirtualDirectory (D) gerencia a distribuição web da OAB; e Set-ThrottlingPolicy (B) define limites de carga EWS.',
    correctAnalysis:
      'A correspondência correta é I-C, II-A, III-D e IV-B.',
    optionErrors: {
      0: 'Incorreta: inverte Set-ClientAccessService (I) com Set-WebServicesVirtualDirectory (II).',
      1: 'Incorreta: inverte Set-OabVirtualDirectory (III) com Set-ThrottlingPolicy (IV).',
      2: 'Incorreta: troca a função de Set-ClientAccessService (I) pela de Set-OabVirtualDirectory (III).'
    }
  },

  // --- 4.2.9 (+6 -> total 7) ---
  {
    id: 'sarah-4-77',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um Database Availability Group (DAG) do Exchange Server, como os dados das caixas postais são sincronizados para cópias passivas e como se separam as redes lógicas do grupo?',
    options: [
      'Por Continuous Replication enviando logs de transação de 1 MB reproduzidos no .EDB passivo, separando rede MAPI de rede Replication.',
      'Por replicação síncrona em nível de bloco iSCSI compartilhado entre nós, utilizando apenas uma placa de rede sem rede MAPI.',
      'Por cópia agendada do arquivo .EDB inteiro a cada hora via Robocopy, exigindo parada do serviço MSExchangeIS.',
      'Por sincronização DFSR do Windows Server replicando apenas a pasta Pickup de transporte entre os membros do DAG.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.9. DAG. A replicação contínua do DAG (Continuous Replication) transmite os arquivos de log de transação fechados (1 MB) da cópia ativa para as cópias passivas e os reproduz nos respectivos .EDB. Boas práticas separam a rede MAPI (acesso cliente/AD) da rede dedicada de Replication.',
    correctAnalysis:
      'O DAG usa Continuous Replication baseada em envio e reprodução de transaction logs (1 MB), com separação recomendada entre rede MAPI e rede de replicação.',
    optionErrors: {
      1: 'Incorreta: bancos do DAG não compartilham o mesmo arquivo .EDB em armazenamento compartilhado iSCSI; cada cópia tem seu próprio .EDB.',
      2: 'Incorreta: a replicação ocorre continuamente por logs de transação em tempo real sem desmontar o banco nem usar Robocopy.',
      3: 'Incorreta: DFSR replica arquivos do SYSVOL/pastas Windows e não participa da replicação contínua de bancos ESE do DAG.'
    }
  },
  {
    id: 'sarah-4-78',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre requisitos e funcionamento do Database Availability Group (DAG) no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Um mesmo DAG pode reunir membros executando Windows Server 2016 e Windows Server 2019, desde que todos tenham a mesma versão do Exchange.\n( ) O Primary Active Manager (PAM) executa no nó proprietário do Cluster Core Group e coordena qual cópia de banco assume em um failover.\n( ) Um DAG composto por três servidores Mailbox (número ímpar) exige obrigatoriamente um Witness Server para alcançar maioria de quórum.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – F.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.9. DAG. (1) falsa: todos os membros de um DAG devem executar exatamente a mesma versão do sistema operacional Windows Server, pois o DAG apoia-se em um Windows Server Failover Cluster único e não suporta sistemas operacionais mistos em produção; (2) verdadeira: o PAM coordena ativações e monitora saúde via cluster; (3) falsa: com 3 nós (ímpar), 2 votos já formam maioria sem Witness Server.',
    correctAnalysis:
      'Gabarito: F – V – F. (1) é falsa porque todos os nós do DAG exigem a mesma versão do Windows Server; (2) é verdadeira sobre o papel do PAM; (3) é falsa porque número ímpar de membros já tem maioria natural de votos.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois todos os membros de um mesmo DAG devem executar a mesma versão do Windows Server.',
      1: 'Incorreta: a afirmativa (2) é verdadeira, descrevendo exatamente a função decisória do Primary Active Manager (PAM).',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o Witness Server é utilizado para desempate em DAGs com número par de membros.'
    }
  },
  {
    id: 'sarah-4-79',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre monitoramento de cópias, Lagged Copies e arquitetura de DAG no Exchange Server, analise as afirmativas:\n\nI. O cmdlet Get-MailboxDatabaseCopyStatus informa o estado de cada cópia (Mounted, Healthy, FailedAndSuspended), CopyQueueLength e ReplayQueueLength.\nII. Uma cópia Lagged Copy (ReplayLagTime maior que zero) atrasa a aplicação dos logs no .EDB passivo, protegendo contra corrupção lógica.\nIII. A propriedade ActivationPreference igual a 1 marca a cópia menos prioritária, usada somente depois de todas as demais falharem.\nIV. Desde o Exchange 2013 SP1/2016/2019, todo DAG exige obrigatoriamente um endereço IP administrativo dedicado no cluster.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e III estão corretas.',
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.9. DAG. I e II estão corretas quanto a Get-MailboxDatabaseCopyStatus e Lagged Copy; III é falsa porque ActivationPreference=1 indica a cópia MAIS preferencial na ordem de ativação; IV é falsa porque DAGs modernos suportam modo sem IP administrativo (IP-less DAG: Without Administrative Access Point).',
    correctAnalysis:
      'Apenas I e II são verdadeiras; ActivationPreference=1 é a maior prioridade (não a menor) e DAGs modernos dispensam IP administrativo obrigatório.',
    optionErrors: {
      0: 'Incorreta: omite II (verdadeira) e inclui III (ActivationPreference 1 é a maior preferência, não a menor).',
      2: 'Incorreta: inclui III (falsa quanto à prioridade de ActivationPreference).',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (DAGs sem ponto de acesso administrativo dispensam IP de cluster).'
    }
  },
  {
    id: 'sarah-4-80',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito do Witness Server, permissões e recuperação de cópias em um DAG do Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'O File Share Witness deve ser hospedado preferencialmente dentro de um dos servidores membros do DAG para eliminar saltos de rede.',
      'O grupo Exchange Trusted Subsystem precisa estar no grupo local Administrators do Witness Server para gerenciar o compartilhamento.',
      'O cmdlet Update-MailboxDatabaseCopy -DeleteExistingFiles realiza o re-seeding integral de uma cópia passiva a partir da cópia ativa.',
      'O parâmetro DatacenterActivationMode DagOnly previne split-brain em failover entre sites exigindo controle de inicialização dos nós.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.9. DAG. A opção A é incorreta e violação grave de arquitetura: o Witness Server NÃO deve ser membro do próprio DAG (idealmente fica em outro servidor membro do domínio, como um file server em local neutro), pois hospedá-lo dentro de um nó do DAG compromete o quórum caso esse nó caia.',
    correctAnalysis:
      'O File Share Witness nunca deve residir em um servidor membro do DAG; ele atua como árbitro externo ao grupo para desempatar partições de rede.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): a inclusão de Exchange Trusted Subsystem em Administrators do Witness permite ao Exchange criar/gerenciar o share.',
      2: 'Incorreta (afirmação verdadeira): Update-MailboxDatabaseCopy -DeleteExistingFiles recria cópia passiva corrompida ou divergente.',
      3: 'Incorreta (afirmação verdadeira): DatacenterActivationMode DagOnly evita split-brain na recuperação de queda de datacenter.'
    }
  },
  {
    id: 'sarah-4-81',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após falha prolongada de disco no servidor passivo EX02, o banco permanece montado e operacional em EX01, mas Get-MailboxDatabaseCopyStatus DB01\\EX02 reporta Status FailedAndSuspended por divergência irreversível de logs. Qual comando corrige a cópia passiva sem interromper EX01?',
    options: [
      'Dismount-Database -Identity DB01 em EX01 e apagar os arquivos .log do volume ativo.',
      'Set-DatabaseAvailabilityGroup -WitnessServer EX01 para forçar a votação do cluster.',
      'Update-MailboxDatabaseCopy -Identity DB01\\EX02 -DeleteExistingFiles para executar re-seeding.',
      'Remove-DatabaseAvailabilityGroupServer -Identity EX02 removendo o nó em definitivo.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.9. DAG. Quando uma cópia passiva entra em FailedAndSuspended por logs ausentes ou divergentes, a recuperação limpa consiste em re-semear a cópia passiva a partir da cópia ativa usando Update-MailboxDatabaseCopy -Identity DB01\\EX02 -DeleteExistingFiles (mantendo DB01 online em EX01).',
    correctAnalysis:
      'Update-MailboxDatabaseCopy com -DeleteExistingFiles limpa os arquivos inconsistentes de EX02 e copia o banco e logs válidos a partir de EX01 sem parada de produção.',
    optionErrors: {
      0: 'Incorreta: desmontar o banco ativo em EX01 e apagar logs causa indisponibilidade e risco de perda de dados em produção.',
      1: 'Incorreta: colocar o Witness Server em um membro do DAG (EX01) quebra boas práticas e não corrige divergência de logs ESE.',
      3: 'Incorreta: remover o servidor do DAG elimina a redundância do nó sem reparar a cópia passiva do banco.'
    }
  },
  {
    id: 'sarah-4-82',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre operação de um DAG no Exchange Management Shell:\n\nPara realizar um switchover planejado movendo um banco ativo para outro membro, executa-se _____; para impedir que uma cópia passiva seja ativada durante manutenção mantendo a replicação de logs ativa, usa-se Suspend-MailboxDatabaseCopy com _____; e para verificar a saúde geral de quórum e serviços de replicação do nó, utiliza-se _____.',
    options: [
      'Set-MailboxDatabase / -CatalogOnly / Get-MailboxDatabaseCopyStatus',
      'Dismount-Database / -ReplayOnly / Test-MapiConnectivity',
      'Update-MailboxDatabaseCopy / -DeleteExistingFiles / eseutil /mh',
      'Move-ActiveMailboxDatabase / -ActivationOnly / Test-ReplicationHealth'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.9. DAG. Move-ActiveMailboxDatabase realiza switchover controlado da cópia ativa; Suspend-MailboxDatabaseCopy -ActivationOnly bloqueia apenas ativação (preservando envio/replay de logs); e Test-ReplicationHealth testa serviços de cluster, quórum e replicação do nó.',
    correctAnalysis:
      'Os cmdlets corretos são Move-ActiveMailboxDatabase, -ActivationOnly e Test-ReplicationHealth.',
    optionErrors: {
      0: 'Incorreta: Set-MailboxDatabase altera propriedades do banco, -CatalogOnly é parâmetro de Update-MailboxDatabaseCopy e Get-MailboxDatabaseCopyStatus lista apenas cópias sem auditar quórum.',
      1: 'Incorreta: Dismount-Database apenas desmonta o banco atual, -ReplayOnly não existe em Suspend-MailboxDatabaseCopy e Test-MapiConnectivity testa logon MAPI.',
      2: 'Incorreta: Update-MailboxDatabaseCopy realiza re-seeding de cópia passiva e eseutil /mh analisa cabeçalho offline do .EDB.'
    }
  },

  // --- 4.2.10 (+5 -> total 7) ---
  {
    id: 'sarah-4-83',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um diretório de banco de dados do Exchange Server, quais são as respectivas funções do arquivo de checkpoint (E00.chk) e dos arquivos de reserva (E00res00001.jrs a E00res00010.jrs)?',
    options: [
      'E00.chk registra até qual log já foi gravado no .EDB; os .jrs reservam 10 MB emergenciais para desmontagem limpa se o disco encher.',
      'E00.chk lista os logs que ainda aguardam replicação para as cópias passivas do DAG; os .jrs são logs já gravados aguardando truncamento pelo backup.',
      'E00.chk registra o último ponto de backup VSS completo do banco; os .jrs reservam espaço em disco para a montagem de uma Recovery Database.',
      'E00.chk aponta o log de transação em uso no momento (E00.log); os .jrs guardam cópias dos 10 últimos logs para uso no Soft Recovery.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.10. databases. O arquivo checkpoint (Exx.chk) indica ao motor ESE quais logs de transação já foram gravados no arquivo .EDB, acelerando a recuperação após falhas. Já os 10 arquivos .jrs (1 MB cada, total 10 MB) reservam espaço para garantir que o banco possa gravar transações pendentes e desmontar limpo caso o disco atinja 100%.',
    correctAnalysis:
      'E00.chk marca o progresso de commit dos logs para o .EDB e os arquivos .jrs garantem 10 MB de espaço de reserva para desmontagem segura em disco cheio.',
    optionErrors: {
      1: 'Incorreta: a fila de replicação do DAG não é controlada pelo E00.chk (ele aponta apenas os logs já gravados no .EDB local), e os .jrs não são logs com transações reais aguardando truncamento, mas arquivos de reserva de espaço.',
      2: 'Incorreta: o E00.chk controla o checkpoint contínuo de escrita de logs no .EDB (não apenas o último backup VSS), e os .jrs protegem o banco montado contra esgotamento súbito do volume de logs, sem relação com Recovery Database.',
      3: 'Incorreta: o log ativo atual é sempre E00.log (o .chk marca até onde já houve commit no .EDB), e os .jrs não guardam histórico dos 10 últimos logs para Soft Recovery — são apenas espaço pré-alocado vazio de emergência.'
    }
  },
  {
    id: 'sarah-4-84',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Quando um arquivo .EDB está em estado "Dirty Shutdown" e os arquivos de log de transação necessários foram perdidos permanentemente (impedindo Soft Recovery com eseutil /r), qual procedimento de último recurso repara o banco para remontagem e qual etapa deve segui-lo?',
    options: [
      'Executar eseutil /mh para limpar o cabeçalho automaticamente e manter o banco definitivo em produção sem mover caixas.',
      'Executar Hard Repair (eseutil /p) aceitando descarte de páginas irrecuperáveis e depois mover as caixas para um novo banco limpo.',
      'Ativar Circular Logging no banco desmontado para que o Exchange recrie sozinho todos os logs ausentes antes da montagem.',
      'Renomear o arquivo E00.chk para E00.edb e executar Mount-Database com a opção -Force sobre o diretório existente.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.10. databases. Sem os logs necessários para eseutil /r (Soft Recovery), resta executar eseutil /p (Hard Repair), que descarta páginas corrompidas/inconsistentes para levar o .EDB a Clean Shutdown. Por poder deixar inconsistências lógicas residuais, a recomendação oficial após eseutil /p é desfragmentar/reparar ou migrar todas as caixas para um novo banco saudável e aposentar o banco reparado.',
    correctAnalysis:
      'Sem os logs exigidos pelo Soft Recovery, aplica-se eseutil /p (Hard Repair) para tornar o banco montável e, em seguida, migram-se as caixas para um banco recém-criado.',
    optionErrors: {
      0: 'Incorreta: eseutil /mh é comando somente leitura que apenas exibe metadados e estado do cabeçalho do .EDB.',
      2: 'Incorreta: Circular Logging nunca reconstrói logs perdidos nem corrige estado Dirty Shutdown sem os logs pendentes.',
      3: 'Incorreta: o arquivo .chk tem apenas kilobytes de ponteiro de checkpoint e não contém os dados das caixas do .EDB.'
    }
  },
  {
    id: 'sarah-4-85',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre manutenção, retenção e comportamento físico dos bancos de dados (.EDB) no Exchange Server, considere as afirmativas:\n\nI. O cmdlet New-MailboxRepairRequest detecta e corrige corrupções lógicas de caixas e pastas online, sem desmontar o banco .EDB.\nII. As propriedades DeletedItemRetention e MailboxRetention definem prazos de retenção lógica no banco antes da remoção definitiva.\nIII. A exclusão ou movimentação de caixas gera espaço livre interno (white space) no .EDB, reutilizado sem encolher o arquivo no disco.\nIV. O parâmetro RetainDeletedItemsUntilBackup impede a purga definitiva de itens excluídos antes da conclusão de um backup via VSS.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'I, II, III e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.10. databases. Todas as quatro afirmativas são verdadeiras: New-MailboxRepairRequest opera online; DeletedItemRetention (14d padrão) e MailboxRetention (30d padrão) mantêm dados recuperáveis; white space permanece dentro do .EDB até ser reutilizado ou tratado por novo DB/defrag; e RetainDeletedItemsUntilBackup aguarda um backup VSS antes da purga.',
    correctAnalysis:
      'I, II, III e IV descrevem com precisão reparo lógico online, políticas de retenção do banco, white space ESE e RetainDeletedItemsUntilBackup.',
    optionErrors: {
      0: 'Incorreta: omite III e IV, que também descrevem comportamentos reais e documentados dos bancos Exchange.',
      1: 'Incorreta: omite IV, pois RetainDeletedItemsUntilBackup assegura que um backup ocorra antes da limpeza permanente.',
      2: 'Incorreta: omite I, pois New-MailboxRepairRequest é justamente a ferramenta online de reparo lógico no Exchange.'
    }
  },
  {
    id: 'sarah-4-86',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre arquivos de log, Recovery Database e monitoramento de bancos .EDB no Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'Get-MailboxDatabase -Status exibe o tamanho físico do arquivo .EDB e o white space disponível em AvailableNewMailboxSpace.',
      'Uma Recovery Database (New-MailboxDatabase -Recovery) permite acesso normal dos usuários via OWA para envio e recebimento de e-mails.',
      'Cada arquivo de log de transação do banco ESE possui tamanho fixo de 1 MB (1.024 KB) com numeração hexadecimal sequencial.',
      'Sem backups VSS periódicos e com Circular Logging desligado, o acúmulo de logs pode lotar o disco e desmontar o banco.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.10. databases. A opção B é incorreta porque uma Recovery Database (RDB) é um banco especial usado exclusivamente para montar uma cópia restaurada e extrair itens/caixas via New-MailboxRestoreRequest; usuários nunca conseguem se conectar a uma RDB via OWA ou Outlook para enviar/receber mensagens.',
    correctAnalysis:
      'A Recovery Database serve apenas como origem de extração/restauração de dados via New-MailboxRestoreRequest, não permitindo logon ativo de clientes.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): AvailableNewMailboxSpace em Get-MailboxDatabase -Status revela o white space reaproveitável.',
      2: 'Incorreta (afirmação verdadeira): logs de transação Exchange têm tamanho fixo de 1 MB (diferente dos 5 MB do Exchange 2003 legado).',
      3: 'Incorreta (afirmação verdadeira): sem truncamento por backup ou Circular Logging, os logs crescem até esgotar o volume.'
    }
  },
  {
    id: 'sarah-4-87',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os parâmetros da ferramenta eseutil às suas respectivas operações sobre bancos de dados do Exchange Server.\n\nColuna da Esquerda:\n(I) eseutil /mh\n(II) eseutil /ml\n(III) eseutil /r\n(IV) eseutil /p\n\nColuna da Direita:\n(A) Executa Soft Recovery aplicando logs de transação pendentes para atingir Clean Shutdown.\n(B) Verifica a integridade física e a sequência de uma cadeia de arquivos de log (.log).\n(C) Exibe metadados do cabeçalho do .EDB, indicando se está Clean Shutdown ou Dirty Shutdown.\n(D) Executa Hard Repair descartando páginas irrecuperáveis em cenários sem logs íntegros.\n\nAssinale a alternativa correta.',
    options: [
      'I-C, II-B, III-A, IV-D.',
      'I-B, II-C, III-A, IV-D.',
      'I-C, II-A, III-B, IV-D.',
      'I-C, II-B, III-D, IV-A.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.10. databases. /mh (C) lê o cabeçalho do banco; /ml (B) valida integridade de logs; /r (A) executa Soft Recovery com logs presentes; e /p (D) executa Hard Repair destrutivo quando faltam logs.',
    correctAnalysis:
      'A sequência correta é I-C (/mh), II-B (/ml), III-A (/r) e IV-D (/p).',
    optionErrors: {
      1: 'Incorreta: inverte /mh (cabeçalho do EDB) com /ml (verificação de logs).',
      2: 'Incorreta: inverte /ml (validação de logs) com /r (Soft Recovery).',
      3: 'Incorreta: inverte /r (Soft Recovery) com /p (Hard Repair).'
    }
  },

  // --- 4.2.11 (+5 -> total 7) ---
  {
    id: 'sarah-4-88',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Para gerar um novo pedido de assinatura de certificado (CSR) no Exchange Server aproveitando os nomes SAN de um certificado prestes a vencer, qual cmdlet e parâmetro devem ser executados no Exchange Management Shell?',
    options: [
      'New-ExchangeCertificate com o parâmetro -GenerateRequest (clonando o certificado existente ou informando DomainName).',
      'Enable-ExchangeCertificate com o parâmetro -ForceRenewal apontando para o diretório virtual /owa.',
      'Get-ExchangeCertificate com o parâmetro -ExportCSR gravando diretamente no servidor IIS remoto.',
      'Set-AuthConfig com o parâmetro -CreatePublicCSR gerando automaticamente o arquivo .pfx final.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.11. certificados. O cmdlet New-ExchangeCertificate -GenerateRequest gera o pedido CSR em PKCS#10/Base64 (inclusive com -CloneCert ou -SubjectName/-DomainName) para envio à Autoridade Certificadora; depois de emitido, importa-se com Import-ExchangeCertificate e vincula-se com Enable-ExchangeCertificate.',
    correctAnalysis:
      'New-ExchangeCertificate -GenerateRequest é o cmdlet oficial do EMS para criar solicitações de assinatura (CSR) de certificados SAN no Exchange.',
    optionErrors: {
      1: 'Incorreta: Enable-ExchangeCertificate apenas associa um certificado já instalado a serviços como IIS e SMTP, não gera CSR.',
      2: 'Incorreta: Get-ExchangeCertificate é apenas de leitura/consulta e não possui parâmetro -ExportCSR.',
      3: 'Incorreta: Set-AuthConfig gerencia o certificado interno de autenticação OAuth (ExchangeAuthCertificate), não CSR público.'
    }
  },
  {
    id: 'sarah-4-89',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os certificados usados pelos sites IIS e pela replicação interna do Exchange Server, analise as afirmativas:\n\nI. O certificado vinculado ao Default Web Site (porta 443) deve incluir apenas o nome NetBIOS interno do servidor, dispensando FQDNs públicos no SAN.\nII. O site Exchange Back End (porta 444) utiliza o certificado interno autoassinado "Microsoft Exchange" para o proxy HTTPS entre Front End e Back End.\nIII. Se o certificado interno de autenticação OAuth (AuthCertificate) expirar, o acesso a OWA/EAC e integrações podem falhar até sua renovação via Set-AuthConfig.\nIV. Em um DAG, o certificado SAN renovado deve ser importado como arquivo .pfx com chave privada em cada membro antes de executar Enable-ExchangeCertificate.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.11. certificados. II, III e IV descrevem corretamente o certificado do Exchange Back End (444), o impacto do AuthCertificate (OAuth) e a distribuição via .pfx nos nós do DAG; I é falsa porque nomes NetBIOS/internos não confiáveis causam alertas TLS e CAs públicas nem sequer emitem nomes internos, exigindo FQDNs externos válidos no SAN.',
    correctAnalysis:
      'Estão corretas II, III e IV; I erra ao restringir o certificado IIS ao nome NetBIOS interno sem os FQDNs públicos usados por OWA, EWS e Autodiscover.',
    optionErrors: {
      0: 'Incorreta: inclui I (NetBIOS interno sem FQDNs públicos quebra acesso externo/clientes) e omite III e IV.',
      2: 'Incorreta: inclui I (falsa) e omite II (Exchange Back End 444 usa o certificado interno Microsoft Exchange).',
      3: 'Incorreta: omite III, pois a expiração do Exchange Server Auth Certificate impacta OWA/EAC e tokens internos.'
    }
  },
  {
    id: 'sarah-4-90',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre boas práticas e impacto da vinculação de certificados no Exchange Server, assinale a afirmação INCORRETA.',
    options: [
      'Get-ExchangeCertificate lista Thumbprint, data de expiração (NotAfter), Services vinculados e domínios presentes no SAN.',
      'Na renovação do certificado SMTP, deve-se habilitar o novo certificado antes de remover o antigo para evitar falha no transporte.',
      'Enable-ExchangeCertificate -Services IIS altera apenas o painel interno do Windows, sem efeito sobre OWA, ECP, EWS ou Autodiscover.',
      'Em Send Connectors com validação TLS estrita, o FQDN configurado no conector deve constar no certificado habilitado para o serviço SMTP.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.11. certificados. A opção C é incorreta porque vincular um certificado ao serviço IIS via Enable-ExchangeCertificate -Services IIS atualiza imediatamente o binding HTTPS da porta 443 no Default Web Site, que atende OWA, ECP, EWS, ActiveSync, MAPI/HTTP e Autodiscover.',
    correctAnalysis:
      'O vínculo ao serviço IIS governa exatamente o certificado HTTPS servido por OWA, ECP, EWS, MAPI over HTTP e Autodiscover na porta 443.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Get-ExchangeCertificate exibe Thumbprint, Services, NotAfter e CertificateDomains.',
      1: 'Incorreta (afirmação verdadeira): remover o certificado SMTP ativo antes de habilitar o substituto interrompe TLS e gera erros no transporte.',
      3: 'Incorreta (afirmação verdadeira): a seleção automática do certificado SMTP verifica correspondência com o FQDN do conector.'
    }
  },
  {
    id: 'sarah-4-91',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após renovar o certificado SAN importando-o apenas pelo Gerenciador do IIS do Windows, o OWA passou a exibir cadeado válido nos navegadores, mas o transporte SMTP registrou Event ID 12014 (sem certificado TLS válido para o FQDN SMTP). O que faltou executar?',
    options: [
      'Atribuir também o serviço SMTP ao certificado renovado usando Enable-ExchangeCertificate -Thumbprint <hash> -Services IIS,SMTP.',
      'Trocar o certificado do site Exchange Back End na porta 444 pelo mesmo certificado público recebido da CA.',
      'Executar Install-AntiSpamAgents.ps1 para recriar as chaves privadas dos Receive Connectors na porta 25.',
      'Alterar o AuthMechanism de todos os Send Connectors para AnonymousUsers sem criptografia STARTTLS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 4.2.11. certificados. Importar e vincular um certificado apenas na interface do IIS Manager configura somente o binding HTTP/443 do IIS, não associando o certificado ao serviço SMTP do Exchange (Event ID 12014). É indispensável rodar Enable-ExchangeCertificate -Thumbprint <hash> -Services IIS,SMTP no EMS.',
    correctAnalysis:
      'O Gerenciador do IIS não registra o certificado para o serviço SMTP do Exchange; é necessário vinculá-lo explicitamente via Enable-ExchangeCertificate incluindo SMTP.',
    optionErrors: {
      1: 'Incorreta: o site Exchange Back End (444) deve manter seu certificado interno Microsoft Exchange, e isso não corrige o SMTP.',
      2: 'Incorreta: agentes antispam não gerenciam certificados TLS nem chaves privadas de conectores SMTP.',
      3: 'Incorreta: Send Connectors não possuem AnonymousUsers como AuthMechanism e remover TLS compromete a segurança.'
    }
  },
  {
    id: 'sarah-4-92',
    editalItemId: '4.2.11',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Complete as lacunas sobre migração e ativação de certificados no Exchange Management Shell:\n\nPara exportar um certificado com chave privada em formato PKCS#12 (.pfx) para instalar em outro nó do DAG, usa-se _____; após importá-lo nos demais servidores, a ativação nos serviços IIS e SMTP utiliza a impressão digital _____ como parâmetro em _____.',
    options: [
      'Get-ExchangeCertificate / SerialNumber / Set-OwaVirtualDirectory',
      'Export-ExchangeCertificate / Thumbprint / Enable-ExchangeCertificate',
      'New-ExchangeCertificate / SubjectKey / Set-AuthConfig',
      'Update-ExchangeCertificate / FriendlyName / Mount-Database'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.11. certificados. Export-ExchangeCertificate -BinaryEncoded:$true -Password ... gera o arquivo .pfx com chave privada; depois de Import-ExchangeCertificate nos demais nós, Enable-ExchangeCertificate -Thumbprint <hash> -Services IIS,SMTP ativa o certificado.',
    correctAnalysis:
      'A sequência correta de cmdlets e identificador é Export-ExchangeCertificate, Thumbprint e Enable-ExchangeCertificate.',
    optionErrors: {
      0: 'Incorreta: Get-ExchangeCertificate apenas consulta certificados e Set-OwaVirtualDirectory configura URLs/autenticação do OWA.',
      2: 'Incorreta: New-ExchangeCertificate cria CSR ou autoassinado e Set-AuthConfig altera apenas o AuthCertificate OAuth.',
      3: 'Incorreta: não existe Update-ExchangeCertificate no EMS e Mount-Database apenas monta bancos de caixas postais.'
    }
  },

  // --- 4.2.12 (+6 -> total 7) ---
  {
    id: 'sarah-4-93',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Durante uma janela de diagnóstico no Exchange Server, qual cmdlet verifica automaticamente se todos os serviços do Windows exigidos pelas funções instaladas no servidor estão em execução?',
    options: [
      'Get-MessageTrackingLog analisando apenas eventos RECEIVE das últimas 24 horas.',
      'Test-ServiceHealth verificando os serviços essenciais das funções ativas no servidor.',
      'Test-ReplicationHealth inspecionando exclusivamente o estado do File Share Witness.',
      'Get-MailboxDatabaseCopyStatus listando o volume de white space no arquivo .EDB.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.12. troubleshooting. O cmdlet Test-ServiceHealth verifica, para cada função Exchange instalada no servidor (Mailbox Role, Transport, etc.), se todos os serviços Windows requeridos estão com status Running e lista os ausentes/parados.',
    correctAnalysis:
      'Test-ServiceHealth audita rapidamente se todos os serviços Windows necessários para a operação do Exchange estão em execução.',
    optionErrors: {
      0: 'Incorreta: Get-MessageTrackingLog consulta histórico de tráfego de e-mails, não o estado dos serviços do Windows.',
      2: 'Incorreta: Test-ReplicationHealth avalia saúde de replicação e quórum do DAG, não a lista completa de serviços de todas as funções.',
      3: 'Incorreta: Get-MailboxDatabaseCopyStatus verifica status de cópias de banco no DAG (e não mede white space nem serviços globais).'
    }
  },
  {
    id: 'sarah-4-94',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um teste manual com "telnet mail.hospital.org.br 25", após EHLO e MAIL FROM aceitos com código 250, o comando "RCPT TO:<inexistente@hospital.org.br>" retorna "550 5.1.10 RESOLVER.ADR.RecipientNotFound". O que esse resultado diagnostica?',
    options: [
      'Bloqueio da porta TCP 25 por firewall de borda impedindo o estabelecimento do handshake SMTP.',
      'Falha de resolução DNS MX no cliente impedindo localizar o endereço IP do servidor de correio.',
      'Conectividade e conector SMTP funcionais, com rejeição permanente por endereço inexistente no diretório.',
      'Saturação temporária de disco (Back Pressure) exigindo retentativa automática em 4 horas.'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.12. troubleshooting. Como a sessão telnet conectou na porta 25, recebeu o banner e aceitou EHLO/MAIL FROM (250), a conectividade de rede, DNS e conector estão funcionais. O erro 550 5.1.10 (RecipientNotFound) aponta falha permanente de destinatário inexistente no diretório.',
    correctAnalysis:
      'Respostas 250 até MAIL FROM comprovam rede e conector operacionais; o código 550 5.1.10 no RCPT TO isola o problema em endereço de destinatário inexistente.',
    optionErrors: {
      0: 'Incorreta: se houvesse bloqueio na porta 25, o telnet falharia no handshake TCP sem receber banner nem códigos 250/550.',
      1: 'Incorreta: falha de DNS MX impediria o telnet de conectar ao servidor de destino antes de iniciar o diálogo SMTP.',
      3: 'Incorreta: Back Pressure retorna erro transitório 452 4.3.1, enquanto 550 5.1.10 indica erro permanente de destinatário.'
    }
  },
  {
    id: 'sarah-4-95',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre logs e ferramentas de diagnóstico no Exchange Server, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Os logs de protocolo SMTP de um conector só são gravados quando ProtocolLoggingLevel está em Verbose; com o valor padrão None, o diálogo SMTP não é registrado.\n( ) Os logs do IIS em W3SVC1 registram as requisições HTTP de OWA, ECP e EWS, mas não as de Autodiscover, que ficam registradas apenas no log de transporte.\n( ) O script HealthChecker.ps1 coleta versão de CU, configuração e alertas de boas práticas do servidor sem exigir a desmontagem dos bancos.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – V.',
      'V – V – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.12. troubleshooting. (1) verdadeira: o padrão dos conectores é ProtocolLoggingLevel None (sem gravação de diálogo SMTP); apenas com Verbose os logs de protocolo são gerados; (2) falsa: o Autodiscover (/Autodiscover/Autodiscover.xml) também é uma aplicação HTTP hospedada no IIS, tendo suas requisições registradas em W3SVC1 assim como OWA, ECP e EWS; (3) verdadeira: HealthChecker.ps1 executa online sem desmontar bancos nem parar o serviço.',
    correctAnalysis:
      'Gabarito: V – F – V. (1) e (3) estão corretas quanto a ProtocolLoggingLevel Verbose e execução online do HealthChecker.ps1; (2) é falsa porque chamadas ao Autodiscover também são requisições HTTP registradas nos logs W3SVC1 do IIS.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira, pois os logs de protocolo SMTP dos conectores só são gravados com ProtocolLoggingLevel definido como Verbose.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois o Autodiscover também é servido via HTTP/HTTPS pelo IIS e fica registrado nos logs W3SVC1.',
      2: 'Incorreta: a afirmativa (3) é verdadeira, pois o script HealthChecker.ps1 coleta informações de CU, configuração e saúde com os bancos montados em produção.'
    }
  },
  {
    id: 'sarah-4-96',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre ferramentas de diagnóstico de clientes e conectividade SMTP no Exchange Server, considere as afirmativas:\n\nI. A ferramenta "Testar Autoconfiguração de Email" no Outlook exibe o XML retornado com URLs de Autodiscover, EWS e OAB.\nII. O cmdlet Get-MailboxStatistics captura linha a linha os comandos EHLO, STARTTLS e RCPT TO das conexões SMTP externas.\nIII. O cmdlet Test-SmtpConnectivity valida a conectividade TCP/SMTP e a resposta de banner dos Receive Connectors configurados.\nIV. Em testes manuais via telnet na porta 25, o código 250 após RCPT TO indica rejeição permanente da mensagem por DNSBL.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I e III estão corretas.',
      'Somente II e IV estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 4.2.12. troubleshooting. I e III estão corretas quanto ao diagnóstico de Autodiscover no Outlook e Test-SmtpConnectivity; II é falsa porque Get-MailboxStatistics exibe tamanho e contagem de itens das caixas (o diálogo SMTP linha a linha fica no ProtocolLog); IV é falsa porque 250 significa aceitação (rejeição permanente é 5xx).',
    correctAnalysis:
      'Apenas I e III descrevem corretamente as ferramentas de diagnóstico; II confunde Get-MailboxStatistics com ProtocolLog e IV inverte código 250 (sucesso) com 5xx (falha permanente).',
    optionErrors: {
      0: 'Incorreta: inclui II (Get-MailboxStatistics lê métricas de caixa, não logs SMTP) e omite III (verdadeira).',
      2: 'Incorreta: inclui II e IV (ambas falsas) e omite I e III.',
      3: 'Incorreta: inclui IV (código 250 confirma sucesso, nunca rejeição por DNSBL).'
    }
  },
  {
    id: 'sarah-4-97',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre análise forense de cabeçalhos, códigos NDR e testes manuais SMTP em troubleshooting de correio, assinale a afirmação INCORRETA.',
    options: [
      'Códigos estendidos 5.7.1 ou 5.7.54 em um NDR indicam rejeição por política de segurança ou permissão de relay, não cota de caixa.',
      'O cmdlet Test-Mailflow -TargetEmailAddress valida o fluxo real de envio e recebimento de sonda medindo a latência ponta a ponta.',
      'O cabeçalho Authentication-Results inserido por um servidor externo é criptograficamente infalsificável, dispensando leitura dos Received.',
      'Em sessão telnet na porta 25, após o comando DATA, o término da transmissão do corpo é sinalizado por uma linha contendo apenas ".".'
    ],
    correctIndex: 2,
    explanation:
      'Item 4.2.12. troubleshooting. A opção C é incorreta porque remetentes maliciosos podem injetar cabeçalhos Authentication-Results falsos antes de a mensagem chegar ao MTA receptor confiável; por isso, na análise de cabeçalhos, deve-se cruzar a cadeia Received: (de baixo para cima) para identificar qual salto confiável inseriu o veredito.',
    correctAnalysis:
      'Cabeçalhos Authentication-Results pré-existentes podem ser forjados pelo remetente; sempre se deve conferir os cabeçalhos Received para validar a fronteira confiável.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): erros 5.7.x tratam de política/autorização (cota excedida pertence à classe 5.2.2/4.2.2).',
      1: 'Incorreta (afirmação verdadeira): Test-Mailflow mede tempo de entrega e sucesso de fluxo entre caixas/destinos.',
      3: 'Incorreta (afirmação verdadeira): a RFC 5321 encerra o bloco DATA com a sequência CRLF.CRLF (linha com apenas um ponto).'
    }
  },
  {
    id: 'sarah-4-98',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Relacione os cmdlets de diagnóstico do Exchange Management Shell às suas finalidades no troubleshooting operacional.\n\nColuna da Esquerda:\n(I) Test-ServiceHealth\n(II) Test-Mailflow\n(III) Test-MapiConnectivity\n(IV) Get-ServerHealth\n\nColuna da Direita:\n(A) Valida logon MAPI direto em uma caixa postal ou banco de dados específico.\n(B) Consulta o estado dos monitores e sondas do Managed Availability no servidor.\n(C) Verifica se todos os serviços Windows requeridos pelas funções Exchange estão ativos.\n(D) Testa entrega ponta a ponta de mensagem de sonda e mede latência do fluxo.\n\nAssinale a alternativa correta.',
    options: [
      'I-D, II-C, III-A, IV-B.',
      'I-C, II-D, III-B, IV-A.',
      'I-A, II-D, III-C, IV-B.',
      'I-C, II-D, III-A, IV-B.'
    ],
    correctIndex: 3,
    explanation:
      'Item 4.2.12. troubleshooting. Test-ServiceHealth (C) verifica serviços Windows das funções; Test-Mailflow (D) testa fluxo/latência de entrega; Test-MapiConnectivity (A) valida acesso MAPI ao banco/caixa; e Get-ServerHealth (B) exibe o estado dos monitores do Managed Availability.',
    correctAnalysis:
      'A associação correta é I-C, II-D, III-A e IV-B.',
    optionErrors: {
      0: 'Incorreta: inverte Test-ServiceHealth (I) com Test-Mailflow (II).',
      1: 'Incorreta: inverte Test-MapiConnectivity (III) com Get-ServerHealth (IV).',
      2: 'Incorreta: inverte Test-ServiceHealth (I) com Test-MapiConnectivity (III).'
    }
  }
]);



