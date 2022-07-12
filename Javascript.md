# 1. Introducción

* Configuración del entorno de desarrollo
    - [ ]  Descargar [nodejs](https://nodejs.org/es/)
    - [ ]  Descargar [vscode](https://code.visualstudio.com/)
    - [ ]  Descarga nvm [Windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip)
    - [ ]  Descarga nvm [Linux](https://github.com/nvm-sh/nvm)
* Extensiones útiles para vscode
    - [Auto Add Brackets in String Interpolation](https://marketplace.visualstudio.com/items?itemName=aliariff.auto-add-brackets)
    - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
    - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
    - [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
    - [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)
    - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
    - [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
    - [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
    - [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)
 * Extenciones que uso
    - [Code Time](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode) 
    - [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)
    - [Document This](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis)
    - [Theme Invictus](https://marketplace.visualstudio.com/items?itemName=Larxx.invictus)
    - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
    - [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
    - [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
 * Utilidades Frontend
    - [tailwindcss](https://tailwindcss.com)
    - [Frontend Mentor](https://www.frontendmentor.io)
    - [Semantic UI](https://semantic-ui.com)
 * Roadmap Frontend
    - [Ruta de aprendizaje para ser un ninja en Frontend](https://roadmap.sh/frontend)

# JavaScript
* [TC39](https://github.com/tc39/proposals)

# Instalación de `Vite`
* [Link Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```bash
# Verificar si se tiene instalado npm para ello ejecutamos
$ npm -v

# Instalación de vite vanilla js
$ npm init vite@latest mi-primera-app -- --template vanilla

# Nos dirigimos al directorio
$ cd mi-primera-app

# Instalamos las dependencias necesarias una vez nos encontramos en el directorio
$ npm install o npm i

# Inicializamos vite con el siguiente comando
$ npm run dev
```

# Comandos NVM
```bash
# instalar alguna version de node
$ nvm install 16.x.x
$ nvm install 17.4.0

# listar las versiones de node instaladas
$ nvm ls

# Cambiar entre las versiones de node instaladas
$ nvm use 17.4.0
```
# Git
* [Descargar git](https://git-scm.com)

```shell
# Configurar un usuario de git
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

# Iniciamos Git en la carpeta donde esta el proyecto
$ git init

# Clonar el repositorio
$ git clone <link_repositorio>

# Añadimos todos los archivos para el commit
$ git add .

# Commit para guardar nuestro estado con un mensaje
$ git commit -m "mensaje"

# Subimos al repositorio remoto previamente creado
$ git push origin <nombre_rama>

# Muestra los logs de los commits
$ git log

# Muestra lista repositorios
$ git remote -v

# Remover un repositorio remoto
$ git remote rm <name/origin>

# Cambia entre ramas o crea una rama
$ git switch <nombre_rama>
$ git switch -c <nombre_rama>

# Para ramas tambien podemos usar
$ git branch <nomnbre_rama>   # crear
$ git branch                  # listar
$ git branch -d <nombre_rama> # elimina rama

# Busca los cambios nuevos y actualiza el repositorio
$ git pull origin <nombre_rama>

# Cambia a una rama o un commit en especifico
$ git checkout <nombre_rama/hash_commit>

# Fusiona el branch actual uno en especifico
$ git merge <nombre_rama>

# Borrar un archivo del repositorio
$ git rm <archivo>
```

# Debug vscode
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Debug Vite",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

# tailwindcss and vite
* [tailwindcss](https://tailwindcss.com)
* [tailwindcss vite](https://tailwindcss.com/docs/guides/vite)
* [Plugin vscode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 

## Fix error in vscode
```json
{
  "css.validate": false,
  "scss.validate": false,
}
```

## Instalación
```shell
# Instalando dependencias
> npm install -D tailwindcss postcss autoprefixer

# Archivo de configuracion tailwindcss
> npx tailwindcss init -p

# Para el purgado automatico tailwind.config.js
content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
],

# Crear un archivo css con el siguiente contenido una vez echo esto importar a main.js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## vscode config tailwind javascript
```json
{
  "tailwindCSS.includeLanguages": {
    "html": "html",
    "javascript": "javascript",
    "css": "css"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.experimental.classRegex": ["\"([^]*)\"", ",\"([^]*)\""],
  "tailwindCSS.lint.cssConflict": "ignore"
}
```  