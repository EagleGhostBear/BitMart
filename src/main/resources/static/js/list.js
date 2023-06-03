$(function(){
	$.ajax({
		type: 'post',
		url: '/person/getPersonList',
		success: function(data){
			console.log(JSON.stringify(data));
			/*
			$.each(data, function(index, item){
				var html = `<tr>` +
						   `<td align="center">`+ item.photo + `</td>` +
						   `<td align="center">`+ item.name + `</td>` +
						   `<td align="center">`+ item.age + `</td>` +
						   `</tr>`;
						   
				$('#listTable').append(html);					   
			});//$.each
			*/
			
			for (var i = 0; i < data.length; i++) {
    			var html = `<tr>
                			<td align="center">
                			<img src="/storage/${data[i].photo}" width="100" height="100">
                			</td>
                			<td align="center">${data[i].name}</td>
                			<td align="center">${data[i].age}</td>
              				</tr>`;
              				
    			$('#listTable').append(html);
			}//for
			
			
		},
		error: function(err){
			console.log(err);
		}
		
	});//ajax()
});