console.log("Reply List Module......");

var replyList = (function(){
	
	function showList(page, bnoValue, replyUL) {
		
		replyService.getList({bno:bnoValue, page: page|| 1}, function(list) {
			
			var str="";
			if(list == null || list.length ==0) {
				
				replyUL.html("");
				
				return;
			}
			for (var i = 0, len = list.length || 0; i < len; i++) {
				str +="<li class='left clearfix' data-rno='"+list[i].rno+"'>";
				str +=" <div><div class='header'><strong class='primary-font'>"+list[i].replyer+"</strong>";
				str +="		<samll class='pull-right text-muted'>"+replyService.displayTime(list[i].replyDate)+"</samll></div>";
				str +="		<p>"+list[i].reply+"</p></div></li>";
				}
			
		replyUL.html(str);
		
		});		
	}
	
	return {
			showList : showList
		};
		
})();
	

	
//	var pageNum = 1;
//	var replyPageFooter = $(".panel-footer");
//	
//	function showReplyPage(replyCnt) {
//		
//	}
//	
//	replyPageFooter.on("click", "li a", function(e) {
//		
//	var modal = $(".modal");
//	var modalInputReply = modal.find("input[name='reply']");
//	var modalInputReplyer = modal.find("input[name='replyer']");
//	var modalInputReplyDate = modal.find("input[name='replyDate']");
//	
//	var modalModBtn = $("#modalModBtn");
//	var modalRemoveBtn = $("#modalRemoveBtn");
//	var modalRegisterBtn = $("#modalRegisterBtn");
//	
//	$("#modalCloseBtn").on("click", function(e) {
//		
//	});
//	
//	$("#addReplyBtn").on("click", function(e) {
//		
//	});
//	
//	modalRegisterBtn.on("click", function(e) {
//		
//	//댓글 조회 클릭 이벤트 처리
//	$(".chat").on("click", "li", function(e){
//		
//	});
//	
//	modalModBtn.on("click", function(e) {
//		
//	});
//	
//	modalRemoveBtn.on("click", function(e) {
//		
//	});
//});
//});
//})