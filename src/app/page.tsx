import Link from "next/link";
import proto1 from './imgs/proto1.webp'
import proto2 from './imgs/proto2.png'
import proto3 from './imgs/proto3.png'
import drone from './imgs/drone.webp'
import Image, {StaticImageData} from "next/image"
import "./globals.css"

export default function Home(){
    return <>
        <div className="background-div" style={{ backgroundImage: `url(${proto1.src})`, zIndex: 1 }}>
            <div className="first-box"></div>



        <div className="image-box">

            <Image src={proto3} width={800} height={500}  className="img-fluid" alt="proto1"/>

            <div className="content-box-anchor">

                <div className="content-box content-box1">
                    <p className="content-text">Bring your ideas to life</p>
                </div>


                <div className="content-box content-box2">
                    <p className="content-text">From small improvements to principle startup engineering. we've got you covered</p>
                </div>

                <div className="content-box content-box3" >
                    <ul className="content-text services-list">
                        <li>Principle Engineering</li>
                        <li>Artificial intelligence</li>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Data pipeline Development</li>
                        <li>Devops</li>
                    </ul>
                </div>

            </div>

        </div>

        <div>
            <section>



            </section>
        </div>
        </div>
    </>;

}