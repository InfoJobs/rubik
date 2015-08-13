function textAreaResized(el){
	el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "30px";
}
