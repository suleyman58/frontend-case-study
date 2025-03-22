import React from 'react';
import { Menu } from 'antd';
import styles from '../../styles/layout.module.css';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';

const TopBar: React.FC = () => {
    return (
        <Menu
            className={styles.topBar}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 20px',
                
                }}>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '20px',
                    }} >
                    <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                    <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                    <a href="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a>

                </div>



                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                }} >
                    <a href="https://facebook.com" ><FacebookFilled /></a>
                    <a href="https://instagram.com" ><InstagramFilled /></a>
                    <a href="https://x.com" ><TwitterCircleFilled /></a>
                    <a >TRY</a>
                    <a >English</a>
                </div>
            </div>



        </Menu>
    );
};

export default TopBar;