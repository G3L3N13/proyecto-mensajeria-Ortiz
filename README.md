# 💬 Aplicación de Mensajería en Tiempo Real

## Descripción del Proyecto
En el presente proyecto se desarrollo una aplicación web de mensajería en tiempo real que permite la comunicación instantánea entre múltiples usuarios conectados considerando que existen chat globales y privados que mejoran la experiencia de usuario. La aplicación implementa una arquitectura cliente-servidor utilizando tecnologías modernas de desarrollo web, permitiendo el intercambio de mensajes mediante WebSockets.

-----------

# 🎯 Objetivos 

## Objetivo General 
Desarrollar una aplicación web de mensajería en tiempo real utilizando tecnologías web modernas para facilitar la comunicación instantánea entre usuarios conectados.

## Objetivos Específicos
- Implementar una arquitectura cliente-servidor mediante Node.js y Express.
- Utilizar Socket.IO para establecer comunicación bidireccional en tiempo real.
- Diseñar una interfaz web sencilla e intuitiva para el envío y recepción de mensajes.
  
-----------

## Tecnologías utilizadas

#### Frontend
HTML5
CSS3
JavaScript
#### Backend
Node.js
Express.js
Comunicación en Tiempo Real
Socket.IO
#### Control de Versiones
Git
GitHub

## Arquitectura del Sistema

La aplicación sigue una arquitectura cliente-servidor basada en eventos. Los clientes se conectan al servidor mediante Socket.IO, permitiendo la comunicación bidireccional en tiempo real.

Cliente Web
     │
     ▼
Socket.IO Client
     │
     ▼
Node.js + Express
     │
     ▼
Socket.IO Server
     │
     ├── Mensajes Globales
     ├── Mensajes Privados
     └── Gestión de Usuarios
## Estructura del proyecto 

proyecto-mensajeria/ 
│ 
├── public/ 
│ └── index.html 
│ 
├── server.js 
├── package.json 
├── package-lock.json 
└── README.md

## Archivos
| Archivo | Descripción |
|----------|------------|
| `server.js` | Configuración del servidor Express y Socket.IO. Gestiona conexiones, mensajes globales y mensajes privados |
| `package.json` | Contiene la información del proyecto, dependencias y scripts de ejecución. |
| `index.html` | Interfaz web utilizada por los usuarios para interactuar con el sistema de mensajería. |
| `Readme.md` | Documentación técnica del proyecto. |

## Eventos de Socket.io
| Evento | Uso |
|---------|------|
| `registrar` | Guardar el nombre del usuario asociado a un Socket ID. |
| `usuarios-conectados` | Actualizar la lista o tabla de usuarios conectados. |
| `mensaje-global` | Enviar un mensaje a todos los usuarios conectados. |
| `mensaje-privado` | Enviar un mensaje únicamente a un usuario específico. |
| `mensaje-sistema` | Mostrar notificaciones del sistema, como conexiones o desconexiones. |

--------
## Instalación y configuración

### Requisitos Previos

| Software | Versión Recomendada |
|-----------|-------------------|
| Node.js | 18 o superior |
| npm | 9 o superior |
| Navegador Web | Google Chrome, Microsoft Edge o Mozilla Firefox |

### Paso 1: Clonar el repositorio

Clonar el repositorio desde GitHub e ingresar al directorio del proyecto.


git clone https://github.com/USUARIO/proyecto-mensajeria.git
cd proyecto-mensajeria 

#### Paso 2: Instalar las dependencias

Instalar todas las dependencias definidas en el archivo package.json.
npm install express socket.io

-------

## Ejecución del proyecto

Iniciar el servidor:

node server.js

Acceder desde el navegador:

http://localhost:3000

Para realizar pruebas con múltiples usuarios se pueden abrir varias pestañas o utilizar diferentes navegadores.


## Funcionalidades implementadas
- Registro de usuarios.
- Comunicación en tiempo real.
- Mensajes globales.
- Mensajes privados.
- Gestión de conexiones y desconexiones.
- Actualización automática de mensajes sin recargar la página.

### Interfaz principal

## Pruebas realizadas 

### Prueba 1: Registro 

### Prueba 2: Mensaje Global  

### Prueba 3: Mensaje Privado

## Discusión

### ¿Es mejor enviar privado por IP o Socket ID?
