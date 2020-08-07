document.addEventListener("DOMContentLoaded", () => {

    let turno = "x";
    let gano = true;

    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
    const c4 = document.getElementById("c4");
    const c5 = document.getElementById("c5");
    const c6 = document.getElementById("c6");
    const c7 = document.getElementById("c7");
    const c8 = document.getElementById("c8");
    const c9 = document.getElementById("c9");
    const turnoV = document.getElementById("turno");
    const Btnresetear = document.getElementById("reset");

    c1.addEventListener("click", function (e) { marcar(e.target) })
    c2.addEventListener("click", function (e) { marcar(e.target) })
    c3.addEventListener("click", function (e) { marcar(e.target) })
    c4.addEventListener("click", function (e) { marcar(e.target) })
    c5.addEventListener("click", function (e) { marcar(e.target) })
    c6.addEventListener("click", function (e) { marcar(e.target) })
    c7.addEventListener("click", function (e) { marcar(e.target) })
    c8.addEventListener("click", function (e) { marcar(e.target) })
    c9.addEventListener("click", function (e) { marcar(e.target) })

    Btnresetear.addEventListener("click", function (e) { resetear() })


    function marcar(val) {
        if (val.innerHTML === "") {
            if (turno === "x") {
                val.innerHTML = "x";
                ganar("x");
                turno = "o";
                turnoV.innerHTML = turno;
                
            } else {
                val.innerHTML = "o";
                ganar("o");
                turno = "x";
                turnoV.innerHTML = turno;
            }

        }else{

        }
        console.log(val);
    }

    function ganar(val) {
        if (c1.innerHTML === val && c2.innerHTML === val && c3.innerHTML === val) {
            mensaje(turno);
        } else if (c4.innerHTML === val && c5.innerHTML === val && c6.innerHTML === val) {
            mensaje(turno);
        } else if (c7.innerHTML === val && c8.innerHTML === val && c9.innerHTML === val) {
            mensaje(turno);
        } else if (c1.innerHTML === val && c5.innerHTML === val && c9.innerHTML === val) {
            mensaje(turno);
        } else if (c7.innerHTML === val && c5.innerHTML === val && c3.innerHTML === val) {
            mensaje(turno);
        } else if (c1.innerHTML === val && c4.innerHTML === val && c7.innerHTML === val) {
            mensaje(turno);
        } else if (c2.innerHTML === val && c5.innerHTML === val && c8.innerHTML === val) {
            mensaje(turno);
        } else if (c3.innerHTML === val && c6.innerHTML === val && c9.innerHTML === val) {
            mensaje(turno);
        } else if (c1.innerHTML !== "" && c2.innerHTML !== "" && c3.innerHTML !== "" &&
            c4.innerHTML !== "" && c5.innerHTML !== "" && c6.innerHTML !== "" &&
            c7.innerHTML !== "" && c8.innerHTML !== "" && c9.innerHTML !== "") {
            gano = false;
            mensaje("Empatada");
        }
    }

    function mensaje(mensaje) {
        const div = document.createElement("div");
        if (gano) {
            div.classList.add("alert", "alert-success");
            div.innerHTML = "El ganador fue: " + mensaje;
        } else {
            div.classList.add("alert", "alert-danger");
            div.innerHTML = "La partida termino en: " + mensaje;
        }
        document.getElementById("mensaje").appendChild(div);
        setInterval(() => {
            div.remove();
        }, 3000);

    }

    function resetear() {
        c1.innerHTML="";
        c2.innerHTML="";
        c3.innerHTML="";
        c4.innerHTML="";
        c5.innerHTML="";
        c6.innerHTML="";
        c7.innerHTML="";
        c8.innerHTML="";
        c9.innerHTML="";
        turnoV.innerHTML="x";
        turno="x";
    }

})

