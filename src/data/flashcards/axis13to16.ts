import { Flashcard } from '../../types/edital';

export const FLASHCARDS_AXIS_13_TO_16: readonly Flashcard[] = [
  // ==================== EIXO 13 (13 itens restantes) ====================
  {
    id: 'fc-157',
    itemId: '13.1.1',
    front: 'Defina os 5 princípios de segurança da informação listados no edital: Confidencialidade, Integridade, Disponibilidade, Autenticidade e Não Repúdio.',
    back: 'Confidencialidade: acesso só a autorizados (criptografia); Integridade: dado exato/inalterado (hash/HMAC); Disponibilidade: acessível quando necessário (HA/backup); Autenticidade: comprovação da identidade; Não Repúdio: autor não pode negar autoria (assinatura digital).'
  },
  {
    id: 'fc-158',
    itemId: '13.1.2',
    front: 'Diferencie OAuth 2.0, OpenID Connect (OIDC) e JWT (estrutura de 3 partes) quanto a autorização vs autenticação.',
    back: 'OAuth 2.0 é framework de AUTORIZAÇÃO delegada (Access Token); OIDC adiciona camada de AUTENTICAÇÃO sobre OAuth 2.0 entregando ID Token; JWT tem 3 partes Base64URL separadas por ponto: `Header.Payload.Signature` (Payload não é cifrado por padrão, é apenas assinado!).'
  },
  {
    id: 'fc-159',
    itemId: '13.1.3',
    front: 'Compare algoritmos de Criptografia Simétrica, Assimétrica e Hash, e diferencie TLS em trânsito vs criptografia em repouso.',
    back: 'Simétrica (AES-128/256, ChaCha20): mesma chave, rápida (dados em massa/AES-NI). Assimétrica (RSA-2048+, ECDSA/Ed25519): par pública/privada (troca de chaves e assinaturas). Hash (SHA-256/384): função unidirecional. Em trânsito = TLS 1.2/1.3; Em repouso = BitLocker/LUKS/TDE.'
  },
  {
    id: 'fc-160',
    itemId: '13.1.5',
    front: 'Diferencie Vírus, Worm, Cavalo de Troia (Trojan), Ransomware, Spyware, Backdoor e Keylogger.',
    back: 'Vírus exige arquivo hospedeiro + ação do usuário; Worm propaga-se autonomamente pela rede explorando falhas; Trojan disfarça-se de software legítimo; Ransomware cifra dados exigindo resgate; Spyware/Keylogger espionam dados/teclas; Backdoor cria acesso oculto persistente.'
  },
  {
    id: 'fc-161',
    itemId: '13.1.6',
    front: 'Qual a evolução operacional do Antivírus tradicional baseado em assinaturas para EDR (Endpoint Detection and Response)?',
    back: 'Antivírus tradicional detecta apenas hashes/assinaturas estáticas conhecidas; EPP moderno soma heurística/comportamento; EDR monitora continuamente processos, árvores de execução, LSASS e rede, permitindo isolamento remoto do endpoint em segundos.'
  },
  {
    id: 'fc-162',
    itemId: '13.2.1',
    front: 'Quais as principais medidas de Hardening de sistemas operacionais e servidores segundo benchmarks CIS?',
    back: 'Desabilitar serviços/portas não usadas e protocolos legados (SMBv1, TLS 1.0/1.1), remover contas padrão/senhas fracas, aplicar patches, habilitar firewall local, criptografar discos e registrar eventos críticos.'
  },
  {
    id: 'fc-163',
    itemId: '13.2.2',
    front: 'Compare os modelos de controle de acesso DAC, MAC e RBAC, e diferencie Pass-the-Hash/Pass-the-Ticket vs Kerberoasting.',
    back: 'DAC: dono define ACL; MAC: rótulos rígidos impostos pelo SO (SELinux); RBAC: permissões associadas a papéis. Pass-the-Hash/Ticket reutilizam hashes NTLM ou tickets TGT extraídos de LSASS; Kerberoasting solicita tickets TGS de contas com SPN e quebra a senha offline.'
  },
  {
    id: 'fc-164',
    itemId: '13.2.3',
    front: 'Como o Princípio do Menor Privilégio (PoLP) e o modelo Tiering no Active Directory mitigam movimentação lateral?',
    back: 'Contas têm apenas o acesso mínimo necessário (admin não navega/lê e-mail com Domain Admin). Tiering (Tier 0 = DCs/PKI, Tier 1 = Servidores, Tier 2 = Estações) proíbe logon de credenciais de Tier 0 em estações Tier 2.'
  },
  {
    id: 'fc-165',
    itemId: '13.2.4',
    front: 'Quais são os 3 fatores clássicos de MFA e qual método resiste melhor a phishing (AiTM) e SIM Swapping?',
    back: '3 fatores: Algo que você sabe (senha), possui (token/FIDO2/app) e é (biometria). Chaves criptográficas FIDO2/WebAuthn validam a origem exata do domínio TLS sendo resistentes a phishing; SMS é o método mais fraco (SIM Swapping).'
  },
  {
    id: 'fc-166',
    itemId: '13.2.5',
    front: 'Em infraestrutura PKI (X.509), qual a diferença entre CRL e OCSP para verificar revogação de certificados?',
    back: 'CRL (Certificate Revocation List) é uma lista periódica completa baixada pelo cliente (pode ficar desatualizada entre publicações); OCSP (Online Certificate Status Protocol) consulta o status de um certificado específico em tempo real (com OCSP Stapling no servidor).'
  },
  {
    id: 'fc-167',
    itemId: '13.2.6',
    front: 'Compare Scan de Vulnerabilidades Autenticado vs Não Autenticado, e explique a faixa da métrica CVSS (0 a 10).',
    back: 'Scan autenticado acessa o SO (SSH/WinRM) reduzindo falsos negativos ao inspecionar pacotes/patches locais; não autenticado testa só exposição de rede. Escala CVSS: 0.0 (Nenhum), 0.1–3.9 (Baixo), 4.0–6.9 (Médio), 7.0–8.9 (Alto), 9.0–10.0 (Crítico).'
  },
  {
    id: 'fc-168',
    itemId: '13.2.7',
    front: 'Qual problema a Microssegmentação e o modelo Zero Trust (NIST SP 800-207) resolvem em relação à segmentação apenas de perímetro?',
    back: 'Perímetro só controla tráfego Norte-Sul; microssegmentação filtra tráfego Leste-Oeste dentro da mesma sub-rede/VLAN contendo avanço lateral. Zero Trust ("Never Trust, Always Verify") elimina confiança implícita por estar na LAN ou VPN.'
  },
  {
    id: 'fc-169',
    itemId: '13.2.8',
    front: 'Quais pilares compõem a Segurança Operacional (OPSEC) contínua na rotina de infraestrutura?',
    back: 'Monitoramento e correlação contínua em SIEM/EDR, auditoria periódica de contas privilegiadas, revisão de acessos/mudanças, proteção de cofres de senhas (PAM) e gestão disciplinada de vulnerabilidades/patches.'
  },

  // ==================== EIXO 14 (8 itens restantes) ====================
  {
    id: 'fc-170',
    itemId: '14.1.2',
    front: 'Quais são as 6 categorias clássicas (6M) do Diagrama de Ishikawa e qual o objetivo da técnica dos 5 Porquês na RCA?',
    back: 'Ishikawa (Espinha de Peixe) mapeia fatores contribuintes (ex.: Máquina/Infra, Método/Processo, Material, Mão de obra/Pessoas, Medição, Meio ambiente); os 5 Porquês aprofundam relações de causa-efeito até a causa raiz corrigível.'
  },
  {
    id: 'fc-171',
    itemId: '14.2.1',
    front: 'Quais são as abordagens Top-Down, Bottom-Up e Divide-and-Conquer na metodologia estruturada de troubleshooting OSI?',
    back: 'Top-Down inicia na camada 7 (Aplicação) descendo até a 1 (Física); Bottom-Up inicia na camada 1 (cabos/link/L2) subindo até a 7; Divide-and-Conquer inicia no meio (ex.: camada 3 via ping/rota) eliminando metade das camadas de uma vez.'
  },
  {
    id: 'fc-172',
    itemId: '14.2.2',
    front: 'Em análise de logs durante incidente, por que se deve cruzar logs de aplicação com firewall, AD, kernel Linux/Windows e storage?',
    back: 'Um erro 500 na aplicação pode ser apenas sintoma secundário de pool esgotado por lock no banco, queda de latência SAN, erro de autenticação Kerberos no AD ou bloqueio de estado no firewall.'
  },
  {
    id: 'fc-173',
    itemId: '14.2.3',
    front: 'Qual é a "Ordem de Volatilidade" (RFC 3227) na coleta de evidências antes de reiniciar um servidor em incidente crítico?',
    back: 'Coletar sempre do mais volátil para o menos volátil: 1) Registradores/Cache -> 2) Memória RAM e conexões de rede/processos ativos (`ss`, `ps`) -> 3) Sistemas de arquivo temporários -> 4) Discos locais e logs -> 5) Backups/mídias remotas. Reiniciar destrói RAM!'
  },
  {
    id: 'fc-174',
    itemId: '14.2.4',
    front: 'Como funciona o isolamento de falhas por "mudança de uma variável por vez" e testes controlados de escopo?',
    back: 'Avaliar escopo (1 usuário vs sub-rede vs serviço inteiro), testar componentes intermediários isoladamente (bypass de proxy/VIP ou DNS direto) e aplicar uma hipótese/alteração por vez para evitar mascarar a causa real.'
  },
  {
    id: 'fc-175',
    itemId: '14.2.5',
    front: 'Qual o pré-requisito técnico indispensável para correlação confiável de eventos distribuídos em uma linha do tempo única?',
    back: 'Sincronização rigorosa de relógio via NTP em todos os ativos e padronização de timestamps em UTC (ou com fuso explícito), evitando falhas de causalidade por relógios defasados.'
  },
  {
    id: 'fc-176',
    itemId: '14.2.6',
    front: 'O que deve conter um relatório pós-incidente de Análise de Causa Raiz (RCA) sem busca por culpados ("blameless")?',
    back: 'Linha do tempo cronológica, impacto mensurado (RTO/usuários), causa raiz técnica e sistêmica, ações imediatas de mitigação e plano de ações preventivas definitivas com donos e prazos.'
  },
  {
    id: 'fc-177',
    itemId: '14.2.7',
    front: 'Quais critérios orientam procedimentos seguros de recuperação após incidente ou mudança mal-sucedida (Rollback vs Roll-forward)?',
    back: 'Validar backup/snapshot prévio, plano de rollback testado para janelas críticas, verificação funcional (smoke test + health check) antes de liberar ao usuário e remoção controlada de workarounds temporários.'
  },

  // ==================== EIXO 15 (9 itens restantes) ====================
  {
    id: 'fc-178',
    itemId: '15.1.2',
    front: 'Diferencie redundância N, N+1, 2N e 2N+1 em energia, climatização e rede de data centers e indique como calcular disponibilidade em série vs paralelo.',
    back: 'N: sem reserva (SPOF); N+1: 1 unidade reserva para N ativas; 2N: 2 cadeias completamente duplicadas e independentes; 2N+1: 2N mais 1 reserva adicional. Série: multiplica disponibilidades (`A1 × A2`); Paralelo: `1 - (1-A1)×(1-A2)`.'
  },
  {
    id: 'fc-179',
    itemId: '15.2.1',
    front: 'Em clusters de alta disponibilidade, o que é Split-Brain e como Quorum (maioria N/2 + 1 ou Witness/Fencing) impede corrupção de dados?',
    back: 'Split-Brain ocorre quando falha de heartbeat faz dois nós assumirem o papel ativo simultaneamente gravando no mesmo volume. Somente a partição com maioria (>50% dos votos incluindo Witness/Quorum disk) permanece ativa enquanto o nó isolado sofre fencing/STONITH.'
  },
  {
    id: 'fc-180',
    itemId: '15.2.2',
    front: 'Por que conectar duas fontes redundantes de um servidor na mesma régua PDU/nobreak viola redundância física?',
    back: 'Mantém um Ponto Único de Falha (SPOF) compartilhado na PDU, disjuntor ou circuito elétrico; fontes A e B devem alimentar-se de barramentos UPS/geradores e switches ToR independentes.'
  },
  {
    id: 'fc-181',
    itemId: '15.2.3',
    front: 'Compare Failover Automático vs Manual, Failback e explique quando o Failback imediato é perigoso.',
    back: 'Failover migra carga para nó/site reserva (automático reduz RTO mas exige quorum rigoroso; manual evita falsos positivos). Failback retorna ao nó primário após correção — nunca deve ser imediato em loop ("flapping") antes de confirmar estabilidade e resincronização.'
  },
  {
    id: 'fc-182',
    itemId: '15.2.4',
    front: 'Para atingir SLA de 99,99% (máximo 52,6 min/ano de parada), por que N+1 local pode não bastar sem arquitetura de HA e DR?',
    back: 'Hardware N+1 protege contra falha de componente físico, mas não contra erro de banco, bug de aplicação, corrupção lógica ou queda de link/energia total; exige HA em múltiplas camadas + monitoramento + recuperação rápida.'
  },
  {
    id: 'fc-183',
    itemId: '15.2.5',
    front: 'Qual o significado de RPO = 0 vs RPO = 1 hora e qual requisito técnico impõe um RPO próximo de zero em bancos de dados?',
    back: 'RPO = 0 significa zero perda de transações (exige replicação síncrona com impacto de latência RTT); RPO = 1 h admite perder até a última hora de dados (atingível com replicação assíncrona ou log shipping periódico).'
  },
  {
    id: 'fc-184',
    itemId: '15.2.6',
    front: 'Qual é a relação entre RTO (Recovery Time Objective), MTD/MTPD (Maximum Tolerable Downtime) e WRT (Work Recovery Time)?',
    back: 'MTD (ou MTPD) é o tempo máximo absoluto antes de dano institucional grave/irreversível. Deve-se garantir sempre `RTO + WRT <= MTD` (RTO restaura TI; WRT valida dados e retoma operação de negócio).'
  },
  {
    id: 'fc-185',
    itemId: '15.2.7',
    front: 'Em um Disaster Recovery Plan (DRP), qual a ordem lógica de restauração de serviços críticos de infraestrutura?',
    back: '1) Conectividade/Firewall/DNS básico, 2) Storage/Virtualização, 3) Identidade e Tempo (Active Directory, NTP, PKI), 4) Bancos de dados principais, 5) Sistemas críticos assistenciais/aplicações e 6) Validação ponta a ponta.'
  },
  {
    id: 'fc-186',
    itemId: '15.2.8',
    front: 'Quais os 5 níveis clássicos de testes de DR (do menos ao mais invasivo) e o que caracteriza o exercício Tabletop?',
    back: '1) Checklist/Desk review, 2) Tabletop (simulação teórica em mesa/sala sem tocar produção), 3) Parallel/Sandbox (sobe réplica em rede isolada), 4) Cutover/Switchover planejado e 5) Full Interruption (desliga produção — alto risco).'
  },

  // ==================== EIXO 16 (24 itens restantes) ====================
  {
    id: 'fc-187',
    itemId: '16.1.1',
    front: 'Na Matriz RACI de governança e papéis, qual a regra absoluta sobre o papel Accountable (A) e os papéis Responsible (R), Consulted (C) e Informed (I)?',
    back: 'Cada tarefa/entrega deve ter EXATAMENTE 1 Accountable (A — dono/aprovador final único) e ao menos 1 Responsible (R — executor); C participa em via dupla antes da decisão e I recebe comunicação após decisão.'
  },
  {
    id: 'fc-188',
    itemId: '16.1.2',
    front: 'Diferencie SLA (Service Level Agreement), OLA (Operational Level Agreement) e UC (Underpinning Contract).',
    back: 'SLA: acordo formal entre provedor de TI e cliente/negócio (externo à TI). OLA: acordo interno entre equipes da própria TI que sustentam o SLA. UC: contrato jurídico com fornecedor externo (ex.: link WAN da operadora).'
  },
  {
    id: 'fc-189',
    itemId: '16.1.3',
    front: 'Compare os 3 tipos de Mudança da ITIL 4 (Padrão, Normal e Emergencial) quanto à aprovação e ao CAB.',
    back: 'Mudança Padrão: baixo risco, repetitiva e pré-autorizada (não passa pelo CAB a cada vez). Mudança Normal: segue avaliação de risco e aprovação conforme autoridade de mudança/CAB. Mudança Emergencial: urgente para restaurar serviço/segurança crítico (ECAB acelerado).'
  },
  {
    id: 'fc-190',
    itemId: '16.1.4',
    front: 'Quais são as 4 opções clássicas de tratamento de riscos negativos (ameaças) e diferencie Risco Inerente de Risco Residual?',
    back: '4 opções: Evitar (eliminar atividade), Mitigar/Reduzir (aplicar controles), Transferir/Compartilhar (seguro/terceirização) e Aceitar (assumir dentro do apetite). Risco Inerente = antes de controles; Risco Residual = remanescente após aplicar controles.'
  },
  {
    id: 'fc-191',
    itemId: '16.1.5',
    front: 'Quais são os 4 Valores e os ciclos de abordagem de projetos (Preditivo, Adaptativo/Ágil e Híbrido)?',
    back: 'Manifesto Ágil (4 valores): Indivíduos/interações > processos/ferramentas; Software funcionando > documentação abrangente; Colaboração com cliente > negociação de contratos; Responder a mudanças > seguir plano. Preditivo (escopo fixo), Adaptativo (iterativo incremental) e Híbrido.'
  },
  {
    id: 'fc-192',
    itemId: '16.1.6',
    front: 'Diferencie PETI (Planejamento Estratégico de TI) de PDTI/PDTIC e cite os 3 tipos de indicadores de desempenho de processos/TI.',
    back: 'PETI define direcionadores estratégicos amplos alinhados à missão institucional; PDTI/PDTIC desdobra em metas tático-operacionais, ações, orçamento, riscos e contratações. Indicadores típicos: Eficácia (atingiu meta), Eficiência (uso de recursos) e Efetividade (impacto final).'
  },
  {
    id: 'fc-193',
    itemId: '16.1.7',
    front: 'Em mapeamento de processos (BPM), diferencie processos Primários (Finalísticos), de Apoio (Suporte) e Gerenciais, e estado AS-IS vs TO-BE.',
    back: 'Primários entregam valor direto ao cliente/usuário final; de Apoio sustentam os primários (ex.: Infra TI, RH); Gerenciais monitoram/coordenam. AS-IS retrata o fluxo atual real; TO-BE propõe o processo redesenhado otimizado.'
  },
  {
    id: 'fc-194',
    itemId: '16.1.8',
    front: 'Na Lei nº 14.133/2021 e IN SGD/ME nº 94/2022, quais são os 3 documentos essenciais do Planejamento da Contratação de TIC e os papéis de fiscalização?',
    back: 'Planejamento (IN 94/2022): DFD -> ETP (Estudo Técnico Preliminar) + Análise/Mapa de Riscos -> TR (Termo de Referência) ou Projeto Básico. Fiscalização: Gestor do Contrato, Fiscal Técnico, Fiscal Requisitante e Fiscal Administrativo.'
  },
  {
    id: 'fc-195',
    itemId: '16.1.9',
    front: 'Qual o papel da Análise de Impacto no Negócio (BIA) frente à Análise de Riscos na ISO 22301 / continuidade de negócios?',
    back: 'A Análise de Riscos avalia ameaças, vulnerabilidades e probabilidade; a BIA identifica processos críticos de negócio, impacto financeiro/assistencial da parada ao longo do tempo e define os requisitos de RPO, RTO e MTD.'
  },
  {
    id: 'fc-196',
    itemId: '16.1.10',
    front: 'Quais as 3 Linhas de Defesa (Modelo das Três Linhas — IIA) em Compliance e Controle Interno corporativo?',
    back: '1ª Linha: gestão operacional/donos do processo que executam controles diários; 2ª Linha: funções de monitoramento, riscos, segurança e compliance (DPO/CISO); 3ª Linha: Auditoria Interna independente reportando ao Conselho.'
  },
  {
    id: 'fc-197',
    itemId: '16.1.11',
    front: 'Na LAI (Lei nº 12.527/2011), diferencie Transparência Ativa de Transparência Passiva e informe se a APS (Rede SARAH) integra ou não a Administração Pública.',
    back: 'Transparência Ativa = divulgação proativa espontânea em portais; Passiva = atendimento a pedidos de acesso apresentados por cidadãos. Atenção: a APS (Rede SARAH) é pessoa jurídica de direito privado sem fins lucrativos (serviço social autônomo), não órgão público, embora receba recursos públicos sujeitos a transparência/controle.'
  },
  {
    id: 'fc-198',
    itemId: '16.1.12',
    front: 'Em Governança de Dados, diferencie Data Owner de Data Steward e liste as 6 dimensões clássicas da Qualidade de Dados.',
    back: 'Data Owner = executivo/dono de negócio que define classificação e regras; Data Steward = guardião técnico/operacional diário. 6 dimensões clássicas: Acurácia, Completude, Consistência, Atualidade/Tempestividade, Unicidade e Validade.'
  },
  {
    id: 'fc-199',
    itemId: '16.2.2',
    front: 'Quais são as 3 tarefas do modelo de governança da ISO/IEC 38500 e os seus 6 Princípios orientadores para o corpo dirigente?',
    back: 'Modelo EDM: Avaliar (Evaluate), Dirigir (Direct) e Monitorar (Monitor). 6 Princípios: 1) Responsabilidade, 2) Estratégia, 3) Aquisição, 4) Desempenho, 5) Conformidade e 6) Comportamento Humano.'
  },
  {
    id: 'fc-200',
    itemId: '16.2.3',
    front: 'Na ITIL 4, quais são os 5 componentes do Sistema de Valor de Serviço (SVS), as 4 Dimensões e as 6 atividades da Cadeia de Valor de Serviço?',
    back: 'SVS (5): Princípios Orientadores, Governança, Cadeia de Valor de Serviço, Práticas (34) e Melhoria Contínua. 4 Dimensões: Organizações e Pessoas; Informação e Tecnologia; Parceiros e Fornecedores; Fluxos de Valor e Processos. Cadeia (6): Planejar, Melhorar, Engajar, Desenho e Transição, Obter/Construir, Entregar e Suportar.'
  },
  {
    id: 'fc-201',
    itemId: '16.2.4',
    front: 'Na ABNT NBR ISO 31000:2018, a norma é certificável? Quais são seus 3 pilares e as etapas do Processo de Gestão de Riscos?',
    back: 'NÃO é certificável (norma de diretrizes). 3 Pilares: Princípios (8), Estrutura/Framework e Processo. Processo: Comunicação e Consulta + Escopo/Contexto/Critérios -> Avaliação (Identificação, Análise, Avaliação) -> Tratamento -> Monitoramento/Análise Crítica + Registro/Relato.'
  },
  {
    id: 'fc-202',
    itemId: '16.2.5',
    front: 'No Cubo do COSO IC (2013), quantas são as Categorias de Objetivos, os Componentes, os Princípios e os Níveis Organizacionais?',
    back: '3 Categorias de Objetivos (Operacionais, Divulgação/Relatórios e Conformidade), 5 Componentes (Ambiente de Controle, Avaliação de Riscos, Atividades de Controle, Informação/Comunicação, Monitoramento), 17 Princípios e 4 Níveis Organizacionais.'
  },
  {
    id: 'fc-203',
    itemId: '16.2.6',
    front: 'No PMBOK 7ª edição (PMI), quantos são os Princípios de Gerenciamento de Projetos e quantos são os Domínios de Desempenho (substituindo 49 processos da 6ª ed.)?',
    back: '12 Princípios de Gerenciamento de Projetos e 8 Domínios de Desempenho (Partes Interessadas, Equipe, Abordagem de Desenvolvimento e Ciclo de Vida, Planejamento, Trabalho do Projeto, Entrega, Medição e Incerteza).'
  },
  {
    id: 'fc-204',
    itemId: '16.2.7',
    front: 'No Guia Scrum 2020, quais os 3 Papéis, 3 Artefatos (+ Compromissos), 5 Eventos (e timebox máximo para Sprint de 1 mês) vs foco do Kanban?',
    back: '3 Papéis: PO, SM, Developers. 3 Artefatos/Compromissos: Product Backlog (Meta do Produto), Sprint Backlog (Meta da Sprint), Incremento (Definição de Pronto / DoD). 5 Eventos: Sprint (<= 1 mês), Planning (<= 8h), Daily (<= 15 min), Review (<= 4h), Retrospective (<= 3h). Kanban: fluxo contínuo, visualização e limites de WIP.'
  },
  {
    id: 'fc-205',
    itemId: '16.2.8',
    front: 'Segundo a IN SGD/ME, o PDTI possui vínculo temporal com quais instrumentos orçamentários e qual o papel do Comitê de Governança Digital?',
    back: 'Alinha-se ao Planejamento Estratégico Institucional (PEI/PETI) e subsidia PPA, LDO e LOA para contratações e custeio de TIC. Comitê de Governança Digital aprova e monitora o PDTI e o portfólio de projetos.'
  },
  {
    id: 'fc-206',
    itemId: '16.2.9',
    front: 'Quais são as 4 Perspectivas clássicas do Balanced Scorecard (BSC) e qual a diferença entre indicador Leading (direcionador) e Lagging (resultado)?',
    back: '4 Perspectivas: Financeira, Clientes, Processos Internos e Aprendizado e Crescimento. Lagging mede resultado já ocorrido (ex.: SLA anual); Leading mede variável preditiva antecedente que impulsiona o resultado futuro (ex.: % cobertura de testes).'
  },
  {
    id: 'fc-207',
    itemId: '16.2.10',
    front: 'No BPMN 2.0, como se ligam elementos dentro do mesmo Pool vs entre dois Pools distintos e o que fazem Gateways XOR (X) vs AND (+)?',
    back: 'Mesmo Pool = Fluxo de Sequência (linha contínua); Entre Pools distintos = Fluxo de Mensagem (linha tracejada — proibido Fluxo de Sequência cruzar Pool). Gateway Exclusivo (`X`) segue 1 único caminho condicional; Paralelo (`+`) dispara todos os caminhos simultaneamente sem testar condição.'
  },
  {
    id: 'fc-208',
    itemId: '16.2.11',
    front: 'Diferencie as normas ISO/IEC 27001, 27002 e 22301 quanto a escopo, certificabilidade e número de temas/controles da edição 2022.',
    back: 'ISO 27001:2022: requisitos do SGSI (CERTIFICÁVEL, cláusulas 4–10 + SoA + Anexo A com 93 controles em 4 temas). ISO 27002:2022: código de prática/guia de 93 controles (NÃO certificável). ISO 22301: Sistema de Gestão de Continuidade de Negócios — SGCN (CERTIFICÁVEL).'
  },
  {
    id: 'fc-209',
    itemId: '16.2.12',
    front: 'Quais são as 6 Funções de topo do NIST Cybersecurity Framework (CSF 2.0 — 2024) e qual foi a grande adição em relação ao CSF 1.1?',
    back: '6 Funções: Govern (GV — NOVIDADE transversal central do CSF 2.0), Identify (ID), Protect (PR), Detect (DE), Respond (RS) e Recover (RC).'
  },
  {
    id: 'fc-210',
    itemId: '16.2.13',
    front: 'No DAMA-DMBoK (2ª ed.), quantas Áreas de Conhecimento formam a Roda DAMA e qual ocupa o centro coordenando as demais?',
    back: '11 Áreas de Conhecimento no total: Governança de Dados (Data Governance) no CENTRO da roda, rodeada por 10 áreas operacionais (Arquitetura, Modelagem/Design, Armazenamento/Operações, Segurança, Integração/Interoperabilidade, Documentos/Conteúdo, Dados Mestres/Referência, DW/BI, Metadados e Qualidade).'
  }
];
