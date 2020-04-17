import React, { Component } from 'react';
import './SideMenu.scss';
import {
    SideNav,
    SideNavItems,
    SideNavLink
} from 'carbon-components-react/lib/components/UIShell';
import { Events32, HelpFilled32, Settings32 } from '@carbon/icons-react';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideTabType: this.props.history.location.pathname.split('/')[1]
        }
    }

    switchSideTab = (type) => {
        const sideTabChange = type === this.state.sideTabType ? false : true;
        if(sideTabChange) {
            this.setState({ sideTabType: type });
            this.props.history.push('/'+type);
        }
    }

    render() {
        const sideTabType = this.state.sideTabType;

        return (
            <SideNav
                isFixedNav
                expanded={true}
                isChildOfHeader={false}
                aria-label="Side navigation"
                className="sidenav-style">
                <SideNavItems>
                    <SideNavLink className="side-header">
                        <p className="text-color">COVID-19 </p>
                        <p className="text-color">Health Monitoring Dashboard</p>
                    </SideNavLink>
                    <SideNavLink renderIcon={Events32} onClick={() => { this.switchSideTab('') }} className={`list-style ${sideTabType === '' ? 'list-style_selected' : ''}`}>
                        {sideTabType === '' ? <div className="tab-container"></div> : ''}
                        <p className="text-color">Patients</p>
                    </SideNavLink>
                    <SideNavLink renderIcon={HelpFilled32} onClick={() => { this.switchSideTab('help') }} className={`list-style ${sideTabType === 'help' ? 'list-style_selected' : ''}`}>
                        {sideTabType === 'help' ? <div className="tab-container"></div> : ''}
                        <p className="text-color">Help Center</p>
                    </SideNavLink>
                    <SideNavLink renderIcon={Settings32} onClick={() => { this.switchSideTab('settings') }} className={`list-style ${sideTabType === 'settings' ? 'list-style_selected' : ''}`}>
                        {sideTabType === 'settings' ? <div className="tab-container"></div> : ''}
                        <p className="text-color">Settings</p>
                    </SideNavLink>
                </SideNavItems>
            </SideNav>
        );
    }
}
  
export default SideMenu;

