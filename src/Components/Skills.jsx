import React, { useState } from 'react'
import reactgray from '../assets/reactgray.png'
import js from '../assets/js.png'
import axios from '../assets/axios.png'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import jquery from '../assets/jquery.png'
import redux from '../assets/redux.png'
import sass from '../assets/sass.png'
import tailwind from '../assets/tailwind.png'
import thinking from '../assets/thinking.png'
import solution from '../assets/solution.png'
import StickyBar from './singleComponents/StickyBar'


export default function Skills() {

    return (
        <section id='skills' className='mb-110 lg:mb-24 pt-20'>
            {<StickyBar tittle={'Skills'} />}
            <div>
                <ul className='grid grid-cols-2 gap-12  lg:gap-y-20'>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={js} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">JAVASCRIPT</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={reactgray} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">  REACTJS</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={html} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">HTML</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={css} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">CSS</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={sass} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">SASS</span>
                    </li>

                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={bootstrap} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">BOOTSTRAP</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={tailwind} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">TAILWIND  CSS</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={jquery} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">JQUERY</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={redux} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">REDUX</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={axios} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">AXIOS</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={firebase} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">FIREBASE</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={git} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3">GIT</span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={thinking} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3"></span>
                    </li>
                    <li className='flex align-middle items-center '>
                        <img className="w-10 lg:w-16" src={solution} alt="" />
                        <span className="text-base font-semibold lg:text-xl ml-3"></span>
                    </li>

                </ul>
            </div>
        </section>
    )
}
