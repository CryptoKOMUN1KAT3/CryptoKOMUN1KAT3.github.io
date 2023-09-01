function copyToClipboard() {
  const content = "0xalienvpredatorcaplaceholder";

  const tempEl = document.createElement("textarea");
  tempEl.value = content;
  document.body.appendChild(tempEl);

  tempEl.select();
  document.execCommand("copy");

  document.body.removeChild(tempEl);

  alert("CA copied to clipboard!");
}
