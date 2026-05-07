import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const PUBLIC_URL = import.meta.env.BASE_URL || '/';
const assetBase = `${PUBLIC_URL}assets/`;

const members = [
  {
    name: '스피어',
    role: 'Project Scope · Bot · App · Backend',
    desc: '초기 범위 정리와 핵심 기능 설계를 맡고, 봇·앱·백엔드 구현까지 이어서 봅니다.',
    skills: [
      'Python',
      'Node.js',
      'React Native',
      'Flutter',
      'FastAPI',
      'PostgreSQL',
    ],
    image: `${assetBase}spear_profile.png`,
  },
  {
    name: 'GUnT_0x9',
    role: 'Web Frontend · UI Implementation',
    desc: '사용자가 실제로 보는 화면과 관리자 UI를 구현하고, 반응형·인터랙션·성능을 정리합니다.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: `${assetBase}GUnT_0x9_profile.png`,
  },
  {
    name: '루비',
    role: 'Bot Runtime · Server Setup',
    desc: '봇 실행 환경, 서버 세팅, 배포 구성을 맡아 자동화가 운영 중 멈추지 않도록 정리합니다.',
    skills: ['Linux', 'Docker', 'Node.js', 'Python', 'Nginx'],
    image: `${assetBase}ruby_profile.png`,
  },
  {
    name: '재현',
    role: 'Infra · Deployment · Monitoring',
    desc: '클라우드 환경, 배포 파이프라인, 모니터링·백업 기준을 잡아 운영 리스크를 줄입니다.',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Cloudflare', 'Linux'],
    image: `${assetBase}jaehyun_profile.png`,
  },
];

function Team() {
  return (
    <div className="page teamPage">
      <section className="subHero shell">
        <div className="subHeroLabel">Our Team</div>
        <h1>4명의 엔지니어가 직접 만듭니다.</h1>
        <p>
          외주나 재하청 없이, 실무 경력을 가진 4명의 엔지니어가 직접 설계하고
          구현합니다. 범위 조율, 개발, 배포, 운영 인계까지 같은 팀이 이어서
          봅니다.
        </p>
      </section>

      <section className="teamSection shell">
        <div className="teamGrid">
          {members.map((m, idx) => (
            <article className="teamCard" key={m.name} data-idx={idx}>
              <div className="teamAvatar">
                {m.image ? <img src={m.image} alt={m.name} /> : m.initial}
              </div>
              <div className="teamInfo">
                <span className="teamRole">{m.role}</span>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                <ul className="teamSkills">
                  {m.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ctaSection shell">
        <div className="ctaCard card-shell">
          <div className="card-inner">
            <h2>함께 만들 프로젝트가 있다면</h2>
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

export default Team;
