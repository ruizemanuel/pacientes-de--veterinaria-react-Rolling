export class Cita{
    constructor(parametroMascota, parametroDueno, parametroFecha, parametroHora, parametroSintoma){
        this.mascota = parametroMascota;
        this.dueno = parametroDueno;
        this.fecha = parametroFecha;
        this.hora = parametroHora;
        this.sintoma = parametroSintoma;
    }

    //getters y setters
     get mostrarMascota() {
        return this.mascota;
     }

     get mostrarDueno() {
        return this.dueno;
     }

     get mostrarFecha() {
        return this.fecha;
     }

     get mostrarHora() {
        return this.hora;
     }

     get mostrarSintoma() {
        return this.sintoma;
     }

     set modificarMascota(mascota) {
        this.mascota = mascota;
     }

     set modificarDueno(dueno) {
        this.dueno = dueno;
     }

     set modificarFecha(fecha) {
        this.fecha = fecha;
     }
     
     set modificarHora(hora) {
        this.hora = hora;
     }
     set modificarSintoma(sintoma) {
        this.sintoma = sintoma;
     }
};