const vinilos = document.getElementById("vinilos");
const cds = document.getElementById("cds");
const casetes = document.getElementById("casetes");
const camisetas = document.getElementById("camisetas");
const filtros=document.getElementById("filtros");
const articles_remeras=document.getElementsByClassName("remera");
const array_remeras=[articles_remeras[0],articles_remeras[1],articles_remeras[2],articles_remeras[3]];
const articles_casetes=document.getElementsByClassName("casete");
const array_casetes=[articles_casetes[0],articles_casetes[1],articles_casetes[2],articles_casetes[3]];
const articles_cds=document.getElementsByClassName("cd");
const array_cds=[articles_cds[0],articles_cds[1],articles_cds[2],articles_cds[3],articles_cds[4]];
const articles_vinilos=document.getElementsByClassName("vinilo");
const array_vinilos=[articles_vinilos[0],articles_vinilos[1],articles_vinilos[2]];
const cd_el_tesoro=document.getElementById("cdElTesoro");
const cd_la_dinastia=document.getElementById("laDinastia");
const cd_ahora=document.getElementById("ahoraImagino");
const casete_dinastia=document.getElementById("caseteDinastia");

const filtrar = (producto) =>{
    switch (producto) {
        case "vinilos":
            array_vinilos.forEach(element => {
                element.classList.remove("d-none")
            });
            array_remeras.forEach(element => {
                element.classList.add("d-none")
            });
            array_cds.forEach(element => {
                element.classList.add("d-none")
            });
            array_casetes.forEach(element => {
                element.classList.add("d-none")
            });
            break;
            case "cds":
            array_cds.forEach(element => {
                element.classList.remove("d-none")
            });
            array_remeras.forEach(element => {
                element.classList.add("d-none")
            });
            array_vinilos.forEach(element => {
                element.classList.add("d-none")
            });
            array_casetes.forEach(element => {
                element.classList.add("d-none")
            });
            cd_el_tesoro.classList.add("caja4");
            cd_la_dinastia.classList.remove("caja4");
            cd_ahora.classList.remove("caja4")
            break;
            case "casetes":
            array_casetes.forEach(element => {
                element.classList.remove("d-none")
            });
            array_remeras.forEach(element => {
                element.classList.add("d-none")
            });
            array_vinilos.forEach(element => {
                element.classList.add("d-none")
            });
            array_cds.forEach(element => {
                element.classList.add("d-none")
            });
            casete_dinastia.classList.add("caja4")
            break;
            case "camisetas":
            array_remeras.forEach(element => {
                element.classList.remove("d-none")
            });
            array_casetes.forEach(element => {
                element.classList.add("d-none")
            });
            array_vinilos.forEach(element => {
                element.classList.add("d-none")
            });
            array_cds.forEach(element => {
                element.classList.add("d-none")
            });
            break;
            case "filtros":
            array_casetes.forEach(element => {
                element.classList.remove("d-none")
            });
            array_remeras.forEach(element => {
                element.classList.remove("d-none")
            });
            array_vinilos.forEach(element => {
                element.classList.remove("d-none")
            });
            array_cds.forEach(element => {
                element.classList.remove("d-none")
            });
            cd_el_tesoro.classList.remove("caja4");
            cd_la_dinastia.classList.add("caja4");
            cd_ahora.classList.add("caja4");
            casete_dinastia.classList.remove("caja4");
            break;
        default:
            break;
    }
}
const main = () =>{
    vinilos.addEventListener("click",()=>filtrar("vinilos"));
    cds.addEventListener("click",()=>filtrar("cds"));
    casetes.addEventListener("click",()=>filtrar("casetes"));
    camisetas.addEventListener("click",()=>filtrar("camisetas"));
    filtros.addEventListener("click",()=>filtrar("filtros"))
}
main()