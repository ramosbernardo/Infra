import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_16B: Record<string, StudyGuide> = {
  '16.2.1': {
    itemId: '16.2.1',
    highYieldSummary: [
      'Definição e escopo: o **COBIT 2019** (*Control Objectives for Information and Related Technologies*, **ISACA** — *Information Systems Audit and Control Association*) é um framework de **Governança e Gestão de I&T** (*Informação e Tecnologia*) corporativa. Atua integrando metas de negócio, fatores de contexto e sete componentes organizacionais para direcionar investimentos, conformidade e criação de valor.',
      'Estrutura Geral do COBIT 2019 (ISACA): separa claramente Governança de Gestão em **5 Domínios** e **40 Objetivos de Governança e Gestão** — Governança (`1` domínio: **EDM** — *Evaluate, Direct and Monitor* / Avaliar, Dirigir e Monitorar com `5` objetivos) e Gestão (`4` domínios: **APO** — *Align, Plan and Organize* / Alinhar, Planejar e Organizar [`14`]; **BAI** — *Build, Acquire and Implement* / Construir, Adquirir e Implementar [`11`]; **DSS** — *Deliver, Service and Support* / Entregar, Servir e Suportar [`6`]; **MEA** — *Monitor, Evaluate and Assess* / Monitorar, Avaliar e Analisar [`4`]).',
      'Os 6 Princípios do Sistema de Governança (vs 3 do Framework): Sistema de Governança = (1) Prover valor às partes interessadas, (2) Abordagem holística (`7` componentes), (3) Sistema de governança dinâmico, (4) Governança distinta da gestão, (5) Adaptado às necessidades da organização (**Design Factors**) e (6) Sistema de governança fim a fim; Framework = baseado em modelo conceitual, aberto/flexível e alinhado às principais normas.',
      'Os 7 Componentes de um Sistema de Governança: Processos; Estruturas Organizacionais; Princípios, Políticas e Frameworks; Informação; Cultura, Ética e Comportamento; Pessoas, Habilidades e Competências; e Serviços, Infraestrutura e Aplicações.',
      'Cascata de Metas (*Goals Cascade*) e Fatores de Desenho (*Design Factors*): traduz necessidades das partes interessadas -> Metas Corporativas (*Enterprise Goals*) -> Metas de Alinhamento (*Alignment Goals*) -> Objetivos de Governança e Gestão; e adapta o sistema usando **11 Design Factors** (estratégia, metas corporativas, perfil de risco, problemas relacionados a I&T, cenário de ameaças, requisitos de conformidade, papel da TI, modelo de *sourcing*, métodos de implementação, estratégia de adoção tecnológica e porte da empresa).',
      'Gestão de Desempenho (**CPM** — *COBIT Performance Management* baseado em **CMMI** — *Capability Maturity Model Integration*): avalia **Capacidade de Processos** em níveis de **0 a 5** e **Maturidade das Áreas de Foco** em níveis de **0 a 5**, exigindo que as atividades requeridas do nível atual sejam cumpridas para progredir.',
      'Exemplo operacional: aplicando os *Design Factors* **DF5** (Cenário de Ameaças Alto) e **DF6** (Requisitos de Conformidade — LGPD) no **COBIT 2019**, o comitê eleva a prioridade de `APO13` (Segurança Gerenciada) e `DSS05` (Serviços de Segurança Gerenciados) para nível de capacidade `3` na escala **CPM/CMMI** (`0` a `5`), enquanto o conselho monitora o apetite a risco em `EDM03`.'
    ],
    technicalReference: [
      'COBIT 2019 = **5 Domínios / 40 Objetivos**: Governança (`EDM` = 5) | Gestão (`APO` = 14, `BAI` = 11, `DSS` = 6, `MEA` = 4)',
      '6 Princípios de Sistema de Governança + 3 Princípios de Framework | 7 Componentes | Escala de Capacidade baseada em CMMI (0 a 5).'
    ],
    examTraps: [
      'Pegadinha clássica entre versões: no COBIT 5 eram 37 processos e "Enablers"; no **COBIT 2019** são **40 Objetivos de Governança e Gestão** (novos incluem APO14 Dados Gerenciados, BAI11 Projetos Gerenciados e MEA04 Garantia Gerenciada) e **7 Componentes**!',
      'Não confundir os **6 Princípios do Sistema de Governança** com os **3 Princípios do Framework de Governança**.',
      '`APO` (Planejar/Organizar), `BAI` (Construir/Implementar), `DSS` (Entregar/Suportar) e `MEA` (Monitorar/Avaliar) pertencem à **GESTÃO**; somente `EDM` pertence à **GOVERNANÇA**.'
    ],
    keyTerms: [
      'COBIT 2019 (5 Domínios / 40 Objetivos): framework da ISACA dividido em Governança (EDM: 5) e Gestão (APO: 14, BAI: 11, DSS: 6, MEA: 4)',
      '6 Princípios de Sistema + 3 de Framework: requisitos do sistema de governança dinâmico/holístico separados dos princípios do modelo conceitual',
      'Cascata de Metas e 11 Design Factors: desdobramento de necessidades em objetivos e adaptação do sistema conforme contexto organizacional',
      '7 Componentes de Governança: processos, estruturas, políticas, informação, cultura/ética, pessoas/competências e infraestrutura/aplicações',
      'CPM (CMMI 0 a 5): modelo de avaliação de capacidade de processos e maturidade de áreas de foco no COBIT 2019'
    ]
  },
  '16.2.2': {
    itemId: '16.2.2',
    highYieldSummary: [
      'Definição e escopo: a **ABNT NBR ISO/IEC 38500:2018** (equivalente à **ISO/IEC 38500:2015**, atualizada internacionalmente em 2024) é a norma de **Governança Corporativa de TI** (*Tecnologia da Informação*) direcionada ao **Corpo Dirigente**. Estabelece princípios e o modelo **EDM** para assegurar uso eficaz, eficiente e aceitável da TI sem invadir a operação gerencial.',
      'Objetivo e Público-Alvo da ISO/IEC 38500: norma internacional para **Governança Corporativa de TI** voltada especificamente para o **Corpo Dirigente / Alta Administração** (conselheiros, diretores, executivos), aplicando-se a organizações de qualquer porte (públicas ou privadas) para uso eficaz, eficiente e aceitável de TI.',
      'Modelo **EDM** (*Evaluate, Direct, Monitor*): exige que dirigentes governem a TI por meio de três tarefas contínuas — **Avaliar (*Evaluate*)** uso atual e futuro da TI diante de pressões externas e oportunidades; **Dirigir (*Direct*)** preparando políticas e planos alinhados ao negócio; **Monitorar (*Monitor*)** conformidade com políticas e desempenho frente aos planos.',
      'Os 6 Princípios Obrigatórios da ISO/IEC 38500: **(1) Responsabilidade** (indivíduos e grupos compreendem e aceitam responsabilidades sobre oferta/demanda de TI), **(2) Estratégia** (estratégia do negócio considera capacidades de TI e planos de TI satisfazem negócio), **(3) Aquisição** (decisões válidas balanceando benefícios, oportunidades, custos e riscos de curto/longo prazo), **(4) Desempenho** (TI adequada ao propósito suportando requisitos do negócio), **(5) Conformidade** (cumprimento de leis/regulamentos obrigatórios) e **(6) Comportamento Humano** (respeito às pessoas envolvidas no processo).',
      'Diferença de Nível vs ITIL/COBIT: a ISO/IEC 38500 é enxuta e focada estritamente na alta cúpula diretiva (princípios + modelo EDM), sem prescrever processos detalhados de operação técnica (papel coberto por COBIT/ITIL).',
      'Proposta, Plano e Políticas na Comunicação Dirigentes <-> Gestores: gestores submetem **Propostas** para avaliação dos dirigentes; dirigentes aprovam **Políticas e Planos** direcionando os gestores e acompanham via indicadores de **Desempenho e Conformidade**.',
      'Exemplo operacional: na adoção de sistema de telemedicina, os gestores submetem a **Proposta** arquitetural ao conselho diretor; aplicando o modelo **EDM** da **ABNT NBR ISO/IEC 38500:2018**, o corpo dirigente **Avalia** retorno e riscos clínicos (Aquisição), **Dirige** aprovando política de privacidade (Conformidade e Comportamento Humano) e **Monitora** indicadores trimestrais de disponibilidade (Desempenho).'
    ],
    technicalReference: [
      'Modelo Central ISO/IEC 38500: **Avaliar (Evaluate) -> Dirigir (Direct) -> Monitorar (Monitor)** — ciclo contínuo do Corpo Dirigente',
      '6 Princípios (Mnemônico REAP-CC): **R**esponsabilidade, **E**stratégia, **A**quisição, Desempenho (**P**erformance), **C**onformidade, **C**omportamento Humano.'
    ],
    examTraps: [
      'Banca cobra a lista literal dos 6 princípios — termos como "Agilidade", "Redução de Custos a Qualquer Custo" ou "Terceirização" NÃO fazem parte dos 6 princípios da ISO/IEC 38500!',
      'A ISO/IEC 38500 destina-se aos **dirigentes executivos/conselho**, e NÃO à equipe operacional de service desk ou administradores de rede.',
      'Não confundir os 3 verbos do modelo da ISO/IEC 38500 (**Avaliar, Dirigir, Monitorar**) com "Planejar, Construir, Executar, Monitorar" (que são da Gestão).'
    ],
    keyTerms: [
      'ISO/IEC 38500 (ABNT NBR 38500:2018): norma voltada ao corpo dirigente para assegurar uso eficaz, eficiente e aceitável da TI',
      'Modelo EDM (Evaluate / Direct / Monitor): ciclo contínuo dos dirigentes de avaliar propostas, dirigir por políticas/planos e monitorar conformidade',
      '6 Princípios da ISO/IEC 38500: Responsabilidade, Estratégia, Aquisição, Desempenho, Conformidade e Comportamento Humano',
      'Propostas, Políticas e Planos: fluxo formal pelo qual gestores submetem propostas e dirigentes emitem diretrizes e acompanham resultados',
      'Escopo Diretivo vs Operacional: foco exclusivo na alta direção, distinto dos processos detalhados de gestão do COBIT e da ITIL'
    ]
  },
  '16.2.3': {
    itemId: '16.2.3',
    highYieldSummary: [
      'Definição e escopo: a **ITIL 4** (*Information Technology Infrastructure Library*, publicada em 2019 pela AXELOS) é o framework de referência para **Gerenciamento de Serviços de TI (ITSM)**. Atua sobre toda a organização conectando as **4 Dimensões** ao **Sistema de Valor de Serviço (SVS)** para viabilizar a cocriação ágil de valor.',
      'Arquitetura Central da ITIL 4 (SVS + 4 Dimensões): abandona os silos rígidos de ciclo de vida da v3 e centra-se no **Sistema de Valor de Serviço (SVS)** apoiado pelas **4 Dimensões do Gerenciamento de Serviços** — (1) Organizações e Pessoas, (2) Informação e Tecnologia, (3) Parceiros e Fornecedores, (4) Fluxos de Valor e Processos (cercados por fatores externos **PESTLE** — *Political, Economic, Social, Technological, Legal, Environmental*).',
      'Os 7 Princípios Orientadores da ITIL 4 (Memorizar todos!): **(1) Foco no valor**, **(2) Começar de onde você está**, **(3) Progredir iterativamente com feedback**, **(4) Colaborar e promover visibilidade**, **(5) Pensar e trabalhar holisticamente**, **(6) Manter de forma simples e prática** e **(7) Otimizar e automatizar**.',
      'As 6 Atividades da Cadeia de Valor de Serviço (**SVC** — *Service Value Chain*): **Planejar (*Plan*)**, **Melhorar (*Improve*)**, **Engajar (*Engage*)**, **Desenho e Transição (*Design & Transition*)**, **Obtenção/Construção (*Obtain/Build*)** e **Entrega e Suporte (*Deliver & Support*)** — combinadas livremente para formar fluxos de valor específicos.',
      'As 34 Práticas de Gerenciamento da ITIL 4 (em `3` Grupos): **14 Práticas Gerais de Gerenciamento** (ex.: Melhoria Contínua, Segurança da Informação, Gerenciamento de Riscos/Projetos/Fornecedores), **17 Práticas de Gerenciamento de Serviços** (ex.: Central de Serviços, Incidentes, Problemas, Habilitação de Mudança, Liberação, Configuração, Disponibilidade, Capacidade e Desempenho) e **3 Práticas de Gerenciamento Técnico** (Gerenciamento de Implantação, Infraestrutura e Plataforma, Desenvolvimento e Gestão de Software).',
      'Diferenciação Técnica Clássica: **Central de Serviços (*Service Desk*)** é o ponto único de contato (**SPOC** — *Single Point of Contact*) para capturar demanda de incidentes e requisições; **Gerenciamento de Liberação** disponibiliza novos serviços/funcionalidades para uso; **Gerenciamento de Implantação** movimenta componentes novos/alterados (software/hardware) para ambientes vivos ou homologação.',
      'Exemplo operacional: durante atualização do portal de exames na **ITIL 4**, a demanda entra por **Engajar** na **SVC**, percorre **Desenho e Transição -> Obtenção/Construção -> Entrega e Suporte**, utiliza **Gerenciamento de Implantação** (Prática Técnica) para publicar o binário em janela controlada, **Gerenciamento de Liberação** (Prática de Serviço) para liberar o recurso aos médicos e **Central de Serviços (SPOC)** para suporte pós-virada.'
    ],
    technicalReference: [
      'ITIL 4 Estrutura: **4 Dimensões** + **SVS** (7 Princípios Orientadores | Governança | 6 Atividades da Cadeia de Valor | 34 Práticas | Melhoria Contínua)',
      '34 Práticas = 14 Gerais + 17 de Serviços + 3 Técnicas | Lembre: "Otimizar e automatizar" (otimizar ANTES de automatizar!).'
    ],
    examTraps: [
      'Pegadinha clássica: no princípio 7 (**Otimizar e automatizar**), deve-se **PRIMEIRO otimizar** o processo e SÓ DEPOIS automatizá-lo — automatizar um processo ruim apenas multiplica ineficiências.',
      'Na ITIL 4, **Gerenciamento de Infraestrutura e Plataforma** e **Gerenciamento de Implantação** são **Práticas Técnicas** (3 práticas técnicas), enquanto Central de Serviços, Incidentes, Problemas e Habilitação de Mudança são **Práticas de Gerenciamento de Serviços** (17).',
      'Os antigos "Processos" da ITIL v3 evoluíram na ITIL 4 para **34 Práticas** (que englobam pessoas, cultura, tecnologias e parceiros, não só fluxogramas) — e Central de Serviços deixou de ser apenas "Função" e virou Prática.'
    ],
    keyTerms: [
      'ITIL 4 (SVS & 4 Dimensões): arquitetura integrada por Princípios, Governança, Cadeia de Valor, Práticas e Melhoria Contínua sobre quatro dimensões',
      '7 Princípios Orientadores: diretrizes universais como Foco no Valor, Começar Onde Está e Otimizar e Automatizar',
      '6 Atividades da SVC: Planejar, Melhorar, Engajar, Desenho/Transição, Obtenção/Construção e Entrega/Suporte combinadas em fluxos de valor',
      '34 Práticas (14 + 17 + 3): 14 Gerais, 17 de Gerenciamento de Serviços e 3 Técnicas que substituem o conceito rígido de processos da v3',
      'Central de Serviços (SPOC) vs Liberação vs Implantação: ponto único de contato (SPOC) distinto da disponibilização funcional e da movimentação técnica'
    ]
  },
  '16.2.4': {
    itemId: '16.2.4',
    highYieldSummary: [
      'Definição e escopo: a **ABNT NBR ISO 31000:2018** (*Associação Brasileira de Normas Técnicas*) estabelece diretrizes não certificáveis para **Gestão de Riscos** aplicáveis a qualquer organização. Integra liderança, contexto organizacional e processo decisório estruturado para criar e proteger valor diante de incertezas.',
      'Visão Geral da ABNT NBR ISO 31000:2018: norma internacional de diretrizes (não certificável!) para **Gestão de Riscos** aplicável a qualquer tipo de organização e atividade, estruturada em três pilares — **Princípios** (criação e proteção de valor no centro), **Estrutura / Framework** (integração, concepção, implementação, avaliação e melhoria com foco em Liderança e Comprometimento) e **Processo**.',
      'Os 8 Princípios da ISO 31000:2018: integrada; estruturada e abrangente; personalizada; inclusiva; dinâmica; baseada na melhor informação disponível; considera fatores humanos e culturais; melhoria contínua.',
      'Processo de Gestão de Riscos (Passo a Passo Literal): envolve continuamente **Comunicação e Consulta** (com partes interessadas) e **Monitoramento e Análise Crítica** + **Registro e Relato**; seu núcleo inicia definindo **Escopo, Contexto e Critérios** -> passa pelo **Processo de Avaliação de Riscos (*Risk Assessment*)**: **(1) Identificação de Riscos**, **(2) Análise de Riscos** e **(3) Avaliação de Riscos (*Risk Evaluation*)** -> segue para **Tratamento de Riscos**.',
      'Contexto Interno/Externo e Critérios de Risco: antes de listar riscos, define-se o escopo e os critérios (escala de probabilidade, impacto, apetite a risco e como combinar níveis) ajustados à cultura e metas da organização.',
      'Seleção e Implementação do Tratamento: processo cíclico de formular opções -> avaliar efetividade -> planejar tratamento verificando se o **risco residual** resultante é aceitável (se não for, aplicar tratamento adicional).',
      'Exemplo operacional: aplicando a **ABNT NBR ISO 31000:2018** ao datacenter hospitalar, define-se **Escopo/Contexto/Critérios** (`impacto clínico crítico > 15 min`), executa-se o *Risk Assessment* (**Identificação**: perda de link único; **Análise**: probabilidade média × impacto crítico; **Evaluation**: acima do apetite) e implementa-se **Tratamento** com duplo link **BGP** (*Border Gateway Protocol*), registrando e monitorando o **risco residual**.'
    ],
    technicalReference: [
      'ISO 31000:2018 = **Princípios (8)** + **Estrutura (Liderança no centro)** + **Processo** (Escopo/Contexto/Critérios -> Avaliação [Identificação + Análise + Avaliação] -> Tratamento)',
      'Atenção à nomenclatura em português da ABNT: **Processo de Avaliação de Riscos** contém Identificação + Análise + Avaliação de Riscos.'
    ],
    examTraps: [
      'A ISO 31000 fornece **diretrizes gerais** — ela **NÃO** tem finalidade de certificação formal (ao contrário da ISO 27001 e ISO 22301!).',
      'A ordem literal dentro do Processo de Avaliação de Riscos na ISO 31000 é obrigatoriamente: **Identificação -> Análise -> Avaliação (Evaluation)**, e somente depois vem o **Tratamento**!',
      'Risco na ISO 31000 é definido como o **"efeito da incerteza nos objetivos"** — podendo ter desvio **positivo (oportunidade)** ou **negativo (ameaça)**, não apenas perdas.'
    ],
    keyTerms: [
      'ISO 31000:2018 (Não Certificável): norma de diretrizes estruturada em 8 Princípios, Estrutura com Liderança central e Processo contínuo',
      'Escopo, Contexto e Critérios: etapa prévia que estabelece parâmetros de probabilidade, impacto e apetite a risco da organização',
      'Processo de Avaliação de Riscos (Risk Assessment): tríade sequencial composta por Identificação, Análise e Avaliação (Evaluation) de Riscos',
      'Tratamento de Riscos e Risco Residual: seleção cíclica de controles até atingir exposição residual aceitável frente aos critérios definidos',
      'Comunicação, Monitoramento e Registro: atividades transversais contínuas em todas as etapas do processo de gestão de riscos'
    ]
  },
  '16.2.5': {
    itemId: '16.2.5',
    highYieldSummary: [
      'Definição e escopo: os frameworks do **COSO** (*Committee of Sponsoring Organizations of the Treadway Commission*) estruturam **Controles Internos (COSO IC 2013)** e **Gerenciamento de Riscos Corporativos (COSO ERM 2004/2017)**. Sustentam a confiabilidade operacional, financeira e regulatória, fundamentando auditorias de controles gerais de TI (**ITGC** — *IT General Controls*).',
      '**COSO IC** (*Internal Control* — Controles Internos — Cubo de **2013**): framework voltado a garantir confiabilidade operacional, de relatórios e conformidade; possui **3 Categorias de Objetivos** (Operacionais, Divulgação/Relatórios e Conformidade), **5 Componentes** integrados e **17 Princípios** distribuídos pelos componentes, aplicados sobre **4 Níveis de Estrutura Organizacional** (Entidade, Divisão, Unidade Operacional, Função).',
      'Os 5 Componentes do COSO IC (Controles Internos): **(1) Ambiente de Controle** (base ética/integridade, *tone at the top*), **(2) Avaliação de Riscos**, **(3) Atividades de Controle** (políticas/procedimentos preventivos e detectivos), **(4) Informação e Comunicação** e **(5) Atividades de Monitoramento**.',
      '**COSO ERM** (*Enterprise Risk Management* — Cubo **2004** vs Versão Atual **2017**): o clássico cubo de **2004** possuía `4` objetivos (Estratégico, Operações, Comunicação/Relatórios, Conformidade) e `8` componentes; a versão atual é o **COSO ERM 2017** (*Enterprise Risk Management – Integrating with Strategy and Performance*), que adota formato de dupla hélice com **5 componentes e 20 princípios**: **(1) Governança e Cultura**; **(2) Estratégia e Definição de Objetivos**; **(3) Performance**; **(4) Análise e Revisão**; **(5) Informação, Comunicação e Divulgação**.',
      'Relação entre COSO e Infraestrutura de TI: controles gerais de TI (**ITGC** — gestão de acessos, gestão de mudanças em produção, backup/continuidade, operações) sustentam a confiabilidade dos sistemas financeiros/assistenciais auditados pelo modelo COSO.',
      '*Tone at the Top* (Ambiente de Controle): nenhum controle técnico de TI compensa uma cultura organizacional onde a liderança ignora políticas ou autoriza burlar processos de segurança.',
      'Exemplo operacional: em auditoria anual baseada no **COSO IC (2013)** sobre o faturamento hospitalar, verificam-se os **ITGC** dentro de **Atividades de Controle**: segregação de funções (quem desenvolve não promove código em produção), revisão trimestral de privilégios no banco de dados e monitoramento contínuo de logs, ancorados no **Ambiente de Controle** da diretoria.'
    ],
    technicalReference: [
      'COSO IC (2013): **3 Objetivos** (Operacional, Relatórios, Conformidade) × **5 Componentes** (17 Princípios) × **4 Estruturas**',
      'COSO ERM 2017 (Versão Atual — Integrating with Strategy and Performance): **5 Componentes / 20 Princípios** (Governança e Cultura; Estratégia e Definição de Objetivos; Performance; Análise e Revisão; Informação, Comunicação e Divulgação).'
    ],
    examTraps: [
      'Pegadinha clássica entre COSO IC e COSO ERM 2004: o **COSO IC** tem **3 objetivos e 5 componentes (17 princípios)**; o **COSO ERM 2004** acrescenta o objetivo **Estratégico** (total 4) e expande para **8 componentes** (incluindo Fixação de Objetivos, Identificação de Eventos e Resposta a Riscos).',
      'O **Ambiente de Controle** ("tone at the top", ética, integridade e estrutura de autoridade) é a base fundamental de todos os demais componentes do COSO.',
      'Controles Internos fornecem segurança **razoável** (e **NÃO absoluta**) quanto ao atingimento dos objetivos devido a limitações humanas e colusão.'
    ],
    keyTerms: [
      'COSO IC (2013 — 5 Componentes / 17 Princípios): cubo de controles internos com 3 objetivos (Operacional, Relatórios, Conformidade) e 4 níveis estruturais',
      'COSO ERM 2004 vs 2017: evolução do cubo de 4 objetivos e 8 componentes (2004) para hélice de 5 componentes e 20 princípios (2017)',
      'Ambiente de Controle (Tone at the Top): componente basilar que reflete ética, integridade e comprometimento da alta direção',
      'Atividades de Controle (ITGC): controles gerais de TI de acesso, mudanças, operações e continuidade que sustentam sistemas corporativos',
      'Segurança Razoável: limite inerente dos controles internos sujeito a falha humana, julgamento e conluio'
    ]
  },
  '16.2.6': {
    itemId: '16.2.6',
    highYieldSummary: [
      'Definição e escopo: o **PMBOK 7ª Edição (2021)** (*Project Management Body of Knowledge*, **PMI** — *Project Management Institute*) redefine o gerenciamento de projetos ao substituir o guia prescritivo de processos por um **Sistema de Entrega de Valor** orientado a resultados (*outcomes*). Atua em ciclos preditivos, ágeis ou híbridos por meio de **12 princípios**, **8 domínios de desempenho** e adaptação (*Tailoring*).',
      'Mudança de Paradigma da 7ª Edição do PMBOK (PMI): deixou de ser um guia prescritivo centrado em `49` processos e `10` áreas de conhecimento (como era a 6ª edição) para adotar abordagem baseada em **Princípios** e **Domínios de Desempenho**, alinhada ao **Sistema de Entrega de Valor** e abrangendo métodos preditivos, adaptativos/ágeis e híbridos.',
      'Os 12 Princípios de Gerenciamento de Projetos (PMBOK 7ª Ed.): Administração diligente/ética (*Stewardship*); Equipe colaborativa; Engajamento eficaz das partes interessadas; **Foco no valor**; Reconhecimento/resposta às interações do sistema (pensamento sistêmico); Liderança; **Adaptação (*Tailoring*)** conforme contexto; Qualidade nos processos e entregas; Navegação na complexidade; Otimização das respostas aos riscos; Adaptabilidade e resiliência; Viabilização da mudança para alcançar o estado futuro.',
      'Os 8 Domínios de Desempenho do Projeto: **(1) Partes Interessadas (*Stakeholders*)**, **(2) Equipe**, **(3) Abordagem de Desenvolvimento e Ciclo de Vida**, **(4) Planejamento**, **(5) Trabalho do Projeto**, **(6) Entrega**, **(7) Medição** e **(8) Incerteza**.',
      'Adaptação (*Tailoring*) e Modelos/Métodos/Artefatos: o PMBOK 7 fornece uma caixa de ferramentas de Modelos, Métodos e Artefatos aplicados sob medida (**Tailoring**) para cada projeto — sem impor documentação pesada desnecessária.',
      'Foco em Resultados (*Outcomes*) vs Entregas (*Outputs*): um projeto de infraestrutura só gera valor real quando a entrega técnica (`Output`: cluster instalado) produz resultado de negócio (`Outcome`: redução real de falhas e agilidade no atendimento).',
      'Exemplo operacional: na implantação de novo armazenamento flash hospitalar sob o **PMBOK 7ª ed. (2021)**, o gerente aplica **Tailoring** (domínio *Abordagem de Desenvolvimento*) combinando compras preditivas com migração incremental em ondas, monitora o domínio *Incerteza* com testes de *failover* e avalia no domínio *Medição* não apenas o `Output` (`storage` ligado) mas o `Outcome` (`latência PACS < 5 ms`).'
    ],
    technicalReference: [
      'PMBOK 7ª Edição (2021): **12 Princípios** + **8 Domínios de Desempenho** + **Adaptação (Tailoring)** + **Modelos, Métodos e Artefatos**',
      'Diferença 6ª vs 7ª Edição: 6ª (5 Grupos de Processos + 10 Áreas + 49 Processos) -> 7ª (12 Princípios + 8 Domínios + foco em Entrega de Valor).'
    ],
    examTraps: [
      'A banca pede explicitamente **PMBOK 7ª edição**: se uma alternativa afirmar que o PMBOK 7 organiza o conteúdo em "10 áreas de conhecimento e 49 processos obrigatórios" (característica da 6ª edição), está **ERRADA**!',
      'Os 8 Domínios de Desempenho trabalham **interligados de forma sistêmica simultânea** durante todo o projeto (NÃO são fases sequenciais do projeto!).',
      'No PMBOK 7, **Adaptação (Tailoring)** incentiva escolher o ciclo de vida (preditivo, iterativo, incremental, ágil ou híbrido) adequado ao contexto específico do projeto.'
    ],
    keyTerms: [
      'PMBOK 7ª Edição (2021): padrão do PMI centrado em Sistema de Entrega de Valor, substituindo a rigidez processual da 6ª edição',
      '12 Princípios de Gerenciamento: declarações éticas e comportamentais que orientam decisões (ex.: Stewardship, Foco no Valor, Tailoring)',
      '8 Domínios de Desempenho: áreas interativas simultâneas (Stakeholders, Equipe, Ciclo de Vida, Planejamento, Trabalho, Entrega, Medição e Incerteza)',
      'Tailoring (Adaptação): seleção deliberada de abordagem, processos e artefatos proporcional ao contexto e risco do projeto',
      'Outputs vs Outcomes: entrega técnica produzida pelo projeto versus benefício e impacto efetivo percebido pelo negócio'
    ]
  },
  '16.2.7': {
    itemId: '16.2.7',
    highYieldSummary: [
      'Definição e escopo: **Scrum** (**Guia do Scrum 2020**) e **Kanban** são referenciais ágeis/enxutos para entrega iterativa de projetos e gestão contínua de fluxo operacional em TI. O Scrum organiza equipes autogerenciáveis em ciclos fixos (*Sprints*), enquanto o Kanban otimiza fluxo puxado limitando trabalho em progresso (**WIP** — *Work In Progress*).',
      'Framework Scrum (`3` Responsabilidades, `3` Artefatos e `5` Eventos — **Guia do Scrum 2020**): baseia-se no empirismo (**Transparência, Inspeção e Adaptação**); equipe **Scrum Team** autogerenciável e multifuncional sem hierarquias internas formada por **Product Owner (PO)** (maximiza valor e ordena o *Product Backlog*), **Scrum Master (SM)** (líder servidor que garante entendimento do Scrum e remove impedimentos) e **Developers** (constroem o Incremento pronto).',
      'Os 5 Eventos e 3 Artefatos do Scrum: a **Sprint** (*time-box* `<= 1` mês que contém os demais `4` eventos) inclui **Sprint Planning** (o quê e como entregar), **Daily Scrum** (`15 min` diários pelos Developers para inspecionar progresso rumo à Meta da Sprint), **Sprint Review** (inspeção do Incremento com *stakeholders* e adaptação do *Product Backlog*) e **Sprint Retrospective** (melhoria de pessoas, processos e ferramentas da equipe); os **3 Artefatos (+ Compromissos)** são **Product Backlog** (compromisso: Meta do Produto — *Product Goal*), **Sprint Backlog** (Meta da Sprint — *Sprint Goal*) e **Incremento** (Definição de Pronto — **DoD** [*Definition of Done*]).',
      'Método Kanban (Fluxo Contínuo Baseado em Puxar): evolui o processo atual ("comece com o que faz agora") usando **6 práticas gerais** — **(1) Visualizar o fluxo de trabalho** (quadro Kanban com colunas), **(2) Limitar o Trabalho em Progresso (WIP Limit)** (chave para evitar gargalos e multitarefa destrutiva!), **(3) Gerenciar o fluxo** (medindo **Lead Time**, **Cycle Time** e *Throughput*), **(4) Tornar políticas explícitas**, **(5) Implementar ciclos de feedback** e **(6) Melhorar colaborativamente / evoluir experimentalmente**.',
      'Diferença Prática Scrum vs Kanban em Infraestrutura de TI: **Scrum** funciona muito bem para projetos estruturados com entregas planejáveis em *Sprints* fixas (ex.: implantação de nova nuvem/arquitetura); **Kanban** brilha em operações contínuas de infraestrutura/sustentação/Service Desk **N2/N3** (*Níveis 2 e 3*) onde demandas chegam de forma imprevisível sem esperar próxima *Sprint*.',
      'Métricas Kanban Essenciais: **Lead Time** (tempo total da solicitação entrar na fila até ser entregue ao cliente), **Cycle Time** (tempo em que a equipe esteve efetivamente trabalhando no item) e **Lei de Little** (`Lead Time Médio = WIP Médio / Throughput Médio`).',
      'Exemplo operacional: na sustentação de redes **N2/N3**, o time opera **Kanban** com `WIP Limit = 6` chamados em andamento e *Throughput* médio de `3` chamados/dia, obtendo `Lead Time Médio = 6 / 3 = 2 dias` pela Lei de Little; paralelamente, a migração do controlador Wi-Fi segue o **Guia do Scrum 2020** em *Sprints* de `2 semanas` com *Daily Scrum* de `15 min` e validação final contra a **DoD**.'
    ],
    technicalReference: [
      'Scrum (3-5-3): 3 Responsabilidades (PO, SM, Developers) | 5 Eventos (Sprint, Planning, Daily 15m, Review, Retrospective) | 3 Artefatos (Product Backlog, Sprint Backlog, Incremento + DoD)',
      'Kanban: Sem papéis obrigatórios nem Sprints fixas -> Foco em **Visualização + Limite de WIP + Gestão de Fluxo (Lead/Cycle Time)**.'
    ],
    examTraps: [
      'Na **Daily Scrum** (15 minutos), o evento pertence aos **Developers** (PO e Scrum Master não precisam comandar nem receber "relatório de status" de chefia!); além disso, a Sprint Review inspeciona o **produto/Incremento**, enquanto a Sprint Retrospective inspeciona o **processo e colaboração do time**.',
      'Kanban **NÃO proíbe** iterações nem exige descartar cargos existentes — seu coração operacional é **limitar o WIP (Work In Progress)** para acelerar o fluxo puxado e expor gargalos imediatamente.',
      'No Guia Scrum 2020, não existe mais o termo "Papéis (Roles)" e sim **Responsabilidades (Accountabilities)** — além disso, toda Sprint gera pelo menos um Incremento potencialmente utilizável que atende à **Definição de Pronto (DoD)**.'
    ],
    keyTerms: [
      'Guia do Scrum 2020 (3-5-3): 3 Responsabilidades (PO, SM, Developers), 5 Eventos e 3 Artefatos ligados a Product Goal, Sprint Goal e DoD',
      'Empirismo e Daily Scrum: pilares de Transparência, Inspeção e Adaptação com evento diário de 15 min conduzido pelos Developers',
      'Kanban (6 Práticas e Limite de WIP): evolução contínua de fluxo puxado limitando o trabalho em progresso para expor gargalos',
      'Lead Time vs Cycle Time: tempo total da entrada na fila até a entrega versus tempo efetivo em execução ativa',
      'Lei de Little: relação matemática onde Lead Time Médio equivale ao WIP Médio dividido pelo Throughput Médio'
    ]
  },
  '16.2.8': {
    itemId: '16.2.8',
    highYieldSummary: [
      'Definição e escopo: o **PETI** (*Planejamento Estratégico de TI*) e o **PDTI/PDTIC** (*Plano Diretor de Tecnologia da Informação e Comunicação*) compõem o sistema de planejamento de TI no setor público (**SISP** — *Sistema de Administração dos Recursos de Tecnologia da Informação* / **IN SGD/ME**). Conectam a estratégia institucional ao orçamento, riscos, capacitação e contratações anuais.',
      '**PETI** (Planejamento Estratégico de TI): instrumento de nível **estratégico** que define visão de futuro da TI, posicionamento, princípios arquiteturais e direcionadores de médio/longo prazo em estrita sintonia com o Planejamento Estratégico Institucional (**PEI**).',
      '**PDTI / PDTIC** (Plano Diretor de Tecnologia da Informação e Comunicação): instrumento de diagnóstico, planejamento e gestão dos recursos e processos de TI de nível **tático-operacional** (típico ciclo de `2` a `4` anos com revisões anuais) alinhado às normas do **SISP** / Administração Pública.',
      'Conteúdo Essencial de um PDTI/PDTIC: alinhamento estratégico (metas/necessidades de informação do negócio), inventário e diagnóstico da situação atual de infraestrutura/sistemas/pessoal, levantamento e priorização de necessidades, **Plano de Ações/Metas**, **Plano de Gestão de Riscos**, **Plano de Contratações/Orçamento** e **Plano de Capacitação de Pessoas**.',
      'Processo de Elaboração do PDTI (Fases Clássicas): **(1) Preparação** (comitê, equipe, metodologia e princípios), **(2) Diagnóstico** (entender situação atual e necessidades dos setores) e **(3) Planejamento** (priorizar ações, consolidar orçamento, metas e indicadores -> aprovação pela Alta Administração e publicação).',
      'Execução, Monitoramento e Vínculo com Contratações: toda contratação relevante de infraestrutura (*switches*, servidores, licenças, nuvem, links) deve constar prevista ou alinhada no PDTI vigente — fundamentando o **PCA** (*Plano de Contratações Anual*) e os **ETPs** (*Estudos Técnicos Preliminares*) — e ser acompanhada periodicamente pelo Comitê de Governança de TI, sujeita a auditoria do **TCU/CGU** (*Tribunal de Contas da União / Controladoria-Geral da União*).',
      'Exemplo operacional: durante a fase de **Diagnóstico** do **PDTIC 2026–2028**, o levantamento identifica `45` switches com fim de suporte (*EoS*) e necessidade de redundância no prontuário definida no **PETI**; a equipe cria a meta priorizada no **Plano de Ações** e vincula a previsão orçamentária ao **PCA**, habilitando a abertura do **ETP** no exercício seguinte.'
    ],
    technicalReference: [
      'PETI (Direcionamento Estratégico Amplo) -> PDTI / PDTIC (Desdobramento Tático-Operacional: Diagnóstico + Necessidades + Metas + Orçamento + Riscos + Contratações + Capacitação)',
      'Regra no Setor Público: PDTI fundamenta o Plano de Contratações Anual (PCA) e os ETPs de TIC.'
    ],
    examTraps: [
      'O PDTI **NÃO** é um documento puramente técnico escrito sozinho pelo gerente de redes listando marcas de equipamentos — nasce das **necessidades de informação e serviços das áreas de negócio** alinhadas ao planejamento institucional!',
      'Diferença de abrangência: **PETI** tem foco mais estratégico de longo alcance, enquanto **PDTI** consolida o portfólio concreto de projetos, aquisições, orçamento, pessoas e metas de curto/médio prazo.',
      'Um PDTI elaborado e engavetado sem revisão anual nem monitoramento de metas pelo Comitê de TI perde validade e compromete auditorias de governança (TCU/CGU).'
    ],
    keyTerms: [
      'PETI (Nível Estratégico): plano de médio/longo prazo que traduz o PEI em visão, princípios arquiteturais e direcionadores de TI',
      'PDTI / PDTIC (Nível Tático-Operacional): plano diretor com diagnóstico, metas, riscos, orçamento, capacitação e contratações de TIC',
      'Fases do PDTI (SISP): ciclo metódico dividido em Preparação, Diagnóstico situacional e Planejamento aprovado pela alta direção',
      'Vínculo com PCA e ETP: exigência de alinhamento prévio das aquisições de TI ao PDTI vigente para embasar contratações públicas',
      'Monitoramento pelo Comitê de TI: acompanhamento periódico de metas e revisões anuais que evita o engavetamento auditado por TCU/CGU'
    ]
  },
  '16.2.9': {
    itemId: '16.2.9',
    highYieldSummary: [
      'Definição e escopo: o **Balanced Scorecard (BSC)** de Kaplan & Norton (adaptado à TI no **IT BSC** por Van Grembergen) é um sistema de gestão estratégica que equilibra métricas financeiras e não financeiras em **4 Perspectivas** causais. Emprega mapas estratégicos, **KGIs** (*Key Goal Indicators*) e **KPIs** (*Key Performance Indicators*) para alinhar a operação às metas institucionais.',
      'Balanced Scorecard — **BSC** (Kaplan & Norton): sistema de gestão estratégica que traduz visão e estratégia em objetivos e medidas tangíveis equilibradas em **4 Perspectivas** interligadas — **Financeira** (ou Orçamentária/Uso Eficiente no setor público), **Clientes**, **Processos Internos** e **Aprendizado e Crescimento**.',
      'Mapa Estratégico do BSC (Causa e Efeito de Baixo para Cima): capacitação da equipe e ferramentas (**Aprendizado & Crescimento**) -> melhoram estabilidade e agilidade operacional (**Processos Internos**) -> aumentam satisfação e confiança dos usuários (**Clientes**) -> geram retorno econômico ou valor público sustentável (**Financeira**).',
      'BSC Aplicado à TI (**IT Balanced Scorecard** — Van Grembergen): adapta as `4` perspectivas para a realidade de TI — **Contribuição Corporativa** (Financeira), **Orientação ao Usuário** (Clientes), **Excelência Operacional** (Processos Internos) e **Orientação Futura** (Aprendizado/Inovação).',
      '**KPIs** (*Key Performance Indicators*) vs **KGIs** (*Key Goal Indicators*): **KGIs** medem se o objetivo final foi alcançado depois que ocorreu (*lagging*, ex.: **SLA** [*Service Level Agreement*] anual atingido `>= 99,9%`); **KPIs** medem como o processo crítico performa durante o caminho (*leading*/processo, ex.: tempo médio de resolução **MTTR** [*Mean Time to Resolve*], `%` de mudanças sem incidente).',
      'Boas Práticas na Definição de KPIs: todo indicador deve possuir **fórmula clara, fonte confiável automatizada, linha de base, meta, periodicidade, polaridade (maior-melhor ou menor-melhor) e dono responsável**.',
      'Exemplo operacional: no **IT BSC** de um hospital, a capacitação de `100%` da equipe em automação (*Orientação Futura*) reduz erros de mudança e baixa o KPI *leading* **MTTR** de `75 min` para `25 min` (*Excelência Operacional*), viabilizando o KGI *lagging* de **SLA** `>= 99,95%` no sistema assistencial (*Orientação ao Usuário*) dentro do teto orçamentário (*Contribuição Corporativa*).'
    ],
    technicalReference: [
      '4 Perspectivas BSC (ordem causal ascendente): Aprendizado & Crescimento -> Processos Internos -> Clientes -> Financeira (ou Valor ao Cidadão/Negócio)',
      'BSC evita foco míope exclusivo em indicadores financeiros de curto prazo combinando métricas financeiras + não financeiras (lagging + leading).'
    ],
    examTraps: [
      'O BSC **NÃO** substitui indicadores financeiros — ele os **complementa** conectando indicadores operacionais, de clientes e de aprendizado como impulsionadores de desempenho futuro.',
      'Em entidades sem fins lucrativos e setor público (como a Rede SARAH, serviço social autônomo), a perspectiva Financeira do BSC é frequentemente adaptada mantendo o **Cidadão/Paciente (Clientes)** e o **Valor Público** no topo, sustentados pelo uso eficiente e responsável do orçamento.',
      'Criar dezenas de métricas sem vínculo a nenhum objetivo estratégico do Mapa Estratégico gera excesso de relatórios sem foco decisório.'
    ],
    keyTerms: [
      'Balanced Scorecard (4 Perspectivas): modelo de Kaplan & Norton com perspectivas Financeira, Clientes, Processos Internos e Aprendizado/Crescimento',
      'Mapa Estratégico (Causa e Efeito): encadeamento ascendente da base de Aprendizado até os resultados finais de Clientes e Financeira',
      'IT Balanced Scorecard (Van Grembergen): adaptação do BSC para TI com Contribuição Corporativa, Orientação ao Usuário, Excelência Operacional e Orientação Futura',
      'KPI vs KGI: indicador preditivo de desempenho do processo (leading/KPI) versus indicador de atingimento de meta final (lagging/KGI)',
      'Atributos de um Indicador: fórmula objetiva, fonte automatizada, linha de base, meta, periodicidade, polaridade e responsável'
    ]
  },
  '16.2.10': {
    itemId: '16.2.10',
    highYieldSummary: [
      'Definição e escopo: o **BPMN 2.0** (*Business Process Model and Notation*, mantido pelo **OMG** — *Object Management Group*) é a notação gráfica padrão internacional para modelagem e automação de processos de negócio. Padroniza eventos, atividades, *gateways*, raias e fluxos para eliminar ambiguidades entre analistas de negócio e equipes de TI.',
      'BPMN 2.0 (*Business Process Model and Notation*): notação gráfica padrão (OMG) universal para modelar processos de negócio compreensível tanto por analistas de negócio quanto por técnicos de TI/automação; organiza-se em `4` categorias básicas de elementos — **Objetos de Fluxo**, **Objetos de Conexão**, **Raias (*Swimlanes*)** e **Artefatos**.',
      'Os 3 Objetos de Fluxo Essenciais do BPMN: **(1) Eventos** (círculos: borda fina = Início; borda dupla = Intermediário; borda espessa = Fim), **(2) Atividades** (retângulos com cantos arredondados: Tarefas atômicas e Subprocessos com `+`) e **(3) Gateways** (losangos de decisão/convergência: `X` = **Exclusivo/XOR** apenas `1` caminho segue; `+` = **Paralelo/AND** todos os caminhos executam simultaneamente sem condição; `O` = **Inclusivo/OR** `1` ou mais caminhos verdadeiros).',
      'Swimlanes (Piscinas / **Pools** e Raias / **Lanes**) e Objetos de Conexão: **Pool** representa um participante/organização/processo distinto; **Lanes** subdividem papéis/áreas dentro do Pool — fluxo de **Sequência** (linha contínua seta fechada) conecta atividades DENTRO do mesmo Pool (inclusive cruzando *Lanes*); fluxo de **Mensagem** (linha tracejada com círculo aberto na origem) comunica ENTRE Pools diferentes!',
      'Artefatos e Dados: Objeto de Dados (documento usado/gerado), Repositório de Dados (cilindro/banco) e Anotação de Texto explicativa (conectados por Associação pontilhada — nunca alteram o fluxo de controle).',
      'Ciclo **PDCA** (*Plan–Do–Check–Act*) Integrado ao BPMN: após modelar o processo **TO-BE** (estado futuro redesenhado) em BPMN e colocá-lo em execução (**Plan / Do**), mede-se o desempenho real frente aos **SLAs** (*Service Level Agreements*) (**Check**) para corrigir desvios e redesenhar melhorias em nova versão do diagrama (**Act**).',
      'Exemplo operacional: modelando o tratamento de incidentes em **BPMN 2.0**, a Pool `Solicitante` dispara um **Fluxo de Mensagem** (linha tracejada) ao Evento de Início de Mensagem da Pool `TI`; dentro da Pool `TI`, um **Fluxo de Sequência** (linha contínua) cruza as Lanes `Service Desk` e `Infraestrutura` passando por um Gateway `XOR` (`X`) para severidade P1/P2 e um Gateway `AND` (`+`) que dispara em paralelo a coleta de logs e o aviso ao plantão.'
    ],
    technicalReference: [
      'Gateways BPMN: Losango com `X` (ou vazio) = **Exclusivo XOR** (1 saída) | `+` = **Paralelo AND** (todas as saídas) | `O` = **Inclusivo OR** (1 ou mais saídas)',
      'Conexões BPMN: Linha Contínua = Fluxo de Sequência (SÓ dentro do mesmo Pool) | Linha Tracejada = Fluxo de Mensagem (ENTRE Pools diferentes).'
    ],
    examTraps: [
      'Pegadinha clássica de BPMN em concursos: ligar uma tarefa da Pool A diretamente a outra tarefa da Pool B usando **Fluxo de Sequência (linha contínua)** é **ERRO SINTÁTICO GRAVE** — entre Pools diferentes só é permitido **Fluxo de Mensagem (linha tracejada)**!',
      'Nos Eventos BPMN: círculo de borda **fina simples** = Início; círculo de borda **dupla** = Intermediário; círculo de borda **grossa/espessa** = Fim.',
      'Gateway Paralelo (`+`) NÃO avalia condições — ao abrir (split), dispara obrigatoriamente TODOS os ramos ao mesmo tempo; ao fechar (join), aguarda TODOS os ramos chegarem para prosseguir.'
    ],
    keyTerms: [
      'BPMN 2.0 (OMG): notação padrão com 4 categorias — Objetos de Fluxo, Objetos de Conexão, Swimlanes e Artefatos',
      'Eventos BPMN (Bordas): círculo fino simples (Início), duplo (Intermediário) e espesso (Fim) indicando gatilhos e términos do fluxo',
      'Gateways (XOR / AND / OR): losangos Exclusivo (X — 1 caminho), Paralelo (+ — todos simultâneos) e Inclusivo (O — 1 ou mais)',
      'Pools e Lanes (Sequência vs Mensagem): fluxo de sequência contínuo restrito ao mesmo Pool e fluxo de mensagem tracejado entre Pools distintos',
      'Artefatos e Objetos de Dados: elementos informativos conectados por associação pontilhada sem alterar a lógica de controle'
    ]
  },
  '16.2.11': {
    itemId: '16.2.11',
    highYieldSummary: [
      'Definição e escopo: as normas certificáveis **ABNT NBR ISO/IEC 27001:2022** e **ABNT NBR ISO 22301:2019**, apoiadas pelo guia **ABNT NBR ISO/IEC 27002:2022**, estruturam respectivamente a Segurança da Informação (**SGSI**) e a Continuidade de Negócios (**SGCN**). Compartilham a Estrutura de Alto Nível (cláusulas `4` a `10`) baseada em riscos e ciclo **PDCA** (*Plan–Do–Check–Act*).',
      'ABNT NBR **ISO/IEC 27001:2022** (Requisitos do **SGSI** [*Sistema de Gestão de Segurança da Informação*] — Certificável): especifica os requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI (cláusulas **4 a 10**: Contexto, Liderança, Planejamento, Suporte, Operação, Avaliação de Desempenho e Melhoria) + **Anexo A** com lista de controles de referência e exigência da **Declaração de Aplicabilidade (SoA** — *Statement of Applicability*).',
      'ABNT NBR **ISO/IEC 27002:2022** (Código de Prática de Controles): guia detalhado de implementação dos **93 controles** de segurança da informação (reduzidos e consolidados dos antigos `114` controles em `14` seções da versão `2013`!) organizados agora em **4 Temas**: **Organizacionais (`37`)**, **Pessoas (`8`)**, **Físicos (`14`)** e **Tecnológicos (`34`)**.',
      'Relação Exata entre `27001` e `27002`: a **27001** define *o que* o SGSI precisa ter para ser auditado e **certificado** (incluindo obrigatoriedade de tratar riscos e justificar inclusões/exclusões de controles na SoA); a **27002** explica *como* implementar cada controle na prática (não é norma de certificação!).',
      'Novidades da Versão `2022` nos Controles Tecnológicos/Organizacionais: inclusão de controles modernos como Inteligência de Ameaças (*Threat Intelligence*), Segurança em Serviços em Nuvem, Prontidão de **TIC** (*Tecnologia da Informação e Comunicação*) para Continuidade de Negócios, Mascaramento de Dados, Prevenção contra Vazamento de Dados (**DLP** — *Data Loss Prevention*) e Filtragem Web.',
      'ABNT NBR **ISO 22301:2019** (**SGCN** [*Sistema de Gestão de Continuidade de Negócios*] — Certificável): segue a mesma Estrutura de Alto Nível (cláusulas `4` a `10` + PDCA), exigindo formalmente conduzir **BIA** (*Business Impact Analysis*) e Avaliação de Riscos na Cláusula `8`, definir estratégias e planos de continuidade/**DR** (*Disaster Recovery*) e executar **exercícios e testes periódicos** para manter a certificação.',
      'Exemplo operacional: para recertificação conjunta **ISO/IEC 27001:2022** e **ISO 22301:2019**, o hospital mantém **SoA** justificando os `93` controles da **ISO/IEC 27002:2022** — aplicando `8.12 DLP` nos endpoints clínicos e `5.30` Prontidão de TIC — enquanto executa semestralmente exercício real de *failover* do prontuário validando `RTO <= 1 h` definido na **BIA** da Cláusula `8`.'
    ],
    technicalReference: [
      'ISO/IEC 27001:2022 (Certificável: Cláusulas 4–10 + Anexo A + SoA) vs ISO/IEC 27002:2022 (Guia de **93 controles** em **4 temas**: 37 Organizacionais, 8 Pessoas, 14 Físicos, 34 Tecnológicos)',
      'ISO 22301:2019 = SGCN (Certificável) -> BIA + Estratégias/Soluções + Planos de Continuidade + Programa de Exercícios e Testes.'
    ],
    examTraps: [
      'Pegadinha clássica: a norma **certificável** do SGSI é a **ISO/IEC 27001**, e NÃO a ISO/IEC 27002 (que é apenas guia/código de práticas para os controles!).',
      'Na atualização de **2022**, os controles do Anexo A da 27001 / 27002 passaram de 114 (em 14 seções) para **93 controles agrupados em 4 temas** (Organizacionais, Pessoas, Físicos e Tecnológicos).',
      'Na ISO/IEC 27001, a organização **NÃO** é obrigada a implementar todos os 93 controles do Anexo A cegamente — porém deve justificar formalmente na **Declaração de Aplicabilidade (SoA)** por que cada controle foi incluído ou excluído com base na análise de riscos.'
    ],
    keyTerms: [
      'ISO/IEC 27001:2022 (SGSI / SoA): norma certificável com requisitos nas cláusulas 4–10, Anexo A e Declaração de Aplicabilidade obrigatória',
      'ISO/IEC 27002:2022 (93 Controles / 4 Temas): guia não certificável com 37 controles Organizacionais, 8 de Pessoas, 14 Físicos e 34 Tecnológicos',
      'ISO 22301:2019 (SGCN): norma certificável de continuidade de negócios baseada em BIA, estratégias de recuperação, planos e testes periódicos',
      'Declaração de Aplicabilidade (SoA): documento obrigatório que justifica inclusão ou exclusão de cada controle do Anexo A conforme riscos',
      'Prontidão de TIC e Controles 2022: novos controles para nuvem, DLP, mascaramento de dados, filtragem web e threat intelligence'
    ]
  },
  '16.2.12': {
    itemId: '16.2.12',
    highYieldSummary: [
      'Definição e escopo: o **NIST CSF 2.0** (*Cybersecurity Framework*, publicado pelo **NIST** — *National Institute of Standards and Technology* em **2024**) é um referencial voluntário para gerenciar riscos cibernéticos em todo o ciclo organizacional. Amplia o antigo CSF 1.1 ao colocar a função **GOVERN** no centro das demais cinco funções.',
      'NIST Cybersecurity Framework — **CSF 2.0** (`2024` vs `1.1`): framework voluntário flexível baseado em resultados para gerenciar e reduzir riscos cibernéticos em toda a organização; grande novidade do **CSF 2.0** foi a adição da `6ª` função transversal **GOVERN (GV — Governar)** ao centro das `5` funções clássicas do CSF 1.1 (*Identify, Protect, Detect, Respond, Recover*).',
      'As 6 Funções Centrais do NIST CSF 2.0: **(1) GOVERN (GV)** — estratégia de cibersegurança, expectativas, papéis e políticas (inclusa gestão de riscos de cadeia de suprimentos); **(2) IDENTIFY (ID)** — inventário de ativos, avaliação de riscos e melhorias; **(3) PROTECT (PR)** — gestão de identidades/acessos, conscientização, segurança de dados, segurança de plataforma e resiliência tecnológica; **(4) DETECT (DE)** — monitoramento contínuo e análise de eventos adversos; **(5) RESPOND (RS)** — gestão, análise, comunicação e mitigação de incidentes; **(6) RECOVER (RC)** — execução do plano de recuperação e comunicação pós-incidente.',
      'Estrutura Hierárquica do *Framework Core*: **Funções (`6`)** -> **Categorias (`22`)** -> **Subcategorias (`106`)** (resultados técnicos/organizacionais específicos mapeados para normas como ISO 27001 e NIST SP 800-53).',
      'Perfis (*Profiles*) e Níveis de Implementação (*Tiers*): **Current Profile** (estado atual) vs **Target Profile** (estado desejado) guiam o *roadmap* de evolução priorizada (*Gap Analysis*); **Implementation Tiers (`1` a `4` — Parcial, Informado por Risco, Repetível, Adaptável)** descrevem quão rigorosas e integradas são as práticas de gestão de risco cibernético (NÃO são "níveis de certificação"!).',
      'Aplicação Prática na Infraestrutura: conectar cada ferramenta real às funções — **CMDB** (*Configuration Management Database*) / Nessus (**Identify**), **MFA** (*Multi-Factor Authentication*) / *Hardening* / Firewall / Backup (**Protect**), **SIEM** (*Security Information and Event Management*) / **EDR** (*Endpoint Detection and Response*) / **IDS** (*Intrusion Detection System*) (**Detect**), *Playbooks* **SOAR** (*Security Orchestration, Automation, and Response*) / Contenção (**Respond**) e **DRP** (*Disaster Recovery Plan*) / *Restore* Imutável (**Recover**).',
      'Exemplo operacional: em diagnóstico com **NIST CSF 2.0**, o hospital define `Target Profile = Tier 3 (Repetível)` para subcategorias críticas: vincula política de risco de fornecedores de equipamentos médicos em `GV.SC`, telemetria SIEM/EDR em `DE.CM`, isolamento automático SOAR de estação infectada em `RS.MI` e validação de restauração imutável do PACS em `RC.RP`.'
    ],
    technicalReference: [
      '6 Funções NIST CSF 2.0: **GOVERN (GV)** no centro + **IDENTIFY (ID)** + **PROTECT (PR)** + **DETECT (DE)** + **RESPOND (RS)** + **RECOVER (RC)**',
      'Tiers de Implementação (1–4): Tier 1 Parcial | Tier 2 Informado por Risco | Tier 3 Repetível | Tier 4 Adaptável.'
    ],
    examTraps: [
      'Fique atento à atualização do **NIST CSF 2.0**: agora são **6 Funções** (com a inclusão de **GOVERN** coordenando estratégia, papéis e risco de terceiros), e não mais apenas as 5 antigas do CSF 1.1.',
      'Os **Implementation Tiers (1 a 4)** do NIST CSF **NÃO** representam níveis de maturidade obrigatórios nem garantem que o Tier 4 é sempre o objetivo ideal para toda empresa — o alvo é definido conforme o perfil de risco e custo-benefício.',
      'Testar backups e planos de restauração prepara e valida antes, mas a execução da restauração durante/após um ataque para retomar serviços pertence à função **RECOVER (RC)** (enquanto conter o atacante isolando o host pertence a **RESPOND — RS**).'
    ],
    keyTerms: [
      'NIST CSF 2.0 (6 Funções): evolução do framework de 2024 que adiciona GOVERN (GV) às funções Identify, Protect, Detect, Respond e Recover',
      'Framework Core (6 / 22 / 106): hierarquia composta por 6 Funções, 22 Categorias e 106 Subcategorias orientadas a resultados',
      'Profiles (Current vs Target): comparação entre postura cibernética atual e desejada para priorizar lacunas (Gap Analysis)',
      'Implementation Tiers (1 a 4): níveis Parcial, Informado por Risco, Repetível e Adaptável que caracterizam rigor da gestão de risco (não certificação)',
      'Respond (RS) vs Recover (RC): contenção e mitigação imediata durante o ataque versus restauração de ativos e retomada de serviços'
    ]
  },
  '16.2.13': {
    itemId: '16.2.13',
    highYieldSummary: [
      'Definição e escopo: o **DAMA-DMBoK** (*Data Management Body of Knowledge* — **2ª Edição**, DAMA International) é o corpo de conhecimento de referência para **Gestão e Governança de Dados**. Estrutura-se na **Roda DAMA** com **11 Áreas de Conhecimento**, abrangendo todo o ciclo de vida desde arquitetura e armazenamento até segurança, metadados e qualidade.',
      'Visão Geral do DAMA-DMBoK (2ª Ed.): guia abrangente para Gestão de Dados composto pela clássica **Roda DAMA**, que posiciona **Governança de Dados (*Data Governance*)** no **CENTRO** (planejamento, supervisão e controle) rodeada por **10 Áreas de Conhecimento operacionais** (totalizando **11 Áreas de Conhecimento**!).',
      'As 11 Áreas de Conhecimento da Roda DAMA (Memorizar agrupamentos!): Centro = **(1) Governança de Dados**; Satélites em sentido horário = **(2) Arquitetura de Dados**, **(3) Modelagem e Design de Dados**, **(4) Armazenamento e Operações de Dados**, **(5) Segurança de Dados**, **(6) Integração e Interoperabilidade de Dados**, **(7) Gerenciamento de Documentos e Conteúdo**, **(8) Dados Mestres e de Referência (MDM)** (*Master Data Management*), **(9) Data Warehousing e Business Intelligence (DW/BI)**, **(10) Gerenciamento de Metadados** e **(11) Gerenciamento da Qualidade de Dados**.',
      'Papel Direto da Infraestrutura no DMBoK: administradores de infraestrutura e **DBAs** (*Database Administrators*) atuam fortemente em **Armazenamento e Operações de Dados** (**SGBDs** [*Sistemas Gerenciadores de Banco de Dados*], *tuning*, *backup/recovery*, alta disponibilidade), **Segurança de Dados** (criptografia, **IAM/RBAC** [*Identity and Access Management / Role-Based Access Control*], auditoria, mascaramento) e **Integração** (**APIs** [*Application Programming Interfaces*], **ETL** [*Extract, Transform, Load*], mensageria).',
      'Princípios Fundamentais do DAMA-DMBoK: dados são ativos corporativos valiosos com propriedades únicas (não se consomem ao serem usados!); gestão eficaz requer visão de ciclo de vida, liderança executiva e equilíbrio entre necessidades de negócio e tecnologia.',
      'Contexto Organizacional (Hexágono Ambiental DAMA): cada área de conhecimento descreve Objetivos/Princípios, Atividades, Entregáveis, Papéis/Responsabilidades, Práticas/Técnicas, Ferramentas e Métricas.',
      'Exemplo operacional: na integração entre prontuário eletrônico e faturamento, o comitê de **Governança de Dados** (centro da Roda DAMA) define regras de unicidade de paciente (**MDM**) e tabelas **CID-10** (*Classificação Internacional de Doenças* — Dados de Referência), enquanto os DBAs implementam particionamento e replicação (**Armazenamento e Operações**) e mascaramento dinâmico de CPF (**Segurança de Dados**).'
    ],
    technicalReference: [
      'Roda DAMA-DMBoK = **11 Áreas de Conhecimento** com **Governança de Dados no CENTRO** + 10 áreas em torno (Arquitetura, Modelagem, Armazenamento/Operações, Segurança, Integração, Documentos/Conteúdo, Dados Mestres/Referência, DW/BI, Metadados, Qualidade)',
      'Atenção à distinção: **Gestão de Dados** é o termo amplo (todas as 11 áreas); **Governança de Dados** é especificamente a área central de autoridade e controle.'
    ],
    examTraps: [
      'Pegadinha clássica: no DAMA-DMBoK, **Governança de Dados** fica no **CENTRO** da Roda DAMA (como função de autoridade/controle sobre todas as outras 10 áreas), NÃO como apenas mais uma fatia periférica isolada — somando **11 áreas no total**.',
      'Temas como "Gestão de Projetos de Software" ou "Gerenciamento de Incidentes de Rede" NÃO são áreas de conhecimento do DAMA-DMBoK.',
      'Dados Mestres (Master Data: clientes, produtos, pacientes) diferenciam-se de Dados de Referência (Reference Data: códigos UF, CID-10, moedas), mas compartilham a mesma área de conhecimento (MDM/RDM) na Roda DAMA.'
    ],
    keyTerms: [
      'DAMA-DMBoK (2ª Ed. — 11 Áreas): corpo de conhecimento de Gestão de Dados estruturado pela Roda DAMA e pelo Hexágono Ambiental',
      'Governança de Dados vs Gestão de Dados: autoridade central de supervisão e controle (centro da Roda) versus execução técnica das 11 áreas',
      'Armazenamento/Operações e Segurança de Dados: áreas com atuação direta de infraestrutura e DBAs (SGBDs, HA, backup, criptografia e RBAC)',
      'Dados Mestres (MDM) vs Dados de Referência (RDM): entidades principais de negócio (pacientes/clientes) versus domínios padronizados (UF, CID-10)',
      'Metadados e Qualidade de Dados: documentação estrutural/linhagem dos dados e medição de acurácia, completude e consistência'
    ]
  },
  '16.2.14': {
    itemId: '16.2.14',
    highYieldSummary: [
      'Definição e escopo: a **LAI** (**Lei nº 12.527/2011**) regulamenta o direito constitucional de acesso à informação pública no Brasil, consolidando a **transparência ativa** (portais) e a **transparência passiva** (pedidos). Impõe prazos rigorosos de resposta, graus limitados de sigilo, proteção a dados pessoais e requisitos técnicos de formatos abertos.',
      'Princípio Fundamental da LAI (Lei nº 12.527/2011): consagra que o **acesso à informação pública é a REGRA** e o **sigilo é a EXCEÇÃO**, aplicando-se aos três Poderes da União, Estados, DF e Municípios, autarquias, fundações públicas, empresas estatais e entidades privadas sem fins lucrativos que recebam recursos públicos.',
      'Prazos Legais de Atendimento ao Cidadão (Art. `11` — Cuidado Absoluto!): se a informação estiver disponível, entrega-se **IMEDIATAMENTE**; não sendo possível a entrega imediata, o órgão tem prazo máximo de **20 dias** (prorrogável por mais **10 dias** mediante justificativa expressa e ciência ao requerente — total máximo = **30 dias**!). Em caso de negativa, cabem recursos em até **10 dias** (decisão em `5` dias — Art. `15`).',
      'Classificação da Informação Sigilosa (`3` Graus + Prazos Máximos — Art. `24` e Art. `35`): **Ultrassecreta** = máximo **25 anos** (única prorrogável uma única vez por mais até `25` anos pela **CMRI** [*Comissão Mista de Reavaliação de Informações*] se risco persistir); **Secreta** = máximo **15 anos**; **Reservada** = máximo **5 anos** — informações não classificadas nesses `3` graus são públicas (salvo sigilo legal específico ou dados pessoais!).',
      'Informações Pessoais na LAI (Art. `31`): informações relativas à intimidade, vida privada, honra e imagem têm acesso restrito independentemente de classificação formal pelo prazo máximo de **100 anos** a contar da sua data de produção, acessíveis apenas a agentes públicos legalmente autorizados e à própria pessoa (ou mediante consentimento/previsão legal).',
      'Requisitos Técnicos para Sistemas e Portais (Transparência Ativa — Art. `8º`, § `3º`): sítios oficiais devem oferecer ferramenta de pesquisa de conteúdo, gravação de relatórios em **formatos abertos e não proprietários** (ex.: **CSV** [*Comma-Separated Values*], **JSON** [*JavaScript Object Notation*], **XML** [*Extensible Markup Language*] legíveis por máquina!), acesso automatizado por sistemas externos (**APIs** / dados abertos) e acessibilidade para pessoas com deficiência (evitando apenas imagem sem **OCR** [*Optical Character Recognition*]).',
      'Exemplo operacional: em portal de transparência pública, contratos de TI são publicados em **transparência ativa** via endpoint `GET /api/v1/contratos` retornando `JSON` e exportação `CSV` UTF-8 legíveis por máquina; um pedido de acesso via transparência passiva recebido em `02/03` deve ser respondido em até `20 dias` (prorrogáveis por `+10 dias` com justificativa), tarjando dados pessoais de CPF/intimidade protegidos por `100 anos` (Art. `31`).'
    ],
    technicalReference: [
      'Prazos Resposta Pedido LAI: Imediato -> ou até **20 dias** (+ prorrogação justificada de **10 dias** = 30 dias máx)',
      'Graus de Sigilo: **Ultrassecreta (25 anos)** | **Secreta (15 anos)** | **Reservada (5 anos)** || Informação Pessoal (intimidade/privacidade): **100 anos**.'
    ],
    examTraps: [
      'Banca adora trocar os prazos dos graus de sigilo: lembre da sequência decrescente **25 – 15 – 5 anos** (Ultrassecreta 25, Secreta 15, Reservada 5) e **100 anos** para informação pessoal!',
      'Publicar PDFs escaneados como imagem sem OCR ou planilhas exclusivamente em formatos proprietários bloqueados viola a exigência legal da LAI de **formatos abertos, estruturados e legíveis por máquina**.',
      'Solicitante de pedido de acesso pela LAI **NÃO precisa justificar os motivos** da solicitação — o órgão é expressamente proibido de exigir motivação determinante do interesse.'
    ],
    keyTerms: [
      'Lei nº 12.527/2011 (LAI): marco legal onde a publicidade é a regra e o sigilo é exceção, abrangendo inclusive entidades privadas com verba pública',
      'Prazos da LAI (Art. 11 e 15): entrega imediata ou em até 20 dias (+10 dias justificados), com recurso em 10 dias e decisão em 5 dias',
      'Graus de Sigilo (25 / 15 / 5 anos): Ultrassecreta (25 anos, renovável 1x pela CMRI), Secreta (15 anos) e Reservada (5 anos)',
      'Informação Pessoal (Art. 31 — 100 anos): restrição de até 100 anos para intimidade, vida privada, honra e imagem sem exigir classificação prévia',
      'Formatos Abertos (Art. 8º, § 3º): exigência técnica de dados estruturados legíveis por máquina (CSV, JSON, XML), pesquisa, APIs e acessibilidade'
    ]
  },
  '16.2.15': {
    itemId: '16.2.15',
    highYieldSummary: [
      'Definição e escopo: a **LGPD** (**Lei nº 13.709/2018**) disciplina o tratamento de dados pessoais no Brasil, em meios físicos ou digitais, protegendo direitos fundamentais de liberdade e privacidade. Estabelece categorias de dados, bases legais taxativas, papéis dos agentes, segurança técnica/administrativa, notificação de incidentes e sanções da **ANPD** (*Autoridade Nacional de Proteção de Dados*).',
      'Conceitos e Categorias de Dados (LGPD — Lei nº 13.709/2018): **Dado Pessoal** (informação relacionada a pessoa natural identificada ou identificável — nome, **CPF** [*Cadastro de Pessoas Físicas*], endereço **IP** [*Internet Protocol*], e-mail corporativo nominal); **Dado Pessoal Sensível** (origem racial/étnica, convicção religiosa, opinião política, filiação sindical/religiosa/política, dado **referente à saúde ou à vida sexual**, dado genético ou biométrico); **Dado Anonimizado** (perde a possibilidade de associação direta ou indireta ao indivíduo por meios técnicos razoáveis e disponíveis — fica FORA da LGPD nos termos do Art. `12`, salvo se o processo de anonimização for revertido ou se usado para perfil comportamental de pessoa identificada).',
      'Bases Legais Principais (Art. `7º` e Art. `11` — Consentimento NÃO é a única!): tratamento de dado pessoal comum exige uma das **10 hipóteses** (consentimento, cumprimento de obrigação legal/regulatória, execução de políticas públicas pela Administração Pública, estudos por órgão de pesquisa, execução de contrato, exercício regular de direitos, proteção da vida, **tutela da saúde** por profissionais/serviços de saúde/autoridade sanitária, legítimo interesse — atenção: Administração Pública não usa legítimo interesse irrestritamente! — e proteção ao crédito); dados **sensíveis (Art. `11`)** possuem rol próprio mais restrito (sem legítimo interesse nem proteção ao crédito!).',
      'Agentes de Tratamento e Encarregado (**DPO** — *Data Protection Officer*): **Controlador** (toma as decisões referentes ao tratamento), **Operador** (trata dados em nome do Controlador), **Encarregado / DPO** (atua como canal de comunicação entre Controlador, titulares e **ANPD** — e orienta funcionários sobre proteção de dados); responsabilidade civil e ressarcimento seguem regras de solidariedade entre Operador e Controlador.',
      'Segurança, Boas Práticas e Incidentes (Arts. `46` a `51`): agentes devem adotar medidas de segurança **técnicas e administrativas** aptas a proteger dados contra acessos não autorizados e situações acidentais/ilícitas de destruição, perda ou alteração; ocorrência de **incidente de segurança que possa acarretar risco ou dano relevante** obriga comunicação à **ANPD e ao titular** (Art. `48`, prazo regulamentado pela **Resolução CD/ANPD nº 15/2024**: **3 dias úteis**!).',
      'Sanções Administrativas da ANPD (Art. `52`): advertência, multa simples (até `2%` do faturamento limitado a `R$ 50 milhões` por infração — atenção: órgãos públicos NÃO recebem multas pecuniárias pelo Art. `52`, § `3º`, mas sofrem advertência, publicização da infração, bloqueio/eliminação dos dados e suspensão parcial/total do banco/tratamento!).',
      'Exemplo operacional: um hospital trata prontuários (dados sensíveis de saúde) sob a base legal de **tutela da saúde** (Art. `11`, II, `f`) sem depender de consentimento; ao detectar exfiltração de tabela com CPF e laudos, o **Controlador**, assessorado pelo **DPO**, avalia o risco relevante e comunica a **ANPD** e os titulares em até `3 dias úteis` (**Resolução CD/ANPD nº 15/2024**), aplicando **anonimização irreversível** (Art. `12`) — e nunca mera pseudonimização por hash com chave — em bases estatísticas.'
    ],
    technicalReference: [
      'Dado Sensível (Art. 5º II): Saúde, Genética, Biometria, Vida Sexual, Raça/Etnia, Religião, Opinião Política, Sindicato',
      'Diferença vital: **Dado Anonimizado** (irreversível com esforço razoável -> não é dado pessoal) vs **Dado Pseudonimizado** (reversível com tabela/chave separada -> CONTINUA sendo dado pessoal sujeito à LGPD!).'
    ],
    examTraps: [
      'Pegadinha clássica: **Consentimento** é apenas UMA entre 10 bases legais — em hospitais/serviços públicos de saúde, o tratamento de prontuários apoia-se comumente em **Tutela da Saúde**, **Execução de Políticas Públicas** ou **Obrigação Legal**, dispensando pedir consentimento se enquadrado nessas bases!',
      '**Pseudonimização** (ex.: trocar CPF por um token/hash reversível com chave mantida pelo controlador) **NÃO retira o dado do escopo da LGPD** — apenas a **Anonimização irreversível** retira.',
      'Administração Pública **NÃO** sofre multa pecuniária da ANPD (Art. 52, § 3º), mas está plenamente sujeita às demais sanções (publicização da infração, bloqueio e eliminação dos dados, suspensão de funcionamento do banco de dados) além de responsabilização de agentes públicos.',
      'Pegadinha comum em concursos: a APS (Rede SARAH) é pessoa jurídica de direito privado sem fins lucrativos (serviço social autônomo); a isenção de multa do art. 52, § 3º NÃO se aplica a ela.'
    ],
    keyTerms: [
      'LGPD (Lei nº 13.709/2018): marco legal que regula o tratamento de dados pessoais e sensíveis com fiscalização da ANPD',
      'Dado Pessoal vs Sensível (Saúde): identificação direta/indireta versus dados de maior proteção (saúde, biometria, genética, convicções)',
      'Anonimização vs Pseudonimização: perda irreversível de identificação fora da LGPD (Art. 12) versus substituição reversível ainda sujeita à lei',
      'Bases Legais (Arts. 7º e 11): 10 hipóteses para dados comuns e rol restrito para sensíveis (incluindo tutela da saúde sem consentimento)',
      'Controlador, Operador, DPO e Art. 48: divisão de papéis decisórios/operacionais e prazo de 3 dias úteis (Res. ANPD 15/2024) para incidentes relevantes'
    ]
  }
};
