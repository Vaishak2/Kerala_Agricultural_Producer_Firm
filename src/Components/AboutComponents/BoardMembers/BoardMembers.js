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
        <div className='sm:mt-[104px] mt-[72px] sm:px-[32px] px-[16px]'>
            <div className='sm:text-[48px] text-[32px] font-medium flex '>
                <h1>Board Members</h1>
            </div>
            <div className='sm:text-[16px] font-light flex sm:leading-[28px] sm:mt-[18px] mt-[36px] w-[395px] sm:w-[666px]'>
                <p className='text-justify' >At Agapco, our board of directors brings a wealth of experience and expertise to guide our mission and vision.
                    Each member is a leader in their field, dedicated to advancing agriculture and supporting our commitment to innovation and sustainability.
                    Get to know the individuals who steer our organization towards a brighter, more productive future..</p>
            </div>
            <div className='sm:flex mt-[48px] sm:mt-[72px]'>
                <img src={member1}
                    alt="chairman"
                    className='sm:w-[443px] w-[396px] h-[330px] sm:h-[443px] rounded-[8px]' />
                <div className='sm:ml-[24px]  text-justify'>
                    <div className='sm:mt-[55px] mt-[16px] font-bold text-[18px] '>Johnson KP</div>
                    <div className='sm:mt-[8px] mt-[8px] font-light text-[16px]'>Chairman</div>
                    <div className='sm:mt-[40px] mt-[24px] font-light text-[16px] leading-[28px] text-[#2A2E35] w-[396px] sm:w-[792px]'>
                        Johnson KP, Chairman of Kerala Grameen Agro Producer Company Ltd (KGAPCO), is a trailblazing leader with a storied past, whose illustrious career has been marked by valor, precision, and a relentless pursuit of excellence. A decorated Army Veteran, he brings the same discipline, strategic prowess, and unwavering dedication to KGAPCO, inspiring his team to achieve the extraordinary.

                        With a unique blend of banking expertise and media savvy, Johnson KP is a masterful storyteller, weaving compelling narratives that captivate audiences and drive growth. His financial acumen, risk management expertise, and operational prowess have been a game-changer, propelling KGAPCO to new heights.

                        Under his visionary leadership, KGAPCO is shaping the future of agriculture, fostering collaboration, and driving innovation. Johnson KP's passion for excellence, contagious enthusiasm, and unwavering commitment to success make him an exceptional leader, poised to leave a lasting legacy in the agro producer sector.

                    </div>

                </div>
            </div>
            <div>
            <div className="grid grid-cols-1 sm:md:grid-cols-2 sm:lg:grid-cols-4 gap-6 mt-[48px] sm:mt-[72px]">
            {members.map((member, index) => (
            <div key={index} className="text-center">
            <img
              className="sm:w-[326px] sm:h=[320px] w-[396px] h-[320px] rounded-[8px]"
              src={member.image}
              alt={member.name}
            />
            <h3 className="font-bold sm:text-[18px] text-justify mt-[16px] sm:mt-[16px]">{member.name}</h3>
            <p className="font-light sm:text-[16px] text-justify mt-[8px]">{member.title}</p>
            
          </div>
        ))}
      </div>
            </div>

        </div>
    )
}

export default BoardMembers