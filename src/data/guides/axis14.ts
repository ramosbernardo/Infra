import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_14: Record<string, StudyGuide> = {
  '14.1.1': {
    itemId: '14.1.1',
    highYieldSummary: [
      'Definição e escopo: nas práticas **ITIL** (*Information Technology Infrastructure Library*), o **Gerenciamento de Incidentes** e o **Gerenciamento de Problemas** possuem objetivos complementares porém distintos na sustentação de infraestrutura. Enquanto incidentes priorizam a restauração rápida do serviço dentro do **SLA** (*Service Level Agreement*), problemas investigam causas raiz para eliminar falhas recorrentes e manter a base de erros conhecidos (**KEDB**).',
      'Gerenciamento de Incidentes (Incident Management): foco absoluto em **RESTAURAR a operação normal do serviço o mais rápido possível** (reduzir impacto no negócio e cumprir SLA, minimizando o MTTR [*Mean Time To Repair* — tempo médio de reparo]), mesmo utilizando uma solução de contorno temporária (*workaround*) como reiniciar serviço, ativar *failover* ou redirecionar tráfego.',
      'Gerenciamento de Problemas (Problem Management): foco em **investigar a CAUSA RAIZ** de um ou mais incidentes (recorrentes ou de alto impacto) e eliminar definitivamente o defeito estrutural para prevenir recorrência — opera de forma Reativa (pós-incidente grave) ou Proativa (análise de tendências/logs antes de falhar).',
      'Erro Conhecido (Known Error) e KEDB: quando o Problema teve sua causa raiz identificada e possui um **workaround** documentado (mas a correção definitiva via mudança/*patch* ainda não foi aplicada), ele é registrado na **KEDB** (*Known Error Database* — base de dados de erros conhecidos) como Erro Conhecido para acelerar futuros atendimentos de N1/N2 (*Níveis 1 e 2*).',
      'Incidente Grave (Major Incident) e Sala de Guerra (War Room): incidentes críticos de alta urgência/impacto seguem fluxo separado com **Major Incident Manager** coordenando comunicação, escalonamento paralelo de especialistas e registro cronológico único de ações.',
      'Integração com Mudanças (Change Enablement): a correção definitiva de um Problema ou implementação de *workaround* arriscado em produção exige abertura formal de Requisição de Mudança (**RFC** — *Request for Change* em ITIL) — nunca alterar configurações estruturais "no susto" fora de controle durante crise sem registro posterior.',
      'Exemplo operacional: durante parada do sistema de prontuário por esgotamento de *threads* no Tomcat, o time N2 executa *failover* para o nó reserva e reinicia o serviço em `4 min` (**Gerenciamento de Incidentes** via *workaround* para proteger o SLA). Posteriormente, abre-se um registro no **Gerenciamento de Problemas**, descobre-se vazamento de conexões JDBC e documenta-se o procedimento de reinício preventivo na **KEDB** como Erro Conhecido até a aprovação da **RFC** de atualização do driver.'
    ],
    technicalReference: [
      'Incidente = Restauração rápida do serviço (Minimizar MTTR / "Apagar o incêndio") | Problema = Investigação da Causa Raiz (Prevenir recorrência)',
      'Known Error (Erro Conhecido) = Problema com **causa raiz identificada** + **workaround** (ou correção permanente) documentado na KEDB.'
    ],
    examTraps: [
      'Pegadinha clássica da banca: reiniciar um servidor Apache travado às 10h para o portal voltar ao ar faz parte do **Gerenciamento de Incidentes**; investigar depois nos dumps/logs por que o Apache vazou memória e aplicar patch corretivo pertence ao **Gerenciamento de Problemas**.',
      'Um Problema NÃO se transforma em Incidente quando cresce — incidentes e problemas são práticas/entidades distintas (1 Problema pode causar N Incidentes).',
      'Um Erro Conhecido só recebe esse status após ter sua causa raiz identificada (antes disso é apenas um Problema em investigação).'
    ],
    keyTerms: [
      'Incidente vs Problema: restauração imediata do serviço para reduzir MTTR/impacto versus investigação da causa raiz para prevenir recorrência',
      'Workaround: solução de contorno temporária documentada que restabelece ou mitiga o serviço sem corrigir a causa estrutural',
      'Erro Conhecido e KEDB: registro de Problema cuja causa raiz já foi identificada e possui workaround ou correção permanente mapeada',
      'Major Incident (War Room): incidente de impacto crítico tratado com coordenação dedicada, comunicação executiva e triagem paralela',
      'Change Enablement (RFC): controle formal de requisições de mudança exigido para correções definitivas ou alterações estruturais'
    ]
  },
  '14.1.2': {
    itemId: '14.1.2',
    highYieldSummary: [
      'Definição e escopo: a **Análise de Causa Raiz (RCA)** aplica métodos estruturados após a restauração do serviço para ir além dos sintomas imediatos e identificar falhas sistêmicas de arquitetura, automação ou processo. Ferramentas clássicas como **5 Porquês**, **Diagrama de Ishikawa (6M)** e **Árvore de Falhas (FTA)** sustentam revisões *blameless* orientadas a prevenção real.',
      'Análise de Causa Raiz (RCA — Root Cause Analysis): processo estruturado executado após resolução do incidente para distinguir **sintomas** (ex.: "CPU em `100%`", "sistema fora"), **causas imediatas/contribuintes** e a verdadeira **causa raiz sistêmica/técnica** cuja eliminação impede que o evento se repita.',
      'Técnica dos 5 Porquês (5 Whys): método iterativo simples e direto onde cada resposta vira a pergunta "Por quê?" seguinte (tipicamente `5` níveis) até superar a culpa individual e alcançar uma falha de processo, automação, monitoramento ou arquitetura (ex.: portal caiu -> *pool* esgotou -> *query* travou -> índice faltou -> esteira de *deploy* não validou migração em homologação).',
      'Diagrama de Ishikawa (Espinha de Peixe / Causa e Efeito): organiza visualmente possíveis fatores causais em `6` categorias clássicas (**6M**: Método, Máquina/Infra, Mão de obra/Pessoas, Material/Dados, Medição/Monitoramento, Meio/Ambiente) — excelente para incidentes complexos multifatoriais em sessões multidisciplinares.',
      'Árvore de Falhas (FTA — Fault Tree Analysis): análise dedutiva *top-down* que parte de um evento indesejado topo ("Queda total do ERP [*Enterprise Resource Planning*]") e decompõe logicamente combinações de falhas inferiores usando portas booleanas **AND (E)** e **OR (OU)**, revelando exatamente onde residem Pontos Únicos de Falha (**SPOF** — *Single Point of Failure*).',
      'Cultura Blameless (Post-Mortem Sem Culpa): RCAs eficazes investigam fragilidades nos sistemas, *guardrails* (travas de segurança automatizadas), automações e processos — punir operadores que cometeram erro humano só leva à omissão de evidências e impede a organização de criar travas técnicas reais.',
      'Exemplo operacional: após queda de `25 min` no portal clínico, a equipe aplica os **5 Porquês** (*1. Banco travou -> 2. Disco `/var/lib/pgsql` encheu -> 3. Logs WAL acumularam -> 4. Replicação secundária parou há 3 dias -> 5. Não havia trigger de atraso de replicação no Zabbix*) e mapeia no **Diagrama de Ishikawa** falhas em *Medição* (alerta ausente), *Método* (sem revisão periódica) e *Máquina* (volume único sem cota). Em *post-mortem blameless*, cria-se o *guardrail* automático sem punir o plantonista.'
    ],
    technicalReference: [
      '5 Porquês: profundidade causal sequencial (bom para cadeia única) | Ishikawa (6M): brainstorming amplo de categorias (bom para múltiplas causas)',
      'Árvore de Falhas (FTA): lógica booleana AND/OR top-down identificando SPOFs e probabilidade combinada.'
    ],
    examTraps: [
      'Encerrar uma RCA dizendo apenas "erro humano do analista que rodou comando errado" NÃO é causa raiz madura — a pergunta seguinte dos 5 Porquês deve explicar *por que o sistema permitiu o erro sem confirmação, revisão por pares ou trava automática*.',
      'RCA ocorre normalmente no contexto do Gerenciamento de Problemas / Pós-Incidente, e NÃO deve atrasar a restauração imediata de um serviço crítico fora do ar quando já há contorno seguro.',
      'Confundir Árvore de Falhas (top-down dedutiva com portas AND/OR) com FMEA (bottom-up indutiva que analisa modo de falha de cada componente).'
    ],
    keyTerms: [
      'RCA (Root Cause Analysis): investigação estruturada que separa sintomas imediatos da causa estrutural cuja correção evita recorrência',
      '5 Porquês (5 Whys): técnica sequencial de aprofundamento causal para sair da culpa pontual e atingir falhas de processo ou arquitetura',
      'Diagrama de Ishikawa (6M): mapeamento visual em espinha de peixe cobrindo Método, Máquina, Mão de obra, Material, Medição e Meio',
      'Árvore de Falhas (FTA): decomposição lógica top-down com portas booleanas AND/OR para revelar combinações críticas e SPOFs',
      'Cultura Blameless: condução de post-mortem focada em construir travas técnicas (guardrails) em vez de punir operadores'
    ]
  },
  '14.2.1': {
    itemId: '14.2.1',
    highYieldSummary: [
      'Definição e escopo: as metodologias estruturadas de **troubleshooting** organizam a investigação técnica ao longo da pilha **OSI** (*Open Systems Interconnection*) e do caminho de rede, evitando tentativas aleatórias. Seleciona-se **Bottom-Up**, **Top-Down**, **Dividir para Conquistar**, **Seguir o Caminho** ou **Comparação de Diferenças** conforme o escopo do sintoma, apoiando-se em comandos reais de rede e sistema.',
      'Abordagem Bottom-Up (Camada 1 -> Camada 7 OSI): inicia pela verificação física (cabos, LEDs de link/SFP [*Small Form-factor Pluggable*], `ethtool`, erros CRC [*Cyclic Redundancy Check*]) -> Enlace (ARP [*Address Resolution Protocol*] / `ip neigh`, tabela MAC, VLAN [*Virtual LAN*], trunk, STP [*Spanning Tree Protocol*]) -> Rede (`ip addr`, `ip route`, `ping`) -> Transporte (portas TCP/UDP, firewall, `ss -tulpn` / `netstat -ano` / `Test-NetConnection`) -> Aplicação (`dig`/`nslookup`, TLS, HTTP/Kerberos). Ideal para problemas locais ou "sem rede".',
      'Abordagem Top-Down (Camada 7 -> Camada 1 OSI): inicia na aplicação afetada (testando URL, logs da aplicação, código HTTP, `dig`/`nslookup`, certificado TLS) descendo apenas se necessário até transporte, rede e físico. Ideal quando apenas UM aplicativo específico falha enquanto todos os demais funcionam normalmente na mesma máquina.',
      'Abordagem Divide-and-Conquer (Dividir para Conquistar — Meio do Caminho): começa testando um ponto intermediário estratégico — ex.: Camada 3/4 com `ping -c 4`, `traceroute -n` / `tracert -d` ou `Test-NetConnection -ComputerName <ip> -Port 443` — para eliminar metade da pilha OSI ou do caminho de uma só vez; se L3 responde e o IP está correto, descarta L1–L3 e sobe imediatamente para L4/L7!',
      'Follow the Path (Seguir o Caminho): rastreia o fluxo real pacote a pacote do cliente até o servidor de destino passando por switch -> firewall -> roteador WAN -> balanceador -> servidor backend -> banco, usando `mtr -n -r -c 50` (Linux) / `pathping -n` (Windows) e checando tabelas NAT/sessão/rotas em cada salto.',
      'Spot the Differences / Mudanças Recentes ("O que mudou?"): comparar configuração/estado de um host ou filial que funciona com outro idêntico que falha (`diff`, GPO [*Group Policy Object*] aplicada, atualização recente, certificado renovado, alteração de firewall) resolve grande parte dos incidentes rapidamente.',
      'Exemplo operacional: quando apenas o sistema PACS falha em uma estação Windows enquanto intranet e e-mail operam normalmente, adota-se **Top-Down** ou **Divide-and-Conquer**: executa-se `nslookup pacs.hosp.local` (L7 DNS OK -> `10.10.5.20`), depois `Test-NetConnection -ComputerName 10.10.5.20 -Port 443` (`PingSucceeded: True`, mas `TcpTestSucceeded: False`), e segue-se o caminho com `tracert -d 10.10.5.20` e `ss -tulpn` no servidor comprovando bloqueio na porta `TCP 443`.'
    ],
    technicalReference: [
      'Bottom-Up (Física -> Aplicação): ideal para "sem conectividade geral / interface down" | Top-Down (Aplicação -> Física): ideal para "apenas sistema X falha"',
      'Divide-and-Conquer: começa no meio (ex.: L3 `ping`/`traceroute` ou teste na porta TCP) e decide subir ou descer pela resposta.'
    ],
    examTraps: [
      'Banca cobra o nome exato da metodologia descrita no cenário: testar primeiro cabo, LED de placa de rede, link do switch, ARP/VLAN, depois IP/gateway e só no fim testar DNS e aplicação caracteriza método **Bottom-Up**.',
      'Ficar horas verificando cabeamento e placa de rede quando 5 outros serviços no mesmo servidor estão funcionando normalmente desperdiça tempo — o cenário pede abordagem **Top-Down** ou **Divide-and-Conquer**.',
      'Diagnosticar por tentativa e erro ("reiniciar tudo e rezar") sem formular hipótese oculta a causa e pode destruir evidências voláteis em memória.'
    ],
    keyTerms: [
      'Bottom-Up (L1 -> L7): diagnóstico ascendente da camada física até a aplicação, indicado para quedas totais de enlace ou rede',
      'Top-Down (L7 -> L1): diagnóstico descendente a partir da aplicação e DNS, indicado quando apenas um serviço falha',
      'Divide-and-Conquer (Dividir para Conquistar): teste em camada intermediária (ex.: ping / Test-NetConnection) para descartar metade da pilha OSI',
      'Follow the Path (mtr / pathping): inspeção sequencial salto a salto até o destino checando rotas, NAT e perdas por nó',
      'Spot the Differences: comparação direta entre configuração/estado de nó funcional e nó falho ou revisão de mudanças recentes'
    ]
  },
  '14.2.2': {
    itemId: '14.2.2',
    highYieldSummary: [
      'Definição e escopo: a **análise de logs** em troubleshooting extrai evidências cronológicas de sistemas operacionais, proxies, bancos, Active Directory e firewalls para identificar o primeiro evento anômalo de uma falha. Exige normalização de fusos horários (**UTC** vs local), filtragem progressiva por severidade e interpretação precisa de códigos HTTP, **Event IDs** e mensagens de kernel.',
      'Leitura Crítica de Timestamps e Fusos Horários: antes de comparar logs de firewall (UTC — *Coordinated Universal Time*), Active Directory (`UTC-3` / BRT [*Brasília Time*]), servidor Linux e balanceador, normalize os fusos horários e verifique sincronização NTP (*Network Time Protocol*) — um desvio de `3 horas` leva o analista a olhar para o trecho errado do arquivo!',
      'Níveis de Severidade e Filtragem Progressiva: filtrar primeiro por severidade crítica (`ERR`, `CRIT`, `ALERT`, `FATAL`) e janela temporal estrita do início do sintoma; evitar tirar conclusões apenas pelo ÚLTIMO erro exibido (frequentemente consequência em cascata — procurar o **primeiro evento anômalo** na linha do tempo!).',
      'Logs Estruturados e Ferramentas CLI vs SIEM: em servidores Linux usar `journalctl -u servico --since ...`, `grep`/`awk`/`zgrep` e `/var/log/*`; no Windows usar *Event Viewer* (filtrando por **Event ID** específico nos logs *Application*, *System*, *Security*, *Directory Service*); em escala corporativa usar SIEM (*Security Information and Event Management* — Graylog, ELK [*Elasticsearch, Logstash, Kibana*], Splunk, Wazuh) para buscas cruzadas.',
      'Cuidado com Silenciamento / Ausência de Log e Rotação: ausência repentina de linhas de log durante uma falha pode indicar disco `/var/log` `100%` cheio, processo travado antes de logar ou serviço morto — confirmar *timestamps* mais recentes.',
      'Logs Clássicos de Infraestrutura: Firewall (*Policy Deny*, tradução NAT, descartes IPS [*Intrusion Prevention System*], erros IKE [*Internet Key Exchange*] Phase 1/2), Web/Proxy (status `4xx` vs `502`/`503`/`504` + `upstream_response_time`), Active Directory (`4625` logon falho, erros KDC [*Key Distribution Center*]/Kerberos) e Storage/VMware (`vmkernel.log` códigos SCSI [*Small Computer System Interface*] / APD [*All Paths Down*]).',
      'Exemplo operacional: diante de erros `504 Gateway Timeout` às `11:05` BRT no portal web, o analista converte o horário para `14:05 UTC` nos logs do firewall e do **Nginx** (`/var/log/nginx/error.log`), onde encontra o **primeiro erro** `upstream timed out (110: Connection timed out)` com `upstream_response_time=60.002`. Cruzando com `journalctl -u postgresql --since "11:04"`, confirma bloqueio de tabela anterior ao `504`.'
    ],
    technicalReference: [
      'Regra de ouro em logs: procurar o **PRIMEIRO erro cronológico** que desencadeou a cascata (não o último spam repetido)',
      'HTTP no Reverse Proxy/ADC: `502 Bad Gateway` (backend recusou/resposta inválida) | `503 Service Unavailable` (pool vazio/manutenção) | `504 Gateway Timeout` (backend demorou demais).'
    ],
    examTraps: [
      'Comparar logs em UTC (padrão de muitos firewalls/nuvem/containers) lado a lado com logs em horário local BRT (UTC-3) sem ajustar gera erro de 3 horas na investigação!',
      'Confiar apenas em `500`/`502` genérico do navegador sem abrir o `error.log` do proxy/backend ou o log de segurança impede distinguir se o problema foi timeout de banco, certificado expirado ou regra de firewall.',
      'Habilitar nível `DEBUG` permanente em produção pode degradar I/O de disco e derrubar serviços críticos — sempre restaurar para `INFO`/`WARN` após concluir a coleta.'
    ],
    keyTerms: [
      'Normalização UTC vs BRT: alinhamento obrigatório de fusos horários e sincronismo NTP antes de comparar arquivos de log distintos',
      'Primeiro Erro Cronológico: busca pelo evento inicial que deflagrou a falha em cascata, evitando focar no último sintoma repetido',
      'Event IDs e journalctl: filtragem estruturada por código de evento no Windows (ex.: 4625) e por unidade/janela temporal no Linux',
      'HTTP 502 vs 503 vs 504: resposta inválida/recusa do backend (502), pool indisponível (503) e estouro de tempo de espera do upstream (504)',
      'Silenciamento de Log: ausência súbita de registros causada por disco cheio, rotação falha ou travamento precoce do daemon'
    ]
  },
  '14.2.3': {
    itemId: '14.2.3',
    highYieldSummary: [
      'Definição e escopo: a **coleta de evidências** preserva artefatos técnicos e forenses seguindo a **Ordem de Volatilidade (RFC 3227)** para subsidiar diagnósticos profundos e auditorias sem contaminar a prova. Abrange captura de pacotes com `tcpdump` (filtros **BPF**) e **Wireshark** (filtros de exibição), *dumps* de memória, *snapshots* e verificação de integridade por *hash* **SHA-256**.',
      'Ordem de Volatilidade na Coleta de Evidências (RFC 3227): coletar SEMPRE dos dados MAIS voláteis para os MENOS voláteis antes de reiniciar ou desligar o sistema afetado — (1) Registros de CPU/Memória RAM/Conexões de rede ativas (`ss`, `lsof`, *dump* RAM), (2) Processos em execução e sistemas temporários, (3) Discos/*Snapshots*/Logs locais, (4) Logs remotos e mídias de backup.',
      'Capturas de Pacotes (`pcap` — `tcpdump` / Wireshark): coletar tráfego bruto em `.pcap`/`.pcapng` especificando interface, *snaplen* completo e **filtro BPF** (*Berkeley Packet Filter*) válido (`tcpdump -i eth0 -nn -s 0 -w captura.pcap "host 10.1.2.3 and tcp port 443"`) e analisar no **Wireshark** usando **filtros de exibição** válidos (`ip.addr == 10.1.2.3 && tcp.port == 443`, `tcp.flags.reset == 1`, `tcp.analysis.retransmission`, `dns.flags.rcode == 3`) para comprovar `SYN` sem `SYN-ACK`, `RST` imediato, falhas TLS ou erros DNS.',
      'Dumps de Memória / Core Dumps e Heap Dumps: capturam estado exato de memória antes de reiniciar um processo travado ou vazando RAM (`gcore`, `jmap`/`jstack` em JVM [*Java Virtual Machine*], Crash Dump no Windows, `/proc/<pid>`), permitindo análise posterior sem prolongar a indisponibilidade do serviço.',
      'Snapshots Antes de Ações Destrutivas: em VMs suspeitas de comprometimento ou falha severa antes de aplicar correções/*reboots*, gerar *snapshot* de disco (e memória quando aplicável) ou clonar o disco para preservar estado exato para auditoria/RCA.',
      'Cadeia de Custódia e Integridade Forense (Hash): em incidentes de segurança ou auditorias legais, documentar quem coletou, data/hora exata (UTC), método empregado e calcular **hash criptográfico (SHA-256)** imediato de cada arquivo `.pcap`/imagem/log coletado garantindo prova irrefutável de não adulteração.',
      'Exemplo operacional: antes de reiniciar um servidor de API com suspeita de quedas intermitentes, coleta-se as conexões ativas com `ss -tan > conns.txt`, gera-se *thread dump* com `jstack <PID> > threads.txt` e captura-se tráfego com `tcpdump -i eth0 -nn -s 0 -C 100 -W 3 -w /tmp/api.pcap "host 10.1.2.3 and tcp port 443"`. Ao abrir `/tmp/api.pcap` no Wireshark, o filtro `tcp.flags.reset == 1 || tcp.analysis.retransmission` evidencia `RST` vindo do firewall e gera-se a prova com `sha256sum /tmp/api.pcap* > hashes.sha256`.'
    ],
    technicalReference: [
      'Volatilidade (RFC 3227): RAM / Conexões de Rede / Processos (perde no reboot!) -> Disco / Logs -> Backups/Arquivos Frios',
      'Tcpdump completo sem truncar payload: `-s 0` (ou padrão moderno 262144) + `-nn` (não resolve DNS/porta) + `-w arquivo.pcap` + Hash SHA-256.'
    ],
    examTraps: [
      'Reiniciar imediatamente um servidor comprometido ou travado como "primeira ação reflexa" DESTRÓI toda a evidência volátil em RAM (processos ocultos, chaves em memória, conexões C2 ativas, dumps de thread).',
      'Nunca trabalhar diretamente sobre a mídia/arquivo de evidência original — gerar cópia forense verificada por hash SHA-256 e analisar sempre a cópia.',
      'Rodar `tcpdump` sem filtro nem limite de tamanho (`-C` / `-W` ring buffer) em interface 10 Gbps enche o disco raiz `/` em segundos e trava o próprio servidor investigado.'
    ],
    keyTerms: [
      'Ordem de Volatilidade (RFC 3227): prioridade de coleta da RAM/sockets/processos antes de disco, logs remotos e backups',
      'tcpdump e Filtros BPF: captura CLI (-nn -s 0 -w) usando sintaxe BPF (host X and tcp port 443) sem confundir com display filter',
      'Filtros de Exibição Wireshark: expressões de análise pós-captura (ip.addr == X && tcp.port == 443, tcp.flags.reset == 1, tcp.analysis.retransmission)',
      'Dumps e Snapshots: preservação do estado de memória (gcore/jstack) e disco da VM antes de reinicializações corretivas',
      'Cadeia de Custódia e SHA-256: registro cronológico de posse/coleta com hash criptográfico garantindo integridade da evidência'
    ]
  },
  '14.2.4': {
    itemId: '14.2.4',
    highYieldSummary: [
      'Definição e escopo: o **isolamento de falhas** reduz sistematicamente a área de busca do incidente delimitando o raio de impacto (*blast radius*), testando hipóteses falsificáveis com **uma variável por vez** e separando defeitos físicos de bloqueios lógicos. Utiliza interpretação precisa de saídas de `ping` (PMTUD), `mtr`/`pathping`, `dig`/`nslookup`, `ss`/`netstat` e `Test-NetConnection`.',
      'Delimitação Precisa do Escopo ("Blast Radius"): primeira pergunta prática do isolamento — o problema afeta **1 usuário/estação**, **1 VLAN/andar**, **1 filial inteira**, **todos os usuários de um serviço** ou **toda a infraestrutura**? Comparar casos positivos vs negativos isola rapidamente em qual segmento a falha reside.',
      'Formulação e Teste Científico de Hipóteses: evitar mudanças aleatórias simultâneas; formular hipótese falsificável ("Se o problema for o DNS interno, consultar `dig @8.8.8.8` ou `nslookup <nome> 8.8.8.8` funcionará e `dig @10.10.1.10` devolverá `SERVFAIL`/`NXDOMAIN`"), executar teste mínimo de baixo impacto, observar resultado e refinar ou descartar a hipótese.',
      'Separação Camada Física vs Camada Lógica: validar primeiro portadora física (link LED, potência óptica `dBm` em *transceivers* SFP via `show interfaces transceiver`, erros `CRC`/`input errors` incrementando em porta de switch, ou `ethtool eth0`) antes de assumir erro de firewall/aplicação quando há perda intermitente ou queda total de link.',
      'Testes Isolados por Segmento e Interpretação de Saídas: testar localmente no servidor (`curl http://127.0.0.1:8080` + `ss -tulpn` / `netstat -ano`) valida *bind* e daemon -> testar da LAN (`Test-NetConnection -ComputerName <ip> -Port 8080`) valida firewall/ACL -> testar com `ping -c 4 -M do -s 1472` (`ping -n 4 -f -l 1472` no Windows) valida **MTU 1500** -> interpretar `mtr -n -r -c 50` / `pathping -n` sabendo que perda ou `* * *` só no salto `N` que normaliza em `N+1` é *rate limit* ICMP do roteador, não perda real.',
      'Regra de Ouro: Alterar UMA Variável por Vez: modificar regra de firewall, reiniciar serviço e trocar DNS ao mesmo tempo pode mascarar a causa real ou introduzir um segundo defeito durante o *troubleshooting*.',
      'Exemplo operacional: clientes de uma filial reclamam de travamento ao abrir laudos grandes apesar de `ping` padrão passar. O analista isola o caminho com `mtr -n -r -c 50 10.10.5.20`: o salto `2` exibe `40%` de perda mas o salto `3` e o destino têm `0%` (*rate limit* ICMP descartado como causa); porém `ping -c 4 -M do -s 1472 10.10.5.20` retorna `Frag needed and DF set (mtu = 1420)` sobre túnel VPN, isolando falha de **PMTUD/MSS** sem mexer em DNS ou firewall.'
    ],
    technicalReference: [
      'Triagem de Escopo: 1 host (problema local/cabo/NIC) | 1 sub-rede/switch (VLAN/gateway/L2) | 1 aplicação (servidor/banco/DNS) | Tudo (Core/WAN/AD)',
      'Teste Local -> LAN -> Firewall -> WAN separa rapidamente erro interno da aplicação vs bloqueio de rede.'
    ],
    examTraps: [
      'Se `curl http://127.0.0.1:8080` dentro do servidor responde HTTP 200 instantaneamente mas clientes na LAN tomam timeout na porta 8080, a aplicação NÃO está travada — o bloqueio está no bind `127.0.0.1` (não ouvindo em `0.0.0.0`), firewall local (`nftables`/`Windows Firewall`) ou ACL/firewall de rede.',
      'Pacotes perdidos com contador `CRC / Input Errors` crescendo na porta do switch indicam falha FÍSICA (cabo ruim, conector mal crimpado, SFP sujo/defeituoso ou duplex mismatch), NÃO regra de firewall ou DNS.',
      'Fazer 3 ou 4 alterações simultâneas durante crise sem testar após cada passo impede saber o que realmente corrigiu e dificulta o rollback.'
    ],
    keyTerms: [
      'Blast Radius (Escopo): delimitação inicial entre falha unitária (host), segmentada (VLAN/filial), de serviço único ou global',
      'Hipótese Falsificável (1 Variável): alteração e validação isolada de um fator por vez para confirmar ou descartar causas sem mascarar o defeito',
      'Interpretação de mtr / pathping (* * *): distinção entre rate limiting ICMP em um único salto intermediário e perda real sustentada até o destino',
      'Teste de MTU / PMTUD (DF = 1472): diagnóstico de fragmentação bloqueada em túneis WAN/VPN via ping -M do -s 1472 (Linux) ou -f -l 1472 (Windows)',
      'Bind Local vs Rede (ss / Test-NetConnection): comparação entre teste em 127.0.0.1 e porta externa para separar falha de daemon de bloqueio de firewall'
    ]
  },
  '14.2.5': {
    itemId: '14.2.5',
    highYieldSummary: [
      'Definição e escopo: a **correlação de eventos** cruza sinais simultâneos de rede, *storage*, hipervisores, diretórios e aplicações em uma única linha do tempo sincronizada para distinguir causa primária de efeitos em cascata. Depende criticamente de sincronia temporal via **NTP** (`UDP 123`), mapeamento de dependências (**CMDB**) e regras de correlação em **SIEM**. ',
      'Pré-requisito Absoluto: Sincronização Temporal (NTP / `chrony` / W32Time): correlação de eventos entre switches, firewalls, Domain Controllers, servidores Linux e *storage* falha completamente se os relógios divergirem por segundos/minutos; recomenda-se hierarquia NTP (*Network Time Protocol*, `UDP 123`) interna redundante sincronizada a fontes *Stratum 1/2* confiáveis (ex.: NTP.br).',
      'Construção da Linha do Tempo Unificada (Timeline): alinhar eventos de múltiplas fontes em ordem cronológica estrita (preferencialmente em **UTC**) revela relações de causa e efeito invisíveis isoladamente (ex.: `14:02:10` Storage registra falha de *path* FC [*Fibre Channel*] -> `14:02:12` ESXi registra perda de *datastore* -> `14:02:15` Banco SQL congela -> `14:02:20` *Load Balancer* marca *pool* DOWN!).',
      'Mapeamento de Dependências (CMDB / Topologia de Serviços): CMDB (*Configuration Management Database*) documenta relações verticais e horizontais (DNS -> AD -> Autenticação -> API -> Fila/Mensageria -> Banco -> Storage -> Rede), evitando tratar um sintoma secundário distante como se fosse o componente defeituoso.',
      'Correlação em SIEM e Ferramentas de Observabilidade: regras de correlação automática cruzam padrões entre camadas (ex.: alerta de *brute force* no firewall/AD seguido de logon bem-sucedido de IP estrangeiro + criação de usuário no AD + alerta de execução PowerShell no EDR [*Endpoint Detection and Response*] dentro de janela de `5 minutos`).',
      'Supressão de Tempestades de Eventos (Root Event Correlation): em quedas de *core* ou energia, centenas de alertas disparam em segundos; agrupar eventos derivados pelo ativo raiz economiza horas de triagem errada.',
      'Exemplo operacional: após queda simultânea de `18` sistemas clínicos, o NOC checa a sincronia com `chronyc tracking` e `w32tm /query /status` (confirmando desvio `< 10 ms`) e monta a *timeline* UTC: `18:10:02` alerta de falha na controladora SAN (`FC link down`), `18:10:05` `vmkernel.log` registra `APD` nos `4` hosts ESXi e `18:10:18` os *health checks* HTTP retornam `503`. A correlação pelo **CMDB** aponta imediatamente a SAN como causa raiz.'
    ],
    technicalReference: [
      'Ordem de dependência típica: Energia/Refrigeração -> Rede/Core -> Storage/SAN -> Hipervisor -> AD/DNS -> Banco de Dados -> Aplicação -> Usuário',
      'Protocolo NTP: UDP 123 | Estrato 0 (relógio atômico/GPS) -> Stratum 1 -> Stratum 2/3 internos | Sempre padronizar logs em UTC ou offset explícito.'
    ],
    examTraps: [
      'Investigar primeiro "por que o sistema web devolveu erro 500" quando na mesma linha do tempo há queda de BGP/link ou latência de 500 ms no storage ataca o efeito em vez da causa.',
      'Dois servidores com 4 minutos de diferença de relógio podem mostrar nos logs que "o banco caiu ANTES de a rede cair", invertendo completamente o diagnóstico da causa raiz!',
      'Em ambientes Active Directory, o PDC Emulator é a autoridade central de tempo do domínio (sincronizando com NTP externo) e os demais DCs e estações sincronizam a partir dele via NT5DS.'
    ],
    keyTerms: [
      'NTP (UDP 123 / chrony / W32Time): protocolo e serviços de sincronismo de relógio indispensáveis para ordenação válida de logs',
      'Timeline Unificada (UTC): consolidação cronológica de eventos multi-camada em horário padrão único para reconstruir causalidade',
      'CMDB (Mapeamento de Dependências): inventário relacional de serviços e infraestrutura usado para rastrear impactos em cascata',
      'Correlação SIEM: cruzamento automatizado de múltiplos eventos fracos em janelas temporais para detectar incidentes ou ataques',
      'Root Event Correlation: agrupamento de tempestades de alertas secundários sob o ativo causador primário'
    ]
  },
  '14.2.6': {
    itemId: '14.2.6',
    highYieldSummary: [
      'Definição e escopo: a conclusão formal da **análise de causa raiz** consolida evidências técnicas no documento de **Post-Mortem**, convertendo achados de diagnóstico (**5 Porquês**, **Ishikawa**) em planos de ação corretiva e preventiva (**CAPA** — *Corrective and Preventive Action*) com responsáveis e prazos. Retroalimenta continuamente a **KEDB**, *runbooks* operacionais e regras de monitoramento.',
      'Do Troubleshooting à RCA Formal: uma vez restaurado o serviço, o time reúne todas as evidências preservadas (`pcaps`, logs correlacionados, *dumps*, histórico de mudanças) para fechar o ciclo respondendo: *O que aconteceu? Por que aconteceu? Por que o monitoramento não avisou antes? Como impedir que aconteça novamente?*',
      'Elaboração do Documento Post-Mortem: relatório objetivo padronizado contendo resumo executivo, impacto quantificado (usuários/tempo fora/SLA), linha do tempo cronológica minuto a minuto, causa raiz técnica e contribuintes, o que funcionou bem na resposta, e **Plano de Ação Preventiva (CAPA)**.',
      'Ações Corretivas vs Ações Preventivas (Sistêmicas): corrigir apenas o item quebrado ("aumentar o disco que encheu") é ação paliativa local; prevenção real altera sistemas e processos ("configurar `logrotate` + alerta preditivo `80%` + automação de limpeza + atualização na imagem padrão Ansible").',
      'Classificação e Gestão de Riscos Pós-RCA: cada ação do *post-mortem* recebe responsável nominal, prazo e vínculo com item de *backlog*/mudança garantindo acompanhamento até conclusão real (evitando "RCA de gaveta").',
      'Retroalimentação da Base de Conhecimento (KEDB / Runbooks): transformar o aprendizado em guias rápidos de diagnóstico futuro (*runbooks* — manuais operacionais padronizados) para o Service Desk/NOC (*Network Operations Center*) e adicionar novos *checks* sintéticos ou *triggers* no Zabbix/Grafana para detectar precocemente o padrão.',
      'Exemplo operacional: concluída a investigação de uma falha de certificado expirado que derrubou o barramento FHIR, o **Post-Mortem** registra `42 min` de indisponibilidade, aponta via **5 Porquês** a ausência de renovação automática e entrega um **CAPA** com `3` ações datadas: (1) implantar *trigger* Zabbix para validade TLS `< 30 dias` (dono: NOC, prazo `3d`), (2) automatizar renovação via ACME/Ansible (dono: Infra, `15d`) e (3) publicar *runbook* na **KEDB**.'
    ],
    technicalReference: [
      'Estrutura Post-Mortem: Resumo & Impacto -> Timeline -> Causa Raiz (5 Porquês/Ishikawa) -> Ações Corretivas & Preventivas com Dono + Prazo',
      'Objetivo final da RCA: Prevenção sistêmica de recorrência (monitoramento + automação + atualização de runbooks/KEDB).'
    ],
    examTraps: [
      'Um documento de Post-Mortem sem ações concretas com responsável e prazo definidos falha em prevenir a repetição do mesmo incidente meses depois.',
      'Confundir resolução imediata do incidente (contorno/restauração) com encerramento do Problema/RCA — só se encerra a análise após identificar a causa raiz e tratar ou aceitar formalmente o risco.',
      'Adotar tom punitivo contra profissionais no Post-Mortem destrói a transparência técnica necessária para descobrir falhas ocultas de arquitetura.'
    ],
    keyTerms: [
      'Post-Mortem: relatório técnico pós-incidente com impacto quantificado, linha do tempo, causa raiz e lições aprendidas',
      'CAPA (Corretivas vs Preventivas): distinção entre sanar o defeito pontual e implantar barreiras sistêmicas contra recorrência',
      'Gestão de Ações (Dono e Prazo): rastreamento formal das melhorias pós-RCA em backlog ou RFC evitando engavetamento',
      'Runbooks e Retroalimentação KEDB: atualização de guias operacionais de resposta rápida para o NOC e Service Desk',
      'Monitoramento Preditivo Pós-RCA: criação de novas triggers e checks sintéticos derivados dos sinais ignorados no incidente'
    ]
  },
  '14.2.7': {
    itemId: '14.2.7',
    highYieldSummary: [
      'Definição e escopo: os **procedimentos de recuperação** garantem o retorno seguro e verificável de serviços após falhas críticas, combinando plano prévio de reversão (**rollback**), recuperação ordenada por dependências, **failback** sincronizado e validação técnica e funcional (*smoke testing* e *hypercare*). Reduzem o risco de agravamento durante crises e evitam perda de dados no retorno de contingência.',
      'Plano de Rollback Prévio (Antes de Aplicar Qualquer Correção): toda alteração corretiva em produção deve possuir procedimento explícito, testado e viável de reversão (*rollback* — ex.: *snapshot* VM prévio, backup da config do firewall/switch, `git revert`, comando inverso) antes de ser executada, pois mudanças apressadas durante crises frequentemente agravam a falha.',
      'Estratégias Seguras de Recuperação: reiniciar serviços dependentes respeitando ordem hierárquica, ativar *failover* para nó/site secundário saudável, restaurar configuração íntegra conhecida (*Last Known Good* — última configuração válida) ou restaurar dados a partir de backup imutável validado (**PITR** — *Point-in-Time Recovery* em bancos).',
      'Failback Controlado após Estabilização: retornar do ambiente de contingência/DR (*Disaster Recovery*) para o ambiente primário exige planejamento cuidadoso fora de pico (NUNCA de surpresa!) sincronizando deltas gerados durante a contingência para não perder transações ocorridas no site secundário.',
      'Validação Técnica e Funcional Pós-Recuperação (Smoke Testing): restaurar o servidor ligado NÃO encerra o procedimento — validar testes sintéticos ponta a ponta (login de usuário, escrita/leitura em banco, certificados TLS, filas zerando, ausência de erros novos nos logs) e confirmar com representante funcional/negócio.',
      'Monitoramento Intensificado Pós-Incidente (Hypercare): manter acompanhamento próximo das métricas-chave (latência, erros `5xx`, CPU, replicação, consumo de memória) nas horas seguintes à recuperação antes de encerrar formalmente o incidente.',
      'Exemplo operacional: antes de aplicar um *patch* emergencial no *cluster* de banco clínico, realiza-se backup do esquema e *snapshot* consistente com plano de **rollback** pronto; após restabelecer o site primário, bloqueia-se novo tráfego na janela agendada para sincronizar os logs de transação do site DR antes do **failback** (evitando *split-brain* — divisão de estado ativo entre dois nós). Por fim, executa-se *smoke test* com login + gravação de exame teste e acompanha-se `5xx`/latência por `2 h` em *hypercare*.'
    ],
    technicalReference: [
      'Ciclo de Recuperação Segura: Backup/Snapshot prévio -> Plano de Rollback pronto -> Execução ordenada -> Validação Técnica & Funcional -> Monitoramento pós-recuperação',
      'Atenção no Failback: sincronizar dados modificados durante o período em contingência ANTES de chavear de volta para o site principal!'
    ],
    examTraps: [
      'Realizar failback automático ou imediato assim que o link/servidor primário volta a responder ping pode causar **split-brain** ou perda de dados novos gravados no secundário enquanto o primário estava fora.',
      'Declarar incidente encerrado apenas porque o servidor subiu após reboot sem testar a funcionalidade ponta a ponta (ex.: aplicação subiu mas banco ficou em modo recovery/somente leitura).',
      'Executar mudança corretiva arriscada sem backup de configuração ou plano de rollback definido transforma falha parcial recuperável em indisponibilidade prolongada.'
    ],
    keyTerms: [
      'Rollback (Plano de Reversão): procedimento pré-testado (snapshot, backup de config, git revert) para desfazer mudança corretiva falha',
      'PITR e Last Known Good: restauração pontual de banco até instante íntegro (PITR) ou retorno à última configuração validada',
      'Failover vs Failback: chaveamento emergencial para contingência versus retorno planejado após ressincronização completa de dados',
      'Smoke Testing (Validação Funcional): bateria rápida pós-recuperação testando fluxo ponta a ponta com usuário e escrita/leitura real',
      'Hypercare: período de observação intensificada pós-incidente sobre latência, erros 5xx e replicação antes do encerramento formal'
    ]
  }
};
