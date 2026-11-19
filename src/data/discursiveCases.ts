import { DiscursiveCase, DiscursiveCriteriaConfig, DiscursiveCriterion } from '../types/edital';

const NORMA_PADRAO_CRITERIA: readonly DiscursiveCriterion[] = Object.freeze([
  {
    id: 'norma-coesao',
    label: 'Estrutura dissertativa, coesão e coerência',
    category: 'norma_padrao',
    maxPoints: 4,
    description:
      'Paragrafação clara respondendo objetivamente a todos os subitens dentro do limite de 30 linhas.',
  },
  {
    id: 'norma-gramatica',
    label: 'Morfossintaxe, concordância e regência',
    category: 'norma_padrao',
    maxPoints: 3,
    description:
      'Concordância verbal/nominal, regência, colocação pronominal e impessoalidade formal (sem 1ª pessoa ou gírias).',
  },
  {
    id: 'norma-ortografia',
    label: 'Ortografia, pontuação, crase e precisão lexical',
    category: 'norma_padrao',
    maxPoints: 3,
    description:
      'Acentuação gráfica, emprego da vírgula e da crase, além da definição de siglas por extenso na primeira menção.',
  },
]);

function buildCriteria(
  technicalItems: readonly Omit<DiscursiveCriterion, 'category'>[]
): DiscursiveCriteriaConfig {
  return Object.freeze({
    tecnicoMax: 40 as const,
    normaMax: 10 as const,
    items: Object.freeze([
      ...technicalItems.map((item) =>
        Object.freeze({
          ...item,
          category: 'tecnico' as const,
        })
      ),
      ...NORMA_PADRAO_CRITERIA,
    ]),
  });
}

export const DISCURSIVE_CASES: readonly DiscursiveCase[] = Object.freeze([
  {
    id: 'sarah-disc-01',
    title: 'Segmentação L2 (VLAN 802.1Q), Loops STP e Proteção de Borda',
    axisNumber: 1,
    editalItemIds: Object.freeze(['1.2.3', '1.2.4', '1.2.5', '1.2.11']),
    scenario:
      'Durante a ampliação da rede de uma unidade hospitalar da APS, um novo switch de acesso foi interligado simultaneamente a dois switches de distribuição distintos para atender estações de enfermagem, equipamentos biomédicos em rede e pontos de acesso corporativos. Minutos após a ativação dos enlaces, ocorreu degradação severa da conectividade local, com saturação de CPU nos switches e oscilação constante nos registros da tabela MAC.',
    commandText:
      'Considerando exclusivamente a infraestrutura de comutação em camada 2 apresentada, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique como a segmentação lógica por VLAN (IEEE 802.1Q) deve separar estações de enfermagem, equipamentos biomédicos e gerência, distinguindo portas access e trunk.',
        expectedAnswer:
          'Cada perfil de ativo deve permanecer em uma VLAN e sub-rede IP própria, isolando domínios de broadcast e viabilizando políticas de segurança inter-VLAN. Portas access conectam dispositivos finais com tráfego sem marcação (untagged) pertencente a uma única VLAN; portas trunk interligam switches e roteadores/firewalls transportando múltiplas VLANs identificadas por cabeçalho IEEE 802.1Q de 4 bytes (VID de 12 bits).',
        keyPoints: Object.freeze([
          'Isolamento de domínios de broadcast e segmentação por perfil assistencial/gerência.',
          'Porta access: uma única VLAN untagged voltada ao endpoint.',
          'Porta trunk: múltiplas VLANs marcadas (tagged) segundo o padrão IEEE 802.1Q.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Aponte a causa técnica da degradação imediata após a ligação redundante e explique o mecanismo do Spanning Tree Protocol (RSTP) para restabelecer uma topologia livre de loops.',
        expectedAnswer:
          'A dupla ligação criou um laço físico em camada 2 (loop L2), desencadeando tempestade de broadcast (broadcast storm), replicação indefinida de quadros unknown unicast e flapping da tabela MAC. O Rapid Spanning Tree Protocol (RSTP — IEEE 802.1w) elege uma Root Bridge determinística (menor Bridge ID/Priority no núcleo/distribuição) e coloca portas redundantes em estado Discarding (blocking), garantindo caminho único ativo e convergência rápida.',
        keyPoints: Object.freeze([
          'Identificação do loop L2 e consequente tempestade de broadcast e instabilidade da tabela MAC.',
          'Uso de RSTP (802.1w) com eleição explícita da Root Bridge no núcleo/distribuição.',
          'Bloqueio lógico de enlaces redundantes ou substituição por agregação LACP (802.3ad).',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Indique dois recursos de proteção de borda em portas de acesso de usuários que evitam a introdução acidental de switches não autorizados ou reinjeção de BPDUs.',
        expectedAnswer:
          'Deve-se habilitar PortFast/Edge Port nas portas de acesso para transição imediata ao estado Forwarding sem gerar TCN (Topology Change Notification) a cada conexão de estação, combinado obrigatoriamente ao BPDU Guard, que coloca a porta em err-disable caso receba qualquer quadro BPDU de switch indevido. Complementarmente, recomenda-se Root Guard nos uplinks de borda para impedir que switches periféricos assumam a função de Root Bridge.',
        keyPoints: Object.freeze([
          'PortFast / Edge Port nas portas voltadas exclusivamente a estações finais.',
          'BPDU Guard para desabilitar (err-disable) a porta ao detectar BPDU indevido.',
          'Root Guard para proteger a hierarquia da Root Bridge contra switches externos.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Segmentação VLAN 802.1Q, portas access e trunk',
        maxPoints: 14,
        description: 'Domínios de broadcast separados, portas access untagged e trunk tagged 802.1Q.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Diagnóstico de loop L2 e convergência RSTP/LACP',
        maxPoints: 14,
        description: 'Explicação da tempestade de broadcast/MAC flapping, Root Bridge e RSTP (802.1w).',
      },
      {
        id: 'tec-c',
        label: 'Item C — Proteção de borda (PortFast, BPDU Guard e Root Guard)',
        maxPoints: 12,
        description: 'Prevenção operacional contra loops e switches não autorizados na borda.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3–4 linhas): contextualizar o incidente de loop L2 na ampliação hospitalar e a necessidade de segmentação determinística.',
      'Desenvolvimento 1 — Subitem A (7–8 linhas): separação de VLANs por perfil (enfermagem, biomédicos, gerência) e papéis access/trunk 802.1Q.',
      'Desenvolvimento 2 — Subitem B (8–9 linhas): explicação do broadcast storm, MAC flapping, RSTP (802.1w) e definição de Root Bridge.',
      'Desenvolvimento 3 / Conclusão — Subitem C (6–8 linhas): PortFast + BPDU Guard + Root Guard e síntese da estabilidade operacional.',
    ]),
    errosComuns: Object.freeze([
      'Confundir porta trunk (tagged múltiplas VLANs) com agregação de links (LACP).',
      'Descrever STP 802.1D legado sem mencionar RSTP (802.1w) e convergência rápida.',
      'Propor PortFast sem BPDU Guard, deixando a rede vulnerável a loops em tomadas de usuário.',
    ]),
  },
  {
    id: 'sarah-disc-02',
    title: 'Active Directory: FSMO (RID/PDC), Kerberos Time Skew e Precedência de GPO',
    axisNumber: 3,
    editalItemIds: Object.freeze(['3.2.5', '3.2.6', '3.2.7', '3.2.8']),
    scenario:
      'O Active Directory Domain Services (AD DS) da instituição atende unidades hospitalares interligadas por WAN, com controladores de domínio (DCs) locais. Após a perda física definitiva do controlador principal da sede, administradores passaram a enfrentar erro na criação de novas contas de usuário após o esgotamento do pool local, atraso na propagação de políticas de segurança e falha de autenticação Kerberos em servidores cujo relógio estava adiantado em 12 minutos.',
    commandText:
      'Com base na arquitetura do Active Directory e nos procedimentos oficiais de administração Windows Server, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Identifique a função FSMO vinculada ao erro de alocação de identificadores na criação de contas e diferencie transferência (transfer) de tomada forçada (seize) após perda irreversível.',
        expectedAnswer:
          'A falha decorre da indisponibilidade do RID Master, responsável por alocar blocos de Relative Identifiers (RIDs) a cada DC para composição de SIDs únicos de novos objetos. Enquanto a transferência (transfer) exige o detentor original online para sincronização limpa das alterações antes da passagem de posse, a tomada forçada (seize via ntdsutil ou Move-ADDirectoryServerOperationMasterRole -Force) aplica-se exclusivamente quando o DC antigo não retornará, exigindo metadata cleanup e proibindo sua reconexão à rede.',
        keyPoints: Object.freeze([
          'RID Master como alocador de pools de RIDs para composição de SIDs.',
          'Transfer (DC origem online) vs Seize (DC irrecuperável).',
          'Metadata cleanup obrigatório e proibição de religar o DC antigo.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique a relação entre o papel PDC Emulator, a sincronização de relógios na floresta e a falha de autenticação Kerberos causada pelo desvio de 12 minutos.',
        expectedAnswer:
          'O protocolo Kerberos exige sincronia temporal dentro da tolerância padrão de 5 minutos (time skew) para validar carimbos de tempo (timestamps) contra ataques de replay; desvios como 12 minutos geram rejeição KRB_AP_ERR_SKEW. Na hierarquia AD DS, estações sincronizam com o DC autenticador, os demais DCs sincronizam com o PDC Emulator do domínio e os PDCs filhos sincronizam com o PDC Emulator da raiz da floresta, que deve consultar servidor NTP externo confiável.',
        keyPoints: Object.freeze([
          'Tolerância máxima padrão do Kerberos: 5 minutos (KRB_AP_ERR_SKEW).',
          'PDC Emulator como autoridade central de tempo (NTP/Windows Time) do domínio.',
          'Configuração de fonte NTP confiável no PDC Emulator da raiz.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Descreva a ordem de precedência LSDOU das GPOs e como garantir que uma diretiva de segurança vinculada ao Domínio não seja sobrescrita por políticas de Unidades Organizacionais (OUs).',
        expectedAnswer:
          'As GPOs seguem a ordem de processamento Local, Site, Domínio e Unidade Organizacional (LSDOU), prevalecendo a última aplicada em caso de conflito (OUs filhas sobrepõem pais). Para assegurar que uma GPO de segurança crítica definida no Domínio mantenha prioridade absoluta, habilita-se a opção Enforced (Imposto/No Override) no vínculo da GPO, sobrepondo inclusive configurações de Block Inheritance ativadas em OUs subordinadas.',
        keyPoints: Object.freeze([
          'Precedência LSDOU: Local -> Site -> Domínio -> OU (última prevalece).',
          'Uso de Enforced (Imposto) no vínculo da GPO de Domínio.',
          'Comprovação e diagnóstico com gpresult /r e repadmin/dcdiag.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — RID Master e distinção entre transfer e seize',
        maxPoints: 14,
        description: 'Identificação correta do RID Master, uso de seize na perda física e metadata cleanup.',
      },
      {
        id: 'tec-b',
        label: 'Item B — PDC Emulator, hierarquia NTP e limite de 5 min no Kerberos',
        maxPoints: 14,
        description: 'Explicação do time skew de 5 minutos, KRB_AP_ERR_SKEW e autoridade do PDC Emulator.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Ordem LSDOU, Enforced e validação de políticas',
        maxPoints: 12,
        description: 'Aplicação correta de LSDOU e uso de Enforced frente a Block Inheritance.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): contextualizar o impacto da perda irreversível do DC nas operações FSMO, autenticação e GPOs.',
      'Desenvolvimento 1 — Subitem A (9 linhas): RID Master, diferença técnica transfer vs seize e limpeza de metadados.',
      'Desenvolvimento 2 — Subitem B (9 linhas): tolerância de 5 min do Kerberos, papel do PDC Emulator e sincronia NTP.',
      'Desenvolvimento 3 / Conclusão — Subitem C (7 linhas): precedência LSDOU, opção Enforced e diagnóstico com dcdiag/gpresult.',
    ]),
    errosComuns: Object.freeze([
      'Atribuir a criação de RIDs ao Schema Master ou Infrastructure Master.',
      'Citar tolerância de 15 minutos no Kerberos (o padrão é 5 minutos).',
      'Recomendar Block Inheritance para impor política do Domínio em vez de Enforced.',
    ]),
  },
  {
    id: 'sarah-disc-03',
    title: 'Virtualização VMware vSphere (vMotion/HA) e Armazenamento SAN iSCSI/RAID',
    axisNumber: 5,
    editalItemIds: Object.freeze(['5.1.3', '5.2.3', '5.2.6', '5.2.9']),
    scenario:
      'O cluster VMware vSphere/ESXi responsável pelo sistema de imagens médicas (PACS) e bancos clínicos conta com três servidores físicos conectados a uma SAN iSCSI. A equipe precisa atualizar o firmware de um dos hosts ESXi em horário assistencial sem desligar as máquinas virtuais e, simultaneamente, dimensionar um novo conjunto de 8 SSDs NVMe de 3,84 TB para banco de dados transacional de escrita intensa, assegurando conectividade SAN resiliente.',
    commandText:
      'Considerando a arquitetura de virtualização e armazenamento corporativo descrita, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Indique o recurso do vSphere que permite esvaziar o host ESXi sem interrupção das VMs e liste seus pré-requisitos essenciais de armazenamento, rede e CPU.',
        expectedAnswer:
          'Utiliza-se o vMotion para realizar a migração a quente (live migration) da memória e estado de CPU das máquinas virtuais em execução antes de colocar o host em Maintenance Mode. Seus pré-requisitos incluem datastore compartilhado acessível por todos os hosts do cluster (VMFS via SAN ou NFS), interface VMkernel dedicada ao serviço vMotion com banda adequada, compatibilidade de instruções de CPU (ou EVC ativado) e port groups/VLANs equivalentes entre origem e destino.',
        keyPoints: Object.freeze([
          'vMotion (live migration sem downtime) + Maintenance Mode para atualização do host.',
          'Storage compartilhado entre os hosts ESXi do cluster.',
          'VMkernel dedicada, compatibilidade de CPU/EVC e mesma topologia de VLAN/port group.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Justifique a escolha entre RAID 5, RAID 6 e RAID 10 para os 8 SSDs de 3,84 TB destinados ao banco transacional, calculando a capacidade útil resultante.',
        expectedAnswer:
          'Deve-se adotar RAID 10 (espelhamento + striping), entregando 15,36 TB úteis (50% de 30,72 TB brutos, equivalente a 4 discos). Embora RAID 5 (7 discos úteis) e RAID 6 (6 discos úteis) aproveitem maior espaço bruto, sofrem com write penalty de 4 e 6 operações de I/O por gravação aleatória (cálculo de paridade) e reconstrução lenta; o RAID 10 tem write penalty de apenas 2, máximo desempenho de IOPS em escrita e tolerância a falhas simultâneas em pares espelhados distintos.',
        keyPoints: Object.freeze([
          'Escolha pelo RAID 10 devido à menor write penalty (2 I/Os vs 4 no RAID 5 e 6 no RAID 6).',
          'Cálculo correto da capacidade útil: 4 × 3,84 TB = 15,36 TB (50% da capacidade bruta).',
          'Maior rapidez de rebuild e alta disponibilidade em pares espelhados independentes.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Descreva as recomendações arquiteturais de rede iSCSI e multipathing entre os hosts ESXi e a SAN para garantir desempenho e tolerância a falhas.',
        expectedAnswer:
          'O tráfego iSCSI (TCP porta 3260, identificação via IQN) deve operar em VLAN/rede dedicada de camada 2 pura (sem roteamento), utilizando ao menos dois caminhos físicos independentes com port binding no VMkernel e política MPIO (Multipath I/O) em Round Robin associada a ALUA. Deve-se ainda padronizar MTU uniforme ponta a ponta (como Jumbo Frames MTU 9000) em initiators, switches SAN e targets.',
        keyPoints: Object.freeze([
          'Rede/VLAN dedicada em L2 pura (sem gateway/roteamento no tráfego iSCSI, TCP 3260).',
          'Múltiplos caminhos físicos com port binding e MPIO Round Robin/ALUA.',
          'MTU uniforme (ex.: Jumbo Frames 9000) e identificação por IQN.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — vMotion e pré-requisitos de cluster',
        maxPoints: 13,
        description: 'Live migration via vMotion, storage compartilhado, VMkernel, EVC e redes idênticas.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Seleção do RAID 10, write penalty e cálculo de 15,36 TB',
        maxPoints: 14,
        description: 'Comparação técnica entre RAID 5/6/10 e cálculo exato da capacidade útil.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Arquitetura iSCSI, port binding e MPIO',
        maxPoints: 13,
        description: 'VLAN isolada L2, MPIO Round Robin, MTU consistente e porta TCP 3260/IQN.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): alinhar manutenção sem parada assistencial e dimensionamento I/O de alta performance.',
      'Desenvolvimento 1 — Subitem A (8 linhas): funcionamento do vMotion e pré-requisitos de infraestrutura.',
      'Desenvolvimento 2 — Subitem B (9 linhas): comparação RAID 5/6/10, write penalty e cálculo de 15,36 TB.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): isolamento iSCSI, MPIO Round Robin e validação de MTU.',
    ]),
    errosComuns: Object.freeze([
      'Confundir vMotion (migração planejada sem downtime) com vSphere HA (reinício de VMs após falha física).',
      'Escolher RAID 5 ou 6 para banco transacional de escrita intensa ignorando a write penalty.',
      'Misturar tráfego iSCSI na mesma rede de gerenciamento ou rotear iSCSI via firewall/gateway.',
    ]),
  },
  {
    id: 'sarah-disc-04',
    title: 'Controle de Acesso à Rede (NAC 802.1X) com VLAN Dinâmica e MAB',
    axisNumber: 7,
    editalItemIds: Object.freeze(['7.1.2', '7.2.1', '7.2.2', '7.2.5']),
    scenario:
      'Em uma unidade da Rede SARAH, a equipe de segurança está implantando controle de acesso à rede (NAC) baseado em Cisco ISE integrado ao Active Directory. O ambiente reúne estações corporativas Windows ingressadas no domínio e equipamentos biomédicos embarcados que não possuem suporte nativo a cliente 802.1X. Durante o piloto, estações desconhecidas conectadas às tomadas físicas ainda conseguiam obter endereços na sub-rede assistencial.',
    commandText:
      'Considerando a arquitetura IEEE 802.1X e NAC corporativo com atribuição dinâmica de VLAN, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Identifique os três componentes do padrão IEEE 802.1X e explique o fluxo de autenticação com EAP-TLS ou PEAP até a liberação da porta pelo servidor RADIUS.',
        expectedAnswer:
          'Os três papéis são: Supplicant (cliente/estação), Authenticator (switch de acesso ou controladora/AP, que bloqueia tráfego na porta controlada exceto EAPoL) e Authentication Server (servidor RADIUS, como Cisco ISE). O Supplicant troca quadros EAPoL em camada 2 com o Authenticator, que os encapsula em pacotes RADIUS (UDP 1812) para validação no servidor — por certificados mútuos no EAP-TLS ou túnel TLS com credenciais no PEAP — liberando acesso somente após Access-Accept.',
        keyPoints: Object.freeze([
          'Três papéis: Supplicant, Authenticator e Authentication Server (RADIUS).',
          'Comunicação EAPoL (L2) até o switch e RADIUS (UDP 1812) até o servidor NAC.',
          'Diferenciação entre EAP-TLS (certificado cliente) e PEAP (túnel TLS + credencial AD).',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Descreva como o NAC aplica VLAN dinâmica e/ou dACL para isolar estações não autorizadas e direcionar dispositivos corporativos à rede assistencial correta.',
        expectedAnswer:
          'Na resposta RADIUS Access-Accept, o servidor NAC envia atributos padrão como Tunnel-Type (13/VLAN), Tunnel-Medium-Type (6/802) e Tunnel-Private-Group-ID com o número ou nome da VLAN de destino, além de eventual dACL (Downloadable ACL). Estações validadas e conformes recebem a VLAN corporativa/assistencial; dispositivos não autenticados ou sem postura de segurança são alocados em VLAN restrita/quarentena ou têm a porta bloqueada, impedindo obtenção de IP na rede clínica.',
        keyPoints: Object.freeze([
          'Atributos RADIUS de VLAN dinâmica (Tunnel-Private-Group-ID, Tunnel-Type, Tunnel-Medium-Type).',
          'Uso complementar de dACL e verificação de postura/conformidade.',
          'Segregação automática em VLAN de quarentena ou bloqueio de porta para desconhecidos.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Explique como integrar os equipamentos biomédicos sem suporte a 802.1X por meio de MAB (MAC Authentication Bypass) e como o recurso CoA atua após mudança de estado.',
        expectedAnswer:
          'Quando o switch não recebe resposta EAPoL dentro do timeout configurado, realiza fallback para MAB, enviando o endereço MAC do dispositivo como credencial RADIUS ao ISE para checagem em inventário autorizado (profiling + whitelist), atribuindo VLAN biomédica restrita por ACL. Caso o dispositivo mude de postura ou seja revogado posteriormente, o servidor NAC envia uma mensagem RADIUS CoA (Change of Authorization, UDP 3799) para reautenticar, alterar VLAN ou desconectar a sessão em tempo real.',
        keyPoints: Object.freeze([
          'MAB como fallback do 802.1X combinado a profiling e lista autorizada + VLAN restrita.',
          'RADIUS CoA (UDP 3799) para reavaliação dinâmica, mudança de VLAN ou desconexão imediata.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Arquitetura 802.1X, EAPoL, RADIUS e EAP-TLS/PEAP',
        maxPoints: 15,
        description: 'Identificação dos 3 papéis, fluxo EAPoL/RADIUS UDP 1812 e métodos EAP.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Atribuição dinâmica de VLAN e quarentena',
        maxPoints: 15,
        description: 'Atributos RADIUS Tunnel-Private-Group-ID, dACL e isolamento de desconhecidos.',
      },
      {
        id: 'tec-c',
        label: 'Item C — MAB para equipamentos biomédicos e RADIUS CoA',
        maxPoints: 10,
        description: 'Uso seguro de MAB com profiling/ACL e atuação dinâmica via CoA.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): importância do NAC em ambiente hospitalar com estações e equipamentos biomédicos.',
      'Desenvolvimento 1 — Subitem A (9 linhas): papéis 802.1X, fluxo EAPoL/RADIUS e EAP-TLS vs PEAP.',
      'Desenvolvimento 2 — Subitem B (9 linhas): VLAN dinâmica via Access-Accept, dACL e quarentena.',
      'Desenvolvimento 3 / Conclusão — Subitem C (7 linhas): fallback seguro com MAB, profiling e CoA.',
    ]),
    errosComuns: Object.freeze([
      'Liberar MAB irrestrito na mesma VLAN corporativa sem ACL ou profiling de dispositivo.',
      'Confundir Supplicant (estação) com Authenticator (switch/AP).',
      'Omitir os atributos RADIUS de VLAN dinâmica ou o papel de reavaliação do CoA.',
    ]),
  },
  {
    id: 'sarah-disc-05',
    title: 'Proteção de E-mail (SPF/DKIM/DMARC), Conectores e Filas Exchange',
    axisNumber: 4,
    editalItemIds: Object.freeze(['4.1.2', '4.2.4', '4.2.5', '4.2.12']),
    scenario:
      'O ambiente de correio eletrônico institucional baseado em Microsoft Exchange Server enfrentou duas ocorrências críticas: campanhas externas de phishing passaram a falsificar o domínio oficial da instituição em mensagens enviadas a pacientes e, internamente, mensagens legítimas ficaram retidas nas filas de transporte após alteração de roteamento em um conector de saída.',
    commandText:
      'Considerando os protocolos de proteção de correio eletrônico e a administração de transporte do Exchange Server, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique a função complementar dos registros DNS SPF, DKIM e DMARC para mitigar spoofing e phishing em nome do domínio institucional.',
        expectedAnswer:
          'O SPF (registro TXT) especifica quais endereços IP ou servidores estão autorizados a enviar mensagens pelo domínio no endereço de envelope (MAIL FROM). O DKIM assina criptograficamente cabeçalhos e corpo com chave privada do remetente, permitindo verificação via chave pública publicada no DNS (TXT), garantindo integridade e autenticidade. O DMARC exige alinhamento entre o domínio do cabeçalho visível (From:) e as validações SPF/DKIM, instruindo o receptor sobre a política a aplicar (none, quarantine ou reject) e enviando relatórios agregados.',
        keyPoints: Object.freeze([
          'SPF: autoriza IPs emissores no DNS e valida o MAIL FROM.',
          'DKIM: assinatura digital de integridade/autenticidade verificada por chave pública no DNS.',
          'DMARC: alinhamento com cabeçalho From: e política p=quarantine ou p=reject.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Descreva como diagnosticar mensagens retidas no transporte do Exchange e diferencie Delivery Queue de Poison Message Queue.',
        expectedAnswer:
          'O diagnóstico inicia-se pelo Queue Viewer ou pelos cmdlets PowerShell Get-Queue, Get-Message e Get-MessageTrackingLog para verificar o NextHopDomain, o status da fila (Ready, Retry, Suspended) e a mensagem de erro em LastError. A Delivery Queue mantém mensagens válidas aguardando entrega ou nova tentativa para o próximo salto/banco de dados; já a Poison Message Queue isola mensagens potencialmente nocivas ou corrompidas que provocaram falha crítica no serviço de transporte durante seu processamento.',
        keyPoints: Object.freeze([
          'Uso de Queue Viewer, Get-Queue, Get-Message e Get-MessageTrackingLog.',
          'Delivery Queue: mensagens em roteamento/retry para destino.',
          'Poison Message Queue: quarentena automática de mensagens que causaram falha do serviço de transporte.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Apresente um procedimento prático de validação na camada SMTP (portas 25/587) para checar conectores (Send/Receive) e negociação STARTTLS.',
        expectedAnswer:
          'Deve-se validar conectividade e fluxo com Test-Mailflow, testar manualmente a sessão SMTP na porta 25 ou 587 (Test-NetConnection ou telnet) e verificar o certificado e a extensão STARTTLS via openssl s_client -starttls smtp, conferindo banner, resposta ao comando EHLO e códigos SMTP (como 250 OK ou 4xx/5xx). Nos logs de protocolo dos Send e Receive Connectors, verifica-se escopo de IPs permitidos, relay autorizado e TLS mútuo.',
        keyPoints: Object.freeze([
          'Testes de conectividade/fluxo com Test-Mailflow, Test-NetConnection e telnet SMTP.',
          'Validação de certificado e STARTTLS (ex.: openssl s_client -starttls smtp).',
          'Inspeção de Send/Receive Connectors, permissões de relay e logs de protocolo.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — SPF, DKIM e DMARC no DNS e alinhamento From:',
        maxPoints: 15,
        description: 'Papel individual de cada mecanismo, alinhamento DMARC e políticas p=quarantine/reject.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Diagnóstico de filas, Get-MessageTrackingLog e Poison Queue',
        maxPoints: 13,
        description: 'Ferramentas de fila no Exchange e diferença entre Delivery Queue e Poison Queue.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Troubleshooting SMTP, STARTTLS e Send/Receive Connectors',
        maxPoints: 12,
        description: 'Validação prática de portas 25/587, STARTTLS e conectores.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): impacto da falsificação de domínio e retenção de filas no correio hospitalar.',
      'Desenvolvimento 1 — Subitem A (9 linhas): atuação integrada de SPF, DKIM e DMARC.',
      'Desenvolvimento 2 — Subitem B (8 linhas): diagnóstico de filas Exchange e Delivery vs Poison Queue.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): validação SMTP/STARTTLS em Send e Receive Connectors.',
    ]),
    errosComuns: Object.freeze([
      'Afirmar que o SPF valida o cabeçalho From: visível sem mencionar MAIL FROM e alinhamento DMARC.',
      'Confundir Poison Queue com fila de retry por indisponibilidade temporária do servidor remoto.',
      'Sugerir liberar open relay anônimo no Receive Connector para resolver falha de envio.',
    ]),
  },
  {
    id: 'sarah-disc-06',
    title: 'Alta Disponibilidade de Firewall e Balanceamento L7 com SSL Offloading',
    axisNumber: 9,
    editalItemIds: Object.freeze(['2.2.6', '9.2.2', '9.2.4', '9.2.7']),
    scenario:
      'O portal web clínico da instituição é protegido na borda por um par de firewalls NGFW em alta disponibilidade e atendido internamente por um par de balanceadores de carga (VIP HTTPS 443) que distribuem requisições para quatro servidores de aplicação na porta HTTP 8080. Em um incidente recente, um dos servidores backend passou a responder HTTP 500 mantendo o socket TCP 8080 aberto, levando o balanceador a manter usuários direcionados ao nó com falha, além de ocultar o IP real dos clientes nos logs.',
    commandText:
      'Considerando a arquitetura de alta disponibilidade em firewall e balanceador de carga (ADC), responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Descreva o funcionamento da alta disponibilidade (HA) ativo-passivo em firewalls NGFW (heartbeat, state sync e prevenção de falhas de monitoramento de enlace).',
        expectedAnswer:
          'No modo HA ativo-passivo, apenas o nó primário processa o tráfego em produção enquanto o secundário permanece em standby recebendo continuamente a sincronização da tabela de sessões stateful (state sync) e verificando a saúde do par via interfaces dedicadas e redundantes de heartbeat. Com port monitoring habilitado nas interfaces WAN/LAN críticas e prioridade definida, uma queda de hardware ou de link dispara failover transparente preservando sessões ativas sem derrubar conexões clínicas em andamento.',
        keyPoints: Object.freeze([
          'Cluster ativo-passivo com interface(s) dedicada(s) de heartbeat e sincronia de estado (state sync).',
          'Monitoramento de interfaces críticas (port/link monitoring) para acionar failover.',
          'Continuidade das sessões stateful já estabelecidas após a comutação.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique por que o health check TCP (L4) não retirou o servidor web defeituoso do pool e especifique um health check de camada 7 (L7) eficaz.',
        expectedAnswer:
          'O health check L4 avalia exclusivamente a conclusão do three-way handshake TCP na porta 8080; como o processo servidor ainda aceitava conexões TCP apesar de retornar erro interno na camada de aplicação, o pool o manteve como UP. Deve-se configurar um monitor HTTP/HTTPS L7 enviando requisição periódica a um endpoint de integridade (ex.: GET /healthz) e validando o código HTTP 200 OK ou string específica no corpo, com intervalo, timeout e limiar de falhas consecutivas.',
        keyPoints: Object.freeze([
          'Health check TCP (L4) testa apenas abertura da porta, não saúde da aplicação.',
          'Health check L7 (HTTP/HTTPS) valida status 200 OK / conteúdo esperado em rota de saúde.',
          'Definição de intervalo, timeout e número de falhas para retirada automática do pool.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Apresente o papel do SSL Offloading no VIP 443 do balanceador e como preservar o endereço IP original do cliente nos logs dos servidores de aplicação.',
        expectedAnswer:
          'No SSL Offloading (terminação TLS), o balanceador armazena o certificado digital e a chave privada, encerrando a criptografia TLS no VIP (443) para poupar CPU nos servidores backend (8080) e habilitar inspeção L7/persistência por cookie. Como o uso de SNAT substitui o IP de origem pelo IP do balanceador na conexão ao backend, deve-se configurar a inserção do cabeçalho HTTP X-Forwarded-For (ou PROXY Protocol) e ajustar os servidores web para registrá-lo em auditoria.',
        keyPoints: Object.freeze([
          'SSL Offloading centraliza certificados e processamento criptográfico TLS no ADC.',
          'Efeito do SNAT na ocultação do IP real do cliente no backend.',
          'Uso de X-Forwarded-For (ou PROXY Protocol) e configuração de log no servidor de aplicação.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — HA de Firewall (heartbeat, state sync, link monitoring)',
        maxPoints: 14,
        description: 'Funcionamento de ativo-passivo com sincronia de sessões e detecção de falha de interface.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Health Check L4 vs L7 no balanceador',
        maxPoints: 14,
        description: 'Causa da falha do monitor TCP e configuração completa do check HTTP/200 OK.',
      },
      {
        id: 'tec-c',
        label: 'Item C — SSL Offloading e preservação do IP via X-Forwarded-For',
        maxPoints: 12,
        description: 'Terminação TLS no VIP, impacto de SNAT e registro do IP do cliente no backend.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): necessidade de tolerância a falhas e inspeção L7 contínua em portais clínicos.',
      'Desenvolvimento 1 — Subitem A (9 linhas): HA ativo-passivo no NGFW, heartbeat, state sync e failover.',
      'Desenvolvimento 2 — Subitem B (8 linhas): limitação do health check TCP vs configuração L7 HTTP.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): SSL Offloading, SNAT e cabeçalho X-Forwarded-For.',
    ]),
    errosComuns: Object.freeze([
      'Afirmar que HA ativo-passivo dobra a vazão nominal de tráfego (apenas o nó ativo encaminha em ativo-passivo).',
      'Sugerir redução do timeout do health check TCP em vez de migrar para verificação HTTP L7.',
      'Esquecer de configurar o backend web para ler e logar o cabeçalho X-Forwarded-For.',
    ]),
  },
  {
    id: 'sarah-disc-07',
    title: 'Resposta a Incidente de Ransomware em Ambiente Hospitalar (CSIRT)',
    axisNumber: 13,
    editalItemIds: Object.freeze(['2.1.3', '13.1.5', '13.1.6', '13.2.7']),
    scenario:
      'No início do turno da manhã, analistas de suporte detectaram alertas do EDR indicando criptografia rápida de arquivos em uma estação de trabalho conectada à rede administrativa e início de renomeação de arquivos em um compartilhamento SMB departamental mapeado por esse usuário. O incidente mobilizou a equipe de infraestrutura para conter a propagação lateral sem comprometer a recuperação limpa do ambiente.',
    commandText:
      'Considerando o ciclo de tratamento de incidentes (preparação, detecção/análise, contenção, erradicação e recuperação), responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Descreva as medidas imediatas de contenção na estação infectada, nas credenciais e nos compartilhamentos de rede, justificando os cuidados com evidências voláteis.',
        expectedAnswer:
          'Deve-se isolar imediatamente a estação da rede (via quarentena do EDR, bloqueio da porta no switch/NAC ou desconexão física), sem desligar abruptamente o equipamento quando viável preservar memória RAM e processos para perícia. Em seguida, desabilitar ou redefinir a conta comprometida, revogar sessões/tokens ativos (Kerberos/SSO) e suspender temporariamente as sessões SMB ou permissões de escrita no servidor de arquivos afetado para interromper a propagação lateral.',
        keyPoints: Object.freeze([
          'Isolamento imediato de rede (EDR/switch/NAC) preservando estado volátil antes de desligar.',
          'Revogação de credenciais, sessões SMB e bloqueio de movimentação lateral.',
          'Verificação de escopo em outras estações, controladores e servidores críticos.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique as ações de erradicação e os motivos técnicos pelos quais não se deve pagar resgate nem reutilizar o sistema operacional comprometido sem reconstrução.',
        expectedAnswer:
          'Na erradicação, identifica-se o vetor inicial (ex.: anexo de phishing ou vulnerabilidade exposta), bloqueiam-se IoCs (hashes, domínios/IPs C2) no firewall/proxy/EDR e realiza-se varredura completa do parque. Não se deve pagar resgate porque não há garantia de entrega ou integridade da chave descriptografadora, além de financiar o grupo criminoso e expor a reincidência. O sistema infectado deve ser reinstalado do zero (reimagem limpa), pois backdoors e persistências ocultas podem permanecer ativos.',
        keyPoints: Object.freeze([
          'Identificação da causa raiz/vetor inicial, bloqueio de IoCs e varredura EDR no ambiente.',
          'Reimagem limpa do sistema (remoção garantida de persistências/backdoors).',
          'Não pagamento de resgate (ausência de garantia técnica de recuperação e risco de reinfeção).',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Indique como efetuar a recuperação segura dos dados e quais controles preventivos de arquitetura (backups imutáveis e microssegmentação) evitam novos impactos sistêmicos.',
        expectedAnswer:
          'A restauração dos arquivos cifrados deve ocorrer apenas após validação da limpeza do servidor e a partir de cópias de backup imutáveis (WORM) ou offline/air-gapped anteriores ao momento da infecção, garantindo que o malware não tenha apagado snapshots ou catálogos. Preventivamente, aplicam-se menor privilégio nos compartilhamentos SMB, desativação de protocolos legados (SMBv1), MFA em acessos administrativos e microssegmentação entre estações e servidores.',
        keyPoints: Object.freeze([
          'Restauração limpa via backups imutáveis (WORM) ou offline validados antes do incidente.',
          'Controles preventivos: menor privilégio, microssegmentação, MFA e hardening.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Contenção imediata, credenciais, SMB e evidências',
        maxPoints: 15,
        description: 'Isolamento via EDR/rede, bloqueio de conta/SMB e preservação forense básica.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Erradicação, reimagem limpa e não pagamento de resgate',
        maxPoints: 13,
        description: 'Rastreio de IoCs/vetor inicial, justificativa contra resgate e reconstrução do host.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Recuperação via backup imutável e controles preventivos',
        maxPoints: 12,
        description: 'Restore verificado com imutabilidade/offline, menor privilégio e segmentação.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): criticidade da atuação estruturada do CSIRT diante de ransomware em rede hospitalar.',
      'Desenvolvimento 1 — Subitem A (9 linhas): contenção imediata em rede, credenciais, SMB e preservação de evidências.',
      'Desenvolvimento 2 — Subitem B (8 linhas): erradicação de IoCs, reconstrução do SO e recusa ao resgate.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): recuperação via backup imutável e endurecimento preventivo.',
    ]),
    errosComuns: Object.freeze([
      'Formatar ou desligar imediatamente todas as máquinas sem isolar a rede e investigar o vetor inicial.',
      'Restaurar backup sobre ambiente ainda conectado à estação/conta comprometida.',
      'Confiar apenas em snapshots locais acessíveis pelo mesmo sistema operacional comprometido.',
    ]),
  },
  {
    id: 'sarah-disc-08',
    title: 'Conformidade LGPD em Incidente com Dados Sensíveis de Saúde e Comunicação à ANPD',
    axisNumber: 16,
    editalItemIds: Object.freeze(['16.1.10', '16.1.11', '16.2.15']),
    scenario:
      'Durante uma auditoria pós-incidente em um serviço de apoio diagnóstico de uma instituição de saúde (serviço social autônomo de direito privado), confirmou-se acesso não autorizado a um repositório contendo laudos clínicos, prontuários e identificadores de pacientes, com suspeita de exfiltração e indisponibilidade temporária de registros assistenciais. A direção solicitou parecer técnico-normativo à equipe de TI para enquadramento legal e resposta regulatória à luz da Lei nº 13.709/2018 (LGPD).',
    commandText:
      'Considerando exclusivamente a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e a regulamentação da ANPD aplicável, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Classifique os dados comprometidos segundo a LGPD e identifique os papéis institucionais de Controlador, Operador e Encarregado (DPO) no tratamento e na condução do incidente.',
        expectedAnswer:
          'Informações referentes à saúde, prontuários e laudos clínicos constituem dados pessoais sensíveis (Art. 5º, II, da LGPD), exigindo nível elevado de proteção e hipóteses legais restritas (Art. 11). A instituição hospitalar que toma as decisões sobre o tratamento figura como Controladora; eventual prestador terceirizado de suporte/nuvem que processa dados em seu nome atua como Operador; e o Encarregado pelo Tratamento de Dados Pessoais (DPO) atua como canal de comunicação entre Controlador, titulares e a ANPD.',
        keyPoints: Object.freeze([
          'Dados de saúde/prontuários = dados pessoais sensíveis (Art. 5º, II, LGPD).',
          'Definição precisa de Controlador (instituição), Operador (terceiro executor) e Encarregado/DPO.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique os critérios para comunicação de incidente de segurança à ANPD e aos titulares, especificando o prazo regulamentar vigente após o conhecimento do incidente.',
        expectedAnswer:
          'Nos termos do Art. 48 da LGPD, o Controlador deve comunicar à ANPD e ao titular a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante aos titulares — o que se agrava diante de dados sensíveis de saúde e possível exfiltração. A comunicação deve ser efetuada em até 3 dias úteis do conhecimento do incidente, conforme a Resolução CD/ANPD nº 15/2024 (Regulamento de Comunicação de Incidente de Segurança), informando natureza dos dados, titulares afetados, riscos e medidas adotadas.',
        keyPoints: Object.freeze([
          'Critério legal (Art. 48): incidente com possibilidade de risco ou dano relevante aos titulares.',
          'Prazo oficial: em até 3 dias úteis do conhecimento do incidente, conforme a Resolução CD/ANPD nº 15/2024.',
          'Conteúdo mínimo obrigatório da notificação e dever de comunicação também aos titulares.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Apresente medidas técnicas e administrativas previstas no Art. 46 da LGPD que a TI deve comprovar ou reforçar para mitigar danos e atender à governança de segurança.',
        expectedAnswer:
          'Conforme o Art. 46, os agentes devem adotar medidas de segurança técnicas e administrativas aptas a proteger os dados contra acessos não autorizados e situações acidentais ou ilícitas, incluindo controle de acesso por menor privilégio e MFA, criptografia de dados em trânsito e em repouso, segregação de repositórios clínicos, registro auditável de logs (rastreabilidade de acessos) e plano formal de resposta a incidentes integrado à governança de privacidade.',
        keyPoints: Object.freeze([
          'Dever de segurança (Art. 46): medidas técnicas e administrativas contínuas.',
          'Controles concretos: criptografia em repouso/trânsito, menor privilégio, MFA e trilhas de auditoria.',
          'Documentação das medidas de mitigação e preservação de registros para eventual fiscalização da ANPD.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Dados sensíveis (Art. 5º, II) e agentes (Controlador, Operador, DPO)',
        maxPoints: 13,
        description: 'Classificação correta dos dados de saúde e delimitação dos papéis da LGPD.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Comunicação à ANPD/titulares e prazo de 3 dias úteis (Res. 15/2024)',
        maxPoints: 15,
        description: 'Critério de risco/dano relevante (Art. 48) e prazo exato de 3 dias úteis (Resolução CD/ANPD nº 15/2024).',
      },
      {
        id: 'tec-c',
        label: 'Item C — Medidas de segurança técnicas e administrativas (Art. 46)',
        maxPoints: 12,
        description: 'Criptografia, menor privilégio, MFA, logs e governança comprobatória.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): contextualizar o incidente com dados assistenciais em pessoa jurídica de direito privado e aplicabilidade integral da LGPD.',
      'Desenvolvimento 1 — Subitem A (8 linhas): dados pessoais sensíveis de saúde e papéis de Controlador, Operador e DPO.',
      'Desenvolvimento 2 — Subitem B (9 linhas): critério do Art. 48 e prazo de até 3 dias úteis conforme Resolução CD/ANPD nº 15/2024.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): controles técnicos e administrativos do Art. 46 e encerramento.',
    ]),
    errosComuns: Object.freeze([
      'Classificar prontuários médicos apenas como dados pessoais comuns em vez de dados pessoais sensíveis.',
      'Citar "prazo razoável" de forma genérica sem especificar os 3 dias úteis da Resolução CD/ANPD nº 15/2024.',
      'Omitir que a comunicação abrange tanto a ANPD quanto os titulares afetados quando houver risco/dano relevante.',
    ]),
  },
  {
    id: 'sarah-disc-09',
    title: 'VPN IPsec Site-to-Site entre Unidades Hospitalares (IKE, ESP e NAT-T)',
    axisNumber: 2,
    editalItemIds: Object.freeze(['2.2.7', '2.2.9', '2.2.10', '2.2.11']),
    scenario:
      'Duas unidades hospitalares comunicam-se por meio de um túnel VPN IPsec site-to-site estabelecido entre seus firewalls de borda, sendo que uma das pontas opera atrás de um roteador de operadora realizando NAT. Após a criação de uma nova VLAN administrativa na filial e sua inclusão na rede interna, o túnel passou a falhar na negociação da segunda fase, interrompendo o tráfego criptografado para a nova sub-rede.',
    commandText:
      'Com base na arquitetura IPsec e nos protocolos IKEv1/IKEv2, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Compare os protocolos AH e ESP do IPsec e justifique qual combinação de protocolo e modo (transporte ou túnel) é obrigatória para interligar as duas unidades atrás de NAT.',
        expectedAnswer:
          'O AH (protocolo IP 51) fornece integridade, autenticação e proteção anti-replay, mas não criptografa os dados nem atravessa NAT por incluir campos mutáveis do cabeçalho IP externo (como IP de origem) no cálculo de autenticação. Já o ESP (protocolo IP 50) garante confidencialidade (criptografia), integridade, autenticação e anti-replay, sendo obrigatório para dados clínicos; deve operar em modo túnel (encapsulando todo o pacote IP original com novo cabeçalho entre os gateways) associado a NAT-T (UDP 4500).',
        keyPoints: Object.freeze([
          'AH (IP 51): sem confidencialidade e incompatível com NAT.',
          'ESP (IP 50): confidencialidade + integridade/autenticação, compatível com NAT-T.',
          'Modo túnel entre gateways de borda para conectar sub-redes internas.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Diferencie as funções da IKE Phase 1 e da IKE Phase 2 e identifique as portas UDP utilizadas quando há detecção de NAT no trajeto.',
        expectedAnswer:
          'A IKE Phase 1 (IKE SA / Main Mode ou IKE_SA_INIT/IKE_AUTH) autentica mutuamente os gateways (PSK ou certificados) e estabelece um canal seguro de gerenciamento utilizando Diffie-Hellman na porta UDP 500. Caso seja detectado dispositivo NAT no caminho (NAT-Discovery), o tráfego migra para UDP 4500 (NAT-T, encapsulando IKE e ESP em UDP). A Phase 2 (IPsec SA / Quick Mode ou CHILD_SA) utiliza esse canal para negociar algoritmos de criptografia/hash dos dados, chaves de sessão e Traffic Selectors.',
        keyPoints: Object.freeze([
          'Phase 1: autenticação dos peers e canal seguro de controle (IKE SA).',
          'Phase 2: parâmetros de proteção do tráfego de dados e Traffic Selectors (IPsec SA).',
          'Portas UDP 500 (IKE inicial) e UDP 4500 (NAT-T com encapsulamento UDP de ESP).',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Explique por que a inclusão da nova sub-rede interrompeu especificamente a Phase 2 e descreva como diagnosticar e corrigir a falha nos firewalls.',
        expectedAnswer:
          'Em túneis baseados em política (policy-based) ou com seletores restritos, a Phase 2 valida os Traffic Selectors (Proxy IDs: sub-rede local e remota). Ao adicionar a nova VLAN apenas em uma ponta, ocorre divergência (mismatch) de Proxy IDs e o gateway remoto rejeita a negociação da Phase 2 (NO_PROPOSAL_CHOSEN / TS_UNACCEPTABLE). Corrige-se alinhando simetricamente as sub-redes/objetos em ambos os firewalls (ou adotando VPN route-based com interfaces virtuais VTI e seletores 0.0.0.0/0), validando com logs/debug IKE e captura de pacotes.',
        keyPoints: Object.freeze([
          'Mismatch de Traffic Selectors / Proxy IDs entre as duas pontas após nova sub-rede.',
          'Alinhamento simétrico dos seletores ou adoção de interface route-based (VTI).',
          'Diagnóstico por debug IKE/IPsec e inspeção de pacotes nas portas UDP 500/4500.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — AH vs ESP, modo túnel e compatibilidade com NAT',
        maxPoints: 14,
        description: 'Números de protocolo IP 50/51, ausência de criptografia no AH e escolha por ESP túnel.',
      },
      {
        id: 'tec-b',
        label: 'Item B — IKE Phase 1 vs Phase 2 e portas UDP 500 / 4500',
        maxPoints: 13,
        description: 'Papel distinto das duas fases e funcionamento de NAT-T na UDP 4500.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Falha de Traffic Selectors na Phase 2 e troubleshooting',
        maxPoints: 13,
        description: 'Explicação do mismatch de Proxy ID, correção simétrica/VTI e diagnóstico.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): papel crítico da VPN site-to-site cifrada em unidades hospitalares interligadas.',
      'Desenvolvimento 1 — Subitem A (8 linhas): comparação AH (IP 51) vs ESP (IP 50) e modo túnel.',
      'Desenvolvimento 2 — Subitem B (8 linhas): papéis de IKE Phase 1 e Phase 2, UDP 500 e NAT-T UDP 4500.',
      'Desenvolvimento 3 / Conclusão — Subitem C (9 linhas): causa do erro de Proxy ID na Phase 2, ajuste simétrico/VTI e diagnóstico.',
    ]),
    errosComuns: Object.freeze([
      'Afirmar que AH criptografa o payload IP ou atravessa NAT nativamente.',
      'Confundir modo transporte (host-to-host) com modo túnel (gateway-to-gateway).',
      'Descrever apenas portas TCP para IKE/NAT-T em vez de UDP 500 e UDP 4500.',
    ]),
  },
  {
    id: 'sarah-disc-10',
    title: 'Plano de Backup 3-2-1-1-0 com Imutabilidade, RPO/RTO e Testes de Restore',
    axisNumber: 6,
    editalItemIds: Object.freeze(['6.1.2', '6.2.2', '6.2.3', '6.2.4', '6.2.5']),
    scenario:
      'A coordenação de infraestrutura está revisando a política de backup corporativo (Commvault/Veeam) dos servidores de prontuário eletrônico e bancos clínicos. Os acordos operacionais definem perda máxima tolerável de 15 minutos de transações e tempo máximo de retorno de 2 horas, exigindo ainda proteção contra remoção ou criptografia das cópias de segurança em caso de comprometimento administrativo por ransomware.',
    commandText:
      'Considerando a estratégia 3-2-1-1-0, gestão de retenção e testes de continuidade, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique cada dígito da regra de backup 3-2-1-1-0 e justifique por que a cópia imutável ou offline (air-gapped) é indispensável contra ataques destrutivos.',
        expectedAnswer:
          'A regra 3-2-1-1-0 estabelece: manter ao menos 3 cópias dos dados (produção + 2 backups), armazenadas em 2 tipos distintos de mídia (ex.: disco/storage dedicado e fita LTO ou nuvem de objetos), com 1 cópia fora do site principal (offsite), 1 cópia imutável (WORM — Write Once Read Many) ou offline/air-gapped, e 0 erros verificados nos testes automáticos de integridade e restauração. A camada imutável/offline impede que invasores ou credenciais comprometidas apaguem ou criptografem os backups antes da recuperação.',
        keyPoints: Object.freeze([
          'Detalhamento exato dos 5 números da regra 3-2-1-1-0.',
          'Proteção contra ransomware/exclusão maliciosa via WORM (imutabilidade) ou air-gap.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Defina RPO (15 minutos) e RTO (2 horas) no contexto do cenário e explique por que apenas backups noturnos completos/incrementais em fita não atendem a esses requisitos.',
        expectedAnswer:
          'RPO (Recovery Point Objective) de 15 minutos representa a quantidade máxima aceitável de dados perdidos medida no tempo, exigindo backup contínuo de logs transacionais de banco ou replicação assíncrona com janela <= 15 minutos. RTO (Recovery Time Objective) de 2 horas corresponde ao prazo máximo tolerável entre a falha e a volta operacional do serviço. Rotinas noturnas diárias geram RPO de até 24 horas e restauração demorada a partir de fitas (RTO elevado), violando ambos os indicadores.',
        keyPoints: Object.freeze([
          'RPO (15 min): perda máxima de dados no tempo -> demanda log backup/replicação frequente.',
          'RTO (2 h): tempo máximo de indisponibilidade -> demanda instant recovery/disco rápido.',
          'Incompatibilidade do backup noturno exclusivo em fita com RPO de 15 min e RTO de 2 h.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Descreva como estruturar uma política de retenção GFS (Grandfather-Father-Son) associada a rotinas periódicas de teste de restore para validar o indicador final "0".',
        expectedAnswer:
          'Na retenção GFS, combinam-se ciclos incrementais diários de curto prazo (Son), backups completos semanais ou sintéticos de médio prazo (Father) e cópias mensais/anuais de longa retenção (Grandfather) alinhadas à conformidade legal de prontuários. Para garantir o dígito "0" (zero erros), devem ser agendados testes regulares de restore — em sandbox isolada, validação de checksum e simulação bare-metal/granular — com medição do tempo real frente ao RTO e registro formal de evidências.',
        keyPoints: Object.freeze([
          'Política GFS (diário, semanal, mensal/anual) adequada à retenção assistencial.',
          'Testes automatizados e periódicos de restore (sandbox, integridade, medição de RTO).',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Regra 3-2-1-1-0 e imutabilidade WORM / air-gap',
        maxPoints: 14,
        description: 'Explicação correta dos 5 elementos da regra e defesa contra ransomware.',
      },
      {
        id: 'tec-b',
        label: 'Item B — RPO, RTO e adequação tecnológica da janela',
        maxPoints: 14,
        description: 'Conceitos corretos de RPO/RTO e necessidade de backups de log/disco rápido.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Retenção GFS e testes sistemáticos de restauração',
        maxPoints: 12,
        description: 'Estrutura GFS e validação prática da integridade e do RTO nos testes.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): importância da resiliência de cópias de segurança para prontuários críticos.',
      'Desenvolvimento 1 — Subitem A (9 linhas): detalhamento completo da regra 3-2-1-1-0 e WORM/air-gap.',
      'Desenvolvimento 2 — Subitem B (8 linhas): definição aplicada de RPO (15 min) e RTO (2 h) e estratégia técnica.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): política GFS e validação contínua por testes de restore.',
    ]),
    errosComuns: Object.freeze([
      'Inverter os conceitos de RPO (janela de perda de dados) e RTO (tempo de indisponibilidade até retorno).',
      'Explicar apenas 3-2-1 ignorando os últimos dígitos (-1 imutável/offline e -0 zero erros).',
      'Tratar backup apenas como rotina de cópia sem mencionar verificação periódica de restauração.',
    ]),
  },
  {
    id: 'sarah-disc-11',
    title: 'Telefonia IP (SIP/RTP), Voice VLAN, Orçamento PoE e QoS Ponta a Ponta',
    axisNumber: 8,
    editalItemIds: Object.freeze(['8.1.4', '8.2.2', '8.2.3', '8.2.6']),
    scenario:
      'Nas estações de atendimento ambulatorial, cada ponto de rede alimenta um telefone IP via PoE (IEEE 802.3at) e, através da porta switch integrada do aparelho, conecta uma estação de trabalho. Durante o envio de arquivos pesados pelas estações, usuários relataram voz picotada e atrasos nas ligações SIP/RTP, além de dúvidas sobre o consumo máximo do switch PoE ao ampliar ramais.',
    commandText:
      'Considerando os padrões de telefonia IP, PoE e Qualidade de Serviço (QoS), responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique como configurar a porta do switch para operar simultaneamente com o telefone IP e o PC via Voice VLAN e LLDP-MED, além de dimensionar o orçamento PoE (802.3af/at).',
        expectedAnswer:
          'A porta do switch deve usar uma VLAN de dados (untagged) para a estação de trabalho e uma Voice VLAN dedicada (tagged via IEEE 802.1Q) para o telefone IP. O protocolo LLDP-MED (ou CDP) informa automaticamente ao telefone o ID da Voice VLAN e parâmetros de QoS/energia ao conectar. Quanto ao PoE, o IEEE 802.3af entrega até 15,4 W na porta PSE (~12,95 W no PD) e o 802.3at (PoE+) entrega até 30 W na porta PSE (~25,5 W no PD), devendo o somatório reservado não ultrapassar o power budget total da fonte do switch.',
        keyPoints: Object.freeze([
          'Voice VLAN tagged (802.1Q) + Data VLAN untagged na mesma porta física.',
          'Descoberta dinâmica via LLDP-MED/CDP.',
          'Diferenciação 802.3af (15,4 W PSE) vs 802.3at (30 W PSE) e controle do power budget.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Analise a causa do áudio picotado durante transferências pesadas citando os limites recomendados de latência, jitter e perda de pacotes para voz em tempo real.',
        expectedAnswer:
          'Rajadas de dados da estação saturam as filas de saída das interfaces de switch e WAN, elevando atraso, variação de atraso (jitter) e descarte de pacotes UDP/RTP, que não possuem retransmissão por operarem em tempo real. Para qualidade satisfatória de voz (MOS adequado), recomenda-se latência unidirecional (one-way) inferior a 150 ms, jitter inferior a 30 ms e perda de pacotes abaixo de 1%.',
        keyPoints: Object.freeze([
          'Saturação de buffer por tráfego de dados gerando descarte e jitter em fluxos RTP/UDP.',
          'Limites de qualidade VoIP: latência < 150 ms, jitter < 30 ms e perda < 1%.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Especifique a política de QoS ponta a ponta (marcação DSCP/CoS e mecanismo de enfileiramento) adequada para mídia RTP e sinalização SIP.',
        expectedAnswer:
          'Deve-se configurar trust (confiança) condicional na porta do switch para aceitar marcações provenientes do telefone IP e rebaixar/reclassificar pacotes da estação de dados. O tráfego de mídia de voz (RTP) recebe marcação DSCP EF (Expedited Forwarding, valor 46 / CoS 5) e a sinalização SIP recebe DSCP CS3 (24) ou AF31. Nos roteadores e switches, aplica-se enfileiramento LLQ (Low Latency Queueing / fila de prioridade estrita) garantindo despacho imediato à voz antes do tráfego de dados.',
        keyPoints: Object.freeze([
          'Trust boundary na porta do switch/telefone (reclassificação do PC).',
          'Marcações: DSCP EF (46) para mídia RTP e CS3 (24) / AF31 para sinalização SIP.',
          'Enfileiramento LLQ (Priority Queue) para baixa latência e baixo jitter.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Voice VLAN, LLDP-MED e orçamento PoE 802.3af/at',
        maxPoints: 14,
        description: 'Separação tagged/untagged, LLDP-MED e valores corretos de potência PSE/PD.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Diagnóstico de áudio picotado e limiares (<150 ms, <30 ms, <1%)',
        maxPoints: 13,
        description: 'Relação com congestionamento de buffers e parâmetros quantitativos de VoIP.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Marcação DSCP EF/CS3, trust e enfileiramento LLQ',
        maxPoints: 13,
        description: 'QoS DiffServ completo da borda ao enlace WAN.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): integração voz-dados na mesma tomada Ethernet hospitalar e exigência de QoS.',
      'Desenvolvimento 1 — Subitem A (9 linhas): Voice VLAN, LLDP-MED e cálculo de orçamento PoE.',
      'Desenvolvimento 2 — Subitem B (8 linhas): causas do áudio picotado e limiares de latência, jitter e perda.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): trust boundary, DSCP EF/CS3 e fila LLQ.',
    ]),
    errosComuns: Object.freeze([
      'Inverter os valores DSCP (colocar CS3 na mídia RTP e EF na sinalização) ou confundir TCP com RTP (UDP).',
      'Estimar orçamento PoE usando potência recebida (PD) em vez da potência alocada pelo switch (PSE).',
      'Deixar a porta do switch confiar cegamente em DSCP vindo do PC conectado atrás do telefone.',
    ]),
  },
  {
    id: 'sarah-disc-12',
    title: 'Monitoramento Centralizado com Zabbix, SNMPv3, Syslog e Gestão de SLA',
    axisNumber: 10,
    editalItemIds: Object.freeze(['10.2.1', '10.2.2', '10.2.4', '10.2.5', '10.2.8']),
    scenario:
      'A equipe de operações pretende padronizar a observabilidade de servidores Linux/Windows, balanceadores de carga e switches de núcleo no Zabbix integrado a um servidor Syslog centralizado. Além da visibilidade em tempo real de falhas e correlação de logs, a direção exige relatórios mensais confiáveis de disponibilidade (SLA) dos sistemas críticos.',
    commandText:
      'Considerando a arquitetura Zabbix, SNMPv3, Syslog RFC 5424 e métricas de disponibilidade/SLA, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Diferencie Zabbix Agent passivo e ativo quanto às portas TCP e sentido de conexão, e justifique a adoção do SNMPv3 (authPriv) nos equipamentos de rede.',
        expectedAnswer:
          'No modo passivo, o Zabbix Server ou Proxy abre conexão na porta TCP 10050 do Zabbix Agent para solicitar métricas individuais; no modo ativo, o Agent inicia conexão para a porta TCP 10051 do Server/Proxy, obtém a lista de itens e envia dados em lote — ideal para hosts atrás de NAT/firewall ou monitoramento de logs. Em switches, firewalls e balanceadores sem suporte a agente, utiliza-se SNMP (UDP 161 polling / 162 traps) na versão SNMPv3 no nível authPriv, que oferece autenticação de origem e criptografia do tráfego, substituindo strings em texto claro do SNMPv1/v2c.',
        keyPoints: Object.freeze([
          'Passivo (Server/Proxy -> Agent TCP 10050) vs Ativo (Agent -> Server/Proxy TCP 10051).',
          'SNMPv3 authPriv (autenticação + criptografia) nas portas UDP 161/162 vs community strings em texto claro.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique a relevância do Syslog centralizado (RFC 5424), dos campos Facility/Severity e da sincronia NTP para correlação de falhas.',
        expectedAnswer:
          'Centralizar logs via Syslog (UDP/TCP 514 ou TLS 6514) fora dos servidores e switches preserva evidências mesmo quando um equipamento trava ou é comprometido, permitindo correlacionar incidentes em cascata. A classificação por Facility (origem/subsistema) e Severity (0 Emergency a 7 Debug) permite filtrar alertas críticos e acionar triggers; contudo, a correlação cronológica exata depende da sincronização rigorosa de relógios via NTP em toda a infraestrutura.',
        keyPoints: Object.freeze([
          'Preservação externa dos registros (UDP/TCP 514 ou TLS) mesmo em falha do host.',
          'Triagem via Facility e níveis de Severity (0–7, RFC 5424).',
          'NTP obrigatório para linha do tempo coerente na correlação de eventos.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Descreva como estruturar triggers inteligentes (com histerese/baseline), checagens sintéticas e cálculo de SLA no Zabbix evitando falsos positivos.',
        expectedAnswer:
          'Para evitar oscilações (flapping) e fadiga de alertas, as triggers devem avaliar janelas temporais ou média móvel em vez de picos instantâneos, aplicando histerese (condição de disparo distinta da condição de recuperação) e dependências entre triggers (suprimindo alertas de servidores caso o switch de uplink caia). Para o SLA, utilizam-se checagens sintéticas ponta a ponta (HTTP/DB/ICMP) associadas a serviços e árvores de SLA no Zabbix, considerando janelas de manutenção planejada separadas da disponibilidade contratada (ex.: 99,9%).',
        keyPoints: Object.freeze([
          'Triggers com janela temporal, histerese e dependências para evitar flapping e tempestade de alertas.',
          'Synthetic checks ponta a ponta e exclusão correta de janelas de manutenção no cálculo de SLA.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Zabbix Agent ativo/passivo (10050/10051) e SNMPv3 authPriv',
        maxPoints: 14,
        description: 'Portas, sentido de conexão e segurança do SNMPv3 vs v1/v2c.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Syslog RFC 5424, Facility/Severity e sincronia NTP',
        maxPoints: 13,
        description: 'Centralização segura, taxonomia RFC 5424 e exigência de NTP.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Histerese, dependências de trigger, synthetic checks e SLA',
        maxPoints: 13,
        description: 'Prevenção de falsos positivos e medição fiel de disponibilidade/SLA.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): importância da observabilidade integrada para disponibilidade de serviços hospitalares.',
      'Desenvolvimento 1 — Subitem A (9 linhas): Zabbix Agent passivo/ativo e coleta segura via SNMPv3 authPriv.',
      'Desenvolvimento 2 — Subitem B (8 linhas): Syslog centralizado RFC 5424, Facility/Severity e NTP.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): triggers com histerese/dependências, testes sintéticos e SLA.',
    ]),
    errosComuns: Object.freeze([
      'Inverter as portas do Zabbix Agent (10050 é passivo no Agent; 10051 é trappers/ativo no Server/Proxy).',
      'Recomendar SNMPv2c para rede de gerência sem apontar falta de criptografia e autenticação forte.',
      'Medir SLA apenas por ping ICMP sem testar disponibilidade real da aplicação.',
    ]),
  },
  {
    id: 'sarah-disc-13',
    title: 'Hardening de Servidores Linux (SSH, Menor Privilégio), systemd e LVM Online',
    axisNumber: 11,
    editalItemIds: Object.freeze(['11.2.2', '11.2.4', '11.2.6', '13.2.1', '13.2.3']),
    scenario:
      'Um servidor Linux corporativo em produção que hospeda um repositório de arquivos apresentou dois eventos operacionais: necessidade urgente de endurecimento de acesso remoto após tentativa de força bruta no SSH e esgotamento iminente de espaço na partição /dados (ext4 sobre LVM), além de um unit file customizado do systemd que falhou ao subir após atualização.',
    commandText:
      'Considerando boas práticas de hardening Linux, menor privilégio, systemd e LVM, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Apresente as configurações essenciais de hardening no OpenSSH (/etc/ssh/sshd_config) e explique como aplicar o princípio do menor privilégio administrativo via sudo.',
        expectedAnswer:
          'No /etc/ssh/sshd_config, deve-se definir PermitRootLogin no, PasswordAuthentication no (exigindo autenticação por pares de chaves assimétricas Ed25519/RSA), restringir usuários/grupos permitidos (AllowUsers/AllowGroups) e validar a sintaxe com sshd -t antes de recarregar o serviço. Pelo princípio do menor privilégio, administradores acessam com contas nominativas individuais e executam tarefas elevadas apenas via sudoers com escopo granular de comandos e registro auditável em log, evitando compartilhamento da conta root.',
        keyPoints: Object.freeze([
          'sshd_config: PermitRootLogin no, PasswordAuthentication no (chaves), AllowUsers/AllowGroups.',
          'Validação de sintaxe com sshd -t antes do reload.',
          'Menor privilégio: contas nominais + sudo granular com auditoria (sem root compartilhado).',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Descreva os comandos para diagnosticar e corrigir a falha de inicialização do serviço customizado no systemd após alteração no arquivo .service.',
        expectedAnswer:
          'Inicia-se inspecionando systemctl status <servico> e os logs detalhados via journalctl -u <servico> -xe (ou -b) para identificar erros de sintaxe, permissão ou caminho de binário. Sempre que um arquivo unit (.service) é editado, deve-se executar systemctl daemon-reload para atualizar a configuração em memória do systemd, reiniciar o serviço (systemctl restart <servico>) e garantir persistência no boot com systemctl enable.',
        keyPoints: Object.freeze([
          'Diagnóstico via systemctl status e journalctl -u <unidade> -xe.',
          'Execução de systemctl daemon-reload após alterar unit files.',
          'Habilitação no boot com systemctl enable.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Indique a sequência exata de comandos para expandir online (sem desmontar /dados) o volume lógico LVM e o sistema de arquivos ext4 a partir de um novo disco /dev/sdb.',
        expectedAnswer:
          'Inicializa-se o disco como Physical Volume (pvcreate /dev/sdb), incorpora-o ao Volume Group existente (vgextend vg_dados /dev/sdb) e estende-se o Logical Volume junto ao sistema de arquivos ext4 em uma única operação online com lvextend -r -l +100%FREE /dev/vg_dados/lv_dados (ou lvextend seguido de resize2fs /dev/vg_dados/lv_dados). Se o sistema de arquivos fosse XFS, o redimensionamento online utilizaria xfs_growfs sobre o ponto de montagem.',
        keyPoints: Object.freeze([
          'Sequência LVM correta: pvcreate -> vgextend -> lvextend.',
          'Expansão online do ext4 via lvextend -r ou resize2fs (diferenciando de xfs_growfs).',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Hardening OpenSSH e menor privilégio com sudo',
        maxPoints: 15,
        description: 'Diretivas corretas do sshd_config, sshd -t, contas nominais e sudo granular.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Troubleshooting systemd (status, journalctl, daemon-reload)',
        maxPoints: 12,
        description: 'Fluxo correto de diagnóstico e recarregamento de unit files.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Expansão LVM e ext4 online sem desmontar',
        maxPoints: 13,
        description: 'Comandos pvcreate, vgextend, lvextend -r / resize2fs corretos.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): relevância do endurecimento e continuidade operacional em servidores Linux.',
      'Desenvolvimento 1 — Subitem A (9 linhas): diretivas sshd_config, validação sshd -t e menor privilégio com sudo.',
      'Desenvolvimento 2 — Subitem B (8 linhas): diagnóstico systemd com systemctl status, journalctl e daemon-reload.',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): sequência pvcreate, vgextend, lvextend -r / resize2fs online.',
    ]),
    errosComuns: Object.freeze([
      'Esquecer systemctl daemon-reload após editar arquivo .service.',
      'Propor desmontar /dados ou rodar fsck em produção para expandir ext4 (ext4 suporta resize online).',
      'Indicar xfs_growfs para ext4 ou resize2fs para XFS.',
    ]),
  },
  {
    id: 'sarah-disc-14',
    title: 'Automação Idempotente (Ansible/Bash), APIs REST e Tratamento de Erros',
    axisNumber: 12,
    editalItemIds: Object.freeze(['12.1.2', '12.2.2', '12.2.3', '12.2.7', '12.2.8']),
    scenario:
      'Para eliminar configurações manuais divergentes (configuration drift) entre dezenas de servidores Linux e Windows, a equipe de infraestrutura decidiu automatizar o provisionamento de agentes de monitoramento e consultas de inventário via API REST do sistema de CMDB/monitoramento, substituindo scripts shell frágeis que prosseguiam mesmo após falhas silenciosas.',
    commandText:
      'Considerando automação defensiva em Bash, consumo de APIs REST/JSON e playbooks Ansible, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Explique a função do cabeçalho defensivo `set -euo pipefail` em scripts Bash e os cuidados ao consumir uma API REST (autenticação, status HTTP e parsing JSON) sem vazar segredos.',
        expectedAnswer:
          'A opção `-e` (errexit) aborta o script se um comando retornar código diferente de zero; `-u` (nounset) falha ao referenciar variáveis não definidas evitando caminhos vazios perigosos; e `-o pipefail` faz o pipeline retornar erro caso qualquer comando intermediário falhe (não apenas o último). Ao consumir APIs REST com `curl`, deve-se validar o status HTTP (`-f` ou captura de `%{http_code}`), processar o JSON de forma estruturada com `jq`, nunca gravar tokens hardcoded no código (usando variáveis de ambiente ou cofre) e sempre usar aspas duplas ao expandir `$TOKEN` no cabeçalho Authorization.',
        keyPoints: Object.freeze([
          'Significado exato de -e, -u e -o pipefail no Bash.',
          'Validação de status HTTP, parsing seguro com jq e proteção de tokens/credenciais (aspas duplas, sem hardcoded secrets).',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Descreva como o Ansible garante execução remota sem agente (agentless) em ambientes mistos Linux/Windows e o conceito prático de idempotência em playbooks YAML.',
        expectedAnswer:
          'O Ansible opera de forma agentless a partir do nó de controle, conectando-se aos alvos Linux via SSH (executando módulos em Python) e aos servidores Windows via WinRM (TCP 5985 HTTP ou 5986 HTTPS com TLS, executando módulos em PowerShell). A idempotência significa que executar o mesmo playbook repetidas vezes converge o host ao estado desejado sem efeitos colaterais ou reaplicação destrutiva caso a configuração já esteja conforme (ao contrário de scripts imperativos cegos), podendo usar `--check` e handlers condicionais.',
        keyPoints: Object.freeze([
          'Arquitetura agentless: SSH em Linux e WinRM (5985/5986) em Windows.',
          'Idempotência declarativa em YAML (reexecução segura sem alterar estados já conformes).',
          'Uso de inventários, variáveis protegidas (Ansible Vault) e modo check/handlers.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Bash defensivo (set -euo pipefail) e integração segura via REST/JSON',
        maxPoints: 20,
        description: 'Explicação precisa de -e/-u/-o pipefail, validação HTTP, jq e proteção de credenciais.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Ansible agentless (SSH/WinRM) e idempotência em playbooks YAML',
        maxPoints: 20,
        description: 'Funcionamento sem daemon residente, portas WinRM e conceito prático de idempotência.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3–4 linhas): riscos de drift e scripts frágeis em parque heterogêneo Linux/Windows.',
      'Desenvolvimento 1 — Subitem A (11–12 linhas): set -euo pipefail, curl/jq, status HTTP e guarda de tokens.',
      'Desenvolvimento 2 / Conclusão — Subitem B (11–12 linhas): Ansible agentless (SSH vs WinRM 5985/5986) e idempotência YAML.',
    ]),
    errosComuns: Object.freeze([
      'Afirmar que o Ansible exige instalação de agente daemon residente nos servidores gerenciados.',
      'Usar aspas simples ao redor de `$TOKEN` em `curl`, impedindo a expansão da variável pelo Bash.',
      'Confundir idempotência com paralelismo ou apenas com repetição em loop.',
    ]),
  },
  {
    id: 'sarah-disc-15',
    title: 'Troubleshooting de Lentidão Crítica e Análise de Causa Raiz (RCA)',
    axisNumber: 14,
    editalItemIds: Object.freeze(['14.1.1', '14.1.2', '14.2.1', '14.2.3', '14.2.6']),
    scenario:
      'O sistema de prontuário eletrônico ambulatorial passou a apresentar lentidão severa intermitente durante os picos de atendimento da manhã, com reclamações de travamento de telas nos consultórios. O serviço permanece no ar, mas com tempo de resposta degradado de 1 segundo para mais de 25 segundos, exigindo atuação estruturada para isolar o gargalo, preservar evidências e eliminar a recorrência.',
    commandText:
      'Considerando as metodologias de diagnóstico, preservação de evidências e gestão de incidentes/problemas, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Descreva a abordagem estruturada de isolamento da falha (dividir e conquistar / top-down ou bottom-up) e os cuidados iniciais na coleta de evidências antes de reiniciar serviços.',
        expectedAnswer:
          'Deve-se aplicar o método dividir e conquistar (ou top-down/bottom-up) para isolar em qual camada está o gargalo — comparando latência na rede (ping/traceroute/captura TCP), tempo de processamento na aplicação/balanceador e tempo de consulta/I/O no banco de dados e storage (CPU, fila de disco, locks). Antes de qualquer reinício paliativo (que apaga estados em memória), é indispensável coletar e preservar dumps de processos/thread dumps, consultas lentas ativas, estatísticas de interface e logs alinhados por NTP.',
        keyPoints: Object.freeze([
          'Isolamento sistemático por camadas (rede -> balanceador/app -> banco/storage).',
          'Coleta prévia de logs, métricas, thread/memory dumps e pcaps antes de reiniciar serviços.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique como conduzir a Análise de Causa Raiz (RCA) após a normalização utilizando correlação de eventos e ferramentas como 5 Porquês ou Diagrama de Ishikawa.',
        expectedAnswer:
          'Com o serviço estabilizado, constrói-se uma linha do tempo única correlacionando eventos de firewall, balanceador, aplicação, banco e storage com timestamps sincronizados via NTP. A partir da cronologia, aplica-se a técnica dos 5 Porquês (encadeamento causal até a falha de processo ou configuração subjacente) ou o Diagrama de Ishikawa (Espinha de Peixe, agrupando causas em infraestrutura, rede, software, processo e pessoas) em reunião post-mortem sem caça a culpados, identificando o gatilho real (ex.: ausência de índice ou saturação de pool de conexões).',
        keyPoints: Object.freeze([
          'Correlação cronológica de eventos multi-camadas sincronizada por NTP.',
          'Aplicação de 5 Porquês e/ou Diagrama de Ishikawa para achar a causa fundamental.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Diferencie a atuação do Gerenciamento de Incidentes da atuação do Gerenciamento de Problemas nesse episódio, indicando o papel do Erro Conhecido (Known Error).',
        expectedAnswer:
          'O Gerenciamento de Incidentes busca restaurar a operação normal no menor tempo possível para reduzir o impacto assistencial — por exemplo, aplicando escalonamento de recursos ou solução de contorno (workaround). O Gerenciamento de Problemas investiga a causa raiz definitiva via RCA, registra o Erro Conhecido na base (KEDB) com o workaround documentado e submete uma Requisição de Mudança (RFC) definitiva (ex.: tuning de consultas ou ampliação estrutural de IOPS) para impedir a recorrência.',
        keyPoints: Object.freeze([
          'Incidente: restauração rápida da operação e redução do impacto (workaround).',
          'Problema: RCA, registro de Erro Conhecido (KEDB) e eliminação permanente via mudança.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Isolamento metodológico e preservação de evidências antes de reiniciar',
        maxPoints: 14,
        description: 'Uso de dividir e conquistar/camadas e captura prévia de logs/dumps/pcaps.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Correlação NTP e RCA (5 Porquês / Ishikawa)',
        maxPoints: 13,
        description: 'Linha do tempo sincronizada e aplicação correta das ferramentas de RCA.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Gerenciamento de Incidentes vs Problemas e Erro Conhecido',
        maxPoints: 13,
        description: 'Distinção precisa de objetivos e uso de workaround/KEDB/RFC.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): necessidade de diagnóstico metódico em degradação severa de sistema assistencial.',
      'Desenvolvimento 1 — Subitem A (9 linhas): isolamento em camadas (dividir e conquistar) e preservação de evidências.',
      'Desenvolvimento 2 — Subitem B (8 linhas): linha do tempo com NTP e técnicas RCA (5 Porquês / Ishikawa).',
      'Desenvolvimento 3 / Conclusão — Subitem C (8 linhas): distinção Incidente vs Problema, Erro Conhecido e resolução definitiva.',
    ]),
    errosComuns: Object.freeze([
      'Reiniciar imediatamente servidor e banco antes de coletar logs, dumps e métricas de causa.',
      'Confundir solução de contorno (workaround) com eliminação da causa raiz no Gerenciamento de Problemas.',
      'Testar alterações aleatórias simultâneas sem isolar variável por variável.',
    ]),
  },
  {
    id: 'sarah-disc-16',
    title: 'Plano de Recuperação de Desastres (DR), Ordem de Subida e Split-Brain',
    axisNumber: 15,
    editalItemIds: Object.freeze(['15.1.2', '15.2.1', '15.2.3', '15.2.7', '15.2.8']),
    scenario:
      'Um hospital possui ambiente principal em sala-cofre local e um site secundário de Disaster Recovery (warm site) interligado por enlace dedicado e replicação assíncrona. Após falha severa de energia elétrica e climatização no data center primário — somada à perda prévia de enlaces de heartbeat de um cluster ativo-passivo local — foi necessário acionar o Plano de Recuperação de Desastres (DRP) para retomar os sistemas assistenciais no site secundário.',
    commandText:
      'Considerando a arquitetura de alta disponibilidade e continuidade operacional, responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Diferencie hot site, warm site e cold site e explique os mecanismos (quórum e fencing/STONITH) que evitam split-brain durante falhas de heartbeat ou failover.',
        expectedAnswer:
          'No cold site há apenas espaço físico, energia e climatização (RTO de dias); o warm site dispõe de infraestrutura de servidores, rede e replicação periódica pronta para ativação após restauração/subida (RTO de horas); e o hot site mantém réplica sincronizada em tempo real pronta para comutação quase imediata. Para prevenir split-brain (ambos os nós ativos escrevendo no armazenamento simultaneamente após perda de heartbeat), emprega-se quórum por maioria (com Witness/Quorum Disk) e fencing/STONITH para isolar ou desligar à força o nó não majoritário.',
        keyPoints: Object.freeze([
          'Comparação objetiva entre cold site, warm site e hot site (tempo de retorno e custo).',
          'Prevenção de split-brain: quórum com Witness/Quorum Disk + STONITH/fencing.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Especifique a ordem lógica de subida (sequência de dependências) dos serviços de infraestrutura e clínicos durante a ativação do site de DR.',
        expectedAnswer:
          'O runbook de DR deve respeitar estritamente a cadeia de dependências: (1) conectividade de borda, roteamento, VPN e firewalls (acesso e políticas); (2) serviços fundacionais de infraestrutura — DNS, NTP, Active Directory/autenticação e certificados; (3) storage/LUNs e bancos de dados clínicos (verificando consistência transacional); (4) servidores de aplicação, middleware e balanceadores de carga; e (5) validação funcional pelas equipes técnicas e assistenciais antes de liberar o acesso final via DNS/GSLB.',
        keyPoints: Object.freeze([
          'Sequência correta de dependências: rede/firewall -> DNS/NTP/AD -> storage/bancos -> aplicações/balanceador.',
          'Verificação de consistência de dados e redirecionamento controlado de acesso (DNS/GSLB).',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Explique os tipos de testes de recuperação de desastres (tabletop, simulação e failover programado) e os cuidados necessários no processo posterior de failback.',
        expectedAnswer:
          'Testes tabletop revisam em mesa o runbook passo a passo com as equipes; testes de simulação/paralelos validam a subida isolada no site DR sem impactar produção; e testes de failover programado executam a virada real controlada em janela acordada. Após o restabelecimento do site primário, o failback exige janela planejada, ressincronização reversa completa das alterações gravadas no site DR para o primário (evitando perda de dados recentes) e verificação de integridade antes da comutação de retorno.',
        keyPoints: Object.freeze([
          'Modalidades de teste: tabletop, simulação isolada e failover real controlado.',
          'Failback seguro: ressincronização reversa dos dados gravados durante a contingência.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Sites de DR (hot/warm/cold) e prevenção de split-brain',
        maxPoints: 14,
        description: 'Classificação dos sites DR e dupla proteção com quórum + fencing/STONITH.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Ordem sequencial de subida de serviços no runbook de DR',
        maxPoints: 14,
        description: 'Cadeia lógica de dependências sem iniciar aplicações antes de rede/AD/DNS/BD.',
      },
      {
        id: 'tec-c',
        label: 'Item C — Testes periódicos de DR e cuidados no failback',
        maxPoints: 12,
        description: 'Tipos de testes (tabletop, simulação, failover) e ressincronização reversa.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): importância do DRP estruturado para continuidade de serviços hospitalares.',
      'Desenvolvimento 1 — Subitem A (9 linhas): hot/warm/cold site e mecanismos anti-split-brain.',
      'Desenvolvimento 2 — Subitem B (9 linhas): ordem exata de subida das camadas de infraestrutura e negócio.',
      'Desenvolvimento 3 / Conclusão — Subitem C (7 linhas): testes de DR e retorno controlado por failback.',
    ]),
    errosComuns: Object.freeze([
      'Propor subir servidores de aplicação antes de DNS, Active Directory e bancos de dados.',
      'Realizar failback imediato sem replicar de volta os dados produzidos no site de DR.',
      'Confundir redundância local N+1 no mesmo rack/sala com recuperação geográfica de desastres.',
    ]),
  },
  {
    id: 'sarah-disc-17',
    title: 'Governança ITIL 4: Habilitação de Mudança (RFC/CAB) e Gestão de Riscos',
    axisNumber: 16,
    editalItemIds: Object.freeze(['16.1.3', '16.1.4', '16.2.3', '16.2.4']),
    scenario:
      'Após duas indisponibilidades seguidas provocadas por atualizações aplicadas fora de controle no firewall central e nos switches de distribuição durante o horário comercial, a diretoria determinou a implantação formal da prática de Habilitação de Mudança (Change Enablement) do ITIL 4 integrada à gestão de riscos da ISO 31000 para todo o ambiente de infraestrutura.',
    commandText:
      'Com base nas práticas do ITIL 4 e nos princípios da gestão de riscos (ISO 31000), responda em até 30 (trinta) linhas:',
    maxLines: 30,
    subtasks: Object.freeze([
      {
        letter: 'A' as const,
        prompt:
          'Diferencie os três tipos de mudança previstos no ITIL 4 (padrão, normal e emergencial), indicando quando há necessidade de avaliação pelo Comitê Consultivo de Mudanças (CAB/ECAB).',
        expectedAnswer:
          'A mudança padrão (standard) é pré-autorizada, de baixo risco, recorrente e com procedimento documentado, dispensando aprovação individual do CAB a cada execução. A mudança normal exige avaliação de risco, impacto e cronograma por meio de RFC (Request for Change), sendo submetida à autoridade de mudança — como o CAB em mudanças de maior impacto — antes da implantação. A mudança emergencial destina-se a restaurar serviço crítico ou corrigir vulnerabilidade severa iminente, seguindo fluxo acelerado aprovado por autoridade emergencial (ECAB) e documentada posteriormente.',
        keyPoints: Object.freeze([
          'Mudança Padrão: baixo risco, pré-autorizada, repetitiva (sem CAB por execução).',
          'Mudança Normal: RFC avaliada por autoridade/CAB conforme risco e impacto.',
          'Mudança Emergencial: resposta urgente a incidente crítico/segurança via ECAB.',
        ]),
      },
      {
        letter: 'B' as const,
        prompt:
          'Explique os requisitos mínimos de uma RFC segura (incluindo plano de rollback e critérios de validação) e apresente as opções de tratamento de riscos da ISO 31000 aplicáveis à janela de manutenção.',
        expectedAnswer:
          'Uma RFC completa deve conter escopo técnico detalhado, análise de impacto nos serviços assistenciais, janela de execução fora do horário crítico, lista de responsáveis, critérios objetivos de sucesso (testes pós-mudança) e plano de rollback testado para reversão segura se ocorrer falha. Pela ISO 31000, após analisar probabilidade e impacto, o risco residual pode ser tratado por mitigação (ex.: testes em homologação e backup prévio), evitação (adiar alteração arriscada), transferência/compartilhamento (apoio contratual de fabricante) ou aceitação formal pela liderança.',
        keyPoints: Object.freeze([
          'Elementos de RFC: impacto, janela, testes de validação e plano de rollback explícito.',
          'Opções de tratamento de risco (ISO 31000): mitigar, evitar, transferir/compartilhar e aceitar.',
        ]),
      },
      {
        letter: 'C' as const,
        prompt:
          'Explique como a prática de Habilitação de Mudança do ITIL 4 se integra à Gestão de Problemas e à Revisão Pós-Implementação (PIR) para reduzir incidentes recorrentes.',
        expectedAnswer:
          'Quando o Gerenciamento de Problemas conclui uma análise de causa raiz, a correção definitiva de um Erro Conhecido somente entra em produção por meio de uma RFC controlada na Habilitação de Mudança, evitando que a própria correção gere novos incidentes. Ao término da implantação, realiza-se a Revisão Pós-Implementação (PIR) para verificar se os objetivos foram atingidos, validar ausência de efeitos colaterais e retroalimentar a melhoria contínua dos procedimentos operacionais.',
        keyPoints: Object.freeze([
          'Integração Problema -> RFC de Mudança para correção permanente controlada.',
          'PIR (Revisão Pós-Implementação) para aferir eficácia e melhoria contínua.',
        ]),
      },
    ]),
    criterios: buildCriteria([
      {
        id: 'tec-a',
        label: 'Item A — Tipos de mudança no ITIL 4 (padrão, normal, emergencial) e CAB',
        maxPoints: 15,
        description: 'Classificação correta e papel da autoridade de mudança / CAB / ECAB.',
      },
      {
        id: 'tec-b',
        label: 'Item B — Estrutura de RFC (rollback/janela) e tratamento de riscos ISO 31000',
        maxPoints: 14,
        description: 'Requisitos de rollback e estratégias de risco (mitigar, evitar, transferir, aceitar).',
      },
      {
        id: 'tec-c',
        label: 'Item C — Integração com Gestão de Problemas e PIR',
        maxPoints: 11,
        description: 'Vínculo entre erro conhecido, RFC e Revisão Pós-Implementação.',
      },
    ]),
    estruturaSugerida: Object.freeze([
      'Introdução (3 linhas): importância da disciplina de mudanças na redução de indisponibilidades causadas por alterações não controladas.',
      'Desenvolvimento 1 — Subitem A (9 linhas): classificação padrão, normal e emergencial e atuação do CAB/ECAB.',
      'Desenvolvimento 2 — Subitem B (9 linhas): composição segura da RFC (rollback, validação, janela) e tratamento ISO 31000.',
      'Desenvolvimento 3 / Conclusão — Subitem C (7 linhas): fechamento do ciclo com Gestão de Problemas e PIR.',
    ]),
    errosComuns: Object.freeze([
      'Exigir aprovação presencial do CAB para mudanças padrão pré-autorizadas de rotina.',
      'Omitir plano de rollback e testes pós-mudança como pré-requisitos obrigatórios da RFC.',
      'Tratar mudança emergencial sem registro ou revisão posterior (PIR).',
    ]),
  },
]);
