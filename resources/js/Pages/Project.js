import React, { useEffect } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Logo from '@/Components/ApplicationLogo'
export default function Project(props) {

    window.addEventListener("scroll", function () {
        const toggleWrapper = document.querySelector('#toggle')
        var y = window.scrollY;
        if (y >= 300) {

            this.document.querySelector('.logo').classList.add('-mt-52')
            this.document.querySelector('.menu').classList.add('-mt-52')
            toggleWrapper.classList.add('-mt-52')
        } else {
            this.document.querySelector('.nav_contact_btn').classList.remove('sticky_bottom_btn')
            this.document.querySelector('.menu').classList.remove('-mt-52')
            this.document.querySelector('.logo').classList.remove('-mt-52')

            toggleWrapper.classList.remove('absolute')
            toggleWrapper.classList.remove('-mt-52')
        }
        if (y >= 400) {
            this.document.querySelector('.nav_contact_btn').classList.add('sticky_bottom_btn')
        }
        if (y >= 700) {
            toggleWrapper.classList.remove('-mt-52')

            toggleWrapper.classList.add('absolute')
        } else {

        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.document.querySelector('.nav_contact_btn').classList.add('hidden')
        } else {
            this.document.querySelector('.nav_contact_btn').classList.remove('hidden')
        }
    })
    function myFunction() {
        var element = document.querySelector('.main');
        const toggle = document.querySelector('.toggle-inner')
        const toggleWrapper = document.querySelector('#toggle')
        if (!element.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
        element.classList.toggle("dark-mode");
        toggle.classList.toggle('toggle-active')
        toggleWrapper.classList.toggle('dark-toggle')
    }
    useEffect(() => {
        const toggle = document.querySelector('.toggle-inner')
        const toggleWrapper = document.querySelector('#toggle')
        var element = document.querySelector('.main')
        // storing input name
        if (localStorage.getItem("theme") != null) {
            element.classList.toggle('dark-mode')
            toggle.classList.add('toggle-active')

            toggleWrapper.classList.add('dark-toggle')
        }
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <div className="relative wrapper  min-h-screen bg-fullPageBg">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href="/dashboard" className="text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                Log in
                            </Link>
                        </>
                    )}
                </div>
                <div className="fixed nav w-full top-9 z-10">
                    <div className="max-w-7xl mx-auto flex justify-end items-center">
                        <Link href="/" className="logo mr-9 transition-all duration-300">
                            <Logo />
                        </Link>
                        <div className="mr-auto"
                            id="toggle"
                            onClick={myFunction}
                        >
                            <div className="toggle-inner" />
                        </div>
                        <ul className="menu text-white flex items-center cl-effect-11 transition-all  duration-500">
                            <li className=" mr-16"><a href="" data-hover="Projects">Projects</a></li>
                            <li className=" mr-16"><a href="" data-hover="Articles">Articles</a></li>
                            <li className=" mr-16"><a href="" data-hover="Contact">Contact</a></li>

                        </ul>
                        <a href="#" className="nav_btn relative text-white z-10 nav_contact_btn transition-all duration-1000 flex justify-center items-center">
                            <span className="transition-all relative">Let's talk</span>
                            <svg className=" w-0 chat_icon transition-all" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 1L10 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 1L14 21L10 12L1 8L21 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>


                <div className="hero w-full bg-heroBg ">
                    <div className="max-w-7xl mx-auto relative pt-6">

                        <svg className="dec absolute right-0 top-1/2 z-0 opacity-10 transform -translate-y-1/2" width="500" height="500" viewBox="0 0 57 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.7124 13.8948L14.8556 21.0379L7.7124 28.1811L0.569253 21.0379L7.7124 13.8948Z" fill="#CAB4F6" />
                            <path d="M14.8555 6.75162L21.9986 13.8948L14.8555 21.0379L7.71232 13.8948L14.8555 6.75162Z" fill="#AE8EF4" />
                            <path d="M21.9987 13.8947L29.1418 21.0379L21.9987 28.181L14.8555 21.0379L21.9987 13.8947Z" fill="#7D60E8" />
                            <path d="M29.1418 21.0379L36.2849 28.1811L29.1418 35.3242L21.9986 28.1811L29.1418 21.0379Z" fill="#5C46DC" />
                            <path d="M36.2849 13.8948L43.4281 21.0379L36.2849 28.1811L29.1418 21.0379L36.2849 13.8948Z" fill="#4094F4" />
                            <path d="M49.8569 0.322662L57 7.46581L49.8569 14.609L42.7137 7.46581L49.8569 0.322662Z" fill="#8FD5F9" />
                        </svg>

                        {/* <img className="absolute right-0 top-1/2 transform -translate-y-1/2" src="../../images/hero-dec.svg" alt="" /> */}
                        <div className="nav flex justify-between items-center">

                        </div>
                        <div className="hero_content flex flex-col items-center text-white pt-72 pb-48">
                            <div className=" relative">
                                <h2 className="hero_heading mb-10">Beautiful Landing Page</h2>
                                <p className="px-44 text-center text-lightGrayTextColor text-lg">
                                    Has been working in the web solutions industry for more than 13 years. Some of his projects receive more than 0.5 billion views worldwide each month.
                                </p>

                            </div>
                        </div>
                        <div className="hero_bottom">
                            <div className="flex justify-between items-center  pb-12">
                                <div>
                                    <p><span className="uppercase temp_role mr-3">role</span> <span className="my_role text-lightGrayTextColor">Front-end</span></p>
                                </div>
                                <div>
                                    <a href="#" style={{ '--btnBorder': '#4094f4' }} className="project_ext_link relative font-medium text-base w-40 text-lightGrayTextColor z-10 transition-all duration-1000 flex justify-center items-center">Visit Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="main transition duration-200transition duration-200">
                    <div className="max-w-7xl mx-auto py-24 pb-0">
                        <section className="  mb-32">
                            <div className="section_header mb-32 relative text-center">
                                {/*  <h4 className="section_f">Case study</h4> */}
                                <h2 className="section_title inline relative">
                                    <span className="relative z-10">Case </span>
                                    <span className="title_underlined relative z-10">study</span>
                                    <img className="z-0 w-16 absolute top-0 -right-8" src="../../images/shape.svg" alt="" />
                                </h2>

                            </div>
                            <div className="process flex">
                                <div className="what_i_did flex-1 mr-32">
                                    <h3 className="text-2xl font-medium text-grayTextColor mb-6">In summary, what i did :</h3>
                                    <div className="process_steps text-xl font-normal text-grayTextColor mb-20">
                                        <p className="text-lg">I was responsible of building the entire UI using HTML / CSS / JS.</p>
                                        <p className="text-lg">The designer provided me with desktop layouts for each page and relied on me to build suitable layouts for tablet and mobile devices.</p>
                                        <p className="text-lg">I used Tailwindcss which is a utility-first CSS framework combined with autoprefixer for a faster developement process.</p>
                                    </div>

                                    <div className="techs_used flex">
                                        <div className="tech_used inline-block py-2 px-6 rounded-full font-normal text-base mr-7" style={{ '--btnBorder': '#4094f4' }}>HTML</div>
                                        <div className="tech_used inline-block py-2 px-6 rounded-full font-normal text-base mr-7" style={{ '--btnBorder': '#4094f4' }}>CSS</div>
                                        <div className="tech_used inline-block py-2 px-6 rounded-full font-normal text-base mr-7" style={{ '--btnBorder': '#4094f4' }}>JS</div>
                                        <div className="tech_used inline-block py-2 px-6 rounded-full font-normal text-base mr-7" style={{ '--btnBorder': '#4094f4' }}>TailwindCss</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="colors grid grid-cols-2 gap-20 mb-14">
                                        <div className="w-24 text-center">
                                            <div className="project_color mb-4" style={{ '--projectColor': '#4094f4' }}></div>
                                            <span className="color_hex" style={{ '--projectColor': '#4094f4' }}>#4094f4</span>
                                        </div>
                                        <div className="w-24 text-center">
                                            <div className="project_color mb-4" style={{ '--projectColor': '#5C46DC' }}></div>
                                            <span className="color_hex" style={{ '--projectColor': '#5C46DC' }}>#5C46DC</span>
                                        </div>
                                    </div>
                                    <div className="fonts_used">
                                        <h4 className=" text-xl font-medium text-grayTextColor mb-4">Fonts used :</h4>
                                        <ul className="font-light text-lg mb-4">
                                            <li className="mb-1">Barlow Condensed</li>
                                            <li className="mb-1">Space Grotesk</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="project_images mb-40">
                            <img src="../../images/projects/landingPageIndex.jpg" alt="" />
                            <img src="../../images/projects/Volcan.jpg" alt="" />
                        </section>
                        {/* Contact me */}
                        <section className="contact_me text-center pb-24 relative">
                            {/*  <img className="absolute w-full z-0 opacity-30" src="../../images/wave.svg" alt="" /> */}
                            <div className=" max-w-3xl mx-auto z-10 relative">
                                <div className="section_header mb-24 ">
                                    <h2 className="section_title relative z-10">Let’s Work Together</h2>
                                    <span className="sub_headline">And make something speciale.</span>
                                </div>
                                <div>
                                    <div className="grid grid-cols-2 gap-x-6 mb-5">
                                        <input type="text" />
                                        <input type="text" />
                                    </div>
                                    <textarea name="message" id="" cols="30" rows="10" className="w-full mb-4"></textarea>
                                    <a href="#" className=" relative text-heroBg z-10 footer_contact_btn transition-all duration-1000 flex justify-center items-center">
                                        <span className="transition-all relative">Send message</span>

                                    </a>
                                </div>

                            </div>
                        </section>
                    </div>
                </main>

            </div>
        </>
    );
}
