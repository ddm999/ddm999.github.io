// ==UserScript==
// @name         gud slonk
// @namespace    https://ddm999.github.io/
// @version      0.2.6b
// @description  customise new slonk
// @author       ddm999
// @match        https://app.slack.com/client/*
// @license      EUPL-1.2
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // --------- config --------- //
    var config_disableTopBar = true;
    // hide the search bar (also hides "what's new" and the "help" button)

    var config_lockSidebarWidth = 0;
    // locks the sidebar width to a specific value (0 disables)

      var config_overrideProfileButton = true;
    // enable the profile button (and move it to the sidebar header) even if top bar is disabled
    // requires: config_lockSidebarWidth

      var config_newSearchButton = true;
    // replaces the search bar with a button near the compose button
    // requires: config_lockSidebarWidth

    var config_sidebarStatic = true;
    // sidebar items are statically placed, instead of moved to specific places by js

      var config_hideDrafts = true;
    // remove the "drafts" section
    // requires: config_sidebarStatic

      var config_hideApps = true;
    // remove the "apps" section from the sidebar
    // requires: config_sidebarStatic

      var config_fixSidebarScrolling = true;
    // don't set the sidebar height with js: might break the scrollbar, but means you can't scroll to reveal nothing
    // requires: config_sidebarStatic

    var config_hideFindDetailButton = true;
    // remove the "find" button which just opens search with `in:#general` entered

    var config_hideCallDetailButton = true;
    // remove the "call" button which just opens an advert on free Slack

    var config_lessIndentedSidebar = true;
    // remove the indent from the sidebar
    
    var config_hideSidebarAvatars = true;
    // remove the avatars next to your DMs in the sidebar

    var config_hideAvatarStack = true;
    // remove the userlist and "add to channel" button in the channel info bar

    var config_noLargeEmojiBackground = true;
    // remove the white background when hovering over an emoji to view a larger version

    if (config_disableTopBar == true) {
        GM_addStyle('.p-client { grid-template-rows: 0px auto min-content; }');
        GM_addStyle('.p-top_nav { visibility: collapse; }');
    }

    if (config_lockSidebarWidth > 0) {
        GM_addStyle('.p-resizer { visibility: hidden; }');
        GM_addStyle('.p-workspace__sidebar { width: '+config_lockSidebarWidth+'px !important; }');
        GM_addStyle('.p-workspace-layout { grid-template-columns: '+config_lockSidebarWidth+'px auto !important; }');
    }
        if (config_newSearchButton == true) {
            GM_addStyle('button.p-top_nav__search:hover { background-color: white; color: black; border-color: rgb(33, 33, 33); box-shadow: 0 1px 3px rgba(0,0,0,.08); }');
            GM_addStyle('button.p-top_nav__search:active { border-color: rgb(33, 33, 33); box-shadow: 0 1px 3px rgba(0,0,0,.08); transform: scale(.95); background-color: rgb(228, 228, 228); }');
            GM_addStyle('.p-top_nav__search__container .p-top_nav__search__icon { display: initial; }');
            GM_addStyle('.p-top_nav__search__container { position: initial; }');
            GM_addStyle('.p-top_nav__search__container .p-top_nav__search { padding-right: 0px; }');
            GM_addStyle('button.p-channel_sidebar__compose_button { top: 34px; right: 8px; width: 24px; height: 24px; border-bottom-left-radius:12px; border-bottom-right-radius:12px; border-top-left-radius:12px; border-top-right-radius:12px; }');
            GM_addStyle('.p-top_nav__search__icon { display: initial; height: auto; top: -1px; left: -3px; }');
            GM_addStyle('.p-top_nav__search__text { display: none; }');
            GM_addStyle('.p-ia__sidebar_header__button { padding-right: 16px }');
            GM_addStyle('button.p-top_nav__search { position: fixed; top: 4px; left: +'+(240-32)+'px; width: 24px; background-color: white; color: black; border-color: rgb(33, 33, 33); box-shadow: 0 1px 3px rgba(0,0,0,.08); visibility: visible; border-bottom-left-radius:12px; border-bottom-right-radius:12px; border-top-left-radius:12px; border-top-right-radius:12px; }');
        }

        if (config_overrideProfileButton == true) {
            GM_addStyle('.p-ia__nav__user__button { visibility: visible; position: fixed; top: 32px; left: +'+(240-64)+'px; }');
        }

    if (config_hideFindDetailButton == true) {
        GM_addStyle('button.p-ia__channel_details__action[data-qa="filter"] { display: none; }');
    }

    if (config_hideCallDetailButton == true) {
        GM_addStyle('button.p-ia__channel_details__action[data-qa="call"] { display: none; }');
    }

    if (config_sidebarStatic == true) {
        GM_addStyle('.p-channel_sidebar__static_list__item { position: static; }');

        if (config_hideDrafts == true) {
            GM_addStyle('#Pdrafts { display: none; }');
        }

        if (config_hideApps == true) {
            GM_addStyle('#sectionHeading-LT8KD6399 { display: none; }');
        }

        if (config_fixSidebarScrolling == true) {
            GM_addStyle('.c-virtual_list__scroll_container { height: auto; }');
        }
    }

    if (config_lessIndentedSidebar == true) {
        GM_addStyle('.p-channel_sidebar__edit_mode_checkbox--not_editing { width: 16px; }');
        GM_addStyle('.p-channel_sidebar--iap1 .p-channel_sidebar__link.p-channel_sidebar__link--add-more-items { padding-left: 19px; }');
        GM_addStyle('.p-channel_sidebar__channel_icon_prefix--comfy { background-color: rgba(255,255,255,0) !important; margin-right: 0px }');
    }

    if (config_hideSidebarAvatars == true) {
        GM_addStyle('.p-channel_sidebar__user_avatar { visibility: hidden; margin-right: 0px }');
        GM_addStyle('.p-channel_sidebar__presence_icon { visibility: visible; }');
        GM_addStyle('.p-channel_sidebar__presence_icon.p-channel_sidebar__presence_icon--on-avatar { top: 0; left: 0; }');
        GM_addStyle('.p-channel_sidebar__presence_icon.p-channel_sidebar__presence_icon--on-avatar:before { font-size: 16px; }');
    }

    if (config_hideAvatarStack == true) {
        GM_addStyle('.p-avatar_stack { display: none; }');
    }

    if (config_noLargeEmojiBackground == true) {
        GM_addStyle('.c-emoji__emoji-tooltip .c-emoji__large { background-color: initial; }');
        GM_addStyle('.c-reaction__tip--emoji .c-emoji__large { background-color: initial; }');
    }
})();
