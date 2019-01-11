$(function () {
    var itemsLi='TreeLi';
    var itemsUl='TreeUl';
    var levelSize=0;
    $("#Trees").append("<ul class='TreeUl0' id='TreeUl0'></ul>");
    for (var i=0;i<Tree.length;i++){
         if (Tree[i].bId==0){
             $("#TreeUl0").append("<li class="+itemsLi+Tree[i].bId+" id="+itemsLi+Tree[i].id+"><h4 select='no'><i><img src='tree.png' alt=''></i>"+Tree[i].name+"</h4></li>")
         }
         if (Tree[i].bId>=levelSize){
             levelSize=Tree[i].bId
         }
    }
    for (var a=1;a<=levelSize;a++){
        for (var i=0;i<Tree.length;i++){
            if (Tree[i].bId==a){
                if($("#"+itemsUl+Tree[i].bId).html()==undefined){
                    $("#"+itemsLi+Tree[i].bId).append("<ul class="+itemsUl+Tree[i].bId+" id="+itemsUl+Tree[i].bId+"></ul>")
                }
                $("#"+itemsUl+Tree[i].bId).append("<li class="+itemsLi+Tree[i].bId+" id="+itemsLi+Tree[i].id+"><h4 select='no'><i><img src='tree.png' alt=''></i>"+Tree[i].name+"</h4></li>")
            }
        }
    }
	$("#Trees li h4").each(function () {
		if ($(this).attr("select") == "no") {
			$(this).siblings("ul").find("li").hide();
			$(this).find("i img").removeClass("ImgActive");
		} else {
			$(this).siblings("ul").find("li").show();
			$(this).find("i img").addClass("ImgActive");
		}
		if ($(this).siblings().html() == undefined) {
			$(this).find("i img").remove();
		}
		// setAdd(this);
		$(this).click(function () {
			$("#Trees li h4").removeClass("Active");
			$(this).addClass("Active");
			setAdd($(this))
		})
	});
	
	function setAdd(Obj) {
		if (Obj.attr("select") == "no") {
			Obj.attr("select", "select");
			Obj.siblings("ul").find("li").show();
			Obj.find("i img").addClass("ImgActive");
			Obj.siblings("ul").find("li").find("ul li").hide();
			Obj.siblings("ul").find("li").find("h4 i img").removeClass("ImgActive");
			Obj.siblings("ul").find("li").find("h4").attr("select", "no");
		} else {
			Obj.attr("select", "no");
			Obj.siblings("ul").find("li").hide();
			Obj.find("i img").removeClass("ImgActive");
		}
	}
	
	
});