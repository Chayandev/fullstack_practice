const serachBar = document.getElementById("serach");
const commnetBox = document.getElementById("comment");
const submitButton = document.getElementById("submit");

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  };
}

const serach = async () => {
  const result = await fetch(
    `http://localhost:3000/search?keywords=${serachBar.value}`
  );
  const data = await result.json();
  console.log(data);
};

const addComment = async () => {
  const comment = { comment: commnetBox.value };
  const result = await fetch("http://localhost:3000/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  console.log(await result.json());
};

serachBar.addEventListener("input", debounce(serach, 1000));
submitButton.addEventListener("click", throttle(addComment, 2000));
