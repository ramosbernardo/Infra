import { StudyGuide } from '../../types/edital';

export const GUIDES_AXIS_11: Record<string, StudyGuide> = {
  '11.1.1': {
    itemId: '11.1.1',
    highYieldSummary: [
      'Definição e escopo: a administração de sistemas **Linux** abrange a cadeia completa de inicialização (firmware **BIOS/UEFI**, **bootloader GRUB2**, **kernel + `initramfs`** e **PID 1 `systemd`**), a gestão modular do núcleo, o particionamento com **LVM** e sistemas de arquivos *journaling*, além do gerenciamento de pacotes (`.deb` e `.rpm`). Padroniza a operação confiável de servidores corporativos desde o *boot* até a atualização contínua.',
      'Sequência Completa de Boot no Linux: Firmware (BIOS [*Basic Input/Output System*] ou UEFI [*Unified Extensible Firmware Interface*] com partição ESP [*EFI System Partition*] em `/boot/efi` e tabela GPT [*GUID Partition Table*]) -> Bootloader (GRUB2 [*Grand Unified Bootloader 2*] carregado do MBR [*Master Boot Record*] ou ESP, lê `/boot/grub2/grub.cfg` ou `/boot/grub/grub.cfg`) -> Kernel Linux (`vmlinuz`) + `initramfs`/`initrd` (imagem inicial em RAM que carrega drivers essenciais de disco/LVM/RAID para montar o root `/`) -> Processo PID 1 (`systemd` em `/sbin/init`, que inicia `default.target` e serviços).',
      'Configuração e Manutenção do GRUB2: edições persistentes são feitas em `/etc/default/grub` (ex.: `GRUB_TIMEOUT`, `GRUB_CMDLINE_LINUX` com parâmetros de kernel) e compiladas no arquivo final via `update-grub` (Debian/Ubuntu) ou `grub2-mkconfig -o /boot/grub2/grub.cfg` (ou `/boot/efi/EFI/<distro>/grub.cfg` em UEFI legado nas distros RHEL/Rocky/Alma — nunca editar `grub.cfg` diretamente).',
      'Gerenciamento de Kernel e Módulos: `uname -r` exibe a versão em execução; módulos carregáveis do kernel (`.ko`) são inspecionados com `lsmod`, detalhados com `modinfo`, carregados com resolução automática de dependências via `modprobe` (preferível ao `insmod`) e descarregados com `modprobe -r` ou `rmmod`; parâmetros dinâmicos em tempo de execução são ajustados via `sysctl` (`/etc/sysctl.conf` ou `/etc/sysctl.d/*.conf`, aplicados com `sysctl --system`).',
      'Gerenciamento de Pacotes (Família Debian vs Família Red Hat): Debian/Ubuntu utilizam pacotes `.deb` com `dpkg` (baixo nível, sem resolver dependências externas) e `apt` / `apt-get` (repositórios em `/etc/apt/sources.list` e `sources.list.d/`); RHEL/Rocky/Alma/Fedora utilizam pacotes `.rpm` com `rpm` (baixo nível) e `dnf` / `yum` (repositórios em `/etc/yum.repos.d/`).',
      'Particionamento de Instalação e Boas Práticas: separar `/boot` (e `/boot/efi`), `/`, `/var` (evita que crescimento descontrolado de logs/bancos trave o SO raiz `/`), `/home` e `swap` utilizando LVM (*Logical Volume Manager*) para flexibilidade futura e sistemas de arquivos *journaling* (registro de transações antes da gravação definitiva — `ext4` ou `xfs`).',
      'Exemplo operacional: após incluir parâmetros de auditoria em `GRUB_CMDLINE_LINUX` no arquivo `/etc/default/grub`, executa-se `grub2-mkconfig -o /boot/grub2/grub.cfg` (ou `update-grub` no Debian/Ubuntu) para regenerar o menu de boot. Em seguida, confirma-se o núcleo ativo com `uname -r`, carrega-se o módulo de agregação de links com `modprobe bonding`, aplica-se `/etc/sysctl.d/99-rede.conf` via `sysctl --system` e instala-se um agente local resolvendo dependências com `dnf install ./agente.rpm` (ou `apt install ./agente.deb`).'
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
    keyTerms: [
      'Cadeia de Boot Linux: sequência BIOS/UEFI -> GRUB2 -> Kernel (vmlinuz) + initramfs -> PID 1 (systemd)',
      'GRUB2 (/etc/default/grub): bootloader cuja configuração editada exige update-grub (Debian) ou grub2-mkconfig (RHEL) para gerar grub.cfg',
      'modprobe vs insmod: carregamento de módulos .ko resolvendo dependências via modules.dep (modprobe) versus inserção isolada manual (insmod)',
      'apt/dpkg vs dnf/rpm: gerenciadores de alto nível com resolução de dependências (apt/dnf) e ferramentas locais de baixo nível (dpkg/rpm)',
      'sysctl (/etc/sysctl.d/*.conf): leitura e ajuste persistente de parâmetros de rede, memória e segurança no kernel em execução'
    ]
  },
  '11.1.2': {
    itemId: '11.1.2',
    highYieldSummary: [
      'Definição e escopo: o **FHS** (*Filesystem Hierarchy Standard*, mantido pela *Linux Foundation*) define a árvore única invertida de diretórios do Linux a partir da raiz `/`, unificando partições locais, compartilhamentos remotos e sistemas virtuais do kernel por pontos de montagem sem letras de unidade. Garante organização previsível para configurações, logs, bibliotecas e interfaces de hardware entre distribuições.',
      'Padrão FHS (Filesystem Hierarchy Standard): árvore única invertida iniciando em `/` (raiz), onde até partições separadas e dispositivos são integrados por pontos de montagem sem letras de unidade (`C:`, `D:`).',
      'Diretórios Críticos de Sistema e Configuração: `/bin` e `/sbin` (comandos essenciais de usuário e superusuário — em distros modernas são links simbólicos para `/usr/bin` e `/usr/sbin`), `/boot` (kernel `vmlinuz`, `initramfs`, GRUB), `/etc` (TODOS os arquivos estáticos de configuração do sistema — sem binários!), `/lib` e `/lib64` (bibliotecas compartilhadas essenciais e módulos em `/lib/modules`).',
      'Diretórios de Dados Variáveis, Terceiros e Temporários: `/var` (dados variáveis em constante mudança: `/var/log`, filas de e-mail, cache, bancos de dados, `/var/www`), `/opt` (softwares opcionais/proprietários de terceiros em pacotes autocontidos), `/usr` (aplicações e utilitários secundários multiusuário somente leitura), `/tmp` e `/var/tmp` (arquivos temporários — `/tmp` costuma usar Sticky Bit `1777` e ser limpo no reboot).',
      'Diretórios Virtuais e de Usuários: `/proc` (`procfs` — interface virtual em memória expondo estado do kernel e diretórios por PID `/proc/<pid>`, nunca ocupa disco real!), `/sys` (`sysfs` — árvore de dispositivos e drivers do kernel), `/dev` (`devtmpfs` — arquivos especiais de dispositivo de bloco `/dev/sda`, `/dev/nvme0n1` e caractere `/dev/null`, `/dev/tty`), `/root` (home exclusivo do superusuário) e `/home` (diretórios pessoais dos usuários comuns).',
      'Pontos de Montagem (`/mnt` e `/media`): `/media` recebe montagens automáticas de mídias removíveis (USB/DVD) pelo gerenciador de desktop/`udev` (subsistema de gerenciamento dinâmico de dispositivos em espaço de usuário); `/mnt` é reservado para montagens temporárias manuais feitas pelo administrador.',
      'Exemplo operacional: seguindo o **FHS**, um servidor web hospitalar monta volume isolado em `/var` (contendo crescimento de `/var/log` e cache), mantém configurações estáticas em `/etc/nginx/` e instala o agente proprietário em `/opt/agente`. Durante diagnóstico, consulta-se `/proc/cpuinfo` (`0` bytes reais em disco), verifica-se a permissão `drwxrwxrwt` (`1777`) de `/tmp` e monta-se um volume temporário de recuperação manualmente em `/mnt/resgate`.'
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
    keyTerms: [
      'FHS (Filesystem Hierarchy Standard): especificação que padroniza o propósito de cada diretório na árvore única iniciada em /',
      '/etc vs /var vs /opt: configurações estáticas do sistema (/etc), dados variáveis e logs (/var) e pacotes opcionais de terceiros (/opt)',
      '/proc e /sys (Sistemas Virtuais): interfaces em RAM do kernel (procfs e sysfs) com tamanho zero em disco para processos e drivers',
      '/dev (devtmpfs): arquivos especiais de dispositivos de bloco (/dev/sda, /dev/nvme0n1) e de caractere (/dev/null, /dev/tty)',
      '/ vs /root vs /mnt: diretório raiz da árvore (/), home exclusivo do superusuário (/root) e ponto de montagem temporária manual (/mnt)'
    ]
  },
  '11.1.3': {
    itemId: '11.1.3',
    highYieldSummary: [
      'Definição e escopo: o gerenciamento de contas e grupos no Linux controla identidades locais por meio de identificadores numéricos **UID** e **GID** (únicos atributos avaliados pelo kernel em decisões de permissão), armazenados nos arquivos `/etc/passwd`, `/etc/group`, `/etc/shadow` e `/etc/gshadow`. Permite isolar contas de serviço sem *shell* interativo e delegar privilégios administrativos auditáveis via `sudo`.',
      'Arquivos de Identidade (`/etc/passwd`, `/etc/shadow`, `/etc/group`, `/etc/gshadow`): `/etc/passwd` (legível por todos, `7` campos separados por `:` — `usuário:x:UID:GID:GECOS:home:shell` — onde `x` indica senha delegada ao shadow e GECOS guarda descrição do usuário); `/etc/shadow` (acesso restrito ao root, guarda hashes de senha com algoritmo/salt ex. `$6$` SHA-512 ou `$y$` yescrypt e políticas de expiração).',
      'UIDs e GIDs (Identificadores Numéricos): o kernel identifica permissões EXCLUSIVAMENTE por números (`UID` [*User Identifier*] e `GID` [*Group Identifier*]), não por nomes; `UID 0` = `root` (poder total), UIDs de sistema (`1–999` em distros modernas como RHEL/Debian para daemons como `nginx`, `www-data`), UIDs de usuários comuns (`>= 1000`).',
      'Comandos de Gestão de Contas e Grupos: `useradd` / `adduser` (cria usuário; `-m` cria home, `-s` define shell como `/sbin/nologin` para contas de serviço, `-G` adiciona grupos suplementares), `usermod` (`-aG` acrescenta grupo suplementar SEM apagar os atuais!), `userdel -r` (remove usuário + home), `groupadd`, `passwd` e `chage` (validade e expiração de senha).',
      'Elevação de Privilégios (`su` vs `sudo`): `su - usuario` troca de usuário pedindo a senha DO DESTINO (com `-` carrega variáveis de ambiente e diretório home do destino); `sudo` executa comandos como root (ou outro usuário) pedindo a senha DO PRÓPRIO USUÁRIO autorizado no `/etc/sudoers`, gerando trilha de auditoria detalhada por usuário.',
      'Edição Segura do `/etc/sudoers`: SEMPRE utilizar `visudo` (ou arquivos modulares em `/etc/sudoers.d/`), pois o `visudo` valida a sintaxe antes de salvar impedindo que um erro de digitação bloqueie o acesso administrativo `sudo` de toda a máquina.',
      'Exemplo operacional: para criar a conta de serviço do portal sem acesso interativo, executa-se `useradd -r -s /sbin/nologin -c "Servico Portal" svc_portal`; já para incluir o analista `carlos` no grupo `wheel` (ou `sudo`) preservando seus grupos atuais, usa-se `usermod -aG wheel carlos`. Em seguida, `chage -M 90 carlos` fixa expiração de senha em `90` dias e `visudo -f /etc/sudoers.d/web` valida a sintaxe antes de liberar apenas `systemctl restart nginx`.'
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
    keyTerms: [
      '/etc/passwd vs /etc/shadow: base pública de contas com 7 campos (644) versus armazenamento restrito de hashes ($6$/$y$) e expiração',
      'UID 0 e GIDs: identificadores numéricos reais avaliados pelo kernel (UID 0 = root; 1–999 contas de sistema; >= 1000 usuários)',
      'usermod -aG: inclusão aditiva em grupos suplementares sem remover os grupos já atribuídos ao usuário',
      'su - vs sudo: troca completa de sessão pedindo senha do usuário destino versus execução pontual auditada pedindo senha do próprio usuário',
      'visudo (/etc/sudoers.d): editor com verificação sintática obrigatória antes de gravar regras de delegação de privilégios'
    ]
  },
  '11.2.1': {
    itemId: '11.2.1',
    highYieldSummary: [
      'Definição e escopo: a administração básica de sistema no Linux utiliza ferramentas nativas de linha de comando (`top`, `htop`, `free`, `df`, `du`, `uname`, `lsblk`) para inspecionar utilização de CPU, memória disponível, capacidade de discos, exaustão de *inodes* e mensagens do kernel. Permite identificar rapidamente gargalos de desempenho e discrepâncias causadas por arquivos removidos ainda abertos.',
      'Monitoramento Interativo de CPU/Memória (`top`, `htop`, `vmstat`, `uptime`): `top`/`htop` exibem processos em tempo real, `%us` (*user space*), `%sy` (*kernel*), `%wa` (*iowait*), `%st` (*steal*), Load Average e permitem ordenar por CPU (`P`) ou Memória (`M`) ou enviar sinal (`k`); `uptime` e `w` mostram há quanto tempo o host está ligado, usuários logados e Load Average (`1m`, `5m`, `15m`).',
      'Uso de Memória (`free -h`): mostra `total`, `used`, `free`, `shared`, `buff/cache` e `available`; a coluna `available` (e NÃO `free`) indica quanta memória está realmente disponível para novas aplicações sem provocar *swapping* (paginação intensa para disco), pois buffers e *page cache* são liberados automaticamente pelo kernel quando preciso.',
      'Espaço em Disco (`df -h` / `df -i`) vs Uso de Diretórios (`du -sh`): `df` (*disk free*) consulta superblocos de partições montadas (`-h` formato legível, `-T` tipo do filesystem, `-i` uso de INODES [*estruturas de metadados de arquivo*] — partição com espaço em GB livre pode dar "No space left on device" se atingir `100%` dos inodes!); `du -sh *` (*disk usage*) soma o tamanho real ocupado pelos arquivos dentro das pastas.',
      'Informações de Sistema e Hardware (`uname`, `lscpu`, `lsblk`, `dmidecode`): `uname -a` (ou `-r`) revela arquitetura e versão do kernel; `lscpu` exibe sockets, cores e threads; `lsblk` lista discos, partições, volumes LVM e pontos de montagem em árvore; `dmesg` lê mensagens do *ring buffer* (buffer circular de eventos) do kernel (erros de hardware/driver/OOM [*Out of Memory*]).',
      'Divergência Clássica `df` vs `du` (Arquivos Deletados Ainda Abertos): quando um log gigante de `50 GB` é apagado via `rm` enquanto o serviço (ex.: Apache/Java) ainda mantém o descritor de arquivo aberto, o `du` para de enxergá-lo imediatamente mas o `df` continua acusando disco cheio até o processo ser reiniciado ou o descritor liberado (`lsof +L1` encontra esses arquivos deletados).',
      'Exemplo operacional: após alerta de `100%` em `/var` reportado por `df -hT`, o comando `du -sh /var/*` soma apenas `12 GB` em um volume de `50 GB`. Executando `lsof +L1 /var`, localiza-se o processo `java (PID 2418)` segurando `app.log (deleted)` de `38 GB`; após recarregar o serviço (ou truncar em operações futuras com `truncate -s 0`), `df -h` cai para `24%`, enquanto `df -i` confirma ausência de esgotamento de *inodes* e `free -h` valida `available` folgado.'
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
    keyTerms: [
      'top / htop / uptime: monitoramento em tempo real de CPU (%us/%sy/%wa/%st), processos e Load Average (1, 5 e 15 minutos)',
      'free -h (available vs free): distinção entre RAM livre ociosa (free) e RAM efetivamente disponível incluindo caches recuperáveis (available)',
      'df -h / df -i vs du -sh: leitura de superblocos e ocupação de inodes por partição (df) versus soma recursiva de arquivos em diretórios (du)',
      'lsof +L1 (Arquivo Deletado Aberto): diagnóstico da divergência entre df e du quando um processo mantém descritor aberto após rm',
      'uname / lsblk / dmesg: inspeção de versão do kernel (uname -r), topologia de discos/LVM (lsblk) e log do kernel (dmesg)'
    ]
  },
  '11.2.2': {
    itemId: '11.2.2',
    highYieldSummary: [
      'Definição e escopo: o **OpenSSH** implementa o protocolo **SSHv2** (RFCs 4251–4254) na porta padrão `TCP 22` para prover acesso interativo criptografado em terminal, transferência segura de arquivos (`sftp`, `scp`) e tunelamento de tráfego. Substitui protocolos inseguros em texto claro (Telnet, FTP, rsh) com autenticação por chaves assimétricas e regras restritivas no `/etc/ssh/sshd_config`.',
      'Protocolo OpenSSH (Porta TCP 22): provê terminal remoto criptografado (`ssh`), cópia segura de arquivos (`scp`, `sftp`) e tunelamento/port forwarding (`-L` local, `-R` remoto, `-D` proxy SOCKS [*Socket Secure*] dinâmico), substituindo protocolos inseguros em texto claro (Telnet TCP `23`, rsh, FTP [*File Transfer Protocol*]).',
      'Autenticação por Chaves Assimétricas (`ssh-keygen` e `authorized_keys`): gera par de chaves (preferir `Ed25519` ou `RSA >= 3072/4096 bits`); a chave PRIVADA (`id_ed25519`, permissão estrita `600`) nunca sai da máquina do administrador e a chave PÚBLICA (`id_ed25519.pub`) é copiada via `ssh-copy-id` para `~/.ssh/authorized_keys` (permissão `600`, diretório `~/.ssh` com `700`) no servidor.',
      'Hardening Obrigatório do `/etc/ssh/sshd_config`: `PermitRootLogin no` (obriga logar com usuário nominal e usar `sudo`), `PasswordAuthentication no` (força uso exclusivo de chaves ou MFA [*Multi-Factor Authentication*]), `PubkeyAuthentication yes`, `AllowUsers` / `AllowGroups` (lista branca de acesso), `MaxAuthTries 3`, `ClientAliveInterval` / `ClientAliveCountMax` (encerra sessões ociosas) e `X11Forwarding no`.',
      'Verificação de Identidade do Host (`known_hosts`): na primeira conexão, o cliente salva a impressão digital (*host key*) do servidor em `~/.ssh/known_hosts`; se a chave mudar inesperadamente depois, o OpenSSH emite alerta severo de possível ataque Man-in-the-Middle (MITM).',
      'Validação antes de Reiniciar o Serviço: após editar `/etc/ssh/sshd_config`, testar a sintaxe com `sshd -t` e usar `systemctl reload sshd` (ou `ssh`) — NUNCA fechar a sessão SSH atual antes de abrir uma segunda sessão de teste validando que o login continua funcionando.',
      'Exemplo operacional: o administrador cria um par Ed25519 com `ssh-keygen -t ed25519 -C "noc@hosp"` e implanta a chave pública com `ssh-copy-id -i ~/.ssh/id_ed25519.pub ops@10.10.2.15`, mantendo `~/.ssh` em `700` e `~/.ssh/authorized_keys` em `600`. Após editar `/etc/ssh/sshd_config` com `PermitRootLogin no`, `PasswordAuthentication no` e `AllowGroups ssh-admins`, valida a configuração com `sshd -t` e executa `systemctl reload sshd`, testando o novo acesso antes de desconectar.'
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
    keyTerms: [
      'OpenSSH (TCP 22): suíte criptográfica para shell remoto (ssh), transferência segura (sftp/scp) e tunelamento (-L/-R/-D)',
      'Chaves Assimétricas (Ed25519 / authorized_keys): par de chave privada local (600) e pública no servidor (600 dentro de ~/.ssh 700)',
      'Hardening sshd_config: diretivas PermitRootLogin no, PasswordAuthentication no, AllowGroups e validação prévia com sshd -t',
      'known_hosts (StrictHostKeyChecking): registro local de impressões digitais de servidores para prevenir ataques Man-in-the-Middle',
      'ssh_config vs sshd_config: arquivo de configuração do cliente SSH versus configuração do servidor daemon OpenSSH'
    ]
  },
  '11.2.3': {
    itemId: '11.2.3',
    highYieldSummary: [
      'Definição e escopo: o **Bash** (*Bourne-Again SHell*) é o interpretador de comandos padrão na maioria das distribuições Linux, conectando utilitários modulares por meio de descritores padrão (`stdin`, `stdout`, `stderr`), redirecionamentos e *pipes* (`|`). Aliado a filtros de texto como `grep`, `awk` e `sed`, permite processar logs, extrair colunas e automatizar diagnósticos diretamente na linha de comando.',
      'Descritores Padrão, Redirecionamento e Pipes: `0` = `stdin` (entrada padrão), `1` = `stdout` (saída padrão) e `2` = `stderr` (saída de erros); `>` sobrescreve arquivo (`>>` anexa), `2>` redireciona erros, `&>` ou `> arq 2>&1` unifica stdout+stderr no mesmo arquivo, e `|` (*pipe*) conecta o `stdout` de um comando ao `stdin` do seguinte.',
      'Variáveis, Aspas e Expansão no Bash: aspas duplas (`"$VAR"`) preservam espaços e expandem variáveis/comandos `$(cmd)`; aspas simples (`\'$VAR\'`) tratam tudo literalmente sem expandir nada; `$?` guarda o código de saída (*exit code*) do último comando (`0` = sucesso, diferente de `0` = erro); `export` torna variável visível a processos filhos.',
      'Filtro e Busca com `grep` / `egrep` (`grep -E`): `-i` ignora maiúsculas/minúsculas, `-r` recursivo em diretórios, `-v` inverte busca (linhas que NÃO contêm), `-n` mostra número da linha, `-c` conta ocorrências, `-E` expressões regulares estendidas (ex.: `grep -E "ERROR|CRITICAL" /var/log/syslog`).',
      'Processamento Colunar e Transformação com `awk` e `sed`: `awk` opera por registros/campos (ex.: `awk -F: \'{print $1,$7}\' /etc/passwd` extrai usuário e shell; ideal para somar colunas e filtrar valores numéricos); `sed` (*Stream Editor*) é editor de fluxo para substituições e remoção de linhas (ex.: `sed -i \'s/antigo/novo/g\' arquivo.conf`).',
      'Utilitários Essenciais de Pipeline: `sort` (ordena), `uniq -c` (conta duplicatas — exige entrada previamente ordenada por `sort`!), `cut -d: -f1` (recorta colunas), `wc -l` (conta linhas), `head`/`tail -f` (acompanha crescimento em tempo real de logs) e `tee` (grava em arquivo E exibe na tela simultaneamente).',
      'Exemplo operacional: para levantar os `5` IPs com mais falhas de logon SSH salvando eventuais erros de leitura à parte, executa-se `grep -E "Failed password|Invalid user" /var/log/secure 2>erros.log | awk \'{print $(NF-3)}\' | sort | uniq -c | sort -nr | head -n 5 | tee top_ips.txt`. O `sort` precede obrigatoriamente o `uniq -c`, o `tee` duplica a saída para arquivo e terminal e `$?` retorna `0` ao final.'
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
    keyTerms: [
      'Descritores (0/1/2) e Redirecionamento: stdin (0), stdout (1) e stderr (2) redirecionados via >, >>, 2> e > arq 2>&1 (ou &>)',
      'Pipe (|) e tee: encadeamento do stdout de um comando ao stdin do próximo (|) e gravação simultânea em arquivo e tela (tee)',
      'Aspas Simples vs Duplas ($?): proteção literal absoluta (\'...\') versus expansão de variáveis/subshell ("...") e leitura de exit code ($?)',
      'grep (-E/-i/-v/-r): filtragem de padrões e expressões regulares estendidas por linha em arquivos e árvores de diretórios',
      'awk vs sed: extração e cálculo por colunas/delimitadores (awk -F) versus edição de fluxo e substituição in-place (sed -i)'
    ]
  },
  '11.2.4': {
    itemId: '11.2.4',
    highYieldSummary: [
      'Definição e escopo: o **systemd** é o gerenciador de sistema e serviços (**PID 1**) padrão das distribuições Linux modernas, responsável por orquestrar o *boot* paralelo, isolar processos por **cgroups** e administrar unidades declarativas (`.service`, `.socket`, `.target`, `.timer`, `.mount`). Centraliza controle operacional via `systemctl` e auditoria estruturada de logs pelo `journalctl`.',
      'Systemd (Gerenciador de Sistema e Serviços PID 1): substituiu SysVinit e Upstart nas distribuições modernas trazendo inicialização paralela sob demanda (*socket/bus activation*), controle por *cgroups* (*control groups* — isolamento/limitação de CPU e memória no kernel por serviço) e unificação de unidades (`service`, `socket`, `target`, `timer` — que complementa ou substitui o `cron` tradicional de `5` campos: `minuto hora dia-do-mês mês dia-da-semana` — e `mount`).',
      'Comandos Diários com `systemctl`: `start` / `stop` / `restart` / `reload` (recarrega configs sem derrubar conexões ativas se suportado), `status` (mostra PID, cgroup, estado e últimas linhas de log), `enable` / `disable` (cria/remove symlinks para boot automático), `enable --now` (habilita no boot + inicia agora) e `mask` (aponta unit para `/dev/null` impedindo até inicialização manual/por dependência).',
      'Unit Files e Precedência de Diretórios: unidades empacotadas da distro residem em `/usr/lib/systemd/system/` (nunca editar diretamente — sobrescritas em updates!); customizações e *overrides* do administrador ficam em `/etc/systemd/system/` (preferencialmente via `systemctl edit servico` criando `override.conf`, seguido de `systemctl daemon-reload`).',
      'Targets (Substitutos dos Runlevels SysVinit): `poweroff.target` (runlevel `0`), `rescue.target` (*single-user* / runlevel `1`), `multi-user.target` (servidor modo texto com rede — runlevel `3`), `graphical.target` (interface gráfica — runlevel `5`) e `reboot.target` (runlevel `6`); alterna-se padrão com `systemctl set-default`.',
      'Análise de Logs Estruturados com `journalctl`: lê o diário binário do `systemd-journald` — `journalctl -u nginx.service` (filtra por unidade/serviço), `-f` (acompanhamento em tempo real), `-p err` (severidade erro ou pior), `--since "1 hour ago"` e `-b -1` (logs do boot anterior quando o servidor travou!).',
      'Exemplo operacional: após criar um ajuste de limites para o serviço web via `systemctl edit nginx.service` (gerando `/etc/systemd/system/nginx.service.d/override.conf`), executa-se `systemctl daemon-reload` e `systemctl enable --now nginx.service`. Para acompanhar logs ao vivo roda-se `journalctl -u nginx.service -f`, e após uma reinicialização inesperada investiga-se a causa raiz com `journalctl -b -1 -p err`.'
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
    keyTerms: [
      'systemctl (start / enable / mask): controle imediato, habilitação no boot (--now inicia junto) e bloqueio absoluto via symlink para /dev/null',
      'Unit Files e daemon-reload: precedência de /etc/systemd/system sobre /usr/lib/systemd/system exigindo daemon-reload após alterações',
      'Targets (multi-user vs graphical): agrupamentos de estado do sistema equivalentes aos runlevels 3 (texto) e 5 (gráfico) do SysVinit',
      'journalctl (-u / -f / -b): consulta ao diário binário do journald por serviço (-u), tempo real (-f) e boot atual ou anterior (-b -1)',
      'systemd timers vs cron (5 campos): agendamento nativo por units (timer) versus cron tradicional (minuto, hora, dia-mês, mês, dia-semana)'
    ]
  },
  '11.2.5': {
    itemId: '11.2.5',
    highYieldSummary: [
      'Definição e escopo: o gerenciamento de processos no Linux acompanha estados de execução, hierarquia **PID/PPID**, sinais **POSIX** (`SIGTERM`, `SIGKILL`, `SIGHUP`), prioridade de escalonamento (`nice`/`renice`) e arquivos/sockets abertos (`lsof`/`fuser`). Permite encerrar aplicações de maneira ordenada e identificar processos travados em E/S ou impedindo desmontagens.',
      'Inspeção de Processos (`ps` e `pgrep`): `ps aux` (estilo BSD: todos os usuários, inclusive sem TTY [*Teletypewriter* — terminal], mostrando `USER`, `PID`, `%CPU`, `%MEM`, `VSZ` [*Virtual Set Size*], `RSS` [*Resident Set Size* — memória física], `STAT`, `COMMAND`) e `ps -ef` (estilo UNIX: inclui `PPID` — *Parent PID* para rastrear processo pai); `pstree -p` desenha a árvore pai-filho completa.',
      'Estados de Processo (Coluna STAT no `ps`/`top`): `R` (*Running/Runnable* na fila de CPU), `S` (*Interruptible Sleep* — aguardando evento/E/S, estado normal ocioso), `D` (*Uninterruptible Sleep* — geralmente preso esperando I/O de disco/NFS; NÃO responde nem a `kill -9` até o I/O destravar ou reboot!), `T` (*Stopped/Paused*) e `Z` (*Zombie/Defunct* — já terminou, mas espera o processo pai ler seu *exit status* via `wait()`).',
      'Sinais UNIX (`kill`, `pkill`, `killall`): `SIGTERM (15)` é o sinal PADRÃO do comando `kill <PID>` e solicita encerramento gracioso permitindo *flush* de buffers e fechamento de arquivos; `SIGHUP (1)` tradicionalmente ordena recarregar arquivos de configuração; `SIGKILL (9)` força o kernel a matar o processo imediatamente sem chance de captura/limpeza (`kill -9`); `SIGSTOP/SIGCONT` pausam/retomam.',
      'Prioridade de Escalonamento (`nice` / `renice`): valores de *niceness* variam de `-20` (MAIOR prioridade de CPU) até `+19` (MENOR prioridade — padrão `0`); qualquer usuário pode aumentar seu próprio `nice` (reduzir prioridade), mas apenas `root` pode atribuir valores negativos.',
      'Rastreamento de Arquivos e Sockets Abertos (`lsof` e `fuser`): tudo no Linux é arquivo; `lsof -p <PID>` lista arquivos, libs e sockets do processo, `lsof -i :80` revela qual processo escuta na porta `80`, e `fuser -km /mnt/ponto` identifica/mata processos que impedem o `umount` ("device is busy").',
      'Exemplo operacional: ao tentar desmontar `/mnt/backup` com erro `target is busy`, `fuser -vm /mnt/backup` ou `lsof +D /mnt/backup` aponta o processo `tar (PID 8810)` com estado `S`. Envia-se `kill -15 8810` (`SIGTERM` padrão) e, se o processo ignorar, aplica-se `kill -9 8810` (`SIGKILL`); já para executar uma rotina pesada de compressão sem prejudicar o banco clínico, inicia-se com `nice -n 15 gzip ...` (ou altera-se em execução com `renice -n 15 -p <PID>`).'
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
    keyTerms: [
      'ps aux vs ps -ef (PPID): listagem estilo BSD com %CPU/%MEM/VSZ/RSS versus estilo UNIX exibindo o PPID (processo pai)',
      'Estados R / S / D / Z: executando (R), espera normal (S), espera ininterruptível em E/S imune a SIGKILL (D) e zumbi aguardando wait() do pai (Z)',
      'SIGTERM (15) vs SIGKILL (9): encerramento gracioso padrão que o processo pode tratar versus terminação forçada imediata pelo kernel',
      'nice / renice (-20 a +19): ajuste de prioridade de escalonamento de CPU onde -20 é máxima prioridade e +19 é mínima',
      'lsof / fuser: identificação de processos por arquivos, diretórios ou portas TCP/UDP abertas (inclusive bloqueios em umount)'
    ]
  },
  '11.2.6': {
    itemId: '11.2.6',
    highYieldSummary: [
      'Definição e escopo: a gerência de armazenamento e sistemas de arquivos no Linux combina volumes lógicos flexíveis (**LVM** em três camadas: `PV -> VG -> LV`), sistemas de arquivos *journaling* (`ext4`, `XFS`), estrutura de metadados via **inodes** e montagem persistente declarada em `/etc/fstab`. Permite expandir partições online sem parada e garantir boot seguro por **UUID**.',
      'Sistemas de Arquivos Principais (`ext4` vs `xfs`): `ext4` (evolução do ext3 com *extents* e *journaling*, permite aumentar online e reduzir/*shrink* tamanho desmontado via `resize2fs`); `XFS` (padrão RHEL/Rocky, altíssimo desempenho paralelo para arquivos grandes e E/S pesada, permite expandir online montado com `xfs_growfs <ponto_montagem>`, porém NÃO suporta redução/*shrink*!).',
      'Arquitetura LVM (Logical Volume Manager — 3 Camadas): PV (*Physical Volume* — disco ou partição inicializada com `pvcreate`) -> VG (*Volume Group* — pool somado de PVs com `vgcreate`) -> LV (*Logical Volume* — partição lógica flexível com `lvcreate`, formatada com `mkfs.ext4`/`mkfs.xfs`), permitindo redimensionar volumes online (`lvextend -L +10G ...` seguido de `resize2fs`/`xfs_growfs`, ou em um único passo com `lvextend -r -L +10G ...`) e criar *snapshots*.',
      'Inodes e Links (`ln` vs `ln -s`): cada arquivo possui um `inode` com metadados (permissões, dono, timestamps, ponteiros para blocos — NÃO guarda o nome do arquivo, que fica no diretório!); Hard Link (`ln orig dest`) aponta para o MESMO número de inode na mesma partição (apagar o original não apaga os dados enquanto restar `1` hard link); Symbolic/Soft Link (`ln -s orig dest`) é um atalho para o caminho texto (pode cruzar filesystems e apontar para diretórios, mas quebra se o alvo for movido/apagado).',
      'Montagem Persistente (`/etc/fstab`): `6` colunas obrigatórias (`<dispositivo/UUID> <ponto_montagem> <tipo_fs> <opções> <dump> <pass/fsck>`), devendo preferir sempre `UUID=` (*Universally Unique Identifier*, obtido via `blkid`) em vez de `/dev/sdb1` para evitar troca de letras após alteração de discos; opção `_netdev` (aguarda rede) ou `nofail` evita que disco secundário/iSCSI ausente trave o boot em *emergency mode*.',
      'Verificação e Reparo (`fsck` / `xfs_repair`): NUNCA executar `fsck` com escrita em partição montada (risco severo de corrupção!) — desmontar primeiro com `umount` (ou entrar em modo *rescue/live*) e testar com `fsck -f` / `xfs_repair`; após editar `/etc/fstab`, testar obrigatoriamente com `mount -a` (ou `findmnt --verify`) antes de reiniciar.',
      'Exemplo operacional: para criar um volume lógico de `50 GB` em `/dados` com XFS, executa-se `pvcreate /dev/sdb`, `vgcreate vg_dados /dev/sdb`, `lvcreate -L 50G -n lv_pacs vg_dados` e `mkfs.xfs /dev/vg_dados/lv_pacs`, inserindo `UUID=<uuid_do_blkid> /dados xfs defaults,nofail 0 0` no `/etc/fstab` e validando com `mount -a`. Para expandir depois em `+20 GB` sem parada, roda-se `lvextend -L +20G /dev/vg_dados/lv_pacs` e `xfs_growfs /dados` (ou `resize2fs /dev/vg_dados/lv_pacs` em `ext4`, ou diretamente `lvextend -r`).'
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
    keyTerms: [
      'LVM (PV -> VG -> LV): abstração de discos físicos (pvcreate), pool de armazenamento (vgcreate) e volumes lógicos expansíveis (lvcreate/lvextend)',
      'ext4 vs XFS (resize2fs / xfs_growfs): ext4 aceita expansão online e redução desmontado; XFS expande online via xfs_growfs mas não aceita redução',
      '/etc/fstab (6 colunas / UUID): tabela de montagens persistentes usando UUID de blkid e opções nofail/_netdev testadas com mount -a',
      'Inode: estrutura de metadados do arquivo (permissões, UID/GID, tamanho, ponteiros) desvinculada do nome armazenado no diretório',
      'Hard Link vs Soft Link (-s): segundo nome apontando ao mesmo inode na mesma partição versus atalho simbólico por caminho entre partições'
    ]
  },
  '11.2.7': {
    itemId: '11.2.7',
    highYieldSummary: [
      'Definição e escopo: o modelo de permissões do Linux implementa controle discricionário (**DAC**) por usuário dono (`u`), grupo (`g`) e outros (`o`), estendido pelos bits especiais **SUID (`4`)**, **SGID (`2`)** e **Sticky Bit (`1`)**, máscara de criação (`umask`), **ACLs POSIX** (`setfacl`/`getfacl`) e atributos imutáveis (`chattr`). Garante isolamento multiusuário e colaboração segura em arquivos e diretórios.',
      'Permissões Tradicionais UNIX (`rwx` — `4`/`2`/`1`): aplicadas a Usuário Dono (`u`), Grupo (`g`) e Outros (`o`) via `chmod` (simbólico `u+x,g-w` ou octal `750`); em ARQUIVOS, `r`=ler conteúdo, `w`=alterar conteúdo, `x`=executar; em DIRETÓRIOS, `r`=listar nomes (`ls`), `w`=criar/renomear/apagar arquivos dentro da pasta (mesmo sem permissão de escrita no arquivo!) e `x`=atravessar/entrar (`cd`) e acessar metadados.',
      'Propriedade e Máscara Padrão (`chown` / `chgrp` / `umask`): `chown usuario:grupo arquivo` altera dono/grupo (`-R` recursivo); `umask` subtrai bits das permissões máximas iniciais (`666` para arquivos e `777` para diretórios) — ex.: `umask 022` cria arquivos `644` (`666 & ~022`) e diretórios `755` (`777 & ~022`); `umask 027` cria arquivos `640` e diretórios `750`.',
      'Permissões Especiais — SUID (`4xxx`), SGID (`2xxx`) e Sticky Bit (`1xxx`): SUID em executável (`4755`, `-rwsr-xr-x`) roda o processo com privilégio do DONO do arquivo (ex.: `/usr/bin/passwd`); SGID em diretório (`2770`, `drwxrws---`) faz novos arquivos herdarem automaticamente o GRUPO da pasta (colaboração em equipe!); Sticky Bit em diretório (`1777`, `drwxrwxrwt`, ex.: `/tmp`) permite que qualquer um crie arquivos, mas só o DONO do arquivo, o dono da pasta ou `root` pode apagá-lo.',
      'ACLs POSIX (`getfacl` / `setfacl`): permitem conceder permissões granulares para múltiplos usuários e grupos específicos no mesmo arquivo/pasta além do único trio dono/grupo/outros (ex.: `setfacl -m u:maria:rw arquivo` ou `setfacl -m d:g:devops:rX pasta` para herança padrão).',
      'Atributos Estendidos de Filesystem (`lsattr` / `chattr`): `chattr +i arquivo` (imutável) impede modificação, renomeação ou exclusão até mesmo pelo `root` até remover o bit com `chattr -i`; `chattr +a` permite apenas acrescentar dados (*append-only*, útil para trilhas de log).',
      'Exemplo operacional: em um servidor com `umask 022`, arquivos criados nascem `644` (`rw-r--r--`) e pastas `755` (`rwxr-xr-x`). Para configurar o repositório compartilhado `/dados/radiologia` onde arquivos herdam o grupo `medicos`, aplica-se `chown root:medicos /dados/radiologia && chmod 2770 /dados/radiologia` (**SGID `2`**, `drwxrws---`) e adiciona-se leitura à auditoria com `setfacl -m g:auditoria:rx /dados/radiologia`; já `/usr/bin/passwd` opera com `4755` (**SUID `4`**) e `/tmp` com `1777` (**Sticky Bit `1`**).'
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
    keyTerms: [
      'Permissões Octais (r=4, w=2, x=1): controle para dono, grupo e outros onde w no diretório permite apagar/renomear arquivos internos',
      'umask (022 -> 644/755; 027 -> 640/750): máscara bit a bit aplicada sobre 666 (arquivos) e 777 (diretórios) na criação',
      'SUID (4) / SGID (2) / Sticky Bit (1): execução com privilégio do dono (4755), herança de grupo em pasta (2770) e proteção contra exclusão alheia (1777)',
      'ACLs POSIX (setfacl / getfacl): permissões granulares e default ACLs para múltiplos usuários e grupos além do trio tradicional',
      'chattr +i / lsattr: atributo de imutabilidade em sistema de arquivos que bloqueia alteração ou exclusão inclusive pelo root'
    ]
  },
  '11.2.8': {
    itemId: '11.2.8',
    highYieldSummary: [
      'Definição e escopo: a administração de serviços em sistemas Linux gerencia **daemons** (processos residentes em segundo plano desacoplados de terminal) por meio de unidades `.service` e `.socket` no **systemd**. Controla ordem de inicialização (`After=`/`Wants=`), reinício automático, limites de recursos (`LimitNOFILE=`) e validação de portas abertas (`ss -tulpn`).',
      'Daemons e Tipos de Serviço (`Type=` no systemd): processos executados em segundo plano sem terminal controlador; unidades `.service` declaram `Type=simple` (processo principal fica em *foreground* — padrão moderno), `Type=forking` (daemon tradicional cria processo filho e encerra o pai), `Type=notify` (avisa systemd quando está pronto) e `Type=oneshot` (executa tarefa única e termina).',
      'Socket Activation (`*.socket`): o `systemd` abre previamente a porta TCP/UDP ou socket UNIX configurada na unidade `.socket` e só inicia o daemon pesado `.service` sob demanda quando o primeiro cliente realmente conectar, acelerando o boot.',
      'Políticas de Reinício e Dependências (`Restart=` / `After=` / `Requires=`): `Wants=` cria dependência fraca; `Requires=` falha o serviço se a dependência cair; `After=` apenas garante ordem temporal de inicialização (`network-online.target` garante IP configurado antes de subir serviços de rede); `Restart=on-failure` reinicia automaticamente após *crash* respeitando `RestartSec=`.',
      'Verificação de Escuta e Portas de Serviços: confirmar após subir o serviço se ele realmente abriu o socket esperado (`ss -tulpn`) e em qual endereço (`127.0.0.1` loopback local vs `0.0.0.0` / `::` todas as interfaces), pois erro comum é serviço ativo no `systemctl` porém ouvindo somente em `localhost`.',
      'Limites de Recursos e Segurança em Serviços (Sandboxing): `LimitNOFILE=` eleva descritores de arquivo abertos para bancos/proxies (padrão baixo `1024` trava Nginx/Elasticsearch sob carga), enquanto diretivas como `User=`, `ProtectSystem=strict` e `MemoryMax=` confinam privilégios.',
      'Exemplo operacional: para publicar uma API clínica em `/etc/systemd/system/triagem.service`, definem-se `Type=simple`, `After=network-online.target`, `Wants=network-online.target`, `Restart=on-failure`, `RestartSec=5`, `User=svc_triagem` e `LimitNOFILE=65536`. Após `systemctl daemon-reload && systemctl enable --now triagem.service`, confirma-se `active (running)` com `systemctl status triagem` e valida-se o *bind* externo (`0.0.0.0:8000`) com `ss -tulpn | grep 8000`.'
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
    keyTerms: [
      'Daemons e Type= (simple / forking / oneshot): ciclo de vida esperado pelo systemd para processos em background ou scripts únicos',
      'Socket Activation (*.socket): escuta antecipada pelo systemd que instancia o serviço somente na chegada da primeira conexão',
      'Wants / Requires vs After: declaração de dependência de ativação (Wants/Requires) versus apenas ordenação temporal de subida (After)',
      'Habilitação no Boot (enable --now): criação do symlink no target de boot com opção de inicialização imediata',
      'LimitNOFILE e ss -tulpn: ampliação de descritores abertos e conferência do IP/porta de escuta real do daemon'
    ]
  },
  '11.2.9': {
    itemId: '11.2.9',
    highYieldSummary: [
      'Definição e escopo: a configuração e diagnóstico de rede no Linux utilizam o pacote moderno **iproute2** (`ip`, `ss`) em substituição às ferramentas legadas (`ifconfig`, `route`, `netstat`), persistência declarativa via **NetworkManager** (`nmcli`) ou **Netplan**, resolução de nomes via `/etc/nsswitch.conf` e filtragem no **Netfilter** do kernel (**nftables**, **iptables**, **firewalld** e **ufw**).',
      'Pilha moderna iproute2 (`ip` e `ss` substituindo `ifconfig`/`route`/`netstat` obsoletos): `ip addr` (ou `ip a`) exibe/configura IPs e links; `ip link set eth0 up`; `ip route` exibe/adiciona rotas (`ip route add 10.20.0.0/16 via 192.168.1.254` ou `ip route get 8.8.8.8`); `ip neigh` exibe tabela ARP/NDP (*Neighbor Discovery Protocol*); `ss -tulpn` lista sockets TCP/UDP em escuta com PIDs (`ss -tan` para conexões TCP estabelecidas).',
      'Persistência de Rede (NetworkManager `nmcli`, Netplan e interfaces): alterações via comando `ip` são temporárias (somem no reboot!); em RHEL/Rocky/Fedora modernos usa-se `nmcli` (`nmcli con mod ...`, `nmcli con up ...` salvando em `/etc/NetworkManager/system-connections/`); em Ubuntu Server moderno usa-se YAML (*YAML Ain\'t Markup Language*) em `/etc/netplan/*.yaml` aplicado com `netplan try` / `netplan apply`.',
      'Resolução de Nomes no Linux (`/etc/nsswitch.conf`, `/etc/hosts` e `systemd-resolved`): `/etc/nsswitch.conf` (`hosts: files dns`) define a ordem de consulta (por padrão `/etc/hosts` vence o DNS em `/etc/resolv.conf`); em distros com `systemd-resolved`, `/etc/resolv.conf` costuma apontar para *stub* `127.0.0.53` gerenciado via `resolvectl status`.',
      'Firewall Local no Kernel (`nftables` / `iptables`, `firewalld`, `ufw`): Netfilter filtra pacotes nas *chains* `INPUT` (destino o próprio host), `FORWARD` (pacotes roteados através do host — exige `net.ipv4.ip_forward=1`) e `OUTPUT` (originados no host); `nftables` é o sucessor moderno do `iptables` (`nft add rule inet filter input tcp dport 443 accept` vs `iptables -A INPUT -p tcp --dport 443 -j ACCEPT`), frequentemente gerenciado por `firewalld` (`firewall-cmd --permanent --add-service=https && firewall-cmd --reload`) ou `ufw` (*Uncomplicated Firewall*).',
      'Diagnóstico Rápido de Rede e Captura: `ping`, `traceroute`/`mtr` (perda *hop-a-hop*), `dig`/`nslookup` (DNS), `curl -Iv` (TCP/TLS/HTTP), `ethtool eth0` (link detectado, velocidade `1000Mb/s Full` Duplex) e `tcpdump -i eth0 -nn port 443` (captura de pacotes na CLI).',
      'Exemplo operacional: em um servidor RHEL, configura-se IP fixo persistente com `nmcli con mod eth0 ipv4.addresses 10.10.5.20/24 ipv4.gateway 10.10.5.1 ipv4.dns 10.10.1.10 ipv4.method manual && nmcli con up eth0` e libera-se HTTPS no firewall usando `firewall-cmd --permanent --add-service=https && firewall-cmd --reload` (equivalente no **nftables** a `nft add rule inet filter input tcp dport 443 accept`). Em seguida, `ip route get 10.20.0.10` e `ss -tulpn` validam rota de saída e escuta na porta `443`.'
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
    keyTerms: [
      'iproute2 (ip addr / ip route / ss): suíte moderna de configuração temporária de IPs, rotas, vizinhos ARP/NDP e sockets em escuta',
      'nmcli vs Netplan: ferramentas de persistência de rede em NetworkManager (/etc/NetworkManager) e Ubuntu (/etc/netplan/*.yaml)',
      'nftables / iptables / firewalld: filtragem no Netfilter (INPUT/FORWARD/OUTPUT) e aplicação permanente via --permanent + --reload',
      '/etc/nsswitch.conf & resolv.conf: controle da ordem de resolução de nomes (files antes de dns) e servidores DNS/stub 127.0.0.53',
      'ethtool & tcpdump: inspeção física de enlace/velocidade/duplex na NIC e captura de pacotes em linha de comando (-nn)'
    ]
  },
  '11.2.10': {
    itemId: '11.2.10',
    highYieldSummary: [
      'Definição e escopo: o subsistema de **logs** do Linux registra eventos de sistema, autenticação, kernel e segurança em `/var/log` por meio da integração entre `systemd-journald` (diário binário indexado) e `rsyslog` (arquivos textuais e encaminhamento remoto). Complementa-se com rotação controlada pelo `logrotate` e sincronização temporal via **chrony/NTP** para correlação forense.',
      'Diretório `/var/log` e Arquivos Principais: `/var/log/messages` (RHEL) ou `/var/log/syslog` (Debian/Ubuntu) para eventos gerais; `/var/log/secure` (RHEL) ou `/var/log/auth.log` (Debian) para logins SSH/`sudo`/PAM (*Pluggable Authentication Modules*); `/var/log/dmesg` ou `kern.log` (mensagens do kernel/drivers/OOM); `/var/log/audit/audit.log` (SELinux [*Security-Enhanced Linux*]/`auditd`); `last`/`lastb` (`wtmp`/`btmp`) para histórico de logins bem-sucedidos e falhos.',
      'Arquitetura `journald` vs `rsyslog`: `systemd-journald` captura precocemente mensagens do boot, kernel e stdout/stderr de serviços em formato binário indexado (`journalctl`); `rsyslog` lê entradas (do socket/journal) e as grava em arquivos texto tradicionais em `/var/log` ou encaminha via rede TCP/TLS `514`/`6514` para SIEM remoto.',
      'Rotação Automática de Logs (`logrotate`): evita que arquivos em `/var/log` cresçam infinitamente até encher o disco; configurado em `/etc/logrotate.conf` e `/etc/logrotate.d/<servico>` definindo periodicidade (`daily`, `weekly`, `size 100M`), retenção (`rotate 12`), compressão (`compress`, `delaycompress`), `missingok`, `notifempty` e `postrotate` (para sinalizar `HUP`/`reload` ao daemon abrir novo descritor) ou `copytruncate`.',
      'Inspeção Dinâmica e Forense de Logs: `tail -f` / `tail -n 200` (monitoramento ao vivo), `less +F` (navegação segura sem carregar tudo na RAM), `zgrep`/`zcat` (pesquisar direto dentro de logs antigos rotacionados `.gz` sem descompactar no disco!).',
      'Sincronização de Tempo (`chrony` / NTP) para Logs: logs de múltiplos servidores só são correlacionáveis durante incidentes de segurança ou falhas distribuídas se todos estiverem sincronizados via `chronyd` (`chronyc sources` / `timedatectl`).',
      'Exemplo operacional: durante investigação de acessos suspeitos em servidor Debian, `zgrep "Failed password" /var/log/auth.log.*.gz` analisa arquivos rotacionados compactados, enquanto `tail -f /var/log/auth.log` monitora novas tentativas e `chronyc sources` confirma sincronia NTP para correlação no SIEM. Para evitar que a rotação de `/var/log/nginx/access.log` mantenha o processo escrevendo no arquivo antigo, `/etc/logrotate.d/nginx` dispara `kill -USR1 $(cat /run/nginx.pid)` (ou `reload`) no bloco `postrotate ... endscript`.'
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
    keyTerms: [
      '/var/log (syslog/messages & auth/secure): equivalência de logs gerais e de autenticação entre famílias Debian e Red Hat',
      'journald vs rsyslog: coleta binária indexada desde o boot (journalctl) versus gravação textual em /var/log e envio remoto via rede',
      'logrotate (postrotate vs copytruncate): automação de rotação, retenção e compressão sinalizando o daemon ou truncando o arquivo ativo',
      'zgrep / tail -f / less +F: pesquisa direta em arquivos .gz comprimidos e acompanhamento contínuo em tempo real',
      'chrony / NTP (chronyc sources): sincronização precisa de relógio essencial para correlação cronológica de logs em SIEM'
    ]
  }
};
