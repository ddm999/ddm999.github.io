// ==UserScript==
// @name         gud github
// @namespace    https://ddm999.github.io/
// @version      0.2.2b
// @description  customise new github
// @author       ddm999, sorrel
// @match        https://github.com/*
// @license      EUPL-1.2
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // --------- config --------- //
    var config_squarr = true;
    // square or only mostly square
    //TODO: more config

    // -------- globals --------- //
    var url = window.location.href;
    // used for specific page filters

    // ---------- code ---------- //
    GM_addStyle('.repohead { box-shadow: inset 0 -1px 0 #e1e4e8; }');
    GM_addStyle('@media (min-width: 1280px) { .js-repo-nav { position: relative !important; }}');
    //GM_addStyle('.js-responsive-underlinenav-overflow { position: relative !important; visibility: hidden }');
    //GM_addStyle('.UnderlineNav-item { visibility: visible !important }');
    GM_addStyle('.repohead > * { max-width: 1280px; margin-left: auto; margin-right: auto; }');
    GM_addStyle('.Progress { border-radius: 0 }');
    GM_addStyle('.user-status-circle-badge-container { position: inherit; bottom: initial; left: initial; z-index: initial; width: auto; height: initial; margin-bottom: initial; margin-left: initial; }');
    GM_addStyle('.user-status-circle-badge-container .user-status-emoji-container { margin-right: 8px!important; }');
    GM_addStyle('.user-status-circle-badge-container .user-status-message-wrapper { width: initial; opacity: initial; }');
    GM_addStyle('.user-status-circle-badge { border: none; box-shadow: none !important; }');
    GM_addStyle('.user-status-emoji-container > div { width: 20px; }');
    GM_addStyle('[aria-label="Issues"] .Box-row div.lh-condensed { border-right: 1px dotted #e1e4e8; }');
    GM_addStyle('[data-test-selector="profile-website-url"] .link-gray-dark { color: #0366d6 !important; }');
    GM_addStyle('.pagination a, .pagination em, .pagination span { color: #0366d6; }');
    GM_addStyle('.btn-with-count { border-top-right-radius: 0; border-bottom-right-radius: 0; }');

    if (config_squarr == true) {
        GM_addStyle('.btn, .state, .State, .IssueLabel, .form-control, .form-select, .label, .Label, .timeline-comment-label, .delete-topic-button, .topic-tag, .topic-tag-action { border-radius: 0; }');
        GM_addStyle('.timeline-comment, .Box--responsive, .dropdown-menu, .SelectMenu-modal, .Box, .pagination a, .pagination em, .pagination span { border-radius: 0; }');
        GM_addStyle('.rounded-1, .rounded-2, .project-column { border-radius: 0 !important; }');
        GM_addStyle('.markdown-body code, .markdown-body tt, .Counter, .commit-ref { border-radius: 0; }');
        GM_addStyle('.timeline-comment-header, .Box-header { border-top-left-radius: 0 !important; border-top-right-radius: 0 !important; }');
        GM_addStyle('.Box-body:last-of-type { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }');
        GM_addStyle('.subnav-item:first-child, .BtnGroup-item:first-child { border-top-left-radius: 0; border-bottom-left-radius: 0; }');
        GM_addStyle('.subnav-item:last-child, .BtnGroup-item:last-child, .social-count { border-top-right-radius: 0; border-bottom-right-radius: 0; }');
        GM_addStyle('.avatar, .avatar-user { border-radius: 0 !important; }');
        GM_addStyle('.ajax-pagination-form .ajax-pagination-btn { border-radius: 0 }');
        GM_addStyle('.p-3 { border-top-left-radius: 0; border-top-right-radius: 0; }');
        GM_addStyle('.graph-before-activity-overview, .filter-item, .discussion-item-icon, .btn-mktg, .CircleBadge, .TimelineItem-badge { border-radius: 0; }');
        GM_addStyle('.contrib-legend .legend li { box-shadow: none; border-radius: 0; }');
        GM_addStyle('.calendar-graph rect.day { outline: none; rx: 0; ry: 0; }');
        GM_addStyle('.menu, .listgroup, .branch-name, .profile-rollup-wrapper .progress-bar, .file, .select-menu-text-filter input, .select-menu-modal { border-radius: 0; }');
        GM_addStyle('.tabnav-tab.selected, .tabnav-tab[aria-current]:not([aria-current=false]), .tabnav-tab[aria-selected=true], .select-menu-tabs .select-menu-tab-nav, .select-menu-tabs a { border-radius: 0; }');
        GM_addStyle('.menu-item:first-child, .menu-item:first-child:before { border-top-left-radius: 0; border-top-right-radius: 0; }');
        GM_addStyle('.menu-item:last-child, .menu-item:last-child:before { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }');
        GM_addStyle('.BtnGroup-parent:last-child .BtnGroup-item { border-top-right-radius: 0; border-bottom-right-radius: 0; }');
        GM_addStyle('.form-checkbox input[type=checkbox], .form-checkbox input[type=radio] { appearance: radio; }');
        GM_addStyle('.container-preview .tabnav-tabs>.selected:first-child { border-top-left-radius: 0; }');
        GM_addStyle('.drag-and-drop { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }');
        GM_addStyle('.IssueLabel--big.lh-condensed, .issues-reset-query-icon { border-radius: 0; }');
        GM_addStyle('.table-list-header { border-radius: 0; }');
        GM_addStyle('.rounded { border-radius: 0px !important; }');
    } else {
        GM_addStyle('.btn, .state, .State, .IssueLabel, .form-control, .form-select, .label, .Label, .timeline-comment-label, .delete-topic-button, .topic-tag, .topic-tag-action { border-radius: 2px; }');
        GM_addStyle('.timeline-comment, .Box--responsive, .dropdown-menu, .SelectMenu-modal, .Box, .pagination a, .pagination em, .pagination span { border-radius: 2px; }');
        GM_addStyle('.rounded-1, .rounded-2, .project-column { border-radius: 4px !important; }');
        GM_addStyle('.markdown-body code, .markdown-body tt, .Counter, .commit-ref { border-radius: 4px; }');
        GM_addStyle('.timeline-comment-header, .Box-header { border-top-left-radius: 2px !important; border-top-right-radius: 2px !important; }');
        GM_addStyle('.Box-body:last-of-type { border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; }');
        GM_addStyle('.subnav-item:first-child, .BtnGroup-item:first-child { border-top-left-radius: 2px; border-bottom-left-radius: 2px; }');
        GM_addStyle('.subnav-item:last-child, .BtnGroup-item:last-child, .social-count { border-top-right-radius: 2px; border-bottom-right-radius: 2px; }');
        GM_addStyle('.avatar, .avatar-user { border-radius: 5% !important; }');
        GM_addStyle('header .avatar, header .avatar-user { border-radius: 4px !important; }');
        GM_addStyle('.ajax-pagination-form .ajax-pagination-btn { border-radius: 4px }');
        GM_addStyle('.p-3 { border-top-left-radius: 4px; border-top-right-radius: 4px; }');
        GM_addStyle('.calendar-graph rect.day { outline: none; rx: 1; ry: 1; }');
        GM_addStyle('.contrib-legend .legend li { box-shadow: none; border-radius: 1; }');
        GM_addStyle('.menu, .listgroup, .branch-name, .file, .select-menu-text-filter input, .select-menu-modal { border-radius: 2px; }');
        GM_addStyle('.menu-item:first-child, .menu-item:first-child:before { border-top-left-radius: 2px; border-top-right-radius: 2px; }');
        GM_addStyle('.menu-item:last-child, .menu-item:last-child:before { border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; }');
        GM_addStyle('.BtnGroup-parent:last-child .BtnGroup-item { border-top-right-radius: 2px; border-bottom-right-radius: 2px; }');
        GM_addStyle('.container-preview .tabnav-tabs>.selected:first-child { border-top-left-radius: 2px; }');
        GM_addStyle('.drag-and-drop { border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; }');
        GM_addStyle('.table-list-header { border-radius: 2px 2px 0 0; }');
        GM_addStyle('.rounded { border-radius: 2px !important; }');
    }

    // specific to explore page
    var filter = "https://github.com/explore";
    if (url.substring(0,filter.length) === filter) {
        GM_addStyle('.py-4 .color-bg-primary.my-4 { display: none; }');
    }
})();
