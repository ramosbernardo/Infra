import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_3: Record<string, StudyGuide> = {
  '3.1.1': {
    itemId: '3.1.1',
    highYieldSummary: [
      'Definição e escopo: a arquitetura interna de sistemas operacionais gerencia CPU, memória RAM e dispositivos de Entrada/Saída (E/S) por meio do kernel (núcleo privilegiado do SO). Resolve a execução concorrente de múltiplas aplicações com isolamento de memória, justiça no escalonamento de threads e abstração uniforme de hardware.',
      'Processos vs Threads: Processo é uma instância em execução com espaço de endereçamento isolado e PCB (Process Control Block — estrutura de controle no kernel); Threads são unidades de execução dentro do processo que compartilham código, heap (memória alocada dinamicamente) e arquivos abertos, mantendo registradores e pilha (stack — memória de chamadas e variáveis locais) próprios (menor custo de troca de contexto).',
      'Estados e Escalonamento: estados básicos Novo -> Pronto -> Executando -> Bloqueado (aguardando E/S) -> Finalizado. Escalonadores (preemptivos vs não-preemptivos) gerenciam fatias de CPU (Central Processing Unit) chamadas time quantum (fatia máxima contínua antes da preempção) priorizando responsividade e throughput (vazão de tarefas concluídas).',
      'Gestão de Memória Virtual: traduz endereços virtuais em físicos usando tabelas de páginas e TLB (Translation Lookaside Buffer — cache rápido de traduções) com apoio da MMU (Memory Management Unit — unidade de hardware do processador); paginação divide a memória em páginas/quadros fixos eliminando fragmentação externa.',
      'Page Fault e Thrashing: ocorre Page Fault (hard page fault) quando a página referenciada não está na RAM (Random Access Memory) e precisa ser buscada no pagefile.sys (arquivo de paginação no Windows) / swap (espaço de troca no Linux); excesso de page faults contínuos gera Thrashing (CPU ociosa esperando disco).',
      'Gerenciamento de Entrada e Saída (E/S): comunicação via Polling (verificação ativa em laço do estado do dispositivo), Interrupções — IRQ (Interrupt Request — sinal de hardware) — ou DMA (Direct Memory Access — transfere blocos direto entre dispositivo e RAM sem ocupar a CPU a cada byte) com buffering e caching.',
      'Exemplo operacional: em um servidor Windows de aplicação clínica com 16 GB de RAM apresentando lentidão extrema, o monitoramento de desempenho mostra `Pages/sec > 5.000` e fila de disco elevada enquanto a CPU permanece com uso moderado — quadro clássico de **Thrashing** no `pagefile.sys`. A ampliação da RAM para 32 GB reduz os *hard page faults* e normaliza a latência, enquanto a placa de rede e a controladora NVMe operam em **DMA** para evitar sobrecarga de interrupções na CPU.'
    ],
    technicalReference: [
      'Hierarquia de velocidade: Registradores -> Cache L1/L2/L3 -> RAM -> Pagefile/Swap (SSD/HDD)',
      'Estruturas: MMU + TLB (tradução virtual->físico) | DMA (transferência periférico<->RAM sem intervenção contínua da CPU).'
    ],
    examTraps: [
      'Threads do mesmo processo compartilham espaço de memória (heap/código), mas cada thread possui sua própria PILHA (stack) e registradores.',
      'Paginação elimina fragmentação EXTERNA (pode haver fragmentação interna na última página), enquanto segmentação sofre fragmentação externa.',
      'DMA reduz interrupções da CPU em transferências em bloco de disco/rede; Polling desperdiça ciclos de CPU checando o hardware em laço.'
    ],
    keyTerms: [
      'Processo vs Thread: unidade isolada de alocação de memória e PCB versus fluxo de execução leve que compartilha heap e mantém pilha própria',
      'MMU e TLB: unidade de hardware que traduz endereços virtuais em físicos apoiada pelo cache associativo TLB',
      'Page Fault vs Thrashing: interrupção ao referenciar página ausente da RAM versus saturação contínua de E/S paginando no pagefile/swap',
      'DMA (Direct Memory Access): transferência direta em bloco entre controlador de E/S e RAM sem intervenção contínua da CPU por byte',
      'Escalonamento Preemptivo: interrupção forçada de thread em execução ao esgotar o time quantum ou surgir tarefa mais prioritária'
    ]
  },
  '3.1.2': {
    itemId: '3.1.2',
    highYieldSummary: [
      'Definição e escopo: serviços de diretório centralizam a base de identidades, computadores, grupos e políticas de uma rede corporativa utilizando padrões como LDAP (RFC 4511) e Kerberos (RFC 4120). No Windows Server, o Active Directory Domain Services (AD DS) organiza esses objetos em fronteiras lógicas (floresta, domínio, OU) e físicas (sites, DCs), permitindo também interoperabilidade com servidores Linux e serviços de rede.',
      'Serviços de Diretório e Active Directory (AD DS — Active Directory Domain Services): banco hierárquico distribuído otimizado para muitas leituras e autenticação centralizada, organizando identidades, computadores e recursos corporativos.',
      'Estrutura Lógica do AD: Floresta (fronteira máxima de segurança, compartilha Schema — esquema de classes e atributos — e Global Catalog — GC, catálogo de pesquisa multi-domínio) -> Árvore (namespace DNS — Domain Name System — contíguo) -> Domínio (fronteira de replicação da partição de domínio e políticas de conta) -> Unidades Organizacionais (OUs — delegação administrativa e aplicação de GPOs — Group Policy Objects).',
      'Estrutura Física do AD: Sites (sub-redes conectadas por links rápidos) e Domain Controllers (DCs — replicam partições entre si). Sites controlam o tráfego de replicação e o direcionamento de logon do cliente para o DC mais próximo.',
      'LDAP (Lightweight Directory Access Protocol): padrão aberto (RFC 4511) que estrutura entradas em árvores — DIT (Directory Information Tree) — identificadas por Distinguished Name (DN) usando atributos como CN (Common Name), OU (Organizational Unit) e DC (Domain Component).',
      'Interoperabilidade Windows/Linux/Sistemas: integração via LDAP / LDAPS (LDAP sobre TLS na porta TCP 636), Kerberos — realm, SPN (Service Principal Name) e keytab (arquivo de chaves no Linux) via SSSD (System Security Services Daemon) / Winbind — RADIUS via NPS (Network Policy Server), SAML (Security Assertion Markup Language) / OIDC (OpenID Connect) via AD FS / Microsoft Entra ID e SMB (Server Message Block) / CIFS (Common Internet File System) para compartilhamento de arquivos.',
      'Exemplo operacional: em uma rede corporativa com domínio `hosp.local`, servidores Linux de exames integram-se ao AD via **SSSD** usando **Kerberos** (`realm HOSP.LOCAL`) e consultas **LDAPS (`TCP 636`)** para validar grupos da OU `OU=Medicos,OU=Usuarios,DC=hosp,DC=local`. O logon na unidade remota é direcionado pelo objeto **Site** correspondente para o DC local, enquanto o **NPS** autentica switches Wi-Fi via **RADIUS** contra a mesma base.'
    ],
    technicalReference: [
      'Hierarquia AD: Floresta (fronteira de segurança) -> Árvore -> Domínio (fronteira de replicação) -> OU (delegação e GPO)',
      'Exemplo DN LDAP: CN=Joao Silva,OU=Infra,OU=TI,DC=sarah,DC=br | Global Catalog: TCP 3268 (LDAP) / 3269 (LDAPS).'
    ],
    examTraps: [
      'A fronteira real de SEGURANÇA do Active Directory é a FLORESTA (e não o Domínio — o Domínio é fronteira de replicação e políticas administrativas).',
      'GPOs NÃO podem ser vinculadas diretamente a Grupos de Segurança ou a Containers padrão (CN=Users, CN=Computers) — vinculam-se apenas a Sites, Domínios e OUs.',
      'O Global Catalog (GC) armazena todos os objetos do próprio domínio e uma cópia parcial (somente leitura) dos atributos principais dos demais domínios da floresta.'
    ],
    keyTerms: [
      'Floresta vs Domínio: fronteira máxima de segurança compartilhando Schema e GC (Floresta) versus fronteira de replicação de contas/políticas (Domínio)',
      'OU (Organizational Unit): contêiner hierárquico que permite delegar permissões administrativas e vincular GPOs',
      'Sites e Sub-redes: representação da topologia física IP usada para otimizar replicação inter-site e localizar o DC mais próximo no logon',
      'Global Catalog (TCP 3268/3269): DC que mantém cópia completa do próprio domínio e cópia parcial somente leitura dos demais domínios da floresta',
      'SSSD / Winbind: daemons Linux que integram autenticação Kerberos e resolução de identidades LDAP contra o Active Directory'
    ]
  },
  '3.2.1': {
    itemId: '3.2.1',
    highYieldSummary: [
      'Definição e escopo: no Windows Server, o serviço AD DS persiste seus objetos no banco transacional `ntds.dit` e distribui políticas e scripts pela pasta compartilhada `SYSVOL`. A administração segura exige segmentação de privilégios (Tiering), proteção contra cópia de credenciais em filiais (RODC) e rotinas íntegras de backup/restauração de System State.',
      'Arquitetura do AD DS no Windows Server: base de dados ESE (Extensible Storage Engine — motor transacional de banco) armazenada em `C:\\Windows\\NTDS\\ntds.dit` (dividida em partições Schema, Configuration, Domain e Application/DNS) e pasta SYSVOL para scripts/GPOs.',
      'Domain Controllers (DC) e RODC: DCs padrão são multi-master (todos gravam alterações, exceto papéis FSMO — Flexible Single Master Operations); RODC (Read-Only Domain Controller) é implantado em filiais sem segurança física, sem replicar hashes sensíveis por padrão.',
      'SYSVOL e Replicação DFSR: armazena modelos de GPO — GPT (Group Policy Template) — e scripts de logon; ambientes modernos usam DFSR (Distributed File System Replication — exigido a partir de evoluções após o nível funcional Windows Server 2008) em vez do legado obsoleto FRS (File Replication Service).',
      'Hardening de DCs: Tiering Administrativo (Tier 0 exclusivo para DCs, PKI — Public Key Infrastructure — e administradores de domínio), bloqueio de acesso à Internet/navegação no DC, uso de Server Core (instalação sem interface gráfica completa) e proteção de credenciais via Credential Guard / grupo Protected Users.',
      'Backup e Restauração do AD: exige System State Backup (cópia de `ntds.dit`, `SYSVOL`, registro e boot); restauração Non-Authoritative (padrão em DSRM — Directory Services Restore Mode — recebe atualizações mais novas dos parceiros) vs Authoritative (via `ntdsutil` para recuperar OUs/usuários deletados forçando versão superior, quando a Lixeira do AD não está habilitada).',
      'Exemplo operacional: após exclusão acidental de uma OU crítica (sem Lixeira do AD ativa), o administrador reinicia um DC no modo **DSRM**, restaura o **System State Backup** recente e executa no `ntdsutil` os comandos `activate instance ntds` -> `authoritative restore` -> `restore subtree "OU=Enfermagem,DC=hosp,DC=local"` para elevar o número de versão dos objetos e replicá-los de volta aos demais DCs.'
    ],
    technicalReference: [
      'Arquivos críticos AD: %SystemRoot%\\NTDS\\ntds.dit (banco ESE) | %SystemRoot%\\SYSVOL\\sysvol (GPOs/Scripts)',
      'Restore AD (DSRM - Directory Services Restore Mode): Non-Authoritative (padrão) vs Authoritative (ntdsutil authoritative restore).'
    ],
    examTraps: [
      'GPOs têm duas partes: GPC (Group Policy Container no ntds.dit) e GPT (Group Policy Template no SYSVOL) — falha no DFSR deixa ambos dessincronizados.',
      'Nunca restaurar snapshot antigo de VM de um Domain Controller sem suporte a VM-GenerationID: gera USN Rollback e corrompe a replicação da floresta.',
      'Lixeira do AD (AD Recycle Bin) preserva todos os atributos ao restaurar objetos deletados, mas uma vez ativada na floresta NÃO pode ser desativada.'
    ],
    keyTerms: [
      'ntds.dit (ESE): banco de dados transacional do AD armazenado por padrão em C:\\Windows\\NTDS contendo as partições do diretório',
      'SYSVOL (DFSR): compartilhamento replicado entre DCs que armazena templates de GPO (GPT) e scripts de logon',
      'RODC (Read-Only Domain Controller): DC somente leitura para locais de baixo controle físico, mantendo apenas credenciais autorizadas na PRP',
      'DSRM (Directory Services Restore Mode): modo de inicialização de manutenção offline usado para restauração e reparo do banco ntds.dit',
      'Authoritative Restore: marcação via ntdsutil que eleva a versão de objetos restaurados para sobrescrever a exclusão nos DCs parceiros'
    ]
  },
  '3.2.2': {
    itemId: '3.2.2',
    highYieldSummary: [
      'Definição e escopo: o gerenciamento de identidades e acessos no Active Directory baseia-se em identificadores imutáveis (SID e GUID), escopos estruturados de grupos de segurança (modelo AGDLP), relações de confiança entre domínios/florestas (Trusts) e políticas avançadas de proteção de contas. Garante controle de acesso escalável e redução da superfície de ataque sobre credenciais privilegiadas.',
      'Contas e SID (Security Identifier): todo usuário, grupo e computador possui um SID único no domínio (imutável enquanto permanecer nele) e um GUID (Globally Unique Identifier — único e imutável em toda a floresta); renomear uma conta altera o nome exibido / sAMAccountName (nome de logon compatível pré-Windows 2000), mantendo o SID e todas as permissões intactas.',
      'Escopos de Grupos e Estratégia AGDLP: Domain Local (permissões em recursos do domínio), Global (agrupa usuários do mesmo domínio) e Universal (agrupa contas e grupos globais de toda a floresta — replicado no GC — Global Catalog). Estratégia recomendada: Accounts -> Global -> Domain Local -> Permissions.',
      'Trusts (Relações de Confiança): dentro de uma mesma floresta são bidirecionais e transitivas por padrão; trusts externos entre florestas distintas são não-transitivos (salvo Forest Trust, que é transitivo entre as duas florestas envolvidas).',
      'Global Catalog (GC): responde consultas de objetos em toda a floresta (porta 3268/3269), valida associação a Grupos Universais durante o logon e resolve UPNs (User Principal Names — formato `usuario@empresa.com`).',
      'Segurança de Contas: grupo Protected Users (disponível a partir do nível funcional de domínio Windows Server 2012 R2; impede NTLM — NT LAN Manager — força Kerberos AES — Advanced Encryption Standard — e bloqueia delegação), Managed Service Accounts — gMSA (Group Managed Service Account com rotação automática de senha compartilhada entre hosts) — e Fine-Grained Password Policies — PSO (Password Settings Object para regras diferenciadas por grupo).',
      'Exemplo operacional: seguindo o modelo **AGDLP**, a conta `ana.silva` entra no grupo Global `GG_Radiologia`, que é aninhado no grupo Domain Local `DL_PACS_Leitura` com permissão de leitura na pasta compartilhada. Para contas administrativas críticas, inclui-se o usuário em **Protected Users** (eliminando cache local e NTLM) e executam-se serviços web corporativos sob uma conta **gMSA** (`svc_portal$`) com rotação automática de senha de `120` caracteres.'
    ],
    technicalReference: [
      'Estratégia AGDLP: A (Contas) -> G (Grupo Global) -> DL (Grupo Domain Local) -> P (Permissão no recurso)',
      'Tipos de Grupo: Security (recebe permissões) vs Distribution (apenas listas de e-mail) | Escopos: Domain Local, Global, Universal.'
    ],
    examTraps: [
      'Se A confia em B e B confia em C via External Trust (não transitivo), A NÃO confia em C.',
      'Sem contato com o Global Catalog no logon em ambiente multi-domínio, usuários comuns não conseguem validar Grupos Universais e o logon falha (salvo Universal Group Membership Caching).',
      'Permissão é avaliada pelo SID, nunca pelo nome de logon; excluir e recriar uma conta com mesmo nome gera um SID novo que perde os acessos antigos.'
    ],
    keyTerms: [
      'SID vs GUID: identificador de segurança único no domínio usado em ACLs (SID) versus identificador imutável global do objeto na floresta (GUID)',
      'AGDLP: modelo recomendado de delegação de acesso — Accounts em grupos Global, aninhados em Domain Local com Permissions',
      'Trust Transitivo vs Não-Transitivo: confiança estendida em cadeia dentro da floresta (ou entre duas florestas em Forest Trust) versus limitada ao par direto',
      'gMSA (Group Managed Service Account): conta de serviço sem senha manual com rotação automática gerenciada pelo AD e compartilhável em cluster',
      'Protected Users / PSO: grupo de endurecimento contra NTLM/delegação e objeto PSO para políticas granulares de senha por grupo'
    ]
  },
  '3.2.3': {
    itemId: '3.2.3',
    highYieldSummary: [
      'Definição e escopo: o serviço DNS (Domain Name System) atua como infraestrutura obrigatória de localização de serviços do Active Directory mediante registros SRV (RFC 2782) e zonas integradas replicadas no próprio diretório. Resolve a descoberta dinâmica de Domain Controllers, Global Catalogs e servidores Kerberos entre sites, além de encaminhar consultas externas com segurança.',
      'Dependência Crítica DNS <-> AD: o Active Directory depende inteiramente do DNS para localizar Domain Controllers, Global Catalogs e servidores Kerberos via registros SRV (Service Locator — informa hostname e porta do serviço) na zona `_msdcs.<floresta>`.',
      'Zonas Integradas ao AD (AD-Integrated Zones): armazenam registros DNS dentro de partições de aplicação do `ntds.dit` (`DomainDnsZones` e `ForestDnsZones`), permitindo replicação multi-master (qualquer DC gravável aceita alterações) e atualizações dinâmicas seguras — Secure Only (autenticadas via Kerberos apenas por máquinas autorizadas).',
      'Registros SRV essenciais: `_ldap._tcp.dc._msdcs.<domínio>` (localiza DCs), `_kerberos._tcp.dc._msdcs.<domínio>` (KDC — Key Distribution Center) e `_gc._tcp.<floresta>` (Global Catalog).',
      'Encaminhadores vs Root Hints: Forwarders (ou Conditional Forwarders para domínios parceiros e trusts) repassam consultas externas a servidores designados; Root Hints iniciam resolução iterativa (consultas passo a passo desde a raiz) a partir dos servidores raiz (`.`).',
      'Aging e Scavenging: limpam registros DNS dinâmicos antigos (stale records) que já expiraram — soma de No-Refresh (período sem renovação de timestamp para poupar replicação) + Refresh (janela em que clientes ativos devem renovar o registro) — evitando que entradas obsoletas apontem para IPs errados.',
      'Exemplo operacional: ao promover um DC secundário na sub-rede da filial, a configuração de placa de rede aponta o DNS primário para o DC parceiro (`10.1.0.10`) e o secundário para si (`127.0.0.1`), evitando o chamado *DNS islanding*. Na matriz, cria-se um **Conditional Forwarder** para `parceiro.local` apontando aos DCs do domínio confiável e executa-se `nltest /dsgetdc:hosp.local` para confirmar o registro **SRV** na zona `_msdcs`.'
    ],
    technicalReference: [
      'Registros críticos: _ldap._tcp.dc._msdcs.<dominio> | _kerberos._tcp.dc._msdcs.<dominio> | _gc._tcp.<floresta>',
      'Replicação DNS no AD: ForestDnsZones (toda floresta) | DomainDnsZones (domínio) | DCs Windows devem apontar DNS primário para outro DC e secundário para si (127.0.0.1).'
    ],
    examTraps: [
      'Configurar o DNS da placa de rede de um cliente ou servidor membro do domínio apontando para 8.8.8.8 (DNS público) faz falhar ingresso no domínio, GPOs e localização de DCs.',
      'Zonas primárias padrão em arquivo não suportam "Secure Dynamic Updates" (apenas zonas integradas ao Active Directory).',
      'Ativar Scavenging com intervalos menores que o lease DHCP apaga registros válidos de máquinas ativas.'
    ],
    keyTerms: [
      'AD-Integrated Zone: zona DNS gravada em partições do ntds.dit com replicação multi-master e suporte a Secure Dynamic Updates',
      'Registros SRV (_msdcs): registros DNS (RFC 2782) que publicam os DCs, KDCs e Global Catalogs disponíveis por domínio e site',
      'Conditional Forwarder: encaminhador seletivo que direciona consultas de um namespace específico diretamente aos servidores DNS daquele domínio',
      'Aging e Scavenging: controle de validade (No-Refresh + Refresh) e coleta automática de registros dinâmicos expirados (stale records)',
      'Secure Dynamic Updates: atualização automática de registros A/PTR autenticada por Kerberos impedindo sobrescrita por hosts não autorizados'
    ]
  },
  '3.2.4': {
    itemId: '3.2.4',
    highYieldSummary: [
      'Definição e escopo: DHCP (RFC 2131 para IPv4; DHCPv6 na RFC 8415) — protocolo cliente-servidor sobre UDP (67 no servidor, 68 no cliente) que atribui de forma automática e temporária (lease) IP, máscara e opções como gateway e DNS. No Windows Server integra-se ao AD (autorização) e ao DNS (registro dinâmico); clientes de outras sub-redes são atendidos via relay agent, que preenche o campo GIADDR para o servidor escolher o escopo.',
      'Autorização DHCP no AD: servidores DHCP em Windows Server membros de um domínio precisam ser autorizados no Active Directory (registro em CN=NetServices, na partição Configuration) para evitar Rogue DHCP servers (servidores não autorizados que entregam IP, gateway ou DNS indevidos).',
      'Escopos, Reservas e Opções: Escopo define faixa IPv4/IPv6 e exclusões (endereços do pool que o servidor não entrega, ex.: IPs fixos de impressoras); Reserva fixa um IP para um MAC address, mantendo a entrega dinâmica das opções; Opções (parâmetros numerados, ex.: 003 Router, 006 DNS Servers, 015 DNS Domain Name) atuam nos níveis Servidor, Escopo, Classe ou Reserva.',
      'Alta Disponibilidade DHCP Failover (baseado no draft IETF de failover; Windows Server 2012+): substitui o antigo split-scope 80/20 (dois servidores com escopos complementares, sem compartilhar o estado dos leases), operando em dois modos: Load Balance (padrão 50/50 ativo-ativo) ou Hot Standby (ativo-passivo, com 5% do pool reservado ao standby por padrão).',
      'Integração DHCP + DNS Dynamic Update: o DHCP pode registrar A (nome→IP) e PTR (IP→nome, zona reversa) em nome de clientes legados; em zonas com atualização segura, usar credencial dedicada ou o grupo DnsUpdateProxy (registros criados sem proprietário, atualizáveis por outro servidor).',
      'Backup e Migração do DHCP: banco local em %SystemRoot%\\System32\\dhcp\\dhcp.mdb, com backup automático a cada 60 min na subpasta backup; migração completa via Export-DhcpServer / Import-DhcpServer (o parâmetro -Leases inclui as concessões ativas).',
      'Exemplo operacional: um notebook na VLAN 20 (10.20.0.0/24) envia DHCPDISCOVER em broadcast; o switch L3 com `ip helper-address 10.1.1.10` encaminha em unicast ao servidor com GIADDR = 10.20.0.1, e o servidor seleciona o escopo 10.20.0.0/24. Seguem OFFER, REQUEST e ACK com IP, opção 003 = 10.20.0.1 e 006 = DNS do domínio. Se o cliente ficar em 169.254.x.x, verificar autorização no AD, escopo esgotado (`Get-DhcpServerv4ScopeStatistics`) ou relay ausente.'
    ],
    technicalReference: [
      'Hierarquia de Opções DHCP (maior → menor precedência): Reserva -> Classe -> Escopo -> Servidor',
      'PowerShell: Add-DhcpServerInDC | Add-DhcpServerv4Failover | Get-DhcpServerv4Lease | Get-DhcpServerv4ScopeStatistics | Export-DhcpServer.'
    ],
    examTraps: [
      'Se um servidor DHCP ingressado no domínio não for autorizado no AD, o serviço inicia mas NÃO distribui endereços IP aos clientes.',
      'Na hierarquia do DHCP Windows, opções configuradas na RESERVA ou no ESCOPO sobrescrevem as opções globais do SERVIDOR.',
      'Em DHCP Failover, os dois servidores devem estar com relógio sincronizado e escopo idêntico; configurações de escopo não sincronizam automaticamente sem acionar Replicate.'
    ],
    keyTerms: [
      'Lease: concessão temporária do IP; o cliente tenta renovar com o próprio servidor em T1 (50%) e com qualquer servidor em T2 (87,5%)',
      'DORA: Discover, Offer, Request, Ack — as 4 mensagens trocadas em UDP 67/68 para obter o lease',
      'Relay agent (ip helper-address): encaminha o broadcast DHCP em unicast ao servidor de outra sub-rede, preenchendo o GIADDR',
      'MCLT: tempo máximo que um parceiro de failover pode estender um lease além do conhecido pelo outro (padrão 1 h)',
      'APIPA: endereço 169.254.0.0/16 autoatribuído pelo Windows quando nenhum servidor DHCP responde',
      'DHCP Snooping: recurso do switch que só aceita respostas DHCP em portas confiáveis, bloqueando Rogue DHCP em L2'
    ]
  },
  '3.2.5': {
    itemId: '3.2.5',
    highYieldSummary: [
      'Definição e escopo: GPOs (Group Policy Objects) são objetos de configuração centralizada no Active Directory compostos por metadados no diretório (GPC) e arquivos/templates no SYSVOL (GPT). Aplicam-se segundo a hierarquia LSDOU (Local, Site, Domínio e OUs) para padronizar segurança, scripts e preferências em estações e servidores Windows.',
      'Ordem de Processamento (LSDOU): Local -> Site -> Domínio -> OU (Organizational Unit) pai -> OU filha. A ÚLTIMA configuração aplicada prevalece em caso de conflito; configurações de Computador aplicam-se no boot e de Usuário no logon (refresh em background ~90 min +/- 30 min em estações/servidores membros; 5 min em DCs).',
      'Exceções de Herança: Block Inheritance bloqueia herança de GPOs de níveis superiores naquela OU; Enforced (No Override) na GPO superior ignora qualquer Block Inheritance e impede sobrescrita por GPOs inferiores.',
      'Filtragem e Escopo: Security Filtering (exige permissão Read + Apply Group Policy; atenção: objetos de Computador também leem políticas em Authenticated Users); WMI (Windows Management Instrumentation) Filtering (filtra por versão de SO, arquitetura, hardware); Loopback Processing (aplica políticas de Usuário da GPO do computador em modo Replace ou Merge para servidores RDS — Remote Desktop Services — / Kiosk).',
      'Armazenamento da GPO: dividida em GPC (Group Policy Container no AD/`ntds.dit` com versão/status) e GPT (Group Policy Template no SYSVOL com arquivos `.pol`, scripts e preferências).',
      'Ferramentas e ADMX Central Store: manter arquivos `.admx`/`.adml` em `\\\\dominio\\SYSVOL\\dominio\\Policies\\PolicyDefinitions` (Central Store) para edição uniforme; auditar com `gpresult /r` (ou `/h relatorio.html`) e forçar atualização com `gpupdate /force`.',
      'Exemplo operacional: em um servidor de terminais clínicos (**RDS**), vincula-se uma GPO à OU dos servidores habilitando **Loopback Processing em modo Merge** para restringir sessões de usuário apenas nesse host, com filtro **Security Filtering** para o grupo clínico mantendo **Authenticated Users** com permissão `Read`. Após aplicar `gpupdate /force`, o comando `gpresult /h C:\\gpo.html /f` confirma a ordem efetiva **LSDOU** e eventuais bloqueios herdados.'
    ],
    technicalReference: [
      'Precedência efetiva: Política Local -> Site -> Domínio -> OU -> Sub-OU -> Enforced (vence tudo, inclusive Block Inheritance)',
      'Comandos: gpupdate /force | gpresult /r | gpresult /h C:\\gpo.html /f | GPMC (Group Policy Modeling / Results).'
    ],
    examTraps: [
      'Na ordem LSDOU, quem é aplicado POR ÚLTIMO vence (OU filha vence Domínio), EXCETO quando uma GPO superior está marcada como ENFORCED.',
      'Remover "Authenticated Users" do Security Filtering sem conceder "Read" aos computadores quebra a aplicação de configurações de Usuário após MS16-072 (computador precisa ler o GPO).',
      'Block Inheritance NÃO bloqueia uma GPO configurada como Enforced (No Override).'
    ],
    keyTerms: [
      'Ordem LSDOU: sequência de aplicação Local -> Site -> Domínio -> OU pai -> OU filha onde a última configuração vence',
      'Enforced vs Block Inheritance: imposição de GPO superior que ignora bloqueio de herança e impede sobrescrita (Enforced) versus bloqueio local na OU',
      'Security & WMI Filtering: restrição de escopo por ACL Read/Apply (Security) ou por consulta WQL ao sistema operacional/hardware (WMI)',
      'Loopback Processing: aplicação das políticas de usuário vinculadas à OU do computador (Replace ou Merge) em ambientes RDS/Kiosk',
      'Central Store (ADMX): repositório único em \\\\dominio\\SYSVOL\\dominio\\Policies\\PolicyDefinitions para modelos administrativos padronizados'
    ]
  },
  '3.2.6': {
    itemId: '3.2.6',
    highYieldSummary: [
      'Definição e escopo: a replicação do Active Directory mantém consistência eventual multi-master das partições do diretório entre todos os Domain Controllers usando números de sequência locais (USN), vetores de atualização e topologia calculada automaticamente pelo KCC. Diferencia conexões rápidas no mesmo Site de enlaces agendados e comprimidos entre Sites distintos.',
      'Modelo Multi-Master e Metadados: todos os DCs graváveis aceitam alterações identificadas por InvocationID (GUID que identifica a instância do banco de um DC), USN (Update Sequence Number) local e Version Number para resolução de conflitos (maior versão vence; empate resolve por timestamp e GUID/InvocationID).',
      'Replicação Intra-Site vs Inter-Site: Intra-Site ocorre rapidamente por notificação RPC (Remote Procedure Call) sobre IP sem compressão (~15 s); Inter-Site entre Sites distintos usa objetos Site Link (enlace lógico com custo, agenda e intervalo) com compressão (padrão 180 min, mínimo 15 min) via Bridgehead Servers (DCs ponto de contato entre sites).',
      'KCC (Knowledge Consistency Checker) e ISTG: o KCC roda a cada 15 min calculando automaticamente uma topologia em anel bidirecional (máximo 3 saltos intra-site); o ISTG (Inter-Site Topology Generator) escolhe os Bridgehead Servers entre sites.',
      'Partições Replicadas: Schema e Configuration replicam para TODA a floresta; Domain replica apenas para os DCs do mesmo domínio; Application — DNS (Domain Name System) — replica conforme escopo definido (`DomainDnsZones` ou `ForestDnsZones`).',
      'Diagnóstico de Replicação: `repadmin /replsummary` verifica erros e deltas entre DCs; `repadmin /showrepl` exibe status por partição; `repadmin /syncall /AdeP` força sincronismo imediato (`/A` todas as partições, `/d` por DN, `/e` todos os sites, `/P` push).',
      'Exemplo operacional: após criar contas na matriz, o administrador precisa propagar imediatamente as mudanças para o DC da unidade remota ligada por um **Site Link** com intervalo padrão de `180 min`. O comando `repadmin /replsummary` confirma `0` falhas e `largest delta = 42m`, enquanto `repadmin /syncall /AdeP` dispara replicação imediata entre os **Bridgehead Servers** sem alterar manualmente as conexões geradas pelo **KCC**.'
    ],
    technicalReference: [
      'Intra-Site: RPC sobre IP, sem compressão, baseada em notificação (~15s) | Inter-Site: Site Links (custo + agenda), comprimida (~180 min padrão)',
      'CLI: repadmin /replsummary | repadmin /showrepl | repadmin /syncall /AdeP | nltest /dsgetsite.'
    ],
    examTraps: [
      'A partição de Domínio replica somente entre DCs do MESMO domínio (não para outros domínios da floresta); Schema e Configuration replicam para TODA a floresta.',
      'Replicação Inter-Site é COMPRIMIDA e agendada em Site Links; replicação Intra-Site NÃO comprime para economizar CPU.',
      'Nunca criar manualmente conexões de replicação no AD Sites and Services sem necessidade: o KCC pode ignorá-las ou não recalcular caminhos de falha.'
    ],
    keyTerms: [
      'USN (Update Sequence Number): contador local incremental por DC usado em conjunto com InvocationID para rastrear deltas de replicação',
      'Intra-Site vs Inter-Site: replicação por notificação (~15 s) sem compressão no mesmo site versus replicação agendada e comprimida via Site Links',
      'KCC / ISTG: processos automáticos que constroem o anel intra-site (KCC a cada 15 min) e elegem Bridgehead Servers entre sites (ISTG)',
      'Partições do AD: contextos de nomenclatura — Schema e Configuration (toda floresta), Domain (por domínio) e Application/DNS',
      'repadmin /replsummary: utilitário de linha de comando que resume atrasos, deltas e erros de replicação entre todos os DCs'
    ]
  },
  '3.2.7': {
    itemId: '3.2.7',
    highYieldSummary: [
      'Definição e escopo: os 5 papéis FSMO (Flexible Single Master Operations) definem autoridades únicas de escrita no Active Directory para operações críticas que não admitem conflito multi-master simultâneo. Dividem-se em 2 papéis únicos por floresta e 3 papéis por domínio, podendo ser transferidos graciosamente ou tomados à força (Seize) em falhas definitivas.',
      'Por que existem FSMO (Flexible Single Master Operations): apesar do modelo multi-master, 5 operações críticas do AD não toleram conflitos simultâneos e exigem um único DC autoritativo por vez.',
      '2 Papéis ÚNICOS na Floresta: Schema Master (controla modificações e extensões no esquema de classes/atributos — ex.: preparação para Exchange) e Domain Naming Master (controla adição/remoção de domínios e partições de aplicação na floresta).',
      '3 Papéis POR Domínio: PDC Emulator (sincronismo de tempo do domínio — e da floresta no domínio raiz — alterações imediatas de senha, bloqueio de contas e edição padrão de GPOs), RID Master (distribui blocos de Relative IDs aos DCs para criação única de SIDs — Security Identifiers) e Infrastructure Master (atualiza referências cross-domain de objetos).',
      'Regra do Infrastructure Master x Global Catalog: em ambientes multi-domínio, o Infrastructure Master NÃO deve ficar em um DC que seja Global Catalog (exceto se TODOS os DCs do domínio forem GC, houver apenas 1 domínio na floresta, ou se a Lixeira do AD / AD Recycle Bin estiver habilitada na floresta).',
      'Transfer vs Seize: Transfer (`Move-ADDirectoryServerOperationMasterRole`) move o papel graciosamente com o DC atual online; Seize (`-Force`) toma o papel em desastre definitivo quando o antigo detentor não voltará jamais (risco grave de conflito se voltar à rede).',
      'Exemplo operacional: antes de descomissionar o controlador antigo `DC01` que detinha todos os papéis, executa-se `netdom query fsmo` para auditar os detentores e `Move-ADDirectoryServerOperationMasterRole -Identity DC02 -OperationMasterRole SchemaMaster,DomainNamingMaster,PDCEmulator,RIDMaster,InfrastructureMaster` para realizar **Transfer** gracioso online. Caso `DC01` sofresse pane irreversível de hardware, aplicar-se-ia `-Force` (**Seize**), mantendo `DC01` permanentemente fora da rede.'
    ],
    technicalReference: [
      'Floresta (2): Schema Master + Domain Naming Master | Domínio (3): PDC Emulator + RID Master + Infrastructure Master',
      'CLI: netdom query fsmo | PowerShell: Move-ADDirectoryServerOperationMasterRole -Identity <DC> -OperationMasterRole PDCEmulator...'
    ],
    examTraps: [
      'São 2 papéis de FLORESTA e 3 de DOMÍNIO — questão clássica de prova pergunta quais são únicos por floresta.',
      'Após executar SEIZE em um papel FSMO (ex.: RID Master), o DC antigo falho NUNCA deve ser religado à rede sem antes ser formatado (risco de duplicação de SIDs/objetos).',
      'PDC Emulator é a fonte autoritativa de relógio (NTP) do domínio e recebe em tempo real tentativas de senha antes de outros DCs.'
    ],
    keyTerms: [
      'Schema Master & Domain Naming Master: os 2 papéis FSMO únicos por floresta (alteração de esquema e adição/remoção de domínios)',
      'PDC Emulator: papel FSMO por domínio responsável por relógio autoritativo, senhas imediatas, lockouts e edição de GPOs',
      'RID Master: papel FSMO por domínio que aloca blocos exclusivos de Relative IDs (RIDs) a cada DC para evitar SIDs duplicados',
      'Infrastructure Master: papel por domínio que atualiza referências entre domínios (não deve coexistir com GC em cenário multi-domínio parcial)',
      'Transfer vs Seize: transferência sincronizada com o detentor online versus tomada forçada em perda definitiva do DC original'
    ]
  },
  '3.2.8': {
    itemId: '3.2.8',
    highYieldSummary: [
      'Definição e escopo: Kerberos v5 (RFC 4120) é o protocolo padrão de autenticação mútua e Single Sign-On no Active Directory, operando nas portas TCP e UDP 88 sem trafegar a senha em claro pela rede. Baseia-se em tickets criptográficos emitidos pelo KDC (AS e TGS) vinculados a Service Principal Names (SPNs) e validados por timestamps.',
      'Arquitetura Kerberos v5 (RFC 4120): protocolo de autenticação mútua baseado em tickets criptografados na porta TCP/UDP 88; o KDC (Key Distribution Center) roda em cada Domain Controller combinando AS (Authentication Service) e TGS (Ticket Granting Service).',
      'Fluxo de Autenticação (AS -> TGS -> AP): 1) `AS_REQ`/`AS_REP` autentica o usuário e entrega o TGT (Ticket Granting Ticket, validade padrão 10 h) cifrado com a chave da conta `krbtgt` (conta especial de serviço do KDC); 2) `TGS_REQ`/`TGS_REP` troca o TGT por um Service Ticket (ST) específico; 3) `AP_REQ` apresenta o ST ao servidor de aplicação.',
      'SPN (Service Principal Name): identificador único que vincula um serviço (ex.: `HTTP/intranet.empresa.local`) à conta de serviço ou computador que o executa no AD para o KDC cifrar o Service Ticket com a chave correta.',
      'Clock Skew (Sincronia de Relógio): tickets possuem timestamps (carimbos de data/hora) para evitar ataques de replay; a tolerância máxima padrão no AD é de 5 minutos (desvio maior gera erro `KRB_AP_ERR_SKEW` e falha de logon).',
      'Delegação e Segurança: evitar Unconstrained Delegation (permite impersonation — personificação — ampla em qualquer serviço); preferir Constrained Delegation ou Resource-Based Constrained Delegation (RBCD); proteger a conta `krbtgt` trocando sua senha duas vezes em incidentes de Golden Ticket (forjamento arbitrário de TGTs).',
      'Exemplo operacional: ao acessar `https://prontuario.hosp.local`, a estação solicita um Service Ticket para `HTTP/prontuario.hosp.local`. Se o acesso cair inesperadamente para **NTLM** ou falhar, executa-se `setspn -X` para verificar SPNs duplicados entre duas contas e `klist` para inspecionar os tickets em cache (ou `klist purge` após corrigir o SPN); caso apareça `KRB_AP_ERR_SKEW`, verifica-se o relógio via `w32tm`.'
    ],
    technicalReference: [
      'Porta: TCP/UDP 88 (KDC) | TCP/UDP 464 (kpasswd) | Tolerância padrão de relógio (Clock Skew): 5 minutos',
      'CLI: klist (listar/limpar tickets com klist purge) | setspn -Q */nome (detectar SPNs duplicados).'
    ],
    examTraps: [
      'SPN DUPLICADO em duas contas no AD faz a autenticação Kerberos falhar silenciosamente e tentar fallback para NTLM.',
      'Autenticação Kerberos ocorre por NOME (FQDN/SPN); acessar um recurso pelo endereço IP faz o cliente cair em NTLM.',
      'O TGT é criptografado com o hash da conta especial KRBTGT do domínio (por isso comprometer krbtgt permite criar Golden Tickets).'
    ],
    keyTerms: [
      'KDC (AS + TGS): serviço de distribuição de chaves em cada DC na porta 88 que emite TGTs (AS) e Service Tickets (TGS)',
      'TGT vs Service Ticket (ST): bilhete inicial cifrado pela conta krbtgt (10 h padrão) trocado posteriormente por tickets específicos de cada serviço',
      'SPN (Service Principal Name): registro que associa um serviço/FQDN a uma conta no AD para cifragem do Service Ticket',
      'Clock Skew (5 min): diferença máxima de horário tolerada entre cliente e KDC antes da rejeição por KRB_AP_ERR_SKEW',
      'Conta krbtgt / Golden Ticket: conta raiz de cifragem dos TGTs cuja troca dupla de senha invalida tickets forjados após comprometimento'
    ]
  },
  '3.2.9': {
    itemId: '3.2.9',
    highYieldSummary: [
      'Definição e escopo: LDAP (Lightweight Directory Access Protocol — RFC 4511) é o protocolo padrão de consulta, modificação e autenticação em serviços de diretório como Active Directory e OpenLDAP. Opera sobre TCP 389 (com UDP 389 usado no AD para CLDAP/LDAP Ping), oferecendo proteção criptográfica por LDAPS (TCP 636) ou StartTLS e acesso multi-domínio via Global Catalog (TCP 3268/3269).',
      'Protocolo LDAP (RFC 4511): protocolo de aplicação cliente-servidor sobre TCP 389 (e UDP 389 para CLDAP/LDAP Ping de localização de DC no AD) para consulta, adição, modificação e autenticação (Bind) em serviços de diretório como Active Directory e OpenLDAP.',
      'Componentes de Nomenclatura (DN e RDN): DN (Distinguished Name) identifica univocamente o caminho completo do objeto na árvore — DIT (Directory Information Tree) — sendo seu segmento mais à esquerda o RDN (Relative Distinguished Name), composto por atributos padronizados: CN (Common Name), OU (Organizational Unit) e DC (Domain Component).',
      'LDAPS e StartTLS: LDAP puro na porta 389 trafega credenciais em texto claro no Simple Bind; LDAPS (TCP 636) abre túnel TLS (Transport Layer Security) direto e StartTLS promove conexão 389 para TLS — além de LDAP Signing (assinatura em sessões SASL — Simple Authentication and Security Layer) e Channel Binding (vinculação ao canal TLS no AD).',
      'Global Catalog LDAP: consultas em toda a floresta usam TCP 3268 (LDAP GC — Global Catalog) e TCP 3269 (LDAPS GC), retornando o subconjunto somente leitura de atributos definido no PAS (Partial Attribute Set) de todos os domínios.',
      'Operações e Filtros LDAP: Bind, Search (escopos Base, OneLevel e Subtree com filtros lógicos prefixados como `(&(objectClass=user)(sAMAccountName=ana))`), Compare, Add, Modify e Delete.',
      'Exemplo operacional: um sistema hospitalar legado configurado para autenticar usuários na porta `TCP 389` via Simple Bind expõe senhas em claro na rede interna. Migra-se a integração para **LDAPS (`TCP 636`)** validando o certificado da CA interna no servidor, com Base DN `OU=Assistencial,DC=hosp,DC=local` e filtro `(&(objectCategory=person)(objectClass=user)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))` para aceitar apenas contas ativas.'
    ],
    technicalReference: [
      'Portas: TCP/UDP 389 (LDAP) | TCP 636 (LDAPS) | TCP 3268 (GC LDAP) | TCP 3269 (GC LDAPS)',
      'Filtros comuns: (&(objectCategory=person)(objectClass=user)(!(userAccountControl:1.2.840.113556.1.4.803:=2))) -> usuários ativos.'
    ],
    examTraps: [
      'LDAP Simple Bind na porta 389 envia usuário e senha em TEXTO CLARO na rede (exige LDAPS 636 ou StartTLS).',
      'Operadores de filtro LDAP são prefixados: AND = (&(...)(...)), OR = (|(...)(...)), NOT = (!(...)).',
      'LDAPS (636) exige certificado X.509 válido (Server Authentication EKU) no Domain Controller e confiança na CA pelo cliente.'
    ],
    keyTerms: [
      'LDAP (389) vs LDAPS (636): protocolo em texto claro (salvo SASL/StartTLS) versus sessão encapsulada diretamente em TLS',
      'Global Catalog LDAP (3268/3269): portas de consulta somente leitura ao subconjunto PAS de todos os domínios da floresta',
      'DN e RDN (CN, OU, DC): caminho hierárquico completo único do objeto no diretório (DN) e seu componente identificador imediato (RDN)',
      'LDAP Signing & Channel Binding: controles do AD que exigem assinatura de integridade em tráfego LDAP e vinculação do token ao túnel TLS',
      'Filtros Prefixados LDAP: expressões booleanas em notação polonesa com operadores (&), (|) e (!) para consultas em escopo Base/OneLevel/Subtree'
    ]
  },
  '3.2.10': {
    itemId: '3.2.10',
    highYieldSummary: [
      'Definição e escopo: PowerShell é o ambiente de automação e linha de comando baseado em objetos .NET (plataforma de tipos estruturados) para administração local e remota (WinRM) do Windows Server e Active Directory. Elimina análise frágil de texto em scripts ao passar propriedades e métodos diretamente pelo pipeline entre cmdlets Verbo-Substantivo.',
      'Paradigma Orientado a Objetos: ao contrário de shells baseados em texto puro, o pipeline do PowerShell passa OBJETOS .NET completos (propriedades e métodos) entre cmdlets (comandos nativos no formato Verbo-Substantivo, ex.: `Get-ADUser`, `Set-ADAccountPassword`).',
      'Cmdlets essenciais de AD (módulo ActiveDirectory) e GPO (módulo GroupPolicy): `Get-ADUser`, `New-ADUser`, `Set-ADUser`, `Unlock-ADAccount`, `Search-ADAccount`, `Get-ADComputer`, `Get-ADGroupMember` e `Get-GPO` / `Backup-GPO`.',
      'Manipulação de Pipeline: `Where-Object` (filtragem), `Select-Object` (seleção de propriedades), `Sort-Object`, `ForEach-Object`, `Measure-Object` e exportação/formatação com `Export-Csv -NoTypeInformation`, `ConvertTo-Json` e `Format-Table`.',
      'PowerShell Remoting (WinRM): execução remota via WinRM (Windows Remote Management / protocolo WS-Man — Web Services-Management) usando TCP 5985 (HTTP com criptografia Kerberos/Negotiate) e TCP 5986 (HTTPS), com cmdlets `Enter-PSSession` (interativo) e `Invoke-Command` (paralelo em múltiplos hosts).',
      'Execution Policy e Segurança: `ExecutionPolicy` (`Restricted`, `AllSigned`, `RemoteSigned`, `Bypass`) previne execução acidental de scripts (não é barreira forte de segurança); boas práticas incluem JEA (Just Enough Administration — delegação restrita sem privilégio administrativo total) e Script Block Logging (registro integral de blocos executados no Event Log).',
      'Exemplo operacional: em auditoria de contas inativas há mais de 90 dias, o administrador executa `Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly | Select-Object SamAccountName,LastLogonDate | Export-Csv C:\\audit\\inativos.csv -NoTypeInformation` (evitando `Format-Table` antes da exportação). Para coletar o status do serviço DNS em dez servidores de uma só vez, usa-se `Invoke-Command -ComputerName $dcs -ScriptBlock { Get-Service DNS }` via **WinRM (`TCP 5985`)**.'
    ],
    technicalReference: [
      'WinRM: TCP 5985 (HTTP) / TCP 5986 (HTTPS) | Habilitar: Enable-PSRemoting -Force | Descobrir objetos: Get-Member (gm)',
      'AD típico: Get-ADUser -Filter \'Enabled -eq $true\' -Properties LastLogonDate | Export-Csv usuarios.csv -NoTypeInformation.'
    ],
    examTraps: [
      'Format-Table / Format-List convertem objetos em objetos de formatação visual: NUNCA usá-los antes de Export-Csv ou Where-Object no pipeline.',
      'LastLogon NÃO replica entre Domain Controllers; LastLogonTimestamp (e LastLogonDate no PowerShell) replica (com atraso intencional de até ~14 dias).',
      'WinRM usa TCP 5985/5986 (não confunda com RDP 3389 ou SMB 445).'
    ],
    keyTerms: [
      'Pipeline de Objetos .NET: encadeamento de cmdlets que preserva propriedades e métodos estruturados até a saída final',
      'WinRM (TCP 5985/5986): protocolo WS-Man de PowerShell Remoting com Enter-PSSession (interativo) e Invoke-Command (paralelo)',
      'Format-Table vs Export-Csv: cmdlets Format-* destroem a estrutura original do objeto e não devem preceder Export-Csv/Where-Object',
      'LastLogon vs LastLogonTimestamp: atributo local não replicado (LastLogon) versus atributo replicado com atraso controlado (LastLogonDate)',
      'JEA / ExecutionPolicy: delegação de comandos restritos via endpoints WinRM (JEA) e política contra execução acidental de scripts'
    ]
  },
  '3.2.11': {
    itemId: '3.2.11',
    highYieldSummary: [
      'Definição e escopo: o troubleshooting de Windows Server e Active Directory combina ferramentas nativas de diagnóstico de DCs (`dcdiag`), auditoria de replicação (`repadmin`), validação de canal seguro e localização (`nltest`), verificação de sincronia horária (`w32tm`), consulta DNS (`nslookup`) e análise correlacionada no Event Viewer. Permite isolar rapidamente falhas de DNS, replicação, GPO, Kerberos ou relação de confiança.',
      'Diagnóstico Integral de DCs (`dcdiag`): verifica conectividade, replicação, registros DNS (`_msdcs`), saúde do SYSVOL/Netlogon, papéis FSMO e serviços críticos (`dcdiag /v /c /e` aplica `/v` detalhado, `/c` testes abrangentes e `/e` em toda a floresta).',
      'Auditoria de Replicação e Sites: `repadmin /replsummary` identifica parceiros em falha e backlog (pendência acumulada de replicação); `nltest /dsgetdc:<domínio>` e `nltest /sc_verify:<domínio>` validam localização do DC e canal seguro (Secure Channel) de estações.',
      'Análise de Event Viewer e Kerberos: investigar logs `Directory Service`, `DNS Server`, `DFS Replication` e `Security` — Event IDs `4624` (logon bem-sucedido), `4625` (falha de logon), `4740` (conta bloqueada) e `4771` (falha de pré-autenticação Kerberos).',
      'Troubleshooting de DNS e Relógio: validar resolução SRV com `nslookup -type=srv _ldap._tcp.dc._msdcs.<domínio>` e verificar atraso de hora entre DC e cliente com `w32tm /query /status` e `w32tm /stripchart`.',
      'Correção de Canal Seguro e SYSVOL: quebra de relação de confiança de máquina ("trust relationship between this workstation and the primary domain failed") resolve-se com `Test-ComputerSecureChannel -Repair` no PowerShell sem precisar remover/reingressar no domínio.',
      'Exemplo operacional: diante de bloqueios recorrentes da conta `dr.carlos` e erro de confiança em uma estação de triagem, o analista consulta o Event ID **`4740`** no **PDC Emulator** (identificando no campo *Caller Computer Name* um serviço antigo rodando em `WS-LAB04`), executa `Test-ComputerSecureChannel -Repair` na estação com falha de canal seguro e valida a saúde dos serviços e registros `_msdcs` do domínio com `dcdiag /test:dns`.'
    ],
    technicalReference: [
      'Comandos chave: dcdiag /test:dns | repadmin /replsummary | nltest /dsgetdc:dominio | w32tm /query /status | Test-ComputerSecureChannel -Repair',
      'Event IDs Security: 4624 (Logon OK) | 4625 (Logon Falhou) | 4740 (Account Lockout — aponta Caller Computer Name).'
    ],
    examTraps: [
      'Event ID 4740 (bloqueio de conta) deve ser investigado no PDC EMULATOR para identificar no campo "Caller Computer Name" a origem real do bloqueio.',
      'w32tm /resync falha se o PDC Emulator estiver sincronizando consigo mesmo sem fonte NTP externa confiável (ou se o desvio ultrapassar muito o limite sem /force).',
      'A maioria das falhas aparentemente "do Active Directory" (ingresso, GPO, replicação) tem raiz em DNS mal configurado ou horário dessincronizado.'
    ],
    keyTerms: [
      'dcdiag: ferramenta completa de verificação de saúde de Domain Controllers (DNS, SYSVOL, FSMO, replicação e serviços)',
      'nltest / Test-ComputerSecureChannel: utilitários para testar localização de DCs e diagnosticar/reparar o canal seguro da máquina no domínio',
      'Event ID 4740 (PDC Emulator): evento de bloqueio de conta registrado autoritativamente no PDC Emulator indicando a estação causadora',
      'Event ID 4771: registro de falha na pré-autenticação Kerberos causado por senha incorreta, conta expirada ou dessincronia horária',
      'w32tm /stripchart: comando que mede o desvio de relógio em tempo real entre cliente/DC e um servidor NTP ou PDC Emulator'
    ]
  }
};
