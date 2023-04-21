/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clase;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author romin
 */

public class Estudiante {
    private String nombre;
    private String carrera;
    private List<Profesor> profesores;
    private List<Material> materialesCompartidos;
    
    public Estudiante(String nombre, String carrera) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.profesores = new ArrayList<>();
        this.materialesCompartidos = new ArrayList<>();
    }
    
    public void agregarProfesor(Profesor profesor) {
        profesores.add(profesor);
    }
    
    public void eliminarProfesor(Profesor profesor) {
        profesores.remove(profesor);
    }
    
    public void compartirMaterial(Material material) {
        materialesCompartidos.add(material);
    }
    
    public void eliminarMaterial(Material material) {
        materialesCompartidos.remove(material);
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public String getCarrera() {
        return carrera;
    }
    
    public List<Profesor> getProfesores() {
        return profesores;
    }
    
    public List<Material> getMaterialesCompartidos() {
        return materialesCompartidos;
    }
}

