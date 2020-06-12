import {Selector as $} from 'testcafe';

const homePage = {
    btnMenu:        $('.Header-link[aria-label="Create new…"]'),
    btnAdd:         $('.dropdown-item[data-ga-click="Header, create new gist"]')
}

export default homePage;