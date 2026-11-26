import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_12: Record<string, StudyGuide> = {
  '12.1.1': {
    itemId: '12.1.1',
    highYieldSummary: [
      'Definição e escopo: a lógica de programação aplicada a scripts de infraestrutura organiza rotinas operacionais por meio de estruturas de decisão, laços de repetição, funções modulares com escopo isolado e códigos de saída (**POSIX `0` vs `1–255`**). Assegura automação previsível, reutilizável e **idempotente** sem expor credenciais no código-fonte.',
      'Estruturas de Controle em Scripts: condicionais (`if/elif/else`, `case` ou `switch`) avaliam expressões lógicas e códigos de retorno; laços de repetição (`for`/`foreach` para iterar listas e inventários de hosts; `while`/`until` para aguardar condição ou ler linhas de entrada) automatizam rotinas repetitivas com previsibilidade.',
      'Modularização com Funções e Escopo de Variáveis: encapsular tarefas recorrentes (ex.: `log_info`, `check_port`) em funções com parâmetros posicionais ou nomeados reduz duplicação; usar variáveis locais (`local` no Bash, escopo de função no PowerShell/Python) evita colisões acidentais com variáveis globais.',
      'Códigos de Saída (Exit Codes) e Composição Segura: convenção universal POSIX (*Portable Operating System Interface*) retorna `0` para sucesso e valores entre `1` e `255` para falha; *pipelines* de automação e *schedulers* (agendadores) dependem de `exit 0` vs `exit 1` para saber se a tarefa concluiu corretamente ou se deve disparar alerta/*rollback* (reversão).',
      'Idempotência em Scripts de Infraestrutura: princípio fundamental segundo o qual executar o mesmo script uma vez ou dez vezes seguidas produz exatamente o mesmo estado final sem erros nem duplicação (ex.: checar se uma linha já existe no `/etc/hosts` ou se a conta já existe no AD antes de tentar criar).',
      'Segurança e Higiene em Scripts: nunca embutir senhas/tokens em texto claro (*hardcoded*) dentro do código-fonte (usar cofres de segredos, variáveis de ambiente protegidas ou credenciais gerenciadas), validar parâmetros de entrada e quotar variáveis (`"$caminho"`) para prevenir injeção de comandos e quebra em nomes com espaço.',
      'Exemplo operacional: para manter **idempotência** ao registrar um servidor em `/etc/hosts`, o script verifica antes de gravar com `grep -qxF "10.10.1.5 pacs.hosp.local" /etc/hosts || echo "10.10.1.5 pacs.hosp.local" >> /etc/hosts`. Em Bash encapsula-se a rotina com `check_host() { local h="$1"; getent hosts "$h" >/dev/null; }` (ou em Python `def check_host(h): return bool(h)`), lendo segredos via `$API_TOKEN` e encerrando com `exit 0` ou `exit 1`.'
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
    keyTerms: [
      'Condicionais e Laços: controle de fluxo (if/case/for/while) baseado em expressões lógicas e códigos de retorno',
      'Funções e Escopo (local): modularização de rotinas evitando sobrescrita acidental de variáveis globais',
      'Exit Codes (POSIX 0 vs 1–255): convenção onde 0 indica sucesso e valores diferentes de zero sinalizam falha para pipelines',
      'Idempotência: propriedade de obter o mesmo estado final consistente independentemente de quantas vezes o script ou playbook rodar',
      'Segurança (Sem Secrets Hardcoded): uso de variáveis protegidas, cofres e aspas ("$VAR") contra vazamento e injeção de comandos'
    ]
  },
  '12.1.2': {
    itemId: '12.1.2',
    highYieldSummary: [
      'Definição e escopo: a cultura **DevOps** integra desenvolvimento e operações por meio de controle de versão **Git**, *pipelines* automatizadas de **CI/CD** em estágios (*stages*), **Infraestrutura como Código (IaC)** declarativa (**Terraform**, **Ansible**) e **conteinerização** (**Docker** e **Kubernetes**). Resolve entregas manuais propensas a erro e garante consistência, **idempotência** e escala entre ambientes.',
      'Cultura DevOps, Git e Pipelines CI/CD: integração visando entregas confiáveis por meio de **Git** (`branch` isolada, `git merge` [preserva histórico e cria *merge commit*] vs `git rebase` [reaplica *commits* linearmente sobre outro ramo — evitar em *branches* públicas compartilhadas]), **CI** (*Continuous Integration*: *pipeline* em *stages* como `lint`, `build` e testes automatizados a cada *commit*) e **CD** (*Continuous Delivery/Deployment*: promoção automatizada entre ambientes com aprovação ou entrega direta e *rollback* rápido).',
      'Infraestrutura como Código (IaC — Declarativa vs Imperativa): descrever o estado desejado em arquivos versionados no Git; **Terraform** usa **HCL** (*HashiCorp Configuration Language*) em fluxo `terraform init` (baixa *providers*), `terraform plan` (calcula alterações e detecta **drift** — desvio entre infraestrutura real e `terraform.tfstate`) e `terraform apply` (aplica e grava o *state*); **Ansible** aplica *playbooks* **YAML** idempotentes com módulos reais, **handlers** (acionados via `notify`) e **Vault** sem agente via SSH/WinRM.',
      'Conteinerização com Docker (Containers vs VMs): containers empacotam aplicação e suas dependências em imagens em camadas (`Dockerfile` -> *Image* -> *Container*), compartilhando o kernel do sistema operacional host com isolamento por `namespaces` (`PID`, `NET`, `MNT`, `USER`) e limitação de CPU/RAM por `cgroups` — iniciam em milissegundos com *footprint* (consumo de recursos) mínimo.',
      'Persistência e Rede em Docker: containers são efêmeros por natureza — dados persistentes devem ser montados externamente via Volumes gerenciados pelo Docker ou *Bind Mounts* (montagem direta de caminho do host); redes `bridge`, `host` e `overlay` conectam containers isolados.',
      'Orquestração com Kubernetes (K8s): gerencia clusters de containers em escala garantindo alta disponibilidade, *auto-healing* (reinicia/recria Pods falhos), escalonamento horizontal (`HPA` — *Horizontal Pod Autoscaler*), *rolling updates* (atualizações graduais sem parada) e *service discovery* (descoberta via DNS/IP); menor unidade escalonável é o **Pod** (1 ou mais containers compartilhando rede/IP e storage), controlado por **Deployments/ReplicaSets** e exposto por **Services** (`ClusterIP`/`NodePort`/`LoadBalancer`).',
      'Exemplo operacional: após desenvolver em `git checkout -b feat/api` e integrar com `git merge`, a *pipeline* **CI/CD** executa os *stages* `validate -> plan -> apply`. No **Terraform**, declara-se `provider "aws" { region = "sa-east-1" }` em **HCL** e roda-se `terraform init && terraform plan` para checar *drift* frente ao `terraform.tfstate` antes do `terraform apply`; em seguida o **Ansible** configura os hosts em **YAML** idempotente e o **Kubernetes** atualiza o `Deployment` de `Pods` sem indisponibilidade.'
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
    keyTerms: [
      'Git (branch / merge vs rebase): ramificação de código e integração preservando histórico (merge) versus histórico linear (rebase local)',
      'CI/CD (Pipeline e Stages): automação em estágios (lint, test, build, deploy) garantindo integração contínua e entrega confiável',
      'Terraform (HCL / init-plan-apply / state / drift): provisionamento declarativo com controle de estado e detecção de desvios na infraestrutura',
      'Ansible (Playbook / Handlers / Vault): automação declarativa em YAML agentless, idempotente e com cifragem de segredos',
      'Docker vs Kubernetes (Pod): isolamento via namespaces/cgroups compartilhando kernel versus orquestração de Pods em Deployments e Services'
    ]
  },
  '12.2.1': {
    itemId: '12.2.1',
    highYieldSummary: [
      'Definição e escopo: o **PowerShell** (Windows PowerShell e PowerShell multiplataforma sobre **.NET**) é um *shell* administrativo e linguagem orientada a objetos cujo *pipeline* (`|`) trafega objetos estruturados completos entre *cmdlets* (`Verbo-Substantivo`). Permite administrar sistemas Windows, Active Directory, arquivos **JSON/CSV** e **APIs REST** sem recorrer a recortes frágeis de texto.',
      'Pipeline Orientado a Objetos (.NET): diferentemente do Bash (que passa texto plano pelo pipe `|`), o PowerShell passa OBJETOS .NET estruturados com propriedades e métodos completos entre cmdlets (ex.: `Get-Service | Where-Object {$_.Status -eq "Running"} | Select-Object Name, DisplayName`) dispensando cortes frágeis com `awk`/`grep`.',
      'Padrão Verbo-Substantivo e Descoberta Integrada: cmdlets seguem convenção rígida `Verbo-Substantivo` no singular (`Get-ADUser`, `Set-NetIPAddress`, `Restart-Service`, `Test-NetConnection`); `Get-Command`, `Get-Help` e `Get-Member` (`gm`) permitem descobrir propriedades e métodos de qualquer objeto offline.',
      'Manipulação Nativa de Dados Estruturados (JSON e CSV): `ConvertFrom-Json` / `ConvertTo-Json -Depth N` convertem objetos PowerShell em JSON (*JavaScript Object Notation*) e vice-versa; `Import-Csv` / `Export-Csv -NoTypeInformation -Encoding UTF8` processam planilhas CSV (*Comma-Separated Values*) de usuários/servidores diretamente como coleções de objetos.',
      'Consumo de APIs REST (`Invoke-RestMethod` vs `Invoke-WebRequest`): `Invoke-RestMethod` já faz *parsing* (análise estrutural) automático da resposta JSON/XML (*Extensible Markup Language*) retornando objetos PowerShell prontos para manipulação; `Invoke-WebRequest` retorna o objeto HTTP bruto (`StatusCode`, `Headers`, `RawContent`).',
      'Política de Execução (`ExecutionPolicy`) e Segurança: controla carregamento de scripts `.ps1` (`Restricted`, `RemoteSigned`, `AllSigned`, `Bypass`); `RemoteSigned` exige assinatura digital apenas em scripts baixados da internet, permitindo scripts locais — `ExecutionPolicy` é trava contra execução acidental, não barreira de segurança absoluta.',
      'Exemplo operacional: para listar serviços automáticos parados e enviá-los em JSON a uma API, executa-se `$parados = Get-Service | Where-Object { $_.StartType -eq "Automatic" -and $_.Status -eq "Stopped" } | Select-Object Name, Status` seguido de `$body = $parados | ConvertTo-Json -Depth 5` e `Invoke-RestMethod -Method Post -Uri "https://api.hosp.local/alerts" -ContentType "application/json" -Body $body`. Para relatórios locais tabulares usa-se `Export-Csv ".\\servicos.csv" -NoTypeInformation -Encoding UTF8`.'
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
    keyTerms: [
      'Pipeline de Objetos (.NET): passagem de objetos tipados com propriedades e métodos entre cmdlets sem parsing textual',
      'Verbo-Substantivo e Get-Member: padrão de nomenclatura (Get-Service, Set-ADUser) e inspeção dinâmica de membros de objetos',
      'ConvertTo-Json (-Depth N): serialização JSON que exige -Depth explícito acima do padrão 2 para não truncar níveis aninhados',
      'Import-Csv / Export-Csv: manipulação tabular de lotes onde -NoTypeInformation evita cabeçalho #TYPE indesejado',
      'Invoke-RestMethod vs Invoke-WebRequest: consumo de API com parsing automático do corpo (RestMethod) versus resposta HTTP bruta (WebRequest)'
    ]
  },
  '12.2.2': {
    itemId: '12.2.2',
    highYieldSummary: [
      'Definição e escopo: os scripts em **Bash** (*Bourne-Again SHell*) automatizam rotinas e integrações em sistemas Linux combinando modo estrito (`set -euo pipefail`), requisições HTTP via `curl`, filtragem **JSON** com `jq` e controle de concorrência com `flock` e `mktemp`. Eliminam falhas silenciosas de *pipelines* e condições de corrida em execuções agendadas.',
      'Shebang e Modo Estrito ("Strict Mode"): todo script inicia com `#!/usr/bin/env bash` (ou `#!/bin/bash`); em automação profissional utiliza-se `set -euo pipefail` logo no topo (`-e` aborta no primeiro comando com erro, `-u` falha ao usar variável não definida evitando caminhos vazios perigosos, `-o pipefail` faz o *pipeline* retornar erro se qualquer etapa antes do último *pipe* falhar).',
      'Cliente HTTP em CLI (`curl`): automatiza chamadas REST e *health checks* — `-sS` (silencia barra de progresso mas exibe erros), `-f` / `--fail` (retorna exit code != 0 em erros HTTP `4xx`/`5xx` — essencial para falhar o script!), `-X POST`, `-H "Authorization: Bearer $TOKEN"`, `-d @payload.json` e `-k` (apenas laboratório para TLS autoassinado).',
      'Processador JSON em Linha de Comando (`jq`): ferramenta padrão para ler, filtrar e transformar payloads JSON recebidos do `curl` ou CLI (*Command-Line Interface*) de nuvens (ex.: `jq -r \'.items[].ip\'` usa `-r` *raw output* para remover aspas externas antes de passar para variáveis Bash ou `xargs`).',
      'Arrays, Substituição de Comandos e Here-Documents: `resultado=$(comando)` captura `stdout` em variável; arrays (`hosts=("srv1" "srv2")`) iteram com `"${hosts[@]}"` preservando espaços; `cat <<EOF > arquivo.conf` gera arquivos de configuração dinâmicos com interpolação de variáveis (ou `<<\'EOF\'` para conteúdo literal).',
      'Proteção Contra Execução Concorrente (`flock`) e Temporários (`mktemp`): usar `mktemp` cria arquivos/pastas temporárias com nome aleatório seguro; usar `flock` impede que duas instâncias do mesmo script no `cron` rodem simultaneamente corrompendo arquivos ou duplicando backups.',
      'Exemplo operacional: um script com `#!/usr/bin/env bash` e `set -euo pipefail` garante instância única com `exec 200>/tmp/sync.lock; flock -n 200 || exit 1`, cria arquivo seguro `tmp=$(mktemp)` e consulta um inventário via `curl -sfSL -H "Authorization: Bearer $TOKEN" "https://cmdb.hosp.local/api/hosts" | jq -r \'.items[].ip\' > "$tmp"`. Sem `-f` no `curl` e `-o pipefail`, um erro HTTP `500` passaria despercebido pelo *pipe*.'
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
    keyTerms: [
      'set -euo pipefail: modo estrito Bash para abortar em erros (-e), variáveis indefinidas (-u) e falhas intermediárias em pipes (-o pipefail)',
      'Shebang (#!/usr/bin/env bash): primeira linha que define o interpretador exato ao executar o script diretamente',
      'curl (-sfSL -H -d): cliente HTTP em linha de comando onde -f/--fail força exit code de erro em respostas 4xx/5xx',
      'jq (-r / --arg): parser e gerador JSON seguro em CLI onde -r remove aspas externas de strings extraídas',
      'flock e mktemp: trava exclusiva contra execução simultânea no cron e criação segura de arquivos temporários'
    ]
  },
  '12.2.3': {
    itemId: '12.2.3',
    highYieldSummary: [
      'Definição e escopo: as **APIs REST** (*Representational State Transfer*) expõem recursos de infraestrutura e sistemas corporativos sobre **HTTP/HTTPS** usando verbos padronizados (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`), códigos de status (`2xx`/`4xx`/`5xx`) e formatos estruturados como **JSON**. Permitem integrar scripts Bash, PowerShell e Python a CMDBs, hypervisors, firewalls e plataformas de monitoramento.',
      'Estilo Arquitetural REST e Métodos HTTP: opera sobre recursos identificados por URIs (*Uniform Resource Identifiers*, `/api/v1/servidores/42`) usando verbos semânticos padronizados — `GET` (leitura segura e idempotente), `POST` (criação não idempotente), `PUT` (substituição integral idempotente do recurso), `PATCH` (atualização parcial) e `DELETE` (remoção idempotente).',
      'Famílias de Códigos de Status HTTP: `2xx` Sucesso (`200 OK`, `201 Created`, `204 No Content`), `3xx` Redirecionamento (`301`/`302`), `4xx` Erro do Cliente (`400 Bad Request`, `401 Unauthorized` — falta/inválida autenticação, `403 Forbidden` — autenticado mas sem permissão, `404 Not Found`, `429 Too Many Requests` — *rate limit* [limite de taxa]), `5xx` Erro do Servidor (`500 Internal Error`, `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout`).',
      'Autenticação e Autorização em APIs: `API Keys` em cabeçalhos (`X-API-Key`), `Basic Auth` (Base64 sobre HTTPS obrigatório), `Bearer Tokens / JWT` (*JSON Web Token* via `OAuth 2.0` / `OIDC` [*OpenID Connect*] em `Authorization: Bearer <token>`) e `mTLS` (*Mutual TLS* — autenticação mútua por certificado de cliente).',
      'Paginação, Rate Limiting e Backoff Exponencial: consultas grandes retornam páginas (`limit`/`offset` ou `cursor`) exigindo laço até esgotar registros; diante de HTTP `429 Too Many Requests` ou `503`, scripts resilientes respeitam o cabeçalho `Retry-After` e aplicam *exponential backoff* com *jitter* (espera crescente exponencial com variação aleatória).',
      'Cabeçalhos de Negociação de Conteúdo (`Content-Type` e `Accept`): `Content-Type: application/json` declara o formato do corpo enviado no `POST/PUT`, enquanto `Accept: application/json` informa qual formato o cliente espera receber na resposta.',
      'Exemplo operacional: em Python, para atualizar de forma idempotente um ativo em `/api/v1/servidores/42`, executa-se `resp = requests.put(url, headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json", "Accept": "application/json"}, json={"status": "ativo"}, timeout=10)`. Diante de `401` renova-se o token; em `403` registra-se falha de permissão **RBAC** (*Role-Based Access Control*); em `429` lê-se `Retry-After` e aplica-se *exponential backoff*.'
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
    keyTerms: [
      'Métodos REST (GET / POST / PUT / PATCH / DELETE): semântica e idempotência das operações HTTP sobre recursos URI',
      'HTTP 401 vs 403 vs 429: falha de autenticação (401), falta de autorização RBAC (403) e excesso de requisições/rate limit (429)',
      'Bearer / JWT / mTLS: esquemas modernos de autenticação em APIs além de API Keys e Basic Auth sobre HTTPS',
      'Paginação e Exponential Backoff: iteração segura via cursor/offset e retentativa espaçada respeitando Retry-After',
      'Content-Type vs Accept: cabeçalhos que declaram o formato do payload enviado e o formato esperado na resposta'
    ]
  },
  '12.2.4': {
    itemId: '12.2.4',
    highYieldSummary: [
      'Definição e escopo: o **JSON** (*JavaScript Object Notation*, **RFC 8259**) é o formato textual leve padrão para intercâmbio estruturado de dados em APIs REST, arquivos de configuração e telemetria. Baseia-se em pares chave-valor e listas ordenadas com sintaxe estrita e tipagem simples, sendo serializado e analisado nativamente em Python, PowerShell e `jq`.',
      'Estrutura Formal do JSON (RFC 8259): formato leve de intercâmbio baseado em texto composto exclusivamente por objetos (`{"chave": valor}`), arrays (`[item1, item2]`) e `6` tipos de valores válidos — `string` (sempre entre **aspas duplas**), `number`, `boolean` (`true`/`false`), `null`, `object` e `array`.',
      'Regras Estritas de Sintaxe JSON: chaves DEVEM obrigatoriamente estar entre aspas duplas (aspas simples quebram *parsers* estritos!), NÃO aceita comentários (`//` ou `/* */`) e NÃO permite vírgula sobrando após o último item (*trailing comma*).',
      'Serialização e Desserialização (Parsing): serializar converte estruturas de memória (objetos PowerShell, dicionários Python) em texto JSON (`ConvertTo-Json`, `json.dumps`); desserializar faz o *parsing* de string JSON recebida via API/arquivo para objeto manipulável (`ConvertFrom-Json`, `jq`, `json.loads`).',
      'Comparação Prática JSON vs YAML vs XML: XML (*Extensible Markup Language*) é verboso com tags e schemas XSD (*XML Schema Definition*, SOAP [*Simple Object Access Protocol*] legado); JSON domina APIs REST e respostas web pela leveza e tipagem clara; YAML (*YAML Ain\'t Markup Language*) é superconjunto mais legível para humanos muito usado em IaC/Kubernetes/Ansible (sensível à indentação por espaços — nunca Tabs!).',
      'Validação e Segurança no Tratamento de JSON: validar esquema (*JSON Schema*) antes de aplicar configurações críticas em infraestrutura automatizada e evitar concatenação manual de strings para montar JSON (sujeita a quebra por caracteres de escape `"` / `\\` — sempre usar serializador nativo).',
      'Exemplo operacional: para construir um objeto JSON válido no Bash sem risco de erro por aspas ou espaços em `$HOST`, usa-se `jq -n --arg h "$HOST" --argjson p 443 \'{host: $h, port: $p, tls: true}\'`, resultando em `{"host": "srv-web01", "port": 443, "tls": true}`. Em Python, `cfg = json.loads(texto)` desserializa a entrada e `json.dumps(cfg, ensure_ascii=False)` gera texto estrito conforme a RFC 8259.'
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
    keyTerms: [
      'RFC 8259 (Objetos e Arrays): estrutura chave-valor {"k": v} e listas [v1, v2] com 6 tipos válidos',
      'Sintaxe Estrita JSON: obrigatoriedade de aspas duplas e proibição de comentários ou vírgula final (trailing comma)',
      'Serialização vs Parsing: conversão de objetos em memória para texto JSON (ConvertTo-Json / json.dumps) e processo inverso',
      'JSON vs YAML vs XML: comparação entre APIs REST (JSON), IaC sensível a indentação por espaços (YAML) e schemas legados (XML)',
      'Montagem Segura (jq -n / Serializador): prevenção de corrupção de sintaxe evitando concatenação manual de strings'
    ]
  },
  '12.2.5': {
    itemId: '12.2.5',
    highYieldSummary: [
      'Definição e escopo: o formato **CSV** (*Comma-Separated Values*, **RFC 4180**) organiza registros tabulares em texto plano para cargas em lote, inventários de ativos e automação de contas corporativas. Sua manipulação confiável depende de identificar o delimitador regional (`,` vs `;`), respeitar aspas de escape, padronizar codificação **UTF-8** e validar lotes antes da execução.',
      'Estrutura RFC 4180 e Delimitadores Regionais: arquivo tabular texto onde a primeira linha costuma ser o cabeçalho de colunas e cada linha subsequente representa um registro; padrão internacional usa vírgula `,`, enquanto sistemas em português frequentemente exportam com ponto e vírgula `;` (por causa da vírgula decimal), exigindo especificar `-Delimiter ";"` no `Import-Csv` ou `-F";"` no `awk`.',
      'Tratamento de Aspas, Escapes e Quebras de Linha: campos que contêm o próprio delimitador ou espaços/quebras devem ser envolvidos entre aspas duplas (ex.: `"Silva, João"` — aspas internas são duplicadas `""`); fazer `split(",")` simples em Bash/Python sem *parser* CSV real quebra colunas quando há vírgula dentro do texto!',
      'Codificação de Caracteres (UTF-8 vs ANSI/Windows-1252 e BOM): divergência de *encoding* corrompe acentuação em nomes de usuários do AD ou setores (`João -> JoÃ£o`); especificar `-Encoding UTF8` (ou `utf8BOM` [*Byte Order Mark*] para compatibilidade com Excel clássico) previne corrupção em lotes.',
      'Importação e Provisionamento em Lote (Bulk Operations): padrão clássico para criação/atualização massiva de contas no Active Directory (`Import-Csv usuarios.csv | ForEach-Object { New-ADUser ... }`), cadastro de reservas DHCP, regras de firewall e inventário de ativos.',
      'Sanitização e Dry-Run antes de Aplicar Lotes: sempre validar previamente campos obrigatórios vazios, duplicidade de chaves (`SamAccountName`/`UPN` [*User Principal Name*]), caracteres proibidos e executar com `-WhatIf` (PowerShell) antes de aplicar em produção sobre milhares de registros.',
      'Exemplo operacional: para importar colaboradores de uma planilha em português sem corromper acentos nem deslocar campos com `;` ou vírgulas internas, usa-se no PowerShell `Import-Csv ".\\colaboradores.csv" -Delimiter ";" -Encoding UTF8 | ForEach-Object { New-ADUser -SamAccountName $_.login -Name $_.nome -UserPrincipalName $_.upn -WhatIf }`. Em Python, lê-se com `csv.DictReader(f, delimiter=";")` (evitando `split(";")` manual) e ao gerar saída no PowerShell aplica-se `Export-Csv ".\\saida.csv" -NoTypeInformation -Encoding UTF8`.'
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
    keyTerms: [
      'CSV (RFC 4180): formato tabular textual com linha de cabeçalho e tratamento de aspas duplas em campos especiais',
      'Delimitador Regional (, vs ;): separação por vírgula padrão ou ponto e vírgula comum em sistemas configurados em português',
      'Encoding UTF-8 e BOM: preservação de acentuação prevenindo mojibake entre sistemas Windows e Linux',
      'Export-Csv -NoTypeInformation: supressão da linha de metadado #TYPE para garantir interoperabilidade do arquivo gerado',
      'Bulk Operations & -WhatIf: provisionamento em lote com validação prévia de chaves duplicadas e simulação segura'
    ]
  },
  '12.2.6': {
    itemId: '12.2.6',
    highYieldSummary: [
      'Definição e escopo: o agendamento de tarefas executa rotinas automatizadas de manutenção, coleta e backup por gatilhos temporais ou de eventos usando **cron** (`5` campos) e **systemd timers** no Linux, ou o **Task Scheduler** no Windows. Exige definição de caminhos absolutos, controle contra execuções concorrentes (`flock`) e monitoramento de falhas silenciosas.',
      'Cron no Linux (`crontab` e `/etc/cron.*`): agenda tarefas periódicas com `5` campos de tempo (`minuto(0-59) hora(0-23) dia-mês(1-31) mês(1-12) dia-semana(0-7, 0 e 7=Dom)`), ex.: `30 2 * * 1-5 /usr/local/bin/backup.sh`; usuário edita sua tabela com `crontab -e`, lista com `crontab -l`, enquanto tarefas de sistema usam `/etc/crontab` e `/etc/cron.d/` (que possuem coluna extra de usuário).',
      'Armadilhas Clássicas do Cron: o cron executa em um ambiente minimalista (`PATH` reduzido, sem perfil completo do usuário) — scripts devem sempre declarar caminhos absolutos (`/usr/bin/rsync`, não apenas `rsync`) e redirecionar `stdout`/`stderr` para log ou `logger`; também requer cuidados contra sobreposição via `flock`.',
      'Systemd Timers (`*.timer` + `*.service`): alternativa moderna ao cron no Linux; oferece logs centralizados diretamente no `journalctl`, dependência de rede (`After=network-online.target`), aleatorização de início (`RandomizedDelaySec=` evitando picos simultâneos em `100` VMs), execução após perda de janela se desligado (`Persistent=true`) e precisão de milissegundos/monotônica (`OnBootSec=`, `OnCalendar=`).',
      'Windows Task Scheduler (`schtasks` / GUI [*Graphical User Interface*] / PowerShell `ScheduledTasks`): executa scripts `.ps1`/executáveis por gatilho de horário, *boot* ou evento específico do *Event Viewer* (`On an Event`); configurar conta de serviço dedicada (*Run whether user is logged on or not*), menor privilégio necessário, política *Do not start a new instance* e execução oculta via `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File ...`.',
      'Observabilidade e Monitoramento de Jobs Agendados ("Dead Man\'s Switch"): tarefas silenciosas que falham sem avisar criam falsa sensação de segurança; recomenda-se enviar métrica de última execução com sucesso (*heartbeat*/push para Zabbix Trapper ou alerta em falha) garantindo detecção se o *job* sequer rodar.',
      'Exemplo operacional: para agendar limpeza de segunda a sexta às `02:30` evitando duas execuções simultâneas, inclui-se no `crontab -e` a linha `30 2 * * 1-5 /usr/bin/flock -n /tmp/limpa.lock /usr/local/sbin/limpeza.sh >> /var/log/limpeza.log 2>&1` (escapando `\\%` caso utilize `date +\\%F`). No **systemd**, declara-se `OnCalendar=Mon..Fri 02:30` e `Persistent=true` em `limpeza.timer` e audita-se com `systemctl list-timers --all`; no Windows executa-se `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File C:\\Scripts\\Sync.ps1`.'
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
    keyTerms: [
      'Crontab (5 Campos Temporais): agendamento clássico (minuto, hora, dia-mês, mês, dia-semana) com união lógica (OU) entre DM e DS',
      'Systemd Timers (.timer + .service): agendador integrado ao systemd com logs no journald, Persistent=true e RandomizedDelaySec=',
      'Windows Task Scheduler: agendador por horário, boot ou evento rodando com conta de serviço sem sessão interativa',
      'PATH Minimalista e flock: exigência de caminhos absolutos no cron e trava de exclusão mútua contra execuções sobrepostas',
      'Dead Man\'s Switch: envio de heartbeat de conclusão para detectar jobs que silenciosamente deixaram de executar'
    ]
  },
  '12.2.7': {
    itemId: '12.2.7',
    highYieldSummary: [
      'Definição e escopo: a execução remota em infraestrutura automatiza comandos e configurações em dezenas ou centenas de servidores sem acesso físico ou console manual, utilizando **WinRM/PowerShell Remoting** no Windows, **OpenSSH** no Linux e orquestradores *agentless* como o **Ansible**. Combina criptografia em trânsito, controle granular (**JEA**), inventários estruturados e cofre de segredos (**Ansible Vault**).',
      'WinRM e PowerShell Remoting (`Enter-PSSession` / `Invoke-Command`): habilitado com `Enable-PSRemoting` (escuta por padrão em HTTP `TCP 5985` criptografado via Kerberos/Negotiate no domínio, ou HTTPS `TCP 5986` recomendado fora de domínio/*workgroup*); `Enter-PSSession` abre *shell* interativo `1`-para-`1` enquanto `Invoke-Command -ComputerName srv1,srv2 -ScriptBlock {...}` executa em paralelo em dezenas/centenas de servidores com retorno de objetos.',
      'Problema Clássico do "Double Hop" no WinRM: ao conectar do Admin-PC -> Servidor A via WinRM usando Kerberos padrão, o Servidor A NÃO consegue repassar suas credenciais para acessar um compartilhamento UNC (*Universal Naming Convention*) ou SQL no Servidor B; soluções corretas são CredSSP (*Credential Security Support Provider*, com cautela), RBCD (*Resource-Based Constrained Delegation*) ou JEA (*Just Enough Administration*).',
      'SSH para Execução Remota e Transferência: permite rodar comandos pontuais em lote sem *shell* interativo (`ssh -o BatchMode=yes -o ConnectTimeout=5 admin@srv "systemctl is-active nginx"`), usando chaves assimétricas sem senha digitada e Bastion/Jump Host (`ssh -J bastion alvo`).',
      'Ansible (Automação Agentless via SSH e WinRM): usa um nó de controle Linux com arquivo de **inventário** (agrupando hosts/variáveis) e *playbooks* **YAML** declarativos e **idempotentes** compostos por módulos reais (ex.: `ansible.builtin.apt`, `ansible.builtin.copy`, `ansible.builtin.service`), **handlers** (tarefas disparadas via `notify` somente quando ocorre alteração) e **Ansible Vault** (`ansible-vault encrypt`) para cifrar segredos — comunicando via OpenSSH/Python no Linux e WinRM/PyWinRM no Windows sem agente residente.',
      'Segurança na Execução Remota em Larga Escala: isolar gerenciamento em VLAN/rede administrativa dedicada, usar **JEA** no PowerShell para restringir exatamente quais *cmdlets* o operador remoto pode rodar, registrar transcrições/logs (`Start-Transcript` / *Module Logging*) e nunca liberar WinRM `5985`/SSH `22` para a internet pública.',
      'Exemplo operacional: em um *playbook* **Ansible** sobre o inventário `[web] srv-web01 ansible_host=10.10.2.10`, a tarefa YAML em fluxo válido `- { name: Configurar Nginx, ansible.builtin.copy: { src: nginx.conf, dest: /etc/nginx/nginx.conf }, notify: Reiniciar Nginx }` aciona o *handler* apenas quando o arquivo muda, executando via `ansible-playbook -i inventory.ini site.yml --ask-vault-pass --check --diff`. Em servidores Windows do domínio, executa-se em paralelo `Invoke-Command -ComputerName app01,app02 -ScriptBlock { Get-Service w32time }` via WinRM.'
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
    keyTerms: [
      'WinRM (TCP 5985 / 5986): transporte WS-Management para PowerShell Remoting (cifrado por Kerberos no AD ou TLS em HTTPS 5986)',
      'Enter-PSSession vs Invoke-Command: sessão interativa 1-para-1 versus execução paralela em lote retornando objetos desserializados',
      'Double Hop e JEA / RBCD: bloqueio de repasse de credencial no segundo salto e restrição granular de cmdlets remotos (JEA)',
      'SSH BatchMode e Jump Host (-J): execução não interativa por chave pública e travessia via bastion host em redes segmentadas',
      'Ansible (Inventário / Playbook / Handler / Vault): orquestração agentless idempotente em YAML com execução condicional por notify e cifragem de segredos'
    ]
  },
  '12.2.8': {
    itemId: '12.2.8',
    highYieldSummary: [
      'Definição e escopo: o tratamento de erros em scripts de automação garante comportamento determinístico diante de falhas de rede, permissão ou entradas inválidas, utilizando blocos estruturados (`try/catch/finally` no PowerShell, `try/except/finally` em Python), manipuladores de sinal (`trap` no Bash), redirecionamento para `stderr` e simulação prévia (*dry-run*).',
      'Tratamento Estruturado no PowerShell (`try / catch / finally` e `$ErrorActionPreference`): no PowerShell, erros não terminantes (como `Get-Item` em arquivo inexistente) NÃO entram no bloco `catch` a menos que você force erro terminante com `-ErrorAction Stop` no cmdlet ou `$ErrorActionPreference = "Stop"`; o bloco `finally` sempre executa (ideal para fechar conexões e limpar arquivos temporários).',
      'Inspeção de Erro no PowerShell (`$_` / `$PSItem` e `$Error`): dentro do `catch`, `$_` contém o `ErrorRecord` completo (mensagem, linha, *stack trace*, exceção interna `$_.Exception.Message`), permitindo log estruturado ou re-lançamento (`throw`).',
      'Tratamento no Bash (`trap`, `set -e` e `stderr`): `trap \'cleanup\' EXIT ERR INT TERM` registra função executada automaticamente ao sair ou ocorrer erro (garantindo remoção de arquivos temporários ou liberação de *locks*); mensagens de diagnóstico de erro devem ser enviadas para `stderr` (`echo "ERRO: ..." >&2`) mantendo `stdout` limpo para dados/*pipes*.',
      'Estratégia Fail-Fast vs Retentativa (Retry) com Logging: falhar rapidamente (*fail-fast*) diante de pré-condições inválidas (parâmetro ausente, permissão negada) evitando dano parcial; aplicar retentativa limitada (ex.: `3` tentativas com *backoff*) em falhas transitórias de rede/API; sempre gravar *timestamp*, código de retorno e contexto em log.',
      'Simulação Segura antes de Produção (`-WhatIf` / `-Confirm` / `--check`): no PowerShell avançado (`[CmdletBinding(SupportsShouldProcess=$true)]`) e no Ansible (`--check --diff`), testar previamente o impacto exato do script sem aplicar modificações destrutivas reais.',
      'Exemplo operacional: no PowerShell, força-se erro terminante com `try { Get-Content "C:\\cfg\\app.json" -ErrorAction Stop } catch { Write-Error $_.Exception.Message; exit 1 } finally { if ($conn) { $conn.Close() } }` garantindo captura da exceção e encerramento da conexão. No Bash, declara-se `cleanup() { rm -f "$TMP"; }; trap cleanup EXIT` e grava-se diagnósticos em `echo "ERRO: falha na API" >&2`; no Ansible simula-se antes via `ansible-playbook site.yml --check --diff`.'
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
    keyTerms: [
      'try / catch / finally: captura estruturada de erros terminantes e bloco de limpeza garantida independente de sucesso ou falha',
      '-ErrorAction Stop / $ErrorActionPreference: conversão de erros não terminantes do PowerShell para disparar o bloco catch',
      'trap (Bash EXIT / ERR): registro de rotina de limpeza automática executada ao término ou interrupção do script',
      'stderr (>&2): canal dedicado a mensagens de erro e diagnóstico para não contaminar dados enviados no stdout/pipe',
      'Dry-Run (-WhatIf / --check --diff): simulação segura de alterações no PowerShell e Ansible antes da execução em produção'
    ]
  }
};
