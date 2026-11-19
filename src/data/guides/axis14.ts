import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_14: Record<string, StudyGuide> = {
  '14.1.1': {
    itemId: '14.1.1',
    highYieldSummary: [
      'Gerenciamento de Incidentes (Incident Management): foco absoluto em **RESTAURAR a operação normal do serviço o mais rápido possível** (reduzir impacto no negócio e cumprir SLA), mesmo utilizando uma solução de contorno temporária (workaround) como reiniciar serviço, ativar failover ou redirecionar tráfego.',
      'Gerenciamento de Problemas (Problem Management): foco em **investigar a CAUSA RAIZ** de um ou mais incidentes (recorrentes ou de alto impacto) e eliminar definitivamente o defeito estrutural para prevenir recorrência — opera de forma Reativa (pós-incidente grave) ou Proativa (análise de tendências/logs antes de falhar).',
      'Erro Conhecido (Known Error) e KEDB: quando o Problema teve sua causa raiz identificada e possui um **workaround** documentado (mas a correção definitiva via mudança/patch ainda não foi aplicada), ele é registrado na **KEDB (Known Error Database)** como Erro Conhecido para acelerar futuros atendimentos de N1/N2.',
      'Incidente Grave (Major Incident) e Sala de Guerra (War Room): incidentes críticos de alta urgência/impacto seguem fluxo separado com **Major Incident Manager** coordenando comunicação, escalonamento paralelo de especialistas e registro cronológico único de ações.',
      'Integração com Mudanças (Change Enablement): a correção definitiva de um Problema ou implementação de workaround arriscado em produção exige abertura formal de Requisição de Mudança (RfC) — nunca alterar configurações estruturais "no susto" fora de controle durante crise sem registro posterior.'
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
    keyTerms: ['Incidente vs Problema', 'Workaround', 'Erro Conhecido (KEDB)', 'Causa Raiz', 'Major Incident']
  },
  '14.1.2': {
    itemId: '14.1.2',
    highYieldSummary: [
      'Análise de Causa Raiz (RCA — Root Cause Analysis): processo estruturado executado após resolução do incidente para distinguir **sintomas** (ex.: "CPU em 100%", "sistema fora"), **causas imediatas/contribuintes** e a verdadeira **causa raiz sistêmica/técnica** cuja eliminação impede que o evento se repita.',
      'Técnica dos 5 Porquês (5 Whys): método iterativo simples e direto onde cada resposta vira a pergunta "Por quê?" seguinte (tipicamente 5 níveis) até superar a culpa individual e alcançar uma falha de processo, automação, monitoramento ou arquitetura (ex.: portal caiu -> pool esgotou -> query travou -> índice faltou -> esteira de deploy não validou migração em homologação).',
      'Diagrama de Ishikawa (Espinha de Peixe / Causa e Efeito): organiza visualmente possíveis fatores causais em categorias clássicas (Método, Máquina/Infra, Mão de Obra/Pessoas, Material/Dados, Medição/Monitoramento, Meio/Ambiente) — excelente para incidentes complexos multifatoriais em sessões multidisciplinares.',
      'Árvore de Falhas (FTA — Fault Tree Analysis): análise dedutiva top-down que parte de um evento indesejado topo ("Queda total do ERP") e decompõe logicamente combinações de falhas inferiores usando portas booleanas **AND (E)** e **OR (OU)**, revelando exatamente onde residem Pontos Únicos de Falha (SPOF).',
      'Cultura Blameless (Post-Mortem Sem Culpa): RCAs eficazes investigam fragilidades nos sistemas, guardrails, automações e processos — punir operadores que cometeram erro humano só leva à omissão de evidências e impede a organização de criar travas técnicas reais.'
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
    keyTerms: ['RCA (Causa Raiz)', '5 Porquês', 'Diagrama de Ishikawa', 'Árvore de Falhas (FTA)', 'Post-Mortem Blameless']
  },
  '14.2.1': {
    itemId: '14.2.1',
    highYieldSummary: [
      'Abordagem Bottom-Up (Camada 1 -> Camada 7 OSI): inicia pela verificação física (cabos conectados, LEDs de link/SFP, potência óptica, erros CRC) -> Enlace (ARP, MAC table, VLAN, trunk, STP) -> Rede (IP, máscara, gateway, rota, ping) -> Transporte (portas TCP/UDP, firewall, `ss`/`telnet`) -> Aplicação (DNS, TLS/certificado, HTTP/SMTP/Kerberos). Ideal para problemas locais ou quando usuário reporta "sem rede".',
      'Abordagem Top-Down (Camada 7 -> Camada 1 OSI): inicia na aplicação afetada (testando URL, logs da aplicação, código HTTP, DNS, certificado TLS) descendo apenas se necessário até transporte, rede e físico. Ideal quando apenas UM aplicativo específico falha enquanto todos os demais funcionam normalmente na mesma máquina.',
      'Abordagem Divide-and-Conquer (Dividir para Conquistar — Meio do Caminho): começa testando um ponto intermediário estratégico (ex.: Camada 3 `ping` / `traceroute` até o gateway ou VIP) para eliminar metade da pilha OSI ou metade do caminho de rede de uma só vez — se o ping funciona e traz IP certo, já elimina camadas 1, 2 e 3 e sobe imediatamente para L4/L7!',
      'Follow the Path (Seguir o Caminho): rastreia o fluxo real pacote a pacote do cliente até o servidor de destino passando por switch -> firewall -> roteador WAN -> balanceador -> servidor backend -> banco, checando tabelas NAT/sessão/rotas em cada salto.',
      'Spot the Differences / Mudanças Recentes ("O que mudou?"): comparar configuração/estado de um host ou filial que funciona com outro idêntico que falha (`diff`, GPO aplicada, atualização recente, certificado renovado, alteração de firewall) resolve grande parte dos incidentes rapidamente.'
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
    keyTerms: ['Bottom-Up (L1 -> L7)', 'Top-Down (L7 -> L1)', 'Divide-and-Conquer', 'Follow the Path', 'Spot the Differences']
  },
  '14.2.2': {
    itemId: '14.2.2',
    highYieldSummary: [
      'Leitura Crítica de Timestamps e Fusos Horários: antes de comparar logs de firewall (UTC), Active Directory (UTC-3), servidor Linux e balanceador, normalize os fusos horários e verifique sincronização NTP — um desvio de 3 horas (UTC vs horário de Brasília) leva o analista a olhar para o trecho errado do arquivo!',
      'Níveis de Severidade e Filtragem Progressiva: filtrar primeiro por severidade crítica (`ERR`, `CRIT`, `ALERT`, `FATAL`) e janela temporal estrita do início do sintoma; evitar tirar conclusões apenas pelo ÚLTIMO erro exibido (frequentemente consequência em cascata — procurar o **primeiro evento anômalo** na linha do tempo!).',
      'Logs Estruturados e Ferramentas CLI vs SIEM: em servidores Linux usar `journalctl -u servico --since ...`, `grep`/`awk`/`zgrep` e `/var/log/*`; no Windows usar Event Viewer (filtrando por **Event ID** específico nos logs Application, System, Security, Directory Service); em escala corporativa usar SIEM/centralizador (Graylog, ELK, Splunk, Wazuh) para buscas cruzadas.',
      'Cuidado com Silenciamento / Ausência de Log e Rotação: ausência repentina de linhas de log durante uma falha pode indicar disco `/var/log` 100% cheio, processo travado antes de logar ou serviço morto — confirmar timestamps mais recentes.',
      'Logs Clássicos de Infraestrutura: Firewall (Policy Deny, NAT translation, IPS drops, IKE Phase 1/2 errors), Web/Proxy (status 4xx vs 502/503/504 + `upstream_response_time`), Active Directory (4625 logon fail, KDC/Kerberos errors) e Storage/VMware (`vmkernel.log` SCSI sense codes / APD).'
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
    keyTerms: ['Timestamps & Fuso/UTC', 'Severidade & Primeiro Erro', 'Event IDs / journalctl', 'SIEM (Busca Centralizada)', 'HTTP 502 vs 503 vs 504']
  },
  '14.2.3': {
    itemId: '14.2.3',
    highYieldSummary: [
      'Ordem de Volatilidade na Coleta de Evidências (RFC 3227): coletar SEMPRE dos dados MAIS voláteis para os MENOS voláteis antes de reiniciar ou desligar o sistema afetado — (1) Registros de CPU/Memória RAM/Conexões de rede ativas (`ss`, `lsof`, dump RAM), (2) Processos em execução e sistemas temporários, (3) Discos/Snapshots/Logs locais, (4) Logs remotos e mídias de backup.',
      'Capturas de Pacotes (`pcap` — `tcpdump` / Wireshark): coletar tráfego bruto no formato `.pcap`/`.pcapng` especificando interface, filtro BPF preciso (`tcpdump -i eth0 -s 0 -w captura.pcap host 10.1.2.3 and port 443`) para comprovar exatamente flags TCP (SYN sem SYN-ACK vs RST imediato), falhas de handshake TLS, retransmissões ou respostas DNS erradas.',
      'Dumps de Memória / Core Dumps e Heap Dumps: capturam estado exato de memória antes de reiniciar um processo travado ou vazando RAM (`gcore`, `jmap`/`jstack` em JVM, Crash Dump no Windows, `/proc/pid`), permitindo análise posterior sem prolongar a indisponibilidade do serviço.',
      'Snapshots Antes de Ações Destrutivas: em VMs suspeitas de comprometimento ou falha severa antes de aplicar correções/reboots, gerar snapshot de disco (e memória quando aplicável) ou clonar o disco para preservar estado exato para auditoria/RCA.',
      'Cadeia de Custódia e Integridade Forense (Hash): em incidentes de segurança ou auditorias legais, documentar quem coletou, data/hora exata (UTC), método empregado e calcular **hash criptográfico (SHA-256)** imediato de cada arquivo `.pcap`/imagem/log coletado garantindo prova irrefutável de não adulteração.'
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
    keyTerms: ['Ordem de Volatilidade (RFC 3227)', 'Captura PCAP (tcpdump/Wireshark)', 'Dumps & Snapshots', 'Cadeia de Custódia', 'Hash de Integridade (SHA-256)']
  },
  '14.2.4': {
    itemId: '14.2.4',
    highYieldSummary: [
      'Delimitação Precisa do Escopo ("Blast Radius"): primeira pergunta prática do isolamento — o problema afeta **1 usuário/estação**, **1 VLAN/andar**, **1 filial inteira**, **todos os usuários de um serviço** ou **toda a infraestrutura**? Comparar casos positivos vs negativos isola rapidamente em qual segmento a falha reside.',
      'Formulação e Teste Científico de Hipóteses: evitar mudanças aleatórias simultâneas; formular hipótese falsificável ("Se o problema for o DNS interno, consultar direto por IP ou testar `dig @8.8.8.8` funcionará"), executar teste mínimo de baixo impacto, observar resultado e refinar ou descartar a hipótese.',
      'Separação Camada Física vs Camada Lógica: validar primeiro portadora física (link LED, potência óptica dBm em transceivers SFP via `show interfaces transceiver`, erros CRC/input errors incrementando em porta de switch) antes de assumir erro de firewall/aplicação quando há perda intermitente ou queda total de link.',
      'Testes Isolados por Segmento (Loopback / Hop-by-Hop / Substituição Controlada): testar serviço localmente no servidor (`curl http://127.0.0.1:8080`) prova se a aplicação funciona -> testar da mesma sub-rede prova firewall host -> testar atrás do firewall/ADC isola regra/NAT/TLS; troca controlada (cabos, portas, patch cords, nós em standby) elimina dúvida de hardware.',
      'Regra de Ouro: Alterar UMA Variável por Vez: modificar regra de firewall, reiniciar serviço e trocar DNS ao mesmo tempo pode mascarar a causa real ou introduzir um segundo defeito durante o troubleshooting.'
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
    keyTerms: ['Escopo (1 Host vs Sub-rede vs Geral)', 'Teste de Hipótese (1 Variável)', 'Física vs Lógica (CRC/SFP)', 'Teste Localhost vs Rede', 'Isolamento Hop-by-Hop']
  },
  '14.2.5': {
    itemId: '14.2.5',
    highYieldSummary: [
      'Pré-requisito Absoluto: Sincronização Temporal (NTP / `chrony` / W32Time): correlação de eventos entre switches, firewalls, Domain Controllers, servidores Linux e storage falha completamente se os relógios divergirem por segundos/minutos; recomenda-se hierarquia NTP interna redundante sincronizada a fontes Stratum 1/2 confiáveis (ex.: NTP.br).',
      'Construção da Linha do Tempo Unificada (Timeline): alinhar eventos de múltiplas fontes em ordem cronológica estrita (preferencialmente em **UTC**) revela relações de causa e efeito invisíveis isoladamente (ex.: 14:02:10 Storage registra falha de path FC -> 14:02:12 ESXi registra perda de datastore -> 14:02:15 Banco SQL congela -> 14:02:20 Load Balancer marca pool DOWN!).',
      'Mapeamento de Dependências (CMDB / Topologia de Serviços): entender relações verticais e horizontais (DNS -> AD -> Autenticação -> API -> Fila/Mensageria -> Banco -> Storage -> Rede) evita tratar um sintoma secundário distante como se fosse o componente defeituoso.',
      'Correlação em SIEM e Ferramentas de Observabilidade: regras de correlação automática cruzam padrões entre camadas (ex.: alerta de brute force no firewall/AD seguido de logon bem-sucedido de IP estrangeiro + criação de usuário no AD + alerta de execução PowerShell no EDR dentro de janela de 5 minutos).',
      'Supressão de Tempestades de Eventos (Root Event Correlation): em quedas de core ou energia, centenas de alertas disparam em segundos; agrupar eventos derivados pelo ativo raiz economiza horas de triagem errada.'
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
    keyTerms: ['NTP (UDP 123) / Sincronismo', 'Timeline Unificada (UTC)', 'Dependências (Topologia/CMDB)', 'Correlação SIEM', 'Causa vs Efeito em Cascata']
  },
  '14.2.6': {
    itemId: '14.2.6',
    highYieldSummary: [
      'Do Troubleshooting à RCA Formal: uma vez restaurado o serviço, o time reúne todas as evidências preservadas (pcaps, logs correlacionados, dumps, histórico de mudanças) para fechar o ciclo respondendo: *O que aconteceu? Por que aconteceu? Por que o monitoramento não avisou antes? Como impedir que aconteça novamente?*',
      'Elaboração do Documento Post-Mortem: relatório objetivo padronizado contendo resumo executivo, impacto quantificado (usuários/tempo fora/SLA), linha do tempo cronológica minuto a minuto, causa raiz técnica e contribuintes, o que funcionou bem na resposta, e **Plano de Ação Preventiva (CAPA)**.',
      'Ações Corretivas vs Ações Preventivas (Sistêmicas): corrigir apenas o item quebrado ("aumentar o disco que encheu") é ação paliativa local; prevenção real altera sistemas e processos ("configurar logrotate + alerta preditivo 80% + automação de limpeza + atualização na imagem padrão Ansible").',
      'Classificação e Gestão de Riscos Pós-RCA: cada ação do post-mortem recebe responsável nominal, prazo e vínculo com item de backlog/mudança garantindo acompanhamento até conclusão real (evitando "RCA de gaveta").',
      'Retroalimentação da Base de Conhecimento (KEDB / Runbooks): transformar o aprendizado em guias rápidos de diagnóstico futuro para o Service Desk/NOC e adicionar novos checks sintéticos ou triggers no Zabbix/Grafana para detectar precocemente o padrão.'
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
    keyTerms: ['Post-Mortem', 'Prevenção de Recorrência', 'Ações Corretivas vs Preventivas', 'Plano de Ação (Dono/Prazo)', 'Retroalimentação KEDB']
  },
  '14.2.7': {
    itemId: '14.2.7',
    highYieldSummary: [
      'Plano de Rollback Prévio (Antes de Aplicar Qualquer Correção): toda alteração corretiva em produção deve possuir procedimento explícito, testado e viável de reversão (`rollback` — ex.: snapshot VM prévio, backup da config do firewall/switch, `git revert`, comando inverso) antes de ser executada, pois mudanças apressadas durante crises frequentemente agravam a falha.',
      'Estratégias Seguras de Recuperação: reiniciar serviços dependentes respeitando ordem hierárquica, ativar failover para nó/site secundário saudável, restaurar configuração íntegra conhecida (Last Known Good) ou restaurar dados a partir de backup imutável validado (PITR em bancos).',
      'Failback Controlado após Estabilização: retornar do ambiente de contingência/DR para o ambiente primário exige planejamento cuidadoso fora de pico (NUNCA de surpresa!) sincronizando deltas gerados durante a contingência para não perder transações ocorridas no site secundário.',
      'Validação Técnica e Funcional Pós-Recuperação (Smoke Testing): restaurar o servidor ligado NÃO encerra o procedimento — validar testes sintéticos ponta a ponta (login de usuário, escrita/leitura em banco, certificados TLS, filas zerando, ausência de erros novos nos logs) e confirmar com representante funcional/negócio.',
      'Monitoramento Intensificado Pós-Incidente (Hypercare): manter acompanhamento próximo das métricas-chave (latência, erros 5xx, CPU, replicação, consumo de memória) nas horas seguintes à recuperação antes de encerrar formalmente o incidente.'
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
    keyTerms: ['Rollback (Plano de Reversão)', 'Failover vs Failback', 'Validação Pós-Recuperação', 'Ordem de Dependência', 'Hypercare / Smoke Test']
  }
};
