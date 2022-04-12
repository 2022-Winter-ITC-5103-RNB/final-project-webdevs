function createSidePopup() {
    if (document.querySelectorAll('.vex').length == 0) {
        vex.defaultOptions.className = 'vex-theme-bottom-right-corner';
        var vexId = vex.dialog.open({
        message: 'Why not subscribe for more! Email Please',
        input: [
            '<input name="email" type="text" placeholder="jhondoe@domain.com" required />',
        ].join(''),
        buttons: [
            $.extend({}, vex.dialog.buttons.YES, { text: 'Subscribe' }),
            $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
        ],
        callback: function (data) {
            if (!data) {
                    }
                    else {
                var email_value = data.email;
                            var form = document.createElement("form");
                            form.setAttribute('method',"post");
                            form.setAttribute('action', "http://formspree.io/classandobjects@gmail.com");

                            var input = document.createElement("input");
                            input.setAttribute('type',"email");
                            input.setAttribute('name',"email");
                            input.value = email_value;

                            form.appendChild(input);
                            form.submit();
            }
                    hide(document.querySelectorAll('.vex'));
        },
        });
    }
}

function onScrollSubscribePopup () {
    {{ if .IsPage }}
    $(document).ready(function() {
        $(window).scroll(function(e){
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            var winHeight = $(window).height();
            var scrollPercent = (scrollTop) / (docHeight - winHeight);
            var scrollPercentRounded = Math.round(scrollPercent*100);
            if (scrollPercentRounded > 70 && scrollPercentRounded <     80) {
                createSidePopup();
            }
        });
    });
    {{ end }}
}