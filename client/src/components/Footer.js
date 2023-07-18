import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container col-6 mt-4'>
                <p className='footer_p'>Acerca del equipo:</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Francisco Manuel Díaz Delgado</td>
                            <td>Scrum Master y Desarrollador</td>
                        </tr>
                        <tr>
                            <td>Felipe Francisco Donayre Salazar</td>
                            <td>Product Owner y Jefe de Proyecto</td>
                        </tr>
                        <tr>
                            <td>Luis Ferndando Colan Torres</td>
                            <td>Team Member</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </footer>
    )
}

export default Footer