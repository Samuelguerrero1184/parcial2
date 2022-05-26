import Head from 'next/head' 

function Header(props){
    return(
        <Head>
            <title>{props.title}</title>
        </Head>
    )
}

export default Header