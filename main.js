const questions = [
  "Write your name",
  "Write your surname",
  "Write your email",
  "Write your year of birth",
];
const defaultAnswers = [" Dima ", "  Dimon ", "  @sgfb  vbdio.com ", "2005"];
const userInfo = {
  name: "",
  surname: "",
  email: "",
  age: 0,
};
const userUl = document.getElementById("userInfo");

const createLiElement = (conteiner, text) => {
  let liEl = document.createElement("li");
  liEl.innerHTML = text;
  conteiner.appendChild(liEl);
};

Object.keys(userInfo).forEach((item, index) => {
  let answer = prompt(`${questions[index]}`, `${defaultAnswers[index]}`);
  userInfo[item] =
    item === "age"
      ? new Date().getFullYear() - Number(answer)
      : (userInfo[item] = answer.replace(/ /g, ""));
});

if (
  userInfo.name.match(/\d+/) !== null ||
  userInfo.surname.match(/\d+/) !== null
) {
  createLiElement(
    userUl,
    `Name: NOT VALID - <span>${userInfo.name} ${userInfo.surname} (it can't include numbers)</span> `
  );
} else if (userInfo.name === "" || userInfo.surname === "") {
  createLiElement(userUl, `Name: NOT VALID - <span>it can't be empty</span> `);
} else {
  createLiElement(
    userUl,
    `Full name: <span>${
      userInfo.name[0].toUpperCase() + userInfo.name.slice(1)
    } ${userInfo.surname[0].toUpperCase() + userInfo.surname.slice(1)}</span>`
  );
}

let email = userInfo.email.toLowerCase();
if (userInfo.email === "" || userInfo.email === "") {
  createLiElement(userUl, `Email: NOT VALID - <span>it can't be empty</span> `);
} else if (userInfo.email.endsWith("@")) {
  createLiElement(
    userUl,
    `Email: NOT VALID email - <span>${email}</span> (symbol "@" find on last place)`
  );
} else if (!userInfo.email.includes("@")) {
  createLiElement(
    userUl,
    `Email: NOT VALID email - <span>${email}</span> (symbol "@" not find)`
  );
} else if (userInfo.email.startsWith("@")) {
  createLiElement(
    userUl,
    `Email: NOT VALID email - <span>${email}</span> (symbol "@" find on first place)`
  );
} else if (!userInfo.email.includes(".")) {
  createLiElement(
    userUl,
    `Email: NOT VALID email - <span>${email}</span> (symbol "." not find)`
  );
} else {
  createLiElement(userUl, `Email: <span>${email}</span>`);
}

if ((userInfo.age == new Date().getFullYear())) {
  createLiElement(
    userUl,
    `Age: NOT VALID <span>you forgot write your year of birth.</span>`
  );
} else if (userInfo.age >= 150 || userInfo.age <= 0) {
  createLiElement(userUl, `Age: NOT VALID <span>write your real age.</span>`);
} else if (isNaN(userInfo.age)) {
  createLiElement(
    userUl,
    `Age: NOT VALID <span> you must write NUMBERS</span>`
  );
} else {
  createLiElement(userUl, `Age: <span>${userInfo.age}</span>`);
}
