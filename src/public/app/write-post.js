$('#btn').click(()=>{

    let title=$('#title').val();
    let body = $('#body').val();
    $.post('/api/posts',{
        userId: window.currentUser.id,
        title: title,
        body: body
    })


})





    