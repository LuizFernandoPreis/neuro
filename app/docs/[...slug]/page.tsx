export default function Docs({params}:{
    params:{
        slug: string[]
    }
}){
    return <h1>docs {params.slug[2]}</h1>
}