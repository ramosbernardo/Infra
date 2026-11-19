import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_16A: Record<string, StudyGuide> = {
  '16.1.1': {
    itemId: '16.1.1',
    highYieldSummary: [
      'Governança de TI vs Gestão de TI (Distinção Essencial): **Governança** (Conselho/Alta Direção) realiza o ciclo **Avaliar, Dirigir e Monitorar (EDM)** garantindo alinhamento estratégico, entrega de valor, gestão de riscos e transparência perante partes interessadas; **Gestão** (CIO/Gerentes/Equipes de TI) realiza o ciclo **Planejar, Construir, Executar e Monitorar (PBRM)** em consonância com a direção estabelecida pela governança.',
      'Alinhamento Estratégico TI–Negócio: assegura que investimentos, projetos, portfólio de serviços e arquitetura de infraestrutura de TI suportem e habilitem diretamente os objetivos estratégicos da organização (não tratando TI como "ilha tecnológica" desconectada ou mero centro de custo isolado).',
      'Papéis, Responsabilidades e Matriz RACI: clareza formal na atribuição decisória — **R (Responsible)**: quem executa a tarefa; **A (Accountable)**: único dono que responde/aprova o resultado final (sempre exatamente 1 por atividade!); **C (Consulted)**: especialista consultado antes (comunicação bidirecional); **I (Informed)**: notificado após decisões (comunicação unidirecional).',
      'Entrega de Valor e Otimização de Recursos/Riscos: valor não é apenas reduzir custos ou comprar tecnologia nova, e sim equilibrar **realização de benefícios** com **otimização de custos/recursos** e **nível aceitável de riscos**.',
      'Estruturas e Comitês de Governança: Comitê Estratégico de TI (CETI) e Comitês de Priorização/Segurança asseguram participação executiva multidisciplinar nas grandes decisões de portfólio, evitando que prioridades de TI sejam definidas por pressões informais isoladas.'
    ],
    technicalReference: [
      'Governança (EDM — Evaluate, Direct, Monitor) != Gestão (PBRM — Plan, Build, Run, Monitor)',
      'Matriz RACI: deve existir obrigatoriamente **exatamente 1 Accountable (A)** por atividade/decisão para evitar vácuo ou conflito de autoridade.'
    ],
    examTraps: [
      'Pegadinha clássica: atribuir à **Governança de TI** a execução operacional diária (como instalar patches, abrir chamados ou configurar VLANs) — execução/operação pertence à **Gestão**!',
      'Na Matriz RACI, pode haver vários `R` (Responsible), vários `C` e vários `I`, mas **NUNCA deve haver dois `A` (Accountable)** para a mesma tarefa nem zero `A`.',
      'Alinhamento estratégico é bidirecional: TI deve entender o negócio e o negócio deve envolver a TI desde a concepção de novas iniciativas.'
    ],
    keyTerms: ['Governança (EDM) vs Gestão (PBRM)', 'Alinhamento Estratégico', 'Matriz RACI', 'Entrega de Valor', 'Comitê de TI']
  },
  '16.1.2': {
    itemId: '16.1.2',
    highYieldSummary: [
      'Gestão de Serviços e Cocriação de Valor: serviço é um meio de possibilitar a **cocriação de valor**, facilitando os resultados desejados pelos clientes sem que estes assumam custos e riscos específicos de manter a infraestrutura.',
      'Sistema de Valor de Serviço (SVS) e Cadeia de Valor de Serviço (SVC — ITIL 4): o SVS integra Princípios Orientadores, Governança, **Cadeia de Valor de Serviço**, Práticas e Melhoria Contínua; no centro, a Cadeia de Valor possui **6 atividades flexíveis** — **Planejar (Plan)**, **Melhorar (Improve)**, **Engajar (Engage)**, **Desenho e Transição (Design & Transition)**, **Obtenção/Construção (Obtain/Build)** e **Entrega e Suporte (Deliver & Support)** — compondo fluxos de valor (Value Streams).',
      'Acordos de Serviço — **SLA, OLA e UC (Contratos de Apoio)**: **SLA (Service Level Agreement)** é firmado entre o **Provedor de Serviço (TI) e o Cliente/Negócio externo à TI** em linguagem de resultados de negócio; **OLA (Operational Level Agreement)** é acordo **interno entre equipes da própria TI** (ex.: Service Desk <-> Infraestrutura/Redes) para sustentar o SLA; **UC (Underpinning Contract)** é contrato formal jurídico com **fornecedor externo** (operadora WAN, fabricante, datacenter).',
      'Garantia (Warranty) vs Utilidade (Utility): valor exige ambos — **Utilidade** ("o que o serviço faz / fit for purpose": entrega funcionalidade ou remove restrição); **Garantia** ("como funciona / fit for use": disponibilidade, capacidade, continuidade e segurança adequadas).',
      'Catálogo de Serviços: fonte única e consistente de informação sobre todos os serviços ativos (e disponíveis para solicitação) visível aos usuários, separado da visão técnica de infraestrutura subjacente.'
    ],
    technicalReference: [
      'Acordos: **SLA** (TI <-> Cliente/Negócio) | **OLA** (Equipe Interna TI <-> Equipe Interna TI) | **UC** (TI <-> Fornecedor Externo)',
      'Utilidade (O que faz — Fit for Purpose) + Garantia (Disponibilidade/Segurança/Capacidade — Fit for Use) -> Cocriação de Valor.'
    ],
    examTraps: [
      'Acordo assinado com uma operadora de telecomunicações externa ou empresa terceirizada de manutenção de ar-condicionado NÃO é OLA — é **Contrato de Apoio (UC / Underpinning Contract)**! OLA existe somente entre áreas internas da própria organização/TI.',
      'Para cumprir um SLA de "99,9% no sistema ERP", todos os OLAs internos e UCs de fornecedores subjacentes devem possuir metas compatíveis ou mais rígidas que o SLA entregue ao cliente.',
      'Na Cadeia de Valor da ITIL 4, as 6 atividades **NÃO formam um fluxo rígido sequencial obrigatório** (como era o ciclo de 5 estágios da ITIL v3) — combinam-se dinamicamente em diferentes fluxos de valor.'
    ],
    keyTerms: ['SVS & Cadeia de Valor (6 Atividades)', 'SLA vs OLA vs UC', 'Utilidade vs Garantia', 'Cocriação de Valor', 'Catálogo de Serviços']
  },
  '16.1.3': {
    itemId: '16.1.3',
    highYieldSummary: [
      'Gerenciamento de Incidentes (Prática ITIL 4): minimizar impacto negativo dos incidentes restaurando a operação normal do serviço o mais rápido possível; incidentes devem ser priorizados considerando **Impacto × Urgência** e diagnosticados com apoio de scripts, swarmings ou escalonamento.',
      'Gerenciamento de Problemas (Prática ITIL 4): reduzir a probabilidade e o impacto de incidentes identificando causas reais e potenciais e gerenciando soluções de contorno (workarounds) e **erros conhecidos** — inclui 3 fases distintas: Identificação de Problemas, Controle de Problemas e Controle de Erros.',
      'Habilitação de Mudança (Change Enablement — antes Change Management): maximizar o número de mudanças bem-sucedidas garantindo que riscos sejam avaliados adequadamente, mudanças sejam autorizadas e cronograma gerenciado (evitando colisões e quedas não planejadas).',
      'Tipos Clássicos de Mudança (ITIL): **Mudança Padrão (Standard)** = baixo risco, recorrente, pré-autorizada e com procedimento documentado (ex.: reset de senha, criação de VM padrão); **Mudança Normal** = requer avaliação de risco, plano de rollback e aprovação pela Autoridade de Mudança (**Change Authority / CAB**) proporcional ao risco; **Mudança Emergencial** = urgente para resolver incidente grave ou falha de segurança crítica (avaliação acelerada pelo **ECAB** / autoridade emergencial, podendo documentar detalhes imediatamente após execução).',
      'Mudança vs Requisição de Serviço (Service Request): solicitações rotineiras pré-aprovadas de usuários (novo acesso, troca de monitor, instalação de software homologado) pertencem ao **Gerenciamento de Requisições de Serviço**, NÃO ao fluxo burocrático de Mudanças Normais nem ao de Incidentes.'
    ],
    technicalReference: [
      'Priorização: **Impacto** (abrangência/criticidade no negócio) × **Urgência** (velocidade necessária de resposta) = **Prioridade**',
      'Mudanças: Padrão (pré-autorizada, baixo risco) | Normal (avaliação + Change Authority/CAB) | Emergencial (acelerada, risco avaliado sem pular segurança).'
    ],
    examTraps: [
      'Na ITIL 4, o termo oficial mudou de "Change Management" para **Habilitação de Mudança (Change Enablement)** e reconhece que o **CAB** tem papel consultivo/autoridade apenas em mudanças de maior risco — burocracia onde TODA mudança simples exige reunião semanal do CAB viola a agilidade da ITIL 4!',
      'Mudança **Padrão (Standard)** NÃO significa "mudança comum que vai ao CAB" — Padrão é mudança de baixo risco **pré-autorizada** com passo a passo repetível.',
      'Mudança **Emergencial** acelera aprovações, mas **NUNCA elimina avaliação mínima de risco nem testes possíveis ou plano de rollback**.'
    ],
    keyTerms: ['Incidente (Impacto × Urgência)', 'Problema & Erro Conhecido', 'Habilitação de Mudança (Padrão/Normal/Emergencial)', 'CAB / Change Authority', 'Requisição de Serviço']
  },
  '16.1.4': {
    itemId: '16.1.4',
    highYieldSummary: [
      'Conceitos Fundamentais de Risco (ISO 31000): Risco é o "efeito da incerteza nos objetivos"; Risco Inerente é o nível de exposição sem controles; **Risco Residual** é o risco que permanece **APÓS** a aplicação dos controles e tratamentos (deve estar dentro do **apetite/tolerância a risco** da alta direção).',
      'Ciclo de Processo de Gestão de Riscos: Comunicação e Consulta + Escopo/Contexto/Critérios -> **Avaliação de Riscos (Risk Assessment)** composta obrigatoriamente por 3 etapas: **(1) Identificação** (fontes, ameaças, vulnerabilidades, consequências), **(2) Análise** (compreensão da probabilidade × impacto / nível de risco, qualitativa ou quantitativa SLE/ALE) e **(3) Avaliação (Evaluation)** (comparar com critérios para decidir prioridades) -> **Tratamento de Riscos** -> Monitoramento e Análise Crítica.',
      'As 4 Opções Clássicas de Tratamento de Riscos: **Mitigar / Reduzir** (implementar controles como MFA, firewall, backup para baixar probabilidade ou impacto), **Transferir / Compartilhar** (seguros cibernéticos, terceirização contratual de risco — atenção: responsabilidade legal/imagem nunca se transfere 100%!), **Aceitar / Reter** (decisão consciente formal quando custo do controle supera o benefício ou risco já é baixo) e **Evitar** (descontinuar ou não iniciar a atividade/tecnologia que gera o risco intolerável).',
      'Análise Quantitativa vs Qualitativa: Qualitativa classifica em matrizes (Baixo/Médio/Alto/Crítico — rápida e subjetiva); Quantitativa calcula valores financeiros (`SLE = Valor do Ativo × Fator de Exposição`, `ALE = SLE × ARO` — útil para justificar ROI de investimentos de segurança).',
      'Controles Preventivos, Detectivos e Corretivos: tratamento equilibrado combina controles preventivos (bloqueiam antes — ACL/hardening), detectivos (identificam durante/após — SIEM/IDS) e corretivos (restauram — backup/DR).'
    ],
    technicalReference: [
      'Risk Assessment (Avaliação Global) = Identificação + Análise + Avaliação (Evaluation) | Seguido de Tratamento (Mitigar, Transferir, Evitar, Aceitar)',
      'Quantitativa: `SLE = AV × EF` (perda por incidente único) | `ALE = SLE × ARO` (perda anual esperada).'
    ],
    examTraps: [
      'Mesmo após **Mitigar** ou **Transferir** um risco (ex.: contratar seguro cibernético ou terceirizar datacenter), a organização **NUNCA elimina 100% o risco** — sempre sobra **Risco Residual** (além da responsabilidade institucional/LGPD perante titulares e órgãos!).',
      'O processo de **Aceitar** um risco deve ser uma decisão formal documentada pela autoridade/dono do risco competente, nunca mera omissão por desconhecimento.',
      'Desligar definitivamente um servidor legado com protocolo obsoleto sem substituto de negócio exemplifica **Evitar** o risco (e não mitigar).'
    ],
    keyTerms: ['Identificação / Análise / Avaliação', 'Tratamento (Mitigar/Transferir/Aceitar/Evitar)', 'Risco Inerente vs Residual', 'Apetite a Risco', 'SLE / ALE']
  },
  '16.1.5': {
    itemId: '16.1.5',
    highYieldSummary: [
      'Ciclo de Vida de Projetos (Preditivo, Adaptativo/Ágil e Híbrido): **Preditivo (Cascata)** fixa escopo cedo e planeja cronograma/custo detalhados quando requisitos são estáveis (ex.: obra civil de datacenter); **Adaptativo (Ágil)** opera em iterações curtas com entrega incremental contínua e feedback quando requisitos evoluem; **Híbrido** combina governança/marcos preditivos com execução ágil.',
      'Gestão de Escopo e EAP (WBS — Estrutura Analítica do Projeto): define o que está incluído e o que está explicitamente **excluído** do projeto, decompondo entregas hierarquicamente em pacotes de trabalho na **EAP/WBS** (regra dos 100%: soma dos filhos = 100% do escopo do projeto, evitando *Scope Creep* — aumento descontrolado sem aprovação).',
      'Gestão de Prazo (Cronograma) e Custo (Restrição Tripla): sequenciamento de atividades, estimativas, **Caminho Crítico (CPM)** (sequência mais longa de tarefas dependentes com folga zero — qualquer atraso nela atrasa o projeto inteiro!) e **Valor Agregado (EVM)** cruzando Valor Planejado (PV), Valor Agregado (EV) e Custo Real (AC).',
      'Gestão de Partes Interessadas (Stakeholders): identificar pessoas/grupos que afetam ou são afetados pelo projeto, mapear poder × interesse e engajá-los continuamente na comunicação para evitar bloqueios tardios.',
      'Os 4 Valores e Princípios Ágeis (Manifesto Ágil): Indivíduos e interações acima de processos/ferramentas; Software/resultado funcionando acima de documentação abrangente; Colaboração com cliente acima de negociação de contratos; **Responder a mudanças acima de seguir um plano**.'
    ],
    technicalReference: [
      'EAP/WBS: Decomposição hierárquica orientada a **entregas** (não apenas verbos/tarefas soltas) cobrindo 100% do escopo',
      'Caminho Crítico (CPM): Folga = 0 | EVM rápido: `SPI = EV/PV` (<1 atrasado) | `CPI = EV/AC` (<1 estourado no orçamento).'
    ],
    examTraps: [
      'No Manifesto Ágil, afirmar que documentação, processos ou planos "não têm valor e são eliminados" é FALSO — o Manifesto diz que embora haja valor nos itens à direita, valorizamos **MAIS** os itens à esquerda.',
      'Atrasar uma tarefa que NÃO está no Caminho Crítico (desde que dentro da sua folga disponível) NÃO atrasa a data final do projeto; já atrasar 1 dia no Caminho Crítico atrasa todo o projeto.',
      'Adicionar funcionalidades extras a pedido informal de usuário sem passar pelo controle integrado de mudanças gera **Scope Creep** (corrupção/expansão descontrolada do escopo).'
    ],
    keyTerms: ['Ciclo Preditivo / Ágil / Híbrido', 'EAP (WBS) & Scope Creep', 'Caminho Crítico (CPM) & EVM', 'Stakeholders', 'Valores Ágeis']
  },
  '16.1.6': {
    itemId: '16.1.6',
    highYieldSummary: [
      'Planejamento Estratégico de TI (PETI) e PDTI no Setor Público: **PETI** (horizonte plurianual mais amplo) traduz missão e visão institucionais em direcionadores estratégicos de TI; **PDTI / PDTIC** (Plano Diretor de Tecnologia da Informação e Comunicação) desdobra o plano estratégico em ações tático-operacionais concretas, metas, necessidades de capacitação, orçamento e plano de aquisições/contratações (obrigatório em órgãos públicos federais pela IN SGD/ME).',
      'KPIs (Key Performance Indicators) vs Métricas Simples e KRI: todo KPI é uma métrica, mas apenas métricas ligadas diretamente a objetivos críticos de sucesso são KPIs; **Leading Indicators** (preditivos, ex.: % servidores com patch em dia) antecipam problemas, enquanto **Lagging Indicators** (resultado histórico, ex.: downtime total no trimestre) medem o efeito já ocorrido.',
      'OKRs (Objectives and Key Results): metodologia ágil de desdobramento estratégico composta por **Objetivo** (qualitativo, inspirador e direcional) + 2 a 5 **Key Results** (resultados-chave quantitativos, mensuráveis e com prazo definido, tradicionalmente trimestrais — ex.: Objetivo: "Eliminar gargalos críticos de backup"; KR1: "Reduzir RTO de sistemas Tier 1 de 8h para 2h").',
      'Balanced Scorecard (BSC) Aplicado à TI: equilibra indicadores financeiros e não financeiros em **4 perspectivas clássicas** — Financeira (ou Orçamentária/Valor Público), Clientes/Usuários, Processos Internos e Aprendizado & Crescimento (pessoas/inovação) ligadas por relações de causa e efeito em um Mapa Estratégico.',
      'Requisitos de um Bom Indicador (Critério SMART): Específico, Mensurável, Atingível, Relevante e Temporal (com fonte de dados confiável, fórmula clara, periodicidade, meta e dono definidos).'
    ],
    technicalReference: [
      'Hierarquia: Estratégia Institucional -> PETI -> PDTI/PDTIC (desdobramento operacional + orçamento + plano de contratações)',
      'BSC 4 Perspectivas: Financeira | Clientes | Processos Internos | Aprendizado & Crescimento.'
    ],
    examTraps: [
      'Medir apenas "quantidade de chamados fechados" sem acompanhar qualidade/reabertura ou satisfação gera comportamento disfuncional ("Lei de Goodhart": quando uma métrica vira meta isolada, deixa de ser boa medida).',
      'No setor público, o **PDTI/PDTIC** fundamenta e justifica formalmente as contratações de TI no Estudo Técnico Preliminar (ETP) — contratar solução de TI sem alinhamento previsto no PDTI configura falha grave de governança/planejamento!',
      'Em OKRs, Key Results **NÃO são lista de tarefas** ("Instalar ferramenta X") — devem medir **resultados/impacto mensurável** ("Reduzir em 40% incidentes P1").'
    ],
    keyTerms: ['PETI vs PDTI', 'KPIs (Leading vs Lagging)', 'OKRs', 'Balanced Scorecard (4 Perspectivas)', 'Metas SMART']
  },
  '16.1.7': {
    itemId: '16.1.7',
    highYieldSummary: [
      'Gestão por Processos (BPM): enxerga a entrega de serviços de ponta a ponta horizontalmente através de departamentos (visão sistêmica de entradas -> transformações -> saídas para o cliente), rompendo silos funcionais isolados.',
      'Mapeamento **AS-IS** vs Modelagem **TO-BE**: **AS-IS** fotografa fielmente o processo como ele funciona **HOJE na realidade** (incluindo gargalos, retrabalhos e contornos reais — não como deveria ser no papel!); **TO-BE** projeta o processo **futuro redesenhado e otimizado** eliminando desperdícios, automatizando etapas manuais e definindo controles claros.',
      'Análise de Processos (Gargalos, Desperdícios e Automação): identificar etapas sem agregação de valor (esperas por aprovações redundantes, digitação manual duplicada entre sistemas, handoffs excessivos), tempos de ciclo (Lead Time vs Cycle Time) e riscos operacionais.',
      'Ciclo PDCA de Melhoria Contínua (Deming / Shewhart): **Plan** (identificar problema, analisar dados e definir plano/metas), **Do** (executar em pequena escala/piloto e treinar), **Check** (medir resultados reais contra metas planejadas) e **Act** (se deu certo: padronizar novo processo; se falhou: corrigir e rodar novo ciclo).',
      'Padronização e Institucionalização (POP / Runbooks): melhoria só se sustenta quando documentada em Procedimentos Operacionais Padrão claros, automatizada sempre que possível e acompanhada continuamente por indicadores.'
    ],
    technicalReference: [
      'Fluxo BPM clássico: Levantamento AS-IS (realidade atual) -> Análise de Gargalos/Riscos -> Desenho TO-BE (futuro otimizado) -> Implantação -> Monitoramento PDCA',
      'PDCA: Plan (Planejar) -> Do (Executar) -> Check (Verificar) -> Act (Agir/Padronizar).'
    ],
    examTraps: [
      'Automatizar um processo caótico no estado **AS-IS** sem redesenhá-lo antes para o **TO-BE** apenas gera "burocracia automatizada mais rápida" mantendo retrabalhos e gargalos!',
      'Confundir a etapa **Check** (verificar resultados/desvios contra o planejado) com **Act** (padronizar o sucesso ou corrigir desvios para o próximo ciclo) no PDCA.',
      'Mapear o AS-IS perguntando apenas à chefia "como deveria funcionar" sem observar os operadores reais esconde os contornos reais que causam lentidão.'
    ],
    keyTerms: ['AS-IS vs TO-BE', 'Ciclo PDCA', 'BPM (Processos Ponta a Ponta)', 'Gargalos & Lead Time', 'Melhoria Contínua']
  },
  '16.1.8': {
    itemId: '16.1.8',
    highYieldSummary: [
      'Marco Legal e Normativo no Setor Público: **Lei nº 14.133/2021** (Nova Lei de Licitações e Contratos Administrativos — substituiu a Lei 8.666/93 e Lei do Pregão 10.520/02) combinada às instruções normativas de contratação de Soluções de TIC (ex.: **IN SGD/ME nº 94/2022** na Administração Pública Federal e normas correlatas).',
      'As 3 Fases da Contratação de TIC (IN SGD/ME / Lei 14.133): **(1) Planejamento da Contratação** (Documento de Formalização da Demanda DFD -> Equipe de Planejamento com Integrante Requisitante, Técnico e Administrativo -> **ETP — Estudo Técnico Preliminar** comparando soluções de mercado/TCO -> Mapa de Gerenciamento de Riscos -> **TR / Termo de Referência** com requisitos técnicos, modelo de execução, SLAs/Níveis Mínimos de Serviço e critérios de julgamento), **(2) Seleção do Fornecedor** (Pregão eletrônico para bens/serviços comuns de TI, pesquisa de preços, habilitação técnica e prova de conceito PoC se exigida) e **(3) Gestão do Contrato**.',
      'Papéis na Gestão e Fiscalização Contratual (Segregação Obrigatória): **Gestor do Contrato** (coordena formalidades administrativas, aditivos, reajustes, aplicação de sanções e pagamentos consolidação), **Fiscal Técnico** (avalia execução técnica e cumprimento rigoroso de SLAs/entregáveis), **Fiscal Requisitante** (verifica aderência às necessidades de negócio/funcionais) e **Fiscal Administrativo** (confere regularidade fiscal, trabalhista e previdenciária).',
      'Vedações Clássicas em Contratações de TI no Setor Público: proibido direcionamento injustificado de marca/modelo específico (exceção rigorosamente justificada em padronização/compatibilidade no ETP), proibida subordinação direta de terceirizados como pessoal próprio (pessoalidade/subordinação caracteriza terceirização ilícita — contratação deve focar resultados/SLAs ou postos bem delimitados sem ingerência direta) e proibido pagamento por mera hora trabalhada sem vínculo a entregas/resultados mensuráveis (salvo exceções justificadas).',
      'Critérios de Remuneração e Penalidades (IMR / ANS): pagamentos vinculados a **Instrumento de Medição de Resultados (IMR) / Acordos de Nível de Serviço (ANS)** aplicando glosas proporcionais por descumprimento de disponibilidade/prazos antes de sanções mais graves.'
    ],
    technicalReference: [
      'Fluxo Planejamento Lei 14.133 / IN SGD 94: DFD -> Equipe Planejamento (Req + Téc + Adm) -> ETP (análise de alternativas) + Mapa de Riscos -> Termo de Referência (TR)',
      'Fiscalização (Papéis): Gestor do Contrato | Fiscal Técnico (SLA/objeto técnico) | Fiscal Requisitante (benefício negócio) | Fiscal Administrativo (obrigações fiscais/trabalhistas).'
    ],
    examTraps: [
      'Especificar marca comercial fechada ("Switch Marca X Modelo Y") direto no Termo de Referência sem justificativa técnica formal robusta de padronização/interoperabilidade no ETP é **ilegal (direcionamento de licitação)**.',
      'O **Estudo Técnico Preliminar (ETP)** precede o **Termo de Referência (TR)** — primeiro o ETP demonstra a viabilidade, compara soluções disponíveis no mercado (compra vs locação vs SaaS/nuvem) e estima custos; só depois o TR detalha as especificações do objeto escolhido.',
      'Confundir as atribuições: quem verifica o cumprimento dos indicadores técnicos de SLA/qualidade de infraestrutura é o **Fiscal Técnico**, enquanto o **Fiscal Administrativo** confere certidões fiscais/FGTS/INSS e o **Gestor** conduz formalmente o contrato.'
    ],
    keyTerms: ['Lei nº 14.133/2021', 'IN SGD/ME (Contr. TIC)', 'ETP vs Termo de Referência (TR)', 'Gestor vs Fiscal Técnico/Adm/Req', 'SLA / IMR & Glosas']
  },
  '16.1.9': {
    itemId: '16.1.9',
    highYieldSummary: [
      'SGSI (Sistema de Gestão de Segurança da Informação — ISO/IEC 27001): parte estruturada do sistema de gestão corporativo baseada em abordagem de riscos de negócio para **estabelecer, implementar, operar, monitorar, analisar criticamente, manter e melhorar** a segurança da informação continuamente usando o ciclo PDCA e suporte da Alta Direção.',
      'BIA (Business Impact Analysis — Análise de Impacto no Negócio): etapa fundamental da continuidade que identifica processos críticos de negócio, dependências (sistemas, fornecedores, pessoas), impactos financeiros/operacionais/legais ao longo do tempo caso parem, e define formalmente **MTPD**, **RTO**, **RPO** e recursos mínimos de recuperação.',
      'MTPD / MAO (Maximum Tolerable Period of Disruption): tempo limite absoluto além do qual a organização sofre danos irreversíveis ou inviabilidade operacional/regulatória; determina que `RTO + WRT <= MTPD`.',
      'PCN (Plano de Continuidade de Negócios — ISO 22301): conjunto documentado de procedimentos que guia a organização para responder, recuperar, retomar e restaurar entregas críticas de produtos e serviços em nível pré-definido após evento disruptivo (engloba Plano de Resposta a Incidentes/Crises, DRP de TI e planos de contingência operacional manual).',
      'Integração SGSI + Continuidade: segurança da informação protege disponibilidade em situações normais e ataques, enquanto continuidade assume quando um evento ultrapassa as defesas preventivas garantindo resiliência operacional e retorno ordenado.'
    ],
    technicalReference: [
      'BIA define: Processos Críticos + Dependências + **MTPD**, **RTO** e **RPO** (base quantitativa/qualitativa para dimensionar DR)',
      'Normas âncora: **ISO/IEC 27001** (SGSI — certificável) | **ISO 22301** (SGCN / Continuidade de Negócios — certificável).'
    ],
    examTraps: [
      'A **BIA** NÃO é feita apenas pela equipe de TI isolada escolhendo RPO/RTO no chute — deve ser conduzida com os **donos dos processos de negócio**, pois só o negócio sabe quanto tempo aguenta parar sem dano fatal (MTPD).',
      'Não confundir **Avaliação de Riscos** (identifica ameaças/probabilidades como incêndio ou ransomware) com **BIA** (avalia o impacto da *indisponibilidade* do processo ao longo das horas independentemente de qual ameaça a causou!).',
      'O SGSI não consiste apenas em "instalar firewalls e antivírus" — abrange políticas, pessoas, processos, controles físicos, legais e melhoria contínua com comprometimento formal da direção.'
    ],
    keyTerms: ['SGSI (ISO 27001)', 'BIA (Análise de Impacto)', 'MTPD / RTO / RPO', 'PCN (Continuidade de Negócios)', 'ISO 22301']
  },
  '16.1.10': {
    itemId: '16.1.10',
    highYieldSummary: [
      'Compliance e Conformidade Normativa: estado de aderência contínua da organização e da TI às **obrigações legais e regulatórias** (LGPD, LAI, leis licitatórias/fiscais), **normas técnicas/contratuais** (PCI-DSS, ISO 27001, SLAs) e **políticas internas**.',
      'Controles Internos e Modelo das Três Linhas (IIA): **(1ª Linha)** Operação e Gestores de TI/Negócio (donos dos processos e controles diários); **(2ª Linha)** Áreas de Riscos, Compliance e Segurança da Informação (definem políticas, orientam e monitoram aderência); **(3ª Linha)** Auditoria Interna independente (avaliação objetiva reportada ao Conselho/Alta Administração).',
      'Trilhas de Auditoria e Evidências de Conformidade: não basta "estar seguro ou cumprir a regra" — em auditorias (internas, TCU/CGU, externas) é indispensável comprovar conformidade por meio de **evidências objetivas rastreáveis** (logs preservados, aprovações de mudança, relatórios de revisão de acessos, atas de testes de DR).',
      'Gap Analysis (Análise de Lacunas): confronto sistemático entre o estado atual dos controles e os requisitos exatos de uma norma/lei, gerando plano de remediação priorizado.',
      'Compliance Contínuo (Automação): uso de ferramentas de Policy-as-Code, baselines CIS automatizados e varreduras periódicas para detectar desvios (drift) entre ciclos anuais de auditoria.'
    ],
    technicalReference: [
      'Três Linhas: 1ª Linha (Gestão/Operação TI — executa controles) | 2ª Linha (Risco/Compliance/Segurança — monitora/apoia) | 3ª Linha (Auditoria Interna — avaliação independente)',
      'Evidência de auditoria: imutável, datada, rastreável e vinculada ao controle exigido.'
    ],
    examTraps: [
      'A equipe de Segurança da Informação / Compliance (2ª Linha) **NÃO** substitui a **Auditoria Interna (3ª Linha)** porque a 2ª linha ajuda a desenhar/operar políticas — só a 3ª linha tem independência organizacional para auditar ambas.',
      'Conformidade legal (leis e regulamentos) é **mandatória**; adoção de frameworks voluntários (ITIL, COBIT) torna-se obrigatória quando formalizada em contrato, política interna ou regulamento específico.',
      'Cumprir requisitos de compliance sem manter evidências arquivadas resulta em "não conformidade" durante inspeções de auditoria.'
    ],
    keyTerms: ['Compliance Normativo', 'Três Linhas (Auditoria)', 'Controles Internos', 'Evidências de Auditoria', 'Gap Analysis']
  },
  '16.1.11': {
    itemId: '16.1.11',
    highYieldSummary: [
      'Transparência Pública (Regra) vs Sigilo (Exceção) — LAI: a publicidade é o preceito geral da Administração Pública, dividida em **Transparência Ativa** (divulgação proativa espontânea em portais de dados abertos/transparência independentemente de pedido) e **Transparência Passiva** (atendimento a pedidos específicos de acesso à informação apresentados por qualquer cidadão sem necessidade de justificar motivo).',
      'Proteção de Dados Pessoais — LGPD (Equilíbrio com a Transparência): dados pessoais de pessoas naturais exigem tratamento lícito baseado em uma das bases legais (art. 7º/11), respeitando princípios de **Finalidade**, **Adequação**, **Necessidade (minimização)**, **Livre Acesso**, **Transparência**, **Segurança** e **Prevenção**.',
      'Papéis Fundamentais na LGPD e Governança: **Titular** (pessoa natural dona dos dados), **Controlador** (define decisões sobre o tratamento), **Operador** (realiza tratamento em nome do controlador), **Encarregado / DPO** (canal de comunicação entre controlador, titulares e a **ANPD** — Autoridade Nacional de Proteção de Dados).',
      'Direitos do Titular e Dados Sensíveis: titulares têm direito à confirmação, acesso, correção, eliminação/anonimização (quando cabível) e revogação de consentimento; **dados pessoais sensíveis** (saúde — prontuários!, biometria, genética, religião, origem racial, orientação sexual) exigem salvaguardas técnicas reforçadas.',
      'Impacto Direto na Infraestrutura de TI (Privacy by Design & Incidentes): exige criptografia em trânsito/repouso, pseudonimização/mascaramento em ambientes de homologação (NUNCA copiar banco real de produção com CPF/prontuários para teste sem anonimizar!), controle rigoroso de acessos e notificação à ANPD e titulares em caso de incidente relevante.'
    ],
    technicalReference: [
      'Transparência Ativa (proativa no portal sem pedido) vs Transparência Passiva (sob demanda do cidadão)',
      'Papéis LGPD: Titular | Controlador (decide) | Operador (executa sob ordem) | Encarregado/DPO (interlocutor) | ANPD (órgão fiscalizador).'
    ],
    examTraps: [
      'Restaurar backup real de produção contendo dados pessoais/clínicos diretamente em ambiente de **desenvolvimento/homologação** sem anonimização ou mascaramento viola os princípios de **Necessidade e Segurança** da LGPD.',
      'Na Administração Pública, a transparência e proteção de dados NÃO se anulam — solicitações via LAI envolvendo documentos com informações pessoais ou sigilosas seguem regra de acesso parcial (ocultando/tarjando apenas o trecho protegido, entregando o restante!).',
      'O **Operador** responde solidariamente caso descumpra obrigações da LGPD ou não siga as instruções lícitas do **Controlador**.'
    ],
    keyTerms: ['Transparência Ativa vs Passiva', 'Titular / Controlador / Operador', 'Encarregado (DPO) & ANPD', 'Dados Sensíveis (Saúde/Biometria)', 'Privacy by Design / Anonimização']
  },
  '16.1.12': {
    itemId: '16.1.12',
    highYieldSummary: [
      'Governança de Dados: exercício de **autoridade e controle compartilhado** (planejamento, monitoramento e fiscalização) sobre a gestão dos ativos de dados — define políticas, padrões, **Data Owners** (donos de negócio responsáveis pela qualidade/classificação) e **Data Stewards** (guardiões técnicos/operacionais do dia a dia).',
      'Dimensões da Qualidade de Dados: dados confiáveis para decisão e operação devem atender dimensões mensuráveis — **Acurácia/Exatidão** (reflete a realidade), **Completude** (sem campos essenciais nulos), **Consistência** (sem contradições entre sistemas distintos), **Unicidade** (sem duplicidade de registros mestres), **Atualidade/Tempestividade** e **Validade** (aderência ao formato/domínio esperado).',
      'Metadados e Linhagem de Dados (Data Lineage): **Metadados** ("dados sobre os dados") dividem-se em técnicos (schemas, tipos, tabelas), de negócio (glossário, regras, dono) e operacionais (logs de carga/atualização); **Data Lineage** rastreia toda a origem, movimentações e transformações (ETL/ELT) do dado até relatórios finais, essencial para auditoria e impacto de mudanças.',
      'Ciclo de Vida dos Dados (Data Lifecycle Management): Planejamento -> Coleta/Criação -> Armazenamento & Proteção -> Uso/Compartilhamento -> Arquivamento -> **Descarte / Eliminação Segura** (sanitização criptográfica/sobrescrita ou destruição física conforme tabela de temporalidade e LGPD — manter dados eternamente sem base legal aumenta passivo e custos!).',
      'Dados Mestres e de Referência (MDM): unifica "fonte única da verdade" (Golden Record) de entidades centrais (ex.: Paciente, Colaborador, Unidade, Fornecedor) evitando divergências entre múltiplos sistemas corporativos.'
    ],
    technicalReference: [
      'Ciclo de Vida: Criação/Coleta -> Armazenamento -> Uso/Compartilhamento -> Arquivamento -> Descarte Seguro',
      'Papéis: Data Owner (negócio, autoridade decisória) vs Data Steward (execução técnica de padrões/qualidade/metadados).'
    ],
    examTraps: [
      'Apenas **deletar arquivo/VM** ou dar "Quick Format" em HD antes de doar/descartar servidor NÃO garante eliminação segura — exige sanitização (crypto-erasure ou sobrescrita segura / destruição física de mídia conforme NIST SP 800-88).',
      'Tratar Governança de Dados como responsabilidade exclusiva do DBA/TI falha — quem define regras de negócio, classificação e aceita qualidade dos dados é o **Data Owner** da área de negócio (apoiado pela TI).',
      'Confundir **Linhagem de Dados (Data Lineage — trajetória e transformações)** com mero dicionário de nomes de colunas.'
    ],
    keyTerms: ['Governança de Dados (Owner/Steward)', 'Dimensões de Qualidade', 'Metadados & Linhagem (Lineage)', 'Ciclo de Vida & Descarte Seguro', 'MDM (Golden Record)']
  }
};
