<?php

/**
 * @file
 * Token callbacks for the token module.
 */

/**
 * Implements hook_token_info_alter().
 */
function token_token_info_alter(&$info) {
  // Force 'date' type tokens to require input and add a 'current-date' type.
  // @todo Remove when http://drupal.org/node/943028 is fixed.
  $info['types']['date']['needs-data'] = 'date';
  $info['types']['current-date'] = array(
    'name' => t('Current date'),
    'description' => t('Tokens related to the current date and time.'),
    'type' => 'date',
  );

  // Add a 'dynamic' key to any tokens that have chained but dynamic tokens.
  $info['tokens']['date']['custom']['dynamic'] = TRUE;

  // Remove deprecated tokens from being listed.
  unset($info['tokens']['node']['tnid']);
  unset($info['tokens']['node']['type']);
  unset($info['tokens']['node']['type-name']);

  // Add [token:path] tokens for any URI-able entities.
  $entities = entity_get_info();
  foreach ($entities as $entity => $entity_info) {
    if (!isset($entity_info['token type'])) {
      continue;
    }
    $token_type = $entity_info['token type'];

    // Add [entity:url] tokens if they do not already exist.
    // @todo Support entity:label
    if (!isset($info['tokens'][$token_type]['url']) && (!empty($entity_info['uri callback']) || !empty($entity_info['bundles'][$entity]['uri callback']))) {
      $info['tokens'][$token_type]['url'] = array(
        'name' => t('URL'),
        'description' => t('The URL of the @entity.', array('@entity' => drupal_strtolower($entity_info['label']))),
        'module' => 'token',
        'type' => 'url',
      );
    }
  }

  $info['tokens']['comment']['url']['type'] = 'url';
  //$info['tokens']['file']['url']['type'] = 'url';
  $info['tokens']['node']['url']['type'] = 'url';
  $info['tokens']['term']['url']['type'] = 'url';
  $info['tokens']['user']['url']['type'] = 'url';
  // @todo Support other tokens not named 'url'
}

/**
 * Implements hook_token_info().
 */
function token_token_info() {
  // Node tokens.
  $info['tokens']['node']['source'] = array(
    'name' => t('Translation source node'),
    'description' => t("The source node for this current node's translation set."),
    'type' => 'node',
  );
  $info['tokens']['node']['log'] = array(
    'name' => t('Revision log message'),
    'description' => t('The explanation of the most recent changes made to the node.'),
  );
  $info['tokens']['node']['content-type'] = array(
    'name' => t('Content type'),
    'description' => t('The content type of the node.'),
    'type' => 'content-type',
  );

  // Content type tokens.
  $info['types']['content-type'] = array(
    'name' => t('Content types'),
    'description' => t('Tokens related to content types.'),
    'needs-data' => 'content-type',
  );
  $info['tokens']['content-type']['name'] = array(
    'name' => t('Name'),
    'description' => t('The name of the content type.'),
  );
  $info['tokens']['content-type']['machine-name'] = array(
    'name' => t('Machine-readable name'),
    'description' => t('The unique machine-readable name of the content type.'),
  );
  $info['tokens']['content-type']['description'] = array(
    'name' => t('Description'),
    'description' => t('The optional description of the content type.'),
  );
  $info['tokens']['content-type']['node-count'] = array(
    'name' => t('Node count'),
    'description' => t('The number of nodes belonging to the content type.'),
  );
  $info['tokens']['content-type']['edit-url'] = array(
    'name' => t('Edit URL'),
    'description' => t("The URL of the content type's edit page."),
    //'type' => 'url',
  );

  // Taxonomy term and vocabulary tokens.
  if (module_exists('taxonomy')) {
    $info['tokens']['term']['edit-url'] = array(
      'name' => t('Edit URL'),
      'description' => t("The URL of the taxonomy term's edit page."),
      //'type' => 'url',
    );

    $info['tokens']['vocabulary']['machine-name'] = array(
      'name' => t('Machine-readable name'),
      'description' => t('The unique machine-readable name of the vocabulary.'),
    );
    $info['tokens']['vocabulary']['edit-url'] = array(
      'name' => t('Edit URL'),
      'description' => t("The URL of the vocabulary's edit page."),
      //'type' => 'url',
    );
  }

  // File tokens.
  $info['tokens']['file']['extension'] = array(
    'name' => t('Extension'),
    'description' => t('The extension of the file.'),
  );

  // User tokens.
  // Add information on the restricted user tokens.
  $info['tokens']['user']['cancel-url'] = array(
    'name' => t('Account cancellation URL'),
    'description' => t('The URL of the confirm delete page for the user account.'),
    'restricted' => TRUE,
    //'type' => 'url',
  );
  $info['tokens']['user']['one-time-login-url'] = array(
    'name' => t('One-time login URL'),
    'description' => t('The URL of the one-time login page for the user account.'),
    'restricted' => TRUE,
    //'type' => 'url',
  );
  if (variable_get('user_pictures', 0)) {
    $info['tokens']['user']['picture'] = array(
      'name' => t('Picture'),
      'description' => t('The picture of the user.'),
      'type' => 'file',
    );
  }
  $info['tokens']['user']['roles'] = array(
    'name' => t('Roles'),
    'description' => t('The user roles associated with the user account.'),
    'type' => 'array',
  );

  // Current user tokens.
  $info['tokens']['current-user']['ip-address'] = array(
    'name' => t('IP address'),
    'description' => 'The IP address of the current user.',
  );

  // Menu link tokens (work regardless if menu module is enabled or not).
  $info['types']['menu-link'] = array(
    'name' => t('Menu links'),
    'description' => t('Tokens related to menu links.'),
    'needs-data' => 'menu-link',
  );
  $info['tokens']['menu-link']['mlid'] = array(
    'name' => t('Link ID'),
    'description' => t('The unique ID of the menu link.'),
  );
  $info['tokens']['menu-link']['title'] = array(
    'name' => t('Title'),
    'description' => t('The title of the menu link.'),
  );
  $info['tokens']['menu-link']['url'] = array(
    'name' => t('URL'),
    'description' => t('The URL of the menu link.'),
    'type' => 'url',
  );
  $info['tokens']['menu-link']['parent'] = array(
    'name' => t('Parent'),
    'description' => t("The menu link's parent."),
    'type' => 'menu-link',
  );
  $info['tokens']['menu-link']['root'] = array(
    'name' => t('Root'),
    'description' => t("The menu link's root."),
    'type' => 'menu-link',
  );

  // Current page tokens.
  $info['types']['current-page'] = array(
    'name' => t('Current page'),
    'description' => t('Tokens related to the current page request.'),
  );
  $info['tokens']['current-page']['title'] = array(
    'name' => t('Title'),
    'description' => t('The title of the current page.'),
  );
  $info['tokens']['current-page']['url'] = array(
    'name' => t('URL'),
    'description' => t('The URL of the current page.'),
    'type' => 'url',
  );
  $info['tokens']['current-page']['page-number'] = array(
    'name' => t('Page number'),
    'description' => t('The page number of the current page when viewing paged lists.'),
  );
  $info['tokens']['current-page']['arg'] = array(
    'name' => t('Page argument'),
    'description' => t("The specific argument of the current page (e.g. 'arg:1' on the page 'node/1' returns '1')."),
    'dynamic' => TRUE,
  );

  // URL tokens.
  $info['types']['url'] = array(
    'name' => t('URL'),
    'description' => t('Tokens related to URLs.'),
    'needs-data' => 'url',
  );
  $info['tokens']['url']['path'] = array(
    'name' => t('Internal path'),
    'description' => t('The internal Drupal path of the URL.'),
  );
  $info['tokens']['url']['alias'] = array(
    'name' => t('Alias'),
    'description' => t('The alias of the URL.'),
  );
  $info['tokens']['url']['relative'] = array(
    'name' => t('Relative URL'),
    'description' => t('The relative URL.'),
  );
  $info['tokens']['url']['absolute'] = array(
    'name' => t('Absolute URL'),
    'description' => t('The absolute URL.'),
  );
  $info['tokens']['url']['brief'] = array(
    'name' => t('Brief URL'),
    'description' => t('The URL without the protocol and trailing backslash.'),
  );

  // Array tokens.
  $info['types']['array'] = array(
    'name' => t('Array'),
    'description' => t('Tokens related to arrays of strings.'),
    'needs-data' => 'array',
  );
  $info['tokens']['array']['first'] = array(
    'name' => t('First'),
    'description' => t('The first element of the array.'),
  );
  $info['tokens']['array']['last'] = array(
    'name' => t('Last'),
    'description' => t('The last element of the array.'),
  );
  $info['tokens']['array']['count'] = array(
    'name' => t('Count'),
    'description' => t('The number of elements in the array.'),
  );
  $info['tokens']['array']['reversed'] = array(
    'name' => t('Reversed'),
    'description' => t('The array reversed.'),
    'type' => 'array',
  );
  $info['tokens']['array']['keys'] = array(
    'name' => t('Keys'),
    'description' => t('The array of keys of the array.'),
    'type' => 'array',
  );
  $info['tokens']['array']['join'] = array(
    'name' => t('Imploded'),
    'description' => t('The values of the array joined together with a custom string in-between each value.'),
    'dynamic' => TRUE,
  );

  return $info;
}

/**
 * Implements hook_tokens().
 */
function token_tokens($type, $tokens, array $data = array(), array $options = array()) {
  $replacements = array();

  $url_options = array('absolute' => TRUE);
  if (isset($options['language'])) {
    $url_options['language'] = $options['language'];
    $language_code = $options['language']->language;
  }
  else {
    $language_code = NULL;
  }

  $sanitize = !empty($options['sanitize']);

  // Current date tokens.
  // @todo Remove when http://drupal.org/node/943028 is fixed.
  if ($type == 'current-date') {
    $replacements += token_generate('date', $tokens, array('date' => REQUEST_TIME), $options);
  }

  // Comment tokens.
  if ($type == 'comment' && !empty($data['comment'])) {
    $comment = $data['comment'];

    // Chained token relationships.
    if (($url_tokens = token_find_with_prefix($tokens, 'url'))) {
      $replacements += token_generate('url', $url_tokens, entity_uri('comment', $comment), $options);
    }
  }

  // Node tokens.
  if ($type == 'node' && !empty($data['node'])) {
    $node = $data['node'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'source':
          if (!empty($node->tnid) && $source_node = node_load($node->tnid)) {
            $title = $source_node->title;
            $replacements[$original] = $sanitize ? filter_xss($title) : $title;
          }
          break;
        case 'log':
          $replacements[$original] = $sanitize ? filter_xss($node->log) : $node->log;
          break;
        case 'content-type':
          $type_name = node_type_get_name($node);
          $replacements[$original] = $sanitize ? check_plain($type_name) : $type_name;
          break;
      }
    }

    // Chained token relationships.
    if (!empty($node->tnid) && ($source_tokens = token_find_with_prefix($tokens, 'source')) && $source_node = node_load($node->tnid)) {
      $replacements += token_generate('node', $source_tokens, array('node' => $source_node), $options);
    }
    if (($node_type_tokens = token_find_with_prefix($tokens, 'content-type')) && $node_type = node_type_load($node->type)) {
      $replacements += token_generate('content-type', $node_type_tokens, array('node_type' => $node_type), $options);
    }
    if (($url_tokens = token_find_with_prefix($tokens, 'url'))) {
      $replacements += token_generate('url', $url_tokens, entity_uri('node', $node), $options);
    }
  }

  // Content type tokens.
  if ($type == 'content-type' && !empty($data['node_type'])) {
    $node_type = $data['node_type'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'name':
          $replacements[$original] = $sanitize ? check_plain($node_type->name) : $node_type->name;
          break;
        case 'machine-name':
          // This is a machine name so does not ever need to be sanitized.
          $replacements[$original] = $node_type->type;
          break;
        case 'description':
          $replacements[$original] = $sanitize ? filter_xss($node_type->description) : $node_type->description;
          break;
        case 'node-count':
          $query = db_select('node');
          $query->condition('type', $node_type->type);
          $query->addTag('node_type_node_count');
          $count = $query->countQuery()->execute()->fetchField();
          $replacements[$original] = (int) $count;
          break;
        case 'edit-url':
          $replacements[$original] = url("admin/structure/types/manage/{$node_type->type}", $url_options);
          break;
      }
    }
  }

  // Taxonomy term tokens.
  if ($type == 'term' && !empty($data['term'])) {
    $term = $data['term'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'edit-url':
          $replacements[$original] = url("taxonomy/term/{$term->tid}/edit", $url_options);
          break;
      }
    }

    // Chained token relationships.
    if (($url_tokens = token_find_with_prefix($tokens, 'url'))) {
      $replacements += token_generate('url', $url_tokens, entity_uri('taxonomy_term', $term), $options);
    }
  }

  // Vocabulary tokens.
  if ($type == 'vocabulary' && !empty($data['vocabulary'])) {
    $vocabulary = $data['vocabulary'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'machine-name':
          // This is a machine name so does not ever need to be sanitized.
          $replacements[$original] = $vocabulary->machine_name;
          break;
        case 'edit-url':
          $replacements[$original] = url("admin/structure/taxonomy/{$vocabulary->machine_name}/edit", $url_options);
          break;
      }
    }
  }

  // File tokens.
  if ($type == 'file' && !empty($data['file'])) {
    $file = $data['file'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'extension':
          $extension = pathinfo($file->filename, PATHINFO_EXTENSION);
          $replacements[$original] = $sanitize ? check_plain($extension) : $extension;
          break;
      }
    }
  }

  // User tokens.
  if ($type == 'user' && !empty($data['user'])) {
    $account = $data['user'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'picture':
          if (variable_get('user_pictures', 0)) {
            $replacements[$original] = theme('user_picture', array('account' => $account));
          }
          break;
        case 'roles':
          $replacements[$original] = token_render_array($account->roles, $options);
          break;
      }
    }

    // Chained token relationships.
    if (variable_get('user_pictures', 0) && !empty($account->picture) && ($picture_tokens = token_find_with_prefix($tokens, 'picture'))) {
      // @todo Remove when core bug http://drupal.org/node/978028 is fixed.
      $account->picture->description = '';
      $replacements += token_generate('file', $picture_tokens, array('file' => $account->picture), $options);
    }
    if ($url_tokens = token_find_with_prefix($tokens, 'url')) {
      $replacements += token_generate('url', $url_tokens, entity_uri('user', $account), $options);
    }
    if ($role_tokens = token_find_with_prefix($tokens, 'roles')) {
      $replacements += token_generate('array', $role_tokens, array('array' => $account->roles), $options);
    }
  }

  // Current user tokens.
  if ($type == 'current-user') {
    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'ip-address':
          $ip = ip_address();
          $replacements[$original] = $sanitize ? check_plain($ip) : $ip;
          break;
      }
    }
  }

  // Menu link tokens.
  if ($type == 'menu-link' && !empty($data['menu-link'])) {
    $link = (array) $data['menu-link'];

    if (!isset($link['title'])) {
      // Re-load the link if it was not loaded via token_menu_link_load().
      $link = token_menu_link_load($link['mlid']);
    }

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'mlid':
          $replacements[$original] = $link['mlid'];
          break;
        case 'title':
          $replacements[$original] = $sanitize ? check_plain($link['title']) : $link['title'];
          break;
        case 'url':
          $replacements[$original] = url($link['href'], $url_options);
          break;
        case 'parent':
          if (!empty($link['plid']) && $parent = token_menu_link_load($link['plid'])) {
            $replacements[$original] = $sanitize ? check_plain($parent['title']) : $parent['title'];
          }
          break;
        case 'root';
          if (!empty($link['p1']) && $link['p1'] != $link['mlid'] && $root = token_menu_link_load($link['p1'])) {
            $replacements[$original] = $sanitize ? check_plain($root['title']) : $root['title'];
          }
          break;
      }
    }

    // Chained token relationships.
    if (!empty($link['plid']) && ($source_tokens = token_find_with_prefix($tokens, 'parent')) && $parent = token_menu_link_load($link['plid'])) {
      $replacements += token_generate('menu-link', $source_tokens, array('menu-link' => $parent), $options);
    }
    if (!empty($link['p1']) && $link['p1'] != $link['mlid'] && ($root_tokens = token_find_with_prefix($tokens, 'root')) && $root = token_menu_link_load($link['p1'])) {
      $replacements += token_generate('menu-link', $root_tokens, array('menu-link' => $root), $options);
    }
    if ($url_tokens = token_find_with_prefix($tokens, 'url')) {
      $replacements += token_generate('url', $url_tokens, array('path' => $link['href']), $options);
    }
  }

  // Current page tokens.
  if ($type == 'current-page') {
    $current_path = current_path();

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'title':
          $replacements[$original] = drupal_get_title();
          break;
        case 'url':
          $replacements[$original] = url($current_path, $url_options);
          break;
        case 'page-number':
          if ($page = filter_input(INPUT_GET, 'page')) {
            // @see PagerDefault::execute()
            $pager_page_array = explode(',', $page);
            $page = $pager_page_array[0];
          }
          $replacements[$original] = (int) $page + 1;
          break;
      }
    }

    // Argument tokens.
    if ($arg_tokens = token_find_with_prefix($tokens, 'arg')) {
      foreach ($arg_tokens as $name => $original) {
        if (is_numeric($name) && ($arg = arg($name)) && isset($arg)) {
          $replacements[$original] = $sanitize ? check_plain($arg) : $arg;
        }
      }
    }

    // Chained token relationships.
    if ($url_tokens = token_find_with_prefix($tokens, 'url')) {
      $replacements += token_generate('url', $url_tokens, array('path' => $current_path), $options);
    }
  }

  // URL tokens.
  if ($type == 'url' && !empty($data['path'])) {
    $path = $data['path'];

    if (isset($data['options'])) {
      // Merge in the URL options if available.
      $url_options = $data['options'] + $url_options;
    }

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'path':
          $replacements[$original] = $sanitize ? check_plain($path) : $path;
          break;
        case 'alias':
          $alias = drupal_get_path_alias($path, $language_code);
          $replacements[$original] = $sanitize ? check_plain($alias) : $alias;
          break;
        case 'absolute':
          $replacements[$original] = url($path, $url_options);
          break;
        case 'relative':
          $replacements[$original] = url($path, array('absolute' => FALSE) + $url_options);
          break;
        case 'brief':
          $replacements[$original] = preg_replace(array('!^https?://!', '!/$!'), '', url($path, $url_options));
          break;
      }
    }
  }

  // Entity tokens.
  if (!empty($data[$type]) && $entity_type = token_get_entity_mapping('token', $type)) {
    $entity = $data[$type];

    // Sometimes taxonomy terms are not properly loaded.
    // @see http://drupal.org/node/870528
    if ($entity_type == 'taxonomy_term' && !isset($entity->vocabulary_machine_name)) {
      $entity->vocabulary_machine_name = db_query("SELECT machine_name FROM {taxonomy_vocabulary} WHERE vid = :vid", array(':vid' => $entity->vid))->fetchField();
    }

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'url':
          if (_token_module($type, 'url') == 'token' && $uri = entity_uri($entity_type, $entity)) {
            $replacements[$original] = url($uri['path'], $uri['options']);
          }
          break;
      }
    }

    // Chained token relationships.
    if (($url_tokens = token_find_with_prefix($tokens, 'url')) && _token_module($type, 'url') == 'token') {
      $replacements += token_generate('url', $url_tokens, entity_uri($entity_type, $entity), $options);
    }
  }

  // Array tokens.
  if ($type == 'array' && !empty($data['array']) && is_array($data['array'])) {
    $array = $data['array'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'first':
          $first = reset($array);
          $replacements[$original] = token_render_array_value($first, $options);
          reset($array);
          break;
        case 'last':
          $last = end($array);
          $replacements[$original] = token_render_array_value($last, $options);
          reset($array);
          break;
        case 'count':
          $replacements[$original] = count($array);
          break;
        case 'keys':
          $keys = array_keys($array);
          $replacements[$original] = token_render_array($keys, $options);
          break;
        case 'reversed':
          $reversed = array_reverse($array, TRUE);
          $replacements[$original] = token_render_array($reversed, $options);
          break;
        case 'join':
          $replacements[$original] = token_render_array($array, array('join' => '') + $options);
          break;
      }
    }

    // Dynamic tokens.
    if ($value_tokens = token_find_with_prefix($tokens, 'value')) {
      foreach ($value_tokens as $key => $original) {
        if (isset($array[$key])) {
          $replacements[$original] = token_render_array_value($array[$key], $options);
        }
      }
    }
    if ($join_tokens = token_find_with_prefix($tokens, 'join')) {
      foreach ($join_tokens as $join => $original) {
        $replacements[$original] = token_render_array($array, array('join' => $join) + $options);
      }
    }

    // Chained token relationships.
    if ($key_tokens = token_find_with_prefix($tokens, 'keys')) {
      $replacements += token_generate('array', $key_tokens, array('array' => array_keys($array)), $options);
    }
    if ($reversed_tokens = token_find_with_prefix($tokens, 'reversed')) {
      $replacements += token_generate('array', $reversed_tokens, array('array' => array_reverse($array, TRUE)), $options);
    }

    // @todo Handle if the array values are not strings and could be chained.
  }

  // If $type is a token type, $data[$type] is empty but $data[$entity_type] is
  // not, re-run token replacements.
  if (empty($data[$type]) && ($entity_type = token_get_entity_mapping('token', $type)) && $entity_type != $type && !empty($data[$entity_type]) && empty($options['recursive'])) {
    $data[$type] = $data[$entity_type];
    $options['recursive'] = TRUE;
    $replacements += module_invoke_all('tokens', $type, $tokens, $data, $options);
  }

  return $replacements;
}

/**
 * Implements hook_token_info() on behalf of book.module.
 */
function book_token_info() {
  $info['tokens']['node']['book'] = array(
    'name' => t('Book'),
    'description' => t('The book page associated with the node.'),
    'type' => 'menu-link',
  );
  return $info;
}

/**
 * Implements hook_tokens() on behalf of book.module.
 */
function book_tokens($type, $tokens, array $data = array(), array $options = array()) {
  $replacements = array();
  $sanitize = !empty($options['sanitize']);

  // Node tokens.
  if ($type == 'node' && !empty($data['node'])) {
    $node = $data['node'];

    if (!empty($node->book['mlid'])) {
      $link = token_book_link_load($node->book['mlid']);

      foreach ($tokens as $name => $original) {
        switch ($name) {
          case 'book':
            $replacements[$original] = $sanitize ? check_plain($link['title']) : $link['title'];
            break;
        }
      }

      // Chained token relationships.
      if ($book_tokens = token_find_with_prefix($tokens, 'book')) {
        $replacements += token_generate('menu-link', $book_tokens, array('menu-link' => $link), $options);
      }
    }
  }

  return $replacements;
}

/**
 * Implements hook_token_info() on behalf of menu.module.
 */
function menu_token_info() {
  // Menu tokens.
  $info['types']['menu'] = array(
    'name' => t('Menus'),
    'description' => t('Tokens related to menus.'),
    'needs-data' => 'menu',
  );
  $info['tokens']['menu']['name'] = array(
    'name' => t('Name'),
    'description' => t("The name of the menu."),
  );
  $info['tokens']['menu']['machine-name'] = array(
    'name' => t('Machine-readable name'),
    'description' => t("The unique machine-readable name of the menu."),
  );
  $info['tokens']['menu']['description'] = array(
    'name' => t('Description'),
    'description' => t('The optional description of the menu.'),
  );
  $info['tokens']['menu']['menu-link-count'] = array(
    'name' => t('Menu link count'),
    'description' => t('The number of menu links belonging to the menu.'),
  );
  $info['tokens']['menu']['edit-url'] = array(
    'name' => t('Edit URL'),
    'description' => t("The URL of the menu's edit page."),
  );

  $info['tokens']['menu-link']['menu'] = array(
    'name' => t('Menu'),
    'description' => t('The menu of the menu link.'),
    'type' => 'menu',
  );
  $info['tokens']['menu-link']['edit-url'] = array(
    'name' => t('Edit URL'),
    'description' => t("The URL of the menu link's edit page."),
  );
  $info['tokens']['node']['menu-link'] = array(
    'name' => t('Menu link'),
    'description' => t("The menu link for this node."),
    'type' => 'menu-link',
  );

  return $info;
}

/**
 * Implements hook_tokens() on behalf of menu.module.
 */
function menu_tokens($type, $tokens, array $data = array(), array $options = array()) {
  $replacements = array();

  $url_options = array('absolute' => TRUE);
  if (isset($options['language'])) {
    $url_options['language'] = $options['language'];
    $language_code = $options['language']->language;
  }
  else {
    $language_code = NULL;
  }

  $sanitize = !empty($options['sanitize']);

  // Node tokens.
  if ($type == 'node' && !empty($data['node'])) {
    $node = $data['node'];

    if (!isset($node->menu)) {
      // Nodes do not have their menu links loaded via menu_node_load().
      menu_node_prepare($node);
    }

    if (!empty($node->menu['mlid'])) {
      $link = token_menu_link_load($node->menu['mlid']);

      foreach ($tokens as $name => $original) {
        switch ($name) {
          case 'menu-link':
            $replacements[$original] = $sanitize ? check_plain($link['title']) : $link['title'];
            break;
        }
      }

      // Chained token relationships.
      if ($menu_tokens = token_find_with_prefix($tokens, 'menu-link')) {
        $replacements += token_generate('menu-link', $menu_tokens, array('menu-link' => $link), $options);
      }
    }
  }

  // Menu link tokens.
  if ($type == 'menu-link' && !empty($data['menu-link'])) {
    $link = (array) $data['menu-link'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'menu':
          if ($menu = menu_load($link['menu_name'])) {
            $replacements[$original] = $sanitize ? check_plain($menu['title']) : $menu['title'];
          }
          break;
        case 'edit-url':
          $replacements[$original] = url("admin/structure/menu/item/{$link['mlid']}/edit", $url_options);
          break;
      }
    }

    // Chained token relationships.
    if (($menu_tokens = token_find_with_prefix($tokens, 'menu')) && $menu = menu_load($link['menu_name'])) {
      $replacements += token_generate('menu', $menu_tokens, array('menu' => $menu), $options);
    }
  }

  // Menu tokens.
  if ($type == 'menu' && !empty($data['menu'])) {
    $menu = (array) $data['menu'];

    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'name':
          $replacements[$original] = $sanitize ? check_plain($menu['title']) : $menu['title'];
          break;
        case 'machine-name':
          // This is a machine name so does not ever need to be sanitized.
          $replacements[$original] = $menu['menu_name'];
          break;
        case 'description':
          $replacements[$original] = $sanitize ? filter_xss($menu['description']) : $menu['description'];
          break;
        case 'menu-link-count':
          $query = db_select('menu_links');
          $query->condition('menu_name', $menu['menu_name']);
          $query->addTag('menu_menu_link_count');
          $count = $query->countQuery()->execute()->fetchField();
          $replacements[$original] = (int) $count;
          break;
        case 'edit-url':
          $replacements[$original] = url("admin/structure/menu/manage/" . $menu['menu_name'], $url_options);
          break;
      }
    }
  }

  return $replacements;
}

/**
 * Implements hook_token_info() on behalf of profile.module.
 */
function profile_token_info() {
  $info = array();

  foreach (_token_profile_fields() as $field) {
    $info['tokens']['user'][$field->token_name] = array(
      'name' => check_plain($field->title),
      'description' => t('@category @type field.', array('@category' => drupal_ucfirst($field->category), '@type' => $field->type)),
    );

    switch ($field->type) {
      case 'date':
        $info['tokens']['user'][$field->token_name]['type'] = 'date';
        break;
    }
  }

  return $info;
}

/**
 * Implements hook_tokens() on behalf of profile.module.
 */
function profile_tokens($type, $tokens, array $data = array(), array $options = array()) {
  $replacements = array();
  $sanitize = !empty($options['sanitize']);
  $language_code = isset($options['language']) ? $options['language']->language : NULL;

  if ($type == 'user' && !empty($data['user'])) {
    $account = $data['user'];

    // Load profile fields if this is the global user account.
    // @see http://drupal.org/node/361471
    // @see http://drupal.org/node/967330
    if ($account->uid == $GLOBALS['user']->uid && isset($account->timestamp)) {
      $profile_users = array($account->uid => $account);
      profile_user_load($profile_users);
      $account = $profile_users[$account->uid];
    }

    $profile_fields = _token_profile_fields();
    foreach ($tokens as $name => $original) {
      if (isset($profile_fields[$name]) && !empty($account->{$profile_fields[$name]->name})) {
        $value = $account->{$profile_fields[$name]->name};
        switch ($profile_fields[$name]->type) {
          case 'textarea':
            $replacements[$original] = $sanitize ? check_markup($value, filter_default_format($account), '', TRUE) : $value;
            break;
          case 'date':
            $timestamp = gmmktime(0, 0, 0, $value['month'], $value['day'], $value['year']);
            $replacements[$original] = format_date($timestamp, 'medium', '', NULL, $language_code);
            break;
          case 'url':
            $replacements[$original] = $sanitize ? check_url($value) : $value;
            break;
          case 'checkbox':
            // Checkbox field if checked should return the text.
            $replacements[$original] = $sanitize ? check_plain($profile_fields[$name]->title) : $profile_fields[$name]->title;
            break;
          case 'list':
            $value = preg_split("/[,\n\r]/", $value);
            $value = array_map('trim', $value);
            $value = implode(', ', $value);
            // Intentionally fall through to the default condition.
          default:
            $replacements[$original] = $sanitize ? check_plain($value) : $value;
            break;
        }
      }
    }

    // Chained token relationships.
    foreach ($profile_fields as $field) {
      if ($field->type == 'date' && isset($account->{$field->name}) && $field_tokens = token_find_with_prefix($tokens, $field->token_name)) {
        $date = $account->{$field->name};
        $replacements += token_generate('date', $field_tokens, array('date' => gmmktime(0, 0, 0, $date['month'], $date['day'], $date['year'])), $options);
      }
    }
  }

  return $replacements;
}

/**
 * Fetch an array of profile field objects, keyed by token name.
 */
function _token_profile_fields() {
  $fields = &drupal_static(__FUNCTION__);

  if (!isset($fields)) {
    $fields = array();
    $results = db_query("SELECT name, title, category, type FROM {profile_field}");
    foreach ($results as $field) {
      $field->token_name = token_clean_token_name($field->name);
      $fields[$field->token_name] = $field;
    }
  }

  return $fields;
}
