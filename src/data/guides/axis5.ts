import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_5: Record<string, StudyGuide> = {
  '5.1.1': {
    itemId: '5.1.1',
    highYieldSummary: [
      'Definição e escopo: virtualização de servidores é a camada de abstração entre o hardware físico e os sistemas operacionais operada por um hipervisor (VMM — Virtual Machine Monitor) para executar múltiplas máquinas virtuais (VMs) isoladas em um mesmo servidor. Resolve a subutilização de CPU e memória, facilita o isolamento de falhas e agiliza o provisionamento em datacenters corporativos (referências: VMware ESXi, Microsoft Hyper-V, KVM e Xen).',
      'Hipervisor Tipo 1 (Bare-Metal): instala-se diretamente sobre o hardware físico sem sistema operacional hospedeiro intermediário, entregando máximo desempenho e isolamento (ex.: VMware ESXi, Microsoft Hyper-V bare-metal, KVM em servidores dedicados, Xen).',
      'Hipervisor Tipo 2 (Hosted): executa como aplicação sobre um SO (Sistema Operacional) hospedeiro convencional (Windows/Linux/macOS), introduzindo sobrecarga adicional de E/S (Entrada/Saída) — indicado para laboratórios e estações (ex.: VMware Workstation, VirtualBox).',
      'Técnicas de Virtualização: Virtualização Total / Assistida por Hardware (extensões de CPU Intel VT-x / AMD-V executam SO convidado sem modificações), Paravirtualização (SO convidado conhece o hipervisor e faz hypercalls — chamadas otimizadas ao hipervisor — ex.: drivers virtio/PV — drivers paravirtualizados) e Emulação pura.',
      'Alocação de Recursos (vCPU, Memória, Overcommit): hipervisor escalona vCPUs (CPUs virtuais) nas pCPUs (núcleos físicos); excesso de vCPUs por VM causa CPU Ready alto (tempo de espera na fila de CPU). Na RAM (memória volátil) emprega Transparent Page Sharing (TPS — compartilhamento de páginas idênticas), Ballooning (driver VMware Tools que recupera memória ociosa), Memory Compression e Hypervisor Swapping (paginação forçada em disco).',
      'Containers vs Máquinas Virtuais: VMs virtualizam hardware completo e sobem um kernel próprio por instância; Containers compartilham o kernel do sistema operacional host isolados por namespaces (isolamento de visão de processos/rede/arquivos) e cgroups (limitação e contabilização de CPU/RAM/E/S).',
      'Exemplo operacional: em um servidor hospitalar com 32 pCPUs e 256 GB de RAM rodando hipervisor bare-metal, hospedam-se 14 VMs de prontuário mantendo razão controlada (~2 vCPUs por pCPU). Ao notar lentidão na VM de banco de dados com `%RDY` de 12% no `esxtop`, reduz-se sua alocação de 16 para 8 vCPUs, normalizando o agendamento (`%RDY < 2%`). Já serviços web stateless rodam em containers Linux no mesmo cluster isolados por `cgroups` e `namespaces`.'
    ],
    technicalReference: [
      'Tipo 1 (Bare-Metal): ESXi, Hyper-V, KVM/Xen | Tipo 2 (Hosted): VirtualBox, VMware Workstation/Player',
      'Extensões CPU: Intel VT-x / EPT e AMD-V / RVI | Técnicas RAM no ESXi: TPS -> Ballooning -> Compressão -> Swap (último recurso).'
    ],
    examTraps: [
      'Ballooning exige o agente do hipervisor (VMware Tools / Guest Additions) instalado na VM para recuperar memória ociosa antes de recorrer ao swap em disco.',
      'Atribuir vCPUs em excesso a uma VM (ex.: 16 vCPUs em host de 8 cores) piora a performance devido à disputa por co-scheduling (CPU Ready elevado).',
      'Hypervisor Tipo 1 NÃO depende de sistema operacional desktop subjacente para gerenciar diretamente CPU e memória.'
    ],
    keyTerms: [
      'VMkernel / VMM: camada do hipervisor Tipo 1 que escalona CPU, memória e E/S diretamente sobre o hardware físico',
      'Co-scheduling: agendamento simultâneo de todas as vCPUs de uma VM multi-core nos núcleos físicos do host',
      'Overcommit: alocação somada de vCPUs ou vRAM das VMs superior à capacidade física instalada no servidor',
      'CPU Ready (%RDY): percentual de tempo em que uma VM pronta para executar aguarda disponibilidade de pCPU física',
      'Hypervisor Swapping: paginação de memória da VM para arquivo de swap no datastore (.vswp), causando degradação severa'
    ]
  },
  '5.1.2': {
    itemId: '5.1.2',
    highYieldSummary: [
      'Definição e escopo: serviços de armazenamento e padrões de disco/interface definem como os dados persistem em discos físicos (HDD mecânico ou SSD em estado sólido), trafegam pelos barramentos (SATA, SAS, NVMe) e são expostos aos servidores (Block, File, Object). Resolvem gargalos de I/O, oferecem redundância de hardware e adequam latência, vazão e custo a cada perfil de carga corporativa.',
      'Padrões de Disco e Interfaces: SATA (custo baixo, half-duplex, fila AHCI — Advanced Host Controller Interface — de 32 comandos, ideal para arquivamento frio), SAS (full-duplex, dual-port para controladoras redundantes, comandos SCSI — Small Computer System Interface — avançados, maior confiabilidade) e NVMe (PCIe — PCI Express — direto, até 64K filas × 64K comandos, latência na casa de microssegundos).',
      'HDD vs SSD/NVMe: HDDs mecânicos têm latência alta (ms) devido a busca mecânica/rotação (7.2k–15k RPM) e poucos IOPS (operações de entrada e saída por segundo, ~75–200); SSDs eliminam partes móveis atingindo dezenas a centenas de milhares de IOPS com latência sub-milissegundo.',
      'Modelos de Armazenamento (Block, File, Object): Block Storage entrega volumes brutos/LUNs (Logical Unit Numbers) sem sistema de arquivos (iSCSI/FC — ideal para SGBDs — Sistemas Gerenciadores de Banco de Dados — e datastores de VMs); File Storage entrega diretórios compartilhados com filesystem (NAS via NFS/SMB); Object Storage armazena objetos imutáveis com metadados e ID único acessados via API HTTP/REST (S3 — padrão Amazon Simple Storage Service).',
      'Arquitetura de Storage Corporativo: controladoras duplas ativo-ativo (cache espelhado protegido por bateria/NVRAM — memória não volátil), tiering automático (NVMe/SSD para dados quentes + NL-SAS — Nearline SAS — / SATA para frios) e snapshots copy-on-write (cópia de bloco antes de sobrescrita).',
      'Desempenho e Vida Útil Flash: SSDs medem resistência em DWPD (Drive Writes Per Day) ou TBW (Terabytes Written — volume total gravável garantido); recursos como TRIM/UNMAP (descarte lógico de blocos livres) notificam o storage sobre blocos liberados pelo SO para manter garbage collection (reorganização interna de blocos flash) eficiente e economizar thin provisioning (alocação física sob demanda).',
      'Exemplo operacional: em um ambiente clínico, o banco OLTP roda em Block Storage sobre SSDs NVMe de 3 DWPD com `UNMAP` habilitado mantendo latência abaixo de 1 ms; os exames recentes ficam em File Storage (SMB/NFS) com tiering entre SSD SAS e NL-SAS; e o histórico frio de laudos é enviado via API HTTP/REST para Object Storage S3. Em auditoria de disco Linux, `smartctl -a /dev/nvme0n1` confirma desgaste (`Percentage Used: 12%`) sem erros críticos.'
    ],
    technicalReference: [
      'Filas: SATA/AHCI (1 fila, 32 cmds, half-duplex) | SAS (1 fila, 256 cmds, full-duplex, dual-port) | NVMe (64K filas × 64K cmds, PCIe)',
      'Abstração: Block (SAN: LUN/iSCSI/FC) | File (NAS: NFS/SMB) | Object (REST/HTTP S3).'
    ],
    examTraps: [
      'SATA é half-duplex e single-port; apenas SAS (e FC/NVMe-oF) suporta nativamente acesso dual-port por duas controladoras de storage simultaneamente.',
      'Object Storage NÃO pode ser montado nativamente como sistema de arquivos POSIX de baixa latência para rodar um banco relacional OLTP diretamente.',
      'Sem TRIM/UNMAP em volumes thin-provisioned, arquivos deletados no SO convidado não liberam espaço físico de volta ao pool do storage.'
    ],
    keyTerms: [
      'DWPD / TBW: métricas de durabilidade de escrita em SSDs (escritas completas diárias durante a garantia ou terabytes totais gravados)',
      'Dual-Port (SAS/NVMe): duas vias físicas independentes no drive permitindo conexão simultânea a duas controladoras redundantes',
      'NVRAM / Cache Espelhado: memória não volátil sincronizada entre controladoras para garantir gravações em Write-Back sem perda',
      'TRIM / UNMAP: comandos do SO/hipervisor que informam blocos apagados ao array para otimizar garbage collection e liberar espaço Thin',
      'Tiering Automático: migração automática de blocos quentes para mídia flash e de dados pouco acessados para discos mecânicos'
    ]
  },
  '5.1.3': {
    itemId: '5.1.3',
    highYieldSummary: [
      'Definição e escopo: RAID (Redundant Array of Independent Disks) é uma técnica de agregação de múltiplos discos físicos em uma unidade lógica única implementada em controladoras de hardware, storages corporativos ou software (ex.: mdadm/ZFS). Resolve falhas de discos individuais sem indisponibilidade imediata e amplia o desempenho de E/S conforme o equilíbrio desejado entre capacidade útil, tolerância a falhas e penalidade de escrita.',
      'RAID 0 (Striping — distribuição intercalada de blocos): distribui blocos entre >= 2 discos somando 100% da capacidade e máximo desempenho, mas ZERO redundância — se 1 disco falhar, perde-se todo o volume.',
      'RAID 1 (Mirroring — espelhamento integral): espelha dados idênticos em pares (>= 2 discos), entregando 50% de capacidade útil, excelente leitura e tolerância a 1 falha por par (write penalty — penalidade de operações físicas por escrita lógica — igual a 2).',
      'RAID 5 (Striping + Paridade Simples Distribuída): exige >= 3 discos, capacidade útil (N-1), tolera 1 disco falho e sofre write penalty = 4 (lê dado + lê paridade -> calcula -> grava dado + grava paridade); reconstrução longa em discos grandes traz risco de URE (Unrecoverable Read Error — erro físico de leitura irrecuperável).',
      'RAID 6 (Striping + Dupla Paridade P+Q): exige >= 4 discos, capacidade útil (N-2), tolera até 2 discos falhos simultaneamente (ideal para discos SATA/NL-SAS de alta capacidade), mas possui a maior penalidade de escrita (write penalty = 6).',
      'RAID 10 / 1+0 (Espelhamento seguido de Striping): exige >= 4 discos (par), entrega 50% da capacidade útil, zero cálculo de paridade (write penalty = 2), melhor IOPS de escrita aleatória (bancos OLTP — Online Transaction Processing) e tolera 1 falha em cada par espelhado.',
      'Exemplo operacional: para o banco transacional hospitalar usando 8 SSDs SAS de 1,92 TB, adota-se RAID 10 (4 pares espelhados em striping), obtendo ~7,68 TB úteis (50%) e `write penalty = 2` com alta taxa de escrita aleatória. Já para o repositório de arquivamento com 12 discos NL-SAS de 12 TB, configura-se RAID 6 (`(12 - 2) × 12 TB = 120 TB` úteis), suportando falha de até 2 discos mesmo durante rebuild demorado.'
    ],
    technicalReference: [
      'Resumo: RAID 0 (min 2, 100%, 0 falhas) | RAID 1 (min 2, 50%, 1 falha) | RAID 5 (min 3, N-1, 1 falha, WP=4) | RAID 6 (min 4, N-2, 2 falhas, WP=6) | RAID 10 (min 4, 50%, 1/par, WP=2)',
      'RAID 50 / 60: combina múltiplos arrays RAID 5 ou RAID 6 em striping para ganhar performance e limitar domínio de rebuild.'
    ],
    examTraps: [
      'RAID NÃO substitui backup — exclusão acidental ou ransomware propaga-se instantaneamente para todos os espelhos e blocos de paridade.',
      'RAID 10 tolera múltiplos discos falhos DESDE QUE estejam em pares espelhados diferentes (se os 2 discos do mesmo par caírem juntos, o array todo falha).',
      'RAID 6 tem write penalty 6 (pior para escrita aleatória intensa que RAID 10 com write penalty 2).'
    ],
    keyTerms: [
      'Write Penalty: fator de operações físicas exigidas por cada gravação lógica (RAID 0=1, RAID 1/10=2, RAID 5=4, RAID 6=6)',
      'Paridade P+Q: dois conjuntos independentes de paridade distribuídos no RAID 6 que permitem suportar até 2 falhas simultâneas',
      'URE (Unrecoverable Read Error): erro físico irrecuperável de leitura em setor capaz de abortar a reconstrução de um RAID 5 degradado',
      'Capacidade Útil: espaço líquido utilizável após descontar espelhos ou paridades (50% no RAID 1/10; N-1 no RAID 5; N-2 no RAID 6)',
      'RAID 50 / 60: combinação em striping (RAID 0) de múltiplos grupos RAID 5 ou RAID 6 para ampliar desempenho e reduzir domínio de falha'
    ]
  },
  '5.1.4': {
    itemId: '5.1.4',
    highYieldSummary: [
      'Definição e escopo: NAS (Network Attached Storage) e SAN (Storage Area Network) são arquiteturas de armazenamento compartilhado em rede que desacoplam os discos dos servidores de aplicação. O NAS atua na camada de arquivo sobre redes Ethernet IP, enquanto a SAN atua na camada de bloco sobre fabric Fibre Channel ou IP dedicado, viabilizando clusters de alta disponibilidade e migração ao vivo de VMs.',
      'NAS (Network Attached Storage): dispositivo conectado à rede Ethernet IP padrão que gerencia seu próprio sistema de arquivos e exporta compartilhamentos em nível de ARQUIVO (File-Level) usando NFS (Network File System — Linux/Unix/ESXi) ou SMB/CIFS (Server Message Block / Common Internet File System — Windows).',
      'SAN (Storage Area Network): rede dedicada de alta velocidade que expõe volumes em nível de BLOCO (Block-Level / LUNs — Logical Unit Numbers) via Fibre Channel (FC — fabric óptico SAN) ou IP (iSCSI — Internet SCSI / FCoE — FC over Ethernet / NVMe-oF — NVMe over Fabrics); cada servidor enxerga a LUN como disco local bruto.',
      'Fibre Channel (FC): fabric (malha comutada dedicada) com switches FC, placas HBA (Host Bus Adapter — identificadas por WWNN/WWPN — World Wide Node/Port Name de 64 bits), Zoning (segmentação lógica no switch FC) e LUN Masking (permissão de acesso no storage); oferece baixíssima latência sem perdas (lossless via buffer-to-buffer credits — controle de fluxo por créditos).',
      'iSCSI (Internet SCSI): encapsula comandos SCSI sobre redes Ethernet TCP/IP padrão (porta TCP 3260) identificando pontas por IQN (iSCSI Qualified Name); custo menor que FC exigindo isolamento em VLAN (rede local virtual) dedicada, Jumbo Frames (MTU 9000 — Maximum Transmission Unit ampliada) e multipath (múltiplos caminhos redundantes).',
      'Concorrência de Acesso em Bloco: múltiplos servidores NUNCA podem montar simultaneamente a mesma LUN em NTFS/ext4 comum sem corromper metadados — acesso compartilhado em SAN exige Cluster File System (sistema de arquivos com bloqueio distribuído, ex.: VMFS no ESXi, CSV — Cluster Shared Volumes — no Hyper-V ou GFS2 — Global File System 2 — no Linux).',
      'Exemplo operacional: em um datacenter hospitalar, os hosts ESXi acessam datastores **VMFS** via **SAN Fibre Channel** redundante (duas HBAs e dois switches FC separados) para rodar VMs críticas com baixa latência. Simultaneamente, um equipamento **NAS** publica compartilhamentos **SMB 3.x** (`\\nas-hosp\laudos`) com ACLs do Active Directory para estações clínicas e **NFSv4** para repositórios de logs Linux.'
    ],
    technicalReference: [
      'NAS (Arquivos): NFS v3/v4 (TCP/UDP 2049) | SMB 3.x (TCP 445) — controle de acesso por NTFS/POSIX ACLs e exports',
      'SAN (Blocos): Fibre Channel (WWN, Zoning, Masking) | iSCSI (TCP 3260, IQN, CHAP) | Cluster FS: VMFS / CSV.'
    ],
    examTraps: [
      'NAS opera em nível de ARQUIVO (filesystem reside no storage); SAN opera em nível de BLOCO (filesystem reside no servidor/hipervisor).',
      'Montar uma LUN NTFS ou ext4 comum simultaneamente em dois servidores sem Clustered File System (CSV/VMFS) corrompe imediatamente o disco.',
      'iSCSI usa TCP/IP (TCP 3260), enquanto Fibre Channel puro usa fabric óptico próprio não-IP (identificado por WWPN).'
    ],
    keyTerms: [
      'Block-Level vs File-Level: SAN entrega volumes brutos em bloco (filesystem no servidor); NAS entrega arquivos/pastas (filesystem no NAS)',
      'WWPN / WWNN: identificadores únicos de 64 bits em hexadecimal das portas e nós em um fabric Fibre Channel',
      'BB_Credits (Buffer-to-Buffer Credits): controle de fluxo L2 no Fibre Channel que evita descarte de quadros (rede lossless)',
      'Cluster File System (VMFS / CSV): sistema de arquivos com travamento distribuído permitindo acesso simultâneo seguro à mesma LUN',
      'Jumbo Frames (MTU 9000): quadros Ethernet maiores usados em iSCSI/NFS dedicados para diminuir fragmentação e uso de CPU'
    ]
  },
  '5.1.5': {
    itemId: '5.1.5',
    highYieldSummary: [
      'Definição e escopo: computação em nuvem é o modelo definido pelo NIST SP 800-145 para provisão ubíqua, conveniente e sob demanda de um pool compartilhado de recursos computacionais configuráveis (rede, servidores, armazenamento, aplicações e serviços). Estrutura-se em modelos de serviço (IaaS, PaaS, SaaS) e implantação (Pública, Privada, Híbrida e Comunitária), substituindo dimensionamento rígido por consumo elástico e medido.',
      'Modelos de Serviço (NIST SP 800-145): IaaS (Infraestrutura: cliente gerencia SO, patches, middleware — camada intermediária de execução — e apps, ex.: VMs EC2/Azure VM), PaaS (Plataforma: provedor gerencia hardware e SO/runtime; cliente cuida de apps e dados) e SaaS (Software: usuário final consome aplicação pronta via web/API).',
      'Responsabilidade Compartilhada: provedor sempre responde pela segurança "DA" nuvem (física, hardware, hipervisor); cliente sempre responde pela segurança "NA" nuvem (dados, classificação, identidade/IAM — Identity and Access Management — e acessos, variando SO/rede em IaaS vs app em PaaS).',
      'Modelos de Implantação: Nuvem Pública (infraestrutura multi-tenant — compartilhada logicamente entre vários clientes — de provedor externo), Nuvem Privada (exclusiva de uma organização, on-premises — infraestrutura local — ou hospedada), Nuvem Híbrida (integração orquestrada entre privada e pública mantendo portabilidade de dados/cargas) e Comunitária.',
      'Elasticidade vs Escalabilidade: Escalabilidade é a capacidade planejada de crescer verticalmente (scale-up: mais CPU/RAM no nó) ou horizontalmente (scale-out: mais nós); Elasticidade é o provisionamento e DESPROVISIONAMENTO automático e rápido conforme variação dinâmica de demanda.',
      'Características Essenciais NIST: Autoatendimento sob demanda, Amplo acesso à rede, Pool de recursos (multi-tenancy), Elasticidade rápida e Serviço medido (pay-as-you-go — cobrança conforme uso efetivo).',
      'Exemplo operacional: um sistema de agendamento médico opera em **nuvem híbrida**: o banco de prontuários permanece na nuvem privada on-premises interligada via link dedicado/VPN ao front-end web em **IaaS/PaaS** na nuvem pública. Durante campanhas sazonais, políticas de auto-scaling aplicam **elasticidade horizontal** subindo de 2 para 8 instâncias quando a CPU média passa de 70% e removendo os nós excedentes na madrugada.'
    ],
    technicalReference: [
      'Controle do cliente (crescente): SaaS (dados/usuários) < PaaS (+ código/app) < IaaS (+ SO/patches/firewall/rede) < On-Premises (tudo)',
      'Escala: Vertical (Scale-Up/Down) vs Horizontal (Scale-Out/In) | Elasticidade = ajuste automático bidirecional sob demanda.'
    ],
    examTraps: [
      'Em IaaS, atualizar/aplicar patches no sistema operacional convidado e configurar grupos de segurança é responsabilidade do CLIENTE, não do provedor.',
      'Elasticidade inclui tanto expandir quanto ENCOLHER (liberar recursos ociosos) automaticamente com a queda de carga.',
      'Nuvem Híbrida não é apenas "ter duas contas em nuvens diferentes" (isso é Multi-Cloud); exige interconexão e integração operacional entre privada e pública.'
    ],
    keyTerms: [
      'Multi-Tenancy: compartilhamento seguro de infraestrutura física entre múltiplos clientes isolados logicamente',
      'Responsabilidade Compartilhada: matriz que separa obrigações de segurança do provedor (DA nuvem) e do cliente (NA nuvem)',
      'Scale-Up vs Scale-Out: crescimento vertical (mais recursos em um nó) versus crescimento horizontal (adição de múltiplos nós)',
      'Multi-Cloud vs Nuvem Híbrida: uso paralelo de vários provedores públicos versus integração operacional entre nuvem privada e pública',
      'Auto-Scaling: orquestração automática que cria ou remove instâncias de computação conforme limiares de carga'
    ]
  },
  '5.2.1': {
    itemId: '5.2.1',
    highYieldSummary: [
      'Definição e escopo: plataformas corporativas de virtualização (como **VMware vSphere/ESXi/vCenter** e equivalentes como **Microsoft Hyper-V** e **KVM**) compõem o plano de execução e o plano de controle para gerenciar clusters de servidores, redes virtuais, armazenamento e políticas operacionais. Resolvem a administração isolada por host físico ao unificar provisionamento, balanceamento de carga, templates e controle de acesso.',
      'VMware ESXi: hipervisor bare-metal (instalado direto no hardware) Tipo 1 (baseado no VMkernel) que executa VMs (.vmx configuração + .vmdk disco virtual) e interfaces virtuais (vSwitch Standard e Distributed Switch — switches virtuais locais vs centralizados no cluster — além de vmkernel ports para gestão, vMotion e iSCSI).',
      'vCenter Server (VCSA — vCenter Server Appliance): appliance centralizado de gerenciamento (control plane — camada de gerência separada da execução das VMs) que administra múltiplos clusters ESXi habilitando vMotion, DRS (Distributed Resource Scheduler), HA (High Availability), vDS (Distributed Switch), templates e RBAC (Role-Based Access Control — controle de acesso por papel).',
      'vSphere DRS (Distributed Resource Scheduler): monitora continuamente consumo de CPU/RAM do cluster e migra VMs automaticamente via vMotion para balancear carga ou respeitar regras de afinidade (manter juntas) / antiafinidade (manter separadas em hosts distintos).',
      'Equivalentes Corporativos: Microsoft Hyper-V (gerenciado via Failover Cluster Manager / SCVMM — System Center Virtual Machine Manager, discos VHDX) e KVM/QEMU (nativo no kernel Linux com libvirt — API de gerência / Proxmox / oVirt / OpenStack, discos qcow2/raw).',
      'VMware Tools / Guest Additions (equivalente Integration Services no Hyper-V / qemu-guest-agent no KVM / Guest Additions no VirtualBox): pacote de drivers paravirtualizados (vmxnet3 — NIC virtual de alta vazão; PVSCSI — controladora SCSI otimizada) e agente instalado no SO convidado para permitir shutdown gracioso, sincronismo de hora, quiescing VSS (Volume Shadow Copy Service — pausa consistente de I/O antes de snapshots) e Ballooning.',
      'Exemplo operacional: em um cluster vSphere com 4 hosts ESXi gerenciados pelo VCSA, configura-se regra DRS de **antiafinidade (Separate Virtual Machines)** entre `DC01` e `DC02` garantindo separação física contínua. Ao implantar novas VMs Linux de aplicação hospitalar via template, selecionam-se adaptador **VMXNET3**, controladora **PVSCSI** e `open-vm-tools` ativo para suportar desligamento ordenado e telemetria de IP no inventário.'
    ],
    technicalReference: [
      'Arquivos de VM (ESXi): .vmx (config) | .vmdk (descritor) + -flat.vmdk (dados) | .nvram (BIOS/UEFI) | .vswp (swap da VM) | vmware.log',
      'Drivers paravirtualizados recomendados: NIC = VMXNET3 | Controladora SCSI = PVSCSI (Linux/Windows alta performance).'
    ],
    examTraps: [
      'Se o vCenter Server ficar offline, as VMs continuam rodando nos hosts ESXi e o vSphere HA continua protegendo o cluster, mas operações centralizadas (DRS, vDS config, clone/deploy via vCenter) ficam indisponíveis.',
      'O ESXi NÃO usa kernel Linux (o VMkernel é proprietário POSIX-like); quem é módulo nativo do kernel Linux é o KVM.',
      'Usar adaptador de rede emulado (E1000) em vez de paravirtualizado (VMXNET3) limita throughput e consome mais CPU do host.'
    ],
    keyTerms: [
      'VCSA (vCenter Server Appliance): servidor central de controle que habilita DRS, HA, vDS, templates e permissões RBAC no cluster',
      'vSwitch vs vDS: switch virtual gerenciado individualmente por host versus switch distribuído gerenciado centralmente no vCenter',
      'VMkernel Port (vmk): interface TCP/IP própria do hipervisor para serviços de infraestrutura (Gerência, vMotion, iSCSI, NFS)',
      'Antiafinidade DRS: regra de cluster que impede duas VMs redundantes de executarem simultaneamente no mesmo host físico',
      'PVSCSI / VMXNET3: drivers paravirtualizados VMware que minimizam sobrecarga de emulação em disco e rede'
    ]
  },
  '5.2.2': {
    itemId: '5.2.2',
    highYieldSummary: [
      'Definição e escopo: High Availability (HA — como vSphere HA, Windows Server Failover Clustering ou Proxmox HA) é um recurso de alta disponibilidade em nível de cluster que detecta quedas de hosts físicos, perda de acesso ao storage ou travamentos de SO convidado. Resolve indisponibilidades imprevistas de hardware reiniciando automaticamente as VMs afetadas em outros hosts saudáveis com capacidade reservada.',
      'Funcionamento do vSphere HA: agentes FDM (Fault Domain Manager) elegem 1 host Master e os demais Slaves no cluster; quando um host falha fisicamente, o Master reinicia as VMs afetadas nos outros hosts saudáveis (com downtime — tempo de indisponibilidade — equivalente ao boot do SO).',
      'Admission Control (Controle de Admissão): reserva capacidade de failover (por % de CPU/RAM do cluster, quantidade de hosts tolerados N+1/N+2 — perda de 1 ou 2 hosts — ou hosts dedicados) impedindo ligar novas VMs se isso violar a garantia de failover.',
      'Host Isolation e Datastore Heartbeating: quando um host perde rede de gerenciamento mas mantém acesso ao storage, o Master verifica o arquivo de heartbeat (sinal periódico de vida gravado no datastore) antes de declarar host morto — evitando falso reinício (split-brain — execução simultânea duplicada de VM).',
      'Host Isolation Response: ação configurada para um host que perdeu rede de gerência e acesso aos demais nós (Leave powered on — manter ligada; Power off — desligar imediatamente; ou Shut down — desligamento gracioso via VMware Tools, recomendado Power off/Shut down em conjunto com datastore heartbeating para evitar duplicidade).',
      'VM Monitoring & APD/PDL Protection: VM Component Protection (VMCP) reinicia VMs que perderam acesso ao storage (PDL — Permanent Device Loss, remoção permanente sinalizada; ou APD — All Paths Down, queda silenciosa de caminhos) em outro host que ainda enxergue a LUN (Logical Unit Number).',
      'Exemplo operacional: em um cluster hospitalar de 4 hosts ESXi com 256 GB cada, ativa-se vSphere HA com **Admission Control = Cluster Resource Percentage (25%)**, assegurando capacidade `N+1` mesmo sob pico de uso, além de **Datastore Heartbeating** em duas LUNs e **Host Isolation Response = Power off**. Quando a fonte do Host 02 falha totalmente, o Master constata ausência simultânea de heartbeats de rede e storage e reinicia as 10 VMs críticas nos Hosts 01, 03 e 04.'
    ],
    technicalReference: [
      'vSphere HA: reinicia VMs em falha física (com breve downtime) | vSphere FT (Fault Tolerance): espelhamento contínuo zero-downtime via vLockstep/checkpoint',
      'Admission Control: Cluster Resource Percentage (ex: 25% em 4 hosts) | Host Failures Cluster Tolerates.'
    ],
    examTraps: [
      'vSphere HA NÃO garante zero downtime: as VMs reiniciam (cold boot) no host sobrevivente — zero downtime é papel do Fault Tolerance (FT).',
      'vSphere HA funciona de forma autônoma entre os hosts ESXi mesmo se o vCenter Server estiver desligado no momento da queda.',
      'Desativar Admission Control permite superlotar o cluster de VMs, mas faz com que várias VMs não consigam ligar se um host físico falhar.'
    ],
    keyTerms: [
      'FDM (Fault Domain Manager): agente distribuído do vSphere HA que coordena eleição de Master, heartbeats e reinício de VMs',
      'Admission Control: política que bloqueia inicialização de novas VMs se a reserva de failover do cluster ficar comprometida',
      'Datastore Heartbeating: validação secundária via arquivo de batimento no storage para distinguir host isolado em rede de host inoperante',
      'VMCP (VM Component Protection): mecanismo do HA que reage a estados APD e PDL reiniciando VMs em hosts com conectividade ao storage',
      'vSphere FT (Fault Tolerance): proteção contínua zero-downtime por espelhamento síncrono entre dois hosts (distinta do reinício via HA)'
    ]
  },
  '5.2.3': {
    itemId: '5.2.3',
    highYieldSummary: [
      'Definição e escopo: vMotion (e equivalentes como Live Migration em Hyper-V/KVM) é o mecanismo de migração ao vivo que transfere uma máquina virtual em execução entre hosts físicos (**vMotion**), seus discos entre datastores (**Storage vMotion**) ou ambos simultaneamente sem interromper conexões ativas. Elimina janelas de parada planejada em manutenções de hardware/storage e viabiliza balanceamento contínuo pelo DRS.',
      'vMotion (Compute Live Migration): move uma VM ligada de um host ESXi para outro sem downtime, transferindo estado de dispositivos, páginas de RAM em iterações (pre-copy — cópia contínua enquanto a VM executa) e fazendo um breve stun (pausa de milissegundos) final para copiar dirty pages (páginas modificadas após a última passagem) residuais e atualizar switches via RARP (Reverse Address Resolution Protocol).',
      'Pré-requisitos do vMotion tradicional: armazenamento compartilhado acessível por ambos os hosts (SAN/NAS), interface VMkernel dedicada com serviço vMotion habilitado, port groups (grupos de portas/VLANs) compatíveis nos vSwitches e famílias de CPU compatíveis (ou EVC habilitado).',
      'Storage vMotion: migra os discos virtuais (.vmdk) e arquivos de uma VM ligada entre datastores distintos (ex.: de um storage antigo para um novo ou entre Thin/Thick) usando espelhamento em tempo real (mirror driver — driver que replica novas gravações para origem e destino durante a cópia).',
      'EVC (Enhanced vMotion Compatibility): mascara instruções de gerações mais novas de CPU (Intel/AMD) no nível do cluster para que hosts de gerações diferentes façam vMotion transparente sem erro de incompatibilidade de CPU.',
      'Shared-Nothing vMotion (Cross-Host Compute + Storage): permite migrar simultaneamente host E datastore (compute + storage) pela rede sem exigir armazenamento compartilhado prévio entre origem e destino.',
      'Exemplo operacional: para trocar módulos de memória no Host ESXi-03 durante o expediente clínico, coloca-se o host em **Maintenance Mode**, acionando o **vMotion** das VMs pela VLAN dedicada `vmk1` (10 GbE) para os Hosts 01 e 02. Na VM de servidor de aplicação, após a etapa `pre-copy`, o *stun* dura poucos milissegundos e o host destino envia quadro **RARP** atualizando as portas dos switches físicos sem derrubar sessões TCP dos usuários.'
    ],
    technicalReference: [
      'Fluxo vMotion: Pré-checagem -> Cópia iterativa de RAM (pre-copy) -> Rastreamento de dirty pages -> Quiesce/Stun breve -> Retomada no destino + RARP',
      'Rede recomendada: VMkernel port exclusivo (VLAN dedicada, ideal >= 10 GbE, suporte a Multi-NIC vMotion e criptografia).'
    ],
    examTraps: [
      'vMotion padrão move COMPUTE (CPU/RAM entre hosts) mantendo os arquivos no mesmo storage compartilhado; mover discos entre datastores é STORAGE vMotion.',
      'Hosts com CPUs de gerações diferentes (ou fabricantes diferentes Intel x AMD) impedem live vMotion — EVC resolve entre gerações do MESMO fabricante (não entre Intel e AMD!).',
      'vMotion usa interface VMkernel dedicada (vmk), jamais tráfego de rede das máquinas virtuais diretamente.'
    ],
    keyTerms: [
      'Pre-Copy / Dirty Pages: transferência iterativa de páginas de RAM em execução seguida da cópia final apenas das páginas alteradas',
      'Stun de vMotion: breve congelamento (milissegundos) na conclusão da migração para sincronizar memória residual e trocar o host ativo',
      'RARP (Reverse ARP): quadro emitido pelo host destino para atualizar imediatamente as tabelas MAC dos switches físicos',
      'EVC (Enhanced vMotion Compatibility): máscara em nível de cluster que uniformiza instruções expostas de CPU entre gerações do mesmo fabricante',
      'Mirror Driver (Storage vMotion): filtro de I/O que replica novas escritas para o disco destino enquanto os blocos antigos ainda estão sendo copiados'
    ]
  },
  '5.2.4': {
    itemId: '5.2.4',
    highYieldSummary: [
      'Definição e escopo: datastore é a unidade lógica de armazenamento gerenciada pelo hipervisor (VMFS sobre bloco SAN, compartilhamento NFS em rede IP ou vSAN hiperconvergente — equivalente a CSV/SMB no Hyper-V) onde são gravados arquivos de configuração, discos virtuais e snapshots das VMs. Padroniza acesso simultâneo por múltiplos hosts e define políticas de alocação espacial.',
      'Tipos de Datastore no vSphere: VMFS (Virtual Machine File System — filesystem clusterizado de alto desempenho sobre LUNs em bloco SAN/FC/iSCSI permitindo acesso simultâneo de múltiplos hosts ESXi), NFS (Network File System — montado via rede IP NAS v3/v4.1) e vSAN (HCI — Hyper-Converged Infrastructure, armazenamento distribuído em discos locais do cluster).',
      'Provisionamento de Discos Virtuais: Thin Provisioning (aloca espaço físico sob demanda conforme gravação — economiza storage mas exige monitoramento contra over-allocation — superalocação nominal), Thick Provision Lazy Zeroed (reserva todo espaço no momento da criação, zerando blocos só na primeira escrita) e Thick Provision Eager Zeroed (reserva e zera tudo na criação).',
      'Caso de Uso de Thick Eager Zeroed: obrigatório para recursos que exigem gravação imediata sem atraso de zeramento ou clustering compartilhado (ex.: discos compartilhados em clusters como Microsoft WSFC — Windows Server Failover Clustering — com SCSI Bus Sharing ou Oracle RAC com multi-writer, além de Fault Tolerance legado).',
      'Datastore Cluster e Storage DRS: agrupa múltiplos datastores para balanceamento automático de ocupação e latência via Storage vMotion (migração a quente de discos virtuais entre datastores).',
      'Monitoramento e Riscos de Overcommit: usar Thin Provisioning (superprovisionamento — overcommit) sem alertas de capacidade pode esgotar 100% do datastore físico, congelando imediatamente todas as VMs que tentarem expandir discos.',
      'Exemplo operacional: na implantação do SGBD clínico em um datastore **VMFS6** sobre SAN FC, cria-se o disco virtual de 600 GB em **Thick Provision Eager Zeroed**, evitando latência de zeramento na primeira gravação e garantindo compatibilidade com clusterização. As VMs web utilizam **Thin Provisioning** em um **Datastore Cluster** com **Storage DRS** configurado com limiar de `80%` de espaço e monitoramento automático de `UNMAP` assíncrono.'
    ],
    technicalReference: [
      'Discos VMDK: Thin (cresce sob demanda) | Thick Lazy Zeroed (padrão rápido, zera ao gravar) | Thick Eager Zeroed (zera na criação — maior segurança/cluster)',
      'VMFS6: suporta UNMAP automático assíncrono para devolver blocos excluídos em volumes Thin de storages SAN.'
    ],
    examTraps: [
      'Thick Provision Lazy Zeroed ocupa TODO o espaço nominal no datastore desde o início, mesmo com a VM vazia (só o Thin economiza espaço inicial).',
      'VMFS é exclusivo para armazenamento em bloco (SAN/local); compartilhamento NAS usa NFS direto sem formatar VMFS em cima.',
      'Deixar um datastore atingir 100% de capacidade física suspende/trava imediatamente todas as VMs com discos Thin ou snapshots em crescimento.'
    ],
    keyTerms: [
      'VMFS (Virtual Machine File System): filesystem clusterizado para datastores em bloco permitindo gravação concorrente segura por vários hosts ESXi',
      'Thin Provisioning: disco virtual que ocupa apenas os blocos efetivamente gravados, exigindo controle rigoroso de over-allocation',
      'Thick Lazy vs Eager Zeroed: ambos alocam 100% do espaço na criação; o Lazy zera sob demanda na escrita e o Eager zera integralmente na criação',
      'Over-Allocation: soma dos tamanhos nominais atribuídos em Thin Provisioning superior à capacidade física real do datastore',
      'Storage DRS: automação de cluster de datastores que equilibra capacidade e latência de I/O entre repositórios via Storage vMotion'
    ]
  },
  '5.2.5': {
    itemId: '5.2.5',
    highYieldSummary: [
      'Definição e escopo: snapshot (ponto de captura instantânea no hipervisor — equivalente aos Checkpoints no Hyper-V) preserva o estado do disco virtual e, opcionalmente, da memória RAM de uma VM em um instante específico. Resolve a necessidade de retorno rápido antes de alterações arriscadas (patches ou upgrades), não devendo substituir cópias de backup independentes.',
      'Mecanismo Interno de Snapshot: ao tirar um snapshot, o disco base (.vmdk) passa a ser somente leitura e todas as novas alterações são desviadas para um arquivo delta (-delta.vmdk / -sesparse.vmdk — formato esparso eficiente de blocos); opcionalmente captura estado da memória RAM (.vmsn).',
      'Por que Snapshots NÃO são Backup: dependem do disco pai original intacto (não provêm cópia independente em outra mídia/site) e a degradação acumula a cada camada delta na cadeia.',
      'Impacto na Performance e Capacidade: cada delta pode crescer até o tamanho total do disco base (dobrando/triplicando o consumo); leituras aleatórias percorrem toda a cadeia de deltas aumentando I/O e latência no storage.',
      'Consolidação (Delete Snapshot): ao excluir um snapshot, o hipervisor mescla (commit — aplicação definitiva dos blocos alterados) o delta de volta para o disco pai; cadeias enormes ou com muito I/O podem causar breve stun (congelamento momentâneo) na VM ao finalizar a consolidação.',
      'Boas Práticas Corporativas: utilizar snapshots exclusivamente como ponto rápido de retorno antes de patches/atualizações (duração máxima recomendada de 24–72 horas) e removê-los logo após validação.',
      'Exemplo operacional: antes de atualizar o servidor de prontuário eletrônico, cria-se um snapshot sem memória e com **Quiesce** (sincronização de I/O via VMware Tools/VSS) gerando o delta `-000001-sesparse.vmdk`. Após 3 horas de validação positiva da aplicação, executa-se **Delete Snapshot** para consolidar as alterações no disco base e evitar crescimento descontrolado no datastore (se a atualização falhasse, **Revert** descartaria o delta instantaneamente).'
    ],
    technicalReference: [
      'Arquivos gerados: <vm>-000001.vmdk (descritor delta) + -sesparse.vmdk / -delta.vmdk (blocos alterados) + .vmsn (estado/memória)',
      'Limite técnico ESXi: máximo de 32 snapshots na cadeia (boa prática operacional: máximo 1–2 e retenção < 72h).'
    ],
    examTraps: [
      'Deletar um snapshot NÃO apaga os dados atuais da VM — ele CONSOLIDA (aplica) as mudanças no disco base e remove o arquivo delta (quem descarta as mudanças voltando no tempo é "Revert").',
      'Manter snapshots mensais "como backup" lota datastores e gera alto risco de corrupção caso o disco base falhe.',
      'Snapshots de memória capturam o estado volátil congelando brevemente a VM (stun) e consomem espaço extra igual ao tamanho da RAM alocada.'
    ],
    keyTerms: [
      'Delta Disk (-delta / -sesparse): arquivo filho criado no snapshot que recebe todas as novas gravações preservando o disco base imutável',
      'Consolidação (Delete Snapshot): processo de aplicar os blocos do delta ao disco pai e remover o arquivo intermediário',
      'Revert to Snapshot: operação que descarta o delta atual restaurando a VM ao estado exato capturado pelo snapshot',
      'Quiescing (VSS): pausa coordenada de escrita no SO convidado antes do snapshot para garantir consistência de arquivos e bancos',
      'Cadeia de Snapshots: empilhamento de múltiplos deltas sucessivos que amplia consumo de espaço e penaliza leituras aleatórias'
    ]
  },
  '5.2.6': {
    itemId: '5.2.6',
    highYieldSummary: [
      'Definição e escopo: iSCSI (Internet Small Computer Systems Interface — RFC 7143) é o protocolo SAN em nível de bloco que transporta comandos SCSI sobre redes Ethernet TCP/IP padrão na porta TCP 3260 entre um Initiator (cliente/hipervisor) e um Target (storage). Viabiliza armazenamento compartilhado de baixo custo para clusters e hipervisores sem exigir infraestrutura Fibre Channel dedicada.',
      'Arquitetura iSCSI: encapsula comandos e dados SCSI dentro de pacotes TCP/IP na porta padrão TCP 3260, operando entre o Initiator (servidor/VMkernel iSCSI que consome volumes) e o Target (storage/array que publica as LUNs).',
      'Nomenclatura IQN (iSCSI Qualified Name): identificador único mundial no formato iqn.aaaa-mm.dominio-reverso:identificador (ex.: iqn.1998-01.com.vmware:esxi01-abc).',
      'Descoberta de Targets: estática ou dinâmica via SendTargets (o Initiator consulta o portal IP:3260 do Target e recebe a lista de IQNs disponíveis) ou iSNS (Internet Storage Name Service — serviço centralizado de diretório de targets).',
      'Redes e Otimizações iSCSI: usar VLAN isolada sem roteamento (Layer 2 dedicado ao storage), desabilitar spanning-tree bloqueante nas portas (PortFast/Edge — transição direta para forwarding), habilitar Flow Control (controle de fluxo L2 via quadros PAUSE 802.3x) e Jumbo Frames (MTU 9000 ponta a ponta) e configurar Port Binding MPIO (Multipath I/O vinculando 1 vmkernel por NIC na mesma sub-rede L2).',
      'Segurança iSCSI: autenticação CHAP (Challenge-Handshake Authentication Protocol) unidirecional (Target valida Initiator) ou Mutual/Bidirecional CHAP (ambos se autenticam), além de isolamento estrito por ACLs (Access Control Lists) / Masking de IQN e VLAN dedicada.',
      'Exemplo operacional: em um host ESXi conectado a um storage IP na VLAN 300 com `MTU 9000` ponta a ponta, criam-se duas interfaces VMkernel (`vmk2` = `172.16.30.11` e `vmk3` = `172.16.30.12`) em vínculo **1:1 active** com duas portas físicas 10 GbE no **Port Binding** do *Software iSCSI Adapter*. Configura-se **SendTargets** para `172.16.30.50:3260` com **Mutual CHAP** e valida-se o caminho sem fragmentação via `vmkping -I vmk2 -d -s 8972 172.16.30.50`.'
    ],
    technicalReference: [
      'Porta: TCP 3260 | Formato: iqn.YYYY-MM.reverse.domain:nome | Segurança: CHAP / Mutual CHAP + VLAN isolada + IQN Masking',
      'ESXi VMkernel Port Binding: cada vmkernel iSCSI deve ter apenas 1 NIC física ativa (1:1 active, sem standby/teaming padrão) para multipath correto.'
    ],
    examTraps: [
      'No VMware ESXi usando Software iSCSI Port Binding, cada interface VMkernel (vmk) DEVE mapear para exatamente 1 uplink físico ativo (1:1) — colocar duas NICs ativas no mesmo vmk impede o multipath iSCSI.',
      'Jumbo Frames (MTU 9000) falham silenciosamente se apenas o ESXi e o storage tiverem MTU 9000 e os switches intermediários permanecerem em MTU 1500.',
      'iSCSI usa TCP 3260 (nunca UDP 3260).'
    ],
    keyTerms: [
      'Initiator vs Target: cliente iSCSI que requisita blocos (host/ESXi) versus storage/array que exporta as LUNs',
      'IQN (iSCSI Qualified Name): identificador único mundial atribuído às pontas iSCSI para descoberta e controle de acesso (Masking)',
      'SendTargets: método dinâmico em que o Initiator consulta a porta TCP 3260 do portal do storage para listar os IQNs disponíveis',
      'CHAP / Mutual CHAP: protocolo desafio-resposta (RFC 1994) para autenticação unilateral ou mútua entre Initiator e Target',
      'Port Binding (1:1) / MTU 9000: vínculo no ESXi de 1 vmkernel por NIC física na mesma VLAN L2 com Jumbo Frames ponta a ponta'
    ]
  },
  '5.2.7': {
    itemId: '5.2.7',
    highYieldSummary: [
      'Definição e escopo: LUN (Logical Unit Number) é o volume lógico endereçável em blocos criado sobre um pool/RAID de storage e apresentado via protocolo SCSI (Fibre Channel ou iSCSI) como disco bruto a servidores ou hipervisores. O provisionamento seguro exige isolamento no fabric SAN (**Zoning**), controle no array (**LUN Masking**) e dimensionamento adequado de filas por LUN.',
      'LUN (Logical Unit Number): unidade lógica endereçável em blocos criada dentro de um pool/RAID de um storage SAN e apresentada a servidores/hipervisores como disco SCSI.',
      'Zoning (no Switch Fibre Channel): particiona o fabric (malha óptica FC) definindo quais WWPNs (World Wide Port Names) de iniciadores — HBAs (Host Bus Adapters) — enxergam quais WWPNs de controladoras de storage (Targets) — recomenda-se Single-Initiator Zoning (1 HBA + 1 porta de storage por zona).',
      'LUN Masking (no Storage Array): controle aplicado no próprio storage vinculando uma LUN específica apenas aos identificadores autorizados (WWPNs no FC ou IQNs no iSCSI), impedindo que servidores não autorizados montem a LUN alheia.',
      'RDM vs VMFS (vSphere): VMFS (Virtual Machine File System) encapsula múltiplos VMDKs (discos virtuais) compartilhados na mesma LUN; RDM (Raw Device Mapping) mapeia uma LUN diretamente para dentro de uma VM específica (exigido por certos clusters físicos ou SAN-aware apps — aplicações que emitem comandos SCSI diretos ao storage).',
      'Consumo de Queue Depth por LUN: cada HBA e LUN possuem filas limitadas (Queue Depth — número máximo de comandos pendentes, ex.: 32–256 comandos); dimensionar múltiplas LUNs de tamanho equilibrado evita gargalos de fila em ambientes com dezenas de VMs intensivas.',
      'Exemplo operacional: ao disponibilizar uma LUN de 4 TB (`LUN 12`) no storage FC para o cluster de virtualização hospitalar, configuram-se zonas **Single-Initiator** nos switches das Fabrics A e B ligando o WWPN de cada HBA aos WWPNs das controladoras A/B. Em seguida, aplica-se **LUN Masking** no array expondo `LUN 12` somente aos 4 hosts ESXi do cluster, mantendo servidores físicos isolados fora do grupo de acesso.'
    ],
    technicalReference: [
      'Camadas de Controle SAN: Zoning (Switch FC por WWPN) + LUN Masking (Storage por WWPN/IQN)',
      'Identificadores: FC = WWNN / WWPN (64 bits hex) | iSCSI = IQN.'
    ],
    examTraps: [
      'Zoning é configurado no SWITCH Fibre Channel; LUN Masking é configurado no STORAGE Array — provas adoram trocar os dois.',
      'Apresentar a mesma LUN com escrita para dois servidores Windows/Linux independentes sem Cluster File System corrompe imediatamente o filesystem.',
      'Single-Initiator Zoning evita ruído RSCN (Registered State Change Notification) entre servidores distintos quando uma HBA reinicia.'
    ],
    keyTerms: [
      'Zoning (Switch FC): segmentação lógica na malha Fibre Channel que define quais WWPNs de HBA comunicam com quais portas de storage',
      'LUN Masking (Storage): restrição configurada no próprio array associando cada LUN apenas aos WWPNs ou IQNs autorizados',
      'RDM (Raw Device Mapping): mapeamento direto de uma LUN SAN para uma VM sem encapsulá-la em arquivo VMDK no datastore VMFS',
      'Single-Initiator Zoning: boa prática que limita cada zona FC a um único iniciador, evitando propagação de alertas RSCN a outros hosts',
      'Queue Depth (por LUN): limite de comandos SCSI pendentes simultâneos suportado pela fila da LUN antes de gerar enfileiramento no host'
    ]
  },
  '5.2.8': {
    itemId: '5.2.8',
    highYieldSummary: [
      'Definição e escopo: tecnologias operacionais de RAID em storages e controladoras corporativas envolvem mecanismos de recuperação automatizada (**Hot Spare**), mitigação de risco em reconstrução (**Rebuild / URE**), controle de **Write Penalty**, aceleração por **cache protegido por energia (BBWC/FBWC)** e alinhamento geométrico (**Stripe/Strip Size**). Resolvem a degradação de performance em escritas e minimizam janelas de vulnerabilidade quando discos físicos falham.',
      'Hot Spare (Global vs Dedicado): disco reserva ocioso mantido no storage que entra automaticamente para iniciar o rebuild (reconstrução dos dados do disco falho nos discos íntegros) assim que um disco ativo do array RAID falha, reduzindo a janela de vulnerabilidade (tempo em modo degradado).',
      'Rebuild e Risco de URE (Unrecoverable Read Error): durante a reconstrução de um RAID 5 com discos grandes (ex.: 8–16 TB SATA/NL-SAS), ler terabytes inteiros dos discos sobreviventes aumenta a probabilidade de um setor ilegível derrubar o rebuild inteiro.',
      'Write Penalty (Penalidade de Escrita): cada escrita aleatória de aplicativo exige operações extras no array: RAID 0 = 1, RAID 1/10 = 2, RAID 5 = 4 (Read Data + Read Parity + Write Data + Write Parity) e RAID 6 = 6 (lê dado + 2 paridades + grava dado + 2 paridades).',
      'Cache de Controladora com Bateria/Flash (BBWC/FBWC — Battery/Flash-Backed Write Cache): absorve rajadas de escrita (Write-Back Cache — confirmação imediata em memória protegida antes da gravação em disco) confirmando ao SO em nanossegundos e gravando em sequência nos discos; sem bateria saudável, o cache cai para Write-Through (gravação síncrona direta nos discos) derrubando a performance.',
      'Stripe Size / Strip Size: alinhamento entre o tamanho da faixa do RAID (stripe = faixa distribuída; strip = segmento por disco), tamanho de bloco do filesystem e tamanho de I/O da aplicação (ex.: 64 KB / 8 KB SQL) evita leitura/escrita dividida (split I/O — quebra de 1 pedido lógico em múltiplos I/Os físicos).',
      'Exemplo operacional: em um storage departamental com 10 discos SAS em RAID 10 mais 1 **Hot Spare global**, a falha de um drive dispara o *rebuild* automático imediato mantendo a operação ativa. Durante inspeção preventiva, um alerta de capacitor descarregado na **FBWC** força a controladora a alternar o cache de **Write-Back** para **Write-Through**, elevando a latência de escrita do banco de 1,5 ms para 16 ms até a troca do módulo.'
    ],
    technicalReference: [
      'Write Penalty: RAID 0=1 | RAID 1/10=2 | RAID 5=4 | RAID 6=6',
      'Modos de Cache: Write-Back (rápido, exige bateria/espelho entre controladoras) vs Write-Through (seguro sem bateria, lento).'
    ],
    examTraps: [
      'RAID 5 com discos de altíssima capacidade (multi-terabyte) sofre alto risco de falha dupla durante o longo rebuild — usar RAID 6 ou RAID 10.',
      'Se a bateria (BBU/capacitor) do cache da controladora RAID falhar, a controladora desativa Write-Back (caindo para Write-Through) e a latência de escrita dispara.',
      'Hot Spare NÃO faz parte da capacidade útil ativa enquanto nenhum disco falhou.'
    ],
    keyTerms: [
      'Hot Spare (Global vs Dedicado): disco reserva ocioso acionado automaticamente para reconstrução de qualquer pool (global) ou grupo fixo',
      'BBWC / FBWC: proteção por bateria ou supercapacitor+flash que preserva dados em cache Write-Back caso falte energia elétrica',
      'Write-Back vs Write-Through: política que confirma escrita em cache protegido (baixa latência) vs confirmação somente após gravar no disco',
      'Stripe Size / Strip Size: tamanho total da faixa distribuída no array vs segmento unitário gravado em cada disco físico',
      'Split I/O: divisão de uma única operação lógica em duas transações físicas por desalinhamento entre bloco do filesystem e strip do RAID'
    ]
  },
  '5.2.9': {
    itemId: '5.2.9',
    highYieldSummary: [
      'Definição e escopo: Multipath I/O (MPIO no Windows, `dm-multipath` no Linux e NMP/PSP no VMware ESXi) é a camada de software no host que consolida múltiplos caminhos físicos redundantes (HBAs, cabos, switches e controladoras) até uma mesma LUN em um dispositivo lógico único. Garante continuidade imediata diante de falha em qualquer elemento do caminho (failover) e balanceia tráfego entre enlaces ativos.',
      'Conceito de Multipath (MPIO / DM-Multipath): software no SO ou hipervisor (ESXi PSP/NMP — Path Selection Policy / Native Multipathing Plugin, Windows MPIO, Linux multipathd) que consolida os múltiplos caminhos físicos até uma mesma LUN em um único dispositivo lógico, provendo failover (comutação automática em falha) e balanceamento.',
      'ALUA (Asymmetric Logical Unit Access — SPC-3 — padrão SCSI Primary Commands 3): padrão pelo qual storages ativo-passivo ou ativo-ativo assimétrico informam ao host quais caminhos são Active/Optimized (controladora proprietária da LUN) e quais são Active/Non-Optimized (encaminhamento indireto via interconexão entre controladoras).',
      'Políticas de Seleção de Caminho (PSP no ESXi): MRU (Most Recently Used — padrão antigo para storages ativo-passivo), Fixed (usa caminho preferencial sempre que disponível) e Round Robin (alterna I/Os entre caminhos ativos — padrão recomendado para Active-Active e ALUA otimizados).',
      'Troubleshooting sem Multipath: se o MPIO não estiver ativo/instalado, o Linux/Windows enxerga a mesma LUN repetida como /dev/sdb, /dev/sdc, /dev/sdd...; tentar formatar/montar uma delas sem multipath causa falha ou corrupção.',
      'Boas práticas de Topologia: usar no mínimo 2 caminhos físicos totalmente segregados (HBA1 -> Switch SAN A -> Controladora A/B; HBA2 -> Switch SAN B -> Controladora A/B) para eliminar SPOF (Single Point of Failure — ponto único de falha).',
      'Exemplo operacional: em um servidor Linux conectado a um storage **ALUA** por duas HBAs e duas fabrics SAN distintas, `multipath -ll` exibe o dispositivo `/dev/mapper/mpatha` agregando quatro caminhos (`/dev/sdb` a `/dev/sde` com mesmo WWID): dois `active ready running` de prioridade alta (`Active/Optimized`) na Controladora A e dois secundários (`Active/Non-Optimized`) na B. No ESXi, define-se a política `Round Robin` com `iops=1` distribuindo I/O apenas pelos caminhos otimizados.'
    ],
    technicalReference: [
      'Políticas ESXi (PSP): MRU (Active-Passive) | Fixed (Active-Active preferencial) | Round Robin (IOPS=1 recomendado para balanceamento)',
      'Linux CLI: multipath -ll (inspecionar caminhos/estados) | Windows: mpclaim -s -d.'
    ],
    examTraps: [
      'Em storages ALUA (Active-Passive assimétrico), configurar política Fixed apontando para a controladora não-proprietária causa "path thrashing" (troca constante de dono da LUN entre controladoras) degradando severamente o I/O.',
      'Round Robin no ESXi com parâmetro padrão IOPS=1000 alterna caminho só a cada 1000 I/Os; ajustar para IOPS=1 aproveita melhor múltiplos links paralelos.',
      'Ver o mesmo disco repetido no SO (/dev/sdb e /dev/sdc com mesmo WWID) significa falta de configuração de Multipath.'
    ],
    keyTerms: [
      'MPIO / NMP: camada de gerenciamento de caminhos no Windows/Linux ou Native Multipathing Plugin do ESXi que unifica caminhos à mesma LUN',
      'ALUA (Asymmetric Logical Unit Access): extensão SCSI-3 em que o array sinaliza caminhos diretos otimizados vs indiretos não-otimizados',
      'Path Thrashing: oscilação contínua de propriedade de LUN entre controladoras provocada por política de caminho fixa conflitante',
      'PSP (MRU / Fixed / Round Robin): política do ESXi para seleção de caminho ativo (mais recente, preferencial fixo ou rodízio)',
      'WWID (World Wide Identifier): identificador global único da LUN usado pelo daemon multipath para agrupar caminhos duplicados'
    ]
  },
  '5.2.10': {
    itemId: '5.2.10',
    highYieldSummary: [
      'Definição e escopo: IOPS (Input/Output Operations Per Second) e as métricas correlatas de **Throughput** (vazão), **Block Size** (tamanho de bloco), **Read/Write Ratio** (proporção leitura/escrita) e **Queue Depth** (profundidade de fila) formam a base quantitativa para dimensionamento e análise de capacidade em sistemas de armazenamento corporativos, evitando subdimensionamento sob carga aleatória ou sequencial.',
      'IOPS vs Throughput: IOPS (Input/Output Operations Per Second) mede quantidade de operações por segundo (crítico para cargas aleatórias pequenas como OLTP — Online Transaction Processing — 4K–16K); Throughput (MB/s ou GB/s) mede taxa de transferência (crítico para cargas sequenciais grandes como backup/streaming).',
      'Fórmula Fundamental: Throughput = IOPS × Tamanho do Bloco (Block Size). Logo, 10.000 IOPS em blocos de 8 KB equivalem a ~80 MB/s, enquanto em blocos de 64 KB equivalem a ~640 MB/s.',
      'Read/Write Ratio e Cálculo de IOPS Backend: para dimensionar discos físicos, aplicar a penalidade de escrita do RAID: IOPS_backend = IOPS_read + (IOPS_write × Write_Penalty). Ex.: 1.000 IOPS com 50% escrita em RAID 5 = 500 + (500 × 4) = 2.500 IOPS nos discos.',
      'Queue Depth (Profundidade de Fila): número de comandos I/O pendentes simultâneos aguardando atendimento pela LUN/controladora; se Queue Depth satura, novos pedidos ficam na fila do SO aumentando latência.',
      'Latência x IOPS (Lei de Little — teorema que relaciona concorrência média, taxa e tempo de atendimento): Concorrência (Queue Depth) ≈ IOPS × Latência média. Reduzir latência permite atingir muito mais IOPS com a mesma fila.',
      'Exemplo operacional: um sistema de prontuário demanda **4.000 IOPS** em blocos de **8 KB** com **70% leitura / 30% escrita** em **RAID 10** (`WP = 2`). A vazão é `4.000 × 8 KB = 32 MB/s`, mas o **IOPS backend** nos discos é `2.800 + (1.200 × 2) = 5.200 IOPS`. Pela Lei de Little com latência média de `2 ms` (`0,002 s`), a fila concorrente média será `5.200 × 0,002 ≈ 10,4` comandos simultâneos, atendida sem saturação pelo pool SSD.'
    ],
    technicalReference: [
      'Fórmulas: Throughput = IOPS × BlockSize | IOPS_disco = Read_IOPS + (Write_IOPS × Write_Penalty)',
      'Lei de Little aplicada: IOPS_máximo ≈ Queue_Depth / Latência_segundos (ex.: QD=32 com 1 ms = 32.000 IOPS teóricos).'
    ],
    examTraps: [
      'Dimensionar storage pela soma simples de IOPS de aplicação sem multiplicar as escritas pela Write Penalty do RAID subestima severamente os discos necessários.',
      'Um link de 10 Gbps (~1.250 MB/s) pode estar com apenas 10% de banda usada e ainda assim o banco de dados ficar lento por esgotamento de IOPS ou latência alta em blocos de 8 KB.',
      'Queue Depth excessivamente alta além da capacidade dos discos não cria desempenho extra — apenas transforma fila em latência altíssima.'
    ],
    keyTerms: [
      'IOPS vs Throughput: contagem de operações por segundo (cargas aleatórias pequenas) versus taxa de dados em MB/s (cargas sequenciais)',
      'Block Size: tamanho unitário de cada leitura/escrita emitida pela aplicação ou filesystem (ex.: 4 KB, 8 KB, 64 KB)',
      'IOPS Backend: demanda real nos discos físicos calculada por Read_IOPS + (Write_IOPS × Write_Penalty)',
      'Queue Depth: quantidade máxima de requisições de I/O pendentes simultaneamente em fila na HBA, porta ou LUN',
      'Lei de Little: equação de filas (Concorrência = IOPS × Latência em segundos) que explica o teto de IOPS sob latência dada'
    ]
  },
  '5.2.11': {
    itemId: '5.2.11',
    highYieldSummary: [
      'Definição e escopo: latência de armazenamento é o tempo decorrido entre a submissão de uma requisição de I/O pelo sistema convidado ou aplicação e a conclusão confirmada pelo storage. Em ambientes virtualizados (como VMware ESXi via `esxtop`), sua decomposição em filas internas do hipervisor (**KAVG**) e tempo externo de rede/storage (**DAVG**) permite isolar rapidamente onde reside o gargalo.',
      'Conceito de Latência de Armazenamento: tempo decorrido desde a emissão do pedido de leitura/escrita até sua conclusão (medida em milissegundos no SSD/SAN — Storage Area Network — ou microssegundos em NVMe local); é o principal indicador real percebido pela aplicação.',
      'Decomposição de Latência no esxtop (GAVG = KAVG + DAVG): DAVG (Device Average Latency) mede o tempo gasto fora do hipervisor (HBA + fabric + storage array); KAVG (Kernel Average Latency) mede o tempo em fila dentro do VMkernel.',
      'Diagnóstico preciso por DAVG vs KAVG: DAVG alto (> 15–20 ms) com KAVG próximo de zero aponta gargalo no STORAGE físico, fabric SAN ou rede iSCSI; KAVG alto (> 2 ms) indica fila presa no hipervisor (Queue Depth — profundidade de fila — insuficiente / congestionamento de fila no host).',
      'Impacto na Aplicação (GAVG × QAVG): **GAVG** (*Guest Average Latency* = `KAVG + DAVG`) representa a latência total vista pelo sistema operacional convidado da VM, enquanto **QAVG** (*Queue Average Latency*) mede especificamente o tempo médio em espera na fila SCSI do VMkernel (componente de `KAVG`); bancos transacionais exigem tipicamente GAVG < 5 ms (ideal < 1–2 ms em All-Flash).',
      'Causas comuns de pico de latência: rebuild de RAID em andamento, snapshot enorme consolidando, noisy neighbor ("vizinho barulhento" — outra VM saturando o mesmo datastore), cabos/SFPs (transceptores ópticos) com erros CRC (Cyclic Redundancy Check — erros físicos de quadro) e cache Write-Back desligado por falha de bateria.',
      'Exemplo operacional: um servidor de prontuário apresenta travamentos mesmo consumindo apenas `40 MB/s` no link 10 GbE. No `esxtop` (tecla `u`), o administrador lê `GAVG/cmd = 26,5 ms`, `KAVG/cmd = 0,3 ms` e `DAVG/cmd = 26,2 ms`. Como a demora concentra-se no **DAVG**, investiga-se o storage array, identificando um rebuild de RAID e contenção por VM vizinha, mitigada ativando **SIOC** (*Storage I/O Control*) no datastore.'
    ],
    technicalReference: [
      'Fórmula VMware esxtop: GAVG (latência total para a VM) = KAVG (fila no VMkernel) + DAVG (hardware/fabric/storage)',
      'Limiares práticos All-Flash/SSD: GAVG ideal < 1–3 ms | Alerta > 10 ms | Crítico > 20 ms | KAVG ideal < 1 ms.'
    ],
    examTraps: [
      'DAVG alto significa problema externo ao kernel ESXi (storage/rede/HBA); KAVG alto significa enfileiramento interno no VMkernel (ajuste de Queue Depth / SIOC).',
      'Bandwidth (MB/s) baixa NÃO garante saúde: uma aplicação pode ter poucos MB/s exatamente porque está travada esperando latência de 50 ms em cada I/O síncrono.',
      'GAVG é a soma KAVG + DAVG (não a diferença).'
    ],
    keyTerms: [
      'DAVG/cmd (Device Average Latency): latência média externa ao kernel do hipervisor (HBA, switch SAN/rede IP e storage array)',
      'KAVG/cmd (Kernel Average Latency): tempo médio gasto pelo comando de I/O dentro das camadas de fila do VMkernel',
      'GAVG/cmd (Guest Average Latency): latência total percebida pelo sistema convidado da VM, equivalente à soma KAVG + DAVG',
      'QAVG/cmd (Queue Average Latency): parcela do KAVG referente exclusivamente ao tempo de espera do comando na fila do VMkernel',
      'SIOC (Storage I/O Control): controle de QoS de armazenamento do vSphere que limita VMs "noisy neighbor" quando a latência do datastore sobe'
    ]
  },
  '5.2.12': {
    itemId: '5.2.12',
    highYieldSummary: [
      'Definição e escopo: troubleshooting em infraestrutura virtualizada e storage consiste na correlação estruturada entre métricas em tempo real (`esxtop`), logs do hipervisor (`/var/log/vmkernel.log`) e diagnósticos de conectividade/caminho (`vmkping`, `esxcli`). Permite distinguir rapidamente gargalos de CPU/RAM, saturação de rede, timeouts SCSI e indisponibilidade silenciosa (**APD**) ou definitiva (**PDL**) de LUNs.',
      'Ferramenta esxtop (VMware ESXi): inspeção em tempo real via SSH: teclas c (CPU — %RDY / %CSTP — tempo em espera de CPU / dessincronização de vCPUs), m (Memória — MCTLSZ balloon / SWCUR swap), n (Rede — %DRPTX/RX — descarte de pacotes na transmissão/recepção) e d/u/v (Disco/Storage — CMDS/s — comandos por segundo, DAVG, KAVG, GAVG, ABRTS/s — comandos abortados por segundo).',
      'Métricas críticas de CPU e RAM no esxtop: %RDY > 5–10% indica contenção de CPU física (ou excesso de vCPUs com %CSTP alto); MCTLSZ > 0 indica ballooning ativo (reclamação cooperativa de memória); SWCUR > 0 indica swap no disco pelo hipervisor (degradação extrema).',
      'Estados APD vs PDL (Storage Loss): PDL (Permanent Device Loss) ocorre quando o storage informa via código SCSI que a LUN foi removida permanentemente (HA/VMCP pode agir rápido); APD (All Paths Down) ocorre quando a LUN desaparece sem aviso (cabo/switch/storage travado — timeout mais cauteloso).',
      'Logs essenciais no ESXi: /var/log/vmkernel.log (eventos SCSI, APD/PDL, erros de hardware/rede, NMP — Native Multipathing Plugin — multipath), /var/log/hostd.log (gerência local do host) e /var/log/vpxa.log (comunicação com vCenter), além do vmware.log dentro da pasta da VM.',
      'Troubleshooting de Rede/iSCSI/FC: checar erros de SFP/CRC nos switches, MTU (Maximum Transmission Unit) 9000 end-to-end (vmkping -d -s 8972 <IP_Target>), status de paths (esxcli storage core path list) e filas de comandos abortados (ABRTS/s > 0 no esxtop).',
      'Exemplo operacional: após lentidão súbita em VMs conectadas via iSCSI, verifica-se `/var/log/vmkernel.log` encontrando alertas de estado `APD` intermitente e `ABRTS/s = 4` na tela `u` do `esxtop`. Ao executar `esxcli storage core path list` e testar Jumbo Frames com `vmkping -I vmk1 -d -s 8972 172.16.30.50`, os pings grandes retornam falha por fragmentação (`Message too long`), revelando porta recém-trocada no switch com MTU padrão `1500` em vez de `9000`.'
    ],
    technicalReference: [
      'esxtop: c=CPU (%RDY, %CSTP) | m=Memória (MCTLSZ, SWCUR) | d/u/v=Storage (DAVG, KAVG, ABRTS/s) | n=Rede (%DRPRX/TX)',
      'CLI ESXi: vmkping -I vmk1 -d -s 8972 <IP> | tail -f /var/log/vmkernel.log | esxcli storage core path list.'
    ],
    examTraps: [
      'No vmkping para testar Jumbo Frames MTU 9000, o payload ICMP é 8972 bytes (8972 + 20 IP + 8 ICMP = 9000) com flag -d (Don\'t Fragment) — testar -s 9000 excede 9000 bytes e falha mesmo com rede correta!',
      'ABRTS/s > 0 no esxtop indica que a VM está abortando comandos SCSI porque o storage demorou demais a responder (reset de SCSI).',
      'Diferença PDL vs APD: PDL é perda definitiva sinalizada pelo storage; APD é indisponibilidade silenciosa de todos os caminhos.'
    ],
    keyTerms: [
      '%CSTP (Co-Stop): tempo em que vCPUs aguardam sincronismo em VMs multi-vCPU superdimensionadas, indicando excesso de vCPUs alocadas',
      'MCTLSZ / SWCUR: contadores do esxtop indicando memória atualmente reclamada por ballooning (MCTLSZ) ou paginada em swap (SWCUR)',
      'ABRTS/s (Aborts per Second): taxa de comandos SCSI abortados pelo hipervisor por timeout na resposta do subsistema de storage',
      'APD vs PDL: queda silenciosa de todos os caminhos sem resposta do array (APD) versus remoção permanente anunciada pelo storage (PDL)',
      'vmkping -d -s 8972: comando de teste ICMP por interface VMkernel sem fragmentação (-d) validando MTU 9000 ponta a ponta'
    ]
  }
};
