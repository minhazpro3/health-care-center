import React from 'react';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    return (
        <div className=" about-div ">
                

             <div className="p-2 text-center ">
             <h2>Hospital Type:</h2>
               <li>  AHS Health Care Center and Org Limited, will be a non-governmental         organization.</li>
                <li> This Hospital will be a non-political .</li>
                   <li> The Hospital will be a profit organization.</li>
                <li> The Hospital will be a non-governmental and complete organization.</li>
             </div>
             <div className="bg-secondary p-3 text-center ">
                 <h4>Hospital Introduction</h4>
                 <p>A Hospital is a place where the sick, injured and emergency case are taken for treatment. <span  className="text-info">The doctors and nurses are readily available there for admitting and attending on their patients and nurses are very care fully.</span> They are employed by the hospitals to nurse the sick back to heath.

                In the nineteenth and the twenty century’s medical science made remarkable progress and the cures for almost all the diseases were found. Both in the spheres of medicine and surgery the prolonged researches were rewarded with epoch-making achievements.

                <span className="text-info">The dedicated teams of doctors and nurses delivers the message of hope to their patients in the hospitals.</span> All over the world, hospitals are built to treat and cure thousands of the sick patients. As these hospitals, there are very well-equipped facilities and expert doctors. These hospitals are considered the best places for effective treatment.

                <span className="text-info">The doctors and nurses works effortlessly in doing their duties to the patients. The atmosphere in the hospitals should be pleasant so the the patient can feel comfortable.</span>The doctor and nurses every effort for save life of patient.

                However, some hospital doesn’t provide the expected service to it’s patients. They neglect their duties toward the patients. This should not happen. The doctors should always treats their patients with utmost care, considering their lives very precious.</p>
             </div>
                 <div className="p-3 depertment-div row g-3 p-4">
                    <div className="col-md-6">
                    <h3 className="text-center">Departments or wards</h3>
                     <p><li>
                     A hospital contains one or more wards that house hospital beds for inpatients.
                         </li> 
                         <li>It may also have acute services such as an emergency department, operating theatre, and intensive care unit, as well as a range of medical specialty departments.</li> 
                         <li>A well-equipped hospital may be classified as a trauma center. They may also have other services such as a hospital pharmacy, radiology, pathology, and medical laboratories.</li> 
                         <li>Some hospitals have outpatient departments such as behavioral health services, dentistry, and rehabilitation services.</li>

                        <li> A hospital may also have a department of nursing, headed by a chief nursing officer or director of nursing. This department is responsible for the administration of professional nursing practice, research, and policy for the hospital.</li>

                    </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img style={{width: '100%' }} src="https://i.ibb.co/GxvVFt7/1.jpg" alt=""/>
                        <span>This is the site in front of the hospital</span>
                    </div>
                 </div>

                 
                 <Footer></Footer>
        </div>
    );
};

export default About;