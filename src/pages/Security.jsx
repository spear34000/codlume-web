import React from 'react';
import {
  Activity,
  ExternalLink,
  FileSearch,
  KeyRound,
  Lock,
  ServerCog,
  ShieldCheck,
  Siren,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoVisual from './DemoVisual';
import ServiceOwners from './ServiceOwners';

const owners = [
  {
    name: 'GUnT_0x9',
    role: '보안 점검',
    image: '/assets/GUnT_0x9_profile.png',
  },
];

const stack = {
  진단: ['OWASP Top 10', '인증/권한 점검', '입력값 검증', '보안 헤더'],
  인프라: ['Cloudflare WAF', 'SSL/TLS', 'SSH Hardening', 'Firewall'],
  운영: ['접근 권한 관리', '로그 점검', '백업 기준', 'Incident Response'],
  도구: ['Sentry', 'GitHub Secret Scanning', 'Uptime Kuma', 'Dependabot'],
};

const capabilities = [
  {
    icon: FileSearch,
    title: '취약점 진단 리포트',
    desc: '웹, API, 서버 설정에서 실제 위험으로 이어질 수 있는 항목을 찾고, 영향도와 수정 우선순위를 정리합니다.',
    details: [
      'OWASP Top 10 기준 점검',
      '위험도별 개선 순서',
      '재현 가능한 증적 정리',
    ],
  },
  {
    icon: KeyRound,
    title: '인증과 권한 구조 점검',
    desc: '로그인, 세션, 관리자 권한, 내부 API 접근처럼 서비스 운영 중 사고로 이어지기 쉬운 흐름을 확인합니다.',
    details: [
      '세션/토큰 보관 방식',
      '관리자 메뉴 접근 제어',
      '권한 상승 가능성 점검',
    ],
  },
  {
    icon: ServerCog,
    title: '서버 보안 기본선 정리',
    desc: 'SSH, 방화벽, SSL, secret 관리, 배포 계정처럼 운영 환경에서 먼저 닫아야 할 기본 방어선을 구성합니다.',
    details: ['SSH 접근 정책', 'WAF/Rate limit 설정', '환경변수와 secret 분리'],
  },
  {
    icon: Activity,
    title: '운영 보안 모니터링',
    desc: '침해가 발생한 뒤에야 알게 되는 구조를 줄이기 위해 로그, 알림, 백업, 장애 대응 기준을 함께 정리합니다.',
    details: ['접근 로그 확인', '이상 징후 알림', '백업/복구 기준 문서화'],
  },
];

const process = [
  {
    step: '01',
    title: '범위와 접근 방식 정리',
    desc: '점검 대상, 계정 권한, 운영 중단 가능 시간, 민감 정보 처리 기준을 먼저 정합니다.',
  },
  {
    step: '02',
    title: '취약점과 설정 점검',
    desc: '웹/API 흐름, 서버 설정, 권한, 로그, 배포 환경을 확인하고 위험 항목을 분류합니다.',
  },
  {
    step: '03',
    title: '우선순위 기반 개선',
    desc: '서비스 영향이 큰 항목부터 패치, 설정 변경, 접근 제어, 모니터링 보강을 진행합니다.',
  },
  {
    step: '04',
    title: '리포트와 운영 기준 인계',
    desc: '진단 결과, 적용 내역, 남은 리스크, 추후 점검 기준을 문서로 정리해 전달합니다.',
  },
];

const fitCases = [
  {
    title: '출시 전 보안 점검이 필요한 경우',
    desc: '회원가입, 결제, 관리자, 고객 데이터가 있는 서비스에서 기본 취약점을 먼저 줄여야 할 때 적합합니다.',
  },
  {
    title: '외주 결과물을 인수받은 경우',
    desc: '코드와 서버를 넘겨받았지만 계정, secret, 배포 권한, 백업 기준이 명확하지 않은 상태를 정리합니다.',
  },
  {
    title: '운영 중 이상 징후가 걱정되는 경우',
    desc: '로그인 시도, 비정상 트래픽, 권한 노출, 서버 설정 불안 요소를 우선순위대로 확인합니다.',
  },
];

const projectBrief = [
  {
    label: '예상 기간',
    value: '1~3주',
    desc: '단순 점검은 빠르게, 코드/서버 개선까지 포함하면 범위에 맞춰 단계별로 진행합니다.',
  },
  {
    label: '시작 범위',
    value: '점검 / 강화 / 상담',
    desc: '취약점 진단, 보안 설정 적용, 운영 보안 기준 정리 중 필요한 범위만 선택합니다.',
  },
  {
    label: '주요 산출물',
    value: '리포트 + 개선 내역',
    desc: '발견 항목, 위험도, 조치 방법, 적용 내역과 남은 리스크를 함께 전달합니다.',
  },
];

const useCases = [
  {
    title: '웹/앱 취약점 점검',
    desc: '로그인, 관리자, 입력 폼, API 요청처럼 외부에 노출되는 흐름을 중심으로 실제 공격 가능성을 확인합니다.',
    visual: 'security-audit',
    items: [
      '인증/세션 점검',
      '권한 우회 확인',
      '입력값 검증',
      'OWASP Top 10 체크',
    ],
  },
  {
    title: '서버/인프라 보안 강화',
    desc: '서버 접속, 방화벽, SSL, WAF, secret 관리처럼 서비스가 운영되는 환경의 기본 방어선을 정리합니다.',
    visual: 'security-hardening',
    items: [
      'SSH 접근 제한',
      'WAF/Rate limit',
      'SSL/TLS 설정',
      '환경변수 secret 분리',
    ],
  },
  {
    title: '운영 보안 점검',
    desc: '접근 로그, 백업, 장애 대응, 알림 기준을 정리해 문제가 생겼을 때 빠르게 확인하고 대응할 수 있게 만듭니다.',
    visual: 'security-monitoring',
    items: [
      '접근 로그 확인',
      '관리자 권한 정리',
      '백업/복구 기준',
      '이상 징후 알림',
    ],
  },
];

const scopePackages = [
  {
    title: '진단형',
    desc: '코드와 서버 설정을 점검하고 위험도, 재현 조건, 개선 우선순위를 리포트로 정리합니다.',
  },
  {
    title: '개선형',
    desc: '점검에서 발견된 항목 중 즉시 조치 가능한 설정, 권한, 보안 헤더, 접근 제어를 적용합니다.',
  },
  {
    title: '운영형',
    desc: '로그, 백업, 알림, 계정 관리 기준을 만들어 보안 점검이 일회성으로 끝나지 않게 정리합니다.',
  },
];

const checklist = [
  '점검 대상 URL과 관리자 계정 범위',
  '서버/도메인/배포 계정 접근 가능 여부',
  '처리 중인 개인정보와 결제 정보 범위',
  '현재 알려진 장애나 이상 징후',
  '수정 적용까지 원하는지 리포트만 원하는지',
];

const deliverables = [
  '취약점 진단 리포트와 위험도 분류',
  '우선순위별 개선 가이드와 적용 내역',
  '서버/인프라 보안 설정 체크리스트',
  '접근 권한, secret, 백업 운영 기준 문서',
  '인계 후 1개월 무상 유지보수',
];

function Security() {
  return (
    <div className="page securityPage">
      <section className="subHero shell">
        <div className="subHeroContent">
          <div className="subHeroLabel">Security Outsourcing</div>
          <h1>서비스를 운영 가능한 보안 기준까지 정리합니다.</h1>
          <p>
            보안은 한 번 스캔하고 끝나는 작업이 아니라, 실제 서비스가 안전하게
            운영되도록 위험을 줄이는 과정입니다. 웹/API 취약점, 서버 설정, 권한,
            secret, 로그와 백업 기준까지 필요한 범위부터 점검하고 개선합니다.
          </p>
          <div className="subHeroActions">
            <a
              className="primaryButton large"
              href="https://kmong.com/gig/767729"
              target="_blank"
              rel="noopener noreferrer"
            >
              보안 상담 요청
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <ServiceOwners owners={owners} />
      </section>

      <section className="projectBriefSection shell">
        <div className="briefGrid">
          {projectBrief.map((item) => (
            <article className="briefCard" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fitSection shell">
        <div className="sectionHeader compact">
          <h2>보안 점검이 필요한 상황</h2>
          <p>무엇을 막을지보다 먼저, 어디가 실제 운영 리스크인지 확인합니다.</p>
        </div>
        <div className="fitGrid">
          {fitCases.map((item) => (
            <article className="fitTile" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detailSection shell">
        <div className="sectionHeader compact">
          <h2>대표 보안 작업 유형</h2>
          <p>
            경고를 늘리는 페이지가 아니라, 실제 조치 가능한 항목으로 정리합니다.
          </p>
        </div>
        <div className="detailGrid">
          {useCases.map((item) => (
            <article className={`detailCard ${item.visual}`} key={item.title}>
              <DemoVisual type={item.visual} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul>
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilitySection shell">
        <div className="sectionHeader compact">
          <div className="subHeroLabel" style={{ marginBottom: '16px' }}>
            Security Engineering
          </div>
          <h2>점검 후 바로 남는 결과</h2>
          <p>
            단순 취약점 목록이 아니라, 운영자가 다음 행동을 결정할 수 있는
            기준을 만듭니다.
          </p>
        </div>
        <div className="capabilityGrid">
          {capabilities.map(({ icon: Icon, title, desc, details }) => (
            <article className="capabilityTile" key={title}>
              <div className="tileIcon">
                <Icon size={24} />
              </div>
              <div className="tileContent">
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="tileBullets">
                  {details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scopeSection shell">
        <div className="sectionHeader compact">
          <h2>보안 범위 잡는 방식</h2>
          <p>
            전체를 한 번에 뒤집기보다, 현재 위험이 큰 영역부터 단계적으로
            줄입니다.
          </p>
        </div>
        <div className="scopeGrid">
          {scopePackages.map((item) => (
            <article className="scopeCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
        <ul className="checkList">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="processSection shell">
        <div className="sectionHeader compact">
          <div className="subHeroLabel" style={{ marginBottom: '16px' }}>
            Workflow
          </div>
          <h2>보안 점검 프로세스</h2>
        </div>
        <div className="processGrid">
          {process.map((p) => (
            <div className="processItem" key={p.step}>
              <span className="processStep">{p.step}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stackSection shell">
        <div className="sectionHeader compact">
          <h2>점검 기준과 도구</h2>
          <ShieldCheck size={16} />
        </div>
        <div className="stackTable">
          {Object.entries(stack).map(([group, items]) => (
            <div className="stackRow" key={group}>
              <span className="stackGroup">{group}</span>
              <ul>
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="deliverableSection shell">
        <div className="sectionHeader compact">
          <h2>인도 결과물</h2>
          <Lock size={16} />
        </div>
        <ul className="deliverableList">
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="ctaSection shell">
        <div className="ctaCard card-shell">
          <div className="card-inner">
            <h2>보안 점검 / 개선 상담</h2>
            <p>
              현재 서비스 주소와 걱정되는 지점을 알려주시면 필요한 점검 범위부터
              정리해드립니다.
            </p>
            <a
              className="primaryButton large"
              href="https://kmong.com/gig/767729"
              target="_blank"
              rel="noopener noreferrer"
            >
              크몽에서 문의
              <div className="icon-circle">
                <ExternalLink size={16} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Security;
