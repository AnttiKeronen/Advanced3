document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  alert("User successfully added!");
});
document.getElementById("getUsers").addEventListener("click", async () => {
  const res = await fetch("/users");
  const users = await res.json();
  const list = document.getElementById("userList");
  list.innerHTML = "";
  users.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.name} - ${u.email}`;
    list.appendChild(li);
  });
});
