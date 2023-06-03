$(function(){
	$('#writeBtn').click(function(){
		var formData = new FormData($('#writeForm')[0]);
		
		$.ajax({
			type: 'post',
			url: '/person/write',
			data: formData,
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			success: function(){
				alert('가입 완료');
				location.href='/person/list';
			},
			error: function(err){
				console.log(err);
			}
		});
	});
	
});