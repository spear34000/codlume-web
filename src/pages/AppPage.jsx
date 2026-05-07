import React from 'react';
import {
  ArrowRight,
  Smartphone,
  Bell,
  Layers,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoVisual from './DemoVisual';
import ServiceOwners from './ServiceOwners';

const owners = [
  {
    name: 'spear',
    role: '앱 개발',
    image: '/assets/spear_profile.png',
  },
];

const stack = {
  'Cross-platform': ['React Native', 'Flutter', 'Expo'],
  Native: ['Swift / SwiftUI', 'Kotlin / Jetpack Compose'],
  Backend: ['Node.js', 'Firebase', 'Supabase', 'FastAPI'],
  서비스: ['FCM 푸시', 'OAuth 소셜로그인', '지도·LBS API', 'Sentry'],
};

const capabilities = [
  {
    icon: Smartphone,
    title: 'OS 맞춤형 경험',
    desc: 'iOS와 Android의 디자인 가이드라인을 준수하면서도, 브랜드의 정체성이 녹아든 독창적인 UI를 구현합니다.',
    details: [
      'Native 수준의 부드러운 스크롤',
      '시스템 다크모드 완벽 지원',
      '햅틱 피드백 등 감성 품질',
    ],
  },
  {
    icon: Layers,
    title: '오프라인 우선 설계',
    desc: '네트워크가 불안정한 상황에서도 중단 없는 서비스 이용을 위해 데이터 로컬 동기화 기술을 적용합니다.',
    details: [
      'SQLite/Realm 기반 로컬 DB',
      '백그라운드 데이터 동기화',
      '충돌 해결 알고리즘',
    ],
  },
  {
    icon: Bell,
    title: '전략적 푸시 마케팅',
    desc: '사용자 이탈을 막고 재방문을 유도하는 지능형 알림 시스템과 개인화 푸시 시나리오를 설계합니다.',
    details: [
      'FCM 기반 타겟팅 푸시',
      '딥링크 시스템 연동',
      '사용자 행동 기반 자동 알림',
    ],
  },
  {
    icon: Zap,
    title: '성능 중심 개발',
    desc: '배터리 소모를 최소화하고 메모리 효율을 극대화하여 저사양 기기에서도 쾌적한 속도를 보장합니다.',
    details: [
      '이미지 캐싱 최적화',
      '네트워크 페이징 처리',
      '번들 사이즈 최소화',
    ],
  },
];

const process = [
  {
    step: '01',
    title: '앱 필요성 판단',
    desc: '웹으로 충분한 기능과 앱이 꼭 필요한 기능을 나눠 불필요한 개발비를 줄입니다.',
  },
  {
    step: '02',
    title: 'MVP 기능 확정',
    desc: '로그인, 푸시, 결제, 지도, 관리자 중 출시판에 필요한 것만 먼저 정합니다.',
  },
  {
    step: '03',
    title: '스토어 준비',
    desc: '심사 정책, 권한 문구, 스크린샷, 메타데이터를 개발 중 함께 준비합니다.',
  },
  {
    step: '04',
    title: '출시 후 안정화',
    desc: '크래시, 푸시, 계정, 스토어 이슈를 확인하며 초기 운영을 돕습니다.',
  },
];

const fitCases = [
  {
    title: '푸시·카메라·위치처럼 앱 기능이 필요할 때',
    desc: '모바일 웹으로 부족한 기능이 명확할 때 앱 개발비가 설득력을 가집니다.',
  },
  {
    title: 'iOS·Android를 동시에 검증해야 할 때',
    desc: '처음부터 네이티브 양쪽을 크게 만들기보다 크로스플랫폼으로 출시 비용을 조절합니다.',
  },
  {
    title: '스토어 출시 경험이 부족할 때',
    desc: '심사, 서명, 권한, 메타데이터에서 막히지 않도록 개발과 출시를 같이 봅니다.',
  },
];

const projectBrief = [
  {
    label: '예상 기간',
    value: '4~10주',
    desc: '스토어 심사와 필수 네이티브 기능을 고려해 단계별로 잡습니다.',
  },
  {
    label: '시작 범위',
    value: '범위 검토 후 안내',
    desc: '앱이 꼭 필요한 기능과 웹으로 충분한 기능을 먼저 분리합니다.',
  },
  {
    label: '주요 산출물',
    value: '앱 빌드 + 스토어 준비',
    desc: 'iOS·Android 빌드, 푸시/로그 환경, 스토어 메타데이터를 정리합니다.',
  },
];

const useCases = [
  {
    title: '예약·멤버십 앱',
    desc: '반복 방문이 중요한 서비스에서 로그인, 예약, 쿠폰, 푸시를 묶어 재방문 흐름을 만듭니다.',
    visual: 'membership',
    items: [
      '소셜 로그인',
      '예약·상태 관리',
      '푸시 리마인드',
      '관리자 예약 현황',
    ],
  },
  {
    title: '현장 업무 앱',
    desc: '사진 촬영, 위치 기록, 오프라인 입력처럼 현장에서 바로 처리해야 하는 업무를 앱으로 옮깁니다.',
    visual: 'field',
    items: [
      '카메라·파일 업로드',
      'GPS·지도',
      '오프라인 임시 저장',
      '작업 이력 동기화',
    ],
  },
  {
    title: '커머스·콘텐츠 앱',
    desc: '구매, 열람, 알림, 보관함처럼 사용자가 자주 돌아와야 하는 흐름을 모바일에 맞춰 설계합니다.',
    visual: 'commerce',
    items: ['상품·콘텐츠 목록', '결제·구매 이력', '딥링크', '푸시 캠페인'],
  },
];

const scopePackages = [
  {
    title: '앱 MVP',
    desc: '핵심 탭, 로그인, 기본 API 연동, 스토어 등록까지 최소 출시판을 만듭니다.',
  },
  {
    title: '운영 앱',
    desc: '푸시, 관리자, 크래시 추적, 계정/권한까지 포함해 출시 후 운영을 준비합니다.',
  },
  {
    title: '고도화 앱',
    desc: '지도, 결제, 오프라인 동기화, 네이티브 기능처럼 앱에서만 가능한 기능을 확장합니다.',
  },
];

const checklist = [
  '앱이 웹보다 나은 이유',
  '필수 디바이스 기능',
  'iOS·Android 우선순위',
  '스토어 계정 준비 여부',
  '출시 후 푸시·공지 운영 방식',
];

function AppPage() {
  return (
    <div className="page appPage">
      <section className="subHero shell">
        <div className="subHeroContent">
          <div className="subHeroLabel">Mobile App</div>
          <h1>스토어 출시까지 책임지는 모바일 앱.</h1>
          <p>
            앱이 꼭 필요한 이유부터 확인합니다. 웹으로 충분한 기능은 줄이고,
            푸시·위치·카메라·스토어 배포처럼 앱에서만 가치가 생기는 기능에
            집중합니다.
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
          <h2>앱을 사야 하는 상황</h2>
          <p>앱 개발비가 낭비되지 않도록 먼저 필요한 이유를 분명히 합니다.</p>
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
          <h2>대표 앱 유형</h2>
          <p>앱은 기능보다 사용자가 반복해서 돌아올 이유가 중요합니다.</p>
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
            Mobile Strategy
          </div>
          <h2>출시 후에도 쓸 수 있는 앱</h2>
          <p>
            화면 구현뿐 아니라 알림, 계정, 오류 추적, 운영 도구까지 같이 봅니다.
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
                  {details && details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scopeSection shell">
        <div className="sectionHeader compact">
          <h2>앱 범위 잡는 방식</h2>
          <p>스토어에 올릴 수 있는 최소판과 운영에 필요한 기능을 분리합니다.</p>
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
            App Lifecycle
          </div>
          <h2>앱 출시 프로세스</h2>
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

      <section className="deliverableSection shell">
        <div className="sectionHeader compact">
          <h2>인도 결과물</h2>
        </div>
        <ul className="deliverableList">
          <li>App Store / Google Play 정식 등록</li>
          <li>앱 서명 키 / 인증서 / 스토어 메타데이터</li>
          <li>관리자 페이지 또는 운영 도구</li>
          <li>크래시 모니터링·푸시 발송 환경</li>
          <li>인도 후 1개월 무상 유지보수</li>
        </ul>
      </section>

      <section className="ctaSection shell">
        <div className="ctaCard card-shell">
          <div className="card-inner">
            <h2>앱 프로젝트 검토 요청</h2>
            <p>참고 앱이나 핵심 기능만 알려주셔도 됩니다.</p>
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

export default AppPage;
