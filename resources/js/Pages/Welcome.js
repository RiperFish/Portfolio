import React, { useEffect } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Logo from '@/Components/ApplicationLogo'
export default function Welcome(props) {

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
            <div className="relative  min-h-screen  ">{/* bg-fullPageBg */}
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
                <div className="fixed nav w-full top-9 z-10 ">
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

                {/* Hero */}
                <div className="hero w-full bg-heroBg  pb-20">
                    <div className="max-w-7xl mx-auto relative pt-6">
                        <svg className="dec absolute right-0 top-1/2 transform -translate-y-1/2" width="205" height="404" viewBox="0 0 205 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect id="rect_8" opacity="0.2" x="75" y="404" width="75" height="75" rx="20" transform="rotate(-180 75 404)" fill="#C4C4C4" fill-opacity="0.1" />
                            <rect id="rect_7" opacity="0.2" x="140" y="341" width="75" height="75" rx="20" transform="rotate(-180 140 341)" fill="#C4C4C4" fill-opacity="0.1" />
                            <rect id="rect_5" opacity="0.2" x="76" y="203" width="75" height="75" rx="20" transform="rotate(90 76 203)" fill="#C4C4C4" fill-opacity="0.1" />
                            <rect id="rect_6" opacity="0.2" x="205" y="278" width="75" height="75" rx="20" transform="rotate(-180 205 278)" fill="#C4C4C4" fill-opacity="0.1" />
                            <rect id="rect_1" opacity="0.2" x="130" width="75" height="75" rx="20" fill="#C4C4C4" fill-opacity="0.1" />
                            <rect id="rect_2" opacity="0.2" x="65" y="63" width="75" height="75" rx="20" fill="#C4C4C4" fill-opacity="0.1" />
                            <rect id="rect_4" opacity="0.2" x="129" y="201" width="75" height="75" rx="20" transform="rotate(-90 129 201)" fill="#C4C4C4" fill-opacity="0.1" />
                            <rect id="rect_3" opacity="0.2" y="126" width="75" height="75" rx="20" fill="#C4C4C4" fill-opacity="0.1" />
                        </svg>
                        {/* <img className="absolute right-0 top-1/2 transform -translate-y-1/2" src="../../images/hero-dec.svg" alt="" /> */}
                        <div className="nav flex justify-between items-center">

                        </div>
                        <div className="hero_content flex flex-col items-center text-white justify-center pt-20">
                            <div className="">
                                <span className="hero_name">Mustapha Benfetta</span>
                                <h2 className="hero_heading">Interactive Web Developer.</h2>
                                <span className="hero_role">Front-end, Back-end</span>
                                <p className="hero_headline mb-16">I will help you adapt in a connected world. </p>
                                <div className="w-full text-center">
                                    <a href="#" className="hero_btn px-10 py-2 inline-block">My work <img className="inline ml-5" src="../../images/btn-arrow.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="hero_bottom">
                            <div className="flex items-center">
                                <div className="arrow"><img className="w-full max-w-none" src="../../images/arrow-right.svg" alt="" /></div>
                                <div className="flex justify-between flex-1">
                                    <a href="#" className="mx-auto social_links" ><img src="../../images/facebook.svg" alt="" /></a>
                                    <a className="social_links" href="#"><img src="../../images/linkedin.svg" alt="" /></a>
                                </div>

                            </div>

                            <div className="hero_scroll absolute -bottom-20 left-6">
                                <div className="flex justify-center mb-1">
                                    <svg id="mouse_wheel" width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="15" height="24" rx="7.5" stroke="#F1F1F1" />
                                        <circle cx="8" cy="6" r="2" fill="#ECECEC" />
                                    </svg>
                                </div>
                                <span className="block text-white mb-3 font-light opacity-60 text-sm">Scroll</span>
                                <div className="flex justify-center"><img src="../../images/line.svg" alt="" /></div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Main */}
                <main className="main transition duration-200">
                    <div className="max-w-7xl mx-auto py-24 pb-0">
                        {/* Projekts */}
                        <section className=" text-center mb-40">
                            {/* Section Header */}
                            <div className="section_header mb-24 relative">
                                <h4 className="section_f">Case studies</h4>
                                <h2 className="section_title inline relative">
                                    <span className="relative z-10">Latest </span>
                                    <span className="title_underlined relative z-10">Work</span>
                                    <img className="z-0 w-16 absolute top-0 -right-8" src="../../images/shape.svg" alt="" />
                                </h2>

                            </div>
                            {/* Projekt : Sauna reservation */}
                            <div className="project w-full flex mb-24 relative">
                                <div className="project_img sauna_img mr-16">
                                    {/* <img className="h-full object-cover" src="../../images/projects/Sauna.png" alt="" /> */}
                                </div>
                                <div className="project_infos text-left flex flex-col py-12">
                                    <span className="project_f mb-7">Sauna, Night stay</span>
                                    <a href="https://www.pasakupirtele.lt/" className="project_title mb-10" target="_blank">
                                        <div> Fabulous sauna -</div>
                                        <div>Peace of mind</div>
                                        <div>and soul</div>
                                    </a>
                                    {/* <div className="project_short_desc mb-11 font-medium text-xl">UI/UX, Full-stack WordPress, Custom Plugin</div> */}
                                    <div className="project_short_desc mb-auto">Full-stack WordPress developer to design & build a custom reservation system plugin.</div>
                                    {/* <div className="project_my_role mb-12">Front-end</div> */}
                                    <div className="project_techs flex">
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.105" r="23" fill="#606060" />
                                                <path d="M35.1488 21.49L31.4408 34H29.1188L26.4908 24.532L23.7008 34L21.3968 34.018L17.8508 21.49H20.0288L22.6208 31.678L25.4288 21.49H27.7328L30.3428 31.624L32.9528 21.49H35.1488Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">WordPress</div>

                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M24.1603 21.49V30.508C24.1603 31.624 23.8183 32.506 23.1343 33.154C22.4623 33.802 21.5743 34.126 20.4703 34.126C19.3663 34.126 18.4723 33.802 17.7883 33.154C17.1163 32.506 16.7803 31.624 16.7803 30.508H18.8503C18.8623 31.06 19.0003 31.498 19.2643 31.822C19.5403 32.146 19.9423 32.308 20.4703 32.308C20.9983 32.308 21.4003 32.146 21.6763 31.822C21.9523 31.486 22.0903 31.048 22.0903 30.508V21.49H24.1603ZM31.6204 34.126C30.7804 34.126 30.0244 33.982 29.3524 33.694C28.6804 33.394 28.1524 32.974 27.7684 32.434C27.3844 31.894 27.1924 31.264 27.1924 30.544H29.3884C29.4364 31.084 29.6464 31.528 30.0184 31.876C30.4024 32.224 30.9364 32.398 31.6204 32.398C32.3284 32.398 32.8804 32.23 33.2764 31.894C33.6724 31.546 33.8704 31.102 33.8704 30.562C33.8704 30.142 33.7444 29.8 33.4924 29.536C33.2524 29.272 32.9464 29.068 32.5744 28.924C32.2144 28.78 31.7104 28.624 31.0624 28.456C30.2464 28.24 29.5804 28.024 29.0644 27.808C28.5604 27.58 28.1284 27.232 27.7684 26.764C27.4084 26.296 27.2284 25.672 27.2284 24.892C27.2284 24.172 27.4084 23.542 27.7684 23.002C28.1284 22.462 28.6324 22.048 29.2804 21.76C29.9284 21.472 30.6784 21.328 31.5304 21.328C32.7424 21.328 33.7324 21.634 34.5004 22.246C35.2804 22.846 35.7124 23.674 35.7964 24.73H33.5284C33.4924 24.274 33.2764 23.884 32.8804 23.56C32.4844 23.236 31.9624 23.074 31.3144 23.074C30.7264 23.074 30.2464 23.224 29.8744 23.524C29.5024 23.824 29.3164 24.256 29.3164 24.82C29.3164 25.204 29.4304 25.522 29.6584 25.774C29.8984 26.014 30.1984 26.206 30.5584 26.35C30.9184 26.494 31.4104 26.65 32.0344 26.818C32.8624 27.046 33.5344 27.274 34.0504 27.502C34.5784 27.73 35.0224 28.084 35.3824 28.564C35.7544 29.032 35.9404 29.662 35.9404 30.454C35.9404 31.09 35.7664 31.69 35.4184 32.254C35.0824 32.818 34.5844 33.274 33.9244 33.622C33.2764 33.958 32.5084 34.126 31.6204 34.126Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">JavaScript</div>
                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            {/* <img className="w-14 mb-2" src="../../images/php_icon.svg" alt="" /> */}
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M20.5472 25.216C20.5472 25.852 20.3972 26.452 20.0972 27.016C19.7972 27.58 19.3172 28.042 18.6572 28.402C17.9972 28.75 17.1512 28.924 16.1192 28.924H13.8512V34H11.7992V21.49H16.1192C17.0792 21.49 17.8892 21.658 18.5492 21.994C19.2212 22.318 19.7192 22.762 20.0432 23.326C20.3792 23.89 20.5472 24.52 20.5472 25.216ZM16.1192 27.25C16.8992 27.25 17.4812 27.076 17.8652 26.728C18.2492 26.368 18.4412 25.864 18.4412 25.216C18.4412 23.848 17.6672 23.164 16.1192 23.164H13.8512V27.25H16.1192ZM32.4943 21.49V34H30.4423V28.528H24.5563V34H22.5043V21.49H24.5563V26.854H30.4423V21.49H32.4943ZM43.9437 25.216C43.9437 25.852 43.7937 26.452 43.4937 27.016C43.1937 27.58 42.7137 28.042 42.0537 28.402C41.3937 28.75 40.5477 28.924 39.5157 28.924H37.2477V34H35.1957V21.49H39.5157C40.4757 21.49 41.2857 21.658 41.9457 21.994C42.6177 22.318 43.1157 22.762 43.4397 23.326C43.7757 23.89 43.9437 24.52 43.9437 25.216ZM39.5157 27.25C40.2957 27.25 40.8777 27.076 41.2617 26.728C41.6457 26.368 41.8377 25.864 41.8377 25.216C41.8377 23.848 41.0637 23.164 39.5157 23.164H37.2477V27.25H39.5157Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">PHP</div>
                                        </div>
                                    </div>
                                    <div className=" absolute top-8 right-0 flex">
                                        <a href="https://www.pasakupirtele.lt/" className="project_links mr-9" target="_blank">
                                            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">#454545
                                                <path d="M29 24.0261V37.5518C29 38.7476 28.6067 39.8944 27.9065 40.7399C27.2064 41.5854 26.2568 42.0604 25.2667 42.0604H4.73333C3.74319 42.0604 2.7936 41.5854 2.09347 40.7399C1.39333 39.8944 1 38.7476 1 37.5518V12.7547C1 11.5589 1.39333 10.4121 2.09347 9.56663C2.7936 8.7211 3.74319 8.24609 4.73333 8.24609H15.9333" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path id="arrow_head" d="M24 1H35V14.2845" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 26.361L35 1" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                        {/*  <a href="#" className="project_links mr-9"><img src="../../images/file.svg" alt="" /></a>
                                    <a href="#" className="project_links"><img src="../../images/link.svg" alt="" /></a> */}
                                    </div>
                                </div>
                            </div>
                            {/* Projekt : Eureka */}
                            <div className="project w-full flex mb-24 relative">
                                <div className="project_img eureka_img mr-16">
                                    {/* <img className="h-full object-cover" src="../../images/projects/eureka.png" alt="" /> */}
                                </div>
                                <div className="project_infos text-left flex flex-col py-12">
                                    <span className="project_f mb-7">Private School</span>
                                    <a href="https://eurekamokykla.lt/en/" className="project_title mb-10" target="_blank">
                                        <div>Eureka Early Education </div>
                                        <div>School</div>

                                    </a>
                                    {/* <div className="project_short_desc mb-11 font-medium text-xl">Full-stack WordPress, Responsive Desg</div> */}
                                    <div className="project_short_desc mb-auto">Full-stack WordPress developer, Responsive Design.</div>
                                    {/* <div className="project_my_role mb-12">Front-end</div> */}
                                    <div className="project_techs flex">
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.105" r="23" fill="#606060" />
                                                <path d="M35.1488 21.49L31.4408 34H29.1188L26.4908 24.532L23.7008 34L21.3968 34.018L17.8508 21.49H20.0288L22.6208 31.678L25.4288 21.49H27.7328L30.3428 31.624L32.9528 21.49H35.1488Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">WordPress</div>

                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M24.1603 21.49V30.508C24.1603 31.624 23.8183 32.506 23.1343 33.154C22.4623 33.802 21.5743 34.126 20.4703 34.126C19.3663 34.126 18.4723 33.802 17.7883 33.154C17.1163 32.506 16.7803 31.624 16.7803 30.508H18.8503C18.8623 31.06 19.0003 31.498 19.2643 31.822C19.5403 32.146 19.9423 32.308 20.4703 32.308C20.9983 32.308 21.4003 32.146 21.6763 31.822C21.9523 31.486 22.0903 31.048 22.0903 30.508V21.49H24.1603ZM31.6204 34.126C30.7804 34.126 30.0244 33.982 29.3524 33.694C28.6804 33.394 28.1524 32.974 27.7684 32.434C27.3844 31.894 27.1924 31.264 27.1924 30.544H29.3884C29.4364 31.084 29.6464 31.528 30.0184 31.876C30.4024 32.224 30.9364 32.398 31.6204 32.398C32.3284 32.398 32.8804 32.23 33.2764 31.894C33.6724 31.546 33.8704 31.102 33.8704 30.562C33.8704 30.142 33.7444 29.8 33.4924 29.536C33.2524 29.272 32.9464 29.068 32.5744 28.924C32.2144 28.78 31.7104 28.624 31.0624 28.456C30.2464 28.24 29.5804 28.024 29.0644 27.808C28.5604 27.58 28.1284 27.232 27.7684 26.764C27.4084 26.296 27.2284 25.672 27.2284 24.892C27.2284 24.172 27.4084 23.542 27.7684 23.002C28.1284 22.462 28.6324 22.048 29.2804 21.76C29.9284 21.472 30.6784 21.328 31.5304 21.328C32.7424 21.328 33.7324 21.634 34.5004 22.246C35.2804 22.846 35.7124 23.674 35.7964 24.73H33.5284C33.4924 24.274 33.2764 23.884 32.8804 23.56C32.4844 23.236 31.9624 23.074 31.3144 23.074C30.7264 23.074 30.2464 23.224 29.8744 23.524C29.5024 23.824 29.3164 24.256 29.3164 24.82C29.3164 25.204 29.4304 25.522 29.6584 25.774C29.8984 26.014 30.1984 26.206 30.5584 26.35C30.9184 26.494 31.4104 26.65 32.0344 26.818C32.8624 27.046 33.5344 27.274 34.0504 27.502C34.5784 27.73 35.0224 28.084 35.3824 28.564C35.7544 29.032 35.9404 29.662 35.9404 30.454C35.9404 31.09 35.7664 31.69 35.4184 32.254C35.0824 32.818 34.5844 33.274 33.9244 33.622C33.2764 33.958 32.5084 34.126 31.6204 34.126Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">JavaScript</div>
                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            {/* <img className="w-14 mb-2" src="../../images/php_icon.svg" alt="" /> */}
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M20.5472 25.216C20.5472 25.852 20.3972 26.452 20.0972 27.016C19.7972 27.58 19.3172 28.042 18.6572 28.402C17.9972 28.75 17.1512 28.924 16.1192 28.924H13.8512V34H11.7992V21.49H16.1192C17.0792 21.49 17.8892 21.658 18.5492 21.994C19.2212 22.318 19.7192 22.762 20.0432 23.326C20.3792 23.89 20.5472 24.52 20.5472 25.216ZM16.1192 27.25C16.8992 27.25 17.4812 27.076 17.8652 26.728C18.2492 26.368 18.4412 25.864 18.4412 25.216C18.4412 23.848 17.6672 23.164 16.1192 23.164H13.8512V27.25H16.1192ZM32.4943 21.49V34H30.4423V28.528H24.5563V34H22.5043V21.49H24.5563V26.854H30.4423V21.49H32.4943ZM43.9437 25.216C43.9437 25.852 43.7937 26.452 43.4937 27.016C43.1937 27.58 42.7137 28.042 42.0537 28.402C41.3937 28.75 40.5477 28.924 39.5157 28.924H37.2477V34H35.1957V21.49H39.5157C40.4757 21.49 41.2857 21.658 41.9457 21.994C42.6177 22.318 43.1157 22.762 43.4397 23.326C43.7757 23.89 43.9437 24.52 43.9437 25.216ZM39.5157 27.25C40.2957 27.25 40.8777 27.076 41.2617 26.728C41.6457 26.368 41.8377 25.864 41.8377 25.216C41.8377 23.848 41.0637 23.164 39.5157 23.164H37.2477V27.25H39.5157Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">PHP</div>
                                        </div>
                                    </div>
                                    <div className=" absolute top-8 right-0 flex">
                                        <a href="https://eurekamokykla.lt/en/" className="project_links mr-9" target="_blank">
                                            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">#454545
                                                <path d="M29 24.0261V37.5518C29 38.7476 28.6067 39.8944 27.9065 40.7399C27.2064 41.5854 26.2568 42.0604 25.2667 42.0604H4.73333C3.74319 42.0604 2.7936 41.5854 2.09347 40.7399C1.39333 39.8944 1 38.7476 1 37.5518V12.7547C1 11.5589 1.39333 10.4121 2.09347 9.56663C2.7936 8.7211 3.74319 8.24609 4.73333 8.24609H15.9333" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path id="arrow_head" d="M24 1H35V14.2845" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 26.361L35 1" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                        {/*  <a href="#" className="project_links mr-9"><img src="../../images/file.svg" alt="" /></a>
                                    <a href="#" className="project_links"><img src="../../images/link.svg" alt="" /></a> */}
                                    </div>
                                </div>
                            </div>
                            {/* Projekt : Jkrk */}
                            <div className="project w-full flex mb-24 relative">
                                <div className="project_img jkrk_img mr-16">
                                    {/* <img className="h-full object-cover" src="../../images/projects/eureka.png" alt="" /> */}
                                </div>
                                <div className="project_infos text-left flex flex-col py-12">
                                    <span className="project_f mb-7">History</span>
                                    <a href="https://www.jkrk.lt/" className="project_title mb-10" target="_blank">
                                        <div>Rastijos Keliais </div>


                                    </a>
                                    {/* <div className="project_short_desc mb-11 font-medium text-xl">Full-stack WordPress, Responsive Desg</div> */}
                                    <div className="project_short_desc mb-auto">I was hired as a Front-end dev, Responsive Design, I was tasked to support the Back-end dev and fix few things.</div>
                                    {/* <div className="project_my_role mb-12">Front-end</div> */}
                                    <div className="project_techs flex">
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.105" r="23" fill="#606060" />
                                                <path d="M35.1488 21.49L31.4408 34H29.1188L26.4908 24.532L23.7008 34L21.3968 34.018L17.8508 21.49H20.0288L22.6208 31.678L25.4288 21.49H27.7328L30.3428 31.624L32.9528 21.49H35.1488Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">WordPress</div>

                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M24.1603 21.49V30.508C24.1603 31.624 23.8183 32.506 23.1343 33.154C22.4623 33.802 21.5743 34.126 20.4703 34.126C19.3663 34.126 18.4723 33.802 17.7883 33.154C17.1163 32.506 16.7803 31.624 16.7803 30.508H18.8503C18.8623 31.06 19.0003 31.498 19.2643 31.822C19.5403 32.146 19.9423 32.308 20.4703 32.308C20.9983 32.308 21.4003 32.146 21.6763 31.822C21.9523 31.486 22.0903 31.048 22.0903 30.508V21.49H24.1603ZM31.6204 34.126C30.7804 34.126 30.0244 33.982 29.3524 33.694C28.6804 33.394 28.1524 32.974 27.7684 32.434C27.3844 31.894 27.1924 31.264 27.1924 30.544H29.3884C29.4364 31.084 29.6464 31.528 30.0184 31.876C30.4024 32.224 30.9364 32.398 31.6204 32.398C32.3284 32.398 32.8804 32.23 33.2764 31.894C33.6724 31.546 33.8704 31.102 33.8704 30.562C33.8704 30.142 33.7444 29.8 33.4924 29.536C33.2524 29.272 32.9464 29.068 32.5744 28.924C32.2144 28.78 31.7104 28.624 31.0624 28.456C30.2464 28.24 29.5804 28.024 29.0644 27.808C28.5604 27.58 28.1284 27.232 27.7684 26.764C27.4084 26.296 27.2284 25.672 27.2284 24.892C27.2284 24.172 27.4084 23.542 27.7684 23.002C28.1284 22.462 28.6324 22.048 29.2804 21.76C29.9284 21.472 30.6784 21.328 31.5304 21.328C32.7424 21.328 33.7324 21.634 34.5004 22.246C35.2804 22.846 35.7124 23.674 35.7964 24.73H33.5284C33.4924 24.274 33.2764 23.884 32.8804 23.56C32.4844 23.236 31.9624 23.074 31.3144 23.074C30.7264 23.074 30.2464 23.224 29.8744 23.524C29.5024 23.824 29.3164 24.256 29.3164 24.82C29.3164 25.204 29.4304 25.522 29.6584 25.774C29.8984 26.014 30.1984 26.206 30.5584 26.35C30.9184 26.494 31.4104 26.65 32.0344 26.818C32.8624 27.046 33.5344 27.274 34.0504 27.502C34.5784 27.73 35.0224 28.084 35.3824 28.564C35.7544 29.032 35.9404 29.662 35.9404 30.454C35.9404 31.09 35.7664 31.69 35.4184 32.254C35.0824 32.818 34.5844 33.274 33.9244 33.622C33.2764 33.958 32.5084 34.126 31.6204 34.126Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">JavaScript</div>
                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            {/* <img className="w-14 mb-2" src="../../images/php_icon.svg" alt="" /> */}
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M20.5472 25.216C20.5472 25.852 20.3972 26.452 20.0972 27.016C19.7972 27.58 19.3172 28.042 18.6572 28.402C17.9972 28.75 17.1512 28.924 16.1192 28.924H13.8512V34H11.7992V21.49H16.1192C17.0792 21.49 17.8892 21.658 18.5492 21.994C19.2212 22.318 19.7192 22.762 20.0432 23.326C20.3792 23.89 20.5472 24.52 20.5472 25.216ZM16.1192 27.25C16.8992 27.25 17.4812 27.076 17.8652 26.728C18.2492 26.368 18.4412 25.864 18.4412 25.216C18.4412 23.848 17.6672 23.164 16.1192 23.164H13.8512V27.25H16.1192ZM32.4943 21.49V34H30.4423V28.528H24.5563V34H22.5043V21.49H24.5563V26.854H30.4423V21.49H32.4943ZM43.9437 25.216C43.9437 25.852 43.7937 26.452 43.4937 27.016C43.1937 27.58 42.7137 28.042 42.0537 28.402C41.3937 28.75 40.5477 28.924 39.5157 28.924H37.2477V34H35.1957V21.49H39.5157C40.4757 21.49 41.2857 21.658 41.9457 21.994C42.6177 22.318 43.1157 22.762 43.4397 23.326C43.7757 23.89 43.9437 24.52 43.9437 25.216ZM39.5157 27.25C40.2957 27.25 40.8777 27.076 41.2617 26.728C41.6457 26.368 41.8377 25.864 41.8377 25.216C41.8377 23.848 41.0637 23.164 39.5157 23.164H37.2477V27.25H39.5157Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">PHP</div>
                                        </div>
                                    </div>
                                    <div className=" absolute top-8 right-0 flex">
                                        <a href="https://www.jkrk.lt/" className="project_links mr-9" target="_blank">
                                            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">#454545
                                                <path d="M29 24.0261V37.5518C29 38.7476 28.6067 39.8944 27.9065 40.7399C27.2064 41.5854 26.2568 42.0604 25.2667 42.0604H4.73333C3.74319 42.0604 2.7936 41.5854 2.09347 40.7399C1.39333 39.8944 1 38.7476 1 37.5518V12.7547C1 11.5589 1.39333 10.4121 2.09347 9.56663C2.7936 8.7211 3.74319 8.24609 4.73333 8.24609H15.9333" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path id="arrow_head" d="M24 1H35V14.2845" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 26.361L35 1" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                        {/*  <a href="#" className="project_links mr-9"><img src="../../images/file.svg" alt="" /></a>
                                    <a href="#" className="project_links"><img src="../../images/link.svg" alt="" /></a> */}
                                    </div>
                                </div>
                            </div>
                            {/* Projekt : Widerangemetals */}
                            <div className="project w-full flex mb-24 relative">
                                <div className="project_img metals_img mr-16">
                                    {/* <img className="h-full object-cover" src="../../images/projects/eureka.png" alt="" /> */}
                                </div>
                                <div className="project_infos text-left flex flex-col py-12">
                                    <span className="project_f mb-7">Online store, Import & Export, Metals</span>
                                    <a href="https://www.widerangemetals.com/" className="project_title mb-10" target="_blank">
                                        <div>Wide Range Metals </div>


                                    </a>
                                    {/* <div className="project_short_desc mb-11 font-medium text-xl">Full-stack WordPress, Responsive Desg</div> */}
                                    <div className="project_short_desc mb-auto">Full-stack WordPress developer, Responsive Design, WooCommerce, Post release support.</div>
                                    {/* <div className="project_my_role mb-12">Front-end</div> */}
                                    <div className="project_techs flex">
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.105" r="23" fill="#606060" />
                                                <path d="M35.1488 21.49L31.4408 34H29.1188L26.4908 24.532L23.7008 34L21.3968 34.018L17.8508 21.49H20.0288L22.6208 31.678L25.4288 21.49H27.7328L30.3428 31.624L32.9528 21.49H35.1488Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">WordPress</div>

                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M24.1603 21.49V30.508C24.1603 31.624 23.8183 32.506 23.1343 33.154C22.4623 33.802 21.5743 34.126 20.4703 34.126C19.3663 34.126 18.4723 33.802 17.7883 33.154C17.1163 32.506 16.7803 31.624 16.7803 30.508H18.8503C18.8623 31.06 19.0003 31.498 19.2643 31.822C19.5403 32.146 19.9423 32.308 20.4703 32.308C20.9983 32.308 21.4003 32.146 21.6763 31.822C21.9523 31.486 22.0903 31.048 22.0903 30.508V21.49H24.1603ZM31.6204 34.126C30.7804 34.126 30.0244 33.982 29.3524 33.694C28.6804 33.394 28.1524 32.974 27.7684 32.434C27.3844 31.894 27.1924 31.264 27.1924 30.544H29.3884C29.4364 31.084 29.6464 31.528 30.0184 31.876C30.4024 32.224 30.9364 32.398 31.6204 32.398C32.3284 32.398 32.8804 32.23 33.2764 31.894C33.6724 31.546 33.8704 31.102 33.8704 30.562C33.8704 30.142 33.7444 29.8 33.4924 29.536C33.2524 29.272 32.9464 29.068 32.5744 28.924C32.2144 28.78 31.7104 28.624 31.0624 28.456C30.2464 28.24 29.5804 28.024 29.0644 27.808C28.5604 27.58 28.1284 27.232 27.7684 26.764C27.4084 26.296 27.2284 25.672 27.2284 24.892C27.2284 24.172 27.4084 23.542 27.7684 23.002C28.1284 22.462 28.6324 22.048 29.2804 21.76C29.9284 21.472 30.6784 21.328 31.5304 21.328C32.7424 21.328 33.7324 21.634 34.5004 22.246C35.2804 22.846 35.7124 23.674 35.7964 24.73H33.5284C33.4924 24.274 33.2764 23.884 32.8804 23.56C32.4844 23.236 31.9624 23.074 31.3144 23.074C30.7264 23.074 30.2464 23.224 29.8744 23.524C29.5024 23.824 29.3164 24.256 29.3164 24.82C29.3164 25.204 29.4304 25.522 29.6584 25.774C29.8984 26.014 30.1984 26.206 30.5584 26.35C30.9184 26.494 31.4104 26.65 32.0344 26.818C32.8624 27.046 33.5344 27.274 34.0504 27.502C34.5784 27.73 35.0224 28.084 35.3824 28.564C35.7544 29.032 35.9404 29.662 35.9404 30.454C35.9404 31.09 35.7664 31.69 35.4184 32.254C35.0824 32.818 34.5844 33.274 33.9244 33.622C33.2764 33.958 32.5084 34.126 31.6204 34.126Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">JavaScript</div>
                                        </div>
                                        <div className="flex flex-col items-center w-28">
                                            {/* <img className="w-14 mb-2" src="../../images/php_icon.svg" alt="" /> */}
                                            <svg className="w-14 mb-2 tech_img" width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="27" cy="27.4597" r="26.5" fill="white" stroke="#3E3D3A" />
                                                <circle className="inner_circle" cx="27" cy="27.5647" r="23" fill="#606060" />
                                                <path d="M20.5472 25.216C20.5472 25.852 20.3972 26.452 20.0972 27.016C19.7972 27.58 19.3172 28.042 18.6572 28.402C17.9972 28.75 17.1512 28.924 16.1192 28.924H13.8512V34H11.7992V21.49H16.1192C17.0792 21.49 17.8892 21.658 18.5492 21.994C19.2212 22.318 19.7192 22.762 20.0432 23.326C20.3792 23.89 20.5472 24.52 20.5472 25.216ZM16.1192 27.25C16.8992 27.25 17.4812 27.076 17.8652 26.728C18.2492 26.368 18.4412 25.864 18.4412 25.216C18.4412 23.848 17.6672 23.164 16.1192 23.164H13.8512V27.25H16.1192ZM32.4943 21.49V34H30.4423V28.528H24.5563V34H22.5043V21.49H24.5563V26.854H30.4423V21.49H32.4943ZM43.9437 25.216C43.9437 25.852 43.7937 26.452 43.4937 27.016C43.1937 27.58 42.7137 28.042 42.0537 28.402C41.3937 28.75 40.5477 28.924 39.5157 28.924H37.2477V34H35.1957V21.49H39.5157C40.4757 21.49 41.2857 21.658 41.9457 21.994C42.6177 22.318 43.1157 22.762 43.4397 23.326C43.7757 23.89 43.9437 24.52 43.9437 25.216ZM39.5157 27.25C40.2957 27.25 40.8777 27.076 41.2617 26.728C41.6457 26.368 41.8377 25.864 41.8377 25.216C41.8377 23.848 41.0637 23.164 39.5157 23.164H37.2477V27.25H39.5157Z" fill="white" />
                                            </svg>

                                            <div className="tech_name">PHP</div>
                                        </div>
                                    </div>
                                    <div className=" absolute top-8 right-0 flex">
                                        <a href="https://www.widerangemetals.com/" className="project_links mr-9" target="_blank">
                                            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">#454545
                                                <path d="M29 24.0261V37.5518C29 38.7476 28.6067 39.8944 27.9065 40.7399C27.2064 41.5854 26.2568 42.0604 25.2667 42.0604H4.73333C3.74319 42.0604 2.7936 41.5854 2.09347 40.7399C1.39333 39.8944 1 38.7476 1 37.5518V12.7547C1 11.5589 1.39333 10.4121 2.09347 9.56663C2.7936 8.7211 3.74319 8.24609 4.73333 8.24609H15.9333" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path id="arrow_head" d="M24 1H35V14.2845" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 26.361L35 1" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                        {/*  <a href="#" className="project_links mr-9"><img src="../../images/file.svg" alt="" /></a>
                                    <a href="#" className="project_links"><img src="../../images/link.svg" alt="" /></a> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Other Projects */}
                        <section className=" text-center mb-40">
                            {/* Section Header */}
                            <div className="section_header mb-24 relative">
                                <h4 className="section_f">Side projects</h4>
                                <h2 className="section_title inline relative">
                                    <span className="relative z-10">Other </span>
                                    <span className="title_underlined relative z-10">Projects</span>
                                    <img className="z-0 w-16 absolute top-0 -right-8" src="../../images/shape.svg" alt="" />
                                </h2>

                            </div>
                        </section>
                        {/* Developement Process */}
                        <section className="mb-40">
                            <div className="section_header mb-24 relative text-center">
                                <h2 className="section_title  inline relative ">
                                    <span className="relative z-10">Development </span>
                                    <span className="title_underlined relative z-10">Process</span>
                                    <img className="z-0 w-16 absolute top-0 -right-8" src="../../images/shape.svg" alt="" />
                                </h2>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-center flex flex-col items-center">
                                    <div className="process_box rounded-full border">
                                        <span>1</span>
                                    </div>
                                    <span className="process_name">Design</span>
                                </div>
                                <div className="dots flex justify-between">
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <div className="process_box rounded-full border">
                                        <span>2</span>
                                    </div>
                                    <span className="process_name">Frontend </span>
                                    <span className="process_name">Dev</span>
                                </div>

                                <div className="dots flex justify-between">
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <div className="process_box rounded-full border">
                                        <span>3</span>
                                    </div>
                                    <span className="process_name">Backend </span>
                                    <span className="process_name">Dev</span>
                                </div>

                                <div className="dots flex justify-between">
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <div className="process_box rounded-full border">
                                        <span>4</span>
                                    </div>
                                    <span className="process_name">Testing</span>
                                </div>

                                <div className="dots flex justify-between">
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <div className="process_box rounded-full border">
                                        <span>5</span>
                                    </div>
                                    <span className="process_name">Release</span>
                                </div>

                                <div className="dots flex justify-between">
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                    <div className="dot rounded-full bg-gray-300"></div>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <div className="process_box rounded-full border">
                                        <span>6</span>
                                    </div>
                                    <span className="process_name">Support</span>
                                </div>

                            </div>
                        </section>
                        {/* Technologies */}
                        <section className=" text-center mb-40">
                            <div className="section_header mb-24 relative">
                                <h4 className="section_f">What i do</h4>
                                <h2 className="section_title inline relative ">
                                    <span className="relative z-10">My Web Development </span>
                                    <span className="title_underlined relative z-10">Technologies</span>
                                    <img className="z-0 w-16 absolute top-0 -right-8" src="../../images/shape.svg" alt="" />
                                </h2>

                            </div>
                            <div className="techs flex justify-center relative">
                                <img className=" absolute top-1/3 transform -translate-y-1/2 left-32 z-0 " src="../../images/shape.svg" alt="" />
                                <div className="flex items-center">
                                    <div>
                                        <div className="tech laravel">Laravel</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="tech css">Css</div>
                                        <div className="tech sass">sass</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="tech php">php</div>
                                        <div className="tech html">html</div>
                                        <div className="tech wp">wp</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="tech js">js</div>
                                        <div className="tech jquery">jquery</div>
                                    </div>
                                    <div>
                                        <div className="tech react">react</div>
                                    </div>
                                </div>
                            </div>
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
                                        <input type="text" placeholder="Name" />
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <textarea name="message" placeholder="Message" id="" cols="30" rows="10" className="w-full mb-4"></textarea>
                                    <div className="w-full flex justify-center mt-4">
                                        <a href="#" className=" relative text-heroBg z-10 footer_contact_btn transition-all duration-1000 flex justify-center items-center">
                                            <span className="transition-all relative">Submit</span>

                                        </a>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}
