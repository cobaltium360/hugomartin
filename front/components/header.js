import Head from 'next/head'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
export default function Header() {

    useEffect(()=>{
        if (localStorage.getItem("token")) {
            setLogged(true)
        }
      }, [])

    const router = useRouter();
    const [tel, setTel] = useState(false)
    const [logged, setLogged] = useState(false)
    function visible() {
        if (tel) {
            setTel(false)
        } else {
            setTel(true)
        }
    }

    function lougout(){
        if (typeof window !== 'undefined') {
            window.localStorage.clear()
            setLogged(false)
            router.push('/login')
        }
    }

    return (
        <div>
            <div className='container_header'>
                <h2>Hugo Martin</h2>
                <h2 onClick={visible}>☰</h2>
                {tel && <div className='container_nav_tel'>
                    <h2 className="h2_responsive_header_cross" onClick={visible}>✖</h2>
                    <Link href="/">
                        <div className='link_header'>
                            <p className={router.pathname == "/" ? "active_header" : "inactive_header"}>Accueil</p>
                        </div>
                    </Link>
                    {/* {logged && <Link href="/profile">
                        <div className='link_header'>
                            <p className={router.pathname == "/profile" ? "active_header" : "inactive_header"}>profile</p>
                        </div>
                    </Link>} */}
                    {logged && 
                        <div className='link_header' onClick={lougout}>
                            <p className="inactive_header">lougout</p>
                        </div>
                    }
                    {!logged && <Link href="/login">
                        <div className='link_header'>
                            <p className={router.pathname == "/login" ? "active_header" : "inactive_header"}>Login</p>
                        </div>
                    </Link>}
                    {!logged && <Link href="/inscription">
                        <div className='link_header'>
                            <p className={router.pathname == "/inscription" ? "active_header" : "inactive_header"}>Inscription</p>
                        </div>
                    </Link>}
                </div>}
            </div>
        </div>
    )
}