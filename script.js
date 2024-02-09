$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");

        // Agrega el mensaje "Quedate conmigo una vida entera" con animación a la carta
        setTimeout(function () {
            $(".words.line1").text("AMOR:").addClass("animate-word");
            $(".words.line2").text("Quédate conmigo una vida ...entera ❤ Te amo demasiado").addClass("animate-word");
        }, 600); // 600 milisegundos después de abrir la carta

        // Añade el mensaje "Te amo mucho, mi pidaña" con animación de letra por letra
        setTimeout(function () {
            animateText("Te amo mucho, mi pidaña", $(".title"));
        }, 1500); // 1500 milisegundos después de abrir la carta
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");

        // Restaura los mensajes y la animación a su estado original
        $(".words.line1").text("").removeClass("animate-word");
        $(".words.line2").text("").removeClass("animate-word");
        $(".words.line3").text("").removeClass("animate-word");
        $(".words.line4").text("").removeClass("animate-word");

        // Restaura el mensaje original "Te amo mucho, mi pidaña" con animación de letra por letra
        animateText("Te amo mucho, mi pidaña", $(".title"));
    }

    function animateText(text, targetElement) {
        // Divide el texto en letras y las envuelve en <span>, respetando los espacios
        var wrappedLetters = text.split("").map(function (letter) {
            return letter === " " ? "<span>&nbsp;</span>" : "<span>" + letter + "</span>";
        });

        // Agrega los <span> al elemento de destino
        targetElement.html(wrappedLetters.join(""));

        // Añade la clase para activar la animación
        targetElement.find("span").each(function (index) {
            $(this).addClass("animate-letter").css("animation-delay", index * 0.1 + "s");
        });
    }
});
