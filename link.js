window.onload=function(){
	var pics=document.getElementById("pics");
	var pic=document.getElementById("pic");

	var prev=document.getElementById("prev");
	var next=document.getElementById("next");

	next.onclick=function(){
		var newLeft=parseInt(pic.style.left)+1000;
              pic.style.left=newLeft+"px";
              if(newLeft>0){
                    pic.style.left=-2000+"px";
              }
		 
	}

	prev.onclick=function(){
		 var newLeft=parseInt(pic.style.left)+1000;
              pic.style.left=newLeft+"px";
              if(newLeft>0){
                    pic.style.left=-2000+"px";
              }
	}
	pics.onmouseover=function(){
		prev.style.display="block";
		next.style.display="block";
	}
	pics.onmouseout=function(){
		prev.style.display="none";
		next.style.display="none";
	}
}