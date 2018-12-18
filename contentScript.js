function raise_defect() {
  console.log("Raise a defect from here :-)");

  header2s = document.body.getElementsByTagName("h2");
  for (let header2 of header2s) {
    console.log("headers: " + header2.innerText);
  }

  tix_body = document.body.getElementsByClassName("ten columns editcontentitem");
  tix_items = tix_body[0].getElementsByTagName("p");
  for( let tix_item of tix_items ) {
    console.log("item: " + tix_item.innerText);
  }
}

console.log("Extension is loaded");
(function() {
  console.log("add_button(): called");
  form = document.getElementsByClassName("three columns sidebar");
  if (form.length == 0) {
    console.log("Error: add_button() cannot find element class: 'three column sidebar'");
    return;
  }

  var defect_button = document.createElement("button");
  var defect_button_text = document.createTextNode("File Defect in JIRA");
  defect_button.appendChild(defect_button_text);

  defect_button.addEventListener('click', raise_defect);

  form[0].appendChild(defect_button);
})();
