function raise_defect() {
  // Note: I used a chrome extension "Selector Gadget" to determine these
  // jquery tags.  I would LOVE to use ids but the code is not structured that
  // way.
  var title = $("#mbed-content h2").text();
  var descr = $("#mbed-content p").text();
  var author = $(".authortext a").text();
  var reporttime = $("#mbed-content abbr").attr("title");

  chrome.runtime.sendMessage({type:'file_jira', title:title, descr:descr, author:author, reporttime:reporttime});
}

$(function() {
  form = $(".sidebar");
  if (form.length == 0) {
    console.log("Error: add_button() cannot find element class: 'three column sidebar'");
    return;
  }

  var defect_button = document.createElement("button");
  var defect_button_text = document.createTextNode("File Defect in JIRA");
  defect_button.appendChild(defect_button_text);

  defect_button.addEventListener('click', raise_defect);

  form[0].appendChild(defect_button);
});
