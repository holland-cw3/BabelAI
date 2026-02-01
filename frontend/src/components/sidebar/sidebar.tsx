import { useLocation, Link } from 'react-router-dom';
import { HomeIcon, CalendarIcon, ChatBubbleLeftRightIcon, CurrencyDollarIcon, BookOpenIcon, ClipboardDocumentListIcon, ClipboardIcon } from '@heroicons/react/24/outline';

import "./sidebar.css";

export default function Sidebar() {
    const location = useLocation();

    return (
        <nav className='sidebar'>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <div className="icon-box"><HomeIcon /></div>
            </Link>
            <Link to="/calendar" className={`nav-link ${location.pathname === '/calendar' ? 'active' : ''}`}>
                <div className="icon-box"><CalendarIcon /></div>
            </Link>
            <Link to="/finances" className={`nav-link ${location.pathname === '/finances' ? 'active' : ''}`}>
                <div className="icon-box"><CurrencyDollarIcon /></div>
            </Link>
        </nav>
    );
}
