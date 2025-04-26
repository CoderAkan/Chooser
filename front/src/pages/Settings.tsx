import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Back, Logo } from '../components/icons';

const Settings: FC = () => {
  return (
    <div className='flex flex-col w-full h-screen '>
        <div className='flex ml-3 mr-3 mt-3 font-light text-3xl justify-between items-center mb-auto'>
            <NavLink to={'/main'} className='flex flex-col mr-auto justify-center items-center'>
                <Back />
            </NavLink>
        </div>
        <div className='flex flex-col items-center mb-auto'>
            Settings
        </div>
    </div>
  )
}

export default Settings;
