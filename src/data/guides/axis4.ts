import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_4: Record<string, StudyGuide> = {
  '4.1.1': {
    itemId: '4.1.1',
    highYieldSummary: [
      'Definição e escopo: a arquitetura de correio eletrônico separa a submissão de mensagens pelo cliente (MSA), o roteamento entre domínios via SMTP (MTA — RFC 5321), a entrega na caixa postal (MDA) e o acesso pelo usuário (POP3/IMAP). Depende do DNS (registros MX apontando para A/AAAA) para descoberta de servidores receptores e de TLS para confidencialidade e integridade em trânsito.',
      'Componentes da Arquitetura de E-mail: MUA (Mail User Agent — cliente Outlook, Thunderbird ou webmail), MSA (Mail Submission Agent — recebe envio autenticado na porta 587/465), MTA (Mail Transfer Agent — roteia via SMTP — Simple Mail Transfer Protocol — entre servidores na porta 25) e MDA (Mail Delivery Agent — grava na caixa postal).',
      'Protocolo SMTP (RFC 5321): realiza envio e transferência de mensagens; porta 25 (servidor-servidor / relay entre MTAs), porta 587 (submissão autenticada com STARTTLS — RFC 6409, distinta de relay entre MTAs) e porta 465 (SMTPS — TLS implícito na submissão segundo a RFC 8314).',
      'POP3 vs IMAP: POP3 (Post Office Protocol v3 — TCP 110 / POP3S 995 com TLS implícito) baixa mensagens para o cliente (por padrão removendo do servidor, sem sincronismo de pastas); IMAP (Internet Message Access Protocol — TCP 143 / IMAPS 993 com TLS implícito) mantém mensagens e múltiplas pastas sincronizadas bidirecionalmente no servidor.',
      'Registros MX (Mail Exchanger): registros DNS (Domain Name System) que indicam os FQDNs (Fully Qualified Domain Names) dos MTAs receptores do domínio acompanhados de preferência numérica — quanto MENOR o número, MAIOR a prioridade (ex.: MX 10 é tentado antes de MX 20).',
      'Segurança de Transporte SMTP: STARTTLS promove conexão SMTP em claro para TLS (Transport Layer Security) oportunístico — ou obrigatório entre parceiros com MTA-STS (Mail Transfer Agent Strict Transport Security, RFC 8461) / DANE (DNS-based Authentication of Named Entities, RFC 7672) — evitando eavesdropping (captura passiva) em trânsito.',
      'Exemplo operacional: na zona DNS do domínio hospitalar `hosp.org.br`, publicam-se `hosp.org.br. IN MX 10 mx1.hosp.org.br.` e `IN MX 20 mx2.hosp.org.br.` com registros `A` correspondentes (`200.10.20.10` e `200.10.20.11`). Um médico usando **MUA** configura envio autenticado via **MSA** na porta `587` (`STARTTLS`) e sincronização de pastas via **IMAPS** na porta `993`, enquanto o servidor envia mensagens externas ao MTA de destino pela porta `25`.'
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
    keyTerms: [
      'MUA / MSA / MTA / MDA: papéis funcionais do cliente (MUA), receptor de submissão (MSA), roteador entre domínios (MTA) e gravador local (MDA)',
      'SMTP 25 vs 587 vs 465: transferência entre MTAs (25), submissão autenticada com STARTTLS (587, RFC 6409) e submissão com TLS implícito (465, RFC 8314)',
      'POP3 (110/995) vs IMAP (143/993): download local simples sem pastas no servidor versus sincronização bidirecional multi-dispositivo',
      'Registro MX (A/AAAA): apontamento DNS com preferência numérica (menor = prioritário) que nunca deve referenciar IP ou CNAME',
      'MTA-STS / DANE: mecanismos que tornam obrigatório o TLS entre MTAs com validação de certificado (HTTPS/DNSSEC) contra downgrade'
    ]
  },
  '4.1.2': {
    itemId: '4.1.2',
    highYieldSummary: [
      'Definição e escopo: os mecanismos de proteção de e-mail combinam publicação de políticas de autenticação em registros DNS TXT (SPF, DKIM e DMARC) com controles de reputação e inspeção antispam no MTA. Resolvem a falsificação do remetente (spoofing/phishing), garantem integridade dos cabeçalhos/corpo em trânsito e reduzem entrega de spam e malware.',
      'SPF (Sender Policy Framework — RFC 7208): registro DNS tipo TXT (`v=spf1 ...`) que lista os IPs/redes/hosts autorizados a enviar e-mails em nome do domínio do envelope (`MAIL FROM` / `Return-Path`), terminando com `~all` (softfail) ou `-all` (fail).',
      'DKIM (DomainKeys Identified Mail — RFC 6376): adiciona assinatura criptográfica no cabeçalho `DKIM-Signature` gerada com chave privada do servidor remetente; o destinatário valida usando a chave pública RSA (Rivest-Shamir-Adleman) ou Ed25519 publicada em registro TXT (`<seletor>._domainkey.<domínio>`).',
      'DMARC (Domain-based Message Authentication, Reporting, and Conformance — RFC 7489): publicado em `_dmarc.<domínio>` (`v=DMARC1; p=none|quarantine|reject; rua=...`), exige ALINHAMENTO entre o domínio visível no cabeçalho `From:` e o domínio validado por SPF e/ou DKIM, além de gerar relatórios XML (Extensible Markup Language — agregados em `rua` e forenses em `ruf`).',
      'Mecanismos Antispam complementares: listas RBL (Real-time Blackhole List) / DNSBL (DNS-based Blackhole List) de reputação de IP, Greylisting (rejeição temporária `4xx`), análise de conteúdo/heurística, verificação de PTR (Pointer — DNS reverso) / FCrDNS (Forward-Confirmed Reverse DNS — coincidência entre PTR, registro A e banner EHLO) e quarentena.',
      'Proteção combinada: SPF sozinho quebra em encaminhamentos (forwarding) e não protege o `From:` visível ao usuário; DKIM sobrevive a encaminhamentos desde que corpo e cabeçalhos assinados não mudem; DMARC une ambos protegendo contra phishing/spoofing.',
      'Exemplo operacional: na zona `hosp.org.br`, publicam-se três registros TXT válidos: `@ IN TXT "v=spf1 ip4:200.10.20.10 include:spf.parceiro.br -all"` (apenas o `include` consome consulta DNS — `ip4` não conta —, mais as consultas aninhadas no registro do parceiro, bem abaixo do limite de `10`), `s2026._domainkey IN TXT "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A..."` e `_dmarc IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@hosp.org.br"`. Se um atacante forjar `From: diretor@hosp.org.br` sem chave DKIM válida nem alinhamento SPF, o receptor rejeita por falha **DMARC**.'
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
    keyTerms: [
      'SPF (RFC 7208): registro TXT que autoriza IPs em nome do envelope MAIL FROM/Return-Path com teto de 10 consultas DNS',
      'DKIM (RFC 6376): assinatura criptográfica de cabeçalhos e corpo verificada via chave pública em <seletor>._domainkey.<domínio>',
      'DMARC (RFC 7489): política em _dmarc.<domínio> que exige alinhamento SPF ou DKIM com o cabeçalho From: e define p=none/quarantine/reject',
      'Alinhamento (Relaxed vs Strict): exigência do DMARC de que o domínio autenticado coincida exatamente (strict) ou em subdomínio organizacional (relaxed) com o From:',
      'FCrDNS (PTR + A/AAAA): validação cruzada entre o IP remetente, seu registro reverso PTR e o registro direto correspondente'
    ]
  },
  '4.2.1': {
    itemId: '4.2.1',
    highYieldSummary: [
      'Definição e escopo: o Microsoft Exchange Server implementa serviços corporativos de mensageria, calendário e transporte SMTP integrados profundamente ao Active Directory (partição Configuration). Sua arquitetura moderna consolida os antigos papéis separados em torno do Mailbox Server na LAN interna e do Edge Transport Server opcional na DMZ.',
      'Arquitetura Microsoft Exchange Server moderna (2016/2019/SE): consolida funções em apenas duas Server Roles principais — Mailbox Server (armazena bancos `.EDB`, Client Access HTTP/MAPI/OWA/EWS e Transport; o antigo Unified Messaging ainda existiu no Exchange 2016 e foi descontinuado a partir do Exchange 2019) e Edge Transport Server (opcional na DMZ).',
      'Mailbox Server: executa o Frontend Transport (proxy SMTP na porta 25), Transport Service (roteamento e filas), Mailbox Transport (Submission e Delivery para os bancos) e os serviços de acesso de cliente — proxy HTTPS (Hypertext Transfer Protocol Secure) na porta 443 para OWA (Outlook on the web), ECP (Exchange Admin Center), EWS (Exchange Web Services), ActiveSync e MAPI (Messaging Application Programming Interface) over HTTP.',
      'Edge Transport Server: instalado na DMZ (Demilitarized Zone) fora da floresta Active Directory — usa AD LDS (Active Directory Lightweight Directory Services) local sincronizado via EdgeSync (sincronização unidirecional sobre TCP 50636) — atuando como gateway SMTP de borda, antispam e reescrita de endereços.',
      'Integração profunda com Active Directory: a configuração da organização Exchange (conectores, bancos, políticas) reside na partição Configuration do AD; atributos de caixas ficam nos objetos de usuário do AD.',
      'Protocolos de Cliente: MAPI over HTTP substituiu o antigo RPC (Remote Procedure Call) over HTTP (Outlook Anywhere), oferecendo reconexão rápida e melhor resiliência em redes instáveis.',
      'Exemplo operacional: em uma topologia com dois servidores **Mailbox** na LAN (`EX01` e `EX02`) e um **Edge Transport** (`EDGE01`) na DMZ fora do domínio, o **EdgeSync** replica periodicamente destinatários e conectores pela porta `TCP 50636` para o **AD LDS** do `EDGE01`. No gerenciamento interno, `Test-ServiceHealth` valida os serviços ativos do Mailbox Server e `Get-OrganizationConfig | fl MapiHttpEnabled` confirma o protocolo **MAPI over HTTP** habilitado.'
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
    keyTerms: [
      'Mailbox Server: papel unificado (Exchange 2016+) que hospeda bancos .EDB, transporte interno e proxy HTTP/Client Access',
      'Edge Transport Server: papel opcional isolado na DMZ fora do domínio AD que filtra SMTP na borda usando AD LDS local',
      'EdgeSync (TCP 50636): assinatura unidirecional que replica dados de destinatários e Send Connectors do AD para o Edge Transport',
      'MAPI over HTTP: protocolo padrão moderno do Outlook sobre HTTPS que substituiu o legado RPC over HTTP (Outlook Anywhere)',
      'Partição Configuration (AD): contêiner replicado na floresta onde o Exchange armazena sua topologia, conectores e bancos'
    ]
  },
  '4.2.2': {
    itemId: '4.2.2',
    highYieldSummary: [
      'Definição e escopo: SMTP Relay é o encaminhamento de mensagens recebidas por um servidor SMTP para domínios externos que não pertencem à organização local. Em ambientes corporativos e Exchange Server, exige controle estrito por autenticação (porta 587 + STARTTLS) ou restrição por IPs autorizados (Receive Connector dedicado) para impedir Open Relay e abuso por spammers.',
      'Conceito de SMTP Relay: retransmissão de mensagens recebidas por um servidor SMTP para outro domínio de destino que não pertence à organização local.',
      'Perigo do Open Relay: ocorre quando um Receive Connector aceita envios de Anonymous Users para domínios externos sem restringir IPs de origem ou autenticação, resultando em disparo massivo de spam e inclusão imediata em RBLs (Real-time Blackhole Lists).',
      'Relay Interno Seguro para Aplicações/Impressoras: criar Receive Connector dedicado (Frontend Transport, porta 25) restrito estritamente por lista explícita de IPs internos (`RemoteIPRanges`) e sem permissão aberta para `0.0.0.0/0`, ou exigir autenticação SMTP (porta 587 — submissão autenticada) + TLS.',
      'Smart Host: servidor intermediário — gateway antispam na DMZ ou serviço em nuvem — configurado no Send Connector para o qual o Exchange encaminha todo o correio externo em vez de resolver registros MX diretamente.',
      'Autenticação e Criptografia no Relay: o Client Frontend Connector na porta 587 exige STARTTLS (negociação TLS oportunística sobre sessão inicialmente em claro) antes de aceitar `AUTH LOGIN`/`NTLM` (NT LAN Manager) para evitar vazamento de credenciais do AD.',
      'Exemplo operacional: um sistema de laboratório em `10.30.10.25` precisa enviar laudos para pacientes externos sem suportar autenticação moderna. Cria-se um conector dedicado via `New-ReceiveConnector -Name "Relay-Lab" -Usage Custom -Bindings 0.0.0.0:25 -RemoteIPRanges 10.30.10.25 -PermissionGroups AnonymousUsers -TransportRole FrontendTransport`, concedendo `ms-Exch-SMTP-Accept-Any-Recipient` exclusivamente a esse conector sem tocar no `Default Frontend`, enquanto o **Send Connector** aponta a saída para o **Smart Host** `smarthost.hosp.org.br`.'
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
    keyTerms: [
      'Open Relay: falha crítica de configuração em que o servidor retransmite e-mails anônimos para qualquer domínio externo sem restrição',
      'Smart Host: MTA/gateway intermediário configurado no Send Connector para receber todo o tráfego de saída em vez da entrega direta por MX',
      'RemoteIPRanges: parâmetro do Receive Connector que delimita exatamente quais IPs de origem podem utilizar aquela regra de entrada',
      'ms-Exch-SMTP-Accept-Any-Recipient: permissão estendida do AD que autoriza um Receive Connector a aceitar destinatários externos (relay)',
      'Submission (587) vs Relay (25): envio autenticado de clientes/aplicações via MSA (587) versus retransmissão servidor-servidor (25)'
    ]
  },
  '4.2.3': {
    itemId: '4.2.3',
    highYieldSummary: [
      'Definição e escopo: a proteção antispam e antimalware opera em camadas sucessivas antes da gravação na caixa postal — reputação de IP na conexão SMTP, validação criptográfica de remetente, atraso seletivo (Greylisting), análise heurística de conteúdo (SCL) e isolamento em quarentena. Reduz o consumo de I/O e armazenamento bloqueando ameaças ainda na borda SMTP.',
      'Camadas de Filtragem Antispam: filtragem de conexão/IP — RBL/DNSBL (Real-time Blackhole List / DNS-based Blackhole List) e reputação — validação de protocolos e identidade (SPF, DKIM, DMARC, FCrDNS — Forward-Confirmed Reverse DNS), Greylisting, análise de conteúdo/heurística e sandboxing (execução isolada) de anexos/URLs.',
      'RBL / DNSBL (Real-time Blackhole List): listas dinâmicas consultadas via DNS para rejeitar ou pontuar IPs remetentes conhecidos por envio de spam (mitiga sobrecarga já na conexão SMTP antes do comando `DATA`).',
      'Greylisting: devolve código SMTP temporário `4xx` (ex.: `451 4.7.1`) para tuplas desconhecidas (IP, remetente, destinatário); MTAs legítimos reenviam minutos depois enquanto spambots simples descartam.',
      'Ações sobre Mensagens Suspeitas: Rejeição imediata no SMTP (`5xx`), Quarentena administrativa ou do usuário, entrega com tag no assunto ou entrega na pasta Lixo Eletrônico (`Junk Email`) conforme SCL (Spam Confidence Level).',
      'SCL e Anti-Malware no Exchange: Exchange atribui pontuação SCL (`0–9`, sendo `-1` bypass confiável) via agentes de transporte (ativos por padrão no Edge Transport, opcionais via script no Mailbox ou aplicados por gateway de borda dedicado).',
      'Exemplo operacional: um gateway de borda consulta listas **RBL** após o comando `RCPT TO` e rejeita imediatamente IPs listados com `550 5.7.1 Service unavailable`, antes mesmo da fase `DATA`. Mensagens aceitas de remetentes inéditos passam por **Greylisting (`451`)** e, ao serem entregues ao Exchange com cabeçalho `X-MS-Exchange-Organization-SCL: 6`, são direcionadas automaticamente à pasta **Junk Email**, enquanto anexos executáveis são retidos na **Quarentena**.'
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
    keyTerms: [
      'RBL / DNSBL: base de reputação consultada em tempo real via DNS para bloquear IPs de origem abusivos antes do comando DATA',
      'Greylisting: técnica que devolve erro temporário 4xx na primeira tentativa para descartar bots que não implementam fila de retry',
      'SCL (Spam Confidence Level): pontuação interna do Exchange (-1 a 9) que define se a mensagem é entregue, vai para Junk Email ou é bloqueada',
      'Códigos 4xx vs 5xx: falha transitória sujeita a retentativa automática (4xx) versus falha permanente com rejeição imediata (5xx)',
      'Quarentena / Sandboxing: retenção isolada de mensagens suspeitas e análise comportamental de anexos/links antes da entrega'
    ]
  },
  '4.2.4': {
    itemId: '4.2.4',
    highYieldSummary: [
      'Definição e escopo: conectores no Microsoft Exchange Server controlam o fluxo SMTP de entrada (Receive Connectors, vinculados a cada servidor) e de saída externa (Send Connectors, de escopo organizacional no Active Directory). Definem portas de escuta, faixas IP aceitas, mecanismos de autenticação/TLS e o roteamento externo via DNS MX ou Smart Host.',
      'Receive Connectors (Entrada): configurados POR SERVIDOR Exchange; definem IPs/portas de escuta (`25`, `587`, `465`, `2525`), IPs remotos permitidos (`RemoteIPRanges`), métodos de autenticação — TLS, Integrated Windows (Kerberos/NTLM), Basic após TLS — e grupos de permissão.',
      'Send Connectors (Saída): têm escopo ORGANIZACIONAL (armazenados no AD e compartilhados); controlam envio para fora da organização definindo Address Space (ex.: `*` com custo `1`) e roteamento por DNS MX ou Smart Host.',
      'Conectores Padrão no Mailbox Server: `Default Frontend` (`25`), `Client Frontend` (`587`), `Outbound Proxy Frontend` (`717`), `Default <Server>` (`2525`) e `Client Proxy` (`465` — recebe tráfego autenticado proxiado do `Client Frontend` 587, não diretamente de clientes externos por padrão).',
      'Fluxo Interno Automático: entre servidores Exchange da mesma organização, o transporte interno ocorre automaticamente via conectores implícitos autenticados por Kerberos/TLS sem exigir Send Connectors manuais.',
      'Seleção de Conector mais específico: quando múltiplos Receive Connectors escutam na mesma porta e IP local, o Exchange escolhe o conector cujo `RemoteIPRanges` for mais específico para o IP conectante.',
      'Exemplo operacional: após instalar o primeiro Mailbox Server, cria-se o conector de saída para a Internet via `New-SendConnector -Name "Internet-Saida" -Usage Internet -AddressSpaces "SMTP:*;1" -DNSRoutingEnabled $false -SmartHosts antispam.hosp.org.br -SourceTransportServers EX01,EX02`. Se uma aplicação interna em `10.20.5.40` conectar à porta `25`, o Exchange selecionará o conector customizado com `RemoteIPRanges 10.20.5.40` em vez do `Default Frontend` (`0.0.0.0-255.255.255.255`) por maior especificidade.'
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
    keyTerms: [
      'Receive Connector: objeto por servidor Exchange que escuta conexões SMTP de entrada filtradas por porta, IP remoto e autenticação',
      'Send Connector: objeto organizacional no AD que define roteamento SMTP de saída para domínios externos via MX ou Smart Host',
      'Address Space (*): espaço de endereçamento SMTP (domínio e custo) que determina quais destinatários externos usam um Send Connector',
      'Client Frontend (587) vs Client Proxy (465): conector de submissão no Frontend Transport (587) que encaminha ao conector interno no Transport Service (465)',
      'Especificidade de RemoteIPRanges: critério determinístico do Exchange para escolher entre dois Receive Connectors na mesma porta/IP'
    ]
  },
  '4.2.5': {
    itemId: '4.2.5',
    highYieldSummary: [
      'Definição e escopo: o serviço Transport do Exchange gerencia mensagens em trânsito em filas persistidas no banco ESE `mail.que` até entrega local ou repasse SMTP externo. O controle de filas envolve políticas de retentativa (retry), isolamento de mensagens problemáticas (Poison Queue) e proteção contra esgotamento de recursos (Back Pressure).',
      'Banco de Filas (`mail.que`): o serviço Transport armazena mensagens em trânsito em um banco ESE (Extensible Storage Engine) chamado `mail.que` (localizado em `C:\\Program Files\\Microsoft\\Exchange Server\\V15\\TransportRoles\\data\\Queue\\mail.que` no Exchange 2016/2019) até serem entregues ao banco de caixas ou ao próximo salto externo.',
      'Tipos de Filas no Queue Viewer: Submission Queue (aguardando categorização), Mailbox Delivery Queue, Remote Delivery Queue (aguardando entrega externa por domínio/conector), Unreachable Queue (sem rota disponível) e Poison Message Queue.',
      'Poison Message Queue: isola mensagens malformadas que provocaram falha/crash repetido no processo `EdgeTransport.exe`, impedindo que derrubem o serviço em loop; requer análise manual (`Resume-Message` ou `Remove-Message`).',
      'Comportamento de Retry e Expiração: falhas transitórias (`4xx`/timeout) colocam a fila em estado `Retry` com intervalos crescentes; após Delay Notification (padrão `4 h`) envia aviso ao remetente e após Maximum Message Expiration (padrão `2 dias`) devolve NDR (Non-Delivery Report) `5xx`.',
      'Monitoramento de Filas: crescimento abrupto na Submission ou Remote Delivery Queue sinaliza queda de Smart Host, bloqueio em RBL, conta comprometida disparando spam ou falta de espaço em disco (Back Pressure — contenção automática de recebimento SMTP).',
      'Exemplo operacional: durante uma indisponibilidade do Smart Host externo, `Get-Queue` exibe centenas de mensagens acumuladas na `Remote Delivery Queue` em status `Retry` com erro `451 4.4.0 Primary target IP address responded with timeout`. Após restabelecer o gateway, executa-se `Retry-Queue -Identity EX01\\12 -Resubmit $true` para escoar o represamento; se o disco do `mail.que` atingir o limite crítico, o **Back Pressure** responde `452 4.3.1` bloqueando novas entradas.'
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
    keyTerms: [
      'mail.que: banco ESE do serviço de transporte que armazena temporariamente todas as filas SMTP em trânsito no servidor',
      'Submission vs Remote Delivery Queue: fila inicial aguardando categorização/resolução versus fila de saída por domínio/conector externo',
      'Poison Message Queue: fila de isolamento para mensagens que causaram falha repetida do EdgeTransport.exe, sem retry automático',
      'Back Pressure: mecanismo protetor que suspende entrada SMTP (erro 452 4.3.1) quando disco ou memória atingem limites críticos',
      'NDR (Non-Delivery Report): relatório automático 5xx enviado ao remetente quando uma mensagem falha ou expira após o limite (padrão 2 dias)'
    ]
  },
  '4.2.6': {
    itemId: '4.2.6',
    highYieldSummary: [
      'Definição e escopo: o Message Tracking registra em logs CSV estruturados todo o ciclo de vida das mensagens que atravessam os serviços de transporte e entrega do Exchange Server. Permite rastrear ponta a ponta recebimento, expansão de listas, entrega em caixa, saída externa, redundância de sombra e falhas por meio do cmdlet `Get-MessageTrackingLog`.',
      'Message Tracking Logs: registros estruturados (em formato CSV — Comma-Separated Values — armazenados localmente em cada servidor Transport) que documentam toda passagem, recebimento, entrega, expansão de lista, redirecionamento e falha de mensagens.',
      'Cmdlet `Get-MessageTrackingLog`: ferramenta central de auditoria e suporte no EMS (Exchange Management Shell) para rastrear remetente, destinatário, assunto, `MessageId`, IP de origem e `EventId` (`RECEIVE`, `SEND`, `DELIVER`, `FAIL`, `TRANSFER`, `EXPAND`, `HAREDIRECT`).',
      'Eventos principais: `RECEIVE` (entrou via SMTP/Store), `SUBMIT` (submetida pelo usuário), `DELIVER` (gravada na caixa local), `SEND` (enviada via SMTP externo), `FAIL` (NDR permanente), `DEFER` (adiada/retry) e `HAREDIRECT` (cópia redirecionada para Shadow Redundancy — redundância de sombra).',
      'Rastreamento Multi-Servidor: como os logs ficam em cada servidor de transporte/Mailbox, consultas em DAGs (Database Availability Groups) ou múltiplos servidores usam `Get-TransportService | Get-MessageTrackingLog` para varrer todos os nós.',
      'Retenção e Troubleshooting: retenção padrão de `30 dias` (ou limite de tamanho por pasta); fundamental para provar se um e-mail saiu da organização e foi aceito (`250 OK`) pelo servidor remoto.',
      'Exemplo operacional: para investigar um e-mail não recebido por um convênio externo, o administrador executa `Get-TransportService | Get-MessageTrackingLog -Sender "faturamento@hosp.org.br" -Recipients "auditoria@convenio.com.br" -Start (Get-Date).AddHours(-12) | Select-Object Timestamp,ServerHostname,EventId,Source,ConnectorId | Sort-Object Timestamp`. A sequência `SUBMIT -> RECEIVE -> HAREDIRECT -> SEND` comprova entrega aceita pelo próximo salto.'
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
    keyTerms: [
      'Get-MessageTrackingLog: cmdlet do EMS que pesquisa logs locais de transporte por remetente, destinatário, MessageId ou intervalo',
      'EventId (RECEIVE / SEND / DELIVER): códigos de estágio indicando entrada SMTP/Store, envio externo aceito ou gravação na caixa',
      'DEFER vs FAIL: evento de adiamento temporário para retentativa (DEFER) versus falha definitiva geradora de NDR (FAIL)',
      'HAREDIRECT (Shadow Redundancy): evento indicando criação de cópia de sombra em outro servidor Exchange antes da confirmação de entrega',
      'Get-TransportService | Get-MessageTrackingLog: encadeamento necessário para consolidar logs de todos os servidores da organização'
    ]
  },
  '4.2.7': {
    itemId: '4.2.7',
    highYieldSummary: [
      'Definição e escopo: o OWA (Outlook on the web) fornece acesso web completo a e-mail, calendário e contatos via HTTPS (TCP 443) através do IIS (Internet Information Services) no Mailbox Server. Sua publicação segura apoia-se em arquitetura Front-End/Back-End, URLs unificadas por Split-DNS, políticas de sessão/anexo e proteção por Reverse Proxy/WAF.',
      'OWA (Outlook on the web): cliente webmail corporativo servido via HTTPS (TCP 443) através do diretório virtual `/owa` no IIS (Internet Information Services) do servidor Exchange Mailbox.',
      'Arquitetura de Proxy Reverso e Autenticação: requisições chegam pelo Front-End IIS (`Default Web Site`, porta 443) que autentica — Forms-Based Auth (formulário web), Windows/Kerberos ou SAML (Security Assertion Markup Language) / AD FS (Active Directory Federation Services) — e encaminha ao Back-End (porta 444) do servidor que hospeda a cópia ativa da caixa.',
      'URLs Internas e Externas (Split-DNS): cada diretório virtual possui `InternalUrl` e `ExternalUrl` (ex.: `https://mail.empresa.br/owa`); usar o mesmo FQDN interno e externo (Split-DNS — resolução interna apontando para o IP privado e externa para o IP público) simplifica certificados SAN (Subject Alternative Name) e evita alertas no cliente.',
      'Políticas de OWA (`OwaMailboxPolicy`): controlam recursos permitidos na web, como bloqueio de download ou visualização de anexos em dispositivos não gerenciados, tema, assinatura e acesso offline.',
      'Hardening de OWA: publicação externa sempre protegida por Reverse Proxy / WAF (Web Application Firewall), TLS 1.2/1.3 estrito, bloqueio de acesso ao `/ecp` (Exchange Admin Center) na Internet e aplicação rigorosa de patches cumulativos — CUs (Cumulative Updates) e SUs (Security Updates).',
      'Exemplo operacional: na implantação com **Split-DNS**, padroniza-se `Set-OwaVirtualDirectory -Identity "EX01\\owa (Default Web Site)" -InternalUrl "https://mail.hosp.org.br/owa" -ExternalUrl "https://mail.hosp.org.br/owa"` e aplica-se uma **OwaMailboxPolicy** desabilitando `DirectFileAccessOnPublicComputersEnabled`. Na borda, o **WAF** publica apenas `/owa`, `/ews`, `/mapi`, `/Microsoft-Server-ActiveSync` e `/autodiscover`, bloqueando `/ecp` da Internet.'
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
    keyTerms: [
      'Front-End (443) vs Back-End (444): site IIS receptor que autentica e proxeia (443) para o site interno onde reside o aplicativo OWA/ECP (444)',
      'InternalUrl vs ExternalUrl: propriedades dos diretórios virtuais que definem os endereços entregues pelo Autodiscover dentro e fora da LAN',
      'Split-DNS: configuração de mesmo FQDN em zonas DNS interna (IP privado) e externa (IP público) simplificando URLs e certificados',
      'OwaMailboxPolicy: política granular aplicada a caixas postais para restringir download de anexos, offline e recursos no navegador',
      'Bloqueio de /ecp na borda: medida de hardening que impede acesso externo ao painel administrativo mantendo o OWA acessível'
    ]
  },
  '4.2.8': {
    itemId: '4.2.8',
    highYieldSummary: [
      'Definição e escopo: EWS (Exchange Web Services) e Autodiscover são os serviços HTTPS fundamentais para integração programática e autoconfiguração de clientes no Exchange. Enquanto o EWS expõe recursos de caixa, calendário (Free/Busy) e ausência (OOF) via SOAP/XML, o Autodiscover entrega dinamicamente todas as URLs de acesso usando SCP no AD ou registros DNS externos.',
      'EWS (Exchange Web Services): API (Application Programming Interface) baseada em SOAP/XML (Simple Object Access Protocol / Extensible Markup Language) sobre HTTPS (`/EWS/Exchange.asmx`) usada por clientes (Outlook para Mac, sistemas integrados, consulta Free/Busy — disponibilidade — Out of Office e aplicações corporativas).',
      'Autodiscover: serviço XML (`/Autodiscover/Autodiscover.xml`) que entrega automaticamente aos clientes as URLs de EWS, OWA, OAB (Offline Address Book), MAPI/HTTP e servidores internos/externos sem configuração manual.',
      'Fluxo de Descoberta do Autodiscover: clientes ingressados no AD consultam primeiro o SCP (Service Connection Point — objeto de publicação no Active Directory) antes do DNS; clientes externos consultam DNS HTTPS em `autodiscover.<domínio>` ou `<domínio>/autodiscover` e fallback por registro SRV (`_autodiscover._tcp.<domínio>`).',
      'Troubleshooting de Free/Busy e OOF (Out of Office): falhas ao visualizar agenda livre/ocupada ou configurar resposta automática no Outlook geralmente indicam erro no diretório virtual EWS, Autodiscover ou certificado TLS inválido.',
      'Segurança EWS: restringir acesso externo quando desnecessário, monitorar aplicações com permissão `EWS ApplicationImpersonation` (personificação de múltiplas caixas) e migrar integrações legadas para autenticação moderna / OAuth (Open Authorization) onde aplicável.',
      'Exemplo operacional: após migrar servidores Exchange, estações na rede interna exibem aviso de certificado ao abrir o Outlook porque o **SCP** ainda aponta para o FQDN antigo `https://ex-old.hosp.local/Autodiscover/Autodiscover.xml`. Executa-se `Set-ClientAccessService -Identity EX01 -AutoDiscoverServiceInternalUri https://autodiscover.hosp.org.br/Autodiscover/Autodiscover.xml`, corrigindo o **Autodiscover** interno e restabelecendo consultas **Free/Busy** e **OOF** via **EWS**.'
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
    keyTerms: [
      'EWS (/EWS/Exchange.asmx): endpoint SOAP/XML responsável por Free/Busy, Out of Office, clientes alternativos e integrações de sistemas',
      'Autodiscover: serviço XML que informa automaticamente ao cliente as URLs internas e externas de EWS, OWA, OAB e MAPI/HTTP',
      'SCP (Service Connection Point): objeto no AD consultado prioritariamente por máquinas do domínio para localizar o endpoint Autodiscover',
      'SRV _autodiscover._tcp: registro DNS de contingência (porta 443) usado por clientes externos quando o host autodiscover.<domínio> não responde',
      'ApplicationImpersonation: papel RBAC que permite a uma aplicação EWS atuar em nome de múltiplas caixas (exige auditoria estrita)'
    ]
  },
  '4.2.9': {
    itemId: '4.2.9',
    highYieldSummary: [
      'Definição e escopo: o DAG (Database Availability Group) provê alta disponibilidade e recuperação contínua em nível de banco de dados no Exchange Server apoiado em componentes do WSFC (Windows Server Failover Clustering). Replica transações em tempo real por log shipping entre até 16 servidores Mailbox, mantendo quórum via File Share Witness, modo DAC em múltiplos datacenters e comutação automática gerenciada pelo Active Manager.',
      'DAG (Database Availability Group): arquitetura de alta disponibilidade e resiliência de dados do Exchange baseada em WSFC (Windows Server Failover Clustering) com até 16 servidores Mailbox replicando cópias de bancos `.EDB`.',
      'Replicação Contínua por Logs: as transações gravadas no banco ativo são enviadas continuamente (`TCP 64327` padrão) como arquivos de log de transação para as cópias passivas, que validam e aplicam (*replay*) os logs.',
      'Witness Server (FSW — File Share Witness) e DAC: o FSW é obrigatório quando o DAG possui número PAR de nós (ex.: 2 ou 4 servidores) para garantir maioria de quórum (`50% + 1`) e impedir split-brain em quedas de rede; o modo DAC (Datacenter Activation Coordination) evita que bancos subam em split-brain ao religar um datacenter após perda total.',
      'Failover e Switchover: Failover é a ativação automática de uma cópia passiva saudável diante de falha do nó ou banco ativo — coordenada pelo PAM (Primary Active Manager) via Active Manager; Switchover é a movimentação planejada manual para manutenção.',
      'Redes do DAG e Lagged Copy: separa-se a rede MAPI (tráfego de clientes/AD/DNS) das redes de Replicação dedicadas; cópias com atraso no replay (`ReplayLagTime`, ex.: `7 dias` — *Lagged Copy*) protegem contra corrupção lógica, embora snapshots/backups imutáveis sejam preferidos.',
      'Exemplo operacional: um DAG com 2 nós (`EX01` e `EX02`) utiliza um **File Share Witness** em servidor de arquivos separado (`FS01`) para manter quórum de `3` votos e **DAC mode** habilitado (`Set-DatabaseAvailabilityGroup DAG01 -DatacenterActivationMode DagOnly`). Para manutenção em `EX01`, o administrador confere `Get-MailboxDatabaseCopyStatus *` (`Healthy` e `CopyQueueLength = 0`), executa `Move-ActiveMailboxDatabase DB01 -ActivateOnServer EX02` (**Switchover**) e valida o cluster com `Test-ReplicationHealth`.'
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
    keyTerms: [
      'DAG (Database Availability Group): grupo de até 16 servidores Mailbox que replicam continuamente bancos .EDB via log shipping (TCP 64327)',
      'FSW (File Share Witness): compartilhamento SMB em servidor externo ao DAG que fornece voto de desempate para manter quórum em número par de nós',
      'DAC (Datacenter Activation Coordination): protocolo do DAG que impede montagem em split-brain após falha e restauração de datacenter',
      'Failover vs Switchover: comutação automática não planejada pelo Active Manager/PAM diante de pane versus movimentação manual controlada',
      'Lagged Copy (ReplayLagTime): cópia passiva que recebe logs em tempo real mas atrasa o replay no .EDB para proteção contra corrupção lógica'
    ]
  },
  '4.2.10': {
    itemId: '4.2.10',
    highYieldSummary: [
      'Definição e escopo: os bancos de dados de caixa postal do Exchange Server operam sobre o motor transacional ESE (Extensible Storage Engine), combinando arquivos `.EDB`, logs de transação sequenciais de 1 MB e checkpoints (`.chk`) segundo o modelo Write-Ahead Logging (WAL). A integridade exige backup compatível via VSS para truncamento seguro de logs e diagnóstico com `eseutil` em paradas abruptas.',
      'Arquitetura ESE (Extensible Storage Engine): cada Mailbox Database consiste no arquivo principal `.EDB` (caixas, mensagens, índices) e em uma sequência de arquivos de log de transação de `1 MB` (`ExxNNNNN.log`) + arquivo de checkpoint (`Exx.chk` — marca até qual log já foi gravado no `.EDB`).',
      'Write-Ahead Logging (WAL): toda alteração é gravada primeiro em memória e no arquivo de log de transação (`.log`) sequencial e só depois gravada no `.EDB` de forma assíncrona (por isso os logs são essenciais para recuperar falhas).',
      'Clean Shutdown vs Dirty Shutdown: ao desmontar normalmente, o Exchange grava todos os logs pendentes no `.EDB` (`Clean Shutdown`); após queda abrupta, o estado é `Dirty Shutdown` (exige replay dos logs a partir do checkpoint para voltar a montar).',
      'Circular Logging: sobrescreve os arquivos de log já aplicados ao `.EDB` economizando disco; porém IMPEDE backups incrementais/diferenciais baseados em logs e impossibilita recuperação *point-in-time*.',
      'Manutenção e Truncamento de Logs: em operação normal sem Circular Logging, somente um backup Exchange-aware via VSS (Volume Shadow Copy Service) trunca (remove) logs antigos já aplicados após confirmar integridade.',
      'Exemplo operacional: após falha de energia em um servidor isolado, o banco `DB01` recusa montar; o comando `eseutil /mh "E:\\ExchangeDB\\DB01\\DB01.edb"` indica `State: Dirty Shutdown` e aponta a sequência pendente de logs `E00`. O administrador executa *Soft Recovery* com `eseutil /r E00 /l "E:\\ExchangeLogs\\DB01" /d "E:\\ExchangeDB\\DB01"` para aplicar os logs de `1 MB` pendentes, retornando o banco a `Clean Shutdown` sem perda de dados.'
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
    keyTerms: [
      'Write-Ahead Logging (WAL): técnica em que transações são gravadas primeiro nos logs sequenciais de 1 MB antes de irem ao .EDB',
      'Checkpoint (Enn.chk): ponteiro que registra o último arquivo de log cujas transações já foram efetivamente gravadas no .EDB',
      'Clean vs Dirty Shutdown: estado íntegro sem logs pendentes (Clean) versus necessidade de replay de logs antes da montagem (Dirty)',
      'Circular Logging: sobrescrita contínua de logs já comitados que reduz disco mas inviabiliza backup incremental e PITR',
      'Truncamento via VSS: exclusão segura de logs já aplicados disparada exclusivamente após confirmação de backup Exchange-aware'
    ]
  },
  '4.2.11': {
    itemId: '4.2.11',
    highYieldSummary: [
      'Definição e escopo: certificados digitais X.509 com Subject Alternative Name (SAN) garantem confidencialidade TLS e autenticação confiável para acesso de clientes HTTPS (OWA, EWS, MAPI/HTTP, Autodiscover na porta 443) e transporte SMTP (STARTTLS). Sua operação correta depende de alinhamento com Split-DNS e vinculação explícita aos serviços Exchange via `Enable-ExchangeCertificate`.',
      'Certificados SAN (Subject Alternative Name): o Exchange exige um único ou poucos certificados contendo múltiplos nomes no campo SAN — tipicamente o FQDN de acesso (`mail.empresa.br`) e `autodiscover.empresa.br` (além de nomes internos quando não se utiliza Split-DNS).',
      'Atribuição aos Serviços Exchange: após importar o certificado X.509 (`.pfx`/`.cer`) no repositório do servidor, é obrigatório vinculá-lo aos serviços corretos (`IIS`, `SMTP`, opcionalmente `POP`/`IMAP`) via `Enable-ExchangeCertificate`.',
      'Certificados SMTP e Autenticação de Transporte: o serviço SMTP usa um certificado autoassinado interno entre servidores do DAG ou um certificado confiável de CA (Certificate Authority — Autoridade Certificadora) pública/interna para STARTTLS com parceiros na Internet.',
      'Erro de Name Mismatch no Outlook: ocorre quando o SCP (Service Connection Point) do Autodiscover aponta para um nome interno (ex.: `ex01.ad.local`) que não consta no certificado público SAN emitido pela CA comercial.',
      'Wildcard vs SAN: certificados wildcard (`*.empresa.br`) funcionam para OWA/EWS/Autodiscover na maioria dos cenários, mas não cobrem subdomínios de múltiplos níveis e podem apresentar restrições em clientes ou serviços POP/IMAP específicos (além de exigir atenção caso haja serviços antigos de mensageria unificada).',
      'Exemplo operacional: após renovar o certificado comercial com SANs `mail.hosp.org.br` e `autodiscover.hosp.org.br`, importa-se o `.pfx` no servidor `EX01`, lista-se o thumbprint com `Get-ExchangeCertificate` e executa-se `Enable-ExchangeCertificate -Thumbprint <HASH> -Services IIS,SMTP` (preservando o `Microsoft Exchange Server Auth Certificate` ativo). Se o Outlook ainda alertar *Name Mismatch*, ajusta-se o SCP e as URLs virtuais via **Split-DNS**.'
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
    keyTerms: [
      'SAN (Subject Alternative Name): extensão X.509 que lista todos os FQDNs válidos no mesmo certificado (ex.: mail e autodiscover)',
      'Enable-ExchangeCertificate: cmdlet obrigatório que vincula um certificado importado aos serviços IIS, SMTP, POP ou IMAP do Exchange',
      'Name Mismatch: erro de confiança TLS gerado quando a URL configurada (SCP/VirtualDirectory) diverge dos nomes do campo SAN',
      'Microsoft Exchange Server Auth Certificate: certificado interno usado na assinatura de tokens OAuth entre Exchange, EAC e OWA',
      'Wildcard (*.domínio): certificado coringa válido para um único nível de subdomínio com restrições em cenários POP/IMAP ou subdomínios aninhados'
    ]
  },
  '4.2.12': {
    itemId: '4.2.12',
    highYieldSummary: [
      'Definição e escopo: o troubleshooting de correio eletrônico e Exchange combina verificação de conectividade SMTP/STARTTLS (`telnet`, `openssl s_client`), análise cronológica de cabeçalhos (`Received:` e `Authentication-Results:`), auditoria de serviços/filas/replicação no EMS e interpretação padronizada de códigos NDR (`4xx`/`5xx`). Isola rapidamente se a falha reside em DNS, rede, autenticação, transporte ou saúde de banco.',
      'Teste de Fluxo SMTP manual e PowerShell: validar entrega local ou entre bancos com `Test-Mailflow`; testar conectividade de porta, banner `220`, `EHLO` e `STARTTLS` com `telnet <host> 25`, `Test-NetConnection` ou `openssl s_client -starttls smtp -connect host:25`.',
      'Leitura de Cabeçalhos SMTP (Message Headers): analisar cabeçalhos `Received:` sempre de BAIXO para CIMA (da origem até o servidor receptor) para medir latência por salto e localizar o IP remetente real; verificar SPF/DKIM/DMARC em `Authentication-Results:`.',
      'Diagnóstico de Serviços e Filas: usar `Test-ServiceHealth` para checar serviços críticos do Exchange, `Get-Queue` para identificar represamentos ou erros SMTP (`4xx`/`5xx`) e `Test-ReplicationHealth` em nós de DAG.',
      'Diagnóstico de Cliente/Web/Autodiscover: utilizar o ExRCA (Microsoft Remote Connectivity Analyzer) ou `Test-OutlookWebServices` / `Test-OwaConnectivity` para validar endpoints HTTPS, certificados e redirecionamento Autodiscover.',
      'Erros clássicos de entrega — NDR (Non-Delivery Report): `550 5.1.1` (destinatário inexistente), `550 5.7.1` (relay negado, bloqueio de política ou falha SPF/DMARC), `451 4.4.x` (DNS ou timeout temporário) e `452 4.3.1` (Back Pressure / recursos insuficientes em disco ou memória).',
      'Exemplo operacional: um usuário recebe NDR `550 5.7.1 Unable to relay` ao enviar por uma aplicação interna, enquanto mensagens externas chegam com atraso de 15 minutos. O administrador testa o conector com `Test-NetConnection mail.hosp.org.br -Port 25`, verifica a cadeia `Received:` de **baixo para cima** (identificando atraso de `14 min` no gateway antispam de borda), confirma que `Authentication-Results` traz `spf=pass dkim=pass dmarc=pass` e ajusta o `RemoteIPRanges` da aplicação.'
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
    keyTerms: [
      'Received: (Baixo para Cima): cadeia de cabeçalhos inserida a cada salto SMTP permitindo rastrear origem real e latência por servidor',
      'Authentication-Results: cabeçalho inserido pelo receptor documentando os vereditos de SPF, DKIM e DMARC',
      'Test-Mailflow / Test-ServiceHealth: cmdlets de verificação fim a fim da entrega entre bancos e do estado dos serviços Exchange',
      'openssl s_client -starttls smtp: teste em linha de comando que negocia STARTTLS e exibe a cadeia de certificado X.509 do MTA',
      'NDR 550 5.7.1 vs 452 4.3.1: bloqueio permanente de relay/política (550 5.7.1) versus rejeição temporária por Back Pressure (452 4.3.1)'
    ]
  }
};
