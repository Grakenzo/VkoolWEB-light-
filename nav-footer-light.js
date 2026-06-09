/**
 * V-KOOL — Shared Nav & Footer (LIGHT VERSION)
 * Injects nav HTML, footer HTML, and all required CSS.
 * Light palette: warm stone backgrounds, near-black text, dark gold accent.
 */
(function () {
  'use strict';

  const PAGES = {
    home:         'index_light.html',
    otomotif:     'vkool_otomotif_light.html',
    bangunan:     'vkool_bangunan_light.html',
    ppf:          'vkool_ppf_light.html',
    ppf_interior: 'vkool_ppf_interior_redesign_light.html',
    tentang:      'vkool_tentang_kami.html',
    dealers:      'vkool_dealers.html',
    portfolio:    'vkool_portfolio.html',
    faq:          'vkool_faq.html',
    cek_harga:    'vkool_cek_harga.html',
    cek_garansi:  'vkool_cek_garansi.html',
    artikel:      'vkool_artikel.html',
    videos:       'vkool_videos.html',
    contact:      'vkool_contact.html',
  };

  const cur = document.body.getAttribute('data-page') || 'home';

  function navLink(key, label) {
    const cls = 'nav-link t-nav';
    if (cur === key) return `<span class="${cls} active">${label}</span>`;
    return `<a class="${cls}" href="${PAGES[key]}">${label}</a>`;
  }
  function footerLink(key, label) {
    if (cur === key) return `<span class="footer-link active">${label}</span>`;
    return `<a class="footer-link" href="${PAGES[key]}">${label}</a>`;
  }

  const ppfActive = cur === 'ppf' || cur === 'ppf_interior';
  const ppfTriggerCls = ppfActive ? 'nav-dropdown-trigger t-nav active' : 'nav-dropdown-trigger t-nav';

  const ppfItem = cur === 'ppf'
    ? `<span class="dd-item" style="cursor:default;"><div class="dd-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="dd-text"><span class="dd-title" style="color:var(--l-gold);">PPF</span><span class="dd-sub">Eksterior — paint protection film</span></div></span>`
    : `<a class="dd-item" href="${PAGES.ppf}"><div class="dd-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="dd-text"><span class="dd-title">PPF</span><span class="dd-sub">Eksterior — paint protection film</span></div></a>`;

  const ppfIntItem = cur === 'ppf_interior'
    ? `<span class="dd-item" style="cursor:default;"><div class="dd-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><div class="dd-text"><span class="dd-title" style="color:var(--l-gold);">PPF Interior</span><span class="dd-sub">Proteksi panel kabin premium</span></div></span>`
    : `<a class="dd-item" href="${PAGES.ppf_interior}"><div class="dd-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><div class="dd-text"><span class="dd-title">PPF Interior</span><span class="dd-sub">Proteksi panel kabin premium</span></div></a>`;

  /* ── INJECT LIGHT NAV CSS ── */
  if (!document.getElementById('vkool-nav-css')) {
    const s = document.createElement('style');
    s.id = 'vkool-nav-css';
    s.textContent = `
/* Light nav tokens */
:root{
  --l-gold:#8C7340;
  --l-gold2:#6E5A30;
  --l-text:#1A1817;
  --l-muted:#6B6560;
  --l-dim:#9E9890;
  --l-bg:#F4F1EC;
  --l-surface:#FFFFFF;
  --l-line:#E2DDD7;
  --l-line2:#D4CFC9;
  --nav-h:68px;
}
/* NAV — warm white, near-black text */
.nav{position:fixed;top:0;left:0;right:0;z-index:200;height:var(--nav-h);display:flex;align-items:center;justify-content:space-between;padding:0 56px;background:rgba(244,241,236,.96);border-bottom:.5px solid var(--l-line);transition:background .4s,border-color .4s,box-shadow .4s;}
.nav.scrolled{background:rgba(244,241,236,1);border-bottom-color:var(--l-line2);box-shadow:0 1px 24px rgba(26,24,23,.06);}
.nav-logo{font-family:'Oswald',sans-serif;font-size:17px;letter-spacing:.30em;font-weight:500;color:var(--l-text);text-transform:uppercase;flex-shrink:0;text-decoration:none;transition:color .25s;}
.nav-logo:hover{color:var(--l-gold);}
.nav-links{display:flex;gap:36px;align-items:center;height:100%;}
.t-nav,.t-btn{font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.10em;font-weight:400;text-transform:uppercase;}
.t-label{font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.20em;text-transform:uppercase;font-weight:400;}
/* Nav links — dark muted, gold underline */
.nav-link{color:var(--l-muted);transition:color .25s;position:relative;padding-bottom:2px;white-space:nowrap;text-decoration:none;font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.10em;font-weight:400;text-transform:uppercase;}
.nav-link::after{content:'';position:absolute;bottom:-2px;left:0;right:100%;height:.5px;background:var(--l-gold);transition:right .35s;}
.nav-link:hover{color:var(--l-text);}
.nav-link:hover::after,.nav-link.active::after{right:0;}
.nav-link.active{color:var(--l-gold);}
/* Dropdown trigger */
.nav-dropdown{position:relative;display:flex;align-items:center;height:100%;}
.nav-dropdown-trigger{display:flex;align-items:center;gap:6px;color:var(--l-muted);font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.10em;font-weight:400;text-transform:uppercase;cursor:pointer;position:relative;padding-bottom:2px;white-space:nowrap;transition:color .25s;background:none;border:none;}
.nav-dropdown-trigger::after{content:'';position:absolute;bottom:-2px;left:0;right:100%;height:.5px;background:var(--l-gold);transition:right .35s;}
.nav-dropdown:hover .nav-dropdown-trigger,.nav-dropdown-trigger:hover{color:var(--l-text);}
.nav-dropdown:hover .nav-dropdown-trigger::after{right:0;}
.nav-dropdown-trigger.active{color:var(--l-gold)!important;}
.nav-dropdown-trigger.active::after{right:0!important;}
.nav-chevron{width:10px;height:10px;stroke:currentColor;fill:none;stroke-width:2;flex-shrink:0;transition:transform .35s;}
.nav-dropdown:hover .nav-chevron{transform:rotate(180deg);}
/* Dropdown panel — white surface */
.nav-dropdown-panel{position:absolute;top:calc(var(--nav-h) - 1px);left:50%;transform:translateX(-50%) translateY(-8px);background:var(--l-surface);border:.5px solid var(--l-line);border-top:1.5px solid var(--l-gold);display:grid;min-width:460px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .3s,transform .3s,visibility .3s;box-shadow:0 8px 32px rgba(26,24,23,.10);}
.nav-dropdown:hover .nav-dropdown-panel{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0);}
.nav-dropdown-panel.cols-1{grid-template-columns:1fr;min-width:280px;left:auto;right:0;transform:translateY(-8px);}
.nav-dropdown:hover .nav-dropdown-panel.cols-1{transform:translateY(0);}
/* Dropdown items */
.dd-item{display:flex;align-items:flex-start;gap:16px;padding:22px 24px;border-bottom:.5px solid var(--l-line);position:relative;cursor:pointer;transition:background .25s;text-decoration:none;color:inherit;overflow:hidden;border-right:none;}
.dd-item:last-child{border-bottom:none;}
.dd-item:hover{background:rgba(140,115,64,.04);}
.dd-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--l-gold),var(--l-gold2));transform:scaleY(0);transform-origin:top;transition:transform .35s;}
.dd-item:hover::before{transform:scaleY(1);}
.dd-icon{width:34px;height:34px;flex-shrink:0;border:.5px solid rgba(140,115,64,.25);background:rgba(140,115,64,.06);display:flex;align-items:center;justify-content:center;border-radius:2px;transition:border-color .25s,background .25s;}
.dd-item:hover .dd-icon{border-color:rgba(140,115,64,.5);background:rgba(140,115,64,.12);}
.dd-icon svg{width:15px;height:15px;stroke:var(--l-gold);fill:none;stroke-width:1.4;}
.dd-text{display:flex;flex-direction:column;gap:4px;}
.dd-title{font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.08em;font-weight:400;text-transform:uppercase;color:var(--l-text);transition:color .25s;}
.dd-item:hover .dd-title{color:var(--l-gold);}
.dd-sub{font-size:11px;color:var(--l-dim);letter-spacing:.02em;font-weight:300;line-height:1.5;}
/* Nav right */
.nav-right{display:flex;gap:12px;align-items:center;flex-shrink:0;}
.nav-lang{display:flex;align-items:center;gap:6px;color:var(--l-muted);border:.5px solid var(--l-line2);padding:5px 12px;border-radius:2px;font-size:11px;letter-spacing:.08em;cursor:pointer;transition:border-color .25s,color .25s;background:none;}
.nav-lang svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:1.5;}
.nav-lang:hover{color:var(--l-text);border-color:var(--l-muted);}
/* CTA button — dark on light */
.btn-gold-sm{background:var(--l-text);color:#F4F1EC;padding:9px 20px;border-radius:2px;font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.10em;text-transform:uppercase;font-weight:400;transition:background .25s;min-height:44px;display:flex;align-items:center;border:none;cursor:pointer;}
.btn-gold-sm:hover{background:#2d2a28;}
/* FOOTER — light version */
.footer{background:#F4F1EC;border-top:.5px solid #D4CFC9;padding:64px 56px 32px;}
.footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:56px;margin-bottom:56px;}
.footer-logo{font-family:'Oswald',sans-serif;font-size:15px;letter-spacing:.28em;color:#8C7340;font-weight:400;margin-bottom:14px;}
.footer-tagline{font-size:13px;color:#8E8880;line-height:1.65;max-width:220px;font-weight:300;}
.footer-col-title{font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.16em;color:#1A1817;text-transform:uppercase;font-weight:400;margin-bottom:18px;}
.footer-link{font-size:13px;color:#8E8880;display:block;margin-bottom:17px;transition:color .25s;font-weight:300;text-decoration:none;}
.footer-link:hover,.footer-link.active{color:#8C7340;}
.footer-bottom{border-top:.5px solid #D4CFC9;padding-top:24px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;}
.footer-copy{font-size:12px;color:#9E9890;font-weight:300;}
.footer-social{display:flex;gap:10px;}
.social-btn{width:34px;height:34px;border-radius:50%;border:.5px solid #D4CFC9;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:border-color .25s;background:none;}
.social-btn:hover{border-color:#8C7340;}
.social-btn svg{width:13px;height:13px;stroke:#9E9890;fill:none;stroke-width:1.5;transition:stroke .25s,fill .25s;}
.social-btn:hover svg{stroke:#8C7340;}
.social-btn svg path[fill="currentColor"]{fill:#9E9890;stroke:none;}
.social-btn:hover svg path[fill="currentColor"]{fill:#8C7340;stroke:none;}
.fade-up{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s;}
.fade-up.visible{opacity:1;transform:translateY(0);}
@media(max-width:1023px){.nav-links,.nav-right{display:none;}}
    `;
    document.head.appendChild(s);
  }

  /* ── NAV HTML ── */
  const navHTML = `
<nav class="nav" id="nav" role="navigation" aria-label="Main navigation">
  <a class="nav-logo" href="${PAGES.home}" aria-label="V-KOOL Indonesia">V-KOOL</a>
  <div class="nav-links">
    ${navLink('otomotif','Otomotif')}
    ${navLink('bangunan','Bangunan')}
    <div class="nav-dropdown" aria-label="PPF menu">
      <button class="${ppfTriggerCls}" aria-haspopup="true" aria-expanded="false">
        PPF <svg class="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dropdown-panel cols-1" style="left:50%;right:auto;transform:translateX(-50%) translateY(-8px);min-width:300px;">
        ${ppfItem}
        ${ppfIntItem}
      </div>
    </div>
    ${navLink('tentang','Tentang Kami')}
    ${navLink('dealers','Dealers')}
    <div class="nav-dropdown" aria-label="Selengkapnya menu">
      <button class="nav-dropdown-trigger t-nav" aria-haspopup="true" aria-expanded="false">
        Selengkapnya <svg class="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dropdown-panel cols-1">
        <a class="dd-item" href="${PAGES.artikel}"><div class="dd-icon"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h12"/></svg></div><div class="dd-text"><span class="dd-title">Artikel</span><span class="dd-sub">Berita & tips perawatan kendaraan</span></div></a>
        <a class="dd-item" href="${PAGES.videos}"><div class="dd-icon"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg></div><div class="dd-text"><span class="dd-title">Videos</span><span class="dd-sub">Instalasi & review produk</span></div></a>
        <a class="dd-item" href="${PAGES.cek_garansi}"><div class="dd-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="dd-text"><span class="dd-title">Cek Garansi</span><span class="dd-sub">Verifikasi garansi resmi V-KOOL</span></div></a>
        <a class="dd-item" href="${PAGES.faq}"><div class="dd-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div class="dd-text"><span class="dd-title">FAQ</span><span class="dd-sub">Pertanyaan yang sering diajukan</span></div></a>
      </div>
    </div>
  </div>
  <div class="nav-right">
    <button class="nav-lang" aria-label="Pilih bahasa">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      IND
    </button>
    <a class="btn-gold-sm t-btn" href="${PAGES.cek_harga}">CEK HARGA</a>
  </div>
</nav>`;

  /* ── FOOTER HTML ── */
  const yr = new Date().getFullYear();
  const footerHTML = `
<footer class="footer" role="contentinfo">
  <div class="footer-top">
    <div>
      <div class="footer-logo">V-KOOL</div>
      <p class="footer-tagline">Premium window film & paint protection film technology for automotive and building.</p>
    </div>
    <div>
      <div class="footer-col-title">Products</div>
      ${footerLink('otomotif','Otomotif')}
      ${footerLink('bangunan','Bangunan')}
      ${footerLink('ppf','PPF')}
      <a class="footer-link" href="${PAGES.ppf_interior}">PPF Interior</a>
      <a class="footer-link" href="${PAGES.cek_harga}">Cek Harga</a>
    </div>
    <div>
      <div class="footer-col-title">About Us</div>
      ${footerLink('tentang','Tentang Kami')}
      ${footerLink('dealers','Dealers')}
      ${footerLink('portfolio','Portfolio')}
      <a class="footer-link" href="${PAGES.artikel}">Artikel &amp; News</a>
      ${footerLink('faq','FAQ')}
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <a class="footer-link" href="${PAGES.cek_garansi}">Garansi Elektronik</a>
      ${footerLink('contact','Contact Us')}
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy" id="footer-year">Copyright &copy; ${yr} V-KOOL INDONESIA &mdash; Legal &amp; Privacy Policy</span>
    <div class="footer-social">
      <a class="social-btn" href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
      <a class="social-btn" href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
      <a class="social-btn" href="#" aria-label="X/Twitter"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
    </div>
  </div>
</footer>`;

  /* ── INJECT ── */
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = navHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

})();
