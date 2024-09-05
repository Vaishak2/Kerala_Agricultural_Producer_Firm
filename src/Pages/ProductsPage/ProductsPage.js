import React from 'react'
import productImg1 from '../../Assets/images/productImages/product1.png'
import productImg2 from "../../Assets/images/productImages/product2.png"
import productImg3 from "../../Assets/images/productImages/product3.png"
import productImg4 from "../../Assets/images/productImages/product4.png"

function ProductsPage() {
    return (
        <div className='mx-8'>
            <div className='text-[48px] font-medium sm:mt-[40px]'>Our Products</div>
            <div className='sm:w-[764px] mx-auto text-[16px] leading-8 font-light sm:mt-6'>Elit ultricies adipiscing ornare. Rutrum sapien aliquet mollis. Pretium condimentum. Cursus elit hac fames laoreet non nec facilisis quis dui.</div>

            <div className='grid grid-cols-4 gap-6 sm:mt-[56px]'>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg1} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Fertilizer</div>
                    </div>
                </div>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg2} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Pesticides</div>
                    </div>
                </div>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg3} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Seeds</div>
                    </div>
                </div>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg4} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Equipment</div>
                    </div>
                </div>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg1} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Fertilizer</div>
                    </div>
                </div>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg2} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Pesticides</div>
                    </div>
                </div>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg3} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Seeds</div>
                    </div>
                </div>

                <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
                    <img src={productImg4} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
                    <div className='text-left sm:p-6'>
                        <div className='text-[18px] font-medium'>Equipment</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductsPage
