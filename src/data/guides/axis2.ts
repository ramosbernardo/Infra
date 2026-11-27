import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_2: Record<string, StudyGuide> = {
  '2.1.1': {
    itemId: '2.1.1',
    highYieldSummary: [
      'Definição e escopo: dispositivos de segurança de rede implementam controles de inspeção, filtragem, mediação e cifragem entre as camadas 3 e 7 do modelo OSI (Open Systems Interconnection — referência de camadas de rede) no perímetro e em fronteiras internas de segmentação. Combinam firewalls (stateless, stateful e NGFW), sensores/bloqueadores de intrusão (IDS/IPS), proxies (direto e reverso), NAT e túneis VPN para reduzir a superfície de ataque e proteger dados em trânsito.',
      'Firewalls (Packet Filter, Stateful e NGFW): Packet Filter (filtro de pacotes L3/L4 — camadas de Rede e Transporte) avalia cada pacote isoladamente sem estado; Stateful mantém tabela de sessões via 5-tuple (IP origem, IP destino, protocolo, porta origem e porta destino) permitindo o retorno automático; NGFW (Next-Generation Firewall) inspeciona até L7 (Camada de Aplicação) com App-ID (identificação da aplicação independente da porta), IPS (Intrusion Prevention System) integrado, descriptografia TLS/SSL (Transport Layer Security / Secure Sockets Layer) e filtro URL (Uniform Resource Locator).',
      'IDS vs IPS: IDS (Intrusion Detection System) opera passivamente fora de banda (out-of-band via porta SPAN — Switched Port Analyzer, espelhamento no switch — ou TAP — Test Access Point, derivador físico) apenas detectando e gerando alertas; IPS opera em linha (inline), inspecionando e bloqueando/descartando pacotes maliciosos em tempo real.',
      'Métodos de detecção IDS/IPS: Baseado em Assinaturas (alta precisão para ameaças conhecidas, exige atualização constante) vs Anomalias/Heurística (detecta zero-day — ataque que explora vulnerabilidade recém-descoberta sem correção publicada — por desvio de baseline — linha de base do tráfego normal — com maior taxa de falso-positivo).',
      'Proxy (Forward vs Reverse): Forward Proxy intermedia clientes internos rumo à Internet (cache, controle de URL/DLP — Data Loss Prevention, prevenção contra vazamento de dados — e ocultamento dos clientes); Reverse Proxy protege servidores internos recebendo conexões externas (SSL/TLS offloading — terminação criptográfica no proxy — WAF — Web Application Firewall — e balanceamento).',
      'NAT e VPN como controles: NAT (Network Address Translation) traduz endereços privados em públicos (não substitui firewall, mas oculta a topologia interna); VPN (Virtual Private Network) estabelece túneis criptografados garantindo confidencialidade, integridade e autenticação em redes não confiáveis.',
      'Exemplo operacional: na borda de um hospital, o **NGFW** em modo **inline** aplica IPS e App-ID separando a **WAN** da **DMZ**, enquanto um **Reverse Proxy com WAF** publica o portal de exames (`HTTPS TCP 443`) fazendo **TLS offloading** e filtrando injeções **SQL** antes dos servidores internos. Paralelamente, um **IDS** dedicado recebe cópia integral do tráfego do core via porta **SPAN** para gerar alertas no **SIEM** sem introduzir latência nos fluxos clínicos.'
    ],
    technicalReference: [
      'Tipos de Firewall: Stateless (ACL L3/L4) | Stateful (tabela de estados/conntrack) | NGFW (L7 App-ID + IPS + TLS Inspection)',
      'Posicionamento: IDS = out-of-band (SPAN/TAP, sem latência) | IPS = inline (fail-open ou fail-close) | WAF = HTTP/HTTPS L7 (OWASP Top 10)'
    ],
    examTraps: [
      'IDS NÃO bloqueia tráfego diretamente na linha de passagem (quando muito envia TCP RST out-of-band); bloqueio em tempo real é papel do IPS inline.',
      'NAT sozinho NÃO é mecanismo de segurança criptográfica nem substitui regras de filtragem de firewall.',
      'Forward Proxy protege/controla clientes de saída; Reverse Proxy (e WAF) fica diante dos servidores de entrada.'
    ],
    keyTerms: [
      'NGFW (Next-Generation Firewall): firewall com tabela de estados que inspeciona até L7 (App-ID, IPS, TLS e filtro URL)',
      'IDS (Out-of-Band) vs IPS (Inline): sensor passivo ligado em SPAN/TAP (só alerta) versus dispositivo em linha (bloqueia em tempo real)',
      'Forward vs Reverse Proxy: intermediário para saída de clientes internos (Forward) versus fachada protetora para servidores publicados (Reverse)',
      'WAF (Web Application Firewall): firewall L7 especializado em HTTP/HTTPS para mitigar ameaças web como o OWASP Top 10',
      'Fail-Open vs Fail-Close: comportamento de dispositivo inline em pane de hardware — permite passagem direta sem inspeção ou interrompe o enlace'
    ],
    cheatSheet: [
      { topic: 'Packet Filter × Stateful', facts: 'L3/L4 sem estado × state table via 5-tuple (permite retorno automático)' },
      { topic: 'NGFW (L7)', facts: 'App-ID independe de porta · IPS integrado · inspeção TLS · filtro URL' },
      { topic: 'IDS × IPS', facts: 'IDS out-of-band (SPAN/TAP, só alerta/TCP RST) × IPS inline (bloqueia em linha)' },
      { topic: 'Detecção IDS/IPS', facts: 'Assinaturas (ameaça conhecida, menos falso-positivo) × Anomalia/Heurística (zero-day)' },
      { topic: 'Forward × Reverse Proxy', facts: 'saída de clientes (cache, URL, DLP) × entrada de servidores (TLS offload, WAF)' },
      { topic: 'Fail-Open × Fail-Close', facts: 'pane inline: deixa passar sem inspecionar × interrompe o enlace' }
    ]
  },
  '2.1.2': {
    itemId: '2.1.2',
    highYieldSummary: [
      'Definição e escopo: ataques a redes exploram fragilidades de protocolos (L2 a L7), exaustão de recursos, interceptação de tráfego sem cifragem e engenharia social para comprometer disponibilidade, confidencialidade ou integridade. A defesa combina controles de switch em Camada 2, validação de rotas e cabeçalhos em Camada 3/4, criptografia forte em trânsito e proteção de identidade/e-mail na Camada 7.',
      'Spoofing e DNS Spoofing: IP (Internet Protocol) / MAC (Media Access Control) / ARP (Address Resolution Protocol) Spoofing falsificam a origem na rede (mitigados com uRPF — Unicast Reverse Path Forwarding, DAI — Dynamic ARP Inspection — e Port Security — vinculação de MACs por porta); DNS (Domain Name System) Spoofing / Cache Poisoning injeta registros falsos no resolvedor redirecionando vítimas (mitigado por DNSSEC — DNS Security Extensions — e aleatoriedade de porta/TXID — Transaction ID de 16 bits).',
      'DoS, DDoS e Flood: DoS (Denial of Service) parte de uma origem; DDoS (Distributed Denial of Service) usa botnets (redes de dispositivos comprometidos) distribuídas. Ataques clássicos incluem SYN Flood (esgota fila half-open TCP — Transmission Control Protocol — no estado SYN_RECEIVED, mitigado por SYN Cookies), UDP (User Datagram Protocol) / ICMP (Internet Control Message Protocol) Flood e Amplificação DNS/NTP (Network Time Protocol) / Memcached (spoofing do IP da vítima).',
      'Eavesdropping (Sniffing): captura passiva de tráfego em claro — Telnet, FTP (File Transfer Protocol), HTTP (Hypertext Transfer Protocol), SNMPv1/v2c (Simple Network Management Protocol) — neutralizada com criptografia em trânsito via TLS 1.2/1.3, SSH (Secure Shell), IPsec (Internet Protocol Security), SNMPv3 authPriv (com autenticação e cifragem) e segmentação por VLAN (Virtual Local Area Network).',
      'Brute Force e Password Spraying: tentativa exaustiva de senhas em uma conta (Brute Force) ou teste de poucas senhas comuns contra múltiplas contas (Password Spraying); mitigados com MFA (Multi-Factor Authentication), bloqueio progressivo (account lockout), fail2ban e CAPTCHA / rate limiting (limitação de taxa de requisições).',
      'Port Scanning e Phishing: Port Scan — Nmap SYN scan (-sS), Connect (-sT), UDP (-sU) — mapeia portas e serviços expostos antes da exploração; Phishing / Spear Phishing (direcionado) usa engenharia social para roubar credenciais ou entregar payloads (cargas maliciosas), mitigado por SPF (Sender Policy Framework) / DKIM (DomainKeys Identified Mail) / DMARC (Domain-based Message Authentication, Reporting, and Conformance), MFA FIDO2 (padrão resistente a phishing) e conscientização.',
      'Exemplo operacional: em uma rede hospitalar, ativa-se **DHCP Snooping** e **DAI** nos switches de acesso para bloquear **ARP Spoofing**, enquanto **BCP 38 / uRPF** na borda impede que hosts internos enviem pacotes com IP forjado em ataques de amplificação. No servidor web exposto, **SYN Cookies** protegem a fila `SYN_RECEIVED` durante picos anômalos de `SYN` sem esgotar a tabela de sockets.'
    ],
    technicalReference: [
      'Mitigações chave: SYN Flood -> SYN Cookies | ARP Spoofing -> DAI | DNS Poisoning -> DNSSEC | Amplificação -> BCP 38 (uRPF)',
      'Port Scanning (Nmap): -sS (Half-Open SYN sem completar 3-way handshake) | -sT (TCP Connect) | -sU (UDP).'
    ],
    examTraps: [
      'SYN Flood explora o estado SYN_RECEIVED (fila de conexões semiabertas), não conexões ESTABLISHED.',
      'DNS Spoofing altera a resposta/cache DNS sem precisar comprometer o servidor web legítimo.',
      'Eavesdropping é ataque PASSIVO (quebra Confidencialidade); Spoofing e DoS são ataques ATIVOS (integridade/autenticidade e disponibilidade).'
    ],
    keyTerms: [
      'DAI (Dynamic ARP Inspection): recurso L2 do switch que descarta respostas ARP inválidas consultando a tabela de binding do DHCP Snooping',
      'uRPF (Unicast Reverse Path Forwarding): validação L3 (BCP 38) que descarta pacotes cujo IP de origem não é alcançável pela interface de entrada',
      'SYN Cookies: técnica que evita alocar memória para conexões SYN_RECEIVED codificando o estado no número de sequência inicial TCP',
      'Password Spraying: ataque que testa uma senha comum em centenas de contas para contornar bloqueios por tentativas repetidas no mesmo usuário',
      'DNSSEC: extensão criptográfica que assina zonas DNS permitindo ao resolvedor validar autenticidade e integridade dos registros'
    ],
    cheatSheet: [
      { topic: 'Spoofing L2/L3 × DNS', facts: 'ARP/MAC/IP -> DAI, Port Security, uRPF (BCP 38) × DNS Poisoning -> DNSSEC + porta/TXID 16 bits' },
      { topic: 'SYN Flood', facts: 'esgota fila half-open TCP (SYN_RECEIVED, não ESTABLISHED) · mitigação: SYN Cookies' },
      { topic: 'Amplificação DDoS', facts: 'DNS/NTP/Memcached com IP de origem forjado (spoofed) · defesa na origem: BCP 38 (uRPF)' },
      { topic: 'Eavesdropping (passivo)', facts: 'captura em claro (Telnet, FTP, HTTP, SNMPv1/v2c) · defesa: TLS 1.2/1.3, SSH, IPsec, SNMPv3 authPriv' },
      { topic: 'Brute Force × Spraying', facts: 'muitas senhas em 1 conta × 1 senha comum em várias contas · MFA FIDO2 e lockout' },
      { topic: 'Port Scan (Nmap)', facts: '`-sS` Half-Open SYN (sem 3-way handshake) · `-sT` TCP Connect · `-sU` UDP' }
    ]
  },
  '2.1.3': {
    itemId: '2.1.3',
    highYieldSummary: [
      'Definição e escopo: prevenção e tratamento de incidentes compreendem o ciclo estruturado de preparação, detecção, contenção, erradicação, recuperação e aprendizado após eventos adversos de segurança (referência: NIST SP 800-61 Rev. 2 (ciclo clássico; a Rev. 3, de 2025, reorganizou o tema com base no NIST CSF 2.0) e ordem de coleta forense da RFC 3227). Organiza a atuação de equipes CSIRT/SOC para estancar impactos sem destruir evidências voláteis essenciais à investigação.',
      'Ciclo de Tratamento de Incidentes (NIST SP 800-61): 1) Preparação; 2) Detecção e Análise; 3) Contenção, Erradicação e Recuperação; 4) Atividades Pós-Incidente (Lições Aprendidas).',
      'Contenção: isolar o impacto sem destruir evidências voláteis (ex.: isolar host via NAC — Network Access Control — ou EDR — Endpoint Detection and Response, bloquear IP/domínio no firewall/DNS, revogar sessões e tokens) antes de formatar ou reiniciar.',
      'Erradicação e Recuperação: remover a causa raiz — malwares, tarefas agendadas, mecanismos de persistência e backdoors (portas ocultas de acesso) — aplicar patches (correções de vulnerabilidades), rotacionar credenciais e restaurar sistemas validando integridade antes do retorno à produção.',
      'Ordem de Volatilidade (RFC 3227): coletar primeiro registradores e cache de CPU, tabela de roteamento/ARP/processos e RAM (Random Access Memory — dump de memória) antes de disco rígido, logs remotos e backups offline.',
      'CSIRT / SOC e Playbooks: CSIRT (Computer Security Incident Response Team) e SOC (Security Operations Center) executam playbooks (roteiros padronizados) na triagem de alertas de SIEM (Security Information and Event Management) / EDR, correlação de IoCs (Indicators of Compromise — hashes, IPs, domínios), cadeia de custódia com hash SHA-256 (Secure Hash Algorithm de 256 bits) e comunicação formal.',
      'Exemplo operacional: ao detectar execução suspeita de PowerShell e tráfego para domínio C2 no **EDR** de uma estação clínica, o analista do **CSIRT** aciona primeiro o **isolamento de rede via EDR/NAC** mantendo a máquina ligada para capturar o dump de **RAM** e conexões ativas (seguindo a **RFC 3227**). Somente após gerar a imagem forense com hash **SHA-256** realiza-se a erradicação, troca de senhas e validação do retorno.'
    ],
    technicalReference: [
      'Fases NIST SP 800-61: Preparação -> Detecção e Análise -> Contenção / Erradicação / Recuperação -> Pós-Incidente (Lições Aprendidas)',
      'Volatilidade (RFC 3227): Memória RAM / Conexões de Rede / Processos (mais volátil) -> Disco / Logs -> Fitas/Backups (menos volátil).'
    ],
    examTraps: [
      'Reiniciar ou formatar um servidor infectado logo na detecção destrói a memória RAM (evidência mais volátil) e impede descobrir o vetor de ataque.',
      'Contenção precede Erradicação: primeiro estanca-se a propagação (isolar), depois limpa-se a raiz.',
      'Pós-incidente não é apenas fechar chamado: gera lições aprendidas, novas assinaturas SIEM/EDR e revisão de controles.'
    ],
    keyTerms: [
      'Ordem de Volatilidade (RFC 3227): prioridade forense que exige capturar RAM, processos e conexões antes de discos e mídias offline',
      'Contenção vs Erradicação: isolamento imediato da propagação do incidente versus remoção definitiva da causa raiz e persistência',
      'Cadeia de Custódia: registro documentado de posse, manuseio e integridade (hash SHA-256) das evidências coletadas',
      'IoCs (Indicators of Compromise): artefatos observáveis de intrusão como hashes maliciosos, IPs externos, domínios e chaves de registro',
      'EDR (Endpoint Detection and Response): agente de telemetria e resposta capaz de conter processos e isolar o host na rede em segundos'
    ],
    cheatSheet: [
      { topic: 'Ciclo NIST SP 800-61', facts: '1) Preparação · 2) Detecção e Análise · 3) Contenção, Erradicação, Recuperação · 4) Pós-Incidente' },
      { topic: 'Contenção × Erradicação', facts: 'isolar impacto (NAC/EDR/firewall) antes × remover causa raiz, persistência e patches depois' },
      { topic: 'Volatilidade (RFC 3227)', facts: 'registradores/cache -> processos/rede -> RAM -> disco/logs -> backups offline' },
      { topic: 'Erro fatal na triagem', facts: 'reiniciar ou formatar ao detectar apaga RAM e destrói vetor de ataque' },
      { topic: 'Cadeia de custódia', facts: 'hash SHA-256 · registro de posse/manuseio · correlação de IoCs no SIEM/EDR' }
    ]
  },
  '2.2.1': {
    itemId: '2.2.1',
    highYieldSummary: [
      'Definição e escopo: plataformas NGFW/UTM corporativas — como FortiGate (sistema FortiOS) e Check Point (sistema Gaia) — concentram inspeção stateful L3/L4, segurança L7, VPN e roteamento em appliances físicos, virtuais ou em nuvem. Resolvem a complexidade de operar múltiplos controles dispersos mantendo desempenho previsível por meio de planos separados de gerência e processamento acelerado.',
      'FortiGate (FortiOS) e Check Point (Gaia/SmartConsole): soluções NGFW (Next-Generation Firewall) / UTM (Unified Threat Management — gerenciamento unificado de ameaças) corporativas que unificam firewall stateful, NAT (Network Address Translation), VPN (Virtual Private Network) IPsec/SSL, IPS (Intrusion Prevention System), antivírus, Web Filtering e Application Control.',
      'Arquitetura de processamento: FortiGate acelera tráfego com ASICs (Application-Specific Integrated Circuits) dedicados — SPU (Security Processing Unit): NP (Network Processor) para rede/IPsec e CP (Content Processor) para conteúdo e TLS (Transport Layer Security); Check Point separa o Security Gateway (plano de dados) do Security Management Server (SMS — plano de gerenciamento administrado via cliente SmartConsole).',
      'Modos de inspeção: Flow-based (baixa latência, inspeciona pacotes em fluxo sem buffer completo) vs Proxy-based (remonta o payload completo permitindo inspeção profunda e substituição de conteúdo HTTP — Hypertext Transfer Protocol — e SMTP — Simple Mail Transfer Protocol).',
      'SD-WAN e UTM integrados: SD-WAN (Software-Defined Wide Area Network) realiza roteamento inteligente por SLA (Service Level Agreement — acordo de nível de serviço: latência, jitter — variação de atraso — e perda de pacotes) combinado com perfis de segurança (Security Profiles / Threat Prevention) aplicados nas políticas.',
      'Virtualização lógica: VDOMs (Virtual Domains no FortiGate) e VSX (Virtual System Extension no Check Point) particionam um appliance físico em múltiplos firewalls virtuais isolados com tabelas de roteamento e políticas independentes.',
      'Exemplo operacional: em uma rede com duas operadoras de Internet, o **SD-WAN** monitora `latência < 40 ms` e `perda < 1%` entre os links para priorizar tráfego clínico crítico, enquanto o modo **Flow-based** aplica perfis **IPS** e **Application Control** nas regras gerais e reserva **Proxy-based** para inspeção granular de anexos **SMTP** na **DMZ**. Em topologia segregada, **VDOMs** distintos isolam a rede assistencial da rede de pesquisa.'
    ],
    technicalReference: [
      'Check Point: SmartConsole (GUI) -> Security Management Server (SMS) -> Policy Install -> Security Gateway (Gaia)',
      'FortiGate: CLI FortiOS | VDOMs (Virtual Domains) | Flow-based vs Proxy-based | Interfaces físicas, VLANs, Zone e SD-WAN.'
    ],
    examTraps: [
      'Em Check Point, editar uma regra no SmartConsole NÃO entra em vigor até executar "Install Policy" no Security Gateway.',
      'VDOM (FortiGate) e VSX (Check Point) virtualizam firewalls independentes no mesmo hardware (equivalente a VRFs + políticas).',
      'Inspeção Proxy-based consome mais memória/CPU e adiciona leve latência em relação ao modo Flow-based.'
    ],
    keyTerms: [
      'SPU (NP / CP): processadores ASIC dedicados em FortiGate que aceleram encaminhamento/IPsec (NP) e inspeção de conteúdo/TLS (CP)',
      'SMS vs Security Gateway (Check Point): servidor central que armazena e compila políticas (SMS via SmartConsole) versus nó que filtra pacotes (Gateway)',
      'Flow-based vs Proxy-based: inspeção em fluxo pacote a pacote (menor latência) versus remontagem completa do payload em buffer (maior profundidade)',
      'VDOM / VSX: virtualização de múltiplos firewalls lógicos independentes dentro de um único equipamento físico',
      'SD-WAN por SLA: seleção dinâmica de enlaces baseada em métricas medidas em tempo real (latência, jitter e perda de pacotes)'
    ],
    cheatSheet: [
      { topic: 'ASICs FortiGate (SPU)', facts: 'NP (Network Processor: rede e IPsec) · CP (Content Processor: conteúdo e TLS)' },
      { topic: 'Arquitetura Check Point', facts: 'SmartConsole (GUI) -> SMS (gerência) -> Install Policy -> Security Gateway (Gaia)' },
      { topic: 'Flow-based × Proxy-based', facts: 'pacote a pacote (menor latência) × remonta payload em buffer (inspeção L7 profunda)' },
      { topic: 'Virtualização de firewall', facts: 'VDOM (FortiGate) × VSX (Check Point) · tabelas de rotas e políticas independentes' },
      { topic: 'SD-WAN por SLA', facts: 'escolha dinâmica de enlace por métricas medidas: latência, jitter e perda de pacotes' }
    ]
  },
  '2.2.2': {
    itemId: '2.2.2',
    highYieldSummary: [
      'Definição e escopo: o núcleo de atuação do firewall corporativo baseia-se na inspeção com estado (stateful inspection, L3/L4) combinada ao isolamento por zonas de confiança (LAN, DMZ, WAN), validação anti-spoofing e descriptografia TLS na fronteira. Garante controle bidirecional previsível das sessões enquanto restringe o movimento lateral caso um serviço exposto seja comprometido.',
      'Inspeção Stateful: rastreia o estado das sessões na tabela de estados — SYN (Synchronize) -> ESTABLISHED -> FIN (Finish) / timeout — permitindo automaticamente os pacotes de retorno sem exigir regra inversa explícita.',
      'Zonas e Interfaces: agrupam interfaces com mesmo nível de confiança — ex.: LAN (Local Area Network), WAN (Wide Area Network), DMZ (Demilitarized Zone), Guest — aplicando regras entre origem e destino (Interface/Zone + Endereço + Serviço + Ação).',
      'DMZ (Zona Desmilitarizada): sub-rede intermediária isolada para servidores expostos — Web, SMTP (Simple Mail Transfer Protocol) Relay, Reverse Proxy (proxy reverso para servidores publicados) — impedindo que um servidor comprometido acesse diretamente a LAN interna.',
      'Inspeção TLS/SSL (Deep Packet Inspection): o firewall atua como proxy confiável usando uma CA (Certificate Authority — Autoridade Certificadora) interna instalada nas estações para inspecionar cargas HTTPS (Hypertext Transfer Protocol Secure) contra malware e vazamento de dados (DLP — Data Loss Prevention).',
      'Proteções DoS e RPF: Anti-Spoofing por RPF (Reverse Path Forwarding — em modo estrito, verifica se a rota de retorno ao IP de origem sai pela mesma interface de entrada) descarta pacotes forjados; políticas de DoS (Denial of Service) limitam taxas de sessões por IP.',
      'Exemplo operacional: um portal web publicado na **DMZ** recebe conexões `WAN -> DMZ` exclusivamente em `TCP 443`, enquanto o tráfego `DMZ -> LAN` é bloqueado por padrão e liberado apenas para o IP do banco clínico em `TCP 1433`. Caso um pacote chegue pela interface `WAN` alegando IP de origem da rede interna `10.10.0.0/16`, o controle **Anti-Spoofing (RPF)** descarta-o antes mesmo de consultar as políticas.'
    ],
    technicalReference: [
      'Fluxo típico de pacote no NGFW: Anti-Spoofing (RPF) -> DNAT/VIP -> Roteamento -> Firewall Policy (L3/L4) -> Security Profiles (IPS/AV/App/URL) -> SNAT -> Saída',
      'Zonas padrão: LAN (Trusted) | DMZ (Semi-trusted) | WAN (Untrusted) — fluxo WAN->DMZ permitido só nas portas publicadas; DMZ->LAN bloqueado ou restrito.'
    ],
    examTraps: [
      'Firewall stateful exige regra apenas no sentido de INÍCIO da conexão; o retorno compatível com a sessão é autorizado pela state table.',
      'Servidores na DMZ não devem iniciar conexões irrestritas para a LAN interna (se precisarem falar com BD na LAN, liberar apenas IP e porta exata do BD).',
      'Sem instalar o certificado raiz da CA do firewall nos clientes, a inspeção HTTPS profunda gera erro de certificado no navegador.'
    ],
    keyTerms: [
      'Stateful Inspection: filtragem que armazena tuplas e estados TCP na state table, liberando o tráfego de retorno correspondente',
      'DMZ (Demilitarized Zone): zona de confiança intermediária que isola servidores expostos à Internet da rede interna (LAN)',
      'Zonas de Segurança: agrupamentos lógicos de interfaces com política comum para simplificar regras entre domínios de confiança',
      'TLS Inspection (DPI): interceptação autorizada de tráfego cifrado com certificado de CA interna confiável para aplicar IPS/AV/DLP no conteúdo',
      'Anti-Spoofing (Strict RPF): descarte imediato de pacotes cujo endereço de origem não corresponde à rota válida daquela interface'
    ],
    cheatSheet: [
      { topic: 'Stateful Inspection', facts: 'state table (SYN -> ESTABLISHED -> FIN) libera tráfego de retorno sem regra inversa' },
      { topic: 'Zonas de confiança', facts: 'LAN (Trusted) · DMZ (Semi-trusted) · WAN (Untrusted) · WAN->DMZ só portas publicadas' },
      { topic: 'Isolamento da DMZ', facts: 'DMZ -> LAN bloqueada por padrão · se acessar BD, liberar só IP e porta exatos' },
      { topic: 'Inspeção TLS (DPI)', facts: 'CA raiz interna instalada nos clientes · evita alerta de certificado no navegador' },
      { topic: 'Anti-Spoofing (Strict RPF)', facts: 'descarta pacote se rota de retorno ao IP origem não sair pela mesma interface de entrada' }
    ]
  },
  '2.2.3': {
    itemId: '2.2.3',
    highYieldSummary: [
      'Definição e escopo: NAT (Network Address Translation — RFCs 2663 e 3022) opera na camada 3/4 reescrevendo endereços IP e portas TCP/UDP nos limites entre redes privadas (RFC 1918) e redes públicas ou interconexões com endereçamento sobreposto. Resolve a escassez de IPv4 público na saída (SNAT/PAT) e permite publicar serviços internos hospedados em IPs privados (DNAT/VIP).',
      'SNAT (Source NAT) / Masquerade / PAT: reescreve o IP — e a porta no PAT (Port Address Translation) / NAPT (Network Address Port Translation) — de ORIGEM ao sair da rede privada RFC 1918 (faixas 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16) para a Internet usando o IP público da interface (Masquerade) ou um pool configurado.',
      'DNAT (Destination NAT) / Port Forwarding / VIP: reescreve o IP (e opcionalmente a porta) de DESTINO na entrada (WAN — Wide Area Network — para DMZ — Demilitarized Zone) utilizando um objeto VIP (Virtual IP) para publicar serviços internos com IP privado.',
      'NAT Estático (1:1) vs Dinâmico vs PAT (Overload): NAT Estático mapeia 1 IP privado fixo a 1 IP público; NAT Dinâmico usa pool 1:1 temporário; PAT multiplexa milhares de sessões privadas em um único IP público variando as portas de origem.',
      'NAT Traversal e Hairpin NAT (NAT Loopback): Hairpin NAT permite que usuários na LAN (Local Area Network) acessem um servidor interno usando seu IP público externo; protocolos como SIP (Session Initiation Protocol) e FTP (File Transfer Protocol) embutem IPs privados no payload L7 (Camada de Aplicação), exigindo atenção a ALG (Application Layer Gateway) ou mecanismos de travessia.',
      'Ordem lógica no firewall: DNAT (VIP) ocorre ANTES da consulta de roteamento e da avaliação da política (fazendo com que a regra utilize o IP privado traduzido em firewalls como Check Point/Central NAT ou o objeto VIP em Policy NAT do FortiGate); SNAT ocorre na saída.',
      'Exemplo operacional: estações da rede interna `10.20.0.0/22` acessam a Internet via **PAT/Masquerade** saindo pelo IP público `200.10.5.2`, diferenciadas por portas efêmeras (ex.: `10.20.1.15:51422 -> 200.10.5.2:51422`). Na entrada, um **VIP (DNAT)** mapeia `200.10.5.10:443` para `172.16.50.10:8443` na **DMZ**, permitindo publicar o portal de agendamento sem expor a porta administrativa diretamente.'
    ],
    technicalReference: [
      'SNAT/PAT: altera IP/porta de ORIGEM (LAN -> WAN) | DNAT/VIP: altera IP/porta de DESTINO (WAN -> DMZ)',
      'FortiGate Central NAT vs Policy NAT: Central NAT separa tabela SNAT/DNAT das políticas; Policy NAT configura SNAT/VIP direto na regra.'
    ],
    examTraps: [
      'SNAT altera origem (saída); DNAT altera destino (entrada/publicação). Bancas invertem os dois conceitos frequentemente.',
      'Sem IP público suficiente para 1:1, o PAT/Overload diferencia múltiplas conexões simultâneas pelo número da PORTA de origem.',
      'No Check Point/FortiGate, atenção à ordem de processamento: se DNAT ocorre antes da política, verificar se a política referencia o IP traduzido ou o objeto VIP.'
    ],
    keyTerms: [
      'SNAT vs DNAT: tradução do endereço/porta de origem na saída (SNAT) versus tradução do endereço/porta de destino na entrada (DNAT)',
      'PAT / Overload (NAPT): multiplexação de múltiplos clientes privados em um único IP público diferenciando sessões pelas portas TCP/UDP',
      'VIP (Virtual IP / Port Forwarding): objeto de DNAT que mapeia um IP/porta público externo para um servidor privado interno',
      'Hairpin NAT (NAT Loopback): tradução dupla que permite a um cliente na LAN alcançar um servidor interno pelo seu IP público',
      'ALG (Application Layer Gateway): módulo que inspeciona e reescreve IPs embutidos no payload L7 (ex.: FTP/SIP) ao atravessar NAT'
    ],
    cheatSheet: [
      { topic: 'SNAT / PAT (saída)', facts: 'altera IP/porta de ORIGEM (LAN RFC 1918 -> WAN) · PAT multiplexa sessões por porta' },
      { topic: 'DNAT / VIP (entrada)', facts: 'altera IP/porta de DESTINO (WAN -> DMZ) · publica serviço privado com Virtual IP' },
      { topic: 'Estático × Dinâmico × PAT', facts: '1:1 fixo × pool 1:1 temporário × N:1 via portas efêmeras (Overload/Masquerade)' },
      { topic: 'Ordem no firewall', facts: 'DNAT (VIP) ocorre ANTES de roteamento e política · SNAT ocorre na saída' },
      { topic: 'Hairpin NAT × ALG', facts: 'LAN acessa servidor interno via IP público × ALG reescreve IPs no payload L7 (SIP/FTP)' }
    ]
  },
  '2.2.4': {
    itemId: '2.2.4',
    highYieldSummary: [
      'Definição e escopo: políticas de firewall e ACLs (Access Control Lists — listas de controle de acesso) materializam a matriz de comunicação autorizada entre zonas, redes, usuários e aplicações na Camada 3/4 e Camada 7. Aplicam o princípio do menor privilégio mediante avaliação ordenada de cima para baixo (top-down) e negação padrão implícita no fim da base.',
      'Avaliação Top-Down (First Match): políticas/ACLs de firewall são avaliadas estritamente de cima para baixo; a PRIMEIRA regra que casa todos os critérios é aplicada e interrompe a leitura das seguintes.',
      'Implicit Deny (Negação Implícita): ao final de toda tabela de políticas existe uma regra implícita de DROP/DENY ALL — tudo que não for explicitamente permitido é bloqueado (princípio do menor privilégio).',
      'Critérios de correspondência (Tuple): Interface/Zona origem e destino + Endereços em IP, FQDN (Fully Qualified Domain Name) ou GeoIP (geolocalização por IP) + Usuários/Grupos + Serviços/Portas + Aplicações (L7) + Agendamento + Ação (Accept/Deny/Drop/Reject).',
      'Drop vs Reject: Drop descarta silenciosamente sem responder (preferido na WAN contra port scan); Reject devolve ICMP (Internet Control Message Protocol) Unreachable ou TCP (Transmission Control Protocol) RST (Reset), útil na LAN para evitar timeouts longos.',
      'Boas práticas de governança: regras mais específicas no topo e mais genéricas abaixo; evitar "Any/Any/Accept"; habilitar log na regra Deny implícita (ou Cleanup Rule explícita) para troubleshooting e remover regras órfãs sem hit count (contador de correspondências).',
      'Exemplo operacional: para restringir acesso administrativo à interface de gerência de switches (`10.99.0.0/24` na porta `TCP 22`), posiciona-se a **regra 1** permitindo apenas a sub-rede de administração (`10.50.1.0/24`) com `Accept` e log ativo, seguida pela **regra 2** negando (`Drop`) o restante da LAN para `10.99.0.0/24`, antes da regra ampla `LAN -> WAN`. Na borda externa, a **Cleanup Rule** no rodapé registra em log tudo que atinge o `Implicit Deny`.'
    ],
    technicalReference: [
      'Ordem obrigatória: Regras específicas (exceções/hosts/portas) no TOPO -> Regras gerais -> Implicit Deny (Drop) no FINAL',
      'Ações: Accept/Allow | Drop (silencioso) | Reject (envia ICMP unreachable / TCP RST).'
    ],
    examTraps: [
      'Colocar uma regra ampla de Accept acima de uma regra específica de Deny anula completamente o bloqueio, pois o firewall para no primeiro match.',
      'Implicit Deny padrão muitas vezes não gera logs até ser explicitada uma regra Cleanup/Catch-all com logging ativado.',
      'Em firewalls stateful, não crie regras "Any -> Any" para liberar tráfego de retorno.'
    ],
    keyTerms: [
      'First Match (Top-Down): algoritmo de avaliação sequencial que aplica a primeira política coincidente e encerra a verificação das demais',
      'Implicit Deny: negação implícita ao fim da base de regras que descarta qualquer tráfego não autorizado explicitamente',
      'Drop vs Reject: descarte silencioso sem resposta (Drop, ideal na WAN) versus envio de TCP RST ou ICMP Unreachable (Reject, evita espera na LAN)',
      'Cleanup Rule: regra explícita de bloqueio total no final da política criada para forçar registro de logs do tráfego rejeitado',
      'Hit Count: contador de ativações de uma regra usado em auditorias para identificar políticas obsoletas ou sombreadas'
    ],
    cheatSheet: [
      { topic: 'Avaliação Top-Down', facts: 'leitura de cima para baixo · para no PRIMEIRO match (regra específica no topo)' },
      { topic: 'Implicit Deny', facts: 'regra final padrão de DROP ALL · sem Cleanup Rule com log, não registra bloqueios' },
      { topic: 'Critérios (Tuple)', facts: 'zona/interface · IP/FQDN/GeoIP · usuário/grupo · porta · App-ID (L7) · schedule' },
      { topic: 'Drop × Reject', facts: 'descarta em silêncio (preferido na WAN) × envia ICMP Unreachable ou TCP RST (LAN)' },
      { topic: 'Auditoria e stateful', facts: 'remover regras sem Hit Count · evitar Any/Any · não criar regra de retorno em stateful' }
    ]
  },
  '2.2.5': {
    itemId: '2.2.5',
    highYieldSummary: [
      'Definição e escopo: o subsistema de logs e auditoria registra eventos de tráfego, detecção de ameaças e alterações administrativas gerados pelo NGFW (Next-Generation Firewall), centralizando-os via Syslog ou coletores dedicados em plataformas SIEM. Garante rastreabilidade para troubleshooting, correlação forense sincronizada por NTP e conformidade regulatória.',
      'Tipos de Logs no NGFW: Traffic Logs (conexões permitidas/bloqueadas, bytes, duração, NAT), Security/Threat Logs — IPS (Intrusion Prevention System), AV (Antivírus), Web Filter, App Control — e Event/System Logs (login administrativo, alterações de configuração, HA — High Availability — e túneis VPN).',
      'Syslog e SIEM: envio em tempo real de eventos via Syslog — UDP (User Datagram Protocol) / TCP (Transmission Control Protocol) porta 514 ou TLS (Transport Layer Security) TCP porta 6514 (formato RFC 5424 e transporte TLS RFC 5425) — para coletor central/SIEM (Security Information and Event Management, ou FortiAnalyzer / Check Point Log Server) evitando perda caso o firewall falhe.',
      'Retenção e Sincronismo NTP: logs locais em disco/RAM (Random Access Memory) são limitados e cíclicos; sincronização via NTP (Network Time Protocol — UDP 123) é obrigatória para correlação forense precisa entre firewall, AD (Active Directory), switches e servidores.',
      'Impacto e granularidade: logar "All Sessions" em políticas de alto volume consome CPU (Central Processing Unit) / I/O (Input/Output em disco) e espaço; "Security Events Only" ou logging seletivo otimizam performance mantendo visibilidade de ameaças e bloqueios.',
      'Auditoria e Compliance: trilhas de auditoria imutáveis registram quem alterou regras (Change Control), tentativas de login falhas e sessões bloqueadas para resposta a incidentes e atendimento à LGPD (Lei Geral de Proteção de Dados — Lei nº 13.709/2018).',
      'Exemplo operacional: os firewalls da borda sincronizam o relógio com o servidor **NTP interno (`UDP 123`)** em `10.1.0.10` e encaminham logs cifrados via **Syslog TLS (`TCP 6514`)** para o **SIEM** corporativo. Na regra geral de navegação `LAN -> WAN`, configura-se logging de **Security Events** para poupar I/O, mantendo **All Sessions** habilitado nas regras críticas de **DMZ** e na regra **Cleanup/Deny**.'
    ],
    technicalReference: [
      'Protocolos: Syslog UDP/TCP 514 | Syslog TLS 6514 | NTP UDP 123 (obrigatório para timestamps consistentes)',
      'Campos essenciais de log: Timestamp, Src IP/Port, Dst IP/Port, NAT IP/Port, Protocolo, Policy ID, Action (accept/deny), Bytes Sent/Rcvd, Threat/App.'
    ],
    examTraps: [
      'Logs em memória RAM (memory logging) são perdidos no reboot — ambiente corporativo exige envio externo (Syslog/SIEM/Log Server).',
      'Sem NTP sincronizado entre firewall, AD e SIEM, a correlação cronológica de incidentes falha.',
      'Logar "All Sessions" vs "Security Events": em tráfego de alto volume sem coletor externo, disco local lota ou sobrescreve rapidamente.'
    ],
    keyTerms: [
      'Traffic vs Security vs Event Logs: registros de sessões L3/L4 (Traffic), bloqueios L7/ameaças (Security) e ações administrativas/HA (Event)',
      'Syslog TLS (TCP 6514): envio cifrado de logs segundo a RFC 5425 (formato RFC 5424), substituindo o transporte em claro na porta 514',
      'SIEM (Security Information and Event Management): plataforma que agrega, normaliza e correlaciona eventos de múltiplos ativos em tempo real',
      'NTP (UDP 123): protocolo de sincronização horária indispensável para correlacionar timestamps em investigações de incidentes',
      'All Sessions vs Security Events: modos de granularidade que equilibram rastreabilidade total contra consumo de CPU, I/O e armazenamento'
    ],
    cheatSheet: [
      { topic: 'Tipos de Logs', facts: 'Traffic (L3/L4, NAT, bytes) · Security/Threat (IPS, AV, Web, App) · Event (admin, HA, VPN)' },
      { topic: 'Portas Syslog', facts: 'UDP/TCP 514 (claro) · TCP 6514 (Syslog TLS RFC 5425 / formato RFC 5424)' },
      { topic: 'Sincronismo NTP', facts: 'UDP 123 obrigatório entre firewall, AD e SIEM para correlação cronológica forense' },
      { topic: 'Memória × Coletor externo', facts: 'logs em RAM somem no reboot · SIEM/FortiAnalyzer/Log Server garante retenção' },
      { topic: 'All Sessions × Security Events', facts: 'toda sessão L3/L4 (alto I/O e disco) × só ameaças/bloqueios (poupa CPU)' }
    ]
  },
  '2.2.6': {
    itemId: '2.2.6',
    highYieldSummary: [
      'Definição e escopo: clusters de Alta Disponibilidade (HA — High Availability) agrupam dois ou mais firewalls idênticos sob endereços IP e MAC virtuais compartilhados (ex.: FortiGate FGCP — FortiGate Clustering Protocol — e Check Point ClusterXL via protocolo CCP — Cluster Control Protocol). Eliminam pontos únicos de falha na borda mantendo sessões TCP e túneis IPsec ativos durante manutenção ou pane de hardware.',
      'Modos de Cluster HA: Ativo-Passivo (1 nó processa todo o tráfego e o secundário fica em standby pronto para assumir) vs Ativo-Ativo (distribuição de sessões ou inspeção entre nós, exigindo dimensionamento para suportar 100% da carga na queda de 1 nó).',
      'Sincronismo de Estado (State Sync) e Config: links dedicados de Heartbeat (sinalização contínua de saúde entre membros) / Sync replicam configurações em tempo real, a tabela de sessões ativas e chaves IPsec (Internet Protocol Security), garantindo failover (comutação automática para o nó sobrevivente) transparente sem derrubar conexões TCP.',
      'Critérios de Eleição do Primário: verificação do estado das interfaces monitoradas (Port Monitoring / Link Health), tempo de atividade (uptime), prioridade configurada (Override habilitado ou não) e Serial Number.',
      'Prevenção de Split-Brain: uso de pelo menos 2 interfaces de Heartbeat dedicadas (redundância) evitando Split-Brain (cenário em que perda de comunicação faz ambos os nós assumirem o papel ativo simultaneamente, gerando conflito de IP/MAC — Media Access Control — virtual).',
      'Protocolos de redundância e endereçamento: membros compartilham um MAC virtual e IP virtual — Cluster VIP (Virtual IP compartilhado) — para que switches e roteadores não percebam troca de gateway após o failover mediante envio de Gratuitous ARP (anúncio ARP não solicitado que atualiza as tabelas MAC vizinhas).',
      'Exemplo operacional: dois appliances em cluster **Ativo-Passivo** são interligados por duas interfaces dedicadas de **Heartbeat/Sync (`ha1` e `ha2`)** e monitoram as portas `WAN` e `LAN`. Se o switch ligado à `WAN` do primário cair, o **Port Monitoring** rebaixa sua elegibilidade, o secundário assume o **Cluster VIP** (`10.0.0.1`) e o **MAC virtual**, dispara **Gratuitous ARP** aos switches core e mantém as sessões de prontuário eletrônicos ativas via **State Sync**.'
    ],
    technicalReference: [
      'FortiGate FGCP: Ativo-Passivo (padrão recomendado) ou Ativo-Ativo | Heartbeat dedicado | Override desativado por padrão (evita flapping)',
      'Check Point ClusterXL: High Availability (Ativo-Standby) ou Load Sharing (Ativo-Ativo) | Protocolo CCP | State Sync.'
    ],
    examTraps: [
      'Cluster Ativo-Ativo NÃO dobra a capacidade segura: se cada nó rodar a 80% de CPU, a queda de 1 derruba o restante por sobrecarga (regra dos 50%).',
      'Habilitar "Override" sem cuidado força volta imediata do primário após reboot, podendo gerar interrupção desnecessária se o nó ainda estiver instável.',
      'State Sync só replica sessões se o link de sincronismo estiver ativo e em baixa latência.'
    ],
    keyTerms: [
      'Ativo-Passivo vs Ativo-Ativo: modelo com nó standby exclusivo versus distribuição de carga respeitando margem máxima de 50% por nó',
      'State Sync: replicação contínua da tabela de conexões e associações IPsec entre os membros para failover sem queda de sessões',
      'Heartbeat: enlace dedicado que transporta sinais de vida, estado e sincronismo de configuração entre firewalls do cluster',
      'Split-Brain: condição crítica em que falha nos links de heartbeat faz ambos os nós responderem simultaneamente pelo mesmo VIP',
      'Gratuitous ARP: pacote ARP transmitido pelo novo nó ativo para atualizar rapidamente a tabela MAC nos switches conectados'
    ],
    cheatSheet: [
      { topic: 'Ativo-Passivo × Ativo-Ativo', facts: '1 nó ativo + standby × carga dividida (regra dos 50%: cada nó suporta 100% na queda)' },
      { topic: 'FGCP × ClusterXL', facts: 'FortiGate (FGCP, Override off por padrão) × Check Point (ClusterXL via protocolo CCP)' },
      { topic: 'State Sync e Heartbeat', facts: 'links dedicados (mín. 2) replicam config, state table e chaves IPsec sem derrubar TCP' },
      { topic: 'Prevenção de Split-Brain', facts: 'dupla interface de Heartbeat evita dois nós assumirem o mesmo VIP/MAC virtual' },
      { topic: 'Comutação L2 (VIP/MAC)', facts: 'novo ativo envia Gratuitous ARP para atualizar tabelas MAC dos switches vizinhos' }
    ]
  },
  '2.2.7': {
    itemId: '2.2.7',
    highYieldSummary: [
      'Definição e escopo: IPsec (Internet Protocol Security — RFCs 4301 a 4309) é uma arquitetura aberta de segurança na Camada 3 (Rede) que protege todo tráfego IP entre gateways (VPN Site-to-Site) ou entre dispositivos e gateways (Remote Access). Resolve a exposição de dados em redes públicas provendo confidencialidade, integridade, autenticação de origem e proteção contra reenvio (anti-replay) independentemente das aplicações.',
      'Arquitetura IPsec (Camada 3): suíte de padrões abertos (RFCs — Request for Comments — 4301–4309) que fornece confidencialidade, integridade, autenticação de origem e proteção contra replay entre gateways (Site-to-Site) ou hosts (Remote Access).',
      'Protocolos AH vs ESP: AH (Authentication Header, IP Protocol 51) autentica e garante integridade do pacote inteiro — incluindo campos imutáveis do cabeçalho IP externo — mas NÃO criptografa e quebra com NAT (Network Address Translation); ESP (Encapsulating Security Payload, IP Protocol 50) provê criptografia AES-GCM (Advanced Encryption Standard — Galois/Counter Mode, cifra autenticada) / AES-CBC (Cipher Block Chaining) + integridade/autenticação e suporta NAT via NAT-T (NAT Traversal em UDP 4500).',
      'Modos de Operação: Modo Túnel (com ESP, criptografa todo o pacote IP original e adiciona novo cabeçalho IP externo — padrão para Site-to-Site entre firewalls) vs Modo Transporte (mantém cabeçalho IP original e protege apenas o payload L4+ — usado host-to-host ou encapsulando GRE — Generic Routing Encapsulation).',
      'Algoritmos modernos recomendados: Criptografia AES-GCM como AEAD (Authenticated Encryption with Associated Data) ou AES-CBC, evitando DES / 3DES (Data Encryption Standard / Triple DES); Integridade/Hash SHA-256/SHA-384/SHA-512 (Secure Hash Algorithm), evitando MD5 (Message-Digest Algorithm 5) / SHA-1; Troca de chaves Diffie-Hellman (DH) grupos >= 14 ou ECDH (Elliptic-Curve Diffie-Hellman) grupos 19/20/21.',
      'Anti-Replay e PFS (Perfect Forward Secrecy): tanto o AH (RFC 4302) quanto o ESP (RFC 4303) possuem número de sequência anti-replay de 32 bits (ou 64 bits com ESN — Extended Sequence Numbers, RFC 4304) verificado por janela deslizante (sliding window) no receptor para impedir reinjeção de pacotes capturados; PFS força nova troca Diffie-Hellman na Phase 2 garantindo que comprometer uma chave não exponha sessões passadas.',
      'Exemplo operacional: na interligação Site-to-Site entre a matriz (`10.10.0.0/16`) e a unidade ambulatorial (`10.20.0.0/16`) atravessando Internet pública, os firewalls estabelecem túnel **ESP (IP 50) em Modo Túnel** com `AES-256-GCM` e **PFS DH Grupo 14**. Quando o gateway da filial está atrás de um roteador da operadora fazendo NAT, o tráfego ESP passa encapsulado em **UDP 4500 (NAT-T)** sem quebrar a autenticação do pacote.'
    ],
    technicalReference: [
      'Protocolos IP: ESP = IP Protocol 50 | AH = IP Protocol 51 | NAT-T = UDP 4500 (encapsula ESP em UDP quando há NAT no caminho)',
      'Modos e Anti-Replay: Túnel (novo IP header) | Transporte (mantém IP header original) | AH e ESP: Sequence Number 32 bits (64 bits ESN) + janela deslizante.'
    ],
    examTraps: [
      'AH (IP 51) NÃO criptografa os dados e NÃO funciona através de NAT porque protege campos mutáveis do cabeçalho IP.',
      'Pegadinha clássica: o número de sequência anti-replay com janela deslizante NÃO é exclusivo do ESP — tanto AH quanto ESP implementam esse campo (32 bits padrão ou 64 bits com ESN).',
      'ESP (IP 50) é protocolo de camada 3 (não usa porta TCP/UDP, salvo quando encapsulado em UDP 4500 pelo NAT-T); Site-to-Site entre firewalls usa Modo TÚNEL por padrão.'
    ],
    keyTerms: [
      'ESP (IP 50) vs AH (IP 51): encapsulamento com criptografia e suporte a NAT-T (ESP) versus apenas autenticação/integridade incompatível com NAT (AH)',
      'Modo Túnel vs Modo Transporte: adição de novo cabeçalho IP externo encapsulando todo pacote original (Túnel) versus preservação do IP original (Transporte)',
      'NAT-T (UDP 4500): encapsulamento de pacotes ESP em datagramas UDP para atravessar dispositivos NAT intermediários',
      'PFS (Perfect Forward Secrecy): geração de nova chave DH na Phase 2 evitando comprometimento retroativo caso a chave da Phase 1 vaze',
      'Janela Deslizante Anti-Replay: mecanismo em AH e ESP baseado em Sequence Number (32/64 bits) que rejeita pacotes duplicados ou atrasados fora da janela'
    ],
    cheatSheet: [
      { topic: 'ESP × AH (Camada 3)', facts: 'ESP (IP 50): cifra + autentica, aceita NAT-T × AH (IP 51): só autentica, quebra com NAT' },
      { topic: 'Modo Túnel × Transporte', facts: 'novo cabeçalho IP externo (Site-to-Site) × mantém IP original (host-to-host ou GRE)' },
      { topic: 'NAT-T', facts: 'UDP 4500 encapsula ESP em datagramas UDP ao detectar NAT no caminho' },
      { topic: 'Criptografia recomendada', facts: 'AES-GCM (AEAD) ou AES-CBC + SHA-256/384/512 + DH >= 14 ou ECDH 19/20/21' },
      { topic: 'Anti-Replay × PFS', facts: 'Sequence Number 32 bits (64 bits ESN) em AMBOS AH e ESP × nova troca DH na Phase 2' }
    ]
  },
  '2.2.8': {
    itemId: '2.2.8',
    highYieldSummary: [
      'Definição e escopo: SSL-VPN (Secure Sockets Layer Virtual Private Network, operada modernamente via TLS/DTLS) provê acesso remoto criptografado para usuários externos sobre as portas TCP 443 e UDP 443. Supera restrições de redes Wi-Fi de terceiros e proxies que frequentemente bloqueiam portas IPsec, oferecendo modos com ou sem agente, controle de rotas (Split/Full Tunnel) e políticas granulares de menor privilégio.',
      'SSL-VPN (TLS-VPN): túnel de acesso remoto baseado em TLS (Transport Layer Security) sobre TCP porta 443 — ou DTLS (Datagram Transport Layer Security) em UDP 443 para menor overhead — atravessando facilmente firewalls corporativos/hotéis e NATs (Network Address Translation) sem exigir configurações complexas.',
      'Modos de Operação: Web Mode — portal HTML5 (HyperText Markup Language 5) clientless (sem cliente dedicado instalado) no navegador para HTTP, RDP (Remote Desktop Protocol) e SSH (Secure Shell) internos — vs Tunnel Mode (agente cliente cria interface virtual TUN/TAP — Camada 3 IP ou Camada 2 Ethernet — entregando IP do pool VPN e roteando múltiplos protocolos).',
      'Split Tunneling vs Full Tunneling: Split envia apenas as sub-redes corporativas pela VPN (alivia o link da matriz, porém exige cuidado com segurança do endpoint); Full envia `0.0.0.0/0` pelo túnel (inspeciona toda a navegação no NGFW — Next-Generation Firewall).',
      'Autenticação e Postura: integração com Active Directory via LDAP (Lightweight Directory Access Protocol), RADIUS (Remote Authentication Dial-In User Service) ou SAML (Security Assertion Markup Language) SSO (Single Sign-On), autenticação por certificado de máquina/usuário + MFA (Multi-Factor Authentication) obrigatório e checagem de postura (antivírus ativo, sistema atualizado) antes de liberar acesso.',
      'Hardening SSL-VPN: restringir a TLS 1.2/1.3 (desativar SSLv3/TLS 1.0/1.1), limitar IPs/grupos autorizados, aplicar políticas granulares de menor privilégio (usuário acessa apenas sua aplicação, não toda a rede) e manter firmware livre de CVEs (Common Vulnerabilities and Exposures).',
      'Exemplo operacional: médicos em sobreaviso conectam-se via **Tunnel Mode** com **DTLS (`UDP 443`)** e fallback **TLS (`TCP 443`)**, autenticando com **SAML SSO + MFA** e recebendo IP do pool `10.250.0.0/24`. A política aplica **Full Tunneling** apenas quando exigido controle web corporativo e restringe o grupo clínico exclusivamente ao servidor de prontuário (`TCP 443`) e PACS (`TCP 104`), negando acesso administrativo.'
    ],
    technicalReference: [
      'Transporte: TCP 443 (TLS — fallback confiável) | UDP 443 (DTLS — evita TCP-over-TCP meltdown e melhora latência)',
      'Modos: Web Mode (sem cliente, browser) | Tunnel Mode (agente endpoint, interface virtual IP pool) | Split vs Full Tunnel.'
    ],
    examTraps: [
      'TCP-over-TCP meltdown ocorre quando tráfego TCP interno é tunelado sobre SSL-VPN TCP 443 em links com perda — DTLS (UDP 443) mitiga esse problema.',
      'Split Tunneling reduz tráfego na matriz, mas permite que o endpoint acesse a Internet diretamente sem passar pelo firewall/IPS corporativo.',
      'Web Mode não dá acesso nativo direto a aplicações cliente-servidor proprietárias na estação (exige Tunnel Mode).'
    ],
    keyTerms: [
      'DTLS (UDP 443): adaptação do TLS para datagramas UDP que evita degradação de retransmissão dupla (TCP-over-TCP meltdown) na SSL-VPN',
      'Web Mode vs Tunnel Mode: acesso clientless via portal web HTML5 para protocolos suportados versus interface virtual TUN/TAP para qualquer aplicação IP',
      'Split Tunneling vs Full Tunneling: roteamento exclusivo de redes internas pelo túnel versus envio de todo tráfego (0.0.0.0/0) pelo firewall corporativo',
      'SAML SSO + MFA: federação de identidade com provedor corporativo combinada a segundo fator antes da alocação do túnel VPN',
      'Host Check / Postura: verificação de conformidade do endpoint (antivírus, patch, domínio) condicionando a autorização de acesso remoto'
    ],
    cheatSheet: [
      { topic: 'TLS × DTLS', facts: 'TCP 443 (fallback confiável) × UDP 443 (evita TCP-over-TCP meltdown e reduz latência)' },
      { topic: 'Web Mode × Tunnel Mode', facts: 'portal HTML5 clientless (HTTP/RDP/SSH) × agente com interface TUN/TAP e pool IP' },
      { topic: 'Split × Full Tunneling', facts: 'só redes internas pelo túnel × 0.0.0.0/0 pelo NGFW (inspeciona toda navegação)' },
      { topic: 'Autenticação e Postura', facts: 'LDAP / RADIUS / SAML SSO + MFA · Host Check (AV, patches, domínio) antes de liberar' },
      { topic: 'Hardening SSL-VPN', facts: 'somente TLS 1.2/1.3 (desativar SSLv3/TLS 1.0/1.1) · menor privilégio por aplicação' }
    ]
  },
  '2.2.9': {
    itemId: '2.2.9',
    highYieldSummary: [
      'Definição e escopo: IKE (Internet Key Exchange — RFC 2409/RFC 4306/RFC 7296) é o protocolo de plano de controle do IPsec executado em UDP 500 e UDP 4500. Automatiza a autenticação mútua entre pares VPN, a geração compartilhada de chaves simétricas via Diffie-Hellman, a detecção de NAT no caminho e o gerenciamento do ciclo de vida das Security Associations sem distribuição manual de segredos.',
      'Papel do IKE (Internet Key Exchange): protocolo de plano de controle — UDP 500 e UDP 4500 para NAT-T (NAT Traversal) — que autentica os pares IPsec, executa troca de chaves Diffie-Hellman (DH) e negocia parâmetros das SAs (Security Associations — contratos de parâmetros e chaves do túnel).',
      'IKEv1 vs IKEv2: IKEv1 usa Main Mode (6 mensagens, protege identidade) ou Aggressive Mode (3 mensagens, expõe hash/identidade — evitar); IKEv2 (RFC 7296) é mais rápido (4 mensagens iniciais), suporta EAP (Extensible Authentication Protocol) nativo, MOBIKE (IKEv2 Mobility and Multihoming Protocol, RFC 4555 — preserva o túnel ao trocar de IP) e menor latência.',
      'Autenticação de Peers: Pre-Shared Key (PSK — chave pré-compartilhada, simples, exige senhas fortes) ou Certificados Digitais X.509 — PKI (Public Key Infrastructure — escalável e recomendada para múltiplos sites/clientes); autenticação assimétrica pode ocorrer no IKEv2.',
      'Detecção de NAT (NAT-T): durante o handshake IKE (UDP 500), os peers trocam hashes NAT-D (NAT Discovery no IKEv1; notificações NAT_DETECTION_SOURCE_IP/DESTINATION_IP no IKEv2); se detectarem NAT no caminho, migram automaticamente o controle e o tráfego ESP (Encapsulating Security Payload) encapsulado para UDP 4500.',
      'Dead Peer Detection (DPD): mecanismo keepalive (sondagem periódica de disponibilidade) que envia mensagens R-U-THERE (no IKEv1) ou INFORMATIONAL vazias (nativo no IKEv2) para detectar queda silenciosa do túnel e acionar failover (chaveamento para gateway/link redundante) rápido.',
      'Exemplo operacional: na subida de uma VPN corporativa em **IKEv2** usando autenticação por **certificado X.509** e grupo **DH 19 (ECDH 256 bits)**, os gateways iniciam o `IKE_SA_INIT` pela porta `UDP 500`, detectam NAT intermediário já nessa troca inicial por meio dos payloads `NAT_DETECTION` (`NAT_DETECTION_SOURCE_IP` e `NAT_DETECTION_DESTINATION_IP`) e passam a enviar tanto o `IKE_AUTH` (concluindo as `4 mensagens` iniciais) quanto o tráfego **ESP** subsequente encapsulados na porta `UDP 4500`. Com **DPD** configurado em intervalo de `10 s` e `3` tentativas, a perda silenciosa do enlace primário dispara failover em ~`30 s`.'
    ],
    technicalReference: [
      'Portas IKE: UDP 500 (ISAKMP/IKE inicial) | UDP 4500 (NAT-Traversal encapsulando IKE + ESP)',
      'Comparativo: IKEv1 Main Mode = 6 msgs | IKEv1 Aggressive Mode = 3 msgs | IKEv2 IKE_SA_INIT + IKE_AUTH = 4 msgs.'
    ],
    examTraps: [
      'IKEv1 Aggressive Mode envia a identidade/hash em claro na negociação, sendo vulnerável a ataque offline de dicionário em PSK.',
      'Quando há NAT entre os firewalls, liberar apenas UDP 500 e IP Protocol 50 NÃO funciona: é obrigatório liberar UDP 4500 (NAT-T).',
      'IKEv2 reduz drasticamente a quantidade de mensagens na subida do túnel e possui NAT-T e DPD nativos.'
    ],
    keyTerms: [
      'IKEv1 vs IKEv2: evolução do plano de controle IPsec reduzindo o setup inicial para 4 mensagens com EAP, NAT-T, DPD e MOBIKE integrados',
      'UDP 500 vs UDP 4500: porta padrão de início do handshake IKE versus porta NAT-T que transporta IKE e ESP encapsulado em UDP',
      'Main Mode vs Aggressive Mode: negociação IKEv1 em 6 mensagens com proteção de identidade versus 3 mensagens com exposição de hash/ID',
      'DPD (Dead Peer Detection): sondagem periódica sob demanda ou ociosa para identificar falha silenciosa de peer e liberar/comutar SAs',
      'MOBIKE (RFC 4555): extensão do IKEv2 que permite atualizar endereços do túnel sem derrubar a sessão em cenários móveis ou multi-link'
    ],
    cheatSheet: [
      { topic: 'Portas IKE', facts: 'UDP 500 (handshake inicial) · UDP 4500 (NAT-T transportando IKE + ESP após detectar NAT)' },
      { topic: 'IKEv1 Main × Aggressive', facts: '6 msgs (protege ID) × 3 msgs (expõe hash/ID em claro — risco de dicionário offline)' },
      { topic: 'IKEv2 (RFC 7296)', facts: '4 msgs (`IKE_SA_INIT` + `IKE_AUTH`) · EAP, NAT-T e DPD nativos · MOBIKE (RFC 4555)' },
      { topic: 'Autenticação de peers', facts: 'PSK (chave pré-compartilhada) × Certificados X.509/PKI (escalável para múltiplos sites)' },
      { topic: 'Detecção NAT e DPD', facts: 'hashes NAT-D (v1) / NAT_DETECTION (v2) · DPD: R-U-THERE (v1) ou INFORMATIONAL (v2)' }
    ]
  },
  '2.2.10': {
    itemId: '2.2.10',
    highYieldSummary: [
      'Definição e escopo: o estabelecimento de túneis IPsec divide-se logicamente em duas fases — Phase 1 (IKE/ISAKMP SA — canal de controle protegido) e Phase 2 (IPsec SA / Child SA — canal de dados do usuário). Essa separação permite renegociar rapidamente chaves de tráfego com menor custo computacional e isolar seletores de sub-redes entre VPNs Policy-Based e Route-Based.',
      'Phase 1 (IKE SA / ISAKMP SA): estabelece um canal de controle bidirecional seguro e autenticado entre os dois gateways VPN usando parâmetros idênticos de Criptografia, Hash, Autenticação — PSK (Pre-Shared Key) ou Certificado — Grupo DH (Diffie-Hellman) e Lifetime (tempo de vida antes da renegociação).',
      'Modos da Phase 1 (IKEv1): Main Mode (6 mensagens, criptografa identidades — padrão Site-to-Site com IP fixo) e Aggressive Mode (3 mensagens, usado quando IP dinâmico exigia identificação antecipada em IKEv1).',
      'Phase 2 (IPsec SA — Quick Mode no IKEv1 / Child SA no IKEv2): roda protegida dentro do túnel da Phase 1 para negociar os parâmetros de dados reais: protocolo ESP (Encapsulating Security Payload) ou AH (Authentication Header), criptografia, integridade, PFS (Perfect Forward Secrecy — DH opcional), Lifetime e Proxy IDs / Traffic Selectors (sub-redes locais e remotas).',
      'SAs Unidirecionais na Phase 2: diferentemente da Phase 1 (1 SA bidirecional), a Phase 2 cria um par de SAs IPsec unidirecionais (uma de entrada e outra de saída, identificadas pelo SPI — Security Parameters Index, identificador de 32 bits no cabeçalho ESP/AH).',
      'Route-Based vs Policy-Based VPN: Policy-Based define as sub-redes na política (sensível a Proxy ID mismatch); Route-Based cria uma interface virtual VTI (Virtual Tunnel Interface, com `0.0.0.0/0` no seletor) permitindo usar OSPF (Open Shortest Path First) ou BGP (Border Gateway Protocol) sobre IPsec.',
      'Exemplo operacional: em uma VPN **Route-Based** entre duas unidades hospitalares, a **Phase 1** negocia `AES-256 + SHA-256 + DH 14` com `Lifetime = 86400 s` (24 h), enquanto a **Phase 2** negocia `ESP AES-256 + SHA-256 + PFS DH 14` com `Lifetime = 3600 s` (1 h) e seletor `0.0.0.0/0 <-> 0.0.0.0/0` associado à interface **VTI** `vpn-filial`. Em **IKEv1**, se o parceiro configurar a Phase 2 restrita a `10.10.0.0/16` sem usar `0.0.0.0/0`, a **Phase 1** sobe, mas a **Phase 2** falha por **Proxy ID mismatch**; já em **IKEv2**, o responder pode aplicar **narrowing** dos *traffic selectors*, estreitando a Child SA para a interseção compatível (quando há sobreposição de faixas).'
    ],
    technicalReference: [
      'Phase 1 (IKE SA): Bidirecional | Negocia Cifra + Hash + Auth + DH Group + Lifetime (ex.: AES256 + SHA256 + DH14 + 86400s)',
      'Phase 2 (IPsec SA): Par Unidirecional (SPI) | Negocia ESP + Cifra + Hash + PFS + Proxy IDs (Local/Remote Subnet) + Lifetime (ex.: 3600s).'
    ],
    examTraps: [
      'Incompatibilidade de sub-redes (Proxy ID / Traffic Selector mismatch) derruba a PHASE 2 mesmo quando a Phase 1 sobe normalmente.',
      'Phase 1 cria 1 SA BIDIRECIONAL; Phase 2 cria 2 SAs UNIDIRECIONAIS (inbound e outbound).',
      'Mismatches de PFS (habilitado só de um lado ou com grupos DH diferentes) impedem o estabelecimento da Phase 2.'
    ],
    keyTerms: [
      'ISAKMP / IKE SA (Phase 1): associação bidirecional única que autentica os gateways e protege a negociação das chaves de dados',
      'IPsec SA / Quick Mode (Phase 2): par de associações unidirecionais (inbound/outbound) que cifram efetivamente o tráfego de usuário',
      'SPI (Security Parameters Index): valor de 32 bits no cabeçalho ESP/AH usado pelo receptor para identificar qual SA/chave decifra o pacote',
      'Proxy IDs / Traffic Selectors: pares de redes, protocolos e portas locais/remotos que definem qual tráfego entra em cada Phase 2',
      'Route-Based VPN (VTI): arquitetura em que a decisão de envio ao túnel vem da tabela de roteamento (permite OSPF/BGP e failover dinâmico)'
    ],
    cheatSheet: [
      { topic: 'Phase 1 (IKE/ISAKMP SA)', facts: '1 SA BIDIRECIONAL · negocia cifra + hash + auth + DH Group + Lifetime (ex.: 86400 s)' },
      { topic: 'Phase 2 (IPsec/Child SA)', facts: '2 SAs UNIDIRECIONAIS (in/out, SPI 32 bits) · ESP/AH + PFS + Proxy IDs + Lifetime (3600 s)' },
      { topic: 'Falha típica Phase 2', facts: 'Phase 1 UP, Phase 2 cai por Proxy ID / Traffic Selector mismatch ou PFS divergente' },
      { topic: 'Policy-Based × Route-Based', facts: 'sub-redes na política × interface virtual VTI (`0.0.0.0/0`, permite OSPF/BGP dinâmico)' },
      { topic: 'IKEv1 × IKEv2 seletores', facts: 'IKEv1 exige match exato × IKEv2 permite narrowing para interseção de faixas compatíveis' }
    ]
  },
  '2.2.11': {
    itemId: '2.2.11',
    highYieldSummary: [
      'Definição e escopo: o troubleshooting em firewalls e VPNs segue metodologia top-down e orientada a fluxo de pacotes: validar conectividade física/roteamento, inspecionar decisões de política e NAT na tabela de sessões, depurar negociações IKE/IPsec, isolar gargalos de MTU/MSS e verificar falsos positivos de inspeção L7 ou dessincronia em HA.',
      'Diagnóstico de Políticas e Fluxo (Packet Flow): usar ferramentas nativas de simulação/sniffer (capturador de pacotes) no firewall — FortiGate: `diagnose debug flow` / `diagnose sniffer packet`; Check Point: `fw monitor` — para descobrir exatamente qual regra aceitou ou dropou o pacote.',
      'Troubleshooting de IPsec VPN: separar falha de Phase 1 — UDP 500 bloqueado, PSK (Pre-Shared Key) incorreta, mismatch de proposta IKE (Internet Key Exchange) / DH (Diffie-Hellman) — de falha de Phase 2 — Proxy IDs invertidos/divergentes, PFS (Perfect Forward Secrecy) diferente, ou falta de rota/política de firewall impedindo o disparo da Phase 2 ou o fluxo pós-túnel.',
      'Análise de Sessões e NAT: inspecionar a tabela de sessões (`diagnose sys session list` / `fw tab -t connections -s`) para confirmar se o pacote atingiu o destino, se houve SNAT (Source NAT) / DNAT (Destination NAT) correto e se o retorno chegou pela mesma interface.',
      'Problemas de MTU/MSS em túneis: cabeçalho IPsec/ESP adiciona ~50–80 bytes; se PMTUD (Path MTU Discovery — descoberta do menor MTU via ICMP) falhar, `ping` pequeno funciona mas HTTPS (Hypertext Transfer Protocol Secure) / SMB (Server Message Block) trava — corrigir ajustando `tcp-mss` (ex.: `1360–1400` bytes) ou liberando ICMP Type 3 Code 4 (Fragmentation Needed / Packet Too Big no ICMPv6) (MTU — Maximum Transmission Unit / MSS — Maximum Segment Size).',
      'Recursos e HA: monitorar CPU/memória, uso de SPU (Security Processing Unit) / offload (aceleração por hardware), logs de IPS (Intrusion Prevention System) / WAF (Web Application Firewall) para falsos positivos bloqueando aplicação legítima e estado do cluster HA (checksum de sincronismo e links monitorados).',
      'Exemplo operacional: após subir uma VPN Site-to-Site (`Phase 1` e `Phase 2` UP), o acesso ao sistema de imagens médicas via HTTPS trava após o handshake TLS enquanto `ping` de `64` bytes responde. O comando `diagnose sniffer packet` revela pacotes grandes sem retorno por bloqueio de **ICMP Fragmentation Needed** no caminho; configurar `set tcp-mss 1360` na política do túnel (`1360 + 40 TCP/IP + ~70 ESP = 1470 <= 1500` bytes) normaliza imediatamente a aplicação.'
    ],
    technicalReference: [
      'FortiGate CLI: diagnose debug flow filter addr <IP> -> diagnose debug flow trace start 20 | diagnose sniffer packet any "host <IP>" 4',
      'FortiGate VPN: diagnose debug application ike -1 | Check Point: fw monitor -e "accept host(<IP>);" | vpn tu (menu túneis).'
    ],
    examTraps: [
      'Se a VPN IPsec mostra Phase 1 e Phase 2 UP mas não passa tráfego, as causas clássicas são: falta de rota estática para a rede remota ou ausência de política de firewall permitindo o fluxo.',
      'Conservar logs de sessão e usar "debug flow" antes de alterar regras evita mascarar roteamento assimétrico.',
      'Falsos positivos de IPS/App Control derrubam sessões permitidas na política L3/L4 — checar sempre os Threat/IPS Logs.'
    ],
    keyTerms: [
      'diagnose debug flow / fw monitor: ferramentas nativas (FortiGate/Check Point) que mostram etapa por etapa a decisão de roteamento, NAT e política',
      'IKE Debug (ike -1): depuração em tempo real dos pacotes Phase 1/Phase 2 para localizar mismatch de propostas, PSK ou Proxy IDs',
      'Tabela de Sessões: estrutura em memória com estado, interfaces, NAT e flags de offload das conexões ativas',
      'TCP MSS Clamping: ajuste no campo MSS do TCP SYN (ex.: 1360–1400 bytes) para evitar fragmentação e blackhole em túneis IPsec/VPN',
      'Roteamento Assimétrico: fluxo de ida e volta por caminhos/interfaces diferentes que faz o firewall stateful descartar pacotes fora de estado'
    ],
    cheatSheet: [
      { topic: 'Packet Flow / Sniffer', facts: 'FortiGate: `diagnose debug flow` / `diagnose sniffer packet` · Check Point: `fw monitor`' },
      { topic: 'Sessões e IKE Debug', facts: 'FortiGate: `diagnose sys session list` e `ike -1` · Check Point: `fw tab -t connections -s` e `vpn tu`' },
      { topic: 'Phase 1 e 2 UP sem tráfego', facts: 'causas clássicas: ausência de rota estática para rede remota ou falta de política permitindo fluxo' },
      { topic: 'MTU/MSS em túneis', facts: 'ESP soma ~50–80 bytes · ping pequeno passa, HTTPS/SMB trava -> `tcp-mss 1360–1400` ou ICMP Type 3 Code 4' },
      { topic: 'Assimetria e falsos positivos', facts: 'roteamento assimétrico gera drop stateful · app bloqueada com L3/L4 OK -> checar Threat/IPS Logs' }
    ]
  }
};
