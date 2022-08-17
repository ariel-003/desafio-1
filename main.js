import { Usuario } from "./Class/Usuario.js";
const mascotas = ["Gato", "Perro"]
const user = new Usuario("Cristian", "Maria", [{ nombre: "libro 1", autor: "autor 1" }], mascotas)

const main = ()=>{
    console.log(user.getFullName())
    user.addMascota("Sofy")
    console.log(user.countMascotas())
    user.addBook("libro2", "autor2")
    console.log(user.getBookNames())
}

main() 