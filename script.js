/* ========================================================
   CodeGym Career Landing Page - JavaScript Interactions
   Framework: Bootstrap 4.5.0 + MDBootstrap 4.19.1 + jQuery 3.5.1
   Tác giả: Hồ Quang Huy (DTC245200862)
   ======================================================== */

$(document).ready(function () {
    // 1. Khởi tạo hiệu ứng sóng Material Waves
    if (typeof Waves !== 'undefined') {
        Waves.init();
        Waves.attach('.btn:not(.btn-flat)', ['waves-light']);
        Waves.attach('.btn-flat', ['waves-effect']);
    }

    // 2. Navbar chuyển màu khi cuộn trang
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('.navbar').addClass('scrolled');
            $('.back-to-top').fadeIn();
        } else {
            $('.navbar').removeClass('scrolled');
            $('.back-to-top').fadeOut();
        }
    });

    // 3. Cuộn lên đầu trang (Back to top)
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // 4. Smooth scrolling cho các anchor link
    $('a.nav-link[href^="#"], a.btn[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 700);

            // Đóng collapse menu trên mobile nếu đang mở
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-toggler').click();
            }
        }
    });

    // 5. Xử lý Form đăng ký tư vấn nghề nghiệp
    $('#careerRegisterForm').on('submit', function (e) {
        e.preventDefault();

        var fullName = $('#fullName').val().trim();
        var phone = $('#phone').val().trim();
        var email = $('#email').val().trim();
        var location = $('#location').val();
        var targetGroup = $('#targetGroup').val();

        if (!fullName || !phone || !email) {
            alert('Vui lòng điền đầy đủ các thông tin bắt buộc: Họ tên, Số điện thoại và Email!');
            return;
        }

        // Hiển thị thông báo xác nhận thành công
        $('#formSuccessModal').modal('show');
        $('#submitSuccessMsg').html(
            'Cảm ơn <strong>' + fullName + '</strong>! Chuyên viên tư vấn hướng nghiệp CodeGym Career (' + location + ') sẽ liên hệ với bạn qua SĐT <strong>' + phone + '</strong> trong vòng 24 giờ.'
        );

        // Reset form
        $('#careerRegisterForm')[0].reset();
    });
});
