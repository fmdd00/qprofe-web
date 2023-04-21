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
public class Profesor {
    private String nombre;
    private String departamento;
    private List<Calificacion> calificaciones;
    
    public Profesor(String nombre, String departamento) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.calificaciones = new ArrayList<>();
    }
    
    public void agregarCalificacion(Calificacion calificacion) {
        calificaciones.add(calificacion);
    }
    
    public void eliminarCalificacion(Calificacion calificacion) {
        calificaciones.remove(calificacion);
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public String getDepartamento() {
        return departamento;
    }
    
    public List<Calificacion> getCalificaciones() {
        return calificaciones;
    }
}