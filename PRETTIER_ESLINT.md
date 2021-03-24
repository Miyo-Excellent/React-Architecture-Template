![Michell Excellent Foto](https://res.cloudinary.com/miyoexcellent/image/upload/w_200,h_200,c_thumb,r_max,c_fill,e_trim/v1616250723/yo_dwullr.jpg)
##### Michell Excellent Mairn
_20 de marzo de 2021_

 _[Facebook](https://www.facebook.com/MiyoExcellent), [Linkedin](https://www.linkedin.com/in/michellexcellent/)_
 
---
# Configurar Eslint y Prettier para el desarrollo de React js
![Hero Image](https://res.cloudinary.com/miyoexcellent/image/upload/v1616332891/React%20Architecture%20Template/1_N9n5F63ne3HimpJ10d1HEw_x5mbe3.jpg)

He venido con un tutorial que cubre la configuración de Eslint y Prettier para el desarrollo de React js.
Los errores son un problema importante en nuestro desarrollo habitual de React js.
Esto frustra a los usuarios al escribir código.

Cuando comencé a usar React para mis proyectos, nunca usé Eslint o Prettier para el desarrollo.
Todavía lamento eso, porque el Eslint es importante para el desarrollo,
ya que reduce los errores y mejora la calidad general del código y nos ayuda a formatear nuestro código.
Así que veamos cómo configurar eso para su próximo proyecto de React js.

 1. Abra la terminal en la carpeta raíz de su proyecto e instale Eslint como una dependencia de desarrollo.
    También necesitamos habilitar la extensión Eslint y Prettier.

    >```npm install eslint prettier -D``` 
    > 
    > ```yarn add eslint prettier -D```

 2. Después de eso, generaremos nuestro archivo ```.eslintrc.json```  a través de la terminal,
    así que ejecute este comando para generar su archivo de configuración eslint.
 
    >```npx eslint --init```
    >
    >```yarn run eslint --init```

    Esto generará múltiples opciones, por lo que primero seleccione ```To check syntax and find problems```,
    luego seleccione ```JavaScript modules (import/export)```,
    luego seleccione ```React```,
    Ahora se preguntará ```Does your project use TypeScript No/Yes```.
    
    En mi caso, no estoy usando **TypeScript**, así que seleccionaré la ```No``` opción.
    Ahora seleccione ```Browser``` y luego la opción ```JSON```. Luego le pedirá que instale ```eslint-plugin-react```,
    así que haga clic en ```yes```.
    
    ![primeros pasos](https://res.cloudinary.com/miyoexcellent/image/upload/v1616333671/React%20Architecture%20Template/1_x_fR_u6MFRiR33OEjr2xng_jurvry.gif)
    
    Así es como se verá su archivo ```.eslintrc.json```.
    ```json
    {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
        ],
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true
            },
            "ecmaVersion": 12,
            "sourceType": 12
        },
        "plugins": [
            "react"
        ],
        "rules": {}        
    }
    ```
    Actualmente estoy usando React 17.0.1 y actualmente es la última versión de React.
    En esta actualización, el equipo de React ha hecho que la importación de React al archivo sea opcional.
    Entonces, nuestro Eslint está dando un error ```"React" must be in scope when using JSX```.
    Para solucionar esto, agregaremos una regla a nuestro archivo eslint.
    Así que abre tu archivo .eslint y agrega esta línea ```"react/react-in-jsx-scope": "off"``` dentro de las reglas.
    
    ```json
    {
        "rules": {
            "react/react-in-jsx-scope": "off"
        }
    }
    ```
    Ahora, si abre su archivo ```App.test.js```, encontrará que Eslint nos está dando un error ```test or expect is not defined```.
    Para solucionar este problema, debemos agregar ```"jest": true``` en la sección ```env```.
    
    ```json
    {
        "env": {
            "browser": true,
            "node": true,
            "es6": true
        }
    }
    ```
    
    Es hora de agregar Prettier y debemos configurarlo para que cada vez que guardemos nuestro código lo formatee automáticamente.

 3. Ejecute el siguiente comando para instalar los complementos necesarios para crear una configuración de Prettier.
    > ```npm i -D eslint-plugin-prettier eslint-plugin-react eslint-config-airbnb eslint-config-prettier```
    >
    > ```yarn add eslint-plugin-prettier eslint-plugin-react eslint-config-airbnb eslint-config-prettier -D```

 4. Después de instalar todos los módulos anteriores,
    es hora de agregar la configuración Prettier a nuestro archivo ```.eslintrc.json```.
    
    ```json
    {
        "extends": [
            "plugin:react/recommended",
            "airbnb",
            "prettier",
            "prettier/react"
        ]
    }
    ```
 
 5. Modificar el archivo ```.eslintrc```
    ```json
    {
        "parserOptions": {
            "ecmaVersion": 2021,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },
        "env": {
            "browser": true,
            "node": true,
            "es6": true
        },
        "settings": {
            "react": {
                "version": "detect"
            }
        },
        "extends": [
            "plugin:react/recommended",
            "airbnb",
            "prettier",
            "prettier/react"
        ],
        "plugins": ["react", "prettier"]
    }
    ```
 
 6. Ahora, si abre su archivo ```App.js``` y agrega algunos espacios adicionales, el eslint le mostrará algunos errores.
     Para solucionar esto, debemos hacer clic sobre esos errores y presionar ```ctrl+``` (en VS-Code).y seleccionar ```fix all auto-fixable problems```.
     Esto solucionará todos los problemas de sintaxis automáticamente.

    ![solucionará todos los problemas de sintaxis automáticamente](https://res.cloudinary.com/miyoexcellent/image/upload/v1616334740/React%20Architecture%20Template/1_lj45Hq_gF7OBDe07oUkkkg_fwbpx9.gif)

 7. Ahora tenemos que configurar nuestra configuración de VS-Code para Prettier se ejecute cuando guardamos los cambios.
    Siga los pasos que se mencionan a continuación para configurar su configuración de VS-Code
     - Vaya a ```Archivo > Preferencias > Configuración```
     - A su derecha, hay un icono para formatear ```Open Settings in JSON```. Haga clic en ese icono.
     - Agregue debajo del código JSON allí
     
        ```json
        {
           "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, 
           "editor.formatOnSave": true, 
           "eslint.alwaysShowStatus": true, 
           "files.autoSave": "onFocusChange"
        }
        ```
       
       ![Código JSON](https://res.cloudinary.com/miyoexcellent/image/upload/v1616335102/React%20Architecture%20Template/1_ySy_YZad3UUWVfv1Lupffg_arsxcx.gif)
    
    Entonces, cada vez que guarde su código o cambie el enfoque del código, VS-Code arreglará automáticamente el formato de su código.
    > Nota: también puede crear configuraciones locales para VS-Code.
    Todo lo que necesitas es crear un directorio ```.vscode```
    dentro de tu proyecto raíz y crear un archivo con el nombre ```settings.json```
    y dentro de ese directorio y poner el código JSON anterior dentro de ese archivo como un objeto ```{}```.

##### Aquí está el código completo para el archivo ```.eslintrc.json```.
```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off"
    }
}
```

---
## La configuración profesional

#### 📍 Agregar más complementos

La principal diferencia que distingue a Pro de la configuración básica es que Pro hace alarde de algunos complementos más, más impresionantes y personalizables 👩 🎨.  

Esta es la configuración que uso personalmente en todos mis proyectos.

> ```npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security eslint-plugin-simple-import-sort eslint-plugin-sonarjs eslint-plugin-unicorn```
>
> ```yarn add eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security eslint-plugin-simple-import-sort eslint-plugin-sonarjs eslint-plugin-unicorn -D```

Ahora, agregue lo siguiente a su archivo ```.eslintrc.js``` y estará listo.
He explicado la mayoría de los casos de uso del siguiente complemento en [esta publicación](https://authors.xenox.dev/eslint-the-easy-but-complete-guide/).

1. Modificar el archivo ```.eslintrc```
```json
{
    "parserOptions": {
        "ecmaVersion": 2021, 
        "sourceType": "module", 
        "ecmaFeatures": {
            "jsx": true 
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "plugins": ["simple-import-sort"],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended", 
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended",
        "plugin:security/recommended",
        "plugin:react-hooks/recommended"
    ],
    "rules": {
        "no-console": "error",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "simple-import-sort/imports": "error",
        "unicorn/filename-case": "off"
    }
}
```
### 📍 Configuración de Husky

![Husky Running](https://res.cloudinary.com/miyoexcellent/image/upload/v1616338883/React%20Architecture%20Template/iu_ortgvc.png)

Husky le brinda la posibilidad de agregar acciones previas antes o después de hacer una acción de Git.
Funciona como su tercer ojo, protegiendo su proyecto de ese código astuto y maloliente,
de ser empujado o comprometerse a obligar a las personas a seguir las pautas agregadas por usted.

> ```npm i -D husky lint-staged```
> 
> ```yarn add husky lint-staged -D```

después de eso, agregue esto a su archivo ```package.json```:

```json
{
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{js,jsx}": [
            "eslint '*/**/*.{js,jsx}' --fix"
        ]
    }
}
```















