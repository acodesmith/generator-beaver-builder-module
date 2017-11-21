<?php

namespace <%= namespace %>;

use FLBuilderModule;
use FLBuilder;

/**
 * <%= class_name %> Module
 */
// Define Module
class <%= class_name %> extends FLBuilderModule {

    public function __construct() {
        parent::__construct([
            'name'          => __( '<%= nice_name %>', 'label' ),
            'description'   => __( '<%= description %>', 'label' ),
            'group'         => __( '<%= group %>', 'label' ),
            'category'      => __( '<%= category %>', 'label' ),
            'dir'           => LABEL_DIR . 'modules/<%= dir %>/',
            'url'           => LABEL_URL . 'modules/<%= dir %>/',
            'icon'          => '<%= icon %>',
        ]);
    }
}

// Register Module
FLBuilder::register_module(__NAMESPACE__ . '\<%= class_name %>', [
    '<%= file_system_name %>-settings' => [
        'title' => __('Settings', 'label'),
        'sections' => [
            'setting-one' => [
                'title' => __( 'Section One', 'label' ),
                'fields' => [
                    'field-one' => [
                        'type' => 'text',
                        'label' => __( 'Field One', 'label' ),
                    ],
                ],
            ],
        ],
    ],
]);
