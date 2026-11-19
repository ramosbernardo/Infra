import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_13: Record<string, StudyGuide> = {
  '13.1.1': {
    itemId: '13.1.1',
    highYieldSummary: [
      'Tríade Clássica (CID / CIA): Confidencialidade (garante que a informação seja acessada apenas por pessoas/sistemas autorizados — protegida por criptografia e controle de acesso), Integridade (garante exatidão, completude e ausência de adulteração não autorizada em trânsito ou repouso — protegida por hashes SHA-256, HMAC e assinaturas digitais) e Disponibilidade (garante acesso contínuo quando necessário pelos usuários legítimos — protegida por redundância, backups, HA e proteção anti-DDoS).',
      'Autenticidade: assegura que a identidade declarada pelo emissor, usuário, dispositivo ou sistema é genuína e verificável (protegida por autenticação forte MFA, Kerberos, certificados digitais X.509).',
      'Não Repúdio (Irretratabilidade): impede que o autor de uma ação, mensagem ou transação negue posteriormente tê-la realizado — exige obrigatoriamente **criptografia assimétrica com chave privada exclusiva** (assinatura digital) associada a trilhas de auditoria íntegras (hashes simétricos compartilhados NÃO garantem não repúdio pois duas pontas conhecem a mesma chave!).',
      'Ameaças Típicas por Princípio (Mapeamento de Prova): Eavesdropping/Sniffing e vazamento ferem Confidencialidade; alteração de pacote/arquivo fere Integridade; DoS/DDoS, ransomware cifrando produção e queda de link ferem Disponibilidade; Spoofing/Phishing ferem Autenticidade.',
      'Equilíbrio entre Princípios (Trade-offs): controles excessivos de confidencialidade (ex.: bloquear tudo ou chaves sem cópia de custódia) podem prejudicar a disponibilidade; toda arquitetura de segurança calibra os 5 pilares conforme criticidade do ativo.'
    ],
    technicalReference: [
      'CIDAN: Confidencialidade (Criptografia/ACL) | Integridade (Hash/HMAC/Assinatura) | Disponibilidade (HA/Backup/Anti-DDoS) | Autenticidade (Cert/MFA) | Não Repúdio (Assinatura com Chave Privada)',
      'Regra de ouro: Hash puro garante Integridade; Criptografia Simétrica garante Confidencialidade; Assinatura Digital (assimétrica) garante Autenticidade + Integridade + Não Repúdio.'
    ],
    examTraps: [
      'Pegadinha clássica: algoritmo de **Hash (SHA-256)** sozinho garante apenas **Integridade**, NUNCA Confidencialidade (não oculta dados nem é reversível) e NUNCA Não Repúdio sozinho.',
      'HMAC (chave secreta simétrica + hash) garante Integridade e Autenticidade entre as duas partes, mas NÃO garante Não Repúdio perante terceiros porque ambas as partes possuem a mesma chave simétrica compartilhada.',
      'Ransomware que criptografa os servidores de arquivos da empresa viola primeiramente a **Disponibilidade** (e frequentemente a **Confidencialidade** quando há exfiltração dupla).'
    ],
    keyTerms: ['CIDAN', 'Confidencialidade & Integridade', 'Disponibilidade', 'Autenticidade', 'Não Repúdio (Chave Privada)']
  },
  '13.1.2': {
    itemId: '13.1.2',
    highYieldSummary: [
      'MFA (Autenticação Multifator): exige combinação de dois ou mais fatores pertencentes a categorias DISTINTAS — Algo que você SABE (senha/PIN), Algo que você TEM (token hardware FIDO2, app TOTP no celular, smartcard) e Algo que você É / Faz (biometria digital/facial); pedir duas senhas ou senha + pergunta secreta NÃO é MFA (mesma categoria!).',
      'OAuth 2.0 (Autorização Delegada): protocolo aberto focado em **AUTORIZAÇÃO** — permite que um aplicativo de terceiros obtenha permissão limitada (`scopes`) via **Access Token** para acessar recursos/APIs do usuário em um Resource Server sem nunca receber a senha do usuário; padrão moderno usa Authorization Code Flow com **PKCE**.',
      'OpenID Connect — OIDC (Autenticação / Identidade sobre OAuth 2.0): camada fina de identidade construída **sobre** o OAuth 2.0 para fornecer **AUTENTICAÇÃO** federada (SSO); além do Access Token, o Authorization Server emite um **ID Token** (obrigatoriamente um JWT assinado contendo claims de identidade como `sub`, `email`, `name`) e disponibiliza o endpoint `/userinfo`.',
      'JWT (JSON Web Token — RFC 7519): formato compacto autocontido composto por três partes Base64URL separadas por pontos (`Header.Payload.Signature`) — o Header define algoritmo (`alg`: RS256/HS256), o Payload carrega claims (`iss`, `sub`, `aud`, `exp`), e a Signature garante integridade/autenticidade; ATENÇÃO: o Payload é apenas codificado em Base64URL (legível por qualquer um — NÃO criptografado por padrão, salvo JWE!).',
      'Diferença SSO Moderno vs Legado Corporativo: OIDC/OAuth 2.0 usa JSON/REST (ideal para web, mobile e APIs modernas), enquanto SAML 2.0 usa asserções XML assinadas (muito comum em aplicações corporativas tradicionais e federações).'
    ],
    technicalReference: [
      'OAuth 2.0 = AUTORIZAÇÃO (Access Token -> APIs) | OpenID Connect (OIDC) = AUTENTICAÇÃO sobre OAuth 2.0 (ID Token JWT -> "Quem é o usuário?")',
      'JWT: `Header.Payload.Signature` em Base64URL -> assinado (integridade), mas NÃO confidencial/cifrado por padrão (não colocar segredos no payload!).'
    ],
    examTraps: [
      'Banca Rede SARAH cobra diretamente: OAuth 2.0 é protocolo de **AUTORIZAÇÃO**, NÃO de autenticação! Quem provê **AUTENTICAÇÃO** (identidade do usuário via ID Token) é o **OpenID Connect (OIDC)** construído sobre o OAuth 2.0.',
      'Um JWT assinado (`JWS`) tem seu Payload legível por qualquer pessoa que interceptar o token decodificando Base64URL — assinatura garante que não foi alterado, NÃO sigilo.',
      'Solicitar senha + código SMS e verificar apenas no mesmo canal ou pedir senha + código PIN pessoal não configura MFA robusto (SMS sofre SIM swapping; duas senhas pertencem ao mesmo fator "saber").'
    ],
    keyTerms: ['MFA (3 Fatores Distintos)', 'OAuth 2.0 (Autorização)', 'OpenID Connect (Autenticação)', 'JWT (Header.Payload.Signature)', 'SSO / PKCE']
  },
  '13.1.3': {
    itemId: '13.1.3',
    highYieldSummary: [
      'Criptografia Simétrica (Chave Única Compartilhada): mesma chave secreta cifra e decifra; altíssima velocidade e baixo custo computacional (ideal para criptografar grandes volumes de dados em disco e tráfego contínuo) — principais algoritmos seguros atuais: **AES** (128/192/256 bits, modos GCM/CBC/XTS) e **ChaCha20** (3DES e RC4 estão obsoletos/inseguros); grande desafio é a distribuição segura da chave.',
      'Criptografia Assimétrica (Par de Chaves Pública/Privada): matematicamente vinculadas; o que a Chave Pública cifra, SÓ a Chave Privada decifra (confidencialidade); o que a Chave Privada assina, qualquer um com a Chave Pública verifica (autenticidade/não repúdio); muito mais lenta que a simétrica — algoritmos principais: **RSA** (>= 2048/3072 bits), **ECC / ECDSA / ECDH** (mesma segurança que RSA com chaves bem menores, ex.: ECC 256 ~ RSA 3072) e **Diffie-Hellman (DH/ECDH)** para acordo de chaves.',
      'Criptografia Híbrida (Padrão Real do TLS/HTTPS/PGP): combina o melhor dos dois mundos — usa criptografia assimétrica (ECDHE/RSA) apenas no handshake inicial para autenticar e negociar com segurança uma **chave simétrica de sessão efêmera**, passando todo o tráfego pesado de dados para AES-GCM ou ChaCha20-Poly1305.',
      'Funções Hash Criptográficas: função unidirecional (irreversível!) de entrada variável e saída fixa, resistente a colisões; **SHA-256 / SHA-3** são seguros; **MD5 e SHA-1 estão quebrados** para segurança/assinaturas (suscetíveis a colisões).',
      'Dados em Trânsito vs Dados em Repouso (Data at Rest): em trânsito protege-se o canal com **TLS 1.2/1.3** (HTTPS, LDAPS, SMTPS — desabilitar SSLv2/v3 e TLS 1.0/1.1!), IPsec ou SSH; em repouso protege-se discos/volumes/bancos contra furto físico usando **BitLocker (com TPM)** no Windows, **LUKS/dm-crypt** no Linux e TDE (Transparent Data Encryption) em bancos de dados.'
    ],
    technicalReference: [
      'Simétrica (rápida, dados em massa): AES-256, ChaCha20 (evitar DES/3DES/RC4) | Assimétrica (troca de chave/assinatura): RSA >= 2048, ECC/ECDH, Ed25519',
      'Hash seguro: SHA-256 / SHA-512 / SHA-3 (MD5 e SHA-1 quebrados) | Protocolo em trânsito atual: TLS 1.2 (com PFS) e TLS 1.3.'
    ],
    examTraps: [
      'Em criptografia assimétrica para garantir **CONFIDENCIALIDADE**, você cifra com a chave **PÚBLICA do destinatário** (para que apenas a privada dele decifre); para **ASSINAR**, você assina com a **SUA chave PRIVADA**!',
      'Função Hash (como SHA-256) NÃO é criptografia — não existe chave de decifragem para "descriptografar um hash"; usa-se apenas para verificação de integridade ou armazenamento seguro de senhas com salt lento (bcrypt/Argon2).',
      'TLS 1.3 removeu cifras fracas antigas (RSA sem Forward Secrecy, CBC, RC4, SHA-1) e exige obrigatoriamente **Perfect Forward Secrecy (PFS)** via ECDHE — vazamento futuro da chave privada do servidor não permite decifrar sessões gravadas no passado.'
    ],
    keyTerms: ['Simétrica (AES / ChaCha20)', 'Assimétrica (RSA / ECC / ECDH)', 'Criptografia Híbrida & PFS', 'Hash (SHA-256 vs MD5/SHA-1)', 'Dados em Trânsito (TLS) vs Repouso (BitLocker/LUKS)']
  },
  '13.1.4': {
    itemId: '13.1.4',
    highYieldSummary: [
      'Assinatura Digital (Mecanismo Exato Passo a Passo): o emissor calcula o **hash** (resumo criptográfico, ex.: SHA-256) do documento inteiro -> cifra apenas esse hash usando a **SUA própria chave PRIVADA** -> anexa a assinatura ao documento; o destinatário recalcula o hash do documento recebido, decifra a assinatura com a **chave PÚBLICA do emissor** e compara os dois hashes — se idênticos, prova **Autenticidade, Integridade e Não Repúdio** (NÃO confere sigilo ao texto!).',
      'Certificado Digital (Padrão X.509): arquivo eletrônico assinado por uma Autoridade Certificadora (AC) que vincula formalmente uma Chave Pública à identidade de uma pessoa, servidor DNS (`SAN` — Subject Alternative Name) ou organização, contendo validade, uso da chave (`Key Usage`/`EKU`) e número de série.',
      'Infraestrutura de Chaves Públicas (PKI / ICP-Brasil): hierarquia de confiança partindo de uma **AC Raiz** (Root CA, offline e altamente protegida, autoassinada) -> **ACs Intermediárias** (emitem certificados finais reduzindo risco caso comprometidas) -> **AR (Autoridade de Registro)** (valida presencialmente/documentalmente a identidade do requerente) -> Certificados Finais.',
      'Validação da Cadeia de Confiança e Revogação: antes de confiar num certificado, o cliente verifica (1) assinatura criptográfica até uma Root CA presente no Trust Store, (2) data de validade, (3) correspondência do domínio no campo `SAN` (Subject Alternative Name — CN sozinho é obsoleto!) e (4) status de revogação via **CRL** (Lista de Certificados Revogados) ou **OCSP** (consulta online em tempo real / OCSP Stapling).',
      'Assinatura Digital vs Assinatura Eletrônica: toda assinatura digital (baseada em criptografia assimétrica/PKI) é uma assinatura eletrônica, mas nem toda assinatura eletrônica (ex.: desenho manuscrito em tablet, código SMS, aceite de botão) é uma assinatura digital criptográfica ICP-Brasil.'
    ],
    technicalReference: [
      'Assinatura Digital: Hash(Documento) cifrado com **Chave Privada do Remetente** -> garante Integridade + Autenticidade + Não Repúdio (NÃO confidencialidade)',
      'Hierarquia PKI: AC Raiz (Root CA) -> AC Intermediária -> Certificado Folha (X.509) | Revogação: CRL (lista baixada) vs OCSP (consulta em tempo real).'
    ],
    examTraps: [
      'Pegadinha clássica: assinar digitalmente um documento NÃO criptografa o documento para manter sigilo — qualquer pessoa pode ler o conteúdo original; se desejar sigilo também, é preciso criptografar o documento com a chave pública do destinatário (ou chave de sessão)!',
      'Na assinatura digital, cifra-se o **HASH** do documento (muito mais rápido) com a chave privada do remetente, e NÃO o documento inteiro diretamente com RSA.',
      'Navegadores modernos exigem o hostname no atributo **SAN (Subject Alternative Name)** do certificado TLS — emitir certificado interno colocando o domínio apenas no `CN` (Common Name) gera erro de certificado inválido (`ERR_CERT_COMMON_NAME_INVALID`).'
    ],
    keyTerms: ['Assinatura Digital (Hash + Chave Privada)', 'Certificado X.509 (SAN)', 'PKI / ICP-Brasil (AC / AR)', 'Cadeia de Confiança', 'CRL vs OCSP']
  },
  '13.1.5': {
    itemId: '13.1.5',
    highYieldSummary: [
      'Vírus vs Worm (Autopropagação): **Vírus** precisa infectar/anexar-se a um arquivo ou programa hospedeiro legítimo e exige **ação humana** para executar e se espalhar; **Worm (Verme)** é programa autônomo completo que explora vulnerabilidades de rede/serviço para se **autopropagar automaticamente** pela rede sem hospedeiro nem intervenção do usuário (ex.: WannaCry via SMB EternalBlue), consumindo banda e derrubando ambientes.',
      'Cavalo de Troia (Trojan) e Backdoor: **Trojan** disfarça-se de software legítimo ou útil (instalador pirata, falso boleto, utilitário) para enganar o usuário e executar carga maliciosa oculta sem autorreplicação típica de worm; **Backdoor** abre/mantém porta oculta ou acesso administrativo não autorizado contornando mecanismos normais de autenticação para retorno futuro do atacante.',
      'Ransomware: malware extorsivo que sequestra sistemas ou criptografa arquivos locais, mapeamentos de rede (SMB) e até backups acessíveis exigindo pagamento de resgate; ataques modernos praticam **dupla extorsão** (exfiltram dados sensíveis ANTES de criptografar para ameaçar vazamento público caso não paguem).',
      'Spyware e Keylogger: **Spyware** coleta silenciosamente informações de navegação, hábitos e dados corporativos sem consentimento; **Keylogger** captura especificamente cada tecla digitada pelo usuário (senhas bancárias, credenciais de VPN/AD) e envia ao atacante (junto de Screenloggers para teclados virtuais).',
      'Rootkit e Botnet: **Rootkit** altera componentes críticos do SO ou kernel/drivers para ocultar processos, arquivos e conexões maliciosas de ferramentas administrativas e antivírus; **Bot/Botnet** transforma máquinas comprometidas em "zumbis" controlados remotamente via C2 (Command & Control) para lançar ataques DDoS, envio de spam ou mineração.'
    ],
    technicalReference: [
      'Vírus: precisa de hospedeiro + ação humana | Worm: autônomo + autopropagação automática pela rede | Trojan: disfarce legítimo, não se replica sozinho',
      'Ransomware: bloqueio/criptografia + extorsão (+ exfiltração) | Keylogger: captura digitação | Backdoor: acesso oculto persistente.'
    ],
    examTraps: [
      'A diferença clássica mais cobrada em concursos é **Vírus vs Worm**: o Worm NÃO precisa infectar um arquivo hospedeiro nem esperar o usuário clicar para se espalhar pela rede — ele varre a rede e explora falhas autonomamente.',
      'Um Backdoor pode ser deixado por um Trojan/Worm ou até inserido propositalmente em código, permitindo acesso futuro mesmo após troca da senha legítima da porta frontal se o implante não for removido.',
      'Mapear compartilhamentos administrativos (`C$`, `\\\\fileserver\\dados`) com privilégio total na sessão do usuário facilita a propagação lateral imediata de ransomware pela rede.'
    ],
    keyTerms: ['Vírus vs Worm', 'Cavalo de Troia (Trojan)', 'Ransomware (Dupla Extorsão)', 'Spyware & Keylogger', 'Backdoor & Rootkit']
  },
  '13.1.6': {
    itemId: '13.1.6',
    highYieldSummary: [
      'Mecanismos de Detecção (Assinaturas vs Heurística/Comportamental): detecção por **Assinaturas** compara hashes/sequências de bytes de ameaças conhecidas (altíssima precisão e zero falso positivo, porém cega contra ameaças inéditas **Zero-Day** ou polimórficas); detecção **Heurística e Comportamental** analisa código suspeito, chamadas de API anômalas e padrões de execução (ex.: processo renomeando e cifrando milhares de arquivos em segundos).',
      'Evolução Antivírus Tradicional (EPP) para EDR (Endpoint Detection and Response): enquanto o AV clássico foca apenas na prevenção pré-execução (bloquear binário conhecido), o **EDR** grava telemetria contínua de processos, linha de comando, registro, rede e memória — detectando ataques **Fileless** ("Living off the Land" com PowerShell/WMI malicioso), permitindo isolamento instantâneo do host da rede e caça a ameaças (Threat Hunting).',
      'Sandbox e Análise Dinâmica: executa arquivos suspeitos desconhecidos em ambiente virtualizado isolado e instrumentado antes de entregá-los ao usuário final, observando alterações no sistema de arquivos, registro e tentativas de conexão C2 sem risco para a produção.',
      'Quarentena vs Exclusão (Exceção): enviar arquivo infectado para **Quarentena** move-o para área segura criptografada/renomeada impedindo execução, mas preservando-o para análise forense ou restauração caso seja falso positivo; criar **Exceções** excessivas (ex.: excluir `C:\\` ou `*.exe`) neutraliza o antivírus e deve ser auditado rigorosamente.',
      'Gestão Centralizada e Proteção Contra Adulteração (Tamper Protection): em ambiente corporativo, o agente AV/EDR reporta a console central com atualização automática de definições, bloqueio de desinstalação por usuários/atacantes locais (Tamper Protection) e integração com SIEM.'
    ],
    technicalReference: [
      'Assinatura (rápida, só ameaças conhecidas) vs Heurística/Comportamental (detecta Zero-Day e variantes polimórficas, mais risco de falso positivo)',
      'EPP (Prevenção estática/AV) + EDR (Telemetria contínua, detecção Fileless, contenção/isolamento remoto de endpoint).'
    ],
    examTraps: [
      'Antivírus puramente baseado em assinatura NÃO detecta ataques Zero-Day inéditos nem ataques **Fileless** que executam diretamente em memória usando ferramentas legítimas do Windows (`powershell.exe`, `certutil.exe`, `mshta.exe`) — exige análise comportamental/EDR.',
      'Desabilitar a proteção em tempo real ou adicionar pastas inteiras de usuários (`C:\\Users`) na lista de exceções para "melhorar desempenho" deixa o endpoint totalmente vulnerável a ransomware.',
      'Um servidor/estação sem conectividade para atualizar assinaturas há semanas torna-se cego às campanhas ativas — console central ou repositório proxy interno de updates é obrigatório em redes isoladas.'
    ],
    keyTerms: ['Assinaturas vs Heurística', 'EDR vs AV Tradicional (EPP)', 'Ataques Fileless', 'Sandbox & Quarentena', 'Tamper Protection']
  },
  '13.2.1': {
    itemId: '13.2.1',
    highYieldSummary: [
      'Hardening (Endurecimento de Sistemas): conjunto sistemático de ações para reduzir drasticamente a **superfície de ataque** de servidores, estações, bancos e equipamentos de rede removendo tudo que não for estritamente necessário ao propósito operacional daquele ativo.',
      'Guias de Referência (CIS Benchmarks e DISA STIGs): padrões consagrados com recomendações auditáveis por sistema operacional (Windows Server, RHEL/Ubuntu, Kubernetes, bancos) divididos por nível (Level 1 operacional padrão vs Level 2 alta segurança).',
      'Ações Práticas Essenciais de Hardening: desinstalar pacotes/softwares não usados, desabilitar serviços e portas desnecessárias (Telnet, FTP, SMBv1, Print Spooler em Domain Controllers!), renomear/desabilitar contas padrão, impor complexidade de senhas/bloqueio, configurar firewall host-based e desabilitar módulos/banners informativos.',
      'Gestão de Patches (Patch Management): processo contínuo de inventário -> avaliação de criticidade/CVSS -> teste em homologação -> implantação priorizada (emergencial para falhas críticas exploradas ativamente) -> verificação pós-aplicação, fechando vulnerabilidades conhecidas antes da exploração.',
      'Imutabilidade e Baseline de Configuração (DSC / GPO / Ansible): garantir continuamente via GPO ou automação (Compliance/Drift Detection) que configurações endurecidas não sejam relaxadas manualmente ao longo do tempo.'
    ],
    technicalReference: [
      'Objetivo do Hardening: Minimizar Superfície de Ataque ("o que não roda não pode ser explorado")',
      'Ciclo de Patching: Descoberta -> Priorização (CVSS + exposição) -> Homologação/Snapshot -> Implantação -> Validação.'
    ],
    examTraps: [
      'Instalar antivírus ou colocar firewall na borda NÃO substitui Hardening local do sistema operacional (serviços desnecessários como SMBv1 ou contas padrão sem senha continuam exploráveis lateralmente dentro da rede).',
      'Aplicar patches críticos cegamente em produção sem snapshot/backup prévio ou janela planejada pode derrubar aplicações incompatíveis; porém adiar patches de alta severidade indefinidamente por medo de reboot expõe o ambiente a worms/ransomware conhecidos.',
      'Hardening não é evento único na instalação — exige reavaliação contínua após mudanças e atualizações.'
    ],
    keyTerms: ['Hardening (Superfície de Ataque)', 'CIS Benchmarks', 'Remoção de Serviços/Portas', 'Patch Management', 'Configuration Drift']
  },
  '13.2.2': {
    itemId: '13.2.2',
    highYieldSummary: [
      'IAM (Identity and Access Management): ciclo de vida completo das identidades (IAAA — Identificação, Autenticação, Autorização e Auditoria/Accountability) cobrindo provisionamento na contratação, movimentação de cargo (revisão de acessos — evitando acúmulo de privilégios "privilege creep") e desprovisionamento imediato no desligamento (revogação em AD, VPN, e-mail, nuvem).',
      'Modelos de Controle de Acesso (RBAC, DAC, MAC, ABAC): **DAC** (Discretionary: o dono do arquivo define permissões — ex.: NTFS/UNIX padrão), **MAC** (Mandatory: rótulos rígidos de classificação impostos pelo sistema sem o usuário poder alterar — ex.: SELinux/militar), **RBAC** (Role-Based: permissões vinculadas a papéis/funções organizacionais em grupos, padrão corporativo!) e **ABAC** (Attribute-Based: avalia atributos dinâmicos como cargo + hora + país + dispositivo).',
      'PAM (Privileged Access Management — Gestão de Acessos Privilegiados): protege contas de poder máximo (`Domain Admin`, `root`, senhas de bancos/firewalls/hypervisors) via cofre de senhas com rotação automática após uso (just-in-time / checkout), gravação integral de sessões RDP/SSH e eliminação de uso diário de contas admin comuns.',
      'Revisão Periódica de Acessos (Recertificação): gestores de áreas de negócio e segurança auditam periodicamente (trimestral/semestral) quem possui acesso a sistemas críticos e grupos privilegiados para podar permissões herdadas obsoletas.',
      'Segregação de Contas Administrativas (Tiering): administradores devem possuir uma conta comum padrão para e-mail/navegação/Teams e uma conta administrativa separada EXCLUSIVA para tarefas de administração em servidores seguros (nunca ler e-mail ou navegar na web logado como Domain Admin!).'
    ],
    technicalReference: [
      'Modelos: DAC (dono decide) | MAC (sistema/rótulos mandatórios impõem, ex.: SELinux) | RBAC (papéis/cargos — padrão corporativo) | ABAC (atributos contextuais dinâmicos)',
      'PAM: Cofre de Credenciais + Rotação Automática + Acesso Just-in-Time (JIT) + Gravação de Sessão.'
    ],
    examTraps: [
      'Diferença clássica em concursos: no **DAC** (Discretionary) o proprietário do recurso decide quem acessa e pode repassar permissões; no **MAC** (Mandatory) uma política central baseada em rótulos/níveis impede até o dono do arquivo de compartilhá-lo fora do nível permitido.',
      'Logar na estação de trabalho diária (que acessa internet e lê e-mail) com conta `Domain Admin` deixa o hash NTLM / ticket Kerberos residente em memória (`LSASS`) pronto para ser roubado por malware (Pass-the-Hash / Kerberoasting).',
      'Esquecer de revogar tokens/chaves de API ou contas VPN quando um colaborador é desligado mantém acesso ativo mesmo com a conta local da estação desabilitada.'
    ],
    keyTerms: ['IAM (Provisionamento/Revogação)', 'RBAC vs DAC vs MAC vs ABAC', 'PAM (Cofre / JIT / Sessão)', 'Revisão Periódica (Privilege Creep)', 'Tiering Administrativo']
  },
  '13.2.3': {
    itemId: '13.2.3',
    highYieldSummary: [
      'Princípio do Menor Privilégio (Least Privilege): todo usuário, administrador, processo, script ou conta de serviço deve receber EXCLUSIVAMENTE o conjunto mínimo de permissões e pelo menor tempo necessário para executar sua tarefa legítima — limitando o raio de explosão (blast radius) caso a conta seja comprometida.',
      'Need-to-Know (Necessidade de Conhecer): complemento voltado à confidencialidade segundo o qual, mesmo tendo autorização de nível hierárquico equivalente, o usuário só acessa dados e documentos específicos indispensáveis ao seu trabalho atual.',
      'Separação de Funções (Segregation of Duties — SoD): divide etapas críticas entre duas ou mais pessoas/papéis distintos para impedir fraude interna ou erro unilateral catastrófico (ex.: quem solicita criação de acesso/mudança em produção NÃO é quem aprova nem quem audita os logs; em PKI/bancos exige quórum M-de-N).',
      'Aplicação Prática em Infraestrutura (Contas de Serviço e Sudo/JEA): serviços de aplicação NÃO devem rodar como `root` ou `LocalSystem/Domain Admin` — usar contas dedicadas restritas (gMSA no AD ou usuários sem login Linux); no Linux conceder `sudo` apenas para comandos específicos em vez de `ALL=(ALL) ALL`.',
      'Princípio da Negação Padrão (Fail-Safe Defaults / Default Deny): políticas de firewall, ACLs de rede e RBAC devem iniciar bloqueando tudo (`Deny All`) e liberar explicitamente apenas portas, origens e ações autorizadas.'
    ],
    technicalReference: [
      'Menor Privilégio (mínimo de poder para agir) | Need-to-Know (mínimo de informação sensível vista) | Separação de Funções / SoD (ninguém controla ponta-a-ponta sozinho)',
      'Aplicação técnica: Default Deny + Contas de Serviço gMSA sem Domain Admin + `sudo` granular.'
    ],
    examTraps: [
      'Conceder privilégio de `Domain Admin` a uma conta de serviço de backup, Zabbix ou aplicação web apenas porque "foi mais rápido e resolveu o erro de permissão" viola frontalmente o Menor Privilégio e cria risco crítico de domínio total.',
      'Separação de Funções (SoD) existe principalmente para prevenir **fraudes internas e colusão/erros críticos sem revisão** (um administrador de sistema não deve ter poder de apagar ou editar os próprios logs no SIEM!).',
      'Confundir Menor Privilégio (foco em *o que você pode executar/alterar*) com Need-to-Know (foco em *quais dados confidenciais você tem necessidade de visualizar*).'
    ],
    keyTerms: ['Least Privilege (Menor Privilégio)', 'Need-to-Know', 'Separação de Funções (SoD)', 'Default Deny', 'Contas de Serviço / gMSA']
  },
  '13.2.4': {
    itemId: '13.2.4',
    highYieldSummary: [
      'Métodos Modernos de Segundo Fator (Hierarquia de Segurança): SMS/Chamada de voz (mais fraco — vulnerável a interceptação SS7 e SIM Swapping), Push simples ("Aprove este login" — vulnerável a MFA Fatigue / Prompt Bombing se sem Number Matching), TOTP (código temporário de 6 dígitos a cada 30s baseado em RFC 6238 via app Authenticator — imune a SIM swap, porém ainda suscetível a phishing proxy em tempo real Adversary-in-the-Middle) e **FIDO2 / WebAuthn / Passkeys** (mais forte!).',
      'FIDO2 / WebAuthn / Hardware Tokens (YubiKey): utilizam criptografia assimétrica vinculada criptograficamente à origem exata do domínio (`Origin Binding`) no navegador/SO; mesmo se o usuário clicar num site de phishing idêntico (`empresa-login.com` falso), o token recusa assinar o desafio — é **phishing-resistant MFA**!',
      'TOTP (Time-based One-Time Password — RFC 6238) vs HOTP: TOTP deriva código usando segredo compartilhado (`seed`) + timestamp atual em janelas de 30 segundos (exige relógio sincronizado via NTP entre servidor e celular); HOTP baseia-se em contador incremental.',
      'Mitigação contra MFA Fatigue (Prompt Bombing): substituir notificações push cegas de "Sim/Não" por **Number Matching** (usuário precisa digitar no app o número exibido na tela de login) e exibição de localização/aplicação antes de aprovar.',
      'Onde Exigir MFA Obrigatoriamente: TODO acesso remoto VPN SSL/IPsec, acesso administrativo (portais nuvem, PAM, firewalls, hypervisors), Webmail/OWA e contas privilegiadas — combinado com políticas de Acesso Condicional (risco de IP/país anômalo e saúde do dispositivo).'
    ],
    technicalReference: [
      'Ranking de resistência MFA: SMS (fraco: SIM swap) < Push simples (vulnerável a Fadiga MFA) < TOTP (RFC 6238, janela 30s) < Push c/ Number Matching < **FIDO2 / WebAuthn / Smartcard (Phishing-Resistant)**',
      'TOTP exige sincronismo NTP rigoroso entre servidor autenticador e dispositivo móvel.'
    ],
    examTraps: [
      'Mesmo usuários protegidos por **TOTP (app Authenticator)** ou **Push** ainda podem ter sua sessão roubada por proxy reverso malicioso de phishing em tempo real (AiTM — Evilginx); somente **FIDO2/WebAuthn** ou autenticação mútua por certificado de cliente bloqueiam phishing por vinculação de origem.',
      'SMS não deve ser usado como único método de MFA em acessos críticos corporativos devido a ataques de **SIM Swapping** (portabilidade fraudulenta do número na operadora).',
      'Se o servidor de autenticação MFA estiver com relógio atrasado/adiantado em vários minutos sem NTP, todos os códigos TOTP válidos dos usuários serão rejeitados.'
    ],
    keyTerms: ['TOTP (RFC 6238)', 'FIDO2 / WebAuthn (Phishing-Resistant)', 'Hardware Token / Smartcard', 'MFA Fatigue & Number Matching', 'SIM Swapping']
  },
  '13.2.5': {
    itemId: '13.2.5',
    highYieldSummary: [
      'Ciclo de Vida de Certificados Digitais: Geração do par de chaves + CSR (Certificate Signing Request contendo chave pública e nomes `SAN`) -> Validação e Assinatura pela CA -> Distribuição/Instalação (`.cer`/`.crt`/`.pem`/`.pfx` PKCS#12 com chave privada protegida por senha) -> Monitoramento de expiração -> Renovação antecipada (ou automação ACME) -> Revogação imediata se a chave privada vazar.',
      'Revogação em Caso de Comprometimento (**CRL** vs **OCSP** vs **OCSP Stapling**): **CRL** (Certificate Revocation List — arquivo assinado periodicamente pela CA baixado pelo cliente com todos os seriais revogados; pode ficar grande e ter latência até o próximo ciclo de publicação); **OCSP** (Online Certificate Status Protocol — consulta em tempo real por HTTP à CA se o serial específico é `good`, `revoked` ou `unknown`; expõe privacidade de navegação e depende da disponibilidade do responder OCSP); **OCSP Stapling** (o próprio servidor web busca a resposta OCSP assinada com timestamp recente e a "grampeia" no handshake TLS, unindo rapidez e privacidade!).',
      'Cadeia de Confiança Completa (Intermediate CAs): servidores web/AD/VPN devem enviar no handshake o certificado folha + toda a cadeia de ACs Intermediárias (Full Chain); omitir a AC Intermediária faz navegadores/clientes API falharem ao validar a confiança até a AC Raiz instalada no Trust Store.',
      'Automação de Renovação (ACME / Certbot / AD CS Autoenrollment): expiração inesperada de certificados é uma das maiores causas de indisponibilidade crítica em produção; protocolo ACME (Let\'s Encrypt / CAs corporativas) e AD CS Autoenrollment renovam automaticamente antes do vencimento.',
      'Proteção da Chave Privada: arquivos `.key` ou `.pfx` exportáveis permitem que qualquer invasor impersonifique o servidor ou decifre sessões (sem PFS); sempre marcar chaves críticas como não-exportáveis quando possível (ou armazenar em HSM/TPM) e definir permissões restritas.'
    ],
    technicalReference: [
      'Formatos comuns: `.pem`/`.crt`/`.key` (ASCII Base64 `-----BEGIN...`) | `.der` (binário) | `.pfx`/`.p12` (PKCS#12: certificado + cadeia + chave privada protegida por senha)',
      'Revogação: CRL (lista periódica offline) | OCSP (consulta online) | OCSP Stapling (servidor web entrega resposta OCSP assinada no handshake TLS).'
    ],
    examTraps: [
      'Esquecer de instalar/servir o **Certificado Intermediário** junto ao certificado do site faz alguns navegadores (que já tinham cache) funcionarem, enquanto clientes Linux, APIs `curl`, Java e celulares rejeitam a conexão por "Untrusted / Incomplete Chain".',
      'Um certificado revogado antes do prazo de validade continuará sendo aceito se o cliente não consultar CRL/OCSP (ou estiver configurado em modo soft-fail quando o OCSP responder está inacessível).',
      'Renovar um certificado TLS no balanceador/firewall antes do vencimento exige atenção especial à compatibilidade dos algoritmos (ex.: SHA-256, nunca SHA-1) e nomes exatos no campo SAN.'
    ],
    keyTerms: ['Ciclo de Vida & CSR', 'Cadeia de Confiança (Root/Intermediária)', 'CRL vs OCSP vs OCSP Stapling', 'PKCS#12 (.pfx) / PEM', 'Renovação / ACME']
  },
  '13.2.6': {
    itemId: '13.2.6',
    highYieldSummary: [
      'CVE (Common Vulnerabilities and Exposures) e CWE: **CVE** (mantido pela MITRE/NVD, formato `CVE-ANO-NÚMERO`) é o catálogo padronizado mundial para identificar univocamente cada vulnerabilidade específica conhecida em softwares/hardwares; **CWE** categoriza o tipo abstrato de fraqueza de programação/design (ex.: Buffer Overflow, SQL Injection).',
      'CVSS (Common Vulnerability Scoring System): escala padronizada de **0,0 a 10,0** (Baixa 0.1–3.9, Média 4.0–6.9, Alta 7.0–8.9, Crítica 9.0–10.0) composta por métricas **Base** (características intrínsecas de explorabilidade/impacto — AV:Network, AC:Low, PR:None, UI:None), **Temporal/Threat** (existência de exploit público/patch) e **Ambiental** (importância do ativo e controles mitigadores no seu ambiente específico).',
      'Scan de Vulnerabilidades vs Teste de Intrusão (Pentest): **Vulnerability Scan** (Nessus, OpenVAS, Qualys — autenticado ou não autenticado) é automatizado e amplo para mapear CVEs conhecidas, portas abertas e configurações fracas sem explorar destrutivamente; **Pentest** combina criatividade humana para encadear falhas e comprovar impacto real de exploração.',
      'Scan Autenticado vs Não Autenticado: scan **autenticado** (logando via SSH/WinRM/SNMP com credencial de leitura) enxerga pacotes locais, versões exatas de bibliotecas e chaves de registro sem falsos negativos — muito superior ao scan cego apenas pela rede.',
      'Gestão e Remediação Baseada em Risco: quando uma CVE crítica não possui patch imediato do fabricante (ou sistema legado não aceita atualização sem quebrar), aplicam-se **controles compensatórios** (Virtual Patching no WAF/IPS, segmentação rigorosa em VLAN isolada, restrição de acesso por ACL/VPN) reduzindo a exposição prática.'
    ],
    technicalReference: [
      'Severidade CVSS v3/v4: `0.0` None | `0.1–3.9` Low | `4.0–6.9` Medium | `7.0–8.9` High | `9.0–10.0` Critical',
      'CVE (identificador único de falha específica) vs CVSS (pontuação de gravidade 0–10) | Scan Autenticado > Não Autenticado.'
    ],
    examTraps: [
      'Pontuação CVSS Base **9.8** em um servidor isolado em rede de laboratório offline sem conectividade apresenta risco ambiental muito menor que uma falha CVSS **7.5** exposta diretamente à internet com exploit público ativo (Kev/EPSS)!',
      'Vulnerability Scanner apenas IDENTIFICA e reporta possíveis vulnerabilidades (com eventuais falsos positivos); ele NÃO substitui um Pentest nem corrige automaticamente as falhas.',
      'Rodar scan de vulnerabilidades apenas externo (unauthenticated) deixa passar centenas de falhas em softwares clientes, drivers e bibliotecas internas só visíveis via scan autenticado.'
    ],
    keyTerms: ['CVE (Identificador)', 'CVSS (Escala 0–10)', 'Scan Autenticado vs Rede', 'Pentest vs Vulnerability Scan', 'Controles Compensatórios']
  },
  '13.2.7': {
    itemId: '13.2.7',
    highYieldSummary: [
      'Segmentação Tradicional (VLANs + Sub-redes + ACLs/Firewalls) e DMZ: divide a rede plana em zonas de confiança distintas (Usuários, Servidores Internos, Banco de Dados, Gerência OOB, Visitantes, IoT) com **DMZ (Zona Desmilitarizada)** isolando serviços expostos à internet para que um servidor web comprometido não acesse livremente a LAN interna.',
      'Microssegmentação: leva o isolamento para dentro do próprio data center / nuvem até o nível de **workload individual** (por VM, container ou host-based firewall/SDN), controlando tráfego **Leste-Oeste** (entre servidores na mesma VLAN/sub-rede!) e impedindo movimentação lateral de atacantes e worms.',
      'Arquitetura Zero Trust (NIST SP 800-207 — "Never Trust, Always Verify"): abandona o modelo antigo de "castelo e fosso" (onde quem está na LAN interna ou conectado na VPN tem confiança implícita); exige verificação explícita contínua de identidade + postura do dispositivo + menor privilégio a cada requisição, aplicando acesso por aplicativo/serviço em vez de liberar a rede inteira.',
      'Isolamento da Rede de Gerenciamento (Out-of-Band / OOB): interfaces de gerência (iDRAC/iLO, switches, hipervisores, consoles de storage e backup) devem residir em VLAN dedicada inacessível da rede de usuários comuns, acessada apenas via Jump Host/Bastion com MFA.',
      'Private VLANs (PVLANs) e Air-Gap Lógico: em redes de visitantes, DMZs compartilhadas ou IoT médico, PVLANs (`Isolated` / `Community` / `Promiscuous`) impedem comunicação direta entre hosts vizinhos na mesma sub-rede L2 obrigando passagem pelo gateway/firewall.'
    ],
    technicalReference: [
      'Tráfego Norte-Sul (cliente externo <-> DC via DMZ/borda) vs Tráfego Leste-Oeste (servidor <-> servidor interno — alvo da Microssegmentação)',
      'Zero Trust: "Nunca confie, sempre verifique" — substitui confiança implícita por localização na LAN/VPN por verificação dinâmica contínua (identidade + postura + contexto).'
    ],
    examTraps: [
      'Apenas criar VLANs diferentes em um switch L3 ou ativar roteamento entre VLANs sem aplicar ACLs ou Firewall entre elas dá apenas segmentação de broadcast L2, ZERO isolamento real de segurança L3.',
      'Firewalls tradicionais de perímetro (Norte-Sul) NÃO enxergam nem bloqueiam um servidor comprometido atacando outro servidor na mesma VLAN interna (movimento lateral Leste-Oeste) — isso exige **Microssegmentação**.',
      'Na arquitetura **Zero Trust**, estar fisicamente plugado na rede cabeada interna ou autenticado na VPN tradicional NÃO concede confiança automática aos recursos internos.'
    ],
    keyTerms: ['Segmentação (VLAN/DMZ)', 'Microssegmentação (Leste-Oeste)', 'Zero Trust (NIST 800-207)', 'Movimento Lateral', 'Gerência OOB / Bastion']
  },
  '13.2.8': {
    itemId: '13.2.8',
    highYieldSummary: [
      'OPSEC (Segurança Operacional) em Infraestrutura: disciplina contínua de proteger procedimentos, rotinas administrativas, configurações, credenciais de suporte e informações operacionais do ambiente contra exposição (ex.: não vazar topologias/IPs internos em repositórios públicos GitHub, fóruns ou assinaturas de erro HTTP verbose).',
      'Auditoria e Trilhas Imutáveis: registrar obrigatoriamente eventos críticos (logons falhos/bem-sucedidos, alterações em grupos privilegiados, criação de contas, mudanças de GPO/firewall, execução `sudo`/PowerShell ScriptBlock Logging), sincronizados via NTP e enviados em tempo real para coletor centralizado/SIEM onde o próprio administrador local não possa apagar.',
      'Monitoramento Contínuo de Segurança (SOC / SIEM / Detecção de Anomalias): correlação de logs de firewall, AD, EDR, proxies e servidores para identificar Indicadores de Comprometimento (IoCs — IPs C2 maliciosos, hashes) e Indicadores de Ataque/Comportamento (IoAs — execução de `whoami`/`nltest`, despejo LSASS, criação de contas às 03h da manhã, exfiltração DNS/HTTPS anômala).',
      'Gestão Segura de Configurações e Mudanças: proibir credenciais compartilhadas (`admin` genérico usado por toda equipe), exigir aprovação de mudanças em segurança e realizar verificações periódicas de integridade de arquivos críticos (FIM — File Integrity Monitoring).',
      'Resposta e Contenção Operacional Rápida: manter playbooks claros e ensaiados para compromissos comuns (phishing com roubo de sessão -> revogar tokens/sessões ativas + resetar senha + checar regras de encaminhamento no Exchange/M365; ransomware -> isolar host via EDR/NAC sem desligar abruptamente preservando evidências em RAM se aplicável).'
    ],
    technicalReference: [
      'OPSEC: Proteger segredos operacionais + eliminar contas compartilhadas + proibir vazamento em logs/Git/erros',
      'Logs Críticos no AD/Windows: Event IDs `4624/4625` (logon ok/falho), `4720` (criou usuário), `4728/4732` (adicionou em grupo admin), `1102` (limpou log de auditoria!).'
    ],
    examTraps: [
      'Manter logs de segurança gravados APENAS no próprio servidor auditado viola auditoria íntegra — a primeira ação de um invasor após escalar privilégio é limpar o Event Log / `/var/log`; envio remoto em tempo real para SIEM protege a evidência.',
      'Event ID `1102` (Windows) ou truncamento de `/var/log/auth.log` é alerta de altíssima prioridade indicando possível tentativa de apagar rastros de invasão.',
      'Permitir que múltiplos analistas usem uma mesma conta `admin_infra` compartilhada destrói a **Accountability** (rastreabilidade individual em auditoria).'
    ],
    keyTerms: ['OPSEC', 'Auditoria & Accountability', 'SIEM & Correlação Contínua', 'IoC vs IoA', 'FIM / Contenção Operacional']
  }
};
