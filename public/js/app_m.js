function newTeacher() {
    var name = $('#name').val(),
        gender = parseInt($('#gender').val()),
        phone = $('#phone').val(),
        show_phone = $('#show_phone').val() == 'on',
        is_personal = $('#is_personal').val() == 'on',
        introduction = $('#introduction').val();

    $.ajax({
        url: "/api/teacher",
        data: JSON.stringify({
            data: {
                name: name,
                gender: gender,
                phone: phone,
                show_phone: show_phone,
                is_personal: is_personal,
                introduction: introduction
            }
        }),
        type: "POST",
        contentType: "application/json",
        dataType: 'json',
        success: function (json) {
            alert('success');
        },
        error: function (json) {
            alert('fail');
        }
    });

    return false;
}