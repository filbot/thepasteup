// https://api.instagram.com/v1/tags/snow/media/recent?access_token=9741474.73a1576.f38bf70f14d34f8a8f45c2fb233cbefe

$.ajax({
    type: 'GET',
    url: 'https://api.instagram.com/v1/tags/thepasteup/media/recent?access_token=9741474.73a1576.f38bf70f14d34f8a8f45c2fb233cbefe',
    dataType: 'jsonp',
    success: function(response){
        console.log(response);
        var list = '';
        for (var i = response.data.length - 1; i >= 0; i--) {
            list += '<li><img src="' + response.data[i].images.standard_resolution.url +'"/></li>'
        };
        $('.photo-list').html(list);
    }
});