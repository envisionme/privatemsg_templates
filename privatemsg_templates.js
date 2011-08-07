/* Thought this would work - it's not though */
Drupal.behaviors.privatemsg_templates = function(context) {
  $('#edit-privatemsg-templates', context).bind('change', function(){    
	var nid = this.selectedIndex;
	//this check is to prevent an unnecessary get request
	//TODO: add prompt to prevent the user losing a message they may have typed already.
	if(nid > 0){
		
		$.get('/privatemsg_templates_get_template/'+ nid, null, privatemsg_load_template);
	}else{
		$('#privatemsg-new #edit-body').html('');
	}
    return false;
  });
}

/*function privatemsg_select_template(nid){
	alert('asd');
	$.get('/privatemsg_templates_get_template/'+ nid, null, privatemsg_load_template);
}*/

var privatemsg_load_template = function(response) {
  var result = Drupal.parseJson(response);
  $('#privatemsg-new #edit-body').html(result.data);
}