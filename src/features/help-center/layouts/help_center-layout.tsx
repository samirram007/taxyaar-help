
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Main } from '@/layouts/components/main';
import { Outlet } from '@tanstack/react-router';
import { useHelpCenter } from '../contexts/help_center-context';


const HelpCentereLayout = () => {
    const { headerVisible } = useHelpCenter()
    return (
        <>

            <Main className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
                {headerVisible && <Header />}

                <Outlet />
                <Footer />
            </Main>

        </>
    )
}

export default HelpCentereLayout