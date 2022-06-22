import User from "components/User";

const Header = () => {
  return (
    <header className='border border-gray-400 w-full p-5 text-small text-gray-700 flex justify-between'>
      <div className='flex space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>
      <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <User />
      </div>
    </header>
  );
};

export default Header;
