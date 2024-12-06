## Proyecto

    ### Rol Admin
    - Pantalla para ADMIN donde pueda ver todos los productos
        - Se podrá eliminar con un botón el producto seleccionado
        - Podrás hacer click a un botón "añadir product" que redireccione a la pantalla "añadir producto"
        - Poder hacer click en un producto que redirija a pantalla "modificar producto"
    - Pantalla para ADMIN para crear un nuevo producto
    - Pantalla para ADMIN para modificarlo
    ### Rol Cliente
    - Pantalla para ver todos los productos
        - Puedes filtrar por categoría
        - Puedes click en cada producto para ir a la pantalla "detalle de producto"
    - Pantalla detalle de producto

# Frontend del Proyecto

Esta es la parte del frontend de la aplicación creada con React.

## Dependencias Utilizadas

- React:Para construir interfaz de usuario.
- React DOM: Para manipular el DOM virtual de React.
- React Router DOM: Para manejar rutas en una aplicación de una sola página.
- Layout: Para encapsular la estructura de la aplicacion,y añadir un header y un footer.
- BrowserRouter,Routes y Route para crear las rutas.
- Link: Para manejar las rutas.
- Usenavigate: para redireccionar a otra página.
- UseState: para cambiar el estado y useEffect para hacer las peticiones.
- UseParams: para acceder a los parametros de las rutas.
- MUI: Para descargar componentes creados.
- Prettier: Para formatear el codigo.

## Instalación

1. Clona este repositorio:

   git clone <URL_DEL_REPOSITORIO>
   cd frontend

## Inicia el proyecto

Primero instala todas las dependencias con npm i.
Después inicia el back con npm start y luego el front con el mismo comando.

## Rutas de la Aplicación

La aplicación cuenta con rutas que permiten la navegación para clientes y administradores.

### Rutas Clientes

- `/`: Muestra la lista de productos disponible para los clientes con el componente `ProductListClient`.
- `/products/:id`: Muestra los detalles del producto con el componente `ProductsDetailsClient`.
- `/products/categoria/:categoria`: Muestra los productos por categoría con el componente `ProductListByCategory`.

### Rutas Administrador

- `/administrador`: Lista de productos con opciones de administrador,como borrar o midificar el producto,con el componente `ProductListAdminAdmin`.
- `/administrador/newProduct`: Formulario para añadir un nuevo producto con el componente `NewProduct`.
- `/api/products/:id`: Formulario para editar un producto existente,carga los datos del producto seleccionado y permite modificarlos con el componente `EditProduct`.
