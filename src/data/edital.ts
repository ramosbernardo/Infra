import { EditalAxis, EditalDocument, EditalItem } from '../types/edital';

function makeItem(
  axisId: string,
  sectionId: string,
  code: string,
  literalText: string,
  keywords: readonly string[] = []
): EditalItem {
  return Object.freeze({
    id: `${axisId}.${code}`,
    axisId,
    sectionId: `${axisId}.${sectionId}`,
    code,
    title: literalText,
    literalText,
    keywords: Object.freeze(keywords),
  });
}

const RAW_AXES: readonly EditalAxis[] = [
  {
    id: '1',
    number: 1,
    title: 'Redes.',
    literalTitle: '1. Redes.',
    sections: [
      {
        id: '1.1',
        axisId: '1',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Modelo OSI e arquitetura TCP/IP. 1.2. Endereçamento IPv4/IPv6 e sub-redes. 1.3. Redes locais e de longa distância (LAN, WAN e MPLS). 1.4. Noções de roteamento e comutação.',
        items: [
          makeItem('1', '1', '1.1', '1.1. Modelo OSI e arquitetura TCP/IP.', ['OSI', 'TCP/IP', 'camadas', 'encapsulamento', 'PDU']),
          makeItem('1', '1', '1.2', '1.2. Endereçamento IPv4/IPv6 e sub-redes.', ['IPv4', 'IPv6', 'CIDR', 'VLSM', 'máscara', 'sub-rede', 'NDP']),
          makeItem('1', '1', '1.3', '1.3. Redes locais e de longa distância (LAN, WAN e MPLS).', ['LAN', 'WAN', 'MPLS', 'label', 'LSP']),
          makeItem('1', '1', '1.4', '1.4. Noções de roteamento e comutação.', ['roteamento', 'comutação', 'OSPF', 'BGP', 'MAC', 'ARP']),
        ],
      },
      {
        id: '1.2',
        axisId: '1',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: TCP/IP, IPv4/IPv6, VLAN, trunk, STP, LACP, routing, DHCP, DNS, QoS, switching e troubleshooting.',
        items: [
          makeItem('1', '2', '2.1', 'TCP/IP', ['TCP', 'UDP', 'IP', 'three-way handshake']),
          makeItem('1', '2', '2.2', 'IPv4/IPv6', ['IPv4', 'IPv6', 'dual stack', 'SLAAC', 'DHCPv6']),
          makeItem('1', '2', '2.3', 'VLAN', ['802.1Q', 'broadcast domain', 'segmentação']),
          makeItem('1', '2', '2.4', 'trunk', ['802.1Q', 'tagged', 'untagged', 'native VLAN']),
          makeItem('1', '2', '2.5', 'STP', ['Spanning Tree', '802.1D', 'RSTP', '802.1w', 'loop', 'BPDU', 'Root Bridge']),
          makeItem('1', '2', '2.6', 'LACP', ['802.3ad', '802.1AX', 'link aggregation', 'port-channel']),
          makeItem('1', '2', '2.7', 'routing', ['roteamento estático', 'OSPF', 'BGP', 'tabela de roteamento']),
          makeItem('1', '2', '2.8', 'DHCP', ['DORA', 'lease', 'relay', 'ip helper']),
          makeItem('1', '2', '2.9', 'DNS', ['resolução de nomes', 'A', 'AAAA', 'CNAME', 'PTR', 'TXT', 'recursivo', 'autoritativo']),
          makeItem('1', '2', '2.10', 'QoS', ['DSCP', 'CoS', 'DiffServ', 'traffic shaping', 'policing']),
          makeItem('1', '2', '2.11', 'switching', ['camada 2', 'camada 3', 'tabela MAC', 'broadcast']),
          makeItem('1', '2', '2.12', 'troubleshooting', ['ping', 'traceroute', 'tcpdump', 'Wireshark', 'arp', 'netstat']),
        ],
      },
    ],
  },
  {
    id: '2',
    number: 2,
    title: 'Segurança de rede.',
    literalTitle: '2. Segurança de rede.',
    sections: [
      {
        id: '2.1',
        axisId: '2',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Dispositivos de segurança (firewalls, IDS, IPS, proxies, NAT e VPN). 1.2. Tipos de ataques a redes (spoofing, DNS spoofing, flood, DoS, DDoS, eavesdropping, brute force, port scanning e phishing). 1.3. Prevenção e tratamento de incidentes.',
        items: [
          makeItem('2', '1', '1.1', '1.1. Dispositivos de segurança (firewalls, IDS, IPS, proxies, NAT e VPN).', ['firewall', 'stateful', 'NGFW', 'IDS', 'IPS', 'proxy', 'NAT', 'VPN']),
          makeItem('2', '1', '1.2', '1.2. Tipos de ataques a redes (spoofing, DNS spoofing, flood, DoS, DDoS, eavesdropping, brute force, port scanning e phishing).', ['spoofing', 'DNS spoofing', 'flood', 'DoS', 'DDoS', 'eavesdropping', 'brute force', 'port scanning', 'phishing']),
          makeItem('2', '1', '1.3', '1.3. Prevenção e tratamento de incidentes.', ['CSIRT', 'contenção', 'erradicação', 'recuperação', 'NIST']),
        ],
      },
      {
        id: '2.2',
        axisId: '2',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: FortiGate, Check Point ou equivalentes, firewall, NAT, políticas, logs, HA, IPsec, SSL-VPN, IKE, Phase 1/Phase 2 e troubleshooting.',
        items: [
          makeItem('2', '2', '2.1', 'FortiGate, Check Point ou equivalentes', ['NGFW', 'FortiOS', 'Gaia', 'UTM']),
          makeItem('2', '2', '2.2', 'firewall', ['regras', 'zonas', 'DMZ', 'stateful inspection']),
          makeItem('2', '2', '2.3', 'NAT', ['SNAT', 'DNAT', 'PAT', 'VIP']),
          makeItem('2', '2', '2.4', 'políticas', ['ACL', 'implicit deny', 'ordem de regras']),
          makeItem('2', '2', '2.5', 'logs', ['auditoria', 'syslog', 'SIEM', 'tráfego']),
          makeItem('2', '2', '2.6', 'HA', ['ativo-passivo', 'ativo-ativo', 'heartbeat', 'state sync']),
          makeItem('2', '2', '2.7', 'IPsec', ['ESP', 'AH', 'modo túnel', 'modo transporte']),
          makeItem('2', '2', '2.8', 'SSL-VPN', ['TLS', 'acesso remoto', 'web mode', 'tunnel mode']),
          makeItem('2', '2', '2.9', 'IKE', ['IKEv1', 'IKEv2', 'UDP 500', 'NAT-T 4500', 'Diffie-Hellman']),
          makeItem('2', '2', '2.10', 'Phase 1/Phase 2', ['ISAKMP SA', 'IPsec SA', 'Quick Mode', 'Main Mode']),
          makeItem('2', '2', '2.11', 'troubleshooting', ['diagnose', 'packet capture', 'IKE debug']),
        ],
      },
    ],
  },
  {
    id: '3',
    number: 3,
    title: 'WINDOWS/ACTIVE DIRECTORY.',
    literalTitle: '3. WINDOWS/ACTIVE DIRECTORY.',
    sections: [
      {
        id: '3.1',
        axisId: '3',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Sistemas operacionais (gestão de processos, de memória e de entrada e saída). 1.2. Serviços de diretório (Active Directory e LDAP) e interoperabilidade.',
        items: [
          makeItem('3', '1', '1.1', '1.1. Sistemas operacionais (gestão de processos, de memória e de entrada e saída).', ['processos', 'threads', 'memória virtual', 'paginação', 'E/S']),
          makeItem('3', '1', '1.2', '1.2. Serviços de diretório (Active Directory e LDAP) e interoperabilidade.', ['Active Directory', 'LDAP', 'domínio', 'floresta', 'OU', 'interoperabilidade']),
        ],
      },
      {
        id: '3.2',
        axisId: '3',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: Windows Server, Active Directory, DNS, DHCP, GPO, replicação, FSMO, Kerberos, LDAP, PowerShell e troubleshooting.',
        items: [
          makeItem('3', '2', '2.1', 'Windows Server', ['AD DS', 'Domain Controller', 'NTDS.dit', 'SYSVOL']),
          makeItem('3', '2', '2.2', 'Active Directory', ['usuários', 'grupos', 'trusts', 'Global Catalog']),
          makeItem('3', '2', '2.3', 'DNS', ['AD-integrated', 'registros SRV', '_msdcs', 'encaminhadores']),
          makeItem('3', '2', '2.4', 'DHCP', ['autorização no AD', 'failover', 'escopos', 'reservas']),
          makeItem('3', '2', '2.5', 'GPO', ['LSDOU', 'gpupdate', 'gpresult', 'precedência', 'WMI filter']),
          makeItem('3', '2', '2.6', 'replicação', ['sites e sub-redes', 'KCC', 'repadmin', 'DFSR']),
          makeItem('3', '2', '2.7', 'FSMO', ['Schema Master', 'Domain Naming', 'PDC Emulator', 'RID Master', 'Infrastructure Master']),
          makeItem('3', '2', '2.8', 'Kerberos', ['TGT', 'TGS', 'KDC', 'porta 88', 'SPN', 'time skew']),
          makeItem('3', '2', '2.9', 'LDAP', ['389', 'LDAPS 636', 'DN', 'CN', 'OU', 'DC']),
          makeItem('3', '2', '2.10', 'PowerShell', ['cmdlets', 'Get-ADUser', 'pipeline', 'remoting']),
          makeItem('3', '2', '2.11', 'troubleshooting', ['dcdiag', 'repadmin', 'Event Viewer', 'nslookup']),
        ],
      },
    ],
  },
  {
    id: '4',
    number: 4,
    title: 'Correio eletrônico.',
    literalTitle: '4. Correio eletrônico.',
    sections: [
      {
        id: '4.1',
        axisId: '4',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Arquitetura e protocolos de correio eletrônico (SMTP, POP3, IMAP e registros MX). 1.2. Mecanismos de proteção de e-mail (SPF, DKIM, DMARC e antispam).',
        items: [
          makeItem('4', '1', '1.1', '1.1. Arquitetura e protocolos de correio eletrônico (SMTP, POP3, IMAP e registros MX).', ['SMTP', 'POP3', 'IMAP', 'MX', 'MUA', 'MTA', 'MDA']),
          makeItem('4', '1', '1.2', '1.2. Mecanismos de proteção de e-mail (SPF, DKIM, DMARC e antispam).', ['SPF', 'DKIM', 'DMARC', 'antispam', 'TXT']),
        ],
      },
      {
        id: '4.2',
        axisId: '4',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: Microsoft Exchange Server, SMTP relay, antispam, conectores, filas, Message Tracking, OWA, EWS, DAG, databases, certificados e troubleshooting.',
        items: [
          makeItem('4', '2', '2.1', 'Microsoft Exchange Server', ['Mailbox', 'Edge Transport', 'arquitetura Exchange']),
          makeItem('4', '2', '2.2', 'SMTP relay', ['open relay', 'smart host', 'autenticação SMTP']),
          makeItem('4', '2', '2.3', 'antispam', ['RBL', 'greylisting', 'reputação', 'quarentena']),
          makeItem('4', '2', '2.4', 'conectores', ['Receive Connector', 'Send Connector']),
          makeItem('4', '2', '2.5', 'filas', ['Queue Viewer', 'poison queue', 'retry']),
          makeItem('4', '2', '2.6', 'Message Tracking', ['Get-MessageTrackingLog', 'rastreamento']),
          makeItem('4', '2', '2.7', 'OWA', ['Outlook on the web', 'HTTPS', 'diretório virtual']),
          makeItem('4', '2', '2.8', 'EWS', ['Exchange Web Services', 'Autodiscover']),
          makeItem('4', '2', '2.9', 'DAG', ['Database Availability Group', 'witness server', 'failover']),
          makeItem('4', '2', '2.10', 'databases', ['EDB', 'logs de transação', 'circular logging']),
          makeItem('4', '2', '2.11', 'certificados', ['SAN', 'TLS', 'autodiscover']),
          makeItem('4', '2', '2.12', 'troubleshooting', ['Test-Mailflow', 'telnet 25', 'headers']),
        ],
      },
    ],
  },
  {
    id: '5',
    number: 5,
    title: 'Virtualização, storage e nuvem.',
    literalTitle: '5. Virtualização, storage e nuvem.',
    sections: [
      {
        id: '5.1',
        axisId: '5',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Virtualização e hipervisores. 1.2. Serviços de armazenamento, padrões de disco e de interfaces. 1.3. RAID. 1.4. Tecnologias de armazenamento NAS e SAN. 1.5. Computação em nuvem: modelos de serviço (IaaS, PaaS e SaaS); modelos de implantação (pública, privada e híbrida); elasticidade e escalabilidade.',
        items: [
          makeItem('5', '1', '1.1', '1.1. Virtualização e hipervisores.', ['hipervisor tipo 1', 'tipo 2', 'bare-metal', 'paravirtualização']),
          makeItem('5', '1', '1.2', '1.2. Serviços de armazenamento, padrões de disco e de interfaces.', ['SAS', 'SATA', 'NVMe', 'SSD', 'block', 'file', 'object']),
          makeItem('5', '1', '1.3', '1.3. RAID.', ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 6', 'RAID 10', 'paridade']),
          makeItem('5', '1', '1.4', '1.4. Tecnologias de armazenamento NAS e SAN.', ['NAS', 'NFS', 'SMB', 'SAN', 'Fibre Channel', 'iSCSI']),
          makeItem('5', '1', '1.5', '1.5. Computação em nuvem: modelos de serviço (IaaS, PaaS e SaaS); modelos de implantação (pública, privada e híbrida); elasticidade e escalabilidade.', ['IaaS', 'PaaS', 'SaaS', 'pública', 'privada', 'híbrida', 'elasticidade', 'escalabilidade']),
        ],
      },
      {
        id: '5.2',
        axisId: '5',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: VMware vSphere/vCenter/ESXi ou equivalentes, HA, vMotion, datastore, snapshots, iSCSI, LUN, RAID, multipath, IOPS, latência e troubleshooting.',
        items: [
          makeItem('5', '2', '2.1', 'VMware vSphere/vCenter/ESXi ou equivalentes', ['ESXi', 'vCenter', 'DRS', 'KVM', 'Hyper-V']),
          makeItem('5', '2', '2.2', 'HA', ['vSphere HA', 'admission control', 'host isolation']),
          makeItem('5', '2', '2.3', 'vMotion', ['live migration', 'Storage vMotion', 'VMkernel']),
          makeItem('5', '2', '2.4', 'datastore', ['VMFS', 'NFS', 'thin provisioning', 'thick provisioning']),
          makeItem('5', '2', '2.5', 'snapshots', ['delta disk', 'consolidação', 'cuidado com retenção']),
          makeItem('5', '2', '2.6', 'iSCSI', ['IQN', 'initiator', 'target', 'TCP 3260']),
          makeItem('5', '2', '2.7', 'LUN', ['Logical Unit Number', 'masking', 'zoning']),
          makeItem('5', '2', '2.8', 'RAID', ['hot spare', 'rebuild', 'write penalty']),
          makeItem('5', '2', '2.9', 'multipath', ['MPIO', 'ALUA', 'round robin']),
          makeItem('5', '2', '2.10', 'IOPS', ['throughput', 'read/write ratio', 'queue depth']),
          makeItem('5', '2', '2.11', 'latência', ['DAVG', 'KAVG', 'GAVG', 'esxtop']),
          makeItem('5', '2', '2.12', 'troubleshooting', ['esxtop', 'vmkernel.log', 'APD', 'PDL']),
        ],
      },
    ],
  },
  {
    id: '6',
    number: 6,
    title: 'Backup.',
    literalTitle: '6. Backup.',
    sections: [
      {
        id: '6.1',
        axisId: '6',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Tipos de backup (completo, incremental e diferencial). 1.2. Tecnologias e mídias de backup. 1.3. Deduplicação.',
        items: [
          makeItem('6', '1', '1.1', '1.1. Tipos de backup (completo, incremental e diferencial).', ['full', 'incremental', 'diferencial', 'sintético', 'bit archive']),
          makeItem('6', '1', '1.2', '1.2. Tecnologias e mídias de backup.', ['LTO', 'fitas', 'disco', 'nuvem', 'regra 3-2-1', 'imutabilidade']),
          makeItem('6', '1', '1.3', '1.3. Deduplicação.', ['inline', 'post-process', 'source-side', 'target-side', 'blocos']),
        ],
      },
      {
        id: '6.2',
        axisId: '6',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: Commvault ou equivalentes, políticas de backup, retenção, restore, RPO/RTO, replicação e recuperação de desastres.',
        items: [
          makeItem('6', '2', '2.1', 'Commvault ou equivalentes', ['CommServe', 'MediaAgent', 'Veeam', 'subclient']),
          makeItem('6', '2', '2.2', 'políticas de backup', ['janela de backup', 'GFS', 'agendamento']),
          makeItem('6', '2', '2.3', 'retenção', ['ciclos', 'dias', 'WORM', 'compliance']),
          makeItem('6', '2', '2.4', 'restore', ['granular', 'bare metal', 'point-in-time', 'teste de restore']),
          makeItem('6', '2', '2.5', 'RPO/RTO', ['Recovery Point Objective', 'Recovery Time Objective']),
          makeItem('6', '2', '2.6', 'replicação', ['offsite', 'AUX Copy', 'assíncrona', 'síncrona']),
          makeItem('6', '2', '2.7', 'recuperação de desastres', ['DR', 'runbook', 'site secundário']),
        ],
      },
    ],
  },
  {
    id: '7',
    number: 7,
    title: 'WI-FI/NAC.',
    literalTitle: '7. WI-FI/NAC.',
    sections: [
      {
        id: '7.1',
        axisId: '7',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Redes sem fio (padrões IEEE 802.11). 1.2. Protocolos 802.1X e EAP. 1.3. Mecanismos de segurança em redes sem fio (WEP, WPA, WPA2 e WPA3).',
        items: [
          makeItem('7', '1', '1.1', '1.1. Redes sem fio (padrões IEEE 802.11).', ['802.11a/b/g/n/ac/ax', 'Wi-Fi 6', '2.4 GHz', '5 GHz', '6 GHz', 'SSID', 'BSSID']),
          makeItem('7', '1', '1.2', '1.2. Protocolos 802.1X e EAP.', ['802.1X', 'supplicant', 'authenticator', 'authentication server', 'EAP-TLS', 'PEAP']),
          makeItem('7', '1', '1.3', '1.3. Mecanismos de segurança em redes sem fio (WEP, WPA, WPA2 e WPA3).', ['WEP', 'TKIP', 'WPA2', 'AES-CCMP', 'WPA3', 'SAE', 'PMF']),
        ],
      },
      {
        id: '7.2',
        axisId: '7',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: Cisco ISE, Omada ou equivalentes, 802.1X, RADIUS, autenticação, VLAN dinâmica, WPA2/WPA3 e troubleshooting.',
        items: [
          makeItem('7', '2', '2.1', 'Cisco ISE, Omada ou equivalentes', ['NAC', 'postura', 'MAB', 'CoA']),
          makeItem('7', '2', '2.2', '802.1X', ['EAPoL', 'porta controlada', 'porta não controlada']),
          makeItem('7', '2', '2.3', 'RADIUS', ['UDP 1812', '1813', 'accounting', 'shared secret']),
          makeItem('7', '2', '2.4', 'autenticação', ['PSK', 'Enterprise', 'certificados', 'Active Directory']),
          makeItem('7', '2', '2.5', 'VLAN dinâmica', ['Tunnel-Private-Group-ID', 'dACL', 'segmentação']),
          makeItem('7', '2', '2.6', 'WPA2/WPA3', ['4-way handshake', 'SAE', 'transition mode']),
          makeItem('7', '2', '2.7', 'troubleshooting', ['RADIUS Live Logs', 'roaming', 'interferência', 'SNR']),
        ],
      },
    ],
  },
  {
    id: '8',
    number: 8,
    title: 'Telefonia IP.',
    literalTitle: '8. Telefonia IP.',
    sections: [
      {
        id: '8.1',
        axisId: '8',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Voz sobre IP (VoIP). 1.2. Sinalização e transporte de mídia. 1.3. Codecs. 1.4. Requisitos de qualidade de voz (latência, jitter e perda de pacotes).',
        items: [
          makeItem('8', '1', '1.1', '1.1. Voz sobre IP (VoIP).', ['VoIP', 'PBX IP', 'SBC', 'PSTN']),
          makeItem('8', '1', '1.2', '1.2. Sinalização e transporte de mídia.', ['SIP', 'SDP', 'RTP', 'RTCP', 'SRTP', 'H.323']),
          makeItem('8', '1', '1.3', '1.3. Codecs.', ['G.711', 'G.729', 'G.722', 'Opus', 'MOS', 'taxa de bits']),
          makeItem('8', '1', '1.4', '1.4. Requisitos de qualidade de voz (latência, jitter e perda de pacotes).', ['latência < 150ms', 'jitter < 30ms', 'perda de pacotes < 1%']),
        ],
      },
      {
        id: '8.2',
        axisId: '8',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: Cisco IP Telephony ou equivalentes, VLAN de voz, QoS, SIP, RTP, PoE e troubleshooting.',
        items: [
          makeItem('8', '2', '2.1', 'Cisco IP Telephony ou equivalentes', ['CUCM', 'Asterisk', 'ramais', 'dial plan']),
          makeItem('8', '2', '2.2', 'VLAN de voz', ['voice VLAN', 'LLDP-MED', 'CDP']),
          makeItem('8', '2', '2.3', 'QoS', ['DSCP EF 46', 'CS3', 'LLQ', 'prioridade']),
          makeItem('8', '2', '2.4', 'SIP', ['INVITE', 'ACK', 'BYE', 'REGISTER', '5060', '5061']),
          makeItem('8', '2', '2.5', 'RTP', ['UDP', 'mídia', 'buffer de jitter']),
          makeItem('8', '2', '2.6', 'PoE', ['802.3af', '802.3at', '802.3bt', 'power budget']),
          makeItem('8', '2', '2.7', 'troubleshooting', ['SIP ALG', 'one-way audio', 'NAT', 'captura RTP']),
        ],
      },
    ],
  },
  {
    id: '9',
    number: 9,
    title: 'Balanceamento de carga.',
    literalTitle: '9. Balanceamento de carga.',
    sections: [
      {
        id: '9.1',
        axisId: '9',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Servidores de aplicação (conceitos e noções de administração). 1.2. Balanceamento de carga, failover e replicação de estado. 1.3. Topologias de alta disponibilidade e escalabilidade.',
        items: [
          makeItem('9', '1', '1.1', '1.1. Servidores de aplicação (conceitos e noções de administração).', ['IIS', 'Nginx', 'Apache', 'Tomcat', 'reverse proxy']),
          makeItem('9', '1', '1.2', '1.2. Balanceamento de carga, failover e replicação de estado.', ['round robin', 'least connections', 'failover', 'session persistence']),
          makeItem('9', '1', '1.3', '1.3. Topologias de alta disponibilidade e escalabilidade.', ['horizontal', 'vertical', 'ativo-ativo', 'ativo-passivo', 'VRRP']),
        ],
      },
      {
        id: '9.2',
        axisId: '9',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: A10, HAProxy ou equivalentes, VIP, pools, health checks, persistência, NAT e SSL offloading.',
        items: [
          makeItem('9', '2', '2.1', 'A10, HAProxy ou equivalentes', ['ADC', 'L4', 'L7', 'frontend/backend']),
          makeItem('9', '2', '2.2', 'VIP', ['Virtual IP', 'Virtual Server']),
          makeItem('9', '2', '2.3', 'pools', ['service group', 'backend servers', 'weight']),
          makeItem('9', '2', '2.4', 'health checks', ['TCP', 'HTTP', 'intervalo', 'timeout']),
          makeItem('9', '2', '2.5', 'persistência', ['sticky session', 'cookie', 'source IP']),
          makeItem('9', '2', '2.6', 'NAT', ['SNAT', 'X-Forwarded-For', 'DSR']),
          makeItem('9', '2', '2.7', 'SSL offloading', ['terminação TLS', 're-encryption', 'certificado no ADC']),
        ],
      },
    ],
  },
  {
    id: '10',
    number: 10,
    title: 'Monitoramento.',
    literalTitle: '10. Monitoramento.',
    sections: [
      {
        id: '10.1',
        axisId: '10',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Gerenciamento de redes TCP/IP (arquitetura de gerenciamento, SMI, SNMP e MIB). 1.2. Observabilidade (monitoramento, logs e rastreamento). 1.3. Detecção de problemas e otimização de desempenho.',
        items: [
          makeItem('10', '1', '1.1', '1.1. Gerenciamento de redes TCP/IP (arquitetura de gerenciamento, SMI, SNMP e MIB).', ['SMI', 'MIB', 'OID', 'SNMPv1/v2c/v3', 'GET', 'TRAP', 'INFORM']),
          makeItem('10', '1', '1.2', '1.2. Observabilidade (monitoramento, logs e rastreamento).', ['métricas', 'logs', 'traces', 'OpenTelemetry']),
          makeItem('10', '1', '1.3', '1.3. Detecção de problemas e otimização de desempenho.', ['baseline', 'anomalia', 'gargalos', 'tuning']),
        ],
      },
      {
        id: '10.2',
        axisId: '10',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: PRTG, Zabbix/Grafana ou ferramentas equivalentes, SNMP, WMI, agentes, syslog, métricas, alertas, disponibilidade e capacidade.',
        items: [
          makeItem('10', '2', '2.1', 'PRTG, Zabbix/Grafana ou ferramentas equivalentes', ['Zabbix Server', 'Proxy', 'Grafana', 'PRTG', 'dashboards']),
          makeItem('10', '2', '2.2', 'SNMP', ['UDP 161', 'UDP 162', 'SNMPv3 authPriv']),
          makeItem('10', '2', '2.3', 'WMI', ['Windows Management Instrumentation', 'WinRM', 'PerfMon']),
          makeItem('10', '2', '2.4', 'agentes', ['ativo', 'passivo', 'Zabbix Agent']),
          makeItem('10', '2', '2.5', 'syslog', ['RFC 5424', 'UDP/TCP 514', 'severidade']),
          makeItem('10', '2', '2.6', 'métricas', ['time series', 'CPU', 'memória', 'disco', 'rede']),
          makeItem('10', '2', '2.7', 'alertas', ['triggers', 'thresholds', 'escalonamento']),
          makeItem('10', '2', '2.8', 'disponibilidade', ['uptime', 'SLA', 'ICMP', 'synthetic check']),
          makeItem('10', '2', '2.9', 'capacidade', ['capacity planning', 'tendência', 'saturação']),
        ],
      },
    ],
  },
  {
    id: '11',
    number: 11,
    title: 'LINUX.',
    literalTitle: '11. LINUX.',
    sections: [
      {
        id: '11.1',
        axisId: '11',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Instalação, configuração e administração de sistemas operacionais Linux. 1.2. Estrutura de diretórios. 1.3. Usuários e grupos.',
        items: [
          makeItem('11', '1', '1.1', '1.1. Instalação, configuração e administração de sistemas operacionais Linux.', ['kernel', 'bootloader', 'GRUB', 'pacotes', 'apt/dnf']),
          makeItem('11', '1', '1.2', '1.2. Estrutura de diretórios.', ['FHS', '/etc', '/var', '/usr', '/opt', '/proc', '/dev', '/home']),
          makeItem('11', '1', '1.3', '1.3. Usuários e grupos.', ['/etc/passwd', '/etc/shadow', '/etc/group', 'sudo', 'UID', 'GID']),
        ],
      },
      {
        id: '11.2',
        axisId: '11',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: administração, SSH, Bash, systemd, processos, filesystem, permissões, serviços, rede e logs.',
        items: [
          makeItem('11', '2', '2.1', 'administração', ['top', 'htop', 'df', 'du', 'free', 'uname']),
          makeItem('11', '2', '2.2', 'SSH', ['OpenSSH', 'porta 22', 'chaves públicas', 'sshd_config']),
          makeItem('11', '2', '2.3', 'Bash', ['pipes', 'redirecionamento', 'variáveis', 'grep', 'awk', 'sed']),
          makeItem('11', '2', '2.4', 'systemd', ['systemctl', 'unit files', 'targets', 'journalctl']),
          makeItem('11', '2', '2.5', 'processos', ['ps', 'kill', 'SIGTERM', 'SIGKILL', 'nice', 'lsof']),
          makeItem('11', '2', '2.6', 'filesystem', ['ext4', 'xfs', 'LVM', 'mount', '/etc/fstab', 'inode']),
          makeItem('11', '2', '2.7', 'permissões', ['chmod', 'chown', 'umask', 'SUID', 'SGID', 'Sticky Bit', 'ACL']),
          makeItem('11', '2', '2.8', 'serviços', ['daemons', 'sockets', 'habilitação no boot']),
          makeItem('11', '2', '2.9', 'rede', ['ip addr', 'ip route', 'ss', 'nmcli', 'iptables/nftables']),
          makeItem('11', '2', '2.10', 'logs', ['/var/log', 'journald', 'rsyslog', 'logrotate']),
        ],
      },
    ],
  },
  {
    id: '12',
    number: 12,
    title: 'Automação.',
    literalTitle: '12. Automação.',
    sections: [
      {
        id: '12.1',
        axisId: '12',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Lógica de programação aplicada a scripts. 1.2. Noções de DevOps, infraestrutura como código e conteinerização de aplicações (Docker e Kubernetes).',
        items: [
          makeItem('12', '1', '1.1', '1.1. Lógica de programação aplicada a scripts.', ['condicionais', 'laços', 'funções', 'variáveis', 'exit codes']),
          makeItem('12', '1', '1.2', '1.2. Noções de DevOps, infraestrutura como código e conteinerização de aplicações (Docker e Kubernetes).', ['DevOps', 'CI/CD', 'IaC', 'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Pods', 'Containers']),
        ],
      },
      {
        id: '12.2',
        axisId: '12',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: PowerShell, Bash, APIs REST, JSON, CSV, tarefas agendadas, execução remota e tratamento de erros.',
        items: [
          makeItem('12', '2', '2.1', 'PowerShell', ['objetos', 'ConvertTo-Json', 'Invoke-RestMethod', 'Import-Csv']),
          makeItem('12', '2', '2.2', 'Bash', ['#!/bin/bash', 'set -euo pipefail', 'jq', 'curl']),
          makeItem('12', '2', '2.3', 'APIs REST', ['GET', 'POST', 'PUT', 'DELETE', 'status HTTP', 'autenticação']),
          makeItem('12', '2', '2.4', 'JSON', ['serialização', 'parsing', 'estrutura chave-valor']),
          makeItem('12', '2', '2.5', 'CSV', ['delimitadores', 'importação', 'exportação em lote']),
          makeItem('12', '2', '2.6', 'tarefas agendadas', ['cron', 'systemd timers', 'Task Scheduler']),
          makeItem('12', '2', '2.7', 'execução remota', ['WinRM', 'Enter-PSSession', 'SSH', 'Ansible']),
          makeItem('12', '2', '2.8', 'tratamento de erros', ['try/catch/finally', '$ErrorActionPreference', 'trap', 'stderr']),
        ],
      },
    ],
  },
  {
    id: '13',
    number: 13,
    title: 'Segurança.',
    literalTitle: '13. Segurança.',
    sections: [
      {
        id: '13.1',
        axisId: '13',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Princípios de segurança da informação (confidencialidade, integridade, disponibilidade, autenticidade e não repúdio). 1.2. Métodos de autenticação e autorização (MFA, OAuth 2.0, OpenID Connect e JWT). 1.3. Criptografia simétrica e assimétrica, principais algoritmos e protocolos, proteção de dados em trânsito e em repouso. 1.4. Assinatura e certificação digital. 1.5. Malwares (vírus, cavalo de Troia, worms, ransomware, spyware, backdoors e keyloggers). 1.6. Antivírus.',
        items: [
          makeItem('13', '1', '1.1', '1.1. Princípios de segurança da informação (confidencialidade, integridade, disponibilidade, autenticidade e não repúdio).', ['CIDAN', 'confidencialidade', 'integridade', 'disponibilidade', 'autenticidade', 'não repúdio']),
          makeItem('13', '1', '1.2', '1.2. Métodos de autenticação e autorização (MFA, OAuth 2.0, OpenID Connect e JWT).', ['MFA', 'OAuth 2.0', 'OpenID Connect', 'JWT', 'SSO']),
          makeItem('13', '1', '1.3', '1.3. Criptografia simétrica e assimétrica, principais algoritmos e protocolos, proteção de dados em trânsito e em repouso.', ['AES', 'RSA', 'ECC', 'SHA-256', 'TLS', 'BitLocker']),
          makeItem('13', '1', '1.4', '1.4. Assinatura e certificação digital.', ['PKI', 'ICP-Brasil', 'AC', 'X.509', 'hash', 'chave privada']),
          makeItem('13', '1', '1.5', '1.5. Malwares (vírus, cavalo de Troia, worms, ransomware, spyware, backdoors e keyloggers).', ['vírus', 'cavalo de Troia', 'worms', 'ransomware', 'spyware', 'backdoors', 'keyloggers']),
          makeItem('13', '1', '1.6', '1.6. Antivírus.', ['EDR', 'heurística', 'assinaturas', 'sandbox', 'quarentena']),
        ],
      },
      {
        id: '13.2',
        axisId: '13',
        code: '2',
        title: '2. Técnicas e procedimentos:',
        literalText:
          '2. Técnicas e procedimentos: hardening, gestão de acessos, menor privilégio, MFA, certificados, vulnerabilidades, segmentação e segurança operacional.',
        items: [
          makeItem('13', '2', '2.1', 'hardening', ['CIS Benchmarks', 'remoção de serviços', 'patch management']),
          makeItem('13', '2', '2.2', 'gestão de acessos', ['IAM', 'RBAC', 'PAM', 'revisão periódica']),
          makeItem('13', '2', '2.3', 'menor privilégio', ['least privilege', 'need-to-know', 'separação de funções']),
          makeItem('13', '2', '2.4', 'MFA', ['TOTP', 'FIDO2', 'hardware token']),
          makeItem('13', '2', '2.5', 'certificados', ['renovação', 'CRL', 'OCSP', 'cadeia de confiança']),
          makeItem('13', '2', '2.6', 'vulnerabilidades', ['CVE', 'CVSS', 'scan de vulnerabilidades', 'correção']),
          makeItem('13', '2', '2.7', 'segmentação', ['microssegmentação', 'Zero Trust', 'DMZ', 'VLAN']),
          makeItem('13', '2', '2.8', 'segurança operacional', ['OPSEC', 'auditoria', 'monitoramento contínuo']),
        ],
      },
    ],
  },
  {
    id: '14',
    number: 14,
    title: 'Troubleshooting.',
    literalTitle: '14. Troubleshooting.',
    sections: [
      {
        id: '14.1',
        axisId: '14',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Gerenciamento de incidentes e de problemas. 1.2. Metodologias de análise de causa raiz.',
        items: [
          makeItem('14', '1', '1.1', '1.1. Gerenciamento de incidentes e de problemas.', ['incidente', 'problema', 'erro conhecido', 'workaround', 'restauração']),
          makeItem('14', '1', '1.2', '1.2. Metodologias de análise de causa raiz.', ['RCA', '5 Porquês', 'Ishikawa', 'árvore de falhas']),
        ],
      },
      {
        id: '14.2',
        axisId: '14',
        code: '2',
        title: '2. Técnicas e procedimentos:',
        literalText:
          '2. Técnicas e procedimentos: metodologia de diagnóstico, análise de logs, coleta de evidências, isolamento de falhas, correlação de eventos, análise de causa raiz e procedimentos de recuperação.',
        items: [
          makeItem('14', '2', '2.1', 'metodologia de diagnóstico', ['top-down', 'bottom-up', 'divide-and-conquer']),
          makeItem('14', '2', '2.2', 'análise de logs', ['timestamps', 'severidade', 'filtros', 'SIEM']),
          makeItem('14', '2', '2.3', 'coleta de evidências', ['dumps', 'pcaps', 'cadeia de custódia', 'snapshots']),
          makeItem('14', '2', '2.4', 'isolamento de falhas', ['escopo', 'teste de hipótese', 'camada física vs lógica']),
          makeItem('14', '2', '2.5', 'correlação de eventos', ['NTP', 'linha do tempo', 'dependências']),
          makeItem('14', '2', '2.6', 'análise de causa raiz', ['post-mortem', 'prevenção de recorrência']),
          makeItem('14', '2', '2.7', 'procedimentos de recuperação', ['rollback', 'failback', 'validação pós-recuperação']),
        ],
      },
    ],
  },
  {
    id: '15',
    number: 15,
    title: 'Alta disponibilidade e continuidade.',
    literalTitle: '15. Alta disponibilidade e continuidade.',
    sections: [
      {
        id: '15.1',
        axisId: '15',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Tecnologias, arquitetura e gestão de data center e de ambientes de missão crítica. 1.2. Redundância e tolerância a falhas.',
        items: [
          makeItem('15', '1', '1.1', '1.1. Tecnologias, arquitetura e gestão de data center e de ambientes de missão crítica.', ['Tier I-IV', 'Uptime Institute', 'climatização', 'energia', 'UPS', 'gerador']),
          makeItem('15', '1', '1.2', '1.2. Redundância e tolerância a falhas.', ['N+1', '2N', '2N+1', 'SPOF', 'disponibilidade percentual']),
        ],
      },
      {
        id: '15.2',
        axisId: '15',
        code: '2',
        title: '2. Tecnologias e ferramentas:',
        literalText:
          '2. Tecnologias e ferramentas: clusters, redundância, failover, HA, RPO, RTO, Disaster Recovery e testes de recuperação.',
        items: [
          makeItem('15', '2', '2.1', 'clusters', ['quórum', 'split-brain', 'witness', 'heartbeat']),
          makeItem('15', '2', '2.2', 'redundância', ['link', 'energia', 'storage', 'controladora']),
          makeItem('15', '2', '2.3', 'failover', ['automático', 'manual', 'failback']),
          makeItem('15', '2', '2.4', 'HA', ['alta disponibilidade', '99,9%', '99,99%', '99,999%']),
          makeItem('15', '2', '2.5', 'RPO', ['perda máxima tolerável de dados']),
          makeItem('15', '2', '2.6', 'RTO', ['tempo máximo de parada tolerável']),
          makeItem('15', '2', '2.7', 'Disaster Recovery', ['hot site', 'warm site', 'cold site', 'PCN', 'DRP']),
          makeItem('15', '2', '2.8', 'testes de recuperação', ['tabletop', 'simulação', 'failover programado']),
        ],
      },
    ],
  },
  {
    id: '16',
    number: 16,
    title: 'Gestão e governança de TI.',
    literalTitle: '16. Gestão e governança de TI.',
    sections: [
      {
        id: '16.1',
        axisId: '16',
        code: '1',
        title: '1. Conceitos básicos e fundamentos.',
        literalText:
          '1. Conceitos básicos e fundamentos. 1.1. Governança corporativa de TI, papéis e responsabilidades e alinhamento estratégico entre TI e negócio. 1.2. Gestão de serviços, cadeia de valor de serviço e acordos de nível de serviço (SLA e OLA). 1.3. Gerenciamento de incidentes, problemas e mudanças. 1.4. Identificação, análise, avaliação e tratamento de riscos. 1.5. Ciclo de vida de projetos, gestão de escopo, prazo, custo e partes interessadas e princípios ágeis. 1.6. Planejamento estratégico de TI e indicadores de desempenho. 1.7. Mapeamento, análise e melhoria contínua de processos. 1.8. Planejamento, gestão e fiscalização de contratações de TI no setor público. 1.9. Sistema de gestão de segurança da informação (SGSI), análise de impacto no negócio (BIA) e plano de continuidade de negócios. 1.10. Compliance e conformidade normativa. 1.11. Transparência e proteção de dados pessoais. 1.12. Governança, qualidade e ciclo de vida dos dados.',
        items: [
          makeItem('16', '1', '1.1', '1.1. Governança corporativa de TI, papéis e responsabilidades e alinhamento estratégico entre TI e negócio.', ['EDM', 'alinhamento estratégico', 'entrega de valor']),
          makeItem('16', '1', '1.2', '1.2. Gestão de serviços, cadeia de valor de serviço e acordos de nível de serviço (SLA e OLA).', ['SVS', 'cadeia de valor', 'SLA', 'OLA', 'UC']),
          makeItem('16', '1', '1.3', '1.3. Gerenciamento de incidentes, problemas e mudanças.', ['incidente', 'problema', 'habilitação de mudança', 'CAB']),
          makeItem('16', '1', '1.4', '1.4. Identificação, análise, avaliação e tratamento de riscos.', ['mitigar', 'transferir', 'aceitar', 'evitar', 'risco residual']),
          makeItem('16', '1', '1.5', '1.5. Ciclo de vida de projetos, gestão de escopo, prazo, custo e partes interessadas e princípios ágeis.', ['escopo', 'EAP', 'cronograma', 'custo', 'stakeholders', 'ágil']),
          makeItem('16', '1', '1.6', '1.6. Planejamento estratégico de TI e indicadores de desempenho.', ['PETI', 'PDTI', 'KPI', 'OKR', 'BSC']),
          makeItem('16', '1', '1.7', '1.7. Mapeamento, análise e melhoria contínua de processos.', ['AS-IS', 'TO-BE', 'melhoria contínua', 'PDCA']),
          makeItem('16', '1', '1.8', '1.8. Planejamento, gestão e fiscalização de contratações de TI no setor público.', ['ETP', 'TR', 'IN SGD/ME', 'Lei 14.133', 'fiscal técnico', 'gestor do contrato']),
          makeItem('16', '1', '1.9', '1.9. Sistema de gestão de segurança da informação (SGSI), análise de impacto no negócio (BIA) e plano de continuidade de negócios.', ['SGSI', 'BIA', 'PCN', 'MTPD']),
          makeItem('16', '1', '1.10', '1.10. Compliance e conformidade normativa.', ['auditoria', 'controles internos', 'conformidade']),
          makeItem('16', '1', '1.11', '1.11. Transparência e proteção de dados pessoais.', ['transparência ativa', 'passiva', 'titular', 'ANPD', 'encarregado']),
          makeItem('16', '1', '1.12', '1.12. Governança, qualidade e ciclo de vida dos dados.', ['qualidade de dados', 'metadados', 'linhagem', 'ciclo de vida']),
        ],
      },
      {
        id: '16.2',
        axisId: '16',
        code: '2',
        title: '2. Frameworks, normas e legislação:',
        literalText:
          '2. Frameworks, normas e legislação: COBIT 2019; ISO/IEC 38500; ITIL 4; ISO 31000; COSO; PMBOK 7ª edição; Scrum e Kanban; PETI e PDTI; KPIs e BSC; BPMN e ciclo PDCA; ISO/IEC 27001, 27002 e 22301; NIST Cybersecurity Framework; DAMA-DMBoK (Data Management Body of Knowledge); Lei nº 12.527/2011 (Lei de Acesso à Informação); Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).',
        items: [
          makeItem('16', '2', '2.1', 'COBIT 2019', ['EDM', 'APO', 'BAI', 'DSS', 'MEA', '40 objetivos', 'princípios']),
          makeItem('16', '2', '2.2', 'ISO/IEC 38500', ['Avaliar', 'Dirigir', 'Monitorar', '6 princípios']),
          makeItem('16', '2', '2.3', 'ITIL 4', ['4 dimensões', 'SVS', 'cadeia de valor', '34 práticas', 'princípios orientadores']),
          makeItem('16', '2', '2.4', 'ISO 31000', ['gestão de riscos', 'escopo', 'contexto', 'critérios']),
          makeItem('16', '2', '2.5', 'COSO', ['COSO IC', 'COSO ERM', 'cubo COSO', 'controles internos']),
          makeItem('16', '2', '2.6', 'PMBOK 7ª edição', ['12 princípios', '8 domínios de desempenho', 'entrega de valor']),
          makeItem('16', '2', '2.7', 'Scrum e Kanban', ['Product Owner', 'Scrum Master', 'Sprint', 'WIP', 'lead time']),
          makeItem('16', '2', '2.8', 'PETI e PDTI', ['planejamento estratégico', 'plano diretor de TI']),
          makeItem('16', '2', '2.9', 'KPIs e BSC', ['Balanced Scorecard', '4 perspectivas', 'indicadores']),
          makeItem('16', '2', '2.10', 'BPMN e ciclo PDCA', ['eventos', 'atividades', 'gateways', 'Plan-Do-Check-Act']),
          makeItem('16', '2', '2.11', 'ISO/IEC 27001, 27002 e 22301', ['SGSI', 'controles de segurança', 'continuidade de negócios']),
          makeItem('16', '2', '2.12', 'NIST Cybersecurity Framework', ['Govern', 'Identify', 'Protect', 'Detect', 'Respond', 'Recover']),
          makeItem('16', '2', '2.13', 'DAMA-DMBoK (Data Management Body of Knowledge)', ['roda DAMA', '11 áreas de conhecimento', 'Data Governance']),
          makeItem('16', '2', '2.14', 'Lei nº 12.527/2011 (Lei de Acesso à Informação)', ['LAI', 'prazo 20 dias', 'classificação sigilo', 'ultrassecreta 25', 'secreta 15', 'reservada 5']),
          makeItem('16', '2', '2.15', 'Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD)', ['LGPD', 'controlador', 'operador', 'encarregado DPO', 'bases legais', 'dados sensíveis']),
        ],
      },
    ],
  },
];

export const OFFICIAL_EDITAL: EditalDocument = Object.freeze({
  heading: 'CONHECIMENTOS ESPECÍFICOS DA ÁREA - INFRAESTRUTURA',
  version: 'Edital Oficial · Fonte Única de Verdade',
  axes: Object.freeze(RAW_AXES),
});

export const ALL_EDITAL_ITEMS: readonly EditalItem[] = Object.freeze(
  OFFICIAL_EDITAL.axes.flatMap((axis) =>
    axis.sections.flatMap((section) => section.items)
  )
);

export const EDITAL_ITEM_MAP: Readonly<Record<string, EditalItem>> = Object.freeze(
  Object.fromEntries(ALL_EDITAL_ITEMS.map((item) => [item.id, item]))
);

export const EDITAL_AXIS_MAP: Readonly<Record<string, EditalAxis>> = Object.freeze(
  Object.fromEntries(OFFICIAL_EDITAL.axes.map((axis) => [axis.id, axis]))
);

export function getEditalItemById(itemId: string): EditalItem | undefined {
  return EDITAL_ITEM_MAP[itemId];
}

export function getEditalAxisById(axisId: string): EditalAxis | undefined {
  return EDITAL_AXIS_MAP[axisId];
}

export function normalizeSearchText(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function searchEditalItems(query: string): readonly EditalItem[] {
  const normalized = normalizeSearchText(query);
  if (!normalized) return ALL_EDITAL_ITEMS;

  return ALL_EDITAL_ITEMS.filter((item) => {
    const axis = EDITAL_AXIS_MAP[item.axisId];
    const haystack = normalizeSearchText(
      [
        item.id,
        item.literalText,
        axis?.literalTitle ?? '',
        ...item.keywords,
      ].join(' ')
    );
    return haystack.includes(normalized);
  });
}
