document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const getUsersBtn = document.getElementById("getUsers");
  const userList = document.getElementById("userList");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const response = await fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    alert(data.message);
    form.reset();
  });
  getUsersBtn.addEventListener("click", async () => {
    const response = await fetch("/users");
    const users = await response.json();
    userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  });
});

