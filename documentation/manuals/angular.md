# Teoría completa de Angular

## ¿Qué es Angular?
	•	Un framework y plataforma de Google para construir SPAs (Single-Page Applications).
	•	Basado en TypeScript, con componentes, servicios, módulos y rutas predefinidos.

## Historia y versiones
	•	AngularJS (v1.x): JavaScript puro, MVC.
	•	Angular (v2+): reescrito en TypeScript desde 2016. Versiones semestrales hasta la actual v19+.

## Arquitectura básica

1. NgModule
    - Define declarations, imports, providers, bootstrap.
2.	Componentes (@Component)
    - Selector, plantilla (HTML) y estilos (CSS).
3.	Data Binding
    - Interpolación: {{ valor }}
    - Property binding: [src]="urlImagen"
    - Event binding: (click)="hacerAlgo()" 
    - Two-way binding: [(ngModel)]="campo"
4.	Directivas
    - Estructurales: *ngIf, *ngFor
    - Atributo: [ngClass], [ngStyle]
5. Pipes
    - Transforman datos: {{ fecha | date:'shortDate' }}, {{ precio | currency }}
6. Servicios (@Injectable) e Inyección de Dependencias
    - Lógica reusable, testable.

## Routing
	•   Configuras rutas con RouterModule.forRoot(routes)
	•	Soporta lazy loading de módulos para optimizar la carga inicial.

## Herramientas y flujo de trabajo
1. CLI (ng)
    - Crear proyecto: ng new mi-app
    - Generar componentes/servicios: ng g component nombre
    - Servir: ng serve
    - Build producción: ng build --configuration production
    - Tests: ng test / ng e2e
2. Estructura típica

```sh
src/
  app/
    components/
    services/
    app-routing.module.ts
    app.module.ts
    app.component.ts/.html/.css
  assets/
  environments/
  main.ts
  index.html
```


⸻

## ¿Para qué sirven los NgModules?
1. Modularizar tu app
    - Divides tu aplicación en piezas lógicas: módulo de usuarios, módulo de productos, módulo compartido, etc.
	- Facilita que cada equipo trabaje en su propio módulo sin pisarse mutuamente.
2. Controlar la visibilidad
	- Con la propiedad exports decides qué componentes/directivas/pipes de un módulo pueden usarse desde otros módulos.
3. Lazy loading
	- Cargas módulos bajo demanda (cuando el usuario navega a cierta ruta), lo que reduce el tamaño del bundle inicial.
4. Configurar providers
	- Defines servicios (providers) que son “singleton” dentro de ese módulo (o de toda la app si es el módulo raíz).

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule }   from './shared/shared.module';
import { AuthService }    from './services/auth.service';

## Estructura básica de un NgModule

```sh
@NgModule({
  declarations: [
    AppComponent,        // componentes/directivas/pipes que pertenecen a este módulo
    LoginComponent
  ],
  imports: [
    BrowserModule,       // módulos cuyos exports necesitas aquí
    SharedModule
  ],
  providers: [
    AuthService          // servicios disponibles en este módulo
  ],
  bootstrap: [AppComponent]  // componente raíz que Angular “inserta” primero en index.html
})
export class AppModule { }
```

## Módulos Comunes en Angular
1. BrowserModule
    - Necesario en el módulo raíz para aplicaciones en navegador.
2. CommonModule
    - Incluye directivas básicas (ngIf, ngFor); se importa en módulos secundarios, no en el raíz.
3. FormsModule / ReactiveFormsModule
    - Para formularios template-driven o reactivos.
4. HttpClientModule
    - Para hacer peticiones HTTP con HttpClient.

## Bootstrap en un NgModule 

“bootstrap” no tiene nada que ver con la librería Bootstrap de estilos CSS. Son dos cosas distintas:

Dentro de tu @NgModule({ … }), la propiedad

```sh
bootstrap: [AppComponent]
```

Le dice a Angular qué componente arrancar primero cuando carga la aplicación. Es decir:
- declarations declara qué componentes/directivas/pipes hay en ese módulo. (Estos ya existen en las librerías de angular)
- imports trae otros módulos cuyos exports necesites. (Estos los creamos con ng generate module mi-modulo)
- bootstrap indica el componente raíz que Angular inserta en el index.html para iniciar el renderizado.

```sh
@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports:      [BrowserModule],
  providers:    [AuthService],
  bootstrap:    [AppComponent]   // <-- aquí
})
export class AppModule { }
```