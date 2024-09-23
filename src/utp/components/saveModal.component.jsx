import React from 'react';
import '../../public/components/Modal.css'; // Reutilizamos los estilos del modal

const SaveModal = ({ isOpen, onClose, studentInfo, enrolledCourses }) => {
    if (!isOpen) return null;

    const cardClasses = 'bg-background text-foreground p-6 rounded-lg shadow-md flex items-center'
    const imageClasses = 'rounded-full border border-border'


    return (
        <div className={cardClasses}>
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">MATRICULA ESTUDIANTE</h2>
                <p>
                    <strong>Nombres:</strong> Victor Raul Herrera Castillo
                </p>
                <p>
                    <strong>Ciclo:</strong> 202402
                </p>
                <h1>Horario del Estudiante</h1>
                <p>
                    <strong>Carrera:</strong> Ingeniería de sistemas
                </p>
                <p>
                    <strong>Codigo de alumno:</strong> U02402E12
                </p>
            </div>
            <div className="flex flex-col items-end">
                <div className="mb-4">
                    <img aria-hidden="true" alt="student-photo" src="https://placehold.co/100x100.png"
                         className={imageClasses}/>
                </div>
                <p>
                    <strong>Numero de créditos matriculados:</strong>
                </p>
                <p>
                    Obligatorios: <span className="font-bold">124</span>
                </p>
                <p>
                    Electivos: <span className="font-bold">12</span>
                </p>
            </div>

    // Estructura del modal

    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Confirmar Información</h2>
            <div className={cardClasses}>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4">MATRICULA ESTUDIANTE</h2>
                    <p>
                        <strong>Nombres:</strong> Victor Raul Herrera Castillo
                    </p>
                    <p>
                        <strong>Ciclo:</strong> 202402
                    </p>
                    <p>
                        <strong>Carrera:</strong> Ingeniería de sistemas
                    </p>
                    <p>
                        <strong>Codigo de alumno:</strong> U02402E12
                    </p>
                </div>
                <div className="flex flex-col items-end">
                <div className="mb-4">
                            <img aria-hidden="true" alt="student-photo" src="https://placehold.co/100x100.png"
                                 className={imageClasses}/>
                        </div>
                        <p>
                            <strong>Numero de créditos matriculados:</strong>
                        </p>
                        <p>
                            Obligatorios: <span className="font-bold">124</span>
                        </p>
                        <p>
                            Electivos: <span className="font-bold">12</span>
                        </p>
                    </div>
                </div>
                <div className="enrolled-courses">
                    <h3>Cursos Seleccionados</h3>
                    <ul>
                        {enrolledCourses.map((course, index) => (
                            <li key={index}>{course.name} - {course.credits}</li>
                        ))}
                    </ul>
                </div>
                <button className="btn" onClick={onClose}>Confirmar</button>
            </div>
        </div>
    </div>
    );
};

export default SaveModal;