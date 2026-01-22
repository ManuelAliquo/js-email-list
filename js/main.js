const url = "https://flynn.boolean.careers/exercises/api/random/mail";

const emailList = document.getElementById("email-list");

for (let i = 0; i < 10; i++) {
  axios.get(url).then((response) => {
    const email = response.data.response;
    console.log(email);
    emailList.innerHTML += `<li class="list-group-item">${email}</li>`;
  });
}

const randomizeBtn = document.querySelector(".btn");

randomizeBtn.addEventListener("click", function () {
  emailList.innerHTML = "";
  console.clear();
  for (let i = 0; i < 10; i++) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const email = data.response;
        console.log(email);
        emailList.innerHTML += `<li class="list-group-item">${email}</li>`;
      });
  }
});
