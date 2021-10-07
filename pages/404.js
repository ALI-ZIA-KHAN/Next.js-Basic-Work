import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router'

const NotFound =()=>{
 
    const router=useRouter();

  useEffect(()=>{
    
// console.log("useeffct run")


setTimeout(()=>{
//   router.go(-1) like go back one if + then move one forward


router.push('/');
},3000)

  },[])


    return(
        <div className="not-found">
            <h1>Ooops..</h1>
            <p>This page doesn't exist</p>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;