<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_single_page');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'C-ylb>csDVDt~*u<)/:|CdZ1d/JL[US9u-.AN!0A])*B_l8b1A(|8NwA>tfH#3eS');
define('SECURE_AUTH_KEY',  ' B=p|Q~TMH7nhWX]6>vH&wN5a#6;R*eeH@CXzsGrxL~S*QL}UYh_3c28HU#qF;_p');
define('LOGGED_IN_KEY',    '.ZF_@MjcMvt?vuv]F4Iq_nW;cv|7!%a*59Z;T5Eq>mzK (,qJ#`_< _v=iP3)6m~');
define('NONCE_KEY',        'x4F{#!{^KC=9!rE5w:K[] ^W5h+F)/v.DFEUf$U>z;?_L|Q3UJX@Hwa(B$3bOf.y');
define('AUTH_SALT',        'S^VM%+6Yf24@ec/]y3d>ci+Y~>L: [#f:LeD=Jr-1WBA1dG+@n%b=CteHTih&4Bo');
define('SECURE_AUTH_SALT', '{> @Dh4n|Tvj)lff;Vu7Jpse[CpLOd!t!aCSx8w4T#y3PCZTkbx/C8XvxRhTS=$]');
define('LOGGED_IN_SALT',   'cd9q_&|#ER|fsD.--[b@IToa=A^CvpsB;|sIJ}l:3CWt.2*lKt%%k4mKe4mqCumB');
define('NONCE_SALT',       '^{~r(doB(?6m&}/D]xWT)%Bcn~D]E)PDjVlm^Rsa#;QVvPyBU[f=wl>X6i~l<:H{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
