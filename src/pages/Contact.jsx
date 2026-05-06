import React, { useMemo, useState } from "react";
import { ExternalLink, Mail, MessageSquareText, FileText, Send } from "lucide-react";

const initialForm = {
  name: "",
  contact: "",
  work: "",
  memo: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`[Codlume 문의] ${form.work || "프로젝트 검토 요청"}`);
    const body = encodeURIComponent(
      [
        "안녕하세요. Codlume 프로젝트 검토를 요청합니다.",
        "",
        `이름/회사: ${form.name || ""}`,
        `연락처: ${form.contact || ""}`,
        `필요한 작업: ${form.work || ""}`,
        `예산/일정 메모: ${form.memo || ""}`,
        "",
        "가능 여부와 MVP 기준 범위를 회신해주세요.",
      ].join("\n")
    );
    return `mailto:hello@codespear.dev?subject=${subject}&body=${body}`;
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="page contactPage">
      <section className="subHero shell">
        <div className="subHeroLabel">Contact Us</div>
        <h1>만들지 말아야 할 범위부터 줄입니다.</h1>
        <p>
          아이디어, 기존 서비스, 반복 업무 중 무엇이든 괜찮습니다.
          필요한 기능과 나중에 미뤄도 되는 기능을 나눠 일정과 비용 범위를 회신드립니다.
        </p>
      </section>

      <section className="contactContent shell">
        <div className="contactGrid">
          <div className="contactMethodGrid">
            <div className="contactMethodCard">
              <div className="methodIcon"><Mail size={32} /></div>
              <div className="methodInfo">
                <span className="methodLabel">Email</span>
                <a href="mailto:hello@codespear.dev">hello@codespear.dev</a>
              </div>
            </div>
            <div className="contactMethodCard">
              <div className="methodIcon"><MessageSquareText size={32} /></div>
              <div className="methodInfo">
                <span className="methodLabel">KakaoTalk</span>
                <span>ID: codespear</span>
              </div>
            </div>
            <a className="contactMethodCard contactMethodLink" href="https://kmong.com/gig/767729" target="_blank" rel="noopener noreferrer">
              <div className="methodIcon"><ExternalLink size={30} /></div>
              <div className="methodInfo">
                <span className="methodLabel">Kmong</span>
                <span>크몽에서 상담하기</span>
              </div>
            </a>
          </div>

          <div className="contactDetailsCard">
            <div className="detailHeader">
              <FileText size={24} />
              <h3>런칭 상담 가이드</h3>
            </div>
            <div className="detailContent">
              <div className="guideItem">
                <strong>01. 지금 막힌 문제</strong>
                <p>문의 전환, 내부 업무, 앱 출시, 서버 운영 중 어떤 문제가 가장 급한지 알려주세요.</p>
              </div>
              <div className="guideItem">
                <strong>02. 필요한 결과물</strong>
                <p>웹, 앱, 관리자, 자동화, 서버 이전처럼 생각 중인 형태가 있으면 적어주세요.</p>
              </div>
              <div className="guideItem">
                <strong>03. 참고 사례</strong>
                <p>비슷한 기능을 가진 서비스나 벤치마킹하고 싶은 사례가 있다면 공유해주세요.</p>
              </div>
              <div className="guideItem">
                <strong>04. 예상 일정 및 규모</strong>
                <p>언제까지 제품이 필요한지, 혹은 고정된 예산 범위가 있는지 알려주시면 최적화된 제안이 가능합니다.</p>
              </div>
            </div>
            <div className="consultResult">
              <strong>회신에서 드리는 것</strong>
              <ul>
                <li>개발 가능 여부와 우선순위</li>
                <li>MVP 기준 기능 범위</li>
                <li>대략적인 일정과 비용 구간</li>
              </ul>
            </div>
            <div className="responseTime">
              <span>평균 응답 시간: <strong>24시간 이내</strong> (영업일 기준)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contactFormSection shell">
        <div className="contactFormCard">
          <div className="contactFormIntro">
            <span className="subHeroLabel">Request Draft</span>
            <h2>문의 내용을 바로 메일로 정리합니다.</h2>
            <p>
              아래 내용을 채우면 메일 앱에 상담 요청 초안이 열립니다.
              전송 전 내용을 직접 수정할 수 있습니다.
            </p>
          </div>
          <form className="contactForm" onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>이름 / 회사</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="예: 코드룸 / 홍길동"
                autoComplete="organization"
              />
            </label>
            <label>
              <span>연락처</span>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="이메일, 카카오톡 ID, 전화번호"
                autoComplete="email"
              />
            </label>
            <label className="contactFormWide">
              <span>필요한 작업</span>
              <input
                name="work"
                value={form.work}
                onChange={handleChange}
                placeholder="예: 회사 소개 웹사이트, 예약 앱 MVP, 반복 보고 자동화"
              />
            </label>
            <label className="contactFormWide">
              <span>예산 / 일정 메모</span>
              <textarea
                name="memo"
                value={form.memo}
                onChange={handleChange}
                placeholder="희망 일정, 참고 서비스, 꼭 필요한 기능, 나중에 미뤄도 되는 기능을 적어주세요."
                rows={5}
              />
            </label>
            <div className="contactFormActions">
              <a className="primaryButton large" href={mailtoHref}>
                메일 초안 열기
                <Send size={16} />
              </a>
              <a className="ghostButton" href="https://kmong.com/gig/767729" target="_blank" rel="noopener noreferrer">
                크몽에서 상담
                <ExternalLink size={14} />
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
