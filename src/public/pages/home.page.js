// src/App.js
import React, {useState} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import CourseModal from '../components/courseModal.component';
import SaveModal from '../../utp/components/saveModal.component';

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <div className="left-panel">
                    <Profile />
                    <EnrolledCourses />
                </div>
                <div className="right-panel">
                    <Courses />
                </div>
            </main>
        </div>
    );
}

const Header = () => (
    <header className="header">
        <div className="header-logo">
            <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1727060006/crwtyws8oaford8wwqd7.png" alt="UTP Logo" />
            <h1>Matrícula en Línea UTP - 2024 II</h1>
        </div>
        <div className="header-student">Estudiante: Víctor Herrera</div>
    </header>
);

const Profile = () => (
    <section className="profile">
        <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1726960494/lgo85j9pcoqysduke6im.jpg" alt="Perfil" />
        <div className="profile-info">
            <p><strong>Nombres:</strong> Víctor Raúl Herrera Castillo</p>
            <p><strong>Carrera:</strong> Ingeniería de Sistemas</p>
            <p><strong>Ciclo:</strong> 2024-02</p>
            <p><strong>Código alumno:</strong> U20201E188</p>
            <p><strong>Créditos Obligatorios:</strong> 124</p>
            <p><strong>Créditos Electivos:</strong> 12</p>
        </div>
    </section>
);

// Modificar el componente EnrolledCourses para incluir la funcionalidad de eliminar curso y mostrar el conteo
const EnrolledCourses = () => {
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

    const studentInfo = {
        name: 'Víctor Raúl Herrera Castillo',
        career: 'Ingeniería de Sistemas',
        cycle: '2024-02',
        studentCode: 'U20201E188',
        mandatoryCredits: 124,
        electiveCredits: 12,
    };

    const enrolledCourses = [
        { name: 'Física 2 - SX569', credits: '4 créditos' },
        { name: 'Cálculo 2 - SX569', credits: '3 créditos' },
        { name: 'Fotografía - TF968', credits: '3 créditos' },
    ];

    const handleSaveClick = () => {
        setIsSaveModalOpen(true);
    };

    return (
        <section className="enrolled-courses">
            <h2>Cursos Matriculados</h2>
            <p>Presencial: 2 | Virtual: 1</p>
            <div className="course-list">
                <CourseCard
                    name="Física 2 - SX569"
                    credits="4 créditos"
                    mode="Presencial"
                    status="inscrito"
                />
                <CourseCard
                    name="Cálculo 2 - SX569"
                    credits="3 créditos"
                    mode="Presencial"
                    status="inscrito"
                />
                <CourseCard
                    name="Fotografía - TF968"
                    credits="3 créditos"
                    mode="Virtual"
                    status="inscrito"
                />
            </div>
            <div className="buttons">
                <Link to="/schedule">
                    <button className="btn">Ver Horario</button>
                </Link>
                <button className="btn" onClick={handleSaveClick}>Guardar</button>
            </div>
            <SaveModal
                isOpen={isSaveModalOpen}
                onClose={() => setIsSaveModalOpen(false)}
                studentInfo={studentInfo}
                enrolledCourses={enrolledCourses}
            />
        </section>
    );
};


const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionsForCourses = {
        'Física 2': ['Sección 1', 'Sección 2', 'Sección 3'],
        'Cálculo 2': ['Sección 1', 'Sección 4'],
        'Fotografía': ['Sección 2', 'Sección 3', 'Sección 5'],
    };

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleSelectSection = (section) => {
        console.log(`Se seleccionó la ${section} para el curso ${selectedCourse}`);
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    return (
        <section className="courses">
            <h2>Cursos Obligatorios</h2>
            <p>Estos cursos forman parte de tu plan de estudios y son necesarios para cumplir con los requisitos de tu carrera.</p>
            <div className="course-list">
                <CourseCard
                    name="Física 2 - SX569"
                    credits="4 créditos"
                    status="pendiente"
                    onClick={() => handleCourseClick('Física 2')}
                />
                <CourseCard
                    name="Cálculo 2 - SX569"
                    credits="3 créditos"
                    status="inscrito"
                    onClick={() => handleCourseClick('Cálculo 2')}
                />
            </div>

            <h2>Cursos Electivos</h2>
            <p>Los cursos electivos te permiten explorar áreas adicionales y complementar tu formación académica.</p>
            <div className="course-list">
                <CourseCard
                    name="Fotografía - TF968"
                    credits="4 créditos"
                    status="inscrito"
                    onClick={() => handleCourseClick('Fotografía')}
                />
            </div>

            <CourseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                course={selectedCourse}
                sections={sectionsForCourses[selectedCourse] || []}
                onSelectSection={handleSelectSection}
            />
        </section>
    );
};

const CourseCard = ({ name, credits, status, onClick }) => (
    <div className={`course-card ${status}`} onClick={onClick}>
        <h3>{name}</h3>
        <p>{credits}</p>
        <span className={`status ${status}`}>{status}</span>
    </div>
);

export default App;
