var NYT_API_URL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=cat+feline&fq=source:(%22The%20New%20York%20Times%22)&fq=headline:(%22cat%22)&begin_date=20000101&sort=newest&page=';
var NYT_API_KEY = '&api-key=4a72ce12c77f58a3a647126cf25f0a3e:19:64832467';

	function addMews(){

		for (var i=0; i < 3; i++) {    
			var NYT_CALL = NYT_API_URL + i + NYT_API_KEY;

          	$.getJSON(NYT_CALL, function(mews) {

            	$.each(mews.response.docs, function (){
            	
				var woohoo = (this.multimedia[1]);
				if (woohoo !== undefined) {
                	$('#nyt-meow').append('<div class="meow-block with-pic"><div class="images"><img src="http://static01.nyt.com/' + woohoo.url + '"/></div><div class="head"><a href="' + this.web_url + '">' + this.headline.main + '</a></div><div class="snippet">' + this.snippet + '</div></div>');
				} else{
					$('#nyt-meow').append('<div class="meow-block"><div class="head"><a href="' + this.web_url + '">' + this.headline.main + '</a></div><div class="snippet">' + this.snippet + '</div></div>');
				}
            	}) 
          });
        }   
	}

  
addMews();


