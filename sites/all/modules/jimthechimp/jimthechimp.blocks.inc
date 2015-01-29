<?php

/**
 * Implements hook_block
 */
function jtc_block($op = 'list', $delta = 0, $edit = array()) {
  
  switch($op) {
    case 'list':
      $blocks = array();
      $blocks['test-block'] = array(
      	'info' => t('Test Block')
      );
      return $blocks;
    case 'view':
      switch($delta) {
        case 'test-block':
        	return array(
        		'subject' => '',
        		'content' => jtc_testblock()
        	);
      }
  }
}