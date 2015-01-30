$.ajax({
    type: 'GET',
    url: 'https://api.instagram.com/v1/tags/thepasteup/media/recent?access_token=9741474.73a1576.f38bf70f14d34f8a8f45c2fb233cbefe',
    dataType: 'jsonp',
    success: function(response){
        console.log(response);
        var list = '';
        for (var i = response.data.length - 1; i >= 0; i--) {
            list += '<figure class="effect-marley"><img src="'+ response.data[i].images.standard_resolution.url +'" alt="img01"/><figcaption><h2>'+response.data[i].user.full_name+'</h2><p>'+response.data[i].caption.text+'</p></figcaption></figure>';
        };
        $('.grid').html(list);
    }
});
