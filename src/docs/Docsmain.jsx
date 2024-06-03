import React from 'react'
import './Docsmain.css';

function Docsmain() {

  return (
    <div>
    <div id="HyptoHeader"></div>
        <redoc id="redoc">
        
            <div class="sc-hZSUBg bxcHYI redoc-wrap">
            {/**vertical side bar start */}
                <div class="sc-iQNlJl jzMYjV menu-content">
                    {/**sidebar image start */}
                    <div class="sc-feJyhm YzuTm">
                        <a href="/" class="sc-iELTvK cCiYxb"><img src="assets/img/logo.webp" alt="logo" class="sc-kafWEX hZCbNs"/></a>
                    </div>
                    {/**searchbar section start */}
                    <div role="search" class="sc-esOvli kKQhLA">
                        <svg class="sc-hMFtBS ibpoCO search-icon" version="1.1" viewBox="0 0 1000 1000" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"></svg>
                        <input placeholder="Search..." type="text" class="sc-cmthru kzNiFq search-input" value=""/>
                    </div>
                    <div class="sc-gPEVay hclups scrollbar-container undefined ps ps--active-y">
                     {/**unorder list item */}
                        <ul class="sc-bwCtUz ghctpd" role="navigation">
                        {/**list item */}
                            
                            
                        </ul>
                        <div class="sc-hXRMBi nGwee"><a target="_blank" href="https://github.com/Redocly/redoc">Documentation Powered by ReDoc</a></div>
                        <div class="ps__rail-x" ><div class="ps__thumb-x" tabindex="0" ></div></div>
                        <div class="ps__rail-y"><div class="ps__thumb-y" tabindex="0" ></div></div>
                    </div>
                {/**postman side content */}
                    <a class="postman" onclick="showPopup(`Postman_Collection`)">Run in Postman
                        <img src="https://www.hypto.in/docs/assets/images/postman-logo.svg"/>
                    </a>
                    
                </div>
                {/**main content side  */}
                <div class="sc-bsbRJL fXybtJ"></div>
                {/**main content part start */}
                <div class="sc-cMhqgX iniCdN api-content"></div>
                {/**right side part start */}
                <div class="sc-iuJeZd fLUKgj"></div>

            </div>
        </redoc>
        <div id="Postman_Collection" class="blur-screen"></div>
      
    </div>
  )
}
export default Docsmain;
