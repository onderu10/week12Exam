

function renderNav() {
  const nav = document.createElement("div");
  nav.classList.add("nav-bar");

  const ul = document.createElement("ul");
  const menuItems = ["HiShopers", "", "", "", "", "about US"];

  const listItems = menuItems.map((itemText) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#">${itemText}</a>`;
    return li;
  });

  ul.append(...listItems);
  nav.appendChild(ul);
  return nav;
}

 function renderContent() {
  const container = document.createElement("section");
  container.classList.add("container");

  const cardsData = [
    { imageClass: "card-1", title: "Fruit Vision Pro", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus quasi", price: "$9999" },
    { imageClass: "card-2", title: "Very Smart Phone Galaxy 39", text: "Error quae molestias ipsum numquam inventore quisquam totam hic aut veniam", price: "$123" },
    { imageClass: "card-3", title: "Earphone", text: "Aspernatur voluptate ad, fu beatae exercitationem rem? Git temporibus quae molestias", price: "$230" }
  ];

  const cardElements = cardsData.map((cardData, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-image ${cardData.imageClass}"></div>
      <h3>${cardData.title}</h3>
      <p>${cardData.text}</p>
      <br>
      <p>${cardData.price}</p>
    `;

    return card;
  });

  container.append(...cardElements);
  return container;
}

function renderFooter() {
  const footer = document.createElement("div");
  footer.classList.add("div-footer");
  footer.innerHTML = "Designed By HiShopers";
  return footer;
}

export { renderNav, renderContent, renderFooter }