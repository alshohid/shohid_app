import headerData from '@/data/HeaderData';
import { useRootContext } from '@/Provider/context';
import React from 'react';
import { Image } from 'react-bootstrap';
import MobileNavItems from './MobileNavItems';
import MegaMenu from '../MegaMenu/MegaMenu';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavItems } from '@/hooks/useNavMenuItem';
const { main_logo } = headerData;
const MobileNav = () => {
    const { isExpanded, handleToggle } = useRootContext();
    const navItems = useNavItems()
    return (
        <div className={`mobile-nav__wrapper ${isExpanded ? "expanded" : ""}`}>
            <div onClick={handleToggle} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content">
                <span onClick={handleToggle} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" >
                        <Image src={main_logo.src} width={155} alt="News Blog" />
                    </Link>
                </div>

                <div className="mobile-nav__container">
                    <ul className='main-menu__list'>
                        {navItems.map((navItem) => (
                            <MobileNavItems key={navItem.id} navItem={navItem} />
                        ))}
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default MobileNav;