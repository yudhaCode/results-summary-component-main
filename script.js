const url = 'data.json';
const summaryList = document.querySelector('.subject-section');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      summaryList.innerHTML += `
      <li class="subject-label">
      <div class="favicon">
        <img src="${data[i].icon}" alt="" class="icon" />
        <p class="summary-subtitle">${data[i].category}</p>
      </div>
      <p class="summary-score__range">
        <span class="score">${data[i].score}</span><span class="slash">/</span>100
      </p>
    </li>
     `;
    }
  })
  .catch((error) => console.error(error));
