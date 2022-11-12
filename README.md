# TodoListAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Installation steps

- `npm i bootstrap`
- `npm i jquery`

STEP 1.

- Go inside angular.json file and inside "architect" inside build add bootstrap css in styles
- `"./node_modules/bootstrap/dist/css/bootstrap.min.css"` includes this styles array
- `"./node_modules/bootstrap/dist/js/bootstrap.min.js"` includes in the scripts
- ` "styles": [ "src/styles.scss", "./node_modules/bootstrap/dist/css/bootstrap.min.css" ], "scripts": [ "./node_modules/bootstrap/dist/js/bootstrap.js", "./node_modules/jquery/dist/jquery.js" ]`

  STEP 2:
- `ng generate component components/Todos` for create component folder

