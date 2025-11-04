let students = [];
const modal = document.getElementById("studentModal");
const closeBtn = document.getElementById("closeModal");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById("studentForm");
const studentBody = document.getElementById("studentBody");
const modalTitle = document.getElementById("modalTitle");
const saveBtn = document.getElementById("saveBtn");
const studentIdInput = document.getElementById("studentId");
const snackbar = document.getElementById("snackbar");
const themeToggle = document.getElementById("themeToggle");
const searchInput = document.getElementById("searchInput");

// Snackbar
function showSnackbar(message, type = "success") {
  snackbar.textContent = message;
  snackbar.className = type === "error" ? "show error" : "show";
  setTimeout(() => (snackbar.className = snackbar.className.replace("show", "")), 2500);
}

// Theme
function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.innerHTML = isDark ? '<i data-feather="sun"></i>' : '<i data-feather="moon"></i>';
  feather.replace();
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
themeToggle.addEventListener("click", () => setTheme(!document.body.classList.contains("dark")));
setTheme(localStorage.getItem("theme") === "dark");

// CRUD
async function loadStudents() {
  const res = await fetch("/students");
  students = await res.json();
  renderTable(students);
}

function renderTable(data) {
  studentBody.innerHTML = "";

  if (!data.length) {
    const row = document.createElement("tr");
    row.classList.add("empty-row");
    row.innerHTML = `<td colspan="5">No students found.</td>`;
    studentBody.appendChild(row);
    return;
  }

  data.forEach(stu => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${stu.id}</td>
      <td>${stu.name}</td>
      <td>${stu.age}</td>
      <td>${stu.grade}</td>
      <td>
        <button class="btn success" onclick="editStudent(${stu.id})" title="Edit Student"><i data-feather='edit-3'></i></button>
        <button class="btn danger" onclick="deleteStudent(${stu.id})" title="Delete Student"><i data-feather='trash-2'></i></button>
      </td>`;
    studentBody.appendChild(row);
  });
  feather.replace();
}

addBtn.onclick = () => {
  modalTitle.textContent = "Add Student";
  form.reset();
  studentIdInput.value = "";
  modal.style.display = "flex";
  saveBtn.innerHTML = "<i data-feather='save'></i> Save Student";
  feather.replace();
};

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

form.onsubmit = async e => {
  e.preventDefault();
  const id = studentIdInput.value;
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const grade = document.getElementById("grade").value;
  if (!name || !age || !grade) return showSnackbar("Please fill all fields!", "error");

  const payload = { name, age, grade };
  const url = id ? `/update/${id}` : "/add";
  const method = id ? "PUT" : "POST";

  const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  if (!res.ok) return showSnackbar("Server Error!", "error");

  modal.style.display = "none";
  showSnackbar(id ? "Student updated!" : "Student added!");
  loadStudents();
};

function editStudent(id) {
  const stu = students.find(s => s.id === id);
  modalTitle.textContent = "Edit Student";
  studentIdInput.value = stu.id;
  document.getElementById("name").value = stu.name;
  document.getElementById("age").value = stu.age;
  document.getElementById("grade").value = stu.grade;
  saveBtn.innerHTML = "<i data-feather='refresh-cw'></i> Update Student";
  modal.style.display = "flex";
  feather.replace();
}

async function deleteStudent(id) {
  if (confirm("Are you sure?")) {
    const res = await fetch(`/delete/${id}`, { method: "DELETE" });
    if (!res.ok) return showSnackbar("Delete failed!", "error");
    showSnackbar("Student deleted!", "error");
    loadStudents();
  }
}

// Search
searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = students.filter(s => s.name.toLowerCase().includes(q) || s.grade.toLowerCase().includes(q));
  renderTable(filtered);
});

// Init
window.onload = loadStudents;