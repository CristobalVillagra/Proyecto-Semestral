function addFlor() {
    array = [
        {
            idProducto:"1",
            nombreProducto:"Orquidea Morada",
            precio:"10000"
        }
    ]
    let cadenaString =JSON.stringify(array);
    console.log(cadenaString);

    localStorage.setItem("carrito",cadenaString);
}