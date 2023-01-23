
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Cities from '../utils/AllCity';

const CheckPricing = () => {

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (Cities) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left',cursor:'pointer' }}>{Cities.name}</span>
          </>
        )
      }

    return (
        <div className=''>
            <div className='bg-green-700 py-7 px-5 lg:px-24 flex flex-wrap justify-center items-center'>
                <div className='flex space-x-10 w-full lg:w-1/2'>
                    <div className='border-4 border-gray-100 flex justify-center items-center rounded-full h-16 w-20'>
                        <i className="bi bi-currency-dollar text-gray-100 text-4xl"></i>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold text-white'>
                            Driving lesson
                            pricing & packages
                        </h1>
                        <p className='text-2xl font-thin mt-2 text-white'>Buy more lessons & get more discount</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='text-center'>
                        <p className='text-2xl'><i className="bi bi-search"></i>  Check pricing for your state</p>
                    </div>
                    <div className='bg-white p-4 w-full lg:w-10/12 mx-auto mt-1 rounded-md space-y-2'>
                        
                        <div className='bg-gray-300 w-full rounded-sm flex justify-between items-start text-center'>
                            
                            <div className='bg-gray-300 p-2 w-full rounded-sm flex justify-between items-start text-center'>
                                <div className='w-1/2 active_class py-1'>
                                    <p><i className="bi bi-check-lg text-green-500"></i> Auto</p>
                                </div>
                                <div className='w-1/2 py-1'>
                                    <p>Manual</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between flex-wrap items-center w-full'>
                            <div className='w-full lg:w-9/12'>
                                {/* <input className='w-full border-gray-300 rounded-sm p-2' style={{border:'1px solid grey'}} placeholder='Enter your State' type="text"/> */}
                                <ReactSearchAutocomplete
                                    items={Cities}
                                    onSearch={handleOnSearch}
                                    onHover={handleOnHover}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                    
                                    formatResult={formatResult}
                                    styling={{borderRadius:"4px"}}
                                />
                            </div>
                            <div className='w-full lg:w-3/12 text-center mt-5 lg:mt-0'>
                                <a className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-7 px-5 lg:px-24 mainbackground'>
                <div className='flex space-x-10 w-full'>
                    <div className='flex justify-center items-center'>
                        <i className="bi bi-person-check text-white text-6xl"></i>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold text-white'>Driving lesson guarantee!</h1>
                        <p className='text-2xl font-thin text-gray-100 mt-2'>We will fulfill your driving lesson booking or you won’t be charged</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckPricing;
