import React from "react";

import HeroSliderfr from "../components/UI/HeroSliderfr";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSectionfr from "../components/UI/AboutSectionfr";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSectionfr from "../components/UI/BecomeDriverSectionfr";
import Testimonialfr from "../components/UI/Testimonialfr";


const Homefr = () => {
  return (
    <Helmet title="Homefr">
      {/* ============= section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSliderfr />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Trouvez votre meilleure voiture ici</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSectionfr />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Voir notre</h6>
              <h2 className="section__title">Services populaires</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Viens avec</h6>
              <h2 className="section__title">Offres spéciales</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSectionfr />

      {/* =========== testimonialfr section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Nos clients disent</h6>
              <h2 className="section__title">Témoignages</h2>
            </Col>

            <Testimonialfr />
          </Row>
        </Container>
      </section>
    
    </Helmet>
  );
};

export default Homefr;
