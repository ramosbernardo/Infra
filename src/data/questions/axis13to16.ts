import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_13_TO_16: readonly Question[] = Object.freeze([
  // ==================== EIXO 13: 13. Segurança. (10 questões) ====================
  {
    id: 'sarah-37',
    editalItemId: '13.1.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um órgão público exige que prontuários ou documentos emitidos eletronicamente tenham garantia de integridade, autenticidade e não repúdio (irretratabilidade) por meio de assinatura e certificação digital. Como o emissor gera essa assinatura e como terceiros a verificam?',
    options: [
      'O emissor calcula o hash do documento e o cifra com sua própria chave privada; o verificador decifra a assinatura com a chave pública do emissor validada pelo certificado digital X.509.',
      'O emissor cifra o documento inteiro com a chave pública da Autoridade Certificadora e envia a chave privada junto ao PDF.',
      'O emissor gera apenas um hash SHA-256 em texto claro sem uso de criptografia assimétrica, o que já garante o não repúdio jurídico e técnico.',
      'O emissor cifra o hash com sua chave pública e o destinatário valida utilizando a chave privada do emissor.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4. Assinatura e certificação digital e Item 1.1. Princípios de segurança da informação (Eixo 13. Segurança). Assinar = cifrar hash com chave privada do emissor; verificar = usar chave pública do emissor.',
    correctAnalysis:
      'Na assinatura digital, o emissor aplica uma função hash ao documento e cifra o resumo com SUA chave privada; qualquer destinatário valida com a chave pública do emissor (atestada pelo certificado X.509), provando integridade, autenticidade e não repúdio.',
    optionErrors: {
      1: 'Incorreta: a chave privada jamais deve ser compartilhada, e cifrar com chave pública visa confidencialidade ao destinatário, não assinatura.',
      2: 'Incorreta: hash isolado garante apenas integridade, não autenticidade nem não repúdio (qualquer um pode recalcular um hash público).',
      3: 'Incorreta: as chaves foram invertidas — se o emissor usasse a chave pública para assinar, qualquer pessoa poderia falsificar a assinatura e o verificador não teria a privada do emissor.'
    }
  },
  {
    id: 'sarah-38',
    editalItemId: '13.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na arquitetura moderna de gestão de identidades utilizando MFA, OAuth 2.0, OpenID Connect e JWT para acesso a sistemas corporativos, qual afirmação distingue corretamente esses padrões?',
    options: [
      'OAuth 2.0 é um protocolo completo de autenticação que emite obrigatoriamente um ID Token, enquanto OpenID Connect trata apenas de autorização de APIs.',
      'OAuth 2.0 é um framework de autorização delegada (Access Token), OpenID Connect adiciona a camada de autenticação sobre OAuth 2.0 (ID Token em formato JWT) e JWT possui estrutura header.payload.signature.',
      'JWT criptografa obrigatoriamente o payload de forma assimétrica impedindo que o cliente leia as claims sem a chave privada do servidor.',
      'MFA dispensa o princípio de menor privilégio porque exige apenas duas senhas estáticas conhecidas pelo usuário.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Métodos de autenticação e autorização (MFA, OAuth 2.0, OpenID Connect e JWT) (Eixo 13. Segurança).',
    correctAnalysis:
      'OAuth 2.0 delega autorização via Access Tokens; OpenID Connect (OIDC) estende OAuth 2.0 para autenticação emitindo um ID Token em JWT; e o JWT padrão (JWS) é composto por Header, Payload (Base64Url) e Signature.',
    optionErrors: {
      0: 'Incorreta: os papéis estão invertidos — OAuth 2.0 trata de autorização e o OpenID Connect adiciona autenticação com ID Token.',
      2: 'Incorreta: um JWT assinado (JWS) tem header e payload codificados em Base64Url (legíveis por qualquer parte, não criptografados por padrão).',
      3: 'Incorreta: MFA exige fatores de categorias distintas (algo que sabe, possui ou é), não duas senhas, e não substitui o menor privilégio.'
    }
  },
  {
    id: 'sarah-39',
    editalItemId: '13.1.5',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante a triagem de um incidente de segurança, a equipe identifica um código malicioso que se propagou autonomamente pela rede explorando uma vulnerabilidade SMB sem necessidade de arquivo hospedeiro ou clique do usuário, e outro que cifrou os compartilhamentos de rede exigindo resgate. Esses dois malwares são, respectivamente:',
    options: [
      'Trojan (cavalo de Troia) e Spyware.',
      'Worm e Ransomware.',
      'Vírus de macro e Keylogger.',
      'Backdoor e Adware.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.5. Malwares (vírus, cavalo de Troia, worms, ransomware, spyware, backdoors e keyloggers) (Eixo 13. Segurança).',
    correctAnalysis:
      'Worm replica-se e propaga-se de forma autônoma pela rede explorando vulnerabilidades sem depender de programa hospedeiro; Ransomware criptografa dados/sistemas tornando-os inacessíveis mediante exigência de resgate.',
    optionErrors: {
      0: 'Incorreta: Cavalo de Troia disfarça-se de software legítimo (não se propaga sozinho pela rede) e Spyware monitora atividades ocultamente sem cifrar discos.',
      2: 'Incorreta: Vírus precisa de arquivo/documento hospedeiro e execução pelo usuário, e Keylogger apenas registra teclas digitadas.',
      3: 'Incorreta: Backdoor abre acesso remoto persistente oculto contornando autenticação, sem necessariamente propagar-se como worm nem cifrar arquivos por resgate.'
    }
  },
  {
    id: 'sarah-13-04',
    editalItemId: '13.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um ataque interrompeu o acesso dos médicos ao sistema de prontuário por sobrecarga de requisições e, em outro incidente, um registro de exame teve seus valores adulterados sem autorização em trânsito. Quais dois princípios da segurança da informação foram diretamente violados, respectivamente?',
    options: [
      'Confidencialidade e Não Repúdio.',
      'Disponibilidade e Integridade.',
      'Autenticidade e Confidencialidade.',
      'Irretratabilidade e Disponibilidade.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Princípios de segurança da informação (CIDAN) (Eixo 13. Segurança). Indisponibilidade fere Disponibilidade; alteração indevida fere Integridade.',
    correctAnalysis:
      'Disponibilidade garante que sistemas e informações estejam acessíveis aos usuários autorizados quando necessários (violada na interrupção); Integridade assegura que os dados não sejam alterados de forma indevida ou não autorizada.',
    optionErrors: {
      0: 'Incorreta: confidencialidade refere-se à proteção contra leitura/exposição não autorizada, e não repúdio impede negação de autoria.',
      2: 'Incorreta: autenticidade valida a identidade legítima do emissor/usuário e confidencialidade protege o sigilo contra acesso não autorizado.',
      3: 'Incorreta: irretratabilidade (sinônimo de não repúdio) refere-se à impossibilidade de negar autoria de uma transação, não à adulteração do conteúdo.'
    }
  },
  {
    id: 'sarah-13-05',
    editalItemId: '13.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para proteger grandes volumes de dados em repouso (como discos de servidores via BitLocker) e dados em trânsito no TLS 1.3 com máxima eficiência computacional, qual combinação de criptografia simétrica, assimétrica e função hash é empregada na prática?',
    options: [
      'RSA cifra todo o tráfego de disco em repouso por ser mais rápido que AES, enquanto SHA-256 decifra os pacotes TLS no navegador.',
      'Criptografia simétrica (como AES) cifra os dados em massa em repouso e em trânsito (chave de sessão), criptografia assimétrica (RSA/ECC) realiza troca segura de chaves/autenticação e funções hash (SHA-256) garantem integridade.',
      'Funções hash SHA-256 são reversíveis e servem para recuperar a chave privada AES perdida pelo servidor.',
      'Criptografia simétrica utiliza duas chaves distintas (pública e privada) para eliminar a necessidade de compartilhamento de segredo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Criptografia simétrica e assimétrica, proteção de dados em trânsito e em repouso (Eixo 13. Segurança).',
    correctAnalysis:
      'Sistemas híbridos usam algoritmos assimétricos (ECC/RSA/ECDHE) na negociação inicial e autenticação, algoritmos simétricos (AES-GCM/AES-XTS) para cifrar grandes volumes rapidamente em trânsito e repouso, e hashes (SHA-256) para integridade.',
    optionErrors: {
      0: 'Incorreta: criptografia assimétrica (RSA) é ordens de grandeza mais lenta que AES e hash SHA-256 é unidirecional (não decifra nada).',
      2: 'Incorreta: funções hash criptográficas são unidirecionais (irreversíveis), tornando impossível extrair o conteúdo original a partir do resumo.',
      3: 'Incorreta: o uso de par de chaves distinta (pública e privada) define a criptografia assimétrica, não a simétrica (que usa chave única).'
    }
  },
  {
    id: 'sarah-13-06',
    editalItemId: '13.1.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um ataque utilizou uma técnica "fileless" (execução maliciosa direta em memória via PowerShell codificado), sem arquivo executável conhecido em banco de assinaturas tradicionais. Qual mecanismo de proteção de endpoint atua além de assinaturas estáticas para conter esse comportamento?',
    options: [
      'Apenas varredura baseada em hash MD5 estático de arquivos gravados no disco.',
      'Análise heurística/comportamental e capacidades de EDR (Endpoint Detection and Response), monitorando processos suspeitos em memória, árvores de execução e resposta/isolamento automático.',
      'Desativar a quarentena do antivírus para evitar bloqueios de scripts PowerShell.',
      'Substituir o EDR por um servidor DHCP na mesma VLAN.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.6. Antivírus (EDR, heurística, assinaturas, sandbox, quarentena) (Eixo 13. Segurança).',
    correctAnalysis:
      'Assinaturas detectam apenas ameaças já catalogadas em disco; proteção heurística/comportamental e EDR monitoram telemetria em tempo real (injeção em memória, subprocessos anômalos do PowerShell) e permitem isolamento rápido do endpoint.',
    optionErrors: {
      0: 'Incorreta: ataques fileless ou polimórficos não geram hash MD5 conhecido previamente em disco.',
      2: 'Incorreta: desativar quarentena impede a contenção de artefatos maliciosos detectados.',
      3: 'Incorreta: DHCP apenas atribui parâmetros IP e não possui qualquer função de proteção de endpoints.'
    }
  },
  {
    id: 'sarah-13-07',
    editalItemId: '13.2.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Antes de colocar um servidor Linux ou Windows em produção na DMZ, a equipe aplica um checklist de hardening baseado no CIS Benchmarks. Quais ações compõem corretamente esse processo?',
    options: [
      'Desativar o firewall local do SO, habilitar protocolos legados (Telnet/SMBv1) e adicionar todos os analistas no grupo Administradores/sudo.',
      'Remover pacotes e serviços desnecessários (redução de superfície de ataque), fechar portas não utilizadas, desabilitar protocolos inseguros, aplicar patches e configurar parâmetros seguros de SO.',
      'Remover senhas de contas de serviço para acelerar o boot e expor interfaces de gerenciamento na internet.',
      'Substituir certificados X.509 por conexões HTTP em texto claro para facilitar troubleshooting.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. hardening (Eixo 13. Segurança). Hardening reduz a superfície de ataque removendo serviços ociosos, aplicando patches e impondo configurações seguras.',
    correctAnalysis:
      'Hardening consiste em endurecer o ativo removendo softwares/serviços supérfluos, fechando portas não essenciais, desabilitando protocolos obsoletos, aplicando atualizações de segurança e impondo políticas restritivas (CIS Benchmarks).',
    optionErrors: {
      0: 'Incorreta: manter Telnet/SMBv1 e conceder privilégio administrativo irrestrito amplia drasticamente a superfície de ataque.',
      2: 'Incorreta: contas sem senha e gerência exposta à internet configuram falhas críticas de segurança.',
      3: 'Incorreta: remover TLS expõe credenciais e dados sensíveis a eavesdropping na rede.'
    }
  },
  {
    id: 'sarah-13-08',
    editalItemId: '13.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em conformidade com os controles de gestão de acessos, menor privilégio e segregação de funções (SoD), qual prática é recomendada para administradores de infraestrutura no dia a dia?',
    options: [
      'Utilizar a mesma conta Domain Admin para navegar na internet, ler e-mails corporativos e gerenciar servidores.',
      'Separar conta nominal padrão (uso diário) de conta administrativa privilegiada (PAM/elevação sob demanda com RBAC e MFA), concedendo exatamente o acesso mínimo necessário às tarefas (least privilege).',
      'Compartilhar uma única senha de administrador geral em planilha de rede para toda a equipe de suporte.',
      'Conceder permissão Full Control permanente a todos os técnicos de Help Desk no Active Directory para agilizar atendimentos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. gestão de acessos e menor privilégio (Eixo 13. Segurança). Contas nominais separadas + menor privilégio + MFA/PAM reduzem impacto de comprometimento.',
    correctAnalysis:
      'O princípio do menor privilégio aliado à gestão de acessos privilegiados (PAM) e RBAC determina que usuários operem no dia a dia sem privilégios administrativos, utilizando contas nominais elevadas apenas durante atividades administrativas rastreadas.',
    optionErrors: {
      0: 'Incorreta: navegar e ler e-mails com conta Domain Admin permite que qualquer phishing/malware comprometa todo o domínio imediatamente.',
      2: 'Incorreta: contas compartilhadas inviabilizam auditoria individual e responsabilização (não repúdio) das ações.',
      3: 'Incorreta: conceder Full Control irrestrito viola frontalmente o princípio do menor privilégio e da necessidade de saber.'
    }
  },
  {
    id: 'sarah-13-09',
    editalItemId: '13.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Antes que um certificado digital expire, uma chave privada de servidor web vazou em um incidente. Após revogar imediatamente o certificado na Autoridade Certificadora (AC), quais mecanismos permitem que navegadores e clientes verifiquem que aquele certificado não é mais confiável?',
    options: [
      'Lista de Certificados Revogados (CRL) e protocolo OCSP (Online Certificate Status Protocol), que verificam o status de revogação junto à AC.',
      'Apenas reiniciar o serviço DNS local do cliente sem consultar a AC.',
      'Alterar o protocolo HTTPS para HTTP simples até a data natural de expiração do certificado.',
      'Substituir a cadeia de confiança X.509 por uma regra de NAT estático no switch.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. certificados (Eixo 13. Segurança). CRL (lista periódica publicada pela AC) e OCSP (consulta em tempo real/stapling) informam revogações.',
    correctAnalysis:
      'Quando um certificado é revogado antes do vencimento, clientes validam sua situação na cadeia de confiança consultando a CRL (Certificate Revocation List) publicada pela AC ou via consultas em tempo real usando OCSP/OCSP Stapling.',
    optionErrors: {
      1: 'Incorreta: DNS apenas resolve nomes para IPs e não armazena nem valida status de revogação de certificados X.509.',
      2: 'Incorreta: descer para HTTP elimina toda a criptografia e autenticação do canal.',
      3: 'Incorreta: NAT estático realiza tradução de endereços IP e não tem relação com validação de certificados digitais.'
    }
  },
  {
    id: 'sarah-13-10',
    editalItemId: '13.2.6',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um scanner de vulnerabilidades identificou uma falha recém-divulgada com identificador CVE oficial e pontuação CVSS base de 9,8 (Crítica) em um serviço exposto na DMZ. Qual fluxo operacional representa boa prática de gestão de vulnerabilidades e segmentação?',
    options: [
      'Priorizar remediação imediata baseada em risco/criticidade (CVSS + exposição na DMZ), aplicar patch/mitigação controlada e manter segmentação/Zero Trust restringindo movimento lateral.',
      'Ignorar vulnerabilidades com CVSS >= 9,0 caso não exista antivírus instalado no firewall.',
      'Desativar todas as VLANs da DMZ movendo o servidor vulnerável diretamente para a rede interna de banco de dados.',
      'Alterar manualmente a pontuação CVSS no relatório para 2,0 para cumprir metas de auditoria.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. vulnerabilidades e segmentação (Eixo 13. Segurança). Gestão de vulnerabilidades prioriza por CVSS e contexto de exposição, combinada à microssegmentação.',
    correctAnalysis:
      'Vulnerabilidades críticas (CVSS 9,0–10,0) em ativos expostos na DMZ demandam priorização máxima para patching ou mitigação compensatória, enquanto segmentação/Zero Trust limita qualquer movimento lateral em caso de exploração.',
    optionErrors: {
      1: 'Incorreta: criticidade máxima em borda exposta representa risco imediato de invasão, independentemente de antivírus no firewall.',
      2: 'Incorreta: mover um servidor vulnerável da DMZ para a rede interna dos bancos de dados elimina o isolamento e facilita comprometimento total.',
      3: 'Incorreta: adulterar métricas CVSS mascara riscos reais e viola controles de segurança operacional e compliance.'
    }
  },

  // ==================== EIXO 14: 14. Troubleshooting. (10 questões) ====================
  {
    id: 'sarah-40',
    editalItemId: '14.1.1',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um serviço de impressão corporativo ficou indisponível às 08h30. A equipe de infraestrutura aplicou rapidamente um redirecionamento temporário de fila para um servidor secundário às 08h42 e, somente no período da tarde, investigou os dumps de memória para descobrir o vazamento de memória no driver que causava as quedas semanais. Essas duas atuações correspondem, respectivamente, a:',
    options: [
      'Gerenciamento de Problemas (com aplicação de workaround) e Gerenciamento de Incidentes (com remoção definitiva do erro).',
      'Gerenciamento de Incidentes (restauração rápida do serviço via solução de contorno/workaround) e Gerenciamento de Problemas (análise de causa raiz para erro conhecido).',
      'Coleta de evidências forenses (sem restauração do serviço) e procedimento de rollback de hardware.',
      'Escalonamento hierárquico de mudança emergencial e exclusão permanente de logs de auditoria.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.1. Gerenciamento de incidentes e de problemas e Item 1.2. Metodologias de análise de causa raiz (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'O Gerenciamento de Incidentes prioriza restabelecer o serviço rapidamente (mesmo via workaround), enquanto o Gerenciamento de Problemas investiga a causa raiz (RCA) de incidentes recorrentes para solução definitiva.',
    optionErrors: {
      0: 'Incorreta: as finalidades de Incidente (restauração rápida) e Problema (análise de causa raiz) foram invertidas.',
      2: 'Incorreta: houve restauração operacional imediata do serviço e análise de causa raiz no driver, não mera preservação forense sem retorno.',
      3: 'Incorreta: logs nunca devem ser excluídos durante troubleshooting e o foco aqui é a distinção Incidente vs. Problema.'
    }
  },
  {
    id: 'sarah-41',
    editalItemId: '14.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao correlacionar eventos entre firewall de borda, switch core, servidores Linux e controladores de domínio durante o diagnóstico de intermitência crítica, o analista percebeu que os timestamps dos registros divergiam em até 14 minutos entre ativos. Qual medida técnica é pré-requisito para correlação confiável de eventos e preservação de evidências?',
    options: [
      'Padronizar o sincronismo de relógio via NTP (preferencialmente com fuso UTC) em todos os ativos e centralizar logs via syslog/SIEM antes de aplicar alterações destrutivas.',
      'Reiniciar imediatamente todos os servidores afetados antes de coletar logs ou dumps para limpar buffers de memória volátil.',
      'Converter todos os logs para fuso local sem sincronização de rede e desabilitar a rotação de logs.',
      'Isolar o problema exclusivamente trocando cabos de rede (bottom-up) antes de verificar escopo ou registros de eventos.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. análise de logs, coleta de evidências e correlação de eventos (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'A correlação cronológica precisa exige relógios sincronizados via NTP (em fuso uniforme como UTC) e coleta centralizada/preservada de evidências antes de reinicializações que apaguem dados voláteis.',
    optionErrors: {
      1: 'Incorreta: reiniciar servidores antes da coleta destrói evidências em memória RAM, processos ativos e conexões efêmeras.',
      2: 'Incorreta: fusos locais não sincronizados impedem correlação temporal confiável, e desabilitar rotação pode lotar o disco raiz causando nova queda.',
      3: 'Incorreta: trocar cabos às cegas sem delimitar escopo e checar logs viola a metodologia estruturada de diagnóstico.'
    }
  },
  {
    id: 'sarah-42',
    editalItemId: '14.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um único usuário não consegue acessar uma aplicação web interna pela estação de trabalho, enquanto dezenas de colegas na mesma VLAN acessam normalmente. Aplicando metodologia de diagnóstico e isolamento de falhas, qual abordagem inicial é mais eficiente?',
    options: [
      'Reiniciar o switch core do data center para eliminar possíveis tabelas MAC corrompidas na VLAN.',
      'Isolar o escopo no endpoint afetado verificando resolução DNS local, configurações de IP/proxy, cache do navegador ou firewall local antes de intervir na infraestrutura compartilhada.',
      'Substituir o certificado TLS do balanceador de carga porque o problema é seguramente de SSL offloading.',
      'Reconstruir o array RAID do servidor de aplicação para descartar falha de armazenamento.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. metodologia de diagnóstico e isolamento de falhas (Eixo 14. Troubleshooting). Se a falha é restrita a 1 estação, isola-se o escopo no host antes de tocar serviços compartilhados.',
    correctAnalysis:
      'O isolamento de falhas delimita o raio de impacto: como outros usuários na mesma VLAN operam normalmente, a causa provável reside na estação específica (DNS, proxy, rede local do host), evitando impacto desnecessário em ativos centrais.',
    optionErrors: {
      0: 'Incorreta: reiniciar um switch core causaria indisponibilidade generalizada por um incidente isolado em único cliente.',
      2: 'Incorreta: falha no certificado do balanceador afetaria todos os usuários que acessam o VIP, não apenas um.',
      3: 'Incorreta: reconstruir array RAID destruiria ou degradaria o servidor inteiro sem evidência de falha de disco.'
    }
  },
  {
    id: 'sarah-14-04',
    editalItemId: '14.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em uma reunião post-mortem após uma falha de armazenamento que paralisou o ERP, a equipe utiliza duas metodologias clássicas de análise de causa raiz (RCA): perguntar sucessivamente "por quê?" em cadeia causal linear e diagramar causas potenciais em categorias (Mão de obra, Método, Máquina, Meio, Material/Medida). Essas técnicas são, respectivamente:',
    options: [
      'Scrum Poker e Gráfico de Gantt.',
      'Técnica dos 5 Porquês e Diagrama de Ishikawa (Espinha de Peixe / Causa e Efeito).',
      'Balanceamento Round Robin e Matriz RACI.',
      'Análise SWOT e Curva ABC.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Metodologias de análise de causa raiz (Eixo 14. Troubleshooting). 5 Porquês aprofunda cadeia causal; Ishikawa categoriza múltiplas causas.',
    correctAnalysis:
      'A técnica dos 5 Porquês aprofunda a cadeia de causa e efeito até a raiz estrutural do defeito, enquanto o Diagrama de Ishikawa (Espinha de Peixe) organiza graficamente múltiplas possíveis causas em categorias.',
    optionErrors: {
      0: 'Incorreta: Planning Poker estima esforço em ágil e Gantt representa cronogramas de projetos, não causa raiz.',
      2: 'Incorreta: Round Robin distribui carga em redes/ADCs e RACI define matriz de responsabilidades.',
      3: 'Incorreta: SWOT analisa forças/fraquezas estratégicas e Curva ABC classifica itens por relevância de estoque/custo.'
    }
  },
  {
    id: 'sarah-14-05',
    editalItemId: '14.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao investigar uma lentidão aleatória no acesso a um banco de dados via rede, um analista segue a abordagem bottom-up (de baixo para cima) no modelo OSI/TCP-IP. Qual sequência representa corretamente essa ordem de verificação?',
    options: [
      'Validar erros no navegador HTTPS -> testar consulta SQL -> checar IP/roteamento -> verificar link físico/transceiver e erros CRC na porta do switch.',
      'Verificar estado físico do cabo/SFP e erros CRC de camada 1/2 -> checar tabela MAC/VLAN -> testar conectividade IP/roteamento (camada 3) -> validar portas TCP (camada 4) e resposta da aplicação (camada 7).',
      'Começar exclusivamente reiniciando o Active Directory sem testar interface física ou ping.',
      'Aplicar abordagem divide-and-conquer testando apenas a camada de Apresentação (camada 6).'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. metodologia de diagnóstico (top-down, bottom-up, divide-and-conquer) (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'Na metodologia bottom-up, o diagnóstico inicia na Camada Física (cabos, link, erros de interface), sobe para Enlace (VLAN/MAC), Rede (IP/rotas), Transporte (portas TCP/UDP) e alcança a Camada de Aplicação.',
    optionErrors: {
      0: 'Incorreta: iniciar pela camada de Aplicação (navegador/HTTPS) descendo até o físico descreve a metodologia top-down, não bottom-up.',
      2: 'Incorreta: reiniciar ativos aleatoriamente sem seguir camadas do modelo de rede viola qualquer metodologia estruturada.',
      3: 'Incorreta: divide-and-conquer parte geralmente da camada intermediária (Rede/ping na camada 3) para decidir se sobe ou desce, nunca testando só camada 6.'
    }
  },
  {
    id: 'sarah-14-06',
    editalItemId: '14.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante a investigação de um possível comprometimento ou falha intermitente severa em um servidor de produção, quais artefatos devem ser preservados como evidências técnicas confiáveis antes de aplicar correções que alterem o estado volátil do host?',
    options: [
      'Captura de pacotes (pcap via tcpdump/Wireshark), listagem de processos/conexões ativas, snapshot de VM ou dump de memória e cópia íntegra dos logs com hash e registro de cadeia de custódia.',
      'Apenas captura de tela recortada no Paint sem hora nem identificação do servidor.',
      'Execução imediata de formatação do disco para eliminar vestígios antes da auditoria.',
      'Limpeza manual dos arquivos /var/log/syslog e Event Viewer de Segurança para reduzir o tamanho do backup.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. coleta de evidências (dumps, pcaps, cadeia de custódia, snapshots) (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'A coleta estruturada de evidências prioriza dados mais voláteis (memória, conexões ativas, pcaps) seguidos de snapshots e logs íntegros verificados por hash, mantendo cadeia de custódia documentada.',
    optionErrors: {
      1: 'Incorreta: prints isolados sem contexto, timestamp e integridade verificável são insuficientes para RCA profunda ou perícia.',
      2: 'Incorreta: formatar discos destrói todas as evidências da causa raiz e de eventuais incidentes de segurança.',
      3: 'Incorreta: apagar logs durante um incidente constitui destruição de evidências operacionais críticas.'
    }
  },
  {
    id: 'sarah-14-07',
    editalItemId: '14.2.4',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um teste de isolamento de falha para um serviço web que não abre pelo endereço "https://intranet.corp", o administrador obtém resposta no ping ao IP 10.20.30.40 e sucesso em "curl -k https://10.20.30.40", mas "nslookup intranet.corp" falha com SERVFAIL/NXDOMAIN. Onde a falha foi isolada?',
    options: [
      'Na camada física do cabeamento estruturado entre o switch e o servidor web.',
      'Na resolução de nomes DNS, já que a conectividade L3/L4 e a aplicação HTTPS no servidor de destino respondem normalmente via IP.',
      'No certificado raiz do servidor web que bloqueou pacotes ICMP Echo Reply.',
      'Na controladora RAID do storage SAN.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. isolamento de falhas (Eixo 14. Troubleshooting). Testar por IP vs FQDN isola imediatamente problemas de DNS vs transporte/aplicação.',
    correctAnalysis:
      'Como o acesso direto ao IP pela porta 443 funciona perfeitamente (comprovando rede física, roteamento, firewall L4 e serviço web ativos), a falha está isolada na camada de resolução de nomes DNS.',
    optionErrors: {
      0: 'Incorreta: o sucesso de ping e curl direto ao IP comprova que camada física e enlace estão operacionais.',
      2: 'Incorreta: certificados TLS não interferem em ICMP Echo Reply nem causam erro SERVFAIL/NXDOMAIN no nslookup.',
      3: 'Incorreta: se o storage SAN estivesse inoperante, o curl direto ao IP do servidor web falharia ou retornaria erro de aplicação.'
    }
  },
  {
    id: 'sarah-14-08',
    editalItemId: '14.2.6',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual é o objetivo central de elaborar um documento de Análise de Causa Raiz (Post-Mortem) sem caça às bruxas ("blameless") após um incidente crítico resolvido?',
    options: [
      'Aplicar punições disciplinares individuais ao técnico que executou o comando, evitando alterações nos processos.',
      'Documentar linha do tempo, causa raiz técnica/processual, lições aprendidas e planos de ação preventivos (controles, automação, testes) para evitar recorrência.',
      'Ocultar o incidente da diretoria e dos relatórios de disponibilidade para preservar o SLA artificialmente.',
      'Substituir definitivamente o monitoramento em tempo real por planilhas mensais estáticas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. análise de causa raiz (post-mortem, prevenção de recorrência) (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'O post-mortem foca na melhoria sistêmica de tecnologia e processos — identificando o gatilho, a causa raiz e ações corretivas/preventivas (alertas, automações, checklists) para que o mesmo erro humano ou técnico não volte a gerar indisponibilidade.',
    optionErrors: {
      0: 'Incorreta: cultura punitiva esconde falhas e não corrige brechas técnicas ou ausência de travas no processo.',
      2: 'Incorreta: ocultar falhas viola governança, transparência e impede investimentos em resiliência.',
      3: 'Incorreta: post-mortem complementa o monitoramento ativo, jamais o substitui.'
    }
  },
  {
    id: 'sarah-14-09',
    editalItemId: '14.2.7',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante uma janela de manutenção para atualização de firmware em um firewall HA, a aplicação crítica parou de autenticar usuários após a troca do nó ativo. Qual procedimento de recuperação e validação deve ser seguido dentro da janela?',
    options: [
      'Executar o plano de rollback previamente testado (retornando ao nó/versão anterior estável) se o tempo limite de janela for atingido e realizar validação funcional ponta a ponta pós-recuperação antes de liberar o ambiente.',
      'Deixar o ambiente fora do ar até o fabricante lançar um novo firmware na semana seguinte.',
      'Excluir as regras de firewall para liberar acesso irrestrito ANY-ANY na internet como solução definitiva.',
      'Declarar a mudança como concluída com sucesso sem testar o fluxo real de autenticação dos usuários.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. procedimentos de recuperação (rollback, failback, validação pós-recuperação) (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'Toda mudança planejada deve possuir critério claro de abortamento e plano de rollback validado; após recuperar (por rollback ou failback), é obrigatória a validação funcional ponta a ponta com testes reais.',
    optionErrors: {
      1: 'Incorreta: manter ambiente crítico parado indefinidamente sem executar rollback viola continuidade e SLAs.',
      2: 'Incorreta: liberar ANY-ANY abre exposição total de segurança como remendo inaceitável.',
      3: 'Incorreta: encerrar manutenção sem validação funcional pós-recuperação deixa incidentes ocultos para o início do expediente.'
    }
  },
  {
    id: 'sarah-14-10',
    editalItemId: '14.2.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao diagnosticar falhas intermitentes em um servidor web Linux durante alto volume de acessos simultâneos, o analista encontra no dmesg e em /var/log/messages entradas frequentes de "Out of memory: Killed process (java)" e no ss -s milhares de conexões em TIME_WAIT/SYN_RECV. O que essas evidências indicam?',
    options: [
      'O OOM Killer do kernel Linux encerrou o processo Java por exaustão de memória RAM/swap, exigindo investigação de heap/vazamento de memória ou dimensionamento, além de análise de backlog/tráfego de sockets TCP.',
      'O protocolo NTP desligou a interface de rede por diferença de fuso horário.',
      'O driver de vídeo HDMI causou fragmentação de pacotes UDP na camada 2.',
      'O bootloader GRUB2 está corrompido e impediu o POST da placa-mãe.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. análise de logs (Eixo 14. Troubleshooting). Mensagens "Out of memory: Killed process" no log do kernel apontam ação do OOM Killer.',
    correctAnalysis:
      'Quando o sistema esgota memória física e swap, o OOM Killer (Out-Of-Memory Killer) do kernel escolhe o maior consumidor (aqui a JVM Java) e o encerra com SIGKILL para preservar o sistema operacional, deixando registro explícito nos logs do kernel.',
    optionErrors: {
      1: 'Incorreta: NTP ajusta relógio do sistema e nunca dispara OOM Killer do kernel.',
      2: 'Incorreta: drivers gráficos não causam mensagens "Out of memory: Killed process" na JVM.',
      3: 'Incorreta: se o POST ou GRUB2 falhasse, o sistema Linux nem sequer carregaria o kernel nem geraria logs de runtime em /var/log/messages.'
    }
  },

  // ==================== EIXO 15: 15. Alta disponibilidade e continuidade. (10 questões) ====================
  {
    id: 'sarah-43',
    editalItemId: '15.1.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na arquitetura de data centers de missão crítica segundo a classificação do Uptime Institute, qual característica diferencia especificamente um ambiente Tier III de um ambiente Tier IV?',
    options: [
      'O Tier III permite manutenção planejada sem parada (Concurrently Maintainable, múltiplos caminhos com 1 ativo), enquanto o Tier IV é tolerante a falhas não planejadas (Fault Tolerant, 2N ou 2N+1 com caminhos ativos redundantes).',
      'O Tier III não possui qualquer redundância de UPS ou geradores (N), enquanto o Tier IV introduz pela primeira vez redundância N+1 em caminho único.',
      'O Tier IV possui disponibilidade nominal inferior (99,671%) ao Tier III (99,982%) por operar em modo cold site.',
      'Apenas o Tier I e o Tier II exigem energia redundante 2N+1 com compartimentação física contra incêndio.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Tecnologias, arquitetura e gestão de data center e de ambientes de missão crítica e 1.2. Redundância e tolerância a falhas (Eixo 15).',
    correctAnalysis:
      'Tier III (99,982%) oferece manutenção concorrente (múltiplos caminhos de energia/refrigeração, um ativo); Tier IV (99,995%) adiciona tolerância a falhas não planejadas com topologia 2N/2N+1, compartimentação e caminhos ativos simultâneos.',
    optionErrors: {
      1: 'Incorreta: ausência de redundância caracteriza Tier I e N+1 em caminho único caracteriza Tier II.',
      2: 'Incorreta: 99,671% corresponde ao Tier I, enquanto Tier IV atinge ~99,995% e não opera como cold site.',
      3: 'Incorreta: topologia 2N+1 com compartimentação física é exigência típica de ambientes Tier IV, nunca Tier I ou II.'
    }
  },
  {
    id: 'sarah-44',
    editalItemId: '15.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um cluster de alta disponibilidade (HA) de dois nós acessando uma LUN compartilhada em SAN, o link dedicado de heartbeat é interrompido enquanto ambos os nós continuam ligados. Caso não exista mecanismo de quórum/witness ou fencing (STONITH), qual risco crítico ocorre?',
    options: [
      'Deduplicação automática da LUN pela controladora SAN sem perda de integridade.',
      'Cenário de split-brain, em que ambos os nós assumem o papel ativo simultaneamente e corrompem os dados da LUN compartilhada.',
      'Conversão imediata do cluster para failover manual com redução do RPO a zero garantido.',
      'Desativação automática do multipath MPIO nos switches Fibre Channel.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. clusters, redundância, failover, HA (Eixo 15. Alta disponibilidade e continuidade).',
    correctAnalysis:
      'Sem heartbeat e sem quórum/fencing, ambos os nós julgam o parceiro inativo e tentam montar/gravar simultaneamente na LUN compartilhada (split-brain), causando corrupção severa do sistema de arquivos/banco.',
    optionErrors: {
      0: 'Incorreta: falha de heartbeat em cluster nunca dispara deduplicação nem preserva integridade contra gravações concorrentes.',
      2: 'Incorreta: split-brain provoca perda/corrupção de dados, exatamente o oposto de RPO zero garantido.',
      3: 'Incorreta: MPIO gerencia múltiplos caminhos de storage até a LUN e não é desativado pela perda de heartbeat entre nós.'
    }
  },
  {
    id: 'sarah-45',
    editalItemId: '15.2.7',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao comparar estratégias de site secundário para Disaster Recovery (DR) — Cold Site, Warm Site e Hot Site —, qual alternativa associa corretamente o tipo de site ao respectivo tempo de recuperação (RTO) e custo?',
    options: [
      'Cold Site mantém dados replicados em tempo real e servidores ligados em produção espelhada, garantindo RTO próximo de zero com menor custo.',
      'Hot Site possui infraestrutura completa, energia, conectividade, servidores ativos e dados replicados continuamente, oferecendo o menor RTO possível e o maior custo.',
      'Warm Site não possui energia elétrica, climatização nem racks instalados, exigindo aquisição emergencial de hardware após o desastre.',
      'Testes de recuperação tabletop consistem em desligar abruptamente a energia do data center principal em horário de pico.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Disaster Recovery, RPO, RTO e testes de recuperação (Eixo 15. Alta disponibilidade e continuidade).',
    correctAnalysis:
      'Hot Site é uma réplica operacional quase em tempo real (menor RTO/RPO e maior custo); Warm Site possui infraestrutura e equipamentos pré-instalados aguardando restauração de dados; Cold Site tem apenas espaço físico/energia/climatização.',
    optionErrors: {
      0: 'Incorreta: manter dados replicados em tempo real e servidores ativos descreve o Hot Site (o Cold Site tem maior RTO e menor custo).',
      2: 'Incorreta: ausência de hardware e equipamentos pré-instalados descreve um Cold Site, não Warm Site.',
      3: 'Incorreta: teste tabletop é um exercício simulado em mesa/reunião de revisão do plano, sem desligamento físico real.'
    }
  },
  {
    id: 'sarah-15-04',
    editalItemId: '15.1.2',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um data center precisa garantir que cada rack de missão crítica possua duas alimentações elétricas independentes (vias A e B vindas de nobreaks/UPS e geradores totalmente duplicados) de forma que, mesmo perdendo toda uma cadeia elétrica inteira por falha ou manutenção, a carga permaneça suportada sem interrupção. Qual notação de redundância representa exatamente essa arquitetura?',
    options: [
      'N (sem redundância).',
      'N+1 em caminho único.',
      '2N (redundância total espelhada em caminhos independentes) — eliminando Single Point of Failure (SPOF).',
      'N-1 (subdimensionamento intencional).'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.2. Redundância e tolerância a falhas (Eixo 15). 2N duplica integralmente os sistemas e caminhos de alimentação (via A e via B), eliminando SPOFs.',
    correctAnalysis:
      'Na topologia 2N, existem dois sistemas completos e independentes (cada um capaz de suportar 100% da carga), alimentando equipamentos dual-source pelas vias A e B e eliminando pontos únicos de falha (SPOF).',
    optionErrors: {
      0: 'Incorreta: topologia N possui apenas a capacidade exata necessária sem qualquer elemento reserva.',
      1: 'Incorreta: N+1 adiciona apenas um módulo sobressalente ao mesmo barramento/caminho, não dois caminhos completos independentes.',
      3: 'Incorreta: N-1 significa capacidade inferior à demanda mínima, inviável para alta disponibilidade.'
    }
  },
  {
    id: 'sarah-15-05',
    editalItemId: '15.2.2',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na arquitetura física e lógica de servidores corporativos conectados a uma SAN, quais elementos precisam ser duplicados para eliminar Pontos Únicos de Falha (SPOFs) de ponta a ponta entre servidor, rede de armazenamento e disco?',
    options: [
      'Duas fontes de alimentação em circuitos distintos, duas placas HBA/NIC ligadas a dois switches SAN/LAN separados e storage com controladoras duplas ativo-ativo e RAID redundante.',
      'Apenas dois cabos conectados na mesma porta lógica usando um adaptador Y passivo ligado a um único switch.',
      'Duas partições lógicas C: e D: criadas dentro de um único disco rígido SATA.',
      'Apenas dois servidores virtuais rodando dentro do mesmo host ESXi com uma única fonte.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. redundância (Eixo 15. Alta disponibilidade e continuidade). Eliminar SPOF exige redundância em energia, interfaces, switches e controladoras de storage.',
    correctAnalysis:
      'A eliminação real de SPOF no caminho servidor-storage requer dual PSU em circuitos independentes, múltiplas HBAs/NICs conectadas a fabrics/switches segregados (multipath) e storage com controladoras redundantes e RAID.',
    optionErrors: {
      1: 'Incorreta: um único switch continua sendo ponto único de falha para ambos os cabos.',
      2: 'Incorreta: partições no mesmo disco físico falham juntas caso o disco queime.',
      3: 'Incorreta: duas VMs no mesmo host físico com fonte única caem simultaneamente na perda da fonte ou placa-mãe.'
    }
  },
  {
    id: 'sarah-15-06',
    editalItemId: '15.2.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Após uma falha elétrica no site primário, o cluster realizou failover automático transferindo os serviços críticos para o site secundário. Restabelecida a normalidade e a sincronização de dados no site principal, qual termo técnico designa o retorno controlado dos serviços para o ambiente original?',
    options: [
      'Split-brain.',
      'Failback.',
      'Cold boot.',
      'Deduplicação reversa.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. failover (automático, manual, failback) (Eixo 15. Alta disponibilidade e continuidade).',
    correctAnalysis:
      'Failover é a transferência do serviço para o nó/site reserva diante de falha; Failback é o processo planejado de retorno das cargas de trabalho para o ambiente primário após sua plena recuperação e ressincronização.',
    optionErrors: {
      0: 'Incorreta: split-brain é condição de erro onde dois nós assumem papel ativo simultaneamente por perda de quórum/heartbeat.',
      2: 'Incorreta: cold boot refere-se a ligar fisicamente um equipamento a partir do estado desligado.',
      3: 'Incorreta: deduplicação é técnica de economia de armazenamento em backup/storage, sem relação com retorno de failover.'
    }
  },
  {
    id: 'sarah-15-07',
    editalItemId: '15.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em projetos de Alta Disponibilidade (HA), a métrica de "cinco noves" (99,999% de disponibilidade anual) corresponde a qual limite aproximado de tempo máximo de indisponibilidade acumulado ao longo de 1 ano inteiro (365 dias = 525.600 minutos)?',
    options: [
      'Cerca de 8 horas e 46 minutos por ano.',
      'Cerca de 52 minutos e 34 segundos por ano.',
      'Cerca de 5 minutos e 15 segundos por ano.',
      'Cerca de 3 dias e 15 horas por ano.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. HA (99,9%, 99,99%, 99,999%) (Eixo 15. Alta disponibilidade e continuidade). 0,001% de 525.600 min = 5,256 min (~5 min 15 s).',
    correctAnalysis:
      'Em 1 ano (525.600 min): 99,9% tolera ~8h46m; 99,99% tolera 52,56 min (~52 min e 34 s); e 99,999% ("cinco noves") tolera apenas 0,001%, ou seja, ~5 minutos e 15 segundos por ano.',
    optionErrors: {
      0: 'Incorreta: ~8 horas e 46 minutos por ano corresponde a 99,9% ("três noves").',
      1: 'Incorreta: ~52 minutos e 34 segundos (52,56 min) por ano corresponde a 99,99% ("quatro noves").',
      3: 'Incorreta: ~3 dias e 15 horas (e 36 minutos) por ano corresponde a 99% ("dois noves").'
    }
  },
  {
    id: 'sarah-15-08',
    editalItemId: '15.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um sistema financeiro exige RPO igual a zero (Zero Data Loss) entre dois data centers separados por enlace de baixa latência (< 5 ms). Qual tecnologia de replicação de armazenamento atende obrigatoriamente a esse requisito de RPO = 0?',
    options: [
      'Backup diário em fita LTO transportada por malote rodoviário às 23h.',
      'Replicação síncrona entre os storages/bancos de dados (a escrita só é confirmada à aplicação após gravação confirmada nos dois sites).',
      'Replicação assíncrona executada uma vez a cada 4 horas via snapshot.',
      'Cópia manual por rsync agendada no cron toda madrugada.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. RPO (Eixo 15. Alta disponibilidade e continuidade). RPO = 0 exige replicação síncrona para garantir que nenhuma transação confirmada seja perdida.',
    correctAnalysis:
      'Para assegurar RPO zero (nenhuma perda de dados após confirmação), a replicação precisa ser síncrona: o commit/ack de escrita só retorna ao aplicativo depois que ambos os sites confirmam a gravação.',
    optionErrors: {
      0: 'Incorreta: backup diário em fita resulta em RPO de até 24 horas.',
      2: 'Incorreta: replicação assíncrona em intervalos de 4 horas acarreta RPO de até 4 horas (mais dados em trânsito).',
      3: 'Incorreta: rsync agendado na madrugada resulta em RPO de até 24 horas.'
    }
  },
  {
    id: 'sarah-15-09',
    editalItemId: '15.2.6',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um plano de continuidade de TI, qual fator impacta diretamente a redução do RTO (Recovery Time Objective) após um incidente grave sem alterar por si só o RPO?',
    options: [
      'Aumentar a frequência dos backups incrementais de 4 horas para cada 15 minutos, mantendo restauração manual lenta em fita.',
      'Automatizar runbooks de failover, manter ambientes pré-provisionados (Hot/Warm Site) e acelerar os pipelines de subida dos serviços e redirecionamento DNS/BGP.',
      'Reduzir o prazo de retenção legal dos logs de auditoria de 5 anos para 7 dias.',
      'Aumentar a compressão de arquivos de backup antigo em fitas arquivadas em cofre externo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. RTO (Eixo 15. Alta disponibilidade e continuidade). RTO mede o tempo decorrido até o restabelecimento operacional do serviço.',
    correctAnalysis:
      'Enquanto o RPO depende da frequência de captura/replicação dos dados, o RTO é reduzido por mecanismos que aceleram a recuperação do serviço no ar — como automação de failover, sites quentes (Hot/Warm) e scripts de orquestração testados.',
    optionErrors: {
      0: 'Incorreta: aumentar a frequência de backups reduz o RPO (menos dados perdidos), mas a restauração manual lenta em fita mantém o RTO elevado.',
      2: 'Incorreta: prazo de retenção de logs refere-se a compliance e não acelera a recuperação operacional do serviço.',
      3: 'Incorreta: maior compressão em fita offline tende até a desacelerar a restauração, aumentando o RTO.'
    }
  },
  {
    id: 'sarah-15-10',
    editalItemId: '15.2.8',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os níveis progressivos de testes de recuperação de desastres (DRP/PCN), qual afirmação diferencia corretamente um teste "Tabletop" (em mesa) de um teste de "Failover Programado" (Simulação Paralela ou Corte Completo)?',
    options: [
      'O teste Tabletop desliga os servidores de produção sem aviso prévio, enquanto o Failover Programado apenas lê o manual em sala de reunião.',
      'O teste Tabletop valida fluxos, papéis e dependências em exercício guiado de discussão sem intervir em produção; o Failover Programado executa tecnicamente a comutação real para o ambiente de contingência e valida o RTO/RPO medidos.',
      'Testes de recuperação devem ser evitados em sistemas críticos porque nunca revelam falhas de DNS, permissões ou dependências ocultas.',
      'Uma vez aprovado na implantação inicial, o plano de DR nunca precisa ser retestado após mudanças de infraestrutura.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. testes de recuperação (tabletop, simulação, failover programado) (Eixo 15. Alta disponibilidade e continuidade).',
    correctAnalysis:
      'Testes evoluem em maturidade: revisões de checklist/tabletop avaliam papéis e procedimentos sem impacto operacional; simulações e failovers programados comprovam na prática técnica se RTO, RPO, scripts, DNS e dependências funcionam.',
    optionErrors: {
      0: 'Incorreta: os conceitos de Tabletop (reunião/cenário hipotético) e Failover real foram invertidos.',
      2: 'Incorreta: testar periodicamente é justamente o que revela dependências esquecidas, senhas expiradas e gargalos reais antes de um desastre.',
      3: 'Incorreta: mudanças de IPs, regras de firewall, novos servidores e certificados tornam planos não retestados obsoletos rapidamente.'
    }
  },

  // ==================== EIXO 16: 16. Gestão e governança de TI. (10 questões) ====================
  {
    id: 'sarah-46',
    editalItemId: '16.2.1',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Considerando a estrutura de governança e gestão de TI no COBIT 2019 e os conceitos da ITIL 4, qual associação entre domínios/componentes e suas respectivas finalidades está correta?',
    options: [
      'No COBIT 2019, os 40 objetivos dividem-se entre o domínio de Governança EDM (Avaliar, Dirigir e Monitorar) e os quatro domínios de Gestão APO, BAI, DSS e MEA; na ITIL 4, o SVS reúne 34 práticas e a Cadeia de Valor de Serviço.',
      'No COBIT 2019, APO e DSS pertencem exclusivamente à Governança Corporativa, enquanto EDM pertence à Gestão Operacional; na ITIL 4, mantiveram-se os 26 processos tradicionais.',
      'Na ISO/IEC 38500, os três papéis principais da governança de TI são Planejar, Fazer e Agir (PDCA), em substituição a Avaliar, Dirigir e Monitorar.',
      'Na ITIL 4, OLA (Operational Level Agreement) é o contrato externo firmado com fornecedores terceirizados de link WAN.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. COBIT 2019; ISO/IEC 38500; ITIL 4 e Item 1.2. acordos de nível de serviço (SLA e OLA) (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'O COBIT 2019 separa Governança (domínio EDM) de Gestão (APO, BAI, DSS, MEA) somando 40 objetivos; a ITIL 4 adota o Sistema de Valor de Serviço (SVS) com 34 práticas e Cadeia de Valor de Serviço.',
    optionErrors: {
      1: 'Incorreta: EDM é o domínio de Governança (não gestão), e 26 processos pertenciam à ITIL v3 (ITIL 4 possui 34 práticas).',
      2: 'Incorreta: o modelo da ISO/IEC 38500 é Avaliar, Dirigir e Monitorar (EDM); Plan-Do-Check-Act é o ciclo PDCA.',
      3: 'Incorreta: OLA é acordo interno entre áreas da mesma organização; contratos externos com fornecedores são Underpinning Contracts (UC).'
    }
  },
  {
    id: 'sarah-47',
    editalItemId: '16.2.15',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'À luz da Lei nº 13.709/2018 (LGPD) e da Lei nº 12.527/2011 (Lei de Acesso à Informação - LAI), qual conjunto de definições normativas está integralmente correto?',
    options: [
      'Na LGPD, o Operador toma as decisões referentes ao tratamento de dados de pessoas jurídicas; na LAI, o prazo de resposta de pedido de acesso é de 30 dias improrrogáveis.',
      'Na LGPD, o Controlador decide sobre o tratamento de dados pessoais de pessoa natural e o Operador executa em nome do controlador; na LAI, o prazo máximo de resposta quando não imediata é de 20 dias (prorrogável por mais 10), com sigilo máximo de 25 anos (ultrassecreta), 15 (secreta) e 5 (reservada).',
      'Na LGPD, o consentimento do titular é a única hipótese legal permitida para tratamento de dados em órgãos públicos; na LAI, informações ultrassecretas ficam sigilosas por 100 anos.',
      'Na LGPD, dados sobre saúde e biometria são classificados como dados anonimizados comuns; na LAI, a transparência ativa depende sempre de requerimento formal prévio.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. Lei nº 12.527/2011 (Lei de Acesso à Informação); Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD) (Eixo 16).',
    correctAnalysis:
      'A LGPD protege dados de pessoa natural definindo Controlador (decide) e Operador (executa); a LAI prevê resposta em até 20 dias (+10 prorrogáveis) e prazos de classificação de 25, 15 e 5 anos.',
    optionErrors: {
      0: 'Incorreta: quem decide é o Controlador (não Operador), a LGPD aplica-se a pessoa natural (não jurídica) e o prazo da LAI é 20 dias + 10 prorrogáveis.',
      2: 'Incorreta: o art. 7º da LGPD traz 10 bases legais (não apenas consentimento), e 100 anos aplica-se a dados pessoais relativos à intimidade/honra na LAI, não a ultrassecretas (25 anos).',
      3: 'Incorreta: saúde e biometria são dados pessoais sensíveis na LGPD, e transparência ativa é divulgação espontânea independente de requerimento.'
    }
  },
  {
    id: 'sarah-48',
    editalItemId: '16.2.11',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um projeto de governança de segurança da informação e continuidade alinhado às normas ISO/IEC 27001, ISO/IEC 22301 e NIST Cybersecurity Framework, qual é a função específica da Análise de Impacto no Negócio (BIA) e das seis funções centrais atuais do NIST CSF?',
    options: [
      'A BIA identifica processos críticos, dependências, MTPD, RTO e RPO para fundamentar o plano de continuidade; o NIST CSF estrutura-se em Govern, Identify, Protect, Detect, Respond e Recover.',
      'A BIA substitui a gestão de riscos da ISO 31000 eliminando controles da ISO 27002; o NIST CSF possui apenas quatro funções baseadas no ciclo Scrum.',
      'O PMBOK 7ª edição substitui a ISO/IEC 27001 na certificação de SGSI, enquanto o DAMA-DMBoK define os prazos legais da LAI.',
      'A ISO/IEC 22301 trata exclusivamente de notação gráfica de processos BPMN e métricas BSC sem relação com continuidade de negócios.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.9. SGSI, BIA e plano de continuidade de negócios e Item 2. ISO/IEC 27001, 27002 e 22301; NIST Cybersecurity Framework (Eixo 16).',
    correctAnalysis:
      'A BIA avalia impactos operacionais/financeiros ao longo do tempo para definir RTO, RPO e prioridades de recuperação (ISO 22301), enquanto o NIST CSF 2.0 organiza a cibersegurança em Govern, Identify, Protect, Detect, Respond e Recover.',
    optionErrors: {
      1: 'Incorreta: BIA complementa (não substitui) gestão de riscos da ISO 31000/27001 e controles da 27002, e o NIST CSF não usa ciclo Scrum.',
      2: 'Incorreta: PMBOK 7ª edição trata de gerenciamento de projetos (12 princípios e 8 domínios) e DAMA-DMBoK trata de gestão de dados.',
      3: 'Incorreta: ISO/IEC 22301 é a norma internacional de Sistema de Gestão de Continuidade de Negócios (SGCN), não de notação BPMN.'
    }
  },
  {
    id: 'sarah-16-04',
    editalItemId: '16.1.3',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na prática de Habilitação de Mudança (Change Enablement) da ITIL 4, uma equipe precisa aplicar semanalmente uma atualização rotineira de antivírus pré-aprovada com baixo risco e, em outro momento, corrigir uma falha crítica que paralisou o sistema hospitalar em produção. Esses dois tipos de mudança classificam-se como:',
    options: [
      'Mudança Normal (via CAB completo a cada atualização) e Mudança Padrão.',
      'Mudança Padrão (pré-autorizada, procedimento repetível e baixo risco) e Mudança Emergencial (avaliação acelerada pela Autoridade de Mudança / ECAB para restaurar serviço crítico ou conter risco iminente).',
      'Incidente Grave e Solicitação de Serviço sem registro.',
      'Mudança Emergencial (para o antivírus rotineiro) e Erro Conhecido (para a parada em produção).'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Gerenciamento de incidentes, problemas e mudanças (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'Na ITIL 4, mudanças Padrão são pré-aprovadas por seguirem procedimento conhecido de baixo risco; mudanças Normais passam pelo fluxo completo de avaliação pela Autoridade de Mudança (CAB); e mudanças Emergenciais seguem rito acelerado (ECAB/Autoridade Emergencial) diante de urgência crítica.',
    optionErrors: {
      0: 'Incorreta: rotinas pré-aprovadas de baixo risco não exigem reunião completa do CAB toda semana (são Padrão), e paradas críticas usam Emergencial.',
      2: 'Incorreta: atualização planejada e correção urgente alteram a configuração controlada (são Mudanças), devendo sempre ser registradas.',
      3: 'Incorreta: os tipos foram trocados e Erro Conhecido pertence ao Gerenciamento de Problemas.'
    }
  },
  {
    id: 'sarah-16-05',
    editalItemId: '16.2.4',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No tratamento de riscos segundo a ISO 31000 (e princípios integrados de risco), ao contratar uma apólice de seguro cibernético ou terceirizar a operação física de link WAN com SLA rigoroso, e ao optar por desligar permanentemente um protocolo legado vulnerável (SMBv1), quais opções de tratamento de risco foram aplicadas respectivamente?',
    options: [
      'Aceitar (reter) o risco e Mitigar parcialmente.',
      'Compartilhar/Transferir o risco (para seguradora/terceiro) e Evitar (eliminar) o risco removendo a fonte da atividade.',
      'Aumentar intencionalmente o risco e Ignorar o risco residual.',
      'Transferir a responsabilidade legal integral da LGPD para o fornecedor e Mitigar apenas por seguro.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.4. Identificação, análise, avaliação e tratamento de riscos e Item 2. ISO 31000 (Eixo 16).',
    correctAnalysis:
      'Seguros e terceirização contratual de impactos configuram compartilhamento/transferência de risco; descontinuar o recurso/protocolo causador da exposição caracteriza evitar o risco; e controles técnicos (firewall/patch) reduzem/mitigam o risco.',
    optionErrors: {
      0: 'Incorreta: aceitar/reter significa assumir conscientemente o risco sem ação modificadora adicional; desligar o serviço o elimina por completo (evitar).',
      2: 'Incorreta: risco residual jamais deve ser ignorado sem ciência da alçada decisória, e não houve busca deliberada por maior exposição.',
      3: 'Incorreta: contratos/seguros não isentam integralmente a responsabilidade regulatória perante a LGPD/titulares, e seguro é transferência (não mitigação técnica).'
    }
  },
  {
    id: 'sarah-16-06',
    editalItemId: '16.2.7',
    format: 'multipla_escolha',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Comparando os frameworks ágeis Scrum e Kanban na gestão de demandas e projetos de TI, qual afirmação distingue corretamente seus papéis, cadência e foco operacional?',
    options: [
      'No Scrum, o Scrum Master define a prioridade de negócio do Product Backlog e o Kanban obriga sprints fixas de exatamente 4 semanas.',
      'No Scrum, o Product Owner maximiza valor e prioriza o Product Backlog em Sprints de duração fixa (time-boxed), enquanto o Kanban foca em fluxo contínuo visualizado em quadro com limitação de Trabalho em Progresso (WIP) e redução de lead time.',
      'O PMBOK 7ª edição proíbe o uso de Scrum e Kanban por serem incompatíveis com seus 8 domínios de desempenho.',
      'No Kanban, o Scrum Master é papel obrigatório e não é permitido medir lead time ou throughput.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.5 e Item 2. PMBOK 7ª edição; Scrum e Kanban (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'Scrum estrutura-se em Sprints time-boxed com papéis definidos (Product Owner, Scrum Master, Developers); Kanban otimiza fluxo contínuo mediante visualização, limites explícitos de WIP e métricas como lead time/cycle time.',
    optionErrors: {
      0: 'Incorreta: quem prioriza o Product Backlog é o Product Owner (não o Scrum Master), e Kanban não exige sprints de duração fixa.',
      2: 'Incorreta: o PMBOK 7ª edição é agnóstico a metodologia e abraça abordagens preditivas, híbridas e ágeis como Scrum e Kanban.',
      3: 'Incorreta: Kanban não prescreve papéis obrigatórios como Scrum Master e baseia-se fortemente em métricas de fluxo (lead time, throughput).'
    }
  },
  {
    id: 'sarah-16-07',
    editalItemId: '16.2.9',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No alinhamento do PETI/PDTI com o Balanced Scorecard (BSC) e modelagem/melhoria de processos (BPMN e ciclo PDCA), quais são as quatro perspectivas clássicas do BSC e o significado de cada fase do PDCA?',
    options: [
      'Perspectivas do BSC: Financeira, Clientes, Processos Internos e Aprendizado e Crescimento; Ciclo PDCA: Plan (Planejar), Do (Executar), Check (Verificar/Checar) e Act (Agir corretivamente/Padronizar).',
      'Perspectivas do BSC: Hardware, Software, Rede e Pessoas; Ciclo PDCA: Prevent, Detect, Contain e Audit.',
      'Perspectivas do BSC: EDM, APO, BAI e DSS; Ciclo PDCA: As-Is, To-Be, BPMN e KPI.',
      'No BPMN, Gateways representam exclusivamente arquivos de log, e Eventos indicam apenas falhas de projeto.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. PETI e PDTI; KPIs e BSC; BPMN e ciclo PDCA (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'O BSC equilibra indicadores nas 4 perspectivas (Financeira, Clientes, Processos Internos, Aprendizado e Crescimento), enquanto o ciclo de melhoria contínua PDCA percorre Plan, Do, Check e Act.',
    optionErrors: {
      1: 'Incorreta: as perspectivas listadas e a sigla PDCA foram inventadas fora do modelo original de Kaplan & Norton / Deming.',
      2: 'Incorreta: EDM, APO, BAI e DSS são domínios do COBIT, não perspectivas do Balanced Scorecard.',
      3: 'Incorreta: no BPMN, Gateways controlam divergência/convergência de fluxo (decisões XOR/AND/OR) e Eventos indicam algo que acontece no processo (início, intermediário, fim).'
    }
  },
  {
    id: 'sarah-16-08',
    editalItemId: '16.1.8',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No planejamento, gestão e fiscalização de contratações de TI no setor público (conforme normas federais e Lei de Licitações vigente), qual é a sequência lógica correta dos artefatos de planejamento e a distinção de papéis na fiscalização?',
    options: [
      'Primeiro publica-se o contrato assinado e somente após a entrega elabora-se o Estudo Técnico Preliminar (ETP) para escolher o objeto.',
      'Na fase de planejamento elabora-se o Estudo Técnico Preliminar (ETP) e o Termo de Referência (TR) com requisitos e níveis de serviço; na execução, o Gestor do Contrato coordena a gestão contratual, enquanto o Fiscal Técnico verifica a conformidade técnica dos serviços/entregas.',
      'O Fiscal Técnico é proibido de verificar SLAs ou glosar faturas quando houver descumprimento de disponibilidade contratada.',
      'É permitido especificar diretamente marca comercial exclusiva sem justificativa técnica formal ou padronização no Termo de Referência.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.8. Planejamento, gestão e fiscalização de contratações de TI no setor público (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'As contratações públicas de TI iniciam com o planejamento (DFD/DOD, ETP avaliando viabilidade e soluções de mercado, Análise de Riscos e Termo de Referência) e exigem segregação na fiscalização (Gestor do Contrato, Fiscal Técnico, Fiscal Administrativo/Requisitante).',
    optionErrors: {
      0: 'Incorreta: o ETP e o TR pertencem à fase preparatória (antes da licitação e da assinatura do contrato).',
      2: 'Incorreta: aferir SLAs/NMS e propor glosas por descumprimento é atribuição essencial da fiscalização técnica.',
      3: 'Incorreta: a indicação de marca sem justificativa técnica excepcional ou processo formal de padronização fere a competitividade licitatória.'
    }
  },
  {
    id: 'sarah-16-09',
    editalItemId: '16.2.5',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em auditoria de governança corporativa e controles internos utilizando o framework COSO (COSO IC / Cubo COSO), quais são os três objetivos fundamentais representados no topo do cubo e os cinco componentes de controles internos?',
    options: [
      'Objetivos: Estratégia, Hardware e Backup; Componentes: LAN, WAN, Wi-Fi, Storage e Nuvem.',
      'Objetivos: Operacional, Divulgação/Relato (Reporting) e Conformidade (Compliance); Componentes: Ambiente de Controle, Avaliação de Riscos, Atividades de Controle, Informação e Comunicação, e Atividades de Monitoramento.',
      'Objetivos: Sigilo, Confidencialidade e Disponibilidade; Componentes: Identify, Protect, Detect, Respond e Recover.',
      'Objetivos: Sprint, Backlog e Daily; Componentes: Plan, Do, Check, Act e Release.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. COSO (Eixo 16. Gestão e governança de TI). O Cubo COSO cruza 3 categorias de objetivos, 5 componentes de controle interno e a estrutura organizacional.',
    correctAnalysis:
      'No COSO Internal Control, as três categorias de objetivos são Operações, Divulgação (Reporting) e Conformidade (Compliance), sustentadas por 5 componentes: Ambiente de Controle, Avaliação de Riscos, Atividades de Controle, Informação e Comunicação, e Monitoramento.',
    optionErrors: {
      0: 'Incorreta: os termos listados referem-se a ativos técnicos de infraestrutura, não ao modelo COSO.',
      2: 'Incorreta: Identify, Protect, Detect, Respond e Recover são funções do NIST Cybersecurity Framework (sem Govern no CSF 1.1).',
      3: 'Incorreta: mistura termos de Scrum e ciclo PDCA sem relação com o Cubo COSO.'
    }
  },
  {
    id: 'sarah-16-10',
    editalItemId: '16.2.13',
    format: 'multipla_escolha',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um programa de Governança, Qualidade e Ciclo de Vida dos Dados fundamentado no DAMA-DMBoK (Data Management Body of Knowledge), qual é o posicionamento da Governança de Dados na "Roda DAMA" e o foco do gerenciamento do ciclo de vida?',
    options: [
      'A Governança de Dados ocupa o centro da Roda DAMA provendo planejamento, supervisão e controle sobre as demais 10 áreas de conhecimento (como Arquitetura, Modelagem, Segurança, Qualidade e Metadados), gerenciando o dado da criação/coleta até o descarte seguro.',
      'O DAMA-DMBoK trata exclusivamente da formatação física de fitas LTO em servidores Linux, sem abordar qualidade de dados ou metadados.',
      'A Governança de Dados no DAMA-DMBoK é subordinada ao cabo estruturado de camada 1 e dispensa definição de proprietários/stewards de dados.',
      'O ciclo de vida dos dados preconiza manter todos os registros brutos duplicados indefinidamente sem políticas de retenção ou expurgo.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.12. Governança, qualidade e ciclo de vida dos dados e Item 2. DAMA-DMBoK (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'Na Roda do DAMA-DMBoK2, a Governança de Dados situa-se no núcleo central exercendo direção e controle sobre as outras 10 áreas de conhecimento (11 no total), garantindo qualidade, metadados, segurança e ciclo de vida completo (criação ao descarte).',
    optionErrors: {
      1: 'Incorreta: DAMA-DMBoK é o corpo de conhecimento abrangente de gestão de dados, incluindo qualidade, metadados, modelagem, segurança e governança.',
      2: 'Incorreta: Data Stewards e Data Owners são papéis fundamentais na governança do DAMA-DMBoK.',
      3: 'Incorreta: reter tudo indefinidamente viola gestão de ciclo de vida, custos, qualidade e princípios de eliminação/necessidade da LGPD.'
    }
  }
]);
