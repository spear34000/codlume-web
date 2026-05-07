import React from 'react';
import {
  ArrowRight,
  Layout,
  Database,
  ShieldCheck,
  Gauge,
  Palette,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoVisual from './DemoVisual';
import ServiceOwners from './ServiceOwners';

const owners = [
  {
    name: 'GUnT_0x9',
    role: '프론트엔드',
    image: '/assets/GUnT_0x9_profile.png',
  },
  {
    name: 'spear',
    role: '백엔드',
    image: '/assets/spear_profile.png',
  },
];

const stack = {
  Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  Backend: ['Node.js', 'NestJS', 'FastAPI', 'Express', 'tRPC'],
  Database: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Supabase'],
  Infra: ['Vercel', 'AWS', 'Cloudflare', 'Docker', 'GitHub Actions'],
};

const capabilities = [
  {
    icon: Layout,
    title: 'High-End UI/UX',
    desc: '단순히 예쁜 디자인을 넘어, 비즈니스 목표를 달성하는 전환율 중심의 사용자 경험을 설계합니다.',
    details: [
      '반응형 웹 완벽 대응',
      '애플급 마이크로 인터랙션',
      '접근성 및 사용성 최적화',
    ],
  },
  {
    icon: Gauge,
    title: '성능 및 검색 최적화',
    desc: 'Vitals 최적화를 통해 로딩 속도를 극대화하고, 구글 검색 결과 상단에 노출되도록 SEO를 설계합니다.',
    details: [
      'Lighthouse 점수 90+ 유지',
      '시맨틱 마크업 준수',
      '이미지/코드 최적화',
    ],
  },
  {
    icon: Database,
    title: '확장 가능한 아키텍처',
    desc: '성장하는 비즈니스를 견딜 수 있도록 MSA 수준의 확장성과 안정적인 데이터 구조를 설계합니다.',
    details: [
      '동시 접속 대응 스케일링',
      '클라우드 네이티브 아키텍처',
      '무중단 배포 환경',
    ],
  },
  {
    icon: Palette,
    title: '다양한 디자인 옵션',
    desc: '브랜드 테마에 맞는 맞춤형 디자인과, 빠른 검증을 위한 UI 프레임워크 기반 디자인 중 선택할 수 있습니다.',
    details: [
      '브랜드 테마 맞춤형 디자인',
      'UI 프레임워크 기반 디자인',
      '요구에 따른 유연한 디자인 개발',
    ],
  },
];

const process = [
  {
    step: '01',
    title: '범위 정리',
    desc: '랜딩, 관리자, SaaS 중 무엇이 먼저 필요한지 나누고 출시 범위를 줄입니다.',
  },
  {
    step: '02',
    title: '핵심 화면 설계',
    desc: '사용자가 돈을 내거나 운영자가 매일 쓰는 화면부터 와이어프레임으로 확인합니다.',
  },
  {
    step: '03',
    title: '개발과 배포',
    desc: '프론트, 백엔드, DB, 배포 파이프라인을 함께 구성합니다.',
  },
  {
    step: '04',
    title: '운영 인계',
    desc: '관리자, 문서, 계정, 모니터링까지 넘겨 실제 운영이 가능하게 만듭니다.',
  },
];

const fitCases = [
  {
    title: '문의가 필요한 랜딩·회사 사이트',
    desc: '브랜드 소개보다 문의 전환, 검색 노출, 로딩 속도가 중요한 경우',
  },
  {
    title: '반복 업무를 줄이는 관리자 페이지',
    desc: '엑셀, 카톡, 수기 입력으로 처리하던 운영 업무를 웹에서 관리해야 하는 경우',
  },
  {
    title: 'SaaS·예약·결제형 MVP',
    desc: '회원, 권한, 결제, 대시보드처럼 제품의 핵심 흐름을 빠르게 검증해야 하는 경우',
  },
];

const projectBrief = [
  {
    label: '예상 기간',
    value: '2~6주',
    desc: '랜딩은 짧게, 관리자·SaaS는 기능 범위에 따라 나눠 진행합니다.',
  },
  {
    label: '시작 범위',
    value: '범위 검토 후 안내',
    desc: '필수 화면과 운영자가 매일 쓰는 기능부터 먼저 정합니다.',
  },
  {
    label: '주요 산출물',
    value: '배포된 웹 + 운영 문서',
    desc: '프로덕션 빌드, 관리자, 도메인·SSL, 인계 문서를 포함합니다.',
  },
];

const useCases = [
  {
    title: '랜딩·브랜드 사이트',
    desc: '방문자가 문의까지 가는 흐름을 짧게 만들고, 검색 노출과 속도를 기본값으로 챙깁니다.',
    visual: 'landing',
    items: [
      '서비스 소개 구조',
      '문의 CTA와 전환 추적',
      'SEO 메타·사이트맵',
      '관리 가능한 공지·콘텐츠 영역',
    ],
  },
  {
    title: '관리자·백오피스',
    desc: '운영자가 매일 보는 데이터를 한 곳에 모으고, 승인·상태 변경·내보내기 같은 반복 작업을 줄입니다.',
    visual: 'admin',
    items: [
      '권한별 메뉴',
      '검색·필터·CSV',
      '상태 변경 이력',
      '운영 로그와 알림',
    ],
  },
  {
    title: 'SaaS·예약·결제 MVP',
    desc: '처음부터 모든 기능을 만들지 않고 회원, 권한, 결제, 핵심 대시보드만 묶어 시장 반응을 봅니다.',
    visual: 'saas',
    items: [
      '회원·조직 구조',
      '결제·구독 연동',
      '핵심 대시보드',
      '관리자 운영 도구',
    ],
  },
];

const scopePackages = [
  {
    title: '검증형',
    desc: '1~3개 핵심 화면으로 제안서, 사전 예약, 문의 전환을 검증합니다.',
  },
  {
    title: '운영형',
    desc: '관리자, DB, 배포, 도메인까지 포함해 실제 고객 응대가 가능한 상태로 만듭니다.',
  },
  {
    title: '확장형',
    desc: '권한, 결제, 알림, 로그, 통계처럼 서비스 운영에 필요한 기능을 단계적으로 붙입니다.',
  },
];

const checklist = [
  '고객이 가장 먼저 해야 할 행동',
  '운영자가 매일 반복하는 업무',
  '출시일에 꼭 필요한 기능',
  '나중에 붙여도 되는 기능',
  '도메인·계정·콘텐츠 준비 상태',
];

function Web() {
  return (
    <div className="page webPage">
      <section className="subHero shell">
        <div className="subHeroContent">
          <div className="subHeroLabel">Web Development</div>
          <h1>운영 가능한 웹 제품을 만듭니다.</h1>
          <p>
            예쁜 화면보다 먼저, 문의가 들어오고 운영자가 쓸 수 있고 배포 후 고칠
            수 있는 구조를 만듭니다. 랜딩, 관리자, SaaS MVP 중 지금 필요한
            범위부터 좁혀서 시작합니다.
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
          <h2>웹을 사야 하는 상황</h2>
          <p>기술 스택보다 먼저 해결할 업무와 전환 목표를 정합니다.</p>
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
          <h2>대표 제작 유형</h2>
          <p>웹이라는 이름 안에서도 목적에 따라 설계가 달라집니다.</p>
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
            Value Proposition
          </div>
          <h2>웹에서 실제로 챙기는 것</h2>
          <p>
            보기 좋은 화면에서 끝내지 않고 전환, 운영, 유지보수를 같이 봅니다.
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
          <h2>범위 잡는 방식</h2>
          <p>처음부터 크게 만들지 않고 구매 목적에 맞춰 나눕니다.</p>
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
          <h2>협업 프로세스</h2>
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
          <p>프로젝트 규모와 요구 사항에 따라 조합합니다.</p>
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
          <li>운영 가능한 프로덕션 빌드 (CI/CD 포함)</li>
          <li>관리자 페이지 및 운영 매뉴얼</li>
          <li>도메인·SSL·모니터링 설정</li>
          <li>Git 저장소 및 기술 문서</li>
          <li>인도 후 1개월 무상 유지보수</li>
        </ul>
      </section>

      <section className="ctaSection shell">
        <div className="ctaCard card-shell">
          <div className="card-inner">
            <h2>웹 프로젝트 검토 요청</h2>
            <p>참고 사이트나 대략적인 기능만 알려주셔도 됩니다.</p>
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

export default Web;
