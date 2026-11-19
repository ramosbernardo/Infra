import { Question } from '../../types/edital';

export const QUESTIONS_AXIS_13_TO_16: readonly Question[] = Object.freeze([
  // ==================== EIXO 13: 13. Segurança. (12 questões) ====================
  {
    id: 'sarah-37',
    editalItemId: '13.1.4',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Complete as lacunas sobre assinatura e certificação digital:\n\n"Para assinar digitalmente garantindo integridade, autenticidade e não repúdio, o emissor calcula o ________ do arquivo e o cifra com sua ________; o destinatário valida usando a ________ do emissor no certificado X.509."\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    options: [
      'hash; chave pública; chave privada.',
      'certificado; chave AES; chave privada.',
      'hash; chave privada; chave pública.',
      'resumo SHA-256; chave da AC; chave AES.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.4. Assinatura e certificação digital e Item 1.1. Princípios de segurança da informação (Eixo 13. Segurança). Assinar = cifrar hash com chave privada do emissor; verificar = usar chave pública do emissor.',
    correctAnalysis:
      'O emissor gera um hash (como SHA-256) e o cifra com SUA chave privada; terceiros usam a chave pública constante no certificado do emissor para validar autenticidade e não repúdio.',
    optionErrors: {
      0: 'Incorreta: inverte as chaves — se o emissor assinasse com a chave pública, qualquer pessoa poderia forjar.',
      1: 'Incorreta: assinatura digital exige criptografia assimétrica, não AES, e o verificador nunca possui a privada.',
      3: 'Incorreta: o emissor assina com sua própria chave privada (não a da AC) e verifica-se com sua chave pública.'
    }
  },
  {
    id: 'sarah-38',
    editalItemId: '13.1.2',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre padrões modernos de identidade (OAuth 2.0, OIDC e JWT), considere as afirmativas:\n\nI. O OAuth 2.0 é um framework de autorização delegada por meio de Access Tokens.\nII. O OpenID Connect (OIDC) estende o OAuth 2.0 adicionando autenticação e ID Token.\nIII. Um JWT assinado (JWS) tem três partes separadas por ponto: header.payload.signature.\nIV. Um JWT JWS criptografa obrigatoriamente o payload impedindo leitura sem chave privada.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e IV estão corretas.',
      'Somente I, II e III estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Métodos de autenticação e autorização (MFA, OAuth 2.0, OpenID Connect e JWT) (Eixo 13. Segurança). O payload de um JWS padrão é apenas codificado em Base64Url (assinado, não cifrado).',
    correctAnalysis:
      'As afirmativas I, II e III definem corretamente OAuth 2.0, OIDC e estrutura JWT; a IV é falsa porque header e payload de um JWT JWS são legíveis em Base64Url (criptografia exige JWE).',
    optionErrors: {
      0: 'Incorreta: inclui IV (JWS é assinado em Base64Url legível, não cifrado) e omite III.',
      2: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-39',
    editalItemId: '13.1.5',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na classificação de malwares, relacione os tipos à esquerda com suas características à direita.\n\nColuna da Esquerda:\n(I) Worm\n(II) Ransomware\n(III) Cavalo de Troia\n(IV) Backdoor\n(V) Keylogger\n\nColuna da Direita:\n(A) Criptografa arquivos locais ou da rede exigindo resgate para devolução.\n(B) Registra ocultamente teclas digitadas pelo usuário para capturar senhas.\n(C) Propaga-se autonomamente pela rede sem arquivo hospedeiro ou clique.\n(D) Permite retorno futuro oculto ao sistema comprometido contornando login.\n(E) Disfarça-se de programa legítimo para induzir execução pelo usuário.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-E, II-A, III-C, IV-D, V-B.',
      'I-C, II-D, III-E, IV-A, V-B.',
      'I-C, II-A, III-B, IV-D, V-E.',
      'I-C, II-A, III-E, IV-D, V-B.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.5. Malwares (vírus, cavalo de Troia, worms, ransomware, spyware, backdoors e keyloggers) (Eixo 13. Segurança). Worm (C), Ransomware (A), Trojan (E), Backdoor (D), Keylogger (B).',
    correctAnalysis:
      'Associação correta: (I) Worm -> propagação autônoma (C); (II) Ransomware -> sequestro/criptografia (A); (III) Trojan -> disfarce legítimo (E); (IV) Backdoor -> porta oculta (D); (V) Keylogger -> teclas (B).',
    optionErrors: {
      0: 'Incorreta: inverte Worm com Cavalo de Troia.',
      1: 'Incorreta: inverte Ransomware com Backdoor.',
      2: 'Incorreta: troca Trojan com Keylogger.'
    }
  },
  {
    id: 'sarah-13-04',
    editalItemId: '13.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um ataque tirou do ar o sistema de prontuários e outro alterou valores de exames em trânsito. Quais princípios foram violados?',
    options: [
      'Disponibilidade e Integridade.',
      'Confidencialidade e Não Repúdio.',
      'Autenticidade e Confidencialidade.',
      'Irretratabilidade e Disponibilidade.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.1. Princípios de segurança da informação (CIDAN) (Eixo 13. Segurança). Indisponibilidade fere Disponibilidade; alteração indevida fere Integridade.',
    correctAnalysis:
      'Disponibilidade garante acesso contínuo aos usuários autorizados (violada na queda); Integridade assegura que os dados não sofram alteração não autorizada.',
    optionErrors: {
      1: 'Incorreta: confidencialidade protege contra vazamento/leitura indevida, e não repúdio impede negação de autoria.',
      2: 'Incorreta: autenticidade valida identidade legítima e confidencialidade protege o sigilo.',
      3: 'Incorreta: irretratabilidade (não repúdio) trata de comprovação de autoria, não de adulteração.'
    }
  },
  {
    id: 'sarah-13-05',
    editalItemId: '13.1.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre criptografia aplicada em trânsito e repouso (TLS/BitLocker), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Algoritmos simétricos (como AES) cifram grandes volumes de dados em massa com alto desempenho.\n( ) Algoritmos assimétricos (como RSA e ECC/ECDHE) atuam na autenticação e negociação de chaves.\n( ) Funções hash como SHA-256 são facilmente reversíveis para recuperar a chave privada original.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.3. Criptografia simétrica e assimétrica (Eixo 13. Segurança). Sistemas híbridos usam AES para dados em massa (V), ECC/RSA para troca de chaves/autenticação (V) e hash unidirecional irreversível para integridade (F).',
    correctAnalysis:
      'As duas primeiras afirmativas refletem a criptografia híbrida moderna; a terceira é falsa porque funções hash criptográficas são unidirecionais (irreversíveis).',
    optionErrors: {
      0: 'Incorreta: assimétricos atuam de fato na troca de chaves e funções hash não são reversíveis.',
      1: 'Incorreta: AES cifra volumes em massa (disco/sessão TLS) por sua eficiência computacional.',
      3: 'Incorreta: a terceira afirmativa é falsa (hashes são irreversíveis).'
    }
  },
  {
    id: 'sarah-13-06',
    editalItemId: '13.1.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um ataque fileless executou PowerShell codificado direto na memória RAM sem gravar binário em disco. Qual controle o detecta?',
    options: [
      'Varredura estática apenas por hash MD5 de arquivos gravados.',
      'Análise heurística/comportamental e EDR monitorando processos.',
      'Firewall L4 filtrando apenas portas TCP abaixo de 1024.',
      'Sandbox restrita exclusivamente a anexos de e-mail recebidos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.6. Antivírus (EDR, heurística, assinaturas, sandbox, quarentena) (Eixo 13. Segurança).',
    correctAnalysis:
      'Assinaturas em disco não veem execução em memória; proteção comportamental e EDR monitoram árvore de processos, linha de comando codificada e injeção em RAM.',
    optionErrors: {
      0: 'Incorreta: ataques fileless não gravam executável conhecido no disco.',
      2: 'Incorreta: firewall L4 filtra portas de rede e não inspeciona scripts em memória.',
      3: 'Incorreta: limitar sandbox a anexos de e-mail não monitora processos PowerShell na RAM.'
    }
  },
  {
    id: 'sarah-13-07',
    editalItemId: '13.2.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para realizar hardening em servidores segundo guias CIS Benchmarks, aplicam-se todas as medidas abaixo, EXCETO:',
    options: [
      'Remover pacotes e serviços ociosos reduzindo a superfície de ataque.',
      'Fechar portas desnecessárias e desabilitar Telnet e SMBv1.',
      'Aplicar patches de segurança e política de menor privilégio.',
      'Desativar o firewall local e pôr todos no grupo Administradores.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. hardening (Eixo 13. Segurança). Hardening reduz a superfície de ataque removendo serviços ociosos, aplicando patches e mantendo defesa em profundidade com firewall local ativo e menor privilégio.',
    correctAnalysis:
      'A exceção envolve enfraquecer controles: desligar firewall de host e conceder privilégios administrativos amplos expõe gravemente o servidor a movimento lateral.',
    optionErrors: {
      0: 'Incorreta (medida válida): remover serviços desnecessários reduz vetores exploráveis.',
      1: 'Incorreta (medida válida): eliminar portas e protocolos legados reduz risco imediato.',
      2: 'Incorreta (medida válida): atualização e menor privilégio integram baselines CIS.'
    }
  },
  {
    id: 'sarah-13-08',
    editalItemId: '13.2.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual prática atende ao menor privilégio e à segregação de funções na rotina de administradores de TI?',
    options: [
      'Separar conta nominal comum da conta privilegiada (PAM/MFA).',
      'Usar Domain Admin para navegar na web e gerenciar e-mails.',
      'Compartilhar uma senha administrativa única entre a equipe.',
      'Conceder Full Control permanente a todo o suporte no domínio.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. gestão de acessos e menor privilégio (Eixo 13. Segurança). Contas nominais separadas + menor privilégio + MFA/PAM reduzem impacto de comprometimento.',
    correctAnalysis:
      'O princípio do menor privilégio e PAM determinam operar no dia a dia com conta sem privilégios, elevando com conta nominal protegida por MFA apenas nas tarefas administrativas.',
    optionErrors: {
      1: 'Incorreta: navegar e ler e-mails com Domain Admin expõe o domínio inteiro a qualquer phishing.',
      2: 'Incorreta: contas compartilhadas inviabilizam auditoria individual e responsabilização.',
      3: 'Incorreta: Full Control irrestrito viola frontalmente o princípio do menor privilégio.'
    }
  },
  {
    id: 'sarah-13-09',
    editalItemId: '13.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'A chave privada de um servidor HTTPS vazou antes do vencimento. Após revogar na AC, como navegadores validam a revogação?',
    options: [
      'Atualizando o registro DNS AAAA sem avisar clientes nem a AC.',
      'Aguardando a expiração natural mantendo o cabeçalho HSTS ativo.',
      'Consultando a Lista CRL publicada ou o protocolo OCSP junto à AC.',
      'Trocando a cadeia X.509 por chave pré-compartilhada PSK local.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. certificados (Eixo 13. Segurança). CRL (lista periódica publicada pela AC) e OCSP (consulta em tempo real/stapling) informam revogações.',
    correctAnalysis:
      'Quando um certificado é revogado antecipadamente, clientes verificam seu status consultando a CRL ou realizando checagem em tempo real via OCSP / OCSP Stapling.',
    optionErrors: {
      0: 'Incorreta: DNS resolve nomes para IPs e não armazena status de revogação de certificados.',
      1: 'Incorreta: HSTS força HTTPS, mas não invalida uma chave privada vazada antes do prazo.',
      3: 'Incorreta: HTTPS baseia-se em PKI assimétrica X.509, não em PSK dentro do certificado.'
    }
  },
  {
    id: 'sarah-13-10',
    editalItemId: '13.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um scanner apontou vulnerabilidade com CVE oficial e CVSS 9,8 em serviço na DMZ. Qual conduta está alinhada às boas práticas?',
    options: [
      'Adiar correção de CVSS >= 9,0 se houver assinaturas IPS na borda.',
      'Priorizar patch/mitigação imediata e manter segmentação Zero Trust.',
      'Mover o servidor vulnerável da DMZ direto para a VLAN de bancos.',
      'Alterar manualmente o CVSS no relatório para 2,0 até o fim do mês.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. vulnerabilidades e segmentação (Eixo 13. Segurança). Gestão de vulnerabilidades prioriza por CVSS e contexto de exposição, combinada à microssegmentação.',
    correctAnalysis:
      'Falhas críticas (CVSS 9,0–10,0) expostas na DMZ exigem patch prioritário ou mitigação compensatória imediata, mantendo segmentação rígida para conter movimento lateral.',
    optionErrors: {
      0: 'Incorreta: IPS é controle compensatório temporário e não substitui correção de CVE crítica.',
      2: 'Incorreta: mover servidor vulnerável para a rede interna de bancos facilita comprometimento total.',
      3: 'Incorreta: adulterar métricas CVSS mascara riscos reais e viola compliance.'
    }
  },
  {
    id: 'sarah-13-11',
    editalItemId: '13.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre ataques a credenciais em ambientes Active Directory, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O ataque Pass-the-Hash reutiliza o hash NTLM extraído (como do LSASS) para autenticar sem conhecer a senha clara.\n( ) O ataque Pass-the-Ticket injeta tickets Kerberos válidos (TGT/TGS) extraídos da sessão na memória.\n( ) O ataque Kerberoasting rouba diretamente do LSASS o hash da conta de usuário para autenticar sem quebrar senha.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. ataques a credenciais AD (Eixo 13. Segurança). Pass-the-Hash usa hash NTLM (V); Pass-the-Ticket reutiliza TGT/TGS extraídos (V); Kerberoasting solicita tickets TGS de contas com SPN ao KDC e realiza quebra de senha offline (F).',
    correctAnalysis:
      'Pass-the-Hash e Pass-the-Ticket reutilizam hashes NTLM ou tickets Kerberos em memória (como via LSASS); já Kerberoasting pede TGSs de contas de serviço com SPN e executa força bruta offline sobre o hash do TGS.',
    optionErrors: {
      1: 'Incorreta: Pass-the-Ticket reutiliza de fato tickets Kerberos e Kerberoasting quebra TGS offline.',
      2: 'Incorreta: Pass-the-Hash reutiliza efetivamente o hash NTLM sem precisar da senha em texto claro.',
      3: 'Incorreta: a terceira afirmativa confunde Kerberoasting com Pass-the-Hash/dump de LSASS.'
    }
  },
  {
    id: 'sarah-13-12',
    editalItemId: '13.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre autenticação multifator (MFA) e gerenciamento seguro de identidades, assinale a afirmação INCORRETA.',
    options: [
      'MFA combina ao menos dois fatores distintos: algo que você sabe, tem ou é.',
      'Tokens FIDO2/WebAuthn e chaves de hardware oferecem alta resistência contra phishing.',
      'Códigos TOTP temporários baseiam-se em segredo compartilhado e janela de tempo sincronizada.',
      'Usar senha forte junto com pergunta secreta de confirmação representa dois fatores independentes.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2. MFA e autenticação (Eixo 13. Segurança). Senha e pergunta secreta pertencem ambos à mesma categoria ("algo que você sabe"), não configurando autenticação multifator real.',
    correctAnalysis:
      'A afirmação incorreta considera duas informações memorizadas como dois fatores: MFA exige categorias distintas (conhecimento + posse + inerência/biometria).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): descreve exatamente os três pilares clássicos de fatores MFA.',
      1: 'Incorreta (afirmação verdadeira): FIDO2/WebAuthn vincula criptograficamente o desafio ao domínio legítimo.',
      2: 'Incorreta (afirmação verdadeira): TOTP (RFC 6238) deriva OTPs de curta duração via HMAC + timestamp.'
    }
  },

  // ==================== EIXO 14: 14. Troubleshooting. (12 questões) ====================
  {
    id: 'sarah-40',
    editalItemId: '14.1.1',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre Gerenciamento de Incidentes e de Problemas, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Gerenciamento de Incidentes visa restaurar o serviço o mais rápido possível, podendo usar workaround.\n( ) Gerenciamento de Problemas foca restaurar o serviço em segundos sem buscar causa raiz.\n( ) A busca da causa raiz de incidentes recorrentes e Erros Conhecidos pertence ao Gerenciamento de Problemas.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Gerenciamento de incidentes e de problemas (Eixo 14. Troubleshooting). Incidente = restauração rápida/workaround (V); Problema = investigação de causa raiz e Erros Conhecidos (V).',
    correctAnalysis:
      'A primeira e a terceira afirmativas são verdadeiras; a segunda é falsa porque descreve o oposto do Gerenciamento de Problemas (que busca causa raiz e cataloga Erros Conhecidos).',
    optionErrors: {
      0: 'Incorreta: a segunda afirmativa é falsa e a terceira é verdadeira.',
      1: 'Incorreta: a primeira afirmativa é verdadeira (restauração ágil é foco de Incidentes).',
      2: 'Incorreta: a terceira afirmativa é verdadeira (Erros Conhecidos e RCA são foco de Problemas).'
    }
  },
  {
    id: 'sarah-41',
    editalItemId: '14.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao correlacionar logs entre firewall, switch e AD durante falha crítica, os relógios divergem em 14 min. Qual o pré-requisito?',
    options: [
      'Sincronizar relógios via NTP (UTC) e centralizar em syslog/SIEM.',
      'Reiniciar os servidores afetados antes da coleta para limpar RAM.',
      'Usar fusos locais sem NTP e desativar o logrotate nos servidores.',
      'Trocar os cabos de núcleo antes de delimitar escopo ou ver logs.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. análise de logs, coleta de evidências e correlação de eventos (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'A correlação cronológica precisa exige relógios sincronizados via NTP (em fuso uniforme como UTC) e coleta centralizada/preservada antes de mudanças destrutivas.',
    optionErrors: {
      1: 'Incorreta: reiniciar antes da coleta destrói evidências em memória RAM e conexões ativas.',
      2: 'Incorreta: fusos não sincronizados impedem correlação e parar logrotate pode lotar o disco.',
      3: 'Incorreta: trocar cabos às cegas viola metodologia estruturada de diagnóstico.'
    }
  },
  {
    id: 'sarah-42',
    editalItemId: '14.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Apenas um usuário não acessa a intranet web, enquanto toda a mesma VLAN acessa normalmente. Qual abordagem inicial seguir?',
    options: [
      'Reiniciar o switch core para limpar tabelas MAC da VLAN inteira.',
      'Trocar o certificado TLS do balanceador de carga do data center.',
      'Isolar no endpoint checando DNS, proxy, IP/cache e firewall local.',
      'Reiniciar o pool inteiro de servidores web para renovar sessões.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. metodologia de diagnóstico e isolamento de falhas (Eixo 14. Troubleshooting). Se a falha é restrita a 1 estação, isola-se o escopo no host antes de tocar serviços compartilhados.',
    correctAnalysis:
      'O isolamento de falhas delimita o raio de impacto: como outros colegas na mesma VLAN funcionam, investiga-se o endpoint específico sem causar impacto global.',
    optionErrors: {
      0: 'Incorreta: reiniciar um switch core causaria indisponibilidade geral por incidente isolado.',
      1: 'Incorreta: falha no certificado do balanceador afetaria todos os usuários do VIP.',
      3: 'Incorreta: reiniciar servidores em produção derrubaria dezenas de usuários saudáveis.'
    }
  },
  {
    id: 'sarah-14-04',
    editalItemId: '14.1.2',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Leia sobre metodologias de análise de causa raiz (RCA):\n\n"Para aprofundar cadeia causal linear perguntando sucessivamente a razão do evento usa-se a técnica ________; já para organizar causas potenciais por categorias (Método, Máquina, Mão de obra e Meio) usa-se o ________."\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    options: [
      'Diagrama de Ishikawa; Scrum Poker.',
      'dos 5 Porquês; Diagrama de Ishikawa.',
      'do Rollback Contínuo; Gráfico de Gantt.',
      'da Matriz RACI; Teste de Carga.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Metodologias de análise de causa raiz (Eixo 14. Troubleshooting). 5 Porquês investiga cadeia causal iterativa; Ishikawa (Espinha de Peixe) categoriza múltiplas causas possíveis.',
    correctAnalysis:
      'Os 5 Porquês aprofundam a cadeia linear até a origem sistêmica, enquanto o Diagrama de Ishikawa (Espinha de Peixe) agrupa fatores contribuintes por categorias.',
    optionErrors: {
      0: 'Incorreta: coloca Ishikawa na primeira lacuna e cita ferramenta de estimativa ágil na segunda.',
      2: 'Incorreta: Rollback e gráfico de Gantt não são metodologias de análise de causa raiz.',
      3: 'Incorreta: RACI define responsabilidades e teste de carga mede desempenho.'
    }
  },
  {
    id: 'sarah-14-05',
    editalItemId: '14.2.4',
    extraEditalItemIds: ['14.2.1', '1.1.1'],
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na metodologia bottom-up de diagnóstico no modelo OSI/TCP-IP, qual sequência correta de verificação é executada?',
    options: [
      'Erros HTTPS (L7) -> consulta SQL -> rotas IP -> link físico e CRC.',
      'Testar apenas camada de Apresentação (6) antes de checar IP.',
      'Reiniciar o AD e limpar cache DNS antes de checar porta TCP.',
      'Link/CRC (L1) -> MAC/VLAN (L2) -> IP/rotas (L3) -> TCP (L4) -> L7.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. isolamento de falhas / metodologia de diagnóstico (top-down, bottom-up, divide-and-conquer) no Modelo OSI/TCP-IP (Eixo 14. Troubleshooting / Item 1.1.1).',
    correctAnalysis:
      'Na metodologia bottom-up, o diagnóstico inicia na Camada Física (cabos, link, CRC), sobe para Enlace (VLAN/MAC), Rede (IP/rotas), Transporte (TCP/UDP) até Aplicação.',
    optionErrors: {
      0: 'Incorreta: iniciar pela camada de Aplicação descendo ao físico descreve a abordagem top-down.',
      1: 'Incorreta: divide-and-conquer parte geralmente da camada de Rede (L3), nunca só da camada 6.',
      2: 'Incorreta: reiniciar serviços às cegas viola qualquer metodologia estruturada.'
    }
  },
  {
    id: 'sarah-14-06',
    editalItemId: '14.2.3',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre coleta e preservação de evidências durante incidentes graves, considere as afirmativas:\n\nI. Deve-se seguir a ordem de volatilidade, coletando RAM e conexões ativas antes de discos.\nII. Capturas pcap (tcpdump) e snapshots de VM preservam o contexto antes de alterações.\nIII. Logs e dumps coletados devem ter integridade checada por hash e cadeia de custódia.\nIV. Como primeira ação obrigatória, deve-se reiniciar o host para limpar memória e logs antigos.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. coleta de evidências (dumps, pcaps, cadeia de custódia, snapshots) (Eixo 14. Troubleshooting). Preservar dados voláteis (I), usar pcaps/snapshots (II) e gerar hashes/custódia (III) são corretas; reiniciar/apagar logs destrói provas (IV falsa).',
    correctAnalysis:
      'As afirmativas I, II e III refletem perícia e troubleshooting estruturado; a IV é falsa porque reiniciar e limpar logs elimina evidências voláteis vitais.',
    optionErrors: {
      1: 'Incorreta: inclui IV (reiniciar antes da coleta destrói RAM e conexões ativas) e omite III.',
      2: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-14-07',
    editalItemId: '14.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Ao diagnosticar "https://intranet.corp", "curl -k https://10.20.30.40" responde, mas "nslookup intranet.corp" falha. Onde está a falha?',
    options: [
      'Na camada física do cabeamento entre switch e servidor web.',
      'No bloqueio da porta TCP 443 pelo firewall entre cliente e host.',
      'Na resolução de nomes DNS, pois L3/L4 e HTTPS respondem via IP.',
      'Na expiração do certificado TLS impedindo resposta do nslookup.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. isolamento de falhas (Eixo 14. Troubleshooting). Testar por IP vs FQDN isola imediatamente problemas de DNS vs transporte/aplicação.',
    correctAnalysis:
      'Como o acesso direto ao IP pela porta 443 funciona perfeitamente (provando rede física, roteamento, firewall L4 e web operacionais), a falha está isolada no DNS.',
    optionErrors: {
      0: 'Incorreta: sucesso no ping e curl direto ao IP comprova que camada física e enlace funcionam.',
      1: 'Incorreta: curl -k https://10.20.30.40 funcionou, provando que a porta TCP 443 está liberada.',
      3: 'Incorreta: certificados TLS não interferem em consultas DNS no nslookup.'
    }
  },
  {
    id: 'sarah-14-08',
    editalItemId: '14.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre a condução de análises pós-incidente (Post-Mortem) em infraestrutura crítica, assinale a afirmação INCORRETA.',
    options: [
      'A cultura blameless incentiva transparência para identificar falhas sistêmicas e lacunas de automação.',
      'O objetivo central do Post-Mortem é aplicar punições disciplinares individuais ao operador sem alterar alertas.',
      'O relatório documenta linha do tempo, impacto, causa raiz e plano preventivo com responsáveis e prazos.',
      'Lições aprendidas atualizam runbooks de resposta e calibram alertas para prevenir recorrência.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. análise de causa raiz (post-mortem, prevenção de recorrência) (Eixo 14. Troubleshooting). O post-mortem visa melhoria de processos e travas técnicas, nunca caça às bruxas punitiva.',
    correctAnalysis:
      'A afirmação incorreta promove cultura punitiva individual sem corrigir falhas sistêmicas, o que oculta erros futuros e mantém intactas as vulnerabilidades.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): post-mortem blameless revela falhas sistêmicas reais.',
      2: 'Incorreta (afirmação verdadeira): cronologia, causa raiz e ações preventivas compõem o relatório.',
      3: 'Incorreta (afirmação verdadeira): aprimoramento de runbooks e monitoramento reduz recorrência.'
    }
  },
  {
    id: 'sarah-14-09',
    editalItemId: '14.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Durante manutenção de firmware em firewall HA, o sistema crítico parou de autenticar após a troca de nó. O que fazer na janela?',
    options: [
      'Aguardar chamado do fabricante durante a semana com sistema fora.',
      'Alterar regras manualmente no secundário fora do escopo aprovado.',
      'Encerrar a janela confiando apenas em testes ICMP ping no firewall.',
      'Executar o plano de rollback testado e validar o fluxo ponta a ponta.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. procedimentos de recuperação (rollback, failback, validação pós-recuperação) (Eixo 14. Troubleshooting).',
    correctAnalysis:
      'Toda mudança planejada deve possuir critério claro de abortamento e plano de rollback validado; após recuperar, é obrigatória a validação funcional ponta a ponta.',
    optionErrors: {
      0: 'Incorreta: manter ambiente crítico parado indefinidamente sem rollback viola SLAs.',
      1: 'Incorreta: improvisar alterações em produção amplia risco de corromper o ambiente.',
      2: 'Incorreta: ping ICMP não valida autenticação de aplicação nem fluxo funcional.'
    }
  },
  {
    id: 'sarah-14-10',
    editalItemId: '14.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um servidor web Linux caiu sob carga e o dmesg registrou "Out of memory: Killed process (java)". O que indica a mensagem?',
    options: [
      'O OOM Killer do kernel encerrou a JVM por esgotamento de RAM e swap.',
      'O limite ulimit -n esgotou inodes em /var/log disparando erro OOM.',
      'O escalonador CFS matou o processo Java por excesso de TIME_WAIT.',
      'O serviço journald rotacionou logs reiniciando a máquina virtual JVM.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. análise de logs (Eixo 14. Troubleshooting). Mensagens "Out of memory: Killed process" no log do kernel apontam ação direta do OOM Killer por falta de memória.',
    correctAnalysis:
      'Quando memória RAM e swap se esgotam, o OOM Killer do kernel escolhe o maior consumidor (aqui a JVM) e o encerra com SIGKILL para preservar a estabilidade do kernel.',
    optionErrors: {
      1: 'Incorreta: ulimit -n gera erro "Too many open files", não OOM Killer por falta de memória.',
      2: 'Incorreta: o escalonador CFS distribui tempo de CPU e nunca mata JVM por TIME_WAIT.',
      3: 'Incorreta: journald gerencia logs em disco e nunca aciona OOM Killer contra a JVM.'
    }
  },
  {
    id: 'sarah-14-11',
    editalItemId: '14.2.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre diagnóstico de sockets TCP com "ss -s" ou "ss -tan" em servidores Linux, assinale a afirmação INCORRETA.',
    options: [
      'O estado SYN_RECV elevado pode indicar fila de conexões semiabertas (backlog) saturada ou SYN Flood.',
      'Milhares de sockets em LISTEN na porta 443 indicam ataque DDoS bem-sucedido esgotando o kernel.',
      'Sockets em TIME_WAIT aguardam expiração segura (2 MSL) após encerramento normal da sessão TCP.',
      'O comando "ss -tulnp" exibe sockets TCP/UDP em escuta junto aos respectivos PIDs e nomes de processo.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. análise de logs/diagnóstico de rede (Eixo 14. Troubleshooting). LISTEN representa apenas o socket do daemon web aguardando novas conexões na porta 443 (estado normal do serviço ativo), não um ataque nem múltiplas conexões abertas.',
    correctAnalysis:
      'A afirmação incorreta confunde estado LISTEN (porta passiva aguardando clientes) com saturação de sessões ou ataque (visível por explosão de SYN_RECV ou sockets ESTABLISHED anômalos).',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): acúmulo em SYN_RECV aponta handshake incompleto / backlog cheio.',
      2: 'Incorreta (afirmação verdadeira): TIME_WAIT evita que pacotes atrasados de sessões encerradas interfiram em novas.',
      3: 'Incorreta (afirmação verdadeira): ss -tulnp lista portas TCP/UDP em escuta e seus PIDs.'
    }
  },
  {
    id: 'sarah-14-12',
    editalItemId: '14.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre abordagens estruturadas de troubleshooting em redes, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Na abordagem Top-Down, inicia-se o diagnóstico na Camada de Aplicação (L7) descendo até a Física (L1).\n( ) Na abordagem Bottom-Up, verifica-se primeiro enlace físico e cabeamento (L1) subindo até a aplicação.\n( ) Na abordagem Divide-and-Conquer, o analista nunca realiza testes na Camada de Rede (L3), reiniciando direto o roteador.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. metodologia de diagnóstico (top-down, bottom-up, divide-and-conquer) (Eixo 14. Troubleshooting). Top-Down vai da L7 à L1 (V); Bottom-Up vai da L1 à L7 (V); Divide-and-Conquer justamente parte de camadas intermediárias como L3 (ping) para decidir subir ou descer (F).',
    correctAnalysis:
      'As duas primeiras afirmativas definem exatamente Top-Down e Bottom-Up; a terceira é falsa porque Divide-and-Conquer começa tipicamente testando a Camada 3 (ex.: ping/traceroute) para dividir o problema.',
    optionErrors: {
      0: 'Incorreta: Bottom-Up inicia de fato na camada Física e Divide-and-Conquer testa camadas intermediárias como L3.',
      1: 'Incorreta: Top-Down parte efetivamente da camada de Aplicação em direção à Física.',
      3: 'Incorreta: a terceira afirmativa é falsa.'
    }
  },

  // ==================== EIXO 15: 15. Alta disponibilidade e continuidade. (12 questões) ====================
  {
    id: 'sarah-43',
    editalItemId: '15.1.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na classificação de data centers (Uptime Institute) e redundância, relacione a coluna da esquerda com a da direita.\n\nColuna da Esquerda:\n(I) Tier I\n(II) Tier II\n(III) Tier III\n(IV) Tier IV\n(V) SPOF\n\nColuna da Direita:\n(A) Componente ou caminho único cuja falha isolada para todo o serviço.\n(B) Permite manutenção concorrente (múltiplos caminhos com um ativo) sem parada.\n(C) Infraestrutura básica de caminho único sem redundância (N), exige parada para manutenção.\n(D) Tolerante a falhas não planejadas (2N / 2N+1) com múltiplos caminhos ativos simultâneos.\n(E) Adiciona componentes redundantes (N+1) em um único caminho de distribuição.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-B, III-E, IV-D, V-A.',
      'I-E, II-C, III-B, IV-D, V-A.',
      'I-C, II-E, III-B, IV-D, V-A.',
      'I-C, II-E, III-D, IV-B, V-A.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1. Tecnologias, arquitetura e gestão de data center e 1.2. Redundância e tolerância a falhas (Eixo 15). Tier I (C), Tier II (E), Tier III (B), Tier IV (D) e SPOF (A).',
    correctAnalysis:
      'Associação exata: Tier I -> sem redundância/N (C); Tier II -> componentes N+1 em caminho único (E); Tier III -> manutenção concorrente (B); Tier IV -> tolerante a falhas/2N+1 ativo (D); SPOF -> ponto único de falha (A).',
    optionErrors: {
      0: 'Incorreta: inverte as características do Tier II com o Tier III.',
      1: 'Incorreta: atribui capacidade redundante N+1 ao Tier I.',
      3: 'Incorreta: inverte Tier III (manutenção concorrente) com Tier IV (tolerância a falhas).'
    }
  },
  {
    id: 'sarah-44',
    editalItemId: '15.2.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em um cluster HA de dois nós usando LUN compartilhada, o link de heartbeat caiu sem quórum/fencing. Qual risco crítico ocorre?',
    options: [
      'Deduplicação automática da LUN preservando gravações concorrentes.',
      'Split-brain: ambos assumem papel ativo e corrompem a LUN.',
      'Conversão automática para failover passivo com RPO zero garantido.',
      'Desativação imediata do multipath MPIO nos switches FC.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. clusters, redundância, failover, HA (Eixo 15. Alta disponibilidade e continuidade).',
    correctAnalysis:
      'Sem heartbeat e sem quórum/fencing (STONITH), ambos os nós julgam o parceiro fora e montam/gravam na mesma LUN simultaneamente (split-brain), corrompendo os dados.',
    optionErrors: {
      0: 'Incorreta: falha de heartbeat nunca aciona deduplicação nem evita corrupção concorrente.',
      2: 'Incorreta: split-brain provoca perda e corrupção severa de dados, o oposto de RPO zero.',
      3: 'Incorreta: MPIO gerencia múltiplos caminhos de storage até a LUN e não desliga por perda de heartbeat.'
    }
  },
  {
    id: 'sarah-45',
    editalItemId: '15.2.7',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre sites de contingência para Disaster Recovery (DR), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O Hot Site mantém infraestrutura completa ligada e replicação contínua, entregando menor RTO com maior custo.\n( ) O Warm Site tem energia, rede e equipamentos pré-instalados, exigindo sincronização/restauração final.\n( ) O Cold Site garante RPO zero e failover instantâneo sem instalar servidores ou restaurar backups.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – V.',
      'V – V – F.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Disaster Recovery, RPO, RTO e testes de recuperação (Eixo 15. Alta disponibilidade e continuidade). Hot Site (V), Warm Site (V), Cold Site (F — tem apenas espaço físico/infra predial básica, sem RPO zero).',
    correctAnalysis:
      'As duas primeiras afirmativas definem exatamente Hot Site e Warm Site; a terceira é falsa porque o Cold Site dispõe apenas de infraestrutura predial básica, exigindo horas/dias para provisionar servidores e restaurar backups.',
    optionErrors: {
      0: 'Incorreta: Warm Site possui sim equipamentos pré-instalados e Cold Site não tem RPO zero.',
      1: 'Incorreta: a definição de Hot Site apresentada na primeira afirmativa é verdadeira.',
      2: 'Incorreta: a terceira afirmativa confunde Cold Site com Hot Site síncrono.'
    }
  },
  {
    id: 'sarah-15-04',
    editalItemId: '15.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual notação de redundância representa um rack alimentado por duas cadeias elétricas independentes completas (vias A e B)?',
    options: [
      '2N (duas cadeias independentes A e B, eliminando SPOFs).',
      'N (capacidade exata necessária sem componentes reserva).',
      'N+1 (apenas um módulo reserva em um único barramento).',
      'N-1 (capacidade propositalmente inferior à carga nominal).'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.2. Redundância e tolerância a falhas (Eixo 15). 2N duplica integralmente os sistemas e caminhos de alimentação (via A e via B), eliminando SPOFs.',
    correctAnalysis:
      'Na topologia 2N, existem dois sistemas completos e independentes capazes de assumir 100% da carga cada um, alimentando cargas dual-source pelas vias A e B.',
    optionErrors: {
      1: 'Incorreta: topologia N possui apenas a capacidade básica sem redundância.',
      2: 'Incorreta: N+1 adiciona um módulo reserva no mesmo barramento, não duas cadeias completas.',
      3: 'Incorreta: N-1 significa capacidade insuficiente para suportar a carga nominal.'
    }
  },
  {
    id: 'sarah-15-05',
    editalItemId: '15.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre eliminação de Pontos Únicos de Falha (SPOF) entre servidor e storage SAN, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Fontes redundantes (Dual PSU) ligadas a circuitos e nobreaks distintos (A e B) eliminam SPOF elétrico.\n( ) Ligar duas placas de rede em LACP exatamente no mesmo switch único elimina completamente o SPOF de acesso.\n( ) Duas HBAs conectadas a dois switches FC distintos com MPIO e storage duplo ativo-ativo evitam SPOF de I/O.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – V.',
      'V – F – V.',
      'V – F – F.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. redundância (Eixo 15. Alta disponibilidade e continuidade). Dual PSU em vias A/B (V); duas portas no mesmo switch mantêm o próprio switch como SPOF (F); dual HBA + dois switches + storage duplo eliminam SPOF (V).',
    correctAnalysis:
      'Eliminar SPOFs exige redundância em todo o trajeto sem compartilhar o mesmo componente único (como um único switch ou único circuito elétrico).',
    optionErrors: {
      0: 'Incorreta: ligar duas portas no mesmo switch mantém esse switch como ponto único de falha.',
      1: 'Incorreta: dual PSU em circuitos independentes A e B elimina efetivamente o SPOF elétrico.',
      3: 'Incorreta: a terceira afirmativa descreve corretamente a eliminação de SPOF no fabric SAN.'
    }
  },
  {
    id: 'sarah-15-06',
    editalItemId: '15.2.3',
    format: 'multipla_escolha',
    questionPattern: 'lacunas',
    style: 'lacunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Leia sobre eventos em um cluster de alta disponibilidade:\n\n"Na queda do site principal, o processo de ________ assumiu o site secundário; depois de reparado e ressincronizado o primário, executou-se o ________ para retornar à origem. Sem quórum nem fencing após queda do heartbeat, ocorre gravação concorrente perigosa denominada ________."\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.',
    options: [
      'Failback; Failover; Split-brain.',
      'Failover; Failback; Split-brain.',
      'Fencing; Snapshot; Throughput.',
      'Failover; Deduplicação; SPOF.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. failover (automático, manual, failback) e 2.1. clusters (split-brain) (Eixo 15. Alta disponibilidade e continuidade).',
    correctAnalysis:
      'Failover move o serviço à contingência; Failback retorna controladamente ao ambiente primário reparado; Split-brain designa múltiplos nós operando como ativos sem coordenação.',
    optionErrors: {
      0: 'Incorreta: inverte a ordem entre Failover (ida à contingência) e Failback (retorno ao primário).',
      2: 'Incorreta: Fencing isola nós contra split-brain, não é a transferência inicial de serviço.',
      3: 'Incorreta: deduplicação e SPOF não preenchem o retorno nem o conflito de heartbeat.'
    }
  },
  {
    id: 'sarah-15-07',
    editalItemId: '15.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Em 1 ano (525.600 minutos), qual é o downtime máximo aproximado tolerado pelo SLA "cinco noves" (99,999%)?',
    options: [
      'Cerca de 8 horas e 46 minutos por ano.',
      'Cerca de 52 minutos e 34 segundos por ano.',
      'Cerca de 3 dias e 15 horas por ano.',
      'Cerca de 5 minutos e 15 segundos por ano.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. HA (99,9%, 99,99%, 99,999%) (Eixo 15. Alta disponibilidade e continuidade). 0,001% de 525.600 min = 5,256 min (~5 min 15 s).',
    correctAnalysis:
      'Em 1 ano (525.600 min): 99,9% tolera ~8h46m; 99,99% tolera ~52 min 34 s; e 99,999% ("cinco noves") tolera apenas 0,001%, ou ~5 minutos e 15 segundos anuais.',
    optionErrors: {
      0: 'Incorreta: ~8 horas e 46 minutos por ano corresponde a 99,9% ("três noves").',
      1: 'Incorreta: ~52 minutos e 34 segundos (52,56 min) corresponde a 99,99% ("quatro noves").',
      2: 'Incorreta: ~3 dias e 15 horas corresponde a 99% ("dois noves").'
    }
  },
  {
    id: 'sarah-15-08',
    editalItemId: '15.2.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual técnica de replicação entre dois data centers (< 5 ms RTT) garante obrigatoriamente RPO igual a zero?',
    options: [
      'Replicação síncrona aguardando gravação confirmada nos dois sites.',
      'Backup incremental diário em fita LTO enviada por transporte às 23h.',
      'Replicação assíncrona via snapshots agendados a cada 15 minutos.',
      'Sincronização agendada via rsync executada no cron a cada 1 hora.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. RPO (Eixo 15. Alta disponibilidade e continuidade). RPO = 0 exige replicação síncrona para garantir que nenhuma transação confirmada seja perdida.',
    correctAnalysis:
      'Para assegurar RPO zero (zero perda de transações confirmadas), o commit de escrita só retorna ao aplicativo depois que ambos os sites confirmam a gravação.',
    optionErrors: {
      1: 'Incorreta: backup diário em fita resulta em RPO de até 24 horas.',
      2: 'Incorreta: replicação assíncrona de 15 em 15 minutos acarreta RPO de até 15 minutos.',
      3: 'Incorreta: rsync agendado de hora em hora resulta em RPO de até 1 hora.'
    }
  },
  {
    id: 'sarah-15-09',
    editalItemId: '15.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual medida reduz diretamente o RTO (tempo até retomar operação) após desastre sem alterar por si só o RPO?',
    options: [
      'Aumentar frequência dos snapshots de 4 horas para 15 minutos.',
      'Reduzir o prazo legal de retenção de logs de 5 anos para 7 dias.',
      'Automatizar runbooks de failover, usar Hot/Warm Site e DNS rápido.',
      'Aumentar a taxa de compactação de backups antigos em fitas LTO.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. RTO (Eixo 15. Alta disponibilidade e continuidade). RTO mede o tempo decorrido até o restabelecimento operacional do serviço.',
    correctAnalysis:
      'Enquanto o RPO depende da frequência de captura/replicação dos dados, o RTO cai por mecanismos que aceleram a recuperação no ar (runbooks automatizados, Hot/Warm Site, BGP/DNS ágil).',
    optionErrors: {
      0: 'Incorreta: aumentar frequência de snapshots reduz o RPO, mas não acelera necessariamente o tempo de retorno (RTO).',
      1: 'Incorreta: retenção de logs trata de auditoria e não acelera recuperação operacional.',
      3: 'Incorreta: maior compressão em fita offline tende a desacelerar a restauração.'
    }
  },
  {
    id: 'sarah-15-10',
    editalItemId: '15.2.8',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre testes de Disaster Recovery e Planos de Continuidade (DRP/PCN), assinale a afirmativa INCORRETA.',
    options: [
      'O exercício Tabletop simula decisões em equipe para validar papéis e contatos sem tocar produção.',
      'Após aprovado na implantação inicial, o plano de DR dispensa novos testes mesmo que mude a topologia.',
      'Testes paralelos ou de failover programado aferem na prática scripts, DNS, acessos e metas de RTO/RPO.',
      'Mudanças críticas de rede, sistemas ou certificados exigem revalidação periódica dos planos de DR.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. testes de recuperação (tabletop, simulação, failover programado) (Eixo 15. Alta disponibilidade e continuidade). Planos sem testes recorrentes tornam-se obsoletos após mudanças de infraestrutura.',
    correctAnalysis:
      'A afirmação incorreta dispensa testes periódicos: alterações de IPs, credenciais, aplicações e certificados invalidam rapidamente planos de DR não retestados.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): testes tabletop validam procedimentos e responsabilidades em reunião.',
      2: 'Incorreta (afirmação verdadeira): testes paralelos e failovers programados medem RTO/RPO reais.',
      3: 'Incorreta (afirmação verdadeira): ciclos de testes contínuos mantêm o PCN alinhado ao ambiente vivo.'
    }
  },
  {
    id: 'sarah-15-11',
    editalItemId: '15.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Um servidor apresenta MTBF de 990 horas e MTTR de 10 horas. Qual é sua disponibilidade percentual aproximada?',
    options: [
      '99,0% de disponibilidade.',
      '98,0% de disponibilidade.',
      '99,9% de disponibilidade.',
      '90,0% de disponibilidade.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. HA e métricas de confiabilidade (Eixo 15). Disponibilidade = MTBF / (MTBF + MTTR) = 990 / (990 + 10) = 990 / 1000 = 0,99 = 99,0%.',
    correctAnalysis:
      'Aplicando a fórmula Disponibilidade = MTBF / (MTBF + MTTR), dividimos 990 horas operacionais por 1.000 horas totais (990 + 10), resultando exatamente em 99,0%.',
    optionErrors: {
      1: 'Incorreta: 98,0% resultaria se o MTTR fosse ~20 horas em 1.000 horas totais.',
      2: 'Incorreta: 99,9% exigiria MTTR aproximado de 1 hora para MTBF de 999 horas.',
      3: 'Incorreta: 90,0% ocorreria apenas se MTTR fosse ~110 horas para MTBF de 990 horas.'
    }
  },
  {
    id: 'sarah-15-12',
    editalItemId: '15.1.1',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os níveis Tier I a Tier IV de infraestrutura de data centers (Uptime Institute), assinale a afirmação INCORRETA.',
    options: [
      'O Tier I possui caminho único sem componentes redundantes (N) e exige desligamento para manutenções.',
      'O Tier II adiciona componentes redundantes (N+1) mantendo ainda um único caminho de distribuição.',
      'O Tier III permite manutenção concorrente com múltiplos caminhos de distribuição e ao menos um ativo.',
      'O Tier IV dispensa compartimentação física e garante apenas 99,0% de disponibilidade por caminho único.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Tecnologias e gestão de data center (Eixo 15). O Tier IV é Fault Tolerant (tolerante a falhas, 2N / 2N+1 com múltiplos caminhos ativos e compartimentação física rígida), entregando ~99,995% de disponibilidade de referência.',
    correctAnalysis:
      'A afirmação incorreta atribui caminho único e 99,0% ao Tier IV, quando este representa justamente o maior nível de tolerância a falhas com compartimentação física e caminhos ativos redundantes.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Tier I caracteriza infraestrutura básica N de caminho único.',
      1: 'Incorreta (afirmação verdadeira): Tier II acrescenta componentes N+1 em caminho único.',
      2: 'Incorreta (afirmação verdadeira): Tier III é o nível de manutenção concorrente (concurrently maintainable).'
    }
  },

  // ==================== EIXO 16: 16. Gestão e governança de TI. (12 questões) ====================
  {
    id: 'sarah-46',
    editalItemId: '16.2.1',
    format: 'multipla_escolha',
    questionPattern: 'colunas',
    style: 'colunas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre governança e gestão de TI, relacione frameworks e acordos à esquerda com suas definições à direita.\n\nColuna da Esquerda:\n(I) COBIT 2019\n(II) ISO/IEC 38500\n(III) ITIL 4\n(IV) OLA\n(V) UC\n\nColuna da Direita:\n(A) Acordo interno entre equipes da organização para sustentar um SLA.\n(B) Estrutura 40 objetivos em 1 domínio EDM e 4 de Gestão (APO, BAI, DSS, MEA).\n(C) Norma de Governança Corporativa de TI baseada no modelo EDM.\n(D) Contrato formal firmado com fornecedor externo de apoio à entrega de TI.\n(E) Organiza a gestão de serviços pelo SVS, 4 dimensões e 34 práticas.\n\nAssinale a alternativa que contém a associação correta.',
    options: [
      'I-C, II-B, III-E, IV-A, V-D.',
      'I-B, II-E, III-C, IV-D, V-A.',
      'I-B, II-C, III-A, IV-E, V-D.',
      'I-B, II-C, III-E, IV-A, V-D.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. COBIT 2019; ISO/IEC 38500; ITIL 4 e Item 1.2. acordos de nível de serviço (SLA e OLA) (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'Associação exata: (I) COBIT 2019 -> 40 objetivos EDM + APO/BAI/DSS/MEA (B); (II) ISO/IEC 38500 -> modelo EDM (C); (III) ITIL 4 -> SVS e 34 práticas (E); (IV) OLA -> acordo interno (A); (V) UC -> contrato externo (D).',
    optionErrors: {
      0: 'Incorreta: inverte COBIT 2019 com ISO/IEC 38500.',
      1: 'Incorreta: troca ISO 38500 com ITIL 4 e OLA com UC.',
      2: 'Incorreta: atribui acordo interno OLA à ITIL 4 e vice-versa.'
    }
  },
  {
    id: 'sarah-47',
    editalItemId: '16.2.15',
    format: 'multipla_escolha',
    questionPattern: 'afirmativas',
    style: 'afirmativas',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'À luz da LGPD (Lei nº 13.709/2018) e da LAI (Lei nº 12.527/2011), considere as afirmativas:\n\nI. Na LGPD, o Controlador decide sobre o tratamento dos dados e o Operador trata em nome dele.\nII. Dados referentes à saúde e dados biométricos são classificados na LGPD como dados sensíveis.\nIII. Na LAI, não sendo possível acesso imediato, há prazo de até 20 dias prorrogáveis por mais 10.\nIV. Na LGPD, o consentimento prévio é a única base legal permitida para tratar dados no poder público.\n\nAssinale a alternativa correta.',
    options: [
      'Somente I, II e III estão corretas.',
      'Somente I, II e IV estão corretas.',
      'Somente I, III e IV estão corretas.',
      'Somente II, III e IV estão corretas.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. Lei nº 12.527/2011 (LAI) e Lei nº 13.709/2018 (LGPD) (Eixo 16). I, II e III estão corretas; IV é falsa porque a LGPD traz outras bases legais (obrigação legal, políticas públicas, tutela da saúde etc.).',
    correctAnalysis:
      'As afirmativas I, II e III reproduzem fielmente Controlador/Operador, dados sensíveis na LGPD e prazo de 20+10 dias na LAI; a IV é falsa porque há diversas hipóteses legais além do consentimento.',
    optionErrors: {
      1: 'Incorreta: inclui IV (consentimento é apenas uma das bases legais do art. 7º/11 da LGPD) e omite III.',
      2: 'Incorreta: inclui IV (falsa) e omite II (verdadeira).',
      3: 'Incorreta: omite I (verdadeira) e inclui IV (falsa).'
    }
  },
  {
    id: 'sarah-48',
    editalItemId: '16.2.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Quais são as seis funções centrais do NIST Cybersecurity Framework (CSF 2.0) para gestão de riscos cibernéticos?',
    options: [
      'Plan, Do, Check, Act, Audit e Report continuamente.',
      'EDM, APO, BAI, DSS, MEA e Governance Framework.',
      'Govern, Identify, Protect, Detect, Respond e Recover.',
      'Prevent, Monitor, Contain, Eradicate, Recover e Close.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. NIST Cybersecurity Framework (Eixo 16. Gestão e governança de TI). O NIST CSF 2.0 acrescentou a função transversal Govern às cinco funções originais (Identify, Protect, Detect, Respond e Recover).',
    correctAnalysis:
      'As seis funções centrais do NIST CSF 2.0 formam o núcleo estratégico e operacional: Govern (nova função central), Identify, Protect, Detect, Respond e Recover.',
    optionErrors: {
      0: 'Incorreta: Plan, Do, Check, Act correspondem ao ciclo PDCA de Deming, não ao NIST CSF.',
      1: 'Incorreta: EDM, APO, BAI, DSS e MEA são os cinco domínios do COBIT 2019.',
      3: 'Incorreta: preparação, contenção, erradicação e recuperação refletem etapas do guia NIST SP 800-61 de resposta a incidentes.'
    }
  },
  {
    id: 'sarah-16-04',
    editalItemId: '16.1.3',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na ITIL 4, uma rotina pré-aprovada de baixo risco e uma correção urgente para parada crítica classificam-se respectivamente como:',
    options: [
      'Mudança Normal (via CAB) e Mudança Padrão pré-aprovada.',
      'Mudança Padrão (baixo risco) e Mudança Emergencial (ECAB).',
      'Solicitação de Serviço simples e Incidente Grave sem registro.',
      'Mudança Emergencial rotineira e Erro Conhecido de problema.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.3. Gerenciamento de incidentes, problemas e mudanças (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'Na ITIL 4, mudanças Padrão são pré-autorizadas por seguirem rito conhecido de baixo risco, enquanto mudanças Emergenciais seguem avaliação acelerada (ECAB) diante de urgência crítica.',
    optionErrors: {
      0: 'Incorreta: rotinas pré-aprovadas de baixo risco não exigem CAB toda semana (são Padrão).',
      2: 'Incorreta: atualização controlada e correção emergencial são Mudanças que exigem registro.',
      3: 'Incorreta: os tipos foram trocados e Erro Conhecido pertence a Problemas.'
    }
  },
  {
    id: 'sarah-16-05',
    editalItemId: '16.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre tratamento de riscos segundo a ISO 31000, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Contratar seguro ou terceirizar impactos contratuais caracteriza compartilhamento/transferência de risco.\n( ) Desligar permanentemente um protocolo vulnerável (SMBv1) caracteriza a opção "aceitar/reter o risco".\n( ) O risco que permanece após as ações de tratamento e controles implementados chama-se risco residual.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'F – F – V.',
      'V – F – F.',
      'V – F – V.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.4. Identificação, análise, avaliação e tratamento de riscos e Item 2. ISO 31000 (Eixo 16). Transferência (V), remoção da fonte = evitar e não aceitar (F), risco residual (V).',
    correctAnalysis:
      'A primeira (seguro/contrato = compartilhar) e a terceira (risco residual) são verdadeiras; a segunda é falsa porque remover a fonte do risco caracteriza "evitar o risco".',
    optionErrors: {
      0: 'Incorreta: desligar a fonte do risco é "evitar" (não "aceitar") e risco residual é verdadeiro.',
      1: 'Incorreta: a primeira afirmativa descreve corretamente o compartilhamento de risco.',
      2: 'Incorreta: a terceira afirmativa define corretamente risco residual.'
    }
  },
  {
    id: 'sarah-16-06',
    editalItemId: '16.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual distinção operacional diferencia corretamente os frameworks ágeis Scrum e Kanban?',
    options: [
      'Scrum usa Sprints time-boxed com PO; Kanban foca fluxo, limite WIP e lead time.',
      'No Scrum, o Scrum Master prioriza o backlog e o Kanban exige Sprints de 4 semanas.',
      'O PMBOK 7ª edição proíbe Scrum e Kanban nos 8 domínios de desempenho.',
      'No Kanban, o papel do Scrum Master é obrigatório e não se mede lead time.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.5 e Item 2. PMBOK 7ª edição; Scrum e Kanban (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'Scrum estrutura-se em Sprints time-boxed com papéis (PO, Scrum Master, Developers); Kanban otimiza fluxo contínuo mediante limites de WIP e métricas como lead time.',
    optionErrors: {
      1: 'Incorreta: quem prioriza o Product Backlog é o Product Owner, e Kanban não exige Sprints fixas.',
      2: 'Incorreta: o PMBOK 7ª edição é agnóstico e abrange abordagens preditivas, híbridas e ágeis.',
      3: 'Incorreta: Kanban não prescreve Scrum Master obrigatório e baseia-se fortemente em lead time/throughput.'
    }
  },
  {
    id: 'sarah-16-07',
    editalItemId: '16.2.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Quais são as quatro perspectivas clássicas do Balanced Scorecard (BSC) no alinhamento do PETI/PDTI?',
    options: [
      'Hardware, Software, Rede de Dados, Processos e Pessoas.',
      'EDM, APO, BAI e DSS (domínios de governança e gestão).',
      'Financeira, Clientes, Processos Internos e Aprendizado e Crescimento.',
      'Níveis Estratégico, Tático, Operacional e Suporte Técnico.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. PETI e PDTI; KPIs e BSC (Eixo 16. Gestão e governança de TI). O Balanced Scorecard de Kaplan e Norton equilibra objetivos em 4 perspectivas: Financeira, Clientes, Processos Internos, e Aprendizado e Crescimento.',
    correctAnalysis:
      'O BSC traduz a estratégia organizacional e de TI em indicadores equilibrados nessas quatro dimensões clássicas, evitando focar apenas em resultados financeiros de curto prazo.',
    optionErrors: {
      0: 'Incorreta: hardware, software, rede, processos e pessoas remetem a componentes técnicos, não às perspectivas do BSC.',
      1: 'Incorreta: EDM, APO, BAI e DSS são os domínios de governança e gestão do COBIT.',
      3: 'Incorreta: estratégico, tático e operacional são níveis decisórios organizacionais.'
    }
  },
  {
    id: 'sarah-16-08',
    editalItemId: '16.1.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Nas contratações públicas de TI, qual sequência de artefatos e fiscalização atende à legislação vigente?',
    options: [
      'Planejamento com ETP e TR com requisitos/SLAs; execução com Gestor e Fiscal Técnico.',
      'Assinatura prévia do contrato e elaboração do ETP após o recebimento definitivo.',
      'Proibição do Fiscal Técnico aferir SLAs ou apontar glosas por indisponibilidade.',
      'Termo de Referência fixando marca exclusiva sem justificativa nem padronização.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.8. Planejamento, gestão e fiscalização de contratações de TI no setor público (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'As contratações públicas de TI iniciam na fase preparatória (ETP e Termo de Referência com SLAs) e seguem com fiscalização segregada (Gestor, Fiscal Técnico etc.).',
    optionErrors: {
      1: 'Incorreta: ETP e TR pertencem à fase preparatória (antes da licitação e da assinatura).',
      2: 'Incorreta: aferir SLAs e propor glosas é atribuição essencial da fiscalização técnica.',
      3: 'Incorreta: indicação de marca sem justificativa técnica excepcional fere a competitividade.'
    }
  },
  {
    id: 'sarah-16-09',
    editalItemId: '16.2.5',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os frameworks de controles internos e riscos COSO IC e COSO ERM 2017, assinale a afirmação INCORRETA.',
    options: [
      'As três categorias de objetivos do Cubo COSO IC são Operacional, Divulgação (Reporting) e Conformidade.',
      'Os cinco componentes do Cubo COSO são Identify, Protect, Detect, Respond e Recover do NIST CSF.',
      'O COSO ERM 2017 integra 5 componentes e 20 princípios, começando por Governança e Cultura.',
      'O Cubo COSO IC relaciona objetivos, cinco componentes de controle e estrutura da organização.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. COSO (Eixo 16. Gestão e governança de TI). Identify, Protect, Detect, Respond e Recover pertencem ao NIST CSF; os cinco componentes do COSO IC são Ambiente de Controle, Avaliação de Riscos, Atividades de Controle, Informação e Comunicação, e Monitoramento (e no COSO ERM 2017: Governança e Cultura; Estratégia e Definição de Objetivos; Performance; Análise e Revisão; Informação, Comunicação e Divulgação).',
    correctAnalysis:
      'A afirmação incorreta confunde COSO com NIST CSF: as cinco funções citadas pertencem ao NIST Cybersecurity Framework, não ao Cubo COSO.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Operacional, Reporting e Compliance formam as três categorias do COSO IC.',
      2: 'Incorreta (afirmação verdadeira): o COSO ERM 2017 organiza-se exatamente em 5 componentes e 20 princípios.',
      3: 'Incorreta (afirmação verdadeira): a terceira dimensão do cubo representa os níveis organizacionais.'
    }
  },
  {
    id: 'sarah-16-10',
    editalItemId: '16.2.13',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na "Roda DAMA" do framework DAMA-DMBoK, qual é a posição da Governança de Dados e seu alcance?',
    options: [
      'Fica isolada do ciclo de vida, restrita à modelagem relacional SQL.',
      'Subordina Qualidade e Metadados ao gerenciamento de incidentes ITIL.',
      'Preconiza reter cópias duplicadas indefinidamente sem descarte.',
      'Situa-se no centro guiando as 10 áreas e todo o ciclo até o descarte.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.12. Governança, qualidade e ciclo de vida dos dados e Item 2. DAMA-DMBoK (Eixo 16. Gestão e governança de TI).',
    correctAnalysis:
      'Na Roda do DAMA-DMBoK2, a Governança de Dados ocupa o núcleo central guiando as demais 10 áreas de conhecimento em todo o ciclo de vida (da criação ao descarte seguro).',
    optionErrors: {
      0: 'Incorreta: a Governança orienta transversalmente todas as demais 10 áreas e todo o ciclo de vida.',
      1: 'Incorreta: DAMA-DMBoK é o corpo de conhecimento próprio de dados, não subordinado à ITIL.',
      2: 'Incorreta: reter tudo sem descarte viola gestão do ciclo de vida, custos e LGPD.'
    }
  },
  {
    id: 'sarah-16-11',
    editalItemId: '16.2.9',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre melhoria contínua, modelagem de processos e BIA, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O ciclo PDCA percorre quatro etapas iterativas contínuas: Plan, Do, Check e Act.\n( ) A Análise de Impacto no Negócio (BIA) substitui a gestão de riscos eliminando a norma ISO 27001.\n( ) A notação BPMN padroniza fluxogramas de processos de negócio para análise As-Is e desenho To-Be.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – F – V.',
      'V – F – F.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. BPMN, ciclo PDCA e Item 1.9. BIA (Eixo 16). PDCA = Plan, Do, Check, Act (V); BIA identifica processos críticos, MTPD, RTO e RPO sem substituir a ISO 27001/31000 (F); BPMN modela processos As-Is/To-Be (V).',
    correctAnalysis:
      'PDCA e BPMN estão corretamente descritos na primeira e terceira afirmativas; a segunda é falsa porque a BIA integra a continuidade (ISO 22301) e complementa a gestão de riscos sem substituir o SGSI.',
    optionErrors: {
      0: 'Incorreta: a BIA não substitui a gestão de riscos nem elimina a ISO 27001, e BPMN modela As-Is/To-Be.',
      2: 'Incorreta: as quatro etapas do PDCA são efetivamente Plan, Do, Check e Act.',
      3: 'Incorreta: a terceira afirmativa descreve corretamente a notação BPMN.'
    }
  },
  {
    id: 'sarah-16-12',
    editalItemId: '16.2.15',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Avancada',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Considerando a LGPD (Lei nº 13.709/2018) e o regime jurídico da Associação das Pioneiras Sociais (APS), assinale a afirmação INCORRETA.',
    options: [
      'A APS (Rede SARAH) é pessoa jurídica de direito privado sem fins lucrativos (serviço social autônomo).',
      'Órgãos e entidades integrantes do Poder Público não sofrem sanção de multa pecuniária da ANPD (art. 52, §3º).',
      'Por prestar serviço de interesse público, a APS é órgão da Administração Direta isento de multas da ANPD.',
      'Dados pessoais de saúde exigem medidas técnicas e organizativas reforçadas como dados pessoais sensíveis.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Lei nº 13.709/2018 (LGPD) e natureza jurídica da APS (Eixo 16). A APS é pessoa jurídica de direito privado sem fins lucrativos (serviço social autônomo), não integrando a Administração Pública; portanto, a isenção de multa do art. 52, §3º NÃO se aplica a ela.',
    correctAnalysis:
      'A afirmação incorreta classifica a APS como órgão público isento de multa pela ANPD: trata-se de serviço social autônomo de direito privado, sujeito integralmente às sanções administrativas previstas na LGPD.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): define fielmente a natureza jurídica da APS prevista em lei e no edital.',
      1: 'Incorreta (afirmação verdadeira): o art. 52, §3º da LGPD exclui multas pecuniárias ao Poder Público (mantendo demais sanções).',
      3: 'Incorreta (afirmação verdadeira): saúde é dado sensível (art. 5º, II) sob proteção rigorosa (art. 11 e 46).'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 13 (+9) ====================
  {
    id: 'sarah-13-13',
    editalItemId: '13.2.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Por que métodos MFA baseados em FIDO2/WebAuthn (passkeys ou chaves físicas) são classificados como resistentes a phishing (phishing-resistant)?',
    options: [
      'A assinatura assimétrica vincula criptograficamente o desafio à origem exata do domínio legítimo.',
      'Os códigos de 6 dígitos são enviados por SMS criptografado diretamente pela operadora móvel.',
      'O usuário digita manualmente uma senha longa de 16 caracteres sem certificado nem origem.',
      'A autenticação dispensa sincronização de domínio DNS validando apenas o endereço IP local.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. MFA (Eixo 13. Segurança). Tokens FIDO2/WebAuthn realizam Origin Binding: o navegador envia a origem exata (domínio TLS) ao autenticador, que só assina o desafio se a origem coincidir com a credencial registrada — bloqueando proxies reversos AiTM.',
    correctAnalysis:
      'A vinculação criptográfica à origem (Origin Binding) garante que o autenticador FIDO2 recuse assinar o desafio quando o usuário acessa um domínio falso de phishing.',
    optionErrors: {
      1: 'Incorreta: SMS é vulnerável a interceptação SS7 e ataques de SIM Swapping.',
      2: 'Incorreta: senhas estáticas sem segundo fator ou vinculação de origem são facilmente capturadas em phishing.',
      3: 'Incorreta: WebAuthn valida justamente o domínio/RP ID legítimo no navegador/SO, não IP local.'
    }
  },
  {
    id: 'sarah-13-14',
    editalItemId: '13.2.4',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre métodos e proteção de autenticação multifator (MFA), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) O algoritmo TOTP (RFC 6238) gera códigos temporários a partir de uma chave secreta e do horário atual, exigindo NTP sincronizado.\n( ) O recurso Number Matching mitiga ataques de fadiga de MFA (Prompt Bombing) em notificações push.\n( ) O uso de SMS como único segundo fator oferece proteção superior ao FIDO2 contra ataques de SIM Swapping.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. MFA (Eixo 13. Segurança). TOTP depende de segredo compartilhado + janela de 30 s sincronizada por NTP (V); Number Matching obriga conferir e digitar o código exibido na tela de login contra aprovações cegas (V); SMS é o método mais frágil frente a SIM Swapping (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque o SMS é altamente vulnerável a SIM Swapping, sendo inferior a TOTP e FIDO2.',
    optionErrors: {
      0: 'Incorreta: Number Matching é exatamente a contramedida recomendada para fadiga de push MFA.',
      2: 'Incorreta: TOTP utiliza timestamp atual em intervalos de 30 segundos, requerendo relógio sincronizado.',
      3: 'Incorreta: SMS não supera FIDO2 nem resiste a SIM Swapping.'
    }
  },
  {
    id: 'sarah-13-15',
    editalItemId: '13.2.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual problema específico a microssegmentação resolve que a segmentação tradicional apenas por VLANs de perímetro não bloqueia sozinha?',
    options: [
      'Traduzir IPs privados em IPs públicos na saída para a internet.',
      'Renovar certificados TLS expirados nos portais web da DMZ.',
      'Filtrar tráfego Leste-Oeste na mesma sub-rede contra avanço lateral.',
      'Elevar o clock das CPUs nos hosts físicos do cluster ESXi.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. segmentação (Eixo 13. Segurança). Firewalls de perímetro controlam tráfego Norte-Sul (entrada/saída de VLANs), mas máquinas na mesma VLAN falam diretamente em L2; a microssegmentação aplica políticas por workload (VM/host/container) barrando movimentação lateral Leste-Oeste.',
    correctAnalysis:
      'A microssegmentação isola cargas de trabalho individuais e filtra conexões Leste-Oeste dentro da mesma sub-rede, freando worms e ransomware.',
    optionErrors: {
      0: 'Incorreta: tradução de endereços IP privados para públicos é função de SNAT/PAT no gateway.',
      1: 'Incorreta: gestão e renovação de certificados pertencem à PKI/ACME, não à microssegmentação.',
      3: 'Incorreta: segmentação de rede é controle de segurança e tráfego, sem efeito sobre frequência de CPU.'
    }
  },
  {
    id: 'sarah-13-16',
    editalItemId: '13.2.7',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os princípios da arquitetura Zero Trust (NIST SP 800-207), assinale a afirmação INCORRETA.',
    options: [
      'Nenhuma conexão recebe confiança implícita apenas pela localização física na LAN ou conexão na VPN.',
      'O acesso é concedido por sessão/aplicação seguindo menor privilégio após verificar identidade e postura do dispositivo.',
      'Monitoramento contínuo reavalia sinais de risco podendo revogar ou restringir sessões já autenticadas.',
      'Após autenticar na VPN corporativa, a estação deve receber acesso irrestrito a toda a rede interna até o logoff.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. segmentação e Zero Trust (Eixo 13. Segurança). O lema central do Zero Trust é "Never Trust, Always Verify": abandonar o modelo tradicional de perímetro onde estar na LAN ou conectado na VPN dava acesso amplo irrestrito à rede inteira.',
    correctAnalysis:
      'A afirmação incorreta reproduz justamente o modelo legado "castelo e fosso" (confiança implícita na VPN), que a arquitetura Zero Trust visa eliminar.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): localização de rede não confere confiança automática no Zero Trust.',
      1: 'Incorreta (afirmação verdadeira): políticas dinâmicas avaliam usuário, dispositivo e contexto por recurso.',
      2: 'Incorreta (afirmação verdadeira): avaliação contínua garante resposta rápida caso a postura degrade.'
    }
  },
  {
    id: 'sarah-13-17',
    editalItemId: '13.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual conjunto de práticas representa efetivamente a Segurança Operacional (OPSEC) contínua na rotina de infraestrutura de TI?',
    options: [
      'Monitoramento contínuo de logs, auditoria de acessos privilegiados, revisão de mudanças e gestão de patches.',
      'Instalar o firewall uma única vez na inauguração e desabilitar logs para economizar espaço em disco.',
      'Compartilhar a mesma senha de administrador entre plantonistas em arquivo texto na pasta pública.',
      'Executar varreduras de vulnerabilidade apenas após a ocorrência de um incidente de parada grave.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. segurança operacional (Eixo 13. Segurança). OPSEC sustenta a postura de segurança no dia a dia: correlação contínua em SIEM/EDR, auditoria periódica de contas privilegiadas, controle de configuração, proteção de segredos e aplicação disciplinada de correções.',
    correctAnalysis:
      'Segurança operacional exige rotinas contínuas de monitoramento, auditoria, patching e governança de acessos — nunca controles estáticos pontuais.',
    optionErrors: {
      1: 'Incorreta: desligar logs e não revisar regras cria cegueira operacional e degradação de segurança.',
      2: 'Incorreta: contas compartilhadas em texto claro violam rastreabilidade (accountability) e menor privilégio.',
      3: 'Incorreta: varreduras devem ser periódicas e preventivas, não apenas reativas pós-incidente.'
    }
  },
  {
    id: 'sarah-13-18',
    editalItemId: '13.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'O SIEM alerta às 03h00 inclusão de usuário desconhecido no grupo Domain Admins sem chamado de mudança aprovado. Qual ação imediata de OPSEC deve ocorrer?',
    options: [
      'Ignorar o alerta até a revisão semestral padrão de inventário de ativos.',
      'Desabilitar a conta incluída, revogar sessões/tokens suspeitos, isolar origem e iniciar investigação de incidente.',
      'Reiniciar todos os switches de acesso da unidade antes de coletar os logs de segurança do AD.',
      'Aumentar o intervalo de coleta do agente SIEM para uma vez por semana para reduzir falsos positivos.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. segurança operacional (Eixo 13. Segurança). Escalação não autorizada de privilégio administrativo fora de janela/chamado é forte indício de comprometimento; exige contenção imediata (bloqueio de conta/sessões e isolamento da origem) preservando logs para análise.',
    correctAnalysis:
      'A resposta operacional adequada contém rapidamente o risco (bloqueando a conta e sessões) sem destruir evidências no AD/SIEM.',
    optionErrors: {
      0: 'Incorreta: aguardar meses diante de escalação de Domain Admin permite ransomware ou exfiltração total.',
      2: 'Incorreta: reiniciar switches sem conter a conta não remove privilégios no AD e pode perder estado volátil.',
      3: 'Incorreta: reduzir frequência do SIEM oculta ataques em andamento.'
    }
  },
  {
    id: 'sarah-13-19',
    editalItemId: '13.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual diferença distingue os modelos de controle de acesso DAC, MAC e RBAC na gestão de identidades (IAM)?',
    options: [
      'No RBAC cada usuário escolhe suas próprias permissões; no DAC um papel define todos os acessos.',
      'No MAC o dono do arquivo libera compartilhamentos livremente; no RBAC apenas rótulos militares valem.',
      'No DAC o dono do recurso define acessos; no MAC o sistema impõe rótulos rígidos; no RBAC papéis definem permissões.',
      'Todos os três modelos proíbem associação de permissões a grupos de usuários corporativos.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. gestão de acessos (Eixo 13. Segurança). DAC (Discretionary) deixa o proprietário do objeto controlar ACLs; MAC (Mandatory, ex.: SELinux) aplica níveis/rótulos impostos pelo sistema; RBAC (Role-Based) vincula permissões a papéis organizacionais.',
    correctAnalysis:
      'DAC delega controle ao proprietário, MAC impõe política mandatória por rótulos do sistema e RBAC padroniza permissões por função/papel (padrão corporativo).',
    optionErrors: {
      0: 'Incorreta: no RBAC administradores associam permissões a papéis, nunca o próprio usuário escolhendo livremente.',
      1: 'Incorreta: inverte exatamente as características de DAC (dono decide) e MAC (rótulos mandatórios).',
      3: 'Incorreta: o RBAC apoia-se justamente em grupos e papéis para atribuir acessos de forma escalável.'
    }
  },
  {
    id: 'sarah-13-20',
    editalItemId: '13.1.2',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre os padrões modernos de autenticação e autorização (OAuth 2.0, OpenID Connect e JWT), assinale a afirmação INCORRETA.',
    options: [
      'OAuth 2.0 é um framework de autorização delegada que utiliza Access Tokens para acessar recursos em APIs.',
      'O OpenID Connect (OIDC) atua como camada de autenticação sobre o OAuth 2.0 fornecendo um ID Token.',
      'Um JWT (JSON Web Token) possui três partes separadas por ponto (Header, Payload e Signature) assinadas criptograficamente.',
      'O OAuth 2.0 puro foi projetado especificamente para autenticação do usuário, enquanto o OIDC trata só de firewall L4.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2. Métodos de autenticação e autorização (Eixo 13. Segurança). OAuth 2.0 trata de AUTORIZAÇÃO delegada (o que uma aplicação pode acessar), enquanto a camada de AUTENTICAÇÃO de identidade de usuário (quem é você, via ID Token) foi adicionada pelo OpenID Connect (OIDC).',
    correctAnalysis:
      'A afirmação incorreta inverte os papéis de OAuth 2.0 (autorização) e OIDC (camada de autenticação sobre OAuth 2.0), além de desconectar OIDC de identidade.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): OAuth 2.0 emite Access Tokens com escopos autorizados para APIs.',
      1: 'Incorreta (afirmação verdadeira): OIDC estende OAuth 2.0 adicionando identidade via ID Token e endpoint /userinfo.',
      2: 'Incorreta (afirmação verdadeira): o JWT compacto segue exatamente o formato `header.payload.signature`.'
    }
  },
  {
    id: 'sarah-13-21',
    editalItemId: '13.2.6',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual diferença prática torna o Scan de Vulnerabilidades Autenticado superior ao Scan Não Autenticado em servidores internos?',
    options: [
      'Permite inspecionar pacotes instalados, versões de bibliotecas e registro local reduzindo falsos negativos.',
      'Explora destrutivamente serviços em produção derrubando servidores para testar disponibilidade.',
      'Dispensa inventário de ativos porque substitui o firewall de borda durante a varredura.',
      'Corrige automaticamente todas as CVEs críticas sem necessidade de janela de mudança.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. vulnerabilidades (Eixo 13. Segurança). Ao autenticar-se via SSH/WinRM com conta de leitura restrita, o scanner verifica exatamente versões locais de pacotes, patches ausentes e configurações inseguras sem depender apenas de banners externos.',
    correctAnalysis:
      'O scan autenticado enxerga o interior do sistema operacional (pacotes, DLLs, patches e políticas locais), eliminando pontos cegos do scan apenas de rede.',
    optionErrors: {
      1: 'Incorreta: scanners de vulnerabilidades identificam falhas de forma passiva/segura, não executam DoS destrutivo.',
      2: 'Incorreta: scan autenticado não substitui firewalls nem dispensa inventário de escopo.',
      3: 'Incorreta: o scanner relata CVEs e severidade CVSS, cabendo à equipe/patch management aplicar correções.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 14 (+2) ====================
  {
    id: 'sarah-14-13',
    editalItemId: '14.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na Análise de Causa Raiz (RCA), qual é a finalidade combinada do Diagrama de Ishikawa e da técnica dos 5 Porquês?',
    options: [
      'Substituir backups incrementais por snapshots locais permanentes nos hosts.',
      'Mapear categorias de possíveis fatores contribuintes e aprofundar até a causa sistêmica raiz.',
      'Reiniciar todos os servidores em cluster simultaneamente sem analisar os logs.',
      'Calcular a largura de banda líquida de chamadas VoIP usando codec G.711.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.2. Metodologias de análise de causa raiz (Eixo 14. Troubleshooting). O Diagrama de Ishikawa (Espinha de Peixe / Causa e Efeito) organiza hipóteses por categorias (Pessoas, Processos, Rede, Hardware, Software, Ambiente), enquanto os 5 Porquês aprofundam cada sintoma até descobrir a causa fundamental.',
    correctAnalysis:
      'Ishikawa estrutura possíveis causas em categorias amplas e os 5 Porquês encadeiam perguntas sucessivas até a raiz corrigível do problema.',
    optionErrors: {
      0: 'Incorreta: metodologias RCA não substituem políticas de backup nem usam snapshots como backup.',
      2: 'Incorreta: reiniciar sem analisar sintomas destrói evidências e contraria a investigação RCA.',
      3: 'Incorreta: cálculo de banda VoIP não utiliza Ishikawa nem 5 Porquês.'
    }
  },
  {
    id: 'sarah-14-14',
    editalItemId: '14.2.5',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre correlação de eventos no troubleshooting de infraestrutura, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Manter todos os servidores e switches sincronizados por NTP (preferencialmente em UTC) evita desvios na linha do tempo.\n( ) Relacionar timestamps entre firewall, balanceador e banco de dados ajuda a distinguir causa primária de efeitos em cascata.\n( ) Fusos horários diferentes entre equipamentos sem padronização facilitam a ordenação cronológica automática em logs brutos.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'F – V – F.',
      'V – V – F.',
      'V – V – V.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. correlação de eventos (Eixo 14. Troubleshooting). Sincronia NTP/UTC garante cronologia fiel (V); cruzar eventos entre camadas separa causa primária de sintomas derivados (V); fusos distintos sem referência embaralham a ordem dos eventos (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque fusos divergentes ou relógios dessincronizados distorcem a sequência causal na análise de logs.',
    optionErrors: {
      0: 'Incorreta: correlacionar eventos entre múltiplas camadas é justamente o meio para separar causa e efeito.',
      1: 'Incorreta: NTP e UTC são requisitos básicos para correlação precisa de logs.',
      3: 'Incorreta: fusos horários misturados sem normalização dificultam e induzem erros na linha do tempo.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 15 (+3) ====================
  {
    id: 'sarah-15-13',
    editalItemId: '15.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na classificação Uptime Institute para data centers, qual característica define um ambiente Tier III frente a um Tier IV?',
    options: [
      'Tier III usa energia única sem gerador; Tier IV opera sem climatização.',
      'Tier III opera só em nuvem pública; Tier IV limita-se a salas locais.',
      'Ambos exigem parada total programada a cada manutenção de nobreak.',
      'Tier III permite manutenção concorrente (N+1); Tier IV tolera falhas (2N+1).'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.1. Tecnologias e arquitetura de data center (Eixo 15). Tier III (Concurrently Maintainable) possui caminhos redundantes para manter equipamentos sem interromper a operação (~99,982%); Tier IV (Fault Tolerant) adiciona isolamento físico e redundância ativa capaz de absorver falha súbita sem queda (~99,995%).',
    correctAnalysis:
      'Tier III assegura manutenção planejada concorrente sem downtime; Tier IV vai além garantindo tolerância automática até em falhas imprevistas isoladas.',
    optionErrors: {
      0: 'Incorreta: até Tier I/II possuem geradores/UPS em níveis básicos e todo data center exige climatização adequada.',
      1: 'Incorreta: os Tiers do Uptime Institute avaliam infraestrutura física (energia, refrigeração e caminhos) de data centers.',
      2: 'Incorreta: a grande marca do Tier III em diante é justamente eliminar paradas programadas para manutenção.'
    }
  },
  {
    id: 'sarah-15-14',
    editalItemId: '15.2.2',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre topologias de redundância elétrica e de rede (N+1 e 2N), avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A arquitetura N+1 disponibiliza uma unidade sobressalente além das N necessárias para suportar a carga total.\n( ) A topologia 2N duplica integralmente sistemas e caminhos independentes (ex.: fontes A e B em circuitos distintos).\n( ) Conectar ambas as fontes redundantes de um servidor na mesma régua elétrica (PDU) elimina todo ponto único de falha.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. redundância (Eixo 15). N+1 garante 1 componente reserva (V); 2N provê caminhos completamente duplicados e independentes (V); ligar duas fontes na mesma PDU/mesmo quadro cria um ponto único de falha (SPOF) físico compartilhado (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque redundância real exige diversidade de caminho até quadros/UPS/switches independentes.',
    optionErrors: {
      1: 'Incorreta: a topologia 2N realmente duplica integralmente cadeias independentes de fornecimento.',
      2: 'Incorreta: N+1 representa exatamente N unidades operacionais mais 1 reserva.',
      3: 'Incorreta: ligar duas fontes na mesma PDU mantém um ponto único de falha na própria régua/disjuntor.'
    }
  },
  {
    id: 'sarah-15-15',
    editalItemId: '15.2.8',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre testes de recuperação de desastres (DR) e continuidade de negócios, assinale a afirmação INCORRETA.',
    options: [
      'Testes periódicos validam se o runbook atualizado e os tempos reais de subida atendem ao RTO contratado.',
      'Um exercício tabletop consiste em desligar fisicamente a energia do data center principal de surpresa no horário de pico.',
      'Testes em ambiente isolado (sandbox/bolha) permitem validar recuperação sem impactar usuários em produção.',
      'Toda lição aprendida e falha identificada durante o exercício deve gerar atualização do plano de recuperação (DRP).'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. testes de recuperação (Eixo 15). O teste tabletop (exercício de mesa) é uma simulação teórica em sala onde a equipe percorre o cenário e o runbook passo a passo sem interromper sistemas reais; desligamento real sem isolamento caracteriza teste full-interruption/caos.',
    correctAnalysis:
      'A afirmação incorreta confunde exercício tabletop (discussão estruturada em mesa sem parada real) com teste disruptivo de corte físico em produção.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): validar runbook e medir RTO real é objetivo central dos testes de DR.',
      2: 'Incorreta (afirmação verdadeira): simulações em rede isolada reduzem risco à operação assistencial.',
      3: 'Incorreta (afirmação verdadeira): retroalimentar o DRP após cada teste mantém o plano eficaz.'
    }
  },
  // ==================== EXPANSÃO FASE 4: EIXO 16 (+18 → 30 questões) ====================
  {
    id: 'sarah-16-13',
    editalItemId: '16.1.1',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na governança corporativa de TI e no uso da Matriz RACI, qual regra garante clareza de autoridade em cada atividade crítica?',
    options: [
      'Atribuir múltiplos papéis Accountable (A) para diluir responsabilidade entre departamentos.',
      'Transferir à alta diretoria a execução diária operacional de backups e switches.',
      'Definir exatamente um único Accountable (A) por entrega, separando governança (EDM) da gestão.',
      'Eliminar papéis Consulted (C) e Informed (I) para evitar documentação de governança.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.1. Governança corporativa de TI e papéis (Eixo 16). Na Matriz RACI, pode haver vários R, C e I, porém deve existir exatamente 1 Accountable (A — dono/aprovador final) por tarefa; ademais, Governança (Avaliar/Dirigir/Monitorar) não se confunde com execução operacional diária.',
    correctAnalysis:
      'Cada entrega exige exatamente um único responsável final Accountable (A), mantendo nítida a fronteira entre direcionamento da governança e execução da gestão.',
    optionErrors: {
      0: 'Incorreta: múltiplos Accountable geram ambiguidade e ninguém responde pela decisão final.',
      1: 'Incorreta: operação técnica diária compete à Gestão e equipes técnicas, não ao conselho de governança.',
      3: 'Incorreta: Consulted e Informed garantem alinhamento com stakeholders técnicos e de negócio.'
    }
  },
  {
    id: 'sarah-16-14',
    editalItemId: '16.1.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Para sustentar um SLA de 99,9% no prontuário eletrônico, a TI formaliza metas com a equipe interna de Redes e um contrato de link WAN com a operadora. Como se classificam esses dois instrumentos, respectivamente?',
    options: [
      'SLA interno e RACI externo.',
      'UC interno e SLA público.',
      'OLA externo e Contrato público.',
      'OLA (interno) e UC (apoio).'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.2. Gestão de serviços e acordos SLA/OLA (Eixo 16). Acordos firmados entre equipes internas da própria TI são OLAs (Operational Level Agreements); contratos formais com fornecedores externos (como operadoras de telecom) são UCs (Underpinning Contracts / Contratos de Apoio).',
    correctAnalysis:
      'Metas entre times internos da TI formam OLAs, enquanto compromissos jurídicos com fornecedores externos constituem Underpinning Contracts (UCs).',
    optionErrors: {
      0: 'Incorreta: SLA vincula provedor ao cliente/negócio e RACI é matriz de responsabilidades, não contrato.',
      1: 'Incorreta: UC nunca é acordo interno e SLA não se aplica a operadora como subcontrato.',
      2: 'Incorreta: OLA é exclusivamente interno à organização provedora, nunca externo.'
    }
  },
  {
    id: 'sarah-16-15',
    editalItemId: '16.1.4',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Desativar um servidor legado sem suporte em vez de mantê-lo exposto ilustra qual estratégia de tratamento de riscos — e como se chama o risco que permanece após controles?',
    options: [
      'Evitar o risco; o que permanece após controles chama-se Risco Residual.',
      'Transferir o risco; o que permanece após controles chama-se Risco Inerente.',
      'Aceitar o risco; o que permanece após controles chama-se Risco Absoluto.',
      'Mitigar o risco; o que permanece após controles chama-se Risco Oportuno.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.4. Identificação, análise, avaliação e tratamento de riscos (Eixo 16). Descontinuar a fonte/atividade elimina a exposição (Evitar); implementar controles reduz probabilidade/impacto (Mitigar); seguros/terceirização compartilham impacto (Transferir). O nível remanescente após tratamento é o Risco Residual.',
    correctAnalysis:
      'Desligar definitivamente o serviço inseguro é Evitar o risco, e a exposição que subsiste mesmo após aplicação de salvaguardas denomina-se Risco Residual.',
    optionErrors: {
      1: 'Incorreta: Transferir ocorre via seguro/contrato, e Risco Inerente é o risco bruto ANTES dos controles.',
      2: 'Incorreta: Aceitar mantém o ativo rodando assumindo formalmente a exposição, não o desativa.',
      3: 'Incorreta: Mitigar reduz risco mantendo a atividade com controles; além disso, o termo correto é Risco Residual.'
    }
  },
  {
    id: 'sarah-16-16',
    editalItemId: '16.1.5',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'calculo',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na medição por Valor Agregado (EVM) de um projeto de infraestrutura, tem-se PV = R$ 100.000, EV = R$ 80.000 e AC = R$ 100.000. Quais são os índices SPI e CPI e a situação do projeto?',
    options: [
      'SPI = 1,25 e CPI = 1,00 (adiantado e dentro do orçamento).',
      'SPI = 0,80 e CPI = 0,80 (atrasado no cronograma e acima do orçamento).',
      'SPI = 1,00 e CPI = 0,80 (no prazo e abaixo do custo previsto).',
      'SPI = 0,80 e CPI = 1,25 (atrasado no prazo e economizando recursos).'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.5. Ciclo de vida e gestão de projetos (Eixo 16). SPI = EV / PV = 80.000 / 100.000 = 0,80 (< 1 indica atraso); CPI = EV / AC = 80.000 / 100.000 = 0,80 (< 1 indica custo real acima do valor entregue).',
    correctAnalysis:
      'Como EV (80 mil) é menor que PV (100 mil) e menor que AC (100 mil), tanto SPI quanto CPI resultam em 0,80, apontando atraso e estouro orçamentário.',
    optionErrors: {
      0: 'Incorreta: 1,25 resulta da divisão invertida PV / EV em vez da fórmula padrão EV / PV.',
      2: 'Incorreta: PV = AC não gera SPI = 1,00 porque o índice compara EV com PV (80/100 = 0,80).',
      3: 'Incorreta: CPI = 1,25 ocorreria apenas se AC fosse 64.000 para EV = 80.000.'
    }
  },
  {
    id: 'sarah-16-17',
    editalItemId: '16.1.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre planejamento estratégico de TI (PETI/PDTI) e indicadores (KPIs e OKRs), assinale a afirmação INCORRETA.',
    options: [
      'O PDTI desdobra o direcionamento estratégico em metas, ações, orçamento, capacitação e plano de contratações.',
      'Indicadores SMART devem ser Específicos, Mensuráveis, Atingíveis, Relevantes e Temporais.',
      'Em OKRs, Key Results são listas genéricas de tarefas operacionais sem valores ou métricas verificáveis.',
      'Leading indicators antecipam tendências operacionais (ex.: % de patches aplicados), complementando lagging indicators.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.6. Planejamento estratégico de TI e indicadores (Eixo 16). Em OKRs, o Objetivo é qualitativo/direcional, mas os Key Results DEVEM ser quantitativos, mensuráveis por resultado e vinculados a um prazo (nunca simples listas de tarefas).',
    correctAnalysis:
      'A afirmação incorreta descaracteriza os Key Results ao defini-los como tarefas qualitativas sem métrica verificável.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): o PDTI consolida justamente metas, necessidades, riscos, orçamento e aquisições.',
      1: 'Incorreta (afirmação verdadeira): SMART sintetiza os cinco atributos clássicos de boas metas/indicadores.',
      3: 'Incorreta (afirmação verdadeira): indicadores preditivos (leading) sinalizam riscos antes do resultado final (lagging).'
    }
  },
  {
    id: 'sarah-16-18',
    editalItemId: '16.1.7',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na melhoria contínua de processos (BPM), por que se deve mapear o estado AS-IS e desenhar o TO-BE antes de implantar automação em uma ferramenta de chamados?',
    options: [
      'Para garantir que todo gargalo manual atual seja replicado fielmente no software novo.',
      'Para substituir a etapa Check do ciclo PDCA dispensando medições após a implantação.',
      'Para manter silos departamentais isolados sem necessidade de dono de processo.',
      'Para diagnosticar gargalos e eliminar desperdícios no desenho futuro antes de automatizá-lo.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.7. Mapeamento, análise e melhoria contínua de processos (Eixo 16). Automatizar um processo AS-IS ruim apenas acelera retrabalhos e burocracia; o levantamento AS-IS revela gargalos reais para que o redesenho TO-BE otimize o fluxo antes da automação.',
    correctAnalysis:
      'Primeiro compreende-se o processo atual real (AS-IS), removem-se etapas sem valor no estado futuro (TO-BE) e só então automatiza-se.',
    optionErrors: {
      0: 'Incorreta: replicar gargalos na automação perpetua ineficiências com maior custo.',
      1: 'Incorreta: a etapa Check do PDCA continua obrigatória para aferir ganhos após implantar o TO-BE.',
      2: 'Incorreta: BPM visa exatamente visão ponta a ponta superando silos departamentais.'
    }
  },
  {
    id: 'sarah-16-19',
    editalItemId: '16.1.9',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual é a finalidade central da BIA (Business Impact Analysis) no planejamento de continuidade de negócios e integração com o SGSI?',
    options: [
      'Identificar processos críticos, dependências, MTPD, RTO e RPO junto às áreas de negócio.',
      'Substituir o firewall de borda e as políticas de senha definidas na ISO/IEC 27002.',
      'Selecionar apenas fornecedores de hardware para renovação de notebooks administrativos.',
      'Calcular a largura de banda de troncos SIP sem considerar impacto assistencial.'
    ],
    correctIndex: 0,
    explanation:
      'Item 1.9. SGSI, BIA e PCN (Eixo 16). A BIA analisa como a paralisação dos processos afeta a instituição ao longo do tempo, determinando criticidade, MTPD (período máximo tolerável), RTO, RPO e recursos mínimos de recuperação — base para o PCN/DRP.',
    correctAnalysis:
      'A BIA quantifica/qualifica impactos da interrupção e estabelece formalmente MTPD, RTO e RPO dos processos críticos com participação do negócio.',
    optionErrors: {
      1: 'Incorreta: a BIA não substitui controles preventivos de segurança nem o SGSI.',
      2: 'Incorreta: aquisição de estações comuns pertence ao plano de renovação/compras, não à BIA.',
      3: 'Incorreta: a BIA foca impacto de negócio da indisponibilidade, não dimensionamento específico de codecs VoIP.'
    }
  },
  {
    id: 'sarah-16-20',
    editalItemId: '16.1.10',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre compliance e o Modelo das Três Linhas em controles internos, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A 1ª Linha compreende os gestores e equipes operacionais que executam os processos e controles diários.\n( ) A 2ª Linha abrange funções de gestão de riscos, compliance e segurança que orientam e monitoram a conformidade.\n( ) A 2ª Linha substitui a Auditoria Interna (3ª Linha) por possuir independência hierárquica absoluta sobre si mesma.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 1.10. Compliance e conformidade normativa (Eixo 16). 1ª Linha = donos de processos/operação (V); 2ª Linha = riscos/compliance/SI (V); 3ª Linha = Auditoria Interna independente que reporta ao Conselho e avalia tanto a 1ª quanto a 2ª linhas (F).',
    correctAnalysis:
      'As duas primeiras afirmativas estão corretas; a terceira é falsa porque a 2ª Linha apoia e monitora políticas internamente, não substituindo a independência da 3ª Linha (Auditoria Interna).',
    optionErrors: {
      0: 'Incorreta: a 2ª Linha realmente engloba riscos, compliance e segurança da informação.',
      2: 'Incorreta: a 1ª Linha é composta pelos gestores e operadores que executam os controles.',
      3: 'Incorreta: ninguém audita a si mesmo com independência — papel exclusivo da 3ª Linha.'
    }
  },
  {
    id: 'sarah-16-21',
    editalItemId: '16.1.11',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'caso_curto',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Uma equipe solicita restaurar o backup de produção do prontuário eletrônico em ambiente de homologação para reproduzir um erro. Qual medida atende à LGPD?',
    options: [
      'Restaurar integralmente o banco real liberando acesso apenas aos desenvolvedores internos.',
      'Publicar o dump do banco em portal de transparência ativa sem restrição de acesso.',
      'Aplicar anonimização ou mascaramento dos dados pessoais e sensíveis antes de disponibilizar o ambiente.',
      'Desabilitar a criptografia de transporte TLS e apagar logs de acesso para acelerar os testes.'
    ],
    correctIndex: 2,
    explanation:
      'Item 1.11. Transparência e proteção de dados pessoais (Eixo 16). Copiar dados pessoais sensíveis de saúde reais para homologação/teste sem necessidade estrita viola os princípios de Minimização/Necessidade e Segurança da LGPD; deve-se mascarar ou gerar dados sintéticos.',
    correctAnalysis:
      'Mascarar ou anonimizar os registros antes do uso em homologação protege titulares contra exposição indevida em ambientes menos restritos.',
    optionErrors: {
      0: 'Incorreta: desenvolvedores e ambientes de teste não devem acessar dados reais de pacientes sem necessidade legal.',
      1: 'Incorreta: dados pessoais sensíveis de saúde são restritos e jamais podem ser publicados em transparência ativa.',
      3: 'Incorreta: reduzir segurança e eliminar rastreabilidade viola diretamente o art. 46 da LGPD.'
    }
  },
  {
    id: 'sarah-16-22',
    editalItemId: '16.1.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na governança e ciclo de vida dos dados, qual prática garante eliminação segura ao descartar servidores ou discos que armazenaram dados corporativos?',
    options: [
      'Executar formatação rápida (Quick Format) no sistema de arquivos antes da doação.',
      'Apenas remover o compartilhamento SMB mantendo o volume LVM intacto no disco.',
      'Transferir responsabilidade ao Data Steward sem apagar os blocos físicos das mídias.',
      'Aplicar sanitização criptográfica (crypto-erasure), sobrescrita segura ou destruição física da mídia.'
    ],
    correctIndex: 3,
    explanation:
      'Item 1.12. Governança, qualidade e ciclo de vida dos dados (Eixo 16). Quick Format ou exclusão lógica apaga somente ponteiros de diretório, permitindo recuperação forense dos dados; o descarte seguro exige crypto-erasure, sobrescrita integral ou destruição física (NIST SP 800-88).',
    correctAnalysis:
      'A etapa final do ciclo de vida dos dados requer sanitização irreversível (destruição de chaves, sobrescrita verificada ou trituração física).',
    optionErrors: {
      0: 'Incorreta: Quick Format deixa todos os dados legíveis nos setores do disco.',
      1: 'Incorreta: despublicar compartilhamento de rede não remove nada armazenado na mídia física.',
      2: 'Incorreta: o Data Steward coordena padrões técnicos, mas o descarte efetivo exige sanitização comprovada.'
    }
  },
  {
    id: 'sarah-16-23',
    editalItemId: '16.2.2',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Na norma ABNT NBR ISO/IEC 38500 (Governança Corporativa de TI), a quem ela se destina e quais são as três tarefas do seu modelo de governança?',
    options: [
      'Ao corpo dirigente (alta administração), por meio das tarefas Avaliar, Dirigir e Monitorar (EDM).',
      'Aos analistas de Service Desk N1, por meio das tarefas Registrar, Classificar e Escalar.',
      'Exclusivamente a desenvolvedores ágeis, por meio das tarefas Planejar, Codificar e Testar.',
      'Aos auditores externos de rede, por meio das tarefas Escanear, Explorar e Corrigir.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. ISO/IEC 38500 (Eixo 16. Gestão e governança de TI). A ISO/IEC 38500 orienta conselhos e executivos (corpo dirigente) com 6 princípios (Responsabilidade, Estratégia, Aquisição, Desempenho, Conformidade e Comportamento Humano) e 3 tarefas contínuas: Avaliar, Dirigir e Monitorar.',
    correctAnalysis:
      'A ISO/IEC 38500 foca na alta cúpula diretiva estruturando a governança de TI sobre o ciclo Avaliar, Dirigir e Monitorar (EDM).',
    optionErrors: {
      1: 'Incorreta: atendimento de chamados pertence à operação da Central de Serviços (ITIL), não à ISO 38500.',
      2: 'Incorreta: ciclo de codificação não integra o escopo diretivo da ISO/IEC 38500.',
      3: 'Incorreta: varredura e correção são atividades operacionais de gestão de vulnerabilidades.'
    }
  },
  {
    id: 'sarah-16-24',
    editalItemId: '16.2.3',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre o framework ITIL 4, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) A ITIL 4 estrutura-se no Sistema de Valor de Serviço (SVS) e em 4 Dimensões do Gerenciamento de Serviços.\n( ) O princípio orientador "Otimizar e automatizar" recomenda simplificar e otimizar o processo antes de automatizá-lo.\n( ) Suas 6 atividades da Cadeia de Valor formam uma sequência rígida obrigatória exatamente como o ciclo v3.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – F – V.',
      'V – V – F.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. ITIL 4 (Eixo 16). ITIL 4 combina SVS + 4 Dimensões (V); "Otimizar e automatizar" orienta otimizar antes de automatizar (V); as 6 atividades da Cadeia de Valor (Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support) são flexíveis e não-lineares (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque a grande evolução da ITIL 4 sobre a v3 foi substituir o ciclo rígido de 5 estágios por fluxos de valor flexíveis.',
    optionErrors: {
      0: 'Incorreta: otimizar antes de automatizar é exatamente o sentido do 7º princípio orientador da ITIL 4.',
      2: 'Incorreta: SVS e 4 Dimensões são a base arquitetural oficial da ITIL 4.',
      3: 'Incorreta: a Cadeia de Valor de Serviço da ITIL 4 não impõe ordem sequencial única obrigatória.'
    }
  },
  {
    id: 'sarah-16-25',
    editalItemId: '16.2.6',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Considerando especificamente a 7ª edição do Guia PMBOK (PMI), assinale a afirmação INCORRETA.',
    options: [
      'Adota abordagem orientada a valor com 12 Princípios de Gerenciamento de Projetos e 8 Domínios de Desempenho.',
      'Aplica o conceito de Adaptação (Tailoring) para ajustar práticas a projetos preditivos, ágeis ou híbridos.',
      'Prescreve obrigatoriamente 49 processos sequenciais agrupados em 10 áreas de conhecimento rígidas em cascata.',
      'Enfatiza a entrega de resultados (outcomes) que gerem valor ao negócio além de entregas técnicas isoladas (outputs).'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. PMBOK 7ª edição (Eixo 16). A estrutura de 5 grupos de processos, 10 áreas de conhecimento e 49 processos pertencia à 6ª edição; a 7ª edição migrou para 12 princípios, 8 domínios de desempenho e foco em entrega de valor (Sistema de Entrega de Valor).',
    correctAnalysis:
      'A afirmação incorreta atribui à 7ª edição o modelo prescritivo de 49 processos e 10 áreas da 6ª edição do PMBOK.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): 12 Princípios + 8 Domínios de Desempenho são os pilares do PMBOK 7.',
      1: 'Incorreta (afirmação verdadeira): Tailoring adapta abordagem, governança e artefatos ao contexto do projeto.',
      3: 'Incorreta (afirmação verdadeira): o Sistema de Entrega de Valor prioriza resultados efetivos (outcomes).'
    }
  },
  {
    id: 'sarah-16-26',
    editalItemId: '16.2.8',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Qual diferença relaciona e distingue o PETI (Planejamento Estratégico de TI) do PDTI/PDTIC (Plano Diretor de TI)?',
    options: [
      'O PETI lista apenas cabos de rede; o PDTI substitui a Lei nº 13.709/2018.',
      'Ambos são manuais exclusivos do Service Desk para chamados de nível 1.',
      'O PDTI precede a missão institucional e proíbe revisões anuais de metas.',
      'O PETI define diretrizes amplas; o PDTI desdobra ações, orçamento e riscos.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. PETI e PDTI (Eixo 16). O PETI estabelece visão estratégica de longo alcance alinhada à instituição; o PDTI/PDTIC traduz essa estratégia para o nível tático-operacional com diagnóstico, metas, capacitação, riscos, orçamento e plano de aquisições.',
    correctAnalysis:
      'O PETI orienta estrategicamente a área de TI e o PDTI materializa o portfólio concreto de ações, metas, pessoal, riscos e contratações.',
    optionErrors: {
      0: 'Incorreta: nenhum dos dois reduz-se a inventário físico de cabos nem substitui legislação federal.',
      1: 'Incorreta: são instrumentos de planejamento de TI, não roteiros operacionais de triagem N1.',
      2: 'Incorreta: ambos subordinam-se ao planejamento institucional e passam por revisões periódicas.'
    }
  },
  {
    id: 'sarah-16-27',
    editalItemId: '16.2.10',
    format: 'multipla_escolha',
    questionPattern: 'vf',
    style: 'vf',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Sobre a notação BPMN 2.0 e o ciclo PDCA, avalie as afirmativas e assinale (V) para verdadeira e (F) para falsa.\n\n( ) Na notação BPMN, o Fluxo de Sequência (linha contínua) conecta atividades dentro do mesmo Pool, jamais cruzando para outro Pool.\n( ) O Gateway Paralelo (+) divide o fluxo disparando todos os caminhos simultaneamente sem testar condição booleana.\n( ) A comunicação entre dois Pools distintos em um diagrama BPMN deve usar Fluxo de Sequência contínuo em vez de Mensagem.\n\nAs afirmativas são, respectivamente,',
    options: [
      'V – V – F.',
      'V – F – V.',
      'F – V – F.',
      'V – V – V.'
    ],
    correctIndex: 0,
    explanation:
      'Item 2. BPMN e ciclo PDCA (Eixo 16). Linha contínua (Sequence Flow) só liga elementos internos ao mesmo Pool (V); Gateway Paralelo (+) executa todas as ramificações concorrentemente (V); entre Pools diferentes usa-se obrigatoriamente Fluxo de Mensagem tracejado (F).',
    correctAnalysis:
      'As duas primeiras afirmativas são verdadeiras; a terceira é falsa porque ligar dois Pools distintos com Fluxo de Sequência é erro sintático clássico em BPMN.',
    optionErrors: {
      1: 'Incorreta: o Gateway Paralelo (+) justamente não avalia condição exclusiva (papel do XOR `X`).',
      2: 'Incorreta: Fluxo de Sequência é estritamente intraprocesso (dentro do mesmo Pool).',
      3: 'Incorreta: entre Pools distintos só é válido o Fluxo de Mensagem (linha tracejada).'
    }
  },
  {
    id: 'sarah-16-28',
    editalItemId: '16.2.12',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'No NIST Cybersecurity Framework (CSF 2.0), qual função foi adicionada no centro das cinco funções originais para coordenar estratégia, papéis e riscos de terceiros?',
    options: [
      'Audit (Auditar).',
      'Govern (Governar).',
      'Encrypt (Cifrar).',
      'Contain (Conter).'
    ],
    correctIndex: 1,
    explanation:
      'Item 2. NIST Cybersecurity Framework (Eixo 16). O NIST CSF 2.0 ampliou as 5 funções da versão 1.1 (Identify, Protect, Detect, Respond, Recover) adicionando a 6ª função transversal GOVERN (GV) como base estratégica e de governança de riscos cibernéticos.',
    correctAnalysis:
      'As seis funções do NIST CSF 2.0 são Govern (nova função transversal central), Identify, Protect, Detect, Respond e Recover.',
    optionErrors: {
      0: 'Incorreta: Audit não é o nome da sexta função oficial introduzida no NIST CSF 2.0.',
      2: 'Incorreta: criptografia é controle técnico enquadrado dentro de Protect, não uma função de topo.',
      3: 'Incorreta: contenção de incidentes compõe a função Respond.'
    }
  },
  {
    id: 'sarah-16-29',
    editalItemId: '16.2.14',
    format: 'multipla_escolha',
    questionPattern: 'cenario',
    style: 'direta',
    difficulty: 'Basica',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Pela Lei de Acesso à Informação (Lei nº 12.527/2011), quando não for possível conceder acesso imediato, qual é o prazo legal de resposta e sua prorrogação?',
    options: [
      '10 dias corridos, improrrogáveis em qualquer hipótese administrativa.',
      '15 dias úteis, prorrogáveis por mais 30 dias sem necessidade de justificativa.',
      '20 dias, prorrogáveis por mais 10 dias mediante justificativa expressa ao requerente.',
      '30 dias iniciais, prorrogáveis por mais 30 dias apenas mediante ordem judicial.'
    ],
    correctIndex: 2,
    explanation:
      'Item 2. Lei nº 12.527/2011 — LAI (Eixo 16). Conforme o art. 11, §§ 1º e 2º, não sendo possível a entrega imediata, o órgão deve responder em até 20 dias, prazo prorrogável por mais 10 dias mediante justificativa expressa e ciência ao solicitante (máximo 30 dias).',
    correctAnalysis:
      'A LAI estabelece prazo padrão de 20 dias para resposta não imediata, admitindo uma prorrogação justificada de 10 dias.',
    optionErrors: {
      0: 'Incorreta: 10 dias é o prazo da prorrogação (e também prazo para recurso do requerente), não o prazo inicial.',
      1: 'Incorreta: a lei fixa 20 dias (+ 10 prorrogáveis com justificativa expressa), não 15 + 30.',
      3: 'Incorreta: 30 dias é o total máximo já somada a prorrogação (20 + 10), sem depender de decisão judicial.'
    }
  },
  {
    id: 'sarah-16-30',
    editalItemId: '16.2.14',
    format: 'multipla_escolha',
    questionPattern: 'negativa',
    style: 'negativa',
    difficulty: 'Intermediaria',
    boardStyle: 'Banca Própria Rede SARAH',
    statement:
      'Considerando a Lei nº 12.527/2011 (LAI) sobre classificação de informações sigilosas e pessoais, assinale a afirmação INCORRETA.',
    options: [
      'O prazo máximo de restrição de acesso para informação classificada como Ultrassecreta é de 25 anos.',
      'O prazo máximo de restrição de acesso para informação classificada como Secreta é de 15 anos.',
      'Informações pessoais relativas à intimidade, vida privada, honra e imagem têm acesso restrito por até 100 anos.',
      'O solicitante deve comprovar interesse jurídico e justificar os motivos para registrar pedido de acesso à informação.'
    ],
    correctIndex: 3,
    explanation:
      'Item 2. Lei nº 12.527/2011 — LAI (Eixo 16). Pelo art. 10, §3º, são vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público; além disso, os prazos de sigilo são 25 (Ultrassecreta), 15 (Secreta), 5 (Reservada) e 100 anos (pessoal).',
    correctAnalysis:
      'A afirmação incorreta exige motivação do requerente: a LAI proíbe expressamente condicionar o pedido de informação à apresentação de justificativa ou interesse específico.',
    optionErrors: {
      0: 'Incorreta (afirmação verdadeira): Ultrassecreta tem prazo de até 25 anos (art. 24, §1º, I).',
      1: 'Incorreta (afirmação verdadeira): Secreta tem prazo de até 15 anos (art. 24, §1º, II).',
      2: 'Incorreta (afirmação verdadeira): informação pessoal tem restrição máxima de 100 anos (art. 31, §1º, I).'
    }
  }
]);
