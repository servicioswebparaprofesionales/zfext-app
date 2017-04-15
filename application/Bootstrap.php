<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{

    protected function _initPlaceholders()
    {
        $this->bootstrap('View');
        $view = $this->getResource('View');

        // Set doctype
        $view->doctype('HTML5');

        // Set title and separator
        $view->headTitle('Alegra Contactos')
             ->setSeparator(' :: ');

        // Set the initial meta tag
        $view->headMeta()->prependName('autor', 'Marcos Colina :: mjcrsis22.github.io');
        $view->headMeta()->prependName('keywords', 'Zend Framework, ExtJs, Alegra, Contactos');
        $view->headMeta()->prependName('viewport', 'width=device-width, initial-scale=1');

        // Set the initial stylesheet
        $view->headLink()->prependStylesheet('https://cdnjs.cloudflare.com/ajax/libs/extjs/4.2.1/resources/ext-theme-gray/ext-theme-gray-all.css');
        $view->headLink()->prependStylesheet('../public/js/extjs4/resources/css/ext-all.css');

        $view->headLink()->appendStylesheet('../public/css/styles-min.css');
        $view->headLink(array('rel' => 'favicon', 'href' => '../public/img/favicon2.png'), 'PREPEND');
        $view->headLink(array('rel' => 'shortcut icon', 'href' => '../public/img/favicon2.png'), 'PREPEND');

        // Set the initial JS to load
        $view->headScript()->prependFile('../public/js/extjs4/ext-all-debug.js');
        $view->headScript()->appendFile('../public/js/extjs4/resources/locale/ext-lang-es.js');
    }

}