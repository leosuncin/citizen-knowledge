# Citizen Knowledge
Plataforma para dar a conocer el proceso de formación de ley en El Salvador, estadisticas de votaciónes
por parte de los diputados de la Asamblea Legislativa, explicación de los proyectos de ley y un espacio
para la discusion de las mismas.

## Instalación de dependencias
Para poder ejecutar este proyecto debes instalar [node.js](https://nodejs.org/en/download/) luego ejecutar los siguientes pasos en tu terminal/consola:
```
git clone https://github.com/leosuncin/citizen-knowledge.git
cd citizen-knowledge
npm install -g gulp-cli bower # La primera vez
npm install
bower install
```

## Ejecutar el proyecto
En la terminal navegar hasta el directorio local del proyecto y ejecutar ``gulp serve`` luego abrir el navegador en [localhost:9000](http://localhost:9000)

## Publicar cambios
```
git add <archivos modificados>
git commit -m '<mensaje descriptivo>'
git push origin master
```

### Configurar git
La primera vez que usen git antes de hacer un *commit* deben configurar su nombre y correo para identificar la autoria de los commit
```
git config --global user.name '<Nombre de usuario>'
git config --global user.email <Correo>
```
