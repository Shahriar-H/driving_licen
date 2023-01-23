
// import Bg from "../Resources/Images/mainbg.png"
// import Car from "../Resources/Images/car1.png"
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Cities from '../lib/AllCity';

const Search = () => {

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
        // alert(JSON.stringify(item));
        console.log(item.name)
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
        
            <div className='bg-white p-4 w-full lg:w-10/12 mx-auto mt-10 rounded-md lg:flex justify-between items-center space-x-0 lg:space-x-2'>
                <div className='bg-gray-300 p-2 w-full lg:w-8/12 rounded-sm flex justify-between items-start text-center'>
                    <div className='w-1/2 active_class py-1'>
                        <p><i className="bi bi-check-lg text-green-500"></i> Auto</p>
                    </div>
                    <div className='w-1/2 py-1'>
                        <p>Manual</p>
                    </div>
                </div>
                <div className='w-full mt-2 lg:mt-0'>
                    {/* <input className='w-full border-gray-300 rounded-sm p-3' style={{border:'1px solid grey'}} type="text" placeholder='Enter your State'/> */}
                    <ReactSearchAutocomplete
                        items={Cities}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                        styling={{borderRadius:"4px"}}
                    />
                </div>
                <div className='mt-4 lg:mt-0'>
                    <a className='w-full block text-center lg:w-fit px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Search</a>
                </div>
            </div>

    );
}

export default Search;
