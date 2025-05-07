document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('member-search');
  const memberGrid = document.getElementById('member-grid');
  const mentorGrid = document.getElementById('mentor-grid');
  const collaboratorGrid = document.getElementById('collaborator-grid');

  // メンバーデータを読み込む
  fetch('/data/members.json')
    .then(response => response.json())
    .then(data => {
      const members = data.members['2024'].labMembers;
      const mentors = data.members['2024'].mentors;
      const collaborators = data.members['2024'].collaborators;

      // 初期表示
      displayMembers(members, memberGrid);
      displayMembers(mentors, mentorGrid);
      displayMembers(collaborators, collaboratorGrid);

      // 検索機能
      searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        // 各カテゴリで検索
        const filteredMembers = filterMembers(members, searchTerm);
        const filteredMentors = filterMembers(mentors, searchTerm);
        const filteredCollaborators = filterMembers(collaborators, searchTerm);

        // 表示更新
        displayMembers(filteredMembers, memberGrid);
        displayMembers(filteredMentors, mentorGrid);
        displayMembers(filteredCollaborators, collaboratorGrid);
      });
    });

  function filterMembers(members, searchTerm) {
    return members.filter(member => 
      member.name.toLowerCase().includes(searchTerm) ||
      member.mission.toLowerCase().includes(searchTerm) ||
      member.interests.some(interest => 
        interest.toLowerCase().includes(searchTerm)
      )
    );
  }

  function displayMembers(members, container) {
    container.innerHTML = '';
    if (members.length === 0) {
      container.innerHTML = '<div class="col col--12"><div class="alert alert--info">該当するメンバーが見つかりませんでした。</div></div>';
      return;
    }
    members.forEach(member => {
      const card = createMemberCard(member);
      container.appendChild(card);
    });
  }

  function createMemberCard(member) {
    const col = document.createElement('div');
    col.className = 'col col--4';
    col.innerHTML = `
      <div class="card">
        <div class="card__image">
          <img src="${member.image}" alt="${member.name}" title="${member.mission}" />
        </div>
        <div class="card__body">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
          <p>${member.mission}</p>
          <a href="/members/${member.id}" class="button button--primary">詳細を見る</a>
        </div>
      </div>
    `;
    return col;
  }
}); 