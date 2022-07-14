import React from 'react';

const Banner = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex  justify-between items-center lg:ml-32 mx-auto  '>

                <div className='w-2/4'>
                    <div className=' lg:w-3/4 mx-auto'>
                        <img width={100} alt='furnitureLogo' src="https://i.ibb.co/qRH1JGj/furniture-Logo.png" />
                    </div>
                    <div>
                        <p className='text-4xl font-bold'>EXCLUSIVE</p>
                        <p className='text-4xl font-bold'>FURNITURE</p>
                        <p>Hello Here you can see best furniture what you want. Also we give you the discount for this month and our all furniture is best quality in this world. All furniture make by best wood and best technologies. </p>
                        <button className='bg-[#5c7897] py-2 px-8 font-semibold text-xl'>Shop Now</button>
                    </div>
                </div>
                <div className='mr-[-100px] bg-blue-500 number1'>
                    <h1 className='text-5xl'>65%</h1>
                    <h1 className='text-4xl'>Discount</h1>
                </div>
                <div className='bg-[#475f7d]  rounded-l-[420px] pl-12  '>
                    <div className='bg-[#c8d3db] rounded-l-[450px] pl-20 py-12'>
                        <img className='my-32 ' width={700} src="https://i.ibb.co/7kW8Jpc/furni-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;