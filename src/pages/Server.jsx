import React from 'react';
import {
  ArrowRight,
  Cloud,
  GitBranch,
  Activity,
  Shield,
  Database,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoVisual from './DemoVisual';
import ServiceOwners from './ServiceOwners';

const owners = [
  {
    name: '루비',
    role: '서버 세팅',
    image: '/assets/ruby_profile.png',
  },
  {
    name: '재현',
    role: '인프라 운영',
    image: '/assets/jaehyun_profile.png',
  },
];

const stack = {
  Cloud: ['AWS (EC2·ECS·RDS·S3)', 'Vercel', 'Cloudflare', 'GCP'],
  컨테이너: ['Docker', 'docker-compose', 'ECS / Fargate'],
  'CI/CD': ['GitHub Actions', 'GitLab CI', 'Vercel Deploy'],
  관측: ['Sentry', 'Datadog', 'Grafana', 'Uptime Kuma'],
  보안: ['Cloudflare WAF', "Let's Encrypt", 'Secrets Manager'],
};

const offerings = [
  {
    icon: Cloud,
    title: '인프라 설계 · 구축',
    desc: '트래픽·데이터 규모에 맞춘 클라우드 환경을 구성합니다.',
    bullets: [
      'AWS / Vercel / Cloudflare',
      'VPC·서브넷·보안 그룹 설계',
      '비용 최적화 컨설팅',
    ],
  },
  {
    icon: GitBranch,
    title: 'CI/CD · 무중단 배포',
    desc: 'PR 머지부터 프로덕션 반영까지 자동화합니다.',
    bullets: [
      'GitHub Actions 파이프라인',
      'Blue/Green · Rolling 배포',
      '롤백 절차 정비',
    ],
  },
  {
    icon: Activity,
    title: '모니터링 · 장애 대응',
    desc: '지표·로그·알림 체계를 정비해 장애를 빠르게 인지합니다.',
    bullets: [
      'Sentry·Datadog 연동',
      '알림 채널 분기(Slack 등)',
      '장애 런북 작성',
    ],
  },
  {
    icon: Database,
    title: 'DB · 데이터 운영',
    desc: '백업·복구·성능 튜닝까지 데이터 운영을 지원합니다.',
    bullets: ['자동 백업 / PITR', '쿼리 인덱스·튜닝', '마이그레이션 절차'],
  },
  {
    icon: Shield,
    title: '보안 · 컴플라이언스',
    desc: '기본 보안 항목을 점검하고 외부 공격에 대비합니다.',
    bullets: ['WAF / Rate Limit', 'Secrets·키 회전', '취약점 진단·패치'],
  },
];

const capabilities = [
  {
    icon: Cloud,
    title: '클라우드 네이티브 설계',
    desc: '단일 서버의 한계를 넘어, 트래픽에 따라 자동으로 확장되고 장애를 스스로 복구하는 인프라를 설계합니다.',
    details: [
      'AWS/Vercel 아키텍처',
      '오토스케일링 & 로드밸런싱',
      '서버리스 하이브리드 구성',
    ],
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    desc: '코드가 자동으로 테스트되고 배포되는 파이프라인을 구축하여, 휴먼 에러를 방지하고 제품 출시 속도를 높입니다.',
    details: [
      'GitHub Actions 자동화',
      '무중단 배포(Blue/Green)',
      '인프라 코드화 (IaC)',
    ],
  },
  {
    icon: Activity,
    title: '관측 가능성 (Observability)',
    desc: '장애가 발생하기 전에 징후를 먼저 포착하고, 문제 발생 시 원인을 즉시 파악할 수 있는 정교한 대시보드를 구축합니다.',
    details: [
      '실시간 로그 분석(ELK)',
      '리소스 메트릭 모니터링',
      '슬랙 장애 즉시 알림',
    ],
  },
  {
    icon: Shield,
    title: '보안 강화 및 안정화',
    desc: '외부 공격으로부터 서비스를 보호하고, 정기적인 백업과 복구 테스트를 통해 어떤 상황에서도 데이터를 지킵니다.',
    details: [
      'WAF & DDoS 방어 설정',
      '자동 백업 및 PITR 복구',
      'SSL/TLS 보안 인증',
    ],
  },
];

const process = [
  {
    step: '01',
    title: '현재 위험 점검',
    desc: '배포 방식, 백업, 로그, 서버비, 장애 대응 흐름을 먼저 확인합니다.',
  },
  {
    step: '02',
    title: '운영 기준 정리',
    desc: '어디까지 자동화하고 어떤 장애를 어떤 시간 안에 대응할지 정합니다.',
  },
  {
    step: '03',
    title: '배포·모니터링 구축',
    desc: 'CI/CD, 알림, 백업, 도메인, SSL을 운영 기준에 맞춰 구성합니다.',
  },
  {
    step: '04',
    title: '인계와 런북',
    desc: '장애 시 확인할 순서, 계정, 복구 방법을 문서로 남깁니다.',
  },
];

const fitCases = [
  {
    title: '배포할 때마다 서비스가 불안한 경우',
    desc: '수동 업로드와 임시 서버 운영을 줄이고 되돌릴 수 있는 배포 흐름을 만듭니다.',
  },
  {
    title: '장애가 나도 원인을 모르는 경우',
    desc: '로그, 오류 추적, 알림을 연결해 문제가 어디서 시작됐는지 볼 수 있게 합니다.',
  },
  {
    title: '서버비와 백업이 관리되지 않는 경우',
    desc: '불필요한 리소스를 줄이고, 백업과 복구 기준을 실제로 운영 가능한 수준으로 정리합니다.',
  },
];

const projectBrief = [
  {
    label: '예상 기간',
    value: '1~4주',
    desc: '점검형은 짧게, 배포·백업·모니터링 구축은 단계별로 진행합니다.',
  },
  {
    label: '시작 범위',
    value: '범위 검토 후 안내',
    desc: '현재 계정 접근, 배포 방식, 백업 상태를 확인한 뒤 우선순위를 잡습니다.',
  },
  {
    label: '주요 산출물',
    value: '운영 환경 + 런북',
    desc: 'CI/CD, 모니터링, 백업 기준, 장애 대응 문서를 함께 인도합니다.',
  },
];

const useCases = [
  {
    title: '외주 결과물 운영 인계',
    desc: '기존 코드와 서버를 이어받아 배포 방법, 계정, 백업, 장애 확인 절차를 정리합니다.',
    visual: 'infra',
    items: [
      '서버·도메인 계정 점검',
      '배포 절차 문서화',
      '환경변수 정리',
      '백업 상태 확인',
    ],
  },
  {
    title: '서비스 출시 인프라',
    desc: 'MVP 출시 전 필요한 호스팅, DB, SSL, CI/CD, 오류 추적을 묶어 기본 운영 환경을 만듭니다.',
    visual: 'deploy',
    items: ['프로덕션·스테이징', '도메인·SSL', 'DB 백업', 'Sentry·Uptime 알림'],
  },
  {
    title: '장애·비용 개선',
    desc: '느린 응답, 잦은 장애, 과한 서버비를 점검하고 우선순위에 맞춰 개선합니다.',
    visual: 'metrics',
    items: ['로그·메트릭 확인', '쿼리·캐시 점검', '리소스 정리', '장애 런북'],
  },
];

const scopePackages = [
  {
    title: '점검형',
    desc: '현재 서버 상태를 확인하고 위험 요소와 개선 순서를 리포트로 정리합니다.',
  },
  {
    title: '구축형',
    desc: '배포, 백업, 알림, 도메인, SSL을 포함한 기본 운영 환경을 새로 구성합니다.',
  },
  {
    title: '운영형',
    desc: '월 단위로 모니터링, 백업, 업데이트, 장애 대응을 맡아 서비스 운영 부담을 줄입니다.',
  },
];

const checklist = [
  '현재 배포 방식',
  '서버·도메인·DB 계정 접근 권한',
  '백업 주기와 복구 경험',
  '장애 알림 채널',
  '월 서버비와 트래픽 규모',
];

function Server() {
  return (
    <div className="page serverPage">
      <section className="subHero shell">
        <div className="subHeroContent">
          <div className="subHeroLabel">Server & Infra</div>
          <h1>24시간 멈추지 않는 서비스를 만듭니다.</h1>
          <p>
            서버는 처음보다 운영 중에 더 많은 문제가 생깁니다. 배포, 장애 알림,
            백업, 비용 관리처럼 매달 반복되는 불안을 줄이는 환경을 만듭니다.
          </p>
          <div className="subHeroActions">
            <a
              className="primaryButton large"
              href="https://kmong.com/gig/767729"
              target="_blank"
              rel="noopener noreferrer"
            >
              프로젝트 문의
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
          <h2>인프라를 사야 하는 상황</h2>
          <p>
            서버 구축보다 중요한 것은 장애가 났을 때 복구할 수 있는 운영
            기준입니다.
          </p>
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
          <h2>대표 인프라 작업</h2>
          <p>
            서버를 새로 만드는 것보다 운영 리스크를 줄이는 일이 먼저일 때가
            많습니다.
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
            Infra Engineering
          </div>
          <h2>운영에서 필요한 인프라</h2>
          <p>거창한 아키텍처보다 배포, 알림, 백업, 복구가 먼저입니다.</p>
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
                  {details && details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scopeSection shell">
        <div className="sectionHeader compact">
          <h2>인프라 범위 잡는 방식</h2>
          <p>점검, 구축, 운영을 분리해 지금 필요한 만큼만 진행합니다.</p>
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
          <h2>인프라 구축 프로세스</h2>
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

      <section className="examplesSection shell">
        <div className="sectionHeader compact">
          <h2>제공하는 작업</h2>
        </div>
        <div className="exampleGrid">
          {offerings.map(({ icon: Icon, title, desc, bullets }) => (
            <article className="exampleTile" key={title}>
              <Icon size={20} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul>
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="stackSection shell">
        <div className="sectionHeader compact">
          <h2>사용 기술</h2>
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

      <section className="planSection shell">
        <div className="sectionHeader compact">
          <h2>운영 플랜</h2>
          <p>고정 월정액 또는 프로젝트 단위로 진행합니다.</p>
        </div>
        <div className="planGrid">
          <article className="planCard">
            <h3>Basic</h3>
            <div className="planPrice">월 30만원~</div>
            <p>단일 웹·봇 운영</p>
            <ul>
              <li>호스팅·도메인·SSL 관리</li>
              <li>주간 백업</li>
              <li>월 1회 상태 점검 리포트</li>
            </ul>
          </article>
          <article className="planCard featured">
            <h3>Standard</h3>
            <div className="planPrice">월 80만원~</div>
            <p>SaaS·다중 서비스 운영</p>
            <ul>
              <li>실시간 모니터링·알림</li>
              <li>일일 자동 백업</li>
              <li>장애 우선 대응 (영업시간 1시간 내)</li>
            </ul>
          </article>
          <article className="planCard">
            <h3>Enterprise</h3>
            <div className="planPrice">별도 협의</div>
            <p>대규모 트래픽·전용 인프라</p>
            <ul>
              <li>오토스케일·전용 VPC</li>
              <li>24/7 온콜 대응</li>
              <li>정기 보안 진단</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="ctaSection shell">
        <div className="ctaCard card-shell">
          <div className="card-inner">
            <h2>인프라 점검 / 마이그레이션 문의</h2>
            <p>현재 사용 중인 환경을 알려주시면 개선안을 회신드립니다.</p>
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

export default Server;
