Drupal.behaviors.privatemsg_templates = function(context) {
  $('select#edit-privatemsg-templates', context).bind('change', function() {    
    var nid = $(this).val();
    //this check is to prevent an unnecessary get request
    //TODO: add prompt to prevent the user losing a message they may have typed already.
    if(nid > 0) {
      $.getJSON('/privatemsg_templates/get_template/' + nid, function(json) {
        $('#privatemsg-new #edit-body').html(json.data);
      });
    } else {
      $('#privatemsg-new #edit-body').html('');
    }
    return false;
  });
}