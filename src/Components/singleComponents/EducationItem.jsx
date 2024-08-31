import React from 'react'

export default function EducationItem({ fromYear, toYear, tittle, des }) {

    return (
        <li className=' list-none mb-12'>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" >
                </div>
                <div className="z-10 sm:order-2 sm:col-span-6" >
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" rel="noreferrer noopener">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                                <span className="inline-block">{tittle}
                                </span>
                            </span>
                        </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{des}</p>
                    <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href="https://github.com/bchiang7/spotify-profile" target="_blank"></a><ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">


                    </ul>
                </div>

                <span className=" sm:order-1 sm:col-span-2  sm:translate-y-1">   {`${fromYear}- ${toYear}`}</span>
            </div>
        </li>

    )
}
