import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_4: Record<string, StudyGuide> = {
  '4.1.1': {
    itemId: '4.1.1',
    highYieldSummary: [
      'Componentes da Arquitetura de E-mail: MUA (Mail User Agent — cliente Outlook/Thunderbird/webmail), MSA (Mail Submission Agent — recebe envio autenticado na porta 587), MTA (Mail Transfer Agent — roteia via SMTP entre servidores na porta 25) e MDA (Mail Delivery Agent — grava na caixa postal).',
      'Protocolo SMTP (RFC 5321): realiza envio/transferência de mensagens; porta 25 (servidor-servidor / relay), porta 587 (submissão autenticada com STARTTLS — recomendada) e porta 465 (SMTPS / TLS implícito).',
      'POP3 vs IMAP: POP3 (TCP 110 / POP3S 995) baixa mensagens para o cliente (por padrão removendo do servidor, sem sincronismo de pastas); IMAP (TCP 143 / IMAPS 993) mantém as mensagens e múltiplas pastas sincronizadas bidirecionalmente no servidor.',
      'Registros MX (Mail Exchanger): registros DNS que indicam o(s) FQDN(s) dos MTAs receptores do domínio acompanhados de preferência numérica — quanto MENOR o número, MAIOR a prioridade (ex.: MX 10 é tentado antes de MX 20).',
      'Segurança de Transporte SMTP: STARTTLS promove conexão SMTP em claro para TLS oportunístico (ou obrigatório entre parceiros com MTA-STS / DANE) evitando eavesdropping em trânsito.'
    ],
    technicalReference: [
      'Portas: SMTP=25 | Submission=587 (STARTTLS) | SMTPS=465 | POP3=110/995 | IMAP=143/993',
      'Comandos SMTP: EHLO -> STARTTLS -> AUTH LOGIN -> MAIL FROM: -> RCPT TO: -> DATA -> QUIT.'
    ],
    examTraps: [
      'No registro MX, preferência numérica MENOR significa MAIOR prioridade (MX 5 vence MX 10).',
      'Registro MX nunca deve apontar para um endereço IP direto nem para um CNAME — deve apontar para um registro A/AAAA.',
      'POP3 não sincroniza pastas enviadas/rascunhos entre múltiplos dispositivos (papel do IMAP ou Exchange/ActiveSync).'
    ],
    keyTerms: ['MUA / MSA / MTA / MDA', 'SMTP (25 / 587 / 465)', 'POP3 (110/995) vs IMAP (143/993)', 'Registros MX', 'STARTTLS']
  },
  '4.1.2': {
    itemId: '4.1.2',
    highYieldSummary: [
      'SPF (Sender Policy Framework — RFC 7208): registro DNS tipo TXT (v=spf1 ...) que lista os IPs/redes/hosts autorizados a enviar e-mails em nome do domínio do envelope (MAIL FROM / Return-Path), terminando com ~all (softfail) ou -all (fail).',
      'DKIM (DomainKeys Identified Mail — RFC 6376): adiciona assinatura criptográfica no cabeçalho DKIM-Signature gerada com chave privada do servidor remetente; o destinatário valida usando a chave pública publicada em TXT (<seletor>._domainkey.<domínio>).',
      'DMARC (RFC 7489): publicado em _dmarc.<domínio> (v=DMARC1; p=none|quarantine|reject; rua=...), exige ALINHAMENTO entre o domínio visível no cabeçalho "From:" e o domínio validado por SPF e/ou DKIM, além de gerar relatórios XML.',
      'Mecanismos Antispam complementares: listas RBL/DNSBL de reputação de IP, Greylisting (rejeição temporária 4xx), análise de conteúdo/heurística, verificação de PTR/FCrDNS (reverso coincidente com EHLO) e quarentena.',
      'Proteção combinada: SPF sozinho quebra em encaminhamentos (forwarding) e não protege o "From:" visível ao usuário; DKIM sobrevive a encaminhamentos desde que corpo/headers assinados não mudem; DMARC une ambos protegendo contra phishing/spoofing.'
    ],
    technicalReference: [
      'DNS TXT: SPF (@ v=spf1 ip4:... -all) | DKIM (sel._domainkey v=DKIM1; k=rsa; p=...) | DMARC (_dmarc v=DMARC1; p=reject; rua=mailto:...)',
      'Limites RFC: SPF permite no máximo 10 consultas (lookups) DNS (include/a/mx/redirect) — exceder gera PermError.'
    ],
    examTraps: [
      'SPF valida o domínio do envelope (MAIL FROM / Return-Path), NÃO o cabeçalho "From:" exibido ao usuário — quem amarra o "From:" visível é o alinhamento DMARC.',
      'Política DMARC "p=none" apenas monitora/envia relatórios sem bloquear ou colocar spams em quarentena.',
      'Exceder 10 lookups DNS no registro SPF causa falha permanente (PermError).'
    ],
    keyTerms: ['SPF (TXT)', 'DKIM (_domainkey)', 'DMARC (Alinhamento From:)', 'p=none/quarantine/reject', 'Antispam / RBL']
  },
  '4.2.1': {
    itemId: '4.2.1',
    highYieldSummary: [
      'Arquitetura Microsoft Exchange Server moderna (2016/2019/SE): consolida funções em apenas duas Server Roles principais — Mailbox Server (armazena bancos .EDB, Client Access HTTP/MAPI/OWA/EWS, Transport e Unified Messaging) e Edge Transport Server (opcional na DMZ).',
      'Mailbox Server: executa o Frontend Transport (proxy SMTP na porta 25), Transport Service (roteamento e filas), Mailbox Transport e os serviços de acesso de cliente (HTTPS 443 proxy para OWA, ECP, EWS, ActiveSync e MAPI over HTTP).',
      'Edge Transport Server: instalado na DMZ fora da floresta Active Directory (usa AD LDS local sincronizado via EdgeSync) atuando como gateway SMTP de borda, antispam e reescrita de endereços.',
      'Integração profunda com Active Directory: a configuração da organização Exchange (conectores, bancos, políticas) reside na partição Configuration do AD; atributos de caixas ficam nos objetos de usuário do AD.',
      'Protocolos de Cliente: MAPI over HTTP substituiu o antigo RPC over HTTP (Outlook Anywhere) oferecendo reconexão rápida e melhor resiliência em redes instáveis.'
    ],
    technicalReference: [
      'Server Roles atuais: Mailbox Server (na LAN, membro do AD) + Edge Transport Server (na DMZ, fora do AD, sincronia EdgeSync TCP 50636)',
      'Gerência: EAC (Exchange Admin Center web /ecp) e EMS (Exchange Management Shell PowerShell).'
    ],
    examTraps: [
      'Exchange 2016/2019 NÃO possui papéis separados de CAS (Client Access Server) ou Hub Transport — eles foram unificados dentro do Mailbox Server.',
      'Edge Transport Server fica na DMZ e NÃO deve ser ingressado no domínio Active Directory interno.',
      'Todas as informações globais de topologia e conectores do Exchange vivem na partição Configuration do Active Directory.'
    ],
    keyTerms: ['Mailbox Server', 'Edge Transport (DMZ)', 'EdgeSync', 'MAPI over HTTP', 'Active Directory Configuration']
  },
  '4.2.2': {
    itemId: '4.2.2',
    highYieldSummary: [
      'Conceito de SMTP Relay: retransmissão de mensagens recebidas por um servidor SMTP para outro domínio de destino que não pertence à organização local.',
      'Perigo do Open Relay: ocorre quando um Receive Connector aceita envios de Anonymous Users para domínios externos sem restringir IPs de origem ou autenticação, resultando em disparo massivo de spam e inclusão imediata em RBLs.',
      'Relay Interno Seguro para Aplicações/Impressoras: criar Receive Connector dedicado (Frontend Transport, porta 25) restrito estritamente por lista explícita de IPs internos (RemoteIPRanges) e sem permissão aberta para 0.0.0.0/0, ou exigir autenticação SMTP (porta 587) + TLS.',
      'Smart Host: servidor intermediário (gateway antispam na DMZ ou serviço em nuvem) configurado no Send Connector para o qual o Exchange encaminha todo o correio externo em vez de resolver registros MX diretamente.',
      'Autenticação e Criptografia no Relay: Client Frontend Connector na porta 587 exige STARTTLS antes de aceitar AUTH LOGIN/NTLM para evitar vazamento de credenciais do AD.'
    ],
    technicalReference: [
      'Relay anônimo seguro: Receive Connector dedicado + RemoteIPRanges estritos + ms-Exch-SMTP-Accept-Any-Recipient apenas para IPs autorizados',
      'Send Connector: DNS MX routing (direto) vs Route mail through Smart Hosts (via gateway de saída).'
    ],
    examTraps: [
      'Conceder permissão "ms-Exch-SMTP-Accept-Any-Recipient" a Anonymous Users no Default Frontend Connector abre Open Relay para toda a Internet.',
      'Aplicações legadas que não autenticam devem usar conector isolado restrito por IP específico na LAN, nunca liberação por sub-rede ampla.',
      'Smart Host é configurado no SEND Connector (saída), não no Receive Connector.'
    ],
    keyTerms: ['Open Relay', 'Smart Host', 'RemoteIPRanges', 'Autenticação SMTP (587)', 'Receive Connector Relay']
  },
  '4.2.3': {
    itemId: '4.2.3',
    highYieldSummary: [
      'Camadas de Filtragem Antispam: filtragem de conexão/IP (RBL/DNSBL e reputação), validação de protocolos/identidade (SPF, DKIM, DMARC, FCrDNS), Greylisting, análise de conteúdo/heurística e sandboxing de anexos/URLs.',
      'RBL / DNSBL (Real-time Blackhole List): listas dinâmicas consultadas via DNS para rejeitar ou pontuar IPs remetentes conhecidos por envio de spam (mitiga sobrecarga já na conexão SMTP antes do DATA).',
      'Greylisting: devolve código SMTP temporário 4xx (ex.: 451) para tuplas desconhecidas (IP, remetente, destinatário); MTAs legítimos reenviam minutos depois enquanto spambots simples descartam.',
      'Ações sobre Mensagens Suspeitas: Rejeição imediata no SMTP (5xx), Quarentena administrativa/do usuário, entrega com tag no assunto ou entrega na pasta Lixo Eletrônico (Junk Email) conforme SCL (Spam Confidence Level).',
      'SCL e Anti-Malware no Exchange: Exchange atribui pontuação SCL (0–9, sendo -1 bypass confiável) via agentes de transporte no Edge/Mailbox ou gateway de borda dedicado.'
    ],
    technicalReference: [
      'Códigos SMTP: 2xx (Sucesso) | 4xx (Erro temporário — retry/Greylisting) | 5xx (Erro permanente — bloqueio/bounce)',
      'SCL Exchange: -1 (confiável) | 0–1 (limpo) | 5–6 (Junk Email) | 7–9 (Rejeição/Quarentena conforme política).'
    ],
    examTraps: [
      'Rejeição com código 4xx é TEMPORÁRIA (provoca retentativa); rejeição definitiva usa código 5xx.',
      'Bloquear na borda usando RBLs evita consumir banda e I/O gravando spam no banco antes de filtrá-lo.',
      'Permitir que todos os IPs externos burlem RBLs ou SPF gera falsa entrega de phishing.'
    ],
    keyTerms: ['RBL / DNSBL', 'Greylisting (4xx vs 5xx)', 'SCL (Spam Confidence Level)', 'Quarentena', 'Reputação / FCrDNS']
  },
  '4.2.4': {
    itemId: '4.2.4',
    highYieldSummary: [
      'Receive Connectors (Entrada): configurados POR SERVIDOR Exchange; definem IPs/portas de escuta (25, 587, 465, 2525), IPs remotos permitidos, métodos de autenticação (TLS, Integrated Windows, Basic após TLS) e grupos de permissão.',
      'Send Connectors (Saída): têm escopo ORGANIZACIONAL (armazenados no AD e compartilhados); controlam envio para fora da organização definindo Address Space (ex.: * custo 1) e roteamento por DNS MX ou Smart Host.',
      'Conectores Padrão no Mailbox Server: Default Frontend (25), Client Frontend (587), Outbound Proxy Frontend (717), Default <Server> (2525) e Client Proxy (465).',
      'Fluxo Interno Automático: entre servidores Exchange da mesma organização, o transporte interno ocorre automaticamente via conectores implícitos autenticados por Kerberos/TLS sem exigir Send Connectors manuais.',
      'Seleção de Conector mais específico: quando múltiplos Receive Connectors escutam na mesma porta, o Exchange escolhe o conector cujo RemoteIPRanges for mais específico para o IP conectante.'
    ],
    technicalReference: [
      'Receive Connector = Escopo por Servidor (entrada) | Send Connector = Escopo Organizacional (saída)',
      'PowerShell: Get-ReceiveConnector | Get-SendConnector | Set-SendConnector -SmartHosts gateway.dominio.br.'
    ],
    examTraps: [
      'Receive Connectors são configurados individualmente por servidor; Send Connectors valem para toda a organização Exchange.',
      'Não existe Send Connector "padrão" criado na instalação limpa do Exchange para a Internet — é preciso criar o Send Connector com Address Space "*" após instalar.',
      'Alterar portas nos conectores internos padrão (2525/717) quebra o fluxo interno entre Frontend Transport e Transport Service.'
    ],
    keyTerms: ['Receive Connector', 'Send Connector', 'Address Space (*)', 'Escopo por Servidor vs Organização', 'RemoteIPRanges']
  },
  '4.2.5': {
    itemId: '4.2.5',
    highYieldSummary: [
      'Banco de Filas (mail.que): o serviço Transport armazena mensagens em trânsito em um banco ESE chamado mail.que até serem entregues ao banco de caixas ou ao próximo salto externo.',
      'Tipos de Filas no Queue Viewer: Submission Queue (aguardando categorização), Mailbox Delivery Queue, Remote Delivery Queue (aguardando entrega externa por domínio/conector), Unreachable Queue (sem rota) e Poison Message Queue.',
      'Poison Message Queue: isola mensagens malformadas que provocaram falha/crash repetido no processo EdgeTransport.exe, impedindo que derrubem o serviço em loop; requer análise manual (Resume ou Remove).',
      'Comportamento de Retry e Expiração: falhas transitórias (4xx/timeout) colocam a fila em estado Retry com intervalos crescentes; após Delay Notification (padrão 4h) envia aviso ao remetente e após Maximum Message Expiration (padrão 2 dias) devolve NDR 5xx.',
      'Monitoramento de Filas: crescimento abrupto na Submission ou Remote Delivery Queue sinaliza queda de Smart Host, bloqueio em RBL, conta comprometida disparando spam ou falta de espaço em disco (Back Pressure).'
    ],
    technicalReference: [
      'PowerShell: Get-Queue | Get-Message -Queue <id> | Retry-Queue | Suspend-Message | Remove-Message -WithNDR $false',
      'Back Pressure: transporte pausa recebimento (452 4.3.1 Insufficient system resources) se disco de mail.que/logs cair abaixo do limite.'
    ],
    examTraps: [
      'Mensagens na Poison Message Queue NÃO são reenviadas automaticamente — exigem intervenção explícita do administrador.',
      'Back Pressure do Exchange interrompe entrada SMTP quando o volume onde fica mail.que atinge alta ocupação de disco.',
      'Um Receive Connector aceitando tráfego para domínios externos cria fila no servidor e dispara NDRs (backscatter) se mal configurado.'
    ],
    keyTerms: ['Queue Viewer', 'mail.que', 'Poison Message Queue', 'Delivery / Submission Queue', 'Back Pressure', 'NDR']
  },
  '4.2.6': {
    itemId: '4.2.6',
    highYieldSummary: [
      'Message Tracking Logs: registros estruturados (em formato CSV armazenados localmente no servidor Transport) que documentam toda passagem, recebimento, entrega, expansão de lista, redirecionamento e falha de mensagens.',
      'Cmdlet Get-MessageTrackingLog: ferramenta central de auditoria e suporte no Exchange Management Shell para rastrear remetente, destinatário, assunto, MessageId, IP de origem e EventId (RECEIVE, SEND, DELIVER, FAIL, TRANSFER, EXPAND).',
      'Eventos principais: RECEIVE (entrou via SMTP/Store), SUBMIT (submetida pelo usuário), DELIVER (gravada na caixa local), SEND (enviada via SMTP externo), FAIL (NDR permanente) e DEFER (adiada/retry).',
      'Rastreamento Multi-Servidor: como os logs ficam em cada servidor de transporte/Mailbox, consultas em DAGs ou múltiplos servidores usam Get-TransportService | Get-MessageTrackingLog para varrer todos os nós.',
      'Retenção e Troubleshooting: retenção padrão de 30 dias (ou limite de tamanho por pasta); fundamental para provar se um e-mail saiu da organização e foi aceito (250 OK) pelo servidor remoto.'
    ],
    technicalReference: [
      'EMS: Get-TransportService | Get-MessageTrackingLog -Sender "user@dom.br" -Start "11/18/2026 08:00" -ResultSize Unlimited',
      'Eventos chave: SUBMIT -> RECEIVE -> RESOLVE/EXPAND -> SEND (externo) ou DELIVER (local) | Erros: DEFER (temporário) / FAIL (NDR).'
    ],
    examTraps: [
      'Rodar Get-MessageTrackingLog sem iterar pelos servidores (Get-TransportService | Get-MessageTrackingLog) consulta apenas o servidor onde o shell está conectado.',
      'Message Tracking Log rastreia metadados e eventos de fluxo — ele NÃO armazena o corpo completo da mensagem nem anexos.',
      'Evento "SEND" com sucesso indica entrega aceita pelo próximo MTA/Smart Host, isentando o Exchange interno de perda posterior.'
    ],
    keyTerms: ['Get-MessageTrackingLog', 'EventId (RECEIVE/SEND/DELIVER/FAIL)', 'MessageId', 'Get-TransportService', 'Auditoria SMTP']
  },
  '4.2.7': {
    itemId: '4.2.7',
    highYieldSummary: [
      'OWA (Outlook on the web): cliente webmail corporativo servido via HTTPS (TCP 443) através do diretório virtual /owa no IIS do servidor Exchange Mailbox.',
      'Arquitetura de Proxy Reverso e Autenticação: requisições chegam pelo Front-End IIS (Default Web Site, porta 443) que autentica (Forms-Based Auth, Windows/Kerberos ou SAML/AD FS) e encaminha ao Back-End (porta 444) do servidor que hospeda a cópia ativa da caixa.',
      'URLs Internas e Externas (Split-DNS): cada diretório virtual possui InternalUrl e ExternalUrl (ex.: https://mail.empresa.br/owa); usar o mesmo FQDN interno e externo (Split-DNS) simplifica certificados SAN e evita alertas no cliente.',
      'Políticas de OWA (OwaMailboxPolicy): controlam recursos permitidos na web, como bloqueio de download/visualização de anexos em dispositivos não gerenciados, tema, assinatura e acesso offline.',
      'Hardening de OWA: publicação externa sempre protegida por Reverse Proxy/WAF, TLS 1.2/1.3 estrito, bloqueio de acesso ao /ecp (Exchange Admin Center) na Internet e aplicação rigorosa de patches cumulativos (CUs/SUs).'
    ],
    technicalReference: [
      'Portas IIS Exchange: 443 (Default Web Site / Front-End Proxy) -> 444 (Exchange Back End)',
      'EMS: Get-OwaVirtualDirectory | Set-OwaVirtualDirectory -InternalUrl https://mail.dom/owa -ExternalUrl https://mail.dom/owa.'
    ],
    examTraps: [
      'Publicar o diretório virtual /owa na Internet sem restringir /ecp expõe o painel administrativo Exchange Admin Center externamente.',
      'Desincronismo entre InternalUrl e ExternalUrl ou falta de Split-DNS gera falhas de redirecionamento e pop-ups repetidos de senha.',
      'Alterações em diretórios virtuais no IIS devem ser feitas via Exchange Management Shell/EAC, não editando manualmente arquivos isolados no IIS.'
    ],
    keyTerms: ['OWA (/owa)', 'Diretórios Virtuais IIS', 'Front-End (443) vs Back-End (444)', 'InternalUrl / ExternalUrl', 'Split-DNS / ECP']
  },
  '4.2.8': {
    itemId: '4.2.8',
    highYieldSummary: [
      'EWS (Exchange Web Services): API baseada em SOAP/XML sobre HTTPS (/EWS/Exchange.asmx) usada por clientes (Outlook para Mac, sistemas integrados, consulta Free/Busy, Out of Office e aplicações corporativas).',
      'Autodiscover: serviço XML (/Autodiscover/Autodiscover.xml) que entrega automaticamente aos clientes as URLs de EWS, OWA, OAB, MAPI/HTTP e servidores internos/externos sem configuração manual.',
      'Fluxo de Descoberta do Autodiscover: clientes ingressados no AD consultam primeiro o SCP (Service Connection Point) no Active Directory; clientes externos consultam DNS HTTPS em autodiscover.<domínio> ou <domínio>/autodiscover e fallback por registro SRV (_autodiscover._tcp).',
      'Troubleshooting de Free/Busy e OOF: falhas ao visualizar agenda livre/ocupada ou configurar resposta automática no Outlook geralmente indicam erro no diretório virtual EWS, Autodiscover ou certificado TLS inválido.',
      'Segurança EWS: restringir acesso externo quando desnecessário, monitorar aplicações com EWS ApplicationImpersonation e migrar integrações legadas para autenticação moderna/OAuth onde aplicável.'
    ],
    technicalReference: [
      'Endpoints: /EWS/Exchange.asmx | /Autodiscover/Autodiscover.xml | DNS SRV: _autodiscover._tcp.<domínio> -> 443',
      'EMS: Get-WebServicesVirtualDirectory | Get-ClientAccessService (AutoDiscoverServiceInternalUri).'
    ],
    examTraps: [
      'Clientes na LAN ingressados no domínio buscam o SCP no Active Directory ANTES de consultar DNS público para Autodiscover — SCP desatualizado após migração causa avisos de certificado imediatamente.',
      'Free/Busy e Out of Office no Outlook dependem do EWS funcionando, não apenas do fluxo SMTP.',
      'O nome autodiscover.<domínio> precisa constar no certificado TLS (SAN) ou ser redirecionado/resolvido via registro SRV válido.'
    ],
    keyTerms: ['EWS (/EWS/Exchange.asmx)', 'Autodiscover', 'SCP (Active Directory)', 'Free/Busy', 'SRV _autodiscover._tcp']
  },
  '4.2.9': {
    itemId: '4.2.9',
    highYieldSummary: [
      'DAG (Database Availability Group): arquitetura de alta disponibilidade e resiliência de dados do Exchange baseada em Windows Server Failover Clustering (WSFC) com até 16 servidores Mailbox replicando cópias de bancos .EDB.',
      'Replicação Contínua por Logs: as transações gravadas no banco ativo são enviadas continuamente (TCP 64327 padrão) como arquivos de log de transação para as cópias passivas, que validam e aplicam (replay) os logs.',
      'Witness Server (File Share Witness - FSW): obrigatório quando o DAG possui número PAR de nós (ex.: 2 ou 4 servidores) para garantir maioria de quórum (50% + 1) e impedir split-brain em quedas de rede.',
      'Failover e Switchover: Failover é a ativação automática de uma cópia passiva saudável diante de falha do nó/banco ativo (PAM coordena via Active Manager); Switchover é a movimentação planejada manual para manutenção.',
      'Redes do DAG e Lagged Copy: separa-se a rede MAPI (tráfego de clientes/AD/DNS) das redes de Replicação dedicadas; cópias com atraso (ReplayLagTime) protegem contra corrupção lógica, embora snapshots/backups imutáveis sejam preferidos.'
    ],
    technicalReference: [
      'Porta de Replicação DAG: TCP 64327 | Quórum: Maioria de Nós (ímpar) ou Nó + File Share Witness (par)',
      'EMS: Get-MailboxDatabaseCopyStatus * | Move-ActiveMailboxDatabase -ActivateOnServer EX02 | Test-ReplicationHealth.'
    ],
    examTraps: [
      'O Witness Server NÃO armazena cópias do banco .EDB — ele fornece apenas um voto de quórum via compartilhamento SMB para clusters com número par de membros.',
      'O Witness Server NUNCA deve ser hospedado em um servidor membro do próprio DAG (idealmente fica em servidor de arquivos/gerência separado no mesmo AD).',
      'Um DAG de 2 nós com 1 único site sem Witness perde quórum se 1 nó cair, desmontando o banco no sobrevivente!'
    ],
    keyTerms: ['DAG', 'WSFC / Quórum', 'Witness Server (FSW)', 'Active Manager', 'Failover vs Switchover', 'TCP 64327']
  },
  '4.2.10': {
    itemId: '4.2.10',
    highYieldSummary: [
      'Arquitetura ESE (Extensible Storage Engine): cada Mailbox Database consiste no arquivo principal .EDB (caixas, mensagens, índices) e em uma sequência de arquivos de log de transação de 1 MB (ExxNNNNN.log) + arquivo de checkpoint (Exx.chk).',
      'Write-Ahead Logging (WAL): toda alteração é gravada primeiro em memória + arquivo de log de transação (.log) sequencial e só depois gravada no .EDB de forma assíncrona (por isso os logs são essenciais para recuperar falhas).',
      'Clean Shutdown vs Dirty Shutdown: ao desmontar normalmente, o Exchange grava todos os logs pendentes no .EDB (Clean Shutdown); após queda abrupta, o estado é Dirty Shutdown (exige replay dos logs para voltar a montar).',
      'Circular Logging: sobrescreve os arquivos de log já aplicados ao .EDB economizando disco; porém IMPEDE backups incrementais/diferenciais baseados em logs e impossibilita recuperação point-in-time.',
      'Manutenção e Truncamento de Logs: em operação normal sem Circular Logging, somente um backup Exchange-aware (VSS) trunca (remove) logs antigos já aplicados após confirmar integridade.'
    ],
    technicalReference: [
      'Arquivos do banco: *.edb (dados) | Enn*.log (transações 1 MB) | Enn.chk (checkpoint) | tmp.edb',
      'Utilitário offline: eseutil /mh banco.edb (checar Clean/Dirty Shutdown) | eseutil /r Enn (Soft Recovery) | eseutil /p (Hard Repair — último recurso com perda).'
    ],
    examTraps: [
      'NUNCA apagar arquivos .log manualmente na pasta do banco Exchange para liberar disco — isso corrompe o banco em Dirty Shutdown; a liberação legítima ocorre via backup VSS bem-sucedido.',
      'Com Circular Logging ativado, não é possível fazer backup incremental/diferencial nem restaurar transações entre backups completos.',
      'eseutil /p (Hard Repair) pode descartar páginas corrompidas com perda de dados e altera a assinatura do banco (exige Move-Mailbox após reparo).'
    ],
    keyTerms: ['Arquivo .EDB', 'Logs de Transação (1 MB)', 'Clean vs Dirty Shutdown', 'Circular Logging', 'eseutil (/mh, /r)', 'Truncamento via VSS']
  },
  '4.2.11': {
    itemId: '4.2.11',
    highYieldSummary: [
      'Certificados SAN (Subject Alternative Name): o Exchange exige um único ou poucos certificados contendo múltiplos nomes no campo SAN — tipicamente o FQDN de acesso (mail.empresa.br) e autodiscover.empresa.br (e nomes internos se não usar Split-DNS).',
      'Atribuição aos Serviços Exchange: após importar o certificado X.509 (.pfx/.cer) no repositório do servidor, é obrigatório vinculá-lo aos serviços corretos (IIS, SMTP, opcionalmente POP/IMAP) via Enable-ExchangeCertificate.',
      'Certificados SMTP e Autenticação de Transporte: o serviço SMTP usa um certificado autoassinado interno entre servidores do DAG ou um certificado confiável de CA pública/interna para STARTTLS com parceiros na Internet.',
      'Erro de Name Mismatch no Outlook: ocorre quando o SCP do Autodiscover aponta para um nome interno (ex.: ex01.ad.local) que não consta no certificado público SAN emitido pela CA comercial.',
      'Wildcard vs SAN: certificados wildcard (*.empresa.br) funcionam para OWA/EWS/Autodiscover na maioria dos cenários, mas não cobrem subdomínios de múltiplos níveis nem alguns requisitos estritos de POP/IMAP/Unified Messaging antigos.'
    ],
    technicalReference: [
      'Nomes SAN típicos (com Split-DNS): mail.empresa.br + autodiscover.empresa.br (evitar .local em CAs públicas)',
      'EMS: Get-ExchangeCertificate | New-ExchangeCertificate | Enable-ExchangeCertificate -Thumbprint <HASH> -Services IIS,SMTP.'
    ],
    examTraps: [
      'Apenas importar o certificado no console MMC do Windows NÃO o ativa no Exchange — é obrigatório atribuí-lo aos serviços IIS/SMTP (Enable-ExchangeCertificate).',
      'CAs públicas não emitem mais certificados para domínios internos .local/.corp — por isso recomenda-se configurar Split-DNS usando o domínio público válido nas URLs internas.',
      'Nunca remover o certificado "Microsoft Exchange Server Auth Certificate" sem substituí-lo corretamente (quebra OAuth/EAC/OWA).'
    ],
    keyTerms: ['SAN (Subject Alternative Name)', 'Enable-ExchangeCertificate', 'Serviços IIS / SMTP', 'Split-DNS (.local)', 'TLS / STARTTLS']
  },
  '4.2.12': {
    itemId: '4.2.12',
    highYieldSummary: [
      'Teste de Fluxo SMTP manual e PowerShell: validar entrega local/entre bancos com Test-Mailflow; testar conectividade de porta, banner 220, EHLO e STARTTLS com telnet <host> 25 ou Test-NetConnection / openssl s_client -starttls smtp -connect host:25.',
      'Leitura de Cabeçalhos SMTP (Message Headers): analisar cabeçalhos "Received:" sempre de BAIXO para CIMA (da origem até o servidor receptor) para medir latência por salto e localizar o IP remetente real; verificar SPF/DKIM/DMARC em "Authentication-Results:".',
      'Diagnóstico de Serviços e Filas: usar Test-ServiceHealth para checar serviços críticos do Exchange, Get-Queue para identificar represamentos/erros SMTP (4xx/5xx) e Test-ReplicationHealth em nós de DAG.',
      'Diagnóstico de Cliente/Web/Autodiscover: utilizar o Microsoft Remote Connectivity Analyzer (ExRCA) ou Test-OutlookWebServices / Test-OwaConnectivity para validar endpoints HTTPS, certificados e redirecionamento Autodiscover.',
      'Erros clássicos de entrega (NDR): 550 5.1.1 (destinatário inexistente), 550 5.7.1 (relay negado / bloqueio de política / falha SPF-DMARC), 451 4.4.x (DNS/timeout temporário) e 452 4.3.1 (Back Pressure / disco cheio).'
    ],
    technicalReference: [
      'EMS: Test-Mailflow | Test-ServiceHealth | Test-ReplicationHealth | Get-Queue | Get-MessageTrackingLog',
      'CLI rede: telnet mail.dom.br 25 | openssl s_client -connect mail.dom.br:25 -starttls smtp | dig dom.br MX +short.'
    ],
    examTraps: [
      'A trilha cronológica de cabeçalhos "Received:" lê-se de BAIXO para CIMA (o topo é sempre o último servidor que recebeu a mensagem).',
      'Erro 550 5.7.1 ao enviar externamente frequentemente indica falta de autenticação/permissão de relay no Receive Connector ou bloqueio por política/SPF no destino.',
      'Erro 452 4.3.1 Insufficient system resources no Exchange indica Back Pressure por falta de espaço em disco/memória no transporte.'
    ],
    keyTerms: ['Test-Mailflow', 'Telnet 25 / openssl STARTTLS', 'Headers Received (baixo->cima)', 'Authentication-Results', 'NDR (550 vs 451/452)']
  }
};
