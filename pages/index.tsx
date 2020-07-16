import Link from "next/link";

import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return(
        <MainLayout title={'Home Page'}>

            <h1>Hello Next.js!</h1>

            <p><Link href={'/posts'}><a>Post</a></Link></p>
        </MainLayout>

    )
}