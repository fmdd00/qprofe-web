/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clase;

/**
 *
 * @author romin
 */
public class Material {
    private String nombre;
    private String tipo;
    private Estudiante propietario;
    
    // Constructor
    public Material(String nombre, String tipo, Estudiante propietario) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.propietario = propietario;
    }
    
    // Métodos para obtener información del material
    public String getNombre() {
        return nombre;
    }
    
    public String getTipo() {
        return tipo;
    }
    
    public Estudiante getPropietario() {
        return propietario;
    }
}
