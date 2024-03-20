'use client'
import { useEffect, useState } from "react"
import styles from "../styles/Color.module.css"



//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

export function Cores() {

    const geraCor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()
    }

    const [isClient, setIsClient] = useState(false)

    const [cores, setCores] = useState([
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        }
    ])



    function geraPaleta() {
        const novoState = [...cores]
        for (let i = 0; i < novoState.length; i++) {
            if (!novoState[i].isblocked) {
                novoState[i].cor = geraCor()
            }
            setCores(novoState);
        }
        console.log(cores)
    }



    useEffect(() => { setIsClient(true) }, [])

    useEffect(() => {

        function handleKeyPress(event) {
            if (event.key === ' ') {
                event.preventDefault()
                geraPaleta();
            }
        }
        document.removeEventListener("keydown", handleKeyPress);
        document.addEventListener("keydown", handleKeyPress);

    }, [cores]);

   

        function getContrastYIQ(hex) {

            // Function to convert hexadecimal to YIQ directly
            function hexToYIQ(hex) {
                // Remove '#' if it's there
                hex = hex.replace('#', '');

                // Extract R, G, and B components from hexadecimal
                var r = parseInt(hex.substr(0, 2), 16);
                var g = parseInt(hex.substr(2, 2), 16);
                var b = parseInt(hex.substr(4, 2), 16);

                // Calculate YIQ directly
                return (r * 299 + g * 587 + b * 114) / 1000;
            }

            // Calculate YIQ directly
            var yiq = hexToYIQ(hex);

            // Determine background type
            return yiq >= 128 ? "#000" : "#fff";
        }

  




    function handleClick(index) {
        setCores(pCores => pCores.map((c, i) => ({
            ...c,
            isblocked: i === index ? !c.isblocked : c.isblocked
        })))
    }



    return (<>{isClient ?

        <div className={styles.container}>

            <div className={styles.wrapperColor}>
                {cores.map((el, i) =>
                    <div
                        className={styles.boxColor}

                        style={{ backgroundColor: el.cor,
                        color: getContrastYIQ(el.cor) }}
                        key={i}>

                        <p>{el.cor}</p>
                        <button 
                        style={{ color: getContrastYIQ(el.cor),
                        borderColor: getContrastYIQ(el.cor)}}
                        className={styles.btn} onClick={() => handleClick(i)}>{el.isblocked ? "desbloquear" : "bloquear"}</button>
                    </div>
                    
                )}</div>

            <button onClick={() => geraPaleta()}
                className={styles.btnGerarpaleta}> Gerar paleta</button>

        </div> : null}
    </>
    )
}