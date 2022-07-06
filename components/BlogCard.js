import Link from 'next/link'

export function BlogCard(props){
    return(
        <div className='postCard w-1/3 text-gray-400 saturate-50 cursor-pointer hover:saturate-100'>
            <Link href={'/posts/'+props.slug}>
                <div className='rounded-2xl overflow-hidden my-10'>
                    <img src={props.coverPhoto.url} className="h-32 w-full"/>
                    <div className='py-2 pb-5 bg-[#1e293b]'>
                        <p className='font-Finlandica px-2 text-xl'>{props.title}</p>    
                        <div className='pt-5 px-2 flex justify-between'>
                            <p>{props.author.name}</p>
                            <p>{props.datePublished}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}