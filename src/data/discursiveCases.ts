import { DiscursiveCase } from '../types/edital';

export const DISCURSIVE_CASES: readonly DiscursiveCase[] = Object.freeze([
  {
    id: 'sarah-disc-01',
    title: 'Segmentação L2, Loops STP e Túnel VPN IPsec entre Unidades Hospitalares',
    axisNumber: 1,
    editalItemIds: Object.freeze(['1.2.3', '1.2.5', '2.2.7', '2.2.10']),
    scenario:
      'Durante a ampliação da rede de uma unidade de reabilitação hospitalar, um novo switch de acesso foi conectado em dois switches de distribuição distintos para interligar estações de enfermagem, equipamentos biomédicos em rede e pontos de acesso corporativos. Minutos após a ativação dos enlaces, ocorreu degradação severa da conectividade local, com alto consumo de CPU nos switches e perda de acesso ao prontuário eletrônico hospedado no data center central, com o qual a unidade se comunica por túnel VPN site-to-site IPsec. Nos logs do firewall de borda, identificou-se ainda oscilação da negociação IKE Phase 2 após tentativa de troca de sub-redes internas.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique como a segmentação lógica via VLAN (IEEE 802.1Q) deve ser aplicada entre estações de enfermagem, equipamentos biomédicos e gerência de ativos, indicando o papel das portas access e trunk.',
        expectedAnswer:
          'Cada perfil de ativo deve permanecer em uma VLAN distinta com sub-rede IP dedicada (isolando domínios de broadcast e aplicando políticas de firewall/ACL entre segmentos). Portas access conectam dispositivos finais atribuindo tráfego não marcado (untagged) a uma única VLAN; portas trunk interligam switches e roteadores/firewalls transportando múltiplas VLANs simultaneamente com etiqueta IEEE 802.1Q de 4 bytes (VID de 12 bits).',
        keyPoints: Object.freeze([
          'Isolamento de domínios de broadcast e segmentação por perfil (enfermagem, biomédicos, gerência).',
          'Porta access: 1 VLAN untagged para endpoints.',
          'Porta trunk: múltiplas VLANs com tagging IEEE 802.1Q entre switches/firewall.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Descreva a causa provável da degradação imediatamente após a ligação redundante do switch e aponte as ações corretivas envolvendo Spanning Tree Protocol (STP/RSTP), incluindo proteção de borda.',
        expectedAnswer:
          'A ligação redundante criou um loop de camada 2, gerando tempestade de broadcast (broadcast storm), instabilidade da tabela MAC e saturação de CPU. Deve-se habilitar RSTP (802.1w) com definição explícita da Root Bridge (menor Bridge Priority) no núcleo/distribuição, ativar BPDU Guard e PortFast/Edge Port nas portas de acesso e avaliar agregação LACP (802.3ad) nos uplinks para eliminar bloqueios desnecessários.',
        keyPoints: Object.freeze([
          'Tempestade de broadcast e instabilidade da tabela MAC por loop L2.',
          'Uso de RSTP (802.1w) e definição determinística da Root Bridge.',
          'PortFast/Edge + BPDU Guard nas portas de usuário.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Diferencie os protocolos AH e ESP do IPsec e justifique qual deles deve ser adotado no túnel entre a unidade e o data center central para proteger dados clínicos em trânsito.',
        expectedAnswer:
          'O AH (Authentication Header, protocolo IP 51) provê autenticação, integridade e proteção anti-replay (número de sequência de 32 bits ou 64 bits com ESN), porém não oferece confidencialidade nem atravessa NAT por proteger campos mutáveis do cabeçalho IP. O ESP (Encapsulating Security Payload, protocolo IP 50) provê confidencialidade (criptografia), além de integridade, autenticação e proteção anti-replay, sendo obrigatório no tráfego clínico (e compatível com NAT-T UDP 4500) em modo túnel.',
        keyPoints: Object.freeze([
          'AH (IP 51): integridade, autenticação e anti-replay, sem criptografia e incompatível com NAT.',
          'ESP (IP 50): confidencialidade + integridade/autenticação + anti-replay, indicado para dados clínicos.',
          'Modo túnel com suporte a NAT-T (UDP 4500) quando houver NAT no trajeto.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'Aponte a diferença funcional entre IKE Phase 1 e IKE Phase 2 e explique por que alterações de sub-redes locais interrompem especificamente a Phase 2.',
        expectedAnswer:
          'A Phase 1 (IKE/ISAKMP SA, UDP 500 ou 4500 com NAT-T) autentica os peers e estabelece um canal seguro de controle para negociação. A Phase 2 (IPsec SA / Quick Mode ou CHILD_SA) negocia os parâmetros de criptografia de dados e os Traffic Selectors (Proxy IDs / sub-redes de origem e destino). Ao incluir uma nova sub-rede sem atualizar os seletores de tráfego em ambas as pontas, ocorre mismatch de Proxy ID/Quick Mode, derrubando ou impedindo a subida da Phase 2.',
        keyPoints: Object.freeze([
          'Phase 1: autenticação dos gateways e canal seguro de gerenciamento (IKE SA).',
          'Phase 2: chaves de tráfego de dados e Traffic Selectors/Proxy IDs (IPsec SA).',
          'Divergência de sub-redes nos Traffic Selectors provoca falha na negociação da Phase 2.',
        ]),
      },
    ]),
  },
  {
    id: 'sarah-disc-02',
    title: 'Active Directory: Precedência de GPO, Replicação, FSMO e Autenticação Kerberos',
    axisNumber: 3,
    editalItemIds: Object.freeze(['3.2.5', '3.2.6', '3.2.7', '3.2.8']),
    scenario:
      'Um ambiente Windows Server com Active Directory Domain Services (AD DS) atende três unidades hospitalares interligadas por enlaces WAN dedicados, com controladores de domínio (DCs) locais em cada unidade. Após a queda física definitiva do DC principal da matriz (sede), administradores notaram falhas na criação de novos usuários com erro de alocação de identificadores, demora superior a 15 minutos na propagação de políticas de segurança entre unidades e rejeição intermitente de autenticação Kerberos em servidores recém-reiniciados com relógio dessincronizado em 12 minutos.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Identifique qual função FSMO é responsável pela falha na criação de novos usuários e explique o procedimento adequado de transferência versus tomada forçada (seize) após queda física irreversível.',
        expectedAnswer:
          'O RID Master distribui blocos de Relative Identifiers (RIDs) aos DCs para composição do SID de novos objetos de segurança; sua indisponibilidade impede criação de contas quando o pool local se esgota. Como o DC antigo sofreu queda física definitiva e não retornará, deve-se executar a tomada forçada (seize via ntdsutil ou PowerShell Move-ADDirectoryServerOperationMasterRole -Force) das funções que ele detinha — nunca religando o servidor antigo na rede para evitar conflito de mestres.',
        keyPoints: Object.freeze([
          'RID Master (em conjunto com a verificação de Schema, Domain Naming, PDC Emulator e Infrastructure Master).',
          'Transferência (transfer) exige DC de origem online; tomada forçada (seize) aplica-se quando o DC original é irrecuperável.',
          'O DC falho não deve ser reconectado sem limpeza de metadados (metadata cleanup).',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique a relação entre o papel PDC Emulator, sincronização de horário e a rejeição de autenticação Kerberos no erro de 12 minutos.',
        expectedAnswer:
          'O Kerberos exige sincronia temporal rigorosa (tolerância padrão máxima de 5 minutos — time skew) para validar timestamps de requisições AS-REQ/TGT e prevenir ataques de replay, retornando erro KRB_AP_ERR_SKEW acima desse limite. Na hierarquia do domínio, os membros sincronizam horário com o DC autenticador e os DCs sincronizam com o PDC Emulator da raiz da floresta, que deve apontar para uma fonte NTP confiável.',
        keyPoints: Object.freeze([
          'Tolerância padrão do Kerberos (time skew): 5 minutos; 12 minutos causa falha de ticket/autenticação.',
          'PDC Emulator é a autoridade de tempo da hierarquia AD DS.',
          'Sincronização do PDC Emulator com fonte NTP externa/corporativa confiável.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Diferencie replicação intrassite e intersite no Active Directory e cite ferramentas de linha de comando para diagnosticar falhas entre os Sites AD.',
        expectedAnswer:
          'A replicação intrassite (dentro do mesmo Site AD) ocorre por notificação imediata de alteração (~15 segundos) sem compressão, priorizando baixa latência. A replicação intersite (entre Sites distintos via Site Links) é agendada em intervalos maiores (padrão 180 minutos) e utiliza compressão para economizar largura de banda WAN, tendo sua topologia gerada pelo KCC/ISTG. Ferramentas de diagnóstico incluem repadmin (/replsummary, /showrepl, /syncall) e dcdiag.',
        keyPoints: Object.freeze([
          'Intrassite: notificação rápida (~15s), sem compressão.',
          'Intersite: agendada via Site Links (padrão 180 min), com compressão e topology generator KCC/ISTG.',
          'Diagnóstico com repadmin e dcdiag.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'Descreva a ordem de precedência de aplicação de GPOs (LSDOU) e como tratar conflitos quando uma política restritiva aplicada no Domínio precisa ser mantida sobre políticas de uma OU específica.',
        expectedAnswer:
          'As GPOs são processadas na ordem Local -> Site -> Domínio -> OU (e OUs filhas), sendo que a última aplicada prevalece em caso de conflito (LSDOU). Para impedir que uma OU sobreponha configurações críticas definidas no nível de Domínio, utiliza-se a opção Enforced (Imposto/No Override) no vínculo da GPO do Domínio, que sobrepõe inclusive configurações de Block Inheritance (Bloquear Herança) na OU.',
        keyPoints: Object.freeze([
          'Ordem LSDOU: Local, Site, Domínio, Unidade Organizacional (última prevalece).',
          'Uso de Enforced (Imposto) no link da GPO do Domínio.',
          'Validação prática via gpresult /r ou gpupdate /force.',
        ]),
      },
    ]),
  },
  {
    id: 'sarah-disc-03',
    title: 'Virtualização VMware vSphere, Armazenamento iSCSI/RAID e Continuidade com Backup (RPO/RTO)',
    axisNumber: 5,
    editalItemIds: Object.freeze(['5.1.3', '5.2.3', '5.2.6', '6.2.5']),
    scenario:
      'O cluster de virtualização VMware vSphere/ESXi que sustenta o sistema de imagens médicas (PACS) e bancos de dados clínicos possui três hosts ligados a uma SAN iSCSI dedicada. Durante o horário assistencial, houve necessidade de atualizar o firmware de um dos hosts ESXi sem indisponibilidade das máquinas virtuais. Paralelamente, a equipe revisa a arquitetura de discos do storage (8 SSDs NVMe de 3,84 TB) e os acordos de continuidade do negócio, que exigem perda máxima de dados de 15 minutos e retorno operacional completo em até 1 hora em caso de desastre no storage primário.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique qual recurso do VMware vSphere permite realizar a manutenção do host ESXi sem parar as máquinas virtuais e quais pré-requisitos de rede e armazenamento devem ser atendidos.',
        expectedAnswer:
          'O vMotion realiza a migração a quente (live migration) das VMs em execução entre hosts ESXi transferindo o estado de memória e CPU sem downtime. Exige armazenamento compartilhado acessível por todos os hosts (datastore VMFS/NFS), porta VMkernel dedicada com serviço vMotion habilitado, compatibilidade de família de CPU (ou EVC habilitado) e conexões de rede idênticas (mesmos port groups/VLANs) entre origem e destino.',
        keyPoints: Object.freeze([
          'vMotion (live migration de CPU/RAM sem interrupção de serviço).',
          'Storage compartilhado entre hosts ESXi.',
          'Interface VMkernel dedicada, compatibilidade de CPU/EVC e mesma topologia de rede.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Justifique a escolha entre RAID 5, RAID 6 e RAID 10 para os 8 SSDs destinados ao banco de dados clínico transacional de escrita intensa, indicando a capacidade bruta útil obtida.',
        expectedAnswer:
          'Deve-se adotar RAID 10 (espelhamento + striping), resultando em 15,36 TB úteis (4 x 3,84 TB, equivalente a 50% da capacidade bruta de 30,72 TB). Embora RAID 5 (7 discos úteis) e RAID 6 (6 discos úteis) entreguem maior espaço útil, possuem write penalty de 4 e 6 operações I/O por escrita devido ao cálculo de paridade e rebuild lento, enquanto o RAID 10 apresenta write penalty de apenas 2, máximo desempenho de IOPS aleatório e tolerância a falhas simultâneas em pares distintos.',
        keyPoints: Object.freeze([
          'Escolha do RAID 10 pela menor write penalty (2 I/Os vs 4 no RAID 5 e 6 no RAID 6).',
          'Capacidade útil de 50%: 4 x 3,84 TB = 15,36 TB.',
          'Maior rapidez de rebuild e tolerância a múltiplas falhas em espelhos distintos.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Apresente as boas práticas de configuração da rede iSCSI entre os hosts ESXi e o storage para garantir desempenho e tolerância a falhas.',
        expectedAnswer:
          'Deve-se isolar o tráfego iSCSI em VLAN/rede física dedicada sem roteamento (camada 2 pura), utilizar dois caminhos físicos independentes com port binding no VMkernel e Multipathing (MPIO/Round Robin com ALUA), manter MTU uniforme (como Jumbo Frames MTU 9000) em initiators, switches e targets (TCP 3260) e empregar identificação por IQN com autenticação CHAP quando exigida.',
        keyPoints: Object.freeze([
          'Isolamento em VLAN dedicada sem roteamento e porta padrão TCP 3260.',
          'Redundância com MPIO (Round Robin/ALUA) e múltiplos VMkernels/switches.',
          'MTU consistente ponta a ponta (ex.: Jumbo Frames 9000) e identificadores IQN.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'Defina os conceitos de RPO e RTO a partir das metas exigidas (15 minutos e 1 hora) e indique por que apenas backups noturnos em fita não atendem a esses indicadores.',
        expectedAnswer:
          'RPO (Recovery Point Objective) de 15 minutos define a janela máxima de perda de dados tolerável medida no tempo, exigindo replicação contínua/assíncrona frequente ou backups de log transacional a cada <= 15 minutos. RTO (Recovery Time Objective) de 1 hora define o tempo máximo tolerável de indisponibilidade até a retomada do serviço. Backups diários noturnos teriam RPO de até 24 horas e restauração demorada (RTO elevado), violando ambos os limites.',
        keyPoints: Object.freeze([
          'RPO (15 min): perda máxima tolerável de dados (frequência de captura/replicação).',
          'RTO (1 h): tempo máximo tolerável de parada até a recuperação funcional.',
          'Backup noturno gera RPO de ~24h e tempo de restore incompatível com o RTO.',
        ]),
      },
    ]),
  },
  {
    id: 'sarah-disc-04',
    title: 'Controle de Acesso NAC 802.1X, VLAN Dinâmica e Telefonia IP com QoS',
    axisNumber: 7,
    editalItemIds: Object.freeze(['7.1.2', '7.2.5', '8.2.2', '8.2.3']),
    scenario:
      'Uma rede hospitalar está implantando controle de acesso à rede (NAC) com Cisco ISE/RADIUS integrado ao Active Directory e telefonia IP SIP/RTP nas estações de atendimento. Na mesma tomada de rede do switch PoE, será conectado primeiro um telefone IP e, na porta traseira de PC do telefone, uma estação de trabalho corporativa. Durante os testes iniciais, usuários reclamaram de áudio picotado durante transferências de exames de imagem pela estação conectada atrás do telefone e de estações não autorizadas recebendo IP da rede clínica.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Identifique os três papéis do padrão IEEE 802.1X e explique o fluxo de autenticação com EAP-TLS ou PEAP usando servidor RADIUS.',
        expectedAnswer:
          'Os papéis do 802.1X são: Supplicant (dispositivo cliente/estação), Authenticator (switch ou access point que mantém a porta controlada bloqueada exceto para tráfego EAPoL) e Authentication Server (servidor RADIUS, como Cisco ISE). O Supplicant comunica-se via EAPoL até o Authenticator, que encapsula as mensagens EAP em pacotes RADIUS (UDP 1812) para o servidor validar credenciais/certificados (EAP-TLS usa certificados mútuos; PEAP cria túnel TLS para autenticar usuário/máquina) antes de liberar a porta.',
        keyPoints: Object.freeze([
          'Supplicant (cliente), Authenticator (switch/AP), Authentication Server (RADIUS).',
          'EAPoL entre Supplicant e Authenticator; RADIUS (UDP 1812) entre Authenticator e servidor.',
          'Diferenciação correta entre EAP-TLS (certificado no cliente) e PEAP.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique como funciona a atribuição de VLAN dinâmica pelo NAC para evitar que estações não autorizadas acessem a rede clínica.',
        expectedAnswer:
          'Após validar identidade e postura do dispositivo, o servidor RADIUS retorna atributos na mensagem Access-Accept — como Tunnel-Type (13/VLAN), Tunnel-Medium-Type (6/802) e Tunnel-Private-Group-ID com o ID/nome da VLAN — ou dACL/política de grupo. Dispositivos corporativos autenticados recebem a VLAN clínica/corporativa, enquanto máquinas desconhecidas ou fora de conformidade caem em VLAN de quarentena/restrita ou têm a porta bloqueada.',
        keyPoints: Object.freeze([
          'Atributos RADIUS no Access-Accept (ex.: Tunnel-Private-Group-ID) ou dACL.',
          'Direcionamento condicional conforme identidade/postura (corporativa vs quarentena).',
          'Bloqueio ou isolamento automático de estações não autorizadas.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Descreva como a porta do switch deve tratar simultaneamente o telefone IP e o PC conectado atrás dele por meio de VLAN de voz, LLDP-MED/CDP e PoE.',
        expectedAnswer:
          'A porta do switch é configurada com uma VLAN de dados (untagged/access) para o PC e uma Voice VLAN dedicada (tagged via 802.1Q) para o telefone IP, além de suporte a múltiplos domínios de autenticação (multi-domain auth no 802.1X/MAB). O switch anuncia a VLAN de voz ao telefone via LLDP-MED (ou CDP) e fornece energia elétrica pelo cabo Ethernet via PoE (IEEE 802.3af/at), dispensando fonte externa.',
        keyPoints: Object.freeze([
          'Separação lógica: Voice VLAN (tagged) para telefone e Access VLAN (untagged) para PC.',
          'Descoberta automática via LLDP-MED ou CDP.',
          'Alimentação via PoE (802.3af/802.3at) e autenticação multi-domain.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'Analise a causa do áudio picotado durante transferências pesadas do PC e especifique a configuração de QoS ponta a ponta (marcação DSCP e enfileiramento) adequada para voz e sinalização SIP.',
        expectedAnswer:
          'Sem QoS com fila prioritária, rajadas de transferência de imagens saturam os buffers de saída e elevam latência, jitter e perda de pacotes do fluxo UDP/RTP em tempo real. Deve-se habilitar confiança de QoS na porta do telefone/switch, marcar mídia RTP com DSCP EF (46) e sinalização SIP com CS3 (24) ou AF31, e configurar enfileiramento LLQ (Low Latency Queueing / Priority Queue) nos switches e roteadores WAN para despachar pacotes de voz antes do tráfego de dados.',
        keyPoints: Object.freeze([
          'Congestionamento gera aumento de latência (>150 ms), jitter (>30 ms) e perda de pacotes RTP.',
          'Marcação DSCP EF (46) para mídia RTP e CS3/AF31 para sinalização SIP.',
          'Uso de fila prioritária estrita (LLQ / Priority Queue) nas interfaces.',
        ]),
      },
    ]),
  },
  {
    id: 'sarah-disc-05',
    title: 'Proteção de Correio Eletrônico (SPF/DKIM/DMARC), Filas Exchange e Alta Disponibilidade DAG',
    axisNumber: 4,
    editalItemIds: Object.freeze(['4.1.2', '4.2.5', '4.2.9', '4.2.12']),
    scenario:
      'O ambiente de correio eletrônico institucional baseado em Microsoft Exchange Server em Database Availability Group (DAG) com dois servidores de Mailbox em data centers distintos passou a registrar dois incidentes simultâneos: (1) campanhas externas estão falsificando o domínio oficial do hospital em mensagens de phishing enviadas a pacientes; e (2) após a perda de conectividade WAN entre os dois sites do DAG, parte dos e-mails internos ficou retida nas filas de transporte e um dos bancos de dados montados não realizou failover automático.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique a atuação complementar dos registros SPF, DKIM e DMARC no DNS para impedir a falsificação do domínio oficial (spoofing/phishing).',
        expectedAnswer:
          'O SPF (registro TXT no DNS) lista os endereços IP/servidores autorizados a enviar e-mail em nome do domínio no envelope MAIL FROM. O DKIM assina criptograficamente cabeçalhos e corpo da mensagem com chave privada, permitindo validação por chave pública publicada em TXT no DNS, garantindo integridade e autenticidade. O DMARC exige alinhamento entre o domínio do cabeçalho From: (visível ao usuário) e as validações SPF/DKIM, definindo política de tratamento (p=none, p=quarantine ou p=reject) e envio de relatórios.',
        keyPoints: Object.freeze([
          'SPF: lista de IPs autorizados no DNS (valida MAIL FROM).',
          'DKIM: assinatura criptográfica validada via chave pública no DNS (integridade/autenticidade).',
          'DMARC: alinhamento com o cabeçalho From: e política p=quarantine / p=reject.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique o papel do Witness Server (Servidor Testemunha) em um DAG de dois nós e por que o failover automático pode falhar se o Witness estiver inacessível ou mal posicionado.',
        expectedAnswer:
          'Um DAG com número par de membros (2 nós) utiliza um Witness Server externo (com File Share Witness) para fornecer o terceiro voto e garantir maioria de quórum, evitando condição de split-brain caso a rede entre os nós caia. Se o Witness estiver no mesmo site do nó que caiu ou ficar inacessível para o nó sobrevivente, o nó restante detém apenas 1 de 3 votos (sem maioria), desmontando os bancos e impedindo o failover automático.',
        keyPoints: Object.freeze([
          'Quórum de maioria em DAG com número par de servidores exige Witness Server (File Share Witness).',
          'Prevenção de split-brain.',
          'Posicionamento do Witness em terceiro local/rede independente para garantir maioria ao nó sobrevivente.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Descreva como diagnosticar mensagens retidas nas filas (queues) de transporte do Exchange e diferencie a fila de entrega (Delivery Queue) da fila Poison (Poison Message Queue).',
        expectedAnswer:
          'Utiliza-se o Queue Viewer ou cmdlets PowerShell (Get-Queue, Get-Message) para inspecionar status, NextHopDomain e LastError das mensagens retidas, além de Get-MessageTrackingLog para rastrear o fluxo. A Delivery Queue armazena mensagens aguardando entrega/tentativa para o próximo salto ou banco de dados; já a Poison Queue isola mensagens potencialmente malformadas ou nocivas que provocaram falha/crash no serviço de transporte durante o processamento.',
        keyPoints: Object.freeze([
          'Diagnóstico via Queue Viewer, Get-Queue, Get-Message e Get-MessageTrackingLog.',
          'Delivery Queue: mensagens válidas aguardando roteamento/entrega ou retry.',
          'Poison Queue: quarentena de mensagens que derrubaram o processo de transporte.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'Cite um procedimento prático de troubleshooting na camada SMTP (porta 25/587) para validar conectividade, TLS e fluxo de entrega entre conectores do Exchange.',
        expectedAnswer:
          'Pode-se executar o cmdlet Test-Mailflow ou realizar teste SMTP manual via telnet/Test-NetConnection na porta 25 (e OpenSSL s_client -starttls smtp para checar STARTTLS e cadeia de certificados), verificando banner SMTP, resposta EHLO e código de retorno ao enviar para o Receive Connector. Também deve-se inspecionar os logs de protocolo dos Send/Receive Connectors e cabeçalhos Received:/Authentication-Results da mensagem.',
        keyPoints: Object.freeze([
          'Testes com Test-Mailflow, Test-NetConnection/telnet porta 25 ou openssl STARTTLS.',
          'Inspeção de Send/Receive Connectors e protocolos/certificados TLS.',
          'Análise de cabeçalhos SMTP e logs de Message Tracking.',
        ]),
      },
    ]),
  },
  {
    id: 'sarah-disc-06',
    title: 'Balanceamento de Carga L7 com SSL Offloading e Observabilidade (Zabbix/Syslog)',
    axisNumber: 9,
    editalItemIds: Object.freeze(['9.2.4', '9.2.7', '10.2.1', '10.2.5']),
    scenario:
      'O portal web clínico da instituição atende centenas de usuários simultâneos por meio de um par de balanceadores de carga em alta disponibilidade (VIP HTTPS 443) distribuindo requisições entre quatro servidores de aplicação internos via HTTP na porta 8080. Recentemente, um dos servidores de aplicação começou a retornar páginas de erro HTTP 500 mantendo a porta TCP 8080 aberta, o que fez o balanceador continuar enviando usuários para o nó defeituoso. Além disso, os logs dos servidores de aplicação exibem apenas o endereço IP do balanceador como cliente e há necessidade de consolidar alertas e logs no Zabbix e em servidor syslog.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique por que o health check padrão TCP não removeu o servidor defeituoso do pool e indique como configurar um health check de camada 7 eficaz.',
        expectedAnswer:
          'O health check de camada 4 (TCP) valida apenas o three-way handshake na porta 8080; como o processo web ainda aceitava conexões TCP mas falhava na aplicação, o teste TCP continuou considerando o servidor saudável (UP). Deve-se configurar um health check L7 (HTTP/HTTPS) consultando uma rota específica de saúde (ex.: GET /healthz) e exigindo código de status HTTP 200 OK e/ou string esperada no corpo da resposta, com definição de intervalo, timeout e limiar de falhas consecutivas.',
        keyPoints: Object.freeze([
          'Health check L4 (TCP) testa apenas handshake na porta, não integridade da aplicação.',
          'Health check L7 envia requisição HTTP/HTTPS e valida status 200 OK / conteúdo esperado.',
          'Ajuste de intervalo, timeout e quantidade de falhas/sucessos consecutivos.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Descreva o funcionamento do SSL Offloading no VIP do balanceador e explique como preservar o IP real do cliente para auditoria nos servidores de aplicação.',
        expectedAnswer:
          'No SSL Offloading (terminação TLS), o balanceador possui o certificado digital e a chave privada, encerrando a sessão TLS no VIP (443) e encaminhando tráfego HTTP descriptografado ao backend (8080), reduzindo carga de CPU nos servidores de aplicação e permitindo inspeção/roteamento L7. Como o balanceador aplica SNAT ao falar com o backend, preserva-se o IP original do cliente inserindo o cabeçalho HTTP X-Forwarded-For (ou protocolo PROXY) e configurando o servidor web backend para registrá-lo nos logs.',
        keyPoints: Object.freeze([
          'SSL Offloading centraliza certificados/criptografia TLS no balanceador, poupando CPU do backend.',
          'SNAT oculta o IP original do cliente na conexão com o backend.',
          'Uso do cabeçalho X-Forwarded-For (ou PROXY Protocol) para registrar o IP real.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Diferencie o funcionamento de agente ativo e agente passivo no Zabbix e indique quando cada modo é recomendado para monitorar os servidores web e o balanceador.',
        expectedAnswer:
          'No modo passivo, o Zabbix Server (ou Proxy) abre conexão para o Zabbix Agent na porta TCP 10050 solicitando cada métrica; no modo ativo, o próprio Agent inicia conexão na porta TCP 10051 do Server/Proxy para baixar a lista de itens e enviar lotes de medições (como monitoramento de arquivos de log). Agentes ativos são recomendados para hosts atrás de firewall/NAT ou para leitura contínua de logs (reduzindo polling no servidor), enquanto equipamentos de rede como balanceadores sem agente utilizam coleta via SNMP (UDP 161) ou HTTP/API.',
        keyPoints: Object.freeze([
          'Passivo: Zabbix Server/Proxy consulta o Agent (TCP 10050).',
          'Ativo: Agent busca configuração e envia dados/logs ao Server/Proxy (TCP 10051).',
          'Balanceador sem agente monitorado via SNMPv3 (UDP 161/162) ou API.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'Explique a importância do protocolo Syslog centralizado (RFC 5424) na correlação de falhas entre o balanceador e os servidores de aplicação, citando os papéis de facility/severity e sincronização NTP.',
        expectedAnswer:
          'A centralização via Syslog (UDP/TCP 514 ou TLS 6514) reúne eventos do balanceador e dos servidores de aplicação em um repositório único e imutável fora dos nós falhos, permitindo rastrear falhas em cascata mesmo que um servidor reinicie. Os campos Facility identificam o subsistema emissor e Severity (0 a 7, de Emergency a Debug) priorizam alertas críticos; a sincronização rigorosa via NTP em todos os dispositivos garante timestamps coerentes para correlação cronológica exata.',
        keyPoints: Object.freeze([
          'Centralização externa (UDP/TCP 514 ou TLS) preserva logs durante indisponibilidade dos hosts.',
          'Uso de Facility e níveis de Severity (RFC 5424) para triagem e triggers de alerta.',
          'NTP obrigatório para alinhar timestamps na correlação de eventos.',
        ]),
      },
    ]),
  },
  {
    id: 'sarah-disc-07',
    title: 'Administração Linux (SSH, systemd, LVM) e Resposta a Ransomware',
    axisNumber: 11,
    editalItemIds: Object.freeze(['11.2.2', '11.2.4', '11.2.6', '13.1.5']),
    scenario:
      'Um servidor Linux corporativo que hospeda um repositório de arquivos departamentais apresentou alerta de esgotamento de disco na partição /dados (montada sobre LVM em sistema de arquivos ext4) e falha na inicialização de um serviço customizado gerenciado pelo systemd após atualização de configuração. Na mesma semana, uma estação de trabalho Windows conectada ao compartilhamento foi infectada por ransomware após usuário abrir anexo malicioso, iniciando criptografia de arquivos acessíveis na rede.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Descreva os comandos e passos seguros para expandir em linha (sem desmontar) o volume lógico LVM montado em /dados e o sistema de arquivos ext4 após a adição de um novo disco virtual.',
        expectedAnswer:
          'Após reconhecer o novo disco (ex.: /dev/sdb), cria-se o Physical Volume (pvcreate /dev/sdb), adiciona-o ao Volume Group existente (vgextend vg_dados /dev/sdb), estende-se o Logical Volume e simultaneamente o sistema de arquivos ext4 com a flag -r (lvextend -r -l +100%FREE /dev/vg_dados/lv_dados) ou executando lvextend seguido de resize2fs /dev/vg_dados/lv_dados online (sem desmontar).',
        keyPoints: Object.freeze([
          'Sequência LVM: pvcreate -> vgextend -> lvextend.',
          'Expansão do sistema de arquivos ext4 online com lvextend -r ou resize2fs.',
          'Observação de que xfs utilizaria xfs_growfs, enquanto ext4 usa resize2fs.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Indique como diagnosticar a falha do serviço no systemd e aplicar as medidas de endurecimento (hardening) essenciais no servidor OpenSSH (sshd_config).',
        expectedAnswer:
          'Para diagnosticar a falha do unit file no systemd, utiliza-se systemctl status <servico> e journalctl -u <servico> -xe (executando systemctl daemon-reload se o arquivo .service foi editado e systemctl enable --now para persistência no boot). No hardening do /etc/ssh/sshd_config, deve-se definir PermitRootLogin no, PasswordAuthentication no (exigindo autenticação por chaves públicas), restringir usuários/grupos (AllowUsers/AllowGroups) e reiniciar/recarregar o serviço sshd após validar a sintaxe com sshd -t.',
        keyPoints: Object.freeze([
          'Diagnóstico systemd: systemctl status, journalctl -u <unit> e systemctl daemon-reload.',
          'Hardening SSH: PermitRootLogin no e PasswordAuthentication no (chaves assimétricas).',
          'Validação com sshd -t e restrição via AllowUsers/AllowGroups.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Explique as ações imediatas de contenção diante da detecção do ransomware na estação infectada e por que backups imutáveis/offline são determinantes na recuperação.',
        expectedAnswer:
          'Na fase de contenção, deve-se isolar imediatamente a estação infectada da rede (desconectar cabo/Wi-Fi ou aplicar quarentena via NAC/EDR) sem desligar abruptamente caso evidências em memória precisem ser preservadas, revogar sessões/credenciais do usuário afetado e bloquear mapeamentos SMB compartilhados de escrita para conter propagação lateral. Backups imutáveis (WORM) ou offline/air-gapped impedem que o ransomware criptografe ou apague as cópias de segurança antes da restauração.',
        keyPoints: Object.freeze([
          'Isolamento de rede imediato da estação infectada e bloqueio de sessões/compartilhamentos.',
          'Preservação de evidências e não pagamento de resgate.',
          'Necessidade de cópias de backup imutáveis (WORM) ou offline para recuperação limpa.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'Diferencie ransomware de worm e backdoor quanto ao mecanismo de ação e impacto principal em infraestrutura corporativa.',
        expectedAnswer:
          'O ransomware sequestra dados ou sistemas por criptografia exigindo resgate para liberação da chave, afetando diretamente disponibilidade e continuidade. O worm é um malware autônomo que se autorreplica e se propaga automaticamente pela rede explorando vulnerabilidades sem depender de ação contínua do usuário ou arquivo hospedeiro. Já o backdoor cria ou mantém acesso remoto oculto e persistente contornando mecanismos normais de autenticação para controle futuro pelo invasor.',
        keyPoints: Object.freeze([
          'Ransomware: criptografia/sequestro de dados com pedido de resgate.',
          'Worm: propagação autônoma pela rede sem arquivo hospedeiro.',
          'Backdoor: porta dos fundos persistente contornando autenticação.',
        ]),
      },
    ]),
  },
  {
    id: 'sarah-disc-08',
    title: 'Alta Disponibilidade (Split-Brain), Troubleshooting RCA e Conformidade com a LGPD',
    axisNumber: 15,
    editalItemIds: Object.freeze(['14.1.1', '14.2.3', '15.2.1', '16.2.15']),
    scenario:
      'Um cluster ativo-passivo de banco de dados assistencial de dois nós, contendo dados pessoais sensíveis de saúde de pacientes, sofreu perda simultânea de seus enlaces exclusivos de heartbeat. Durante a investigação de emergência, verificou-se que ambos os nós assumiram temporariamente o papel de nó ativo (split-brain), gerando divergência de gravações e subsequente indisponibilidade de 45 minutos no atendimento ambulatorial. Após a restauração do serviço por contingência, a gestão cobrou a investigação formal da causa raiz e a avaliação de impacto regulatório referente à proteção de dados pessoais.',
    commandText:
      'Considerando o cenário apresentado e as boas práticas de infraestrutura de TI, responda, em até 30 (trinta) linhas, ao que se pede a seguir:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique o fenômeno de split-brain no cluster descrito e apresente dois mecanismos arquiteturais para preveni-lo.',
        expectedAnswer:
          'Split-brain ocorre quando a comunicação de heartbeat entre os nós é interrompida sem confirmação do estado real do par, levando ambos a acreditarem que o outro falhou e assumirem simultaneamente os recursos compartilhados (VIP/LUNs), causando corrupção ou divergência de dados. Previne-se com: (1) mecanismo de quórum por maioria com terceiro elemento Witness/Quorum Disk; e (2) STONITH / fencing (isolamento de hardware ou corte de energia/acesso SAN) garantindo que apenas um nó escreva no armazenamento.',
        keyPoints: Object.freeze([
          'Definição de split-brain: perda de heartbeat levando dois nós ativos simultaneamente.',
          'Prevenção 1: Quórum com Witness Server / Quorum Disk (maioria).',
          'Prevenção 2: Fencing / STONITH + redundância de links de heartbeat em caminhos físicos distintos.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Diferencie Gerenciamento de Incidentes de Gerenciamento de Problemas no tratamento desse evento, indicando o foco de cada processo.',
        expectedAnswer:
          'O Gerenciamento de Incidentes tem foco imediato em restaurar a operação normal do serviço o mais rápido possível (minimizar impacto ao negócio, aplicando solução de contorno/workaround ou failover controlado para retomar o atendimento). O Gerenciamento de Problemas atua na investigação profunda das causas raízes (RCA) dos incidentes, documenta Erros Conhecidos (Known Errors) e propõe mudanças definitivas (ex.: redundância de heartbeat e fencing) para evitar recorrência.',
        keyPoints: Object.freeze([
          'Incidente: restauração rápida da operação normal do serviço (redução do impacto).',
          'Problema: análise de causa raiz, registro de erro conhecido e eliminação definitiva da recorrência.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Descreva os cuidados essenciais na coleta de evidências e preservação técnica antes de reiniciar os nós ou sobrescrever discos após a falha.',
        expectedAnswer:
          'Antes de reiniciar hosts ou remontar volumes, deve-se coletar e preservar logs de cluster, sistema operacional, switch/SAN e dumps de memória com registro de horário sincronizado (NTP), realizar snapshots/cópias read-only dos volumes divergentes para inspeção e conciliação de transações, e manter registro cronológico (cadeia de custódia/evidências) para análise pós-incidente (post-mortem) sem destruir pistas da causa raiz.',
        keyPoints: Object.freeze([
          'Coleta prévia de logs, métricas, estados de quórum e dumps antes de reiniciar/sobrescrever.',
          'Preservação via snapshots/cópias antes de ressincronização ou conciliação de dados.',
          'Alinhamento temporal (NTP) e documentação cronológica das ações.',
        ]),
      },
      {
        letter: 'D' as const,
        prompt:
          'À luz da Lei nº 13.709/2018 (LGPD), classifique os dados tratados pelo banco assistencial, aponte os agentes de tratamento e esclareça se a indisponibilidade/integridade exige avaliação de incidente de segurança com comunicação à ANPD e aos titulares.',
        expectedAnswer:
          'Dados referentes à saúde dos pacientes são classificados pela LGPD como dados pessoais sensíveis (Art. 5º, II), exigindo proteção reforçada. O hospital atua normalmente como Controlador (toma decisões sobre o tratamento), eventual fornecedor externo de TI gerenciada atuaria como Operador, e o Encarregado (DPO) conduz a interlocução com titulares e a ANPD. Conforme a LGPD (Art. 46 e Art. 48), incidentes que comprometam integridade, disponibilidade ou confidencialidade e possam acarretar risco ou dano relevante aos titulares devem ser avaliados e comunicados à ANPD e aos titulares em prazo razoável.',
        keyPoints: Object.freeze([
          'Dados de saúde = dados pessoais sensíveis (LGPD).',
          'Agentes: Controlador (instituição), Operador (terceiro executor) e Encarregado (DPO).',
          'Avaliação de risco/dano relevante por perda de integridade/disponibilidade e comunicação à ANPD e aos titulares (Art. 48).',
        ]),
      },
    ]),
  },
]);
