import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_2: Record<string, StudyGuide> = {
  '2.1.1': {
    itemId: '2.1.1',
    highYieldSummary: [
      'Firewalls (Packet Filter, Stateful e NGFW): Packet Filter (L3/L4) avalia cada pacote isoladamente sem estado; Stateful mantém tabela de sessões (5-tuple) permitindo o retorno automático; NGFW inspeciona até L7 (App-ID, IPS integrado, descriptografia TLS/SSL e filtro URL).',
      'IDS vs IPS: IDS opera passivamente fora de banda (out-of-band via porta SPAN/mirror ou TAP) apenas detectando e gerando alertas; IPS opera em linha (inline), inspecionando e bloqueando/descartando pacotes maliciosos em tempo real.',
      'Métodos de detecção IDS/IPS: Baseado em Assinaturas (alta precisão para ameaças conhecidas, exige atualização constante) vs Anomalias/Heurística (detecta zero-day por desvio de baseline, maior taxa de falso-positivo).',
      'Proxy (Forward vs Reverse): Forward Proxy intermedia clientes internos rumo à Internet (cache, controle URL/DLP, ocultamento de clientes); Reverse Proxy protege servidores internos recebendo conexões externas (SSL offloading, WAF, balanceamento).',
      'NAT e VPN como controles: NAT traduz endereços privados em públicos (não substitui firewall, mas oculta topologia interna); VPN estabelece túneis criptografados garantindo confidencialidade, integridade e autenticação em redes não confiáveis.'
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
    keyTerms: ['Stateful vs NGFW', 'IDS (SPAN) vs IPS (Inline)', 'Forward vs Reverse Proxy', 'WAF', 'NAT', 'VPN']
  },
  '2.1.2': {
    itemId: '2.1.2',
    highYieldSummary: [
      'Spoofing e DNS Spoofing: IP/MAC/ARP Spoofing falsificam a origem na rede (mitigados com uRPF, DAI e Port Security); DNS Spoofing / Cache Poisoning injeta registros falsos no resolvedor redirecionando vítimas (mitigado por DNSSEC e aleatoriedade de porta/TXID).',
      'DoS, DDoS e Flood: DoS parte de uma origem; DDoS usa botnets distribuídas. Ataques clássicos incluem SYN Flood (esgota fila half-open TCP — mitigado por SYN Cookies), UDP/ICMP Flood e Amplificação DNS/NTP/Memcached (spoofing IP da vítima).',
      'Eavesdropping (Sniffing): captura passiva de tráfego em claro (Telnet, FTP, HTTP, SNMPv1/v2c); neutralizada com criptografia em trânsito (TLS 1.2/1.3, SSH, IPsec, SNMPv3 authPriv) e segmentação VLAN.',
      'Brute Force e Password Spraying: tentativa exaustiva de senhas ou uso de uma senha comum em várias contas; mitigados com MFA, bloqueio progressivo (account lockout), fail2ban e CAPTCHA/rate limiting.',
      'Port Scanning e Phishing: Port Scan (Nmap SYN scan -sS, Connect -sT, UDP -sU) mapeia portas/serviços expostos antes da exploração; Phishing/Spear Phishing usa engenharia social para roubar credenciais ou entregar payloads (mitigado por SPF/DKIM/DMARC, MFA FIDO2 e treinamento).'
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
    keyTerms: ['IP/ARP/DNS Spoofing', 'SYN Flood / SYN Cookies', 'DDoS Amplificação', 'Eavesdropping', 'Brute Force', 'Port Scanning / Phishing']
  },
  '2.1.3': {
    itemId: '2.1.3',
    highYieldSummary: [
      'Ciclo de Tratamento de Incidentes (NIST SP 800-61): 1) Preparação; 2) Detecção e Análise; 3) Contenção, Erradicação e Recuperação; 4) Atividades Pós-Incidente (Lições Aprendidas).',
      'Contenção: isolar o impacto sem destruir evidências voláteis (ex.: isolar host no NAC/EDR, bloquear IP/domínio no firewall/DNS, revogar sessões/tokens) antes de formatar ou reiniciar.',
      'Erradicação e Recuperação: remover causa raiz (malwares, tarefas agendadas, persistência, backdoors), aplicar patches/trocar senhas e restaurar sistemas validando integridade antes do retorno à produção.',
      'Ordem de Volatilidade (RFC 3227): coletar primeiro registradores/cache, tabela de roteamento/ARP/processos e RAM (dump de memória) antes de disco rígido, logs remotos e backups offline.',
      'CSIRT / SOC e Playbooks: equipe dedicada à triagem de alertas SIEM/EDR, correlação de IoCs (hashes, IPs, domínios), cadeia de custódia (hash SHA-256 de evidências) e comunicação formal.'
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
    keyTerms: ['NIST SP 800-61', 'Contenção vs Erradicação', 'Ordem de Volatilidade (RFC 3227)', 'CSIRT', 'Cadeia de Custódia', 'IoCs']
  },
  '2.2.1': {
    itemId: '2.2.1',
    highYieldSummary: [
      'FortiGate (FortiOS) e Check Point (Gaia/SmartConsole): soluções NGFW/UTM corporativas que unificam firewall stateful, NAT, VPN IPsec/SSL, IPS, antivírus, Web Filtering e Application Control.',
      'Arquitetura de processamento: FortiGate acelera tráfego com ASICs dedicados (SPU: NP para rede/IPsec e CP para conteúdo/TLS); Check Point separa Security Gateway (plano de dados) de Security Management Server (SMS / SmartConsole).',
      'Modos de inspeção: Flow-based (baixa latência, inspeciona pacotes em fluxo sem buffer completo) vs Proxy-based (remonta payload completo permitindo inspeção profunda e substituição de conteúdo HTTP/SMTP).',
      'SD-WAN e UTM integrados: roteamento inteligente por SLA de links (latência, jitter, perda de pacotes) combinado com perfis de segurança (Security Profiles / Threat Prevention) aplicados nas políticas.',
      'Virtualização lógica: VDOMs (FortiGate) e VSX (Check Point) particionam um appliance físico em múltiplos firewalls virtuais isolados com tabelas de roteamento e políticas independentes.'
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
    keyTerms: ['FortiGate (FortiOS)', 'Check Point (Gaia / SMS)', 'Flow-based vs Proxy-based', 'VDOM / VSX', 'Security Profiles']
  },
  '2.2.2': {
    itemId: '2.2.2',
    highYieldSummary: [
      'Inspeção Stateful: rastreia o estado das sessões na tabela de estados (SYN -> ESTABLISHED -> FIN/timeout), permitindo automaticamente os pacotes de resposta sem exigir regra inversa explícita.',
      'Zonas e Interfaces: agrupam interfaces com mesmo nível de confiança (ex.: LAN, WAN, DMZ, Guest); regras são aplicadas entre origem e destino (Interface/Zone + Endereço + Serviço + Ação).',
      'DMZ (Zona Desmilitarizada): sub-rede intermediária isolada para servidores expostos (Web, SMTP Relay, Reverse Proxy), impedindo que um servidor comprometido acesse diretamente a LAN interna.',
      'Inspeção TLS/SSL (Deep Packet Inspection): firewall atua como proxy confiável usando CA interna instalada nas estações para inspecionar cargas HTTPS contra malware e vazamento (DLP).',
      'Proteções DoS e RPF: Anti-Spoofing (Reverse Path Forwarding) descarta pacotes cujo IP de origem não corresponde à rota de saída daquela interface; DoS Policies limitam sessões por IP.'
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
    keyTerms: ['Stateful Inspection', 'Tabela de Sessões', 'DMZ', 'Zonas de Segurança', 'Anti-Spoofing (RPF)', 'TLS Inspection']
  },
  '2.2.3': {
    itemId: '2.2.3',
    highYieldSummary: [
      'SNAT (Source NAT) / Masquerade / PAT: reescreve o IP (e porta no PAT/NAPT) de ORIGEM ao sair da rede privada RFC 1918 para a Internet usando um IP público da interface ou pool.',
      'DNAT (Destination NAT) / Port Forwarding / VIP: reescreve o IP (e opcionalmente porta) de DESTINO na entrada (WAN -> DMZ) para publicar serviços internos com IP privado.',
      'NAT Estático (1:1) vs Dinâmico vs PAT (Overload): Estático mapeia 1 IP privado fixo a 1 IP público; Dinâmico usa pool 1:1 temporário; PAT multiplexa milhares de sessões privadas em um único IP público variando portas.',
      'NAT Traversal e Hairpin NAT (NAT Loopback): Hairpin permite que usuários na LAN acessem um servidor interno usando seu IP público externo; SIP/FTP exigem atenção pois embutem IPs privados no payload L7.',
      'Ordem lógica no firewall: DNAT (VIP) ocorre ANTES da consulta de roteamento e da política (logo a regra usa o IP privado real em alguns firewalls, ou o objeto VIP no FortiGate); SNAT ocorre na saída.'
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
    keyTerms: ['SNAT vs DNAT', 'PAT / Overload', 'NAT 1:1', 'VIP / Port Forwarding', 'Hairpin NAT']
  },
  '2.2.4': {
    itemId: '2.2.4',
    highYieldSummary: [
      'Avaliação Top-Down (First Match): políticas/ACLs de firewall são avaliadas estritamente de cima para baixo; a PRIMEIRA regra que casa todos os critérios é aplicada e interrompe a leitura das seguintes.',
      'Implicit Deny (Negação Implícita): ao final de toda tabela de políticas existe uma regra implícita de DROP/DENY ALL — tudo que não for explicitamente permitido é bloqueado (princípio do menor privilégio).',
      'Critérios de correspondência (Tuple): Interface/Zona origem e destino + Endereços (IP/FQDN/GeoIP) + Usuários/Grupos + Serviços/Portas + Aplicações (L7) + Agendamento + Ação (Accept/Deny/Drop/Reject).',
      'Drop vs Reject: Drop descarta silenciosamente sem responder (preferido na WAN contra port scan); Reject devolve ICMP Unreachable ou TCP RST (útil na LAN para evitar timeouts longos).',
      'Boas práticas de governança: regras mais específicas no topo e mais genéricas abaixo; evitar "Any/Any/Accept"; habilitar log na regra Deny implícita para troubleshooting e remover regras sem hit count (órfãs).'
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
    keyTerms: ['Top-Down (First Match)', 'Implicit Deny', 'Drop vs Reject', 'Cleanup Rule', 'Menor Privilégio']
  },
  '2.2.5': {
    itemId: '2.2.5',
    highYieldSummary: [
      'Tipos de Logs no NGFW: Traffic Logs (conexões permitidas/bloqueadas, bytes, duração, NAT), Security/Threat Logs (IPS, AV, Web Filter, App Control) e Event/System Logs (login admin, alterações de configuração, HA, túneis VPN).',
      'Syslog e SIEM: envio em tempo real de eventos via Syslog (UDP/TCP 514 ou TLS 6514, RFC 5424) para coletor central/SIEM (ou FortiAnalyzer / Check Point Log Server) evitando perda caso o firewall falhe.',
      'Retenção e Sincronismo NTP: logs locais em disco/RAM são limitados e cíclicos; sincronização via NTP é obrigatória para correlação forense precisa entre firewall, AD, switches e servidores.',
      'Impacto e granularidade: logar "All Sessions" em políticas de alto volume consome CPU/I/O e espaço; "Security Events Only" ou logging seletivo otimizam performance mantendo visibilidade de ameaças e bloqueios.',
      'Auditoria e Compliance: trilhas de auditoria imutáveis registram quem alterou regras (Change Control), tentativas de login falhas e sessões bloqueadas para resposta a incidentes e LGPD.'
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
    keyTerms: ['Traffic vs Security vs Event Logs', 'Syslog (514 / TLS 6514)', 'SIEM', 'NTP', 'Auditoria']
  },
  '2.2.6': {
    itemId: '2.2.6',
    highYieldSummary: [
      'Modos de Cluster HA: Ativo-Passivo (1 nó processa todo o tráfego e o secundário fica em standby pronto para assumir) vs Ativo-Ativo (distribuição de sessões/inspeção entre nós, exigindo dimensionamento para suportar 100% na queda de 1 nó).',
      'Sincronismo de Estado (State Sync) e Config: links dedicados de Heartbeat/Sync replicam configurações em tempo real e a tabela de sessões ativas + chaves IPsec, garantindo failover transparente sem derrubar conexões TCP.',
      'Critérios de Eleição do Primário: verificação do estado das interfaces monitoradas (Port Monitoring / Link Health), tempo de atividade (uptime), prioridade configurada (Override habilitado ou não) e Serial Number.',
      'Prevenção de Split-Brain: uso de pelo menos 2 interfaces de Heartbeat dedicadas (redundância) evitando que ambos os nós assumam papel ativo simultaneamente gerando conflito de IP/MAC virtual.',
      'Protocolos de redundância e endereçamento: membros compartilham um MAC virtual e IP virtual (Cluster VIP) para que switches e roteadores não percebam troca de gateway após o failover (Gratuitous ARP).'
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
    keyTerms: ['Ativo-Passivo vs Ativo-Ativo', 'State Sync', 'Heartbeat', 'Gratuitous ARP / Virtual MAC', 'Split-Brain', 'Port Monitoring']
  },
  '2.2.7': {
    itemId: '2.2.7',
    highYieldSummary: [
      'Arquitetura IPsec (Camada 3): suíte de padrões abertos (RFCs 4301–4309) que fornece confidencialidade, integridade, autenticação de origem e proteção contra replay entre gateways (Site-to-Site) ou hosts (Remote Access).',
      'Protocolos AH vs ESP: AH (IP Protocol 51) autentica e garante integridade do pacote inteiro (incluindo cabeçalho IP externo), mas NÃO criptografa e quebra com NAT; ESP (IP Protocol 50) provê criptografia (AES-GCM/CBC) + integridade/autenticação e suporta NAT via NAT-T.',
      'Modos de Operação: Modo Túnel (criptografa todo o pacote IP original e adiciona novo cabeçalho IP externo — padrão para Site-to-Site entre firewalls) vs Modo Transporte (mantém cabeçalho IP original e criptografa só payload L4+ — usado host-to-host ou dentro de GRE).',
      'Algoritmos modernos recomendados: Criptografia AES-GCM (AEAD) ou AES-CBC (evitar DES/3DES); Integridade/Hash SHA-256/SHA-384/SHA-512 (evitar MD5/SHA-1); Troca de chaves Diffie-Hellman grupos >= 14 (ou ECDH 19/20/21).',
      'Anti-Replay e PFS (Perfect Forward Secrecy): tanto o AH (RFC 4302) quanto o ESP (RFC 4303) possuem número de sequência anti-replay de 32 bits (ou 64 bits com ESN — Extended Sequence Numbers, RFC 4304) verificado por janela deslizante (sliding window) no receptor para impedir reinjeção de pacotes capturados; PFS força nova troca Diffie-Hellman na Phase 2 garantindo que comprometer uma chave não exponha sessões passadas.'
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
    keyTerms: ['ESP (IP 50) vs AH (IP 51)', 'Modo Túnel vs Transporte', 'NAT-T (UDP 4500)', 'AES-GCM / SHA-256', 'PFS / Anti-Replay']
  },
  '2.2.8': {
    itemId: '2.2.8',
    highYieldSummary: [
      'SSL-VPN (TLS-VPN): túnel de acesso remoto baseado em TLS sobre TCP porta 443 (ou DTLS em UDP 443 para menor overhead), atravessando facilmente firewalls corporativos/hotéis e NATs sem exigir configurações complexas.',
      'Modos de Operação: Web Mode (portal HTML5 clientless no navegador para HTTP/RDP/SSH internos) vs Tunnel Mode (agente cliente cria interface virtual TUN/TAP entregando IP do pool VPN e roteando múltiplos protocolos).',
      'Split Tunneling vs Full Tunneling: Split envia apenas as sub-redes corporativas pela VPN (alivia link da matriz, exige cuidado com segurança do endpoint); Full envia 0.0.0.0/0 pelo túnel (inspeciona toda navegação no NGFW).',
      'Autenticação e Postura: integração com Active Directory (LDAP/RADIUS/SAML SSO), autenticação por certificado de máquina/usuário + MFA obrigatório e checagem de postura (antivírus ativo, SO atualizado) antes de liberar acesso.',
      'Hardening SSL-VPN: restringir a TLS 1.2/1.3 (desativar SSLv3/TLS 1.0/1.1), limitar IPs/grupos autorizados, aplicar políticas granulares de menor privilégio (usuário acessa só sua aplicação, não toda a rede) e manter firmware livre de CVEs.'
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
    keyTerms: ['SSL-VPN (TCP 443)', 'DTLS (UDP 443)', 'Web Mode vs Tunnel Mode', 'Split vs Full Tunneling', 'MFA / SAML']
  },
  '2.2.9': {
    itemId: '2.2.9',
    highYieldSummary: [
      'Papel do IKE (Internet Key Exchange): protocolo de plano de controle (UDP 500 e UDP 4500 para NAT-T) que autentica os pares IPsec, executa troca de chaves Diffie-Hellman (DH) e negocia parâmetros das Security Associations (SAs).',
      'IKEv1 vs IKEv2: IKEv1 usa Main Mode (6 mensagens, protege identidade) ou Aggressive Mode (3 mensagens, expõe hash/identidade — evitar); IKEv2 (RFC 7296) é mais rápido (4 mensagens iniciais), suporta EAP nativo, MOBIKE e menor latência.',
      'Autenticação de Peers: Pré-Shared Key (PSK — simples, exige senhas fortes) ou Certificados Digitais X.509 (PKI — escalável e recomendado para múltiplos sites/clientes); autenticação assimétrica pode ocorrer no IKEv2.',
      'Detecção de NAT (NAT-T): durante o handshake IKE (UDP 500), os peers trocam hashes NAT-D; se detectarem NAT no caminho, migram automaticamente o controle e o tráfego ESP encapsulado para UDP 4500.',
      'Dead Peer Detection (DPD): mecanismo keepalive que envia mensagens R-U-THERE para detectar queda silenciosa do túnel e acionar failover rápido para link/gateway secundário.'
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
    keyTerms: ['IKEv1 vs IKEv2', 'UDP 500 / UDP 4500 (NAT-T)', 'Diffie-Hellman', 'Main vs Aggressive Mode', 'DPD', 'PSK vs Certificados']
  },
  '2.2.10': {
    itemId: '2.2.10',
    highYieldSummary: [
      'Phase 1 (IKE SA / ISAKMP SA): estabelece um canal de controle bidirecional seguro e autenticado entre os dois gateways VPN usando parâmetros idênticos de Criptografia, Hash, Autenticação (PSK/Cert), Grupo DH e Lifetime.',
      'Modos da Phase 1 (IKEv1): Main Mode (6 mensagens, criptografa identidades — padrão Site-to-Site com IP fixo) e Aggressive Mode (3 mensagens, usado quando IP dinâmico exigia identificação antecipada em IKEv1).',
      'Phase 2 (IPsec SA): roda protegida dentro do túnel da Phase 1 para negociar os parâmetros de dados reais: protocolo (ESP/AH), criptografia, integridade, PFS (DH opcional), Lifetime e Proxy IDs / Traffic Selectors (sub-redes locais e remotas).',
      'SAs Unidirecionais na Phase 2: diferentemente da Phase 1 (1 SA bidirecional), a Phase 2 cria um par de SAs IPsec unidirecionais (uma de entrada e outra de saída, identificadas pelo SPI).',
      'Route-Based vs Policy-Based VPN: Policy-Based define subnets na política (sensível a Proxy ID mismatch); Route-Based cria interface virtual VTI (0.0.0.0/0 no seletor) permitindo usar OSPF/BGP sobre IPsec.'
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
    keyTerms: ['Phase 1 (IKE SA)', 'Phase 2 (IPsec SA / Quick Mode)', 'Proxy IDs / Traffic Selectors', 'SPI', 'PFS', 'Route-Based (VTI)']
  },
  '2.2.11': {
    itemId: '2.2.11',
    highYieldSummary: [
      'Diagnóstico de Políticas e Fluxo (Packet Flow): usar ferramentas nativas de simulação/sniffer no firewall (FortiGate: diagnose debug flow / diagnose sniffer packet; Check Point: fw monitor) para descobrir exatamente qual regra aceitou ou dropou o pacote.',
      'Troubleshooting de IPsec VPN: separar falha de Phase 1 (UDP 500 bloqueado, PSK incorreta, mismatch de proposta IKE/DH) de falha de Phase 2 (Proxy IDs invertidos/divergentes, PFS diferente, falta de rota ou política firewall liberando tráfego).',
      'Análise de Sessões e NAT: inspecionar tabela de sessões (diagnose sys session list / fw tab -t connections -s) para confirmar se o pacote atingiu o destino, se houve SNAT/DNAT correto e se o retorno chegou pela mesma interface.',
      'Problemas de MTU/MSS em túneis: cabeçalho IPsec/ESP adiciona ~50–80 bytes; se PMTUD falhar, ping funciona mas HTTPS/SMB trava — corrigir ajustando tcp-mss (ex.: 1360–1400 bytes) ou liberando ICMP Fragmentation Needed.',
      'Recursos e HA: monitorar CPU/memória, uso de SPU/offload, logs de IPS/WAF (falsos positivos bloqueando aplicação legítima) e estado do cluster HA (checksum de sincronismo e links monitorados).'
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
    keyTerms: ['diagnose debug flow', 'fw monitor', 'IKE Debug', 'Proxy ID Mismatch', 'TCP MSS Clamping', 'Falso Positivo IPS']
  }
};
