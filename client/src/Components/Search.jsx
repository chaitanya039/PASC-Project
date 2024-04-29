import profile from '../Images/Passport.png';

function Search() {
  return (
    <div>
      <nav className='flex justify-between px-1 items-center py-5 mx-4 md:mx-[75px] pr-4 md:pr-[10px] mr-4 md:mr-[125px] h-[2px] md:ml-24' style={{ background: 'white' }}>
        <div className="relative mb-2 md:mb-0">
          <input type="text" placeholder="Search..." className="border px-6 md:px-2 border-gray-300 rounded-xl px-2 focus:outline-none focus:border-black" />
        </div>

        {/* <div className='flex gap-1 flex-wrap-reverse'>
          <img src={edit1} alt="edit icon" className="w-10 h-10 rounded-full" />  
        </div> */}
        
        <div className="flex items-center">
          <img src={profile} alt="Profile Picture" className="w-10 h-10 rounded-full" />
        </div>
      </nav>
    </div>
  );
}

export default Search;
