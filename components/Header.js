import Image from 'next/image';
import logo from '../images/logo.webp';
import HeaderItem from '../components/HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className='flex flex-grow justify-evently max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image src={logo} width={200} height={100} alt='logo'/>
        </header>
    );
};

export default Header;