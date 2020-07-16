import Link from "next/link";
import Head from "next/head";



export function MainLayout({children, title='Next App'}) {
    return(
        <>
            <Head>
                <title>{title}| Next Course</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"/>
            </Head>
            <nav>
               <Link href={'/'}><a>Home</a></Link>
               <Link href={'/posts/add'}><a>Add Post</a></Link>
               <Link href={'/posts'}><a>Post</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {
                    `
                    nav{
                    position:fixed;
                    height:60px;
                    left:0;
                    top:0;
                    right:0;
                    background:darkblue;
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    }
                    
                    nav a{
                    color:#fff;
                    text-decoration:none;
                    }
                    
                    main{
                    margin-top:60px;
                    padding:1rem;
                    }
                    
                    
                   `}
            </style>
        </>
    )
}