
import '@styles/card.css'
import { SiFastapi } from "react-icons/si";
import { GrUserSettings } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import {motion} from 'framer-motion'

export function WhyChooseUs() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-11 d-flex flex-column flex-lg-row gap-5 mx-auto justify-content-around my-5'>
                    <motion.div  whileHover={{ scale: 1.1 }}  className='card-custom text-center d-flex flex-column gap-2 align-items-center'>
                      
                        <div className='bg h-100 '>
                            <SiFastapi style={{ width: "50px", height: "50px" }} />
                            <h3 className='py-2'>Effortless and Swift</h3>
                            <p>
                                {/* Simply drag and drop your files, select the desired output format and click the
                                Convert button. Wait briefly for the process to finish. Our goal is to complete all
                                conversions within 1-2 minutes. */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci eveniet aut magnam, minima quas perspiciatis aliquam est animi ipsam facilis ut molestiae hic debitis nulla, quaerat dolor et voluptas?
                            </p>
                        </div>
                        <div className="blob"></div>
        
                    </motion.div>
                    <motion.div  whileHover={{ scale: 1.1 }}  className='card-custom text-center  d-flex flex-column gap-2 align-items-center'>
                        <div className="bg h-100">
                            <MdSecurity style={{ width: "50px", height: "50px" }} />
                            <h3 className='py-2'>Guaranteed Security</h3>
                            <p >
                                {/* We promptly delete uploaded files and converted files after 24 hours. Your files are
                                fully secure, and your privacy is 100% ensured. Learn more about our security
                                measures. */}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis unde sint beatae nulla sunt illo, nesciunt eligendi facere et cum placeat molestiae quam pariatur aspernatur natus. Qui commodi nobis odit.
                            </p>
                        </div>
                            <div className="blob"></div>
                    </motion.div>
                    <motion.div  whileHover={{ scale: 1.1 }}  className='card-custom text-center  d-flex flex-column gap-2 align-items-center'>
                        <div className="bg h-100">
                            <DiResponsive style={{ width: "50px", height: "50px" }} />
                            <h3 className='py-2'>Device Compatibility</h3>
                            <p >
                                {/* Effortless pdf is browser-based and compatible with all platforms. Theres no need to
                                download or install any software. */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, assumenda. Obcaecati minima sequi, tempora quae repellendus asperiores exercitationem neque facilis, laudantium sunt nihil veritatis eum quibusdam fugiat at non magnam.
                            </p>
                        </div>
                        <div className="blob"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
