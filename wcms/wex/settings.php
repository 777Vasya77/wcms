<?php
/**
 * WCMS - WEX Simple CMS
 * https://github.com/vedees/wcms
 * Copyright (C) 2018 Evgenii Vedegis <vedegis@gmail.com>
 * https://github.com/vedees/wcms/blob/master/LICENSE
 */
require 'core/initialize.php';
$user = new Login;
$user->require_login();?>

<?php $page_title = 'WEX CMS - Dashboard';
      $page = 'settings';?>

<?php include('includes/header.php') ?>

<section>
  <div class="container">
    <h1 class="ui-title-1"> <?php echo $lang['settings'] ?> </h1>
    <p> <?php echo $lang['settingsDescr'] ?> </p>
  </div>
</section>

<section>
  <div class="container container--small">
    <form class="settings__form" action='settings.php' method="GET">
      <!-- Language -->
      <div class="setting__wrapper">
        <span class="ui-text-regular"> <?php echo $lang['settingsLanguage'] ?>:</span>
        <select name="lang">
          <?php
            foreach ($lang_choices as $lang_choice) {
              echo "<option value=\"{$lang_choice}\"";
              if ($_SESSION['lang'] == $lang_choice) {
                echo " selected";
              }
              echo ">{$lang_choice}</option>";
            }
          ?>
        </select>
      </div>

      <!-- Theme -->
      <div class="setting__wrapper">
        <span class="ui-text-regular"> <?php echo $lang['settingsTheme'] ?>:</span>
        <select name="theme">
          <?php
            foreach ($theme_choices as $theme_choice) {
              echo "<option value=\"{$theme_choice}\"";
              if ($_SESSION['theme'] == $theme_choice) {
                echo " selected";
              }
              echo ">{$theme_choice}</option>";
            }
          ?>
        </select>
      </div>

      <!-- Code Theme -->
      <div class="setting__wrapper">
        <span class="ui-text-regular"> <?php echo $lang['settingsThemeCode'] ?>:</span>
        <select name="editor_theme">
          <?php
            foreach ($editor_theme_choices as $editor_theme_choice) {
              echo "<option value=\"{$editor_theme_choice}\"";
              if ($_SESSION['editor_theme'] == $editor_theme_choice) {
                echo " selected";
              }
              echo ">{$editor_theme_choice}</option>";
            }
          ?>
        </select>
      </div>
      <div class="button-list">
        <button class="button button-primary button--round" type="submit"> <?php echo $lang['save'] ?></button>
      </div>
    </form>
    </div>
  </div>
</section>


<?php include('includes/footer.php') ?>
