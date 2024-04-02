<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<script>
$(function() {
	
// 	var bnoValue = '<c:out value="${board.bno}"/>';
	
// 	var replyUL = $(".chat");
	
// 	showList(1);
	
// 	function showList(page) {
		
// 		replyService.getList({bno:bnoValue, page: page|| 1}, function(list) {
			
// 			var str="";
// 			if(list == null || list.length ==0) {
				
// 				replyUL.html("");
				
// 				return;
// 			}
			
// 			for (var i = 0, len = list.length || 0; i < len; i++) {
// 				str +="<li class='left clearfix' data-rno='"+list[i].rno+"'>";
// 				str +=" <div><div class='header'><strong class='primary-font'>"+list[i].replyer+"</strong>";
// 				str +="		<samll class='pull-right text-muted'>"+replyService.displayTime(list[i].replyDate)+"</samll></div>";
// 				str +="		<p>"+list[i].reply+"</p></div></li>";
				
// 			}
			
// 			replyUL.html(str);
		
// // 			alert(list[0].rno);
		
// 		});
// 	}
	
});

</script>