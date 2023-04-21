/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clase;

/**
 *
 * @author romin
 */
public class Calificacion {
    private int puntaje;
    private String comentario;
    private Estudiante estudiante;
    private Profesor profesor;
    

    public Calificacion(int puntaje, String comentario, Estudiante estudiante, Profesor profesor) {
        this.puntaje = puntaje;
        this.comentario = comentario;
        this.estudiante = estudiante;
        this.profesor = profesor;
    }

    public int getPuntaje() {
        return puntaje;
    }
    
}




