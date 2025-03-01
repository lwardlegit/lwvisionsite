"use client"
import {useRouter} from "next/navigation";

export default function orderProduct({params}: {params: {id: string}}) {
const router = useRouter();

    const handleOrder = async () =>{
        try {
            const res = await fetch('https://localhost:8080');
            const data = await res.json();
            console.log(`order placed successfully: ${data}`);
            router.push("/");
        }catch(err){
            throw new Error(err);
        }
    }
    return <>
    <h2>order {params.id}</h2>
        <p>Cost per unit: </p>
        <button onClick={handleOrder}>Place order</button>
    </>
}