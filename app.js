
const statusEl = document.getElementById("status");

function setStatus(message) {
  if (statusEl) statusEl.textContent = message;
}

setStatus(
  "AI engine setup started. Model compatibility will be tested next."
);

console.log("ClearCut AI enhancer: app.js loaded.");
