const ul = document.getElementById("todos");

const listOfTodos = [
  {
    title: "Buy some eggs",
    completed: true,
  },
  {
    title: "Buy some tomatoes",
    completed: false,
  },
  {
    title: "Buy some milk",
    completed: true,
  },
  {
    title: "Buy some bread",
    completed: false,
  },
  {
    title: "Buy some cheese",
    completed: true,
  },
];

const renderList = (listOfTodos) => {
  ul.innerHTML = "";

  listOfTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    
    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderList(listOfTodos);
    });

    li.innerHTML = `
    ${
      todo.completed
        ? `
    <div class="radio completed">
        <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
            cx="19.5"
            cy="19.5"
            r="19"
            fill="white"
            stroke="#8A8AAA"
            />
            <g clip-path="url(#clip0_1_47)">
            <path
                d="M12.2083 19.5L17.4166 24.7084L27.8333 14.2917"
                stroke="#8A8AAA"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </g>
            <defs>
            <clipPath id="clip0_1_47">
                <rect
                width="25"
                height="25"
                fill="white"
                transform="translate(7 7)"
                />
            </clipPath>
            </defs>
        </svg>
    </div>`
        : `
    <div class="radio uncomplete">
        <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
            cx="19.5"
            cy="19.5"
            r="19"
            fill="white"
            stroke="#3B3B71"
            />
        </svg>
    </div>
    `
    }
    <span>${todo.title}</span>
    `;
    ul.appendChild(li);
  });
};

renderList(listOfTodos);
