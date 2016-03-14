## GulpFile configuration for a local wordpress site
### description
This's a grunt file for a local wordpress developement.
it has to be load.
it include autoRefresh __page, minify css, minify js__.
### how to use it
In the gruntFile, change the above theme name[zikb] by your own theme name
```javascript
p = '*/wp-content/themes/[yourThemeName]/',
```
__ex__ : if your theme name is *mySuperThemeName*, you have to change *zikb* by *mySuperThemeName*
```javascript
p = '*/wp-content/themes/mySuperThemeName/',
```
### result
All change will be save un a folder name by the name of the name that's given to the worpress folder + dest.
__ex__ : For my the folder test\wp-content.... the destination folder name will be __test_dest__. 
And there will be a asset folder containing 

assets/       |         _    |  _ 
------------- | -------------|------------
|             |       /css/  | cssFiles   |
|             |       /img/  | imgFiles   |
|             |       /js/   | jsFiles    |
