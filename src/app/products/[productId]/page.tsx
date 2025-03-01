export default function ProductDetails({params}:{
    params:{productId: string};
})
{
    return (

    <p>product details about {params.productId}</p>
    );
}