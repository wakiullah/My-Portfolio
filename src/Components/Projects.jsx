import React, { useState } from 'react'
import ProjectItem from './singleComponents/ProjectItem'

export default function Projects() {
    const [files, setFiles] = useState([
        {
            'img': 'https://i.ibb.co/Y0FjKyb/56c87a83-8ccb-4312-8f82-26af63d1c292.png',
            "tittle": 'Shopper E-commerce',
            'des': 'A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.',
            'languages': ['react', 'css3', 'Firebase'],
            "link": 'https://shopper-gamma-seven.vercel.app/',
        },
        {
            'img': 'https://i.ibb.co/pw09kx3/cf6e8c39-c376-4227-850e-310ae28e7433.png',
            "tittle": 'Book List App',
            'des': 'Update Your Book List!'
            , 'languages': ['react', 'css3'],
            "link": 'https://book-list-self.vercel.app/'
        },
        {
            'img': 'https://i.ibb.co/jfsd0LY/e8edb7d5-020e-4092-8b0a-63683f84dff9.png',
            "tittle": `Doctor's Portal`,
            'link': 'https://portal-dusky.vercel.app/',
            'des': `Book video call appointments with the country's most qualified specialist doctors, in their private chambers. You will now get all kinds of health related services for your day to day life through an app. Ranging from primary health care for your illness to specialist doctors’ consultation or referrals for hospital admission.`
            , 'languages': ['React', 'Post CSS', 'Redux Toolkit']
        },
        {
            'img': 'https://i.ibb.co/PzzcPfL/a6ab8b80-fca9-4d39-a520-0b7a6672d040.png',
            "tittle": 'KBM Madrasah',
            'link': 'https://kbm-six.vercel.app/#',
            'des': ' Khoshbazar shalehiya Daruchchunnat Kamil Madrasah is a reputed Aliya Madrasah located in Mujavarni Sarkarpara Mauza in Thakurgaon district of Bangladesh. The madrasa is situated on about seven acres of land adjacent to the Dhaka-Panchgarh highway, 2 km north of Bhulli police station in Thakurgaon district.'
            , 'languages': ['HTML', 'SCSS', 'JS']
        },
        {
            'img': 'https://i.ibb.co/0qPysYC/90355cef-0c84-46fe-897f-1ee1ae0c3276.png',
            "tittle": 'Budget App',
            'link': 'https://kbm-six.vercel.app/#',
            'des': 'A simple and easy-to-use Budget App. Budget App makes managing personal finances as easy as pie! Daily income and expense recorder, budget planner, and balance calculator.'
            , 'languages': ['HTML', 'CSS3', 'VANILLA JS']
        },
        {
            'img': 'https://i.ibb.co/vJNQXkR/f2519983-1fd4-42c1-ad1e-d73139a4b270.png.png',
            "tittle": 'Javascript Quiz App',
            'link': 'https://quiz-app-ruddy-nine.vercel.app/',
            'des': 'Play JS Quiz and upgrade yourself!'
            , 'languages': ['HTML', 'CSS3', 'VANILLA JS']
        },
        {
            'img': 'https://i.ibb.co/vQvBHqC/74d94c99-536a-47b7-ba7a-ea3d9833c187.png',
            "tittle": 'Image to Text Convertor',
            'link': 'https://image-to-text-phi-jet.vercel.app/',
            'des': 'Extract text from image easyly.'
            , 'languages': ['HTML', 'CSS3', 'JS']
        },
    ])


    return (
        <div className='pt-20 mb-24' id='projects'>
            <ul>

                {files.map((e, i) => {
                    return <ProjectItem key={i} img={e.img} tittle={e.tittle} link={e.link} des={e.des} languages={e.languages} />
                })}
            </ul>

        </div>
    )
}



