// ==UserScript==
// @name         gud fandom
// @namespace    https://ddm999.github.io/
// @version      0.1
// @description  make Fandom pages usable
// @author       ddm999
// @match        https://*.fandom.com/wiki/*
// @license      EUPL-1.2
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    //TODO: a config

    // Unforunately I can't fix the absolutely dire change made to deliberately break Image
    //   which serves no purpose other than to make wikis more frustrating and shit

    // hide garbage (footers, bottom bar, links to Fandom)
    GM_addStyle('#mixed-content-footer { display: none; }');
    GM_addStyle('.wds-global-footer { display: none; }');
    GM_addStyle('#WikiaBar { display: none; }');
    GM_addStyle('.wds-global-navigation__content-bar-left { display: none; }');

    // make search bar always fully visible
    GM_addStyle('.wds-global-navigation__search,.wds-global-navigation__search-dropdown { flex:1 1 auto; }');
    GM_addStyle('.wds-global-navigation__search-container { margin-left: 34px; }');
    GM_addStyle('.wds-global-navigation__search-input-wrapper { border-bottom: 2px solid #00d6d6; width: 100%; }');
    GM_addStyle('.wds-global-navigation__search-close,.wds-global-navigation__search-submit { display: inline-flex; }');
    GM_addStyle('.wds-global-navigation__search-toggle { pointer-events: none; }');
    GM_addStyle('.wds-global-navigation__search-toggle-icon { margin-right: 17px; }');
    GM_addStyle('.wds-global-navigation__search-toggle-text { display: none; }');
    GM_addStyle('.wds-global-navigation__search-container { width: 600px; flex: unset !important; }');
    GM_addStyle('.wds-global-navigation__search-container:not(.wds-search-is-focused) .wds-global-navigation__search-close,.wds-global-navigation__search-container:not(.wds-search-is-focused) .wds-global-navigation__search-submit { display: none; }');

    // hide user menu, "all wikis" option, start a wiki button
    GM_addStyle('.wds-global-navigation__user-menu { display: none }');
    GM_addStyle('.wds-global-navigation__search-scope { display: none !important }');
    GM_addStyle('.wds-global-navigation__start-a-wiki { display: none !important }');

    // style the search bar to match the wiki itself
    GM_addStyle('#globalNavigation { background-color: var(--oasis-wikiabar-background-color); }');
    GM_addStyle('.wds-global-navigation__search { color: #ffffff }');
    GM_addStyle('.wds-global-navigation__search-input-wrapper { border-bottom: 2px solid #cccccc }');
    GM_addStyle('.wds-search-is-active .wds-global-navigation__search-input-wrapper { border-bottom: 2px solid #ffffff }');
    GM_addStyle('.wds-global-navigation__search-submit { --wds-primary-button-background-color: #ffffff; --wds-primary-button-background-color--hover: #cccccc; --wds-primary-button-label-color: #000 }');
})();