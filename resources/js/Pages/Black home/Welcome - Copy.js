import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Logo from '@/Components/ApplicationLogo'
export default function Welcome(props) {

    window.addEventListener("scroll", function () {
        var y = window.scrollY;
        if (y >= 200) {
            this.document.querySelector('.nav_contact_btn').classList.add('sticky_bottom_btn')
            this.document.querySelector('.logo').classList.add('hide')
            this.document.querySelector('.menu').classList.add('hide')
        } else {
            this.document.querySelector('.nav_contact_btn').classList.remove('sticky_bottom_btn')
            this.document.querySelector('.logo').classList.remove('hide')
            this.document.querySelector('.menu').classList.remove('hide')
        }

        /*   console.log(y)
          if (y >= 2150) {
              this.document.querySelector('.nav_contact_btn').classList.remove('sticky_bottom_btn')
          } else {
              this.document.querySelector('.nav_contact_btn').classList.add('sticky_bottom_btn')
          } */

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.document.querySelector('.nav_contact_btn').classList.add('hidden')
        } else {
            this.document.querySelector('.nav_contact_btn').classList.remove('hidden')
        }

    })

    return (
        <>
            <Head title="Welcome" />
            <div className="relative  min-h-screen ">{/* bg-fullPageBg */}
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
                        <Link href="/" className="logo mr-auto">
                            <Logo />
                        </Link>
                        {/*   <a href="#" className=""> </a> */}
                        <ul className="menu text-white flex items-center cl-effect-11">
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


                <div className="hero w-full   pb-20">{/* bg-heroBg */}
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
                        <div className="hero_content flex flex-col items-center text-white pt-80 pb-44">
                            <div className="">
                                <span className="hero_name">Mustapha Benfetta</span>
                                <h2 className="hero_heading">Interactive Web Developer.</h2>
                                <span className="hero_role">Front-end, Full-stack WordPress</span>
                                <p className="hero_headline mb-16">I will help you adapt in a connected world. </p>
                                <div className="w-full text-center">
                                    <a href="#" className="hero_btn px-10 py-2 inline-block">My work <img className="inline ml-5" src="../../images/btn-arrow.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="hero_bottom">
                            <div className="flex items-center">
                                <div className="arrow"><img src="../../images/arrow-right.svg" alt="" /></div>
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
                <main className="main">


                    <div className="max-w-7xl mx-auto py-24 pb-0">
                        <section className=" text-center mb-32">
                            <div className="section_header mb-24 relative">
                                <h4 className="section_f">Case studies</h4>
                                <h2 className="section_title inline relative text-gray-200">
                                    <span className="relative z-10">Latest </span>
                                    <span className="title_underlined relative z-10">Work</span>
                                    <img className="z-0 w-16 absolute top-0 -right-8 opacity-25" src="../../images/shape.svg" alt="" />
                                </h2>

                            </div>
                            <div className="project w-full flex mb-24">
                                <div className="project_img mr-24">
                                    <img src="../../images/projects/landingpage.jpg" alt="" />
                                </div>
                                <div className="project_infos text-left flex flex-col justify-center">
                                    <Link href="/project" className="project_title mb-8 text-gray-200">
                                        Beautiful Landing Page
                                    </Link>

                                    <div className="project_short_desc mb-12 text-gray-200">Has been working in the web solutions industry for more than 13 years.</div>
                                    <div className="project_my_role mb-12 text-gray-200">Front-end</div>
                                    <div className="links flex">
                                        <Link href="/project" className="project_links mr-9">
                                            <img src="../../images/file.svg" alt="" />
                                        </Link>
                                        {/*  <a href="#" className="project_links mr-9"><img src="../../images/file.svg" alt="" /></a>
                                    <a href="#" className="project_links"><img src="../../images/link.svg" alt="" /></a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="project w-full flex">
                                <div className="project_img mr-24">
                                    <img src="../../images/projects/jkrk.jpg" alt="" />
                                </div>
                                <div className="project_infos text-left flex flex-col justify-center">
                                    <div className="project_title mb-8 text-gray-200">Beautiful Landing Page</div>
                                    <div className="project_short_desc mb-12 text-gray-200">A company responsible for developing market-leading construction projects.</div>
                                    <div className="project_my_role mb-12 text-gray-200">Front-end</div>
                                    <div className="links flex">
                                        <a href="#" className="project_links mr-9"><img src="../../images/file.svg" alt="" /></a>
                                        <a href="#" className="project_links"><img src="../../images/link.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className=" text-center mb-32">
                            <div className="section_header mb-24 relative">
                                <h4 className="section_f">What i do</h4>
                                <h2 className="section_title inline relative ">
                                    <span className="relative z-10 text-gray-200">My Web Development </span>
                                    <span className="title_underlined relative z-10 text-gray-200">Technologies</span>
                                    <img className="z-0 w-16 absolute top-0 -right-8 opacity-25" src="../../images/shape.svg" alt="" />
                                </h2>

                            </div>
                            <div className="techs flex justify-center relative">
                                <img className=" absolute top-1/3 transform -translate-y-1/2 left-32 z-0 opacity-25" src="../../images/shape.svg" alt="" />
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
                        <section className="contact_me text-center pb-24 relative">
                            {/*  <img className="absolute w-full z-0 opacity-30" src="../../images/wave.svg" alt="" /> */}
                            <div className=" max-w-3xl mx-auto z-10 relative">
                                <div className="section_header mb-24 ">
                                    <h2 className="section_title relative z-10 text-gray-200">Let’s Work Together</h2>
                                    <span className="sub_headline text-gray-200">And make something speciale.</span>
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
