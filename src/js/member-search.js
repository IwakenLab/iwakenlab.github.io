document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('member-search');
  const memberGrid = document.getElementById('member-grid');

  // メンバーデータを読み込む
  fetch('/data/members.json')
    .then(response => response.json())
    .then(data => {
      const members = data.members['2024'].labMembers;
      displayMembers(members);

      // 検索機能
      searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMembers = members.filter(member => 
          member.name.toLowerCase().includes(searchTerm) ||
          member.mission.toLowerCase().includes(searchTerm) ||
          member.interests.some(interest => 
            interest.toLowerCase().includes(searchTerm)
          )
        );
        displayMembers(filteredMembers);
      });
    });

  function displayMembers(members) {
    memberGrid.innerHTML = '';
    members.forEach(member => {
      const card = createMemberCard(member);
      memberGrid.appendChild(card);
    });
  }

  function createMemberCard(member) {
    const col = document.createElement('div');
    col.className = 'col col--4';
    col.innerHTML = `
      <div class="card">
        <div class="card__image">
          <img src="${member.image}" alt="${member.name}" />
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