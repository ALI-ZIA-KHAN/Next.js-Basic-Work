export const getStaticPaths = async ()=>{

    //to tell next first how many pags to be made

    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    const paths=data.map(ninja=>{
        return {
            params:{id:ninja.id.toString()}
        }
    })

    return{
        paths,  //next will check it by paths after running this function
        fallback:false
    }
}


export const getStaticProps = async (context) =>{

//now this function will run times equal to path

   const id=context.params.id;
   const res=await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
   const data=await res.json();

   return{
       props:{
           ninja:data
       }
   }
}


const Details =({ninja})=>{


    // then it gets the tgat no ogf pages ready
    return(
       <div>
           <h1>{ninja.name}</h1>
           <p>{ninja.email}</p>
           <p>{ninja.website}</p>
           <p>{ninja.address.city}</p>
      </div>
    )
}

export default  Details;