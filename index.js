// 1 Davaleba

const usersArr = [
  {
    name: "Jano",
    age: 52,
  },
  {
    name: "Mariami",
    age: 16,
  },
  {
    name: "Nika",
    age: 17,
  },
  {
    name: "Luka",
    age: 18,
  },
];

const printAge = usersArr.reduce((sum, curr) => {
  const age = curr.age;
  if (!sum[age]) {
    sum[age] = [];
  }
  sum[age].push(curr.age);
  return sum;
}, {});

console.log(printAge, "Ages >>");

//2 Davaleba

const user_1 = {
  username: "jano",
  password: "123",
};

const user_2 = {
  username: "luka",
  password: "123",
};

const db = [user_1, user_2];

const loginForm = document.querySelector("#loginForm");
const checkTxt = document.querySelector("#checkTxt");
const error = document.querySelector("#error");

loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username");
  const password = document.querySelector("#password");

  // console.log(username, password)

  if (username && password) {
    console.log(username.value, password.value);
  }

  const users = db.filter((user) => {
    return username.value === user.username && password.value === user.password;
  });

  let empty = document.forms["loginForm"]["username"]["password"].value;

  if (users.length > 0) {
    checkTxt.innerHTML = "Log In Success";
  } else if (empty == "") {
    checkTxt.innerHTML = "Monacemebi Arunda Ikos Carieli.";
    return false;
  } else error.innerHTML = "Arasworia.";
});

// 3 Davaleba

const words = ["space", "wind", "forest", "sun", "wolf", "mouse"];

function findLongestWord(words) {
  let longWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }

  console.log(words)

  console.log("Masividan Grdzeli Sitkva Aris:", longWord);

  return longWord;
}

findLongestWord(words);
