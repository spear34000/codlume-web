import React from 'react';

function ServiceOwners({ owners }) {
  return (
    <aside className="serviceOwnerCard" aria-label="담당 인원">
      <div className="serviceOwnerHeader">
        <span>Project Owners</span>
        <p>이 작업을 주로 맡는 구성원</p>
      </div>
      <div className="serviceOwnerList">
        {owners.map((owner) => (
          <div className="serviceOwner" key={`${owner.name}-${owner.role}`}>
            <div className="serviceOwnerAvatar">
              <img src={owner.image} alt={`${owner.name} 프로필`} />
            </div>
            <div className="serviceOwnerMeta">
              <strong>{owner.name}</strong>
              <span>{owner.role}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default ServiceOwners;
