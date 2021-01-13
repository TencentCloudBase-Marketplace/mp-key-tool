import "./styles.css";

const $fileInput = document.getElementById("file");
const $result = document.getElementById("result");

$fileInput.addEventListener("change", transform);
$result.addEventListener("click", copy);

function transform() {
  const file = $fileInput.files[0];

  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    const key = event.target.result;
    const base64Key = btoa(key);
    $result.value = base64Key;
  });
  reader.readAsText(file);
}

function copy(event) {
  console.log(event);
  $result.select();
}
