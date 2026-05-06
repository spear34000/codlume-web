import React, { Component, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  Smartphone,
  Cpu,
  Lock,
  Mail,
  Users,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

import Home from "./pages/Home";
import Web from "./pages/Web";
import AppPage from "./pages/AppPage";
import Bot from "./pages/Bot";
import Server from "./pages/Server";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const navLinkClass = ({ isActive }) => isActive ? "navLink active" : "navLink";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (
        mobileMenuRef.current?.contains(event.target) ||
        mobileMenuButtonRef.current?.contains(event.target)
      ) {
        return;
      }
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const mobileLinkTabIndex = isMobileMenuOpen ? undefined : -1;

  return (
    <Router>
      <>
        <ScrollToTop />
        <a className="skipLink" href="#main-content">본문으로 이동</a>
        <header className="header">
          <Link className="brand" to="/" aria-label="Codlume 홈">
            <span className="brandBadge">
              <img src="/assets/white_logo.png" alt="Codlume" className="brandLogo" />
            </span>
          </Link>
          <nav aria-label="주요 메뉴">
            <NavLink className={navLinkClass} to="/web"><Globe size={14} /> 웹</NavLink>
            <span className="navDivider"></span>
            <NavLink className={navLinkClass} to="/app"><Smartphone size={14} /> 앱</NavLink>
            <span className="navDivider"></span>
            <NavLink className={navLinkClass} to="/bot"><Cpu size={14} /> 봇</NavLink>
            <span className="navDivider"></span>
            <NavLink className={navLinkClass} to="/server"><Lock size={14} /> 서버</NavLink>
            <span className="navDivider"></span>
            <NavLink className={navLinkClass} to="/contact"><Mail size={14} /> 문의</NavLink>
            <span className="navDivider"></span>
            <NavLink className={navLinkClass} to="/team"><Users size={14} /> 구성원</NavLink>
          </nav>
          <a className="headerButton" href="https://kmong.com/gig/767729" target="_blank" rel="noopener noreferrer">
            크몽에서 상담
            <ExternalLink size={14} />
          </a>
          <button
            ref={mobileMenuButtonRef}
            className="mobileMenuButton"
            type="button"
            aria-label={isMobileMenuOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </header>

        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className={`mobileMenu ${isMobileMenuOpen ? "open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <NavLink className={navLinkClass} to="/web" onClick={closeMobileMenu} tabIndex={mobileLinkTabIndex}><Globe size={16} /> 웹</NavLink>
          <NavLink className={navLinkClass} to="/app" onClick={closeMobileMenu} tabIndex={mobileLinkTabIndex}><Smartphone size={16} /> 앱</NavLink>
          <NavLink className={navLinkClass} to="/bot" onClick={closeMobileMenu} tabIndex={mobileLinkTabIndex}><Cpu size={16} /> 봇</NavLink>
          <NavLink className={navLinkClass} to="/server" onClick={closeMobileMenu} tabIndex={mobileLinkTabIndex}><Lock size={16} /> 서버</NavLink>
          <NavLink className={navLinkClass} to="/contact" onClick={closeMobileMenu} tabIndex={mobileLinkTabIndex}><Mail size={16} /> 문의</NavLink>
          <NavLink className={navLinkClass} to="/team" onClick={closeMobileMenu} tabIndex={mobileLinkTabIndex}><Users size={16} /> 구성원</NavLink>
          <a className="mobileMenuCta" href="https://kmong.com/gig/767729" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} tabIndex={mobileLinkTabIndex}>
            크몽에서 상담
            <ExternalLink size={14} />
          </a>
        </div>

        <main id="main-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/web" element={<Web />} />
              <Route path="/app" element={<AppPage />} />
              <Route path="/bot" element={<Bot />} />
              <Route path="/server" element={<Server />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </ErrorBoundary>
        </main>

        <footer className="footer">
          <div className="shell footerContent">
            <div className="footerBrand">
              <Link to="/">
                <img src="/assets/white_logo.png" alt="Codlume" className="footerLogo" />
              </Link>
              <p className="footerDesc">
                웹·앱·자동화·인프라를 함께 다루는<br />
                소규모 개발 스튜디오.
              </p>
            </div>
            
            <div className="footerLinks">
              <div className="footerLinkGroup">
                <h4>Services</h4>
                <Link to="/app">App Development</Link>
                <Link to="/web">Web Development</Link>
                <Link to="/bot">Bot & Automation</Link>
                <Link to="/server">Launch Support</Link>
              </div>
              <div className="footerLinkGroup">
                <h4>Company</h4>
                <Link to="/contact">Contact</Link>
                <a href="mailto:hello@codespear.dev">Email</a>
                <span>Kakao: codespear</span>
              </div>
            </div>
          </div>
          
          <div className="shell footerBottom">
            <p>&copy; 2026 Codlume Studio. All rights reserved.</p>
            <div className="footerLegal">
              <span>프로젝트 범위 검토 후 견적 안내</span>
              <span>평균 24시간 내 회신</span>
            </div>
          </div>
        </footer>
      </>
    </Router>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", textAlign: "center", color: "#fff" }}>
          <h2>문제가 발생했습니다.</h2>
          <p>페이지를 새로고침해주세요.</p>
          <pre style={{ 
            marginTop: "20px", 
            padding: "20px", 
            background: "#1a1a2e", 
            borderRadius: "8px",
            textAlign: "left",
            fontSize: "12px",
            overflow: "auto"
          }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default App;
