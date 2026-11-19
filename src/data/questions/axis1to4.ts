import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_1_TO_4: readonly Question[] = Object.freeze([
  // ==================== EIXO 1: 1. Redes. (10 questões) ====================
  {
    id: 'sarah-01',
    editalItemId: '1.1.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante uma análise de captura de pacotes em um enlace corporativo, o analista precisa confirmar a ordem de flags TCP envolvidas no encerramento gracioso e na abertura de uma nova sessão TCP/IP. Qual comportamento descreve corretamente a arquitetura TCP/IP?',
    options: [
      'A abertura ocorre com SYN -> SYN-ACK -> ACK, e o flag RST realiza o encerramento gracioso bilateral preservando o buffer pendente.',
      'A abertura utiliza o handshake de três vias (SYN, SYN-ACK, ACK), enquanto o encerramento gracioso normal emprega sequências FIN/ACK em ambos os sentidos.',
      'O protocolo UDP utiliza o handshake SYN/ACK na camada de Rede para garantir entrega ordenada sem retransmissão.',
      'Na camada de Transporte do modelo OSI, o cabeçalho TCP encapsula diretamente quadros Ethernet sem passar pela camada de Rede.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Modelo OSI e arquitetura TCP/IP. O TCP estabelece conexões via three-way handshake (SYN, SYN-ACK, ACK) e encerra normalmente com FIN/ACK em cada direção.',
    correctAnalysis:
      'O TCP estabelece sessão em três etapas (SYN, SYN-ACK, ACK) e utiliza FIN/ACK em cada sentido para encerramento ordenado sem perda de dados em trânsito.',
    optionErrors: {
      0: 'Incorreta: o flag RST provoca encerramento abrupto (reset imediato) da conexão, e não fechamento gracioso.',
      2: 'Incorreta: UDP não realiza handshake SYN/ACK e atua na camada de Transporte, não na camada de Rede.',
      3: 'Incorreta: segmentos TCP da camada de Transporte são encapsulados em pacotes IP (camada de Rede) antes de virarem quadros Ethernet (Enlace).'
    }
  },
  {
    id: 'sarah-02',
    editalItemId: '1.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para interligar duas sub-redes em um núcleo de roteadores sem desperdício de endereços IPv4, utilizando alocação ponto a ponto conforme boas práticas de VLSM/CIDR (RFC 3021), e configurar simultaneamente um endereço Link-Local IPv6 em uma interface, quais prefixos correspondem corretamente a esses dois requisitos?',
    options: [
      'Sub-rede IPv4 /30 (2 hosts úteis) ou /31 (RFC 3021) e endereço IPv6 na faixa fe80::/10.',
      'Sub-rede IPv4 /32 (2 hosts úteis) e endereço IPv6 na faixa fc00::/7 para Link-Local obrigatório.',
      'Sub-rede IPv4 /29 (2 hosts úteis) e endereço IPv6 na faixa ff00::/8 para Link-Local unicast.',
      'Sub-rede IPv4 /31 (4 hosts úteis) e endereço IPv6 na faixa 2000::/3 para Link-Local não roteável.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2. Endereçamento IPv4/IPv6 e sub-redes. Enlaces ponto a ponto utilizam /30 (2 hosts) ou /31 (RFC 3021); Link-Local IPv6 pertence ao bloco fe80::/10.',
    correctAnalysis:
      'Em IPv4, /30 oferece 2 hosts válidos e /31 (RFC 3021) otimiza enlaces ponto a ponto usando os 2 endereços; em IPv6, endereços Link-Local pertencem ao prefixo fe80::/10.',
    optionErrors: {
      1: 'Incorreta: /32 representa rota de host único (1 endereço), e fc00::/7 corresponde a Unique Local Addresses (ULA), não Link-Local.',
      2: 'Incorreta: /29 fornece 6 hosts úteis (não 2), e ff00::/8 é o bloco reservado para endereçamento Multicast IPv6.',
      3: 'Incorreta: /31 possui apenas 2 endereços no total, e 2000::/3 é o bloco Global Unicast roteável na Internet.'
    }
  },
  {
    id: 'sarah-03',
    editalItemId: '1.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao interligar dois switches de acesso em camada 2 por meio de uma porta trunk IEEE 802.1Q transportando as VLANs 10, 20 e 30 (com VLAN nativa 1), qual comportamento ocorre nos quadros Ethernet enviados por esse enlace?',
    options: [
      'Todos os quadros, inclusive os da VLAN nativa 1, recebem obrigatoriamente uma tag 802.1Q de 4 bytes antes da transmissão.',
      'Quadros das VLANs 10, 20 e 30 recebem uma tag 802.1Q de 4 bytes contendo o VID, enquanto quadros da VLAN nativa trafegam sem tag por padrão.',
      'O cabeçalho 802.1Q substitui o endereço MAC de origem do quadro Ethernet pelo número da VLAN.',
      'Portas trunk 802.1Q operam na camada 3 e exigem um protocolo de roteamento OSPF ativo para encaminhar quadros entre as VLANs 10 e 20.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. trunk (Eixo 1. Redes). O padrão IEEE 802.1Q insere um tag de 4 bytes nos quadros das VLANs marcadas e transmite a VLAN nativa sem tag por padrão.',
    correctAnalysis:
      'No encapsulamento IEEE 802.1Q, cada quadro de VLAN não nativa recebe um campo de 4 bytes (TPID 0x8100 + TCI com PCP, DEI e VID de 12 bits), permanecendo untagged apenas a VLAN nativa.',
    optionErrors: {
      0: 'Incorreta: por padrão, a VLAN nativa é transmitida sem marcação (untagged) na porta trunk 802.1Q.',
      2: 'Incorreta: a tag 802.1Q é inserida após o MAC de origem e não substitui nenhum endereço MAC.',
      3: 'Incorreta: trunk 802.1Q opera na camada 2 (Enlace); OSPF atua na camada 3 e não é exigido para encaminhamento L2 em trunk.'
    }
  },
  {
    id: 'sarah-1-04',
    editalItemId: '1.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma topologia Ethernet redundante com três switches rodando RSTP (IEEE 802.1w), o administrador deseja garantir que o switch core SW1 seja eleito Root Bridge e que portas ligadas a estações finais entrem rapidamente em encaminhamento sem permitir loops caso alguém conecte outro switch indevidamente. Qual configuração atende ao objetivo?',
    options: [
      'Configurar prioridade 61440 no SW1 para vencer a eleição e ativar LACP passive nas portas de usuário.',
      'Configurar menor prioridade STP (ex: 4096) no SW1 e ativar PortFast (Edge Port) combinado com BPDU Guard nas portas de acesso.',
      'Desativar totalmente o STP nas portas de uplink entre os switches mantendo-o apenas nas portas de impressoras.',
      'Configurar prioridade 32768 igual em todos os switches para eleger o SW1 pelo maior endereço MAC.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. STP (Eixo 1. Redes). Menor Bridge ID (menor prioridade) elege a Root Bridge; PortFast acelera convergência em borda e BPDU Guard coloca em err-disable se receber BPDU.',
    correctAnalysis:
      'No STP/RSTP vence o menor Bridge ID (prioridade 4096 < padrão 32768), e PortFast + BPDU Guard garante encaminhamento imediato para estações bloqueando a porta caso receba BPDU de switch não autorizado.',
    optionErrors: {
      0: 'Incorreta: prioridade maior (61440) perde a eleição de Root Bridge, e LACP é agregação de links (não proteção contra loops de switch indevido).',
      2: 'Incorreta: desativar STP nos uplinks redundantes provoca tempestade de broadcast imediata na camada 2.',
      3: 'Incorreta: em empate de prioridade, o desempate favorece o MENOR endereço MAC, não o maior.'
    }
  },
  {
    id: 'sarah-1-05',
    editalItemId: '1.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um analista configurou duas interfaces GigabitEthernet entre dois switches usando LACP (IEEE 802.1AX), mas o Port-Channel não subiu. Ao auditar as interfaces, verificou que ambos os lados estavam em modo Passive e uma porta operava em 100 Mbps enquanto a outra estava em 1 Gbps. Quais duas regras do LACP explicam a falha?',
    options: [
      'LACP exige pelo menos um lado em modo Active para iniciar LACPDUs e todas as portas do grupo devem ter mesma velocidade, duplex e configuração VLAN.',
      'LACP exige ambos os lados em modo Passive e velocidades assimétricas para distribuir fluxos TCP distintos.',
      'LACP exige desativar o protocolo STP no switch inteiro e utilizar cabos crossover em portas SFP+.',
      'LACP opera apenas na camada 3 com roteamento BGP ativo e só agrega portas de switches de fabricantes diferentes.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. LACP (Eixo 1. Redes). Passive+Passive não envia quadros LACPDU para negociar o canal, e membros do bundle precisam ter parâmetros físicos e L2 idênticos.',
    correctAnalysis:
      'Para negociar LACP dinamicamente ao menos um extremo precisa estar em modo Active (Active+Active ou Active+Passive), e todas as interfaces agregadas devem compartilhar mesma velocidade, duplex e modo access/trunk.',
    optionErrors: {
      1: 'Incorreta: Passive+Passive nunca inicia negociação LACPDU, e portas com velocidades diferentes são rejeitadas do bundle.',
      2: 'Incorreta: STP trata o Port-Channel como uma interface lógica única (não deve ser desligado).',
      3: 'Incorreta: LACP é padrão IEEE 802.1AX de camada 2 (Enlace), independente de BGP.'
    }
  },
  {
    id: 'sarah-1-06',
    editalItemId: '1.2.8',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após segmentar uma rede corporativa em múltiplas VLANs roteadas por um switch Layer 3, as estações da VLAN 30 pararam de receber endereço IP do servidor DHCP centralizado na VLAN 10. Qual recurso deve ser habilitado na interface SVI da VLAN 30 e quais portas UDP devem estar liberadas no caminho?',
    options: [
      'Habilitar DHCP Relay (ip helper-address apontando para o servidor DHCP) e liberar UDP 67 (servidor) e UDP 68 (cliente).',
      'Habilitar ARP Proxy na VLAN 10 e liberar TCP 67 e TCP 68 entre o cliente e o roteador.',
      'Configurar uma porta trunk 802.1Q diretamente em cada estação da VLAN 30 para ouvir broadcasts da VLAN 10.',
      'Ativar DHCP Snooping com todas as portas da VLAN 30 marcadas como Trusted sem configurar relay.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. DHCP (Eixo 1. Redes). Broadcasts DHCP Discover não cruzam fronteiras L3; o DHCP Relay converte em unicast para o servidor na porta UDP 67.',
    correctAnalysis:
      'Como roteadores não encaminham broadcasts L2 por padrão, o DHCP Relay (ip helper-address) na SVI da VLAN 30 encapsula o Discover em unicast rumo ao servidor DHCP usando UDP 67/68.',
    optionErrors: {
      1: 'Incorreta: DHCP opera sobre UDP (portas 67 servidor / 68 cliente), não TCP, e Proxy ARP não encaminha mensagens DORA.',
      2: 'Incorreta: estações finais não devem receber trunk com múltiplas VLANs por segurança e isolamento de broadcast.',
      3: 'Incorreta: DHCP Snooping protege contra servidores falsos na L2 e marcar portas de usuário como Trusted enfraquece a segurança sem resolver o roteamento L3.'
    }
  },
  {
    id: 'sarah-1-07',
    editalItemId: '1.2.9',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na administração de zonas DNS corporativas, qual combinação associa corretamente os tipos de registros DNS às suas respectivas funções e protocolos de transporte?',
    options: [
      'AAAA resolve IPv4, PTR resolve nome para IPv6, e transferências de zona AXFR utilizam exclusivamente UDP porta 53.',
      'A resolve nome para IPv4, AAAA resolve para IPv6, PTR faz resolução reversa (IP para nome), e transferências de zona AXFR utilizam TCP porta 53.',
      'CNAME aponta diretamente para um endereço IPv4 evitando uso de registros A, e NS define o servidor de correio SMTP.',
      'SRV identifica servidores de banco apenas via UDP 161, e SOA armazena exclusivamente chaves privadas DKIM.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. DNS (Eixo 1. Redes). A = IPv4, AAAA = IPv6, PTR = reverso, AXFR = TCP 53.',
    correctAnalysis:
      'Registros A e AAAA mapeiam FQDNs para IPv4 e IPv6, PTR realiza resolução reversa IP->nome, consultas padrão usam UDP 53 e transferências de zona (AXFR/IXFR) utilizam TCP 53.',
    optionErrors: {
      0: 'Incorreta: AAAA resolve IPv6 (não IPv4), PTR faz resolução reversa (IP->nome) e AXFR usa TCP 53.',
      2: 'Incorreta: CNAME cria alias para outro nome DNS (nunca para IP direto) e NS indica servidores de nomes autoritativos (correio é MX).',
      3: 'Incorreta: SRV localiza serviços via DNS (UDP/TCP 53) e SOA contém parâmetros de autoridade/serial da zona, não chaves privadas DKIM.'
    }
  },
  {
    id: 'sarah-1-08',
    editalItemId: '1.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma rede WAN corporativa baseada em MPLS (Multiprotocol Label Switching) interligando matriz e filiais, qual afirmação descreve corretamente o papel dos roteadores de borda e núcleo e a posição do rótulo MPLS?',
    options: [
      'O rótulo MPLS de 32 bits é inserido entre o cabeçalho da camada 2 (Enlace) e o cabeçalho da camada 3 (IP); os roteadores de borda (LER) realizam PUSH/POP de rótulos e os do núcleo (LSR) fazem SWAP.',
      'O protocolo MPLS criptografa nativamente todo o payload IP com AES-256 nos roteadores LSR dispensando IPsec.',
      'Os roteadores do núcleo (LSR) consultam obrigatoriamente a tabela BGP completa de todas as VPNs de clientes a cada pacote encaminhado.',
      'O MPLS substitui o protocolo Ethernet na LAN local operando exclusivamente sobre enlaces discados seriais.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.3. Redes locais e de longa distância (LAN, WAN e MPLS). MPLS opera como camada 2.5 com LER na borda (PUSH/POP) e LSR no núcleo (SWAP).',
    correctAnalysis:
      'O cabeçalho shim MPLS (32 bits) situa-se entre L2 e L3; LERs adicionam/removem labels nas bordas enquanto LSRs comutam pacotes no núcleo por label swapping rápido sem inspecionar o IP interno.',
    optionErrors: {
      1: 'Incorreta: MPLS oferece isolamento lógico de rotas (L3VPN/VRF), mas NÃO fornece criptografia nativa dos dados.',
      2: 'Incorreta: justamente para não carregar rotas de clientes no núcleo (BGP-free core), o LSR encaminha apenas pelo label.',
      3: 'Incorreta: MPLS opera sobre múltiplas tecnologias WAN/Metro (inclusive Ethernet) e não substitui a LAN Ethernet.'
    }
  },
  {
    id: 'sarah-1-09',
    editalItemId: '1.2.7',
    format: 'multipla_escolha',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um roteador possui em sua tabela de roteamento as rotas 10.20.0.0/16 via OSPF (AD 110) e 10.20.4.0/24 via rota estática (AD 1) e recebe um pacote destinado a 10.20.4.15. Caso exista também uma rota 10.20.4.0/25 aprendida via eBGP (AD 20), qual rota será selecionada pelo roteador e por qual critério?',
    options: [
      'A rota estática 10.20.4.0/24, porque a menor Distância Administrativa (AD 1) prevalece sempre sobre o comprimento do prefixo.',
      'A rota eBGP 10.20.4.0/25, porque o critério prioritário de encaminhamento IP é o prefixo mais específico (longest prefix match), avaliado antes da Distância Administrativa.',
      'A rota OSPF 10.20.0.0/16, porque IGPs têm precedência automática sobre EGPs na tabela FIB.',
      'O roteador realizará balanceamento ECMP igualmente entre as três rotas porque todas cobrem o IP 10.20.4.15.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.4 e Item 2. routing (Eixo 1. Redes). O encaminhamento IP sempre escolhe primeiro a máscara mais específica (/25 > /24 > /16); AD só desempata prefixos idênticos.',
    correctAnalysis:
      'Na seleção de rota para um pacote, o roteador aplica primeiro o Longest Prefix Match: 10.20.4.0/25 é mais específico que /24 e /16, independentemente de AD.',
    optionErrors: {
      0: 'Incorreta: Distância Administrativa só decide qual protocolo entra na tabela quando há rotas concorrentes para o MESMO prefixo exato.',
      2: 'Incorreta: não existe precedência automática de OSPF sobre BGP que supere um prefixo mais específico.',
      3: 'Incorreta: ECMP só ocorre entre caminhos de igual custo e mesmo prefixo exato.'
    }
  },
  {
    id: 'sarah-1-10',
    editalItemId: '1.2.12',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após ativar um túnel VPN com encapsulamento adicional, usuários conseguem dar ping normalmente em servidores remotos, porém sessões HTTPS e transferências de arquivos travam após o handshake inicial. Ao testar com ping -M do -s 1472 (Linux) ou ping -f -l 1472 (Windows), ocorre perda de pacotes. Qual é a causa e a correção técnica?',
    options: [
      'Exaustão de portas efêmeras UDP no cliente; corrigir aumentando o TTL do DNS.',
      'Problema de MTU / Path MTU Discovery bloqueado (black hole de ICMP Fragmentation Needed); corrigir ajustando MTU do túnel ou aplicando TCP MSS Clamping (ex: 1360-1400 bytes).',
      'Loop de camada 2 no STP da matriz; corrigir mudando todas as portas para trunk.',
      'Falha de resolução reversa PTR no servidor web; corrigir criando registro CNAME.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. troubleshooting (Eixo 1. Redes). Pings pequenos passam, mas pacotes grandes com flag DF (Don\'t Fragment) são descartados silenciosamente se o túnel reduzir a MTU e ICMP Type 3 Code 4 for filtrado.',
    correctAnalysis:
      'O overhead do túnel reduz a MTU efetiva; quando pacotes grandes com flag DF (ping -f/-M do) não cabem e o ICMP Fragmentation Needed é bloqueado, ajusta-se a MTU ou aplica-se TCP MSS Clamping na interface.',
    optionErrors: {
      0: 'Incorreta: HTTPS usa TCP e falha apenas em payloads grandes (após handshake), sem relação com TTL de registros DNS.',
      2: 'Incorreta: loop STP causaria queda generalizada na LAN, não apenas falha em pacotes grandes dentro do túnel.',
      3: 'Incorreta: registro PTR não interfere no tamanho máximo de quadro/pacote transmitido após o handshake TCP.'
    }
  },

  // ==================== EIXO 2: 2. Segurança de rede. (10 questões) ====================
  {
    id: 'sarah-04',
    editalItemId: '2.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'A equipe de segurança precisa posicionar um equipamento capaz de bloquear automaticamente exploits em tempo real no caminho do tráfego entre a DMZ e a rede interna, além de distinguir sua função de um sensor apenas de visibilidade via espelhamento de porta (SPAN). Essa necessidade descreve, respectivamente:',
    options: [
      'Um IDS operando inline e um proxy reverso operando out-of-band.',
      'Um IPS operando inline no fluxo de pacotes e um IDS operando de forma passiva via cópia de tráfego.',
      'Um firewall stateless realizando inspeção de payload SSL e um NAT estático bloqueando varreduras.',
      'Um servidor proxy SOCKS operando na camada física e um IPS operando passivamente fora do caminho.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Dispositivos de segurança (firewalls, IDS, IPS, proxies, NAT e VPN). O IPS opera inline com ação de bloqueio ativo; o IDS atua passivamente em cópia de tráfego.',
    correctAnalysis:
      'O IPS (Intrusion Prevention System) fica em série (inline) para descartar tráfego malicioso em tempo real, enquanto o IDS (Intrusion Detection System) recebe cópia passiva (SPAN/TAP) apenas para detectar e alertar.',
    optionErrors: {
      0: 'Incorreta: o IDS é passivo (não atua como bloqueador inline) e o proxy reverso atua em linha intermediando requisições de aplicação.',
      2: 'Incorreta: firewalls stateless filtram apenas cabeçalhos L3/L4 sem tabela de estado ou inspeção profunda de payload SSL, e NAT não bloqueia ataques por si só.',
      3: 'Incorreta: proxies operam na camada de Aplicação/Sessão, e um IPS passivo fora do caminho não consegue descartar pacotes inline.'
    }
  },
  {
    id: 'sarah-05',
    editalItemId: '2.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um usuário acessa um portal corporativo digitando o FQDN correto, porém é redirecionado para um servidor falso idêntico ao original porque o atacante inseriu registros falsos no cache do servidor resolvedor local. Esse incidente corresponde ao ataque de:',
    options: [
      'SYN Flood.',
      'Port Scanning.',
      'DNS Spoofing (Cache Poisoning).',
      'Brute Force.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Tipos de ataques a redes (spoofing, DNS spoofing, flood, DoS, DDoS, eavesdropping, brute force, port scanning e phishing). O envenenamento de respostas DNS caracteriza DNS Spoofing.',
    correctAnalysis:
      'No DNS Spoofing, o atacante forja respostas de resolução de nomes ou envenena o cache DNS para mapear um domínio legítimo a um endereço IP malicioso controlado por ele.',
    optionErrors: {
      0: 'Incorreta: SYN Flood é um ataque de negação de serviço por exaustão da fila de conexões semiabertas TCP, não de redirecionamento de nomes.',
      1: 'Incorreta: Port Scanning consiste em sondar portas TCP/UDP abertas em um alvo para reconhecimento.',
      3: 'Incorreta: Brute Force baseia-se em tentativas exaustivas de descoberta de senhas ou chaves.'
    }
  },
  {
    id: 'sarah-06',
    editalItemId: '2.2.9',
    format: 'multipla_escolha',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao configurar uma VPN IPsec site-to-site entre dois firewalls FortiGate/Check Point em que um dos peers está atrás de um roteador realizando NAT, qual ajuste de protocolo e portas é exigido na negociação IKE para que o túnel ESP seja estabelecido corretamente?',
    options: [
      'Negociar IKE na porta UDP 500 e habilitar NAT-T (NAT Traversal) encapsulando pacotes ESP sobre UDP 4500.',
      'Substituir ESP por AH na porta TCP 500 para atravessar o NAT sem alteração de cabeçalho.',
      'Encapsular a Phase 1 do IKE diretamente na porta TCP 443 e desabilitar o Diffie-Hellman.',
      'Utilizar exclusivamente IKEv1 Aggressive Mode na porta UDP 161 para manter o mapeamento de estado.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. IKE, IPsec e NAT (Eixo 2. Segurança de rede). IKE inicia em UDP 500 e detecta NAT para chavear o tráfego IKE/ESP encapsulado em UDP 4500 via NAT-T.',
    correctAnalysis:
      'A negociação IKE inicia na porta UDP 500; ao detectar NAT no caminho, o NAT-T (RFC 3947) encapsula tanto IKE quanto o tráfego IPsec ESP em datagramas UDP na porta 4500.',
    optionErrors: {
      1: 'Incorreta: AH autentica o cabeçalho IP externo e quebra quando atravessa NAT, além de IKE usar UDP 500, não TCP.',
      2: 'Incorreta: TCP 443 é típico de SSL-VPN, não de negociação padrão IKE/IPsec, e Diffie-Hellman é essencial na Phase 1.',
      3: 'Incorreta: UDP 161 é a porta padrão do protocolo SNMP, sem relação com túneis IKE/IPsec.'
    }
  },
  {
    id: 'sarah-2-04',
    editalItemId: '2.2.10',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante o troubleshooting de um túnel IPsec site-to-site, os logs do firewall mostram que a Phase 1 (IKE SA) concluiu com sucesso, mas a Phase 2 falha repetidamente com erro de proposta incompatível. Qual parâmetro pertence especificamente à Phase 2?',
    options: [
      'Pre-Shared Key (PSK) de autenticação dos gateways e modo Main vs Aggressive.',
      'Traffic Selectors (sub-redes local e remota protegidas), protocolo ESP/AH e opção PFS (Perfect Forward Secrecy).',
      'Endereços IP da porta UDP 500 dos roteadores de borda apenas.',
      'Certificado SSL-VPN do portal web para usuários remotos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Phase 1/Phase 2 (Eixo 2. Segurança de rede). Phase 2 (Quick Mode / IPsec SA) negocia ESP/AH, criptografia/hash de dados, PFS e Traffic Selectors (proxy IDs).',
    correctAnalysis:
      'Na Phase 2 são negociadas as IPsec SAs que protegem os dados reais, incluindo algoritmos ESP/AH, troca DH opcional de PFS e os Traffic Selectors (redes de origem e destino do túnel).',
    optionErrors: {
      0: 'Incorreta: PSK e Main/Aggressive Mode pertencem à negociação da Phase 1 (que já obteve sucesso).',
      2: 'Incorreta: UDP 500 é usada na fase inicial do IKE (Phase 1), não sendo parâmetro de erro de proposta de Phase 2.',
      3: 'Incorreta: portal SSL-VPN opera em TLS (TCP 443) para acesso remoto, sem relação com túneis IPsec Phase 2.'
    }
  },
  {
    id: 'sarah-2-05',
    editalItemId: '2.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para publicar um servidor web interno (10.50.10.20:8443) na DMZ através de um IP público único do firewall (200.10.10.5:443) e permitir que estações da LAN (10.50.20.0/24) naveguem na Internet compartilhando o IP público de saída, quais tipos de NAT aplicam-se respectivamente?',
    options: [
      'SNAT/PAT na publicação de entrada e DNAT na saída das estações da LAN.',
      'DNAT (VIP / Port Forwarding) para publicar o servidor web de entrada e SNAT/PAT (Masquerade/Overload) para a saída das estações.',
      'NAT estático 1:1 sem tradução de porta na entrada e IPsec AH na saída.',
      'Apenas rotas estáticas sem NAT, pois IPs 10.50.0.0/16 são roteáveis diretamente na Internet pública.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. NAT (Eixo 2. Segurança de rede). Entrada traduz destino + porta (DNAT/VIP); saída traduz múltiplos IPs privados de origem para 1 IP público diferenciando por porta (SNAT/PAT).',
    correctAnalysis:
      'DNAT (Virtual IP com port forwarding 443->8443) redireciona conexões externas entrantes para o servidor da DMZ, enquanto SNAT/PAT traduz os IPs privados de saída das estações para o IP público do firewall.',
    optionErrors: {
      0: 'Incorreta: os sentidos de DNAT (destino de entrada) e SNAT/PAT (origem de saída) foram invertidos.',
      2: 'Incorreta: NAT 1:1 sem tradução de porta manteria a porta 443 sem mapear para a porta 8443 do servidor interno.',
      3: 'Incorreta: o bloco 10.0.0.0/8 (RFC 1918) é privado e não roteável na Internet pública.'
    }
  },
  {
    id: 'sarah-2-06',
    editalItemId: '2.2.4',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um firewall com avaliação de políticas top-down (first-match), o administrador inseriu uma regra "Permitir LAN -> WAN qualquer serviço" na linha 1 e uma regra "Bloquear LAN -> WAN porta 23 (Telnet)" na linha 2. Qual será o comportamento efetivo?',
    options: [
      'O tráfego Telnet será bloqueado porque regras de bloqueio (Deny) têm precedência automática independente da ordem.',
      'O tráfego Telnet será permitido porque a linha 1 casa primeiro e interrompe a avaliação da lista (shadowed rule na linha 2).',
      'O firewall aplicará a regra mais restritiva ao final de toda a lista antes de encaminhar o pacote.',
      'A regra Implicit Deny ao final bloqueará todo o tráfego da LAN ignorando as linhas 1 e 2.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. políticas (Eixo 2. Segurança de rede). Firewalls avaliam regras de cima para baixo na primeira correspondência; regras específicas devem vir antes das genéricas.',
    correctAnalysis:
      'Como a avaliação é sequencial first-match, a regra ampla na linha 1 dá match no tráfego Telnet e o libera imediatamente, tornando a regra da linha 2 sombreada (nunca alcançada).',
    optionErrors: {
      0: 'Incorreta: não existe precedência automática de Deny sobre Allow fora da ordem de prioridade top-down.',
      2: 'Incorreta: o firewall para na primeira regra compatível e não compara todas as regras seguintes.',
      3: 'Incorreta: o Implicit Deny ao final só atua quando nenhuma regra anterior da lista correspondeu ao pacote.'
    }
  },
  {
    id: 'sarah-2-07',
    editalItemId: '2.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um cluster de firewalls em Alta Disponibilidade (HA) Ativo-Passivo, o administrador realizou failover manual para o nó secundário e percebeu que todas as sessões SSH e bancos de dados abertas pelos usuários foram derrubadas imediatamente, exigindo reconexão. Qual recurso de HA estava desativado ou sem enlace dedicado?',
    options: [
      'SSL Offloading L7 no servidor proxy.',
      'Sincronização de tabela de estados / sessões (State Sync / Session Pickup) pelo enlace de HA.',
      'Protocolo DNS dinâmico com registro MX secundário.',
      'Regra de Implicit Deny na interface WAN.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. HA (Eixo 2. Segurança de rede). Sem State Sync entre os membros do cluster HA, o nó passivo assume sem conhecer as sessões TCP/UDP estabelecidas e descarta os pacotes em andamento.',
    correctAnalysis:
      'Para failover transparente sem derrubar conexões TCP/VPN existentes, o nó ativo precisa replicar continuamente a Session Table (State Sync) ao nó standby via link de sincronização/heartbeat.',
    optionErrors: {
      0: 'Incorreta: SSL Offloading refere-se a terminação TLS em balanceadores HTTP/S, não a sessões SSH no failover de firewall.',
      2: 'Incorreta: registros MX de DNS tratam apenas de entrega de correio eletrônico.',
      3: 'Incorreta: Implicit Deny bloqueia tráfego não autorizado por política, mas conexões já permitidas caem no failover por falta da tabela de estados no nó secundário.'
    }
  },
  {
    id: 'sarah-2-08',
    editalItemId: '2.2.8',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma equipe remota precisa acessar servidores internos RDP e SSH através de uma SSL-VPN corporativa sem permitir que o tráfego de navegação pública para a Internet dos notebooks passe pelo link da matriz (economizando banda do datacenter). Qual modo e recurso de SSL-VPN atendem ao cenário?',
    options: [
      'Web Mode com Full Tunneling obrigatório.',
      'Tunnel Mode com Split Tunneling configurado para injetar apenas as rotas das sub-redes internas.',
      'IPsec AH sobre UDP 500 sem cliente VPN.',
      'Tunnel Mode com desativação de TLS e uso de Telnet.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. SSL-VPN (Eixo 2. Segurança de rede). RDP/SSH nativos exigem Tunnel Mode (interface virtual L3), e enviar apenas rotas corporativas pelo túnel é Split Tunneling.',
    correctAnalysis:
      'O Tunnel Mode cria adaptador virtual para tráfego L3 (RDP/SSH), e o Split Tunneling direciona somente os prefixos internos pela VPN mantendo a navegação Internet local no link do usuário.',
    optionErrors: {
      0: 'Incorreta: Full Tunneling faria justamente o oposto — forçaria todo o tráfego Internet a atravessar a matriz.',
      2: 'Incorreta: AH é protocolo IPsec (não SSL-VPN) e não criptografa dados.',
      3: 'Incorreta: SSL-VPN baseia-se em TLS (TCP 443) e Telnet trafega credenciais em texto claro.'
    }
  },
  {
    id: 'sarah-2-09',
    editalItemId: '2.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao detectar um servidor Linux na DMZ comunicando-se ativamente com um IP suspeito de comando e controle (C2), qual sequência reflete boas práticas de prevenção e tratamento de incidentes preservando evidências?',
    options: [
      'Desligar imediatamente o servidor da tomada, formatar o disco e restaurar o backup antes de analisar logs.',
      'Realizar contenção isolando o acesso de rede (ex: quarentena de VLAN/política de bloqueio no firewall), coletar evidências voláteis/logs, erradicar o artefato/vulnerabilidade e recuperar em ambiente validado.',
      'Apagar todos os logs de firewall e reiniciar os switches para limpar a tabela ARP antes da triagem.',
      'Aguardar 7 dias sem qualquer bloqueio para observar todos os servidores internos que serão infectados.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Prevenção e tratamento de incidentes (Eixo 2). Contenção (preferencialmente isolamento de rede para preservar RAM) -> Coleta -> Erradicação -> Recuperação -> Lições aprendidas.',
    correctAnalysis:
      'Isolar o host na rede (contenção) interrompe a comunicação C2 mantendo memória RAM e estado intactos para perícia; em seguida executam-se coleta, erradicação da causa raiz e recuperação segura.',
    optionErrors: {
      0: 'Incorreta: desligar da tomada e formatar apaga evidências voláteis e impede descobrir a causa raiz (facilitando reinfecção).',
      2: 'Incorreta: apagar logs destrói trilhas de auditoria indispensáveis à resposta a incidentes.',
      3: 'Incorreta: não conter uma infecção ativa permite movimentação lateral e exfiltração contínua de dados.'
    }
  },
  {
    id: 'sarah-2-10',
    editalItemId: '2.2.11',
    format: 'multipla_escolha',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um ambiente com dois links WAN distintos conectados ao firewall, o administrador criou uma política permitindo acesso a um servidor interno via Link B, porém os pacotes de entrada pelo Link B são descartados silenciosamente pelo firewall (erro de RPF / anti-spoofing) porque a rota padrão de retorno aponta apenas pelo Link A. Qual é a causa técnica?',
    options: [
      'Roteamento assimétrico detectado pelo Reverse Path Forwarding (RPF) / firewall stateful.',
      'Colisão de endereços MAC na porta console serial RS-232.',
      'Expiração do certificado DKIM do servidor DNS autoritativo.',
      'Conflito de VLAN nativa entre servidores de arquivos NFS.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting e logs (Eixo 2. Segurança de rede). RPF verifica se o pacote entra pela mesma interface usada pela tabela de roteamento para alcançar a origem; roteamento assimétrico dispara drop de RPF.',
    correctAnalysis:
      'Com RPF ativo, se o pacote chega pela interface WAN-B mas a rota para aquele IP aponta via WAN-A (roteamento assimétrico), o firewall interpreta como IP spoofing ou fluxo inválido e descarta o tráfego.',
    optionErrors: {
      1: 'Incorreta: console serial RS-232 não utiliza quadros Ethernet nem endereços MAC.',
      2: 'Incorreta: DKIM é assinatura criptográfica de correio eletrônico e não causa drop de tráfego IP em interfaces WAN.',
      3: 'Incorreta: VLAN nativa atua em trunks L2 locais, sem relação com roteamento multi-WAN L3.'
    }
  },

  // ==================== EIXO 3: 3. WINDOWS/ACTIVE DIRECTORY. (10 questões) ====================
  {
    id: 'sarah-07',
    editalItemId: '3.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma floresta Active Directory com múltiplos domínios, o Controlador de Domínio que detém a função FSMO PDC Emulator sofreu falha física prolongada. Qual conjunto de operações é imediatamente impactado no domínio afetado?',
    options: [
      'Criação de novos domínios filhos na floresta e alteração de atributos no Schema do Active Directory.',
      'Sincronismo de relógio do domínio, processamento prioritário de alterações/bloqueios de senha e edição padrão de GPOs.',
      'Alocação de novos blocos de identificadores relativos (RID) para criação em massa de contas de computador em todos os domínios da floresta.',
      'Exclusivamente a resolução de consultas LDAP anônimas na porta 636 para servidores Linux.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. FSMO (Eixo 3. WINDOWS/ACTIVE DIRECTORY). O PDC Emulator centraliza sincronização de hora (NTP), valida senhas recentes/bloqueios e é o alvo padrão da edição de GPOs.',
    correctAnalysis:
      'O PDC Emulator atua como fonte autoritativa de horário no domínio, recebe imediatamente atualizações e bloqueios de senha e é o controlador padrão aberto pelo GPMC ao editar GPOs.',
    optionErrors: {
      0: 'Incorreta: criar domínios na floresta pertence ao Domain Naming Master e alterar o Schema pertence ao Schema Master.',
      2: 'Incorreta: a distribuição de pools de RID em um domínio cabe ao RID Master, e não atua em nível de toda a floresta.',
      3: 'Incorreta: LDAPS (636) não depende especificamente do papel FSMO PDC Emulator para responder consultas.'
    }
  },
  {
    id: 'sarah-08',
    editalItemId: '3.2.8',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Usuários de uma filial relatam erro ao acessar um compartilhamento SMB integrado ao Active Directory logo após a bateria CMOS de uma estação perder carga, adiantando o relógio local em 18 minutos. Qual protocolo bloqueia o acesso e por qual motivo?',
    options: [
      'LDAP (porta 389), porque rejeita consultas Distinguished Name quando o TTL do registro SRV expira em 5 minutos.',
      'Kerberos (porta 88), porque seus autenticadores exigem sincronismo de relógio dentro da tolerância padrão de 5 minutos contra replay attacks.',
      'DHCP (porta 67), porque revoga automaticamente o lease IP quando o relógio do cliente diverge do servidor.',
      'PowerShell Remoting (porta 5985), porque exige certificados X.509 emitidos com precisão de segundos no GPO.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Kerberos (Eixo 3. WINDOWS/ACTIVE DIRECTORY). O Kerberos (TCP/UDP 88) inclui timestamps nos tickets/autenticadores com tolerância padrão de 5 minutos.',
    correctAnalysis:
      'O Kerberos utiliza carimbos de data/hora criptografados para evitar ataques de repetição (replay), rejeitando tickets quando a diferença de relógio excede a política máxima (padrão 5 minutos).',
    optionErrors: {
      0: 'Incorreta: o erro de 18 minutos de clock skew bloqueia a autenticação Kerberos (88), não a sintaxe DN do LDAP.',
      2: 'Incorreta: concessão e renovação de lease DHCP dependem do temporizador T1/T2 do cliente, sem validar sincronismo de relógio absoluto com o KDC.',
      3: 'Incorreta: acesso a compartilhamento SMB de domínio usa autenticação Kerberos, não WinRM/PowerShell Remoting.'
    }
  },
  {
    id: 'sarah-09',
    editalItemId: '3.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma configuração de segurança foi definida na GPO vinculada ao Domínio e outra configuração conflitante foi aplicada na GPO vinculada à Unidade Organizacional (OU) do setor financeiro. Considerando as regras padrão de precedência de GPO (LSDOU) sem uso de Enforced ou Block Inheritance, qual política prevalece e qual comando atualiza imediatamente as GPOs na estação?',
    options: [
      'Prevalece a GPO do Domínio sobre a da OU; atualização imediata com gpresult /r.',
      'Prevalece a GPO da OU (última aplicada na ordem Local -> Site -> Domínio -> OU); atualização imediata com gpupdate /force.',
      'Prevalece a GPO Local sobre todas as políticas de rede; atualização imediata com dcdiag /fix.',
      'As duas políticas se anulam deixando o parâmetro não configurado; atualização imediata com repadmin /syncall.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. GPO e troubleshooting (Eixo 3. WINDOWS/ACTIVE DIRECTORY). A ordem LSDOU faz com que a OU sobrescreva Domínio/Site/Local, e gpupdate /force força a reaplicação.',
    correctAnalysis:
      'Na precedência padrão LSDOU (Local, Site, Domínio, OU), a política aplicada por último (OU) vence em conflitos, e o comando gpupdate /force reaplica todas as configurações imediatamente.',
    optionErrors: {
      0: 'Incorreta: a GPO da OU sobrescreve a do Domínio, e gpresult /r apenas exibe o RSoP aplicado (não força atualização).',
      2: 'Incorreta: a GPO Local é a primeira da ordem e tem menor precedência; dcdiag diagnostica Controladores de Domínio.',
      3: 'Incorreta: conflitos de GPO resolvem por precedência (não se anulam), e repadmin gerencia replicação do AD entre DCs.'
    }
  },
  {
    id: 'sarah-3-04',
    editalItemId: '3.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Nos sistemas operacionais modernos (Windows/Linux), considerando gestão de processos, memória e entrada/saída (E/S), qual afirmação distingue corretamente processos, threads e o fenômeno de thrashing?',
    options: [
      'Threads de um mesmo processo possuem espaços de endereçamento de memória completamente isolados entre si, enquanto processos distintos compartilham o mesmo heap por padrão.',
      'Threads do mesmo processo compartilham código e espaço de memória mantendo pilha e registradores próprios; thrashing ocorre quando o excesso de paginação entre RAM e disco consome quase todo o tempo de CPU.',
      'DMA (Direct Memory Access) obriga a CPU a copiar manualmente cada byte do controlador de disco para a RAM interrompendo o processador a cada palavra.',
      'A troca de contexto entre duas threads do mesmo processo é sempre mais lenta que a troca entre dois processos distintos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Sistemas operacionais (gestão de processos, de memória e de entrada e saída) (Eixo 3).',
    correctAnalysis:
      'Threads compartilham espaço de endereçamento e recursos do processo pai (tendo stack/registradores individuais), e thrashing ocorre por falta de RAM física causando troca incessante de páginas em disco.',
    optionErrors: {
      0: 'Incorreta: é o oposto — processos têm espaços de memória isolados e threads do mesmo processo compartilham o espaço de endereçamento.',
      2: 'Incorreta: DMA justamente libera a CPU de transferir cada byte, interrompendo o processador apenas ao final do bloco.',
      3: 'Incorreta: context switch entre threads do mesmo processo é mais rápido porque não troca a tabela de páginas de memória.'
    }
  },
  {
    id: 'sarah-3-05',
    editalItemId: '3.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após promover um novo Controlador de Domínio no Windows Server, estações de trabalho falham ao ingressar no domínio apresentando erro de localização do DC, embora o ping para o IP do servidor funcione. Qual tipo de registro DNS e subzona específica do AD devem ser verificados?',
    options: [
      'Registros MX sob a zona _dmarc do domínio público.',
      'Registros SRV (como _ldap._tcp.dc._msdcs e _kerberos._tcp.dc._msdcs) na zona DNS integrada ao Active Directory.',
      'Registros TXT na zona reversa PTR apontando para a conta Administrator.',
      'Registros CNAME apontando diretamente para o arquivo local NTDS.dit.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. DNS e Active Directory (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Estações localizam DCs e KDCs consultando registros SRV em _msdcs.<domínio>.',
    correctAnalysis:
      'O ingresso e o logon no domínio dependem dos registros SRV (_ldap._tcp, _kerberos._tcp) publicados pelo serviço Netlogon no DNS interno sob _msdcs.',
    optionErrors: {
      0: 'Incorreta: MX e _dmarc pertencem à infraestrutura de correio eletrônico, não à descoberta de Controladores de Domínio.',
      2: 'Incorreta: resolução reversa PTR não publica localização de serviços LDAP/Kerberos do AD.',
      3: 'Incorreta: NTDS.dit é o arquivo local do banco de dados do AD no DC, nunca referenciado por CNAME DNS.'
    }
  },
  {
    id: 'sarah-3-06',
    editalItemId: '3.2.6',
    format: 'multipla_escolha',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma arquitetura Active Directory multi-site, qual afirmação descreve corretamente o funcionamento da replicação entre DCs e o papel da pasta SYSVOL?',
    options: [
      'A replicação dentro do mesmo site (intrasite) é comprimida e aguarda agendamento padrão de 180 minutos, enquanto a replicação entre sites (intersite) dispara notificações imediatas sem compressão.',
      'A replicação intrasite usa notificações rápidas sem compressão e a intersite usa agendamentos configuráveis com compressão via Site Links; no Windows Server moderno, o SYSVOL replica GPOs e scripts usando DFSR.',
      'O arquivo NTDS.dit armazena exclusivamente os scripts de logon e modelos ADMX, enquanto o SYSVOL armazena os hashes de senha dos usuários.',
      'O comando repadmin /replsummary serve para compactar o banco NTDS.dit offline após parada do serviço NTDS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. replicação e troubleshooting (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Intrasite = rápida sem compressão; Intersite = agendada com compressão; SYSVOL = DFSR.',
    correctAnalysis:
      'A replicação intrasite prioriza velocidade (sem compressão, notificação em segundos), a intersite prioriza economia de WAN (compressão e agendamento via Site Links), e o SYSVOL utiliza DFSR.',
    optionErrors: {
      0: 'Incorreta: os comportamentos de compressão e agendamento entre intrasite e intersite foram invertidos.',
      2: 'Incorreta: NTDS.dit armazena objetos, atributos e hashes de senha do AD; SYSVOL armazena políticas GPO e scripts.',
      3: 'Incorreta: repadmin /replsummary exibe resumo da saúde e erros da replicação entre DCs (não compacta NTDS.dit — isso é ntdsutil).'
    }
  },
  {
    id: 'sarah-3-07',
    editalItemId: '3.2.9',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma aplicação corporativa Linux precisa autenticar usuários no Active Directory realizando consultas seguras com criptografia TLS nativa na porta dedicada, e também consultar atributos de usuários em múltiplos domínios da floresta via Global Catalog seguro. Quais portas TCP deve liberar no firewall?',
    options: [
      'TCP 389 (LDAPS) e TCP 88 (Global Catalog seguro).',
      'TCP 636 (LDAPS) e TCP 3269 (Global Catalog sobre TLS).',
      'TCP 135 (LDAP texto claro) e TCP 445 (Global Catalog).',
      'UDP 161 (LDAPS) e TCP 5985 (Global Catalog).'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. LDAP (Eixo 3. WINDOWS/ACTIVE DIRECTORY). LDAP = 389, LDAPS = 636, Global Catalog = 3268 e GC sobre SSL/TLS = 3269.',
    correctAnalysis:
      'LDAPS opera na porta TCP 636 com TLS implícito, e o Global Catalog sobre TLS utiliza a porta TCP 3269 (enquanto 389 e 3268 são as versões padrão sem TLS implícito).',
    optionErrors: {
      0: 'Incorreta: 389 é LDAP padrão (não LDAPS) e 88 é Kerberos.',
      2: 'Incorreta: 135 é RPC Endpoint Mapper e 445 é SMB.',
      3: 'Incorreta: 161 é SNMP e 5985 é WinRM HTTP.'
    }
  },
  {
    id: 'sarah-3-08',
    editalItemId: '3.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um administrador instalou a função de servidor DHCP em um Windows Server recém-ingressado no domínio AD, criou os escopos, porém o serviço permanece com ícone vermelho e não entrega IPs na rede. Qual passo administrativo específico do Windows Server integrado ao AD está pendente, e qual recurso nativo provê redundância entre dois servidores DHCP?',
    options: [
      'Falta autorizar o servidor DHCP no Active Directory; a redundância nativa usa DHCP Failover (Load Balance ou Hot Standby via TCP 647).',
      'Falta transferir o papel Schema Master FSMO para o servidor DHCP; a redundância exige obrigatoriamente DAG do Exchange.',
      'Falta desabilitar a porta UDP 67 no firewall do domínio; a redundância nativa utiliza protocolo STP.',
      'Falta converter o escopo DHCP em zona primária DNS reversa.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. DHCP (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Servidores DHCP membros de domínio exigem autorização explícita no AD (Enterprise Admins) e suportam DHCP Failover nativo.',
    correctAnalysis:
      'Para evitar servidores DHCP não autorizados no domínio, o Windows Server exige autorização explícita do DHCP no AD; a alta disponibilidade nativa entre dois servidores usa DHCP Failover (TCP 647).',
    optionErrors: {
      1: 'Incorreta: Schema Master não tem relação com DHCP, e DAG é recurso exclusivo de bancos do Microsoft Exchange.',
      2: 'Incorreta: bloquear UDP 67 impediria o funcionamento do servidor DHCP, e STP é protocolo de switches L2.',
      3: 'Incorreta: escopo DHCP distribui endereços IP e opções de rede, não sendo convertido em zona DNS.'
    }
  },
  {
    id: 'sarah-3-09',
    editalItemId: '3.2.10',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um analista precisa gerar um relatório CSV com todas as contas de usuário habilitadas no Active Directory utilizando PowerShell com menor impacto de rede e processamento no Controlador de Domínio. Qual comando aplica corretamente o princípio "filter left" no servidor AD?',
    options: [
      'Get-ADUser -Filter * | Where-Object {$_.Enabled -eq $true} | Export-Csv ativos.csv -NoTypeInformation',
      'Get-ADUser -Filter {Enabled -eq $true} | Select-Object SamAccountName,Name | Export-Csv ativos.csv -NoTypeInformation',
      'Get-ADGroup -Filter * | ConvertFrom-Json | Out-File ativos.csv',
      'net user /domain | grep enabled > ativos.csv'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. PowerShell (Eixo 3. WINDOWS/ACTIVE DIRECTORY). Usar -Filter {Enabled -eq $true} delega a filtragem ao próprio DC antes de trafegar milhares de objetos pela rede.',
    correctAnalysis:
      'Passar o filtro diretamente no parâmetro -Filter de Get-ADUser faz o Controlador de Domínio retornar apenas os usuários habilitados, evitando trafegar toda a base para filtrar depois com Where-Object.',
    optionErrors: {
      0: 'Incorreta: -Filter * traz TODOS os usuários do domínio pela rede para só depois filtrar localmente na estação.',
      2: 'Incorreta: Get-ADGroup consulta grupos (não usuários) e não retorna JSON para ConvertFrom-Json.',
      3: 'Incorreta: comando legado net user não possui saída CSV estruturada nem suporte nativo ao comando Linux grep no PowerShell.'
    }
  },
  {
    id: 'sarah-3-10',
    editalItemId: '3.2.11',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante uma auditoria de saúde nos Controladores de Domínio do Active Directory, o administrador deseja executar uma bateria completa de testes de conectividade, DNS, SYSVOL, replicação e funções FSMO em um único utilitário nativo, além de identificar um DC detentor da função Infrastructure Master em ambiente multi-domínio. Qual combinação está correta?',
    options: [
      'Executar dcdiag para diagnóstico integral do DC; em florestas multi-domínio onde nem todos os DCs são Global Catalog, o Infrastructure Master NÃO deve ficar em um DC que seja Global Catalog.',
      'Executar gpupdate para testar replicação SYSVOL; o Infrastructure Master deve estar obrigatoriamente junto com o Global Catalog em florestas multi-domínio.',
      'Executar eseutil /mh para verificar integridade do NTDS.dit em produção; o Schema Master deve existir em cada domínio filho.',
      'Executar ipconfig /flushdns no DC para corrigir USN rollback após restaurar um snapshot antigo.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting e FSMO (Eixo 3. WINDOWS/ACTIVE DIRECTORY). dcdiag diagnostica saúde dos DCs; Infrastructure Master e Global Catalog não devem coexistir em multi-domínio (salvo se todos os DCs forem GC).',
    correctAnalysis:
      'dcdiag testa DNS, replicação, serviços e SYSVOL do DC; em ambientes multi-domínio, se o Infrastructure Master ficar em um GC (e nem todos os DCs forem GC), ele nunca detecta referências cross-domain desatualizadas.',
    optionErrors: {
      1: 'Incorreta: gpupdate atualiza GPOs locais (não diagnostica saúde do DC), e a regra de coexistência GC + Infrastructure Master é justamente evitar quando nem todos são GC.',
      2: 'Incorreta: eseutil é ferramenta de banco .EDB do Exchange Server, e o Schema Master é único por Floresta.',
      3: 'Incorreta: flushdns limpa apenas cache DNS local e jamais corrige USN rollback de replicação do AD.'
    }
  },

  // ==================== EIXO 4: 4. Correio eletrônico. (10 questões) ====================
  {
    id: 'sarah-10',
    editalItemId: '4.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para impedir que terceiros falsifiquem o endereço exibido no cabeçalho "From:" de e-mails corporativos e receber relatórios XML agregados de falhas de autenticação, o administrador implementou SPF, DKIM e DMARC. Qual afirmação descreve corretamente o papel de cada mecanismo?',
    options: [
      'SPF lista os servidores autorizados no DNS (TXT), DKIM assina criptograficamente a mensagem e DMARC exige alinhamento do domínio "From:" com SPF ou DKIM.',
      'SPF criptografa o corpo da mensagem em TLS, DKIM define os servidores de entrada no registro MX e DMARC bloqueia anexos executáveis.',
      'DMARC substitui os registros SPF e DKIM no DNS, dispensando qualquer chave pública ou lista de IPs remetentes.',
      'DKIM valida apenas o endereço IP de origem no envelope SMTP sem verificar assinatura digital no cabeçalho.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2. Mecanismos de proteção de e-mail (SPF, DKIM, DMARC e antispam). SPF autoriza IPs em TXT, DKIM assina headers/corpo e DMARC impõe alinhamento + política.',
    correctAnalysis:
      'SPF autoriza IPs remetentes via registro TXT, DKIM valida integridade/origem por assinatura assimétrica e DMARC exige alinhamento do domínio "From:" com SPF ou DKIM além de política (none/quarantine/reject) e relatórios.',
    optionErrors: {
      1: 'Incorreta: SPF não realiza criptografia TLS, DKIM não substitui registros MX e DMARC não é antivírus de anexos.',
      2: 'Incorreta: DMARC depende diretamente de SPF e/ou DKIM para validar alinhamento e não os substitui.',
      3: 'Incorreta: validar IP do envelope é função do SPF; o DKIM verifica assinatura criptográfica por chave pública publicada no DNS.'
    }
  },
  {
    id: 'sarah-11',
    editalItemId: '4.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na arquitetura de correio eletrônico, um cliente corporativo precisa enviar uma mensagem autenticada ao seu servidor de saída e sincronizar múltiplas pastas de sua caixa postal mantendo as mensagens armazenadas no servidor. Quais protocolos e registro DNS sustentam esse fluxo?',
    options: [
      'POP3 (porta 110) para envio, SMTP (porta 25) para sincronização de pastas e registro PTR para localizar o servidor de destino.',
      'SMTP (submissão na porta 587) para envio, IMAP (porta 143/993) para sincronização de pastas no servidor e registro MX para roteamento entre domínios.',
      'IMAP (porta 993) para envio autenticado entre MTAs, POP3 (porta 995) para sincronização bidirecional e registro SRV para entrega SMTP.',
      'SMTP (porta 25) exclusivo para o cliente final baixar anexos e registro CNAME obrigatório apontando para o IP do Exchange.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Arquitetura e protocolos de correio eletrônico (SMTP, POP3, IMAP e registros MX). Envio usa SMTP (587 para submissão), leitura sincronizada usa IMAP e roteamento usa MX.',
    correctAnalysis:
      'SMTP realiza o envio/submissão (porta 587 para MUA->MSA), IMAP mantém estado e pastas sincronizadas no servidor (143/993) e registros MX indicam os MTAs de destino de um domínio.',
    optionErrors: {
      0: 'Incorreta: POP3 é protocolo de recebimento/download (não de envio), e registros PTR fazem DNS reverso, não roteamento de domínio de e-mail.',
      2: 'Incorreta: IMAP não realiza envio entre MTAs e POP3 não sincroniza múltiplas pastas bidirecionalmente; roteamento SMTP usa MX, não SRV.',
      3: 'Incorreta: SMTP não baixa anexos para o cliente e o registro MX não deve apontar para um CNAME conforme padrões DNS.'
    }
  },
  {
    id: 'sarah-12',
    editalItemId: '4.2.9',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um ambiente Microsoft Exchange Server configurado com DAG (Database Availability Group) composto por dois servidores Mailbox, qual componente evita cenário de split-brain caso o link de replicação entre os dois nós caia, e qual ferramenta rastreia o trajeto de uma mensagem entregue ou retida em fila?',
    options: [
      'Witness Server (File Share Witness) garante o quórum do DAG, e Message Tracking (Get-MessageTrackingLog) rastreia o fluxo de entrega.',
      'Send Connector garante o quórum do DAG, e Circular Logging rastreia o fluxo de entrega entre filas.',
      'Edge Transport Server substitui o quórum do DAG, e OWA realiza o rastreamento de logs de transação EDB.',
      'Autodiscover resolve o split-brain do cluster, e POP3 Connector inspeciona cabeçalhos de mensagens em Poison Queue.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Microsoft Exchange Server, DAG, Message Tracking (Eixo 4. Correio eletrônico). DAG com número par de membros usa Witness Server para quórum; rastreamento usa Message Tracking.',
    correctAnalysis:
      'Um DAG com número par de membros utiliza um Witness Server para maioria de quórum contra split-brain, e o Message Tracking (Get-MessageTrackingLog) registra cada salto e evento da mensagem.',
    optionErrors: {
      1: 'Incorreta: Send Connector roteia e-mails de saída e Circular Logging sobrescreve logs de transação antigos, sem relação com quórum ou tracking.',
      2: 'Incorreta: Edge Transport atua na DMZ como relay/antispam e OWA é o cliente webmail de acesso do usuário.',
      3: 'Incorreta: Autodiscover configura clientes automaticamente (EWS/Outlook) e não gerencia quórum de failover de bancos EDB.'
    }
  },
  {
    id: 'sarah-4-04',
    editalItemId: '4.2.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após configurar uma impressora multifuncional na LAN para enviar digitalizações por e-mail usando um conector do Microsoft Exchange Server, o domínio da instituição foi bloqueado em diversas listas RBL externas porque o servidor passou a retransmitir spam de qualquer IP da Internet. Qual falha de configuração ocorreu?',
    options: [
      'O Send Connector foi associado ao certificado SAN da organização.',
      'Um Receive Connector foi configurado com permissão de Open Relay (Anonymous Users com permissão de relay externo sem restrição de IP de origem ou autenticação).',
      'O serviço OWA foi publicado na porta TCP 443 através do proxy reverso.',
      'O registro MX do domínio foi configurado com preferência numérica igual a 10.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. SMTP relay, antispam, conectores (Eixo 4. Correio eletrônico). Permitir relay anônimo irrestrito transforma o servidor em Open Relay, causando bloqueio rápido em RBLs.',
    correctAnalysis:
      'Conceder relay externo anônimo sem restringir estritamente o endereço IP remoto autorizado (ou exigir autenticação SMTP + TLS) cria um Open Relay explorado por spammers.',
    optionErrors: {
      0: 'Incorreta: vincular certificado SAN ao transporte garante TLS, sem causar retransmissão aberta de spam.',
      2: 'Incorreta: publicar OWA na porta 443 autentica usuários via HTTPS e não abre relay SMTP.',
      3: 'Incorreta: preferência 10 no registro MX é configuração padrão normal para recebimento de e-mail.'
    }
  },
  {
    id: 'sarah-4-05',
    editalItemId: '4.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No roteamento de correio do Microsoft Exchange Server, qual afirmação distingue corretamente a atuação de um Receive Connector e de um Send Connector?',
    options: [
      'Receive Connectors são configurados por servidor para controlar conexões SMTP entrantes, enquanto Send Connectors têm escopo organizacional para controlar o envio de saída (via DNS MX ou Smart Host).',
      'Send Connectors escutam na porta 25 para receber e-mails da Internet, enquanto Receive Connectors enviam e-mails externos para o Smart Host antispam.',
      'Ambos operam exclusivamente na porta IMAP 993 dentro do protocolo EWS.',
      'Receive Connectors substituem a necessidade de bancos .EDB no servidor Mailbox.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. conectores (Eixo 4. Correio eletrônico). Receive = entrada por servidor; Send = saída com escopo de organização.',
    correctAnalysis:
      'Receive Connectors definem em quais IPs/portas cada servidor Exchange aceita tráfego SMTP de entrada; Send Connectors definem o Address Space de saída da organização e se a entrega usa MX ou Smart Host.',
    optionErrors: {
      1: 'Incorreta: os papéis de entrada (Receive) e saída (Send) foram invertidos.',
      2: 'Incorreta: conectores de transporte Exchange utilizam SMTP (25/587/465/717), nunca IMAP 993.',
      3: 'Incorreta: conectores tratam apenas o fluxo de transporte SMTP; as caixas postais continuam armazenadas em bancos .EDB.'
    }
  },
  {
    id: 'sarah-4-06',
    editalItemId: '4.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao abrir o Queue Viewer no Microsoft Exchange Server após um pico de mensagens malformadas, o administrador encontra mensagens paradas na Poison Message Queue enquanto outras aguardam retentativa temporária para um domínio externo na Delivery Queue. Qual comportamento diferencia essas duas filas?',
    options: [
      'A Delivery Queue realiza retentativas automáticas após erros temporários (4xx), enquanto a Poison Message Queue retém mensagens que causaram falha crítica no processo de transporte e exige análise manual antes de reenviar ou remover.',
      'A Poison Message Queue envia automaticamente as mensagens em 5 minutos para o Smart Host sem intervenção administrativa.',
      'A Delivery Queue armazena exclusivamente rascunhos abertos pelos usuários no OWA.',
      'Mensagens na Poison Message Queue são excluídas automaticamente pelo Circular Logging antes de entrar no transporte.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. filas (Eixo 4. Correio eletrônico). Delivery Queue gerencia envios por destino com retry automático; Poison Queue isola mensagens nocivas que derrubaram o worker de transporte.',
    correctAnalysis:
      'Mensagens na Delivery Queue passam por ciclos de retentativa e backoff automático; já a Poison Message Queue isola mensagens que causaram crash no serviço de transporte para impedir loops de queda.',
    optionErrors: {
      1: 'Incorreta: mensagens na Poison Queue ficam suspensas intencionalmente e não são reenviadas sozinhas.',
      2: 'Incorreta: rascunhos do OWA residem na caixa postal do usuário no banco .EDB, não na fila de transporte.',
      3: 'Incorreta: Circular Logging atua sobre logs de transação de bancos .EDB, sem relação com filas SMTP.'
    }
  },
  {
    id: 'sarah-4-07',
    editalItemId: '4.2.10',
    format: 'multipla_escolha',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um servidor Microsoft Exchange standalone sem DAG sofreu desligamento abrupto por falta de energia, deixando o banco de dados de caixas postais desmontado. Ao executar eseutil /mh, o estado exibido foi "Dirty Shutdown". O que significa esse estado e qual cuidado aplica-se ao uso de Circular Logging?',
    options: [
      'Dirty Shutdown indica que nem todos os logs de transação pendentes foram gravados no arquivo .EDB; ativar Circular Logging economiza disco, mas impede backups incrementais/diferenciais e restauração point-in-time.',
      'Dirty Shutdown indica que o banco já está 100% íntegro para remoção dos arquivos .log; Circular Logging melhora a recuperação point-in-time.',
      'Dirty Shutdown significa falha exclusiva do diretório virtual /owa no IIS sem relação com o arquivo .EDB.',
      'Circular Logging é obrigatório para realizar backups incrementais baseados em VSS no Commvault.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. databases (Eixo 4. Correio eletrônico). Dirty Shutdown exige replay dos transaction logs no .EDB; Circular Logging sobrescreve logs impedindo incremental/point-in-time.',
    correctAnalysis:
      'Dirty Shutdown sinaliza que há transações registradas nos arquivos .log ainda não aplicadas ao .EDB (resolvido via soft recovery com eseutil /r se os logs estiverem íntegros). Circular Logging impede backups incrementais por sobrescrever logs.',
    optionErrors: {
      1: 'Incorreta: o estado íntegro sem logs pendentes chama-se Clean Shutdown; Circular Logging justamente impossibilita point-in-time.',
      2: 'Incorreta: eseutil /mh verifica o cabeçalho físico do banco de dados .EDB, não diretórios virtuais do IIS.',
      3: 'Incorreta: backups incrementais baseados em logs exigem Circular Logging DESABILITADO para preservar a cadeia de logs até o backup truncá-los.'
    }
  },
  {
    id: 'sarah-4-08',
    editalItemId: '4.2.8',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após uma migração de servidores Exchange, clientes Outlook internos e externos não conseguem atualizar a consulta de disponibilidade (Free/Busy) nem baixar automaticamente as configurações de perfil ao abrir o cliente. Qual serviço/API e mecanismo de descoberta devem ser auditados?',
    options: [
      'EWS (Exchange Web Services) e Autodiscover (SCP interno no AD e registro DNS externo autodiscover/SRV), além dos nomes SAN no certificado TLS.',
      'Protocolo POP3 na porta 110 e registro PTR reverso na zona pública.',
      'Serviço DHCP Failover na porta 647 e protocolo STP nos switches de acesso.',
      'Send Connector SMTP na porta 25 e lista RBL externa.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. EWS, OWA e certificados (Eixo 4. Correio eletrônico). Free/Busy, OAB e provisionamento automático dependem de Autodiscover, EWS e certificado SAN válido.',
    correctAnalysis:
      'O cliente consulta o Autodiscover (via SCP no AD internamente ou DNS externamente) para obter a URL do EWS (que serve Free/Busy e OOF), exigindo certificado TLS contendo os FQDNs no campo SAN.',
    optionErrors: {
      1: 'Incorreta: POP3 apenas baixa mensagens da caixa de entrada e não fornece Free/Busy nem autoconfiguração EWS.',
      2: 'Incorreta: DHCP Failover e STP são serviços de rede sem relação com APIs Exchange EWS/Autodiscover.',
      3: 'Incorreta: Send Connector controla apenas entrega SMTP de saída.'
    }
  },
  {
    id: 'sarah-4-09',
    editalItemId: '4.2.3',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um gateway antispam posicionado à frente do servidor de correio, o mecanismo de Greylisting rejeita temporariamente a primeira tentativa de entrega de um remetente desconhecido com código SMTP 4xx. Por que essa técnica reduz spams automáticos?',
    options: [
      'Porque MTAs legítimos em conformidade com a RFC SMTP colocam a mensagem em fila e tentam reenviar minutos depois, enquanto grande parte dos spambots dispara uma única vez e descarta após erro 4xx.',
      'Porque o código 4xx instrui o servidor remetente a criptografar o corpo com DKIM automaticamente.',
      'Porque rejeições 4xx são erros permanentes (hard bounce) que apagam o domínio remetente da tabela DNS raiz.',
      'Porque o Greylisting valida o hash da senha Kerberos do remetente antes do comando HELO.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. antispam (Eixo 4. Correio eletrônico). Erros 4xx são temporários (soft fail) e geram retry por MTAs reais; 5xx são permanentes.',
    correctAnalysis:
      'Pela especificação SMTP, códigos 4xx (ex: 451) indicam falha transitória exigindo nova tentativa posterior — comportamento padrão de servidores legítimos, mas frequentemente ignorado por ferramentas simples de disparo em massa.',
    optionErrors: {
      1: 'Incorreta: códigos SMTP 4xx não geram assinaturas DKIM automaticamente.',
      2: 'Incorreta: erros permanentes (hard bounce) pertencem à família 5xx (ex: 550), não 4xx, e não alteram a zona DNS raiz.',
      3: 'Incorreta: entregas SMTP externas entre domínios da Internet não utilizam autenticação Kerberos.'
    }
  },
  {
    id: 'sarah-4-10',
    editalItemId: '4.2.12',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um usuário recebeu um e-mail suspeito de phishing e encaminhou o código-fonte dos cabeçalhos completos para análise. Ao inspecionar os múltiplos cabeçalhos "Received:" presentes na mensagem, como o analista deve lê-los para identificar o servidor de origem real e verificar se passou na validação SPF/DKIM?',
    options: [
      'Ler os cabeçalhos "Received:" de baixo para cima (do mais antigo/origem para o servidor receptor final) e consultar o cabeçalho "Authentication-Results:" adicionado pelo servidor receptor.',
      'Ler os cabeçalhos "Received:" exclusivamente de cima para baixo porque o servidor de origem sempre aparece na primeira linha do topo.',
      'Confiar apenas no campo "From:" visível no cliente de e-mail porque ele é autenticado automaticamente pelo protocolo POP3.',
      'Validar o campo "Subject:" em conjunto com a porta TCP 143.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. troubleshooting e Item 1.2. SPF/DKIM/DMARC (Eixo 4. Correio eletrônico). Cada MTA adiciona seu Received no TOPO; logo, a origem fica embaixo e Authentication-Results traz o veredito SPF/DKIM/DMARC.',
    correctAnalysis:
      'Como cada MTA ao longo do caminho insere seu cabeçalho "Received:" no topo da mensagem, a trajetória cronológica lê-se de baixo para cima, conferindo o resultado de SPF/DKIM/DMARC em "Authentication-Results:".',
    optionErrors: {
      1: 'Incorreta: o primeiro cabeçalho "Received:" no topo é inserido pelo último servidor receptor (nosso próprio MTA), não pela origem.',
      2: 'Incorreta: o campo "From:" isolado pode ser facilmente forjado sem alinhamento DMARC, e POP3 não autentica remetentes.',
      3: 'Incorreta: assunto e porta IMAP 143 não fornecem trilha de roteamento SMTP nem validação SPF/DKIM.'
    }
  },
]);
