![Michell Excellent Foto](https://res.cloudinary.com/miyoexcellent/image/upload/w_200,h_200,c_thumb,r_max,c_fill,e_trim/v1616250723/yo_dwullr.jpg)
##### Michell Excellent Mairn
_20 de marzo de 2021_

 _[Facebook](https://www.facebook.com/MiyoExcellent), [Linkedin](https://www.linkedin.com/in/michellexcellent/)_
 
---
# Estructura escalable de carpetas y archivos de React

En este artículo, cubriremos cómo estructurar nuestra aplicación a gran escala que hemos decidido construir con **React**.

Cuando creamos el proyecto **React**, de forma predeterminada, solo esta carpeta y los archivos están presentes (ver más abajo).

![Carpeta predeterminada de la aplicación React y estructura de archivos](https://res.cloudinary.com/miyoexcellent/image/upload/v1616257109/React%20Architecture%20Template/defaultReactAppFolderAndFilesStructure_ew8xf3.jpg)

Casi todo el código que necesitamos escribir dentro de la carpeta **src** y podemos ver que, de forma predeterminada, **React** no proporciona ninguna estructura de archivo, solo el archivo **index.jsx** con un componente con estado está presente para ejecutar el contador de muestra.

Ahora veremos qué carpetas y archivos necesitamos crear para que la aplicación sea escalable.
 
---
### Carpeta Assets
Primero, crearemos una carpeta de **Assets** en la raíz del proyecto que usaremos para almacenar imágenes, archivos de traducción, archivos de fuentes personalizadas, archivos HTML.

La carpeta **Assets** contiene las siguientes carpetas:
 1. **fonts:** Esta carpeta debe tener todos los archivos de fuentes, es decir, fuentes personalizadas que se utilizan en la aplicación (archivos .ttf)
 
 2. **html:** Si nuestra aplicación necesita abrir algún contenido HTML que necesitamos agregar en nuestra aplicación web (generalmente el contenido con licencia de la aplicación o cualquier archivo .html que necesitemos cargar en la aplicación usando un **iframe** on algún paquete como: [react-frame-component](https://www.npmjs.com/package/react-frame-component) o [react-iframe](https://www.npmjs.com/package/react-iframe) )
    > Nota : Generalmente los paquetes [react-frame-component](https://www.npmjs.com/package/react-frame-component) y [react-iframe](https://www.npmjs.com/package/react-iframe) se usan para cargar la URL de cualquier contenido web, pero podemos usar este complemento para mostrar el contenido HTML externo que se almacena localmente en la aplicación web.
 
 3. **i18n:** Si nuestra aplicación es compatible con la internacionalización, entonces necesitamos agregar archivos **.json** para todos los diferentes idiomas compatibles, es decir, si necesitamos admitir _inglés y francés_, entonces debemos agregar **en.json y fr.json** en esta carpeta. Podemos encontrar más información en el archivo **I18N_DOC.md**
 
 4. **images:** Esta es la carpeta más importante donde almacenamos todas nuestras imágenes.
 
##### Así es como se ve realmente la carpeta assets:
![Así es como se ve la carpeta assets](https://res.cloudinary.com/miyoexcellent/image/upload/v1616257109/React%20Architecture%20Template/assetsFolder_tftiiv.jpg)
 
---
### Agregar la carpeta Config:
Ahora, agregaremos la carpeta de configuración dentro de la carpeta lib

##### La carpeta config contiene las siguientes carpetas:
 1. **routes:** La carpeta de ruta contiene todos los archivos que se basan en el código de navegación de las pantallas de la aplicación. Usaremos el paquete **[react-router](https://reactrouter.com/)** para separar nuestra ruta de navegación. Esta carpeta contiene dos archivos **_index.jsx, Config.jsx_** y una carpeta handlers, esta carpeta se encarga de almacenar todas las rutas anidadas, sus archivos internos deben llamarse por ejemplo **_DashboardHandlers.jsx_**.
 
    Podemos ver el un tutorial completo del paquete haciendo Click en la _imagen/Video_ **[react-router](https://reactrouter.com/)**
    [![React Router Tutorial](https://res.cloudinary.com/miyoexcellent/image/upload/v1616259645/React%20Architecture%20Template/reactRouterVideo_wnh4qx.jpg)](https://youtu.be/oDQAzTJrbSI "React Router Dom Explicado al detalle - Autenticación, Parámetros, Query's, Routers anidados y más")
 
 2. **themes:** Si nuestra aplicación admite temas claros y oscuros y estos temas son temas personalizados, entonces necesita crear dos archivos lightTheme.jsx , darkTheme.jsx donde agregaremos todos los colores necesarios para cada tipo de componente. Un archivo más crearemos themeConfig.jsx que describe todas las constantes relacionadas con el tema.
    > Nota: Como este artículo se basa en la estructura de carpetas y archivos, describiremos qué contienen realmente todos los archivos de temas y cómo funcionan en un documento separado que prepararé pronto. Por ahora, puede consultar este enlace para [crear un soporte para múltiples.](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)

##### Así es como se ve la carpeta de configuración:
![Así es como se ve la carpeta de configuración](https://res.cloudinary.com/miyoexcellent/image/upload/v1616261207/React%20Architecture%20Template/configFolder_eltzhm.jpg)
 
---
### Agregar la carpeta Constants:
Aquí están las siguientes constantes que son estáticas en todas las aplicaciones

 1. **ApiPaths.jsx:** Cuando utilizamos el servicio REST API en Javascript, podemos almacenar todos los _End Points_ de la API en un archivo separado **apiPath.jsx**
 
 2. **AssetsPaths.jsx:** Para usar un **asset** en una aplicación, debemos proporcionar una ruta relativa en cualquier componente.
    > Si agregamos todas las rutas relativas de los **assets** en un archivo, será fácil para nosotros obtener todas las rutas y actualizar la ruta si es necesario en el futuro.

 3. **AppConstants.jsx:** Aquí es donde estarán presentes todas las constantes de nuestra aplicación y esto es diferente para cada aplicación.
 
##### Así es como se ve la carpeta de constantes :
![Carpeta constante de la aplicación y estructura de archivos](https://res.cloudinary.com/miyoexcellent/image/upload/v1616265967/React%20Architecture%20Template/constantsFolder_uniwwu.jpg)
 
---
### Agregar la carpeta Components:
En una aplicación a gran escala, necesitamos crear componentes más personalizados en lugar de componentes predeterminados. Supongamos que necesitamos hacer uso de nuestro propio **_RaisedButton, FlatButton, OutlineButton, Divider, CircularLoader, etc._** Que podemos usar en toda nuestra aplicación, luego de ese agregar tipo de componentes de personalización, podemos agregar dentro del archivo **_index.jsx_** que estará presente dentro de la carpeta componentes

##### Así es como se ve la carpeta de componentes:
![carpeta de **components** para agregar componentes personalizados](https://res.cloudinary.com/miyoexcellent/image/upload/v1616266332/React%20Architecture%20Template/componentsFolder_fliojj.jpg)
 
---
### Agregar la carpeta Utils:
La carpeta **Utils** contiene los helpers, services, UI utils, mixins que se utilizan en toda la aplicación.

###### Exploración de Helpers
En muchos escenarios, necesitamos escribir código varias veces para lo mismo, como convertir los primeros caracteres de cada palabra en mayúsculas, que se usan normalmente para mostrar títulos para otros componentes, etc. Este tipo de código se puede hacer común para reducir la redundancia y agregue ese código en los archivos de tipo **_Helpers_** que están presentes en ```src/utils/helpers/TextHelper.jsx```.
> **TextHelper.jsx :** Contendrá todo el código necesario para convertir la cadena para que se muestre en un componente de texto.

##### Explorando servicios
Crearemos un tipo diferente de archivos de servicio en la carpeta ```src/utils/services```
> **Nota:** Todos los servicios deben ser clases.
 1. **LocalStorageService.jsx :** En este archivo, escribimos todo el código necesario para almacenar y obtener datos del almacenamiento local usando el complemento [Window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).
    
    En este archivo, habrán **_getters_** y **_setters_** para todos y cada uno de los datos que se almacenarán en el almacenamiento local.
    
 2. **SecureStorageService.jsx :** No almacenamos credenciales de usuario, tokens API, claves API secretas en el almacenamiento local, para eso hacemos uso de [secure-ls](https://www.npmjs.com/package/secure-ls) que protege los datos de almacenamiento local con un alto nivel de cifrado y compresión de datos.
    
    En este archivo, habrán **_getters_** y **_setters_** para todos y cada uno de los datos que se almacenarán en el almacenamiento seguro de la plataforma.
 
 3. **RestApiService.jsx :** Llamamos a la API REST para obtener información, almacenar datos en una base de datos de forma remota, para eso, necesitamos escribir la llamada de API REST en un solo lugar y debemos devolver los datos si la llamada del API REST es un éxito o debe regresar excepción de error personalizada basada en el código de estado 4xx, 5xx. Podemos hacer uso del paquete [axios](https://www.npmjs.com/package/axios) para hacer el resto de llamadas a la API en React.js
 
 4. **NativeApiService.jsx :** En una SPA ó Aplicación móvil usamos múltiples paquetes para acceder a los servicios nativos como Cámara, Galería de fotos, Ubicación, etc. Para eso necesitamos escribir código en un archivo separado que podemos usar desde múltiples lugares a lo largo de la aplicación.

##### Exploración de las utilidades de la interfaz de usuario
Todas las cosas comunes relacionadas con la interfaz de usuario deben estar presentes dentro de la carpeta ```src/utils/ui```
Aquí está la lista de carpetas y archivos que estarán presentes en el directorio ```src/utils/ui``` **:**

 1. **animations:** Todas las animaciones personalizadas estarán presentes en este archivo con archivos separados como **SlideFadeTransition.jsx, ImpulseAnimation.jsx, etc.** Todas las animaciones personalizadas se utilizarán a través de la aplicación.
 
 2. **appDialogs.jsx :** Todos los diálogos de aplicaciones personalizados UI estarán presentes en este archivo.
 
 3. **uiUtils.jsx :** Todos los componentes de IU personalizados, como un cuadro de texto de entrada con icono de búsqueda, componentes de auto completar, pancartas de mensajes de error, herramientas relacionadas con chips de casillas de verificación personalizadas, pueden estar presentes en este archivo y se utilizarán en toda la aplicación.

##### Explorando Mixins
Mixin es una clase que contiene métodos para ser usados por otras clases sin tener que ser la clase padre de esas otras clases. En otras palabras, los mixins son clases normales de las que podemos tomar prestados métodos (o variables) sin extender la clase.
En la aplicación podemos realizar diferentes mixins como **_ValidationMixins.jsx, OrientationMixins.jsx_**

##### Así es como se ve la carpeta de utils:
![Carpeta de utilidades de la aplicación y estructura de archivos](https://res.cloudinary.com/miyoexcellent/image/upload/v1616269098/React%20Architecture%20Template/utilsFolder_wpcbne.jpg)
 
---
### Agregando funciones principales en la carpeta Core
Las características principales como Inicio de _sesión/autenticación_, pantallas de recorrido (pantallas que solo son visibles después de la instalación/primer inicio), las características de configuración de la aplicación son las características principales que deben agregarse en una carpeta **Core**.
 
 1. **auth:** La carpeta de autenticación debe contener las funcionalidades de registro, inicio de sesión, contraseña olvidada.
 
 2. **models:** Esta carpeta contiene los modelos principales de datos que deben mostrarse en la aplicación, por _Ejemplo: **UserModel.jsx**_.
 
 3. **walkThrough:** Pantallas de tutoriales, deben contener todas las pantallas que serán visibles solo cuando la aplicación se inicia por primera vez después de la nueva instalación/primer inicio.
 
 4. **settings:** Aquí ira será la funcionalidad de configuración de la aplicación.
 
##### Así es como van las carpetas y archivos de núcleo/Core:
![Carpeta de características principales y estructura de archivos](https://res.cloudinary.com/miyoexcellent/image/upload/v1616272371/React%20Architecture%20Template/coreFolder_y5xr8o.jpg)
 
---
### Agregando módulos principales en la carpeta Modules
Antes de continuar con los módulos, me gustaría mostrar cómo se implementan todos y cada uno de los módulos. Es decir, todos y cada uno de los módulos y características centrales que discutimos anteriormente se basan en el patrón [Redux](https://es.redux.js.org/) que podemos encontrar más en este paquete [react-redux](https://react-redux.js.org/).

El patrón de diseño en [Redux](https://es.redux.js.org/) ayuda a separar la presentación de la lógica empresarial. Seguir el patrón [Redux](https://es.redux.js.org/) facilita la capacidad de prueba y la reutilización. Este paquete abstrae los aspectos reactivos del patrón, lo que permite a los desarrolladores centrarse en escribir la lógica empresarial.

Tomemos el ejemplo con el panel de control del módulo en la aplicación que contiene las siguientes carpetas:

 1. **redux:** Esta carpeta contiene los cuatro archivos reducer.jsx, actions.jsx, state.jsx, types.jsx. Crearé un documento separado que describa el patrón de [Redux](https://es.redux.js.org/) y cómo incorporarlo a la aplicación de **React**. Por ahora, puede comprender el [Redux](https://es.redux.js.org/) en [react-redux](https://react-redux.js.org/) .

 2. **models:** Esta carpeta contiene los modelos de datos que deben mostrarse en la aplicación.

 3. **repositories:** Esta carpeta contiene los archivos del repositorio que se utilizan para escribir código para llamadas de servicios y para trabajos de computación.
 
 4. **screens:** Esta carpeta contiene de todos los componentes principales llamados **_Screens_** y corresponden a las pantallas que serán visibles para el usuario.
 
> **Nota:** Todos los módulos y las funciones principales deben contener estas cuatro carpetas para separar la lógica empresarial de la interfaz de usuario.

##### Así es como se ve el panel de módulos:
![Estructura de carpetas y archivos en el directorio de módulos](https://res.cloudinary.com/miyoexcellent/image/upload/v1616272609/React%20Architecture%20Template/modulesFolder_wquwzr.jpg)



