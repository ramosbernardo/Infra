import { EDITAL_ITEM_MAP } from './edital';
import { GUIDES_AXIS_1 } from './guides/axis1';
import { GUIDES_AXIS_2 } from './guides/axis2';
import { GUIDES_AXIS_3 } from './guides/axis3';
import { GUIDES_AXIS_4 } from './guides/axis4';
import { GUIDES_AXIS_5 } from './guides/axis5';
import { GUIDES_AXIS_6 } from './guides/axis6';
import { GUIDES_AXIS_7 } from './guides/axis7';
import { GUIDES_AXIS_8 } from './guides/axis8';
import { GUIDES_AXIS_9 } from './guides/axis9';
import { GUIDES_AXIS_10 } from './guides/axis10';
import { GUIDES_AXIS_11 } from './guides/axis11';
import { GUIDES_AXIS_12 } from './guides/axis12';
import { GUIDES_AXIS_13 } from './guides/axis13';
import { GUIDES_AXIS_14 } from './guides/axis14';
import { GUIDES_AXIS_15 } from './guides/axis15';
import { GUIDES_AXIS_16A } from './guides/axis16a';
import { GUIDES_AXIS_16B } from './guides/axis16b';
import { FLASHCARDS_AXIS_1_TO_4 } from './flashcards/axis1to4';
import { FLASHCARDS_AXIS_5_TO_8 } from './flashcards/axis5to8';
import { FLASHCARDS_AXIS_9_TO_12 } from './flashcards/axis9to12';
import { FLASHCARDS_AXIS_13_TO_16 } from './flashcards/axis13to16';
import { Flashcard, StudyGuide } from '../types/edital';

export const ALL_STUDY_GUIDES: Readonly<Record<string, StudyGuide>> = Object.freeze({
  ...GUIDES_AXIS_1,
  ...GUIDES_AXIS_2,
  ...GUIDES_AXIS_3,
  ...GUIDES_AXIS_4,
  ...GUIDES_AXIS_5,
  ...GUIDES_AXIS_6,
  ...GUIDES_AXIS_7,
  ...GUIDES_AXIS_8,
  ...GUIDES_AXIS_9,
  ...GUIDES_AXIS_10,
  ...GUIDES_AXIS_11,
  ...GUIDES_AXIS_12,
  ...GUIDES_AXIS_13,
  ...GUIDES_AXIS_14,
  ...GUIDES_AXIS_15,
  ...GUIDES_AXIS_16A,
  ...GUIDES_AXIS_16B,
});

export function getStudyGuideForItem(itemId: string): StudyGuide {
  const curated = ALL_STUDY_GUIDES[itemId];
  if (curated) return curated;

  const item = EDITAL_ITEM_MAP[itemId];
  return {
    itemId,
    highYieldSummary: [
      item
        ? `Item ${item.id}: ${item.literalText}`
        : 'Item não localizado no edital oficial.',
    ],
    examTraps: [],
    keyTerms: item?.keywords ?? [],
  };
}

export const INITIAL_FLASHCARDS: readonly Flashcard[] = Object.freeze([
  {
    id: 'fc-1',
    itemId: '1.1.1',
    front: 'Quais flags TCP realizam a abertura (three-way handshake), o encerramento gracioso normal e o encerramento abrupto?',
    back: 'Abertura: SYN -> SYN-ACK -> ACK. Encerramento gracioso: FIN/ACK em ambos os sentidos. Encerramento abrupto: RST.'
  },
  {
    id: 'fc-2',
    itemId: '1.1.2',
    front: 'Quais os 3 blocos privados IPv4 (RFC 1918), o prefixo Link-Local IPv6 e a exceção /31 (RFC 3021)?',
    back: 'RFC 1918: 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Link-Local IPv6: fe80::/10. RFC 3021: /31 usa os 2 endereços em enlaces ponto a ponto.'
  },
  {
    id: 'fc-3',
    itemId: '1.2.4',
    front: 'Em uma porta trunk IEEE 802.1Q, qual é o tamanho da tag inserida e como trafega a VLAN nativa por padrão?',
    back: 'Tag de 4 bytes (TPID 0x8100 + VID de 12 bits). A VLAN nativa trafega sem tag (untagged) por padrão e deve coincidir nos dois lados.'
  },
  {
    id: 'fc-4',
    itemId: '1.2.5',
    front: 'No STP (802.1D), qual switch vence a eleição de Root Bridge e quais são os estados do RSTP (802.1w)?',
    back: 'Vence o MENOR Bridge ID (Prioridade + MAC). RSTP usa apenas 3 estados: Discarding, Learning e Forwarding.'
  },
  {
    id: 'fc-5',
    itemId: '2.1.1',
    front: 'Qual a diferença operacional de posicionamento e ação entre IDS e IPS?',
    back: 'IDS atua passivamente (out-of-band, via SPAN/TAP) apenas detectando e alertando; IPS atua inline bloqueando pacotes maliciosos em tempo real.'
  },
  {
    id: 'fc-6',
    itemId: '2.2.7',
    front: 'No IPsec, compare AH (IP 51) e ESP (IP 50) quanto à criptografia, travessia de NAT e número de sequência anti-replay.',
    back: 'AH (IP 51) autentica/garante integridade sem criptografar e quebra com NAT. ESP (IP 50) criptografa + autentica e atravessa NAT via NAT-T (UDP 4500). AMBOS (AH e ESP) possuem número de sequência anti-replay de 32 bits (64 bits com ESN) verificado por janela deslizante.'
  },
  {
    id: 'fc-7',
    itemId: '3.2.5',
    front: 'Qual a ordem padrão de aplicação de GPOs (LSDOU) e quem vence em conflito entre Enforced e Block Inheritance?',
    back: 'Local -> Site -> Domínio -> OU (última aplicada vence). Enforced (No Override) SEMPRE prevalece sobre Block Inheritance.'
  },
  {
    id: 'fc-8',
    itemId: '3.2.7',
    front: 'Quais são as 5 funções FSMO do Active Directory divididas entre Floresta e Domínio?',
    back: 'Floresta (2): Schema Master e Domain Naming Master. Domínio (3): PDC Emulator, RID Master e Infrastructure Master.'
  },
  {
    id: 'fc-9',
    itemId: '3.2.8',
    front: 'Qual porta o Kerberos utiliza, qual ticket autentica no TGS e qual o limite padrão de clock skew?',
    back: 'TCP/UDP 88. O cliente apresenta o TGT (recebido do AS) ao TGS para obter Service Tickets. Tolerância máxima padrão de relógio: 5 minutos.'
  },
  {
    id: 'fc-10',
    itemId: '4.1.2',
    front: 'Como atuam SPF, DKIM e DMARC juntos contra spoofing de e-mail?',
    back: 'SPF (TXT) autoriza IPs do envelope; DKIM (TXT) valida assinatura criptográfica; DMARC (_dmarc TXT) exige alinhamento do domínio "From:" com SPF ou DKIM e aplica política none/quarantine/reject.'
  },
  {
    id: 'fc-11',
    itemId: '5.1.3',
    front: 'Compare RAID 5, RAID 6 e RAID 10 quanto ao mínimo de discos, tolerância a falhas e write penalty.',
    back: 'RAID 5: mín 3 discos, tolera 1, write penalty 4. RAID 6: mín 4 discos, tolera 2, write penalty 6. RAID 10: mín 4 discos, tolera 1 por par, write penalty 2 (melhor IOPS de escrita).'
  },
  {
    id: 'fc-12',
    itemId: '6.1.1',
    front: 'Qual backup NÃO limpa o archive bit e quais mídias são exigidas no restore de quinta-feira (Full no domingo)?',
    back: 'Diferencial não limpa o archive bit (restore: Domingo Full + Quinta Diferencial). Incremental limpa o bit (restore: Domingo + Seg + Ter + Qua + Qui).'
  },
  {
    id: 'fc-13',
    itemId: '6.2.5',
    front: 'Diferencie RPO de RTO em continuidade e recuperação de desastres.',
    back: 'RPO: perda máxima tolerável de dados (tempo para trás). RTO: tempo máximo tolerável de indisponibilidade até o retorno da operação (tempo para frente).'
  },
  {
    id: 'fc-14',
    itemId: '7.1.2',
    front: 'Quais os 3 atores do 802.1X e as portas UDP padrão do RADIUS?',
    back: 'Supplicant (cliente), Authenticator (switch/AP via EAPoL) e Authentication Server (RADIUS). Portas RADIUS: UDP 1812 (autenticação) e UDP 1813 (accounting).'
  },
  {
    id: 'fc-15',
    itemId: '8.1.4',
    front: 'Quais os limites recomendados para VoIP (latência, jitter e perda) e quais portas usa o SIP vs RTP?',
    back: 'Latência unidirecional <= 150ms, Jitter <= 30ms, Perda <= 1%. SIP (sinalização): TCP/UDP 5060 e TLS 5061. RTP (mídia): portas UDP dinâmicas pares.'
  },
  {
    id: 'fc-16',
    itemId: '9.2.7',
    front: 'O que é SSL Offloading no ADC e qual cabeçalho preserva o IP do cliente quando há SNAT?',
    back: 'Terminação TLS no balanceador (A10/HAProxy) para aliviar CPU dos backends e permitir inspeção L7. X-Forwarded-For preserva o IP original do cliente.'
  },
  {
    id: 'fc-17',
    itemId: '10.1.1',
    front: 'Qual a diferença entre SNMP TRAP e INFORM, e qual modo do SNMPv3 oferece confidencialidade?',
    back: 'TRAP (UDP 162) não exige ACK; INFORM (UDP 162) exige confirmação ACK do gerente. SNMPv3 authPriv provê autenticação e criptografia (AES).'
  },
  {
    id: 'fc-18',
    itemId: '11.1.1',
    front: 'Qual a sequência de boot do Linux com UEFI/GRUB2 e qual comando aplica alterações de /etc/default/grub?',
    back: 'UEFI (/boot/efi FAT32) -> GRUB2 -> Kernel (vmlinuz) + initramfs -> raiz (/) -> PID 1 (systemd). Após editar /etc/default/grub, rodar update-grub (Debian) ou grub2-mkconfig -o ... (RHEL).'
  },
  {
    id: 'fc-19',
    itemId: '11.2.4',
    front: 'No systemd, qual a diferença entre systemctl enable, start, mask e daemon-reload?',
    back: 'enable ativa no boot; start inicia imediatamente; mask bloqueia totalmente linkando para /dev/null; daemon-reload relê arquivos .service modificados.'
  },
  {
    id: 'fc-20',
    itemId: '11.2.7',
    front: 'Com umask 027 no Linux, quais permissões nascem para arquivos e diretórios e o que faz o Sticky Bit?',
    back: 'Arquivo: 640 (rw-r-----). Diretório: 750 (rwxr-x---). Sticky Bit (1xxx) impede usuários de apagar/renomear arquivos de terceiros na pasta compartilhada.'
  },
  {
    id: 'fc-21',
    itemId: '12.1.2',
    front: 'O que containers Docker compartilham com o host e qual é a menor unidade implantável no Kubernetes?',
    back: 'Docker compartilha o kernel do host usando namespaces (isolamento) e cgroups (limites). No Kubernetes, a menor unidade é o Pod (estado no etcd).'
  },
  {
    id: 'fc-22',
    itemId: '13.1.4',
    front: 'Na assinatura digital, qual chave cifra o hash do documento e quais princípios são garantidos?',
    back: 'Cifra-se o hash com a CHAVE PRIVADA do emissor (valida-se com a pública do certificado X.509). Garante Integridade, Autenticidade e Não Repúdio.'
  },
  {
    id: 'fc-23',
    itemId: '14.1.1',
    front: 'Qual a diferença prática entre Gerenciamento de Incidentes e Gerenciamento de Problemas?',
    back: 'Incidente foca em restaurar o serviço o mais rápido possível (inclusive com workaround). Problema investiga a causa raiz (RCA) e registra Erro Conhecido.'
  },
  {
    id: 'fc-24',
    itemId: '15.1.1',
    front: 'Qual a diferença entre Data Center Tier III e Tier IV segundo o Uptime Institute?',
    back: 'Tier III (Concurrently Maintainable, 99,982%): manutenção planejada sem parada, 1 caminho ativo. Tier IV (Fault Tolerant, 99,995%): tolera falhas não planejadas, 2N/2N+1 ativo.'
  },
  {
    id: 'fc-25',
    itemId: '16.2.1',
    front: 'Quantos objetivos tem o COBIT 2019 e quais domínios pertencem à Governança vs Gestão?',
    back: '40 objetivos: Governança = EDM (Avaliar, Dirigir e Monitorar); Gestão = APO, BAI, DSS e MEA.'
  },
  {
    id: 'fc-26',
    itemId: '16.2.14',
    front: 'Na LAI (Lei nº 12.527/2011), quais os prazos de resposta e de classificação de sigilo?',
    back: 'Resposta: imediata ou até 20 dias (+10 prorrogáveis); Recurso: 10 dias. Sigilo: Ultrassecreta 25 anos, Secreta 15 anos, Reservada 5 anos (pessoais íntimas 100 anos).'
  },
  {
    id: 'fc-27',
    itemId: '16.2.15',
    front: 'Na LGPD (Lei nº 13.709/2018), quem são Controlador, Operador, Encarregado e qual base legal NÃO vale para dados sensíveis?',
    back: 'Controlador decide; Operador executa em nome do controlador; Encarregado (DPO) intermedeia titulares/ANPD. Legítimo interesse (art. 7º, IX) NÃO se aplica a dados sensíveis (art. 11).'
  },
  ...FLASHCARDS_AXIS_1_TO_4,
  ...FLASHCARDS_AXIS_5_TO_8,
  ...FLASHCARDS_AXIS_9_TO_12,
  ...FLASHCARDS_AXIS_13_TO_16
]);
