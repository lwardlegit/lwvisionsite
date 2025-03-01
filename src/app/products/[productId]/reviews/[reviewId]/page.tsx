import {notFound} from "next/navigation";

export default function ReviewDetails({params}:{
    params:{reviewId: string};
})
{
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return (

    <p>reviews about {params.reviewId}</p>
    );
}