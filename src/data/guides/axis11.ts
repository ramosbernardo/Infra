import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_11: Record<string, StudyGuide> = {
  '11.1.1': {
    itemId: '11.1.1',
    highYieldSummary: [
      'Sequência Completa de Boot no Linux: Firmware (BIOS ou UEFI com partição ESP em `/boot/efi` e GPT) -> Bootloader (GRUB2 carregado do MBR ou ESP, lê `/boot/grub2/grub.cfg` ou `/boot/grub/grub.cfg`) -> Kernel Linux (`vmlinuz`) + `initramfs`/`initrd` (carrega drivers essenciais de disco/LVM/RAID para montar o root `/`) -> Processo PID 1 (`systemd` em `/sbin/init`, que inicia `default.target` e serviços).',
      'Configuração e Manutenção do GRUB2: edições persistentes são feitas em `/etc/default/grub` (ex.: `GRUB_TIMEOUT`, `GRUB_CMDLINE_LINUX` com parâmetros de kernel) e compiladas no arquivo final via `update-grub` (Debian/Ubuntu) ou `grub2-mkconfig -o /boot/grub2/grub.cfg` (RHEL/Rocky/Alma — nunca editar `grub.cfg` diretamente).',
      'Gerenciamento de Kernel e Módulos: `uname -r` exibe a versão em execução; módulos carregáveis do kernel (`.ko`) são inspecionados com `lsmod`, detalhados com `modinfo`, carregados com resolução automática de dependências via `modprobe` (preferível ao `insmod`) e descarregados com `modprobe -r` ou `rmmod`; parâmetros dinâmicos em tempo de execução são ajustados via `sysctl` (`/etc/sysctl.conf` ou `/etc/sysctl.d/*.conf`).',
      'Gerenciamento de Pacotes (Família Debian vs Família Red Hat): Debian/Ubuntu utilizam pacotes `.deb` com `dpkg` (baixo nível, sem resolver dependências externas) e `apt` / `apt-get` (repositórios em `/etc/apt/sources.list` e `sources.list.d/`); RHEL/Rocky/Alma/Fedora utilizam pacotes `.rpm` com `rpm` (baixo nível) e `dnf` / `yum` (repositórios em `/etc/yum.repos.d/`).',
      'Particionamento de Instalação e Boas Práticas: separar `/boot` (e `/boot/efi`), `/`, `/var` (evita que crescimento descontrolado de logs/bancos trave o SO raiz `/`), `/home` e `swap` utilizando LVM para flexibilidade futura e sistemas de arquivos journaling (`ext4` ou `xfs`).'
    ],
    technicalReference: [
      'Boot: BIOS/UEFI -> GRUB2 (`/etc/default/grub`) -> Kernel (`vmlinuz`) + `initramfs` -> PID 1 (`systemd`)',
      'Pacotes: Debian (`apt update && apt upgrade` | `dpkg -i` / `dpkg -l`) | RHEL (`dnf update` | `rpm -qa` / `rpm -qf /caminho/arquivo`).'
    ],
    examTraps: [
      'Após alterar `/etc/default/grub`, a mudança NÃO entra em vigor no próximo boot até executar `update-grub` (Debian) ou `grub2-mkconfig` (RHEL).',
      '`insmod` exige caminho completo do arquivo `.ko` e FALHA se faltarem módulos dependentes; `modprobe` resolve automaticamente dependências declaradas em `modules.dep`.',
      'Instalar um arquivo local via `dpkg -i pacote.deb` ou `rpm -ivh pacote.rpm` não baixa dependências faltantes da internet — usando `apt install ./pacote.deb` ou `dnf install ./pacote.rpm` o gerenciador resolve dependências automaticamente.'
    ],
    keyTerms: ['Boot (UEFI/GRUB2/initramfs)', 'Kernel & modprobe/sysctl', 'apt / dpkg (.deb)', 'dnf / rpm (.rpm)', 'Particionamento /var & LVM']
  },
  '11.1.2': {
    itemId: '11.1.2',
    highYieldSummary: [
      'Padrão FHS (Filesystem Hierarchy Standard): árvore única invertida iniciando em `/` (raiz), onde até partições separadas e dispositivos são integrados por pontos de montagem sem letras de unidade (`C:`, `D:`).',
      'Diretórios Críticos de Sistema e Configuração: `/bin` e `/sbin` (comandos essenciais de usuário e superusuário — em distros modernas são links simbólicos para `/usr/bin` e `/usr/sbin`), `/boot` (kernel `vmlinuz`, `initramfs`, GRUB), `/etc` (TODOS os arquivos estáticos de configuração do sistema — sem binários!), `/lib` e `/lib64` (bibliotecas compartilhadas essenciais e módulos em `/lib/modules`).',
      'Diretórios de Dados Variáveis, Terceiros e Temporários: `/var` (dados variáveis em constante mudança: `/var/log`, filas de e-mail, cache, bancos de dados, `/var/www`), `/opt` (softwares opcionais/proprietários de terceiros em pacotes autocontidos), `/usr` (aplicações e utilitários secundários multiusuário somente leitura), `/tmp` e `/var/tmp` (arquivos temporários — `/tmp` costuma usar Sticky Bit `1777` e ser limpo no reboot).',
      'Diretórios Virtuais e de Usuários: `/proc` (`procfs` — interface virtual em memória expondo estado do kernel e diretórios por PID `/proc/<pid>`, nunca ocupa disco real!), `/sys` (`sysfs` — árvore de dispositivos e drivers do kernel), `/dev` (`devtmpfs` — arquivos especiais de dispositivo de bloco `/dev/sda`, `/dev/nvme0n1` e caractere `/dev/null`, `/dev/tty`), `/root` (home exclusivo do superusuário) e `/home` (diretórios pessoais dos usuários comuns).',
      'Pontos de Montagem (`/mnt` e `/media`): `/media` recebe montagens automáticas de mídias removíveis (USB/DVD) pelo gerenciador de desktop/udev; `/mnt` é reservado para montagens temporárias manuais feitas pelo administrador.'
    ],
    technicalReference: [
      'Essenciais FHS: `/etc` (configs) | `/var` (logs/filas/dados dinâmicos) | `/usr` (binários/libs instaladas) | `/opt` (apps terceiros) | `/root` (home do root)',
      'Sistemas de arquivos virtuais (em RAM, 0 bytes em disco): `/proc` (processos/kernel), `/sys` (hardware/sysfs), `/dev` (dispositivos).'
    ],
    examTraps: [
      'Pegadinha clássica: `/root` NÃO é a raiz do sistema de arquivos! A raiz é `/` e `/root` é apenas o diretório home pessoal do usuário `root`.',
      '`/proc` e `/sys` NÃO são armazenados no HD/SSD — são criados em memória pelo kernel em tempo de execução; portanto copiar `/proc` em backup ou tentar deletar arquivos lá dentro gera erros/loops infinitos.',
      'Diferença entre `/bin` e `/sbin`: `/bin` traz utilitários básicos para todos os usuários (`ls`, `cp`, `cat`), enquanto `/sbin` concentra comandos administrativos do sistema (`fdisk`, `fsck`, `iptables`, `reboot`).'
    ],
    keyTerms: ['FHS', '/etc vs /var vs /usr vs /opt', '/proc e /sys (virtuais)', '/dev (bloco/caractere)', '/root vs / (raiz)']
  },
  '11.1.3': {
    itemId: '11.1.3',
    highYieldSummary: [
      'Arquivos de Identidade (`/etc/passwd`, `/etc/shadow`, `/etc/group`, `/etc/gshadow`): `/etc/passwd` (legível por todos, 7 campos separados por `:` — `usuário:x:UID:GID:GECOS:home:shell` — onde `x` indica senha delegada ao shadow); `/etc/shadow` (acesso restrito ao root, guarda hashes de senha com algoritmo/salt ex. `$6$` SHA-512 ou `$y$` yescrypt e políticas de expiração).',
      'UIDs e GIDs (Identificadores Numéricos): o kernel identifica permissões EXCLUSIVAMENTE por números (`UID` e `GID`), não por nomes; `UID 0` = `root` (poder total), UIDs de sistema (1–999 em distros modernas como RHEL/Debian para daemons como `nginx`, `www-data`), UIDs de usuários comuns (>= 1000).',
      'Comandos de Gestão de Contas e Grupos: `useradd` / `adduser` (cria usuário; `-m` cria home, `-s` define shell como `/sbin/nologin` para contas de serviço, `-G` adiciona grupos suplementares), `usermod` (`-aG` acrescenta grupo suplementar SEM apagar os atuais!), `userdel -r` (remove usuário + home), `groupadd`, `passwd` e `chage` (validade de senha).',
      'Elevação de Privilégios (`su` vs `sudo`): `su - usuario` troca de usuário pedindo a senha DO DESTINO (com `-` carrega variáveis de ambiente e diretório home do destino); `sudo` executa comandos como root (ou outro usuário) pedindo a senha DO PRÓPRIO USUÁRIO autorizado no `/etc/sudoers`, gerando trilha de auditoria detalhada por usuário.',
      'Edição Segura do `/etc/sudoers`: SEMPRE utilizar `visudo` (ou arquivos modulares em `/etc/sudoers.d/`), pois o `visudo` valida a sintaxe antes de salvar impedindo que um erro de digitação bloqueie o acesso administrativo `sudo` de toda a máquina.'
    ],
    technicalReference: [
      '`/etc/passwd`: `user:x:UID:GID:comment:home:shell` (legível 644) | `/etc/shadow`: hashes e expiração (restrito 640/000 root)',
      'Pegadinha vital: `usermod -aG docker joao` (ADICIONA grupo mantendo os antigos); `usermod -G docker joao` SEM `-a` REMOVE todos os outros grupos suplementares!'
    ],
    examTraps: [
      'Executar `usermod -G novo_grupo usuario` esquecendo o parâmetro `-a` (`--append`) retira o usuário de todos os grupos suplementares anteriores (como `sudo`/`wheel`), podendo trancar o administrador fora do `sudo`.',
      'Editar `/etc/sudoers` diretamente com `vi`/`nano` em vez de `visudo` pode salvar erro de sintaxe e quebrar completamente o comando `sudo` no servidor.',
      'Em `/etc/passwd`, o shell `/sbin/nologin` (ou `/bin/false`) impede login interativo de contas de serviço/daemons mantendo a conta utilizável para executar processos.'
    ],
    keyTerms: ['/etc/passwd vs /etc/shadow', 'UID 0 (root) / GID', 'usermod -aG', 'su vs sudo / visudo', '/etc/group']
  },
  '11.2.1': {
    itemId: '11.2.1',
    highYieldSummary: [
      'Monitoramento Interativo de CPU/Memória (`top`, `htop`, `vmstat`, `uptime`): `top`/`htop` exibem processos em tempo real, `%us`, `%sy`, `%wa` (iowait), `%st` (steal), Load Average e permitem ordenar por CPU (`P`) ou Memória (`M`) ou enviar sinal (`k`); `uptime` e `w` mostram há quanto tempo o host está ligado, usuários logados e Load Average (1m, 5m, 15m).',
      'Uso de Memória (`free -h`): mostra `total`, `used`, `free`, `shared`, `buff/cache` e `available`; a coluna `available` (e NÃO `free`) indica quanta memória está realmente disponível para novas aplicações sem provocar swapping, pois buffers e page cache são liberados automaticamente pelo kernel quando preciso.',
      'Espaço em Disco (`df -h` / `df -i`) vs Uso de Diretórios (`du -sh`): `df` consulta superblocos de partições montadas (`-h` formato legível, `-T` tipo do filesystem, `-i` uso de INODES — partição com espaço em GB livre pode dar "No space left on device" se atingir 100% dos inodes!); `du -sh *` soma o tamanho real ocupado pelos arquivos dentro das pastas.',
      'Informações de Sistema e Hardware (`uname`, `lscpu`, `lsblk`, `dmidecode`): `uname -a` (ou `-r`) revela arquitetura e versão do kernel; `lscpu` exibe sockets, cores e threads; `lsblk` lista discos, partições, volumes LVM e pontos de montagem em árvore; `dmesg` lê mensagens do ring buffer do kernel (erros de hardware/driver/OOM).',
      'Divergência Clássica `df` vs `du` (Arquivos Deletados Ainda Abertos): quando um log gigante de 50 GB é apagado via `rm` enquanto o serviço (ex.: Apache/Java) ainda mantém o descritor de arquivo aberto, o `du` para de enxergá-lo imediatamente mas o `df` continua acusando disco cheio até o processo ser reiniciado ou o descritor liberado (`lsof +L1` encontra esses arquivos deletados).'
    ],
    technicalReference: [
      'Disco cheio mesmo com GB livres: checar `df -i` (exaustão de inodes por milhões de arquivos pequenos)',
      'Disco cheio no `df -h` que não aparece no `du -sh`: arquivo apagado mantido aberto por processo -> localizar com `lsof +L1` (ou `lsof | grep deleted`).'
    ],
    examTraps: [
      'Confundir `free` com `available` na saída do comando `free -h`: ver `free = 200 MB` em servidor de 32 GB com `buff/cache = 20 GB` e `available = 21 GB` é NORMAL e saudável no Linux.',
      '`rm` em log em uso libera a entrada no diretório (`du`), mas os blocos no disco só são liberados quando o último processo fecha o file descriptor — por isso prefira truncar com `: > arquivo.log` (ou `truncate -s 0`) e usar `logrotate` com `copytruncate`/`postrotate reload`.',
      '`df` trabalha por sistema de arquivos montado; `du` percorre recursivamente diretórios somando blocos alocados.'
    ],
    keyTerms: ['top / htop / uptime', 'free -h (available vs free)', 'df -h / df -i (inodes)', 'du -sh vs df (lsof +L1)', 'uname / lsblk / dmesg']
  },
  '11.2.2': {
    itemId: '11.2.2',
    highYieldSummary: [
      'Protocolo OpenSSH (Porta TCP 22): provê terminal remoto criptografado (`ssh`), cópia segura de arquivos (`scp`, `sftp`) e tunelamento/port forwarding (`-L` local, `-R` remoto, `-D` proxy SOCKS dinâmico), substituindo protocolos inseguros em texto claro (Telnet TCP 23, rsh, FTP).',
      'Autenticação por Chaves Assimétricas (`ssh-keygen` e `authorized_keys`): gera par de chaves (preferir `Ed25519` ou `RSA >= 3072/4096 bits`); a chave PRIVADA (`id_ed25519`, permissão estrita `600`) nunca sai da máquina do administrador e a chave PÚBLICA (`id_ed25519.pub`) é copiada via `ssh-copy-id` para `~/.ssh/authorized_keys` (permissão `600`, diretório `~/.ssh` com `700`) no servidor.',
      'Hardening Obrigatório do `/etc/ssh/sshd_config`: `PermitRootLogin no` (obriga logar com usuário nominal e usar `sudo`), `PasswordAuthentication no` (força uso exclusivo de chaves ou MFA), `PubkeyAuthentication yes`, `AllowUsers` / `AllowGroups` (lista branca de acesso), `MaxAuthTries 3`, `ClientAliveInterval` / `ClientAliveCountMax` (encerra sessões ociosas) e `X11Forwarding no`.',
      'Verificação de Identidade do Host (`known_hosts`): na primeira conexão, o cliente salva a impressão digital (host key) do servidor em `~/.ssh/known_hosts`; se a chave mudar inesperadamente depois, o OpenSSH emite alerta severo de possível ataque Man-in-the-Middle (MITM).',
      'Validação antes de Reiniciar o Serviço: após editar `/etc/ssh/sshd_config`, testar a sintaxe com `sshd -t` e usar `systemctl reload sshd` (ou `ssh`) — NUNCA fechar a sessão SSH atual antes de abrir uma segunda sessão de teste validando que o login continua funcionando.'
    ],
    technicalReference: [
      'Permissões rígidas SSH (se frouxas, `sshd` recusa a chave por `StrictModes yes`): `~/.ssh` = `700`, `authorized_keys` = `600`, chave privada local = `600`',
      'Hardening `sshd_config`: `PermitRootLogin no` + `PasswordAuthentication no` + `AllowGroups` + validar com `sshd -t`.'
    ],
    examTraps: [
      'Se o diretório `~/.ssh` tiver permissão `777` ou `755` (ou `authorized_keys` tiver escrita para grupo/outros como `664`), o daemon `sshd` IGNORA silenciosamente a chave pública e cai para pedido de senha.',
      'Alterar a porta SSH ou configurar `AllowUsers` sem testar sintaxe (`sshd -t`) nem manter outra sessão aberta pode trancar completamente o servidor remoto fora de acesso.',
      'Não confundir `ssh_config` (configuração do CLIENTE SSH) com `sshd_config` (configuração do SERVIDOR/daemon OpenSSH).'
    ],
    keyTerms: ['OpenSSH (TCP 22)', 'Chaves (Ed25519/RSA) & authorized_keys', 'sshd_config Hardening', 'PermitRootLogin no', 'scp / sftp / Port Forwarding']
  },
  '11.2.3': {
    itemId: '11.2.3',
    highYieldSummary: [
      'Descritores Padrão, Redirecionamento e Pipes: `0` = `stdin` (entrada padrão), `1` = `stdout` (saída padrão) e `2` = `stderr` (saída de erros); `>` sobrescreve arquivo (`>>` anexa), `2>` redireciona erros, `&>` ou `> arq 2>&1` unifica stdout+stderr no mesmo arquivo, e `|` (pipe) conecta o `stdout` de um comando ao `stdin` do seguinte.',
      'Variáveis, Aspas e Expansão no Bash: aspas duplas (`"$VAR"`) preservam espaços e expandem variáveis/comandos `$(cmd)`; aspas simples (`\'$VAR\'`) tratam tudo literalmente sem expandir nada; `$?` guarda o código de saída (exit code) do último comando (`0` = sucesso, diferente de `0` = erro); `export` torna variável visível a processos filhos.',
      'Filtro e Busca com `grep` / `egrep` (`grep -E`): `-i` ignora maiúsculas/minúsculas, `-r` recursivo em diretórios, `-v` inverte busca (linhas que NÃO contêm), `-n` mostra número da linha, `-c` conta ocorrências, `-E` expressões regulares estendidas (ex.: `grep -E "ERROR|CRITICAL" /var/log/syslog`).',
      'Processamento Colunar e Transformação com `awk` e `sed`: `awk` opera por registros/campos (ex.: `awk -F: \'{print $1,$7}\' /etc/passwd` extrai usuário e shell; ideal para somar colunas e filtrar valores numéricos); `sed` é editor de fluxo para substituições e remoção de linhas (ex.: `sed -i \'s/antigo/novo/g\' arquivo.conf`).',
      'Utilitários Essenciais de Pipeline: `sort` (ordena), `uniq -c` (conta duplicatas — exige entrada previamente ordenada por `sort`!), `cut -d: -f1` (recorta colunas), `wc -l` (conta linhas), `head`/`tail -f` (acompanha crescimento em tempo real de logs) e `tee` (grava em arquivo E exibe na tela simultaneamente).'
    ],
    technicalReference: [
      'Redirecionamento clássico: `cmd > saida.log 2>&1` (ordem importa: primeiro `>` depois `2>&1`) | Descartar tudo: `> /dev/null 2>&1`',
      'Pipeline clássico de diagnóstico: `grep "Failed" /var/log/auth.log | awk \'{print $11}\' | sort | uniq -c | sort -nr | head`.'
    ],
    examTraps: [
      'A ordem `2>&1 > arquivo.txt` está ERRADA para jogar ambos no arquivo — ela aponta `stderr` para o terminal atual antes de redirecionar `stdout` para o arquivo; a ordem correta é `> arquivo.txt 2>&1` (ou `&>`).',
      '`uniq` só remove/agrupa linhas repetidas ADJACENTES; esquecer de rodar `sort` antes do `uniq` deixa duplicatas espalhadas sem agrupar.',
      'Em Bash, `$?` retorna `0` para SUCESSO e `1..255` para ERRO (oposto do boolean C/Python onde 0 é falso!).'
    ],
    keyTerms: ['Pipes (|) e Redirecionamento (2>&1)', 'stdin/stdout/stderr (0/1/2)', 'grep (-E/-i/-v/-r)', 'awk vs sed', 'Aspas simples vs duplas ($?)']
  },
  '11.2.4': {
    itemId: '11.2.4',
    highYieldSummary: [
      'Systemd (Gerenciador de Sistema e Serviços PID 1): substituiu SysVinit e Upstart nas distribuições modernas trazendo inicialização paralela sob demanda (socket/bus activation), controle por cgroups de CPU/memória por serviço e unificação de unidades (`service`, `socket`, `target`, `timer`, `mount`).',
      'Comandos Diários com `systemctl`: `start` / `stop` / `restart` / `reload` (recarrega configs sem derrubar conexões ativas se suportado), `status` (mostra PID, cgroup, estado e últimas linhas de log), `enable` / `disable` (cria/remove symlinks para boot automático), `enable --now` (habilita no boot + inicia agora) e `mask` (aponta unit para `/dev/null` impedindo até inicialização manual/por dependência).',
      'Unit Files e Precedência de Diretórios: unidades empacotadas da distro residem em `/usr/lib/systemd/system/` (nunca editar diretamente — sobrescritas em updates!); customizações e overrides do administrador ficam em `/etc/systemd/system/` (preferencialmente via `systemctl edit servico` criando `override.conf`, seguido de `systemctl daemon-reload`).',
      'Targets (Substitutos dos Runlevels SysVinit): `poweroff.target` (runlevel 0), `rescue.target` (single-user / runlevel 1), `multi-user.target` (servidor modo texto com rede — runlevel 3), `graphical.target` (interface gráfica — runlevel 5) e `reboot.target` (runlevel 6); alterna-se padrão com `systemctl set-default`.',
      'Análise de Logs Estruturados com `journalctl`: lê o diário binário do `systemd-journald` — `journalctl -u nginx.service` (filtra por serviço), `-f` (tempo real), `-p err` (severidade erro ou pior), `--since "1 hour ago"` e `-b -1` (logs do boot anterior quando o servidor travou!).'
    ],
    technicalReference: [
      'Precedência Unit Files: `/etc/systemd/system/` (admin/override) > `/run/systemd/system/` (runtime) > `/usr/lib/systemd/system/` (distro)',
      'Pós-edição de unit: `systemctl daemon-reload` | Bloqueio total (nem manual sobe): `systemctl mask <unit>` | Boot texto padrão: `multi-user.target`.'
    ],
    examTraps: [
      '`systemctl disable` apenas impede o início automático no boot — o serviço NÃO para imediatamente se já estiver rodando e ainda pode ser iniciado manualmente ou por outro serviço; para impedir totalmente o início usa-se `systemctl mask`.',
      'Editar ou criar um `.service` em `/etc/systemd/system/` sem executar `systemctl daemon-reload` faz o `systemd` continuar usando a definição em cache antiga.',
      'Os logs do `journald` ficam por padrão em `/run/log/journal` (volátil em RAM!) em algumas distribuições até criar `/var/log/journal` para persistência entre reboots.'
    ],
    keyTerms: ['systemctl (start/enable/mask)', 'Unit Files & daemon-reload', 'Targets (multi-user vs graphical)', 'journalctl (-u/-f/-p/-b)', 'PID 1 / cgroups']
  },
  '11.2.5': {
    itemId: '11.2.5',
    highYieldSummary: [
      'Inspeção de Processos (`ps` e `pgrep`): `ps aux` (estilo BSD: todos os usuários, inclusive sem TTY, mostrando USER, PID, %CPU, %MEM, VSZ, RSS, STAT, COMMAND) e `ps -ef` (estilo UNIX: inclui `PPID` — Parent PID para rastrear processo pai); `pstree -p` desenha a árvore pai-filho completa.',
      'Estados de Processo (Coluna STAT no `ps`/`top`): `R` (Running/Runnable na fila de CPU), `S` (Interruptible Sleep — aguardando evento/E/S, estado normal ocioso), `D` (Uninterruptible Sleep — geralmente preso esperando I/O de disco/NFS; NÃO responde nem a `kill -9` até o I/O destravar ou reboot!), `T` (Stopped/Paused) e `Z` (Zombie/Defunct — já terminou, mas espera o processo pai ler seu exit status via `wait()`).',
      'Sinais UNIX (`kill`, `pkill`, `killall`): `SIGTERM (15)` é o sinal PADRÃO do comando `kill <PID>` e solicita encerramento gracioso permitindo flush de buffers e fechamento de arquivos; `SIGHUP (1)` tradicionalmente ordena recarregar arquivos de configuração; `SIGKILL (9)` força o kernel a matar o processo imediatamente sem chance de captura/limpeza (`kill -9`); `SIGSTOP/SIGCONT` pausam/retomam.',
      'Prioridade de Escalonamento (`nice` / `renice`): valores de niceness variam de `-20` (MAIOR prioridade de CPU) até `+19` (MENOR prioridade — padrão `0`); qualquer usuário pode aumentar seu próprio `nice` (reduzir prioridade), mas apenas `root` pode atribuir valores negativos.',
      'Rastreamento de Arquivos e Sockets Abertos (`lsof` e `fuser`): tudo no Linux é arquivo; `lsof -p <PID>` lista arquivos, libs e sockets do processo, `lsof -i :80` revela qual processo escuta na porta 80, e `fuser -km /mnt/ponto` identifica/mata processos que impedem o `umount` ("device is busy").'
    ],
    technicalReference: [
      'Sinais essenciais: `1` SIGHUP (reload) | `9` SIGKILL (morte imediata pelo kernel, não ignorável) | `15` SIGTERM (padrão do `kill`, encerramento limpo)',
      'Estados críticos: `Z` (Zombie -> matar/corrigir o PPID pai, `kill -9` no zombie não faz nada!) | `D` (Uninterruptible I/O -> imune até a SIGKILL enquanto preso no kernel).'
    ],
    examTraps: [
      'Tentar matar um processo Zumbi (`Z`) com `kill -9 <PID>` NÃO funciona porque o processo já está morto — é necessário fazer o processo PAI (`PPID`) coletar o status ou encerrar/reiniciar o processo pai.',
      'Um processo em estado `D` (Uninterruptible Sleep, típico de montagem NFS travada) também NÃO morre imediatamente com `kill -9` até o driver de I/O retornar ou expirar (ex.: montagem `soft` vs `hard`).',
      'Na escala `nice`, `-20` é a PRIORIDADE MAIS ALTA e `+19` é a PRIORIDADE MAIS BAIXA ("quanto mais legal/nice o processo é com os outros, menos CPU ele toma").'
    ],
    keyTerms: ['ps aux / ps -ef (PPID)', 'Estados R / S / D / Z', 'SIGTERM (15) vs SIGKILL (9)', 'nice / renice (-20 a +19)', 'lsof / fuser']
  },
  '11.2.6': {
    itemId: '11.2.6',
    highYieldSummary: [
      'Sistemas de Arquivos Principais (`ext4` vs `xfs`): `ext4` (evolução do ext3 com extents e journaling, permite aumentar E reduzir/shrink tamanho desmontado via `resize2fs`); `XFS` (padrão RHEL/Rocky, altíssimo desempenho paralelo para arquivos grandes e I/O pesado, permite expandir online com `xfs_growfs`, porém NÃO suporta redução/shrink!).',
      'Arquitetura LVM (Logical Volume Manager — 3 Camadas): PV (Physical Volume — disco ou partição inicializada com `pvcreate`) -> VG (Volume Group — pool somado de PVs com `vgcreate`) -> LV (Logical Volume — partição lógica flexível com `lvcreate`, formatada com `mkfs.ext4`/`mkfs.xfs`), permitindo redimensionar volumes online (`lvextend -r -L +10G ...`) e tirar snapshots.',
      'Inodes e Links (`ln` vs `ln -s`): cada arquivo possui um `inode` com metadados (permissões, dono, timestamps, ponteiros para blocos — NÃO guarda o nome do arquivo, que fica no diretório!); Hard Link (`ln orig dest`) aponta para o MESMO número de inode na mesma partição (apagar o original não apaga os dados enquanto restar 1 hard link); Symbolic/Soft Link (`ln -s orig dest`) é um atalho para o caminho texto (pode cruzar filesystems e apontar para diretórios, mas quebra se o alvo for movido/apagado).',
      'Montagem Persistente (`/etc/fstab`): 6 colunas obrigatórias (`<dispositivo/UUID> <ponto_montagem> <tipo_fs> <opções> <dump> <pass/fsck>`), devendo preferir sempre `UUID=` (obtido via `blkid`) em vez de `/dev/sdb1` para evitar troca de letras após alteração de discos; opção `_netdev` (ou `nofail`) evita que disco de rede iSCSI/NFS ou secundário trave o boot em emergency mode.',
      'Verificação e Reparo (`fsck` / `xfs_repair`): NUNCA executar `fsck` com escrita em partição montada (risco severo de corrupção!) — desmontar primeiro com `umount` (ou entrar em modo rescue/live) e testar com `fsck -f` / `xfs_repair`; após editar `/etc/fstab`, testar obrigatoriamente com `mount -a` (ou `findmnt --verify`) antes de reiniciar.'
    ],
    technicalReference: [
      'LVM ordem de criação: `pvcreate` -> `vgcreate` -> `lvcreate` -> `mkfs` -> `mount` | Expansão com FS junto: `lvextend -r -L +20G /dev/vg/lv`',
      'Hard Link: mesmo inode, só mesma partição, não para diretórios, sobrevive se original for apagado | Soft Link (`-s`): inode diferente, cruza partições, aceita diretórios, vira dangling link se original sumir.'
    ],
    examTraps: [
      'XFS NÃO pode ser reduzido (shrunk) in-place — para diminuir um volume XFS só fazendo backup, recriando LV menor, formatando e restaurando; já `ext4` pode reduzir desmontado (após `e2fsck -f` + `resize2fs`).',
      'Erro de sintaxe ou disco ausente no `/etc/fstab` sem `nofail` trava o boot do servidor Linux caindo em Emergency Mode antes de subir a rede/SSH.',
      'Executar `lvextend` amplia apenas o dispositivo de bloco lógico — o `df -h` NÃO enxerga o novo espaço enquanto não estender o sistema de arquivos (`resize2fs` / `xfs_growfs`, ou passar `-r` no `lvextend`).'
    ],
    keyTerms: ['ext4 vs XFS (no shrink)', 'LVM (PV -> VG -> LV)', '/etc/fstab (UUID / nofail)', 'Inode / Hard vs Soft Link', 'mount / fsck / blkid']
  },
  '11.2.7': {
    itemId: '11.2.7',
    highYieldSummary: [
      'Permissões Tradicionais UNIX (`rwx` — 4/2/1): aplicadas a Usuário Dono (`u`), Grupo (`g`) e Outros (`o`) via `chmod` (simbólico `u+x,g-w` ou octal `750`); em ARQUIVOS, `r`=ler conteúdo, `w`=alterar conteúdo, `x`=executar; em DIRETÓRIOS, `r`=listar nomes (`ls`), `w`=criar/renomear/apagar arquivos dentro da pasta (mesmo sem permissão de escrita no arquivo!) e `x`=atravessar/entrar (`cd`) e acessar metadados.',
      'Propriedade e Máscara Padrão (`chown` / `chgrp` / `umask`): `chown usuario:grupo arquivo` altera dono/grupo (`-R` recursivo); `umask` subtrai bits das permissões máximas iniciais (`666` para arquivos e `777` para diretórios) — ex.: `umask 022` cria arquivos `644` e diretórios `755`; `umask 027` cria arquivos `640` e diretórios `750`.',
      'Permissões Especiais — SUID (4xxx), SGID (2xxx) e Sticky Bit (1xxx): SUID em executável (`4755`, `rws` no dono) roda o processo com privilégio do DONO do arquivo (ex.: `/usr/bin/passwd`); SGID em diretório (`2770`, `rws` no grupo) faz novos arquivos herdar automaticamente o GRUPO da pasta (colaboração em equipe!); Sticky Bit em diretório (`1777`, `rwt` no final, ex.: `/tmp`) permite que qualquer um crie arquivos, mas só o DONO do arquivo ou root pode apagá-lo.',
      'ACLs POSIX (`getfacl` / `setfacl`): permitem conceder permissões granulares para múltiplos usuários e grupos específicos no mesmo arquivo/pasta além do único trio dono/grupo/outros (ex.: `setfacl -m u:maria:rw arquivo` ou `setfacl -m d:g:devops:rX pasta` para herança padrão).',
      'Atributos Estendidos de Filesystem (`lsattr` / `chattr`): `chattr +i arquivo` (imutável) impede modificação, renomeação ou exclusão até mesmo pelo `root` até remover o bit com `chattr -i`; `chattr +a` permite apenas acrescentar dados (append-only, útil para logs).'
    ],
    technicalReference: [
      'Cálculo umask (subtração bit a bit): Arquivo base `666` (nunca nasce executável) | Diretório base `777` -> com `umask 027`: Arquivo = `640`, Pasta = `750`',
      'Bits especiais: SUID = `4` (executa como dono) | SGID = `2` (pasta herda grupo) | Sticky Bit = `1` (só dono/root apaga arquivo dentro da pasta pública).'
    ],
    examTraps: [
      'Para um usuário apagar ou renomear um arquivo no Linux, o que conta é a permissão `w` (e `x`) no DIRETÓRIO pai — mesmo que o arquivo seja `000` de outro usuário, se o diretório der `w` sem Sticky Bit, ele consegue apagar o arquivo!',
      'Em permissões especiais, `S` ou `T` MAIÚSCULO (ex.: `rwS` ou `rwT`) indica que o bit especial foi ativado MAS falta a permissão base `x` de execução/travessia (que deveria existir para funcionar — minúsculo `s`/`t` indica que `x` está presente).',
      'Cuidado com cálculo de `umask` em arquivos: se `umask` for `027` (`--- -w- rwx`), `666` AND NOT `027` = `640` (não subtrair aritmética cegamente para valores ímpares de umask como `011`: arquivo `666` já não tem `x`, então continua `666`!).'
    ],
    keyTerms: ['chmod (rwx / Octal)', 'chown & umask (022/027)', 'SUID (4) / SGID (2) / Sticky Bit (1)', 'ACLs (setfacl/getfacl)', 'chattr +i']
  },
  '11.2.8': {
    itemId: '11.2.8',
    highYieldSummary: [
      'Daemons e Tipos de Serviço (`Type=` no systemd): processos executados em segundo plano sem terminal controlador; unidades `.service` declaram `Type=simple` (processo principal fica em foreground — padrão moderno), `Type=forking` (daemon tradicional cria processo filho e encerra o pai), `Type=notify` (avisa systemd quando está pronto) e `Type=oneshot` (executa tarefa única e termina).',
      'Socket Activation (`*.socket`): o `systemd` abre previamente a porta TCP/UDP ou socket UNIX configurada na unidade `.socket` e só inicia o daemon pesado `.service` sob demanda quando o primeiro cliente realmente conectar, acelerando o boot.',
      'Políticas de Reinício e Dependências (`Restart=` / `After=` / `Requires=`): `Wants=` cria dependência fraca; `Requires=` falha o serviço se a dependência cair; `After=` apenas garante ordem temporal de inicialização (`network-online.target` garante IP configurado antes de subir serviços de rede); `Restart=on-failure` reinicia automaticamente após crash respeitando `RestartSec=`.',
      'Verificação de Escuta e Portas de Serviços: confirmar após subir o serviço se ele realmente abriu o socket esperado (`ss -tulpn`) e em qual endereço (`127.0.0.1` loopback local vs `0.0.0.0` / `::` todas as interfaces), pois erro comum é serviço ativo no `systemctl` porém ouvindo somente em `localhost`.',
      'Limites de Recursos e Segurança em Serviços (Sandboxing): `LimitNOFILE=` eleva descritores de arquivo abertos para bancos/proxies (padrão baixo 1024 trava Nginx/Elasticsearch sob carga), enquanto diretivas como `User=`, `ProtectSystem=strict` e `MemoryMax=` confinam privilégios.'
    ],
    technicalReference: [
      'Ordem correta em units de rede: `After=network-online.target` + `Wants=network-online.target` (apenas `network.target` pode rodar antes de a interface pegar IP via DHCP!)',
      'Troubleshooting de serviço: `systemctl is-enabled / is-active` -> `journalctl -xeu servico` -> `ss -tulpn`.'
    ],
    examTraps: [
      '`After=nginx.service` define SOMENTE a ORDEM se ambos subirem juntos — ele NÃO inicia `nginx.service` sozinho; para iniciar junto precisa de `Wants=` ou `Requires=`.',
      'Confundir `systemctl start` (inicia agora na sessão atual) com `systemctl enable` (apenas configura para iniciar nos próximos boots — não inicia o serviço imediatamente sem `--now`!).',
      'Ver `active (exited)` em serviço `Type=oneshot` é NORMAL (significa que o script inicial rodou com sucesso e terminou); já em serviço daemon comum, `inactive (dead)` ou `failed` indica parada.'
    ],
    keyTerms: ['Daemons (Type=simple/forking)', 'Socket Activation', 'Wants / Requires / After', 'Habilitação no Boot (enable)', 'ss -tulpn / LimitNOFILE']
  },
  '11.2.9': {
    itemId: '11.2.9',
    highYieldSummary: [
      'Pilha moderna iproute2 (`ip` e `ss` substituindo `ifconfig`/`route`/`netstat` obsoletos): `ip addr` (ou `ip a`) exibe/configura IPs e links; `ip link set eth0 up`; `ip route` exibe/adiciona rotas (`ip route add 10.20.0.0/16 via 192.168.1.254` ou `ip route get 8.8.8.8`); `ip neigh` exibe tabela ARP/NDP; `ss -tulpn` lista sockets TCP/UDP em escuta com PIDs (`ss -tan` para conexões TCP estabelecidas).',
      'Persistência de Rede (NetworkManager `nmcli`, Netplan e interfaces): alterações via comando `ip` são temporárias (somem no reboot!); em RHEL/Rocky/Fedora modernos usa-se `nmcli` (`nmcli con mod ...`, `nmcli con up ...` salvando em `/etc/NetworkManager/system-connections/`); em Ubuntu Server moderno usa-se YAML em `/etc/netplan/*.yaml` aplicado com `netplan try` / `netplan apply`.',
      'Resolução de Nomes no Linux (`/etc/nsswitch.conf`, `/etc/hosts` e `systemd-resolved`): `/etc/nsswitch.conf` (`hosts: files dns`) define a ordem de consulta (por padrão `/etc/hosts` vence o DNS em `/etc/resolv.conf`); em distros com `systemd-resolved`, `/etc/resolv.conf` costuma apontar para stub `127.0.0.53` gerenciado via `resolvectl status`.',
      'Firewall Local no Kernel (`nftables` / `iptables`, `firewalld`, `ufw`): Netfilter filtra pacotes nas chains `INPUT` (destino o próprio host), `FORWARD` (pacotes roteados através do host — exige `net.ipv4.ip_forward=1`) e `OUTPUT` (originados no host); `nftables` é o sucessor moderno do `iptables`, frequentemente gerenciado por `firewalld` (`firewall-cmd --permanent --add-service=https && firewall-cmd --reload`) ou `ufw`.',
      'Diagnóstico Rápido de Rede e Captura: `ping`, `traceroute`/`mtr` (perda hop-a-hop), `dig`/`nslookup` (DNS), `curl -Iv` (TCP/TLS/HTTP), `ethtool eth0` (link detectado, velocidade 1000Mb/s Full Duplex) e `tcpdump -i eth0 -nn port 443` (captura de pacotes na CLI).'
    ],
    technicalReference: [
      'Comandos modernos iproute2: `ip a` (IPs) | `ip r` (rotas) | `ip neigh` (ARP) | `ss -tulpn` (portas abertas) | `tcpdump -nn -i any host X`',
      'Persistência: RHEL -> `nmcli` | Ubuntu -> `/etc/netplan/*.yaml` | Firewall: `firewall-cmd --reload` (não esquecer `--permanent`!).'
    ],
    examTraps: [
      'Adicionar IP ou rota com `ip addr add` ou `ip route add` funciona na hora mas DESAPARECE no reboot se não for persistido via `nmcli`, Netplan ou arquivos de interface.',
      'No `firewalld`, rodar `firewall-cmd --add-port=8080/tcp` sem `--permanent` aplica na hora mas some no reboot/reload; rodar SOMENTE com `--permanent` salva no disco mas NÃO ativa na hora sem `--reload`.',
      'Usar um servidor Linux como roteador ou gateway VPN exige obrigatoriamente habilitar encaminhamento de pacotes no kernel (`sysctl -w net.ipv4.ip_forward=1`), caso contrário a chain `FORWARD` descarta tudo.'
    ],
    keyTerms: ['iproute2 (ip addr/route/ss)', 'nmcli / Netplan', 'nftables / iptables / firewalld', '/etc/hosts & resolv.conf', 'tcpdump / ethtool']
  },
  '11.2.10': {
    itemId: '11.2.10',
    highYieldSummary: [
      'Diretório `/var/log` e Arquivos Principais: `/var/log/messages` (RHEL) ou `/var/log/syslog` (Debian/Ubuntu) para eventos gerais; `/var/log/secure` (RHEL) ou `/var/log/auth.log` (Debian) para logins SSH/sudo/PAM; `/var/log/dmesg` ou `kern.log` (mensagens do kernel/drivers/OOM); `/var/log/audit/audit.log` (SELinux/auditd); `last`/`lastb` (`wtmp`/`btmp`) para histórico de logins bem-sucedidos e falhos.',
      'Arquitetura `journald` vs `rsyslog`: `systemd-journald` captura precocemente mensagens do boot, kernel e stdout/stderr de serviços em formato binário indexado (`journalctl`); `rsyslog` lê entradas (do socket/journal) e as grava em arquivos texto tradicionais em `/var/log` ou encaminha via rede TCP/TLS 514/6514 para SIEM remoto.',
      'Rotação Automática de Logs (`logrotate`): evita que arquivos em `/var/log` cresçam infinitamente até encher o disco; configurado em `/etc/logrotate.conf` e `/etc/logrotate.d/<servico>` definindo periodicidade (`daily`, `weekly`, `size 100M`), retenção (`rotate 12`), compressão (`compress`, `delaycompress`), `missingok`, `notifempty` e `postrotate` (para sinalizar `HUP`/`reload` ao daemon abrir novo descritor) ou `copytruncate`.',
      'Inspeção Dinâmica e Forense de Logs: `tail -f` / `tail -n 200` (monitoramento ao vivo), `less +F` (navegação segura sem carregar tudo na RAM), `zgrep`/`zcat` (pesquisar direto dentro de logs antigos rotacionados `.gz` sem descompactar no disco!).',
      'Sincronização de Tempo (`chrony` / NTP) para Logs: logs de múltiplos servidores só são correlacionáveis durante incidentes de segurança ou falhas distribuídas se todos estiverem sincronizados via `chronyd` (`chronyc sources` / `timedatectl`).'
    ],
    technicalReference: [
      'Equivalência Debian vs RHEL: Logs gerais `/var/log/syslog` vs `/var/log/messages` | Autenticação/SSH `/var/log/auth.log` vs `/var/log/secure`',
      'Logrotate: `/etc/logrotate.d/*` (diretivas: `daily/weekly`, `rotate N`, `compress`, `create`, `postrotate ... endscript`).'
    ],
    examTraps: [
      'Apenas mover/renomear um arquivo de log em uso sem enviar sinal `HUP`/`reload` no `postrotate` do `logrotate` (ou usar `copytruncate`) faz o daemon continuar escrevendo no arquivo antigo renomeado (`access.log.1`) pelo inode!',
      'Arquivos rotacionados comprimidos (`syslog.2.gz`) devem ser pesquisados com `zgrep` / `zless`, pois `grep` comum lê lixo binário compactado.',
      'Um servidor sem `chronyd` ativo pode registrar eventos fora de ordem em minutos/horas em relação ao firewall e AD, invalidando correlação em SIEM.'
    ],
    keyTerms: ['/var/log (syslog/messages/auth)', 'journald vs rsyslog', 'logrotate (postrotate/copytruncate)', 'zgrep / tail -f', 'chrony / NTP']
  }
};
