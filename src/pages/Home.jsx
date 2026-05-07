import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Smartphone,
  Globe,
  Cpu,
  Lock,
  Layout,
  Brain,
  Plug,
  Bell,
  Database,
  Workflow,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Cube Component
function Cube3D() {
  return (
    <div className="cube-scene">
      <div className="cube">
        <div className="cube-face cube-front">
          <div className="cube-content">
            <div className="cube-icon">
              <Layout size={32} />
            </div>
            <span>Frontend</span>
          </div>
        </div>
        <div className="cube-face cube-back">
          <div className="cube-content">
            <div className="cube-icon">
              <Database size={32} />
            </div>
            <span>Backend</span>
          </div>
        </div>
        <div className="cube-face cube-right">
          <div className="cube-content">
            <div className="cube-icon">
              <Brain size={32} />
            </div>
            <span>AI/ML</span>
          </div>
        </div>
        <div className="cube-face cube-left">
          <div className="cube-content">
            <div className="cube-icon">
              <Smartphone size={32} />
            </div>
            <span>Mobile</span>
          </div>
        </div>
        <div className="cube-face cube-top">
          <div className="cube-content">
            <div className="cube-icon">
              <Globe size={32} />
            </div>
            <span>Web</span>
          </div>
        </div>
        <div className="cube-face cube-bottom">
          <div className="cube-content">
            <div className="cube-icon">
              <Cpu size={32} />
            </div>
            <span>Infra</span>
          </div>
        </div>
      </div>
      <div className="cube-shadow"></div>
      <div className="cube-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle p${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    to: '/web',
    icon: Globe,
    title: '웹 서비스',
    desc: '랜딩, 관리자, SaaS를 운영 가능한 제품으로',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    to: '/app',
    icon: Smartphone,
    title: '모바일 앱',
    desc: '앱이 꼭 필요한 기능부터 줄여서 출시',
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    to: '/bot',
    icon: Cpu,
    title: '자동화 · 봇',
    desc: '반복 업무, 보고, 알림, 응답을 자동화',
    stack: ['Python', 'Node.js', 'OpenAI', 'Discord.js', 'Telegram'],
  },
  {
    to: '/server',
    icon: Lock,
    title: '서버 · 인프라',
    desc: '배포, 장애, 백업, 비용 걱정을 줄이는 운영 환경',
    stack: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Cloudflare'],
  },
  {
    to: '/security',
    icon: Lock,
    title: '보안',
    desc: '서비스·앱·인프라 보안 점검과 취약점 대응',
    stack: ['취약점 진단', 'WAF', 'SSL/TLS', '권한·인증', '보안 운영'],
  },
];

const buyingReasons = [
  {
    title: '개발 범위가 아직 흐릿할 때',
    desc: '처음부터 큰 견적을 밀어붙이지 않고, 출시 가능한 최소 범위와 나중에 미뤄도 되는 기능을 나눕니다.',
  },
  {
    title: '웹·앱·서버를 따로 맡기기 부담스러울 때',
    desc: '프론트, 백엔드, 배포, 자동화 흐름을 한 팀이 이어서 보므로 책임 소재와 커뮤니케이션 비용이 줄어듭니다.',
  },
  {
    title: '외주 결과물이 운영에서 막혔을 때',
    desc: '관리자, 로그, 백업, 배포 문서처럼 실제 운영에 필요한 부분까지 정리해서 인도합니다.',
  },
];

const proofExamples = [
  {
    type: '랜딩 / 회사 사이트',
    title: '문의 전환이 보이는 소개 페이지',
    problem:
      '서비스 설명은 있었지만 방문자가 바로 문의할 이유와 동선이 약했습니다.',
    build: '첫 화면 CTA, 상담 준비 정보, 검색용 메타 구조를 정리했습니다.',
    result:
      '영업 자료로 바로 공유할 수 있는 반응형 페이지와 문의 흐름을 인도합니다.',
  },
  {
    type: '관리자 / 예약 MVP',
    title: '엑셀 운영을 줄이는 내부 도구',
    problem:
      '예약, 상태 변경, 고객 메모를 여러 시트와 메신저에서 따로 관리했습니다.',
    build:
      '권한별 관리자, 검색 필터, 상태 이력, 알림 기준을 MVP 범위로 묶었습니다.',
    result: '운영자가 매일 확인하는 화면과 고객 응대 기준을 한 곳에 모읍니다.',
  },
  {
    type: '자동화 / 봇',
    title: '반복 보고와 알림 자동화',
    problem:
      '매일 같은 데이터를 확인하고 요약해 보내는 시간이 반복적으로 들어갔습니다.',
    build:
      '수집, 요약, 실패 알림, 실행 로그를 포함한 자동화 흐름을 만들었습니다.',
    result: '담당자가 확인해야 할 예외만 남기고 반복 처리 시간을 줄입니다.',
  },
];

const capabilities = [
  {
    icon: Layout,
    label: 'Interface',
    title: '어떤 화면이든',
    desc: '정적 랜딩, 인터랙티브 페이지, 복잡한 관리자 화면, 모바일 UI까지 형태에 제약 없이 만듭니다.',
    tags: ['Landing', 'Admin', 'Mobile UI', 'Dashboard'],
  },
  {
    icon: Database,
    label: 'Data',
    title: '어떤 데이터든',
    desc: '관계형·NoSQL·검색·캐시까지 데이터 특성에 맞게 구조를 설계하고 대량 처리도 안정적으로 다룹니다.',
    tags: ['PostgreSQL', 'Redis', 'Elasticsearch', 'Kafka'],
  },
  {
    icon: Plug,
    label: 'Integration',
    title: '어떤 외부 시스템이든',
    desc: 'REST·GraphQL·웹훅·메시지큐·레거시 DB. 외부 시스템과의 연동·동기화는 거의 모든 형태가 가능합니다.',
    tags: ['REST', 'GraphQL', 'Webhook', 'Legacy DB'],
  },
  {
    icon: Brain,
    label: 'Intelligence',
    title: '어떤 AI 활용이든',
    desc: 'GPT·Claude API, RAG, 임베딩 검색, 자체 모델 호출까지 AI 기능을 제품에 자연스럽게 녹여냅니다.',
    tags: ['Claude', 'GPT-4', 'RAG', 'Embeddings'],
  },
  {
    icon: Workflow,
    label: 'Automation',
    title: '어떤 자동화든',
    desc: '사내 업무 흐름, 데이터 수집, 메신저 봇, 정기 보고. 사람이 반복하는 일을 자동화로 옮깁니다.',
    tags: ['Workflow', 'Scraping', 'Discord Bot', 'Cron'],
  },
  {
    icon: Bell,
    label: 'Realtime',
    title: '어떤 실시간 기능이든',
    desc: '채팅, 푸시, 실시간 차트, 동시 편집까지 WebSocket·Pub/Sub 기반 기능을 운영 등급으로 구현합니다.',
    tags: ['WebSocket', 'Pub/Sub', 'WebRTC', 'CRDT'],
  },
];

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'FastAPI',
  'React Native',
  'Flutter',
  'PostgreSQL',
  'Redis',
  'AWS',
  'Vercel',
  'Docker',
  'OpenAI',
  'Cloudflare',
];

function Home() {
  const capRef = useRef(null);

  useEffect(() => {
    const root = capRef.current;
    if (!root) return;
    const els = root.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('revealed'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page homePage">
      <section className="heroMain">
        <div className="shell heroMainInner">
          <div className="heroMainCopy">
            <div className="heroTitleRow">
              <h1>
                비즈니스에 맞는 소프트웨어를,
                <br />
                필요한 만큼 정확하게.
              </h1>
              <div className="heroTitleCube">
                <Cube3D />
              </div>
            </div>
            <p className="heroMainLead">
              Codlume은 웹·앱·자동화·서버를 한 흐름으로 설계하는 소규모 개발
              스튜디오입니다. 아이디어를 바로 큰 개발로 밀어붙이지 않고, 출시와
              운영에 필요한 범위부터 정리합니다.
            </p>
            <div className="heroMainActions">
              <a
                className="primaryButton large"
                href="https://kmong.com/gig/767729"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 문의
                <div className="icon-circle">
                  <ExternalLink size={16} />
                </div>
              </a>
            </div>

            <dl className="heroStats">
              <div>
                <dt>팀 규모</dt>
                <dd>4명</dd>
              </div>
              <div>
                <dt>범위</dt>
                <dd>MVP</dd>
              </div>
              <div>
                <dt>응답</dt>
                <dd>24h</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="proofSection shell">
        <div className="sectionHeader compact">
          <h2>작업 예시</h2>
          <p>
            실제 프로젝트는 범위 검토 후 조정하지만, 보통 이런 형태로
            정리됩니다.
          </p>
        </div>
        <div className="proofGrid">
          {proofExamples.map((item) => (
            <article className="proofCard" key={item.title}>
              <span className="proofType">{item.type}</span>
              <h3>{item.title}</h3>
              <dl>
                <div>
                  <dt>문제</dt>
                  <dd>{item.problem}</dd>
                </div>
                <div>
                  <dt>만든 것</dt>
                  <dd>{item.build}</dd>
                </div>
                <div>
                  <dt>산출물</dt>
                  <dd>{item.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilitySection shell" ref={capRef}>
        <div className="capabilityFlow">
          {capabilities.map(({ icon: Icon, label, title, desc, tags }, i) => (
            <article
              className={`capRow ${i % 2 === 1 ? 'alt' : ''}`}
              key={title}
              data-reveal="row"
              style={{ '--reveal-i': 0 }}
            >
              <div className="capVisual" data-reveal-part="visual">
                <div className="capOrb" />
                <div className="capGrid" />
                <div className="capIconWrap">
                  <Icon size={72} strokeWidth={1.3} />
                </div>
                {tags.map((t, ti) => (
                  <span className={`capChip chip${ti}`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="capText">
                <span className="capNum" data-reveal-part="num">
                  <em>{String(i + 1).padStart(2, '0')}</em>
                  <span className="capDash" />
                  {label}
                </span>
                <h3 data-reveal-part="title">{title}</h3>
                <p data-reveal-part="desc">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="sectionHeader compact capabilityHeader capabilityFooter">
          <h2 data-reveal="title" style={{ '--reveal-i': 0 }}>
            무엇이든 만들 수 있습니다
          </h2>
          <p data-reveal="sub" style={{ '--reveal-i': 1 }}>
            분야가 아니라 기능 단위로 접근합니다. 필요한 조합 그대로 구현합니다.
          </p>
        </div>
      </section>

      <section className="reasonSection shell">
        <div className="sectionHeader compact">
          <h2>이럴 때 맡기기 좋습니다</h2>
          <p>기술보다 먼저, 구매 결정을 막는 불확실성을 줄입니다.</p>
        </div>
        <div className="reasonGrid">
          {buyingReasons.map((reason) => (
            <article className="reasonTile" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="serviceOverview shell">
        <div className="sectionHeader compact">
          <h2>서비스 영역</h2>
          <p>웹·앱·봇·서버·보안을 한 팀에서 일관되게 처리합니다.</p>
        </div>

        <div className="serviceGrid">
          {services.map(({ to, icon: Icon, title, desc, stack }) => (
            <Link to={to} key={title} className="serviceTile">
              <div className="serviceTileTop">
                <Icon size={20} strokeWidth={1.6} />
                <span className="serviceTileMore">
                  자세히 <ArrowRight size={14} />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul className="stackChips">
                {stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="stackBand shell">
        <div className="sectionHeader compact">
          <h2>사용 기술</h2>
          <p>프로젝트 성격에 따라 가장 적합한 스택을 조합합니다.</p>
        </div>
        <ul className="stackList">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="processBand shell">
        <div className="sectionHeader compact">
          <h2>진행 방식</h2>
        </div>
        <ol className="processList">
          <li>
            <span>01</span>
            <div>
              <h4>요구 사항 정리</h4>
              <p>해결하려는 문제, 사용 환경, 예산·일정 범위를 정의합니다.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h4>설계 · 개발</h4>
              <p>
                스택과 마일스톤에 합의한 뒤 주 단위로 진행 상황을 공유합니다.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h4>배포 · 유지보수</h4>
              <p>인도 후 운영 환경 이슈 대응과 기능 추가를 함께 진행합니다.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="ctaSection shell">
        <div className="ctaCard card-shell">
          <div className="card-inner">
            <h2>프로젝트 검토를 요청하세요</h2>
            <p>
              대략적인 내용만 알려주시면 가능 여부와 예상 일정·범위를
              회신드립니다.
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

export default Home;
