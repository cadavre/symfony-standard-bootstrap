/*jslint sloppy: true, browser: true */
/*global jQuery, $ */

/**
 * A tiny 'Javascript framework' for Symfony.
 * It's more a coding convention than a framework.
 * Uses jQuery, guarantees JS from HTML code separation (no inline code at all).
 * Can coexist with jQueryReloaded plugin.
 *
 * @author janek
 * @version 2009-05-27
 */

var Symfony = {
    'settings': {
        'widgets': {},
        'components': {}
    },
    'behaviors': {},
    'widgets': {},
    'components': {
        'friends' : {}
    }
};

Symfony.typingInterval = 400;
Symfony.error500 = 'An error "500 Server Error" has been thrown! Report this to service administration.'

/**
 * Example:
 * Symfony.behaviors.myBehaviorName = function(arg1, arg2, ...) {...}
 */
Symfony.attachBehaviors = function (context) {
    context = context || document;
    jQuery.each(Symfony.behaviors, function () {
        this(context);
    });
};

jQuery(document).ready(function () {
    Symfony.attachBehaviors(this);
});
