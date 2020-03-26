function getStatus() {
		var key = "YOUR_API_KEY_HERE"
		var requestString = "https://api.uptimerobot.com/v2/getMonitors"
		request = new XMLHttpRequest();
		request.open("POST", requestString, true);
		data = "api_key=<YOUR_API_KEY_HERE>&format=json&logs=1&logs_limit=1";
		request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		//request.setRequestHeader("Content-length", data.length);
		
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			   // Typical action to be performed when the document is ready:
			   var response = request.responseText;
			   var myObj=JSON.parse(response);
			   console.log("Specific response requests: "+myObj.monitors[1].logs[0].reason.code+'\n\n'); // What is this supposed to be logging to the console?
			   console.log("The response is: \n"+response); // JSON output follows?
			   var upCount=0;
			   var downCount=0;
			   for (i=0;myObj.monitors[i]!=null;i++){
				   if(myObj.monitors[i].status == 2){upCount++;}
				   else{downCount++;}
			  }
			   document.getElementById("up").innerHTML=upCount;
			   document.getElementById("down").innerHTML=downCount;
			   console.log("FINISHED! UP: "+upCount+" DOWN: "+downCount);
			   
			}
		};
		request.send(data);
	};
	getStatus();