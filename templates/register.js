function createdata() {

    var username = $('#username').val();
    var password = $('#password').val();
    var message = JSON.stringify({
        "username": username,
        "password": password
    });

    $.ajax({
        url:'/authenticate',
        type:'POST',
        contentType: 'application/json',
        data : message,
        dataType:'json',
        success: function(response){
            alert(JSON.stringify(response));

        },
        error: function(response) {
            alert(JSON.stringify(response));
        }
    });

}