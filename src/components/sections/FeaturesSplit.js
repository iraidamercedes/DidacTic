import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Arma la ruta de aprendizaje.',
    paragraph: 'Decide qué habilidades requieren tus aprendizes digitales, y arma una ruta de aprendizaje perfecta para ellos con los contenidos disponibles en la plataforma.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Explora los contenidos
                  </div>
                <h3 className="mt-0 mb-12">
                  Construye.
                  </h3>
                <p className="m-0">
                Selecciona tu ruta de aprendizaje seleccionando los cursos según las categorías que necesites:
                <br/>
                <br/>
                  <ul>
                    <li>Modalidades Educativas Emergentes.</li>
                    <li>Herramientas de Pedagogía Digital.</li>
                    <li>Estrategias Educativas Virtuales.</li>
                    <li>Educando TIC.</li>
                    <li>Instructor TIC.</li>
                  </ul>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/connecting-teams-concept-landing-page.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Avanza en la ruta.
                  </div>
                <h3 className="mt-0 mb-12">
                  Aprende.
                  </h3>
                <p className="m-0">
                Todos nuestros cursos cuentan con acompañamientos para que todos los pasos que des en tu ruta de aprendizaje, te lleven a la meta que quieres lograr como aprendiz digital. Trabajamos para que en esta etapa encuentres:
                <br/>
                <br/>
                  <ul>
                    <li>Dedicación.</li>
                    <li>Motivación.</li>
                    <li>Trabajo en equipo y adaptación al entorno.</li>
                    <li>Trabajo práctico.</li>
                  </ul>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/three-man-having-business-meeting-in-the-office.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Crea con lo aprendido.
                  </div>
                <h3 className="mt-0 mb-12">
                  Aplica.
                  </h3>
                <p className="m-0">
                  Aplica tus conocimientos creando tus propios proyectos de acuerdo a tu orientación pedagógica: instructor, educando o estudiante, y lleva tu aprendizaje a otro nivel.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/illustration-back-to-school-of-female-explain-astronomy-galaxy-online.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;