const getForm = document.getElementById("form-add");
const getList = document.getElementById("list-item");

function clearForm() {
  getForm.style.display = "none";
  getList.style.display = "none";
}

function toggleFormManager() {
  const click = document.querySelector(".phone-item li:nth-child(1)");

  click.addEventListener("click", function () {
    if (getList.style.display === "block") {
      getList.style.display = "none";
    }

    if (getForm.style.display === "none") {
      getForm.style.display = "block";
    } else {
      getForm.style.display = "none";
    }
  });
}

function toggleFormList() {
  const btnFormList = document.querySelector(".phone-item li:nth-child(2)");

  btnFormList.addEventListener("click", function () {
    if (getForm.style.display === "block") {
      getForm.style.display = "none";
    }

    if (getList.style.display === "none") {
      getList.style.display = "block";
    } else {
      getList.style.display = "none";
    }
  });
}

function main() {
  // clearForm();
  // toggleFormManager();
  toggleFormList();
}

main();
