import React from 'react'
import EducationItem from './singleComponents/EducationItem'

export default function Education() {
    const educationItems = [{
        'fromYear': '',
        "toYear": '2023',
        'tittle': 'A-Lavel',
        'des': `From Khoshbazar Kamil Madrasah, I earned a GPA of five out of five when I passed my A-levels (HSC) in 2023. The Bangladesh Madrasah Education Board awarded me a Talentpool Scholarship for this. One of Bangladesh's top educational establishments is Khoshbazar Kamil Madrasah, located in North Bengal. Throughout the past 50 years, it has conducted reputable educational programs.`,
    },
    {
        'fromYear': '2023',
        "toYear": 'Present',
        'tittle': 'University of Chittagong',
        'des': `I'm now pursuing an honors degree in Arabic literature at University of Chittagong . The most exquisite university in Bangladesh is the University of Chittagong. The University of Chittagong was founded in 1966 and has since expanded to become one of the leading research-led universities, renowned for the caliber of its services to the local, national, and worldwide communities as well as for its teaching and research.
`,

    },]

    return (
        <div className='pt-20' id='education'>
            <ul>

                {educationItems.map((e, i) => {
                    return <EducationItem key={i} fromYear={e.fromYear} tittle={e.tittle} toYear={e.toYear} des={e.des} />
                })}
            </ul>

        </div>
    )
}
