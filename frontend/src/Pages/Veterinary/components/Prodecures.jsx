import React from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faDog,
  faHeartPulse,
  faStethoscope,
  faSyringe,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import SmoothScrollComponent from "../../../hook/SmoothScrollComponent";

const Prodecures = () => {
  const fadeIn = SmoothScrollComponent();
  return (
    <section id="procedures">
      <div ref={fadeIn.ref} className="container">
        <div className="title">
          <h3>Our Procedures</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="procedures">
          <div className="col">
            <div className="icon">
              <FontAwesomeIcon icon={faDog} />
            </div>
            <div className="about">
              <h5>Wellness Care</h5>
              <p>
                Our wellness programs include: comprehensive physical exam;
                internal and external parasite testing.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="icon">
              <FontAwesomeIcon icon={faHeartPulse} />
            </div>
            <div className="about">
              <h5>Anesthetic Monitoring</h5>
              <p>
                Your pet will be examined during check in to ensure that he or
                she is in top shape for surgery that day.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="icon">
              <FontAwesomeIcon icon={faCat} />
            </div>
            <div className="about">
              <h5>Nutritional Counseling</h5>
              <p>
                Some pets require special prescription food and all pets benefit
                from a balanced diet.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <FontAwesomeIcon icon={faStethoscope} />
            </div>
            <div className="about">
              <h5>Pain Management</h5>
              <p>
                We understand that our patients feel pain and discomfort under
                the same circumstances as people do.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="icon">
              <FontAwesomeIcon icon={faSyringe} />
            </div>
            <div className="about">
              <h5>Vaccination Care</h5>
              <p>
                When a baby kitten or puppy is born, its immune system is not
                yet mature; the baby is wide open for infection.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="icon">
              <FontAwesomeIcon icon={faTooth} />
            </div>
            <div className="about">
              <h5>Dental Care</h5>
              <p>
                Regular dental cleanings are important in maintaining not only
                your pet’s teeth but his or her overall health as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prodecures;
