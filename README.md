# StayWander

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


color plates
$red-palette, $pink-palette, $indigo-palette,
  $purple-palette, $deep-purple-palette, $blue-palette, $light-blue-palette, $cyan-palette,
  $teal-palette, $green-palette, $light-green-palette, $lime-palette, $yellow-palette,
  $amber-palette, $orange-palette, $deep-orange-palette, $brown-palette, $grey-palette,
  $gray-palette, $blue-grey-palette, $blue-gray-palette, $light-theme-background-palette,
  $dark-theme-background-palette, $light-theme-foreground-palette, $dark-theme-foreground-palette;

  theming
  @include mat.core();

$primary :mat.define-platte(mat.$yellow-palette);
$accent :mat.define-platte(mat.$blue-palette);
$warn :mat.define-platte(mat.$red-palette);
$theme : mat.define-light-theme((
        color: (  primary: $primary,
            accent: $accent,
               warn: $warn,
             )
));
@include mat.all-component-themes($theme)
## template referecne variable 
it provide the DOM element  reference
through which we can get access of all its attributes and properties 
