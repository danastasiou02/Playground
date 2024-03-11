"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {FormEvent,useState} from "react";

export default function Home() {
  const [email,setemail]=useState("");
  const [tel,settel]=useState("");
  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault();
  };
  return (
    <div className={styles.bg}>
              
      
      <div className={styles.center}>
       
    
       <div className={styles.Signin}>
         <div className={styles.titles}>
               <Image 
               className={styles.logo}
               src="/images/ngtlogo.png"
               alt="NGT logo"
               width={230}
               height={230}
               ></Image>
               <h1 className={styles.info}>Enter your info</h1>
           
           <form onSubmit={handleSubmit}>
             <div className={styles.inputs}>  
                   
               <div>
                 <input
                 className={styles.inputs1}
                 type="email"
                 value={email}    
                 onChange={(e)=>setemail(e.target.value)}
                 placeholder="email.."      
                 />
               </div>
               <div>
                 <input
                 className={styles.inputs1}
                 type="tel"
                 value={tel}
                 onChange={(e)=>settel(e.target.value)}
                 placeholder="telephone.."
                 />
                </div>
          
                <button
                 className={styles.button}
                 type="submit"
                >
                  Sign-In
                </button>
              </div>  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
