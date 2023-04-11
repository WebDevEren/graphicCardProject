let btnGroup = document.querySelector("#btnGroup");
let amdDivs = document.querySelectorAll(".AMD");
let nvidiaDivs = document.querySelectorAll(".NVIDIA");
let intelDivs = document.querySelectorAll(".INTEL");

let products = [
  { id: 1, name: "ALL" },
  { id: 2, name: "AMD" },
  { id: 3, name: "NVIDIA" },
  { id: 4, name: "INTEL" },
];

btnGroup.addEventListener("click", isCard);

function isCard(event) {
  if (event.target.id == "amdBtn") {
    nvidiaDivs.forEach(function (nvidia) {
      nvidia.classList.remove("d-block");
      nvidia.classList.add("d-none");
    });
    intelDivs.forEach(function (intel) {
      intel.classList.remove("d-block");
      intel.classList.add("d-none");
    });
    amdDivs.forEach(function (amd) {
      amd.classList.remove("d-none");
      amd.classList.add("d-block");
    });
  } else if (event.target.id == "nvBtn") {
    amdDivs.forEach(function (amd) {
      amd.classList.remove("d-block");
      amd.classList.add("d-none");
    });
    intelDivs.forEach(function (intel) {
      intel.classList.remove("d-block");
      intel.classList.add("d-none");
    });
    nvidiaDivs.forEach(function (nvidia) {
      nvidia.classList.remove("d-none");
      nvidia.classList.add("d-block");
    });
  } else if (event.target.id == "ıntelbtn") {
    amdDivs.forEach(function (amd) {
      amd.classList.remove("d-block");
      amd.classList.add("d-none");
    });
    intelDivs.forEach(function (intel) {
      intel.classList.add("d-block");
      intel.classList.remove("d-none");
    });
    nvidiaDivs.forEach(function (nvidia) {
      nvidia.classList.add("d-none");
      nvidia.classList.remove("d-block");
    });
  } else if (event.target.id == "allBtn") {
    amdDivs.forEach(function (amd) {
      amd.classList.add("d-block");
      amd.classList.remove("d-none");
    });
    intelDivs.forEach(function (intel) {
      intel.classList.add("d-block");
      intel.classList.remove("d-none");
    });
    nvidiaDivs.forEach(function (nvidia) {
      nvidia.classList.remove("d-none");
      nvidia.classList.add("d-block");
    });
  }
}
