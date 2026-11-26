import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_3: Record<string, StudyGuide> = {
  '3.1.1': {
    itemId: '3.1.1',
    highYieldSummary: [
      'Processos vs Threads: Processo é uma instância em execução com espaço de endereçamento isolado (PCB); Threads são unidades de execução dentro do processo que compartilham código, heap e arquivos abertos, mantendo registradores e pilha próprios (menor custo de troca de contexto).',
      'Estados e Escalonamento: estados básicos Novo -> Pronto -> Executando -> Bloqueado (aguardando E/S) -> Finalizado. Escalonadores (preemptivos vs não-preemptivos) gerenciam fatias de CPU (time quantum) priorizando responsividade e throughput.',
      'Gestão de Memória Virtual: traduz endereços virtuais em físicos usando tabelas de páginas e TLB (Translation Lookaside Buffer) com apoio da MMU; paginação divide memória em páginas/quadros fixos eliminando fragmentação externa.',
      'Page Fault e Thrashing: ocorre Page Fault quando a página referenciada não está na RAM e precisa ser buscada no pagefile.sys/swap; excesso de page faults contínuos gera Thrashing (CPU ociosa esperando disco).',
      'Gerenciamento de Entrada e Saída (E/S): comunicação via Polling, Interrupções (IRQ) ou DMA (Direct Memory Access — transfere blocos direto entre dispositivo e RAM sem ocupar a CPU a cada byte) com buffering e caching.'
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
    keyTerms: ['Processos vs Threads', 'Escalonamento Preemptivo', 'Memória Virtual / Paginação', 'TLB / MMU / Page Fault', 'Thrashing', 'DMA']
  },
  '3.1.2': {
    itemId: '3.1.2',
    highYieldSummary: [
      'Serviços de Diretório e Active Directory (AD DS): banco hierárquico distribuído otimizado para muitas leituras e autenticação centralizada, organizando identidades, computadores e recursos corporativos.',
      'Estrutura Lógica do AD: Floresta (fronteira máxima de segurança, compartilha Schema e Global Catalog) -> Árvore (namespace DNS contíguo) -> Domínio (fronteira de replicação/políticas) -> Unidades Organizacionais (OUs — delegação administrativa e aplicação de GPOs).',
      'Estrutura Física do AD: Sites (sub-redes conectadas por links rápidos) e Domain Controllers (DCs — replicam partições entre si). Sites controlam tráfego de replicação e direcionamento de logon do cliente para o DC mais próximo.',
      'LDAP (Lightweight Directory Access Protocol): padrão aberto (RFC 4511) que estrutura entradas em árvores (DIT) identificadas por Distinguished Name (DN) usando atributos como CN, OU e DC.',
      'Interoperabilidade Windows/Linux/Sistemas: integração via LDAP/LDAPS, Kerberos (realm/SPN/keytab via SSSD/Winbind), RADIUS (NPS), SAML/OIDC (AD FS/Entra) e SMB/CIFS para compartilhamento de arquivos.'
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
    keyTerms: ['Floresta vs Domínio', 'OU vs Container', 'Sites e Sub-redes', 'Global Catalog (3268)', 'LDAP (DIT/DN)', 'Interoperabilidade (SSSD/Kerberos)']
  },
  '3.2.1': {
    itemId: '3.2.1',
    highYieldSummary: [
      'Arquitetura do AD DS no Windows Server: base de dados ESE armazenada em C:\\Windows\\NTDS\\ntds.dit (dividida em partições Schema, Configuration, Domain e Application/DNS) e pasta SYSVOL para scripts/GPOs.',
      'Domain Controllers (DC) e RODC: DCs padrão são multi-master (todos gravam alterações, exceto papéis FSMO); RODC (Read-Only Domain Controller) é implantado em filiais sem segurança física, sem replicar hashes sensíveis por padrão.',
      'SYSVOL e Replicação DFSR: armazena modelos de GPO (GPT) e scripts de logon; ambientes modernos usam DFSR (Distributed File System Replication) em vez do legado obsoleto FRS.',
      'Hardening de DCs: Tiering Administrativo (Tier 0 exclusivo para DCs/PKI/admins de domínio), bloqueio de acesso à Internet/navegação no DC, uso de Server Core e proteção de credenciais (Credential Guard / Protected Users).',
      'Backup e Restauração do AD: exige System State Backup; restauração Non-Authoritative (padrão, recebe atualizações mais novas dos parceiros) vs Authoritative (via ntdsutil para recuperar OUs/usuários deletados forçando versão superior).'
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
    keyTerms: ['ntds.dit', 'SYSVOL (DFSR)', 'RODC', 'System State / DSRM', 'Authoritative Restore', 'USN Rollback']
  },
  '3.2.2': {
    itemId: '3.2.2',
    highYieldSummary: [
      'Contas e SID (Security Identifier): todo usuário, grupo e computador possui um SID único imutável e um GUID; renomear uma conta altera o nome exibido/SAMAccountName, mantendo o SID e todas as permissões intactas.',
      'Escopos de Grupos e Estratégia AGDLP: Domain Local (permissões em recursos do domínio), Global (agrupa usuários do mesmo domínio) e Universal (agrupa de toda a floresta — replicado no GC). Estratégia recomendada: Accounts -> Global -> Domain Local -> Permissions.',
      'Trusts (Relações de Confiança): dentro de uma mesma floresta são bidirecionais e transitivas por padrão; trusts externos entre florestas distintas são não-transitivos (salvo Forest Trust, que é transitivo entre as duas florestas).',
      'Global Catalog (GC): responde consultas de objetos em toda a floresta (porta 3268/3269), valida associação a Grupos Universais durante o logon e resolve UPNs (usuario@empresa.com).',
      'Segurança de Contas: grupo Protected Users (impede NTLM, força Kerberos AES e bloqueia delegação), Managed Service Accounts (gMSA — rotação automática de senha de serviços) e Fine-Grained Password Policies (PSO).'
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
    keyTerms: ['SID vs GUID', 'AGDLP / AGUDLP', 'Grupos Global/Domain Local/Universal', 'Trusts (Transitivos)', 'gMSA', 'Protected Users']
  },
  '3.2.3': {
    itemId: '3.2.3',
    highYieldSummary: [
      'Dependência Crítica DNS <-> AD: o Active Directory depende inteiramente do DNS para localizar Domain Controllers, Global Catalogs e servidores Kerberos via registros SRV na zona _msdcs.<floresta>.',
      'Zonas Integradas ao AD (AD-Integrated Zones): armazenam registros DNS dentro de partições de aplicação do ntds.dit (DomainDnsZones e ForestDnsZones), permitindo replicação multi-master segura e atualizações dinâmicas seguras (Secure Only).',
      'Registros SRV essenciais: _ldap._tcp.dc._msdcs.<domínio> (localiza DCs), _kerberos._tcp.dc._msdcs.<domínio> (KDC) e _gc._tcp.<floresta> (Global Catalog).',
      'Encaminhadores vs Root Hints: Forwarders (ou Conditional Forwarders para domínios parceiros/trusts) repassam consultas externas a servidores designados; Root Hints iniciam resolução iterativa a partir dos servidores raiz (.).',
      'Aging e Scavenging: limpam registros DNS dinâmicos antigos (stale records) que já expiraram (No-Refresh + Refresh intervals), evitando que entradas antigas apontem para IPs errados.'
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
    keyTerms: ['AD-Integrated DNS', 'Registros SRV (_msdcs)', 'Secure Dynamic Updates', 'Conditional Forwarder', 'DNS Scavenging']
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
      'Ordem de Processamento (LSDOU): Local -> Site -> Domínio -> OU pai -> OU filha. A ÚLTIMA configuração aplicada prevalece em caso de conflito; configurações de Computador aplicam-se no boot e de Usuário no logon (refresh em background ~90 min +-30 min).',
      'Exceções de Herança: Block Inheritance bloqueia herança de GPOs de níveis superiores naquela OU; Enforced (No Override) na GPO superior ignora qualquer Block Inheritance e impede sobrescrita por GPOs inferiores.',
      'Filtragem e Escopo: Security Filtering (exige permissão Read + Apply Group Policy; atenção: objetos de Computador também leem políticas em Authenticated Users); WMI Filtering (filtra por versão de SO, arquitetura, hardware); Loopback Processing (Replace/Merge para servidores RDS/Kiosk).',
      'Armazenamento da GPO: dividida em GPC (Group Policy Container no AD/ntds.dit com versão/status) e GPT (Group Policy Template no SYSVOL com arquivos .pol, scripts e preferências).',
      'Ferramentas e ADMX Central Store: manter arquivos .admx/.adml em \\\\dominio\\SYSVOL\\dominio\\Policies\\PolicyDefinitions (Central Store) para edição uniforme; auditar com gpresult /r (ou /h relatorio.html) e forçar com gpupdate /force.'
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
    keyTerms: ['Ordem LSDOU', 'Enforced vs Block Inheritance', 'Security & WMI Filtering', 'Loopback Processing', 'Central Store (ADMX)', 'gpupdate / gpresult']
  },
  '3.2.6': {
    itemId: '3.2.6',
    highYieldSummary: [
      'Modelo Multi-Master e Metadados: todos os DCs graváveis aceitam alterações identificadas por InvocationID, USN (Update Sequence Number) local e Version Number para resolução de conflitos (maior versão vence; empate resolve por timestamp/GUID).',
      'Replicação Intra-Site vs Inter-Site: Intra-Site ocorre rapidamente por notificação RPC sobre IP sem compressão (~15s); Inter-Site entre Sites distintos usa objetos Site Link com agendamento, custo e compressão (padrão 180 min, mínimo 15 min) via Bridgehead Servers.',
      'KCC (Knowledge Consistency Checker) e ISTG: o KCC roda a cada 15 min calculando automaticamente uma topologia em anel bidirecional (máximo 3 saltos intra-site); o ISTG (Inter-Site Topology Generator) escolhe Bridgehead Servers entre sites.',
      'Partições Replicadas: Schema e Configuration replicam para TODA a floresta; Domain replica apenas para os DCs do mesmo domínio; Application (DNS) replica conforme escopo definido.',
      'Diagnóstico de Replicação: repadmin /replsummary verifica erros e deltas entre DCs; repadmin /showrepl exibe status por partição; repadmin /syncall /AdeP força sincronismo imediato.'
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
    keyTerms: ['USN / Multi-Master', 'Intra-Site vs Inter-Site', 'KCC / ISTG / Bridgehead', 'Site Links', 'repadmin /replsummary', 'Partições AD']
  },
  '3.2.7': {
    itemId: '3.2.7',
    highYieldSummary: [
      'Por que existem FSMO (Flexible Single Master Operations): apesar de multi-master, 5 operações críticas do AD não toleram conflitos simultâneos e exigem um único DC autoritativo por vez.',
      '2 Papéis ÚNICOS na Floresta: Schema Master (controla modificações/extensões no esquema de classes/atributos — ex.: instalação de Exchange) e Domain Naming Master (controla adição/remoção de domínios e partições de aplicação na floresta).',
      '3 Papéis POR Domínio: PDC Emulator (sincronismo de tempo da floresta, alterações imediatas de senha, bloqueio de contas e edição padrão de GPOs), RID Master (distribui blocos de Relative IDs aos DCs para criação única de SIDs) e Infrastructure Master (atualiza referências cross-domain de objetos).',
      'Regra do Infrastructure Master x Global Catalog: em ambientes multi-domínio, o Infrastructure Master NÃO deve ficar em um DC que seja Global Catalog (exceto se TODOS os DCs do domínio forem GC, houver apenas 1 domínio na floresta, ou se a Lixeira do AD / AD Recycle Bin estiver habilitada na floresta).',
      'Transfer vs Seize: Transfer (Move-ADDirectoryServerOperationMasterRole) move o papel graciosamente com o DC atual online; Seize (-Force) toma o papel em desastre definitivo quando o antigo detentor não voltará jamais (risco grave se voltar à rede).'
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
    keyTerms: ['Schema Master', 'Domain Naming Master', 'PDC Emulator', 'RID Master', 'Infrastructure Master', 'Transfer vs Seize']
  },
  '3.2.8': {
    itemId: '3.2.8',
    highYieldSummary: [
      'Arquitetura Kerberos v5 (RFC 4120): protocolo de autenticação mútua baseado em tickets criptografados na porta TCP/UDP 88; o KDC (Key Distribution Center) roda em cada Domain Controller combinando AS (Authentication Service) e TGS (Ticket Granting Service).',
      'Fluxo de Autenticação (AS -> TGS -> AP): 1) AS_REQ/AS_REP autentica usuário e entrega TGT (Ticket Granting Ticket, validade padrão 10h) cifrado com a chave da conta krbtgt; 2) TGS_REQ/TGS_REP troca TGT por Service Ticket (ST) específico; 3) AP_REQ apresenta o ST ao servidor de aplicação.',
      'SPN (Service Principal Name): identificador único que vincula um serviço (ex.: HTTP/intranet.empresa.local) à conta de serviço/computador que o executa no AD para o KDC cifrar o Service Ticket corretamente.',
      'Clock Skew (Sincronia de Relógio): tickets possuem timestamps para evitar ataques de replay; tolerância máxima padrão no AD é de 5 minutos (desvio maior gera erro KRB_AP_ERR_SKEW e falha de logon).',
      'Delegação e Segurança: evitar Unconstrained Delegation (permite impersonation ampla); preferir Constrained Delegation ou Resource-Based Constrained Delegation (RBCD); proteger conta krbtgt trocando sua senha duas vezes em incidentes (Golden Ticket).'
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
    keyTerms: ['KDC (AS + TGS)', 'TGT vs Service Ticket', 'Porta 88', 'SPN (setspn)', 'Clock Skew (5 min)', 'krbtgt / Golden Ticket']
  },
  '3.2.9': {
    itemId: '3.2.9',
    highYieldSummary: [
      'Protocolo LDAP (RFC 4511): protocolo de aplicação cliente-servidor sobre TCP/UDP 389 para consulta, adição, modificação e autenticação (Bind) em serviços de diretório como Active Directory e OpenLDAP.',
      'Componentes de Nomenclatura (DN e RDN): DN (Distinguished Name) identifica univocamente o caminho completo do objeto na árvore (DIT), composto por atributos padronizados: CN (Common Name), OU (Organizational Unit) e DC (Domain Component).',
      'LDAPS e StartTLS: LDAP puro na porta 389 trafega credenciais em texto claro (no Simple Bind); LDAPS (TCP 636) abre túnel TLS direto e StartTLS promove conexão 389 para TLS (além de LDAP Signing / Channel Binding no AD).',
      'Global Catalog LDAP: consultas em toda a floresta usam TCP 3268 (LDAP GC) e TCP 3269 (LDAPS GC), retornando subconjunto de atributos indexados de todos os domínios.',
      'Operações e Filtros LDAP: Bind, Search (escopos Base, OneLevel, Subtree + filtros lógicos prefixados como (&(objectClass=user)(sAMAccountName=ana))), Compare, Add, Modify e Delete.'
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
    keyTerms: ['TCP 389 vs LDAPS 636', 'GC 3268 / 3269', 'DN / CN / OU / DC', 'Simple Bind vs SASL', 'Filtros LDAP']
  },
  '3.2.10': {
    itemId: '3.2.10',
    highYieldSummary: [
      'Paradigma Orientado a Objetos: ao contrário de shells baseados em texto puro, o pipeline do PowerShell passa OBJETOS .NET completos (propriedades e métodos) entre cmdlets no formato Verbo-Substantivo (ex.: Get-ADUser, Set-ADAccountPassword).',
      'Cmdlets essenciais de AD (módulo ActiveDirectory): Get-ADUser, New-ADUser, Set-ADUser, Unlock-ADAccount, Search-ADAccount, Get-ADComputer, Get-ADGroupMember e Get-GPO / Backup-GPO.',
      'Manipulação de Pipeline: Where-Object (filtragem), Select-Object (seleção de propriedades), Sort-Object, ForEach-Object, Measure-Object e exportação/formatação com Export-Csv -NoTypeInformation, ConvertTo-Json e Format-Table.',
      'PowerShell Remoting (WinRM): execução remota via WS-Man usando TCP 5985 (HTTP com criptografia Kerberos/Negotiate) e TCP 5986 (HTTPS), com cmdlets Enter-PSSession (interativo) e Invoke-Command (paralelo em múltiplos hosts).',
      'Execution Policy e Segurança: ExecutionPolicy (Restricted, AllSigned, RemoteSigned, Bypass) previne execução acidental de scripts (não é barreira forte de segurança); boas práticas incluem JEA (Just Enough Administration) e Script Block Logging.'
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
    keyTerms: ['Pipeline de Objetos .NET', 'Verbo-Substantivo', 'Get-ADUser / Search-ADAccount', 'WinRM (5985/5986)', 'ExecutionPolicy', 'Format-* vs Export-Csv']
  },
  '3.2.11': {
    itemId: '3.2.11',
    highYieldSummary: [
      'Diagnóstico Integral de DCs (dcdiag): verifica conectividade, replicação, registros DNS (_msdcs), saúde do SYSVOL/Netlogon, papéis FSMO e serviços críticos (dcdiag /v /c /e testa toda a floresta).',
      'Auditoria de Replicação e Sites: repadmin /replsummary identifica parceiros em falha e backlog; nltest /dsgetdc:<domínio> e nltest /sc_verify:<domínio> validam localização do DC e canal seguro (Secure Channel) de estações.',
      'Análise de Event Viewer e Kerberos: investigar logs "Directory Service", "DNS Server", "DFS Replication" e "Security" (Event IDs 4624 logon ok, 4625 falha logon, 4740 conta bloqueada, 4771 pré-auth Kerberos).',
      'Troubleshooting de DNS e Relógio: validar resolução SRV com nslookup -type=srv _ldap._tcp.dc._msdcs.<domínio> e verificar atraso de hora entre DC e cliente com w32tm /query /status e w32tm /stripchart.',
      'Correção de Canal Seguro e SYSVOL: quebra de relação de confiança de máquina ("trust relationship failed") resolve-se com Test-ComputerSecureChannel -Repair no PowerShell sem precisar remover/reingressar no domínio.'
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
    keyTerms: ['dcdiag', 'repadmin', 'nltest / Secure Channel', 'Event IDs (4624/4625/4740)', 'w32tm (NTP AD)', 'nslookup SRV']
  }
};
