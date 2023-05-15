

const Seoparagraph = ({Data}) => {
   
    return (
        <div className='px-4 lg:px-20 py-16'>
            <div className=' w-full lg:w-8/12 bg-gray-100 shadow-md rounded-md p-8 mx-auto'>
                <h1 className='text-xl'>How do I find private driving instructors near me?</h1>
                
                    {Data?.result[0]&&<div dangerouslySetInnerHTML={{__html: Data?.result[0]?.reason}} />}
                
            </div>
        </div>
    );
}

export default Seoparagraph;
