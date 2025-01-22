<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "./register_form.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Icon} from 'react-icons-kit';
import { Poppins, Montserrat, Roboto } from "next/font/google";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    customTextField: {
      width: "355px!important", 
    },
  });
const poppins = Poppins({subsets: ["latin"], weight: "400"});
const montserrat = Montserrat({subsets: ["latin"], weight: "900"});
 const lightMontserrat = Montserrat({subsets: ["latin"], weight: "600"});
 const roboto = Roboto({subsets: ["latin"], weight: "400"});
 const lightRoboto = Roboto({subsets: ["latin"], weight: "300"});

export default function RegisterForm() {
    const [step, setStep] = useState(1); 
    const validateFields = () => {
        const requiredFields = [
            'practice_name', 'first_name', 'surname', 
            'birth_date', 'gender', 'email', 
            'phoneNumber', 'country', 'city', 
            'address', 'password', 'confirmpassword'
        ];
        const missingFields = requiredFields.filter(field => !state[field]);
        return missingFields;
    };
    
    const handleNextStep = (event) => {
        event.preventDefault();
        const missingFields = validateFields();
    
        if (missingFields.length > 0) {
            setError('Bitte alle erforderlichen Felder ausfüllen.');
            return;
        }
        setStep(step + 1);
    };
      
    const handlePreviousStep = () => {
        setError('');
        setStep(1);
    };
    const router = useRouter();
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const { pathname, query } = router;
    const custom = useStyles();
    const [state, setState] = useState({
        practice_address: "",
        practice_phoneNumber: "",
        practice_name:"",
        title: "",
        first_name: "",
        surname: "",
        gender:"",
        birth_date: "",
        email: "",
        phoneNumber: "",
        country: "",
        city: "",
        address: "",
        password: "",
        confirmpassword: "",
        role:"practitioner",
        termsAccepted: false,
    });
    useEffect(() => {
        console.log(state);
    });


    const formattedDate = state.birth_date 
    ? dayjs(state.birth_date).isValid() 
        ? dayjs(state.birth_date).toISOString().toString() 
        : null 
    : null;

console.log("Formatted Birth Date:", formattedDate);


    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);


    const [visible, setVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const handleToggle = () => {
        setVisible(!visible);
     }
    const handleChangeState = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };



    async function onSubmit(e) {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(f => {
            if (!f.name || f.name === "title") return; 
            formData[f.name] = f.value;
        });
        console.log(formData);
        
        const keys = Object.keys(state);
        for (const key of keys) {
            if (key !== "title" && state[key] === "") {
                setError("Marked fields are required!");
                return;
            }
        }
        //-- check if user exits in the DB
        const user_found = await fetch("/api/authentication_control/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: state.email }),
            //  credentials: "include",
        });
        console.log(user_found);
        const { user_stored } = await user_found.json();
        console.log(user_stored);
        if (user_stored) {
            console.log("User already exists..");
            setError("Benutzer existiert schon...");
            return;
        }

        const requestBody = {
            practice_name: state.practice_name,
            title: state.title,
            first_name: state.first_name,
            surname: state.surname,
            gender: state.gender,
            birth_date: formattedDate,
            email: state.email,
            phoneNumber: state.phoneNumber,
            country: state.country,
            city: state.city,
            address: state.address,
            password: state.password,
            role: "practitioner",
            termsAccepted: state.termsAccepted,
        };
        console.log("Request Body:", JSON.stringify(requestBody, null, 2));
        const practice_data = {
            practice_name: state.practice_name,
            practice_address: state.practice_address,
            practice_phoneNumber: state.practice_phoneNumber,
        };
    
        try {
            const res = await fetch("/api/register/practice", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(practice_data),
            });
    
            if (!res.ok) {
                const err = await res.json();
                console.error("Praxis-Fehler:", err);
                return;
            }
    
            const responseJson = await res.json();
            console.log('API Antwort:', responseJson);

            const { _practice } = responseJson;
            if (!_practice || !_practice._id) {
            console.error("Fehler: Keine gültige Praxisantwort erhalten");
            return;
            }

            console.log('Praxis-ID:', _practice._id); 

            const response = await fetch("/api/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    practice_name: _practice.name,
                    practice: _practice ? _practice._id : null,
                    title: state.title,
                    first_name: state.first_name,
                    surname: state.surname,
                    gender: state.gender,
                    birth_date: formattedDate,
                    email: state.email,
                    phoneNumber: state.phoneNumber,
                    country: state.country,
                    city: state.city,
                    address: state.address,
                    password: state.password,
                    role: state.role,
                    termsAccepted: state.termsAccepted,
                }),
            });

            if (response.ok) {
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    const res = await response.json();
                    console.log(res);
                    const verificationToken = res.verificationToken;
                    if (!verificationToken) {
                        console.error('Verification token is missing in the response');
                        setError('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
                        return;
                    }
                    const form = e.target;
                    form.reset();
                    setSuccessMessage('Überprüfen Sie Ihre Mail - Inbox!');
                    router.push(`/register/verification?verificationToken=${verificationToken}`);
                } else {
                    console.error('Error: Response is not JSON');
                }
            } else {
                console.error("Error:", response.status, response.statusText);
            }

        } catch (err) {
            console.error(err);
        }

    }

      // Fetch cities based on the selected country
      const fetchCities = async (country) => {
        if (!country) return; // Don't fetch if no country selected
    
        try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries');
            const data = await response.json();
            
            if (data && data.data) {
                // Filtere die Länder und deren Städte
                const filteredCountry = data.data.find((item) => item.country === country);
    
                if (filteredCountry) {
                    setState((prevState) => ({
                        ...prevState,
                        cities: filteredCountry.cities, // Städte des gewählten Landes
                    }));
                }
            }
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };
    
    
      // Fetch cities whenever the selected country changes
      useEffect(() => {
        fetchCities(state.country);
      }, [state.country]);

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
                model.scale.set(5, 5, 5); // Scale the model
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
    
        // Resize handler
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
    useEffect(() => {
        // Länder laden
        fetch('https://countriesnow.space/api/v0.1/countries/iso')
            .then(response => response.json())
            .then(data => {
                // Setze die Länder im State
                setCountries(data.data);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);


    const handleCheckChange = (event) => {
        const { name, checked } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
        console.log(state.termsAccepted)
    };
    const handleCountryChange = async (e) => {
        const value = e.target.value;
        setSelectedCountry(value);

        setState(prevState => ({
            ...prevState,
            country: value,
        }));

        

        try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ country: value }), 
            });

            const data = await response.json();
            setCities(data.data);
            setSelectedCity('');
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };
    const handleCityChange = (e) => {
        const value = e.target.value;

        setSelectedCity(value);

        setState(prevState => ({
            ...prevState,
            city: value,
        }));

        console.log(state);
    };

      
    return(
        <div className={classes.main}>
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
                    href="/"
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
                <section className={classes.register_section}>
                    <h1 className={`${roboto.className} ${classes.section_heading}`}>CREATE AN ACCOUNT</h1>
                    <form onSubmit={onSubmit} className={`${classes.below_content}`}>
                   {step === 1 && (<>
                                       <div className={`${classes.input__modifier}`}>
                                       <FormControl sx={{ m: 1, minWidth: 120}}>
                                                   <InputLabel id="demo-simple-select-helper-label">Titel</InputLabel>
                                                   <Select
                                                   className={classes.form_control}
                                                   labelId="demo-simple-select-helper-label"
                                                   id="demo-simple-select-helper"
                                                   value={state.title}
                                                   label="Titel"
                                                   name="title"
                                                   onChange={handleChangeState}
                                                   >
                                                   <MenuItem value="">
                                                       <em>None</em>
                                                   </MenuItem>
                                                   <MenuItem className={classes.option} value={"Dr."}>Dr.</MenuItem>
                                                   <MenuItem className={classes.option} value={"Prof. Dr."}>Prof. Dr.</MenuItem>
                                                   <MenuItem className={classes.option} value={"Dr. med."}>Dr. med.</MenuItem>
                                                   <MenuItem className={classes.option} value={"Dr. med. dent."}>Dr. med. dent.</MenuItem>
                                                   <MenuItem className={classes.option} value={"Prof. Dr. med."}>Prof. Dr. med.</MenuItem>
                                                   <MenuItem className={classes.option} value={"Dr. rer. nat."}>Dr. rer. nat.</MenuItem>
                                                   <MenuItem className={classes.option} value={"Oberarzt"}>Oberarzt</MenuItem>
                                                   <MenuItem className={classes.option} value={"Chefarzt"}>Chefarzt</MenuItem>
                                                   <MenuItem className={classes.option} value={"Assistenzarzt"}>Assistenzarzt</MenuItem>
                                                   <MenuItem className={classes.option} value={"Facharzt"}>Facharzt </MenuItem>
                                                   </Select>
                                                   <FormHelperText>Titel (Präfix) - Optional</FormHelperText>
                                           </FormControl>
                                       </div>
                                   <div className={classes.input__outer}>
                                   <div className={classes.input_container}>
                                   <label htmlFor="practice_name" className={classes.label}>
                                       <span className={classes.required}>*</span>
                                   </label>
                                       <input id="practice_name" className={`${lightRoboto.className} ${classes.submit_input}`} type="text"  name="practice_name" value={state.practice_name}
                                               onChange={handleChangeState} aria-autocomplete="none"placeholder="Praxis: "  required/>
                                       </div>
                                           <div className={classes.input_container}>
                                           <label htmlFor="first_name" className={classes.label}>
                                               <span className={classes.required}>*</span>
                                           </label>
                                           <input id="first_name" className={`${lightRoboto.className} ${classes.submit_input}`} type="text"  name="first_name" value={state.first_name}
                                                   onChange={handleChangeState} aria-autocomplete="none"placeholder="First Name"  required/>
                                           </div>
                                       </div>
                                       <div className={classes.input__outer}>
                                       <div className={classes.input_container}>
                                       <label htmlFor="surname" className={classes.label}>
                                           <span className={classes.required}>*</span>
                                       </label>
                                       <input id="surname" className={`${lightRoboto.className} ${classes.submit_input}`} type="text" name="surname" aria-autocomplete="none"  placeholder="Surname" value={state.surname} onChange={handleChangeState} required/>
                                       </div>
                                       <div className={classes.input_container}>
                                       <label htmlFor="date_picker" className={classes.label}>
                                           <span className={classes.required}>*</span>
                                       </label>
                                           <LocalizationProvider
                                           id="date_picker"
                                           sx={{width:"355px!important"}}
                                           dateAdapter={AdapterDayjs}
                                           className={custom.customTextField}
                                           >
                                           <DatePicker
                                           sx={{width:"355px!important"}}
                                               value={state.birth_date || null}
                                               onChange={(value) => {
                                                   setState({ ...state, birth_date: value });
                                                 }}
                                               minDate={dayjs().subtract(100, "years")}
                                               renderInput={(params) => (
                                               <TextField
                                                   {...params}
                                                   sx={{width:"355px!important"}}
                                                   className={custom.customTextField}/>
                                               )}                               className={custom.customTextField}/>
                                           </LocalizationProvider>
               
                                       </div>
                                       </div>
                                       <div className={classes.input__outer}>
                                       <div className={classes.input_container}>
                                       <label htmlFor="gender" className={classes.label}>
                                               <span className={classes.required}>*</span>
                                       </label>
                                       <FormControl id="gender" sx={{ m: 1, minWidth: 350 }}>
                                                   <InputLabel id="demo-simple-select-helper-label">Geschlecht</InputLabel>
                                                   <Select
                                                   labelId="demo-simple-select-helper-label"
                                                   id="demo-simple-select-helper"
                                                   value={state.gender}
                                                   label="Geschlecht"
                                                   name="gender"
                                                   onChange={handleChangeState}
                                                   >
                                                   <MenuItem className={classes.option} value={"Mann"}>Mann</MenuItem>
                                                   <MenuItem className={classes.option} value={"Frau"}>Frau</MenuItem>
                                                   </Select>
                                           </FormControl>
                                       </div>
               
                                    <div className={classes.input_container}>
                                    <label htmlFor="email" className={classes.label}>
                                       <span className={classes.required}>*</span>
                                   </label>
                                       <input id="email" className={`${lightRoboto.className} ${classes.submit_input} ${classes.space}`}  type="email" name="email" aria-autocomplete="none"   placeholder="Email" value={state.email} onChange={handleChangeState} required/>
                                   
                                      </div>
                                      </div>
                                      <div className={classes.input__outer}>
                                      <div className={classes.input_container}>
                                      <label htmlFor="phoneNumber" className={classes.label}>
                                           <span className={classes.required}>*</span>
                                       </label>
                                           <input id="phoneNumber" type="number" className={`${lightRoboto.className} ${classes.submit_input}`} name="phoneNumber"  placeholder="Telefonnummer" value={state.phoneNumber} onChange={handleChangeState} required maxlength="17"/>
                                      </div>
                                      <div className={classes.input_container}>
                                      <label htmlFor="country" className={classes.label}>
                                       <span className={classes.required}>*</span>
                                   </label>
                                   <select
                                               id="country"
                                               className={`${lightRoboto.className} ${classes.submit_input}`}
                                               name="country"
                                               value={selectedCountry}
                                               onChange={handleCountryChange}
                                               required
                                               >
                                               <option value="" disabled>Land</option>
                                               {countries.map((country, index) => (
                                                   <option className={classes.option} key={index} value={country.iso2}>
                                                   {country.name}
                                                   </option>
                                               ))}
                                               </select>
                                           </div>
                                           </div>
                                           <div className={classes.input__outer}>
                                           <div className={classes.input_container}>
                                           <label htmlFor="city" className={classes.label}>
                                               <span className={classes.required}>*</span>
                                           </label>
                                           <select  disabled={!selectedCountry} id="city" name='city' value={selectedCity} className={classes.submit_input} onChange={handleCityChange} required>
                                               <option value="" disabled className={classes.option}>City</option>
                                               {cities.map((city, index) => (
                                                   <option className={classes.option} key={index} value={city}>
                                                       {city}
                                                   </option>
                                               ))}
                                           </select>
                                       </div>
                                   
               
                                      <div className={classes.input_container}>
                                      <label htmlFor="address" className={classes.label}>
                                           <span className={classes.required}>*</span>
                                       </label>
                                               <input
                                                   id="address"
                                                   className={`${lightRoboto.className} ${classes.submit_input}`}
                                                   type="text"
                                                   name="address"
                                                   aria-autocomplete="none"
                                                   placeholder="Strasse, Strassennummer / Stiege / Türnummer"
                                                   value={state.address}
                                                   onChange={handleChangeState}
                                                   required
                                               />
                                       </div>  
                                       </div>  
                                       <div className={classes.input__outer}>
               
               
                                   <label className={classes.input_eye} style={{marginLeft: "0%"}}>
                                   <label htmlFor="password" className={classes.label}>
                                       <span className={classes.required}>*</span>
                                   </label>
                                       <input id="password" className={`${lightRoboto.className} ${classes.submit_input}`} type={visible ? "text" : "password"} aria-autocomplete="none"placeholder="Create password" name="password" value={state.password} onChange={handleChangeState} minLength={6} required/>
                    
                                   </label>
                                 <div>
                            <label style={{marginLeft: "0%"}}>
                            <label htmlFor="confirm" className={classes.label}>
                                   <span className={classes.required}>*</span>
                               </label>
                                   <input id="confirm" className={`${lightRoboto.className} ${classes.submit_input}`} type="password" name="confirmpassword" aria-autocomplete="none" value={state.confirmpassword} onChange={handleChangeState} placeholder="Confirm password" required/>
                   
                            </label>
                                 </div>
                                 </div>
                                 {emailError && <div className={classes.error_text}>{emailError}</div>}
                                 <div className={state.password !== state.confirmpassword ? classes.error : ''}>{state.password !== state.confirmpassword && "Passwort stimmt nicht überein."}</div>
                        
                        <Button onClick={handleNextStep}>Weiter →</Button>
                        </>)}
                        {step === 2 && (
                            <>
                             <div className={classes.input_container}>
                                      <label htmlFor="practice_address" className={classes.label}>
                                           <span className={classes.required}>*</span>
                                       </label>
                                               <input
                                                   id="practice_address"
                                                   className={`${lightRoboto.className} ${classes.submit_input}`}
                                                   type="text"
                                                   name="practice_address"
                                                   aria-autocomplete="none"
                                                   placeholder="Praxisadresse"
                                                   value={state.practice_address}
                                                   onChange={handleChangeState}
                                                   required
                                               />
                                       </div>  
                             <div className={classes.input_container}>

                                      <label htmlFor="practice_phoneNumber" className={classes.label}>
                                           <span className={classes.required}>*</span>
                                       </label>
                                           <input id="practice_phoneNumber" type="number" className={`${lightRoboto.className} ${classes.submit_input}`} name="practice_phoneNumber"  placeholder="Praxis-Kontaktnummer (Tel)" value={state.practice_phoneNumber} onChange={handleChangeState} required maxlength="17"/>
                                      </div>
                                
                            <div className={classes.terms_and_services_container}>
                        <label className={classes.container_label}>
                            <input
                            type="checkbox"
                            checked={state.termsAccepted}
                            name="termsAccepted"
                            onChange={handleCheckChange}
                            className={classes.check_input}
                            value={state.termsAccepted}
                            required
                            />
                            <div className={classes.checkmark}></div>
                        </label>
                        <span>
                        Ich stimme den <Link className={classes.outer_link_ref} href={"/terms_and_services"}><span className={classes.link}>Nutzungsbedingungen</span></Link> und der Verarbeitung meiner Daten gemäß der  <Link className={classes.outer_link_ref} href={"/privacy_policy"}><span className={classes.link}>Datenschutzrichtlinie</span></Link>.
                        </span>
                    </div>
                    <Button onClick={handlePreviousStep}>← Zurück</Button>
                    <button className={`${classes.btn} ${roboto.className}`} disabled={state.password != state.confirmpassword} type='submit'>Sign Up</button>
                            </>
                        )}
            <br/>
           <br/> 
{error && error.trim() !== "" && (
    <div className={classes.error_message}>
        {error}
    </div>
)}
                    </form>
                    <>
                        {successMessage && (
                            <div className={classes.successMessage}>
                                <span className={classes.success_message}>{successMessage}</span>
                            </div>
                        )}
                    </>
                    <br/>
                    <div className={`${classes.existingacc} ${roboto.className}` }>Sie besitzen schon ein Account? - <Link className={classes.outer_link_ref} href={"/login"}><span className={classes.underline}>Login</span></Link></div>

                </section>

                </div>
            </div>
        </div>
    );
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:884204f34ab6253306af32ce54d0a05753411e43ad41ad7f47656c98031445c1
size 38437
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
