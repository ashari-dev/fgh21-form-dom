const form = document.getElementById("form-survey");
const response = document.getElementById("response");

form.onsubmit = (e) => {
  const tr = document.createElement("tr");
  e.preventDefault();
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("nama tidak boleh kosong");
    return;
  } else {
    const tdName = document.createElement("td");
    tdName.innerHTML = name;
    tr.appendChild(tdName);
  }

  const age = document.getElementById("age").value;
  if (age === "") {
    alert("Umur tidak boleh kosong");
    return;
  } else {
    const tdAge = document.createElement("td");
    tdAge.innerHTML = age;
    tr.appendChild(tdAge);
  }

  const gender = document.getElementsByName("gender");
  let pilihGender = "";
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      pilihGender += gender[i].value;
    }
  }
  if (pilihGender === "") {
    alert("Jenis kelamin tidak boleh kosong");
    return;
  } else {
    const tdGender = document.createElement("td");
    tdGender.innerHTML = pilihGender;
    tr.appendChild(tdGender);
  }

  const smoker = document.getElementsByName("smoker");
  let pilihSmoker = "";
  for (let i = 0; i < smoker.length; i++) {
    if (smoker[i].checked) {
      pilihSmoker += smoker[i].value;
    }
  }
  if (pilihSmoker === "") {
    alert("Pilih salah satu");
    return;
  } else {
    const tdSmoker = document.createElement("td");
    tdSmoker.innerHTML = pilihSmoker;
    tr.appendChild(tdSmoker);
  }

  const cigar = document.getElementsByName("cigar");
  let pilihCigar = "";
  for (let i = 0; i < cigar.length; i++) {
    if (cigar[i].checked) {
      pilihCigar += cigar[i].value + "<br/>";
    }
  }

  if (pilihSmoker === "Ya") {
    if (pilihCigar === "") {
      alert("nama tidak boleh kosong");
    } else {
      const tdCigar = document.createElement("td");
      tdCigar.innerHTML = pilihCigar;
      tr.appendChild(tdCigar);
    }
  }
  response.appendChild(tr);
  form.reset();
};
