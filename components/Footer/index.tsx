import React from 'react';
import Link from 'next/link';
import {
  FooterContainer,
  MyFooter,
  FooterItem,
  FooterHr,
  Reserved
} from '../../style/footer';

export const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <MyFooter>
        <FooterItem>
          <ul>
            <li><Link href="/what-is-this"><a id="what">What Salt?</a></Link></li>
            <li><Link href="/why-salt"><a>Why Salt?</a></Link></li>
            <li><Link href="/the-history"><a id="history">The History</a></Link></li>
            <li><Link href="/where-to-buy"><a id="about">Where Can I Buy It?</a></Link></li>
            <li><Link href="/sellers"><a id="seller">Become A Seller</a></Link></li>
          </ul>
          <FooterHr />
        </FooterItem>
        <FooterItem>
          <ul>
            <li><a id="blog" title="The Daily Brine - Saltea Blog" href="http://blog.saltea.co">Blog</a></li>
            <li><Link href="/contact"><a title="About">Contact</a></Link></li>
            <li><Link href="/legal"><a title="Legal">Legal</a></Link></li>
            <li><Link href="/feedback"><a title="Feedback">Feedback</a></Link></li>
          </ul>
          <FooterHr />
        </FooterItem>
        <FooterItem>
          <ul>
            <li><a href="https://www.facebook.com/saltea.drinks" title="Facebook" target="_blank"><i className="fa fa-facebook"></i>&nbsp; Facebook</a></li>
            <li><a href="https://www.instagram.com/saltea.co/" title="Instagram" target="_blank"><i className="fa fa-instagram"></i>&nbsp; Instagram</a></li>
            <li><a href="https://twitter.com/drinksaltea" title="Twitter" target="_blank"><i className="fa fa-twitter"></i>&nbsp; Twitter</a></li>
          </ul>
          <FooterHr />
        </FooterItem>
        <Reserved>&copy; {year} Saltea. All Rights Reserved</Reserved>
      </MyFooter>
    </FooterContainer>
  );
}