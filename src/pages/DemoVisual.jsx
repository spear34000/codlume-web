import React, { memo, useState } from 'react';

const imageAssets = {
  landing: '/assets/demo/web-landing.png',
  admin: '/assets/demo/web-admin.png',
  saas: '/assets/demo/web-saas.png',
  membership: '/assets/demo/app-membership.png',
  field: '/assets/demo/app-field.png',
  commerce: '/assets/demo/app-commerce.png',
  chat: '/assets/demo/bot-chat.png',
  report: '/assets/demo/bot-report.png',
  monitor: '/assets/demo/bot-monitor.png',
  infra: '/assets/demo/server-infra.png',
  deploy: '/assets/demo/server-deploy.png',
  metrics: '/assets/demo/server-metrics.png',
  'security-audit': '/assets/demo/security-audit.png',
  'security-hardening': '/assets/demo/security-hardening.png',
  'security-monitoring': '/assets/demo/security-monitoring.png',
};

const fallbackAssets = {
  'security-audit': '/assets/demo/security-audit.svg',
  'security-hardening': '/assets/demo/security-hardening.svg',
  'security-monitoring': '/assets/demo/security-monitoring.svg',
};

const altText = {
  landing: '랜딩 페이지 예시 이미지',
  admin: '관리자 페이지 예시 이미지',
  saas: 'SaaS 대시보드 예시 이미지',
  membership: '멤버십 앱 예시 이미지',
  field: '현장 업무 앱 예시 이미지',
  commerce: '커머스 앱 예시 이미지',
  chat: '상담 자동화 봇 예시 이미지',
  report: '정기 리포트 자동화 예시 이미지',
  monitor: '데이터 감시 자동화 예시 이미지',
  infra: '인프라 운영 인계 예시 이미지',
  deploy: '배포 파이프라인 예시 이미지',
  metrics: '서비스 메트릭 예시 이미지',
  'security-audit': '보안 취약점 점검 대시보드 목업 이미지',
  'security-hardening': '서버 보안 강화 설정 목업 이미지',
  'security-monitoring': '운영 보안 모니터링 목업 이미지',
};

function DemoVisual({ type }) {
  const [useFallback, setUseFallback] = useState(false);
  const src = imageAssets[type] ?? imageAssets.landing;
  const fallbackSrc = fallbackAssets[type];

  return (
    <img
      className="demoImage"
      src={useFallback && fallbackSrc ? fallbackSrc : src}
      alt={altText[type] ?? altText.landing}
      loading="lazy"
      decoding="async"
      width="900"
      height="560"
      onError={() => {
        if (fallbackSrc && !useFallback) {
          setUseFallback(true);
        }
      }}
    />
  );
}

export default memo(DemoVisual);
