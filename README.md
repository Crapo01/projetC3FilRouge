# projetC3FilRouge
SITE WEB DYNAMIQUE

code a rajouter dans HTACCESS du serveur pour rediriger les url vers la racine:

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

