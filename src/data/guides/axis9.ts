import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_9: Record<string, StudyGuide> = {
  '9.1.1': {
    itemId: '9.1.1',
    highYieldSummary: [
      'Servidores Web e de Aplicação (Papéis Distintos): servidores web/reverse proxy (Nginx, Apache HTTP Server, IIS) atendem conexões HTTP/HTTPS de clientes, servem conteúdo estático, comprimem (gzip/brotli) e fazem proxy reverso; servidores de aplicação (Apache Tomcat, JBoss/WildFly, IIS Worker/Kestrel) executam lógica dinâmica de negócio (Java Servlets, .NET, APIs) e pools de conexão com banco de dados.',
      'Proxy Direto (Forward Proxy) vs Proxy Reverso (Reverse Proxy): Forward Proxy fica junto aos USUÁRIOS internos para sair à internet (cache, filtro de URL, anonimização de saída); Reverse Proxy fica na frente dos SERVIDORES internos protegendo sua topologia real, terminando TLS, fazendo cache e balanceando requisições.',
      'Modelos de Concorrência (Process/Thread vs Event-Driven): Apache clássico prefork/worker dedica processos ou threads por conexão (consumo maior de RAM sob milhares de conexões ociosas); Nginx e HAProxy usam arquitetura assíncrona orientada a eventos (event-loop non-blocking), suportando altíssima concorrência (problema C10K) com pouca memória.',
      'Noções Essenciais de Administração: configurar Virtual Hosts (múltiplos domínios por IP via cabeçalho Host e SNI), pools de trabalhadores (Application Pools no IIS reciclados isoladamente), limites de upload/timeouts (keepalive, proxy_read_timeout), rotação de logs de acesso/erro e hardening removendo banners de versão (`ServerTokens Prod`).',
      'Desacoplamento de Estado (Stateless): servidores de aplicação atrás de balanceadores devem evitar armazenar sessões apenas na memória local do worker; recomenda-se externalizar estado de sessão em cache distribuído (Redis) ou tokens assinados (JWT) para permitir escalabilidade horizontal transparente.'
    ],
    technicalReference: [
      'Nginx / HAProxy (Event-driven assíncrono, ideal reverse proxy & alta concorrência) | IIS (Windows App Pools / Kestrel) | Apache Tomcat (Container Java Servlet)',
      'Virtual Hosting HTTPS: exige SNI (Server Name Indication) no ClientHello TLS para escolher o certificado certo antes de decifrar o cabeçalho HTTP Host.'
    ],
    examTraps: [
      'Proxy Reverso representa e protege os SERVIDORES perante clientes externos; Forward Proxy representa os CLIENTES internos acessando servidores externos.',
      'Reiniciar ou travar um único Application Pool isolado no IIS não derruba outros sites hospedados em Application Pools separados.',
      'Armazenar arquivos enviados por usuários (uploads) ou sessões localmente no disco/RAM de apenas 1 servidor Tomcat atrás de balanceador causa perda de sessão e erros 404 intermitentes no próximo clique do usuário.'
    ],
    keyTerms: ['Nginx / Apache / IIS / Tomcat', 'Reverse Proxy vs Forward Proxy', 'Event-Driven vs Thread-per-Conn', 'Virtual Host / SNI', 'Aplicação Stateless']
  },
  '9.1.2': {
    itemId: '9.1.2',
    highYieldSummary: [
      'Algoritmos Estáticos e Dinâmicos de Balanceamento: Round Robin (alterna sequencialmente — simples, ignora carga real), Weighted Round Robin (distribui proporcionalmente a pesos atribuídos a hardware heterogêneo), Least Connections (envia para o servidor com MENOR número de sessões ativas — ideal para requisições de duração variável), Least Response Time e IP/URL Hash (determinístico para afinidade ou cache).',
      'Failover em Balanceadores de Carga: além de distribuir carga entre servidores do pool (removendo automaticamente um backend falho via health check), o próprio par de balanceadores (ADCs) deve operar em failover (ativo-standby via VRRP/CARP ou ativo-ativo) evitando que o balanceador vire ponto único de falha (SPOF).',
      'Replicação de Estado e Sincronização de Sessões: em clusters ativo-passivo de balanceadores/firewalls, as tabelas de conexões ativas (state table) e chaves de persistência são sincronizadas continuamente entre o nó ativo e o reserva (State Sync / Stateful Failover) para que conexões TCP em andamento não caiam durante o failover.',
      'Persistência de Sessão (Session Affinity / Sticky Sessions): garante que requisições subsequentes do mesmo usuário sejam encaminhadas ao mesmo servidor backend durante a sessão; necessária em aplicações legadas stateful, embora reduza a uniformidade da distribuição de carga.',
      'Drain Mode (Graceful Shutdown): antes de aplicar patches ou reiniciar um servidor de aplicação, coloca-se o nó em modo Drain no pool — novas conexões são direcionadas aos demais nós enquanto conexões já abertas concluem graciosamente sem erro HTTP 502/503 para o usuário.'
    ],
    technicalReference: [
      'Algoritmos: Round Robin (sequencial) | Weighted (pesos distintos) | Least Connections (menor nº sessões ativas — melhor quando sessões têm tempos desiguais) | Hash (afinidade/cache)',
      'Manutenção sem indisponibilidade: Drain Mode (recusa novas conexões, mantém sessões ativas até expirarem) + Stateful Failover.'
    ],
    examTraps: [
      'Round Robin NÃO avalia se um servidor está lento ou preso em consultas pesadas; para conexões longas ou assimétricas, Least Connections (ou Least Response Time) equilibra muito melhor a carga.',
      'Failover sem replicação de estado (Stateful Sync) entre os dois balanceadores derruba todas as conexões TCP abertas no instante da troca de ativo para standby.',
      'Persistência por Source IP (IP Hash) falha ao equilibrar quando milhares de usuários saem atrás de um único NAT corporativo (CGNAT/Proxy) com o mesmo IP público.'
    ],
    keyTerms: ['Round Robin / Weighted', 'Least Connections', 'Failover / State Sync', 'Persistência (Sticky Session)', 'Drain Mode']
  },
  '9.1.3': {
    itemId: '9.1.3',
    highYieldSummary: [
      'Escalabilidade Vertical (Scale-Up) vs Horizontal (Scale-Out): Vertical adiciona mais CPU, RAM e disco em uma única máquina (simples, sem alterar código, porém esbarra em limite físico de hardware e mantém SPOF); Horizontal adiciona múltiplos nós menores atrás de um balanceador de carga (virtualmente ilimitada e tolerante a falhas de nó).',
      'Topologia Ativo-Passivo (Active-Standby): um nó processa 100% do tráfego enquanto o segundo permanece em espera monitorando via heartbeat; em falha, o passivo assume o VIP (Virtual IP) via VRRP/Gratuitous ARP — simplicidade operacional e previsibilidade de capacidade (garante 100% mesmo com 1 nó caído), porém mantém 50% do hardware ocioso.',
      'Topologia Ativo-Ativo (Active-Active): todos os nós processam tráfego simultaneamente, aproveitando 100% dos recursos instalados; exige dimensionamento cuidadoso (N+1) para que, se um nó cair em horário de pico (> 50% de uso em par de 2 nós), o sobrevivente suporte absorver toda a carga sem colapsar por efeito cascata.',
      'Protocolo VRRP (Virtual Router Redundancy Protocol — RFC 5798): protocolo padrão aberto (IP protocol 112, multicast 224.0.0.18) que compartilha um IP virtual (VIP) entre roteadores/balanceadores/firewalls usando eleições por maior prioridade (1–254 configurável, padrão 100; 255 reservado ao dono real do IP e 0 indica renúncia/shutdown do Master para failover imediato).',
      'Balanceamento Global / Multi-Site (GSLB): estende a alta disponibilidade entre data centers geograficamente separados usando DNS inteligente com health checks ativos para direcionar usuários ao datacenter ativo mais próximo ou disponível em caso de queda total de site.'
    ],
    technicalReference: [
      'Scale-Up (Vertical: hardware maior no mesmo nó, limite físico) vs Scale-Out (Horizontal: múltiplos nós paralelos atrás de VIP)',
      'VRRP (IP Proto 112, Multicast 224.0.0.18): Maior prioridade vence eleição de Master (255 = dono real do IP) | Ativo-Ativo exige folga <= 50% por nó em par duplo.'
    ],
    examTraps: [
      'Pegadinha clássica de capacidade em par Ativo-Ativo: rodar dois balanceadores/servidores a 80% de CPU cada em modo Ativo-Ativo NÃO é tolerante a falhas — quando um cair, o sobrevivente receberá 160% da capacidade e entrará em colapso.',
      'No VRRP (e HSRP), quem vence a eleição de Master/Active é a MAIOR prioridade (ao contrário do Spanning Tree STP, onde vence a MENOR prioridade!).',
      'Escalabilidade horizontal de servidores de aplicação não resolve sozinha o gargalo se todos continuarem batendo em um único banco de dados sem réplicas de leitura ou cache.'
    ],
    keyTerms: ['Scale-Up vs Scale-Out', 'Ativo-Ativo vs Ativo-Passivo', 'VRRP (Proto 112)', 'GSLB', 'Capacidade N+1']
  },
  '9.2.1': {
    itemId: '9.2.1',
    highYieldSummary: [
      'ADC (Application Delivery Controller — A10 Networks, F5, Citrix) e HAProxy: evoluíram dos balanceadores L4 simples para plataformas completas de entrega de aplicações com aceleração, offloading TLS, compressão HTTP, firewall de aplicação web (WAF) integrado e manipulação avançada de cabeçalhos/rotas.',
      'Balanceamento em Camada 4 (L4 — Transporte TCP/UDP): toma decisões olhando apenas IP de origem/destino e porta TCP/UDP sem inspecionar o conteúdo HTTP nem encerrar a conexão TLS no ADC; oferece latência mínima e altíssimo throughput, porém sem roteamento por URL ou cookies.',
      'Balanceamento em Camada 7 (L7 — Aplicação HTTP/HTTPS): o balanceador atua como proxy completo (terminando a conexão TCP/TLS do cliente e abrindo nova conexão ao backend), permitindo roteamento por URL/caminho (`/api` vs `/static`), cabeçalhos `Host`, métodos HTTP, inserção de cookies de persistência e proteção WAF.',
      'Arquitetura HAProxy (`frontend` -> `acl` -> `backend`): no HAProxy, `global` e `defaults` definem parâmetros do processo/timeouts; `frontend` escuta no IP:porta (VIP) e aplica regras `acl` para escolher dinamicamente qual `backend` (pool de servidores `server` + algoritmo `balance` + `option httpchk`) atenderá a requisição.',
      'Arquitetura A10 (ACOS — Virtual Server / Service Group): na plataforma A10 Thunder, o `slb virtual-server` (VIP + portas virtuais) vincula-se a `slb service-group` (pool de membros/servidores reais), usando templates (`persist`, `http`, `client-ssl`, `server-ssl`) e scripts aFleX para regras L7 customizadas.'
    ],
    technicalReference: [
      'L4 (TCP/UDP): inspeciona IP:Porta, sem visibilidade de URL/Cookie HTTP, máxima vazão | L7 (HTTP/HTTPS): Proxy completo, roteamento por URL/Host/Cookie, SSL Offload',
      'Mapeamento A10 <-> HAProxy: Virtual Server <-> frontend | Service Group <-> backend | Member <-> server | Health Monitor <-> option httpchk.'
    ],
    examTraps: [
      'NÃO é possível fazer roteamento baseado em URL (`/pagamentos`), ler cookies HTTP ou inserir cabeçalho `X-Forwarded-For` operando exclusivamente em balanceamento L4 puro (sem decifrar/interpretar HTTP L7).',
      'Em balanceamento L7 com HTTPS, o balanceador obrigatoriamente precisa do certificado/chave privada do domínio (SSL Offloading) para ler URL e cabeçalhos HTTP antes de escolher o backend.',
      'A10 e HAProxy suportam TANTO modo L4 (TCP) quanto modo L7 (HTTP) — a escolha por Virtual Port define o nível de inspeção.'
    ],
    keyTerms: ['ADC (A10 / HAProxy)', 'Balanceamento L4 vs L7', 'Frontend / Backend', 'Virtual Server / Service Group', 'Roteamento por URL/Host']
  },
  '9.2.2': {
    itemId: '9.2.2',
    highYieldSummary: [
      'VIP (Virtual IP / Virtual Server): endereço IP lógico publicado no DNS (ex.: `portal.empresa.gov.br -> 200.x.x.10`) que recebe todo o tráfego dos clientes e representa abstratamente um conjunto inteiro de servidores reais ocultos nos bastidores.',
      'VPort (Virtual Port / Serviço): cada VIP pode escutar em múltiplas portas virtuais (ex.: VIP:80 redirecionando HTTP -> HTTPS e VIP:443 servindo a aplicação), traduzindo opcionalmente para outra porta nos servidores reais (ex.: VIP:443 -> Pool servidores na porta TCP 8080).',
      'Alta Disponibilidade do VIP (GARP / VRRP / BGP Anycast): em clusters HA, o VIP fica ativo em apenas um ADC Master (ou anunciado via BGP ECMP em arquiteturas ativas); em caso de failover, o novo Master envia Gratuitous ARP (GARP) para atualizar instantaneamente a tabela MAC/ARP dos switches vizinhos.',
      'Desacoplamento Operacional e Manutenção: clientes conhecem apenas o VIP estável via DNS; administradores podem adicionar, remover, atualizar ou trocar IPs privados dos servidores do pool atrás do VIP sem nunca alterar registros DNS nem esperar expiração de TTL.',
      'Segurança e Redução de Superfície de Ataque: os IPs reais dos servidores de aplicação permanecem em redes internas privadas sem exposição direta à internet (somente o VIP fica acessível na DMZ/borda).'
    ],
    technicalReference: [
      'VIP (Virtual IP): IP único divulgado no DNS | VPort: porta lógica exposta (ex.: 443) mapeada para qualquer porta real no pool (ex.: 8080)',
      'Failover de VIP em L2: envio imediato de Gratuitous ARP (GARP) pelo nó promovido a Master para atualizar CAM/ARP.'
    ],
    examTraps: [
      'O VIP NÃO precisa estar na mesma porta TCP dos servidores do pool — é comum receber na porta 443 HTTPS no VIP e repassar em HTTP porta 8080 (ou 8443) no backend.',
      'Alterar membros do pool atrás de um VIP tem efeito IMEDIATO (zero propagação de TTL DNS), ao contrário de Round-Robin DNS puro onde clientes continuam batendo no IP caído enquanto o cache DNS não expira.',
      'Se o cluster de balanceadores falhar ao enviar Gratuitous ARP após failover do VIP, o switch/roteador continua enviando tráfego para o MAC morto do nó antigo até o timeout da tabela ARP.'
    ],
    keyTerms: ['VIP (Virtual IP)', 'Virtual Server / VPort', 'Gratuitous ARP (GARP)', 'Tradução de Porta', 'Desacoplamento DNS']
  },
  '9.2.3': {
    itemId: '9.2.3',
    highYieldSummary: [
      'Pool / Service Group / Backend: agrupamento lógico de servidores reais (Real Servers / Members, identificados por IP:porta) que entregam a mesma aplicação e recebem requisições roteadas a partir de um VIP/Frontend.',
      'Atributos por Membro (Weight, Max-Connections e Slow-Start): `weight` pondera máquinas com capacidades distintas (ex.: servidor novo recebe peso 2 e antigo peso 1); `maxconn` protege o backend contra sobrecarga enfileirando ou rejeitando picos extremos; `slow-start` (ramp-up) aumenta gradualmente o tráfego para um servidor recém-ligado aquecendo seu cache/JIT.',
      'Priority Group Activation / Backup Server: permite definir servidores de reserva (`backup` no HAProxy ou grupos de prioridade no A10) que só entram em operação se a quantidade de servidores principais saudáveis cair abaixo de um limiar mínimo configurado.',
      'Múltiplos Pools por um Único VIP (Content Switching): em L7, um único VIP pode despachar `/app` para o Pool A (Tomcat), `/static` para o Pool B (Nginx) e `/api/v2` para o Pool C (microsserviços), mantendo URL pública unificada.',
      'Estados Administrativos do Membro no Pool: Enabled (ativo), Disabled/Force Offline (derruba imediatamente até sessões existentes) e Drain/Graceful Offline (mantém sessões ativas, mas recusa novas conexões para manutenção planejada).'
    ],
    technicalReference: [
      'Parâmetros de Membro: Weight (peso proporcional) | Max-Connections (proteção contra exaustão) | Slow-Start (aquecimento gradual) | Backup (nó de reserva)',
      'Estados operacionais: Up/Enabled | Drain (sem novas sessões) | Down (falhou health check) | Disabled (offline imediato).'
    ],
    examTraps: [
      'Ativar de uma só vez 100% da carga sobre um servidor Java/Tomcat recém-iniciado (sem `slow-start`) costuma travar a aplicação por cold cache / JIT compilation e derrubar o health check novamente.',
      'Diferença entre Disable e Drain: Disable corta o serviço rapidamente gerando erro aos usuários ativos; Drain espera as sessões correntes terminarem graciosamente.',
      'Um membro só pode pertencer ao mesmo pool se entregar exatamente a mesma funcionalidade/conteúdo de aplicação (ou sofrerá erros inconsistentes para o cliente).'
    ],
    keyTerms: ['Pool / Service Group', 'Weight & Max-Connections', 'Slow-Start', 'Priority Group / Backup Server', 'Content Switching L7']
  },
  '9.2.4': {
    itemId: '9.2.4',
    highYieldSummary: [
      'Health Checks (Monitores de Saúde Ativos): sondas periódicas enviadas pelo balanceador aos membros do pool para retirar automaticamente servidores defeituosos da rotação antes que clientes recebam erro e reintegrá-los apenas após recuperação estável.',
      'Tipos e Profundidade de Health Check: ICMP (ping — fraco: servidor responde ping mesmo com Apache/Tomcat travado!), TCP Half-Open/Connect (testa apenas porta TCP aberta, ex.: SYN -> SYN-ACK), HTTP/HTTPS L7 (faz GET `/health` verificando código HTTP 200 OK e opcionalmente uma string esperada no corpo JSON/HTML indicando que o banco também está acessível).',
      'Parâmetros Críticos (Interval, Timeout, Rise e Fall): `interval` (frequência entre checagens, ex.: 5s), `timeout` (tempo limite de espera da resposta — DEVE ser menor que o interval), `fall` / `retries` (quantas falhas seguidas marcam o nó como DOWN evitando flapping, ex.: 3) e `rise` (quantos sucessos seguidos marcam como UP novamente, ex.: 2).',
      'Passive Health Checks (In-Band): observam falhas reais do tráfego dos clientes (ex.: 3 erros TCP/HTTP 5xx consecutivos) para ejetar temporariamente um servidor instável entre ciclos do monitor ativo.',
      'Cuidado com Cascata de Falhas ("Thundering Herd" / Health Check Pesado): um endpoint `/health` muito custoso (executando queries pesadas no banco a cada segundo de múltiplos ADCs) pode derrubar a própria aplicação; além disso, se TODOS os servidores falharem no health check, deve existir página estática de fallback/manutenção ou ação de `fail-open`/desvio.'
    ],
    technicalReference: [
      'Hierarquia de precisão: ICMP (L3) < TCP Port Check (L4) < HTTP GET + Status 200 + Content Match (L7, padrão recomendado)',
      'Regra de ouro: Timeout < Interval | Tempo de detecção = Interval × Fall (ex.: 5s × 3 falhas = 15s para remover nó falho).'
    ],
    examTraps: [
      'Health Check apenas ICMP ou TCP (porta 80/443 aberta) deixa o servidor travado recebendo clientes e devolvendo tela branca ou HTTP 500 Internal Server Error — o correto em aplicações web é HTTP L7 validando status 200 e resposta esperada.',
      'Configurar `timeout` MAIOR ou igual ao `interval` causa sobreposição de sondas pendentes e esgotamento de sockets no balanceador.',
      'Se a checagem L7 verificar uma dependência compartilhada (ex.: o próprio banco central) e o banco piscar por 2s, todos os servidores web falharão no health check simultaneamente deixando 0 nós no pool.'
    ],
    keyTerms: ['Health Check L4 vs L7', 'Interval / Timeout', 'Rise & Fall (Histerese)', 'Content Match HTTP 200', 'Passive Check']
  },
  '9.2.5': {
    itemId: '9.2.5',
    highYieldSummary: [
      'Persistência por Origem (Source IP Affinity): grava numa tabela de estado do ADC que o IP de origem X vai sempre para o Servidor Y por determinado timeout; simples e funciona tanto em L4 quanto em L7, mas quebra distribuição quando muitos clientes compartilham o mesmo IP de saída (NAT corporativo, CGNAT de operadora móvel ou proxy).',
      'Persistência por Cookie HTTP (Cookie Insert / Rewrite / Passive — L7): o balanceador insere um cookie exclusivo na primeira resposta `Set-Cookie` ao navegador (ex.: `SERVERID=srv02`) ou lê o `JSESSIONID` gerado pelo backend; resolve o problema de NAT compartilhado mantendo afinidade individual por navegador/sessão.',
      'Vantagens do Cookie Insert vs Source IP: cada usuário por trás de um NAT corporativo único recebe seu próprio cookie de afinidade e é distribuído equilibradamente entre todos os servidores do pool.',
      'Persistência SSL Session ID (L4/TLS legada): atrela conexão pelo ID da sessão TLS — falha com navegadores modernos que renovam IDs rapidamente ou usam TLS Session Tickets/TLS 1.3.',
      'Impacto no Failover e Manutenção: se o servidor fixado pela persistência cair (marcado DOWN pelo health check), o balanceador deve imediatamente quebrar a persistência antiga e redirecionar aquele usuário para um nó saudável (forçando novo login se o estado não era replicado em Redis/cluster).'
    ],
    technicalReference: [
      'Source IP Affinity: L4/L7, tabela em RAM no ADC, ruim atrás de NAT/CGNAT | Cookie Insert: L7 apenas (exige SSL Offload se HTTPS), granularidade por usuário/navegador',
      'Comportamento em falha: nó marcado DOWN anula entradas de persistência apontando para ele.'
    ],
    examTraps: [
      'Persistência por Cookie HTTP exige inspeção L7 — portanto, em HTTPS ela NÃO funciona em modo L4 passthrough sem realizar SSL Offloading no balanceador.',
      'Se 500 usuários de uma unidade hospitalar acessam o sistema por trás de um único IP NAT público e a persistência for por Source IP, TODOS os 500 usuários cairão no mesmo único servidor backend.',
      'Persistência excessivamente longa sem aplicação stateless impede o reequilíbrio da carga quando um servidor novo é adicionado ao pool.'
    ],
    keyTerms: ['Sticky Session', 'Source IP Affinity (NAT issue)', 'Cookie Insert (L7)', 'SSL Session ID', 'Persistência vs Stateless']
  },
  '9.2.6': {
    itemId: '9.2.6',
    highYieldSummary: [
      'SNAT (Source NAT) no Balanceador: quando o cliente conecta no VIP, o balanceador substitui o IP de origem do cliente pelo seu próprio IP interno (SNAT / AutoMap) ao encaminhar para o pool; isso garante tráfego simétrico (o backend devolve a resposta obrigatoriamente pelo balanceador mesmo que o gateway padrão do backend seja outro roteador).',
      'Consequência do SNAT e Cabeçalho `X-Forwarded-For` / `Forwarded`: com SNAT ativo, os logs do servidor web enxergam apenas o IP do balanceador em vez do IP real do usuário; em L7 HTTP, o ADC insere o cabeçalho `X-Forwarded-For` (e `X-Forwarded-Proto`) ou usa o Proxy Protocol em L4 para preservar o IP original do cliente.',
      'Inline / Two-Arm vs One-Arm (Router-on-a-Stick): em Two-Arm o balanceador fica fisicamente em linha como gateway padrão dos servidores (dispensa SNAT porque a volta passa obrigatoriamente por ele); em One-Arm (VIP e servidores na mesma VLAN/interface) o SNAT é quase obrigatório para evitar roteamento assimétrico.',
      'Roteamento Assimétrico (Sem SNAT em One-Arm): se o servidor backend enxergar o IP real do cliente e responder diretamente pelo seu gateway padrão (firewall/core) pulando o balanceador na volta, o cliente recebe pacote vindo do IP real do servidor em vez do VIP e o descarta imediatamente.',
      'DSR (Direct Server Return / nPath): otimização L4 de altíssima vazão (streaming/downloads) onde o balanceador envia o pacote de entrada ao backend apenas reescrevendo o MAC destino (sem alterar o VIP de destino — cada servidor configura o VIP em interface `lo` sem responder ARP), permitindo que a resposta pesada saia direto dos servidores ao roteador sem passar de volta pelo ADC.'
    ],
    technicalReference: [
      'SNAT: evita roteamento assimétrico em topologias One-Arm (backend responde sempre para o ADC); oculta IP do cliente -> compensado em L7 por X-Forwarded-For (ou PROXY Protocol em L4)',
      'DSR (Direct Server Return): entrada pelo ADC (troca apenas MAC L2), saída direta do servidor usando VIP em loopback (`arp_ignore`/`arp_announce`).'
    ],
    examTraps: [
      'Se os servidores web mostram somente o IP do balanceador em todos os acessos do `access.log`, o ambiente usa SNAT — resolve-se habilitando inserção de `X-Forwarded-For` no ADC e configurando o servidor web para registrá-lo.',
      'Em topologia One-Arm sem SNAT (e sem DSR), a conexão falha por roteamento assimétrico: cliente envia SYN para o VIP, servidor responde SYN-ACK direto pelo gateway com IP de origem real, e o cliente descarta.',
      'Direct Server Return (DSR) NÃO permite inspeção HTTP L7 na resposta nem SSL Offloading no balanceador, pois o tráfego de retorno nem passa pelo balanceador!'
    ],
    keyTerms: ['SNAT (Source NAT)', 'X-Forwarded-For / Proxy Protocol', 'Roteamento Assimétrico', 'One-Arm vs Two-Arm', 'DSR (Direct Server Return)']
  },
  '9.2.7': {
    itemId: '9.2.7',
    highYieldSummary: [
      'SSL/TLS Offloading (Terminação TLS no ADC): o balanceador encerra a sessão HTTPS com o cliente utilizando o certificado digital oficial e aceleração criptográfica dedicada, liberando CPU dos servidores backend e centralizando gestão, renovação e políticas fortes de TLS (TLS 1.2/1.3, cifras seguras, HSTS) em um único ponto.',
      'Modos de Arquitetura TLS no ADC: SSL Termination/Offload puro (cliente <-> ADC via HTTPS; ADC <-> backend via HTTP interno em rede isolada), SSL Bridging / Re-Encryption (cliente <-> ADC via HTTPS e ADC <-> backend abre nova conexão HTTPS re-criptografada para compliance ponta a ponta sem abrir mão da inspeção L7/WAF) e SSL Passthrough (L4 puro — tráfego cifrado atravessa sem abrir no ADC).',
      'Comparação Offload vs Passthrough: Passthrough mantém confidencialidade total até o servidor final, mas IMPEDE o ADC de ler URLs, cookies de persistência L7, `X-Forwarded-For` ou aplicar regras WAF; Offload/Bridging habilita todos esses recursos L7 no balanceador.',
      'Problemas Clássicos de Offload HTTP Backend (Mixed Content e Redirect Loop): como o servidor backend recebe HTTP simples do ADC, pode gerar links `http://` ou redirecionar infinitamente para `https://`; o ADC deve injetar cabeçalhos `X-Forwarded-Proto: https` (ou reescrever Location/links) para a aplicação saber que o cliente chegou seguro.',
      'SNI (Server Name Indication) e Certificados no ADC: permite hospedar dezenas de certificados diferentes no mesmo VIP/porta 443, selecionando o certificado correto durante o handshake TLS com base no hostname enviado pelo navegador.'
    ],
    technicalReference: [
      'Modos TLS: (1) Offload puro: HTTPS -> ADC -> HTTP | (2) Re-Encryption/Bridging: HTTPS -> ADC -> HTTPS (permite L7/WAF + criptografia interna) | (3) Passthrough: L4 direto (sem L7/WAF)',
      'Cabeçalho crítico no Offload: `X-Forwarded-Proto: https` evita loop infinito de redirect HTTP->HTTPS na aplicação.'
    ],
    examTraps: [
      'Em SSL Passthrough (L4), o balanceador NÃO consegue inserir `X-Forwarded-For`, NÃO lê cookies L7 e NÃO faz WAF — porque toda a requisição HTTP está criptografada até o servidor final.',
      'Loop infinito de redirecionamento (`ERR_TOO_MANY_REDIRECTS`) após ativar SSL Offload ocorre porque a aplicação vê tráfego chegando em HTTP na porta 80/8080, força redirect para `https://`, bate no ADC de novo que entrega em HTTP outra vez — corrige-se com `X-Forwarded-Proto: https` respeitado pela aplicação.',
      'SSL Re-Encryption (Bridging) entrega o melhor dos dois mundos (inspeção L7 + tráfego cifrado também na LAN interna) ao custo de manter certificados/TLS nos dois trechos.'
    ],
    keyTerms: ['SSL/TLS Offloading (Terminação)', 'SSL Bridging / Re-Encryption', 'SSL Passthrough', 'X-Forwarded-Proto', 'SNI (Server Name Indication)']
  }
};
