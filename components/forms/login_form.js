import * as React from "react";
import classes from "./login_form.module.css";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Image from 'next/image'
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Poppins, Roboto} from "next/font/google";
import Button from '@mui/material/Button';

const poppins = Poppins({subsets: ["latin"], weight: "400"});
const roboto = Roboto({subsets: ["latin"], weight: "400"});
export default function Login(){
    const router = useRouter();
    const { data: session } = useSession();
    useEffect(() => {
        const container = document.getElementById("threejs_left_container");
        container.style.height = '250px'; 
    
        if (!container || container.offsetWidth === 0 || container.offsetHeight === 0) {
            console.error("Container hat null Dimensionen oder fehlt.");
            return;
        }
    
        // Three.js Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            container.offsetWidth / container.offsetHeight,
            0.1,
            1000
        );
    
        camera.position.set(0, 50, 500); // Set camera position
        camera.lookAt(new THREE.Vector3(0, 50, 0)); // Point the camera at the center
    
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
    
        // Add lights
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 10, 7.5);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
    
        // Variable to hold the loaded model
        let model = null;
    
        // GLTF-Loader
        const loader = new GLTFLoader();
        loader.load(
            '/resources/hestia_logo.glb',
            (gltf) => {
                model = gltf.scene;
                model.scale.set(5, 5, 5); // Set constant scale here (don't change during resize)
                model.position.set(0, 0, 0); // Center the model
                model.rotation.y = Math.PI / 2;
                model.rotation.x = Math.PI;
                model.rotation.z = Math.PI / 2;
                scene.add(model);
                console.log("Modell erfolgreich geladen");
            },
            undefined,
            (error) => {
                console.error("Fehler beim Laden des Modells:", error);
            }
        );
    
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
    
            // Rotate the model if it exists
            if (model) {
                model.rotation.y += 0.01; // Slowly rotate around the Y-axis
            }
    
            renderer.render(scene, camera);
        };
        animate();
    
        // Resize handler (only for camera and renderer, NOT for model scaling)
        const onResize = () => {
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        };
        window.addEventListener("resize", onResize);
    
        // Cleanup on component unmount
        return () => {
            window.removeEventListener("resize", onResize);
            container.removeChild(renderer.domElement);
        };
    }, []);
    



    var width = 1000;

    if (typeof window != 'undefined') {
        const [widths, setWidth] = useState(window.innerWidth);
        const [heights, setHeight] = useState(window.innerHeight);
        const updateDimensions = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        useEffect(() => {
            window.addEventListener("resize", updateDimensions);
            return () => window.removeEventListener("resize", updateDimensions);
        }, []);
        width = widths;
    }
    const [state, setState] = useState({
        password: "",
        email: "",
    })

    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email: state.email, password: state.password, redirect: false,
            });
            console.log(res);

            if (res.error) {
                setErrMsg("Invalid Credentials");
                return;
            }
            const verificationRes = await fetch("/api/verification_control", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: state.email,
                    password: state.password, 
                }),
            });

            const verificationData = await verificationRes.json();

            if (verificationRes.status !== 200) {
                setErrMsg(verificationData.error || "An unexpected error occurred.");
                return;
            }

        
            console.log("Benutzer eingeloggt und verifiziert:", verificationData);
            
            router.replace("http://localhost:3000/patient/67856c6877c3b0e3cc18ddba");
        }

        catch (err) {
            console.log(err);
        }

    }
    function handleChangeState(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
        console.log({...state, [event.target.name]: value}); 
    }
    

  

    return(
        <div className={classes.main__container}>
            <div className={classes.inner__container}>
                <div className={classes.left__container}>
                <div className={classes.left__btns}>
                    <Button
                    sx={{
                        borderColor: 'black',
                        color: 'black',
                        '&:hover': {
                        borderColor: 'black', 
                        backgroundColor: 'white',
                        color: 'black', 
                        },
                    }}
                    variant="outlined"
                    >
                    ← Go Back Home
                    </Button>

                    </div>
                    <div className={classes.left__content}>
                                <div className={classes.left__content__description__container}>
                                <h3 className={`${poppins.className} ${classes.title}`}>Hestia - Med® - Unser Medizinisches Portal!</h3>
                                <div className={classes.features}>
                                    <div className={classes.features__item}>
                                        <Image className={classes.list__img} src={"/icons/users.png"} draggable="false" width={30} height={30} alt="list"/>
                                        <span className={`${roboto.className} ${classes.feature_description}`}>Effiziente Verwaltung von Patienten</span>
                                    </div>
                                    <div className={classes.features__item}>
                                    <Image className={classes.list__img} src={"/icons/Calendar_Days.png"} draggable="false" width={30} height={30} alt="list"/>
                                    <span className={`${roboto.className} ${classes.feature_description}`}>Online Scheduling</span>
                                    </div>
                                    <div className={classes.features__item}>
                                    <Image className={classes.list__img} src={"/icons/Credit_Card_01.jpg"} draggable="false" width={30} height={30} alt="list"/>
                                    <span className={`${roboto.className} ${classes.feature_description}`}>Vereinfachte Nutzung unseres Buchungssystems</span>
                                    </div>
                                    <div className={classes.features__item}>
                                    <Image className={classes.list__img} src={"/icons/Folder_Document.png"} draggable="false" width={30} height={30} alt="list"/>
                                    <span className={`${roboto.className} ${classes.feature_description}`}>Medizinische Dokumentation</span>
                                    </div>
                                </div>
                            </div>
                                <div id="threejs_left_container" style={{marginTop: "-100px"}}><canvas className={classes.canvas}></canvas></div>
                        </div>
                </div>
                <div className={classes.right__container}>
                    <div className={classes.right__content}>
                        <div className={`${classes.login__title} ${roboto.className}`}>LogIn</div>
                    <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.input__container}>
                        <input
                            type='email'
                            name='email'
                            value={state.email}
                            onChange={handleChangeState}
                            className={classes.input}
                            placeholder='Email'
                            required
                            maxLength={30}
                        />
                    </div>
                    <div className={classes.input__container}>
                        <input
                            type='password'
                            name='password'
                            value={state.password}
                            onChange={handleChangeState}
                            className={classes.input}
                            placeholder='Password'
                            required
                            maxLength={20}
                        />

                    </div>
                    <div className={classes.relative}>
                        <div className={classes.error}>{errMsg}</div>
                        <button className={classes.button} type='submit'>Login</button>
                    </div>
                </form>
                <div className={classes.existingacc}>Need an account? <Link href={"/register"}><span className={classes.underline}>Register</span></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}