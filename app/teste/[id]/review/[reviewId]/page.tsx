export default function Review({params}:{
    params:{
        id: string,
        reviewId: string
    }
}){
    return <h1>review {params.reviewId}, do item {params.id}</h1>
}