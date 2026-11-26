import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_16A: Record<string, StudyGuide> = {
  '16.1.1': {
    itemId: '16.1.1',
    highYieldSummary: [
      'Definição e escopo: a **Governança Corporativa de TI** — referenciada pelo **COBIT 2019** (`40` objetivos em `5` domínios) e pela **ISO/IEC 38500** (`Avaliar, Dirigir e Monitorar`) — separa o direcionamento estratégico pelo Conselho da execução tático-operacional pela Gestão. Estabelece autoridade decisória clara (**Matriz RACI**), alinhamento ao negócio e criação de valor sob riscos controlados.',
      'Governança de TI vs Gestão de TI (Distinção Essencial no COBIT 2019 e ISO/IEC 38500): **Governança** (Conselho/Alta Direção) realiza o ciclo **Avaliar, Dirigir e Monitorar (EDM)** — no COBIT 2019, `5` objetivos `EDM01–EDM05` — garantindo alinhamento estratégico, entrega de valor, gestão de riscos e transparência; **Gestão** (CIO [*Chief Information Officer*] / Gerentes / Equipes de TI) realiza o ciclo **Planejar, Construir, Executar e Monitorar (PBRM)** por meio dos domínios **APO** (`14` objetivos), **BAI** (`11`), **DSS** (`6`) e **MEA** (`4`), totalizando `40` objetivos de governança e gestão.',
      'Alinhamento Estratégico TI–Negócio: assegura que investimentos, projetos, portfólio de serviços e arquitetura de infraestrutura de TI suportem e habilitem diretamente os objetivos estratégicos da organização (não tratando TI como "ilha tecnológica" desconectada ou mero centro de custo isolado).',
      'Papéis, Responsabilidades e Matriz RACI: clareza formal na atribuição decisória — **R (*Responsible*)**: quem executa a tarefa; **A (*Accountable*)**: único dono que responde/aprova o resultado final (sempre exatamente `1` por atividade!); **C (*Consulted*)**: especialista consultado antes (comunicação bidirecional); **I (*Informed*)**: notificado após decisões (comunicação unidirecional).',
      'Entrega de Valor e Otimização de Recursos/Riscos: no **COBIT 2019**, entrega de valor não significa apenas cortar custos ou comprar tecnologia nova, e sim equilibrar **realização de benefícios** com **otimização de recursos** e **otimização de riscos**.',
      'Estruturas e Comitês de Governança: Comitê Estratégico de TI (**CETI**) e Comitês de Priorização/Segurança asseguram participação executiva multidisciplinar nas grandes decisões de portfólio, evitando que prioridades de TI sejam definidas por pressões informais isoladas.',
      'Exemplo operacional: seguindo o **COBIT 2019**, o conselho aprova no domínio **EDM** (`EDM01` e `EDM03`) o apetite a risco e a prioridade de modernização do data center, enquanto o CIO desdobra no domínio **APO** (`APO02` Estratégia) e **BAI** (`BAI03` Construção) a implantação com uma **Matriz RACI** definindo `1` único **Accountable (`A`)** para o projeto, `2` engenheiros **Responsible (`R`)**, Segurança como **Consulted (`C`)** e Diretoria Clínica como **Informed (`I`)**.'
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
    keyTerms: [
      'COBIT 2019 (40 Objetivos): framework com 5 objetivos de governança (EDM) e 35 de gestão (APO 14, BAI 11, DSS 6, MEA 4)',
      'Governança (EDM) vs Gestão (PBRM): avaliar, dirigir e monitorar pelo Conselho versus planejar, construir, executar e monitorar pela diretoria de TI',
      'Matriz RACI (1 Accountable): matriz de responsabilidades onde cada entrega tem exatamente um único dono final (A)',
      'Realização de Benefícios vs Riscos/Recursos: tripé de governança para criação equilibrada de valor corporativo',
      'Comitê Estratégico de TI (CETI): instância multidisciplinar que vincula decisões de portfólio e investimentos às metas institucionais'
    ]
  },
  '16.1.2': {
    itemId: '16.1.2',
    highYieldSummary: [
      'Definição e escopo: a **gestão de serviços de TI** — estruturada na **ITIL 4** (*Information Technology Infrastructure Library*) e padronizada pela norma certificável **ISO/IEC 20000-1:2018** (*Sistema de Gestão de Serviços — SMS*) — foca na **cocriação de valor** combinando **Utilidade** e **Garantia**. Articula o **Sistema de Valor de Serviço (SVS)**, os **7 princípios orientadores**, a **Cadeia de Valor (`6` atividades)**, **34 práticas** e acordos formais (**SLA**, **OLA** e **UC**).',
      'Gestão de Serviços e Cocriação de Valor: serviço é um meio de possibilitar a **cocriação de valor**, facilitando os resultados desejados pelos clientes sem que estes assumam custos e riscos específicos de manter a infraestrutura.',
      'Sistema de Valor de Serviço (SVS) e Cadeia de Valor de Serviço (SVC — ITIL 4): o **SVS** integra `5` componentes — **7 Princípios Orientadores** (*Foco no valor; Começar onde está; Progredir iterativamente com feedback; Colaborar e promover visibilidade; Pensar e trabalhar holisticamente; Manter simples e prático; Otimizar e automatizar*), Governança, **Cadeia de Valor de Serviço**, **34 Práticas** (`14` gerais, `17` de serviço e `3` técnicas) e Melhoria Contínua; no centro, a Cadeia de Valor possui **6 atividades flexíveis** — **Planejar (*Plan*)**, **Melhorar (*Improve*)**, **Engajar (*Engage*)**, **Desenho e Transição (*Design & Transition*)**, **Obtenção/Construção (*Obtain/Build*)** e **Entrega e Suporte (*Deliver & Support*)** — compondo fluxos de valor (*Value Streams*), em alinhamento ao SMS da **ISO/IEC 20000-1:2018**.',
      'Acordos de Serviço — **SLA, OLA e UC (Contratos de Apoio)**: **SLA** (*Service Level Agreement*) é firmado entre o **Provedor de Serviço (TI) e o Cliente/Negócio externo à TI** em linguagem de resultados de negócio; **OLA** (*Operational Level Agreement*) é acordo **interno entre equipes da própria TI** (ex.: *Service Desk* <-> Infraestrutura/Redes) para sustentar o SLA; **UC** (*Underpinning Contract*) é contrato formal jurídico com **fornecedor externo** (operadora WAN, fabricante, datacenter).',
      'Garantia (Warranty) vs Utilidade (Utility): valor exige ambos — **Utilidade** ("o que o serviço faz / *fit for purpose*": entrega funcionalidade ou remove restrição); **Garantia** ("como funciona / *fit for use*": disponibilidade, capacidade, continuidade e segurança adequadas).',
      'Catálogo de Serviços: fonte única e consistente de informação sobre todos os serviços ativos (e disponíveis para solicitação) visível aos usuários, separado da visão técnica de infraestrutura subjacente.',
      'Exemplo operacional: para atender o **SLA** de `99,9%` e resposta em `4 h` para o prontuário eletrônico publicado no **Catálogo de Serviços**, a TI mantém um **OLA** interno de `30 min` entre *Service Desk* e Redes e um **UC** com a operadora WAN prevendo reparo em `2 h`. Aplicando o princípio da **ITIL 4** *Otimizar e automatizar* no fluxo de valor (**Engajar -> Obtenção/Construção -> Entrega e Suporte**), assegura-se **Utilidade** (acesso às imagens) e **Garantia** (disponibilidade e TLS) em conformidade com a **ISO/IEC 20000-1:2018**.'
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
    keyTerms: [
      'ITIL 4 SVS e 7 Princípios: arquitetura com Princípios Orientadores, Governança, Cadeia de Valor (6 atividades), 34 Práticas e Melhoria Contínua',
      'ISO/IEC 20000-1:2018: norma internacional certificável de requisitos para Sistema de Gestão de Serviços (SMS)',
      'SLA vs OLA vs UC: acordo com cliente de negócio (SLA), acordo interno entre equipes de TI (OLA) e contrato jurídico com terceiros (UC)',
      'Utilidade vs Garantia: adequação ao propósito / funcionalidade (Utility) versus adequação ao uso / disponibilidade e segurança (Warranty)',
      'Catálogo de Serviços: visão estruturada voltada ao usuário dos serviços ativos e solicitáveis com seus respectivos SLAs'
    ]
  },
  '16.1.3': {
    itemId: '16.1.3',
    highYieldSummary: [
      'Definição e escopo: entre as **34 práticas da ITIL 4** (especificamente nas `17` práticas de gerenciamento de serviços), **Gerenciamento de Incidentes**, **Gerenciamento de Problemas** e **Habilitação de Mudança** (*Change Enablement*) equilibram agilidade de restauração, prevenção de recorrência e governança de alterações em produção. Complementam-se com o **Gerenciamento de Requisições de Serviço** e alinhamento ao controle de mudanças da **ISO/IEC 20000-1:2018**.',
      'Gerenciamento de Incidentes (Prática ITIL 4): minimizar impacto negativo dos incidentes restaurando a operação normal do serviço o mais rápido possível; incidentes devem ser priorizados considerando **Impacto × Urgência** e diagnosticados com apoio de *scripts*, *swarmings* (atuação colaborativa multidisciplinar sem fila hierárquica rígida) ou escalonamento.',
      'Gerenciamento de Problemas (Prática ITIL 4): reduzir a probabilidade e o impacto de incidentes identificando causas reais e potenciais e gerenciando soluções de contorno (*workarounds*) e **erros conhecidos** — inclui `3` fases distintas: **Identificação de Problemas**, **Controle de Problemas** e **Controle de Erros**.',
      'Habilitação de Mudança (Change Enablement — antes Change Management na ITIL v3): maximizar o número de mudanças bem-sucedidas garantindo que riscos sejam avaliados adequadamente, mudanças sejam autorizadas e o cronograma gerenciado (evitando colisões e quedas não planejadas).',
      'Tipos Clássicos de Mudança (ITIL 4): **Mudança Padrão (*Standard*)** = baixo risco, recorrente, pré-autorizada e com procedimento documentado (ex.: criação de VM padrão); **Mudança Normal** = requer avaliação de risco, plano de *rollback* e aprovação pela Autoridade de Mudança (**Change Authority / CAB** [*Change Advisory Board*]) proporcional ao risco; **Mudança Emergencial** = urgente para resolver incidente grave ou falha de segurança crítica (avaliação acelerada pelo **ECAB** [*Emergency CAB*] / autoridade emergencial, podendo completar documentação imediatamente após execução).',
      'Mudança vs Requisição de Serviço (Service Request): solicitações rotineiras pré-aprovadas de usuários (novo acesso, troca de monitor, instalação de software homologado) pertencem ao **Gerenciamento de Requisições de Serviço**, NÃO ao fluxo burocrático de Mudanças Normais nem ao de Incidentes.',
      'Exemplo operacional: um pedido de criação de caixa postal para novo médico segue como **Requisição de Serviço**; a queda súbita do portal abre um **Incidente P1** (`Impacto Alto × Urgência Alta`) tratado por *swarming* com reinício imediato; a investigação recorrente de vazamento de memória vira **Problema** com *workaround* na **KEDB**; e a atualização definitiva do servidor entra como **Mudança Normal** aprovada pela *Change Authority* (ou **Mudança Padrão** se previamente homologada e de baixo risco).'
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
    keyTerms: [
      'Incidentes (Impacto × Urgência / Swarming): prática ITIL 4 focada em restaurar rapidamente a operação normal conforme prioridade',
      'Problemas (3 Fases): Identificação, Controle de Problemas e Controle de Erros (workarounds e erros conhecidos)',
      'Change Enablement (Habilitação de Mudança): prática que equilibra agilidade e avaliação de risco com Change Authority descentralizada',
      'Tipos de Mudança (Padrão / Normal / Emergencial): pré-autorizada (Standard), avaliada sob demanda (Normal) e acelerada para crises (Emergencial)',
      'Requisição de Serviço: prática separada para demandas padronizadas e pré-aprovadas de entrega de serviço aos usuários'
    ]
  },
  '16.1.4': {
    itemId: '16.1.4',
    highYieldSummary: [
      'Definição e escopo: a **gestão de riscos** — padronizada pela **ISO 31000:2018** e aplicada à segurança/TI no **COBIT 2019 (`APO12`/`EDM03`)** e **ISO/IEC 27001** — estabelece um processo sistemático para identificar, analisar, avaliar e tratar incertezas que afetam os objetivos corporativos. Define critérios quantitativos e qualitativos, opções de resposta e acompanhamento contínuo do **risco residual**.',
      'Conceitos Fundamentais de Risco (ISO 31000:2018): Risco é o "efeito da incerteza nos objetivos"; **Risco Inerente** é o nível de exposição sem controles; **Risco Residual** é o risco que permanece **APÓS** a aplicação dos controles e tratamentos (deve estar dentro do **apetite/tolerância a risco** definido pela alta direção).',
      'Ciclo de Processo de Gestão de Riscos (ISO 31000:2018): Comunicação e Consulta + Escopo/Contexto/Critérios -> **Avaliação de Riscos (*Risk Assessment*)** composta obrigatoriamente por `3` etapas: **(1) Identificação** (fontes, ameaças, vulnerabilidades, consequências), **(2) Análise** (compreensão da probabilidade × impacto / nível de risco, qualitativa ou quantitativa SLE/ALE) e **(3) Avaliação (*Evaluation*)** (comparar com critérios para decidir prioridades) -> **Tratamento de Riscos** -> Monitoramento e Análise Crítica + Registro e Relato.',
      'As 4 Opções Clássicas de Tratamento de Riscos: **Mitigar / Reduzir** (implementar controles como MFA [*Multi-Factor Authentication*], firewall, backup para baixar probabilidade ou impacto), **Transferir / Compartilhar** (seguros cibernéticos, terceirização contratual — atenção: responsabilidade legal/imagem nunca se transfere `100%`!), **Aceitar / Reter** (decisão consciente formal quando custo do controle supera o benefício ou risco já é baixo) e **Evitar** (descontinuar ou não iniciar a atividade/tecnologia que gera o risco intolerável).',
      'Análise Quantitativa vs Qualitativa: Qualitativa classifica em matrizes (`Baixo/Médio/Alto/Crítico` — rápida e subjetiva); Quantitativa calcula valores financeiros (`SLE = Valor do Ativo [AV] × Fator de Exposição [EF]`, `ALE = SLE × Taxa Anual de Ocorrência [ARO]` — útil para justificar ROI [*Return on Investment*] de controles).',
      'Controles Preventivos, Detectivos e Corretivos: tratamento equilibrado combina controles preventivos (bloqueiam antes — ACL/hardening), detectivos (identificam durante/após — SIEM/IDS [*Intrusion Detection System*]) e corretivos (restauram — backup/DR).',
      'Exemplo operacional: um banco de dados clínico avaliado em `AV = R$ 500.000` possui probabilidade anual de falha grave de disco/ataque de `ARO = 0,2` e perda estimada `EF = 40%` (`SLE = R$ 200.000`; `ALE = R$ 40.000/ano`). Seguindo a **ISO 31000:2018**, após Identificação, Análise e Avaliação, decide-se **Mitigar** o risco investindo `R$ 15.000/ano` em cofre imutável + MFA (justificado pois `R$ 15.000 < ALE`), aceitando formalmente o **risco residual** remanescente.'
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
    keyTerms: [
      'ISO 31000:2018 (Risk Assessment): avaliação global dividida em Identificação, Análise (probabilidade × impacto) e Avaliação de Riscos',
      '4 Tratamentos (Mitigar / Transferir / Aceitar / Evitar): redução por controles, compartilhamento contratual, retenção formal e eliminação da atividade',
      'Risco Inerente vs Residual: exposição bruta antes de medidas versus exposição remanescente após aplicação dos controles',
      'Apetite e Tolerância a Risco: nível máximo de risco que a alta direção aceita assumir para atingir seus objetivos',
      'SLE e ALE (Análise Quantitativa): Single Loss Expectancy (AV × EF) e Annualized Loss Expectancy (SLE × ARO)'
    ]
  },
  '16.1.5': {
    itemId: '16.1.5',
    highYieldSummary: [
      'Definição e escopo: a **gestão de projetos** — modernizada pelo **PMBOK 7ª edição (2021)** com foco em entrega de valor mediante **12 princípios** e **8 domínios de desempenho** — coexiste com abordagens ágeis regidas pelo **Manifesto Ágil** e pelo **Guia do Scrum 2020**. Orienta a escolha entre ciclo preditivo, adaptativo ou híbrido e o controle de escopo (**EAP/WBS**), cronograma (**CPM**), custo (**EVM**) e partes interessadas.',
      'Ciclo de Vida de Projetos e PMBOK 7ª Edição: o **PMBOK 7ª ed.** substituiu o foco exclusivo em processos/grupos da 6ª ed. por **12 Princípios** (ex.: Administração, Equipe, Partes Interessadas, Valor, Pensamento Sistêmico, Adaptação [*Tailoring*], Qualidade, Risco) e **8 Domínios de Desempenho** (Partes Interessadas, Equipe, Abordagem de Desenvolvimento e Ciclo de Vida, Planejamento, Trabalho do Projeto, Entrega, Medição e Incerteza); adapta-se em ciclo **Preditivo/Cascata** (escopo fixo cedo, ex.: obra de datacenter), **Adaptativo/Ágil** (iterações curtas e entrega incremental) ou **Híbrido**.',
      'Gestão de Escopo e EAP (WBS — Estrutura Analítica do Projeto / *Work Breakdown Structure*): define o que está incluído e o que está explicitamente **excluído** do projeto, decompondo entregas hierarquicamente em pacotes de trabalho na **EAP/WBS** (regra dos `100%`: soma dos filhos = `100%` do escopo do projeto, evitando *Scope Creep* — aumento descontrolado sem aprovação).',
      'Gestão de Prazo (Cronograma) e Custo (Restrição Tripla): sequenciamento de atividades, estimativas, **Caminho Crítico (CPM)** (*Critical Path Method* — sequência mais longa de tarefas dependentes com folga zero; qualquer atraso nela atrasa o projeto inteiro!) e **Valor Agregado (EVM)** (*Earned Value Management*) cruzando Valor Planejado (`PV`), Valor Agregado (`EV`) e Custo Real (`AC`).',
      'Gestão de Partes Interessadas (Stakeholders): identificar pessoas/grupos que afetam ou são afetados pelo projeto, mapear poder × interesse e engajá-los continuamente na comunicação para evitar bloqueios tardios.',
      'Manifesto Ágil e Guia do Scrum 2020: o Manifesto prioriza indivíduos/interações, resultado funcionando, colaboração com o cliente e **responder a mudanças acima de seguir um plano**; no **Guia do Scrum 2020**, o *Scrum Team* reúne **Product Owner**, **Scrum Master** e **Developers** operando `5` eventos (*Sprint*, *Sprint Planning*, *Daily Scrum*, *Sprint Review*, *Sprint Retrospective*) e `3` artefatos com seus compromissos (*Product Backlog -> Product Goal*; *Sprint Backlog -> Sprint Goal*; *Increment -> Definition of Done*).',
      'Exemplo operacional: na construção de um novo ambiente de nuvem privada aplicando o **PMBOK 7ª ed.** em modelo **Híbrido**, o núcleo elétrico segue cronograma preditivo com **EAP/WBS** e **Caminho Crítico** (`SPI = EV/PV = 1,05`, `CPI = EV/AC = 0,98`), enquanto os módulos de automação seguem o **Guia do Scrum 2020** em *Sprints* de `2 semanas` com *Product Owner*, *Scrum Master* e *Developers* entregando incrementos validados contra a *Definition of Done*.'
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
    keyTerms: [
      'PMBOK 7ª Edição (12 Princípios / 8 Domínios): abordagem orientada a valor, adaptação (tailoring) e entrega de resultados em qualquer ciclo de vida',
      'Guia do Scrum 2020: Scrum Team (PO, Scrum Master, Developers), 5 eventos e 3 artefatos vinculados a Product Goal, Sprint Goal e DoD',
      'EAP / WBS e Scope Creep: decomposição hierárquica em 100% das entregas versus expansão descontrolada de escopo sem aprovação',
      'CPM (Caminho Crítico) e EVM: cadeia de folga zero que dita a duração total e índices SPI (EV/PV) e CPI (EV/AC)',
      'Ciclo Preditivo vs Ágil vs Híbrido: escolha metodológica baseada na estabilidade dos requisitos e incerteza do projeto'
    ]
  },
  '16.1.6': {
    itemId: '16.1.6',
    highYieldSummary: [
      'Definição e escopo: o **planejamento estratégico de TI** desdobra direcionadores institucionais em planos plurianuais (**PETI**) e tático-operacionais (**PDTI/PDTIC**), sustentando investimentos e contratações públicas. O acompanhamento contínuo utiliza indicadores de desempenho (**KPIs** *leading* e *lagging*), metas ágeis (**OKRs**), o **Balanced Scorecard (BSC)** e critérios **SMART**.',
      'Planejamento Estratégico de TI (PETI) e PDTI no Setor Público: **PETI** (*Plano Estratégico de TI*, horizonte plurianual mais amplo) traduz missão e visão institucionais em direcionadores estratégicos; **PDTI / PDTIC** (*Plano Diretor de Tecnologia da Informação e Comunicação*) desdobra o plano estratégico em ações tático-operacionais concretas, metas, necessidades de capacitação, orçamento e plano de aquisições/contratações (exigido em órgãos públicos federais pela **IN SGD/ME**).',
      'KPIs (Key Performance Indicators) vs Métricas Simples e KRI: todo **KPI** é uma métrica, mas apenas métricas ligadas diretamente a objetivos críticos de sucesso são KPIs (diferente de **KRI** — *Key Risk Indicator*, indicador preventivo de risco); **Leading Indicators** (preditivos, ex.: `%` servidores com *patch* em dia) antecipam problemas, enquanto **Lagging Indicators** (resultado histórico, ex.: *downtime* total no trimestre) medem o efeito já ocorrido.',
      'OKRs (Objectives and Key Results): metodologia ágil de desdobramento estratégico composta por **Objetivo** (qualitativo, inspirador e direcional) + `2` a `5` **Key Results** (resultados-chave quantitativos, mensuráveis e com prazo definido, tradicionalmente trimestrais — ex.: Objetivo: "Eliminar gargalos críticos de backup"; KR1: "Reduzir RTO de sistemas Tier 1 de `8 h` para `2 h`").',
      'Balanced Scorecard (BSC) Aplicado à TI: equilibra indicadores financeiros e não financeiros em **4 perspectivas clássicas** — **Financeira** (ou Orçamentária/Valor Público), **Clientes/Usuários**, **Processos Internos** e **Aprendizado & Crescimento** (pessoas/inovação) ligadas por relações de causa e efeito em um Mapa Estratégico.',
      'Requisitos de um Bom Indicador (Critério SMART): **S**pecífico (*Specific*), **M**ensurável (*Measurable*), **A**tingível (*Achievable*), **R**elevante (*Relevant*) e **T**emporal (*Time-bound*) — sempre com fonte de dados confiável, fórmula clara, periodicidade, meta e dono definidos.',
      'Exemplo operacional: alinhado ao **PETI** institucional, o **PDTIC** prevê a modernização do armazenamento clínico para viabilizar futuras contratações no ETP (*Estudo Técnico Preliminar*). No **BSC** da TI, vincula-se capacitação em automação (*Aprendizado & Crescimento*) -> redução de erros manuais (*Processos Internos*) -> disponibilidade `99,95%` (*Clientes*), acompanhada por **OKR** trimestral com KR **SMART** (*"Reduzir em 40% incidentes P1 de rede até dezembro"*) e indicador *leading* de cobertura de monitoramento.'
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
    keyTerms: [
      'PETI vs PDTI/PDTIC: plano estratégico plurianual de direcionamento versus plano diretor tático-operacional que embasa contratações públicas',
      'KPIs (Leading vs Lagging) e KRI: indicadores preditivos de tendência (leading), de resultado passado (lagging) e de exposição a risco (KRI)',
      'OKRs (Objectives & Key Results): objetivo qualitativo combinado a resultados-chave quantitativos mensuráveis (nunca lista de tarefas)',
      'Balanced Scorecard (4 Perspectivas): Financeira, Clientes, Processos Internos e Aprendizado & Crescimento em mapa de causa e efeito',
      'Critério SMART: definição de metas Específicas, Mensuráveis, Atingíveis, Relevantes e Temporais'
    ]
  },
  '16.1.7': {
    itemId: '16.1.7',
    highYieldSummary: [
      'Definição e escopo: o gerenciamento e a melhoria contínua de processos (**BPM** — *Business Process Management*) enxergam fluxos ponta a ponta através dos departamentos para eliminar gargalos, esperas e retrabalhos. Parte do retrato fiel da operação atual (**AS-IS**) antes de desenhar o modelo otimizado (**TO-BE**) e sustentá-lo pelo ciclo iterativo **PDCA**.',
      'Gestão por Processos (BPM): enxerga a entrega de serviços de ponta a ponta horizontalmente através de departamentos (visão sistêmica de entradas -> transformações -> saídas para o cliente), rompendo silos funcionais isolados.',
      'Mapeamento **AS-IS** vs Modelagem **TO-BE**: **AS-IS** fotografa fielmente o processo como ele funciona **HOJE na realidade** (incluindo gargalos, retrabalhos e contornos reais — não como deveria ser no papel!); **TO-BE** projeta o processo **futuro redesenhado e otimizado** eliminando desperdícios, automatizando etapas manuais e definindo controles claros.',
      'Análise de Processos (Gargalos, Desperdícios e Automação): identificar etapas sem agregação de valor (esperas por aprovações redundantes, digitação manual duplicada entre sistemas, *handoffs* [passagens de bastão] excessivos), tempos de ciclo (*Lead Time* [tempo total da solicitação à entrega] vs *Cycle Time* [tempo ativo de execução]) e riscos operacionais.',
      'Ciclo PDCA de Melhoria Contínua (Deming / Shewhart): **Plan** (identificar problema, analisar dados e definir plano/metas), **Do** (executar em pequena escala/piloto e treinar), **Check** (medir resultados reais contra metas planejadas) e **Act** (se deu certo: padronizar novo processo; se falhou: corrigir e rodar novo ciclo).',
      'Padronização e Institucionalização (POP / Runbooks): melhoria só se sustenta quando documentada em Procedimentos Operacionais Padrão (**POP**) claros, automatizada sempre que possível e acompanhada continuamente por indicadores.',
      'Exemplo operacional: no provisionamento de acessos clínicos que levava `5 dias` (*Lead Time*), o mapeamento **AS-IS** revela `3` aprovações por e-mail redundantes e digitação manual no AD e no ERP (*handoffs* excessivos). Desenha-se o processo **TO-BE** com aprovação única em formulário e integração automatizada via API, validando em ciclo **PDCA** (`Plan -> Do` piloto de `15` dias -> `Check` queda para `4 horas` -> `Act` publicação do **POP** definitivo).'
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
    keyTerms: [
      'AS-IS vs TO-BE: levantamento realista do processo atual com seus gargalos versus desenho futuro redesenhado e otimizado',
      'Ciclo PDCA (Deming): método contínuo em 4 etapas — Plan (planejar), Do (executar piloto), Check (medir) e Act (padronizar/corrigir)',
      'BPM (Visão Ponta a Ponta): gestão horizontal orientada a entregas ao cliente superando silos departamentais isolados',
      'Lead Time vs Cycle Time: tempo total percebido da solicitação à entrega versus tempo efetivo de trabalho ativo',
      'POP e Runbooks: padronização documental que consolida ganhos da etapa Act impedindo regressão'
    ]
  },
  '16.1.8': {
    itemId: '16.1.8',
    highYieldSummary: [
      'Definição e escopo: as contratações públicas de soluções de TIC submetem-se à **Lei nº 14.133/2021** (Nova Lei de Licitações e Contratos) e a normativos específicos como a **IN SGD/ME nº 94/2022**. Estruturam-se nas fases de **Planejamento**, **Seleção do Fornecedor** e **Gestão do Contrato**, com segregação rigorosa de papéis de fiscalização e remuneração atrelada a níveis mínimos de serviço (**IMR/ANS**).',
      'Marco Legal e Normativo no Setor Público: **Lei nº 14.133/2021** (substituiu a Lei `8.666/93` e a Lei do Pregão `10.520/02`) combinada às instruções normativas de contratação de Soluções de TIC (ex.: **IN SGD/ME nº 94/2022** na Administração Pública Federal e normas correlatas).',
      'As 3 Fases da Contratação de TIC (IN SGD/ME nº 94/2022 / Lei nº 14.133/2021): **(1) Planejamento da Contratação** (Documento de Formalização da Demanda **DFD** -> Equipe de Planejamento com Integrante Requisitante, Técnico e Administrativo -> **ETP — Estudo Técnico Preliminar** comparando soluções de mercado/TCO [*Total Cost of Ownership*] -> Mapa de Gerenciamento de Riscos -> **TR / Termo de Referência** com requisitos técnicos, modelo de execução, SLAs e critérios de julgamento), **(2) Seleção do Fornecedor** (Pregão eletrônico para bens/serviços comuns de TI, pesquisa de preços, habilitação técnica e prova de conceito **PoC** se exigida) e **(3) Gestão do Contrato**.',
      'Papéis na Gestão e Fiscalização Contratual (Segregação Obrigatória): **Gestor do Contrato** (coordena formalidades administrativas, aditivos, reajustes, aplicação de sanções e consolidação para pagamento), **Fiscal Técnico** (avalia execução técnica e cumprimento rigoroso de SLAs/entregáveis), **Fiscal Requisitante** (verifica aderência às necessidades de negócio/funcionais) e **Fiscal Administrativo** (confere regularidade fiscal, trabalhista e previdenciária).',
      'Vedações Clássicas em Contratações de TI no Setor Público: proibido direcionamento injustificado de marca/modelo específico (exceção rigorosamente justificada em padronização/compatibilidade no ETP), proibida subordinação direta de terceirizados como pessoal próprio (pessoalidade/subordinação caracteriza terceirização ilícita — contratação deve focar resultados/SLAs) e proibido pagamento por mera hora trabalhada sem vínculo a entregas/resultados mensuráveis (salvo exceções justificadas).',
      'Critérios de Remuneração e Penalidades (IMR / ANS): pagamentos vinculados a **Instrumento de Medição de Resultados (IMR) / Acordos de Nível de Serviço (ANS)** aplicando glosas proporcionais por descumprimento de disponibilidade/prazos antes de sanções mais graves.',
      'Exemplo operacional: para contratar serviço de link WAN redundante sob a **Lei nº 14.133/2021** e **IN SGD/ME nº 94/2022**, a TI inicia com **DFD**, institui equipe tripartite e elabora o **ETP** demonstrando por que MPLS/SD-WAN supera links domésticos, antes de redigir o **TR** sem direcionamento de operadora. Na execução, o **Fiscal Técnico** afere `99,9%` de disponibilidade para cálculo de glosa no **IMR**, enquanto o **Fiscal Administrativo** confere certidões e o **Gestor do Contrato** autoriza o pagamento.'
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
    keyTerms: [
      'Lei nº 14.133/2021 e IN SGD/ME nº 94/2022: marco legal e normativo federal que rege planejamento, seleção e gestão contratual de TIC',
      'DFD -> ETP -> TR: sequência obrigatória do planejamento onde o ETP estuda alternativas de mercado antes da especificação no Termo de Referência',
      'Gestor vs Fiscais (Técnico / Requisitante / Administrativo): segregação de funções na fiscalização técnica (SLA), de negócio e trabalhista/fiscal',
      'Vedações (Direcionamento e Subordinação): proibição de exigir marca sem justificativa técnica e de tratar terceirizados com pessoalidade',
      'IMR / ANS e Glosas: remuneração vinculada a níveis mínimos de resultado com descontos proporcionais por falhas'
    ]
  },
  '16.1.9': {
    itemId: '16.1.9',
    highYieldSummary: [
      'Definição e escopo: a integração entre **SGSI** (**ISO/IEC 27001:2022**) e **Gestão de Continuidade de Negócios** (**ISO 22301:2019**) protege a disponibilidade e a resiliência organizacional diante de incidentes severos. Apoia-se na **BIA** (*Business Impact Analysis*) para determinar **MTPD**, **RTO** e **RPO** com os donos de processo antes de estruturar o **PCN** e o **DRP**.',
      'SGSI (Sistema de Gestão de Segurança da Informação — ISO/IEC 27001:2022): parte estruturada do sistema de gestão corporativo baseada em abordagem de riscos de negócio para **estabelecer, implementar, operar, monitorar, analisar criticamente, manter e melhorar** a segurança da informação continuamente usando o ciclo PDCA e suporte da Alta Direção.',
      'BIA (Business Impact Analysis — Análise de Impacto no Negócio): etapa fundamental da continuidade que identifica processos críticos de negócio, dependências (sistemas, fornecedores, pessoas), impactos financeiros/operacionais/legais ao longo do tempo caso parem, e define formalmente **MTPD** (*Maximum Tolerable Period of Disruption*), **RTO** (*Recovery Time Objective*), **RPO** (*Recovery Point Objective*) e recursos mínimos de recuperação.',
      'MTPD / MAO (Maximum Tolerable Period of Disruption / Maximum Acceptable Outage): tempo limite absoluto além do qual a organização sofre danos irreversíveis ou inviabilidade operacional/regulatória; determina que `RTO + WRT <= MTPD` (onde `WRT` é *Work Recovery Time*).',
      'PCN (Plano de Continuidade de Negócios — ISO 22301:2019): conjunto documentado de procedimentos que guia a organização para responder, recuperar, retomar e restaurar entregas críticas de produtos e serviços em nível pré-definido após evento disruptivo (engloba Plano de Resposta a Incidentes/Crises, DRP de TI e planos de contingência operacional manual).',
      'Integração SGSI + Continuidade: segurança da informação protege disponibilidade em situações normais e ataques, enquanto continuidade assume quando um evento ultrapassa as defesas preventivas garantindo resiliência operacional e retorno ordenado.',
      'Exemplo operacional: em auditoria conjunta **ISO/IEC 27001:2022** e **ISO 22301:2019**, o comitê executa a **BIA** com a diretoria assistencial, fixando para a UTI um `MTPD = 2 horas` (`WRT = 30 min`, limitando o `RTO <= 90 min` e `RPO <= 5 min`). Esses parâmetros alimentam tanto os controles de disponibilidade do **SGSI** quanto os exercícios periódicos do **PCN** e **DRP**.'
    ],
    technicalReference: [
      'BIA define: Processos Críticos + Dependências + **MTPD**, **RTO** e **RPO** (base quantitativa/qualitativa para dimensionar DR)',
      'Normas âncora: **ISO/IEC 27001:2022** (SGSI — certificável) | **ISO 22301:2019** (SGCN / Continuidade de Negócios — certificável).'
    ],
    examTraps: [
      'A **BIA** NÃO é feita apenas pela equipe de TI isolada escolhendo RPO/RTO no chute — deve ser conduzida com os **donos dos processos de negócio**, pois só o negócio sabe quanto tempo aguenta parar sem dano fatal (MTPD).',
      'Não confundir **Avaliação de Riscos** (identifica ameaças/probabilidades como incêndio ou ransomware) com **BIA** (avalia o impacto da *indisponibilidade* do processo ao longo das horas independentemente de qual ameaça a causou!).',
      'O SGSI não consiste apenas em "instalar firewalls e antivírus" — abrange políticas, pessoas, processos, controles físicos, legais e melhoria contínua com comprometimento formal da direção.'
    ],
    keyTerms: [
      'SGSI (ISO/IEC 27001:2022): sistema de gestão baseado em riscos que estabelece, opera e melhora continuamente a segurança corporativa',
      'ISO 22301:2019 (SGCN / PCN): norma internacional certificável de continuidade de negócios para resposta e recuperação pós-disrupção',
      'BIA (Business Impact Analysis): levantamento junto aos donos de negócio das consequências da parada para definir MTPD, RTO e RPO',
      'MTPD / MAO: limite máximo absoluto de paralisação suportável antes de danos irreversíveis (RTO + WRT <= MTPD)',
      'Avaliação de Riscos vs BIA: análise de ameaças e probabilidades versus análise do impacto temporal da indisponibilidade do processo'
    ]
  },
  '16.1.10': {
    itemId: '16.1.10',
    highYieldSummary: [
      'Definição e escopo: **compliance** e **conformidade normativa** garantem aderência contínua da TI a obrigações legais (LGPD, LAI, Lei nº 14.133/2021), normas contratuais/técnicas (**ISO/IEC 27001**, **ISO/IEC 20000-1:2018**, PCI-DSS [*Payment Card Industry Data Security Standard*]) e políticas internas. Estruturam-se pelo **Modelo das Três Linhas**, trilhas de evidência objetivas e análise de lacunas (*Gap Analysis*).',
      'Compliance e Conformidade Normativa: estado de aderência contínua da organização e da TI às **obrigações legais e regulatórias** (LGPD, LAI, leis licitatórias/fiscais), **normas técnicas/contratuais** (PCI-DSS, ISO 27001, SLAs) e **políticas internas**.',
      'Controles Internos e Modelo das Três Linhas (IIA [*Institute of Internal Auditors*]): **(1ª Linha)** Operação e Gestores de TI/Negócio (donos dos processos e controles diários); **(2ª Linha)** Áreas de Riscos, Compliance e Segurança da Informação (definem políticas, orientam e monitoram aderência); **(3ª Linha)** Auditoria Interna independente (avaliação objetiva reportada ao Conselho/Alta Administração).',
      'Trilhas de Auditoria e Evidências de Conformidade: não basta "estar seguro ou cumprir a regra" — em auditorias (internas, TCU/CGU [*Tribunal de Contas da União / Controladoria-Geral da União*], externas) é indispensável comprovar conformidade por meio de **evidências objetivas rastreáveis** (logs preservados, aprovações de mudança, relatórios de revisão de acessos, atas de testes de DR).',
      'Gap Analysis (Análise de Lacunas): confronto sistemático entre o estado atual dos controles e os requisitos exatos de uma norma/lei, gerando plano de remediação priorizado.',
      'Compliance Contínuo (Automação): uso de ferramentas de *Policy-as-Code*, *baselines* CIS (*Center for Internet Security*) automatizados e varreduras periódicas para detectar desvios (*drift*) entre ciclos anuais de auditoria.',
      'Exemplo operacional: preparando-se para inspeção do TCU e recertificação **ISO/IEC 20000-1:2018**, a 2ª Linha realiza **Gap Analysis** automatizada com *benchmarks* CIS via Ansible e exige que a 1ª Linha arquive evidências imutáveis (aprovações de mudanças, revisão trimestral de contas no AD e atas de teste de DR). Posteriormente, a **3ª Linha (Auditoria Interna)** avalia de forma independente os controles e reporta diretamente ao Conselho.'
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
    keyTerms: [
      'Compliance Normativo: aderência contínua e comprovável a leis mandatórias, regulamentos setoriais, contratos e políticas internas',
      'Modelo das Três Linhas (IIA): 1ª linha (operação/execução), 2ª linha (risco/compliance/SI) e 3ª linha (auditoria interna independente)',
      'Evidências Objetivas de Auditoria: registros datados e imutáveis (logs, aprovações, atas) que comprovam execução efetiva dos controles',
      'Gap Analysis: comparação sistemática entre situação atual e requisitos normativos para priorizar remediações',
      'Compliance Contínuo (Policy-as-Code): verificação automatizada frequente de desvios de configuração contra baselines CIS'
    ]
  },
  '16.1.11': {
    itemId: '16.1.11',
    highYieldSummary: [
      'Definição e escopo: no setor público e corporativo brasileiro, a gestão de informações harmoniza a **Lei nº 12.527/2011 (LAI — Lei de Acesso à Informação)** com a **Lei nº 13.709/2018 (LGPD — Lei Geral de Proteção de Dados Pessoais)**. Define obrigações de transparência ativa e passiva, bases legais, papéis (**Controlador**, **Operador**, **Encarregado/DPO**), proteção reforçada a dados sensíveis e controles técnicos de segurança.',
      'Transparência Pública (Regra) vs Sigilo (Exceção) — LAI (Lei nº 12.527/2011): a publicidade é o preceito geral, dividida em **Transparência Ativa** (divulgação proativa espontânea em portais de dados abertos/transparência independentemente de pedido) e **Transparência Passiva** (atendimento a pedidos específicos apresentados por qualquer cidadão sem necessidade de justificar motivo, no prazo padrão de `20 dias` prorrogável por `+10 dias`).',
      'Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018): dados pessoais de pessoas naturais exigem tratamento lícito baseado em uma das bases legais (art. `7º` gerais e art. `11` sensíveis), respeitando os princípios do art. `6º` (com destaque para **Finalidade**, **Adequação**, **Necessidade [minimização]**, **Livre Acesso**, **Transparência**, **Segurança** e **Prevenção**).',
      'Papéis Fundamentais na LGPD (Lei nº 13.709/2018): **Titular** (pessoa natural dona dos dados), **Controlador** (define decisões sobre o tratamento), **Operador** (realiza tratamento em nome do controlador), **Encarregado / DPO** (*Data Protection Officer* — canal de comunicação entre controlador, titulares e a **ANPD** [*Autoridade Nacional de Proteção de Dados*]).',
      'Direitos do Titular e Dados Sensíveis: titulares têm direito à confirmação, acesso, correção, eliminação/anonimização (quando cabível) e revogação de consentimento; **dados pessoais sensíveis** (saúde — prontuários!, biometria, genética, religião, origem racial, orientação sexual, filiação sindical/política) exigem salvaguardas técnicas reforçadas.',
      'Impacto Direto na Infraestrutura de TI (*Privacy by Design* & Incidentes): exige criptografia em trânsito/repouso, pseudonimização/mascaramento em ambientes de homologação (NUNCA copiar banco real de produção com CPF/prontuários para teste sem anonimizar!), controle rigoroso de acessos e comunicação à ANPD e titulares em caso de incidente de segurança relevante.',
      'Exemplo operacional: um hospital público publica indicadores contratuais e orçamentários em **Transparência Ativa** (**LAI, Lei nº 12.527/2011**); ao receber pedido de prontuário estatístico em **Transparência Passiva**, entrega o documento tarjando identificadores para cumprir simultaneamente a **LGPD (Lei nº 13.709/2018)**. Na infraestrutura, o banco de homologação passa por mascaramento de dados pessoais e sensíveis de saúde antes da restauração, sob orientação do **Encarregado (DPO)**.'
    ],
    technicalReference: [
      'Transparência Ativa (proativa no portal sem pedido) vs Transparência Passiva (sob demanda do cidadão — prazo 20 + 10 dias na LAI)',
      'Papéis LGPD (Lei nº 13.709/2018): Titular | Controlador (decide) | Operador (executa sob ordem) | Encarregado/DPO (interlocutor) | ANPD (órgão fiscalizador).'
    ],
    examTraps: [
      'Restaurar backup real de produção contendo dados pessoais/clínicos diretamente em ambiente de **desenvolvimento/homologação** sem anonimização ou mascaramento viola os princípios de **Necessidade e Segurança** da LGPD.',
      'Na Administração Pública, a transparência e proteção de dados NÃO se anulam — solicitações via LAI envolvendo documentos com informações pessoais ou sigilosas seguem regra de acesso parcial (ocultando/tarjando apenas o trecho protegido, entregando o restante!).',
      'O **Operador** responde solidariamente caso descumpra obrigações da LGPD ou não siga as instruções lícitas do **Controlador**.'
    ],
    keyTerms: [
      'LAI (Lei nº 12.527/2011): transparência ativa proativa e passiva sob demanda (20 + 10 dias) com acesso parcial tarjado quando há sigilo',
      'LGPD (Lei nº 13.709/2018): marco legal de proteção de dados regido por bases legais (arts. 7º/11) e princípios como Finalidade e Necessidade',
      'Papéis LGPD (Titular / Controlador / Operador / DPO): distribuição de decisões, execução, interlocução e fiscalização pela ANPD',
      'Dados Pessoais Sensíveis: informações de saúde, biometria, genética e convicções que demandam controles técnicos reforçados',
      'Privacy by Design e Anonimização: proteção nativa desde a arquitetura e proibição de dados reais não mascarados em homologação'
    ]
  },
  '16.1.12': {
    itemId: '16.1.12',
    highYieldSummary: [
      'Definição e escopo: a **governança de dados** — estruturada por referências como o **DAMA-DMBoK** (*Data Management Body of Knowledge*) — exerce autoridade e controle compartilhado sobre os ativos de informação organizacionais. Define papéis (**Data Owner** e **Data Steward**), dimensões mensuráveis de qualidade, catálogo de metadados/linhagem (*Data Lineage*), dados mestres (**MDM**) e eliminação segura no ciclo de vida em alinhamento à **LGPD (Lei nº 13.709/2018)**.',
      'Governança de Dados: exercício de **autoridade e controle compartilhado** (planejamento, monitoramento e fiscalização) sobre a gestão dos ativos de dados — define políticas, padrões, **Data Owners** (donos de negócio responsáveis pela qualidade/classificação) e **Data Stewards** (guardiões técnicos/operacionais do dia a dia).',
      'Dimensões da Qualidade de Dados: dados confiáveis para decisão e operação devem atender dimensões mensuráveis — **Acurácia/Exatidão** (reflete a realidade), **Completude** (sem campos essenciais nulos), **Consistência** (sem contradições entre sistemas distintos), **Unicidade** (sem duplicidade de registros mestres), **Atualidade/Tempestividade** e **Validade** (aderência ao formato/domínio esperado).',
      'Metadados e Linhagem de Dados (Data Lineage): **Metadados** ("dados sobre os dados") dividem-se em técnicos (*schemas*, tipos, tabelas), de negócio (glossário, regras, dono) e operacionais (*logs* de carga/atualização); **Data Lineage** rastreia toda a origem, movimentações e transformações (**ETL/ELT** [*Extract, Transform, Load*]) do dado até relatórios finais, essencial para auditoria e impacto de mudanças.',
      'Ciclo de Vida dos Dados (Data Lifecycle Management): Planejamento -> Coleta/Criação -> Armazenamento & Proteção -> Uso/Compartilhamento -> Arquivamento -> **Descarte / Eliminação Segura** (sanitização criptográfica/sobrescrita ou destruição física conforme tabela de temporalidade e LGPD — manter dados eternamente sem base legal aumenta passivo e custos!).',
      'Dados Mestres e de Referência (MDM — Master Data Management): unifica "fonte única da verdade" (*Golden Record*) de entidades centrais (ex.: Paciente, Colaborador, Unidade, Fornecedor) evitando divergências entre múltiplos sistemas corporativos.',
      'Exemplo operacional: ao unificar o cadastro de pacientes em **MDM** (*Golden Record*) orientado pelo **DAMA-DMBoK**, o **Data Owner** (diretoria médica) define regras de **Unicidade** e **Completude** (CPF/CNS válido), enquanto o **Data Steward** documenta o **Data Lineage** da carga ETL até os painéis assistenciais. Ao fim do prazo legal da tabela de temporalidade e da **LGPD**, discos descomissionados passam por *crypto-erasure* / sanitização conforme **NIST SP 800-88**.'
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
    keyTerms: [
      'Data Owner vs Data Steward: autoridade de negócio responsável pelo dado versus executor técnico de qualidade e metadados',
      'Dimensões de Qualidade de Dados: Acurácia, Completude, Consistência, Unicidade, Atualidade e Validade',
      'Metadados e Data Lineage: descrição técnica/negócio dos dados e rastreamento ponta a ponta das transformações ETL/ELT',
      'Ciclo de Vida e Descarte Seguro: gestão do nascimento até sanitização definitiva (NIST SP 800-88) conforme temporalidade e LGPD',
      'MDM (Golden Record): consolidação de entidades centrais (Paciente, Unidade, Servidor) como fonte única confiável'
    ]
  }
};
