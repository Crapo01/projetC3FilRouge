# projetC3FilRouge
SITE WEB DYNAMIQUE

code a rajouter dans HTACCESS du serveur pour rediriger les url vers la racine:

notes pour MSPR:
vu que react est SPA lors d'un refresh/ou access direct sur une autre url que la racine  on obtient un 404>>> 
ce code va rediriger l'url vers la racine et reconstituer le chemin pour que l'app sache quelle page afficher


<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

