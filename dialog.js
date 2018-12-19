$(function() {
  chrome.extension.onMessage.addListener(function(request) {
    if (request.action === 'populate_jira_fields') {
      console.log("We got here");

      // console.log("title: " + request.title);
      // console.log("descr: " + request.descr);
      // console.log("author: " + request.author);
      // console.log("time: " + request.reporttime);

      $("#title").val(request.title);
      $("#descr").val(request.descr);
      $("#author").val(request.author);
      $("#reporttime").val(request.reporttime);
    }
  });
});
