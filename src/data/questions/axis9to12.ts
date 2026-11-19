import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_9_TO_12: readonly Question[] = Object.freeze([
  // ==================== EIXO 9: 9. Balanceamento de carga. (10 questões) ====================
  {
    id: 'sarah-25',
    editalItemId: '9.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma arquitetura com balanceadores de carga A10 ou HAProxy operando em L7, o cliente conecta-se via HTTPS ao Virtual IP (VIP) e o balanceador encaminha requisições HTTP aos servidores do pool após inserir o cabeçalho X-Forwarded-For. Quais dois mecanismos estão em operação?',
    options: [
      'SSL Offloading (terminação TLS no ADC para poupar CPU do backend e permitir inspeção L7) e preservação do IP real do cliente em cenário de SNAT.',
      'Direct Server Return (DSR) com retorno direto sem passar pelo balanceador e criptografia IPsec fim a fim.',
      'Balanceamento Round Robin estrito na camada física e remoção obrigatória de health checks HTTP.',
      'Re-criptografia obrigatória de camada 2 (SSL Bridging) sem leitura de cabeçalhos HTTP e DNS Round Robin.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. A10, HAProxy ou equivalentes, VIP, pools, NAT e SSL offloading (Eixo 9). O ADC encerra TLS (SSL offloading) e usa X-Forwarded-For para repassar o IP de origem quando aplica SNAT.',
    correctAnalysis:
      'Ao terminar a sessão HTTPS no balanceador (SSL offloading), o equipamento reduz a carga criptográfica dos servidores e lê/injeta cabeçalhos HTTP como X-Forwarded-For para preservar o IP do cliente oculto pelo SNAT.',
    optionErrors: {
      1: 'Incorreta: no DSR o servidor de destino responde diretamente ao cliente sem passar pelo balanceador e sem terminação HTTP/L7 com X-Forwarded-For.',
      2: 'Incorreta: SSL offloading atua em camada 7/aplicação (não física) e é totalmente compatível com health checks HTTP.',
      3: 'Incorreta: encaminhar HTTP simples ao pool não é SSL Bridging (re-criptografia), e DNS Round Robin não injeta cabeçalhos HTTP.'
    }
  },
  {
    id: 'sarah-26',
    editalItemId: '9.2.4',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um dos servidores web de um pool entrou em loop infinito na aplicação Java: a porta TCP 8080 continua aceitando conexões, mas todas as requisições HTTP retornam erro 500. Se o balanceador usar apenas health check TCP simples, o que acontece e como corrigir?',
    options: [
      'O balanceador mantém o servidor como saudável (UP) gerando falhas aos usuários; a correção é configurar um health check HTTP (L7) validando status esperado (ex: HTTP 200) ou string na resposta.',
      'O health check TCP detecta automaticamente o erro HTTP 500 por inspeção de payload na camada 3 e remove o nó do pool.',
      'O VIP altera automaticamente o algoritmo para Least Connections, impedindo que qualquer usuário receba erro 500.',
      'Basta desabilitar os health checks para que a persistência por cookie corrija o servidor com erro 500.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. health checks e pools (Eixo 9. Balanceamento de carga). Sondagens L4 (TCP) verificam apenas o handshake da porta; sondagens L7 (HTTP) validam saúde real da aplicação.',
    correctAnalysis:
      'Um health check TCP verifica apenas se o socket responde ao handshake SYN/ACK; para detectar falhas lógicas da aplicação (HTTP 500), deve-se configurar health check HTTP verificando código de retorno (200 OK) ou conteúdo.',
    optionErrors: {
      1: 'Incorreta: TCP health check não analisa códigos de status HTTP da camada de Aplicação.',
      2: 'Incorreta: Least Connections continua enviando tráfego a um nó marcado como UP, inclusive com preferência se ele fechar conexões rapidamente com erro 500.',
      3: 'Incorreta: persistência por cookie (sticky session) agravaria o problema mantendo o usuário preso ao servidor com falha.'
    }
  },
  {
    id: 'sarah-27',
    editalItemId: '9.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma aplicação legada que armazena a sessão autenticada exclusivamente na memória RAM local de cada servidor de aplicação (sem cache compartilhado), qual configuração no balanceador de carga evita que o usuário seja deslogado a cada clique entre requisições?',
    options: [
      'Desativar a replicação de estado entre balanceadores e usar Round Robin puro sem persistência.',
      'Configurar persistência de sessão (sticky session via cookie inserido pelo ADC ou source IP) no grupo/VIP.',
      'Ativar failover ativo-ativo no firewall de borda com troca de IP a cada pacote.',
      'Alterar o health check para ICMP ping com intervalo de 1 segundo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Balanceamento de carga, failover e replicação de estado e Item 2. persistência (Eixo 9). Sticky sessions direcionam requisições subsequentes do mesmo cliente ao mesmo nó do pool.',
    correctAnalysis:
      'Quando o estado da sessão reside apenas na memória local do backend, a persistência de sessão (cookie de afinidade ou IP de origem) garante que o cliente permaneça direcionado ao mesmo servidor enquanto estiver saudável.',
    optionErrors: {
      0: 'Incorreta: Round Robin puro distribuirá cada requisição a um servidor distinto, causando perda constante da sessão local.',
      2: 'Incorreta: alternar IP de origem por pacote quebra conexões TCP e não resolve afinidade de sessão na camada de aplicação.',
      3: 'Incorreta: intervalo de ping ICMP apenas monitora conectividade básica e não garante afinidade de sessão do usuário.'
    }
  },
  {
    id: 'sarah-9-04',
    editalItemId: '9.1.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao posicionar Nginx ou Apache HTTP Server como proxy reverso na frente de um servidor de aplicação Java (Tomcat) na camada DMZ, qual benefício arquitetural direto é obtido?',
    options: [
      'O proxy reverso expõe diretamente as portas internas de gerenciamento do Tomcat à internet para acelerar consultas SQL.',
      'O proxy reverso centraliza terminação TLS, compressão, cache de estáticos, proteção básica de cabeçalhos e oculta a topologia real dos servidores de aplicação.',
      'O proxy reverso substitui o protocolo TCP pelo protocolo UDP na entrega de páginas HTTPS para eliminar o handshake.',
      'Servidores de aplicação Tomcat não suportam conexões HTTP/AJP atrás de proxy reverso sem desativar DNS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Servidores de aplicação (conceitos e noções de administração) (Eixo 9). Proxy reverso atua como fachada única segura para backends como Tomcat/IIS.',
    correctAnalysis:
      'Um proxy reverso (Nginx/Apache) atua na borda recebendo requisições dos clientes, realizando terminação TLS, cache, compressão e encaminhamento controlado ao servidor de aplicação (Tomcat), ocultando IPs e portas internas.',
    optionErrors: {
      0: 'Incorreta: o proxy reverso justamente evita expor diretamente portas internas/administrativas do servidor de aplicação à internet.',
      2: 'Incorreta: HTTPS clássico opera sobre TCP/TLS (e HTTP/3 sobre QUIC/UDP no navegador, mas não por troca arbitrária de proxy reverso simples em Tomcat).',
      3: 'Incorreta: Tomcat opera normalmente via HTTP ou conector AJP atrás de Nginx/Apache sem exigir desativação de DNS.'
    }
  },
  {
    id: 'sarah-9-05',
    editalItemId: '9.1.3',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma aplicação web apresentou gargalo de processamento em horário de pico. A equipe optou por escalabilidade horizontal (scale-out) com dois balanceadores em failover VRRP ativo-passivo. O que caracteriza corretamente essa escolha?',
    options: [
      'Aumentar CPU e memória RAM de uma única máquina virtual sem adicionar novos nós ao pool.',
      'Adicionar novas instâncias/servidores ao pool de backend para distribuir a carga, mantendo um par de ADCs com IP virtual flutuante via VRRP para eliminar ponto único de falha.',
      'Configurar VRRP ativo-passivo para dividir metade das requisições TCP entre os dois nós sem uso de VIP.',
      'Substituir o pool de servidores por um único servidor físico com disco RAID 0.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Topologias de alta disponibilidade e escalabilidade (Eixo 9). Scale-out = adicionar nós horizontais; VRRP provê VIP altamente disponível entre ADCs.',
    correctAnalysis:
      'Escalabilidade horizontal (scale-out) amplia capacidade adicionando nós paralelos ao pool, enquanto dois balanceadores com VRRP ativo-passivo compartilham um VIP flutuante e replicam estado de sessão para failover automático.',
    optionErrors: {
      0: 'Incorreta: aumentar CPU e RAM de uma única máquina caracteriza escalabilidade vertical (scale-up), não horizontal.',
      2: 'Incorreta: VRRP ativo-passivo mantém o VIP ativo em um mestre por vez (assumido pelo backup em falha), utilizando VIP obrigatoriamente.',
      3: 'Incorreta: um único servidor sem RAID redundante cria ponto único de falha (SPOF), o oposto de alta disponibilidade.'
    }
  },
  {
    id: 'sarah-9-06',
    editalItemId: '9.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao configurar um frontend no HAProxy ou um Virtual Server no A10, o arquiteto precisa escolher entre modo L4 (TCP) e modo L7 (HTTP). Em qual cenário o modo L7 é tecnicamente indispensável?',
    options: [
      'Quando se deseja rotear requisições para pools distintos com base no caminho da URL (/api vs /static), método HTTP ou cabeçalho Host.',
      'Quando se busca exclusivamente encaminhar tráfego SSH na porta 22 sem inspecionar conteúdo da aplicação.',
      'Quando o objetivo é implementar Direct Server Return sem leitura de cabeçalhos de aplicação.',
      'Quando o balanceador precisa atuar apenas como roteador estático sem tabela de sessões.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. A10, HAProxy ou equivalentes (Eixo 9). Roteamento por URL/Host/Cookie requer compreensão do protocolo HTTP na Camada 7 (mode http no HAProxy).',
    correctAnalysis:
      'No modo L7 (HTTP), o ADC/HAProxy encerra a conexão TCP, analisa cabeçalhos HTTP, URI e cookies, permitindo roteamento inteligente baseado em conteúdo (content switching) para backends distintos.',
    optionErrors: {
      1: 'Incorreta: encaminhar tráfego SSH na porta 22 sem inspeção HTTP usa modo L4 (TCP), não L7 HTTP.',
      2: 'Incorreta: Direct Server Return (DSR) opera tipicamente em L4, pois o ADC encaminha pacotes sem terminar nem reescrever payloads L7.',
      3: 'Incorreta: balanceadores mantêm tabela de estado/sessões e modo L7 realiza ainda mais processamento na camada de aplicação.'
    }
  },
  {
    id: 'sarah-9-07',
    editalItemId: '9.2.2',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um ambiente A10/HAProxy, qual é a relação funcional correta entre VIP (Virtual IP / Virtual Server), Pool (Service Group) e nós de backend?',
    options: [
      'O VIP é o endereço IP interno exclusivo do banco de dados, e o Pool é o certificado TLS instalado no navegador do cliente.',
      'O VIP é o IP/porta lógico exposto aos clientes que recebe o tráfego e o distribui, conforme algoritmo e health check, para os servidores membros de um Pool.',
      'Cada servidor do Pool deve possuir obrigatoriamente o mesmo endereço IP real do VIP na mesma interface Ethernet sem encapsulamento ou NAT.',
      'Um Pool só pode conter exatamente um servidor físico, impedindo balanceamento de carga.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. VIP e pools (Eixo 9). O VIP representa o ponto de entrada lógico publicado no DNS; o Pool agrupa os membros reais de backend.',
    correctAnalysis:
      'Os clientes apontam o DNS para o VIP (Virtual Server) configurado no balanceador, que avalia disponibilidade via health checks e distribui as conexões entre os servidores reais cadastrados no Pool/Service Group.',
    optionErrors: {
      0: 'Incorreta: o VIP é o IP frontal de acesso do serviço no balanceador, não um IP interno exclusivo do banco nem um certificado TLS.',
      2: 'Incorreta: duplicar o mesmo IP em múltiplas interfaces da mesma sub-rede sem loopback DSR causaria conflito de IP/ARP na rede.',
      3: 'Incorreta: a função do Pool é justamente agrupar múltiplos nós de backend para distribuição de carga e tolerância a falhas.'
    }
  },
  {
    id: 'sarah-9-08',
    editalItemId: '9.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um pool possui servidores com capacidades de hardware heterogêneas e requisições com durações muito variáveis (algumas levam 50 ms, outras 40 s em relatórios). Qual algoritmo de balanceamento evita sobrecarregar servidores com transações longas pendentes e considera capacidades distintas?',
    options: [
      'Round Robin simples sem pesos.',
      'Weighted Least Connections (Menor Número de Conexões Ponderado).',
      'Source IP Hash estático sem health check.',
      'Broadcast em camada 2 para todos os membros do pool simultaneamente.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2 e Item 2. pools / weight (Eixo 9). Weighted Least Connections combina contagem ativa de conexões com o peso (weight) proporcional à capacidade de cada servidor.',
    correctAnalysis:
      'Quando requisições possuem durações discrepantes e hardware heterogêneo, Weighted Least Connections encaminha novas conexões ao servidor com menor carga proporcional de conexões ativas ponderada pelo seu peso.',
    optionErrors: {
      0: 'Incorreta: Round Robin simples distribui em rodízio fixo ignorando conexões longas acumuladas e diferenças de capacidade.',
      2: 'Incorreta: Source IP Hash sem health check pode enviar todos os clientes de um mesmo NAT corporativo a um nó sobrecarregado ou inoperante.',
      3: 'Incorreta: balanceadores não fazem broadcast de requisições TCP para todos os servidores do pool responderem juntos.'
    }
  },
  {
    id: 'sarah-9-09',
    editalItemId: '9.2.6',
    format: 'multipla_escolha',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma topologia de balanceamento L4 em rede local onde clientes e servidores do pool estão na mesma sub-rede VLAN e o gateway padrão dos servidores NÃO é o balanceador, por que o tráfego falha sem SNAT (Source NAT) e qual a consequência do roteamento assimétrico?',
    options: [
      'Os servidores respondem diretamente ao IP real do cliente na mesma sub-rede sem passar pelo ADC, fazendo o cliente descartar o pacote SYN-ACK por vir de IP distinto do VIP.',
      'O balanceador bloqueia pacotes ICMP automaticamente impedindo o ARP de resolver o gateway.',
      'Os servidores convertem o pacote HTTP em SMB na camada 2, quebrando o handshake TLS.',
      'Sem SNAT, o balanceador envia o pacote diretamente à nuvem pública sem tabela ARP.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. NAT (SNAT, DSR) (Eixo 9). Sem SNAT ou roteamento via ADC, ocorre tráfego assimétrico: o cliente espera resposta do VIP, mas recebe retorno direto do IP real do servidor.',
    correctAnalysis:
      'Na ausência de SNAT (quando os servidores não têm o ADC como gateway e não usam DSR), o servidor responde direto ao IP do cliente; como o cliente iniciou sessão com o VIP, sua pilha TCP descarta o retorno inesperado do IP real (roteamento assimétrico).',
    optionErrors: {
      1: 'Incorreta: a falha não decorre de bloqueio de ICMP sobre ARP, mas sim da assimetria do fluxo de retorno TCP.',
      2: 'Incorreta: servidores web não convertem HTTP em SMB na camada 2 em cenários de balanceamento sem SNAT.',
      3: 'Incorreta: o encaminhamento ocorre na VLAN local pelo ADC, sem envio arbitrário à nuvem pública.'
    }
  },
  {
    id: 'sarah-9-10',
    editalItemId: '9.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao comparar persistência por Source IP com persistência por Cookie inserido pelo balanceador (Cookie Insert) para milhares de usuários acessando atrás de um único firewall NAT corporativo, qual método oferece melhor distribuição e por quê?',
    options: [
      'Source IP, pois diferencia cada aba aberta pelo usuário por meio do endereço MAC da estação.',
      'Cookie Insert em camada 7, porque identifica individualmente cada sessão de navegador por cookie HTTP mesmo quando todos compartilham o mesmo IP público de NAT.',
      'Source IP com máscara /8, pois força todos os usuários da operadora para o mesmo servidor físico.',
      'Nenhum método de persistência funciona quando há NAT na origem do cliente.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. persistência (Eixo 9). Usuários atrás de NAT/CGNAT compartilham o mesmo IP de origem; persistência por cookie L7 evita desbalanceamento.',
    correctAnalysis:
      'A persistência por Source IP enxerga apenas o IP público do NAT corporativo, enviando todos os milhares de usuários ao mesmo nó; já o Cookie Insert atribui um token individual por cliente HTTP, distribuindo a carga igualmente.',
    optionErrors: {
      0: 'Incorreta: endereços MAC não atravessam roteadores L3/Internet nem distinguem sessões HTTP atrás de um NAT.',
      2: 'Incorreta: agrupar por máscara /8 agravaria drasticamente o desbalanceamento concentrando milhões de IPs em um único backend.',
      3: 'Incorreta: persistência baseada em cookie HTTP funciona perfeitamente mesmo quando diversos clientes compartilham o mesmo IP de origem.'
    }
  },

  // ==================== EIXO 10: 10. Monitoramento. (10 questões) ====================
  {
    id: 'sarah-28',
    editalItemId: '10.1.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No gerenciamento de redes TCP/IP via SNMP implementado no Zabbix ou PRTG, a equipe exige que notificações assíncronas críticas enviadas pelos switches tenham confirmação de recebimento pelo gerente e que todas as consultas de métricas sejam autenticadas e criptografadas. Quais recursos atendem ao requisito?',
    options: [
      'Mensagens SNMP TRAP (UDP 161) com SNMPv2c usando community string privada.',
      'Mensagens SNMP INFORM (UDP 162, com confirmação ACK) e protocolo SNMPv3 operando no nível de segurança authPriv.',
      'Mensagens SNMP GETBULK (UDP 162) enviadas pelo agente e SNMPv1 com criptografia nativa AES-256.',
      'Protocolo MIB/SMI em TCP 514 substituindo a porta UDP 161 do agente SNMP.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Gerenciamento de redes TCP/IP (arquitetura de gerenciamento, SMI, SNMP e MIB) (Eixo 10). INFORM confirma entrega (diferente de TRAP) na porta UDP 162; SNMPv3 authPriv provê autenticação e criptografia.',
    correctAnalysis:
      'SNMP INFORM (UDP 162) exige confirmação (ACK) do gerente ao contrário do TRAP não confirmado, e o SNMPv3 no modo authPriv garante autenticação (SHA/MD5) e criptografia (AES/DES) dos pacotes.',
    optionErrors: {
      0: 'Incorreta: TRAP não possui confirmação de recebimento (e usa UDP 162), além do SNMPv2c transmitir community strings em texto claro.',
      2: 'Incorreta: GETBULK é uma requisição do gerente (UDP 161) e SNMPv1 não possui suporte a criptografia.',
      3: 'Incorreta: MIB é a base de objetos gerenciáveis (definida em SMI) e TCP/UDP 514 pertence ao protocolo Syslog.'
    }
  },
  {
    id: 'sarah-29',
    editalItemId: '10.1.2',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em projetos de observabilidade para microsserviços e infraestrutura híbrida integrando logs, métricas e dashboards (como Zabbix/Grafana), qual definição distingue corretamente os três pilares da observabilidade?',
    options: [
      'Métricas são registros textuais imutáveis de eventos discretos; logs são séries temporais numéricas; traces medem exclusivamente uso de CPU.',
      'Métricas representam medições numéricas agregadas em séries temporais; logs registram eventos discretos com contexto/timestamp; traces acompanham o caminho completo de uma requisição distribuída.',
      'Traces substituem completamente a coleta de syslog (porta 514) e tornam dispensável o uso de agentes WMI em servidores Windows.',
      'Métricas só podem ser coletadas por SNMPv3, enquanto logs exigem obrigatoriamente o protocolo WMI.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Observabilidade (monitoramento, logs e rastreamento) (Eixo 10). Métricas (séries temporais), Logs (eventos discretos) e Traces (fluxo ponta a ponta).',
    correctAnalysis:
      'Métricas expressam valores numéricos ao longo do tempo (CPU, latência, IOPS), logs capturam eventos discretos detalhados e traces distribuídos correlacionam a jornada ponta a ponta de uma transação entre serviços.',
    optionErrors: {
      0: 'Incorreta: as definições de métricas (séries temporais) e logs (registros discretos) foram trocadas.',
      2: 'Incorreta: traces complementam logs de sistema (syslog) e métricas de SO (WMI/agentes), não os substituem.',
      3: 'Incorreta: métricas e logs são independentes de protocolo único (agentes, Prometheus/Grafana, syslog, WMI, SNMP).'
    }
  },
  {
    id: 'sarah-30',
    editalItemId: '10.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao implantar monitoramento Zabbix em servidores protegidos por firewall que bloqueia conexões de entrada do Zabbix Server para os hosts da rede interna, qual modo de operação do agente deve ser configurado e qual protocolo recebe os logs centrais de dispositivos de rede?',
    options: [
      'Agente Zabbix em modo ativo (o agente inicia conexão com o Zabbix Server/Proxy na porta 10051) e protocolo Syslog (RFC 5424, porta 514).',
      'Agente Zabbix em modo passivo (o servidor abre conexão na porta 10050 do host) e protocolo WMI para switches Cisco.',
      'Agente Zabbix em modo passivo na porta 161 e coleta exclusiva por arquivo CSV via cron.',
      'Desativar o agente e consultar o registro MIB dos servidores Linux via WMI na porta 514.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Zabbix/Grafana, agentes, syslog (Eixo 10. Monitoramento). No modo ativo, o agente conecta-se ao Server/Proxy (10051), contornando bloqueios de entrada no host.',
    correctAnalysis:
      'Em checagens ativas (Active Checks), o próprio Zabbix Agent abre conexão de saída para o Server/Proxy (porta TCP 10051) para buscar a lista de itens e enviar métricas; dispositivos de rede encaminham eventos via Syslog (porta 514).',
    optionErrors: {
      1: 'Incorreta: no modo passivo é o Server que inicia conexão na porta 10050 do cliente, o que seria bloqueado pelo firewall.',
      2: 'Incorreta: porta 161 pertence ao SNMP, não ao Zabbix Agent passivo (10050).',
      3: 'Incorreta: WMI (Windows Management Instrumentation) é tecnologia nativa Windows e não opera na porta 514 nem coleta MIBs SNMP.'
    }
  },
  {
    id: 'sarah-10-04',
    editalItemId: '10.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um servidor de aplicação apresenta alertas intermitentes de lentidão toda segunda-feira às 09h. Para diferenciar comportamento normal de pico comercial de uma degradação real e definir limiares precisos sem falsos positivos, qual prática deve ser adotada?',
    options: [
      'Configurar thresholds fixos arbitrários de 50% de CPU e ignorar séries históricas.',
      'Construir um baseline de desempenho ao longo de ciclos normais de operação para identificar desvios anômalos e localizar gargalos de CPU, memória, I/O ou rede.',
      'Desativar a coleta de métricas nos horários de pico para economizar espaço em disco no Zabbix.',
      'Reiniciar o banco de dados do Grafana automaticamente sempre que o uso de memória atingir 60%.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Detecção de problemas e otimização de desempenho (Eixo 10). Baseline histórico permite distinguir sazonalidade legítima de anomalias reais.',
    correctAnalysis:
      'O estabelecimento de baseline compara o comportamento atual com o histórico sazonal (dias/horários equivalentes), permitindo detectar anomalias verdadeiras, reduzir fadiga de alertas e isolar o subsistema com gargalo.',
    optionErrors: {
      0: 'Incorreta: limiares fixos sem referência de baseline geram enxurrada de falsos positivos ou ignoram anomalias sutis.',
      2: 'Incorreta: suspender coleta justamente no horário de pico impede o diagnóstico dos incidentes reais.',
      3: 'Incorreta: reiniciar o Grafana não resolve gargalos no servidor monitorado e 60% de uso de RAM é frequentemente saudável (cache).'
    }
  },
  {
    id: 'sarah-10-05',
    editalItemId: '10.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma empresa monitora 4 filiais remotas atrás de links WAN instáveis utilizando Zabbix. Como evitar perda de métricas durante quedas temporárias da WAN e reduzir o tráfego de polling direto do Zabbix Server central?',
    options: [
      'Instalar um Zabbix Proxy em cada filial para coletar métricas localmente, armazená-las em buffer durante indisponibilidades da WAN e encaminhá-las ao Zabbix Server.',
      'Substituir todos os coletores locais por consultas ICMP do Grafana direto da nuvem pública.',
      'Configurar cada switch das filiais para enviar traps SNMP diretamente para a porta 3000 do navegador do operador.',
      'Alterar o intervalo de coleta de todos os itens para 24 horas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. PRTG, Zabbix/Grafana ou ferramentas equivalentes (Eixo 10). O Zabbix Proxy realiza coleta distribuída e buffering local em banco próprio.',
    correctAnalysis:
      'O Zabbix Proxy coleta dados localmente na filial, armazena em buffer em banco local caso o link WAN caia e transmite os registros acumulados ao Zabbix Server assim que a conexão é restabelecida.',
    optionErrors: {
      1: 'Incorreta: Grafana é uma plataforma de visualização e painéis (lê fontes como Zabbix/Prometheus), não realiza polling distribuído resiliente a queda de WAN.',
      2: 'Incorreta: porta 3000 é a interface web padrão do Grafana, não um receptor de traps SNMP (UDP 162).',
      3: 'Incorreta: intervalo de 24 horas elimina qualquer visibilidade operacional de incidentes em tempo hábil.'
    }
  },
  {
    id: 'sarah-10-06',
    editalItemId: '10.2.3',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em ferramentas como PRTG ou Zabbix integradas ao monitoramento de servidores Windows Server sem agente proprietário instalado, qual interface nativa de gerenciamento da Microsoft permite consultar contadores de desempenho (PerfMon), estado de serviços e eventos do sistema?',
    options: [
      'SNMP Trap em UDP 514 exclusivamente.',
      'WMI (Windows Management Instrumentation) ou WinRM (Windows Remote Management).',
      'Protocolo LLDP-MED na camada 2.',
      'Arquivo /proc/meminfo montado via NFSv3.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. WMI (Eixo 10. Monitoramento). WMI/WinRM expõe classes CIM/PerfMon, serviços e logs de eventos nativamente no Windows.',
    correctAnalysis:
      'WMI (frequentemente transportado via DCOM/RPC ou WinRM sobre HTTP/HTTPS 5985/5986) permite consultar remotamente contadores PerfMon, estado de serviços Windows, discos e event logs sem instalar agente adicional.',
    optionErrors: {
      0: 'Incorreta: porta 514 é Syslog (não SNMP Trap que usa UDP 162), e não consulta contadores PerfMon nativamente.',
      2: 'Incorreta: LLDP-MED é protocolo de descoberta de camada 2 usado principalmente para VLAN de voz e PoE.',
      3: 'Incorreta: /proc/meminfo é pseudoarquivo do kernel Linux, inexistente no Windows Server.'
    }
  },
  {
    id: 'sarah-10-07',
    editalItemId: '10.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'De acordo com o padrão Syslog (RFC 5424), as mensagens de log classificam o nível de criticidade por severidade numérica (0 a 7). Qual relação entre código numérico e severidade está correta?',
    options: [
      'Quanto maior o número (ex: 7 - Debug), mais crítico e emergencial é o evento do sistema.',
      '0 (Emergency) representa a condição mais crítica (sistema inutilizável), 3 (Error) indica erro, 4 (Warning) alerta e 6/7 (Informational/Debug) representam eventos informativos/depuração.',
      'Syslog opera exclusivamente em UDP 162 sem qualquer suporte a transporte confiável via TCP ou TLS.',
      'Syslog aplica criptografia AES-256 obrigatória por padrão na porta UDP 514.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. syslog (Eixo 10. Monitoramento). Na escala Syslog (0–7), 0 é Emergency (mais grave) e 7 é Debug (menos grave).',
    correctAnalysis:
      'No Syslog, a escala de severidade vai de 0 (Emergency — mais severo), passando por 1 (Alert), 2 (Critical), 3 (Error), 4 (Warning), 5 (Notice), 6 (Informational) até 7 (Debug — menor severidade).',
    optionErrors: {
      0: 'Incorreta: a escala é invertida — 0 (Emergency) é o mais crítico e 7 (Debug) é o menos crítico.',
      2: 'Incorreta: além de UDP 514, Syslog suporta TCP (514) e Syslog sobre TLS na porta TCP 6514 (RFC 5425).',
      3: 'Incorreta: Syslog tradicional na porta UDP 514 trafega em texto claro sem criptografia.'
    }
  },
  {
    id: 'sarah-10-08',
    editalItemId: '10.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para evitar "flapping" (disparos repetidos de alerta OK/PROBLEM em segundos quando o uso de CPU oscila entre 89% e 91% ao redor de um threshold de 90%), qual mecanismo deve ser aplicado em triggers do Zabbix ou ferramentas equivalentes?',
    options: [
      'Configurar histerese (limiar distinto de disparo e recuperação, ex.: dispara > 90% por 5 min e só normaliza < 80%) e avaliação por janela temporal (avg/min).',
      'Reduzir o intervalo de disparo para 1 segundo sem janela de média.',
      'Desabilitar completamente todas as notificações de severidade High e Disaster.',
      'Criar 10 triggers idênticas apontando para o mesmo limiar de 90%.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. alertas (Eixo 10. Monitoramento). Histerese e janelas temporais evitam flapping e reduzem fadiga de alertas.',
    correctAnalysis:
      'A histerese separa a condição de abertura do incidente (ex.: média de 5 min > 90%) da condição de fechamento (ex.: < 80%), estabilizando o estado da trigger contra oscilações marginais (flapping).',
    optionErrors: {
      1: 'Incorreta: reduzir o intervalo para 1 segundo sem histerese multiplica ainda mais o efeito de flapping.',
      2: 'Incorreta: silenciar severidades críticas deixa a operação cega para incidentes reais.',
      3: 'Incorreta: duplicar triggers idênticas gera 10 vezes mais ruído para o mesmo evento.'
    }
  },
  {
    id: 'sarah-10-09',
    editalItemId: '10.2.8',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um portal web hospitalar interno exige SLA mensal de 99,9% de disponibilidade, monitorado por synthetic checks HTTP e ICMP. Caso esse portal fique fora do ar continuamente por 2 horas dentro de um mês de 30 dias (43.200 minutos), o SLA foi cumprido?',
    options: [
      'Sim, pois 99,9% tolera até 7 horas e 12 minutos de indisponibilidade mensal.',
      'Não, pois 99,9% em 30 dias permite no máximo ~43,2 minutos de indisponibilidade total no mês, e o sistema ficou 120 minutos fora.',
      'Sim, pois synthetic checks HTTP não contabilizam indisponibilidade quando o servidor responde a ping ICMP.',
      'Não é possível medir SLA em ambiente HTTP porque SLA só existe para enlaces MPLS.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. disponibilidade (Eixo 10. Monitoramento). 0,1% de 43.200 minutos (30 dias) = 43,2 minutos máximos de downtime permitido.',
    correctAnalysis:
      'Disponibilidade de 99,9% admite apenas 0,1% de parada (43,2 minutos em um mês de 30 dias); 2 horas (120 minutos) equivalem a ~99,72%, violando o SLA contratado.',
    optionErrors: {
      0: 'Incorreta: ~7h12min corresponde a 99% de disponibilidade mensal, não a 99,9%.',
      2: 'Incorreta: responder a ping ICMP com a aplicação web fora do ar caracteriza indisponibilidade do serviço ao usuário (justamente o motivo do synthetic check HTTP).',
      3: 'Incorreta: SLA aplica-se a quaisquer serviços de TI (aplicações web, bancos, storage, redes), medido por disponibilidade ponta a ponta.'
    }
  },
  {
    id: 'sarah-10-10',
    editalItemId: '10.2.9',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao analisar métricas de capacidade em séries temporais no Zabbix/Grafana, o administrador identifica que um datastore cresce linearmente em 15 GB por dia, estando atualmente com 82% de ocupação de 10 TB. Qual ação pertence ao processo de capacity planning (gestão de capacidade)?',
    options: [
      'Aguardar o disco atingir 100% para disparar um alerta de emergência e somente então iniciar a compra de novos SSDs.',
      'Utilizar funções de projeção/tendência linear (ex: timeleft/predict) sobre os dados históricos para estimar a data de saturação e planejar expansão ou expurgo antes do limite crítico.',
      'Reduzir a taxa de amostragem de coleta de disco de 5 minutos para 1 mês para ocultar a curva de crescimento.',
      'Substituir métricas em série temporal por capturas pontuais via tcpdump.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. capacidade e métricas (Eixo 10. Monitoramento). Capacity planning usa tendência histórica e projeções para prevenir saturação antes que cause parada.',
    correctAnalysis:
      'O planejamento de capacidade analisa séries temporais e tendências (como funções predict/timeleft no Zabbix) para prever quando recursos (storage, link, CPU, memória) atingirirão saturação e agir proativamente.',
    optionErrors: {
      0: 'Incorreta: esperar 100% de ocupação caracteriza reação tardia após o incidente (VMs travam quando datastore enche), o oposto de capacity planning.',
      2: 'Incorreta: reduzir a amostragem mascara picos e atrasa a visibilidade de consumo acelerado.',
      3: 'Incorreta: tcpdump captura pacotes de rede em trânsito e não projeta crescimento histórico de capacidade de armazenamento.'
    }
  },

  // ==================== EIXO 11: 11. LINUX. (10 questões) ====================
  {
    id: 'sarah-31',
    editalItemId: '11.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um servidor Linux utilizando systemd, após editar manualmente o arquivo de unidade de um serviço crítico, o administrador precisa recarregar os unit files, habilitar a inicialização automática no boot, reiniciar o daemon e inspecionar apenas as últimas mensagens de log desse serviço. Qual sequência de comandos atende exatamente a essa necessidade?',
    options: [
      'systemctl daemon-reload && systemctl enable servico && systemctl restart servico && journalctl -u servico -n 50',
      'service servico reload && chkconfig servico on && systemctl mask servico && cat /etc/passwd',
      'systemctl restart daemon && chmod 777 /etc/systemd && tail -f /etc/fstab',
      'systemctl stop servico && systemctl disable servico && kill -9 1 && dmesg | grep shadow'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. systemd e logs (Eixo 11. LINUX). daemon-reload relê unit files; enable ativa no boot; restart reinicia; journalctl -u filtra logs do serviço no journald.',
    correctAnalysis:
      'systemctl daemon-reload atualiza a árvore de unit files em memória, enable cria o symlink no target de boot, restart reinicia o daemon e journalctl -u consulta os logs filtrados pela unit.',
    optionErrors: {
      1: 'Incorreta: systemctl mask impede que o serviço seja iniciado (aponta para /dev/null), e /etc/passwd armazena contas de usuário, não logs.',
      2: 'Incorreta: chmod 777 em /etc/systemd é falha grave de segurança e /etc/fstab configura pontos de montagem de disco, não logs.',
      3: 'Incorreta: disable desativa no boot, kill -9 no PID 1 (init/systemd) é inválido/perigoso e /etc/shadow contém hashes de senhas.'
    }
  },
  {
    id: 'sarah-32',
    editalItemId: '11.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao aplicar um umask igual a 027 em uma sessão Linux e criar um novo arquivo regular e um novo diretório, além de configurar o bit Sticky (1xxx) em uma pasta compartilhada, quais permissões octais resultam para o arquivo, para o diretório e qual o efeito do Sticky Bit?',
    options: [
      'Arquivo 640, diretório 750; o Sticky Bit impede que usuários apaguem ou renomeiem arquivos de outros usuários dentro da pasta compartilhada.',
      'Arquivo 750, diretório 640; o Sticky Bit faz todos os scripts executarem com UID do proprietário root.',
      'Arquivo 644, diretório 755; o Sticky Bit força novos arquivos a herdarem automaticamente o grupo primário do diretório.',
      'Arquivo 777, diretório 750; o Sticky Bit bloqueia qualquer leitura de arquivo por membros do grupo.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. permissões (Eixo 11. LINUX). 666 - 027 (lógico: ~027 & 666) = 640 para arquivo; 777 & ~027 = 750 para diretório. Sticky Bit protege remoção por terceiros.',
    correctAnalysis:
      'Com umask 027, arquivos regulares recebem 640 (rw-r-----) e diretórios recebem 750 (rwxr-x---); o Sticky Bit (1xxx, como em /tmp) restringe a remoção/renomeação de arquivos ao dono do arquivo, dono da pasta ou root.',
    optionErrors: {
      1: 'Incorreta: arquivos novos sem compilação não nascem com bit de execução (750), e executar com UID do dono é função do SUID (4xxx).',
      2: 'Incorreta: 644/755 resultam de umask 022, e herdar grupo do diretório é função do SGID (2xxx).',
      3: 'Incorreta: umask 027 remove todas as permissões de "outros" e escrita de "grupo", jamais gerando 777.'
    }
  },
  {
    id: 'sarah-33',
    editalItemId: '11.1.3',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na administração de usuários, grupos e sistema de arquivos em Linux, quais arquivos em /etc armazenam, respectivamente, os hashes criptografados de senhas locais, os grupos do sistema e a tabela de montagem persistente de partições no boot?',
    options: [
      '/etc/passwd, /etc/hosts e /etc/resolv.conf.',
      '/etc/shadow, /etc/group e /etc/fstab.',
      '/etc/group, /etc/shadow e /proc/mounts.',
      '/var/log/auth.log, /etc/sudoers e /etc/mtab.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Estrutura de diretórios, 1.3. Usuários e grupos e Item 2. filesystem (Eixo 11. LINUX). /etc/shadow guarda hashes de senha; /etc/group guarda grupos; /etc/fstab define montagens no boot.',
    correctAnalysis:
      'No Linux moderno, /etc/shadow protege os hashes de senha (leitura restrita ao root), /etc/group define os grupos locais e membros secundários, e /etc/fstab lista sistemas de arquivos montados na inicialização.',
    optionErrors: {
      0: 'Incorreta: /etc/passwd exibe "x" no campo de senha (hashes ficam em /etc/shadow), e /etc/hosts e resolv.conf são arquivos de resolução de nomes.',
      2: 'Incorreta: a ordem de shadow e group foi invertida e /proc/mounts reflete apenas montagens ativas em tempo real no kernel.',
      3: 'Incorreta: auth.log é arquivo de log de autenticação e /etc/sudoers controla delegação de privilégios sudo.'
    }
  },
  {
    id: 'sarah-11-04',
    editalItemId: '11.1.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um servidor Linux baseado em Debian/Ubuntu e outro baseado em RHEL/Rocky Linux, o administrador precisa atualizar o índice de repositórios e instalar o pacote openssh-server de forma padronizada, além de regenerar a configuração do bootloader GRUB2 após ajuste de parâmetro do kernel. Quais ferramentas são empregadas?',
    options: [
      'apt update && apt install openssh-server (Debian/Ubuntu), dnf install openssh-server (RHEL/Rocky) e update-grub / grub2-mkconfig.',
      'dpkg --remove (Debian), rpm -e (RHEL) e fdisk -l para compilar o kernel durante o POST.',
      'yum purge (Ubuntu), pacman -S (RHEL) e systemctl daemon-reload para atualizar o GRUB2.',
      'apt-get upgrade --kernel-only e editores diretos no arquivo /proc/cmdline.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Instalação, configuração e administração de sistemas operacionais Linux (Eixo 11). Família Debian usa apt/dpkg e update-grub; família RHEL usa dnf/rpm e grub2-mkconfig.',
    correctAnalysis:
      'Distribuições Debian/Ubuntu utilizam apt sobre pacotes .deb (e update-grub), enquanto RHEL/Rocky utilizam dnf sobre pacotes .rpm (e grub2-mkconfig -o) para atualizar entradas do bootloader GRUB2.',
    optionErrors: {
      1: 'Incorreta: dpkg --remove e rpm -e removem pacotes em vez de instalar, e fdisk gerencia partições de disco, não bootloader ou compilação de kernel.',
      2: 'Incorreta: pacman pertence ao Arch Linux, yum/dnf pertencem à família RHEL (não Ubuntu) e daemon-reload aplica-se apenas ao systemd.',
      3: 'Incorreta: /proc/cmdline é arquivo virtual somente leitura que exibe os parâmetros já carregados pelo kernel no boot.'
    }
  },
  {
    id: 'sarah-11-05',
    editalItemId: '11.1.2',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Segundo o padrão FHS (Filesystem Hierarchy Standard) no Linux, quais diretórios armazenam, respectivamente: arquivos de configuração do sistema, dados variáveis e logs, arquivos de dispositivos especiais de hardware e sistema de arquivos virtual em memória com informações do kernel e processos?',
    options: [
      '/usr, /opt, /home e /boot.',
      '/etc, /var, /dev e /proc.',
      '/bin, /tmp, /mnt e /root.',
      '/var, /etc, /proc e /dev.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Estrutura de diretórios (Eixo 11. LINUX). FHS define /etc (configs), /var (variáveis/logs), /dev (devices) e /proc (procfs em memória).',
    correctAnalysis:
      'No padrão FHS, /etc centraliza configurações do host, /var armazena arquivos variáveis como /var/log e filas, /dev contém nós de dispositivos de bloco/caractere e /proc expõe o estado do kernel e processos em RAM.',
    optionErrors: {
      0: 'Incorreta: /usr guarda binários/bibliotecas compartilhadas de leitura, /opt pacotes adicionais, /home pastas de usuários e /boot kernel/initramfs.',
      2: 'Incorreta: /tmp guarda temporários, /mnt pontos de montagem temporários e /root a pasta pessoal do superusuário.',
      3: 'Incorreta: a ordem dos diretórios está trocada (/var com /etc e /proc com /dev).'
    }
  },
  {
    id: 'sarah-11-06',
    editalItemId: '11.2.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para endurecer (hardening) o acesso administrativo via OpenSSH (/etc/ssh/sshd_config) em servidores Linux de produção, quais diretivas garantem o bloqueio de login direto como root, desativação de login por senha (exigindo par de chaves) e recarregamento sem derrubar sessões ativas?',
    options: [
      'PermitRootLogin no, PasswordAuthentication no, PubkeyAuthentication yes e systemctl reload sshd.',
      'PermitRootLogin yes, PasswordAuthentication yes, PermitEmptyPasswords yes e kill -9 $(pgrep sshd).',
      'AllowUsers root, ChallengeResponseAuthentication yes e chmod 777 ~/.ssh/authorized_keys.',
      'Port 23, UsePAM no e armazenamento da chave privada do usuário dentro de /etc/ssh/authorized_keys.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. SSH (Eixo 11. LINUX). PermitRootLogin no + PasswordAuthentication no + PubkeyAuthentication yes reforçam o acesso SSH com chaves.',
    correctAnalysis:
      'Em /etc/ssh/sshd_config, PermitRootLogin no impede login direto do root, PasswordAuthentication no obriga autenticação por chaves públicas (PubkeyAuthentication yes) e systemctl reload sshd aplica mudanças sem derrubar sessões vigentes.',
    optionErrors: {
      1: 'Incorreta: habilitar login root, senha e senhas vazias enfraquece a segurança e kill -9 mata o daemon interrompendo conexões.',
      2: 'Incorreta: permissões 777 em authorized_keys fazem o OpenSSH rejeitar a chave por insegurança (StrictModes exige 600).',
      3: 'Incorreta: porta 23 pertence ao Telnet e a chave privada nunca deve ser copiada para o servidor (apenas a chave pública vai em authorized_keys).'
    }
  },
  {
    id: 'sarah-11-07',
    editalItemId: '11.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um processo travado está consumindo 100% de um núcleo e mantendo aberto um arquivo já removido em /var/log, impedindo a liberação de espaço em disco. Qual comando identifica qual processo segura o descritor de arquivo aberto e qual sinal solicita encerramento gracioso antes do término forçado?',
    options: [
      'df -h identifica o PID pelo nome do usuário; SIGKILL (9) é o sinal gracioso padrão e SIGTERM (15) nunca encerra processos.',
      'lsof | grep deleted identifica o processo com descritor aberto; SIGTERM (15, padrão do kill) solicita encerramento gracioso, enquanto SIGKILL (9) força término imediato pelo kernel.',
      'free -m libera automaticamente arquivos deletados em uso; SIGHUP (1) formata o filesystem ext4.',
      'du -sh mata processos zumbis sem uso de sinais POSIX.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. processos (Eixo 11. LINUX). lsof exibe arquivos abertos inclusive já excluídos do diretório; SIGTERM (15) pede término limpo e SIGKILL (9) mata imediatamente.',
    correctAnalysis:
      'Quando um arquivo é apagado enquanto aberto por um daemon, o espaço só é liberado quando o descritor fecha; lsof localiza o PID, permitindo reiniciar o serviço ou enviar SIGTERM (15) graciosamente antes de recorrer ao SIGKILL (9).',
    optionErrors: {
      0: 'Incorreta: df -h mostra ocupação de partições (não lista PIDs), e SIGKILL (9) é término forçado abrupto, não gracioso.',
      2: 'Incorreta: free -m exibe apenas memória RAM/swap e SIGHUP (1) tradicionalmente instrui daemons a reler configuração.',
      3: 'Incorreta: du -sh calcula tamanho de diretórios no disco e processos zumbis já encerraram execução aguardando wait() do pai.'
    }
  },
  {
    id: 'sarah-11-08',
    editalItemId: '11.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'O comando df -h indica apenas 42% de espaço em blocos ocupado na partição /var, porém tentativas de criar novos arquivos falham com "No space left on device". Ao investigar com df -i, verifica-se 100% de uso em IUse%. Qual é a causa e qual tecnologia de disco permite expansão flexível de volumes lógicos?',
    options: [
      'Esgotamento de inodes (causado por milhões de arquivos pequenos); o gerenciamento flexível de volumes sobre discos físicos é provido pelo LVM (PV, VG, LV).',
      'Corrupção da tabela ARP local; o gerenciamento de volumes é feito pelo protocolo systemd-journald.',
      'Esgotamento de memória swap; a expansão de blocos exige obrigatoriamente conversão de ext4 para FAT32.',
      'Excesso de permissões Sticky Bit no diretório /etc; o LVM só funciona em sistemas Windows Server.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. filesystem (ext4, xfs, LVM, inode) (Eixo 11. LINUX). Cada arquivo consome um inode; LVM organiza discos em Physical Volumes, Volume Groups e Logical Volumes.',
    correctAnalysis:
      'Em sistemas como ext4, o número de inodes é fixado na formatação: muitos arquivos diminutos esgotam os inodes mesmo havendo blocos livres (verificado via df -i). O LVM permite redimensionar Logical Volumes dinamicamente sobre Volume Groups.',
    optionErrors: {
      1: 'Incorreta: tabela ARP refere-se a resolução IP-MAC na camada 2 e journald é sistema de logs.',
      2: 'Incorreta: swap não causa erro "No space left on device" em /var e FAT32 não suporta permissões POSIX nem journaling Linux.',
      3: 'Incorreta: Sticky Bit não consome inodes de disco e LVM (Logical Volume Manager) é recurso nativo do kernel Linux.'
    }
  },
  {
    id: 'sarah-11-09',
    editalItemId: '11.2.9',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em distribuições Linux modernas (sem o pacote legado net-tools instalado), quais comandos equivalentes substituem ifconfig, route -n e netstat -tulnp para inspecionar interfaces IP, tabela de roteamento e sockets TCP/UDP em escuta com seus respectivos processos?',
    options: [
      'ip addr show, ip route show e ss -tulnp.',
      'lsblk, blkid e mount -a.',
      'chmod, chown e chgrp.',
      'top, vmstat e iostat.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. rede (ip addr, ip route, ss, nmcli, iptables/nftables) (Eixo 11. LINUX). O pacote iproute2 (ip/ss) substituiu o legado net-tools.',
    correctAnalysis:
      'Na suíte moderna iproute2, ip addr exibe endereços/interfaces, ip route exibe rotas do kernel e ss -tulnp lista sockets TCP/UDP em escuta (listening) com número de porta e PID/nome do processo.',
    optionErrors: {
      1: 'Incorreta: lsblk, blkid e mount são utilitários de dispositivos de bloco e sistemas de arquivos, não de rede.',
      2: 'Incorreta: chmod, chown e chgrp alteram permissões e propriedade de arquivos.',
      3: 'Incorreta: top, vmstat e iostat monitoram CPU, memória virtual e I/O de disco.'
    }
  },
  {
    id: 'sarah-11-10',
    editalItemId: '11.2.10',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para evitar que arquivos de log crescentes em /var/log esgotem o disco de um servidor Linux, qual utilitário nativo é responsável por rotacionar, comprimir e expurgar arquivos de log antigos conforme políticas diárias/semanais ou por tamanho?',
    options: [
      'logrotate (configurado em /etc/logrotate.conf e /etc/logrotate.d/).',
      'crontab -r para apagar o diretório /var/log inteiro diariamente.',
      'iptables -F para compactar logs binários do journald.',
      'sshd_config com parâmetro MaxLogSize 0.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. logs (/var/log, journald, rsyslog, logrotate) (Eixo 11. LINUX). O logrotate gerencia rotação, compressão e retenção de arquivos de log.',
    correctAnalysis:
      'O logrotate automatiza a rotação periódica ou baseada em tamanho de arquivos em /var/log, comprimindo versões anteriores (gzip), recriando o arquivo ativo e sinalizando daemons (postrotate) para evitar esgotamento de disco.',
    optionErrors: {
      1: 'Incorreta: crontab -r remove todo o arquivo de tarefas agendadas do usuário atual (não rotaciona logs).',
      2: 'Incorreta: iptables -F limpa regras de firewall netfilter em memória, sem relação com rotação de logs.',
      3: 'Incorreta: sshd_config configura o servidor OpenSSH e não possui diretiva MaxLogSize para gerir /var/log.'
    }
  },

  // ==================== EIXO 12: 12. Automação. (10 questões) ====================
  {
    id: 'sarah-34',
    editalItemId: '12.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre conteinerização com Docker e orquestração em Kubernetes na esteira DevOps/IaC, qual afirmação descreve com precisão técnica a arquitetura de execução de containers e a menor unidade implantável no cluster Kubernetes?',
    options: [
      'Containers Docker sobem um kernel Linux dedicado por instância sobre um hipervisor Tipo 1, e a menor unidade implantável do Kubernetes é o Node.',
      'Containers Docker compartilham o kernel do host usando namespaces (isolamento) e cgroups (limites de recursos), enquanto no Kubernetes a menor unidade implantável e escalável é o Pod.',
      'O Kubernetes armazena o estado desejado do cluster exclusivamente em arquivos CSV locais de cada kubelet, dispensando o etcd.',
      'Infraestrutura como Código (IaC) com Docker exige compilação manual de módulos do kernel a cada execução de pipeline.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Noções de DevOps, infraestrutura como código e conteinerização de aplicações (Docker e Kubernetes) (Eixo 12. Automação).',
    correctAnalysis:
      'Containers isolam processos, rede e sistema de arquivos via namespaces e limitam CPU/RAM via cgroups compartilhando o kernel do host; no Kubernetes, o objeto atômico implantável é o Pod (1 ou mais containers).',
    optionErrors: {
      0: 'Incorreta: quem sobe kernel próprio por convidado é uma VM sobre hipervisor, e Node é a máquina worker (a menor unidade é o Pod).',
      2: 'Incorreta: o estado do cluster Kubernetes é persistido no banco chave-valor distribuído etcd no Control Plane.',
      3: 'Incorreta: IaC define infraestrutura declarativamente por código versionado, sem exigir compilação manual de kernel.'
    }
  },
  {
    id: 'sarah-35',
    editalItemId: '12.2.8',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao desenvolver scripts robustos de automação em PowerShell e Bash consumindo APIs REST com payloads JSON, qual combinação garante captura adequada de exceções não terminativas no PowerShell e encerramento seguro em erros de pipeline no Bash?',
    options: [
      'No PowerShell usar bloco try/catch com -ErrorAction Stop (ou $ErrorActionPreference = "Stop"); no Bash declarar set -euo pipefail.',
      'No PowerShell usar apenas On Error Resume Next; no Bash usar set +e para ignorar códigos de saída diferentes de zero.',
      'No PowerShell converter exceções com ConvertTo-Csv; no Bash redirecionar stdout para /dev/null sem validar exit codes.',
      'No PowerShell usar WinRM na porta 22 e no Bash substituir jq por arquivos de registro .reg.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. PowerShell, Bash, APIs REST, JSON e tratamento de erros (Eixo 12. Automação). Try/catch no PowerShell só captura erros terminativos; no Bash, set -euo pipefail aborta em erros, variáveis não definidas e falhas em pipes.',
    correctAnalysis:
      'Em PowerShell, blocos try/catch exigem erros terminativos (-ErrorAction Stop); em Bash, set -e (erro), -u (variável não definida) e -o pipefail (falha em qualquer estágio do pipe) evitam execuções silenciosamente quebradas.',
    optionErrors: {
      1: 'Incorreta: On Error Resume Next é sintaxe legada de VBScript, e set +e desabilita a interrupção automática por erro no Bash.',
      2: 'Incorreta: ConvertTo-Csv serializa objetos para CSV (não trata exceções) e descartar stdout não trata códigos de saída.',
      3: 'Incorreta: WinRM usa portas 5985/5986 (não 22 do SSH) e Linux não utiliza arquivos de registro .reg do Windows.'
    }
  },
  {
    id: 'sarah-36',
    editalItemId: '12.2.3',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um script em PowerShell utiliza Invoke-RestMethod para integrar um inventário de ativos a uma API REST. Considerando semântica HTTP e manipulação de dados estruturados, qual comportamento está correto?',
    options: [
      'Requisições POST são idempotentes por definição para consultas somente leitura e retornam status 404 quando criam um novo recurso.',
      'Requisições GET realizam leitura segura/idempotente retornando faixa 2xx (ex: 200 OK), enquanto falhas de autenticação/autorização retornam 401/403 e erros internos do servidor retornam 5xx.',
      'Invoke-RestMethod exige conversão manual prévia de JSON usando awk/sed porque não realiza parsing automático de respostas JSON.',
      'Arquivos CSV são obrigatoriamente hierárquicos com objetos aninhados em árvore, ao contrário do formato JSON que é estritamente tabular.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. PowerShell, APIs REST, JSON, CSV (Eixo 12. Automação). GET lê recursos (2xx), 401/403 sinalizam erro de autenticação/autorização e 5xx indica erro do servidor.',
    correctAnalysis:
      'Na arquitetura REST, GET é seguro e idempotente (200 OK), códigos 4xx indicam erros do cliente (401 Unauthorized, 403 Forbidden) e 5xx erros no servidor; Invoke-RestMethod já desserializa respostas JSON em objetos PowerShell.',
    optionErrors: {
      0: 'Incorreta: POST não é idempotente e cria recursos (tipicamente retornando 201 Created), enquanto 404 significa Not Found.',
      2: 'Incorreta: Invoke-RestMethod converte automaticamente respostas application/json em objetos PowerShell manipuláveis por propriedades.',
      3: 'Incorreta: os formatos foram invertidos — JSON suporta estruturas hierárquicas aninhadas e CSV é plano/tabular.'
    }
  },
  {
    id: 'sarah-12-04',
    editalItemId: '12.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um script de automação Shell/Bash usado por um pipeline de deploy, um comando de verificação falhou, porém o próximo passo precisa saber exatamente se a execução anterior teve sucesso. Qual convenção de código de saída (exit code) e variável especial captura esse resultado?',
    options: [
      'Exit code 0 indica falha crítica e exit code 1 indica sucesso; o resultado é lido em $0.',
      'Exit code 0 indica sucesso e qualquer valor inteiro diferente de 0 (1–255) indica erro; em Bash, a variável especial $? guarda o exit code do último comando executado.',
      'Scripts de automação nunca utilizam laços ou condicionais para checar códigos de saída, dependendo apenas de stderr.',
      'O código de saída 200 OK é o padrão de sucesso de processos locais POSIX.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Lógica de programação aplicada a scripts (Eixo 12. Automação). Convenção POSIX: 0 = sucesso; != 0 = erro; $? retorna o status do último comando.',
    correctAnalysis:
      'Em sistemas POSIX/Linux, um processo bem-sucedido retorna exit code 0 e qualquer falha retorna valor diferente de 0; em scripts Bash, $? permite testar condicionalmente o resultado da última execução.',
    optionErrors: {
      0: 'Incorreta: o sentido está invertido (0 é sucesso) e $0 contém o nome/caminho do próprio script executado, não o exit code.',
      2: 'Incorreta: verificar códigos de retorno com condicionais (if/exit) é pilar essencial de scripts confiáveis.',
      3: 'Incorreta: 200 OK é código de status do protocolo HTTP, não exit code POSIX de sucesso (que é 0).'
    }
  },
  {
    id: 'sarah-12-05',
    editalItemId: '12.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um administrador precisa ler um arquivo CSV de novos servidores (Import-Csv), filtrar apenas os hosts com Ambiente igual a "Producao" e exportar a saída estruturada para JSON no PowerShell. Qual pipeline respeita a manipulação orientada a objetos do PowerShell?',
    options: [
      "Import-Csv servidores.csv | Where-Object { $_.Ambiente -eq 'Producao' } | ConvertTo-Json -Depth 4 | Set-Content prod.json",
      "cat servidores.csv | grep Producao | awk -F';' '{print $1}' | Export-Registry prod.json",
      'Import-Csv servidores.csv | Select-String == Producao | ConvertFrom-Json | Out-Null',
      'Get-Content servidores.csv | Format-Table | ConvertTo-Json > prod.json'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. PowerShell (objetos, ConvertTo-Json, Import-Csv) (Eixo 12. Automação). PowerShell trafega objetos estruturados pelo pipe e exige -Depth em ConvertTo-Json para objetos aninhados.',
    correctAnalysis:
      'Import-Csv transforma cada linha em objeto com propriedades nomeadas pelo cabeçalho; Where-Object filtra pela propriedade Ambiente; ConvertTo-Json serializa os objetos para JSON (com -Depth para profundidade) antes de gravar.',
    optionErrors: {
      1: 'Incorreta: trata texto bruto sem objetos PowerShell e Export-Registry não é cmdlet válido para gerar JSON.',
      2: 'Incorreta: ConvertFrom-Json faz o caminho inverso (JSON para objeto) e Out-Null descarta toda a saída.',
      3: 'Incorreta: Format-Table converte objetos em objetos internos de formatação de tela, quebrando a serialização subsequente com ConvertTo-Json.'
    }
  },
  {
    id: 'sarah-12-06',
    editalItemId: '12.2.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um servidor Linux sem interface gráfica, o script Bash precisa consultar um endpoint REST interno via HTTPS (autenticado por token Bearer) e extrair apenas o campo .status de cada item de um array JSON retornado. Qual combinação de ferramentas nativas de linha de comando realiza essa tarefa diretamente?',
    options: [
      "curl -fsSL -H 'Authorization: Bearer $TOKEN' https://api.interna/health | jq -r '.[].status'",
      'ping -c 1 https://api.interna/health | sed s/json/csv/',
      "Invoke-WebRequest -UseBasicParsing | grep -o 'status' em formato binário ASN.1",
      "wget --ftp-only https://api.interna/health | awk '{print $NF}' sem parser JSON"
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Bash, APIs REST e JSON (curl, jq) (Eixo 12. Automação). curl realiza chamadas HTTP/HTTPS com headers; jq faz parsing e consulta estruturada em JSON.',
    correctAnalysis:
      'curl -fsSL realiza requisição HTTPS falhando em erros HTTP (-f) e seguindo redirecionamentos (-L) com cabeçalho Authorization Bearer, enquanto jq -r extrai campos JSON sem aspas.',
    optionErrors: {
      1: 'Incorreta: ping opera em ICMP com hostname/IP, não consulta URLs HTTPS nem retorna payloads JSON.',
      2: 'Incorreta: Invoke-WebRequest é cmdlet PowerShell e JSON não é formato binário ASN.1.',
      3: 'Incorreta: --ftp-only restringe ao protocolo FTP e usar awk em JSON quebra facilmente com mudanças de indentação/quebras de linha.'
    }
  },
  {
    id: 'sarah-12-07',
    editalItemId: '12.2.6',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No agendamento de rotinas de manutenção em servidores Linux via crontab, uma expressão foi escrita como "30 2 * * 1-5 /usr/local/bin/limpa_temp.sh". Quando esse script será executado exatamente?',
    options: [
      'A cada 30 minutos nas segundas-feiras do mês de fevereiro.',
      'Às 02h30 da manhã, todos os dias úteis (de segunda a sexta-feira).',
      'No dia 30 de fevereiro, às 02h00, nos anos 1 a 5.',
      'A cada 2 horas e 30 minutos aos sábados e domingos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. tarefas agendadas (cron, systemd timers, Task Scheduler) (Eixo 12. Automação). Sintaxe cron: minuto(30) hora(2) dia-do-mês(*) mês(*) dia-da-semana(1-5).',
    correctAnalysis:
      'Os cinco campos da linha cron representam respectivamente minuto (30), hora (2), dia do mês (*), mês (*) e dia da semana (1-5 = segunda a sexta), executando portanto às 02:30 de segunda a sexta-feira.',
    optionErrors: {
      0: 'Incorreta: 30 no primeiro campo indica minuto exato 30 (não intervalo */30), e 2 indica 02h (não fevereiro).',
      2: 'Incorreta: os campos dia do mês e mês estão com asterisco (*), não 30 e 2.',
      3: 'Incorreta: 1-5 representa segunda a sexta (sábado e domingo são 6 e 0/7).'
    }
  },
  {
    id: 'sarah-12-08',
    editalItemId: '12.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na automação e execução remota multiplataforma usando Ansible, PowerShell Remoting (WinRM) e SSH, qual característica diferencia o modelo padrão do Ansible para gerenciar servidores Linux e Windows?',
    options: [
      'O Ansible exige instalação obrigatória de um agente proprietário em Python rodando como daemon residente em cada host Windows e Linux.',
      'O Ansible opera de forma agentless (sem agente residente nos alvos), conectando-se via SSH (TCP 22) em hosts Linux e via WinRM (TCP 5985/5986) em hosts Windows, com foco em idempotência.',
      'O PowerShell Remoting (Enter-PSSession / Invoke-Command) utiliza exclusivamente o protocolo Telnet em texto claro na porta 23.',
      'Scripts Ansible não permitem execução remota paralela e alteram arquivos apenas via FTP anônimo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. execução remota (WinRM, Enter-PSSession, SSH, Ansible) (Eixo 12. Automação). Ansible é agentless (SSH para Linux, WinRM para Windows) e idempotente.',
    correctAnalysis:
      'O Ansible dispensa agentes residentes nos servidores gerenciados: executa playbooks idempotentes a partir do nó de controle usando SSH para Linux/rede e WinRM (5985 HTTP / 5986 HTTPS) para Windows.',
    optionErrors: {
      0: 'Incorreta: uma das principais características do Ansible é justamente ser agentless (ao contrário de soluções baseadas em agente contínuo).',
      2: 'Incorreta: PowerShell Remoting usa WinRM sobre HTTP/HTTPS (5985/5986) ou SSH, nunca Telnet porta 23.',
      3: 'Incorreta: o Ansible executa tarefas em paralelo em dezenas/centenas de hosts (parâmetro forks) sobre canais cifrados SSH/WinRM.'
    }
  },
  {
    id: 'sarah-12-09',
    editalItemId: '12.2.4',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao integrar dois sistemas por arquivos JSON e CSV em scripts de automação, qual diferença estrutural e armadilha de parsing deve ser considerada pelo engenheiro de infraestrutura?',
    options: [
      'JSON suporta nativamente tipos (números, booleanos, nulos, arrays e objetos aninhados) e exige UTF-8 válido, enquanto CSV é plano e sofre quebras caso campos textuais contenham vírgulas/ponto e vírgula sem aspas adequadas.',
      'CSV preserva nativamente árvores hierárquicas multinível e tipos booleanos estritos sem necessidade de cabeçalho.',
      'JSON não aceita arrays nem objetos aninhados, limitando-se a colunas fixas separadas por tabulação.',
      'Arquivos JSON comentados com // são válidos segundo a especificação oficial RFC 8259.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. JSON e CSV (Eixo 12. Automação). JSON é hierárquico e tipado; CSV é tabular e suscetível a erros de delimitador e encoding se mal escapado.',
    correctAnalysis:
      'JSON representa nativamente objetos aninhados, arrays e tipos primitivos em UTF-8; já o CSV é estritamente tabular (texto plano) e requer atenção com delimitadores (; vs ,), escape de aspas e codificação (UTF-8 vs ANSI).',
    optionErrors: {
      1: 'Incorreta: CSV é formato tabular simples em texto e não distingue tipos nem hierarquias nativamente.',
      2: 'Incorreta: JSON suporta plenamente arrays e objetos aninhados em múltiplos níveis.',
      3: 'Incorreta: a especificação oficial do JSON (RFC 8259) não permite comentários // ou /* */.'
    }
  },
  {
    id: 'sarah-12-10',
    editalItemId: '12.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um ambiente de automação de contas no Active Directory via lote CSV exportado pelo RH no Brasil (delimitador ponto e vírgula ";" e caracteres acentuados em UTF-8), qual parâmetro de importação evita erro de coluna única e corrupção de acentos no PowerShell?',
    options: [
      'Import-Csv colaboradores.csv -Delimiter ";" -Encoding UTF8.',
      'Import-Csv colaboradores.csv -Delimiter ":" -Encoding ASCII.',
      'ConvertFrom-Json colaboradores.csv -Depth 1.',
      'Get-Content colaboradores.csv | Remove-Item.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. CSV e PowerShell (Eixo 12. Automação). Delimitador ";" (padrão regional PT-BR) e -Encoding UTF8 preservam colunas e acentuação corretamente.',
    correctAnalysis:
      'Por padrão, Import-Csv espera vírgula (","); em arquivos gerados no padrão brasileiro com ponto e vírgula e acentuação, especificar -Delimiter ";" e -Encoding UTF8 garante o parsing exato de cada coluna e caractere.',
    optionErrors: {
      1: 'Incorreta: delimitador ":" juntaria toda a linha em uma coluna e ASCII corromperia caracteres acentuados.',
      2: 'Incorreta: ConvertFrom-Json é incapaz de interpretar um arquivo tabular CSV.',
      3: 'Incorreta: Remove-Item apagaria o arquivo CSV após ler seu conteúdo.'
    }
  }
]);
