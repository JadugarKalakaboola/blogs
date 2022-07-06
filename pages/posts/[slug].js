import Image from 'next/image'
import {GraphQLClient, gql} from 'graphql-request'
import styles from '../../styles/Home.module.css'


const graphcms = new GraphQLClient(process.env.GRAPH_KEY)

const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}){
            title,
            datePublished,
            content{
                html
            },
            slug
            id,
            coverPhoto{
                url
            }
            author{
            name,
            avatar {
                url
                }
            }
        }
    }
`

const SLUGLIST = gql`
  {
    posts{
        slug
    }
  }
`

export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUGLIST);
    return{
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug});
    const post = data.post;
    return{
        props: {
            post, 
        }, 
        revalidate: 60,
    };
}

export default function BlogPost({post}){
    return(
        <div className='text-gray-300 font-Finlandica w-11/12 lg:w-7/12 mx-auto'>
            <div className='text-gray-300 font-bold text-4xl py-10 text-center font-Finlandica'>{post.title}</div>
            <div dangerouslySetInnerHTML={{__html: post.content.html}} className="tracking-wide leading-8 py-24">

            </div>
        </div>
    )
}