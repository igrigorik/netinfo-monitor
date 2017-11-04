chrome.extension.sendMessage({}, function(response) {

  function updateECT(newECT) {
    chrome.runtime.sendMessage({ ect: newECT }, function(response) {
      console.log("Acked.")
    });
  }

	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

      updateECT(navigator.connection.effectiveType);
      navigator.connection.addEventListener('change', function() {
        console.dir("Connection change: ", navigator.connection);
        if (navigator.onLine) {
          updateECT(navigator.connection.effectiveType);
        }
        else {
          updateECT("X");
        }
      });
  	}
	}, 10);
});
