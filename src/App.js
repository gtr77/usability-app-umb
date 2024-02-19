import React, { useState } from 'react';

const UsabilityPage = () => {
  const [tabSeleccionada, setTabSeleccionada] = useState('usabilidad');

  const tabs = [
    { id: 'usabilidad', label: 'Usabilidad', contenido: 'La usabilidad se refiere a la facilidad con la que los usuarios pueden interactuar con un sitio web o una aplicación y realizar sus tareas de manera eficiente y satisfactoria. Los profesionales de la información deben comprender los principios básicos de usabilidad para diseñar sistemas que sean intuitivos, eficaces y accesibles para una amplia gama de usuarios.' },
    { id: 'accesibilidad', label: 'Accesibilidad', contenido: 'La accesibilidad se refiere a la capacidad de un sitio web o una aplicación para ser utilizado por personas con discapacidades, incluidas aquellas que tienen dificultades visuales, auditivas, motoras o cognitivas. Al diseñar con accesibilidad en mente, se garantiza que todos los usuarios puedan acceder y utilizar el contenido de manera efectiva, lo que mejora la experiencia general del usuario.' },
    { id: 'ingenieria', label: 'Ingeniería de usabilidad', contenido: 'La ingeniería de usabilidad es un enfoque sistemático para diseñar sistemas que sean fáciles de usar y satisfagan las necesidades de los usuarios. Implica la aplicación de principios de psicología cognitiva, ergonomía y diseño de interfaces de usuario para crear productos que sean eficientes, efectivos y satisfactorios de usar.' },
    { id: 'ciclo', label: 'Ciclo de vida', contenido: 'El ciclo de vida de la ingeniería de usabilidad es un proceso iterativo que incluye varias etapas, desde la identificación de requisitos hasta la evaluación del producto final. Estas etapas pueden incluir investigación de usuarios, diseño de prototipos, pruebas de usabilidad y refinamiento continuo para garantizar que el producto cumpla con las necesidades y expectativas de los usuarios.' },
    { id: 'evaluacion', label: 'Métodos de evaluación', contenido: 'Existen diversos métodos para evaluar la usabilidad de un sistema, incluidas pruebas de usuario, evaluaciones heurísticas, análisis de tareas y estudios de campo. Estos métodos permiten a los diseñadores identificar problemas de usabilidad y realizar mejoras para garantizar una experiencia de usuario óptima.' },
    { id: 'diseno', label: 'Diseño centrado en el usuario', contenido: 'El diseño web centrado en el usuario es un enfoque de diseño que prioriza las necesidades y expectativas de los usuarios. Esto implica la realización de investigaciones de usuarios, la creación de prototipos iterativos y la incorporación de retroalimentación del usuario en todo el proceso de diseño para garantizar que el producto final sea intuitivo, eficiente y satisfactorio de usar.' },
    { id: 'referencias', label: 'Referencias bibliográficas', contenido: 'Referencias bibliográficas' },
  ];

  const cambiarTab = (tabId) => {
    setTabSeleccionada(tabId);
  };

  return (
    <div>
      <header>
        <h1>Bienvenido a nuestro sitio web centrado en la usabilidad</h1>
      </header>
      <main>
        <nav>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => cambiarTab(tab.id)} className={tabSeleccionada === tab.id ? 'active' : ''}>
              {tab.label}
            </button>
          ))}
        </nav>
        <section>
          {tabs.map(tab => (
            tabSeleccionada === tab.id &&
            <div key={tab.id}>
              <h2>{tab.label}</h2>
              <p>{tab.contenido}</p>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 NuestraEmpresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default UsabilityPage;
