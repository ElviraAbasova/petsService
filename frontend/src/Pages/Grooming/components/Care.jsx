import React from 'react'
import paw from "../../../assets/images/pngwing.com (29).png"
import bath from "../../../assets/images/animal_13774779.png"
import style from "../../../assets/images/grooming_2295113.png"
import groom from "../../../assets/images/dog_13702699.png"
import trim from "../../../assets/images/dog_1351590.png"
import clean from "../../../assets/images/hairdresser_7810354.png"
import nail from "../../../assets/images/scissors_16057797.png"
import dog from "../../../assets/images/dog-1.png"



const Care = () => {
  return (
    <section id='care'>
        <div className="container">
        <div className="title">
            <h3>Our Care</h3>
             <img src={paw} alt="paw" />
            </div>
            <div className="cares">
        <div className="side">
            <div className="care">
                <div className="icon">
                    <img src={bath} alt="icon" />
                </div>
                <div className="col">
                    <h4>Bath & Bursh</h4>
                    <p>Wild Things Pet Services is a professional, bonded and insured, dog walking ...</p>
                </div>

            </div>
            <div className="care">
                <div className="icon">
                    <img src={style} alt="icon" />
                </div>
                <div className="col">
                    <h4>Hair Styling</h4>
                    <p>Wild Things Pet Services is a professional, bonded and insured, dog walking ...</p>
                </div>

            </div>
            <div className="care">
                <div className="icon">
                    <img src={nail} alt="icon" />
                </div>
                <div className="col">
                    <h4>Coat Handler</h4>
                    <p>Wild Things Pet Services is a professional, bonded and insured, dog walking ...</p>
                </div>

            </div>
            
            </div>
            <div className="center">
                <img src={dog} alt="dog" />
            </div>
            <div className="side">
            <div className="care">
                
                <div className="col">
                    <h4>Trim & Groom</h4>
                    <p>Wild Things Pet Services is a professional, bonded and insured, dog walking ...</p>
                </div>
                <div className="icon">
                    <img src={trim} alt="" />
                </div>

            </div>
            <div className="care">
                
                <div className="col">
                    <h4>Cleaning & Plucking</h4>
                    <p>Wild Things Pet Services is a professional, bonded and insured, dog walking ...</p>
                </div>
                <div className="icon">
                    <img src={clean} alt="" />
                </div>

            </div>
            <div className="care">
                
                <div className="col">
                    <h4>Pet Grooming</h4>
                    <p>Wild Things Pet Services is a professional, bonded and insured, dog walking ...</p>
                </div>
                <div className="icon">
                    <img src={groom} alt="icon" />
                </div>

            </div>
            
            </div>
        </div>
        </div>
       
    
    </section>
  )
}

export default Care