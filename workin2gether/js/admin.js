$(document).ready(function(){
	
	$('#submitColor').click(function(){
			$.ajax({
			url: OC.filePath('workin2gether','ajax','update.php'),
			type: "post",
			data: { mode: 'color', value: $('#multicolor').val()},
			async: false,
			success: function(data){text = data;},
			});
		alert(text);
	});
	
	$('#submitfontcolor').click(function(){
			$.ajax({
			url: OC.filePath('workin2gether','ajax','update.php'),
			type: "post",
			data: { mode: 'fontcolor', value: $('#multifontcolor').val()},
			async: false,
			success: function(data){text = data;},
			});
		alert(text);
	});
	
	$('input:radio[name="suffix"]').change(function(){
		$.ajax({
			url: OC.filePath('workin2gether','ajax','update.php'),
			type: "post",
			data: { mode: 'suffix', value: $("input:radio[name='suffix']:checked").attr('id')},
			async: false,
			success: function(data){},
			});
	});
	
	$('#clearall').click(function(){
		$.ajax({
			url: OC.filePath('workin2gether','ajax','admin_db.php'),
			type: "post",
			data: { action: 'clearall'},
			async: false,
			success: function(data){
			if(data=="clear") $('#lockfield').html(t("workin2gether","There are no locked files at the moment"));},
		});
	});
	
	$('#clearthis').click(function(){
		$.ajax({
			url: OC.filePath('workin2gether','ajax','admin_db.php'),
			type: "post",
			data: { action: 'clearthis',lock: $('#select_lock option:selected').val()},
			async: false,
			success: function(data){
				if(data=="clear") $('#select_lock option:selected').remove();
				
				if($.trim($('#select_lock').html())=="")
					$('#lockfield').html(t("workin2gether","There are no locked files at the moment"));

			},
			});
	});

	$('#w2g_lpml').click(function(){
		$('#w2g_lock_permission_extended').click();
	});

	$('#w2g_lock_permission_extended').click(function(){
		extended_checked = $('#w2g_lock_permission_extended').attr('checked')? 1 : 0;

		 $.ajax({
                        url: OC.filePath('workin2gether','ajax','update.php'),
                        type: "post",
                        data: { mode: 'extended',value: extended_checked },
                        async: false,
                        success: function(){},
                        });
	});

	// Directory locking
	$('input:radio[name="directory_locking"]').change(function() {
        $.ajax({
            url: OC.filePath('workin2gether','ajax','update.php'),
            type: "post",
            data: { mode: 'directory_locking', value: $("input:radio[name='directory_locking']:checked").attr('id')},
            async: false,
            success: function(data){},
        });
	});
});
