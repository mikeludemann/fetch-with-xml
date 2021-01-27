fetch ('./src/xml/data.xml')
	.then (function (response) {
		return response.text();
	})
	.then (function (data) {
		let content = '';
		let main = document.getElementById('context-1');
		let parser = new DOMParser(),
		xmlDoc = parser.parseFromString(data, 'text/xml');

		for(var i=0; i<xmlDoc.getElementsByTagName('item').length; i++){
			let count = i+1;
			content += 'Tag ' + count + ': <br/><br/>';
			for(var j=0; j<xmlDoc.getElementsByTagName('item')[i].children.length; j++){
				content += '- ' + xmlDoc.getElementsByTagName('item')[i].children[j].innerHTML + '<br/>';
			}
			content += '<br/>';
		}
		main.innerHTML = content;
	}).catch (function (error) {
		console.log ('Fehler - Auslesen der XML-Datei: ' + error);
	});
