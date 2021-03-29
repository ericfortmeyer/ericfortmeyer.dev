slides = document.getElementsByClassName('slides');

function slideshow(slides){
	i = 1;
	window.setInterval(function() {
		if(slides[i] === undefined){
			p = i - 2;
			l = i - 1;
			slides[p].style.display = 'none';
			slides[l].style.display = 'none';
			i = 0;
			
		}
		
		if(i > 1){
			p = i - 2;
			slides[p].style.display = 'none';
		}

		slides[i].style.display = 'block';
		i++;
	}, 7000);
	

}


slideshow(slides);