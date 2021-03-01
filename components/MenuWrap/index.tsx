import React from 'react';
import Link from 'next/link';
import { NewsletterSignup } from '../NewsletterSignup';

import {
  MyMenuWrap,
  MenuHeader,
  MenuContainer,
  MenuMain,
  MenuSub,
  MenuHr,
  MenuFollow
} from '../../style/menuWrap';

export const MenuWrap = ({ showMenu, hideMenu }) => {
  return (
    <MyMenuWrap className={showMenu ? 'showMenu' : ''}>
      <MenuHeader>
        <i className="fa fa-close fa-2x" onClick={hideMenu}></i>
      </MenuHeader>
      <MenuContainer>
        <MenuMain>
          <ul>
            <li><Link href="/what-is-this"><a id="about" className="menu-item" >What Is Saltea?</a></Link></li>
            <li><Link href="/"><a id="about" className="menu-item" >Where Can I Buy It?</a></Link></li>
            <li><Link href="/"><a id="seller" className="menu-item">Become A Reseller</a></Link></li>
          </ul>
        </MenuMain>
        <MenuHr />
        <MenuSub>
          <ul>
            <li><a id="blog" className="menu-item" href="http://blog.saltea.co" target="_blank">Blog</a></li>
            <li><Link href="/contact"><a id="home" className="menu-item-mini">Contact</a></Link></li>
            <li><Link href="/"><a id="about" className="menu-item-mini">Legal</a></Link></li>
            <li><Link href="/contact"><a id="contact" className="menu-item-mini">Feedback</a></Link></li>
          </ul>
        </MenuSub>
        <MenuFollow>
          <p>Follow Saltea</p>
          <ul className="list-inline">
            <li><a className="share-facebook" href="https://facebook.com/saltea.drinks" target="_blank"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li><a className="share-facebook" href="https://instagram.com/saltea.co" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
            <li><a className="share-twitter" href="https://twitter.com/drinksaltea" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
          </ul>
        </MenuFollow>
        <div id="newsletterSignup">
          <NewsletterSignup />
        </div>
      </MenuContainer>
    </MyMenuWrap>
  );
}