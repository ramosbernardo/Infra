import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_12: Record<string, StudyGuide> = {
  '12.1.1': {
    itemId: '12.1.1',
    highYieldSummary: [
      'Estruturas de Controle em Scripts: condicionais (`if/elif/else`, `case` ou `switch`) avaliam expressões lógicas e códigos de retorno; laços de repetição (`for`/`foreach` para iterar listas e inventários de hosts; `while`/`until` para aguardar condição ou ler linhas de entrada) automatizam rotinas repetitivas com previsibilidade.',
      'Modularização com Funções e Escopo de Variáveis: encapsular tarefas recorrentes (ex.: `log_info`, `check_port`) em funções com parâmetros posicionais ou nomeados reduz duplicação; usar variáveis locais (`local` no Bash, escopo de função no PowerShell) evita colisões acidentais com variáveis globais.',
      'Códigos de Saída (Exit Codes) e Composição Segura: convenção universal POSIX retorna `0` para sucesso e valores entre `1` e `255` para falha; pipelines de automação e schedulers dependem de `exit 0` vs `exit 1` para saber se a tarefa concluiu corretamente ou se deve disparar alerta/rollback.',
      'Idempotência em Scripts de Infraestrutura: princípio fundamental segundo o qual executar o mesmo script uma vez ou dez vezes seguidas produz exatamente o mesmo estado final sem erros nem duplicação (ex.: checar se uma linha já existe no `/etc/hosts` ou se a conta já existe no AD antes de tentar criar).',
      'Segurança e Higiene em Scripts: nunca embutir senhas/tokens em texto claro dentro do código-fonte (usar cofres de segredos, variáveis de ambiente protegidas ou credenciais gerenciadas), validar parâmetros de entrada e quotar variáveis (`"$caminho"`) para prevenir injeção de comandos e quebra em nomes com espaço.'
    ],
    technicalReference: [
      'Exit Codes padrão: `0` = Sucesso | `!= 0` (1..255) = Erro | Operadores lógicos curtos: `cmd1 && cmd2` (só roda `cmd2` se `cmd1` == 0) vs `cmd1 || cmd2` (só se falhar)',
      'Boas práticas: Idempotência + Funções modulares + Escopo `local` + Sem credenciais hardcoded.'
    ],
    examTraps: [
      'Um script que usa `>> arquivo.conf` cegamente sem verificar se a diretiva já existe NÃO é idempotente — rodar 3 vezes duplica entradas e pode quebrar o serviço.',
      'No shell/scripts, `0` representa sucesso (`true` lógico em exit status) — confundir com boolean `0 = false` de linguagens de aplicação inverte desvios condicionais.',
      'Deixar variáveis sem aspas em `rm -rf $DIR/*` quando `$DIR` vier vazio expande para `rm -rf /*`!'
    ],
    keyTerms: ['Condicionais & Laços', 'Funções & Escopo', 'Exit Codes (0 vs !=0)', 'Idempotência', 'Segurança (Sem Secrets Hardcoded)']
  },
  '12.1.2': {
    itemId: '12.1.2',
    highYieldSummary: [
      'Cultura DevOps e Pipelines CI/CD: integração de Desenvolvimento e Operações visando entregas frequentes e confiáveis por meio de Integração Contínua (CI: versionamento Git, build automatizado, testes unitários/linting a cada commit) e Entrega/Implantação Contínua (CD: promoção automatizada entre ambientes com mínima intervenção manual e rollback rápido).',
      'Infraestrutura como Código (IaC — Declarativa vs Imperativa): provisionar redes, VMs, firewalls e clusters descrevendo o estado desejado em arquivos versionados no Git (ex.: Terraform declara o estado final desejado e calcula diff/plan; Ansible combina playbooks YAML idempotentes para gerenciamento de configuração sem agente via SSH/WinRM).',
      'Conteinerização com Docker (Containers vs VMs): containers empacotam aplicação e suas dependências em imagens em camadas (Dockerfile -> Image -> Container), compartilhando o kernel do sistema operacional host com isolamento por `namespaces` (PID, NET, MNT, USER) e limitação de CPU/RAM por `cgroups` — iniciam em milissegundos com footprint mínimo.',
      'Persistência e Rede em Docker: containers são efêmeros por natureza — dados persistentes devem ser montados externamente via Volumes gerenciados pelo Docker ou Bind Mounts; redes `bridge`, `host` e `overlay` conectam containers isolados.',
      'Orquestração com Kubernetes (K8s): gerencia clusters de containers em escala garantindo alta disponibilidade, auto-healing (reinicia/recria Pods falhos), escalonamento horizontal (HPA), rolling updates sem downtime e service discovery; unidade menor escalonável é o **Pod** (1 ou mais containers compartilhando rede/IP e storage), controlado por **Deployments/ReplicaSets** e exposto por **Services** (ClusterIP/NodePort/LoadBalancer).'
    ],
    technicalReference: [
      'IaC: Provisionamento (Terraform) vs Configuração (Ansible — agentless via SSH/WinRM) | Modelo Declarativo ("o quê") vs Imperativo ("como")',
      'Kubernetes: Control Plane (API Server, etcd, Scheduler, Controller Manager) + Worker Nodes (kubelet, kube-proxy, container runtime) | Menor unidade: Pod.'
    ],
    examTraps: [
      'A menor unidade implantável no Kubernetes NÃO é o Container isolado, e sim o **Pod** (que encapsula um ou mais containers estreitamente acoplados).',
      'Containers NÃO virtualizam hardware nem carregam um kernel próprio por instância — eles compartilham o kernel do host Linux usando `namespaces` e `cgroups`.',
      'Terraform gerencia estado de infraestrutura (`terraform.tfstate`) para provisionar recursos de forma declarativa; Ansible foca em configuração/orquestração agentless.'
    ],
    keyTerms: ['DevOps & CI/CD', 'IaC (Terraform / Ansible)', 'Docker (namespaces / cgroups / Volumes)', 'Kubernetes (Pod / Deployment / Service)', 'Declarativo vs Imperativo']
  },
  '12.2.1': {
    itemId: '12.2.1',
    highYieldSummary: [
      'Pipeline Orientado a Objetos (.NET): diferentemente do Bash (que passa texto plano pelo pipe `|`), o PowerShell passa OBJETOS .NET estruturados com propriedades e métodos completos entre cmdlets (ex.: `Get-Service | Where-Object {$_.Status -eq "Running"} | Select-Object Name, DisplayName`) dispensando cortes frágeis com `awk`/`grep`.',
      'Padrão Verbo-Substantivo e Descoberta Integrada: cmdlets seguem convenção rígida `Verbo-Substantivo` no singular (`Get-ADUser`, `Set-NetIPAddress`, `Restart-Service`, `Test-NetConnection`); `Get-Command`, `Get-Help` e `Get-Member` (`gm`) permitem descobrir propriedades e métodos de qualquer objeto offline.',
      'Manipulação Nativa de Dados Estruturados (JSON e CSV): `ConvertFrom-Json` / `ConvertTo-Json -Depth N` convertem objetos PowerShell em JSON e vice-versa; `Import-Csv` / `Export-Csv -NoTypeInformation -Encoding UTF8` processam planilhas de usuários/servidores diretamente como coleções de objetos.',
      'Consumo de APIs REST (`Invoke-RestMethod` vs `Invoke-WebRequest`): `Invoke-RestMethod` já faz parsing automático da resposta JSON/XML retornando objetos PowerShell prontos para manipulação; `Invoke-WebRequest` retorna o objeto HTTP bruto (StatusCode, Headers, RawContent).',
      'Política de Execução (`ExecutionPolicy`) e Segurança: controla carregamento de scripts `.ps1` (`Restricted`, `RemoteSigned`, `AllSigned`, `Bypass`); `RemoteSigned` exige assinatura digital apenas em scripts baixados da internet, permitindo scripts locais — ExecutionPolicy é trava contra execução acidental, não barreira de segurança absoluta.'
    ],
    technicalReference: [
      'Cmdlets-chave: `Get-Member` (inspeciona propriedades) | `Where-Object` (filtra) | `ForEach-Object` (itera) | `Select-Object` (projeta colunas)',
      'Atenção JSON: `ConvertTo-Json` tem `-Depth 2` como PADRÃO — objetos aninhados mais profundos truncam em string de tipo se não passar `-Depth 10`!'
    ],
    examTraps: [
      'Pegadinha clássica: `ConvertTo-Json` no PowerShell 5.1/7 usa profundidade padrão `-Depth 2` — dicionários/arrays aninhados em APIs complexas são truncados silenciosamente se o administrador esquecer `-Depth`.',
      'Operadores de comparação no PowerShell NÃO usam `==`, `>`, `<`, e sim `-eq`, `-ne`, `-gt`, `-lt`, `-like`, `-match` (regex).',
      'Usar `Invoke-WebRequest` esperando propriedades JSON diretamente falha sem passar por `ConvertFrom-Json`, enquanto `Invoke-RestMethod` entrega o JSON já convertido em objeto.'
    ],
    keyTerms: ['Pipeline de Objetos (.NET)', 'Verbo-Substantivo / Get-Member', 'ConvertTo-Json (-Depth)', 'Import-Csv / Export-Csv', 'Invoke-RestMethod']
  },
  '12.2.2': {
    itemId: '12.2.2',
    highYieldSummary: [
      'Shebang e Modo Estrito ("Strict Mode"): todo script inicia com `#!/usr/bin/env bash` (ou `#!/bin/bash`); em automação profissional utiliza-se `set -euo pipefail` logo no topo (`-e` aborta no primeiro comando com erro, `-u` falha ao usar variável não definida evitando caminhos vazios perigosos, `-o pipefail` faz o pipeline retornar erro se qualquer etapa antes do último pipe falhar).',
      'Cliente HTTP em CLI (`curl`): automatiza chamadas REST e health checks — `-sS` (silencia barra de progresso mas exibe erros), `-f` / `--fail` (retorna exit code != 0 em erros HTTP 4xx/5xx — essencial para falhar o script!), `-X POST`, `-H "Authorization: Bearer $TOKEN"`, `-d @payload.json` e `-k` (apenas laboratório para TLS autoassinado).',
      'Processador JSON em Linha de Comando (`jq`): ferramenta padrão para ler, filtrar e transformar payloads JSON recebidos do `curl` ou CLI clouds (ex.: `jq -r \'.items[].ip\'` usa `-r` raw output para remover aspas externas antes de passar para variáveis Bash ou `xargs`).',
      'Arrays, Substituição de Comandos e Here-Documents: `resultado=$(comando)` captura stdout em variável; arrays (`hosts=("srv1" "srv2")`) iteram com `"${hosts[@]}"` preservando espaços; `cat <<EOF > arquivo.conf` gera arquivos de configuração dinâmicos com interpolação de variáveis (ou `<<\'EOF\'` para conteúdo literal).',
      'Proteção Contra Execução Concorrente (`flock`) e Temporários (`mktemp`): usar `mktemp` cria arquivos/pastas temporárias com nome aleatório seguro; usar `flock` impede que duas instâncias do mesmo script no cron rodem simultaneamente corrompendo arquivos ou duplicando backups.'
    ],
    technicalReference: [
      'Cabeçalho robusto Bash: `#!/usr/bin/env bash` + `set -euo pipefail`',
      'Pipeline API REST no Linux: `curl -sfSL -H "Authorization: Bearer $TK" https://api/hosts | jq -r \'.data[].name\'` (`-f` evita passar HTML de erro 500 para o `jq`).'
    ],
    examTraps: [
      'Sem `set -o pipefail`, um pipeline `curl https://falha | jq .` retorna exit code `0` se o comando final funcionar ou mascarar falhas anteriores; e sem `curl -f`, o `curl` retorna exit code `0` mesmo recebendo HTTP 404 ou 500!',
      'Esquecer `-r` (`--raw-output`) no `jq` mantém aspas duplas em volta de strings (`"10.0.0.1"`), quebrando comandos seguintes como `ssh` ou `ping`.',
      '`curl -k` / `--insecure` desabilita validação de certificado TLS e nunca deve ser mantido em scripts de produção por abrir brecha para MITM.'
    ],
    keyTerms: ['set -euo pipefail', 'Shebang (#!/bin/bash)', 'curl (-sfSL -H -d)', 'jq (-r raw output)', 'flock / mktemp']
  },
  '12.2.3': {
    itemId: '12.2.3',
    highYieldSummary: [
      'Estilo Arquitetural REST e Métodos HTTP: opera sobre recursos identificados por URIs (`/api/v1/servidores/42`) usando verbos semânticos padronizados — `GET` (leitura segura e idempotente), `POST` (criação não idempotente), `PUT` (substituição integral idempotente do recurso), `PATCH` (atualização parcial) e `DELETE` (remoção idempotente).',
      'Famílias de Códigos de Status HTTP: `2xx` Sucesso (`200 OK`, `201 Created`, `204 No Content`), `3xx` Redirecionamento (`301`/`302`), `4xx` Erro do Cliente (`400 Bad Request`, `401 Unauthorized` — falta/inválida autenticação, `403 Forbidden` — autenticado mas sem permissão, `404 Not Found`, `429 Too Many Requests` — rate limit), `5xx` Erro do Servidor (`500 Internal Error`, `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout`).',
      'Autenticação e Autorização em APIs: `API Keys` em cabeçalhos (`X-API-Key`), `Basic Auth` (Base64 sobre HTTPS obrigatório), `Bearer Tokens / JWT` (`Authorization: Bearer <token>` via OAuth 2.0 / OIDC) e `mTLS` (autenticação mútua por certificado de cliente).',
      'Paginação, Rate Limiting e Backoff Exponencial: consultas grandes retornam páginas (`limit`/`offset` ou `cursor`) exigindo laço até esgotar registros; diante de HTTP `429 Too Many Requests` ou `503`, scripts resilientes respeitam o cabeçalho `Retry-After` e aplicam exponential backoff com jitter.',
      'Cabeçalhos de Negociação de Conteúdo (`Content-Type` e `Accept`): `Content-Type: application/json` declara o formato do corpo enviado no `POST/PUT`, enquanto `Accept: application/json` informa qual formato o cliente espera receber na resposta.'
    ],
    technicalReference: [
      'Idempotência: GET, PUT, DELETE = Idempotentes | POST = NÃO idempotente (chamar 2x cria 2 recursos)',
      'Diferença clássica: `401 Unauthorized` (quem é você? falha de autenticação) vs `403 Forbidden` (sei quem você é, mas não tem permissão/RBAC).'
    ],
    examTraps: [
      'Inverter `401` e `403`: `401` indica ausência/invalidade de credencial ou token expirado; `403` indica credencial válida autenticada, porém bloqueada por falta de autorização/perfil.',
      'Enviar requisição `POST`/`PUT` com corpo JSON sem definir `Content-Type: application/json` frequentemente provoca erro `415 Unsupported Media Type` ou `400 Bad Request`.',
      'Fazer loop `while` sem `sleep` após receber `429 Too Many Requests` agrava o bloqueio de WAF/API Gateway; deve-se implementar exponential backoff.'
    ],
    keyTerms: ['GET / POST / PUT / PATCH / DELETE', 'Status 2xx / 4xx (401 vs 403 / 429) / 5xx', 'Bearer Token / API Key', 'Paginação & Rate Limit', 'Content-Type / Accept']
  },
  '12.2.4': {
    itemId: '12.2.4',
    highYieldSummary: [
      'Estrutura Formal do JSON (RFC 8259): formato leve de intercâmbio baseado em texto composto exclusivamente por objetos (`{"chave": valor}`), arrays (`[item1, item2]`) e 6 tipos de valores válidos — string (sempre entre **aspas duplas**), number, boolean (`true`/`false`), `null`, object e array.',
      'Regras Estritas de Sintaxe JSON: chaves DEVEM obrigatoriamente estar entre aspas duplas (aspas simples quebram parsers estritos!), NÃO aceita comentários (`//` ou `/* */`) e NÃO permite vírgula sobrando após o último item (trailing comma).',
      'Serialização e Desserialização (Parsing): serializar converte estruturas de memória (objetos PowerShell, dicionários Python) em texto JSON (`ConvertTo-Json`, `json.dumps`); desserializar faz o parsing de string JSON recebida via API/arquivo para objeto manipulável (`ConvertFrom-Json`, `jq`, `json.loads`).',
      'Comparação Prática JSON vs YAML vs XML: XML é verboso com tags e schemas XSD (SOAP legado); JSON domina APIs REST e respostas web pela leveza e tipagem clara; YAML é superconjunto mais legível para humanos muito usado em IaC/Kubernetes/Ansible (sensível à indentação por espaços — nunca Tabs!).',
      'Validação e Segurança no Tratamento de JSON: validar esquema (JSON Schema) antes de aplicar configurações críticas em infraestrutura automatizada e evitar concatenação manual de strings para montar JSON (sujeita a quebra por caracteres de escape `"` / `\\` — sempre usar serializador nativo).'
    ],
    technicalReference: [
      'JSON válido: chaves com `"aspas duplas"`, sem comentários, sem trailing comma | Tipos: string, number, boolean, null, object, array',
      'Ferramentas: PowerShell (`ConvertFrom-Json`/`ConvertTo-Json`) | Bash (`jq`) | YAML = foco humano/Ansible/K8s (proibido Tab na indentação).'
    ],
    examTraps: [
      'Concatenar variáveis manualmente em string JSON no Bash (`"{\\"host\\": \\"$HOST\\"}"`) quebra quando o valor contém aspas ou quebras de linha — o seguro é montar via `jq -n --arg h "$HOST" \'{host: $h}\'` ou objeto PowerShell + `ConvertTo-Json`.',
      'Confundir formato JSON com objeto JavaScript relaxado: JSON estrito rejeita comentários `//`, aspas simples `\'chave\'` e vírgula final `[1, 2, ]`.',
      'No PowerShell, `ConvertTo-Json` de array com apenas 1 elemento pode virar objeto único se não envolver com `,` ou `@(...)` (ou `-AsArray` no PS 7).'
    ],
    keyTerms: ['RFC 8259 (Chave-Valor / Array)', 'Serialização vs Parsing', 'Sintaxe Estrita (Aspas Duplas)', 'JSON vs YAML vs XML', 'jq / ConvertFrom-Json']
  },
  '12.2.5': {
    itemId: '12.2.5',
    highYieldSummary: [
      'Estrutura RFC 4180 e Delimitadores Regionais: arquivo tabular texto onde a primeira linha costuma ser o cabeçalho de colunas e cada linha subsequente representa um registro; padrão internacional usa vírgula `,`, enquanto sistemas em português frequentemente exportam com ponto e vírgula `;` (por causa da vírgula decimal), exigindo especificar `-Delimiter ";"` no `Import-Csv` ou `-F";"` no `awk`.',
      'Tratamento de Aspas, Escapes e Quebras de Linha: campos que contêm o próprio delimitador ou espaços/quebras devem ser envolvidos entre aspas duplas (ex.: `"Silva, João"` — aspas internas são duplicadas `""`); fazer `split(",")` simples em Bash/Python sem parser CSV real quebra colunas quando há vírgula dentro do texto!',
      'Codificação de Caracteres (UTF-8 vs ANSI/Windows-1252 e BOM): divergência de encoding corrompe acentuação em nomes de usuários do AD ou setores (`João -> JoÃ£o`); especificar `-Encoding UTF8` (ou `utf8BOM` para compatibilidade com Excel clássico) previne corrupção em lotes.',
      'Importação e Provisionamento em Lote (Bulk Operations): padrão clássico para criação/atualização massiva de contas no Active Directory (`Import-Csv usuarios.csv | ForEach-Object { New-ADUser ... }`), cadastro de reservas DHCP, regras de firewall e inventário de ativos.',
      'Sanitização e Dry-Run antes de Aplicar Lotes: sempre validar previamente campos obrigatórios vazios, duplicidade de chaves (`SamAccountName`/`UPN`), caracteres proibidos e executar com `-WhatIf` (PowerShell) antes de aplicar em produção sobre milhares de registros.'
    ],
    technicalReference: [
      'PowerShell CSV: `Import-Csv dados.csv -Delimiter ";" -Encoding UTF8` | `Export-Csv out.csv -NoTypeInformation -Encoding UTF8`',
      'Boas práticas em lote: Validar schema/duplicatas -> Testar em 1 registro ou `-WhatIf` -> Registrar log de sucesso/falha linha a linha.'
    ],
    examTraps: [
      'No PowerShell 5.1, esquecer `-NoTypeInformation` no `Export-Csv` insere uma primeira linha `#TYPE System.Management.Automation.PSCustomObject` que quebra ferramentas externas que leem o CSV!',
      'Usar `cut -d, -f2` ou `awk -F,` no Bash para ler CSVs com campos entre aspas contendo vírgulas (`"Rede, Infra",10.0.0.1`) desloca todas as colunas seguintes.',
      'Importar CSV sem checar se o delimitador é `,` ou `;` lê a linha inteira como uma única coluna inválida.'
    ],
    keyTerms: ['CSV (RFC 4180)', 'Delimitador (, vs ;)', 'Encoding UTF-8 / BOM', 'Import-Csv / Export-Csv', 'Operações em Lote / -WhatIf']
  },
  '12.2.6': {
    itemId: '12.2.6',
    highYieldSummary: [
      'Cron no Linux (`crontab` e `/etc/cron.*`): agenda tarefas periódicas com 5 campos de tempo (`minuto(0-59) hora(0-23) dia-mês(1-31) mês(1-12) dia-semana(0-7, 0 e 7=Dom)`), ex.: `30 2 * * 1-5 /usr/local/bin/backup.sh`; usuário edita sua tabela com `crontab -e`, lista com `crontab -l`, enquanto tarefas de sistema usam `/etc/crontab` e `/etc/cron.d/` (que possuem coluna extra de usuário).',
      'Armadilhas Clássicas do Cron: o cron executa em um ambiente minimalista (`PATH` reduzido, sem perfil completo do usuário) — scripts devem sempre declarar caminhos absolutos (`/usr/bin/rsync`, não apenas `rsync`) e redirecionar stdout/stderr para log ou logger; também requer cuidados contra sobreposição via `flock`.',
      'Systemd Timers (`*.timer` + `*.service`): alternativa moderna ao cron no Linux; oferece logs centralizados diretamente no `journalctl`, dependência de rede (`After=network-online.target`), aleatorização de início (`RandomizedDelaySec=` evitando picos simultâneos em 100 VMs), execução após perda de janela se desligado (`Persistent=true`) e precisão de milissegundos/monotônica (`OnBootSec=`, `OnCalendar=`).',
      'Windows Task Scheduler (`schtasks` / GUI / PowerShell `ScheduledTasks`): executa scripts `.ps1`/executáveis por gatilho de horário, boot ou evento específico do Event Viewer (`On an Event`); configurar conta de serviço dedicada ("Run whether user is logged on or not"), menor privilégio necessário, política "Do not start a new instance" e execução oculta via `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File ...`.',
      'Observabilidade e Monitoramento de Jobs Agendados ("Dead Man\'s Switch"): tarefas silenciosas que falham sem avisar criam falsa sensação de segurança; recomenda-se enviar métrica de última execução com sucesso (heartbeat/push para Zabbix Trapper ou alerta em falha) garantindo detecção se o job sequer rodar.'
    ],
    technicalReference: [
      'Sintaxe Cron (5 campos): `M H DM M DS` -> Ex.: `*/15 * * * *` (a cada 15 min) | `0 3 * * 0` (domingos às 03:00)',
      'Systemd Timer: requer dois arquivos pareados (`tarefa.timer` + `tarefa.service` de mesmo nome base) | `systemctl list-timers --all`.'
    ],
    examTraps: [
      'No cron, especificar TANTO dia-do-mês quanto dia-da-semana (ex.: `0 2 15 * 5`) executa em OU lógico (dia 15 OU toda sexta-feira!), não em E lógico ("sexta que caia dia 15").',
      'No cron, o caractere `%` tem significado especial (quebra de linha/stdin); comandos como `date +%Y%m%d` dentro do crontab falham silenciosamente se o `%` não for escapado (`\\%`).',
      'Um script que funciona perfeitamente no terminal interativo e falha no cron quase sempre sofre de `PATH` incompleto, caminho relativo ou ausência de sessão interativa.'
    ],
    keyTerms: ['Crontab (5 campos)', 'Systemd Timers (.timer/.service)', 'Windows Task Scheduler', 'PATH / Caminhos Absolutos', 'flock & Persistent=true']
  },
  '12.2.7': {
    itemId: '12.2.7',
    highYieldSummary: [
      'WinRM e PowerShell Remoting (`Enter-PSSession` / `Invoke-Command`): habilitado com `Enable-PSRemoting` (escuta por padrão em HTTP TCP 5985 criptografado via Kerberos/Negotiate no domínio, ou HTTPS TCP 5986 recomendado fora de domínio/workgroup); `Enter-PSSession` abre shell interativo 1-para-1 enquanto `Invoke-Command -ComputerName srv1,srv2 -ScriptBlock {...}` executa em paralelo em dezenas/centenas de servidores com retorno de objetos.',
      'Problema Clássico do "Double Hop" no WinRM: ao conectar do Admin-PC -> Servidor A via WinRM usando Kerberos padrão, o Servidor A NÃO consegue repassar suas credenciais para acessar um compartilhamento UNC ou SQL no Servidor B; soluções corretas são CredSSP (com cautela), Resource-Based Constrained Delegation (RBCD) ou JEA.',
      'SSH para Execução Remota e Transferência: permite rodar comandos pontuais em lote sem shell interativo (`ssh -o BatchMode=yes -o ConnectTimeout=5 admin@srv "systemctl is-active nginx"`), usando chaves assimétricas sem senha digitada e Bastion/Jump Host (`ssh -J bastion alvo`).',
      'Ansible (Automação Agentless via SSH e WinRM): usa um nó de controle Linux executando playbooks YAML declarativos sobre inventários de hosts sem instalar agente nos servidores gerenciados — comunica via OpenSSH/Python em servidores Linux (e equipamentos de rede) e via WinRM/PyWinRM em servidores Windows.',
      'Segurança na Execução Remota em Larga Escala: isolar gerenciamento em VLAN/rede administrativa dedicada, usar JEA (Just Enough Administration) no PowerShell para restringir exatamente quais cmdlets o operador remoto pode rodar, registrar transcrições/logs (`Start-Transcript` / Module Logging) e nunca liberar WinRM 5985/SSH 22 para a internet pública.'
    ],
    technicalReference: [
      'Portas Execução Remota: SSH (TCP 22) | WinRM HTTP (TCP 5985) | WinRM HTTPS (TCP 5986)',
      'PowerShell Remoting: `Enter-PSSession` (1 host interativo) vs `Invoke-Command -ComputerName ...` (execução paralela em N hosts).'
    ],
    examTraps: [
      'Tentar acessar `\\\\FileServer\\Share` dentro de uma sessão remota `Invoke-Command` falha com "Access Denied" mesmo sendo Domain Admin por causa do bloqueio de **Double Hop** (delegação de credencial no segundo salto).',
      'O Ansible NÃO exige instalação de daemon/agente residente nos servidores Linux ou Windows gerenciados — opera de forma agentless via SSH e WinRM.',
      'PowerShell Remoting sobre HTTP 5985 dentro de domínio Active Directory NÃO trafega o conteúdo em texto claro — o payload é criptografado em nível de mensagem pelo protocolo Negotiate/Kerberos (embora HTTPS 5986 ainda seja exigido para autenticação do servidor via certificado em workgroups/DMZs).'
    ],
    keyTerms: ['WinRM (5985/5986)', 'Enter-PSSession vs Invoke-Command', 'Double Hop & JEA', 'SSH Batch / Jump Host (-J)', 'Ansible (Agentless)']
  },
  '12.2.8': {
    itemId: '12.2.8',
    highYieldSummary: [
      'Tratamento Estruturado no PowerShell (`try / catch / finally` e `$ErrorActionPreference`): no PowerShell, erros não terminantes (como `Get-Item` em arquivo inexistente) NÃO entram no bloco `catch` a menos que você force erro terminante com `-ErrorAction Stop` no cmdlet ou `$ErrorActionPreference = "Stop"`; o bloco `finally` sempre executa (ideal para fechar conexões e limpar arquivos temporários).',
      'Inspeção de Erro no PowerShell (`$_` / `$PSItem` e `$Error`): dentro do `catch`, `$_` contém o `ErrorRecord` completo (mensagem, linha, stack trace, exceção interna `$_.Exception.Message`), permitindo log estruturado ou re-lançamento (`throw`).',
      'Tratamento no Bash (`trap`, `set -e` e `stderr`): `trap \'cleanup\' EXIT ERR INT TERM` registra função executada automaticamente ao sair ou ocorrer erro (garantindo remoção de arquivos temporários ou liberação de locks); mensagens de diagnóstico de erro devem ser enviadas para `stderr` (`echo "ERRO: ..." >&2`) mantendo `stdout` limpo para dados/pipes.',
      'Estratégia Fail-Fast vs Retentativa (Retry) com Logging: falhar rapidamente (`fail-fast`) diante de pré-condições inválidas (parâmetro ausente, permissão negada) evitando dano parcial; aplicar retentativa limitada (ex.: 3 tentativas com backoff) em falhas transitórias de rede/API; sempre gravar timestamp, código de retorno e contexto em log.',
      'Simulação Segura antes de Produção (`-WhatIf` / `-Confirm` / `--check`): no PowerShell avançado (`[CmdletBinding(SupportsShouldProcess)]`) e no Ansible (`--check --diff`), testar previamente o impacto exato do script sem aplicar modificações destrutivas reais.'
    ],
    technicalReference: [
      'Pegadinha vital PowerShell: `try { Get-Content /naoexiste -ErrorAction Stop } catch { Write-Error $_.Exception.Message } finally { ... }`',
      'Bash seguro: `trap cleanup EXIT` (executa limpeza garantida no término normal ou falha) + mensagens de erro em `>&2` (`stderr`).'
    ],
    examTraps: [
      'Armadilha nº 1 de PowerShell em provas: colocar um cmdlet padrão dentro de `try { ... } catch { ... }` SEM `-ErrorAction Stop` (ou `$ErrorActionPreference = "Stop"`) faz o erro aparecer vermelho na tela e PULAR o bloco `catch` sem executá-lo!',
      'Misturar mensagens de log/erro no `stdout` em vez de direcioná-las para `stderr` (`>&2`) corrompe a saída quando o script é encadeado com `jq` ou pipe `|`.',
      'Engolir exceções com `catch {}` vazio ou `-ErrorAction SilentlyContinue` sem registrar log esconde falhas graves silenciosas até o ambiente parar.'
    ],
    keyTerms: ['try / catch / finally', '$ErrorActionPreference / -ErrorAction Stop', 'trap (Bash EXIT/ERR)', 'stderr (>&2)', '-WhatIf / Dry-Run']
  }
};
