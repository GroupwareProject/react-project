import FooterCSS from './Footer.module.css';

function Footer() {

    return (
        <div className={ FooterCSS.footerDiv }>
            <h3 style= { { width: '100%', textAlign: 'right', fontSize: "10px"} }>Copyright 2023. Himedia Academy. All rights reserved.  </h3>
        </div>
    );
}

export default Footer;