import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_9_TO_12: readonly Question[] = Object.freeze([
  // ==================== EIXO 9: 9. Balanceamento de carga. (12 questões) ====================
  {
    id: 'sarah-25',
    editalItemId: '9.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em balanceadores A10 ou HAProxy, avalie as afirmativas sobre SSL Offloading e NAT e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No SSL Offloading, o balanceador termina a sessão TLS poupando CPU do backend e inspecionando HTTP.\n( ) Com Source NAT (SNAT), o cabeçalho X-Forwarded-For preserva o IP real do cliente para a aplicação.\n( ) No modo Direct Server Return (DSR), o tráfego de retorno do servidor sai direto ao cliente sem passar pelo balanceador.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – F – V.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. A10, HAProxy ou equivalentes, VIP, pools, NAT e SSL offloading (Eixo 9). Todas são verdadeiras: SSL Offloading termina TLS no ADC (V), X-Forwarded-For preserva IP com SNAT (V) e no DSR o retorno contorna o balanceador direto para o cliente (V).',
    correctAnalysis:
      'Todas as três afirmativas são verdadeiras, descrevendo fielmente SSL Offloading, cabeçalho X-Forwarded-For em SNAT e o fluxo assimétrico do Direct Server Return (DSR).',
    optionErrors: {
      0: 'Incorreta: a primeira afirmativa é verdadeira (SSL Offloading termina TLS no ADC poupando CPU).',
      1: 'Incorreta: a segunda afirmativa é verdadeira (X-Forwarded-For preserva o IP do cliente quando há SNAT).',
      3: 'Incorreta: a terceira afirmativa é verdadeira (no DSR, o servidor responde diretamente ao cliente sem retornar pelo ADC).'
    }
  },
  {
    id: 'sarah-26',
    editalItemId: '9.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre health checks (sondagens) em balanceadores A10 ou HAProxy, assinale a opção INCORRETA.',
    options: [
      'Sondagem TCP testa apenas se o socket na porta aceita o handshake de três vias.',
      'Sondagem TCP detecta erro lógico HTTP 500 removendo o nó por análise L7.',
      'Health check HTTP (L7) valida status esperado (como 200 OK) ou texto da resposta.',
      'Ao atingir o limite consecutivo de falhas, o ADC marca o nó DOWN e o retira do pool.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. health checks e pools (Eixo 9. Balanceamento de carga). Sondagens TCP (L4) não analisam status HTTP 500; isso requer health check HTTP (L7).',
    correctAnalysis:
      'A afirmação incorreta atribui inspeção L7 ao TCP: o health check TCP (L4) testa apenas abertura de porta via handshake SYN/SYN-ACK/ACK, mantendo UP uma aplicação retornando HTTP 500.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): sondagem TCP testa conectividade na porta de camada 4.',
      2: 'Incorreta (afirmação verdadeira): health check HTTP valida códigos de status e corpo de resposta.',
      3: 'Incorreta (afirmação verdadeira): ao atingir o limite de falhas, o servidor sai da rotação do pool.'
    }
  },
  {
    id: 'sarah-27',
    editalItemId: '9.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma aplicação legada mantém a sessão autenticada apenas na RAM local de cada servidor. Como evitar deslogamento no balanceador?',
    options: [
      'Aplicar Round Robin puro sem afinidade entre servidores.',
      'Alternar o endereço IP do VIP em VRRP ativo-ativo a cada pacote.',
      'Mudar o health check de HTTP GET para ICMP ping de 1 segundo.',
      'Configurar persistência de sessão (sticky session por cookie ou IP).'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2. Balanceamento de carga, failover e replicação de estado e Item 2. persistência (Eixo 9). Sticky sessions direcionam requisições subsequentes do mesmo cliente ao mesmo nó do pool.',
    correctAnalysis:
      'Quando o estado da sessão reside apenas na memória local do backend, a persistência de sessão (cookie de afinidade ou IP de origem) garante que o cliente permaneça no mesmo servidor.',
    optionErrors: {
      0: 'Incorreta: Round Robin puro distribuirá cada requisição a um servidor distinto, quebrando a sessão.',
      1: 'Incorreta: alternar IP do VIP por pacote quebra conexões TCP e não resolve afinidade de sessão.',
      2: 'Incorreta: ping ICMP apenas testa conectividade básica e não mantém afinidade de aplicação.'
    }
  },
  {
    id: 'sarah-9-04',
    editalItemId: '9.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na entrega de aplicações web e balanceamento de carga, relacione a coluna da esquerda com a da direita.\n\nColuna da Esquerda:\n(I) Proxy Reverso\n(II) VIP (Virtual Server)\n(III) Pool (Service Group)\n(IV) Sticky Session\n(V) Least Connections\n\nColuna da Direita:\n(A) Conjunto lógico de servidores reais de aplicação que respondem ao tráfego.\n(B) Envia novas conexões ao servidor do pool com menor número de sessões ativas.\n(C) Endereço IP e porta virtuais expostos no ADC onde clientes conectam.\n(D) Vincula sessões subsequentes do navegador ao mesmo nó por cookie HTTP.\n(E) Recebe tráfego na borda ocultando backends, fazendo cache e terminação TLS.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-C, III-A, IV-D, V-B.',
      'I-C, II-E, III-A, IV-D, V-B.',
      'I-E, II-A, III-C, IV-B, V-D.',
      'I-E, II-C, III-D, IV-A, V-B.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Servidores de aplicação e Item 2. A10/HAProxy, VIP, pools e persistência (Eixo 9). Proxy Reverso (E), VIP (C), Pool (A), Cookie Insert (D) e Least Connections (B).',
    correctAnalysis:
      'Associação exata: (I) Proxy Reverso -> E; (II) VIP -> C; (III) Pool -> A; (IV) Sticky Session -> D; (V) Least Connections -> B.',
    optionErrors: {
      1: 'Incorreta: inverte Proxy Reverso com VIP.',
      2: 'Incorreta: inverte VIP/Pool e Sticky Session/Least Connections.',
      3: 'Incorreta: troca as definições de Pool e Sticky Session.'
    }
  },
  {
    id: 'sarah-9-05',
    editalItemId: '9.1.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre alta disponibilidade e escalabilidade em balanceadores e servidores, considere as afirmativas:\n\nI. Scale-out (horizontal) adiciona novas instâncias paralelas ao pool para distribuir a carga.\nII. Scale-up (vertical) consiste em adicionar novas instâncias paralelas ao pool do balanceador.\nIII. No VRRP ativo-passivo, o mesmo VIP responde ao mesmo tempo pelos dois nós sem eleição de Master.\nIV. Dois ADCs em VRRP ativo-passivo compartilham um VIP flutuante e estado sincronizado para evitar SPOF.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I e IV estão corretas.',
      'Somente II e III estão corretas.',
      'Somente I, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 9.1.3. 1.3. Topologias de alta disponibilidade e escalabilidade.. I verdadeira; II falsa: adicionar instâncias é scale-out (horizontal); scale-up amplia recursos da mesma instância; III falsa: no VRRP ativo-passivo apenas o Master responde pelo VIP; IV verdadeira.',
    correctAnalysis:
      'Gabarito: Somente I e IV estão corretas. Verdadeira(s): I, IV. II é falsa porque adicionar instâncias é scale-out (horizontal); scale-up amplia recursos da mesma instância. III é falsa porque no VRRP ativo-passivo apenas o Master responde pelo VIP.',
    optionErrors: {
      0: 'Incorreta: a afirmativa II é falsa, pois adicionar instâncias é scale-out (horizontal); scale-up amplia recursos da mesma instância; a afirmativa IV é verdadeira.',
      2: 'Incorreta: a afirmativa I é verdadeira; a afirmativa II é falsa, pois adicionar instâncias é scale-out (horizontal); scale-up amplia recursos da mesma instância; a afirmativa III é falsa, pois no VRRP ativo-passivo apenas o Master responde pelo VIP; a afirmativa IV é verdadeira.',
      3: 'Incorreta: a afirmativa III é falsa, pois no VRRP ativo-passivo apenas o Master responde pelo VIP.'
    }
  },
  {
    id: 'sarah-9-06',
    editalItemId: '9.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em qual cenário de balanceamento no A10/HAProxy o modo L7 (HTTP) é tecnicamente indispensável frente ao modo L4?',
    options: [
      'Encaminhar tráfego SSH na porta 22 sem ler conteúdo.',
      'Implementar Direct Server Return (DSR) sem ler HTTP.',
      'Rotear por caminho de URL (/api vs /static) ou Host.',
      'Encaminhar pacotes UDP apenas por hash de porta L4.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. A10, HAProxy ou equivalentes (Eixo 9). Roteamento por URL/Host/Cookie requer compreensão do protocolo HTTP na Camada 7 (mode http no HAProxy).',
    correctAnalysis:
      'No modo L7 (HTTP), o ADC/HAProxy termina a conexão TCP, lê cabeçalhos HTTP, URI e cookies, permitindo roteamento baseado em conteúdo (content switching) para pools distintos.',
    optionErrors: {
      0: 'Incorreta: encaminhar SSH na porta 22 sem inspeção HTTP usa modo L4 (TCP).',
      1: 'Incorreta: Direct Server Return (DSR) opera tipicamente em L4 sem terminar nem reescrever payloads L7.',
      3: 'Incorreta: encaminhamento por hash de porta UDP ocorre em Camada 4 sem inspeção de aplicação L7.'
    }
  },
  {
    id: 'sarah-9-07',
    editalItemId: '9.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual relação funcional existe entre VIP (Virtual Server), Pool e os nós de backend em um balanceador?',
    options: [
      'O VIP é o IP exclusivo do banco, e o Pool guarda os certificados TLS.',
      'Cada servidor do Pool usa o IP do VIP direto na Ethernet sem NAT/DSR.',
      'Cada Pool comporta no máximo um servidor físico ativo por VIP.',
      'O VIP recebe o acesso publicado e distribui aos nós saudáveis do Pool.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. VIP e pools (Eixo 9). O VIP representa o ponto de entrada lógico publicado no DNS; o Pool agrupa os membros reais de backend.',
    correctAnalysis:
      'Os clientes apontam o DNS para o VIP (Virtual Server) no balanceador, que avalia disponibilidade via health checks e distribui as conexões entre os servidores reais do Pool.',
    optionErrors: {
      0: 'Incorreta: o VIP é o IP frontal publicado no balanceador, não um IP interno exclusivo de banco.',
      1: 'Incorreta: duplicar o mesmo IP em múltiplas interfaces da VLAN sem loopback DSR causaria conflito ARP.',
      2: 'Incorreta: o Pool existe justamente para agrupar múltiplos nós de backend.'
    }
  },
  {
    id: 'sarah-9-08',
    editalItemId: '9.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Servidores heterogêneos recebem requisições de 50 ms e relatórios de 40 s. Qual algoritmo evita sobrecarga nos nós ocupados?',
    options: [
      'Weighted Least Connections (Menor Conexões Ponderado).',
      'Round Robin simples em rodízio fixo sem pesos.',
      'Source IP Hash estático ignorando conexões abertas.',
      'Hash de porta L4 sem medir carga ativa ou pesos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2 e Item 2. pools / weight (Eixo 9). Weighted Least Connections combina contagem ativa de conexões com o peso (weight) proporcional à capacidade de cada servidor.',
    correctAnalysis:
      'Com transações de duração muito variável e hardware heterogêneo, Weighted Least Connections envia novas conexões ao nó com menor razão entre sessões ativas e peso.',
    optionErrors: {
      1: 'Incorreta: Round Robin simples distribui em rodízio fixo ignorando conexões longas e pesos.',
      2: 'Incorreta: Source IP Hash ignora quantas transações longas estão abertas e a capacidade distinta.',
      3: 'Incorreta: hash L4 distribui fluxos deterministicamente sem avaliar sessões ativas nem capacidade.'
    }
  },
  {
    id: 'sarah-9-09',
    editalItemId: '9.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Avancada',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Clientes e servidores do pool estão na mesma VLAN e o gateway padrão não é o balanceador. Por que falha sem SNAT?',
    options: [
      'O balanceador bloqueia pacotes ICMP impedindo ARP do gateway.',
      'O VRRP desativa o VIP por duplicidade de MAC na tabela CAM.',
      'O servidor responde direto ao cliente, que descarta o SYN-ACK do IP real.',
      'Os servidores exigem SSL Offloading L7 para responder na VLAN.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. NAT (SNAT, DSR) (Eixo 9). Sem SNAT ou roteamento via ADC, ocorre tráfego assimétrico: o cliente espera resposta do VIP, mas recebe retorno direto do IP real do servidor.',
    correctAnalysis:
      'Na ausência de SNAT (quando os backends respondem direto ao IP do cliente na mesma VLAN), a pilha TCP do cliente descarta o SYN-ACK por vir do IP real do backend em vez do VIP solicitado.',
    optionErrors: {
      0: 'Incorreta: a falha decorre da assimetria do fluxo de retorno TCP, não de bloqueio ICMP sobre ARP.',
      1: 'Incorreta: VRRP elege o VIP entre os ADCs e não é derrubado pela ausência de SNAT.',
      3: 'Incorreta: o problema ocorre no roteamento de retorno em camada 3/4, mesmo sem TLS.'
    }
  },
  {
    id: 'sarah-9-10',
    editalItemId: '9.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Milhares de usuários acessam atrás de um único NAT corporativo. Qual persistência distribui melhor a carga entre backends?',
    options: [
      'Source IP /24 diferenciando sessões pelo MAC do cliente.',
      'Cookie Insert L7 distinguindo cada sessão HTTP individual.',
      'SSL Session ID sem terminação TLS nem leitura HTTP.',
      'Round Robin sem afinidade para sessões em RAM local.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. persistência (Eixo 9). Usuários atrás de NAT/CGNAT compartilham o mesmo IP de origem; persistência por cookie L7 evita desbalanceamento.',
    correctAnalysis:
      'Persistência por Source IP concentra todos os usuários do mesmo NAT em um único servidor; Cookie Insert L7 identifica cada navegador individualmente, mantendo distribuição uniforme.',
    optionErrors: {
      0: 'Incorreta: endereços MAC não atravessam roteadores L3 nem distinguem clientes atrás de NAT.',
      2: 'Incorreta: SSL Session ID muda com TLS 1.3 tickets e é menos preciso que Cookie Insert L7.',
      3: 'Incorreta: Round Robin sem persistência quebra sessões autenticadas armazenadas apenas em RAM local.'
    }
  },
  {
    id: 'sarah-9-11',
    editalItemId: '9.1.3',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre alta disponibilidade entre balanceadores de carga e failover de VIPs, assinale a afirmação INCORRETA.',
    options: [
      'Sem sincronização de estado (state sync), o nó backup assume todas as sessões TLS ativas sem queda.',
      'O protocolo VRRP utiliza anúncios periódicos do nó Master para detectar indisponibilidade e assumir o VIP.',
      'Após assumir o VIP flutuante, o novo Master envia Gratuitous ARP para atualizar os switches da VLAN.',
      'Configurar par redundante de ADCs elimina ponto único de falha (SPOF) na camada de entrada da aplicação.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2 e 1.3. Failover e replicação de estado (Eixo 9). Sem State Sync das tabelas de conexão/persistência entre os ADCs, o backup assume o VIP sem conhecer sessões ativas, exigindo reconexão.',
    correctAnalysis:
      'A afirmação incorreta diz que sem state sync as sessões ativas continuam transparentes: justamente sem sincronizar a tabela de estados, o backup descarta pacotes de sessões abertas anteriormente.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): VRRP monitora heartbeats/advertisements entre Master e Backup.',
      2: 'Incorreta (afirmação verdadeira): GARP atualiza a tabela MAC/CAM dos switches ao migrar o VIP.',
      3: 'Incorreta (afirmação verdadeira): cluster redundante de ADCs remove o SPOF da camada de balanceamento.'
    }
  },
  {
    id: 'sarah-9-12',
    editalItemId: '9.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre balanceamento L7, cabeçalhos e terminação TLS, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A terminação TLS no ADC permite centralizar a gestão de certificados e aplicar regras baseadas em URI.\n( ) O algoritmo Least Connections escolhe o backend por hash do IP de origem do cliente.\n( ) O cabeçalho HTTP Host ou X-Forwarded-For ajuda o backend a identificar o domínio e o cliente originais.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – F – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 9.2.7. SSL offloading. (1) verdadeira; (2) falsa: o Least Connections escolhe o backend com menos conexões ativas; hash de IP é outro método; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: V – F – V. Verdadeira(s): (1), (3). (2) é falsa porque o Least Connections escolhe o backend com menos conexões ativas; hash de IP é outro método.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (2) é falsa, pois o Least Connections escolhe o backend com menos conexões ativas; hash de IP é outro método.',
      1: 'Incorreta: a afirmativa (1) é verdadeira.',
      2: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },

  // ==================== EIXO 10: 10. Monitoramento. (12 questões) ====================
  {
    id: 'sarah-28',
    editalItemId: '10.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No gerenciamento de redes via arquitetura SNMP, relacione os elementos à esquerda com suas descrições à direita.\n\nColuna da Esquerda:\n(I) SNMP GET / GETBULK\n(II) SNMP TRAP\n(III) SNMP INFORM\n(IV) MIB e SMI\n(V) SNMPv3 authPriv\n\nColuna da Direita:\n(A) Notificação assíncrona em UDP 162 que exige confirmação (ACK).\n(B) Nível de segurança com autenticação (SHA) e criptografia (AES).\n(C) Base hierárquica de objetos gerenciáveis e notação formal de OIDs.\n(D) Notificação assíncrona não confirmada em UDP 162.\n(E) Requisição do gerente consultando variáveis no agente em UDP 161.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-A, III-D, IV-C, V-B.',
      'I-D, II-E, III-A, IV-C, V-B.',
      'I-E, II-D, III-C, IV-A, V-B.',
      'I-E, II-D, III-A, IV-C, V-B.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Gerenciamento de redes TCP/IP (arquitetura de gerenciamento, SMI, SNMP e MIB) (Eixo 10). GET/GETBULK em UDP 161 (E), TRAP não confirmado (D), INFORM com ACK (A), MIB/SMI (C), authPriv (B).',
    correctAnalysis:
      'Associação exata: (I) GET/GETBULK -> consulta UDP 161 (E); (II) TRAP -> alerta sem ACK UDP 162 (D); (III) INFORM -> alerta com ACK UDP 162 (A); (IV) MIB/SMI -> estrutura/notação de objetos (C); (V) authPriv -> autenticação + criptografia (B).',
    optionErrors: {
      0: 'Incorreta: inverte TRAP (não confirmado) com INFORM (com ACK).',
      1: 'Incorreta: atribui consulta UDP 161 ao TRAP e notificação ao GET/GETBULK.',
      2: 'Incorreta: troca as definições de INFORM e MIB/SMI.'
    }
  },
  {
    id: 'sarah-29',
    editalItemId: '10.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Analise a definição dos três pilares da observabilidade em ambientes distribuídos:\n\n"Em observabilidade, ________ são medições numéricas em séries temporais; ________ registram eventos discretos com timestamp; e ________ acompanham o percurso completo de uma requisição entre serviços."\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    options: [
      'Métricas; Logs; Traces.',
      'Logs; Métricas; Traces.',
      'Traces; Métricas; Syslogs.',
      'SNMP; WMI; MIBs.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2. Observabilidade (monitoramento, logs e rastreamento) (Eixo 10). Os três pilares clássicos são Métricas (séries temporais), Logs (eventos discretos) e Traces (rastreamento distribuído).',
    correctAnalysis:
      'Métricas medem grandezas numéricas ao longo do tempo, Logs gravam registros discretos de eventos com carimbo temporal e Traces correlacionam toda a jornada de uma transação.',
    optionErrors: {
      1: 'Incorreta: inverte a ordem entre Logs (eventos discretos) e Métricas (séries temporais).',
      2: 'Incorreta: inverte Traces com séries temporais numéricas.',
      3: 'Incorreta: SNMP, WMI e MIBs são protocolos/estruturas de coleta, não os três pilares da observabilidade.'
    }
  },
  {
    id: 'sarah-30',
    editalItemId: '10.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'O firewall bloqueia conexões de entrada do Zabbix Server para os servidores internos. Qual modo do Zabbix Agent deve ser usado?',
    options: [
      'Agente passivo aguardando conexão do Server na porta 10050.',
      'Agente passivo respondendo apenas na porta TCP 10051 local.',
      'Agente ativo abrindo conexão ao Server/Proxy na porta TCP 10051.',
      'Polling WMI/SNMPv3 reverso iniciado do Zabbix Server em 161.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Zabbix/Grafana e agentes (Eixo 10. Monitoramento). No modo ativo (Active Checks), o agente conecta-se ao Server/Proxy na porta TCP 10051, contornando bloqueios de entrada nos hosts.',
    correctAnalysis:
      'Em checagens ativas, o próprio Zabbix Agent abre conexão de saída para o Zabbix Server/Proxy (TCP 10051) para solicitar a lista de itens e enviar os valores coletados.',
    optionErrors: {
      0: 'Incorreta: no modo passivo é o Server quem abre conexão na porta 10050 do host, o que o firewall bloqueia.',
      1: 'Incorreta: o modo passivo escuta na porta 10050 do agente e também seria bloqueado na entrada.',
      3: 'Incorreta: polling SNMP/WMI também exige conexão iniciada do servidor para o host monitorado.'
    }
  },
  {
    id: 'sarah-10-04',
    editalItemId: '10.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um servidor dispara falsos alertas toda segunda às 09h devido ao pico comercial legítimo. Qual prática corrige os limiares?',
    options: [
      'Fixar thresholds arbitrários de 50% de CPU ignorando histórico.',
      'Construir baseline de desempenho sobre ciclos sazonais normais.',
      'Suspender a coleta de métricas nos horários de pico comercial.',
      'Desabilitar notificações médias e manter só alertas de queda.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Detecção de problemas e otimização de desempenho (Eixo 10). Baseline histórico permite distinguir sazonalidade legítima de anomalias reais.',
    correctAnalysis:
      'O estabelecimento de baseline compara o comportamento atual com o histórico sazonal equivalente, distinguindo picos normais de degradações reais e reduzindo falsos positivos.',
    optionErrors: {
      0: 'Incorreta: limiares fixos sem referência de baseline geram enxurrada de falsos positivos.',
      2: 'Incorreta: suspender coleta justamente no horário de pico impede diagnosticar incidentes reais.',
      3: 'Incorreta: ocultar severidades médias não calibra os limiares da trigger e deixa degradações sem visibilidade.'
    }
  },
  {
    id: 'sarah-10-05',
    editalItemId: '10.2.1',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre Zabbix e Grafana em topologias distribuídas com filiais, considere as afirmativas:\n\nI. O Zabbix Proxy da filial envia alertas e notificações diretamente aos usuários, sem depender do Zabbix Server.\nII. O Zabbix Agent ativo abre conexão de saída para o Server/Proxy na porta TCP 10051.\nIII. O Grafana atua como camada de visualização conectada a fontes de dados (como o Zabbix).\nIV. O Zabbix Agent em modo ativo conecta-se ao Server/Proxy na porta TCP 10050.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I e II estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente II e III estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 10.2.1. PRTG, Zabbix/Grafana ou ferramentas equivalentes. I falsa: o Proxy só coleta e repassa dados; alertas e notificações são processados pelo Zabbix Server; II verdadeira; III verdadeira; IV falsa: no modo ativo o agente conecta-se à porta TCP 10051; a 10050 é usada no modo passivo.',
    correctAnalysis:
      'Gabarito: Somente II e III estão corretas. Verdadeira(s): II, III. I é falsa porque o Proxy só coleta e repassa dados; alertas e notificações são processados pelo Zabbix Server. IV é falsa porque no modo ativo o agente conecta-se à porta TCP 10051; a 10050 é usada no modo passivo.',
    optionErrors: {
      0: 'Incorreta: a afirmativa I é falsa, pois o Proxy só coleta e repassa dados; alertas e notificações são processados pelo Zabbix Server; a afirmativa III é verdadeira.',
      1: 'Incorreta: a afirmativa I é falsa, pois o Proxy só coleta e repassa dados; alertas e notificações são processados pelo Zabbix Server.',
      2: 'Incorreta: a afirmativa IV é falsa, pois no modo ativo o agente conecta-se à porta TCP 10051; a 10050 é usada no modo passivo.'
    }
  },
  {
    id: 'sarah-10-06',
    editalItemId: '10.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual interface nativa do Windows Server permite ao PRTG ou Zabbix consultar PerfMon e serviços sem instalar agente?',
    options: [
      'WMI (Windows Management Instrumentation) ou WinRM.',
      'SNMP Trap em UDP 514 consultando o Event Viewer.',
      'Protocolo LLDP-MED operando na camada 2 do switch.',
      'Syslog RFC 5425 na porta 6514 lendo objetos CIM.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. WMI (Eixo 10. Monitoramento). WMI/WinRM expõe classes CIM/PerfMon, serviços e logs de eventos nativamente no Windows.',
    correctAnalysis:
      'WMI (transportado via DCOM/RPC ou WinRM 5985/5986) permite consultar remotamente contadores PerfMon, estado de serviços Windows e eventos sem instalar agente.',
    optionErrors: {
      1: 'Incorreta: porta 514 é Syslog (não SNMP Trap 162), e não consulta contadores PerfMon por polling.',
      2: 'Incorreta: LLDP-MED é protocolo de descoberta L2 usado para Voice VLAN e PoE.',
      3: 'Incorreta: Syslog envia logs em push, não consulta classes CIM/PerfMon sob demanda como WMI.'
    }
  },
  {
    id: 'sarah-10-07',
    editalItemId: '10.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito do protocolo Syslog (RFC 5424 / RFC 5425), assinale a afirmação INCORRETA.',
    options: [
      'A escala numérica de severidade vai de 0 (Emergency) até 7 (Debug).',
      'O transporte clássico utiliza a porta 514 (UDP ou TCP) sem criptografia.',
      'Quanto maior o número da severidade (como 7 frente a 2), mais crítico o erro.',
      'O transporte seguro de Syslog sobre TLS utiliza a porta padrão TCP 6514.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. syslog (Eixo 10. Monitoramento). Na escala Syslog (0–7), 0 é Emergency (mais grave) e 7 é Debug (menos grave); portanto menor número significa maior criticidade.',
    correctAnalysis:
      'A afirmação incorreta inverte a escala Syslog: valores numéricos menores indicam eventos mais críticos (0 Emergency, 1 Alert, 2 Critical), sendo 7 apenas Debug.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): a escala Syslog define exatamente 0=Emergency até 7=Debug.',
      1: 'Incorreta (afirmação verdadeira): UDP/TCP 514 é a porta padrão histórica em texto claro.',
      3: 'Incorreta (afirmação verdadeira): RFC 5425 padroniza Syslog sobre TLS na porta TCP 6514.'
    }
  },
  {
    id: 'sarah-10-08',
    editalItemId: '10.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Uma trigger no Zabbix oscila entre OK e PROBLEM (flapping) com CPU entre 89% e 91% ao redor do limite de 90%. Como estabilizar?',
    options: [
      'Reduzir a coleta para 1 s usando função last(#1) sem janela.',
      'Aplicar histerese (limiares distintos) e avaliação por janela.',
      'Aumentar o timeout do Zabbix Agent para 30 segundos na trigger.',
      'Mudar a severidade para Information e silenciar notificações.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. alertas (Eixo 10. Monitoramento). Histerese e janelas temporais evitam flapping e reduzem fadiga de alertas.',
    correctAnalysis:
      'A histerese separa a condição de abertura (ex.: média 5 min > 90%) da condição de fechamento (ex.: < 80%), estabilizando o estado contra oscilações marginais (flapping).',
    optionErrors: {
      0: 'Incorreta: reduzir intervalo para 1 segundo sem histerese agrava ainda mais o flapping.',
      2: 'Incorreta: aumentar timeout de coleta não resolve oscilação ao redor de um único limiar.',
      3: 'Incorreta: silenciar alertas deixa a operação cega e não corrige a instabilidade da trigger.'
    }
  },
  {
    id: 'sarah-10-09',
    editalItemId: '10.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um portal tem SLA mensal de 99,9% em 30 dias (43.200 minutos) e caiu por 2 horas seguidas. O SLA foi cumprido?',
    options: [
      'Sim, pois 99,9% tolera até 7 horas e 12 minutos no mês.',
      'Sim, pois 2 horas equivalem a apenas 0,05% do mês.',
      'Não, pois 99,9% em 30 dias permite apenas ~4,32 minutos.',
      'Não, pois 99,9% permite ~43,2 minutos e caiu 120 minutos.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. disponibilidade (Eixo 10. Monitoramento). 0,1% de 43.200 minutos (30 dias) = 43,2 minutos máximos de downtime permitido.',
    correctAnalysis:
      'Disponibilidade de 99,9% admite apenas 0,1% de parada (43,2 minutos em 30 dias); 2 horas (120 minutos) equivalem a ~99,72%, violando o SLA contratado.',
    optionErrors: {
      0: 'Incorreta: ~7h12min corresponde a 99% de disponibilidade mensal, não a 99,9%.',
      1: 'Incorreta: 120 / 43.200 = 0,278%, resultando em ~99,72% (abaixo de 99,9%).',
      2: 'Incorreta: ~4,32 minutos mensais corresponde a 99,99% (quatro noves), não 99,9%.'
    }
  },
  {
    id: 'sarah-10-10',
    editalItemId: '10.2.9',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre Capacity Planning e séries temporais no monitoramento, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A função timeleft() do Zabbix calcula a projeção usando apenas o último valor coletado, sem histórico.\n( ) Séries temporais históricas ajudam a planejar compras e upgrades antes de paradas críticas.\n( ) Retenções históricas longas (Trends) permitem identificar tendências sazonais e picos periódicos de capacidade.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 0,
    explanation:
      'Item 10.2.9. capacidade. (1) falsa: timeleft() usa uma janela de histórico para projetar a tendência; (2) verdadeira; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – V – V. Verdadeira(s): (2), (3). (1) é falsa porque timeleft() usa uma janela de histórico para projetar a tendência.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois timeleft() usa uma janela de histórico para projetar a tendência.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-10-11',
    editalItemId: '10.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre portas de coleta centralizada de logs e SNMP, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O Syslog clássico sobre UDP 514 garante a entrega com confirmação de recebimento.\n( ) O transporte de Syslog sobre TLS na porta TCP 6514 é definido pela RFC 5424.\n( ) O gerente SNMP consulta variáveis do agente na porta UDP 162 e recebe traps na porta UDP 161.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – F – F.',
      'F – V – F.',
      'F – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 10.2.5. syslog. (1) falsa: sobre UDP não há confirmação de entrega; (2) falsa: o transporte sobre TLS é definido pela RFC 5425; a RFC 5424 define o formato da mensagem; (3) falsa: o polling SNMP usa a porta UDP 161 e as traps chegam na porta UDP 162.',
    correctAnalysis:
      'Gabarito: F – F – F. Todas as afirmativas são falsas. (1) é falsa porque sobre UDP não há confirmação de entrega. (2) é falsa porque o transporte sobre TLS é definido pela RFC 5425; a RFC 5424 define o formato da mensagem. (3) é falsa porque o polling SNMP usa a porta UDP 161 e as traps chegam na porta UDP 162.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois sobre UDP não há confirmação de entrega.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois o transporte sobre TLS é definido pela RFC 5425; a RFC 5424 define o formato da mensagem.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o polling SNMP usa a porta UDP 161 e as traps chegam na porta UDP 162.'
    }
  },
  {
    id: 'sarah-10-12',
    editalItemId: '10.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na classificação padrão de níveis de severidade do protocolo Syslog (RFC 5424), assinale a correspondência INCORRETA.',
    options: [
      'Nível 0 — Emergency: sistema inutilizável exigindo ação imediata.',
      'Nível 3 — Error: condição de erro operacional em serviço ou componente.',
      'Nível 7 — Critical: falha de hardware crítica superior ao nível 1 (Alert).',
      'Nível 6 — Informational: mensagens normais de acompanhamento operacional.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. syslog (Eixo 10). Os 8 níveis oficiais RFC 5424 são: 0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug.',
    correctAnalysis:
      'A correspondência incorreta coloca Critical no nível 7: na RFC 5424, Critical é o nível 2 (menos grave apenas que 0 Emergency e 1 Alert), enquanto o nível 7 corresponde a Debug.',
    optionErrors: {
      0: 'Incorreta (correspondência exata): 0 corresponde de fato a Emergency.',
      1: 'Incorreta (correspondência exata): 3 corresponde de fato a Error.',
      3: 'Incorreta (correspondência exata): 6 corresponde de fato a Informational.'
    }
  },

  // ==================== EIXO 11: 11. LINUX. (12 questões) ====================
  {
    id: 'sarah-31',
    editalItemId: '11.2.4',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No gerenciamento de serviços Linux com systemd, considere as afirmativas:\n\nI. Após editar um unit file em /etc/systemd/system/, deve-se rodar "systemctl daemon-reload".\nII. O comando systemctl disable impede inclusive o início manual do serviço.\nIII. O comando "systemctl enable <servico>" configura a inicialização automática do serviço no boot.\nIV. O comando "journalctl -u <servico> -n 50" exibe os últimos 50 logs registrados da unidade.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'I, II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 11.2.4. systemd. I verdadeira; II falsa: disable só retira o serviço do boot; quem impede qualquer início é o mask; III verdadeira; IV verdadeira.',
    correctAnalysis:
      'Gabarito: Somente I, III e IV estão corretas. Verdadeira(s): I, III, IV. II é falsa porque disable só retira o serviço do boot; quem impede qualquer início é o mask.',
    optionErrors: {
      0: 'Incorreta: a afirmativa II é falsa, pois disable só retira o serviço do boot; quem impede qualquer início é o mask; a afirmativa IV é verdadeira.',
      2: 'Incorreta: a afirmativa I é verdadeira; a afirmativa II é falsa, pois disable só retira o serviço do boot; quem impede qualquer início é o mask.',
      3: 'Incorreta: a afirmativa II é falsa, pois disable só retira o serviço do boot; quem impede qualquer início é o mask.'
    }
  },
  {
    id: 'sarah-32',
    editalItemId: '11.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Com umask definido como 027 no Linux, quais permissões octais padrão recebem um novo arquivo regular e um novo diretório?',
    options: [
      'Arquivo 750 e diretório 640.',
      'Arquivo 644 e diretório 755.',
      'Arquivo 666 e diretório 750.',
      'Arquivo 640 e diretório 750.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. permissões (Eixo 11. LINUX). Base de arquivo = 666; 666 & ~027 = 640 (rw-r-----). Base de diretório = 777; 777 & ~027 = 750 (rwxr-x---).',
    correctAnalysis:
      'Aplicando a máscara 027 (remove escrita de grupo = 2 e todas de outros = 7), arquivos regulares nascem com 640 e diretórios com 750.',
    optionErrors: {
      0: 'Incorreta: inverte arquivo com diretório (arquivos novos não recebem bit de execução por padrão).',
      1: 'Incorreta: 644 e 755 resultam do umask padrão 022, não 027.',
      2: 'Incorreta: umask 027 remove permissões de grupo/outros, jamais gerando 666.'
    }
  },
  {
    id: 'sarah-33',
    editalItemId: '11.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre contas e arquivos do sistema no Linux, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O arquivo /etc/shadow armazena os hashes das senhas locais e parâmetros de expiração.\n( ) O arquivo /etc/group define os grupos locais do sistema e seus membros secundários.\n( ) O arquivo /etc/shadow tem permissão de leitura para todos os usuários do sistema.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 11.1.3. 1.3. Usuários e grupos.. (1) verdadeira; (2) verdadeira; (3) falsa: o /etc/shadow é legível apenas pelo root (e pelo grupo shadow, conforme a distribuição).',
    correctAnalysis:
      'Gabarito: V – V – F. Verdadeira(s): (1), (2). (3) é falsa porque o /etc/shadow é legível apenas pelo root (e pelo grupo shadow, conforme a distribuição).',
    optionErrors: {
      0: 'Incorreta: a afirmativa (2) é verdadeira.',
      1: 'Incorreta: a afirmativa (1) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o /etc/shadow é legível apenas pelo root (e pelo grupo shadow, conforme a distribuição).'
    }
  },
  {
    id: 'sarah-11-04',
    editalItemId: '11.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após ajustar parâmetros do kernel em /etc/default/grub no Debian/Ubuntu e no RHEL/Rocky, quais comandos regeneram o grub.cfg?',
    options: [
      'update-grub (Debian/Ubuntu) e grub2-mkconfig -o (RHEL/Rocky).',
      'dpkg-reconfigure kernel e systemctl daemon-reload (RHEL).',
      'grub-install --recheck /dev/sda sem regerar o grub.cfg.',
      'echo "quiet" > /proc/cmdline e dnf clean all nas duas distros.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Instalação, configuração e administração Linux (Eixo 11). Família Debian utiliza update-grub; família RHEL utiliza grub2-mkconfig -o /boot/grub2/grub.cfg (ou caminho EFI).',
    correctAnalysis:
      'Alterações em /etc/default/grub só entram em vigor após compilar o arquivo final grub.cfg com update-grub (Debian/Ubuntu) ou grub2-mkconfig (RHEL/Rocky).',
    optionErrors: {
      1: 'Incorreta: daemon-reload recarrega unit files do systemd, sem efeito sobre o bootloader GRUB2.',
      2: 'Incorreta: grub-install reinstala o carregador na MBR/ESP, sem recompilar o grub.cfg a partir de /etc/default/grub.',
      3: 'Incorreta: /proc/cmdline é arquivo virtual somente leitura com os parâmetros do boot atual.'
    }
  },
  {
    id: 'sarah-11-05',
    editalItemId: '11.1.2',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Segundo o padrão FHS (Filesystem Hierarchy Standard), relacione os diretórios à esquerda com sua finalidade à direita.\n\nColuna da Esquerda:\n(I) /etc\n(II) /var\n(III) /dev\n(IV) /proc\n(V) /boot\n\nColuna da Direita:\n(A) Arquivos de dispositivos especiais de bloco e caractere.\n(B) Arquivos estáticos de kernel, initramfs e bootloader (GRUB).\n(C) Sistema de arquivos virtual em memória expondo kernel e processos.\n(D) Dados variáveis em operação, como logs (/var/log), spools e caches.\n(E) Arquivos de configuração do sistema e dos serviços do servidor.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-D, II-E, III-A, IV-C, V-B.',
      'I-E, II-C, III-A, IV-D, V-B.',
      'I-E, II-D, III-A, IV-C, V-B.',
      'I-E, II-D, III-B, IV-C, V-A.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Estrutura de diretórios (Eixo 11. LINUX). FHS: /etc (E), /var (D), /dev (A), /proc (C) e /boot (B).',
    correctAnalysis:
      'Associação exata segundo o FHS: /etc -> configurações (E); /var -> logs/variáveis (D); /dev -> dispositivos (A); /proc -> virtual do kernel/processos (C); /boot -> kernel e bootloader (B).',
    optionErrors: {
      0: 'Incorreta: inverte /etc com /var.',
      1: 'Incorreta: inverte /var com /proc.',
      3: 'Incorreta: inverte /dev com /boot.'
    }
  },
  {
    id: 'sarah-11-06',
    editalItemId: '11.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No endurecimento (hardening) do serviço OpenSSH em produção, todas as práticas são recomendadas, EXCETO:',
    options: [
      'Definir PermitRootLogin no bloqueando login remoto direto de root.',
      'Habilitar PubkeyAuthentication yes e desativar PasswordAuthentication.',
      'Validar sintaxe com "sshd -t" antes de rodar "systemctl reload sshd".',
      'Configurar ~/.ssh/authorized_keys com permissão 777 e manter PermitRootLogin yes.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. SSH (Eixo 11. LINUX). Permissões abertas (777) em ~/.ssh ou authorized_keys violam o StrictModes do OpenSSH, e PermitRootLogin yes mantém risco elevado de brute-force em root.',
    correctAnalysis:
      'A exceção viola segurança e permissões: authorized_keys deve manter permissão restrita (600, e 700 em ~/.ssh) com PermitRootLogin no.',
    optionErrors: {
      0: 'Incorreta (prática recomendada): PermitRootLogin no bloqueia login direto de superusuário pela rede.',
      1: 'Incorreta (prática recomendada): restringir a chaves assimétricas elimina ataques de força bruta.',
      2: 'Incorreta (prática recomendada): sshd -t valida a configuração antes do reload seguro.'
    }
  },
  {
    id: 'sarah-11-07',
    editalItemId: '11.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um arquivo gigante em /var/log foi apagado, mas o espaço não foi liberado porque um daemon ainda o mantém aberto. Como achar o PID?',
    options: [
      'Executar "lsof | grep deleted" identificando o PID com descritor aberto.',
      'Executar "df -h /var/log" listando o PID do usuário proprietário.',
      'Executar "free -m" exibindo arquivos removidos ainda em cache de página.',
      'Executar "ls -la /var/log" consultando a coluna de descritores abertos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. processos (Eixo 11. LINUX). O comando lsof exibe todos os arquivos abertos pelos processos, sinalizando "(deleted)" nos que já foram removidos do diretório mas seguem alocados no kernel.',
    correctAnalysis:
      'Enquanto um processo mantiver o descritor aberto, os blocos do arquivo apagado permanecem ocupados; "lsof | grep deleted" revela o PID para que o serviço seja reiniciado/sinalizado.',
    optionErrors: {
      1: 'Incorreta: df -h exibe uso agregado de sistemas de arquivos, não lista processos ou descritores.',
      2: 'Incorreta: free -m exibe apenas utilização de memória RAM e swap.',
      3: 'Incorreta: ls -la não enxerga arquivos já desvinculados (unlinked) da árvore de diretórios.'
    }
  },
  {
    id: 'sarah-11-08',
    editalItemId: '11.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'O comando df -h mostra 42% de uso em /var, mas criar novos arquivos falha com "No space left on device" e df -i marca 100%. Causa?',
    options: [
      'Fragmentação de blocos XFS excedendo a tabela estática /etc/fstab.',
      'Esgotamento de inodes por excesso de arquivos pequenos na partição.',
      'Saturação do swapfile local impedindo alocação de metadados ext4.',
      'Limite de tamanho máximo de 2 GB por arquivo no sistema ext4.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. filesystem (ext4, xfs, LVM, inode) (Eixo 11. LINUX). Cada arquivo ou diretório consome um inode; muitos arquivos diminutos esgotam os inodes (IUse% = 100% no df -i) antes de acabar os blocos de dados.',
    correctAnalysis:
      'O resultado 100% no comando "df -i" comprova esgotamento da tabela de inodes: mesmo havendo espaço livre em blocos ("df -h"), nenhum arquivo novo pode ser criado.',
    optionErrors: {
      0: 'Incorreta: df -i = 100% indica explicitamente exaustão de inodes, não fragmentação.',
      2: 'Incorreta: swapfile trata de memória virtual, não da alocação de inodes na partição /var.',
      3: 'Incorreta: ext4 suporta arquivos individuais de até 16 TiB, muito acima de 2 GB.'
    }
  },
  {
    id: 'sarah-11-09',
    editalItemId: '11.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na suíte moderna iproute2 do Linux, quais comandos substituem respectivamente ifconfig, route -n e netstat -tulnp?',
    options: [
      'nmcli dev, traceroute -n e lsof -i.',
      'ethtool -S, arp -a e tcpdump -tulnp.',
      'ip link list, netstat -r e tcpdump -nn.',
      'ip addr show, ip route show e ss -tulnp.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. rede (ip addr, ip route, ss, nmcli, iptables/nftables) (Eixo 11. LINUX). O pacote iproute2 (ip/ss) substituiu o legado net-tools.',
    correctAnalysis:
      'Na suíte iproute2, ip addr exibe interfaces/IPs, ip route exibe a tabela de roteamento do kernel e ss -tulnp lista sockets TCP/UDP em escuta com PIDs.',
    optionErrors: {
      0: 'Incorreta: traceroute rastreia saltos até um destino (não exibe tabela local de roteamento).',
      1: 'Incorreta: ethtool exibe parâmetros físicos da NIC, arp exibe L2 e tcpdump não possui flag -tulnp.',
      2: 'Incorreta: netstat pertence ao pacote legado net-tools e tcpdump captura tráfego em vez de listar sockets.'
    }
  },
  {
    id: 'sarah-11-10',
    editalItemId: '11.2.10',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual utilitário nativo do Linux automatiza rotação, compressão e expurgo periódico de arquivos em /var/log?',
    options: [
      'crontab -r limpando automaticamente arquivos antigos.',
      'journalctl --flush comprimindo logs de texto em disco.',
      'logrotate (via /etc/logrotate.conf e /etc/logrotate.d/).',
      'rsyslogd --purge removendo arquivos rotacionados no host.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. logs (/var/log, journald, rsyslog, logrotate) (Eixo 11. LINUX). O logrotate gerencia rotação, compressão e retenção de arquivos de log.',
    correctAnalysis:
      'O logrotate executa políticas diárias, semanais ou por tamanho sobre arquivos em /var/log, comprimindo históricos e evitando lotação do disco.',
    optionErrors: {
      0: 'Incorreta: crontab -r apaga toda a tabela de tarefas agendadas do usuário atual.',
      1: 'Incorreta: journalctl --flush move logs de /run/log/journal para /var/log/journal.',
      3: 'Incorreta: rsyslogd recebe e encaminha mensagens syslog, não substitui o logrotate.'
    }
  },
  {
    id: 'sarah-11-11',
    editalItemId: '11.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre gerenciamento flexível de volumes com LVM no Linux, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No LVM, a hierarquia parte do LV, que agrupa VGs, que por sua vez são divididos em PVs.\n( ) Logical Volumes (LV) criados no VG podem ser expandidos com lvextend e redimensionamento do filesystem.\n( ) Volumes XFS podem ser reduzidos online com o comando xfs_growfs.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 11.2.6. filesystem. (1) falsa: a hierarquia correta é PV → VG → LV; (2) verdadeira; (3) falsa: o XFS não pode ser reduzido; xfs_growfs apenas amplia.',
    correctAnalysis:
      'Gabarito: F – V – F. Verdadeira(s): (2). (1) é falsa porque a hierarquia correta é PV → VG → LV. (3) é falsa porque o XFS não pode ser reduzido; xfs_growfs apenas amplia.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois a hierarquia correta é PV → VG → LV.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o XFS não pode ser reduzido; xfs_growfs apenas amplia.'
    }
  },
  {
    id: 'sarah-11-12',
    editalItemId: '11.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre permissões especiais e sinais de processo no Linux, assinale a afirmação INCORRETA.',
    options: [
      'O Sticky Bit (1xxx, como em /tmp) impede que usuários removam ou renomeiem arquivos de terceiros.',
      'O sinal SIGKILL (9) solicita encerramento gracioso permitindo que o processo limpe conexões e arquivos.',
      'O bit SUID (4xxx) em executáveis faz o processo executar com as permissões efetivas do proprietário.',
      'O sinal SIGTERM (15) pede término limpo ao processo, podendo ser capturado para encerramento ordenado.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. permissões e processos (Eixo 11. LINUX). SIGKILL (9) NÃO pode ser capturado nem ignorado e encerra o processo imediatamente no kernel sem limpeza; o sinal gracioso é SIGTERM (15).',
    correctAnalysis:
      'A afirmação incorreta atribui encerramento gracioso ao SIGKILL (9): apenas SIGTERM (15) permite captura e encerramento ordenado pelo aplicativo.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Sticky Bit em diretórios compartilhados protege arquivos de remoção por terceiros.',
      2: 'Incorreta (afirmação verdadeira): SUID executa o binário com o EUID do dono (ex.: /usr/bin/passwd).',
      3: 'Incorreta (afirmação verdadeira): SIGTERM (15) é o sinal padrão para término limpo e ordenado.'
    }
  },

  // ==================== EIXO 12: 12. Automação. (12 questões) ====================
  {
    id: 'sarah-34',
    editalItemId: '12.1.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre Docker e Kubernetes em infraestrutura, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Containers Docker compartilham o kernel do host, isolando com namespaces e limitando recursos com cgroups.\n( ) A menor unidade implantável no Kubernetes é o container.\n( ) O kubelet roda apenas no Control Plane e é o responsável por gravar o estado do cluster no etcd.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – F – F.',
      'V – F – F.',
      'V – V – F.',
      'V – F – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 12.1.2. 1.2. Noções de DevOps, infraestrutura como código e conteinerização de aplicações (Docker e Kubernetes).. (1) verdadeira; (2) falsa: a menor unidade implantável é o Pod; (3) falsa: o kubelet roda nos nodes; quem grava no etcd é o kube-apiserver.',
    correctAnalysis:
      'Gabarito: V – F – F. Verdadeira(s): (1). (2) é falsa porque a menor unidade implantável é o Pod. (3) é falsa porque o kubelet roda nos nodes; quem grava no etcd é o kube-apiserver.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é verdadeira.',
      2: 'Incorreta: a afirmativa (2) é falsa, pois a menor unidade implantável é o Pod.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois o kubelet roda nos nodes; quem grava no etcd é o kube-apiserver.'
    }
  },
  {
    id: 'sarah-35',
    editalItemId: '12.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em scripts PowerShell, como garantir que erros não terminativos de um cmdlet acionem o bloco catch de tratamento?',
    options: [
      'Usar o parâmetro -ErrorAction SilentlyContinue no cmdlet.',
      'Imprimir a falha com Write-Host antes do bloco try/catch.',
      'Converter a saída com ConvertTo-Csv ignorando exceções.',
      'Usar bloco try/catch passando -ErrorAction Stop ao cmdlet.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. PowerShell e tratamento de erros (Eixo 12. Automação). Por padrão, erros não terminativos em PowerShell não desviam o fluxo para o bloco catch; usar -ErrorAction Stop converte-os em terminativos.',
    correctAnalysis:
      'Blocos try/catch no PowerShell capturam apenas terminating errors; adicionar "-ErrorAction Stop" (ou $ErrorActionPreference = "Stop") força o desvio imediato para o catch.',
    optionErrors: {
      0: 'Incorreta: SilentlyContinue suprime o erro e impede a entrada no bloco catch.',
      1: 'Incorreta: Write-Host apenas escreve texto na tela sem capturar exceções.',
      2: 'Incorreta: ConvertTo-Csv apenas serializa objetos para formato CSV.'
    }
  },
  {
    id: 'sarah-36',
    editalItemId: '12.2.3',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Na integração por APIs REST sobre HTTP, relacione métodos e status à esquerda com sua semântica à direita.\n\nColuna da Esquerda:\n(I) Método GET\n(II) Método POST\n(III) Status 200 / 201\n(IV) Status 401 / 403\n(V) Status 500 / 503\n\nColuna da Direita:\n(A) Falha de autenticação ou autorização (acesso negado).\n(B) Sucesso de processamento (OK) ou criação de recurso (Created).\n(C) Consulta segura e idempotente sem alterar estado no servidor.\n(D) Erro interno no servidor da API ou indisponibilidade do backend.\n(E) Envio de dados para criar recurso ou disparo não idempotente.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-E, III-B, IV-A, V-D.',
      'I-E, II-C, III-B, IV-A, V-D.',
      'I-C, II-E, III-A, IV-B, V-D.',
      'I-C, II-B, III-E, IV-D, V-A.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. APIs REST (Eixo 12. Automação). GET (C), POST (E), 200/201 sucesso (B), 401/403 cliente não autenticado/autorizado (A) e 500/503 erro no servidor (D).',
    correctAnalysis:
      'Associação exata: (I) GET -> C; (II) POST -> E; (III) 200/201 -> B; (IV) 401/403 -> A; (V) 500/503 -> D.',
    optionErrors: {
      1: 'Incorreta: inverte a semântica de GET (leitura idempotente) com POST (criação não idempotente).',
      2: 'Incorreta: troca a faixa de sucesso 2xx pela faixa de erro de autenticação 401/403.',
      3: 'Incorreta: mistura métodos HTTP com faixas de status 4xx/5xx.'
    }
  },
  {
    id: 'sarah-12-04',
    editalItemId: '12.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre códigos de saída (exit codes) em scripts Shell/Bash POSIX, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O exit code 127 indica que o comando existe, mas não possui permissão de execução.\n( ) Em scripts Bash, a variável especial $# armazena o código de retorno (exit code) do último comando executado.\n( ) Em shell scripts POSIX, operadores como && e || encadeiam comandos conforme o exit code retornado.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – V.',
      'F – F – V.',
      'F – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 12.1.1. 1.1. Lógica de programação aplicada a scripts.. (1) falsa: 127 indica comando não encontrado; sem permissão de execução é o 126; (2) falsa: $# guarda o número de argumentos; o código de retorno fica em $?; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – F – V. Verdadeira(s): (3). (1) é falsa porque 127 indica comando não encontrado; sem permissão de execução é o 126. (2) é falsa porque $# guarda o número de argumentos; o código de retorno fica em $?.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois 127 indica comando não encontrado; sem permissão de execução é o 126.',
      1: 'Incorreta: a afirmativa (2) é falsa, pois $# guarda o número de argumentos; o código de retorno fica em $?.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-12-05',
    editalItemId: '12.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual pipeline PowerShell lê "servidores.csv", filtra Ambiente igual a "Producao" e serializa em JSON estruturado?',
    options: [
      'Get-Content servidores.csv | Select-String Producao | ConvertFrom-Json',
      "Import-Csv servidores.csv | Where-Object { $_.Ambiente -eq 'Producao' } | ConvertTo-Json -Depth 4",
      'Import-Csv servidores.csv | Format-Table | ConvertTo-Json -Depth 4',
      "Get-Content servidores.csv | Where-Object { $_ -like '*Producao*' } | Export-Csv prod.json"
    ],
    correctIndex: 1,
    explanation:
      'Item 2. PowerShell (objetos, ConvertTo-Json, Import-Csv) (Eixo 12. Automação). PowerShell trafega objetos estruturados pelo pipe e exige -Depth em ConvertTo-Json para objetos aninhados.',
    correctAnalysis:
      'Import-Csv gera objetos com propriedades das colunas; Where-Object filtra Ambiente; ConvertTo-Json serializa para JSON com profundidade definida.',
    optionErrors: {
      0: 'Incorreta: ConvertFrom-Json faz o caminho inverso (JSON para objeto) em vez de gerar JSON.',
      2: 'Incorreta: Format-Table converte objetos em tokens de formatação de tela, quebrando o ConvertTo-Json.',
      3: 'Incorreta: Get-Content lê strings brutas e Export-Csv gera saída tabular CSV.'
    }
  },
  {
    id: 'sarah-12-06',
    editalItemId: '12.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em Bash, qual comando consulta uma API HTTPS usando a variável $TOKEN em Bearer e extrai .status do array JSON?',
    options: [
      'curl -fsSL -H \'Authorization: Bearer $TOKEN\' https://api.interna/health | grep -o status',
      'wget --spider -H "Authorization: Bearer $TOKEN" https://api.interna/health | awk \'{print $2}\'',
      'curl -fsSL -H "Authorization: Bearer $TOKEN" https://api.interna/health | jq -r \'.[].status\'',
      'Invoke-RestMethod -Uri https://api.interna/health -Method Get | ConvertFrom-Json em Bash'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Bash, APIs REST e JSON (curl, jq) (Eixo 12. Automação). curl realiza chamadas HTTP/HTTPS com headers; jq faz parsing e consulta estruturada em JSON. Importante: em Bash, aspas simples impedem a expansão de variáveis (como $TOKEN), por isso o cabeçalho Authorization deve usar aspas duplas.',
    correctAnalysis:
      'curl -fsSL realiza requisição HTTPS com cabeçalho Authorization Bearer em aspas duplas (expandindo $TOKEN no Bash), enquanto jq -r extrai campos do array JSON sem aspas.',
    optionErrors: {
      0: 'Incorreta: aspas simples impedem a expansão da variável $TOKEN no Bash (enviando texto literal "$TOKEN"), além de grep não fazer parsing seguro de JSON.',
      1: 'Incorreta: wget --spider apenas testa existência via HEAD sem baixar o corpo JSON, e awk não interpreta estruturas JSON.',
      3: 'Incorreta: Invoke-RestMethod e ConvertFrom-Json são cmdlets do PowerShell, não comandos nativos Bash.'
    }
  },
  {
    id: 'sarah-12-07',
    editalItemId: '12.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No crontab do Linux, quando executa exatamente a entrada "30 2 * * 1-5 /usr/local/bin/limpa.sh"?',
    options: [
      'Às 02h30 da manhã, de segunda a sexta-feira.',
      'A cada 30 minutos nas segundas de fevereiro.',
      'No dia 30 de fevereiro, às 02h00 apenas.',
      'A cada 2 h 30 min aos sábados e domingos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. tarefas agendadas (cron, systemd timers, Task Scheduler) (Eixo 12. Automação). Sintaxe cron: minuto(30) hora(2) dia-do-mês(*) mês(*) dia-da-semana(1-5).',
    correctAnalysis:
      'Os cinco campos da linha cron representam minuto (30), hora (2), dia do mês (*), mês (*) e dia da semana (1-5 = segunda a sexta).',
    optionErrors: {
      1: 'Incorreta: 30 no primeiro campo indica minuto exato 30 (não */30), e 2 indica 02h.',
      2: 'Incorreta: os campos dia do mês e mês estão com asterisco (*), não 30 e 2.',
      3: 'Incorreta: 1-5 representa segunda a sexta (sábado e domingo são 6 e 0/7).'
    }
  },
  {
    id: 'sarah-12-08',
    editalItemId: '12.2.7',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre Ansible, PowerShell Remoting (WinRM) e SSH, considere as afirmativas:\n\nI. O Ansible atua de forma agentless sem exigir daemon residente nos servidores gerenciados.\nII. O Ansible usa SSH (TCP 22) em Linux e WinRM (TCP 5985/5986) em hosts Windows.\nIII. O Ansible exige Python instalado nos hosts Windows gerenciados para executar seus módulos.\nIV. Enter-PSSession e Invoke-Command operam por padrão sobre WinRM no Windows.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.',
      'Somente I, II e IV estão corretas.'
    ],
    correctIndex: 3,
    explanation:
      'Item 12.2.7. execução remota. I verdadeira; II verdadeira; III falsa: em hosts Windows o Ansible executa módulos em PowerShell via WinRM, sem exigir Python; IV verdadeira.',
    correctAnalysis:
      'Gabarito: Somente I, II e IV estão corretas. Verdadeira(s): I, II, IV. III é falsa porque em hosts Windows o Ansible executa módulos em PowerShell via WinRM, sem exigir Python.',
    optionErrors: {
      0: 'Incorreta: a afirmativa III é falsa, pois em hosts Windows o Ansible executa módulos em PowerShell via WinRM, sem exigir Python; a afirmativa IV é verdadeira.',
      1: 'Incorreta: a afirmativa II é verdadeira; a afirmativa III é falsa, pois em hosts Windows o Ansible executa módulos em PowerShell via WinRM, sem exigir Python.',
      2: 'Incorreta: a afirmativa I é verdadeira; a afirmativa III é falsa, pois em hosts Windows o Ansible executa módulos em PowerShell via WinRM, sem exigir Python.'
    }
  },
  {
    id: 'sarah-12-09',
    editalItemId: '12.2.4',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre os formatos estruturados JSON e CSV usados em scripts e APIs, assinale a afirmação INCORRETA.',
    options: [
      'A especificação JSON (RFC 8259) aceita livremente comentários "//" em payloads.',
      'JSON suporta números, booleanos, null, arrays e objetos aninhados.',
      'CSV é tabular (plano) e exige atenção a delimitador e encoding UTF-8.',
      'ConvertFrom-Json converte texto JSON em objetos manipuláveis no PowerShell.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. JSON e CSV (Eixo 12. Automação). A especificação RFC 8259 do JSON não admite comentários // ou /* */ em seu formato padrão.',
    correctAnalysis:
      'A afirmação incorreta afirma que JSON aceita comentários "//": o padrão oficial JSON (RFC 8259) proíbe comentários, gerando erro de sintaxe em parsers.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): JSON representa tipos primitivos e estruturas aninhadas nativamente.',
      2: 'Incorreta (afirmação verdadeira): CSV é formato plano sensível a delimitadores e encoding.',
      3: 'Incorreta (afirmação verdadeira): ConvertFrom-Json desserializa texto JSON para objetos no PowerShell.'
    }
  },
  {
    id: 'sarah-12-10',
    editalItemId: '12.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um arquivo CSV exportado no Brasil usa separador ponto e vírgula (;) e acentos em UTF-8. Como importá-lo corretamente no PowerShell?',
    options: [
      'Import-Csv arquivo.csv -Delimiter ":" -Encoding ASCII.',
      'Import-Csv arquivo.csv -Delimiter ";" -Encoding UTF8.',
      'Export-Csv arquivo.csv -Delimiter "," -Encoding UTF7.',
      'ConvertFrom-Json arquivo.csv -Depth 2 -NoTypeInformation.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. CSV e PowerShell (Eixo 12. Automação). Delimitador ";" (padrão regional PT-BR) e -Encoding UTF8 preservam colunas e acentuação corretamente.',
    correctAnalysis:
      'Por padrão, Import-Csv espera vírgula (","); passar -Delimiter ";" e -Encoding UTF8 garante separação correta das colunas e preservação dos acentos.',
    optionErrors: {
      0: 'Incorreta: delimitador ":" juntaria toda a linha em uma coluna e ASCII corromperia acentos.',
      2: 'Incorreta: Export-Csv grava (não importa) arquivos CSV, e vírgula quebraria colunas separadas por ";".',
      3: 'Incorreta: ConvertFrom-Json não lê arquivos CSV tabulares.'
    }
  },
  {
    id: 'sarah-12-11',
    editalItemId: '12.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em scripts Bash de automação, qual diretiva faz o script abortar em erros, variáveis não definidas e falhas em pipes?',
    options: [
      'set +e ignorando códigos diferentes de zero nos comandos.',
      'trap "" EXIT descartando qualquer código de retorno final.',
      'exec > /dev/null 2>&1 ocultando saídas de erro na console.',
      'set -euo pipefail no cabeçalho do script de execução.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Bash e tratamento de erros (Eixo 12. Automação). set -e (errexit), -u (nounset) e -o pipefail abortam o script diante de comando com falha, variável inexistente ou erro em qualquer estágio de um pipeline.',
    correctAnalysis:
      'A declaração "set -euo pipefail" impede que falhas intermediárias ou variáveis vazias passem despercebidas em rotinas críticas de infraestrutura.',
    optionErrors: {
      0: 'Incorreta: set +e desabilita o abortamento automático diante de erros.',
      1: 'Incorreta: ignorar sinais/saídas mascara erros em vez de interromper o script com segurança.',
      2: 'Incorreta: redirecionar saída padrão e de erro apenas oculta mensagens, sem interromper falhas em pipes.'
    }
  },
  {
    id: 'sarah-12-12',
    editalItemId: '12.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre automação e gerenciamento remoto com Ansible e WinRM em ambientes mistos, assinale a afirmação INCORRETA.',
    options: [
      'Playbooks Ansible descrevem estados desejados idempotentes em formato YAML.',
      'WinRM utiliza por padrão a porta TCP 5985 (HTTP) ou TCP 5986 (HTTPS com TLS).',
      'O Ansible exige instalar um agente daemon residente nos hosts gerenciados.',
      'Inventários Ansible agrupam hosts e variáveis para aplicar tarefas em paralelo.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Ansible e execução remota (Eixo 12. Automação). Um dos pilares do Ansible é ser agentless, conectando-se via SSH/Python em Linux ou WinRM/PowerShell em Windows sem agente residente.',
    correctAnalysis:
      'A afirmação incorreta exige um daemon agente residente no host Linux: Ansible é agentless e executa módulos diretamente sobre SSH.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): playbooks são escritos em YAML visando idempotência.',
      1: 'Incorreta (afirmação verdadeira): WinRM opera exatamente nas portas TCP 5985 e 5986.',
      3: 'Incorreta (afirmação verdadeira): arquivos de inventário organizam hosts, grupos e variáveis.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 9 (+3) ====================
  {
    id: 'sarah-9-13',
    editalItemId: '9.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em arquiteturas web corporativas, qual papel desempenha um Proxy Reverso (Nginx, HAProxy ou IIS ARR) posicionado à frente dos servidores de aplicação?',
    options: [
      'Receber requisições externas em nome dos backends, encerrar TLS e ocultar servidores internos.',
      'Controlar acesso de saída de usuários internos em proxy explícito (forward proxy) na estação.',
      'Encaminhar pacotes L3 sem terminar conexões TCP/TLS, operando apenas como gateway estático.',
      'Realizar balanceamento apenas por DNS Round Robin sem health check ativo nem inspeção HTTP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Servidores de aplicação e proxy reverso (Eixo 9). O proxy reverso fica na borda recebendo conexões destinadas aos serviços internos, realizando terminação TLS, roteamento por URL/Host, cache de estáticos, compressão e proteção dos backends.',
    correctAnalysis:
      'Diferentemente do forward proxy (saída de usuários), o proxy reverso atua na entrada dos servidores de aplicação oferecendo terminação TLS, balanceamento e isolamento da topologia interna.',
    optionErrors: {
      1: 'Incorreta: filtrar a navegação de saída de estações internas é papel do forward proxy.',
      2: 'Incorreta: proxy reverso termina conexões TCP/TLS na borda e inspeciona L7, não atua apenas como roteador L3.',
      3: 'Incorreta: DNS Round Robin não atua como proxy reverso HTTP nem realiza terminação TLS/health check ativo.'
    }
  },
  {
    id: 'sarah-9-14',
    editalItemId: '9.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre Virtual IP (VIP) em balanceadores de carga em alta disponibilidade, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) No VRRP, qualquer roteador backup pode ser configurado com prioridade 255 para garantir a eleição.\n( ) Em failover ativo-passivo (VRRP/HA), o nó que assume o VIP anuncia ARP gratuito para atualizar a tabela MAC dos switches.\n( ) Um único balanceador pode publicar múltiplos VIPs e portas lógicas sobre as mesmas interfaces ou VLANs.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – V.',
      'F – V – V.',
      'F – F – V.',
      'F – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 9.2.2. VIP. (1) falsa: a prioridade 255 é reservada ao roteador dono do endereço IP virtual; (2) verdadeira; (3) verdadeira.',
    correctAnalysis:
      'Gabarito: F – V – V. Verdadeira(s): (2), (3). (1) é falsa porque a prioridade 255 é reservada ao roteador dono do endereço IP virtual.',
    optionErrors: {
      0: 'Incorreta: a afirmativa (1) é falsa, pois a prioridade 255 é reservada ao roteador dono do endereço IP virtual.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é verdadeira.'
    }
  },
  {
    id: 'sarah-9-15',
    editalItemId: '9.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre persistência de sessão (sticky session) em balanceadores de carga L4/L7, assinale a afirmação INCORRETA.',
    options: [
      'A persistência garante que requisições sucessivas do mesmo usuário cheguem ao mesmo servidor backend durante a sessão.',
      'Persistência baseada em cookie HTTP inserido pelo ADC permite identificar clientes distintos por trás do mesmo NAT.',
      'Persistência por Source IP distribui uniformemente milhares de usuários vindos atrás de um único IP de NAT corporativo.',
      'Aplicações stateless que armazenam sessões em Redis ou banco compartilhado reduzem a dependência de sticky sessions.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. persistência (Eixo 9. Balanceamento de carga). Quando milhares de usuários saem por um mesmo firewall/proxy com um único IP público (NAT), a persistência por Source IP direciona TODOS eles para o mesmo servidor backend, causando forte desbalanceamento.',
    correctAnalysis:
      'A afirmação incorreta ignora o efeito de NAT/proxy compartilhado na persistência por Source IP, onde todos os usuários com o mesmo IP externo caem no mesmo nó.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): essa é a definição exata de afinidade/persistência de sessão.',
      1: 'Incorreta (afirmação verdadeira): cookies HTTP diferenciam navegadores individuais mesmo compartilhando IP NAT.',
      3: 'Incorreta (afirmação verdadeira): externalizar estado de sessão (Redis/BD) permite failover transparente sem sticky session.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 10 (+6) ====================
  {
    id: 'sarah-10-13',
    editalItemId: '10.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'No gerenciamento via SNMP, quais portas UDP padrão recebem consultas do gerente (polling) e notificações assíncronas (traps), e qual versão garante criptografia?',
    options: [
      'UDP 162 para polling, UDP 161 para traps, com criptografia nativa AES no SNMPv1.',
      'TCP 161 para polling, TCP 162 para traps, com criptografia nativa no SNMPv2c.',
      'UDP 514 para polling, UDP 10050 para traps, com autenticação em texto claro no v3.',
      'UDP 161 para polling, UDP 162 para traps, com autenticação e criptografia no SNMPv3 (authPriv).'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. SNMP (Eixo 10. Monitoramento). Agentes SNMP escutam requisições GET/GETNEXT/GETBULK/SET na porta UDP 161 e enviam TRAP/INFORM ao gerente na porta UDP 162. Apenas o SNMPv3 no modo authPriv oferece autenticação de usuário/integridade e cifragem do tráfego.',
    correctAnalysis:
      'UDP 161 atende polling/consultas ao agente, UDP 162 recebe traps no coletor e o SNMPv3 (authPriv) provê integridade, autenticação e sigilo.',
    optionErrors: {
      0: 'Incorreta: inverte as portas 161/162 e atribui criptografia inexistente ao SNMPv1.',
      1: 'Incorreta: SNMP usa UDP (não TCP padrão) e a versão v2c trafega community strings em texto claro.',
      2: 'Incorreta: 514 pertence ao Syslog e 10050 ao Zabbix Agent passivo.'
    }
  },
  {
    id: 'sarah-10-14',
    editalItemId: '10.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'A respeito das versões e operações do protocolo SNMP (v1, v2c e v3), assinale a afirmação INCORRETA.',
    options: [
      'O SNMPv2c criptografa nativamente os pacotes e a community string usando AES-128 por padrão.',
      'A operação GetBulk presente a partir do SNMPv2c reduz chamadas ao coletar tabelas extensas da MIB.',
      'O SNMPv3 substitui community strings simples por modelo baseado em usuários e grupos (USM).',
      'Diferentemente do Trap, a mensagem Inform exige confirmação de recebimento (ACK) do gerente SNMP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. SNMP (Eixo 10. Monitoramento). Tanto o SNMPv1 quanto o SNMPv2c trafegam community strings (como "public"/"private") e payloads inteiros em texto claro sem nenhuma criptografia nativa.',
    correctAnalysis:
      'A afirmação incorreta atribui cifragem AES-128 ao SNMPv2c; segurança criptográfica (authNoPriv / authPriv) só foi introduzida no SNMPv3.',
    optionErrors: {
      1: 'Incorreta (afirmação verdadeira): GetBulkRequest otimizou a leitura de grandes tabelas como ifTable.',
      2: 'Incorreta (afirmação verdadeira): o SNMPv3 introduziu User-based Security Model (USM) e controle de acesso VACM.',
      3: 'Incorreta (afirmação verdadeira): InformRequest gera resposta de confirmação, enquanto Trap é unidirecional.'
    }
  },
  {
    id: 'sarah-10-15',
    editalItemId: '10.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Ao analisar métricas de um servidor Linux no Grafana/Zabbix, o que indica percentual elevado de CPU em estado %iowait?',
    options: [
      'Excesso de pacotes multicast descartados na interface de gerenciamento SNMP.',
      'Núcleos de CPU ociosos aguardando conclusão de operações lentas de leitura/escrita em disco.',
      'Aplicação consumindo 100% de processamento matemático em espaço de usuário sem acesso a disco.',
      'Falta de espaço na partição /boot impedindo gravação de logs de auditoria.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. métricas (Eixo 10. Monitoramento). %iowait mostra a fração do tempo em que a CPU estava disponível para executar tarefas, mas aguardava requisições pendentes de E/S (disco local, SAN ou NFS) terminarem.',
    correctAnalysis:
      'Alto %iowait sinaliza gargalo no subsistema de armazenamento/I/O atrasando threads que dependem de leitura ou gravação.',
    optionErrors: {
      0: 'Incorreta: erros ou descartes de rede aparecem em contadores de interface/softirq, não em %iowait de disco.',
      2: 'Incorreta: cálculo intensivo em espaço de usuário eleva %user (%us), deixando %iowait baixo.',
      3: 'Incorreta: partição /boot cheia gera erro de escrita no filesystem, não aumento contínuo de espera de I/O.'
    }
  },
  {
    id: 'sarah-10-16',
    editalItemId: '10.2.6',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre coleta e análise de métricas em séries temporais, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Percentis como p95 e p99 evidenciam picos de latência que médias aritméticas simples costumam mascarar.\n( ) O Zabbix distingue dados brutos recentes (History) de agregados consolidados de longo prazo (Trends).\n( ) Reduzir o intervalo de coleta de 5 minutos para 1 segundo em todos os itens reduz o uso de disco e IOPS do banco.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – F.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. métricas (Eixo 10. Monitoramento). p95/p99 expõem caudas de latência (V); History guarda valores brutos e Trends guarda min/avg/max/count por hora (V); aumentar frequência para 1 s multiplica em 300× o volume de escritas NVPS e armazenamento (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque diminuir o intervalo de polling eleva drasticamente os NVPS (novos valores por segundo), IOPS e espaço no banco.',
    optionErrors: {
      0: 'Incorreta: o Zabbix utiliza exatamente History (bruto) e Trends (consolidado horário).',
      1: 'Incorreta: percentis p95 e p99 são superiores à média simples para detectar latências de cauda.',
      3: 'Incorreta: coleta a cada 1 segundo aumenta massivamente o consumo de disco e banco de dados.'
    }
  },
  {
    id: 'sarah-10-17',
    editalItemId: '10.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Quais são os três pilares clássicos da Observabilidade moderna em sistemas distribuídos e infraestrutura?',
    options: [
      'Polling ICMP, checagens de porta TCP e alertas por e-mail.',
      'SNMP Traps, tabelas MIB e inventário estático de OIDs.',
      'Dashboards visuais, thresholds fixos e escalonamento de plantão.',
      'Métricas, Logs de eventos e Traces distribuídos.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2. Observabilidade (Eixo 10. Monitoramento). Os três pilares da telemetria em observabilidade são Métricas (valores numéricos agregados no tempo), Logs (registros imutáveis de eventos discretos) e Traces distribuídos (caminho completo de uma requisição entre serviços).',
    correctAnalysis:
      'Métricas indicam o sintoma quantitativo, Logs detalham eventos ocorridos e Traces mostram onde o tempo foi gasto ao longo das chamadas distribuídas.',
    optionErrors: {
      0: 'Incorreta: são técnicas pontuais de checagem de disponibilidade e notificação, não os três pilares conceituais.',
      1: 'Incorreta: são componentes do protocolo SNMP para gerenciamento de dispositivos.',
      2: 'Incorreta: são recursos de interface e resposta operacional construídos sobre a telemetria coletada.'
    }
  },
  {
    id: 'sarah-10-18',
    editalItemId: '10.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Um portal web responde normalmente ao ICMP ping e à porta TCP 443, mas usuários recebem erro de conexão com o banco ao logar. Qual verificação de monitoramento detecta essa falha proativamente?',
    options: [
      'Monitoramento sintético (Web Scenario / transação HTTP) validando login ou endpoint /health.',
      'Substituição do agente ativo do Zabbix por coleta passiva apenas de uptime SNMP.',
      'Redução do intervalo de coleta ICMP de 60 segundos para 5 segundos no mesmo IP.',
      'Bloqueio de pacotes ICMP Echo Request no firewall para economizar largura de banda.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. disponibilidade (Eixo 10. Monitoramento). Ping ICMP testa apenas camada 3 (pilha IP do SO) e porta TCP testa apenas handshake L4; somente um teste sintético L7 (HTTP/HTTPS simulando requisição real ou checando resposta 200 OK de endpoint de saúde com dependência do banco) garante disponibilidade real do serviço.',
    correctAnalysis:
      'Monitoramento sintético em camada de aplicação simula a jornada ou consulta endpoints funcionais de saúde, detectando falhas invisíveis ao ICMP.',
    optionErrors: {
      1: 'Incorreta: uptime SNMP apenas mostra há quanto tempo o sistema operacional foi ligado.',
      2: 'Incorreta: ICMP mais frequente continua testando somente conectividade de rede L3, sem ver o erro aplicacional.',
      3: 'Incorreta: bloquear ICMP remove visibilidade básica sem monitorar a transação HTTP/banco.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 11 (+7) ====================
  {
    id: 'sarah-11-13',
    editalItemId: '11.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Qual combinação de comandos Linux exibe, respectivamente, o espaço livre dos sistemas de arquivos montados com seu tipo e o consumo de memória RAM/swap legível por humanos?',
    options: [
      'uname -a e ps aux.',
      'df -hT e free -h.',
      'fdisk -l e iostat -xz.',
      'du -sh e lsof -u root.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. administração (Eixo 11. LINUX). O comando df -hT lista pontos de montagem, tipo do filesystem (-T) e tamanhos legíveis (-h); free -h exibe RAM total, usada, livre, buffers/cache, available e swap em formato legível.',
    correctAnalysis:
      'df -hT informa utilização e tipo dos filesystems montados, enquanto free -h apresenta resumo claro da memória física e swap.',
    optionErrors: {
      0: 'Incorreta: uname -a exibe versão do kernel/arquitetura e ps aux lista processos em execução.',
      2: 'Incorreta: fdisk -l lista tabelas de partições brutas e iostat mede I/O de disco, sem exibir espaço livre montado nem resumo de RAM/swap.',
      3: 'Incorreta: du -sh soma tamanho de diretórios e lsof lista arquivos abertos por processos.'
    }
  },
  {
    id: 'sarah-11-14',
    editalItemId: '11.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em um servidor Linux de 16 GB, `free -h` mostra `free = 250 Mi`, `buff/cache = 12 Gi`, `available = 12 Gi` e `Swap used = 0 B`. Qual o diagnóstico correto?',
    options: [
      'O servidor está sofrendo vazamento crítico de memória prestes a acionar o OOM Killer.',
      'O swap está corrompido e precisa ser formatado com mkswap imediatamente.',
      'O sistema está saudável: o kernel usa RAM ociosa como cache de disco liberável sob demanda.',
      'Os 12 GiB em buff/cache estão bloqueados por leak e não podem ser reutilizados por processos.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. administração (Eixo 11. LINUX). O Linux aproveita RAM não utilizada por aplicações como Page Cache/Buffers para acelerar leituras de disco; essa memória permanece contabilizada em "available", pois o kernel a devolve instantaneamente se algum processo precisar.',
    correctAnalysis:
      'Com `available` em 12 GB e zero uso de swap, não há pressão de memória: o campo `free` baixo reflete apenas cache de arquivos saudável.',
    optionErrors: {
      0: 'Incorreta: o OOM Killer só atua quando tanto `free` quanto cache recuperável (`available`) e swap se esgotam.',
      1: 'Incorreta: Swap used = 0 B indica que não houve necessidade de paginação em disco, não corrupção.',
      3: 'Incorreta: Page Cache em Linux é memória recuperável automaticamente sob demanda das aplicações (por isso `available = 12 Gi`).'
    }
  },
  {
    id: 'sarah-11-15',
    editalItemId: '11.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em Bash, qual comando filtra linhas contendo "FAILED" (sem diferenciar maiúsculas), extrai a 1ª coluna e conta ocorrências únicas ordenadas da maior para a menor?',
    options: [
      'grep -c "FAILED" auth.log | cut -d" " -f1 | uniq -d | sort -n.',
      'sed -n "/FAILED/p" auth.log | tr -s " " | wc -l | sort -nr.',
      'find /var/log -name "FAILED" | awk "{print $1}" | sort -u.',
      'grep -i "FAILED" auth.log | awk \'{print $1}\' | sort | uniq -c | sort -nr.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Bash (Eixo 11. LINUX). `grep -i` busca ignorando caixa; `awk \'{print $1}\'` extrai o primeiro campo; `sort` agrupa valores idênticos antes do `uniq -c` contar repetições; e `sort -nr` ordena numericamente do maior para o menor.',
    correctAnalysis:
      'O pipeline `grep -i | awk | sort | uniq -c | sort -nr` executa filtragem case-insensitive, extração da 1ª coluna, contagem agrupada (sort prévio obrigatório para uniq) e ranking decrescente.',
    optionErrors: {
      0: 'Incorreta: grep -c retorna apenas um número total na saída, não as linhas para o cut.',
      1: 'Incorreta: wc -l imprime somente a contagem total de linhas, não o agrupamento por valor da 1ª coluna.',
      2: 'Incorreta: find busca nomes de arquivos no diretório, não conteúdo de linhas dentro do auth.log.'
    }
  },
  {
    id: 'sarah-11-16',
    editalItemId: '11.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre redirecionamentos e pipelines em shell Bash, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O operador `>>` sobrescreve o arquivo destino desde a primeira linha, descartando todo o conteúdo anterior.\n( ) A expressão `2>&1` redireciona o descritor de erro padrão (stderr) para o mesmo destino da saída padrão (stdout).\n( ) O operador 2> redireciona simultaneamente stdout e stderr para o arquivo indicado.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – F.',
      'V – V – F.',
      'F – F – F.',
      'F – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 11.2.3. Bash. (1) falsa: o operador >> anexa ao final do arquivo sem apagar o conteúdo; (2) verdadeira; (3) falsa: 2> redireciona apenas o stderr.',
    correctAnalysis:
      'Gabarito: F – V – F. Verdadeira(s): (2). (1) é falsa porque o operador >> anexa ao final do arquivo sem apagar o conteúdo. (3) é falsa porque 2> redireciona apenas o stderr.',
    optionErrors: {
      1: 'Incorreta: a afirmativa (1) é falsa, pois o operador >> anexa ao final do arquivo sem apagar o conteúdo.',
      2: 'Incorreta: a afirmativa (2) é verdadeira.',
      3: 'Incorreta: a afirmativa (3) é falsa, pois 2> redireciona apenas o stderr.'
    }
  },
  {
    id: 'sarah-11-17',
    editalItemId: '11.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Após ajustar a configuração de um daemon (como Nginx ou sshd) no Linux, qual diferença distingue `systemctl reload` de `systemctl restart`?',
    options: [
      'reload reinicia o kernel inteiro; restart só lê o arquivo de texto.',
      'reload relê config sem derrubar conexões; restart reinicia o processo.',
      'reload ativa o serviço no boot; restart apaga o arquivo .service.',
      'Ambos enviam o sinal SIGKILL encerrando todas as conexões ativas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. serviços (Eixo 11. LINUX). Quando a unit suporta `ExecReload` (como nginx, sshd, systemd-journald), `systemctl reload` envia sinal (ex.: SIGHUP) para recarregar configurações sem derrubar conexões abertas; `restart` para o processo completamente e o sobe de novo.',
    correctAnalysis:
      '`reload` recarrega parâmetros em tempo de execução preservando o serviço ativo sem queda; `restart` encerra o daemon e cria novo processo.',
    optionErrors: {
      0: 'Incorreta: inverte os comportamentos e nenhum dos dois reinicia o sistema operacional inteiro.',
      2: 'Incorreta: habilitar no boot é função do comando `systemctl enable`, não `reload`.',
      3: 'Incorreta: `reload` evita justamente interromper sessões ativas com encerramento brusco.'
    }
  },
  {
    id: 'sarah-11-18',
    editalItemId: '11.2.8',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre gerenciamento de daemons, sockets e serviços no Linux com systemd, assinale a afirmação INCORRETA.',
    options: [
      'O comando `ss -tulnp` exibe portas TCP e UDP em escuta junto aos respectivos processos/PIDs.',
      'Uma unit do tipo `.socket` permite ativação sob demanda do daemon apenas quando houver conexão na porta.',
      'Executar `systemctl start nginx` garante que o serviço subirá automaticamente nos próximos reboots mesmo estando `disabled`.',
      'O comando `systemctl mask <servico>` impede que o serviço seja iniciado manual ou automaticamente por dependências.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. serviços (Eixo 11. LINUX). `systemctl start` inicia o daemon somente na sessão atual; para iniciar automaticamente nos próximos boots é obrigatório executar `systemctl enable` (ou `enable --now` para ambos).',
    correctAnalysis:
      'A afirmação incorreta confunde estado de execução imediata (`start`) com habilitação persistente no boot (`enable`).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): `ss -tulnp` substitui o antigo `netstat` exibindo sockets listening e PIDs.',
      1: 'Incorreta (afirmação verdadeira): socket activation é recurso nativo das units `.socket` do systemd.',
      3: 'Incorreta (afirmação verdadeira): `mask` cria symlink para `/dev/null`, bloqueando qualquer tentativa de inicialização.'
    }
  },
  {
    id: 'sarah-11-19',
    editalItemId: '11.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em distribuições Linux corporativas, quais gerenciadores resolvem dependências de pacotes automaticamente nas famílias Debian/Ubuntu e Red Hat/Rocky?',
    options: [
      'pacman no Debian/Ubuntu e zypper/emerge no Red Hat/Rocky.',
      'dpkg isolado no Debian e tar.gz no Red Hat sem pacotes.',
      'systemd-udevd no Debian e netplan no Red Hat/Rocky.',
      'apt no Debian/Ubuntu e dnf/yum no Red Hat/Rocky.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Instalação, configuração e administração Linux (Eixo 11). `apt` (front-end do dpkg) resolve dependências em repositórios `.deb` (Debian/Ubuntu), enquanto `dnf` (sucessor do `yum`, front-end do `rpm`) gerencia pacotes `.rpm` (RHEL/Rocky/Alma).',
    correctAnalysis:
      'Sistemas baseados em Debian usam `apt` com pacotes `.deb` e derivados de Red Hat utilizam `dnf`/`yum` com pacotes `.rpm` para resolver dependências de repositórios.',
    optionErrors: {
      0: 'Incorreta: pacman pertence ao Arch Linux, zypper ao openSUSE/SLES e emerge ao Gentoo.',
      1: 'Incorreta: `dpkg -i` e `rpm -i` de baixo nível não resolvem automaticamente dependências em repositórios remotos.',
      2: 'Incorreta: udevd gerencia dispositivos de hardware e netplan configura interfaces de rede no Ubuntu.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 12 (+3) ====================
  {
    id: 'sarah-12-13',
    editalItemId: '12.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em scripts de automação POSIX/Bash, o que indica o código de saída (exit code) armazenado em `$?` após a execução de um comando?',
    options: [
      'Valor 0 indica sucesso; valores de 1 a 255 indicam falha ou erro.',
      'Valor 1 indica sucesso padrão; valor 0 indica falha fatal de rede.',
      'Valor 200 indica sucesso local; valor abaixo de 100 indica erro.',
      'Valor -1 indica execução parcial sem erro e 255 indica sucesso.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Lógica de programação aplicada a scripts (Eixo 12. Automação). Por convenção UNIX/POSIX, todo comando bem-sucedido retorna exit code `0`, e retornos diferentes de zero (`1` a `255`) sinalizam falha — permitindo encadeamentos condicionais com `&&` e `||`.',
    correctAnalysis:
      'No shell Linux, `$? == 0` representa sucesso e valores entre 1 e 255 representam erros ou códigos de status não bem-sucedidos.',
    optionErrors: {
      1: 'Incorreta: inverte a convenção POSIX (`0` = sucesso, `!= 0` = falha).',
      2: 'Incorreta: `200` é código de status do protocolo HTTP, não exit code de sucesso em Bash.',
      3: 'Incorreta: exit codes em UNIX são inteiros de 8 bits (0–255), nos quais 255 indica erro/status fora da faixa.'
    }
  },
  {
    id: 'sarah-12-14',
    editalItemId: '12.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Sobre métodos e códigos de status em APIs REST, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Requisições GET, PUT e DELETE são idempotentes por definição quando aplicadas repetidamente sobre o mesmo recurso.\n( ) Códigos HTTP 401 (Unauthorized) e 403 (Forbidden) indicam falhas de autenticação/autorização pelo cliente.\n( ) O código HTTP 503 (Service Unavailable) indica indisponibilidade temporária do servidor ou sobrecarga no backend.\n\nAs afirmativas são, respectivamente,',
    options: [
      'F – V – V.',
      'V – V – V.',
      'V – F – V.',
      'V – V – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. APIs REST (Eixo 12. Automação). Todas são verdadeiras: GET, PUT e DELETE são idempotentes (V); 401/403 indicam falha de autenticação/autorização (V); 503 sinaliza indisponibilidade temporária no servidor (V).',
    correctAnalysis:
      'Todas as três afirmativas são verdadeiras e sintetizam idempotência em métodos REST e semântica das famílias 4xx (401/403) e 5xx (503).',
    optionErrors: {
      0: 'Incorreta: GET, PUT e DELETE são métodos idempotentes na semântica REST/HTTP.',
      2: 'Incorreta: 401 e 403 realmente sinalizam problemas de autenticação (falta de credencial válida) e autorização (sem permissão).',
      3: 'Incorreta: HTTP 503 indica efetivamente servidor temporariamente indisponível ou sobrecarregado.'
    }
  },
  {
    id: 'sarah-12-15',
    editalItemId: '12.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Formato do Edital nº 13/2026',
    statement:
      'Em scripts PowerShell para importar planilhas CSV geradas no padrão brasileiro (colunas separadas por ponto e vírgula e acentuação UTF-8), qual comando evita quebra de colunas?',
    options: [
      'Get-Content usuarios.csv | ConvertFrom-Json.',
      'Import-Csv usuarios.csv -Delimiter "," -Encoding ASCII.',
      'Export-Csv usuarios.csv -Append -Force.',
      'Import-Csv usuarios.csv -Delimiter ";" -Encoding UTF8.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. CSV (Eixo 12. Automação). Arquivos CSV exportados em ambiente PT-BR frequentemente usam `;` como delimitador (pois a vírgula é separador decimal); especificar `-Delimiter ";"` e `-Encoding UTF8` no `Import-Csv` preserva propriedades e acentuação corretamente.',
    correctAnalysis:
      '`Import-Csv -Delimiter ";" -Encoding UTF8` lê o cabeçalho e transforma cada linha em objeto PowerShell respeitando o separador `;` e caracteres UTF-8.',
    optionErrors: {
      0: 'Incorreta: ConvertFrom-Json espera texto no formato JSON, falhando ao tentar interpretar CSV.',
      1: 'Incorreta: usar delimitador vírgula e ASCII junta todas as colunas numa única string e corrompe acentos.',
      2: 'Incorreta: Export-Csv grava objetos em disco em vez de importar o arquivo CSV existente.'
    }
  }
]);
