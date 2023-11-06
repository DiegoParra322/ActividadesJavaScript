const dia = prompt( "# dia" );

if( dia > 0 && dia < 6) {
    console.log( "Entre semana")
}
else if( dia < 9) {
    console.log( "fin de semana")
}
else {
    console.log( "Error")
}