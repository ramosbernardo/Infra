import { Flashcard } from '../../types/edital';

export const FLASHCARDS_AXIS_1_TO_4: readonly Flashcard[] = [
  // ==================== EIXO 1 (12 itens restantes) ====================
  {
    id: 'fc-28',
    itemId: '1.1.3',
    front: 'No MPLS, qual é o tamanho do cabeçalho (shim) inserido entre L2 e L3, sua faixa de bits de rótulo e o protocolo de sinalização mais comum?',
    back: 'Shim header de 32 bits (4 bytes): 20 bits Label, 3 bits TC/EXP (QoS), 1 bit S (Bottom of Stack) e 8 bits TTL. Sinalização: LDP (TCP/UDP 646) ou RSVP-TE.'
  },
  {
    id: 'fc-29',
    itemId: '1.1.4',
    front: 'Quais são as distâncias administrativas (AD) padrão na Cisco para Rotas Conectadas, Estática, OSPF e BGP (eBGP vs iBGP)?',
    back: 'Conectada: 0 | Estática: 1 | eBGP: 20 | OSPF: 110 | iBGP: 200. Menor AD tem prioridade na tabela de roteamento.'
  },
  {
    id: 'fc-30',
    itemId: '1.2.1',
    front: 'Quais são as 4 camadas do modelo TCP/IP clássico (RFC 1122) e qual o tamanho mínimo dos cabeçalhos IPv4 e TCP?',
    back: '4 camadas: Acesso à Rede, Internet, Transporte e Aplicação. Cabeçalho IPv4 mínimo: 20 bytes (IHL=5); cabeçalho TCP mínimo: 20 bytes; UDP: 8 bytes fixos.'
  },
  {
    id: 'fc-31',
    itemId: '1.2.2',
    front: 'Qual o tamanho dos endereços IPv4 e IPv6, qual o prefixo de loopback em ambos e quantos bits tem o cabeçalho fixo IPv6?',
    back: 'IPv4: 32 bits (loopback 127.0.0.0/8, cabeçalho mínimo 20 B). IPv6: 128 bits (loopback ::1/128, cabeçalho fixo 40 bytes, sem checksum L3 e sem broadcast).'
  },
  {
    id: 'fc-32',
    itemId: '1.2.3',
    front: 'Quantas VLANs são endereçáveis no padrão IEEE 802.1Q (VID de 12 bits) e qual faixa corresponde às VLANs normais vs reservadas?',
    back: '4.096 valores totais (0 a 4095); utilizáveis: 1 a 4094 (0 = priority-tagged e 4095 = reservada). Faixa normal: 1 a 1005 (1002–1005 Token Ring/FDDI); estendida: 1006 a 4094.'
  },
  {
    id: 'fc-33',
    itemId: '1.2.6',
    front: 'No LACP (IEEE 802.3ad / 802.1AX), quantas interfaces ativas e standby são suportadas no padrão e qual combinação de modos fecha o canal?',
    back: 'Até 8 interfaces ativas (+ 8 em standby = 16 configuradas). Fecha agregação: Active+Active ou Active+Passive (Passive+Passive NÃO negocia).'
  },
  {
    id: 'fc-34',
    itemId: '1.2.7',
    front: 'No OSPFv2, qual é a área de backbone obrigatória, o protocolo IP usado, o endereço multicast de todos os roteadores e a métrica padrão?',
    back: 'Backbone: Área 0 (0.0.0.0). Protocolo IP 89 (sem TCP/UDP). Multicast: 224.0.0.5 (AllSPFRouters) e 224.0.0.6 (DR/BDR). Métrica: Custo = Banda de Referência / Banda da Interface.'
  },
  {
    id: 'fc-35',
    itemId: '1.2.8',
    front: 'Quais as 4 mensagens do ciclo DORA no DHCPv4, as portas UDP usadas e os temporizadores T1 e T2 de renovação do lease?',
    back: 'Mensagens: Discover -> Offer -> Request -> Acknowledge. Portas: UDP 67 (servidor) e UDP 68 (cliente); DHCPv6 usa UDP 547/546. T1 = 50% do lease (unicast); T2 = 87,5% do lease (broadcast).'
  },
  {
    id: 'fc-36',
    itemId: '1.2.9',
    front: 'Quais portas usa o DNS e qual a finalidade dos registros A, AAAA, MX, PTR, TXT e SRV?',
    back: 'UDP/TCP 53 (UDP para consultas até 512B/EDNS0; TCP para transferência de zona AXFR/respostas grandes); DoT = TCP 853, DoH = TCP 443. A (IPv4), AAAA (IPv6), MX (e-mail), PTR (reverso), TXT (SPF/DKIM/DMARC), SRV (serviços AD).'
  },
  {
    id: 'fc-37',
    itemId: '1.2.10',
    front: 'No modelo DiffServ de QoS, quantos bits têm DSCP (L3) e CoS (L2), e quais os valores DSCP padrão para Voz (EF) e Sinalização (CS3)?',
    back: 'DSCP: 6 bits (64 classes PHB, valores 0–63). CoS 802.1p: 3 bits (0–7). Voz/RTP = EF (DSCP 46, CoS 5); Sinalização SIP = CS3 (DSCP 24, CoS 3).'
  },
  {
    id: 'fc-38',
    itemId: '1.2.11',
    front: 'Como o switch popula sua tabela MAC (CAM), qual é o aging time padrão típico e o que ocorre com quadros de destino desconhecido?',
    back: 'Aprende pelo MAC de ORIGEM dos quadros recebidos; aging time padrão típico = 300 segundos (5 min). Destino desconhecido (unknown unicast), broadcast ou multicast não filtrado sofre flooding para todas as portas da mesma VLAN.'
  },
  {
    id: 'fc-39',
    itemId: '1.2.12',
    front: 'Na arquitetura MTU/MSS sobre Ethernet (1500 B), qual é o MSS padrão do TCP IPv4 e o que significa erro ICMP Type 3 Code 4?',
    back: 'MSS IPv4 = 1460 bytes (1500 - 20 IPv4 - 20 TCP); com PPPoE cai 8 B para 1452 B. ICMP Type 3 Code 4 = Fragmentation Needed and DF Set (essencial para Path MTU Discovery).'
  },

  // ==================== EIXO 2 (12 itens restantes) ====================
  {
    id: 'fc-40',
    itemId: '2.1.2',
    front: 'Cite os 3 principais vetores de ataque DDoS (volumétrico, protocolo e aplicação) e os exemplos listados no edital.',
    back: 'Volumétrico (SYN/UDP/DNS amplification flood), Protocolo (SYN flood esgotando tabela de estado) e Aplicação (HTTP flood/Slowloris). Edital lista: spoofing, DNS spoofing, flood, DoS, DDoS, eavesdropping, brute force, port scanning e phishing.'
  },
  {
    id: 'fc-41',
    itemId: '2.1.3',
    front: 'Quais são as 4 grandes fases do ciclo de tratamento de incidentes segundo o NIST SP 800-61?',
    back: '1) Preparação (Preparation), 2) Detecção e Análise (Detection & Analysis), 3) Contenção, Erradicação e Recuperação, 4) Atividades Pós-Incidente (Lições Aprendidas).'
  },
  {
    id: 'fc-42',
    itemId: '2.2.1',
    front: 'Quais as 3 zonas de segurança clássicas de um firewall de borda e qual política padrão encerra qualquer lista de regras?',
    back: 'Zonas: Untrust/WAN (Externa), DMZ (serviços publicados) e Trust/LAN (Interna). Regra final padrão: Implicit Deny All (tudo que não é explicitamente permitido é bloqueado).'
  },
  {
    id: 'fc-43',
    itemId: '2.2.2',
    front: 'Em um firewall NGFW, quais critérios distinguem inspeção Stateful (L3/L4) de Deep Packet Inspection / L7?',
    back: 'Stateful rastreia tabela de sessões (IP origem/destino, portas e estado TCP); L7/DPI identifica aplicação real (App-ID), inspeciona TLS (SSL Inspection), URL, usuário (AD) e assinaturas IPS.'
  },
  {
    id: 'fc-44',
    itemId: '2.2.3',
    front: 'Qual a diferença entre SNAT/PAT (Masquerade), Static NAT (1:1) e DNAT (Port Forwarding)?',
    back: 'SNAT/PAT traduz IP de origem privado para IP público na saída (muitos:1 usando portas). Static NAT mapeia 1:1 fixo. DNAT traduz IP/porta de destino externo na entrada para servidor na DMZ.'
  },
  {
    id: 'fc-45',
    itemId: '2.2.4',
    front: 'Em qual ordem as regras de uma política de firewall são avaliadas e por que o Princípio do Menor Privilégio orienta o posicionamento?',
    back: 'Avaliação top-down (primeira regra coincidente vence e interrompe). Regras mais específicas vêm no topo; regras amplas (any/any) violam menor privilégio e nunca devem preceder exceções específicas.'
  },
  {
    id: 'fc-46',
    itemId: '2.2.5',
    front: 'Quais portas usa o Syslog padrão vs Syslog seguro e quais os 8 níveis de severidade RFC 5424 (0 a 7)?',
    back: 'UDP 514 (Syslog texto claro) e TCP 6514 (Syslog over TLS). Severidades 0–7: 0-Emergency, 1-Alert, 2-Critical, 3-Error, 4-Warning, 5-Notice, 6-Informational, 7-Debug (menor número = mais grave).'
  },
  {
    id: 'fc-47',
    itemId: '2.2.6',
    front: 'Em um cluster de firewall HA (Ativo-Passivo vs Ativo-Ativo), o que faz o link de Heartbeat e por que se habilita Session Sync?',
    back: 'Heartbeat monitora saúde entre nós; Session Sync replica a tabela de conexões ativas para o nó secundário assumir o failover sem derrubar sessões TCP/VPN existentes.'
  },
  {
    id: 'fc-48',
    itemId: '2.2.8',
    front: 'Qual porta utiliza a SSL-VPN por padrão, como opera o modo Web vs Tunnel e qual risco envolve Split Tunneling?',
    back: 'Porta TCP 443 (TLS). Modo Web/Portal (somente HTTP/RDP via browser) vs Modo Tunnel (interface virtual adaptador TUN/TAP). Split Tunneling libera tráfego internet direto do cliente sem inspeção do firewall corporativo.'
  },
  {
    id: 'fc-49',
    itemId: '2.2.9',
    front: 'Quais portas UDP são usadas pelo protocolo IKE na negociação IPsec com e sem NAT-T?',
    back: 'UDP 500 (IKE padrão sem NAT); UDP 4500 (NAT-Traversal / NAT-T encapsulando IKE e pacotes ESP em UDP quando há dispositivo NAT no caminho).'
  },
  {
    id: 'fc-50',
    itemId: '2.2.10',
    front: 'No IPsec IKE, o que é negociado na Phase 1 (IKE SA) em contraste com a Phase 2 (IPsec SA) e o que é PFS?',
    back: 'Phase 1 cria túnel seguro IKE SA e autentica os peers (PSK/certificado) em 6 msgs (Main Mode) ou 3 (Aggressive). Phase 2 (Quick Mode) cria SAs IPsec (ESP/AH) e sub-redes (Selectors). PFS força nova troca Diffie-Hellman na Phase 2.'
  },
  {
    id: 'fc-51',
    itemId: '2.2.11',
    front: 'Em troubleshooting de firewall, para que servem comandos de fluxo como `diag debug flow` / `packet-capture`?',
    back: 'Permitem rastrear passo a passo qual interface recebeu o pacote, rota escolhida, NAT aplicado e exatamente qual ID de política permitiu ou bloqueou o tráfego em tempo real.'
  },

  // ==================== EIXO 3 (10 itens restantes) ====================
  {
    id: 'fc-52',
    itemId: '3.1.1',
    front: 'Quais são os estados clássicos de um processo no SO e a diferença entre Paginação e Segmentação de memória?',
    back: 'Estados de processo: Novo, Pronto (Ready), Em Execução (Running), Bloqueado/Espera (Blocked) e Finalizado. Paginação divide memória em blocos de tamanho fixo (páginas/frames); Segmentação divide em blocos lógicos de tamanho variável (código, pilha, dados).'
  },
  {
    id: 'fc-53',
    itemId: '3.1.2',
    front: 'Quais os papéis dos protocolos Kerberos, LDAP e DNS em um domínio Active Directory interoperável com Linux (SSSD)?',
    back: 'DNS localiza DCs via registros SRV (`_ldap._tcp`, `_kerberos._tcp`); Kerberos (TCP/UDP 88) autentica usuários e emite tickets; LDAP (TCP 389 / LDAPS 636) consulta atributos, grupos e estrutura de diretório.'
  },
  {
    id: 'fc-54',
    itemId: '3.2.1',
    front: 'Em infraestrutura Windows Server, quais utilitários nativos tratam, respectivamente, gerenciamento de serviços, eventos de auditoria e preparação de imagem para clonagem?',
    back: 'Serviços: services.msc / sc.exe; Auditoria e falhas: Event Viewer (eventvwr.msc, IDs como 4624/4625); Preparação de imagem clonável (novo SID): Sysprep (`sysprep /generalize /oobe`).'
  },
  {
    id: 'fc-55',
    itemId: '3.2.2',
    front: 'Na hierarquia do Active Directory, o que representa o limite máximo de segurança e qual é a sigla das 3 partições obrigatórias replicadas entre DCs?',
    back: 'A fronteira de segurança do AD é a FLORESTA (Forest), e não o domínio. Partições (Naming Contexts): Schema, Configuration e Domain (além de Application partitions como DNS).'
  },
  {
    id: 'fc-56',
    itemId: '3.2.3',
    front: 'Quais registros SRV são obrigatórios no DNS para ingressar e autenticar no Active Directory e qual benefício traz o AD-Integrated DNS?',
    back: 'Registros SRV essenciais: `_ldap._tcp.dc._msdcs.<domínio>` e `_kerberos._tcp.dc._msdcs.<domínio>`. Zonas integradas ao AD replicam via multimaster AD (com segurança e atualização dinâmica segura).'
  },
  {
    id: 'fc-57',
    itemId: '3.2.4',
    front: 'No DHCP do Windows Server, o que é a Autorização no AD, quais as diferenças entre Failover Hot Standby e Load Balance e para que serve Exclusão vs Reserva?',
    back: 'DCs autorizam servidores DHCP no AD (evita Rogue DHCP). Load Balance divide leases (ex.: 50/50) entre dois servidores; Hot Standby mantém secundário passivo. Reserva vincula IP fixo a um MAC; Exclusão impede distribuição da faixa.'
  },
  {
    id: 'fc-58',
    itemId: '3.2.6',
    front: 'Como ocorre a replicação do AD (intrassite vs intersite), qual a janela máxima de tombstone lifetime (padrão moderno) e quais portas RPC/DRS usa?',
    back: 'Intrassite: notificação quase imediata (~15 s) sem compressão. Intersite (Site Links): agendada (padrão 180 min) com compressão. Tombstone Lifetime padrão moderno: 180 dias. Replicação AD: TCP 135 (RPC Endpoint Mapper) + RPC dinâmica + DNS/LDAP/GC.'
  },
  {
    id: 'fc-59',
    itemId: '3.2.9',
    front: 'Quais portas usam LDAP, LDAPS, Global Catalog e Global Catalog over TLS no Active Directory, e o que compõe um Distinguished Name (DN)?',
    back: 'LDAP: TCP 389 | LDAPS: TCP 636 | Global Catalog: TCP 3268 | GC over TLS: TCP 3269. Um DN lista caminho único hierárquico da folha até a raiz usando CN (Common Name), OU (Organizational Unit) e DC (Domain Component).'
  },
  {
    id: 'fc-60',
    itemId: '3.2.10',
    front: 'Quais cmdlets PowerShell listam contas AD inativas, testam porta TCP remota e consultam serviços ou logs de eventos?',
    back: '`Search-ADAccount -AccountInactive`, `Test-NetConnection -ComputerName host -Port 443`, `Get-Service` e `Get-WinEvent -LogName Security`.'
  },
  {
    id: 'fc-61',
    itemId: '3.2.11',
    front: 'Quais ferramentas oficiais da Microsoft diagnosticam saúde de replicação do AD, registro DNS e processamento efetivo de GPOs?',
    back: 'Replicação AD: `repadmin /replsummary` e `/showrepl`; Saúde de DCs/DNS: `dcdiag /test:dns`; GPO resultante no cliente: `gpresult /r` ou `gpresult /h relatorio.html` e `gpupdate /force`.'
  },

  // ==================== EIXO 4 (13 itens restantes) ====================
  {
    id: 'fc-62',
    itemId: '4.1.1',
    front: 'Quais portas padrão (texto claro e TLS/SSL) correspondem a SMTP, SMTP Submission, POP3 e IMAP?',
    back: 'SMTP relay: TCP 25 (STARTTLS opcional). SMTP Submission (clientes): TCP 587 (STARTTLS) ou 465 (SMTPS). POP3: TCP 110 (POP3S: 995). IMAP: TCP 143 (IMAPS: 993).'
  },
  {
    id: 'fc-63',
    itemId: '4.2.1',
    front: 'No Exchange Server moderno (2016/2019), quais são as duas únicas server roles existentes?',
    back: 'Apenas Mailbox Server (agrupa serviços de cliente, transporte, bancos e unified messaging) e Edge Transport Server (opcional na DMZ para relay/antispam de borda).'
  },
  {
    id: 'fc-64',
    itemId: '4.2.2',
    front: 'Quais mecanismos impedem que um servidor Exchange vire Open Relay na internet ao permitir envio de aplicações internas (impressoras/ERP)?',
    back: 'Create Receive Connector dedicado restrito apenas aos IPs internos autorizados (`RemoteIPRanges`), sem permissão `ExternallySecured`/`AnonymousUsers` aberta ao mundo.'
  },
  {
    id: 'fc-65',
    itemId: '4.2.3',
    front: 'Qual o limite típico recomendado de lookups DNS em um registro SPF (RFC 7208) e o significado dos qualificadores `-all` vs `~all`?',
    back: 'Limite máximo de 10 consultas DNS (lookups) no SPF para não gerar PermError. `-all` = Hard Fail (rejeitar não listados); `~all` = Soft Fail (marcar/quarentenar suspeito).'
  },
  {
    id: 'fc-66',
    itemId: '4.2.4',
    front: 'No Exchange Server, qual a diferença funcional entre Receive Connector e Send Connector?',
    back: 'Receive Connector é configurado por servidor para receber mensagens (porta 25/587); Send Connector é configurado no escopo da organização para rotear envios de saída (direto via DNS MX ou via Smart Host).'
  },
  {
    id: 'fc-67',
    itemId: '4.2.5',
    front: 'No transporte do Exchange, quais são as 3 filas principais envolvidas na entrega e qual o tempo padrão típico de expiração de mensagem na fila (`MessageExpirationTimeout`)?',
    back: 'Submission Queue, Mailbox/Remote Delivery Queues e Poison Message Queue (e Unreachable Queue). Expiração padrão na fila: 2 dias (48 horas), com aviso de atraso após 4 horas.'
  },
  {
    id: 'fc-68',
    itemId: '4.2.6',
    front: 'Qual cmdlet do Exchange rastreia o caminho de entrega, falhas e eventos SMTP de uma mensagem e qual EventId indica entrega bem-sucedida?',
    back: 'Cmdlet `Get-MessageTrackingLog` (filtrando por Sender, Recipients, MessageId e intervalo). Principais EventIds: RECEIVE, SEND, DELIVER (entregue na caixa local), FAIL e DEFER.'
  },
  {
    id: 'fc-69',
    itemId: '4.2.7',
    front: 'Qual porta utiliza o Outlook on the Web (OWA), qual política controla o bloqueio de download de anexos e qual cmdlet testa sua saúde?',
    back: 'HTTPS (TCP 443). Política: `OwaMailboxPolicy` (parâmetro `DirectFileAccessOnPublicComputersEnabled`). Cmdlet de teste: `Test-OwaConnectivity`.'
  },
  {
    id: 'fc-70',
    itemId: '4.2.8',
    front: 'O que é o EWS (Exchange Web Services) no Exchange, qual porta/protocolo utiliza e quais recursos dependem dele?',
    back: 'API SOAP/HTTPS (TCP 443, caminho `/EWS/Exchange.asmx`) usada por clientes Outlook/macOS, calendário/Free-Busy, Out of Office (OOF) e integrações corporativas.'
  },
  {
    id: 'fc-71',
    itemId: '4.2.9',
    front: 'Em um DAG (Database Availability Group) do Exchange, qual o máximo de membros suportado e quando é obrigatório um File Share Witness (FSW)?',
    back: 'Até 16 servidores de caixa de correio por DAG. FSW é obrigatório quando o número de nós do DAG é PAR (ex.: 2 ou 4 nós) para manter quorum (maioria N/2 + 1) no Windows Failover Cluster.'
  },
  {
    id: 'fc-72',
    itemId: '4.2.10',
    front: 'Quais são as extensões de arquivo de uma Mailbox Database do Exchange, seus logs de transação e qual o tamanho fixo de cada arquivo de log?',
    back: 'Banco de dados: `.edb` (ESE/Jet). Logs de transação: `.log` com tamanho fixo de 1 MB (1.024 KB) cada, além do checkpoint `.chk`. Circular Logging sobrescreve logs em vez de retê-los até o backup.'
  },
  {
    id: 'fc-73',
    itemId: '4.2.11',
    front: 'Quais serviços devem ser vinculados ao certificado SAN no Exchange Server e quais os dois cmdlets para importar e atribuir o certificado?',
    back: 'Serviços típicos: IIS (OWA/ECP/EWS/Autodiscover/ActiveSync) e SMTP (TLS transporte). Cmdlets: `Import-ExchangeCertificate` (.pfx) e `Enable-ExchangeCertificate -Services IIS,SMTP`.'
  },
  {
    id: 'fc-74',
    itemId: '4.2.12',
    front: 'Quais ferramentas nativas do Exchange Server identificam filas congestionadas, status de réplicas de DAG e saúde geral dos serviços?',
    back: 'Filas: `Get-Queue`; Cópias de banco DAG: `Get-MailboxDatabaseCopyStatus`; Replicação DAG: `Test-ReplicationHealth`; Componentes do servidor: `Get-ServerComponentState` / `Test-ServiceHealth`.'
  }
];
