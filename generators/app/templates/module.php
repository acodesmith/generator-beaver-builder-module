<?php

namespace <%= namespace %>\<%= class_name %>;

use FLBuilderModule;
use FLBuilder;

/**
 * What's on Tap List Module
 */
// Define Module
class <%= class_name %> extends FLBuilderModule
{
    public function __construct()
    {
        parent::__construct([
            'name'          => __('<%= nice_name %>', 'label'),
            'description'   => __('<%= description %>', 'label'),
            'group'         => __('<%= group %>', 'label'),
            'category'      => __('<%= category %>', 'label'),
            'dir'           => LABEL_DIR . 'modules/<%= dir %>/',
            'url'           => LABEL_URL . 'modules/<%= dir %>/',
            'icon'          => '<%= icon %>',
            'editor_export' => true, // Defaults to true and can be omitted.
            'enabled'       => true, // Defaults to true and can be omitted.
        ]);
    }
}

// Register Module
FLBuilder::register_module(__NAMESPACE__ . '\<%= class_name %>', [
    '<%= file_system_name %>-settings' => [],
]);
