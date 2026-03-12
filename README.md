/*
 * ============================================================
 * RESUMEN DE IMPLEMENTACIÓN JWT
 * ============================================================
 *
 * 1. DEPENDENCIAS INSTALADAS
 *    - bcrypt@latest     → Para encriptar contraseñas
 *    - jsonwebtoken@latest → Para generar y verificar tokens JWT
 *
 * 2. VARIABLE DE ENTORNO (.env)
 *    - Se agregó JWT_SECRET=full-stack
 *      (clave secreta para firmar los tokens)
 *
 * 3. MODELO USUARIO (src/bd/modelos/usuario.js)
 *    - Se creó el schema con:
 *      · username (String, único, requerido)
 *      · password (String, requerido)
 *
 * 4. MODELO PEDIDO (src/bd/modelos/pedido.js)
 *    - Se agregó el campo:
 *      · cliente (ObjectId, referencia a 'usuario')
 *      (relaciona cada pedido con un usuario)
 *
 * 5. SERVICIO USUARIOS (src/servicios/usuarios.js)
 *    - createUsuario()     → Encripta la contraseña con bcrypt
 *                            y guarda el usuario en MongoDB
 *    - loginUsuario()      → Verifica usuario y contraseña,
 *                            genera y retorna un token JWT
 *                            con expiración de 24h
 *    - getUsuarioInfoById() → Busca un usuario por su ID
 *
 * 6. RUTAS USUARIOS (src/rutas/usuarios.js)
 *    - POST /api/v1/usuario/signup → Crea un nuevo usuario
 *    - POST /api/v1/usuario/login  → Retorna token JWT
 *    - GET  /api/v1/usuarios/:id   → Info de usuario por ID
 *
 * 7. APP.JS (src/app.js)
 *    - Se importó usuarioRoutes
 *    - Se registró usuarioRoutes(app) junto a pedidosRoutes(app)
 *
 * FLUJO COMPLETO:
 *    Usuario se registra → contraseña encriptada con bcrypt
 *    Usuario hace login  → se genera token JWT firmado con JWT_SECRET
 *    Token retornado     → el frontend lo usa para autenticar requests
 * ============================================================
 */


 EVIDENCIAS FOTOGRAFICAS
 
![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)

 BASE DE DATOS CON DATOS DE PRUEBA
![alt text](image-9.png)

 IMPLEMENTACION DEL JWT
 ![alt text](image-10.png)
 ![alt text](image-11.png)
 ![alt text](image-12.png)
 ![alt text](image-13.png)

 *** FUNCIONALIDAD CON EL FRONTEND
 ![alt text](image.png)

 INTEGRACIÓN DEL FRONTEND

 ![alt text](image-1.png)
 ![alt text](image-2.png)
 ![alt text](image-3.png)

 *** PRUEBAS DEL JWT
 ![alt text](image-4.png)
 ![alt text](image-5.png)
 ![alt text](image-6.png)
 ![alt text](image-7.png)