const emailList = document.getElementById("email-list");

let emailCount = 0;

for (let i = 0; i < 10; i++) {
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
    const email = response.data.response;
    console.log(++emailCount + ". " + email);
    emailList.innerHTML += `<li>${email}</li>`;
  });
}
