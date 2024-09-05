import React from 'react'
import member1 from '../../../Assets/members/member1.png'
import member2 from '../../../Assets/members/member2.png'
import member3 from '../../../Assets/members/member3.png'
import member4 from '../../../Assets/members/member4.png'
import member5 from '../../../Assets/members/member5.png'

function BoardMembers() {
    const members = [

        {
            name: 'Cyriac Mathew',
            title: 'President',
            image: member2,
        },
        {
            name: 'Alphonse Alex',
            title: 'Secretary',
            image: member3,
        },
        {
            name: 'Alexander Jacob',
            title: 'Senior RDA',
            image: member4,
        },
        {
            name: 'Alex Fernadus',
            title: 'Joint Secretary',
            image: member5,
        },
    ];
    return (
        <div className='sm:mt-[104px] sm:px-[32px]'>
            <div className='text-[48px] font-medium flex '>
                <h1>Board Members</h1>
            </div>
            <div className='text-[16px] font-light flex sm:leading-[28px] sm:mt-[18px] sm:w-[666px]'>
                <p className='text-justify' >At Agapco, our board of directors brings a wealth of experience and expertise to guide our mission and vision.
                    Each member is a leader in their field, dedicated to advancing agriculture and supporting our commitment to innovation and sustainability.
                    Get to know the individuals who steer our organization towards a brighter, more productive future..</p>
            </div>
            <div className='flex sm:mt-[72px]'>
                <img src={member1}
                    alt="chairman"
                    className='sm:w-[443px] sm:h-[443px] rounded-[8px]' />
                <div className='sm:ml-[24px] text-justify'>
                    <div className='sm:mt-[55px] font-bold text-[18px] '>Johnson KP</div>
                    <div className='sm:mt-[8px] font-light text-[16px]'>Chairman</div>
                    <div className='sm:mt-[40px] font-light text-[16px] sm:leading-[28px] text-[#2A2E35] sm:w-[792px]'>
                        Johnson KP, Chairman of Kerala Grameen Agro Producer Company Ltd (KGAPCO), is a trailblazing leader with a storied past, whose illustrious career has been marked by valor, precision, and a relentless pursuit of excellence. A decorated Army Veteran, he brings the same discipline, strategic prowess, and unwavering dedication to KGAPCO, inspiring his team to achieve the extraordinary.

                        With a unique blend of banking expertise and media savvy, Johnson KP is a masterful storyteller, weaving compelling narratives that captivate audiences and drive growth. His financial acumen, risk management expertise, and operational prowess have been a game-changer, propelling KGAPCO to new heights.

                        Under his visionary leadership, KGAPCO is shaping the future of agriculture, fostering collaboration, and driving innovation. Johnson KP's passion for excellence, contagious enthusiasm, and unwavering commitment to success make him an exceptional leader, poised to leave a lasting legacy in the agro producer sector.

                    </div>

                </div>
            </div>
            <div>
            <div className="grid grid-cols-1 sm:md:grid-cols-2 sm:lg:grid-cols-4 gap-6 sm:mt-[72px]">
            {members.map((member, index) => (
            <div key={index} className="text-center">
            <img
              className="sm:w-[326px] sm:h=[320px] rounded-[8px]"
              src={member.image}
              alt={member.name}
            />
            <h3 className="font-bold text-[18px] text-justify sm:mt-[16px]">{member.name}</h3>
            <p className="font-light text-[16px] text-justify sm:mt-[8px]">{member.title}</p>
            
          </div>
        ))}
      </div>
            </div>

        </div>
    )
}

export default BoardMembers