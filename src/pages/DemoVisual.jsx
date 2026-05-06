import React, { memo } from "react";

const imageAssets = {
  landing: "/assets/demo/web-landing.png",
  admin: "/assets/demo/web-admin.png",
  saas: "/assets/demo/web-saas.png",
  membership: "/assets/demo/app-membership.png",
  field: "/assets/demo/app-field.png",
  commerce: "/assets/demo/app-commerce.png",
  chat: "/assets/demo/bot-chat.png",
  report: "/assets/demo/bot-report.png",
  monitor: "/assets/demo/bot-monitor.png",
  infra: "/assets/demo/server-infra.png",
  deploy: "/assets/demo/server-deploy.png",
  metrics: "/assets/demo/server-metrics.png",
};

const altText = {
  landing: "랜딩 페이지 데모 이미지",
  admin: "관리자 페이지 데모 이미지",
  saas: "SaaS 대시보드 데모 이미지",
  membership: "멤버십 앱 데모 이미지",
  field: "현장 업무 앱 데모 이미지",
  commerce: "커머스 앱 데모 이미지",
  chat: "상담 자동화 봇 데모 이미지",
  report: "정기 리포트 자동화 데모 이미지",
  monitor: "데이터 감시 자동화 데모 이미지",
  infra: "인프라 운영 인계 데모 이미지",
  deploy: "배포 파이프라인 데모 이미지",
  metrics: "서비스 메트릭 데모 이미지",
};

function DemoVisual({ type }) {
  const src = imageAssets[type] ?? imageAssets.landing;
  return (
    <img
      className="demoImage"
      src={src}
      alt={altText[type] ?? altText.landing}
      loading="lazy"
      decoding="async"
      width="900"
      height="560"
    />
  );
}

export default memo(DemoVisual);
