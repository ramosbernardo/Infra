import { Flashcard } from '../../types/edital';

export const FLASHCARDS_AXIS_9_TO_12: readonly Flashcard[] = [
  // ==================== EIXO 9 (9 itens restantes) ====================
  {
    id: 'fc-118',
    itemId: '9.1.1',
    front: 'Qual a diferença entre Proxy Reverso e Servidor de Aplicação, e quais benefícios de colocar Nginx/HAProxy/ADC na frente da aplicação?',
    back: 'Proxy reverso recebe conexões externas em nome dos backends (termina TLS, faz cache, compressão, WAF e balanceamento); servidor de aplicação (Tomcat/JBoss/IIS/Node) executa regras de negócio em portas internas.'
  },
  {
    id: 'fc-119',
    itemId: '9.1.2',
    front: 'Por que a replicação de sessão em memória (ou session store externo em Redis/banco) permite failover transparente sem Sticky Sessions?',
    back: 'Sem estado compartilhado, a queda de um nó derruba o login do usuário; externalizando sessões (ou usando tokens stateless assinados), qualquer servidor do pool atende a requisição seguinte sem perda de sessão.'
  },
  {
    id: 'fc-120',
    itemId: '9.1.3',
    front: 'Por que um par de balanceadores/servidores Ativo-Ativo operando a 80% de carga em cada nó NÃO é tolerante a falhas?',
    back: 'Ao cair um nó, o sobrevivente recebe 80% + 80% = 160% de demanda e entra em colapso em cascata. Em par Ativo-Ativo N+1 seguro, cada nó deve operar abaixo de 40–50% em regime normal.'
  },
  {
    id: 'fc-121',
    itemId: '9.2.1',
    front: 'No protocolo VRRP (usado em HA de balanceadores A10/HAProxy/Keepalived), qual o número de protocolo IP, o multicast usado e como vence a eleição?',
    back: 'Protocolo IP 112 (não usa TCP/UDP). Multicast: 224.0.0.18. Vence o roteador com MAIOR Priority configurada (faixa 1–254, padrão 100; 255 se o IP real coincidir com o VIP) — oposto ao STP onde vence o menor.'
  },
  {
    id: 'fc-122',
    itemId: '9.2.2',
    front: 'No balanceamento de carga (ADC), qual o papel do Virtual Server (VIP) frente aos nós físicos de backend?',
    back: 'O VIP expõe um único IP:porta lógico no balanceador ao qual o DNS aponta; recebe conexões externas, aplica políticas L4/L7/TLS e encaminha apenas para servidores saudáveis do pool.'
  },
  {
    id: 'fc-123',
    itemId: '9.2.3',
    front: 'Compare os algoritmos de balanceamento Round Robin, Weighted Round Robin, Least Connections e Source IP Hash.',
    back: 'Round Robin alterna sequencialmente; Weighted distribui por peso de capacidade; Least Connections envia ao servidor com menos sessões abertas (ideal para requisições de duração variável); Source IP Hash mantém afinidade por IP.'
  },
  {
    id: 'fc-124',
    itemId: '9.2.4',
    front: 'Qual a vantagem de Health Checks ativos em camada L7 (HTTP/HTTPS validando código 200 e conteúdo) frente a testes L3 ICMP ou L4 TCP?',
    back: 'ICMP (ping) testa apenas a pilha IP do SO e TCP testa só socket aberto; Health Check L7 verifica se a aplicação responde 200 OK em endpoint `/health` (inclusive validando conexão ao banco de dados).'
  },
  {
    id: 'fc-125',
    itemId: '9.2.5',
    front: 'Compare Persistência de Sessão por Source IP vs Cookie HTTP (Insert/Prefix) quando múltiplos clientes saem atrás de um NAT corporativo.',
    back: 'Com Source IP atrás de NAT (CGNAT/proxy único), milhares de usuários chegam com o mesmo IP e sobrecarregam 1 backend; Persistência por Cookie HTTP inserido pelo ADC distribui cada navegador individualmente de forma equilibrada.'
  },
  {
    id: 'fc-126',
    itemId: '9.2.6',
    front: 'No balanceamento em modo NAT (Source NAT / Reverse Proxy) vs Direct Server Return (DSR / L2/IP), o que muda no tráfego de retorno e na visibilidade do IP real?',
    back: 'Em SNAT, o retorno volta pelo balanceador (permite inspeção L7 e SSL offload, exigindo `X-Forwarded-For` para preservar IP do cliente). Em DSR, o retorno vai direto do backend ao cliente mantendo IP real na origem e escalando alta largura de banda.'
  },

  // ==================== EIXO 10 (11 itens restantes) ====================
  {
    id: 'fc-127',
    itemId: '10.1.2',
    front: 'Quais são os 3 pilares clássicos da Observabilidade e o papel específico de cada um no diagnóstico?',
    back: '1) Métricas (séries temporais numéricas agregadas — detectam o sintoma), 2) Logs (eventos discretos imutáveis — explicam o que ocorreu) e 3) Traces distribuídos (caminho completo da requisição entre serviços).'
  },
  {
    id: 'fc-128',
    itemId: '10.1.3',
    front: 'Quais são os 4 Sinais Dourados (Four Golden Signals) de monitoramento de serviços segundo o SRE (Site Reliability Engineering)?',
    back: '1) Latência (tempo de resposta, distinguindo sucesso vs erro), 2) Tráfego (demanda req/s), 3) Erros (taxa de respostas 5xx/falhas) e 4) Saturação (quão cheio está o recurso limitante de CPU/RAM/fila).'
  },
  {
    id: 'fc-129',
    itemId: '10.2.1',
    front: 'No Zabbix, quais portas TCP padrão o Server escuta e o Agent escuta em verificações passivas vs ativas, e para que serve o Zabbix Proxy?',
    back: 'Zabbix Server/Proxy escuta TCP 10051 (recebe checks ativos e dados de proxy); Zabbix Agent escuta TCP 10050 (recebe checks passivos). Zabbix Proxy coleta dados locais em filiais e envia em lote ao Server, reduzindo carga e suportando falhas de WAN.'
  },
  {
    id: 'fc-130',
    itemId: '10.2.2',
    front: 'Quais as portas UDP padrão do SNMP Polling vs SNMP Trap e qual a diferença de segurança entre SNMPv1/v2c e SNMPv3?',
    back: 'SNMP Polling (Get/GetNext/Set): UDP 161. SNMP Trap/Inform: UDP 162. SNMPv1/v2c transmitem community strings em TEXTO CLARO; SNMPv3 suporta `noAuthNoPriv`, `authNoPriv` (SHA) e `authPriv` (autenticação + criptografia AES).'
  },
  {
    id: 'fc-131',
    itemId: '10.2.3',
    front: 'Quais portas usa o WMI/DCOM no Windows e por que sua evolução moderna em monitoramento/automação prefere WinRM?',
    back: 'WMI legado usa DCOM/RPC: TCP 135 + portas dinâmicas altas (1024–65535 ou 49152–65535), dificultando regras de firewall. WinRM (WS-Management) usa portas fixas HTTP TCP 5985 ou HTTPS TCP 5986.'
  },
  {
    id: 'fc-132',
    itemId: '10.2.4',
    front: 'No monitoramento por agentes (Zabbix Agent Passivo vs Ativo), quem abre a conexão TCP e qual modo facilita coleta atrás de firewall/NAT?',
    back: 'Check Passivo: o Server/Proxy conecta na porta 10050 do agente. Check Ativo: o próprio agente inicia conexão de saída para a porta 10051 do Server/Proxy (ideal para servidores atrás de NAT ou firewalls restritivos).'
  },
  {
    id: 'fc-133',
    itemId: '10.2.5',
    front: 'Em um sistema centralizado de logs/SIEM via Syslog, por que NTP/UTC rigoroso e coleta out-of-host são críticos?',
    back: 'Sincronia NTP em UTC garante ordem cronológica confiável na correlação de ataques entre múltiplos ativos; enviar logs imediatamente para servidor centralizado impede que invasores apaguem rastros locais no host comprometido.'
  },
  {
    id: 'fc-134',
    itemId: '10.2.6',
    front: 'Qual a diferença entre Métricas de Saturação/CPU (`load average`, `iowait`, `steal time` `%st`) e como interpretar `load average = 8` em servidor de 4 vCPUs?',
    back: 'Load average mede processos em execução + aguardando CPU/I-O; valor 8 em 4 vCPUs indica fila/saturação (~2x capacidade). `%wa` (`iowait`) aponta espera por disco; `%st` (`steal`) indica disputa de CPU física no hipervisor.'
  },
  {
    id: 'fc-135',
    itemId: '10.2.7',
    front: 'Para evitar "fadiga de alertas" no monitoramento, qual mecanismo evita disparos oscilatórios e qual evita notificações em cascata?',
    back: 'Histerese (diferença entre limiar de disparo e de recuperação, ou função `avg`/`min` em janela de N minutos) elimina flapping; Árvore de Dependências (Trigger Dependencies) suprime alertas de hosts atrás de um switch/link já caído.'
  },
  {
    id: 'fc-136',
    itemId: '10.2.8',
    front: 'Qual é o tempo máximo anual de indisponibilidade permitido por SLAs de 99%, 99,9% e 99,99% (ano de 365 dias)?',
    back: '99% ("dois noves"): ~3 dias e 15,6 horas/ano (87,6 h). 99,9% ("três noves"): ~8 horas e 45 minutos/ano. 99,99% ("quatro noves"): ~52,6 minutos/ano. 99,999%: ~5,26 minutos/ano.'
  },
  {
    id: 'fc-137',
    itemId: '10.2.9',
    front: 'Na gestão de capacidade (Capacity Planning), qual diferença distingue métricas de Tendência/Projeção de limiares reativos pontuais?',
    back: 'Limiares pontuais alertam quando o recurso já está quase cheio; projeções de tendência (`forecast`/`predict` em séries históricas) estimam com antecedência quando disco, RAM ou link atingirão saturação para guiar compras e upgrades.'
  },

  // ==================== EIXO 11 (10 itens restantes) ====================
  {
    id: 'fc-138',
    itemId: '11.1.2',
    front: 'No padrão FHS do Linux, qual a finalidade exata dos diretórios `/etc`, `/var`, `/proc`, `/usr`, `/tmp` e `/boot`?',
    back: '`/etc`: configurações estáticas do sistema; `/var`: dados variáveis (logs `/var/log`, filas, bancos); `/proc` e `/sys`: filesystems virtuais em memória com estado de kernel/processos; `/usr`: binários/libs de usuário; `/tmp`: temporários (Sticky Bit 1777); `/boot`: kernel e GRUB.'
  },
  {
    id: 'fc-139',
    itemId: '11.1.3',
    front: 'Quais os arquivos que guardam contas e senhas criptografadas no Linux, qual o UID do usuário root e quais os intervalos padrão de UID de contas de sistema vs usuários comuns?',
    back: '`/etc/passwd` (dados de conta legíveis por todos), `/etc/shadow` (hashes de senha restrito a root) e `/etc/group`. Root tem UID 0; contas de sistema: tipicamente 1–999; usuários comuns: a partir de 1000.'
  },
  {
    id: 'fc-140',
    itemId: '11.2.1',
    front: 'No comando `free -h` no Linux, qual a diferença prática entre as colunas `free` e `available`?',
    back: '`free` mostra apenas RAM totalmente sem uso; `available` inclui RAM `free` mais `buff/cache` (Page Cache) imediatamente recuperável pelo kernel se aplicações precisarem — é a métrica real de memória disponível.'
  },
  {
    id: 'fc-141',
    itemId: '11.2.2',
    front: 'Qual a porta padrão do SSH, onde ficam suas regras no servidor e quais 2 diretivas reduzem drasticamente risco de força bruta no `sshd_config`?',
    back: 'TCP 22. Arquivo: `/etc/ssh/sshd_config`. Hardening essencial: `PermitRootLogin no` e `PasswordAuthentication no` (forçando chaves assimétricas), além de `AllowUsers`/`AllowGroups` e uso de chave `Ed25519` com permissão `600` em `~/.ssh/authorized_keys`.'
  },
  {
    id: 'fc-142',
    itemId: '11.2.3',
    front: 'Em scripts Bash, o que significam `#!/bin/bash`, `set -euo pipefail`, aspas simples vs duplas e `2>&1`?',
    back: 'Shebang escolhe interpretador; `set -euo pipefail` aborta em erro, variável indefinida ou falha no meio de pipe; aspas simples (`\'...\'`) NÃO expandem `$VAR`, aspas duplas (`"..."`) expandem; `2>&1` envia stderr para stdout.'
  },
  {
    id: 'fc-143',
    itemId: '11.2.5',
    front: 'No gerenciamento de processos Linux, o que significam os sinais SIGTERM (15) vs SIGKILL (9) e um processo em estado Zombie (`Z`)?',
    back: 'SIGTERM (`kill -15`, padrão) pede encerramento gracioso limpando buffers/arquivos; SIGKILL (`kill -9`) mata imediatamente pelo kernel sem captura. Processo Zombie (`Z`) já terminou execução mas aguarda o pai ler seu exit code (não morre com `-9`, mata-se o PPID se travado).'
  },
  {
    id: 'fc-144',
    itemId: '11.2.6',
    front: 'No armazenamento Linux com LVM, qual a hierarquia das 3 camadas (`PV -> VG -> LV`) e qual comando mostra consumo de inodes vs espaço livre?',
    back: 'Hierarquia LVM: Physical Volume (PV — disco/partição) -> Volume Group (VG — pool) -> Logical Volume (LV — volume formatável). Espaço em blocos: `df -hT`; Inodes esgotados (disco livre mas "No space left"): `df -i`.'
  },
  {
    id: 'fc-145',
    itemId: '11.2.8',
    front: 'Qual a diferença entre `systemctl reload` e `systemctl restart` e qual comando lista sockets TCP/UDP abertos com seus PIDs?',
    back: '`reload` pede ao daemon para reler a configuração sem encerrar o processo nem derrubar conexões; `restart` para o processo e inicia outro novo. Portas em escuta com processo: `ss -tulnp`.'
  },
  {
    id: 'fc-146',
    itemId: '11.2.9',
    front: 'Quais comandos modernos da suíte `iproute2` substituem `ifconfig`, `route` e `netstat` no Linux, e onde ficam servidores DNS resolvidos?',
    back: '`ip addr` (substitui ifconfig), `ip route` (substitui route), `ss -tulnp` (substitui netstat) e `ip link`. Clientes DNS consultam `/etc/resolv.conf` (gerenciado por systemd-resolved/NetworkManager).'
  },
  {
    id: 'fc-147',
    itemId: '11.2.10',
    front: 'Qual comando consulta logs estruturados do systemd com filtro de unidade e horário, e onde o Debian/Ubuntu vs RHEL registram autenticação?',
    back: 'Systemd journal: `journalctl -u nginx --since "1 hour ago" -p err`. Logs clássicos de autenticação: `/var/log/auth.log` (Debian/Ubuntu) e `/var/log/secure` (RHEL/Rocky), além de `/var/log/syslog` ou `/var/log/messages`.'
  },

  // ==================== EIXO 12 (9 itens restantes) ====================
  {
    id: 'fc-148',
    itemId: '12.1.1',
    front: 'Em scripts POSIX/Bash, qual valor de `$?` indica sucesso vs falha, e como operam `&&` vs `||`?',
    back: 'Exit code `$? = 0` indica sucesso; `1` a `255` indica erro/falha. `cmd1 && cmd2` executa `cmd2` apenas se `cmd1` retornar 0; `cmd1 || cmd2` executa `cmd2` apenas se `cmd1` retornar diferente de 0.'
  },
  {
    id: 'fc-149',
    itemId: '12.2.1',
    front: 'Em PowerShell, o que trafega pelo pipeline (`|`) em comparação ao Bash, e para que servem `Where-Object`, `Select-Object` e `ForEach-Object`?',
    back: 'PowerShell trafega OBJETOS .NET tipados (não texto bruto como Bash). `Where-Object` filtra objetos pela propriedade; `Select-Object` escolhe propriedades/colunas; `ForEach-Object` itera executando bloco em cada objeto (`$_`).'
  },
  {
    id: 'fc-150',
    itemId: '12.2.2',
    front: 'Por que scripts Bash em produção devem usar `curl -fsSL` + aspas duplas em headers com `$TOKEN` + `mktemp` em arquivos temporários?',
    back: '`-f` falha em HTTP 4xx/5xx retornando exit != 0, `-sS` silencia barra mas exibe erros, `-L` segue redirects; aspas duplas (`"Authorization: Bearer $TOKEN"`) permitem expandir variáveis; `mktemp` cria temporários seguros sem race condition.'
  },
  {
    id: 'fc-151',
    itemId: '12.2.3',
    front: 'Em APIs REST, compare idempotência e uso dos métodos HTTP GET, POST, PUT, PATCH e DELETE e as faixas de status 2xx, 4xx e 5xx.',
    back: 'GET (leitura), HEAD, PUT (substituição completa) e DELETE são idempotentes; POST (criação) e PATCH (atualização parcial) tipicamente não garantem idempotência pura. Status: 2xx Sucesso (200/201/204), 4xx Erro do Cliente (400/401/403/404/429), 5xx Erro do Servidor (500/502/503).'
  },
  {
    id: 'fc-152',
    itemId: '12.2.4',
    front: 'Quais os 6 tipos de dados válidos na especificação JSON (RFC 8259) e quais 2 ferramentas manipulam JSON em linha de comando (Linux e PowerShell)?',
    back: '6 tipos JSON: String (aspas duplas obrigatórias), Number, Boolean (`true`/`false`), `null`, Object (`{}`) e Array (`[]`) — NÃO aceita comentários ou vírgula final. CLI: `jq` no Linux e `ConvertFrom-Json`/`ConvertTo-Json` no PowerShell.'
  },
  {
    id: 'fc-153',
    itemId: '12.2.5',
    front: 'Quais cuidados críticos evitam corrupção ao gerar ou importar CSV corporativo em PT-BR via PowerShell/Bash?',
    back: 'Padronizar encoding UTF-8 (BOM se Excel antigo), definir delimitador explícito (vírgula `,` vs ponto e vírgula `;` em locale PT-BR via `-Delimiter`), escapar campos com vírgulas/quebras usando aspas e usar `Import-Csv`/`Export-Csv -NoTypeInformation`.'
  },
  {
    id: 'fc-154',
    itemId: '12.2.6',
    front: 'Quais os 5 campos temporais do Cron no Linux e qual vantagem operacional tem systemd Timers frente ao Cron tradicional?',
    back: '5 campos do Cron: Minuto (0–59), Hora (0–23), Dia do Mês (1–31), Mês (1–12), Dia da Semana (0–7, 0 e 7 = domingo). Systemd timers suportam `Persistent=true` (recupera execuções perdidas após downtime), logging integrado no `journalctl` e dependências entre serviços.'
  },
  {
    id: 'fc-155',
    itemId: '12.2.7',
    front: 'Quais protocolos e portas utilizam Ansible (Linux vs Windows) e PowerShell Remoting para execução remota sem agente persistente?',
    back: 'Ansible gerencia Linux via SSH (TCP 22) e Windows via WinRM (TCP 5985 HTTP / TCP 5986 HTTPS); PowerShell Remoting (`Invoke-Command` / `Enter-PSSession`) utiliza WinRM (5985/5986) autenticado via Kerberos em domínio AD.'
  },
  {
    id: 'fc-156',
    itemId: '12.2.8',
    front: 'Como implementar tratamento estruturado de erros em PowerShell (cmdlet com Try/Catch) e em Bash?',
    back: 'No PowerShell, erros não-terminantes não entram no `catch` a menos que se adicione `-ErrorAction Stop` (ou `$ErrorActionPreference = "Stop"`). No Bash, usa-se `set -euo pipefail`, validação explícita de `$?` e `trap cleanup EXIT ERR`.'
  }
];
