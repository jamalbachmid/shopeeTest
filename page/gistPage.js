import {Selector as $} from 'testcafe';

const gistPage = {
    txtDesc:            $('[name="gist[description]"]'),
    txtFilename:        $('[name="gist[contents][][name]"]'),
    txtField:           $('pre.CodeMirror-line'),
    btnCreatePrivate:   $('button[name="gist[public]"][value="0"]'),

    txtDescAssert:      $('div[itemprop="about"]'),
    txtNameAssert:      $('.user-select-contain.gist-blob-name.css-truncate-target'),   

    btnViewAllGist:     $('.flex-auto.pt-2.text-bold.text-right.f6.lh-condensed').child(),

    listGist:           $('.css-truncate-target'),
    btnEdit:            $('a[aria-label="Edit this Gist"]'),
    btnUpdate:          $('.btn.btn-primary'),

    btnDelete:          $('button[aria-label="Delete this Gist"]')
}

export default gistPage;