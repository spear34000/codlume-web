import React from 'react';
import {
  ArrowRight,
  MessageSquareText,
  Workflow,
  Database,
  Sparkles,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoVisual from './DemoVisual';
import ServiceOwners from './ServiceOwners';

const owners = [
  {
    name: 'spear',
    role: '자동화 설계',
    image: '/assets/spear_profile.png',
  },
  {
    name: '루비',
    role: '봇 런타임',
    image: '/assets/ruby_profile.png',
  },
];

const stack = {
  플랫폼: ['카카오 i 챗봇', '채널톡', 'Discord', 'Telegram', 'Slack'],
  언어: ['Python', 'Node.js', 'TypeScript'],
  AI: ['OpenAI API', 'Claude API', 'RAG (LangChain)', 'Vector DB'],
  연동: ['Google Sheets', 'Notion', 'Airtable', '내부 API · DB'],
};

const capabilities = [
  {
    icon: MessageSquareText,
    title: '지능형 커스텀 봇',
    desc: '단순 응답을 넘어 사용자의 의도를 파악하고, 사내 DB나 API와 연동하여 실무를 처리하는 봇을 구축합니다.',
    details: [
      'LLM(GPT-4 등) 기반 AI 응답',
      '외부 시스템 API 데이터 연동',
      '멀티 플랫폼(디스코드, 카톡, 슬랙)',
    ],
  },
  {
    icon: Workflow,
    title: '워크플로우 자동화',
    desc: '반복적인 데이터 입력, 알림, 리포트 생성을 자동화하여 단순 업무에 소모되는 시간을 혁신적으로 줄여줍니다.',
    details: [
      '주기적 자동 리포트 생성',
      '실시간 이벤트 트리거 알림',
      '복합 워크플로우 설계',
    ],
  },
  {
    icon: Database,
    title: '데이터 스크래핑 & 가공',
    desc: '파편화된 웹 데이터를 수집하고, 비즈니스에 필요한 형태로 가공하여 사내 시스템에 자동으로 적재합니다.',
    details: [
      '안정적인 스케줄링 수집',
      '데이터 정제 및 요약 자동화',
      '대량 데이터 처리 엔진',
    ],
  },
  {
    icon: ShieldCheck,
    title: '운영 모니터링',
    desc: '자동화 툴이 멈추지 않고 24시간 안정적으로 가동될 수 있도록 실시간 모니터링과 복구 체계를 구축합니다.',
    details: [
      '24/7 가동 상태 체크',
      '오류 발생 시 자동 복구',
      '상세 실행 로그 관리',
    ],
  },
];

const process = [
  {
    step: '01',
    title: '반복 업무 측정',
    desc: '사람이 매일 쓰는 시간, 실수 빈도, 병목 지점을 먼저 확인합니다.',
  },
  {
    step: '02',
    title: '자동화 범위 결정',
    desc: '전부 자동화하지 않고, 효과가 큰 입력·알림·보고·응답 흐름부터 고릅니다.',
  },
  {
    step: '03',
    title: '엔진 개발 및 연동',
    desc: '검증된 오픈소스 라이브러리와 API를 활용하여 견고한 자동화 엔진을 개발합니다.',
  },
  {
    step: '04',
    title: '실운영 테스트',
    desc: '실제 환경과 동일한 조건에서 예외 케이스를 점검하고 최적화 작업을 진행합니다.',
  },
];

const fitCases = [
  {
    title: '매일 같은 보고서를 만드는 경우',
    desc: '데이터 수집, 정리, 요약, 전송까지 자동화해 담당자의 반복 시간을 줄입니다.',
  },
  {
    title: '문의·주문·예약을 사람이 옮겨 적는 경우',
    desc: '메신저, 폼, 시트, CRM 사이의 복사 붙여넣기 흐름을 연결합니다.',
  },
  {
    title: '데이터를 주기적으로 확인해야 하는 경우',
    desc: '가격, 재고, 공지, 장애 상태를 감시하고 조건에 맞을 때 알림을 보냅니다.',
  },
];

const projectBrief = [
  {
    label: '예상 기간',
    value: '1~5주',
    desc: '단일 스크립트는 빠르게, 외부 연동이 많으면 검증 단계를 둡니다.',
  },
  {
    label: '시작 범위',
    value: '범위 검토 후 안내',
    desc: '반복 시간과 실패 시 사람이 이어받는 기준부터 먼저 확인합니다.',
  },
  {
    label: '주요 산출물',
    value: '봇/자동화 + 실행 로그',
    desc: '배포된 자동화, 운영 매뉴얼, 실패 알림과 모니터링 기준을 포함합니다.',
  },
];

const useCases = [
  {
    title: '문의·CS 1차 응답',
    desc: '반복 질문은 봇이 먼저 처리하고, 결제·환불·장애처럼 사람이 봐야 하는 건 담당자에게 넘깁니다.',
    visual: 'chat',
    items: [
      'FAQ 응답',
      '상담원 연결',
      '채널톡·카카오·슬랙 연동',
      '문의 로그 저장',
    ],
  },
  {
    title: '정기 보고 자동화',
    desc: '매일 확인하는 매출, 재고, 광고, 장애 데이터를 모아 정해진 시간에 요약합니다.',
    visual: 'report',
    items: ['시트·DB 수집', '요약 리포트', 'Slack·메일 전송', '실패 알림'],
  },
  {
    title: '데이터 수집·감시',
    desc: '웹 페이지, API, 내부 DB를 주기적으로 확인하고 조건이 맞으면 알림이나 후속 작업을 실행합니다.',
    visual: 'monitor',
    items: ['크롤링·API 폴링', '조건 기반 알림', '중복 제거', '실행 로그'],
  },
];

const scopePackages = [
  {
    title: '단일 업무 자동화',
    desc: '한 가지 반복 업무를 스크립트나 봇으로 바꿔 빠르게 효과를 확인합니다.',
  },
  {
    title: '팀 워크플로우',
    desc: '폼, 시트, 메신저, DB를 연결해 여러 사람이 쓰는 업무 흐름을 정리합니다.',
  },
  {
    title: 'AI 연동 자동화',
    desc: '요약, 분류, 답변 초안, 문서 검색처럼 LLM이 필요한 단계만 골라 붙입니다.',
  },
];

const checklist = [
  '반복되는 업무의 빈도',
  '한 번 처리하는 데 걸리는 시간',
  '실수나 누락이 생기는 지점',
  '연동해야 할 계정·API',
  '자동화 실패 시 사람이 이어받는 방식',
];

function Bot() {
  return (
    <div className="page botPage">
      <section className="subHero shell">
        <div className="subHeroContent">
          <div className="subHeroLabel">Automation & Bot</div>
          <h1>사람이 반복하는 일을 자동화합니다.</h1>
          <p>
            자동화는 멋진 봇을 만드는 일이 아니라 시간을 되찾는 일입니다. 매일
            반복되는 입력, 보고, 알림, 응답 업무부터 비용 대비 효과를 따져
            구축합니다.
          </p>
          <div className="subHeroActions">
            <a
              className="primaryButton large"
              href="https://kmong.com/gig/730232"
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
          <h2>자동화를 사야 하는 상황</h2>
          <p>
            사람이 계속 해야 하는 일이 아니라면 시스템으로 옮길 수 있습니다.
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
          <h2>대표 자동화 유형</h2>
          <p>봇은 대화보다 업무 흐름을 어디까지 대신할지가 핵심입니다.</p>
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
            Business Automation
          </div>
          <h2>먼저 줄일 수 있는 업무</h2>
          <p>
            반복 시간, 실수, 누락 알림처럼 바로 체감되는 문제부터 자동화합니다.
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
          <h2>자동화 범위 잡는 방식</h2>
          <p>전부 자동화하려고 하기보다 효과가 큰 반복 업무부터 줄입니다.</p>
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
          <h2>자동화 구축 프로세스</h2>
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
          <Sparkles size={16} />
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
          <li>운영 환경에 배포된 봇 / 스크립트</li>
          <li>관리·모니터링 도구 (로그·통계)</li>
          <li>운영 매뉴얼 및 시나리오 문서</li>
          <li>API 키·계정 정보 인계</li>
          <li>인도 후 1개월 무상 유지보수</li>
        </ul>
      </section>

      <section className="ctaSection shell">
        <div className="ctaCard card-shell">
          <div className="card-inner">
            <h2>자동화 프로젝트 검토 요청</h2>
            <p>
              현재 반복되는 업무 흐름을 알려주시면 자동화 가능성을
              분석해드립니다.
            </p>
            <a
              className="primaryButton large"
              href="https://kmong.com/gig/730232"
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

export default Bot;
