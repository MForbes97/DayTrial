function hover() {
    if (
        $('#m1:hover').length != 0) {
        document.getElementById('m1').className = 'm1h';
    }
    if (
        $('#m2:hover').length != 0) {
        document.getElementById('m2').className = 'm1h';
    }
    if (
        $('#m3:hover').length != 0) {
        document.getElementById('m3').className = 'm1h';
    }
    if (
        $('#m4:hover').length != 0) {
        document.getElementById('m4').className = 'm1h';
    }
    if (
        $('#m5:hover').length != 0) {
        document.getElementById('m5').className = 'm1h';
    }
    if (
        $('#m6:hover').length != 0) {
        document.getElementById('m6').className = 'm1h';
    }
    if (
        $('#m7:hover').length != 0) {
        document.getElementById('m7').className = 'm1h';
    }
    if (
        $('#fm1:hover').length != 0) {
        document.getElementById('fm1').className = 'fm1h';
    }
    if (
        $('#fm2:hover').length != 0) {
        document.getElementById('fm2').className = 'fm1h';
    }
    if (
        $('#fm3:hover').length != 0) {
        document.getElementById('fm3').className = 'fm1h';
    }
    if (
        $('#fm4:hover').length != 0) {
        document.getElementById('fm4').className = 'fm1h';
    }
    if (
        $('#fm5:hover').length != 0) {
        document.getElementById('fm5').className = 'fm1h';
    }
    if (
        $('#fm6:hover').length != 0) {
        document.getElementById('fm6').className = 'fm1h';
    }
    if (
        $('#fm7:hover').length != 0) {
        document.getElementById('fm7').className = 'fm1h';
    }
}

function nohover() {
    document.getElementById('m1').className = 'm1';
    document.getElementById('m2').className = 'm1';
    document.getElementById('m3').className = 'm1';
    document.getElementById('m4').className = 'm1';
    document.getElementById('m5').className = 'm1';
    document.getElementById('m6').className = 'm1';
    document.getElementById('m7').className = 'm1';
    document.getElementById('fm1').className = 'fm1';
    document.getElementById('fm2').className = 'fm1';
    document.getElementById('fm3').className = 'fm1';
    document.getElementById('fm4').className = 'fm1';
    document.getElementById('fm5').className = 'fm1';
    document.getElementById('fm6').className = 'fm1';
    document.getElementById('fm7').className = 'fm1';
}

function mousebutton() {
    if (
        $('#b1:hover').length != 0) {
        document.getElementById('b1').style.color = 'black';
    }
    if (
        $('#b2:hover').length != 0) {
        document.getElementById('b2').style.color = 'black';
    }
    if (
        $('#b3:hover').length != 0) {
        document.getElementById('b3').style.color = 'black';
    }
    if (
        $('#b4:hover').length != 0) {
        document.getElementById('b4').style.color = 'black';
    }
    if (
        $('#b5:hover').length != 0) {
        document.getElementById('b5').style.color = 'black';
    }
    if (
        $('#b6:hover').length != 0) {
        document.getElementById('b6').style.color = 'black';
    }
}

function normalbutton() {

    document.getElementById('b1').style.color = 'white';
    document.getElementById('b2').style.color = 'white';
    document.getElementById('b3').style.color = 'white';
    document.getElementById('b4').style.color = 'white';
    document.getElementById('b5').style.color = 'white';
    document.getElementById('b6').style.color = 'white';

}

function imagehover() {
    if (
        $('#image1:hover').length != 0) {
            document.getElementById('image1').className = "image1hover";
            document.getElementById('text1').style.display = "inline";
    }
    if (
        $('#image2:hover').length != 0) {
            document.getElementById('image2').className = "image2hover";
            document.getElementById('text2').style.display = "inline";
    }
    if (
        $('#image3:hover').length != 0) {
            document.getElementById('image3').className = "image3hover";
            document.getElementById('text3').style.display = "inline";
    }
}

function imagenohover() {

    document.getElementById('image1').className = "imagenohover";
    document.getElementById('image2').className = "imagenohover";
    document.getElementById('image3').className = "imagenohover";
    document.getElementById('text1').style.display = "none";
    document.getElementById('text2').style.display = "none";
    document.getElementById('text3').style.display = "none";

}

function smhover() {
    if (
        $('#insta:hover').length != 0) {
            document.getElementById('insta').style.filter = 'invert(100%)';
    }
    if (
        $('#facebook:hover').length != 0) {
            document.getElementById('facebook').style.filter = 'invert(100%)';
    }
    if (
        $('#twitter:hover').length != 0) {
            document.getElementById('twitter').style.filter = 'invert(100%)';
    }
    if (
        $('#pinterest:hover').length != 0) {
            document.getElementById('pinterest').style.filter = 'invert(100%)';
    }
}

function smnohover() {

    document.getElementById('insta').style.filter = 'invert(0%)';
    document.getElementById('facebook').style.filter = 'invert(0%)';
    document.getElementById('twitter').style.filter = 'invert(0%)';
    document.getElementById('pinterest').style.filter = 'invert(0%)';
   
}