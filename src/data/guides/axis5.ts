import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_5: Record<string, StudyGuide> = {
  '5.1.1': {
    itemId: '5.1.1',
    highYieldSummary: [
      'Hipervisor Tipo 1 (Bare-Metal): instala-se diretamente sobre o hardware físico sem sistema operacional hospedeiro intermediário, entregando máximo desempenho e isolamento (ex.: VMware ESXi, Microsoft Hyper-V bare-metal, KVM em servidores dedicados, Xen).',
      'Hipervisor Tipo 2 (Hosted): executa como aplicação sobre um SO hospedeiro convencional (Windows/Linux/macOS), introduzindo sobrecarga adicional de E/S — indicado para laboratórios e estações (ex.: VMware Workstation, VirtualBox).',
      'Técnicas de Virtualização: Virtualização Total / Assistida por Hardware (Intel VT-x / AMD-V executa SO convidado sem modificações via extensões de CPU), Paravirtualização (SO convidado conhece o hipervisor e faz hypercalls eficientes, ex.: drivers virtio/PV) e Emulação pura.',
      'Alocação de Recursos (vCPU, Memória, Overcommit): hipervisor escalona vCPUs nas pCPUs físicas (excesso de vCPUs por VM causa CPU Ready alto); na RAM emprega técnicas como Transparent Page Sharing (TPS), Ballooning (driver VMware Tools), Memory Compression e Hypervisor Swapping.',
      'Containers vs Máquinas Virtuais: VMs virtualizam hardware completo e sobem um kernel próprio por instância; Containers compartilham o kernel do sistema operacional host isolados por namespaces e cgroups.'
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
    keyTerms: ['Hipervisor Tipo 1 vs Tipo 2', 'Intel VT-x / AMD-V', 'Paravirtualização (virtio)', 'Ballooning / CPU Ready', 'VM vs Container']
  },
  '5.1.2': {
    itemId: '5.1.2',
    highYieldSummary: [
      'Padrões de Disco e Interfaces: SATA (custo baixo, half-duplex, fila AHCI 32 comandos, ideal para arquivamento frio), SAS (full-duplex, dual-port para controladoras redundantes, comandos SCSI avançados, maior confiabilidade) e NVMe (PCIe direto, até 64K filas × 64K comandos, latência na casa de microssegundos).',
      'HDD vs SSD/NVMe: HDDs mecânicos têm latência alta (ms) devido a busca mecânica/rotação (7.2k–15k RPM) e poucos IOPS (~75–200); SSDs eliminam partes móveis atingindo dezenas a centenas de milhares de IOPS com latência sub-milissegundo.',
      'Modelos de Armazenamento (Block, File, Object): Block Storage entrega volumes brutos/LUNs sem sistema de arquivos (iSCSI/FC — ideal para SGBDs e datastores de VMs); File Storage entrega diretórios compartilhados com filesystem (NAS via NFS/SMB); Object Storage armazena objetos imutáveis com metadados e ID único acessados via API HTTP/REST (S3).',
      'Arquitetura de Storage Corporativo: controladoras duplas ativo-ativo (cache espelhado protegido por bateria/NVRAM), tiering automático (NVMe/SSD para dados quentes + NL-SAS/SATA para frios) e snapshots copy-on-write.',
      'Desempenho e Vida Útil Flash: SSDs medem resistência em DWPD (Drive Writes Per Day) ou TBW; recursos como TRIM/UNMAP notificam o storage sobre blocos liberados pelo SO para manter garbage collection eficiente e economizar thin provisioning.'
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
    keyTerms: ['SATA vs SAS vs NVMe', 'Block vs File vs Object', 'Dual-Port / NVRAM', 'TRIM / UNMAP', 'DWPD / TBW']
  },
  '5.1.3': {
    itemId: '5.1.3',
    highYieldSummary: [
      'RAID 0 (Striping): distribui blocos entre >= 2 discos somando 100% da capacidade e máximo desempenho, mas ZERO redundância — se 1 disco falhar, perde-se todo o volume.',
      'RAID 1 (Mirroring): espelha dados idênticos em pares (>= 2 discos), entregando 50% de capacidade útil, excelente leitura e tolerância a 1 falha por par (write penalty = 2).',
      'RAID 5 (Striping + Paridade Simples Distribuída): exige >= 3 discos, capacidade útil (N-1), tolera 1 disco falho e sofre write penalty = 4 (lê dado + lê paridade -> calcula -> grava dado + grava paridade); reconstrução longa em discos grandes traz risco de URE.',
      'RAID 6 (Striping + Dupla Paridade P+Q): exige >= 4 discos, capacidade útil (N-2), tolera até 2 discos falhos simultaneamente (ideal para discos SATA/NL-SAS de alta capacidade), mas possui a maior penalidade de escrita (write penalty = 6).',
      'RAID 10 / 1+0 (Espelhamento seguido de Striping): exige >= 4 discos (par), entrega 50% da capacidade útil, zero cálculo de paridade (write penalty = 2), melhor IOPS de escrita aleatória (bancos OLTP) e tolera 1 falha em cada par espelhado.'
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
    keyTerms: ['RAID 0 / 1 / 5 / 6 / 10', 'Paridade Simples vs Dupla (P+Q)', 'Write Penalty (2/4/6)', 'Capacidade Útil', 'Rebuild / URE']
  },
  '5.1.4': {
    itemId: '5.1.4',
    highYieldSummary: [
      'NAS (Network Attached Storage): dispositivo conectado à rede Ethernet IP padrão que gerencia seu próprio sistema de arquivos e exporta compartilhamentos em nível de ARQUIVO (File-Level) usando NFS (Linux/Unix/ESXi) ou SMB/CIFS (Windows).',
      'SAN (Storage Area Network): rede dedicada de alta velocidade que expõe volumes em nível de BLOCO (Block-Level / LUNs) via Fibre Channel (FC) ou IP (iSCSI / FCoE / NVMe-oF); cada servidor enxerga a LUN como disco local bruto.',
      'Fibre Channel (FC): fabric dedicado com switches FC, placas HBA (identificadas por WWNN/WWPN de 64 bits), Zoning no switch FC e LUN Masking no storage; oferece baixíssima latência sem perdas (lossless via buffer-to-buffer credits).',
      'iSCSI (Internet SCSI): encapsula comandos SCSI sobre redes Ethernet TCP/IP padrão (porta TCP 3260) identificando pontas por IQN; custo menor que FC exigindo isolamento em VLAN dedicada, Jumbo Frames (MTU 9000) e multipath.',
      'Concorrência de Acesso em Bloco: múltiplos servidores NUNCA podem montar simultaneamente a mesma LUN em NTFS/ext4 comum sem corromper metadados — acesso compartilhado em SAN exige Cluster File System (ex.: VMFS no ESXi, CSV no Hyper-V ou GFS2).'
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
    keyTerms: ['NAS (NFS/SMB)', 'SAN (Block / LUN)', 'Fibre Channel (WWN/Zoning)', 'iSCSI (TCP 3260 / IQN)', 'VMFS / CSV']
  },
  '5.1.5': {
    itemId: '5.1.5',
    highYieldSummary: [
      'Modelos de Serviço (NIST SP 800-145): IaaS (Infraestrutura: cliente gerencia SO, patches, middleware e apps — ex.: VMs EC2/Azure VM), PaaS (Plataforma: provedor gerencia hardware e SO/runtime; cliente cuida de apps e dados) e SaaS (Software: usuário final consome aplicação pronta via web/API).',
      'Responsabilidade Compartilhada: provedor sempre responde pela segurança "DA" nuvem (física, hardware, hipervisor); cliente sempre responde pela segurança "NA" nuvem (dados, classificação, identidade/IAM e acessos — variando SO/rede em IaaS vs app em PaaS).',
      'Modelos de Implantação: Nuvem Pública (infraestrutura multi-tenant compartilhada de provedor externo), Nuvem Privada (exclusiva de uma organização, on-premises ou hospedada), Nuvem Híbrida (integração orquestrada entre privada e pública mantendo portabilidade de dados/cargas) e Comunitária.',
      'Elasticidade vs Escalabilidade: Escalabilidade é a capacidade planejada de crescer verticalmente (scale-up: mais CPU/RAM no nó) ou horizontalmente (scale-out: mais nós); Elasticidade é o provisionamento e DESPROVISIONAMENTO automático e rápido conforme variação dinâmica de demanda.',
      'Características Essenciais NIST: Autoatendimento sob demanda, Amplo acesso à rede, Pool de recursos (multi-tenancy), Elasticidade rápida e Serviço medido (pay-as-you-go).'
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
    keyTerms: ['IaaS / PaaS / SaaS', 'Pública / Privada / Híbrida', 'Elasticidade vs Escalabilidade', 'Responsabilidade Compartilhada', 'NIST SP 800-145']
  },
  '5.2.1': {
    itemId: '5.2.1',
    highYieldSummary: [
      'VMware ESXi: hipervisor bare-metal Tipo 1 (baseado no VMkernel) que executa VMs (.vmx configuração + .vmdk disco virtual) e interfaces virtuais (vSwitch Standard e Distributed Switch, vmkernel ports para gestão, vMotion e iSCSI).',
      'vCenter Server (VCSA): appliance centralizado de gerenciamento (control plane) que administra múltiplos clusters ESXi habilitando vMotion, DRS, HA, vDS (Distributed Switch), templates e RBAC.',
      'vSphere DRS (Distributed Resource Scheduler): monitora continuamente consumo de CPU/RAM do cluster e migra VMs automaticamente via vMotion para balancear carga ou respeitar regras de afinidade/antiafinidade.',
      'Equivalentes Corporativos: Microsoft Hyper-V (gerenciado via Failover Cluster Manager / SCVMM, discos VHDX) e KVM/QEMU (nativo no kernel Linux com libvirt/Proxmox/oVirt/OpenStack, discos qcow2/raw).',
      'VMware Tools / Guest Additions: pacote de drivers paravirtualizados (vmxnet3, PVSCSI) e agente instalado no SO convidado para permitir shutdown gracioso, sincronismo de hora, quiescing VSS em snapshots e Ballooning.'
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
    keyTerms: ['ESXi (VMkernel)', 'vCenter Server', 'DRS (Afinidade)', 'Hyper-V / KVM', 'VMware Tools / VMXNET3']
  },
  '5.2.2': {
    itemId: '5.2.2',
    highYieldSummary: [
      'Funcionamento do vSphere HA: agentes FDM (Fault Domain Manager) elegem 1 host Master e os demais Slaves no cluster; quando um host falha fisicamente, o Master reinicia as VMs afetadas nos outros hosts saudáveis (com downtime do boot).',
      'Admission Control (Controle de Admissão): reserva capacidade de failover (por % de CPU/RAM do cluster, quantidade de hosts tolerados N+1/N+2 ou hosts dedicados) impedindo ligar novas VMs se isso violar a garantia de failover.',
      'Host Isolation e Datastore Heartbeating: quando um host perde rede de gerenciamento mas mantém acesso ao storage, o Master verifica o arquivo de heartbeat no datastore antes de declarar host morto — evitando falso reinício (split-brain de VM).',
      'Host Isolation Response: ação configurada para um host que perdeu rede de gerência e acesso aos demais nós (Leave powered on, Power off, ou Shut down — recomendado Power off/Shut down em conjunto com datastore heartbeating para evitar duplicidade).',
      'VM Monitoring & APD/PDL Protection: VM Component Protection (VMCP) reinicia VMs que perderam acesso ao storage (PDL — Permanent Device Loss ou APD — All Paths Down) em outro host que ainda enxergue a LUN.'
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
    keyTerms: ['vSphere HA (FDM)', 'Admission Control', 'Datastore Heartbeating', 'Host Isolation', 'HA vs Fault Tolerance']
  },
  '5.2.3': {
    itemId: '5.2.3',
    highYieldSummary: [
      'vMotion (Compute Live Migration): move uma VM ligada de um host ESXi para outro sem downtime, transferindo estado de dispositivos, páginas de RAM em iterações (pre-copy) e fazendo um breve stun final para copiar dirty pages residuais e atualizar switches (RARP).',
      'Pré-requisitos do vMotion tradicional: armazenamento compartilhado acessível por ambos os hosts (SAN/NAS), interface VMkernel dedicada com serviço vMotion habilitado, port groups compatíveis nos vSwitches e famílias de CPU compatíveis (ou EVC habilitado).',
      'Storage vMotion: migra os discos virtuais (.vmdk) e arquivos de uma VM ligada entre datastores distintos (ex.: de um storage antigo para um novo ou entre Thin/Thick) usando espelhamento em tempo real (mirror driver).',
      'EVC (Enhanced vMotion Compatibility): mascara instruções de gerações mais novas de CPU (Intel/AMD) no nível do cluster para que hosts de gerações diferentes façam vMotion transparente sem erro de incompatibilidade de CPU.',
      'Shared-Nothing vMotion: a partir do vSphere 5.1+, permite migrar simultaneamente host E datastore (compute + storage) sem storage compartilhado prévio entre origem e destino.'
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
    keyTerms: ['vMotion (Live Migration)', 'Storage vMotion', 'VMkernel Port', 'EVC (CPU Compatibility)', 'Pre-Copy / Dirty Pages']
  },
  '5.2.4': {
    itemId: '5.2.4',
    highYieldSummary: [
      'Tipos de Datastore no vSphere: VMFS (Virtual Machine File System — filesystem clusterizado de alto desempenho sobre LUNs em bloco SAN/FC/iSCSI permitindo acesso simultâneo de múltiplos hosts ESXi), NFS (montado via rede IP NAS v3/v4.1) e vSAN (HCI).',
      'Provisionamento de Discos Virtuais: Thin Provisioning (aloca espaço físico sob demanda conforme gravação — economiza storage mas exige monitoramento contra over-allocation), Thick Provision Lazy Zeroed (reserva todo espaço no momento da criação, zerando blocos só na primeira escrita) e Thick Provision Eager Zeroed (reserva e zera tudo na criação).',
      'Caso de Uso de Thick Eager Zeroed: obrigatório para recursos que exigem gravação imediata sem atraso de zeramento ou clustering compartilhado (ex.: Microsoft WSFC multi-writer e Fault Tolerance legado).',
      'Datastore Cluster e Storage DRS: agrupa múltiplos datastores para balanceamento automático de ocupação e latência via Storage vMotion.',
      'Monitoramento e Riscos de Overcommit: usar Thin Provisioning sem alertas de capacidade pode esgotar 100% do datastore físico, congelando imediatamente todas as VMs que tentarem expandir discos.'
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
    keyTerms: ['VMFS vs NFS', 'Thin vs Thick Lazy vs Thick Eager Zeroed', 'Over-Allocation', 'UNMAP', 'Storage DRS']
  },
  '5.2.5': {
    itemId: '5.2.5',
    highYieldSummary: [
      'Mecanismo Interno de Snapshot: ao tirar um snapshot, o disco base (.vmdk) passa a ser somente leitura e todas as novas alterações são desviadas para um arquivo delta (-delta.vmdk / sesparse); opcionalmente captura estado da memória RAM (.vmsn).',
      'Por que Snapshots NÃO são Backup: dependem do disco pai original intacto (não provêm cópia independente em outra mídia/site) e a degradação acumula a cada camada delta na cadeia.',
      'Impacto na Performance e Capacidade: cada delta pode crescer até o tamanho total do disco base (dobrando/triplicando o consumo); leituras aleatórias percorrem toda a cadeia de deltas aumentando I/O e latência no storage.',
      'Consolidação (Delete Snapshot): ao excluir um snapshot, o hipervisor mescla (commit) os blocos alterados do delta de volta para o disco pai; cadeias enormes ou com muito I/O podem causar breve stun na VM ao finalizar a consolidação.',
      'Boas Práticas Corporativas: utilizar snapshots exclusivamente como ponto rápido de retorno antes de patches/atualizações (duração máxima recomendada de 24–72 horas) e removê-los logo após validação.'
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
    keyTerms: ['Delta Disk (-sesparse)', 'Consolidação vs Revert', 'Quiescing (VSS)', 'Stun de VM', 'Não substitui Backup']
  },
  '5.2.6': {
    itemId: '5.2.6',
    highYieldSummary: [
      'Arquitetura iSCSI: encapsula comandos e dados SCSI dentro de pacotes TCP/IP na porta padrão TCP 3260, operando entre o Initiator (servidor/VMkernel iSCSI) e o Target (storage/array).',
      'Nomenclatura IQN (iSCSI Qualified Name): identificador único mundial no formato iqn.aaaa-mm.dominio-reverso:identificador (ex.: iqn.1998-01.com.vmware:esxi01-abc).',
      'Descoberta de Targets: estática ou dinâmica via SendTargets (o Initiator consulta o portal IP:3260 do Target e recebe a lista de IQNs disponíveis) ou iSNS.',
      'Redes e Otimizações iSCSI: usar VLAN isolada sem roteamento (Layer 2 dedicado ao storage), desabilitar spanning-tree bloqueante nas portas (PortFast/Edge), habilitar Flow Control e Jumbo Frames (MTU 9000 ponta a ponta) e configurar Port Binding MPIO.',
      'Segurança iSCSI: autenticação CHAP unidirecional (Target valida Initiator) ou Mutual/Bidirecional CHAP (ambos se autenticam), além de isolamento estrito por ACLs/Masking de IQN e VLAN dedicada.'
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
    keyTerms: ['TCP 3260', 'Initiator vs Target', 'IQN', 'SendTargets', 'CHAP / Mutual CHAP', 'Port Binding (1:1) / MTU 9000']
  },
  '5.2.7': {
    itemId: '5.2.7',
    highYieldSummary: [
      'LUN (Logical Unit Number): unidade lógica endereçável em blocos criada dentro de um pool/RAID de um storage SAN e apresentada a servidores/hipervisores como disco SCSI.',
      'Zoning (no Switch Fibre Channel): particiona o fabric FC definindo quais WWPNs de iniciadores (HBAs) enxergam quais WWPNs de controladoras de storage (Targets) — recomenda-se Single-Initiator Zoning (1 HBA + 1 porta de storage por zona).',
      'LUN Masking (no Storage Array): controle aplicado no próprio storage vinculando uma LUN específica apenas aos identificadores autorizados (WWPNs no FC ou IQNs no iSCSI), impedindo que servidores não autorizados montem a LUN alheia.',
      'RDM vs VMFS (vSphere): VMFS encapsula múltiplos VMDKs compartilhados na mesma LUN; RDM (Raw Device Mapping) mapeia uma LUN diretamente para dentro de uma VM específica (exigido por certos clusters físicos/SAN-aware apps).',
      'Consumo de Queue Depth por LUN: cada HBA e LUN possuem filas limitadas (ex.: 32–256 comandos); dimensionar múltiplas LUNs de tamanho equilibrado evita gargalos de fila em ambientes com dezenas de VMs intensivas.'
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
    keyTerms: ['LUN', 'Zoning (Switch FC)', 'LUN Masking (Storage)', 'WWPN vs IQN', 'RDM vs VMFS']
  },
  '5.2.8': {
    itemId: '5.2.8',
    highYieldSummary: [
      'Hot Spare (Global vs Dedicado): disco reserva ocioso mantido no storage que entra automaticamente para iniciar o rebuild assim que um disco ativo do array RAID falha, reduzindo a janela de vulnerabilidade (tempo em modo degradado).',
      'Rebuild e Risco de URE (Unrecoverable Read Error): durante a reconstrução de um RAID 5 com discos grandes (ex.: 8–16 TB SATA/NL-SAS), ler terabytes inteiros dos discos sobreviventes aumenta a probabilidade de um setor ilegível derrubar o rebuild inteiro.',
      'Write Penalty (Penalidade de Escrita): cada escrita aleatória de aplicativo exige operações extras no array: RAID 0 = 1, RAID 1/10 = 2, RAID 5 = 4 (Read Data + Read Parity + Write Data + Write Parity) e RAID 6 = 6 (lê dado + 2 paridades + grava dado + 2 paridades).',
      'Cache de Controladora com Bateria/Flash (BBWC/FBWC): absorve rajadas de escrita (Write-Back Cache) confirmando ao SO em nanossegundos e gravando em sequência nos discos; sem bateria saudável, o cache cai para Write-Through derrubando a performance.',
      'Stripe Size / Strip Size: alinhamento entre o tamanho da faixa do RAID, tamanho de bloco do filesystem e tamanho de I/O da aplicação (ex.: 64 KB / 8 KB SQL) evita leitura/escrita dividida (split I/O).'
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
    keyTerms: ['Hot Spare', 'Rebuild / URE', 'Write Penalty (2/4/6)', 'Write-Back vs Write-Through', 'BBU / Cache Espelhado']
  },
  '5.2.9': {
    itemId: '5.2.9',
    highYieldSummary: [
      'Conceito de Multipath (MPIO / DM-Multipath): software no SO ou hipervisor (ESXi PSP/NMP, Windows MPIO, Linux multipathd) que consolida os múltiplos caminhos físicos até uma mesma LUN em um único dispositivo lógico, provendo failover e balanceamento.',
      'ALUA (Asymmetric Logical Unit Access — SPC-3): padrão SCSI pelo qual storages ativo-passivo ou ativo-ativo assimétrico informam ao host quais caminhos são Active/Optimized (controladora proprietária da LUN) e quais são Active/Non-Optimized.',
      'Políticas de Seleção de Caminho (PSP no ESXi): MRU (Most Recently Used — padrão antigo para storages ativo-passivo), Fixed (usa caminho preferencial sempre que disponível) e Round Robin (alterna I/Os entre caminhos ativos — padrão recomendado para Active-Active e ALUA otimizados).',
      'Troubleshooting sem Multipath: se o MPIO não estiver ativo/instalado, o Linux/Windows enxerga a mesma LUN repetida como /dev/sdb, /dev/sdc, /dev/sdd...; tentar formatar/montar uma delas sem multipath causa falha ou corrupção.',
      'Boas práticas de Topologia: usar no mínimo 2 caminhos físicos totalmente segregados (HBA1 -> Switch SAN A -> Controladora A/B; HBA2 -> Switch SAN B -> Controladora A/B) para eliminar SPOF.'
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
    keyTerms: ['MPIO / DM-Multipath', 'ALUA (Active/Optimized)', 'Round Robin / MRU / Fixed', 'Path Thrashing', 'multipath -ll']
  },
  '5.2.10': {
    itemId: '5.2.10',
    highYieldSummary: [
      'IOPS vs Throughput: IOPS (Input/Output Operations Per Second) mede quantidade de operações por segundo (crítico para cargas aleatórias pequenas como OLTP 4K–16K); Throughput (MB/s ou GB/s) mede taxa de transferência (crítico para cargas sequenciais grandes como backup/streaming).',
      'Fórmula Fundamental: Throughput = IOPS × Tamanho do Bloco (Block Size). Logo, 10.000 IOPS em blocos de 8 KB equivalem a ~80 MB/s, enquanto em blocos de 64 KB equivalem a ~640 MB/s.',
      'Read/Write Ratio e Cálculo de IOPS Backend: para dimensionar discos físicos, aplicar a penalidade de escrita do RAID: IOPS_backend = IOPS_read + (IOPS_write × Write_Penalty). Ex.: 1.000 IOPS com 50% escrita em RAID 5 = 500 + (500 × 4) = 2.500 IOPS nos discos.',
      'Queue Depth (Profundidade de Fila): número de comandos I/O pendentes simultâneos aguardando atendimento pela LUN/controladora; se Queue Depth satura, novos pedidos ficam na fila do SO aumentando latência.',
      'Latência x IOPS (Lei de Little): Concorrência (Queue Depth) ≈ IOPS × Latência média. Reduzir latência permite atingir muito mais IOPS com a mesma fila.'
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
    keyTerms: ['IOPS vs Throughput', 'Block Size', 'Read/Write Ratio', 'IOPS Backend (Write Penalty)', 'Queue Depth']
  },
  '5.2.11': {
    itemId: '5.2.11',
    highYieldSummary: [
      'Conceito de Latência de Armazenamento: tempo decorrido desde a emissão do pedido de leitura/escrita até sua conclusão (medida em milissegundos no SSD/SAN ou microssegundos em NVMe local); é o principal indicador real percebido pela aplicação.',
      'Decomposição de Latência no esxtop (GAVG = KAVG + DAVG): DAVG (Device Average Latency) mede o tempo gasto fora do hipervisor (HBA + fabric + storage array); KAVG (Kernel Average Latency) mede o tempo em fila dentro do VMkernel.',
      'Diagnóstico preciso por DAVG vs KAVG: DAVG alto (> 15–20 ms) com KAVG próximo de zero aponta gargalo no STORAGE físico, fabric SAN ou rede iSCSI; KAVG alto (> 2 ms) indica fila presa no hipervisor (Queue Depth insuficiente / congestionamento de fila no host).',
      'Impacto na Aplicação (QAVG / GAVG): GAVG representa a latência total vista pelo sistema operacional convidado da VM (Guest Average Latency = KAVG + DAVG); bancos transacionais exigem tipicamente GAVG < 5 ms (ideal < 1–2 ms em All-Flash).',
      'Causas comuns de pico de latência: rebuild de RAID em andamento, snapshot enorme consolidando, noisy neighbor (outra VM saturando o mesmo datastore), cabos/SFPs com erros CRC e cache Write-Back desligado por falha de bateria.'
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
    keyTerms: ['DAVG / KAVG / GAVG', 'esxtop', 'All-Flash vs HDD', 'Noisy Neighbor', 'Queue Depth / SIOC']
  },
  '5.2.12': {
    itemId: '5.2.12',
    highYieldSummary: [
      'Ferramenta esxtop (VMware ESXi): inspeção em tempo real via SSH: teclas c (CPU — %RDY / %CSTP), m (Memória — MCTLSZ balloon / SWCUR swap), n (Rede — %DRPTX/RX) e d/u/v (Disco/Storage — CMDS/s, DAVG, KAVG, GAVG, ABRTS/s).',
      'Métricas críticas de CPU e RAM no esxtop: %RDY > 5–10% indica contenção de CPU física (ou excesso de vCPUs com %CSTP alto); MCTLSZ > 0 indica ballooning ativo; SWCUR > 0 indica swap no disco pelo hipervisor (degradação extrema).',
      'Estados APD vs PDL (Storage Loss): PDL (Permanent Device Loss) ocorre quando o storage informa via código SCSI que a LUN foi removida permanentemente (HA/VMCP pode agir rápido); APD (All Paths Down) ocorre quando a LUN desaparece sem aviso (cabo/switch/storage travado — timeout mais cauteloso).',
      'Logs essenciais no ESXi: /var/log/vmkernel.log (eventos SCSI, APD/PDL, erros de hardware/rede, NMP multipath), /var/log/hostd.log (gerência local do host) e /var/log/vpxa.log (comunicação com vCenter), além do vmware.log dentro da pasta da VM.',
      'Troubleshooting de Rede/iSCSI/FC: checar erros de SFP/CRC nos switches, MTU 9000 end-to-end (vmkping -d -s 8972 <IP_Target>), status de paths (esxcli storage core path list) e filas de comandos abortados (ABRTS/s > 0 no esxtop).'
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
    keyTerms: ['esxtop (%RDY / DAVG / ABRTS)', 'vmkernel.log', 'APD vs PDL', 'vmkping -d -s 8972', 'esxcli storage']
  }
};
