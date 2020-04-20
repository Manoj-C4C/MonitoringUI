import React, { Component } from 'react';
import './SideMenu.scss';
import {
    Header,
    HeaderName,
    SideNav,
    SideNavItems,
    SideNavLink,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderPanel
} from 'carbon-components-react/lib/components/UIShell';
import { Events32, HelpFilled32, Settings32, Menu16, UserAvatar16, ChevronDown16 } from '@carbon/icons-react';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideTabType: this.props.history.location.pathname.split('/')[1],
            isPanelOpen: false
        }
    }

    switchSideTab = (type) => {
        const sideTabChange = type === this.state.sideTabType ? false : true;
        if(sideTabChange) {
            this.setState({ sideTabType: type });
            this.props.history.push('/'+type);
        }
    }

    rightPanelClk = () => {
        this.setState({ isPanelOpen: !this.state.isPanelOpen });
    }

    render() {
        const { sideTabType, isPanelOpen } = this.state;

        return (
            <React.Fragment>
                <Header aria-label="IBM Platform Name" className="header-style">
                    <Menu16 className="menu-icon" />
                    <HeaderName href="#" prefix="" className="header-text">
                        IBM COVID-19 Health Assistance
                    </HeaderName>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction className="header-right-user"
                            aria-label="Search" onClick={() => { this.rightPanelClk() }}>
                            <UserAvatar16 />
                            <span className="header-right-text">Hi, Peter</span>
                            <ChevronDown16 />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                    {isPanelOpen ? 
                        <HeaderPanel expanded aria-label="Header Panel" className="header-panel" />
                    : null}
                </Header>
                <SideNav
                    isFixedNav
                    expanded={true}
                    isChildOfHeader={true}
                    aria-label="Side navigation"
                    className="sidenav-style">
                    <SideNavItems>
                        <SideNavLink renderIcon={Events32} onClick={() => { this.switchSideTab('dashboard') }} className={`list-style ${sideTabType === 'dashboard' ? 'list-style_selected' : ''}`}>
                            <p className="text-color">Patients Dashboard</p>
                        </SideNavLink>
                        <SideNavLink renderIcon={HelpFilled32} onClick={() => { this.switchSideTab('help') }} className={`list-style ${sideTabType === 'help' ? 'list-style_selected' : ''}`}>
                            <p className="text-color">Help Center</p>
                        </SideNavLink>
                        <SideNavLink renderIcon={Settings32} onClick={() => { this.switchSideTab('settings') }} className={`list-style ${sideTabType === 'settings' ? 'list-style_selected' : ''}`}>
                            <p className="text-color">Settings</p>
                        </SideNavLink>
                    </SideNavItems>
                </SideNav>
            </React.Fragment>
        );
    }
}
  
export default SideMenu;

