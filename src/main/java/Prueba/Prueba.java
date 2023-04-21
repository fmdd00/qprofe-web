/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Prueba;

import Clase.Calificacion;
import Clase.Estudiante;
import Clase.Material;
import Clase.Profesor;

/**
 *
 * @author romin
 */
public class Prueba {
    public static void main(String[] args) {
        // Estudiantes
        Estudiante est1 = new Estudiante("Katyuska", "Ingeniería");
        Estudiante est2 = new Estudiante("Rodrigo", "Astronauta");
        Estudiante est3 = new Estudiante("Luis", "Quimico");
        Estudiante est4 = new Estudiante("Francisco", "Mecatronica");
        Estudiante est5 = new Estudiante("Felipe", "Musico");
        
        // Profesores
        Profesor prof1 = new Profesor("Rafael", "Ingeniería");
        Profesor prof2 = new Profesor("Fernando", "Astronauta");
        Profesor prof3 = new Profesor("Romina", "Mecatronica");
        Profesor prof4 = new Profesor("Manuel", "Musico");
        Profesor prof5 = new Profesor("Pedro", "Quimico");
        
        // Profesores a la lista de cada estudiante
        est1.agregarProfesor(prof1);
        est2.agregarProfesor(prof2);
        est3.agregarProfesor(prof3);
        est4.agregarProfesor(prof4);
        est5.agregarProfesor(prof5);
        
        // Materiales compartidos por los estudiantes
        Material mat1 = new Material("Apuntes de cálculo", "PDF", est1);
        Material mat2 = new Material("Guia de como volar una nave", "DOC", est2);
        Material mat3 = new Material("Resumen de formulas", "PDF", est3);
        Material mat4 = new Material("Apuntes de piezas para comprar en Azangaro", "DOC", est4);
        Material mat5 = new Material("Apuntes de composición de música", "PDF", est5);
        
        // Compartir los material
        est1.compartirMaterial(mat1);
        est2.compartirMaterial(mat4);
        est3.compartirMaterial(mat5);
        est4.compartirMaterial(mat3);
        est5.compartirMaterial(mat2);
        
        // Calificaciones
        Calificacion calif1 = new Calificacion(4, "Buen profesor", est1, prof1);
        Calificacion calif2 = new Calificacion(5, "El mejor profesor", est2, prof2);
        Calificacion calif3 = new Calificacion(3, "Puede mejorar el profesor", est3, prof3);
        Calificacion calif4 = new Calificacion(4, "Buen profesor", est4, prof4);
        Calificacion calif5 = new Calificacion(4, "Buen profesor", est5, prof5);

        // Calificaciones a los profesores 
        prof1.agregarCalificacion(calif1);
        prof2.agregarCalificacion(calif2);
        prof3.agregarCalificacion(calif3);
        prof4.agregarCalificacion(calif4);
        prof5.agregarCalificacion(calif5);
        
        // Información de los estudiantes
        System.out.println("Estudiante 1:");
        System.out.println("Nombre: " + est1.getNombre());
        System.out.println("Carrera: " + est1.getCarrera());
        System.out.println("Profesores: " + est1.getProfesores());
        System.out.println("Materiales compartidos: " + est1.getMaterialesCompartidos());
        System.out.println();
        
        System.out.println("Estudiante 2:");
        System.out.println("Nombre: " + est2.getNombre());
        System.out.println("Carrera: " + est2.getCarrera());
        System.out.println("Profesores: " + est2.getProfesores());
        System.out.println("Materiales compartidos: " + est2.getMaterialesCompartidos());
        System.out.println();
        
        System.out.println("Estudiante 3:");
        System.out.println("Nombre: " + est3.getNombre());
        System.out.println("Carrera: " + est3.getCarrera());
        System.out.println("Profesores: " + est3.getProfesores());
        System.out.println("Materiales compartidos: " + est3.getMaterialesCompartidos());
        System.out.println();
        
        System.out.println("Estudiante 4:");
        System.out.println("Nombre: " + est4.getNombre());
        System.out.println("Carrera: " + est4.getCarrera());
        System.out.println("Profesores: " + est4.getProfesores());
        System.out.println("Materiales compartidos: " + est4.getMaterialesCompartidos());
        System.out.println();
        
        System.out.println("Estudiante 5:");
        System.out.println("Nombre: " + est5.getNombre());
        System.out.println("Carrera: " + est5.getCarrera());
        System.out.println("Profesores: " + est5.getProfesores());
        System.out.println("Materiales compartidos: " + est5.getMaterialesCompartidos());
        System.out.println();
        
        // Mostrar información de los profesores
        System.out.println("Profesor 1:");
        System.out.println("Nombre: " + prof1.getNombre());
        System.out.println("Departamento: " + prof1.getDepartamento());
        System.out.println("Calificaciones: " + prof1.getCalificaciones());
        System.out.println();
        
        System.out.println("Profesor 2:");
        System.out.println("Nombre: " + prof2.getNombre());
        System.out.println("Departamento: " + prof2.getDepartamento());
        System.out.println("Calificaciones: " + prof2.getCalificaciones());
        System.out.println();
        
        System.out.println("Profesor 3:");
        System.out.println("Nombre: " + prof3.getNombre());
        System.out.println("Departamento: " + prof3.getDepartamento());
        System.out.println("Calificaciones: " + prof3.getCalificaciones());
        System.out.println();
        
        System.out.println("Profesor 4:");
        System.out.println("Nombre: " + prof4.getNombre());
        System.out.println("Departamento: " + prof4.getDepartamento());
        System.out.println("Calificaciones: " + prof4.getCalificaciones());
        System.out.println();
        
        System.out.println("Profesor 5:");
        System.out.println("Nombre: " + prof5.getNombre());
        System.out.println("Departamento: " + prof5.getDepartamento());
        System.out.println("Calificaciones: " + prof5.getCalificaciones());
        System.out.println();

    }
}
