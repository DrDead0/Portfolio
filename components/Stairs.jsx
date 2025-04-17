import {animate, motion} from "framer-motion";


const stairAnimation ={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%",]
    }
}


const reverseIndex = (index)=>{
    const totalStep = 6;
    return totalStep - index - 1;
}

const Stairs =()=>{
    return(
        <>
        {/* render 6 motion divs , each representing a step of the stairs.
            Each will have the same animation defined by  the stairAnimation
            object.
            the delay for each div is dynamically  based on it reversed index
            Creating a staggered effect with decreasing delay for each subsequent steps
        */}
            {[...Array(6)].map((_, index) => (
                <motion.div 
                    key={index} 
                    variants={stairAnimation} 
                    initial="initial" 
                    animate="animate" 
                    exit="exit" 
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index)*0.1
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </>
        

    ) 
}   
export default Stairs;

