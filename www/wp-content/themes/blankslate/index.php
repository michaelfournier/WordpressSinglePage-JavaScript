<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
<meta http-equiv="X-UA-Compatible" content="chrome=IE8" />
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/stylesheets/app.css" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="application/atom+xml" title="<?php bloginfo('name'); ?> Atom Feed" href="<?php bloginfo('atom_url'); ?>" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<script src="<? bloginfo('stylesheet_directory') ?>/javascripts/vendor.js"></script>
<script src="<? bloginfo('stylesheet_directory') ?>/javascripts/templates.js"></script>
<script src="<? bloginfo('stylesheet_directory') ?>/javascripts/app.js"></script>
<script>require('initialize');</script>

<!-- Google ChromeFrame for IE 8 and less  -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>

<?php wp_head(); ?>

</head>
<body>
	
<!-- BEGIN #container -->
<div id="container">
	
	<!-- BEGIN #content-page -->
	<div id="content-page">
		
		
	</div>
	<!-- END #content-page -->
</div>
<!-- END #container -->

</body>
</html>
