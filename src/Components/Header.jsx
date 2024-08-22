import React from 'react'
import Education from './Education';
import { Link } from 'react-scroll';



export default function Header() {
    return (

        <header className="lg:sticky lg:top-0 lg:flex w-full lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between mt-16 lg:mt-0 lg:py-20">
            <div >
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a className=' uppercase' href="/">Md Wakiullah</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">React Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">I'm a learner and developer for ReactJS. I'm improving every single day.</p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <li>

                            <Link activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                                className="group active:text-white flex items-center cursor-pointer py-3" >
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Skills</span>
                            </Link>

                        </li>
                        <li><Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className="group flex items-center py-3" href="#projects"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span></Link></li>
                        <li><Link activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className="group flex items-center py-3" href="#education">
                            <span className="line nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 gro group-active:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Education</span></Link>
                        </li>
                    </ul></nav>
            </div>
            <ul className="ml-1 mt-20 lg:mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0">
                    <a className="block hover:text-slate-200" href="https://github.com/wakiullah" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                        <span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
                <li className="mr-5 text-xs shrink-0"><a className="block hover:text-slate-200" href="https://www.facebook.com/profile.php?id=100093500446678" target="_blank" rel="noreferrer noopener" aria-label="Facebook (opens in a new tab)" title="Fabebook"><span className="sr-only">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='h-7 w-7' fill='currentColor'>    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" /></svg></a></li>
                <li className="mr-5 text-xs shrink-0"><a className="block hover:text-slate-200" href="https://www.instagram.com/mdwakiullah" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram"><span className="sr-only">Instagram</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg></a></li>
                <li className="mr-5 text-xs shrink-0"><a className="block hover:text-slate-200" href="https://x.com/Wakiullah12" target="_blank" rel="noreferrer noopener" aria-label="Twitter (opens in a new tab)" title="Twitter"><span className="sr-only">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path></svg></a></li>

            </ul>
        </header>


    )
}
